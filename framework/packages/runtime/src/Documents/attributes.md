# attributes.js

## Purpose

**`attributes.js`** provides helper functions for setting and updating DOM attributes and styles in a unified, safe way. It handles standard HTML attributes, styles, and special cases (like class and event listeners) to ensure your UI always updates correctly when props change.

---

## How It Works

* When you specify props on a virtual node (like** **`{ id: 'foo', style: { color: 'red' } }`), DotJS uses** **`attributes.js` to set these on the real DOM node.
* Handles differences between HTML attributes and DOM properties (like** **`className` vs** **`class`).
* Special handling for:
  * `style` (accepts objects and strings)
  * `class` (supports string or object)
  * Events (delegated by** **`events.js`)
* Updates or removes attributes as needed during re-render.

---

## Example Usage

```js
h('div', {
  id: 'main',
  class: 'box',
  style: { color: 'blue', fontWeight: 'bold' }
}, 'Content')
```

* Sets** **`id`,** **`class`, and inline** **`style` safely.
* If any prop changes, attributes.js updates or removes only what’s necessary.

---

## API Overview

* Not used directly by app developers—works automatically as part of virtual DOM patching.
* Functions to set, update, and remove attributes, styles, and classes.
* Integrates with other internals (events.js, patch-dom.js).

---

## Best Practices

* Always pass styles, classes, and attributes as props on your virtual nodes.
* Use style objects for dynamic styles:
  ```js
  style: { color: condition ? 'red' : 'green' }
  ```
* Avoid setting attributes directly on DOM nodes.

---

## See also

* [h.js documentation](./h.md)
* [patch-dom.js documentation](./patch-dom.md)
