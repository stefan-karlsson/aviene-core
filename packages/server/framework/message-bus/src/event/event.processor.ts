import type { EventHandler } from './event.handler.js';
import type { Event } from './event.types.js';

export type EventTypeOf<T extends Event> = T['type'];

export interface EventProcessor {
  subscribe<EventType extends Event>(
    eventHandler: EventHandler<EventType>,
    ...eventTypes: EventTypeOf<EventType>[]
  ): void;
}
