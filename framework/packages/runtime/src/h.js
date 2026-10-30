import { withoutNulls } from './utils/arrays'
import { setAttributes } from "./attributes";
import { addEventListeners } from "./events";

export const DOM_TYPES = {
    TEXT: 'text',
    ELEMENT: 'element',
    FRAGMENT: 'fragment',
    COMPONENT: "component",
    SLOT: "slot",
}

export function h(tag, props = {}, children = []) {
    const type = typeof tag === "string" ? DOM_TYPES.ELEMENT : DOM_TYPES.COMPONENT;

    return {
        tag,
        props,
        type,
        children: mapTextNodes(withoutNulls(children)),
    }
}

export function isComponent({ tag }) {
    return typeof tag === "function";
}

export function hString(str) {
    return {type: DOM_TYPES.TEXT, value: str}
}

export function hFragment(vNodes) {
    return {
        type: DOM_TYPES.FRAGMENT,
        children: mapTextNodes(withoutNulls(vNodes)),
    }
}

function mapTextNodes(children) {
    return children.map((child) =>
        typeof child === 'string' ||
        typeof child === 'number' ||
        typeof child === 'boolean' ||
        typeof child === 'bigint' ||
        typeof child === 'symbol'
        ? hString(child) : child
    );
}

export function extractChildren(vdom) {
    if (vdom.children == null) {
        return [];
    }

    const children = [];

    for (const child of vdom.children) {
        if (child.type === DOM_TYPES.FRAGMENT) {
            children.push(...extractChildren(child, children));
        } else {
            children.push(child);
        }
    }
    
    return children;
}

let hSlotCalled = false;

export function didCreateSlot() {
    return hSlotCalled;
}

export function resetDidCreateSlot() {
    hSlotCalled = false;
}

export function hSlot(children = []) {
    hSlotCalled = true;
    return { type: DOM_TYPES.SLOT, children };
}