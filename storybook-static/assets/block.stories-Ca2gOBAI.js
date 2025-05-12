import{c as F}from"./input-text-Dgly9OeA.js";import{c as M}from"./select-CedAVv5M.js";import{c as R}from"./checkbox-DX628-SY.js";import{c as q}from"./radio-EYLaQdqC.js";import{c as w}from"./textarea-CfqfEZGG.js";const A=({label:u="label",field:t="input",subText:z="subtext",errorText:O="errorText",active:a=!0,errorState:i=!1,flex:P=!1})=>{const d=document.createElement("div"),b=document.createElement("label"),o=document.createElement("div"),m=document.createElement("p"),r=document.createElement("div"),f=document.createElement("p");if(d.appendChild(b),d.appendChild(o),o.appendChild(m),o.appendChild(r),o.appendChild(f),b.innerText=u,m.innerText=z,i&&(f.innerText=O),t==="input"){const e=F({size:"medium",active:a,errorState:i,label:"",placeholder:"入力してください"});r.appendChild(e)}else if(t==="select"){const e=M({size:"medium",active:a,errorState:i});r.appendChild(e)}else if(t==="checkbox")for(let e=0;e<3;e++){const p=R({active:a,label:"Checkbox"});r.appendChild(p)}else if(t==="radio")for(let e=0;e<3;e++){const p=q({active:a,label:"Radio"});r.appendChild(p)}else if(t==="textarea"){const e=w({active:a,errorState:i,label:"",placeholder:"Placeholder"});r.appendChild(e)}return d.className=["c-form",P?"--flex":""].filter(Boolean).join(" "),b.className=["c-form__label"].join(" "),o.className=["c-form__content"].join(" "),m.className=["c-form__subtext"].join(" "),r.className=["c-form__field"].join(" "),f.className=["c-form__errortext"].join(" "),d},D={title:"Form/Block",render:u=>A(u),argTypes:{label:{control:"text"},subText:{control:"text"},field:{control:{type:"select"},options:["input","select","checkbox","radio","textarea"]},errorText:{control:"text"},active:{control:"boolean"},errorState:{control:"boolean"}}},l={args:{label:"Label",subText:"Subtext",field:"input",errorText:"Error text",active:!0,errorState:!1,flex:!1}},s={args:{label:"Label",subText:"Subtext",field:"select",errorText:"Error text",active:!0,errorState:!1,flex:!1}},n={args:{label:"Label",subText:"Subtext",field:"checkbox",errorText:"Error text",active:!0,errorState:!1,flex:!1}},c={args:{label:"Label",subText:"Subtext",field:"radio",errorText:"Error text",active:!0,errorState:!1,flex:!1}},x={args:{label:"Label",subText:"Subtext",field:"textarea",errorText:"Error text",active:!0,errorState:!1,flex:!1}};var T,S,E;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    subText: 'Subtext',
    field: 'input',
    errorText: 'Error text',
    active: true,
    errorState: false,
    flex: false
  }
}`,...(E=(S=l.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var h,g,_;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    subText: 'Subtext',
    field: 'select',
    errorText: 'Error text',
    active: true,
    errorState: false,
    flex: false
  }
}`,...(_=(g=s.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var v,C,L;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    subText: 'Subtext',
    field: 'checkbox',
    errorText: 'Error text',
    active: true,
    errorState: false,
    flex: false
  }
}`,...(L=(C=n.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var k,j,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    subText: 'Subtext',
    field: 'radio',
    errorText: 'Error text',
    active: true,
    errorState: false,
    flex: false
  }
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var N,$,y;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    subText: 'Subtext',
    field: 'textarea',
    errorText: 'Error text',
    active: true,
    errorState: false,
    flex: false
  }
}`,...(y=($=x.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};const G=["base","select","checkbox","radio","textarea"],U=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:G,base:l,checkbox:n,default:D,radio:c,select:s,textarea:x},Symbol.toStringTag,{value:"Module"}));export{U as S,l as b,n as c,c as r,s,x as t};
