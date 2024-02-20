import{j as C,a as l}from"./jsx-runtime-03b4ddbf.js";import{s as d}from"./styled-components.browser.esm-1b4aad00.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const t=d.span`
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 1);
`,r=d.input`
  display: block;
  box-sizing: border-box;
  width: 573px;
  height: 47px;
  padding-left: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  border: none;
  background: #F8F9FD;
  color: #C4C4C4;
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;

  &:focus {
    outline: 0;
    color: black;
  }
`,i=d.div`
  display: flex;
  flex-direction: column;
`;try{r.displayName="Input",r.__docgenInfo={description:"",displayName:"Input",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{i.displayName="CounterContainer",i.__docgenInfo={description:"",displayName:"CounterContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{t.displayName="Label",t.__docgenInfo={description:"",displayName:"Label",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const n=({textLabel:e,placeHolder:p,value:c,onChange:m,disabled:f=!1,labelClasses:y,className:g,style:_,labelStyle:b,...h})=>C(i,{children:[l(t,{className:y,style:b,children:e}),l(r,{type:"number",placeholder:p,value:c,onChange:x=>{m(x.target.value)},disabled:f,className:`textField ${g}`,style:_,...h})]});try{n.displayName="Counter",n.__docgenInfo={description:"",displayName:"Counter",props:{textLabel:{defaultValue:null,description:"",name:"textLabel",required:!0,type:{name:"string"}},placeHolder:{defaultValue:null,description:"",name:"placeHolder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},labelClasses:{defaultValue:null,description:"",name:"labelClasses",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{}"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"{}"}}}}}catch{}const H={title:"Components/Counter",component:n},q=e=>l(n,{...e}),a=q.bind({});a.args={textLabel:"Counter",placeHolder:"5",onChange:()=>{}};var s,o,u;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"(args: any) => <Counter {...args} />",...(u=(o=a.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const I=["Normal"];export{a as Normal,I as __namedExportsOrder,H as default};
