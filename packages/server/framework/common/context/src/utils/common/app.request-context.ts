import { RequestContext } from './request-context.base.js';

export class AppRequestContext extends RequestContext {
  requestId!: string;
}
