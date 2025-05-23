import{j as o,M as a,C as t,S as i}from"./index-CBW6qsR0.js";import{useMDXComponents as n}from"./index-BhLcEmPp.js";import{S as m,b as c,s as x,r as p,c as f,t as d}from"./block.stories-DP2KD6vs.js";import"./iframe-DEAT1bJX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./input-text-Dgly9OeA.js";import"./select-CedAVv5M.js";import"./checkbox-DX628-SY.js";import"./radio-EYLaQdqC.js";import"./textarea-CfqfEZGG.js";function s(e){const r={h1:"h1",h2:"h2",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:m}),`
`,o.jsx(r.h1,{id:"フォームブロックコンポーネント",children:"フォームブロックコンポーネント"}),`
`,o.jsx(r.h2,{id:"使用例",children:"使用例"}),`
`,o.jsx(t,{of:c}),`
`,o.jsx(t,{of:x}),`
`,o.jsx(t,{of:p}),`
`,o.jsx(t,{of:f}),`
`,o.jsx(t,{of:d}),`
`,o.jsx(r.h2,{id:"css",children:"CSS"}),`
`,o.jsx(i,{language:"css",code:`
.c-form {
  &__label {
    font-size: rem(16);
  }

  &__subtext {
    font-size: rem(14);
    margin-top: rem(8);
  }

  &__field {
    margin-top: rem(8);

    &:has(.c-radio) , &:has(.c-checkbox) {
      display: flex;
      flex-wrap: wrap;
      gap: rem(16);
    }
  }

  &__errortext {
    color: red;
    font-size: rem(14);
    margin-top: rem(8);
  }
}
  `})]})}function D(e={}){const{wrapper:r}={...n(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(s,{...e})}):s(e)}export{D as default};
