/*!
 * @asigloo/vue-dynamic-forms v3.x.x
 * (c) 2021 Alvaro Saburido
 * @license MIT
 */
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],o):o((e="undefined"!=typeof globalThis?globalThis:e||self).AsDynamicForms={},e.Vue)}(this,(function(e,o){"use strict";const t=e=>!!e&&e.constructor===Object,n=e=>null!=e&&""!==e,l=e=>Object.keys(e).filter((o=>null!=e[o])).reduce(((o,t)=>"object"==typeof e[t]?{...o,[t]:l(e[t])}:{...o,[t]:e[t]}),{}),r=e=>{let o,t,n;if("object"!=typeof e||null===e)return e;for(n in o=Array.isArray(e)?[]:{},e)t=e[n],o[n]=r(t);return o};function a(e,t){const n=o.ref(!1),r=o.computed((()=>e.control.validations.some((e=>"required"===e.type)))),a=o.computed((()=>e.control.validations.length>0));async function i(o=!1){if(o||(e.control.touched||e.control.dirty)&&a.value){let o={};const r=[],a=[];e.control.validations.forEach((o=>{const t=o.validator(e.control.value);"Promise"===t.constructor.name?a.push({validation:o.validator,text:o.text}):r.push({validation:t,text:o.text})})),a.length>0&&(n.value=!0,Promise.all(a.map((async({validation:o,text:t})=>({validation:await o(e.control.value),text:t})))).then((r=>{r.forEach((({validation:e,text:t})=>{const[n,l]=Object.entries(e)[0];o[n]=l?{value:l,text:t}:null})),n.value=!1,t("validate",{name:e.control.name,errors:o,valid:0===Object.keys(l(o)).length})}))),r.forEach((({validation:e,text:t})=>{if(e){const[n,l]=Object.entries(e)[0];o[n]=l?{value:l,text:t}:null}})),t("validate",{name:e.control.name,errors:o,valid:0===Object.keys(l(o)).length})}}const u=o.computed((()=>{var o;const t=Object.values((null==(o=e.control)?void 0:o.errors)||{});return t.length>0?t.map((e=>e.text)):[]})),c=o.computed((()=>[{"form-control--success":!n.value&&a.value&&e.control.errors&&e.control.valid&&e.control.dirty&&e.control.touched},{"form-control--error":!n.value&&!e.control.valid,"form-control--validating":n.value}])),s=o.computed((()=>[{"checkbox-group--success":!n.value&&a.value&&e.control.errors&&e.control.valid&&e.control.dirty&&e.control.touched},{"checkbox-group--error":!n.value&&!e.control.valid,"checkbox-group--validating":n.value}])),d=o.computed((()=>[{"radio-group--success":!n.value&&a.value&&e.control.errors&&e.control.valid&&e.control.dirty&&e.control.touched},{"radio-group--error":!n.value&&!e.control.valid,"radio-group--validating":n.value}]));return o.watch((()=>e.forceValidation),(e=>{e&&i(e)})),{isPendingValidation:n,validate:i,getValidationClasses:c,getCheckboxValidationClasses:s,getRadioValidationClasses:d,isRequired:r,requiresValidation:a,errorMessages:u}}var i,u;function c(t,l){const{validate:r,getValidationClasses:i,getCheckboxValidationClasses:u,getRadioValidationClasses:c}=a(t,l);const s=o.computed((()=>["form-control",...i.value])),d=o.computed((()=>["checkbox-group",...u.value])),p=o.computed((()=>["radio-group",...c.value]));return o.watch((()=>{var e;return null==(e=null==t?void 0:t.control)?void 0:e.value}),((e,o)=>{e!==o&&l("change",{name:t.control.name,value:t.control.value})}),{immediate:!0}),{validate:r,onFocus:function(){l("focus",{name:t.control.name})},onInput:function(o){const a=o.target;o.stopImmediatePropagation(),t.control&&n(a.value)&&((!t.control.valid&&t.control.validationTrigger.type===e.ValidationTriggerTypes.BLUR||t.control.validationTrigger.type===e.ValidationTriggerTypes.CHANGE&&a.value.length>=t.control.validationTrigger.threshold)&&r(),l("change",{name:t.control.name,value:a.value}))},onChange:function(e){e.stopImmediatePropagation(),e.preventDefault()},onBlur:function(){l("blur",{name:t.control.name}),t.control.validationTrigger.type===e.ValidationTriggerTypes.BLUR&&r()},onCheck:function(e){const o=e.target;t.control&&(e.stopImmediatePropagation(),l("change",{name:t.control.name,value:o.checked}))},getClasses:s,getCheckboxClasses:d,getRadioClasses:p}}e.ValidationTriggerTypes=void 0,(i=e.ValidationTriggerTypes||(e.ValidationTriggerTypes={})).BLUR="blur",i.CHANGE="change",e.FieldTypes=void 0,(u=e.FieldTypes||(e.FieldTypes={})).TEXT="text",u.TEXTAREA="textarea",u.SELECT="select",u.NUMBER="number",u.EMAIL="email",u.URL="url",u.PASSWORD="password",u.CHECKBOX="checkbox",u.RADIO="radio",u.CUSTOM="custom-field",u.COLOR="color";const s={control:Object,forceValidation:{type:Boolean,default:!1}};var d=o.defineComponent({name:"asCheckboxInput",inheritAttrs:!1,props:s,setup(e,{emit:t}){const{onCheck:n,onFocus:l,onBlur:r,getCheckboxClasses:i}=c(e,t),{errorMessages:u,isPendingValidation:s,isRequired:d}=a(e,t),p=o.h("span",{ariaHidden:!0,class:"form-required-star"}," *"),v=[o.h("input",{name:e.control.name||"",type:e.control.type,id:e.control.name,disabled:e.control.disabled,class:"checkbox-control",value:e.control.value,checked:e.control.value,required:d.value,readonly:e.control.readonly,ariaRequired:d.value,ariaLabel:e.control.ariaLabel,ariaLabelledBy:e.control.ariaLabelledBy,onFocus:l,onBlur:r,onChange:n}),o.h("label",{class:["checkbox-label"],for:e.control.name},[e.control.label,d.value?p:""])];return()=>[o.h("div",{class:i.value,tabIndex:-1,role:"group"},v),s.value?null:o.h("div",{class:"form-errors"},u.value.map((e=>o.h("p",{class:"form-error"},e))))]}}),p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:d}),v=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,{}),f={exports:{}},m={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.isDate=function(e){return e instanceof Date},e.isEmpty=function(e){return 0===Object.keys(e).length};var n=e.isObject=function(e){return null!=e&&"object"===(void 0===e?"undefined":t(e))};e.properObject=function(e){return n(e)&&!e.hasOwnProperty?o({},e):e}})(m),function(e,o){!function(e,o,t){function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}Object.defineProperty(o,"__esModule",{value:!0});var l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r=function e(o,r){if(o===r)return{};if(!(0,t.isObject)(o)||!(0,t.isObject)(r))return r;var a=(0,t.properObject)(o),i=(0,t.properObject)(r),u=Object.keys(a).reduce((function(e,o){return i.hasOwnProperty(o)?e:l({},e,n({},o,void 0))}),{});return(0,t.isDate)(a)||(0,t.isDate)(i)?a.valueOf()==i.valueOf()?{}:i:Object.keys(i).reduce((function(o,r){if(!a.hasOwnProperty(r))return l({},o,n({},r,i[r]));var u=e(a[r],i[r]);return(0,t.isObject)(u)&&(0,t.isEmpty)(u)&&!(0,t.isDate)(u)?o:l({},o,n({},r,u))}),u)};o.default=r,e.exports=o.default}(e,o,m)}(f,f.exports);var b={exports:{}};!function(e,o){!function(e,o,t){function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}Object.defineProperty(o,"__esModule",{value:!0});var l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r=function e(o,r){if(o===r||!(0,t.isObject)(o)||!(0,t.isObject)(r))return{};var a=(0,t.properObject)(o),i=(0,t.properObject)(r);return Object.keys(i).reduce((function(o,r){if(a.hasOwnProperty(r)){var u=e(a[r],i[r]);return(0,t.isObject)(u)&&(0,t.isEmpty)(u)?o:l({},o,n({},r,u))}return l({},o,n({},r,i[r]))}),{})};o.default=r,e.exports=o.default}(e,o,m)}(b,b.exports);var y={exports:{}};!function(e,o){!function(e,o,t){function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}Object.defineProperty(o,"__esModule",{value:!0});var l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r=function e(o,r){if(o===r||!(0,t.isObject)(o)||!(0,t.isObject)(r))return{};var a=(0,t.properObject)(o),i=(0,t.properObject)(r);return Object.keys(a).reduce((function(o,r){if(i.hasOwnProperty(r)){var u=e(a[r],i[r]);return(0,t.isObject)(u)&&(0,t.isEmpty)(u)?o:l({},o,n({},r,u))}return l({},o,n({},r,void 0))}),{})};o.default=r,e.exports=o.default}(e,o,m)}(y,y.exports);var h={exports:{}};!function(e,o){!function(e,o,t){function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}Object.defineProperty(o,"__esModule",{value:!0});var l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r=function e(o,r){if(o===r)return{};if(!(0,t.isObject)(o)||!(0,t.isObject)(r))return r;var a=(0,t.properObject)(o),i=(0,t.properObject)(r);return(0,t.isDate)(a)||(0,t.isDate)(i)?a.valueOf()==i.valueOf()?{}:i:Object.keys(i).reduce((function(o,r){if(a.hasOwnProperty(r)){var u=e(a[r],i[r]);return(0,t.isObject)(u)&&(0,t.isEmpty)(u)&&!(0,t.isDate)(u)?o:l({},o,n({},r,u))}return o}),{})};o.default=r,e.exports=o.default}(e,o,m)}(h,h.exports);var g={exports:{}};!function(e,o){!function(e,o,t,n,l){Object.defineProperty(o,"__esModule",{value:!0});var r=u(t),a=u(n),i=u(l);function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e,o){return{added:(0,r.default)(e,o),deleted:(0,a.default)(e,o),updated:(0,i.default)(e,o)}};o.default=c,e.exports=o.default}(e,o,b.exports,y.exports,h.exports)}(g,g.exports),function(e){!function(e,o,t,n,l,r){Object.defineProperty(e,"__esModule",{value:!0}),e.detailedDiff=e.updatedDiff=e.deletedDiff=e.diff=e.addedDiff=void 0;var a=d(o),i=d(t),u=d(n),c=d(l),s=d(r);function d(e){return e&&e.__esModule?e:{default:e}}e.addedDiff=i.default,e.diff=a.default,e.deletedDiff=u.default,e.updatedDiff=c.default,e.detailedDiff=s.default}(e,f.exports,b.exports,y.exports,h.exports,g.exports)}(v);const O={dirty:!1,touched:!1,valid:!0,errors:null},C=({validations:o=[],label:t=null,ariaLabel:n=null,ariaLabelledBy:l=null,customClass:r=null,customStyles:a=null,disabled:i=!1,placeholder:u=null,autocomplete:c=null,readonly:s=!1,validationTrigger:d=x({type:e.ValidationTriggerTypes.BLUR,threshold:0})})=>({validations:o,label:t,ariaLabel:n,ariaLabelledBy:l,customClass:r,customStyles:a,disabled:i,placeholder:u,autocomplete:c,readonly:s,validationTrigger:d}),j=({name:e,type:o,...t})=>({...t,name:e,type:o,...O}),x=({type:e,threshold:o})=>({type:e,threshold:o});const T=e=>e();function B(e,o=200){return function(e,o){return function(...t){e((()=>o.apply(this,t)),{fn:o,thisArg:this,args:t})}}(function(e){if(e<=0)return T;let o;return t=>{o&&clearTimeout(o),o=setTimeout(t,e)}}(o),e)}const F={form:{type:Object,required:!0}};var k=o.defineComponent({name:"asDynamicForm",props:F,setup(t,a){const{options:i}=G(),{controls:u,valueChange:c,formValues:s,handleSubmit:d,isValid:p,errors:f,deNormalizedScopedSlots:m,normalizedControls:b,formattedOptions:y,onBlur:h,onValidate:g,forceValidation:O,detectChanges:C,onOptionsChanged:x,validateAll:T,resetForm:F}=function(t,a,i){let u=r(o.toRaw(t.fields));const c=o.ref([]),s=o.ref({resetAfterSubmit:!0,...null==i?void 0:i.form,...null==t?void 0:t.options}),d=o.ref(!1),p=o.computed((()=>Object.keys(a.slots))),f=o.computed((()=>{const e={};return c.value.forEach((o=>{e[o.name]=o})),e})),m=o.computed((()=>!c.value.some((e=>!e.valid)))),b=o.computed((()=>l(c.value.reduce(((o,t)=>{const n={};return n[t.name]=t.type===e.FieldTypes.NUMBER?parseFloat(`${t.value}`):t.value,{...o,...n}}),{})))),y=o.computed((()=>c.value?c.value.reduce(((e,o)=>{if((Object.keys(o.errors||{})||[]).length>0){const t={};return t[o.name]=o.errors,{...e,...t}}return e}),{}):{})),h=o.computed((()=>{const e=s.value;if(e){const{customClass:o,customStyles:t,method:n,netlify:l,netlifyHoneypot:r,autocomplete:a}=e;return{class:o,style:t,method:n,"data-netlify":l,"data-netlify-honeypot":r,autocomplete:a?"on":"off"}}}));function g(o=!1){const n=Object.entries(null==t?void 0:t.fields).map((([t,n])=>j(o?{...n,name:t,value:n.type!==e.FieldTypes.CHECKBOX&&null}:{...n,name:t})))||[];t.fieldOrder?c.value=n.sort(((e,o)=>t.fieldOrder.indexOf(e.name)-t.fieldOrder.indexOf(o.name))):c.value=n,o&&C(b.value)}function O(e){return c.value.find((o=>o.name===e))}const C=B((function(e){a.emit("change",e)}),300);function x(){g(!0),d.value=!1}function T(){d.value=!0}return o.onMounted((()=>{g()})),{controls:c,mapControls:g,valueChange:function(e){if(n(e.value)){const o=O(e.name);o&&(o.value=e.value,o.dirty=!0),C(b.value)}},formValues:b,formOptions:s,handleSubmit:async function(){T(),await o.nextTick(),m.value?(a.emit("submitted",b.value),s.value.resetAfterSubmit&&x()):a.emit("error",y.value)},isValid:m,errors:y,deNormalizedScopedSlots:p,normalizedControls:f,formattedOptions:h,onBlur:function({name:e}){const o=O(e);o&&(o.touched=!0)},onValidate:function({name:e,errors:o,valid:t}){const n=O(e);n&&(n.errors=l({...n.errors,...o}),n.valid=t)},forceValidation:d,validateAll:T,findControlByName:O,resetForm:x,detectChanges:function(e){const t=v.diff(u,r(e));Object.entries(t).forEach((([e,o])=>{const t=O(e);t&&Object.entries(o).forEach((([e,o])=>{"options"===e||"validations"===e?Object.entries(o).forEach((([o,n])=>{t[e][o]={...t[e][o],...n}})):t[e]=o}))})),u=r(o.toRaw(e))},onOptionsChanged:function(e){Object.assign(s.value,e)}}}(t.form,a,i||{});return o.watch((()=>t.form.fields),(e=>{C(e)}),{deep:!0}),o.watch((()=>t.form.fields),(e=>{x(e)}),{deep:!0}),{controls:u,valueChange:c,formValues:s,handleSubmit:d,isValid:p,errors:f,deNormalizedScopedSlots:m,normalizedControls:b,formattedOptions:y,onBlur:h,onValidate:g,forceValidation:O,validateAll:T,resetForm:F}}});k.render=function(e,t,n,l,r,a){const i=o.resolveComponent("dynamic-input");return o.openBlock(),o.createBlock("form",o.mergeProps({class:"dynamic-form",novalidate:"",id:e.form.id,name:e.form.id},e.formattedOptions,{onSubmit:t[1]||(t[1]=o.withModifiers(((...o)=>e.handleSubmit&&e.handleSubmit(...o)),["prevent"]))}),[(o.openBlock(!0),o.createBlock(o.Fragment,null,o.renderList(e.controls,(t=>(o.openBlock(),o.createBlock(i,{key:t.name,control:t,forceValidation:e.forceValidation,onChange:e.valueChange,onBlur:e.onBlur,onValidate:e.onValidate},{customField:o.withCtx((t=>[(o.openBlock(!0),o.createBlock(o.Fragment,null,o.renderList(e.deNormalizedScopedSlots,(n=>(o.openBlock(),o.createBlock("div",{key:n,class:"custom-form-wrapper"},[t.control.name===n?o.renderSlot(e.$slots,n,{key:0,control:e.normalizedControls[n],onChange:t.onChange,onBlur:t.onBlur}):o.createCommentVNode("",!0)])))),128))])),_:2},1032,["control","forceValidation","onChange","onBlur","onValidate"])))),128))],16,["id","name"])};var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});const V={control:Object,forceValidation:{type:Boolean,default:!1}};var S=o.defineComponent({name:"asTextInput",inheritAttrs:!1,props:V,setup(e,{emit:t}){const{onInput:n,onChange:l,onFocus:r,onBlur:i,getClasses:u}=c(e,t),{isRequired:s,errorMessages:d,isPendingValidation:p}=a(e,t);return()=>[o.h("input",{id:e.control.name,name:e.control.name||"",type:e.control.type,class:u.value,value:e.control.value,disabled:e.control.disabled,placeholder:e.control.placeholder,required:s.value,readonly:e.control.readonly,autocomplete:e.control.autocomplete,ariaRequired:s.value,ariaLabel:e.control.ariaLabel,ariaLabelledBy:e.control.ariaLabelledBy,onFocus:r,onBlur:i,onInput:n,onChange:l}),p.value?null:o.h("div",{class:"form-errors"},d.value.map((e=>o.h("p",{class:"form-error"},e))))]}}),w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const L={control:Object,forceValidation:{type:Boolean,default:!1}};var A=o.defineComponent({name:"asSelectInput",inheritAttrs:!1,props:L,setup:(e,{emit:n})=>()=>{var l;const{onInput:r,onChange:i,onFocus:u,onBlur:s,getClasses:d}=c(e,n),{isRequired:p,errorMessages:v,isPendingValidation:f}=a(e,n),m=o.computed((()=>{var o,n,l;return t(null==(o=null==e?void 0:e.control)?void 0:o.options)?Object.values(null==(n=null==e?void 0:e.control)?void 0:n.options):null==(l=null==e?void 0:e.control)?void 0:l.options})),b=null==(l=null==m?void 0:m.value)?void 0:l.map((t=>o.h("option",{key:t[e.control.optionValue],value:t[e.control.optionValue],disabled:t.disabled},t[e.control.optionLabel])));return[o.h("select",{id:e.control.name,name:e.control.name||"",class:d.value,value:e.control.value,disabled:e.control.disabled,placeholder:e.control.placeholder,required:p.value,readonly:e.control.readonly,ariaLabel:e.control.ariaLabel,ariaLabelledBy:e.control.ariaLabelledBy,ariaRequired:p.value,onFocus:u,onBlur:s,onInput:r,onChange:i},b),f.value?null:o.h("div",{class:"form-errors"},v.value.map((e=>o.h("p",{class:"form-error"},e))))]}}),I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const P={control:Object,forceValidation:{type:Boolean,default:!1}};var E=o.defineComponent({name:"asTextAreaInput",inheritAttrs:!1,props:P,setup(e,{emit:t}){const{onInput:n,onChange:l,onFocus:r,onBlur:i,getClasses:u}=c(e,t),{isRequired:s,errorMessages:d,isPendingValidation:p}=a(e,t);return()=>[o.h("textarea",{id:e.control.name,name:e.control.name||"",class:u.value,value:e.control.value,rows:e.control.rows,cols:e.control.cols,disabled:e.control.disabled,placeholder:e.control.placeholder,required:s.value,autocomplete:e.control.autocomplete,readonly:e.control.readonly,ariaLabel:e.control.ariaLabel,ariaLabelledBy:e.control.ariaLabelledBy,ariaRequired:s.value,onFocus:r,onBlur:i,onInput:n,onChange:l}),p.value?null:o.h("div",{class:"form-errors"},d.value.map((e=>o.h("p",{class:"form-error"},e))))]}}),R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const M={control:Object,forceValidation:{type:Boolean,default:!1}};var q=o.defineComponent({name:"asRadioInput",inheritAttrs:!1,props:M,setup(e,{emit:t}){var n,l;const{onCheck:r,onInput:i,onFocus:u,onBlur:s,getRadioClasses:d}=c(e,t),{errorMessages:p,isPendingValidation:v}=a(e,t),f=null==(l=null==(n=null==e?void 0:e.control)?void 0:n.options)?void 0:l.map((t=>{var n,l,a;return o.h("div",{class:"radio-input"},[o.h("input",{name:(null==(n=null==e?void 0:e.control)?void 0:n.name)||"",type:null==(l=null==e?void 0:e.control)?void 0:l.type,id:t.key,disabled:t.disabled||(null==(a=null==e?void 0:e.control)?void 0:a.disabled),checked:e.control.value===t.key,class:["radio-control"],value:t.key,onFocus:u,onBlur:s,onInput:i,onCheck:r}),o.h("label",{class:["radio-label"],for:t.key},t.value)])}));return()=>[o.h("div",{class:d.value,tabIndex:-1,role:"group"},f),v.value?null:o.h("div",{class:"form-errors"},p.value.map((e=>o.h("p",{class:"form-error"},e))))]}}),D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const z={control:Object,forceValidation:{type:Boolean,default:!1}};var N=o.defineComponent({name:"asNumberInput",inheritAttrs:!1,props:z,setup(e,{emit:t}){const{onInput:n,onChange:l,onFocus:r,onBlur:i,getClasses:u}=c(e,t),{isRequired:s,errorMessages:d,isPendingValidation:p}=a(e,t);return()=>[o.h("input",{id:e.control.name,name:e.control.name||"",type:e.control.type,class:u.value,value:e.control.value,min:e.control.min,max:e.control.max,step:e.control.step,disabled:e.control.disabled,placeholder:e.control.placeholder,required:s.value,readonly:e.control.readonly,autocomplete:e.control.autocomplete,ariaLabel:e.control.ariaLabel,ariaLabelledBy:e.control.ariaLabelledBy,ariaRequired:s.value,onFocus:r,onBlur:i,onInput:n,onChange:l}),p.value?null:o.h("div",{class:"form-errors"},d.value.map((e=>o.h("p",{class:"form-error"},e))))]}}),$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});const U={TextInputComponent:S,SelectInputComponent:A,TextAreaInputComponent:E,CheckboxInputComponent:d,RadioInputComponent:q,NumberInputComponent:N},H={control:{type:Object,required:!0},forceValidation:{type:Boolean,default:!1}};var X=o.defineComponent({name:"asDynamicInput",components:U,inheritAttrs:!1,props:H,setup(n,{emit:l,slots:r}){const{onFocus:a,onInput:i,onBlur:u}=c(n,l);let s;const p=o.computed((()=>({control:null==n?void 0:n.control,onChange:b,onBlur:e=>l("blur",e),onFocus:e=>l("focus",e),onValidate:e=>l("validate",e),forceValidation:n.forceValidation}))),v=o.computed((()=>{var e,o;return(null==(e=null==n?void 0:n.control)?void 0:e.label)&&"checkbox"!==(null==(o=null==n?void 0:n.control)?void 0:o.type)})),f=o.computed((()=>{var e;return"radio"===(null==(e=null==n?void 0:n.control)?void 0:e.type)})),m=o.computed((()=>{var o,l,r,a,i,u;const c=["dynamic-input","form-group",{"form-group--inline":(null==(o=null==n?void 0:n.control)?void 0:o.type)===e.FieldTypes.CHECKBOX}];return(s=null==(l=null==n?void 0:n.control)?void 0:l.customClass)&&s.constructor===Array?[...c,...null==(r=null==n?void 0:n.control)?void 0:r.customClass]:t(null==(a=null==n?void 0:n.control)?void 0:a.customClass)?[...c,null==(i=null==n?void 0:n.control)?void 0:i.customClass]:[c,null==(u=null==n?void 0:n.control)?void 0:u.customClass];var s}));function b(e){l("change",e)}return()=>{var t,l,c,b,y,h;switch(null==(t=null==n?void 0:n.control)?void 0:t.type){case null==(l=e.FieldTypes)?void 0:l.TEXT:case"email":case"password":case"url":case"color":s=o.h(S,p.value);break;case"number":s=o.h(N,p.value);break;case"select":s=o.h(A,p.value);break;case"textarea":s=o.h(E,p.value);break;case"checkbox":s=o.h(d,p.value);break;case"radio":s=o.h(q,p.value);break;case"custom-field":s=o.h("slot",{name:"customField"},r.customField({control:n.control,onChange:i,onFocus:a,onBlur:u}))}const g=o.h("span",{ariaHidden:!0,class:"form-required-star"}," *");return o.h(f.value?"fieldset":"div",{class:m.value,style:null==n?void 0:n.control.customStyles,role:f.value?void 0:"group"},[v.value?o.h(f.value?"legend":"label",{class:"form-label",for:null==(c=null==n?void 0:n.control)?void 0:c.name},[`${null==(b=null==n?void 0:n.control)?void 0:b.label}`,(null==(h=null==(y=null==n?void 0:n.control)?void 0:y.validations)?void 0:h.some((e=>"required"===e.type)))?g:""]):null,s])}}});const Z={"./components/checkbox-input/CheckboxInput.vue":p,"./components/dynamic-form/DynamicForm.vue":_,"./components/dynamic-input/DynamicInput.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X}),"./components/number-input/NumberInput.vue":$,"./components/radio-input/RadioInput.vue":D,"./components/select-input/SelectInput.vue":I,"./components/text-area-input/TextAreaInput.vue":R,"./components/text-input/TextInput.vue":w},K=Symbol("vdf");function G(){const e=o.inject(K);if(!e)throw new Error("No dynamicForms provided!!!");return e}const W=e=>null==e||""===e,Y=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,J=/^((?:(https?):\/\/)?((?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9])\.(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9])\.)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9])\.)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9]))|(?:(?:(?:\w+\.){1,2}[\w]{2,3})))(?::(\d+))?((?:\/[\w]+)*)(?:\/|(\/[\w]+\.[\w]{3,4})|(\?(?:([\w]+=[\w]+)&)*([\w]+=[\w]+))?|\?(?:(wsdl|wadl))))$/;e.CheckboxField=({value:o,...t})=>({...C(t),value:o,type:e.FieldTypes.CHECKBOX}),e.ColorField=({value:o,...t})=>({...C(t),value:o,type:e.FieldTypes.COLOR}),e.CustomField=({value:o,...t})=>({...C(t),value:o,type:e.FieldTypes.CUSTOM}),e.EmailField=({value:o,...t})=>({...C(t),value:o,type:e.FieldTypes.EMAIL}),e.FieldBase=C,e.FieldControl=j,e.NumberField=({value:o=null,min:t=0,max:n=100,step:l=1,...r})=>({...C(r),value:o,min:t,max:n,step:l,type:e.FieldTypes.NUMBER}),e.PasswordField=({value:o,...t})=>({...C(t),value:o,type:e.FieldTypes.PASSWORD}),e.RadioField=({options:o,value:t,...n})=>({...C(n),value:t,options:o,type:e.FieldTypes.RADIO}),e.SelectField=({options:o=[],value:t,optionValue:n="value",optionLabel:l="label",...r})=>({...C(r),value:t,options:o,optionValue:n,optionLabel:l,type:e.FieldTypes.SELECT}),e.TextAreaField=({value:o,cols:t=20,rows:n=3,...l})=>({...C(l),value:o,cols:t,rows:n,type:e.FieldTypes.TEXTAREA}),e.TextField=({value:o,...t})=>({...C(t),value:o,type:e.FieldTypes.TEXT}),e.UrlField=({value:o,...t})=>({...C(t),value:o,type:e.FieldTypes.URL}),e.Validator=({validator:e,text:o})=>({type:e(void 0)?Object.keys(e(void 0))[0]:"pattern",validator:e,text:o}),e.ValidatorTrigger=x,e.createDynamicForms=function(e){const o={options:e,install(e){e.provide(K,o),Object.entries(Z).forEach((([o,t])=>{const n=o.split("/").pop().replace(/\.\w+$/,"");e.component(n,t.default)})),Object.defineProperty(e,"__VUE_DYNAMIC_FORMS_SYMBOL__",{get:()=>K})}};return o},e.dynamicFormsSymbol=K,e.email=e=>W(e)?{email:null}:{email:!Y.test(`${e}`)||null},e.isEmptyInputValue=W,e.max=e=>o=>{if(W(o)||W(e))return{max:null};const t=parseFloat(`${o}`);return{max:!isNaN(t)&&t>e?{max:e,actual:+t}:null}},e.maxLength=e=>o=>{if(W(o))return{maxLength:null};const t=o?`${o}`.length:0;return{maxLength:t>e?{requiredLength:e,actualLength:t}:null}},e.min=e=>o=>{if(W(o)||W(e))return{min:null};const t=parseFloat(`${o}`);return{min:!isNaN(t)&&t<e?{min:e,actual:+t}:null}},e.minLength=e=>o=>{if(W(o))return{minLength:null};const t=o?`${o}`.length:0;return{minLength:t<e?{requiredLength:e,actualLength:t}:null}},e.pattern=e=>{if(!e)return null;let o,t;return"string"==typeof e?(t="","^"!==e.charAt(0)&&(t+="^"),t+=e,"$"!==e.charAt(e.length-1)&&(t+="$"),o=new RegExp(t)):(t=e,o=e),e=>{if(W(e))return{pattern:null};const n=e;return{pattern:o.test(n)?null:{requiredPattern:t,actualValue:e}}}},e.required=e=>({required:!!W(e)||null}),e.url=e=>W(e)?{url:null}:{url:!J.test(`${e}`)||null},e.useDynamicForms=G,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
