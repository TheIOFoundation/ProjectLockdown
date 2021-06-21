/**
 * Data Model Interfaces
 */
 import Territory, { ITerritory } from "../models/territory.model";
 
 import { CreateQuery } from 'mongoose';
  
 
 /**
  * Service Methods
  */
  
 export const create = async (newTerritory: CreateQuery<ITerritory>): Promise<ITerritory> => {
   return Territory.create(newTerritory)
     .then((data: ITerritory) => {
       return data;
     })
     .catch((error: Error) => {
       throw error;
     });
 };
   
 export const findOneOrCreate = async (territory: CreateQuery<ITerritory>): Promise<ITerritory> => {
   const found = await Territory.findOne({ PLD_Code: territory.PLD_Code });
   return found || create(territory) as any;
 };
 