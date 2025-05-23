import{j as a,M as s,C as i,S as o}from"./index-CBW6qsR0.js";import{useMDXComponents as r}from"./index-BhLcEmPp.js";import{S as m,b as l}from"./fade.stories-BxhjhPVB.js";import"./iframe-DEAT1bJX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function n(e){const t={h1:"h1",h2:"h2",...r(),...e.components};return a.jsxs(a.Fragment,{children:[a.jsx(s,{of:m}),`
`,a.jsx(t.h1,{id:"アニメーションフェード",children:"アニメーションフェード"}),`
`,a.jsx(t.h2,{id:"使用例",children:"使用例"}),`
`,a.jsx(i,{of:l}),`
`,a.jsx(t.h2,{id:"css",children:"CSS"}),`
`,a.jsx(o,{language:"css",code:`
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
    --ease1: linear;
    --ease2: var(--ease1);

    opacity: var(--opacity);
    transform: translateX(calc(var(--movementx) * 1px))
        translateY(calc(var(--movementy) * 1px));
    transition: transform calc(var(--duration) * 1s) calc(var(--delay) * 1s) var(--ease1),
        opacity calc(var(--duration) * 1s) calc(var(--delay) * 1s) var(--ease2);
    &.is-active {
        opacity: 1;
        transform: translateX(0) translateY(0);
    }

    @include media-breakpoint-sp {
        transform: translateX(calc(var(--movementx-sp) * 1px))
            translateY(calc(var(--movementy-sp) * 1px));
        transition: transform calc(var(--duration-sp) * 1s) calc(var(--delay-sp) * 1s) var(--ease1),
            opacity calc(var(--duration-sp) * 1s) calc(var(--delay-sp) * 1s) var(--ease2);
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
        transition: transform calc(var(--duration-sp) * 1s) calc(var(--delay-sp) * 1s) var(--ease1),
            opacity calc(var(--duration-sp) * 1s) calc(var(--delay-sp) * 1s) var(--ease2);

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


  `})]})}function h(e={}){const{wrapper:t}={...r(),...e.components};return t?a.jsx(t,{...e,children:a.jsx(n,{...e})}):n(e)}export{h as default};
