import{R as o}from"./index-DCUO3UO8.js";import"./iframe-Ck6AF3FG.js";import"./index-Bx-go_-4.js";import"./index-DrFu-skq.js";const e={},c=o.createContext(e);function m(t){const n=o.useContext(c);return o.useMemo(function(){return typeof t=="function"?t(n):{...n,...t}},[n,t])}function s(t){let n;return t.disableParentContext?n=typeof t.components=="function"?t.components(e):t.components||e:n=m(t.components),o.createElement(c.Provider,{value:n},t.children)}export{s as MDXProvider,m as useMDXComponents};
