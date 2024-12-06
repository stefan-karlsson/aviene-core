import type { Event } from './event.types.js';

export interface EventsPublisher {
  publish<EventType extends Event = Event>(event: EventType): Promise<void>;
}
