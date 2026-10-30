# patch-dom.js

## Purpose

**`patch-dom.js`** contains the logic for updating (patching) the real DOM based on changes in the virtual DOM. When your app's state or props change, the framework compares the new virtual DOM tree with the old one and updates only the necessary parts of the real DOM (not the whole page!).

This process is called **reconciliation** or **diffing**.

---

## How It Works

* Compares previous and current virtual DOM trees.
* Finds what has changed (added, removed, updated elements, attributes, or text).
* Applies only the minimal set of changes to the real DOM (using `createElement`, `removeChild`, `setAttribute`, etc.).

This is why UI updates in DotJS are fast and efficient — even large apps can update quickly without re-rendering everything.

---

## Example: Why Patch, Not Replace

Suppose you have this code:

```js
h('ul', {},
  h('li', {}, 'A'),
  h('li', {}, 'B'),
  h('li', {}, 'C')
)
```

If you update 'B' to 'Z', only the middle `<li>` is updated in the DOM. The others are left alone.

---

## API Overview

As an app developer, you **do not** use `patch-dom.js` directly. It is used internally by the framework's rendering process.

* Receives old and new virtual DOM trees, plus the root DOM node.
* Applies minimal set of real DOM updates for best performance.

---

## Best Practices

* Always use `h()` and component returns for UI — never update the DOM manually.
* Do not mutate the DOM yourself; let the framework and patcher handle changes.
* Return a new virtual DOM tree from your components when state/props change.

---

## See also

* [h.js documentation](./h.md)
* [scheduler.js documentation](./scheduler.md)
* [traverse-dom.js documentation](./traverse-dom.md)
