import{j as e,M as o,C as s,S as m}from"./index-BmCl2F4U.js";import{useMDXComponents as i}from"./index-BImEGYBr.js";import{S as c,b as a}from"./button.stories-yQ9krihg.js";import"./iframe-B3J-iSwu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./index-DSC6Fyi1.js";function t(r){const n={h1:"h1",h2:"h2",p:"p",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"ボタンコンポーネント",children:"ボタンコンポーネント"}),`
`,e.jsx(n.p,{children:"ボタンコンポーネントは、"}),`
`,e.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"css",children:"CSS"}),`
`,e.jsx(m,{language:"css",code:`
.c-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: rem(300);
  padding: rem(16) rem(24);
  font-size: rem(16);
  min-height: rem(56);
  transition: 0.3s all;

  @include hover {
    background-color: black;
    color: white;
  }

  &.--large {
    min-width: rem(400);
    padding: rem(24) rem(32);
    font-size: rem(20);
    min-height: rem(64);
  }

  &.--small {
    min-width: rem(200);
    padding: rem(8) rem(16);
    font-size: rem(12);
    min-height: rem(32);
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #c4c4c4;
    cursor: not-allowed;
  }
}
  `})]})}function j(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{j as default};
