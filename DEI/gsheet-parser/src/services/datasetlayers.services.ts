/**
 * Data Model Interfaces
 */
 import DataSetLayer, { IDataSetLayer } from "../models/datasetlayer.model";
 import * as Common from "./common.services";
 
 import { CreateQuery } from 'mongoose';
  
 
 /**
  * Service Methods
  */
  
 export const create = async (newDataSetLayer: CreateQuery<IDataSetLayer>): Promise<IDataSetLayer> => {
   
   return DataSetLayer.create(newDataSetLayer)
     .then((data: IDataSetLayer) => {
       console.log(1);
       return data;
     })
     .catch((error: Error) => {
      console.log(error);
       throw error;
     });
 };
 