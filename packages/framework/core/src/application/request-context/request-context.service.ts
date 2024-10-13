import { RequestContext } from './request-context.base.js';

export class AppRequestContext extends RequestContext {
  requestId!: string;
}

// biome-ignore lint/complexity/noStaticOnlyClass: Allows for simpler usage of RequestContextService, making it easier to retrieve the request ID from an e.g error base class.
export class RequestContextService {
  static getContext(): AppRequestContext {
    const ctx = RequestContext.currentContext?.request;
    if (ctx instanceof AppRequestContext) {
      return ctx;
    }

    throw new Error(`Current context is not an instance of ${AppRequestContext.name}`);
  }

  static setRequestId(id: string): void {
    const ctx = RequestContextService.getContext();
    ctx.requestId = id;
  }

  static getRequestId(): string {
    return RequestContextService.getContext().requestId;
  }
}
