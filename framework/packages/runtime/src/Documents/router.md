# router.js

## Purpose

**`router.js`** implements the core client-side routing system for DotJS. It keeps the UI in sync with the browser's URL, lets you switch views/pages without full reloads, and supports navigation both by user action (links, buttons) and programmatically from code.

---

## How It Works 

* Watches the browser's URL (`window.location` /** **`history` API)
* When the URL changes, matches the current path to a route and updates the displayed component
* Lets you navigate by clicking** **`<a>` links or using the router API (e.g.** **`router.push('/about')`)
* Supports route params and dynamic paths (like** **`/user/:id`)

---

## Example Usage

**Basic SPA Routing:**

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

**Programmatic Navigation:**

```js
import { router } from './framework/index.js';
router.push('/about'); // Go to /about page from code
```

---

## API Overview

* Used internally by** **`<Router>` and** **`<Route>` components (see** **`router-components.js`).
* Supports** **`push(path)`,** **`replace(path)`,** **`back()`, and other common navigation actions.
* Parses and matches paths using** **`route-matchers.js`.

---

## Best Practices

* Always declare all your app's routes at the top level of your UI tree.
* Use navigation helpers instead of directly changing** **`window.location`.
* Use route params for dynamic content (e.g.** **`/user/:id`).
* Keep state and URL in sync — the router helps with this!

---

## See also

* [router-components.js documentation](./router-components.md)
* [route-matchers.js documentation](./route-matchers.md)
