# arrays.js

## Purpose

**`arrays.js`** provides utility functions for working with arrays. These helpers are used throughout the DotJS framework for tasks like transforming, cloning, comparing, or searching arrays. Keeping array logic in a separate module makes the code cleaner, more reusable, and easier to test.

---

## How It Works 

* Offers pure functions (no side effects) for common array operations.
* Used internally by components, state logic, and DOM algorithms.
* Can include helpers like:
  * `mapArray`,** **`filterArray`,** **`cloneArray`,** **`findIndex`, etc.
  * Shallow and/or deep copy utilities
  * Equality checks (arraysEqual)

---

## Example Usage

*(Not called by app developers directly, but here’s what such helpers might do:)*

```js
import { mapArray, cloneArray } from './framework/utils/arrays.js';

const arr = [1, 2, 3];
const doubled = mapArray(arr, x => x * 2); // [2, 4, 6]
const arr2 = cloneArray(arr); // [1, 2, 3]
```

---

## API Overview

* All functions are pure (they don’t modify input arrays)
* Only used internally by the framework and helpers

---

## Best Practices

* Use utility modules for all common data operations to avoid duplicating logic
* Prefer pure functions: never change arrays in-place in helpers
* Write tests for array utilities if you extend the framework

---

## See also

* [maps.js documentation](./maps.md)
* [objects.js documentation](./objects.md)
* [strings.js documentation](./strings.md)
