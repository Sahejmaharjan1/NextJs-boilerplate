/** A high-level generic object. */
export type GenericObject<T = unknown> = { [key: string]: T };

/** A high-level error object. */
export interface ErrorObject {
  message: string;
  description: string;
}

/** Generic type to allow null. */
export type Nullable<T> = T | null;

/** Function with single parameter returning void*/
export type FunctionWithParam<T> = (p: T) => void;

/** Function with single parameter returning void*/
export type FunctionWithNoParam = () => void;
