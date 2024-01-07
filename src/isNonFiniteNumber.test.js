import { isNonFiniteNumber } from './isNonFiniteNumber';

describe('isNonFiniteNumber function', () => {
  test('some nonfinite numbers', () => {
    expect(isNonFiniteNumber(Infinity)).toBe(true);
    expect(isNonFiniteNumber(-Infinity)).toBe(true);
    expect(isNonFiniteNumber(NaN)).toBe(true);
  });

  test('some finite numbers', () => {
    expect(isNonFiniteNumber(0)).toBe(false);
    expect(isNonFiniteNumber(20)).toBe(false);
    expect(isNonFiniteNumber(-6)).toBe(false);
    expect(isNonFiniteNumber(-0.3617)).toBe(false);
    expect(isNonFiniteNumber(37824.98)).toBe(false);
  });

  test('some non-numbers', () => {
    expect(isNonFiniteNumber('Infinity')).toBe(false);
    expect(isNonFiniteNumber('')).toBe(false);
    expect(isNonFiniteNumber(true)).toBe(false);
    expect(isNonFiniteNumber({})).toBe(false);
    expect(isNonFiniteNumber(undefined)).toBe(false);
  });
});
