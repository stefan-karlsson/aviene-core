import type { MessageScheduler } from '../message/message.scheduler.js';
import type { CommandSender } from './command.sender.js';
import type { Command } from './command.types.js';

export interface CommandBus extends CommandSender, MessageScheduler<Command> {}
