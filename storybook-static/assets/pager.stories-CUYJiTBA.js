const l=({})=>{const a=document.createElement("div");return a.innerHTML=`
<ul class="c-pager">
    <li class="c-pager__item --prev">
        <a href="" class="c-pager__button --prev">
            <span class="c-icon-circle">
                <i class="c-icon"></i>
            </span>
            前のページ
        </a>
    </li>
    <li class="c-pager__item">
        <a href="" class="c-pager__link">1</a>
    </li>
    <li class="c-pager__item">
        <span class="c-pager__link --is-active">2</span>
    </li>
    <li class="c-pager__item">
        <a href="" class="c-pager__link">3</a>
    </li>
    <li class="c-pager__item">
        <a href="" class="c-pager__link">4</a>
    </li>
    <li class="c-pager__item">
        <a href="" class="c-pager__link">5</a>
    </li>
    <li class="c-pager__item --next">
        <a href="" class="c-pager__button --next">
            <span class="c-icon-circle">
                <i class="c-icon"></i>
            </span>
            次のページ
        </a>
    </li>
</ul>
`,a},i={title:"コンポーネント/ページャー",render:a=>l(a),argTypes:{}},e={args:{}};var s,c,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(r=(c=e.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};const t=["base"],n=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:t,base:e,default:i},Symbol.toStringTag,{value:"Module"}));export{n as S,e as b};
