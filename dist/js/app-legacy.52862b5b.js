(function(e){function t(t){for(var r,a,o=t[0],c=t[1],l=t[2],p=0,u=[];p<o.length;p++)a=o[p],s[a]&&u.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-066e70f9":"4b834c41","chunk-0df97110":"56623c60"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-066e70f9":1,"chunk-0df97110":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-066e70f9":"1fde335f","chunk-0df97110":"4560f1b5"}[e]+".css",s=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===r||p===s))return t()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){l=u[o],p=l.getAttribute("data-href");if(p===r||p===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){a[e]=0}));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=s[e]=[t,n]});t.push(r[2]=i);var l,p=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e),l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}s[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,p.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/OpenAPI-Viewer/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=p;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},2348:function(e,t,n){},3:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("0fb7"),n("450d");var r=n("f529"),a=n.n(r),s=(n("be4f"),n("896a")),i=n.n(s),o=(n("e612"),n("dd87")),c=n.n(o),l=(n("075a"),n("72aa")),p=n.n(l),u=(n("6611"),n("e772")),d=n.n(u),m=(n("1f1a"),n("4e4b")),f=n.n(m),v=(n("e960"),n("b35b")),h=n.n(v),g=(n("cadf"),n("551c"),n("097d"),n("a026")),y=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"sw-app-shell",attrs:{id:"sw-app-shell"}},[n("div",{staticClass:"sw-app-header-container"},[n("div",{staticClass:"sw-row",staticStyle:{padding:"8px 4px 8px 4px","min-height":"54px"}},[n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("mrin-logo",{staticStyle:{height:"36px",width:"36px","margin-left":"5px"}}),n("div",{staticClass:"sw-prod-title"},[e._v(" MrinDoc ")])],1),n("div",{staticStyle:{margin:"0px 8px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.specUrl,expression:"specUrl"}],ref:"specUrl",staticClass:"sw-spec-url sw-dark sw-medium",attrs:{type:"text",placeholder:"Spec URL"},domProps:{value:e.specUrl},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.onExplore(!1)},input:function(t){t.target.composing||(e.specUrl=t.target.value)}}}),n("button",{staticClass:"sw-btn sw-primary",staticStyle:{"border-radius":"0 2px 2px 0","padding-left":"5px","padding-right":"5px"},on:{click:function(t){e.onExplore(!1)}}},[e._v("OPEN")])]),n("div",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"8px","align-items":"flex-end"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchVal,expression:"searchVal"}],staticClass:"sw-medium sw-dark",staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"Search"},domProps:{value:e.searchVal},on:{keyup:e.onSearchKeyUp,input:function(t){t.target.composing||(e.searchVal=t.target.value)}}})]),n("div",{staticStyle:{flex:"1"}}),e.isDevMode?n("div",{staticStyle:{display:"flex",width:"200px","flex-direction":"column","margin-right":"8px","align-items":"stretch"}},[n("el-select",{staticClass:"sw-dark",attrs:{size:"medium",placeholder:"Select API Server","popper-class":"sw-dark"},on:{change:function(t){e.$store.commit("selectedApiServer",e.selectedApiServer)}},model:{value:e.selectedApiServer,callback:function(t){e.selectedApiServer=t},expression:"selectedApiServer"}},e._l(e.parsedSpec.servers,function(e){return n("el-option",{key:e.url,attrs:{label:e.url,value:e.url}})}),1)],1):e._e(),n("div",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"8px","align-items":"flex-start"}},[n("el-switch",{staticClass:"sw-dark",attrs:{"active-text":"Developer Mode"},on:{change:function(t){e.$store.commit("isDevMode",e.isDevMode)}},model:{value:e.isDevMode,callback:function(t){e.isDevMode=t},expression:"isDevMode"}})],1)])]),e.isSpecLoaded?n("div",{ref:"pageContainer",staticClass:"sw-page-container"},[e.parsedSpec.info?n("div",{staticClass:"sw-doc-info"},[n("div",{staticClass:"sw-doc-title"},[e._v("\n          "+e._s(e.parsedSpec.info.title)+" \n          "),e.parsedSpec.info.version?n("span",{staticStyle:{"font-size":"14px","font-weight":"bold"}},[e._v(e._s(e.parsedSpec.info.version))]):e._e()]),e.docDescription?n("div",{staticClass:"sw-markdown-block"},[n("span",{domProps:{innerHTML:e._s(e.docDescription)}})]):e._e(),e.parsedSpec.info.license&&e.parsedSpec.info.license.name?n("div",{staticStyle:{"font-size":"12px",margin:"8px 0 0 0"}},[e._v(" \n          "+e._s(e.parsedSpec.info.license.name)+" \n          "),e.parsedSpec.info.license.url?n("a",{attrs:{href:e.parsedSpec.info.license.url}},[e._v(" "+e._s(e.parsedSpec.info.license.url))]):e._e()]):e._e()]):e._e(),e.parsedSpec.securitySchemes?n("security-schemes",{attrs:{schemes:e.parsedSpec.securitySchemes}}):e._e(),e._l(e.parsedSpec.tags,function(t){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"tag.show"}],key:t.name,staticClass:"sw-tag-container"},[n("div",{staticClass:"sw-tag-title"},[e._v(e._s(t.name))]),t.description?n("span",{staticClass:"sw-markdown-block",domProps:{innerHTML:e._s(e.$marked(t.description))}}):e._e(),n("end-point",{attrs:{paths:t.paths,parameters:t.parameters}})],1)})],2):e._e()])},x=[],S=(n("6762"),n("2fdb"),n("a481"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%"}},e._l(e.paths,function(t,r){return t.show?n("div",{key:r,class:"sw-endpoint-wrapper "+t.method+" "+(t.expanded?"sw-expanded":"sw-collapsed")},[n("div",{class:"sw-endpoint-head "+t.method+" "+(t.expanded?"sw-expanded":"sw-collapsed"),on:{click:function(n){e.expandEndPoint(t)}}},[n("div",{class:"sw-method "+t.method},[e._v(" "+e._s(t.method)+" ")]),n("div",{class:"sw-path "+(t.depricated?" sw-depricated":"")},[e._v(" "+e._s(t.path)+" ")]),t.depricated?n("span",{staticStyle:{"font-size":"12px","text-transform":"uppercase","font-weight":"bold",color:"orangered",margin:"2px 0 0 5px"}},[e._v(" Depricated ")]):e._e(),n("div",{staticStyle:{"min-width":"60px",flex:"1"}}),n("div",{staticClass:"sw-end-point-descr"},[e._v(" "+e._s(t.summary)+" ")])]),t.expandedAtLeastOnce?n("div",{directives:[{name:"show",rawName:"v-show",value:t.expanded,expression:"fullPath.expanded"}],class:"sw-endpoint-body "+t.method},[t.summary||t.description?n("div",{staticClass:"sw-end-point-summary"},[n("div",{staticClass:"sw-end-point-title"},[e._v(e._s(t.summary))]),t.summary!==t.description?n("div",{staticClass:"sw-markdown-block"},[n("span",{domProps:{innerHTML:e._s(e.toHtml(t.description))}})]):e._e()]):e._e(),n("div",{class:"sw-req-resp-container "+e.layoutClass},[n("request-parameters",{staticClass:"sw-request",attrs:{method:t.method,url:t.path,parameters:t.parameters,requestBody:t.requestBody}}),n("response-types",{staticClass:"sw-response",attrs:{responses:t.responses}})],1)]):e._e()]):e._e()}),0)}),b=[],_=n("0e54"),k=n.n(_),T={props:{paths:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{layoutClass:"sw-row"}},methods:{expandEndPoint:function(e){e.expandedAtLeastOnce=!0,e.expanded=!e.expanded},toHtml:function(e){return e?k()(e):""}},mounted:function(){},components:{RequestParameters:function(){return n.e("chunk-066e70f9").then(n.bind(null,"b2da"))},ResponseTypes:function(){return n.e("chunk-0df97110").then(n.bind(null,"1bbf"))}}},A=T,C=(n("5e46"),n("2877")),O=Object(C["a"])(A,S,b,!1,null,"7c533553",null);O.options.__file="EndPoint.vue";var U=O.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"1 0 511 512"}},[n("path",{attrs:{d:"M350.96 411.023C315.914 471.395 250.566 512 175.73 512S35.547 471.395.5 411.023c25.64-44.16 67.488-77.746 117.4-92.598 18.32-5.457 37.73-8.383 57.82-8.383 64.27 0 121.527 29.945 158.62 76.637a202.91 202.91 0 0 1 16.609 24.344zm0 0",fill:"#adc165"}}),n("path",{attrs:{d:"M334.352 386.68c-57.172 16.984-121.246 8.652-173.89-28.223-16.465-11.527-30.68-25.05-42.55-40.03 18.32-5.457 37.73-8.383 57.82-8.383 64.27 0 121.527 29.945 158.62 76.637zm77.172 32.18H85.195a7.84 7.84 0 0 1-7.84-7.84 7.84 7.84 0 0 1 7.84-7.836h326.328a7.84 7.84 0 0 1 7.84 7.84 7.84 7.84 0 0 1-7.84 7.836zm0 0",fill:"#99aa52"}}),n("path",{attrs:{d:"M374.32 337.773c-1.086 10.242-2.97 20.414-5.62 30.426-67.48 17.906-142.39.406-195.31-52.512-52.922-52.9-70.418-127.828-52.512-195.31 51.11-13.555 106.496-6.812 153.34 20.258 15 8.664 29.133 19.418 41.97 32.254 45.066 45.07 64.445 106.1 58.133 164.883zm0 0",fill:"#ffc73b"}}),n("path",{attrs:{d:"M374.32 337.773c-51.195-29.6-89.03-81.246-98.824-144.207-2.793-17.937-3.137-35.695-1.277-52.93 15 8.664 29.133 19.418 41.97 32.254 45.066 45.07 64.445 106.1 58.133 164.883zm37.203 81.086c-2.008 0-4.012-.762-5.543-2.293l-230.75-230.75a7.84 7.84 0 0 1 11.086-11.086l230.75 230.75c3.06 3.063 3.06 8.023 0 11.086-1.53 1.53-3.54 2.293-5.543 2.293zm0 0",fill:"#efb025"}}),n("path",{attrs:{d:"M310.543 175.23c0 74.84 40.605 140.184 100.98 175.234C471.895 315.418 512.5 250.07 512.5 175.23S471.898 35.047 411.523 0c-60.375 35.047-100.98 100.395-100.98 175.23zm0 0",fill:"#ff903e"}}),n("path",{attrs:{d:"M411.523 418.86a7.84 7.84 0 0 1-7.84-7.836V84.69c0-4.328 3.512-7.84 7.84-7.84s7.84 3.512 7.84 7.84v326.332a7.84 7.84 0 0 1-7.84 7.836zm0 0",fill:"#e87425"}})])])},P=[],I={props:{color:{type:String,default:"#333"}}},L=I,M=Object(C["a"])(L,q,P,!1,null,null,null);M.options.__file="Logo.vue";var E=M.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"sw-security-title"},[e._v(" AUTHENTICATION")]),n("table",{staticClass:"sw-table",staticStyle:{"margin-top":"5px","line-height":"16px",width:"auto"}},[e._m(0),e._l(e.schemes,function(t,r){return n("tr",{key:r},[n("td",{staticClass:"sw-markdown-block",staticStyle:{width:"auto"}},[n("div",{staticClass:"sw-security-sub-title"},[e._v(" "+e._s(t.type)+" "+e._s(t.scheme?t.scheme:"")+" ")]),n("span",{domProps:{innerHTML:e._s(e.$marked(t.description?t.description:""))}})]),"apiKey"===t.type?n("td",[e._v("\n        If Activated, all requests will send "),n("code",[e._v("'"+e._s(t.name)+"'")]),e._v(" in "),n("code",[e._v("'"+e._s(t.in)+"'")]),e._v(" with the given value\n        "),n("div",{staticStyle:{margin:"5px 0 10px 0"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.apiToken,expression:"apiToken"}],staticClass:"sw-small",staticStyle:{width:"205px","margin-right":"5px"},attrs:{type:"text",placeholder:"api-token"},domProps:{value:e.apiToken},on:{input:function(t){t.target.composing||(e.apiToken=t.target.value)}}}),n("button",{staticClass:"sw-btn sw-primary sw-small",on:{click:function(n){e.onActivateSecurityScheme(t)}}},[e._v("ACTIVATE")])])]):"http"===t.type&&"basic"===t.scheme?n("td",[e._v("\n          If Activated, all requests will send "),n("code",[e._v("'Authorization'")]),e._v(" \n          header that contains the word  "),n("code",[e._v("'Basic'")]),e._v(" word followed by a space and a base64-encoded string username:password.\n          "),n("div",{staticStyle:{margin:"5px 0 10px 0"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"sw-small",staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"sw-small",staticStyle:{width:"100px",margin:"0 5px"},attrs:{type:"text",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{staticClass:"sw-btn sw-primary sw-small",on:{click:function(n){e.onActivateSecurityScheme(t)}}},[e._v("ACTIVATE")])])]):"http"===t.type&&"bearer"===t.scheme?n("td",[e._v("\n          If Activated, all requests will send "),n("code",[e._v("'Authorization'")]),e._v(" \n          header that contains the word  "),n("code",[e._v("'Bearer'")]),e._v(" word followed by a space and a Token String.\n          "),n("div",{staticStyle:{margin:"5px 0 10px 0"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.bearerToken,expression:"bearerToken"}],staticClass:"sw-small",staticStyle:{width:"205px","margin-right":"5px"},attrs:{type:"text",placeholder:"bearer-token"},domProps:{value:e.bearerToken},on:{input:function(t){t.target.composing||(e.bearerToken=t.target.value)}}}),n("button",{staticClass:"sw-btn sw-primary sw-small",on:{click:function(n){e.onActivateSecurityScheme(t)}}},[e._v("ACTIVATE")]),n("div",{staticClass:"sw-gray-small-text",staticStyle:{"font-size":"11px","margin-top":"2px"}},[e._v("Once activated, this token will be sent in 'Authorization' header of every request ")])])]):"oauth2"===t.type?n("td",e._l(t.flows,function(t,r){return n("span",{key:r},[t.authorizationUrl?n("div",[n("b",[e._v("Auth URL:")]),n("code",{staticStyle:{color:"#999"}},[e._v(" "+e._s(t.authorizationUrl))])]):e._e(),t.tokenUrl?n("div",[n("b",[e._v("Token URL: ")]),n("code",{staticStyle:{color:"#999"}},[e._v(" "+e._s(t.tokenUrl)+" ")])]):e._e(),t.refreshUrl?n("div",[n("b",[e._v("Refresh URL: ")]),n("code",{staticStyle:{color:"#999"}},[e._v(" "+e._s(t.refreshUrl))])]):e._e(),t.scopes?[n("b",[e._v("Scopes:")]),e._l(t.scopes,function(t,r){return n("code",{key:r,staticStyle:{color:"#999"}},[e._v(" \n              "+e._s(r)+", \n            ")])})]:e._e(),n("div",{staticStyle:{margin:"5px 0 10px 0"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.clientId,expression:"clientId"}],staticClass:"sw-small",staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"client-id"},domProps:{value:e.clientId},on:{input:function(t){t.target.composing||(e.clientId=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.clientSecret,expression:"clientSecret"}],staticClass:"sw-small",staticStyle:{width:"100px",margin:"0 5px"},attrs:{type:"text",placeholder:"client-secret"},domProps:{value:e.clientSecret},on:{input:function(t){t.target.composing||(e.clientSecret=t.target.value)}}}),n("button",{staticClass:"sw-btn sw-primary sw-small",on:{click:function(n){e.onOAuth(r,t)}}},[e._v("ACTIVATE")])]),t.authorizationUrl?n("div",[n("b",[e._v("Directions: ")]),e._v(" Register this client with "),n("code",[e._v(e._s(e.getOAuthBaseUrl(t.authorizationUrl)))]),n("br")]):e._e(),n("ul",[e._m(1,!0),n("li",[e._v(" During registration, specify callback(redirect) url as "),n("code",[e._v(e._s(e.browserLocation.origin))])])])],2)}),0):n("td",[e._v(" \n        "+e._s(t.type)+"\n      ")])])})],2)])},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Type ")]),n("th",[e._v(" Authentication Procedure ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v(" Obtain a "),n("code",[e._v("client-id")]),e._v(" and "),n("code",[e._v("client-secret")])])}],N=(n("7f7f"),n("c0d6"));n("6b54");function $(e,t,n,r,a){var s=Math.floor(1099511627776*(1+Math.random())).toString(16),i="".concat(e,"?response_type=").concat(r,"&client_id=").concat(t,"&redirect_uri=").concat(n,"&state=").concat(s);a&&(i=i+"&scope="+a),window.location.assign(i)}var z=n("b279"),V={props:{schemes:{type:Object}},data:function(){return{username:"",password:"",apiToken:"",bearerToken:"",customHeader:"",customToken:"",clientId:"",clientSecret:"",browserLocation:location}},methods:{onActivateSecurityScheme:function(e){if("apikey"===e.type.toLowerCase()&&"header"===e.in)N["a"].commit("reqTokenType",e.type.toLowerCase()),N["a"].commit("reqSendTokenIn",e.name),N["a"].commit("reqToken",this.$data.apiToken);else if("http"===e.type&&"bearer"===e.scheme)N["a"].commit("reqTokenType",e.scheme),N["a"].commit("reqToken",bearerToken);else if("http"===e.type&&"basic"===e.scheme){N["a"].commit("reqTokenType",e.scheme);var t=atob(this.$data.username+":"+this.$data.password);N["a"].commit("reqToken",t)}},onOAuth:function(e,t){var n=location.href.substring(0,location.href.indexOf("#"))+"oauth.html",r="token",a="";N["a"].commit("oAuthTokenUrl",t.tokenUrl),$(t.authorizationUrl,this.clientId,n,r,a)},getOAuthBaseUrl:function(e){return Object(z["c"])(e)}},mounted:function(){},components:{}},H=V,B=(n("d064"),Object(C["a"])(H,j,D,!1,null,"4782764e",null));B.options.__file="SecuritySchemes.vue";var R=B.exports,J=(n("7514"),n("28a5"),n("a789")),K=n.n(J),W=n("9f5f"),F=n.n(W);function G(e){return F.a.convertUrl(e,{}).then(function(e){console.info("%c Convertion to OpenAPI 3.0 - Success !!! ","color:cornflowerblue");var t=new K.a;return t.validate(e.openapi,{validate:{spec:!1,schema:!1}})}).then(function(t){console.info("%c OpenAPI 3.0 Dereferencing - Success !!! ","color:cornflowerblue");var n=["get","put","post","delete","patch","options","head"],r=[],a=0,s=function(e){var s={summary:t.paths[e].summary,description:t.paths[e].description,servers:t.paths[e].servers?t.paths[e].servers:[],parameters:t.paths[e].parameters?t.paths[e].parameters:[]};n.forEach(function(n){var i,o,c;if(t.paths[e][n]){var l=t.paths[e][n];if(l.tags)o=l.tags[0],t.tags&&(c=t.tags.find(function(e){return e.name===o}));else{var p=e.indexOf("/",1);-1===p?p=e.length-1:p-=1,o=e.substr(1,p)}i=r.find(function(e){return e.name==o}),i||(i={show:!0,name:o,description:c?c.description:"",paths:[]},r.push(i));var u=l.summary?l.summary:"",d=l.description?l.description:"";if(!u&&d)if(d.length>100){var m=-1;m=d.indexOf("\n"),(-1===m||m>100)&&(m=d.indexOf(". ")),(-1===m||m>100)&&(m=d.indexOf(".")),u=-1===m||m>100?d:d.substr(0,m)}else u=d;i.paths.push({show:!0,expanded:!1,expandedAtLeastOnce:!1,summary:u,method:n,description:l.description,path:e,operationId:l.operationId,requestBody:l.requestBody,parameters:l.parameters,servers:l.servers?s.servers.concat(l.servers):s.servers,responses:l.responses,depricated:l.deprecated,security:l.security,commonSummary:s.summary,commonDescription:s.description}),a++}})};for(var i in t.paths)s(i);var o={},c=[];o=t.components?t.components.securitySchemes:{},t.servers&&t.servers.map(function(t){if(t.url&&"/"===t.url.substr(0,1)){var n=e.split("/");t.url=n[0]+"//"+n[2]+t.url}}),c=t.servers;var l={info:t.info,tags:r,externalDocs:t.externalDocs,securitySchemes:o,servers:c,basePath:t.basePath,totalPathCount:a};return Promise.resolve(l)}).catch(function(e){console.error(e)})}var Q={props:["reloadSpec"],data:function(){return{specUrl:"",searchVal:"",parsedSpec:{},isDevMode:!1,selectedApiServer:"",isSpecLoaded:!1,expandAll:!1,loading:!1,docDescription:""}},methods:{onExplore:function(e){var t=this;t.loading=!0,t.$nextTick(function(){G(t.specUrl).then(function(n){var r="";t.searchVal="",t.parsedSpec=n,n.info.description&&(t.docDescription=k()(n.info.description)),(n.servers&&0==n.servers.length||!n.servers)&&(r=t.specUrl.substring(0,t.specUrl.indexOf("/",t.specUrl.indexOf("//")+2)),n.basePath&&(r=r+"/"+n.basePath.replace(/^\/|\/$/g,"")),t.parsedSpec.servers=[{url:r,description:"Auto generated Server URI"}]),t.isSpecLoaded=!0,t.isDevMode=!0,t.selectedApiServer=n.servers[0].url,N["a"].commit("specUrl",t.specUrl),N["a"].commit("selectedApiServer",n.servers[0].url),N["a"].commit("oAuthTokenUrl",""),!1===e&&(N["a"].commit("isDevMode",!0),N["a"].commit("reqToken",""),N["a"].commit("reqTokenType",""),N["a"].commit("reqSendTokenIn",""),N["a"].commit("reqHeader","")),t.loading=!1}).catch(function(e){return t.loading=!1,t.$message({showClose:!0,message:"Oops, Error encountered while parsing the Spec",type:"error"}),console.error("Onoes! The API is invalid. "+e.message),!1})})},onSearchKeyUp:Object(z["a"])(function(e){var t=this;this.parsedSpec.tags.map(function(e){for(var n=0,r=0;r<e.paths.length;r++)e.paths[r].path.toLowerCase().includes(t.searchVal.toLowerCase())?(e.paths[r].show=!0,n++):e.paths[r].show=!1;e.show=n>0})},500),onExpandAll:function(e){void 0!==this.parsedSpec.tags&&(this.parsedSpec.tags.map(function(t){t.paths.map(function(t){t.expanded=e,t.expandedAtLeastOnce=!0})}),this.$nextTick(function(){console.log("After Expand/Cpllapse")}))},onActivateSecurityScheme:function(e){console.log("%o",e)}},mounted:function(){"reload"===this.$props.reloadSpec?(this.specUrl=N["a"].state.specUrl,N["a"].commit("reqToken",localStorage.getItem("accessToken")),N["a"].commit("reqTokenType",localStorage.getItem("tokenType")),this.specUrl&&this.onExplore(!0)):this.specUrl="https://api.apis.guru/v2/specs/bitbucket.org/2.0/swagger.json"},components:{EndPoint:U,MrinLogo:E,SecuritySchemes:R}},X=Q,Y=(n("a9b8"),Object(C["a"])(X,w,x,!1,null,"73302839",null));Y.options.__file="AppShell.vue";var Z=Y.exports;g["default"].use(y["a"]);var ee=new y["a"]({routes:[{path:"/",redirect:function(e){return"home"}},{path:"/home/:reloadSpec?",name:"AppShellWithSpec",component:Z,props:!0}]}),te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},ne=[],re=(n("5c0b"),{}),ae=Object(C["a"])(re,te,ne,!1,null,null,null);ae.options.__file="App.vue";var se=ae.exports,ie=n("4897"),oe=n.n(ie),ce=n("b2d6"),le=n.n(ce);g["default"].config.productionTip=!1,oe.a.use(le.a),g["default"].use(h.a),g["default"].use(f.a),g["default"].use(d.a),g["default"].use(p.a),g["default"].use(c.a),g["default"].use(i.a.directive),g["default"].prototype.$message=a.a,g["default"].prototype.$loading=i.a.service,g["default"].prototype.$marked=k.a;new g["default"]({router:ee,store:N["a"],beforeCreate:function(){},render:function(e){return e(se)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5d88":function(e,t,n){},"5e27":function(e,t,n){},"5e46":function(e,t,n){"use strict";var r=n("2348"),a=n.n(r);a.a},a9b8:function(e,t,n){"use strict";var r=n("d5a1"),a=n.n(r);a.a},b279:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"f",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return s}),n.d(t,"c",function(){return p}),n.d(t,"e",function(){return u});var r=n("53ca");n("5df3"),n("c02b"),n("28a5"),n("ac6a"),n("456d"),n("f751");function a(e,t){var n=null;return function(){clearTimeout(n);var r=arguments,a=this;n=setTimeout(function(){e.apply(a,r)},t)}}function s(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n="";if(e.enum){var r="";e.enum.map(function(e){r=r+e+", "}),n="enum:〔 ".concat(r.slice(0,-2)," 〕")}else e.type&&(n+=e.type);"integer"!==e.type&&"number"!==e.type||(void 0!==e.minimum&&void 0!==e.maximum?n=n+" ( "+(e.exclusiveMinimum?"> ":"")+e.minimum+" to "+(e.exclusiveMaximum?"< ":"")+e.maximum+" )":void 0!==e.minimum&&void 0===e.maximum?n=n+" ( "+(e.exclusiveMinimum?"> ":">=")+e.minimum+" )":void 0===e.minimum&&void 0!==e.maximum&&(n=n+" ( "+(e.exclusiveMaximum?"< ":"<=")+e.maximum+" )"),void 0!==e.multipleOf&&(n=n+" ( multiple of:"+e.multipleOf+" )")),"string"===e.type&&(void 0!==e.minLength&&void 0!==e.maxLength?n=n+" ( length: "+e.minLength+" to "+e.maxLength+" )":void 0!==e.minLength&&void 0===chema.maxLength?n=n+" ( min-length: "+e.minLength+" )":void 0===e.minLength&&void 0!==e.maxLength&&(n=n+" ( max-length: "+e.maxLength+" )"));var a=t?"":"<br/>";return e.format&&(n+=" ".concat(a," (").concat(e.format,")")),e.pattern&&(n+=" ".concat(a,"(").concat(e.pattern,")")),n}function i(e,t){if(null!=e){if("object"===e.type||e.properties)for(var n in e.properties)e.properties[n].deprecated||e.properties[n].readOnly||e.properties[n].writeOnly||(t[n]=i(e.properties[n],{}));else if("array"===e.type||e.items)t=[i(e.items,{})];else{if(!e.allOf)return"".concat(s(e),"~|~").concat(e.description?e.description:"");var r={};e.allOf.map(function(e){if(e&&e.type){var t=i(e,{});Object.assign(r,t)}}),t=r}return t}}function o(e,t,n,r,a){var s=[];if(e)for(var i in e){var o="";try{o=JSON.parse(e[i].value),s.push({exampleType:"json",exampleValue:"text"===a?JSON.stringify(o,void 0,2):o})}catch(u){s.push({exampleType:"text",exampleValue:e[i].value})}}else if(t)try{var l=JSON.parse(t);s.push({exampleType:"json",exampleValue:"text"===a?JSON.stringify(l,void 0,2):l})}catch(u){s.push({exampleType:"text",exampleValue:t})}if(0==s.length)if(n){var p=c(n,{});s.push({exampleType:"json",exampleValue:"text"===a?JSON.stringify(p,void 0,2):p})}else s.push({exampleType:"text",exampleValue:""});return s}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!=e){if("object"===e.type||e.properties)for(var r in e.properties)e.properties[r].deprecated||e.properties[r].readOnly&&!n.includeReadOnly||e.properties[r].writeOnly&&!n.includeWriteOnly||(t[r]=c(e.properties[r],{},n));else if("array"===e.type||e.items)t=[c(e.items,{},n)];else{if(!e.allOf)return l(e);var a={};e.allOf.map(function(e){if(e&&e.type){var t=c(e,{},n);Object.assign(a,t)}}),t=a}return t}}function l(e){if(e.example)return e.example;if(0===Object.keys(e).length)return null;var t=e.format||e.type||(e.enum?"enum":null);switch(t){case"int32":case"int64":case"integer":return 0;case"float":case"double":case"number":return.5;case"string":return e.enum?e.enum[0]:e.pattern?e.pattern:"string";case"byte":return btoa("string");case"binary":return"binary";case"boolean":return!1;case"date":return new Date(0).toISOString().split("T")[0];case"date-time":return new Date(0).toISOString();case"dateTime":return new Date(0).toISOString();case"password":return"password";case"enum":return e.enum[0];case"uri":return"http://example.com";case"uuid":return"3fa85f64-5717-4562-b3fc-2c963f66afa6";case"email":return"user@example.com";case"hostname":return"example.com";case"ipv4":return"198.51.100.42";case"ipv6":return"2001:0db8:5b96:0000:0000:426f:8e17:642a";default:return e.nullable?null:(console.warn("Unknown schema value",e),"?")}}function p(e){var t=e.split("/");return t[0]+"//"+t[2]}function u(){var e=new WeakSet;return function(t,n){if("object"===Object(r["a"])(n)&&null!==n){if(e.has(n))return;e.add(n)}return n}}},c0d6:function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("a026"),a=n("2f62"),s=n("bfa9");r["default"].use(a["a"]);var i=["lang","specUrl","reqToken","reqTokenType","reqHeader","reqSendTokenIn","oAuthTokenUrl"];new s["a"]({key:"mrindoc",storage:window.localStorage,filter:function(e){return i.indexOf(e.type)>=0}});t["a"]=new a["a"].Store({state:{lang:"en",specUrl:"",isDevMode:!1,selectedApiServer:"",reqHeader:"",reqToken:"",reqTokenType:"",reqSendTokenIn:"",oAuthClientId:"",oAuthClientSecret:"",oAuthTokenUrl:""},mutations:{lang:function(e,t){e.lang=t},specUrl:function(e,t){e.specUrl=t},isDevMode:function(e,t){e.isDevMode=t},reqToken:function(e,t){e.reqToken=t},reqTokenType:function(e,t){e.reqTokenType=t},reqHeader:function(e,t){e.reqHeader=t},reqSendTokenIn:function(e,t){e.reqSendTokenIn=t},oAuthClientId:function(e,t){e.oAuthClientId=t},oAuthClientSecret:function(e,t){e.oAuthClientSecret=t},oAuthTokenUrl:function(e,t){e.oAuthTokenUrl=t},selectedApiServer:function(e,t){e.selectedApiServer=t}},plugins:[(new s["a"]).plugin]})},d064:function(e,t,n){"use strict";var r=n("5d88"),a=n.n(r);a.a},d5a1:function(e,t,n){}});
//# sourceMappingURL=app-legacy.52862b5b.js.map