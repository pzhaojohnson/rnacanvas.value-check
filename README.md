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
