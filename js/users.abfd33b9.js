(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["users"],{"4ec9":function(t,e,a){"use strict";var r=a("6d61"),n=a("6566");t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n,!0)},6566:function(t,e,a){"use strict";var r=a("9bf2").f,n=a("7c73"),s=a("e2cc"),o=a("f8c2"),i=a("19aa"),d=a("2266"),c=a("7dd0"),u=a("2626"),l=a("83ab"),f=a("f183").fastKey,v=a("69f3"),p=v.set,b=v.getterFor;t.exports={getConstructor:function(t,e,a,c){var u=t((function(t,r){i(t,u,e),p(t,{type:e,index:n(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=r&&d(r,t[c],t,a)})),v=b(e),y=function(t,e,a){var r,n,s=v(t),o=g(t,e);return o?o.value=a:(s.last=o={index:n=f(e,!0),key:e,value:a,previous:r=s.last,next:void 0,removed:!1},s.first||(s.first=o),r&&(r.next=o),l?s.size++:t.size++,"F"!==n&&(s.index[n]=o)),t},g=function(t,e){var a,r=v(t),n=f(e);if("F"!==n)return r.index[n];for(a=r.first;a;a=a.next)if(a.key==e)return a};return s(u.prototype,{clear:function(){var t=this,e=v(t),a=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete a[r.index],r=r.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,a=v(e),r=g(e,t);if(r){var n=r.next,s=r.previous;delete a.index[r.index],r.removed=!0,s&&(s.next=n),n&&(n.previous=s),a.first==r&&(a.first=n),a.last==r&&(a.last=s),l?a.size--:e.size--}return!!r},forEach:function(t){var e,a=v(this),r=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:a.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),s(u.prototype,a?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return y(this,0===t?0:t,e)}}:{add:function(t){return y(this,t=0===t?0:t,t)}}),l&&r(u.prototype,"size",{get:function(){return v(this).size}}),u},setStrong:function(t,e,a){var r=e+" Iterator",n=b(e),s=b(r);c(t,e,(function(t,e){p(this,{type:r,target:t,state:n(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,a=t.last;while(a&&a.removed)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),u(e)}}},"6d61":function(t,e,a){"use strict";var r=a("23e7"),n=a("da84"),s=a("94ca"),o=a("6eeb"),i=a("f183"),d=a("2266"),c=a("19aa"),u=a("861d"),l=a("d039"),f=a("1c7e"),v=a("d44e"),p=a("7156");t.exports=function(t,e,a,b,y){var g=n[t],h=g&&g.prototype,m=g,O=b?"set":"add",j={},x=function(t){var e=h[t];o(h,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!u(t))&&e.call(this,0===t?0:t)}:function(t,a){return e.call(this,0===t?0:t,a),this})};if(s(t,"function"!=typeof g||!(y||h.forEach&&!l((function(){(new g).entries().next()})))))m=a.getConstructor(e,t,b,O),i.REQUIRED=!0;else if(s(t,!0)){var w=new m,C=w[O](y?{}:-0,1)!=w,S=l((function(){w.has(1)})),k=f((function(t){new g(t)})),N=!y&&l((function(){var t=new g,e=5;while(e--)t[O](e,e);return!t.has(-0)}));k||(m=e((function(e,a){c(e,m,t);var r=p(new g,e,m);return void 0!=a&&d(a,r[O],r,b),r})),m.prototype=h,h.constructor=m),(S||N)&&(x("delete"),x("has"),b&&x("get")),(N||C)&&x(O),y&&h.clear&&delete h.clear}return j[t]=m,r({global:!0,forced:m!=g},j),v(m,t),y||a.setStrong(m,t,b),m}},ed81:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"users"},[a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Customer number",readonly:""},model:{value:t.data.custNo,callback:function(e){t.$set(t.data,"custNo",e)},expression:"data.custNo"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"First name",readonly:""},model:{value:t.data.firstName,callback:function(e){t.$set(t.data,"firstName",e)},expression:"data.firstName"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Last name",readonly:""},model:{value:t.data.lastName,callback:function(e){t.$set(t.data,"lastName",e)},expression:"data.lastName"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Street Address",required:""},model:{value:t.data.address.streetAddress,callback:function(e){t.$set(t.data.address,"streetAddress",e)},expression:"data.address.streetAddress"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Zip Code",required:""},model:{value:t.data.address.zipCode,callback:function(e){t.$set(t.data.address,"zipCode",e)},expression:"data.address.zipCode"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Street Name",required:""},model:{value:t.data.address.streetName,callback:function(e){t.$set(t.data.address,"streetName",e)},expression:"data.address.streetName"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"City",required:""},model:{value:t.data.address.city,callback:function(e){t.$set(t.data.address,"city",e)},expression:"data.address.city"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Country Code",required:""},model:{value:t.data.address.countryCode,callback:function(e){t.$set(t.data.address,"countryCode",e)},expression:"data.address.countryCode"}})],1)],1),a("v-btn",{staticClass:"mr-4 white--text",attrs:{color:"#00a1ab"},on:{click:t.updatePersona}},[t._v(" Save ")])],1)],1)],1)},n=[],s=a("bc3a"),o=a.n(s),i={name:"users-view",data:function(){return{title:"Users view",data:{uuid:"",firstName:"",lastName:"",custNo:"",address:{streetAddress:"",zipCode:"",streetName:"",city:"",countryCode:""}}}},created:function(){var t=this,e=o.a.create({baseURL:"https://persona.api.ksfmedia.fi/v1/",headers:{Authorization:"OAuth "+localStorage.token}});e.get("users/".concat(this.$route.params.id)).then((function(e){t.data.uuid=e.data.uuid,t.data.custNo=e.data.cusno,t.data.firstName=e.data.firstName,t.data.lastName=e.data.lastName,t.data.address.streetAddress=e.data.address.streetAddress,t.data.address.zipCode=e.data.address.zipCode,t.data.address.streetName=e.data.address.streetName,t.data.address.city=e.data.address.city,t.data.address.countryCode=e.data.address.countryCode})).catch((function(t){alert(t)}))},methods:{updatePersona:function(){var t=this,e=o.a.create({baseURL:"https://persona.api.ksfmedia.fi/v1/",headers:{Authorization:"OAuth "+localStorage.token}});e.patch("users/".concat(this.$route.params.id),{address:{countryCode:this.data.address.countryCode,zipCode:this.data.address.zipCode,streetAddress:this.data.address.streetAddress}}).then((function(e){alert("sucess"),t.data.address.countryCode=e.data.address.countryCode,t.data.address.zipCode=e.data.address.zipCode,t.data.address.streetAddress=e.data.address.streetAddress})).catch((function(t){alert(t)}))}}},d=i,c=a("2877"),u=a("6544"),l=a.n(u),f=a("8336"),v=(a("a4d3"),a("4de4"),a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0"),a("2fa7")),p=(a("4b85"),a("2b0e")),b=a("d9f7"),y=a("80d2");function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(a,!0).forEach((function(e){Object(v["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m=["sm","md","lg","xl"],O=function(){return m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),j=function(){return m.reduce((function(t,e){return t["offset"+Object(y["s"])(e)]={type:[String,Number],default:null},t}),{})}(),x=function(){return m.reduce((function(t,e){return t["order"+Object(y["s"])(e)]={type:[String,Number],default:null},t}),{})}(),w={col:Object.keys(O),offset:Object.keys(j),order:Object.keys(x)};function C(t,e,a){var r=t;if(null!=a&&!1!==a){if(e){var n=e.replace(t,"");r+="-".concat(n)}return"col"!==t||""!==a&&!0!==a?(r+="-".concat(a),r.toLowerCase()):r.toLowerCase()}}var S=new Map,k=p["a"].extend({name:"v-col",functional:!0,props:h({cols:{type:[Boolean,String,Number],default:!1}},O,{offset:{type:[String,Number],default:null}},j,{order:{type:[String,Number],default:null}},x,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},justifySelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,r=e.data,n=e.children,s=(e.parent,"");for(var o in a)s+=String(a[o]);var i=S.get(s);return i||function(){var t,e;for(e in i=[],w)w[e].forEach((function(t){var r=a[t],n=C(e,t,r);n&&i.push(n)}));var r=i.some((function(t){return t.startsWith("col-")}));i.push((t={col:!r||!a.cols},Object(v["a"])(t,"col-".concat(a.cols),a.cols),Object(v["a"])(t,"offset-".concat(a.offset),a.offset),Object(v["a"])(t,"order-".concat(a.order),a.order),Object(v["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),Object(v["a"])(t,"justify-self-".concat(a.justifySelf),a.justifySelf),t)),S.set(s,i)}(),t(a.tag,Object(b["a"])(r,{class:i}),n)}}),N=a("a523"),z=a("4bd4");a("99af"),a("2532");function P(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function A(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?P(a,!0).forEach((function(e){Object(v["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var E=["sm","md","lg","xl"],$=["start","end","center"];function D(t,e){return E.reduce((function(a,r){return a[t+Object(y["s"])(r)]=e(),a}),{})}var F=function(t){return[].concat($,["baseline","stretch"]).includes(t)},L=D("align",(function(){return{type:String,default:null,validator:F}})),V=function(t){return[].concat($,["space-between","space-around"]).includes(t)},q=D("justify",(function(){return{type:String,default:null,validator:V}})),B=function(t){return[].concat($,["space-between","space-around","stretch"]).includes(t)},R=D("alignContent",(function(){return{type:String,default:null,validator:B}})),U={align:Object.keys(L),justify:Object.keys(q),alignContent:Object.keys(R)},M={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,a){var r=M[t];if(null!=a){if(e){var n=e.replace(t,"");r+="-".concat(n)}return r+="-".concat(a),r.toLowerCase()}}var G=new Map,I=p["a"].extend({name:"v-row",functional:!0,props:A({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:F}},L,{justify:{type:String,default:null,validator:V}},q,{alignContent:{type:String,default:null,validator:B}},R),render:function(t,e){var a=e.props,r=e.data,n=e.children,s="";for(var o in a)s+=String(a[o]);var i=G.get(s);return i||function(){var t,e;for(e in i=[],U)U[e].forEach((function(t){var r=a[t],n=_(e,t,r);n&&i.push(n)}));i.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(v["a"])(t,"align-".concat(a.align),a.align),Object(v["a"])(t,"justify-".concat(a.justify),a.justify),Object(v["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),G.set(s,i)}(),t(a.tag,Object(b["a"])(r,{staticClass:"row",class:i}),n)}}),J=a("8654"),K=Object(c["a"])(d,r,n,!1,null,null,null);e["default"]=K.exports;l()(K,{VBtn:f["a"],VCol:k,VContainer:N["a"],VForm:z["a"],VRow:I,VTextField:J["a"]})}}]);
//# sourceMappingURL=users.abfd33b9.js.map