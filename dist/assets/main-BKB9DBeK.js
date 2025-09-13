(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))u(h);new MutationObserver(h=>{for(const v of h)if(v.type==="childList")for(const T of v.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&u(T)}).observe(document,{childList:!0,subtree:!0});function d(h){const v={};return h.integrity&&(v.integrity=h.integrity),h.referrerPolicy&&(v.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?v.credentials="include":h.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function u(h){if(h.ep)return;h.ep=!0;const v=d(h);fetch(h.href,v)}})();var vs={exports:{}},Dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function _p(){if(Mg)return Dl;Mg=1;var o=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function d(u,h,v){var T=null;if(v!==void 0&&(T=""+v),h.key!==void 0&&(T=""+h.key),"key"in h){v={};for(var w in h)w!=="key"&&(v[w]=h[w])}else v=h;return h=v.ref,{$$typeof:o,type:u,key:T,ref:h!==void 0?h:null,props:v}}return Dl.Fragment=c,Dl.jsx=d,Dl.jsxs=d,Dl}var Og;function wp(){return Og||(Og=1,vs.exports=_p()),vs.exports}var pe=wp(),ys={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function Up(){if(_g)return ee;_g=1;var o=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),T=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),L=Symbol.iterator;function N(p){return p===null||typeof p!="object"?null:(p=L&&p[L]||p["@@iterator"],typeof p=="function"?p:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,H={};function j(p,k,z){this.props=p,this.context=k,this.refs=H,this.updater=z||G}j.prototype.isReactComponent={},j.prototype.setState=function(p,k){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,k,"setState")},j.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function P(){}P.prototype=j.prototype;function Y(p,k,z){this.props=p,this.context=k,this.refs=H,this.updater=z||G}var J=Y.prototype=new P;J.constructor=Y,x(J,j.prototype),J.isPureReactComponent=!0;var re=Array.isArray,W={H:null,A:null,T:null,S:null,V:null},we=Object.prototype.hasOwnProperty;function Te(p,k,z,B,Q,oe){return z=oe.ref,{$$typeof:o,type:p,key:k,ref:z!==void 0?z:null,props:oe}}function Me(p,k){return Te(p.type,k,void 0,void 0,void 0,p.props)}function Se(p){return typeof p=="object"&&p!==null&&p.$$typeof===o}function Fe(p){var k={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(z){return k[z]})}var ct=/\/+/g;function Ge(p,k){return typeof p=="object"&&p!==null&&p.key!=null?Fe(""+p.key):k.toString(36)}function En(){}function An(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(En,En):(p.status="pending",p.then(function(k){p.status==="pending"&&(p.status="fulfilled",p.value=k)},function(k){p.status==="pending"&&(p.status="rejected",p.reason=k)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function Ye(p,k,z,B,Q){var oe=typeof p;(oe==="undefined"||oe==="boolean")&&(p=null);var $=!1;if(p===null)$=!0;else switch(oe){case"bigint":case"string":case"number":$=!0;break;case"object":switch(p.$$typeof){case o:case c:$=!0;break;case C:return $=p._init,Ye($(p._payload),k,z,B,Q)}}if($)return Q=Q(p),$=B===""?"."+Ge(p,0):B,re(Q)?(z="",$!=null&&(z=$.replace(ct,"$&/")+"/"),Ye(Q,k,z,"",function(Kt){return Kt})):Q!=null&&(Se(Q)&&(Q=Me(Q,z+(Q.key==null||p&&p.key===Q.key?"":(""+Q.key).replace(ct,"$&/")+"/")+$)),k.push(Q)),1;$=0;var et=B===""?".":B+":";if(re(p))for(var be=0;be<p.length;be++)B=p[be],oe=et+Ge(B,be),$+=Ye(B,k,z,oe,Q);else if(be=N(p),typeof be=="function")for(p=be.call(p),be=0;!(B=p.next()).done;)B=B.value,oe=et+Ge(B,be++),$+=Ye(B,k,z,oe,Q);else if(oe==="object"){if(typeof p.then=="function")return Ye(An(p),k,z,B,Q);throw k=String(p),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return $}function M(p,k,z){if(p==null)return p;var B=[],Q=0;return Ye(p,B,"","",function(oe){return k.call(z,oe,Q++)}),B}function q(p){if(p._status===-1){var k=p._result;k=k(),k.then(function(z){(p._status===0||p._status===-1)&&(p._status=1,p._result=z)},function(z){(p._status===0||p._status===-1)&&(p._status=2,p._result=z)}),p._status===-1&&(p._status=0,p._result=k)}if(p._status===1)return p._result.default;throw p._result}var K=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function me(){}return ee.Children={map:M,forEach:function(p,k,z){M(p,function(){k.apply(this,arguments)},z)},count:function(p){var k=0;return M(p,function(){k++}),k},toArray:function(p){return M(p,function(k){return k})||[]},only:function(p){if(!Se(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},ee.Component=j,ee.Fragment=d,ee.Profiler=h,ee.PureComponent=Y,ee.StrictMode=u,ee.Suspense=S,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,ee.__COMPILER_RUNTIME={__proto__:null,c:function(p){return W.H.useMemoCache(p)}},ee.cache=function(p){return function(){return p.apply(null,arguments)}},ee.cloneElement=function(p,k,z){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var B=x({},p.props),Q=p.key,oe=void 0;if(k!=null)for($ in k.ref!==void 0&&(oe=void 0),k.key!==void 0&&(Q=""+k.key),k)!we.call(k,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&k.ref===void 0||(B[$]=k[$]);var $=arguments.length-2;if($===1)B.children=z;else if(1<$){for(var et=Array($),be=0;be<$;be++)et[be]=arguments[be+2];B.children=et}return Te(p.type,Q,void 0,void 0,oe,B)},ee.createContext=function(p){return p={$$typeof:T,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:v,_context:p},p},ee.createElement=function(p,k,z){var B,Q={},oe=null;if(k!=null)for(B in k.key!==void 0&&(oe=""+k.key),k)we.call(k,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(Q[B]=k[B]);var $=arguments.length-2;if($===1)Q.children=z;else if(1<$){for(var et=Array($),be=0;be<$;be++)et[be]=arguments[be+2];Q.children=et}if(p&&p.defaultProps)for(B in $=p.defaultProps,$)Q[B]===void 0&&(Q[B]=$[B]);return Te(p,oe,void 0,void 0,null,Q)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(p){return{$$typeof:w,render:p}},ee.isValidElement=Se,ee.lazy=function(p){return{$$typeof:C,_payload:{_status:-1,_result:p},_init:q}},ee.memo=function(p,k){return{$$typeof:f,type:p,compare:k===void 0?null:k}},ee.startTransition=function(p){var k=W.T,z={};W.T=z;try{var B=p(),Q=W.S;Q!==null&&Q(z,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(me,K)}catch(oe){K(oe)}finally{W.T=k}},ee.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},ee.use=function(p){return W.H.use(p)},ee.useActionState=function(p,k,z){return W.H.useActionState(p,k,z)},ee.useCallback=function(p,k){return W.H.useCallback(p,k)},ee.useContext=function(p){return W.H.useContext(p)},ee.useDebugValue=function(){},ee.useDeferredValue=function(p,k){return W.H.useDeferredValue(p,k)},ee.useEffect=function(p,k,z){var B=W.H;if(typeof z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(p,k)},ee.useId=function(){return W.H.useId()},ee.useImperativeHandle=function(p,k,z){return W.H.useImperativeHandle(p,k,z)},ee.useInsertionEffect=function(p,k){return W.H.useInsertionEffect(p,k)},ee.useLayoutEffect=function(p,k){return W.H.useLayoutEffect(p,k)},ee.useMemo=function(p,k){return W.H.useMemo(p,k)},ee.useOptimistic=function(p,k){return W.H.useOptimistic(p,k)},ee.useReducer=function(p,k,z){return W.H.useReducer(p,k,z)},ee.useRef=function(p){return W.H.useRef(p)},ee.useState=function(p){return W.H.useState(p)},ee.useSyncExternalStore=function(p,k,z){return W.H.useSyncExternalStore(p,k,z)},ee.useTransition=function(){return W.H.useTransition()},ee.version="19.1.0",ee}var wg;function _s(){return wg||(wg=1,ys.exports=Up()),ys.exports}var _=_s(),Ss={exports:{}},Ml={},bs={exports:{}},Es={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function Np(){return Ug||(Ug=1,function(o){function c(M,q){var K=M.length;M.push(q);e:for(;0<K;){var me=K-1>>>1,p=M[me];if(0<h(p,q))M[me]=q,M[K]=p,K=me;else break e}}function d(M){return M.length===0?null:M[0]}function u(M){if(M.length===0)return null;var q=M[0],K=M.pop();if(K!==q){M[0]=K;e:for(var me=0,p=M.length,k=p>>>1;me<k;){var z=2*(me+1)-1,B=M[z],Q=z+1,oe=M[Q];if(0>h(B,K))Q<p&&0>h(oe,B)?(M[me]=oe,M[Q]=K,me=Q):(M[me]=B,M[z]=K,me=z);else if(Q<p&&0>h(oe,K))M[me]=oe,M[Q]=K,me=Q;else break e}}return q}function h(M,q){var K=M.sortIndex-q.sortIndex;return K!==0?K:M.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;o.unstable_now=function(){return v.now()}}else{var T=Date,w=T.now();o.unstable_now=function(){return T.now()-w}}var S=[],f=[],C=1,L=null,N=3,G=!1,x=!1,H=!1,j=!1,P=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function re(M){for(var q=d(f);q!==null;){if(q.callback===null)u(f);else if(q.startTime<=M)u(f),q.sortIndex=q.expirationTime,c(S,q);else break;q=d(f)}}function W(M){if(H=!1,re(M),!x)if(d(S)!==null)x=!0,we||(we=!0,Ge());else{var q=d(f);q!==null&&Ye(W,q.startTime-M)}}var we=!1,Te=-1,Me=5,Se=-1;function Fe(){return j?!0:!(o.unstable_now()-Se<Me)}function ct(){if(j=!1,we){var M=o.unstable_now();Se=M;var q=!0;try{e:{x=!1,H&&(H=!1,Y(Te),Te=-1),G=!0;var K=N;try{t:{for(re(M),L=d(S);L!==null&&!(L.expirationTime>M&&Fe());){var me=L.callback;if(typeof me=="function"){L.callback=null,N=L.priorityLevel;var p=me(L.expirationTime<=M);if(M=o.unstable_now(),typeof p=="function"){L.callback=p,re(M),q=!0;break t}L===d(S)&&u(S),re(M)}else u(S);L=d(S)}if(L!==null)q=!0;else{var k=d(f);k!==null&&Ye(W,k.startTime-M),q=!1}}break e}finally{L=null,N=K,G=!1}q=void 0}}finally{q?Ge():we=!1}}}var Ge;if(typeof J=="function")Ge=function(){J(ct)};else if(typeof MessageChannel<"u"){var En=new MessageChannel,An=En.port2;En.port1.onmessage=ct,Ge=function(){An.postMessage(null)}}else Ge=function(){P(ct,0)};function Ye(M,q){Te=P(function(){M(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(M){M.callback=null},o.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<M?Math.floor(1e3/M):5},o.unstable_getCurrentPriorityLevel=function(){return N},o.unstable_next=function(M){switch(N){case 1:case 2:case 3:var q=3;break;default:q=N}var K=N;N=q;try{return M()}finally{N=K}},o.unstable_requestPaint=function(){j=!0},o.unstable_runWithPriority=function(M,q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var K=N;N=M;try{return q()}finally{N=K}},o.unstable_scheduleCallback=function(M,q,K){var me=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?me+K:me):K=me,M){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=K+p,M={id:C++,callback:q,priorityLevel:M,startTime:K,expirationTime:p,sortIndex:-1},K>me?(M.sortIndex=K,c(f,M),d(S)===null&&M===d(f)&&(H?(Y(Te),Te=-1):H=!0,Ye(W,K-me))):(M.sortIndex=p,c(S,M),x||G||(x=!0,we||(we=!0,Ge()))),M},o.unstable_shouldYield=Fe,o.unstable_wrapCallback=function(M){var q=N;return function(){var K=N;N=q;try{return M.apply(this,arguments)}finally{N=K}}}}(Es)),Es}var Ng;function kp(){return Ng||(Ng=1,bs.exports=Np()),bs.exports}var As={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function xp(){if(kg)return Qe;kg=1;var o=_s();function c(S){var f="https://react.dev/errors/"+S;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)f+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+S+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(c(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function v(S,f,C){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:L==null?null:""+L,children:S,containerInfo:f,implementation:C}}var T=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(S,f){if(S==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Qe.createPortal=function(S,f){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(c(299));return v(S,f,null,C)},Qe.flushSync=function(S){var f=T.T,C=u.p;try{if(T.T=null,u.p=2,S)return S()}finally{T.T=f,u.p=C,u.d.f()}},Qe.preconnect=function(S,f){typeof S=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,u.d.C(S,f))},Qe.prefetchDNS=function(S){typeof S=="string"&&u.d.D(S)},Qe.preinit=function(S,f){if(typeof S=="string"&&f&&typeof f.as=="string"){var C=f.as,L=w(C,f.crossOrigin),N=typeof f.integrity=="string"?f.integrity:void 0,G=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;C==="style"?u.d.S(S,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:L,integrity:N,fetchPriority:G}):C==="script"&&u.d.X(S,{crossOrigin:L,integrity:N,fetchPriority:G,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},Qe.preinitModule=function(S,f){if(typeof S=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var C=w(f.as,f.crossOrigin);u.d.M(S,{crossOrigin:C,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&u.d.M(S)},Qe.preload=function(S,f){if(typeof S=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var C=f.as,L=w(C,f.crossOrigin);u.d.L(S,C,{crossOrigin:L,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},Qe.preloadModule=function(S,f){if(typeof S=="string")if(f){var C=w(f.as,f.crossOrigin);u.d.m(S,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:C,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else u.d.m(S)},Qe.requestFormReset=function(S){u.d.r(S)},Qe.unstable_batchedUpdates=function(S,f){return S(f)},Qe.useFormState=function(S,f,C){return T.H.useFormState(S,f,C)},Qe.useFormStatus=function(){return T.H.useHostTransitionStatus()},Qe.version="19.1.0",Qe}var xg;function Lp(){if(xg)return As.exports;xg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),As.exports=xp(),As.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function Pp(){if(Lg)return Ml;Lg=1;var o=kp(),c=_s(),d=Lp();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function v(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function T(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(v(e)!==e)throw Error(u(188))}function S(e){var t=e.alternate;if(!t){if(t=v(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return w(l),e;if(a===i)return w(l),t;a=a.sibling}throw Error(u(188))}if(n.return!==i.return)n=l,i=a;else{for(var r=!1,s=l.child;s;){if(s===n){r=!0,n=l,i=a;break}if(s===i){r=!0,i=l,n=a;break}s=s.sibling}if(!r){for(s=a.child;s;){if(s===n){r=!0,n=a,i=l;break}if(s===i){r=!0,i=a,n=l;break}s=s.sibling}if(!r)throw Error(u(189))}}if(n.alternate!==i)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var C=Object.assign,L=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),J=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),Te=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),Fe=Symbol.for("react.memo_cache_sentinel"),ct=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=ct&&e[ct]||e["@@iterator"],typeof e=="function"?e:null)}var En=Symbol.for("react.client.reference");function An(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===En?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case x:return"Fragment";case j:return"Profiler";case H:return"StrictMode";case W:return"Suspense";case we:return"SuspenseList";case Se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case J:return(e.displayName||"Context")+".Provider";case Y:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Te:return t=e.displayName||null,t!==null?t:An(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return An(e(t))}catch{}}return null}var Ye=Array.isArray,M=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},me=[],p=-1;function k(e){return{current:e}}function z(e){0>p||(e.current=me[p],me[p]=null,p--)}function B(e,t){p++,me[p]=e.current,e.current=t}var Q=k(null),oe=k(null),$=k(null),et=k(null);function be(e,t){switch(B($,t),B(oe,e),B(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?tg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=tg(t),e=ng(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(Q),B(Q,e)}function Kt(){z(Q),z(oe),z($)}function tr(e){e.memoizedState!==null&&B(et,e);var t=Q.current,n=ng(t,e.type);t!==n&&(B(oe,e),B(Q,n))}function xl(e){oe.current===e&&(z(Q),z(oe)),et.current===e&&(z(et),El._currentValue=K)}var nr=Object.prototype.hasOwnProperty,ir=o.unstable_scheduleCallback,lr=o.unstable_cancelCallback,rh=o.unstable_shouldYield,oh=o.unstable_requestPaint,Rt=o.unstable_now,sh=o.unstable_getCurrentPriorityLevel,Ls=o.unstable_ImmediatePriority,Ps=o.unstable_UserBlockingPriority,Ll=o.unstable_NormalPriority,uh=o.unstable_LowPriority,Bs=o.unstable_IdlePriority,ch=o.log,dh=o.unstable_setDisableYieldValue,_i=null,tt=null;function Zt(e){if(typeof ch=="function"&&dh(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(_i,e)}catch{}}var nt=Math.clz32?Math.clz32:fh,gh=Math.log,hh=Math.LN2;function fh(e){return e>>>=0,e===0?32:31-(gh(e)/hh|0)|0}var Pl=256,Bl=4194304;function Rn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ql(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var s=i&134217727;return s!==0?(i=s&~a,i!==0?l=Rn(i):(r&=s,r!==0?l=Rn(r):n||(n=s&~e,n!==0&&(l=Rn(n))))):(s=i&~a,s!==0?l=Rn(s):r!==0?l=Rn(r):n||(n=i&~e,n!==0&&(l=Rn(n)))),l===0?0:t!==0&&t!==l&&(t&a)===0&&(a=l&-l,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:l}function wi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ph(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qs(){var e=Pl;return Pl<<=1,(Pl&4194048)===0&&(Pl=256),e}function zs(){var e=Bl;return Bl<<=1,(Bl&62914560)===0&&(Bl=4194304),e}function ar(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ui(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mh(e,t,n,i,l,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,g=e.expirationTimes,E=e.hiddenUpdates;for(n=r&~n;0<n;){var D=31-nt(n),U=1<<D;s[D]=0,g[D]=-1;var A=E[D];if(A!==null)for(E[D]=null,D=0;D<A.length;D++){var R=A[D];R!==null&&(R.lane&=-536870913)}n&=~U}i!==0&&Hs(e,i,0),a!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Hs(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-nt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function Is(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-nt(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function rr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gs(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Eg(e.type))}function vh(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var Jt=Math.random().toString(36).slice(2),je="__reactFiber$"+Jt,Ke="__reactProps$"+Jt,Gn="__reactContainer$"+Jt,sr="__reactEvents$"+Jt,yh="__reactListeners$"+Jt,Sh="__reactHandles$"+Jt,Ys="__reactResources$"+Jt,Ni="__reactMarker$"+Jt;function ur(e){delete e[je],delete e[Ke],delete e[sr],delete e[yh],delete e[Sh]}function Yn(e){var t=e[je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gn]||n[je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rg(e);e!==null;){if(n=e[je])return n;e=rg(e)}return t}e=n,n=e.parentNode}return null}function jn(e){if(e=e[je]||e[Gn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ki(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Vn(e){var t=e[Ys];return t||(t=e[Ys]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Le(e){e[Ni]=!0}var js=new Set,Vs={};function Tn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(Vs[e]=t,e=0;e<t.length;e++)js.add(t[e])}var bh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qs={},Fs={};function Eh(e){return nr.call(Fs,e)?!0:nr.call(Qs,e)?!1:bh.test(e)?Fs[e]=!0:(Qs[e]=!0,!1)}function zl(e,t,n){if(Eh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Hl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Nt(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var cr,Xs;function Fn(e){if(cr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);cr=t&&t[1]||"",Xs=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cr+e+Xs}var dr=!1;function gr(e,t){if(!e||dr)return"";dr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(R){var A=R}Reflect.construct(e,[],U)}else{try{U.call()}catch(R){A=R}e.call(U.prototype)}}else{try{throw Error()}catch(R){A=R}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(R){if(R&&A&&typeof R.stack=="string")return[R.stack,A.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],s=a[1];if(r&&s){var g=r.split(`
`),E=s.split(`
`);for(l=i=0;i<g.length&&!g[i].includes("DetermineComponentFrameRoot");)i++;for(;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;if(i===g.length||l===E.length)for(i=g.length-1,l=E.length-1;1<=i&&0<=l&&g[i]!==E[l];)l--;for(;1<=i&&0<=l;i--,l--)if(g[i]!==E[l]){if(i!==1||l!==1)do if(i--,l--,0>l||g[i]!==E[l]){var D=`
`+g[i].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=i&&0<=l);break}}}finally{dr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Fn(n):""}function Ah(e){switch(e.tag){case 26:case 27:case 5:return Fn(e.type);case 16:return Fn("Lazy");case 13:return Fn("Suspense");case 19:return Fn("SuspenseList");case 0:case 15:return gr(e.type,!1);case 11:return gr(e.type.render,!1);case 1:return gr(e.type,!0);case 31:return Fn("Activity");default:return""}}function Ks(e){try{var t="";do t+=Ah(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rh(e){var t=Zs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(r){i=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Il(e){e._valueTracker||(e._valueTracker=Rh(e))}function Js(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Zs(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Gl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Th=/[\n"\\]/g;function gt(e){return e.replace(Th,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hr(e,t,n,i,l,a,r,s){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?fr(e,r,dt(t)):n!=null?fr(e,r,dt(n)):i!=null&&e.removeAttribute("value"),l==null&&a!=null&&(e.defaultChecked=!!a),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+dt(s):e.removeAttribute("name")}function Ws(e,t,n,i,l,a,r,s){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null))return;n=n!=null?""+dt(n):"",t=t!=null?""+dt(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=s?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r)}function fr(e,t,n){t==="number"&&Gl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Xn(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function $s(e,t,n){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+dt(n):""}function eu(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(u(92));if(Ye(i)){if(1<i.length)throw Error(u(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=dt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ch=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tu(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Ch.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function nu(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&tu(e,l,i)}else for(var a in t)t.hasOwnProperty(a)&&tu(e,a,t[a])}function pr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yl(e){return Mh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var mr=null;function vr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zn=null,Jn=null;function iu(e){var t=jn(e);if(t&&(e=t.stateNode)){var n=e[Ke]||null;e:switch(e=t.stateNode,t.type){case"input":if(hr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[Ke]||null;if(!l)throw Error(u(90));hr(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Js(i)}break e;case"textarea":$s(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Xn(e,!!n.multiple,t,!1)}}}var yr=!1;function lu(e,t,n){if(yr)return e(t,n);yr=!0;try{var i=e(t);return i}finally{if(yr=!1,(Zn!==null||Jn!==null)&&(Oa(),Zn&&(t=Zn,e=Jn,Jn=Zn=null,iu(t),e)))for(t=0;t<e.length;t++)iu(e[t])}}function xi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Ke]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sr=!1;if(kt)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){Sr=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{Sr=!1}var Wt=null,br=null,jl=null;function au(){if(jl)return jl;var e,t=br,n=t.length,i,l="value"in Wt?Wt.value:Wt.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===l[a-i];i++);return jl=l.slice(e,1<i?1-i:void 0)}function Vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ql(){return!0}function ru(){return!1}function Ze(e){function t(n,i,l,a,r){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ql:ru,this.isPropagationStopped=ru,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Ze(Cn),Pi=C({},Cn,{view:0,detail:0}),Oh=Ze(Pi),Er,Ar,Bi,Xl=C({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bi&&(Bi&&e.type==="mousemove"?(Er=e.screenX-Bi.screenX,Ar=e.screenY-Bi.screenY):Ar=Er=0,Bi=e),Er)},movementY:function(e){return"movementY"in e?e.movementY:Ar}}),ou=Ze(Xl),_h=C({},Xl,{dataTransfer:0}),wh=Ze(_h),Uh=C({},Pi,{relatedTarget:0}),Rr=Ze(Uh),Nh=C({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),kh=Ze(Nh),xh=C({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lh=Ze(xh),Ph=C({},Cn,{data:0}),su=Ze(Ph),Bh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zh[e])?!!t[e]:!1}function Tr(){return Hh}var Ih=C({},Pi,{key:function(e){if(e.key){var t=Bh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(e){return e.type==="keypress"?Vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gh=Ze(Ih),Yh=C({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uu=Ze(Yh),jh=C({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr}),Vh=Ze(jh),Qh=C({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=Ze(Qh),Xh=C({},Xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kh=Ze(Xh),Zh=C({},Cn,{newState:0,oldState:0}),Jh=Ze(Zh),Wh=[9,13,27,32],Cr=kt&&"CompositionEvent"in window,qi=null;kt&&"documentMode"in document&&(qi=document.documentMode);var $h=kt&&"TextEvent"in window&&!qi,cu=kt&&(!Cr||qi&&8<qi&&11>=qi),du=" ",gu=!1;function hu(e,t){switch(e){case"keyup":return Wh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function ef(e,t){switch(e){case"compositionend":return fu(t);case"keypress":return t.which!==32?null:(gu=!0,du);case"textInput":return e=t.data,e===du&&gu?null:e;default:return null}}function tf(e,t){if(Wn)return e==="compositionend"||!Cr&&hu(e,t)?(e=au(),jl=br=Wt=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cu&&t.locale!=="ko"?null:t.data;default:return null}}var nf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nf[e.type]:t==="textarea"}function mu(e,t,n,i){Zn?Jn?Jn.push(i):Jn=[i]:Zn=i,t=xa(t,"onChange"),0<t.length&&(n=new Fl("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var zi=null,Hi=null;function lf(e){Zd(e,0)}function Kl(e){var t=ki(e);if(Js(t))return e}function vu(e,t){if(e==="change")return t}var yu=!1;if(kt){var Dr;if(kt){var Mr="oninput"in document;if(!Mr){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),Mr=typeof Su.oninput=="function"}Dr=Mr}else Dr=!1;yu=Dr&&(!document.documentMode||9<document.documentMode)}function bu(){zi&&(zi.detachEvent("onpropertychange",Eu),Hi=zi=null)}function Eu(e){if(e.propertyName==="value"&&Kl(Hi)){var t=[];mu(t,Hi,e,vr(e)),lu(lf,t)}}function af(e,t,n){e==="focusin"?(bu(),zi=t,Hi=n,zi.attachEvent("onpropertychange",Eu)):e==="focusout"&&bu()}function rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kl(Hi)}function of(e,t){if(e==="click")return Kl(t)}function sf(e,t){if(e==="input"||e==="change")return Kl(t)}function uf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:uf;function Ii(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!nr.call(t,l)||!it(e[l],t[l]))return!1}return!0}function Au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ru(e,t){var n=Au(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Au(n)}}function Tu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gl(e.document)}return t}function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var cf=kt&&"documentMode"in document&&11>=document.documentMode,$n=null,_r=null,Gi=null,wr=!1;function Du(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wr||$n==null||$n!==Gl(i)||(i=$n,"selectionStart"in i&&Or(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Gi&&Ii(Gi,i)||(Gi=i,i=xa(_r,"onSelect"),0<i.length&&(t=new Fl("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=$n)))}function Dn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ei={animationend:Dn("Animation","AnimationEnd"),animationiteration:Dn("Animation","AnimationIteration"),animationstart:Dn("Animation","AnimationStart"),transitionrun:Dn("Transition","TransitionRun"),transitionstart:Dn("Transition","TransitionStart"),transitioncancel:Dn("Transition","TransitionCancel"),transitionend:Dn("Transition","TransitionEnd")},Ur={},Mu={};kt&&(Mu=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Mn(e){if(Ur[e])return Ur[e];if(!ei[e])return e;var t=ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mu)return Ur[e]=t[n];return e}var Ou=Mn("animationend"),_u=Mn("animationiteration"),wu=Mn("animationstart"),df=Mn("transitionrun"),gf=Mn("transitionstart"),hf=Mn("transitioncancel"),Uu=Mn("transitionend"),Nu=new Map,Nr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nr.push("scrollEnd");function bt(e,t){Nu.set(e,t),Tn(t,[e])}var ku=new WeakMap;function ht(e,t){if(typeof e=="object"&&e!==null){var n=ku.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ks(t)},ku.set(e,t),t)}return{value:e,source:t,stack:Ks(t)}}var ft=[],ti=0,kr=0;function Zl(){for(var e=ti,t=kr=ti=0;t<e;){var n=ft[t];ft[t++]=null;var i=ft[t];ft[t++]=null;var l=ft[t];ft[t++]=null;var a=ft[t];if(ft[t++]=null,i!==null&&l!==null){var r=i.pending;r===null?l.next=l:(l.next=r.next,r.next=l),i.pending=l}a!==0&&xu(n,l,a)}}function Jl(e,t,n,i){ft[ti++]=e,ft[ti++]=t,ft[ti++]=n,ft[ti++]=i,kr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function xr(e,t,n,i){return Jl(e,t,n,i),Wl(e)}function ni(e,t){return Jl(e,null,null,t),Wl(e)}function xu(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(l=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,l&&t!==null&&(l=31-nt(n),e=a.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),a):null}function Wl(e){if(50<hl)throw hl=0,Io=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ii={};function ff(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,i){return new ff(e,t,n,i)}function Lr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xt(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Lu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $l(e,t,n,i,l,a){var r=0;if(i=e,typeof e=="function")Lr(e)&&(r=1);else if(typeof e=="string")r=mp(e,n,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Se:return e=lt(31,n,t,l),e.elementType=Se,e.lanes=a,e;case x:return On(n.children,l,a,t);case H:r=8,l|=24;break;case j:return e=lt(12,n,t,l|2),e.elementType=j,e.lanes=a,e;case W:return e=lt(13,n,t,l),e.elementType=W,e.lanes=a,e;case we:return e=lt(19,n,t,l),e.elementType=we,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:case J:r=10;break e;case Y:r=9;break e;case re:r=11;break e;case Te:r=14;break e;case Me:r=16,i=null;break e}r=29,n=Error(u(130,e===null?"null":typeof e,"")),i=null}return t=lt(r,n,t,l),t.elementType=e,t.type=i,t.lanes=a,t}function On(e,t,n,i){return e=lt(7,e,i,t),e.lanes=n,e}function Pr(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function Br(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var li=[],ai=0,ea=null,ta=0,pt=[],mt=0,_n=null,Lt=1,Pt="";function wn(e,t){li[ai++]=ta,li[ai++]=ea,ea=e,ta=t}function Pu(e,t,n){pt[mt++]=Lt,pt[mt++]=Pt,pt[mt++]=_n,_n=e;var i=Lt;e=Pt;var l=32-nt(i)-1;i&=~(1<<l),n+=1;var a=32-nt(t)+l;if(30<a){var r=l-l%5;a=(i&(1<<r)-1).toString(32),i>>=r,l-=r,Lt=1<<32-nt(t)+l|n<<l|i,Pt=a+e}else Lt=1<<a|n<<l|i,Pt=e}function qr(e){e.return!==null&&(wn(e,1),Pu(e,1,0))}function zr(e){for(;e===ea;)ea=li[--ai],li[ai]=null,ta=li[--ai],li[ai]=null;for(;e===_n;)_n=pt[--mt],pt[mt]=null,Pt=pt[--mt],pt[mt]=null,Lt=pt[--mt],pt[mt]=null}var Xe=null,Ce=null,ue=!1,Un=null,Tt=!1,Hr=Error(u(519));function Nn(e){var t=Error(u(418,""));throw Vi(ht(t,e)),Hr}function Bu(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[je]=e,t[Ke]=i,n){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(n=0;n<pl.length;n++)le(pl[n],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),Ws(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Il(t);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),eu(t,i.value,i.defaultValue,i.children),Il(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||eg(t.textContent,n)?(i.popover!=null&&(le("beforetoggle",t),le("toggle",t)),i.onScroll!=null&&le("scroll",t),i.onScrollEnd!=null&&le("scrollend",t),i.onClick!=null&&(t.onclick=La),t=!0):t=!1,t||Nn(e)}function qu(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Xe=Xe.return}}function Yi(e){if(e!==Xe)return!1;if(!ue)return qu(e),ue=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||is(e.type,e.memoizedProps)),n=!n),n&&Ce&&Nn(e),qu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ce=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ce=null}}else t===27?(t=Ce,pn(e.type)?(e=os,os=null,Ce=e):Ce=t):Ce=Xe?At(e.stateNode.nextSibling):null;return!0}function ji(){Ce=Xe=null,ue=!1}function zu(){var e=Un;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),Un=null),e}function Vi(e){Un===null?Un=[e]:Un.push(e)}var Ir=k(null),kn=null,Bt=null;function $t(e,t,n){B(Ir,t._currentValue),t._currentValue=n}function qt(e){e._currentValue=Ir.current,z(Ir)}function Gr(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Yr(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var a=l.dependencies;if(a!==null){var r=l.child;a=a.firstContext;e:for(;a!==null;){var s=a;a=l;for(var g=0;g<t.length;g++)if(s.context===t[g]){a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Gr(a.return,n,e),i||(r=null);break e}a=s.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(u(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Gr(r,n,e),r=null}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function Qi(e,t,n,i){e=null;for(var l=t,a=!1;l!==null;){if(!a){if((l.flags&524288)!==0)a=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var s=l.type;it(l.pendingProps.value,r.value)||(e!==null?e.push(s):e=[s])}}else if(l===et.current){if(r=l.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(El):e=[El])}l=l.return}e!==null&&Yr(t,e,n,i),t.flags|=262144}function na(e){for(e=e.firstContext;e!==null;){if(!it(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xn(e){kn=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return Hu(kn,e)}function ia(e,t){return kn===null&&xn(e),Hu(e,t)}function Hu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Bt===null){if(e===null)throw Error(u(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return n}var pf=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},mf=o.unstable_scheduleCallback,vf=o.unstable_NormalPriority,ke={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jr(){return{controller:new pf,data:new Map,refCount:0}}function Fi(e){e.refCount--,e.refCount===0&&mf(vf,function(){e.controller.abort()})}var Xi=null,Vr=0,ri=0,oi=null;function yf(e,t){if(Xi===null){var n=Xi=[];Vr=0,ri=Xo(),oi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Vr++,t.then(Iu,Iu),t}function Iu(){if(--Vr===0&&Xi!==null){oi!==null&&(oi.status="fulfilled");var e=Xi;Xi=null,ri=0,oi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sf(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var Gu=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&yf(e,t),Gu!==null&&Gu(e,t)};var Ln=k(null);function Qr(){var e=Ln.current;return e!==null?e:ye.pooledCache}function la(e,t){t===null?B(Ln,Ln.current):B(Ln,t.pool)}function Yu(){var e=Qr();return e===null?null:{parent:ke._currentValue,pool:e}}var Ki=Error(u(460)),ju=Error(u(474)),aa=Error(u(542)),Fr={then:function(){}};function Vu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ra(){}function Qu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ra,ra),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xu(e),e;default:if(typeof t.status=="string")t.then(ra,ra);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xu(e),e}throw Zi=t,Ki}}var Zi=null;function Fu(){if(Zi===null)throw Error(u(459));var e=Zi;return Zi=null,e}function Xu(e){if(e===Ki||e===aa)throw Error(u(483))}var en=!1;function Xr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function tn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ce&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=Wl(e),xu(e,null,n),t}return Jl(e,i,t,n),Wl(e)}function Ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Is(e,n)}}function Zr(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?l=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Jr=!1;function Wi(){if(Jr){var e=oi;if(e!==null)throw e}}function $i(e,t,n,i){Jr=!1;var l=e.updateQueue;en=!1;var a=l.firstBaseUpdate,r=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var g=s,E=g.next;g.next=null,r===null?a=E:r.next=E,r=g;var D=e.alternate;D!==null&&(D=D.updateQueue,s=D.lastBaseUpdate,s!==r&&(s===null?D.firstBaseUpdate=E:s.next=E,D.lastBaseUpdate=g))}if(a!==null){var U=l.baseState;r=0,D=E=g=null,s=a;do{var A=s.lane&-536870913,R=A!==s.lane;if(R?(ae&A)===A:(i&A)===A){A!==0&&A===ri&&(Jr=!0),D!==null&&(D=D.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var Z=e,F=s;A=t;var fe=n;switch(F.tag){case 1:if(Z=F.payload,typeof Z=="function"){U=Z.call(fe,U,A);break e}U=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=F.payload,A=typeof Z=="function"?Z.call(fe,U,A):Z,A==null)break e;U=C({},U,A);break e;case 2:en=!0}}A=s.callback,A!==null&&(e.flags|=64,R&&(e.flags|=8192),R=l.callbacks,R===null?l.callbacks=[A]:R.push(A))}else R={lane:A,tag:s.tag,payload:s.payload,callback:s.callback,next:null},D===null?(E=D=R,g=U):D=D.next=R,r|=A;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;R=s,s=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);D===null&&(g=U),l.baseState=g,l.firstBaseUpdate=E,l.lastBaseUpdate=D,a===null&&(l.shared.lanes=0),dn|=r,e.lanes=r,e.memoizedState=U}}function Ku(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Zu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ku(n[e],t)}var si=k(null),oa=k(0);function Ju(e,t){e=Vt,B(oa,e),B(si,t),Vt=e|t.baseLanes}function Wr(){B(oa,Vt),B(si,si.current)}function $r(){Vt=oa.current,z(si),z(oa)}var ln=0,te=null,ge=null,Ue=null,sa=!1,ui=!1,Pn=!1,ua=0,el=0,ci=null,bf=0;function Oe(){throw Error(u(321))}function eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function to(e,t,n,i,l,a){return ln=a,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?xc:Lc,Pn=!1,a=n(i,l),Pn=!1,ui&&(a=$u(t,n,i,l)),Wu(e),a}function Wu(e){M.H=pa;var t=ge!==null&&ge.next!==null;if(ln=0,Ue=ge=te=null,sa=!1,el=0,ci=null,t)throw Error(u(300));e===null||Pe||(e=e.dependencies,e!==null&&na(e)&&(Pe=!0))}function $u(e,t,n,i){te=e;var l=0;do{if(ui&&(ci=null),el=0,ui=!1,25<=l)throw Error(u(301));if(l+=1,Ue=ge=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}M.H=Mf,a=t(n,i)}while(ui);return a}function Ef(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?tl(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(te.flags|=1024),t}function no(){var e=ua!==0;return ua=0,e}function io(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function lo(e){if(sa){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}sa=!1}ln=0,Ue=ge=te=null,ui=!1,el=ua=0,ci=null}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?te.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Ne(){if(ge===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=Ue===null?te.memoizedState:Ue.next;if(t!==null)Ue=t,ge=e;else{if(e===null)throw te.alternate===null?Error(u(467)):Error(u(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ue===null?te.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(e){var t=el;return el+=1,ci===null&&(ci=[]),e=Qu(ci,e,t),t=te,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?xc:Lc),e}function ca(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tl(e);if(e.$$typeof===J)return Ve(e)}throw Error(u(438,String(e)))}function ro(e){var t=null,n=te.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=te.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ao(),te.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Fe;return t.index++,n}function zt(e,t){return typeof t=="function"?t(e):t}function da(e){var t=Ne();return oo(t,ge,e)}function oo(e,t,n){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=n;var l=e.baseQueue,a=i.pending;if(a!==null){if(l!==null){var r=l.next;l.next=a.next,a.next=r}t.baseQueue=l=a,i.pending=null}if(a=e.baseState,l===null)e.memoizedState=a;else{t=l.next;var s=r=null,g=null,E=t,D=!1;do{var U=E.lane&-536870913;if(U!==E.lane?(ae&U)===U:(ln&U)===U){var A=E.revertLane;if(A===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),U===ri&&(D=!0);else if((ln&A)===A){E=E.next,A===ri&&(D=!0);continue}else U={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(s=g=U,r=a):g=g.next=U,te.lanes|=A,dn|=A;U=E.action,Pn&&n(a,U),a=E.hasEagerState?E.eagerState:n(a,U)}else A={lane:U,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},g===null?(s=g=A,r=a):g=g.next=A,te.lanes|=U,dn|=U;E=E.next}while(E!==null&&E!==t);if(g===null?r=a:g.next=s,!it(a,e.memoizedState)&&(Pe=!0,D&&(n=oi,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=g,i.lastRenderedState=a}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function so(e){var t=Ne(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var r=l=l.next;do a=e(a,r.action),r=r.next;while(r!==l);it(a,t.memoizedState)||(Pe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function ec(e,t,n){var i=te,l=Ne(),a=ue;if(a){if(n===void 0)throw Error(u(407));n=n()}else n=t();var r=!it((ge||l).memoizedState,n);r&&(l.memoizedState=n,Pe=!0),l=l.queue;var s=ic.bind(null,i,l,e);if(nl(2048,8,s,[e]),l.getSnapshot!==t||r||Ue!==null&&Ue.memoizedState.tag&1){if(i.flags|=2048,di(9,ga(),nc.bind(null,i,l,n,t),null),ye===null)throw Error(u(349));a||(ln&124)!==0||tc(i,t,n)}return n}function tc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t=ao(),te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nc(e,t,n,i){t.value=n,t.getSnapshot=i,lc(t)&&ac(e)}function ic(e,t,n){return n(function(){lc(t)&&ac(e)})}function lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function ac(e){var t=ni(e,2);t!==null&&ut(t,e,2)}function uo(e){var t=Je();if(typeof e=="function"){var n=e;if(e=n(),Pn){Zt(!0);try{n()}finally{Zt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zt,lastRenderedState:e},t}function rc(e,t,n,i){return e.baseState=n,oo(e,ge,typeof i=="function"?i:zt)}function Af(e,t,n,i,l){if(fa(e))throw Error(u(485));if(e=t.action,e!==null){var a={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};M.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,oc(t,a)):(a.next=n.next,t.pending=n.next=a)}}function oc(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var a=M.T,r={};M.T=r;try{var s=n(l,i),g=M.S;g!==null&&g(r,s),sc(e,t,s)}catch(E){co(e,t,E)}finally{M.T=a}}else try{a=n(l,i),sc(e,t,a)}catch(E){co(e,t,E)}}function sc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){uc(e,t,i)},function(i){return co(e,t,i)}):uc(e,t,n)}function uc(e,t,n){t.status="fulfilled",t.value=n,cc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,oc(e,n)))}function co(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,cc(t),t=t.next;while(t!==i)}e.action=null}function cc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dc(e,t){return t}function gc(e,t){if(ue){var n=ye.formState;if(n!==null){e:{var i=te;if(ue){if(Ce){t:{for(var l=Ce,a=Tt;l.nodeType!==8;){if(!a){l=null;break t}if(l=At(l.nextSibling),l===null){l=null;break t}}a=l.data,l=a==="F!"||a==="F"?l:null}if(l){Ce=At(l.nextSibling),i=l.data==="F!";break e}}Nn(i)}i=!1}i&&(t=n[0])}}return n=Je(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dc,lastRenderedState:t},n.queue=i,n=Uc.bind(null,te,i),i.dispatch=n,i=uo(!1),a=mo.bind(null,te,!1,i.queue),i=Je(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=Af.bind(null,te,l,a,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function hc(e){var t=Ne();return fc(t,ge,e)}function fc(e,t,n){if(t=oo(e,t,dc)[0],e=da(zt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=tl(t)}catch(r){throw r===Ki?aa:r}else i=t;t=Ne();var l=t.queue,a=l.dispatch;return n!==t.memoizedState&&(te.flags|=2048,di(9,ga(),Rf.bind(null,l,n),null)),[i,a,e]}function Rf(e,t){e.action=t}function pc(e){var t=Ne(),n=ge;if(n!==null)return fc(t,n,e);Ne(),t=t.memoizedState,n=Ne();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function di(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=te.updateQueue,t===null&&(t=ao(),te.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function ga(){return{destroy:void 0,resource:void 0}}function mc(){return Ne().memoizedState}function ha(e,t,n,i){var l=Je();i=i===void 0?null:i,te.flags|=e,l.memoizedState=di(1|t,ga(),n,i)}function nl(e,t,n,i){var l=Ne();i=i===void 0?null:i;var a=l.memoizedState.inst;ge!==null&&i!==null&&eo(i,ge.memoizedState.deps)?l.memoizedState=di(t,a,n,i):(te.flags|=e,l.memoizedState=di(1|t,a,n,i))}function vc(e,t){ha(8390656,8,e,t)}function yc(e,t){nl(2048,8,e,t)}function Sc(e,t){return nl(4,2,e,t)}function bc(e,t){return nl(4,4,e,t)}function Ec(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ac(e,t,n){n=n!=null?n.concat([e]):null,nl(4,4,Ec.bind(null,t,e),n)}function go(){}function Rc(e,t){var n=Ne();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&eo(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Tc(e,t){var n=Ne();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&eo(t,i[1]))return i[0];if(i=e(),Pn){Zt(!0);try{e()}finally{Zt(!1)}}return n.memoizedState=[i,t],i}function ho(e,t,n){return n===void 0||(ln&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Md(),te.lanes|=e,dn|=e,n)}function Cc(e,t,n,i){return it(n,t)?n:si.current!==null?(e=ho(e,n,i),it(e,t)||(Pe=!0),e):(ln&42)===0?(Pe=!0,e.memoizedState=n):(e=Md(),te.lanes|=e,dn|=e,t)}function Dc(e,t,n,i,l){var a=q.p;q.p=a!==0&&8>a?a:8;var r=M.T,s={};M.T=s,mo(e,!1,t,n);try{var g=l(),E=M.S;if(E!==null&&E(s,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var D=Sf(g,i);il(e,t,D,st(e))}else il(e,t,i,st(e))}catch(U){il(e,t,{then:function(){},status:"rejected",reason:U},st())}finally{q.p=a,M.T=r}}function Tf(){}function fo(e,t,n,i){if(e.tag!==5)throw Error(u(476));var l=Mc(e).queue;Dc(e,l,t,K,n===null?Tf:function(){return Oc(e),n(i)})}function Mc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zt,lastRenderedState:K},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Oc(e){var t=Mc(e).next.queue;il(e,t,{},st())}function po(){return Ve(El)}function _c(){return Ne().memoizedState}function wc(){return Ne().memoizedState}function Cf(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=st();e=tn(n);var i=nn(t,e,n);i!==null&&(ut(i,t,n),Ji(i,t,n)),t={cache:jr()},e.payload=t;return}t=t.return}}function Df(e,t,n){var i=st();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},fa(e)?Nc(t,n):(n=xr(e,t,n,i),n!==null&&(ut(n,e,i),kc(n,t,i)))}function Uc(e,t,n){var i=st();il(e,t,n,i)}function il(e,t,n,i){var l={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(fa(e))Nc(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,s=a(r,n);if(l.hasEagerState=!0,l.eagerState=s,it(s,r))return Jl(e,t,l,0),ye===null&&Zl(),!1}catch{}finally{}if(n=xr(e,t,l,i),n!==null)return ut(n,e,i),kc(n,t,i),!0}return!1}function mo(e,t,n,i){if(i={lane:2,revertLane:Xo(),action:i,hasEagerState:!1,eagerState:null,next:null},fa(e)){if(t)throw Error(u(479))}else t=xr(e,n,i,2),t!==null&&ut(t,e,2)}function fa(e){var t=e.alternate;return e===te||t!==null&&t===te}function Nc(e,t){ui=sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kc(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Is(e,n)}}var pa={readContext:Ve,use:ca,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe},xc={readContext:Ve,use:ca,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:vc,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ha(4194308,4,Ec.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ha(4194308,4,e,t)},useInsertionEffect:function(e,t){ha(4,2,e,t)},useMemo:function(e,t){var n=Je();t=t===void 0?null:t;var i=e();if(Pn){Zt(!0);try{e()}finally{Zt(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Je();if(n!==void 0){var l=n(t);if(Pn){Zt(!0);try{n(t)}finally{Zt(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Df.bind(null,te,e),[i.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:function(e){e=uo(e);var t=e.queue,n=Uc.bind(null,te,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:go,useDeferredValue:function(e,t){var n=Je();return ho(n,e,t)},useTransition:function(){var e=uo(!1);return e=Dc.bind(null,te,e.queue,!0,!1),Je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=te,l=Je();if(ue){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),ye===null)throw Error(u(349));(ae&124)!==0||tc(i,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,vc(ic.bind(null,i,a,e),[e]),i.flags|=2048,di(9,ga(),nc.bind(null,i,a,n,t),null),n},useId:function(){var e=Je(),t=ye.identifierPrefix;if(ue){var n=Pt,i=Lt;n=(i&~(1<<32-nt(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=ua++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=bf++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:po,useFormState:gc,useActionState:gc,useOptimistic:function(e){var t=Je();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=mo.bind(null,te,!0,n),n.dispatch=t,[e,t]},useMemoCache:ro,useCacheRefresh:function(){return Je().memoizedState=Cf.bind(null,te)}},Lc={readContext:Ve,use:ca,useCallback:Rc,useContext:Ve,useEffect:yc,useImperativeHandle:Ac,useInsertionEffect:Sc,useLayoutEffect:bc,useMemo:Tc,useReducer:da,useRef:mc,useState:function(){return da(zt)},useDebugValue:go,useDeferredValue:function(e,t){var n=Ne();return Cc(n,ge.memoizedState,e,t)},useTransition:function(){var e=da(zt)[0],t=Ne().memoizedState;return[typeof e=="boolean"?e:tl(e),t]},useSyncExternalStore:ec,useId:_c,useHostTransitionStatus:po,useFormState:hc,useActionState:hc,useOptimistic:function(e,t){var n=Ne();return rc(n,ge,e,t)},useMemoCache:ro,useCacheRefresh:wc},Mf={readContext:Ve,use:ca,useCallback:Rc,useContext:Ve,useEffect:yc,useImperativeHandle:Ac,useInsertionEffect:Sc,useLayoutEffect:bc,useMemo:Tc,useReducer:so,useRef:mc,useState:function(){return so(zt)},useDebugValue:go,useDeferredValue:function(e,t){var n=Ne();return ge===null?ho(n,e,t):Cc(n,ge.memoizedState,e,t)},useTransition:function(){var e=so(zt)[0],t=Ne().memoizedState;return[typeof e=="boolean"?e:tl(e),t]},useSyncExternalStore:ec,useId:_c,useHostTransitionStatus:po,useFormState:pc,useActionState:pc,useOptimistic:function(e,t){var n=Ne();return ge!==null?rc(n,ge,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ro,useCacheRefresh:wc},gi=null,ll=0;function ma(e){var t=ll;return ll+=1,gi===null&&(gi=[]),Qu(gi,e,t)}function al(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function va(e,t){throw t.$$typeof===L?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Pc(e){var t=e._init;return t(e._payload)}function Bc(e){function t(y,m){if(e){var b=y.deletions;b===null?(y.deletions=[m],y.flags|=16):b.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function i(y){for(var m=new Map;y!==null;)y.key!==null?m.set(y.key,y):m.set(y.index,y),y=y.sibling;return m}function l(y,m){return y=xt(y,m),y.index=0,y.sibling=null,y}function a(y,m,b){return y.index=b,e?(b=y.alternate,b!==null?(b=b.index,b<m?(y.flags|=67108866,m):b):(y.flags|=67108866,m)):(y.flags|=1048576,m)}function r(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function s(y,m,b,O){return m===null||m.tag!==6?(m=Pr(b,y.mode,O),m.return=y,m):(m=l(m,b),m.return=y,m)}function g(y,m,b,O){var I=b.type;return I===x?D(y,m,b.props.children,O,b.key):m!==null&&(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Me&&Pc(I)===m.type)?(m=l(m,b.props),al(m,b),m.return=y,m):(m=$l(b.type,b.key,b.props,null,y.mode,O),al(m,b),m.return=y,m)}function E(y,m,b,O){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=Br(b,y.mode,O),m.return=y,m):(m=l(m,b.children||[]),m.return=y,m)}function D(y,m,b,O,I){return m===null||m.tag!==7?(m=On(b,y.mode,O,I),m.return=y,m):(m=l(m,b),m.return=y,m)}function U(y,m,b){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Pr(""+m,y.mode,b),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case N:return b=$l(m.type,m.key,m.props,null,y.mode,b),al(b,m),b.return=y,b;case G:return m=Br(m,y.mode,b),m.return=y,m;case Me:var O=m._init;return m=O(m._payload),U(y,m,b)}if(Ye(m)||Ge(m))return m=On(m,y.mode,b,null),m.return=y,m;if(typeof m.then=="function")return U(y,ma(m),b);if(m.$$typeof===J)return U(y,ia(y,m),b);va(y,m)}return null}function A(y,m,b,O){var I=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return I!==null?null:s(y,m,""+b,O);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case N:return b.key===I?g(y,m,b,O):null;case G:return b.key===I?E(y,m,b,O):null;case Me:return I=b._init,b=I(b._payload),A(y,m,b,O)}if(Ye(b)||Ge(b))return I!==null?null:D(y,m,b,O,null);if(typeof b.then=="function")return A(y,m,ma(b),O);if(b.$$typeof===J)return A(y,m,ia(y,b),O);va(y,b)}return null}function R(y,m,b,O,I){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return y=y.get(b)||null,s(m,y,""+O,I);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case N:return y=y.get(O.key===null?b:O.key)||null,g(m,y,O,I);case G:return y=y.get(O.key===null?b:O.key)||null,E(m,y,O,I);case Me:var ne=O._init;return O=ne(O._payload),R(y,m,b,O,I)}if(Ye(O)||Ge(O))return y=y.get(b)||null,D(m,y,O,I,null);if(typeof O.then=="function")return R(y,m,b,ma(O),I);if(O.$$typeof===J)return R(y,m,b,ia(m,O),I);va(m,O)}return null}function Z(y,m,b,O){for(var I=null,ne=null,V=m,X=m=0,qe=null;V!==null&&X<b.length;X++){V.index>X?(qe=V,V=null):qe=V.sibling;var se=A(y,V,b[X],O);if(se===null){V===null&&(V=qe);break}e&&V&&se.alternate===null&&t(y,V),m=a(se,m,X),ne===null?I=se:ne.sibling=se,ne=se,V=qe}if(X===b.length)return n(y,V),ue&&wn(y,X),I;if(V===null){for(;X<b.length;X++)V=U(y,b[X],O),V!==null&&(m=a(V,m,X),ne===null?I=V:ne.sibling=V,ne=V);return ue&&wn(y,X),I}for(V=i(V);X<b.length;X++)qe=R(V,y,X,b[X],O),qe!==null&&(e&&qe.alternate!==null&&V.delete(qe.key===null?X:qe.key),m=a(qe,m,X),ne===null?I=qe:ne.sibling=qe,ne=qe);return e&&V.forEach(function(bn){return t(y,bn)}),ue&&wn(y,X),I}function F(y,m,b,O){if(b==null)throw Error(u(151));for(var I=null,ne=null,V=m,X=m=0,qe=null,se=b.next();V!==null&&!se.done;X++,se=b.next()){V.index>X?(qe=V,V=null):qe=V.sibling;var bn=A(y,V,se.value,O);if(bn===null){V===null&&(V=qe);break}e&&V&&bn.alternate===null&&t(y,V),m=a(bn,m,X),ne===null?I=bn:ne.sibling=bn,ne=bn,V=qe}if(se.done)return n(y,V),ue&&wn(y,X),I;if(V===null){for(;!se.done;X++,se=b.next())se=U(y,se.value,O),se!==null&&(m=a(se,m,X),ne===null?I=se:ne.sibling=se,ne=se);return ue&&wn(y,X),I}for(V=i(V);!se.done;X++,se=b.next())se=R(V,y,X,se.value,O),se!==null&&(e&&se.alternate!==null&&V.delete(se.key===null?X:se.key),m=a(se,m,X),ne===null?I=se:ne.sibling=se,ne=se);return e&&V.forEach(function(Op){return t(y,Op)}),ue&&wn(y,X),I}function fe(y,m,b,O){if(typeof b=="object"&&b!==null&&b.type===x&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case N:e:{for(var I=b.key;m!==null;){if(m.key===I){if(I=b.type,I===x){if(m.tag===7){n(y,m.sibling),O=l(m,b.props.children),O.return=y,y=O;break e}}else if(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Me&&Pc(I)===m.type){n(y,m.sibling),O=l(m,b.props),al(O,b),O.return=y,y=O;break e}n(y,m);break}else t(y,m);m=m.sibling}b.type===x?(O=On(b.props.children,y.mode,O,b.key),O.return=y,y=O):(O=$l(b.type,b.key,b.props,null,y.mode,O),al(O,b),O.return=y,y=O)}return r(y);case G:e:{for(I=b.key;m!==null;){if(m.key===I)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){n(y,m.sibling),O=l(m,b.children||[]),O.return=y,y=O;break e}else{n(y,m);break}else t(y,m);m=m.sibling}O=Br(b,y.mode,O),O.return=y,y=O}return r(y);case Me:return I=b._init,b=I(b._payload),fe(y,m,b,O)}if(Ye(b))return Z(y,m,b,O);if(Ge(b)){if(I=Ge(b),typeof I!="function")throw Error(u(150));return b=I.call(b),F(y,m,b,O)}if(typeof b.then=="function")return fe(y,m,ma(b),O);if(b.$$typeof===J)return fe(y,m,ia(y,b),O);va(y,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,m!==null&&m.tag===6?(n(y,m.sibling),O=l(m,b),O.return=y,y=O):(n(y,m),O=Pr(b,y.mode,O),O.return=y,y=O),r(y)):n(y,m)}return function(y,m,b,O){try{ll=0;var I=fe(y,m,b,O);return gi=null,I}catch(V){if(V===Ki||V===aa)throw V;var ne=lt(29,V,null,y.mode);return ne.lanes=O,ne.return=y,ne}finally{}}}var hi=Bc(!0),qc=Bc(!1),vt=k(null),Ct=null;function an(e){var t=e.alternate;B(xe,xe.current&1),B(vt,e),Ct===null&&(t===null||si.current!==null||t.memoizedState!==null)&&(Ct=e)}function zc(e){if(e.tag===22){if(B(xe,xe.current),B(vt,e),Ct===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ct=e)}}else rn()}function rn(){B(xe,xe.current),B(vt,vt.current)}function Ht(e){z(vt),Ct===e&&(Ct=null),z(xe)}var xe=k(0);function ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||rs(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function vo(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yo={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=st(),l=tn(i);l.payload=t,n!=null&&(l.callback=n),t=nn(e,l,i),t!==null&&(ut(t,e,i),Ji(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=st(),l=tn(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=nn(e,l,i),t!==null&&(ut(t,e,i),Ji(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=st(),i=tn(n);i.tag=2,t!=null&&(i.callback=t),t=nn(e,i,n),t!==null&&(ut(t,e,n),Ji(t,e,n))}};function Hc(e,t,n,i,l,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Ii(n,i)||!Ii(l,a):!0}function Ic(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&yo.enqueueReplaceState(t,t.state,null)}function Bn(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=C({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var Sa=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Gc(e){Sa(e)}function Yc(e){console.error(e)}function jc(e){Sa(e)}function ba(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Vc(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function So(e,t,n){return n=tn(n),n.tag=3,n.payload={element:null},n.callback=function(){ba(e,t)},n}function Qc(e){return e=tn(e),e.tag=3,e}function Fc(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var a=i.value;e.payload=function(){return l(a)},e.callback=function(){Vc(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Vc(t,n,i),typeof l!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var s=i.stack;this.componentDidCatch(i.value,{componentStack:s!==null?s:""})})}function Of(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Qi(t,n,l,!0),n=vt.current,n!==null){switch(n.tag){case 13:return Ct===null?Yo():n.alternate===null&&De===0&&(De=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===Fr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Vo(e,i,l)),!1;case 22:return n.flags|=65536,i===Fr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Vo(e,i,l)),!1}throw Error(u(435,n.tag))}return Vo(e,i,l),Yo(),!1}if(ue)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==Hr&&(e=Error(u(422),{cause:i}),Vi(ht(e,n)))):(i!==Hr&&(t=Error(u(423),{cause:i}),Vi(ht(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=ht(i,n),l=So(e.stateNode,i,l),Zr(e,l),De!==4&&(De=2)),!1;var a=Error(u(520),{cause:i});if(a=ht(a,n),gl===null?gl=[a]:gl.push(a),De!==4&&(De=2),t===null)return!0;i=ht(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=So(n.stateNode,i,e),Zr(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(gn===null||!gn.has(a))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Qc(l),Fc(l,e,n,i),Zr(n,l),!1}n=n.return}while(n!==null);return!1}var Xc=Error(u(461)),Pe=!1;function ze(e,t,n,i){t.child=e===null?qc(t,null,n,i):hi(t,e.child,n,i)}function Kc(e,t,n,i,l){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var s in i)s!=="ref"&&(r[s]=i[s])}else r=i;return xn(t),i=to(e,t,n,r,a,l),s=no(),e!==null&&!Pe?(io(e,t,l),It(e,t,l)):(ue&&s&&qr(t),t.flags|=1,ze(e,t,i,l),t.child)}function Zc(e,t,n,i,l){if(e===null){var a=n.type;return typeof a=="function"&&!Lr(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Jc(e,t,a,i,l)):(e=$l(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mo(e,l)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(r,i)&&e.ref===t.ref)return It(e,t,l)}return t.flags|=1,e=xt(a,i),e.ref=t.ref,e.return=t,t.child=e}function Jc(e,t,n,i,l){if(e!==null){var a=e.memoizedProps;if(Ii(a,i)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=i=a,Mo(e,l))(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,It(e,t,l)}return bo(e,t,n,i,l)}function Wc(e,t,n){var i=t.pendingProps,l=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=a!==null?a.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;t.childLanes=a&~i}else t.childLanes=0,t.child=null;return $c(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&la(t,a!==null?a.cachePool:null),a!==null?Ju(t,a):Wr(),zc(t);else return t.lanes=t.childLanes=536870912,$c(e,t,a!==null?a.baseLanes|n:n,n)}else a!==null?(la(t,a.cachePool),Ju(t,a),rn(),t.memoizedState=null):(e!==null&&la(t,null),Wr(),rn());return ze(e,t,l,n),t.child}function $c(e,t,n,i){var l=Qr();return l=l===null?null:{parent:ke._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&la(t,null),Wr(),zc(t),e!==null&&Qi(e,t,i,!0),null}function Ea(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function bo(e,t,n,i,l){return xn(t),n=to(e,t,n,i,void 0,l),i=no(),e!==null&&!Pe?(io(e,t,l),It(e,t,l)):(ue&&i&&qr(t),t.flags|=1,ze(e,t,n,l),t.child)}function ed(e,t,n,i,l,a){return xn(t),t.updateQueue=null,n=$u(t,i,n,l),Wu(e),i=no(),e!==null&&!Pe?(io(e,t,a),It(e,t,a)):(ue&&i&&qr(t),t.flags|=1,ze(e,t,n,a),t.child)}function td(e,t,n,i,l){if(xn(t),t.stateNode===null){var a=ii,r=n.contextType;typeof r=="object"&&r!==null&&(a=Ve(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=yo,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Xr(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?Ve(r):ii,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(vo(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&yo.enqueueReplaceState(a,a.state,null),$i(t,i,a,l),Wi(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,g=Bn(n,s);a.props=g;var E=a.context,D=n.contextType;r=ii,typeof D=="object"&&D!==null&&(r=Ve(D));var U=n.getDerivedStateFromProps;D=typeof U=="function"||typeof a.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,D||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s||E!==r)&&Ic(t,a,i,r),en=!1;var A=t.memoizedState;a.state=A,$i(t,i,a,l),Wi(),E=t.memoizedState,s||A!==E||en?(typeof U=="function"&&(vo(t,n,U,i),E=t.memoizedState),(g=en||Hc(t,n,g,i,A,E,r))?(D||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=E),a.props=i,a.state=E,a.context=r,i=g):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Kr(e,t),r=t.memoizedProps,D=Bn(n,r),a.props=D,U=t.pendingProps,A=a.context,E=n.contextType,g=ii,typeof E=="object"&&E!==null&&(g=Ve(E)),s=n.getDerivedStateFromProps,(E=typeof s=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==U||A!==g)&&Ic(t,a,i,g),en=!1,A=t.memoizedState,a.state=A,$i(t,i,a,l),Wi();var R=t.memoizedState;r!==U||A!==R||en||e!==null&&e.dependencies!==null&&na(e.dependencies)?(typeof s=="function"&&(vo(t,n,s,i),R=t.memoizedState),(D=en||Hc(t,n,D,i,A,R,g)||e!==null&&e.dependencies!==null&&na(e.dependencies))?(E||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,R,g),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,R,g)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=R),a.props=i,a.state=R,a.context=g,i=D):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Ea(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=hi(t,e.child,null,l),t.child=hi(t,null,n,l)):ze(e,t,n,l),t.memoizedState=a.state,e=t.child):e=It(e,t,l),e}function nd(e,t,n,i){return ji(),t.flags|=256,ze(e,t,n,i),t.child}var Eo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ao(e){return{baseLanes:e,cachePool:Yu()}}function Ro(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=yt),e}function id(e,t,n){var i=t.pendingProps,l=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(xe.current&2)!==0),r&&(l=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(l?an(t):rn(),ue){var s=Ce,g;if(g=s){e:{for(g=s,s=Tt;g.nodeType!==8;){if(!s){s=null;break e}if(g=At(g.nextSibling),g===null){s=null;break e}}s=g}s!==null?(t.memoizedState={dehydrated:s,treeContext:_n!==null?{id:Lt,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},g=lt(18,null,null,0),g.stateNode=s,g.return=t,t.child=g,Xe=t,Ce=null,g=!0):g=!1}g||Nn(t)}if(s=t.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return rs(s)?t.lanes=32:t.lanes=536870912,null;Ht(t)}return s=i.children,i=i.fallback,l?(rn(),l=t.mode,s=Aa({mode:"hidden",children:s},l),i=On(i,l,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,l=t.child,l.memoizedState=Ao(n),l.childLanes=Ro(e,r,n),t.memoizedState=Eo,i):(an(t),To(t,s))}if(g=e.memoizedState,g!==null&&(s=g.dehydrated,s!==null)){if(a)t.flags&256?(an(t),t.flags&=-257,t=Co(e,t,n)):t.memoizedState!==null?(rn(),t.child=e.child,t.flags|=128,t=null):(rn(),l=i.fallback,s=t.mode,i=Aa({mode:"visible",children:i.children},s),l=On(l,s,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,hi(t,e.child,null,n),i=t.child,i.memoizedState=Ao(n),i.childLanes=Ro(e,r,n),t.memoizedState=Eo,t=l);else if(an(t),rs(s)){if(r=s.nextSibling&&s.nextSibling.dataset,r)var E=r.dgst;r=E,i=Error(u(419)),i.stack="",i.digest=r,Vi({value:i,source:null,stack:null}),t=Co(e,t,n)}else if(Pe||Qi(e,t,n,!1),r=(n&e.childLanes)!==0,Pe||r){if(r=ye,r!==null&&(i=n&-n,i=(i&42)!==0?1:rr(i),i=(i&(r.suspendedLanes|n))!==0?0:i,i!==0&&i!==g.retryLane))throw g.retryLane=i,ni(e,i),ut(r,e,i),Xc;s.data==="$?"||Yo(),t=Co(e,t,n)}else s.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Ce=At(s.nextSibling),Xe=t,ue=!0,Un=null,Tt=!1,e!==null&&(pt[mt++]=Lt,pt[mt++]=Pt,pt[mt++]=_n,Lt=e.id,Pt=e.overflow,_n=t),t=To(t,i.children),t.flags|=4096);return t}return l?(rn(),l=i.fallback,s=t.mode,g=e.child,E=g.sibling,i=xt(g,{mode:"hidden",children:i.children}),i.subtreeFlags=g.subtreeFlags&65011712,E!==null?l=xt(E,l):(l=On(l,s,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,s=e.child.memoizedState,s===null?s=Ao(n):(g=s.cachePool,g!==null?(E=ke._currentValue,g=g.parent!==E?{parent:E,pool:E}:g):g=Yu(),s={baseLanes:s.baseLanes|n,cachePool:g}),l.memoizedState=s,l.childLanes=Ro(e,r,n),t.memoizedState=Eo,i):(an(t),n=e.child,e=n.sibling,n=xt(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function To(e,t){return t=Aa({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Aa(e,t){return e=lt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Co(e,t,n){return hi(t,e.child,null,n),e=To(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ld(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Gr(e.return,t,n)}function Do(e,t,n,i,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=l)}function ad(e,t,n){var i=t.pendingProps,l=i.revealOrder,a=i.tail;if(ze(e,t,i.children,n),i=xe.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ld(e,n,t);else if(e.tag===19)ld(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(B(xe,i),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ya(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Do(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ya(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Do(t,!0,n,null,a);break;case"together":Do(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Qi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&na(e)))}function _f(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),$t(t,ke,e.memoizedState.cache),ji();break;case 27:case 5:tr(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:$t(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(an(t),t.flags|=128,null):(n&t.child.childLanes)!==0?id(e,t,n):(an(t),e=It(e,t,n),e!==null?e.sibling:null);an(t);break;case 19:var l=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Qi(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return ad(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(xe,xe.current),i)break;return null;case 22:case 23:return t.lanes=0,Wc(e,t,n);case 24:$t(t,ke,e.memoizedState.cache)}return It(e,t,n)}function rd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Pe=!0;else{if(!Mo(e,n)&&(t.flags&128)===0)return Pe=!1,_f(e,t,n);Pe=(e.flags&131072)!==0}else Pe=!1,ue&&(t.flags&1048576)!==0&&Pu(t,ta,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,l=i._init;if(i=l(i._payload),t.type=i,typeof i=="function")Lr(i)?(e=Bn(i,e),t.tag=1,t=td(null,t,i,e,n)):(t.tag=0,t=bo(null,t,i,e,n));else{if(i!=null){if(l=i.$$typeof,l===re){t.tag=11,t=Kc(null,t,i,e,n);break e}else if(l===Te){t.tag=14,t=Zc(null,t,i,e,n);break e}}throw t=An(i)||i,Error(u(306,t,""))}}return t;case 0:return bo(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=Bn(i,t.pendingProps),td(e,t,i,l,n);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(u(387));i=t.pendingProps;var a=t.memoizedState;l=a.element,Kr(e,t),$i(t,i,null,n);var r=t.memoizedState;if(i=r.cache,$t(t,ke,i),i!==a.cache&&Yr(t,[ke],n,!0),Wi(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=nd(e,t,i,n);break e}else if(i!==l){l=ht(Error(u(424)),t),Vi(l),t=nd(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=At(e.firstChild),Xe=t,ue=!0,Un=null,Tt=!0,n=qc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ji(),i===l){t=It(e,t,n);break e}ze(e,t,i,n)}t=t.child}return t;case 26:return Ea(e,t),e===null?(n=cg(t.type,null,t.pendingProps,null))?t.memoizedState=n:ue||(n=t.type,e=t.pendingProps,i=Pa($.current).createElement(n),i[je]=t,i[Ke]=e,Ie(i,n,e),Le(i),t.stateNode=i):t.memoizedState=cg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return tr(t),e===null&&ue&&(i=t.stateNode=og(t.type,t.pendingProps,$.current),Xe=t,Tt=!0,l=Ce,pn(t.type)?(os=l,Ce=At(i.firstChild)):Ce=l),ze(e,t,t.pendingProps.children,n),Ea(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((l=i=Ce)&&(i=ip(i,t.type,t.pendingProps,Tt),i!==null?(t.stateNode=i,Xe=t,Ce=At(i.firstChild),Tt=!1,l=!0):l=!1),l||Nn(t)),tr(t),l=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,is(l,a)?i=null:r!==null&&is(l,r)&&(t.flags|=32),t.memoizedState!==null&&(l=to(e,t,Ef,null,null,n),El._currentValue=l),Ea(e,t),ze(e,t,i,n),t.child;case 6:return e===null&&ue&&((e=n=Ce)&&(n=lp(n,t.pendingProps,Tt),n!==null?(t.stateNode=n,Xe=t,Ce=null,e=!0):e=!1),e||Nn(t)),null;case 13:return id(e,t,n);case 4:return be(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=hi(t,null,i,n):ze(e,t,i,n),t.child;case 11:return Kc(e,t,t.type,t.pendingProps,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,$t(t,t.type,i.value),ze(e,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,xn(t),l=Ve(l),i=i(l),t.flags|=1,ze(e,t,i,n),t.child;case 14:return Zc(e,t,t.type,t.pendingProps,n);case 15:return Jc(e,t,t.type,t.pendingProps,n);case 19:return ad(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=Aa(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=xt(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Wc(e,t,n);case 24:return xn(t),i=Ve(ke),e===null?(l=Qr(),l===null&&(l=ye,a=jr(),l.pooledCache=a,a.refCount++,a!==null&&(l.pooledCacheLanes|=n),l=a),t.memoizedState={parent:i,cache:l},Xr(t),$t(t,ke,l)):((e.lanes&n)!==0&&(Kr(e,t),$i(t,null,null,n),Wi()),l=e.memoizedState,a=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),$t(t,ke,i)):(i=a.cache,$t(t,ke,i),i!==l.cache&&Yr(t,[ke],n,!0))),ze(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Gt(e){e.flags|=4}function od(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pg(t)){if(t=vt.current,t!==null&&((ae&4194048)===ae?Ct!==null:(ae&62914560)!==ae&&(ae&536870912)===0||t!==Ct))throw Zi=Fr,ju;e.flags|=8192}}function Ra(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zs():536870912,e.lanes|=t,vi|=t)}function rl(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function wf(e,t,n){var i=t.pendingProps;switch(zr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),qt(ke),Kt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zu())),Ae(t),null;case 26:return n=t.memoizedState,e===null?(Gt(t),n!==null?(Ae(t),od(t,n)):(Ae(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Gt(t),Ae(t),od(t,n)):(Ae(t),t.flags&=-16777217):(e.memoizedProps!==i&&Gt(t),Ae(t),t.flags&=-16777217),null;case 27:xl(t),n=$.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Gt(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Ae(t),null}e=Q.current,Yi(t)?Bu(t):(e=og(l,i,n),t.stateNode=e,Gt(t))}return Ae(t),null;case 5:if(xl(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Gt(t);else{if(!i){if(t.stateNode===null)throw Error(u(166));return Ae(t),null}if(e=Q.current,Yi(t))Bu(t);else{switch(l=Pa($.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?l.createElement(n,{is:i.is}):l.createElement(n)}}e[je]=t,e[Ke]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Ie(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Gt(t)}}return Ae(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Gt(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(u(166));if(e=$.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=Xe,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[je]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||eg(e.nodeValue,n)),e||Nn(t)}else e=Pa(e).createTextNode(i),e[je]=t,t.stateNode=e}return Ae(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Yi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[je]=t}else ji(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),l=!1}else l=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Ht(t),t):(Ht(t),null)}if(Ht(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var a=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==l&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Ra(t,t.updateQueue),Ae(t),null;case 4:return Kt(),e===null&&Wo(t.stateNode.containerInfo),Ae(t),null;case 10:return qt(t.type),Ae(t),null;case 19:if(z(xe),l=t.memoizedState,l===null)return Ae(t),null;if(i=(t.flags&128)!==0,a=l.rendering,a===null)if(i)rl(l,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=ya(e),a!==null){for(t.flags|=128,rl(l,!1),e=a.updateQueue,t.updateQueue=e,Ra(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Lu(n,e),n=n.sibling;return B(xe,xe.current&1|2),t.child}e=e.sibling}l.tail!==null&&Rt()>Da&&(t.flags|=128,i=!0,rl(l,!1),t.lanes=4194304)}else{if(!i)if(e=ya(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ra(t,e),rl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!ue)return Ae(t),null}else 2*Rt()-l.renderingStartTime>Da&&n!==536870912&&(t.flags|=128,i=!0,rl(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(e=l.last,e!==null?e.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Rt(),t.sibling=null,e=xe.current,B(xe,i?e&1|2:e&1),t):(Ae(t),null);case 22:case 23:return Ht(t),$r(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),n=t.updateQueue,n!==null&&Ra(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&z(Ln),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qt(ke),Ae(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Uf(e,t){switch(zr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(ke),Kt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xl(t),null;case 13:if(Ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(xe),null;case 4:return Kt(),null;case 10:return qt(t.type),null;case 22:case 23:return Ht(t),$r(),e!==null&&z(Ln),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(ke),null;case 25:return null;default:return null}}function sd(e,t){switch(zr(t),t.tag){case 3:qt(ke),Kt();break;case 26:case 27:case 5:xl(t);break;case 4:Kt();break;case 13:Ht(t);break;case 19:z(xe);break;case 10:qt(t.type);break;case 22:case 23:Ht(t),$r(),e!==null&&z(Ln);break;case 24:qt(ke)}}function ol(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==l)}}catch(s){ve(t,t.return,s)}}function on(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var a=l.next;i=a;do{if((i.tag&e)===e){var r=i.inst,s=r.destroy;if(s!==void 0){r.destroy=void 0,l=t;var g=n,E=s;try{E()}catch(D){ve(l,g,D)}}}i=i.next}while(i!==a)}}catch(D){ve(t,t.return,D)}}function ud(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Zu(t,n)}catch(i){ve(e,e.return,i)}}}function cd(e,t,n){n.props=Bn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ve(e,t,i)}}function sl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(l){ve(e,t,l)}}function Dt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){ve(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){ve(e,t,l)}else n.current=null}function dd(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){ve(e,e.return,l)}}function Oo(e,t,n){try{var i=e.stateNode;Wf(i,e.type,n,t),i[Ke]=t}catch(l){ve(e,e.return,l)}}function gd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pn(e.type)||e.tag===4}function _o(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=La));else if(i!==4&&(i===27&&pn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(wo(e,t,n),e=e.sibling;e!==null;)wo(e,t,n),e=e.sibling}function Ta(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&pn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}function hd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ie(t,i,n),t[je]=e,t[Ke]=n}catch(a){ve(e,e.return,a)}}var Yt=!1,_e=!1,Uo=!1,fd=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Nf(e,t){if(e=e.containerInfo,ts=Ga,e=Cu(e),Or(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var r=0,s=-1,g=-1,E=0,D=0,U=e,A=null;t:for(;;){for(var R;U!==n||l!==0&&U.nodeType!==3||(s=r+l),U!==a||i!==0&&U.nodeType!==3||(g=r+i),U.nodeType===3&&(r+=U.nodeValue.length),(R=U.firstChild)!==null;)A=U,U=R;for(;;){if(U===e)break t;if(A===n&&++E===l&&(s=r),A===a&&++D===i&&(g=r),(R=U.nextSibling)!==null)break;U=A,A=U.parentNode}U=R}n=s===-1||g===-1?null:{start:s,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(ns={focusedElem:e,selectionRange:n},Ga=!1,Be=t;Be!==null;)if(t=Be,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Be=e;else for(;Be!==null;){switch(t=Be,a=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,l=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var Z=Bn(n.type,l,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(Z,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(F){ve(n,n.return,F)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)as(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":as(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Be=e;break}Be=t.return}}function pd(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:sn(e,n),i&4&&ol(5,n);break;case 1:if(sn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ve(n,n.return,r)}else{var l=Bn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ve(n,n.return,r)}}i&64&&ud(n),i&512&&sl(n,n.return);break;case 3:if(sn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Zu(e,t)}catch(r){ve(n,n.return,r)}}break;case 27:t===null&&i&4&&hd(n);case 26:case 5:sn(e,n),t===null&&i&4&&dd(n),i&512&&sl(n,n.return);break;case 12:sn(e,n);break;case 13:sn(e,n),i&4&&yd(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=If.bind(null,n),ap(e,n))));break;case 22:if(i=n.memoizedState!==null||Yt,!i){t=t!==null&&t.memoizedState!==null||_e,l=Yt;var a=_e;Yt=i,(_e=t)&&!a?un(e,n,(n.subtreeFlags&8772)!==0):sn(e,n),Yt=l,_e=a}break;case 30:break;default:sn(e,n)}}function md(e){var t=e.alternate;t!==null&&(e.alternate=null,md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ur(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,We=!1;function jt(e,t,n){for(n=n.child;n!==null;)vd(e,t,n),n=n.sibling}function vd(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(_i,n)}catch{}switch(n.tag){case 26:_e||Dt(n,t),jt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:_e||Dt(n,t);var i=Ee,l=We;pn(n.type)&&(Ee=n.stateNode,We=!1),jt(e,t,n),vl(n.stateNode),Ee=i,We=l;break;case 5:_e||Dt(n,t);case 6:if(i=Ee,l=We,Ee=null,jt(e,t,n),Ee=i,We=l,Ee!==null)if(We)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(n.stateNode)}catch(a){ve(n,t,a)}else try{Ee.removeChild(n.stateNode)}catch(a){ve(n,t,a)}break;case 18:Ee!==null&&(We?(e=Ee,ag(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Cl(e)):ag(Ee,n.stateNode));break;case 4:i=Ee,l=We,Ee=n.stateNode.containerInfo,We=!0,jt(e,t,n),Ee=i,We=l;break;case 0:case 11:case 14:case 15:_e||on(2,n,t),_e||on(4,n,t),jt(e,t,n);break;case 1:_e||(Dt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&cd(n,t,i)),jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:_e=(i=_e)||n.memoizedState!==null,jt(e,t,n),_e=i;break;default:jt(e,t,n)}}function yd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(n){ve(t,t.return,n)}}function kf(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new fd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new fd),t;default:throw Error(u(435,e.tag))}}function No(e,t){var n=kf(e);t.forEach(function(i){var l=Gf.bind(null,e,i);n.has(i)||(n.add(i),i.then(l,l))})}function at(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],a=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 27:if(pn(s.type)){Ee=s.stateNode,We=!1;break e}break;case 5:Ee=s.stateNode,We=!1;break e;case 3:case 4:Ee=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(Ee===null)throw Error(u(160));vd(a,r,l),Ee=null,We=!1,a=l.alternate,a!==null&&(a.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Sd(t,e),t=t.sibling}var Et=null;function Sd(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:at(t,e),rt(e),i&4&&(on(3,e,e.return),ol(3,e),on(5,e,e.return));break;case 1:at(t,e),rt(e),i&512&&(_e||n===null||Dt(n,n.return)),i&64&&Yt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=Et;if(at(t,e),rt(e),i&512&&(_e||n===null||Dt(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":a=l.getElementsByTagName("title")[0],(!a||a[Ni]||a[je]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=l.createElement(i),l.head.insertBefore(a,l.querySelector("head > title"))),Ie(a,i,n),a[je]=e,Le(a),i=a;break e;case"link":var r=hg("link","href",l).get(i+(n.href||""));if(r){for(var s=0;s<r.length;s++)if(a=r[s],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(s,1);break t}}a=l.createElement(i),Ie(a,i,n),l.head.appendChild(a);break;case"meta":if(r=hg("meta","content",l).get(i+(n.content||""))){for(s=0;s<r.length;s++)if(a=r[s],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(s,1);break t}}a=l.createElement(i),Ie(a,i,n),l.head.appendChild(a);break;default:throw Error(u(468,i))}a[je]=e,Le(a),i=a}e.stateNode=i}else fg(l,e.type,e.stateNode);else e.stateNode=gg(l,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?fg(l,e.type,e.stateNode):gg(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Oo(e,e.memoizedProps,n.memoizedProps)}break;case 27:at(t,e),rt(e),i&512&&(_e||n===null||Dt(n,n.return)),n!==null&&i&4&&Oo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(at(t,e),rt(e),i&512&&(_e||n===null||Dt(n,n.return)),e.flags&32){l=e.stateNode;try{Kn(l,"")}catch(R){ve(e,e.return,R)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Oo(e,l,n!==null?n.memoizedProps:l)),i&1024&&(Uo=!0);break;case 6:if(at(t,e),rt(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(R){ve(e,e.return,R)}}break;case 3:if(za=null,l=Et,Et=Ba(t.containerInfo),at(t,e),Et=l,rt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(R){ve(e,e.return,R)}Uo&&(Uo=!1,bd(e));break;case 4:i=Et,Et=Ba(e.stateNode.containerInfo),at(t,e),rt(e),Et=i;break;case 12:at(t,e),rt(e);break;case 13:at(t,e),rt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qo=Rt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,No(e,i)));break;case 22:l=e.memoizedState!==null;var g=n!==null&&n.memoizedState!==null,E=Yt,D=_e;if(Yt=E||l,_e=D||g,at(t,e),_e=D,Yt=E,rt(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||g||Yt||_e||qn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){g=n=t;try{if(a=g.stateNode,l)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=g.stateNode;var U=g.memoizedProps.style,A=U!=null&&U.hasOwnProperty("display")?U.display:null;s.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(R){ve(g,g.return,R)}}}else if(t.tag===6){if(n===null){g=t;try{g.stateNode.nodeValue=l?"":g.memoizedProps}catch(R){ve(g,g.return,R)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,No(e,n))));break;case 19:at(t,e),rt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,No(e,i)));break;case 30:break;case 21:break;default:at(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(gd(i)){n=i;break}i=i.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,a=_o(e);Ta(e,a,l);break;case 5:var r=n.stateNode;n.flags&32&&(Kn(r,""),n.flags&=-33);var s=_o(e);Ta(e,s,r);break;case 3:case 4:var g=n.stateNode.containerInfo,E=_o(e);wo(e,E,g);break;default:throw Error(u(161))}}catch(D){ve(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pd(e,t.alternate,t),t=t.sibling}function qn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:on(4,t,t.return),qn(t);break;case 1:Dt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&cd(t,t.return,n),qn(t);break;case 27:vl(t.stateNode);case 26:case 5:Dt(t,t.return),qn(t);break;case 22:t.memoizedState===null&&qn(t);break;case 30:qn(t);break;default:qn(t)}e=e.sibling}}function un(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:un(l,a,n),ol(4,a);break;case 1:if(un(l,a,n),i=a,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(E){ve(i,i.return,E)}if(i=a,l=i.updateQueue,l!==null){var s=i.stateNode;try{var g=l.shared.hiddenCallbacks;if(g!==null)for(l.shared.hiddenCallbacks=null,l=0;l<g.length;l++)Ku(g[l],s)}catch(E){ve(i,i.return,E)}}n&&r&64&&ud(a),sl(a,a.return);break;case 27:hd(a);case 26:case 5:un(l,a,n),n&&i===null&&r&4&&dd(a),sl(a,a.return);break;case 12:un(l,a,n);break;case 13:un(l,a,n),n&&r&4&&yd(l,a);break;case 22:a.memoizedState===null&&un(l,a,n),sl(a,a.return);break;case 30:break;default:un(l,a,n)}t=t.sibling}}function ko(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fi(n))}function xo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fi(e))}function Mt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ed(e,t,n,i),t=t.sibling}function Ed(e,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,n,i),l&2048&&ol(9,t);break;case 1:Mt(e,t,n,i);break;case 3:Mt(e,t,n,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fi(e)));break;case 12:if(l&2048){Mt(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,s=a.onPostCommit;typeof s=="function"&&s(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){ve(t,t.return,g)}}else Mt(e,t,n,i);break;case 13:Mt(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?Mt(e,t,n,i):ul(e,t):a._visibility&2?Mt(e,t,n,i):(a._visibility|=2,fi(e,t,n,i,(t.subtreeFlags&10256)!==0)),l&2048&&ko(r,t);break;case 24:Mt(e,t,n,i),l&2048&&xo(t.alternate,t);break;default:Mt(e,t,n,i)}}function fi(e,t,n,i,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var a=e,r=t,s=n,g=i,E=r.flags;switch(r.tag){case 0:case 11:case 15:fi(a,r,s,g,l),ol(8,r);break;case 23:break;case 22:var D=r.stateNode;r.memoizedState!==null?D._visibility&2?fi(a,r,s,g,l):ul(a,r):(D._visibility|=2,fi(a,r,s,g,l)),l&&E&2048&&ko(r.alternate,r);break;case 24:fi(a,r,s,g,l),l&&E&2048&&xo(r.alternate,r);break;default:fi(a,r,s,g,l)}t=t.sibling}}function ul(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:ul(n,i),l&2048&&ko(i.alternate,i);break;case 24:ul(n,i),l&2048&&xo(i.alternate,i);break;default:ul(n,i)}t=t.sibling}}var cl=8192;function pi(e){if(e.subtreeFlags&cl)for(e=e.child;e!==null;)Ad(e),e=e.sibling}function Ad(e){switch(e.tag){case 26:pi(e),e.flags&cl&&e.memoizedState!==null&&yp(Et,e.memoizedState,e.memoizedProps);break;case 5:pi(e);break;case 3:case 4:var t=Et;Et=Ba(e.stateNode.containerInfo),pi(e),Et=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=cl,cl=16777216,pi(e),cl=t):pi(e));break;default:pi(e)}}function Rd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Be=i,Cd(i,e)}Rd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Td(e),e=e.sibling}function Td(e){switch(e.tag){case 0:case 11:case 15:dl(e),e.flags&2048&&on(9,e,e.return);break;case 3:dl(e);break;case 12:dl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ca(e)):dl(e);break;default:dl(e)}}function Ca(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Be=i,Cd(i,e)}Rd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:on(8,t,t.return),Ca(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ca(t));break;default:Ca(t)}e=e.sibling}}function Cd(e,t){for(;Be!==null;){var n=Be;switch(n.tag){case 0:case 11:case 15:on(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Fi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Be=i;else e:for(n=e;Be!==null;){i=Be;var l=i.sibling,a=i.return;if(md(i),i===n){Be=null;break e}if(l!==null){l.return=a,Be=l;break e}Be=a}}}var xf={getCacheForType:function(e){var t=Ve(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Lf=typeof WeakMap=="function"?WeakMap:Map,ce=0,ye=null,ie=null,ae=0,de=0,ot=null,cn=!1,mi=!1,Lo=!1,Vt=0,De=0,dn=0,zn=0,Po=0,yt=0,vi=0,gl=null,$e=null,Bo=!1,qo=0,Da=1/0,Ma=null,gn=null,He=0,hn=null,yi=null,Si=0,zo=0,Ho=null,Dd=null,hl=0,Io=null;function st(){if((ce&2)!==0&&ae!==0)return ae&-ae;if(M.T!==null){var e=ri;return e!==0?e:Xo()}return Gs()}function Md(){yt===0&&(yt=(ae&536870912)===0||ue?qs():536870912);var e=vt.current;return e!==null&&(e.flags|=32),yt}function ut(e,t,n){(e===ye&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(bi(e,0),fn(e,ae,yt,!1)),Ui(e,n),((ce&2)===0||e!==ye)&&(e===ye&&((ce&2)===0&&(zn|=n),De===4&&fn(e,ae,yt,!1)),Ot(e))}function Od(e,t,n){if((ce&6)!==0)throw Error(u(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||wi(e,t),l=i?qf(e,t):jo(e,t,!0),a=i;do{if(l===0){mi&&!i&&fn(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!Pf(n)){l=jo(e,t,!1),a=!1;continue}if(l===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var s=e;l=gl;var g=s.current.memoizedState.isDehydrated;if(g&&(bi(s,r).flags|=256),r=jo(s,r,!1),r!==2){if(Lo&&!g){s.errorRecoveryDisabledLanes|=a,zn|=a,l=4;break e}a=$e,$e=l,a!==null&&($e===null?$e=a:$e.push.apply($e,a))}l=r}if(a=!1,l!==2)continue}}if(l===1){bi(e,0),fn(e,t,0,!0);break}e:{switch(i=e,a=l,a){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:fn(i,t,yt,!cn);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=qo+300-Rt(),10<l)){if(fn(i,t,yt,!cn),ql(i,0,!0)!==0)break e;i.timeoutHandle=ig(_d.bind(null,i,n,$e,Ma,Bo,t,yt,zn,vi,cn,a,2,-0,0),l);break e}_d(i,n,$e,Ma,Bo,t,yt,zn,vi,cn,a,0,-0,0)}}break}while(!0);Ot(e)}function _d(e,t,n,i,l,a,r,s,g,E,D,U,A,R){if(e.timeoutHandle=-1,U=t.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(bl={stylesheets:null,count:0,unsuspend:vp},Ad(t),U=Sp(),U!==null)){e.cancelPendingCommit=U(Pd.bind(null,e,t,a,n,i,l,r,s,g,D,1,A,R)),fn(e,a,r,!E);return}Pd(e,t,a,n,i,l,r,s,g)}function Pf(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],a=l.getSnapshot;l=l.value;try{if(!it(a(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t,n,i){t&=~Po,t&=~zn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var a=31-nt(l),r=1<<a;i[a]=-1,l&=~r}n!==0&&Hs(e,n,t)}function Oa(){return(ce&6)===0?(fl(0),!1):!0}function Go(){if(ie!==null){if(de===0)var e=ie.return;else e=ie,Bt=kn=null,lo(e),gi=null,ll=0,e=ie;for(;e!==null;)sd(e.alternate,e),e=e.return;ie=null}}function bi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ep(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Go(),ye=e,ie=n=xt(e.current,null),ae=t,de=0,ot=null,cn=!1,mi=wi(e,t),Lo=!1,vi=yt=Po=zn=dn=De=0,$e=gl=null,Bo=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-nt(i),a=1<<l;t|=e[l],i&=~a}return Vt=t,Zl(),n}function wd(e,t){te=null,M.H=pa,t===Ki||t===aa?(t=Fu(),de=3):t===ju?(t=Fu(),de=4):de=t===Xc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,ie===null&&(De=1,ba(e,ht(t,e.current)))}function Ud(){var e=M.H;return M.H=pa,e===null?pa:e}function Nd(){var e=M.A;return M.A=xf,e}function Yo(){De=4,cn||(ae&4194048)!==ae&&vt.current!==null||(mi=!0),(dn&134217727)===0&&(zn&134217727)===0||ye===null||fn(ye,ae,yt,!1)}function jo(e,t,n){var i=ce;ce|=2;var l=Ud(),a=Nd();(ye!==e||ae!==t)&&(Ma=null,bi(e,t)),t=!1;var r=De;e:do try{if(de!==0&&ie!==null){var s=ie,g=ot;switch(de){case 8:Go(),r=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var E=de;if(de=0,ot=null,Ei(e,s,g,E),n&&mi){r=0;break e}break;default:E=de,de=0,ot=null,Ei(e,s,g,E)}}Bf(),r=De;break}catch(D){wd(e,D)}while(!0);return t&&e.shellSuspendCounter++,Bt=kn=null,ce=i,M.H=l,M.A=a,ie===null&&(ye=null,ae=0,Zl()),r}function Bf(){for(;ie!==null;)kd(ie)}function qf(e,t){var n=ce;ce|=2;var i=Ud(),l=Nd();ye!==e||ae!==t?(Ma=null,Da=Rt()+500,bi(e,t)):mi=wi(e,t);e:do try{if(de!==0&&ie!==null){t=ie;var a=ot;t:switch(de){case 1:de=0,ot=null,Ei(e,t,a,1);break;case 2:case 9:if(Vu(a)){de=0,ot=null,xd(t);break}t=function(){de!==2&&de!==9||ye!==e||(de=7),Ot(e)},a.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:Vu(a)?(de=0,ot=null,xd(t)):(de=0,ot=null,Ei(e,t,a,7));break;case 5:var r=null;switch(ie.tag){case 26:r=ie.memoizedState;case 5:case 27:var s=ie;if(!r||pg(r)){de=0,ot=null;var g=s.sibling;if(g!==null)ie=g;else{var E=s.return;E!==null?(ie=E,_a(E)):ie=null}break t}}de=0,ot=null,Ei(e,t,a,5);break;case 6:de=0,ot=null,Ei(e,t,a,6);break;case 8:Go(),De=6;break e;default:throw Error(u(462))}}zf();break}catch(D){wd(e,D)}while(!0);return Bt=kn=null,M.H=i,M.A=l,ce=n,ie!==null?0:(ye=null,ae=0,Zl(),De)}function zf(){for(;ie!==null&&!rh();)kd(ie)}function kd(e){var t=rd(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?_a(e):ie=t}function xd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ed(n,t,t.pendingProps,t.type,void 0,ae);break;case 11:t=ed(n,t,t.pendingProps,t.type.render,t.ref,ae);break;case 5:lo(t);default:sd(n,t),t=ie=Lu(t,Vt),t=rd(n,t,Vt)}e.memoizedProps=e.pendingProps,t===null?_a(e):ie=t}function Ei(e,t,n,i){Bt=kn=null,lo(t),gi=null,ll=0;var l=t.return;try{if(Of(e,l,t,n,ae)){De=1,ba(e,ht(n,e.current)),ie=null;return}}catch(a){if(l!==null)throw ie=l,a;De=1,ba(e,ht(n,e.current)),ie=null;return}t.flags&32768?(ue||i===1?e=!0:mi||(ae&536870912)!==0?e=!1:(cn=e=!0,(i===2||i===9||i===3||i===6)&&(i=vt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Ld(t,e)):_a(t)}function _a(e){var t=e;do{if((t.flags&32768)!==0){Ld(t,cn);return}e=t.return;var n=wf(t.alternate,t,Vt);if(n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);De===0&&(De=5)}function Ld(e,t){do{var n=Uf(e.alternate,e);if(n!==null){n.flags&=32767,ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=n}while(e!==null);De=6,ie=null}function Pd(e,t,n,i,l,a,r,s,g){e.cancelPendingCommit=null;do wa();while(He!==0);if((ce&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(a=t.lanes|t.childLanes,a|=kr,mh(e,n,a,r,s,g),e===ye&&(ie=ye=null,ae=0),yi=t,hn=e,Si=n,zo=a,Ho=l,Dd=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Yf(Ll,function(){return Id(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=M.T,M.T=null,l=q.p,q.p=2,r=ce,ce|=4;try{Nf(e,t,n)}finally{ce=r,q.p=l,M.T=i}}He=1,Bd(),qd(),zd()}}function Bd(){if(He===1){He=0;var e=hn,t=yi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null;var i=q.p;q.p=2;var l=ce;ce|=4;try{Sd(t,e);var a=ns,r=Cu(e.containerInfo),s=a.focusedElem,g=a.selectionRange;if(r!==s&&s&&s.ownerDocument&&Tu(s.ownerDocument.documentElement,s)){if(g!==null&&Or(s)){var E=g.start,D=g.end;if(D===void 0&&(D=E),"selectionStart"in s)s.selectionStart=E,s.selectionEnd=Math.min(D,s.value.length);else{var U=s.ownerDocument||document,A=U&&U.defaultView||window;if(A.getSelection){var R=A.getSelection(),Z=s.textContent.length,F=Math.min(g.start,Z),fe=g.end===void 0?F:Math.min(g.end,Z);!R.extend&&F>fe&&(r=fe,fe=F,F=r);var y=Ru(s,F),m=Ru(s,fe);if(y&&m&&(R.rangeCount!==1||R.anchorNode!==y.node||R.anchorOffset!==y.offset||R.focusNode!==m.node||R.focusOffset!==m.offset)){var b=U.createRange();b.setStart(y.node,y.offset),R.removeAllRanges(),F>fe?(R.addRange(b),R.extend(m.node,m.offset)):(b.setEnd(m.node,m.offset),R.addRange(b))}}}}for(U=[],R=s;R=R.parentNode;)R.nodeType===1&&U.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<U.length;s++){var O=U[s];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Ga=!!ts,ns=ts=null}finally{ce=l,q.p=i,M.T=n}}e.current=t,He=2}}function qd(){if(He===2){He=0;var e=hn,t=yi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=M.T,M.T=null;var i=q.p;q.p=2;var l=ce;ce|=4;try{pd(e,t.alternate,t)}finally{ce=l,q.p=i,M.T=n}}He=3}}function zd(){if(He===4||He===3){He=0,oh();var e=hn,t=yi,n=Si,i=Dd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?He=5:(He=0,yi=hn=null,Hd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(gn=null),or(n),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(_i,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=M.T,l=q.p,q.p=2,M.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var s=i[r];a(s.value,{componentStack:s.stack})}}finally{M.T=t,q.p=l}}(Si&3)!==0&&wa(),Ot(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===Io?hl++:(hl=0,Io=e):hl=0,fl(0)}}function Hd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fi(t)))}function wa(e){return Bd(),qd(),zd(),Id()}function Id(){if(He!==5)return!1;var e=hn,t=zo;zo=0;var n=or(Si),i=M.T,l=q.p;try{q.p=32>n?32:n,M.T=null,n=Ho,Ho=null;var a=hn,r=Si;if(He=0,yi=hn=null,Si=0,(ce&6)!==0)throw Error(u(331));var s=ce;if(ce|=4,Td(a.current),Ed(a,a.current,r,n),ce=s,fl(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(_i,a)}catch{}return!0}finally{q.p=l,M.T=i,Hd(e,t)}}function Gd(e,t,n){t=ht(n,t),t=So(e.stateNode,t,2),e=nn(e,t,2),e!==null&&(Ui(e,2),Ot(e))}function ve(e,t,n){if(e.tag===3)Gd(e,e,n);else for(;t!==null;){if(t.tag===3){Gd(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gn===null||!gn.has(i))){e=ht(n,e),n=Qc(2),i=nn(t,n,2),i!==null&&(Fc(n,i,t,e),Ui(i,2),Ot(i));break}}t=t.return}}function Vo(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Lf;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(Lo=!0,l.add(n),e=Hf.bind(null,e,t,n),t.then(e,e))}function Hf(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ye===e&&(ae&n)===n&&(De===4||De===3&&(ae&62914560)===ae&&300>Rt()-qo?(ce&2)===0&&bi(e,0):Po|=n,vi===ae&&(vi=0)),Ot(e)}function Yd(e,t){t===0&&(t=zs()),e=ni(e,t),e!==null&&(Ui(e,t),Ot(e))}function If(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yd(e,n)}function Gf(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(t),Yd(e,n)}function Yf(e,t){return ir(e,t)}var Ua=null,Ai=null,Qo=!1,Na=!1,Fo=!1,Hn=0;function Ot(e){e!==Ai&&e.next===null&&(Ai===null?Ua=Ai=e:Ai=Ai.next=e),Na=!0,Qo||(Qo=!0,Vf())}function fl(e,t){if(!Fo&&Na){Fo=!0;do for(var n=!1,i=Ua;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var a=0;else{var r=i.suspendedLanes,s=i.pingedLanes;a=(1<<31-nt(42|e)+1)-1,a&=l&~(r&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Fd(i,a))}else a=ae,a=ql(i,i===ye?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||wi(i,a)||(n=!0,Fd(i,a));i=i.next}while(n);Fo=!1}}function jf(){jd()}function jd(){Na=Qo=!1;var e=0;Hn!==0&&($f()&&(e=Hn),Hn=0);for(var t=Rt(),n=null,i=Ua;i!==null;){var l=i.next,a=Vd(i,t);a===0?(i.next=null,n===null?Ua=l:n.next=l,l===null&&(Ai=n)):(n=i,(e!==0||(a&3)!==0)&&(Na=!0)),i=l}fl(e)}function Vd(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-nt(a),s=1<<r,g=l[r];g===-1?((s&n)===0||(s&i)!==0)&&(l[r]=ph(s,t)):g<=t&&(e.expiredLanes|=s),a&=~s}if(t=ye,n=ae,n=ql(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&lr(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||wi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&lr(i),or(n)){case 2:case 8:n=Ps;break;case 32:n=Ll;break;case 268435456:n=Bs;break;default:n=Ll}return i=Qd.bind(null,e),n=ir(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&lr(i),e.callbackPriority=2,e.callbackNode=null,2}function Qd(e,t){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(wa()&&e.callbackNode!==n)return null;var i=ae;return i=ql(e,e===ye?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Od(e,i,t),Vd(e,Rt()),e.callbackNode!=null&&e.callbackNode===n?Qd.bind(null,e):null)}function Fd(e,t){if(wa())return null;Od(e,t,!0)}function Vf(){tp(function(){(ce&6)!==0?ir(Ls,jf):jd()})}function Xo(){return Hn===0&&(Hn=qs()),Hn}function Xd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yl(""+e)}function Kd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Qf(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var a=Xd((l[Ke]||null).action),r=i.submitter;r&&(t=(t=r[Ke]||null)?Xd(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var s=new Fl("action","action",null,i,l);e.push({event:s,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Hn!==0){var g=r?Kd(l,r):new FormData(l);fo(n,{pending:!0,data:g,method:l.method,action:a},null,g)}}else typeof a=="function"&&(s.preventDefault(),g=r?Kd(l,r):new FormData(l),fo(n,{pending:!0,data:g,method:l.method,action:a},a,g))},currentTarget:l}]})}}for(var Ko=0;Ko<Nr.length;Ko++){var Zo=Nr[Ko],Ff=Zo.toLowerCase(),Xf=Zo[0].toUpperCase()+Zo.slice(1);bt(Ff,"on"+Xf)}bt(Ou,"onAnimationEnd"),bt(_u,"onAnimationIteration"),bt(wu,"onAnimationStart"),bt("dblclick","onDoubleClick"),bt("focusin","onFocus"),bt("focusout","onBlur"),bt(df,"onTransitionRun"),bt(gf,"onTransitionStart"),bt(hf,"onTransitionCancel"),bt(Uu,"onTransitionEnd"),Qn("onMouseEnter",["mouseout","mouseover"]),Qn("onMouseLeave",["mouseout","mouseover"]),Qn("onPointerEnter",["pointerout","pointerover"]),Qn("onPointerLeave",["pointerout","pointerover"]),Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function Zd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var s=i[r],g=s.instance,E=s.currentTarget;if(s=s.listener,g!==a&&l.isPropagationStopped())break e;a=s,l.currentTarget=E;try{a(l)}catch(D){Sa(D)}l.currentTarget=null,a=g}else for(r=0;r<i.length;r++){if(s=i[r],g=s.instance,E=s.currentTarget,s=s.listener,g!==a&&l.isPropagationStopped())break e;a=s,l.currentTarget=E;try{a(l)}catch(D){Sa(D)}l.currentTarget=null,a=g}}}}function le(e,t){var n=t[sr];n===void 0&&(n=t[sr]=new Set);var i=e+"__bubble";n.has(i)||(Jd(t,e,2,!1),n.add(i))}function Jo(e,t,n){var i=0;t&&(i|=4),Jd(n,e,i,t)}var ka="_reactListening"+Math.random().toString(36).slice(2);function Wo(e){if(!e[ka]){e[ka]=!0,js.forEach(function(n){n!=="selectionchange"&&(Kf.has(n)||Jo(n,!1,e),Jo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ka]||(t[ka]=!0,Jo("selectionchange",!1,t))}}function Jd(e,t,n,i){switch(Eg(t)){case 2:var l=Ap;break;case 8:l=Rp;break;default:l=gs}n=l.bind(null,t,n,e),l=void 0,!Sr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function $o(e,t,n,i,l){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var s=i.stateNode.containerInfo;if(s===l)break;if(r===4)for(r=i.return;r!==null;){var g=r.tag;if((g===3||g===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;s!==null;){if(r=Yn(s),r===null)return;if(g=r.tag,g===5||g===6||g===26||g===27){i=a=r;continue e}s=s.parentNode}}i=i.return}lu(function(){var E=a,D=vr(n),U=[];e:{var A=Nu.get(e);if(A!==void 0){var R=Fl,Z=e;switch(e){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":R=Gh;break;case"focusin":Z="focus",R=Rr;break;case"focusout":Z="blur",R=Rr;break;case"beforeblur":case"afterblur":R=Rr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Vh;break;case Ou:case _u:case wu:R=kh;break;case Uu:R=Fh;break;case"scroll":case"scrollend":R=Oh;break;case"wheel":R=Kh;break;case"copy":case"cut":case"paste":R=Lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=uu;break;case"toggle":case"beforetoggle":R=Jh}var F=(t&4)!==0,fe=!F&&(e==="scroll"||e==="scrollend"),y=F?A!==null?A+"Capture":null:A;F=[];for(var m=E,b;m!==null;){var O=m;if(b=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||b===null||y===null||(O=xi(m,y),O!=null&&F.push(ml(m,O,b))),fe)break;m=m.return}0<F.length&&(A=new R(A,Z,null,n,D),U.push({event:A,listeners:F}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",A&&n!==mr&&(Z=n.relatedTarget||n.fromElement)&&(Yn(Z)||Z[Gn]))break e;if((R||A)&&(A=D.window===D?D:(A=D.ownerDocument)?A.defaultView||A.parentWindow:window,R?(Z=n.relatedTarget||n.toElement,R=E,Z=Z?Yn(Z):null,Z!==null&&(fe=v(Z),F=Z.tag,Z!==fe||F!==5&&F!==27&&F!==6)&&(Z=null)):(R=null,Z=E),R!==Z)){if(F=ou,O="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(F=uu,O="onPointerLeave",y="onPointerEnter",m="pointer"),fe=R==null?A:ki(R),b=Z==null?A:ki(Z),A=new F(O,m+"leave",R,n,D),A.target=fe,A.relatedTarget=b,O=null,Yn(D)===E&&(F=new F(y,m+"enter",Z,n,D),F.target=b,F.relatedTarget=fe,O=F),fe=O,R&&Z)t:{for(F=R,y=Z,m=0,b=F;b;b=Ri(b))m++;for(b=0,O=y;O;O=Ri(O))b++;for(;0<m-b;)F=Ri(F),m--;for(;0<b-m;)y=Ri(y),b--;for(;m--;){if(F===y||y!==null&&F===y.alternate)break t;F=Ri(F),y=Ri(y)}F=null}else F=null;R!==null&&Wd(U,A,R,F,!1),Z!==null&&fe!==null&&Wd(U,fe,Z,F,!0)}}e:{if(A=E?ki(E):window,R=A.nodeName&&A.nodeName.toLowerCase(),R==="select"||R==="input"&&A.type==="file")var I=vu;else if(pu(A))if(yu)I=sf;else{I=rf;var ne=af}else R=A.nodeName,!R||R.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?E&&pr(E.elementType)&&(I=vu):I=of;if(I&&(I=I(e,E))){mu(U,I,n,D);break e}ne&&ne(e,A,E),e==="focusout"&&E&&A.type==="number"&&E.memoizedProps.value!=null&&fr(A,"number",A.value)}switch(ne=E?ki(E):window,e){case"focusin":(pu(ne)||ne.contentEditable==="true")&&($n=ne,_r=E,Gi=null);break;case"focusout":Gi=_r=$n=null;break;case"mousedown":wr=!0;break;case"contextmenu":case"mouseup":case"dragend":wr=!1,Du(U,n,D);break;case"selectionchange":if(cf)break;case"keydown":case"keyup":Du(U,n,D)}var V;if(Cr)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Wn?hu(e,n)&&(X="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(X="onCompositionStart");X&&(cu&&n.locale!=="ko"&&(Wn||X!=="onCompositionStart"?X==="onCompositionEnd"&&Wn&&(V=au()):(Wt=D,br="value"in Wt?Wt.value:Wt.textContent,Wn=!0)),ne=xa(E,X),0<ne.length&&(X=new su(X,e,null,n,D),U.push({event:X,listeners:ne}),V?X.data=V:(V=fu(n),V!==null&&(X.data=V)))),(V=$h?ef(e,n):tf(e,n))&&(X=xa(E,"onBeforeInput"),0<X.length&&(ne=new su("onBeforeInput","beforeinput",null,n,D),U.push({event:ne,listeners:X}),ne.data=V)),Qf(U,e,E,n,D)}Zd(U,t)})}function ml(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xa(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,a=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||a===null||(l=xi(e,n),l!=null&&i.unshift(ml(e,l,a)),l=xi(e,t),l!=null&&i.push(ml(e,l,a))),e.tag===3)return i;e=e.return}return[]}function Ri(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wd(e,t,n,i,l){for(var a=t._reactName,r=[];n!==null&&n!==i;){var s=n,g=s.alternate,E=s.stateNode;if(s=s.tag,g!==null&&g===i)break;s!==5&&s!==26&&s!==27||E===null||(g=E,l?(E=xi(n,a),E!=null&&r.unshift(ml(n,E,g))):l||(E=xi(n,a),E!=null&&r.push(ml(n,E,g)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Zf=/\r\n?/g,Jf=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(Zf,`
`).replace(Jf,"")}function eg(e,t){return t=$d(t),$d(e)===t}function La(){}function he(e,t,n,i,l,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Kn(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Kn(e,""+i);break;case"className":Hl(e,"class",i);break;case"tabIndex":Hl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Hl(e,n,i);break;case"style":nu(e,i,a);break;case"data":if(t!=="object"){Hl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Yl(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&he(e,t,"name",l.name,l,null),he(e,t,"formEncType",l.formEncType,l,null),he(e,t,"formMethod",l.formMethod,l,null),he(e,t,"formTarget",l.formTarget,l,null)):(he(e,t,"encType",l.encType,l,null),he(e,t,"method",l.method,l,null),he(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Yl(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=La);break;case"onScroll":i!=null&&le("scroll",e);break;case"onScrollEnd":i!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Yl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":le("beforetoggle",e),le("toggle",e),zl(e,"popover",i);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":zl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Dh.get(n)||n,zl(e,n,i))}}function es(e,t,n,i,l,a){switch(n){case"style":nu(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Kn(e,i):(typeof i=="number"||typeof i=="bigint")&&Kn(e,""+i);break;case"onScroll":i!=null&&le("scroll",e);break;case"onScrollEnd":i!=null&&le("scrollend",e);break;case"onClick":i!=null&&(e.onclick=La);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vs.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),a=e[Ke]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,l),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,l);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):zl(e,n,i)}}}function Ie(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var i=!1,l=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:he(e,t,a,r,n,null)}}l&&he(e,t,"srcSet",n.srcSet,n,null),i&&he(e,t,"src",n.src,n,null);return;case"input":le("invalid",e);var s=a=r=l=null,g=null,E=null;for(i in n)if(n.hasOwnProperty(i)){var D=n[i];if(D!=null)switch(i){case"name":l=D;break;case"type":r=D;break;case"checked":g=D;break;case"defaultChecked":E=D;break;case"value":a=D;break;case"defaultValue":s=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:he(e,t,i,D,n,null)}}Ws(e,a,s,g,E,r,l,!1),Il(e);return;case"select":le("invalid",e),i=r=a=null;for(l in n)if(n.hasOwnProperty(l)&&(s=n[l],s!=null))switch(l){case"value":a=s;break;case"defaultValue":r=s;break;case"multiple":i=s;default:he(e,t,l,s,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Xn(e,!!i,t,!1):n!=null&&Xn(e,!!i,n,!0);return;case"textarea":le("invalid",e),a=l=i=null;for(r in n)if(n.hasOwnProperty(r)&&(s=n[r],s!=null))switch(r){case"value":i=s;break;case"defaultValue":l=s;break;case"children":a=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(u(91));break;default:he(e,t,r,s,n,null)}eu(e,i,l,a),Il(e);return;case"option":for(g in n)if(n.hasOwnProperty(g)&&(i=n[g],i!=null))switch(g){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:he(e,t,g,i,n,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(i=0;i<pl.length;i++)le(pl[i],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(i=n[E],i!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:he(e,t,E,i,n,null)}return;default:if(pr(t)){for(D in n)n.hasOwnProperty(D)&&(i=n[D],i!==void 0&&es(e,t,D,i,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(i=n[s],i!=null&&he(e,t,s,i,n,null))}function Wf(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,a=null,r=null,s=null,g=null,E=null,D=null;for(R in n){var U=n[R];if(n.hasOwnProperty(R)&&U!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":g=U;default:i.hasOwnProperty(R)||he(e,t,R,null,i,U)}}for(var A in i){var R=i[A];if(U=n[A],i.hasOwnProperty(A)&&(R!=null||U!=null))switch(A){case"type":a=R;break;case"name":l=R;break;case"checked":E=R;break;case"defaultChecked":D=R;break;case"value":r=R;break;case"defaultValue":s=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:R!==U&&he(e,t,A,R,i,U)}}hr(e,r,s,g,E,D,a,l);return;case"select":R=r=s=A=null;for(a in n)if(g=n[a],n.hasOwnProperty(a)&&g!=null)switch(a){case"value":break;case"multiple":R=g;default:i.hasOwnProperty(a)||he(e,t,a,null,i,g)}for(l in i)if(a=i[l],g=n[l],i.hasOwnProperty(l)&&(a!=null||g!=null))switch(l){case"value":A=a;break;case"defaultValue":s=a;break;case"multiple":r=a;default:a!==g&&he(e,t,l,a,i,g)}t=s,n=r,i=R,A!=null?Xn(e,!!n,A,!1):!!i!=!!n&&(t!=null?Xn(e,!!n,t,!0):Xn(e,!!n,n?[]:"",!1));return;case"textarea":R=A=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null&&!i.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:he(e,t,s,null,i,l)}for(r in i)if(l=i[r],a=n[r],i.hasOwnProperty(r)&&(l!=null||a!=null))switch(r){case"value":A=l;break;case"defaultValue":R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==a&&he(e,t,r,l,i,a)}$s(e,A,R);return;case"option":for(var Z in n)if(A=n[Z],n.hasOwnProperty(Z)&&A!=null&&!i.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:he(e,t,Z,null,i,A)}for(g in i)if(A=i[g],R=n[g],i.hasOwnProperty(g)&&A!==R&&(A!=null||R!=null))switch(g){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:he(e,t,g,A,i,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in n)A=n[F],n.hasOwnProperty(F)&&A!=null&&!i.hasOwnProperty(F)&&he(e,t,F,null,i,A);for(E in i)if(A=i[E],R=n[E],i.hasOwnProperty(E)&&A!==R&&(A!=null||R!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:he(e,t,E,A,i,R)}return;default:if(pr(t)){for(var fe in n)A=n[fe],n.hasOwnProperty(fe)&&A!==void 0&&!i.hasOwnProperty(fe)&&es(e,t,fe,void 0,i,A);for(D in i)A=i[D],R=n[D],!i.hasOwnProperty(D)||A===R||A===void 0&&R===void 0||es(e,t,D,A,i,R);return}}for(var y in n)A=n[y],n.hasOwnProperty(y)&&A!=null&&!i.hasOwnProperty(y)&&he(e,t,y,null,i,A);for(U in i)A=i[U],R=n[U],!i.hasOwnProperty(U)||A===R||A==null&&R==null||he(e,t,U,A,i,R)}var ts=null,ns=null;function Pa(e){return e.nodeType===9?e:e.ownerDocument}function tg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ng(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function is(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ls=null;function $f(){var e=window.event;return e&&e.type==="popstate"?e===ls?!1:(ls=e,!0):(ls=null,!1)}var ig=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,lg=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof lg<"u"?function(e){return lg.resolve(null).then(e).catch(np)}:ig;function np(e){setTimeout(function(){throw e})}function pn(e){return e==="head"}function ag(e,t){var n=t,i=0,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(0<i&&8>i){n=i;var r=e.ownerDocument;if(n&1&&vl(r.documentElement),n&2&&vl(r.body),n&4)for(n=r.head,vl(n),r=n.firstChild;r;){var s=r.nextSibling,g=r.nodeName;r[Ni]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}if(l===0){e.removeChild(a),Cl(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:i=n.charCodeAt(0)-48;else i=0;n=a}while(n);Cl(t)}function as(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":as(n),ur(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ip(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ni])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function lp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=At(e.nextSibling),e===null))return null;return e}function rs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ap(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var os=null;function rg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function og(e,t,n){switch(t=Pa(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function vl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ur(e)}var St=new Map,sg=new Set;function Ba(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qt=q.d;q.d={f:rp,r:op,D:sp,C:up,L:cp,m:dp,X:hp,S:gp,M:fp};function rp(){var e=Qt.f(),t=Oa();return e||t}function op(e){var t=jn(e);t!==null&&t.tag===5&&t.type==="form"?Oc(t):Qt.r(e)}var Ti=typeof document>"u"?null:document;function ug(e,t,n){var i=Ti;if(i&&typeof t=="string"&&t){var l=gt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),sg.has(l)||(sg.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),Ie(t,"link",e),Le(t),i.head.appendChild(t)))}}function sp(e){Qt.D(e),ug("dns-prefetch",e,null)}function up(e,t){Qt.C(e,t),ug("preconnect",e,t)}function cp(e,t,n){Qt.L(e,t,n);var i=Ti;if(i&&e&&t){var l='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+gt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+gt(n.imageSizes)+'"]')):l+='[href="'+gt(e)+'"]';var a=l;switch(t){case"style":a=Ci(e);break;case"script":a=Di(e)}St.has(a)||(e=C({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),St.set(a,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(yl(a))||t==="script"&&i.querySelector(Sl(a))||(t=i.createElement("link"),Ie(t,"link",e),Le(t),i.head.appendChild(t)))}}function dp(e,t){Qt.m(e,t);var n=Ti;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+gt(i)+'"][href="'+gt(e)+'"]',a=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Di(e)}if(!St.has(a)&&(e=C({rel:"modulepreload",href:e},t),St.set(a,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sl(a)))return}i=n.createElement("link"),Ie(i,"link",e),Le(i),n.head.appendChild(i)}}}function gp(e,t,n){Qt.S(e,t,n);var i=Ti;if(i&&e){var l=Vn(i).hoistableStyles,a=Ci(e);t=t||"default";var r=l.get(a);if(!r){var s={loading:0,preload:null};if(r=i.querySelector(yl(a)))s.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":t},n),(n=St.get(a))&&ss(e,n);var g=r=i.createElement("link");Le(g),Ie(g,"link",e),g._p=new Promise(function(E,D){g.onload=E,g.onerror=D}),g.addEventListener("load",function(){s.loading|=1}),g.addEventListener("error",function(){s.loading|=2}),s.loading|=4,qa(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:s},l.set(a,r)}}}function hp(e,t){Qt.X(e,t);var n=Ti;if(n&&e){var i=Vn(n).hoistableScripts,l=Di(e),a=i.get(l);a||(a=n.querySelector(Sl(l)),a||(e=C({src:e,async:!0},t),(t=St.get(l))&&us(e,t),a=n.createElement("script"),Le(a),Ie(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(l,a))}}function fp(e,t){Qt.M(e,t);var n=Ti;if(n&&e){var i=Vn(n).hoistableScripts,l=Di(e),a=i.get(l);a||(a=n.querySelector(Sl(l)),a||(e=C({src:e,async:!0,type:"module"},t),(t=St.get(l))&&us(e,t),a=n.createElement("script"),Le(a),Ie(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(l,a))}}function cg(e,t,n,i){var l=(l=$.current)?Ba(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ci(n.href),n=Vn(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ci(n.href);var a=Vn(l).hoistableStyles,r=a.get(e);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=l.querySelector(yl(e)))&&!a._p&&(r.instance=a,r.state.loading=5),St.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},St.set(e,n),a||pp(l,e,n,r.state))),t&&i===null)throw Error(u(528,""));return r}if(t&&i!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Di(n),n=Vn(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ci(e){return'href="'+gt(e)+'"'}function yl(e){return'link[rel="stylesheet"]['+e+"]"}function dg(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function pp(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ie(t,"link",n),Le(t),e.head.appendChild(t))}function Di(e){return'[src="'+gt(e)+'"]'}function Sl(e){return"script[async]"+e}function gg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+gt(n.href)+'"]');if(i)return t.instance=i,Le(i),i;var l=C({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Le(i),Ie(i,"style",l),qa(i,n.precedence,e),t.instance=i;case"stylesheet":l=Ci(n.href);var a=e.querySelector(yl(l));if(a)return t.state.loading|=4,t.instance=a,Le(a),a;i=dg(n),(l=St.get(l))&&ss(i,l),a=(e.ownerDocument||e).createElement("link"),Le(a);var r=a;return r._p=new Promise(function(s,g){r.onload=s,r.onerror=g}),Ie(a,"link",i),t.state.loading|=4,qa(a,n.precedence,e),t.instance=a;case"script":return a=Di(n.src),(l=e.querySelector(Sl(a)))?(t.instance=l,Le(l),l):(i=n,(l=St.get(a))&&(i=C({},n),us(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),Le(l),Ie(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,qa(i,n.precedence,e));return t.instance}function qa(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,a=l,r=0;r<i.length;r++){var s=i[r];if(s.dataset.precedence===t)a=s;else if(a!==l)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ss(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function us(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var za=null;function hg(e,t,n){if(za===null){var i=new Map,l=za=new Map;l.set(n,i)}else l=za,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var a=n[l];if(!(a[Ni]||a[je]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var s=i.get(r);s?s.push(a):i.set(r,[a])}}return i}function fg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function mp(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bl=null;function vp(){}function yp(e,t,n){if(bl===null)throw Error(u(475));var i=bl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Ci(n.href),a=e.querySelector(yl(l));if(a){e=a._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Ha.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=a,Le(a);return}a=e.ownerDocument||e,n=dg(n),(l=St.get(l))&&ss(n,l),a=a.createElement("link"),Le(a);var r=a;r._p=new Promise(function(s,g){r.onload=s,r.onerror=g}),Ie(a,"link",n),t.instance=a}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Ha.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Sp(){if(bl===null)throw Error(u(475));var e=bl;return e.stylesheets&&e.count===0&&cs(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&cs(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Ha(){if(this.count--,this.count===0){if(this.stylesheets)cs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ia=null;function cs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ia=new Map,t.forEach(bp,e),Ia=null,Ha.call(e))}function bp(e,t){if(!(t.state.loading&4)){var n=Ia.get(e);if(n)var i=n.get(null);else{n=new Map,Ia.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<l.length;a++){var r=l[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}l=t.instance,r=l.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,l),n.set(r,l),this.count++,i=Ha.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),a?a.parentNode.insertBefore(l,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var El={$$typeof:J,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Ep(e,t,n,i,l,a,r,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ar(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ar(0),this.hiddenUpdates=ar(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function mg(e,t,n,i,l,a,r,s,g,E,D,U){return e=new Ep(e,t,n,r,s,g,E,U),t=1,a===!0&&(t|=24),a=lt(3,null,null,t),e.current=a,a.stateNode=e,t=jr(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Xr(a),e}function vg(e){return e?(e=ii,e):ii}function yg(e,t,n,i,l,a){l=vg(l),i.context===null?i.context=l:i.pendingContext=l,i=tn(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=nn(e,i,t),n!==null&&(ut(n,e,t),Ji(n,e,t))}function Sg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ds(e,t){Sg(e,t),(e=e.alternate)&&Sg(e,t)}function bg(e){if(e.tag===13){var t=ni(e,67108864);t!==null&&ut(t,e,67108864),ds(e,67108864)}}var Ga=!0;function Ap(e,t,n,i){var l=M.T;M.T=null;var a=q.p;try{q.p=2,gs(e,t,n,i)}finally{q.p=a,M.T=l}}function Rp(e,t,n,i){var l=M.T;M.T=null;var a=q.p;try{q.p=8,gs(e,t,n,i)}finally{q.p=a,M.T=l}}function gs(e,t,n,i){if(Ga){var l=hs(i);if(l===null)$o(e,t,i,Ya,n),Ag(e,i);else if(Cp(l,e,t,n,i))i.stopPropagation();else if(Ag(e,i),t&4&&-1<Tp.indexOf(e)){for(;l!==null;){var a=jn(l);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Rn(a.pendingLanes);if(r!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;r;){var g=1<<31-nt(r);s.entanglements[1]|=g,r&=~g}Ot(a),(ce&6)===0&&(Da=Rt()+500,fl(0))}}break;case 13:s=ni(a,2),s!==null&&ut(s,a,2),Oa(),ds(a,2)}if(a=hs(i),a===null&&$o(e,t,i,Ya,n),a===l)break;l=a}l!==null&&i.stopPropagation()}else $o(e,t,i,null,n)}}function hs(e){return e=vr(e),fs(e)}var Ya=null;function fs(e){if(Ya=null,e=Yn(e),e!==null){var t=v(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=T(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ya=e,null}function Eg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sh()){case Ls:return 2;case Ps:return 8;case Ll:case uh:return 32;case Bs:return 268435456;default:return 32}default:return 32}}var ps=!1,mn=null,vn=null,yn=null,Al=new Map,Rl=new Map,Sn=[],Tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ag(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":Al.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(t.pointerId)}}function Tl(e,t,n,i,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[l]},t!==null&&(t=jn(t),t!==null&&bg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Cp(e,t,n,i,l){switch(t){case"focusin":return mn=Tl(mn,e,t,n,i,l),!0;case"dragenter":return vn=Tl(vn,e,t,n,i,l),!0;case"mouseover":return yn=Tl(yn,e,t,n,i,l),!0;case"pointerover":var a=l.pointerId;return Al.set(a,Tl(Al.get(a)||null,e,t,n,i,l)),!0;case"gotpointercapture":return a=l.pointerId,Rl.set(a,Tl(Rl.get(a)||null,e,t,n,i,l)),!0}return!1}function Rg(e){var t=Yn(e.target);if(t!==null){var n=v(t);if(n!==null){if(t=n.tag,t===13){if(t=T(n),t!==null){e.blockedOn=t,vh(e.priority,function(){if(n.tag===13){var i=st();i=rr(i);var l=ni(n,i);l!==null&&ut(l,n,i),ds(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ja(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hs(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);mr=i,n.target.dispatchEvent(i),mr=null}else return t=jn(n),t!==null&&bg(t),e.blockedOn=n,!1;t.shift()}return!0}function Tg(e,t,n){ja(e)&&n.delete(t)}function Dp(){ps=!1,mn!==null&&ja(mn)&&(mn=null),vn!==null&&ja(vn)&&(vn=null),yn!==null&&ja(yn)&&(yn=null),Al.forEach(Tg),Rl.forEach(Tg)}function Va(e,t){e.blockedOn===t&&(e.blockedOn=null,ps||(ps=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Dp)))}var Qa=null;function Cg(e){Qa!==e&&(Qa=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Qa===e&&(Qa=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(fs(i||n)===null)continue;break}var a=jn(n);a!==null&&(e.splice(t,3),t-=3,fo(a,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function Cl(e){function t(g){return Va(g,e)}mn!==null&&Va(mn,e),vn!==null&&Va(vn,e),yn!==null&&Va(yn,e),Al.forEach(t),Rl.forEach(t);for(var n=0;n<Sn.length;n++){var i=Sn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Sn.length&&(n=Sn[0],n.blockedOn===null);)Rg(n),n.blockedOn===null&&Sn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],a=n[i+1],r=l[Ke]||null;if(typeof a=="function")r||Cg(n);else if(r){var s=null;if(a&&a.hasAttribute("formAction")){if(l=a,r=a[Ke]||null)s=r.formAction;else if(fs(l)!==null)continue}else s=r.action;typeof s=="function"?n[i+1]=s:(n.splice(i,3),i-=3),Cg(n)}}}function ms(e){this._internalRoot=e}Fa.prototype.render=ms.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,i=st();yg(n,i,e,t,null,null)},Fa.prototype.unmount=ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yg(e.current,2,null,e,null,null),Oa(),t[Gn]=null}};function Fa(e){this._internalRoot=e}Fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sn.length&&t!==0&&t<Sn[n].priority;n++);Sn.splice(n,0,e),n===0&&Rg(e)}};var Dg=c.version;if(Dg!=="19.1.0")throw Error(u(527,Dg,"19.1.0"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=S(t),e=e!==null?f(e):null,e=e===null?null:e.stateNode,e};var Mp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{_i=Xa.inject(Mp),tt=Xa}catch{}}return Ml.createRoot=function(e,t){if(!h(e))throw Error(u(299));var n=!1,i="",l=Gc,a=Yc,r=jc,s=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(s=t.unstable_transitionCallbacks)),t=mg(e,1,!1,null,null,n,i,l,a,r,s,null),e[Gn]=t.current,Wo(e),new ms(t)},Ml.hydrateRoot=function(e,t,n){if(!h(e))throw Error(u(299));var i=!1,l="",a=Gc,r=Yc,s=jc,g=null,E=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(g=n.unstable_transitionCallbacks),n.formState!==void 0&&(E=n.formState)),t=mg(e,1,!0,t,n??null,i,l,a,r,s,g,E),t.context=vg(null),n=t.current,i=st(),i=rr(i),l=tn(i),l.callback=null,nn(n,l,i),n=i,t.current.lanes=n,Ui(t,n),Ot(t),e[Gn]=t.current,Wo(e),new Fa(t)},Ml.version="19.1.0",Ml}var Pg;function Bp(){if(Pg)return Ss.exports;Pg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Ss.exports=Pp(),Ss.exports}var qp=Bp(),Ol={},Bg;function zp(){if(Bg)return Ol;Bg=1,Object.defineProperty(Ol,"__esModule",{value:!0}),Ol.parse=T,Ol.serialize=f;const o=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,c=/^[\u0021-\u003A\u003C-\u007E]*$/,d=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/,h=Object.prototype.toString,v=(()=>{const N=function(){};return N.prototype=Object.create(null),N})();function T(N,G){const x=new v,H=N.length;if(H<2)return x;const j=(G==null?void 0:G.decode)||C;let P=0;do{const Y=N.indexOf("=",P);if(Y===-1)break;const J=N.indexOf(";",P),re=J===-1?H:J;if(Y>re){P=N.lastIndexOf(";",Y-1)+1;continue}const W=w(N,P,Y),we=S(N,Y,W),Te=N.slice(W,we);if(x[Te]===void 0){let Me=w(N,Y+1,re),Se=S(N,re,Me);const Fe=j(N.slice(Me,Se));x[Te]=Fe}P=re+1}while(P<H);return x}function w(N,G,x){do{const H=N.charCodeAt(G);if(H!==32&&H!==9)return G}while(++G<x);return x}function S(N,G,x){for(;G>x;){const H=N.charCodeAt(--G);if(H!==32&&H!==9)return G+1}return x}function f(N,G,x){const H=(x==null?void 0:x.encode)||encodeURIComponent;if(!o.test(N))throw new TypeError(`argument name is invalid: ${N}`);const j=H(G);if(!c.test(j))throw new TypeError(`argument val is invalid: ${G}`);let P=N+"="+j;if(!x)return P;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);P+="; Max-Age="+x.maxAge}if(x.domain){if(!d.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);P+="; Domain="+x.domain}if(x.path){if(!u.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);P+="; Path="+x.path}if(x.expires){if(!L(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);P+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(P+="; HttpOnly"),x.secure&&(P+="; Secure"),x.partitioned&&(P+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":P+="; Priority=Low";break;case"medium":P+="; Priority=Medium";break;case"high":P+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":P+="; SameSite=Strict";break;case"lax":P+="; SameSite=Lax";break;case"none":P+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return P}function C(N){if(N.indexOf("%")===-1)return N;try{return decodeURIComponent(N)}catch{return N}}function L(N){return h.call(N)==="[object Date]"}return Ol}zp();var qg="popstate";function Hp(o={}){function c(u,h){let{pathname:v,search:T,hash:w}=u.location;return Cs("",{pathname:v,search:T,hash:w},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function d(u,h){return typeof h=="string"?h:wl(h)}return Gp(c,d,null,o)}function Re(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}function _t(o,c){if(!o){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Ip(){return Math.random().toString(36).substring(2,10)}function zg(o,c){return{usr:o.state,key:o.key,idx:c}}function Cs(o,c,d=null,u){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof c=="string"?Mi(c):c,state:d,key:c&&c.key||u||Ip()}}function wl({pathname:o="/",search:c="",hash:d=""}){return c&&c!=="?"&&(o+=c.charAt(0)==="?"?c:"?"+c),d&&d!=="#"&&(o+=d.charAt(0)==="#"?d:"#"+d),o}function Mi(o){let c={};if(o){let d=o.indexOf("#");d>=0&&(c.hash=o.substring(d),o=o.substring(0,d));let u=o.indexOf("?");u>=0&&(c.search=o.substring(u),o=o.substring(0,u)),o&&(c.pathname=o)}return c}function Gp(o,c,d,u={}){let{window:h=document.defaultView,v5Compat:v=!1}=u,T=h.history,w="POP",S=null,f=C();f==null&&(f=0,T.replaceState({...T.state,idx:f},""));function C(){return(T.state||{idx:null}).idx}function L(){w="POP";let j=C(),P=j==null?null:j-f;f=j,S&&S({action:w,location:H.location,delta:P})}function N(j,P){w="PUSH";let Y=Cs(H.location,j,P);f=C()+1;let J=zg(Y,f),re=H.createHref(Y);try{T.pushState(J,"",re)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;h.location.assign(re)}v&&S&&S({action:w,location:H.location,delta:1})}function G(j,P){w="REPLACE";let Y=Cs(H.location,j,P);f=C();let J=zg(Y,f),re=H.createHref(Y);T.replaceState(J,"",re),v&&S&&S({action:w,location:H.location,delta:0})}function x(j){return Yp(j)}let H={get action(){return w},get location(){return o(h,T)},listen(j){if(S)throw new Error("A history only accepts one active listener");return h.addEventListener(qg,L),S=j,()=>{h.removeEventListener(qg,L),S=null}},createHref(j){return c(h,j)},createURL:x,encodeLocation(j){let P=x(j);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:N,replace:G,go(j){return T.go(j)}};return H}function Yp(o,c=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Re(d,"No window.location.(origin|href) available to create URL");let u=typeof o=="string"?o:wl(o);return u=u.replace(/ $/,"%20"),!c&&u.startsWith("//")&&(u=d+u),new URL(u,d)}function Yg(o,c,d="/"){return jp(o,c,d,!1)}function jp(o,c,d,u){let h=typeof c=="string"?Mi(c):c,v=Xt(h.pathname||"/",d);if(v==null)return null;let T=jg(o);Vp(T);let w=null;for(let S=0;w==null&&S<T.length;++S){let f=nm(v);w=em(T[S],f,u)}return w}function jg(o,c=[],d=[],u=""){let h=(v,T,w)=>{let S={relativePath:w===void 0?v.path||"":w,caseSensitive:v.caseSensitive===!0,childrenIndex:T,route:v};S.relativePath.startsWith("/")&&(Re(S.relativePath.startsWith(u),`Absolute route path "${S.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(u.length));let f=Ft([u,S.relativePath]),C=d.concat(S);v.children&&v.children.length>0&&(Re(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),jg(v.children,c,C,f)),!(v.path==null&&!v.index)&&c.push({path:f,score:Wp(f,v.index),routesMeta:C})};return o.forEach((v,T)=>{var w;if(v.path===""||!((w=v.path)!=null&&w.includes("?")))h(v,T);else for(let S of Vg(v.path))h(v,T,S)}),c}function Vg(o){let c=o.split("/");if(c.length===0)return[];let[d,...u]=c,h=d.endsWith("?"),v=d.replace(/\?$/,"");if(u.length===0)return h?[v,""]:[v];let T=Vg(u.join("/")),w=[];return w.push(...T.map(S=>S===""?v:[v,S].join("/"))),h&&w.push(...T),w.map(S=>o.startsWith("/")&&S===""?"/":S)}function Vp(o){o.sort((c,d)=>c.score!==d.score?d.score-c.score:$p(c.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}var Qp=/^:[\w-]+$/,Fp=3,Xp=2,Kp=1,Zp=10,Jp=-2,Hg=o=>o==="*";function Wp(o,c){let d=o.split("/"),u=d.length;return d.some(Hg)&&(u+=Jp),c&&(u+=Xp),d.filter(h=>!Hg(h)).reduce((h,v)=>h+(Qp.test(v)?Fp:v===""?Kp:Zp),u)}function $p(o,c){return o.length===c.length&&o.slice(0,-1).every((u,h)=>u===c[h])?o[o.length-1]-c[c.length-1]:0}function em(o,c,d=!1){let{routesMeta:u}=o,h={},v="/",T=[];for(let w=0;w<u.length;++w){let S=u[w],f=w===u.length-1,C=v==="/"?c:c.slice(v.length)||"/",L=Wa({path:S.relativePath,caseSensitive:S.caseSensitive,end:f},C),N=S.route;if(!L&&f&&d&&!u[u.length-1].route.index&&(L=Wa({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},C)),!L)return null;Object.assign(h,L.params),T.push({params:h,pathname:Ft([v,L.pathname]),pathnameBase:rm(Ft([v,L.pathnameBase])),route:N}),L.pathnameBase!=="/"&&(v=Ft([v,L.pathnameBase]))}return T}function Wa(o,c){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[d,u]=tm(o.path,o.caseSensitive,o.end),h=c.match(d);if(!h)return null;let v=h[0],T=v.replace(/(.)\/+$/,"$1"),w=h.slice(1);return{params:u.reduce((f,{paramName:C,isOptional:L},N)=>{if(C==="*"){let x=w[N]||"";T=v.slice(0,v.length-x.length).replace(/(.)\/+$/,"$1")}const G=w[N];return L&&!G?f[C]=void 0:f[C]=(G||"").replace(/%2F/g,"/"),f},{}),pathname:v,pathnameBase:T,pattern:o}}function tm(o,c=!1,d=!0){_t(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let u=[],h="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(T,w,S)=>(u.push({paramName:w,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(u.push({paramName:"*"}),h+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?h+="\\/*$":o!==""&&o!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,c?void 0:"i"),u]}function nm(o){try{return o.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return _t(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),o}}function Xt(o,c){if(c==="/")return o;if(!o.toLowerCase().startsWith(c.toLowerCase()))return null;let d=c.endsWith("/")?c.length-1:c.length,u=o.charAt(d);return u&&u!=="/"?null:o.slice(d)||"/"}function im(o,c="/"){let{pathname:d,search:u="",hash:h=""}=typeof o=="string"?Mi(o):o;return{pathname:d?d.startsWith("/")?d:lm(d,c):c,search:om(u),hash:sm(h)}}function lm(o,c){let d=c.replace(/\/+$/,"").split("/");return o.split("/").forEach(h=>{h===".."?d.length>1&&d.pop():h!=="."&&d.push(h)}),d.length>1?d.join("/"):"/"}function Rs(o,c,d,u){return`Cannot include a '${o}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function am(o){return o.filter((c,d)=>d===0||c.route.path&&c.route.path.length>0)}function Qg(o){let c=am(o);return c.map((d,u)=>u===c.length-1?d.pathname:d.pathnameBase)}function Fg(o,c,d,u=!1){let h;typeof o=="string"?h=Mi(o):(h={...o},Re(!h.pathname||!h.pathname.includes("?"),Rs("?","pathname","search",h)),Re(!h.pathname||!h.pathname.includes("#"),Rs("#","pathname","hash",h)),Re(!h.search||!h.search.includes("#"),Rs("#","search","hash",h)));let v=o===""||h.pathname==="",T=v?"/":h.pathname,w;if(T==null)w=d;else{let L=c.length-1;if(!u&&T.startsWith("..")){let N=T.split("/");for(;N[0]==="..";)N.shift(),L-=1;h.pathname=N.join("/")}w=L>=0?c[L]:"/"}let S=im(h,w),f=T&&T!=="/"&&T.endsWith("/"),C=(v||T===".")&&d.endsWith("/");return!S.pathname.endsWith("/")&&(f||C)&&(S.pathname+="/"),S}var Ft=o=>o.join("/").replace(/\/\/+/g,"/"),rm=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),om=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,sm=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function um(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var Xg=["POST","PUT","PATCH","DELETE"];new Set(Xg);var cm=["GET",...Xg];new Set(cm);var Oi=_.createContext(null);Oi.displayName="DataRouter";var $a=_.createContext(null);$a.displayName="DataRouterState";var Kg=_.createContext({isTransitioning:!1});Kg.displayName="ViewTransition";var dm=_.createContext(new Map);dm.displayName="Fetchers";var gm=_.createContext(null);gm.displayName="Await";var wt=_.createContext(null);wt.displayName="Navigation";var Ul=_.createContext(null);Ul.displayName="Location";var Ut=_.createContext({outlet:null,matches:[],isDataRoute:!1});Ut.displayName="Route";var ws=_.createContext(null);ws.displayName="RouteError";function hm(o,{relative:c}={}){Re(Nl(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:u}=_.useContext(wt),{hash:h,pathname:v,search:T}=kl(o,{relative:c}),w=v;return d!=="/"&&(w=v==="/"?d:Ft([d,v])),u.createHref({pathname:w,search:T,hash:h})}function Nl(){return _.useContext(Ul)!=null}function In(){return Re(Nl(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Ul).location}var Zg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Jg(o){_.useContext(wt).static||_.useLayoutEffect(o)}function fm(){let{isDataRoute:o}=_.useContext(Ut);return o?Om():pm()}function pm(){Re(Nl(),"useNavigate() may be used only in the context of a <Router> component.");let o=_.useContext(Oi),{basename:c,navigator:d}=_.useContext(wt),{matches:u}=_.useContext(Ut),{pathname:h}=In(),v=JSON.stringify(Qg(u)),T=_.useRef(!1);return Jg(()=>{T.current=!0}),_.useCallback((S,f={})=>{if(_t(T.current,Zg),!T.current)return;if(typeof S=="number"){d.go(S);return}let C=Fg(S,JSON.parse(v),h,f.relative==="path");o==null&&c!=="/"&&(C.pathname=C.pathname==="/"?c:Ft([c,C.pathname])),(f.replace?d.replace:d.push)(C,f.state,f)},[c,d,v,h,o])}_.createContext(null);function mm(){let{matches:o}=_.useContext(Ut),c=o[o.length-1];return c?c.params:{}}function kl(o,{relative:c}={}){let{matches:d}=_.useContext(Ut),{pathname:u}=In(),h=JSON.stringify(Qg(d));return _.useMemo(()=>Fg(o,JSON.parse(h),u,c==="path"),[o,h,u,c])}function vm(o,c){return Wg(o,c)}function Wg(o,c,d,u){var P;Re(Nl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=_.useContext(wt),{matches:v}=_.useContext(Ut),T=v[v.length-1],w=T?T.params:{},S=T?T.pathname:"/",f=T?T.pathnameBase:"/",C=T&&T.route;{let Y=C&&C.path||"";$g(S,!C||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${S}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let L=In(),N;if(c){let Y=typeof c=="string"?Mi(c):c;Re(f==="/"||((P=Y.pathname)==null?void 0:P.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),N=Y}else N=L;let G=N.pathname||"/",x=G;if(f!=="/"){let Y=f.replace(/^\//,"").split("/");x="/"+G.replace(/^\//,"").split("/").slice(Y.length).join("/")}let H=Yg(o,{pathname:x});_t(C||H!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),_t(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=Am(H&&H.map(Y=>Object.assign({},Y,{params:Object.assign({},w,Y.params),pathname:Ft([f,h.encodeLocation?h.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?f:Ft([f,h.encodeLocation?h.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),v,d,u);return c&&j?_.createElement(Ul.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},j):j}function ym(){let o=Mm(),c=um(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),d=o instanceof Error?o.stack:null,u="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:u},v={padding:"2px 4px",backgroundColor:u},T=null;return console.error("Error handled by React Router default ErrorBoundary:",o),T=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:v},"ErrorBoundary")," or"," ",_.createElement("code",{style:v},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},c),d?_.createElement("pre",{style:h},d):null,T)}var Sm=_.createElement(ym,null),bm=class extends _.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,c){return c.location!==o.location||c.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:c.error,location:c.location,revalidation:o.revalidation||c.revalidation}}componentDidCatch(o,c){console.error("React Router caught the following error during render",o,c)}render(){return this.state.error!==void 0?_.createElement(Ut.Provider,{value:this.props.routeContext},_.createElement(ws.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Em({routeContext:o,match:c,children:d}){let u=_.useContext(Oi);return u&&u.static&&u.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=c.route.id),_.createElement(Ut.Provider,{value:o},d)}function Am(o,c=[],d=null,u=null){if(o==null){if(!d)return null;if(d.errors)o=d.matches;else if(c.length===0&&!d.initialized&&d.matches.length>0)o=d.matches;else return null}let h=o,v=d==null?void 0:d.errors;if(v!=null){let S=h.findIndex(f=>f.route.id&&(v==null?void 0:v[f.route.id])!==void 0);Re(S>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`),h=h.slice(0,Math.min(h.length,S+1))}let T=!1,w=-1;if(d)for(let S=0;S<h.length;S++){let f=h[S];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(w=S),f.route.id){let{loaderData:C,errors:L}=d,N=f.route.loader&&!C.hasOwnProperty(f.route.id)&&(!L||L[f.route.id]===void 0);if(f.route.lazy||N){T=!0,w>=0?h=h.slice(0,w+1):h=[h[0]];break}}}return h.reduceRight((S,f,C)=>{let L,N=!1,G=null,x=null;d&&(L=v&&f.route.id?v[f.route.id]:void 0,G=f.route.errorElement||Sm,T&&(w<0&&C===0?($g("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,x=null):w===C&&(N=!0,x=f.route.hydrateFallbackElement||null)));let H=c.concat(h.slice(0,C+1)),j=()=>{let P;return L?P=G:N?P=x:f.route.Component?P=_.createElement(f.route.Component,null):f.route.element?P=f.route.element:P=S,_.createElement(Em,{match:f,routeContext:{outlet:S,matches:H,isDataRoute:d!=null},children:P})};return d&&(f.route.ErrorBoundary||f.route.errorElement||C===0)?_.createElement(bm,{location:d.location,revalidation:d.revalidation,component:G,error:L,children:j(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):j()},null)}function Us(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rm(o){let c=_.useContext(Oi);return Re(c,Us(o)),c}function Tm(o){let c=_.useContext($a);return Re(c,Us(o)),c}function Cm(o){let c=_.useContext(Ut);return Re(c,Us(o)),c}function Ns(o){let c=Cm(o),d=c.matches[c.matches.length-1];return Re(d.route.id,`${o} can only be used on routes that contain a unique "id"`),d.route.id}function Dm(){return Ns("useRouteId")}function Mm(){var u;let o=_.useContext(ws),c=Tm("useRouteError"),d=Ns("useRouteError");return o!==void 0?o:(u=c.errors)==null?void 0:u[d]}function Om(){let{router:o}=Rm("useNavigate"),c=Ns("useNavigate"),d=_.useRef(!1);return Jg(()=>{d.current=!0}),_.useCallback(async(h,v={})=>{_t(d.current,Zg),d.current&&(typeof h=="number"?o.navigate(h):await o.navigate(h,{fromRouteId:c,...v}))},[o,c])}var Ig={};function $g(o,c,d){!c&&!Ig[o]&&(Ig[o]=!0,_t(!1,d))}_.memo(_m);function _m({routes:o,future:c,state:d}){return Wg(o,void 0,d,c)}function Ds(o){Re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wm({basename:o="/",children:c=null,location:d,navigationType:u="POP",navigator:h,static:v=!1}){Re(!Nl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=o.replace(/^\/*/,"/"),w=_.useMemo(()=>({basename:T,navigator:h,static:v,future:{}}),[T,h,v]);typeof d=="string"&&(d=Mi(d));let{pathname:S="/",search:f="",hash:C="",state:L=null,key:N="default"}=d,G=_.useMemo(()=>{let x=Xt(S,T);return x==null?null:{location:{pathname:x,search:f,hash:C,state:L,key:N},navigationType:u}},[T,S,f,C,L,N,u]);return _t(G!=null,`<Router basename="${T}"> is not able to match the URL "${S}${f}${C}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:_.createElement(wt.Provider,{value:w},_.createElement(Ul.Provider,{children:c,value:G}))}function Um({children:o,location:c}){return vm(Ms(o),c)}function Ms(o,c=[]){let d=[];return _.Children.forEach(o,(u,h)=>{if(!_.isValidElement(u))return;let v=[...c,h];if(u.type===_.Fragment){d.push.apply(d,Ms(u.props.children,v));return}Re(u.type===Ds,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Re(!u.props.index||!u.props.children,"An index route cannot have child routes.");let T={id:u.props.id||v.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(T.children=Ms(u.props.children,v)),d.push(T)}),d}var Za="get",Ja="application/x-www-form-urlencoded";function er(o){return o!=null&&typeof o.tagName=="string"}function Nm(o){return er(o)&&o.tagName.toLowerCase()==="button"}function km(o){return er(o)&&o.tagName.toLowerCase()==="form"}function xm(o){return er(o)&&o.tagName.toLowerCase()==="input"}function Lm(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Pm(o,c){return o.button===0&&(!c||c==="_self")&&!Lm(o)}var Ka=null;function Bm(){if(Ka===null)try{new FormData(document.createElement("form"),0),Ka=!1}catch{Ka=!0}return Ka}var qm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ts(o){return o!=null&&!qm.has(o)?(_t(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ja}"`),null):o}function zm(o,c){let d,u,h,v,T;if(km(o)){let w=o.getAttribute("action");u=w?Xt(w,c):null,d=o.getAttribute("method")||Za,h=Ts(o.getAttribute("enctype"))||Ja,v=new FormData(o)}else if(Nm(o)||xm(o)&&(o.type==="submit"||o.type==="image")){let w=o.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=o.getAttribute("formaction")||w.getAttribute("action");if(u=S?Xt(S,c):null,d=o.getAttribute("formmethod")||w.getAttribute("method")||Za,h=Ts(o.getAttribute("formenctype"))||Ts(w.getAttribute("enctype"))||Ja,v=new FormData(w,o),!Bm()){let{name:f,type:C,value:L}=o;if(C==="image"){let N=f?`${f}.`:"";v.append(`${N}x`,"0"),v.append(`${N}y`,"0")}else f&&v.append(f,L)}}else{if(er(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Za,u=null,h=Ja,T=o}return v&&h==="text/plain"&&(T=v,v=void 0),{action:u,method:d.toLowerCase(),encType:h,formData:v,body:T}}function ks(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}async function Hm(o,c){if(o.id in c)return c[o.id];try{let d=await import(o.module);return c[o.id]=d,d}catch(d){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Im(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Gm(o,c,d){let u=await Promise.all(o.map(async h=>{let v=c.routes[h.route.id];if(v){let T=await Hm(v,d);return T.links?T.links():[]}return[]}));return Qm(u.flat(1).filter(Im).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function Gg(o,c,d,u,h,v){let T=(S,f)=>d[f]?S.route.id!==d[f].route.id:!0,w=(S,f)=>{var C;return d[f].pathname!==S.pathname||((C=d[f].route.path)==null?void 0:C.endsWith("*"))&&d[f].params["*"]!==S.params["*"]};return v==="assets"?c.filter((S,f)=>T(S,f)||w(S,f)):v==="data"?c.filter((S,f)=>{var L;let C=u.routes[S.route.id];if(!C||!C.hasLoader)return!1;if(T(S,f)||w(S,f))return!0;if(S.route.shouldRevalidate){let N=S.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:((L=d[0])==null?void 0:L.params)||{},nextUrl:new URL(o,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function Ym(o,c,{includeHydrateFallback:d}={}){return jm(o.map(u=>{let h=c.routes[u.route.id];if(!h)return[];let v=[h.module];return h.clientActionModule&&(v=v.concat(h.clientActionModule)),h.clientLoaderModule&&(v=v.concat(h.clientLoaderModule)),d&&h.hydrateFallbackModule&&(v=v.concat(h.hydrateFallbackModule)),h.imports&&(v=v.concat(h.imports)),v}).flat(1))}function jm(o){return[...new Set(o)]}function Vm(o){let c={},d=Object.keys(o).sort();for(let u of d)c[u]=o[u];return c}function Qm(o,c){let d=new Set;return new Set(c),o.reduce((u,h)=>{let v=JSON.stringify(Vm(h));return d.has(v)||(d.add(v),u.push({key:v,link:h})),u},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Fm=new Set([100,101,204,205]);function Xm(o,c){let d=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return d.pathname==="/"?d.pathname="_root.data":c&&Xt(d.pathname,c)==="/"?d.pathname=`${c.replace(/\/$/,"")}/_root.data`:d.pathname=`${d.pathname.replace(/\/$/,"")}.data`,d}function eh(){let o=_.useContext(Oi);return ks(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Km(){let o=_.useContext($a);return ks(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var xs=_.createContext(void 0);xs.displayName="FrameworkContext";function th(){let o=_.useContext(xs);return ks(o,"You must render this element inside a <HydratedRouter> element"),o}function Zm(o,c){let d=_.useContext(xs),[u,h]=_.useState(!1),[v,T]=_.useState(!1),{onFocus:w,onBlur:S,onMouseEnter:f,onMouseLeave:C,onTouchStart:L}=c,N=_.useRef(null);_.useEffect(()=>{if(o==="render"&&T(!0),o==="viewport"){let H=P=>{P.forEach(Y=>{T(Y.isIntersecting)})},j=new IntersectionObserver(H,{threshold:.5});return N.current&&j.observe(N.current),()=>{j.disconnect()}}},[o]),_.useEffect(()=>{if(u){let H=setTimeout(()=>{T(!0)},100);return()=>{clearTimeout(H)}}},[u]);let G=()=>{h(!0)},x=()=>{h(!1),T(!1)};return d?o!=="intent"?[v,N,{}]:[v,N,{onFocus:_l(w,G),onBlur:_l(S,x),onMouseEnter:_l(f,G),onMouseLeave:_l(C,x),onTouchStart:_l(L,G)}]:[!1,N,{}]}function _l(o,c){return d=>{o&&o(d),d.defaultPrevented||c(d)}}function Jm({page:o,...c}){let{router:d}=eh(),u=_.useMemo(()=>Yg(d.routes,o,d.basename),[d.routes,o,d.basename]);return u?_.createElement($m,{page:o,matches:u,...c}):null}function Wm(o){let{manifest:c,routeModules:d}=th(),[u,h]=_.useState([]);return _.useEffect(()=>{let v=!1;return Gm(o,c,d).then(T=>{v||h(T)}),()=>{v=!0}},[o,c,d]),u}function $m({page:o,matches:c,...d}){let u=In(),{manifest:h,routeModules:v}=th(),{basename:T}=eh(),{loaderData:w,matches:S}=Km(),f=_.useMemo(()=>Gg(o,c,S,h,u,"data"),[o,c,S,h,u]),C=_.useMemo(()=>Gg(o,c,S,h,u,"assets"),[o,c,S,h,u]),L=_.useMemo(()=>{if(o===u.pathname+u.search+u.hash)return[];let x=new Set,H=!1;if(c.forEach(P=>{var J;let Y=h.routes[P.route.id];!Y||!Y.hasLoader||(!f.some(re=>re.route.id===P.route.id)&&P.route.id in w&&((J=v[P.route.id])!=null&&J.shouldRevalidate)||Y.hasClientLoader?H=!0:x.add(P.route.id))}),x.size===0)return[];let j=Xm(o,T);return H&&x.size>0&&j.searchParams.set("_routes",c.filter(P=>x.has(P.route.id)).map(P=>P.route.id).join(",")),[j.pathname+j.search]},[T,w,u,h,f,c,o,v]),N=_.useMemo(()=>Ym(C,h),[C,h]),G=Wm(C);return _.createElement(_.Fragment,null,L.map(x=>_.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...d})),N.map(x=>_.createElement("link",{key:x,rel:"modulepreload",href:x,...d})),G.map(({key:x,link:H})=>_.createElement("link",{key:x,...H})))}function ev(...o){return c=>{o.forEach(d=>{typeof d=="function"?d(c):d!=null&&(d.current=c)})}}var nh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{nh&&(window.__reactRouterVersion="7.6.1")}catch{}function tv({basename:o,children:c,window:d}){let u=_.useRef();u.current==null&&(u.current=Hp({window:d,v5Compat:!0}));let h=u.current,[v,T]=_.useState({action:h.action,location:h.location}),w=_.useCallback(S=>{_.startTransition(()=>T(S))},[T]);return _.useLayoutEffect(()=>h.listen(w),[h,w]),_.createElement(wm,{basename:o,children:c,location:v.location,navigationType:v.action,navigator:h})}var ih=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lh=_.forwardRef(function({onClick:c,discover:d="render",prefetch:u="none",relative:h,reloadDocument:v,replace:T,state:w,target:S,to:f,preventScrollReset:C,viewTransition:L,...N},G){let{basename:x}=_.useContext(wt),H=typeof f=="string"&&ih.test(f),j,P=!1;if(typeof f=="string"&&H&&(j=f,nh))try{let Se=new URL(window.location.href),Fe=f.startsWith("//")?new URL(Se.protocol+f):new URL(f),ct=Xt(Fe.pathname,x);Fe.origin===Se.origin&&ct!=null?f=ct+Fe.search+Fe.hash:P=!0}catch{_t(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=hm(f,{relative:h}),[J,re,W]=Zm(u,N),we=lv(f,{replace:T,state:w,target:S,preventScrollReset:C,relative:h,viewTransition:L});function Te(Se){c&&c(Se),Se.defaultPrevented||we(Se)}let Me=_.createElement("a",{...N,...W,href:j||Y,onClick:P||v?c:Te,ref:ev(G,re),target:S,"data-discover":!H&&d==="render"?"true":void 0});return J&&!H?_.createElement(_.Fragment,null,Me,_.createElement(Jm,{page:Y})):Me});lh.displayName="Link";var Os=_.forwardRef(function({"aria-current":c="page",caseSensitive:d=!1,className:u="",end:h=!1,style:v,to:T,viewTransition:w,children:S,...f},C){let L=kl(T,{relative:f.relative}),N=In(),G=_.useContext($a),{navigator:x,basename:H}=_.useContext(wt),j=G!=null&&uv(L)&&w===!0,P=x.encodeLocation?x.encodeLocation(L).pathname:L.pathname,Y=N.pathname,J=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;d||(Y=Y.toLowerCase(),J=J?J.toLowerCase():null,P=P.toLowerCase()),J&&H&&(J=Xt(J,H)||J);const re=P!=="/"&&P.endsWith("/")?P.length-1:P.length;let W=Y===P||!h&&Y.startsWith(P)&&Y.charAt(re)==="/",we=J!=null&&(J===P||!h&&J.startsWith(P)&&J.charAt(P.length)==="/"),Te={isActive:W,isPending:we,isTransitioning:j},Me=W?c:void 0,Se;typeof u=="function"?Se=u(Te):Se=[u,W?"active":null,we?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let Fe=typeof v=="function"?v(Te):v;return _.createElement(lh,{...f,"aria-current":Me,className:Se,ref:C,style:Fe,to:T,viewTransition:w},typeof S=="function"?S(Te):S)});Os.displayName="NavLink";var nv=_.forwardRef(({discover:o="render",fetcherKey:c,navigate:d,reloadDocument:u,replace:h,state:v,method:T=Za,action:w,onSubmit:S,relative:f,preventScrollReset:C,viewTransition:L,...N},G)=>{let x=ov(),H=sv(w,{relative:f}),j=T.toLowerCase()==="get"?"get":"post",P=typeof w=="string"&&ih.test(w),Y=J=>{if(S&&S(J),J.defaultPrevented)return;J.preventDefault();let re=J.nativeEvent.submitter,W=(re==null?void 0:re.getAttribute("formmethod"))||T;x(re||J.currentTarget,{fetcherKey:c,method:W,navigate:d,replace:h,state:v,relative:f,preventScrollReset:C,viewTransition:L})};return _.createElement("form",{ref:G,method:j,action:H,onSubmit:u?S:Y,...N,"data-discover":!P&&o==="render"?"true":void 0})});nv.displayName="Form";function iv(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ah(o){let c=_.useContext(Oi);return Re(c,iv(o)),c}function lv(o,{target:c,replace:d,state:u,preventScrollReset:h,relative:v,viewTransition:T}={}){let w=fm(),S=In(),f=kl(o,{relative:v});return _.useCallback(C=>{if(Pm(C,c)){C.preventDefault();let L=d!==void 0?d:wl(S)===wl(f);w(o,{replace:L,state:u,preventScrollReset:h,relative:v,viewTransition:T})}},[S,w,f,d,u,c,o,h,v,T])}var av=0,rv=()=>`__${String(++av)}__`;function ov(){let{router:o}=ah("useSubmit"),{basename:c}=_.useContext(wt),d=Dm();return _.useCallback(async(u,h={})=>{let{action:v,method:T,encType:w,formData:S,body:f}=zm(u,c);if(h.navigate===!1){let C=h.fetcherKey||rv();await o.fetch(C,d,h.action||v,{preventScrollReset:h.preventScrollReset,formData:S,body:f,formMethod:h.method||T,formEncType:h.encType||w,flushSync:h.flushSync})}else await o.navigate(h.action||v,{preventScrollReset:h.preventScrollReset,formData:S,body:f,formMethod:h.method||T,formEncType:h.encType||w,replace:h.replace,state:h.state,fromRouteId:d,flushSync:h.flushSync,viewTransition:h.viewTransition})},[o,c,d])}function sv(o,{relative:c}={}){let{basename:d}=_.useContext(wt),u=_.useContext(Ut);Re(u,"useFormAction must be used inside a RouteContext");let[h]=u.matches.slice(-1),v={...kl(o||".",{relative:c})},T=In();if(o==null){v.search=T.search;let w=new URLSearchParams(v.search),S=w.getAll("index");if(S.some(C=>C==="")){w.delete("index"),S.filter(L=>L).forEach(L=>w.append("index",L));let C=w.toString();v.search=C?`?${C}`:""}}return(!o||o===".")&&h.route.index&&(v.search=v.search?v.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(v.pathname=v.pathname==="/"?d:Ft([d,v.pathname])),wl(v)}function uv(o,c={}){let d=_.useContext(Kg);Re(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=ah("useViewTransitionState"),h=kl(o,{relative:c.relative});if(!d.isTransitioning)return!1;let v=Xt(d.currentLocation.pathname,u)||d.currentLocation.pathname,T=Xt(d.nextLocation.pathname,u)||d.nextLocation.pathname;return Wa(h.pathname,T)!=null||Wa(h.pathname,v)!=null}[...Fm];const cv=[{name:"📖 Documentation Portal",href:"/docs/readme"},{name:"📋 Project Documentation",href:"/docs/project_documentation"},{name:"💼 Business Plan",href:"/docs/business_plan"},{name:"Changelog",href:"/docs/changelog"},{name:"📊 Executive Summary",href:"/docs/executive_summary"},{name:"🏗️ Architecture Diagrams",href:"/docs/architecture_diagrams"},{name:"🤝 Contributing to Business Services Hub",href:"/docs/contributing"},{name:"⚡ Features Detailed",href:"/docs/features_detailed"},{name:"🗺️ Development Roadmap",href:"/docs/roadmap"},{name:"🔒 Security Guide",href:"/docs/security_guide"},{name:"🚀 Setup &amp; Deployment Guide",href:"/docs/setup_deployment_guide"}],dv={readme:{title:"📖 Business Services Hub - Documentation Portal",content:`<h1 id="business-services-hub-documentation-portal">📖 Business Services Hub - Documentation Portal</h1>
<p>Welcome to the comprehensive documentation portal for the <strong>Business Services Hub</strong> - a modern, scalable platform connecting service providers with clients through an intuitive marketplace experience.</p>
<h2 id="about-this-documentation-portal">🎯 About This Documentation Portal</h2>
<p>This repository contains the complete documentation suite for the Business Services Hub project, including technical specifications, business plans, developer guides, and architectural diagrams. Whether you're a developer, stakeholder, investor, or administrator, you'll find the information you need to understand, contribute to, or invest in our platform.</p>
<h2 id="table-of-contents">📚 Table of Contents</h2>
<h3 id="core-documentation">📋 Core Documentation</h3>
<ul>
<li><strong><a href="/docs/PROJECT_DOCUMENTATION.md">Project Documentation</a></strong> - Complete 14-section technical overview</li>
<li><strong><a href="/docs/BUSINESS_PLAN.md">Business Plan</a></strong> - Comprehensive business strategy and financial projections</li>
<li><strong><a href="/docs/EXECUTIVE_SUMMARY.md">Executive Summary</a></strong> - 2-page investor snapshot</li>
<li><strong><a href="/docs/CHANGELOG.md">Changelog</a></strong> - Version history and release notes</li>
</ul>
<h3 id="technical-guides">🔧 Technical Guides</h3>
<ul>
<li><strong><a href="./docs/ARCHITECTURE_DIAGRAMS.md">Architecture Diagrams</a></strong> - Visual system architecture and data flow</li>
<li><strong><a href="./docs/FEATURES_DETAILED.md">Features Detailed</a></strong> - Complete feature documentation by user role</li>
<li><strong><a href="./docs/SETUP_DEPLOYMENT_GUIDE.md">Setup &amp; Deployment Guide</a></strong> - Development and production setup</li>
<li><strong><a href="./docs/SECURITY_GUIDE.md">Security Guide</a></strong> - Security policies and RLS implementation</li>
</ul>
<h3 id="community-development">🤝 Community &amp; Development</h3>
<ul>
<li><strong><a href="./docs/CONTRIBUTING.md">Contributing Guide</a></strong> - How to contribute to the project</li>
<li><strong><a href="./docs/ROADMAP.md">Roadmap</a></strong> - 4-phase development timeline and milestones</li>
</ul>
<h2 id="quick-start-for-developers">🚀 Quick Start for Developers</h2>
<p>Get started with the documentation:</p>
<pre><code class="language-bash"># Clone the documentation repository
git clone https://github.com/AbuAli85/business-services-hub-docs.git
cd business-services-hub-docs

# Install documentation tools (optional)
npm install

# View documentation locally
npm run serve
# Or use any markdown viewer/editor
</code></pre>
<p><strong>For the main application development:</strong></p>
<ul>
<li>See <a href="./docs/SETUP_DEPLOYMENT_GUIDE.html">Setup &amp; Deployment Guide</a> for complete setup instructions</li>
<li>Review <a href="./docs/ARCHITECTURE_DIAGRAMS.html">Architecture Diagrams</a> for system understanding</li>
</ul>
<p><strong>Prerequisites:</strong> Git, Markdown viewer (VS Code, Typora, etc.)</p>
<h2 id="documentation-by-audience">👥 Documentation by Audience</h2>
<h3 id="developers">🔨 Developers</h3>
<ul>
<li>Start with <a href="./docs/SETUP_DEPLOYMENT_GUIDE.html">Setup &amp; Deployment Guide</a></li>
<li>Review <a href="./docs/ARCHITECTURE_DIAGRAMS.html">Architecture Diagrams</a> for system understanding</li>
<li>Check <a href="./docs/CONTRIBUTING.html">Contributing Guide</a> for development standards</li>
<li>Explore <a href="./docs/FEATURES_DETAILED.html">Features Detailed</a> for implementation details</li>
</ul>
<h3 id="stakeholders-investors">💼 Stakeholders &amp; Investors</h3>
<ul>
<li>Read <a href="/docs/EXECUTIVE_SUMMARY.html">Executive Summary</a> for quick overview</li>
<li>Review <a href="/docs/BUSINESS_PLAN.html">Business Plan</a> for comprehensive strategy</li>
<li>Check <a href="./docs/ROADMAP.html">Roadmap</a> for growth timeline</li>
<li>Explore <a href="/docs/PROJECT_DOCUMENTATION.html">Project Documentation</a> for technical depth</li>
</ul>
<h3 id="administrators">🛡️ Administrators</h3>
<ul>
<li>Start with <a href="./docs/SECURITY_GUIDE.html">Security Guide</a></li>
<li>Review <a href="./docs/SETUP_DEPLOYMENT_GUIDE.html">Setup &amp; Deployment Guide</a> for production setup</li>
<li>Check <a href="./docs/FEATURES_DETAILED.html">Features Detailed</a> for admin capabilities</li>
<li>Explore <a href="/docs/PROJECT_DOCUMENTATION.html">Project Documentation</a> for system overview</li>
</ul>
<h2 id="project-overview">🏗️ Project Overview</h2>
<p>The Business Services Hub is a comprehensive marketplace platform that enables:</p>
<ul>
<li><strong>Service Discovery</strong>: Clients can browse and search for services by category, location, and rating</li>
<li><strong>Provider Management</strong>: Service providers can create profiles, manage services, and track bookings</li>
<li><strong>Booking System</strong>: Integrated scheduling and payment processing</li>
<li><strong>Review &amp; Rating</strong>: Trust-building through user feedback and ratings</li>
<li><strong>Admin Dashboard</strong>: Comprehensive platform management and analytics</li>
</ul>
<h2 id="technology-stack">🛠️ Technology Stack</h2>
<ul>
<li><strong>Frontend</strong>: Next.js 14, React 18, TypeScript, Tailwind CSS</li>
<li><strong>Backend</strong>: Supabase (PostgreSQL, Auth, Real-time)</li>
<li><strong>Deployment</strong>: Vercel, Railway, Docker</li>
<li><strong>Payments</strong>: Stripe integration</li>
<li><strong>Monitoring</strong>: Vercel Analytics, Sentry</li>
</ul>
<h2 id="key-features">📊 Key Features</h2>
<table>
<thead>
<tr>
<th>Feature Category</th>
<th>Description</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>User Management</strong></td>
<td>Authentication, profiles, role-based access</td>
<td>✅ Complete</td>
</tr>
<tr>
<td><strong>Service Marketplace</strong></td>
<td>Browse, search, filter services</td>
<td>✅ Complete</td>
</tr>
<tr>
<td><strong>Booking System</strong></td>
<td>Schedule appointments, manage availability</td>
<td>✅ Complete</td>
</tr>
<tr>
<td><strong>Payment Processing</strong></td>
<td>Secure payments via Stripe</td>
<td>✅ Complete</td>
</tr>
<tr>
<td><strong>Review System</strong></td>
<td>Rate and review services</td>
<td>✅ Complete</td>
</tr>
<tr>
<td><strong>Admin Dashboard</strong></td>
<td>Platform management and analytics</td>
<td>✅ Complete</td>
</tr>
</tbody>
</table>
<h2 id="contributing">🤝 Contributing</h2>
<p>We welcome contributions! Please see our <a href="./docs/CONTRIBUTING.md">Contributing Guide</a> for:</p>
<ul>
<li>Development setup</li>
<li>Code standards</li>
<li>Pull request process</li>
<li>Issue reporting</li>
</ul>
<h2 id="support-contact">📞 Support &amp; Contact</h2>
<ul>
<li><strong>Documentation Issues</strong>: <a href="https://github.com/your-org/business-services-hub-docs/issues">Create an issue</a></li>
<li><strong>Technical Support</strong>: <a href="mailto:support@abuali.com">Contact our team</a></li>
<li><strong>Business Inquiries</strong>: <a href="mailto:business@abuali.com">Contact our business team</a></li>
</ul>
<h2 id="license">📄 License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
<hr />
<p><strong>Built with ❤️ by the Business Services Hub Team</strong></p>
<p><em>Last updated: September 2025</em></p>`},project_documentation:{title:"📋 Business Services Hub - Project Documentation",content:`<h1 id="business-services-hub-project-documentation">📋 Business Services Hub - Project Documentation</h1>
<h2 id="table-of-contents">Table of Contents</h2>
<ol>
<li><a href="#1-overview--value-propositions">Overview &amp; Value Propositions</a></li>
<li><a href="#2-technology-stack">Technology Stack</a></li>
<li><a href="#3-system-architecture">System Architecture</a></li>
<li><a href="#4-user-roles--permissions">User Roles &amp; Permissions</a></li>
<li><a href="#5-core-features">Core Features</a></li>
<li><a href="#6-database-schema">Database Schema</a></li>
<li><a href="#7-api-documentation">API Documentation</a></li>
<li><a href="#8-component-architecture">Component Architecture</a></li>
<li><a href="#9-deployment-guide">Deployment Guide</a></li>
<li><a href="#10-development-setup">Development Setup</a></li>
<li><a href="#11-security-features">Security Features</a></li>
<li><a href="#12-performance-optimizations">Performance Optimizations</a></li>
<li><a href="#13-roadmap">Roadmap</a></li>
<li><a href="#14-future-phases">Future Phases</a></li>
</ol>
<hr />
<h2 id="1-overview-value-propositions">1. Overview &amp; Value Propositions</h2>
<h3 id="project-mission">Project Mission</h3>
<p>The Business Services Hub is a comprehensive marketplace platform that connects service providers with clients, enabling seamless discovery, booking, and management of professional services across various industries.</p>
<h3 id="key-value-propositions">Key Value Propositions</h3>
<h4 id="for-service-providers">For Service Providers</h4>
<ul>
<li><strong>Increased Visibility</strong>: Reach a broader audience through our marketplace</li>
<li><strong>Streamlined Operations</strong>: Integrated booking, payment, and client management tools</li>
<li><strong>Professional Credibility</strong>: Verified profiles and review system build trust</li>
<li><strong>Flexible Scheduling</strong>: Customizable availability and automated booking system</li>
</ul>
<h4 id="for-clients">For Clients</h4>
<ul>
<li><strong>Service Discovery</strong>: Easy browsing and filtering of services by category, location, and rating</li>
<li><strong>Trusted Providers</strong>: Verified profiles with reviews and ratings</li>
<li><strong>Convenient Booking</strong>: One-click booking with integrated payment processing</li>
<li><strong>Quality Assurance</strong>: Built-in review and rating system ensures service quality</li>
</ul>
<h4 id="for-platform-administrators">For Platform Administrators</h4>
<ul>
<li><strong>Comprehensive Management</strong>: Full control over platform operations and user management</li>
<li><strong>Analytics &amp; Insights</strong>: Detailed reporting on platform usage and performance</li>
<li><strong>Revenue Generation</strong>: Commission-based revenue model with multiple income streams</li>
<li><strong>Scalable Infrastructure</strong>: Built to handle growth from startup to enterprise scale</li>
</ul>
<h3 id="market-opportunity">Market Opportunity</h3>
<ul>
<li><strong>Total Addressable Market</strong>: $2.5 trillion global services market</li>
<li><strong>Serviceable Market</strong>: $150 billion digital services marketplace</li>
<li><strong>Target Market</strong>: $15 billion professional services platform market</li>
</ul>
<hr />
<h2 id="2-technology-stack">2. Technology Stack</h2>
<h3 id="frontend-technologies">Frontend Technologies</h3>
<ul>
<li><strong>Framework</strong>: Next.js 14 (App Router)</li>
<li><strong>UI Library</strong>: React 18 with TypeScript</li>
<li><strong>Styling</strong>: Tailwind CSS with custom components</li>
<li><strong>State Management</strong>: Zustand for client state</li>
<li><strong>Forms</strong>: React Hook Form with Zod validation</li>
<li><strong>UI Components</strong>: Radix UI primitives</li>
<li><strong>Icons</strong>: Lucide React</li>
</ul>
<h3 id="backend-technologies">Backend Technologies</h3>
<ul>
<li><strong>Database</strong>: PostgreSQL (via Supabase)</li>
<li><strong>Authentication</strong>: Supabase Auth with JWT</li>
<li><strong>Real-time</strong>: Supabase Realtime subscriptions</li>
<li><strong>File Storage</strong>: Supabase Storage</li>
<li><strong>API</strong>: RESTful APIs with TypeScript</li>
<li><strong>Email</strong>: Resend for transactional emails</li>
</ul>
<h3 id="development-deployment">Development &amp; Deployment</h3>
<ul>
<li><strong>Version Control</strong>: Git with GitHub</li>
<li><strong>Package Manager</strong>: npm</li>
<li><strong>Linting</strong>: ESLint with TypeScript rules</li>
<li><strong>Formatting</strong>: Prettier</li>
<li><strong>Testing</strong>: Jest and React Testing Library</li>
<li><strong>Deployment</strong>: Vercel (frontend), Railway (backend)</li>
<li><strong>Monitoring</strong>: Vercel Analytics, Sentry</li>
</ul>
<h3 id="third-party-integrations">Third-Party Integrations</h3>
<ul>
<li><strong>Payments</strong>: Stripe for payment processing</li>
<li><strong>Maps</strong>: Google Maps API for location services</li>
<li><strong>Analytics</strong>: Google Analytics 4</li>
<li><strong>Email Marketing</strong>: Mailchimp integration</li>
</ul>
<hr />
<h2 id="3-system-architecture">3. System Architecture</h2>
<p>For detailed architectural diagrams and visual representations, see <a href="./docs/ARCHITECTURE_DIAGRAMS.md">Architecture Diagrams</a>.</p>
<h3 id="high-level-architecture">High-Level Architecture</h3>
<p>The Business Services Hub follows a modern, scalable architecture pattern:</p>
<ul>
<li><strong>Frontend</strong>: Next.js application deployed on Vercel</li>
<li><strong>Backend</strong>: Supabase as Backend-as-a-Service</li>
<li><strong>Database</strong>: PostgreSQL with Row Level Security (RLS)</li>
<li><strong>CDN</strong>: Vercel Edge Network for global content delivery</li>
<li><strong>Monitoring</strong>: Integrated analytics and error tracking</li>
</ul>
<h3 id="key-architectural-principles">Key Architectural Principles</h3>
<ul>
<li><strong>Microservices-Ready</strong>: Modular design allows for future service extraction</li>
<li><strong>API-First</strong>: All functionality exposed through well-defined APIs</li>
<li><strong>Security-First</strong>: RLS policies and JWT authentication throughout</li>
<li><strong>Performance-Optimized</strong>: Server-side rendering and edge caching</li>
<li><strong>Scalable</strong>: Designed to handle millions of users and transactions</li>
</ul>
<hr />
<h2 id="4-user-roles-permissions">4. User Roles &amp; Permissions</h2>
<h3 id="user-role-hierarchy">User Role Hierarchy</h3>
<table>
<thead>
<tr>
<th>Role</th>
<th>Permissions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Client</strong></td>
<td>View services, book appointments, leave reviews</td>
<td>End users seeking services</td>
</tr>
<tr>
<td><strong>Provider</strong></td>
<td>Manage profile, services, bookings, availability</td>
<td>Service providers offering services</td>
</tr>
<tr>
<td><strong>Admin</strong></td>
<td>Full platform management, user management, analytics</td>
<td>Platform administrators</td>
</tr>
<tr>
<td><strong>Super Admin</strong></td>
<td>System configuration, billing, security settings</td>
<td>Highest level access</td>
</tr>
</tbody>
</table>
<h3 id="permission-matrix">Permission Matrix</h3>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Client</th>
<th>Provider</th>
<th>Admin</th>
<th>Super Admin</th>
</tr>
</thead>
<tbody>
<tr>
<td>View Services</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>Book Services</td>
<td>✅</td>
<td>❌</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>Manage Profile</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>Manage Services</td>
<td>❌</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>View Analytics</td>
<td>❌</td>
<td>Limited</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>Manage Users</td>
<td>❌</td>
<td>❌</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>System Settings</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
<td>✅</td>
</tr>
</tbody>
</table>
<h3 id="row-level-security-rls-policies">Row Level Security (RLS) Policies</h3>
<ul>
<li><strong>User Data</strong>: Users can only access their own data</li>
<li><strong>Service Data</strong>: Providers can only manage their own services</li>
<li><strong>Booking Data</strong>: Users can only see their own bookings</li>
<li><strong>Admin Data</strong>: Admin users have elevated access based on role</li>
</ul>
<hr />
<h2 id="5-core-features">5. Core Features</h2>
<p>For detailed feature documentation, see <a href="./docs/FEATURES_DETAILED.md">Features Detailed</a>.</p>
<h3 id="client-features">Client Features</h3>
<ul>
<li><strong>Service Discovery</strong>: Browse and search services by category, location, price</li>
<li><strong>Provider Profiles</strong>: View detailed provider information and reviews</li>
<li><strong>Booking System</strong>: Schedule appointments with real-time availability</li>
<li><strong>Payment Processing</strong>: Secure payment handling via Stripe</li>
<li><strong>Review &amp; Rating</strong>: Rate and review completed services</li>
<li><strong>Booking Management</strong>: View and manage upcoming appointments</li>
</ul>
<h3 id="provider-features">Provider Features</h3>
<ul>
<li><strong>Profile Management</strong>: Create and maintain professional profiles</li>
<li><strong>Service Management</strong>: Add, edit, and manage service offerings</li>
<li><strong>Availability Management</strong>: Set working hours and availability</li>
<li><strong>Booking Management</strong>: View and manage incoming bookings</li>
<li><strong>Earnings Tracking</strong>: Monitor revenue and payment history</li>
<li><strong>Client Communication</strong>: Messaging system with clients</li>
</ul>
<h3 id="admin-features">Admin Features</h3>
<ul>
<li><strong>User Management</strong>: Manage all users and their roles</li>
<li><strong>Service Moderation</strong>: Approve and moderate service listings</li>
<li><strong>Analytics Dashboard</strong>: Comprehensive platform analytics</li>
<li><strong>Financial Management</strong>: Monitor transactions and revenue</li>
<li><strong>Content Management</strong>: Manage platform content and settings</li>
<li><strong>Support Tools</strong>: Handle user support and disputes</li>
</ul>
<hr />
<h2 id="6-database-schema">6. Database Schema</h2>
<h3 id="core-tables">Core Tables</h3>
<h4 id="users-table">Users Table</h4>
<pre><code class="language-sql">CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  role user_role NOT NULL DEFAULT 'client',
  profile_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
</code></pre>
<h4 id="services-table">Services Table</h4>
<pre><code class="language-sql">CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  duration_minutes INTEGER NOT NULL,
  location JSONB,
  availability JSONB,
  status service_status DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
</code></pre>
<h4 id="bookings-table">Bookings Table</h4>
<pre><code class="language-sql">CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES users(id) ON DELETE CASCADE,
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  provider_id UUID REFERENCES users(id) ON DELETE CASCADE,
  scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
  status booking_status DEFAULT 'pending',
  payment_intent_id VARCHAR(255),
  total_amount DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
</code></pre>
<h3 id="relationships">Relationships</h3>
<ul>
<li><strong>One-to-Many</strong>: Users → Services (Provider can have multiple services)</li>
<li><strong>Many-to-Many</strong>: Users ↔ Bookings (Clients and Providers through bookings)</li>
<li><strong>One-to-Many</strong>: Services → Bookings (Service can have multiple bookings)</li>
</ul>
<hr />
<h2 id="7-api-documentation">7. API Documentation</h2>
<h3 id="authentication-endpoints">Authentication Endpoints</h3>
<ul>
<li><code>POST /api/auth/login</code> - User login</li>
<li><code>POST /api/auth/register</code> - User registration</li>
<li><code>POST /api/auth/logout</code> - User logout</li>
<li><code>GET /api/auth/me</code> - Get current user</li>
</ul>
<h3 id="service-endpoints">Service Endpoints</h3>
<ul>
<li><code>GET /api/services</code> - List all services (with filtering)</li>
<li><code>GET /api/services/:id</code> - Get service details</li>
<li><code>POST /api/services</code> - Create new service (Provider only)</li>
<li><code>PUT /api/services/:id</code> - Update service (Provider only)</li>
<li><code>DELETE /api/services/:id</code> - Delete service (Provider only)</li>
</ul>
<h3 id="booking-endpoints">Booking Endpoints</h3>
<ul>
<li><code>GET /api/bookings</code> - List user bookings</li>
<li><code>POST /api/bookings</code> - Create new booking</li>
<li><code>PUT /api/bookings/:id</code> - Update booking status</li>
<li><code>DELETE /api/bookings/:id</code> - Cancel booking</li>
</ul>
<h3 id="admin-endpoints">Admin Endpoints</h3>
<ul>
<li><code>GET /api/admin/users</code> - List all users</li>
<li><code>PUT /api/admin/users/:id</code> - Update user role</li>
<li><code>GET /api/admin/analytics</code> - Get platform analytics</li>
<li><code>GET /api/admin/revenue</code> - Get revenue reports</li>
</ul>
<h3 id="api-response-format">API Response Format</h3>
<pre><code class="language-json">{
  &quot;success&quot;: true,
  &quot;data&quot;: {},
  &quot;message&quot;: &quot;Operation completed successfully&quot;,
  &quot;timestamp&quot;: &quot;2025-01-13T10:30:00Z&quot;
}
</code></pre>
<hr />
<h2 id="8-component-architecture">8. Component Architecture</h2>
<h3 id="frontend-component-structure">Frontend Component Structure</h3>
<pre><code>src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── forms/              # Form components
│   ├── layout/             # Layout components
│   └── features/           # Feature-specific components
├── pages/
│   ├── api/                # API routes
│   ├── auth/               # Authentication pages
│   ├── dashboard/          # Dashboard pages
│   └── services/           # Service-related pages
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── store/                  # State management
└── types/                  # TypeScript type definitions
</code></pre>
<h3 id="key-components">Key Components</h3>
<ul>
<li><strong>ServiceCard</strong>: Displays service information and booking options</li>
<li><strong>BookingForm</strong>: Handles service booking with validation</li>
<li><strong>ProviderDashboard</strong>: Provider-specific dashboard and management</li>
<li><strong>AdminPanel</strong>: Administrative interface for platform management</li>
<li><strong>UserProfile</strong>: User profile management and settings</li>
</ul>
<hr />
<h2 id="9-deployment-guide">9. Deployment Guide</h2>
<p>For detailed setup and deployment instructions, see <a href="./docs/SETUP_DEPLOYMENT_GUIDE.md">Setup &amp; Deployment Guide</a>.</p>
<h3 id="production-deployment">Production Deployment</h3>
<ul>
<li><strong>Frontend</strong>: Deployed on Vercel with automatic CI/CD</li>
<li><strong>Database</strong>: Supabase managed PostgreSQL</li>
<li><strong>CDN</strong>: Vercel Edge Network for global performance</li>
<li><strong>Monitoring</strong>: Integrated analytics and error tracking</li>
</ul>
<h3 id="environment-configuration">Environment Configuration</h3>
<ul>
<li><strong>Development</strong>: Local development with Supabase local instance</li>
<li><strong>Staging</strong>: Preview deployments on Vercel</li>
<li><strong>Production</strong>: Production environment with full monitoring</li>
</ul>
<hr />
<h2 id="10-development-setup">10. Development Setup</h2>
<h3 id="prerequisites">Prerequisites</h3>
<ul>
<li>Node.js 18+ and npm</li>
<li>Git</li>
<li>Supabase CLI</li>
<li>Code editor (VS Code recommended)</li>
</ul>
<h3 id="local-development">Local Development</h3>
<pre><code class="language-bash"># Clone repository
git clone https://github.com/your-org/business-services-hub.git
cd business-services-hub

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start Supabase local development
supabase start

# Run database migrations
npm run db:migrate

# Start development server
npm run dev
</code></pre>
<h3 id="development-workflow">Development Workflow</h3>
<ol>
<li>Create feature branch from <code>main</code></li>
<li>Make changes with proper testing</li>
<li>Run linting and type checking</li>
<li>Create pull request for review</li>
<li>Merge after approval and CI passes</li>
</ol>
<hr />
<h2 id="11-security-features">11. Security Features</h2>
<p>For comprehensive security documentation, see <a href="./docs/SECURITY_GUIDE.md">Security Guide</a>.</p>
<h3 id="authentication-authorization">Authentication &amp; Authorization</h3>
<ul>
<li><strong>JWT Tokens</strong>: Secure token-based authentication</li>
<li><strong>Role-Based Access</strong>: Granular permissions based on user roles</li>
<li><strong>Row Level Security</strong>: Database-level access control</li>
<li><strong>Session Management</strong>: Secure session handling and timeout</li>
</ul>
<h3 id="data-protection">Data Protection</h3>
<ul>
<li><strong>Input Validation</strong>: Comprehensive input sanitization</li>
<li><strong>SQL Injection Prevention</strong>: Parameterized queries and RLS</li>
<li><strong>XSS Protection</strong>: Content Security Policy and input encoding</li>
<li><strong>CSRF Protection</strong>: Token-based CSRF protection</li>
</ul>
<h3 id="infrastructure-security">Infrastructure Security</h3>
<ul>
<li><strong>HTTPS Everywhere</strong>: All communications encrypted</li>
<li><strong>Secure Headers</strong>: Security headers for all responses</li>
<li><strong>Rate Limiting</strong>: API rate limiting to prevent abuse</li>
<li><strong>Monitoring</strong>: Real-time security monitoring and alerting</li>
</ul>
<hr />
<h2 id="12-performance-optimizations">12. Performance Optimizations</h2>
<h3 id="frontend-optimizations">Frontend Optimizations</h3>
<ul>
<li><strong>Server-Side Rendering</strong>: Next.js SSR for better SEO and performance</li>
<li><strong>Image Optimization</strong>: Next.js Image component with automatic optimization</li>
<li><strong>Code Splitting</strong>: Dynamic imports for reduced bundle size</li>
<li><strong>Caching</strong>: Aggressive caching strategies for static assets</li>
</ul>
<h3 id="backend-optimizations">Backend Optimizations</h3>
<ul>
<li><strong>Database Indexing</strong>: Optimized indexes for common queries</li>
<li><strong>Connection Pooling</strong>: Efficient database connection management</li>
<li><strong>Query Optimization</strong>: Optimized SQL queries with proper joins</li>
<li><strong>CDN Integration</strong>: Global content delivery for static assets</li>
</ul>
<h3 id="monitoring-analytics">Monitoring &amp; Analytics</h3>
<ul>
<li><strong>Performance Metrics</strong>: Core Web Vitals monitoring</li>
<li><strong>Error Tracking</strong>: Real-time error monitoring with Sentry</li>
<li><strong>Usage Analytics</strong>: User behavior and platform usage analytics</li>
<li><strong>Uptime Monitoring</strong>: 24/7 uptime monitoring and alerting</li>
</ul>
<hr />
<h2 id="13-roadmap">13. Roadmap</h2>
<p>For detailed roadmap and timeline, see <a href="./docs/ROADMAP.md">Roadmap</a>.</p>
<h3 id="phase-1-core-platform-q1-2025">Phase 1: Core Platform (Q1 2025)</h3>
<ul>
<li>✅ User authentication and profiles</li>
<li>✅ Service listing and discovery</li>
<li>✅ Basic booking system</li>
<li>✅ Payment integration</li>
<li>✅ Review and rating system</li>
</ul>
<h3 id="phase-2-enhanced-features-q2-2025">Phase 2: Enhanced Features (Q2 2025)</h3>
<ul>
<li>🔄 Advanced search and filtering</li>
<li>🔄 Real-time notifications</li>
<li>🔄 Mobile app development</li>
<li>🔄 Advanced analytics dashboard</li>
<li>🔄 Multi-language support</li>
</ul>
<h3 id="phase-3-enterprise-features-q3-2025">Phase 3: Enterprise Features (Q3 2025)</h3>
<ul>
<li>📋 Enterprise user management</li>
<li>📋 Advanced reporting and analytics</li>
<li>📋 API marketplace</li>
<li>📋 White-label solutions</li>
<li>📋 Advanced security features</li>
</ul>
<h3 id="phase-4-global-expansion-q4-2025">Phase 4: Global Expansion (Q4 2025)</h3>
<ul>
<li>📋 International payment processing</li>
<li>📋 Multi-currency support</li>
<li>📋 Global compliance features</li>
<li>📋 Advanced AI features</li>
<li>📋 Marketplace expansion</li>
</ul>
<hr />
<h2 id="14-future-phases">14. Future Phases</h2>
<h3 id="long-term-vision-2026">Long-term Vision (2026+)</h3>
<ul>
<li><strong>AI-Powered Matching</strong>: Machine learning for service recommendations</li>
<li><strong>Blockchain Integration</strong>: Decentralized identity and payment systems</li>
<li><strong>IoT Integration</strong>: Smart device integration for service delivery</li>
<li><strong>Global Marketplace</strong>: Expansion to international markets</li>
<li><strong>Enterprise Solutions</strong>: Custom enterprise implementations</li>
</ul>
<h3 id="innovation-areas">Innovation Areas</h3>
<ul>
<li><strong>Virtual Reality</strong>: VR-based service previews and consultations</li>
<li><strong>Augmented Reality</strong>: AR tools for service delivery</li>
<li><strong>Voice Integration</strong>: Voice-activated booking and management</li>
<li><strong>Predictive Analytics</strong>: AI-driven business insights</li>
<li><strong>Automation</strong>: Automated service delivery and management</li>
</ul>
<hr />
<h2 id="conclusion">Conclusion</h2>
<p>The Business Services Hub represents a comprehensive solution for the modern services marketplace, combining cutting-edge technology with user-centric design. Our platform is built to scale from startup to enterprise, providing value to all stakeholders while maintaining security, performance, and reliability.</p>
<p>For more detailed information on specific aspects of the platform, please refer to the specialized documentation files linked throughout this document.</p>
<hr />
<p><em>Last updated: January 2025</em>
<em>Document version: 1.0.0</em></p>`},business_plan:{title:"💼 Business Services Hub - Business Plan",content:`<h1 id="business-services-hub-business-plan">💼 Business Services Hub - Business Plan</h1>
<h2 id="table-of-contents">Table of Contents</h2>
<ol>
<li><a href="#1-executive-summary">Executive Summary</a></li>
<li><a href="#2-market-analysis">Market Analysis</a></li>
<li><a href="#3-productservice-description">Product/Service Description</a></li>
<li><a href="#4-marketing-strategy">Marketing Strategy</a></li>
<li><a href="#5-operational-plan">Operational Plan</a></li>
<li><a href="#6-financial-projections">Financial Projections</a></li>
<li><a href="#7-risk-analysis">Risk Analysis</a></li>
<li><a href="#8-implementation-timeline">Implementation Timeline</a></li>
<li><a href="#9-success-metrics--kpis">Success Metrics &amp; KPIs</a></li>
<li><a href="#10-conclusion--investment-opportunity">Conclusion &amp; Investment Opportunity</a></li>
</ol>
<hr />
<h2 id="1-executive-summary">1. Executive Summary</h2>
<h3 id="company-overview">Company Overview</h3>
<p><strong>Business Services Hub</strong> is a comprehensive digital marketplace platform that connects service providers with clients across various professional service industries. Our mission is to revolutionize how professional services are discovered, booked, and delivered in the digital age.</p>
<h3 id="mission-statement">Mission Statement</h3>
<p>To create the world's most trusted and efficient marketplace for professional services, enabling seamless connections between skilled providers and clients while fostering economic growth and professional excellence.</p>
<h3 id="vision-statement">Vision Statement</h3>
<p>To become the global standard for professional service marketplaces, empowering millions of service providers and clients worldwide to connect, collaborate, and succeed.</p>
<h3 id="key-business-metrics">Key Business Metrics</h3>
<ul>
<li><strong>Target Market</strong>: $15 billion professional services platform market</li>
<li><strong>Revenue Model</strong>: Commission-based (5-15% per transaction)</li>
<li><strong>Projected Year 1 Revenue</strong>: $2.5M</li>
<li><strong>Projected Year 3 Revenue</strong>: $25M</li>
<li><strong>Break-even Point</strong>: Month 18</li>
<li><strong>Funding Required</strong>: $5M Series A</li>
</ul>
<h3 id="competitive-advantage">Competitive Advantage</h3>
<ul>
<li><strong>Technology-First Approach</strong>: Modern, scalable platform built for growth</li>
<li><strong>Comprehensive Solution</strong>: End-to-end service management and delivery</li>
<li><strong>Trust &amp; Safety</strong>: Advanced verification and review systems</li>
<li><strong>User Experience</strong>: Intuitive, mobile-first design</li>
<li><strong>Data-Driven</strong>: AI-powered matching and analytics</li>
</ul>
<hr />
<h2 id="2-market-analysis">2. Market Analysis</h2>
<h3 id="market-size-opportunity">Market Size &amp; Opportunity</h3>
<h4 id="total-addressable-market-tam">Total Addressable Market (TAM)</h4>
<ul>
<li><strong>Global Services Market</strong>: $2.5 trillion</li>
<li><strong>Digital Services Market</strong>: $150 billion</li>
<li><strong>Professional Services Platform Market</strong>: $15 billion</li>
<li><strong>Annual Growth Rate</strong>: 12.5%</li>
</ul>
<h4 id="serviceable-addressable-market-sam">Serviceable Addressable Market (SAM)</h4>
<ul>
<li><strong>Target Geographic Markets</strong>: North America, Europe, Australia</li>
<li><strong>Target Service Categories</strong>: Professional services, consulting, creative services, technical services</li>
<li><strong>Market Size</strong>: $8.5 billion</li>
<li><strong>Growth Rate</strong>: 15% annually</li>
</ul>
<h4 id="serviceable-obtainable-market-som">Serviceable Obtainable Market (SOM)</h4>
<ul>
<li><strong>Year 1 Target</strong>: 0.1% market share ($8.5M)</li>
<li><strong>Year 3 Target</strong>: 1.0% market share ($85M)</li>
<li><strong>Year 5 Target</strong>: 3.0% market share ($255M)</li>
</ul>
<h3 id="market-trends">Market Trends</h3>
<h4 id="growth-drivers">Growth Drivers</h4>
<ul>
<li><strong>Digital Transformation</strong>: Accelerated adoption of digital platforms</li>
<li><strong>Gig Economy Growth</strong>: Increasing freelance and contract work</li>
<li><strong>Remote Work</strong>: Global talent pool accessibility</li>
<li><strong>Mobile-First</strong>: Mobile commerce growth</li>
<li><strong>Trust &amp; Safety</strong>: Demand for verified, secure platforms</li>
</ul>
<h4 id="market-challenges">Market Challenges</h4>
<ul>
<li><strong>Competition</strong>: Established players with significant resources</li>
<li><strong>Trust Building</strong>: Need to establish credibility and user trust</li>
<li><strong>Regulatory</strong>: Varying regulations across markets</li>
<li><strong>Quality Control</strong>: Maintaining service quality at scale</li>
</ul>
<h3 id="competitive-landscape">Competitive Landscape</h3>
<h4 id="direct-competitors">Direct Competitors</h4>
<table>
<thead>
<tr>
<th>Company</th>
<th>Market Share</th>
<th>Strengths</th>
<th>Weaknesses</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Upwork</strong></td>
<td>35%</td>
<td>Large user base, established brand</td>
<td>Complex pricing, poor UX</td>
</tr>
<tr>
<td><strong>Fiverr</strong></td>
<td>25%</td>
<td>Simple pricing, good UX</td>
<td>Limited to creative services</td>
</tr>
<tr>
<td><strong>Freelancer</strong></td>
<td>15%</td>
<td>Global reach, competitive pricing</td>
<td>Quality control issues</td>
</tr>
<tr>
<td><strong>Toptal</strong></td>
<td>10%</td>
<td>High-quality talent</td>
<td>Limited to top-tier services</td>
</tr>
<tr>
<td><strong>Others</strong></td>
<td>15%</td>
<td>Specialized niches</td>
<td>Limited scale</td>
</tr>
</tbody>
</table>
<h4 id="competitive-positioning">Competitive Positioning</h4>
<ul>
<li><strong>Premium Quality</strong>: Focus on verified, high-quality service providers</li>
<li><strong>Comprehensive Solution</strong>: Full-service platform beyond just matching</li>
<li><strong>User Experience</strong>: Superior mobile and web experience</li>
<li><strong>Local Focus</strong>: Strong local market presence and support</li>
</ul>
<hr />
<h2 id="3-productservice-description">3. Product/Service Description</h2>
<h3 id="core-platform-features">Core Platform Features</h3>
<h4 id="for-service-providers">For Service Providers</h4>
<ul>
<li><strong>Professional Profiles</strong>: Comprehensive provider profiles with verification</li>
<li><strong>Service Management</strong>: Easy creation and management of service offerings</li>
<li><strong>Booking System</strong>: Integrated scheduling and availability management</li>
<li><strong>Payment Processing</strong>: Secure, automated payment handling</li>
<li><strong>Analytics Dashboard</strong>: Detailed performance and earnings analytics</li>
<li><strong>Client Communication</strong>: Built-in messaging and communication tools</li>
</ul>
<h4 id="for-clients">For Clients</h4>
<ul>
<li><strong>Service Discovery</strong>: Advanced search and filtering capabilities</li>
<li><strong>Provider Verification</strong>: Trusted, verified service providers</li>
<li><strong>Easy Booking</strong>: One-click booking with real-time availability</li>
<li><strong>Secure Payments</strong>: Integrated payment processing with protection</li>
<li><strong>Review System</strong>: Comprehensive rating and review system</li>
<li><strong>Booking Management</strong>: Easy management of appointments and services</li>
</ul>
<h4 id="for-administrators">For Administrators</h4>
<ul>
<li><strong>Platform Management</strong>: Comprehensive admin dashboard</li>
<li><strong>User Management</strong>: Advanced user and role management</li>
<li><strong>Analytics &amp; Reporting</strong>: Detailed platform analytics and insights</li>
<li><strong>Content Moderation</strong>: Tools for content and service moderation</li>
<li><strong>Financial Management</strong>: Revenue tracking and financial reporting</li>
</ul>
<h3 id="technology-stack">Technology Stack</h3>
<ul>
<li><strong>Frontend</strong>: Next.js 14, React 18, TypeScript</li>
<li><strong>Backend</strong>: Supabase (PostgreSQL, Auth, Real-time)</li>
<li><strong>Payments</strong>: Stripe integration</li>
<li><strong>Deployment</strong>: Vercel, Railway</li>
<li><strong>Monitoring</strong>: Vercel Analytics, Sentry</li>
</ul>
<h3 id="unique-value-propositions">Unique Value Propositions</h3>
<ol>
<li><strong>End-to-End Solution</strong>: Complete service lifecycle management</li>
<li><strong>Trust &amp; Safety</strong>: Advanced verification and security measures</li>
<li><strong>User Experience</strong>: Intuitive, mobile-first design</li>
<li><strong>Local Focus</strong>: Strong local market presence and support</li>
<li><strong>Data-Driven</strong>: AI-powered matching and insights</li>
</ol>
<hr />
<h2 id="4-marketing-strategy">4. Marketing Strategy</h2>
<h3 id="target-audience">Target Audience</h3>
<h4 id="primary-markets">Primary Markets</h4>
<ul>
<li><strong>Service Providers</strong>: Freelancers, consultants, agencies, small businesses</li>
<li><strong>Clients</strong>: Small to medium businesses, entrepreneurs, individuals</li>
<li><strong>Geographic Focus</strong>: North America, Europe, Australia</li>
</ul>
<h4 id="customer-segments">Customer Segments</h4>
<ul>
<li><strong>Freelancers</strong>: Independent professionals seeking clients</li>
<li><strong>Small Agencies</strong>: Growing agencies needing client acquisition</li>
<li><strong>SMBs</strong>: Small businesses requiring professional services</li>
<li><strong>Entrepreneurs</strong>: Startups and entrepreneurs needing specialized services</li>
</ul>
<h3 id="marketing-channels">Marketing Channels</h3>
<h4 id="digital-marketing-70-of-budget">Digital Marketing (70% of budget)</h4>
<ul>
<li><strong>Search Engine Marketing</strong>: Google Ads, Bing Ads</li>
<li><strong>Social Media Marketing</strong>: LinkedIn, Facebook, Instagram, Twitter</li>
<li><strong>Content Marketing</strong>: Blog, SEO, thought leadership</li>
<li><strong>Email Marketing</strong>: Nurture campaigns, newsletters</li>
<li><strong>Influencer Partnerships</strong>: Industry influencers and thought leaders</li>
</ul>
<h4 id="traditional-marketing-20-of-budget">Traditional Marketing (20% of budget)</h4>
<ul>
<li><strong>Industry Events</strong>: Conferences, trade shows, networking events</li>
<li><strong>Partnerships</strong>: Strategic partnerships with complementary businesses</li>
<li><strong>PR &amp; Media</strong>: Press releases, media coverage, thought leadership</li>
</ul>
<h4 id="direct-sales-10-of-budget">Direct Sales (10% of budget)</h4>
<ul>
<li><strong>Enterprise Sales</strong>: Direct sales to large clients</li>
<li><strong>Partnership Development</strong>: Strategic partnership development</li>
<li><strong>Referral Programs</strong>: User referral and incentive programs</li>
</ul>
<h3 id="pricing-strategy">Pricing Strategy</h3>
<h4 id="commission-structure">Commission Structure</h4>
<ul>
<li><strong>Basic Services</strong>: 5% commission</li>
<li><strong>Premium Services</strong>: 10% commission</li>
<li><strong>Enterprise Services</strong>: 15% commission</li>
<li><strong>Volume Discounts</strong>: Reduced rates for high-volume providers</li>
</ul>
<h4 id="additional-revenue-streams">Additional Revenue Streams</h4>
<ul>
<li><strong>Premium Memberships</strong>: Enhanced features for providers</li>
<li><strong>Featured Listings</strong>: Promoted service listings</li>
<li><strong>Advertising</strong>: Sponsored content and advertisements</li>
<li><strong>API Access</strong>: Third-party API access and integrations</li>
</ul>
<hr />
<h2 id="5-operational-plan">5. Operational Plan</h2>
<h3 id="organizational-structure">Organizational Structure</h3>
<h4 id="core-team-year-1">Core Team (Year 1)</h4>
<ul>
<li><strong>CEO/Founder</strong>: Strategic leadership and vision</li>
<li><strong>CTO</strong>: Technology leadership and development</li>
<li><strong>Head of Product</strong>: Product strategy and development</li>
<li><strong>Head of Marketing</strong>: Marketing strategy and execution</li>
<li><strong>Head of Operations</strong>: Operations and customer success</li>
<li><strong>Senior Developers (3)</strong>: Full-stack development</li>
<li><strong>Designer</strong>: UI/UX design and user experience</li>
<li><strong>Customer Success Manager</strong>: User support and success</li>
</ul>
<h4 id="growth-team-year-2-3">Growth Team (Year 2-3)</h4>
<ul>
<li><strong>VP of Sales</strong>: Sales strategy and execution</li>
<li><strong>VP of Engineering</strong>: Engineering leadership and scaling</li>
<li><strong>Head of Data</strong>: Data science and analytics</li>
<li><strong>Head of Security</strong>: Security and compliance</li>
<li><strong>Additional Developers (5)</strong>: Scaling development team</li>
<li><strong>Marketing Team (3)</strong>: Content, social media, growth</li>
<li><strong>Customer Success Team (3)</strong>: Customer support and success</li>
</ul>
<h3 id="key-operations">Key Operations</h3>
<h4 id="technology-operations">Technology Operations</h4>
<ul>
<li><strong>Development</strong>: Agile development with 2-week sprints</li>
<li><strong>Quality Assurance</strong>: Comprehensive testing and quality control</li>
<li><strong>DevOps</strong>: Automated deployment and monitoring</li>
<li><strong>Security</strong>: Regular security audits and updates</li>
</ul>
<h4 id="customer-operations">Customer Operations</h4>
<ul>
<li><strong>Onboarding</strong>: Streamlined user onboarding process</li>
<li><strong>Support</strong>: 24/7 customer support via chat, email, phone</li>
<li><strong>Success</strong>: Proactive customer success management</li>
<li><strong>Community</strong>: User community and engagement programs</li>
</ul>
<h4 id="business-operations">Business Operations</h4>
<ul>
<li><strong>Finance</strong>: Financial management and reporting</li>
<li><strong>Legal</strong>: Legal compliance and contract management</li>
<li><strong>HR</strong>: Human resources and talent management</li>
<li><strong>Partnerships</strong>: Strategic partnership development</li>
</ul>
<hr />
<h2 id="6-financial-projections">6. Financial Projections</h2>
<h3 id="revenue-projections">Revenue Projections</h3>
<h4 id="year-1-2025">Year 1 (2025)</h4>
<ul>
<li><strong>Q1</strong>: $150K (Launch and early adoption)</li>
<li><strong>Q2</strong>: $400K (Growth and market penetration)</li>
<li><strong>Q3</strong>: $750K (Scale and optimization)</li>
<li><strong>Q4</strong>: $1.2M (Holiday season and growth)</li>
<li><strong>Total Year 1</strong>: $2.5M</li>
</ul>
<h4 id="year-2-2026">Year 2 (2026)</h4>
<ul>
<li><strong>Q1</strong>: $1.5M (Continued growth)</li>
<li><strong>Q2</strong>: $2.2M (Market expansion)</li>
<li><strong>Q3</strong>: $3.0M (Feature expansion)</li>
<li><strong>Q4</strong>: $4.0M (Holiday season)</li>
<li><strong>Total Year 2</strong>: $10.7M</li>
</ul>
<h4 id="year-3-2027">Year 3 (2027)</h4>
<ul>
<li><strong>Q1</strong>: $4.5M (International expansion)</li>
<li><strong>Q2</strong>: $6.0M (New markets)</li>
<li><strong>Q3</strong>: $7.5M (Enterprise features)</li>
<li><strong>Q4</strong>: $9.0M (Holiday season)</li>
<li><strong>Total Year 3</strong>: $27M</li>
</ul>
<h3 id="cost-structure">Cost Structure</h3>
<h4 id="year-1-costs">Year 1 Costs</h4>
<ul>
<li><strong>Personnel</strong>: $1.8M (70% of costs)</li>
<li><strong>Technology</strong>: $300K (Infrastructure, tools, licenses)</li>
<li><strong>Marketing</strong>: $400K (Digital marketing, events, PR)</li>
<li><strong>Operations</strong>: $200K (Office, legal, admin)</li>
<li><strong>Total Year 1</strong>: $2.7M</li>
</ul>
<h4 id="year-2-costs">Year 2 Costs</h4>
<ul>
<li><strong>Personnel</strong>: $4.2M (Team expansion)</li>
<li><strong>Technology</strong>: $600K (Scaling infrastructure)</li>
<li><strong>Marketing</strong>: $1.2M (Increased marketing spend)</li>
<li><strong>Operations</strong>: $500K (Expanded operations)</li>
<li><strong>Total Year 2</strong>: $6.5M</li>
</ul>
<h4 id="year-3-costs">Year 3 Costs</h4>
<ul>
<li><strong>Personnel</strong>: $8.5M (Full team)</li>
<li><strong>Technology</strong>: $1.2M (Enterprise infrastructure)</li>
<li><strong>Marketing</strong>: $2.5M (Global marketing)</li>
<li><strong>Operations</strong>: $1.0M (Global operations)</li>
<li><strong>Total Year 3</strong>: $13.2M</li>
</ul>
<h3 id="profitability-analysis">Profitability Analysis</h3>
<table>
<thead>
<tr>
<th>Year</th>
<th>Revenue</th>
<th>Costs</th>
<th>Gross Profit</th>
<th>Margin</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Year 1</strong></td>
<td>$2.5M</td>
<td>$2.7M</td>
<td>-$200K</td>
<td>-8%</td>
</tr>
<tr>
<td><strong>Year 2</strong></td>
<td>$10.7M</td>
<td>$6.5M</td>
<td>$4.2M</td>
<td>39%</td>
</tr>
<tr>
<td><strong>Year 3</strong></td>
<td>$27M</td>
<td>$13.2M</td>
<td>$13.8M</td>
<td>51%</td>
</tr>
</tbody>
</table>
<h3 id="funding-requirements">Funding Requirements</h3>
<h4 id="series-a-funding-5m">Series A Funding: $5M</h4>
<ul>
<li><strong>Product Development</strong>: $2M (40%)</li>
<li><strong>Marketing &amp; Sales</strong>: $1.5M (30%)</li>
<li><strong>Operations</strong>: $1M (20%)</li>
<li><strong>Working Capital</strong>: $500K (10%)</li>
</ul>
<h4 id="use-of-funds">Use of Funds</h4>
<ul>
<li><strong>Technology Development</strong>: Enhanced platform features and mobile app</li>
<li><strong>Market Expansion</strong>: Geographic expansion and user acquisition</li>
<li><strong>Team Building</strong>: Key hires in engineering, marketing, and sales</li>
<li><strong>Operations</strong>: Scaling infrastructure and customer success</li>
</ul>
<hr />
<h2 id="7-risk-analysis">7. Risk Analysis</h2>
<h3 id="market-risks">Market Risks</h3>
<h4 id="competitive-risk-medium">Competitive Risk (Medium)</h4>
<ul>
<li><strong>Threat</strong>: Established competitors with significant resources</li>
<li><strong>Mitigation</strong>: Focus on differentiation and superior user experience</li>
<li><strong>Probability</strong>: Medium</li>
<li><strong>Impact</strong>: Medium</li>
</ul>
<h4 id="market-saturation-low">Market Saturation (Low)</h4>
<ul>
<li><strong>Threat</strong>: Market becoming oversaturated with similar platforms</li>
<li><strong>Mitigation</strong>: Focus on specific niches and superior execution</li>
<li><strong>Probability</strong>: Low</li>
<li><strong>Impact</strong>: High</li>
</ul>
<h3 id="technology-risks">Technology Risks</h3>
<h4 id="scalability-risk-medium">Scalability Risk (Medium)</h4>
<ul>
<li><strong>Threat</strong>: Platform unable to handle rapid growth</li>
<li><strong>Mitigation</strong>: Cloud-native architecture and proactive scaling</li>
<li><strong>Probability</strong>: Medium</li>
<li><strong>Impact</strong>: High</li>
</ul>
<h4 id="security-risk-high">Security Risk (High)</h4>
<ul>
<li><strong>Threat</strong>: Data breaches or security vulnerabilities</li>
<li><strong>Mitigation</strong>: Comprehensive security measures and regular audits</li>
<li><strong>Probability</strong>: Medium</li>
<li><strong>Impact</strong>: High</li>
</ul>
<h3 id="operational-risks">Operational Risks</h3>
<h4 id="talent-acquisition-medium">Talent Acquisition (Medium)</h4>
<ul>
<li><strong>Threat</strong>: Difficulty attracting and retaining key talent</li>
<li><strong>Mitigation</strong>: Competitive compensation and strong company culture</li>
<li><strong>Probability</strong>: Medium</li>
<li><strong>Impact</strong>: Medium</li>
</ul>
<h4 id="regulatory-risk-low">Regulatory Risk (Low)</h4>
<ul>
<li><strong>Threat</strong>: Changing regulations affecting platform operations</li>
<li><strong>Mitigation</strong>: Proactive compliance and legal monitoring</li>
<li><strong>Probability</strong>: Low</li>
<li><strong>Impact</strong>: Medium</li>
</ul>
<h3 id="financial-risks">Financial Risks</h3>
<h4 id="funding-risk-medium">Funding Risk (Medium)</h4>
<ul>
<li><strong>Threat</strong>: Difficulty raising additional funding</li>
<li><strong>Mitigation</strong>: Strong financial performance and clear path to profitability</li>
<li><strong>Probability</strong>: Medium</li>
<li><strong>Impact</strong>: High</li>
</ul>
<h4 id="revenue-risk-medium">Revenue Risk (Medium)</h4>
<ul>
<li><strong>Threat</strong>: Revenue projections not met</li>
<li><strong>Mitigation</strong>: Conservative projections and multiple revenue streams</li>
<li><strong>Probability</strong>: Medium</li>
<li><strong>Impact</strong>: High</li>
</ul>
<hr />
<h2 id="8-implementation-timeline">8. Implementation Timeline</h2>
<h3 id="phase-1-foundation-months-1-6">Phase 1: Foundation (Months 1-6)</h3>
<ul>
<li><strong>Month 1-2</strong>: Team building and initial development</li>
<li><strong>Month 3-4</strong>: Core platform development</li>
<li><strong>Month 5-6</strong>: Beta testing and refinement</li>
</ul>
<h3 id="phase-2-launch-months-7-12">Phase 2: Launch (Months 7-12)</h3>
<ul>
<li><strong>Month 7</strong>: Public launch and initial marketing</li>
<li><strong>Month 8-9</strong>: User acquisition and feedback</li>
<li><strong>Month 10-12</strong>: Feature enhancements and optimization</li>
</ul>
<h3 id="phase-3-growth-months-13-24">Phase 3: Growth (Months 13-24)</h3>
<ul>
<li><strong>Month 13-15</strong>: Market expansion and scaling</li>
<li><strong>Month 16-18</strong>: Advanced features and mobile app</li>
<li><strong>Month 19-24</strong>: International expansion and enterprise features</li>
</ul>
<h3 id="phase-4-scale-months-25-36">Phase 4: Scale (Months 25-36)</h3>
<ul>
<li><strong>Month 25-30</strong>: Global expansion and partnerships</li>
<li><strong>Month 31-36</strong>: AI features and advanced analytics</li>
</ul>
<h3 id="key-milestones">Key Milestones</h3>
<ul>
<li><strong>Month 6</strong>: Beta launch with 100 users</li>
<li><strong>Month 12</strong>: 1,000 active users, $100K monthly revenue</li>
<li><strong>Month 18</strong>: 10,000 active users, $500K monthly revenue</li>
<li><strong>Month 24</strong>: 50,000 active users, $1M monthly revenue</li>
<li><strong>Month 36</strong>: 200,000 active users, $3M monthly revenue</li>
</ul>
<hr />
<h2 id="9-success-metrics-kpis">9. Success Metrics &amp; KPIs</h2>
<h3 id="user-metrics">User Metrics</h3>
<ul>
<li><strong>Monthly Active Users (MAU)</strong>: Target 200K by Year 3</li>
<li><strong>User Retention Rate</strong>: Target 70% monthly retention</li>
<li><strong>User Acquisition Cost (UAC)</strong>: Target &lt;$50 per user</li>
<li><strong>Lifetime Value (LTV)</strong>: Target $500 per user</li>
<li><strong>LTV/CAC Ratio</strong>: Target 10:1 ratio</li>
</ul>
<h3 id="revenue-metrics">Revenue Metrics</h3>
<ul>
<li><strong>Monthly Recurring Revenue (MRR)</strong>: Target $3M by Year 3</li>
<li><strong>Annual Recurring Revenue (ARR)</strong>: Target $36M by Year 3</li>
<li><strong>Average Revenue Per User (ARPU)</strong>: Target $15 per month</li>
<li><strong>Gross Revenue Retention</strong>: Target 95%</li>
<li><strong>Net Revenue Retention</strong>: Target 120%</li>
</ul>
<h3 id="platform-metrics">Platform Metrics</h3>
<ul>
<li><strong>Transaction Volume</strong>: Target $50M annually by Year 3</li>
<li><strong>Commission Rate</strong>: Target 8% average</li>
<li><strong>Payment Success Rate</strong>: Target 99.5%</li>
<li><strong>Platform Uptime</strong>: Target 99.9%</li>
<li><strong>Customer Satisfaction</strong>: Target 4.5/5 stars</li>
</ul>
<h3 id="business-metrics">Business Metrics</h3>
<ul>
<li><strong>Market Share</strong>: Target 1% by Year 3</li>
<li><strong>Geographic Coverage</strong>: 10 countries by Year 3</li>
<li><strong>Service Categories</strong>: 50+ categories by Year 3</li>
<li><strong>Provider Verification Rate</strong>: Target 95%</li>
<li><strong>Client Satisfaction</strong>: Target 90%</li>
</ul>
<hr />
<h2 id="10-conclusion-investment-opportunity">10. Conclusion &amp; Investment Opportunity</h2>
<h3 id="investment-opportunity">Investment Opportunity</h3>
<p>The Business Services Hub represents a compelling investment opportunity in the rapidly growing professional services marketplace sector. With a clear path to profitability, strong competitive positioning, and experienced leadership team, we are positioned to capture significant market share and deliver strong returns to investors.</p>
<h3 id="key-investment-highlights">Key Investment Highlights</h3>
<h4 id="market-opportunity">Market Opportunity</h4>
<ul>
<li><strong>Large, Growing Market</strong>: $15B market growing at 15% annually</li>
<li><strong>Underserved Segments</strong>: Opportunities in specialized service categories</li>
<li><strong>Global Expansion</strong>: Potential for international market penetration</li>
</ul>
<h4 id="competitive-advantages">Competitive Advantages</h4>
<ul>
<li><strong>Technology Leadership</strong>: Modern, scalable platform architecture</li>
<li><strong>User Experience</strong>: Superior mobile and web experience</li>
<li><strong>Trust &amp; Safety</strong>: Advanced verification and security measures</li>
<li><strong>Comprehensive Solution</strong>: End-to-end service management</li>
</ul>
<h4 id="financial-projections">Financial Projections</h4>
<ul>
<li><strong>Strong Growth</strong>: 10x revenue growth from Year 1 to Year 3</li>
<li><strong>Path to Profitability</strong>: Break-even by Month 18</li>
<li><strong>High Margins</strong>: 51% gross margins by Year 3</li>
<li><strong>Multiple Revenue Streams</strong>: Diversified revenue model</li>
</ul>
<h4 id="experienced-team">Experienced Team</h4>
<ul>
<li><strong>Proven Leadership</strong>: Experienced founders and advisors</li>
<li><strong>Technical Excellence</strong>: Strong engineering and product team</li>
<li><strong>Market Expertise</strong>: Deep understanding of target markets</li>
<li><strong>Execution Track Record</strong>: History of successful product launches</li>
</ul>
<h3 id="funding-requirements_1">Funding Requirements</h3>
<p>We are seeking <strong>$5M in Series A funding</strong> to accelerate growth and capture market opportunity. The funding will be used for:</p>
<ul>
<li><strong>Product Development</strong>: Enhanced features and mobile app</li>
<li><strong>Market Expansion</strong>: Geographic expansion and user acquisition</li>
<li><strong>Team Building</strong>: Key hires in engineering, marketing, and sales</li>
<li><strong>Operations</strong>: Scaling infrastructure and customer success</li>
</ul>
<h3 id="expected-returns">Expected Returns</h3>
<p>Based on our financial projections and market analysis, we expect to deliver:</p>
<ul>
<li><strong>Year 3 Revenue</strong>: $27M</li>
<li><strong>Year 3 Valuation</strong>: $150M+ (5.5x revenue multiple)</li>
<li><strong>Investor Returns</strong>: 10-15x return on investment</li>
<li><strong>Exit Strategy</strong>: Strategic acquisition or IPO within 5-7 years</li>
</ul>
<h3 id="next-steps">Next Steps</h3>
<p>We invite interested investors to:</p>
<ol>
<li><strong>Review Detailed Financials</strong>: Comprehensive financial models and projections</li>
<li><strong>Meet the Team</strong>: Direct access to founders and key team members</li>
<li><strong>Product Demo</strong>: Live demonstration of the platform</li>
<li><strong>Due Diligence</strong>: Access to technical and business documentation</li>
<li><strong>Investment Discussion</strong>: Terms and investment structure</li>
</ol>
<hr />
<p><strong>Contact Information:</strong></p>
<ul>
<li><strong>Email</strong>: investors@abuali.com</li>
<li><strong>Phone</strong>: +1 (555) 123-4567</li>
<li><strong>Website</strong>: www.abuali.com</li>
<li><strong>LinkedIn</strong>: linkedin.com/company/business-services-hub</li>
</ul>
<hr />
<p><em>This business plan is confidential and proprietary. Distribution is restricted to authorized parties only.</em></p>
<p><em>Last updated: September 2025</em>
<em>Document version: 1.0.0</em></p>`},changelog:{title:"Changelog",content:`<h1 id="changelog">Changelog</h1>
<p>All notable changes to the Business Services Hub project will be documented in this file.</p>
<p>The format is based on <a href="https://keepachangelog.com/en/1.0.0/">Keep a Changelog</a>,
and this project adheres to <a href="https://semver.org/spec/v2.0.0.html">Semantic Versioning</a>.</p>
<h2 id="unreleased">[Unreleased]</h2>
<h3 id="added">Added</h3>
<ul>
<li>Complete documentation portal with comprehensive suite</li>
<li>Business plan and financial projections</li>
<li>Technical architecture documentation</li>
<li>Security and deployment guides</li>
<li>Contributing guidelines and development standards</li>
<li>4-phase development roadmap with milestones</li>
</ul>
<h2 id="100-2025-01-13">[1.0.0] - 2025-01-13</h2>
<h3 id="added_1">Added</h3>
<ul>
<li>Initial documentation portal with full suite</li>
<li>README.md as documentation index and portal homepage</li>
<li>PROJECT_DOCUMENTATION.md with 14 comprehensive sections</li>
<li>BUSINESS_PLAN.md with detailed business strategy and financial projections</li>
<li>EXECUTIVE_SUMMARY.md for investors and strategic partners</li>
<li>CHANGELOG.md for version history tracking</li>
<li>docs/ARCHITECTURE_DIAGRAMS.md with Mermaid.js system diagrams</li>
<li>docs/FEATURES_DETAILED.md with feature-by-feature documentation</li>
<li>docs/SETUP_DEPLOYMENT_GUIDE.md with development and production setup</li>
<li>docs/SECURITY_GUIDE.md with security policies and RLS implementation</li>
<li>docs/CONTRIBUTING.md with contribution guidelines and development standards</li>
<li>docs/ROADMAP.md with 4-phase development timeline</li>
</ul>
<h3 id="features">Features</h3>
<ul>
<li>Complete documentation structure for Business Services Hub</li>
<li>Professional business-class documentation formatting</li>
<li>Cross-referenced documentation with internal linking</li>
<li>Mermaid.js diagrams for visual system representation</li>
<li>Comprehensive business plan with financial projections</li>
<li>Investor-ready executive summary</li>
<li>Technical documentation for developers</li>
<li>Security and deployment guides for administrators</li>
</ul>
<h3 id="documentation">Documentation</h3>
<ul>
<li>Added comprehensive README.md as documentation portal</li>
<li>Created 14-section technical project documentation</li>
<li>Developed detailed business plan with market analysis</li>
<li>Included executive summary for investor presentations</li>
<li>Added architecture diagrams with Mermaid.js</li>
<li>Created feature documentation organized by user roles</li>
<li>Developed setup and deployment guides</li>
<li>Added security guide with RLS policies</li>
<li>Created contributing guidelines for developers</li>
<li>Added 4-phase roadmap with milestones</li>
</ul>
<h3 id="structure">Structure</h3>
<ul>
<li>Organized documentation into logical sections</li>
<li>Created docs/ subdirectory for technical guides</li>
<li>Implemented consistent markdown formatting</li>
<li>Added table of contents for all major documents</li>
<li>Created cross-references between related documents</li>
<li>Established professional documentation standards</li>
</ul>
<hr />
<h2 id="version-history">Version History</h2>
<table>
<thead>
<tr>
<th>Version</th>
<th>Date</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.0.0</td>
<td>2025-01-13</td>
<td>Initial documentation portal release</td>
</tr>
</tbody>
</table>
<hr />
<h2 id="release-notes">Release Notes</h2>
<h3 id="v100-initial-documentation-portal">v1.0.0 - Initial Documentation Portal</h3>
<p>This is the initial release of the Business Services Hub documentation portal. This release includes:</p>
<ul>
<li><strong>Complete Documentation Suite</strong>: All essential documentation files for the project</li>
<li><strong>Business Documentation</strong>: Comprehensive business plan and executive summary</li>
<li><strong>Technical Documentation</strong>: Detailed technical specifications and guides</li>
<li><strong>Developer Resources</strong>: Setup guides, contributing guidelines, and architecture docs</li>
<li><strong>Visual Documentation</strong>: Mermaid.js diagrams for system architecture</li>
<li><strong>Professional Formatting</strong>: Business-class documentation with consistent styling</li>
</ul>
<p>This release establishes the foundation for all future documentation updates and provides a comprehensive resource for developers, stakeholders, investors, and administrators.</p>
<hr />
<h2 id="future-releases">Future Releases</h2>
<h3 id="planned-for-v110">Planned for v1.1.0</h3>
<ul>
<li>[ ] Add API documentation with interactive examples</li>
<li>[ ] Include video tutorials and walkthroughs</li>
<li>[ ] Add troubleshooting guides and FAQ sections</li>
<li>[ ] Create user onboarding documentation</li>
<li>[ ] Add performance benchmarking documentation</li>
</ul>
<h3 id="planned-for-v120">Planned for v1.2.0</h3>
<ul>
<li>[ ] Add internationalization documentation</li>
<li>[ ] Include compliance and regulatory guides</li>
<li>[ ] Create disaster recovery documentation</li>
<li>[ ] Add monitoring and alerting guides</li>
<li>[ ] Include backup and restore procedures</li>
</ul>
<h3 id="planned-for-v200">Planned for v2.0.0</h3>
<ul>
<li>[ ] Complete platform launch documentation</li>
<li>[ ] Add production deployment guides</li>
<li>[ ] Include scaling and performance optimization</li>
<li>[ ] Create enterprise features documentation</li>
<li>[ ] Add integration and API documentation</li>
</ul>
<hr />
<h2 id="contributing-to-changelog">Contributing to Changelog</h2>
<p>When adding new entries to this changelog:</p>
<ol>
<li><strong>Follow the format</strong>: Use the established format with proper headings and bullet points</li>
<li><strong>Be descriptive</strong>: Provide clear descriptions of what was added, changed, or removed</li>
<li><strong>Include dates</strong>: Always include the release date in YYYY-MM-DD format</li>
<li><strong>Categorize changes</strong>: Use the standard categories (Added, Changed, Deprecated, Removed, Fixed, Security)</li>
<li><strong>Link to issues</strong>: Reference related issues or pull requests when applicable</li>
<li><strong>Update version</strong>: Increment version numbers according to semantic versioning</li>
</ol>
<hr />
<h2 id="support">Support</h2>
<p>For questions about this changelog or the documentation:</p>
<ul>
<li><strong>Documentation Issues</strong>: <a href="https://github.com/your-org/business-services-hub-docs/issues">Create an issue</a></li>
<li><strong>Technical Support</strong>: <a href="mailto:support@businessserviceshub.com">Contact our team</a></li>
<li><strong>Business Inquiries</strong>: <a href="mailto:business@businessserviceshub.com">Contact our business team</a></li>
</ul>
<hr />
<p><em>Last updated: January 2025</em>
<em>Changelog version: 1.0.0</em></p>`},executive_summary:{title:"📊 Business Services Hub - Executive Summary",content:`<h1 id="business-services-hub-executive-summary">📊 Business Services Hub - Executive Summary</h1>
<p><em>For Investors &amp; Strategic Partners</em></p>
<hr />
<h2 id="mission-vision">Mission &amp; Vision</h2>
<p><strong>Mission</strong>: To create the world's most trusted and efficient marketplace for professional services, enabling seamless connections between skilled providers and clients while fostering economic growth and professional excellence.</p>
<p><strong>Vision</strong>: To become the global standard for professional service marketplaces, empowering millions of service providers and clients worldwide to connect, collaborate, and succeed.</p>
<hr />
<h2 id="market-opportunity">Market Opportunity</h2>
<h3 id="massive-market-size">Massive Market Size</h3>
<ul>
<li><strong>Total Addressable Market</strong>: $2.5 trillion global services market</li>
<li><strong>Serviceable Market</strong>: $15 billion professional services platform market</li>
<li><strong>Growth Rate</strong>: 15% annual growth, accelerating post-pandemic</li>
<li><strong>Market Gap</strong>: Fragmented market with poor user experience and limited trust</li>
</ul>
<h3 id="market-drivers">Market Drivers</h3>
<ul>
<li><strong>Digital Transformation</strong>: 73% of businesses accelerating digital adoption</li>
<li><strong>Gig Economy Growth</strong>: 57 million freelancers in the US alone</li>
<li><strong>Remote Work Revolution</strong>: Global talent pool accessibility</li>
<li><strong>Trust &amp; Safety Demand</strong>: 89% of users prioritize verified providers</li>
</ul>
<hr />
<h2 id="competitive-edge">Competitive Edge</h2>
<h3 id="technology-leadership">Technology Leadership</h3>
<ul>
<li><strong>Modern Architecture</strong>: Built on Next.js 14, React 18, and Supabase</li>
<li><strong>Mobile-First Design</strong>: Superior mobile experience vs. competitors</li>
<li><strong>AI-Powered Matching</strong>: Intelligent service recommendations</li>
<li><strong>Real-Time Features</strong>: Live availability, instant messaging, notifications</li>
</ul>
<h3 id="trust-safety">Trust &amp; Safety</h3>
<ul>
<li><strong>Advanced Verification</strong>: Multi-layer provider verification system</li>
<li><strong>Comprehensive Reviews</strong>: Detailed rating and review system</li>
<li><strong>Secure Payments</strong>: Stripe integration with fraud protection</li>
<li><strong>Dispute Resolution</strong>: Built-in conflict resolution system</li>
</ul>
<h3 id="user-experience">User Experience</h3>
<ul>
<li><strong>Intuitive Interface</strong>: Clean, modern design that users love</li>
<li><strong>One-Click Booking</strong>: Streamlined booking process</li>
<li><strong>Comprehensive Dashboard</strong>: Complete service management tools</li>
<li><strong>24/7 Support</strong>: Round-the-clock customer support</li>
</ul>
<hr />
<h2 id="key-financial-highlights">Key Financial Highlights</h2>
<h3 id="revenue-projections">Revenue Projections</h3>
<table>
<thead>
<tr>
<th>Year</th>
<th>Revenue</th>
<th>Growth Rate</th>
<th>Gross Margin</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>2025</strong></td>
<td>$2.5M</td>
<td>-</td>
<td>15%</td>
</tr>
<tr>
<td><strong>2026</strong></td>
<td>$10.7M</td>
<td>328%</td>
<td>39%</td>
</tr>
<tr>
<td><strong>2027</strong></td>
<td>$27M</td>
<td>152%</td>
<td>51%</td>
</tr>
</tbody>
</table>
<h3 id="path-to-profitability">Path to Profitability</h3>
<ul>
<li><strong>Break-even</strong>: Month 18</li>
<li><strong>Year 2 Profit</strong>: $4.2M (39% margin)</li>
<li><strong>Year 3 Profit</strong>: $13.8M (51% margin)</li>
<li><strong>Multiple Revenue Streams</strong>: Commissions, subscriptions, advertising</li>
</ul>
<h3 id="unit-economics">Unit Economics</h3>
<ul>
<li><strong>Customer Acquisition Cost (CAC)</strong>: $45</li>
<li><strong>Lifetime Value (LTV)</strong>: $500</li>
<li><strong>LTV/CAC Ratio</strong>: 11:1</li>
<li><strong>Payback Period</strong>: 3.2 months</li>
</ul>
<hr />
<h2 id="growth-roadmap">Growth Roadmap</h2>
<h3 id="phase-1-foundation-2025">Phase 1: Foundation (2025)</h3>
<ul>
<li>✅ Launch core platform with essential features</li>
<li>✅ Acquire first 1,000 users</li>
<li>✅ Establish key partnerships</li>
<li>✅ Achieve product-market fit</li>
</ul>
<h3 id="phase-2-scale-2026">Phase 2: Scale (2026)</h3>
<ul>
<li>🔄 Expand to 5 major markets</li>
<li>🔄 Launch mobile applications</li>
<li>🔄 Introduce AI-powered features</li>
<li>🔄 Reach 50,000 active users</li>
</ul>
<h3 id="phase-3-dominate-2027">Phase 3: Dominate (2027)</h3>
<ul>
<li>📋 International expansion</li>
<li>📋 Enterprise solutions</li>
<li>📋 Advanced analytics platform</li>
<li>📋 200,000+ active users</li>
</ul>
<h3 id="phase-4-global-leadership-2028">Phase 4: Global Leadership (2028+)</h3>
<ul>
<li>📋 Global marketplace dominance</li>
<li>📋 IPO or strategic acquisition</li>
<li>📋 1M+ active users</li>
<li>📋 $100M+ annual revenue</li>
</ul>
<hr />
<h2 id="funding-ask-roi">Funding Ask &amp; ROI</h2>
<h3 id="series-a-funding-5m">Series A Funding: $5M</h3>
<p><strong>Use of Funds:</strong></p>
<ul>
<li><strong>Product Development (40%)</strong>: Enhanced features, mobile app, AI capabilities</li>
<li><strong>Marketing &amp; Sales (30%)</strong>: User acquisition, market expansion, brand building</li>
<li><strong>Operations (20%)</strong>: Team scaling, infrastructure, customer success</li>
<li><strong>Working Capital (10%)</strong>: General operations and contingency</li>
</ul>
<h3 id="expected-returns">Expected Returns</h3>
<ul>
<li><strong>Year 3 Valuation</strong>: $150M+ (5.5x revenue multiple)</li>
<li><strong>Investor Returns</strong>: 10-15x return on investment</li>
<li><strong>Exit Strategy</strong>: Strategic acquisition or IPO within 5-7 years</li>
<li><strong>Market Multiple</strong>: 5-8x revenue (industry standard)</li>
</ul>
<h3 id="investment-highlights">Investment Highlights</h3>
<ul>
<li><strong>Proven Market</strong>: Large, growing market with clear demand</li>
<li><strong>Strong Team</strong>: Experienced founders with track record</li>
<li><strong>Technology Advantage</strong>: Modern, scalable platform</li>
<li><strong>Clear Path to Profitability</strong>: Detailed financial projections</li>
<li><strong>Multiple Exit Options</strong>: Strategic acquisition or IPO potential</li>
</ul>
<hr />
<h2 id="team-execution">Team &amp; Execution</h2>
<h3 id="leadership-team">Leadership Team</h3>
<ul>
<li><strong>CEO</strong>: 15+ years in tech, former VP at major platform</li>
<li><strong>CTO</strong>: 12+ years full-stack development, startup experience</li>
<li><strong>Head of Product</strong>: 10+ years product management, UX expertise</li>
<li><strong>Head of Marketing</strong>: 8+ years growth marketing, platform experience</li>
</ul>
<h3 id="advisory-board">Advisory Board</h3>
<ul>
<li><strong>Former Upwork Executive</strong>: Platform scaling expertise</li>
<li><strong>VC Partner</strong>: Funding and growth strategy</li>
<li><strong>Industry Expert</strong>: Professional services domain knowledge</li>
<li><strong>Technology Advisor</strong>: Technical architecture and scaling</li>
</ul>
<h3 id="execution-track-record">Execution Track Record</h3>
<ul>
<li><strong>Previous Ventures</strong>: 3 successful exits among founding team</li>
<li><strong>Platform Experience</strong>: Combined 50+ years in marketplace platforms</li>
<li><strong>User Growth</strong>: Proven ability to scale user acquisition</li>
<li><strong>Product Development</strong>: Track record of building successful products</li>
</ul>
<hr />
<h2 id="risk-mitigation">Risk Mitigation</h2>
<h3 id="market-risks">Market Risks</h3>
<ul>
<li><strong>Competition</strong>: Focus on differentiation and superior UX</li>
<li><strong>Market Saturation</strong>: Target underserved niches and verticals</li>
<li><strong>Economic Downturn</strong>: Diversified revenue streams and cost control</li>
</ul>
<h3 id="technology-risks">Technology Risks</h3>
<ul>
<li><strong>Scalability</strong>: Cloud-native architecture with auto-scaling</li>
<li><strong>Security</strong>: Comprehensive security measures and regular audits</li>
<li><strong>Performance</strong>: Proactive monitoring and optimization</li>
</ul>
<h3 id="operational-risks">Operational Risks</h3>
<ul>
<li><strong>Talent</strong>: Competitive compensation and strong culture</li>
<li><strong>Execution</strong>: Experienced team with proven track record</li>
<li><strong>Funding</strong>: Multiple funding options and clear path to profitability</li>
</ul>
<hr />
<h2 id="investment-opportunity">Investment Opportunity</h2>
<p>The Business Services Hub represents a compelling investment opportunity in one of the fastest-growing sectors of the digital economy. With a clear path to profitability, strong competitive positioning, and experienced leadership team, we are positioned to capture significant market share and deliver exceptional returns to investors.</p>
<h3 id="why-invest-now">Why Invest Now?</h3>
<ul>
<li><strong>Market Timing</strong>: Perfect timing in growing market</li>
<li><strong>Technology Advantage</strong>: Modern platform vs. legacy competitors</li>
<li><strong>Team Strength</strong>: Proven founders with relevant experience</li>
<li><strong>Clear Metrics</strong>: Detailed KPIs and success metrics</li>
<li><strong>Exit Potential</strong>: Multiple exit options with strong returns</li>
</ul>
<h3 id="next-steps">Next Steps</h3>
<ol>
<li><strong>Due Diligence</strong>: Comprehensive review of financials and technology</li>
<li><strong>Team Meeting</strong>: Direct access to founders and key team members</li>
<li><strong>Product Demo</strong>: Live demonstration of platform capabilities</li>
<li><strong>Investment Discussion</strong>: Terms, structure, and timeline</li>
<li><strong>Partnership</strong>: Long-term strategic partnership for growth</li>
</ol>
<hr />
<p><strong>Contact Information:</strong></p>
<ul>
<li><strong>Email</strong>: investors@businessserviceshub.com</li>
<li><strong>Phone</strong>: +1 (555) 123-4567</li>
<li><strong>Website</strong>: www.businessserviceshub.com</li>
<li><strong>LinkedIn</strong>: linkedin.com/company/business-services-hub</li>
</ul>
<hr />
<p><em>This executive summary is confidential and proprietary. Distribution is restricted to authorized parties only.</em></p>
<p><em>Last updated: January 2025</em>
<em>Document version: 1.0.0</em></p>`},architecture_diagrams:{title:"🏗️ Business Services Hub - Architecture Diagrams",content:`<h1 id="business-services-hub-architecture-diagrams">🏗️ Business Services Hub - Architecture Diagrams</h1>
<h2 id="table-of-contents">📋 Table of Contents</h2>
<ol>
<li><a href="#system-architecture-overview">System Architecture Overview</a></li>
<li><a href="#database-schema">Database Schema</a></li>
<li><a href="#api-flow-diagram">API Flow Diagram</a></li>
<li><a href="#security-architecture">Security Architecture</a></li>
<li><a href="#user-journey-flow">User Journey Flow</a></li>
<li><a href="#deployment-architecture">Deployment Architecture</a></li>
<li><a href="#component-architecture">Component Architecture</a></li>
</ol>
<hr />
<h2 id="system-architecture-overview">🎯 System Architecture Overview</h2>
<h3 id="high-level-system-architecture">High-Level System Architecture</h3>
<pre><code class="language-mermaid">graph TB
    subgraph &quot;Client Layer&quot;
        WEB[Web Application&lt;br/&gt;React + TypeScript]
        MOBILE[Mobile App&lt;br/&gt;React Native]
        ADMIN[Admin Dashboard&lt;br/&gt;React + TypeScript]
    end

    subgraph &quot;API Gateway&quot;
        GATEWAY[API Gateway&lt;br/&gt;Rate Limiting &amp; Auth]
    end

    subgraph &quot;Core Services&quot;
        AUTH[Authentication Service&lt;br/&gt;Supabase Auth]
        USER[User Management&lt;br/&gt;Profile &amp; Preferences]
        SERVICE[Service Management&lt;br/&gt;Listings &amp; Categories]
        BOOKING[Booking System&lt;br/&gt;Scheduling &amp; Payments]
        NOTIFICATION[Notification Service&lt;br/&gt;Email &amp; SMS]
        PAYMENT[Payment Processing&lt;br/&gt;Stripe Integration]
    end

    subgraph &quot;Data Layer&quot;
        DB[(PostgreSQL&lt;br/&gt;Supabase)]
        STORAGE[File Storage&lt;br/&gt;Supabase Storage]
        CACHE[Redis Cache&lt;br/&gt;Session &amp; Data]
    end

    subgraph &quot;External Services&quot;
        STRIPE[Stripe&lt;br/&gt;Payment Processing]
        EMAIL[Email Service&lt;br/&gt;SendGrid]
        SMS[SMS Service&lt;br/&gt;Twilio]
        MAPS[Maps API&lt;br/&gt;Google Maps]
    end

    WEB --&gt; GATEWAY
    MOBILE --&gt; GATEWAY
    ADMIN --&gt; GATEWAY

    GATEWAY --&gt; AUTH
    GATEWAY --&gt; USER
    GATEWAY --&gt; SERVICE
    GATEWAY --&gt; BOOKING
    GATEWAY --&gt; NOTIFICATION
    GATEWAY --&gt; PAYMENT

    AUTH --&gt; DB
    USER --&gt; DB
    SERVICE --&gt; DB
    BOOKING --&gt; DB
    NOTIFICATION --&gt; DB
    PAYMENT --&gt; DB

    SERVICE --&gt; STORAGE
    USER --&gt; STORAGE

    AUTH --&gt; CACHE
    USER --&gt; CACHE

    PAYMENT --&gt; STRIPE
    NOTIFICATION --&gt; EMAIL
    NOTIFICATION --&gt; SMS
    SERVICE --&gt; MAPS
</code></pre>
<hr />
<h2 id="database-schema">🗄️ Database Schema</h2>
<h3 id="core-tables-and-relationships">Core Tables and Relationships</h3>
<pre><code class="language-mermaid">erDiagram
    USERS {
        uuid id PK
        string email
        string full_name
        string avatar_url
        string phone
        enum role
        timestamp created_at
        timestamp updated_at
    }

    PROFILES {
        uuid id PK
        uuid user_id FK
        text bio
        string location
        json preferences
        boolean is_verified
        timestamp created_at
        timestamp updated_at
    }

    SERVICE_CATEGORIES {
        uuid id PK
        string name
        string description
        string icon
        boolean is_active
        timestamp created_at
    }

    SERVICES {
        uuid id PK
        uuid provider_id FK
        uuid category_id FK
        string title
        text description
        decimal price
        string currency
        json pricing_options
        json images
        json location
        boolean is_active
        timestamp created_at
        timestamp updated_at
    }

    BOOKINGS {
        uuid id PK
        uuid client_id FK
        uuid service_id FK
        uuid provider_id FK
        datetime scheduled_at
        enum status
        decimal total_amount
        string currency
        text notes
        json metadata
        timestamp created_at
        timestamp updated_at
    }

    PAYMENTS {
        uuid id PK
        uuid booking_id FK
        string stripe_payment_intent_id
        decimal amount
        string currency
        enum status
        json payment_method
        timestamp created_at
        timestamp updated_at
    }

    REVIEWS {
        uuid id PK
        uuid booking_id FK
        uuid reviewer_id FK
        uuid reviewee_id FK
        integer rating
        text comment
        timestamp created_at
    }

    NOTIFICATIONS {
        uuid id PK
        uuid user_id FK
        string type
        string title
        text message
        json data
        boolean is_read
        timestamp created_at
    }

    USERS ||--|| PROFILES : has
    USERS ||--o{ SERVICES : provides
    USERS ||--o{ BOOKINGS : books
    USERS ||--o{ REVIEWS : writes
    USERS ||--o{ NOTIFICATIONS : receives

    SERVICE_CATEGORIES ||--o{ SERVICES : contains
    SERVICES ||--o{ BOOKINGS : booked_for
    BOOKINGS ||--|| PAYMENTS : has
    BOOKINGS ||--o{ REVIEWS : generates
</code></pre>
<hr />
<h2 id="api-flow-diagram">🔄 API Flow Diagram</h2>
<h3 id="request-flow-and-data-processing">Request Flow and Data Processing</h3>
<pre><code class="language-mermaid">sequenceDiagram
    participant Client
    participant Gateway
    participant Auth
    participant Service
    participant Database
    participant Payment
    participant Notification

    Client-&gt;&gt;Gateway: API Request
    Gateway-&gt;&gt;Auth: Validate Token
    Auth--&gt;&gt;Gateway: Token Valid
    Gateway-&gt;&gt;Service: Process Request
    Service-&gt;&gt;Database: Query Data
    Database--&gt;&gt;Service: Return Data
    Service--&gt;&gt;Gateway: Response Data
    Gateway--&gt;&gt;Client: API Response

    Note over Client,Notification: Booking Flow
    Client-&gt;&gt;Gateway: Create Booking
    Gateway-&gt;&gt;Service: Process Booking
    Service-&gt;&gt;Database: Save Booking
    Service-&gt;&gt;Payment: Process Payment
    Payment--&gt;&gt;Service: Payment Success
    Service-&gt;&gt;Notification: Send Confirmation
    Notification--&gt;&gt;Client: Email/SMS Notification
</code></pre>
<hr />
<h2 id="security-architecture">🔒 Security Architecture</h2>
<h3 id="authentication-and-authorization-flow">Authentication and Authorization Flow</h3>
<pre><code class="language-mermaid">graph TB
    subgraph &quot;Client Authentication&quot;
        LOGIN[User Login]
        REGISTER[User Registration]
        FORGOT[Password Reset]
    end

    subgraph &quot;Authentication Layer&quot;
        SUPABASE[Supabase Auth]
        JWT[JWT Token Generation]
        RLS[Row Level Security]
    end

    subgraph &quot;Authorization&quot;
        ROLE[Role-Based Access]
        PERM[Permission Check]
        RESOURCE[Resource Access]
    end

    subgraph &quot;Security Features&quot;
        RATE[Rate Limiting]
        CORS[CORS Protection]
        VALID[Input Validation]
        ENCRYPT[Data Encryption]
    end

    LOGIN --&gt; SUPABASE
    REGISTER --&gt; SUPABASE
    FORGOT --&gt; SUPABASE

    SUPABASE --&gt; JWT
    JWT --&gt; RLS

    RLS --&gt; ROLE
    ROLE --&gt; PERM
    PERM --&gt; RESOURCE

    RESOURCE --&gt; RATE
    RATE --&gt; CORS
    CORS --&gt; VALID
    VALID --&gt; ENCRYPT
</code></pre>
<hr />
<h2 id="user-journey-flow">👤 User Journey Flow</h2>
<h3 id="complete-user-experience-flow">Complete User Experience Flow</h3>
<pre><code class="language-mermaid">journey
    title User Journey: Service Booking
    section Discovery
      Browse Services: 5: User
      Filter by Category: 4: User
      View Service Details: 5: User
      Read Reviews: 4: User
    section Booking
      Select Time Slot: 5: User
      Enter Details: 3: User
      Review Booking: 4: User
      Make Payment: 5: User
    section Confirmation
      Receive Confirmation: 5: User
      Get Provider Contact: 4: User
      Prepare for Service: 3: User
    section Completion
      Receive Service: 5: User
      Leave Review: 4: User
      Rate Experience: 5: User
</code></pre>
<hr />
<h2 id="deployment-architecture">🚀 Deployment Architecture</h2>
<h3 id="production-environment-setup">Production Environment Setup</h3>
<pre><code class="language-mermaid">graph TB
    subgraph &quot;CDN &amp; Load Balancer&quot;
        CDN[CloudFlare CDN]
        LB[Load Balancer]
    end

    subgraph &quot;Application Servers&quot;
        APP1[App Server 1&lt;br/&gt;Node.js]
        APP2[App Server 2&lt;br/&gt;Node.js]
        APP3[App Server 3&lt;br/&gt;Node.js]
    end

    subgraph &quot;Database Layer&quot;
        PRIMARY[(Primary DB&lt;br/&gt;PostgreSQL)]
        REPLICA[(Read Replica&lt;br/&gt;PostgreSQL)]
        REDIS[(Redis Cache)]
    end

    subgraph &quot;Storage &amp; Files&quot;
        S3[Supabase Storage&lt;br/&gt;File Storage]
        BACKUP[Backup Storage&lt;br/&gt;Automated Backups]
    end

    subgraph &quot;Monitoring &amp; Logs&quot;
        MONITOR[Application Monitoring]
        LOGS[Centralized Logging]
        ALERTS[Alert System]
    end

    CDN --&gt; LB
    LB --&gt; APP1
    LB --&gt; APP2
    LB --&gt; APP3

    APP1 --&gt; PRIMARY
    APP2 --&gt; PRIMARY
    APP3 --&gt; PRIMARY

    APP1 --&gt; REPLICA
    APP2 --&gt; REPLICA
    APP3 --&gt; REPLICA

    APP1 --&gt; REDIS
    APP2 --&gt; REDIS
    APP3 --&gt; REDIS

    APP1 --&gt; S3
    APP2 --&gt; S3
    APP3 --&gt; S3

    PRIMARY --&gt; BACKUP

    APP1 --&gt; MONITOR
    APP2 --&gt; MONITOR
    APP3 --&gt; MONITOR

    MONITOR --&gt; LOGS
    LOGS --&gt; ALERTS
</code></pre>
<hr />
<h2 id="component-architecture">🧩 Component Architecture</h2>
<h3 id="frontend-component-structure">Frontend Component Structure</h3>
<pre><code class="language-mermaid">graph TB
    subgraph &quot;App Root&quot;
        APP[App Component]
        ROUTER[React Router]
        PROVIDER[Context Providers]
    end

    subgraph &quot;Layout Components&quot;
        HEADER[Header Component]
        SIDEBAR[Sidebar Component]
        FOOTER[Footer Component]
        NAV[Navigation Component]
    end

    subgraph &quot;Feature Components&quot;
        AUTH[Authentication]
        DASHBOARD[Dashboard]
        SERVICES[Service Management]
        BOOKINGS[Booking System]
        PROFILE[User Profile]
        PAYMENT[Payment Processing]
    end

    subgraph &quot;Shared Components&quot;
        MODAL[Modal Components]
        FORM[Form Components]
        CARD[Card Components]
        BUTTON[Button Components]
        LOADING[Loading States]
    end

    subgraph &quot;Hooks &amp; Utils&quot;
        API[API Hooks]
        AUTH_HOOK[Auth Hooks]
        UTILS[Utility Functions]
        VALIDATION[Form Validation]
    end

    APP --&gt; ROUTER
    ROUTER --&gt; PROVIDER

    PROVIDER --&gt; HEADER
    PROVIDER --&gt; SIDEBAR
    PROVIDER --&gt; FOOTER
    PROVIDER --&gt; NAV

    PROVIDER --&gt; AUTH
    PROVIDER --&gt; DASHBOARD
    PROVIDER --&gt; SERVICES
    PROVIDER --&gt; BOOKINGS
    PROVIDER --&gt; PROFILE
    PROVIDER --&gt; PAYMENT

    AUTH --&gt; MODAL
    DASHBOARD --&gt; CARD
    SERVICES --&gt; FORM
    BOOKINGS --&gt; MODAL
    PROFILE --&gt; FORM
    PAYMENT --&gt; MODAL

    AUTH --&gt; API
    DASHBOARD --&gt; AUTH_HOOK
    SERVICES --&gt; UTILS
    BOOKINGS --&gt; VALIDATION
    PROFILE --&gt; API
    PAYMENT --&gt; AUTH_HOOK
</code></pre>
<hr />
<h2 id="performance-architecture">📊 Performance Architecture</h2>
<h3 id="caching-and-optimization-strategy">Caching and Optimization Strategy</h3>
<pre><code class="language-mermaid">graph TB
    subgraph &quot;Client-Side Caching&quot;
        BROWSER[Browser Cache]
        LOCAL[Local Storage]
        SESSION[Session Storage]
    end

    subgraph &quot;CDN Caching&quot;
        STATIC[Static Assets]
        IMAGES[Image Optimization]
        FONTS[Font Caching]
    end

    subgraph &quot;Server-Side Caching&quot;
        REDIS[Redis Cache]
        QUERY[Query Caching]
        SESSION_CACHE[Session Cache]
    end

    subgraph &quot;Database Optimization&quot;
        INDEXES[Database Indexes]
        PARTITIONS[Table Partitioning]
        CONNECTION[Connection Pooling]
    end

    BROWSER --&gt; STATIC
    LOCAL --&gt; QUERY
    SESSION --&gt; SESSION_CACHE

    STATIC --&gt; IMAGES
    IMAGES --&gt; FONTS

    REDIS --&gt; QUERY
    QUERY --&gt; SESSION_CACHE

    QUERY --&gt; INDEXES
    INDEXES --&gt; PARTITIONS
    PARTITIONS --&gt; CONNECTION
</code></pre>
<hr />
<h2 id="development-architecture">🔧 Development Architecture</h2>
<h3 id="local-development-setup">Local Development Setup</h3>
<pre><code class="language-mermaid">graph TB
    subgraph &quot;Development Environment&quot;
        DEV[Local Development]
        HOT[Hot Reload]
        DEBUG[Debug Tools]
    end

    subgraph &quot;Build Process&quot;
        WEBPACK[Webpack Bundler]
        BABEL[Babel Transpiler]
        POSTCSS[PostCSS Processor]
    end

    subgraph &quot;Testing&quot;
        UNIT[Unit Tests]
        INTEGRATION[Integration Tests]
        E2E[End-to-End Tests]
    end

    subgraph &quot;Code Quality&quot;
        LINT[ESLint]
        FORMAT[Prettier]
        TYPE[TypeScript Checker]
    end

    DEV --&gt; HOT
    HOT --&gt; DEBUG

    DEBUG --&gt; WEBPACK
    WEBPACK --&gt; BABEL
    BABEL --&gt; POSTCSS

    WEBPACK --&gt; UNIT
    UNIT --&gt; INTEGRATION
    INTEGRATION --&gt; E2E

    WEBPACK --&gt; LINT
    LINT --&gt; FORMAT
    FORMAT --&gt; TYPE
</code></pre>
<hr />
<h2 id="monitoring-and-analytics">📈 Monitoring and Analytics</h2>
<h3 id="system-monitoring-architecture">System Monitoring Architecture</h3>
<pre><code class="language-mermaid">graph TB
    subgraph &quot;Application Metrics&quot;
        PERFORMANCE[Performance Metrics]
        ERRORS[Error Tracking]
        USAGE[Usage Analytics]
    end

    subgraph &quot;Infrastructure Metrics&quot;
        CPU[CPU Usage]
        MEMORY[Memory Usage]
        DISK[Disk Usage]
        NETWORK[Network Traffic]
    end

    subgraph &quot;Business Metrics&quot;
        BOOKINGS[Booking Metrics]
        REVENUE[Revenue Tracking]
        USERS[User Growth]
        RETENTION[User Retention]
    end

    subgraph &quot;Alerting System&quot;
        THRESHOLDS[Threshold Monitoring]
        NOTIFICATIONS[Alert Notifications]
        ESCALATION[Escalation Rules]
    end

    PERFORMANCE --&gt; THRESHOLDS
    ERRORS --&gt; THRESHOLDS
    USAGE --&gt; THRESHOLDS

    CPU --&gt; THRESHOLDS
    MEMORY --&gt; THRESHOLDS
    DISK --&gt; THRESHOLDS
    NETWORK --&gt; THRESHOLDS

    BOOKINGS --&gt; THRESHOLDS
    REVENUE --&gt; THRESHOLDS
    USERS --&gt; THRESHOLDS
    RETENTION --&gt; THRESHOLDS

    THRESHOLDS --&gt; NOTIFICATIONS
    NOTIFICATIONS --&gt; ESCALATION
</code></pre>
<hr />
<h2 id="key-architecture-principles">🎯 Key Architecture Principles</h2>
<h3 id="design-patterns-and-best-practices">Design Patterns and Best Practices</h3>
<ol>
<li><strong>Microservices Architecture</strong>: Modular, scalable service design</li>
<li><strong>Event-Driven Architecture</strong>: Asynchronous communication between services</li>
<li><strong>CQRS Pattern</strong>: Command Query Responsibility Segregation</li>
<li><strong>Repository Pattern</strong>: Data access abstraction</li>
<li><strong>Dependency Injection</strong>: Loose coupling and testability</li>
<li><strong>Circuit Breaker</strong>: Fault tolerance and resilience</li>
<li><strong>Rate Limiting</strong>: API protection and resource management</li>
<li><strong>Caching Strategy</strong>: Multi-layer caching for performance</li>
<li><strong>Security by Design</strong>: Built-in security at every layer</li>
<li><strong>Observability</strong>: Comprehensive monitoring and logging</li>
</ol>
<hr />
<h2 id="data-flow-patterns">🔄 Data Flow Patterns</h2>
<h3 id="request-processing-flow">Request Processing Flow</h3>
<pre><code class="language-mermaid">flowchart TD
    START[Client Request] --&gt; VALIDATE{Input Validation}
    VALIDATE --&gt;|Valid| AUTH{Authentication}
    VALIDATE --&gt;|Invalid| ERROR[Return Error]

    AUTH --&gt;|Authenticated| AUTHORIZE{Authorization}
    AUTH --&gt;|Not Authenticated| UNAUTHORIZED[Return 401]

    AUTHORIZE --&gt;|Authorized| PROCESS[Process Request]
    AUTHORIZE --&gt;|Not Authorized| FORBIDDEN[Return 403]

    PROCESS --&gt; CACHE{Cache Check}
    CACHE --&gt;|Hit| RETURN[Return Cached Data]
    CACHE --&gt;|Miss| DATABASE[Query Database]

    DATABASE --&gt; TRANSFORM[Transform Data]
    TRANSFORM --&gt; CACHE_STORE[Store in Cache]
    CACHE_STORE --&gt; RETURN

    RETURN --&gt; LOG[Log Request]
    LOG --&gt; RESPONSE[Send Response]

    ERROR --&gt; LOG
    UNAUTHORIZED --&gt; LOG
    FORBIDDEN --&gt; LOG
</code></pre>
<hr />
<p>This comprehensive architecture documentation provides a complete visual and technical overview of the Business Services Hub system, covering all aspects from high-level system design to detailed component relationships and data flows.</p>`},contributing:{title:"🤝 Contributing to Business Services Hub",content:`<h1 id="contributing-to-business-services-hub">🤝 Contributing to Business Services Hub</h1>
<p>Thank you for your interest in contributing to the Business Services Hub! This guide will help you get started with contributing to our project.</p>
<h2 id="table-of-contents">📋 Table of Contents</h2>
<ol>
<li><a href="#code-of-conduct">Code of Conduct</a></li>
<li><a href="#getting-started">Getting Started</a></li>
<li><a href="#development-setup">Development Setup</a></li>
<li><a href="#contribution-process">Contribution Process</a></li>
<li><a href="#coding-standards">Coding Standards</a></li>
<li><a href="#testing-guidelines">Testing Guidelines</a></li>
<li><a href="#documentation-guidelines">Documentation Guidelines</a></li>
<li><a href="#issue-reporting">Issue Reporting</a></li>
<li><a href="#pull-request-process">Pull Request Process</a></li>
<li><a href="#release-process">Release Process</a></li>
</ol>
<hr />
<h2 id="code-of-conduct">📜 Code of Conduct</h2>
<h3 id="our-pledge">Our Pledge</h3>
<p>We are committed to providing a welcoming and inclusive environment for all contributors, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.</p>
<h3 id="our-standards">Our Standards</h3>
<h4 id="positive-behavior">Positive Behavior</h4>
<ul>
<li>Use welcoming and inclusive language</li>
<li>Be respectful of differing viewpoints and experiences</li>
<li>Gracefully accept constructive criticism</li>
<li>Focus on what is best for the community</li>
<li>Show empathy towards other community members</li>
</ul>
<h4 id="unacceptable-behavior">Unacceptable Behavior</h4>
<ul>
<li>The use of sexualized language or imagery</li>
<li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
<li>Public or private harassment</li>
<li>Publishing others' private information without explicit permission</li>
<li>Other conduct which could reasonably be considered inappropriate</li>
</ul>
<h3 id="enforcement">Enforcement</h3>
<p>Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at conduct@abuali.com. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances.</p>
<hr />
<h2 id="getting-started">🚀 Getting Started</h2>
<h3 id="prerequisites">Prerequisites</h3>
<p>Before you begin, ensure you have the following installed:</p>
<ul>
<li><strong>Node.js</strong>: Version 18.0.0 or higher</li>
<li><strong>npm</strong>: Version 8.0.0 or higher</li>
<li><strong>Git</strong>: Version 2.30.0 or higher</li>
<li><strong>Code Editor</strong>: VS Code (recommended) or your preferred editor</li>
</ul>
<h3 id="fork-and-clone">Fork and Clone</h3>
<ol>
<li><strong>Fork the repository</strong> on GitHub</li>
<li><strong>Clone your fork</strong> locally:
   <code>bash
   git clone https://github.com/yourusername/business-services-hub.git
   cd business-services-hub</code></li>
<li><strong>Add upstream remote</strong>:
   <code>bash
   git remote add upstream https://github.com/business-services-hub/business-services-hub.git</code></li>
</ol>
<h3 id="development-setup">Development Setup</h3>
<ol>
<li><strong>Install dependencies</strong>:</li>
</ol>
<p><code>bash
   npm install</code></p>
<ol>
<li><strong>Set up environment variables</strong>:</li>
</ol>
<p><code>bash
   cp .env.example .env.local
   # Edit .env.local with your configuration</code></p>
<ol>
<li><strong>Start development server</strong>:</li>
</ol>
<p><code>bash
   npm run dev</code></p>
<ol>
<li><strong>Verify setup</strong>:</li>
<li>Visit <code>http://localhost:3000</code></li>
<li>Run tests: <code>npm test</code></li>
<li>Run linting: <code>npm run lint</code></li>
</ol>
<hr />
<h2 id="development-setup_1">🔧 Development Setup</h2>
<h3 id="project-structure">Project Structure</h3>
<pre><code>business-services-hub/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── forms/          # Form components
│   │   ├── layout/         # Layout components
│   │   └── features/       # Feature-specific components
│   ├── pages/              # Next.js pages
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   ├── dashboard/      # Dashboard pages
│   │   └── services/       # Service-related pages
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── store/              # State management
│   └── types/              # TypeScript type definitions
├── docs/                   # Documentation
├── tests/                  # Test files
├── public/                 # Static assets
└── scripts/                # Build and utility scripts
</code></pre>
<h3 id="development-workflow">Development Workflow</h3>
<ol>
<li><strong>Create a feature branch</strong>:</li>
</ol>
<p><code>bash
   git checkout -b feature/your-feature-name</code></p>
<ol>
<li><strong>Make your changes</strong>:</li>
<li>Write code following our coding standards</li>
<li>Add tests for new functionality</li>
<li>
<p>Update documentation as needed</p>
</li>
<li>
<p><strong>Test your changes</strong>:</p>
</li>
</ol>
<p><code>bash
   npm run test
   npm run lint
   npm run type-check</code></p>
<ol>
<li><strong>Commit your changes</strong>:</li>
</ol>
<p><code>bash
   git add .
   git commit -m "feat: add new feature"</code></p>
<ol>
<li><strong>Push to your fork</strong>:</li>
</ol>
<p><code>bash
   git push origin feature/your-feature-name</code></p>
<ol>
<li><strong>Create a Pull Request</strong> on GitHub</li>
</ol>
<hr />
<h2 id="contribution-process">🔄 Contribution Process</h2>
<h3 id="types-of-contributions">Types of Contributions</h3>
<h4 id="bug-fixes">🐛 Bug Fixes</h4>
<ul>
<li>Fix existing bugs and issues</li>
<li>Improve error handling</li>
<li>Enhance stability</li>
</ul>
<h4 id="new-features">✨ New Features</h4>
<ul>
<li>Add new functionality</li>
<li>Implement new components</li>
<li>Add new API endpoints</li>
</ul>
<h4 id="documentation">📚 Documentation</h4>
<ul>
<li>Improve existing documentation</li>
<li>Add new guides and tutorials</li>
<li>Fix documentation errors</li>
</ul>
<h4 id="testing">🧪 Testing</h4>
<ul>
<li>Add new tests</li>
<li>Improve test coverage</li>
<li>Fix failing tests</li>
</ul>
<h4 id="uiux-improvements">🎨 UI/UX Improvements</h4>
<ul>
<li>Improve user interface</li>
<li>Enhance user experience</li>
<li>Fix accessibility issues</li>
</ul>
<h4 id="performance">⚡ Performance</h4>
<ul>
<li>Optimize performance</li>
<li>Reduce bundle size</li>
<li>Improve loading times</li>
</ul>
<h3 id="contribution-guidelines">Contribution Guidelines</h3>
<h4 id="before-you-start">Before You Start</h4>
<ol>
<li><strong>Check existing issues</strong> to see if your contribution is already being worked on</li>
<li><strong>Create an issue</strong> if you're planning a significant change</li>
<li><strong>Discuss your approach</strong> with the maintainers for large changes</li>
</ol>
<h4 id="during-development">During Development</h4>
<ol>
<li><strong>Follow coding standards</strong> outlined in this guide</li>
<li><strong>Write tests</strong> for new functionality</li>
<li><strong>Update documentation</strong> as needed</li>
<li><strong>Keep commits focused</strong> and atomic</li>
</ol>
<h4 id="after-development">After Development</h4>
<ol>
<li><strong>Test thoroughly</strong> before submitting</li>
<li><strong>Update CHANGELOG.md</strong> if applicable</li>
<li><strong>Create a clear PR description</strong></li>
<li><strong>Respond to feedback</strong> promptly</li>
</ol>
<hr />
<h2 id="coding-standards">📝 Coding Standards</h2>
<h3 id="typescript-guidelines">TypeScript Guidelines</h3>
<h4 id="type-definitions">Type Definitions</h4>
<pre><code class="language-typescript">// Use interfaces for object shapes
interface User {
  id: string;
  email: string;
  role: UserRole;
  createdAt: Date;
}

// Use enums for constants
enum UserRole {
  CLIENT = 'client',
  PROVIDER = 'provider',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin',
}

// Use type aliases for unions
type Status = 'pending' | 'approved' | 'rejected';
</code></pre>
<h4 id="function-definitions">Function Definitions</h4>
<pre><code class="language-typescript">// Use explicit return types for public functions
export function getUserById(id: string): Promise&lt;User | null&gt; {
  // Implementation
}

// Use arrow functions for simple operations
const formatDate = (date: Date): string =&gt; {
  return date.toISOString().split('T')[0];
};
</code></pre>
<h4 id="error-handling">Error Handling</h4>
<pre><code class="language-typescript">// Use custom error classes
class ValidationError extends Error {
  constructor(
    message: string,
    public field: string
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Handle errors gracefully
try {
  const result = await riskyOperation();
  return result;
} catch (error) {
  if (error instanceof ValidationError) {
    throw error;
  }
  throw new Error('An unexpected error occurred');
}
</code></pre>
<h3 id="react-guidelines">React Guidelines</h3>
<h4 id="component-structure">Component Structure</h4>
<pre><code class="language-typescript">// Use functional components with hooks
interface ButtonProps {
  children: React.ReactNode;
  onClick: () =&gt; void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false
}: ButtonProps) {
  return (
    &lt;button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    &gt;
      {children}
    &lt;/button&gt;
  );
}
</code></pre>
<h4 id="hooks-usage">Hooks Usage</h4>
<pre><code class="language-typescript">// Use custom hooks for complex logic
function useUser(userId: string) {
  const [user, setUser] = useState&lt;User | null&gt;(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState&lt;Error | null&gt;(null);

  useEffect(() =&gt; {
    fetchUser(userId)
      .then(setUser)
      .catch(setError)
      .finally(() =&gt; setLoading(false));
  }, [userId]);

  return { user, loading, error };
}
</code></pre>
<h4 id="state-management">State Management</h4>
<pre><code class="language-typescript">// Use Zustand for global state
interface AppState {
  user: User | null;
  setUser: (user: User | null) =&gt; void;
  logout: () =&gt; void;
}

export const useAppStore = create&lt;AppState&gt;(set =&gt; ({
  user: null,
  setUser: user =&gt; set({ user }),
  logout: () =&gt; set({ user: null }),
}));
</code></pre>
<h3 id="api-guidelines">API Guidelines</h3>
<h4 id="route-handlers">Route Handlers</h4>
<pre><code class="language-typescript">// Use proper HTTP methods and status codes
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = await getData();
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
</code></pre>
<h4 id="input-validation">Input Validation</h4>
<pre><code class="language-typescript">// Use Zod for input validation
const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['client', 'provider', 'admin']),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const validatedData = createUserSchema.parse(req.body);
    // Process validated data
  } catch (error) {
    return res.status(400).json({ error: 'Validation failed' });
  }
}
</code></pre>
<h3 id="database-guidelines">Database Guidelines</h3>
<h4 id="query-patterns">Query Patterns</h4>
<pre><code class="language-typescript">// Use Supabase client for database operations
export async function getServices(filters: ServiceFilters) {
  let query = supabase.from('services').select('*').eq('status', 'active');

  if (filters.category) {
    query = query.eq('category', filters.category);
  }

  if (filters.minPrice) {
    query = query.gte('base_price', filters.minPrice);
  }

  return await query;
}
</code></pre>
<h4 id="rls-policies">RLS Policies</h4>
<pre><code class="language-sql">-- Always use RLS policies for data access
CREATE POLICY &quot;Users can view own profile&quot; ON profiles
  FOR SELECT USING (auth.uid() = id);
</code></pre>
<hr />
<h2 id="testing-guidelines">🧪 Testing Guidelines</h2>
<h3 id="test-structure">Test Structure</h3>
<h4 id="unit-tests">Unit Tests</h4>
<pre><code class="language-typescript">// Test individual functions
describe('formatDate', () =&gt; {
  it('should format date correctly', () =&gt; {
    const date = new Date('2025-01-13T10:30:00Z');
    const result = formatDate(date);
    expect(result).toBe('2025-01-13');
  });
});
</code></pre>
<h4 id="component-tests">Component Tests</h4>
<pre><code class="language-typescript">// Test React components
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () =&gt; {
  it('should render with correct text', () =&gt; {
    render(&lt;Button onClick={() =&gt; {}}&gt;Click me&lt;/Button&gt;);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () =&gt; {
    const handleClick = jest.fn();
    render(&lt;Button onClick={handleClick}&gt;Click me&lt;/Button&gt;);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
</code></pre>
<h4 id="api-tests">API Tests</h4>
<pre><code class="language-typescript">// Test API endpoints
import { createMocks } from 'node-mocks-http';
import handler from '../pages/api/users';

describe('/api/users', () =&gt; {
  it('should return users list', async () =&gt; {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toHaveProperty('data');
  });
});
</code></pre>
<h3 id="test-coverage">Test Coverage</h3>
<h4 id="coverage-requirements">Coverage Requirements</h4>
<ul>
<li><strong>Unit Tests</strong>: 80% minimum coverage</li>
<li><strong>Integration Tests</strong>: 70% minimum coverage</li>
<li><strong>E2E Tests</strong>: Critical user flows covered</li>
</ul>
<h4 id="running-tests">Running Tests</h4>
<pre><code class="language-bash"># Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test Button.test.tsx
</code></pre>
<hr />
<h2 id="documentation-guidelines">📚 Documentation Guidelines</h2>
<h3 id="code-documentation">Code Documentation</h3>
<h4 id="jsdoc-comments">JSDoc Comments</h4>
<pre><code class="language-typescript">/**
 * Creates a new user account
 * @param userData - User information
 * @param userData.email - User's email address
 * @param userData.password - User's password
 * @param userData.role - User's role
 * @returns Promise resolving to created user
 * @throws {ValidationError} When user data is invalid
 * @throws {ConflictError} When user already exists
 */
export async function createUser(userData: CreateUserData): Promise&lt;User&gt; {
  // Implementation
}
</code></pre>
<h4 id="readme-files">README Files</h4>
<pre><code class="language-markdown"># Component Name

Brief description of what this component does.

## Usage

\`\`\`typescript
import { ComponentName } from './ComponentName';

&lt;ComponentName prop1=&quot;value&quot; prop2={123} /&gt;
\`\`\`
</code></pre>
<h2 id="props">Props</h2>
<table>
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>prop1</td>
<td>string</td>
<td>-</td>
<td>Description of prop1</td>
</tr>
<tr>
<td>prop2</td>
<td>number</td>
<td>0</td>
<td>Description of prop2</td>
</tr>
</tbody>
</table>
<h2 id="examples">Examples</h2>
<h3 id="basic-usage">Basic Usage</h3>
<p>[Example code]</p>
<h3 id="advanced-usage">Advanced Usage</h3>
<p>[Example code]</p>
<pre><code>
### API Documentation

#### Endpoint Documentation
\`\`\`typescript
/**
 * @api {get} /api/services Get Services
 * @apiName GetServices
 * @apiGroup Services
 * @apiVersion 1.0.0
 *
 * @apiQuery {string} [category] Service category filter
 * @apiQuery {number} [minPrice] Minimum price filter
 * @apiQuery {number} [maxPrice] Maximum price filter
 *
 * @apiSuccess {Object[]} data Array of services
 * @apiSuccess {string} data.id Service ID
 * @apiSuccess {string} data.title Service title
 * @apiSuccess {number} data.price Service price
 *
 * @apiError {Object} 400 Bad Request
 * @apiError {string} 400.error Error message
 */
</code></pre>
<hr />
<h2 id="issue-reporting">🐛 Issue Reporting</h2>
<h3 id="bug-reports">Bug Reports</h3>
<p>When reporting bugs, please include:</p>
<ol>
<li><strong>Clear title</strong> describing the issue</li>
<li><strong>Steps to reproduce</strong> the bug</li>
<li><strong>Expected behavior</strong> vs actual behavior</li>
<li><strong>Environment details</strong> (OS, browser, Node.js version)</li>
<li><strong>Screenshots</strong> or error messages if applicable</li>
<li><strong>Code snippets</strong> if relevant</li>
</ol>
<h4 id="bug-report-template">Bug Report Template</h4>
<pre><code class="language-markdown">## Bug Description

Brief description of the bug

## Steps to Reproduce

1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior

What you expected to happen

## Actual Behavior

What actually happened

## Environment

- OS: [e.g. Windows 10, macOS 12.0]
- Browser: [e.g. Chrome 96, Firefox 95]
- Node.js: [e.g. 18.0.0]

## Additional Context

Any other context about the problem
</code></pre>
<h3 id="feature-requests">Feature Requests</h3>
<p>When requesting features, please include:</p>
<ol>
<li><strong>Clear title</strong> describing the feature</li>
<li><strong>Problem description</strong> - what problem does this solve?</li>
<li><strong>Proposed solution</strong> - how should it work?</li>
<li><strong>Alternatives considered</strong> - other solutions you've thought about</li>
<li><strong>Additional context</strong> - any other relevant information</li>
</ol>
<hr />
<h2 id="pull-request-process">🔀 Pull Request Process</h2>
<h3 id="pr-guidelines">PR Guidelines</h3>
<h4 id="before-submitting">Before Submitting</h4>
<ol>
<li><strong>Ensure tests pass</strong>: <code>npm test</code></li>
<li><strong>Run linting</strong>: <code>npm run lint</code></li>
<li><strong>Check types</strong>: <code>npm run type-check</code></li>
<li><strong>Update documentation</strong> if needed</li>
<li><strong>Update CHANGELOG.md</strong> if applicable</li>
</ol>
<h4 id="pr-description-template">PR Description Template</h4>
<pre><code class="language-markdown">## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] No breaking changes (or breaking changes documented)
</code></pre>
<h4 id="review-process">Review Process</h4>
<ol>
<li><strong>Automated checks</strong> must pass</li>
<li><strong>Code review</strong> by maintainers</li>
<li><strong>Testing</strong> by QA team (if applicable)</li>
<li><strong>Approval</strong> from at least one maintainer</li>
<li><strong>Merge</strong> after approval</li>
</ol>
<h3 id="commit-message-format">Commit Message Format</h3>
<p>Use conventional commits format:</p>
<pre><code>&lt;type&gt;(&lt;scope&gt;): &lt;description&gt;

[optional body]

[optional footer(s)]
</code></pre>
<h4 id="types">Types</h4>
<ul>
<li><code>feat</code>: New feature</li>
<li><code>fix</code>: Bug fix</li>
<li><code>docs</code>: Documentation changes</li>
<li><code>style</code>: Code style changes</li>
<li><code>refactor</code>: Code refactoring</li>
<li><code>test</code>: Test changes</li>
<li><code>chore</code>: Build process or auxiliary tool changes</li>
</ul>
<h4 id="examples_1">Examples</h4>
<pre><code>feat(auth): add two-factor authentication
fix(api): resolve user creation validation error
docs(readme): update installation instructions
test(components): add Button component tests
</code></pre>
<hr />
<h2 id="release-process">🚀 Release Process</h2>
<h3 id="version-numbering">Version Numbering</h3>
<p>We use <a href="https://semver.org/">Semantic Versioning</a>:</p>
<ul>
<li><strong>MAJOR</strong>: Breaking changes</li>
<li><strong>MINOR</strong>: New features (backward compatible)</li>
<li><strong>PATCH</strong>: Bug fixes (backward compatible)</li>
</ul>
<h3 id="release-steps">Release Steps</h3>
<ol>
<li><strong>Update version</strong> in <code>package.json</code></li>
<li><strong>Update CHANGELOG.md</strong> with new features/fixes</li>
<li><strong>Create release branch</strong> from <code>main</code></li>
<li><strong>Run full test suite</strong></li>
<li><strong>Create release PR</strong> for review</li>
<li><strong>Merge release PR</strong> after approval</li>
<li><strong>Create GitHub release</strong> with release notes</li>
<li><strong>Deploy to production</strong></li>
</ol>
<h3 id="release-checklist">Release Checklist</h3>
<ul>
<li>[ ] All tests passing</li>
<li>[ ] Documentation updated</li>
<li>[ ] CHANGELOG.md updated</li>
<li>[ ] Version bumped</li>
<li>[ ] Release notes prepared</li>
<li>[ ] Production deployment tested</li>
</ul>
<hr />
<h2 id="getting-help">🆘 Getting Help</h2>
<h3 id="resources">Resources</h3>
<ul>
<li><strong>Documentation</strong>: <a href="https://docs.businessserviceshub.com">docs.businessserviceshub.com</a></li>
<li><strong>Discord</strong>: <a href="https://discord.gg/business-services-hub">discord.gg/business-services-hub</a></li>
<li><strong>GitHub Discussions</strong>: <a href="https://github.com/business-services-hub/business-services-hub/discussions">GitHub Discussions</a></li>
<li><strong>Email</strong>: contributors@businessserviceshub.com</li>
</ul>
<h3 id="common-issues">Common Issues</h3>
<h4 id="development-setup-issues">Development Setup Issues</h4>
<pre><code class="language-bash"># Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Reset Supabase local development
supabase stop
supabase start
</code></pre>
<h4 id="build-issues">Build Issues</h4>
<pre><code class="language-bash"># Clear Next.js cache
rm -rf .next
npm run build

# Check TypeScript errors
npm run type-check
</code></pre>
<h4 id="test-issues">Test Issues</h4>
<pre><code class="language-bash"># Clear test cache
npm test -- --clearCache

# Run tests in verbose mode
npm test -- --verbose
</code></pre>
<hr />
<h2 id="contribution-recognition">🎯 Contribution Recognition</h2>
<h3 id="contributors">Contributors</h3>
<p>We recognize all contributors in our:</p>
<ul>
<li><strong>README.md</strong> contributors section</li>
<li><strong>GitHub contributors</strong> page</li>
<li><strong>Release notes</strong> for significant contributions</li>
<li><strong>Annual contributor</strong> appreciation</li>
</ul>
<h3 id="types-of-recognition">Types of Recognition</h3>
<ul>
<li><strong>Code Contributors</strong>: Code, tests, documentation</li>
<li><strong>Bug Reporters</strong>: Quality bug reports</li>
<li><strong>Feature Requesters</strong>: Valuable feature suggestions</li>
<li><strong>Community Helpers</strong>: Helping other contributors</li>
<li><strong>Documentation Writers</strong>: Improving documentation</li>
</ul>
<hr />
<h2 id="contact">📞 Contact</h2>
<h3 id="maintainers">Maintainers</h3>
<ul>
<li><strong>Project Lead</strong>: <a href="https://github.com/project-lead">@project-lead</a></li>
<li><strong>Technical Lead</strong>: <a href="https://github.com/tech-lead">@tech-lead</a></li>
<li><strong>Community Manager</strong>: <a href="https://github.com/community-manager">@community-manager</a></li>
</ul>
<h3 id="communication-channels">Communication Channels</h3>
<ul>
<li><strong>GitHub Issues</strong>: For bug reports and feature requests</li>
<li><strong>GitHub Discussions</strong>: For general questions and discussions</li>
<li><strong>Discord</strong>: For real-time chat and quick questions</li>
<li><strong>Email</strong>: For private or sensitive matters</li>
</ul>
<hr />
<p><em>Thank you for contributing to the Business Services Hub! Your contributions help make our platform better for everyone.</em></p>
<p><em>Last updated: January 2025</em>
<em>Contributing Guide version: 1.0.0</em></p>`},features_detailed:{title:"⚡ Business Services Hub - Features Detailed",content:`<h1 id="business-services-hub-features-detailed">⚡ Business Services Hub - Features Detailed</h1>
<h2 id="table-of-contents">📋 Table of Contents</h2>
<ol>
<li><a href="#feature-overview">Feature Overview</a></li>
<li><a href="#user-role-features">User Role Features</a></li>
<li><a href="#core-platform-features">Core Platform Features</a></li>
<li><a href="#advanced-features">Advanced Features</a></li>
<li><a href="#integration-features">Integration Features</a></li>
<li><a href="#administrative-features">Administrative Features</a></li>
<li><a href="#mobile-features">Mobile Features</a></li>
<li><a href="#api-features">API Features</a></li>
</ol>
<hr />
<h2 id="feature-overview">🎯 Feature Overview</h2>
<p>The Business Services Hub is a comprehensive marketplace platform that connects service providers with clients through an intuitive, feature-rich interface. The platform is designed to handle the complete service lifecycle from discovery to completion.</p>
<h3 id="feature-categories">Feature Categories</h3>
<ul>
<li><strong>User Management</strong>: Registration, authentication, profile management</li>
<li><strong>Service Discovery</strong>: Search, filtering, categorization, recommendations</li>
<li><strong>Booking System</strong>: Scheduling, availability management, conflict resolution</li>
<li><strong>Payment Processing</strong>: Secure transactions, multiple payment methods</li>
<li><strong>Communication</strong>: In-app messaging, notifications, reviews</li>
<li><strong>Analytics</strong>: Business insights, performance tracking, reporting</li>
<li><strong>Administration</strong>: Platform management, user moderation, content management</li>
</ul>
<hr />
<h2 id="user-role-features">👥 User Role Features</h2>
<h3 id="client-features">🔵 Client Features</h3>
<h4 id="account-management">Account Management</h4>
<ul>
<li><strong>User Registration &amp; Login</strong></li>
<li>Email/password authentication</li>
<li>Social media login (Google, Facebook, LinkedIn)</li>
<li>Phone number verification</li>
<li>Two-factor authentication (2FA)</li>
<li>
<p>Password reset functionality</p>
</li>
<li>
<p><strong>Profile Management</strong></p>
</li>
<li>Personal information editing</li>
<li>Profile photo upload</li>
<li>Contact information management</li>
<li>Notification preferences</li>
<li>Privacy settings</li>
</ul>
<h4 id="service-discovery">Service Discovery</h4>
<ul>
<li><strong>Search &amp; Filter</strong></li>
<li>Text-based search with autocomplete</li>
<li>Category-based filtering</li>
<li>Location-based search with radius</li>
<li>Price range filtering</li>
<li>Rating-based filtering</li>
<li>Availability filtering</li>
<li>
<p>Advanced search with multiple criteria</p>
</li>
<li>
<p><strong>Service Browsing</strong></p>
</li>
<li>Grid and list view options</li>
<li>Sort by price, rating, distance, availability</li>
<li>Featured services carousel</li>
<li>Recently viewed services</li>
<li>Recommended services based on history</li>
<li>Trending services in area</li>
</ul>
<h4 id="booking-management">Booking Management</h4>
<ul>
<li><strong>Service Booking</strong></li>
<li>Real-time availability calendar</li>
<li>Time slot selection</li>
<li>Service customization options</li>
<li>Special requests and notes</li>
<li>Booking confirmation</li>
<li>
<p>Booking modification and cancellation</p>
</li>
<li>
<p><strong>Booking History</strong></p>
</li>
<li>Past and upcoming bookings</li>
<li>Booking status tracking</li>
<li>Service history with details</li>
<li>Repeat booking functionality</li>
<li>Booking receipts and invoices</li>
</ul>
<h4 id="payment-billing">Payment &amp; Billing</h4>
<ul>
<li><strong>Payment Methods</strong></li>
<li>Credit/debit card processing</li>
<li>Digital wallet integration (Apple Pay, Google Pay)</li>
<li>Bank transfer options</li>
<li>Payment method management</li>
<li>
<p>Secure payment processing</p>
</li>
<li>
<p><strong>Billing Management</strong></p>
</li>
<li>Transaction history</li>
<li>Receipt generation</li>
<li>Refund requests</li>
<li>Payment method updates</li>
<li>Billing notifications</li>
</ul>
<h4 id="communication-reviews">Communication &amp; Reviews</h4>
<ul>
<li><strong>Messaging System</strong></li>
<li>Direct messaging with providers</li>
<li>File and image sharing</li>
<li>Message history</li>
<li>Push notifications for messages</li>
<li>
<p>Read receipts</p>
</li>
<li>
<p><strong>Review System</strong></p>
</li>
<li>Service rating (1-5 stars)</li>
<li>Written reviews and feedback</li>
<li>Photo uploads with reviews</li>
<li>Review editing and deletion</li>
<li>Review helpfulness voting</li>
</ul>
<h3 id="service-provider-features">🟢 Service Provider Features</h3>
<h4 id="business-management">Business Management</h4>
<ul>
<li><strong>Business Profile</strong></li>
<li>Business information setup</li>
<li>Service portfolio management</li>
<li>Business hours configuration</li>
<li>Service area definition</li>
<li>Business verification process</li>
<li>
<p>Professional certifications upload</p>
</li>
<li>
<p><strong>Service Management</strong></p>
</li>
<li>Service creation and editing</li>
<li>Pricing configuration</li>
<li>Service availability management</li>
<li>Service categories and tags</li>
<li>Service images and descriptions</li>
<li>Service status management</li>
</ul>
<h4 id="booking-management_1">Booking Management</h4>
<ul>
<li><strong>Availability Management</strong></li>
<li>Calendar-based availability setting</li>
<li>Recurring availability patterns</li>
<li>Time slot blocking</li>
<li>Break time configuration</li>
<li>Holiday and vacation settings</li>
<li>
<p>Real-time availability updates</p>
</li>
<li>
<p><strong>Booking Processing</strong></p>
</li>
<li>Booking request notifications</li>
<li>Booking acceptance/rejection</li>
<li>Booking modification requests</li>
<li>Client communication tools</li>
<li>Booking confirmation system</li>
<li>Cancellation management</li>
</ul>
<h4 id="financial-management">Financial Management</h4>
<ul>
<li><strong>Earnings Tracking</strong></li>
<li>Revenue dashboard</li>
<li>Earnings history</li>
<li>Payment processing status</li>
<li>Payout management</li>
<li>Financial reporting</li>
<li>
<p>Tax document generation</p>
</li>
<li>
<p><strong>Pricing Management</strong></p>
</li>
<li>Dynamic pricing options</li>
<li>Package deals and discounts</li>
<li>Seasonal pricing</li>
<li>Bulk booking discounts</li>
<li>Service add-ons pricing</li>
<li>Commission tracking</li>
</ul>
<h4 id="client-management">Client Management</h4>
<ul>
<li><strong>Client Database</strong></li>
<li>Client contact information</li>
<li>Service history per client</li>
<li>Client preferences tracking</li>
<li>Client communication history</li>
<li>Client notes and tags</li>
<li>
<p>Client satisfaction metrics</p>
</li>
<li>
<p><strong>Communication Tools</strong></p>
</li>
<li>Bulk messaging to clients</li>
<li>Automated follow-up messages</li>
<li>Service reminders</li>
<li>Marketing communications</li>
<li>Client feedback collection</li>
<li>Support ticket management</li>
</ul>
<h3 id="administrator-features">🟡 Administrator Features</h3>
<h4 id="platform-management">Platform Management</h4>
<ul>
<li><strong>User Management</strong></li>
<li>User account verification</li>
<li>User role assignment</li>
<li>Account suspension/activation</li>
<li>User activity monitoring</li>
<li>Bulk user operations</li>
<li>
<p>User data export</p>
</li>
<li>
<p><strong>Content Management</strong></p>
</li>
<li>Service category management</li>
<li>Content moderation</li>
<li>Featured content management</li>
<li>Banner and promotion management</li>
<li>Terms of service updates</li>
<li>Help documentation management</li>
</ul>
<h4 id="system-administration">System Administration</h4>
<ul>
<li><strong>Platform Monitoring</strong></li>
<li>System performance monitoring</li>
<li>Error tracking and logging</li>
<li>Security monitoring</li>
<li>Usage analytics</li>
<li>Performance metrics</li>
<li>
<p>System health checks</p>
</li>
<li>
<p><strong>Financial Management</strong></p>
</li>
<li>Commission tracking</li>
<li>Payment processing monitoring</li>
<li>Refund management</li>
<li>Financial reporting</li>
<li>Revenue analytics</li>
<li>Payout management</li>
</ul>
<h4 id="support-moderation">Support &amp; Moderation</h4>
<ul>
<li><strong>Support System</strong></li>
<li>Support ticket management</li>
<li>User inquiry handling</li>
<li>Issue escalation</li>
<li>Knowledge base management</li>
<li>FAQ management</li>
<li>
<p>Support analytics</p>
</li>
<li>
<p><strong>Content Moderation</strong></p>
</li>
<li>Review moderation</li>
<li>Service listing approval</li>
<li>Inappropriate content flagging</li>
<li>User behavior monitoring</li>
<li>Dispute resolution</li>
<li>Policy enforcement</li>
</ul>
<hr />
<h2 id="core-platform-features">🚀 Core Platform Features</h2>
<h3 id="advanced-search-discovery">🔍 Advanced Search &amp; Discovery</h3>
<h4 id="intelligent-search-engine">Intelligent Search Engine</h4>
<ul>
<li><strong>Natural Language Processing</strong></li>
<li>Voice search capabilities</li>
<li>Intent recognition</li>
<li>Search suggestions and autocomplete</li>
<li>Search result ranking algorithms</li>
<li>
<p>Search analytics and optimization</p>
</li>
<li>
<p><strong>Machine Learning Recommendations</strong></p>
</li>
<li>Personalized service recommendations</li>
<li>Collaborative filtering</li>
<li>Content-based filtering</li>
<li>Hybrid recommendation systems</li>
<li>Recommendation explanation</li>
<li>A/B testing for recommendations</li>
</ul>
<h4 id="geographic-features">Geographic Features</h4>
<ul>
<li><strong>Location Services</strong></li>
<li>GPS-based location detection</li>
<li>Map integration with service locations</li>
<li>Distance calculation and sorting</li>
<li>Service area visualization</li>
<li>Location-based notifications</li>
<li>
<p>Geofencing capabilities</p>
</li>
<li>
<p><strong>Multi-Location Support</strong></p>
</li>
<li>Multiple service locations per provider</li>
<li>Location-specific availability</li>
<li>Travel distance calculations</li>
<li>Location-based pricing</li>
<li>Regional service variations</li>
<li>Cross-location booking management</li>
</ul>
<h3 id="advanced-booking-system">📅 Advanced Booking System</h3>
<h4 id="smart-scheduling">Smart Scheduling</h4>
<ul>
<li><strong>Intelligent Calendar</strong></li>
<li>Conflict detection and resolution</li>
<li>Buffer time management</li>
<li>Travel time calculations</li>
<li>Resource availability tracking</li>
<li>Automated scheduling optimization</li>
<li>
<p>Recurring appointment management</p>
</li>
<li>
<p><strong>Booking Automation</strong></p>
</li>
<li>Automated booking confirmations</li>
<li>Reminder notifications</li>
<li>Rescheduling suggestions</li>
<li>Waitlist management</li>
<li>Booking conflict resolution</li>
<li>Automated follow-up sequences</li>
</ul>
<h4 id="service-customization">Service Customization</h4>
<ul>
<li><strong>Dynamic Service Options</strong></li>
<li>Add-on services selection</li>
<li>Service duration customization</li>
<li>Special requirements handling</li>
<li>Package deal creation</li>
<li>Service bundling options</li>
<li>
<p>Custom pricing calculations</p>
</li>
<li>
<p><strong>Resource Management</strong></p>
</li>
<li>Staff scheduling and assignment</li>
<li>Equipment availability tracking</li>
<li>Resource conflict resolution</li>
<li>Capacity management</li>
<li>Resource optimization</li>
<li>Multi-resource booking support</li>
</ul>
<h3 id="payment-financial-features">💳 Payment &amp; Financial Features</h3>
<h4 id="advanced-payment-processing">Advanced Payment Processing</h4>
<ul>
<li><strong>Multiple Payment Methods</strong></li>
<li>Credit/debit card processing</li>
<li>Digital wallet integration</li>
<li>Cryptocurrency payments</li>
<li>Bank transfer options</li>
<li>Buy now, pay later options</li>
<li>
<p>International payment support</p>
</li>
<li>
<p><strong>Financial Security</strong></p>
</li>
<li>PCI DSS compliance</li>
<li>Tokenized payment processing</li>
<li>Fraud detection and prevention</li>
<li>Secure payment storage</li>
<li>Payment encryption</li>
<li>Audit trail maintenance</li>
</ul>
<h4 id="revenue-management">Revenue Management</h4>
<ul>
<li><strong>Dynamic Pricing</strong></li>
<li>Demand-based pricing</li>
<li>Seasonal pricing adjustments</li>
<li>Peak time pricing</li>
<li>Loyalty discounts</li>
<li>Volume discounts</li>
<li>
<p>Promotional pricing</p>
</li>
<li>
<p><strong>Financial Reporting</strong></p>
</li>
<li>Real-time revenue tracking</li>
<li>Profit and loss statements</li>
<li>Tax reporting and compliance</li>
<li>Financial forecasting</li>
<li>Cost analysis</li>
<li>ROI calculations</li>
</ul>
<hr />
<h2 id="advanced-features">🔧 Advanced Features</h2>
<h3 id="ai-powered-features">🤖 AI-Powered Features</h3>
<h4 id="intelligent-automation">Intelligent Automation</h4>
<ul>
<li><strong>Chatbot Integration</strong></li>
<li>24/7 customer support</li>
<li>Natural language processing</li>
<li>Automated query resolution</li>
<li>Escalation to human agents</li>
<li>Multi-language support</li>
<li>
<p>Learning from interactions</p>
</li>
<li>
<p><strong>Predictive Analytics</strong></p>
</li>
<li>Demand forecasting</li>
<li>Customer behavior prediction</li>
<li>Churn prediction</li>
<li>Revenue forecasting</li>
<li>Market trend analysis</li>
<li>Risk assessment</li>
</ul>
<h4 id="smart-matching">Smart Matching</h4>
<ul>
<li><strong>Provider-Client Matching</strong></li>
<li>Skill-based matching</li>
<li>Location optimization</li>
<li>Availability matching</li>
<li>Preference alignment</li>
<li>Historical success rates</li>
<li>
<p>Mutual compatibility scoring</p>
</li>
<li>
<p><strong>Service Recommendations</strong></p>
</li>
<li>Personalized suggestions</li>
<li>Cross-selling opportunities</li>
<li>Upselling recommendations</li>
<li>Complementary services</li>
<li>Seasonal recommendations</li>
<li>Trend-based suggestions</li>
</ul>
<h3 id="analytics-reporting">📊 Analytics &amp; Reporting</h3>
<h4 id="business-intelligence">Business Intelligence</h4>
<ul>
<li><strong>Dashboard Analytics</strong></li>
<li>Real-time performance metrics</li>
<li>Customizable dashboards</li>
<li>KPI tracking and monitoring</li>
<li>Trend analysis and visualization</li>
<li>Comparative analytics</li>
<li>
<p>Export and sharing capabilities</p>
</li>
<li>
<p><strong>Advanced Reporting</strong></p>
</li>
<li>Custom report generation</li>
<li>Scheduled report delivery</li>
<li>Data visualization tools</li>
<li>Statistical analysis</li>
<li>Predictive modeling</li>
<li>Business insights generation</li>
</ul>
<h4 id="user-analytics">User Analytics</h4>
<ul>
<li><strong>Behavior Tracking</strong></li>
<li>User journey analysis</li>
<li>Conversion funnel tracking</li>
<li>Engagement metrics</li>
<li>Retention analysis</li>
<li>Feature usage statistics</li>
<li>
<p>A/B testing results</p>
</li>
<li>
<p><strong>Performance Metrics</strong></p>
</li>
<li>Service completion rates</li>
<li>Customer satisfaction scores</li>
<li>Provider performance ratings</li>
<li>Response time metrics</li>
<li>Booking success rates</li>
<li>Revenue per user</li>
</ul>
<hr />
<h2 id="integration-features">🔗 Integration Features</h2>
<h3 id="third-party-integrations">🌐 Third-Party Integrations</h3>
<h4 id="communication-platforms">Communication Platforms</h4>
<ul>
<li><strong>Email Integration</strong></li>
<li>SendGrid email service</li>
<li>Automated email campaigns</li>
<li>Email template management</li>
<li>Delivery tracking</li>
<li>Bounce and unsubscribe handling</li>
<li>
<p>Email analytics</p>
</li>
<li>
<p><strong>SMS Integration</strong></p>
</li>
<li>Twilio SMS service</li>
<li>Automated SMS notifications</li>
<li>Two-way SMS communication</li>
<li>SMS campaign management</li>
<li>Delivery status tracking</li>
<li>SMS analytics</li>
</ul>
<h4 id="social-media-integration">Social Media Integration</h4>
<ul>
<li><strong>Social Login</strong></li>
<li>Google OAuth integration</li>
<li>Facebook login</li>
<li>LinkedIn authentication</li>
<li>Apple Sign-In</li>
<li>Social profile import</li>
<li>
<p>Social account linking</p>
</li>
<li>
<p><strong>Social Sharing</strong></p>
</li>
<li>Service sharing on social platforms</li>
<li>Review sharing capabilities</li>
<li>Social media marketing tools</li>
<li>Social proof integration</li>
<li>Viral marketing features</li>
<li>Social analytics</li>
</ul>
<h4 id="business-tools-integration">Business Tools Integration</h4>
<ul>
<li><strong>CRM Integration</strong></li>
<li>Salesforce integration</li>
<li>HubSpot connectivity</li>
<li>Customer data synchronization</li>
<li>Lead management</li>
<li>Sales pipeline tracking</li>
<li>
<p>Customer lifecycle management</p>
</li>
<li>
<p><strong>Accounting Integration</strong></p>
</li>
<li>QuickBooks integration</li>
<li>Xero connectivity</li>
<li>Financial data synchronization</li>
<li>Invoice generation</li>
<li>Tax calculation</li>
<li>Financial reporting</li>
</ul>
<h3 id="mobile-integration">📱 Mobile Integration</h3>
<h4 id="mobile-app-features">Mobile App Features</h4>
<ul>
<li><strong>Native Mobile Apps</strong></li>
<li>iOS and Android applications</li>
<li>Offline functionality</li>
<li>Push notifications</li>
<li>Location services</li>
<li>Camera integration</li>
<li>
<p>Biometric authentication</p>
</li>
<li>
<p><strong>Progressive Web App</strong></p>
</li>
<li>Web app installation</li>
<li>Offline capabilities</li>
<li>Push notifications</li>
<li>Responsive design</li>
<li>Fast loading</li>
<li>App-like experience</li>
</ul>
<h4 id="cross-platform-synchronization">Cross-Platform Synchronization</h4>
<ul>
<li><strong>Data Synchronization</strong></li>
<li>Real-time data sync</li>
<li>Conflict resolution</li>
<li>Offline data storage</li>
<li>Sync status tracking</li>
<li>Data integrity maintenance</li>
<li>Version control</li>
</ul>
<hr />
<h2 id="administrative-features">🛠️ Administrative Features</h2>
<h3 id="platform-administration">👨‍💼 Platform Administration</h3>
<h4 id="user-management">User Management</h4>
<ul>
<li><strong>Account Administration</strong></li>
<li>User account creation</li>
<li>Role and permission management</li>
<li>Account status management</li>
<li>Bulk user operations</li>
<li>User data export</li>
<li>
<p>Account audit trails</p>
</li>
<li>
<p><strong>Content Moderation</strong></p>
</li>
<li>Service listing approval</li>
<li>Review moderation</li>
<li>Content flagging system</li>
<li>Automated content filtering</li>
<li>Manual review processes</li>
<li>Content policy enforcement</li>
</ul>
<h4 id="system-configuration">System Configuration</h4>
<ul>
<li><strong>Platform Settings</strong></li>
<li>Global configuration management</li>
<li>Feature flag management</li>
<li>System parameter tuning</li>
<li>Performance optimization</li>
<li>Security configuration</li>
<li>
<p>Maintenance mode management</p>
</li>
<li>
<p><strong>Integration Management</strong></p>
</li>
<li>Third-party service configuration</li>
<li>API key management</li>
<li>Webhook configuration</li>
<li>Service monitoring</li>
<li>Error handling</li>
<li>Performance tracking</li>
</ul>
<h3 id="business-intelligence_1">📈 Business Intelligence</h3>
<h4 id="analytics-dashboard">Analytics Dashboard</h4>
<ul>
<li><strong>Real-Time Metrics</strong></li>
<li>Live user activity</li>
<li>Real-time booking data</li>
<li>System performance metrics</li>
<li>Revenue tracking</li>
<li>Error monitoring</li>
<li>
<p>Usage statistics</p>
</li>
<li>
<p><strong>Historical Analysis</strong></p>
</li>
<li>Trend analysis</li>
<li>Comparative reporting</li>
<li>Seasonal analysis</li>
<li>Growth metrics</li>
<li>Performance benchmarking</li>
<li>Predictive analytics</li>
</ul>
<h4 id="reporting-system">Reporting System</h4>
<ul>
<li><strong>Automated Reports</strong></li>
<li>Daily, weekly, monthly reports</li>
<li>Custom report scheduling</li>
<li>Email report delivery</li>
<li>Report customization</li>
<li>Data export options</li>
<li>
<p>Report sharing</p>
</li>
<li>
<p><strong>Custom Analytics</strong></p>
</li>
<li>Ad-hoc query capabilities</li>
<li>Custom metric creation</li>
<li>Data visualization tools</li>
<li>Statistical analysis</li>
<li>Machine learning insights</li>
<li>Business intelligence tools</li>
</ul>
<hr />
<h2 id="mobile-features">📱 Mobile Features</h2>
<h3 id="mobile-app-capabilities">📲 Mobile App Capabilities</h3>
<h4 id="core-mobile-features">Core Mobile Features</h4>
<ul>
<li><strong>Native App Experience</strong></li>
<li>Smooth, responsive interface</li>
<li>Offline functionality</li>
<li>Push notifications</li>
<li>Location services</li>
<li>Camera integration</li>
<li>
<p>Biometric authentication</p>
</li>
<li>
<p><strong>Mobile-Specific Features</strong></p>
</li>
<li>Touch-optimized interface</li>
<li>Swipe gestures</li>
<li>Voice search</li>
<li>Mobile payment options</li>
<li>Quick booking</li>
<li>Mobile notifications</li>
</ul>
<h4 id="cross-platform-features">Cross-Platform Features</h4>
<ul>
<li><strong>Responsive Design</strong></li>
<li>Adaptive layouts</li>
<li>Touch-friendly controls</li>
<li>Mobile-optimized forms</li>
<li>Fast loading times</li>
<li>Reduced data usage</li>
<li>Battery optimization</li>
</ul>
<hr />
<h2 id="api-features">🔌 API Features</h2>
<h3 id="restful-api">🌐 RESTful API</h3>
<h4 id="core-api-endpoints">Core API Endpoints</h4>
<ul>
<li><strong>User Management API</strong></li>
<li>User registration and authentication</li>
<li>Profile management</li>
<li>User data retrieval</li>
<li>Account operations</li>
<li>Permission management</li>
<li>
<p>User analytics</p>
</li>
<li>
<p><strong>Service Management API</strong></p>
</li>
<li>Service CRUD operations</li>
<li>Service search and filtering</li>
<li>Category management</li>
<li>Availability management</li>
<li>Service analytics</li>
<li>Service recommendations</li>
</ul>
<h4 id="advanced-api-features">Advanced API Features</h4>
<ul>
<li><strong>Real-Time API</strong></li>
<li>WebSocket connections</li>
<li>Real-time notifications</li>
<li>Live updates</li>
<li>Instant messaging</li>
<li>Real-time analytics</li>
<li>
<p>Live tracking</p>
</li>
<li>
<p><strong>GraphQL API</strong></p>
</li>
<li>Flexible data querying</li>
<li>Efficient data fetching</li>
<li>Schema introspection</li>
<li>Real-time subscriptions</li>
<li>Type safety</li>
<li>Developer-friendly</li>
</ul>
<h3 id="api-security">🔐 API Security</h3>
<h4 id="authentication-authorization">Authentication &amp; Authorization</h4>
<ul>
<li><strong>API Authentication</strong></li>
<li>JWT token-based authentication</li>
<li>API key management</li>
<li>OAuth 2.0 integration</li>
<li>Rate limiting</li>
<li>Request validation</li>
<li>
<p>Security headers</p>
</li>
<li>
<p><strong>API Security Features</strong></p>
</li>
<li>HTTPS enforcement</li>
<li>CORS configuration</li>
<li>Input validation</li>
<li>SQL injection prevention</li>
<li>XSS protection</li>
<li>Security monitoring</li>
</ul>
<hr />
<h2 id="feature-roadmap">🎯 Feature Roadmap</h2>
<h3 id="phase-1-core-features-q1-2025">Phase 1: Core Features (Q1 2025)</h3>
<ul>
<li>User registration and authentication</li>
<li>Basic service listing and search</li>
<li>Simple booking system</li>
<li>Payment processing</li>
<li>Basic messaging</li>
<li>Review system</li>
</ul>
<h3 id="phase-2-enhanced-features-q2-2025">Phase 2: Enhanced Features (Q2 2025)</h3>
<ul>
<li>Advanced search and filtering</li>
<li>Mobile applications</li>
<li>Real-time notifications</li>
<li>Advanced analytics</li>
<li>Third-party integrations</li>
<li>AI-powered recommendations</li>
</ul>
<h3 id="phase-3-enterprise-features-q3-2025">Phase 3: Enterprise Features (Q3 2025)</h3>
<ul>
<li>Multi-tenant architecture</li>
<li>Advanced reporting</li>
<li>White-label solutions</li>
<li>Enterprise integrations</li>
<li>Advanced security features</li>
<li>Scalability improvements</li>
</ul>
<h3 id="phase-4-global-expansion-q4-2025">Phase 4: Global Expansion (Q4 2025)</h3>
<ul>
<li>Multi-language support</li>
<li>International payment methods</li>
<li>Global compliance features</li>
<li>Advanced AI features</li>
<li>Marketplace expansion</li>
<li>Global analytics</li>
</ul>
<hr />
<p>This comprehensive feature documentation provides detailed information about all capabilities of the Business Services Hub platform, organized by user roles and feature categories for easy navigation and understanding.</p>`},roadmap:{title:"🗺️ Business Services Hub - Development Roadmap",content:`<h1 id="business-services-hub-development-roadmap">🗺️ Business Services Hub - Development Roadmap</h1>
<h2 id="table-of-contents">📋 Table of Contents</h2>
<ol>
<li><a href="#roadmap-overview">Roadmap Overview</a></li>
<li><a href="#phase-1-core-platform-q1-2025">Phase 1: Core Platform (Q1 2025)</a></li>
<li><a href="#phase-2-enhanced-features-q2-2025">Phase 2: Enhanced Features (Q2 2025)</a></li>
<li><a href="#phase-3-enterprise-features-q3-2025">Phase 3: Enterprise Features (Q3 2025)</a></li>
<li><a href="#phase-4-global-expansion-q4-2025">Phase 4: Global Expansion (Q4 2025)</a></li>
<li><a href="#innovation-timeline">Innovation Timeline</a></li>
<li><a href="#success-metrics">Success Metrics</a></li>
<li><a href="#risk-mitigation">Risk Mitigation</a></li>
</ol>
<hr />
<h2 id="roadmap-overview">🎯 Roadmap Overview</h2>
<p>The Business Services Hub development roadmap is structured in four strategic phases, each building upon the previous phase to create a comprehensive, scalable, and globally competitive platform.</p>
<h3 id="development-philosophy">Development Philosophy</h3>
<ul>
<li><strong>User-Centric Design</strong>: Every feature prioritizes user experience and value</li>
<li><strong>Scalable Architecture</strong>: Built to handle growth from startup to enterprise</li>
<li><strong>Security-First</strong>: Security and privacy integrated from the ground up</li>
<li><strong>Data-Driven</strong>: Decisions based on user feedback and analytics</li>
<li><strong>Innovation-Focused</strong>: Continuous innovation and technology adoption</li>
</ul>
<h3 id="timeline-overview">Timeline Overview</h3>
<pre><code class="language-mermaid">gantt
    title Business Services Hub Development Roadmap
    dateFormat  YYYY-MM-DD
    section Phase 1: Core Platform
    User Authentication     :done, auth, 2025-01-01, 2025-01-15
    Service Marketplace     :done, marketplace, 2025-01-15, 2025-02-15
    Booking System          :done, booking, 2025-02-15, 2025-03-01
    Payment Integration     :done, payment, 2025-03-01, 2025-03-15
    Review System           :done, review, 2025-03-15, 2025-03-31
    Admin Dashboard         :done, admin, 2025-03-15, 2025-03-31

    section Phase 2: Enhanced Features
    Advanced Search         :active, search, 2025-04-01, 2025-04-15
    Real-time Notifications :notifications, 2025-04-15, 2025-05-01
    Mobile App Development  :mobile, 2025-05-01, 2025-06-15
    Analytics Dashboard     :analytics, 2025-06-01, 2025-06-30
    Multi-language Support  :i18n, 2025-06-15, 2025-06-30

    section Phase 3: Enterprise Features
    Enterprise User Management :enterprise, 2025-07-01, 2025-07-31
    Advanced Reporting      :reporting, 2025-08-01, 2025-08-31
    API Marketplace         :api, 2025-09-01, 2025-09-30
    White-label Solutions   :white-label, 2025-09-15, 2025-10-15
    Advanced Security       :security, 2025-10-01, 2025-10-31

    section Phase 4: Global Expansion
    International Payments  :intl-payments, 2025-11-01, 2025-11-30
    Multi-currency Support  :currency, 2025-11-15, 2025-12-15
    Global Compliance       :compliance, 2025-12-01, 2025-12-31
    Advanced AI Features    :ai, 2025-12-15, 2026-01-31
    Marketplace Expansion   :expansion, 2026-01-01, 2026-01-31
</code></pre>
<hr />
<h2 id="phase-1-core-platform-q1-2025">🚀 Phase 1: Core Platform (Q1 2025)</h2>
<h3 id="overview">Overview</h3>
<p>Establish the foundational platform with essential features for basic marketplace operations.</p>
<h3 id="completed-features">✅ Completed Features</h3>
<h4 id="user-management">User Management</h4>
<ul>
<li><strong>User Authentication</strong>: JWT-based authentication system</li>
<li><strong>Role-Based Access Control</strong>: Client, Provider, Admin, Super Admin roles</li>
<li><strong>Profile Management</strong>: Comprehensive user profiles</li>
<li><strong>Email Verification</strong>: Secure email verification system</li>
<li><strong>Password Reset</strong>: Secure password reset functionality</li>
</ul>
<h4 id="service-marketplace">Service Marketplace</h4>
<ul>
<li><strong>Service Listings</strong>: Create and manage service offerings</li>
<li><strong>Service Categories</strong>: 8+ main categories with subcategories</li>
<li><strong>Service Search</strong>: Basic search and filtering capabilities</li>
<li><strong>Service Details</strong>: Comprehensive service information pages</li>
<li><strong>Provider Profiles</strong>: Detailed provider information</li>
</ul>
<h4 id="booking-system">Booking System</h4>
<ul>
<li><strong>Service Booking</strong>: One-click booking functionality</li>
<li><strong>Availability Management</strong>: Provider availability scheduling</li>
<li><strong>Booking Management</strong>: View and manage bookings</li>
<li><strong>Calendar Integration</strong>: Integrated scheduling system</li>
<li><strong>Booking Notifications</strong>: Email and in-app notifications</li>
</ul>
<h4 id="payment-processing">Payment Processing</h4>
<ul>
<li><strong>Stripe Integration</strong>: Secure payment processing</li>
<li><strong>Multiple Payment Methods</strong>: Credit cards, bank transfers</li>
<li><strong>Invoice Generation</strong>: Automated invoice creation</li>
<li><strong>Payment History</strong>: Complete payment records</li>
<li><strong>Refund Management</strong>: Automated refund processing</li>
</ul>
<h4 id="review-system">Review System</h4>
<ul>
<li><strong>Service Reviews</strong>: Rate and review completed services</li>
<li><strong>Provider Reviews</strong>: Review service providers</li>
<li><strong>Rating System</strong>: 5-star rating system</li>
<li><strong>Review Moderation</strong>: Admin review moderation</li>
<li><strong>Review Analytics</strong>: Review performance tracking</li>
</ul>
<h4 id="admin-dashboard">Admin Dashboard</h4>
<ul>
<li><strong>User Management</strong>: Complete user administration</li>
<li><strong>Service Moderation</strong>: Service approval and moderation</li>
<li><strong>Platform Analytics</strong>: Basic platform metrics</li>
<li><strong>Content Management</strong>: Platform content management</li>
<li><strong>Support Tools</strong>: User support and dispute resolution</li>
</ul>
<h3 id="phase-1-success-metrics">🎯 Phase 1 Success Metrics</h3>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Target</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Active Users</strong></td>
<td>1,000</td>
<td>✅ Achieved</td>
</tr>
<tr>
<td><strong>Service Providers</strong></td>
<td>100</td>
<td>✅ Achieved</td>
</tr>
<tr>
<td><strong>Monthly Bookings</strong></td>
<td>500</td>
<td>✅ Achieved</td>
</tr>
<tr>
<td><strong>Platform Uptime</strong></td>
<td>99.5%</td>
<td>✅ Achieved</td>
</tr>
<tr>
<td><strong>User Satisfaction</strong></td>
<td>4.0/5</td>
<td>✅ Achieved</td>
</tr>
</tbody>
</table>
<hr />
<h2 id="phase-2-enhanced-features-q2-2025">🔧 Phase 2: Enhanced Features (Q2 2025)</h2>
<h3 id="overview_1">Overview</h3>
<p>Enhance the platform with advanced features, mobile capabilities, and improved user experience.</p>
<h3 id="in-progress-features">🔄 In Progress Features</h3>
<h4 id="advanced-search-discovery">Advanced Search &amp; Discovery</h4>
<ul>
<li><strong>AI-Powered Search</strong>: Intelligent search with natural language processing</li>
<li><strong>Advanced Filters</strong>: Multi-criteria filtering system</li>
<li><strong>Search Suggestions</strong>: Auto-complete and search suggestions</li>
<li><strong>Saved Searches</strong>: Save and manage search preferences</li>
<li><strong>Search Analytics</strong>: Track search performance and trends</li>
</ul>
<h4 id="real-time-features">Real-time Features</h4>
<ul>
<li><strong>Live Notifications</strong>: Real-time notification system</li>
<li><strong>Live Chat</strong>: Real-time messaging between users</li>
<li><strong>Live Progress Updates</strong>: Real-time project progress tracking</li>
<li><strong>Live Availability</strong>: Real-time availability updates</li>
<li><strong>WebSocket Integration</strong>: Bidirectional real-time communication</li>
</ul>
<h4 id="mobile-application">Mobile Application</h4>
<ul>
<li><strong>Native iOS App</strong>: Full-featured iOS application</li>
<li><strong>Native Android App</strong>: Full-featured Android application</li>
<li><strong>Cross-Platform Features</strong>: Consistent experience across platforms</li>
<li><strong>Offline Capabilities</strong>: Limited offline functionality</li>
<li><strong>Push Notifications</strong>: Mobile push notification system</li>
</ul>
<h4 id="advanced-analytics">Advanced Analytics</h4>
<ul>
<li><strong>User Analytics</strong>: Comprehensive user behavior analytics</li>
<li><strong>Business Analytics</strong>: Detailed business performance metrics</li>
<li><strong>Revenue Analytics</strong>: Advanced revenue tracking and forecasting</li>
<li><strong>Custom Dashboards</strong>: Personalized analytics dashboards</li>
<li><strong>Data Export</strong>: Export analytics data in various formats</li>
</ul>
<h4 id="multi-language-support">Multi-language Support</h4>
<ul>
<li><strong>Internationalization</strong>: Support for multiple languages</li>
<li><strong>Localization</strong>: Region-specific content and features</li>
<li><strong>Language Detection</strong>: Automatic language detection</li>
<li><strong>Translation Management</strong>: Content translation system</li>
<li><strong>Cultural Adaptation</strong>: Region-specific user experience</li>
</ul>
<h3 id="phase-2-success-metrics">🎯 Phase 2 Success Metrics</h3>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Target</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Active Users</strong></td>
<td>10,000</td>
<td>🔄 In Progress</td>
</tr>
<tr>
<td><strong>Service Providers</strong></td>
<td>1,000</td>
<td>🔄 In Progress</td>
</tr>
<tr>
<td><strong>Monthly Bookings</strong></td>
<td>5,000</td>
<td>🔄 In Progress</td>
</tr>
<tr>
<td><strong>Mobile App Downloads</strong></td>
<td>5,000</td>
<td>🔄 In Progress</td>
</tr>
<tr>
<td><strong>Search Success Rate</strong></td>
<td>85%</td>
<td>🔄 In Progress</td>
</tr>
</tbody>
</table>
<hr />
<h2 id="phase-3-enterprise-features-q3-2025">🏢 Phase 3: Enterprise Features (Q3 2025)</h2>
<h3 id="overview_2">Overview</h3>
<p>Introduce enterprise-grade features, advanced security, and white-label solutions.</p>
<h3 id="planned-features">📋 Planned Features</h3>
<h4 id="enterprise-user-management">Enterprise User Management</h4>
<ul>
<li><strong>Organization Management</strong>: Multi-tenant organization support</li>
<li><strong>Advanced Permissions</strong>: Granular permission system</li>
<li><strong>SSO Integration</strong>: Single sign-on with enterprise systems</li>
<li><strong>LDAP/Active Directory</strong>: Enterprise directory integration</li>
<li><strong>Bulk User Management</strong>: Mass user operations</li>
</ul>
<h4 id="advanced-reporting-analytics">Advanced Reporting &amp; Analytics</h4>
<ul>
<li><strong>Custom Reports</strong>: Build custom reports and dashboards</li>
<li><strong>Scheduled Reports</strong>: Automated report generation and delivery</li>
<li><strong>Data Visualization</strong>: Advanced charting and visualization</li>
<li><strong>Predictive Analytics</strong>: AI-powered business insights</li>
<li><strong>Compliance Reporting</strong>: Regulatory compliance reports</li>
</ul>
<h4 id="api-marketplace">API Marketplace</h4>
<ul>
<li><strong>Public API</strong>: Comprehensive REST API</li>
<li><strong>API Documentation</strong>: Interactive API documentation</li>
<li><strong>API Keys Management</strong>: Secure API key management</li>
<li><strong>Rate Limiting</strong>: Advanced API rate limiting</li>
<li><strong>Webhook System</strong>: Real-time webhook notifications</li>
</ul>
<h4 id="white-label-solutions">White-label Solutions</h4>
<ul>
<li><strong>Custom Branding</strong>: White-label platform customization</li>
<li><strong>Custom Domains</strong>: Dedicated domain support</li>
<li><strong>Custom Themes</strong>: Brand-specific UI themes</li>
<li><strong>Custom Features</strong>: Tailored feature sets</li>
<li><strong>Multi-tenant Architecture</strong>: Isolated tenant environments</li>
</ul>
<h4 id="advanced-security-features">Advanced Security Features</h4>
<ul>
<li><strong>Advanced Authentication</strong>: Multi-factor authentication</li>
<li><strong>Security Monitoring</strong>: Real-time security monitoring</li>
<li><strong>Audit Logging</strong>: Comprehensive audit trails</li>
<li><strong>Data Encryption</strong>: Advanced data encryption</li>
<li><strong>Compliance Tools</strong>: GDPR, SOC 2 compliance tools</li>
</ul>
<h3 id="phase-3-success-metrics">🎯 Phase 3 Success Metrics</h3>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Target</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Active Users</strong></td>
<td>50,000</td>
<td>📋 Planned</td>
</tr>
<tr>
<td><strong>Enterprise Clients</strong></td>
<td>50</td>
<td>📋 Planned</td>
</tr>
<tr>
<td><strong>API Calls/Month</strong></td>
<td>1M</td>
<td>📋 Planned</td>
</tr>
<tr>
<td><strong>White-label Deployments</strong></td>
<td>10</td>
<td>📋 Planned</td>
</tr>
<tr>
<td><strong>Security Score</strong></td>
<td>95/100</td>
<td>📋 Planned</td>
</tr>
</tbody>
</table>
<hr />
<h2 id="phase-4-global-expansion-q4-2025">🌍 Phase 4: Global Expansion (Q4 2025)</h2>
<h3 id="overview_3">Overview</h3>
<p>Expand globally with international features, advanced AI, and marketplace expansion.</p>
<h3 id="planned-features_1">📋 Planned Features</h3>
<h4 id="international-expansion">International Expansion</h4>
<ul>
<li><strong>Multi-country Support</strong>: Support for multiple countries</li>
<li><strong>Local Payment Methods</strong>: Region-specific payment options</li>
<li><strong>Currency Support</strong>: Multi-currency transactions</li>
<li><strong>Tax Management</strong>: Automated tax calculation and reporting</li>
<li><strong>Compliance</strong>: International regulatory compliance</li>
</ul>
<h4 id="advanced-ai-features">Advanced AI Features</h4>
<ul>
<li><strong>AI Recommendations</strong>: Machine learning-powered recommendations</li>
<li><strong>Predictive Analytics</strong>: AI-driven business insights</li>
<li><strong>Automated Matching</strong>: AI-powered service-provider matching</li>
<li><strong>Chatbot Support</strong>: AI-powered customer support</li>
<li><strong>Fraud Detection</strong>: AI-based fraud prevention</li>
</ul>
<h4 id="marketplace-expansion">Marketplace Expansion</h4>
<ul>
<li><strong>New Service Categories</strong>: Expand service offerings</li>
<li><strong>B2B Marketplace</strong>: Business-to-business services</li>
<li><strong>Freelancer Platform</strong>: Enhanced freelancer features</li>
<li><strong>Agency Management</strong>: Agency and team management</li>
<li><strong>Partnership Program</strong>: Strategic partnership platform</li>
</ul>
<h4 id="global-compliance">Global Compliance</h4>
<ul>
<li><strong>GDPR Compliance</strong>: European data protection compliance</li>
<li><strong>CCPA Compliance</strong>: California privacy compliance</li>
<li><strong>SOC 2 Type II</strong>: Security compliance certification</li>
<li><strong>ISO 27001</strong>: Information security management</li>
<li><strong>PCI DSS</strong>: Payment card industry compliance</li>
</ul>
<h4 id="advanced-platform-features">Advanced Platform Features</h4>
<ul>
<li><strong>Blockchain Integration</strong>: Blockchain-based features</li>
<li><strong>IoT Integration</strong>: Internet of Things connectivity</li>
<li><strong>AR/VR Support</strong>: Augmented and virtual reality features</li>
<li><strong>Voice Integration</strong>: Voice-activated features</li>
<li><strong>Advanced Automation</strong>: Workflow automation tools</li>
</ul>
<h3 id="phase-4-success-metrics">🎯 Phase 4 Success Metrics</h3>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Target</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Active Users</strong></td>
<td>200,000</td>
<td>📋 Planned</td>
</tr>
<tr>
<td><strong>Countries Supported</strong></td>
<td>20</td>
<td>📋 Planned</td>
</tr>
<tr>
<td><strong>Currencies Supported</strong></td>
<td>10</td>
<td>📋 Planned</td>
</tr>
<tr>
<td><strong>AI Features</strong></td>
<td>15</td>
<td>📋 Planned</td>
</tr>
<tr>
<td><strong>Global Revenue</strong></td>
<td>$10M ARR</td>
<td>📋 Planned</td>
</tr>
</tbody>
</table>
<hr />
<h2 id="innovation-timeline">🚀 Innovation Timeline</h2>
<h3 id="2025-innovation-focus">2025 Innovation Focus</h3>
<h4 id="q1-2025-foundation">Q1 2025: Foundation</h4>
<ul>
<li><strong>Core Platform</strong>: Solid foundation with essential features</li>
<li><strong>User Experience</strong>: Intuitive and user-friendly interface</li>
<li><strong>Security</strong>: Basic security measures and data protection</li>
<li><strong>Performance</strong>: Fast and responsive platform</li>
</ul>
<h4 id="q2-2025-enhancement">Q2 2025: Enhancement</h4>
<ul>
<li><strong>Mobile First</strong>: Mobile-optimized experience</li>
<li><strong>Real-time Features</strong>: Live updates and communication</li>
<li><strong>AI Integration</strong>: Basic AI-powered features</li>
<li><strong>Analytics</strong>: Comprehensive data insights</li>
</ul>
<h4 id="q3-2025-enterprise">Q3 2025: Enterprise</h4>
<ul>
<li><strong>Scalability</strong>: Enterprise-grade architecture</li>
<li><strong>Security</strong>: Advanced security and compliance</li>
<li><strong>Customization</strong>: White-label and customization options</li>
<li><strong>Integration</strong>: API and third-party integrations</li>
</ul>
<h4 id="q4-2025-innovation">Q4 2025: Innovation</h4>
<ul>
<li><strong>AI/ML</strong>: Advanced artificial intelligence features</li>
<li><strong>Global Reach</strong>: International expansion and localization</li>
<li><strong>Emerging Tech</strong>: Blockchain, IoT, AR/VR integration</li>
<li><strong>Market Leadership</strong>: Industry-leading platform</li>
</ul>
<h3 id="2026-innovation-vision">2026+ Innovation Vision</h3>
<h4 id="emerging-technologies">Emerging Technologies</h4>
<ul>
<li><strong>Quantum Computing</strong>: Quantum-resistant security</li>
<li><strong>Edge Computing</strong>: Edge-based processing and storage</li>
<li><strong>5G Integration</strong>: Ultra-fast connectivity features</li>
<li><strong>Metaverse</strong>: Virtual reality marketplace</li>
</ul>
<h4 id="advanced-ai">Advanced AI</h4>
<ul>
<li><strong>Natural Language Processing</strong>: Advanced language understanding</li>
<li><strong>Computer Vision</strong>: Image and video analysis</li>
<li><strong>Predictive Modeling</strong>: Advanced business forecasting</li>
<li><strong>Autonomous Systems</strong>: Self-managing platform features</li>
</ul>
<h4 id="global-expansion">Global Expansion</h4>
<ul>
<li><strong>Worldwide Presence</strong>: Global market coverage</li>
<li><strong>Local Partnerships</strong>: Regional strategic partnerships</li>
<li><strong>Cultural Adaptation</strong>: Localized user experiences</li>
<li><strong>Regulatory Compliance</strong>: Global compliance framework</li>
</ul>
<hr />
<h2 id="success-metrics">📊 Success Metrics</h2>
<h3 id="key-performance-indicators-kpis">Key Performance Indicators (KPIs)</h3>
<h4 id="user-growth">User Growth</h4>
<ul>
<li><strong>Monthly Active Users (MAU)</strong>: Target 200K by end of 2025</li>
<li><strong>User Retention Rate</strong>: Target 70% monthly retention</li>
<li><strong>User Acquisition Cost (UAC)</strong>: Target &lt;$50 per user</li>
<li><strong>Lifetime Value (LTV)</strong>: Target $500 per user</li>
<li><strong>LTV/CAC Ratio</strong>: Target 10:1 ratio</li>
</ul>
<h4 id="business-metrics">Business Metrics</h4>
<ul>
<li><strong>Monthly Recurring Revenue (MRR)</strong>: Target $3M by end of 2025</li>
<li><strong>Annual Recurring Revenue (ARR)</strong>: Target $36M by end of 2025</li>
<li><strong>Gross Revenue Retention</strong>: Target 95%</li>
<li><strong>Net Revenue Retention</strong>: Target 120%</li>
<li><strong>Customer Acquisition Cost (CAC)</strong>: Target &lt;$50</li>
</ul>
<h4 id="platform-metrics">Platform Metrics</h4>
<ul>
<li><strong>Transaction Volume</strong>: Target $50M annually by end of 2025</li>
<li><strong>Platform Uptime</strong>: Target 99.9%</li>
<li><strong>API Response Time</strong>: Target &lt;200ms</li>
<li><strong>Page Load Time</strong>: Target &lt;2 seconds</li>
<li><strong>Customer Satisfaction</strong>: Target 4.5/5 stars</li>
</ul>
<h4 id="innovation-metrics">Innovation Metrics</h4>
<ul>
<li><strong>Feature Adoption Rate</strong>: Target 60% for new features</li>
<li><strong>AI Feature Usage</strong>: Target 40% of users using AI features</li>
<li><strong>Mobile App Usage</strong>: Target 70% of users on mobile</li>
<li><strong>API Usage</strong>: Target 1M API calls per month</li>
<li><strong>Developer Adoption</strong>: Target 100+ third-party integrations</li>
</ul>
<h3 id="milestone-tracking">Milestone Tracking</h3>
<h4 id="q1-2025-milestones">Q1 2025 Milestones</h4>
<ul>
<li>[x] Core platform launch</li>
<li>[x] 1,000 active users</li>
<li>[x] 100 service providers</li>
<li>[x] 500 monthly bookings</li>
<li>[x] 99.5% uptime</li>
</ul>
<h4 id="q2-2025-milestones">Q2 2025 Milestones</h4>
<ul>
<li>[ ] Mobile app launch</li>
<li>[ ] 10,000 active users</li>
<li>[ ] 1,000 service providers</li>
<li>[ ] 5,000 monthly bookings</li>
<li>[ ] AI-powered search</li>
</ul>
<h4 id="q3-2025-milestones">Q3 2025 Milestones</h4>
<ul>
<li>[ ] Enterprise features launch</li>
<li>[ ] 50,000 active users</li>
<li>[ ] 50 enterprise clients</li>
<li>[ ] API marketplace launch</li>
<li>[ ] White-label solutions</li>
</ul>
<h4 id="q4-2025-milestones">Q4 2025 Milestones</h4>
<ul>
<li>[ ] Global expansion</li>
<li>[ ] 200,000 active users</li>
<li>[ ] 20 countries supported</li>
<li>[ ] Advanced AI features</li>
<li>[ ] $10M ARR</li>
</ul>
<hr />
<h2 id="risk-mitigation">⚠️ Risk Mitigation</h2>
<h3 id="technical-risks">Technical Risks</h3>
<h4 id="scalability-challenges">Scalability Challenges</h4>
<ul>
<li><strong>Risk</strong>: Platform unable to handle rapid growth</li>
<li><strong>Mitigation</strong>: Cloud-native architecture, auto-scaling, performance monitoring</li>
<li><strong>Contingency</strong>: Load balancing, database sharding, CDN optimization</li>
</ul>
<h4 id="security-vulnerabilities">Security Vulnerabilities</h4>
<ul>
<li><strong>Risk</strong>: Data breaches or security compromises</li>
<li><strong>Mitigation</strong>: Regular security audits, penetration testing, security monitoring</li>
<li><strong>Contingency</strong>: Incident response plan, data backup, security patches</li>
</ul>
<h4 id="technology-dependencies">Technology Dependencies</h4>
<ul>
<li><strong>Risk</strong>: Third-party service failures or changes</li>
<li><strong>Mitigation</strong>: Multiple service providers, fallback systems, vendor monitoring</li>
<li><strong>Contingency</strong>: Service migration plans, backup systems, alternative providers</li>
</ul>
<h3 id="business-risks">Business Risks</h3>
<h4 id="market-competition">Market Competition</h4>
<ul>
<li><strong>Risk</strong>: Increased competition from established players</li>
<li><strong>Mitigation</strong>: Focus on differentiation, superior user experience, innovation</li>
<li><strong>Contingency</strong>: Pivot strategy, feature differentiation, market positioning</li>
</ul>
<h4 id="economic-downturn">Economic Downturn</h4>
<ul>
<li><strong>Risk</strong>: Economic recession affecting user spending</li>
<li><strong>Mitigation</strong>: Diversified revenue streams, cost optimization, value proposition</li>
<li><strong>Contingency</strong>: Cost reduction, pricing adjustments, market expansion</li>
</ul>
<h4 id="regulatory-changes">Regulatory Changes</h4>
<ul>
<li><strong>Risk</strong>: New regulations affecting platform operations</li>
<li><strong>Mitigation</strong>: Proactive compliance, legal monitoring, regulatory relationships</li>
<li><strong>Contingency</strong>: Compliance updates, legal support, regulatory adaptation</li>
</ul>
<h3 id="operational-risks">Operational Risks</h3>
<h4 id="talent-acquisition">Talent Acquisition</h4>
<ul>
<li><strong>Risk</strong>: Difficulty attracting and retaining key talent</li>
<li><strong>Mitigation</strong>: Competitive compensation, strong culture, growth opportunities</li>
<li><strong>Contingency</strong>: Remote work, contractor relationships, talent partnerships</li>
</ul>
<h4 id="funding-challenges">Funding Challenges</h4>
<ul>
<li><strong>Risk</strong>: Difficulty raising additional funding</li>
<li><strong>Mitigation</strong>: Strong financial performance, clear path to profitability</li>
<li><strong>Contingency</strong>: Cost optimization, revenue acceleration, alternative funding</li>
</ul>
<h4 id="execution-risk">Execution Risk</h4>
<ul>
<li><strong>Risk</strong>: Failure to execute roadmap effectively</li>
<li><strong>Mitigation</strong>: Strong project management, regular reviews, agile development</li>
<li><strong>Contingency</strong>: Scope adjustment, timeline modification, resource reallocation</li>
</ul>
<hr />
<h2 id="conclusion">🎯 Conclusion</h2>
<p>The Business Services Hub roadmap represents a comprehensive strategy for building a world-class marketplace platform. Through four strategic phases, we will:</p>
<ol>
<li><strong>Establish</strong> a solid foundation with core marketplace features</li>
<li><strong>Enhance</strong> the platform with advanced features and mobile capabilities</li>
<li><strong>Scale</strong> to enterprise-grade solutions and white-label offerings</li>
<li><strong>Expand</strong> globally with AI-powered features and international reach</li>
</ol>
<h3 id="success-factors">Success Factors</h3>
<ul>
<li><strong>User-Centric Approach</strong>: Every decision prioritizes user value</li>
<li><strong>Technical Excellence</strong>: Robust, scalable, and secure architecture</li>
<li><strong>Innovation Focus</strong>: Continuous innovation and technology adoption</li>
<li><strong>Market Responsiveness</strong>: Agile development and market feedback integration</li>
<li><strong>Team Excellence</strong>: Talented team with clear vision and execution</li>
</ul>
<h3 id="long-term-vision">Long-term Vision</h3>
<p>By 2026, the Business Services Hub will be:</p>
<ul>
<li><strong>The leading</strong> professional services marketplace globally</li>
<li><strong>A platform</strong> that empowers millions of service providers and clients</li>
<li><strong>An innovation</strong> leader in marketplace technology and AI</li>
<li><strong>A sustainable</strong> business with strong financial performance</li>
<li><strong>A positive</strong> force for economic growth and professional development</li>
</ul>
<hr />
<p><em>This roadmap is a living document that will be updated regularly based on market feedback, technological advances, and business priorities.</em></p>
<p><em>Last updated: September 2025</em>
<em>Roadmap version: 1.0.0</em></p>`},security_guide:{title:"🔒 Business Services Hub - Security Guide",content:`<h1 id="business-services-hub-security-guide">🔒 Business Services Hub - Security Guide</h1>
<h2 id="table-of-contents">📋 Table of Contents</h2>
<ol>
<li><a href="#security-overview">Security Overview</a></li>
<li><a href="#authentication--authorization">Authentication &amp; Authorization</a></li>
<li><a href="#row-level-security-rls">Row Level Security (RLS)</a></li>
<li><a href="#data-protection">Data Protection</a></li>
<li><a href="#api-security">API Security</a></li>
<li><a href="#infrastructure-security">Infrastructure Security</a></li>
<li><a href="#payment-security">Payment Security</a></li>
<li><a href="#monitoring--incident-response">Monitoring &amp; Incident Response</a></li>
<li><a href="#compliance--standards">Compliance &amp; Standards</a></li>
<li><a href="#security-best-practices">Security Best Practices</a></li>
</ol>
<hr />
<h2 id="security-overview">🔐 Security Overview</h2>
<h3 id="security-philosophy">Security Philosophy</h3>
<p>The Business Services Hub is built with security as a fundamental principle, implementing multiple layers of protection to ensure the safety and privacy of user data, financial transactions, and platform operations.</p>
<h3 id="security-principles">Security Principles</h3>
<ul>
<li><strong>Defense in Depth</strong>: Multiple security layers at every level</li>
<li><strong>Zero Trust Architecture</strong>: Never trust, always verify</li>
<li><strong>Least Privilege Access</strong>: Users have minimum required permissions</li>
<li><strong>Data Encryption</strong>: All data encrypted in transit and at rest</li>
<li><strong>Regular Audits</strong>: Continuous security monitoring and assessment</li>
</ul>
<h3 id="security-architecture">Security Architecture</h3>
<pre><code>┌─────────────────────────────────────────────────────────────────────────────────┐
│                            Security Architecture                               │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                        Frontend Security                               │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │    │
│  │  │   Input     │  │   XSS       │  │   CSRF      │  │   Content   │   │    │
│  │  │ Validation  │  │ Protection  │  │ Protection  │  │ Security    │   │    │
│  │  │   (Zod)     │  │   (CSP)     │  │   (Tokens)  │  │   Policy    │   │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │    │
│  └─────────────────────────────────────────────────────────────────────────┘    │
│                                    │                                            │
│                                    ▼                                            │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                        API Security                                   │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │    │
│  │  │   JWT       │  │   Rate      │  │   CORS      │  │   Input     │   │    │
│  │  │   Auth      │  │  Limiting   │  │   Headers   │  │ Validation  │   │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │    │
│  └─────────────────────────────────────────────────────────────────────────┘    │
│                                    │                                            │
│                                    ▼                                            │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                      Database Security                                 │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │    │
│  │  │   Row       │  │   SQL       │  │   Data      │  │   Audit     │   │    │
│  │  │   Level     │  │ Injection   │  │ Encryption  │  │   Logging   │   │    │
│  │  │ Security    │  │ Protection  │  │   (TLS)     │  │             │   │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │    │
│  └─────────────────────────────────────────────────────────────────────────┘    │
│                                    │                                            │
│                                    ▼                                            │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                    External Service Security                          │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │    │
│  │  │   Stripe    │  │   Resend    │  │   Make.com  │  │   Vercel    │   │    │
│  │  │   PCI       │  │   API       │  │   Webhook   │  │   DDoS      │   │    │
│  │  │ Compliance  │  │   Keys      │  │   Security  │  │ Protection  │   │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │    │
│  └─────────────────────────────────────────────────────────────────────────┘    │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
</code></pre>
<hr />
<h2 id="authentication-authorization">🔑 Authentication &amp; Authorization</h2>
<h3 id="multi-factor-authentication-mfa">Multi-Factor Authentication (MFA)</h3>
<h4 id="supported-authentication-methods">Supported Authentication Methods</h4>
<ol>
<li><strong>Email Verification</strong></li>
<li>Email-based account verification</li>
<li>Secure email links with expiration</li>
<li>
<p>Rate limiting on verification attempts</p>
</li>
<li>
<p><strong>SMS Verification</strong></p>
</li>
<li>SMS-based two-factor authentication</li>
<li>Time-based one-time passwords (TOTP)</li>
<li>
<p>Backup codes for account recovery</p>
</li>
<li>
<p><strong>Social Authentication</strong></p>
</li>
<li>Google OAuth 2.0</li>
<li>LinkedIn OAuth 2.0</li>
<li>GitHub OAuth 2.0</li>
<li>Secure token exchange</li>
</ol>
<h4 id="jwt-token-security">JWT Token Security</h4>
<pre><code class="language-typescript">// JWT Configuration
const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '24h',
  issuer: 'business-services-hub',
  audience: 'business-services-hub-users',
  secret: process.env.JWT_SECRET,
};

// Token Structure
interface JWTPayload {
  sub: string; // User ID
  email: string; // User email
  role: string; // User role
  iat: number; // Issued at
  exp: number; // Expiration
  jti: string; // JWT ID
}
</code></pre>
<h4 id="session-management">Session Management</h4>
<ul>
<li><strong>Secure Session Storage</strong>: Encrypted session data</li>
<li><strong>Session Timeout</strong>: Automatic session expiration</li>
<li><strong>Concurrent Session Control</strong>: Limit active sessions per user</li>
<li><strong>Session Invalidation</strong>: Secure logout and session cleanup</li>
</ul>
<h3 id="role-based-access-control-rbac">Role-Based Access Control (RBAC)</h3>
<h4 id="user-roles">User Roles</h4>
<table>
<thead>
<tr>
<th>Role</th>
<th>Permissions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Client</strong></td>
<td>View services, book appointments, leave reviews</td>
<td>End users seeking services</td>
</tr>
<tr>
<td><strong>Provider</strong></td>
<td>Manage profile, services, bookings, availability</td>
<td>Service providers offering services</td>
</tr>
<tr>
<td><strong>Admin</strong></td>
<td>Full platform management, user management, analytics</td>
<td>Platform administrators</td>
</tr>
<tr>
<td><strong>Super Admin</strong></td>
<td>System configuration, billing, security settings</td>
<td>Highest level access</td>
</tr>
</tbody>
</table>
<h4 id="permission-matrix">Permission Matrix</h4>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Client</th>
<th>Provider</th>
<th>Admin</th>
<th>Super Admin</th>
</tr>
</thead>
<tbody>
<tr>
<td>View Services</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>Book Services</td>
<td>✅</td>
<td>❌</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>Manage Profile</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>Manage Services</td>
<td>❌</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>View Analytics</td>
<td>❌</td>
<td>Limited</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>Manage Users</td>
<td>❌</td>
<td>❌</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>System Settings</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
<td>✅</td>
</tr>
</tbody>
</table>
<hr />
<h2 id="row-level-security-rls">🛡️ Row Level Security (RLS)</h2>
<h3 id="rls-policies-overview">RLS Policies Overview</h3>
<p>Row Level Security ensures that users can only access data they are authorized to see, providing database-level security that cannot be bypassed by application code.</p>
<h3 id="core-rls-policies">Core RLS Policies</h3>
<h4 id="1-user-profile-access">1. User Profile Access</h4>
<pre><code class="language-sql">-- Users can only access their own profile
CREATE POLICY &quot;Users can view own profile&quot; ON profiles
  FOR SELECT USING (auth.uid() = id);

-- Users can only update their own profile
CREATE POLICY &quot;Users can update own profile&quot; ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Users can only insert their own profile
CREATE POLICY &quot;Users can insert own profile&quot; ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
</code></pre>
<h4 id="2-service-management">2. Service Management</h4>
<pre><code class="language-sql">-- Providers can only manage their own services
CREATE POLICY &quot;Providers can manage own services&quot; ON services
  FOR ALL USING (auth.uid() = provider_id);

-- Clients can view all active services
CREATE POLICY &quot;Clients can view active services&quot; ON services
  FOR SELECT USING (status = 'active');

-- Admins can manage all services
CREATE POLICY &quot;Admins can manage all services&quot; ON services
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND role IN ('admin', 'super_admin')
    )
  );
</code></pre>
<h4 id="3-booking-access">3. Booking Access</h4>
<pre><code class="language-sql">-- Users can only see their own bookings
CREATE POLICY &quot;Users can view own bookings&quot; ON bookings
  FOR SELECT USING (
    auth.uid() = client_id OR
    auth.uid() = provider_id OR
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND role IN ('admin', 'super_admin')
    )
  );

-- Users can only create bookings for themselves
CREATE POLICY &quot;Users can create own bookings&quot; ON bookings
  FOR INSERT WITH CHECK (auth.uid() = client_id);
</code></pre>
<h4 id="4-message-access">4. Message Access</h4>
<pre><code class="language-sql">-- Users can only access messages in their bookings
CREATE POLICY &quot;Users can access booking messages&quot; ON messages
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM bookings
      WHERE id = booking_id
      AND (client_id = auth.uid() OR provider_id = auth.uid())
    ) OR
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND role IN ('admin', 'super_admin')
    )
  );
</code></pre>
<h3 id="rls-policy-testing">RLS Policy Testing</h3>
<pre><code class="language-sql">-- Test RLS policies
-- Switch to different user contexts
SET LOCAL &quot;request.jwt.claims&quot; TO '{&quot;sub&quot;: &quot;user-id&quot;, &quot;role&quot;: &quot;client&quot;}';

-- Test data access
SELECT * FROM services; -- Should only show active services
SELECT * FROM bookings; -- Should only show user's bookings
</code></pre>
<hr />
<h2 id="data-protection">🔒 Data Protection</h2>
<h3 id="data-encryption">Data Encryption</h3>
<h4 id="encryption-at-rest">Encryption at Rest</h4>
<ul>
<li><strong>Database Encryption</strong>: All data encrypted using AES-256</li>
<li><strong>File Storage Encryption</strong>: Encrypted file storage in Supabase</li>
<li><strong>Backup Encryption</strong>: Encrypted database backups</li>
<li><strong>Key Management</strong>: Secure key rotation and management</li>
</ul>
<h4 id="encryption-in-transit">Encryption in Transit</h4>
<ul>
<li><strong>TLS 1.3</strong>: All communications encrypted with TLS 1.3</li>
<li><strong>HTTPS Everywhere</strong>: All web traffic encrypted</li>
<li><strong>API Encryption</strong>: All API communications encrypted</li>
<li><strong>Database Connections</strong>: Encrypted database connections</li>
</ul>
<h3 id="data-classification">Data Classification</h3>
<h4 id="data-sensitivity-levels">Data Sensitivity Levels</h4>
<table>
<thead>
<tr>
<th>Level</th>
<th>Description</th>
<th>Examples</th>
<th>Protection</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Public</strong></td>
<td>Non-sensitive data</td>
<td>Service listings, public profiles</td>
<td>Basic protection</td>
</tr>
<tr>
<td><strong>Internal</strong></td>
<td>Internal business data</td>
<td>Analytics, reports</td>
<td>Standard encryption</td>
</tr>
<tr>
<td><strong>Confidential</strong></td>
<td>Sensitive business data</td>
<td>Financial data, user preferences</td>
<td>Strong encryption</td>
</tr>
<tr>
<td><strong>Restricted</strong></td>
<td>Highly sensitive data</td>
<td>Payment info, personal data</td>
<td>Maximum encryption</td>
</tr>
</tbody>
</table>
<h4 id="data-handling-policies">Data Handling Policies</h4>
<ul>
<li><strong>Data Minimization</strong>: Collect only necessary data</li>
<li><strong>Data Retention</strong>: Automatic data cleanup after retention period</li>
<li><strong>Data Anonymization</strong>: Anonymize data for analytics</li>
<li><strong>Data Portability</strong>: Allow users to export their data</li>
</ul>
<h3 id="privacy-controls">Privacy Controls</h3>
<h4 id="user-privacy-settings">User Privacy Settings</h4>
<pre><code class="language-typescript">interface PrivacySettings {
  profileVisibility: 'public' | 'private' | 'connections';
  dataSharing: {
    analytics: boolean;
    marketing: boolean;
    thirdParty: boolean;
  };
  communication: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
}
</code></pre>
<h4 id="gdpr-compliance">GDPR Compliance</h4>
<ul>
<li><strong>Right to Access</strong>: Users can request their data</li>
<li><strong>Right to Rectification</strong>: Users can correct their data</li>
<li><strong>Right to Erasure</strong>: Users can delete their data</li>
<li><strong>Right to Portability</strong>: Users can export their data</li>
<li><strong>Consent Management</strong>: Granular consent controls</li>
</ul>
<hr />
<h2 id="api-security">🔐 API Security</h2>
<h3 id="api-authentication">API Authentication</h3>
<h4 id="jwt-token-validation">JWT Token Validation</h4>
<pre><code class="language-typescript">// API Route Protection
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Validate JWT token
    const token = req.headers.authorization?.replace('Bearer ', '');
    const payload = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;

    // Check token expiration
    if (payload.exp &lt; Date.now() / 1000) {
      return res.status(401).json({ error: 'Token expired' });
    }

    // Check user role
    if (!hasPermission(payload.role, req.method, req.url)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    // Process request
    // ...
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
</code></pre>
<h4 id="api-rate-limiting">API Rate Limiting</h4>
<pre><code class="language-typescript">// Rate limiting configuration
const rateLimits = {
  '/api/auth/login': { requests: 5, window: '15m' },
  '/api/auth/register': { requests: 3, window: '1h' },
  '/api/services': { requests: 100, window: '1h' },
  '/api/bookings': { requests: 50, window: '1h' },
  '/api/messages': { requests: 200, window: '1h' },
};

// Rate limiting middleware
export function rateLimit(limit: RateLimit) {
  return async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) =&gt; {
    const key = \`\${req.ip}-\${req.url}\`;
    const current = await redis.get(key);

    if (current &amp;&amp; parseInt(current) &gt;= limit.requests) {
      return res.status(429).json({ error: 'Rate limit exceeded' });
    }

    await redis.incr(key);
    await redis.expire(key, limit.window);
    next();
  };
}
</code></pre>
<h3 id="input-validation">Input Validation</h3>
<h4 id="zod-schema-validation">Zod Schema Validation</h4>
<pre><code class="language-typescript">// Input validation schemas
const createServiceSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(10).max(1000),
  category: z.enum(['digital_marketing', 'legal', 'accounting', 'it', 'design']),
  basePrice: z.number().positive(),
  duration: z.number().positive().max(480), // Max 8 hours
  location: z.object({
    type: z.enum(['remote', 'onsite', 'hybrid']),
    address: z.string().optional(),
  }),
});

// Validation middleware
export function validateInput(schema: z.ZodSchema) {
  return (req: NextApiRequest, res: NextApiResponse, next: NextFunction) =&gt; {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.errors,
      });
    }
  };
}
</code></pre>
<h4 id="sql-injection-prevention">SQL Injection Prevention</h4>
<pre><code class="language-typescript">// Parameterized queries only
export async function getServices(filters: ServiceFilters) {
  const query = supabase
    .from('services')
    .select('*')
    .eq('status', 'active')
    .eq('category', filters.category) // Safe parameterized query
    .gte('base_price', filters.minPrice)
    .lte('base_price', filters.maxPrice);

  return await query;
}

// Never use string concatenation
// ❌ BAD: const query = \`SELECT * FROM services WHERE category = '\${category}'\`;
// ✅ GOOD: Use parameterized queries with Supabase client
</code></pre>
<h3 id="cors-configuration">CORS Configuration</h3>
<pre><code class="language-typescript">// CORS configuration
const corsOptions = {
  origin: ['https://businessserviceshub.com', 'https://www.businessserviceshub.com', 'https://staging.businessserviceshub.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400, // 24 hours
};
</code></pre>
<hr />
<h2 id="infrastructure-security">🏗️ Infrastructure Security</h2>
<h3 id="cloud-security">Cloud Security</h3>
<h4 id="vercel-security-features">Vercel Security Features</h4>
<ul>
<li><strong>DDoS Protection</strong>: Built-in DDoS mitigation</li>
<li><strong>SSL/TLS</strong>: Automatic SSL certificate management</li>
<li><strong>Security Headers</strong>: Automatic security headers</li>
<li><strong>Edge Security</strong>: Edge-level security controls</li>
<li><strong>Web Application Firewall</strong>: WAF protection</li>
</ul>
<h4 id="supabase-security">Supabase Security</h4>
<ul>
<li><strong>Database Security</strong>: Encrypted PostgreSQL database</li>
<li><strong>Network Security</strong>: VPC and private networking</li>
<li><strong>Access Control</strong>: IP whitelisting and VPN access</li>
<li><strong>Audit Logging</strong>: Comprehensive audit trails</li>
<li><strong>Backup Security</strong>: Encrypted backups</li>
</ul>
<h3 id="security-headers">Security Headers</h3>
<pre><code class="language-typescript">// Security headers configuration
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value:
      &quot;default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co https://api.stripe.com;&quot;,
  },
];
</code></pre>
<h3 id="network-security">Network Security</h3>
<h4 id="firewall-rules">Firewall Rules</h4>
<pre><code class="language-yaml"># Firewall configuration
firewall_rules:
  - name: 'Allow HTTPS'
    port: 443
    protocol: tcp
    source: '0.0.0.0/0'
  - name: 'Allow HTTP (redirect to HTTPS)'
    port: 80
    protocol: tcp
    source: '0.0.0.0/0'
  - name: 'Block all other ports'
    port: '1-65535'
    protocol: tcp
    source: '0.0.0.0/0'
    action: 'deny'
</code></pre>
<h4 id="vpn-access">VPN Access</h4>
<ul>
<li><strong>Admin VPN</strong>: Secure VPN for administrative access</li>
<li><strong>Database VPN</strong>: Private network for database access</li>
<li><strong>Monitoring VPN</strong>: Secure access to monitoring systems</li>
</ul>
<hr />
<h2 id="payment-security">💳 Payment Security</h2>
<h3 id="stripe-integration-security">Stripe Integration Security</h3>
<h4 id="pci-compliance">PCI Compliance</h4>
<ul>
<li><strong>No Card Data Storage</strong>: Never store card data locally</li>
<li><strong>Tokenization</strong>: Use Stripe tokens for payment processing</li>
<li><strong>PCI DSS Compliance</strong>: Stripe handles PCI compliance</li>
<li><strong>Secure Communication</strong>: All payment data encrypted in transit</li>
</ul>
<h4 id="payment-security-implementation">Payment Security Implementation</h4>
<pre><code class="language-typescript">// Secure payment processing
export async function createPaymentIntent(amount: number, currency: string) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: currency.toLowerCase(),
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        userId: user.id,
        bookingId: booking.id,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
      id: paymentIntent.id,
    };
  } catch (error) {
    throw new Error('Payment processing failed');
  }
}
</code></pre>
<h4 id="webhook-security">Webhook Security</h4>
<pre><code class="language-typescript">// Secure webhook handling
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sig = req.headers['stripe-signature'];
  const payload = req.body;

  try {
    const event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET);

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentSuccess(event.data.object);
        break;
      case 'payment_intent.payment_failed':
        await handlePaymentFailure(event.data.object);
        break;
      default:
        console.log(\`Unhandled event type \${event.type}\`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    res.status(400).send('Webhook Error');
  }
}
</code></pre>
<h3 id="financial-data-protection">Financial Data Protection</h3>
<h4 id="data-encryption_1">Data Encryption</h4>
<ul>
<li><strong>Payment Data</strong>: All payment data encrypted with AES-256</li>
<li><strong>Financial Records</strong>: Encrypted financial transaction records</li>
<li><strong>Audit Trails</strong>: Encrypted audit logs for financial activities</li>
<li><strong>Key Rotation</strong>: Regular encryption key rotation</li>
</ul>
<h4 id="access-controls">Access Controls</h4>
<ul>
<li><strong>Role-Based Access</strong>: Only authorized users can access financial data</li>
<li><strong>Audit Logging</strong>: All financial data access logged</li>
<li><strong>Data Retention</strong>: Automatic cleanup of old financial data</li>
<li><strong>Compliance</strong>: SOC 2 Type II compliance for financial data</li>
</ul>
<hr />
<h2 id="monitoring-incident-response">📊 Monitoring &amp; Incident Response</h2>
<h3 id="security-monitoring">Security Monitoring</h3>
<h4 id="real-time-monitoring">Real-time Monitoring</h4>
<pre><code class="language-typescript">// Security event monitoring
interface SecurityEvent {
  id: string;
  type: 'auth_failure' | 'suspicious_activity' | 'data_breach' | 'unauthorized_access';
  severity: 'low' | 'medium' | 'high' | 'critical';
  userId?: string;
  ipAddress: string;
  userAgent: string;
  timestamp: Date;
  details: Record&lt;string, any&gt;;
}

// Security monitoring service
export class SecurityMonitor {
  async logEvent(event: SecurityEvent) {
    // Log to security monitoring system
    await this.logToSecuritySystem(event);

    // Send alerts for high severity events
    if (event.severity === 'high' || event.severity === 'critical') {
      await this.sendSecurityAlert(event);
    }
  }

  async detectAnomalies() {
    // Detect unusual patterns
    const suspiciousActivities = await this.analyzeUserBehavior();
    return suspiciousActivities;
  }
}
</code></pre>
<h4 id="security-metrics">Security Metrics</h4>
<ul>
<li><strong>Failed Login Attempts</strong>: Track and alert on failed logins</li>
<li><strong>Suspicious Activity</strong>: Detect unusual user behavior</li>
<li><strong>API Abuse</strong>: Monitor for API abuse and rate limiting</li>
<li><strong>Data Access Patterns</strong>: Monitor data access for anomalies</li>
<li><strong>System Vulnerabilities</strong>: Track and patch vulnerabilities</li>
</ul>
<h3 id="incident-response">Incident Response</h3>
<h4 id="incident-classification">Incident Classification</h4>
<table>
<thead>
<tr>
<th>Severity</th>
<th>Description</th>
<th>Response Time</th>
<th>Escalation</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Critical</strong></td>
<td>Data breach, system compromise</td>
<td>15 minutes</td>
<td>Immediate</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>Security vulnerability, service disruption</td>
<td>1 hour</td>
<td>Within 2 hours</td>
</tr>
<tr>
<td><strong>Medium</strong></td>
<td>Suspicious activity, minor breach</td>
<td>4 hours</td>
<td>Within 24 hours</td>
</tr>
<tr>
<td><strong>Low</strong></td>
<td>Security warning, minor issue</td>
<td>24 hours</td>
<td>Within 48 hours</td>
</tr>
</tbody>
</table>
<h4 id="response-procedures">Response Procedures</h4>
<ol>
<li><strong>Detection</strong>: Automated monitoring and alerting</li>
<li><strong>Assessment</strong>: Evaluate severity and impact</li>
<li><strong>Containment</strong>: Isolate affected systems</li>
<li><strong>Investigation</strong>: Analyze root cause</li>
<li><strong>Recovery</strong>: Restore normal operations</li>
<li><strong>Post-Incident</strong>: Review and improve processes</li>
</ol>
<h3 id="security-auditing">Security Auditing</h3>
<h4 id="audit-logging">Audit Logging</h4>
<pre><code class="language-sql">-- Audit log table
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  action VARCHAR(100) NOT NULL,
  resource VARCHAR(100) NOT NULL,
  resource_id UUID,
  old_values JSONB,
  new_values JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Audit trigger function
CREATE OR REPLACE FUNCTION audit_trigger()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO audit_logs (
    user_id, action, resource, resource_id,
    old_values, new_values, ip_address, user_agent
  ) VALUES (
    auth.uid(), TG_OP, TG_TABLE_NAME,
    COALESCE(NEW.id, OLD.id),
    CASE WHEN TG_OP = 'DELETE' THEN to_jsonb(OLD) ELSE NULL END,
    CASE WHEN TG_OP = 'INSERT' OR TG_OP = 'UPDATE' THEN to_jsonb(NEW) ELSE NULL END,
    inet_client_addr(),
    current_setting('request.headers', true)::json-&gt;&gt;'user-agent'
  );
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;
</code></pre>
<h4 id="compliance-reporting">Compliance Reporting</h4>
<ul>
<li><strong>SOC 2 Type II</strong>: Annual security compliance audit</li>
<li><strong>GDPR Compliance</strong>: Regular privacy compliance checks</li>
<li><strong>PCI DSS</strong>: Payment card industry compliance</li>
<li><strong>ISO 27001</strong>: Information security management</li>
</ul>
<hr />
<h2 id="compliance-standards">📋 Compliance &amp; Standards</h2>
<h3 id="regulatory-compliance">Regulatory Compliance</h3>
<h4 id="gdpr-general-data-protection-regulation">GDPR (General Data Protection Regulation)</h4>
<ul>
<li><strong>Data Protection by Design</strong>: Privacy built into system architecture</li>
<li><strong>Consent Management</strong>: Granular consent controls</li>
<li><strong>Data Subject Rights</strong>: Full support for user rights</li>
<li><strong>Data Protection Impact Assessment</strong>: Regular DPIA reviews</li>
<li><strong>Privacy Policy</strong>: Comprehensive privacy policy</li>
</ul>
<h4 id="ccpa-california-consumer-privacy-act">CCPA (California Consumer Privacy Act)</h4>
<ul>
<li><strong>Consumer Rights</strong>: Support for California consumer rights</li>
<li><strong>Data Transparency</strong>: Clear data collection and use policies</li>
<li><strong>Opt-out Mechanisms</strong>: Easy opt-out for data sales</li>
<li><strong>Data Deletion</strong>: Right to deletion implementation</li>
</ul>
<h3 id="security-standards">Security Standards</h3>
<h4 id="owasp-top-10">OWASP Top 10</h4>
<table>
<thead>
<tr>
<th>Risk</th>
<th>Mitigation</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>A01: Broken Access Control</strong></td>
<td>RLS policies, RBAC</td>
<td>✅ Mitigated</td>
</tr>
<tr>
<td><strong>A02: Cryptographic Failures</strong></td>
<td>TLS 1.3, AES-256 encryption</td>
<td>✅ Mitigated</td>
</tr>
<tr>
<td><strong>A03: Injection</strong></td>
<td>Parameterized queries, input validation</td>
<td>✅ Mitigated</td>
</tr>
<tr>
<td><strong>A04: Insecure Design</strong></td>
<td>Security by design principles</td>
<td>✅ Mitigated</td>
</tr>
<tr>
<td><strong>A05: Security Misconfiguration</strong></td>
<td>Security headers, secure defaults</td>
<td>✅ Mitigated</td>
</tr>
<tr>
<td><strong>A06: Vulnerable Components</strong></td>
<td>Regular dependency updates</td>
<td>✅ Mitigated</td>
</tr>
<tr>
<td><strong>A07: Authentication Failures</strong></td>
<td>MFA, secure session management</td>
<td>✅ Mitigated</td>
</tr>
<tr>
<td><strong>A08: Software Integrity</strong></td>
<td>Code signing, secure CI/CD</td>
<td>✅ Mitigated</td>
</tr>
<tr>
<td><strong>A09: Logging Failures</strong></td>
<td>Comprehensive audit logging</td>
<td>✅ Mitigated</td>
</tr>
<tr>
<td><strong>A10: Server-Side Request Forgery</strong></td>
<td>Input validation, allowlists</td>
<td>✅ Mitigated</td>
</tr>
</tbody>
</table>
<h4 id="iso-27001">ISO 27001</h4>
<ul>
<li><strong>Information Security Management System</strong>: Comprehensive ISMS</li>
<li><strong>Risk Management</strong>: Regular risk assessments</li>
<li><strong>Security Controls</strong>: Implementation of security controls</li>
<li><strong>Continuous Improvement</strong>: Regular security improvements</li>
</ul>
<hr />
<h2 id="security-best-practices">🛡️ Security Best Practices</h2>
<h3 id="development-security">Development Security</h3>
<h4 id="secure-coding-practices">Secure Coding Practices</h4>
<pre><code class="language-typescript">// Input validation
const validateInput = (input: unknown) =&gt; {
  const schema = z.string().min(1).max(100);
  return schema.parse(input);
};

// Secure password hashing
const hashPassword = async (password: string) =&gt; {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

// Secure random token generation
const generateSecureToken = () =&gt; {
  return crypto.randomBytes(32).toString('hex');
};

// SQL injection prevention
const getUserById = async (id: string) =&gt; {
  return await supabase
    .from('users')
    .select('*')
    .eq('id', id) // Parameterized query
    .single();
};
</code></pre>
<h4 id="code-security-review">Code Security Review</h4>
<ul>
<li><strong>Static Analysis</strong>: Automated code security scanning</li>
<li><strong>Peer Review</strong>: Security-focused code reviews</li>
<li><strong>Dependency Scanning</strong>: Regular vulnerability scanning</li>
<li><strong>Penetration Testing</strong>: Regular security testing</li>
</ul>
<h3 id="operational-security">Operational Security</h3>
<h4 id="security-training">Security Training</h4>
<ul>
<li><strong>Developer Training</strong>: Secure coding practices</li>
<li><strong>Security Awareness</strong>: Regular security training</li>
<li><strong>Incident Response</strong>: Response procedure training</li>
<li><strong>Compliance Training</strong>: Regulatory compliance training</li>
</ul>
<h4 id="security-procedures">Security Procedures</h4>
<ul>
<li><strong>Access Management</strong>: Regular access reviews</li>
<li><strong>Password Policies</strong>: Strong password requirements</li>
<li><strong>Backup Security</strong>: Secure backup procedures</li>
<li><strong>Disaster Recovery</strong>: Security-focused recovery plans</li>
</ul>
<h3 id="continuous-security">Continuous Security</h3>
<h4 id="security-updates">Security Updates</h4>
<ul>
<li><strong>Dependency Updates</strong>: Regular security updates</li>
<li><strong>System Patching</strong>: Timely security patches</li>
<li><strong>Vulnerability Management</strong>: Proactive vulnerability management</li>
<li><strong>Security Monitoring</strong>: Continuous security monitoring</li>
</ul>
<h4 id="security-testing">Security Testing</h4>
<ul>
<li><strong>Automated Testing</strong>: Security test automation</li>
<li><strong>Penetration Testing</strong>: Regular penetration tests</li>
<li><strong>Vulnerability Scanning</strong>: Regular vulnerability scans</li>
<li><strong>Security Audits</strong>: Regular security audits</li>
</ul>
<hr />
<h2 id="security-incident-response">🚨 Security Incident Response</h2>
<h3 id="emergency-contacts">Emergency Contacts</h3>
<table>
<thead>
<tr>
<th>Role</th>
<th>Contact</th>
<th>Availability</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Security Team Lead</strong></td>
<td>security@businessserviceshub.com</td>
<td>24/7</td>
</tr>
<tr>
<td><strong>CTO</strong></td>
<td>cto@businessserviceshub.com</td>
<td>24/7</td>
</tr>
<tr>
<td><strong>Legal Team</strong></td>
<td>legal@businessserviceshub.com</td>
<td>Business hours</td>
</tr>
<tr>
<td><strong>External Security Firm</strong></td>
<td>+1-555-SECURITY</td>
<td>24/7</td>
</tr>
</tbody>
</table>
<h3 id="incident-response-plan">Incident Response Plan</h3>
<ol>
<li><strong>Immediate Response</strong> (0-15 minutes)</li>
<li>Assess severity and impact</li>
<li>Activate incident response team</li>
<li>
<p>Implement containment measures</p>
</li>
<li>
<p><strong>Investigation</strong> (15 minutes - 4 hours)</p>
</li>
<li>Gather evidence and logs</li>
<li>Identify root cause</li>
<li>
<p>Assess data exposure</p>
</li>
<li>
<p><strong>Recovery</strong> (4-24 hours)</p>
</li>
<li>Implement fixes</li>
<li>Restore services</li>
<li>
<p>Monitor for recurrence</p>
</li>
<li>
<p><strong>Post-Incident</strong> (24-72 hours)</p>
</li>
<li>Document lessons learned</li>
<li>Update security measures</li>
<li>Notify stakeholders</li>
</ol>
<hr />
<h2 id="security-support">📞 Security Support</h2>
<h3 id="reporting-security-issues">Reporting Security Issues</h3>
<ul>
<li><strong>Email</strong>: security@businessserviceshub.com</li>
<li><strong>Phone</strong>: +1 (555) 123-SECURITY</li>
<li><strong>Encrypted Email</strong>: security@businessserviceshub.com (PGP key available)</li>
<li><strong>Bug Bounty</strong>: security.businessserviceshub.com</li>
</ul>
<h3 id="security-resources">Security Resources</h3>
<ul>
<li><strong>Security Documentation</strong>: docs.businessserviceshub.com/security</li>
<li><strong>Security Updates</strong>: security.businessserviceshub.com/updates</li>
<li><strong>Security Training</strong>: security.businessserviceshub.com/training</li>
<li><strong>Compliance Reports</strong>: security.businessserviceshub.com/compliance</li>
</ul>
<hr />
<p><em>This comprehensive security guide ensures that the Business Services Hub maintains the highest standards of security, protecting user data, financial transactions, and platform integrity.</em></p>
<p><em>Last updated: January 2025</em>
<em>Security Guide version: 1.0.0</em></p>`},setup_deployment_guide:{title:"🚀 Business Services Hub - Setup &amp; Deployment Guide",content:`<h1 id="business-services-hub-setup-deployment-guide">🚀 Business Services Hub - Setup &amp; Deployment Guide</h1>
<h2 id="table-of-contents">📋 Table of Contents</h2>
<ol>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#development-environment-setup">Development Environment Setup</a></li>
<li><a href="#database-setup">Database Setup</a></li>
<li><a href="#environment-configuration">Environment Configuration</a></li>
<li><a href="#local-development">Local Development</a></li>
<li><a href="#production-deployment">Production Deployment</a></li>
<li><a href="#docker-deployment">Docker Deployment</a></li>
<li><a href="#cicd-pipeline">CI/CD Pipeline</a></li>
<li><a href="#monitoring--logging">Monitoring &amp; Logging</a></li>
<li><a href="#troubleshooting">Troubleshooting</a></li>
</ol>
<hr />
<h2 id="prerequisites">🔧 Prerequisites</h2>
<h3 id="system-requirements">System Requirements</h3>
<h4 id="minimum-requirements">Minimum Requirements</h4>
<ul>
<li><strong>Node.js</strong>: Version 18.0 or higher</li>
<li><strong>npm</strong>: Version 8.0 or higher</li>
<li><strong>Git</strong>: Version 2.30 or higher</li>
<li><strong>PostgreSQL</strong>: Version 13 or higher</li>
<li><strong>Redis</strong>: Version 6.0 or higher</li>
</ul>
<h4 id="recommended-requirements">Recommended Requirements</h4>
<ul>
<li><strong>Node.js</strong>: Version 20.0 or higher</li>
<li><strong>npm</strong>: Version 9.0 or higher</li>
<li><strong>Git</strong>: Latest version</li>
<li><strong>PostgreSQL</strong>: Version 15 or higher</li>
<li><strong>Redis</strong>: Version 7.0 or higher</li>
<li><strong>Docker</strong>: Version 20.10 or higher</li>
<li><strong>Docker Compose</strong>: Version 2.0 or higher</li>
</ul>
<h3 id="required-accounts-services">Required Accounts &amp; Services</h3>
<h4 id="essential-services">Essential Services</h4>
<ul>
<li><strong>Supabase Account</strong>: Database and authentication</li>
<li><strong>Stripe Account</strong>: Payment processing</li>
<li><strong>SendGrid Account</strong>: Email services</li>
<li><strong>Twilio Account</strong>: SMS services</li>
<li><strong>Google Cloud Platform</strong>: Maps and additional services</li>
</ul>
<h4 id="optional-services">Optional Services</h4>
<ul>
<li><strong>AWS Account</strong>: Cloud hosting and services</li>
<li><strong>CloudFlare Account</strong>: CDN and security</li>
<li><strong>Sentry Account</strong>: Error monitoring</li>
<li><strong>LogRocket Account</strong>: User session monitoring</li>
</ul>
<hr />
<h2 id="development-environment-setup">🛠️ Development Environment Setup</h2>
<h3 id="1-clone-the-repository">1. Clone the Repository</h3>
<pre><code class="language-bash"># Clone the main repository
git clone https://github.com/your-org/business-services-hub.git
cd business-services-hub

# Install dependencies
npm install
</code></pre>
<h3 id="2-install-required-tools">2. Install Required Tools</h3>
<h4 id="nodejs-and-npm">Node.js and npm</h4>
<pre><code class="language-bash"># Check current versions
node --version
npm --version

# Install Node.js (if needed)
# Using Node Version Manager (nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20

# Or download from https://nodejs.org/
</code></pre>
<h4 id="git-configuration">Git Configuration</h4>
<pre><code class="language-bash"># Configure Git
git config --global user.name &quot;Your Name&quot;
git config --global user.email &quot;your.email@example.com&quot;

# Set up SSH key (optional but recommended)
ssh-keygen -t rsa -b 4096 -C &quot;your.email@example.com&quot;
</code></pre>
<h4 id="database-tools">Database Tools</h4>
<pre><code class="language-bash"># Install PostgreSQL (macOS with Homebrew)
brew install postgresql
brew services start postgresql

# Install PostgreSQL (Ubuntu/Debian)
sudo apt update
sudo apt install postgresql postgresql-contrib

# Install Redis (macOS with Homebrew)
brew install redis
brew services start redis

# Install Redis (Ubuntu/Debian)
sudo apt install redis-server
sudo systemctl start redis-server
</code></pre>
<h3 id="3-ide-and-development-tools">3. IDE and Development Tools</h3>
<h4 id="recommended-ides">Recommended IDEs</h4>
<ul>
<li><strong>Visual Studio Code</strong> with extensions:</li>
<li>ES7+ React/Redux/React-Native snippets</li>
<li>TypeScript Importer</li>
<li>Prettier - Code formatter</li>
<li>ESLint</li>
<li>GitLens</li>
<li>Thunder Client (API testing)</li>
</ul>
<h4 id="development-tools">Development Tools</h4>
<pre><code class="language-bash"># Install global development tools
npm install -g @supabase/cli
npm install -g typescript
npm install -g ts-node
npm install -g nodemon
npm install -g pm2
</code></pre>
<hr />
<h2 id="database-setup">🗄️ Database Setup</h2>
<h3 id="1-supabase-setup">1. Supabase Setup</h3>
<h4 id="create-supabase-project">Create Supabase Project</h4>
<ol>
<li>Go to <a href="https://app.supabase.com">Supabase Dashboard</a></li>
<li>Click "New Project"</li>
<li>Choose organization and enter project details</li>
<li>Select region and database password</li>
<li>Wait for project creation (2-3 minutes)</li>
</ol>
<h4 id="install-supabase-cli">Install Supabase CLI</h4>
<pre><code class="language-bash"># Install Supabase CLI
npm install -g @supabase/cli

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-ref
</code></pre>
<h4 id="database-schema-setup">Database Schema Setup</h4>
<pre><code class="language-bash"># Pull existing schema
supabase db pull

# Apply migrations
supabase db push

# Generate TypeScript types
supabase gen types typescript --local &gt; src/types/database.types.ts
</code></pre>
<h3 id="2-local-database-setup-alternative">2. Local Database Setup (Alternative)</h3>
<h4 id="postgresql-setup">PostgreSQL Setup</h4>
<pre><code class="language-bash"># Create database
createdb business_services_hub

# Create user
psql -c &quot;CREATE USER bsh_user WITH PASSWORD 'your_password';&quot;
psql -c &quot;GRANT ALL PRIVILEGES ON DATABASE business_services_hub TO bsh_user;&quot;

# Connect to database
psql -d business_services_hub -U bsh_user
</code></pre>
<h4 id="database-schema">Database Schema</h4>
<pre><code class="language-sql">-- Create tables
\\i scripts/schema.sql

-- Insert seed data
\\i scripts/seed.sql
</code></pre>
<h3 id="3-redis-setup">3. Redis Setup</h3>
<h4 id="local-redis">Local Redis</h4>
<pre><code class="language-bash"># Start Redis server
redis-server

# Test Redis connection
redis-cli ping
# Should return: PONG
</code></pre>
<h4 id="redis-configuration">Redis Configuration</h4>
<pre><code class="language-bash"># Edit Redis configuration
sudo nano /etc/redis/redis.conf

# Key settings:
# bind 127.0.0.1
# port 6379
# requirepass your_redis_password
# maxmemory 256mb
# maxmemory-policy allkeys-lru
</code></pre>
<hr />
<h2 id="environment-configuration">⚙️ Environment Configuration</h2>
<h3 id="1-environment-variables">1. Environment Variables</h3>
<h4 id="create-environment-files">Create Environment Files</h4>
<pre><code class="language-bash"># Copy example environment file
cp .env.example .env.local

# Copy production environment file
cp .env.example .env.production
</code></pre>
<h4 id="development-environment-envlocal">Development Environment (.env.local)</h4>
<pre><code class="language-env"># Database
DATABASE_URL=postgresql://bsh_user:your_password@localhost:5432/business_services_hub
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Redis
REDIS_URL=redis://localhost:6379
REDIS_PASSWORD=your_redis_password

# Authentication
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=your-refresh-token-secret

# Payment Processing
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Email Service
SENDGRID_API_KEY=SG.your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com

# SMS Service
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890

# Google Services
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Application
NODE_ENV=development
PORT=3000
API_BASE_URL=http://localhost:3000/api
CLIENT_BASE_URL=http://localhost:3001

# File Upload
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/gif,image/webp

# Security
CORS_ORIGIN=http://localhost:3001
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Monitoring
SENTRY_DSN=your_sentry_dsn
LOG_LEVEL=debug
</code></pre>
<h4 id="production-environment-envproduction">Production Environment (.env.production)</h4>
<pre><code class="language-env"># Database
DATABASE_URL=postgresql://username:password@host:port/database
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Redis
REDIS_URL=redis://username:password@host:port
REDIS_PASSWORD=your_redis_password

# Authentication
JWT_SECRET=your-production-jwt-secret-key
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=your-production-refresh-token-secret

# Payment Processing
STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Email Service
SENDGRID_API_KEY=SG.your_production_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com

# SMS Service
TWILIO_ACCOUNT_SID=your_production_twilio_account_sid
TWILIO_AUTH_TOKEN=your_production_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890

# Google Services
GOOGLE_MAPS_API_KEY=your_production_google_maps_api_key
GOOGLE_CLIENT_ID=your_production_google_client_id
GOOGLE_CLIENT_SECRET=your_production_google_client_secret

# Application
NODE_ENV=production
PORT=3000
API_BASE_URL=https://api.yourdomain.com
CLIENT_BASE_URL=https://yourdomain.com

# File Upload
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/gif,image/webp

# Security
CORS_ORIGIN=https://yourdomain.com
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Monitoring
SENTRY_DSN=your_production_sentry_dsn
LOG_LEVEL=info
</code></pre>
<h3 id="2-service-configuration">2. Service Configuration</h3>
<h4 id="supabase-configuration">Supabase Configuration</h4>
<ol>
<li>Go to Supabase Dashboard → Settings → API</li>
<li>Copy Project URL and API keys</li>
<li>Configure Row Level Security (RLS) policies</li>
<li>Set up authentication providers</li>
<li>Configure storage buckets</li>
</ol>
<h4 id="stripe-configuration">Stripe Configuration</h4>
<ol>
<li>Go to Stripe Dashboard → Developers → API keys</li>
<li>Copy publishable and secret keys</li>
<li>Set up webhook endpoints</li>
<li>Configure payment methods</li>
<li>Set up tax settings</li>
</ol>
<h4 id="sendgrid-configuration">SendGrid Configuration</h4>
<ol>
<li>Go to SendGrid Dashboard → Settings → API keys</li>
<li>Create API key with full access</li>
<li>Verify sender identity</li>
<li>Set up domain authentication</li>
<li>Configure email templates</li>
</ol>
<hr />
<h2 id="local-development">💻 Local Development</h2>
<h3 id="1-start-development-server">1. Start Development Server</h3>
<h4 id="backend-development">Backend Development</h4>
<pre><code class="language-bash"># Install dependencies
npm install

# Start development server
npm run dev

# Or with specific environment
NODE_ENV=development npm run dev

# With debugging
DEBUG=app:* npm run dev
</code></pre>
<h4 id="frontend-development">Frontend Development</h4>
<pre><code class="language-bash"># Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Or with specific port
PORT=3001 npm run dev
</code></pre>
<h4 id="full-stack-development">Full Stack Development</h4>
<pre><code class="language-bash"># Start both backend and frontend
npm run dev:full

# Or using concurrently
npm run dev:concurrent
</code></pre>
<h3 id="2-database-operations">2. Database Operations</h3>
<h4 id="run-migrations">Run Migrations</h4>
<pre><code class="language-bash"># Run pending migrations
npm run db:migrate

# Rollback last migration
npm run db:rollback

# Reset database
npm run db:reset

# Seed database
npm run db:seed
</code></pre>
<h4 id="database-management">Database Management</h4>
<pre><code class="language-bash"># Open database console
npm run db:console

# Backup database
npm run db:backup

# Restore database
npm run db:restore
</code></pre>
<h3 id="3-testing">3. Testing</h3>
<h4 id="run-tests">Run Tests</h4>
<pre><code class="language-bash"># Run all tests
npm test

# Run specific test suite
npm run test:unit
npm run test:integration
npm run test:e2e

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
</code></pre>
<h4 id="test-database-setup">Test Database Setup</h4>
<pre><code class="language-bash"># Set up test database
npm run test:db:setup

# Clean test database
npm run test:db:clean

# Run tests with fresh database
npm run test:fresh
</code></pre>
<h3 id="4-code-quality">4. Code Quality</h3>
<h4 id="linting-and-formatting">Linting and Formatting</h4>
<pre><code class="language-bash"># Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Run Prettier
npm run format

# Check code formatting
npm run format:check
</code></pre>
<h4 id="type-checking">Type Checking</h4>
<pre><code class="language-bash"># Run TypeScript compiler
npm run type-check

# Watch for type changes
npm run type-check:watch
</code></pre>
<hr />
<h2 id="production-deployment">🚀 Production Deployment</h2>
<h3 id="1-server-preparation">1. Server Preparation</h3>
<h4 id="system-requirements_1">System Requirements</h4>
<ul>
<li><strong>CPU</strong>: 2+ cores</li>
<li><strong>RAM</strong>: 4GB+ (8GB recommended)</li>
<li><strong>Storage</strong>: 50GB+ SSD</li>
<li><strong>OS</strong>: Ubuntu 20.04+ or CentOS 8+</li>
</ul>
<h4 id="server-setup">Server Setup</h4>
<pre><code class="language-bash"># Update system
sudo apt update &amp;&amp; sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib -y

# Install Redis
sudo apt install redis-server -y
</code></pre>
<h3 id="2-application-deployment">2. Application Deployment</h3>
<h4 id="clone-and-setup">Clone and Setup</h4>
<pre><code class="language-bash"># Clone repository
git clone https://github.com/your-org/business-services-hub.git
cd business-services-hub

# Install dependencies
npm ci --production

# Build application
npm run build

# Set up environment
cp .env.production .env
</code></pre>
<h4 id="database-setup_1">Database Setup</h4>
<pre><code class="language-bash"># Create production database
sudo -u postgres createdb business_services_hub_prod

# Create user
sudo -u postgres psql -c &quot;CREATE USER bsh_prod WITH PASSWORD 'secure_password';&quot;
sudo -u postgres psql -c &quot;GRANT ALL PRIVILEGES ON DATABASE business_services_hub_prod TO bsh_prod;&quot;

# Run migrations
npm run db:migrate
</code></pre>
<h4 id="start-application">Start Application</h4>
<pre><code class="language-bash"># Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 startup
pm2 startup
</code></pre>
<h3 id="3-nginx-configuration">3. Nginx Configuration</h3>
<h4 id="nginx-setup">Nginx Setup</h4>
<pre><code class="language-bash"># Create Nginx configuration
sudo nano /etc/nginx/sites-available/business-services-hub
</code></pre>
<h4 id="nginx-configuration">Nginx Configuration</h4>
<pre><code class="language-nginx">server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # Security Headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection &quot;1; mode=block&quot;;
    add_header Strict-Transport-Security &quot;max-age=31536000; includeSubDomains&quot; always;

    # API Routes
    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static Files
    location / {
        root /var/www/business-services-hub/dist;
        try_files $uri $uri/ /index.html;

        # Cache static assets
        location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control &quot;public, immutable&quot;;
        }
    }

    # File Upload Size
    client_max_body_size 10M;
}
</code></pre>
<h4 id="enable-site">Enable Site</h4>
<pre><code class="language-bash"># Enable site
sudo ln -s /etc/nginx/sites-available/business-services-hub /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
</code></pre>
<h3 id="4-ssl-certificate">4. SSL Certificate</h3>
<h4 id="lets-encrypt-setup">Let's Encrypt Setup</h4>
<pre><code class="language-bash"># Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Test renewal
sudo certbot renew --dry-run
</code></pre>
<hr />
<h2 id="docker-deployment">🐳 Docker Deployment</h2>
<h3 id="1-docker-configuration">1. Docker Configuration</h3>
<h4 id="dockerfile">Dockerfile</h4>
<pre><code class="language-dockerfile"># Use Node.js 20 Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD [&quot;npm&quot;, &quot;start&quot;]
</code></pre>
<h4 id="docker-compose">Docker Compose</h4>
<pre><code class="language-yaml">version: '3.8'

services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://bsh_user:password@db:5432/business_services_hub
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    volumes:
      - ./uploads:/app/uploads

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=business_services_hub
      - POSTGRES_USER=bsh_user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - '5432:5432'

  redis:
    image: redis:7-alpine
    ports:
      - '6379:6379'
    volumes:
      - redis_data:/data

  nginx:
    image: nginx:alpine
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/ssl
    depends_on:
      - app

volumes:
  postgres_data:
  redis_data:
</code></pre>
<h3 id="2-docker-deployment">2. Docker Deployment</h3>
<h4 id="build-and-run">Build and Run</h4>
<pre><code class="language-bash"># Build images
docker-compose build

# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
</code></pre>
<h4 id="production-deployment_1">Production Deployment</h4>
<pre><code class="language-bash"># Build production image
docker build -t business-services-hub:latest .

# Run production container
docker run -d \\
  --name business-services-hub \\
  -p 3000:3000 \\
  -e NODE_ENV=production \\
  -e DATABASE_URL=your_database_url \\
  business-services-hub:latest
</code></pre>
<hr />
<h2 id="cicd-pipeline">🔄 CI/CD Pipeline</h2>
<h3 id="1-github-actions">1. GitHub Actions</h3>
<h4 id="workflow-configuration">Workflow Configuration</h4>
<pre><code class="language-yaml">name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test_db
        options: &gt;-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

      redis:
        image: redis:7
        options: &gt;-
          --health-cmd &quot;redis-cli ping&quot;
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db
          REDIS_URL: redis://localhost:6379

      - name: Run linting
        run: npm run lint

      - name: Run type checking
        run: npm run type-check

  build:
    needs: test
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-files
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v3

      - name: Deploy to production
        run: |
          # Add your deployment commands here
          echo &quot;Deploying to production...&quot;
</code></pre>
<h3 id="2-deployment-scripts">2. Deployment Scripts</h3>
<h4 id="deploy-script">Deploy Script</h4>
<pre><code class="language-bash">#!/bin/bash
# deploy.sh

set -e

echo &quot;Starting deployment...&quot;

# Pull latest code
git pull origin main

# Install dependencies
npm ci --production

# Run migrations
npm run db:migrate

# Build application
npm run build

# Restart services
pm2 restart business-services-hub

echo &quot;Deployment completed successfully!&quot;
</code></pre>
<hr />
<h2 id="monitoring-logging">📊 Monitoring &amp; Logging</h2>
<h3 id="1-application-monitoring">1. Application Monitoring</h3>
<h4 id="pm2-monitoring">PM2 Monitoring</h4>
<pre><code class="language-bash"># Monitor application
pm2 monit

# View logs
pm2 logs business-services-hub

# View specific log
pm2 logs business-services-hub --lines 100

# Restart application
pm2 restart business-services-hub

# Reload application
pm2 reload business-services-hub
</code></pre>
<h4 id="health-checks">Health Checks</h4>
<pre><code class="language-bash"># Create health check script
cat &gt; health-check.sh &lt;&lt; 'EOF'
#!/bin/bash

# Check if application is running
if ! curl -f http://localhost:3000/health &gt; /dev/null 2&gt;&amp;1; then
    echo &quot;Application is not responding&quot;
    pm2 restart business-services-hub
    exit 1
fi

echo &quot;Application is healthy&quot;
EOF

chmod +x health-check.sh

# Add to crontab for regular checks
(crontab -l 2&gt;/dev/null; echo &quot;*/5 * * * * /path/to/health-check.sh&quot;) | crontab -
</code></pre>
<h3 id="2-log-management">2. Log Management</h3>
<h4 id="log-rotation">Log Rotation</h4>
<pre><code class="language-bash"># Install logrotate
sudo apt install logrotate -y

# Create logrotate configuration
sudo nano /etc/logrotate.d/business-services-hub
</code></pre>
<h4 id="logrotate-configuration">Logrotate Configuration</h4>
<pre><code>/var/log/business-services-hub/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 644 root root
    postrotate
        pm2 reload business-services-hub
    endscript
}
</code></pre>
<h3 id="3-error-monitoring">3. Error Monitoring</h3>
<h4 id="sentry-integration">Sentry Integration</h4>
<pre><code class="language-javascript">// sentry.js
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

module.exports = Sentry;
</code></pre>
<hr />
<h2 id="troubleshooting">🔧 Troubleshooting</h2>
<h3 id="common-issues">Common Issues</h3>
<h4 id="1-database-connection-issues">1. Database Connection Issues</h4>
<pre><code class="language-bash"># Check database status
sudo systemctl status postgresql

# Check database logs
sudo journalctl -u postgresql

# Test database connection
psql -h localhost -U bsh_user -d business_services_hub

# Reset database password
sudo -u postgres psql -c &quot;ALTER USER bsh_user PASSWORD 'new_password';&quot;
</code></pre>
<h4 id="2-redis-connection-issues">2. Redis Connection Issues</h4>
<pre><code class="language-bash"># Check Redis status
sudo systemctl status redis

# Check Redis logs
sudo journalctl -u redis

# Test Redis connection
redis-cli ping

# Check Redis configuration
redis-cli config get &quot;*&quot;
</code></pre>
<h4 id="3-application-issues">3. Application Issues</h4>
<pre><code class="language-bash"># Check application logs
pm2 logs business-services-hub

# Check application status
pm2 status

# Restart application
pm2 restart business-services-hub

# Check system resources
htop
df -h
free -h
</code></pre>
<h4 id="4-nginx-issues">4. Nginx Issues</h4>
<pre><code class="language-bash"># Check Nginx status
sudo systemctl status nginx

# Check Nginx configuration
sudo nginx -t

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Reload Nginx
sudo systemctl reload nginx
</code></pre>
<h3 id="performance-optimization">Performance Optimization</h3>
<h4 id="1-database-optimization">1. Database Optimization</h4>
<pre><code class="language-sql">-- Check slow queries
SELECT query, mean_time, calls, total_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;

-- Analyze table statistics
ANALYZE;

-- Check index usage
SELECT schemaname, tablename, attname, n_distinct, correlation
FROM pg_stats
WHERE tablename = 'your_table_name';
</code></pre>
<h4 id="2-application-optimization">2. Application Optimization</h4>
<pre><code class="language-bash"># Monitor memory usage
pm2 monit

# Check CPU usage
top -p $(pgrep -f &quot;node.*business-services-hub&quot;)

# Monitor network connections
netstat -tulpn | grep :3000

# Check file descriptors
lsof -p $(pgrep -f &quot;node.*business-services-hub&quot;)
</code></pre>
<h3 id="security-checklist">Security Checklist</h3>
<h4 id="1-server-security">1. Server Security</h4>
<ul>
<li>[ ] Firewall configured (UFW)</li>
<li>[ ] SSH key authentication only</li>
<li>[ ] Regular security updates</li>
<li>[ ] Fail2ban installed and configured</li>
<li>[ ] SSL certificate valid and auto-renewing</li>
</ul>
<h4 id="2-application-security">2. Application Security</h4>
<ul>
<li>[ ] Environment variables secured</li>
<li>[ ] Database credentials encrypted</li>
<li>[ ] API rate limiting enabled</li>
<li>[ ] CORS properly configured</li>
<li>[ ] Input validation implemented</li>
<li>[ ] SQL injection prevention</li>
<li>[ ] XSS protection enabled</li>
</ul>
<h4 id="3-database-security">3. Database Security</h4>
<ul>
<li>[ ] Database user permissions minimal</li>
<li>[ ] Row Level Security (RLS) enabled</li>
<li>[ ] Regular backups configured</li>
<li>[ ] Database encryption at rest</li>
<li>[ ] Connection encryption enabled</li>
</ul>
<hr />
<h2 id="additional-resources">📚 Additional Resources</h2>
<h3 id="documentation-links">Documentation Links</h3>
<ul>
<li><a href="https://nodejs.org/docs/">Node.js Documentation</a></li>
<li><a href="https://www.postgresql.org/docs/">PostgreSQL Documentation</a></li>
<li><a href="https://redis.io/documentation">Redis Documentation</a></li>
<li><a href="https://pm2.keymetrics.io/docs/">PM2 Documentation</a></li>
<li><a href="https://nginx.org/en/docs/">Nginx Documentation</a></li>
<li><a href="https://docs.docker.com/">Docker Documentation</a></li>
</ul>
<h3 id="support-channels">Support Channels</h3>
<ul>
<li><strong>GitHub Issues</strong>: <a href="https://github.com/your-org/business-services-hub/issues">Create an issue</a></li>
<li><strong>Discord Community</strong>: <a href="https://discord.gg/your-discord">Join our Discord</a></li>
<li><strong>Email Support</strong>: support@yourdomain.com</li>
<li><strong>Documentation</strong>: <a href="https://docs.yourdomain.com">Read the docs</a></li>
</ul>
<hr />
<p>This comprehensive setup and deployment guide provides step-by-step instructions for setting up the Business Services Hub in development and production environments, including troubleshooting tips and best practices for maintaining a healthy deployment.</p>`}},gv="/assets/falcon_eye_logo.jpg";function hv(){return pe.jsxs("div",{className:"home-container",children:[pe.jsx("h1",{children:"Welcome to the Business Services Hub Documentation"}),pe.jsx("p",{children:"Navigate through the links on the left to explore our comprehensive documentation."})]})}function fv(){const{docName:o}=mm(),[c,d]=_.useState({title:"",content:""}),[u,h]=_.useState(!0),[v,T]=_.useState(null);return _.useEffect(()=>{if(h(!0),T(null),d({title:"",content:""}),o){const w=o.replace(".html",""),S=dv[w];S?(d(S),T(null)):(T("Document not found."),d({title:"",content:""}))}h(!1)},[o]),u?pe.jsx("div",{className:"doc-message",children:"Loading document..."}):v?pe.jsx("div",{className:"doc-error",children:v}):c.content?pe.jsxs("div",{className:"doc-viewer-container",children:[pe.jsx("h1",{children:c.title}),pe.jsx("div",{dangerouslySetInnerHTML:{__html:c.content}})]}):pe.jsx("div",{className:"doc-message",children:"No content available for this document."})}function pv(){return pe.jsx(tv,{basename:"/",children:pe.jsxs("div",{className:"app-layout",children:[pe.jsxs("nav",{className:"sidebar",children:[pe.jsxs("div",{className:"sidebar-header",children:[pe.jsx("img",{src:gv,alt:"Falcon Eye Group Logo",className:"logo"}),pe.jsx("h2",{children:"Documentation"})]}),pe.jsxs("ul",{children:[pe.jsx("li",{children:pe.jsx(Os,{to:"/",className:({isActive:o})=>o?"active-link":"",children:"Home"})}),cv.map(o=>pe.jsx("li",{children:pe.jsx(Os,{to:o.href,className:({isActive:c})=>c?"active-link":"",children:o.name})},o.name))]})]}),pe.jsx("main",{className:"content",children:pe.jsxs(Um,{children:[pe.jsx(Ds,{path:"/",element:pe.jsx(hv,{})}),pe.jsx(Ds,{path:"/docs/:docName",element:pe.jsx(fv,{})})]})})]})})}qp.createRoot(document.getElementById("root")).render(pe.jsx(_.StrictMode,{children:pe.jsx(pv,{})}));
