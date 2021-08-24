import DataPoint from './DataPoint';
import Measure from './Measure';
import Travel from './Travel';

export default class Entry {
  constructor() {
    /** @type {string} */
    this.entry_uid = null;

    /** @type {string} */
    this.timestamp = null;

    /** @type {string} */
    this.issue_id = null;

    /** @type {string} */
    this.status = null;

    /** @type {string} */
    this.editor = null;

    /** @type {string} */
    this.reviewed_by = null;

    /** @type {string} */
    this.type = null;

    /** @type {string} */
    this.source_name = null;

    /** @type {string} */
    this.source_url = null;

    /** @type {string} */
    this.source_title_of_status = null;

    /** @type {string} */
    this.source_date_of_issuance = null;

    /** @type {string} */
    this.source_start_date = null;

    /** @type {string} */
    this.source_end_date = null;

    /** @type {DataPoint} */
    this.max_gathering = null;

    /** @type {Measure} */
    this.measure = null;

    /** @type {Travel} */
    this.land = null;

    /** @type {Travel} */
    this.flight = null;

    /** @type {Travel} */
    this.sea = null;
  }
}