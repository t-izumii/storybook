const d=({active:r=!0,movementx:c=0,movementy:m=0,duration:y=.5,delay:i=0,opacity:u=0,ease1:o="linear",ease2:n="linear"})=>{const e=document.createElement("div");return e.innerHTML=`
  テスト
  `,e.className="box u-anime-fade",r&&setTimeout(()=>{e.classList.add("is-active")},100),e.style.setProperty("--duration",`${y}`),e.style.setProperty("--delay",`${i}`),e.style.setProperty("--movementx",`${c}`),e.style.setProperty("--movementy",`${m}`),e.style.setProperty("--opacity",`${u}`),e.style.setProperty("--ease1",`${o}`),n?e.style.setProperty("--ease2",`${n}`):e.style.setProperty("--ease2",`${o}`),e},p={title:"アニメーション/フェード",render:r=>d(r),argTypes:{active:{control:"boolean"},movementx:{control:"number"},movementy:{control:"number"},duration:{control:"number"},delay:{control:"number"},opacity:{control:"number"},ease1:{control:"text"},ease2:{control:"text"}}},t={args:{active:!0,movementx:0,movementy:0,duration:.5,delay:0,opacity:0,ease1:"linear",ease2:""}};var a,s,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    active: true,
    movementx: 0,
    movementy: 0,
    duration: 0.5,
    delay: 0,
    opacity: 0,
    ease1: 'linear',
    ease2: ''
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const v=["base"],b=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:v,base:t,default:p},Symbol.toStringTag,{value:"Module"}));export{b as S,t as b};
