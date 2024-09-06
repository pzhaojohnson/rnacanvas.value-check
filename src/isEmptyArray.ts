import { isArray } from './isArray';

/**
 * Returns true if and only if the value is an empty array
 * (i.e., an array with zero items in it).
 */
export function isEmptyArray(value: unknown): value is unknown[] {
  return (
    isArray(value)
    && value.length == 0
  );
}
