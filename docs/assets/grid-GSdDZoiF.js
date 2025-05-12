import{j as a,M as o,C as s,S as p}from"./index-BmCl2F4U.js";import{useMDXComponents as e}from"./index-BImEGYBr.js";import{S as i,b as c}from"./grid.stories-CnoL6bMI.js";import"./iframe-B3J-iSwu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function t(r){const n={h1:"h1",h2:"h2",...e(),...r.components};return a.jsxs(a.Fragment,{children:[a.jsx(o,{of:i}),`
`,a.jsx(n.h1,{id:"gridレイアウト",children:"Gridレイアウト"}),`
`,a.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,a.jsx(s,{of:c}),`
`,a.jsx(n.h2,{id:"css",children:"CSS"}),`
`,a.jsx(p,{language:"css",code:`
.l-grid {
  --column: 2;
  --column-tab: var(--column);
  --column-sp: var(--column-tab);
  --gap: 2.5rem;
  --gap-tab: var(--gap);
  --gap-sp: var(--gap-tab);

  display: grid;
  grid-template-columns: repeat(var(--column), 1fr);
  gap: var(--gap);

  @include media-breakpoint-tab {
    grid-template-columns: repeat(var(--column-tab), 1fr);
    gap: var(--gap-tab);
  }

  @include media-breakpoint-sp {
    grid-template-columns: repeat(var(--column-sp), 1fr);
    gap: var(--gap-sp);
  }

  &__col {
    // dev
    background-color: #000;
    height: 100px;
  }
}

  `})]})}function b(r={}){const{wrapper:n}={...e(),...r.components};return n?a.jsx(n,{...r,children:a.jsx(t,{...r})}):t(r)}export{b as default};
