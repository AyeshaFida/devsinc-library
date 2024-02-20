import{j as d,F as E,a as h}from"./jsx-runtime-03b4ddbf.js";import{r as I}from"./index-76fb7be0.js";import{s as c,A as a}from"./styled-components.browser.esm-1b4aad00.js";import"./_commonjsHelpers-de833af9.js";const u=c.p`
  font-size: 15px;
  font-weight: 500;
  text-align: left;

  ${({success:e})=>e&&a`
      color: #1eae63;
    `}

  ${({focus:e})=>e&&a`
      color: #1eae63;
    `}
`,o=c.p`
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  color: #ff6868;
`,i=c.input`
  display: block;
  box-sizing: border-box;
  width: 279px;
  height: 47px;
  padding: 10px;
  border: none;
  border-radius: 5px;

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

  ${({error:e,success:t})=>!e&&!t&&a`
      background: #f8f9fd;
    `}
`;try{u.displayName="Label",u.__docgenInfo={description:"",displayName:"Label",props:{success:{defaultValue:null,description:"",name:"success",required:!0,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},focus:{defaultValue:null,description:"",name:"focus",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{o.displayName="LabelError",o.__docgenInfo={description:"",displayName:"LabelError",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{i.displayName="Input",i.__docgenInfo={description:"",displayName:"Input",props:{success:{defaultValue:null,description:"",name:"success",required:!0,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},focus:{defaultValue:null,description:"",name:"focus",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const n=({textLabel:e,placeHolder:t,type:r,value:x,onChange:p=null,disable:q=!1,required:s=!1,className:V,style:L,labelStyle:f,...F})=>{const[m,y]=I.useState(!1),T=()=>{y(!0)},N=()=>{y(!1)};return d(E,{children:[r==="error"?d(o,{style:f,children:[e,s&&"*"]}):d(u,{success:r==="success",focus:m,style:f,children:[e,s&&"*"]}),h(i,{error:r==="error",success:r==="success",id:"textField",type:"text",placeholder:t,value:x,style:L,onChange:v=>{p&&p(v.target.value)},className:`textField ${V}`,onFocus:T,focus:m,onBlur:N,disabled:q,required:s,...F})]})};try{n.displayName="TextField",n.__docgenInfo={description:"",displayName:"TextField",props:{textLabel:{defaultValue:null,description:"",name:"textLabel",required:!0,type:{name:"string"}},placeHolder:{defaultValue:null,description:"",name:"placeHolder",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:'"success" | "error" | null'}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{}"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"{}"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disable:{defaultValue:{value:"false"},description:"",name:"disable",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"null"},description:"",name:"onChange",required:!1,type:{name:"(value: string) => void"}}}}}catch{}const C={title:"Components/TextField",component:n},w=e=>h(n,{...e}),l=w.bind({});l.args={textLabel:"Text Filed Label",type:null};var g,b,_;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:"(args: any) => <TextField {...args} />",...(_=(b=l.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const O=["Normal"];export{l as Normal,O as __namedExportsOrder,C as default};
