import{j as e,M as l,C as c,S as s}from"./index-CBW6qsR0.js";import{useMDXComponents as n}from"./index-BhLcEmPp.js";import{S as i,b as r}from"./modal.stories-BFwlDoZ3.js";import"./iframe-DEAT1bJX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function a(o){const t={h1:"h1",h2:"h2",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i}),`
`,e.jsx(t.h1,{id:"モーダルコンポーネント",children:"モーダルコンポーネント"}),`
`,e.jsx(t.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(t.h2,{id:"css",children:"CSS"}),`
`,e.jsx(s,{language:"css",code:`
.c-modal {
  &.is-active {
    display: block;
  }
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000, $alpha: 20%);
  }

  &__content {
    position: fixed;
    top: 50%;
    left: 50%;
    display: block;
    padding: rem(40);
    background-color: white;
    transform: translate(-50%, -50%);
  }
}
  `}),`
`,e.jsx(t.h2,{id:"js",children:"Js"}),`
`,e.jsx(s,{language:"javascript",code:`
const modalTriggers = tag.querySelectorAll('.js-modal-trigger');
const modals = tag.querySelectorAll('.js-modal');

modalTriggers.forEach(function (modalTrigger) {
  modalTrigger.addEventListener('click', function (event) {
    const target = event.target;
    const dataModal = target.dataset.modal;
    const modal = document.querySelector('.js-modal[data-modal="' + dataModal + '"]');
    modal.classList.add('is-active');
    trapFocus(modal);
  });
});

modals.forEach(function (modal) {
  modal.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('js-modal-close')) {
      modal.closest('.js-modal').classList.remove('is-active');
      document.activeElement.blur();
    } else if (target.classList.contains('js-modal-overlay')) {
      target.parentNode.classList.remove('is-active');
      document.activeElement.blur();
    }
  });
});

//フォーカストラップ
function trapFocus(element) {
  const focusableEls = element.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
  );
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  const KEYCODE_TAB = 9;

  element.addEventListener('keydown', function (e) {
    const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  });

  firstFocusableEl.focus();
}
  `})]})}function h(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(a,{...o})}):a(o)}export{h as default};
