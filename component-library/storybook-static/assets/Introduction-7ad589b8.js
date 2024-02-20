import{a as i,j as r,F as a}from"./jsx-runtime-03b4ddbf.js";import{M as s}from"./index-a8b4ca86.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-0b741434.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-ec3b3d19.js";import"./index-d3ea75b5.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function n(e){const t=Object.assign({h1:"h1",p:"p",img:"img"},o(),e.components);return r(a,{children:[i(s,{title:"Devsinc UI Library/Introduction"}),`
`,i("style",{children:`
    # {
      font-family: 'Rubik', sans-serif !important;
    }

    .subheading {
      --mediumdark: '#999999'
      font-weight: 700
      font-size: 13px
      color: #999
      letter-spacing: 6px
      line-height: 24px
      text-transform: uppercase
      margin-bottom: 12px
      margin-top: 40px
    }

    img {
      border-radius: 10px;
      width: 400px;
      display: flex;
      margin: auto;
    }

    .link-list {
      display: grid
      grid-template-columns: 1fr
      grid-template-rows: 1fr 1fr
      row-gap: 10px
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px
        column-gap: 20px
        grid-template-columns: 1fr 1fr
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid
        -ms-grid-columns: 1fr 1fr
        -ms-grid-rows: 1fr 1fr
      }
    }

    .link-item {
      display: block
      padding: 20px
      border: 1px solid #00000010
      border-radius: 5px
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out
      color: #333333
      display: flex
      align-items: flex-start
    }

    .link-item:hover {
      border-color: #1EA7FD50
      transform: translate3d(0, -3px, 0)
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0
    }

    .link-item:active {
      border-color: #1EA7FD
      transform: translate3d(0, 0, 0)
    }

    .link-item strong {
      font-weight: 700
      display: block
      margin-bottom: 2px
    }

    .link-item img {
      height: 40px
      width: 40px
      margin-right: 15px
      flex: none
    }

    .link-item span,
    .link-item p {
      margin: 0
      font-size: 14px
      line-height: 20px
    }

    .tip {
      display: inline-block
      border-radius: 1em
      font-size: 11px
      line-height: 12px
      font-weight: 700
      background: #E7FDD8
      color: #66BF3C
      padding: 4px 12px
      margin-right: 10px
      vertical-align: top
    }

    .tip-wrapper {
      font-size: 13px
      line-height: 20px
      margin-top: 40px
      margin-bottom: 40px
    }

    .tip-wrapper code {
      font-size: 12px
      display: inline-block
    }
  `}),`
`,i(t.h1,{id:"devsinc-ui-library",children:"Devsinc UI Library"}),`
`,i(t.p,{children:i(t.img,{src:"./public/component-library.png",alt:"Image"})}),`
`,r(t.p,{children:["Devsinc UI Library, is a specialized user interface (UI) library that has been developed by ",i("b",{children:"RAPP Team"})," for internal use within all Devsinc's products. By utilizing this custom react based library, Devsinc is able to enhance the functionality and aesthetic appeal of their products while maintaining a high level of consistency and efficiency in their development process."]})]})}function k(e={}){const{wrapper:t}=Object.assign({},o(),e.components);return t?i(t,Object.assign({},e,{children:i(n,e)})):n(e)}export{k as default};
