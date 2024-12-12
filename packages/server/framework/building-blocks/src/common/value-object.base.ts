import { ArgumentNotProvidedException } from '@aviene/exceptions';
import { Guard } from '@aviene/guards';
import { convertPropsToObject } from '../index.js';

/**
 * Domain Primitive is an object that contains only a single value
 */
export type Primitives = string | number | boolean;
export interface DomainPrimitive<T extends Primitives | Date> {
  value: T;
}

type ValueObjectProps<T> = T extends Primitives | Date ? DomainPrimitive<T> : T;

export abstract class ValueObject<T> {
  protected readonly props: ValueObjectProps<T>;

  constructor(props: ValueObjectProps<T>) {
    this.checkIfEmpty(props);
    this.validate(props);
    this.props = props;
  }

  protected abstract validate(props: ValueObjectProps<T>): void;

  static isValueObject(obj: unknown): obj is ValueObject<unknown> {
    return obj instanceof ValueObject;
  }

  /**
   *  Check if two Value Objects are equal. Checks structural equality.
   * @param vo ValueObject
   */
  equals(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    return JSON.stringify(this.unpack()) === JSON.stringify(vo.unpack());
  }

  /**
   * Unpack a value object to get its raw properties
   */
  unpack(): T {
    if (this.isDomainPrimitive(this.props)) {
      return this.props.value;
    }

    const propsCopy = this.isObject(this.props) ? convertPropsToObject(this.props) : this.props;

    return Object.freeze(propsCopy) as T;
  }

  private checkIfEmpty(props: ValueObjectProps<T>): void {
    if (Guard.isEmpty(props) ?? (this.isDomainPrimitive(props) && Guard.isEmpty(props.value))) {
      throw new ArgumentNotProvidedException('Property cannot be empty');
    }
  }

  private isDomainPrimitive(obj: unknown): obj is DomainPrimitive<T & (Primitives | Date)> {
    return typeof obj === 'object' && obj !== null && 'value' in obj;
  }

  private isObject(obj: unknown): obj is Record<string, unknown> {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
  }
}
