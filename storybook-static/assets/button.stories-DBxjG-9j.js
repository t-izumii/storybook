import{f as l}from"./index-DSC6Fyi1.js";const u=({size:r="medium",active:c=!0,label:i,onClick:o})=>{const e=document.createElement("button");return e.type="button",e.innerText=i,o&&e.addEventListener("click",o),c||(e.disabled=!0),e.className=["c-button",`--${r}`].join(" "),e},m={title:"コンポーネント/ボタン",render:r=>u(r),argTypes:{label:{control:"text"},onClick:{action:"onClick"},size:{control:{type:"select"},options:["small","medium","large"]},active:{control:"boolean"}},args:{onClick:l()}},t={args:{size:"medium",active:!0,label:"Button"}};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    active: true,
    label: 'Button'
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const d=["base"],p=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:d,base:t,default:m},Symbol.toStringTag,{value:"Module"}));export{p as S,t as b};
