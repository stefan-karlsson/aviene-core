import type { CommandHandler } from '../command/command.handler.js';
import type { EventHandler } from '../event/event.handler.js';

export type MessageHandler = EventHandler | CommandHandler;
