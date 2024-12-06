import type { CommandHandler } from './command.handler.js';

import type { Command, CommandTypeOf } from './command.types.js';

export interface CommandProcessor {
  handle<CommandType extends Command>(
    commandHandler: CommandHandler<CommandType>,
    ...commandTypes: CommandTypeOf<CommandType>[]
  ): void;
}
