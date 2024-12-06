/**
 * Ensures that the range parameters are valid, where `min` is a number
 * less than or equal to `max`.
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {boolean} - Returns `true` if `min` and `max` are valid numbers and `min <= max`, otherwise `false`.
 */
export function isValidRange(min: number, max: number): boolean {
  return typeof min === 'number' && typeof max === 'number' && min <= max;
}
