import DataPoint from './DataPoint';

export default class Measure {
  constructor() {
    /** @type {DataPoint} */
    this.lockdown_status = null;

    /** @type {DataPoint} */
    this.city_movement_restriction = null;

    /** @type {DataPoint} */
    this.attending_religious_sites = null;

    /** @type {DataPoint} */
    this.going_to_work = null;

    /** @type {DataPoint} */
    this.military_not_deployed = null;

    /** @type {DataPoint} */
    this.academia_allowed = null;

    /** @type {DataPoint} */
    this.going_to_shops = null;

    /** @type {DataPoint} */
    this.electricity_nominal = null;

    /** @type {DataPoint} */
    this.water_nominal = null;

    /** @type {DataPoint} */
    this.internet_nominal = null;
  }
}