import { getWorksheetByTitle } from './googlesheet';
import { transposeRows } from '../../utils/dataHelper';
import { writeJSON } from '../../utils/file';
import { isUpdateReady, toUpdateType } from '../../utils/typeHelper';
import moment from '../../utils/moment';

/**
 * Gets updates
 * @returns {array}
 */
export async function getUpdates() {
  const sheet = await getWorksheetByTitle('Updates');
  const rows = await sheet.getCellsInRange(`A2:G${sheet.rowCount}`);
  const updates = transposeRows(['timestamp', 'status', 'type', 'geo', 'title', 'text', 'link'], rows);

  // Filter ready & title is required
  const updatesReady = updates.filter(update => {
    return isUpdateReady(update.status)
      && update.title != undefined;
  });

  // Sort by latest first
  updatesReady.sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  // Reformat structure
  return updatesReady.map(update => {
    return {
      type: toUpdateType(update.type),
      title: update.title,
      content: update.text,
      link: update.link,
      date: moment(update.timestamp, 'DD/MM/YYYY hh:mm:ss').format('DD-MM-YYYY hh:mm'),
    }
  });
}

export default async function loadData() {
  const updates = await getUpdates();
  writeJSON('updates', {
    updates: updates
  });
}