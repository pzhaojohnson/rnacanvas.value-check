/**
 * Returns true if the value is a number and false otherwise.
 */
export function isNumber(value: unknown): value is number {
  return typeof value == 'number';
}
