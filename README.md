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
