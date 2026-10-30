# route-matchers.js

## Purpose

**`route-matchers.js`** provides utility functions for matching URLs and extracting parameters from paths in DotJS routing. It powers the ability to write dynamic routes (like** **`/user/:id`), check if the current URL matches a given route, and grab parameters for use in components.

---

## How It Works (Simply)

* When a route is defined with params (`/user/:id`), this module:
  * Checks if the browser’s current path matches the route pattern
  * Extracts dynamic params (e.g.** **`id` from** **`/user/42` →** **`{ id: '42' }`)
* Used by router and** **`<Route>` component to decide what to display and pass params as props

---

## Example Usage

*(App developers don’t usually use this module directly. The following is just for understanding.)*

**Matching and extracting params:**

```js
// If current URL is /user/42
const match = matchRoute('/user/:id', '/user/42');
// match.params = { id: '42' }
```

---

## API Overview

* Functions to:
  * Compare a path pattern to the current URL
  * Extract dynamic params into an object
  * Return match details (isMatch, params, etc.)
* Used internally by the router and Route components

---

## Best Practices

* Use route params for any dynamic or user-specific pages (profile, product, etc.)
* Prefer descriptive route names and parameter keys
* Don’t manipulate URLs or params directly—let the router handle matching

---

## See also

* [router.js documentation](./router.md)
* [router-components.js documentation](./router-components.md)
