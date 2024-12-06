/**
 * Checks if a given value is considered "empty."
 *
 * A value is considered empty if it is:
 * - `null` or `undefined`
 * - A string with no characters or only whitespace
 * - An array that is empty or contains only empty values
 * - An object with no own properties (i.e., no keys)
 * - A Date instance (always considered non-empty)
 *
 * @param {unknown} value - The value to check for emptiness.
 * @returns {boolean} - Returns `true` if the value is empty, otherwise `false`.
 */
export function isEmpty(value: unknown) {
  if (value === null || value === undefined) {
    return true;
  }

  switch (typeof value) {
    case 'number':
    case 'boolean':
      return false;

    case 'string':
      return value.trim().length === 0;

    case 'object':
      if (value instanceof Date) {
        return false;
      }

      if (Array.isArray(value)) {
        return value.length === 0 || value.every(isEmpty);
      }

      return Object.keys(value).length === 0;

    default:
      return false;
  }
}
