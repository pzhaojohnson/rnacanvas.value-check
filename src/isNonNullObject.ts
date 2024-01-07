export type NonNullObject = { [key: string]: unknown };

/**
 * Returns true if the type of the value is "object" and the value is not null.
 *
 * Returns false otherwise.
 */
export function isNonNullObject(value: unknown): value is NonNullObject {
  return (
    typeof value == 'object'
    && value !== null
  );
}
