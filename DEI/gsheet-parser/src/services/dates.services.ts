/**
 * Data Model Interfaces
 */
import Date, { IDate } from "../models/date.model";
import { IDates } from "../models/dates.interface";
import * as Common from "./common.services";

import { CreateQuery } from 'mongoose';
/**
 * In-Memory Store
 */

let dates = {
} as IDates;
 

/**
 * Service Methods
 */

export const findAll = async (): Promise<IDate[]> => Object.values(dates);

export const find = async (id: string): Promise<IDate> => dates[id];

export const create = async (newDate: CreateQuery<IDate>): Promise<IDate> => {
  const id = Common.generateQuickGuid();

  newDate.DateUID = id;

  return Date.create(newDate)
    .then((data: IDate) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
};

export const update = async (
  id: string,
  dateUpdate: IDate
): Promise<IDate | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  dates[id] = dateUpdate;

  return dates[id];
};

export const remove = async (id: string): Promise<null | void> => {
  const adate = await find(id);

  if (!adate) {
    return null;
  }

  delete dates[id];
};