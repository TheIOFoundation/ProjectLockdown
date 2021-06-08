import api from '../api';

export const getWorldData = async (startDate, endDate) => {
  try {
    const res = await api.get(`/status/world/${startDate}/${endDate}`);
    return res.data;
  } catch (e) {
    return null;
  }
};

export const getSnapShotData = async(startData,endData) => {
  //todo: api should return with the given filter
  return fetch('./data/snapshot.json').then(r => r.json())
  .catch(e => { throw new Error(e.toString())}) 
}