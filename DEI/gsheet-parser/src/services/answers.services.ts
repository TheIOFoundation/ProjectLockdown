/**
 * Data Model Interfaces
 */
 import Answer, { IAnswer } from "../models/answer.model";
 import * as Common from "./common.services";
 
 import { CreateQuery } from 'mongoose';
  
 
 /**
  * Service Methods
  */
  
 export const create = async (newAnswer: CreateQuery<IAnswer>): Promise<IAnswer> => {
    
   return Answer.create(newAnswer)
     .then((data: IAnswer) => {
       return data;
     })
     .catch((error: Error) => {
       throw error;
     });
 };
 