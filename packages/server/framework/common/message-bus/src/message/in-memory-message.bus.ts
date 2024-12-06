import type { CommandHandler } from '../command/command.handler.js';
import type { CommandProcessor } from '../command/command.processor.js';
import type { Command, CommandTypeOf } from '../command/command.types.js';
import type { EventHandler } from '../event/event.handler.js';
import type { EventProcessor } from '../event/event.processor.js';
import type { Event, EventTypeOf } from '../event/event.types.js';
import { CommandHandlerAlreadyRegisteredError, CommandHandlerNotFoundError } from '../index.errors.js';
import type { MessageBus } from './message.bus.js';
import type { MessageHandler } from './message.handler.js';
import type { ScheduledMessageProcessor } from './message.processor.js';
import type { ScheduleOptions, ScheduledMessage } from './message.types.js';

export const getInMemoryMessageBus = (): MessageBus & EventProcessor & CommandProcessor & ScheduledMessageProcessor => {
  const allHandlers = new Map<string, MessageHandler[]>();
  let pendingMessages: ScheduledMessage[] = [];

  return {
    send: async <CommandType extends Command = Command>(command: CommandType): Promise<void> => {
      const handlers = allHandlers.get(command.type);

      if (handlers === undefined || handlers.length === 0) {
        throw new CommandHandlerNotFoundError(`No handler registered for command ${command.type}!`);
      }

      const commandHandler = handlers[0] as CommandHandler<CommandType>;

      await commandHandler(command);
    },

    publish: async <EventType extends Event = Event>(event: EventType): Promise<void> => {
      const handlers = allHandlers.get(event.type) ?? [];

      for (const handler of handlers) {
        const eventHandler = handler as EventHandler<EventType>;

        await eventHandler(event);
      }
    },

    schedule: <MessageType extends Command | Event>(message: MessageType, when?: ScheduleOptions): void => {
      pendingMessages = [...pendingMessages, { message, options: when }];
    },

    handle: <CommandType extends Command>(
      commandHandler: CommandHandler<CommandType>,
      ...commandTypes: CommandTypeOf<CommandType>[]
    ): void => {
      const alreadyRegistered = [...allHandlers.keys()].filter((registered) => commandTypes.includes(registered));

      if (alreadyRegistered.length > 0) {
        throw new CommandHandlerAlreadyRegisteredError(
          `Cannot register handler for commands ${alreadyRegistered.join(', ')} as they're already registered!`,
        );
      }
      for (const commandType of commandTypes) {
        allHandlers.set(commandType, [commandHandler as MessageHandler]);
      }
    },

    subscribe<EventType extends Event>(
      eventHandler: EventHandler<EventType>,
      ...eventTypes: EventTypeOf<EventType>[]
    ): void {
      for (const eventType of eventTypes) {
        if (!allHandlers.has(eventType)) {
          allHandlers.set(eventType, []);
        }

        allHandlers.set(eventType, [...(allHandlers.get(eventType) ?? []), eventHandler as MessageHandler]);
      }
    },

    dequeue: (): ScheduledMessage[] => {
      const pending = pendingMessages;
      pendingMessages = [];
      return pending;
    },
  };
};
