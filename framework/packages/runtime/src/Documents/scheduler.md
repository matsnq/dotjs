# scheduler.js

## Purpose

**`scheduler.js`** is responsible for efficiently updating the UI in DotJS. It schedules and batches DOM updates to avoid unnecessary re-renders, making your app feel smooth and fast—even if your state changes many times in a row.

---

## How It Works 

* When state or props change, DotJS doesn't update the DOM immediately.
* Instead, updates are added to a queue.
* The scheduler waits for the current event loop to finish, then applies all pending changes at once.
* This batching reduces flicker and improves performance, especially with frequent updates.

---

## Example: Why Scheduling Matters

Suppose you have this logic:

```js
emit('add', 1);
emit('add', 1);
emit('add', 1);
```

Without a scheduler: UI would redraw **3 times**.
With a scheduler: UI redraws **once**, after all state changes are processed.

---

## API Overview

Usually, you don't use `scheduler.js` directly as an app developer. It's used internally by the framework. But it's helpful to understand that:

* State changes and component updates are batched and processed efficiently.
* The scheduler uses `requestAnimationFrame` or similar browser features for optimal timing.

---

## Best Practices

* You don't need to manually optimize updates: DotJS does this for you.
* Avoid direct DOM manipulation; always update state and let the scheduler handle re-rendering.

---

## See also

* [patch-dom documentation](./patch-dom.md)
* [app.js documentation](./app.md)
