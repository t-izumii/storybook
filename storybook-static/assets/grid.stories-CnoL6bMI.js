const y=({content:r=2,column:p=2,columnTab:m=1,columnSp:u=1,gap:b=40,gapTab:g=20,gapSp:d=20})=>{const e=document.createElement("div"),a=document.createElement("div");a.className="l-grid__col";for(let o=0;o<r;o++)e.appendChild(a.cloneNode());e.className=["l-grid"].join("");function n(o){return o/16+"rem"}return e.style.setProperty("--column",`${p}`),e.style.setProperty("--column-Tab",`${m}`),e.style.setProperty("--column-sp",`${u}`),e.style.setProperty("--gap",n(b)),e.style.setProperty("--gap-tab",n(g)),e.style.setProperty("--gap-sp",n(d)),e},i={title:"Layout/Grid",render:r=>y(r),argTypes:{content:{control:"number"},column:{control:"number"},columnTab:{control:"number"},columnSp:{control:"number"},gap:{control:"number"},gapTab:{control:"number"},gapSp:{control:"number"}}},t={args:{content:2,column:2,columnTab:1,columnSp:1,gap:24,gapTab:16,gapSp:16}};var c,l,s;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    content: 2,
    column: 2,
    columnTab: 1,
    columnSp: 1,
    gap: 24,
    gapTab: 16,
    gapSp: 16
  }
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const S=["base"],T=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:S,base:t,default:i},Symbol.toStringTag,{value:"Module"}));export{T as S,t as b};
