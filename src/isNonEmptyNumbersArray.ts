import { isNumbersArray } from './isNumbersArray';

/**
 * Returns true if and only if the value is an array of numbers and is nonempty.
 */
export function isNonEmptyNumbersArray(value: unknown): value is number[] {
  return (
    isNumbersArray(value)
    && value.length > 0
  );
}
