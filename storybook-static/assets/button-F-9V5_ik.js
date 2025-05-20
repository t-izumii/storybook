import{j as e,M as i,C as s,S as m}from"./index-CqiY5sZm.js";import{useMDXComponents as o}from"./index-CCCaBRtk.js";import{S as c,b as a}from"./button.stories-DAFcguaD.js";import"./iframe-DhW4Jd85.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./index-DSC6Fyi1.js";function t(n){const r={h1:"h1",h2:"h2",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(r.h1,{id:"ボタンコンポーネント",children:"ボタンコンポーネント"}),`
`,e.jsx(r.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(r.h2,{id:"css",children:"CSS"}),`
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
  `})]})}function j(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{j as default};
