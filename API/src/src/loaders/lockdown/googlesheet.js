import GoogleSpreadsheetWorksheet from 'google-spreadsheet/lib/GoogleSpreadsheetWorksheet';
import { lockdownSheetId, googleServiceCredentialsJson } from '../../config';
import { CustomGoogleSpreadsheet } from '../../utils/CustomGoogleSpreadsheet';

const doc = new CustomGoogleSpreadsheet(lockdownSheetId);
var initialized = false;

/**
 * Initialize google spreadsheet object with cache
 */
async function init() {
  if (initialized) return;

  if (googleServiceCredentialsJson) {
    await doc.useServiceAccountAuth(googleServiceCredentialsJson);
  } else {
    throw Exception('No API key / service account credentials defined!');
  }

  await doc.loadInfo(); // loads document properties and worksheets
  initialized = true;
}

/**
 * Gets a single worksheet by its title.
 * If duplicate, will return first found
 * @param {string} title
 * @returns {GoogleSpreadsheetWorksheet}
 */
export async function getWorksheetByTitle(title) {
  await init();
  return doc.sheetsByIndex.find(sheet => sheet['_rawProperties']['title'] == title);
}

/**
 * Returns document
 * @returns {CustomGoogleSpreadsheet}
 */
export default async function getDocument() {
  await init();
  return doc;
}