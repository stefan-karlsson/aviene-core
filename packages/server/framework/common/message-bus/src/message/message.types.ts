import type { CommandProcessor } from '../command/command.processor.js';
import type { Command } from '../command/command.types.js';
import type { EventProcessor } from '../event/event.processor.js';
import type { Event } from '../event/event.types.js';

export type MessageProcessor = EventProcessor | CommandProcessor;

export type ScheduleOptions = { afterInMs: number } | { at: Date };

export type ScheduledMessage = {
  message: Event | Command;
  options?: ScheduleOptions;
};
