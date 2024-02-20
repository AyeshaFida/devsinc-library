import{a,j as d}from"./jsx-runtime-03b4ddbf.js";import{B as h}from"./button-fc000838.js";import{s as n}from"./styled-components.browser.esm-1b4aad00.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./typography-e7688ec1.js";const s=n.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,o=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  margin: 100px auto;
  min-height: 356px;
  width: 557px;
  background: #ffffff;
  box-shadow: 0px 3px 14px rgba(74, 58, 255, 0.03),
    0px -2px 4px rgba(20, 20, 43, 0.12), 0px 12px 44px rgba(20, 20, 43, 0.34);
  border-radius: 12px;
`,u=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 91px;
  height: 91px;
  margin-top: 20px;
  border-radius: 50%;
  background: ${({type:e})=>e?"#F4FBF7":"rgba(190, 36, 36, 0.05)"};
`,p=n.div`
  margin-top: 32px;
  margin-bottom: 50px;
`,c=n.div`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  color: #170F49;
  margin-bottom: 16px;
`,l=n.div`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #6F6C90;
`,f=n.div`
  display: flex;
  width: inherit;
  justify-content: space-evenly;
`;try{s.displayName="Popup",s.__docgenInfo={description:"",displayName:"Popup",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{o.displayName="PopupContent",o.__docgenInfo={description:"",displayName:"PopupContent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{u.displayName="Icon",u.__docgenInfo={description:"",displayName:"Icon",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{p.displayName="Content",p.__docgenInfo={description:"",displayName:"Content",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{c.displayName="Title",c.__docgenInfo={description:"",displayName:"Title",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{l.displayName="Message",l.__docgenInfo={description:"",displayName:"Message",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{f.displayName="ButtonBox",f.__docgenInfo={description:"",displayName:"ButtonBox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const r=({title:e,message:V,children:m,className:b,type:i="success",onClickRight:w=()=>{},onClickLeft:C=()=>{},popupStyle:L,titleStyle:N,messageStyle:M,iconStyle:y,iconContainerStyle:S,leftButtonLabel:g,rightButtonLabel:_})=>a(s,{style:L,className:b,children:d(o,{children:[a(u,{type:i==="success"?"success":"danger",style:S,children:a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",fill:"currentColor",className:"bi bi-exclamation-diamond-fill",viewBox:"0 0 16 16",style:y||{color:`${i==="success"?"#1EAE63":"#FF6868"}`},children:a("path",{d:"M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})})}),d(p,{children:[a(c,{style:N,children:e}),a(l,{style:M,children:V}),m&&a(l,{children:m})]}),d(f,{children:[a("div",{children:a(h,{label:g||"Cancel",onClick:C,style:{width:"234px",backgroundColor:"#F8F9FD",color:"black"}})}),a("div",{children:a(h,{label:_||"Continue",onClick:w,style:{width:"234px"},variant:i==="success"?void 0:"danger"})})]})]})});try{r.displayName="PopUp",r.__docgenInfo={description:"",displayName:"PopUp",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"success"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'}]}},onClickRight:{defaultValue:{value:"() => { }"},description:"",name:"onClickRight",required:!1,type:{name:"() => void"}},onClickLeft:{defaultValue:{value:"() => { }"},description:"",name:"onClickLeft",required:!1,type:{name:"() => void"}},popupStyle:{defaultValue:null,description:"",name:"popupStyle",required:!1,type:{name:"CSSProperties"}},titleStyle:{defaultValue:null,description:"",name:"titleStyle",required:!1,type:{name:"CSSProperties"}},messageStyle:{defaultValue:null,description:"",name:"messageStyle",required:!1,type:{name:"CSSProperties"}},iconStyle:{defaultValue:null,description:"",name:"iconStyle",required:!1,type:{name:"CSSProperties"}},iconContainerStyle:{defaultValue:null,description:"",name:"iconContainerStyle",required:!1,type:{name:"CSSProperties"}},leftButtonLabel:{defaultValue:null,description:"",name:"leftButtonLabel",required:!1,type:{name:"string"}},rightButtonLabel:{defaultValue:null,description:"",name:"rightButtonLabel",required:!1,type:{name:"string"}}}}}catch{}const B={title:"Components/PopUp",component:r},T=e=>a(r,{...e}),t=T.bind({});t.args={title:"PopUp Title",message:"Message will be displayed here"};var x,v,q;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:"(args: any) => <PopUp {...args} />",...(q=(v=t.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};const I=["Normal"];export{t as Normal,I as __namedExportsOrder,B as default};
