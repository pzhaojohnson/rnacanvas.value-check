import { isNumber } from './isNumber';

test('isNumber function', () => {
  // some numbers
  expect(isNumber(0)).toBe(true);
  expect(isNumber(11)).toBe(true);
  expect(isNumber(-123)).toBe(true);
  expect(isNumber(0.371)).toBe(true);
  expect(isNumber(-319.4)).toBe(true);
  expect(isNumber(Infinity)).toBe(true);
  expect(isNumber(-Infinity)).toBe(true);
  expect(isNumber(NaN)).toBe(true);

  // some non-numbers
  expect(isNumber('2')).toBe(false);
  expect(isNumber('0.4891')).toBe(false);
  expect(isNumber(true)).toBe(false);
  expect(isNumber({})).toBe(false);
  expect(isNumber([])).toBe(false);
  expect(isNumber(null)).toBe(false);
  expect(isNumber(undefined)).toBe(false);
});
