import{j as b,a as n}from"./jsx-runtime-03b4ddbf.js";import{r as q}from"./index-76fb7be0.js";import{s as l}from"./styled-components.browser.esm-1b4aad00.js";import"./_commonjsHelpers-de833af9.js";const i=l.span`
  display: flex;
  align-items: center;
`,t=l.input`
  height: 0;
  width: 0;
  visibility: hidden;
`,d=l.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 33px;
  height: 20px;
  margin-right: 8px;
  background: ${e=>e.checked?"#1EAE63":"#959595"};
  display: inline-block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 3px;
    bottom: 2px;
    width: 15px;
    height: 16px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  ${t}:checked + & {
    background: #1EAE63;
  }

  ${t}:checked + &:after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
`,s=l.span`
  font-family: 'Rubik', sans-serif;
  font-size: 12px;
  font-weight:400;
  line-height: 12px;
  letter-spacing: 0em;
  color: #000000;
  text-align: left;
  border: none;
  background-color: transparent;
  outline: none;
`;try{i.displayName="Wrapper",i.__docgenInfo={description:"",displayName:"Wrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{d.displayName="Label",d.__docgenInfo={description:"",displayName:"Label",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLabelElement | null) => void) | RefObject<HTMLLabelElement> | null"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{s.displayName="TextField",s.__docgenInfo={description:"",displayName:"TextField",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const r=({onToggle:e,textLabel:m,className:y,style:g,textStyle:h,required:w=!1,..._})=>{const[o,x]=q.useState(!1);return b(i,{children:[n(t,{type:"checkbox",id:"toggle",checked:o,onChange:p=>{x(p.target.checked),e&&e(p.target.checked)},className:y,required:!0,"data-testid":"toggle-switch-input",..._}),n(d,{style:g,htmlFor:"toggle",checked:o}),n(s,{style:h,children:m})]})};try{r.displayName="ToggleSwitch",r.__docgenInfo={description:"",displayName:"ToggleSwitch",props:{onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((checked: boolean) => void)"}},textLabel:{defaultValue:null,description:"",name:"textLabel",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},textStyle:{defaultValue:null,description:"",name:"textStyle",required:!1,type:{name:"CSSProperties"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Components/ToggleSwitch",component:r},V=e=>n(r,{...e}),a=V.bind({});a.args={textLabel:"Toggle Switch"};var u,c,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"(args: any) => <ToggleSwitch {...args} />",...(f=(c=a.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const A=["Normal"];export{a as Normal,A as __namedExportsOrder,N as default};
