import{j as i,F as E,a as n}from"./jsx-runtime-03b4ddbf.js";import{r as F}from"./index-76fb7be0.js";import{s as p,A as a}from"./styled-components.browser.esm-1b4aad00.js";import"./_commonjsHelpers-de833af9.js";const o=p.p`
  font-size: 15px;
  font-weight: 500;
  text-align: left;

  ${({success:e})=>e&&a`
      color: #1eae63;
    `}

  ${({focus:e})=>e&&a`
      color: #1eae63;
    `}
`,u=p.p`
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  color: #ff6868;
`,c=p.textarea`
  display: block;
  box-sizing: border-box;
  width: 1082px;
  height: 118px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;

  ${({error:e})=>e&&a`
      background: rgba(255, 104, 104, 0.05);
      border: 1px solid rgba(255, 104, 104, 1);
      outline: 0;
    `}

  ${({success:e})=>e&&a`
      border: 1px solid #1eae63;
      outline: 0;
    `}

  ${({focus:e})=>e&&a`
      border: 1px solid #1eae63;
      outline: 0;
    `}

  ${({error:e,success:s})=>!e&&!s&&a`
      background: #f8f9fd;
    `}
`;try{o.displayName="Label",o.__docgenInfo={description:"",displayName:"Label",props:{success:{defaultValue:null,description:"",name:"success",required:!0,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},focus:{defaultValue:null,description:"",name:"focus",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{u.displayName="LabelError",u.__docgenInfo={description:"",displayName:"LabelError",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{c.displayName="Input",c.__docgenInfo={description:"",displayName:"Input",props:{success:{defaultValue:null,description:"",name:"success",required:!0,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLTextAreaElement | null) => void) | RefObject<HTMLTextAreaElement> | null"}},focus:{defaultValue:null,description:"",name:"focus",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const t=({textLabel:e,placeHolder:s,id:_,type:l,value:q,onChange:f=null,disable:V=!1,required:d=!1,className:w,style:A,labelStyle:m,...L})=>{const[y,g]=F.useState(!1),T=()=>{g(!0)},v=()=>{g(!1)};return i(E,{children:[l==="error"?i(u,{style:m,children:[e,d&&"*"]}):i(o,{success:l==="success",focus:y,style:m,children:[e,d&&"*",n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",className:"bi bi-info-circle-fill",viewBox:"0 0 16 16",style:{marginLeft:"11px"},children:n("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})]}),n(c,{error:l==="error",success:l==="success",id:_,placeholder:s,value:q,style:A,onChange:N=>{f&&f(N.target.value)},className:`textField ${w}`,onFocus:T,focus:y,onBlur:v,disabled:V,required:d,...L})]})};try{t.displayName="TextArea",t.__docgenInfo={description:"",displayName:"TextArea",props:{textLabel:{defaultValue:null,description:"",name:"textLabel",required:!0,type:{name:"string"}},placeHolder:{defaultValue:null,description:"",name:"placeHolder",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:'"success" | "error" | null'}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{}"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"{}"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disable:{defaultValue:{value:"false"},description:"",name:"disable",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"null"},description:"",name:"onChange",required:!1,type:{name:"(value: string) => void"}}}}}catch{}const C={title:"Components/TextArea",component:t},H=e=>n(t,{...e}),r=H.bind({});r.args={textLabel:"Text Filed Label",type:null};var b,h,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"(args: any) => <TextArea {...args} />",...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const k=["Normal"];export{r as Normal,k as __namedExportsOrder,C as default};
