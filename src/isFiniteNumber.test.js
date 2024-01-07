import { isFiniteNumber } from './isFiniteNumber';

describe('isFiniteNumber function', () => {
  test('some finite numbers', () => {
    expect(isFiniteNumber(0)).toBe(true);
    expect(isFiniteNumber(25)).toBe(true);
    expect(isFiniteNumber(-1000)).toBe(true);
    expect(isFiniteNumber(0.3736158)).toBe(true);
    expect(isFiniteNumber(8391.37)).toBe(true);
  });

  test('some nonfinite numbers', () => {
    expect(isFiniteNumber(Infinity)).toBe(false);
    expect(isFiniteNumber(-Infinity)).toBe(false);
    expect(isFiniteNumber(NaN)).toBe(false);
  });

  test('some non-numbers', () => {
    expect(isFiniteNumber('Infinity')).toBe(false);
    expect(isFiniteNumber('asdf')).toBe(false);
    expect(isFiniteNumber(true)).toBe(false);
    expect(isFiniteNumber({})).toBe(false);
    expect(isFiniteNumber(null)).toBe(false);
  });
});
