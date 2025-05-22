const c=({length:t,childLength:r})=>{const l=document.createElement("div");return l.innerHTML=`
<ul class="c-list-ul">
    <li class="c-list-ul__item">テキスト${r>0?`<ul class="c-list-ul">${Array.from({length:r},()=>'<li class="c-list-ul__item">テキスト</li>').join("")}</ul>`:""}</li>
    ${Array.from({length:t-1},()=>'<li class="c-list-ul__item">テキスト</li>').join("")}
</ul>
`,l},o={title:"コンポーネント/リスト-UL",render:t=>c(t),argTypes:{length:{control:"number"},childLength:{control:"number"}}},e={args:{length:10,childLength:0}};var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    length: 10,
    childLength: 0
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const i=["base"],u=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:i,base:e,default:o},Symbol.toStringTag,{value:"Module"}));export{u as S,e as b};
