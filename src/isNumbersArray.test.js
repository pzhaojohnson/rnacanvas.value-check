import { isNumbersArray } from './isNumbersArray';

describe('`isNumbersArray()` function', () => {
  test('some arrays of numbers', () => {
    expect(isNumbersArray([3])).toBe(true);
    expect(isNumbersArray([5, -25, NaN, Infinity, -101.2, 254])).toBe(true);
  });

  test('an empty array', () => {
    expect(isNumbersArray([])).toBe(true);
  });

  test('some arrays that contain more than just numbers', () => {
    expect(isNumbersArray(['3'])).toBe(false);
    expect(isNumbersArray([5, 2, 0, '8', 3])).toBe(false);
  });

  test('a number', () => {
    expect(isNumbersArray(2)).toBe(false);
  });

  test('some values that are not arrays', () => {
    expect(isNumbersArray('[]')).toBe(false);
    expect(isNumbersArray({})).toBe(false);
    expect(isNumbersArray(true)).toBe(false);
    expect(isNumbersArray(null)).toBe(false);
  });
});
