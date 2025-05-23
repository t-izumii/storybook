import{j as o,M as s,C as i,S as c}from"./index-CBW6qsR0.js";import{useMDXComponents as t}from"./index-BhLcEmPp.js";import{S as a,b as m}from"./select.stories-BgPxqzrx.js";import"./iframe-DEAT1bJX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./select-CedAVv5M.js";function n(e){const r={h1:"h1",h2:"h2",...t(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:a}),`
`,o.jsx(r.h1,{id:"セレクトボックスコンポーネント",children:"セレクトボックスコンポーネント"}),`
`,o.jsx(r.h2,{id:"使用例",children:"使用例"}),`
`,o.jsx(i,{of:m}),`
`,o.jsx(r.h2,{id:"css",children:"CSS"}),`
`,o.jsx(c,{language:"css",code:`
.c-selectbox {
  position: relative;

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

  &__field {
    outline: 0;
    width: 100%;
    font-size: rem(16);
    padding: rem(16);
    appearance: none;

    &:focus {
      border-color: #000;
    }

    &:disabled {
      background-color: #f5f5f5;
      color: #c4c4c4;
    }

    &.is-error {
      border-color: red;
    }
  }

  &__icon {
    position: absolute;
    right: rem(16);
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &:has(.c-selectbox__field:disabled) {
    .c-selectbox__icon {
      background-color: #c4c4c4;
    }
  }
}
  `})]})}function j(e={}){const{wrapper:r}={...t(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(n,{...e})}):n(e)}export{j as default};
