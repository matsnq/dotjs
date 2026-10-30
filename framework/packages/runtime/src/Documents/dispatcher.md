# dispatcher.js

## Purpose

**`dispatcher.js`** is the central hub for handling state updates and event dispatching in DotJS. It manages how your app reacts to user actions, state changes, and communicates between components.

This makes your app predictable, modular, and easy to debug.

---

## How It Works

* When a user interacts (clicks, types, etc.), the event is "dispatched" to the correct handler.
* The dispatcher:
  * Receives the action or event
  * Passes it to the appropriate reducer (for state changes)
  * Triggers any necessary re-renders via the scheduler
* Also enables communication between parent and child components (via** **`emit`)

---

## Example: Simple State Update

```js
createApp({
  state: { count: 0 },
  reducers: {
    increment: state => ({ ...state, count: state.count + 1 })
  },
  view: (state, emit) =>
    h('button', { on: { click: () => emit('increment') } }, state.count)
});
```

Here, when you click,** **`emit('increment')` is dispatched, and dispatcher updates state.

---

## API Overview

* Used internally: you don't call dispatcher directly.
* Connects events (`emit`) to reducers and UI updates.
* Ensures all state changes are predictable and follow the same flow.

---

## Best Practices

* Always use** **`emit` and reducers for updating state (never mutate directly).
* Let dispatcher handle all data flow and event logic.
* Structure your app so all state is managed centrally.

---

## See also

* [app.js documentation](./app.md)
* [events.js documentation](./events.md)
* [component.js documentation](./component.md)
