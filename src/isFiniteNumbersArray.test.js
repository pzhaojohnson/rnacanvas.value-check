import { isFiniteNumbersArray } from './isFiniteNumbersArray';

describe('`isFiniteNumbersArray()` function', () => {
  test('some arrays of finite numbers', () => {
    expect(isFiniteNumbersArray([-20])).toBe(true);
    expect(isFiniteNumbersArray([-11.5, 5.1, 0, 3, 1000, -808.52])).toBe(true);
  });

  test('an empty array', () => {
    expect(isFiniteNumbersArray([])).toBe(true);
  });

  test('some arrays containing both finite and nonfinite numbers', () => {
    expect(isFiniteNumbersArray([NaN])).toBe(false);
    expect(isFiniteNumbersArray([3, 2, Infinity, 57])).toBe(false);
    expect(isFiniteNumbersArray([3, 52, 7, -Infinity, 57, 8])).toBe(false);
  });

  test('some arrays containing more than just numbers', () => {
    expect(isFiniteNumbersArray(['9'])).toBe(false);
    expect(isFiniteNumbersArray([5, 2, '1', 2, 2])).toBe(false);
  });

  test('a finite number', () => {
    expect(isFiniteNumbersArray(5)).toBe(false);
  });

  test('some values that are not arrays', () => {
    expect(isFiniteNumbersArray('[]')).toBe(false);
    expect(isFiniteNumbersArray({})).toBe(false);
    expect(isFiniteNumbersArray(true)).toBe(false);
    expect(isFiniteNumbersArray(undefined)).toBe(false);
  });
});
