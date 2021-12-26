(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-662910b4"],{"0798":function(t,e,s){"use strict";var r=s("5530"),i=s("ade3"),n=(s("caad"),s("0c18"),s("10d2")),a=s("afdd"),o=s("9d26"),c=s("f2e7"),l=s("7560"),d=s("2b0e"),h=d["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),u=s("58df"),p=s("d9bd");e["a"]=Object(u["a"])(n["a"],c["a"],h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(i["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(o["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(r["a"])(Object(r["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,s){},"132d":function(t,e,s){"use strict";var r,i=s("5530"),n=(s("c96a"),s("d3b7"),s("caad"),s("2532"),s("ac1f"),s("00b4"),s("a9e3"),s("498a"),s("7db0"),s("fb6a"),s("4804"),s("7e2b")),a=s("a9ad"),o=s("af2b"),c=s("7560"),l=s("80d2"),d=s("2b0e"),h=s("58df");function u(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function p(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(r||(r={}));var f=Object(h["a"])(n["a"],a["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["y"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["u"])(t).find((function(e){return t[e]}));return e&&r[e]||Object(l["g"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(i["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(i["a"])(Object(i["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(i["a"])(Object(i["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var s=[],r=this.getDefaultData(),i="material-icons",n=t.indexOf("-"),a=n<=-1;a?s.push(t):(i=t.slice(0,n),u(i)&&(i="")),r.class[i]=!0,r.class[t]=!a;var o=this.getSize();return o&&(r.style={fontSize:o}),this.applyColors(r),e(this.hasClickListener?"button":this.tag,r,s)},renderSvgIcon:function(t,e){var s={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(s.style={fontSize:r,height:r,width:r}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",s,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var s={class:{"v-icon__component":!0}},r=this.getSize();r&&(s.style={fontSize:r,height:r,width:r}),this.applyColors(s);var i=t.component;return s.props=t.props,s.nativeOn=s.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(i,s)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?p(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=d["a"].extend({name:"v-icon",$_wrapperFor:f,functional:!0,render:function(t,e){var s=e.data,r=e.children,i="";return s.domProps&&(i=s.domProps.textContent||s.domProps.innerHTML||i,delete s.domProps.textContent,delete s.domProps.innerHTML),t(f,s,i?[i]:r)}})},4804:function(t,e,s){},"4ff4":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"px-5 pb-5",attrs:{elevation:"0"}},[s("v-card-title",{staticClass:"pa-0 mt-5"},[s("h1",{staticClass:"font-weight-bold text-h5"},[t._v("重設密碼")])]),t.$store.state.error?s("v-alert",{staticClass:"mx-3",attrs:{color:"red darken-2",dark:""},domProps:{innerHTML:t._s(t.$store.state.error)}}):t._e(),t.$store.state.success?s("v-alert",{staticClass:"mx-3",attrs:{color:"success",dark:""},domProps:{innerHTML:t._s(t.$store.state.success)}}):t._e(),s("v-card-text",{staticClass:"pa-0 mt-2"},[s("label",{staticClass:"font-weight-bold black--text d-inline-block",attrs:{for:""}},[t._v("密碼")]),s("v-text-field",{ref:"password",staticClass:"pt-0",attrs:{type:"password",autofocus:"",placeholder:"請輸入新的密碼",rules:[function(){return!!t.password||"新的密碼是必填的"}],required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("label",{staticClass:"font-weight-bold black--text d-inline-block",attrs:{for:""}},[t._v("確認密碼")]),s("v-text-field",{ref:"checkPwd",staticClass:"pt-0",attrs:{type:"checkPwd",placeholder:"請重新輸入密碼",rules:[function(){return!!t.checkPwd||"重新輸入密碼是必填的"}]},model:{value:t.checkPwd,callback:function(e){t.checkPwd=e},expression:"checkPwd"}})],1),s("v-card-actions",{staticClass:"pa-0"},[s("v-btn",{attrs:{block:"",elevation:"0",color:"success","x-large":"",loading:t.loading,disabled:t.loading},on:{click:t.submit}},[t._v("繼續")])],1)],1)},i=[],n=s("1da1"),a=(s("96cf"),s("d3b7"),s("159b"),s("b64b"),{name:"SuccessPage",data:function(){return{password:null,checkPwd:null,loading:!1}},methods:{submit:function(){var t=this;this.formHasErrors=!1,Object.keys(this.form).forEach((function(e){t.form[e]||(t.formHasErrors=!0),t.$refs[e].validate(!0)||(t.formHasErrors=!0)})),this.formHasErrors||this.toResetPwd()},toResetPwd:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.postApi("/api/password/change",{password:t.password}).then((function(e){if(e){var s=e.data,r=s.status;t.$store.dispatch("setSuccess",r),t.$cookies.remove("gohiking_token"),setTimeout((function(){t.$router.push({name:"Login"})}),1e3)}}));case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()}},computed:{form:function(){return{password:this.password,checkPwd:this.checkPwd}}}}),o=a,c=s("2877"),l=s("6544"),d=s.n(l),h=s("0798"),u=s("8336"),p=s("b0af"),f=s("99d9"),v=s("8654"),g=Object(c["a"])(o,r,i,!1,null,"14f6a939",null);e["default"]=g.exports;d()(g,{VAlert:h["a"],VBtn:u["a"],VCard:p["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VTextField:v["a"]})},"615b":function(t,e,s){},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return a})),s.d(e,"c",(function(){return o})),s.d(e,"d",(function(){return c}));var r=s("b0af"),i=s("80d2"),n=Object(i["i"])("v-card__actions"),a=Object(i["i"])("v-card__subtitle"),o=Object(i["i"])("v-card__text"),c=Object(i["i"])("v-card__title");r["a"]},"9d26":function(t,e,s){"use strict";var r=s("132d");e["a"]=r["a"]},afdd:function(t,e,s){"use strict";var r=s("8336");e["a"]=r["a"]},b0af:function(t,e,s){"use strict";var r=s("5530"),i=(s("a9e3"),s("0481"),s("4069"),s("615b"),s("10d2")),n=s("297c"),a=s("1c87"),o=s("58df");e["a"]=Object(o["a"])(n["a"],a["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-card":!0},a["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(r["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),s=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(s,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-662910b4.6e722c4a.js.map