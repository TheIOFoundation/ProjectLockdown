import { getCachedCellsRange } from '../../../utils/sheet';
import { toMeasureType, toTravelType, toInteger, isUpdateReady, toEntryDate, toLockdownType } from '../../../utils/typeHelper';
import { TRAVEL, MEASURE } from '../../../../../shared/types';
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
    stopovers: TRAVEL.NA,
    commerce: parseDataPoint(entryFlightRows[5], toTravelType),
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
 * Gets fully parsed entry data
 * 
 * @param {GoogleSpreadsheetWorksheet|SimpleGrid} sheet 
 * @param {integer} entryIndex 
 * @returns {Entry}
 */
export function parseEntry(sheet, entryIndex) {

  /** @type {Entry} */
  const entry = {};

  // Entry meta section
  const entryMetaRows = getCachedCellsRange(sheet, getEntryCellRange('2:8', entryIndex), false);
  entry.entry_uid = entryMetaRows[0][1];
  entry.timestamp = entryMetaRows[1][1];
  entry.issue_id = entryMetaRows[2][2];
  entry.status = entryMetaRows[3][1];
  entry.editor = entryMetaRows[4][1];
  entry.reviewed_by = entryMetaRows[5][1];
  entry.type = entryMetaRows[6][1];

  // Entry source section
  const entrySourceRows = getCachedCellsRange(sheet, getEntryCellRange('13:16', entryIndex), false);
  entry.source_name = entrySourceRows[0][0];
  entry.source_url = entrySourceRows[1][0];
  entry.source_title_of_status = entrySourceRows[2][0];
  entry.source_date_of_issuance = entrySourceRows[3][0] ? toEntryDate(entrySourceRows[3][0]) : null;
  entry.source_start_date = entrySourceRows[3][1] ? toEntryDate(entrySourceRows[3][1]) : null;
  entry.source_end_date = entrySourceRows[3][2] ? toEntryDate(entrySourceRows[3][2]) : null;

  // Max gathering
  const entryMaxGatheringRows = getCachedCellsRange(sheet, getEntryCellRange('18:18', entryIndex), false);
  entry.max_gathering = parseDataPoint(entryMaxGatheringRows[0], toInteger); // What is the maximum assembly allowed (PAX)?

  entry.measure = parseMeasure(sheet, entryIndex);
  entry.land = parseTravelLand(sheet, entryIndex);
  entry.flight = parseTravelFlight(sheet, entryIndex);
  entry.sea = parseTravelSea(sheet, entryIndex);

  // TODO: Implement optional & required validation here.
  
  return entry;
}