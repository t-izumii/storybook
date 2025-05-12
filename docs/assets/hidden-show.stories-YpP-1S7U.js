const m=({active:t=!0,duration:o=.25,delay:c=.05,ease:i="linear"})=>{const e=document.createElement("div");e.innerHTML=`
  hidden-show用のテキストです
  `,e.className="u-anime-hidden-show";const d=e.innerText.split("");return e.innerHTML=d.map((l,u)=>`<span class="u-anime-hidden-show__char" style="--delay: calc(${c} * ${u}); --duration: ${o}; --ease: ${i};"><span>${l}</span></span>`).join(""),t&&setTimeout(()=>{e.classList.add("is-active")},100),e},p={title:"アニメーション/テキストの表示",render:t=>m(t),argTypes:{active:{control:"boolean"},duration:{control:"number"},delay:{control:"number"},ease:{control:"text"}}},a={args:{active:!0,duration:.25,delay:.05,ease:"linear"}};var n,r,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    active: true,
    duration: 0.25,
    delay: 0.05,
    ease: 'linear'
  }
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["base"],y=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:b,base:a,default:p},Symbol.toStringTag,{value:"Module"}));export{y as S,a as b};
