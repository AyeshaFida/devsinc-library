import{a,j as k}from"./jsx-runtime-03b4ddbf.js";import{T as _}from"./typography-e7688ec1.js";import{s as d}from"./styled-components.browser.esm-1b4aad00.js";try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{size:{defaultValue:{value:"h1"},description:"",name:"size",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const n=d.span`
  height: 24px;
  width: 24px;
  display: flex !important;
  align-items: center;
`,t=d.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 4px;
    border: none;
    font-style: normal;
    font-family: 'Rubik', sans-serif;
    font-weight: 550;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    height: 48px;
    width: auto;
    gap: 12px;
  }

  button.primary.danger {
    background: #FF6868;
    color: #FFFFFF;
  }

  button.primary.danger:active {
    background: #FF4A4A;
  }

  button.primary.success {
    background: #1EAE63;
    color: #FFFFFF;
  }

  button.primary.success:active {
    background: #0D964F;
  }

  button.primary.info {
    background: #2EA2E6;
    color: #FFFFFF;
  }

  button.primary.info:active {
    background: #0081CC;
  }

  button.primary.warning {
    background: #EDA12F;
    color: #FFFFFF;
  }

  button.primary.warning:active {
    background: #DB8400;
  }

  button.primary.disabled {
    background: #EDEDED;
    color: #959595;
  }

  button.primary.disabled:active {
    background: #EDEDED;
    color: #959595;
  }
  button.secondary.danger {
    background: transparent;
    color: #FF6868;
    border: 1px solid;
    border-radius: 5px;
  }

  button.secondary.danger:active {
    background: #FF4A4A;
    color: #FFFFFF;
    border: none
  }

  button.secondary.success {
    background: transparent;
    color: #1EAE63;
    border: 1px solid;
    border-radius: 5px;
  }

  button.secondary.success:active {
    background: #0D964F;
    color: #FFFFFF;
    border: none
  }


  button.secondary.info {
    background: transparent;
    color: #2EA2E6;
    border: 1px solid;
    border-radius: 5px;
  }

  button.secondary.info:active {
    background: #0081CC;
    color: #FFFFFF;
    border: none
  }

  button.secondary.warning {
    background: transparent;
    color: #EDA12F;
    border: 1px solid;
    border-radius: 5px;
  }

  button.secondary.warning:active {
    background: #DB8400;
    color: #FFFFFF;
    border: none
  }

  button.secondary.disabled {
    background: transparent;
    color: #959595;
    border: 1px solid;
    border-radius: 5px;
  }

  button.secondary.disabled:active {
    background: transparent;
    color: #959595;
    border: 1px solid;
    border-radius: 5px;
  }

  button.teritary.success {
    background: transparent;
    color: #1EAE63;
  }

  button.teritary.success:active {
    background: #0D964F;
    color: #FFFFFF;
  }

  button.teritary.danger {
    background: transparent;
    color: #FF6868;
  }

  button.teritary.danger:active {
    background: #FF4A4A;
    color: #FFFFFF;
  }

  button.teritary.warning {
    background: transparent;
    color: #EDA12F;
  }

  button.teritary.warning:active {
    background: #DB8400;
    color: #FFFFFF;
  }

  button.teritary.info {
    background: transparent;
    color: #2EA2E6;
  }

  button.teritary.info:active {
    background: #0081CC;
    color: #FFFFFF;
  }

  button.teritary.disabled {
    background: transparent;
    color: #959595;
  }

  button.teritary.disabled:active {
    background: transparent;
    color: #959595;
  }
`;try{n.displayName="Icon",n.__docgenInfo={description:"",displayName:"Icon",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{t.displayName="ButtonComponent",t.__docgenInfo={description:"",displayName:"ButtonComponent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const s=({label:e,className:u="",labelClasses:c="",iconClasses:p="",onClick:y,icon:r,type:m="primary",variant:b="success",disabled:o=!1,style:F={},iconStyle:f={},labelStyle:g={},postPosition:l=!1,...v})=>{const i=a(n,{className:p,style:f,children:r});return a(t,{children:k("button",{className:`${u} ${m} ${b} ${o?"disabled":""}`,onClick:y,disabled:o,style:F,...v,children:[!l&&r&&i,a(_,{size:"utility-lg",style:g,children:a("p",{className:c,children:e})}),l&&r&&i]})})};try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},iconClasses:{defaultValue:{value:""},description:"",name:"iconClasses",required:!1,type:{name:"string"}},labelClasses:{defaultValue:{value:""},description:"",name:"labelClasses",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"teritary"'}]}},variant:{defaultValue:{value:"success"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},iconStyle:{defaultValue:{value:"{}"},description:"",name:"iconStyle",required:!1,type:{name:"CSSProperties"}},labelStyle:{defaultValue:{value:"{}"},description:"",name:"labelStyle",required:!1,type:{name:"CSSProperties"}},postPosition:{defaultValue:{value:"false"},description:"",name:"postPosition",required:!1,type:{name:"boolean"}}}}}catch{}export{s as B};
