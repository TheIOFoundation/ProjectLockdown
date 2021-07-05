import { performance } from 'perf_hooks';
import lockdownLoader from './lockdown/lockdown';
import worldmapLoader from './worldmap/worldmap';
import totalsLoader from './totals/totals';
import updatesLoader from './lockdown/updates';
import logger from '../utils/logger';

import dotenv from 'dotenv';
import fs from 'fs';
import connect from '../connect';



// load .env
if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
}

const db = `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB}:${process.env.MONGO_PORT}/project-lockdown?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@${process.env.MONGO_DB_USER}@`;

connect({db});


/**
 * Execute all loaders
 */
async function executeLoaders() {
  const t0 = performance.now();
  
  logger.log('[Lockdown] start');
  const { lockdownStatusByTerritory } = await lockdownLoader();

  logger.log('[WorldMap + Total + Updates] start');
  await Promise.all([
    totalsLoader(lockdownStatusByTerritory),
    updatesLoader(),
  ]);

  const t1 = performance.now();
  logger.log(`Completed, took ${Math.round(t1 - t0)} milleseconds`);
}

executeLoaders();
