import{j as a,M as i,C as o,S as n}from"./index-BmCl2F4U.js";import{useMDXComponents as s}from"./index-BImEGYBr.js";import{S as l,b as m}from"./fade.stories-DW2w3pOe.js";import"./iframe-B3J-iSwu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function r(t){const e={h1:"h1",h2:"h2",p:"p",...s(),...t.components};return a.jsxs(a.Fragment,{children:[a.jsx(i,{of:l}),`
`,a.jsx(e.h1,{id:"アニメーションフェード",children:"アニメーションフェード"}),`
`,a.jsx(e.p,{children:"アコーディオンコンポーネントは、コンテンツを折りたたんで表示するUI要素です。"}),`
`,a.jsx(e.h2,{id:"使用例",children:"使用例"}),`
`,a.jsx(o,{of:m}),`
`,a.jsx(e.h2,{id:"css",children:"CSS"}),`
`,a.jsx(n,{language:"css",code:`
.u-anime-fade {
    @property --movementx {
        syntax: "<length>";
        initial-value: 0;
        inherits: true;
    }

    @property --movementx-sp {
        syntax: "<length>";
        initial-value: 0;
        inherits: true;
    }

    @property --movementy {
        syntax: "<length>";
        initial-value: 0;
        inherits: true;
    }

    @property --movementy-sp {
        syntax: "<length>";
        initial-value: 0;
        inherits: true;
    }

    --delay: 0;
    --delay-sp: var(--delay);
    --duration: 0.5;
    --duration-sp: 0.5;
    --movementx: 0;
    --movementx-sp: var(--movementx);
    --movementy: 30;
    --movementy-sp: var(--movementy);
    --opacity: 0;
    --ease: linear;

    opacity: var(--opacity);
    transform: translateX(calc(var(--movementx) * 1px))
        translateY(calc(var(--movementy) * 1px));
    transition: all calc(var(--duration) * 1s) calc(var(--delay) * 1s) var(--ease);
    &.is-active {
        opacity: 1;
        transform: translateX(0) translateY(0);
    }

    @include media-breakpoint-sp {
        transform: translateX(calc(var(--movementx-sp) * 1px))
            translateY(calc(var(--movementy-sp) * 1px));
        transition: all calc(var(--duration-sp) * 1s) calc(var(--delay-sp) * 1s) var(--ease);
    }
}

.u-anime-fade-sp {
    @property --movementx-sp {
        syntax: "<length>";
        initial-value: 0;
        inherits: true;
    }

    @property --movementy-sp {
        syntax: "<length>";
        initial-value: 0;
        inherits: true;
    }

    --delay: 0;
    --delay-sp: var(--delay);
    --duration: 0.5;
    --duration-sp: 0.5;
    --movementx-sp: 0;
    --movementy-sp: 30;
    --opacity: 0;
    --ease: linear;



    @include media-breakpoint-sp {
        opacity: var(--opacity);
        transform: translateX(calc(var(--movementx-sp) * 1px))
            translateY(calc(var(--movementy-sp) * 1px));
        transition: all calc(var(--duration-sp) * 1s) calc(var(--delay-sp) * 1s) var(--ease);

        &.is-active {
            opacity: 1;
            transform: translateX(0) translateY(0);
        }
    }
}

.u-anime-group {
    &.is-active {
        .u-anime-fade {
            &:not(.u-anime-fade-sp) {
                opacity: 1;
                transform: translateX(0) translateY(0);
            }
            &.u-anime-fade-sp {
                @include media-breakpoint-pc-tab {
                    opacity: 1;
                    transform: translateX(0) translateY(0);
                }
            }
        }
    }
}

  `}),`
`,a.jsx(e.h2,{id:"js",children:"Js"}),`
`,a.jsx(n,{language:"javascript",code:`

  `})]})}function h(t={}){const{wrapper:e}={...s(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(r,{...t})}):r(t)}export{h as default};
