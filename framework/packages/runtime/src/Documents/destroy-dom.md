# destroy-dom.js

## Purpose

**`destroy-dom.js`** provides the logic for cleanly removing (unmounting) DOM nodes and running any necessary cleanup. It's used when a component or subtree is removed from your UI (for example, when switching routes, removing items, or unmounting the entire app).

---

## How It Works

* When a component or DOM node is no longer needed, the framework calls the destroy logic.
* This ensures:

    * All DOM nodes are removed.
    * Event listeners are cleaned up (preventing memory leaks).
    * Lifecycle hooks (like `onUnmounted`) are called for components.
* This is important for single-page apps (SPA) where UI changes often without a full page reload.

---

## Example: Cleanup on Remove

Imagine you have a timer in a component:

```js
const Timer = defineComponent({
  setup(props, emit) {
    const id = setInterval(() => emit('tick'), 1000);
    return h('div', {}, 'Running...');
  },
  onUnmounted() {
    clearInterval(id); // Clean up when component is removed
  }
});
```

With `destroy-dom.js`, the framework will call `onUnmounted` automatically when Timer is removed from the UI.

---

## API Overview

You don't use `destroy-dom.js` directly in your apps. It is called by the framework when a component, subtree, or app is unmounted.

* Handles DOM node removal, cleanup, and lifecycle calls.

---

## Best Practices

* Always clean up resources (timers, subscriptions, etc.) in `onUnmounted` lifecycle hooks.
* Never manually remove DOM nodes created by the framework.
* Let the framework manage cleanup to avoid bugs/memory leaks.

---

## See also

* [component.js documentation](./component.md)
* [traverse-dom.js documentation](./traverse-dom.md)
