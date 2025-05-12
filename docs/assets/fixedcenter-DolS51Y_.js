import{j as e,M as c,C as s,S as i}from"./index-u3GFYh61.js";import{useMDXComponents as r}from"./index-BvYweuI2.js";import{S as a,b as d}from"./fixedcenter.stories-E47JW29h.js";import"./iframe-BWNJ7hDR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function o(n){const t={h1:"h1",h2:"h2",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a}),`
`,e.jsx(t.h1,{id:"交点監視",children:"交点監視"}),`
`,e.jsx(t.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(t.h2,{id:"css",children:"CSS"}),`
`,e.jsx(i,{language:"css",code:`
.fixed-container {
  position: relative;
}

.fixed-container__display-content {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
}

.fixed-container__content-item {
  display: none;
  height: 100vh;
}

.fixed-container__content-item.active {
  display: block;
}

.fixed-container__watcher {
  height: 100vh;
}

.fixed-container__spacer {
  height: 50vh;
}

.fixed-container__spacer:first-child {
  margin-top: -100vh;
}

.center-line {
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: red;
  z-index: 10;
  opacity: 0.5;
}

  `}),`
`,e.jsx(t.h2,{id:"js",children:"Js"}),`
`,e.jsx(i,{language:"javascript",code:`
document.addEventListener("DOMContentLoaded", () => {
    const contentItems = document.querySelectorAll(".fixed-container__content-item");
    const watchersContainer = document.querySelector(".fixed-container__watchers-container");

    // 判定セクションを生成
    contentItems.forEach((item, i) => {
      const index = item.dataset.index;
      const div = document.createElement("div");
      div.className = "fixed-container__watcher";
      div.dataset.index = index;
      watchersContainer.appendChild(div);
    });

    // IntersectionObserverで交差判定
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // セクションが画面に交差しているとき
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            contentItems.forEach(item => {
              // 該当するセクションを表示
              item.classList.toggle("active", item.dataset.index === index);
            });
          }
        });
      },
      {
        root: null,
        threshold: 0,
        // rootMarginを調整して、交差するタイミングを遅延
        rootMargin: "-50% 0px"  // これにより、最初のセクションがすぐには表示されないようにする
      }
    );

    // 生成されたwatcherに監視設定
    const watchers = document.querySelectorAll(".fixed-container__watcher");
    watchers.forEach(el => observer.observe(el));
});
  `})]})}function u(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{u as default};
