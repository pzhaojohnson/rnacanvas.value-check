import { isWhitespace } from './isWhitespace';

test('`function isWhitespace()`', () => {
  // space characters
  expect(isWhitespace(' ')).toBe(true);
  expect(isWhitespace('    ')).toBe(true);

  // different kinds of whitespace characters
  expect(isWhitespace('  \t \n \r\n  \r \t\t\t  ')).toBe(true);

  // an empty string
  expect(isWhitespace('')).toBe(true);

  // one non-whitespace character
  expect(isWhitespace('    a      ')).toBe(false);

  expect(isWhitespace('asdf')).toBe(false);

  // non-string values
  expect(isWhitespace(0)).toBe(false);
  expect(isWhitespace(true)).toBe(false);
  expect(isWhitespace([])).toBe(false);
  expect(isWhitespace(undefined)).toBe(false);
});
