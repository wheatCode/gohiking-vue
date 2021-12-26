(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0923b1f2"],{"0798":function(t,e,i){"use strict";var n=i("5530"),s=i("ade3"),o=(i("caad"),i("0c18"),i("10d2")),a=i("afdd"),r=i("9d26"),c=i("f2e7"),l=i("7560"),u=i("2b0e"),d=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=i("58df"),p=i("d9bd");e["a"]=Object(h["a"])(o["a"],c["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(r["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(r["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(n["a"])(Object(n["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,i){},"615b":function(t,e,i){},"627d":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return c}));var n=i("b0af"),s=i("80d2"),o=Object(s["i"])("v-card__actions"),a=Object(s["i"])("v-card__subtitle"),r=Object(s["i"])("v-card__text"),c=Object(s["i"])("v-card__title");n["a"]},"9a0f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"px-5 pb-5",attrs:{elevation:"0"}},[i("v-card-title",{staticClass:"d-block text-center mt-5"},[i("h1",{staticClass:"font-weight-bold text-h5"},[t._v("輸入驗證碼")])]),i("v-card-text",{staticClass:"pa-0"},[t._v("\n    已把驗證碼發至您的信箱"+t._s(t.$route.query.email)+"，請確認您的信箱及輸入4位數驗證碼。\n  ")]),t.$store.state.error?i("v-alert",{staticClass:"mx-3",attrs:{color:"red darken-2",dark:""},domProps:{innerHTML:t._s(t.$store.state.error)}}):t._e(),t.$store.state.success?i("v-alert",{staticClass:"mx-3",attrs:{color:"success",dark:""},domProps:{innerHTML:t._s(t.$store.state.success)}}):t._e(),i("v-otp-input",{staticClass:"px-15",attrs:{length:"4",plain:"",color:"success",type:"number"},model:{value:t.verifications,callback:function(e){t.verifications=e},expression:"verifications"}}),i("v-card-actions",[i("v-btn",{attrs:{block:"",elevation:"0",color:"success","x-large":"",loading:t.loading,disabled:t.loading},on:{click:t.submit}},[t._v("繼續")]),i("br")],1),i("v-card-actions",[i("v-btn",{attrs:{block:"",outlined:"",elevation:"0",color:"success","x-large":"",loading:t.loading,disabled:t.loading},on:{click:t.toVerification}},[t._v("重新發送驗證碼")]),i("br")],1)],1)},s=[],o=i("1da1"),a=i("2909"),r=(i("96cf"),i("d3b7"),i("159b"),{name:"SuccessPage",data:function(){return{verifications:null,loading:!1,verification:{email:null,verificationCode0:null,verificationCode1:null,verificationCode2:null,verificationCode3:null}}},methods:{submit:function(){var t=this;this.verifications&&(Object(a["a"])(this.verifications).forEach((function(e,i){t.verification["verificationCode".concat(i)]=e})),this.confirm())},confirm:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.postApi("/api/password/confirm",{email:t.$route.query.email,verificationCode0:t.verifications[0]||null,verificationCode1:t.verifications[1]||null,verificationCode2:t.verifications[2]||null,verificationCode3:t.verifications[3]||null}).then((function(e){if(e){var i=e.data,n=i.message,s=i.token;t.$store.dispatch("setSuccess",n),t.$cookies.set("gohiking_token",s),setTimeout((function(){t.$router.push({name:"ResetPwd"})}),1e3)}}));case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},toVerification:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.postApi("/api/password/forget",{email:t.$route.query.email}).then((function(e){if(e){var i=e.data;t.$store.dispatch("setSuccess",i.message)}}));case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()}}}),c=r,l=i("2877"),u=i("6544"),d=i.n(u),h=i("0798"),p=i("8336"),f=i("b0af"),v=i("99d9"),g=i("5530"),m=(i("a9e3"),i("ac1f"),i("1276"),i("a630"),i("3ca3"),i("99af"),i("a15b"),i("25f0"),i("caad"),i("4ff9"),i("627d"),i("c37a")),b=i("8654"),C=i("5607"),y=i("80d2"),$=i("d9bd"),_=i("58df"),k=Object(_["a"])(m["a"]),x=k.extend().extend({name:"v-otp-input",directives:{ripple:C["a"]},inheritAttrs:!1,props:{length:{type:[Number,String],default:6},type:{type:String,default:"text"},plain:Boolean},data:function(){return{badInput:!1,initialValue:null,isBooted:!1,otp:[]}},computed:{outlined:function(){return!this.plain},classes:function(){return Object(g["a"])(Object(g["a"])(Object(g["a"])({},m["a"].options.computed.classes.call(this)),b["a"].options.computed.classes.call(this)),{},{"v-otp-input--plain":this.plain})},isDirty:function(){return m["a"].options.computed.isDirty.call(this)||this.badInput}},watch:{isFocused:"updateValue",value:function(t){this.lazyValue=t}},created:function(){var t;this.$attrs.hasOwnProperty("browser-autocomplete")&&Object($["a"])("browser-autocomplete","autocomplete",this),this.otp=(null==(t=this.internalValue)?void 0:t.split(""))||[]},mounted:function(){var t=this;requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{focus:function(t,e){this.onFocus(t,e||0)},genInputSlot:function(t){var e=this;return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(y["g"])(this.height)},on:{click:function(){return e.onClick(t)},mousedown:function(i){return e.onMouseDown(i,t)},mouseup:function(i){return e.onMouseUp(i,t)}}}),[this.genDefaultSlot(t)])},genControl:function(t){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(t)])},genDefaultSlot:function(t){return[this.genFieldset(),this.genTextFieldSlot(t)]},genContent:function(){var t=this;return Array.from({length:+this.length},(function(e,i){return t.$createElement("div",t.setTextColor(t.validationState,{staticClass:"v-input",class:t.classes}),[t.genControl(i)])}))},genFieldset:function(){return this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()])},genLegend:function(){var t=this.$createElement("span",{domProps:{innerHTML:"&#8203;"}});return this.$createElement("legend",{style:{width:"0px"}},[t])},genInput:function(t){var e=this,i=Object.assign({},this.listeners$);return delete i.change,this.$createElement("input",{style:{},domProps:{value:this.otp[t],min:"number"===this.type?0:null},attrs:Object(g["a"])(Object(g["a"])({},this.attrs$),{},{disabled:this.isDisabled,readonly:this.isReadonly,type:this.type,id:"".concat(this.computedId,"--").concat(t),class:"otp-field-box--".concat(t),maxlength:1}),on:Object.assign(i,{blur:this.onBlur,input:function(i){return e.onInput(i,t)},focus:function(i){return e.onFocus(i,t)},paste:function(i){return e.onPaste(i,t)},keydown:this.onKeyDown,keyup:function(i){return e.onKeyUp(i,t)}}),ref:"input",refInFor:!0})},genTextFieldSlot:function(t){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genInput(t)])},onBlur:function(t){var e=this;this.isFocused=!1,t&&this.$nextTick((function(){return e.$emit("blur",t)}))},onClick:function(t){this.isFocused||this.isDisabled||!this.$refs.input[t]||this.onFocus(void 0,t)},onFocus:function(t,e){null==t||t.preventDefault(),null==t||t.stopPropagation();var i=this.$refs.input,n=this.$refs.input&&i[e||0];if(n)return document.activeElement!==n?(n.focus(),n.select()):void(this.isFocused||(this.isFocused=!0,n.select(),t&&this.$emit("focus",t)))},onInput:function(t,e){var i=this,n=t.target,s=n.value;this.applyValue(e,n.value,(function(){i.internalValue=i.otp.join("")})),this.badInput=n.validity&&n.validity.badInput;var o=e+1;s&&(o<+this.length?this.changeFocus(o):(this.clearFocus(e),this.onCompleted()))},clearFocus:function(t){var e=this.$refs.input[t];e.blur()},onKeyDown:function(t){t.keyCode===y["t"].enter&&this.$emit("change",this.internalValue),this.$emit("keydown",t)},onMouseDown:function(t,e){t.target!==this.$refs.input[e]&&(t.preventDefault(),t.stopPropagation()),m["a"].options.methods.onMouseDown.call(this,t)},onMouseUp:function(t,e){this.hasMouseDown&&this.focus(t,e),m["a"].options.methods.onMouseUp.call(this,t)},onPaste:function(t,e){var i,n=+this.length-1,s=null==t||null==(i=t.clipboardData)?void 0:i.getData("Text"),o=(null==s?void 0:s.split(""))||[];t.preventDefault();for(var r=Object(a["a"])(this.otp),c=0;c<o.length;c++){var l=e+c;if(l>n)break;r[l]=o[c].toString()}this.otp=r;var u=Math.min(e+o.length,n);this.changeFocus(u),r.length===+this.length&&(this.onCompleted(),this.clearFocus(u))},applyValue:function(t,e,i){var n=Object(a["a"])(this.otp);n[t]=e,this.otp=n,i()},changeFocus:function(t){this.onFocus(void 0,t||0)},updateValue:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onKeyUp:function(t,e){t.preventDefault();var i=t.key;if(!["Tab","Shift","Meta","Control","Alt"].includes(i)&&!["Delete"].includes(i))return"ArrowLeft"===i||"Backspace"===i&&!this.otp[e]?e>0&&this.changeFocus(e-1):"ArrowRight"===i?e+1<+this.length&&this.changeFocus(e+1):void 0},onCompleted:function(){var t=this.otp.join("");t.length===+this.length&&this.$emit("finish",t)}},render:function(t){return t("div",{staticClass:"v-otp-input",class:this.themeClasses},this.genContent())}}),w=Object(l["a"])(c,n,s,!1,null,"7ea0a646",null);e["default"]=w.exports;d()(w,{VAlert:h["a"],VBtn:p["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["c"],VCardTitle:v["d"],VOtpInput:x})},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]},b0af:function(t,e,i){"use strict";var n=i("5530"),s=(i("a9e3"),i("0481"),i("4069"),i("615b"),i("10d2")),o=i("297c"),a=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(o["a"],a["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},a["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-0923b1f2.bce5ff05.js.map