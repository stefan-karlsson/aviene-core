export function isNotIn<T>(value: T, values: T[]): boolean {
  return !values.includes(value);
}
