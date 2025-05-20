import{j as t,M as s,C as i,S as a}from"./index-CqiY5sZm.js";import{useMDXComponents as r}from"./index-CCCaBRtk.js";import{S as c,b as m}from"./media.stories-m-vIzUVG.js";import"./iframe-DhW4Jd85.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function o(e){const n={h1:"h1",h2:"h2",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
`,t.jsx(n.h1,{id:"mediaレイアウト",children:"Mediaレイアウト"}),`
`,t.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,t.jsx(i,{of:m}),`
`,t.jsx(n.h2,{id:"css",children:"CSS"}),`
`,t.jsx(a,{language:"css",code:`
.c-media {
  display: flex;
  justify-content: space-between;

  &.--reverse {
    flex-direction: row-reverse;
  }

  &__image {
    width: 50%;
    aspect-ratio: 16/9;
    background-color: #000;
  }

  &__content {
    width: calc(50% - 1rem);
  }

  &__title + &__text {
    margin-top: 1rem;
  }

  &__title + &__button {
    margin-top: 2rem;
  }

  &__text + &__button {
    margin-top: 2rem;
  }
}
  `})]})}function j(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o(e)}export{j as default};
