/**
 * Data Model Interfaces
 */
 import Region, { IRegion } from "../models/region.model";
 import { CreateQuery } from 'mongoose';
import { getRegionByName, insertData } from "./apiservice";
  
 /**
  * Service Methods
  */
 export const create = async (newRegion: CreateQuery<IRegion>) => {

     try {
       const region  = await insertData('Region', newRegion);
       const {data} = region;
      return  data;
    } catch (error) {
    throw error;
   }
 };
   
export const findOneOrCreate = async (regionName: string) => {
  const found = await getRegionByName(regionName);
  const {data} = found;
  if (!(data)){
    const region = {
      name: regionName,
      description: regionName,
      tld: '0'
    }
    return await create(region) as any 
   }
  return null;
};