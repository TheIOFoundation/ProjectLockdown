import Database from '../repositories/Database';
import Snapshot from '../types/Snapshot';
import Moment, { MomentRange } from 'moment-timezone';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const MAXIMUM_RANGE_IN_DAYS = 70;

const MEASURE = {
  YES: '1',
  PARTIAL: '2',
  NO: '3',
  UNCLEAR: '4',
};

export const MEASURES = [
  'max_gathering',
  'measure.lockdown_status',
  'measure.city_movement_restriction',
  'measure.attending_religious_sites',
  'measure.going_to_work',
  'measure.military_not_deployed',
  'measure.academia_allowed',
  'measure.going_to_shops',
  'measure.electricity_nominal',
  'measure.water_nominal',
  'measure.internet_nominal',
  'land.local',
  'land.nationals_inbound',
  'land.nationals_outbound',
  'land.foreigners_inbound',
  'land.foreigners_outbound',
  'land.cross_border_workers',
  'land.commerce',
  'land.stopovers',
  'flight.local',
  'flight.nationals_inbound',
  'flight.nationals_outbound',
  'flight.foreigners_inbound',
  'flight.foreigners_outbound',
  'flight.cross_border_workers',
  'flight.commerce',
  'flight.stopovers',
  'sea.local',
  'sea.nationals_inbound',
  'sea.nationals_outbound',
  'sea.foreigners_inbound',
  'sea.foreigners_outbound',
  'sea.cross_border_workers',
  'sea.commerce',
  'sea.stopovers',
];

export default class SnapshotsService {
  /**
   *
   * @param {Database} database
   */
  constructor(database) {
    this.database = database;
    this.population = require('../../data/population.json');
  }

  /**
   * @async
   * @param {string} iso
   * @param {Date} startDate
   * @param {Date} endDate
   * @returns {Snapshot[]}
   */
  async getSnapshots(iso, startDate, endDate) {
    if (moment(startDate).isAfter(endDate)) {
      throw 'Start date should be less than end date';
    }

    if (moment(endDate).diff(startDate, 'days') > MAXIMUM_RANGE_IN_DAYS) {
      throw `Maximum date range is ${MAXIMUM_RANGE_IN_DAYS} days`;
    }

    let ranges = await this.database.snapshotRepository.getByTerritoryAndDateRange(iso, startDate, endDate).toArray();

    var snapshots = {};
    for (let currentDate of moment.range(startDate, endDate).by('days')) {
      var filteredRanges = ranges.filter((r) => currentDate.isAfter(r.start_date) && currentDate.isBefore(r.end_date));
      snapshots[currentDate.format('YYYY-MM-DD')] = this._buildSnapshot(iso, filteredRanges);
    }
    return snapshots;
  }

  /**
   * @async
   * @param {string} iso3
   * @param {Date} date
   * @returns {Snapshot[]}
   */
  async getSnapshot(iso, date) {
    let ranges = await this.database.snapshotRepository
      .getByTerritoryAndDate(iso, date)
      .toArray();

    return this._buildSnapshot(iso, ranges);
  }

  /**
   * 
   * @param {Date} date 
   */
  async getWorldLockdownSnaphots(date) {
    let rangesByCountry = await this.database.snapshotRepository
      .getByDateGroupByCountries(date)
      .toArray();

    return rangesByCountry.map(
      (countryRange) => this._buildSnapshotByMeasures(
        countryRange._id,
        countryRange.ranges,
        ['measure.lockdown_status'])
    );
  }

  async getTotalsLockdown(startDate, endDate) {
    if (moment(startDate).isAfter(endDate)) {
      throw 'Start date should be less than end date';
    }

    if (moment(endDate).diff(startDate, 'days') > MAXIMUM_RANGE_IN_DAYS) {
      throw `Maximum date range is ${MAXIMUM_RANGE_IN_DAYS} days`;
    }

    var ranges = await this.database.snapshotRepository
      .getByMeasureAndDateRange(startDate, endDate, ['measure.lockdown_status'])
      .toArray();

    var result = {};

    for (let currentDate of moment.range(startDate, endDate).by('days')) {
      result[currentDate.format("YYYY-MM-DD")] = this._sumTotalsLockdown(ranges, currentDate);
    }

    return result;
  }

  _sumTotalsLockdown(ranges, date) {
    const countries = {};
    var affected = 0;
    var lockdown = ranges
      .filter(r => date.isAfter(r.start_date) && date.isBefore(r.end_date))
      .reduce((prev, range) => {
        if (!countries[range.iso2] && this._isLockdown(range.measures[0].value)) {
          countries[range.iso2] = true;
          affected += +this.population[range.iso2]?.Population || 0;
          return prev + 1;
        }
        return prev;
      }, 0)

    return { lockdown, affected };
  }

  /**
   * 
   * @param {Date} date 
   */
  async getWorldLockdownSnaphotsByRange(startDate, endDate) {
    if (moment(startDate).isAfter(endDate)) {
      throw 'Start date should be less than end date';
    }

    if (moment(endDate).diff(startDate, 'days') > MAXIMUM_RANGE_IN_DAYS) {
      throw `Maximum date range is ${MAXIMUM_RANGE_IN_DAYS} days`;
    }

    var rangesByCountry = await this.database.snapshotRepository
      .getByDateRangeGroupByCountries(startDate, endDate)
      .toArray();

    var snapshots = {};
    for (let currentDate of moment.range(startDate, endDate).by('days')) {

      let rangesByCountryByDate = rangesByCountry.map(r => {
        return {
          _id: r._id,
          ranges: r.ranges
            .filter((r) => currentDate.isAfter(r.start_date) && currentDate.isBefore(r.end_date))
        }
      });

      snapshots[currentDate.format("YYYY-MM-DD")] = rangesByCountryByDate.map(
        (countryRange) => this._buildSnapshotByMeasures(
          countryRange._id,
          countryRange.ranges,
          ['measure.lockdown_status'])
      );
    }
    return snapshots;
  }

  async getSnapshotsByMeasures(iso, startDate, endDate, measures) {
    if (!Array.isArray(measures)) {
      measures = [measures];
    }

    if (moment(startDate).isAfter(endDate)) {
      throw 'Start date should be less than end date';
    }

    if (moment(endDate).diff(startDate, 'days') > MAXIMUM_RANGE_IN_DAYS) {
      throw `Maximum date range is ${MAXIMUM_RANGE_IN_DAYS} days`;
    }

    var snapshots = await this.database.snapshotRepository
      .getByIsoAndMeasureAndDateRange(iso, startDate, endDate, measures)
      .toArray();

    var result = [];
    snapshots.forEach(s => {
      result = result.concat(s.measures.map(m => {
        var keys = m.label.split('.');
        return {
          [`#npi+num+${m.label.replace('.', '+').replace('_', '+')}`]: m.value,
          label: keys[1],
          value: m.value,
          name: m.label,
          '#date+start': s.start_date,
          '#date+end': s.end_date,
          '#meta+url': s.source_url,
          '#country+code+iso3': s.iso3,
        };
      }));
    });
    return { iso: iso, measures: result };
  }

  /**
   * @private
   */
  _mergeDatapoints(result, containers, prefix) {
    MEASURES.filter((m) => m.startsWith(prefix)).forEach((measureKey) => {
      let measureValue = this._getValueFromContainers(containers, measureKey);
      let keys = measureKey.split('.');
      if (!result[keys[0]]) {
        result[keys[0]] = [];
      }
      result[keys[0]].push(this._buildResult(measureValue, measureKey));
    });
  }

  /** @private */
  _buildSnapshot(iso, ranges) {
    let result = this._buildSnapshotByMeasures(
      iso,
      ranges,
      ['max_gathering', 'measure', 'land', 'flight', 'sea']
    );

    return result;
  }

  /** @private */
  _buildSnapshotByMeasures(iso, ranges, measures) {
    let entry = { iso: iso };
    var allMeasures = ranges.map((r) => {
      return { measures: r.measures, range: r };
    });
    measures.forEach(measure => {
      this._mergeDatapoints(entry, allMeasures, measure);
    });
    return { lockdown: entry };
  }

  /** @private */
  _buildResult(measureValue, measureKey) {
    let keys = measureKey.split('.');
    return {
      label: keys[1] || measureKey,
      value: measureValue.value,
      name: measureKey,
      [`#npi+num+${measureKey.replace('.', '+').replace('_', '+')}`]: measureValue.value,
      '#date+start': measureValue.range?.start_date,
      '#date+end': measureValue.range?.end_date,
      '#meta+url': measureValue.range?.source_url,
      '#country+code+iso3': measureValue.range?.iso3,
    };
  }

  /** @private */
  _getValueFromContainers(containers, key) {
    let result = { value: null, range: null };
    containers.forEach((container) => {
      let element = container.measures.find((el) => el.label == key);
      if (element) {
        result = { range: container.range, value: element.value };
        return;
      }
    });
    return result;
  }

  _isLockdown(value) {
    return value === MEASURE.YES || value === MEASURE.PARTIAL;
  }
}
