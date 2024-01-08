export type Nullish = null | undefined;

/**
 * Returns true if the value is null or undefined.
 *
 * Returns false otherwise.
 */
export function isNullish(value: unknown): value is Nullish {
  return (
    value === null
    || value === undefined
  );
}
