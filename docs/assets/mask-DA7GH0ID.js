import{j as a,M as r,C as o,S as e}from"./index-u3GFYh61.js";import{useMDXComponents as i}from"./index-BvYweuI2.js";import{S as c,b as p}from"./mask.stories-bDIaUK_j.js";import"./iframe-BWNJ7hDR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function t(s){const n={h1:"h1",h2:"h2",...i(),...s.components};return a.jsxs(a.Fragment,{children:[a.jsx(r,{of:c}),`
`,a.jsx(n.h1,{id:"アニメーションマスク",children:"アニメーションマスク"}),`
`,a.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,a.jsx(o,{of:p}),`
`,a.jsx(n.h2,{id:"css",children:"CSS"}),`
`,a.jsx(e,{language:"css",code:`
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

  `}),`
`,a.jsx(n.h2,{id:"js",children:"Js"}),`
`,a.jsx(e,{language:"javascript",code:`

  `})]})}function v(s={}){const{wrapper:n}={...i(),...s.components};return n?a.jsx(n,{...s,children:a.jsx(t,{...s})}):t(s)}export{v as default};
