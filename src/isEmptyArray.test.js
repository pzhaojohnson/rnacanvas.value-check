import { isEmptyArray } from './isEmptyArray';

describe('`isEmptyArray()` function', () => {
  test('an empty array', () => {
    expect(isEmptyArray([])).toBe(true);
  });

  test('some nonempty arrays', () => {
    expect(isEmptyArray([3])).toBe(false);
    expect(isEmptyArray(['a', 2, {}])).toBe(false);
  });

  test('some values that are not arrays', () => {
    expect(isEmptyArray('[]')).toBe(false);
    expect(isEmptyArray(true)).toBe(false);
    expect(isEmptyArray(null)).toBe(false);
  });
});
