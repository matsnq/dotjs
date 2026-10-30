# strings.js

## Purpose

**`strings.js`** provides helper functions for working with strings. These are used throughout DotJS for tasks like transforming, formatting, or comparing strings—helpful for props, class names, attribute handling, and more.

---

## How It Works 

* Pure functions for common string operations:

    * `capitalize`, `kebabCase`, `camelCase`, `trim`, `stringsEqual`, etc.
* Keeps all string logic consistent across the framework
* Never mutates inputs (returns new strings)

---

## Example Usage

*(Framework usage only, for illustration:)*

```js
import { capitalize, kebabCase } from './framework/utils/strings.js';

capitalize('dotjs'); // 'Dotjs'
kebabCase('HelloWorld'); // 'hello-world'
```

---

## API Overview

* Functions are pure, safe, and only used by the framework
* Not called directly by app developers

---

## Best Practices

* Always use helpers for any string transformation in your framework code
* Never change input strings in-place
* Keep all formatting logic centralized for easier updates and fixes

---

## See also

* [arrays.js documentation](./arrays.md)
* [maps.js documentation](./maps.md)
* [objects.js documentation](./objects.md)
