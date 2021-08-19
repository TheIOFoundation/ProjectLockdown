/**
 * Data Model Interfaces
 */
 import { CreateQuery } from "mongoose";
import { IDataPoint } from "../models/datapoint.model";
import { insertData } from "./apiservice";

 
  
 
 /**
  * Service Methods
  */

 // first store answer into database, get the answer ID and push into DataPoint.answers[], then save DataPoint into DB
  
 export const create = async (newDataPoint: CreateQuery<IDataPoint>) => {
   
     try {
        return await insertData('DataPoint', newDataPoint);
     } catch (error) {
      throw error;
     }
    
 };
 