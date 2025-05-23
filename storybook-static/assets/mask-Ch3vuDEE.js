import{j as a,M as i,C as r,S as o}from"./index-CBW6qsR0.js";import{useMDXComponents as t}from"./index-BhLcEmPp.js";import{S as c,b as p}from"./mask.stories-bDIaUK_j.js";import"./iframe-DEAT1bJX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function e(n){const s={h1:"h1",h2:"h2",...t(),...n.components};return a.jsxs(a.Fragment,{children:[a.jsx(i,{of:c}),`
`,a.jsx(s.h1,{id:"アニメーションマスク",children:"アニメーションマスク"}),`
`,a.jsx(s.h2,{id:"使用例",children:"使用例"}),`
`,a.jsx(r,{of:p}),`
`,a.jsx(s.h2,{id:"css",children:"CSS"}),`
`,a.jsx(o,{language:"css",code:`
.u-anime-mask {
    --delay: 0;
    --delay-sp: var(--delay);
    --duration: 1;
    --duration-sp: var(--duration);
    --ease: linear;

    clip-path: inset(0 100% 0 0);
    transition: clip-path calc(var(--duration) * 1s) calc(var(--delay) * 1s) var(--ease);

    @include media-breakpoint-sp {
        transition: clip-path calc(var(--duration-sp) * 1s) calc(var(--delay-sp) * 1s) var(--ease);
    }

    &.is-active {
        clip-path: inset(0 0 0 0);
    }
}


.u-anime-group {
    &.is-active {
        .u-anime-mask {
            clip-path: inset(0 0 0 0);
        }
    }
}

  `})]})}function v(n={}){const{wrapper:s}={...t(),...n.components};return s?a.jsx(s,{...n,children:a.jsx(e,{...n})}):e(n)}export{v as default};
