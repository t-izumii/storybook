import{j as o,M as s,C as i,S as m}from"./index-CqiY5sZm.js";import{useMDXComponents as n}from"./index-CCCaBRtk.js";import{S as a,b as c}from"./input-text.stories-BpyOoq33.js";import"./iframe-DhW4Jd85.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./input-text-Dgly9OeA.js";function t(r){const e={h1:"h1",h2:"h2",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:a}),`
`,o.jsx(e.h1,{id:"インプットテキストコンポーネント",children:"インプットテキストコンポーネント"}),`
`,o.jsx(e.h2,{id:"使用例",children:"使用例"}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(e.h2,{id:"css",children:"CSS"}),`
`,o.jsx(m,{language:"css",code:`
.c-input-text {
  width: 100%;
  padding: rem(16);
  font-size: rem(16);
  outline: 0;

  &:focus {
    border-color: #000;
  }

  &.--small {
    max-width: rem(200);
  }

  &.--medium {
    max-width: rem(300);
  }

  &.--large {
    max-width: rem(400);
  }

  &.--max {
    max-width: 100%;
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #c4c4c4;
  }

  &.is-error {
    border-color: red;
  }
}
  `})]})}function b(r={}){const{wrapper:e}={...n(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(t,{...r})}):t(r)}export{b as default};
