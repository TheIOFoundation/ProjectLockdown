/**
 * Data Model Interfaces
 */
 import Region, { IRegion } from "../models/region.model";
 import { CreateQuery } from 'mongoose';
  
 /**
  * Service Methods
  */
 export const create = async (newRegion: CreateQuery<IRegion>): Promise<IRegion> => {
   return Region.create(newRegion)
     .then((data: IRegion) => {
       return data;
     })
     .catch((error: Error) => {
       throw error;
     });
 };
   
export const findOneOrCreate = async (regionName: string): Promise<IRegion> => {
  const found = await Region.findOne({ Name: regionName });
  return found || create({
    Name: regionName,
    Description: regionName,
    TLD: '0'
  } as IRegion) as any;
};