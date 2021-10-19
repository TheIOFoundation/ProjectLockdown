import { getCachedCellsRange } from '../../../utils/sheet';
import { toMeasureType, toTravelType, toInteger, isUpdateReady, toEntryDate, toLockdownType } from '../../../utils/typeHelper';
import { TRAVEL, MEASURE } from '../../../../../../shared/types';
import { letterToColumn, columnToLetter } from 'google-spreadsheet/lib/utils';
import Measure from '../../../types/Measure';
import Travel from '../../../types/Travel';
import Entry from '../../../types/Entry';
import DataPoint from '../../../types/DataPoint';

// Constants
export const ENTRY_COLUMN_LENGTH = 5;

/**
 * Parses rows to DataPoint type
 * 
 * @param {array} row 
 * @param {Function} valueTransformer 
 * @returns {DataPoint}
 */
export function parseDataPoint(row, valueTransformer) {
  return {
    value: typeof valueTransformer == 'function' ? valueTransformer(row[0]) : row[0],
    start_date: row[1] ? toEntryDate(row[1]) : null,
    end_date: row[2] ? toEntryDate(row[2]) : null,
    details: row[3],
  }
}

/**
 * Converts row range to A1 range according to entry structure
 * '2:10' will get 'H2:J10', etc.
 * 
 * @param {string} rowRange Row range, such as '2:10'
 * @param {number} entryIndex N-th index for entry
 * @param {string} firstEntryColumn The first entry in sheet
 */
export function getEntryCellRange(rowRange, entryIndex = 0, firstEntryColumn = 'H') {
  // Column length between entry start and end
  const initialColumnIndex = letterToColumn(firstEntryColumn);
  const offset = entryIndex * ENTRY_COLUMN_LENGTH;
  const startColumnIndex = initialColumnIndex + offset;
  const endColumnIndex = startColumnIndex + 2;
  const startLetter = columnToLetter(startColumnIndex);
  const endLetter = columnToLetter(endColumnIndex);

  const [rowStart, rowEnd] = rowRange.split(':');
  return `${startLetter}${rowStart}:${endLetter}${rowEnd}`;
}

/**
 * Parses Measure section
 * 
 * @param {GoogleSpreadsheetWorksheet|SimpleGrid} sheet 
 * @param {number} entryIndex
 * @returns {Measure}
 */
export function parseMeasure(sheet, entryIndex) {
  const entryMeasureRange = getEntryCellRange('19:28', entryIndex);
  const entryMeasureRows = getCachedCellsRange(sheet, entryMeasureRange, false);

  /** @type {Measure} */
  const data = {
    lockdown_status: parseDataPoint(entryMeasureRows[0], toLockdownType),
    city_movement_restriction: parseDataPoint(entryMeasureRows[1], toMeasureType),
    attending_religious_sites: parseDataPoint(entryMeasureRows[2], toMeasureType),
    going_to_work: parseDataPoint(entryMeasureRows[3], toMeasureType),
    military_not_deployed: parseDataPoint(entryMeasureRows[4], toMeasureType),
    academia_allowed: parseDataPoint(entryMeasureRows[5], toMeasureType),
    going_to_shops: parseDataPoint(entryMeasureRows[6], toMeasureType),
    electricity_nominal: parseDataPoint(entryMeasureRows[7], toMeasureType),
    water_nominal: parseDataPoint(entryMeasureRows[8], toMeasureType),
    internet_nominal: parseDataPoint(entryMeasureRows[9], toMeasureType),
  }

  return data;
}

/**
 * Parses Travel section (land)
 * 
 * @param {GoogleSpreadsheetWorksheet|SimpleGrid} sheet 
 * @param {number} entryIndex 
 * @returns {Travel}
 */
export function parseTravelLand(sheet, entryIndex) {
  const entryLandRange = getEntryCellRange('37:43', entryIndex);
  const entryLandRows = getCachedCellsRange(sheet, entryLandRange, false);

  /** @type {Travel} */
  const data = {
    local: parseDataPoint(entryLandRows[0], toTravelType),
    nationals_inbound: parseDataPoint(entryLandRows[1], toTravelType),
    nationals_outbound: parseDataPoint(entryLandRows[2], toTravelType),
    foreigners_inbound: parseDataPoint(entryLandRows[3], toTravelType),
    foreigners_outbound: parseDataPoint(entryLandRows[4], toTravelType),
    cross_border_workers: parseDataPoint(entryLandRows[5], toTravelType),
    stopovers: TRAVEL.NA,
    commerce: parseDataPoint(entryLandRows[6], toTravelType),
  }

  return data;
}

/**
 * Parses Travel section (flight)
 * 
 * @param {GoogleSpreadsheetWorksheet|SimpleGrid} sheet 
 * @param {number} entryIndex 
 * @returns {Travel}
 */
export function parseTravelFlight(sheet, entryIndex) {
  const entryFlightRange = getEntryCellRange('47:53', entryIndex);
  const entryFlightRows = getCachedCellsRange(sheet, entryFlightRange, false);

  /** @type {Travel} */
  const data = {
    local: parseDataPoint(entryFlightRows[0], toTravelType),
    nationals_inbound: parseDataPoint(entryFlightRows[1], toTravelType),
    nationals_outbound: parseDataPoint(entryFlightRows[2], toTravelType),
    foreigners_inbound: parseDataPoint(entryFlightRows[3], toTravelType),
    foreigners_outbound: parseDataPoint(entryFlightRows[4], toTravelType),
    cross_border_workers: TRAVEL.NA,
    stopovers: parseDataPoint(entryFlightRows[5], toTravelType),
    commerce: parseDataPoint(entryFlightRows[6], toTravelType),
  }

  return data;
}

/**
 * Parses Travel section (sea)
 * 
 * @param {GoogleSpreadsheetWorksheet|SimpleGrid} sheet 
 * @param {number} entryIndex 
 * @returns {Travel}
 */
export function parseTravelSea(sheet, entryIndex) {
  const entrySeaRange = getEntryCellRange('57:63', entryIndex);
  const entrySeaRows = getCachedCellsRange(sheet, entrySeaRange, false);

  /** @type {Travel} */
  const data = {
    local: parseDataPoint(entrySeaRows[0], toTravelType),
    nationals_inbound: parseDataPoint(entrySeaRows[1], toTravelType),
    nationals_outbound: parseDataPoint(entrySeaRows[2], toTravelType),
    foreigners_inbound: parseDataPoint(entrySeaRows[3], toTravelType),
    foreigners_outbound: parseDataPoint(entrySeaRows[4], toTravelType),
    cross_border_workers: parseDataPoint(entrySeaRows[5], toTravelType),
    stopovers: TRAVEL.NA,
    commerce: parseDataPoint(entrySeaRows[6], toTravelType),
  }

  return data;
}

/**
 * Create new datapoint from old datapoint entry format
 * 
 * @param {Entry} dp Old datapoint format
 * @param {Entry} typeName Type of value in string, e.g. Integer, Boolean 
 * @returns {Entry} New datapoint format
 */
 export function createDataPoint(dpuid, dp, typeName, editor, entry_uid, entry_type, source_url, territoryUID) {
   return {
    Value: {
      GeneratedBy: editor,
      Type: typeName,
      Value: dp.value,
    },
    DateStart: dp.start_date,
    DateEnd: dp.end_date,
    DataPointUID: dpuid,
    Details: dp.details,
    DSEUID: entry_uid,
    Type: entry_type,
    URL: source_url,
    TerritoryUID: territoryUID,
  };
 }


/**
 * Gets fully parsed entry data
 * 
 * @param {GoogleSpreadsheetWorksheet|SimpleGrid} sheet 
 * @param {integer} entryIndex 
 * @returns {Entry}
 */
export function parseEntry(sheet, entryIndex, territoryCode) {

  /** @type {Entry} */
  const entry = {};

  // Entry meta section
  const entryMetaRows = getCachedCellsRange(sheet, getEntryCellRange('2:8', entryIndex), false);
  entry.entry_uid = entryMetaRows[0][1];    // DPUID = 1
  entry.timestamp = entryMetaRows[1][1];    // DPUID = 2
  entry.issue_id = entryMetaRows[2][2];     // DPUID = 3
  entry.status = entryMetaRows[3][1];       // DPUID = 4
  entry.editor = entryMetaRows[4][1];       // DPUID = 5
  entry.reviewed_by = entryMetaRows[5][1];  // DPUID = 6
  entry.type = entryMetaRows[6][1];         // DPUID = 7

  // Entry source section
  const entrySourceRows = getCachedCellsRange(sheet, getEntryCellRange('13:16', entryIndex), false);
  entry.source_name = entrySourceRows[0][0];    // DPUID = 10.1
  entry.source_url = entrySourceRows[1][0];     // DPUID = 10.2
  entry.source_title_of_status = entrySourceRows[2][0];   // DPUID  = 10.3
  entry.source_date_of_issuance = entrySourceRows[3][0] ? toEntryDate(entrySourceRows[3][0]) : null;   // DPUID  = 10.4
  entry.source_start_date = entrySourceRows[3][1] ? toEntryDate(entrySourceRows[3][1]) : null;         // DPUID = 10.4
  entry.source_end_date = entrySourceRows[3][2] ? toEntryDate(entrySourceRows[3][2]) : null;           // DPUID = 10.4

  // Max gathering
  const entryMaxGatheringRows = getCachedCellsRange(sheet, getEntryCellRange('18:18', entryIndex), false);  
  // DPUID = 20.1
  entry.max_gathering = parseDataPoint(entryMaxGatheringRows[0], toInteger); // What is the maximum assembly allowed (PAX)?

  entry.measure = parseMeasure(sheet, entryIndex);      // DPUID = 20.1 - 20.11
  entry.land = parseTravelLand(sheet, entryIndex);      // DPUID = 30.1.1 - 30.1.9
  entry.flight = parseTravelFlight(sheet, entryIndex);  // DPUID = 30.2.1 - 30.2.7
  entry.sea = parseTravelSea(sheet, entryIndex);        // DPUID = 30.3.1 - 30.3.9
  
  var dse = {
    DSEUID: entry.entry_uid,
    Funnel: 'IS',
    Status: entry.status,
    //Answers: IAnswer.IAnswer[];
    DateTimestampEncoded: entry.timestamp,
    DSLUID: '1',
    TerritoryUID: territoryCode,
    IssueId: entry.issue_id,
    Editor: entry.editor,
    ReviewedBy: entry.reviewed_by,
    Type: entry.type,
    SourceName: entry.source_name,
    URL: entry.source_url,
    SourceTitleOfStatus: entry.source_title_of_status,
    SourceDateOfIssuance: entry.source_date_of_issuance, 
    SourceStartDate: entry.source_start_date,
    SourceEndDate: entry.source_end_date,
    Answers: []
  };

  dse.Answers.push(createDataPoint('20.1', entry.max_gathering, 'Integer', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));  
  dse.Answers.push(createDataPoint('20.2', entry.measure.lockdown_status, 'Measure', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('20.3', entry.measure.city_movement_restriction, 'Measure', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('20.4', entry.measure.attending_religious_sites, 'Measure', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('20.5', entry.measure.going_to_work, 'Measure', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('20.6', entry.measure.military_not_deployed, 'Measure', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('20.7', entry.measure.academia_allowed, 'Measure', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('20.8', entry.measure.going_to_shops, 'Measure', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('20.9', entry.measure.electricity_nominal, 'Measure', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('20.10', entry.measure.water_nominal, 'Measure', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('20.11', entry.measure.internet_nominal, 'Measure', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));

  dse.Answers.push(createDataPoint('30.1.1', entry.land.local, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.1.2', entry.land.nationals_inbound, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.1.3', entry.land.nationals_outbound, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.1.4', entry.land.foreigners_inbound, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.1.5', entry.land.foreigners_outbound, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.1.6', entry.land.cross_border_workers, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.1.7', entry.land.commerce, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  
  dse.Answers.push(createDataPoint('30.2.1', entry.flight.local, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.2.2', entry.flight.nationals_inbound, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.2.3', entry.flight.nationals_outbound, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.2.4', entry.flight.foreigners_inbound, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.2.5', entry.flight.foreigners_outbound, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.2.6', entry.flight.stopovers, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.2.7', entry.flight.commerce, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));

  dse.Answers.push(createDataPoint('30.3.1', entry.sea.local, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.3.2', entry.sea.nationals_inbound, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.3.3', entry.sea.nationals_outbound, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.3.4', entry.sea.foreigners_inbound, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.3.5', entry.sea.foreigners_outbound, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.3.6', entry.sea.cross_border_workers, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  dse.Answers.push(createDataPoint('30.3.7', entry.sea.commerce, 'Travel', entry.editor, entry.entry_uid, entry.type, entry.source_url, territoryCode));
  
  return dse;
}