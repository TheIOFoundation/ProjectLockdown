class PwaUpdateAvailable extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<slot><button>New update available!</button></slot>`;
    this._refreshing = false;
  }

  async connectedCallback() {
    this.addEventListener('click', this._postMessage.bind(this));

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this._refreshing) return;
      window.location.reload();
      this._refreshing = true;
    });
  }

  async _postMessage(e) {
    e.preventDefault();
    const reg = await navigator.serviceWorker.getRegistration();
    reg.waiting.postMessage({ type: 'SKIP_WAITING' });
  }
}

customElements.define('pwa-update-available', PwaUpdateAvailable);
