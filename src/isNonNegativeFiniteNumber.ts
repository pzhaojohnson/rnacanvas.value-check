import { isFiniteNumber } from './isFiniteNumber';

/**
 * Returns true if the value is a nonnegative number and is finite (i.e., is not Infinity, NaN, etc.).
 *
 * Returns false otherwise.
 */
export function isNonNegativeFiniteNumber(value: unknown): value is number {
  return (
    isFiniteNumber(value)
    && value >= 0
  );
}
