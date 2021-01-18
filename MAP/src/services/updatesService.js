import { EventTargetShim } from '../utils/EventTargetShim.js';

class UpdatesService extends EventTargetShim {
  async getUpdates(forceRefresh) {
    if (forceRefresh || !this.updates) {
      try {
        // @fixme get actual dynamic data
        this.updates = await fetch('../data/updates.json').then(r => r.json());
        await this.updates;
      } catch {
        return {
          status: 'failed',
        };
      }
    }
    this.dispatchEvent(new Event('change'));
    return {
      status: 'success',
      data: this.updates,
    };
  }
}

export const updatesService = new UpdatesService();
