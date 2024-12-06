import type { EventTypeOf } from './event.processor.js';
import type { CreateEventType, Event, EventDataOf, EventMetaDataOf } from './event.types.js';

export const event = <EventType extends Event>(
  type: EventTypeOf<EventType>,
  data: EventDataOf<EventType>,
  metadata?: EventMetaDataOf<EventType>,
): CreateEventType<EventTypeOf<EventType>, EventDataOf<EventType>, EventMetaDataOf<EventType>> => {
  return {
    type,
    data,
    metadata,
  };
};
