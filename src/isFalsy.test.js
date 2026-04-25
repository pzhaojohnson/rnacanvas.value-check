import { isFalsy } from './isFalsy';

test('`function isFalsy()`', () => {
  expect(isFalsy(false)).toBe(true);
  expect(isFalsy(true)).toBe(false);

  expect(isFalsy(0)).toBe(true);
  expect(isFalsy('')).toBe(true);
  expect(isFalsy(null)).toBe(true);
  expect(isFalsy(undefined)).toBe(true);

  expect(isFalsy(1)).toBe(false);
  expect(isFalsy('asdf')).toBe(false);
  expect(isFalsy([])).toBe(false);
});
