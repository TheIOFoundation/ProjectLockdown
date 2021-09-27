/**
 * Data Model Interfaces
 */
 import Territory, { ITerritory } from "../models/territory.model";
 
 import { CreateQuery } from 'mongoose';
 import { insertData, getTerritoryByPLDCode } from "./apiservice";
import logger from "../utils/logger";
  
 
 /**
  * Service Methods
  */
  
 export const create = async (newTerritory: CreateQuery<ITerritory>) => {
     try {
      return await insertData('Territory', newTerritory);
    } catch (error) {
    throw error;
   }
 };
   
 export const findOneOrCreate = async (territory: CreateQuery<ITerritory>) => {
  try {
    const found = await getTerritoryByPLDCode(territory.pldCode);
    const {status, data} = found;
    if (!(status === 200 && data)){
     return await create(territory) as any 
    }
    return null;
  } catch (error) {
    console.log({error});
  }

 };