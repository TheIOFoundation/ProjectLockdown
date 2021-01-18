export class EventTargetShim {
  constructor() {
    const delegate = document.createDocumentFragment();
    this.addEventListener = delegate.addEventListener.bind(delegate);
    this.dispatchEvent = delegate.dispatchEvent.bind(delegate);
    this.removeEventListener = delegate.removeEventListener.bind(delegate);
    this.__lastUpdate = Date.now();
  }

  _shouldInvalidate() {
    const FIVE_MIN = 5 * 60 * 1000;
    return new Date() - this.__lastUpdate > FIVE_MIN;
  }
}
