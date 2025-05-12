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
    `;const n=t.querySelectorAll(".js-accordion");return n.forEach(c=>{c.addEventListener("click",()=>{const e=c.nextElementSibling;c.classList.toggle("is-active"),e.style.height==="0px"||e.style.height===""?e.style.height=e.scrollHeight+"px":e.style.height="0px"})}),window.addEventListener("resize",()=>{n.forEach(c=>{const e=c.nextElementSibling;e.style.height!=="0px"&&(e.style.height=e.scrollHeight+"px")})}),t},l={title:"Component/Accordion",render:t=>a(t),argTypes:{}},o={args:{}};var s,r,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const d=["base"],g=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:d,base:o,default:l},Symbol.toStringTag,{value:"Module"}));export{g as S,o as b};
