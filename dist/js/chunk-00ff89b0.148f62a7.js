(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00ff89b0"],{"042c":function(t,e,i){"use strict";i("e026")},"132d":function(t,e,i){"use strict";var a,s=i("5530"),n=(i("c96a"),i("d3b7"),i("caad"),i("2532"),i("ac1f"),i("00b4"),i("a9e3"),i("498a"),i("7db0"),i("fb6a"),i("4804"),i("7e2b")),r=i("a9ad"),o=i("af2b"),c=i("7560"),l=i("80d2"),d=i("2b0e"),u=i("58df");function h(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(a||(a={}));var p=Object(u["a"])(n["a"],r["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["y"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["u"])(t).find((function(e){return t[e]}));return e&&a[e]||Object(l["g"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(s["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(s["a"])(Object(s["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(s["a"])(Object(s["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],a=this.getDefaultData(),s="material-icons",n=t.indexOf("-"),r=n<=-1;r?i.push(t):(s=t.slice(0,n),h(s)&&(s="")),a.class[s]=!0,a.class[t]=!r;var o=this.getSize();return o&&(a.style={fontSize:o}),this.applyColors(a),e(this.hasClickListener?"button":this.tag,a,i)},renderSvgIcon:function(t,e){var i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},a=this.getSize();return a&&(i.style={fontSize:a,height:a,width:a}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i={class:{"v-icon__component":!0}},a=this.getSize();a&&(i.style={fontSize:a,height:a,width:a}),this.applyColors(i);var s=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(s,i)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=d["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var i=e.data,a=e.children,s="";return i.domProps&&(s=i.domProps.textContent||i.domProps.innerHTML||s,delete i.domProps.textContent,delete i.domProps.innerHTML),t(p,i,s?[s]:a)}})},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var a=i("6b75");function s(t){if(Array.isArray(t))return Object(a["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=i("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return s(t)||n(t)||Object(r["a"])(t)||o()}},4804:function(t,e,i){},"9d26":function(t,e,i){"use strict";var a=i("132d");e["a"]=a["a"]},e026:function(t,e,i){},e9eb:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-sheet",{staticClass:"overflow-hidden",staticStyle:{position:"relative"}},[i("v-toolbar",{staticClass:"toolbar",style:"background-image:url('https://image.shutterstock.com/image-photo/sky-clouds-260nw-193491221.jpg');background-size: cover",attrs:{flat:"",height:"250"}},[i("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$store.dispatch("toPrevRouter")}}},[i("v-icon",{staticClass:"white--text icon_border",attrs:{large:""}},[t._v("mdi-arrow-left")])],1)],1),i("v-card",{staticClass:"px-3",attrs:{color:"basil",flat:""}},[i("v-card-text",{staticClass:"pa-0"},[i("v-list",{staticClass:"pa-0"},[i("v-list-item-group",{attrs:{color:"primary"}},[t._l(t.trails,(function(e){return[i("v-list-item",{key:e.id,staticClass:"pa-0 my-2"},[i("v-list-item-avatar",{staticClass:"my-0",attrs:{"min-width":"130",height:"90",tile:""}},[i("v-img",{staticClass:"grey lighten-2",staticStyle:{"border-radius":"10px"},attrs:{src:e.coverImage},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-skeleton-loader",{attrs:{type:"image"}})]},proxy:!0}],null,!0)},[i("v-btn",{staticStyle:{position:"absolute",top:"35%",left:"35%"},attrs:{icon:""},on:{click:function(e){t.articlesHeart=!t.articlesHeart}}},[t.articlesHeart?i("v-icon",{staticClass:"white--text icon_border"},[t._v("mdi-heart")]):i("v-icon",{attrs:{color:"red lighten-1 icon_border"}},[t._v("mdi-heart")])],1)],1)],1),i("v-list-item-content",{staticClass:"pa-0",staticStyle:{position:"absolute",top:"0",left:"150px",height:"100%",width:"73%"},on:{click:function(i){return t.toTrailInTroduction(e.id)}}},[e.title?t._e():i("v-skeleton-loader",{staticClass:"mx-auto",attrs:{width:"100%",height:"100",type:"article, actions"}}),i("v-list-item-title",[t._v(t._s(e.title))]),i("v-list-item-subtitle",{staticClass:"mt-1"},[t._v(t._s(e.location.county.name+e.location.name))]),i("v-list-item-subtitle",{staticClass:"mt-1"},[t._v("全程約 "+t._s(e.distance)+" km")]),i("v-divider",{staticClass:"ma-0"})],1)],1)]}))],2)],1)],1)],1)],1)},s=[],n=i("2909"),r={name:"SuccessPage",data:function(){return{articlesHeart:!1,trails:[]}},mounted:function(){var t=this;this.$axios.getApi("/api/classification/".concat(this.$route.params.id)).then((function(e){if(e){var i=e.data,a=i.trails;t.trails=Object(n["a"])(a),console.log(e)}}))},methods:{toTrailInTroduction:function(t){this.$router.push({path:"/TrailInTroduction/".concat(t)})}}},o=r,c=(i("042c"),i("2877")),l=i("6544"),d=i.n(l),u=i("8336"),h=i("b0af"),f=i("99d9"),p=i("ce7e"),m=i("132d"),v=i("adda"),b=i("8860"),g=i("da13"),y=i("8270"),C=i("5d23"),S=i("1baa"),x=i("8dd9"),k=i("3129"),w=i("71d9"),I=Object(c["a"])(o,a,s,!1,null,"104a8671",null);e["default"]=I.exports;d()(I,{VBtn:u["a"],VCard:h["a"],VCardText:f["c"],VDivider:p["a"],VIcon:m["a"],VImg:v["a"],VList:b["a"],VListItem:g["a"],VListItemAvatar:y["a"],VListItemContent:C["a"],VListItemGroup:S["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VSheet:x["a"],VSkeletonLoader:k["a"],VToolbar:w["a"]})}}]);
//# sourceMappingURL=chunk-00ff89b0.148f62a7.js.map