import { isEmpty } from './is-empty.guard.js';
import { isValidRange } from './is-valid-range.guard.js';

/**
 * Checks if the length of a given value falls within the specified range.
 *
 * @param {number | string | Array<unknown>} value - The value to check. Can be a number, string, or array.
 * @param {number} min - The minimum allowable length.
 * @param {number} max - The maximum allowable length.
 * @returns {boolean} - Returns `true` if the length of `value` is between `min` and `max` (inclusive), otherwise `false`.
 */
export function hasLengthBetween(value: number | string | unknown[], min: number, max: number): boolean {
  if (!isEmpty(value) || !isValidRange(min, max)) {
    return false;
  }

  const valueLength = typeof value === 'number' ? value.toString().length : value.length;

  return valueLength >= min && valueLength <= max;
}
