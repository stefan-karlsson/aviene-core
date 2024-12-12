import { getContext } from './get-context.util.js';

export function setRequestId(id: string) {
  const ctx = getContext();
  ctx.requestId = id;
}
