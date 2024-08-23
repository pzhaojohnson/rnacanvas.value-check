import { isStringsArray } from './isStringsArray';

describe('`isStringsArray()` function', () => {
  test('some arrays of strings', () => {
    expect(isStringsArray([''])).toBe(true);
    expect(isStringsArray(['asdf', '', '   ', 'q', '3'])).toBe(true);
  });

  test('an empty array', () => {
    expect(isStringsArray([])).toBe(true);
  });

  test('some arrays that contain more than just strings', () => {
    expect(isStringsArray([true])).toBe(false);
    expect(isStringsArray(['1', '2', 3, '4'])).toBe(false);
  });

  test('some values that are not arrays', () => {
    expect(isStringsArray('asdf')).toBe(false);
    expect(isStringsArray(true)).toBe(false);
    expect(isStringsArray({})).toBe(false);
    expect(isStringsArray(null)).toBe(false);
  });
});
