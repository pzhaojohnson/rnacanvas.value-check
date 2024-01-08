import { isNullish } from './isNullish';

describe('isNullish function', () => {
  test('a value of null', () => {
    expect(isNullish(null)).toBe(true);
  });

  test('a value of undefined', () => {
    expect(isNullish(undefined)).toBe(true);
  });

  test('some non-nullish values', () => {
    expect(isNullish(0)).toBe(false);
    expect(isNullish(-1)).toBe(false);
    expect(isNullish('')).toBe(false);
    expect(isNullish('null')).toBe(false);
    expect(isNullish(false)).toBe(false);
    expect(isNullish({})).toBe(false);
  });
});
