import axios from 'axios';

const params = {
  where: '1=1',
  geometryType: 'esriGeometryEnvelope',
  spatialRel: 'esriSpatialRelIntersects',
  resultType: 'none',
  distance: '0.0',
  units: 'esriSRUnit_Meter',
  returnGeodetic: 'false',
  outFields: '*',
  returnGeometry: 'false',
  featureEncoding: 'esriDefault',
  multipatchOption: 'xyFootprint',
  applyVCSProjection: 'false',
  returnIdsOnly: 'false',
  returnUniqueIdsOnly: 'false',
  returnCountOnly: 'false',
  returnExtentOnly: 'false',
  returnQueryGeometry: 'false',
  returnDistinctValues: 'false',
  cacheHint: 'false',
  returnZ: 'false',
  returnM: 'false',
  returnExceededLimitFeatures: 'true',
  sqlFormat: 'none',
  f: 'pjson'
}

export async function sumCorona() {
  const url = 'https://api.covid19api.com/world/total';
  const response = await axios.get(url, {
    params
  });
  const data = response.data;

  return {
    'confirmed': data.TotalConfirmed,
    'deaths': data.TotalDeaths
  }
}
