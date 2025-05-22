import{j as e,M as r,C as a,S as t}from"./index-BYK2ORcy.js";import{useMDXComponents as i}from"./index-BLysIC8v.js";import{S as l,b as c}from"./slideshow.stories-kiFNwfR_.js";import"./iframe-EDjIsdKu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function o(n){const s={h1:"h1",h2:"h2",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(s.h1,{id:"リストolコンポーネント",children:"リストOLコンポーネント"}),`
`,e.jsx(s.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(s.h2,{id:"css",children:"CSS"}),`
`,e.jsx(t,{language:"css",code:`
.c-slideshow {
  width: 100%;

  &__swiper {
    .swiper-wrapper {
      transition-timing-function: linear;
    }

    .swiper-slide {
      width: auto;
    }
  }
}

  `}),`
`,e.jsx(s.h2,{id:"js",children:"JS"}),`
`,e.jsx(t,{language:"js",code:`
  const slideshowElements = tag.querySelectorAll('.js-slideshow-swiper');
  slideshowElements.forEach((element) => {
    new Swiper(element, {
      modules: [Autoplay],
      loop: true,
      speed: 8000,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 10,
      
      autoplay: {
          delay: 0,
          disableOnInteraction: false,
      },
      breakpoints: {
          768: {
              spaceBetween: 20,
          },
      },
    });
  });
`})]})}function x(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{x as default};
