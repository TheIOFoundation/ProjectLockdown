import { EventTargetShim } from '../utils/EventTargetShim.js';

class PopulationService extends EventTargetShim {
  constructor() {
    super();
    this.cache = {};
  }

  // async getPopulation(forceRefresh) {
  //   if (forceRefresh || !this.__population) {
  //     try {
  //       this.__population = await fetch(new URL('../../data/population.json', import.meta.url)).then((r) => r.json());
  //     } catch {
  //       return {
  //         status: 'failed',
  //       };
  //     }
  //   }
  //   this.dispatchEvent(new Event('change'));
  //   return {
  //     status: 'success',
  //     data: this.__population ?? 0,
  //   };
  // }
}

export const populationService = new PopulationService();
