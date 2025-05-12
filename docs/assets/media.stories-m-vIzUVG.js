const _=({title:n="Title",text:s="Text",button:i="Button",reverse:p=!1})=>{const o=document.createElement("div"),l=document.createElement("div"),e=document.createElement("div"),a=document.createElement("h1"),c=document.createElement("p"),r=document.createElement("button");return a.textContent=n,c.textContent=s,r.textContent=i,o.appendChild(l),o.appendChild(e),n&&e.appendChild(a),s&&e.appendChild(c),i&&e.appendChild(r),o.className=["c-media",p?"--reverse":""].join(" "),l.className=["c-media__image"].join(""),e.className=["c-media__content"].join(""),a.className=["c-media__title"].join(""),c.className=["c-media__text"].join(""),r.className=["c-media__button"].join(""),o},x={title:"レイアウト/Media",render:n=>_(n),argTypes:{title:{control:"text"},text:{control:"text"},button:{control:"text"},reverse:{control:"boolean"}}},t={args:{title:"Title",text:"Text",button:"Button",reverse:!1}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    text: 'Text',
    button: 'Button',
    reverse: false
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const b=["base"],g=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:b,base:t,default:x},Symbol.toStringTag,{value:"Module"}));export{g as S,t as b};
