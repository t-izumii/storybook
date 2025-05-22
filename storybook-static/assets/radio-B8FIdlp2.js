import{j as r,M as n,C as a,S as s}from"./index-BYK2ORcy.js";import{useMDXComponents as i}from"./index-BLysIC8v.js";import{S as c,b as d}from"./radio.stories-CakRB3SV.js";import"./iframe-EDjIsdKu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./radio-EYLaQdqC.js";function e(o){const t={h1:"h1",h2:"h2",...i(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:c}),`
`,r.jsx(t.h1,{id:"ラジオボタンコンポーネント",children:"ラジオボタンコンポーネント"}),`
`,r.jsx(t.h2,{id:"使用例",children:"使用例"}),`
`,r.jsx(a,{of:d}),`
`,r.jsx(t.h2,{id:"css",children:"CSS"}),`
`,r.jsx(s,{language:"css",code:`
.c-radio {
  position: relative;
  display: inline-flex;
  align-items: center;

  &:has(.c-radio__input:disabled) {
    color: #c4c4c4;

    .c-radio__frag {
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
    border-radius: 50%;
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
      border-radius: 50%;
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
      & + .c-radio__frag::after {
        opacity: 1;
      }
    }
  }
}
  `})]})}function b(o={}){const{wrapper:t}={...i(),...o.components};return t?r.jsx(t,{...o,children:r.jsx(e,{...o})}):e(o)}export{b as default};
