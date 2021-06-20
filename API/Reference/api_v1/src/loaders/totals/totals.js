import { writeJSON } from '../../utils/file.js';
import { sumLockdown } from './territories';
import { sumCorona } from './corona';

/**
 * Loads totals for corona and lockdown count
 * @param {array} lockdownStatusByTerritory 
 */
export default async function loadData(lockdownStatusByTerritory) {
  const corona = await sumCorona();
  writeJSON('totals', {
    corona: {
      confirmed: corona.confirmed,
      date: corona.date,
      deaths: corona.deaths,
    }
  });

}