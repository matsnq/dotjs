# objects.js

## Purpose

**`objects.js`** provides helper functions for working with plain JavaScript objects. These utilities help with cloning, extending, checking equality, and other common object operations—used throughout the framework for handling props, state, or internal data.

---

## How It Works 

* Offers pure functions for all object tasks:

    * `cloneObject`, `assignObject`, `objectsEqual`, etc.
    * Can handle shallow or deep copy/equality
* Ensures no direct mutation of inputs (returns new objects)
* Keeps object operations consistent and bug-free

---

## Example Usage

*(Framework usage only, for illustration:)*

```js
import { cloneObject, objectsEqual } from './framework/utils/objects.js';

const a = { x: 1, y: { z: 2 } };
const b = cloneObject(a); // Deep or shallow clone
const isEqual = objectsEqual(a, b); // true (if deep equality)
```

---

## API Overview

* Functions are pure and do not mutate original objects
* Used for props merging, state updates, and more
* Not called directly by app developers

---

## Best Practices

* Always use helpers for cloning or comparing objects; never mutate directly
* Prefer creating new objects instead of modifying inputs
* Write tests for any custom object helpers if you extend the framework

---

## See also

* [arrays.js documentation](./arrays.md)
* [maps.js documentation](./maps.md)
* [strings.js documentation](./strings.md)
