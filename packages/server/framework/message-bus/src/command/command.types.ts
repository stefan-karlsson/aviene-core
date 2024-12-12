import type { DefaultRecord, Flavour } from '@aviene/types';

export type DefaultCommandMetadata = {
  /**
   * ID for correlation purposes (for commands that arrive from other microservices,logs correlation, etc)
   */
  readonly correlationId: string;

  /**
   * Causation id to reconstruct execution order if needed
   */
  readonly causationId?: string;

  /**
   * ID of a user who invoked the command. Can be useful for logging and tracking execution of commands and events
   */
  readonly userId?: string;

  /**
   * Time when the command occurred. Mostly for tracing purposes
   */
  readonly timestamp: number;
};

export type Command<
  CommandType extends string = string,
  CommandData extends DefaultRecord = DefaultRecord,
  CommandMetaData extends DefaultRecord = DefaultCommandMetadata,
> = Flavour<
  Readonly<{
    type: CommandType;
    data: Readonly<CommandData>;
    metadata?: CommandMetaData | undefined;
  }>,
  'Command'
>;

export type CommandTypeOf<T extends Command> = T['type'];
export type CommandDataOf<T extends Command> = T['data'];
export type CommandMetaDataOf<T extends Command> = T['metadata'];

export type CreateCommandType<
  CommandType extends string,
  CommandData extends DefaultRecord,
  CommandMetaData extends DefaultRecord | undefined,
> = Readonly<{
  type: CommandType;
  data: CommandData;
  metadata?: CommandMetaData;
}>;

export type CreatedCommandType<T extends Command> = Readonly<{
  type: CommandTypeOf<T>;
  data: CommandDataOf<T>;
  metadata: CommandMetaDataOf<T>;
}>;
