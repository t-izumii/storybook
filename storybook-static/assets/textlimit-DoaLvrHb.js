import{j as t,M as s,C as a,S as r}from"./index-BmCl2F4U.js";import{useMDXComponents as o}from"./index-BImEGYBr.js";import{S as m,b as l}from"./textlimit.stories-Ckn-kQ8a.js";import"./iframe-B3J-iSwu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function n(e){const i={h1:"h1",h2:"h2",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
`,t.jsx(i.h1,{id:"文字数制限",children:"文字数制限"}),`
`,t.jsx(i.h2,{id:"使用例",children:"使用例"}),`
`,t.jsx(a,{of:l}),`
`,t.jsx(i.h2,{id:"css",children:"CSS"}),`
`,t.jsx(r,{language:"css",code:`
.u-textlimit {
  --text-limit: 1;
  &:not([data-text-limit]) , &[data-text-limit = '1'] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &[data-text-limit]:not([data-text-limit = '1']) {
    display: -webkit-box;
    -webkit-line-clamp: var(--text-limit);
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
  `})]})}function u(e={}){const{wrapper:i}={...o(),...e.components};return i?t.jsx(i,{...e,children:t.jsx(n,{...e})}):n(e)}export{u as default};
