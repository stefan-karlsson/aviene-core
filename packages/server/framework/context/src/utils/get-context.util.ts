import { AppRequestContext } from './common/app.request-context.js';
import { RequestContext } from './common/request-context.base.js';

export function getContext() {
  const ctx = RequestContext.currentContext?.request;
  if (ctx instanceof AppRequestContext) {
    return ctx;
  }

  throw new Error(`Current context is not an instance of ${AppRequestContext.name}`);
}
