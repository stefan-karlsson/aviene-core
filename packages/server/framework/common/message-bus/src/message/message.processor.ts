import type { ScheduledMessage } from './message.types.js';

export interface ScheduledMessageProcessor {
  dequeue(): ScheduledMessage[];
}
