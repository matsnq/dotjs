# DotJS

Built from scratch as a project at **kood/Jõhvi** (2025): virtual DOM, components, routing and a scheduler, with no third-party runtime dependencies.

DotJS is a lightweight, component-based JavaScript framework for building modern single-page applications (SPAs) using plain JavaScript.

Unlike large, black-box frameworks, DotJS is designed to be transparent and educational — perfect for students, junior developers, and anyone curious about how frameworks work under the hood. Every file is simple, well-commented, and structured to make the core concepts of frontend architecture clear.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Introduction](#introduction)
  - [Description example](#description-example)
  - [Get Started](./Docs/getStarted.md)
  - [Frontend usage example](./example/frontend/frontDoc.md)
  - [Feature (Delete All)](./Docs/feature.md)
- [Framework Architecture Overview](#architecture-overview)
  - [Framework File Overview](#file-overview)

---

## 📁 Project Structure

```plaintext
framework/
├── app.js
├── attributes.js
├── component.js
├── destroy-dom.js
├── dispatcher.js
├── events.js
├── h.js
├── index.js
├── mount-dom.js
├── nodes-equal.js
├── patch-dom
├── props.js
├── route-matchers.js
├── router-components.js
├── router.js
├── scheduler.js
├── slots.js
├── traverse-dom.js
├── utils/
│   ├── arrays.js
│   ├── maps.js
│   ├── objects.js
│   └── strings.js
```

---

## Introduction

**DotJS** makes it easy to learn frontend architecture step by step by showing you exactly how modern frameworks are built.
Instead of hiding logic behind “magic,” DotJS exposes how rendering, state management, routing, and events all work together.

**Who is it for?**

- 🎓 Students & juniors who want to understand frontend frameworks at the core level.
- 🧑‍💻 Developers tired of bloated, black-box solutions.
- 🔍 Anyone curious to see what really happens under the hood.

**Key features:**

- **No dependencies:** built entirely with vanilla JavaScript.
- **Component-based:** build UIs as reusable functions.
- **Virtual DOM:** efficient updates without manual DOM manipulation.
- **State Management:** predictable, transparent data flow.
- **Routing:** simple client-side navigation and route matching.
- **Extensible:** modular design, easy to hack and expand.

---

## Description Example

This project consists of two main parts: the backend and the frontend.

The **backend** is written in Python and implements all the necessary server functionality and APIs required for the application.

The **frontend** is a simple single-page application built with the custom JavaScript framework described above. The example
demonstrates all the key features of the framework: state management, routing, event handling, component usage, and interaction with the backend via HTTP.

The **frontend** example is intentionally kept as simple as possible to clearly illustrate how the framework works and how to
use its main technologies in practice.

![gif](Docs/gif/video.gif)

- [Get Started](/Docs/getStarted.md)
- [Description of framework usage in the example](/example/frontend/frontDoc.md)

---

## Architecture Overview

DotJS follows these key principles:

- **Separation of concerns** (components, state, events, routing, DOM)
- **Functional style:** Components are pure functions
- **Declarative UI:** Describe “what”, not “how”
- **Central dispatcher:** State and actions go through a common layer

---

## File Overview

> _Below is a short description of each core file/module. For deep dive, see links to **[detailed breakdowns](#detailed-file-breakdowns)**._

### Main Files

| File                                                                            | Purpose (Short Description                                                          |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`index.js`](./framework/packages/runtime/src/Documents/index.md)               | Entry point: exports public API (`createApp`, `defineComponent`, `h`, routing etc.) |
| [`app.js`](./framework/packages/runtime/src/Documents/app.md)                   | Application lifecycle: initializes, mounts, connects state, root component          |
| [`component.js`](./framework/packages/runtime/src/Documents/component.md)       | Component logic: base for all components, manages state, props, lifecycle           |
| [`h.js`](./framework/packages/runtime/src/Documents/h.md)                       | Creates virtual DOM nodes (`h` function, fragments, slots, text nodes)              |
| [`scheduler.js`](./framework/packages/runtime/src/Documents/scheduler.md)       | Manages batching and scheduling UI updates (performance)                            |
| [`patch-dom.js`](./framework/packages/runtime/src/Documents/patch-dom.md)       | Applies virtual DOM diffs/patches to the real DOM                                   |
| [`traverse-dom.js`](./framework/packages/runtime/src/Documents/traverse-dom.md) | Helps navigate/traverse the real DOM tree                                           |
| [`destroy-dom.js`](./framework/packages/runtime/src/Documents/destroy-dom.md)   | Unmounts/removes DOM nodes and runs cleanup hooks                                   |
| [`dispatcher.js`](./framework/packages/runtime/src/Documents/dispatcher.md)     | Handles state changes and event dispatching                                         |
| [`events.js`](./framework/packages/runtime/src/Documents/events.md)             | Framework event system: handles and delegates UI/DOM events                         |
| [`attributes.js`](./framework/packages/runtime/src/Documents/attributes.md)     | Sets/updates DOM attributes and styles in a safe, unified way                       |
| [`props.js`](./framework/packages/runtime/src/utils/Documents/props.md)         | Utilities for merging and handling component props                                  |
| [`slots.js`](./framework/packages/runtime/src/Documents/slots.md)               | Implements slot API (for template children/content projection)                      |

### Routing

| File                                                                                      | Purpose (Short Description)                                     |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`router.js`](./framework/packages/runtime/src/Documents/router.md)                       | Controls client-side navigation and route state                 |
| [`route-matchers.js`](./framework/packages/runtime/src/Documents/route-matchers.md)       | Functions for matching routes and extracting params             |
| [`router-components.js`](./framework/packages/runtime/src/Documents/router-components.md) | Exposes`<Router>`, `<Route>` components for declarative routing |

### Utilities

| File                                                                              | Purpose (Short Description)                    |
| --------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`utils/arrays.js`](./framework/packages/runtime/src/utils/Documents/arrays.md)   | Array helpers (map, filter, find, clone, etc.) |
| [`utils/maps.js`](./framework/packages/runtime/src/utils/Documents/maps.md)       | Map/object helpers (get, set, merge, etc.)     |
| [`utils/objects.js`](./framework/packages/runtime/src/utils/Documents/objects.md) | Object helpers (deep clone, assign, etc.)      |
| [`utils/strings.js`](./framework/packages/runtime/src/utils/Documents/strings.md) | String helpers (capitalize, kebabCase, etc.)   |

---

**Need help? See FAQ or open issues.**
