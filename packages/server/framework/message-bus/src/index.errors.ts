import { ExceptionBase } from '@aviene/exceptions';

abstract class CommandHandlerError extends ExceptionBase {}

export class CommandHandlerNotFoundError extends CommandHandlerError {
  readonly code = 'MESSAGE_BUS.COMMAND_HANDLER_NOT_FOUND';
}

export class CommandHandlerAlreadyRegisteredError extends CommandHandlerError {
  readonly code = 'MESSAGE_BUS.COMMAND_HANDLER_ALREADY_REGISTERED';
}
