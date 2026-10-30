# events.js

## Purpose

**`events.js`** provides the internal event system for DotJS. It lets components listen for, handle, and delegate DOM events (like clicks, input, etc.) in a consistent way across your application.

Unlike plain addEventListener, this system integrates with the virtual DOM and component lifecycle, supporting features like event delegation and cleanup.

---

## How It Works 

* When you specify** **`on: { click: ... }` in your virtual node props, DotJS uses the event system to bind that handler to the DOM node.
* Supports all common DOM events (click, input, change, etc.).
* Automatically cleans up event listeners when components are removed.
* Uses event delegation to improve performance: listeners are attached high in the DOM tree and dispatched down, so you don’t need many individual listeners.

---

## Example Usage

```js
const Button = (props, emit) =>
  h('button', { on: { click: () => emit('clicked') } }, props.label);

const App = (state, emit) =>
  h('div', {},
    Button({ label: 'Press me' }, emit),
    h('span', {}, state.message)
  );
```

Here, clicking the button triggers the** **`clicked` event, which can be handled by a reducer or parent component.

---

## API Overview

* App developers use the** **`on: { event: handler }` pattern in virtual node props.
* No need to add or remove listeners manually; everything is managed automatically.
* Internally, events are delegated and managed for efficiency and safety.

---

## Best Practices

* Always use** **`on: { ... }` in your props for event handlers.
* Avoid direct** **`addEventListener` in your components; let the framework handle it.
* Use** **`emit` in your handlers to trigger app-level state changes or actions.

---

## See also

* [dispatcher.js documentation](./dispatcher.md)
* [component.js documentation](./component.md)
* [h.js documentation](./h.md)
