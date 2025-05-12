const t=({})=>{const r=document.createElement("div");return r.innerHTML=`
    <nav class="c-breadcrumb" aria-label="パンくずリスト">
      <ol class="c-breadcrumb__list">
        <li class="c-breadcrumb__item">
          <a href="/" class="c-breadcrumb__link">ホーム</a>
        </li>
        <li class="c-breadcrumb__item">
          <a href="/category" class="c-breadcrumb__link">カテゴリー</a>
        </li>
        <li class="c-breadcrumb__item">
          <span class="c-breadcrumb__text">現在のページ</span>
        </li>
      </ol>
    </nav>
  `,r},l={title:"コンポーネント/パンくずリスト",render:r=>t(r),argTypes:{}},e={args:{}};var a,s,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {}
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const n=["base"],o=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:n,base:e,default:l},Symbol.toStringTag,{value:"Module"}));export{o as S,e as b};
