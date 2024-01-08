import { isFiniteNumber } from './isFiniteNumber';

/**
 * Returns true if the value is a positive number and is finite (i.e., is not Infinity, NaN, etc.).
 *
 * Returns false otherwise.
 */
export function isPositiveFiniteNumber(value: unknown): value is number {
  return (
    isFiniteNumber(value)
    && value > 0
  );
}
