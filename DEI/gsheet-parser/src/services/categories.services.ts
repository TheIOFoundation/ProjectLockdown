/**
 * Data Model Interfaces
 */
 import { ICategory } from "../models/category.model";
 import { insertData } from "./apiservice";
 import { CreateQuery } from 'mongoose';
  
 
 /**
  * Service Methods
  */
  
 export const create = async (newCategory: CreateQuery<ICategory>) => {
    
     try {
      return await insertData('Category', newCategory);
   } catch (error) {
    throw error;
   }

 };
 