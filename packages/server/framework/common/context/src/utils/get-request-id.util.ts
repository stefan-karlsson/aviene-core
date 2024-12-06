import { getContext } from './get-context.util.js';

export function getRequestId() {
  return getContext().requestId;
}
