import{f as m}from"./index-DSC6Fyi1.js";const d=({mode:o="",size:c="medium",active:l=!0,label:i,onClick:n})=>{const e=document.createElement("button");e.type="button",e.innerText=i,n&&e.addEventListener("click",n),l||(e.disabled=!0);const u=o?`--${o}`:"";return e.className=["c-button",`--${c}`,u].join(" "),e},b={title:"コンポーネント/ボタン",render:o=>d(o),argTypes:{label:{control:"text"},onClick:{action:"onClick"},mode:{control:"text"},size:{control:{type:"select"},options:["small","medium","large"]},active:{control:"boolean"}},args:{onClick:m()}},t={args:{mode:"",size:"medium",active:!0,label:"Button"}};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    mode: '',
    size: 'medium',
    active: true,
    label: 'Button'
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const p=["base"],g=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:p,base:t,default:b},Symbol.toStringTag,{value:"Module"}));export{g as S,t as b};
