import { isPositiveFiniteNumber } from './isPositiveFiniteNumber';

describe('isPositiveFiniteNumber function', () => {
  test('the number zero', () => {
    expect(isPositiveFiniteNumber(0)).toBe(false);
  });

  test('a number just above zero', () => {
    expect(isPositiveFiniteNumber(0.000001)).toBe(true);
  });

  test('a number just below zero', () => {
    expect(isPositiveFiniteNumber(-0.000001)).toBe(false);
  });

  test('some positive finite numbers farther away from zero', () => {
    expect(isPositiveFiniteNumber(5452)).toBe(true);
    expect(isPositiveFiniteNumber(3483.1424)).toBe(true);
  });

  test('some negative finite numbers farther away from zero', () => {
    expect(isPositiveFiniteNumber(-39)).toBe(false);
    expect(isPositiveFiniteNumber(-48124.819)).toBe(false);
  });

  test('nonfinite numbers', () => {
    expect(isPositiveFiniteNumber(Infinity)).toBe(false);
    expect(isPositiveFiniteNumber(-Infinity)).toBe(false);
    expect(isPositiveFiniteNumber(NaN)).toBe(false);
  });

  test('some non-number values', () => {
    expect(isPositiveFiniteNumber('22')).toBe(false);
    expect(isPositiveFiniteNumber('qwer')).toBe(false);
    expect(isPositiveFiniteNumber(true)).toBe(false);
    expect(isPositiveFiniteNumber({})).toBe(false);
    expect(isPositiveFiniteNumber(null)).toBe(false);
  });
});
