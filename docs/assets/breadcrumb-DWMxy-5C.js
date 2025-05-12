import{j as e,M as r,C as s,S as a}from"./index-BmCl2F4U.js";import{useMDXComponents as o}from"./index-BImEGYBr.js";import{S as l,b as c}from"./breadcrumb.stories-DBhPrwgl.js";import"./iframe-B3J-iSwu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function i(t){const n={h1:"h1",h2:"h2",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"アコーディオンコンポーネント",children:"アコーディオンコンポーネント"}),`
`,e.jsx(n.p,{children:"アコーディオンコンポーネントは、コンテンツを折りたたんで表示するUI要素です。"}),`
`,e.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h2,{id:"css",children:"CSS"}),`
`,e.jsx(a,{language:"css",code:`
.breadcrumb {
    @media screen and (max-width: 767px) {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        padding: 0.5em 0;
    
    }

    &__list {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        list-style: none;
        margin: 0;
        padding: 0;
        
        @media screen and (max-width: 767px) {
            min-width: min-content;
        }
    }

    &__item {
        display: flex;
        align-items: center;
        min-width: 0;
        
        &:not(:last-child) {
            flex-shrink: 0;
            
            &::after {
                content: ">";
                margin: 0 0.5em;
                color: #666;
                flex-shrink: 0;
            }
        }

        &:last-child {
            flex-shrink: 1;
        }
    }

    &__link {
        color: #0066cc;
        text-decoration: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0;

        &:hover {
            text-decoration: underline;
        }
    }

    &__text {
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0;
    }
}

  `})]})}function u(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
