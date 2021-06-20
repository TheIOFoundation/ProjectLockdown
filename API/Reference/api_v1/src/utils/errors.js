export class BackendError {
  constructor(messageOrError = null) {
    this.message = null;
    this.previous = null;

    if (typeof messageOrError == 'string') {
      this.message = message;
    } else if (messageOrError && messageOrError.message) {
      this.message = messageOrError.message;
      this.previous = messageOrError;
    }
  }
}

export class GoogleAPIError extends BackendError {}
export class LoaderNetworkError extends BackendError {}