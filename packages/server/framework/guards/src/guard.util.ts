import { hasLengthBetween } from './variants/has-length-between.guard.js';
import { isEmpty } from './variants/is-empty.guard.js';
import { isNotIn } from './variants/is-not-in.guard.js';
import { isValidRange } from './variants/is-valid-range.guard.js';

type GuardUtilityObject = {
  /**
   * Checks if a given value is considered "empty."
   *
   * @see {@link isEmpty}
   */
  isEmpty: typeof isEmpty;

  /**
   * Checks if the length of a given value falls within the specified range.
   */
  hasLengthBetween: typeof hasLengthBetween;

  /**
   * Ensures that the range parameters are valid, where `min` is a number
   * less than or equal to `max`.
   */
  isValidRange: typeof isValidRange;

  /**
   * Checks if the given value is not in the provided list of values.
   *
   * @param {T} value - The value to check.
   * @param {T[]} values - The list of values to check against.
   * @returns {boolean} - Returns `true` if `value` is not in the list of `values`, otherwise `false`.
   */
  isNotIn: typeof isNotIn;
};

/**
 * `Guard` is a utility object containing guard functions designed to protect invariants within the domain layer.
 * These functions help ensure that domain rules are upheld by validating input and state conditions.
 *
 * Each guard function returns a boolean indicating whether a condition is met. If a condition fails (returns `false`),
 * it is recommended to throw a new exception that describes the specific domain rule violation.
 *
 * Example Usage:
 *
 * ```typescript
 * if (!Guard.isNonEmpty(value)) {
 *   throw new ArgumentNotProvidedException('Value must not be empty.');
 * }
 * ```
 */
export const Guard: GuardUtilityObject = {
  isEmpty,
  hasLengthBetween,
  isValidRange,
  isNotIn,
};
