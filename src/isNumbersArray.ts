import { isArray } from './isArray';

import { isNumber } from './isNumber';

/**
 * Returns true if and only if the provided value is an array of numbers.
 *
 * Vacuously returns true for an empty array.
 */
export function isNumbersArray(value: unknown): value is number[] {
  return (
    isArray(value)
    && value.every(isNumber)
  );
}
