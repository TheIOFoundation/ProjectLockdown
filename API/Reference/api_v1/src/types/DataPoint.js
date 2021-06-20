import { MomentRange } from 'moment-range';

export default class DataPoint {
  constructor() {
    /** @type {any} */
    this.value = null;

    /** @type {MomentRange} */
    this.start_date = null;

    /** @type {MomentRange} */
    this.end_date = null;
  }
}