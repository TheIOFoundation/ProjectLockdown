import { EventTargetShim } from '../utils/EventTargetShim.js';
const mockData = {
  updates: [
    {
      type: 'announcement',
      title: 'Project Lockdown v1.0 is out!',
      content: 'Check our features and tell us what you think!',
      link: 'https://www.ua.es/',
      date: '04-04-2020 08:13',
    },
    {
      type: 'new_entry',
      title: 'PHL has new data!',
      content: 'dsfasfas',
      link: 'https://www.google.com/search?clien',
      date: '04-04-2020 08:08',
    },
  ],
};

class UpdatesService extends EventTargetShim {
  async getUpdates(forceRefresh) {
    if (forceRefresh || !this.updates) {
      try {
        // @fixme get actual dynamic data. import.meta.url is not recognised by the loader
        // this.updates = await fetch(new URL('../../data/updates.json', import.meta.url)).then((r) => r.json());
        this.updates = mockData;
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
