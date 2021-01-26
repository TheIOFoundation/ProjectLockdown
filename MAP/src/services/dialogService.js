import { EventTargetShim } from '../utils/EventTargetShim.js';

class DialogService extends EventTargetShim {
  close(status) {
    this.dispatchEvent(new CustomEvent('close', { detail: status }));
  }
}

export const dialogService = new DialogService();
