import{j as t,M as s,C as a,S as o}from"./index-CBW6qsR0.js";import{useMDXComponents as i}from"./index-BhLcEmPp.js";import{S as c,b as l}from"./accordion.stories-CyawFvtY.js";import"./iframe-DEAT1bJX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function r(e){const n={h1:"h1",h2:"h2",p:"p",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
`,t.jsx(n.h1,{id:"アコーディオンコンポーネント",children:"アコーディオンコンポーネント"}),`
`,t.jsx(n.p,{children:"アコーディオンコンポーネントは、コンテンツを折りたたんで表示するUI要素です。"}),`
`,t.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,t.jsx(a,{of:l}),`
`,t.jsx(n.h2,{id:"css",children:"CSS"}),`
`,t.jsx(o,{language:"css",code:`
.c-accordion {
  & + & {
    margin-top: rem(24);
  }

  &__head {
    position: relative;
    display: flex;
    width: 100%;
    padding: rem(16);
    cursor: pointer;
    transition: 0.3s all;

    @include media-breakpoint-sp {
      padding: rem(16) rem(56) rem(16) rem(20);
      font-size: rem(20);
    }

    &.is-active {
      .c-accordion {
        &__icon {
          &::after {
            transform: translate(-50%, -50%) rotate(0);
          }
        }
      }
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: rem(20);
    width: rem(20);
    height: rem(20);
    transform: translateY(-50%);

    &::after,
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      width: rem(14);
      height: rem(2);
      content: '';
      background-color: #000;
      transition: 0.3s all;
      transform: translate(-50%, -50%);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }

  &__content {
    transition: height 0.3s;
  }

  &__content-inner {
    padding: rem(16) rem(16);
  }
}
  `}),`
`,t.jsx(n.h2,{id:"js",children:"Js"}),`
`,t.jsx(o,{language:"javascript",code:`
const accordionButtons = document.querySelectorAll('.js-accordion');
accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    button.classList.toggle('active');
    if (content.style.height === '0px' || content.style.height === '') {
      content.style.height = content.scrollHeight + 'px';
    } else {
      content.style.height = '0px';
    }
  });
});

window.addEventListener('resize', () => {
  accordionButtons.forEach((button) => {
    const content = button.nextElementSibling;
    if (content.style.height !== '0px') {
      content.style.height = content.scrollHeight + 'px';
    }
  });
});
  `})]})}function f(e={}){const{wrapper:n}={...i(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(r,{...e})}):r(e)}export{f as default};
