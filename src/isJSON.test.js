import { isJSON } from './isJSON';

test('`function isJSON()`', () => {
  // JSON of an object
  expect(isJSON('{ "a": 1, "b": 2, "c": 3 }')).toBe(true);

  // JSON of an array
  expect(isJSON('[1, 2, 3]')).toBe(true);

  // JSON of a string
  expect(isJSON('"asdf"')).toBe(true);

  // JSON of a number
  expect(isJSON('2')).toBe(true);

  // a random string
  expect(isJSON('asdf')).toBe(false);

  // an empty string
  expect(isJSON('')).toBe(false);

  // whitespace
  expect(isJSON('  \t\n   ')).toBe(false);

  // some non-string values
  expect(isJSON(2)).toBe(false);
  expect(isJSON(true)).toBe(false);
  expect(isJSON({ "a": 1, "b": 2, "c": 3 })).toBe(false);
});
