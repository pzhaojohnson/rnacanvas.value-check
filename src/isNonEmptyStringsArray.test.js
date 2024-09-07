import { isNonEmptyStringsArray } from './isNonEmptyStringsArray';

describe('`isNonEmptyStringsArray()` function', () => {
  test('some nonempty arrays of strings', () => {
    expect(isNonEmptyStringsArray(['a'])).toBe(true);
    expect(isNonEmptyStringsArray(['k', 'Q', 'r', 'asdf'])).toBe(true);
  });

  test('some arrays that contain more than just strings', () => {
    expect(isNonEmptyStringsArray([true])).toBe(false);
    expect(isNonEmptyStringsArray(['b', '3', 'b', '2', 5, 'asdf', 'd'])).toBe(false);
  });

  test('an empty array', () => {
    expect(isNonEmptyStringsArray([])).toBe(false);
  });

  test('some values that are not arrays', () => {
    expect(isNonEmptyStringsArray('asdf')).toBe(false);
    expect(isNonEmptyStringsArray(true)).toBe(false);
    expect(isNonEmptyStringsArray({})).toBe(false);
  });
});
