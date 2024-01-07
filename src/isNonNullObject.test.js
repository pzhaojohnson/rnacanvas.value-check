import { isNonNullObject } from './isNonNullObject';

describe('isNonNullObject function', () => {
  test('some non-null objects', () => {
    expect(isNonNullObject({})).toBe(true);
    expect(isNonNullObject({ 'qwer': 3 })).toBe(true);
    expect(isNonNullObject({ 'a': false, 'b': null, 'c': {} })).toBe(true);
    expect(isNonNullObject([])).toBe(true);
    expect(isNonNullObject([1, 2, 3])).toBe(true);
  });

  test('the value null', () => {
    expect(isNonNullObject(null)).toBe(false);
  });

  test('some values that are not of type object', () => {
    expect(isNonNullObject(2)).toBe(false);
    expect(isNonNullObject('asdf')).toBe(false);
    expect(isNonNullObject(true)).toBe(false);
    expect(isNonNullObject(undefined)).toBe(false);
  });
});
