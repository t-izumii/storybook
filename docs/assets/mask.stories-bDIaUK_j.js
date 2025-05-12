const i=({active:r=!0,duration:n=1,delay:c=0,ease:l="linear"})=>{const e=document.createElement("div");return e.innerHTML=`
  mask用のテキストです
  `,e.className="u-anime-mask",r&&setTimeout(()=>{e.classList.add("is-active")},100),e.style.setProperty("--duration",`${n}`),e.style.setProperty("--delay",`${c}`),e.style.setProperty("--ease",`${l}`),e},d={title:"アニメーション/マスク",render:r=>i(r),argTypes:{active:{control:"boolean"},duration:{control:"number"},delay:{control:"number"},ease:{control:"text"}}},t={args:{active:!0,duration:1,delay:0,ease:"linear"}};var a,s,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    active: true,
    duration: 1,
    delay: 0,
    ease: 'linear'
  }
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const u=["base"],m=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:u,base:t,default:d},Symbol.toStringTag,{value:"Module"}));export{m as S,t as b};
