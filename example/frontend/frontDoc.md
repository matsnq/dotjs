# Frontend App: Structure and Framework Usage


## Overview

This frontend app is a note-taking application built on top of the** ****DotJS** framework.
It demonstrates component-based architecture, state management, routing, and API integration using the framework’s primitives.


* [Mointing files](#1-mounting-the-app)
* [Virtual DOM](#2-virtual-dom-and-h-function)
* [State management](#3-state-management-and-reducers)
* [Component architecture](#4-component-architecture)
* [Event handling](#5-event-handling)
* [Routing](#6-routing)
* [Http requests](#7-http-requests-api-layer)
* [Data flow example](#8-data-flow-example)
* [Best Practices Demonstrated and summary](#best-practices-demonstrated)


**Key files in the frontend:**

* `index.html` — root HTML file, connects the app to** **`<div id="app"></div>`
* `src/app.js` — main entry point, sets up the app, state, reducers, and routes
* `src/Notes.js` — component to display the notes list (with routing)
* `src/NoteItem.js` — component for displaying a single note
* `src/AddNote.js` — component for adding new notes
* `src/NoteList.js` — component for rendering a list of notes
* `src/api.js` — handles HTTP requests (API abstraction)
* `src/router.js` — routing helpers if needed (optional override)

## How DotJS Framework Is Used

### 1. Mounting the App

* `createApp` from the framework initializes the application, sets up global state and reducers, and mounts the root component to the DOM.
* In** **`index.html`:
  ```html
  <div id="app"></div>
  ```
* In** **`app.js`:
  ```js
  import { createApp, h, Router, Route } from "../framework/index.js";
  createApp({
    state: {...},
    reducers: {...},
    view: App
  }).mount(document.getElementById('app'));
  ```

***Framework used:***

* [`index.js`](../../framework/packages/runtime/src/Documents/index.md)
* [`app.js`](../../framework/packages/runtime/src/Documents/app.md)

---

### 2. Virtual DOM and** **`h` Function

All UI is described with the** **`h` function, building virtual DOM trees:

```js
// Example from AddNote.js
export default function AddNote(props, emit) {
  return h("form", { on: { submit: handleSubmit } }, [
    h("input", { type: "text", ... }),
    h("button", { type: "submit" }, "Add"),
  ]);
}
```

No manual DOM manipulation; DotJS handles rendering and updating.

***Framework used:***

* [`h.js`](../../framework/packages/runtime/src/Documents/h.md)
* [`patch-dom.js`](../../framework/packages/runtime/src/Documents/patch-dom.md)

---

### 3. State Management and Reducers

The app’s state (list of notes, input values, etc.) lives in the root and is updated via** ****reducers**.

```js
// In app.js
const reducers = {
  addNote: (state, note) => ({ ...state, notes: [...state.notes, note] }),
  removeNote: (state, id) => ({ ...state, notes: state.notes.filter(n => n.id !== id) }),
  // ...
};
```

Child components call** **`emit("addNote", data)` to trigger state changes.
**State updates trigger re-rendering automatically (thanks to dispatcher and scheduler).**

***Framework used:***

* [`dispatcher.js`](../../framework/packages/runtime/src/Documents/dispatcher.md)
* [`scheduler.js`](../../framework/packages/runtime/src/Documents/scheduler.md)
* [`component.js`](../../framework/packages/runtime/src/Documents/component.md)

---

### 4. Component Architecture

Each UI piece (add form, note item, list, main notes view) is a separate function component:

```js
// NoteItem.js
export default function NoteItem({ note }, emit) {
  return h("li", {},
    h("span", {}, note.text),
    h("button", { on: { click: () => emit("remove", note.id) } }, "Delete")
  );
}
```

* Props are used for data input.
* `emit` is used to bubble actions (events) upward.

***Framework used:***

* [`component.js`](../../framework/packages/runtime/src/Documents/component.md)
* [`props.js`](../../framework/packages/runtime/src/utils/Documents/props.md)
* [`events.js`](../../framework/packages/runtime/src/Documents/events.md)
* [`slots.js`](../../framework/packages/runtime/src/Documents/slots.md) (if present in layouts)

---

### 5. Event Handling

All user interactions use the** **`on: { ... }` syntax in props.
No need to call addEventListener manually:

```js
h("button", { on: { click: handleClick } }, "Click")
```

**DotJS** automatically binds, delegates, and cleans up listeners.

***Framework used:***

* [`events.js`](../../framework/packages/runtime/src/Documents/events.md)
* [`attributes.js`](../../framework/packages/runtime/src/Documents/index.mdattributes.md)

---

### 6. Routing

The app uses declarative SPA routing:

```js
import { Router, Route } from "../framework/index.js";

const App = () => h(Router, {}, [
  h(Route, { path: "/" }, h(Notes)),
  h(Route, { path: "/add" }, h(AddNote)),
]);
```

* The Router component observes the URL and renders the appropriate view.
* Route params (if any) are passed as props.

***Framework used:***

* [`router.js`](../../framework/packages/runtime/src/Documents/router.md)
* [`router-components.js`](../../framework/packages/runtime/src/Documents/router-components.md)
* [`route-matchers.js`](../../framework/packages/runtime/src/Documents/route-matchers.md)

---

### 7. HTTP Requests (API Layer)

For fetching and posting data, a separate** **`api.js` is used, utilizing** **`fetch` or similar APIs:

```js
// In api.js
export async function addNote(note) {
  const response = await fetch("/api/notes", { method: "POST", body: JSON.stringify(note) });
  return response.json();
}
```

* Data loaded via API is sent to reducers for state management.

***Framework used:***

* Not a framework feature per se; uses native fetch (as recommended for flexibility).

---

### 8. Data Flow Example

1. User submits AddNote form.
2. `handleSubmit` calls** **`emit("addNote", newNote)`.
3. The reducer in app.js updates the state.
4. State change triggers UI re-render via scheduler/patcher.
5. New note appears in NoteList.

---

## Component-by-Component Example (AddNote)

**AddNote.js:**

```js
export default function AddNote(props, emit) {
  let inputValue = "";

  function handleSubmit(e) {
    e.preventDefault();
    emit("addNote", { text: inputValue });
    inputValue = "";
  }

  return h("form", { on: { submit: handleSubmit } }, [
    h("input", {
      type: "text",
      value: inputValue,
      on: { input: e => inputValue = e.target.value }
    }),
    h("button", { type: "submit" }, "Add"),
  ]);
}
```

**This uses:**

* Virtual DOM (`h`)
* Event handlers (`on: { submit }`)
* State → emit → reducer flow

---

## Best Practices Demonstrated

* Separation into components with clear responsibility
* Using props and emit for component communication
* No manual DOM manipulation
* Centralized state management and event flow
* SPA Routing declared via Router/Route

---

## Summary

* **DotJS** provides a clean, understandable architecture for beginners: each UI element is a component, state is updated through reducers, all updates flow through the virtual DOM, and all events are declared declaratively.
* The entire frontend of this application is built on these principles, making the project easy to maintain and extend.

---
