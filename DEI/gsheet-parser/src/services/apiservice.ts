import fs from 'fs';
import axios from "axios";
import dotenv from 'dotenv';


 // load .env
if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
}

const BASEURL = process.env.API_URL;

export const insertData = (endPoint: String, data: any) => {
    const url = `${BASEURL}/${endPoint}`;
    console.log({url});
    return axios.post(url, data);
}

export const getTerritoryByPLDCode =(code: string) => {
  const url = `${BASEURL}/Territory/getByPLD?code=${code}`;
  return axios.get(url); 
}

export const getRegionByName = (name: string) => {
    const url = `${BASEURL}/Region/getByName?name=${name}`;
    return axios.get(url);
 
}


