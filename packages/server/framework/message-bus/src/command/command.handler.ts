import type { Command } from './command.types.js';

export type CommandHandler<CommandType extends Command = Command> = (command: CommandType) => Promise<void> | void;
