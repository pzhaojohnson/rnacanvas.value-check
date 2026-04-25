import { isTruthy } from './isTruthy';

test('`function isTruthy()`', () => {
  expect(isTruthy(true)).toBe(true);
  expect(isTruthy(false)).toBe(false);

  expect(isTruthy(1)).toBe(true);
  expect(isTruthy('asdf')).toBe(true);
  expect(isTruthy([])).toBe(true);

  expect(isTruthy(0)).toBe(false);
  expect(isTruthy('')).toBe(false);
  expect(isTruthy(null)).toBe(false);
  expect(isTruthy(undefined)).toBe(false);
});
