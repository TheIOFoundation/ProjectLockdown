/**
 * Data Model Interfaces
 */
 import Link, { ILink } from "../models/link.model";
 import * as Common from "./common.services";
 
 import { CreateQuery } from 'mongoose';
  
 
 /**
  * Service Methods
  */
  
 export const create = async (newLink: CreateQuery<ILink>): Promise<ILink> => {
   const id = Common.generateQuickGuid();
 
   newLink.LinkUID = id;
 
   return Link.create(newLink)
     .then((data: ILink) => {
       return data;
     })
     .catch((error: Error) => {
       throw error;
     });
 };
 