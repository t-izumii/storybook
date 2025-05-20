import{j as n,M as r,C as i,S as c}from"./index-BPHFoTIE.js";import{useMDXComponents as s}from"./index-CV6hpWAx.js";import{S as a,b as m}from"./ol.stories-6_qDGIts.js";import"./iframe-C1SZAUmS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function o(t){const e={h1:"h1",h2:"h2",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:a}),`
`,n.jsx(e.h1,{id:"リストolコンポーネント",children:"リストOLコンポーネント"}),`
`,n.jsx(e.h2,{id:"使用例",children:"使用例"}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(e.h2,{id:"css",children:"CSS"}),`
`,n.jsx(c,{language:"css",code:`
.c-list-ol {
  list-style: none;
  counter-reset: list-counter;

  &__item {
    position: relative;

    & + & {
        margin-top: rem(8);
    }

    &::before {
        display: inline-block;
        content: counter(list-counter) ".";
        counter-increment: list-counter;
    }
  }
}
  `})]})}function f(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{f as default};
