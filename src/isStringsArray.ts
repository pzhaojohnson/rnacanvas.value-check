import { isArray } from './isArray';

import { isString } from './isString';

/**
 * Returns true if and only if the value is an array of strings.
 *
 * Vacuously returns true for an empty array.
 */
export function isStringsArray(value: unknown): value is string[] {
  return (
    isArray(value)
    && value.every(isString)
  );
}
