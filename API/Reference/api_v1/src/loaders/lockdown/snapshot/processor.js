import Moment, { MomentRange } from '../../../utils/moment';
import { extendMoment } from 'moment-range';
import { isEntryActive } from '../../../utils/typeHelper';
import Entry from '../../../types/Entry';
import get from 'lodash/get';

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
  'sea.stopovers'
];

const moment = extendMoment(Moment);

export const GLOBAL_FIRST_DATE = moment('01-11-2019', 'DD-MM-YYYY');
export const GLOBAL_LAST_DATE = moment('30-04-2022', 'DD-MM-YYYY');

/**
 * Gets snapshots in range
 * TODO: Handle case where entry start/end dates are more than globals?
 * @param {Entry[]} entries
 * @param {MomentRange} startDate
 * @param {MomentRange} endDate
 */
export function getSnapshots(entries) {
  // Filter to only "Active" sheets
  const activeEntries = entries.filter(entry => isEntryActive(entry.status));

  // Sort according to date of issuance (latest first)
  activeEntries.sort((a, b) => b.source_date_of_issuance?.unix() - a.source_date_of_issuance?.unix())

  let ranges = [];
  activeEntries.forEach(entry => {
    fillRanges(ranges, entry);
  });

  return ranges;
}

function fillRanges(ranges, entry) {
  MEASURES.forEach(measureKey => {
    let dataPoint = getDataPoint(entry, measureKey);
    if (!dataPoint) {

      return;
    }

    let range = ranges
      .find(r =>
        moment(r.start_date).isSame(moment(dataPoint.start_date))
        && moment(r.end_date).isSame(moment(dataPoint.end_date))
        && r.unique_id == dataPoint.unique_id);

    var measure = {
      value: dataPoint.value,
      label: dataPoint.label,
    };

    if (range) {
      range.measures.push(measure);
    } else {
      ranges.push({
        source_name: dataPoint.source_name,
        source_url: dataPoint.source_url,
        unique_id: dataPoint.unique_id,
        issue_id: dataPoint.issue_id,
        start_date: dataPoint.start_date,
        end_date: dataPoint.end_date,
        unique_id: dataPoint.unique_id,
        measures: [measure]
      })
    }
  })
}

function getDataPoint(entry, key) {
  const dataPoint = get(entry, key);

  // No value defined, skip this entry
  // TODO: Or should it break and let the value as undefined?
  // Current behaviour is it will search in entries beneath
  if (dataPoint == undefined || (typeof dataPoint == 'object' && dataPoint.value == undefined)) {
    return;
  }

  const entryStartDate = entry.source_start_date ?? entry.source_date_of_issuance ?? GLOBAL_FIRST_DATE;
  const entryEndDate = entry.source_end_date ?? GLOBAL_LAST_DATE;

  // Datapoint dates with default to entry
  const dataPointStartDate = dataPoint?.start_date ?? entryStartDate;
  const dataPointEndDate = dataPoint?.end_date ?? entryEndDate;

  return {
    start_date: dataPointStartDate.toDate(),
    end_date: dataPointEndDate.toDate(),
    value: dataPoint.value,
    label: key,
    unique_id: entry.entry_uid,
    issue_id: entry.issue_id,
    source_name: entry.source_name,
    source_url: entry.source_url
  }
}