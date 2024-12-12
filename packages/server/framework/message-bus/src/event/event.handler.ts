import type { Event } from './event.types.js';

export type EventHandler<EventType extends Event = Event> = (event: EventType) => Promise<void> | void;
