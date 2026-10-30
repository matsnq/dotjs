# index.js

## Purpose

**`index.js`** is the public entry point of the DotJS framework. It exposes all main functions and components needed to build applications: component creation, virtual DOM node creation, routing, and more.

Developers import from `index.js` to access the framework’s API.

---

## API Overview

### Main Exports

* `createApp` – Initialize and mount a new application
* `defineComponent` – Define a reusable component (with lifecycle support)
* `h` – Create virtual DOM nodes (core JSX-like function)
* `hString`, `hFragment`, `hSlot` – Create text nodes, fragments, and slots for advanced UIs
* `Router`, `Route` – Routing components for SPA navigation

---

## Example Usage

### 1. Minimal Application

```js
import { createApp, h } from './framework/index.js';

const App = (state, emit) =>
  h('div', {}, `Hello, DotJS!`);

createApp({
  state: {},
  reducers: {},
  view: App
}).mount(document.getElementById('app'));
```

### 2. Defining a Component

```js
import { defineComponent, h } from './framework/index.js';

const Button = defineComponent({
  props: { label: '' },
  setup: (props, emit) =>
    h('button', { on: { click: () => emit('press') } }, props.label)
});
```

### 3. Using Routing

```js
import { Router, Route, h } from './framework/index.js';

const Home = () => h('h2', {}, 'Home page');
const About = () => h('h2', {}, 'About page');

const App = () =>
  h(Router, {},
    h(Route, { path: '/' }, h(Home)),
    h(Route, { path: '/about' }, h(About))
  );
```

---

## When to Use

* **Always import from `index.js`**: This ensures you get stable, public APIs and not internal/experimental code.
* **Start every project here**: Your app’s entry file should use these exports.

---

## Best Practices

* Use `createApp` for root app bootstrapping.
* Use `defineComponent` for every reusable or stateful UI part.
* Use `h` for all virtual DOM creation instead of manual DOM methods.
* Use only the public API from `index.js` – don’t import internal files directly.

---

## See also

* [component.js documentation](./component.md)
* [Getting Started guide](../README.md#getting-started)
