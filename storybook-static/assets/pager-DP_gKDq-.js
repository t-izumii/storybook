import{j as e,M as s,C as i,S as a}from"./index-BPHFoTIE.js";import{useMDXComponents as r}from"./index-CV6hpWAx.js";import{S as m,b as c}from"./pager.stories-CUYJiTBA.js";import"./iframe-C1SZAUmS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function n(t){const o={h1:"h1",h2:"h2",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:m}),`
`,e.jsx(o.h1,{id:"リストolコンポーネント",children:"リストOLコンポーネント"}),`
`,e.jsx(o.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(o.h2,{id:"css",children:"CSS"}),`
`,e.jsx(a,{language:"css",code:`
.c-list-ul {
  list-style: none;
  font-size: rem(16);
  line-height: 1.5;

  &__item {
    position: relative;
    padding-left: rem(28);

    & + & {
        margin-top: rem(8);
    }

    &::before {
        position: absolute;
        top: calc(1em * 1.5 / 2 - rem(4));
        left: rem(8);
        display: block;
        width: rem(10);
        height: rem(10);
        content: "";
        background-color: #000;
        border-radius: 50%;
    }
  }
}
  `})]})}function j(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{j as default};
