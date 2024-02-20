import{j as d,a as u}from"./jsx-runtime-03b4ddbf.js";import{r as V}from"./index-76fb7be0.js";import{s}from"./styled-components.browser.esm-1b4aad00.js";import"./_commonjsHelpers-de833af9.js";const n=s.input`
  height: 15px;
  width: 15px;
  margin-right: 12px;
  accent-color: #1EAA63;
`,r=s.span`
  display: flex;
  justify-content: center;
  align-items: center;
`,l=s.span`
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  font-weight:400;
  line-height: 12px;
  letter-spacing: 0em;
  color: #000000;
  text-align: left;
  border: none;
  background-color: transparent;
  outline: none;
`;try{n.displayName="Switch",n.__docgenInfo={description:"",displayName:"Switch",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.displayName="SwitchSpan",r.__docgenInfo={description:"",displayName:"SwitchSpan",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{l.displayName="TextField",l.__docgenInfo={description:"",displayName:"TextField",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const t=({onClick:e,textLabel:m,style:f,textStyle:y,required:h=!1,className:_,...x})=>{const[g,S]=V.useState(!1),q=i=>{S(i.target.checked),e&&e(i.target.checked)};return d(r,{children:[u(n,{type:"checkbox",checked:g,className:`textField ${_}`,onChange:q,style:f,...x}),d(l,{style:y,children:[m,h&&"*"]})]})};try{t.displayName="CheckBox",t.__docgenInfo={description:"",displayName:"CheckBox",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((checked: boolean) => void)"}},textLabel:{defaultValue:null,description:"",name:"textLabel",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},textStyle:{defaultValue:null,description:"",name:"textStyle",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}}}}}catch{}const T={title:"Components/CheckBox",component:t},k=e=>u(t,{...e}),a=k.bind({});a.args={textLabel:"CheckBox"};var o,c,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"(args: any) => <CheckBox {...args} />",...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const E=["Normal"];export{a as Normal,E as __namedExportsOrder,T as default};
