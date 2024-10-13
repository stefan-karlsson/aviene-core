import { AsyncLocalStorage } from 'node:async_hooks';

/**
 * Manages the request context for handling request-specific data.
 *
 * This class utilizes AsyncLocalStorage to maintain a coherent context
 * across asynchronous operations, ensuring that request and response
 * data are accessible throughout the request lifecycle.
 */
export class RequestContext<Request = unknown, Response = unknown> {
  static cls = new AsyncLocalStorage<RequestContext>();

  /**
   * Retrieves the current request context.
   *
   * The context remains consistent across asynchronous operations.
   */
  static get currentContext() {
    return RequestContext.cls.getStore();
  }

  constructor(
    readonly request: Request,
    readonly response: Response,
  ) {}
}
