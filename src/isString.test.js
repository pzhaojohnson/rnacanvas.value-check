import { isString } from './isString';

test('isString function', () => {
  // some strings
  expect(isString('')).toBe(true);
  expect(isString('    ')).toBe(true);
  expect(isString('asdf')).toBe(true);

  // some non-strings
  expect(isString(2)).toBe(false);
  expect(isString(true)).toBe(false);
  expect(isString({})).toBe(false);
  expect(isString([])).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString(undefined)).toBe(false);
});
