import DataPoint from './DataPoint';

export default class Travel {
  constructor() {
    /** @type {DataPoint} */
    this.local = null;

    /** @type {DataPoint} */
    this.nationals_inbound = null;

    /** @type {DataPoint} */
    this.nationals_outbound = null;

    /** @type {DataPoint} */
    this.foreigners_inbound = null;

    /** @type {DataPoint} */
    this.foreigners_outbound = null;

    /** @type {DataPoint} */
    this.cross_border_workers = null;

    /** @type {DataPoint} */
    this.commerce = null;

    /** @type {DataPoint} */
    this.stopovers = null;
  }
}