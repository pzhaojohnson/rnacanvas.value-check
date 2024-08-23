import { isNonFiniteNumbersArray } from './isNonFiniteNumbersArray';

describe('`isNonFiniteNumbersArray()` function', () => {
  test('some arrays of nonfinite numbers', () => {
    expect(isNonFiniteNumbersArray([NaN])).toBe(true);
    expect(isNonFiniteNumbersArray([NaN, Infinity, -Infinity])).toBe(true);
  });

  test('an empty array', () => {
    expect(isNonFiniteNumbersArray([])).toBe(true);
  });

  test('an array of finite and nonfinite numbers', () => {
    expect(isNonFiniteNumbersArray([Infinity, -Infinity, Infinity, 3, NaN])).toBe(false);
  });

  test('an array with more than just numbers', () => {
    expect(isNonFiniteNumbersArray([NaN, -Infinity, 'Infinity', Infinity, NaN])).toBe(false);
  });

  test('a nonfinite number', () => {
    expect(isNonFiniteNumbersArray(Infinity)).toBe(false);
  });

  test('some more values that are not arrays', () => {
    expect(isNonFiniteNumbersArray('[]')).toBe(false);
    expect(isNonFiniteNumbersArray({})).toBe(false);
    expect(isNonFiniteNumbersArray(true)).toBe(false);
    expect(isNonFiniteNumbersArray(null)).toBe(false);
  });
});
