const a=({})=>{const t=document.createElement("div");t.innerHTML=`
  <div class="c-accordion">
    <button class="c-accordion__head js-accordion">
        タイトル
        <i class="c-accordion__icon"></i>
    </button>
    <div class="c-accordion__content" style="height: 0; overflow: hidden;">
        <div class="c-accordion__content-inner">
            <p>
              テキスト
            </p>
        </div>
    </div>
  </div>
    `;const s=t.querySelectorAll(".js-accordion");return s.forEach(c=>{c.addEventListener("click",()=>{const e=c.nextElementSibling;c.classList.toggle("is-active"),e.style.height==="0px"||e.style.height===""?e.style.height=e.scrollHeight+"px":e.style.height="0px"})}),window.addEventListener("resize",()=>{s.forEach(c=>{const e=c.nextElementSibling;e.style.height!=="0px"&&(e.style.height=e.scrollHeight+"px")})}),t},l={title:"コンポーネント/アコーディオン",render:t=>a(t),argTypes:{}},o={args:{}};var n,r,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const d=["base"],g=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:d,base:o,default:l},Symbol.toStringTag,{value:"Module"}));export{g as S,o as b};
