import type { Command } from './command.types.js';

export interface CommandSender {
  send<CommandType extends Command = Command>(command: CommandType): Promise<void>;
}
