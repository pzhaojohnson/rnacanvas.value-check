import { isString } from './isString';

import { isEmptyString } from './isEmptyString';

/**
 * Returns `true` if a value is a string and is not an empty string.
 *
 * Returns `false` otherwise.
 */
export function isNonEmptyString(value: unknown): boolean {
  return isString(value) && !isEmptyString(value);
}
