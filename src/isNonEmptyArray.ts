import { isArray } from './isArray';

/**
 * Returns true if and only if the value is a nonempty array
 * (i.e., an array with at least one item in it).
 */
export function isNonEmptyArray(value: unknown): value is unknown[] {
  return (
    isArray(value)
    && value.length > 0
  );
}
