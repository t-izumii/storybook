import{j as a,M as i,C as o,S as e}from"./index-BYK2ORcy.js";import{useMDXComponents as t}from"./index-BLysIC8v.js";import{S as c,b as d}from"./hidden-show.stories-YpP-1S7U.js";import"./iframe-EDjIsdKu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function r(s){const n={h1:"h1",h2:"h2",...t(),...s.components};return a.jsxs(a.Fragment,{children:[a.jsx(i,{of:c}),`
`,a.jsx(n.h1,{id:"アニメーション表示",children:"アニメーション表示"}),`
`,a.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,a.jsx(o,{of:d}),`
`,a.jsx(n.h2,{id:"css",children:"CSS"}),`
`,a.jsx(e,{language:"css",code:`
.u-anime-hidden-show {
    &__char {
        --delay: 0.05;
        --delay-sp: var(--delay);
        --duration: 0.25;
        --duration-sp: var(--duration);
        --ease: linear;

        display: inline-block;
        overflow: hidden;

        & > span {
            display: inline-block;
            transform: translateY(100%);
            transition: transform calc(var(--duration) * 1s) calc(var(--delay) * 1s) var(--ease);

            @include media-breakpoint-sp {
                transition: transform calc(var(--duration-sp) * 1s) calc(var(--delay-sp) * 1s) var(--ease);
            }
        }
    }

    &.is-active {
        .u-anime-hidden-show__char > span {
            transform: translateY(0);
        }
    }
}

.u-anime-group {
    &.is-active {
        .u-anime-hidden-show__char > span {
            transform: translateY(0);
        }
    }
}
  `}),`
`,a.jsx(n.h2,{id:"js",children:"Js"}),`
`,a.jsx(e,{language:"javascript",code:`
const tag = document.querySelector('.u-anime-hidden-show');
const text = tag.innerText;
const chars = text.split('');
tag.innerHTML = chars.map((char, index) => \`<span class="u-anime-hidden-show__char" style="--delay: calc(\${delay} * \${index}); --duration: \${duration}; --ease: \${ease};"><span>\${char}</span></span>\`).join('');
  `})]})}function f(s={}){const{wrapper:n}={...t(),...s.components};return n?a.jsx(n,{...s,children:a.jsx(r,{...s})}):r(s)}export{f as default};
