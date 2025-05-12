const _=({})=>{const a=document.createElement("div");return a.innerHTML=`
    <div style="height: 100vh; background: #ccc;"></div>
    <div class="fixed-container">
        <!-- 表示されるコンテンツ -->
        <div class="fixed-container__display-content">
          <div class="fixed-container__content-item active" data-index="1">表示コンテンツ 1</div>
          <div class="fixed-container__content-item" data-index="2">表示コンテンツ 2</div>
          <div class="fixed-container__content-item" data-index="3">表示コンテンツ 3</div>
        </div>
      
        <!-- 判定用セクションを JS で生成 -->
        <div class="fixed-container__spacer"></div>
        <div class="fixed-container__watchers-container"></div>
        <div class="fixed-container__spacer"></div>
      
        <!-- 中央ライン -->
        <div class="center-line"></div>
    </div>
    <div style="height: 100vh; background: #ccc;"></div>
  `,document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".fixed-container__content-item"),l=document.querySelector(".fixed-container__watchers-container");r.forEach((t,c)=>{const i=t.dataset.index,e=document.createElement("div");e.className="fixed-container__watcher",e.dataset.index=i,l.appendChild(e)});const v=new IntersectionObserver(t=>{t.forEach(c=>{if(c.isIntersecting){const i=c.target.dataset.index;r.forEach(e=>{e.classList.toggle("active",e.dataset.index===i)})}})},{root:null,threshold:0,rootMargin:"-50% 0px"});document.querySelectorAll(".fixed-container__watcher").forEach(t=>v.observe(t))}),a},x={title:"javascript/fixedContent",render:a=>_(a),argTypes:{}},n={args:{}};var d,s,o;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(o=(s=n.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const f=["base"],h=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:f,base:n,default:x},Symbol.toStringTag,{value:"Module"}));export{h as S,n as b};
