import { ExceptionBase } from '../exception.base.js';
import { CONFLICT } from '../exception.codes.js';

/**
 * Used to indicate conflicting entities (usually in the database)
 *
 * @class ConflictException
 * @extends {ExceptionBase}
 */

export class ConflictException extends ExceptionBase {
  readonly code = CONFLICT;
}
