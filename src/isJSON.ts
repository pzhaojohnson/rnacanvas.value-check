import { isString } from './isString';

/**
 * Returns `true` if the value is a string in JSON format
 * and `false` otherwise.
 */
export function isJSON(value: unknown): value is string {
  if (!isString(value)) {
    return false;
  }

  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}
