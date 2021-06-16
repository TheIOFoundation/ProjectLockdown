import { performance } from 'perf_hooks';
import lockdownLoader from './lockdown/lockdown';
import worldmapLoader from './worldmap/worldmap';
import totalsLoader from './totals/totals';
import updatesLoader from './lockdown/updates';
import logger from '../utils/logger';

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
