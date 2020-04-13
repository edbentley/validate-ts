/**
 * This is used to ensure a consistent interface between the package versions.
 * Must be incremented whenever there is a breaking change to `ValidateTsType`.
 *
 */
export const typeVersion = 1;

export type ValidateTsType =
  | { tag: "primitive"; type: Primitive }
  | { tag: "literal"; value: Literal };

export type Primitive =
  | null
  | "undefined"
  | "string"
  | "boolean"
  | "number"
  | "bigint"
  | "symbol";

export type Literal = string | number | boolean;
