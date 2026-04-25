/**
 * Returns `true` if the value is an empty string and `false` otherwise.
 */
export function isEmptyString(value: unknown): value is string {
  return value === '';
}
