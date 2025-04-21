function Zp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function em(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nd={exports:{}},Ai={},rd={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),tm=Symbol.for("react.portal"),nm=Symbol.for("react.fragment"),rm=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),im=Symbol.for("react.provider"),lm=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),am=Symbol.for("react.suspense"),um=Symbol.for("react.memo"),cm=Symbol.for("react.lazy"),lu=Symbol.iterator;function dm(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},id=Object.assign,ld={};function fr(e,t,n){this.props=e,this.context=t,this.refs=ld,this.updater=n||od}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sd(){}sd.prototype=fr.prototype;function ta(e,t,n){this.props=e,this.context=t,this.refs=ld,this.updater=n||od}var na=ta.prototype=new sd;na.constructor=ta;id(na,fr.prototype);na.isPureReactComponent=!0;var su=Array.isArray,ad=Object.prototype.hasOwnProperty,ra={current:null},ud={key:!0,ref:!0,__self:!0,__source:!0};function cd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ad.call(t,r)&&!ud.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:fo,type:e,key:i,ref:l,props:o,_owner:ra.current}}function fm(e,t){return{$$typeof:fo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oa(e){return typeof e=="object"&&e!==null&&e.$$typeof===fo}function pm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var au=/\/+/g;function ul(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pm(""+e.key):t.toString(36)}function Wo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case fo:case tm:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ul(l,0):r,su(o)?(n="",e!=null&&(n=e.replace(au,"$&/")+"/"),Wo(o,t,n,"",function(c){return c})):o!=null&&(oa(o)&&(o=fm(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(au,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",su(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+ul(i,s);l+=Wo(i,t,n,a,o)}else if(a=dm(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+ul(i,s++),l+=Wo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function yo(e,t,n){if(e==null)return e;var r=[],o=0;return Wo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function mm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},Ho={transition:null},hm={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:ra};function dd(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:yo,forEach:function(e,t,n){yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yo(e,function(){t++}),t},toArray:function(e){return yo(e,function(t){return t})||[]},only:function(e){if(!oa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=fr;B.Fragment=nm;B.Profiler=om;B.PureComponent=ta;B.StrictMode=rm;B.Suspense=am;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hm;B.act=dd;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=id({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ra.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)ad.call(t,a)&&!ud.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:fo,type:e.type,key:o,ref:i,props:r,_owner:l}};B.createContext=function(e){return e={$$typeof:lm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:im,_context:e},e.Consumer=e};B.createElement=cd;B.createFactory=function(e){var t=cd.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:sm,render:e}};B.isValidElement=oa;B.lazy=function(e){return{$$typeof:cm,_payload:{_status:-1,_result:e},_init:mm}};B.memo=function(e,t){return{$$typeof:um,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ho.transition;Ho.transition={};try{e()}finally{Ho.transition=t}};B.unstable_act=dd;B.useCallback=function(e,t){return Ie.current.useCallback(e,t)};B.useContext=function(e){return Ie.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ie.current.useEffect(e,t)};B.useId=function(){return Ie.current.useId()};B.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ie.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};B.useRef=function(e){return Ie.current.useRef(e)};B.useState=function(e){return Ie.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Ie.current.useTransition()};B.version="18.3.1";rd.exports=B;var w=rd.exports;const kn=em(w),gm=Zp({__proto__:null,default:kn},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm=w,ym=Symbol.for("react.element"),xm=Symbol.for("react.fragment"),wm=Object.prototype.hasOwnProperty,Sm=vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,km={key:!0,ref:!0,__self:!0,__source:!0};function fd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)wm.call(t,r)&&!km.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ym,type:e,key:i,ref:l,props:o,_owner:Sm.current}}Ai.Fragment=xm;Ai.jsx=fd;Ai.jsxs=fd;nd.exports=Ai;var u=nd.exports,Jl={},pd={exports:{}},Qe={},md={exports:{}},hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,F){var M=T.length;T.push(F);e:for(;0<M;){var R=M-1>>>1,$=T[R];if(0<o($,F))T[R]=F,T[M]=$,M=R;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var F=T[0],M=T.pop();if(M!==F){T[0]=M;e:for(var R=0,$=T.length,H=$>>>1;R<H;){var le=2*(R+1)-1,Ue=T[le],Ce=le+1,ot=T[Ce];if(0>o(Ue,M))Ce<$&&0>o(ot,Ue)?(T[R]=ot,T[Ce]=M,R=Ce):(T[R]=Ue,T[le]=M,R=le);else if(Ce<$&&0>o(ot,M))T[R]=ot,T[Ce]=M,R=Ce;else break e}}return F}function o(T,F){var M=T.sortIndex-F.sortIndex;return M!==0?M:T.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],m=1,p=null,g=3,x=!1,k=!1,C=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=T)r(c),F.sortIndex=F.expirationTime,t(a,F);else break;F=n(c)}}function y(T){if(C=!1,h(T),!k)if(n(a)!==null)k=!0,b(j);else{var F=n(c);F!==null&&q(y,F.startTime-T)}}function j(T,F){k=!1,C&&(C=!1,f(L),L=-1),x=!0;var M=g;try{for(h(F),p=n(a);p!==null&&(!(p.expirationTime>F)||T&&!J());){var R=p.callback;if(typeof R=="function"){p.callback=null,g=p.priorityLevel;var $=R(p.expirationTime<=F);F=e.unstable_now(),typeof $=="function"?p.callback=$:p===n(a)&&r(a),h(F)}else r(a);p=n(a)}if(p!==null)var H=!0;else{var le=n(c);le!==null&&q(y,le.startTime-F),H=!1}return H}finally{p=null,g=M,x=!1}}var S=!1,E=null,L=-1,V=5,N=-1;function J(){return!(e.unstable_now()-N<V)}function Ye(){if(E!==null){var T=e.unstable_now();N=T;var F=!0;try{F=E(!0,T)}finally{F?ge():(S=!1,E=null)}}else S=!1}var ge;if(typeof d=="function")ge=function(){d(Ye)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,A=mt.port2;mt.port1.onmessage=Ye,ge=function(){A.postMessage(null)}}else ge=function(){z(Ye,0)};function b(T){E=T,S||(S=!0,ge())}function q(T,F){L=z(function(){T(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,b(j))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var M=g;g=F;try{return T()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,F){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=g;g=T;try{return F()}finally{g=M}},e.unstable_scheduleCallback=function(T,F,M){var R=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?R+M:R):M=R,T){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=M+$,T={id:m++,callback:F,priorityLevel:T,startTime:M,expirationTime:$,sortIndex:-1},M>R?(T.sortIndex=M,t(c,T),n(a)===null&&T===n(c)&&(C?(f(L),L=-1):C=!0,q(y,M-R))):(T.sortIndex=$,t(a,T),k||x||(k=!0,b(j))),T},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(T){var F=g;return function(){var M=g;g=F;try{return T.apply(this,arguments)}finally{g=M}}}})(hd);md.exports=hd;var Cm=md.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm=w,He=Cm;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gd=new Set,Hr={};function zn(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Hr[e]=t,e=0;e<t.length;e++)gd.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,Em=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uu={},cu={};function Pm(e){return Zl.call(cu,e)?!0:Zl.call(uu,e)?!1:Em.test(e)?cu[e]=!0:(uu[e]=!0,!1)}function _m(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zm(e,t,n,r){if(t===null||typeof t>"u"||_m(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var ia=/[\-:]([a-z])/g;function la(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ia,la);ke[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ia,la);ke[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ia,la);ke[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function sa(e,t,n,r){var o=ke.hasOwnProperty(t)?ke[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zm(t,n,o,r)&&(n=null),r||o===null?Pm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Mt=jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),aa=Symbol.for("react.strict_mode"),es=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),ua=Symbol.for("react.forward_ref"),ts=Symbol.for("react.suspense"),ns=Symbol.for("react.suspense_list"),ca=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),xd=Symbol.for("react.offscreen"),du=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,cl;function Tr(e){if(cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);cl=t&&t[1]||""}return`
`+cl+e}var dl=!1;function fl(e,t){if(!e||dl)return"";dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function Tm(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=fl(e.type,!1),e;case 11:return e=fl(e.type.render,!1),e;case 1:return e=fl(e.type,!0),e;default:return""}}function rs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case Mn:return"Portal";case es:return"Profiler";case aa:return"StrictMode";case ts:return"Suspense";case ns:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yd:return(e.displayName||"Context")+".Consumer";case vd:return(e._context.displayName||"Context")+".Provider";case ua:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ca:return t=e.displayName||null,t!==null?t:rs(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return rs(e(t))}catch{}}return null}function $m(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rs(t);case 8:return t===aa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lm(e){var t=wd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wo(e){e._valueTracker||(e._valueTracker=Lm(e))}function Sd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function os(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kd(e,t){t=t.checked,t!=null&&sa(e,"checked",t,!1)}function is(e,t){kd(e,t);var n=tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ls(e,t.type,n):t.hasOwnProperty("defaultValue")&&ls(e,t.type,tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ls(e,t,n){(t!=="number"||si(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $r=Array.isArray;function Kn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ss(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if($r(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tn(n)}}function Cd(e,t){var n=tn(t.value),r=tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function as(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var So,Ed=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=So.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Im=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){Im.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function Pd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function _d(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Pd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Nm=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function us(e,t){if(t){if(Nm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function cs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ds=null;function da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,Yn=null,qn=null;function gu(e){if(e=ho(e)){if(typeof fs!="function")throw Error(_(280));var t=e.stateNode;t&&(t=bi(t),fs(e.stateNode,e.type,t))}}function zd(e){Yn?qn?qn.push(e):qn=[e]:Yn=e}function Td(){if(Yn){var e=Yn,t=qn;if(qn=Yn=null,gu(e),t)for(e=0;e<t.length;e++)gu(t[e])}}function $d(e,t){return e(t)}function Ld(){}var pl=!1;function Id(e,t,n){if(pl)return e(t,n);pl=!0;try{return $d(e,t,n)}finally{pl=!1,(Yn!==null||qn!==null)&&(Ld(),Td())}}function Gr(e,t){var n=e.stateNode;if(n===null)return null;var r=bi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ps=!1;if(Lt)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){ps=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{ps=!1}function Rm(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Ar=!1,ai=null,ui=!1,ms=null,Mm={onError:function(e){Ar=!0,ai=e}};function Am(e,t,n,r,o,i,l,s,a){Ar=!1,ai=null,Rm.apply(Mm,arguments)}function Om(e,t,n,r,o,i,l,s,a){if(Am.apply(this,arguments),Ar){if(Ar){var c=ai;Ar=!1,ai=null}else throw Error(_(198));ui||(ui=!0,ms=c)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vu(e){if(Tn(e)!==e)throw Error(_(188))}function Fm(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return vu(o),e;if(i===r)return vu(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Rd(e){return e=Fm(e),e!==null?Md(e):null}function Md(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Md(e);if(t!==null)return t;e=e.sibling}return null}var Ad=He.unstable_scheduleCallback,yu=He.unstable_cancelCallback,Dm=He.unstable_shouldYield,Um=He.unstable_requestPaint,ae=He.unstable_now,bm=He.unstable_getCurrentPriorityLevel,fa=He.unstable_ImmediatePriority,Od=He.unstable_UserBlockingPriority,ci=He.unstable_NormalPriority,Bm=He.unstable_LowPriority,Fd=He.unstable_IdlePriority,Oi=null,St=null;function Vm(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Oi,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Qm,Wm=Math.log,Hm=Math.LN2;function Qm(e){return e>>>=0,e===0?32:31-(Wm(e)/Hm|0)|0}var ko=64,Co=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function di(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Lr(s):(i&=l,i!==0&&(r=Lr(i)))}else l=n&~o,l!==0?r=Lr(l):i!==0&&(r=Lr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),o=1<<n,r|=e[n],t&=~o;return r}function Gm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Km(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ct(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Gm(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function hs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dd(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function Ym(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function pa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var K=0;function Ud(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bd,ma,Bd,Vd,Wd,gs=!1,jo=[],Qt=null,Gt=null,Kt=null,Kr=new Map,Yr=new Map,bt=[],qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xu(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":Kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yr.delete(t.pointerId)}}function wr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ho(t),t!==null&&ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Xm(e,t,n,r,o){switch(t){case"focusin":return Qt=wr(Qt,e,t,n,r,o),!0;case"dragenter":return Gt=wr(Gt,e,t,n,r,o),!0;case"mouseover":return Kt=wr(Kt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Kr.set(i,wr(Kr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Yr.set(i,wr(Yr.get(i)||null,e,t,n,r,o)),!0}return!1}function Hd(e){var t=mn(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=Nd(n),t!==null){e.blockedOn=t,Wd(e.priority,function(){Bd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ds=r,n.target.dispatchEvent(r),ds=null}else return t=ho(n),t!==null&&ma(t),e.blockedOn=n,!1;t.shift()}return!0}function wu(e,t,n){Qo(e)&&n.delete(t)}function Jm(){gs=!1,Qt!==null&&Qo(Qt)&&(Qt=null),Gt!==null&&Qo(Gt)&&(Gt=null),Kt!==null&&Qo(Kt)&&(Kt=null),Kr.forEach(wu),Yr.forEach(wu)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,gs||(gs=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,Jm)))}function qr(e){function t(o){return Sr(o,e)}if(0<jo.length){Sr(jo[0],e);for(var n=1;n<jo.length;n++){var r=jo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&Sr(Qt,e),Gt!==null&&Sr(Gt,e),Kt!==null&&Sr(Kt,e),Kr.forEach(t),Yr.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)Hd(n),n.blockedOn===null&&bt.shift()}var Xn=Mt.ReactCurrentBatchConfig,fi=!0;function Zm(e,t,n,r){var o=K,i=Xn.transition;Xn.transition=null;try{K=1,ha(e,t,n,r)}finally{K=o,Xn.transition=i}}function eh(e,t,n,r){var o=K,i=Xn.transition;Xn.transition=null;try{K=4,ha(e,t,n,r)}finally{K=o,Xn.transition=i}}function ha(e,t,n,r){if(fi){var o=vs(e,t,n,r);if(o===null)jl(e,t,r,pi,n),xu(e,r);else if(Xm(o,e,t,n,r))r.stopPropagation();else if(xu(e,r),t&4&&-1<qm.indexOf(e)){for(;o!==null;){var i=ho(o);if(i!==null&&bd(i),i=vs(e,t,n,r),i===null&&jl(e,t,r,pi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else jl(e,t,r,null,n)}}var pi=null;function vs(e,t,n,r){if(pi=null,e=da(r),e=mn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pi=e,null}function Qd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bm()){case fa:return 1;case Od:return 4;case ci:case Bm:return 16;case Fd:return 536870912;default:return 16}default:return 16}}var Vt=null,ga=null,Go=null;function Gd(){if(Go)return Go;var e,t=ga,n=t.length,r,o="value"in Vt?Vt.value:Vt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Go=o.slice(e,1<r?1-r:void 0)}function Ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Eo(){return!0}function Su(){return!1}function Ge(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Eo:Su,this.isPropagationStopped=Su,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=Ge(pr),mo=ie({},pr,{view:0,detail:0}),th=Ge(mo),hl,gl,kr,Fi=ie({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(hl=e.screenX-kr.screenX,gl=e.screenY-kr.screenY):gl=hl=0,kr=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:gl}}),ku=Ge(Fi),nh=ie({},Fi,{dataTransfer:0}),rh=Ge(nh),oh=ie({},mo,{relatedTarget:0}),vl=Ge(oh),ih=ie({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),lh=Ge(ih),sh=ie({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ah=Ge(sh),uh=ie({},pr,{data:0}),Cu=Ge(uh),ch={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ph(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fh[e])?!!t[e]:!1}function ya(){return ph}var mh=ie({},mo,{key:function(e){if(e.key){var t=ch[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ya,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hh=Ge(mh),gh=ie({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ju=Ge(gh),vh=ie({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ya}),yh=Ge(vh),xh=ie({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wh=Ge(xh),Sh=ie({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kh=Ge(Sh),Ch=[9,13,27,32],xa=Lt&&"CompositionEvent"in window,Or=null;Lt&&"documentMode"in document&&(Or=document.documentMode);var jh=Lt&&"TextEvent"in window&&!Or,Kd=Lt&&(!xa||Or&&8<Or&&11>=Or),Eu=" ",Pu=!1;function Yd(e,t){switch(e){case"keyup":return Ch.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function Eh(e,t){switch(e){case"compositionend":return qd(t);case"keypress":return t.which!==32?null:(Pu=!0,Eu);case"textInput":return e=t.data,e===Eu&&Pu?null:e;default:return null}}function Ph(e,t){if(On)return e==="compositionend"||!xa&&Yd(e,t)?(e=Gd(),Go=ga=Vt=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kd&&t.locale!=="ko"?null:t.data;default:return null}}var _h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_h[e.type]:t==="textarea"}function Xd(e,t,n,r){zd(r),t=mi(t,"onChange"),0<t.length&&(n=new va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,Xr=null;function zh(e){uf(e,0)}function Di(e){var t=Un(e);if(Sd(t))return e}function Th(e,t){if(e==="change")return t}var Jd=!1;if(Lt){var yl;if(Lt){var xl="oninput"in document;if(!xl){var zu=document.createElement("div");zu.setAttribute("oninput","return;"),xl=typeof zu.oninput=="function"}yl=xl}else yl=!1;Jd=yl&&(!document.documentMode||9<document.documentMode)}function Tu(){Fr&&(Fr.detachEvent("onpropertychange",Zd),Xr=Fr=null)}function Zd(e){if(e.propertyName==="value"&&Di(Xr)){var t=[];Xd(t,Xr,e,da(e)),Id(zh,t)}}function $h(e,t,n){e==="focusin"?(Tu(),Fr=t,Xr=n,Fr.attachEvent("onpropertychange",Zd)):e==="focusout"&&Tu()}function Lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Di(Xr)}function Ih(e,t){if(e==="click")return Di(t)}function Nh(e,t){if(e==="input"||e==="change")return Di(t)}function Rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Rh;function Jr(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Zl.call(t,o)||!pt(e[o],t[o]))return!1}return!0}function $u(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lu(e,t){var n=$u(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$u(n)}}function ef(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ef(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tf(){for(var e=window,t=si();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=si(e.document)}return t}function wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mh(e){var t=tf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ef(n.ownerDocument.documentElement,n)){if(r!==null&&wa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Lu(n,i);var l=Lu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ah=Lt&&"documentMode"in document&&11>=document.documentMode,Fn=null,ys=null,Dr=null,xs=!1;function Iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xs||Fn==null||Fn!==si(r)||(r=Fn,"selectionStart"in r&&wa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&Jr(Dr,r)||(Dr=r,r=mi(ys,"onSelect"),0<r.length&&(t=new va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fn)))}function Po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},wl={},nf={};Lt&&(nf=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Ui(e){if(wl[e])return wl[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nf)return wl[e]=t[n];return e}var rf=Ui("animationend"),of=Ui("animationiteration"),lf=Ui("animationstart"),sf=Ui("transitionend"),af=new Map,Nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){af.set(e,t),zn(t,[e])}for(var Sl=0;Sl<Nu.length;Sl++){var kl=Nu[Sl],Oh=kl.toLowerCase(),Fh=kl[0].toUpperCase()+kl.slice(1);rn(Oh,"on"+Fh)}rn(rf,"onAnimationEnd");rn(of,"onAnimationIteration");rn(lf,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(sf,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Om(r,t,void 0,e),e.currentTarget=null}function uf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Ru(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Ru(o,s,c),i=a}}}if(ui)throw e=ms,ui=!1,ms=null,e}function Z(e,t){var n=t[js];n===void 0&&(n=t[js]=new Set);var r=e+"__bubble";n.has(r)||(cf(t,e,2,!1),n.add(r))}function Cl(e,t,n){var r=0;t&&(r|=4),cf(n,e,r,t)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[_o]){e[_o]=!0,gd.forEach(function(n){n!=="selectionchange"&&(Dh.has(n)||Cl(n,!1,e),Cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_o]||(t[_o]=!0,Cl("selectionchange",!1,t))}}function cf(e,t,n,r){switch(Qd(t)){case 1:var o=Zm;break;case 4:o=eh;break;default:o=ha}n=o.bind(null,t,n,e),o=void 0,!ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function jl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=mn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Id(function(){var c=i,m=da(n),p=[];e:{var g=af.get(e);if(g!==void 0){var x=va,k=e;switch(e){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":x=hh;break;case"focusin":k="focus",x=vl;break;case"focusout":k="blur",x=vl;break;case"beforeblur":case"afterblur":x=vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=yh;break;case rf:case of:case lf:x=lh;break;case sf:x=wh;break;case"scroll":x=th;break;case"wheel":x=kh;break;case"copy":case"cut":case"paste":x=ah;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ju}var C=(t&4)!==0,z=!C&&e==="scroll",f=C?g!==null?g+"Capture":null:g;C=[];for(var d=c,h;d!==null;){h=d;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,f!==null&&(y=Gr(d,f),y!=null&&C.push(eo(d,y,h)))),z)break;d=d.return}0<C.length&&(g=new x(g,k,null,n,m),p.push({event:g,listeners:C}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==ds&&(k=n.relatedTarget||n.fromElement)&&(mn(k)||k[It]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=c,k=k?mn(k):null,k!==null&&(z=Tn(k),k!==z||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=c),x!==k)){if(C=ku,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(C=ju,y="onPointerLeave",f="onPointerEnter",d="pointer"),z=x==null?g:Un(x),h=k==null?g:Un(k),g=new C(y,d+"leave",x,n,m),g.target=z,g.relatedTarget=h,y=null,mn(m)===c&&(C=new C(f,d+"enter",k,n,m),C.target=h,C.relatedTarget=z,y=C),z=y,x&&k)t:{for(C=x,f=k,d=0,h=C;h;h=Ln(h))d++;for(h=0,y=f;y;y=Ln(y))h++;for(;0<d-h;)C=Ln(C),d--;for(;0<h-d;)f=Ln(f),h--;for(;d--;){if(C===f||f!==null&&C===f.alternate)break t;C=Ln(C),f=Ln(f)}C=null}else C=null;x!==null&&Mu(p,g,x,C,!1),k!==null&&z!==null&&Mu(p,z,k,C,!0)}}e:{if(g=c?Un(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var j=Th;else if(_u(g))if(Jd)j=Nh;else{j=Lh;var S=$h}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Ih);if(j&&(j=j(e,c))){Xd(p,j,n,m);break e}S&&S(e,g,c),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&ls(g,"number",g.value)}switch(S=c?Un(c):window,e){case"focusin":(_u(S)||S.contentEditable==="true")&&(Fn=S,ys=c,Dr=null);break;case"focusout":Dr=ys=Fn=null;break;case"mousedown":xs=!0;break;case"contextmenu":case"mouseup":case"dragend":xs=!1,Iu(p,n,m);break;case"selectionchange":if(Ah)break;case"keydown":case"keyup":Iu(p,n,m)}var E;if(xa)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else On?Yd(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Kd&&n.locale!=="ko"&&(On||L!=="onCompositionStart"?L==="onCompositionEnd"&&On&&(E=Gd()):(Vt=m,ga="value"in Vt?Vt.value:Vt.textContent,On=!0)),S=mi(c,L),0<S.length&&(L=new Cu(L,e,null,n,m),p.push({event:L,listeners:S}),E?L.data=E:(E=qd(n),E!==null&&(L.data=E)))),(E=jh?Eh(e,n):Ph(e,n))&&(c=mi(c,"onBeforeInput"),0<c.length&&(m=new Cu("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=E))}uf(p,t)})}function eo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Gr(e,n),i!=null&&r.unshift(eo(e,i,o)),i=Gr(e,t),i!=null&&r.push(eo(e,i,o))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=Gr(n,i),a!=null&&l.unshift(eo(n,a,s))):o||(a=Gr(n,i),a!=null&&l.push(eo(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Uh=/\r\n?/g,bh=/\u0000|\uFFFD/g;function Au(e){return(typeof e=="string"?e:""+e).replace(Uh,`
`).replace(bh,"")}function zo(e,t,n){if(t=Au(t),Au(e)!==t&&n)throw Error(_(425))}function hi(){}var ws=null,Ss=null;function ks(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cs=typeof setTimeout=="function"?setTimeout:void 0,Bh=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,Vh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(e){return Ou.resolve(null).then(e).catch(Wh)}:Cs;function Wh(e){setTimeout(function(){throw e})}function El(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);qr(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mr=Math.random().toString(36).slice(2),wt="__reactFiber$"+mr,to="__reactProps$"+mr,It="__reactContainer$"+mr,js="__reactEvents$"+mr,Hh="__reactListeners$"+mr,Qh="__reactHandles$"+mr;function mn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fu(e);e!==null;){if(n=e[wt])return n;e=Fu(e)}return t}e=n,n=e.parentNode}return null}function ho(e){return e=e[wt]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function bi(e){return e[to]||null}var Es=[],bn=-1;function on(e){return{current:e}}function te(e){0>bn||(e.current=Es[bn],Es[bn]=null,bn--)}function X(e,t){bn++,Es[bn]=e.current,e.current=t}var nn={},Te=on(nn),Oe=on(!1),Cn=nn;function tr(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Fe(e){return e=e.childContextTypes,e!=null}function gi(){te(Oe),te(Te)}function Du(e,t,n){if(Te.current!==nn)throw Error(_(168));X(Te,t),X(Oe,n)}function df(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,$m(e)||"Unknown",o));return ie({},n,r)}function vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,Cn=Te.current,X(Te,e),X(Oe,Oe.current),!0}function Uu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=df(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,te(Oe),te(Te),X(Te,e)):te(Oe),X(Oe,n)}var _t=null,Bi=!1,Pl=!1;function ff(e){_t===null?_t=[e]:_t.push(e)}function Gh(e){Bi=!0,ff(e)}function ln(){if(!Pl&&_t!==null){Pl=!0;var e=0,t=K;try{var n=_t;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Bi=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),Ad(fa,ln),o}finally{K=t,Pl=!1}}return null}var Bn=[],Vn=0,yi=null,xi=0,Xe=[],Je=0,jn=null,zt=1,Tt="";function fn(e,t){Bn[Vn++]=xi,Bn[Vn++]=yi,yi=e,xi=t}function pf(e,t,n){Xe[Je++]=zt,Xe[Je++]=Tt,Xe[Je++]=jn,jn=e;var r=zt;e=Tt;var o=32-ct(r)-1;r&=~(1<<o),n+=1;var i=32-ct(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,zt=1<<32-ct(t)+o|n<<o|r,Tt=i+e}else zt=1<<i|n<<o|r,Tt=e}function Sa(e){e.return!==null&&(fn(e,1),pf(e,1,0))}function ka(e){for(;e===yi;)yi=Bn[--Vn],Bn[Vn]=null,xi=Bn[--Vn],Bn[Vn]=null;for(;e===jn;)jn=Xe[--Je],Xe[Je]=null,Tt=Xe[--Je],Xe[Je]=null,zt=Xe[--Je],Xe[Je]=null}var We=null,Ve=null,ne=!1,ut=null;function mf(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Ve=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jn!==null?{id:zt,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Ve=null,!0):!1;default:return!1}}function Ps(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _s(e){if(ne){var t=Ve;if(t){var n=t;if(!bu(e,t)){if(Ps(e))throw Error(_(418));t=Yt(n.nextSibling);var r=We;t&&bu(e,t)?mf(r,n):(e.flags=e.flags&-4097|2,ne=!1,We=e)}}else{if(Ps(e))throw Error(_(418));e.flags=e.flags&-4097|2,ne=!1,We=e}}}function Bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function To(e){if(e!==We)return!1;if(!ne)return Bu(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ks(e.type,e.memoizedProps)),t&&(t=Ve)){if(Ps(e))throw hf(),Error(_(418));for(;t;)mf(e,t),t=Yt(t.nextSibling)}if(Bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=We?Yt(e.stateNode.nextSibling):null;return!0}function hf(){for(var e=Ve;e;)e=Yt(e.nextSibling)}function nr(){Ve=We=null,ne=!1}function Ca(e){ut===null?ut=[e]:ut.push(e)}var Kh=Mt.ReactCurrentBatchConfig;function Cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function $o(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vu(e){var t=e._init;return t(e._payload)}function gf(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=Zt(f,d),f.index=0,f.sibling=null,f}function i(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,h,y){return d===null||d.tag!==6?(d=Nl(h,f.mode,y),d.return=f,d):(d=o(d,h),d.return=f,d)}function a(f,d,h,y){var j=h.type;return j===An?m(f,d,h.props.children,y,h.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dt&&Vu(j)===d.type)?(y=o(d,h.props),y.ref=Cr(f,d,h),y.return=f,y):(y=ti(h.type,h.key,h.props,null,f.mode,y),y.ref=Cr(f,d,h),y.return=f,y)}function c(f,d,h,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Rl(h,f.mode,y),d.return=f,d):(d=o(d,h.children||[]),d.return=f,d)}function m(f,d,h,y,j){return d===null||d.tag!==7?(d=xn(h,f.mode,y,j),d.return=f,d):(d=o(d,h),d.return=f,d)}function p(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Nl(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xo:return h=ti(d.type,d.key,d.props,null,f.mode,h),h.ref=Cr(f,null,d),h.return=f,h;case Mn:return d=Rl(d,f.mode,h),d.return=f,d;case Dt:var y=d._init;return p(f,y(d._payload),h)}if($r(d)||yr(d))return d=xn(d,f.mode,h,null),d.return=f,d;$o(f,d)}return null}function g(f,d,h,y){var j=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return j!==null?null:s(f,d,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case xo:return h.key===j?a(f,d,h,y):null;case Mn:return h.key===j?c(f,d,h,y):null;case Dt:return j=h._init,g(f,d,j(h._payload),y)}if($r(h)||yr(h))return j!==null?null:m(f,d,h,y,null);$o(f,h)}return null}function x(f,d,h,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(h)||null,s(d,f,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xo:return f=f.get(y.key===null?h:y.key)||null,a(d,f,y,j);case Mn:return f=f.get(y.key===null?h:y.key)||null,c(d,f,y,j);case Dt:var S=y._init;return x(f,d,h,S(y._payload),j)}if($r(y)||yr(y))return f=f.get(h)||null,m(d,f,y,j,null);$o(d,y)}return null}function k(f,d,h,y){for(var j=null,S=null,E=d,L=d=0,V=null;E!==null&&L<h.length;L++){E.index>L?(V=E,E=null):V=E.sibling;var N=g(f,E,h[L],y);if(N===null){E===null&&(E=V);break}e&&E&&N.alternate===null&&t(f,E),d=i(N,d,L),S===null?j=N:S.sibling=N,S=N,E=V}if(L===h.length)return n(f,E),ne&&fn(f,L),j;if(E===null){for(;L<h.length;L++)E=p(f,h[L],y),E!==null&&(d=i(E,d,L),S===null?j=E:S.sibling=E,S=E);return ne&&fn(f,L),j}for(E=r(f,E);L<h.length;L++)V=x(E,f,L,h[L],y),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?L:V.key),d=i(V,d,L),S===null?j=V:S.sibling=V,S=V);return e&&E.forEach(function(J){return t(f,J)}),ne&&fn(f,L),j}function C(f,d,h,y){var j=yr(h);if(typeof j!="function")throw Error(_(150));if(h=j.call(h),h==null)throw Error(_(151));for(var S=j=null,E=d,L=d=0,V=null,N=h.next();E!==null&&!N.done;L++,N=h.next()){E.index>L?(V=E,E=null):V=E.sibling;var J=g(f,E,N.value,y);if(J===null){E===null&&(E=V);break}e&&E&&J.alternate===null&&t(f,E),d=i(J,d,L),S===null?j=J:S.sibling=J,S=J,E=V}if(N.done)return n(f,E),ne&&fn(f,L),j;if(E===null){for(;!N.done;L++,N=h.next())N=p(f,N.value,y),N!==null&&(d=i(N,d,L),S===null?j=N:S.sibling=N,S=N);return ne&&fn(f,L),j}for(E=r(f,E);!N.done;L++,N=h.next())N=x(E,f,L,N.value,y),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?L:N.key),d=i(N,d,L),S===null?j=N:S.sibling=N,S=N);return e&&E.forEach(function(Ye){return t(f,Ye)}),ne&&fn(f,L),j}function z(f,d,h,y){if(typeof h=="object"&&h!==null&&h.type===An&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case xo:e:{for(var j=h.key,S=d;S!==null;){if(S.key===j){if(j=h.type,j===An){if(S.tag===7){n(f,S.sibling),d=o(S,h.props.children),d.return=f,f=d;break e}}else if(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dt&&Vu(j)===S.type){n(f,S.sibling),d=o(S,h.props),d.ref=Cr(f,S,h),d.return=f,f=d;break e}n(f,S);break}else t(f,S);S=S.sibling}h.type===An?(d=xn(h.props.children,f.mode,y,h.key),d.return=f,f=d):(y=ti(h.type,h.key,h.props,null,f.mode,y),y.ref=Cr(f,d,h),y.return=f,f=y)}return l(f);case Mn:e:{for(S=h.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=o(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Rl(h,f.mode,y),d.return=f,f=d}return l(f);case Dt:return S=h._init,z(f,d,S(h._payload),y)}if($r(h))return k(f,d,h,y);if(yr(h))return C(f,d,h,y);$o(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,h),d.return=f,f=d):(n(f,d),d=Nl(h,f.mode,y),d.return=f,f=d),l(f)):n(f,d)}return z}var rr=gf(!0),vf=gf(!1),wi=on(null),Si=null,Wn=null,ja=null;function Ea(){ja=Wn=Si=null}function Pa(e){var t=wi.current;te(wi),e._currentValue=t}function zs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){Si=e,ja=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(ja!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(Si===null)throw Error(_(308));Wn=e,Si.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var hn=null;function _a(e){hn===null?hn=[e]:hn.push(e)}function yf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,_a(t)):(n.next=o.next,o.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Nt(e,n)}return o=r.interleaved,o===null?(t.next=t,_a(r)):(t.next=o.next,o.next=t),r.interleaved=t,Nt(e,n)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pa(e,n)}}function Wu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ki(e,t,n,r){var o=e.updateQueue;Ut=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=a))}if(i!==null){var p=o.baseState;l=0,m=c=a=null,s=i;do{var g=s.lane,x=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,C=s;switch(g=t,x=n,C.tag){case 1:if(k=C.payload,typeof k=="function"){p=k.call(x,p,g);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=C.payload,g=typeof k=="function"?k.call(x,p,g):k,g==null)break e;p=ie({},p,g);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=x,a=p):m=m.next=x,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(m===null&&(a=p),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Pn|=l,e.lanes=l,e.memoizedState=p}}function Hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var go={},kt=on(go),no=on(go),ro=on(go);function gn(e){if(e===go)throw Error(_(174));return e}function Ta(e,t){switch(X(ro,t),X(no,e),X(kt,go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:as(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=as(t,e)}te(kt),X(kt,t)}function or(){te(kt),te(no),te(ro)}function wf(e){gn(ro.current);var t=gn(kt.current),n=as(t,e.type);t!==n&&(X(no,e),X(kt,n))}function $a(e){no.current===e&&(te(kt),te(no))}var re=on(0);function Ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _l=[];function La(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var qo=Mt.ReactCurrentDispatcher,zl=Mt.ReactCurrentBatchConfig,En=0,oe=null,me=null,ve=null,ji=!1,Ur=!1,oo=0,Yh=0;function Pe(){throw Error(_(321))}function Ia(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Na(e,t,n,r,o,i){if(En=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qo.current=e===null||e.memoizedState===null?Zh:eg,e=n(r,o),Ur){i=0;do{if(Ur=!1,oo=0,25<=i)throw Error(_(301));i+=1,ve=me=null,t.updateQueue=null,qo.current=tg,e=n(r,o)}while(Ur)}if(qo.current=Ei,t=me!==null&&me.next!==null,En=0,ve=me=oe=null,ji=!1,t)throw Error(_(300));return e}function Ra(){var e=oo!==0;return oo=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?oe.memoizedState=ve=e:ve=ve.next=e,ve}function nt(){if(me===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ve===null?oe.memoizedState:ve.next;if(t!==null)ve=t,me=e;else{if(e===null)throw Error(_(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ve===null?oe.memoizedState=ve=e:ve=ve.next=e}return ve}function io(e,t){return typeof t=="function"?t(e):t}function Tl(e){var t=nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var m=c.lane;if((En&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=p,l=r):a=a.next=p,oe.lanes|=m,Pn|=m}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,pt(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,Pn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=nt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);pt(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Sf(){}function kf(e,t){var n=oe,r=nt(),o=t(),i=!pt(r.memoizedState,o);if(i&&(r.memoizedState=o,Me=!0),r=r.queue,Ma(Ef.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,lo(9,jf.bind(null,n,r,o,t),void 0,null),xe===null)throw Error(_(349));En&30||Cf(n,t,o)}return o}function Cf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jf(e,t,n,r){t.value=n,t.getSnapshot=r,Pf(t)&&_f(e)}function Ef(e,t,n){return n(function(){Pf(t)&&_f(e)})}function Pf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function _f(e){var t=Nt(e,1);t!==null&&dt(t,e,1,-1)}function Qu(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:e},t.queue=e,e=e.dispatch=Jh.bind(null,oe,e),[t.memoizedState,e]}function lo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zf(){return nt().memoizedState}function Xo(e,t,n,r){var o=yt();oe.flags|=e,o.memoizedState=lo(1|t,n,void 0,r===void 0?null:r)}function Vi(e,t,n,r){var o=nt();r=r===void 0?null:r;var i=void 0;if(me!==null){var l=me.memoizedState;if(i=l.destroy,r!==null&&Ia(r,l.deps)){o.memoizedState=lo(t,n,i,r);return}}oe.flags|=e,o.memoizedState=lo(1|t,n,i,r)}function Gu(e,t){return Xo(8390656,8,e,t)}function Ma(e,t){return Vi(2048,8,e,t)}function Tf(e,t){return Vi(4,2,e,t)}function $f(e,t){return Vi(4,4,e,t)}function Lf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function If(e,t,n){return n=n!=null?n.concat([e]):null,Vi(4,4,Lf.bind(null,t,e),n)}function Aa(){}function Nf(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ia(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rf(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ia(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mf(e,t,n){return En&21?(pt(n,t)||(n=Dd(),oe.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function qh(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=zl.transition;zl.transition={};try{e(!1),t()}finally{K=n,zl.transition=r}}function Af(){return nt().memoizedState}function Xh(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Of(e))Ff(t,n);else if(n=yf(e,t,n,r),n!==null){var o=Le();dt(n,e,r,o),Df(n,t,r)}}function Jh(e,t,n){var r=Jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Of(e))Ff(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,pt(s,l)){var a=t.interleaved;a===null?(o.next=o,_a(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=yf(e,t,o,r),n!==null&&(o=Le(),dt(n,e,r,o),Df(n,t,r))}}function Of(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Ff(e,t){Ur=ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Df(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pa(e,n)}}var Ei={readContext:tt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Zh={readContext:tt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xo(4194308,4,Lf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xo(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xh.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:Qu,useDebugValue:Aa,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=Qu(!1),t=e[0];return e=qh.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,o=yt();if(ne){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),xe===null)throw Error(_(349));En&30||Cf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Gu(Ef.bind(null,r,i,e),[e]),r.flags|=2048,lo(9,jf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yt(),t=xe.identifierPrefix;if(ne){var n=Tt,r=zt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=oo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},eg={readContext:tt,useCallback:Nf,useContext:tt,useEffect:Ma,useImperativeHandle:If,useInsertionEffect:Tf,useLayoutEffect:$f,useMemo:Rf,useReducer:Tl,useRef:zf,useState:function(){return Tl(io)},useDebugValue:Aa,useDeferredValue:function(e){var t=nt();return Mf(t,me.memoizedState,e)},useTransition:function(){var e=Tl(io)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Sf,useSyncExternalStore:kf,useId:Af,unstable_isNewReconciler:!1},tg={readContext:tt,useCallback:Nf,useContext:tt,useEffect:Ma,useImperativeHandle:If,useInsertionEffect:Tf,useLayoutEffect:$f,useMemo:Rf,useReducer:$l,useRef:zf,useState:function(){return $l(io)},useDebugValue:Aa,useDeferredValue:function(e){var t=nt();return me===null?t.memoizedState=e:Mf(t,me.memoizedState,e)},useTransition:function(){var e=$l(io)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Sf,useSyncExternalStore:kf,useId:Af,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ts(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wi={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),o=Jt(e),i=$t(r,o);i.payload=t,n!=null&&(i.callback=n),t=qt(e,i,o),t!==null&&(dt(t,e,o,r),Yo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),o=Jt(e),i=$t(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qt(e,i,o),t!==null&&(dt(t,e,o,r),Yo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=Jt(e),o=$t(n,r);o.tag=2,t!=null&&(o.callback=t),t=qt(e,o,r),t!==null&&(dt(t,e,r,n),Yo(t,e,r))}};function Ku(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Jr(n,r)||!Jr(o,i):!0}function Uf(e,t,n){var r=!1,o=nn,i=t.contextType;return typeof i=="object"&&i!==null?i=tt(i):(o=Fe(t)?Cn:Te.current,r=t.contextTypes,i=(r=r!=null)?tr(e,o):nn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wi.enqueueReplaceState(t,t.state,null)}function $s(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},za(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=tt(i):(i=Fe(t)?Cn:Te.current,o.context=tr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ts(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Wi.enqueueReplaceState(o,o.state,null),ki(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t){try{var n="",r=t;do n+=Tm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ll(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ng=typeof WeakMap=="function"?WeakMap:Map;function bf(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_i||(_i=!0,bs=r),Ls(e,t)},n}function Bf(e,t,n){n=$t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ls(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ls(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ng;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=gg.bind(null,e,t,n),t.then(e,e))}function Xu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ju(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,qt(n,t,1))),n.lanes|=1),e)}var rg=Mt.ReactCurrentOwner,Me=!1;function $e(e,t,n,r){t.child=e===null?vf(t,null,n,r):rr(t,e.child,n,r)}function Zu(e,t,n,r,o){n=n.render;var i=t.ref;return Jn(t,o),r=Na(e,t,n,r,i,o),n=Ra(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(ne&&n&&Sa(t),t.flags|=1,$e(e,t,r,o),t.child)}function ec(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Wa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Vf(e,t,i,r,o)):(e=ti(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jr,n(l,r)&&e.ref===t.ref)return Rt(e,t,o)}return t.flags|=1,e=Zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Vf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Jr(i,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Rt(e,t,o)}return Is(e,t,n,r,o)}function Wf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Qn,Be),Be|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Qn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(Qn,Be),Be|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(Qn,Be),Be|=r;return $e(e,t,o,n),t.child}function Hf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Is(e,t,n,r,o){var i=Fe(n)?Cn:Te.current;return i=tr(t,i),Jn(t,o),n=Na(e,t,n,r,i,o),r=Ra(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(ne&&r&&Sa(t),t.flags|=1,$e(e,t,n,o),t.child)}function tc(e,t,n,r,o){if(Fe(n)){var i=!0;vi(t)}else i=!1;if(Jn(t,o),t.stateNode===null)Jo(e,t),Uf(t,n,r),$s(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=tt(c):(c=Fe(n)?Cn:Te.current,c=tr(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Yu(t,l,r,c),Ut=!1;var g=t.memoizedState;l.state=g,ki(t,r,l,o),a=t.memoizedState,s!==r||g!==a||Oe.current||Ut?(typeof m=="function"&&(Ts(t,n,m,r),a=t.memoizedState),(s=Ut||Ku(t,n,s,r,g,a,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,xf(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:st(t.type,s),l.props=c,p=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=Fe(n)?Cn:Te.current,a=tr(t,a));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==p||g!==a)&&Yu(t,l,r,a),Ut=!1,g=t.memoizedState,l.state=g,ki(t,r,l,o);var k=t.memoizedState;s!==p||g!==k||Oe.current||Ut?(typeof x=="function"&&(Ts(t,n,x,r),k=t.memoizedState),(c=Ut||Ku(t,n,c,r,g,k,a)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ns(e,t,n,r,i,o)}function Ns(e,t,n,r,o,i){Hf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Uu(t,n,!1),Rt(e,t,i);r=t.stateNode,rg.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=rr(t,e.child,null,i),t.child=rr(t,null,s,i)):$e(e,t,s,i),t.memoizedState=r.state,o&&Uu(t,n,!0),t.child}function Qf(e){var t=e.stateNode;t.pendingContext?Du(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Du(e,t.context,!1),Ta(e,t.containerInfo)}function nc(e,t,n,r,o){return nr(),Ca(o),t.flags|=256,$e(e,t,n,r),t.child}var Rs={dehydrated:null,treeContext:null,retryLane:0};function Ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gf(e,t,n){var r=t.pendingProps,o=re.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(re,o&1),e===null)return _s(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Gi(l,r,0,null),e=xn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ms(n),t.memoizedState=Rs,e):Oa(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return og(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Zt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Zt(s,i):(i=xn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ms(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Rs,r}return i=e.child,e=i.sibling,r=Zt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oa(e,t){return t=Gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,r){return r!==null&&Ca(r),rr(t,e.child,null,n),e=Oa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function og(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ll(Error(_(422))),Lo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Gi({mode:"visible",children:r.children},o,0,null),i=xn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&rr(t,e.child,null,l),t.child.memoizedState=Ms(l),t.memoizedState=Rs,i);if(!(t.mode&1))return Lo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=Ll(i,r,void 0),Lo(e,t,l,r)}if(s=(l&e.childLanes)!==0,Me||s){if(r=xe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nt(e,o),dt(r,e,o,-1))}return Va(),r=Ll(Error(_(421))),Lo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=vg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ve=Yt(o.nextSibling),We=t,ne=!0,ut=null,e!==null&&(Xe[Je++]=zt,Xe[Je++]=Tt,Xe[Je++]=jn,zt=e.id,Tt=e.overflow,jn=t),t=Oa(t,r.children),t.flags|=4096,t)}function rc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zs(e.return,t,n)}function Il(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Kf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if($e(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,n,t);else if(e.tag===19)rc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(re,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ci(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Il(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ci(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Il(t,!0,n,null,i);break;case"together":Il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ig(e,t,n){switch(t.tag){case 3:Qf(t),nr();break;case 5:wf(t);break;case 1:Fe(t.type)&&vi(t);break;case 4:Ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(wi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?Gf(e,t,n):(X(re,re.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Wf(e,t,n)}return Rt(e,t,n)}var Yf,As,qf,Xf;Yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};As=function(){};qf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,gn(kt.current);var i=null;switch(n){case"input":o=os(e,o),r=os(e,r),i=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":o=ss(e,o),r=ss(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hi)}us(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Z("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Xf=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lg(e,t,n){var r=t.pendingProps;switch(ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Fe(t.type)&&gi(),_e(t),null;case 3:return r=t.stateNode,or(),te(Oe),te(Te),La(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(To(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(Ws(ut),ut=null))),As(e,t),_e(t),null;case 5:$a(t);var o=gn(ro.current);if(n=t.type,e!==null&&t.stateNode!=null)qf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return _e(t),null}if(e=gn(kt.current),To(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[wt]=t,r[to]=i,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(o=0;o<Ir.length;o++)Z(Ir[o],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":fu(r,i),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Z("invalid",r);break;case"textarea":mu(r,i),Z("invalid",r)}us(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,s,e),o=["children",""+s]):Hr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Z("scroll",r)}switch(n){case"input":wo(r),pu(r,i,!0);break;case"textarea":wo(r),hu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=hi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[wt]=t,e[to]=r,Yf(e,t,!1,!1),t.stateNode=e;e:{switch(l=cs(n,r),n){case"dialog":Z("cancel",e),Z("close",e),o=r;break;case"iframe":case"object":case"embed":Z("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ir.length;o++)Z(Ir[o],e);o=r;break;case"source":Z("error",e),o=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=r;break;case"details":Z("toggle",e),o=r;break;case"input":fu(e,r),o=os(e,r),Z("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),Z("invalid",e);break;case"textarea":mu(e,r),o=ss(e,r),Z("invalid",e);break;default:o=r}us(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?_d(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ed(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Qr(e,a):typeof a=="number"&&Qr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Hr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&Z("scroll",e):a!=null&&sa(e,i,a,l))}switch(n){case"input":wo(e),pu(e,r,!1);break;case"textarea":wo(e),hu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Kn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=hi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)Xf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=gn(ro.current),gn(kt.current),To(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(i=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:zo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return _e(t),null;case 13:if(te(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Ve!==null&&t.mode&1&&!(t.flags&128))hf(),nr(),t.flags|=98560,i=!1;else if(i=To(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[wt]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else ut!==null&&(Ws(ut),ut=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?he===0&&(he=3):Va())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return or(),As(e,t),e===null&&Zr(t.stateNode.containerInfo),_e(t),null;case 10:return Pa(t.type._context),_e(t),null;case 17:return Fe(t.type)&&gi(),_e(t),null;case 19:if(te(re),i=t.memoizedState,i===null)return _e(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)jr(i,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ci(e),l!==null){for(t.flags|=128,jr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(re,re.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>lr&&(t.flags|=128,r=!0,jr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ci(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ne)return _e(t),null}else 2*ae()-i.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,r=!0,jr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=re.current,X(re,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return Ba(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function sg(e,t){switch(ka(t),t.tag){case 1:return Fe(t.type)&&gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),te(Oe),te(Te),La(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $a(t),null;case 13:if(te(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(re),null;case 4:return or(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return Ba(),null;case 24:return null;default:return null}}var Io=!1,ze=!1,ag=typeof WeakSet=="function"?WeakSet:Set,I=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Os(e,t,n){try{n()}catch(r){se(e,t,r)}}var oc=!1;function ug(e,t){if(ws=fi,e=tf(),wa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,m=0,p=e,g=null;t:for(;;){for(var x;p!==n||o!==0&&p.nodeType!==3||(s=l+o),p!==i||r!==0&&p.nodeType!==3||(a=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(x=p.firstChild)!==null;)g=p,p=x;for(;;){if(p===e)break t;if(g===n&&++c===o&&(s=l),g===i&&++m===r&&(a=l),(x=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ss={focusedElem:e,selectionRange:n},fi=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var C=k.memoizedProps,z=k.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?C:st(t.type,C),z);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(y){se(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return k=oc,oc=!1,k}function br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Os(t,n,i)}o=o.next}while(o!==r)}}function Hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jf(e){var t=e.alternate;t!==null&&(e.alternate=null,Jf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[to],delete t[js],delete t[Hh],delete t[Qh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zf(e){return e.tag===5||e.tag===3||e.tag===4}function ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ds(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hi));else if(r!==4&&(e=e.child,e!==null))for(Ds(e,t,n),e=e.sibling;e!==null;)Ds(e,t,n),e=e.sibling}function Us(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Us(e,t,n),e=e.sibling;e!==null;)Us(e,t,n),e=e.sibling}var we=null,at=!1;function At(e,t,n){for(n=n.child;n!==null;)ep(e,t,n),n=n.sibling}function ep(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Oi,n)}catch{}switch(n.tag){case 5:ze||Hn(n,t);case 6:var r=we,o=at;we=null,At(e,t,n),we=r,at=o,we!==null&&(at?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(at?(e=we,n=n.stateNode,e.nodeType===8?El(e.parentNode,n):e.nodeType===1&&El(e,n),qr(e)):El(we,n.stateNode));break;case 4:r=we,o=at,we=n.stateNode.containerInfo,at=!0,At(e,t,n),we=r,at=o;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Os(n,t,l),o=o.next}while(o!==r)}At(e,t,n);break;case 1:if(!ze&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,At(e,t,n),ze=r):At(e,t,n);break;default:At(e,t,n)}}function lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ag),t.forEach(function(r){var o=yg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:we=s.stateNode,at=!1;break e;case 3:we=s.stateNode.containerInfo,at=!0;break e;case 4:we=s.stateNode.containerInfo,at=!0;break e}s=s.return}if(we===null)throw Error(_(160));ep(i,l,o),we=null,at=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){se(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tp(t,e),t=t.sibling}function tp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),gt(e),r&4){try{br(3,e,e.return),Hi(3,e)}catch(C){se(e,e.return,C)}try{br(5,e,e.return)}catch(C){se(e,e.return,C)}}break;case 1:lt(t,e),gt(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(lt(t,e),gt(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var o=e.stateNode;try{Qr(o,"")}catch(C){se(e,e.return,C)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&kd(o,i),cs(s,l);var c=cs(s,i);for(l=0;l<a.length;l+=2){var m=a[l],p=a[l+1];m==="style"?_d(o,p):m==="dangerouslySetInnerHTML"?Ed(o,p):m==="children"?Qr(o,p):sa(o,m,p,c)}switch(s){case"input":is(o,i);break;case"textarea":Cd(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Kn(o,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?Kn(o,!!i.multiple,i.defaultValue,!0):Kn(o,!!i.multiple,i.multiple?[]:"",!1))}o[to]=i}catch(C){se(e,e.return,C)}}break;case 6:if(lt(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(C){se(e,e.return,C)}}break;case 3:if(lt(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qr(t.containerInfo)}catch(C){se(e,e.return,C)}break;case 4:lt(t,e),gt(e);break;case 13:lt(t,e),gt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ua=ae())),r&4&&lc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(c=ze)||m,lt(t,e),ze=c):lt(t,e),gt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(I=e,m=e.child;m!==null;){for(p=I=m;I!==null;){switch(g=I,x=g.child,g.tag){case 0:case 11:case 14:case 15:br(4,g,g.return);break;case 1:Hn(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(C){se(r,n,C)}}break;case 5:Hn(g,g.return);break;case 22:if(g.memoizedState!==null){ac(p);continue}}x!==null?(x.return=g,I=x):ac(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,a=p.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Pd("display",l))}catch(C){se(e,e.return,C)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){se(e,e.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:lt(t,e),gt(e),r&4&&lc(e);break;case 21:break;default:lt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Qr(o,""),r.flags&=-33);var i=ic(e);Us(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=ic(e);Ds(e,s,l);break;default:throw Error(_(161))}}catch(a){se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cg(e,t,n){I=e,np(e)}function np(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Io;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ze;s=Io;var c=ze;if(Io=l,(ze=a)&&!c)for(I=o;I!==null;)l=I,a=l.child,l.tag===22&&l.memoizedState!==null?uc(o):a!==null?(a.return=l,I=a):uc(o);for(;i!==null;)I=i,np(i),i=i.sibling;I=o,Io=s,ze=c}sc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,I=i):sc(e)}}function sc(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||Hi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Hu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&qr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ze||t.flags&512&&Fs(t)}catch(g){se(t,t.return,g)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function ac(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function uc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hi(4,t)}catch(a){se(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){se(t,o,a)}}var i=t.return;try{Fs(t)}catch(a){se(t,i,a)}break;case 5:var l=t.return;try{Fs(t)}catch(a){se(t,l,a)}}}catch(a){se(t,t.return,a)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var dg=Math.ceil,Pi=Mt.ReactCurrentDispatcher,Fa=Mt.ReactCurrentOwner,et=Mt.ReactCurrentBatchConfig,W=0,xe=null,fe=null,Se=0,Be=0,Qn=on(0),he=0,so=null,Pn=0,Qi=0,Da=0,Br=null,Re=null,Ua=0,lr=1/0,Et=null,_i=!1,bs=null,Xt=null,No=!1,Wt=null,zi=0,Vr=0,Bs=null,Zo=-1,ei=0;function Le(){return W&6?ae():Zo!==-1?Zo:Zo=ae()}function Jt(e){return e.mode&1?W&2&&Se!==0?Se&-Se:Kh.transition!==null?(ei===0&&(ei=Dd()),ei):(e=K,e!==0||(e=window.event,e=e===void 0?16:Qd(e.type)),e):1}function dt(e,t,n,r){if(50<Vr)throw Vr=0,Bs=null,Error(_(185));po(e,n,r),(!(W&2)||e!==xe)&&(e===xe&&(!(W&2)&&(Qi|=n),he===4&&Bt(e,Se)),De(e,r),n===1&&W===0&&!(t.mode&1)&&(lr=ae()+500,Bi&&ln()))}function De(e,t){var n=e.callbackNode;Km(e,t);var r=di(e,e===xe?Se:0);if(r===0)n!==null&&yu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yu(n),t===1)e.tag===0?Gh(cc.bind(null,e)):ff(cc.bind(null,e)),Vh(function(){!(W&6)&&ln()}),n=null;else{switch(Ud(r)){case 1:n=fa;break;case 4:n=Od;break;case 16:n=ci;break;case 536870912:n=Fd;break;default:n=ci}n=cp(n,rp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rp(e,t){if(Zo=-1,ei=0,W&6)throw Error(_(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=di(e,e===xe?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ti(e,r);else{t=r;var o=W;W|=2;var i=ip();(xe!==e||Se!==t)&&(Et=null,lr=ae()+500,yn(e,t));do try{mg();break}catch(s){op(e,s)}while(!0);Ea(),Pi.current=i,W=o,fe!==null?t=0:(xe=null,Se=0,t=he)}if(t!==0){if(t===2&&(o=hs(e),o!==0&&(r=o,t=Vs(e,o))),t===1)throw n=so,yn(e,0),Bt(e,r),De(e,ae()),n;if(t===6)Bt(e,r);else{if(o=e.current.alternate,!(r&30)&&!fg(o)&&(t=Ti(e,r),t===2&&(i=hs(e),i!==0&&(r=i,t=Vs(e,i))),t===1))throw n=so,yn(e,0),Bt(e,r),De(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:pn(e,Re,Et);break;case 3:if(Bt(e,r),(r&130023424)===r&&(t=Ua+500-ae(),10<t)){if(di(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Cs(pn.bind(null,e,Re,Et),t);break}pn(e,Re,Et);break;case 4:if(Bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ct(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dg(r/1960))-r,10<r){e.timeoutHandle=Cs(pn.bind(null,e,Re,Et),r);break}pn(e,Re,Et);break;case 5:pn(e,Re,Et);break;default:throw Error(_(329))}}}return De(e,ae()),e.callbackNode===n?rp.bind(null,e):null}function Vs(e,t){var n=Br;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=Ti(e,t),e!==2&&(t=Re,Re=n,t!==null&&Ws(t)),e}function Ws(e){Re===null?Re=e:Re.push.apply(Re,e)}function fg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!pt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bt(e,t){for(t&=~Da,t&=~Qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function cc(e){if(W&6)throw Error(_(327));Zn();var t=di(e,0);if(!(t&1))return De(e,ae()),null;var n=Ti(e,t);if(e.tag!==0&&n===2){var r=hs(e);r!==0&&(t=r,n=Vs(e,r))}if(n===1)throw n=so,yn(e,0),Bt(e,t),De(e,ae()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Re,Et),De(e,ae()),null}function ba(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(lr=ae()+500,Bi&&ln())}}function _n(e){Wt!==null&&Wt.tag===0&&!(W&6)&&Zn();var t=W;W|=1;var n=et.transition,r=K;try{if(et.transition=null,K=1,e)return e()}finally{K=r,et.transition=n,W=t,!(W&6)&&ln()}}function Ba(){Be=Qn.current,te(Qn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bh(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gi();break;case 3:or(),te(Oe),te(Te),La();break;case 5:$a(r);break;case 4:or();break;case 13:te(re);break;case 19:te(re);break;case 10:Pa(r.type._context);break;case 22:case 23:Ba()}n=n.return}if(xe=e,fe=e=Zt(e.current,null),Se=Be=t,he=0,so=null,Da=Qi=Pn=0,Re=Br=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}hn=null}return e}function op(e,t){do{var n=fe;try{if(Ea(),qo.current=Ei,ji){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ji=!1}if(En=0,ve=me=oe=null,Ur=!1,oo=0,Fa.current=null,n===null||n.return===null){he=1,so=t,fe=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=Se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=s,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=Xu(l);if(x!==null){x.flags&=-257,Ju(x,l,s,i,t),x.mode&1&&qu(i,c,t),t=x,a=c;var k=t.updateQueue;if(k===null){var C=new Set;C.add(a),t.updateQueue=C}else k.add(a);break e}else{if(!(t&1)){qu(i,c,t),Va();break e}a=Error(_(426))}}else if(ne&&s.mode&1){var z=Xu(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Ju(z,l,s,i,t),Ca(ir(a,s));break e}}i=a=ir(a,s),he!==4&&(he=2),Br===null?Br=[i]:Br.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=bf(i,a,t);Wu(i,f);break e;case 1:s=a;var d=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Xt===null||!Xt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Bf(i,s,t);Wu(i,y);break e}}i=i.return}while(i!==null)}sp(n)}catch(j){t=j,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function ip(){var e=Pi.current;return Pi.current=Ei,e===null?Ei:e}function Va(){(he===0||he===3||he===2)&&(he=4),xe===null||!(Pn&268435455)&&!(Qi&268435455)||Bt(xe,Se)}function Ti(e,t){var n=W;W|=2;var r=ip();(xe!==e||Se!==t)&&(Et=null,yn(e,t));do try{pg();break}catch(o){op(e,o)}while(!0);if(Ea(),W=n,Pi.current=r,fe!==null)throw Error(_(261));return xe=null,Se=0,he}function pg(){for(;fe!==null;)lp(fe)}function mg(){for(;fe!==null&&!Dm();)lp(fe)}function lp(e){var t=up(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?sp(e):fe=t,Fa.current=null}function sp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sg(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,fe=null;return}}else if(n=lg(n,t,Be),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);he===0&&(he=5)}function pn(e,t,n){var r=K,o=et.transition;try{et.transition=null,K=1,hg(e,t,n,r)}finally{et.transition=o,K=r}return null}function hg(e,t,n,r){do Zn();while(Wt!==null);if(W&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ym(e,i),e===xe&&(fe=xe=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||No||(No=!0,cp(ci,function(){return Zn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=et.transition,et.transition=null;var l=K;K=1;var s=W;W|=4,Fa.current=null,ug(e,n),tp(n,e),Mh(Ss),fi=!!ws,Ss=ws=null,e.current=n,cg(n),Um(),W=s,K=l,et.transition=i}else e.current=n;if(No&&(No=!1,Wt=e,zi=o),i=e.pendingLanes,i===0&&(Xt=null),Vm(n.stateNode),De(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(_i)throw _i=!1,e=bs,bs=null,e;return zi&1&&e.tag!==0&&Zn(),i=e.pendingLanes,i&1?e===Bs?Vr++:(Vr=0,Bs=e):Vr=0,ln(),null}function Zn(){if(Wt!==null){var e=Ud(zi),t=et.transition,n=K;try{if(et.transition=null,K=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,zi=0,W&6)throw Error(_(331));var o=W;for(W|=4,I=e.current;I!==null;){var i=I,l=i.child;if(I.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(I=c;I!==null;){var m=I;switch(m.tag){case 0:case 11:case 15:br(8,m,i)}var p=m.child;if(p!==null)p.return=m,I=p;else for(;I!==null;){m=I;var g=m.sibling,x=m.return;if(Jf(m),m===c){I=null;break}if(g!==null){g.return=x,I=g;break}I=x}}}var k=i.alternate;if(k!==null){var C=k.child;if(C!==null){k.child=null;do{var z=C.sibling;C.sibling=null,C=z}while(C!==null)}}I=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,I=l;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:br(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,I=f;break e}I=i.return}}var d=e.current;for(I=d;I!==null;){l=I;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,I=h;else e:for(l=d;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Hi(9,s)}}catch(j){se(s,s.return,j)}if(s===l){I=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,I=y;break e}I=s.return}}if(W=o,ln(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Oi,e)}catch{}r=!0}return r}finally{K=n,et.transition=t}}return!1}function dc(e,t,n){t=ir(n,t),t=bf(e,t,1),e=qt(e,t,1),t=Le(),e!==null&&(po(e,1,t),De(e,t))}function se(e,t,n){if(e.tag===3)dc(e,e,n);else for(;t!==null;){if(t.tag===3){dc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=ir(n,e),e=Bf(t,e,1),t=qt(t,e,1),e=Le(),t!==null&&(po(t,1,e),De(t,e));break}}t=t.return}}function gg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(Se&n)===n&&(he===4||he===3&&(Se&130023424)===Se&&500>ae()-Ua?yn(e,0):Da|=n),De(e,t)}function ap(e,t){t===0&&(e.mode&1?(t=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):t=1);var n=Le();e=Nt(e,t),e!==null&&(po(e,t,n),De(e,n))}function vg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ap(e,n)}function yg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),ap(e,n)}var up;up=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,ig(e,t,n);Me=!!(e.flags&131072)}else Me=!1,ne&&t.flags&1048576&&pf(t,xi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Jo(e,t),e=t.pendingProps;var o=tr(t,Te.current);Jn(t,n),o=Na(null,t,r,e,o,n);var i=Ra();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(i=!0,vi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,za(t),o.updater=Wi,t.stateNode=o,o._reactInternals=t,$s(t,r,e,n),t=Ns(null,t,r,!0,i,n)):(t.tag=0,ne&&i&&Sa(t),$e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Jo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=wg(r),e=st(r,e),o){case 0:t=Is(null,t,r,e,n);break e;case 1:t=tc(null,t,r,e,n);break e;case 11:t=Zu(null,t,r,e,n);break e;case 14:t=ec(null,t,r,st(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Is(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),tc(e,t,r,o,n);case 3:e:{if(Qf(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,xf(e,t),ki(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ir(Error(_(423)),t),t=nc(e,t,r,n,o);break e}else if(r!==o){o=ir(Error(_(424)),t),t=nc(e,t,r,n,o);break e}else for(Ve=Yt(t.stateNode.containerInfo.firstChild),We=t,ne=!0,ut=null,n=vf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===o){t=Rt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return wf(t),e===null&&_s(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ks(r,o)?l=null:i!==null&&ks(r,i)&&(t.flags|=32),Hf(e,t),$e(e,t,l,n),t.child;case 6:return e===null&&_s(t),null;case 13:return Gf(e,t,n);case 4:return Ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Zu(e,t,r,o,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,X(wi,r._currentValue),r._currentValue=l,i!==null)if(pt(i.value,l)){if(i.children===o.children&&!Oe.current){t=Rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=$t(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),zs(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),zs(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}$e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Jn(t,n),o=tt(o),r=r(o),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,o=st(r,t.pendingProps),o=st(r.type,o),ec(e,t,r,o,n);case 15:return Vf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Jo(e,t),t.tag=1,Fe(r)?(e=!0,vi(t)):e=!1,Jn(t,n),Uf(t,r,o),$s(t,r,o,n),Ns(null,t,r,!0,e,n);case 19:return Kf(e,t,n);case 22:return Wf(e,t,n)}throw Error(_(156,t.tag))};function cp(e,t){return Ad(e,t)}function xg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new xg(e,t,n,r)}function Wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wg(e){if(typeof e=="function")return Wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ua)return 11;if(e===ca)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ti(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Wa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case An:return xn(n.children,o,i,t);case aa:l=8,o|=8;break;case es:return e=Ze(12,n,t,o|2),e.elementType=es,e.lanes=i,e;case ts:return e=Ze(13,n,t,o),e.elementType=ts,e.lanes=i,e;case ns:return e=Ze(19,n,t,o),e.elementType=ns,e.lanes=i,e;case xd:return Gi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vd:l=10;break e;case yd:l=9;break e;case ua:l=11;break e;case ca:l=14;break e;case Dt:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ze(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function xn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function Gi(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=xd,e.lanes=n,e.stateNode={isHidden:!1},e}function Nl(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Rl(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ha(e,t,n,r,o,i,l,s,a){return e=new Sg(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(i),e}function kg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dp(e){if(!e)return nn;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Fe(n))return df(e,n,t)}return t}function fp(e,t,n,r,o,i,l,s,a){return e=Ha(n,r,!0,e,o,i,l,s,a),e.context=dp(null),n=e.current,r=Le(),o=Jt(n),i=$t(r,o),i.callback=t??null,qt(n,i,o),e.current.lanes=o,po(e,o,r),De(e,r),e}function Ki(e,t,n,r){var o=t.current,i=Le(),l=Jt(o);return n=dp(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qt(o,t,l),e!==null&&(dt(e,o,l,i),Yo(e,o,l)),l}function $i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qa(e,t){fc(e,t),(e=e.alternate)&&fc(e,t)}function Cg(){return null}var pp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ga(e){this._internalRoot=e}Yi.prototype.render=Ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ki(e,t,null,null)};Yi.prototype.unmount=Ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_n(function(){Ki(null,e,null,null)}),t[It]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&Hd(e)}};function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pc(){}function jg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=$i(l);i.call(c)}}var l=fp(t,r,e,0,null,!1,!1,"",pc);return e._reactRootContainer=l,e[It]=l.current,Zr(e.nodeType===8?e.parentNode:e),_n(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=$i(a);s.call(c)}}var a=Ha(e,0,!1,null,null,!1,!1,"",pc);return e._reactRootContainer=a,e[It]=a.current,Zr(e.nodeType===8?e.parentNode:e),_n(function(){Ki(t,a,n,r)}),a}function Xi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=$i(l);s.call(a)}}Ki(t,l,e,o)}else l=jg(n,t,e,o,r);return $i(l)}bd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lr(t.pendingLanes);n!==0&&(pa(t,n|1),De(t,ae()),!(W&6)&&(lr=ae()+500,ln()))}break;case 13:_n(function(){var r=Nt(e,1);if(r!==null){var o=Le();dt(r,e,1,o)}}),Qa(e,1)}};ma=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Le();dt(t,e,134217728,n)}Qa(e,134217728)}};Bd=function(e){if(e.tag===13){var t=Jt(e),n=Nt(e,t);if(n!==null){var r=Le();dt(n,e,t,r)}Qa(e,t)}};Vd=function(){return K};Wd=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};fs=function(e,t,n){switch(t){case"input":if(is(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=bi(r);if(!o)throw Error(_(90));Sd(r),is(r,o)}}}break;case"textarea":Cd(e,n);break;case"select":t=n.value,t!=null&&Kn(e,!!n.multiple,t,!1)}};$d=ba;Ld=_n;var Eg={usingClientEntryPoint:!1,Events:[ho,Un,bi,zd,Td,ba]},Er={findFiberByHostInstance:mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pg={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rd(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||Cg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{Oi=Ro.inject(Pg),St=Ro}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eg;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ka(t))throw Error(_(200));return kg(e,t,null,n)};Qe.createRoot=function(e,t){if(!Ka(e))throw Error(_(299));var n=!1,r="",o=pp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ha(e,1,!1,null,null,n,!1,r,o),e[It]=t.current,Zr(e.nodeType===8?e.parentNode:e),new Ga(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Rd(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return _n(e)};Qe.hydrate=function(e,t,n){if(!qi(t))throw Error(_(200));return Xi(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!Ka(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=pp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=fp(t,null,e,1,n??null,o,!1,i,l),e[It]=t.current,Zr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Yi(t)};Qe.render=function(e,t,n){if(!qi(t))throw Error(_(200));return Xi(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!qi(e))throw Error(_(40));return e._reactRootContainer?(_n(function(){Xi(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1};Qe.unstable_batchedUpdates=ba;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qi(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Xi(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function mp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mp)}catch(e){console.error(e)}}mp(),pd.exports=Qe;var _g=pd.exports,mc=_g;Jl.createRoot=mc.createRoot,Jl.hydrateRoot=mc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ao.apply(this,arguments)}var Ht;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ht||(Ht={}));const hc="popstate";function zg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:s}=r.location;return Hs("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Li(o)}return $g(t,n,null,e)}function ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function hp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Tg(){return Math.random().toString(36).substr(2,8)}function gc(e,t){return{usr:e.state,key:e.key,idx:t}}function Hs(e,t,n,r){return n===void 0&&(n=null),ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hr(t):t,{state:n,key:t&&t.key||r||Tg()})}function Li(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $g(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=Ht.Pop,a=null,c=m();c==null&&(c=0,l.replaceState(ao({},l.state,{idx:c}),""));function m(){return(l.state||{idx:null}).idx}function p(){s=Ht.Pop;let z=m(),f=z==null?null:z-c;c=z,a&&a({action:s,location:C.location,delta:f})}function g(z,f){s=Ht.Push;let d=Hs(C.location,z,f);c=m()+1;let h=gc(d,c),y=C.createHref(d);try{l.pushState(h,"",y)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(y)}i&&a&&a({action:s,location:C.location,delta:1})}function x(z,f){s=Ht.Replace;let d=Hs(C.location,z,f);c=m();let h=gc(d,c),y=C.createHref(d);l.replaceState(h,"",y),i&&a&&a({action:s,location:C.location,delta:0})}function k(z){let f=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof z=="string"?z:Li(z);return d=d.replace(/ $/,"%20"),ue(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let C={get action(){return s},get location(){return e(o,l)},listen(z){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(hc,p),a=z,()=>{o.removeEventListener(hc,p),a=null}},createHref(z){return t(o,z)},createURL:k,encodeLocation(z){let f=k(z);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:x,go(z){return l.go(z)}};return C}var vc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vc||(vc={}));function Lg(e,t,n){return n===void 0&&(n="/"),Ig(e,t,n)}function Ig(e,t,n,r){let o=typeof t=="string"?hr(t):t,i=Ya(o.pathname||"/",n);if(i==null)return null;let l=gp(e);Ng(l);let s=null;for(let a=0;s==null&&a<l.length;++a){let c=Hg(i);s=Bg(l[a],c)}return s}function gp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(ue(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=en([r,a.relativePath]),m=n.concat(a);i.children&&i.children.length>0&&(ue(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),gp(i.children,t,m,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Ug(c,i.index),routesMeta:m})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of vp(i.path))o(i,l,a)}),t}function vp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=vp(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Ng(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:bg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Rg=/^:[\w-]+$/,Mg=3,Ag=2,Og=1,Fg=10,Dg=-2,yc=e=>e==="*";function Ug(e,t){let n=e.split("/"),r=n.length;return n.some(yc)&&(r+=Dg),t&&(r+=Ag),n.filter(o=>!yc(o)).reduce((o,i)=>o+(Rg.test(i)?Mg:i===""?Og:Fg),r)}function bg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Bg(e,t,n){let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",p=Vg({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},m),g=a.route;if(!p)return null;Object.assign(o,p.params),l.push({params:o,pathname:en([i,p.pathname]),pathnameBase:Yg(en([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=en([i,p.pathnameBase]))}return l}function Vg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Wg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((c,m,p)=>{let{paramName:g,isOptional:x}=m;if(g==="*"){let C=s[p]||"";l=i.slice(0,i.length-C.length).replace(/(.)\/+$/,"$1")}const k=s[p];return x&&!k?c[g]=void 0:c[g]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function Wg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),hp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Hg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return hp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ya(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Qg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?hr(e):e;return{pathname:n?n.startsWith("/")?n:Gg(n,t):t,search:qg(r),hash:Xg(o)}}function Gg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ml(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Kg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qa(e,t){let n=Kg(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Xa(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=hr(e):(o=ao({},e),ue(!o.pathname||!o.pathname.includes("?"),Ml("?","pathname","search",o)),ue(!o.pathname||!o.pathname.includes("#"),Ml("#","pathname","hash",o)),ue(!o.search||!o.search.includes("#"),Ml("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),p-=1;o.pathname=g.join("/")}s=p>=0?t[p]:"/"}let a=Qg(o,s),c=l&&l!=="/"&&l.endsWith("/"),m=(i||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||m)&&(a.pathname+="/"),a}const en=e=>e.join("/").replace(/\/\/+/g,"/"),Yg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Jg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const yp=["post","put","patch","delete"];new Set(yp);const Zg=["get",...yp];new Set(Zg);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uo.apply(this,arguments)}const Ja=w.createContext(null),e0=w.createContext(null),sn=w.createContext(null),Ji=w.createContext(null),Ct=w.createContext({outlet:null,matches:[],isDataRoute:!1}),xp=w.createContext(null);function t0(e,t){let{relative:n}=t===void 0?{}:t;gr()||ue(!1);let{basename:r,navigator:o}=w.useContext(sn),{hash:i,pathname:l,search:s}=kp(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:en([r,l])),o.createHref({pathname:a,search:s,hash:i})}function gr(){return w.useContext(Ji)!=null}function an(){return gr()||ue(!1),w.useContext(Ji).location}function wp(e){w.useContext(sn).static||w.useLayoutEffect(e)}function Ke(){let{isDataRoute:e}=w.useContext(Ct);return e?g0():n0()}function n0(){gr()||ue(!1);let e=w.useContext(Ja),{basename:t,future:n,navigator:r}=w.useContext(sn),{matches:o}=w.useContext(Ct),{pathname:i}=an(),l=JSON.stringify(qa(o,n.v7_relativeSplatPath)),s=w.useRef(!1);return wp(()=>{s.current=!0}),w.useCallback(function(c,m){if(m===void 0&&(m={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let p=Xa(c,JSON.parse(l),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:en([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,l,i,e])}const r0=w.createContext(null);function o0(e){let t=w.useContext(Ct).outlet;return t&&w.createElement(r0.Provider,{value:e},t)}function Sp(){let{matches:e}=w.useContext(Ct),t=e[e.length-1];return t?t.params:{}}function kp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(sn),{matches:o}=w.useContext(Ct),{pathname:i}=an(),l=JSON.stringify(qa(o,r.v7_relativeSplatPath));return w.useMemo(()=>Xa(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function i0(e,t){return l0(e,t)}function l0(e,t,n,r){gr()||ue(!1);let{navigator:o,static:i}=w.useContext(sn),{matches:l}=w.useContext(Ct),s=l[l.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let m=an(),p;if(t){var g;let f=typeof t=="string"?hr(t):t;c==="/"||(g=f.pathname)!=null&&g.startsWith(c)||ue(!1),p=f}else p=m;let x=p.pathname||"/",k=x;if(c!=="/"){let f=c.replace(/^\//,"").split("/");k="/"+x.replace(/^\//,"").split("/").slice(f.length).join("/")}let C=Lg(e,{pathname:k}),z=d0(C&&C.map(f=>Object.assign({},f,{params:Object.assign({},a,f.params),pathname:en([c,o.encodeLocation?o.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?c:en([c,o.encodeLocation?o.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),l,n,r);return t&&z?w.createElement(Ji.Provider,{value:{location:uo({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Ht.Pop}},z):z}function s0(){let e=h0(),t=Jg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:o},n):null,null)}const a0=w.createElement(s0,null);class u0 extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Ct.Provider,{value:this.props.routeContext},w.createElement(xp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function c0(e){let{routeContext:t,match:n,children:r}=e,o=w.useContext(Ja);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Ct.Provider,{value:t},r)}function d0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let m=l.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);m>=0||ue(!1),l=l.slice(0,Math.min(l.length,m+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=m),p.route.id){let{loaderData:g,errors:x}=n,k=p.route.loader&&g[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||k){a=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((m,p,g)=>{let x,k=!1,C=null,z=null;n&&(x=s&&p.route.id?s[p.route.id]:void 0,C=p.route.errorElement||a0,a&&(c<0&&g===0?(v0("route-fallback"),k=!0,z=null):c===g&&(k=!0,z=p.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,g+1)),d=()=>{let h;return x?h=C:k?h=z:p.route.Component?h=w.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=m,w.createElement(c0,{match:p,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?w.createElement(u0,{location:n.location,revalidation:n.revalidation,component:C,error:x,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Cp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Cp||{}),jp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(jp||{});function f0(e){let t=w.useContext(Ja);return t||ue(!1),t}function p0(e){let t=w.useContext(e0);return t||ue(!1),t}function m0(e){let t=w.useContext(Ct);return t||ue(!1),t}function Ep(e){let t=m0(),n=t.matches[t.matches.length-1];return n.route.id||ue(!1),n.route.id}function h0(){var e;let t=w.useContext(xp),n=p0(),r=Ep();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function g0(){let{router:e}=f0(Cp.UseNavigateStable),t=Ep(jp.UseNavigateStable),n=w.useRef(!1);return wp(()=>{n.current=!0}),w.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,uo({fromRouteId:t},i)))},[e,t])}const xc={};function v0(e,t,n){xc[e]||(xc[e]=!0)}function y0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function x0(e){let{to:t,replace:n,state:r,relative:o}=e;gr()||ue(!1);let{future:i,static:l}=w.useContext(sn),{matches:s}=w.useContext(Ct),{pathname:a}=an(),c=Ke(),m=Xa(t,qa(s,i.v7_relativeSplatPath),a,o==="path"),p=JSON.stringify(m);return w.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:o}),[c,p,o,n,r]),null}function Pp(e){return o0(e.context)}function qe(e){ue(!1)}function w0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ht.Pop,navigator:i,static:l=!1,future:s}=e;gr()&&ue(!1);let a=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:a,navigator:i,static:l,future:uo({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof r=="string"&&(r=hr(r));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:k="default"}=r,C=w.useMemo(()=>{let z=Ya(m,a);return z==null?null:{location:{pathname:z,search:p,hash:g,state:x,key:k},navigationType:o}},[a,m,p,g,x,k,o]);return C==null?null:w.createElement(sn.Provider,{value:c},w.createElement(Ji.Provider,{children:n,value:C}))}function S0(e){let{children:t,location:n}=e;return i0(Qs(t),n)}new Promise(()=>{});function Qs(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,o)=>{if(!w.isValidElement(r))return;let i=[...t,o];if(r.type===w.Fragment){n.push.apply(n,Qs(r.props.children,i));return}r.type!==qe&&ue(!1),!r.props.index||!r.props.children||ue(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Qs(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gs(){return Gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gs.apply(this,arguments)}function k0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function C0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function j0(e,t){return e.button===0&&(!t||t==="_self")&&!C0(e)}const E0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],P0="6";try{window.__reactRouterVersion=P0}catch{}const _0="startTransition",wc=gm[_0];function z0(e){let{basename:t,children:n,future:r,window:o}=e,i=w.useRef();i.current==null&&(i.current=zg({window:o,v5Compat:!0}));let l=i.current,[s,a]=w.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},m=w.useCallback(p=>{c&&wc?wc(()=>a(p)):a(p)},[a,c]);return w.useLayoutEffect(()=>l.listen(m),[l,m]),w.useEffect(()=>y0(r),[r]),w.createElement(w0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const T0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,L0=w.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:a,to:c,preventScrollReset:m,viewTransition:p}=t,g=k0(t,E0),{basename:x}=w.useContext(sn),k,C=!1;if(typeof c=="string"&&$0.test(c)&&(k=c,T0))try{let h=new URL(window.location.href),y=c.startsWith("//")?new URL(h.protocol+c):new URL(c),j=Ya(y.pathname,x);y.origin===h.origin&&j!=null?c=j+y.search+y.hash:C=!0}catch{}let z=t0(c,{relative:o}),f=I0(c,{replace:l,state:s,target:a,preventScrollReset:m,relative:o,viewTransition:p});function d(h){r&&r(h),h.defaultPrevented||f(h)}return w.createElement("a",Gs({},g,{href:k||z,onClick:C||i?r:d,ref:n,target:a}))});var Sc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sc||(Sc={}));var kc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(kc||(kc={}));function I0(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:s}=t===void 0?{}:t,a=Ke(),c=an(),m=kp(e,{relative:l});return w.useCallback(p=>{if(j0(p,n)){p.preventDefault();let g=r!==void 0?r:Li(c)===Li(m);a(e,{replace:g,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[c,a,m,r,o,n,e,i,l,s])}var Ae=function(){return Ae=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ae.apply(this,arguments)};function Ii(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ee="-ms-",Wr="-moz-",G="-webkit-",_p="comm",Zi="rule",Za="decl",N0="@import",zp="@keyframes",R0="@layer",Tp=Math.abs,eu=String.fromCharCode,Ks=Object.assign;function M0(e,t){return ye(e,0)^45?(((t<<2^ye(e,0))<<2^ye(e,1))<<2^ye(e,2))<<2^ye(e,3):0}function $p(e){return e.trim()}function Pt(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function ni(e,t,n){return e.indexOf(t,n)}function ye(e,t){return e.charCodeAt(t)|0}function sr(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function Lp(e){return e.length}function Nr(e,t){return t.push(e),e}function A0(e,t){return e.map(t).join("")}function Cc(e,t){return e.filter(function(n){return!Pt(n,t)})}var el=1,ar=1,Ip=0,rt=0,de=0,vr="";function tl(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:el,column:ar,length:l,return:"",siblings:s}}function Ft(e,t){return Ks(tl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function In(e){for(;e.root;)e=Ft(e.root,{children:[e]});Nr(e,e.siblings)}function O0(){return de}function F0(){return de=rt>0?ye(vr,--rt):0,ar--,de===10&&(ar=1,el--),de}function ft(){return de=rt<Ip?ye(vr,rt++):0,ar++,de===10&&(ar=1,el++),de}function wn(){return ye(vr,rt)}function ri(){return rt}function nl(e,t){return sr(vr,e,t)}function Ys(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function D0(e){return el=ar=1,Ip=xt(vr=e),rt=0,[]}function U0(e){return vr="",e}function Al(e){return $p(nl(rt-1,qs(e===91?e+2:e===40?e+1:e)))}function b0(e){for(;(de=wn())&&de<33;)ft();return Ys(e)>2||Ys(de)>3?"":" "}function B0(e,t){for(;--t&&ft()&&!(de<48||de>102||de>57&&de<65||de>70&&de<97););return nl(e,ri()+(t<6&&wn()==32&&ft()==32))}function qs(e){for(;ft();)switch(de){case e:return rt;case 34:case 39:e!==34&&e!==39&&qs(de);break;case 40:e===41&&qs(e);break;case 92:ft();break}return rt}function V0(e,t){for(;ft()&&e+de!==57;)if(e+de===84&&wn()===47)break;return"/*"+nl(t,rt-1)+"*"+eu(e===47?e:ft())}function W0(e){for(;!Ys(wn());)ft();return nl(e,rt)}function H0(e){return U0(oi("",null,null,null,[""],e=D0(e),0,[0],e))}function oi(e,t,n,r,o,i,l,s,a){for(var c=0,m=0,p=l,g=0,x=0,k=0,C=1,z=1,f=1,d=0,h="",y=o,j=i,S=r,E=h;z;)switch(k=d,d=ft()){case 40:if(k!=108&&ye(E,p-1)==58){ni(E+=U(Al(d),"&","&\f"),"&\f",Tp(c?s[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:E+=Al(d);break;case 9:case 10:case 13:case 32:E+=b0(k);break;case 92:E+=B0(ri()-1,7);continue;case 47:switch(wn()){case 42:case 47:Nr(Q0(V0(ft(),ri()),t,n,a),a);break;default:E+="/"}break;case 123*C:s[c++]=xt(E)*f;case 125*C:case 59:case 0:switch(d){case 0:case 125:z=0;case 59+m:f==-1&&(E=U(E,/\f/g,"")),x>0&&xt(E)-p&&Nr(x>32?Ec(E+";",r,n,p-1,a):Ec(U(E," ","")+";",r,n,p-2,a),a);break;case 59:E+=";";default:if(Nr(S=jc(E,t,n,c,m,o,s,h,y=[],j=[],p,i),i),d===123)if(m===0)oi(E,t,S,S,y,i,p,s,j);else switch(g===99&&ye(E,3)===110?100:g){case 100:case 108:case 109:case 115:oi(e,S,S,r&&Nr(jc(e,S,S,0,0,o,s,h,o,y=[],p,j),j),o,j,p,s,r?y:j);break;default:oi(E,S,S,S,[""],j,0,s,j)}}c=m=x=0,C=f=1,h=E="",p=l;break;case 58:p=1+xt(E),x=k;default:if(C<1){if(d==123)--C;else if(d==125&&C++==0&&F0()==125)continue}switch(E+=eu(d),d*C){case 38:f=m>0?1:(E+="\f",-1);break;case 44:s[c++]=(xt(E)-1)*f,f=1;break;case 64:wn()===45&&(E+=Al(ft())),g=wn(),m=p=xt(h=E+=W0(ri())),d++;break;case 45:k===45&&xt(E)==2&&(C=0)}}return i}function jc(e,t,n,r,o,i,l,s,a,c,m,p){for(var g=o-1,x=o===0?i:[""],k=Lp(x),C=0,z=0,f=0;C<r;++C)for(var d=0,h=sr(e,g+1,g=Tp(z=l[C])),y=e;d<k;++d)(y=$p(z>0?x[d]+" "+h:U(h,/&\f/g,x[d])))&&(a[f++]=y);return tl(e,t,n,o===0?Zi:s,a,c,m,p)}function Q0(e,t,n,r){return tl(e,t,n,_p,eu(O0()),sr(e,2,-2),0,r)}function Ec(e,t,n,r,o){return tl(e,t,n,Za,sr(e,0,r),sr(e,r+1,-1),r,o)}function Np(e,t,n){switch(M0(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 4789:return Wr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+Wr+e+ee+e+e;case 5936:switch(ye(e,t+11)){case 114:return G+e+ee+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+ee+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+ee+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return G+e+ee+e+e;case 6165:return G+e+ee+"flex-"+e+e;case 5187:return G+e+U(e,/(\w+).+(:[^]+)/,G+"box-$1$2"+ee+"flex-$1$2")+e;case 5443:return G+e+ee+"flex-item-"+U(e,/flex-|-self/g,"")+(Pt(e,/flex-|baseline/)?"":ee+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return G+e+ee+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return G+e+ee+U(e,"shrink","negative")+e;case 5292:return G+e+ee+U(e,"basis","preferred-size")+e;case 6060:return G+"box-"+U(e,"-grow","")+G+e+ee+U(e,"grow","positive")+e;case 4554:return G+U(e,/([^-])(transform)/g,"$1"+G+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4200:if(!Pt(e,/flex-|baseline/))return ee+"grid-column-align"+sr(e,t)+e;break;case 2592:case 3360:return ee+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Pt(r.props,/grid-\w+-end/)})?~ni(e+(n=n[t].value),"span",0)?e:ee+U(e,"-start","")+e+ee+"grid-row-span:"+(~ni(n,"span",0)?Pt(n,/\d+/):+Pt(n,/\d+/)-+Pt(e,/\d+/))+";":ee+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Pt(r.props,/grid-\w+-start/)})?e:ee+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(ye(e,t+1)){case 109:if(ye(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+Wr+(ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ni(e,"stretch",0)?Np(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,c){return ee+o+":"+i+c+(l?ee+o+"-span:"+(s?a:+a-+i)+c:"")+e});case 4949:if(ye(e,t+6)===121)return U(e,":",":"+G)+e;break;case 6444:switch(ye(e,ye(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+G+(ye(e,14)===45?"inline-":"")+"box$3$1"+G+"$2$3$1"+ee+"$2box$3")+e;case 100:return U(e,":",":"+ee)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function Ni(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function G0(e,t,n,r){switch(e.type){case R0:if(e.children.length)break;case N0:case Za:return e.return=e.return||e.value;case _p:return"";case zp:return e.return=e.value+"{"+Ni(e.children,r)+"}";case Zi:if(!xt(e.value=e.props.join(",")))return""}return xt(n=Ni(e.children,r))?e.return=e.value+"{"+n+"}":""}function K0(e){var t=Lp(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Y0(e){return function(t){t.root||(t=t.return)&&e(t)}}function q0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Za:e.return=Np(e.value,e.length,n);return;case zp:return Ni([Ft(e,{value:U(e.value,"@","@"+G)})],r);case Zi:if(e.length)return A0(n=e.props,function(o){switch(Pt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":In(Ft(e,{props:[U(o,/:(read-\w+)/,":"+Wr+"$1")]})),In(Ft(e,{props:[o]})),Ks(e,{props:Cc(n,r)});break;case"::placeholder":In(Ft(e,{props:[U(o,/:(plac\w+)/,":"+G+"input-$1")]})),In(Ft(e,{props:[U(o,/:(plac\w+)/,":"+Wr+"$1")]})),In(Ft(e,{props:[U(o,/:(plac\w+)/,ee+"input-$1")]})),In(Ft(e,{props:[o]})),Ks(e,{props:Cc(n,r)});break}return""})}}var X0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},be={},ur=typeof process<"u"&&be!==void 0&&(be.REACT_APP_SC_ATTR||be.SC_ATTR)||"data-styled",Rp="active",Mp="data-styled-version",rl="6.1.17",tu=`/*!sc*/
`,Ri=typeof window<"u"&&"HTMLElement"in window,J0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&be!==void 0&&be.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&be.REACT_APP_SC_DISABLE_SPEEDY!==""?be.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&be.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&be!==void 0&&be.SC_DISABLE_SPEEDY!==void 0&&be.SC_DISABLE_SPEEDY!==""&&be.SC_DISABLE_SPEEDY!=="false"&&be.SC_DISABLE_SPEEDY),ol=Object.freeze([]),cr=Object.freeze({});function Z0(e,t,n){return n===void 0&&(n=cr),e.theme!==n.theme&&e.theme||t||n.theme}var Ap=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ev=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tv=/(^-|-$)/g;function Pc(e){return e.replace(ev,"-").replace(tv,"")}var nv=/(a)(d)/gi,Mo=52,_c=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xs(e){var t,n="";for(t=Math.abs(e);t>Mo;t=t/Mo|0)n=_c(t%Mo)+n;return(_c(t%Mo)+n).replace(nv,"$1-$2")}var Ol,Op=5381,Gn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Fp=function(e){return Gn(Op,e)};function rv(e){return Xs(Fp(e)>>>0)}function ov(e){return e.displayName||e.name||"Component"}function Fl(e){return typeof e=="string"&&!0}var Dp=typeof Symbol=="function"&&Symbol.for,Up=Dp?Symbol.for("react.memo"):60115,iv=Dp?Symbol.for("react.forward_ref"):60112,lv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},av=((Ol={})[iv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ol[Up]=bp,Ol);function zc(e){return("type"in(t=e)&&t.type.$$typeof)===Up?bp:"$$typeof"in e?av[e.$$typeof]:lv;var t}var uv=Object.defineProperty,cv=Object.getOwnPropertyNames,Tc=Object.getOwnPropertySymbols,dv=Object.getOwnPropertyDescriptor,fv=Object.getPrototypeOf,$c=Object.prototype;function Bp(e,t,n){if(typeof t!="string"){if($c){var r=fv(t);r&&r!==$c&&Bp(e,r,n)}var o=cv(t);Tc&&(o=o.concat(Tc(t)));for(var i=zc(e),l=zc(t),s=0;s<o.length;++s){var a=o[s];if(!(a in sv||n&&n[a]||l&&a in l||i&&a in i)){var c=dv(t,a);try{uv(e,a,c)}catch{}}}}return e}function dr(e){return typeof e=="function"}function nu(e){return typeof e=="object"&&"styledComponentId"in e}function vn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Lc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function co(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Js(e,t,n){if(n===void 0&&(n=!1),!n&&!co(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Js(e[r],t[r]);else if(co(t))for(var r in t)e[r]=Js(e[r],t[r]);return e}function ru(e,t){Object.defineProperty(e,"toString",{value:t})}function vo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var pv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw vo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(tu);return n},e}(),ii=new Map,Mi=new Map,li=1,Ao=function(e){if(ii.has(e))return ii.get(e);for(;Mi.has(li);)li++;var t=li++;return ii.set(e,t),Mi.set(t,e),t},mv=function(e,t){li=t+1,ii.set(e,t),Mi.set(t,e)},hv="style[".concat(ur,"][").concat(Mp,'="').concat(rl,'"]'),gv=new RegExp("^".concat(ur,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vv=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},yv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(tu),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(gv);if(a){var c=0|parseInt(a[1],10),m=a[2];c!==0&&(mv(m,c),vv(e,m,a[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},Ic=function(e){for(var t=document.querySelectorAll(hv),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(ur)!==Rp&&(yv(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function xv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var a=Array.from(s.querySelectorAll("style[".concat(ur,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(ur,Rp),r.setAttribute(Mp,rl);var l=xv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},wv=function(){function e(t){this.element=Vp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw vo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Sv=function(){function e(t){this.element=Vp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),kv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Nc=Ri,Cv={isServer:!Ri,useCSSOMInjection:!J0},Wp=function(){function e(t,n,r){t===void 0&&(t=cr),n===void 0&&(n={});var o=this;this.options=Ae(Ae({},Cv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ri&&Nc&&(Nc=!1,Ic(this)),ru(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",c=function(p){var g=function(f){return Mi.get(f)}(p);if(g===void 0)return"continue";var x=i.names.get(g),k=l.getGroup(p);if(x===void 0||!x.size||k.length===0)return"continue";var C="".concat(ur,".g").concat(p,'[id="').concat(g,'"]'),z="";x!==void 0&&x.forEach(function(f){f.length>0&&(z+="".concat(f,","))}),a+="".concat(k).concat(C,'{content:"').concat(z,'"}').concat(tu)},m=0;m<s;m++)c(m);return a}(o)})}return e.registerId=function(t){return Ao(t)},e.prototype.rehydrate=function(){!this.server&&Ri&&Ic(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ae(Ae({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new kv(o):r?new wv(o):new Sv(o)}(this.options),new pv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ao(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ao(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ao(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),jv=/&/g,Ev=/^\s*\/\/.*$/gm;function Hp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Hp(n.children,t)),n})}function Pv(e){var t,n,r,o=cr,i=o.options,l=i===void 0?cr:i,s=o.plugins,a=s===void 0?ol:s,c=function(g,x,k){return k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):g},m=a.slice();m.push(function(g){g.type===Zi&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(jv,n).replace(r,c))}),l.prefix&&m.push(q0),m.push(G0);var p=function(g,x,k,C){x===void 0&&(x=""),k===void 0&&(k=""),C===void 0&&(C="&"),t=C,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var z=g.replace(Ev,""),f=H0(k||x?"".concat(k," ").concat(x," { ").concat(z," }"):z);l.namespace&&(f=Hp(f,l.namespace));var d=[];return Ni(f,K0(m.concat(Y0(function(h){return d.push(h)})))),d};return p.hash=a.length?a.reduce(function(g,x){return x.name||vo(15),Gn(g,x.name)},Op).toString():"",p}var _v=new Wp,Zs=Pv(),Qp=kn.createContext({shouldForwardProp:void 0,styleSheet:_v,stylis:Zs});Qp.Consumer;kn.createContext(void 0);function Rc(){return w.useContext(Qp)}var zv=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Zs);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ru(this,function(){throw vo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Zs),this.name+t.hash},e}(),Tv=function(e){return e>="A"&&e<="Z"};function Mc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Tv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Gp=function(e){return e==null||e===!1||e===""},Kp=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Gp(i)&&(Array.isArray(i)&&i.isCss||dr(i)?r.push("".concat(Mc(o),":"),i,";"):co(i)?r.push.apply(r,Ii(Ii(["".concat(o," {")],Kp(i),!1),["}"],!1)):r.push("".concat(Mc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in X0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Sn(e,t,n,r){if(Gp(e))return[];if(nu(e))return[".".concat(e.styledComponentId)];if(dr(e)){if(!dr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Sn(o,t,n,r)}var i;return e instanceof zv?n?(e.inject(n,r),[e.getName(r)]):[e]:co(e)?Kp(e):Array.isArray(e)?Array.prototype.concat.apply(ol,e.map(function(l){return Sn(l,t,n,r)})):[e.toString()]}function $v(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(dr(n)&&!nu(n))return!1}return!0}var Lv=Fp(rl),Iv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$v(t),this.componentId=n,this.baseHash=Gn(Lv,n),this.baseStyle=r,Wp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=vn(o,this.staticRulesId);else{var i=Lc(Sn(this.rules,t,n,r)),l=Xs(Gn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=vn(o,l),this.staticRulesId=l}else{for(var a=Gn(this.baseHash,r.hash),c="",m=0;m<this.rules.length;m++){var p=this.rules[m];if(typeof p=="string")c+=p;else if(p){var g=Lc(Sn(p,t,n,r));a=Gn(a,g+m),c+=g}}if(c){var x=Xs(a>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),o=vn(o,x)}}return o},e}(),Yp=kn.createContext(void 0);Yp.Consumer;var Dl={};function Nv(e,t,n){var r=nu(e),o=e,i=!Fl(e),l=t.attrs,s=l===void 0?ol:l,a=t.componentId,c=a===void 0?function(y,j){var S=typeof y!="string"?"sc":Pc(y);Dl[S]=(Dl[S]||0)+1;var E="".concat(S,"-").concat(rv(rl+S+Dl[S]));return j?"".concat(j,"-").concat(E):E}(t.displayName,t.parentComponentId):a,m=t.displayName,p=m===void 0?function(y){return Fl(y)?"styled.".concat(y):"Styled(".concat(ov(y),")")}(e):m,g=t.displayName&&t.componentId?"".concat(Pc(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,k=t.shouldForwardProp;if(r&&o.shouldForwardProp){var C=o.shouldForwardProp;if(t.shouldForwardProp){var z=t.shouldForwardProp;k=function(y,j){return C(y,j)&&z(y,j)}}else k=C}var f=new Iv(n,g,r?o.componentStyle:void 0);function d(y,j){return function(S,E,L){var V=S.attrs,N=S.componentStyle,J=S.defaultProps,Ye=S.foldedComponentIds,ge=S.styledComponentId,mt=S.target,A=kn.useContext(Yp),b=Rc(),q=S.shouldForwardProp||b.shouldForwardProp,T=Z0(E,A,J)||cr,F=function(Ue,Ce,ot){for(var un,ht=Ae(Ae({},Ce),{className:void 0,theme:ot}),$n=0;$n<Ue.length;$n+=1){var cn=dr(un=Ue[$n])?un(ht):un;for(var it in cn)ht[it]=it==="className"?vn(ht[it],cn[it]):it==="style"?Ae(Ae({},ht[it]),cn[it]):cn[it]}return Ce.className&&(ht.className=vn(ht.className,Ce.className)),ht}(V,E,T),M=F.as||mt,R={};for(var $ in F)F[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&F.theme===T||($==="forwardedAs"?R.as=F.forwardedAs:q&&!q($,M)||(R[$]=F[$]));var H=function(Ue,Ce){var ot=Rc(),un=Ue.generateAndInjectStyles(Ce,ot.styleSheet,ot.stylis);return un}(N,F),le=vn(Ye,ge);return H&&(le+=" "+H),F.className&&(le+=" "+F.className),R[Fl(M)&&!Ap.has(M)?"class":"className"]=le,L&&(R.ref=L),w.createElement(M,R)}(h,y,j)}d.displayName=p;var h=kn.forwardRef(d);return h.attrs=x,h.componentStyle=f,h.displayName=p,h.shouldForwardProp=k,h.foldedComponentIds=r?vn(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=g,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(j){for(var S=[],E=1;E<arguments.length;E++)S[E-1]=arguments[E];for(var L=0,V=S;L<V.length;L++)Js(j,V[L],!0);return j}({},o.defaultProps,y):y}}),ru(h,function(){return".".concat(h.styledComponentId)}),i&&Bp(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Ac(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Oc=function(e){return Object.assign(e,{isCss:!0})};function Rv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(dr(e)||co(e))return Oc(Sn(Ac(ol,Ii([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Sn(r):Oc(Sn(Ac(r,t)))}function ea(e,t,n){if(n===void 0&&(n=cr),!t)throw vo(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Rv.apply(void 0,Ii([o],i,!1)))};return r.attrs=function(o){return ea(e,t,Ae(Ae({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ea(e,t,Ae(Ae({},n),o))},r}var qp=function(e){return ea(Nv,e)},v=qp;Ap.forEach(function(e){v[e]=qp(e)});const Mv=v.header`
  background-color: var(--background-card);
  box-shadow: 0 2px 10px rgba(6,182,212,0.07);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
`,Av=v.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,Ov=v.div`
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--primary);
  cursor: pointer;
`,Fv=v.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({$isOpen:e})=>e?"flex":"none"};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: var(--card-bg);
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    align-items: center;
    gap: 1.5rem;
    z-index: 1000;
  }
`,Pr=v.a`
  color: var(--text-primary);
  font-weight: 600;
  transition: color 0.3s;
  cursor: pointer;
  text-decoration: none;

  &:hover, &.active {
    color: var(--primary);
    text-shadow: 0 2px 8px var(--primary-light);
  }
`,Dv=v.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    display: block;
  }
`,Uv=v.footer`
  background-color: var(--background-dark);
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid var(--border);
`,bv=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,Bv=v.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1rem;
`,Vv=v.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    align-items: center;
  }
`,Ul=v.a`
  color: var(--text-secondary);
  transition: color 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem;

  &:hover {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
  }
`,Wv=v.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,Hv=v.main`
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
`;function Qv(){const e=Ke(),[t,n]=w.useState(!1),[r,o]=w.useState(!1);w.useEffect(()=>{localStorage.getItem("auth_token")&&o(!0)},[]);const i=s=>{e(s),n(!1)},l=()=>{localStorage.removeItem("auth_token"),o(!1),e("/")};return u.jsxs(u.Fragment,{children:[u.jsx(Mv,{children:u.jsxs(Av,{children:[u.jsx(Ov,{onClick:()=>i("/"),children:"Curso de Inglês"}),u.jsx(Dv,{onClick:()=>n(!t),children:t?"✕":"☰"}),u.jsxs(Fv,{$isOpen:t,children:[u.jsx(Pr,{onClick:()=>i("/"),children:"Home"}),u.jsx(Pr,{onClick:()=>i("/modulos"),children:"Módulos"}),r?u.jsxs(u.Fragment,{children:[u.jsx(Pr,{onClick:()=>i("/admin"),children:"Painel Admin"}),u.jsx(Pr,{onClick:l,children:"Sair"})]}):u.jsx(Pr,{onClick:()=>i("/login"),children:"Login"})]})]})}),u.jsx(Hv,{className:"container",children:u.jsx(Pp,{})}),u.jsx(Uv,{children:u.jsxs(bv,{children:[u.jsx(Bv,{children:"Curso de Inglês"}),u.jsxs(Vv,{children:[u.jsx(Ul,{onClick:()=>i("/"),children:"Home"}),u.jsx(Ul,{onClick:()=>i("/modulos"),children:"Módulos"}),u.jsx(Ul,{onClick:()=>i("/login"),children:"Área do Aluno"})]}),u.jsxs(Wv,{children:["© ",new Date().getFullYear()," Curso de Inglês. Todos os direitos reservados."]})]})})]})}const Gv=v.div`
  display: flex;
  min-height: 100vh;
`,Kv=v.aside`
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 1.5rem 0;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  transition: transform 0.3s ease;
  z-index: 1000;
  
  @media (max-width: 768px) {
    transform: ${({isOpen:e})=>e?"translateX(0)":"translateX(-100%)"};
    width: 80%;
  }
`,Yv=v.div`
  padding: 0 1.5rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;
`,qv=v.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin: 0;
`,Xv=v.nav`
  display: flex;
  flex-direction: column;
`,_r=v.a`
  padding: 0.75rem 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover, &.active {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
`,Jv=v.main`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
  background-color: var(--background);
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`,Zv=v.header`
  display: none;
  position: sticky;
  top: 0;
  background-color: var(--card-bg);
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,ey=v.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-primary);
  cursor: pointer;
`,ty=v.h1`
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: var(--text-primary);
`,ny=v.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${({$isOpen:e})=>e?"block":"none"};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;function ry({isAuthenticated:e}){const t=Ke(),n=an(),[r,o]=w.useState(!1),[i,l]=w.useState("Dashboard");w.useEffect(()=>{const c=n.pathname;c==="/admin"?l("Dashboard"):c==="/admin/modulos"?l("Gerenciar Módulos"):c==="/admin/aulas"?l("Gerenciar Aulas"):c==="/admin/arquivos"&&l("Gerenciar Arquivos e Áudios")},[n]);const s=c=>{t(c),o(!1)},a=()=>{localStorage.removeItem("auth_token"),t("/login")};return e?u.jsxs(Gv,{children:[u.jsx(ny,{isOpen:r,onClick:()=>o(!1)}),u.jsxs(Kv,{isOpen:r,children:[u.jsx(Yv,{children:u.jsx(qv,{children:"Painel Administrativo"})}),u.jsxs(Xv,{children:[u.jsx(_r,{className:n.pathname==="/admin"?"active":"",onClick:()=>s("/admin"),children:"Dashboard"}),u.jsx(_r,{className:n.pathname==="/admin/modulos"?"active":"",onClick:()=>s("/admin/modulos"),children:"Gerenciar Módulos"}),u.jsx(_r,{className:n.pathname==="/admin/aulas"?"active":"",onClick:()=>s("/admin/aulas"),children:"Gerenciar Aulas"}),u.jsx(_r,{className:n.pathname==="/admin/arquivos"?"active":"",onClick:()=>s("/admin/arquivos"),children:"Gerenciar Arquivos e Áudios"}),u.jsx(_r,{onClick:a,children:"Sair"})]})]}),u.jsxs(Jv,{children:[u.jsxs(Zv,{children:[u.jsx(ey,{onClick:()=>o(!r),children:"☰"}),u.jsx("h2",{children:"Painel Admin"})]}),u.jsx(ty,{children:i}),u.jsx(Pp,{})]})]}):u.jsx(x0,{to:"/login",replace:!0})}const oy=v.div`
  background-color: var(--card-bg);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(6,182,212,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 10px 32px rgba(6,182,212,0.13);
    background: linear-gradient(120deg, var(--primary-light) 0%, var(--background-card) 100%);
  }

  @media (max-width: 576px) {
    margin-bottom: 1rem;
    border-radius: 8px;
  }
`,iy=v.div`
  height: 180px;
  background-image: url(${({image:e})=>e});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  }
  
  @media (max-width: 576px) {
    height: 160px;
  }
`,ly=v.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 576px) {
    padding: 1.25rem;
  }
`,sy=v.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-dark);

  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`,ay=v.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0 0 1rem;
  flex: 1;
`,uy=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`,cy=v.span`
  background-color: var(--primary);
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-weight: 600;
`,Xp=({id:e,title:t,description:n,image:r,badge:o,onClick:i,linkTo:l,...s})=>{const a=Ke(),c=()=>{i?i():l&&a(l)};return u.jsxs(oy,{onClick:c,...s,children:[r&&u.jsx(iy,{image:r}),u.jsxs(ly,{children:[u.jsx(sy,{children:t}),u.jsx(ay,{children:n}),o&&u.jsx(uy,{children:u.jsx(cy,{children:o})})]})]})},dy=v.button`
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(6,182,212,0.10);
  transition: background 0.2s, box-shadow 0.2s;

  &:hover {
    background: var(--primary-dark);
    box-shadow: 0 4px 16px rgba(6,182,212,0.15);
  }

  &:active {
    background: var(--secondary);
    color: var(--primary-dark);
  }

  @media (max-width: 576px) {
    width: 100%;
    font-size: 1rem;
    padding: 0.7rem 1rem;
  }
`;function Y({children:e,variant:t="primary",size:n="medium",...r}){return u.jsx(dy,{$variant:t,$size:n,...r,children:e})}const fy=v.section`
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 18px;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: 12px;
  }

  @media (max-width: 576px) {
    padding: 2rem 0.7rem;
    border-radius: 8px;
  }
`,py=v.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
  }
`,my=v.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
  }
`,Fc=v.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`,hy=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }
`,gy=v.section`
  margin: 4rem 0;
  
  @media (max-width: 768px) {
    margin: 3rem 0;
  }
  
  @media (max-width: 576px) {
    margin: 2.5rem 0;
  }
`,vy=v.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`,bl=v.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1.75rem;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem;
    border-radius: 6px;
  }
`,Bl=v.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 0.75rem;
  }
`,Vl=v.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`,Wl=v.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`,yy=v.section`
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 4rem 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    margin: 3rem 0;
    border-radius: 10px;
  }
  
  @media (max-width: 576px) {
    padding: 2rem 1rem;
    margin: 2.5rem 0;
    border-radius: 8px;
  }
`,xy=v.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
  }
`,wy=v.p`
  color: var(--text-secondary);
  font-size: 1rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
`;function Sy(){const[e,t]=w.useState([]),[n,r]=w.useState(!0),o=Ke();return w.useEffect(()=>{(async()=>{try{console.log("Fazendo requisição para /api/modules");const l=await fetch("/api/modules");if(console.log("Status da resposta:",l.status),!l.ok){const a=await l.text();throw console.error("Resposta inválida:",a),new Error(`Erro na requisição: ${l.status} ${l.statusText}`)}const s=await l.json();console.log("Dados recebidos (brutos):",JSON.stringify(s)),console.log("Dados são array?",Array.isArray(s)),t(Array.isArray(s)?s:[])}catch(l){console.error("Erro ao carregar módulos:",l),t([])}finally{r(!1)}})()},[]),u.jsxs("div",{style:{padding:"0 1rem"},children:[u.jsxs(fy,{children:[u.jsx(py,{children:"Aprenda Inglês de Forma Eficiente"}),u.jsx(my,{children:"Nossa plataforma oferece um método comprovado para você dominar o inglês com aulas interativas, áudios e materiais exclusivos."}),u.jsx(Y,{size:"large",onClick:()=>o("/modulos"),children:"Começar Agora"})]}),u.jsxs("section",{children:[u.jsx(Fc,{children:"Módulos em Destaque"}),n?u.jsx("p",{children:"Carregando módulos..."}):u.jsx(hy,{children:e.slice(0,3).map(i=>u.jsx(Xp,{title:i.title,description:i.description,image:i.image,badge:`${i.lessons?i.lessons.length:0} aulas`,linkTo:`/modulos/${i.id}`},i.id))}),u.jsx("div",{style:{textAlign:"center",marginTop:"2rem"},children:u.jsx(Y,{variant:"outline",onClick:()=>o("/modulos"),children:"Ver Todos os Módulos"})})]}),u.jsxs(gy,{children:[u.jsx(Fc,{children:"Por que escolher nossa plataforma?"}),u.jsxs(vy,{children:[u.jsxs(bl,{children:[u.jsx(Bl,{children:"🎓"}),u.jsx(Vl,{children:"Conteúdo Exclusivo"}),u.jsx(Wl,{children:"Aulas preparadas por professores experientes com foco na fluência e comunicação."})]}),u.jsxs(bl,{children:[u.jsx(Bl,{children:"🔊"}),u.jsx(Vl,{children:"Áudios com Transcrição"}),u.jsx(Wl,{children:"Pratique a compreensão auditiva com nossos áudios exclusivos e acompanhe a transcrição em tempo real."})]}),u.jsxs(bl,{children:[u.jsx(Bl,{children:"📱"}),u.jsx(Vl,{children:"Acesso em Qualquer Dispositivo"}),u.jsx(Wl,{children:"Estude quando e onde quiser através do seu computador, tablet ou smartphone."})]})]})]}),u.jsxs(yy,{children:[u.jsx(xy,{children:"Pronto para dominar o inglês?"}),u.jsx(wy,{children:"Comece agora mesmo a estudar com nossa metodologia exclusiva e alcance a fluência que você sempre desejou."}),u.jsx(Y,{size:"large",onClick:()=>o("/modulos"),children:"Acessar Módulos"})]})]})}const ky="modulepreload",Cy=function(e){return"/"+e},Dc={},il=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),s=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.allSettled(n.map(a=>{if(a=Cy(a),a in Dc)return;Dc[a]=!0;const c=a.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${m}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":ky,c||(p.as="script"),p.crossOrigin="",p.href=a,s&&p.setAttribute("nonce",s),document.head.appendChild(p),c)return new Promise((g,x)=>{p.addEventListener("load",g),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},jy=v.div`
  margin-bottom: 2rem;
  padding: 0 1rem;
  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`,Ey=v.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  transition: font-size 0.3s ease;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`,Py=v.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 750px;
  line-height: 1.6;
  transition: font-size 0.3s ease;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1rem;
  }
  @media (max-width: 576px) {
    font-size: 0.95rem;
  }
`,_y=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.5rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.25rem;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`,zy=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.1rem;
  color: var(--text-secondary);
  transition: min-height 0.3s ease;
  
  @media (max-width: 768px) {
    min-height: 250px;
    font-size: 1rem;
  }
  
  @media (max-width: 576px) {
    min-height: 200px;
  }
`;function Ty(){const[e,t]=w.useState([]),[n,r]=w.useState(!0);return w.useEffect(()=>{(async()=>{try{const s=[...(await il(()=>import("./ModuleData-BEjP4Pbu.js"),[])).modules.map(a=>({...a,lessons:Array.isArray(a.lessons)?a.lessons:[]}))].sort((a,c)=>a.order-c.order);t(s),r(!1)}catch(i){console.error("Erro ao carregar os módulos (Modules):",i),r(!1)}})()},[]),u.jsxs("div",{className:"modules-container",children:[u.jsxs(jy,{children:[u.jsx(Ey,{children:"Módulos do Curso"}),u.jsx(Py,{children:"Explore todos os módulos disponíveis no nosso curso de inglês. Cada módulo contém aulas em vídeo, arquivos para download e áudios com transcrição."})]}),n?u.jsx(zy,{children:"Carregando módulos..."}):u.jsx(_y,{children:e.map(o=>u.jsx(Xp,{title:o.title,description:o.description,image:o.image,badge:`${Array.isArray(o.lessons)?o.lessons.length:0} aulas`,linkTo:`/modulos/${o.id}`},o.id))})]})}const $y=v.div`
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  
  @media (max-width: 576px) {
    padding: 1.25rem;
    border-radius: 8px;
  }
`,Ly=v.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,Iy=v.div`
  width: 200px;
  height: 150px;
  border-radius: 8px;
  background-image: url(${({image:e})=>e});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`,Ny=v.div`
  flex: 1;
`,Ry=v.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`,My=v.p`
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1rem;
`,Ay=v.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Oy=v.div`
  background-color: var(--background);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.25rem;
    gap: 1rem;
  }
`,Fy=v.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
`,Dy=v.div`
  flex: 1;
`,Uy=v.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
`,by=v.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`,By=v.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  
  @media (max-width: 576px) {
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`,Vy=v.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,Uc=v(Y)`
  margin-bottom: 1.5rem;
`,Wy=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.1rem;
  color: var(--text-secondary);
`;function Hy(){const{moduleId:e}=Sp(),t=Ke(),[n,r]=w.useState(null),[o,i]=w.useState(!0);w.useEffect(()=>{(async()=>{try{const c=(await il(()=>import("./ModuleData-BEjP4Pbu.js"),[])).modules.find(m=>m.id===parseInt(e));c&&(c.lessons=[...c.lessons].sort((m,p)=>m.order-p.order),r(c)),i(!1)}catch(a){console.error("Erro ao carregar o módulo:",a),i(!1)}})()},[e]);const l=s=>{t(`/modulos/${e}/aula/${s}`)};return o?u.jsx(Wy,{children:"Carregando módulo..."}):n?u.jsxs("div",{children:[u.jsx(Uc,{variant:"outline",onClick:()=>t("/modulos"),children:"← Voltar para Módulos"}),u.jsxs($y,{children:[u.jsxs(Ly,{children:[u.jsx(Iy,{image:n.image}),u.jsxs(Ny,{children:[u.jsx(Ry,{children:n.title}),u.jsx(My,{children:n.description}),u.jsxs("div",{children:[n.lessons.length," aulas"]})]})]}),u.jsx(Ay,{children:n.lessons.map((s,a)=>u.jsxs(Oy,{onClick:()=>l(s.id),children:[u.jsx(Fy,{children:a+1}),u.jsxs(Dy,{children:[u.jsx(Uy,{children:s.title}),u.jsx(by,{children:s.description}),u.jsxs(By,{children:[u.jsxs(Vy,{children:[u.jsx("span",{children:"⏱️"})," ",s.duration]}),s.files&&s.files.length>0&&u.jsxs("span",{children:["📄 ",s.files.length," arquivos"]}),s.audios&&s.audios.length>0&&u.jsxs("span",{children:["🔊 ",s.audios.length," áudios"]})]})]})]},s.id))})]})]}):u.jsxs("div",{children:[u.jsx(Uc,{variant:"outline",onClick:()=>t("/modulos"),children:"← Voltar para Módulos"}),u.jsx("p",{children:"Módulo não encontrado."})]})}const Qy=v.div.withConfig({shouldForwardProp:e=>e!=="isOpen"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${({isOpen:e})=>e?"1":"0"};
  visibility: ${({isOpen:e})=>e?"visible":"hidden"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`,Gy=v.div.withConfig({shouldForwardProp:e=>e!=="isOpen"})`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  transform: ${({isOpen:e})=>e?"scale(1)":"scale(0.9)"};
  transition: transform 0.3s ease;
`,Ky=v.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--text-primary);
  }
`,Yy=v.h3`
  margin: 0 0 1rem;
  font-size: 1.5rem;
  padding-right: 2rem;
`,qy=v.div`
  margin-bottom: 1rem;
  height: 70vh; // or another value that fits your design
  display: flex;
  flex-direction: column;
`,Xy=v.div`
  width: 100%;
  height: 70vh;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`,Jy=({isOpen:e,onClose:t,title:n,fileUrl:r,fileType:o})=>{const i=w.useRef(null);return w.useEffect(()=>{const l=a=>{a.key==="Escape"&&t()},s=a=>{i.current&&!i.current.contains(a.target)&&t()};return e&&(document.addEventListener("keydown",l),document.addEventListener("mousedown",s),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",l),document.removeEventListener("mousedown",s),document.body.style.overflow="auto"}},[e,t]),e?u.jsx(Qy,{isOpen:e,children:u.jsxs(Gy,{isOpen:e,ref:i,children:[u.jsx(Ky,{onClick:t,children:"✕"}),u.jsx(Yy,{children:n}),u.jsx(qy,{children:u.jsxs(Xy,{children:[(o==="pdf"||r&&r.includes("drive.google.com"))&&u.jsx("iframe",{src:r,title:n,allowFullScreen:!0,loading:"eager",style:{border:"none",background:"#fff"}}),o==="image"&&u.jsx("img",{src:r,alt:n,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}})]})})]})}):null},Zy=v.div`
  margin-bottom: 2rem;
`,e1=v.h3`
  margin: 0 0 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
`,t1=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,n1=v.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }
`,r1=v.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({type:e})=>e==="pdf"?"#e74c3c":e==="doc"?"#3498db":e==="xls"?"#2ecc71":e==="ppt"?"#f39c12":e==="zip"?"#9b59b6":"#95a5a6"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`,o1=v.h4`
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
`,i1=v.p`
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin: 0 0 1rem;
  line-height: 1.4;
`,l1=v.div`
  display: flex;
  gap: 0.5rem;
`,s1=({files:e=[]})=>{const[t,n]=w.useState(!1),[r,o]=w.useState(null),i=c=>{o(c),n(!0)},l=()=>{n(!1),o(null)},s=c=>{const m=c.split(".").pop().toLowerCase();return["pdf"].includes(m)?"pdf":["doc","docx"].includes(m)?"doc":["xls","xlsx"].includes(m)?"xls":["ppt","pptx"].includes(m)?"ppt":["zip","rar"].includes(m)?"zip":["jpg","jpeg","png","gif"].includes(m)?"image":"other"},a=c=>c.split(".").pop().toUpperCase();return e.length?u.jsxs(Zy,{children:[u.jsx(e1,{children:"Arquivos para Download"}),u.jsx(t1,{children:e.map(c=>{const m=s(c.fileUrl),p=a(c.fileUrl);return u.jsxs(n1,{children:[u.jsx(r1,{type:m,children:p}),u.jsx(o1,{children:c.title}),u.jsx(i1,{children:c.description}),u.jsxs(l1,{children:[u.jsx(Y,{variant:"primary",size:"small",onClick:()=>i(c),children:"Visualizar"}),u.jsx(Y,{variant:"text",size:"small",as:"a",href:c.fileUrl,target:"_blank",rel:"noopener noreferrer",download:!0,children:"Download"})]})]},c.id)})}),t&&r&&u.jsx(Jy,{isOpen:t,onClose:l,title:r.title,fileUrl:r.fileUrl,fileType:s(r.fileUrl)})]}):null};v.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    padding: 1rem 0.5rem;
  }
`;v.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
`;v.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0 0 1.5rem;
`;v.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-direction: row;
    justify-content: center;
    gap: 0.3rem;
    margin-bottom: 0.7rem;
  }
`;v.button`
  background: none;
  border: none;
  color: var(--primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 50%;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--primary-light, #e3eaff);
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    padding: 0.2rem;
  }
`;v.input`
  width: 70px;
  margin: 0 0.3rem;

  @media (max-width: 576px) {
    width: 50px;
  }
`;v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
`;v.div`
  width: 100%;
  height: 6px;
  background-color: var(--border);
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  margin-bottom: 0.5rem;

  @media (max-width: 576px) {
    height: 5px;
    margin-bottom: 0.3rem;
  }
`;v.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--text-secondary);

  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`;v.div`
  height: 100%;
  background-color: var(--primary);
  border-radius: 3px;
  width: ${({$progress:e})=>isNaN(e)?0:e}%;
  transition: width 0.1s linear;
`;v.span`
  color: ${({$active:e})=>e?"var(--primary)":"var(--text-primary)"};
  font-weight: ${({$active:e})=>e?"600":"400"};
  transition: color 0.3s ease, font-weight 0.3s ease;
  cursor: pointer;
`;const a1=v.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1.2rem 0.5rem 2rem 0.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);

  @media (max-width: 600px) {
    max-width: 100vw;
    border-radius: 0;
    padding: 0.5rem 0.2rem 1.5rem 0.2rem;
    box-shadow: none;
  }
`,u1=v.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 1rem 0 0.7rem 0;
  color: var(--text-primary);

  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin: 0.7rem 0 0.5rem 0;
  }
`,c1=v.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  margin-bottom: 1.2rem;

  iframe, video {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: none;
  }
`,d1=v.div`
  margin: 1.2rem 0 0.7rem 0;
  display: flex;
  border-bottom: 1px solid var(--border);
  gap: 1.5rem;
  font-size: 1rem;

  @media (max-width: 600px) {
    gap: 0.7rem;
    font-size: 0.95rem;
  }
`,bc=v.button`
  background: none;
  border: none;
  border-bottom: 2px solid ${({$active:e})=>e?"var(--primary)":"transparent"};
  color: ${({$active:e})=>e?"var(--primary)":"var(--text-secondary)"};
  font-weight: ${({$active:e})=>e?700:400};
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  transition: color 0.2s, border 0.2s;
  outline: none;

  &:hover {
    color: var(--primary);
  }
`;v.div`
  margin-top: 2rem;
`;v.div`
  display: flex;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;v.div`
  display: ${({$active:e})=>e?"block":"none"};
`;const Bc=v(Y)`
  margin-bottom: 1.5rem;
`,f1=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.1rem;
  color: var(--text-secondary);
`;v.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;const p1=v.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.2rem;
`,m1=v.div`
  background: linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%);
  border-radius: 14px;
  padding: 1.1rem 1.3rem;
  box-shadow: 0 4px 16px rgba(80, 112, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 6px solid #4f46e5;
  transition: box-shadow 0.2s, border 0.2s;
  width: 100%;

  @media (max-width: 600px) {
    padding: 0.8rem 0.6rem;
    border-left-width: 4px;
  }

  &:hover {
    box-shadow: 0 8px 24px rgba(80, 112, 255, 0.13);
    border-left-color: #06b6d4;
  }
`,h1=v.div`
  font-weight: 700;
  font-size: 1.08rem;
  margin-bottom: 0.25rem;
  color: #4f46e5;
  letter-spacing: 0.01em;
`,g1=v.div`
  font-size: 0.97rem;
  color: #64748b;
  margin-bottom: 0.5rem;
`,v1=v.audio`
  width: 100%;
  max-width: 340px;
  min-width: 160px;
  margin: 0.2rem 0;
  border-radius: 8px;
  background: #fff;
  outline: none;
  border: 2px solid #4f46e5;
  box-shadow: 0 2px 8px rgba(80, 112, 255, 0.10);

  &::-webkit-media-controls-panel {
    background-color: #e0e7ff;
    border-radius: 8px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    min-width: 120px;
  }
`;function y1(){const{moduleId:e,lessonId:t}=Sp(),n=Ke(),[r,o]=w.useState(null),[i,l]=w.useState(null),[s,a]=w.useState(!0),[c,m]=w.useState("files"),[p,g]=w.useState(null),[x,k]=w.useState(null),[C,z]=w.useState({});return w.useEffect(()=>{(async()=>{try{const h=(await il(()=>import("./ModuleData-BEjP4Pbu.js"),[])).modules.find(y=>y.id===parseInt(e));if(h){o(h);const y=[...h.lessons].sort((S,E)=>S.order-E.order),j=y.findIndex(S=>S.id===parseInt(t));j!==-1&&(l(y[j]),j>0&&g(y[j-1]),j<y.length-1&&k(y[j+1]))}a(!1)}catch(d){console.error("Erro ao carregar a aula:",d),a(!1)}})()},[e,t]),w.useEffect(()=>{i&&(i.files&&i.files.length>0?m("files"):i.audios&&i.audios.length>0&&m("audios"))},[i]),s?u.jsx(f1,{children:"Carregando aula..."}):!r||!i?u.jsxs("div",{children:[u.jsx(Bc,{variant:"outline",onClick:()=>n(`/modulos/${e}`),children:"← Voltar para o Módulo"}),u.jsx("p",{children:"Aula não encontrada."})]}):u.jsxs("div",{children:[u.jsx(Bc,{variant:"outline",onClick:()=>n(`/modulos/${e}`),children:"← Voltar para o Módulo"}),u.jsxs(a1,{children:[u.jsx(u1,{children:i.title}),u.jsx(c1,{children:u.jsx("iframe",{src:i.videoUrl,title:i.title,allowFullScreen:!0,frameBorder:"0"})}),u.jsxs(d1,{children:[u.jsx(bc,{$active:c==="files",onClick:()=>m("files"),children:"Arquivos"}),u.jsx(bc,{$active:c==="audios",onClick:()=>m("audios"),children:"Áudios"})]}),c==="files"&&u.jsx(s1,{files:i.files}),c==="audios"&&(i.audios&&i.audios.length>0?u.jsx(p1,{children:i.audios.map(f=>u.jsxs(m1,{children:[u.jsx(h1,{children:f.title}),u.jsx(g1,{children:f.description}),u.jsx(v1,{controls:!0,src:f.fileUrl,children:"Seu navegador não suporta o elemento de áudio."}),u.jsx(Y,{style:{margin:"0.5rem 0px"},onClick:()=>z(d=>({...d,[f.id]:!d[f.id]})),children:C[f.id]?"Ocultar Transcrição":"Mostrar Transcrição"}),C[f.id]&&f.transcript&&f.transcript.length>0&&u.jsxs("div",{children:[u.jsx("strong",{children:"Transcrição"}),u.jsx("div",{style:{marginTop:4},children:f.transcript.map((d,h)=>u.jsxs("div",{children:[d.time!==void 0&&u.jsxs("span",{style:{color:"#4f46e5",fontWeight:600},children:[d.time,"s:"," "]}),d.text]},h))})]})]},f.id))}):u.jsx("p",{children:"Nenhum áudio disponível para esta aula."}))]})]})}const x1=v.div`
  max-width: 400px;
  margin: 2rem auto;
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,w1=v.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  text-align: center;
`,Vc=v.div`
  margin-bottom: 1.5rem;
`,Wc=v.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
`,Hc=v.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,S1=v.div`
  color: var(--error);
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,k1=v(Y)`
  width: 100%;
  margin-top: 1rem;
`;function C1({setIsAuthenticated:e}){const t=Ke(),[n,r]=w.useState(""),[o,i]=w.useState(""),[l,s]=w.useState(""),[a,c]=w.useState(!1),m=async p=>{p.preventDefault(),s(""),c(!0);try{const g=await il(()=>import("./ModuleData-BEjP4Pbu.js"),[]),{admin:x}=g;n===x.username&&o===x.password?(localStorage.setItem("auth_token","dummy_token"),e(!0),t("/admin")):s("Usuário ou senha incorretos.")}catch(g){console.error("Erro ao fazer login:",g),s("Ocorreu um erro ao fazer login. Tente novamente.")}finally{c(!1)}};return u.jsxs(x1,{children:[u.jsx(w1,{children:"Acesso ao Painel"}),u.jsxs("form",{onSubmit:m,children:[u.jsxs(Vc,{children:[u.jsx(Wc,{htmlFor:"username",children:"Usuário"}),u.jsx(Hc,{type:"text",id:"username",value:n,onChange:p=>r(p.target.value),required:!0})]}),u.jsxs(Vc,{children:[u.jsx(Wc,{htmlFor:"password",children:"Senha"}),u.jsx(Hc,{type:"password",id:"password",value:o,onChange:p=>i(p.target.value),required:!0})]}),l&&u.jsx(S1,{children:l}),u.jsx(k1,{type:"submit",disabled:a,children:a?"Entrando...":"Entrar"})]})]})}const j1=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,E1=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`,P1=v.h1`
  margin: 0;
`,_1=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Oo=v.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,Fo=v.h3`
  margin-top: 0;
  color: #555;
  font-size: 1rem;
`,Do=v.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`,z1=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Hl=v(L0)`
  display: block;
  background-color: #fff;
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`,Ql=v.h3`
  margin-top: 0;
  color: #007bff;
`,Gl=v.p`
  color: #555;
`,T1="http://localhost:5000/api";function $1(){const e=Ke(),[t,n]=w.useState({modules:0,lessons:0,files:0,audios:0}),[r,o]=w.useState(!0);w.useEffect(()=>{(async()=>{try{o(!0);const s=await fetch(`${T1}/modules`);if(!s.ok)throw new Error("Failed to fetch modules");const a=await s.json();let c=0,m=0,p=0;a.forEach(g=>{g.lessons&&(c+=g.lessons.length,g.lessons.forEach(x=>{x.files&&(m+=x.files.length),x.audios&&(p+=x.audios.length)}))}),n({modules:a.length,lessons:c,files:m,audios:p})}catch(s){console.error("Erro ao carregar estatísticas:",s)}finally{o(!1)}})()},[]);const i=()=>{localStorage.removeItem("adminAuth"),e("/admin/login")};return r?u.jsx("p",{children:"Carregando..."}):u.jsxs(j1,{children:[u.jsxs(E1,{children:[u.jsx(P1,{children:"Painel Administrativo"}),u.jsx(Y,{variant:"outline",onClick:i,children:"Sair"})]}),u.jsxs(_1,{children:[u.jsxs(Oo,{children:[u.jsx(Fo,{children:"Módulos"}),u.jsx(Do,{children:t.modules})]}),u.jsxs(Oo,{children:[u.jsx(Fo,{children:"Aulas"}),u.jsx(Do,{children:t.lessons})]}),u.jsxs(Oo,{children:[u.jsx(Fo,{children:"Arquivos"}),u.jsx(Do,{children:t.files})]}),u.jsxs(Oo,{children:[u.jsx(Fo,{children:"Áudios"}),u.jsx(Do,{children:t.audios})]})]}),u.jsxs(z1,{children:[u.jsxs(Hl,{to:"/admin/modulos",children:[u.jsx(Ql,{children:"Gerenciar Módulos"}),u.jsx(Gl,{children:"Adicione, edite ou remova módulos do curso."})]}),u.jsxs(Hl,{to:"/admin/aulas",children:[u.jsx(Ql,{children:"Gerenciar Aulas"}),u.jsx(Gl,{children:"Adicione, edite ou remova aulas dos módulos."})]}),u.jsxs(Hl,{to:"/admin/arquivos",children:[u.jsx(Ql,{children:"Gerenciar Arquivos"}),u.jsx(Gl,{children:"Adicione, edite ou remova arquivos das aulas."})]})]})]})}const L1=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.75rem;
  }
`,I1=v.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  h1 {
    font-size: 1.5rem;
    
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`,N1=v.div`
  display: grid;
  gap: 1rem;
  
  @media (max-width: 576px) {
    gap: 0.75rem;
  }
`,R1=v.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  @media (max-width: 576px) {
    padding: 0.75rem;
  }
`,M1=v.div`
  flex: 1;
`,A1=v.h3`
  margin: 0;
  font-size: 1.25rem;
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`,O1=v.p`
  margin: 0.5rem 0;
  color: #555;
`,F1=v.div`
  font-size: 0.875rem;
  color: #777;
`,D1=v.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
  
  @media (max-width: 576px) {
    gap: 0.3rem;
  }
  
  button {
    flex: 1;
    
    @media (min-width: 768px) {
      flex: 0 1 auto;
    }
  }
`,U1=v.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`,b1=v.h2`
  margin-top: 0;
`,Kl=v.div`
  margin-bottom: 1rem;
`,Yl=v.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`,Qc=v.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`,B1=v.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
`,V1=v.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`,W1=v.p`
  color: #dc3545;
  background-color: #f8d7da;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`,H1=v.p`
  color: #28a745;
  background-color: #d4edda;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`,Uo="http://localhost:5000/api",ql={username:"admin",password:"admin123"};function Q1(){console.log("AdminModules.jsx atualizado, versão com lessons sanitizado");const e=Ke(),[t,n]=w.useState([]),[r,o]=w.useState(!0),[i,l]=w.useState(!1),[s,a]=w.useState({id:"",title:"",description:"",order:1}),[c,m]=w.useState(""),[p,g]=w.useState(""),x=async()=>{try{o(!0);const y=await fetch(`${Uo}/modules`);if(console.log("Status da resposta (AdminModules):",y.status),!y.ok){const E=await y.text();throw console.error("Resposta inválida (AdminModules):",E),new Error("Failed to fetch modules")}const j=await y.json();console.log("Dados recebidos (AdminModules):",JSON.stringify(j)),console.log("Dados são array? (AdminModules)",Array.isArray(j));const S=j.map(E=>({...E,lessons:Array.isArray(E.lessons)?E.lessons:[]}));S.sort((E,L)=>E.order-L.order),n(S)}catch(y){console.error("Erro ao carregar os módulos (AdminModules):",y),m("Ocorreu um erro ao carregar os módulos. Tente novamente.")}finally{o(!1)}};w.useEffect(()=>{x()},[]);const k=()=>{l(!0),a({id:"",title:"",description:"",order:t.length>0?Math.max(...t.map(y=>y.order))+1:1}),m(""),g("")},C=()=>{l(!1),a({id:"",title:"",description:"",order:1}),m("")},z=y=>{const{name:j,value:S}=y.target;a(E=>({...E,[j]:j==="order"?parseInt(S)||1:S}))},f=async y=>{if(y.preventDefault(),m(""),g(""),!s.title){m("Por favor, preencha todos os campos obrigatórios.");return}try{const j={title:s.title,description:s.description,order:s.order,lessons:s.id?void 0:[]};let S;if(s.id?S=await fetch(`${Uo}/modules/${s.id}`,{method:"PUT",headers:{"Content-Type":"application/json",...ql},body:JSON.stringify(j)}):S=await fetch(`${Uo}/modules`,{method:"POST",headers:{"Content-Type":"application/json",...ql},body:JSON.stringify(j)}),!S.ok){const E=await S.text();throw console.error("Erro na resposta (AdminModules):",E),new Error("Failed to save module")}g(s.id?"Módulo atualizado com sucesso!":"Módulo adicionado com sucesso!"),l(!1),setTimeout(()=>{g("")},3e3),await x()}catch(j){console.error("Erro ao salvar o módulo (AdminModules):",j),m("Ocorreu um erro ao salvar o módulo. Tente novamente.")}},d=y=>{a({id:y.id,title:y.title,description:y.description,order:y.order}),l(!0),m(""),g("")},h=async y=>{if(window.confirm("Tem certeza que deseja excluir este módulo? Todas as aulas, arquivos e áudios associados também serão excluídos."))try{const j=await fetch(`${Uo}/modules/${y}`,{method:"DELETE",headers:ql});if(!j.ok){const S=await j.text();throw console.error("Erro na resposta (AdminModules):",S),new Error("Failed to delete module")}g("Módulo excluído com sucesso!"),setTimeout(()=>{g("")},3e3),await x()}catch(j){console.error("Erro ao excluir o módulo (AdminModules):",j),m("Ocorreu um erro ao excluir o módulo. Tente novamente.")}};return r&&t.length===0?u.jsx("p",{children:"Carregando módulos..."}):u.jsxs(L1,{children:[c&&u.jsx(W1,{children:c}),p&&u.jsx(H1,{children:p}),i?u.jsxs(U1,{children:[u.jsx(b1,{children:s.id?"Editar Módulo":"Adicionar Novo Módulo"}),u.jsxs("form",{onSubmit:f,children:[u.jsxs(Kl,{children:[u.jsx(Yl,{htmlFor:"title",children:"Título *"}),u.jsx(Qc,{type:"text",id:"title",name:"title",value:s.title,onChange:z,required:!0})]}),u.jsxs(Kl,{children:[u.jsx(Yl,{htmlFor:"description",children:"Descrição"}),u.jsx(B1,{id:"description",name:"description",value:s.description,onChange:z})]}),u.jsxs(Kl,{children:[u.jsx(Yl,{htmlFor:"order",children:"Ordem"}),u.jsx(Qc,{type:"number",id:"order",name:"order",min:"1",value:s.order,onChange:z})]}),u.jsxs(V1,{children:[u.jsx(Y,{variant:"outline",type:"button",onClick:C,children:"Cancelar"}),u.jsx(Y,{type:"submit",children:s.id?"Atualizar":"Adicionar"})]})]})]}):u.jsxs(u.Fragment,{children:[u.jsxs(I1,{children:[u.jsx("h1",{children:"Gerenciar Módulos"}),u.jsx(Y,{onClick:k,children:"Adicionar Módulo"})]}),u.jsx(N1,{children:t.length>0?t.map(y=>u.jsxs(R1,{children:[u.jsxs(M1,{children:[u.jsx(A1,{children:y.title}),u.jsx(O1,{children:y.description}),u.jsxs(F1,{children:[u.jsxs("span",{children:["Ordem: ",y.order]}),u.jsx("span",{children:" | "}),u.jsxs("span",{children:["Aulas: ",Array.isArray(y.lessons)?y.lessons.length:0]})]})]}),u.jsxs(D1,{children:[u.jsx(Y,{variant:"outline",size:"small",onClick:()=>d(y),children:"Editar"}),u.jsx(Y,{variant:"text",size:"small",onClick:()=>h(y.id),children:"Excluir"}),u.jsx(Y,{variant:"text",size:"small",onClick:()=>e(`/modulos/${y.id}`),children:"Ver"})]})]},y.id)):u.jsx("p",{children:"Nenhum módulo encontrado."})})]})]})}const Ot="http://localhost:5000/api",vt={username:"admin",password:"admin123"},G1=v.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,K1=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,Y1=v.input`
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;
  width: 300px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`,Gc=v.select`
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,q1=v.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,X1=v.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,J1=v.div`
  flex: 1;
`,Z1=v.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
`,ex=v.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`,tx=v.div`
  font-size: 0.85rem;
  color: var(--text-secondary);
  display: flex;
  gap: 1rem;
`,nx=v.div`
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 576px) {
    width: 100%;
    justify-content: flex-end;
  }
`,rx=v.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`,ox=v.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`,Nn=v.div`
  margin-bottom: 1.5rem;
`,Rn=v.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
`,bo=v.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,ix=v.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`,lx=v.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,sx=v.div`
  color: var(--error);
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,ax=v.div`
  color: var(--success);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(46, 204, 113, 0.1);
  border-radius: 4px;
`;function ux(e,t){if(!e)return e;if(e.includes("youtube.com/")||e.includes("youtu.be/")){let n="",r="";const o=e.match(/[\?&]si=([^&]+)/);if(o&&o[1]&&(r=`?si=${o[1]}`),e.includes("youtu.be/")){const i=e.match(/youtu\.be\/([^\?&]+)/);n=i&&i[1]}else if(e.includes("youtube.com/watch")){const i=e.match(/[\?&]v=([^&]+)/);n=i&&i[1]}else if(e.includes("youtube.com/embed/")){const i=e.match(/embed\/([^\?&\/]+)/);n=i&&i[1]}if(n)return`https://www.youtube.com/embed/${n}${r}`}return e}function cx(){const e=Ke(),t=an(),n=new URLSearchParams(t.search),r=n.get("edit"),o=n.get("module"),[i,l]=w.useState([]),[s,a]=w.useState([]),[c,m]=w.useState(!0),[p,g]=w.useState(""),[x,k]=w.useState(o||""),[C,z]=w.useState(!1),[f,d]=w.useState({id:"",moduleId:"",title:"",description:"",videoUrl:"",duration:"",order:1}),[h,y]=w.useState(""),[j,S]=w.useState("");w.useEffect(()=>{(async()=>{try{console.log("Fazendo requisição para /api/modules (Lessons)");const b=await fetch(`${Ot}/modules`);if(console.log("Status da resposta (Lessons):",b.status),!b.ok){const R=await b.text();throw console.error("Resposta inválida (Lessons):",R),new Error("Failed to fetch modules")}const q=await b.json();console.log("Dados recebidos (Lessons):",JSON.stringify(q));const F=[...q.map(R=>({...R,lessons:Array.isArray(R.lessons)?R.lessons:[]}))].sort((R,$)=>R.order-$.order);l(F);let M=[];if(F.forEach(R=>{const $=Array.isArray(R.lessons)?R.lessons.map(H=>({...H,moduleName:R.title,moduleId:R.id})):[];M=[...M,...$]}),M.sort((R,$)=>R.moduleId===$.moduleId?R.order-$.order:R.moduleId-$.moduleId),a(M),m(!1),r){const R=M.find($=>$.id===parseInt(r));R&&(d({id:R.id,moduleId:R.moduleId,title:R.title,description:R.description,videoUrl:R.videoUrl||"",duration:R.duration||"",order:R.order}),z(!0))}}catch(b){console.error("Erro ao carregar os dados:",b),m(!1)}})()},[r]);const E=A=>{const{name:b,value:q}=A.target;d(T=>({...T,[b]:b==="videoUrl"?ux(q):q}))},L=()=>{const A=x?parseInt(x):i.length>0?i[0].id:"";d({id:"",moduleId:A,title:"",description:"",videoUrl:"",duration:"",order:1}),z(!0),y(""),S("")},V=A=>{d({id:A.id,moduleId:A.moduleId,title:A.title,description:A.description,videoUrl:A.videoUrl||"",duration:A.duration||"",order:A.order}),z(!0),y(""),S(""),e(`/admin/aulas?edit=${A.id}`)},N=()=>{z(!1),d({id:"",moduleId:"",title:"",description:"",videoUrl:"",duration:"",order:1}),y(""),S(""),e(x?`/admin/aulas?module=${x}`:"/admin/aulas")},J=async A=>{if(A.preventDefault(),y(""),S(""),!f.title||!f.moduleId){y("Por favor, preencha todos os campos obrigatórios.");return}try{const b={title:f.title,description:f.description,videoUrl:f.videoUrl||"",duration:f.duration||"",order:f.order,files:f.files||[],audios:f.audios||[]};let q;if(f.id){let $=null;for(const H of i)if(Array.isArray(H.lessons)&&H.lessons.find(Ue=>Ue.id===f.id)){$=H.id;break}if($===null){y("Aula não encontrada.");return}if($!==f.moduleId){const H=await fetch(`${Ot}/modules/${$}/lessons/${f.id}`,{method:"DELETE",headers:{username:vt.username,password:vt.password}});if(!H.ok){const le=await H.text();throw console.error("Erro ao mover a aula (exclusão):",le),new Error("Falha ao mover a aula para outro módulo")}q=await fetch(`${Ot}/modules/${f.moduleId}/lessons`,{method:"POST",headers:{"Content-Type":"application/json",username:vt.username,password:vt.password},body:JSON.stringify(b)})}else q=await fetch(`${Ot}/modules/${f.moduleId}/lessons/${f.id}`,{method:"PUT",headers:{"Content-Type":"application/json",username:vt.username,password:vt.password},body:JSON.stringify(b)})}else q=await fetch(`${Ot}/modules/${f.moduleId}/lessons`,{method:"POST",headers:{"Content-Type":"application/json",username:vt.username,password:vt.password},body:JSON.stringify(b)});if(!q.ok){const $=await q.text();throw console.error("Erro na resposta (Lessons):",$),new Error("Falha ao salvar a aula")}const T=await fetch(`${Ot}/modules`);if(!T.ok)throw new Error("Falha ao recarregar os módulos");const M=(await T.json()).map($=>({...$,lessons:Array.isArray($.lessons)?$.lessons:[]}));M.sort(($,H)=>$.order-H.order),l(M);let R=[];M.forEach($=>{const H=$.lessons.map(le=>({...le,moduleName:$.title,moduleId:$.id}));R=[...R,...H]}),R.sort(($,H)=>$.moduleId===H.moduleId?$.order-H.order:$.moduleId-H.moduleId),a(R),S(f.id?`Aula "${f.title}" atualizada com sucesso!`:`Aula "${f.title}" adicionada com sucesso!`),setTimeout(()=>{z(!1),d({id:"",moduleId:"",title:"",description:"",videoUrl:"",duration:"",order:1}),S(""),e(x?`/admin/aulas?module=${x}`:"/admin/aulas")},2e3)}catch(b){console.error("Erro ao salvar a aula:",b),y("Ocorreu um erro ao salvar a aula. Tente novamente.")}},Ye=async A=>{if(window.confirm("Tem certeza que deseja excluir esta aula? Esta ação não pode ser desfeita."))try{let b=null;for(const $ of i)if(Array.isArray($.lessons)&&$.lessons.find(le=>le.id===A)){b=$.id;break}if(b===null){y("Aula não encontrada.");return}const q=await fetch(`${Ot}/modules/${b}/lessons/${A}`,{method:"DELETE",headers:{username:vt.username,password:vt.password}});if(!q.ok){const $=await q.text();throw console.error("Erro na resposta (Lessons - exclusão):",$),new Error("Falha ao excluir a aula")}const T=await fetch(`${Ot}/modules`);if(!T.ok)throw new Error("Falha ao recarregar os módulos");const M=(await T.json()).map($=>({...$,lessons:Array.isArray($.lessons)?$.lessons:[]}));M.sort(($,H)=>$.order-H.order),l(M);let R=[];M.forEach($=>{const H=$.lessons.map(le=>({...le,moduleName:$.title,moduleId:$.id}));R=[...R,...H]}),a(R),S("Aula excluída com sucesso!"),setTimeout(()=>{S("")},3e3)}catch(b){console.error("Erro ao excluir a aula:",b),y("Ocorreu um erro ao excluir a aula. Tente novamente.")}},ge=A=>{const b=A.target.value;k(b),e(b?`/admin/aulas?module=${b}`:"/admin/aulas")},mt=s.filter(A=>{const b=A.title.toLowerCase().includes(p.toLowerCase())||A.description.toLowerCase().includes(p.toLowerCase()),q=!x||A.moduleId===parseInt(x);return b&&q});return c?u.jsx("p",{children:"Carregando aulas..."}):u.jsxs(G1,{children:[h&&u.jsx(sx,{children:h}),j&&u.jsx(ax,{children:j}),C?u.jsxs(rx,{children:[u.jsx(ox,{children:f.id?"Editar Aula":"Adicionar Nova Aula"}),u.jsxs("form",{onSubmit:J,children:[u.jsxs(Nn,{children:[u.jsx(Rn,{htmlFor:"moduleId",children:"Módulo *"}),u.jsxs(Gc,{id:"moduleId",name:"moduleId",value:f.moduleId,onChange:E,required:!0,children:[u.jsx("option",{value:"",children:"Selecione um módulo"}),i.map(A=>u.jsx("option",{value:A.id,children:A.title},A.id))]})]}),u.jsxs(Nn,{children:[u.jsx(Rn,{htmlFor:"title",children:"Título da Aula *"}),u.jsx(bo,{type:"text",id:"title",name:"title",value:f.title,onChange:E,required:!0})]}),u.jsxs(Nn,{children:[u.jsx(Rn,{htmlFor:"description",children:"Descrição"}),u.jsx(ix,{id:"description",name:"description",value:f.description,onChange:E})]}),u.jsxs(Nn,{children:[u.jsx(Rn,{htmlFor:"videoUrl",children:"URL do Vídeo (YouTube Embed)"}),u.jsx(bo,{type:"text",id:"videoUrl",name:"videoUrl",value:f.videoUrl,onChange:E,placeholder:"https://www.youtube.com/embed/ID_DO_VIDEO"})]}),u.jsxs(Nn,{children:[u.jsx(Rn,{htmlFor:"duration",children:"Duração"}),u.jsx(bo,{type:"text",id:"duration",name:"duration",value:f.duration,onChange:E,placeholder:"Ex: 15:30"})]}),u.jsxs(Nn,{children:[u.jsx(Rn,{htmlFor:"order",children:"Ordem"}),u.jsx(bo,{type:"number",id:"order",name:"order",value:f.order,onChange:E,min:"1"})]}),u.jsxs(lx,{children:[u.jsx(Y,{variant:"outline",type:"button",onClick:N,children:"Cancelar"}),u.jsx(Y,{type:"submit",children:f.id?"Atualizar Aula":"Adicionar Aula"})]})]})]}):u.jsxs(u.Fragment,{children:[u.jsxs(K1,{children:[u.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[u.jsx(Y1,{type:"text",placeholder:"Pesquisar aulas...",value:p,onChange:A=>g(A.target.value)}),u.jsxs(Gc,{value:x,onChange:ge,children:[u.jsx("option",{value:"",children:"Todos os Módulos"}),i.map(A=>u.jsx("option",{value:A.id,children:A.title},A.id))]})]}),u.jsx(Y,{onClick:L,children:"Adicionar Nova Aula"})]}),u.jsx(q1,{children:mt.length>0?mt.map(A=>u.jsxs(X1,{children:[u.jsxs(J1,{children:[u.jsx(Z1,{children:A.title}),u.jsx(ex,{children:A.description}),u.jsxs(tx,{children:[u.jsxs("span",{children:["Módulo: ",A.moduleName]}),u.jsxs("span",{children:["Ordem: ",A.order]}),A.duration&&u.jsxs("span",{children:["Duração: ",A.duration]}),u.jsxs("span",{children:[(A.files&&A.files.length||0)+(A.audios&&A.audios.length||0)," recursos"]})]})]}),u.jsxs(nx,{children:[u.jsx(Y,{variant:"outline",size:"small",onClick:()=>V(A),children:"Editar"}),u.jsx(Y,{variant:"text",size:"small",onClick:()=>Ye(A.id),children:"Excluir"})]})]},A.id)):u.jsx("p",{children:"Nenhuma aula encontrada."})})]})]})}const dx=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,fx=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,px=v.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`,Bo=v.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
`,Kc=v.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
`,Vo=v.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  background: ${e=>e.active?"#007bff":"transparent"};
  color: ${e=>e.active?"white":"#007bff"};
  cursor: pointer;
  border-bottom: ${e=>e.active?"2px solid #007bff":"none"};
  
  &:hover {
    background: ${e=>e.active?"#007bff":"#f8f9fa"};
  }
`,mx=v.div`
  display: grid;
  gap: 1rem;
`,Yc=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`,qc=v.div`
  flex: 1;
`,Xc=v.h3`
  margin: 0;
  font-size: 1.25rem;
`,Jc=v.p`
  margin: 0.5rem 0;
  color: #555;
`,Zc=v.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  color: #777;
`,ed=v.div`
  display: flex;
  gap: 0.5rem;
`,hx=v.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`,gx=v.h2`
  margin-top: 0;
`,Rr=v.div`
  margin-bottom: 1rem;
`,vx=v(Rr)`
  label::after {
    content: ' (opcional)';
    font-weight: normal;
    font-style: italic;
    font-size: 0.9em;
    color: #777;
  }
`,zr=v.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`,td=v.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`,yx=v.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
`,xx=v.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`,wx=v.div`
  margin-top: 1rem;
`,Sx=v.h4`
  margin: 0 0 1rem 0;
`,kx=v.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.5rem;
`,Cx=v.input`
  width: 100px;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`,jx=v.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`,Ex=v.button`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #007bff;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,Px=v.button`
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  color: #dc3545;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #a00;
  }
`,_x=v.p`
  color: #dc3545;
  background-color: #f8d7da;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`,zx=v.p`
  color: #28a745;
  background-color: #d4edda;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`,dn="http://localhost:5000/api",Xl={username:"admin",password:"admin123"};function Tx(){const e=Ke(),t=an(),n=new URLSearchParams(t.search),r=n.get("edit"),o=n.get("lesson"),i=n.get("module"),[l,s]=w.useState([]),[a,c]=w.useState([]),[m,p]=w.useState([]),[g,x]=w.useState([]),[k,C]=w.useState(!0),[z,f]=w.useState(""),[d,h]=w.useState(i||""),[y,j]=w.useState(o||""),[S,E]=w.useState("files"),[L,V]=w.useState(!1),[N,J]=w.useState({id:"",lessonId:"",title:"",description:"",fileUrl:"",type:"pdf",transcript:[]}),[Ye,ge]=w.useState(""),[mt,A]=w.useState(""),b=async({sortLessons:P=!0,editId:D=null}={})=>{try{C(!0);const O=await fetch(`${dn}/modules`);if(!O.ok){const Q=await O.text();throw console.error("API response error:",Q),new Error(`Failed to fetch modules: ${O.status} ${O.statusText}`)}let ce;try{ce=await O.json()}catch(Q){throw console.error("Invalid JSON response:",Q),new Error("Server returned invalid JSON data")}const je=ce;je.sort((Q,pe)=>Q.order-pe.order);let Ee=[],jt=[],ll=[];if(je.forEach(Q=>{Q.lessons&&Q.lessons.forEach(pe=>{var ou,iu;const Jp={...pe,moduleName:Q.title,moduleId:Q.id};if(Ee.push(Jp),((ou=pe.files)==null?void 0:ou.length)>0){const sl=pe.files.map(al=>({...al,lessonId:pe.id,lessonTitle:pe.title,moduleId:Q.id,moduleName:Q.title,resourceType:"file"}));jt.push(...sl)}if(((iu=pe.audios)==null?void 0:iu.length)>0){const sl=pe.audios.map(al=>({...al,lessonId:pe.id,lessonTitle:pe.title,moduleId:Q.id,moduleName:Q.title,resourceType:"audio"}));ll.push(...sl)}})}),P&&Ee.sort((Q,pe)=>Q.moduleId===pe.moduleId?Q.order-pe.order:Q.moduleId-pe.moduleId),s(je),c(Ee),p(jt),x(ll),C(!1),D){const Q=jt.find(pe=>pe.id===parseInt(D))||ll.find(pe=>pe.id===parseInt(D));Q&&(J({id:Q.id,lessonId:Q.lessonId.toString(),title:Q.title,description:Q.description,fileUrl:Q.fileUrl||Q.audioUrl,type:Q.resourceType==="audio"?"audio":Q.type||"pdf",transcript:Q.transcript||[]}),E(Q.resourceType),V(!0))}}catch(O){console.error("Erro ao carregar os dados:",O),ge("Ocorreu um erro ao carregar os dados. Tente novamente."),C(!1)}};w.useEffect(()=>{b({sortLessons:!0,editId:r})},[r]);const q=()=>{const P=y?parseInt(y):"";V(!0),J({id:"",lessonId:P,title:"",description:"",fileUrl:"",type:S==="files"?"pdf":"audio",transcript:S==="audios"?[{time:0,text:""}]:[]}),ge(""),A("")},T=()=>{V(!1),J({id:"",lessonId:"",title:"",description:"",fileUrl:"",type:S==="files"?"pdf":"audio",transcript:[]}),ge(""),e(`/admin/arquivos${d?`?module=${d}`:""}${y?`&lesson=${y}`:""}`)},F=(P,D)=>{if(!P)return P;if((D==="fileUrl"||D==="audioUrl")&&P.includes("drive.google.com/file/d/")){const O=P.match(/\/d\/([^\/\?]+)/);if(O&&O[1])return`https://drive.google.com/file/d/${O[1]}/preview`}if((D==="fileUrl"||D==="audioUrl")&&P.includes("drive.google.com/open")){const O=P.match(/[\?&]id=([^&]+)/);if(O&&O[1])return`https://drive.google.com/file/d/${O[1]}/preview`}if((D==="videoUrl"||D==="fileUrl")&&(P.includes("youtube.com/")||P.includes("youtu.be/"))){let O="",ce="";const je=P.match(/[\?&]si=([^&]+)/);if(je&&je[1]&&(ce=`?si=${je[1]}`),P.includes("youtu.be/")){const Ee=P.match(/youtu\.be\/([^\?&]+)/);O=Ee&&Ee[1]}else if(P.includes("youtube.com/watch")){const Ee=P.match(/[\?&]v=([^&]+)/);O=Ee&&Ee[1]}else if(P.includes("youtube.com/embed/")){const Ee=P.match(/embed\/([^\?&\/]+)/);O=Ee&&Ee[1]}if(O)return`https://www.youtube.com/embed/${O}${ce}`}if((D==="audioUrl"||D==="fileUrl")&&P.includes("dropbox.com")){let O=P.replace("www.dropbox.com","dl.dropboxusercontent.com");return O=O.replace(/([?&]dl=\d+)/,""),O=O.replace(/[?&]$/,""),O}return P},M=P=>{const{name:D,value:O}=P.target,ce=D==="fileUrl"||D==="videoUrl"||D==="audioUrl"?F(O,D):O;J(je=>({...je,[D]:D==="lessonId"?parseInt(O)||"":ce}))},R=(P,D,O)=>{J(ce=>{const je=[...ce.transcript];return je[P]={...je[P],[D]:D==="time"?parseFloat(O)||0:O},{...ce,transcript:je}})},$=()=>{J(P=>({...P,transcript:[...P.transcript,{time:0,text:""}]}))},H=P=>{J(D=>({...D,transcript:D.transcript.filter((O,ce)=>ce!==P)}))},le=async P=>{if(P.preventDefault(),ge(""),A(""),!N.title||!N.fileUrl||!N.lessonId){ge("Por favor, preencha todos os campos obrigatórios.");return}S==="audios"&&N.transcript&&N.transcript.length>0&&(N.transcript=N.transcript.filter(D=>D.text.trim()!==""));try{const D=a.find(jt=>jt.id===parseInt(N.lessonId));if(!D){ge("Aula não encontrada.");return}const O=D.moduleId,ce=D.id,je={title:N.title,description:N.description,[S==="files"?"fileUrl":"audioUrl"]:N.fileUrl,type:S==="files"?N.type:void 0,transcript:S==="audios"?N.transcript:void 0};let Ee;if(N.id){const jt=S==="files"?`${dn}/files/${N.id}`:`${dn}/audios/${N.id}`;Ee=await fetch(jt,{method:"PUT",headers:{"Content-Type":"application/json",...Xl},body:JSON.stringify(je)})}else{const jt=S==="files"?`${dn}/modules/${O}/lessons/${ce}/files`:`${dn}/modules/${O}/lessons/${ce}/audios`;Ee=await fetch(jt,{method:"POST",headers:{"Content-Type":"application/json",...Xl},body:JSON.stringify(je)})}if(!Ee.ok)throw new Error("Failed to save resource");A(N.id?"Recurso atualizado com sucesso!":"Recurso adicionado com sucesso!"),V(!1),setTimeout(()=>{A("")},3e3),await b()}catch(D){console.error("Erro ao salvar o recurso:",D),ge("Ocorreu um erro ao salvar o recurso. Tente novamente.")}},Ue=P=>{J({id:P.id,lessonId:P.lessonId.toString(),title:P.title,description:P.description,fileUrl:P.fileUrl||P.audioUrl,type:P.resourceType==="audio"?"audio":P.type||"pdf",transcript:P.transcript||[]}),E(P.resourceType),V(!0),e(`/admin/arquivos?edit=${P.id}`)},Ce=async(P,D)=>{if(window.confirm("Tem certeza que deseja excluir este recurso?"))try{const O=D==="file"?`${dn}/files/${P}`:`${dn}/audios/${P}`;if(!(await fetch(O,{method:"DELETE",headers:Xl})).ok)throw new Error("Failed to delete resource");A("Recurso excluído com sucesso!"),setTimeout(()=>{A("")},3e3),await b()}catch(O){console.error("Erro ao excluir o recurso:",O),ge("Ocorreu um erro ao excluir o recurso. Tente novamente.")}},ot=P=>{const D=P.target.value;h(D),j("");const O=new URLSearchParams;D&&O.append("module",D),e(`/admin/arquivos${O.toString()?`?${O.toString()}`:""}`)},un=P=>{const D=P.target.value;j(D);const O=new URLSearchParams;d&&O.append("module",d),D&&O.append("lesson",D),e(`/admin/arquivos${O.toString()?`?${O.toString()}`:""}`)},ht=P=>{E(P),J(D=>({...D,type:P==="files"?"pdf":"audio",transcript:P==="audios"&&D.transcript.length===0?[{time:0,text:""}]:D.transcript}))},$n=a.filter(P=>!d||String(P.moduleId)===String(d)),cn=m.filter(P=>{const D=P.title.toLowerCase().includes(z.toLowerCase())||P.description.toLowerCase().includes(z.toLowerCase()),O=!d||P.moduleId===parseInt(d),ce=!y||P.lessonId===parseInt(y);return D&&O&&ce}),it=g.filter(P=>{const D=P.title.toLowerCase().includes(z.toLowerCase())||P.description.toLowerCase().includes(z.toLowerCase()),O=!d||P.moduleId===parseInt(d),ce=!y||P.lessonId===parseInt(y);return D&&O&&ce});return k?u.jsx("p",{children:"Carregando recursos..."}):u.jsxs(dx,{children:[Ye&&u.jsx(_x,{children:Ye}),mt&&u.jsx(zx,{children:mt}),L?u.jsxs(hx,{children:[u.jsx(gx,{children:N.id?S==="files"?"Editar Arquivo":"Editar Áudio":S==="files"?"Adicionar Novo Arquivo":"Adicionar Novo Áudio"}),u.jsxs(Kc,{children:[u.jsx(Vo,{active:S==="files",onClick:()=>ht("files"),children:"Arquivo"}),u.jsx(Vo,{active:S==="audios",onClick:()=>ht("audios"),children:"Áudio"})]}),u.jsxs("form",{onSubmit:le,children:[u.jsxs(Rr,{children:[u.jsx(zr,{htmlFor:"lessonId",children:"Aula *"}),u.jsxs(Bo,{id:"lessonId",name:"lessonId",value:N.lessonId,onChange:M,required:!0,children:[u.jsx("option",{value:"",children:"Selecione uma aula"}),$n.map(P=>u.jsxs("option",{value:P.id,children:[P.moduleName," - ",P.title]},P.id))]})]}),u.jsxs(Rr,{children:[u.jsx(zr,{htmlFor:"title",children:"Título *"}),u.jsx(td,{type:"text",id:"title",name:"title",value:N.title,onChange:M,required:!0})]}),u.jsxs(vx,{children:[u.jsx(zr,{htmlFor:"description",children:"Descrição"}),u.jsx(yx,{id:"description",name:"description",value:N.description,onChange:M})]}),u.jsxs(Rr,{children:[u.jsx(zr,{htmlFor:"fileUrl",children:S==="files"?"URL do Arquivo *":"URL do Áudio *"}),u.jsx(td,{type:"text",id:"fileUrl",name:"fileUrl",value:N.fileUrl,onChange:M,placeholder:S==="files"?"https://www.dropbox.com/s/example/arquivo.pdf":"https://www.dropbox.com/s/example/audio.mp3",required:!0})]}),S==="files"&&u.jsxs(Rr,{children:[u.jsx(zr,{htmlFor:"type",children:"Tipo de Arquivo"}),u.jsxs(Bo,{id:"type",name:"type",value:N.type,onChange:M,children:[u.jsx("option",{value:"pdf",children:"PDF"}),u.jsx("option",{value:"doc",children:"DOC"}),u.jsx("option",{value:"xls",children:"XLS"}),u.jsx("option",{value:"ppt",children:"PPT"}),u.jsx("option",{value:"zip",children:"ZIP"}),u.jsx("option",{value:"image",children:"Imagem"}),u.jsx("option",{value:"other",children:"Outro"})]})]}),S==="audios"&&u.jsxs(wx,{children:[u.jsx(Sx,{children:"Transcrição do Áudio"}),N.transcript.map((P,D)=>u.jsxs(kx,{children:[u.jsx(Cx,{type:"number",step:"0.1",value:P.time,onChange:O=>R(D,"time",O.target.value),placeholder:"Tempo (s)"}),u.jsx(jx,{type:"text",value:P.text,onChange:O=>R(D,"text",O.target.value),placeholder:"Texto"}),u.jsx(Px,{type:"button",onClick:()=>H(D),children:"X"})]},D)),u.jsx(Ex,{type:"button",onClick:$,children:"+ Adicionar Item"})]}),u.jsxs(xx,{children:[u.jsx(Y,{variant:"outline",type:"button",onClick:T,children:"Cancelar"}),u.jsx(Y,{type:"submit",children:N.id?"Atualizar":"Adicionar"})]})]})]}):u.jsxs(u.Fragment,{children:[u.jsxs(Kc,{children:[u.jsx(Vo,{active:S==="files",onClick:()=>E("files"),children:"Arquivos"}),u.jsx(Vo,{active:S==="audios",onClick:()=>E("audios"),children:"Áudios"})]}),u.jsxs(fx,{children:[u.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[u.jsx(px,{type:"text",placeholder:S==="files"?"Pesquisar arquivos...":"Pesquisar áudios...",value:z,onChange:P=>f(P.target.value)}),u.jsxs(Bo,{value:d,onChange:ot,children:[u.jsx("option",{value:"",children:"Todos os Módulos"}),l.map(P=>u.jsx("option",{value:P.id,children:P.title},P.id))]}),u.jsxs(Bo,{value:y,onChange:un,disabled:!d,children:[u.jsx("option",{value:"",children:"Todas as Aulas"}),$n.map(P=>u.jsx("option",{value:P.id,children:P.title},P.id))]})]}),u.jsx(Y,{onClick:q,children:S==="files"?"Adicionar Arquivo":"Adicionar Áudio"})]}),u.jsx(mx,{children:S==="files"?cn.length>0?cn.map(P=>u.jsxs(Yc,{children:[u.jsxs(qc,{children:[u.jsx(Xc,{children:P.title}),u.jsx(Jc,{children:P.description}),u.jsxs(Zc,{children:[u.jsxs("span",{children:["Módulo: ",P.moduleName]}),u.jsxs("span",{children:["Aula: ",P.lessonTitle]}),u.jsxs("span",{children:["Tipo: ",P.type||"pdf"]})]})]}),u.jsxs(ed,{children:[u.jsx(Y,{variant:"outline",size:"small",onClick:()=>Ue(P),children:"Editar"}),u.jsx(Y,{variant:"text",size:"small",onClick:()=>Ce(P.id,"file"),children:"Excluir"})]})]},P.id)):u.jsx("p",{children:"Nenhum arquivo encontrado."}):it.length>0?it.map(P=>u.jsxs(Yc,{children:[u.jsxs(qc,{children:[u.jsx(Xc,{children:P.title}),u.jsx(Jc,{children:P.description}),u.jsxs(Zc,{children:[u.jsxs("span",{children:["Módulo: ",P.moduleName]}),u.jsxs("span",{children:["Aula: ",P.lessonTitle]}),u.jsxs("span",{children:["Transcrição: ",P.transcript?P.transcript.length:0," itens"]})]}),P.audioUrl&&u.jsxs("audio",{controls:!0,style:{marginTop:"0.5rem",width:"100%"},children:[u.jsx("source",{src:P.audioUrl,type:"audio/mp3"}),"Seu navegador não suporta o elemento de áudio."]})]}),u.jsxs(ed,{children:[u.jsx(Y,{variant:"outline",size:"small",onClick:()=>Ue(P),children:"Editar"}),u.jsx(Y,{variant:"text",size:"small",onClick:()=>Ce(P.id,"audio"),children:"Excluir"})]})]},P.id)):u.jsx("p",{children:"Nenhum áudio encontrado."})})]})]})}function $x(){const[e,t]=w.useState(!1);return w.useEffect(()=>{localStorage.getItem("auth_token")&&t(!0)},[]),u.jsxs(S0,{children:[u.jsxs(qe,{path:"/",element:u.jsx(Qv,{}),children:[u.jsx(qe,{index:!0,element:u.jsx(Sy,{})}),u.jsx(qe,{path:"modulos",element:u.jsx(Ty,{})}),u.jsx(qe,{path:"modulos/:moduleId",element:u.jsx(Hy,{})}),u.jsx(qe,{path:"modulos/:moduleId/aula/:lessonId",element:u.jsx(y1,{})}),u.jsx(qe,{path:"login",element:u.jsx(C1,{setIsAuthenticated:t})})]}),u.jsxs(qe,{path:"/admin",element:u.jsx(ry,{isAuthenticated:e}),children:[u.jsx(qe,{index:!0,element:u.jsx($1,{})}),u.jsx(qe,{path:"modulos",element:u.jsx(Q1,{})}),u.jsx(qe,{path:"aulas",element:u.jsx(cx,{})}),u.jsx(qe,{path:"arquivos",element:u.jsx(Tx,{})})]})]})}Jl.createRoot(document.getElementById("root")).render(u.jsx(kn.StrictMode,{children:u.jsx(z0,{children:u.jsx($x,{})})}));
