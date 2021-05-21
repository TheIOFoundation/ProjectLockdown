export const selectedWorldview = 'US';

export function worldStyle(lockdown_status) {
  let value;
  switch (lockdown_status) {
    case '1':
      value = '#eb5757'; // yes
      break;
    case '2':
      value = '#f2994a'; // partial
      break;
    case '3':
      value = '#6fcf97'; // no
      break;
    default:
      value = '#ccc'; // undefined or no value
  }

  return value;
}

export function worldStyleColor(lockdown_status) {
  let value;
  switch (lockdown_status) {
    case '1':
      value = 'red'; // yes
      break;
    case '2':
      value = 'orange'; // partial
      break;
    case '3':
      value = 'green'; // no
      break;
    default:
      value = 'grey'; // undefined or no value
  }

  return value;
}

export function filterLookupTable(lookupTable) {
  const lookupData = {};

  for (const layer in lookupTable)
    for (const worldview in lookupTable[layer].data)
      for (const feature in lookupTable[layer].data[worldview]) {
        const featureData = lookupTable[layer].data[worldview][feature];

        if (worldview === 'all' || worldview === selectedWorldview) {
          lookupData[featureData.unit_code] = featureData;
        }
      }
  return lookupData;
}

export const domainCoors = {
  // zoom/lat/long
  asia: { lng: 105.04, lat: 20.13, zoom: 2.04 }, // Asia - https://projectlockdown.asia/#2.04/20.13/105.04
  eu: { lng: 26.81, lat: 55.71, zoom: 2.12 }, // Europe - https://projectlockdown.eu/#2.12/55.71/26.81
  us: { lng: -98.22, lat: 37.68, zoom: 2.7 }, // North Americas - https://projectlockdown.us/#2.7/37.68/-98.22
  africa: { lng: 14.63, lat: 2.61, zoom: 1.88 }, // Africa - https://projectlockdown.africa/#1.88/2.61/14.63
  lat: { lng: -36, lat: -20.2, zoom: 1.56 }, // South Americas - https://projectlockdown.lat/#1.56/-20.2/-36
  me: { lng: 53.39, lat: 26.28, zoom: 3.19 }, // Middle East - https://projectlockdown.me/#3.19/26.28/53.39
};

// Coordinates based on TLDs for mobile
export const domainCoorsMobile = {
  // zoom/lat/long
  asia: { lng: 89.9, lat: 36.2, zoom: 1.15 }, // Asia - https://projectlockdown.asia/#1.15/36.2/89.9
  eu: { lng: 21.5, lat: 50.4, zoom: 1.52 }, // Europe - https://projectlockdown.eu/#1.52/50.4/21.5
  us: { lng: -98.37, lat: 43.09, zoom: 2 }, // North Americas - https://projectlockdown.us/#2/43.09/-98.37
  africa: { lng: 26.4, lat: 14.4, zoom: 1.43 }, // Africa - https://projectlockdown.africa/#1.43/14.4/26.4
  lat: { lng: -63.6, lat: -16.4, zoom: 1.44 }, // South Americas - https://projectlockdown.lat/#1.44/-16.4/-63.6
  me: { lng: 53.4, lat: 22, zoom: 1.08 }, // Middle East - https://projectlockdown.me/#1.08/22/53.4
};

export const pause = (time = 100) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
