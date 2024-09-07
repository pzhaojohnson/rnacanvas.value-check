import { isStringsArray } from './isStringsArray';

/**
 * Returns true if and only if the value is an array of strings and is nonempty.
 */
export function isNonEmptyStringsArray(value: unknown): value is string[] {
  return (
    isStringsArray(value)
    && value.length > 0
  );
}
