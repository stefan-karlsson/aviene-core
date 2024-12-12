import { getContext } from './utils/get-context.util.js';
import { getRequestId } from './utils/get-request-id.util.js';
import { setRequestId } from './utils/set-request-id.util.js';

type RequestContextServiceObject = {
  /**
   * Gets the current request context
   *
   * @see {@link getContext}
   */
  getContext: typeof getContext;

  /**
   * Gets the current request id
   */
  getRequestId: typeof getRequestId;

  /**
   * Sets the current request id
   */
  setRequestId: typeof setRequestId;
};

export const RequestContextService: RequestContextServiceObject = {
  getContext,

  getRequestId,
  setRequestId,
};
