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
      //range.measures.push(measure);
    } else {
      ranges.push({
        SnapshotUID: dataPoint.SnapshotUID,
        Version: dataPoint.Version,
        PermalinkDocs: dataPoint.PermalinkDocs,
        SnapshotType: dataPoint.SnapshotType,
        SnapshotPermaURL: dataPoint.SnapshotPermaURL,
        TerritoryPLDCode: dataPoint.TerritoryPLDCode,
        DSLUID: dataPoint.DSLUID,
        Status: dataPoint.Status,
        PermalinkSnapshot: dataPoint.PermalinkSnapshotPermalinkSnapshot,
        Description: dataPoint.Description,
        DatesFormat: dataPoint.DatesFormat,
        PublishedFirst: dataPoint.PublishedFirst,
        UpdatedLast: dataPoint.UpdatedLast,
        UpdatedNext: dataPoint.UpdatedNext,
        UpdatedFreq: dataPoint.UpdatedFreq,
        PermalinkMethodology: dataPoint.PermalinkMethodology,
        MethodologyCode: dataPoint.MethodologyCode,
        FirstDay: dataPoint.FirstDay,
        LastDay: dataPoint.LastDay,
        PermalinkAPIURL: dataPoint.PermalinkAPIURL,
        PermalinkSchema: dataPoint.PermalinkSchema,
        CountDataPoints: dataPoint.CountDataPoints,
        PermalinkQALog: dataPoint.PermalinkQALog,
        Ontology: dataPoint.Ontology,
        ResearchURL: dataPoint.ResearchURL,
        LicenseCode: dataPoint.LicenseCode,
        PermalinkCitingPolicy: dataPoint.PermalinkCitingPolicy,
        CitingPolicyCode: dataPoint.CitingPolicyCode,
        DataPoints: dataPoint.value,
        SourceTypes: dataPoint.SourceTypes
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
    // start_date: dataPointStartDate.toDate(),
    // end_date: dataPointEndDate.toDate(),
    // value: dataPoint.value,
    // label: key,
    // unique_id: entry.entry_uid,
    // issue_id: entry.issue_id,
    // source_name: entry.source_name,
    // source_url: entry.source_url,
    SnapshotUID: entry.entry_uid,
    Version: "0.01",
    PermalinkDocs: "https://TIOF.Click?type=doc&DSL=" + entry.entry_uid,
    SnapshotType: "Thematic",
    SnapshotPermaURL: "https://TIOF.Click?type=doc&DSL=" + entry.entry_uid,
    TerritoryPLDCode: entry.source_name,
    DSLUID: "https://TIOF.Click?type=doc&DSL=" + entry.entry_uid,
    Status: "Ready",
    PermalinkSnapshot: "https://TIOF.Click?type=doc&DSL=" + entry.entry_uid,
    Description: entry.source_name,
    DatesFormat: "yyyy-MM-ddTHH:mmZ",
    PublishedFirst: "",
    UpdatedLast: "2020-09-17T12:00Z",
    UpdatedNext: "2020-09-24T12:00Z",
    UpdatedFreq: "604800000",
    PermalinkMethodology: "https://TIOF.Click?DSL=1&type=methodology",
    MethodologyCode: "AB1234", 
    FirstDay: dataPointStartDate.toDate(),
    LastDay: dataPointEndDate.toDate(),
    PermalinkAPIURL: "https://TIOF.Click?DSL=1&type=apiurl",
    PermalinkSchema: "https://TIOF.Click?DSL=1&type=schema",
    CountDataPoints: 173,
    PermalinkQALog: "https://TIOF.Click?DSL=1&type=qalog",
    Ontology: "https://TIOF.Click?DSL=1&type=ontoloy",
    ResearchURL: "https://TIOF.Click?DSL=1&type=researchurl",
    LicenseCode: "MIT", 
    PermalinkCitingPolicy: "Lorem ipsem...",
    CitingPolicyCode: "AB123",
    DataPoints: dataPoint.value,
    SourceTypes: [
        {
            PermalinkDocs: "https://TIOF.Click?Territory=1", 
            SourceTypeStats:
            {
                PermalinkDocs : "https://TIOF.Click?DSL=1&type=territoriesStats",
                CountTotal: 1,
                CountTypeOfficial: 1,
                CountTypeMedia: 0,
                CountTypeFM: 0,
                CountTypeNGO: 0,
                CountOther: 0            
            },
            SourceType:
            {
                PermalinkDocs: "https://TIOF.Click?Territory=1", 
                SourceType: "",
                DefaultOrder:"",
                SnapDPs:
                {
                    PermalinkDocs: "https://TIOF.Click?Territory=1", 
                    SnapDPUID: "AB123",
                    DPUID: "AB123",
                    TimeStamp: "2020-09-17T12:00Z",
                    Status: "Ready",
                    SourceType: "",
                    ProcessedBy: "",
                    Dates:
                    {
                        PermalinkDocs : "https://TIOF.Click?DSL=1&type=territoryDatapointsDoc",
                        Day:
                        {
                            PermalinkDocs : "https://TIOF.Click?DSL=1&type=territoryDatapointsDoc",
                            Date: "2020-09-17",
                            Value: "AB123",
                            Origin: "AB123"
                        }
                    }
                }
            }
        }]
      }
    }
