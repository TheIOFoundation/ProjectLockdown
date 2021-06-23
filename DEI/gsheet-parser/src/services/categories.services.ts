/**
 * Data Model Interfaces
 */
 import Category, { ICategory } from "../models/category.model";
 import * as Common from "./common.services";
 
 import { CreateQuery } from 'mongoose';
  
 
 /**
  * Service Methods
  */
  
 export const create = async (newCategory: CreateQuery<ICategory>): Promise<ICategory> => {
    
   return Category.create(newCategory)
     .then((data: ICategory) => {
       return data;
     })
     .catch((error: Error) => {
       throw error;
     });
 };
 