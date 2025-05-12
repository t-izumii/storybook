import{j as e,M as r,C as s,S as a}from"./index-u3GFYh61.js";import{useMDXComponents as o}from"./index-BvYweuI2.js";import{S as l,b as c}from"./breadcrumb.stories-WTTpIGlc.js";import"./iframe-BWNJ7hDR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function i(n){const t={h1:"h1",h2:"h2",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(t.h1,{id:"パンくずリスト",children:"パンくずリスト"}),`
`,e.jsx(t.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h2,{id:"css",children:"CSS"}),`
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

  `})]})}function u(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{u as default};
