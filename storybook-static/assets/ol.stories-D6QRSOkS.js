const a=({length:t,childLength:r})=>{const l=document.createElement("div");return l.innerHTML=`
<ol class="c-list-ol">
    <li class="c-list-ol__item">テキスト${r>0?`<ol class="c-list-ol">${Array.from({length:r},()=>'<li class="c-list-ol__item">テキスト</li>').join("")}</ol>`:""}</li>
    ${Array.from({length:t-1},()=>'<li class="c-list-ol__item">テキスト</li>').join("")}
</ol>
`,l},c={title:"コンポーネント/リスト-OL",render:t=>a(t),argTypes:{length:{control:"number"},childLength:{control:"number"}}},e={args:{length:10,childLength:0}};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    length: 10,
    childLength: 0
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const i=["base"],m=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:i,base:e,default:c},Symbol.toStringTag,{value:"Module"}));export{m as S,e as b};
