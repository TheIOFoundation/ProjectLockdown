/**
 * Data Model Interfaces
 */
 import { IDataSetLayer } from "../models/datasetlayer.model";

 import { CreateQuery } from 'mongoose';
import { insertData } from "./apiservice";

 /**
  * Service Methods
  */
  
 export const create = async (newDataSetLayer: CreateQuery<IDataSetLayer>) => {
   
      try {
        return await insertData('DSL', newDataSetLayer);
     } catch (error) {
      throw error;
     }
 };
 