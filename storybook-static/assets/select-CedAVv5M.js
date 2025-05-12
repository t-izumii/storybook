const l=({size:n="medium",active:c=!1,errorState:i=!1})=>{const e=document.createElement("div"),o=document.createElement("select"),t=document.createElement("i");return e.appendChild(o),e.appendChild(t),o.innerHTML=`
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  `,c||(o.disabled=!0),e.className=["c-selectbox",`--${n}`].join(" "),o.className=["c-selectbox__field",i?"is-error":""].filter(Boolean).join(" "),t.className=["c-selectbox__icon c-icon"].join(" "),e};export{l as c};
