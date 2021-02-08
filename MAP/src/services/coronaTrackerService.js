import { EventTargetShim } from '../utils/EventTargetShim.js';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';

const currentRange = 80;

class CoronaTrackerService extends EventTargetShim {
  constructor() {
    super();
    this.cache = {};
  }

  async getCountry(opts) {
    let { iso2, date } = opts;
    let startDate = opts.startDate;
    let endDate = opts.endDate;
    iso2 = encodeURI(iso2);

    startDate = startDate ? format(startDate, 'yyyy-MM-dd') : format(addDays(new Date(), -14), 'yyyy-MM-dd');
    endDate = endDate ? format(endDate, 'yyyy-MM-dd') : format(addDays(new Date(), currentRange), 'yyyy-MM-dd');

    if (!/^[a-zA-Z]{2}$/.test(iso2)) {
      return;
    }

    const cackeKey = `${iso2}${startDate}${endDate}`;

    if (opts.forceRefresh || this._shouldInvalidate() || this.cache[cackeKey]?.status === 'failed' || !this.cache[cackeKey]) {
      try {
        this.cache[cackeKey] = {};
        const res = await (
          await fetch(
           // `https://api.coronatracker.com/v3/analytics/trend/country?countryCode=${iso2}&startDate=${startDate}&endDate=${endDate}`
           `https://api.coronatracker.com/v5/analytics/trend/country?countryCode=${iso2}&startDate=${startDate}&endDate=${endDate}`
           // https://api.coronatracker.com/v5/analytics/trend/country

          )
        ).json();
        this.cache[cackeKey] = {
          status: 'success',
          data: res,
        };
        this.__lastUpdate = Date.now();
      } catch {
        this.cache[cackeKey] = {
          status: 'failed',
        };
      }

      this.dispatchEvent(new Event('change'));
    }
    return this.cache[cackeKey];
  }
}

export const coronaTrackerService = new CoronaTrackerService();