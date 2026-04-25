import { isEmptyString } from './isEmptyString';

test('`function isEmptyString()`', () => {
  expect(isEmptyString('')).toBe(true);

  // whitespace
  expect(isEmptyString(' ')).toBe(false);
  expect(isEmptyString(' \t   ')).toBe(false);

  expect(isEmptyString('asdf')).toBe(false);

  // non-string values
  expect(isEmptyString(false)).toBe(false);
  expect(isEmptyString(0)).toBe(false);
  expect(isEmptyString({})).toBe(false);
  expect(isEmptyString(null)).toBe(false);
});
