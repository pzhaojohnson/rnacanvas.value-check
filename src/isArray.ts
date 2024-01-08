/**
 * Returns true if the value is an array and false otherwise.
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}
