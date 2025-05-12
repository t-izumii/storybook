import{j as e,M as r,C as s,S as o}from"./index-u3GFYh61.js";import{useMDXComponents as i}from"./index-BvYweuI2.js";import{S as l,b as c}from"./flex.stories-0SMRiW1i.js";import"./iframe-BWNJ7hDR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function a(n){const t={h1:"h1",h2:"h2",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(t.h1,{id:"flexレイアウト",children:"Flexレイアウト"}),`
`,e.jsx(t.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h2,{id:"css",children:"CSS"}),`
`,e.jsx(o,{language:"css",code:`
.l-flex {
  --column: 2;
  --column-tab: var(--column);
  --column-sp: var(--column-tab);
  --gap: 2.5rem;
  --gap-tab: var(--gap);
  --gap-sp: var(--gap-tab);

  display: flex;
  gap: var(--gap);
  flex-wrap: wrap;

  @include media-breakpoint-tab {
    gap: var(--gap-tab);
  }

  @include media-breakpoint-sp {
    gap: var(--gap-sp);
  }

  &.--nowrap-sp {
    @include media-breakpoint-sp {
      flex-flow: row nowrap;
    }
  }

  &.--align-start {
    align-items: flex-start;
  }

  &.--align-center {
    align-items: center;
  }

  &.--align-end {
    align-items: flex-end;
  }

  &.--align-start-sp {
    @include media-breakpoint-sp {
      align-items: flex-start;
    }
  }

  &.--align-center-sp {
    @include media-breakpoint-sp {
      align-items: center;
    }
  }

  &.--align-end-sp {
    @include media-breakpoint-sp {
      align-items: flex-end;
    }
  }

  &.--justify-start {
    justify-content: flex-start;
  }

  &.--justify-center {
    justify-content: center;
  }

  &.--justify-end {
    justify-content: flex-end;
  }

  &.--justify-start-sp {
    @include media-breakpoint-sp {
      justify-content: flex-start;
    }
  }

  &.--justify-center-sp {
    @include media-breakpoint-sp {
      justify-content: center;
    }
  }

  &.--justify-end-sp {
    @include media-breakpoint-sp {
      justify-content: flex-end;
    }
  }

  &.--row-reverse {
    flex-direction: row-reverse;
  }

  &.--row-reverse-sp {
    @include media-breakpoint-sp {
      flex-direction: row-reverse;
    }
  }

  &__col {
    width: calc((100% - (var(--column) - 1) * var(--gap)) / var(--column));

    // dev
    background-color: #000;
    height: 100px;
    
    @include media-breakpoint-tab {
      width: calc((100% - (var(--column-tab) - 1) * var(--gap-tab)) / var(--column-tab));
    }

    @include media-breakpoint-sp {
      width: calc((100% - (var(--column-sp) - 1) * var(--gap-sp)) / var(--column-sp));
    }
  }
}

  `})]})}function b(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{b as default};
