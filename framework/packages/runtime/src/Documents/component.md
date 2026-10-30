# component.js

## Purpose

**`component.js`** provides the core logic for defining and managing components in DotJS. Components are the building blocks of your UI. This module supports both simple function components and advanced components with lifecycle hooks and local state.

---

## What Is a Component?

A** ****component** is a JavaScript function that receives** **`props` (data from parent) and** **`emit` (to send events up) and returns a virtual DOM tree.

Example:

```js
function Button(props, emit) {
  return h('button', { on: { click: () => emit('press') } }, props.label);
}
```

With** **`defineComponent`, you can also add lifecycle hooks (`onMounted`,** **`onUnmounted`), use slots, and local state:

```js
const Card = defineComponent({
  props: { title: '' },
  setup: (props, emit, slots) =>
    h('div', {},
      h('h3', {}, props.title),
      slots.default && slots.default()
    ),
  onMounted() { /* Do something on mount */ },
  onUnmounted() { /* Cleanup here */ }
});
```

---

## API Overview

* `defineComponent(options)` — Create advanced components. Options:
  * `props`: default prop values
  * `setup(props, emit, slots)`: main render function
  * `onMounted()`: called after mount
  * `onUnmounted()`: called before destroy
* **Function components** — Just a function:** **`(props, emit) => vdom`

---

## Example Usage

**Simple Stateless Component:**

```js
function HelloWorld(props, emit) {
  return h('h1', {}, 'Hello, ' + props.name + '!');
}
```

**Component with Props and Events:**

```js
function Counter(props, emit) {
  return h('button', { on: { click: () => emit('increment') } }, props.count);
}
```

**Component with Slots:**

```js
const Panel = defineComponent({
  setup: (props, emit, slots) =>
    h('section', {},
      h('header', {}, 'Title'),
      slots.default && slots.default()
    )
});
```

---

## When to Use

* Use** **`defineComponent` for any component with local state, lifecycle, or slots.
* Use function components for simple, stateless pieces of UI.

---

## Best Practices

* Keep components focused: one responsibility each.
* Use props for all external data — don’t access global variables inside components.
* Use** **`emit` to communicate up to parents (no direct parent calls).
* Clean up in** **`onUnmounted` if you use timers/subscriptions.

---

## See also

* [index.js documentation](./index.md)
* [app.js documentation](./app.md)
* [slots.js documentation](./slots.md)
