(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{604:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),material_ui_TextField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(609),material_ui_TextField__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(material_ui_TextField__WEBPACK_IMPORTED_MODULE_1__),enterModule;enterModule=__webpack_require__(0).enterModule,enterModule&&enterModule(module);class PreviewReminder extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(){super(),this.containerStyle={display:"flex",margin:"0 auto 0.6cm",width:"100%",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",pageBreakInside:"avoid"},this.tableStyle={display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",borderStyle:"double"},this.columnStyle={display:"flex",flexBasis:"30px"},this.smallCellStyle={flexBasis:"10%",textAlign:"center",border:"1px solid",lineHeight:"30px"},this.mediumCellStyle={flexBasis:"15%",textAlign:"center",border:"1px solid",lineHeight:"30px"},this.longCellStyle={flexBasis:"85%",textAlign:"center",border:"1px solid",lineHeight:"30px"}}componentDidUpdate(){window.dispatchEvent(new Event("resize"))}render(){const{previewMode:e,setCompanyName:_,previewReminder:t,companyNameInputErrorText:l}=this.props,a=t.entities,r=t.companyName,i=t.totalPriceExcludedTax,E=t.totalTax,d=t.totalPrice;if(0==a.length){const e={textAlign:"center",marginTop:"18px",fontSize:"25px",fontWeight:"bold",color:"lightgrey"};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:e},"Empty")}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.containerStyle},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{style:{textAlign:"center",marginBottom:"0.1cm"}},"海有股份有限公司"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",{style:{margin:0,textAlign:"center"}},"請款明細表")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:e,style:{alignSelf:"flex-start"}},e?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:e},"客戶名稱：",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,{id:"company-name-input",onChange:_,errorText:l})):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",{key:e,style:{margin:"0.3cm 0"}},"客戶名稱：",r)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.tableStyle},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.columnStyle},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.smallCellStyle},"#"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.smallCellStyle},"日期"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.mediumCellStyle},"品名"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.mediumCellStyle},"數量"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.smallCellStyle},"單位"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.smallCellStyle},"單價"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.mediumCellStyle},"金額"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.mediumCellStyle},"備註")),a.map((e,_)=>{const t=new Date(e.date);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:_,style:this.columnStyle},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.smallCellStyle},_+1),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.smallCellStyle},`${t.getMonth()+1}/${t.getDate()}`),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.mediumCellStyle},e.productName),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.mediumCellStyle},e.count),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.smallCellStyle},e.unit),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.smallCellStyle},e.unitPrice),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.mediumCellStyle},Math.round(e.price)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.mediumCellStyle},e.remark))}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.columnStyle},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.longCellStyle},"銷售總金額"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.mediumCellStyle},i)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.columnStyle},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.longCellStyle},"稅額"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.mediumCellStyle},E)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.columnStyle},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.longCellStyle},"總計"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:this.mediumCellStyle},d))))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}const _default=PreviewReminder;var reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=__webpack_require__(0).default,leaveModule=__webpack_require__(0).leaveModule,reactHotLoader&&(reactHotLoader.register(PreviewReminder,"PreviewReminder","/Users/luke/Documents/Reminder-Generator/src/components/Tables/PreviewReminder.js"),reactHotLoader.register(_default,"default","/Users/luke/Documents/Reminder-Generator/src/components/Tables/PreviewReminder.js"),leaveModule(module))}.call(this,__webpack_require__(7)(module))}}]);
//# sourceMappingURL=PreviewReminder.js.map