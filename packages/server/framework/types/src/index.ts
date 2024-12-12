export * from './algebraic/index.js';

export type Brand<K, T> = K & { readonly __brand: T };
export type Flavour<K, T> = K & { readonly __brand?: T };

export type DefaultRecord = Record<string, unknown>;

export type NonNullable<T> = T extends null | undefined ? never : T;
