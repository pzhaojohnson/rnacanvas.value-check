import { isJSONSerializable } from './isJSONSerializable';

test('`function isJSONSerializable()`', () => {
  expect(isJSONSerializable({ 'asdf': 'qwer', 'ASDF': 'QWER' })).toBe(true);

  var o = {};

  // a circular reference
  o.o = o;

  expect(isJSONSerializable(o)).toBe(false);

  // some simple cases
  expect(isJSONSerializable(2)).toBe(true);
  expect(isJSONSerializable('asdf')).toBe(true);
  expect(isJSONSerializable([1, 2, 3])).toBe(true);
});
