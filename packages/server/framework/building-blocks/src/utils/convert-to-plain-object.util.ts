import { Entity } from '../common/entity.base.js';
import { ValueObject } from '../common/value-object.base.js';

export type PlainObject = Record<string, unknown>;

/**
 * Converts a ValueObject or Entity to a plain object.
 * If the item is not an Entity or ValueObject, it is returned as is.
 *
 * @param item - The item to convert.
 * @returns The converted plain object or the original item.
 */
export function convertToPlainObject(item: unknown): unknown {
  if (ValueObject.isValueObject(item)) {
    return item.unpack();
  }

  if (Entity.isEntity(item)) {
    return item.toObject();
  }

  return item;
}
