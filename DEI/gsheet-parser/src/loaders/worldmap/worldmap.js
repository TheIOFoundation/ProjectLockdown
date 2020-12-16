import { writeJSON } from '../../utils/file.js';

// Default lockdown status if data doesnt exist
const defaultLockdownStatus = null;

/**
 * Appends lockdown_status to each territory
 * @param {array} lockdownStatusByTerritory 
 */
export function appendLockdownStatus(lockdownStatusByTerritory) {
  const baseData = require('./base.json');
  const updatedFeatures = [];
  // TODO: changes needed for time slider
  baseData['features'].forEach(feature => {
    let lockdownStatus = lockdownStatusByTerritory[feature.properties.iso2]?.lockdown?.lockdown_status;

    updatedFeatures.push({
      ...feature,
      properties: {
        ...feature['properties'],
        lockdown_status: lockdownStatus ?? defaultLockdownStatus,
      }
    });
  });

  return {
    ...baseData,
    features: updatedFeatures
  }
}

export default async function loadData(lockdownStatusByTerritory) {
  Object.keys(lockdownStatusByTerritory).forEach(key => {
    var lockdown = lockdownStatusByTerritory[key];
    const statusForDate = appendLockdownStatus(lockdown);
    writeJSON(`worldMap/${key}`, statusForDate);
  })
}