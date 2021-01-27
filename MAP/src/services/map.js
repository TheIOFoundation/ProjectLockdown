import api from '../api';

export const getWorldData = async (startDate, endDate) => {
  try {
    const res = await api.get(`/status/world/${startDate}/${endDate}`);

    console.log('World Data', res);

    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
