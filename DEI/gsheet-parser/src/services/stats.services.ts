/**
 * Data Model Interfaces
 */
 import Stat, { IStat } from "../models/stat.model";
 import * as Common from "./common.services";
 
 import { CreateQuery } from 'mongoose';
 
 /**
  * Service Methods
  */
 
 export const create = async (newStat: CreateQuery<IStat>): Promise<IStat> => {
   const id = Common.generateQuickGuid();
 
   newStat.StatUID = id;
 
   return Stat.create(newStat)
     .then((data: IStat) => {
       return data;
     })
     .catch((error: Error) => {
       throw error;
     });
 };
 
//  export const update = async (
//    id: string,
//    statUpdate: IStat
//  ): Promise<IStat | null> => {
//    const item = await find(id);
 
//    if (!item) {
//      return null;
//    }
 
//    stats[id] = statUpdate;
 
//    return stats[id];
//  };
 
//  export const remove = async (id: string): Promise<null | void> => {
//    const astat = await find(id);
 
//    if (!astat) {
//      return null;
//    }
 
//    delete stats[id];
//  };