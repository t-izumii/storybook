import{j as e,M as n,C as c,S as a}from"./index-BmCl2F4U.js";import{useMDXComponents as i}from"./index-BImEGYBr.js";import{S as s,b as l}from"./checkbox.stories-CqF1egHb.js";import"./iframe-B3J-iSwu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./checkbox-DX628-SY.js";function r(t){const o={h1:"h1",h2:"h2",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{of:s}),`
`,e.jsx(o.h1,{id:"チェックボックスコンポーネント",children:"チェックボックスコンポーネント"}),`
`,e.jsx(o.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(o.h2,{id:"css",children:"CSS"}),`
`,e.jsx(a,{language:"css",code:`
.c-checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;

  &:has(.c-checkbox__input:disabled) {
    color: #c4c4c4;

    .c-checkbox__frag {
      border-color: #c4c4c4;
      &::after {
        background-color: #c4c4c4;
      }
    }
  }

  &__frag {
    display: inline-block;
    position: relative;
    width: rem(20);
    height: rem(20);
    border: rem(2) solid #000;
    margin-right: rem(4);

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: rem(12);
      height: rem(12);
      content: '';

      opacity: 0;
      transform: translateX(-50%) translateY(-50%);
      background-color: #000;
    }
  }

  &__input {
    position: absolute;
    top: 0;
    left: 0;
    width: rem(20);
    height: rem(20);
    margin: 0;
    opacity: 0;

    &:checked {
      & + .c-checkbox__frag::after {
        opacity: 1;
      }
    }
  }
}
  `})]})}function g(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{g as default};
