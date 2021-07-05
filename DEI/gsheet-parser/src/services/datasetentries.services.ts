/**
 * Data Model Interfaces
 */
 import DataSetEntry, { IDataSetEntry } from "../models/datasetentry.model";
 import * as Common from "./common.services";
 
 import { CreateQuery } from 'mongoose';
  
 
 /**
  * Service Methods
  */
  
 export const create = async (newDataSetEntry: CreateQuery<IDataSetEntry>): Promise<IDataSetEntry> => {

   return DataSetEntry.create(newDataSetEntry)
     .then((data: IDataSetEntry) => {
       return data;
     })
     .catch((error: Error) => {
       throw error;
     });
 };
 