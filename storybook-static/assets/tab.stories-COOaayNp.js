const d=({})=>{const t=document.createElement("div");return t.innerHTML=`
    <div class="c-tab js-tabs">
      <nav class="c-tab__buttons js-tab-buttons" role="tablist">
        <button class="c-tab__button js-tab-button is-active" role="tab" aria-selected="true">リスト1</button>
        <button class="c-tab__button js-tab-button" role="tab" aria-selected="false">リスト2</button>
        <button class="c-tab__button js-tab-button" role="tab" aria-selected="false">リスト3</button>
      </nav>
      <div class="c-tab__content js-tab-content">
        <div class="c-tab__item js-tab-item" role="tabpanel">コンテンツ1</div>
        <div class="c-tab__item js-tab-item" role="tabpanel" hidden>コンテンツ2</div>
        <div class="c-tab__item js-tab-item" role="tabpanel" hidden>コンテンツ3</div>
      </div>
    </div>
  `,t.querySelectorAll(".js-tabs").forEach(r=>{const o=r.querySelectorAll(".js-tab-button"),c=r.querySelectorAll(".js-tab-item");o.forEach((s,l)=>{s.addEventListener("click",()=>{c.forEach(a=>{a.setAttribute("hidden","")}),c[l].removeAttribute("hidden"),o.forEach(a=>{a.classList.remove("is-active"),a.setAttribute("aria-selected","false")}),s.classList.add("is-active"),s.setAttribute("aria-selected","true")})})}),t},u={title:"Component/Tab",render:t=>d(t),argTypes:{}},e={args:{}};var b,n,i;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {}
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const _=["base"],v=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:_,base:e,default:u},Symbol.toStringTag,{value:"Module"}));export{v as S,e as b};
