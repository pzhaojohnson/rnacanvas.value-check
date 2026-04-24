import { isString } from './isString';

/**
 * Returns `true` if the value is a string and entirely composed of whitespace characters.
 *
 * Vacuously returns `true` for an empty string.
 *
 * Returns `false` otherwise.
 */
export function isWhitespace(value: unknown): value is string {
  if (!isString(value)) {
    return false;
  }

  return value.trim().length == 0;
}
