import { isNonEmptyArray } from './isNonEmptyArray';

describe('`isNonEmptyArray()` function', () => {
  test('some nonempty arrays', () => {
    expect(isNonEmptyArray(['a', 2, null])).toBe(true);
    expect(isNonEmptyArray([0])).toBe(true);
  });

  test('an empty array', () => {
    expect(isNonEmptyArray([])).toBe(false);
  });

  test('some values that are not arrays', () => {
    expect(isNonEmptyArray('[1, 2, 3]')).toBe(false);
    expect(isNonEmptyArray(true)).toBe(false);
    expect(isNonEmptyArray({ length: 1 })).toBe(false);
  });
});
