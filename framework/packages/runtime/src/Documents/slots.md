# slots.js

## Purpose

**`slots.js`** implements the slot API for DotJS. Slots let you build components with placeholders for child content (similar to** **`<slot>` in Web Components or React's** **`props.children`).

With slots, you can make layouts and components that accept dynamic nested content in a clean, declarative way.

---

## How It Works 

* A parent component can provide children/content to a child component via slots.
* In your component, use the** **`slots` argument in** **`setup`:
  * `slots.default()` for unnamed (default) content
  * `slots.named()` for named slots (if supported)

---

## Example Usage

**Basic Slot:**

```js
const Card = defineComponent({
  setup: (props, emit, slots) =>
    h('div', { class: 'card' },
      h('h2', {}, props.title),
      slots.default && slots.default() // Render any nested content
    )
});

// Usage
h(Card, { title: 'Hi' },
  h('p', {}, 'This will go in the slot!')
)
```

**Named Slots:**
*(If your slots.js supports them)*

```js
const Layout = defineComponent({
  setup: (props, emit, slots) =>
    h('div', {},
      h('header', {}, slots.header && slots.header()),
      h('main', {}, slots.default && slots.default()),
      h('footer', {}, slots.footer && slots.footer())
    )
});

// Usage
h(Layout, {}, {
  header: () => h('h1', {}, 'Welcome'),
  default: () => h('p', {}, 'Main content'),
  footer: () => h('small', {}, 'All rights reserved.')
})
```

---

## API Overview

* Slots are passed as a third argument to** **`setup` in** **`defineComponent`.
* Default slots are rendered with** **`slots.default()`.
* Named slots (if implemented) are rendered with** **`slots.[name]()`.
* App developers never manipulate slots.js directly.

---

## Best Practices

* Use slots for maximum flexibility in layouts and UI containers.
* Always check if a slot exists before calling it (`slots.header && slots.header()`).
* Use named slots for complex layouts; default slots for simple wrappers.

---

## See also

* [h.js documentation](./h.md)
* [component.js documentation](./component.md)
