import type { Command } from '../command/command.types.js';
import type { Event } from '../event/event.types.js';
import type { ScheduleOptions } from './message.types.js';

export interface MessageScheduler<CommandOrEvent extends Command | Event> {
  schedule<MessageType extends CommandOrEvent>(message: MessageType, when?: ScheduleOptions): void;
}
