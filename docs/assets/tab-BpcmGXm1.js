import{j as t,M as a,C as r,S as i}from"./index-u3GFYh61.js";import{useMDXComponents as n}from"./index-BvYweuI2.js";import{S as c,b as u}from"./tab.stories-BAMJ7bjh.js";import"./iframe-BWNJ7hDR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function o(e){const s={h1:"h1",h2:"h2",...n(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:c}),`
`,t.jsx(s.h1,{id:"タブコンポーネント",children:"タブコンポーネント"}),`
`,t.jsx(s.h2,{id:"使用例",children:"使用例"}),`
`,t.jsx(r,{of:u}),`
`,t.jsx(s.h2,{id:"js",children:"Js"}),`
`,t.jsx(i,{language:"javascript",code:`
const tabGroups = document.querySelectorAll('.js-tabs');
tabGroups.forEach((tabGroup) => {
  const tabButtons = tabGroup.querySelectorAll('.js-tab-button');
  const tabItems = tabGroup.querySelectorAll('.js-tab-item');

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {

      tabItems.forEach((item) => {
        item.setAttribute('hidden', '');
      });
      tabItems[index].removeAttribute('hidden');

      tabButtons.forEach((tabButton) => {
        tabButton.classList.remove('is-active');
        tabButton.setAttribute('aria-selected', 'false');
      });
      button.classList.add('is-active');
      button.setAttribute('aria-selected', 'true');
    });
  });
});
  `})]})}function x(e={}){const{wrapper:s}={...n(),...e.components};return s?t.jsx(s,{...e,children:t.jsx(o,{...e})}):o(e)}export{x as default};
