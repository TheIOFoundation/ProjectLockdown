import { start } from 'repl';
import api from '../api';

export const getTdoData = async (countryIsoCode, startDate, endDate) => {
  try {
    const res = await api.get(
      `/status/${countryIsoCode}/${startDate}/${endDate}`
    );

    console.log('TDO data', res.data);

    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
