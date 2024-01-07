/**
 * Returns true if the value is a string and false otherwise.
 */
export function isString(value: unknown): value is string {
  return typeof value == 'string';
}
