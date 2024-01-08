import { isArray } from './isArray';

describe('isArray function', () => {
  test('some arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1])).toBe(true);
    expect(isArray(['1', 2, 'c', null, {}, undefined])).toBe(true);
  });

  test('some non-array values', () => {
    expect(isArray(5)).toBe(false);
    expect(isArray('Array')).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray({ '0': 'a', '1': 'b', '2': 'c' })).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
  });
});
