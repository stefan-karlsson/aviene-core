import type { CommandBus } from '../command/command.bus.js';
import type { Command } from '../command/command.types.js';
import type { EventBus } from '../event/event.bus.js';
import type { Event } from '../event/event.types.js';
import type { ScheduleOptions } from './message.types.js';

export interface MessageBus extends CommandBus, EventBus {
  schedule<MessageType extends Command | Event>(message: MessageType, when?: ScheduleOptions): void;
}
