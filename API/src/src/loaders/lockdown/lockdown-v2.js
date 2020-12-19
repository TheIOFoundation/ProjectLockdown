import getDocument, { getWorksheetByTitle } from './googlesheet';
import { transposeRows } from '../../utils/dataHelper';
import { letterToColumn, columnToLetter } from 'google-spreadsheet/lib/utils';
import logger from '../../utils/logger';
import { SimpleGrid } from '../../utils/SimpleGrid';
import { ENTRY_COLUMN_LENGTH, parseEntry } from './parsers/lockdownParser';
import { getSnapshots } from './snapshot/processor';
import { connect } from '../../repositories';
import { MessagesService } from '../../services/MessagesService';

// Number of territories to query through batchGet at a time
const BATCH_SIZE = 25;

// Number of entries to batchGet from google sheet
const ENTRIES_TO_FETCH = 100;

/**
 * Gets data from "Global" sheet.
 * @returns {array}
 */
export async function getGlobalData() {
  const sheet = await getWorksheetByTitle('Global');
  const rows = await sheet.getCellsInRange('B5:F253');
  const headers = ['status', 'jump', 'territory', 'iso2', 'iso3'];
  return transposeRows(headers, rows);
}

/**
 * Groups territories and request data from google API at batch size
 * @param {array} territories 
 */
export async function batchGetTerritoriesEntryData(territories) {
  const database = await connect();
  const doc = await getDocument();
  const startCacheColumn = 'H';
  const startCacheColumnIndex = letterToColumn(startCacheColumn);
  const endCacheColumn = columnToLetter(startCacheColumnIndex + (ENTRIES_TO_FETCH * ENTRY_COLUMN_LENGTH));
  const rangeToCache = `${startCacheColumn}1:${endCacheColumn}65`;
  const result = [];
  var batch;
  var shouldResetApiCache = false;

  try {
    while (batch = territories.splice(0, BATCH_SIZE)) {
      if (batch.length < 1) break;
      // TODO: Uncomment the following when country tab sheets are ready with ISO3 naming
      let gridRanges = batch.map(territory => `${territory['iso3']}!${rangeToCache}`);
      logger.log(`[Lockdown:WorkSheet] ${batch.map(t => t['iso3']).join(' ')}`);
      let gridData = await doc.batchGetGridRanges(gridRanges);

      for (let i = 0; i < batch.length; i++) {
        try {
          // TODO: Uncomment the following when country tab sheets are ready with ISO3 naming
          let workSheet = await getWorksheetByTitle(`${batch[i]['iso3']}`);
          let rowCount = workSheet['gridProperties']['rowCount'];
          let columnCount = workSheet['gridProperties']['columnCount'];

          let gridSheet = new SimpleGrid(rangeToCache, gridData[i], rowCount, columnCount);
          let entries = [];

          // How many entries should we loop through according to columns available on sheet
          let entryCount = Math.ceil((columnCount - startCacheColumnIndex) / ENTRY_COLUMN_LENGTH);
          for (let entryIndex = 0; entryIndex < entryCount; entryIndex++) {
            // Cell ranges
            let entryData = parseEntry(gridSheet, entryIndex);
            if (entryData) {
              entries.push(entryData);
            }
          }

          let snapshots = getSnapshots(entries);

          try {
            // country sheet where entries are blank - we need to delete snapshots for the country in the db
            // 21/6/2020 NPIs also have the same issue - delete country entries first before inserting.
            let clearResult = await database.snapshotRepository.removeSnapshots(batch[i]['iso2'], batch[i]['iso3']);
            // example of clearResult is {"result":{"n":0,"ok":1},"connection":{"id":1,"host":"***","port":111},"deletedCount":0,"n":0,"ok":1}
            if (clearResult.result.n > 0 && clearResult.result.ok == 1) {
              shouldResetApiCache = true;
            }
          } catch (error) {
            logger.log(`Error removeSnapshots for country ${batch[i]['iso2']} ${batch[i]['iso3']}...`);
            logger.error(error);
          }

          if (snapshots.length > 0) {
            snapshots.forEach(s => {
              s.iso3 = batch[i]['iso3'];
              s.iso2 = batch[i]['iso2'];
            });

            try {
              let insertResult = await database.snapshotRepository.insertMany(snapshots);
              // reference: http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html#~insertWriteOpResult
              if (insertResult.result.n > 0 && insertResult.result.ok == 1) {
                shouldResetApiCache = true;
              }
            } catch (error) {
              logger.log(`Error insertMany for country ${batch[i]['iso2']} ${batch[i]['iso3']}...`);
              logger.error(error);
            }
          }

          result.push({
            iso2: batch[i]['iso2'],
            iso3: batch[i]['iso3'],
            name: batch[i]['territory'],
            lockdown: {
              snapshots
            }
          });
        }
        catch (error) {
          throw new Error(`Error during processing ${batch[i]['iso3']}: ${error}`);
        }
      }
    }

    if (shouldResetApiCache) {
      const cacheMessageBus = new MessagesService(process.env.AZURE_SERVICEBUS_CONNECTION_STRING, process.env.AZURE_SERVICEBUS_CACHE_QUEUE);
      await cacheMessageBus.sendMessage(
        `Reset cache`,
        "Reset cache",
        {
          timestamp: new Date()
        }
      );
      await cacheMessageBus.close();
    }
  }
  catch (error) {
    database.close();
    throw error;
  }

  database.close()
  return result;
}

export default async function loadData() {
  const territories = await getGlobalData();
  return await batchGetTerritoriesEntryData(territories);
}