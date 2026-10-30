# app.js

## Purpose

**`app.js`** manages the main application lifecycle in DotJS. It is responsible for:

* Mounting the root component to the DOM
* Connecting the global state and reducers
* Integrating the dispatcher (for state & events)
* Managing the update/rendering loop (so your UI refreshes when state changes)
* Coordinating unmount/cleanup when needed

In short, this file glues together your main UI tree, state logic, and the rendering engine.

---

## How It Works

When you call `createApp({...})` (from `index.js`), the logic from `app.js` is what actually:

* Initializes your app’s state
* Sets up listeners for user actions (events)
* Renders your app for the first time
* Watches for state changes and re-renders as needed
* Handles unmounting (removing the app from the DOM)

---

## Example Usage

**Basic App Mounting:**

```js
import { createApp, h } from './framework/index.js';

const App = (state, emit) => h('div', {}, `State: ${state.value}`);

createApp({
  state: { value: 42 },
  reducers: {},
  view: App
}).mount(document.getElementById('app'));
```

**Unmounting (Advanced):**

```js
const app = createApp({...}).mount(document.getElementById('app'));

// Later, if you want to remove the app:
app.unmount();
```

---

## Main API

* `createApp(options)` – Sets up your app. Options include:

  * `state`: initial state object
  * `reducers`: functions to change state
  * `view`: root component function
  * `init` (optional): called on first mount
  * `cleanup` (optional): called on unmount

* `.mount(domNode)` – Attach the app to a real DOM element

* `.unmount()` – Remove the app and run cleanups

---

## Best Practices

* Always use `.mount()` with a specific DOM element (e.g. `document.getElementById('app')`)
* Keep root `state` as small and simple as possible
* Use `reducers` for **all** state changes (don’t mutate directly)
* Use `init` and `cleanup` for side-effects or subscriptions
* Unmount apps cleanly if your SPA switches entire pages/routes

---

## See also

* [index.js documentation](./index.md)
* [component.js documentation](./component.md)
* [Getting Started guide](../README.md#getting-started)
