(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ab8ad0a"],{"1feb":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"px-1 pb-5",attrs:{elevation:"2"}},[i("v-toolbar",{attrs:{flat:""}},[i("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.push({name:"Index"})}}},[i("v-icon",{staticClass:"success--text icon_border",attrs:{size:"25"}},[t._v("mdi-arrow-left")])],1)],1),i("v-card-title",{staticClass:"mt-5"},[i("h1",{staticClass:"font-weight-bold text-h5"},[t._v("註冊帳號")])]),i("v-card-text",[i("label",{staticClass:"font-weight-bold black--text d-inline-block mt-5",attrs:{for:""}},[t._v("電子郵件")]),i("v-text-field",{ref:"email",staticClass:"pt-0",attrs:{"hide-details":"",placeholder:"請輸入您的電子郵件",rules:[function(){return!!t.email||"電子郵件是必填的"},function(){return t.emailRule.test(t.mail)||"填寫正確的電子郵件格式"}]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("label",{staticClass:"font-weight-bold black--text d-inline-block mt-10",attrs:{for:""}},[t._v("密碼")]),i("v-text-field",{ref:"pwd",staticClass:"pt-0",attrs:{"hide-details":"",placeholder:"請輸入您的密碼",rules:[function(){return!!t.pwd||"密碼是必填的"}]},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}}),i("div",{staticClass:"pt-2 grey--text text--dark-1"},[t._v("密碼必須包含8個字元以上")]),i("label",{staticClass:"font-weight-bold black--text d-inline-block mt-10",attrs:{for:""}},[t._v("確認密碼")]),i("v-text-field",{ref:"checkpwd",staticClass:"pt-0",attrs:{"hide-details":"",placeholder:"請重新輸入您的密碼",rules:[function(){return!!t.checkpwd||"重新輸入密碼是必填的"}]},model:{value:t.checkpwd,callback:function(e){t.checkpwd=e},expression:"checkpwd"}})],1),i("v-card-subtitle",{staticClass:"black--text pt-0"},[t._v("\n    使用這個應用程式前，請先詳閱「Go Hiking」的《"),i("router-link",{attrs:{to:"#"}},[t._v("隱私權政策")]),t._v("》及《"),i("router-link",{attrs:{to:"#"}},[t._v("服務條款")]),t._v("》\n  ")],1),i("v-card-actions",{staticClass:"mt-5"},[i("v-btn",{attrs:{block:"",elevation:"2",color:"success","x-large":"",loading:t.loading,disabled:t.loading},on:{click:t.submit}},[t._v("同意並註冊")])],1)],1)},a=[],r=i("1da1"),n=(i("96cf"),i("d3b7"),i("159b"),i("b64b"),{name:"SuccessPage",data:function(){return{email:null,pwd:null,checkpwd:null,loading:!1,formHasErrors:!1,emailRule:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{submit:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.formHasErrors=!1,t.loading=!0,Object.keys(t.form).forEach((function(e){t.form[e]||(t.formHasErrors=!0),t.$refs[e].validate(!0)||(t.formHasErrors=!0)})),t.formHasErrors){e.next=6;break}return e.next=6,t.toRegister();case 6:t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},toRegister:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.postApi("/api/register",{email:t.email,password:t.pwd}).then((function(e){if(e){var i=e.data;console.log(i),i&&(t.$cookies.set("gohiking_token",i.token),t.$router.push({name:"BasicInformation"}))}}));case 2:case"end":return e.stop()}}),e)})))()}},computed:{form:function(){return{email:this.email,pwd:this.pwd,checkpwd:this.checkpwd}}}}),o=n,c=(i("8c75"),i("2877")),l=i("6544"),d=i.n(l),h=i("8336"),u=i("b0af"),p=i("99d9"),g=i("132d"),m=i("8654"),f=i("71d9"),v=Object(c["a"])(o,s,a,!1,null,"6787de88",null);e["default"]=v.exports;d()(v,{VBtn:h["a"],VCard:u["a"],VCardActions:p["a"],VCardSubtitle:p["b"],VCardText:p["c"],VCardTitle:p["d"],VIcon:g["a"],VTextField:m["a"],VToolbar:f["a"]})},"36a7":function(t,e,i){},"5e23":function(t,e,i){},"615b":function(t,e,i){},7109:function(t,e,i){},"71d9":function(t,e,i){"use strict";var s=i("3835"),a=i("5530"),r=(i("a9e3"),i("0481"),i("4069"),i("d3b7"),i("5e23"),i("8dd9")),n=i("adda"),o=i("80d2"),c=i("d9bd");e["a"]=r["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(a["a"])(Object(a["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(a["a"])(Object(a["a"])({},this.measurableStyles),{},{height:Object(o["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(s["a"])(e,2),a=i[0],r=i[1];t.$attrs.hasOwnProperty(a)&&Object(c["a"])(a,r,t)}))},methods:{genBackground:function(){var t={height:Object(o["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(o["g"])(this.computedContentHeight)}},Object(o["p"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(o["g"])(this.extensionHeight)}},Object(o["p"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},"8a79":function(t,e,i){"use strict";var s=i("23e7"),a=i("e330"),r=i("06cf").f,n=i("50c4"),o=i("577e"),c=i("5a34"),l=i("1d80"),d=i("ab13"),h=i("c430"),u=a("".endsWith),p=a("".slice),g=Math.min,m=d("endsWith"),f=!h&&!m&&!!function(){var t=r(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!f&&!m},{endsWith:function(t){var e=o(l(this));c(t);var i=arguments.length>1?arguments[1]:void 0,s=e.length,a=void 0===i?s:g(n(i),s),r=o(t);return u?u(e,r,a):p(e,a-r.length,a)===r}})},"8c75":function(t,e,i){"use strict";i("7109")},"8efc":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return c}));var s=i("b0af"),a=i("80d2"),r=Object(a["i"])("v-card__actions"),n=Object(a["i"])("v-card__subtitle"),o=Object(a["i"])("v-card__text"),c=Object(a["i"])("v-card__title");s["a"]},adda:function(t,e,i){"use strict";var s=i("53ca"),a=(i("a9e3"),i("a15b"),i("8a79"),i("2ca0"),i("8efc"),i("90a2")),r=(i("36a7"),i("24b2")),n=i("58df"),o=Object(n["a"])(r["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=i("7560"),d=i("d9f7"),h=i("d9bd"),u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(n["a"])(c,l["a"]).extend({name:"v-img",directives:{intersect:a["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(s["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(h["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var a=t.naturalHeight,r=t.naturalWidth;a||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/a):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(s,i)};s()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=Object(d["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},b0af:function(t,e,i){"use strict";var s=i("5530"),a=(i("a9e3"),i("0481"),i("4069"),i("615b"),i("10d2")),r=i("297c"),n=i("1c87"),o=i("58df");e["a"]=Object(o["a"])(r["a"],n["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-3ab8ad0a.c8be65c2.js.map