import type { DefaultRecord, Flavour } from '@aviene/types';

export type Event<
  EventType extends string = string,
  EventData extends Record<string, unknown> = Record<string, unknown>,
  EventMetaData extends Record<string, unknown> = Record<string, unknown>,
> = Flavour<
  Readonly<{
    type: EventType;
    data: Readonly<EventData>;
    metadata?: Readonly<EventMetaData>;
  }>,
  'Event'
>;

export type CanHandle<T extends Event> = EventTypeOf<T>[];

export type CreateEventType<
  EventType extends string,
  EventData extends DefaultRecord,
  EventMetaData extends DefaultRecord | undefined,
> = Readonly<{
  type: EventType;
  data: EventData;
  metadata?: EventMetaData;
}>;

export type EventTypeOf<T extends Event> = T['type'];
export type EventDataOf<T extends Event> = T['data'];
export type EventMetaDataOf<T extends Event> = T['metadata'];

export type ReadEvent<
  EventType extends Event = Event,
  EventMetaDataType extends EventMetaDataOf<EventType> & ReadEventMetadata = EventMetaDataOf<EventType> &
    ReadEventMetadata,
> = CreateEventType<EventTypeOf<EventType>, EventDataOf<EventType>, EventMetaDataType> &
  EventType & { metadata: EventMetaDataType };

export type ReadEventMetadata = Readonly<{
  eventId: string;
  streamPosition: bigint;
  streamName: string;
}>;
