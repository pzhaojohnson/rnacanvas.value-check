import { isNonEmptyNumbersArray } from './isNonEmptyNumbersArray';

describe('`isNonEmptyNumbersArray()` function', () => {
  test('some nonempty arrays of numbers', () => {
    expect(isNonEmptyNumbersArray([5])).toBe(true);
    expect(isNonEmptyNumbersArray([-101, 528, 1.003718, Math.PI])).toBe(true);

    // some nonfinite numbers
    expect(isNonEmptyNumbersArray([NaN, Infinity, -Infinity])).toBe(true);
  });

  test('some arrays containing more than just numbers', () => {
    expect(isNonEmptyNumbersArray(['2'])).toBe(false);
    expect(isNonEmptyNumbersArray([3, 5, 1, 'b', 6, 7])).toBe(false);
  });

  test('an empty array', () => {
    expect(isNonEmptyNumbersArray([])).toBe(false);
  });

  test('some values that are not arrays', () => {
    expect(isNonEmptyNumbersArray('[1, 2, 3]')).toBe(false);
    expect(isNonEmptyNumbersArray(2)).toBe(false);
    expect(isNonEmptyNumbersArray({ length: 10 })).toBe(false);
  });
});
