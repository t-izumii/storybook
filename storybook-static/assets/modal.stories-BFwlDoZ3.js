const v=({})=>{const a=document.createElement("div");a.innerHTML=`
  <button class="js-modal-trigger" data-modal="1">モーダルを開く</button>
  <div class="c-modal js-modal" data-modal="1" hidden role="dialog">
      <div class="c-modal__overlay js-modal-overlay"></div>
      <div class="c-modal__content">
          <div class="c-modal__body">
              <h2 class="c-modal__title">モーダルタイトル</h2>
              <p class="c-modal__text">ここにモーダルのコンテンツが入ります。</p>
              <button class="js-modal-close">閉じる</button>
          </div>
      </div>
  </div>
  `;const u=a.querySelectorAll(".js-modal-trigger"),m=a.querySelectorAll(".js-modal");u.forEach(function(t){t.addEventListener("click",function(s){const l=s.target.dataset.modal,n=document.querySelector('.js-modal[data-modal="'+l+'"]');n.classList.add("is-active"),b(n)})}),m.forEach(function(t){t.addEventListener("click",function(s){const e=s.target;e.classList.contains("js-modal-close")?(t.closest(".js-modal").classList.remove("is-active"),document.activeElement.blur()):e.classList.contains("js-modal-overlay")&&(e.parentNode.classList.remove("is-active"),document.activeElement.blur())})});function b(t){const s=t.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),e=s[0],l=s[s.length-1],n=9;t.addEventListener("keydown",function(o){(o.key==="Tab"||o.keyCode===n)&&(o.shiftKey?document.activeElement===e&&(l.focus(),o.preventDefault()):document.activeElement===l&&(e.focus(),o.preventDefault()))}),e.focus()}return a},f={title:"コンポーネント/モーダル",render:a=>v(a),argTypes:{}},c={args:{}};var d,r,i;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(i=(r=c.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const p=["base"],y=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:p,base:c,default:f},Symbol.toStringTag,{value:"Module"}));export{y as S,c as b};
