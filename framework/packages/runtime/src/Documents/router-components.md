# router-components.js

## Purpose

**`router-components.js`** provides the main routing components for your DotJS apps:** **`<Router>` and** **`<Route>`. These let you build single-page applications (SPAs) with declarative, nested, and dynamic routing just by composing components.

You use these components to describe your app’s navigation structure directly in your UI tree.

---

## How It Works 

* `<Router>` watches the current URL and decides which** **`<Route>` should be shown
* Each** **`<Route>` declares a** **`path` (like** **`/`,** **`/about`,** **`/user/:id`)
* When a route matches, the corresponding component is rendered (with params as props)
* Supports nesting for layouts (route inside route)

---

## Example Usage

**Basic Routing:**

```js
import { Router, Route, h } from './framework/index.js';

const Home = () => h('h2', {}, 'Home');
const About = () => h('h2', {}, 'About');

const App = () =>
  h(Router, {},
    h(Route, { path: '/' }, h(Home)),
    h(Route, { path: '/about' }, h(About))
  );
```

**Dynamic Routing with Params:**

```js
const User = (props) => h('div', {}, 'User ID: ' + props.id);

h(Router, {},
  h(Route, { path: '/user/:id' }, h(User))
)
```

---

## API Overview

* `<Router>`: Top-level routing context. Watches URL, manages navigation.
* `<Route path="...">`: Describes a route and its component. Receives route params as props.
* Nested routes/layouts supported for complex apps.
* All routing logic is declarative (expressed as UI tree).

---

## Best Practices

* Always place** **`<Router>` at or near the root of your app.
* Use a** **`<Route>` for every page/view you want accessible by URL.
* Use params (`:id`, etc.) for dynamic pages and access them via props.
* Keep your route structure as flat as possible for simple apps, or nest routes for layouts.

---

## See also

* [router.js documentation](./router.md)
* [route-matchers.js documentation](./route-matchers.md)
