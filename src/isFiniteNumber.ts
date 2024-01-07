import { isNumber } from './isNumber';

/**
 * Returns true if the value is a number and is finite (i.e., is not Infinity, NaN, etc.).
 *
 * Returns false otherwise.
 */
export function isFiniteNumber(value: unknown): value is number {
  return (
    isNumber(value)
    && Number.isFinite(value)
  );
}
