import { isArray } from './isArray';

import { isFiniteNumber } from './isFiniteNumber';

/**
 * Returns true if and only if the value is an array of finite numbers.
 *
 * Vacuously returns true for an empty array.
 */
export function isFiniteNumbersArray(value: unknown): value is number[] {
  return (
    isArray(value)
    && value.every(isFiniteNumber)
  );
}
