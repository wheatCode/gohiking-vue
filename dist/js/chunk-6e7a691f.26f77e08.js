(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e7a691f"],{"615b":function(t,e,n){},"627d":function(t,e,n){},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c}));var i=n("b0af"),s=n("80d2"),o=Object(s["i"])("v-card__actions"),a=Object(s["i"])("v-card__subtitle"),r=Object(s["i"])("v-card__text"),c=Object(s["i"])("v-card__title");i["a"]},"9a0f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"px-5 pb-5",attrs:{elevation:"2"}},[n("v-card-title",{staticClass:"mt-5"},[n("h1",{staticClass:"font-weight-bold text-h5"},[t._v("輸入驗證碼")])]),n("v-card-text",[n("p",[t._v("已把驗證碼發至您的信箱johndoe@example.com，請確認您的信箱及輸入4位數驗證碼。")]),n("v-otp-input",{staticClass:"px-15",attrs:{length:"4",plain:"",color:"success",type:"number"},model:{value:t.verifications,callback:function(e){t.verifications=e},expression:"verifications"}})],1),n("v-card-actions",[n("v-btn",{attrs:{block:"",elevation:"2",color:"success","x-large":""},on:{click:t.toVerification}},[t._v("繼續")]),n("br")],1),n("v-card-actions",[n("v-btn",{attrs:{block:"",outlined:"",elevation:"2",color:"success","x-large":""}},[t._v("重新發送驗證碼")]),n("br")],1)],1)},s=[],o=n("5530"),a=n("2909"),r=(n("d3b7"),n("159b"),{name:"SuccessPage",data:function(){return{verifications:null,verification:{email:null,verificationCode0:null,verificationCode1:null,verificationCode2:null,verificationCode3:null}}},methods:{toVerification:function(){var t=this;this.verifications&&(Object(a["a"])(this.verifications).forEach((function(e,n){t.verification["verificationCode".concat(n)]=e})),this.$axios.postApi("/api/password/confirm",Object(o["a"])(Object(o["a"])({},this.verification),{},{email:this.$route.query.email})).then((function(e){if(e){var n=e.data;console.log(n),t.$cookies.set("gohiking_token",n.token),t.$router.push({name:"ResetPwd"})}})))}}}),c=r,l=n("2877"),u=n("6544"),h=n.n(u),d=n("8336"),p=n("b0af"),f=n("99d9"),v=(n("a9e3"),n("ac1f"),n("1276"),n("a630"),n("3ca3"),n("99af"),n("a15b"),n("25f0"),n("caad"),n("4ff9"),n("627d"),n("c37a")),g=n("8654"),b=n("5607"),m=n("80d2"),y=n("d9bd"),C=n("58df"),k=Object(C["a"])(v["a"]),$=k.extend().extend({name:"v-otp-input",directives:{ripple:b["a"]},inheritAttrs:!1,props:{length:{type:[Number,String],default:6},type:{type:String,default:"text"},plain:Boolean},data:function(){return{badInput:!1,initialValue:null,isBooted:!1,otp:[]}},computed:{outlined:function(){return!this.plain},classes:function(){return Object(o["a"])(Object(o["a"])(Object(o["a"])({},v["a"].options.computed.classes.call(this)),g["a"].options.computed.classes.call(this)),{},{"v-otp-input--plain":this.plain})},isDirty:function(){return v["a"].options.computed.isDirty.call(this)||this.badInput}},watch:{isFocused:"updateValue",value:function(t){this.lazyValue=t}},created:function(){var t;this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(y["a"])("browser-autocomplete","autocomplete",this),this.otp=(null==(t=this.internalValue)?void 0:t.split(""))||[]},mounted:function(){var t=this;requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{focus:function(t,e){this.onFocus(t,e||0)},genInputSlot:function(t){var e=this;return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(m["g"])(this.height)},on:{click:function(){return e.onClick(t)},mousedown:function(n){return e.onMouseDown(n,t)},mouseup:function(n){return e.onMouseUp(n,t)}}}),[this.genDefaultSlot(t)])},genControl:function(t){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(t)])},genDefaultSlot:function(t){return[this.genFieldset(),this.genTextFieldSlot(t)]},genContent:function(){var t=this;return Array.from({length:+this.length},(function(e,n){return t.$createElement("div",t.setTextColor(t.validationState,{staticClass:"v-input",class:t.classes}),[t.genControl(n)])}))},genFieldset:function(){return this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()])},genLegend:function(){var t=this.$createElement("span",{domProps:{innerHTML:"&#8203;"}});return this.$createElement("legend",{style:{width:"0px"}},[t])},genInput:function(t){var e=this,n=Object.assign({},this.listeners$);return delete n.change,this.$createElement("input",{style:{},domProps:{value:this.otp[t],min:"number"===this.type?0:null},attrs:Object(o["a"])(Object(o["a"])({},this.attrs$),{},{disabled:this.isDisabled,readonly:this.isReadonly,type:this.type,id:"".concat(this.computedId,"--").concat(t),class:"otp-field-box--".concat(t),maxlength:1}),on:Object.assign(n,{blur:this.onBlur,input:function(n){return e.onInput(n,t)},focus:function(n){return e.onFocus(n,t)},paste:function(n){return e.onPaste(n,t)},keydown:this.onKeyDown,keyup:function(n){return e.onKeyUp(n,t)}}),ref:"input",refInFor:!0})},genTextFieldSlot:function(t){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genInput(t)])},onBlur:function(t){var e=this;this.isFocused=!1,t&&this.$nextTick((function(){return e.$emit("blur",t)}))},onClick:function(t){this.isFocused||this.isDisabled||!this.$refs.input[t]||this.onFocus(void 0,t)},onFocus:function(t,e){null==t||t.preventDefault(),null==t||t.stopPropagation();var n=this.$refs.input,i=this.$refs.input&&n[e||0];if(i)return document.activeElement!==i?(i.focus(),i.select()):void(this.isFocused||(this.isFocused=!0,i.select(),t&&this.$emit("focus",t)))},onInput:function(t,e){var n=this,i=t.target,s=i.value;this.applyValue(e,i.value,(function(){n.internalValue=n.otp.join("")})),this.badInput=i.validity&&i.validity.badInput;var o=e+1;s&&(o<+this.length?this.changeFocus(o):(this.clearFocus(e),this.onCompleted()))},clearFocus:function(t){var e=this.$refs.input[t];e.blur()},onKeyDown:function(t){t.keyCode===m["t"].enter&&this.$emit("change",this.internalValue),this.$emit("keydown",t)},onMouseDown:function(t,e){t.target!==this.$refs.input[e]&&(t.preventDefault(),t.stopPropagation()),v["a"].options.methods.onMouseDown.call(this,t)},onMouseUp:function(t,e){this.hasMouseDown&&this.focus(t,e),v["a"].options.methods.onMouseUp.call(this,t)},onPaste:function(t,e){var n,i=+this.length-1,s=null==t||null==(n=t.clipboardData)?void 0:n.getData("Text"),o=(null==s?void 0:s.split(""))||[];t.preventDefault();for(var r=Object(a["a"])(this.otp),c=0;c<o.length;c++){var l=e+c;if(l>i)break;r[l]=o[c].toString()}this.otp=r;var u=Math.min(e+o.length,i);this.changeFocus(u),r.length===+this.length&&(this.onCompleted(),this.clearFocus(u))},applyValue:function(t,e,n){var i=Object(a["a"])(this.otp);i[t]=e,this.otp=i,n()},changeFocus:function(t){this.onFocus(void 0,t||0)},updateValue:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onKeyUp:function(t,e){t.preventDefault();var n=t.key;if(!["Tab","Shift","Meta","Control","Alt"].includes(n)&&!["Delete"].includes(n))return"ArrowLeft"===n||"Backspace"===n&&!this.otp[e]?e>0&&this.changeFocus(e-1):"ArrowRight"===n?e+1<+this.length&&this.changeFocus(e+1):void 0},onCompleted:function(){var t=this.otp.join("");t.length===+this.length&&this.$emit("finish",t)}},render:function(t){return t("div",{staticClass:"v-otp-input",class:this.themeClasses},this.genContent())}}),j=Object(l["a"])(c,i,s,!1,null,"7f34f744",null);e["default"]=j.exports;h()(j,{VBtn:d["a"],VCard:p["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VOtpInput:$})},b0af:function(t,e,n){"use strict";var i=n("5530"),s=(n("a9e3"),n("0481"),n("4069"),n("615b"),n("10d2")),o=n("297c"),a=n("1c87"),r=n("58df");e["a"]=Object(r["a"])(o["a"],a["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},a["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-6e7a691f.26f77e08.js.map