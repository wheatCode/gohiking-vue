(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b40605f4"],{"2c3e":function(t,e,i){var r=i("da84"),o=i("83ab"),n=i("9f7f").MISSED_STICKY,a=i("c6b6"),s=i("9bf2").f,c=i("69f3").get,u=RegExp.prototype,h=r.TypeError;o&&n&&s(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===a(this))return!!c(this).sticky;throw h("Incompatible receiver, RegExp required")}}})},"2d11":function(t,e,i){},"409c":function(t,e,i){"use strict";i("5d3c")},4428:function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){return function(t){function e(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=26)}({26:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={url:{type:String},text:{type:String,default:"Upload Image"},extensions:{type:String,default:"png,jpg,jpeg,gif,svg,webp"},inputOfFile:{type:String,default:"files"},crop:{type:[String,Boolean],default:""},cropBtn:{type:Object,default:function(){return{ok:"Ok",cancel:"Cancel"}}},cropRatio:{type:String,default:"1:1"},resize:{type:[String,Boolean],default:!1},rotate:{type:Boolean,default:!1},ResizeBtn:{type:Object,default:function(){return{ok:"Ok",cancel:"Cancel"}}},maxFileSize:{type:Number,default:104857600},maxWidth:{type:Number},maxHeight:{type:Number},inputAccept:{type:String,default:"image/jpg,image/jpeg,image/png,image/gif"},isXhr:{type:Boolean,default:!0},headers:{type:Object,default:function(){return{}}},data:{type:Object,default:function(){return{}}},multiple:{type:Boolean,default:!1},multipleSize:{type:Number,default:0},minWidth:{type:Number,default:50},compress:{type:[Number,String],default:0},credentials:{type:[String,Boolean],default:!0}}}})}))},"479c":function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){return function(t){function e(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,i){"use strict";t.exports={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),setCssText:function(t){var e=[];for(var i in t){var r=t[i];"number"==typeof r&&(r+="px"),e.push(i+": "+r+";")}return e.join("")}}}])}))},"4d63":function(t,e,i){var r=i("83ab"),o=i("da84"),n=i("e330"),a=i("94ca"),s=i("7156"),c=i("9112"),u=i("9bf2").f,h=i("241c").f,l=i("3a9b"),p=i("44e7"),f=i("577e"),d=i("ad6d"),g=i("9f7f"),A=i("6eeb"),m=i("d039"),v=i("1a2d"),C=i("69f3").enforce,y=i("2626"),x=i("b622"),w=i("fce3"),I=i("107c"),b=x("match"),S=o.RegExp,B=S.prototype,E=o.SyntaxError,_=n(d),R=n(B.exec),M=n("".charAt),Q=n("".replace),O=n("".indexOf),D=n("".slice),L=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,k=/a/g,H=/a/g,j=new S(k)!==k,W=g.MISSED_STICKY,T=g.UNSUPPORTED_Y,z=r&&(!j||W||w||I||m((function(){return H[b]=!1,S(k)!=k||S(H)==H||"/a/i"!=S(k,"i")}))),G=function(t){for(var e,i=t.length,r=0,o="",n=!1;r<=i;r++)e=M(t,r),"\\"!==e?n||"."!==e?("["===e?n=!0:"]"===e&&(n=!1),o+=e):o+="[\\s\\S]":o+=e+M(t,++r);return o},N=function(t){for(var e,i=t.length,r=0,o="",n=[],a={},s=!1,c=!1,u=0,h="";r<=i;r++){if(e=M(t,r),"\\"===e)e+=M(t,++r);else if("]"===e)s=!1;else if(!s)switch(!0){case"["===e:s=!0;break;case"("===e:R(L,D(t,r+1))&&(r+=2,c=!0),o+=e,u++;continue;case">"===e&&c:if(""===h||v(a,h))throw new E("Invalid capture group name");a[h]=!0,n[n.length]=[h,u],c=!1,h="";continue}c?h+=e:o+=e}return[o,n]};if(a("RegExp",z)){for(var Y=function(t,e){var i,r,o,n,a,u,h=l(B,this),d=p(t),g=void 0===e,A=[],m=t;if(!h&&d&&g&&t.constructor===Y)return t;if((d||l(B,t))&&(t=t.source,g&&(e="flags"in m?m.flags:_(m))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),m=t,w&&"dotAll"in k&&(r=!!e&&O(e,"s")>-1,r&&(e=Q(e,/s/g,""))),i=e,W&&"sticky"in k&&(o=!!e&&O(e,"y")>-1,o&&T&&(e=Q(e,/y/g,""))),I&&(n=N(t),t=n[0],A=n[1]),a=s(S(t,e),h?this:B,Y),(r||o||A.length)&&(u=C(a),r&&(u.dotAll=!0,u.raw=Y(G(t),i)),o&&(u.sticky=!0),A.length&&(u.groups=A)),t!==m)try{c(a,"source",""===m?"(?:)":m)}catch(v){}return a},F=function(t){t in Y||u(Y,t,{configurable:!0,get:function(){return S[t]},set:function(e){S[t]=e}})},P=h(S),J=0;P.length>J;)F(P[J++]);B.constructor=Y,Y.prototype=B,A(o,"RegExp",Y)}y("RegExp")},5089:function(t,e,i){},"5d3c":function(t,e,i){},"5d58":function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){return function(t){function e(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=15)}({15:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="data:image/gif;base64,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"}})}))},6333:function(t,e,i){"use strict";i("acf7")},8403:function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){return function(t){function e(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=25)}({0:function(t,e,i){"use strict";t.exports={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),setCssText:function(t){var e=[];for(var i in t){var r=t[i];"number"==typeof r&&(r+="px"),e.push(i+": "+r+";")}return e.join("")}}},25:function(t,e,i){"use strict";function r(t,e,i,r,o){if(e){var n=document.body.offsetHeight,c=1/o,u=parseFloat(window.getComputedStyle(i).width),h=parseFloat(window.getComputedStyle(i).height),l=document.querySelector(".info-aside"),p=(s-u)/2,f=parseFloat(window.getComputedStyle(l).height),d=(n-h-f)/2,g=a?t.changedTouches[0].clientX:t.clientX,A=a?t.changedTouches[0].clientY:t.clientY,m=e.offsetWidth,v=e.offsetHeight,C={};return o>=1&&g<=p+u?(m>=u&&(C.width=u),C.width=r.w+g-r.x,C.height=m*c,u>h?m>h&&(C.height=h,C.width=h*o):u<h?m>u&&(C.width=u,C.height=u*c):m>=u&&(C.width=u,C.height=u*c)):o<1&&A<d+h+f?(C.height=r.h+A-r.y,C.width=v*o,u>h?v>h&&(C.height=h,C.width=h*o):m>u&&(C.width=u,C.height=u*c)):"auto"==o&&A<=d+h+f&&g<=d+u?(C.height=r.h+A-r.y,C.width=r.w+g-r.x):g<=p+u&&(C.width=r.w+g-r.x,C.height=e.style.width,u>h?v>h&&(C.height=h,C.width=h):u<h?m>u&&(C.width=u,C.height=u):m>u&&(C.width=e.style.height=u)),C}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(0),n=function(t){return t&&t.__esModule?t:{default:t}}(o),a=n.default.isMobile,s=document.body.offsetWidth}})}))},"8f51":function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){return function(t){function e(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=14)}({0:function(t,e,i){"use strict";t.exports={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),setCssText:function(t){var e=[];for(var i in t){var r=t[i];"number"==typeof r&&(r+="px"),e.push(i+": "+r+";")}return e.join("")}}},14:function(t,e,i){"use strict";function r(t,e,i){if(e){var r=a?t.changedTouches[0].clientX:t.clientX,o=a?t.changedTouches[0].clientY:t.clientY,n=r-i.x,s=o-i.y;return n<=i.minLeft&&(n=i.minLeft),n>=i.maxLeft&&(n=i.maxLeft),s<=i.minTop&&(s=i.minTop),s>=i.maxTop&&(s=i.maxTop),{left:n,top:s}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(0),n=function(t){return t&&t.__esModule?t:{default:t}}(o),a=n.default.isMobile}})}))},"903e":function(t,e,i){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};void 0===XMLHttpRequest.prototype.sendAsBinary&&(XMLHttpRequest.prototype.sendAsBinary=function(t){var e=Array.prototype.map.call(t,(function(t){return 255&t.charCodeAt(0)}));this.send(new Uint8Array(e).buffer)}),t.exports=function(t,e,i,o,n,a,s,c){var u=new XMLHttpRequest,h=a||function(){console.error("AJAX ERROR!")},l="webcodeimageupload",p=!1;"blob"===t&&(p=t,t="GET"),t=t.toUpperCase(),u.onload=function(){var e=u.response;try{e=JSON.parse(u.responseText)}catch(r){401===u.status&&(e=h("access_denied",u.statusText))}var i=I(u.getAllResponseHeaders());i.statusCode=u.status,n(e||("GET"===t?h("empty_response","Could not get resource"):{}),i)},u.onerror=function(){var t=u.responseText;try{t=JSON.parse(u.responseText)}catch(e){console.error(e)}n(t||h("access_denied","Could not get resource"))};var f=void 0;if("GET"===t||"DELETE"===t)o=null;else if(s){var d=o,g=o.base64Code.replace("data:"+o.type+";base64,","");o=["--"+l,'Content-Disposition: form-data; name="'+o.filed+'"; filename="'+o.filename+'"',"Content-Type: "+o.type,"",window.atob(g),""].join("\r\n");var A=Object.keys(d);if(A.length>4){var m=!0,v=!1,C=void 0;try{for(var y,x=A[Symbol.iterator]();!(m=(y=x.next()).done);m=!0){var w=y.value;-1==["filed","filename","type","base64Code"].indexOf(w)&&(o+=["--"+l,'Content-Disposition: form-data; name="'+w+'";',"",""].join("\r\n"),o+=["object"===r(d[w])?JSON.stringify(d[w]):encodeURI(d[w]),""].join("\r\n"))}}catch(a){v=!0,C=a}finally{try{!m&&x.return&&x.return()}finally{if(v)throw C}}}o+="--"+l+"--"}if(u.open(t,e,!0),p&&("responseType"in u?u.responseType=p:u.overrideMimeType("text/plain; charset=x-user-defined")),i)for(f in i)u.setRequestHeader(f,i[f]);return u.withCredentials="undefined"===typeof c||c,s?(u.setRequestHeader("Content-Type","multipart/form-data; boundary="+l),u.sendAsBinary(o)):(u.send(o),u);function I(t){var e={},i=/([a-z\-]+):\s?(.*);?/gi,r=void 0;while(r=i.exec(t))e[r[1]]=r[2];return e}}},acf7:function(t,e,i){},beff:function(t,e,i){"use strict";i("5089")},c22d:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("input",{ref:"picture",attrs:{type:"file",name:"aaa",id:""},on:{change:t.show}})])},o=[],n=i("f603"),a={components:{VueCoreImageUpload:n["a"]},data:function(){return{data:{src:"http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png"}}},methods:{show:function(t){var e=this;this.file=t.target.files[0];var i=new FileReader;i.readAsDataURL(this.file),i.addEventListener("load",(function(){e.useravatar=i.result,e.$store.dispatch("setCropperImage",e.useravatar)}))}}},s=a,c=i("2877"),u=Object(c["a"])(s,r,o,!1,null,null,null);e["default"]=u.exports},c607:function(t,e,i){var r=i("da84"),o=i("83ab"),n=i("fce3"),a=i("c6b6"),s=i("9bf2").f,c=i("69f3").get,u=RegExp.prototype,h=r.TypeError;o&&n&&s(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===a(this))return!!c(this).dotAll;throw h("Incompatible receiver, RegExp required")}}})},e5b0:function(t,e,i){"use strict";i("2d11")},f603:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticClass:"g-core-image-upload-btn"},[t._t("default",(function(){return[t._v(t._s(t.text))]})),i("form",{directives:[{name:"show",rawName:"v-show",value:!t.hasImage,expression:"!hasImage"}],staticClass:"g-core-image-upload-form",attrs:{method:"post",enctype:"multipart/form-data",action:""}},[i("input",{staticStyle:{width:"100%",height:"100%"},attrs:{disabled:t.uploading,id:"g-core-upload-input-"+t.formID,name:t.name,multiple:t.multiple,type:"file",accept:t.inputAccept},on:{change:t.change,dragover:t.dragover,dragenter:t.dragover,dragleave:t.dragleave,dragend:t.dragleave,drop:t.dragleave}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.hasImage,expression:"hasImage"}],staticClass:"g-core-image-corp-container",attrs:{id:"vciu-modal-"+t.formID}},[i("crop",{ref:"cropBox",attrs:{"is-resize":t.resize&&!t.crop,ratio:t.cropRatio,"is-rotate":t.rotate}}),i("div",{staticClass:"info-aside"},[i("p",{staticClass:"btn-groups rotate-groups",staticStyle:{display:"none"}},[i("button",{staticClass:"btn btn-rotate",attrs:{type:"button"},on:{click:t.doRotate}},[t._v("↺")]),i("button",{staticClass:"btn btn-reverserotate",attrs:{type:"button"},on:{click:t.doReverseRotate}},[t._v("↻")])]),t.crop?i("p",{staticClass:"btn-groups"},[i("button",{staticClass:"btn btn-upload",attrs:{type:"button"},on:{click:t.doCrop}},[t._v(t._s(t.cropBtn.ok))]),i("button",{staticClass:"btn btn-cancel",attrs:{type:"button"},on:{click:t.cancel}},[t._v(t._s(t.cropBtn.cancel))])]):t._e(),t.resize&&!t.crop?i("p",{staticClass:"btn-groups"},[i("button",{staticClass:"btn btn-upload",attrs:{type:"button"},on:{click:t.doResize}},[t._v(t._s(t.ResizeBtn.ok))]),i("button",{staticClass:"btn btn-cancel",attrs:{type:"button"},on:{click:t.cancel}},[t._v(t._s(t.ResizeBtn.cancel))])]):t._e()])],1)],2)},o=[],n=i("53ca"),a=(i("ac1f"),i("1276"),i("5319"),i("4d63"),i("c607"),i("2c3e"),i("25f0"),i("a15b"),i("00b4"),i("d3b7"),i("fb6a"),i("b680"),i("b64b"),i("b0c0"),i("903e")),s=i.n(a),c=i("5d58"),u=i.n(c),h=i("fefc"),l=i.n(h),p=i("4428"),f=i.n(p),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image-aside"},[i("div",{staticClass:"g-crop-image-box"},[i("div",{staticClass:"g-crop-image-principal",on:{touchstart:t.drag,mousedown:t.drag}},[i("div",{staticClass:"image-wrap",style:{width:t.width+"px",height:t.height+"px",left:t.left+"px",top:t.top+"px",backgroundImage:"url("+t.src+")",cursor:t.isResize?"default":"move"}},[i("img",{ref:"crop-image",staticStyle:{width:"0",height:"0"},attrs:{src:t.src}})]),t.isResize?t._e():i("div",{staticClass:"image-mask"},[i("div",{staticClass:"mask top",style:{top:0,height:t.cropCSS.top+"px",left:0,width:"100%"}}),i("div",{staticClass:"mask bottom",style:{bottom:0,top:t.cropCSS.top+t.cropCSS.height+"px",left:0,width:"100%"}}),i("div",{staticClass:"mask left",style:{top:t.cropCSS.top+"px",height:t.cropCSS.height+"px",left:0,width:t.cropCSS.left+"px"}}),i("div",{staticClass:"mask right",style:{top:t.cropCSS.top+"px",height:t.cropCSS.height+"px",left:t.cropCSS.left+t.cropCSS.width+"px",right:0}})]),t.isResize?t._e():i("div",{staticClass:"crop-box",style:{top:t.cropCSS.top+"px",left:t.cropCSS.left+"px",height:t.cropCSS.height+"px",width:t.cropCSS.width+"px"}},[i("div",{staticClass:"reference-line v"}),i("div",{staticClass:"reference-line h"}),i("a",{staticClass:"g-resize",on:{touchstart:function(e){return e.target!==e.currentTarget?null:t.resize.apply(null,arguments)},mousedown:function(e){return e.target!==e.currentTarget?null:t.resize.apply(null,arguments)}}})])]),t.resize?i("resize-bar",{ref:"resizeBar",on:{resize:t.resizeImage}}):t._e(),t.isRotate?i("rotate-bar",{on:{rotate:t.rotateImage}}):t._e()],1)])},g=[],A=(i("a9e3"),i("8f51")),m=i.n(A),v=i("8403"),C=i.n(v),y=i("479c"),x=i.n(y),w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"g-resize-bar"},[i("div",{staticClass:"g-resize-highlight",style:{width:t.left+"%"}}),i("button",{staticClass:"circle-btn",style:{left:t.left+"%"},on:{touchstart:function(e){return e.target!==e.currentTarget?null:t.drag.apply(null,arguments)},mousedown:function(e){return e.target!==e.currentTarget?null:t.drag.apply(null,arguments)}}})])},I=[],b={props:{minProgress:{type:[Number,String],default:0}},data:function(){return{progress:100,left:100}},methods:{setProgress:function(t){this.left=t},drag:function(t){t.preventDefault(),t.stopPropagation();var e=t.target;this.el=e;var i=this.$el.parentElement,r=this,o=x.a.isMobile,n=200,a={x:(o?t.touches[0]["clientX"]:t.clientX)-e.offsetLeft,y:(o?t.touches[0]["clientY"]:t.clientY)-e.offsetTop,maxLeft:n,maxTop:parseInt(i.style.height)-parseInt(e.style.height),minLeft:0,minTop:0},s=function(t){var e=m()(t,r.el,a);if(e){if(e.left/n<r.minProgress)return;r.progress=(e.left-n/2)/n,r.left=e.left/n*100,r.$emit("resize",r.progress)}},c=function t(e){if(r.el=null,o)return document.removeEventListener("touchmove",s,!1),void document.removeEventListener("touchend",t,!1);document.removeEventListener("mousemove",s,!1),document.removeEventListener("mouseup",t,!1)};if(o)return document.addEventListener("touchmove",s,!1),void document.addEventListener("touchend",c,!1);document.addEventListener("mousemove",s,!1),document.addEventListener("mouseup",c,!1)}}},S=b,B=(i("409c"),i("2877")),E=Object(B["a"])(S,w,I,!1,null,"5069e800",null),_=E.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"g-rotate-bar"},[i("a",{attrs:{href:"javascript:;"},on:{click:t.rotateLeft}},[i("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 481.95 481.95"}},[i("path",{attrs:{d:"M281.7,243.8V138.2c75.9,13.5,135.4,78.6,135.4,159.8s-59.6,146.3-135.4,159.8V512\n        c105.7-13.5,189.6-102.9,189.6-214s-84-200.5-189.6-214V0L159.8,121.9L281.7,243.8z M94.8,270.9c2.7-24.4,13.5-46.1,27.1-67.7\n        L84,165.2C59.6,197.8,46.1,233,40.6,270.9H94.8z M159.8,430.7l-37.9,37.9c32.5,24.4,67.7,37.9,105.7,43.3v-54.2\n        C203.2,455.1,181.5,444.3,159.8,430.7z M94.8,325.1H40.6c2.7,37.9,19,73.1,43.3,105.7l37.9-37.9\n        C108.4,371.1,97.5,349.5,94.8,325.1z",fill:"#27ae60"}})])]),i("a",{attrs:{href:"javascript:;"},on:{click:t.rotateRight}},[i("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 481.95 481.95"}},[i("path",{attrs:{d:"M331.5,114.75L216.75,0v79.05C117.3,91.8,38.25,175.95,38.25,280.5s79.05,188.7,178.5,201.45v-51    C145.35,418.2,89.25,357,89.25,280.5s56.1-137.7,127.5-150.45v99.45L331.5,114.75z M443.7,255    c-5.101-35.7-17.851-68.85-40.8-99.45l-35.7,35.7c12.75,20.4,22.95,40.8,25.5,63.75H443.7z M267.75,430.95v51    c35.7-5.101,68.85-17.851,99.45-40.8l-35.7-35.7C311.1,418.2,290.7,428.4,267.75,430.95z M367.2,369.75l35.7,35.7    c22.949-30.601,38.25-63.75,40.8-99.45h-51C390.15,328.95,379.95,349.35,367.2,369.75z",fill:"#27ae60"}})])])])},M=[],Q={data:function(){return{rotateDegree:0}},methods:{rotateRight:function(){this.rotateDegree+=90,this.$emit("rotate",this.rotateDegree)},rotateLeft:function(){this.rotateDegree-=90,this.$emit("rotate",this.rotateDegree)}}},O=Q,D=(i("6333"),Object(B["a"])(O,R,M,!1,null,null,null)),L=D.exports,k=75,H=(x.a.isMobile,window.innerWidth-60),j=window.innerHeight-110,W={components:{ResizeBar:_,RotateBar:L},props:{ratio:{type:String,default:"1:1"},minWidth:{type:Number,default:50},minHeight:{type:Number,default:50},isResize:{type:[Boolean],default:!1},isRotate:{type:[Boolean],default:!0}},data:function(){return{src:u.a,width:24,height:24,initWidth:24,initHeight:24,left:0,top:0,cropCSS:{}}},methods:{setImage:function(t,e,i){this.src=t,this.originSrc||this.setOriginalSrc(this.src),this.ratio.indexOf(":")>0?(this.ratioW=this.ratio.split(":")[0],this.ratioH=this.ratio.split(":")[1],this.ratioVal=this.ratioW/this.ratioH):(this.ratioW=1,this.ratioH=1,this.ratioVal=this.ratio),this.natrualWidth=e,this.natrualHeight=i,this.setLayout(e,i);var r=this.$refs.resizeBar;return this.isResize?r.setProgress(100):r.setProgress(50),this.imgChangeRatio},setOriginalSrc:function(t){this.originSrc=t},resizeImage:function(t){var e,i;this.isResize?(e=this.natrualWidth*this.imgChangeRatio*t,i=this.natrualHeight*this.imgChangeRatio*t):(e=this.initWidth+t*(this.natrualWidth-this.initWidth),i=this.initHeight+t*(this.natrualHeight-this.initHeight)),e<=this.minWidth||i<this.minHeight||(this.left+=(this.width-e)/2,this.top+=(this.height-i)/2,this.width=e,this.height=i,this.imgChangeRatio=this.width/this.natrualWidth)},rotateImage:function(t){var e=this;l.a.rotate2(this.originSrc,t,(function(t,i,r){e.setImage(t,i,r)}))},setLayout:function(t,e){var i=j,r=H,o=t,n=e,a=0,s=0,c=o/n,u=r/i;c>u?(n=i,o=i*c,a=(r-i*c)/2):(o=i*c,n=i,a=(r-i*c)/2),this._setStyle(o,n,a,s,c,!0)},_setStyle:function(t,e,i,r,o,n){var a=this.$el.querySelector(".g-crop-image-principal");n||(this.marginLeft=this.marginLeft+(this.width-t)/2,this.marginTop=this.marginTop+(this.height-e)/2),a.style.cssText="width:"+t+"px;height:"+e+"px;margin-left:"+i+"px;margin-top:"+r+"px",this.setCropBox(t,e),this.isResize?(this.width=t,this.height=e):(o>=this.cropCSS.width/this.cropCSS.height?(this.height=this.cropCSS.height,this.width=this.height*o):(this.width=this.cropCSS.width,this.height=this.width/o),this.initWidth=this.width,this.initHeight=this.height,this.left=(t-this.width)/2,this.top=(e-this.height)/2),this.imgChangeRatio=this.width/this.natrualWidth},setCropBox:function(t,e,i){if(!this.isResize){var r=this.__find(".crop-box"),o=(this.$el,t),n=e,a=this.ratioW,s=this.ratioH,c=o;H<t&&(c=H);var u=c/100*k,h={width:u,height:u/a*s};if(h.left=(o-u)/2,h.top=(n-h.height)/2,r.style.cssText=x.a.setCssText(h),h.height>n){var l=n/100*k;h.height=l,h.width=h.height*a/s,h.left=(o-h.width)/2,h.top=(n-h.height)/2,r.style.cssText=x.a.setCssText(h)}this.cropCSS=h}},getCropData:function(){return this.isResize?{imgChangeRatio:this.imgChangeRatio,toCropImgX:0,toCropImgY:0,toCropImgW:this.natrualWidth,toCropImgH:this.natrualHeight}:{toCropImgX:(this.cropCSS.left-this.left)/this.imgChangeRatio,toCropImgY:(this.cropCSS.top-this.top)/this.imgChangeRatio,toCropImgW:this.cropCSS.width/this.imgChangeRatio,toCropImgH:this.cropCSS.height/this.imgChangeRatio}},getCropImage:function(){return this.$refs["crop-image"]},__find:function(t){var e=this.$el;return e.querySelector(t)},resize:function(t){if(t.stopPropagation(),this.ratio.indexOf(":")){var e=t.target.parentElement,i=this.__find(".g-crop-image-principal");this._$container&&(this._$container=container);var r=this,o={x:x.a.isMobile?t.touches[0].clientX:t.clientX,y:x.a.isMobile?t.touches[0].clientY:t.clientY,w:e.offsetWidth,h:e.offsetHeight};this.el=e,this.container=i;var n=this._getMaxCropAreaWidth(),a=function(t){var e=C()(t,r.el,i,o,r.ratioVal);e&&e.width<=n.maxWidth&&e.height<=n.maxHeight&&(r.cropCSS.width=e.width,r.cropCSS.height=e.height)},s=function t(e){this.el=null,x.a.isMobile&&(document.removeEventListener("touchmove",a,!1),document.removeEventListener("touchend",t,!1)),document.removeEventListener("mousemove",a,!1),document.removeEventListener("mouseup",t,!1)};x.a.isMobile&&(document.addEventListener("touchmove",a,!1),document.addEventListener("touchend",s,!1)),document.addEventListener("mousemove",a,!1),document.addEventListener("mouseup",s,!1)}},_getMaxCropAreaWidth:function(){var t=this.__find(".image-wrap"),e=this.__find(".crop-box"),i=parseFloat(t.style.left),r=parseFloat(t.style.top),o=parseFloat(t.style.width),n=parseFloat(t.style.height),a=parseFloat(e.style.left),s=parseFloat(e.style.top),c=o-(a-i),u=n-(s-r);return{maxWidth:c,maxHeight:u}},drag:function(t){t.preventDefault();var e=this.__find(".image-wrap");this.el=e;var i=this.__find(".crop-box"),r=(t.currentTarget,this),o=x.a.isMobile,n={x:(o?t.touches[0]["clientX"]:t.clientX)-e.offsetLeft,y:(o?t.touches[0]["clientY"]:t.clientY)-e.offsetTop,maxLeft:i.offsetLeft,maxTop:i.offsetTop,minLeft:i.offsetWidth+i.offsetLeft-e.offsetWidth,minTop:i.offsetHeight+i.offsetTop-e.offsetHeight},a=function(t){var e=m()(t,r.el,n);e&&(r.left=e.left,r.top=e.top)},s=function t(e){if(r.el=null,o)return document.removeEventListener("touchmove",a,!1),void document.removeEventListener("touchend",t,!1);document.removeEventListener("mousemove",a,!1),document.removeEventListener("mouseup",t,!1)};if(o)return document.addEventListener("touchmove",a,!1),void document.addEventListener("touchend",s,!1);document.addEventListener("mousemove",a,!1),document.addEventListener("mouseup",s,!1)}}},T=W,z=(i("beff"),Object(B["a"])(T,d,g,!1,null,"74a8cbb2",null)),G=z.exports,N="",Y={components:{Crop:G,ResizeBar:_},props:f.a,data:function(){return{files:[],hasImage:!1,options:this.props,uploading:!1,formID:(1e4*Math.random()+"").split(".")[0],image:{src:u.a,width:24,height:24,minProgress:.05}}},computed:{name:function(){return this.multiple?this.inputOfFile+"[]":this.inputOfFile}},methods:{__dispatch:function(t,e,i){this.$emit&&this.$emit(t,e,i)},__find:function(t){var e=document.querySelector("#vciu-modal-"+this.formID);return e.querySelector(t)},dragover:function(){var t=this.$refs.container;t.classList.add("is-dragover")},dragleave:function(){var t=this.$refs.container;t.classList.remove("is-dragover")},change:function(t){var e,i=this,r=document.querySelector("#g-core-upload-input-"+this.formID).value.replace(/C:\\fakepath\\/i,""),o=r.substring(r.lastIndexOf(".")+1),n=this.extensions.split(",");if(n.length){var a=new RegExp("^(?:"+n.join("|")+")$","i");if(!a.test(o))return this.__dispatch("errorhandle","TYPE ERROR")}return Array.prototype.slice.call(t.target.files).some((function(t){return t.size>i.maxFileSize}))?(e=parseInt(this.maxFileSize/1024/1024)>0?(this.maxFileSize/1024/1024).toFixed(2)+"MB":parseInt(this.maxFileSize/1024)>0?(this.maxFileSize/1024).toFixed(2)+"kB":options.maxFileSize.toFixed(2)+"Byte",console.warn("FILE IS TOO LARGER MAX FILE IS "+e),this.__dispatch("errorhandle","FILE IS TOO LARGER MAX FILE IS "+e)):this.multipleSize>0&&t.target.files.length>this.multipleSize?(console.warn("FILE NUM IS LARGER THAN "+this.multipleSize),this.__dispatch("errorhandle","FILE NUM OVERLOAD")):(this.files=t.target.files,void(this.crop||this.resize?this.__showImage():(this.__dispatch("imagechanged",this.files.length>1?this.files:this.files[0]),this.compress&&"image/png"!==this.files[0]["type"]&&"image/gif"!==this.files[0]["type"]?l.a.compress(this.files[0],100-this.compress,(function(t){i.tryAjaxUpload("",!0,t)})):this.tryAjaxUpload())))},__showImage:function(){this.hasImage=!0,this.__readFiles()},__readFiles:function(){var t=new FileReader,e=this;t.onload=function(t){var i=t.target.result;N=document.body.style.overflow,document.body.style.overflow="hidden",e.__initImage(i)},t.readAsDataURL(this.files[0])},__initImage:function(t){var e=new Image,i=this;e.src=t;var r=this.$refs.cropBox;e.onload=function(){i.image.minProgress=i.minWidth/e.naturalWidth,l.a.init(t,(function(t){i.imgChangeRatio=r.setImage(t,e.naturalWidth,e.naturalHeight)}))}},resizeImage:function(t){var e=this.$refs.cropBox;e.resizeImage(t)},doRotate:function(t){var e=this,i=this.$refs.cropBox,r=i.getCropImage();return this.data.compress=100-this.compress,l.a.rotate(r,1,(function(t){e.__initImage(t)}))},doReverseRotate:function(t){var e=this,i=this.$refs.cropBox,r=i.getCropImage();return this.data.compress=100-this.compress,l.a.rotate(r,-1,(function(t){e.__initImage(t)}))},doCrop:function(t){var e=this;this.__setData("crop");var i=this.$refs.cropBox,r=this.__setUpload(t.target);if("local"===this.crop){var o=i.getCropImage();return this.data.compress=100-this.compress,l.a.crop(o,this.data,(function(t){r(t),e.__dispatch("imagechanged",t)}))}r()},doResize:function(t){var e=this;this.__setData("resize");var i=this.$refs.cropBox,r=this.__setUpload(t.target);if("local"===this.resize){var o=i.getCropImage();return this.data.compress=100-this.compress,l.a.resize(o,this.data,(function(t){r(t),e.__dispatch("imagechanged",t)}))}r()},__setData:function(t){"object"!==Object(n["a"])(this.data)&&(this.data={}),this.data["request"]=t;for(var e=this.$refs.cropBox,i=e.getCropData(),r=0,o=Object.keys(i);r<o.length;r++){var a=o[r];this.data[a]=i[a]}this.maxWidth&&(this.data["maxWidth"]=this.maxWidth),this.maxHeight&&(this.data["maxHeight"]=this.maxHeight),this.minWidth&&(this.data["minWidth"]=this.minWidth)},__setUpload:function(t){var e=this,i=function(i){t.value=t.value+"...",t.disabled=!0,e.tryAjaxUpload((function(){t.value=t.value.replace("...",""),t.disabled=!1}),!!i,i)};return i},cancel:function(){this.hasImage=!1,document.body.style.overflow=N,this.files="";var t=this.$refs.cropBox;t.setOriginalSrc(null),document.querySelector("#g-core-upload-input-"+this.formID).value=""},tryAjaxUpload:function(t,e,i){var r=this;this.__dispatch("imageuploading",this.files[0]);var o,a=function(e){"function"===typeof t&&t(),r.uploading=!1,r.cancel(),r.__dispatch("imageuploaded",e,r.data)},c=function(t){r.__dispatch("errorhandle",t)};if(!this.isXhr)return this.crop&&(this.hasImage=!1),"function"===typeof t&&t();if(e)o={type:this.files[0]["type"],filename:this.files[0]["name"],filed:this.inputOfFile,base64Code:i},"object"===Object(n["a"])(this.data)&&(o=Object.assign(this.data,o));else{o=new FormData;for(var u=0;u<this.files.length;u++)o.append(this.name,this.files[u]);if("object"===Object(n["a"])(this.data))for(var h in this.data)void 0!==this.data[h]&&o.append(h,this.data[h])}s()("POST",this.url,this.headers,o,a,c,e,this.credentials)}}},F=Y,P=(i("e5b0"),Object(B["a"])(F,r,o,!1,null,null,null));e["a"]=P.exports},fefc:function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){return function(t){function e(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=13)}({13:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={_getImageType:function(t){var e="image/jpeg",i=t.match(/(image\/[\w]+)\.*/)[0];return void 0!==i&&(e=i),e},compress:function(t,e,i){var r=new FileReader,o=this;r.onload=function(r){var n=new Image;n.src=r.target.result,n.onload=function(){var r=o._getImageType(t.type),a=o._getCanvas(n.naturalWidth,n.naturalHeight),s=(a.getContext("2d").drawImage(n,0,0),a.toDataURL(r,e/100));i(s)}},r.readAsDataURL(t)},crop:function(t,e,i){var r=function(t){return"number"==typeof t};if(r(e.toCropImgX)&&r(e.toCropImgY)&&e.toCropImgW>0&&e.toCropImgH>0){var o=e.toCropImgW,n=e.toCropImgH;e.maxWidth&&e.maxWidth<o&&(o=e.maxWidth,n=e.toCropImgH*o/e.toCropImgW),e.maxHeight&&e.maxHeight<n&&(n=e.maxHeight);var a=this._getCanvas(o,n),s=(a.getContext("2d").drawImage(t,e.toCropImgX,e.toCropImgY,e.toCropImgW,e.toCropImgH,0,0,o,n),this._getImageType(t.src));i(a.toDataURL(s,e.compress/100))}},init:function(t,e){var i=new Image;i.src=t;var r=this;i.onload=function(){var t=r._getImageType(i.src),o=r._getCanvas(i.naturalWidth,i.naturalHeight);o.getContext("2d").drawImage(i,0,0);var n=o.toDataURL(t,100);e(n)}},rotate:function(t,e,i){var r=new Image;r.src=t.src;var o=this;r.onload=function(){var t=o._getImageType(r.src),n=o._getCanvas(r.naturalHeight,r.naturalWidth),a=n.getContext("2d");1==e?(a.rotate(90*Math.PI/180),a.translate(0,-n.width)):(a.rotate(-90*Math.PI/180),a.translate(-n.height,0)),a.drawImage(r,0,0);var s=n.toDataURL(t,100);i(s)}},resize:function(t,e,i){var r=function(t){return"number"==typeof t};if(r(e.toCropImgX)&&r(e.toCropImgY)&&e.toCropImgW>0&&e.toCropImgH>0){var o=e.toCropImgW*e.imgChangeRatio,n=e.toCropImgH*e.imgChangeRatio,a=this._getCanvas(o,n),s=(a.getContext("2d").drawImage(t,0,0,e.toCropImgW,e.toCropImgH,0,0,o,n),this._getImageType(t.src));i(a.toDataURL(s,e.compress/100))}},rotate2:function(t,e,i){var r=this;this._loadImage(t,(function(o){var n=o.naturalWidth,a=o.naturalHeight,s=Math.max(n,a),c=r._getCanvas(s,s),u=c.getContext("2d");u.save(),u.translate(s/2,s/2),u.rotate(e*(Math.PI/180));var h=-s/2,l=-s/2;if(0===(e%=360))return i(t,n,a);if(e%180!=0){-90===e||270===e?h=s/2-n:l=s/2-a;var p=n;n=a,a=p}else h=s/2-n,l=s/2-a;u.drawImage(o,h,l),r._getCanvas(n,a).getContext("2d").drawImage(c,0,0,n,a,0,0,n,a);var f=r._getImageType(o.src),d=c.toDataURL(f,1);i(d,n,a)}))},_loadImage:function(t,e){var i=new Image;i.src=t,i.onload=function(){e(i)},i.onerror=function(){console.log("Error: image error!")}},_getCanvas:function(t,e){var i=document.createElement("canvas");return i.width=t,i.height=e,i}}}})}))}}]);
//# sourceMappingURL=chunk-b40605f4.0aeca5fe.js.map