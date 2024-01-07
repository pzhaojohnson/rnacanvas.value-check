import { isNumber } from './isNumber';

/**
 * Returns true if the value is a number and is nonfinite (e.g., is Infinity, NaN, etc.).
 *
 * Returns false otherwise.
 */
export function isNonFiniteNumber(value: unknown): value is number {
  return (
    isNumber(value)
    && !Number.isFinite(value)
  );
}
