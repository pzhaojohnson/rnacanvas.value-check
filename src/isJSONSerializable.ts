/**
 * Returns `true` if a value can be serialized to JSON
 * and `false` otherwise.
 */
export function isJSONSerializable(value: unknown): boolean {
  try {
    JSON.stringify(value);
    return true;
  } catch {
    return false;
  }
}
