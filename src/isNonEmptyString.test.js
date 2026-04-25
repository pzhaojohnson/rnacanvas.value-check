import { isNonEmptyString } from './isNonEmptyString';

test('`function isNonEmptyString()`', () => {
  expect(isNonEmptyString('')).toBe(false);

  expect(isNonEmptyString('asdf')).toBe(true);

  // whitespace
  expect(isNonEmptyString(' ')).toBe(true);
  expect(isNonEmptyString('   ')).toBe(true);
  expect(isNonEmptyString('\t')).toBe(true);

  // non-string values
  expect(isNonEmptyString(1)).toBe(false);
  expect(isNonEmptyString(true)).toBe(false);
  expect(isNonEmptyString({})).toBe(false);
  expect(isNonEmptyString(null)).toBe(false);
});
