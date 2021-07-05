import { isLockdown } from '../../utils/typeHelper.js';
import moment from 'moment-timezone';

/**
 * Totals up locked down territories
 * @param {array} lockdownStatusByTerritory 
 */
export function sumLockdown(lockdownStatusByTerritory) {
  var affected = 0;
  var population = require('../../../../data/population.json');
  // TODO: changes needed for time slider
  const total = Object.values(lockdownStatusByTerritory).reduce((prev, territory) => {
    if (isLockdown(territory.lockdown_status)) {
      affected += +population[territory.ISO].Population;
      return prev + 1;
    }
    return prev;
  }, 0);

  return {total, affected};
}