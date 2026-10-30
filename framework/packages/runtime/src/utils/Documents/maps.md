# maps.js

## Purpose

**`maps.js`** provides helper functions for working with JavaScript `Map` objects and map-like plain objects. It supports common operations like getting, setting, merging, or cloning maps—used internally for things like state storage, props, or internal registries.

---

## How It Works 

* Offers pure functions for manipulating key-value structures (both native `Map` and plain objects)
* Typical helpers:

    * `getMapValue`, `setMapValue`, `mergeMaps`, `cloneMap`
    * Can also include conversion between objects and maps

---

## Example Usage

*(Framework usage only; for illustration:)*

```js
import { mergeMaps } from './framework/utils/maps.js';

const a = { foo: 1, bar: 2 };
const b = { bar: 3, baz: 4 };
const merged = mergeMaps(a, b); // { foo: 1, bar: 3, baz: 4 }
```

---

## API Overview

* Functions are pure and do not mutate original inputs
* Used for props merging, state objects, and various registries
* Not called directly by app developers

---

## Best Practices

* Keep all map/object logic in helpers to avoid bugs
* Never mutate original maps/objects inside helpers
* Prefer merging/returning new objects/maps when extending state

---

## See also

* [arrays.js documentation](./arrays.md)
* [objects.js documentation](./objects.md)
* [strings.js documentation](./strings.md)
