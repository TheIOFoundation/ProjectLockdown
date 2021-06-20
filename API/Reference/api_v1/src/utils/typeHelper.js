import { MEASURE, TRAVEL, UPDATE_STATUS, COUNTRY_STATUS, DATA_ENTRY_STATUS } from '../../../shared/types';
import moment from './moment';

// Options are the literal values set in google sheet
const OPTION_MEASURE = {
  'Yes': MEASURE.YES,
  'No': MEASURE.NO,
  'Partially': MEASURE.PARTIAL,
  'Unclear': MEASURE.UNCLEAR,
}

const OPTION_TRAVEL = {
  'Yes': TRAVEL.YES,
  'No': TRAVEL.NO,
  'Partially': TRAVEL.PARTIALLY,
  'Unclear': TRAVEL.UNCLEAR,
  'N/A': TRAVEL.NA,
}

const OPTION_COUNTRY_STATUS = {
  'Unclear': COUNTRY_STATUS.UNCLEAR,
  'N/A': COUNTRY_STATUS.NA,
  'State of Calamity': COUNTRY_STATUS.STATE_OF_CALAMITY,
  'State of Emergency': COUNTRY_STATUS.STATE_OF_EMERGENCY,
  'State of Alert': COUNTRY_STATUS.STATE_OF_ALERT,
  'Other (Yes)': COUNTRY_STATUS.OTHER_YES,
  'Other (No)': COUNTRY_STATUS.OTHER_NO,
  'State of Natural Disaster': COUNTRY_STATUS.STATE_OF_NATURAL_DISASTER,
  'State of National Disaster': COUNTRY_STATUS.STATE_OF_NATIONAL_DISASTER,
}

const OPTION_DATA_ENTRY_STATUS = {
  'Demo': DATA_ENTRY_STATUS.DEMO,
  'Flagged': DATA_ENTRY_STATUS.FLAGGED,
  'Ready': DATA_ENTRY_STATUS.READY,
  'Standby': DATA_ENTRY_STATUS.STANDBY,
}

const OPTION_UPDATE_STATUS = {
  'Standby': UPDATE_STATUS.STANDBY,
  'Ready': UPDATE_STATUS.READY,
  'Demo': UPDATE_STATUS.DEMO,
  'Flagged': UPDATE_STATUS.FLAGGED,
}

const OPTION_UPDATE_TYPE = {
  'New Entry': 'new_entry',
  'Announcement': 'announcement',
  'Rectification': 'rectification',
  'Promoting Project': 'promoting_project',
  'Promoting Petition': 'promoting_petition',
}

export function toMeasureType(value) {
  return OPTION_MEASURE[value] ?? null;
}

export function toTravelType(value) {
  return OPTION_TRAVEL[value] ?? null;
}

export function toCountryStatus(value) {
  return OPTION_COUNTRY_STATUS[value] ?? null;
}

export function toUpdateType(value) {
  return OPTION_UPDATE_TYPE[value] ?? null;
}

// Special note on lockdown: its label is "Are citizens allowed to leave their homes?"
// Thus the value is actually opposite, i.e: "No" means lockdown, and vice versa
export function toLockdownType(value) {
  switch (value) {
    case 'No':
      return MEASURE.YES
    case 'Yes':
      return MEASURE.NO
  }
  return OPTION_MEASURE[value] ?? null;
}

export function toInteger(value) {
  const int = parseInt(value);
  return Number.isInteger(int) ? int : null;
}

/**
 * Date check for entry. ex valid: '1 April 2020'
 * @param {string} value 
 */
export function toEntryDate(value) {
  const d = moment(value, 'D MMMM Y');
  return d.isValid() ? d : null;
}

export function isEntryActive(value) {
  const status = OPTION_DATA_ENTRY_STATUS[value];
  return status === DATA_ENTRY_STATUS.READY || status === DATA_ENTRY_STATUS.FLAGGED;
}

export function isUpdateReady(value) {
  const status = OPTION_UPDATE_STATUS[value];
  return status === UPDATE_STATUS.READY;
}

export function isLockdown(value) {
  return value === MEASURE.YES || value === MEASURE.PARTIAL;
}
