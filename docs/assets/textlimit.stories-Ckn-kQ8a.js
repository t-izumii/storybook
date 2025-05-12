const i=({text:r="文字数制限用のテキスト",limit:o=1})=>{const t=document.createElement("p");return t.innerHTML=r,t.style.setProperty("--text-limit",`${o}`),t.setAttribute("data-text-limit",`${o}`),t.className=["u-textlimit"].join(" "),t},c={title:"Utility/Textlimit",render:r=>i(r),argTypes:{text:{control:"text"},limit:{control:"number"}}},e={args:{text:"文字数制限用のテキスト",limit:1}};var s,a,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: '文字数制限用のテキスト',
    limit: 1
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const l=["base"],m=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:l,base:e,default:c},Symbol.toStringTag,{value:"Module"}));export{m as S,e as b};
