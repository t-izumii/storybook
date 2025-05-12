const u=({active:r=!0,movementx:s=0,movementy:c=0,duration:m=.5,delay:l=0,opacity:i=0,ease:y="linear"})=>{const e=document.createElement("div");return e.innerHTML=`
  テスト
  `,e.className="box u-anime-fade",r&&setTimeout(()=>{e.classList.add("is-active")},100),e.style.setProperty("--duration",`${m}`),e.style.setProperty("--delay",`${l}`),e.style.setProperty("--movementx",`${s}`),e.style.setProperty("--movementy",`${c}`),e.style.setProperty("--opacity",`${i}`),e.style.setProperty("--ease",`${y}`),e},d={title:"Animation/fade",render:r=>u(r),argTypes:{active:{control:"boolean"},movementx:{control:"number"},movementy:{control:"number"},duration:{control:"number"},delay:{control:"number"},opacity:{control:"number"},ease:{control:"text"}}},t={args:{active:!0,movementx:0,movementy:0,duration:.5,delay:0,opacity:0,ease:"linear"}};var o,n,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    active: true,
    movementx: 0,
    movementy: 0,
    duration: 0.5,
    delay: 0,
    opacity: 0,
    ease: 'linear'
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const p=["base"],v=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:p,base:t,default:d},Symbol.toStringTag,{value:"Module"}));export{v as S,t as b};
