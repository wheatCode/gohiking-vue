(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e528007"],{"0f42":function(t,e,r){"use strict";r("9682")},"132d":function(t,e,r){"use strict";var n,i=r("5530"),a=(r("c96a"),r("d3b7"),r("caad"),r("2532"),r("ac1f"),r("00b4"),r("a9e3"),r("498a"),r("7db0"),r("fb6a"),r("4804"),r("7e2b")),o=r("a9ad"),s=r("af2b"),c=r("7560"),l=r("80d2"),u=r("2b0e"),h=r("58df");function f(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(n||(n={}));var v=Object(h["a"])(a["a"],o["a"],s["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["y"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["u"])(t).find((function(e){return t[e]}));return e&&n[e]||Object(l["g"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(i["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(i["a"])(Object(i["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(i["a"])(Object(i["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var r=[],n=this.getDefaultData(),i="material-icons",a=t.indexOf("-"),o=a<=-1;o?r.push(t):(i=t.slice(0,a),f(i)&&(i="")),n.class[i]=!0,n.class[t]=!o;var s=this.getSize();return s&&(n.style={fontSize:s}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,r)},renderSvgIcon:function(t,e){var r={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},n=this.getSize();return n&&(r.style={fontSize:n,height:n,width:n}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",r,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var r={class:{"v-icon__component":!0}},n=this.getSize();n&&(r.style={fontSize:n,height:n,width:n}),this.applyColors(r);var i=t.component;return r.props=t.props,r.nativeOn=r.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(i,r)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["a"].extend({name:"v-icon",$_wrapperFor:v,functional:!0,render:function(t,e){var r=e.data,n=e.children,i="";return r.domProps&&(i=r.domProps.textContent||r.domProps.innerHTML||i,delete r.domProps.textContent,delete r.domProps.innerHTML),t(v,r,i?[i]:n)}})},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7");function n(t,e,r,n,i,a,o){try{var s=t[a](o),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,a){var o=t.apply(e,r);function s(t){n(o,i,a,s,c,"next",t)}function c(t){n(o,i,a,s,c,"throw",t)}s(void 0)}))}}},2909:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("6b75");function i(t){if(Array.isArray(t))return Object(n["a"])(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=r("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||a(t)||Object(o["a"])(t)||s()}},"2fa4":function(t,e,r){"use strict";r("20f6");var n=r("80d2");e["a"]=Object(n["i"])("spacer","div","v-spacer")},"3e3e":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticClass:"overflow-hidden",staticStyle:{position:"relative"}},[r("v-toolbar",{staticClass:"toolbar",style:"background-image:url("+t.article.image+");background-size: cover",attrs:{flat:"",height:"250"}},[r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$store.dispatch("toPrevRouter")}}},[r("v-icon",{staticClass:"white--text icon_border",attrs:{large:""}},[t._v("mdi-arrow-left")])],1),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(e){t.articlesHeart=!t.articlesHeart}}},[t.articlesHeart?r("v-icon",{staticClass:"white--text icon_border"},[t._v("mdi-heart")]):r("v-icon",{attrs:{color:"red lighten-1 icon_border"}},[t._v("mdi-heart")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",{staticClass:"white--text icon_border"},[t._v(" mdi-share-variant")])],1)],1),r("v-sheet",{staticClass:"px-4 pt-3"},[r("h2",{staticClass:"py-3"},[t._v(t._s(t.article.title))]),r("p",[t._v("\n      "+t._s(t.article.content)+"\n    ")]),r("v-divider")],1),r("v-sheet",{staticClass:"px-4 pt-3"},[r("h3",{staticClass:"py-3"},[t._v("步道推薦")]),r("v-card",{staticClass:"px-3",attrs:{color:"basil",flat:""}},[r("v-card-text",{staticClass:"pa-0"},[r("v-list",{staticClass:"pa-0"},[r("v-list-item-group",{attrs:{color:"primary"}},[t._l(t.trails,(function(e){return[r("v-list-item",{key:e.id,staticClass:"pa-0 my-2"},[r("v-list-item-avatar",{staticClass:"my-0",attrs:{"min-width":"130",height:"90",tile:""}},[r("v-img",{staticClass:"grey lighten-2",staticStyle:{"border-radius":"10px"},attrs:{src:e.coverImage},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-skeleton-loader",{attrs:{type:"image"}})]},proxy:!0}],null,!0)},[r("v-btn",{staticStyle:{position:"absolute",top:"35%",left:"35%"},attrs:{icon:""},on:{click:function(e){t.articlesHeart=!t.articlesHeart}}},[t.articlesHeart?r("v-icon",{staticClass:"white--text icon_border"},[t._v("mdi-heart")]):r("v-icon",{attrs:{color:"red lighten-1 icon_border"}},[t._v("mdi-heart")])],1)],1)],1),r("v-list-item-content",{staticClass:"pa-0",staticStyle:{position:"absolute",top:"0",left:"150px",height:"100%",width:"73%"},on:{click:function(r){return t.toTrailInTroduction(e.id)}}},[e.title?t._e():r("v-skeleton-loader",{staticClass:"mx-auto",attrs:{width:"100%",height:"100",type:"article, actions"}}),r("v-list-item-title",[t._v(t._s(e.title))]),r("v-list-item-subtitle",{staticClass:"mt-1"},[t._v(t._s(e.location.county.name+e.location.name))]),r("v-list-item-subtitle",{staticClass:"mt-1"},[t._v("全程約 "+t._s(e.distance)+" km")]),r("v-divider",{staticClass:"ma-0"})],1)],1)]}))],2)],1)],1)],1)],1)],1)},i=[],a=r("2909"),o=r("5530"),s=r("1da1"),c=(r("96cf"),{name:"SuccessPage",data:function(){return{articlesHeart:!1,article:{},trails:[]}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.getApi("/api/article/".concat(t.$route.params.id));case 2:r=e.sent,n=r.data,t.article=Object(o["a"])({},n),t.trails=Object(a["a"])(t.article.trails),console.log(n);case 7:case"end":return e.stop()}}),e)})))()},methods:{toTrailInTroduction:function(t){this.$router.push({path:"/TrailInTroduction/".concat(t)})}}}),l=c,u=(r("0f42"),r("2877")),h=r("6544"),f=r.n(h),d=r("8336"),v=r("b0af"),p=r("99d9"),m=r("ce7e"),g=r("132d"),y=r("adda"),b=r("8860"),w=r("da13"),x=r("8270"),L=r("5d23"),_=r("1baa"),C=r("8dd9"),S=r("3129"),k=r("2fa4"),O=r("71d9"),j=Object(u["a"])(l,n,i,!1,null,"23945dc0",null);e["default"]=j.exports;f()(j,{VBtn:d["a"],VCard:v["a"],VCardText:p["c"],VDivider:m["a"],VIcon:g["a"],VImg:y["a"],VList:b["a"],VListItem:w["a"],VListItemAvatar:x["a"],VListItemContent:L["a"],VListItemGroup:_["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VSheet:C["a"],VSkeletonLoader:S["a"],VSpacer:k["a"],VToolbar:O["a"]})},4804:function(t,e,r){},"8ce9":function(t,e,r){},9682:function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(V){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),o=new I(n||[]);return a._invoke=S(t,r,o),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(V){return{type:"throw",arg:V}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",d="executing",v="completed",p={};function m(){}function g(){}function y(){}var b={};c(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(E([])));x&&x!==r&&n.call(x,a)&&(b=x);var L=y.prototype=m.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(i,a,o,s){var c=u(t[i],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,s)}))}s(c.arg)}var i;function a(t,n){function a(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(a,a):a()}this._invoke=a}function S(t,e,r){var n=h;return function(i,a){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===i)throw a;return T()}r.method=i,r.arg=a;while(1){var o=r.delegate;if(o){var s=k(o,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?v:f,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,p;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function E(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=y,c(L,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(C.prototype),c(C.prototype,o,(function(){return this})),t.AsyncIterator=C,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new C(l(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(L),c(L,s,"Generator"),c(L,a,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:E(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},"9d26":function(t,e,r){"use strict";var n=r("132d");e["a"]=n["a"]},ce7e:function(t,e,r){"use strict";var n=r("5530"),i=(r("8ce9"),r("7560"));e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-7e528007.efbdd518.js.map