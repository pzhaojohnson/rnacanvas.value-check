import { isArray } from './isArray';

import { isNonFiniteNumber } from './isNonFiniteNumber';

/**
 * Returns true if and only if the value is an array of nonfinite numbers
 * (e.g., NaN, Infinity and -Infinity).
 *
 * Vacuously returns true for an empty array.
 */
export function isNonFiniteNumbersArray(value: unknown): value is number[] {
  return (
    isArray(value)
    && value.every(isNonFiniteNumber)
  );
}
