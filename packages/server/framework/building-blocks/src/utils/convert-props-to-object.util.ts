import { convertToPlainObject } from './convert-to-plain-object.util.js';

/**
 * Converts Entity/Value Object properties to a plain object.
 * Useful for testing and debugging.
 *
 * @param props - The object containing properties to convert.
 * @returns A plain object with converted properties.
 */
export function convertPropsToObject<T>(props: T): T {
  const propsCopy = structuredClone(props) as T;

  for (const key in propsCopy) {
    if (Object.prototype.hasOwnProperty.call(propsCopy, key)) {
      const typedKey = key as keyof T;

      if (Array.isArray(propsCopy[typedKey])) {
        propsCopy[typedKey] = (propsCopy[typedKey] as unknown[]).map((item) => {
          return convertToPlainObject(item);
        }) as unknown as T[keyof T];
      } else {
        propsCopy[typedKey] = convertToPlainObject(propsCopy[typedKey]) as T[keyof T];
      }
    }
  }

  return propsCopy;
}
