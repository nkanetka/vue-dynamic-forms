"use strict";
/*!
 * @asigloo/vue-dynamic-forms v3.x.x
 * (c) 2021 Alvaro Saburido
 * @license MIT
 */Object.defineProperty(exports,"__esModule",{value:!0}),exports[Symbol.toStringTag]="Module";var e=require("vue");const o=e=>!!e&&e.constructor===Object,t=e=>Object.keys(e).filter((o=>null!=e[o])).reduce(((o,r)=>"object"==typeof e[r]?{...o,[r]:t(e[r])}:{...o,[r]:e[r]}),{}),r=e=>{let o,t,n;if("object"!=typeof e||null===e)return e;for(n in o=Array.isArray(e)?[]:{},e)t=e[n],o[n]=r(t);return o};function n(o,r){const n=e.ref(!1),l=e.computed((()=>o.control.validations.some((e=>"required"===e.type)))),a=e.computed((()=>o.control.validations.length>0));async function i(e=!1){if(e||(o.control.touched||o.control.dirty)&&a.value){let e={};const l=[],a=[];o.control.validations.forEach((e=>{const t=e.validator(o.control.value);"Promise"===t.constructor.name?a.push({validation:e.validator,text:e.text}):l.push({validation:t,text:e.text})})),a.length>0&&(n.value=!0,Promise.all(a.map((async({validation:e,text:t})=>({validation:await e(o.control.value),text:t})))).then((l=>{l.forEach((({validation:o,text:t})=>{const[r,n]=Object.entries(o)[0];e[r]=n?{value:n,text:t}:null})),n.value=!1,r("validate",{name:o.control.name,errors:e,valid:0===Object.keys(t(e)).length})}))),l.forEach((({validation:o,text:t})=>{if(o){const[r,n]=Object.entries(o)[0];e[r]=n?{value:n,text:t}:null}})),r("validate",{name:o.control.name,errors:e,valid:0===Object.keys(t(e)).length})}}const u=e.computed((()=>{var e;const t=Object.values((null==(e=o.control)?void 0:e.errors)||{});return t.length>0?t.map((e=>e.text)):[]})),s=e.computed((()=>[{"form-control--success":!n.value&&a.value&&o.control.errors&&o.control.valid&&o.control.dirty&&o.control.touched},{"form-control--error":!n.value&&!o.control.valid,"form-control--validating":n.value}])),c=e.computed((()=>[{"checkbox-group--success":!n.value&&a.value&&o.control.errors&&o.control.valid&&o.control.dirty&&o.control.touched},{"checkbox-group--error":!n.value&&!o.control.valid,"checkbox-group--validating":n.value}])),d=e.computed((()=>[{"radio-group--success":!n.value&&a.value&&o.control.errors&&o.control.valid&&o.control.dirty&&o.control.touched},{"radio-group--error":!n.value&&!o.control.valid,"radio-group--validating":n.value}]));return e.watch((()=>o.forceValidation),(e=>{e&&i(e)})),{isPendingValidation:n,validate:i,getValidationClasses:s,getCheckboxValidationClasses:c,getRadioValidationClasses:d,isRequired:l,requiresValidation:a,errorMessages:u}}var l,a;function i(o,t){const{validate:r,getValidationClasses:l,getCheckboxValidationClasses:a,getRadioValidationClasses:i}=n(o,t);const u=e.computed((()=>["form-control",...l.value])),s=e.computed((()=>["checkbox-group",...a.value])),c=e.computed((()=>["radio-group",...i.value]));return e.watch((()=>{var e;return null==(e=null==o?void 0:o.control)?void 0:e.value}),((e,r)=>{e!==r&&t("change",{name:o.control.name,value:o.control.value})}),{immediate:!0}),{validate:r,onFocus:function(){t("focus",{name:o.control.name})},onInput:function(e){const n=e.target;e.stopImmediatePropagation(),o.control&&(console.log(o.control),console.log(o.control.validationTrigger),(!o.control.valid&&o.control.validationTrigger.type===exports.ValidationTriggerTypes.BLUR||o.control.validationTrigger.type===exports.ValidationTriggerTypes.CHANGE&&n.value.length>=o.control.validationTrigger.threshold)&&(console.log("validating"),r()),t("change",{name:o.control.name,value:n.value}))},onChange:function(e){e.stopImmediatePropagation(),e.preventDefault()},onBlur:function(){t("blur",{name:o.control.name}),o.control.validationTrigger.type===exports.ValidationTriggerTypes.BLUR&&r()},onCheck:function(e){const r=e.target;o.control&&(e.stopImmediatePropagation(),t("change",{name:o.control.name,value:r.checked}))},getClasses:u,getCheckboxClasses:s,getRadioClasses:c}}exports.ValidationTriggerTypes=void 0,(l=exports.ValidationTriggerTypes||(exports.ValidationTriggerTypes={})).BLUR="blur",l.CHANGE="change",exports.FieldTypes=void 0,(a=exports.FieldTypes||(exports.FieldTypes={})).TEXT="text",a.TEXTAREA="textarea",a.SELECT="select",a.NUMBER="number",a.EMAIL="email",a.URL="url",a.PASSWORD="password",a.CHECKBOX="checkbox",a.RADIO="radio",a.CUSTOM="custom-field",a.COLOR="color";const u={control:Object,forceValidation:{type:Boolean,default:!1}};var s=e.defineComponent({name:"asCheckboxInput",inheritAttrs:!1,props:u,setup(o,{emit:t}){const{onCheck:r,onFocus:l,onBlur:a,getCheckboxClasses:u}=i(o,t),{errorMessages:s,isPendingValidation:c,isRequired:d}=n(o,t),p=e.h("span",{ariaHidden:!0,class:"form-required-star"}," *"),v=[e.h("input",{name:o.control.name||"",type:o.control.type,id:o.control.name,disabled:o.control.disabled,class:"checkbox-control",value:o.control.value,checked:o.control.value,required:d.value,readonly:o.control.readonly,ariaRequired:d.value,ariaLabel:o.control.ariaLabel,ariaLabelledBy:o.control.ariaLabelledBy,onFocus:l,onBlur:a,onChange:r}),e.h("label",{class:["checkbox-label"],for:o.control.name},[o.control.label,d.value?p:""])];return()=>[e.h("div",{class:u.value,tabIndex:-1,role:"group"},v),c.value?null:e.h("div",{class:"form-errors"},s.value.map((o=>e.h("p",{class:"form-error"},o))))]}}),c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:s}),d=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,{}),p={exports:{}},v={};!function(e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.isDate=function(e){return e instanceof Date},e.isEmpty=function(e){return 0===Object.keys(e).length};var r=e.isObject=function(e){return null!=e&&"object"===(void 0===e?"undefined":t(e))};e.properObject=function(e){return r(e)&&!e.hasOwnProperty?o({},e):e}}(v),function(e,o,t){function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}Object.defineProperty(o,"__esModule",{value:!0});var n=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l=function e(o,l){if(o===l)return{};if(!(0,t.isObject)(o)||!(0,t.isObject)(l))return l;var a=(0,t.properObject)(o),i=(0,t.properObject)(l),u=Object.keys(a).reduce((function(e,o){return i.hasOwnProperty(o)?e:n({},e,r({},o,void 0))}),{});return(0,t.isDate)(a)||(0,t.isDate)(i)?a.valueOf()==i.valueOf()?{}:i:Object.keys(i).reduce((function(o,l){if(!a.hasOwnProperty(l))return n({},o,r({},l,i[l]));var u=e(a[l],i[l]);return(0,t.isObject)(u)&&(0,t.isEmpty)(u)&&!(0,t.isDate)(u)?o:n({},o,r({},l,u))}),u)};o.default=l,e.exports=o.default}(p,p.exports,v);var m={exports:{}};!function(e,o,t){function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}Object.defineProperty(o,"__esModule",{value:!0});var n=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l=function e(o,l){if(o===l||!(0,t.isObject)(o)||!(0,t.isObject)(l))return{};var a=(0,t.properObject)(o),i=(0,t.properObject)(l);return Object.keys(i).reduce((function(o,l){if(a.hasOwnProperty(l)){var u=e(a[l],i[l]);return(0,t.isObject)(u)&&(0,t.isEmpty)(u)?o:n({},o,r({},l,u))}return n({},o,r({},l,i[l]))}),{})};o.default=l,e.exports=o.default}(m,m.exports,v);var f={exports:{}};!function(e,o,t){function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}Object.defineProperty(o,"__esModule",{value:!0});var n=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l=function e(o,l){if(o===l||!(0,t.isObject)(o)||!(0,t.isObject)(l))return{};var a=(0,t.properObject)(o),i=(0,t.properObject)(l);return Object.keys(a).reduce((function(o,l){if(i.hasOwnProperty(l)){var u=e(a[l],i[l]);return(0,t.isObject)(u)&&(0,t.isEmpty)(u)?o:n({},o,r({},l,u))}return n({},o,r({},l,void 0))}),{})};o.default=l,e.exports=o.default}(f,f.exports,v);var b={exports:{}};!function(e,o,t){function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}Object.defineProperty(o,"__esModule",{value:!0});var n=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l=function e(o,l){if(o===l)return{};if(!(0,t.isObject)(o)||!(0,t.isObject)(l))return l;var a=(0,t.properObject)(o),i=(0,t.properObject)(l);return(0,t.isDate)(a)||(0,t.isDate)(i)?a.valueOf()==i.valueOf()?{}:i:Object.keys(i).reduce((function(o,l){if(a.hasOwnProperty(l)){var u=e(a[l],i[l]);return(0,t.isObject)(u)&&(0,t.isEmpty)(u)&&!(0,t.isDate)(u)?o:n({},o,r({},l,u))}return o}),{})};o.default=l,e.exports=o.default}(b,b.exports,v);var y={exports:{}};!function(e,o,t,r,n){Object.defineProperty(o,"__esModule",{value:!0});var l=u(t),a=u(r),i=u(n);function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e,o){return{added:(0,l.default)(e,o),deleted:(0,a.default)(e,o),updated:(0,i.default)(e,o)}};o.default=s,e.exports=o.default}(y,y.exports,m.exports,f.exports,b.exports),function(e,o,t,r,n,l){Object.defineProperty(e,"__esModule",{value:!0}),e.detailedDiff=e.updatedDiff=e.deletedDiff=e.diff=e.addedDiff=void 0;var a=d(o),i=d(t),u=d(r),s=d(n),c=d(l);function d(e){return e&&e.__esModule?e:{default:e}}e.addedDiff=i.default,e.diff=a.default,e.deletedDiff=u.default,e.updatedDiff=s.default,e.detailedDiff=c.default}(d,p.exports,m.exports,f.exports,b.exports,y.exports);const h={dirty:!1,touched:!1,valid:!0,errors:null},g=({validations:e=[],label:o=null,ariaLabel:t=null,ariaLabelledBy:r=null,customClass:n=null,customStyles:l=null,disabled:a=!1,placeholder:i=null,autocomplete:u=null,readonly:s=!1,validationTrigger:c=O({type:exports.ValidationTriggerTypes.BLUR,threshold:0})})=>({validations:e,label:o,ariaLabel:t,ariaLabelledBy:r,customClass:n,customStyles:l,disabled:a,placeholder:i,autocomplete:u,readonly:s,validationTrigger:c}),x=({name:e,type:o,...t})=>({...t,name:e,type:o,...h}),O=({type:e,threshold:o})=>({type:e,threshold:o});const C=e=>e();function j(e,o=200){return function(e,o){return function(...t){e((()=>o.apply(this,t)),{fn:o,thisArg:this,args:t})}}(function(e){if(e<=0)return C;let o;return t=>{o&&clearTimeout(o),o=setTimeout(t,e)}}(o),e)}const T={form:{type:Object,required:!0}};var B=e.defineComponent({name:"asDynamicForm",props:T,setup(o,n){const{options:l}=Z(),{controls:a,valueChange:i,formValues:u,handleSubmit:s,isValid:c,errors:p,deNormalizedScopedSlots:v,normalizedControls:m,formattedOptions:f,onBlur:b,onValidate:y,forceValidation:h,detectChanges:g,onOptionsChanged:O,validateAll:C,resetForm:T}=function(o,n,l){let a=r(e.toRaw(o.fields));const i=e.ref([]),u=e.ref({resetAfterSubmit:!0,...null==l?void 0:l.form,...null==o?void 0:o.options}),s=e.ref(!1),c=e.computed((()=>Object.keys(n.slots))),p=e.computed((()=>{const e={};return i.value.forEach((o=>{e[o.name]=o})),e})),v=e.computed((()=>!i.value.some((e=>!e.valid)))),m=e.computed((()=>t(i.value.reduce(((e,o)=>{const t={};return t[o.name]=o.type===exports.FieldTypes.NUMBER?parseFloat(`${o.value}`):o.value,{...e,...t}}),{})))),f=e.computed((()=>i.value?i.value.reduce(((e,o)=>{if((Object.keys(o.errors||{})||[]).length>0){const t={};return t[o.name]=o.errors,{...e,...t}}return e}),{}):{})),b=e.computed((()=>{const e=u.value;if(e){const{customClass:o,customStyles:t,method:r,netlify:n,netlifyHoneypot:l,autocomplete:a}=e;return{class:o,style:t,method:r,"data-netlify":n,"data-netlify-honeypot":l,autocomplete:a?"on":"off"}}}));function y(e=!1){const t=Object.entries(null==o?void 0:o.fields).map((([o,t])=>x(e?{...t,name:o,value:t.type!==exports.FieldTypes.CHECKBOX&&null}:{...t,name:o})))||[];o.fieldOrder?i.value=t.sort(((e,t)=>o.fieldOrder.indexOf(e.name)-o.fieldOrder.indexOf(t.name))):i.value=t,e&&g(m.value)}function h(e){return i.value.find((o=>o.name===e))}const g=j((function(e){console.log("emitting change"),n.emit("change",e)}),300);function O(){y(!0),s.value=!1}function C(){s.value=!0}return e.onMounted((()=>{y()})),{controls:i,mapControls:y,valueChange:function(e){const o=h(e.name);o&&(o.value=e.value,o.dirty=!0),g(m.value)},formValues:m,formOptions:u,handleSubmit:async function(){C(),await e.nextTick(),v.value?(n.emit("submitted",m.value),u.value.resetAfterSubmit&&O()):n.emit("error",f.value)},isValid:v,errors:f,deNormalizedScopedSlots:c,normalizedControls:p,formattedOptions:b,onBlur:function({name:e}){const o=h(e);o&&(o.touched=!0)},onValidate:function({name:e,errors:o,valid:r}){const n=h(e);n&&(n.errors=t({...n.errors,...o}),n.valid=r)},forceValidation:s,validateAll:C,findControlByName:h,resetForm:O,detectChanges:function(o){const t=d.diff(a,r(o));Object.entries(t).forEach((([e,o])=>{const t=h(e);t&&Object.entries(o).forEach((([e,o])=>{"options"===e||"validations"===e?Object.entries(o).forEach((([o,r])=>{t[e][o]={...t[e][o],...r}})):t[e]=o}))})),a=r(e.toRaw(o))},onOptionsChanged:function(e){Object.assign(u.value,e)}}}(o.form,n,l||{});return e.watch((()=>o.form.fields),(e=>{g(e)}),{deep:!0}),e.watch((()=>o.form.fields),(e=>{O(e)}),{deep:!0}),{controls:a,valueChange:i,formValues:u,handleSubmit:s,isValid:c,errors:p,deNormalizedScopedSlots:v,normalizedControls:m,formattedOptions:f,onBlur:b,onValidate:y,forceValidation:h,validateAll:C,resetForm:T}}});B.render=function(o,t,r,n,l,a){const i=e.resolveComponent("dynamic-input");return e.openBlock(),e.createBlock("form",e.mergeProps({class:"dynamic-form",novalidate:"",id:o.form.id,name:o.form.id},o.formattedOptions,{onSubmit:t[1]||(t[1]=e.withModifiers(((...e)=>o.handleSubmit&&o.handleSubmit(...e)),["prevent"]))}),[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(o.controls,(t=>(e.openBlock(),e.createBlock(i,{key:t.name,control:t,forceValidation:o.forceValidation,onChange:o.valueChange,onBlur:o.onBlur,onValidate:o.onValidate},{customField:e.withCtx((t=>[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(o.deNormalizedScopedSlots,(r=>(e.openBlock(),e.createBlock("div",{key:r,class:"custom-form-wrapper"},[t.control.name===r?e.renderSlot(o.$slots,r,{key:0,control:o.normalizedControls[r],onChange:t.onChange,onBlur:t.onBlur}):e.createCommentVNode("",!0)])))),128))])),_:2},1032,["control","forceValidation","onChange","onBlur","onValidate"])))),128))],16,["id","name"])};var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const k={control:Object,forceValidation:{type:Boolean,default:!1}};var _=e.defineComponent({name:"asTextInput",inheritAttrs:!1,props:k,setup(o,{emit:t}){const{onInput:r,onChange:l,onFocus:a,onBlur:u,getClasses:s}=i(o,t),{isRequired:c,errorMessages:d,isPendingValidation:p}=n(o,t);return()=>[e.h("input",{id:o.control.name,name:o.control.name||"",type:o.control.type,class:s.value,value:o.control.value,disabled:o.control.disabled,placeholder:o.control.placeholder,required:c.value,readonly:o.control.readonly,autocomplete:o.control.autocomplete,ariaRequired:c.value,ariaLabel:o.control.ariaLabel,ariaLabelledBy:o.control.ariaLabelledBy,onFocus:a,onBlur:u,onInput:r,onChange:l}),p.value?null:e.h("div",{class:"form-errors"},d.value.map((o=>e.h("p",{class:"form-error"},o))))]}}),S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_});const V={control:Object,forceValidation:{type:Boolean,default:!1}};var w=e.defineComponent({name:"asSelectInput",inheritAttrs:!1,props:V,setup:(t,{emit:r})=>()=>{var l;const{onInput:a,onChange:u,onFocus:s,onBlur:c,getClasses:d}=i(t,r),{isRequired:p,errorMessages:v,isPendingValidation:m}=n(t,r),f=e.computed((()=>{var e,r,n;return o(null==(e=null==t?void 0:t.control)?void 0:e.options)?Object.values(null==(r=null==t?void 0:t.control)?void 0:r.options):null==(n=null==t?void 0:t.control)?void 0:n.options})),b=null==(l=null==f?void 0:f.value)?void 0:l.map((o=>e.h("option",{key:o[t.control.optionValue],value:o[t.control.optionValue],disabled:o.disabled},o[t.control.optionLabel])));return[e.h("select",{id:t.control.name,name:t.control.name||"",class:d.value,value:t.control.value,disabled:t.control.disabled,placeholder:t.control.placeholder,required:p.value,readonly:t.control.readonly,ariaLabel:t.control.ariaLabel,ariaLabelledBy:t.control.ariaLabelledBy,ariaRequired:p.value,onFocus:s,onBlur:c,onInput:a,onChange:u},b),m.value?null:e.h("div",{class:"form-errors"},v.value.map((o=>e.h("p",{class:"form-error"},o))))]}}),L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const A={control:Object,forceValidation:{type:Boolean,default:!1}};var I=e.defineComponent({name:"asTextAreaInput",inheritAttrs:!1,props:A,setup(o,{emit:t}){const{onInput:r,onChange:l,onFocus:a,onBlur:u,getClasses:s}=i(o,t),{isRequired:c,errorMessages:d,isPendingValidation:p}=n(o,t);return()=>[e.h("textarea",{id:o.control.name,name:o.control.name||"",class:s.value,value:o.control.value,rows:o.control.rows,cols:o.control.cols,disabled:o.control.disabled,placeholder:o.control.placeholder,required:c.value,autocomplete:o.control.autocomplete,readonly:o.control.readonly,ariaLabel:o.control.ariaLabel,ariaLabelledBy:o.control.ariaLabelledBy,ariaRequired:c.value,onFocus:a,onBlur:u,onInput:r,onChange:l}),p.value?null:e.h("div",{class:"form-errors"},d.value.map((o=>e.h("p",{class:"form-error"},o))))]}}),P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const E={control:Object,forceValidation:{type:Boolean,default:!1}};var R=e.defineComponent({name:"asRadioInput",inheritAttrs:!1,props:E,setup(o,{emit:t}){var r,l;const{onCheck:a,onInput:u,onFocus:s,onBlur:c,getRadioClasses:d}=i(o,t),{errorMessages:p,isPendingValidation:v}=n(o,t),m=null==(l=null==(r=null==o?void 0:o.control)?void 0:r.options)?void 0:l.map((t=>{var r,n,l;return e.h("div",{class:"radio-input"},[e.h("input",{name:(null==(r=null==o?void 0:o.control)?void 0:r.name)||"",type:null==(n=null==o?void 0:o.control)?void 0:n.type,id:t.key,disabled:t.disabled||(null==(l=null==o?void 0:o.control)?void 0:l.disabled),checked:o.control.value===t.key,class:["radio-control"],value:t.key,onFocus:s,onBlur:c,onInput:u,onCheck:a}),e.h("label",{class:["radio-label"],for:t.key},t.value)])}));return()=>[e.h("div",{class:d.value,tabIndex:-1,role:"group"},m),v.value?null:e.h("div",{class:"form-errors"},p.value.map((o=>e.h("p",{class:"form-error"},o))))]}}),M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const q={control:Object,forceValidation:{type:Boolean,default:!1}};var D=e.defineComponent({name:"asNumberInput",inheritAttrs:!1,props:q,setup(o,{emit:t}){const{onInput:r,onChange:l,onFocus:a,onBlur:u,getClasses:s}=i(o,t),{isRequired:c,errorMessages:d,isPendingValidation:p}=n(o,t);return()=>[e.h("input",{id:o.control.name,name:o.control.name||"",type:o.control.type,class:s.value,value:o.control.value,min:o.control.min,max:o.control.max,step:o.control.step,disabled:o.control.disabled,placeholder:o.control.placeholder,required:c.value,readonly:o.control.readonly,autocomplete:o.control.autocomplete,ariaLabel:o.control.ariaLabel,ariaLabelledBy:o.control.ariaLabelledBy,ariaRequired:c.value,onFocus:a,onBlur:u,onInput:r,onChange:l}),p.value?null:e.h("div",{class:"form-errors"},d.value.map((o=>e.h("p",{class:"form-error"},o))))]}}),z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const N={TextInputComponent:_,SelectInputComponent:w,TextAreaInputComponent:I,CheckboxInputComponent:s,RadioInputComponent:R,NumberInputComponent:D},$={control:{type:Object,required:!0},forceValidation:{type:Boolean,default:!1}};var U=e.defineComponent({name:"asDynamicInput",components:N,inheritAttrs:!1,props:$,setup(t,{emit:r,slots:n}){const{onFocus:l,onInput:a,onBlur:u}=i(t,r);let c;const d=e.computed((()=>({control:null==t?void 0:t.control,onChange:f,onBlur:e=>r("blur",e),onFocus:e=>r("focus",e),onValidate:e=>r("validate",e),forceValidation:t.forceValidation}))),p=e.computed((()=>{var e,o;return(null==(e=null==t?void 0:t.control)?void 0:e.label)&&"checkbox"!==(null==(o=null==t?void 0:t.control)?void 0:o.type)})),v=e.computed((()=>{var e;return"radio"===(null==(e=null==t?void 0:t.control)?void 0:e.type)})),m=e.computed((()=>{var e,r,n,l,a,i;const u=["dynamic-input","form-group",{"form-group--inline":(null==(e=null==t?void 0:t.control)?void 0:e.type)===exports.FieldTypes.CHECKBOX}];return(s=null==(r=null==t?void 0:t.control)?void 0:r.customClass)&&s.constructor===Array?[...u,...null==(n=null==t?void 0:t.control)?void 0:n.customClass]:o(null==(l=null==t?void 0:t.control)?void 0:l.customClass)?[...u,null==(a=null==t?void 0:t.control)?void 0:a.customClass]:[u,null==(i=null==t?void 0:t.control)?void 0:i.customClass];var s}));function f(e){r("change",e)}return()=>{var o,r,i,f,b,y;switch(null==(o=null==t?void 0:t.control)?void 0:o.type){case null==(r=exports.FieldTypes)?void 0:r.TEXT:case"email":case"password":case"url":case"color":c=e.h(_,d.value);break;case"number":c=e.h(D,d.value);break;case"select":c=e.h(w,d.value);break;case"textarea":c=e.h(I,d.value);break;case"checkbox":c=e.h(s,d.value);break;case"radio":c=e.h(R,d.value);break;case"custom-field":c=e.h("slot",{name:"customField"},n.customField({control:t.control,onChange:a,onFocus:l,onBlur:u}))}const h=e.h("span",{ariaHidden:!0,class:"form-required-star"}," *");return e.h(v.value?"fieldset":"div",{class:m.value,style:null==t?void 0:t.control.customStyles,role:v.value?void 0:"group"},[p.value?e.h(v.value?"legend":"label",{class:"form-label",for:null==(i=null==t?void 0:t.control)?void 0:i.name},[`${null==(f=null==t?void 0:t.control)?void 0:f.label}`,(null==(y=null==(b=null==t?void 0:t.control)?void 0:b.validations)?void 0:y.some((e=>"required"===e.type)))?h:""]):null,c])}}});const H={"./components/checkbox-input/CheckboxInput.vue":c,"./components/dynamic-form/DynamicForm.vue":F,"./components/dynamic-input/DynamicInput.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U}),"./components/number-input/NumberInput.vue":z,"./components/radio-input/RadioInput.vue":M,"./components/select-input/SelectInput.vue":L,"./components/text-area-input/TextAreaInput.vue":P,"./components/text-input/TextInput.vue":S},X=Symbol("vdf");function Z(){const o=e.inject(X);if(!o)throw new Error("No dynamicForms provided!!!");return o}const K=e=>null==e||""===e,G=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,W=/^((?:(https?):\/\/)?((?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9])\.(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9])\.)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9])\.)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9][0-9]|[0-9]))|(?:(?:(?:\w+\.){1,2}[\w]{2,3})))(?::(\d+))?((?:\/[\w]+)*)(?:\/|(\/[\w]+\.[\w]{3,4})|(\?(?:([\w]+=[\w]+)&)*([\w]+=[\w]+))?|\?(?:(wsdl|wadl))))$/;exports.CheckboxField=({value:e,...o})=>({...g(o),value:e,type:exports.FieldTypes.CHECKBOX}),exports.ColorField=({value:e,...o})=>({...g(o),value:e,type:exports.FieldTypes.COLOR}),exports.CustomField=({value:e,...o})=>({...g(o),value:e,type:exports.FieldTypes.CUSTOM}),exports.EmailField=({value:e,...o})=>({...g(o),value:e,type:exports.FieldTypes.EMAIL}),exports.FieldBase=g,exports.FieldControl=x,exports.NumberField=({value:e=null,min:o=0,max:t=100,step:r=1,...n})=>({...g(n),value:e,min:o,max:t,step:r,type:exports.FieldTypes.NUMBER}),exports.PasswordField=({value:e,...o})=>({...g(o),value:e,type:exports.FieldTypes.PASSWORD}),exports.RadioField=({options:e,value:o,...t})=>({...g(t),value:o,options:e,type:exports.FieldTypes.RADIO}),exports.SelectField=({options:e=[],value:o,optionValue:t="value",optionLabel:r="label",...n})=>({...g(n),value:o,options:e,optionValue:t,optionLabel:r,type:exports.FieldTypes.SELECT}),exports.TextAreaField=({value:e,cols:o=20,rows:t=3,...r})=>({...g(r),value:e,cols:o,rows:t,type:exports.FieldTypes.TEXTAREA}),exports.TextField=({value:e,...o})=>({...g(o),value:e,type:exports.FieldTypes.TEXT}),exports.UrlField=({value:e,...o})=>({...g(o),value:e,type:exports.FieldTypes.URL}),exports.Validator=({validator:e,text:o})=>({type:e(void 0)?Object.keys(e(void 0))[0]:"pattern",validator:e,text:o}),exports.ValidatorTrigger=O,exports.createDynamicForms=function(e){const o={options:e,install(e){e.provide(X,o),Object.entries(H).forEach((([o,t])=>{const r=o.split("/").pop().replace(/\.\w+$/,"");e.component(r,t.default)})),Object.defineProperty(e,"__VUE_DYNAMIC_FORMS_SYMBOL__",{get:()=>X})}};return o},exports.dynamicFormsSymbol=X,exports.email=e=>K(e)?{email:null}:{email:!G.test(`${e}`)||null},exports.isEmptyInputValue=K,exports.max=e=>o=>{if(K(o)||K(e))return{max:null};const t=parseFloat(`${o}`);return{max:!isNaN(t)&&t>e?{max:e,actual:+t}:null}},exports.maxLength=e=>o=>{if(K(o))return{maxLength:null};const t=o?`${o}`.length:0;return{maxLength:t>e?{requiredLength:e,actualLength:t}:null}},exports.min=e=>o=>{if(K(o)||K(e))return{min:null};const t=parseFloat(`${o}`);return{min:!isNaN(t)&&t<e?{min:e,actual:+t}:null}},exports.minLength=e=>o=>{if(K(o))return{minLength:null};const t=o?`${o}`.length:0;return{minLength:t<e?{requiredLength:e,actualLength:t}:null}},exports.pattern=e=>{if(!e)return null;let o,t;return"string"==typeof e?(t="","^"!==e.charAt(0)&&(t+="^"),t+=e,"$"!==e.charAt(e.length-1)&&(t+="$"),o=new RegExp(t)):(t=e,o=e),e=>{if(K(e))return{pattern:null};const r=e;return{pattern:o.test(r)?null:{requiredPattern:t,actualValue:e}}}},exports.required=e=>({required:!!K(e)||null}),exports.url=e=>K(e)?{url:null}:{url:!W.test(`${e}`)||null},exports.useDynamicForms=Z;
