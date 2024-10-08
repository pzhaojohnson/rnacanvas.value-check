# Installation

With `npm`:

```
npm install @rnacanvas/value-check
```

# Usage

All exports of this package can be accessed as named imports.

```typescript
// some example imports
import { isNumber, isString } from '@rnacanvas/value-check';
import { isNullish } from '@rnacanvas/value-check';
import { isFiniteNumber, isPositiveFiniteNumber } from '@rnacanvas/value-check';
import type { NonNullObject } from '@rnacanvas/value-check';
```

## `isNumber()`

Returns `true` if and only if a value is of type `number`.

```javascript
isNumber(5); // true
isNumber(Infinity); // true
isNumber(NaN); // true

isNumber('5'); // false
isNumber({}); // false
isNumber(null); // false
```

## `isFiniteNumber()`

Returns `true` if and only if a value is of type `number`
and it is not `NaN`, `Infinity` or `-Infinity`.

```javascript
isFiniteNumber(6); // true
isFiniteNumber(0); // true
isFiniteNumber(-3.27); // true

isFiniteNumber(NaN); // false
isFiniteNumber(Infinity); // false
isFiniteNumber(-Infinity); // false

isFiniteNumber('5'); // false
isFiniteNumber({}); // false
isFiniteNumber(null); // false
```

## `isNonFiniteNumber()`

Returns `true` if and only if a value is `NaN`, `Infinity` or `-Infinity`.

```javascript
isNonFiniteNumber(NaN); // true
isNonFiniteNumber(Infinity); // true
isNonFiniteNumber(-Infinity); // true

isNonFiniteNumber(6); // false
isNonFiniteNumber(0); // false
isNonFiniteNumber(-3.27); // false

isNoNFiniteNumber('5'); // false
isNoNFiniteNumber({}); // false
isNoNFiniteNumber(null); // false
```

## `isPositiveFiniteNumber()`

Returns `true` if and only a value is of type `number`
and is finite and positive.

```javascript
isPositiveFiniteNumber(6); // true
isPositiveFiniteNumber(0); // false
isPositiveFiniteNumber(-3.27); // false

isPositiveFiniteNumber(NaN); // false
isPositiveFiniteNumber(Infinity); // false
isPositiveFiniteNumber(-Infinity); // false

isPositiveFiniteNumber('5'); // false
isPositiveFiniteNumber({}); // false
isPositiveFiniteNumber(null); // false
```

## `isNonNegativeFiniteNumber()`

Returns `true` if and only a value is of type `number`
and is finite and nonnegative.

```javascript
isNonNegativeFiniteNumber(6); // true
isNonNegativeFiniteNumber(0); // true
isNonNegativeFiniteNumber(-3.27); // false

isNonNegativeFiniteNumber(NaN); // false
isNonNegativeFiniteNumber(Infinity); // false
isNonNegativeFiniteNumber(-Infinity); // false

isNonNegativeFiniteNumber('5'); // false
isNonNegativeFiniteNumber({}); // false
isNonNegativeFiniteNumber(null); // false
```

## `isString()`

Returns `true` if and only if a value is of type `string`.

```javascript
isString(''); // true
isString('string'); // true

isString(5); // false
isString({}); // false
isString(null); // false
```

## `Nullish`

The `Nullish` type includes the values `null` and `undefined`.

```typescript
type Nullish = null | undefined;
```

## `isNullish()`

Returns `true` if and only if a value is `null` or `undefined`.

```javascript
isNullish(null); // true
isNullish(undefined); // true

isNullish(1); // false
isNullish('a'); // false
isNullish({}); // false
```

## `NonNullObject`

The `NonNullObject` type matches values of type `object` that are not `null`.

```typescript
type NonNullObject = { [name: string]: unknown };
```

## `isNonNullObject()`

Returns `true` if and only if a value is of type `object` and is not `null`.

```javascript
isNonNullObject({}); // true
isNonNullObject({ 'a': 2, 'b': 3 }); // true

isNonNullObject(null); // false
isNonNullObject(5); // false
isNonNullObject('asdf'); // false
```

## `isArray()`

Returns `true` if and only if a value is an array.

```javascript
isArray([]); // true
isArray([1, '2', 'a', {}]); // true

isArray({}); // false
isArray(2); // false
isArray(null); // false
```

## `isEmptyArray()`

Returns `true` if and only if a value is an empty array
(i.e., an array with zero items in it).

```javascript
isEmptyArray([]); // true
isEmptyArray([1, 'b', 3]); // false

// not an array
isEmptyArray('[]'); // false
```

## `isNonEmptyArray()`

Returns `true` if and only if a value is a nonempty array
(i.e., an array with at least one item).

```javascript
isNonEmptyArray([1, 'b', 3]); // true
isNonEmptyArray(['a']); // true

isNonEmptyArray([]); // false

// not an array
isNonEmptyArray('[1, 2, 3]'); // false
```

## `isNumbersArray()`

Returns `true` if and only if a value is an array of numbers.

Vacuously returns `true` for an empty array.

```javascript
isNumbersArray([]); // true
isNumbersArray([2]); // true
isNumbersArray([-1, -2, -3, -4]); // true

// nonfinite numbers
isNumbersArray([NaN, Infinity, -Infinity]); // true

isNumbersArray(2); // false
isNumbersArray(['2']); // false
isNumbersArray([1, 2, 3, '4', 5]); // false
```

## `isNonEmptyNumbersArray()`

Returns `true` if and only if a value is an array of numbers and is nonempty.

```javascript
isNonEmptyNumbersArray([1]); // true
isNonEmptyNumbersArray([1, 2, 3, 4]); // true

isNonEmptyNumbersArray([]); // false

// nonfinite numbers
isNonEmptyNumbersArray([NaN, Infinity, -Infinity]); // true

// not an array of numbers
isNonEmptyNumbersArray([1, '2', 3]); // false

// not an array (is a string)
isNonEmptyNumbersArray('[1, 2, 3]'); // false
```

## `isFiniteNumbersArray()`

Returns `true` if and only if a value is an array of finite numbers.

Vacuously returns `true` for an empty array.

```javascript
isFiniteNumbersArray([10]); // true
isFiniteNumbersArray([-1, 5.5, 2, 101.308]); // true

isFiniteNumbersArray([]); // true

isFiniteNumbersArray([NaN, Infinity, -Infinity]); // false

isFiniteNumbersArray(10); // false
isFiniteNumbersArray([1, '2', 3]); // false
```

## `isNonFiniteNumbersArray()`

Returns `true` if and only if a value is an array of nonfinite numbers.

Vacuously returns `true` for an empty array.

```javascript
isNonFiniteNumbersArray([NaN, Infinity, -Infinity]); // true

isNonFiniteNumbersArray([]); // true

isNonFiniteNumbersArray([1, 2, 3, 4]); // false
isNonFiniteNumbersArray([NaN, NaN, 3, NaN]); // false

// not an array
isNonFiniteNumbersArray(Infinity); // false
```

## `isStringsArray()`

Returns `true` if and only if a value is an array of strings.

Vacuously returns `true` for an empty array.

```javascript
isStringsArray(['asdf']); // true
isStringsArray(['', ' ', 'A', '4']); // true

isStringsArray([]); // true

isStringsArray(['1', '2', 3, '4']); // false

// not an array
isStringsArray('asdf'); // false
```

## `isNonEmptyStringsArray()`

Returns `true` if and only if a value is an array of strings and is nonempty.

```javascript
isNonEmptyStringsArray(['asdf']); // true
isNonEmptyStringsArray(['a', 'b', 'c', 'd']); // true

isNonEmptyStringsArray([]); // false

// not an array of strings
isNonEmptyStringsArray(['a', 'b', 3, 'd']); // false

// not an array
isNonEmptyStringsArray('asdf'); // false
```
