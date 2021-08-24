import fs from 'fs';
import axios from "axios";
import dotenv from 'dotenv';


 // load .env
if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
}

const BASEURL = process.env.BASE_URL;

export const insertData = (endPoint: String, data: any) => {
    const url = `${BASEURL}/${endPoint}`;
    return axios.post(url, data);
}
