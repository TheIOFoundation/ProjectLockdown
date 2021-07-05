/**
 * Data Model Interfaces
 */
 import DataPoint, { IDataPoint } from "../models/datapoint.model";
 import * as Common from "./common.services";
 
 import { CreateQuery } from 'mongoose';
  
 
 /**
  * Service Methods
  */

 // first store answer into database, get the answer ID and push into DataPoint.answers[], then save DataPoint into DB
  
 export const create = async (newDataPoint: CreateQuery<IDataPoint>): Promise<IDataPoint> => {
   
   return DataPoint.create(newDataPoint)
     .then((data: IDataPoint) => {
       return data;
     })
     .catch((error: Error) => {
       throw error;
     });
 };
 