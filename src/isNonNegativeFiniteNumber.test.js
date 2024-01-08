import { isNonNegativeFiniteNumber } from './isNonNegativeFiniteNumber';

describe('isNonNegativeFiniteNumber function', () => {
  test('the number zero', () => {
    expect(isNonNegativeFiniteNumber(0)).toBe(true);
  });

  test('a number just above zero', () => {
    expect(isNonNegativeFiniteNumber(0.00001)).toBe(true);
  });

  test('a number just below zero', () => {
    expect(isNonNegativeFiniteNumber(-0.00001)).toBe(false);
  });

  test('some positive finite numbers farther away from zero', () => {
    expect(isNonNegativeFiniteNumber(100)).toBe(true);
    expect(isNonNegativeFiniteNumber(489143.3714)).toBe(true);
  });

  test('some negative finite numbers farther away from zero', () => {
    expect(isNonNegativeFiniteNumber(-3891)).toBe(false);
    expect(isNonNegativeFiniteNumber(-4824.3819)).toBe(false);
  });

  test('nonfinite numbers', () => {
    expect(isNonNegativeFiniteNumber(Infinity)).toBe(false);
    expect(isNonNegativeFiniteNumber(-Infinity)).toBe(false);
    expect(isNonNegativeFiniteNumber(NaN)).toBe(false);
  });

  test('some non-number values', () => {
    expect(isNonNegativeFiniteNumber('2')).toBe(false);
    expect(isNonNegativeFiniteNumber('asdf')).toBe(false);
    expect(isNonNegativeFiniteNumber(true)).toBe(false);
    expect(isNonNegativeFiniteNumber({})).toBe(false);
    expect(isNonNegativeFiniteNumber(null)).toBe(false);
  });
});
