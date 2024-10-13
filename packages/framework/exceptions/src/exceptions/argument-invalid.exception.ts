import { ExceptionBase } from '../exception.base.js';
import { ARGUMENT_INVALID } from '../exception.codes.js';

/**
 * Used to indicate that an incorrect argument was provided to a method/function/class constructor
 *
 * @class ArgumentInvalidException
 * @extends {ExceptionBase}
 */

export class ArgumentInvalidException extends ExceptionBase {
  readonly code = ARGUMENT_INVALID;
}
