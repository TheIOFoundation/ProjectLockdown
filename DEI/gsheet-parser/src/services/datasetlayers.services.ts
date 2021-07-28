/**
 * Data Model Interfaces
 */
 import DataSetLayer, { IDataSetLayer } from "../models/datasetlayer.model";
 import * as Common from "./common.services";
 import dotenv from 'dotenv';
import fs from 'fs';
import axios from "axios";
 
 import { CreateQuery } from 'mongoose';
 // load .env
if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
}

const BASEURL = process.env.BASE_URL;
 
 /**
  * Service Methods
  */
  
 export const create = async (newDataSetLayer: CreateQuery<IDataSetLayer>) => {
   
  return axios.post(`${BASEURL}/DSL`, newDataSetLayer )
      .then((data) => {
          return data;
      }).catch((error: Error) => {
          throw error;
      });
 };
 