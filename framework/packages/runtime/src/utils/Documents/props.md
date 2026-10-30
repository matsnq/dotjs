# props.js

## Purpose

**`props.js`** contains helper functions for managing props (properties passed to components). It ensures that props are merged, defaulted, and validated correctly, so your components always receive the right data in the right shape.

---

## How It Works

* When you render a component with props (e.g.,** **`h(Button, { label: 'OK' })`), DotJS uses** **`props.js` to:
  * Merge provided props with default values (if any)
  * Filter and normalize props for consistent use
  * Optionally validate or transform props before they reach your component

---

## Example Usage

**Default props:**

```js
const Button = defineComponent({
  props: { label: 'Default' },
  setup: (props, emit) => h('button', {}, props.label)
});

h(Button, { label: 'Save' }) // label = 'Save'
h(Button)                   // label = 'Default'
```

---

## API Overview

* Used internally — you don’t call** **`props.js` directly.
* Handles merging, filtering, and preparation of props for all components.

---

## Best Practices

* Always define default props in your components (with** **`defineComponent`).
* Never mutate incoming props inside a component (treat as read-only).
* Use props to pass all dynamic data from parent to child components.

---

## See also

* [component.js documentation](../../Documents/component.md)
* [h.js documentation](../../Documents/h.md)
