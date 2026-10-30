# h.js

## Purpose

**`h.js`** implements the core function for creating virtual DOM nodes in DotJS. The `h` function is similar to the `React.createElement` or `h` in other frameworks: you use it to build your UI tree in JavaScript.

It also exports helpers for text nodes, fragments, and slots:

* `hString` — for plain text
* `hFragment` — for grouping children without extra DOM elements
* `hSlot` — for slots/content projection

---

## How `h` Works

* Tag: A string (`'div'`, `'span'`, etc.) or a component function.
* Props: An object with attributes, event handlers, styles, etc.
* Children: Nested content — text, arrays, or other virtual nodes.

Example:

```js
h('div', { class: 'box' },
  h('h1', {}, 'Hello!'),
  h('p', {}, 'DotJS is easy.')
)
```

You can also pass arrays for children:

```js
h('ul', {}, [
  h('li', {}, 'One'),
  h('li', {}, 'Two')
])
```

---

## API Overview

* `h(tag, props, ...children)` — create virtual node
* `hString(text)` — create virtual text node
* `hFragment(children)` — create a fragment (multiple nodes as one)
* `hSlot(name, children)` — slot node for advanced templating

---

## Example Usage

**1. Render a simple component:**

```js
function Hello() {
  return h('h1', {}, 'Hello world!');
}
```

**2. Render children:**

```js
function List(props) {
  return h('ul', {}, props.items.map(item => h('li', {}, item)));
}
```

**3. Use a fragment:**

```js
function Group() {
  return hFragment([
    h('span', {}, 'A'),
    h('span', {}, 'B')
  ]);
}
```

**4. Use a slot:**

```js
const Card = defineComponent({
  setup: (props, emit, slots) =>
    h('div', {},
      h('h2', {}, props.title),
      slots.default && slots.default()
    )
});
```

---

## When to Use

* Use `h` everywhere you would normally write HTML/JSX in other frameworks.
* Use fragments when you need multiple nodes without extra DOM wrappers.
* Use slots for reusable layout/content templates.

---

## Best Practices

* Always return a single root node or a fragment from your components.
* Pass all dynamic data via props.
* Use keys when rendering lists (if supported).

---

## See also

* [component.js documentation](./component.md)
* [index.js documentation](./index.md)
