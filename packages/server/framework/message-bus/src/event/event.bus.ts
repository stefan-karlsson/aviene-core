import type { MessageScheduler } from '../message/message.scheduler.js';
import type { EventsPublisher } from './event.publisher.js';
import type { Event } from './event.types.js';

export interface EventBus extends EventsPublisher, MessageScheduler<Event> {}
