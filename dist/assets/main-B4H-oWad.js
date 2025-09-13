const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dagre-5GWH7T2D-hmkwKR9s.js","assets/graph-DCqAVWOf.js","assets/_baseUniq-DxAkmiYj.js","assets/layout-w_oxH4Cx.js","assets/_basePickBy-CcPVAFrL.js","assets/clone-QW8T7WSt.js","assets/cose-bilkent-S5V4N54A-fgi8zSDJ.js","assets/cytoscape.esm-CyJtwmzi.js","assets/c4Diagram-FPNF74CW-CrDsmkIJ.js","assets/chunk-TZMSLE5B-DWYVp6wl.js","assets/flowDiagram-PVAE7QVJ-DgAZRCrg.js","assets/chunk-FMBD7UC4-BH9Sf46z.js","assets/chunk-55IACEB6-CLfWXPta.js","assets/chunk-QN33PNHL-C13B-7WL.js","assets/channel-BpD_h8CD.js","assets/erDiagram-AWTI2OKA-BhiXUMwR.js","assets/gitGraphDiagram-NY62KEGX-BibxgzD4.js","assets/chunk-4BX2VUAB-DeMSE24d.js","assets/chunk-QZHKN3VN-BzTKIL6o.js","assets/treemap-75Q7IDZK-C36UdQmn.js","assets/ganttDiagram-OWAHRB6G-LejQyW61.js","assets/linear-Bz9nwtMS.js","assets/init-Gi6I4Gst.js","assets/defaultLocale-C4B-KCzX.js","assets/infoDiagram-STP46IZ2-RWNQY9q9.js","assets/pieDiagram-ADFJNKIX-DBmeeDga.js","assets/arc-CkopMbfR.js","assets/ordinal-Cboi1Yqb.js","assets/quadrantDiagram-LMRXKWRM-BHofHa7H.js","assets/xychartDiagram-6GGTOJPD-DG9PxQx5.js","assets/requirementDiagram-4UW4RH46-DV8vlAr2.js","assets/sequenceDiagram-C3RYC4MD-lM2TTkmS.js","assets/classDiagram-KNZD7YFC-SgIKW1En.js","assets/chunk-K7UQS3LO-HElmecFV.js","assets/classDiagram-v2-RKCZMP56-SgIKW1En.js","assets/stateDiagram-KXAO66HF-D9mMByz2.js","assets/chunk-TVAH2DTR-BLz06Mtb.js","assets/stateDiagram-v2-UMBNRL4Z-DYRG9z22.js","assets/journeyDiagram-BIP6EPQ6-CaiTw4IX.js","assets/timeline-definition-XQNQX7LJ-BdU7yAll.js","assets/mindmap-definition-Q6HEUPPD-DKCbJxCT.js","assets/kanban-definition-6OIFK2YF-Byzheawm.js","assets/sankeyDiagram-GR3RE2ED-DziPQcAC.js","assets/diagram-S2PKOQOG-CZ0Zv6MR.js","assets/diagram-QEK2KX5R-tWZ1YwVs.js","assets/blockDiagram-QIGZ2CNN-DyXaONwk.js","assets/architectureDiagram-W76B3OCA-OfQTx0_G.js","assets/diagram-N5W7TBWH-KRqv06lC.js"])))=>i.map(i=>d[i]);
var mE=Object.defineProperty;var yE=(e,t,n)=>t in e?mE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ae=(e,t,n)=>yE(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function bE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pf={exports:{}},eo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function vE(){if(Dv)return eo;Dv=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,o){var u=null;if(o!==void 0&&(u=""+o),s.key!==void 0&&(u=""+s.key),"key"in s){o={};for(var c in s)c!=="key"&&(o[c]=s[c])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:u,ref:s!==void 0?s:null,props:o}}return eo.Fragment=t,eo.jsx=n,eo.jsxs=n,eo}var Lv;function SE(){return Lv||(Lv=1,pf.exports=vE()),pf.exports}var Q=SE(),mf={exports:{}},Nt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function xE(){if(Bv)return Nt;Bv=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),m=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=m&&D[m]||D["@@iterator"],typeof D=="function"?D:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,C={};function T(D,H,ot){this.props=D,this.context=H,this.refs=C,this.updater=ot||v}T.prototype.isReactComponent={},T.prototype.setState=function(D,H){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,H,"setState")},T.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function w(){}w.prototype=T.prototype;function k(D,H,ot){this.props=D,this.context=H,this.refs=C,this.updater=ot||v}var E=k.prototype=new w;E.constructor=k,S(E,T.prototype),E.isPureReactComponent=!0;var O=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},R=Object.prototype.hasOwnProperty;function P(D,H,ot,et,gt,pt){return ot=pt.ref,{$$typeof:e,type:D,key:H,ref:ot!==void 0?ot:null,props:pt}}function J(D,H){return P(D.type,H,void 0,void 0,void 0,D.props)}function nt(D){return typeof D=="object"&&D!==null&&D.$$typeof===e}function rt(D){var H={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ot){return H[ot]})}var X=/\/+/g;function lt(D,H){return typeof D=="object"&&D!==null&&D.key!=null?rt(""+D.key):H.toString(36)}function at(){}function W(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(at,at):(D.status="pending",D.then(function(H){D.status==="pending"&&(D.status="fulfilled",D.value=H)},function(H){D.status==="pending"&&(D.status="rejected",D.reason=H)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function j(D,H,ot,et,gt){var pt=typeof D;(pt==="undefined"||pt==="boolean")&&(D=null);var ht=!1;if(D===null)ht=!0;else switch(pt){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(D.$$typeof){case e:case t:ht=!0;break;case f:return ht=D._init,j(ht(D._payload),H,ot,et,gt)}}if(ht)return gt=gt(D),ht=et===""?"."+lt(D,0):et,O(gt)?(ot="",ht!=null&&(ot=ht.replace(X,"$&/")+"/"),j(gt,H,ot,"",function(Ht){return Ht})):gt!=null&&(nt(gt)&&(gt=J(gt,ot+(gt.key==null||D&&D.key===gt.key?"":(""+gt.key).replace(X,"$&/")+"/")+ht)),H.push(gt)),1;ht=0;var Dt=et===""?".":et+":";if(O(D))for(var Bt=0;Bt<D.length;Bt++)et=D[Bt],pt=Dt+lt(et,Bt),ht+=j(et,H,ot,pt,gt);else if(Bt=y(D),typeof Bt=="function")for(D=Bt.call(D),Bt=0;!(et=D.next()).done;)et=et.value,pt=Dt+lt(et,Bt++),ht+=j(et,H,ot,pt,gt);else if(pt==="object"){if(typeof D.then=="function")return j(W(D),H,ot,et,gt);throw H=String(D),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ht}function M(D,H,ot){if(D==null)return D;var et=[],gt=0;return j(D,et,"","",function(pt){return H.call(ot,pt,gt++)}),et}function F(D){if(D._status===-1){var H=D._result;H=H(),H.then(function(ot){(D._status===0||D._status===-1)&&(D._status=1,D._result=ot)},function(ot){(D._status===0||D._status===-1)&&(D._status=2,D._result=ot)}),D._status===-1&&(D._status=0,D._result=H)}if(D._status===1)return D._result.default;throw D._result}var $=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function ut(){}return Nt.Children={map:M,forEach:function(D,H,ot){M(D,function(){H.apply(this,arguments)},ot)},count:function(D){var H=0;return M(D,function(){H++}),H},toArray:function(D){return M(D,function(H){return H})||[]},only:function(D){if(!nt(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Nt.Component=T,Nt.Fragment=n,Nt.Profiler=s,Nt.PureComponent=k,Nt.StrictMode=a,Nt.Suspense=g,Nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,Nt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return L.H.useMemoCache(D)}},Nt.cache=function(D){return function(){return D.apply(null,arguments)}},Nt.cloneElement=function(D,H,ot){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var et=S({},D.props),gt=D.key,pt=void 0;if(H!=null)for(ht in H.ref!==void 0&&(pt=void 0),H.key!==void 0&&(gt=""+H.key),H)!R.call(H,ht)||ht==="key"||ht==="__self"||ht==="__source"||ht==="ref"&&H.ref===void 0||(et[ht]=H[ht]);var ht=arguments.length-2;if(ht===1)et.children=ot;else if(1<ht){for(var Dt=Array(ht),Bt=0;Bt<ht;Bt++)Dt[Bt]=arguments[Bt+2];et.children=Dt}return P(D.type,gt,void 0,void 0,pt,et)},Nt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:o,_context:D},D},Nt.createElement=function(D,H,ot){var et,gt={},pt=null;if(H!=null)for(et in H.key!==void 0&&(pt=""+H.key),H)R.call(H,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(gt[et]=H[et]);var ht=arguments.length-2;if(ht===1)gt.children=ot;else if(1<ht){for(var Dt=Array(ht),Bt=0;Bt<ht;Bt++)Dt[Bt]=arguments[Bt+2];gt.children=Dt}if(D&&D.defaultProps)for(et in ht=D.defaultProps,ht)gt[et]===void 0&&(gt[et]=ht[et]);return P(D,pt,void 0,void 0,null,gt)},Nt.createRef=function(){return{current:null}},Nt.forwardRef=function(D){return{$$typeof:c,render:D}},Nt.isValidElement=nt,Nt.lazy=function(D){return{$$typeof:f,_payload:{_status:-1,_result:D},_init:F}},Nt.memo=function(D,H){return{$$typeof:d,type:D,compare:H===void 0?null:H}},Nt.startTransition=function(D){var H=L.T,ot={};L.T=ot;try{var et=D(),gt=L.S;gt!==null&&gt(ot,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(ut,$)}catch(pt){$(pt)}finally{L.T=H}},Nt.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},Nt.use=function(D){return L.H.use(D)},Nt.useActionState=function(D,H,ot){return L.H.useActionState(D,H,ot)},Nt.useCallback=function(D,H){return L.H.useCallback(D,H)},Nt.useContext=function(D){return L.H.useContext(D)},Nt.useDebugValue=function(){},Nt.useDeferredValue=function(D,H){return L.H.useDeferredValue(D,H)},Nt.useEffect=function(D,H,ot){var et=L.H;if(typeof ot=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return et.useEffect(D,H)},Nt.useId=function(){return L.H.useId()},Nt.useImperativeHandle=function(D,H,ot){return L.H.useImperativeHandle(D,H,ot)},Nt.useInsertionEffect=function(D,H){return L.H.useInsertionEffect(D,H)},Nt.useLayoutEffect=function(D,H){return L.H.useLayoutEffect(D,H)},Nt.useMemo=function(D,H){return L.H.useMemo(D,H)},Nt.useOptimistic=function(D,H){return L.H.useOptimistic(D,H)},Nt.useReducer=function(D,H,ot){return L.H.useReducer(D,H,ot)},Nt.useRef=function(D){return L.H.useRef(D)},Nt.useState=function(D){return L.H.useState(D)},Nt.useSyncExternalStore=function(D,H,ot){return L.H.useSyncExternalStore(D,H,ot)},Nt.useTransition=function(){return L.H.useTransition()},Nt.version="19.1.0",Nt}var Ov;function jp(){return Ov||(Ov=1,mf.exports=xE()),mf.exports}var K=jp(),yf={exports:{}},io={},bf={exports:{}},vf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function CE(){return Pv||(Pv=1,function(e){function t(M,F){var $=M.length;M.push(F);t:for(;0<$;){var ut=$-1>>>1,D=M[ut];if(0<s(D,F))M[ut]=F,M[$]=D,$=ut;else break t}}function n(M){return M.length===0?null:M[0]}function a(M){if(M.length===0)return null;var F=M[0],$=M.pop();if($!==F){M[0]=$;t:for(var ut=0,D=M.length,H=D>>>1;ut<H;){var ot=2*(ut+1)-1,et=M[ot],gt=ot+1,pt=M[gt];if(0>s(et,$))gt<D&&0>s(pt,et)?(M[ut]=pt,M[gt]=$,ut=gt):(M[ut]=et,M[ot]=$,ut=ot);else if(gt<D&&0>s(pt,$))M[ut]=pt,M[gt]=$,ut=gt;else break t}}return F}function s(M,F){var $=M.sortIndex-F.sortIndex;return $!==0?$:M.id-F.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var u=Date,c=u.now();e.unstable_now=function(){return u.now()-c}}var g=[],d=[],f=1,m=null,y=3,v=!1,S=!1,C=!1,T=!1,w=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;function O(M){for(var F=n(d);F!==null;){if(F.callback===null)a(d);else if(F.startTime<=M)a(d),F.sortIndex=F.expirationTime,t(g,F);else break;F=n(d)}}function L(M){if(C=!1,O(M),!S)if(n(g)!==null)S=!0,R||(R=!0,lt());else{var F=n(d);F!==null&&j(L,F.startTime-M)}}var R=!1,P=-1,J=5,nt=-1;function rt(){return T?!0:!(e.unstable_now()-nt<J)}function X(){if(T=!1,R){var M=e.unstable_now();nt=M;var F=!0;try{t:{S=!1,C&&(C=!1,k(P),P=-1),v=!0;var $=y;try{e:{for(O(M),m=n(g);m!==null&&!(m.expirationTime>M&&rt());){var ut=m.callback;if(typeof ut=="function"){m.callback=null,y=m.priorityLevel;var D=ut(m.expirationTime<=M);if(M=e.unstable_now(),typeof D=="function"){m.callback=D,O(M),F=!0;break e}m===n(g)&&a(g),O(M)}else a(g);m=n(g)}if(m!==null)F=!0;else{var H=n(d);H!==null&&j(L,H.startTime-M),F=!1}}break t}finally{m=null,y=$,v=!1}F=void 0}}finally{F?lt():R=!1}}}var lt;if(typeof E=="function")lt=function(){E(X)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,W=at.port2;at.port1.onmessage=X,lt=function(){W.postMessage(null)}}else lt=function(){w(X,0)};function j(M,F){P=w(function(){M(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_next=function(M){switch(y){case 1:case 2:case 3:var F=3;break;default:F=y}var $=y;y=F;try{return M()}finally{y=$}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(M,F){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=y;y=M;try{return F()}finally{y=$}},e.unstable_scheduleCallback=function(M,F,$){var ut=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ut+$:ut):$=ut,M){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=$+D,M={id:f++,callback:F,priorityLevel:M,startTime:$,expirationTime:D,sortIndex:-1},$>ut?(M.sortIndex=$,t(d,M),n(g)===null&&M===n(d)&&(C?(k(P),P=-1):C=!0,j(L,$-ut))):(M.sortIndex=D,t(g,M),S||v||(S=!0,R||(R=!0,lt()))),M},e.unstable_shouldYield=rt,e.unstable_wrapCallback=function(M){var F=y;return function(){var $=y;y=F;try{return M.apply(this,arguments)}finally{y=$}}}}(vf)),vf}var Nv;function _E(){return Nv||(Nv=1,bf.exports=CE()),bf.exports}var Sf={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function wE(){if(Iv)return Ke;Iv=1;var e=jp();function t(g){var d="https://react.dev/errors/"+g;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var f=2;f<arguments.length;f++)d+="&args[]="+encodeURIComponent(arguments[f])}return"Minified React error #"+g+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function o(g,d,f){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:m==null?null:""+m,children:g,containerInfo:d,implementation:f}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(g,d){if(g==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ke.createPortal=function(g,d){var f=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return o(g,d,null,f)},Ke.flushSync=function(g){var d=u.T,f=a.p;try{if(u.T=null,a.p=2,g)return g()}finally{u.T=d,a.p=f,a.d.f()}},Ke.preconnect=function(g,d){typeof g=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(g,d))},Ke.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},Ke.preinit=function(g,d){if(typeof g=="string"&&d&&typeof d.as=="string"){var f=d.as,m=c(f,d.crossOrigin),y=typeof d.integrity=="string"?d.integrity:void 0,v=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;f==="style"?a.d.S(g,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:m,integrity:y,fetchPriority:v}):f==="script"&&a.d.X(g,{crossOrigin:m,integrity:y,fetchPriority:v,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Ke.preinitModule=function(g,d){if(typeof g=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var f=c(d.as,d.crossOrigin);a.d.M(g,{crossOrigin:f,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(g)},Ke.preload=function(g,d){if(typeof g=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var f=d.as,m=c(f,d.crossOrigin);a.d.L(g,f,{crossOrigin:m,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Ke.preloadModule=function(g,d){if(typeof g=="string")if(d){var f=c(d.as,d.crossOrigin);a.d.m(g,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:f,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(g)},Ke.requestFormReset=function(g){a.d.r(g)},Ke.unstable_batchedUpdates=function(g,d){return g(d)},Ke.useFormState=function(g,d,f){return u.H.useFormState(g,d,f)},Ke.useFormStatus=function(){return u.H.useHostTransitionStatus()},Ke.version="19.1.0",Ke}var Fv;function TE(){if(Fv)return Sf.exports;Fv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Sf.exports=wE(),Sf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function kE(){if($v)return io;$v=1;var e=_E(),t=jp(),n=TE();function a(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function o(i){var r=i,l=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(l=r.return),i=r.return;while(i)}return r.tag===3?l:null}function u(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function c(i){if(o(i)!==i)throw Error(a(188))}function g(i){var r=i.alternate;if(!r){if(r=o(i),r===null)throw Error(a(188));return r!==i?null:i}for(var l=i,h=r;;){var p=l.return;if(p===null)break;var b=p.alternate;if(b===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===b.child){for(b=p.child;b;){if(b===l)return c(p),i;if(b===h)return c(p),r;b=b.sibling}throw Error(a(188))}if(l.return!==h.return)l=p,h=b;else{for(var _=!1,A=p.child;A;){if(A===l){_=!0,l=p,h=b;break}if(A===h){_=!0,h=p,l=b;break}A=A.sibling}if(!_){for(A=b.child;A;){if(A===l){_=!0,l=b,h=p;break}if(A===h){_=!0,h=b,l=p;break}A=A.sibling}if(!_)throw Error(a(189))}}if(l.alternate!==h)throw Error(a(190))}if(l.tag!==3)throw Error(a(188));return l.stateNode.current===l?i:r}function d(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=d(i),r!==null)return r;i=i.sibling}return null}var f=Object.assign,m=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),k=Symbol.for("react.consumer"),E=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),nt=Symbol.for("react.activity"),rt=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function lt(i){return i===null||typeof i!="object"?null:(i=X&&i[X]||i["@@iterator"],typeof i=="function"?i:null)}var at=Symbol.for("react.client.reference");function W(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===at?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case S:return"Fragment";case T:return"Profiler";case C:return"StrictMode";case L:return"Suspense";case R:return"SuspenseList";case nt:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case v:return"Portal";case E:return(i.displayName||"Context")+".Provider";case k:return(i._context.displayName||"Context")+".Consumer";case O:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case P:return r=i.displayName||null,r!==null?r:W(i.type)||"Memo";case J:r=i._payload,i=i._init;try{return W(i(r))}catch{}}return null}var j=Array.isArray,M=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ut=[],D=-1;function H(i){return{current:i}}function ot(i){0>D||(i.current=ut[D],ut[D]=null,D--)}function et(i,r){D++,ut[D]=i.current,i.current=r}var gt=H(null),pt=H(null),ht=H(null),Dt=H(null);function Bt(i,r){switch(et(ht,r),et(pt,i),et(gt,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?av(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=av(r),i=sv(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ot(gt),et(gt,i)}function Ht(){ot(gt),ot(pt),ot(ht)}function Zt(i){i.memoizedState!==null&&et(Dt,i);var r=gt.current,l=sv(r,i.type);r!==l&&(et(pt,i),et(gt,l))}function oe(i){pt.current===i&&(ot(gt),ot(pt)),Dt.current===i&&(ot(Dt),Ql._currentValue=$)}var ke=Object.prototype.hasOwnProperty,hi=e.unstable_scheduleCallback,ni=e.unstable_cancelCallback,tl=e.unstable_shouldYield,el=e.unstable_requestPaint,Fe=e.unstable_now,Fa=e.unstable_getCurrentPriorityLevel,Wr=e.unstable_ImmediatePriority,il=e.unstable_UserBlockingPriority,Vr=e.unstable_NormalPriority,sd=e.unstable_LowPriority,$a=e.unstable_IdlePriority,Xr=e.log,cr=e.unstable_setDisableYieldValue,Pi=null,Ye=null;function Qi(i){if(typeof Xr=="function"&&cr(i),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(Pi,i)}catch{}}var We=Math.clz32?Math.clz32:za,nl=Math.log,sc=Math.LN2;function za(i){return i>>>=0,i===0?32:31-(nl(i)/sc|0)|0}var Rn=256,di=4194304;function gi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ur(i,r,l){var h=i.pendingLanes;if(h===0)return 0;var p=0,b=i.suspendedLanes,_=i.pingedLanes;i=i.warmLanes;var A=h&134217727;return A!==0?(h=A&~b,h!==0?p=gi(h):(_&=A,_!==0?p=gi(_):l||(l=A&~i,l!==0&&(p=gi(l))))):(A=h&~b,A!==0?p=gi(A):_!==0?p=gi(_):l||(l=h&~i,l!==0&&(p=gi(l)))),p===0?0:r!==0&&r!==p&&(r&b)===0&&(b=p&-p,l=r&-r,b>=l||b===32&&(l&4194048)!==0)?r:p}function Mn(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function ld(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qr(){var i=Rn;return Rn<<=1,(Rn&4194048)===0&&(Rn=256),i}function Kr(){var i=di;return di<<=1,(di&62914560)===0&&(di=4194304),i}function rl(i){for(var r=[],l=0;31>l;l++)r.push(i);return r}function Ki(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function od(i,r,l,h,p,b){var _=i.pendingLanes;i.pendingLanes=l,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=l,i.entangledLanes&=l,i.errorRecoveryDisabledLanes&=l,i.shellSuspendCounter=0;var A=i.entanglements,B=i.expirationTimes,G=i.hiddenUpdates;for(l=_&~l;0<l;){var Z=31-We(l),it=1<<Z;A[Z]=0,B[Z]=-1;var Y=G[Z];if(Y!==null)for(G[Z]=null,Z=0;Z<Y.length;Z++){var V=Y[Z];V!==null&&(V.lane&=-536870913)}l&=~it}h!==0&&lc(i,h,0),b!==0&&p===0&&i.tag!==0&&(i.suspendedLanes|=b&~(_&~r))}function lc(i,r,l){i.pendingLanes|=r,i.suspendedLanes&=~r;var h=31-We(r);i.entangledLanes|=r,i.entanglements[h]=i.entanglements[h]|1073741824|l&4194090}function ye(i,r){var l=i.entangledLanes|=r;for(i=i.entanglements;l;){var h=31-We(l),p=1<<h;p&r|i[h]&r&&(i[h]|=r),l&=~p}}function cn(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function al(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function sl(){var i=F.p;return i!==0?i:(i=window.event,i===void 0?32:Tv(i.type))}function ll(i,r){var l=F.p;try{return F.p=i,r()}finally{F.p=l}}var Zi=Math.random().toString(36).slice(2),Ae="__reactFiber$"+Zi,Ve="__reactProps$"+Zi,$e="__reactContainer$"+Zi,un="__reactEvents$"+Zi,oc="__reactListeners$"+Zi,cc="__reactHandles$"+Zi,Ua="__reactResources$"+Zi,hr="__reactMarker$"+Zi;function _i(i){delete i[Ae],delete i[Ve],delete i[un],delete i[oc],delete i[cc]}function Dn(i){var r=i[Ae];if(r)return r;for(var l=i.parentNode;l;){if(r=l[$e]||l[Ae]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(i=uv(i);i!==null;){if(l=i[Ae])return l;i=uv(i)}return r}i=l,l=i.parentNode}return null}function Ln(i){if(i=i[Ae]||i[$e]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function dr(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(a(33))}function Bn(i){var r=i[Ua];return r||(r=i[Ua]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function xe(i){i[hr]=!0}var _t=new Set,I={};function ct(i,r){mt(i,r),mt(i+"Capture",r)}function mt(i,r){for(I[i]=r,i=0;i<r.length;i++)_t.add(r[i])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ee={},fe={};function Xe(i){return ke.call(fe,i)?!0:ke.call(Ee,i)?!1:se.test(i)?fe[i]=!0:(Ee[i]=!0,!1)}function fi(i,r,l){if(Xe(r))if(l===null)i.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var h=r.toLowerCase().slice(0,5);if(h!=="data-"&&h!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+l)}}function hn(i,r,l){if(l===null)i.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+l)}}function wi(i,r,l,h){if(h===null)i.removeAttribute(l);else{switch(typeof h){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(l);return}i.setAttributeNS(r,l,""+h)}}var Ce,ol;function On(i){if(Ce===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);Ce=r&&r[1]||"",ol=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ce+i+ol}var cd=!1;function ud(i,r){if(!i||cd)return"";cd=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var h={DetermineComponentFrameRoot:function(){try{if(r){var it=function(){throw Error()};if(Object.defineProperty(it.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(it,[])}catch(V){var Y=V}Reflect.construct(i,[],it)}else{try{it.call()}catch(V){Y=V}i.call(it.prototype)}}else{try{throw Error()}catch(V){Y=V}(it=i())&&typeof it.catch=="function"&&it.catch(function(){})}}catch(V){if(V&&Y&&typeof V.stack=="string")return[V.stack,Y.stack]}return[null,null]}};h.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(h.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(h.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var b=h.DetermineComponentFrameRoot(),_=b[0],A=b[1];if(_&&A){var B=_.split(`
`),G=A.split(`
`);for(p=h=0;h<B.length&&!B[h].includes("DetermineComponentFrameRoot");)h++;for(;p<G.length&&!G[p].includes("DetermineComponentFrameRoot");)p++;if(h===B.length||p===G.length)for(h=B.length-1,p=G.length-1;1<=h&&0<=p&&B[h]!==G[p];)p--;for(;1<=h&&0<=p;h--,p--)if(B[h]!==G[p]){if(h!==1||p!==1)do if(h--,p--,0>p||B[h]!==G[p]){var Z=`
`+B[h].replace(" at new "," at ");return i.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",i.displayName)),Z}while(1<=h&&0<=p);break}}}finally{cd=!1,Error.prepareStackTrace=l}return(l=i?i.displayName||i.name:"")?On(l):""}function uk(i){switch(i.tag){case 26:case 27:case 5:return On(i.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 15:return ud(i.type,!1);case 11:return ud(i.type.render,!1);case 1:return ud(i.type,!0);case 31:return On("Activity");default:return""}}function Jm(i){try{var r="";do r+=uk(i),i=i.return;while(i);return r}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Ni(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function ty(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function hk(i){var r=ty(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),h=""+i[r];if(!i.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,b=l.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return p.call(this)},set:function(_){h=""+_,b.call(this,_)}}),Object.defineProperty(i,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(_){h=""+_},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function uc(i){i._valueTracker||(i._valueTracker=hk(i))}function ey(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return i&&(h=ty(i)?i.checked?"true":"false":i.value),i=h,i!==l?(r.setValue(i),!0):!1}function hc(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var dk=/[\n"\\]/g;function Ii(i){return i.replace(dk,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function hd(i,r,l,h,p,b,_,A){i.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?i.type=_:i.removeAttribute("type"),r!=null?_==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+Ni(r)):i.value!==""+Ni(r)&&(i.value=""+Ni(r)):_!=="submit"&&_!=="reset"||i.removeAttribute("value"),r!=null?dd(i,_,Ni(r)):l!=null?dd(i,_,Ni(l)):h!=null&&i.removeAttribute("value"),p==null&&b!=null&&(i.defaultChecked=!!b),p!=null&&(i.checked=p&&typeof p!="function"&&typeof p!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.name=""+Ni(A):i.removeAttribute("name")}function iy(i,r,l,h,p,b,_,A){if(b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(i.type=b),r!=null||l!=null){if(!(b!=="submit"&&b!=="reset"||r!=null))return;l=l!=null?""+Ni(l):"",r=r!=null?""+Ni(r):l,A||r===i.value||(i.value=r),i.defaultValue=r}h=h??p,h=typeof h!="function"&&typeof h!="symbol"&&!!h,i.checked=A?i.checked:!!h,i.defaultChecked=!!h,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(i.name=_)}function dd(i,r,l){r==="number"&&hc(i.ownerDocument)===i||i.defaultValue===""+l||(i.defaultValue=""+l)}function qa(i,r,l,h){if(i=i.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=r.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Ni(l),r=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}r!==null||i[p].disabled||(r=i[p])}r!==null&&(r.selected=!0)}}function ny(i,r,l){if(r!=null&&(r=""+Ni(r),r!==i.value&&(i.value=r),l==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=l!=null?""+Ni(l):""}function ry(i,r,l,h){if(r==null){if(h!=null){if(l!=null)throw Error(a(92));if(j(h)){if(1<h.length)throw Error(a(93));h=h[0]}l=h}l==null&&(l=""),r=l}l=Ni(r),i.defaultValue=l,h=i.textContent,h===l&&h!==""&&h!==null&&(i.value=h)}function Ha(i,r){if(r){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=r;return}}i.textContent=r}var gk=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ay(i,r,l){var h=r.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?h?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":h?i.setProperty(r,l):typeof l!="number"||l===0||gk.has(r)?r==="float"?i.cssFloat=l:i[r]=(""+l).trim():i[r]=l+"px"}function sy(i,r,l){if(r!=null&&typeof r!="object")throw Error(a(62));if(i=i.style,l!=null){for(var h in l)!l.hasOwnProperty(h)||r!=null&&r.hasOwnProperty(h)||(h.indexOf("--")===0?i.setProperty(h,""):h==="float"?i.cssFloat="":i[h]="");for(var p in r)h=r[p],r.hasOwnProperty(p)&&l[p]!==h&&ay(i,p,h)}else for(var b in r)r.hasOwnProperty(b)&&ay(i,b,r[b])}function gd(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fk=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pk=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dc(i){return pk.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var fd=null;function pd(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ga=null,ja=null;function ly(i){var r=Ln(i);if(r&&(i=r.stateNode)){var l=i[Ve]||null;t:switch(i=r.stateNode,r.type){case"input":if(hd(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),r=l.name,l.type==="radio"&&r!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ii(""+r)+'"][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==i&&h.form===i.form){var p=h[Ve]||null;if(!p)throw Error(a(90));hd(h,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(r=0;r<l.length;r++)h=l[r],h.form===i.form&&ey(h)}break t;case"textarea":ny(i,l.value,l.defaultValue);break t;case"select":r=l.value,r!=null&&qa(i,!!l.multiple,r,!1)}}}var md=!1;function oy(i,r,l){if(md)return i(r,l);md=!0;try{var h=i(r);return h}finally{if(md=!1,(Ga!==null||ja!==null)&&(Kc(),Ga&&(r=Ga,i=ja,ja=Ga=null,ly(r),i)))for(r=0;r<i.length;r++)ly(i[r])}}function cl(i,r){var l=i.stateNode;if(l===null)return null;var h=l[Ve]||null;if(h===null)return null;l=h[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break t;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(a(231,r,typeof l));return l}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yd=!1;if(Pn)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){yd=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{yd=!1}var gr=null,bd=null,gc=null;function cy(){if(gc)return gc;var i,r=bd,l=r.length,h,p="value"in gr?gr.value:gr.textContent,b=p.length;for(i=0;i<l&&r[i]===p[i];i++);var _=l-i;for(h=1;h<=_&&r[l-h]===p[b-h];h++);return gc=p.slice(i,1<h?1-h:void 0)}function fc(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function pc(){return!0}function uy(){return!1}function pi(i){function r(l,h,p,b,_){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=b,this.target=_,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(l=i[A],this[A]=l?l(b):b[A]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?pc:uy,this.isPropagationStopped=uy,this}return f(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=pc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=pc)},persist:function(){},isPersistent:pc}),r}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=pi(Zr),hl=f({},Zr,{view:0,detail:0}),mk=pi(hl),vd,Sd,dl,yc=f({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==dl&&(dl&&i.type==="mousemove"?(vd=i.screenX-dl.screenX,Sd=i.screenY-dl.screenY):Sd=vd=0,dl=i),vd)},movementY:function(i){return"movementY"in i?i.movementY:Sd}}),hy=pi(yc),yk=f({},yc,{dataTransfer:0}),bk=pi(yk),vk=f({},hl,{relatedTarget:0}),xd=pi(vk),Sk=f({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),xk=pi(Sk),Ck=f({},Zr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),_k=pi(Ck),wk=f({},Zr,{data:0}),dy=pi(wk),Tk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ak={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ek(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Ak[i])?!!r[i]:!1}function Cd(){return Ek}var Rk=f({},hl,{key:function(i){if(i.key){var r=Tk[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=fc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?kk[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(i){return i.type==="keypress"?fc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?fc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Mk=pi(Rk),Dk=f({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gy=pi(Dk),Lk=f({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),Bk=pi(Lk),Ok=f({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pk=pi(Ok),Nk=f({},yc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Ik=pi(Nk),Fk=f({},Zr,{newState:0,oldState:0}),$k=pi(Fk),zk=[9,13,27,32],_d=Pn&&"CompositionEvent"in window,gl=null;Pn&&"documentMode"in document&&(gl=document.documentMode);var Uk=Pn&&"TextEvent"in window&&!gl,fy=Pn&&(!_d||gl&&8<gl&&11>=gl),py=" ",my=!1;function yy(i,r){switch(i){case"keyup":return zk.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function by(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ya=!1;function qk(i,r){switch(i){case"compositionend":return by(r);case"keypress":return r.which!==32?null:(my=!0,py);case"textInput":return i=r.data,i===py&&my?null:i;default:return null}}function Hk(i,r){if(Ya)return i==="compositionend"||!_d&&yy(i,r)?(i=cy(),gc=bd=gr=null,Ya=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return fy&&r.locale!=="ko"?null:r.data;default:return null}}var Gk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vy(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Gk[i.type]:r==="textarea"}function Sy(i,r,l,h){Ga?ja?ja.push(h):ja=[h]:Ga=h,r=nu(r,"onChange"),0<r.length&&(l=new mc("onChange","change",null,l,h),i.push({event:l,listeners:r}))}var fl=null,pl=null;function jk(i){tv(i,0)}function bc(i){var r=dr(i);if(ey(r))return i}function xy(i,r){if(i==="change")return r}var Cy=!1;if(Pn){var wd;if(Pn){var Td="oninput"in document;if(!Td){var _y=document.createElement("div");_y.setAttribute("oninput","return;"),Td=typeof _y.oninput=="function"}wd=Td}else wd=!1;Cy=wd&&(!document.documentMode||9<document.documentMode)}function wy(){fl&&(fl.detachEvent("onpropertychange",Ty),pl=fl=null)}function Ty(i){if(i.propertyName==="value"&&bc(pl)){var r=[];Sy(r,pl,i,pd(i)),oy(jk,r)}}function Yk(i,r,l){i==="focusin"?(wy(),fl=r,pl=l,fl.attachEvent("onpropertychange",Ty)):i==="focusout"&&wy()}function Wk(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return bc(pl)}function Vk(i,r){if(i==="click")return bc(r)}function Xk(i,r){if(i==="input"||i==="change")return bc(r)}function Qk(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Ti=typeof Object.is=="function"?Object.is:Qk;function ml(i,r){if(Ti(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var l=Object.keys(i),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!ke.call(r,p)||!Ti(i[p],r[p]))return!1}return!0}function ky(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ay(i,r){var l=ky(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=r&&h>=r)return{node:l,offset:r-i};i=h}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=ky(l)}}function Ey(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?Ey(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function Ry(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=hc(i.document);r instanceof i.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)i=r.contentWindow;else break;r=hc(i.document)}return r}function kd(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var Kk=Pn&&"documentMode"in document&&11>=document.documentMode,Wa=null,Ad=null,yl=null,Ed=!1;function My(i,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ed||Wa==null||Wa!==hc(h)||(h=Wa,"selectionStart"in h&&kd(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),yl&&ml(yl,h)||(yl=h,h=nu(Ad,"onSelect"),0<h.length&&(r=new mc("onSelect","select",null,r,l),i.push({event:r,listeners:h}),r.target=Wa)))}function Jr(i,r){var l={};return l[i.toLowerCase()]=r.toLowerCase(),l["Webkit"+i]="webkit"+r,l["Moz"+i]="moz"+r,l}var Va={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionrun:Jr("Transition","TransitionRun"),transitionstart:Jr("Transition","TransitionStart"),transitioncancel:Jr("Transition","TransitionCancel"),transitionend:Jr("Transition","TransitionEnd")},Rd={},Dy={};Pn&&(Dy=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function ta(i){if(Rd[i])return Rd[i];if(!Va[i])return i;var r=Va[i],l;for(l in r)if(r.hasOwnProperty(l)&&l in Dy)return Rd[i]=r[l];return i}var Ly=ta("animationend"),By=ta("animationiteration"),Oy=ta("animationstart"),Zk=ta("transitionrun"),Jk=ta("transitionstart"),tA=ta("transitioncancel"),Py=ta("transitionend"),Ny=new Map,Md="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Md.push("scrollEnd");function Ji(i,r){Ny.set(i,r),ct(r,[i])}var Iy=new WeakMap;function Fi(i,r){if(typeof i=="object"&&i!==null){var l=Iy.get(i);return l!==void 0?l:(r={value:i,source:r,stack:Jm(r)},Iy.set(i,r),r)}return{value:i,source:r,stack:Jm(r)}}var $i=[],Xa=0,Dd=0;function vc(){for(var i=Xa,r=Dd=Xa=0;r<i;){var l=$i[r];$i[r++]=null;var h=$i[r];$i[r++]=null;var p=$i[r];$i[r++]=null;var b=$i[r];if($i[r++]=null,h!==null&&p!==null){var _=h.pending;_===null?p.next=p:(p.next=_.next,_.next=p),h.pending=p}b!==0&&Fy(l,p,b)}}function Sc(i,r,l,h){$i[Xa++]=i,$i[Xa++]=r,$i[Xa++]=l,$i[Xa++]=h,Dd|=h,i.lanes|=h,i=i.alternate,i!==null&&(i.lanes|=h)}function Ld(i,r,l,h){return Sc(i,r,l,h),xc(i)}function Qa(i,r){return Sc(i,null,null,r),xc(i)}function Fy(i,r,l){i.lanes|=l;var h=i.alternate;h!==null&&(h.lanes|=l);for(var p=!1,b=i.return;b!==null;)b.childLanes|=l,h=b.alternate,h!==null&&(h.childLanes|=l),b.tag===22&&(i=b.stateNode,i===null||i._visibility&1||(p=!0)),i=b,b=b.return;return i.tag===3?(b=i.stateNode,p&&r!==null&&(p=31-We(l),i=b.hiddenUpdates,h=i[p],h===null?i[p]=[r]:h.push(r),r.lane=l|536870912),b):null}function xc(i){if(50<ql)throw ql=0,Fg=null,Error(a(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Ka={};function eA(i,r,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(i,r,l,h){return new eA(i,r,l,h)}function Bd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Nn(i,r){var l=i.alternate;return l===null?(l=ki(i.tag,r,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=r,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&65011712,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,r=i.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l.refCleanup=i.refCleanup,l}function $y(i,r){i.flags&=65011714;var l=i.alternate;return l===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,r=l.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function Cc(i,r,l,h,p,b){var _=0;if(h=i,typeof i=="function")Bd(i)&&(_=1);else if(typeof i=="string")_=nE(i,l,gt.current)?26:i==="html"||i==="head"||i==="body"?27:5;else t:switch(i){case nt:return i=ki(31,l,r,p),i.elementType=nt,i.lanes=b,i;case S:return ea(l.children,p,b,r);case C:_=8,p|=24;break;case T:return i=ki(12,l,r,p|2),i.elementType=T,i.lanes=b,i;case L:return i=ki(13,l,r,p),i.elementType=L,i.lanes=b,i;case R:return i=ki(19,l,r,p),i.elementType=R,i.lanes=b,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case w:case E:_=10;break t;case k:_=9;break t;case O:_=11;break t;case P:_=14;break t;case J:_=16,h=null;break t}_=29,l=Error(a(130,i===null?"null":typeof i,"")),h=null}return r=ki(_,l,r,p),r.elementType=i,r.type=h,r.lanes=b,r}function ea(i,r,l,h){return i=ki(7,i,h,r),i.lanes=l,i}function Od(i,r,l){return i=ki(6,i,null,r),i.lanes=l,i}function Pd(i,r,l){return r=ki(4,i.children!==null?i.children:[],i.key,r),r.lanes=l,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Za=[],Ja=0,_c=null,wc=0,zi=[],Ui=0,ia=null,In=1,Fn="";function na(i,r){Za[Ja++]=wc,Za[Ja++]=_c,_c=i,wc=r}function zy(i,r,l){zi[Ui++]=In,zi[Ui++]=Fn,zi[Ui++]=ia,ia=i;var h=In;i=Fn;var p=32-We(h)-1;h&=~(1<<p),l+=1;var b=32-We(r)+p;if(30<b){var _=p-p%5;b=(h&(1<<_)-1).toString(32),h>>=_,p-=_,In=1<<32-We(r)+p|l<<p|h,Fn=b+i}else In=1<<b|l<<p|h,Fn=i}function Nd(i){i.return!==null&&(na(i,1),zy(i,1,0))}function Id(i){for(;i===_c;)_c=Za[--Ja],Za[Ja]=null,wc=Za[--Ja],Za[Ja]=null;for(;i===ia;)ia=zi[--Ui],zi[Ui]=null,Fn=zi[--Ui],zi[Ui]=null,In=zi[--Ui],zi[Ui]=null}var ri=null,pe=null,Wt=!1,ra=null,dn=!1,Fd=Error(a(519));function aa(i){var r=Error(a(418,""));throw Sl(Fi(r,i)),Fd}function Uy(i){var r=i.stateNode,l=i.type,h=i.memoizedProps;switch(r[Ae]=i,r[Ve]=h,l){case"dialog":zt("cancel",r),zt("close",r);break;case"iframe":case"object":case"embed":zt("load",r);break;case"video":case"audio":for(l=0;l<Gl.length;l++)zt(Gl[l],r);break;case"source":zt("error",r);break;case"img":case"image":case"link":zt("error",r),zt("load",r);break;case"details":zt("toggle",r);break;case"input":zt("invalid",r),iy(r,h.value,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name,!0),uc(r);break;case"select":zt("invalid",r);break;case"textarea":zt("invalid",r),ry(r,h.value,h.defaultValue,h.children),uc(r)}l=h.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||r.textContent===""+l||h.suppressHydrationWarning===!0||rv(r.textContent,l)?(h.popover!=null&&(zt("beforetoggle",r),zt("toggle",r)),h.onScroll!=null&&zt("scroll",r),h.onScrollEnd!=null&&zt("scrollend",r),h.onClick!=null&&(r.onclick=ru),r=!0):r=!1,r||aa(i)}function qy(i){for(ri=i.return;ri;)switch(ri.tag){case 5:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:ri=ri.return}}function bl(i){if(i!==ri)return!1;if(!Wt)return qy(i),Wt=!0,!1;var r=i.tag,l;if((l=r!==3&&r!==27)&&((l=r===5)&&(l=i.type,l=!(l!=="form"&&l!=="button")||tf(i.type,i.memoizedProps)),l=!l),l&&pe&&aa(i),qy(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));t:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(l=i.data,l==="/$"){if(r===0){pe=en(i.nextSibling);break t}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++;i=i.nextSibling}pe=null}}else r===27?(r=pe,Rr(i.type)?(i=af,af=null,pe=i):pe=r):pe=ri?en(i.stateNode.nextSibling):null;return!0}function vl(){pe=ri=null,Wt=!1}function Hy(){var i=ra;return i!==null&&(bi===null?bi=i:bi.push.apply(bi,i),ra=null),i}function Sl(i){ra===null?ra=[i]:ra.push(i)}var $d=H(null),sa=null,$n=null;function fr(i,r,l){et($d,r._currentValue),r._currentValue=l}function zn(i){i._currentValue=$d.current,ot($d)}function zd(i,r,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),i===l)break;i=i.return}}function Ud(i,r,l,h){var p=i.child;for(p!==null&&(p.return=i);p!==null;){var b=p.dependencies;if(b!==null){var _=p.child;b=b.firstContext;t:for(;b!==null;){var A=b;b=p;for(var B=0;B<r.length;B++)if(A.context===r[B]){b.lanes|=l,A=b.alternate,A!==null&&(A.lanes|=l),zd(b.return,l,i),h||(_=null);break t}b=A.next}}else if(p.tag===18){if(_=p.return,_===null)throw Error(a(341));_.lanes|=l,b=_.alternate,b!==null&&(b.lanes|=l),zd(_,l,i),_=null}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===i){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}}function xl(i,r,l,h){i=null;for(var p=r,b=!1;p!==null;){if(!b){if((p.flags&524288)!==0)b=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var _=p.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var A=p.type;Ti(p.pendingProps.value,_.value)||(i!==null?i.push(A):i=[A])}}else if(p===Dt.current){if(_=p.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(i!==null?i.push(Ql):i=[Ql])}p=p.return}i!==null&&Ud(r,i,l,h),r.flags|=262144}function Tc(i){for(i=i.firstContext;i!==null;){if(!Ti(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function la(i){sa=i,$n=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Qe(i){return Gy(sa,i)}function kc(i,r){return sa===null&&la(i),Gy(i,r)}function Gy(i,r){var l=r._currentValue;if(r={context:r,memoizedValue:l,next:null},$n===null){if(i===null)throw Error(a(308));$n=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else $n=$n.next=r;return l}var iA=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(l,h){i.push(h)}};this.abort=function(){r.aborted=!0,i.forEach(function(l){return l()})}},nA=e.unstable_scheduleCallback,rA=e.unstable_NormalPriority,Re={$$typeof:E,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qd(){return{controller:new iA,data:new Map,refCount:0}}function Cl(i){i.refCount--,i.refCount===0&&nA(rA,function(){i.controller.abort()})}var _l=null,Hd=0,ts=0,es=null;function aA(i,r){if(_l===null){var l=_l=[];Hd=0,ts=jg(),es={status:"pending",value:void 0,then:function(h){l.push(h)}}}return Hd++,r.then(jy,jy),r}function jy(){if(--Hd===0&&_l!==null){es!==null&&(es.status="fulfilled");var i=_l;_l=null,ts=0,es=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function sA(i,r){var l=[],h={status:"pending",value:null,reason:null,then:function(p){l.push(p)}};return i.then(function(){h.status="fulfilled",h.value=r;for(var p=0;p<l.length;p++)(0,l[p])(r)},function(p){for(h.status="rejected",h.reason=p,p=0;p<l.length;p++)(0,l[p])(void 0)}),h}var Yy=M.S;M.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&aA(i,r),Yy!==null&&Yy(i,r)};var oa=H(null);function Gd(){var i=oa.current;return i!==null?i:le.pooledCache}function Ac(i,r){r===null?et(oa,oa.current):et(oa,r.pool)}function Wy(){var i=Gd();return i===null?null:{parent:Re._currentValue,pool:i}}var wl=Error(a(460)),Vy=Error(a(474)),Ec=Error(a(542)),jd={then:function(){}};function Xy(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Rc(){}function Qy(i,r,l){switch(l=i[l],l===void 0?i.push(r):l!==r&&(r.then(Rc,Rc),r=l),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Zy(i),i;default:if(typeof r.status=="string")r.then(Rc,Rc);else{if(i=le,i!==null&&100<i.shellSuspendCounter)throw Error(a(482));i=r,i.status="pending",i.then(function(h){if(r.status==="pending"){var p=r;p.status="fulfilled",p.value=h}},function(h){if(r.status==="pending"){var p=r;p.status="rejected",p.reason=h}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Zy(i),i}throw Tl=r,wl}}var Tl=null;function Ky(){if(Tl===null)throw Error(a(459));var i=Tl;return Tl=null,i}function Zy(i){if(i===wl||i===Ec)throw Error(a(483))}var pr=!1;function Yd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wd(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function mr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function yr(i,r,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Jt&2)!==0){var p=h.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),h.pending=r,r=xc(i),Fy(i,null,l),r}return Sc(i,h,r,l),xc(i)}function kl(i,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194048)!==0)){var h=r.lanes;h&=i.pendingLanes,l|=h,r.lanes=l,ye(i,l)}}function Vd(i,r){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,b=null;if(l=l.firstBaseUpdate,l!==null){do{var _={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};b===null?p=b=_:b=b.next=_,l=l.next}while(l!==null);b===null?p=b=r:b=b.next=r}else p=b=r;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:b,shared:h.shared,callbacks:h.callbacks},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=r:i.next=r,l.lastBaseUpdate=r}var Xd=!1;function Al(){if(Xd){var i=es;if(i!==null)throw i}}function El(i,r,l,h){Xd=!1;var p=i.updateQueue;pr=!1;var b=p.firstBaseUpdate,_=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var B=A,G=B.next;B.next=null,_===null?b=G:_.next=G,_=B;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,A=Z.lastBaseUpdate,A!==_&&(A===null?Z.firstBaseUpdate=G:A.next=G,Z.lastBaseUpdate=B))}if(b!==null){var it=p.baseState;_=0,Z=G=B=null,A=b;do{var Y=A.lane&-536870913,V=Y!==A.lane;if(V?(Gt&Y)===Y:(h&Y)===Y){Y!==0&&Y===ts&&(Xd=!0),Z!==null&&(Z=Z.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ot=i,Et=A;Y=r;var ne=l;switch(Et.tag){case 1:if(Ot=Et.payload,typeof Ot=="function"){it=Ot.call(ne,it,Y);break t}it=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=Et.payload,Y=typeof Ot=="function"?Ot.call(ne,it,Y):Ot,Y==null)break t;it=f({},it,Y);break t;case 2:pr=!0}}Y=A.callback,Y!==null&&(i.flags|=64,V&&(i.flags|=8192),V=p.callbacks,V===null?p.callbacks=[Y]:V.push(Y))}else V={lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Z===null?(G=Z=V,B=it):Z=Z.next=V,_|=Y;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;V=A,A=V.next,V.next=null,p.lastBaseUpdate=V,p.shared.pending=null}}while(!0);Z===null&&(B=it),p.baseState=B,p.firstBaseUpdate=G,p.lastBaseUpdate=Z,b===null&&(p.shared.lanes=0),Tr|=_,i.lanes=_,i.memoizedState=it}}function Jy(i,r){if(typeof i!="function")throw Error(a(191,i));i.call(r)}function t0(i,r){var l=i.callbacks;if(l!==null)for(i.callbacks=null,i=0;i<l.length;i++)Jy(l[i],r)}var is=H(null),Mc=H(0);function e0(i,r){i=Wn,et(Mc,i),et(is,r),Wn=i|r.baseLanes}function Qd(){et(Mc,Wn),et(is,is.current)}function Kd(){Wn=Mc.current,ot(is),ot(Mc)}var br=0,It=null,ee=null,_e=null,Dc=!1,ns=!1,ca=!1,Lc=0,Rl=0,rs=null,lA=0;function be(){throw Error(a(321))}function Zd(i,r){if(r===null)return!1;for(var l=0;l<r.length&&l<i.length;l++)if(!Ti(i[l],r[l]))return!1;return!0}function Jd(i,r,l,h,p,b){return br=b,It=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,M.H=i===null||i.memoizedState===null?F0:$0,ca=!1,b=l(h,p),ca=!1,ns&&(b=n0(r,l,h,p)),i0(i),b}function i0(i){M.H=Fc;var r=ee!==null&&ee.next!==null;if(br=0,_e=ee=It=null,Dc=!1,Rl=0,rs=null,r)throw Error(a(300));i===null||Pe||(i=i.dependencies,i!==null&&Tc(i)&&(Pe=!0))}function n0(i,r,l,h){It=i;var p=0;do{if(ns&&(rs=null),Rl=0,ns=!1,25<=p)throw Error(a(301));if(p+=1,_e=ee=null,i.updateQueue!=null){var b=i.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}M.H=fA,b=r(l,h)}while(ns);return b}function oA(){var i=M.H,r=i.useState()[0];return r=typeof r.then=="function"?Ml(r):r,i=i.useState()[0],(ee!==null?ee.memoizedState:null)!==i&&(It.flags|=1024),r}function tg(){var i=Lc!==0;return Lc=0,i}function eg(i,r,l){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~l}function ig(i){if(Dc){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dc=!1}br=0,_e=ee=It=null,ns=!1,Rl=Lc=0,rs=null}function mi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?It.memoizedState=_e=i:_e=_e.next=i,_e}function we(){if(ee===null){var i=It.alternate;i=i!==null?i.memoizedState:null}else i=ee.next;var r=_e===null?It.memoizedState:_e.next;if(r!==null)_e=r,ee=i;else{if(i===null)throw It.alternate===null?Error(a(467)):Error(a(310));ee=i,i={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},_e===null?It.memoizedState=_e=i:_e=_e.next=i}return _e}function ng(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ml(i){var r=Rl;return Rl+=1,rs===null&&(rs=[]),i=Qy(rs,i,r),r=It,(_e===null?r.memoizedState:_e.next)===null&&(r=r.alternate,M.H=r===null||r.memoizedState===null?F0:$0),i}function Bc(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Ml(i);if(i.$$typeof===E)return Qe(i)}throw Error(a(438,String(i)))}function rg(i){var r=null,l=It.updateQueue;if(l!==null&&(r=l.memoCache),r==null){var h=It.alternate;h!==null&&(h=h.updateQueue,h!==null&&(h=h.memoCache,h!=null&&(r={data:h.data.map(function(p){return p.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),l===null&&(l=ng(),It.updateQueue=l),l.memoCache=r,l=r.data[r.index],l===void 0)for(l=r.data[r.index]=Array(i),h=0;h<i;h++)l[h]=rt;return r.index++,l}function Un(i,r){return typeof r=="function"?r(i):r}function Oc(i){var r=we();return ag(r,ee,i)}function ag(i,r,l){var h=i.queue;if(h===null)throw Error(a(311));h.lastRenderedReducer=l;var p=i.baseQueue,b=h.pending;if(b!==null){if(p!==null){var _=p.next;p.next=b.next,b.next=_}r.baseQueue=p=b,h.pending=null}if(b=i.baseState,p===null)i.memoizedState=b;else{r=p.next;var A=_=null,B=null,G=r,Z=!1;do{var it=G.lane&-536870913;if(it!==G.lane?(Gt&it)===it:(br&it)===it){var Y=G.revertLane;if(Y===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),it===ts&&(Z=!0);else if((br&Y)===Y){G=G.next,Y===ts&&(Z=!0);continue}else it={lane:0,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},B===null?(A=B=it,_=b):B=B.next=it,It.lanes|=Y,Tr|=Y;it=G.action,ca&&l(b,it),b=G.hasEagerState?G.eagerState:l(b,it)}else Y={lane:it,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},B===null?(A=B=Y,_=b):B=B.next=Y,It.lanes|=it,Tr|=it;G=G.next}while(G!==null&&G!==r);if(B===null?_=b:B.next=A,!Ti(b,i.memoizedState)&&(Pe=!0,Z&&(l=es,l!==null)))throw l;i.memoizedState=b,i.baseState=_,i.baseQueue=B,h.lastRenderedState=b}return p===null&&(h.lanes=0),[i.memoizedState,h.dispatch]}function sg(i){var r=we(),l=r.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,b=r.memoizedState;if(p!==null){l.pending=null;var _=p=p.next;do b=i(b,_.action),_=_.next;while(_!==p);Ti(b,r.memoizedState)||(Pe=!0),r.memoizedState=b,r.baseQueue===null&&(r.baseState=b),l.lastRenderedState=b}return[b,h]}function r0(i,r,l){var h=It,p=we(),b=Wt;if(b){if(l===void 0)throw Error(a(407));l=l()}else l=r();var _=!Ti((ee||p).memoizedState,l);_&&(p.memoizedState=l,Pe=!0),p=p.queue;var A=l0.bind(null,h,p,i);if(Dl(2048,8,A,[i]),p.getSnapshot!==r||_||_e!==null&&_e.memoizedState.tag&1){if(h.flags|=2048,as(9,Pc(),s0.bind(null,h,p,l,r),null),le===null)throw Error(a(349));b||(br&124)!==0||a0(h,r,l)}return l}function a0(i,r,l){i.flags|=16384,i={getSnapshot:r,value:l},r=It.updateQueue,r===null?(r=ng(),It.updateQueue=r,r.stores=[i]):(l=r.stores,l===null?r.stores=[i]:l.push(i))}function s0(i,r,l,h){r.value=l,r.getSnapshot=h,o0(r)&&c0(i)}function l0(i,r,l){return l(function(){o0(r)&&c0(i)})}function o0(i){var r=i.getSnapshot;i=i.value;try{var l=r();return!Ti(i,l)}catch{return!0}}function c0(i){var r=Qa(i,2);r!==null&&Di(r,i,2)}function lg(i){var r=mi();if(typeof i=="function"){var l=i;if(i=l(),ca){Qi(!0);try{l()}finally{Qi(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:i},r}function u0(i,r,l,h){return i.baseState=l,ag(i,ee,typeof h=="function"?h:Un)}function cA(i,r,l,h,p){if(Ic(i))throw Error(a(485));if(i=r.action,i!==null){var b={payload:p,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){b.listeners.push(_)}};M.T!==null?l(!0):b.isTransition=!1,h(b),l=r.pending,l===null?(b.next=r.pending=b,h0(r,b)):(b.next=l.next,r.pending=l.next=b)}}function h0(i,r){var l=r.action,h=r.payload,p=i.state;if(r.isTransition){var b=M.T,_={};M.T=_;try{var A=l(p,h),B=M.S;B!==null&&B(_,A),d0(i,r,A)}catch(G){og(i,r,G)}finally{M.T=b}}else try{b=l(p,h),d0(i,r,b)}catch(G){og(i,r,G)}}function d0(i,r,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(h){g0(i,r,h)},function(h){return og(i,r,h)}):g0(i,r,l)}function g0(i,r,l){r.status="fulfilled",r.value=l,f0(r),i.state=l,r=i.pending,r!==null&&(l=r.next,l===r?i.pending=null:(l=l.next,r.next=l,h0(i,l)))}function og(i,r,l){var h=i.pending;if(i.pending=null,h!==null){h=h.next;do r.status="rejected",r.reason=l,f0(r),r=r.next;while(r!==h)}i.action=null}function f0(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function p0(i,r){return r}function m0(i,r){if(Wt){var l=le.formState;if(l!==null){t:{var h=It;if(Wt){if(pe){e:{for(var p=pe,b=dn;p.nodeType!==8;){if(!b){p=null;break e}if(p=en(p.nextSibling),p===null){p=null;break e}}b=p.data,p=b==="F!"||b==="F"?p:null}if(p){pe=en(p.nextSibling),h=p.data==="F!";break t}}aa(h)}h=!1}h&&(r=l[0])}}return l=mi(),l.memoizedState=l.baseState=r,h={pending:null,lanes:0,dispatch:null,lastRenderedReducer:p0,lastRenderedState:r},l.queue=h,l=P0.bind(null,It,h),h.dispatch=l,h=lg(!1),b=gg.bind(null,It,!1,h.queue),h=mi(),p={state:r,dispatch:null,action:i,pending:null},h.queue=p,l=cA.bind(null,It,p,b,l),p.dispatch=l,h.memoizedState=i,[r,l,!1]}function y0(i){var r=we();return b0(r,ee,i)}function b0(i,r,l){if(r=ag(i,r,p0)[0],i=Oc(Un)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var h=Ml(r)}catch(_){throw _===wl?Ec:_}else h=r;r=we();var p=r.queue,b=p.dispatch;return l!==r.memoizedState&&(It.flags|=2048,as(9,Pc(),uA.bind(null,p,l),null)),[h,b,i]}function uA(i,r){i.action=r}function v0(i){var r=we(),l=ee;if(l!==null)return b0(r,l,i);we(),r=r.memoizedState,l=we();var h=l.queue.dispatch;return l.memoizedState=i,[r,h,!1]}function as(i,r,l,h){return i={tag:i,create:l,deps:h,inst:r,next:null},r=It.updateQueue,r===null&&(r=ng(),It.updateQueue=r),l=r.lastEffect,l===null?r.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,r.lastEffect=i),i}function Pc(){return{destroy:void 0,resource:void 0}}function S0(){return we().memoizedState}function Nc(i,r,l,h){var p=mi();h=h===void 0?null:h,It.flags|=i,p.memoizedState=as(1|r,Pc(),l,h)}function Dl(i,r,l,h){var p=we();h=h===void 0?null:h;var b=p.memoizedState.inst;ee!==null&&h!==null&&Zd(h,ee.memoizedState.deps)?p.memoizedState=as(r,b,l,h):(It.flags|=i,p.memoizedState=as(1|r,b,l,h))}function x0(i,r){Nc(8390656,8,i,r)}function C0(i,r){Dl(2048,8,i,r)}function _0(i,r){return Dl(4,2,i,r)}function w0(i,r){return Dl(4,4,i,r)}function T0(i,r){if(typeof r=="function"){i=i();var l=r(i);return function(){typeof l=="function"?l():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function k0(i,r,l){l=l!=null?l.concat([i]):null,Dl(4,4,T0.bind(null,r,i),l)}function cg(){}function A0(i,r){var l=we();r=r===void 0?null:r;var h=l.memoizedState;return r!==null&&Zd(r,h[1])?h[0]:(l.memoizedState=[i,r],i)}function E0(i,r){var l=we();r=r===void 0?null:r;var h=l.memoizedState;if(r!==null&&Zd(r,h[1]))return h[0];if(h=i(),ca){Qi(!0);try{i()}finally{Qi(!1)}}return l.memoizedState=[h,r],h}function ug(i,r,l){return l===void 0||(br&1073741824)!==0?i.memoizedState=r:(i.memoizedState=l,i=Db(),It.lanes|=i,Tr|=i,l)}function R0(i,r,l,h){return Ti(l,r)?l:is.current!==null?(i=ug(i,l,h),Ti(i,r)||(Pe=!0),i):(br&42)===0?(Pe=!0,i.memoizedState=l):(i=Db(),It.lanes|=i,Tr|=i,r)}function M0(i,r,l,h,p){var b=F.p;F.p=b!==0&&8>b?b:8;var _=M.T,A={};M.T=A,gg(i,!1,r,l);try{var B=p(),G=M.S;if(G!==null&&G(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var Z=sA(B,h);Ll(i,r,Z,Mi(i))}else Ll(i,r,h,Mi(i))}catch(it){Ll(i,r,{then:function(){},status:"rejected",reason:it},Mi())}finally{F.p=b,M.T=_}}function hA(){}function hg(i,r,l,h){if(i.tag!==5)throw Error(a(476));var p=D0(i).queue;M0(i,p,r,$,l===null?hA:function(){return L0(i),l(h)})}function D0(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:$},next:null};var l={};return r.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:l},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function L0(i){var r=D0(i).next.queue;Ll(i,r,{},Mi())}function dg(){return Qe(Ql)}function B0(){return we().memoizedState}function O0(){return we().memoizedState}function dA(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var l=Mi();i=mr(l);var h=yr(r,i,l);h!==null&&(Di(h,r,l),kl(h,r,l)),r={cache:qd()},i.payload=r;return}r=r.return}}function gA(i,r,l){var h=Mi();l={lane:h,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Ic(i)?N0(r,l):(l=Ld(i,r,l,h),l!==null&&(Di(l,i,h),I0(l,r,h)))}function P0(i,r,l){var h=Mi();Ll(i,r,l,h)}function Ll(i,r,l,h){var p={lane:h,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ic(i))N0(r,p);else{var b=i.alternate;if(i.lanes===0&&(b===null||b.lanes===0)&&(b=r.lastRenderedReducer,b!==null))try{var _=r.lastRenderedState,A=b(_,l);if(p.hasEagerState=!0,p.eagerState=A,Ti(A,_))return Sc(i,r,p,0),le===null&&vc(),!1}catch{}finally{}if(l=Ld(i,r,p,h),l!==null)return Di(l,i,h),I0(l,r,h),!0}return!1}function gg(i,r,l,h){if(h={lane:2,revertLane:jg(),action:h,hasEagerState:!1,eagerState:null,next:null},Ic(i)){if(r)throw Error(a(479))}else r=Ld(i,l,h,2),r!==null&&Di(r,i,2)}function Ic(i){var r=i.alternate;return i===It||r!==null&&r===It}function N0(i,r){ns=Dc=!0;var l=i.pending;l===null?r.next=r:(r.next=l.next,l.next=r),i.pending=r}function I0(i,r,l){if((l&4194048)!==0){var h=r.lanes;h&=i.pendingLanes,l|=h,r.lanes=l,ye(i,l)}}var Fc={readContext:Qe,use:Bc,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be},F0={readContext:Qe,use:Bc,useCallback:function(i,r){return mi().memoizedState=[i,r===void 0?null:r],i},useContext:Qe,useEffect:x0,useImperativeHandle:function(i,r,l){l=l!=null?l.concat([i]):null,Nc(4194308,4,T0.bind(null,r,i),l)},useLayoutEffect:function(i,r){return Nc(4194308,4,i,r)},useInsertionEffect:function(i,r){Nc(4,2,i,r)},useMemo:function(i,r){var l=mi();r=r===void 0?null:r;var h=i();if(ca){Qi(!0);try{i()}finally{Qi(!1)}}return l.memoizedState=[h,r],h},useReducer:function(i,r,l){var h=mi();if(l!==void 0){var p=l(r);if(ca){Qi(!0);try{l(r)}finally{Qi(!1)}}}else p=r;return h.memoizedState=h.baseState=p,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:p},h.queue=i,i=i.dispatch=gA.bind(null,It,i),[h.memoizedState,i]},useRef:function(i){var r=mi();return i={current:i},r.memoizedState=i},useState:function(i){i=lg(i);var r=i.queue,l=P0.bind(null,It,r);return r.dispatch=l,[i.memoizedState,l]},useDebugValue:cg,useDeferredValue:function(i,r){var l=mi();return ug(l,i,r)},useTransition:function(){var i=lg(!1);return i=M0.bind(null,It,i.queue,!0,!1),mi().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,l){var h=It,p=mi();if(Wt){if(l===void 0)throw Error(a(407));l=l()}else{if(l=r(),le===null)throw Error(a(349));(Gt&124)!==0||a0(h,r,l)}p.memoizedState=l;var b={value:l,getSnapshot:r};return p.queue=b,x0(l0.bind(null,h,b,i),[i]),h.flags|=2048,as(9,Pc(),s0.bind(null,h,b,l,r),null),l},useId:function(){var i=mi(),r=le.identifierPrefix;if(Wt){var l=Fn,h=In;l=(h&~(1<<32-We(h)-1)).toString(32)+l,r="«"+r+"R"+l,l=Lc++,0<l&&(r+="H"+l.toString(32)),r+="»"}else l=lA++,r="«"+r+"r"+l.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:dg,useFormState:m0,useActionState:m0,useOptimistic:function(i){var r=mi();r.memoizedState=r.baseState=i;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=l,r=gg.bind(null,It,!0,l),l.dispatch=r,[i,r]},useMemoCache:rg,useCacheRefresh:function(){return mi().memoizedState=dA.bind(null,It)}},$0={readContext:Qe,use:Bc,useCallback:A0,useContext:Qe,useEffect:C0,useImperativeHandle:k0,useInsertionEffect:_0,useLayoutEffect:w0,useMemo:E0,useReducer:Oc,useRef:S0,useState:function(){return Oc(Un)},useDebugValue:cg,useDeferredValue:function(i,r){var l=we();return R0(l,ee.memoizedState,i,r)},useTransition:function(){var i=Oc(Un)[0],r=we().memoizedState;return[typeof i=="boolean"?i:Ml(i),r]},useSyncExternalStore:r0,useId:B0,useHostTransitionStatus:dg,useFormState:y0,useActionState:y0,useOptimistic:function(i,r){var l=we();return u0(l,ee,i,r)},useMemoCache:rg,useCacheRefresh:O0},fA={readContext:Qe,use:Bc,useCallback:A0,useContext:Qe,useEffect:C0,useImperativeHandle:k0,useInsertionEffect:_0,useLayoutEffect:w0,useMemo:E0,useReducer:sg,useRef:S0,useState:function(){return sg(Un)},useDebugValue:cg,useDeferredValue:function(i,r){var l=we();return ee===null?ug(l,i,r):R0(l,ee.memoizedState,i,r)},useTransition:function(){var i=sg(Un)[0],r=we().memoizedState;return[typeof i=="boolean"?i:Ml(i),r]},useSyncExternalStore:r0,useId:B0,useHostTransitionStatus:dg,useFormState:v0,useActionState:v0,useOptimistic:function(i,r){var l=we();return ee!==null?u0(l,ee,i,r):(l.baseState=i,[i,l.queue.dispatch])},useMemoCache:rg,useCacheRefresh:O0},ss=null,Bl=0;function $c(i){var r=Bl;return Bl+=1,ss===null&&(ss=[]),Qy(ss,i,r)}function Ol(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function zc(i,r){throw r.$$typeof===m?Error(a(525)):(i=Object.prototype.toString.call(r),Error(a(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function z0(i){var r=i._init;return r(i._payload)}function U0(i){function r(z,N){if(i){var q=z.deletions;q===null?(z.deletions=[N],z.flags|=16):q.push(N)}}function l(z,N){if(!i)return null;for(;N!==null;)r(z,N),N=N.sibling;return null}function h(z){for(var N=new Map;z!==null;)z.key!==null?N.set(z.key,z):N.set(z.index,z),z=z.sibling;return N}function p(z,N){return z=Nn(z,N),z.index=0,z.sibling=null,z}function b(z,N,q){return z.index=q,i?(q=z.alternate,q!==null?(q=q.index,q<N?(z.flags|=67108866,N):q):(z.flags|=67108866,N)):(z.flags|=1048576,N)}function _(z){return i&&z.alternate===null&&(z.flags|=67108866),z}function A(z,N,q,tt){return N===null||N.tag!==6?(N=Od(q,z.mode,tt),N.return=z,N):(N=p(N,q),N.return=z,N)}function B(z,N,q,tt){var yt=q.type;return yt===S?Z(z,N,q.props.children,tt,q.key):N!==null&&(N.elementType===yt||typeof yt=="object"&&yt!==null&&yt.$$typeof===J&&z0(yt)===N.type)?(N=p(N,q.props),Ol(N,q),N.return=z,N):(N=Cc(q.type,q.key,q.props,null,z.mode,tt),Ol(N,q),N.return=z,N)}function G(z,N,q,tt){return N===null||N.tag!==4||N.stateNode.containerInfo!==q.containerInfo||N.stateNode.implementation!==q.implementation?(N=Pd(q,z.mode,tt),N.return=z,N):(N=p(N,q.children||[]),N.return=z,N)}function Z(z,N,q,tt,yt){return N===null||N.tag!==7?(N=ea(q,z.mode,tt,yt),N.return=z,N):(N=p(N,q),N.return=z,N)}function it(z,N,q){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Od(""+N,z.mode,q),N.return=z,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case y:return q=Cc(N.type,N.key,N.props,null,z.mode,q),Ol(q,N),q.return=z,q;case v:return N=Pd(N,z.mode,q),N.return=z,N;case J:var tt=N._init;return N=tt(N._payload),it(z,N,q)}if(j(N)||lt(N))return N=ea(N,z.mode,q,null),N.return=z,N;if(typeof N.then=="function")return it(z,$c(N),q);if(N.$$typeof===E)return it(z,kc(z,N),q);zc(z,N)}return null}function Y(z,N,q,tt){var yt=N!==null?N.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return yt!==null?null:A(z,N,""+q,tt);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case y:return q.key===yt?B(z,N,q,tt):null;case v:return q.key===yt?G(z,N,q,tt):null;case J:return yt=q._init,q=yt(q._payload),Y(z,N,q,tt)}if(j(q)||lt(q))return yt!==null?null:Z(z,N,q,tt,null);if(typeof q.then=="function")return Y(z,N,$c(q),tt);if(q.$$typeof===E)return Y(z,N,kc(z,q),tt);zc(z,q)}return null}function V(z,N,q,tt,yt){if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return z=z.get(q)||null,A(N,z,""+tt,yt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return z=z.get(tt.key===null?q:tt.key)||null,B(N,z,tt,yt);case v:return z=z.get(tt.key===null?q:tt.key)||null,G(N,z,tt,yt);case J:var Ft=tt._init;return tt=Ft(tt._payload),V(z,N,q,tt,yt)}if(j(tt)||lt(tt))return z=z.get(q)||null,Z(N,z,tt,yt,null);if(typeof tt.then=="function")return V(z,N,q,$c(tt),yt);if(tt.$$typeof===E)return V(z,N,q,kc(N,tt),yt);zc(N,tt)}return null}function Ot(z,N,q,tt){for(var yt=null,Ft=null,wt=N,Mt=N=0,Ie=null;wt!==null&&Mt<q.length;Mt++){wt.index>Mt?(Ie=wt,wt=null):Ie=wt.sibling;var Yt=Y(z,wt,q[Mt],tt);if(Yt===null){wt===null&&(wt=Ie);break}i&&wt&&Yt.alternate===null&&r(z,wt),N=b(Yt,N,Mt),Ft===null?yt=Yt:Ft.sibling=Yt,Ft=Yt,wt=Ie}if(Mt===q.length)return l(z,wt),Wt&&na(z,Mt),yt;if(wt===null){for(;Mt<q.length;Mt++)wt=it(z,q[Mt],tt),wt!==null&&(N=b(wt,N,Mt),Ft===null?yt=wt:Ft.sibling=wt,Ft=wt);return Wt&&na(z,Mt),yt}for(wt=h(wt);Mt<q.length;Mt++)Ie=V(wt,z,Mt,q[Mt],tt),Ie!==null&&(i&&Ie.alternate!==null&&wt.delete(Ie.key===null?Mt:Ie.key),N=b(Ie,N,Mt),Ft===null?yt=Ie:Ft.sibling=Ie,Ft=Ie);return i&&wt.forEach(function(Or){return r(z,Or)}),Wt&&na(z,Mt),yt}function Et(z,N,q,tt){if(q==null)throw Error(a(151));for(var yt=null,Ft=null,wt=N,Mt=N=0,Ie=null,Yt=q.next();wt!==null&&!Yt.done;Mt++,Yt=q.next()){wt.index>Mt?(Ie=wt,wt=null):Ie=wt.sibling;var Or=Y(z,wt,Yt.value,tt);if(Or===null){wt===null&&(wt=Ie);break}i&&wt&&Or.alternate===null&&r(z,wt),N=b(Or,N,Mt),Ft===null?yt=Or:Ft.sibling=Or,Ft=Or,wt=Ie}if(Yt.done)return l(z,wt),Wt&&na(z,Mt),yt;if(wt===null){for(;!Yt.done;Mt++,Yt=q.next())Yt=it(z,Yt.value,tt),Yt!==null&&(N=b(Yt,N,Mt),Ft===null?yt=Yt:Ft.sibling=Yt,Ft=Yt);return Wt&&na(z,Mt),yt}for(wt=h(wt);!Yt.done;Mt++,Yt=q.next())Yt=V(wt,z,Mt,Yt.value,tt),Yt!==null&&(i&&Yt.alternate!==null&&wt.delete(Yt.key===null?Mt:Yt.key),N=b(Yt,N,Mt),Ft===null?yt=Yt:Ft.sibling=Yt,Ft=Yt);return i&&wt.forEach(function(pE){return r(z,pE)}),Wt&&na(z,Mt),yt}function ne(z,N,q,tt){if(typeof q=="object"&&q!==null&&q.type===S&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case y:t:{for(var yt=q.key;N!==null;){if(N.key===yt){if(yt=q.type,yt===S){if(N.tag===7){l(z,N.sibling),tt=p(N,q.props.children),tt.return=z,z=tt;break t}}else if(N.elementType===yt||typeof yt=="object"&&yt!==null&&yt.$$typeof===J&&z0(yt)===N.type){l(z,N.sibling),tt=p(N,q.props),Ol(tt,q),tt.return=z,z=tt;break t}l(z,N);break}else r(z,N);N=N.sibling}q.type===S?(tt=ea(q.props.children,z.mode,tt,q.key),tt.return=z,z=tt):(tt=Cc(q.type,q.key,q.props,null,z.mode,tt),Ol(tt,q),tt.return=z,z=tt)}return _(z);case v:t:{for(yt=q.key;N!==null;){if(N.key===yt)if(N.tag===4&&N.stateNode.containerInfo===q.containerInfo&&N.stateNode.implementation===q.implementation){l(z,N.sibling),tt=p(N,q.children||[]),tt.return=z,z=tt;break t}else{l(z,N);break}else r(z,N);N=N.sibling}tt=Pd(q,z.mode,tt),tt.return=z,z=tt}return _(z);case J:return yt=q._init,q=yt(q._payload),ne(z,N,q,tt)}if(j(q))return Ot(z,N,q,tt);if(lt(q)){if(yt=lt(q),typeof yt!="function")throw Error(a(150));return q=yt.call(q),Et(z,N,q,tt)}if(typeof q.then=="function")return ne(z,N,$c(q),tt);if(q.$$typeof===E)return ne(z,N,kc(z,q),tt);zc(z,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,N!==null&&N.tag===6?(l(z,N.sibling),tt=p(N,q),tt.return=z,z=tt):(l(z,N),tt=Od(q,z.mode,tt),tt.return=z,z=tt),_(z)):l(z,N)}return function(z,N,q,tt){try{Bl=0;var yt=ne(z,N,q,tt);return ss=null,yt}catch(wt){if(wt===wl||wt===Ec)throw wt;var Ft=ki(29,wt,null,z.mode);return Ft.lanes=tt,Ft.return=z,Ft}finally{}}}var ls=U0(!0),q0=U0(!1),qi=H(null),gn=null;function vr(i){var r=i.alternate;et(Me,Me.current&1),et(qi,i),gn===null&&(r===null||is.current!==null||r.memoizedState!==null)&&(gn=i)}function H0(i){if(i.tag===22){if(et(Me,Me.current),et(qi,i),gn===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(gn=i)}}else Sr()}function Sr(){et(Me,Me.current),et(qi,qi.current)}function qn(i){ot(qi),gn===i&&(gn=null),ot(Me)}var Me=H(0);function Uc(i){for(var r=i;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||rf(l)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function fg(i,r,l,h){r=i.memoizedState,l=l(h,r),l=l==null?r:f({},r,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var pg={enqueueSetState:function(i,r,l){i=i._reactInternals;var h=Mi(),p=mr(h);p.payload=r,l!=null&&(p.callback=l),r=yr(i,p,h),r!==null&&(Di(r,i,h),kl(r,i,h))},enqueueReplaceState:function(i,r,l){i=i._reactInternals;var h=Mi(),p=mr(h);p.tag=1,p.payload=r,l!=null&&(p.callback=l),r=yr(i,p,h),r!==null&&(Di(r,i,h),kl(r,i,h))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var l=Mi(),h=mr(l);h.tag=2,r!=null&&(h.callback=r),r=yr(i,h,l),r!==null&&(Di(r,i,l),kl(r,i,l))}};function G0(i,r,l,h,p,b,_){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,b,_):r.prototype&&r.prototype.isPureReactComponent?!ml(l,h)||!ml(p,b):!0}function j0(i,r,l,h){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==i&&pg.enqueueReplaceState(r,r.state,null)}function ua(i,r){var l=r;if("ref"in r){l={};for(var h in r)h!=="ref"&&(l[h]=r[h])}if(i=i.defaultProps){l===r&&(l=f({},l));for(var p in i)l[p]===void 0&&(l[p]=i[p])}return l}var qc=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function Y0(i){qc(i)}function W0(i){console.error(i)}function V0(i){qc(i)}function Hc(i,r){try{var l=i.onUncaughtError;l(r.value,{componentStack:r.stack})}catch(h){setTimeout(function(){throw h})}}function X0(i,r,l){try{var h=i.onCaughtError;h(l.value,{componentStack:l.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function mg(i,r,l){return l=mr(l),l.tag=3,l.payload={element:null},l.callback=function(){Hc(i,r)},l}function Q0(i){return i=mr(i),i.tag=3,i}function K0(i,r,l,h){var p=l.type.getDerivedStateFromError;if(typeof p=="function"){var b=h.value;i.payload=function(){return p(b)},i.callback=function(){X0(r,l,h)}}var _=l.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(i.callback=function(){X0(r,l,h),typeof p!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var A=h.stack;this.componentDidCatch(h.value,{componentStack:A!==null?A:""})})}function pA(i,r,l,h,p){if(l.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){if(r=l.alternate,r!==null&&xl(r,l,p,!0),l=qi.current,l!==null){switch(l.tag){case 13:return gn===null?zg():l.alternate===null&&me===0&&(me=3),l.flags&=-257,l.flags|=65536,l.lanes=p,h===jd?l.flags|=16384:(r=l.updateQueue,r===null?l.updateQueue=new Set([h]):r.add(h),qg(i,h,p)),!1;case 22:return l.flags|=65536,h===jd?l.flags|=16384:(r=l.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([h])},l.updateQueue=r):(l=r.retryQueue,l===null?r.retryQueue=new Set([h]):l.add(h)),qg(i,h,p)),!1}throw Error(a(435,l.tag))}return qg(i,h,p),zg(),!1}if(Wt)return r=qi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=p,h!==Fd&&(i=Error(a(422),{cause:h}),Sl(Fi(i,l)))):(h!==Fd&&(r=Error(a(423),{cause:h}),Sl(Fi(r,l))),i=i.current.alternate,i.flags|=65536,p&=-p,i.lanes|=p,h=Fi(h,l),p=mg(i.stateNode,h,p),Vd(i,p),me!==4&&(me=2)),!1;var b=Error(a(520),{cause:h});if(b=Fi(b,l),Ul===null?Ul=[b]:Ul.push(b),me!==4&&(me=2),r===null)return!0;h=Fi(h,l),l=r;do{switch(l.tag){case 3:return l.flags|=65536,i=p&-p,l.lanes|=i,i=mg(l.stateNode,h,i),Vd(l,i),!1;case 1:if(r=l.type,b=l.stateNode,(l.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(kr===null||!kr.has(b))))return l.flags|=65536,p&=-p,l.lanes|=p,p=Q0(p),K0(p,i,l,h),Vd(l,p),!1}l=l.return}while(l!==null);return!1}var Z0=Error(a(461)),Pe=!1;function ze(i,r,l,h){r.child=i===null?q0(r,null,l,h):ls(r,i.child,l,h)}function J0(i,r,l,h,p){l=l.render;var b=r.ref;if("ref"in h){var _={};for(var A in h)A!=="ref"&&(_[A]=h[A])}else _=h;return la(r),h=Jd(i,r,l,_,b,p),A=tg(),i!==null&&!Pe?(eg(i,r,p),Hn(i,r,p)):(Wt&&A&&Nd(r),r.flags|=1,ze(i,r,h,p),r.child)}function tb(i,r,l,h,p){if(i===null){var b=l.type;return typeof b=="function"&&!Bd(b)&&b.defaultProps===void 0&&l.compare===null?(r.tag=15,r.type=b,eb(i,r,b,h,p)):(i=Cc(l.type,null,h,r,r.mode,p),i.ref=r.ref,i.return=r,r.child=i)}if(b=i.child,!wg(i,p)){var _=b.memoizedProps;if(l=l.compare,l=l!==null?l:ml,l(_,h)&&i.ref===r.ref)return Hn(i,r,p)}return r.flags|=1,i=Nn(b,h),i.ref=r.ref,i.return=r,r.child=i}function eb(i,r,l,h,p){if(i!==null){var b=i.memoizedProps;if(ml(b,h)&&i.ref===r.ref)if(Pe=!1,r.pendingProps=h=b,wg(i,p))(i.flags&131072)!==0&&(Pe=!0);else return r.lanes=i.lanes,Hn(i,r,p)}return yg(i,r,l,h,p)}function ib(i,r,l){var h=r.pendingProps,p=h.children,b=i!==null?i.memoizedState:null;if(h.mode==="hidden"){if((r.flags&128)!==0){if(h=b!==null?b.baseLanes|l:l,i!==null){for(p=r.child=i.child,b=0;p!==null;)b=b|p.lanes|p.childLanes,p=p.sibling;r.childLanes=b&~h}else r.childLanes=0,r.child=null;return nb(i,r,h,l)}if((l&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Ac(r,b!==null?b.cachePool:null),b!==null?e0(r,b):Qd(),H0(r);else return r.lanes=r.childLanes=536870912,nb(i,r,b!==null?b.baseLanes|l:l,l)}else b!==null?(Ac(r,b.cachePool),e0(r,b),Sr(),r.memoizedState=null):(i!==null&&Ac(r,null),Qd(),Sr());return ze(i,r,p,l),r.child}function nb(i,r,l,h){var p=Gd();return p=p===null?null:{parent:Re._currentValue,pool:p},r.memoizedState={baseLanes:l,cachePool:p},i!==null&&Ac(r,null),Qd(),H0(r),i!==null&&xl(i,r,h,!0),null}function Gc(i,r){var l=r.ref;if(l===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(a(284));(i===null||i.ref!==l)&&(r.flags|=4194816)}}function yg(i,r,l,h,p){return la(r),l=Jd(i,r,l,h,void 0,p),h=tg(),i!==null&&!Pe?(eg(i,r,p),Hn(i,r,p)):(Wt&&h&&Nd(r),r.flags|=1,ze(i,r,l,p),r.child)}function rb(i,r,l,h,p,b){return la(r),r.updateQueue=null,l=n0(r,h,l,p),i0(i),h=tg(),i!==null&&!Pe?(eg(i,r,b),Hn(i,r,b)):(Wt&&h&&Nd(r),r.flags|=1,ze(i,r,l,b),r.child)}function ab(i,r,l,h,p){if(la(r),r.stateNode===null){var b=Ka,_=l.contextType;typeof _=="object"&&_!==null&&(b=Qe(_)),b=new l(h,b),r.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=pg,r.stateNode=b,b._reactInternals=r,b=r.stateNode,b.props=h,b.state=r.memoizedState,b.refs={},Yd(r),_=l.contextType,b.context=typeof _=="object"&&_!==null?Qe(_):Ka,b.state=r.memoizedState,_=l.getDerivedStateFromProps,typeof _=="function"&&(fg(r,l,_,h),b.state=r.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof b.getSnapshotBeforeUpdate=="function"||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(_=b.state,typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount(),_!==b.state&&pg.enqueueReplaceState(b,b.state,null),El(r,h,b,p),Al(),b.state=r.memoizedState),typeof b.componentDidMount=="function"&&(r.flags|=4194308),h=!0}else if(i===null){b=r.stateNode;var A=r.memoizedProps,B=ua(l,A);b.props=B;var G=b.context,Z=l.contextType;_=Ka,typeof Z=="object"&&Z!==null&&(_=Qe(Z));var it=l.getDerivedStateFromProps;Z=typeof it=="function"||typeof b.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,Z||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(A||G!==_)&&j0(r,b,h,_),pr=!1;var Y=r.memoizedState;b.state=Y,El(r,h,b,p),Al(),G=r.memoizedState,A||Y!==G||pr?(typeof it=="function"&&(fg(r,l,it,h),G=r.memoizedState),(B=pr||G0(r,l,B,h,Y,G,_))?(Z||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=G),b.props=h,b.state=G,b.context=_,h=B):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{b=r.stateNode,Wd(i,r),_=r.memoizedProps,Z=ua(l,_),b.props=Z,it=r.pendingProps,Y=b.context,G=l.contextType,B=Ka,typeof G=="object"&&G!==null&&(B=Qe(G)),A=l.getDerivedStateFromProps,(G=typeof A=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(_!==it||Y!==B)&&j0(r,b,h,B),pr=!1,Y=r.memoizedState,b.state=Y,El(r,h,b,p),Al();var V=r.memoizedState;_!==it||Y!==V||pr||i!==null&&i.dependencies!==null&&Tc(i.dependencies)?(typeof A=="function"&&(fg(r,l,A,h),V=r.memoizedState),(Z=pr||G0(r,l,Z,h,Y,V,B)||i!==null&&i.dependencies!==null&&Tc(i.dependencies))?(G||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(h,V,B),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(h,V,B)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||_===i.memoizedProps&&Y===i.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||_===i.memoizedProps&&Y===i.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=V),b.props=h,b.state=V,b.context=B,h=Z):(typeof b.componentDidUpdate!="function"||_===i.memoizedProps&&Y===i.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||_===i.memoizedProps&&Y===i.memoizedState||(r.flags|=1024),h=!1)}return b=h,Gc(i,r),h=(r.flags&128)!==0,b||h?(b=r.stateNode,l=h&&typeof l.getDerivedStateFromError!="function"?null:b.render(),r.flags|=1,i!==null&&h?(r.child=ls(r,i.child,null,p),r.child=ls(r,null,l,p)):ze(i,r,l,p),r.memoizedState=b.state,i=r.child):i=Hn(i,r,p),i}function sb(i,r,l,h){return vl(),r.flags|=256,ze(i,r,l,h),r.child}var bg={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vg(i){return{baseLanes:i,cachePool:Wy()}}function Sg(i,r,l){return i=i!==null?i.childLanes&~l:0,r&&(i|=Hi),i}function lb(i,r,l){var h=r.pendingProps,p=!1,b=(r.flags&128)!==0,_;if((_=b)||(_=i!==null&&i.memoizedState===null?!1:(Me.current&2)!==0),_&&(p=!0,r.flags&=-129),_=(r.flags&32)!==0,r.flags&=-33,i===null){if(Wt){if(p?vr(r):Sr(),Wt){var A=pe,B;if(B=A){t:{for(B=A,A=dn;B.nodeType!==8;){if(!A){A=null;break t}if(B=en(B.nextSibling),B===null){A=null;break t}}A=B}A!==null?(r.memoizedState={dehydrated:A,treeContext:ia!==null?{id:In,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},B=ki(18,null,null,0),B.stateNode=A,B.return=r,r.child=B,ri=r,pe=null,B=!0):B=!1}B||aa(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return rf(A)?r.lanes=32:r.lanes=536870912,null;qn(r)}return A=h.children,h=h.fallback,p?(Sr(),p=r.mode,A=jc({mode:"hidden",children:A},p),h=ea(h,p,l,null),A.return=r,h.return=r,A.sibling=h,r.child=A,p=r.child,p.memoizedState=vg(l),p.childLanes=Sg(i,_,l),r.memoizedState=bg,h):(vr(r),xg(r,A))}if(B=i.memoizedState,B!==null&&(A=B.dehydrated,A!==null)){if(b)r.flags&256?(vr(r),r.flags&=-257,r=Cg(i,r,l)):r.memoizedState!==null?(Sr(),r.child=i.child,r.flags|=128,r=null):(Sr(),p=h.fallback,A=r.mode,h=jc({mode:"visible",children:h.children},A),p=ea(p,A,l,null),p.flags|=2,h.return=r,p.return=r,h.sibling=p,r.child=h,ls(r,i.child,null,l),h=r.child,h.memoizedState=vg(l),h.childLanes=Sg(i,_,l),r.memoizedState=bg,r=p);else if(vr(r),rf(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var G=_.dgst;_=G,h=Error(a(419)),h.stack="",h.digest=_,Sl({value:h,source:null,stack:null}),r=Cg(i,r,l)}else if(Pe||xl(i,r,l,!1),_=(l&i.childLanes)!==0,Pe||_){if(_=le,_!==null&&(h=l&-l,h=(h&42)!==0?1:cn(h),h=(h&(_.suspendedLanes|l))!==0?0:h,h!==0&&h!==B.retryLane))throw B.retryLane=h,Qa(i,h),Di(_,i,h),Z0;A.data==="$?"||zg(),r=Cg(i,r,l)}else A.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=B.treeContext,pe=en(A.nextSibling),ri=r,Wt=!0,ra=null,dn=!1,i!==null&&(zi[Ui++]=In,zi[Ui++]=Fn,zi[Ui++]=ia,In=i.id,Fn=i.overflow,ia=r),r=xg(r,h.children),r.flags|=4096);return r}return p?(Sr(),p=h.fallback,A=r.mode,B=i.child,G=B.sibling,h=Nn(B,{mode:"hidden",children:h.children}),h.subtreeFlags=B.subtreeFlags&65011712,G!==null?p=Nn(G,p):(p=ea(p,A,l,null),p.flags|=2),p.return=r,h.return=r,h.sibling=p,r.child=h,h=p,p=r.child,A=i.child.memoizedState,A===null?A=vg(l):(B=A.cachePool,B!==null?(G=Re._currentValue,B=B.parent!==G?{parent:G,pool:G}:B):B=Wy(),A={baseLanes:A.baseLanes|l,cachePool:B}),p.memoizedState=A,p.childLanes=Sg(i,_,l),r.memoizedState=bg,h):(vr(r),l=i.child,i=l.sibling,l=Nn(l,{mode:"visible",children:h.children}),l.return=r,l.sibling=null,i!==null&&(_=r.deletions,_===null?(r.deletions=[i],r.flags|=16):_.push(i)),r.child=l,r.memoizedState=null,l)}function xg(i,r){return r=jc({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function jc(i,r){return i=ki(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function Cg(i,r,l){return ls(r,i.child,null,l),i=xg(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function ob(i,r,l){i.lanes|=r;var h=i.alternate;h!==null&&(h.lanes|=r),zd(i.return,r,l)}function _g(i,r,l,h,p){var b=i.memoizedState;b===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(b.isBackwards=r,b.rendering=null,b.renderingStartTime=0,b.last=h,b.tail=l,b.tailMode=p)}function cb(i,r,l){var h=r.pendingProps,p=h.revealOrder,b=h.tail;if(ze(i,r,h.children,l),h=Me.current,(h&2)!==0)h=h&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)t:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&ob(i,l,r);else if(i.tag===19)ob(i,l,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break t;for(;i.sibling===null;){if(i.return===null||i.return===r)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}switch(et(Me,h),p){case"forwards":for(l=r.child,p=null;l!==null;)i=l.alternate,i!==null&&Uc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),_g(r,!1,p,l,b);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(i=p.alternate,i!==null&&Uc(i)===null){r.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}_g(r,!0,l,null,b);break;case"together":_g(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Hn(i,r,l){if(i!==null&&(r.dependencies=i.dependencies),Tr|=r.lanes,(l&r.childLanes)===0)if(i!==null){if(xl(i,r,l,!1),(l&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(a(153));if(r.child!==null){for(i=r.child,l=Nn(i,i.pendingProps),r.child=l,l.return=r;i.sibling!==null;)i=i.sibling,l=l.sibling=Nn(i,i.pendingProps),l.return=r;l.sibling=null}return r.child}function wg(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Tc(i)))}function mA(i,r,l){switch(r.tag){case 3:Bt(r,r.stateNode.containerInfo),fr(r,Re,i.memoizedState.cache),vl();break;case 27:case 5:Zt(r);break;case 4:Bt(r,r.stateNode.containerInfo);break;case 10:fr(r,r.type,r.memoizedProps.value);break;case 13:var h=r.memoizedState;if(h!==null)return h.dehydrated!==null?(vr(r),r.flags|=128,null):(l&r.child.childLanes)!==0?lb(i,r,l):(vr(r),i=Hn(i,r,l),i!==null?i.sibling:null);vr(r);break;case 19:var p=(i.flags&128)!==0;if(h=(l&r.childLanes)!==0,h||(xl(i,r,l,!1),h=(l&r.childLanes)!==0),p){if(h)return cb(i,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),et(Me,Me.current),h)break;return null;case 22:case 23:return r.lanes=0,ib(i,r,l);case 24:fr(r,Re,i.memoizedState.cache)}return Hn(i,r,l)}function ub(i,r,l){if(i!==null)if(i.memoizedProps!==r.pendingProps)Pe=!0;else{if(!wg(i,l)&&(r.flags&128)===0)return Pe=!1,mA(i,r,l);Pe=(i.flags&131072)!==0}else Pe=!1,Wt&&(r.flags&1048576)!==0&&zy(r,wc,r.index);switch(r.lanes=0,r.tag){case 16:t:{i=r.pendingProps;var h=r.elementType,p=h._init;if(h=p(h._payload),r.type=h,typeof h=="function")Bd(h)?(i=ua(h,i),r.tag=1,r=ab(null,r,h,i,l)):(r.tag=0,r=yg(null,r,h,i,l));else{if(h!=null){if(p=h.$$typeof,p===O){r.tag=11,r=J0(null,r,h,i,l);break t}else if(p===P){r.tag=14,r=tb(null,r,h,i,l);break t}}throw r=W(h)||h,Error(a(306,r,""))}}return r;case 0:return yg(i,r,r.type,r.pendingProps,l);case 1:return h=r.type,p=ua(h,r.pendingProps),ab(i,r,h,p,l);case 3:t:{if(Bt(r,r.stateNode.containerInfo),i===null)throw Error(a(387));h=r.pendingProps;var b=r.memoizedState;p=b.element,Wd(i,r),El(r,h,null,l);var _=r.memoizedState;if(h=_.cache,fr(r,Re,h),h!==b.cache&&Ud(r,[Re],l,!0),Al(),h=_.element,b.isDehydrated)if(b={element:h,isDehydrated:!1,cache:_.cache},r.updateQueue.baseState=b,r.memoizedState=b,r.flags&256){r=sb(i,r,h,l);break t}else if(h!==p){p=Fi(Error(a(424)),r),Sl(p),r=sb(i,r,h,l);break t}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(pe=en(i.firstChild),ri=r,Wt=!0,ra=null,dn=!0,l=q0(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(vl(),h===p){r=Hn(i,r,l);break t}ze(i,r,h,l)}r=r.child}return r;case 26:return Gc(i,r),i===null?(l=fv(r.type,null,r.pendingProps,null))?r.memoizedState=l:Wt||(l=r.type,i=r.pendingProps,h=au(ht.current).createElement(l),h[Ae]=r,h[Ve]=i,qe(h,l,i),xe(h),r.stateNode=h):r.memoizedState=fv(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Zt(r),i===null&&Wt&&(h=r.stateNode=hv(r.type,r.pendingProps,ht.current),ri=r,dn=!0,p=pe,Rr(r.type)?(af=p,pe=en(h.firstChild)):pe=p),ze(i,r,r.pendingProps.children,l),Gc(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Wt&&((p=h=pe)&&(h=GA(h,r.type,r.pendingProps,dn),h!==null?(r.stateNode=h,ri=r,pe=en(h.firstChild),dn=!1,p=!0):p=!1),p||aa(r)),Zt(r),p=r.type,b=r.pendingProps,_=i!==null?i.memoizedProps:null,h=b.children,tf(p,b)?h=null:_!==null&&tf(p,_)&&(r.flags|=32),r.memoizedState!==null&&(p=Jd(i,r,oA,null,null,l),Ql._currentValue=p),Gc(i,r),ze(i,r,h,l),r.child;case 6:return i===null&&Wt&&((i=l=pe)&&(l=jA(l,r.pendingProps,dn),l!==null?(r.stateNode=l,ri=r,pe=null,i=!0):i=!1),i||aa(r)),null;case 13:return lb(i,r,l);case 4:return Bt(r,r.stateNode.containerInfo),h=r.pendingProps,i===null?r.child=ls(r,null,h,l):ze(i,r,h,l),r.child;case 11:return J0(i,r,r.type,r.pendingProps,l);case 7:return ze(i,r,r.pendingProps,l),r.child;case 8:return ze(i,r,r.pendingProps.children,l),r.child;case 12:return ze(i,r,r.pendingProps.children,l),r.child;case 10:return h=r.pendingProps,fr(r,r.type,h.value),ze(i,r,h.children,l),r.child;case 9:return p=r.type._context,h=r.pendingProps.children,la(r),p=Qe(p),h=h(p),r.flags|=1,ze(i,r,h,l),r.child;case 14:return tb(i,r,r.type,r.pendingProps,l);case 15:return eb(i,r,r.type,r.pendingProps,l);case 19:return cb(i,r,l);case 31:return h=r.pendingProps,l=r.mode,h={mode:h.mode,children:h.children},i===null?(l=jc(h,l),l.ref=r.ref,r.child=l,l.return=r,r=l):(l=Nn(i.child,h),l.ref=r.ref,r.child=l,l.return=r,r=l),r;case 22:return ib(i,r,l);case 24:return la(r),h=Qe(Re),i===null?(p=Gd(),p===null&&(p=le,b=qd(),p.pooledCache=b,b.refCount++,b!==null&&(p.pooledCacheLanes|=l),p=b),r.memoizedState={parent:h,cache:p},Yd(r),fr(r,Re,p)):((i.lanes&l)!==0&&(Wd(i,r),El(r,null,null,l),Al()),p=i.memoizedState,b=r.memoizedState,p.parent!==h?(p={parent:h,cache:h},r.memoizedState=p,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=p),fr(r,Re,h)):(h=b.cache,fr(r,Re,h),h!==p.cache&&Ud(r,[Re],l,!0))),ze(i,r,r.pendingProps.children,l),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Gn(i){i.flags|=4}function hb(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!vv(r)){if(r=qi.current,r!==null&&((Gt&4194048)===Gt?gn!==null:(Gt&62914560)!==Gt&&(Gt&536870912)===0||r!==gn))throw Tl=jd,Vy;i.flags|=8192}}function Yc(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Kr():536870912,i.lanes|=r,hs|=r)}function Pl(i,r){if(!Wt)switch(i.tailMode){case"hidden":r=i.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function de(i){var r=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(r)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&65011712,h|=p.flags&65011712,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,r}function yA(i,r,l){var h=r.pendingProps;switch(Id(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(r),null;case 1:return de(r),null;case 3:return l=r.stateNode,h=null,i!==null&&(h=i.memoizedState.cache),r.memoizedState.cache!==h&&(r.flags|=2048),zn(Re),Ht(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(i===null||i.child===null)&&(bl(r)?Gn(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Hy())),de(r),null;case 26:return l=r.memoizedState,i===null?(Gn(r),l!==null?(de(r),hb(r,l)):(de(r),r.flags&=-16777217)):l?l!==i.memoizedState?(Gn(r),de(r),hb(r,l)):(de(r),r.flags&=-16777217):(i.memoizedProps!==h&&Gn(r),de(r),r.flags&=-16777217),null;case 27:oe(r),l=ht.current;var p=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==h&&Gn(r);else{if(!h){if(r.stateNode===null)throw Error(a(166));return de(r),null}i=gt.current,bl(r)?Uy(r):(i=hv(p,h,l),r.stateNode=i,Gn(r))}return de(r),null;case 5:if(oe(r),l=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==h&&Gn(r);else{if(!h){if(r.stateNode===null)throw Error(a(166));return de(r),null}if(i=gt.current,bl(r))Uy(r);else{switch(p=au(ht.current),i){case 1:i=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=p.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof h.is=="string"?p.createElement("select",{is:h.is}):p.createElement("select"),h.multiple?i.multiple=!0:h.size&&(i.size=h.size);break;default:i=typeof h.is=="string"?p.createElement(l,{is:h.is}):p.createElement(l)}}i[Ae]=r,i[Ve]=h;t:for(p=r.child;p!==null;){if(p.tag===5||p.tag===6)i.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===r)break t;for(;p.sibling===null;){if(p.return===null||p.return===r)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}r.stateNode=i;t:switch(qe(i,l,h),l){case"button":case"input":case"select":case"textarea":i=!!h.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Gn(r)}}return de(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==h&&Gn(r);else{if(typeof h!="string"&&r.stateNode===null)throw Error(a(166));if(i=ht.current,bl(r)){if(i=r.stateNode,l=r.memoizedProps,h=null,p=ri,p!==null)switch(p.tag){case 27:case 5:h=p.memoizedProps}i[Ae]=r,i=!!(i.nodeValue===l||h!==null&&h.suppressHydrationWarning===!0||rv(i.nodeValue,l)),i||aa(r)}else i=au(i).createTextNode(h),i[Ae]=r,r.stateNode=i}return de(r),null;case 13:if(h=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(p=bl(r),h!==null&&h.dehydrated!==null){if(i===null){if(!p)throw Error(a(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[Ae]=r}else vl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;de(r),p=!1}else p=Hy(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=p),p=!0;if(!p)return r.flags&256?(qn(r),r):(qn(r),null)}if(qn(r),(r.flags&128)!==0)return r.lanes=l,r;if(l=h!==null,i=i!==null&&i.memoizedState!==null,l){h=r.child,p=null,h.alternate!==null&&h.alternate.memoizedState!==null&&h.alternate.memoizedState.cachePool!==null&&(p=h.alternate.memoizedState.cachePool.pool);var b=null;h.memoizedState!==null&&h.memoizedState.cachePool!==null&&(b=h.memoizedState.cachePool.pool),b!==p&&(h.flags|=2048)}return l!==i&&l&&(r.child.flags|=8192),Yc(r,r.updateQueue),de(r),null;case 4:return Ht(),i===null&&Xg(r.stateNode.containerInfo),de(r),null;case 10:return zn(r.type),de(r),null;case 19:if(ot(Me),p=r.memoizedState,p===null)return de(r),null;if(h=(r.flags&128)!==0,b=p.rendering,b===null)if(h)Pl(p,!1);else{if(me!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(b=Uc(i),b!==null){for(r.flags|=128,Pl(p,!1),i=b.updateQueue,r.updateQueue=i,Yc(r,i),r.subtreeFlags=0,i=l,l=r.child;l!==null;)$y(l,i),l=l.sibling;return et(Me,Me.current&1|2),r.child}i=i.sibling}p.tail!==null&&Fe()>Xc&&(r.flags|=128,h=!0,Pl(p,!1),r.lanes=4194304)}else{if(!h)if(i=Uc(b),i!==null){if(r.flags|=128,h=!0,i=i.updateQueue,r.updateQueue=i,Yc(r,i),Pl(p,!0),p.tail===null&&p.tailMode==="hidden"&&!b.alternate&&!Wt)return de(r),null}else 2*Fe()-p.renderingStartTime>Xc&&l!==536870912&&(r.flags|=128,h=!0,Pl(p,!1),r.lanes=4194304);p.isBackwards?(b.sibling=r.child,r.child=b):(i=p.last,i!==null?i.sibling=b:r.child=b,p.last=b)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Fe(),r.sibling=null,i=Me.current,et(Me,h?i&1|2:i&1),r):(de(r),null);case 22:case 23:return qn(r),Kd(),h=r.memoizedState!==null,i!==null?i.memoizedState!==null!==h&&(r.flags|=8192):h&&(r.flags|=8192),h?(l&536870912)!==0&&(r.flags&128)===0&&(de(r),r.subtreeFlags&6&&(r.flags|=8192)):de(r),l=r.updateQueue,l!==null&&Yc(r,l.retryQueue),l=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),h=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),h!==l&&(r.flags|=2048),i!==null&&ot(oa),null;case 24:return l=null,i!==null&&(l=i.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),zn(Re),de(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function bA(i,r){switch(Id(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return zn(Re),Ht(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return oe(r),null;case 13:if(qn(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(a(340));vl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ot(Me),null;case 4:return Ht(),null;case 10:return zn(r.type),null;case 22:case 23:return qn(r),Kd(),i!==null&&ot(oa),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return zn(Re),null;case 25:return null;default:return null}}function db(i,r){switch(Id(r),r.tag){case 3:zn(Re),Ht();break;case 26:case 27:case 5:oe(r);break;case 4:Ht();break;case 13:qn(r);break;case 19:ot(Me);break;case 10:zn(r.type);break;case 22:case 23:qn(r),Kd(),i!==null&&ot(oa);break;case 24:zn(Re)}}function Nl(i,r){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var p=h.next;l=p;do{if((l.tag&i)===i){h=void 0;var b=l.create,_=l.inst;h=b(),_.destroy=h}l=l.next}while(l!==p)}}catch(A){re(r,r.return,A)}}function xr(i,r,l){try{var h=r.updateQueue,p=h!==null?h.lastEffect:null;if(p!==null){var b=p.next;h=b;do{if((h.tag&i)===i){var _=h.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,p=r;var B=l,G=A;try{G()}catch(Z){re(p,B,Z)}}}h=h.next}while(h!==b)}}catch(Z){re(r,r.return,Z)}}function gb(i){var r=i.updateQueue;if(r!==null){var l=i.stateNode;try{t0(r,l)}catch(h){re(i,i.return,h)}}}function fb(i,r,l){l.props=ua(i.type,i.memoizedProps),l.state=i.memoizedState;try{l.componentWillUnmount()}catch(h){re(i,r,h)}}function Il(i,r){try{var l=i.ref;if(l!==null){switch(i.tag){case 26:case 27:case 5:var h=i.stateNode;break;case 30:h=i.stateNode;break;default:h=i.stateNode}typeof l=="function"?i.refCleanup=l(h):l.current=h}}catch(p){re(i,r,p)}}function fn(i,r){var l=i.ref,h=i.refCleanup;if(l!==null)if(typeof h=="function")try{h()}catch(p){re(i,r,p)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(p){re(i,r,p)}else l.current=null}function pb(i){var r=i.type,l=i.memoizedProps,h=i.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":l.autoFocus&&h.focus();break t;case"img":l.src?h.src=l.src:l.srcSet&&(h.srcset=l.srcSet)}}catch(p){re(i,i.return,p)}}function Tg(i,r,l){try{var h=i.stateNode;$A(h,i.type,l,r),h[Ve]=r}catch(p){re(i,i.return,p)}}function mb(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Rr(i.type)||i.tag===4}function kg(i){t:for(;;){for(;i.sibling===null;){if(i.return===null||mb(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Rr(i.type)||i.flags&2||i.child===null||i.tag===4)continue t;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ag(i,r,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,r?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(i,r):(r=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,r.appendChild(i),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=ru));else if(h!==4&&(h===27&&Rr(i.type)&&(l=i.stateNode,r=null),i=i.child,i!==null))for(Ag(i,r,l),i=i.sibling;i!==null;)Ag(i,r,l),i=i.sibling}function Wc(i,r,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,r?l.insertBefore(i,r):l.appendChild(i);else if(h!==4&&(h===27&&Rr(i.type)&&(l=i.stateNode),i=i.child,i!==null))for(Wc(i,r,l),i=i.sibling;i!==null;)Wc(i,r,l),i=i.sibling}function yb(i){var r=i.stateNode,l=i.memoizedProps;try{for(var h=i.type,p=r.attributes;p.length;)r.removeAttributeNode(p[0]);qe(r,h,l),r[Ae]=i,r[Ve]=l}catch(b){re(i,i.return,b)}}var jn=!1,ve=!1,Eg=!1,bb=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function vA(i,r){if(i=i.containerInfo,Zg=hu,i=Ry(i),kd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else t:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,b=h.focusNode;h=h.focusOffset;try{l.nodeType,b.nodeType}catch{l=null;break t}var _=0,A=-1,B=-1,G=0,Z=0,it=i,Y=null;e:for(;;){for(var V;it!==l||p!==0&&it.nodeType!==3||(A=_+p),it!==b||h!==0&&it.nodeType!==3||(B=_+h),it.nodeType===3&&(_+=it.nodeValue.length),(V=it.firstChild)!==null;)Y=it,it=V;for(;;){if(it===i)break e;if(Y===l&&++G===p&&(A=_),Y===b&&++Z===h&&(B=_),(V=it.nextSibling)!==null)break;it=Y,Y=it.parentNode}it=V}l=A===-1||B===-1?null:{start:A,end:B}}else l=null}l=l||{start:0,end:0}}else l=null;for(Jg={focusedElem:i,selectionRange:l},hu=!1,Ne=r;Ne!==null;)if(r=Ne,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,Ne=i;else for(;Ne!==null;){switch(r=Ne,b=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&b!==null){i=void 0,l=r,p=b.memoizedProps,b=b.memoizedState,h=l.stateNode;try{var Ot=ua(l.type,p,l.elementType===l.type);i=h.getSnapshotBeforeUpdate(Ot,b),h.__reactInternalSnapshotBeforeUpdate=i}catch(Et){re(l,l.return,Et)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,l=i.nodeType,l===9)nf(i);else if(l===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":nf(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(a(163))}if(i=r.sibling,i!==null){i.return=r.return,Ne=i;break}Ne=r.return}}function vb(i,r,l){var h=l.flags;switch(l.tag){case 0:case 11:case 15:Cr(i,l),h&4&&Nl(5,l);break;case 1:if(Cr(i,l),h&4)if(i=l.stateNode,r===null)try{i.componentDidMount()}catch(_){re(l,l.return,_)}else{var p=ua(l.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(p,r,i.__reactInternalSnapshotBeforeUpdate)}catch(_){re(l,l.return,_)}}h&64&&gb(l),h&512&&Il(l,l.return);break;case 3:if(Cr(i,l),h&64&&(i=l.updateQueue,i!==null)){if(r=null,l.child!==null)switch(l.child.tag){case 27:case 5:r=l.child.stateNode;break;case 1:r=l.child.stateNode}try{t0(i,r)}catch(_){re(l,l.return,_)}}break;case 27:r===null&&h&4&&yb(l);case 26:case 5:Cr(i,l),r===null&&h&4&&pb(l),h&512&&Il(l,l.return);break;case 12:Cr(i,l);break;case 13:Cr(i,l),h&4&&Cb(i,l),h&64&&(i=l.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(l=EA.bind(null,l),YA(i,l))));break;case 22:if(h=l.memoizedState!==null||jn,!h){r=r!==null&&r.memoizedState!==null||ve,p=jn;var b=ve;jn=h,(ve=r)&&!b?_r(i,l,(l.subtreeFlags&8772)!==0):Cr(i,l),jn=p,ve=b}break;case 30:break;default:Cr(i,l)}}function Sb(i){var r=i.alternate;r!==null&&(i.alternate=null,Sb(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&_i(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var ue=null,yi=!1;function Yn(i,r,l){for(l=l.child;l!==null;)xb(i,r,l),l=l.sibling}function xb(i,r,l){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Pi,l)}catch{}switch(l.tag){case 26:ve||fn(l,r),Yn(i,r,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:ve||fn(l,r);var h=ue,p=yi;Rr(l.type)&&(ue=l.stateNode,yi=!1),Yn(i,r,l),Yl(l.stateNode),ue=h,yi=p;break;case 5:ve||fn(l,r);case 6:if(h=ue,p=yi,ue=null,Yn(i,r,l),ue=h,yi=p,ue!==null)if(yi)try{(ue.nodeType===9?ue.body:ue.nodeName==="HTML"?ue.ownerDocument.body:ue).removeChild(l.stateNode)}catch(b){re(l,r,b)}else try{ue.removeChild(l.stateNode)}catch(b){re(l,r,b)}break;case 18:ue!==null&&(yi?(i=ue,cv(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,l.stateNode),to(i)):cv(ue,l.stateNode));break;case 4:h=ue,p=yi,ue=l.stateNode.containerInfo,yi=!0,Yn(i,r,l),ue=h,yi=p;break;case 0:case 11:case 14:case 15:ve||xr(2,l,r),ve||xr(4,l,r),Yn(i,r,l);break;case 1:ve||(fn(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"&&fb(l,r,h)),Yn(i,r,l);break;case 21:Yn(i,r,l);break;case 22:ve=(h=ve)||l.memoizedState!==null,Yn(i,r,l),ve=h;break;default:Yn(i,r,l)}}function Cb(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{to(i)}catch(l){re(r,r.return,l)}}function SA(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new bb),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new bb),r;default:throw Error(a(435,i.tag))}}function Rg(i,r){var l=SA(i);r.forEach(function(h){var p=RA.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}function Ai(i,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h],b=i,_=r,A=_;t:for(;A!==null;){switch(A.tag){case 27:if(Rr(A.type)){ue=A.stateNode,yi=!1;break t}break;case 5:ue=A.stateNode,yi=!1;break t;case 3:case 4:ue=A.stateNode.containerInfo,yi=!0;break t}A=A.return}if(ue===null)throw Error(a(160));xb(b,_,p),ue=null,yi=!1,b=p.alternate,b!==null&&(b.return=null),p.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)_b(r,i),r=r.sibling}var tn=null;function _b(i,r){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Ai(r,i),Ei(i),h&4&&(xr(3,i,i.return),Nl(3,i),xr(5,i,i.return));break;case 1:Ai(r,i),Ei(i),h&512&&(ve||l===null||fn(l,l.return)),h&64&&jn&&(i=i.updateQueue,i!==null&&(h=i.callbacks,h!==null&&(l=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=l===null?h:l.concat(h))));break;case 26:var p=tn;if(Ai(r,i),Ei(i),h&512&&(ve||l===null||fn(l,l.return)),h&4){var b=l!==null?l.memoizedState:null;if(h=i.memoizedState,l===null)if(h===null)if(i.stateNode===null){t:{h=i.type,l=i.memoizedProps,p=p.ownerDocument||p;e:switch(h){case"title":b=p.getElementsByTagName("title")[0],(!b||b[hr]||b[Ae]||b.namespaceURI==="http://www.w3.org/2000/svg"||b.hasAttribute("itemprop"))&&(b=p.createElement(h),p.head.insertBefore(b,p.querySelector("head > title"))),qe(b,h,l),b[Ae]=i,xe(b),h=b;break t;case"link":var _=yv("link","href",p).get(h+(l.href||""));if(_){for(var A=0;A<_.length;A++)if(b=_[A],b.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&b.getAttribute("rel")===(l.rel==null?null:l.rel)&&b.getAttribute("title")===(l.title==null?null:l.title)&&b.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){_.splice(A,1);break e}}b=p.createElement(h),qe(b,h,l),p.head.appendChild(b);break;case"meta":if(_=yv("meta","content",p).get(h+(l.content||""))){for(A=0;A<_.length;A++)if(b=_[A],b.getAttribute("content")===(l.content==null?null:""+l.content)&&b.getAttribute("name")===(l.name==null?null:l.name)&&b.getAttribute("property")===(l.property==null?null:l.property)&&b.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&b.getAttribute("charset")===(l.charSet==null?null:l.charSet)){_.splice(A,1);break e}}b=p.createElement(h),qe(b,h,l),p.head.appendChild(b);break;default:throw Error(a(468,h))}b[Ae]=i,xe(b),h=b}i.stateNode=h}else bv(p,i.type,i.stateNode);else i.stateNode=mv(p,h,i.memoizedProps);else b!==h?(b===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):b.count--,h===null?bv(p,i.type,i.stateNode):mv(p,h,i.memoizedProps)):h===null&&i.stateNode!==null&&Tg(i,i.memoizedProps,l.memoizedProps)}break;case 27:Ai(r,i),Ei(i),h&512&&(ve||l===null||fn(l,l.return)),l!==null&&h&4&&Tg(i,i.memoizedProps,l.memoizedProps);break;case 5:if(Ai(r,i),Ei(i),h&512&&(ve||l===null||fn(l,l.return)),i.flags&32){p=i.stateNode;try{Ha(p,"")}catch(V){re(i,i.return,V)}}h&4&&i.stateNode!=null&&(p=i.memoizedProps,Tg(i,p,l!==null?l.memoizedProps:p)),h&1024&&(Eg=!0);break;case 6:if(Ai(r,i),Ei(i),h&4){if(i.stateNode===null)throw Error(a(162));h=i.memoizedProps,l=i.stateNode;try{l.nodeValue=h}catch(V){re(i,i.return,V)}}break;case 3:if(ou=null,p=tn,tn=su(r.containerInfo),Ai(r,i),tn=p,Ei(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{to(r.containerInfo)}catch(V){re(i,i.return,V)}Eg&&(Eg=!1,wb(i));break;case 4:h=tn,tn=su(i.stateNode.containerInfo),Ai(r,i),Ei(i),tn=h;break;case 12:Ai(r,i),Ei(i);break;case 13:Ai(r,i),Ei(i),i.child.flags&8192&&i.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Pg=Fe()),h&4&&(h=i.updateQueue,h!==null&&(i.updateQueue=null,Rg(i,h)));break;case 22:p=i.memoizedState!==null;var B=l!==null&&l.memoizedState!==null,G=jn,Z=ve;if(jn=G||p,ve=Z||B,Ai(r,i),ve=Z,jn=G,Ei(i),h&8192)t:for(r=i.stateNode,r._visibility=p?r._visibility&-2:r._visibility|1,p&&(l===null||B||jn||ve||ha(i)),l=null,r=i;;){if(r.tag===5||r.tag===26){if(l===null){B=l=r;try{if(b=B.stateNode,p)_=b.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=B.stateNode;var it=B.memoizedProps.style,Y=it!=null&&it.hasOwnProperty("display")?it.display:null;A.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(V){re(B,B.return,V)}}}else if(r.tag===6){if(l===null){B=r;try{B.stateNode.nodeValue=p?"":B.memoizedProps}catch(V){re(B,B.return,V)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break t;for(;r.sibling===null;){if(r.return===null||r.return===i)break t;l===r&&(l=null),r=r.return}l===r&&(l=null),r.sibling.return=r.return,r=r.sibling}h&4&&(h=i.updateQueue,h!==null&&(l=h.retryQueue,l!==null&&(h.retryQueue=null,Rg(i,l))));break;case 19:Ai(r,i),Ei(i),h&4&&(h=i.updateQueue,h!==null&&(i.updateQueue=null,Rg(i,h)));break;case 30:break;case 21:break;default:Ai(r,i),Ei(i)}}function Ei(i){var r=i.flags;if(r&2){try{for(var l,h=i.return;h!==null;){if(mb(h)){l=h;break}h=h.return}if(l==null)throw Error(a(160));switch(l.tag){case 27:var p=l.stateNode,b=kg(i);Wc(i,b,p);break;case 5:var _=l.stateNode;l.flags&32&&(Ha(_,""),l.flags&=-33);var A=kg(i);Wc(i,A,_);break;case 3:case 4:var B=l.stateNode.containerInfo,G=kg(i);Ag(i,G,B);break;default:throw Error(a(161))}}catch(Z){re(i,i.return,Z)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function wb(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;wb(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Cr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)vb(i,r.alternate,r),r=r.sibling}function ha(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:xr(4,r,r.return),ha(r);break;case 1:fn(r,r.return);var l=r.stateNode;typeof l.componentWillUnmount=="function"&&fb(r,r.return,l),ha(r);break;case 27:Yl(r.stateNode);case 26:case 5:fn(r,r.return),ha(r);break;case 22:r.memoizedState===null&&ha(r);break;case 30:ha(r);break;default:ha(r)}i=i.sibling}}function _r(i,r,l){for(l=l&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var h=r.alternate,p=i,b=r,_=b.flags;switch(b.tag){case 0:case 11:case 15:_r(p,b,l),Nl(4,b);break;case 1:if(_r(p,b,l),h=b,p=h.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(G){re(h,h.return,G)}if(h=b,p=h.updateQueue,p!==null){var A=h.stateNode;try{var B=p.shared.hiddenCallbacks;if(B!==null)for(p.shared.hiddenCallbacks=null,p=0;p<B.length;p++)Jy(B[p],A)}catch(G){re(h,h.return,G)}}l&&_&64&&gb(b),Il(b,b.return);break;case 27:yb(b);case 26:case 5:_r(p,b,l),l&&h===null&&_&4&&pb(b),Il(b,b.return);break;case 12:_r(p,b,l);break;case 13:_r(p,b,l),l&&_&4&&Cb(p,b);break;case 22:b.memoizedState===null&&_r(p,b,l),Il(b,b.return);break;case 30:break;default:_r(p,b,l)}r=r.sibling}}function Mg(i,r){var l=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==l&&(i!=null&&i.refCount++,l!=null&&Cl(l))}function Dg(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Cl(i))}function pn(i,r,l,h){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Tb(i,r,l,h),r=r.sibling}function Tb(i,r,l,h){var p=r.flags;switch(r.tag){case 0:case 11:case 15:pn(i,r,l,h),p&2048&&Nl(9,r);break;case 1:pn(i,r,l,h);break;case 3:pn(i,r,l,h),p&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Cl(i)));break;case 12:if(p&2048){pn(i,r,l,h),i=r.stateNode;try{var b=r.memoizedProps,_=b.id,A=b.onPostCommit;typeof A=="function"&&A(_,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(B){re(r,r.return,B)}}else pn(i,r,l,h);break;case 13:pn(i,r,l,h);break;case 23:break;case 22:b=r.stateNode,_=r.alternate,r.memoizedState!==null?b._visibility&2?pn(i,r,l,h):Fl(i,r):b._visibility&2?pn(i,r,l,h):(b._visibility|=2,os(i,r,l,h,(r.subtreeFlags&10256)!==0)),p&2048&&Mg(_,r);break;case 24:pn(i,r,l,h),p&2048&&Dg(r.alternate,r);break;default:pn(i,r,l,h)}}function os(i,r,l,h,p){for(p=p&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var b=i,_=r,A=l,B=h,G=_.flags;switch(_.tag){case 0:case 11:case 15:os(b,_,A,B,p),Nl(8,_);break;case 23:break;case 22:var Z=_.stateNode;_.memoizedState!==null?Z._visibility&2?os(b,_,A,B,p):Fl(b,_):(Z._visibility|=2,os(b,_,A,B,p)),p&&G&2048&&Mg(_.alternate,_);break;case 24:os(b,_,A,B,p),p&&G&2048&&Dg(_.alternate,_);break;default:os(b,_,A,B,p)}r=r.sibling}}function Fl(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var l=i,h=r,p=h.flags;switch(h.tag){case 22:Fl(l,h),p&2048&&Mg(h.alternate,h);break;case 24:Fl(l,h),p&2048&&Dg(h.alternate,h);break;default:Fl(l,h)}r=r.sibling}}var $l=8192;function cs(i){if(i.subtreeFlags&$l)for(i=i.child;i!==null;)kb(i),i=i.sibling}function kb(i){switch(i.tag){case 26:cs(i),i.flags&$l&&i.memoizedState!==null&&aE(tn,i.memoizedState,i.memoizedProps);break;case 5:cs(i);break;case 3:case 4:var r=tn;tn=su(i.stateNode.containerInfo),cs(i),tn=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=$l,$l=16777216,cs(i),$l=r):cs(i));break;default:cs(i)}}function Ab(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function zl(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var l=0;l<r.length;l++){var h=r[l];Ne=h,Rb(h,i)}Ab(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Eb(i),i=i.sibling}function Eb(i){switch(i.tag){case 0:case 11:case 15:zl(i),i.flags&2048&&xr(9,i,i.return);break;case 3:zl(i);break;case 12:zl(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Vc(i)):zl(i);break;default:zl(i)}}function Vc(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var l=0;l<r.length;l++){var h=r[l];Ne=h,Rb(h,i)}Ab(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:xr(8,r,r.return),Vc(r);break;case 22:l=r.stateNode,l._visibility&2&&(l._visibility&=-3,Vc(r));break;default:Vc(r)}i=i.sibling}}function Rb(i,r){for(;Ne!==null;){var l=Ne;switch(l.tag){case 0:case 11:case 15:xr(8,l,r);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var h=l.memoizedState.cachePool.pool;h!=null&&h.refCount++}break;case 24:Cl(l.memoizedState.cache)}if(h=l.child,h!==null)h.return=l,Ne=h;else t:for(l=i;Ne!==null;){h=Ne;var p=h.sibling,b=h.return;if(Sb(h),h===l){Ne=null;break t}if(p!==null){p.return=b,Ne=p;break t}Ne=b}}}var xA={getCacheForType:function(i){var r=Qe(Re),l=r.data.get(i);return l===void 0&&(l=i(),r.data.set(i,l)),l}},CA=typeof WeakMap=="function"?WeakMap:Map,Jt=0,le=null,$t=null,Gt=0,te=0,Ri=null,wr=!1,us=!1,Lg=!1,Wn=0,me=0,Tr=0,da=0,Bg=0,Hi=0,hs=0,Ul=null,bi=null,Og=!1,Pg=0,Xc=1/0,Qc=null,kr=null,Ue=0,Ar=null,ds=null,gs=0,Ng=0,Ig=null,Mb=null,ql=0,Fg=null;function Mi(){if((Jt&2)!==0&&Gt!==0)return Gt&-Gt;if(M.T!==null){var i=ts;return i!==0?i:jg()}return sl()}function Db(){Hi===0&&(Hi=(Gt&536870912)===0||Wt?Qr():536870912);var i=qi.current;return i!==null&&(i.flags|=32),Hi}function Di(i,r,l){(i===le&&(te===2||te===9)||i.cancelPendingCommit!==null)&&(fs(i,0),Er(i,Gt,Hi,!1)),Ki(i,l),((Jt&2)===0||i!==le)&&(i===le&&((Jt&2)===0&&(da|=l),me===4&&Er(i,Gt,Hi,!1)),mn(i))}function Lb(i,r,l){if((Jt&6)!==0)throw Error(a(327));var h=!l&&(r&124)===0&&(r&i.expiredLanes)===0||Mn(i,r),p=h?TA(i,r):Ug(i,r,!0),b=h;do{if(p===0){us&&!h&&Er(i,r,0,!1);break}else{if(l=i.current.alternate,b&&!_A(l)){p=Ug(i,r,!1),b=!1;continue}if(p===2){if(b=r,i.errorRecoveryDisabledLanes&b)var _=0;else _=i.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){r=_;t:{var A=i;p=Ul;var B=A.current.memoizedState.isDehydrated;if(B&&(fs(A,_).flags|=256),_=Ug(A,_,!1),_!==2){if(Lg&&!B){A.errorRecoveryDisabledLanes|=b,da|=b,p=4;break t}b=bi,bi=p,b!==null&&(bi===null?bi=b:bi.push.apply(bi,b))}p=_}if(b=!1,p!==2)continue}}if(p===1){fs(i,0),Er(i,r,0,!0);break}t:{switch(h=i,b=p,b){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Er(h,r,Hi,!wr);break t;case 2:bi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(p=Pg+300-Fe(),10<p)){if(Er(h,r,Hi,!wr),ur(h,0,!0)!==0)break t;h.timeoutHandle=lv(Bb.bind(null,h,l,bi,Qc,Og,r,Hi,da,hs,wr,b,2,-0,0),p);break t}Bb(h,l,bi,Qc,Og,r,Hi,da,hs,wr,b,0,-0,0)}}break}while(!0);mn(i)}function Bb(i,r,l,h,p,b,_,A,B,G,Z,it,Y,V){if(i.timeoutHandle=-1,it=r.subtreeFlags,(it&8192||(it&16785408)===16785408)&&(Xl={stylesheets:null,count:0,unsuspend:rE},kb(r),it=sE(),it!==null)){i.cancelPendingCommit=it(zb.bind(null,i,r,b,l,h,p,_,A,B,Z,1,Y,V)),Er(i,b,_,!G);return}zb(i,r,b,l,h,p,_,A,B)}function _A(i){for(var r=i;;){var l=r.tag;if((l===0||l===11||l===15)&&r.flags&16384&&(l=r.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var h=0;h<l.length;h++){var p=l[h],b=p.getSnapshot;p=p.value;try{if(!Ti(b(),p))return!1}catch{return!1}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Er(i,r,l,h){r&=~Bg,r&=~da,i.suspendedLanes|=r,i.pingedLanes&=~r,h&&(i.warmLanes|=r),h=i.expirationTimes;for(var p=r;0<p;){var b=31-We(p),_=1<<b;h[b]=-1,p&=~_}l!==0&&lc(i,l,r)}function Kc(){return(Jt&6)===0?(Hl(0),!1):!0}function $g(){if($t!==null){if(te===0)var i=$t.return;else i=$t,$n=sa=null,ig(i),ss=null,Bl=0,i=$t;for(;i!==null;)db(i.alternate,i),i=i.return;$t=null}}function fs(i,r){var l=i.timeoutHandle;l!==-1&&(i.timeoutHandle=-1,UA(l)),l=i.cancelPendingCommit,l!==null&&(i.cancelPendingCommit=null,l()),$g(),le=i,$t=l=Nn(i.current,null),Gt=r,te=0,Ri=null,wr=!1,us=Mn(i,r),Lg=!1,hs=Hi=Bg=da=Tr=me=0,bi=Ul=null,Og=!1,(r&8)!==0&&(r|=r&32);var h=i.entangledLanes;if(h!==0)for(i=i.entanglements,h&=r;0<h;){var p=31-We(h),b=1<<p;r|=i[p],h&=~b}return Wn=r,vc(),l}function Ob(i,r){It=null,M.H=Fc,r===wl||r===Ec?(r=Ky(),te=3):r===Vy?(r=Ky(),te=4):te=r===Z0?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Ri=r,$t===null&&(me=1,Hc(i,Fi(r,i.current)))}function Pb(){var i=M.H;return M.H=Fc,i===null?Fc:i}function Nb(){var i=M.A;return M.A=xA,i}function zg(){me=4,wr||(Gt&4194048)!==Gt&&qi.current!==null||(us=!0),(Tr&134217727)===0&&(da&134217727)===0||le===null||Er(le,Gt,Hi,!1)}function Ug(i,r,l){var h=Jt;Jt|=2;var p=Pb(),b=Nb();(le!==i||Gt!==r)&&(Qc=null,fs(i,r)),r=!1;var _=me;t:do try{if(te!==0&&$t!==null){var A=$t,B=Ri;switch(te){case 8:$g(),_=6;break t;case 3:case 2:case 9:case 6:qi.current===null&&(r=!0);var G=te;if(te=0,Ri=null,ps(i,A,B,G),l&&us){_=0;break t}break;default:G=te,te=0,Ri=null,ps(i,A,B,G)}}wA(),_=me;break}catch(Z){Ob(i,Z)}while(!0);return r&&i.shellSuspendCounter++,$n=sa=null,Jt=h,M.H=p,M.A=b,$t===null&&(le=null,Gt=0,vc()),_}function wA(){for(;$t!==null;)Ib($t)}function TA(i,r){var l=Jt;Jt|=2;var h=Pb(),p=Nb();le!==i||Gt!==r?(Qc=null,Xc=Fe()+500,fs(i,r)):us=Mn(i,r);t:do try{if(te!==0&&$t!==null){r=$t;var b=Ri;e:switch(te){case 1:te=0,Ri=null,ps(i,r,b,1);break;case 2:case 9:if(Xy(b)){te=0,Ri=null,Fb(r);break}r=function(){te!==2&&te!==9||le!==i||(te=7),mn(i)},b.then(r,r);break t;case 3:te=7;break t;case 4:te=5;break t;case 7:Xy(b)?(te=0,Ri=null,Fb(r)):(te=0,Ri=null,ps(i,r,b,7));break;case 5:var _=null;switch($t.tag){case 26:_=$t.memoizedState;case 5:case 27:var A=$t;if(!_||vv(_)){te=0,Ri=null;var B=A.sibling;if(B!==null)$t=B;else{var G=A.return;G!==null?($t=G,Zc(G)):$t=null}break e}}te=0,Ri=null,ps(i,r,b,5);break;case 6:te=0,Ri=null,ps(i,r,b,6);break;case 8:$g(),me=6;break t;default:throw Error(a(462))}}kA();break}catch(Z){Ob(i,Z)}while(!0);return $n=sa=null,M.H=h,M.A=p,Jt=l,$t!==null?0:(le=null,Gt=0,vc(),me)}function kA(){for(;$t!==null&&!tl();)Ib($t)}function Ib(i){var r=ub(i.alternate,i,Wn);i.memoizedProps=i.pendingProps,r===null?Zc(i):$t=r}function Fb(i){var r=i,l=r.alternate;switch(r.tag){case 15:case 0:r=rb(l,r,r.pendingProps,r.type,void 0,Gt);break;case 11:r=rb(l,r,r.pendingProps,r.type.render,r.ref,Gt);break;case 5:ig(r);default:db(l,r),r=$t=$y(r,Wn),r=ub(l,r,Wn)}i.memoizedProps=i.pendingProps,r===null?Zc(i):$t=r}function ps(i,r,l,h){$n=sa=null,ig(r),ss=null,Bl=0;var p=r.return;try{if(pA(i,p,r,l,Gt)){me=1,Hc(i,Fi(l,i.current)),$t=null;return}}catch(b){if(p!==null)throw $t=p,b;me=1,Hc(i,Fi(l,i.current)),$t=null;return}r.flags&32768?(Wt||h===1?i=!0:us||(Gt&536870912)!==0?i=!1:(wr=i=!0,(h===2||h===9||h===3||h===6)&&(h=qi.current,h!==null&&h.tag===13&&(h.flags|=16384))),$b(r,i)):Zc(r)}function Zc(i){var r=i;do{if((r.flags&32768)!==0){$b(r,wr);return}i=r.return;var l=yA(r.alternate,r,Wn);if(l!==null){$t=l;return}if(r=r.sibling,r!==null){$t=r;return}$t=r=i}while(r!==null);me===0&&(me=5)}function $b(i,r){do{var l=bA(i.alternate,i);if(l!==null){l.flags&=32767,$t=l;return}if(l=i.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!r&&(i=i.sibling,i!==null)){$t=i;return}$t=i=l}while(i!==null);me=6,$t=null}function zb(i,r,l,h,p,b,_,A,B){i.cancelPendingCommit=null;do Jc();while(Ue!==0);if((Jt&6)!==0)throw Error(a(327));if(r!==null){if(r===i.current)throw Error(a(177));if(b=r.lanes|r.childLanes,b|=Dd,od(i,l,b,_,A,B),i===le&&($t=le=null,Gt=0),ds=r,Ar=i,gs=l,Ng=b,Ig=p,Mb=h,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,MA(Vr,function(){return jb(),null})):(i.callbackNode=null,i.callbackPriority=0),h=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||h){h=M.T,M.T=null,p=F.p,F.p=2,_=Jt,Jt|=4;try{vA(i,r,l)}finally{Jt=_,F.p=p,M.T=h}}Ue=1,Ub(),qb(),Hb()}}function Ub(){if(Ue===1){Ue=0;var i=Ar,r=ds,l=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||l){l=M.T,M.T=null;var h=F.p;F.p=2;var p=Jt;Jt|=4;try{_b(r,i);var b=Jg,_=Ry(i.containerInfo),A=b.focusedElem,B=b.selectionRange;if(_!==A&&A&&A.ownerDocument&&Ey(A.ownerDocument.documentElement,A)){if(B!==null&&kd(A)){var G=B.start,Z=B.end;if(Z===void 0&&(Z=G),"selectionStart"in A)A.selectionStart=G,A.selectionEnd=Math.min(Z,A.value.length);else{var it=A.ownerDocument||document,Y=it&&it.defaultView||window;if(Y.getSelection){var V=Y.getSelection(),Ot=A.textContent.length,Et=Math.min(B.start,Ot),ne=B.end===void 0?Et:Math.min(B.end,Ot);!V.extend&&Et>ne&&(_=ne,ne=Et,Et=_);var z=Ay(A,Et),N=Ay(A,ne);if(z&&N&&(V.rangeCount!==1||V.anchorNode!==z.node||V.anchorOffset!==z.offset||V.focusNode!==N.node||V.focusOffset!==N.offset)){var q=it.createRange();q.setStart(z.node,z.offset),V.removeAllRanges(),Et>ne?(V.addRange(q),V.extend(N.node,N.offset)):(q.setEnd(N.node,N.offset),V.addRange(q))}}}}for(it=[],V=A;V=V.parentNode;)V.nodeType===1&&it.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<it.length;A++){var tt=it[A];tt.element.scrollLeft=tt.left,tt.element.scrollTop=tt.top}}hu=!!Zg,Jg=Zg=null}finally{Jt=p,F.p=h,M.T=l}}i.current=r,Ue=2}}function qb(){if(Ue===2){Ue=0;var i=Ar,r=ds,l=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||l){l=M.T,M.T=null;var h=F.p;F.p=2;var p=Jt;Jt|=4;try{vb(i,r.alternate,r)}finally{Jt=p,F.p=h,M.T=l}}Ue=3}}function Hb(){if(Ue===4||Ue===3){Ue=0,el();var i=Ar,r=ds,l=gs,h=Mb;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Ue=5:(Ue=0,ds=Ar=null,Gb(i,i.pendingLanes));var p=i.pendingLanes;if(p===0&&(kr=null),al(l),r=r.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Pi,r,void 0,(r.current.flags&128)===128)}catch{}if(h!==null){r=M.T,p=F.p,F.p=2,M.T=null;try{for(var b=i.onRecoverableError,_=0;_<h.length;_++){var A=h[_];b(A.value,{componentStack:A.stack})}}finally{M.T=r,F.p=p}}(gs&3)!==0&&Jc(),mn(i),p=i.pendingLanes,(l&4194090)!==0&&(p&42)!==0?i===Fg?ql++:(ql=0,Fg=i):ql=0,Hl(0)}}function Gb(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Cl(r)))}function Jc(i){return Ub(),qb(),Hb(),jb()}function jb(){if(Ue!==5)return!1;var i=Ar,r=Ng;Ng=0;var l=al(gs),h=M.T,p=F.p;try{F.p=32>l?32:l,M.T=null,l=Ig,Ig=null;var b=Ar,_=gs;if(Ue=0,ds=Ar=null,gs=0,(Jt&6)!==0)throw Error(a(331));var A=Jt;if(Jt|=4,Eb(b.current),Tb(b,b.current,_,l),Jt=A,Hl(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Pi,b)}catch{}return!0}finally{F.p=p,M.T=h,Gb(i,r)}}function Yb(i,r,l){r=Fi(l,r),r=mg(i.stateNode,r,2),i=yr(i,r,2),i!==null&&(Ki(i,2),mn(i))}function re(i,r,l){if(i.tag===3)Yb(i,i,l);else for(;r!==null;){if(r.tag===3){Yb(r,i,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(kr===null||!kr.has(h))){i=Fi(l,i),l=Q0(2),h=yr(r,l,2),h!==null&&(K0(l,h,r,i),Ki(h,2),mn(h));break}}r=r.return}}function qg(i,r,l){var h=i.pingCache;if(h===null){h=i.pingCache=new CA;var p=new Set;h.set(r,p)}else p=h.get(r),p===void 0&&(p=new Set,h.set(r,p));p.has(l)||(Lg=!0,p.add(l),i=AA.bind(null,i,r,l),r.then(i,i))}function AA(i,r,l){var h=i.pingCache;h!==null&&h.delete(r),i.pingedLanes|=i.suspendedLanes&l,i.warmLanes&=~l,le===i&&(Gt&l)===l&&(me===4||me===3&&(Gt&62914560)===Gt&&300>Fe()-Pg?(Jt&2)===0&&fs(i,0):Bg|=l,hs===Gt&&(hs=0)),mn(i)}function Wb(i,r){r===0&&(r=Kr()),i=Qa(i,r),i!==null&&(Ki(i,r),mn(i))}function EA(i){var r=i.memoizedState,l=0;r!==null&&(l=r.retryLane),Wb(i,l)}function RA(i,r){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;case 22:h=i.stateNode._retryCache;break;default:throw Error(a(314))}h!==null&&h.delete(r),Wb(i,l)}function MA(i,r){return hi(i,r)}var tu=null,ms=null,Hg=!1,eu=!1,Gg=!1,ga=0;function mn(i){i!==ms&&i.next===null&&(ms===null?tu=ms=i:ms=ms.next=i),eu=!0,Hg||(Hg=!0,LA())}function Hl(i,r){if(!Gg&&eu){Gg=!0;do for(var l=!1,h=tu;h!==null;){if(i!==0){var p=h.pendingLanes;if(p===0)var b=0;else{var _=h.suspendedLanes,A=h.pingedLanes;b=(1<<31-We(42|i)+1)-1,b&=p&~(_&~A),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(l=!0,Kb(h,b))}else b=Gt,b=ur(h,h===le?b:0,h.cancelPendingCommit!==null||h.timeoutHandle!==-1),(b&3)===0||Mn(h,b)||(l=!0,Kb(h,b));h=h.next}while(l);Gg=!1}}function DA(){Vb()}function Vb(){eu=Hg=!1;var i=0;ga!==0&&(zA()&&(i=ga),ga=0);for(var r=Fe(),l=null,h=tu;h!==null;){var p=h.next,b=Xb(h,r);b===0?(h.next=null,l===null?tu=p:l.next=p,p===null&&(ms=l)):(l=h,(i!==0||(b&3)!==0)&&(eu=!0)),h=p}Hl(i)}function Xb(i,r){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,b=i.pendingLanes&-62914561;0<b;){var _=31-We(b),A=1<<_,B=p[_];B===-1?((A&l)===0||(A&h)!==0)&&(p[_]=ld(A,r)):B<=r&&(i.expiredLanes|=A),b&=~A}if(r=le,l=Gt,l=ur(i,i===r?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),h=i.callbackNode,l===0||i===r&&(te===2||te===9)||i.cancelPendingCommit!==null)return h!==null&&h!==null&&ni(h),i.callbackNode=null,i.callbackPriority=0;if((l&3)===0||Mn(i,l)){if(r=l&-l,r===i.callbackPriority)return r;switch(h!==null&&ni(h),al(l)){case 2:case 8:l=il;break;case 32:l=Vr;break;case 268435456:l=$a;break;default:l=Vr}return h=Qb.bind(null,i),l=hi(l,h),i.callbackPriority=r,i.callbackNode=l,r}return h!==null&&h!==null&&ni(h),i.callbackPriority=2,i.callbackNode=null,2}function Qb(i,r){if(Ue!==0&&Ue!==5)return i.callbackNode=null,i.callbackPriority=0,null;var l=i.callbackNode;if(Jc()&&i.callbackNode!==l)return null;var h=Gt;return h=ur(i,i===le?h:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),h===0?null:(Lb(i,h,r),Xb(i,Fe()),i.callbackNode!=null&&i.callbackNode===l?Qb.bind(null,i):null)}function Kb(i,r){if(Jc())return null;Lb(i,r,!0)}function LA(){qA(function(){(Jt&6)!==0?hi(Wr,DA):Vb()})}function jg(){return ga===0&&(ga=Qr()),ga}function Zb(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:dc(""+i)}function Jb(i,r){var l=r.ownerDocument.createElement("input");return l.name=r.name,l.value=r.value,i.id&&l.setAttribute("form",i.id),r.parentNode.insertBefore(l,r),i=new FormData(i),l.parentNode.removeChild(l),i}function BA(i,r,l,h,p){if(r==="submit"&&l&&l.stateNode===p){var b=Zb((p[Ve]||null).action),_=h.submitter;_&&(r=(r=_[Ve]||null)?Zb(r.formAction):_.getAttribute("formAction"),r!==null&&(b=r,_=null));var A=new mc("action","action",null,h,p);i.push({event:A,listeners:[{instance:null,listener:function(){if(h.defaultPrevented){if(ga!==0){var B=_?Jb(p,_):new FormData(p);hg(l,{pending:!0,data:B,method:p.method,action:b},null,B)}}else typeof b=="function"&&(A.preventDefault(),B=_?Jb(p,_):new FormData(p),hg(l,{pending:!0,data:B,method:p.method,action:b},b,B))},currentTarget:p}]})}}for(var Yg=0;Yg<Md.length;Yg++){var Wg=Md[Yg],OA=Wg.toLowerCase(),PA=Wg[0].toUpperCase()+Wg.slice(1);Ji(OA,"on"+PA)}Ji(Ly,"onAnimationEnd"),Ji(By,"onAnimationIteration"),Ji(Oy,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(Zk,"onTransitionRun"),Ji(Jk,"onTransitionStart"),Ji(tA,"onTransitionCancel"),Ji(Py,"onTransitionEnd"),mt("onMouseEnter",["mouseout","mouseover"]),mt("onMouseLeave",["mouseout","mouseover"]),mt("onPointerEnter",["pointerout","pointerover"]),mt("onPointerLeave",["pointerout","pointerover"]),ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl));function tv(i,r){r=(r&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;t:{var b=void 0;if(r)for(var _=h.length-1;0<=_;_--){var A=h[_],B=A.instance,G=A.currentTarget;if(A=A.listener,B!==b&&p.isPropagationStopped())break t;b=A,p.currentTarget=G;try{b(p)}catch(Z){qc(Z)}p.currentTarget=null,b=B}else for(_=0;_<h.length;_++){if(A=h[_],B=A.instance,G=A.currentTarget,A=A.listener,B!==b&&p.isPropagationStopped())break t;b=A,p.currentTarget=G;try{b(p)}catch(Z){qc(Z)}p.currentTarget=null,b=B}}}}function zt(i,r){var l=r[un];l===void 0&&(l=r[un]=new Set);var h=i+"__bubble";l.has(h)||(ev(r,i,2,!1),l.add(h))}function Vg(i,r,l){var h=0;r&&(h|=4),ev(l,i,h,r)}var iu="_reactListening"+Math.random().toString(36).slice(2);function Xg(i){if(!i[iu]){i[iu]=!0,_t.forEach(function(l){l!=="selectionchange"&&(NA.has(l)||Vg(l,!1,i),Vg(l,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[iu]||(r[iu]=!0,Vg("selectionchange",!1,r))}}function ev(i,r,l,h){switch(Tv(r)){case 2:var p=cE;break;case 8:p=uE;break;default:p=uf}l=p.bind(null,r,l,i),p=void 0,!yd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(r,l,{capture:!0,passive:p}):i.addEventListener(r,l,!0):p!==void 0?i.addEventListener(r,l,{passive:p}):i.addEventListener(r,l,!1)}function Qg(i,r,l,h,p){var b=h;if((r&1)===0&&(r&2)===0&&h!==null)t:for(;;){if(h===null)return;var _=h.tag;if(_===3||_===4){var A=h.stateNode.containerInfo;if(A===p)break;if(_===4)for(_=h.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===p)return;_=_.return}for(;A!==null;){if(_=Dn(A),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){h=b=_;continue t}A=A.parentNode}}h=h.return}oy(function(){var G=b,Z=pd(l),it=[];t:{var Y=Ny.get(i);if(Y!==void 0){var V=mc,Ot=i;switch(i){case"keypress":if(fc(l)===0)break t;case"keydown":case"keyup":V=Mk;break;case"focusin":Ot="focus",V=xd;break;case"focusout":Ot="blur",V=xd;break;case"beforeblur":case"afterblur":V=xd;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=hy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=bk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Bk;break;case Ly:case By:case Oy:V=xk;break;case Py:V=Pk;break;case"scroll":case"scrollend":V=mk;break;case"wheel":V=Ik;break;case"copy":case"cut":case"paste":V=_k;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=gy;break;case"toggle":case"beforetoggle":V=$k}var Et=(r&4)!==0,ne=!Et&&(i==="scroll"||i==="scrollend"),z=Et?Y!==null?Y+"Capture":null:Y;Et=[];for(var N=G,q;N!==null;){var tt=N;if(q=tt.stateNode,tt=tt.tag,tt!==5&&tt!==26&&tt!==27||q===null||z===null||(tt=cl(N,z),tt!=null&&Et.push(jl(N,tt,q))),ne)break;N=N.return}0<Et.length&&(Y=new V(Y,Ot,null,l,Z),it.push({event:Y,listeners:Et}))}}if((r&7)===0){t:{if(Y=i==="mouseover"||i==="pointerover",V=i==="mouseout"||i==="pointerout",Y&&l!==fd&&(Ot=l.relatedTarget||l.fromElement)&&(Dn(Ot)||Ot[$e]))break t;if((V||Y)&&(Y=Z.window===Z?Z:(Y=Z.ownerDocument)?Y.defaultView||Y.parentWindow:window,V?(Ot=l.relatedTarget||l.toElement,V=G,Ot=Ot?Dn(Ot):null,Ot!==null&&(ne=o(Ot),Et=Ot.tag,Ot!==ne||Et!==5&&Et!==27&&Et!==6)&&(Ot=null)):(V=null,Ot=G),V!==Ot)){if(Et=hy,tt="onMouseLeave",z="onMouseEnter",N="mouse",(i==="pointerout"||i==="pointerover")&&(Et=gy,tt="onPointerLeave",z="onPointerEnter",N="pointer"),ne=V==null?Y:dr(V),q=Ot==null?Y:dr(Ot),Y=new Et(tt,N+"leave",V,l,Z),Y.target=ne,Y.relatedTarget=q,tt=null,Dn(Z)===G&&(Et=new Et(z,N+"enter",Ot,l,Z),Et.target=q,Et.relatedTarget=ne,tt=Et),ne=tt,V&&Ot)e:{for(Et=V,z=Ot,N=0,q=Et;q;q=ys(q))N++;for(q=0,tt=z;tt;tt=ys(tt))q++;for(;0<N-q;)Et=ys(Et),N--;for(;0<q-N;)z=ys(z),q--;for(;N--;){if(Et===z||z!==null&&Et===z.alternate)break e;Et=ys(Et),z=ys(z)}Et=null}else Et=null;V!==null&&iv(it,Y,V,Et,!1),Ot!==null&&ne!==null&&iv(it,ne,Ot,Et,!0)}}t:{if(Y=G?dr(G):window,V=Y.nodeName&&Y.nodeName.toLowerCase(),V==="select"||V==="input"&&Y.type==="file")var yt=xy;else if(vy(Y))if(Cy)yt=Xk;else{yt=Wk;var Ft=Yk}else V=Y.nodeName,!V||V.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?G&&gd(G.elementType)&&(yt=xy):yt=Vk;if(yt&&(yt=yt(i,G))){Sy(it,yt,l,Z);break t}Ft&&Ft(i,Y,G),i==="focusout"&&G&&Y.type==="number"&&G.memoizedProps.value!=null&&dd(Y,"number",Y.value)}switch(Ft=G?dr(G):window,i){case"focusin":(vy(Ft)||Ft.contentEditable==="true")&&(Wa=Ft,Ad=G,yl=null);break;case"focusout":yl=Ad=Wa=null;break;case"mousedown":Ed=!0;break;case"contextmenu":case"mouseup":case"dragend":Ed=!1,My(it,l,Z);break;case"selectionchange":if(Kk)break;case"keydown":case"keyup":My(it,l,Z)}var wt;if(_d)t:{switch(i){case"compositionstart":var Mt="onCompositionStart";break t;case"compositionend":Mt="onCompositionEnd";break t;case"compositionupdate":Mt="onCompositionUpdate";break t}Mt=void 0}else Ya?yy(i,l)&&(Mt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Mt="onCompositionStart");Mt&&(fy&&l.locale!=="ko"&&(Ya||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Ya&&(wt=cy()):(gr=Z,bd="value"in gr?gr.value:gr.textContent,Ya=!0)),Ft=nu(G,Mt),0<Ft.length&&(Mt=new dy(Mt,i,null,l,Z),it.push({event:Mt,listeners:Ft}),wt?Mt.data=wt:(wt=by(l),wt!==null&&(Mt.data=wt)))),(wt=Uk?qk(i,l):Hk(i,l))&&(Mt=nu(G,"onBeforeInput"),0<Mt.length&&(Ft=new dy("onBeforeInput","beforeinput",null,l,Z),it.push({event:Ft,listeners:Mt}),Ft.data=wt)),BA(it,i,G,l,Z)}tv(it,r)})}function jl(i,r,l){return{instance:i,listener:r,currentTarget:l}}function nu(i,r){for(var l=r+"Capture",h=[];i!==null;){var p=i,b=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||b===null||(p=cl(i,l),p!=null&&h.unshift(jl(i,p,b)),p=cl(i,r),p!=null&&h.push(jl(i,p,b))),i.tag===3)return h;i=i.return}return[]}function ys(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function iv(i,r,l,h,p){for(var b=r._reactName,_=[];l!==null&&l!==h;){var A=l,B=A.alternate,G=A.stateNode;if(A=A.tag,B!==null&&B===h)break;A!==5&&A!==26&&A!==27||G===null||(B=G,p?(G=cl(l,b),G!=null&&_.unshift(jl(l,G,B))):p||(G=cl(l,b),G!=null&&_.push(jl(l,G,B)))),l=l.return}_.length!==0&&i.push({event:r,listeners:_})}var IA=/\r\n?/g,FA=/\u0000|\uFFFD/g;function nv(i){return(typeof i=="string"?i:""+i).replace(IA,`
`).replace(FA,"")}function rv(i,r){return r=nv(r),nv(i)===r}function ru(){}function ie(i,r,l,h,p,b){switch(l){case"children":typeof h=="string"?r==="body"||r==="textarea"&&h===""||Ha(i,h):(typeof h=="number"||typeof h=="bigint")&&r!=="body"&&Ha(i,""+h);break;case"className":hn(i,"class",h);break;case"tabIndex":hn(i,"tabindex",h);break;case"dir":case"role":case"viewBox":case"width":case"height":hn(i,l,h);break;case"style":sy(i,h,b);break;case"data":if(r!=="object"){hn(i,"data",h);break}case"src":case"href":if(h===""&&(r!=="a"||l!=="href")){i.removeAttribute(l);break}if(h==null||typeof h=="function"||typeof h=="symbol"||typeof h=="boolean"){i.removeAttribute(l);break}h=dc(""+h),i.setAttribute(l,h);break;case"action":case"formAction":if(typeof h=="function"){i.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b=="function"&&(l==="formAction"?(r!=="input"&&ie(i,r,"name",p.name,p,null),ie(i,r,"formEncType",p.formEncType,p,null),ie(i,r,"formMethod",p.formMethod,p,null),ie(i,r,"formTarget",p.formTarget,p,null)):(ie(i,r,"encType",p.encType,p,null),ie(i,r,"method",p.method,p,null),ie(i,r,"target",p.target,p,null)));if(h==null||typeof h=="symbol"||typeof h=="boolean"){i.removeAttribute(l);break}h=dc(""+h),i.setAttribute(l,h);break;case"onClick":h!=null&&(i.onclick=ru);break;case"onScroll":h!=null&&zt("scroll",i);break;case"onScrollEnd":h!=null&&zt("scrollend",i);break;case"dangerouslySetInnerHTML":if(h!=null){if(typeof h!="object"||!("__html"in h))throw Error(a(61));if(l=h.__html,l!=null){if(p.children!=null)throw Error(a(60));i.innerHTML=l}}break;case"multiple":i.multiple=h&&typeof h!="function"&&typeof h!="symbol";break;case"muted":i.muted=h&&typeof h!="function"&&typeof h!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(h==null||typeof h=="function"||typeof h=="boolean"||typeof h=="symbol"){i.removeAttribute("xlink:href");break}l=dc(""+h),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":h!=null&&typeof h!="function"&&typeof h!="symbol"?i.setAttribute(l,""+h):i.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":h&&typeof h!="function"&&typeof h!="symbol"?i.setAttribute(l,""):i.removeAttribute(l);break;case"capture":case"download":h===!0?i.setAttribute(l,""):h!==!1&&h!=null&&typeof h!="function"&&typeof h!="symbol"?i.setAttribute(l,h):i.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":h!=null&&typeof h!="function"&&typeof h!="symbol"&&!isNaN(h)&&1<=h?i.setAttribute(l,h):i.removeAttribute(l);break;case"rowSpan":case"start":h==null||typeof h=="function"||typeof h=="symbol"||isNaN(h)?i.removeAttribute(l):i.setAttribute(l,h);break;case"popover":zt("beforetoggle",i),zt("toggle",i),fi(i,"popover",h);break;case"xlinkActuate":wi(i,"http://www.w3.org/1999/xlink","xlink:actuate",h);break;case"xlinkArcrole":wi(i,"http://www.w3.org/1999/xlink","xlink:arcrole",h);break;case"xlinkRole":wi(i,"http://www.w3.org/1999/xlink","xlink:role",h);break;case"xlinkShow":wi(i,"http://www.w3.org/1999/xlink","xlink:show",h);break;case"xlinkTitle":wi(i,"http://www.w3.org/1999/xlink","xlink:title",h);break;case"xlinkType":wi(i,"http://www.w3.org/1999/xlink","xlink:type",h);break;case"xmlBase":wi(i,"http://www.w3.org/XML/1998/namespace","xml:base",h);break;case"xmlLang":wi(i,"http://www.w3.org/XML/1998/namespace","xml:lang",h);break;case"xmlSpace":wi(i,"http://www.w3.org/XML/1998/namespace","xml:space",h);break;case"is":fi(i,"is",h);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=fk.get(l)||l,fi(i,l,h))}}function Kg(i,r,l,h,p,b){switch(l){case"style":sy(i,h,b);break;case"dangerouslySetInnerHTML":if(h!=null){if(typeof h!="object"||!("__html"in h))throw Error(a(61));if(l=h.__html,l!=null){if(p.children!=null)throw Error(a(60));i.innerHTML=l}}break;case"children":typeof h=="string"?Ha(i,h):(typeof h=="number"||typeof h=="bigint")&&Ha(i,""+h);break;case"onScroll":h!=null&&zt("scroll",i);break;case"onScrollEnd":h!=null&&zt("scrollend",i);break;case"onClick":h!=null&&(i.onclick=ru);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!I.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(p=l.endsWith("Capture"),r=l.slice(2,p?l.length-7:void 0),b=i[Ve]||null,b=b!=null?b[l]:null,typeof b=="function"&&i.removeEventListener(r,b,p),typeof h=="function")){typeof b!="function"&&b!==null&&(l in i?i[l]=null:i.hasAttribute(l)&&i.removeAttribute(l)),i.addEventListener(r,h,p);break t}l in i?i[l]=h:h===!0?i.setAttribute(l,""):fi(i,l,h)}}}function qe(i,r,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":zt("error",i),zt("load",i);var h=!1,p=!1,b;for(b in l)if(l.hasOwnProperty(b)){var _=l[b];if(_!=null)switch(b){case"src":h=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:ie(i,r,b,_,l,null)}}p&&ie(i,r,"srcSet",l.srcSet,l,null),h&&ie(i,r,"src",l.src,l,null);return;case"input":zt("invalid",i);var A=b=_=p=null,B=null,G=null;for(h in l)if(l.hasOwnProperty(h)){var Z=l[h];if(Z!=null)switch(h){case"name":p=Z;break;case"type":_=Z;break;case"checked":B=Z;break;case"defaultChecked":G=Z;break;case"value":b=Z;break;case"defaultValue":A=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(a(137,r));break;default:ie(i,r,h,Z,l,null)}}iy(i,b,A,B,G,_,p,!1),uc(i);return;case"select":zt("invalid",i),h=_=b=null;for(p in l)if(l.hasOwnProperty(p)&&(A=l[p],A!=null))switch(p){case"value":b=A;break;case"defaultValue":_=A;break;case"multiple":h=A;default:ie(i,r,p,A,l,null)}r=b,l=_,i.multiple=!!h,r!=null?qa(i,!!h,r,!1):l!=null&&qa(i,!!h,l,!0);return;case"textarea":zt("invalid",i),b=p=h=null;for(_ in l)if(l.hasOwnProperty(_)&&(A=l[_],A!=null))switch(_){case"value":h=A;break;case"defaultValue":p=A;break;case"children":b=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:ie(i,r,_,A,l,null)}ry(i,h,p,b),uc(i);return;case"option":for(B in l)if(l.hasOwnProperty(B)&&(h=l[B],h!=null))switch(B){case"selected":i.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ie(i,r,B,h,l,null)}return;case"dialog":zt("beforetoggle",i),zt("toggle",i),zt("cancel",i),zt("close",i);break;case"iframe":case"object":zt("load",i);break;case"video":case"audio":for(h=0;h<Gl.length;h++)zt(Gl[h],i);break;case"image":zt("error",i),zt("load",i);break;case"details":zt("toggle",i);break;case"embed":case"source":case"link":zt("error",i),zt("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in l)if(l.hasOwnProperty(G)&&(h=l[G],h!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:ie(i,r,G,h,l,null)}return;default:if(gd(r)){for(Z in l)l.hasOwnProperty(Z)&&(h=l[Z],h!==void 0&&Kg(i,r,Z,h,l,void 0));return}}for(A in l)l.hasOwnProperty(A)&&(h=l[A],h!=null&&ie(i,r,A,h,l,null))}function $A(i,r,l,h){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,b=null,_=null,A=null,B=null,G=null,Z=null;for(V in l){var it=l[V];if(l.hasOwnProperty(V)&&it!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":B=it;default:h.hasOwnProperty(V)||ie(i,r,V,null,h,it)}}for(var Y in h){var V=h[Y];if(it=l[Y],h.hasOwnProperty(Y)&&(V!=null||it!=null))switch(Y){case"type":b=V;break;case"name":p=V;break;case"checked":G=V;break;case"defaultChecked":Z=V;break;case"value":_=V;break;case"defaultValue":A=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(a(137,r));break;default:V!==it&&ie(i,r,Y,V,h,it)}}hd(i,_,A,B,G,Z,b,p);return;case"select":V=_=A=Y=null;for(b in l)if(B=l[b],l.hasOwnProperty(b)&&B!=null)switch(b){case"value":break;case"multiple":V=B;default:h.hasOwnProperty(b)||ie(i,r,b,null,h,B)}for(p in h)if(b=h[p],B=l[p],h.hasOwnProperty(p)&&(b!=null||B!=null))switch(p){case"value":Y=b;break;case"defaultValue":A=b;break;case"multiple":_=b;default:b!==B&&ie(i,r,p,b,h,B)}r=A,l=_,h=V,Y!=null?qa(i,!!l,Y,!1):!!h!=!!l&&(r!=null?qa(i,!!l,r,!0):qa(i,!!l,l?[]:"",!1));return;case"textarea":V=Y=null;for(A in l)if(p=l[A],l.hasOwnProperty(A)&&p!=null&&!h.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ie(i,r,A,null,h,p)}for(_ in h)if(p=h[_],b=l[_],h.hasOwnProperty(_)&&(p!=null||b!=null))switch(_){case"value":Y=p;break;case"defaultValue":V=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==b&&ie(i,r,_,p,h,b)}ny(i,Y,V);return;case"option":for(var Ot in l)if(Y=l[Ot],l.hasOwnProperty(Ot)&&Y!=null&&!h.hasOwnProperty(Ot))switch(Ot){case"selected":i.selected=!1;break;default:ie(i,r,Ot,null,h,Y)}for(B in h)if(Y=h[B],V=l[B],h.hasOwnProperty(B)&&Y!==V&&(Y!=null||V!=null))switch(B){case"selected":i.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:ie(i,r,B,Y,h,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Et in l)Y=l[Et],l.hasOwnProperty(Et)&&Y!=null&&!h.hasOwnProperty(Et)&&ie(i,r,Et,null,h,Y);for(G in h)if(Y=h[G],V=l[G],h.hasOwnProperty(G)&&Y!==V&&(Y!=null||V!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,r));break;default:ie(i,r,G,Y,h,V)}return;default:if(gd(r)){for(var ne in l)Y=l[ne],l.hasOwnProperty(ne)&&Y!==void 0&&!h.hasOwnProperty(ne)&&Kg(i,r,ne,void 0,h,Y);for(Z in h)Y=h[Z],V=l[Z],!h.hasOwnProperty(Z)||Y===V||Y===void 0&&V===void 0||Kg(i,r,Z,Y,h,V);return}}for(var z in l)Y=l[z],l.hasOwnProperty(z)&&Y!=null&&!h.hasOwnProperty(z)&&ie(i,r,z,null,h,Y);for(it in h)Y=h[it],V=l[it],!h.hasOwnProperty(it)||Y===V||Y==null&&V==null||ie(i,r,it,Y,h,V)}var Zg=null,Jg=null;function au(i){return i.nodeType===9?i:i.ownerDocument}function av(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sv(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function tf(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ef=null;function zA(){var i=window.event;return i&&i.type==="popstate"?i===ef?!1:(ef=i,!0):(ef=null,!1)}var lv=typeof setTimeout=="function"?setTimeout:void 0,UA=typeof clearTimeout=="function"?clearTimeout:void 0,ov=typeof Promise=="function"?Promise:void 0,qA=typeof queueMicrotask=="function"?queueMicrotask:typeof ov<"u"?function(i){return ov.resolve(null).then(i).catch(HA)}:lv;function HA(i){setTimeout(function(){throw i})}function Rr(i){return i==="head"}function cv(i,r){var l=r,h=0,p=0;do{var b=l.nextSibling;if(i.removeChild(l),b&&b.nodeType===8)if(l=b.data,l==="/$"){if(0<h&&8>h){l=h;var _=i.ownerDocument;if(l&1&&Yl(_.documentElement),l&2&&Yl(_.body),l&4)for(l=_.head,Yl(l),_=l.firstChild;_;){var A=_.nextSibling,B=_.nodeName;_[hr]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&_.rel.toLowerCase()==="stylesheet"||l.removeChild(_),_=A}}if(p===0){i.removeChild(b),to(r);return}p--}else l==="$"||l==="$?"||l==="$!"?p++:h=l.charCodeAt(0)-48;else h=0;l=b}while(l);to(r)}function nf(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var l=r;switch(r=r.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":nf(l),_i(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}i.removeChild(l)}}function GA(i,r,l,h){for(;i.nodeType===1;){var p=l;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!h&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(h){if(!i[hr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(b=i.getAttribute("rel"),b==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(b!==p.rel||i.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||i.getAttribute("title")!==(p.title==null?null:p.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(b=i.getAttribute("src"),(b!==(p.src==null?null:p.src)||i.getAttribute("type")!==(p.type==null?null:p.type)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&b&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var b=p.name==null?null:""+p.name;if(p.type==="hidden"&&i.getAttribute("name")===b)return i}else return i;if(i=en(i.nextSibling),i===null)break}return null}function jA(i,r,l){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!l||(i=en(i.nextSibling),i===null))return null;return i}function rf(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function YA(i,r){var l=i.ownerDocument;if(i.data!=="$?"||l.readyState==="complete")r();else{var h=function(){r(),l.removeEventListener("DOMContentLoaded",h)};l.addEventListener("DOMContentLoaded",h),i._reactRetry=h}}function en(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var af=null;function uv(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return i;r--}else l==="/$"&&r++}i=i.previousSibling}return null}function hv(i,r,l){switch(r=au(l),i){case"html":if(i=r.documentElement,!i)throw Error(a(452));return i;case"head":if(i=r.head,!i)throw Error(a(453));return i;case"body":if(i=r.body,!i)throw Error(a(454));return i;default:throw Error(a(451))}}function Yl(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);_i(i)}var Gi=new Map,dv=new Set;function su(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Vn=F.d;F.d={f:WA,r:VA,D:XA,C:QA,L:KA,m:ZA,X:tE,S:JA,M:eE};function WA(){var i=Vn.f(),r=Kc();return i||r}function VA(i){var r=Ln(i);r!==null&&r.tag===5&&r.type==="form"?L0(r):Vn.r(i)}var bs=typeof document>"u"?null:document;function gv(i,r,l){var h=bs;if(h&&typeof r=="string"&&r){var p=Ii(r);p='link[rel="'+i+'"][href="'+p+'"]',typeof l=="string"&&(p+='[crossorigin="'+l+'"]'),dv.has(p)||(dv.add(p),i={rel:i,crossOrigin:l,href:r},h.querySelector(p)===null&&(r=h.createElement("link"),qe(r,"link",i),xe(r),h.head.appendChild(r)))}}function XA(i){Vn.D(i),gv("dns-prefetch",i,null)}function QA(i,r){Vn.C(i,r),gv("preconnect",i,r)}function KA(i,r,l){Vn.L(i,r,l);var h=bs;if(h&&i&&r){var p='link[rel="preload"][as="'+Ii(r)+'"]';r==="image"&&l&&l.imageSrcSet?(p+='[imagesrcset="'+Ii(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(p+='[imagesizes="'+Ii(l.imageSizes)+'"]')):p+='[href="'+Ii(i)+'"]';var b=p;switch(r){case"style":b=vs(i);break;case"script":b=Ss(i)}Gi.has(b)||(i=f({rel:"preload",href:r==="image"&&l&&l.imageSrcSet?void 0:i,as:r},l),Gi.set(b,i),h.querySelector(p)!==null||r==="style"&&h.querySelector(Wl(b))||r==="script"&&h.querySelector(Vl(b))||(r=h.createElement("link"),qe(r,"link",i),xe(r),h.head.appendChild(r)))}}function ZA(i,r){Vn.m(i,r);var l=bs;if(l&&i){var h=r&&typeof r.as=="string"?r.as:"script",p='link[rel="modulepreload"][as="'+Ii(h)+'"][href="'+Ii(i)+'"]',b=p;switch(h){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=Ss(i)}if(!Gi.has(b)&&(i=f({rel:"modulepreload",href:i},r),Gi.set(b,i),l.querySelector(p)===null)){switch(h){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Vl(b)))return}h=l.createElement("link"),qe(h,"link",i),xe(h),l.head.appendChild(h)}}}function JA(i,r,l){Vn.S(i,r,l);var h=bs;if(h&&i){var p=Bn(h).hoistableStyles,b=vs(i);r=r||"default";var _=p.get(b);if(!_){var A={loading:0,preload:null};if(_=h.querySelector(Wl(b)))A.loading=5;else{i=f({rel:"stylesheet",href:i,"data-precedence":r},l),(l=Gi.get(b))&&sf(i,l);var B=_=h.createElement("link");xe(B),qe(B,"link",i),B._p=new Promise(function(G,Z){B.onload=G,B.onerror=Z}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,lu(_,r,h)}_={type:"stylesheet",instance:_,count:1,state:A},p.set(b,_)}}}function tE(i,r){Vn.X(i,r);var l=bs;if(l&&i){var h=Bn(l).hoistableScripts,p=Ss(i),b=h.get(p);b||(b=l.querySelector(Vl(p)),b||(i=f({src:i,async:!0},r),(r=Gi.get(p))&&lf(i,r),b=l.createElement("script"),xe(b),qe(b,"link",i),l.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},h.set(p,b))}}function eE(i,r){Vn.M(i,r);var l=bs;if(l&&i){var h=Bn(l).hoistableScripts,p=Ss(i),b=h.get(p);b||(b=l.querySelector(Vl(p)),b||(i=f({src:i,async:!0,type:"module"},r),(r=Gi.get(p))&&lf(i,r),b=l.createElement("script"),xe(b),qe(b,"link",i),l.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},h.set(p,b))}}function fv(i,r,l,h){var p=(p=ht.current)?su(p):null;if(!p)throw Error(a(446));switch(i){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(r=vs(l.href),l=Bn(p).hoistableStyles,h=l.get(r),h||(h={type:"style",instance:null,count:0,state:null},l.set(r,h)),h):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){i=vs(l.href);var b=Bn(p).hoistableStyles,_=b.get(i);if(_||(p=p.ownerDocument||p,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},b.set(i,_),(b=p.querySelector(Wl(i)))&&!b._p&&(_.instance=b,_.state.loading=5),Gi.has(i)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Gi.set(i,l),b||iE(p,i,l,_.state))),r&&h===null)throw Error(a(528,""));return _}if(r&&h!==null)throw Error(a(529,""));return null;case"script":return r=l.async,l=l.src,typeof l=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ss(l),l=Bn(p).hoistableScripts,h=l.get(r),h||(h={type:"script",instance:null,count:0,state:null},l.set(r,h)),h):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,i))}}function vs(i){return'href="'+Ii(i)+'"'}function Wl(i){return'link[rel="stylesheet"]['+i+"]"}function pv(i){return f({},i,{"data-precedence":i.precedence,precedence:null})}function iE(i,r,l,h){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?h.loading=1:(r=i.createElement("link"),h.preload=r,r.addEventListener("load",function(){return h.loading|=1}),r.addEventListener("error",function(){return h.loading|=2}),qe(r,"link",l),xe(r),i.head.appendChild(r))}function Ss(i){return'[src="'+Ii(i)+'"]'}function Vl(i){return"script[async]"+i}function mv(i,r,l){if(r.count++,r.instance===null)switch(r.type){case"style":var h=i.querySelector('style[data-href~="'+Ii(l.href)+'"]');if(h)return r.instance=h,xe(h),h;var p=f({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return h=(i.ownerDocument||i).createElement("style"),xe(h),qe(h,"style",p),lu(h,l.precedence,i),r.instance=h;case"stylesheet":p=vs(l.href);var b=i.querySelector(Wl(p));if(b)return r.state.loading|=4,r.instance=b,xe(b),b;h=pv(l),(p=Gi.get(p))&&sf(h,p),b=(i.ownerDocument||i).createElement("link"),xe(b);var _=b;return _._p=new Promise(function(A,B){_.onload=A,_.onerror=B}),qe(b,"link",h),r.state.loading|=4,lu(b,l.precedence,i),r.instance=b;case"script":return b=Ss(l.src),(p=i.querySelector(Vl(b)))?(r.instance=p,xe(p),p):(h=l,(p=Gi.get(b))&&(h=f({},l),lf(h,p)),i=i.ownerDocument||i,p=i.createElement("script"),xe(p),qe(p,"link",h),i.head.appendChild(p),r.instance=p);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(h=r.instance,r.state.loading|=4,lu(h,l.precedence,i));return r.instance}function lu(i,r,l){for(var h=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=h.length?h[h.length-1]:null,b=p,_=0;_<h.length;_++){var A=h[_];if(A.dataset.precedence===r)b=A;else if(b!==p)break}b?b.parentNode.insertBefore(i,b.nextSibling):(r=l.nodeType===9?l.head:l,r.insertBefore(i,r.firstChild))}function sf(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function lf(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var ou=null;function yv(i,r,l){if(ou===null){var h=new Map,p=ou=new Map;p.set(l,h)}else p=ou,h=p.get(l),h||(h=new Map,p.set(l,h));if(h.has(i))return h;for(h.set(i,null),l=l.getElementsByTagName(i),p=0;p<l.length;p++){var b=l[p];if(!(b[hr]||b[Ae]||i==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!=="http://www.w3.org/2000/svg"){var _=b.getAttribute(r)||"";_=i+_;var A=h.get(_);A?A.push(b):h.set(_,[b])}}return h}function bv(i,r,l){i=i.ownerDocument||i,i.head.insertBefore(l,r==="title"?i.querySelector("head > title"):null)}function nE(i,r,l){if(l===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function vv(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Xl=null;function rE(){}function aE(i,r,l){if(Xl===null)throw Error(a(475));var h=Xl;if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var p=vs(l.href),b=i.querySelector(Wl(p));if(b){i=b._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(h.count++,h=cu.bind(h),i.then(h,h)),r.state.loading|=4,r.instance=b,xe(b);return}b=i.ownerDocument||i,l=pv(l),(p=Gi.get(p))&&sf(l,p),b=b.createElement("link"),xe(b);var _=b;_._p=new Promise(function(A,B){_.onload=A,_.onerror=B}),qe(b,"link",l),r.instance=b}h.stylesheets===null&&(h.stylesheets=new Map),h.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(h.count++,r=cu.bind(h),i.addEventListener("load",r),i.addEventListener("error",r))}}function sE(){if(Xl===null)throw Error(a(475));var i=Xl;return i.stylesheets&&i.count===0&&of(i,i.stylesheets),0<i.count?function(r){var l=setTimeout(function(){if(i.stylesheets&&of(i,i.stylesheets),i.unsuspend){var h=i.unsuspend;i.unsuspend=null,h()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(l)}}:null}function cu(){if(this.count--,this.count===0){if(this.stylesheets)of(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var uu=null;function of(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,uu=new Map,r.forEach(lE,i),uu=null,cu.call(i))}function lE(i,r){if(!(r.state.loading&4)){var l=uu.get(i);if(l)var h=l.get(null);else{l=new Map,uu.set(i,l);for(var p=i.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<p.length;b++){var _=p[b];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(l.set(_.dataset.precedence,_),h=_)}h&&l.set(null,h)}p=r.instance,_=p.getAttribute("data-precedence"),b=l.get(_)||h,b===h&&l.set(null,p),l.set(_,p),this.count++,h=cu.bind(this),p.addEventListener("load",h),p.addEventListener("error",h),b?b.parentNode.insertBefore(p,b.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(p,i.firstChild)),r.state.loading|=4}}var Ql={$$typeof:E,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function oE(i,r,l,h,p,b,_,A){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.hiddenUpdates=rl(null),this.identifierPrefix=h,this.onUncaughtError=p,this.onCaughtError=b,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Sv(i,r,l,h,p,b,_,A,B,G,Z,it){return i=new oE(i,r,l,_,A,B,G,it),r=1,b===!0&&(r|=24),b=ki(3,null,null,r),i.current=b,b.stateNode=i,r=qd(),r.refCount++,i.pooledCache=r,r.refCount++,b.memoizedState={element:h,isDehydrated:l,cache:r},Yd(b),i}function xv(i){return i?(i=Ka,i):Ka}function Cv(i,r,l,h,p,b){p=xv(p),h.context===null?h.context=p:h.pendingContext=p,h=mr(r),h.payload={element:l},b=b===void 0?null:b,b!==null&&(h.callback=b),l=yr(i,h,r),l!==null&&(Di(l,i,r),kl(l,i,r))}function _v(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<r?l:r}}function cf(i,r){_v(i,r),(i=i.alternate)&&_v(i,r)}function wv(i){if(i.tag===13){var r=Qa(i,67108864);r!==null&&Di(r,i,67108864),cf(i,67108864)}}var hu=!0;function cE(i,r,l,h){var p=M.T;M.T=null;var b=F.p;try{F.p=2,uf(i,r,l,h)}finally{F.p=b,M.T=p}}function uE(i,r,l,h){var p=M.T;M.T=null;var b=F.p;try{F.p=8,uf(i,r,l,h)}finally{F.p=b,M.T=p}}function uf(i,r,l,h){if(hu){var p=hf(h);if(p===null)Qg(i,r,h,du,l),kv(i,h);else if(dE(p,i,r,l,h))h.stopPropagation();else if(kv(i,h),r&4&&-1<hE.indexOf(i)){for(;p!==null;){var b=Ln(p);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var _=gi(b.pendingLanes);if(_!==0){var A=b;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var B=1<<31-We(_);A.entanglements[1]|=B,_&=~B}mn(b),(Jt&6)===0&&(Xc=Fe()+500,Hl(0))}}break;case 13:A=Qa(b,2),A!==null&&Di(A,b,2),Kc(),cf(b,2)}if(b=hf(h),b===null&&Qg(i,r,h,du,l),b===p)break;p=b}p!==null&&h.stopPropagation()}else Qg(i,r,h,null,l)}}function hf(i){return i=pd(i),df(i)}var du=null;function df(i){if(du=null,i=Dn(i),i!==null){var r=o(i);if(r===null)i=null;else{var l=r.tag;if(l===13){if(i=u(r),i!==null)return i;i=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return du=i,null}function Tv(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fa()){case Wr:return 2;case il:return 8;case Vr:case sd:return 32;case $a:return 268435456;default:return 32}default:return 32}}var gf=!1,Mr=null,Dr=null,Lr=null,Kl=new Map,Zl=new Map,Br=[],hE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kv(i,r){switch(i){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Kl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(r.pointerId)}}function Jl(i,r,l,h,p,b){return i===null||i.nativeEvent!==b?(i={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:b,targetContainers:[p]},r!==null&&(r=Ln(r),r!==null&&wv(r)),i):(i.eventSystemFlags|=h,r=i.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),i)}function dE(i,r,l,h,p){switch(r){case"focusin":return Mr=Jl(Mr,i,r,l,h,p),!0;case"dragenter":return Dr=Jl(Dr,i,r,l,h,p),!0;case"mouseover":return Lr=Jl(Lr,i,r,l,h,p),!0;case"pointerover":var b=p.pointerId;return Kl.set(b,Jl(Kl.get(b)||null,i,r,l,h,p)),!0;case"gotpointercapture":return b=p.pointerId,Zl.set(b,Jl(Zl.get(b)||null,i,r,l,h,p)),!0}return!1}function Av(i){var r=Dn(i.target);if(r!==null){var l=o(r);if(l!==null){if(r=l.tag,r===13){if(r=u(l),r!==null){i.blockedOn=r,ll(i.priority,function(){if(l.tag===13){var h=Mi();h=cn(h);var p=Qa(l,h);p!==null&&Di(p,l,h),cf(l,h)}});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function gu(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var l=hf(i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);fd=h,l.target.dispatchEvent(h),fd=null}else return r=Ln(l),r!==null&&wv(r),i.blockedOn=l,!1;r.shift()}return!0}function Ev(i,r,l){gu(i)&&l.delete(r)}function gE(){gf=!1,Mr!==null&&gu(Mr)&&(Mr=null),Dr!==null&&gu(Dr)&&(Dr=null),Lr!==null&&gu(Lr)&&(Lr=null),Kl.forEach(Ev),Zl.forEach(Ev)}function fu(i,r){i.blockedOn===r&&(i.blockedOn=null,gf||(gf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gE)))}var pu=null;function Rv(i){pu!==i&&(pu=i,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){pu===i&&(pu=null);for(var r=0;r<i.length;r+=3){var l=i[r],h=i[r+1],p=i[r+2];if(typeof h!="function"){if(df(h||l)===null)continue;break}var b=Ln(l);b!==null&&(i.splice(r,3),r-=3,hg(b,{pending:!0,data:p,method:l.method,action:h},h,p))}}))}function to(i){function r(B){return fu(B,i)}Mr!==null&&fu(Mr,i),Dr!==null&&fu(Dr,i),Lr!==null&&fu(Lr,i),Kl.forEach(r),Zl.forEach(r);for(var l=0;l<Br.length;l++){var h=Br[l];h.blockedOn===i&&(h.blockedOn=null)}for(;0<Br.length&&(l=Br[0],l.blockedOn===null);)Av(l),l.blockedOn===null&&Br.shift();if(l=(i.ownerDocument||i).$$reactFormReplay,l!=null)for(h=0;h<l.length;h+=3){var p=l[h],b=l[h+1],_=p[Ve]||null;if(typeof b=="function")_||Rv(l);else if(_){var A=null;if(b&&b.hasAttribute("formAction")){if(p=b,_=b[Ve]||null)A=_.formAction;else if(df(p)!==null)continue}else A=_.action;typeof A=="function"?l[h+1]=A:(l.splice(h,3),h-=3),Rv(l)}}}function ff(i){this._internalRoot=i}mu.prototype.render=ff.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(a(409));var l=r.current,h=Mi();Cv(l,h,i,r,null,null)},mu.prototype.unmount=ff.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;Cv(i.current,2,null,i,null,null),Kc(),r[$e]=null}};function mu(i){this._internalRoot=i}mu.prototype.unstable_scheduleHydration=function(i){if(i){var r=sl();i={blockedOn:null,target:i,priority:r};for(var l=0;l<Br.length&&r!==0&&r<Br[l].priority;l++);Br.splice(l,0,i),l===0&&Av(i)}};var Mv=t.version;if(Mv!=="19.1.0")throw Error(a(527,Mv,"19.1.0"));F.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(a(188)):(i=Object.keys(i).join(","),Error(a(268,i)));return i=g(r),i=i!==null?d(i):null,i=i===null?null:i.stateNode,i};var fE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Pi=yu.inject(fE),Ye=yu}catch{}}return io.createRoot=function(i,r){if(!s(i))throw Error(a(299));var l=!1,h="",p=Y0,b=W0,_=V0,A=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=Sv(i,1,!1,null,null,l,h,p,b,_,A,null),i[$e]=r.current,Xg(i),new ff(r)},io.hydrateRoot=function(i,r,l){if(!s(i))throw Error(a(299));var h=!1,p="",b=Y0,_=W0,A=V0,B=null,G=null;return l!=null&&(l.unstable_strictMode===!0&&(h=!0),l.identifierPrefix!==void 0&&(p=l.identifierPrefix),l.onUncaughtError!==void 0&&(b=l.onUncaughtError),l.onCaughtError!==void 0&&(_=l.onCaughtError),l.onRecoverableError!==void 0&&(A=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(B=l.unstable_transitionCallbacks),l.formState!==void 0&&(G=l.formState)),r=Sv(i,1,!0,r,l??null,h,p,b,_,A,B,G),r.context=xv(null),l=r.current,h=Mi(),h=cn(h),p=mr(h),p.callback=null,yr(l,p,h),l=h,r.current.lanes=l,Ki(r,l),mn(r),i[$e]=r.current,Xg(i),new mu(r)},io.version="19.1.0",io}var zv;function AE(){if(zv)return yf.exports;zv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),yf.exports=kE(),yf.exports}var EE=AE(),no={},Uv;function RE(){if(Uv)return no;Uv=1,Object.defineProperty(no,"__esModule",{value:!0}),no.parse=u,no.serialize=d;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,o=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function u(y,v){const S=new o,C=y.length;if(C<2)return S;const T=(v==null?void 0:v.decode)||f;let w=0;do{const k=y.indexOf("=",w);if(k===-1)break;const E=y.indexOf(";",w),O=E===-1?C:E;if(k>O){w=y.lastIndexOf(";",k-1)+1;continue}const L=c(y,w,k),R=g(y,k,L),P=y.slice(L,R);if(S[P]===void 0){let J=c(y,k+1,O),nt=g(y,O,J);const rt=T(y.slice(J,nt));S[P]=rt}w=O+1}while(w<C);return S}function c(y,v,S){do{const C=y.charCodeAt(v);if(C!==32&&C!==9)return v}while(++v<S);return S}function g(y,v,S){for(;v>S;){const C=y.charCodeAt(--v);if(C!==32&&C!==9)return v+1}return S}function d(y,v,S){const C=(S==null?void 0:S.encode)||encodeURIComponent;if(!e.test(y))throw new TypeError(`argument name is invalid: ${y}`);const T=C(v);if(!t.test(T))throw new TypeError(`argument val is invalid: ${v}`);let w=y+"="+T;if(!S)return w;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);w+="; Max-Age="+S.maxAge}if(S.domain){if(!n.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);w+="; Domain="+S.domain}if(S.path){if(!a.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);w+="; Path="+S.path}if(S.expires){if(!m(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);w+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(w+="; HttpOnly"),S.secure&&(w+="; Secure"),S.partitioned&&(w+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":w+="; Priority=Low";break;case"medium":w+="; Priority=Medium";break;case"high":w+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":w+="; SameSite=Strict";break;case"lax":w+="; SameSite=Lax";break;case"none":w+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return w}function f(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function m(y){return s.call(y)==="[object Date]"}return no}RE();var qv="popstate";function ME(e={}){function t(a,s){let{pathname:o,search:u,hash:c}=a.location;return Gf("",{pathname:o,search:u,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(a,s){return typeof s=="string"?s:Bo(s)}return LE(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Cn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function DE(){return Math.random().toString(36).substring(2,10)}function Hv(e,t){return{usr:e.state,key:e.key,idx:t}}function Gf(e,t,n=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ys(t):t,state:n,key:t&&t.key||a||DE()}}function Bo({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ys(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function LE(e,t,n,a={}){let{window:s=document.defaultView,v5Compat:o=!1}=a,u=s.history,c="POP",g=null,d=f();d==null&&(d=0,u.replaceState({...u.state,idx:d},""));function f(){return(u.state||{idx:null}).idx}function m(){c="POP";let T=f(),w=T==null?null:T-d;d=T,g&&g({action:c,location:C.location,delta:w})}function y(T,w){c="PUSH";let k=Gf(C.location,T,w);d=f()+1;let E=Hv(k,d),O=C.createHref(k);try{u.pushState(E,"",O)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;s.location.assign(O)}o&&g&&g({action:c,location:C.location,delta:1})}function v(T,w){c="REPLACE";let k=Gf(C.location,T,w);d=f();let E=Hv(k,d),O=C.createHref(k);u.replaceState(E,"",O),o&&g&&g({action:c,location:C.location,delta:0})}function S(T){return BE(T)}let C={get action(){return c},get location(){return e(s,u)},listen(T){if(g)throw new Error("A history only accepts one active listener");return s.addEventListener(qv,m),g=T,()=>{s.removeEventListener(qv,m),g=null}},createHref(T){return t(s,T)},createURL:S,encodeLocation(T){let w=S(T);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:y,replace:v,go(T){return u.go(T)}};return C}function BE(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ge(n,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:Bo(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function Rx(e,t,n="/"){return OE(e,t,n,!1)}function OE(e,t,n,a){let s=typeof t=="string"?Ys(t):t,o=ar(s.pathname||"/",n);if(o==null)return null;let u=Mx(e);PE(u);let c=null;for(let g=0;c==null&&g<u.length;++g){let d=YE(o);c=GE(u[g],d,a)}return c}function Mx(e,t=[],n=[],a=""){let s=(o,u,c)=>{let g={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};g.relativePath.startsWith("/")&&(ge(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length));let d=ir([a,g.relativePath]),f=n.concat(g);o.children&&o.children.length>0&&(ge(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Mx(o.children,t,f,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:qE(d,o.index),routesMeta:f})};return e.forEach((o,u)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))s(o,u);else for(let g of Dx(o.path))s(o,u,g)}),t}function Dx(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,s=n.endsWith("?"),o=n.replace(/\?$/,"");if(a.length===0)return s?[o,""]:[o];let u=Dx(a.join("/")),c=[];return c.push(...u.map(g=>g===""?o:[o,g].join("/"))),s&&c.push(...u),c.map(g=>e.startsWith("/")&&g===""?"/":g)}function PE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:HE(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var NE=/^:[\w-]+$/,IE=3,FE=2,$E=1,zE=10,UE=-2,Gv=e=>e==="*";function qE(e,t){let n=e.split("/"),a=n.length;return n.some(Gv)&&(a+=UE),t&&(a+=FE),n.filter(s=>!Gv(s)).reduce((s,o)=>s+(NE.test(o)?IE:o===""?$E:zE),a)}function HE(e,t){return e.length===t.length&&e.slice(0,-1).every((a,s)=>a===t[s])?e[e.length-1]-t[t.length-1]:0}function GE(e,t,n=!1){let{routesMeta:a}=e,s={},o="/",u=[];for(let c=0;c<a.length;++c){let g=a[c],d=c===a.length-1,f=o==="/"?t:t.slice(o.length)||"/",m=Vu({path:g.relativePath,caseSensitive:g.caseSensitive,end:d},f),y=g.route;if(!m&&d&&n&&!a[a.length-1].route.index&&(m=Vu({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},f)),!m)return null;Object.assign(s,m.params),u.push({params:s,pathname:ir([o,m.pathname]),pathnameBase:QE(ir([o,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(o=ir([o,m.pathnameBase]))}return u}function Vu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=jE(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let o=s[0],u=o.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:a.reduce((d,{paramName:f,isOptional:m},y)=>{if(f==="*"){let S=c[y]||"";u=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}const v=c[y];return m&&!v?d[f]=void 0:d[f]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:u,pattern:e}}function jE(e,t=!1,n=!0){Cn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,g)=>(a.push({paramName:c,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),a]}function YE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Cn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ar(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function WE(e,t="/"){let{pathname:n,search:a="",hash:s=""}=typeof e=="string"?Ys(e):e;return{pathname:n?n.startsWith("/")?n:VE(n,t):t,search:KE(a),hash:ZE(s)}}function VE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function xf(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function XE(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lx(e){let t=XE(e);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function Bx(e,t,n,a=!1){let s;typeof e=="string"?s=Ys(e):(s={...e},ge(!s.pathname||!s.pathname.includes("?"),xf("?","pathname","search",s)),ge(!s.pathname||!s.pathname.includes("#"),xf("#","pathname","hash",s)),ge(!s.search||!s.search.includes("#"),xf("#","search","hash",s)));let o=e===""||s.pathname==="",u=o?"/":s.pathname,c;if(u==null)c=n;else{let m=t.length-1;if(!a&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),m-=1;s.pathname=y.join("/")}c=m>=0?t[m]:"/"}let g=WE(s,c),d=u&&u!=="/"&&u.endsWith("/"),f=(o||u===".")&&n.endsWith("/");return!g.pathname.endsWith("/")&&(d||f)&&(g.pathname+="/"),g}var ir=e=>e.join("/").replace(/\/\/+/g,"/"),QE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),KE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ZE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function JE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Ox=["POST","PUT","PATCH","DELETE"];new Set(Ox);var tR=["GET",...Ox];new Set(tR);var Ws=K.createContext(null);Ws.displayName="DataRouter";var Dh=K.createContext(null);Dh.displayName="DataRouterState";var Px=K.createContext({isTransitioning:!1});Px.displayName="ViewTransition";var eR=K.createContext(new Map);eR.displayName="Fetchers";var iR=K.createContext(null);iR.displayName="Await";var Tn=K.createContext(null);Tn.displayName="Navigation";var Wo=K.createContext(null);Wo.displayName="Location";var kn=K.createContext({outlet:null,matches:[],isDataRoute:!1});kn.displayName="Route";var Yp=K.createContext(null);Yp.displayName="RouteError";function nR(e,{relative:t}={}){ge(Vo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=K.useContext(Tn),{hash:s,pathname:o,search:u}=Xo(e,{relative:t}),c=o;return n!=="/"&&(c=o==="/"?n:ir([n,o])),a.createHref({pathname:c,search:u,hash:s})}function Vo(){return K.useContext(Wo)!=null}function La(){return ge(Vo(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(Wo).location}var Nx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ix(e){K.useContext(Tn).static||K.useLayoutEffect(e)}function rR(){let{isDataRoute:e}=K.useContext(kn);return e?bR():aR()}function aR(){ge(Vo(),"useNavigate() may be used only in the context of a <Router> component.");let e=K.useContext(Ws),{basename:t,navigator:n}=K.useContext(Tn),{matches:a}=K.useContext(kn),{pathname:s}=La(),o=JSON.stringify(Lx(a)),u=K.useRef(!1);return Ix(()=>{u.current=!0}),K.useCallback((g,d={})=>{if(Cn(u.current,Nx),!u.current)return;if(typeof g=="number"){n.go(g);return}let f=Bx(g,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:ir([t,f.pathname])),(d.replace?n.replace:n.push)(f,d.state,d)},[t,n,o,s,e])}K.createContext(null);function sR(){let{matches:e}=K.useContext(kn),t=e[e.length-1];return t?t.params:{}}function Xo(e,{relative:t}={}){let{matches:n}=K.useContext(kn),{pathname:a}=La(),s=JSON.stringify(Lx(n));return K.useMemo(()=>Bx(e,JSON.parse(s),a,t==="path"),[e,s,a,t])}function lR(e,t){return Fx(e,t)}function Fx(e,t,n,a){var w;ge(Vo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=K.useContext(Tn),{matches:o}=K.useContext(kn),u=o[o.length-1],c=u?u.params:{},g=u?u.pathname:"/",d=u?u.pathnameBase:"/",f=u&&u.route;{let k=f&&f.path||"";$x(g,!f||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let m=La(),y;if(t){let k=typeof t=="string"?Ys(t):t;ge(d==="/"||((w=k.pathname)==null?void 0:w.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${k.pathname}" was given in the \`location\` prop.`),y=k}else y=m;let v=y.pathname||"/",S=v;if(d!=="/"){let k=d.replace(/^\//,"").split("/");S="/"+v.replace(/^\//,"").split("/").slice(k.length).join("/")}let C=Rx(e,{pathname:S});Cn(f||C!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Cn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=dR(C&&C.map(k=>Object.assign({},k,{params:Object.assign({},c,k.params),pathname:ir([d,s.encodeLocation?s.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?d:ir([d,s.encodeLocation?s.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,n,a);return t&&T?K.createElement(Wo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},T):T}function oR(){let e=yR(),t=JE(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},o={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:o},"ErrorBoundary")," or"," ",K.createElement("code",{style:o},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},t),n?K.createElement("pre",{style:s},n):null,u)}var cR=K.createElement(oR,null),uR=class extends K.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?K.createElement(kn.Provider,{value:this.props.routeContext},K.createElement(Yp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function hR({routeContext:e,match:t,children:n}){let a=K.useContext(Ws);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),K.createElement(kn.Provider,{value:e},n)}function dR(e,t=[],n=null,a=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,o=n==null?void 0:n.errors;if(o!=null){let g=s.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);ge(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,g+1))}let u=!1,c=-1;if(n)for(let g=0;g<s.length;g++){let d=s[g];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=g),d.route.id){let{loaderData:f,errors:m}=n,y=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!m||m[d.route.id]===void 0);if(d.route.lazy||y){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((g,d,f)=>{let m,y=!1,v=null,S=null;n&&(m=o&&d.route.id?o[d.route.id]:void 0,v=d.route.errorElement||cR,u&&(c<0&&f===0?($x("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,S=null):c===f&&(y=!0,S=d.route.hydrateFallbackElement||null)));let C=t.concat(s.slice(0,f+1)),T=()=>{let w;return m?w=v:y?w=S:d.route.Component?w=K.createElement(d.route.Component,null):d.route.element?w=d.route.element:w=g,K.createElement(hR,{match:d,routeContext:{outlet:g,matches:C,isDataRoute:n!=null},children:w})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?K.createElement(uR,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:T(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):T()},null)}function Wp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gR(e){let t=K.useContext(Ws);return ge(t,Wp(e)),t}function fR(e){let t=K.useContext(Dh);return ge(t,Wp(e)),t}function pR(e){let t=K.useContext(kn);return ge(t,Wp(e)),t}function Vp(e){let t=pR(e),n=t.matches[t.matches.length-1];return ge(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function mR(){return Vp("useRouteId")}function yR(){var a;let e=K.useContext(Yp),t=fR("useRouteError"),n=Vp("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[n]}function bR(){let{router:e}=gR("useNavigate"),t=Vp("useNavigate"),n=K.useRef(!1);return Ix(()=>{n.current=!0}),K.useCallback(async(s,o={})=>{Cn(n.current,Nx),n.current&&(typeof s=="number"?e.navigate(s):await e.navigate(s,{fromRouteId:t,...o}))},[e,t])}var jv={};function $x(e,t,n){!t&&!jv[e]&&(jv[e]=!0,Cn(!1,n))}K.memo(vR);function vR({routes:e,future:t,state:n}){return Fx(e,void 0,n,t)}function jf(e){ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function SR({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:s,static:o=!1}){ge(!Vo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),c=K.useMemo(()=>({basename:u,navigator:s,static:o,future:{}}),[u,s,o]);typeof n=="string"&&(n=Ys(n));let{pathname:g="/",search:d="",hash:f="",state:m=null,key:y="default"}=n,v=K.useMemo(()=>{let S=ar(g,u);return S==null?null:{location:{pathname:S,search:d,hash:f,state:m,key:y},navigationType:a}},[u,g,d,f,m,y,a]);return Cn(v!=null,`<Router basename="${u}"> is not able to match the URL "${g}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:K.createElement(Tn.Provider,{value:c},K.createElement(Wo.Provider,{children:t,value:v}))}function xR({children:e,location:t}){return lR(Yf(e),t)}function Yf(e,t=[]){let n=[];return K.Children.forEach(e,(a,s)=>{if(!K.isValidElement(a))return;let o=[...t,s];if(a.type===K.Fragment){n.push.apply(n,Yf(a.props.children,o));return}ge(a.type===jf,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ge(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=Yf(a.props.children,o)),n.push(u)}),n}var Mu="get",Du="application/x-www-form-urlencoded";function Lh(e){return e!=null&&typeof e.tagName=="string"}function CR(e){return Lh(e)&&e.tagName.toLowerCase()==="button"}function _R(e){return Lh(e)&&e.tagName.toLowerCase()==="form"}function wR(e){return Lh(e)&&e.tagName.toLowerCase()==="input"}function TR(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function kR(e,t){return e.button===0&&(!t||t==="_self")&&!TR(e)}var bu=null;function AR(){if(bu===null)try{new FormData(document.createElement("form"),0),bu=!1}catch{bu=!0}return bu}var ER=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cf(e){return e!=null&&!ER.has(e)?(Cn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Du}"`),null):e}function RR(e,t){let n,a,s,o,u;if(_R(e)){let c=e.getAttribute("action");a=c?ar(c,t):null,n=e.getAttribute("method")||Mu,s=Cf(e.getAttribute("enctype"))||Du,o=new FormData(e)}else if(CR(e)||wR(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=e.getAttribute("formaction")||c.getAttribute("action");if(a=g?ar(g,t):null,n=e.getAttribute("formmethod")||c.getAttribute("method")||Mu,s=Cf(e.getAttribute("formenctype"))||Cf(c.getAttribute("enctype"))||Du,o=new FormData(c,e),!AR()){let{name:d,type:f,value:m}=e;if(f==="image"){let y=d?`${d}.`:"";o.append(`${y}x`,"0"),o.append(`${y}y`,"0")}else d&&o.append(d,m)}}else{if(Lh(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Mu,a=null,s=Du,u=e}return o&&s==="text/plain"&&(u=o,o=void 0),{action:a,method:n.toLowerCase(),encType:s,formData:o,body:u}}function Xp(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function MR(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function DR(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function LR(e,t,n){let a=await Promise.all(e.map(async s=>{let o=t.routes[s.route.id];if(o){let u=await MR(o,n);return u.links?u.links():[]}return[]}));return NR(a.flat(1).filter(DR).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Yv(e,t,n,a,s,o){let u=(g,d)=>n[d]?g.route.id!==n[d].route.id:!0,c=(g,d)=>{var f;return n[d].pathname!==g.pathname||((f=n[d].route.path)==null?void 0:f.endsWith("*"))&&n[d].params["*"]!==g.params["*"]};return o==="assets"?t.filter((g,d)=>u(g,d)||c(g,d)):o==="data"?t.filter((g,d)=>{var m;let f=a.routes[g.route.id];if(!f||!f.hasLoader)return!1;if(u(g,d)||c(g,d))return!0;if(g.route.shouldRevalidate){let y=g.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(e,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function BR(e,t,{includeHydrateFallback:n}={}){return OR(e.map(a=>{let s=t.routes[a.route.id];if(!s)return[];let o=[s.module];return s.clientActionModule&&(o=o.concat(s.clientActionModule)),s.clientLoaderModule&&(o=o.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(o=o.concat(s.hydrateFallbackModule)),s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function OR(e){return[...new Set(e)]}function PR(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}function NR(e,t){let n=new Set;return new Set(t),e.reduce((a,s)=>{let o=JSON.stringify(PR(s));return n.has(o)||(n.add(o),a.push({key:o,link:s})),a},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var IR=new Set([100,101,204,205]);function FR(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&ar(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function zx(){let e=K.useContext(Ws);return Xp(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function $R(){let e=K.useContext(Dh);return Xp(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Qp=K.createContext(void 0);Qp.displayName="FrameworkContext";function Ux(){let e=K.useContext(Qp);return Xp(e,"You must render this element inside a <HydratedRouter> element"),e}function zR(e,t){let n=K.useContext(Qp),[a,s]=K.useState(!1),[o,u]=K.useState(!1),{onFocus:c,onBlur:g,onMouseEnter:d,onMouseLeave:f,onTouchStart:m}=t,y=K.useRef(null);K.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let C=w=>{w.forEach(k=>{u(k.isIntersecting)})},T=new IntersectionObserver(C,{threshold:.5});return y.current&&T.observe(y.current),()=>{T.disconnect()}}},[e]),K.useEffect(()=>{if(a){let C=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(C)}}},[a]);let v=()=>{s(!0)},S=()=>{s(!1),u(!1)};return n?e!=="intent"?[o,y,{}]:[o,y,{onFocus:ro(c,v),onBlur:ro(g,S),onMouseEnter:ro(d,v),onMouseLeave:ro(f,S),onTouchStart:ro(m,v)}]:[!1,y,{}]}function ro(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function UR({page:e,...t}){let{router:n}=zx(),a=K.useMemo(()=>Rx(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?K.createElement(HR,{page:e,matches:a,...t}):null}function qR(e){let{manifest:t,routeModules:n}=Ux(),[a,s]=K.useState([]);return K.useEffect(()=>{let o=!1;return LR(e,t,n).then(u=>{o||s(u)}),()=>{o=!0}},[e,t,n]),a}function HR({page:e,matches:t,...n}){let a=La(),{manifest:s,routeModules:o}=Ux(),{basename:u}=zx(),{loaderData:c,matches:g}=$R(),d=K.useMemo(()=>Yv(e,t,g,s,a,"data"),[e,t,g,s,a]),f=K.useMemo(()=>Yv(e,t,g,s,a,"assets"),[e,t,g,s,a]),m=K.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let S=new Set,C=!1;if(t.forEach(w=>{var E;let k=s.routes[w.route.id];!k||!k.hasLoader||(!d.some(O=>O.route.id===w.route.id)&&w.route.id in c&&((E=o[w.route.id])!=null&&E.shouldRevalidate)||k.hasClientLoader?C=!0:S.add(w.route.id))}),S.size===0)return[];let T=FR(e,u);return C&&S.size>0&&T.searchParams.set("_routes",t.filter(w=>S.has(w.route.id)).map(w=>w.route.id).join(",")),[T.pathname+T.search]},[u,c,a,s,d,t,e,o]),y=K.useMemo(()=>BR(f,s),[f,s]),v=qR(f);return K.createElement(K.Fragment,null,m.map(S=>K.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...n})),y.map(S=>K.createElement("link",{key:S,rel:"modulepreload",href:S,...n})),v.map(({key:S,link:C})=>K.createElement("link",{key:S,...C})))}function GR(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var qx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qx&&(window.__reactRouterVersion="7.6.1")}catch{}function jR({basename:e,children:t,window:n}){let a=K.useRef();a.current==null&&(a.current=ME({window:n,v5Compat:!0}));let s=a.current,[o,u]=K.useState({action:s.action,location:s.location}),c=K.useCallback(g=>{K.startTransition(()=>u(g))},[u]);return K.useLayoutEffect(()=>s.listen(c),[s,c]),K.createElement(SR,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:s})}var Hx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gx=K.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:s,reloadDocument:o,replace:u,state:c,target:g,to:d,preventScrollReset:f,viewTransition:m,...y},v){let{basename:S}=K.useContext(Tn),C=typeof d=="string"&&Hx.test(d),T,w=!1;if(typeof d=="string"&&C&&(T=d,qx))try{let nt=new URL(window.location.href),rt=d.startsWith("//")?new URL(nt.protocol+d):new URL(d),X=ar(rt.pathname,S);rt.origin===nt.origin&&X!=null?d=X+rt.search+rt.hash:w=!0}catch{Cn(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=nR(d,{relative:s}),[E,O,L]=zR(a,y),R=VR(d,{replace:u,state:c,target:g,preventScrollReset:f,relative:s,viewTransition:m});function P(nt){t&&t(nt),nt.defaultPrevented||R(nt)}let J=K.createElement("a",{...y,...L,href:T||k,onClick:w||o?t:P,ref:GR(v,O),target:g,"data-discover":!C&&n==="render"?"true":void 0});return E&&!C?K.createElement(K.Fragment,null,J,K.createElement(UR,{page:k})):J});Gx.displayName="Link";var Ge=K.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:s=!1,style:o,to:u,viewTransition:c,children:g,...d},f){let m=Xo(u,{relative:d.relative}),y=La(),v=K.useContext(Dh),{navigator:S,basename:C}=K.useContext(Tn),T=v!=null&&JR(m)&&c===!0,w=S.encodeLocation?S.encodeLocation(m).pathname:m.pathname,k=y.pathname,E=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;n||(k=k.toLowerCase(),E=E?E.toLowerCase():null,w=w.toLowerCase()),E&&C&&(E=ar(E,C)||E);const O=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let L=k===w||!s&&k.startsWith(w)&&k.charAt(O)==="/",R=E!=null&&(E===w||!s&&E.startsWith(w)&&E.charAt(w.length)==="/"),P={isActive:L,isPending:R,isTransitioning:T},J=L?t:void 0,nt;typeof a=="function"?nt=a(P):nt=[a,L?"active":null,R?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let rt=typeof o=="function"?o(P):o;return K.createElement(Gx,{...d,"aria-current":J,className:nt,ref:f,style:rt,to:u,viewTransition:c},typeof g=="function"?g(P):g)});Ge.displayName="NavLink";var YR=K.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:s,state:o,method:u=Mu,action:c,onSubmit:g,relative:d,preventScrollReset:f,viewTransition:m,...y},v)=>{let S=KR(),C=ZR(c,{relative:d}),T=u.toLowerCase()==="get"?"get":"post",w=typeof c=="string"&&Hx.test(c),k=E=>{if(g&&g(E),E.defaultPrevented)return;E.preventDefault();let O=E.nativeEvent.submitter,L=(O==null?void 0:O.getAttribute("formmethod"))||u;S(O||E.currentTarget,{fetcherKey:t,method:L,navigate:n,replace:s,state:o,relative:d,preventScrollReset:f,viewTransition:m})};return K.createElement("form",{ref:v,method:T,action:C,onSubmit:a?g:k,...y,"data-discover":!w&&e==="render"?"true":void 0})});YR.displayName="Form";function WR(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jx(e){let t=K.useContext(Ws);return ge(t,WR(e)),t}function VR(e,{target:t,replace:n,state:a,preventScrollReset:s,relative:o,viewTransition:u}={}){let c=rR(),g=La(),d=Xo(e,{relative:o});return K.useCallback(f=>{if(kR(f,t)){f.preventDefault();let m=n!==void 0?n:Bo(g)===Bo(d);c(e,{replace:m,state:a,preventScrollReset:s,relative:o,viewTransition:u})}},[g,c,d,n,a,t,e,s,o,u])}var XR=0,QR=()=>`__${String(++XR)}__`;function KR(){let{router:e}=jx("useSubmit"),{basename:t}=K.useContext(Tn),n=mR();return K.useCallback(async(a,s={})=>{let{action:o,method:u,encType:c,formData:g,body:d}=RR(a,t);if(s.navigate===!1){let f=s.fetcherKey||QR();await e.fetch(f,n,s.action||o,{preventScrollReset:s.preventScrollReset,formData:g,body:d,formMethod:s.method||u,formEncType:s.encType||c,flushSync:s.flushSync})}else await e.navigate(s.action||o,{preventScrollReset:s.preventScrollReset,formData:g,body:d,formMethod:s.method||u,formEncType:s.encType||c,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[e,t,n])}function ZR(e,{relative:t}={}){let{basename:n}=K.useContext(Tn),a=K.useContext(kn);ge(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),o={...Xo(e||".",{relative:t})},u=La();if(e==null){o.search=u.search;let c=new URLSearchParams(o.search),g=c.getAll("index");if(g.some(f=>f==="")){c.delete("index"),g.filter(m=>m).forEach(m=>c.append("index",m));let f=c.toString();o.search=f?`?${f}`:""}}return(!e||e===".")&&s.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:ir([n,o.pathname])),Bo(o)}function JR(e,t={}){let n=K.useContext(Px);ge(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=jx("useViewTransitionState"),s=Xo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=ar(n.currentLocation.pathname,a)||n.currentLocation.pathname,u=ar(n.nextLocation.pathname,a)||n.nextLocation.pathname;return Vu(s.pathname,u)!=null||Vu(s.pathname,o)!=null}[...IR];const tM=[{name:"📖 Documentation Portal",href:"/docs/readme"},{name:"📋 Project Documentation",href:"/docs/project_documentation"},{name:"💼 Business Plan",href:"/docs/business_plan"},{name:"Changelog",href:"/docs/changelog"},{name:"📊 Executive Summary",href:"/docs/executive_summary"},{name:"🏗️ Architecture Diagrams",href:"/docs/architecture_diagrams"},{name:"🤝 Contributing to Business Services Hub",href:"/docs/contributing"},{name:"⚡ Features Detailed",href:"/docs/features_detailed"},{name:"🗺️ Development Roadmap",href:"/docs/roadmap"},{name:"🔒 Security Guide",href:"/docs/security_guide"},{name:"🚀 Setup &amp; Deployment Guide",href:"/docs/setup_deployment_guide"}],Wf={readme:{title:"📖 Business Services Hub - Documentation Portal",content:`<h1 id="business-services-hub-documentation-portal">📖 Business Services Hub - Documentation Portal</h1>
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
<p>This document provides a comprehensive technical overview of the Business Services Hub, covering everything from high-level architecture to detailed component implementation. It is intended for developers, architects, and technical stakeholders who need a deep understanding of the system.</p>
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
</tbody>
</table>
<hr />
<h2 id="5-core-features">5. Core Features</h2>
<h3 id="user-authentication">User Authentication</h3>
<ul>
<li>Email/password and social login (Google, GitHub)</li>
<li>JWT-based session management with refresh tokens</li>
<li>Secure password reset and email verification</li>
</ul>
<h3 id="service-marketplace">Service Marketplace</h3>
<ul>
<li>Advanced search with filtering by category, price, and location</li>
<li>Service detail pages with provider profiles and reviews</li>
<li>Real-time availability and booking calendar</li>
</ul>
<h3 id="booking-management">Booking Management</h3>
<ul>
<li>One-click booking with integrated payment processing</li>
<li>Dashboard for clients and providers to manage bookings</li>
<li>Automated notifications for booking confirmations and reminders</li>
</ul>
<h3 id="payment-processing">Payment Processing</h3>
<ul>
<li>Secure payments powered by Stripe</li>
<li>Support for credit/debit cards and other payment methods</li>
<li>Automated payouts to service providers</li>
</ul>
<h3 id="review-system">Review System</h3>
<ul>
<li>Clients can leave reviews and ratings after service completion</li>
<li>Providers can respond to reviews</li>
<li>Moderation tools for administrators to manage reviews</li>
</ul>
<hr />
<h2 id="6-database-schema">6. Database Schema</h2>
<p>For a detailed visual representation of the database schema, see <a href="./docs/ARCHITECTURE_DIAGRAMS.md">Architecture Diagrams</a>.</p>
<h3 id="core-tables">Core Tables</h3>
<ul>
<li><strong>users</strong>: Stores user profiles and authentication data</li>
<li><strong>services</strong>: Contains all service listings and details</li>
<li><strong>bookings</strong>: Manages all booking and appointment data</li>
<li><strong>reviews</strong>: Stores user reviews and ratings</li>
<li><strong>payments</strong>: Tracks all payment transactions</li>
</ul>
<h3 id="relationships">Relationships</h3>
<ul>
<li>A <strong>user</strong> can be a <strong>client</strong> or a <strong>provider</strong></li>
<li>A <strong>provider</strong> can have multiple <strong>services</strong></li>
<li>A <strong>client</strong> can make multiple <strong>bookings</strong></li>
<li>A <strong>booking</strong> is associated with one <strong>service</strong> and one <strong>client</strong></li>
<li>A <strong>review</strong> is linked to a completed <strong>booking</strong></li>
</ul>
<hr />
<h2 id="7-api-documentation">7. API Documentation</h2>
<p>The Business Services Hub exposes a comprehensive RESTful API for all platform functionality. The API is built with TypeScript and follows OpenAPI standards.</p>
<h3 id="api-endpoints">API Endpoints</h3>
<ul>
<li><code>/api/auth</code>: User authentication and session management</li>
<li><code>/api/users</code>: User profile management</li>
<li><code>/api/services</code>: Service creation, retrieval, and search</li>
<li><code>/api/bookings</code>: Booking creation and management</li>
<li><code>/api/reviews</code>: Review submission and retrieval</li>
</ul>
<h3 id="authentication">Authentication</h3>
<p>All API requests must be authenticated with a valid JWT token in the <code>Authorization</code> header.</p>
<pre><code class="language-bash">Authorization: Bearer &lt;your-jwt-token&gt;
</code></pre>
<hr />
<h2 id="8-component-architecture">8. Component Architecture</h2>
<p>The frontend is built with a modular component architecture using React and TypeScript.</p>
<h3 id="core-components">Core Components</h3>
<ul>
<li><strong>Layout</strong>: Main application layout with sidebar and header</li>
<li><strong>Card</strong>: Reusable card component for displaying services and profiles</li>
<li><strong>Form</strong>: Abstracted form components with validation</li>
<li><strong>Modal</strong>: Reusable modal component for pop-up dialogs</li>
<li><strong>Table</strong>: Data table component with sorting and filtering</li>
</ul>
<h3 id="feature-components">Feature Components</h3>
<ul>
<li><strong>ServiceSearch</strong>: Component for searching and filtering services</li>
<li><strong>BookingCalendar</strong>: Interactive calendar for booking appointments</li>
<li><strong>ReviewForm</strong>: Form for submitting service reviews</li>
<li><strong>AnalyticsDashboard</strong>: Dashboard for displaying platform analytics</li>
</ul>
<hr />
<h2 id="9-deployment-guide">9. Deployment Guide</h2>
<p>For detailed deployment instructions, see the <a href="./docs/SETUP_DEPLOYMENT_GUIDE.md">Setup &amp; Deployment Guide</a>.</p>
<h3 id="production-deployment">Production Deployment</h3>
<ul>
<li><strong>Frontend</strong>: Deployed on Vercel with automatic builds from GitHub</li>
<li><strong>Backend</strong>: Supabase project for database and authentication</li>
<li><strong>Environment Variables</strong>: Managed in Vercel and Supabase dashboards</li>
</ul>
<h3 id="ci-cd-pipeline">CI/CD Pipeline</h3>
<ul>
<li>Continuous Integration with GitHub Actions</li>
<li>Automated testing and linting on every push</li>
<li>Automatic deployment to Vercel on merge to <code>main</code> branch</li>
</ul>
<hr />
<h2 id="10-development-setup">10. Development Setup</h2>
<p>For detailed development setup instructions, see the <a href="./docs/SETUP_DEPLOYMENT_GUIDE.md">Setup &amp; Deployment Guide</a>.</p>
<h3 id="local-environment">Local Environment</h3>
<ul>
<li>Node.js and npm for package management</li>
<li>Local PostgreSQL database for development</li>
<li>Supabase CLI for managing database migrations</li>
</ul>
<h3 id="getting-started">Getting Started</h3>
<pre><code class="language-bash"># Clone the repository
git clone https://github.com/your-org/business-services-hub.git
cd business-services-hub

# Install dependencies
npm install

# Run the development server
npm run dev
</code></pre>
<hr />
<h2 id="11-security-features">11. Security Features</h2>
<p>For a detailed overview of security measures, see the <a href="./docs/SECURITY_GUIDE.md">Security Guide</a>.</p>
<h3 id="key-security-measures">Key Security Measures</h3>
<ul>
<li><strong>Row Level Security (RLS)</strong>: PostgreSQL policies to restrict data access</li>
<li><strong>JWT Authentication</strong>: Secure, stateless authentication</li>
<li><strong>Input Validation</strong>: Zod validation for all user input</li>
<li><strong>XSS Protection</strong>: React automatically escapes content to prevent XSS</li>
<li><strong>CSRF Protection</strong>: Next.js provides built-in CSRF protection</li>
</ul>
<hr />
<h2 id="12-performance-optimizations">12. Performance Optimizations</h2>
<h3 id="frontend-performance">Frontend Performance</h3>
<ul>
<li><strong>Server-Side Rendering (SSR)</strong>: Fast initial page loads with Next.js</li>
<li><strong>Code Splitting</strong>: Automatic code splitting by route</li>
<li><strong>Image Optimization</strong>: Next.js Image component for optimized images</li>
<li><strong>Lazy Loading</strong>: Components and libraries are lazy-loaded as needed</li>
</ul>
<h3 id="backend-performance">Backend Performance</h3>
<ul>
<li><strong>Database Indexing</strong>: Proper indexing for fast query performance</li>
<li><strong>Connection Pooling</strong>: Efficient management of database connections</li>
<li><strong>Caching</strong>: Redis for caching frequently accessed data</li>
</ul>
<hr />
<h2 id="13-roadmap">13. Roadmap</h2>
<p>For a detailed project roadmap, see the <a href="./docs/ROADMAP.md">Roadmap</a>.</p>
<h3 id="q4-2025-launch">Q4 2025: Launch</h3>
<ul>
<li>Public launch of the platform</li>
<li>Onboarding of first 100 service providers</li>
<li>Marketing campaign to attract initial user base</li>
</ul>
<h3 id="q1-2026-growth">Q1 2026: Growth</h3>
<ul>
<li>Expansion to new service categories</li>
<li>Mobile app development (React Native)</li>
<li>Enhanced analytics for providers</li>
</ul>
<h3 id="q2-2026-scale">Q2 2026: Scale</h3>
<ul>
<li>International expansion</li>
<li>Enterprise features for large clients</li>
<li>API for third-party integrations</li>
</ul>
<hr />
<h2 id="14-future-phases">14. Future Phases</h2>
<h3 id="ai-powered-matching">AI-Powered Matching</h3>
<p>Develop an AI-powered recommendation engine to match clients with the best service providers based on their needs and preferences.</p>
<h3 id="subscription-model">Subscription Model</h3>
<p>Introduce a subscription model for service providers with premium features and benefits.</p>
<h3 id="team-collaboration">Team Collaboration</h3>
<p>Add features for teams and agencies to collaborate on projects and manage clients.</p>
<hr />
<p><em>This document provides a high-level overview. For more detailed information, please refer to the specific documentation sections linked throughout.</em></p>`},readme:{title:"📖 Business Services Hub - Documentation Portal",content:`<h1 id="business-services-hub-documentation-portal">📖 Business Services Hub - Documentation Portal</h1>
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
<p>This comprehensive setup and deployment guide provides step-by-step instructions for setting up the Business Services Hub in development and production environments, including troubleshooting tips and best practices for maintaining a healthy deployment.</p>`}},eM="/assets/falcon_eye_logo.jpg",iM="modulepreload",nM=function(e){return"/"+e},Wv={},Qt=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){let u=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),g=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=u(n.map(d=>{if(d=nM(d),d in Wv)return;Wv[d]=!0;const f=d.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const y=document.createElement("link");if(y.rel=f?"stylesheet":iM,f||(y.as="script"),y.crossOrigin="",y.href=d,g&&y.setAttribute("nonce",g),document.head.appendChild(y),f)return new Promise((v,S)=>{y.addEventListener("load",v),y.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(u){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u}return s.then(u=>{for(const c of u||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};var Vv={name:"mermaid",version:"11.11.0",description:"Markdown-ish syntax for generating flowcharts, mindmaps, sequence diagrams, class diagrams, gantt charts, git graphs and more.",type:"module",module:"./dist/mermaid.core.mjs",types:"./dist/mermaid.d.ts",exports:{".":{types:"./dist/mermaid.d.ts",import:"./dist/mermaid.core.mjs",default:"./dist/mermaid.core.mjs"},"./*":"./*"},keywords:["diagram","markdown","flowchart","sequence diagram","gantt","class diagram","git graph","mindmap","packet diagram","c4 diagram","er diagram","pie chart","pie diagram","quadrant chart","requirement diagram","graph"],scripts:{clean:"rimraf dist",dev:"pnpm -w dev","docs:code":"typedoc src/defaultConfig.ts src/config.ts src/mermaid.ts && prettier --write ./src/docs/config/setup","docs:build":"rimraf ../../docs && pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts","docs:verify":"pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts --verify","docs:pre:vitepress":"pnpm --filter ./src/docs prefetch && rimraf src/vitepress && pnpm docs:code && tsx scripts/docs.cli.mts --vitepress && pnpm --filter ./src/vitepress install --no-frozen-lockfile --ignore-scripts","docs:build:vitepress":"pnpm docs:pre:vitepress && (cd src/vitepress && pnpm run build) && cpy --flat src/docs/landing/ ./src/vitepress/.vitepress/dist/landing","docs:dev":'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev" "tsx scripts/docs.cli.mts --watch --vitepress"',"docs:dev:docker":'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev:docker" "tsx scripts/docs.cli.mts --watch --vitepress"',"docs:serve":"pnpm docs:build:vitepress && vitepress serve src/vitepress","docs:spellcheck":'cspell "src/docs/**/*.md"',"docs:release-version":"tsx scripts/update-release-version.mts","docs:verify-version":"tsx scripts/update-release-version.mts --verify","types:build-config":"tsx scripts/create-types-from-json-schema.mts","types:verify-config":"tsx scripts/create-types-from-json-schema.mts --verify",checkCircle:"npx madge --circular ./src",prepublishOnly:"pnpm docs:verify-version"},repository:{type:"git",url:"https://github.com/mermaid-js/mermaid"},author:"Knut Sveidqvist",license:"MIT",standard:{ignore:["**/parser/*.js","dist/**/*.js","cypress/**/*.js"],globals:["page"]},dependencies:{"@braintree/sanitize-url":"^7.0.4","@iconify/utils":"^3.0.1","@mermaid-js/parser":"workspace:^","@types/d3":"^7.4.3",cytoscape:"^3.29.3","cytoscape-cose-bilkent":"^4.1.0","cytoscape-fcose":"^2.2.0",d3:"^7.9.0","d3-sankey":"^0.12.3","dagre-d3-es":"7.0.11",dayjs:"^1.11.13",dompurify:"^3.2.5",katex:"^0.16.22",khroma:"^2.1.0","lodash-es":"^4.17.21",marked:"^15.0.7",roughjs:"^4.6.6",stylis:"^4.3.6","ts-dedent":"^2.2.0",uuid:"^11.1.0"},devDependencies:{"@adobe/jsonschema2md":"^8.0.2","@iconify/types":"^2.0.0","@types/cytoscape":"^3.21.9","@types/cytoscape-fcose":"^2.2.4","@types/d3-sankey":"^0.12.4","@types/d3-scale":"^4.0.9","@types/d3-scale-chromatic":"^3.1.0","@types/d3-selection":"^3.0.11","@types/d3-shape":"^3.1.7","@types/jsdom":"^21.1.7","@types/katex":"^0.16.7","@types/lodash-es":"^4.17.12","@types/micromatch":"^4.0.9","@types/stylis":"^4.2.7","@types/uuid":"^10.0.0",ajv:"^8.17.1",canvas:"^3.1.0",chokidar:"3.6.0",concurrently:"^9.1.2","csstree-validator":"^4.0.1",globby:"^14.0.2",jison:"^0.4.18","js-base64":"^3.7.7",jsdom:"^26.1.0","json-schema-to-typescript":"^15.0.4",micromatch:"^4.0.8","path-browserify":"^1.0.1",prettier:"^3.5.2",remark:"^15.0.1","remark-frontmatter":"^5.0.0","remark-gfm":"^4.0.1",rimraf:"^6.0.1","start-server-and-test":"^2.0.10","type-fest":"^4.35.0",typedoc:"^0.28.9","typedoc-plugin-markdown":"^4.8.0",typescript:"~5.7.3","unist-util-flatmap":"^1.0.0","unist-util-visit":"^5.0.0",vitepress:"^1.0.2","vitepress-plugin-search":"1.0.4-alpha.22"},files:["dist/","README.md"],publishConfig:{access:"public"}},Lu={exports:{}},rM=Lu.exports,Xv;function aM(){return Xv||(Xv=1,function(e,t){(function(n,a){e.exports=a()})(rM,function(){var n=1e3,a=6e4,s=36e5,o="millisecond",u="second",c="minute",g="hour",d="day",f="week",m="month",y="quarter",v="year",S="date",C="Invalid Date",T=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,w=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,k={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(W){var j=["th","st","nd","rd"],M=W%100;return"["+W+(j[(M-20)%10]||j[M]||j[0])+"]"}},E=function(W,j,M){var F=String(W);return!F||F.length>=j?W:""+Array(j+1-F.length).join(M)+W},O={s:E,z:function(W){var j=-W.utcOffset(),M=Math.abs(j),F=Math.floor(M/60),$=M%60;return(j<=0?"+":"-")+E(F,2,"0")+":"+E($,2,"0")},m:function W(j,M){if(j.date()<M.date())return-W(M,j);var F=12*(M.year()-j.year())+(M.month()-j.month()),$=j.clone().add(F,m),ut=M-$<0,D=j.clone().add(F+(ut?-1:1),m);return+(-(F+(M-$)/(ut?$-D:D-$))||0)},a:function(W){return W<0?Math.ceil(W)||0:Math.floor(W)},p:function(W){return{M:m,y:v,w:f,d,D:S,h:g,m:c,s:u,ms:o,Q:y}[W]||String(W||"").toLowerCase().replace(/s$/,"")},u:function(W){return W===void 0}},L="en",R={};R[L]=k;var P="$isDayjsObject",J=function(W){return W instanceof lt||!(!W||!W[P])},nt=function W(j,M,F){var $;if(!j)return L;if(typeof j=="string"){var ut=j.toLowerCase();R[ut]&&($=ut),M&&(R[ut]=M,$=ut);var D=j.split("-");if(!$&&D.length>1)return W(D[0])}else{var H=j.name;R[H]=j,$=H}return!F&&$&&(L=$),$||!F&&L},rt=function(W,j){if(J(W))return W.clone();var M=typeof j=="object"?j:{};return M.date=W,M.args=arguments,new lt(M)},X=O;X.l=nt,X.i=J,X.w=function(W,j){return rt(W,{locale:j.$L,utc:j.$u,x:j.$x,$offset:j.$offset})};var lt=function(){function W(M){this.$L=nt(M.locale,null,!0),this.parse(M),this.$x=this.$x||M.x||{},this[P]=!0}var j=W.prototype;return j.parse=function(M){this.$d=function(F){var $=F.date,ut=F.utc;if($===null)return new Date(NaN);if(X.u($))return new Date;if($ instanceof Date)return new Date($);if(typeof $=="string"&&!/Z$/i.test($)){var D=$.match(T);if(D){var H=D[2]-1||0,ot=(D[7]||"0").substring(0,3);return ut?new Date(Date.UTC(D[1],H,D[3]||1,D[4]||0,D[5]||0,D[6]||0,ot)):new Date(D[1],H,D[3]||1,D[4]||0,D[5]||0,D[6]||0,ot)}}return new Date($)}(M),this.init()},j.init=function(){var M=this.$d;this.$y=M.getFullYear(),this.$M=M.getMonth(),this.$D=M.getDate(),this.$W=M.getDay(),this.$H=M.getHours(),this.$m=M.getMinutes(),this.$s=M.getSeconds(),this.$ms=M.getMilliseconds()},j.$utils=function(){return X},j.isValid=function(){return this.$d.toString()!==C},j.isSame=function(M,F){var $=rt(M);return this.startOf(F)<=$&&$<=this.endOf(F)},j.isAfter=function(M,F){return rt(M)<this.startOf(F)},j.isBefore=function(M,F){return this.endOf(F)<rt(M)},j.$g=function(M,F,$){return X.u(M)?this[F]:this.set($,M)},j.unix=function(){return Math.floor(this.valueOf()/1e3)},j.valueOf=function(){return this.$d.getTime()},j.startOf=function(M,F){var $=this,ut=!!X.u(F)||F,D=X.p(M),H=function(Ht,Zt){var oe=X.w($.$u?Date.UTC($.$y,Zt,Ht):new Date($.$y,Zt,Ht),$);return ut?oe:oe.endOf(d)},ot=function(Ht,Zt){return X.w($.toDate()[Ht].apply($.toDate("s"),(ut?[0,0,0,0]:[23,59,59,999]).slice(Zt)),$)},et=this.$W,gt=this.$M,pt=this.$D,ht="set"+(this.$u?"UTC":"");switch(D){case v:return ut?H(1,0):H(31,11);case m:return ut?H(1,gt):H(0,gt+1);case f:var Dt=this.$locale().weekStart||0,Bt=(et<Dt?et+7:et)-Dt;return H(ut?pt-Bt:pt+(6-Bt),gt);case d:case S:return ot(ht+"Hours",0);case g:return ot(ht+"Minutes",1);case c:return ot(ht+"Seconds",2);case u:return ot(ht+"Milliseconds",3);default:return this.clone()}},j.endOf=function(M){return this.startOf(M,!1)},j.$set=function(M,F){var $,ut=X.p(M),D="set"+(this.$u?"UTC":""),H=($={},$[d]=D+"Date",$[S]=D+"Date",$[m]=D+"Month",$[v]=D+"FullYear",$[g]=D+"Hours",$[c]=D+"Minutes",$[u]=D+"Seconds",$[o]=D+"Milliseconds",$)[ut],ot=ut===d?this.$D+(F-this.$W):F;if(ut===m||ut===v){var et=this.clone().set(S,1);et.$d[H](ot),et.init(),this.$d=et.set(S,Math.min(this.$D,et.daysInMonth())).$d}else H&&this.$d[H](ot);return this.init(),this},j.set=function(M,F){return this.clone().$set(M,F)},j.get=function(M){return this[X.p(M)]()},j.add=function(M,F){var $,ut=this;M=Number(M);var D=X.p(F),H=function(gt){var pt=rt(ut);return X.w(pt.date(pt.date()+Math.round(gt*M)),ut)};if(D===m)return this.set(m,this.$M+M);if(D===v)return this.set(v,this.$y+M);if(D===d)return H(1);if(D===f)return H(7);var ot=($={},$[c]=a,$[g]=s,$[u]=n,$)[D]||1,et=this.$d.getTime()+M*ot;return X.w(et,this)},j.subtract=function(M,F){return this.add(-1*M,F)},j.format=function(M){var F=this,$=this.$locale();if(!this.isValid())return $.invalidDate||C;var ut=M||"YYYY-MM-DDTHH:mm:ssZ",D=X.z(this),H=this.$H,ot=this.$m,et=this.$M,gt=$.weekdays,pt=$.months,ht=$.meridiem,Dt=function(Zt,oe,ke,hi){return Zt&&(Zt[oe]||Zt(F,ut))||ke[oe].slice(0,hi)},Bt=function(Zt){return X.s(H%12||12,Zt,"0")},Ht=ht||function(Zt,oe,ke){var hi=Zt<12?"AM":"PM";return ke?hi.toLowerCase():hi};return ut.replace(w,function(Zt,oe){return oe||function(ke){switch(ke){case"YY":return String(F.$y).slice(-2);case"YYYY":return X.s(F.$y,4,"0");case"M":return et+1;case"MM":return X.s(et+1,2,"0");case"MMM":return Dt($.monthsShort,et,pt,3);case"MMMM":return Dt(pt,et);case"D":return F.$D;case"DD":return X.s(F.$D,2,"0");case"d":return String(F.$W);case"dd":return Dt($.weekdaysMin,F.$W,gt,2);case"ddd":return Dt($.weekdaysShort,F.$W,gt,3);case"dddd":return gt[F.$W];case"H":return String(H);case"HH":return X.s(H,2,"0");case"h":return Bt(1);case"hh":return Bt(2);case"a":return Ht(H,ot,!0);case"A":return Ht(H,ot,!1);case"m":return String(ot);case"mm":return X.s(ot,2,"0");case"s":return String(F.$s);case"ss":return X.s(F.$s,2,"0");case"SSS":return X.s(F.$ms,3,"0");case"Z":return D}return null}(Zt)||D.replace(":","")})},j.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},j.diff=function(M,F,$){var ut,D=this,H=X.p(F),ot=rt(M),et=(ot.utcOffset()-this.utcOffset())*a,gt=this-ot,pt=function(){return X.m(D,ot)};switch(H){case v:ut=pt()/12;break;case m:ut=pt();break;case y:ut=pt()/3;break;case f:ut=(gt-et)/6048e5;break;case d:ut=(gt-et)/864e5;break;case g:ut=gt/s;break;case c:ut=gt/a;break;case u:ut=gt/n;break;default:ut=gt}return $?ut:X.a(ut)},j.daysInMonth=function(){return this.endOf(m).$D},j.$locale=function(){return R[this.$L]},j.locale=function(M,F){if(!M)return this.$L;var $=this.clone(),ut=nt(M,F,!0);return ut&&($.$L=ut),$},j.clone=function(){return X.w(this.$d,this)},j.toDate=function(){return new Date(this.valueOf())},j.toJSON=function(){return this.isValid()?this.toISOString():null},j.toISOString=function(){return this.$d.toISOString()},j.toString=function(){return this.$d.toUTCString()},W}(),at=lt.prototype;return rt.prototype=at,[["$ms",o],["$s",u],["$m",c],["$H",g],["$W",d],["$M",m],["$y",v],["$D",S]].forEach(function(W){at[W[1]]=function(j){return this.$g(j,W[0],W[1])}}),rt.extend=function(W,j){return W.$i||(W(j,lt,rt),W.$i=!0),rt},rt.locale=nt,rt.isDayjs=J,rt.unix=function(W){return rt(1e3*W)},rt.en=R[L],rt.Ls=R,rt.p={},rt})}(Lu)),Lu.exports}var sM=aM();const lM=bE(sM);var Yx=Object.defineProperty,x=(e,t)=>Yx(e,"name",{value:t,configurable:!0}),oM=(e,t)=>{for(var n in t)Yx(e,n,{get:t[n],enumerable:!0})},Xn={trace:0,debug:1,info:2,warn:3,error:4,fatal:5},st={trace:x((...e)=>{},"trace"),debug:x((...e)=>{},"debug"),info:x((...e)=>{},"info"),warn:x((...e)=>{},"warn"),error:x((...e)=>{},"error"),fatal:x((...e)=>{},"fatal")},Kp=x(function(e="fatal"){let t=Xn.fatal;typeof e=="string"?e.toLowerCase()in Xn&&(t=Xn[e]):typeof e=="number"&&(t=e),st.trace=()=>{},st.debug=()=>{},st.info=()=>{},st.warn=()=>{},st.error=()=>{},st.fatal=()=>{},t<=Xn.fatal&&(st.fatal=console.error?console.error.bind(console,ji("FATAL"),"color: orange"):console.log.bind(console,"\x1B[35m",ji("FATAL"))),t<=Xn.error&&(st.error=console.error?console.error.bind(console,ji("ERROR"),"color: orange"):console.log.bind(console,"\x1B[31m",ji("ERROR"))),t<=Xn.warn&&(st.warn=console.warn?console.warn.bind(console,ji("WARN"),"color: orange"):console.log.bind(console,"\x1B[33m",ji("WARN"))),t<=Xn.info&&(st.info=console.info?console.info.bind(console,ji("INFO"),"color: lightblue"):console.log.bind(console,"\x1B[34m",ji("INFO"))),t<=Xn.debug&&(st.debug=console.debug?console.debug.bind(console,ji("DEBUG"),"color: lightgreen"):console.log.bind(console,"\x1B[32m",ji("DEBUG"))),t<=Xn.trace&&(st.trace=console.debug?console.debug.bind(console,ji("TRACE"),"color: lightgreen"):console.log.bind(console,"\x1B[32m",ji("TRACE")))},"setLogLevel"),ji=x(e=>`%c${lM().format("ss.SSS")} : ${e} : `,"format");const Bu={min:{r:0,g:0,b:0,s:0,l:0,a:0},max:{r:255,g:255,b:255,h:360,s:100,l:100,a:1},clamp:{r:e=>e>=255?255:e<0?0:e,g:e=>e>=255?255:e<0?0:e,b:e=>e>=255?255:e<0?0:e,h:e=>e%360,s:e=>e>=100?100:e<0?0:e,l:e=>e>=100?100:e<0?0:e,a:e=>e>=1?1:e<0?0:e},toLinear:e=>{const t=e/255;return e>.03928?Math.pow((t+.055)/1.055,2.4):t/12.92},hue2rgb:(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),hsl2rgb:({h:e,s:t,l:n},a)=>{if(!t)return n*2.55;e/=360,t/=100,n/=100;const s=n<.5?n*(1+t):n+t-n*t,o=2*n-s;switch(a){case"r":return Bu.hue2rgb(o,s,e+1/3)*255;case"g":return Bu.hue2rgb(o,s,e)*255;case"b":return Bu.hue2rgb(o,s,e-1/3)*255}},rgb2hsl:({r:e,g:t,b:n},a)=>{e/=255,t/=255,n/=255;const s=Math.max(e,t,n),o=Math.min(e,t,n),u=(s+o)/2;if(a==="l")return u*100;if(s===o)return 0;const c=s-o,g=u>.5?c/(2-s-o):c/(s+o);if(a==="s")return g*100;switch(s){case e:return((t-n)/c+(t<n?6:0))*60;case t:return((n-e)/c+2)*60;case n:return((e-t)/c+4)*60;default:return-1}}},cM={clamp:(e,t,n)=>t>n?Math.min(t,Math.max(n,e)):Math.min(n,Math.max(t,e)),round:e=>Math.round(e*1e10)/1e10},uM={dec2hex:e=>{const t=Math.round(e).toString(16);return t.length>1?t:`0${t}`}},Pt={channel:Bu,lang:cM,unit:uM},Pr={};for(let e=0;e<=255;e++)Pr[e]=Pt.unit.dec2hex(e);const Ze={ALL:0,RGB:1,HSL:2};class hM{constructor(){this.type=Ze.ALL}get(){return this.type}set(t){if(this.type&&this.type!==t)throw new Error("Cannot change both RGB and HSL channels at the same time");this.type=t}reset(){this.type=Ze.ALL}is(t){return this.type===t}}class dM{constructor(t,n){this.color=n,this.changed=!1,this.data=t,this.type=new hM}set(t,n){return this.color=n,this.changed=!1,this.data=t,this.type.type=Ze.ALL,this}_ensureHSL(){const t=this.data,{h:n,s:a,l:s}=t;n===void 0&&(t.h=Pt.channel.rgb2hsl(t,"h")),a===void 0&&(t.s=Pt.channel.rgb2hsl(t,"s")),s===void 0&&(t.l=Pt.channel.rgb2hsl(t,"l"))}_ensureRGB(){const t=this.data,{r:n,g:a,b:s}=t;n===void 0&&(t.r=Pt.channel.hsl2rgb(t,"r")),a===void 0&&(t.g=Pt.channel.hsl2rgb(t,"g")),s===void 0&&(t.b=Pt.channel.hsl2rgb(t,"b"))}get r(){const t=this.data,n=t.r;return!this.type.is(Ze.HSL)&&n!==void 0?n:(this._ensureHSL(),Pt.channel.hsl2rgb(t,"r"))}get g(){const t=this.data,n=t.g;return!this.type.is(Ze.HSL)&&n!==void 0?n:(this._ensureHSL(),Pt.channel.hsl2rgb(t,"g"))}get b(){const t=this.data,n=t.b;return!this.type.is(Ze.HSL)&&n!==void 0?n:(this._ensureHSL(),Pt.channel.hsl2rgb(t,"b"))}get h(){const t=this.data,n=t.h;return!this.type.is(Ze.RGB)&&n!==void 0?n:(this._ensureRGB(),Pt.channel.rgb2hsl(t,"h"))}get s(){const t=this.data,n=t.s;return!this.type.is(Ze.RGB)&&n!==void 0?n:(this._ensureRGB(),Pt.channel.rgb2hsl(t,"s"))}get l(){const t=this.data,n=t.l;return!this.type.is(Ze.RGB)&&n!==void 0?n:(this._ensureRGB(),Pt.channel.rgb2hsl(t,"l"))}get a(){return this.data.a}set r(t){this.type.set(Ze.RGB),this.changed=!0,this.data.r=t}set g(t){this.type.set(Ze.RGB),this.changed=!0,this.data.g=t}set b(t){this.type.set(Ze.RGB),this.changed=!0,this.data.b=t}set h(t){this.type.set(Ze.HSL),this.changed=!0,this.data.h=t}set s(t){this.type.set(Ze.HSL),this.changed=!0,this.data.s=t}set l(t){this.type.set(Ze.HSL),this.changed=!0,this.data.l=t}set a(t){this.changed=!0,this.data.a=t}}const Bh=new dM({r:0,g:0,b:0,a:0},"transparent"),ks={re:/^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,parse:e=>{if(e.charCodeAt(0)!==35)return;const t=e.match(ks.re);if(!t)return;const n=t[1],a=parseInt(n,16),s=n.length,o=s%4===0,u=s>4,c=u?1:17,g=u?8:4,d=o?0:-1,f=u?255:15;return Bh.set({r:(a>>g*(d+3)&f)*c,g:(a>>g*(d+2)&f)*c,b:(a>>g*(d+1)&f)*c,a:o?(a&f)*c/255:1},e)},stringify:e=>{const{r:t,g:n,b:a,a:s}=e;return s<1?`#${Pr[Math.round(t)]}${Pr[Math.round(n)]}${Pr[Math.round(a)]}${Pr[Math.round(s*255)]}`:`#${Pr[Math.round(t)]}${Pr[Math.round(n)]}${Pr[Math.round(a)]}`}},ba={re:/^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,hueRe:/^(.+?)(deg|grad|rad|turn)$/i,_hue2deg:e=>{const t=e.match(ba.hueRe);if(t){const[,n,a]=t;switch(a){case"grad":return Pt.channel.clamp.h(parseFloat(n)*.9);case"rad":return Pt.channel.clamp.h(parseFloat(n)*180/Math.PI);case"turn":return Pt.channel.clamp.h(parseFloat(n)*360)}}return Pt.channel.clamp.h(parseFloat(e))},parse:e=>{const t=e.charCodeAt(0);if(t!==104&&t!==72)return;const n=e.match(ba.re);if(!n)return;const[,a,s,o,u,c]=n;return Bh.set({h:ba._hue2deg(a),s:Pt.channel.clamp.s(parseFloat(s)),l:Pt.channel.clamp.l(parseFloat(o)),a:u?Pt.channel.clamp.a(c?parseFloat(u)/100:parseFloat(u)):1},e)},stringify:e=>{const{h:t,s:n,l:a,a:s}=e;return s<1?`hsla(${Pt.lang.round(t)}, ${Pt.lang.round(n)}%, ${Pt.lang.round(a)}%, ${s})`:`hsl(${Pt.lang.round(t)}, ${Pt.lang.round(n)}%, ${Pt.lang.round(a)}%)`}},Ao={colors:{aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyanaqua:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",transparent:"#00000000",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},parse:e=>{e=e.toLowerCase();const t=Ao.colors[e];if(t)return ks.parse(t)},stringify:e=>{const t=ks.stringify(e);for(const n in Ao.colors)if(Ao.colors[n]===t)return n}},vo={re:/^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,parse:e=>{const t=e.charCodeAt(0);if(t!==114&&t!==82)return;const n=e.match(vo.re);if(!n)return;const[,a,s,o,u,c,g,d,f]=n;return Bh.set({r:Pt.channel.clamp.r(s?parseFloat(a)*2.55:parseFloat(a)),g:Pt.channel.clamp.g(u?parseFloat(o)*2.55:parseFloat(o)),b:Pt.channel.clamp.b(g?parseFloat(c)*2.55:parseFloat(c)),a:d?Pt.channel.clamp.a(f?parseFloat(d)/100:parseFloat(d)):1},e)},stringify:e=>{const{r:t,g:n,b:a,a:s}=e;return s<1?`rgba(${Pt.lang.round(t)}, ${Pt.lang.round(n)}, ${Pt.lang.round(a)}, ${Pt.lang.round(s)})`:`rgb(${Pt.lang.round(t)}, ${Pt.lang.round(n)}, ${Pt.lang.round(a)})`}},_n={format:{keyword:Ao,hex:ks,rgb:vo,rgba:vo,hsl:ba,hsla:ba},parse:e=>{if(typeof e!="string")return e;const t=ks.parse(e)||vo.parse(e)||ba.parse(e)||Ao.parse(e);if(t)return t;throw new Error(`Unsupported color format: "${e}"`)},stringify:e=>!e.changed&&e.color?e.color:e.type.is(Ze.HSL)||e.data.r===void 0?ba.stringify(e):e.a<1||!Number.isInteger(e.r)||!Number.isInteger(e.g)||!Number.isInteger(e.b)?vo.stringify(e):ks.stringify(e)},Wx=(e,t)=>{const n=_n.parse(e);for(const a in t)n[a]=Pt.channel.clamp[a](t[a]);return _n.stringify(n)},Eo=(e,t,n=0,a=1)=>{if(typeof e!="number")return Wx(e,{a:t});const s=Bh.set({r:Pt.channel.clamp.r(e),g:Pt.channel.clamp.g(t),b:Pt.channel.clamp.b(n),a:Pt.channel.clamp.a(a)});return _n.stringify(s)},gM=e=>{const{r:t,g:n,b:a}=_n.parse(e),s=.2126*Pt.channel.toLinear(t)+.7152*Pt.channel.toLinear(n)+.0722*Pt.channel.toLinear(a);return Pt.lang.round(s)},fM=e=>gM(e)>=.5,Qo=e=>!fM(e),Vx=(e,t,n)=>{const a=_n.parse(e),s=a[t],o=Pt.channel.clamp[t](s+n);return s!==o&&(a[t]=o),_n.stringify(a)},bt=(e,t)=>Vx(e,"l",t),kt=(e,t)=>Vx(e,"l",-t),U=(e,t)=>{const n=_n.parse(e),a={};for(const s in t)t[s]&&(a[s]=n[s]+t[s]);return Wx(e,a)},pM=(e,t,n=50)=>{const{r:a,g:s,b:o,a:u}=_n.parse(e),{r:c,g,b:d,a:f}=_n.parse(t),m=n/100,y=m*2-1,v=u-f,C=((y*v===-1?y:(y+v)/(1+y*v))+1)/2,T=1-C,w=a*C+c*T,k=s*C+g*T,E=o*C+d*T,O=u*m+f*(1-m);return Eo(w,k,E,O)},dt=(e,t=100)=>{const n=_n.parse(e);return n.r=255-n.r,n.g=255-n.g,n.b=255-n.b,pM(n,e,t)};/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */const{entries:Xx,setPrototypeOf:Qv,isFrozen:mM,getPrototypeOf:yM,getOwnPropertyDescriptor:bM}=Object;let{freeze:ci,seal:Wi,create:Qx}=Object,{apply:Vf,construct:Xf}=typeof Reflect<"u"&&Reflect;ci||(ci=function(t){return t});Wi||(Wi=function(t){return t});Vf||(Vf=function(t,n,a){return t.apply(n,a)});Xf||(Xf=function(t,n){return new t(...n)});const vu=ui(Array.prototype.forEach),vM=ui(Array.prototype.lastIndexOf),Kv=ui(Array.prototype.pop),ao=ui(Array.prototype.push),SM=ui(Array.prototype.splice),Ou=ui(String.prototype.toLowerCase),_f=ui(String.prototype.toString),Zv=ui(String.prototype.match),so=ui(String.prototype.replace),xM=ui(String.prototype.indexOf),CM=ui(String.prototype.trim),nn=ui(Object.prototype.hasOwnProperty),ai=ui(RegExp.prototype.test),lo=_M(TypeError);function ui(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,a=new Array(n>1?n-1:0),s=1;s<n;s++)a[s-1]=arguments[s];return Vf(e,t,a)}}function _M(e){return function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return Xf(e,n)}}function Ut(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ou;Qv&&Qv(e,null);let a=t.length;for(;a--;){let s=t[a];if(typeof s=="string"){const o=n(s);o!==s&&(mM(t)||(t[a]=o),s=o)}e[s]=!0}return e}function wM(e){for(let t=0;t<e.length;t++)nn(e,t)||(e[t]=null);return e}function Kn(e){const t=Qx(null);for(const[n,a]of Xx(e))nn(e,n)&&(Array.isArray(a)?t[n]=wM(a):a&&typeof a=="object"&&a.constructor===Object?t[n]=Kn(a):t[n]=a);return t}function oo(e,t){for(;e!==null;){const a=bM(e,t);if(a){if(a.get)return ui(a.get);if(typeof a.value=="function")return ui(a.value)}e=yM(e)}function n(){return null}return n}const Jv=ci(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),wf=ci(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Tf=ci(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),TM=ci(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),kf=ci(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),kM=ci(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),tS=ci(["#text"]),eS=ci(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Af=ci(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),iS=ci(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Su=ci(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),AM=Wi(/\{\{[\w\W]*|[\w\W]*\}\}/gm),EM=Wi(/<%[\w\W]*|[\w\W]*%>/gm),RM=Wi(/\$\{[\w\W]*/gm),MM=Wi(/^data-[\-\w.\u00B7-\uFFFF]+$/),DM=Wi(/^aria-[\-\w]+$/),Kx=Wi(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),LM=Wi(/^(?:\w+script|data):/i),BM=Wi(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Zx=Wi(/^html$/i),OM=Wi(/^[a-z][.\w]*(-[.\w]+)+$/i);var nS=Object.freeze({__proto__:null,ARIA_ATTR:DM,ATTR_WHITESPACE:BM,CUSTOM_ELEMENT:OM,DATA_ATTR:MM,DOCTYPE_NAME:Zx,ERB_EXPR:EM,IS_ALLOWED_URI:Kx,IS_SCRIPT_OR_DATA:LM,MUSTACHE_EXPR:AM,TMPLIT_EXPR:RM});const co={element:1,text:3,progressingInstruction:7,comment:8,document:9},PM=function(){return typeof window>"u"?null:window},NM=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let a=null;const s="data-tt-policy-suffix";n&&n.hasAttribute(s)&&(a=n.getAttribute(s));const o="dompurify"+(a?"#"+a:"");try{return t.createPolicy(o,{createHTML(u){return u},createScriptURL(u){return u}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},rS=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Jx(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:PM();const t=_t=>Jx(_t);if(t.version="3.2.6",t.removed=[],!e||!e.document||e.document.nodeType!==co.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const a=n,s=a.currentScript,{DocumentFragment:o,HTMLTemplateElement:u,Node:c,Element:g,NodeFilter:d,NamedNodeMap:f=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:m,DOMParser:y,trustedTypes:v}=e,S=g.prototype,C=oo(S,"cloneNode"),T=oo(S,"remove"),w=oo(S,"nextSibling"),k=oo(S,"childNodes"),E=oo(S,"parentNode");if(typeof u=="function"){const _t=n.createElement("template");_t.content&&_t.content.ownerDocument&&(n=_t.content.ownerDocument)}let O,L="";const{implementation:R,createNodeIterator:P,createDocumentFragment:J,getElementsByTagName:nt}=n,{importNode:rt}=a;let X=rS();t.isSupported=typeof Xx=="function"&&typeof E=="function"&&R&&R.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:lt,ERB_EXPR:at,TMPLIT_EXPR:W,DATA_ATTR:j,ARIA_ATTR:M,IS_SCRIPT_OR_DATA:F,ATTR_WHITESPACE:$,CUSTOM_ELEMENT:ut}=nS;let{IS_ALLOWED_URI:D}=nS,H=null;const ot=Ut({},[...Jv,...wf,...Tf,...kf,...tS]);let et=null;const gt=Ut({},[...eS,...Af,...iS,...Su]);let pt=Object.seal(Qx(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ht=null,Dt=null,Bt=!0,Ht=!0,Zt=!1,oe=!0,ke=!1,hi=!0,ni=!1,tl=!1,el=!1,Fe=!1,Fa=!1,Wr=!1,il=!0,Vr=!1;const sd="user-content-";let $a=!0,Xr=!1,cr={},Pi=null;const Ye=Ut({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Qi=null;const We=Ut({},["audio","video","img","source","image","track"]);let nl=null;const sc=Ut({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),za="http://www.w3.org/1998/Math/MathML",Rn="http://www.w3.org/2000/svg",di="http://www.w3.org/1999/xhtml";let gi=di,ur=!1,Mn=null;const ld=Ut({},[za,Rn,di],_f);let Qr=Ut({},["mi","mo","mn","ms","mtext"]),Kr=Ut({},["annotation-xml"]);const rl=Ut({},["title","style","font","a","script"]);let Ki=null;const od=["application/xhtml+xml","text/html"],lc="text/html";let ye=null,cn=null;const al=n.createElement("form"),sl=function(I){return I instanceof RegExp||I instanceof Function},ll=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(cn&&cn===I)){if((!I||typeof I!="object")&&(I={}),I=Kn(I),Ki=od.indexOf(I.PARSER_MEDIA_TYPE)===-1?lc:I.PARSER_MEDIA_TYPE,ye=Ki==="application/xhtml+xml"?_f:Ou,H=nn(I,"ALLOWED_TAGS")?Ut({},I.ALLOWED_TAGS,ye):ot,et=nn(I,"ALLOWED_ATTR")?Ut({},I.ALLOWED_ATTR,ye):gt,Mn=nn(I,"ALLOWED_NAMESPACES")?Ut({},I.ALLOWED_NAMESPACES,_f):ld,nl=nn(I,"ADD_URI_SAFE_ATTR")?Ut(Kn(sc),I.ADD_URI_SAFE_ATTR,ye):sc,Qi=nn(I,"ADD_DATA_URI_TAGS")?Ut(Kn(We),I.ADD_DATA_URI_TAGS,ye):We,Pi=nn(I,"FORBID_CONTENTS")?Ut({},I.FORBID_CONTENTS,ye):Ye,ht=nn(I,"FORBID_TAGS")?Ut({},I.FORBID_TAGS,ye):Kn({}),Dt=nn(I,"FORBID_ATTR")?Ut({},I.FORBID_ATTR,ye):Kn({}),cr=nn(I,"USE_PROFILES")?I.USE_PROFILES:!1,Bt=I.ALLOW_ARIA_ATTR!==!1,Ht=I.ALLOW_DATA_ATTR!==!1,Zt=I.ALLOW_UNKNOWN_PROTOCOLS||!1,oe=I.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ke=I.SAFE_FOR_TEMPLATES||!1,hi=I.SAFE_FOR_XML!==!1,ni=I.WHOLE_DOCUMENT||!1,Fe=I.RETURN_DOM||!1,Fa=I.RETURN_DOM_FRAGMENT||!1,Wr=I.RETURN_TRUSTED_TYPE||!1,el=I.FORCE_BODY||!1,il=I.SANITIZE_DOM!==!1,Vr=I.SANITIZE_NAMED_PROPS||!1,$a=I.KEEP_CONTENT!==!1,Xr=I.IN_PLACE||!1,D=I.ALLOWED_URI_REGEXP||Kx,gi=I.NAMESPACE||di,Qr=I.MATHML_TEXT_INTEGRATION_POINTS||Qr,Kr=I.HTML_INTEGRATION_POINTS||Kr,pt=I.CUSTOM_ELEMENT_HANDLING||{},I.CUSTOM_ELEMENT_HANDLING&&sl(I.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(pt.tagNameCheck=I.CUSTOM_ELEMENT_HANDLING.tagNameCheck),I.CUSTOM_ELEMENT_HANDLING&&sl(I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(pt.attributeNameCheck=I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),I.CUSTOM_ELEMENT_HANDLING&&typeof I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(pt.allowCustomizedBuiltInElements=I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ke&&(Ht=!1),Fa&&(Fe=!0),cr&&(H=Ut({},tS),et=[],cr.html===!0&&(Ut(H,Jv),Ut(et,eS)),cr.svg===!0&&(Ut(H,wf),Ut(et,Af),Ut(et,Su)),cr.svgFilters===!0&&(Ut(H,Tf),Ut(et,Af),Ut(et,Su)),cr.mathMl===!0&&(Ut(H,kf),Ut(et,iS),Ut(et,Su))),I.ADD_TAGS&&(H===ot&&(H=Kn(H)),Ut(H,I.ADD_TAGS,ye)),I.ADD_ATTR&&(et===gt&&(et=Kn(et)),Ut(et,I.ADD_ATTR,ye)),I.ADD_URI_SAFE_ATTR&&Ut(nl,I.ADD_URI_SAFE_ATTR,ye),I.FORBID_CONTENTS&&(Pi===Ye&&(Pi=Kn(Pi)),Ut(Pi,I.FORBID_CONTENTS,ye)),$a&&(H["#text"]=!0),ni&&Ut(H,["html","head","body"]),H.table&&(Ut(H,["tbody"]),delete ht.tbody),I.TRUSTED_TYPES_POLICY){if(typeof I.TRUSTED_TYPES_POLICY.createHTML!="function")throw lo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof I.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw lo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');O=I.TRUSTED_TYPES_POLICY,L=O.createHTML("")}else O===void 0&&(O=NM(v,s)),O!==null&&typeof L=="string"&&(L=O.createHTML(""));ci&&ci(I),cn=I}},Zi=Ut({},[...wf,...Tf,...TM]),Ae=Ut({},[...kf,...kM]),Ve=function(I){let ct=E(I);(!ct||!ct.tagName)&&(ct={namespaceURI:gi,tagName:"template"});const mt=Ou(I.tagName),se=Ou(ct.tagName);return Mn[I.namespaceURI]?I.namespaceURI===Rn?ct.namespaceURI===di?mt==="svg":ct.namespaceURI===za?mt==="svg"&&(se==="annotation-xml"||Qr[se]):!!Zi[mt]:I.namespaceURI===za?ct.namespaceURI===di?mt==="math":ct.namespaceURI===Rn?mt==="math"&&Kr[se]:!!Ae[mt]:I.namespaceURI===di?ct.namespaceURI===Rn&&!Kr[se]||ct.namespaceURI===za&&!Qr[se]?!1:!Ae[mt]&&(rl[mt]||!Zi[mt]):!!(Ki==="application/xhtml+xml"&&Mn[I.namespaceURI]):!1},$e=function(I){ao(t.removed,{element:I});try{E(I).removeChild(I)}catch{T(I)}},un=function(I,ct){try{ao(t.removed,{attribute:ct.getAttributeNode(I),from:ct})}catch{ao(t.removed,{attribute:null,from:ct})}if(ct.removeAttribute(I),I==="is")if(Fe||Fa)try{$e(ct)}catch{}else try{ct.setAttribute(I,"")}catch{}},oc=function(I){let ct=null,mt=null;if(el)I="<remove></remove>"+I;else{const fe=Zv(I,/^[\r\n\t ]+/);mt=fe&&fe[0]}Ki==="application/xhtml+xml"&&gi===di&&(I='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+I+"</body></html>");const se=O?O.createHTML(I):I;if(gi===di)try{ct=new y().parseFromString(se,Ki)}catch{}if(!ct||!ct.documentElement){ct=R.createDocument(gi,"template",null);try{ct.documentElement.innerHTML=ur?L:se}catch{}}const Ee=ct.body||ct.documentElement;return I&&mt&&Ee.insertBefore(n.createTextNode(mt),Ee.childNodes[0]||null),gi===di?nt.call(ct,ni?"html":"body")[0]:ni?ct.documentElement:Ee},cc=function(I){return P.call(I.ownerDocument||I,I,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Ua=function(I){return I instanceof m&&(typeof I.nodeName!="string"||typeof I.textContent!="string"||typeof I.removeChild!="function"||!(I.attributes instanceof f)||typeof I.removeAttribute!="function"||typeof I.setAttribute!="function"||typeof I.namespaceURI!="string"||typeof I.insertBefore!="function"||typeof I.hasChildNodes!="function")},hr=function(I){return typeof c=="function"&&I instanceof c};function _i(_t,I,ct){vu(_t,mt=>{mt.call(t,I,ct,cn)})}const Dn=function(I){let ct=null;if(_i(X.beforeSanitizeElements,I,null),Ua(I))return $e(I),!0;const mt=ye(I.nodeName);if(_i(X.uponSanitizeElement,I,{tagName:mt,allowedTags:H}),hi&&I.hasChildNodes()&&!hr(I.firstElementChild)&&ai(/<[/\w!]/g,I.innerHTML)&&ai(/<[/\w!]/g,I.textContent)||I.nodeType===co.progressingInstruction||hi&&I.nodeType===co.comment&&ai(/<[/\w]/g,I.data))return $e(I),!0;if(!H[mt]||ht[mt]){if(!ht[mt]&&dr(mt)&&(pt.tagNameCheck instanceof RegExp&&ai(pt.tagNameCheck,mt)||pt.tagNameCheck instanceof Function&&pt.tagNameCheck(mt)))return!1;if($a&&!Pi[mt]){const se=E(I)||I.parentNode,Ee=k(I)||I.childNodes;if(Ee&&se){const fe=Ee.length;for(let Xe=fe-1;Xe>=0;--Xe){const fi=C(Ee[Xe],!0);fi.__removalCount=(I.__removalCount||0)+1,se.insertBefore(fi,w(I))}}}return $e(I),!0}return I instanceof g&&!Ve(I)||(mt==="noscript"||mt==="noembed"||mt==="noframes")&&ai(/<\/no(script|embed|frames)/i,I.innerHTML)?($e(I),!0):(ke&&I.nodeType===co.text&&(ct=I.textContent,vu([lt,at,W],se=>{ct=so(ct,se," ")}),I.textContent!==ct&&(ao(t.removed,{element:I.cloneNode()}),I.textContent=ct)),_i(X.afterSanitizeElements,I,null),!1)},Ln=function(I,ct,mt){if(il&&(ct==="id"||ct==="name")&&(mt in n||mt in al))return!1;if(!(Ht&&!Dt[ct]&&ai(j,ct))){if(!(Bt&&ai(M,ct))){if(!et[ct]||Dt[ct]){if(!(dr(I)&&(pt.tagNameCheck instanceof RegExp&&ai(pt.tagNameCheck,I)||pt.tagNameCheck instanceof Function&&pt.tagNameCheck(I))&&(pt.attributeNameCheck instanceof RegExp&&ai(pt.attributeNameCheck,ct)||pt.attributeNameCheck instanceof Function&&pt.attributeNameCheck(ct))||ct==="is"&&pt.allowCustomizedBuiltInElements&&(pt.tagNameCheck instanceof RegExp&&ai(pt.tagNameCheck,mt)||pt.tagNameCheck instanceof Function&&pt.tagNameCheck(mt))))return!1}else if(!nl[ct]){if(!ai(D,so(mt,$,""))){if(!((ct==="src"||ct==="xlink:href"||ct==="href")&&I!=="script"&&xM(mt,"data:")===0&&Qi[I])){if(!(Zt&&!ai(F,so(mt,$,"")))){if(mt)return!1}}}}}}return!0},dr=function(I){return I!=="annotation-xml"&&Zv(I,ut)},Bn=function(I){_i(X.beforeSanitizeAttributes,I,null);const{attributes:ct}=I;if(!ct||Ua(I))return;const mt={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:et,forceKeepAttr:void 0};let se=ct.length;for(;se--;){const Ee=ct[se],{name:fe,namespaceURI:Xe,value:fi}=Ee,hn=ye(fe),wi=fi;let Ce=fe==="value"?wi:CM(wi);if(mt.attrName=hn,mt.attrValue=Ce,mt.keepAttr=!0,mt.forceKeepAttr=void 0,_i(X.uponSanitizeAttribute,I,mt),Ce=mt.attrValue,Vr&&(hn==="id"||hn==="name")&&(un(fe,I),Ce=sd+Ce),hi&&ai(/((--!?|])>)|<\/(style|title)/i,Ce)){un(fe,I);continue}if(mt.forceKeepAttr)continue;if(!mt.keepAttr){un(fe,I);continue}if(!oe&&ai(/\/>/i,Ce)){un(fe,I);continue}ke&&vu([lt,at,W],On=>{Ce=so(Ce,On," ")});const ol=ye(I.nodeName);if(!Ln(ol,hn,Ce)){un(fe,I);continue}if(O&&typeof v=="object"&&typeof v.getAttributeType=="function"&&!Xe)switch(v.getAttributeType(ol,hn)){case"TrustedHTML":{Ce=O.createHTML(Ce);break}case"TrustedScriptURL":{Ce=O.createScriptURL(Ce);break}}if(Ce!==wi)try{Xe?I.setAttributeNS(Xe,fe,Ce):I.setAttribute(fe,Ce),Ua(I)?$e(I):Kv(t.removed)}catch{un(fe,I)}}_i(X.afterSanitizeAttributes,I,null)},xe=function _t(I){let ct=null;const mt=cc(I);for(_i(X.beforeSanitizeShadowDOM,I,null);ct=mt.nextNode();)_i(X.uponSanitizeShadowNode,ct,null),Dn(ct),Bn(ct),ct.content instanceof o&&_t(ct.content);_i(X.afterSanitizeShadowDOM,I,null)};return t.sanitize=function(_t){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ct=null,mt=null,se=null,Ee=null;if(ur=!_t,ur&&(_t="<!-->"),typeof _t!="string"&&!hr(_t))if(typeof _t.toString=="function"){if(_t=_t.toString(),typeof _t!="string")throw lo("dirty is not a string, aborting")}else throw lo("toString is not a function");if(!t.isSupported)return _t;if(tl||ll(I),t.removed=[],typeof _t=="string"&&(Xr=!1),Xr){if(_t.nodeName){const fi=ye(_t.nodeName);if(!H[fi]||ht[fi])throw lo("root node is forbidden and cannot be sanitized in-place")}}else if(_t instanceof c)ct=oc("<!---->"),mt=ct.ownerDocument.importNode(_t,!0),mt.nodeType===co.element&&mt.nodeName==="BODY"||mt.nodeName==="HTML"?ct=mt:ct.appendChild(mt);else{if(!Fe&&!ke&&!ni&&_t.indexOf("<")===-1)return O&&Wr?O.createHTML(_t):_t;if(ct=oc(_t),!ct)return Fe?null:Wr?L:""}ct&&el&&$e(ct.firstChild);const fe=cc(Xr?_t:ct);for(;se=fe.nextNode();)Dn(se),Bn(se),se.content instanceof o&&xe(se.content);if(Xr)return _t;if(Fe){if(Fa)for(Ee=J.call(ct.ownerDocument);ct.firstChild;)Ee.appendChild(ct.firstChild);else Ee=ct;return(et.shadowroot||et.shadowrootmode)&&(Ee=rt.call(a,Ee,!0)),Ee}let Xe=ni?ct.outerHTML:ct.innerHTML;return ni&&H["!doctype"]&&ct.ownerDocument&&ct.ownerDocument.doctype&&ct.ownerDocument.doctype.name&&ai(Zx,ct.ownerDocument.doctype.name)&&(Xe="<!DOCTYPE "+ct.ownerDocument.doctype.name+`>
`+Xe),ke&&vu([lt,at,W],fi=>{Xe=so(Xe,fi," ")}),O&&Wr?O.createHTML(Xe):Xe},t.setConfig=function(){let _t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ll(_t),tl=!0},t.clearConfig=function(){cn=null,tl=!1},t.isValidAttribute=function(_t,I,ct){cn||ll({});const mt=ye(_t),se=ye(I);return Ln(mt,se,ct)},t.addHook=function(_t,I){typeof I=="function"&&ao(X[_t],I)},t.removeHook=function(_t,I){if(I!==void 0){const ct=vM(X[_t],I);return ct===-1?void 0:SM(X[_t],ct,1)[0]}return Kv(X[_t])},t.removeHooks=function(_t){X[_t]=[]},t.removeAllHooks=function(){X=rS()},t}var Is=Jx(),t2=/^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s,Ro=/%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi,IM=/\s*%%.*\n/gm,Rs,e2=(Rs=class extends Error{constructor(t){super(t),this.name="UnknownDiagramError"}},x(Rs,"UnknownDiagramError"),Rs),Ta={},Zp=x(function(e,t){e=e.replace(t2,"").replace(Ro,"").replace(IM,`
`);for(const[n,{detector:a}]of Object.entries(Ta))if(a(e,t))return n;throw new e2(`No diagram type detected matching given configuration for text: ${e}`)},"detectType"),Qf=x((...e)=>{for(const{id:t,detector:n,loader:a}of e)i2(t,n,a)},"registerLazyLoadedDiagrams"),i2=x((e,t,n)=>{Ta[e]&&st.warn(`Detector with key ${e} already exists. Overwriting.`),Ta[e]={detector:t,loader:n},st.debug(`Detector with key ${e} added${n?" with loader":""}`)},"addDetector"),FM=x(e=>Ta[e].loader,"getDiagramLoader"),Kf=x((e,t,{depth:n=2,clobber:a=!1}={})=>{const s={depth:n,clobber:a};return Array.isArray(t)&&!Array.isArray(e)?(t.forEach(o=>Kf(e,o,s)),e):Array.isArray(t)&&Array.isArray(e)?(t.forEach(o=>{e.includes(o)||e.push(o)}),e):e===void 0||n<=0?e!=null&&typeof e=="object"&&typeof t=="object"?Object.assign(e,t):t:(t!==void 0&&typeof e=="object"&&typeof t=="object"&&Object.keys(t).forEach(o=>{typeof t[o]=="object"&&(e[o]===void 0||typeof e[o]=="object")?(e[o]===void 0&&(e[o]=Array.isArray(t[o])?[]:{}),e[o]=Kf(e[o],t[o],{depth:n-1,clobber:a})):(a||typeof e[o]!="object"&&typeof t[o]!="object")&&(e[o]=t[o])}),e)},"assignWithDepth"),Le=Kf,Oh="#ffffff",Ph="#f2f2f2",si=x((e,t)=>t?U(e,{s:-40,l:10}):U(e,{s:-40,l:-10}),"mkBorder"),Ms,$M=(Ms=class{constructor(){this.background="#f4f4f4",this.primaryColor="#fff4dd",this.noteBkgColor="#fff5ad",this.noteTextColor="#333",this.THEME_COLOR_LIMIT=12,this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px"}updateColors(){var n,a,s,o,u,c,g,d,f,m,y,v,S,C,T,w,k,E,O,L,R;if(this.primaryTextColor=this.primaryTextColor||(this.darkMode?"#eee":"#333"),this.secondaryColor=this.secondaryColor||U(this.primaryColor,{h:-120}),this.tertiaryColor=this.tertiaryColor||U(this.primaryColor,{h:180,l:5}),this.primaryBorderColor=this.primaryBorderColor||si(this.primaryColor,this.darkMode),this.secondaryBorderColor=this.secondaryBorderColor||si(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=this.tertiaryBorderColor||si(this.tertiaryColor,this.darkMode),this.noteBorderColor=this.noteBorderColor||si(this.noteBkgColor,this.darkMode),this.noteBkgColor=this.noteBkgColor||"#fff5ad",this.noteTextColor=this.noteTextColor||"#333",this.secondaryTextColor=this.secondaryTextColor||dt(this.secondaryColor),this.tertiaryTextColor=this.tertiaryTextColor||dt(this.tertiaryColor),this.lineColor=this.lineColor||dt(this.background),this.arrowheadColor=this.arrowheadColor||dt(this.background),this.textColor=this.textColor||this.primaryTextColor,this.border2=this.border2||this.tertiaryBorderColor,this.nodeBkg=this.nodeBkg||this.primaryColor,this.mainBkg=this.mainBkg||this.primaryColor,this.nodeBorder=this.nodeBorder||this.primaryBorderColor,this.clusterBkg=this.clusterBkg||this.tertiaryColor,this.clusterBorder=this.clusterBorder||this.tertiaryBorderColor,this.defaultLinkColor=this.defaultLinkColor||this.lineColor,this.titleColor=this.titleColor||this.tertiaryTextColor,this.edgeLabelBackground=this.edgeLabelBackground||(this.darkMode?kt(this.secondaryColor,30):this.secondaryColor),this.nodeTextColor=this.nodeTextColor||this.primaryTextColor,this.actorBorder=this.actorBorder||this.primaryBorderColor,this.actorBkg=this.actorBkg||this.mainBkg,this.actorTextColor=this.actorTextColor||this.primaryTextColor,this.actorLineColor=this.actorLineColor||this.actorBorder,this.labelBoxBkgColor=this.labelBoxBkgColor||this.actorBkg,this.signalColor=this.signalColor||this.textColor,this.signalTextColor=this.signalTextColor||this.textColor,this.labelBoxBorderColor=this.labelBoxBorderColor||this.actorBorder,this.labelTextColor=this.labelTextColor||this.actorTextColor,this.loopTextColor=this.loopTextColor||this.actorTextColor,this.activationBorderColor=this.activationBorderColor||kt(this.secondaryColor,10),this.activationBkgColor=this.activationBkgColor||this.secondaryColor,this.sequenceNumberColor=this.sequenceNumberColor||dt(this.lineColor),this.sectionBkgColor=this.sectionBkgColor||this.tertiaryColor,this.altSectionBkgColor=this.altSectionBkgColor||"white",this.sectionBkgColor=this.sectionBkgColor||this.secondaryColor,this.sectionBkgColor2=this.sectionBkgColor2||this.primaryColor,this.excludeBkgColor=this.excludeBkgColor||"#eeeeee",this.taskBorderColor=this.taskBorderColor||this.primaryBorderColor,this.taskBkgColor=this.taskBkgColor||this.primaryColor,this.activeTaskBorderColor=this.activeTaskBorderColor||this.primaryColor,this.activeTaskBkgColor=this.activeTaskBkgColor||bt(this.primaryColor,23),this.gridColor=this.gridColor||"lightgrey",this.doneTaskBkgColor=this.doneTaskBkgColor||"lightgrey",this.doneTaskBorderColor=this.doneTaskBorderColor||"grey",this.critBorderColor=this.critBorderColor||"#ff8888",this.critBkgColor=this.critBkgColor||"red",this.todayLineColor=this.todayLineColor||"red",this.vertLineColor=this.vertLineColor||"navy",this.taskTextColor=this.taskTextColor||this.textColor,this.taskTextOutsideColor=this.taskTextOutsideColor||this.textColor,this.taskTextLightColor=this.taskTextLightColor||this.textColor,this.taskTextColor=this.taskTextColor||this.primaryTextColor,this.taskTextDarkColor=this.taskTextDarkColor||this.textColor,this.taskTextClickableColor=this.taskTextClickableColor||"#003163",this.personBorder=this.personBorder||this.primaryBorderColor,this.personBkg=this.personBkg||this.mainBkg,this.darkMode?(this.rowOdd=this.rowOdd||kt(this.mainBkg,5)||"#ffffff",this.rowEven=this.rowEven||kt(this.mainBkg,10)):(this.rowOdd=this.rowOdd||bt(this.mainBkg,75)||"#ffffff",this.rowEven=this.rowEven||bt(this.mainBkg,5)),this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||this.tertiaryColor,this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.nodeBorder,this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.specialStateColor=this.lineColor,this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||U(this.primaryColor,{h:30}),this.cScale4=this.cScale4||U(this.primaryColor,{h:60}),this.cScale5=this.cScale5||U(this.primaryColor,{h:90}),this.cScale6=this.cScale6||U(this.primaryColor,{h:120}),this.cScale7=this.cScale7||U(this.primaryColor,{h:150}),this.cScale8=this.cScale8||U(this.primaryColor,{h:210,l:150}),this.cScale9=this.cScale9||U(this.primaryColor,{h:270}),this.cScale10=this.cScale10||U(this.primaryColor,{h:300}),this.cScale11=this.cScale11||U(this.primaryColor,{h:330}),this.darkMode)for(let P=0;P<this.THEME_COLOR_LIMIT;P++)this["cScale"+P]=kt(this["cScale"+P],75);else for(let P=0;P<this.THEME_COLOR_LIMIT;P++)this["cScale"+P]=kt(this["cScale"+P],25);for(let P=0;P<this.THEME_COLOR_LIMIT;P++)this["cScaleInv"+P]=this["cScaleInv"+P]||dt(this["cScale"+P]);for(let P=0;P<this.THEME_COLOR_LIMIT;P++)this.darkMode?this["cScalePeer"+P]=this["cScalePeer"+P]||bt(this["cScale"+P],10):this["cScalePeer"+P]=this["cScalePeer"+P]||kt(this["cScale"+P],10);this.scaleLabelColor=this.scaleLabelColor||this.labelTextColor;for(let P=0;P<this.THEME_COLOR_LIMIT;P++)this["cScaleLabel"+P]=this["cScaleLabel"+P]||this.scaleLabelColor;const t=this.darkMode?-4:-1;for(let P=0;P<5;P++)this["surface"+P]=this["surface"+P]||U(this.mainBkg,{h:180,s:-15,l:t*(5+P*3)}),this["surfacePeer"+P]=this["surfacePeer"+P]||U(this.mainBkg,{h:180,s:-15,l:t*(8+P*3)});this.classText=this.classText||this.textColor,this.fillType0=this.fillType0||this.primaryColor,this.fillType1=this.fillType1||this.secondaryColor,this.fillType2=this.fillType2||U(this.primaryColor,{h:64}),this.fillType3=this.fillType3||U(this.secondaryColor,{h:64}),this.fillType4=this.fillType4||U(this.primaryColor,{h:-64}),this.fillType5=this.fillType5||U(this.secondaryColor,{h:-64}),this.fillType6=this.fillType6||U(this.primaryColor,{h:128}),this.fillType7=this.fillType7||U(this.secondaryColor,{h:128}),this.pie1=this.pie1||this.primaryColor,this.pie2=this.pie2||this.secondaryColor,this.pie3=this.pie3||this.tertiaryColor,this.pie4=this.pie4||U(this.primaryColor,{l:-10}),this.pie5=this.pie5||U(this.secondaryColor,{l:-10}),this.pie6=this.pie6||U(this.tertiaryColor,{l:-10}),this.pie7=this.pie7||U(this.primaryColor,{h:60,l:-10}),this.pie8=this.pie8||U(this.primaryColor,{h:-60,l:-10}),this.pie9=this.pie9||U(this.primaryColor,{h:120,l:0}),this.pie10=this.pie10||U(this.primaryColor,{h:60,l:-20}),this.pie11=this.pie11||U(this.primaryColor,{h:-60,l:-20}),this.pie12=this.pie12||U(this.primaryColor,{h:120,l:-10}),this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.radar={axisColor:((n=this.radar)==null?void 0:n.axisColor)||this.lineColor,axisStrokeWidth:((a=this.radar)==null?void 0:a.axisStrokeWidth)||2,axisLabelFontSize:((s=this.radar)==null?void 0:s.axisLabelFontSize)||12,curveOpacity:((o=this.radar)==null?void 0:o.curveOpacity)||.5,curveStrokeWidth:((u=this.radar)==null?void 0:u.curveStrokeWidth)||2,graticuleColor:((c=this.radar)==null?void 0:c.graticuleColor)||"#DEDEDE",graticuleStrokeWidth:((g=this.radar)==null?void 0:g.graticuleStrokeWidth)||1,graticuleOpacity:((d=this.radar)==null?void 0:d.graticuleOpacity)||.3,legendBoxSize:((f=this.radar)==null?void 0:f.legendBoxSize)||12,legendFontSize:((m=this.radar)==null?void 0:m.legendFontSize)||12},this.archEdgeColor=this.archEdgeColor||"#777",this.archEdgeArrowColor=this.archEdgeArrowColor||"#777",this.archEdgeWidth=this.archEdgeWidth||"3",this.archGroupBorderColor=this.archGroupBorderColor||"#000",this.archGroupBorderWidth=this.archGroupBorderWidth||"2px",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||U(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||U(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||U(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||U(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||U(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||U(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Qo(this.quadrant1Fill)?bt(this.quadrant1Fill):kt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((y=this.xyChart)==null?void 0:y.backgroundColor)||this.background,titleColor:((v=this.xyChart)==null?void 0:v.titleColor)||this.primaryTextColor,xAxisTitleColor:((S=this.xyChart)==null?void 0:S.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((C=this.xyChart)==null?void 0:C.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((T=this.xyChart)==null?void 0:T.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((w=this.xyChart)==null?void 0:w.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((k=this.xyChart)==null?void 0:k.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((E=this.xyChart)==null?void 0:E.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((O=this.xyChart)==null?void 0:O.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((L=this.xyChart)==null?void 0:L.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((R=this.xyChart)==null?void 0:R.plotColorPalette)||"#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||(this.darkMode?kt(this.secondaryColor,30):this.secondaryColor),this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=this.git0||this.primaryColor,this.git1=this.git1||this.secondaryColor,this.git2=this.git2||this.tertiaryColor,this.git3=this.git3||U(this.primaryColor,{h:-30}),this.git4=this.git4||U(this.primaryColor,{h:-60}),this.git5=this.git5||U(this.primaryColor,{h:-90}),this.git6=this.git6||U(this.primaryColor,{h:60}),this.git7=this.git7||U(this.primaryColor,{h:120}),this.darkMode?(this.git0=bt(this.git0,25),this.git1=bt(this.git1,25),this.git2=bt(this.git2,25),this.git3=bt(this.git3,25),this.git4=bt(this.git4,25),this.git5=bt(this.git5,25),this.git6=bt(this.git6,25),this.git7=bt(this.git7,25)):(this.git0=kt(this.git0,25),this.git1=kt(this.git1,25),this.git2=kt(this.git2,25),this.git3=kt(this.git3,25),this.git4=kt(this.git4,25),this.git5=kt(this.git5,25),this.git6=kt(this.git6,25),this.git7=kt(this.git7,25)),this.gitInv0=this.gitInv0||dt(this.git0),this.gitInv1=this.gitInv1||dt(this.git1),this.gitInv2=this.gitInv2||dt(this.git2),this.gitInv3=this.gitInv3||dt(this.git3),this.gitInv4=this.gitInv4||dt(this.git4),this.gitInv5=this.gitInv5||dt(this.git5),this.gitInv6=this.gitInv6||dt(this.git6),this.gitInv7=this.gitInv7||dt(this.git7),this.branchLabelColor=this.branchLabelColor||(this.darkMode?"black":this.labelTextColor),this.gitBranchLabel0=this.gitBranchLabel0||this.branchLabelColor,this.gitBranchLabel1=this.gitBranchLabel1||this.branchLabelColor,this.gitBranchLabel2=this.gitBranchLabel2||this.branchLabelColor,this.gitBranchLabel3=this.gitBranchLabel3||this.branchLabelColor,this.gitBranchLabel4=this.gitBranchLabel4||this.branchLabelColor,this.gitBranchLabel5=this.gitBranchLabel5||this.branchLabelColor,this.gitBranchLabel6=this.gitBranchLabel6||this.branchLabelColor,this.gitBranchLabel7=this.gitBranchLabel7||this.branchLabelColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||Oh,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||Ph}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(a=>{this[a]=t[a]}),this.updateColors(),n.forEach(a=>{this[a]=t[a]})}},x(Ms,"Theme"),Ms),zM=x(e=>{const t=new $M;return t.calculate(e),t},"getThemeVariables"),Ds,UM=(Ds=class{constructor(){this.background="#333",this.primaryColor="#1f2020",this.secondaryColor=bt(this.primaryColor,16),this.tertiaryColor=U(this.primaryColor,{h:-160}),this.primaryBorderColor=dt(this.background),this.secondaryBorderColor=si(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=si(this.tertiaryColor,this.darkMode),this.primaryTextColor=dt(this.primaryColor),this.secondaryTextColor=dt(this.secondaryColor),this.tertiaryTextColor=dt(this.tertiaryColor),this.lineColor=dt(this.background),this.textColor=dt(this.background),this.mainBkg="#1f2020",this.secondBkg="calculated",this.mainContrastColor="lightgrey",this.darkTextColor=bt(dt("#323D47"),10),this.lineColor="calculated",this.border1="#ccc",this.border2=Eo(255,255,255,.25),this.arrowheadColor="calculated",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.labelBackground="#181818",this.textColor="#ccc",this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="#F9FFFE",this.edgeLabelBackground="calculated",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="calculated",this.actorLineColor="calculated",this.signalColor="calculated",this.signalTextColor="calculated",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="calculated",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="#fff5ad",this.noteTextColor="calculated",this.activationBorderColor="calculated",this.activationBkgColor="calculated",this.sequenceNumberColor="black",this.sectionBkgColor=kt("#EAE8D9",30),this.altSectionBkgColor="calculated",this.sectionBkgColor2="#EAE8D9",this.excludeBkgColor=kt(this.sectionBkgColor,10),this.taskBorderColor=Eo(255,255,255,70),this.taskBkgColor="calculated",this.taskTextColor="calculated",this.taskTextLightColor="calculated",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor=Eo(255,255,255,50),this.activeTaskBkgColor="#81B1DB",this.gridColor="calculated",this.doneTaskBkgColor="calculated",this.doneTaskBorderColor="grey",this.critBorderColor="#E83737",this.critBkgColor="#E83737",this.taskTextDarkColor="calculated",this.todayLineColor="#DB5757",this.vertLineColor="#00BFFF",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.archEdgeColor="calculated",this.archEdgeArrowColor="calculated",this.archEdgeWidth="3",this.archGroupBorderColor=this.primaryBorderColor,this.archGroupBorderWidth="2px",this.rowOdd=this.rowOdd||bt(this.mainBkg,5)||"#ffffff",this.rowEven=this.rowEven||kt(this.mainBkg,10),this.labelColor="calculated",this.errorBkgColor="#a44141",this.errorTextColor="#ddd"}updateColors(){var t,n,a,s,o,u,c,g,d,f,m,y,v,S,C,T,w,k,E,O,L;this.secondBkg=bt(this.mainBkg,16),this.lineColor=this.mainContrastColor,this.arrowheadColor=this.mainContrastColor,this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.edgeLabelBackground=bt(this.labelBackground,25),this.actorBorder=this.border1,this.actorBkg=this.mainBkg,this.actorTextColor=this.mainContrastColor,this.actorLineColor=this.actorBorder,this.signalColor=this.mainContrastColor,this.signalTextColor=this.mainContrastColor,this.labelBoxBkgColor=this.actorBkg,this.labelBoxBorderColor=this.actorBorder,this.labelTextColor=this.mainContrastColor,this.loopTextColor=this.mainContrastColor,this.noteBorderColor=this.secondaryBorderColor,this.noteBkgColor=this.secondBkg,this.noteTextColor=this.secondaryTextColor,this.activationBorderColor=this.border1,this.activationBkgColor=this.secondBkg,this.altSectionBkgColor=this.background,this.taskBkgColor=bt(this.mainBkg,23),this.taskTextColor=this.darkTextColor,this.taskTextLightColor=this.mainContrastColor,this.taskTextOutsideColor=this.taskTextLightColor,this.gridColor=this.mainContrastColor,this.doneTaskBkgColor=this.mainContrastColor,this.taskTextDarkColor=this.darkTextColor,this.archEdgeColor=this.lineColor,this.archEdgeArrowColor=this.lineColor,this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#555",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.primaryBorderColor,this.specialStateColor="#f4f4f4",this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=U(this.primaryColor,{h:64}),this.fillType3=U(this.secondaryColor,{h:64}),this.fillType4=U(this.primaryColor,{h:-64}),this.fillType5=U(this.secondaryColor,{h:-64}),this.fillType6=U(this.primaryColor,{h:128}),this.fillType7=U(this.secondaryColor,{h:128}),this.cScale1=this.cScale1||"#0b0000",this.cScale2=this.cScale2||"#4d1037",this.cScale3=this.cScale3||"#3f5258",this.cScale4=this.cScale4||"#4f2f1b",this.cScale5=this.cScale5||"#6e0a0a",this.cScale6=this.cScale6||"#3b0048",this.cScale7=this.cScale7||"#995a01",this.cScale8=this.cScale8||"#154706",this.cScale9=this.cScale9||"#161722",this.cScale10=this.cScale10||"#00296f",this.cScale11=this.cScale11||"#01629c",this.cScale12=this.cScale12||"#010029",this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||U(this.primaryColor,{h:30}),this.cScale4=this.cScale4||U(this.primaryColor,{h:60}),this.cScale5=this.cScale5||U(this.primaryColor,{h:90}),this.cScale6=this.cScale6||U(this.primaryColor,{h:120}),this.cScale7=this.cScale7||U(this.primaryColor,{h:150}),this.cScale8=this.cScale8||U(this.primaryColor,{h:210}),this.cScale9=this.cScale9||U(this.primaryColor,{h:270}),this.cScale10=this.cScale10||U(this.primaryColor,{h:300}),this.cScale11=this.cScale11||U(this.primaryColor,{h:330});for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleInv"+R]=this["cScaleInv"+R]||dt(this["cScale"+R]);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScalePeer"+R]=this["cScalePeer"+R]||bt(this["cScale"+R],10);for(let R=0;R<5;R++)this["surface"+R]=this["surface"+R]||U(this.mainBkg,{h:30,s:-30,l:-(-10+R*4)}),this["surfacePeer"+R]=this["surfacePeer"+R]||U(this.mainBkg,{h:30,s:-30,l:-(-7+R*4)});this.scaleLabelColor=this.scaleLabelColor||(this.darkMode?"black":this.labelTextColor);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleLabel"+R]=this["cScaleLabel"+R]||this.scaleLabelColor;for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["pie"+R]=this["cScale"+R];this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||U(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||U(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||U(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||U(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||U(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||U(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Qo(this.quadrant1Fill)?bt(this.quadrant1Fill):kt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((a=this.xyChart)==null?void 0:a.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((s=this.xyChart)==null?void 0:s.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((o=this.xyChart)==null?void 0:o.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((u=this.xyChart)==null?void 0:u.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((c=this.xyChart)==null?void 0:c.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((g=this.xyChart)==null?void 0:g.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((d=this.xyChart)==null?void 0:d.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((f=this.xyChart)==null?void 0:f.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((m=this.xyChart)==null?void 0:m.plotColorPalette)||"#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"},this.packet={startByteColor:this.primaryTextColor,endByteColor:this.primaryTextColor,labelColor:this.primaryTextColor,titleColor:this.primaryTextColor,blockStrokeColor:this.primaryTextColor,blockFillColor:this.background},this.radar={axisColor:((y=this.radar)==null?void 0:y.axisColor)||this.lineColor,axisStrokeWidth:((v=this.radar)==null?void 0:v.axisStrokeWidth)||2,axisLabelFontSize:((S=this.radar)==null?void 0:S.axisLabelFontSize)||12,curveOpacity:((C=this.radar)==null?void 0:C.curveOpacity)||.5,curveStrokeWidth:((T=this.radar)==null?void 0:T.curveStrokeWidth)||2,graticuleColor:((w=this.radar)==null?void 0:w.graticuleColor)||"#DEDEDE",graticuleStrokeWidth:((k=this.radar)==null?void 0:k.graticuleStrokeWidth)||1,graticuleOpacity:((E=this.radar)==null?void 0:E.graticuleOpacity)||.3,legendBoxSize:((O=this.radar)==null?void 0:O.legendBoxSize)||12,legendFontSize:((L=this.radar)==null?void 0:L.legendFontSize)||12},this.classText=this.primaryTextColor,this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||(this.darkMode?kt(this.secondaryColor,30):this.secondaryColor),this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=bt(this.secondaryColor,20),this.git1=bt(this.pie2||this.secondaryColor,20),this.git2=bt(this.pie3||this.tertiaryColor,20),this.git3=bt(this.pie4||U(this.primaryColor,{h:-30}),20),this.git4=bt(this.pie5||U(this.primaryColor,{h:-60}),20),this.git5=bt(this.pie6||U(this.primaryColor,{h:-90}),10),this.git6=bt(this.pie7||U(this.primaryColor,{h:60}),10),this.git7=bt(this.pie8||U(this.primaryColor,{h:120}),20),this.gitInv0=this.gitInv0||dt(this.git0),this.gitInv1=this.gitInv1||dt(this.git1),this.gitInv2=this.gitInv2||dt(this.git2),this.gitInv3=this.gitInv3||dt(this.git3),this.gitInv4=this.gitInv4||dt(this.git4),this.gitInv5=this.gitInv5||dt(this.git5),this.gitInv6=this.gitInv6||dt(this.git6),this.gitInv7=this.gitInv7||dt(this.git7),this.gitBranchLabel0=this.gitBranchLabel0||dt(this.labelTextColor),this.gitBranchLabel1=this.gitBranchLabel1||this.labelTextColor,this.gitBranchLabel2=this.gitBranchLabel2||this.labelTextColor,this.gitBranchLabel3=this.gitBranchLabel3||dt(this.labelTextColor),this.gitBranchLabel4=this.gitBranchLabel4||this.labelTextColor,this.gitBranchLabel5=this.gitBranchLabel5||this.labelTextColor,this.gitBranchLabel6=this.gitBranchLabel6||this.labelTextColor,this.gitBranchLabel7=this.gitBranchLabel7||this.labelTextColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||bt(this.background,12),this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||bt(this.background,2),this.nodeBorder=this.nodeBorder||"#999"}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(a=>{this[a]=t[a]}),this.updateColors(),n.forEach(a=>{this[a]=t[a]})}},x(Ds,"Theme"),Ds),qM=x(e=>{const t=new UM;return t.calculate(e),t},"getThemeVariables"),Ls,HM=(Ls=class{constructor(){this.background="#f4f4f4",this.primaryColor="#ECECFF",this.secondaryColor=U(this.primaryColor,{h:120}),this.secondaryColor="#ffffde",this.tertiaryColor=U(this.primaryColor,{h:-160}),this.primaryBorderColor=si(this.primaryColor,this.darkMode),this.secondaryBorderColor=si(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=si(this.tertiaryColor,this.darkMode),this.primaryTextColor=dt(this.primaryColor),this.secondaryTextColor=dt(this.secondaryColor),this.tertiaryTextColor=dt(this.tertiaryColor),this.lineColor=dt(this.background),this.textColor=dt(this.background),this.background="white",this.mainBkg="#ECECFF",this.secondBkg="#ffffde",this.lineColor="#333333",this.border1="#9370DB",this.border2="#aaaa33",this.arrowheadColor="#333333",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.labelBackground="rgba(232,232,232, 0.8)",this.textColor="#333",this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="calculated",this.edgeLabelBackground="calculated",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="black",this.actorLineColor="calculated",this.signalColor="calculated",this.signalTextColor="calculated",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="calculated",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="#fff5ad",this.noteTextColor="calculated",this.activationBorderColor="#666",this.activationBkgColor="#f4f4f4",this.sequenceNumberColor="white",this.sectionBkgColor="calculated",this.altSectionBkgColor="calculated",this.sectionBkgColor2="calculated",this.excludeBkgColor="#eeeeee",this.taskBorderColor="calculated",this.taskBkgColor="calculated",this.taskTextLightColor="calculated",this.taskTextColor=this.taskTextLightColor,this.taskTextDarkColor="calculated",this.taskTextOutsideColor=this.taskTextDarkColor,this.taskTextClickableColor="calculated",this.activeTaskBorderColor="calculated",this.activeTaskBkgColor="calculated",this.gridColor="calculated",this.doneTaskBkgColor="calculated",this.doneTaskBorderColor="calculated",this.critBorderColor="calculated",this.critBkgColor="calculated",this.todayLineColor="calculated",this.vertLineColor="calculated",this.sectionBkgColor=Eo(102,102,255,.49),this.altSectionBkgColor="white",this.sectionBkgColor2="#fff400",this.taskBorderColor="#534fbc",this.taskBkgColor="#8a90dd",this.taskTextLightColor="white",this.taskTextColor="calculated",this.taskTextDarkColor="black",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor="#534fbc",this.activeTaskBkgColor="#bfc7ff",this.gridColor="lightgrey",this.doneTaskBkgColor="lightgrey",this.doneTaskBorderColor="grey",this.critBorderColor="#ff8888",this.critBkgColor="red",this.todayLineColor="red",this.vertLineColor="navy",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.archEdgeColor="calculated",this.archEdgeArrowColor="calculated",this.archEdgeWidth="3",this.archGroupBorderColor=this.primaryBorderColor,this.archGroupBorderWidth="2px",this.rowOdd="calculated",this.rowEven="calculated",this.labelColor="black",this.errorBkgColor="#552222",this.errorTextColor="#552222",this.updateColors()}updateColors(){var t,n,a,s,o,u,c,g,d,f,m,y,v,S,C,T,w,k,E,O,L;this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||U(this.primaryColor,{h:30}),this.cScale4=this.cScale4||U(this.primaryColor,{h:60}),this.cScale5=this.cScale5||U(this.primaryColor,{h:90}),this.cScale6=this.cScale6||U(this.primaryColor,{h:120}),this.cScale7=this.cScale7||U(this.primaryColor,{h:150}),this.cScale8=this.cScale8||U(this.primaryColor,{h:210}),this.cScale9=this.cScale9||U(this.primaryColor,{h:270}),this.cScale10=this.cScale10||U(this.primaryColor,{h:300}),this.cScale11=this.cScale11||U(this.primaryColor,{h:330}),this.cScalePeer1=this.cScalePeer1||kt(this.secondaryColor,45),this.cScalePeer2=this.cScalePeer2||kt(this.tertiaryColor,40);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScale"+R]=kt(this["cScale"+R],10),this["cScalePeer"+R]=this["cScalePeer"+R]||kt(this["cScale"+R],25);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleInv"+R]=this["cScaleInv"+R]||U(this["cScale"+R],{h:180});for(let R=0;R<5;R++)this["surface"+R]=this["surface"+R]||U(this.mainBkg,{h:30,l:-(5+R*5)}),this["surfacePeer"+R]=this["surfacePeer"+R]||U(this.mainBkg,{h:30,l:-(7+R*5)});if(this.scaleLabelColor=this.scaleLabelColor!=="calculated"&&this.scaleLabelColor?this.scaleLabelColor:this.labelTextColor,this.labelTextColor!=="calculated"){this.cScaleLabel0=this.cScaleLabel0||dt(this.labelTextColor),this.cScaleLabel3=this.cScaleLabel3||dt(this.labelTextColor);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleLabel"+R]=this["cScaleLabel"+R]||this.labelTextColor}this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.titleColor=this.textColor,this.edgeLabelBackground=this.labelBackground,this.actorBorder=bt(this.border1,23),this.actorBkg=this.mainBkg,this.labelBoxBkgColor=this.actorBkg,this.signalColor=this.textColor,this.signalTextColor=this.textColor,this.labelBoxBorderColor=this.actorBorder,this.labelTextColor=this.actorTextColor,this.loopTextColor=this.actorTextColor,this.noteBorderColor=this.border2,this.noteTextColor=this.actorTextColor,this.actorLineColor=this.actorBorder,this.taskTextColor=this.taskTextLightColor,this.taskTextOutsideColor=this.taskTextDarkColor,this.archEdgeColor=this.lineColor,this.archEdgeArrowColor=this.lineColor,this.rowOdd=this.rowOdd||bt(this.primaryColor,75)||"#ffffff",this.rowEven=this.rowEven||bt(this.primaryColor,1),this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#f0f0f0",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.nodeBorder,this.specialStateColor=this.lineColor,this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.classText=this.primaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=U(this.primaryColor,{h:64}),this.fillType3=U(this.secondaryColor,{h:64}),this.fillType4=U(this.primaryColor,{h:-64}),this.fillType5=U(this.secondaryColor,{h:-64}),this.fillType6=U(this.primaryColor,{h:128}),this.fillType7=U(this.secondaryColor,{h:128}),this.pie1=this.pie1||this.primaryColor,this.pie2=this.pie2||this.secondaryColor,this.pie3=this.pie3||U(this.tertiaryColor,{l:-40}),this.pie4=this.pie4||U(this.primaryColor,{l:-10}),this.pie5=this.pie5||U(this.secondaryColor,{l:-30}),this.pie6=this.pie6||U(this.tertiaryColor,{l:-20}),this.pie7=this.pie7||U(this.primaryColor,{h:60,l:-20}),this.pie8=this.pie8||U(this.primaryColor,{h:-60,l:-40}),this.pie9=this.pie9||U(this.primaryColor,{h:120,l:-40}),this.pie10=this.pie10||U(this.primaryColor,{h:60,l:-40}),this.pie11=this.pie11||U(this.primaryColor,{h:-90,l:-40}),this.pie12=this.pie12||U(this.primaryColor,{h:120,l:-30}),this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||U(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||U(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||U(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||U(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||U(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||U(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Qo(this.quadrant1Fill)?bt(this.quadrant1Fill):kt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.radar={axisColor:((t=this.radar)==null?void 0:t.axisColor)||this.lineColor,axisStrokeWidth:((n=this.radar)==null?void 0:n.axisStrokeWidth)||2,axisLabelFontSize:((a=this.radar)==null?void 0:a.axisLabelFontSize)||12,curveOpacity:((s=this.radar)==null?void 0:s.curveOpacity)||.5,curveStrokeWidth:((o=this.radar)==null?void 0:o.curveStrokeWidth)||2,graticuleColor:((u=this.radar)==null?void 0:u.graticuleColor)||"#DEDEDE",graticuleStrokeWidth:((c=this.radar)==null?void 0:c.graticuleStrokeWidth)||1,graticuleOpacity:((g=this.radar)==null?void 0:g.graticuleOpacity)||.3,legendBoxSize:((d=this.radar)==null?void 0:d.legendBoxSize)||12,legendFontSize:((f=this.radar)==null?void 0:f.legendFontSize)||12},this.xyChart={backgroundColor:((m=this.xyChart)==null?void 0:m.backgroundColor)||this.background,titleColor:((y=this.xyChart)==null?void 0:y.titleColor)||this.primaryTextColor,xAxisTitleColor:((v=this.xyChart)==null?void 0:v.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((S=this.xyChart)==null?void 0:S.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((C=this.xyChart)==null?void 0:C.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((T=this.xyChart)==null?void 0:T.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((w=this.xyChart)==null?void 0:w.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((k=this.xyChart)==null?void 0:k.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((E=this.xyChart)==null?void 0:E.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((O=this.xyChart)==null?void 0:O.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((L=this.xyChart)==null?void 0:L.plotColorPalette)||"#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||this.labelBackground,this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=this.git0||this.primaryColor,this.git1=this.git1||this.secondaryColor,this.git2=this.git2||this.tertiaryColor,this.git3=this.git3||U(this.primaryColor,{h:-30}),this.git4=this.git4||U(this.primaryColor,{h:-60}),this.git5=this.git5||U(this.primaryColor,{h:-90}),this.git6=this.git6||U(this.primaryColor,{h:60}),this.git7=this.git7||U(this.primaryColor,{h:120}),this.darkMode?(this.git0=bt(this.git0,25),this.git1=bt(this.git1,25),this.git2=bt(this.git2,25),this.git3=bt(this.git3,25),this.git4=bt(this.git4,25),this.git5=bt(this.git5,25),this.git6=bt(this.git6,25),this.git7=bt(this.git7,25)):(this.git0=kt(this.git0,25),this.git1=kt(this.git1,25),this.git2=kt(this.git2,25),this.git3=kt(this.git3,25),this.git4=kt(this.git4,25),this.git5=kt(this.git5,25),this.git6=kt(this.git6,25),this.git7=kt(this.git7,25)),this.gitInv0=this.gitInv0||kt(dt(this.git0),25),this.gitInv1=this.gitInv1||dt(this.git1),this.gitInv2=this.gitInv2||dt(this.git2),this.gitInv3=this.gitInv3||dt(this.git3),this.gitInv4=this.gitInv4||dt(this.git4),this.gitInv5=this.gitInv5||dt(this.git5),this.gitInv6=this.gitInv6||dt(this.git6),this.gitInv7=this.gitInv7||dt(this.git7),this.gitBranchLabel0=this.gitBranchLabel0||dt(this.labelTextColor),this.gitBranchLabel1=this.gitBranchLabel1||this.labelTextColor,this.gitBranchLabel2=this.gitBranchLabel2||this.labelTextColor,this.gitBranchLabel3=this.gitBranchLabel3||dt(this.labelTextColor),this.gitBranchLabel4=this.gitBranchLabel4||this.labelTextColor,this.gitBranchLabel5=this.gitBranchLabel5||this.labelTextColor,this.gitBranchLabel6=this.gitBranchLabel6||this.labelTextColor,this.gitBranchLabel7=this.gitBranchLabel7||this.labelTextColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||Oh,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||Ph}calculate(t){if(Object.keys(this).forEach(a=>{this[a]==="calculated"&&(this[a]=void 0)}),typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(a=>{this[a]=t[a]}),this.updateColors(),n.forEach(a=>{this[a]=t[a]})}},x(Ls,"Theme"),Ls),GM=x(e=>{const t=new HM;return t.calculate(e),t},"getThemeVariables"),Bs,jM=(Bs=class{constructor(){this.background="#f4f4f4",this.primaryColor="#cde498",this.secondaryColor="#cdffb2",this.background="white",this.mainBkg="#cde498",this.secondBkg="#cdffb2",this.lineColor="green",this.border1="#13540c",this.border2="#6eaa49",this.arrowheadColor="green",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.tertiaryColor=bt("#cde498",10),this.primaryBorderColor=si(this.primaryColor,this.darkMode),this.secondaryBorderColor=si(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=si(this.tertiaryColor,this.darkMode),this.primaryTextColor=dt(this.primaryColor),this.secondaryTextColor=dt(this.secondaryColor),this.tertiaryTextColor=dt(this.primaryColor),this.lineColor=dt(this.background),this.textColor=dt(this.background),this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="#333",this.edgeLabelBackground="#e8e8e8",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="black",this.actorLineColor="calculated",this.signalColor="#333",this.signalTextColor="#333",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="#326932",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="#fff5ad",this.noteTextColor="calculated",this.activationBorderColor="#666",this.activationBkgColor="#f4f4f4",this.sequenceNumberColor="white",this.sectionBkgColor="#6eaa49",this.altSectionBkgColor="white",this.sectionBkgColor2="#6eaa49",this.excludeBkgColor="#eeeeee",this.taskBorderColor="calculated",this.taskBkgColor="#487e3a",this.taskTextLightColor="white",this.taskTextColor="calculated",this.taskTextDarkColor="black",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor="calculated",this.activeTaskBkgColor="calculated",this.gridColor="lightgrey",this.doneTaskBkgColor="lightgrey",this.doneTaskBorderColor="grey",this.critBorderColor="#ff8888",this.critBkgColor="red",this.todayLineColor="red",this.vertLineColor="#00BFFF",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.archEdgeColor="calculated",this.archEdgeArrowColor="calculated",this.archEdgeWidth="3",this.archGroupBorderColor=this.primaryBorderColor,this.archGroupBorderWidth="2px",this.labelColor="black",this.errorBkgColor="#552222",this.errorTextColor="#552222"}updateColors(){var t,n,a,s,o,u,c,g,d,f,m,y,v,S,C,T,w,k,E,O,L;this.actorBorder=kt(this.mainBkg,20),this.actorBkg=this.mainBkg,this.labelBoxBkgColor=this.actorBkg,this.labelTextColor=this.actorTextColor,this.loopTextColor=this.actorTextColor,this.noteBorderColor=this.border2,this.noteTextColor=this.actorTextColor,this.actorLineColor=this.actorBorder,this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||U(this.primaryColor,{h:30}),this.cScale4=this.cScale4||U(this.primaryColor,{h:60}),this.cScale5=this.cScale5||U(this.primaryColor,{h:90}),this.cScale6=this.cScale6||U(this.primaryColor,{h:120}),this.cScale7=this.cScale7||U(this.primaryColor,{h:150}),this.cScale8=this.cScale8||U(this.primaryColor,{h:210}),this.cScale9=this.cScale9||U(this.primaryColor,{h:270}),this.cScale10=this.cScale10||U(this.primaryColor,{h:300}),this.cScale11=this.cScale11||U(this.primaryColor,{h:330}),this.cScalePeer1=this.cScalePeer1||kt(this.secondaryColor,45),this.cScalePeer2=this.cScalePeer2||kt(this.tertiaryColor,40);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScale"+R]=kt(this["cScale"+R],10),this["cScalePeer"+R]=this["cScalePeer"+R]||kt(this["cScale"+R],25);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleInv"+R]=this["cScaleInv"+R]||U(this["cScale"+R],{h:180});this.scaleLabelColor=this.scaleLabelColor!=="calculated"&&this.scaleLabelColor?this.scaleLabelColor:this.labelTextColor;for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleLabel"+R]=this["cScaleLabel"+R]||this.scaleLabelColor;for(let R=0;R<5;R++)this["surface"+R]=this["surface"+R]||U(this.mainBkg,{h:30,s:-30,l:-(5+R*5)}),this["surfacePeer"+R]=this["surfacePeer"+R]||U(this.mainBkg,{h:30,s:-30,l:-(8+R*5)});this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.taskBorderColor=this.border1,this.taskTextColor=this.taskTextLightColor,this.taskTextOutsideColor=this.taskTextDarkColor,this.activeTaskBorderColor=this.taskBorderColor,this.activeTaskBkgColor=this.mainBkg,this.archEdgeColor=this.lineColor,this.archEdgeArrowColor=this.lineColor,this.rowOdd=this.rowOdd||bt(this.mainBkg,75)||"#ffffff",this.rowEven=this.rowEven||bt(this.mainBkg,20),this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#f0f0f0",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.primaryBorderColor,this.specialStateColor=this.lineColor,this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.classText=this.primaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=U(this.primaryColor,{h:64}),this.fillType3=U(this.secondaryColor,{h:64}),this.fillType4=U(this.primaryColor,{h:-64}),this.fillType5=U(this.secondaryColor,{h:-64}),this.fillType6=U(this.primaryColor,{h:128}),this.fillType7=U(this.secondaryColor,{h:128}),this.pie1=this.pie1||this.primaryColor,this.pie2=this.pie2||this.secondaryColor,this.pie3=this.pie3||this.tertiaryColor,this.pie4=this.pie4||U(this.primaryColor,{l:-30}),this.pie5=this.pie5||U(this.secondaryColor,{l:-30}),this.pie6=this.pie6||U(this.tertiaryColor,{h:40,l:-40}),this.pie7=this.pie7||U(this.primaryColor,{h:60,l:-10}),this.pie8=this.pie8||U(this.primaryColor,{h:-60,l:-10}),this.pie9=this.pie9||U(this.primaryColor,{h:120,l:0}),this.pie10=this.pie10||U(this.primaryColor,{h:60,l:-50}),this.pie11=this.pie11||U(this.primaryColor,{h:-60,l:-50}),this.pie12=this.pie12||U(this.primaryColor,{h:120,l:-50}),this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||U(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||U(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||U(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||U(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||U(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||U(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Qo(this.quadrant1Fill)?bt(this.quadrant1Fill):kt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.packet={startByteColor:this.primaryTextColor,endByteColor:this.primaryTextColor,labelColor:this.primaryTextColor,titleColor:this.primaryTextColor,blockStrokeColor:this.primaryTextColor,blockFillColor:this.mainBkg},this.radar={axisColor:((t=this.radar)==null?void 0:t.axisColor)||this.lineColor,axisStrokeWidth:((n=this.radar)==null?void 0:n.axisStrokeWidth)||2,axisLabelFontSize:((a=this.radar)==null?void 0:a.axisLabelFontSize)||12,curveOpacity:((s=this.radar)==null?void 0:s.curveOpacity)||.5,curveStrokeWidth:((o=this.radar)==null?void 0:o.curveStrokeWidth)||2,graticuleColor:((u=this.radar)==null?void 0:u.graticuleColor)||"#DEDEDE",graticuleStrokeWidth:((c=this.radar)==null?void 0:c.graticuleStrokeWidth)||1,graticuleOpacity:((g=this.radar)==null?void 0:g.graticuleOpacity)||.3,legendBoxSize:((d=this.radar)==null?void 0:d.legendBoxSize)||12,legendFontSize:((f=this.radar)==null?void 0:f.legendFontSize)||12},this.xyChart={backgroundColor:((m=this.xyChart)==null?void 0:m.backgroundColor)||this.background,titleColor:((y=this.xyChart)==null?void 0:y.titleColor)||this.primaryTextColor,xAxisTitleColor:((v=this.xyChart)==null?void 0:v.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((S=this.xyChart)==null?void 0:S.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((C=this.xyChart)==null?void 0:C.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((T=this.xyChart)==null?void 0:T.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((w=this.xyChart)==null?void 0:w.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((k=this.xyChart)==null?void 0:k.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((E=this.xyChart)==null?void 0:E.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((O=this.xyChart)==null?void 0:O.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((L=this.xyChart)==null?void 0:L.plotColorPalette)||"#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||this.edgeLabelBackground,this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=this.git0||this.primaryColor,this.git1=this.git1||this.secondaryColor,this.git2=this.git2||this.tertiaryColor,this.git3=this.git3||U(this.primaryColor,{h:-30}),this.git4=this.git4||U(this.primaryColor,{h:-60}),this.git5=this.git5||U(this.primaryColor,{h:-90}),this.git6=this.git6||U(this.primaryColor,{h:60}),this.git7=this.git7||U(this.primaryColor,{h:120}),this.darkMode?(this.git0=bt(this.git0,25),this.git1=bt(this.git1,25),this.git2=bt(this.git2,25),this.git3=bt(this.git3,25),this.git4=bt(this.git4,25),this.git5=bt(this.git5,25),this.git6=bt(this.git6,25),this.git7=bt(this.git7,25)):(this.git0=kt(this.git0,25),this.git1=kt(this.git1,25),this.git2=kt(this.git2,25),this.git3=kt(this.git3,25),this.git4=kt(this.git4,25),this.git5=kt(this.git5,25),this.git6=kt(this.git6,25),this.git7=kt(this.git7,25)),this.gitInv0=this.gitInv0||dt(this.git0),this.gitInv1=this.gitInv1||dt(this.git1),this.gitInv2=this.gitInv2||dt(this.git2),this.gitInv3=this.gitInv3||dt(this.git3),this.gitInv4=this.gitInv4||dt(this.git4),this.gitInv5=this.gitInv5||dt(this.git5),this.gitInv6=this.gitInv6||dt(this.git6),this.gitInv7=this.gitInv7||dt(this.git7),this.gitBranchLabel0=this.gitBranchLabel0||dt(this.labelTextColor),this.gitBranchLabel1=this.gitBranchLabel1||this.labelTextColor,this.gitBranchLabel2=this.gitBranchLabel2||this.labelTextColor,this.gitBranchLabel3=this.gitBranchLabel3||dt(this.labelTextColor),this.gitBranchLabel4=this.gitBranchLabel4||this.labelTextColor,this.gitBranchLabel5=this.gitBranchLabel5||this.labelTextColor,this.gitBranchLabel6=this.gitBranchLabel6||this.labelTextColor,this.gitBranchLabel7=this.gitBranchLabel7||this.labelTextColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||Oh,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||Ph}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(a=>{this[a]=t[a]}),this.updateColors(),n.forEach(a=>{this[a]=t[a]})}},x(Bs,"Theme"),Bs),YM=x(e=>{const t=new jM;return t.calculate(e),t},"getThemeVariables"),Os,WM=(Os=class{constructor(){this.primaryColor="#eee",this.contrast="#707070",this.secondaryColor=bt(this.contrast,55),this.background="#ffffff",this.tertiaryColor=U(this.primaryColor,{h:-160}),this.primaryBorderColor=si(this.primaryColor,this.darkMode),this.secondaryBorderColor=si(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=si(this.tertiaryColor,this.darkMode),this.primaryTextColor=dt(this.primaryColor),this.secondaryTextColor=dt(this.secondaryColor),this.tertiaryTextColor=dt(this.tertiaryColor),this.lineColor=dt(this.background),this.textColor=dt(this.background),this.mainBkg="#eee",this.secondBkg="calculated",this.lineColor="#666",this.border1="#999",this.border2="calculated",this.note="#ffa",this.text="#333",this.critical="#d42",this.done="#bbb",this.arrowheadColor="#333333",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="calculated",this.edgeLabelBackground="white",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="calculated",this.actorLineColor=this.actorBorder,this.signalColor="calculated",this.signalTextColor="calculated",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="calculated",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="calculated",this.noteTextColor="calculated",this.activationBorderColor="#666",this.activationBkgColor="#f4f4f4",this.sequenceNumberColor="white",this.sectionBkgColor="calculated",this.altSectionBkgColor="white",this.sectionBkgColor2="calculated",this.excludeBkgColor="#eeeeee",this.taskBorderColor="calculated",this.taskBkgColor="calculated",this.taskTextLightColor="white",this.taskTextColor="calculated",this.taskTextDarkColor="calculated",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor="calculated",this.activeTaskBkgColor="calculated",this.gridColor="calculated",this.doneTaskBkgColor="calculated",this.doneTaskBorderColor="calculated",this.critBkgColor="calculated",this.critBorderColor="calculated",this.todayLineColor="calculated",this.vertLineColor="calculated",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.archEdgeColor="calculated",this.archEdgeArrowColor="calculated",this.archEdgeWidth="3",this.archGroupBorderColor=this.primaryBorderColor,this.archGroupBorderWidth="2px",this.rowOdd=this.rowOdd||bt(this.mainBkg,75)||"#ffffff",this.rowEven=this.rowEven||"#f4f4f4",this.labelColor="black",this.errorBkgColor="#552222",this.errorTextColor="#552222"}updateColors(){var t,n,a,s,o,u,c,g,d,f,m,y,v,S,C,T,w,k,E,O,L;this.secondBkg=bt(this.contrast,55),this.border2=this.contrast,this.actorBorder=bt(this.border1,23),this.actorBkg=this.mainBkg,this.actorTextColor=this.text,this.actorLineColor=this.actorBorder,this.signalColor=this.text,this.signalTextColor=this.text,this.labelBoxBkgColor=this.actorBkg,this.labelBoxBorderColor=this.actorBorder,this.labelTextColor=this.text,this.loopTextColor=this.text,this.noteBorderColor="#999",this.noteBkgColor="#666",this.noteTextColor="#fff",this.cScale0=this.cScale0||"#555",this.cScale1=this.cScale1||"#F4F4F4",this.cScale2=this.cScale2||"#555",this.cScale3=this.cScale3||"#BBB",this.cScale4=this.cScale4||"#777",this.cScale5=this.cScale5||"#999",this.cScale6=this.cScale6||"#DDD",this.cScale7=this.cScale7||"#FFF",this.cScale8=this.cScale8||"#DDD",this.cScale9=this.cScale9||"#BBB",this.cScale10=this.cScale10||"#999",this.cScale11=this.cScale11||"#777";for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleInv"+R]=this["cScaleInv"+R]||dt(this["cScale"+R]);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this.darkMode?this["cScalePeer"+R]=this["cScalePeer"+R]||bt(this["cScale"+R],10):this["cScalePeer"+R]=this["cScalePeer"+R]||kt(this["cScale"+R],10);this.scaleLabelColor=this.scaleLabelColor||(this.darkMode?"black":this.labelTextColor),this.cScaleLabel0=this.cScaleLabel0||this.cScale1,this.cScaleLabel2=this.cScaleLabel2||this.cScale1;for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleLabel"+R]=this["cScaleLabel"+R]||this.scaleLabelColor;for(let R=0;R<5;R++)this["surface"+R]=this["surface"+R]||U(this.mainBkg,{l:-(5+R*5)}),this["surfacePeer"+R]=this["surfacePeer"+R]||U(this.mainBkg,{l:-(8+R*5)});this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.titleColor=this.text,this.sectionBkgColor=bt(this.contrast,30),this.sectionBkgColor2=bt(this.contrast,30),this.taskBorderColor=kt(this.contrast,10),this.taskBkgColor=this.contrast,this.taskTextColor=this.taskTextLightColor,this.taskTextDarkColor=this.text,this.taskTextOutsideColor=this.taskTextDarkColor,this.activeTaskBorderColor=this.taskBorderColor,this.activeTaskBkgColor=this.mainBkg,this.gridColor=bt(this.border1,30),this.doneTaskBkgColor=this.done,this.doneTaskBorderColor=this.lineColor,this.critBkgColor=this.critical,this.critBorderColor=kt(this.critBkgColor,10),this.todayLineColor=this.critBkgColor,this.vertLineColor=this.critBkgColor,this.archEdgeColor=this.lineColor,this.archEdgeArrowColor=this.lineColor,this.transitionColor=this.transitionColor||"#000",this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#f4f4f4",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.stateBorder=this.stateBorder||"#000",this.innerEndBackground=this.primaryBorderColor,this.specialStateColor="#222",this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.classText=this.primaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=U(this.primaryColor,{h:64}),this.fillType3=U(this.secondaryColor,{h:64}),this.fillType4=U(this.primaryColor,{h:-64}),this.fillType5=U(this.secondaryColor,{h:-64}),this.fillType6=U(this.primaryColor,{h:128}),this.fillType7=U(this.secondaryColor,{h:128});for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["pie"+R]=this["cScale"+R];this.pie12=this.pie0,this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||U(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||U(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||U(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||U(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||U(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||U(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Qo(this.quadrant1Fill)?bt(this.quadrant1Fill):kt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((a=this.xyChart)==null?void 0:a.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((s=this.xyChart)==null?void 0:s.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((o=this.xyChart)==null?void 0:o.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((u=this.xyChart)==null?void 0:u.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((c=this.xyChart)==null?void 0:c.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((g=this.xyChart)==null?void 0:g.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((d=this.xyChart)==null?void 0:d.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((f=this.xyChart)==null?void 0:f.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((m=this.xyChart)==null?void 0:m.plotColorPalette)||"#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"},this.radar={axisColor:((y=this.radar)==null?void 0:y.axisColor)||this.lineColor,axisStrokeWidth:((v=this.radar)==null?void 0:v.axisStrokeWidth)||2,axisLabelFontSize:((S=this.radar)==null?void 0:S.axisLabelFontSize)||12,curveOpacity:((C=this.radar)==null?void 0:C.curveOpacity)||.5,curveStrokeWidth:((T=this.radar)==null?void 0:T.curveStrokeWidth)||2,graticuleColor:((w=this.radar)==null?void 0:w.graticuleColor)||"#DEDEDE",graticuleStrokeWidth:((k=this.radar)==null?void 0:k.graticuleStrokeWidth)||1,graticuleOpacity:((E=this.radar)==null?void 0:E.graticuleOpacity)||.3,legendBoxSize:((O=this.radar)==null?void 0:O.legendBoxSize)||12,legendFontSize:((L=this.radar)==null?void 0:L.legendFontSize)||12},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||this.edgeLabelBackground,this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=kt(this.pie1,25)||this.primaryColor,this.git1=this.pie2||this.secondaryColor,this.git2=this.pie3||this.tertiaryColor,this.git3=this.pie4||U(this.primaryColor,{h:-30}),this.git4=this.pie5||U(this.primaryColor,{h:-60}),this.git5=this.pie6||U(this.primaryColor,{h:-90}),this.git6=this.pie7||U(this.primaryColor,{h:60}),this.git7=this.pie8||U(this.primaryColor,{h:120}),this.gitInv0=this.gitInv0||dt(this.git0),this.gitInv1=this.gitInv1||dt(this.git1),this.gitInv2=this.gitInv2||dt(this.git2),this.gitInv3=this.gitInv3||dt(this.git3),this.gitInv4=this.gitInv4||dt(this.git4),this.gitInv5=this.gitInv5||dt(this.git5),this.gitInv6=this.gitInv6||dt(this.git6),this.gitInv7=this.gitInv7||dt(this.git7),this.branchLabelColor=this.branchLabelColor||this.labelTextColor,this.gitBranchLabel0=this.branchLabelColor,this.gitBranchLabel1="white",this.gitBranchLabel2=this.branchLabelColor,this.gitBranchLabel3="white",this.gitBranchLabel4=this.branchLabelColor,this.gitBranchLabel5=this.branchLabelColor,this.gitBranchLabel6=this.branchLabelColor,this.gitBranchLabel7=this.branchLabelColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||Oh,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||Ph}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(a=>{this[a]=t[a]}),this.updateColors(),n.forEach(a=>{this[a]=t[a]})}},x(Os,"Theme"),Os),VM=x(e=>{const t=new WM;return t.calculate(e),t},"getThemeVariables"),nr={base:{getThemeVariables:zM},dark:{getThemeVariables:qM},default:{getThemeVariables:GM},forest:{getThemeVariables:YM},neutral:{getThemeVariables:VM}},yn={flowchart:{useMaxWidth:!0,titleTopMargin:25,subGraphTitleMargin:{top:0,bottom:0},diagramPadding:8,htmlLabels:!0,nodeSpacing:50,rankSpacing:50,curve:"basis",padding:15,defaultRenderer:"dagre-wrapper",wrappingWidth:200,inheritDir:!1},sequence:{useMaxWidth:!0,hideUnusedParticipants:!1,activationWidth:10,diagramMarginX:50,diagramMarginY:10,actorMargin:50,width:150,height:65,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,messageAlign:"center",mirrorActors:!0,forceMenus:!1,bottomMarginAdj:1,rightAngles:!1,showSequenceNumbers:!1,actorFontSize:14,actorFontFamily:'"Open Sans", sans-serif',actorFontWeight:400,noteFontSize:14,noteFontFamily:'"trebuchet ms", verdana, arial, sans-serif',noteFontWeight:400,noteAlign:"center",messageFontSize:16,messageFontFamily:'"trebuchet ms", verdana, arial, sans-serif',messageFontWeight:400,wrap:!1,wrapPadding:10,labelBoxWidth:50,labelBoxHeight:20},gantt:{useMaxWidth:!0,titleTopMargin:25,barHeight:20,barGap:4,topPadding:50,rightPadding:75,leftPadding:75,gridLineStartPadding:35,fontSize:11,sectionFontSize:11,numberSectionStyles:4,axisFormat:"%Y-%m-%d",topAxis:!1,displayMode:"",weekday:"sunday"},journey:{useMaxWidth:!0,diagramMarginX:50,diagramMarginY:10,leftMargin:150,maxLabelWidth:360,width:150,height:50,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,messageAlign:"center",bottomMarginAdj:1,rightAngles:!1,taskFontSize:14,taskFontFamily:'"Open Sans", sans-serif',taskMargin:50,activationWidth:10,textPlacement:"fo",actorColours:["#8FBC8F","#7CFC00","#00FFFF","#20B2AA","#B0E0E6","#FFFFE0"],sectionFills:["#191970","#8B008B","#4B0082","#2F4F4F","#800000","#8B4513","#00008B"],sectionColours:["#fff"],titleColor:"",titleFontFamily:'"trebuchet ms", verdana, arial, sans-serif',titleFontSize:"4ex"},class:{useMaxWidth:!0,titleTopMargin:25,arrowMarkerAbsolute:!1,dividerMargin:10,padding:5,textHeight:10,defaultRenderer:"dagre-wrapper",htmlLabels:!1,hideEmptyMembersBox:!1},state:{useMaxWidth:!0,titleTopMargin:25,dividerMargin:10,sizeUnit:5,padding:8,textHeight:10,titleShift:-15,noteMargin:10,forkWidth:70,forkHeight:7,miniPadding:2,fontSizeFactor:5.02,fontSize:24,labelHeight:16,edgeLengthFactor:"20",compositTitleSize:35,radius:5,defaultRenderer:"dagre-wrapper"},er:{useMaxWidth:!0,titleTopMargin:25,diagramPadding:20,layoutDirection:"TB",minEntityWidth:100,minEntityHeight:75,entityPadding:15,nodeSpacing:140,rankSpacing:80,stroke:"gray",fill:"honeydew",fontSize:12},pie:{useMaxWidth:!0,textPosition:.75},quadrantChart:{useMaxWidth:!0,chartWidth:500,chartHeight:500,titleFontSize:20,titlePadding:10,quadrantPadding:5,xAxisLabelPadding:5,yAxisLabelPadding:5,xAxisLabelFontSize:16,yAxisLabelFontSize:16,quadrantLabelFontSize:16,quadrantTextTopPadding:5,pointTextPadding:5,pointLabelFontSize:12,pointRadius:5,xAxisPosition:"top",yAxisPosition:"left",quadrantInternalBorderStrokeWidth:1,quadrantExternalBorderStrokeWidth:2},xyChart:{useMaxWidth:!0,width:700,height:500,titleFontSize:20,titlePadding:10,showDataLabel:!1,showTitle:!0,xAxis:{$ref:"#/$defs/XYChartAxisConfig",showLabel:!0,labelFontSize:14,labelPadding:5,showTitle:!0,titleFontSize:16,titlePadding:5,showTick:!0,tickLength:5,tickWidth:2,showAxisLine:!0,axisLineWidth:2},yAxis:{$ref:"#/$defs/XYChartAxisConfig",showLabel:!0,labelFontSize:14,labelPadding:5,showTitle:!0,titleFontSize:16,titlePadding:5,showTick:!0,tickLength:5,tickWidth:2,showAxisLine:!0,axisLineWidth:2},chartOrientation:"vertical",plotReservedSpacePercent:50},requirement:{useMaxWidth:!0,rect_fill:"#f9f9f9",text_color:"#333",rect_border_size:"0.5px",rect_border_color:"#bbb",rect_min_width:200,rect_min_height:200,fontSize:14,rect_padding:10,line_height:20},mindmap:{useMaxWidth:!0,padding:10,maxNodeWidth:200,layoutAlgorithm:"cose-bilkent"},kanban:{useMaxWidth:!0,padding:8,sectionWidth:200,ticketBaseUrl:""},timeline:{useMaxWidth:!0,diagramMarginX:50,diagramMarginY:10,leftMargin:150,width:150,height:50,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,messageAlign:"center",bottomMarginAdj:1,rightAngles:!1,taskFontSize:14,taskFontFamily:'"Open Sans", sans-serif',taskMargin:50,activationWidth:10,textPlacement:"fo",actorColours:["#8FBC8F","#7CFC00","#00FFFF","#20B2AA","#B0E0E6","#FFFFE0"],sectionFills:["#191970","#8B008B","#4B0082","#2F4F4F","#800000","#8B4513","#00008B"],sectionColours:["#fff"],disableMulticolor:!1},gitGraph:{useMaxWidth:!0,titleTopMargin:25,diagramPadding:8,nodeLabel:{width:75,height:100,x:-25,y:0},mainBranchName:"main",mainBranchOrder:0,showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0,parallelCommits:!1,arrowMarkerAbsolute:!1},c4:{useMaxWidth:!0,diagramMarginX:50,diagramMarginY:10,c4ShapeMargin:50,c4ShapePadding:20,width:216,height:60,boxMargin:10,c4ShapeInRow:4,nextLinePaddingX:0,c4BoundaryInRow:2,personFontSize:14,personFontFamily:'"Open Sans", sans-serif',personFontWeight:"normal",external_personFontSize:14,external_personFontFamily:'"Open Sans", sans-serif',external_personFontWeight:"normal",systemFontSize:14,systemFontFamily:'"Open Sans", sans-serif',systemFontWeight:"normal",external_systemFontSize:14,external_systemFontFamily:'"Open Sans", sans-serif',external_systemFontWeight:"normal",system_dbFontSize:14,system_dbFontFamily:'"Open Sans", sans-serif',system_dbFontWeight:"normal",external_system_dbFontSize:14,external_system_dbFontFamily:'"Open Sans", sans-serif',external_system_dbFontWeight:"normal",system_queueFontSize:14,system_queueFontFamily:'"Open Sans", sans-serif',system_queueFontWeight:"normal",external_system_queueFontSize:14,external_system_queueFontFamily:'"Open Sans", sans-serif',external_system_queueFontWeight:"normal",boundaryFontSize:14,boundaryFontFamily:'"Open Sans", sans-serif',boundaryFontWeight:"normal",messageFontSize:12,messageFontFamily:'"Open Sans", sans-serif',messageFontWeight:"normal",containerFontSize:14,containerFontFamily:'"Open Sans", sans-serif',containerFontWeight:"normal",external_containerFontSize:14,external_containerFontFamily:'"Open Sans", sans-serif',external_containerFontWeight:"normal",container_dbFontSize:14,container_dbFontFamily:'"Open Sans", sans-serif',container_dbFontWeight:"normal",external_container_dbFontSize:14,external_container_dbFontFamily:'"Open Sans", sans-serif',external_container_dbFontWeight:"normal",container_queueFontSize:14,container_queueFontFamily:'"Open Sans", sans-serif',container_queueFontWeight:"normal",external_container_queueFontSize:14,external_container_queueFontFamily:'"Open Sans", sans-serif',external_container_queueFontWeight:"normal",componentFontSize:14,componentFontFamily:'"Open Sans", sans-serif',componentFontWeight:"normal",external_componentFontSize:14,external_componentFontFamily:'"Open Sans", sans-serif',external_componentFontWeight:"normal",component_dbFontSize:14,component_dbFontFamily:'"Open Sans", sans-serif',component_dbFontWeight:"normal",external_component_dbFontSize:14,external_component_dbFontFamily:'"Open Sans", sans-serif',external_component_dbFontWeight:"normal",component_queueFontSize:14,component_queueFontFamily:'"Open Sans", sans-serif',component_queueFontWeight:"normal",external_component_queueFontSize:14,external_component_queueFontFamily:'"Open Sans", sans-serif',external_component_queueFontWeight:"normal",wrap:!0,wrapPadding:10,person_bg_color:"#08427B",person_border_color:"#073B6F",external_person_bg_color:"#686868",external_person_border_color:"#8A8A8A",system_bg_color:"#1168BD",system_border_color:"#3C7FC0",system_db_bg_color:"#1168BD",system_db_border_color:"#3C7FC0",system_queue_bg_color:"#1168BD",system_queue_border_color:"#3C7FC0",external_system_bg_color:"#999999",external_system_border_color:"#8A8A8A",external_system_db_bg_color:"#999999",external_system_db_border_color:"#8A8A8A",external_system_queue_bg_color:"#999999",external_system_queue_border_color:"#8A8A8A",container_bg_color:"#438DD5",container_border_color:"#3C7FC0",container_db_bg_color:"#438DD5",container_db_border_color:"#3C7FC0",container_queue_bg_color:"#438DD5",container_queue_border_color:"#3C7FC0",external_container_bg_color:"#B3B3B3",external_container_border_color:"#A6A6A6",external_container_db_bg_color:"#B3B3B3",external_container_db_border_color:"#A6A6A6",external_container_queue_bg_color:"#B3B3B3",external_container_queue_border_color:"#A6A6A6",component_bg_color:"#85BBF0",component_border_color:"#78A8D8",component_db_bg_color:"#85BBF0",component_db_border_color:"#78A8D8",component_queue_bg_color:"#85BBF0",component_queue_border_color:"#78A8D8",external_component_bg_color:"#CCCCCC",external_component_border_color:"#BFBFBF",external_component_db_bg_color:"#CCCCCC",external_component_db_border_color:"#BFBFBF",external_component_queue_bg_color:"#CCCCCC",external_component_queue_border_color:"#BFBFBF"},sankey:{useMaxWidth:!0,width:600,height:400,linkColor:"gradient",nodeAlignment:"justify",showValues:!0,prefix:"",suffix:""},block:{useMaxWidth:!0,padding:8},packet:{useMaxWidth:!0,rowHeight:32,bitWidth:32,bitsPerRow:32,showBits:!0,paddingX:5,paddingY:5},architecture:{useMaxWidth:!0,padding:40,iconSize:80,fontSize:16},radar:{useMaxWidth:!0,width:600,height:600,marginTop:50,marginRight:50,marginBottom:50,marginLeft:50,axisScaleFactor:1,axisLabelFactor:1.05,curveTension:.17},theme:"default",look:"classic",handDrawnSeed:0,layout:"dagre",maxTextSize:5e4,maxEdges:500,darkMode:!1,fontFamily:'"trebuchet ms", verdana, arial, sans-serif;',logLevel:5,securityLevel:"strict",startOnLoad:!0,arrowMarkerAbsolute:!1,secure:["secure","securityLevel","startOnLoad","maxTextSize","suppressErrorRendering","maxEdges"],legacyMathML:!1,forceLegacyMathML:!1,deterministicIds:!1,fontSize:16,markdownAutoWrap:!0,suppressErrorRendering:!1},n2={...yn,deterministicIDSeed:void 0,elk:{mergeEdges:!1,nodePlacementStrategy:"BRANDES_KOEPF",forceNodeModelOrder:!1,considerModelOrder:"NODES_AND_EDGES"},themeCSS:void 0,themeVariables:nr.default.getThemeVariables(),sequence:{...yn.sequence,messageFont:x(function(){return{fontFamily:this.messageFontFamily,fontSize:this.messageFontSize,fontWeight:this.messageFontWeight}},"messageFont"),noteFont:x(function(){return{fontFamily:this.noteFontFamily,fontSize:this.noteFontSize,fontWeight:this.noteFontWeight}},"noteFont"),actorFont:x(function(){return{fontFamily:this.actorFontFamily,fontSize:this.actorFontSize,fontWeight:this.actorFontWeight}},"actorFont")},class:{hideEmptyMembersBox:!1},gantt:{...yn.gantt,tickInterval:void 0,useWidth:void 0},c4:{...yn.c4,useWidth:void 0,personFont:x(function(){return{fontFamily:this.personFontFamily,fontSize:this.personFontSize,fontWeight:this.personFontWeight}},"personFont"),flowchart:{...yn.flowchart,inheritDir:!1},external_personFont:x(function(){return{fontFamily:this.external_personFontFamily,fontSize:this.external_personFontSize,fontWeight:this.external_personFontWeight}},"external_personFont"),systemFont:x(function(){return{fontFamily:this.systemFontFamily,fontSize:this.systemFontSize,fontWeight:this.systemFontWeight}},"systemFont"),external_systemFont:x(function(){return{fontFamily:this.external_systemFontFamily,fontSize:this.external_systemFontSize,fontWeight:this.external_systemFontWeight}},"external_systemFont"),system_dbFont:x(function(){return{fontFamily:this.system_dbFontFamily,fontSize:this.system_dbFontSize,fontWeight:this.system_dbFontWeight}},"system_dbFont"),external_system_dbFont:x(function(){return{fontFamily:this.external_system_dbFontFamily,fontSize:this.external_system_dbFontSize,fontWeight:this.external_system_dbFontWeight}},"external_system_dbFont"),system_queueFont:x(function(){return{fontFamily:this.system_queueFontFamily,fontSize:this.system_queueFontSize,fontWeight:this.system_queueFontWeight}},"system_queueFont"),external_system_queueFont:x(function(){return{fontFamily:this.external_system_queueFontFamily,fontSize:this.external_system_queueFontSize,fontWeight:this.external_system_queueFontWeight}},"external_system_queueFont"),containerFont:x(function(){return{fontFamily:this.containerFontFamily,fontSize:this.containerFontSize,fontWeight:this.containerFontWeight}},"containerFont"),external_containerFont:x(function(){return{fontFamily:this.external_containerFontFamily,fontSize:this.external_containerFontSize,fontWeight:this.external_containerFontWeight}},"external_containerFont"),container_dbFont:x(function(){return{fontFamily:this.container_dbFontFamily,fontSize:this.container_dbFontSize,fontWeight:this.container_dbFontWeight}},"container_dbFont"),external_container_dbFont:x(function(){return{fontFamily:this.external_container_dbFontFamily,fontSize:this.external_container_dbFontSize,fontWeight:this.external_container_dbFontWeight}},"external_container_dbFont"),container_queueFont:x(function(){return{fontFamily:this.container_queueFontFamily,fontSize:this.container_queueFontSize,fontWeight:this.container_queueFontWeight}},"container_queueFont"),external_container_queueFont:x(function(){return{fontFamily:this.external_container_queueFontFamily,fontSize:this.external_container_queueFontSize,fontWeight:this.external_container_queueFontWeight}},"external_container_queueFont"),componentFont:x(function(){return{fontFamily:this.componentFontFamily,fontSize:this.componentFontSize,fontWeight:this.componentFontWeight}},"componentFont"),external_componentFont:x(function(){return{fontFamily:this.external_componentFontFamily,fontSize:this.external_componentFontSize,fontWeight:this.external_componentFontWeight}},"external_componentFont"),component_dbFont:x(function(){return{fontFamily:this.component_dbFontFamily,fontSize:this.component_dbFontSize,fontWeight:this.component_dbFontWeight}},"component_dbFont"),external_component_dbFont:x(function(){return{fontFamily:this.external_component_dbFontFamily,fontSize:this.external_component_dbFontSize,fontWeight:this.external_component_dbFontWeight}},"external_component_dbFont"),component_queueFont:x(function(){return{fontFamily:this.component_queueFontFamily,fontSize:this.component_queueFontSize,fontWeight:this.component_queueFontWeight}},"component_queueFont"),external_component_queueFont:x(function(){return{fontFamily:this.external_component_queueFontFamily,fontSize:this.external_component_queueFontSize,fontWeight:this.external_component_queueFontWeight}},"external_component_queueFont"),boundaryFont:x(function(){return{fontFamily:this.boundaryFontFamily,fontSize:this.boundaryFontSize,fontWeight:this.boundaryFontWeight}},"boundaryFont"),messageFont:x(function(){return{fontFamily:this.messageFontFamily,fontSize:this.messageFontSize,fontWeight:this.messageFontWeight}},"messageFont")},pie:{...yn.pie,useWidth:984},xyChart:{...yn.xyChart,useWidth:void 0},requirement:{...yn.requirement,useWidth:void 0},packet:{...yn.packet},radar:{...yn.radar},treemap:{useMaxWidth:!0,padding:10,diagramPadding:8,showValues:!0,nodeWidth:100,nodeHeight:40,borderWidth:1,valueFontSize:12,labelFontSize:14,valueFormat:","}},r2=x((e,t="")=>Object.keys(e).reduce((n,a)=>Array.isArray(e[a])?n:typeof e[a]=="object"&&e[a]!==null?[...n,t+a,...r2(e[a],"")]:[...n,t+a],[]),"keyify"),XM=new Set(r2(n2,"")),a2=n2,Xu=x(e=>{if(st.debug("sanitizeDirective called with",e),!(typeof e!="object"||e==null)){if(Array.isArray(e)){e.forEach(t=>Xu(t));return}for(const t of Object.keys(e)){if(st.debug("Checking key",t),t.startsWith("__")||t.includes("proto")||t.includes("constr")||!XM.has(t)||e[t]==null){st.debug("sanitize deleting key: ",t),delete e[t];continue}if(typeof e[t]=="object"){st.debug("sanitizing object",t),Xu(e[t]);continue}const n=["themeCSS","fontFamily","altFontFamily"];for(const a of n)t.includes(a)&&(st.debug("sanitizing css option",t),e[t]=QM(e[t]))}if(e.themeVariables)for(const t of Object.keys(e.themeVariables)){const n=e.themeVariables[t];n!=null&&n.match&&!n.match(/^[\d "#%(),.;A-Za-z]+$/)&&(e.themeVariables[t]="")}st.debug("After sanitization",e)}},"sanitizeDirective"),QM=x(e=>{let t=0,n=0;for(const a of e){if(t<n)return"{ /* ERROR: Unbalanced CSS */ }";a==="{"?t++:a==="}"&&n++}return t!==n?"{ /* ERROR: Unbalanced CSS */ }":e},"sanitizeCss"),Fs=Object.freeze(a2),Si=Le({},Fs),Qu,ka=[],Mo=Le({},Fs),Nh=x((e,t)=>{let n=Le({},e),a={};for(const s of t)o2(s),a=Le(a,s);if(n=Le(n,a),a.theme&&a.theme in nr){const s=Le({},Qu),o=Le(s.themeVariables||{},a.themeVariables);n.theme&&n.theme in nr&&(n.themeVariables=nr[n.theme].getThemeVariables(o))}return Mo=n,c2(Mo),Mo},"updateCurrentConfig"),KM=x(e=>(Si=Le({},Fs),Si=Le(Si,e),e.theme&&nr[e.theme]&&(Si.themeVariables=nr[e.theme].getThemeVariables(e.themeVariables)),Nh(Si,ka),Si),"setSiteConfig"),ZM=x(e=>{Qu=Le({},e)},"saveConfigFromInitialize"),JM=x(e=>(Si=Le(Si,e),Nh(Si,ka),Si),"updateSiteConfig"),s2=x(()=>Le({},Si),"getSiteConfig"),l2=x(e=>(c2(e),Le(Mo,e),Je()),"setConfig"),Je=x(()=>Le({},Mo),"getConfig"),o2=x(e=>{e&&(["secure",...Si.secure??[]].forEach(t=>{Object.hasOwn(e,t)&&(st.debug(`Denied attempt to modify a secure key ${t}`,e[t]),delete e[t])}),Object.keys(e).forEach(t=>{t.startsWith("__")&&delete e[t]}),Object.keys(e).forEach(t=>{typeof e[t]=="string"&&(e[t].includes("<")||e[t].includes(">")||e[t].includes("url(data:"))&&delete e[t],typeof e[t]=="object"&&o2(e[t])}))},"sanitize"),t3=x(e=>{var t;Xu(e),e.fontFamily&&!((t=e.themeVariables)!=null&&t.fontFamily)&&(e.themeVariables={...e.themeVariables,fontFamily:e.fontFamily}),ka.push(e),Nh(Si,ka)},"addDirective"),Ku=x((e=Si)=>{ka=[],Nh(e,ka)},"reset"),e3={LAZY_LOAD_DEPRECATED:"The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."},aS={},i3=x(e=>{aS[e]||(st.warn(e3[e]),aS[e]=!0)},"issueWarning"),c2=x(e=>{e&&(e.lazyLoadedDiagrams||e.loadExternalDiagramsAtStartup)&&i3("LAZY_LOAD_DEPRECATED")},"checkConfig"),tU=x(()=>{let e={};Qu&&(e=Le(e,Qu));for(const t of ka)e=Le(e,t);return e},"getUserDefinedConfig"),Ko=/<br\s*\/?>/gi,n3=x(e=>e?d2(e).replace(/\\n/g,"#br#").split("#br#"):[""],"getRows"),r3=(()=>{let e=!1;return()=>{e||(u2(),e=!0)}})();function u2(){const e="data-temp-href-target";Is.addHook("beforeSanitizeAttributes",t=>{t.tagName==="A"&&t.hasAttribute("target")&&t.setAttribute(e,t.getAttribute("target")??"")}),Is.addHook("afterSanitizeAttributes",t=>{t.tagName==="A"&&t.hasAttribute(e)&&(t.setAttribute("target",t.getAttribute(e)??""),t.removeAttribute(e),t.getAttribute("target")==="_blank"&&t.setAttribute("rel","noopener"))})}x(u2,"setupDompurifyHooks");var h2=x(e=>(r3(),Is.sanitize(e)),"removeScript"),sS=x((e,t)=>{var n;if(((n=t.flowchart)==null?void 0:n.htmlLabels)!==!1){const a=t.securityLevel;a==="antiscript"||a==="strict"?e=h2(e):a!=="loose"&&(e=d2(e),e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"),e=e.replace(/=/g,"&equals;"),e=o3(e))}return e},"sanitizeMore"),Vi=x((e,t)=>e&&(t.dompurifyConfig?e=Is.sanitize(sS(e,t),t.dompurifyConfig).toString():e=Is.sanitize(sS(e,t),{FORBID_TAGS:["style"]}).toString(),e),"sanitizeText"),a3=x((e,t)=>typeof e=="string"?Vi(e,t):e.flat().map(n=>Vi(n,t)),"sanitizeTextOrArray"),s3=x(e=>Ko.test(e),"hasBreaks"),l3=x(e=>e.split(Ko),"splitBreaks"),o3=x(e=>e.replace(/#br#/g,"<br/>"),"placeholderToBreak"),d2=x(e=>e.replace(Ko,"#br#"),"breakToPlaceholder"),g2=x(e=>{let t="";return e&&(t=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,t=CSS.escape(t)),t},"getUrl"),Oe=x(e=>!(e===!1||["false","null","0"].includes(String(e).trim().toLowerCase())),"evaluate"),c3=x(function(...e){const t=e.filter(n=>!isNaN(n));return Math.max(...t)},"getMax"),u3=x(function(...e){const t=e.filter(n=>!isNaN(n));return Math.min(...t)},"getMin"),lS=x(function(e){const t=e.split(/(,)/),n=[];for(let a=0;a<t.length;a++){let s=t[a];if(s===","&&a>0&&a+1<t.length){const o=t[a-1],u=t[a+1];h3(o,u)&&(s=o+","+u,a++,n.pop())}n.push(d3(s))}return n.join("")},"parseGenericTypes"),Zf=x((e,t)=>Math.max(0,e.split(t).length-1),"countOccurrence"),h3=x((e,t)=>{const n=Zf(e,"~"),a=Zf(t,"~");return n===1&&a===1},"shouldCombineSets"),d3=x(e=>{const t=Zf(e,"~");let n=!1;if(t<=1)return e;t%2!==0&&e.startsWith("~")&&(e=e.substring(1),n=!0);const a=[...e];let s=a.indexOf("~"),o=a.lastIndexOf("~");for(;s!==-1&&o!==-1&&s!==o;)a[s]="<",a[o]=">",s=a.indexOf("~"),o=a.lastIndexOf("~");return n&&a.unshift("~"),a.join("")},"processSet"),oS=x(()=>window.MathMLElement!==void 0,"isMathMLSupported"),Jf=/\$\$(.*)\$\$/g,$s=x(e=>{var t;return(((t=e.match(Jf))==null?void 0:t.length)??0)>0},"hasKatex"),eU=x(async(e,t)=>{const n=document.createElement("div");n.innerHTML=await Jp(e,t),n.id="katex-temp",n.style.visibility="hidden",n.style.position="absolute",n.style.top="0";const a=document.querySelector("body");a==null||a.insertAdjacentElement("beforeend",n);const s={width:n.clientWidth,height:n.clientHeight};return n.remove(),s},"calculateMathMLDimensions"),g3=x(async(e,t)=>{if(!$s(e))return e;if(!(oS()||t.legacyMathML||t.forceLegacyMathML))return e.replace(Jf,"MathML is unsupported in this environment.");{const{default:n}=await Qt(async()=>{const{default:s}=await import("./katex-ChWnQ-fc.js");return{default:s}},[]),a=t.forceLegacyMathML||!oS()&&t.legacyMathML?"htmlAndMathml":"mathml";return e.split(Ko).map(s=>$s(s)?`<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${s}</div>`:`<div>${s}</div>`).join("").replace(Jf,(s,o)=>n.renderToString(o,{throwOnError:!0,displayMode:!0,output:a}).replace(/\n/g," ").replace(/<annotation.*<\/annotation>/g,""))}},"renderKatexUnsanitized"),Jp=x(async(e,t)=>Vi(await g3(e,t),t),"renderKatexSanitized"),Vs={getRows:n3,sanitizeText:Vi,sanitizeTextOrArray:a3,hasBreaks:s3,splitBreaks:l3,lineBreakRegex:Ko,removeScript:h2,getUrl:g2,evaluate:Oe,getMax:c3,getMin:u3},f3=x(function(e,t){for(let n of t)e.attr(n[0],n[1])},"d3Attrs"),p3=x(function(e,t,n){let a=new Map;return n?(a.set("width","100%"),a.set("style",`max-width: ${t}px;`)):(a.set("height",e),a.set("width",t)),a},"calculateSvgSizeAttrs"),f2=x(function(e,t,n,a){const s=p3(t,n,a);f3(e,s)},"configureSvgSize"),m3=x(function(e,t,n,a){const s=t.node().getBBox(),o=s.width,u=s.height;st.info(`SVG bounds: ${o}x${u}`,s);let c=0,g=0;st.info(`Graph bounds: ${c}x${g}`,e),c=o+n*2,g=u+n*2,st.info(`Calculated bounds: ${c}x${g}`),f2(t,g,c,a);const d=`${s.x-n} ${s.y-n} ${s.width+2*n} ${s.height+2*n}`;t.attr("viewBox",d)},"setupGraphViewbox"),Pu={},y3=x((e,t,n)=>{let a="";return e in Pu&&Pu[e]?a=Pu[e](n):st.warn(`No theme found for ${e}`),` & {
    font-family: ${n.fontFamily};
    font-size: ${n.fontSize};
    fill: ${n.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${n.errorBkgColor};
  }
  & .error-text {
    fill: ${n.errorTextColor};
    stroke: ${n.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${n.lineColor};
    stroke: ${n.lineColor};
  }
  & .marker.cross {
    stroke: ${n.lineColor};
  }

  & svg {
    font-family: ${n.fontFamily};
    font-size: ${n.fontSize};
  }
   & p {
    margin: 0
   }

  ${a}

  ${t}
`},"getStyles"),b3=x((e,t)=>{t!==void 0&&(Pu[e]=t)},"addStylesForDiagram"),v3=y3,p2={};oM(p2,{clear:()=>S3,getAccDescription:()=>w3,getAccTitle:()=>C3,getDiagramTitle:()=>k3,setAccDescription:()=>_3,setAccTitle:()=>x3,setDiagramTitle:()=>T3});var tm="",em="",im="",nm=x(e=>Vi(e,Je()),"sanitizeText"),S3=x(()=>{tm="",im="",em=""},"clear"),x3=x(e=>{tm=nm(e).replace(/^\s+/g,"")},"setAccTitle"),C3=x(()=>tm,"getAccTitle"),_3=x(e=>{im=nm(e).replace(/\n\s+/g,`
`)},"setAccDescription"),w3=x(()=>im,"getAccDescription"),T3=x(e=>{em=nm(e)},"setDiagramTitle"),k3=x(()=>em,"getDiagramTitle"),cS=st,A3=Kp,Vt=Je,iU=l2,nU=Fs,rm=x(e=>Vi(e,Vt()),"sanitizeText"),E3=m3,R3=x(()=>p2,"getCommonDb"),Zu={},Ju=x((e,t,n)=>{var a;Zu[e]&&cS.warn(`Diagram with id ${e} already registered. Overwriting.`),Zu[e]=t,n&&i2(e,n),b3(e,t.styles),(a=t.injectUtils)==null||a.call(t,cS,A3,Vt,rm,E3,R3(),()=>{})},"registerDiagram"),tp=x(e=>{if(e in Zu)return Zu[e];throw new M3(e)},"getDiagram"),Ps,M3=(Ps=class extends Error{constructor(t){super(`Diagram ${t} not found.`)}},x(Ps,"DiagramNotFoundError"),Ps),D3={value:()=>{}};function m2(){for(var e=0,t=arguments.length,n={},a;e<t;++e){if(!(a=arguments[e]+"")||a in n||/[\s.]/.test(a))throw new Error("illegal type: "+a);n[a]=[]}return new Nu(n)}function Nu(e){this._=e}function L3(e,t){return e.trim().split(/^|\s+/).map(function(n){var a="",s=n.indexOf(".");if(s>=0&&(a=n.slice(s+1),n=n.slice(0,s)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:a}})}Nu.prototype=m2.prototype={constructor:Nu,on:function(e,t){var n=this._,a=L3(e+"",n),s,o=-1,u=a.length;if(arguments.length<2){for(;++o<u;)if((s=(e=a[o]).type)&&(s=B3(n[s],e.name)))return s;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<u;)if(s=(e=a[o]).type)n[s]=uS(n[s],e.name,t);else if(t==null)for(s in n)n[s]=uS(n[s],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Nu(e)},call:function(e,t){if((s=arguments.length-2)>0)for(var n=new Array(s),a=0,s,o;a<s;++a)n[a]=arguments[a+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],a=0,s=o.length;a<s;++a)o[a].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var a=this._[e],s=0,o=a.length;s<o;++s)a[s].value.apply(t,n)}};function B3(e,t){for(var n=0,a=e.length,s;n<a;++n)if((s=e[n]).name===t)return s.value}function uS(e,t,n){for(var a=0,s=e.length;a<s;++a)if(e[a].name===t){e[a]=D3,e=e.slice(0,a).concat(e.slice(a+1));break}return n!=null&&e.push({name:t,value:n}),e}var ep="http://www.w3.org/1999/xhtml";const hS={svg:"http://www.w3.org/2000/svg",xhtml:ep,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ih(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),hS.hasOwnProperty(t)?{space:hS[t],local:e}:e}function O3(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===ep&&t.documentElement.namespaceURI===ep?t.createElement(e):t.createElementNS(n,e)}}function P3(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function y2(e){var t=Ih(e);return(t.local?P3:O3)(t)}function N3(){}function am(e){return e==null?N3:function(){return this.querySelector(e)}}function I3(e){typeof e!="function"&&(e=am(e));for(var t=this._groups,n=t.length,a=new Array(n),s=0;s<n;++s)for(var o=t[s],u=o.length,c=a[s]=new Array(u),g,d,f=0;f<u;++f)(g=o[f])&&(d=e.call(g,g.__data__,f,o))&&("__data__"in g&&(d.__data__=g.__data__),c[f]=d);return new Oi(a,this._parents)}function F3(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function $3(){return[]}function b2(e){return e==null?$3:function(){return this.querySelectorAll(e)}}function z3(e){return function(){return F3(e.apply(this,arguments))}}function U3(e){typeof e=="function"?e=z3(e):e=b2(e);for(var t=this._groups,n=t.length,a=[],s=[],o=0;o<n;++o)for(var u=t[o],c=u.length,g,d=0;d<c;++d)(g=u[d])&&(a.push(e.call(g,g.__data__,d,u)),s.push(g));return new Oi(a,s)}function v2(e){return function(){return this.matches(e)}}function S2(e){return function(t){return t.matches(e)}}var q3=Array.prototype.find;function H3(e){return function(){return q3.call(this.children,e)}}function G3(){return this.firstElementChild}function j3(e){return this.select(e==null?G3:H3(typeof e=="function"?e:S2(e)))}var Y3=Array.prototype.filter;function W3(){return Array.from(this.children)}function V3(e){return function(){return Y3.call(this.children,e)}}function X3(e){return this.selectAll(e==null?W3:V3(typeof e=="function"?e:S2(e)))}function Q3(e){typeof e!="function"&&(e=v2(e));for(var t=this._groups,n=t.length,a=new Array(n),s=0;s<n;++s)for(var o=t[s],u=o.length,c=a[s]=[],g,d=0;d<u;++d)(g=o[d])&&e.call(g,g.__data__,d,o)&&c.push(g);return new Oi(a,this._parents)}function x2(e){return new Array(e.length)}function K3(){return new Oi(this._enter||this._groups.map(x2),this._parents)}function th(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}th.prototype={constructor:th,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Z3(e){return function(){return e}}function J3(e,t,n,a,s,o){for(var u=0,c,g=t.length,d=o.length;u<d;++u)(c=t[u])?(c.__data__=o[u],a[u]=c):n[u]=new th(e,o[u]);for(;u<g;++u)(c=t[u])&&(s[u]=c)}function tD(e,t,n,a,s,o,u){var c,g,d=new Map,f=t.length,m=o.length,y=new Array(f),v;for(c=0;c<f;++c)(g=t[c])&&(y[c]=v=u.call(g,g.__data__,c,t)+"",d.has(v)?s[c]=g:d.set(v,g));for(c=0;c<m;++c)v=u.call(e,o[c],c,o)+"",(g=d.get(v))?(a[c]=g,g.__data__=o[c],d.delete(v)):n[c]=new th(e,o[c]);for(c=0;c<f;++c)(g=t[c])&&d.get(y[c])===g&&(s[c]=g)}function eD(e){return e.__data__}function iD(e,t){if(!arguments.length)return Array.from(this,eD);var n=t?tD:J3,a=this._parents,s=this._groups;typeof e!="function"&&(e=Z3(e));for(var o=s.length,u=new Array(o),c=new Array(o),g=new Array(o),d=0;d<o;++d){var f=a[d],m=s[d],y=m.length,v=nD(e.call(f,f&&f.__data__,d,a)),S=v.length,C=c[d]=new Array(S),T=u[d]=new Array(S),w=g[d]=new Array(y);n(f,m,C,T,w,v,t);for(var k=0,E=0,O,L;k<S;++k)if(O=C[k]){for(k>=E&&(E=k+1);!(L=T[E])&&++E<S;);O._next=L||null}}return u=new Oi(u,a),u._enter=c,u._exit=g,u}function nD(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function rD(){return new Oi(this._exit||this._groups.map(x2),this._parents)}function aD(e,t,n){var a=this.enter(),s=this,o=this.exit();return typeof e=="function"?(a=e(a),a&&(a=a.selection())):a=a.append(e+""),t!=null&&(s=t(s),s&&(s=s.selection())),n==null?o.remove():n(o),a&&s?a.merge(s).order():s}function sD(e){for(var t=e.selection?e.selection():e,n=this._groups,a=t._groups,s=n.length,o=a.length,u=Math.min(s,o),c=new Array(s),g=0;g<u;++g)for(var d=n[g],f=a[g],m=d.length,y=c[g]=new Array(m),v,S=0;S<m;++S)(v=d[S]||f[S])&&(y[S]=v);for(;g<s;++g)c[g]=n[g];return new Oi(c,this._parents)}function lD(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var a=e[t],s=a.length-1,o=a[s],u;--s>=0;)(u=a[s])&&(o&&u.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(u,o),o=u);return this}function oD(e){e||(e=cD);function t(m,y){return m&&y?e(m.__data__,y.__data__):!m-!y}for(var n=this._groups,a=n.length,s=new Array(a),o=0;o<a;++o){for(var u=n[o],c=u.length,g=s[o]=new Array(c),d,f=0;f<c;++f)(d=u[f])&&(g[f]=d);g.sort(t)}return new Oi(s,this._parents).order()}function cD(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function uD(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function hD(){return Array.from(this)}function dD(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var a=e[t],s=0,o=a.length;s<o;++s){var u=a[s];if(u)return u}return null}function gD(){let e=0;for(const t of this)++e;return e}function fD(){return!this.node()}function pD(e){for(var t=this._groups,n=0,a=t.length;n<a;++n)for(var s=t[n],o=0,u=s.length,c;o<u;++o)(c=s[o])&&e.call(c,c.__data__,o,s);return this}function mD(e){return function(){this.removeAttribute(e)}}function yD(e){return function(){this.removeAttributeNS(e.space,e.local)}}function bD(e,t){return function(){this.setAttribute(e,t)}}function vD(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function SD(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function xD(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function CD(e,t){var n=Ih(e);if(arguments.length<2){var a=this.node();return n.local?a.getAttributeNS(n.space,n.local):a.getAttribute(n)}return this.each((t==null?n.local?yD:mD:typeof t=="function"?n.local?xD:SD:n.local?vD:bD)(n,t))}function C2(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function _D(e){return function(){this.style.removeProperty(e)}}function wD(e,t,n){return function(){this.style.setProperty(e,t,n)}}function TD(e,t,n){return function(){var a=t.apply(this,arguments);a==null?this.style.removeProperty(e):this.style.setProperty(e,a,n)}}function kD(e,t,n){return arguments.length>1?this.each((t==null?_D:typeof t=="function"?TD:wD)(e,t,n??"")):zs(this.node(),e)}function zs(e,t){return e.style.getPropertyValue(t)||C2(e).getComputedStyle(e,null).getPropertyValue(t)}function AD(e){return function(){delete this[e]}}function ED(e,t){return function(){this[e]=t}}function RD(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function MD(e,t){return arguments.length>1?this.each((t==null?AD:typeof t=="function"?RD:ED)(e,t)):this.node()[e]}function _2(e){return e.trim().split(/^|\s+/)}function sm(e){return e.classList||new w2(e)}function w2(e){this._node=e,this._names=_2(e.getAttribute("class")||"")}w2.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function T2(e,t){for(var n=sm(e),a=-1,s=t.length;++a<s;)n.add(t[a])}function k2(e,t){for(var n=sm(e),a=-1,s=t.length;++a<s;)n.remove(t[a])}function DD(e){return function(){T2(this,e)}}function LD(e){return function(){k2(this,e)}}function BD(e,t){return function(){(t.apply(this,arguments)?T2:k2)(this,e)}}function OD(e,t){var n=_2(e+"");if(arguments.length<2){for(var a=sm(this.node()),s=-1,o=n.length;++s<o;)if(!a.contains(n[s]))return!1;return!0}return this.each((typeof t=="function"?BD:t?DD:LD)(n,t))}function PD(){this.textContent=""}function ND(e){return function(){this.textContent=e}}function ID(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function FD(e){return arguments.length?this.each(e==null?PD:(typeof e=="function"?ID:ND)(e)):this.node().textContent}function $D(){this.innerHTML=""}function zD(e){return function(){this.innerHTML=e}}function UD(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function qD(e){return arguments.length?this.each(e==null?$D:(typeof e=="function"?UD:zD)(e)):this.node().innerHTML}function HD(){this.nextSibling&&this.parentNode.appendChild(this)}function GD(){return this.each(HD)}function jD(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function YD(){return this.each(jD)}function WD(e){var t=typeof e=="function"?e:y2(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function VD(){return null}function XD(e,t){var n=typeof e=="function"?e:y2(e),a=t==null?VD:typeof t=="function"?t:am(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),a.apply(this,arguments)||null)})}function QD(){var e=this.parentNode;e&&e.removeChild(this)}function KD(){return this.each(QD)}function ZD(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function JD(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function tL(e){return this.select(e?JD:ZD)}function eL(e){return arguments.length?this.property("__data__",e):this.node().__data__}function iL(e){return function(t){e.call(this,t,this.__data__)}}function nL(e){return e.trim().split(/^|\s+/).map(function(t){var n="",a=t.indexOf(".");return a>=0&&(n=t.slice(a+1),t=t.slice(0,a)),{type:t,name:n}})}function rL(e){return function(){var t=this.__on;if(t){for(var n=0,a=-1,s=t.length,o;n<s;++n)o=t[n],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):t[++a]=o;++a?t.length=a:delete this.__on}}}function aL(e,t,n){return function(){var a=this.__on,s,o=iL(t);if(a){for(var u=0,c=a.length;u<c;++u)if((s=a[u]).type===e.type&&s.name===e.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=o,s.options=n),s.value=t;return}}this.addEventListener(e.type,o,n),s={type:e.type,name:e.name,value:t,listener:o,options:n},a?a.push(s):this.__on=[s]}}function sL(e,t,n){var a=nL(e+""),s,o=a.length,u;if(arguments.length<2){var c=this.node().__on;if(c){for(var g=0,d=c.length,f;g<d;++g)for(s=0,f=c[g];s<o;++s)if((u=a[s]).type===f.type&&u.name===f.name)return f.value}return}for(c=t?aL:rL,s=0;s<o;++s)this.each(c(a[s],t,n));return this}function A2(e,t,n){var a=C2(e),s=a.CustomEvent;typeof s=="function"?s=new s(t,n):(s=a.document.createEvent("Event"),n?(s.initEvent(t,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(t,!1,!1)),e.dispatchEvent(s)}function lL(e,t){return function(){return A2(this,e,t)}}function oL(e,t){return function(){return A2(this,e,t.apply(this,arguments))}}function cL(e,t){return this.each((typeof t=="function"?oL:lL)(e,t))}function*uL(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var a=e[t],s=0,o=a.length,u;s<o;++s)(u=a[s])&&(yield u)}var E2=[null];function Oi(e,t){this._groups=e,this._parents=t}function Zo(){return new Oi([[document.documentElement]],E2)}function hL(){return this}Oi.prototype=Zo.prototype={constructor:Oi,select:I3,selectAll:U3,selectChild:j3,selectChildren:X3,filter:Q3,data:iD,enter:K3,exit:rD,join:aD,merge:sD,selection:hL,order:lD,sort:oD,call:uD,nodes:hD,node:dD,size:gD,empty:fD,each:pD,attr:CD,style:kD,property:MD,classed:OD,text:FD,html:qD,raise:GD,lower:YD,append:WD,insert:XD,remove:KD,clone:tL,datum:eL,on:sL,dispatch:cL,[Symbol.iterator]:uL};function jt(e){return typeof e=="string"?new Oi([[document.querySelector(e)]],[document.documentElement]):new Oi([[e]],E2)}function lm(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function R2(e,t){var n=Object.create(e.prototype);for(var a in t)n[a]=t[a];return n}function Jo(){}var Oo=.7,eh=1/Oo,As="\\s*([+-]?\\d+)\\s*",Po="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",dL=/^#([0-9a-f]{3,8})$/,gL=new RegExp(`^rgb\\(${As},${As},${As}\\)$`),fL=new RegExp(`^rgb\\(${xn},${xn},${xn}\\)$`),pL=new RegExp(`^rgba\\(${As},${As},${As},${Po}\\)$`),mL=new RegExp(`^rgba\\(${xn},${xn},${xn},${Po}\\)$`),yL=new RegExp(`^hsl\\(${Po},${xn},${xn}\\)$`),bL=new RegExp(`^hsla\\(${Po},${xn},${xn},${Po}\\)$`),dS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};lm(Jo,No,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:gS,formatHex:gS,formatHex8:vL,formatHsl:SL,formatRgb:fS,toString:fS});function gS(){return this.rgb().formatHex()}function vL(){return this.rgb().formatHex8()}function SL(){return M2(this).formatHsl()}function fS(){return this.rgb().formatRgb()}function No(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=dL.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?pS(t):n===3?new Ci(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?xu(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?xu(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=gL.exec(e))?new Ci(t[1],t[2],t[3],1):(t=fL.exec(e))?new Ci(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=pL.exec(e))?xu(t[1],t[2],t[3],t[4]):(t=mL.exec(e))?xu(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=yL.exec(e))?bS(t[1],t[2]/100,t[3]/100,1):(t=bL.exec(e))?bS(t[1],t[2]/100,t[3]/100,t[4]):dS.hasOwnProperty(e)?pS(dS[e]):e==="transparent"?new Ci(NaN,NaN,NaN,0):null}function pS(e){return new Ci(e>>16&255,e>>8&255,e&255,1)}function xu(e,t,n,a){return a<=0&&(e=t=n=NaN),new Ci(e,t,n,a)}function xL(e){return e instanceof Jo||(e=No(e)),e?(e=e.rgb(),new Ci(e.r,e.g,e.b,e.opacity)):new Ci}function ip(e,t,n,a){return arguments.length===1?xL(e):new Ci(e,t,n,a??1)}function Ci(e,t,n,a){this.r=+e,this.g=+t,this.b=+n,this.opacity=+a}lm(Ci,ip,R2(Jo,{brighter(e){return e=e==null?eh:Math.pow(eh,e),new Ci(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Oo:Math.pow(Oo,e),new Ci(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ci(_a(this.r),_a(this.g),_a(this.b),ih(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:mS,formatHex:mS,formatHex8:CL,formatRgb:yS,toString:yS}));function mS(){return`#${va(this.r)}${va(this.g)}${va(this.b)}`}function CL(){return`#${va(this.r)}${va(this.g)}${va(this.b)}${va((isNaN(this.opacity)?1:this.opacity)*255)}`}function yS(){const e=ih(this.opacity);return`${e===1?"rgb(":"rgba("}${_a(this.r)}, ${_a(this.g)}, ${_a(this.b)}${e===1?")":`, ${e})`}`}function ih(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function _a(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function va(e){return e=_a(e),(e<16?"0":"")+e.toString(16)}function bS(e,t,n,a){return a<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new rn(e,t,n,a)}function M2(e){if(e instanceof rn)return new rn(e.h,e.s,e.l,e.opacity);if(e instanceof Jo||(e=No(e)),!e)return new rn;if(e instanceof rn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,a=e.b/255,s=Math.min(t,n,a),o=Math.max(t,n,a),u=NaN,c=o-s,g=(o+s)/2;return c?(t===o?u=(n-a)/c+(n<a)*6:n===o?u=(a-t)/c+2:u=(t-n)/c+4,c/=g<.5?o+s:2-o-s,u*=60):c=g>0&&g<1?0:u,new rn(u,c,g,e.opacity)}function _L(e,t,n,a){return arguments.length===1?M2(e):new rn(e,t,n,a??1)}function rn(e,t,n,a){this.h=+e,this.s=+t,this.l=+n,this.opacity=+a}lm(rn,_L,R2(Jo,{brighter(e){return e=e==null?eh:Math.pow(eh,e),new rn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Oo:Math.pow(Oo,e),new rn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,a=n+(n<.5?n:1-n)*t,s=2*n-a;return new Ci(Ef(e>=240?e-240:e+120,s,a),Ef(e,s,a),Ef(e<120?e+240:e-120,s,a),this.opacity)},clamp(){return new rn(vS(this.h),Cu(this.s),Cu(this.l),ih(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=ih(this.opacity);return`${e===1?"hsl(":"hsla("}${vS(this.h)}, ${Cu(this.s)*100}%, ${Cu(this.l)*100}%${e===1?")":`, ${e})`}`}}));function vS(e){return e=(e||0)%360,e<0?e+360:e}function Cu(e){return Math.max(0,Math.min(1,e||0))}function Ef(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const om=e=>()=>e;function D2(e,t){return function(n){return e+n*t}}function wL(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(a){return Math.pow(e+a*t,n)}}function rU(e,t){var n=t-e;return n?D2(e,n>180||n<-180?n-360*Math.round(n/360):n):om(isNaN(e)?t:e)}function TL(e){return(e=+e)==1?L2:function(t,n){return n-t?wL(t,n,e):om(isNaN(t)?n:t)}}function L2(e,t){var n=t-e;return n?D2(e,n):om(isNaN(e)?t:e)}const SS=function e(t){var n=TL(t);function a(s,o){var u=n((s=ip(s)).r,(o=ip(o)).r),c=n(s.g,o.g),g=n(s.b,o.b),d=L2(s.opacity,o.opacity);return function(f){return s.r=u(f),s.g=c(f),s.b=g(f),s.opacity=d(f),s+""}}return a.gamma=e,a}(1);function Nr(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var np=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Rf=new RegExp(np.source,"g");function kL(e){return function(){return e}}function AL(e){return function(t){return e(t)+""}}function EL(e,t){var n=np.lastIndex=Rf.lastIndex=0,a,s,o,u=-1,c=[],g=[];for(e=e+"",t=t+"";(a=np.exec(e))&&(s=Rf.exec(t));)(o=s.index)>n&&(o=t.slice(n,o),c[u]?c[u]+=o:c[++u]=o),(a=a[0])===(s=s[0])?c[u]?c[u]+=s:c[++u]=s:(c[++u]=null,g.push({i:u,x:Nr(a,s)})),n=Rf.lastIndex;return n<t.length&&(o=t.slice(n),c[u]?c[u]+=o:c[++u]=o),c.length<2?g[0]?AL(g[0].x):kL(t):(t=g.length,function(d){for(var f=0,m;f<t;++f)c[(m=g[f]).i]=m.x(d);return c.join("")})}var xS=180/Math.PI,rp={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function B2(e,t,n,a,s,o){var u,c,g;return(u=Math.sqrt(e*e+t*t))&&(e/=u,t/=u),(g=e*n+t*a)&&(n-=e*g,a-=t*g),(c=Math.sqrt(n*n+a*a))&&(n/=c,a/=c,g/=c),e*a<t*n&&(e=-e,t=-t,g=-g,u=-u),{translateX:s,translateY:o,rotate:Math.atan2(t,e)*xS,skewX:Math.atan(g)*xS,scaleX:u,scaleY:c}}var _u;function RL(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?rp:B2(t.a,t.b,t.c,t.d,t.e,t.f)}function ML(e){return e==null||(_u||(_u=document.createElementNS("http://www.w3.org/2000/svg","g")),_u.setAttribute("transform",e),!(e=_u.transform.baseVal.consolidate()))?rp:(e=e.matrix,B2(e.a,e.b,e.c,e.d,e.e,e.f))}function O2(e,t,n,a){function s(d){return d.length?d.pop()+" ":""}function o(d,f,m,y,v,S){if(d!==m||f!==y){var C=v.push("translate(",null,t,null,n);S.push({i:C-4,x:Nr(d,m)},{i:C-2,x:Nr(f,y)})}else(m||y)&&v.push("translate("+m+t+y+n)}function u(d,f,m,y){d!==f?(d-f>180?f+=360:f-d>180&&(d+=360),y.push({i:m.push(s(m)+"rotate(",null,a)-2,x:Nr(d,f)})):f&&m.push(s(m)+"rotate("+f+a)}function c(d,f,m,y){d!==f?y.push({i:m.push(s(m)+"skewX(",null,a)-2,x:Nr(d,f)}):f&&m.push(s(m)+"skewX("+f+a)}function g(d,f,m,y,v,S){if(d!==m||f!==y){var C=v.push(s(v)+"scale(",null,",",null,")");S.push({i:C-4,x:Nr(d,m)},{i:C-2,x:Nr(f,y)})}else(m!==1||y!==1)&&v.push(s(v)+"scale("+m+","+y+")")}return function(d,f){var m=[],y=[];return d=e(d),f=e(f),o(d.translateX,d.translateY,f.translateX,f.translateY,m,y),u(d.rotate,f.rotate,m,y),c(d.skewX,f.skewX,m,y),g(d.scaleX,d.scaleY,f.scaleX,f.scaleY,m,y),d=f=null,function(v){for(var S=-1,C=y.length,T;++S<C;)m[(T=y[S]).i]=T.x(v);return m.join("")}}}var DL=O2(RL,"px, ","px)","deg)"),LL=O2(ML,", ",")",")"),Us=0,So=0,uo=0,P2=1e3,nh,xo,rh=0,Aa=0,Fh=0,Io=typeof performance=="object"&&performance.now?performance:Date,N2=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function cm(){return Aa||(N2(BL),Aa=Io.now()+Fh)}function BL(){Aa=0}function ah(){this._call=this._time=this._next=null}ah.prototype=I2.prototype={constructor:ah,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?cm():+n)+(t==null?0:+t),!this._next&&xo!==this&&(xo?xo._next=this:nh=this,xo=this),this._call=e,this._time=n,ap()},stop:function(){this._call&&(this._call=null,this._time=1/0,ap())}};function I2(e,t,n){var a=new ah;return a.restart(e,t,n),a}function OL(){cm(),++Us;for(var e=nh,t;e;)(t=Aa-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Us}function CS(){Aa=(rh=Io.now())+Fh,Us=So=0;try{OL()}finally{Us=0,NL(),Aa=0}}function PL(){var e=Io.now(),t=e-rh;t>P2&&(Fh-=t,rh=e)}function NL(){for(var e,t=nh,n,a=1/0;t;)t._call?(a>t._time&&(a=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:nh=n);xo=e,ap(a)}function ap(e){if(!Us){So&&(So=clearTimeout(So));var t=e-Aa;t>24?(e<1/0&&(So=setTimeout(CS,e-Io.now()-Fh)),uo&&(uo=clearInterval(uo))):(uo||(rh=Io.now(),uo=setInterval(PL,P2)),Us=1,N2(CS))}}function _S(e,t,n){var a=new ah;return t=t==null?0:+t,a.restart(s=>{a.stop(),e(s+t)},t,n),a}var IL=m2("start","end","cancel","interrupt"),FL=[],F2=0,wS=1,sp=2,Iu=3,TS=4,lp=5,Fu=6;function $h(e,t,n,a,s,o){var u=e.__transition;if(!u)e.__transition={};else if(n in u)return;$L(e,n,{name:t,index:a,group:s,on:IL,tween:FL,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:F2})}function um(e,t){var n=on(e,t);if(n.state>F2)throw new Error("too late; already scheduled");return n}function An(e,t){var n=on(e,t);if(n.state>Iu)throw new Error("too late; already running");return n}function on(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function $L(e,t,n){var a=e.__transition,s;a[t]=n,n.timer=I2(o,0,n.time);function o(d){n.state=wS,n.timer.restart(u,n.delay,n.time),n.delay<=d&&u(d-n.delay)}function u(d){var f,m,y,v;if(n.state!==wS)return g();for(f in a)if(v=a[f],v.name===n.name){if(v.state===Iu)return _S(u);v.state===TS?(v.state=Fu,v.timer.stop(),v.on.call("interrupt",e,e.__data__,v.index,v.group),delete a[f]):+f<t&&(v.state=Fu,v.timer.stop(),v.on.call("cancel",e,e.__data__,v.index,v.group),delete a[f])}if(_S(function(){n.state===Iu&&(n.state=TS,n.timer.restart(c,n.delay,n.time),c(d))}),n.state=sp,n.on.call("start",e,e.__data__,n.index,n.group),n.state===sp){for(n.state=Iu,s=new Array(y=n.tween.length),f=0,m=-1;f<y;++f)(v=n.tween[f].value.call(e,e.__data__,n.index,n.group))&&(s[++m]=v);s.length=m+1}}function c(d){for(var f=d<n.duration?n.ease.call(null,d/n.duration):(n.timer.restart(g),n.state=lp,1),m=-1,y=s.length;++m<y;)s[m].call(e,f);n.state===lp&&(n.on.call("end",e,e.__data__,n.index,n.group),g())}function g(){n.state=Fu,n.timer.stop(),delete a[t];for(var d in a)return;delete e.__transition}}function zL(e,t){var n=e.__transition,a,s,o=!0,u;if(n){t=t==null?null:t+"";for(u in n){if((a=n[u]).name!==t){o=!1;continue}s=a.state>sp&&a.state<lp,a.state=Fu,a.timer.stop(),a.on.call(s?"interrupt":"cancel",e,e.__data__,a.index,a.group),delete n[u]}o&&delete e.__transition}}function UL(e){return this.each(function(){zL(this,e)})}function qL(e,t){var n,a;return function(){var s=An(this,e),o=s.tween;if(o!==n){a=n=o;for(var u=0,c=a.length;u<c;++u)if(a[u].name===t){a=a.slice(),a.splice(u,1);break}}s.tween=a}}function HL(e,t,n){var a,s;if(typeof n!="function")throw new Error;return function(){var o=An(this,e),u=o.tween;if(u!==a){s=(a=u).slice();for(var c={name:t,value:n},g=0,d=s.length;g<d;++g)if(s[g].name===t){s[g]=c;break}g===d&&s.push(c)}o.tween=s}}function GL(e,t){var n=this._id;if(e+="",arguments.length<2){for(var a=on(this.node(),n).tween,s=0,o=a.length,u;s<o;++s)if((u=a[s]).name===e)return u.value;return null}return this.each((t==null?qL:HL)(n,e,t))}function hm(e,t,n){var a=e._id;return e.each(function(){var s=An(this,a);(s.value||(s.value={}))[t]=n.apply(this,arguments)}),function(s){return on(s,a).value[t]}}function $2(e,t){var n;return(typeof t=="number"?Nr:t instanceof No?SS:(n=No(t))?(t=n,SS):EL)(e,t)}function jL(e){return function(){this.removeAttribute(e)}}function YL(e){return function(){this.removeAttributeNS(e.space,e.local)}}function WL(e,t,n){var a,s=n+"",o;return function(){var u=this.getAttribute(e);return u===s?null:u===a?o:o=t(a=u,n)}}function VL(e,t,n){var a,s=n+"",o;return function(){var u=this.getAttributeNS(e.space,e.local);return u===s?null:u===a?o:o=t(a=u,n)}}function XL(e,t,n){var a,s,o;return function(){var u,c=n(this),g;return c==null?void this.removeAttribute(e):(u=this.getAttribute(e),g=c+"",u===g?null:u===a&&g===s?o:(s=g,o=t(a=u,c)))}}function QL(e,t,n){var a,s,o;return function(){var u,c=n(this),g;return c==null?void this.removeAttributeNS(e.space,e.local):(u=this.getAttributeNS(e.space,e.local),g=c+"",u===g?null:u===a&&g===s?o:(s=g,o=t(a=u,c)))}}function KL(e,t){var n=Ih(e),a=n==="transform"?LL:$2;return this.attrTween(e,typeof t=="function"?(n.local?QL:XL)(n,a,hm(this,"attr."+e,t)):t==null?(n.local?YL:jL)(n):(n.local?VL:WL)(n,a,t))}function ZL(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function JL(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function tB(e,t){var n,a;function s(){var o=t.apply(this,arguments);return o!==a&&(n=(a=o)&&JL(e,o)),n}return s._value=t,s}function eB(e,t){var n,a;function s(){var o=t.apply(this,arguments);return o!==a&&(n=(a=o)&&ZL(e,o)),n}return s._value=t,s}function iB(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var a=Ih(e);return this.tween(n,(a.local?tB:eB)(a,t))}function nB(e,t){return function(){um(this,e).delay=+t.apply(this,arguments)}}function rB(e,t){return t=+t,function(){um(this,e).delay=t}}function aB(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?nB:rB)(t,e)):on(this.node(),t).delay}function sB(e,t){return function(){An(this,e).duration=+t.apply(this,arguments)}}function lB(e,t){return t=+t,function(){An(this,e).duration=t}}function oB(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?sB:lB)(t,e)):on(this.node(),t).duration}function cB(e,t){if(typeof t!="function")throw new Error;return function(){An(this,e).ease=t}}function uB(e){var t=this._id;return arguments.length?this.each(cB(t,e)):on(this.node(),t).ease}function hB(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;An(this,e).ease=n}}function dB(e){if(typeof e!="function")throw new Error;return this.each(hB(this._id,e))}function gB(e){typeof e!="function"&&(e=v2(e));for(var t=this._groups,n=t.length,a=new Array(n),s=0;s<n;++s)for(var o=t[s],u=o.length,c=a[s]=[],g,d=0;d<u;++d)(g=o[d])&&e.call(g,g.__data__,d,o)&&c.push(g);return new sr(a,this._parents,this._name,this._id)}function fB(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,a=t.length,s=n.length,o=Math.min(a,s),u=new Array(a),c=0;c<o;++c)for(var g=t[c],d=n[c],f=g.length,m=u[c]=new Array(f),y,v=0;v<f;++v)(y=g[v]||d[v])&&(m[v]=y);for(;c<a;++c)u[c]=t[c];return new sr(u,this._parents,this._name,this._id)}function pB(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function mB(e,t,n){var a,s,o=pB(t)?um:An;return function(){var u=o(this,e),c=u.on;c!==a&&(s=(a=c).copy()).on(t,n),u.on=s}}function yB(e,t){var n=this._id;return arguments.length<2?on(this.node(),n).on.on(e):this.each(mB(n,e,t))}function bB(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function vB(){return this.on("end.remove",bB(this._id))}function SB(e){var t=this._name,n=this._id;typeof e!="function"&&(e=am(e));for(var a=this._groups,s=a.length,o=new Array(s),u=0;u<s;++u)for(var c=a[u],g=c.length,d=o[u]=new Array(g),f,m,y=0;y<g;++y)(f=c[y])&&(m=e.call(f,f.__data__,y,c))&&("__data__"in f&&(m.__data__=f.__data__),d[y]=m,$h(d[y],t,n,y,d,on(f,n)));return new sr(o,this._parents,t,n)}function xB(e){var t=this._name,n=this._id;typeof e!="function"&&(e=b2(e));for(var a=this._groups,s=a.length,o=[],u=[],c=0;c<s;++c)for(var g=a[c],d=g.length,f,m=0;m<d;++m)if(f=g[m]){for(var y=e.call(f,f.__data__,m,g),v,S=on(f,n),C=0,T=y.length;C<T;++C)(v=y[C])&&$h(v,t,n,C,y,S);o.push(y),u.push(f)}return new sr(o,u,t,n)}var CB=Zo.prototype.constructor;function _B(){return new CB(this._groups,this._parents)}function wB(e,t){var n,a,s;return function(){var o=zs(this,e),u=(this.style.removeProperty(e),zs(this,e));return o===u?null:o===n&&u===a?s:s=t(n=o,a=u)}}function z2(e){return function(){this.style.removeProperty(e)}}function TB(e,t,n){var a,s=n+"",o;return function(){var u=zs(this,e);return u===s?null:u===a?o:o=t(a=u,n)}}function kB(e,t,n){var a,s,o;return function(){var u=zs(this,e),c=n(this),g=c+"";return c==null&&(g=c=(this.style.removeProperty(e),zs(this,e))),u===g?null:u===a&&g===s?o:(s=g,o=t(a=u,c))}}function AB(e,t){var n,a,s,o="style."+t,u="end."+o,c;return function(){var g=An(this,e),d=g.on,f=g.value[o]==null?c||(c=z2(t)):void 0;(d!==n||s!==f)&&(a=(n=d).copy()).on(u,s=f),g.on=a}}function EB(e,t,n){var a=(e+="")=="transform"?DL:$2;return t==null?this.styleTween(e,wB(e,a)).on("end.style."+e,z2(e)):typeof t=="function"?this.styleTween(e,kB(e,a,hm(this,"style."+e,t))).each(AB(this._id,e)):this.styleTween(e,TB(e,a,t),n).on("end.style."+e,null)}function RB(e,t,n){return function(a){this.style.setProperty(e,t.call(this,a),n)}}function MB(e,t,n){var a,s;function o(){var u=t.apply(this,arguments);return u!==s&&(a=(s=u)&&RB(e,u,n)),a}return o._value=t,o}function DB(e,t,n){var a="style."+(e+="");if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;return this.tween(a,MB(e,t,n??""))}function LB(e){return function(){this.textContent=e}}function BB(e){return function(){var t=e(this);this.textContent=t??""}}function OB(e){return this.tween("text",typeof e=="function"?BB(hm(this,"text",e)):LB(e==null?"":e+""))}function PB(e){return function(t){this.textContent=e.call(this,t)}}function NB(e){var t,n;function a(){var s=e.apply(this,arguments);return s!==n&&(t=(n=s)&&PB(s)),t}return a._value=e,a}function IB(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,NB(e))}function FB(){for(var e=this._name,t=this._id,n=U2(),a=this._groups,s=a.length,o=0;o<s;++o)for(var u=a[o],c=u.length,g,d=0;d<c;++d)if(g=u[d]){var f=on(g,t);$h(g,e,n,d,u,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new sr(a,this._parents,e,n)}function $B(){var e,t,n=this,a=n._id,s=n.size();return new Promise(function(o,u){var c={value:u},g={value:function(){--s===0&&o()}};n.each(function(){var d=An(this,a),f=d.on;f!==e&&(t=(e=f).copy(),t._.cancel.push(c),t._.interrupt.push(c),t._.end.push(g)),d.on=t}),s===0&&o()})}var zB=0;function sr(e,t,n,a){this._groups=e,this._parents=t,this._name=n,this._id=a}function U2(){return++zB}var Qn=Zo.prototype;sr.prototype={constructor:sr,select:SB,selectAll:xB,selectChild:Qn.selectChild,selectChildren:Qn.selectChildren,filter:gB,merge:fB,selection:_B,transition:FB,call:Qn.call,nodes:Qn.nodes,node:Qn.node,size:Qn.size,empty:Qn.empty,each:Qn.each,on:yB,attr:KL,attrTween:iB,style:EB,styleTween:DB,text:OB,textTween:IB,remove:vB,tween:GL,delay:aB,duration:oB,ease:uB,easeVarying:dB,end:$B,[Symbol.iterator]:Qn[Symbol.iterator]};function UB(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var qB={time:null,delay:0,duration:250,ease:UB};function HB(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function GB(e){var t,n;e instanceof sr?(t=e._id,e=e._name):(t=U2(),(n=qB).time=cm(),e=e==null?null:e+"");for(var a=this._groups,s=a.length,o=0;o<s;++o)for(var u=a[o],c=u.length,g,d=0;d<c;++d)(g=u[d])&&$h(g,e,t,d,u,n||HB(g,t));return new sr(a,this._parents,e,t)}Zo.prototype.interrupt=UL;Zo.prototype.transition=GB;const op=Math.PI,cp=2*op,pa=1e-6,jB=cp-pa;function q2(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function YB(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return q2;const n=10**t;return function(a){this._+=a[0];for(let s=1,o=a.length;s<o;++s)this._+=Math.round(arguments[s]*n)/n+a[s]}}class WB{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?q2:YB(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,a,s){this._append`Q${+t},${+n},${this._x1=+a},${this._y1=+s}`}bezierCurveTo(t,n,a,s,o,u){this._append`C${+t},${+n},${+a},${+s},${this._x1=+o},${this._y1=+u}`}arcTo(t,n,a,s,o){if(t=+t,n=+n,a=+a,s=+s,o=+o,o<0)throw new Error(`negative radius: ${o}`);let u=this._x1,c=this._y1,g=a-t,d=s-n,f=u-t,m=c-n,y=f*f+m*m;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(y>pa)if(!(Math.abs(m*g-d*f)>pa)||!o)this._append`L${this._x1=t},${this._y1=n}`;else{let v=a-u,S=s-c,C=g*g+d*d,T=v*v+S*S,w=Math.sqrt(C),k=Math.sqrt(y),E=o*Math.tan((op-Math.acos((C+y-T)/(2*w*k)))/2),O=E/k,L=E/w;Math.abs(O-1)>pa&&this._append`L${t+O*f},${n+O*m}`,this._append`A${o},${o},0,0,${+(m*v>f*S)},${this._x1=t+L*g},${this._y1=n+L*d}`}}arc(t,n,a,s,o,u){if(t=+t,n=+n,a=+a,u=!!u,a<0)throw new Error(`negative radius: ${a}`);let c=a*Math.cos(s),g=a*Math.sin(s),d=t+c,f=n+g,m=1^u,y=u?s-o:o-s;this._x1===null?this._append`M${d},${f}`:(Math.abs(this._x1-d)>pa||Math.abs(this._y1-f)>pa)&&this._append`L${d},${f}`,a&&(y<0&&(y=y%cp+cp),y>jB?this._append`A${a},${a},0,1,${m},${t-c},${n-g}A${a},${a},0,1,${m},${this._x1=d},${this._y1=f}`:y>pa&&this._append`A${a},${a},0,${+(y>=op)},${m},${this._x1=t+a*Math.cos(o)},${this._y1=n+a*Math.sin(o)}`)}rect(t,n,a,s){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${a=+a}v${+s}h${-a}Z`}toString(){return this._}}function xs(e){return function(){return e}}const aU=Math.abs,sU=Math.atan2,lU=Math.cos,oU=Math.max,cU=Math.min,uU=Math.sin,hU=Math.sqrt,kS=1e-12,dm=Math.PI,AS=dm/2,dU=2*dm;function gU(e){return e>1?0:e<-1?dm:Math.acos(e)}function fU(e){return e>=1?AS:e<=-1?-AS:Math.asin(e)}function VB(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const a=Math.floor(n);if(!(a>=0))throw new RangeError(`invalid digits: ${n}`);t=a}return e},()=>new WB(t)}function XB(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function H2(e){this._context=e}H2.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function sh(e){return new H2(e)}function QB(e){return e[0]}function KB(e){return e[1]}function ZB(e,t){var n=xs(!0),a=null,s=sh,o=null,u=VB(c);e=typeof e=="function"?e:e===void 0?QB:xs(e),t=typeof t=="function"?t:t===void 0?KB:xs(t);function c(g){var d,f=(g=XB(g)).length,m,y=!1,v;for(a==null&&(o=s(v=u())),d=0;d<=f;++d)!(d<f&&n(m=g[d],d,g))===y&&((y=!y)?o.lineStart():o.lineEnd()),y&&o.point(+e(m,d,g),+t(m,d,g));if(v)return o=null,v+""||null}return c.x=function(g){return arguments.length?(e=typeof g=="function"?g:xs(+g),c):e},c.y=function(g){return arguments.length?(t=typeof g=="function"?g:xs(+g),c):t},c.defined=function(g){return arguments.length?(n=typeof g=="function"?g:xs(!!g),c):n},c.curve=function(g){return arguments.length?(s=g,a!=null&&(o=s(a)),c):s},c.context=function(g){return arguments.length?(g==null?a=o=null:o=s(a=g),c):a},c}class G2{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function j2(e){return new G2(e,!0)}function Y2(e){return new G2(e,!1)}function $r(){}function lh(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function zh(e){this._context=e}zh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:lh(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:lh(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function $u(e){return new zh(e)}function W2(e){this._context=e}W2.prototype={areaStart:$r,areaEnd:$r,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:lh(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function JB(e){return new W2(e)}function V2(e){this._context=e}V2.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,a=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,a):this._context.moveTo(n,a);break;case 3:this._point=4;default:lh(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function tO(e){return new V2(e)}function X2(e,t){this._basis=new zh(e),this._beta=t}X2.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var e=this._x,t=this._y,n=e.length-1;if(n>0)for(var a=e[0],s=t[0],o=e[n]-a,u=t[n]-s,c=-1,g;++c<=n;)g=c/n,this._basis.point(this._beta*e[c]+(1-this._beta)*(a+g*o),this._beta*t[c]+(1-this._beta)*(s+g*u));this._x=this._y=null,this._basis.lineEnd()},point:function(e,t){this._x.push(+e),this._y.push(+t)}};const eO=function e(t){function n(a){return t===1?new zh(a):new X2(a,t)}return n.beta=function(a){return e(+a)},n}(.85);function oh(e,t,n){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-t),e._y2+e._k*(e._y1-n),e._x2,e._y2)}function gm(e,t){this._context=e,this._k=(1-t)/6}gm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:oh(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2,this._x1=e,this._y1=t;break;case 2:this._point=3;default:oh(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const Q2=function e(t){function n(a){return new gm(a,t)}return n.tension=function(a){return e(+a)},n}(0);function fm(e,t){this._context=e,this._k=(1-t)/6}fm.prototype={areaStart:$r,areaEnd:$r,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:oh(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const iO=function e(t){function n(a){return new fm(a,t)}return n.tension=function(a){return e(+a)},n}(0);function pm(e,t){this._context=e,this._k=(1-t)/6}pm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:oh(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const nO=function e(t){function n(a){return new pm(a,t)}return n.tension=function(a){return e(+a)},n}(0);function mm(e,t,n){var a=e._x1,s=e._y1,o=e._x2,u=e._y2;if(e._l01_a>kS){var c=2*e._l01_2a+3*e._l01_a*e._l12_a+e._l12_2a,g=3*e._l01_a*(e._l01_a+e._l12_a);a=(a*c-e._x0*e._l12_2a+e._x2*e._l01_2a)/g,s=(s*c-e._y0*e._l12_2a+e._y2*e._l01_2a)/g}if(e._l23_a>kS){var d=2*e._l23_2a+3*e._l23_a*e._l12_a+e._l12_2a,f=3*e._l23_a*(e._l23_a+e._l12_a);o=(o*d+e._x1*e._l23_2a-t*e._l12_2a)/f,u=(u*d+e._y1*e._l23_2a-n*e._l12_2a)/f}e._context.bezierCurveTo(a,s,o,u,e._x2,e._y2)}function K2(e,t){this._context=e,this._alpha=t}K2.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,a=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+a*a,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3;default:mm(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const Z2=function e(t){function n(a){return t?new K2(a,t):new gm(a,0)}return n.alpha=function(a){return e(+a)},n}(.5);function J2(e,t){this._context=e,this._alpha=t}J2.prototype={areaStart:$r,areaEnd:$r,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,a=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+a*a,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:mm(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const rO=function e(t){function n(a){return t?new J2(a,t):new fm(a,0)}return n.alpha=function(a){return e(+a)},n}(.5);function t1(e,t){this._context=e,this._alpha=t}t1.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,a=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+a*a,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:mm(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const aO=function e(t){function n(a){return t?new t1(a,t):new pm(a,0)}return n.alpha=function(a){return e(+a)},n}(.5);function e1(e){this._context=e}e1.prototype={areaStart:$r,areaEnd:$r,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function sO(e){return new e1(e)}function ES(e){return e<0?-1:1}function RS(e,t,n){var a=e._x1-e._x0,s=t-e._x1,o=(e._y1-e._y0)/(a||s<0&&-0),u=(n-e._y1)/(s||a<0&&-0),c=(o*s+u*a)/(a+s);return(ES(o)+ES(u))*Math.min(Math.abs(o),Math.abs(u),.5*Math.abs(c))||0}function MS(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function Mf(e,t,n){var a=e._x0,s=e._y0,o=e._x1,u=e._y1,c=(o-a)/3;e._context.bezierCurveTo(a+c,s+c*t,o-c,u-c*n,o,u)}function ch(e){this._context=e}ch.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Mf(this,this._t0,MS(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Mf(this,MS(this,n=RS(this,e,t)),n);break;default:Mf(this,this._t0,n=RS(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function i1(e){this._context=new n1(e)}(i1.prototype=Object.create(ch.prototype)).point=function(e,t){ch.prototype.point.call(this,t,e)};function n1(e){this._context=e}n1.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,a,s,o){this._context.bezierCurveTo(t,e,a,n,o,s)}};function r1(e){return new ch(e)}function a1(e){return new i1(e)}function s1(e){this._context=e}s1.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var a=DS(e),s=DS(t),o=0,u=1;u<n;++o,++u)this._context.bezierCurveTo(a[0][o],s[0][o],a[1][o],s[1][o],e[u],t[u]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function DS(e){var t,n=e.length-1,a,s=new Array(n),o=new Array(n),u=new Array(n);for(s[0]=0,o[0]=2,u[0]=e[0]+2*e[1],t=1;t<n-1;++t)s[t]=1,o[t]=4,u[t]=4*e[t]+2*e[t+1];for(s[n-1]=2,o[n-1]=7,u[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)a=s[t]/o[t-1],o[t]-=a,u[t]-=a*u[t-1];for(s[n-1]=u[n-1]/o[n-1],t=n-2;t>=0;--t)s[t]=(u[t]-s[t+1])/o[t];for(o[n-1]=(e[n]+s[n-1])/2,t=0;t<n-1;++t)o[t]=2*e[t+1]-s[t+1];return[s,o]}function l1(e){return new s1(e)}function Uh(e,t){this._context=e,this._t=t}Uh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function o1(e){return new Uh(e,.5)}function c1(e){return new Uh(e,0)}function u1(e){return new Uh(e,1)}function Co(e,t,n){this.k=e,this.x=t,this.y=n}Co.prototype={constructor:Co,scale:function(e){return e===1?this:new Co(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Co(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Co.prototype;var lO=x(e=>{var s;const{securityLevel:t}=Vt();let n=jt("body");if(t==="sandbox"){const u=((s=jt(`#i${e}`).node())==null?void 0:s.contentDocument)??document;n=jt(u.body)}return n.select(`#${e}`)},"selectSvgElement");function ym(e){return typeof e>"u"||e===null}x(ym,"isNothing");function h1(e){return typeof e=="object"&&e!==null}x(h1,"isObject");function d1(e){return Array.isArray(e)?e:ym(e)?[]:[e]}x(d1,"toArray");function g1(e,t){var n,a,s,o;if(t)for(o=Object.keys(t),n=0,a=o.length;n<a;n+=1)s=o[n],e[s]=t[s];return e}x(g1,"extend");function f1(e,t){var n="",a;for(a=0;a<t;a+=1)n+=e;return n}x(f1,"repeat");function p1(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}x(p1,"isNegativeZero");var oO=ym,cO=h1,uO=d1,hO=f1,dO=p1,gO=g1,Be={isNothing:oO,isObject:cO,toArray:uO,repeat:hO,isNegativeZero:dO,extend:gO};function bm(e,t){var n="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),a+" "+n):a}x(bm,"formatError");function qs(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=bm(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}x(qs,"YAMLException$1");qs.prototype=Object.create(Error.prototype);qs.prototype.constructor=qs;qs.prototype.toString=x(function(t){return this.name+": "+bm(this,t)},"toString");var xi=qs;function zu(e,t,n,a,s){var o="",u="",c=Math.floor(s/2)-1;return a-t>c&&(o=" ... ",t=a-c+o.length),n-a>c&&(u=" ...",n=a+c-u.length),{str:o+e.slice(t,n).replace(/\t/g,"→")+u,pos:a-t+o.length}}x(zu,"getLine");function Uu(e,t){return Be.repeat(" ",t-e.length)+e}x(Uu,"padStart");function m1(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),typeof t.indent!="number"&&(t.indent=1),typeof t.linesBefore!="number"&&(t.linesBefore=3),typeof t.linesAfter!="number"&&(t.linesAfter=2);for(var n=/\r?\n|\r|\0/g,a=[0],s=[],o,u=-1;o=n.exec(e.buffer);)s.push(o.index),a.push(o.index+o[0].length),e.position<=o.index&&u<0&&(u=a.length-2);u<0&&(u=a.length-1);var c="",g,d,f=Math.min(e.line+t.linesAfter,s.length).toString().length,m=t.maxLength-(t.indent+f+3);for(g=1;g<=t.linesBefore&&!(u-g<0);g++)d=zu(e.buffer,a[u-g],s[u-g],e.position-(a[u]-a[u-g]),m),c=Be.repeat(" ",t.indent)+Uu((e.line-g+1).toString(),f)+" | "+d.str+`
`+c;for(d=zu(e.buffer,a[u],s[u],e.position,m),c+=Be.repeat(" ",t.indent)+Uu((e.line+1).toString(),f)+" | "+d.str+`
`,c+=Be.repeat("-",t.indent+f+3+d.pos)+`^
`,g=1;g<=t.linesAfter&&!(u+g>=s.length);g++)d=zu(e.buffer,a[u+g],s[u+g],e.position-(a[u]-a[u+g]),m),c+=Be.repeat(" ",t.indent)+Uu((e.line+g+1).toString(),f)+" | "+d.str+`
`;return c.replace(/\n$/,"")}x(m1,"makeSnippet");var fO=m1,pO=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],mO=["scalar","sequence","mapping"];function y1(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(a){t[String(a)]=n})}),t}x(y1,"compileStyleAliases");function b1(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(pO.indexOf(n)===-1)throw new xi('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=y1(t.styleAliases||null),mO.indexOf(this.kind)===-1)throw new xi('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}x(b1,"Type$1");var ti=b1;function up(e,t){var n=[];return e[t].forEach(function(a){var s=n.length;n.forEach(function(o,u){o.tag===a.tag&&o.kind===a.kind&&o.multi===a.multi&&(s=u)}),n[s]=a}),n}x(up,"compileList");function v1(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function a(s){s.multi?(e.multi[s.kind].push(s),e.multi.fallback.push(s)):e[s.kind][s.tag]=e.fallback[s.tag]=s}for(x(a,"collectType"),t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(a);return e}x(v1,"compileMap");function uh(e){return this.extend(e)}x(uh,"Schema$1");uh.prototype.extend=x(function(t){var n=[],a=[];if(t instanceof ti)a.push(t);else if(Array.isArray(t))a=a.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(a=a.concat(t.explicit));else throw new xi("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(o){if(!(o instanceof ti))throw new xi("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new xi("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new xi("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(o){if(!(o instanceof ti))throw new xi("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var s=Object.create(uh.prototype);return s.implicit=(this.implicit||[]).concat(n),s.explicit=(this.explicit||[]).concat(a),s.compiledImplicit=up(s,"implicit"),s.compiledExplicit=up(s,"explicit"),s.compiledTypeMap=v1(s.compiledImplicit,s.compiledExplicit),s},"extend");var yO=uh,bO=new ti("tag:yaml.org,2002:str",{kind:"scalar",construct:x(function(e){return e!==null?e:""},"construct")}),vO=new ti("tag:yaml.org,2002:seq",{kind:"sequence",construct:x(function(e){return e!==null?e:[]},"construct")}),SO=new ti("tag:yaml.org,2002:map",{kind:"mapping",construct:x(function(e){return e!==null?e:{}},"construct")}),xO=new yO({explicit:[bO,vO,SO]});function S1(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}x(S1,"resolveYamlNull");function x1(){return null}x(x1,"constructYamlNull");function C1(e){return e===null}x(C1,"isNull");var CO=new ti("tag:yaml.org,2002:null",{kind:"scalar",resolve:S1,construct:x1,predicate:C1,represent:{canonical:x(function(){return"~"},"canonical"),lowercase:x(function(){return"null"},"lowercase"),uppercase:x(function(){return"NULL"},"uppercase"),camelcase:x(function(){return"Null"},"camelcase"),empty:x(function(){return""},"empty")},defaultStyle:"lowercase"});function _1(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}x(_1,"resolveYamlBoolean");function w1(e){return e==="true"||e==="True"||e==="TRUE"}x(w1,"constructYamlBoolean");function T1(e){return Object.prototype.toString.call(e)==="[object Boolean]"}x(T1,"isBoolean");var _O=new ti("tag:yaml.org,2002:bool",{kind:"scalar",resolve:_1,construct:w1,predicate:T1,represent:{lowercase:x(function(e){return e?"true":"false"},"lowercase"),uppercase:x(function(e){return e?"TRUE":"FALSE"},"uppercase"),camelcase:x(function(e){return e?"True":"False"},"camelcase")},defaultStyle:"lowercase"});function k1(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}x(k1,"isHexCode");function A1(e){return 48<=e&&e<=55}x(A1,"isOctCode");function E1(e){return 48<=e&&e<=57}x(E1,"isDecCode");function R1(e){if(e===null)return!1;var t=e.length,n=0,a=!1,s;if(!t)return!1;if(s=e[n],(s==="-"||s==="+")&&(s=e[++n]),s==="0"){if(n+1===t)return!0;if(s=e[++n],s==="b"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(s!=="0"&&s!=="1")return!1;a=!0}return a&&s!=="_"}if(s==="x"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(!k1(e.charCodeAt(n)))return!1;a=!0}return a&&s!=="_"}if(s==="o"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(!A1(e.charCodeAt(n)))return!1;a=!0}return a&&s!=="_"}}if(s==="_")return!1;for(;n<t;n++)if(s=e[n],s!=="_"){if(!E1(e.charCodeAt(n)))return!1;a=!0}return!(!a||s==="_")}x(R1,"resolveYamlInteger");function M1(e){var t=e,n=1,a;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),a=t[0],(a==="-"||a==="+")&&(a==="-"&&(n=-1),t=t.slice(1),a=t[0]),t==="0")return 0;if(a==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}x(M1,"constructYamlInteger");function D1(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Be.isNegativeZero(e)}x(D1,"isInteger");var wO=new ti("tag:yaml.org,2002:int",{kind:"scalar",resolve:R1,construct:M1,predicate:D1,represent:{binary:x(function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},"binary"),octal:x(function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},"octal"),decimal:x(function(e){return e.toString(10)},"decimal"),hexadecimal:x(function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)},"hexadecimal")},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),TO=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function L1(e){return!(e===null||!TO.test(e)||e[e.length-1]==="_")}x(L1,"resolveYamlFloat");function B1(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}x(B1,"constructYamlFloat");var kO=/^[-+]?[0-9]+e/;function O1(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Be.isNegativeZero(e))return"-0.0";return n=e.toString(10),kO.test(n)?n.replace("e",".e"):n}x(O1,"representYamlFloat");function P1(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Be.isNegativeZero(e))}x(P1,"isFloat");var AO=new ti("tag:yaml.org,2002:float",{kind:"scalar",resolve:L1,construct:B1,predicate:P1,represent:O1,defaultStyle:"lowercase"}),N1=xO.extend({implicit:[CO,_O,wO,AO]}),EO=N1,I1=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),F1=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function $1(e){return e===null?!1:I1.exec(e)!==null||F1.exec(e)!==null}x($1,"resolveYamlTimestamp");function z1(e){var t,n,a,s,o,u,c,g=0,d=null,f,m,y;if(t=I1.exec(e),t===null&&(t=F1.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],a=+t[2]-1,s=+t[3],!t[4])return new Date(Date.UTC(n,a,s));if(o=+t[4],u=+t[5],c=+t[6],t[7]){for(g=t[7].slice(0,3);g.length<3;)g+="0";g=+g}return t[9]&&(f=+t[10],m=+(t[11]||0),d=(f*60+m)*6e4,t[9]==="-"&&(d=-d)),y=new Date(Date.UTC(n,a,s,o,u,c,g)),d&&y.setTime(y.getTime()-d),y}x(z1,"constructYamlTimestamp");function U1(e){return e.toISOString()}x(U1,"representYamlTimestamp");var RO=new ti("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:$1,construct:z1,instanceOf:Date,represent:U1});function q1(e){return e==="<<"||e===null}x(q1,"resolveYamlMerge");var MO=new ti("tag:yaml.org,2002:merge",{kind:"scalar",resolve:q1}),vm=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function H1(e){if(e===null)return!1;var t,n,a=0,s=e.length,o=vm;for(n=0;n<s;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;a+=6}return a%8===0}x(H1,"resolveYamlBinary");function G1(e){var t,n,a=e.replace(/[\r\n=]/g,""),s=a.length,o=vm,u=0,c=[];for(t=0;t<s;t++)t%4===0&&t&&(c.push(u>>16&255),c.push(u>>8&255),c.push(u&255)),u=u<<6|o.indexOf(a.charAt(t));return n=s%4*6,n===0?(c.push(u>>16&255),c.push(u>>8&255),c.push(u&255)):n===18?(c.push(u>>10&255),c.push(u>>2&255)):n===12&&c.push(u>>4&255),new Uint8Array(c)}x(G1,"constructYamlBinary");function j1(e){var t="",n=0,a,s,o=e.length,u=vm;for(a=0;a<o;a++)a%3===0&&a&&(t+=u[n>>18&63],t+=u[n>>12&63],t+=u[n>>6&63],t+=u[n&63]),n=(n<<8)+e[a];return s=o%3,s===0?(t+=u[n>>18&63],t+=u[n>>12&63],t+=u[n>>6&63],t+=u[n&63]):s===2?(t+=u[n>>10&63],t+=u[n>>4&63],t+=u[n<<2&63],t+=u[64]):s===1&&(t+=u[n>>2&63],t+=u[n<<4&63],t+=u[64],t+=u[64]),t}x(j1,"representYamlBinary");function Y1(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}x(Y1,"isBinary");var DO=new ti("tag:yaml.org,2002:binary",{kind:"scalar",resolve:H1,construct:G1,predicate:Y1,represent:j1}),LO=Object.prototype.hasOwnProperty,BO=Object.prototype.toString;function W1(e){if(e===null)return!0;var t=[],n,a,s,o,u,c=e;for(n=0,a=c.length;n<a;n+=1){if(s=c[n],u=!1,BO.call(s)!=="[object Object]")return!1;for(o in s)if(LO.call(s,o))if(!u)u=!0;else return!1;if(!u)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}x(W1,"resolveYamlOmap");function V1(e){return e!==null?e:[]}x(V1,"constructYamlOmap");var OO=new ti("tag:yaml.org,2002:omap",{kind:"sequence",resolve:W1,construct:V1}),PO=Object.prototype.toString;function X1(e){if(e===null)return!0;var t,n,a,s,o,u=e;for(o=new Array(u.length),t=0,n=u.length;t<n;t+=1){if(a=u[t],PO.call(a)!=="[object Object]"||(s=Object.keys(a),s.length!==1))return!1;o[t]=[s[0],a[s[0]]]}return!0}x(X1,"resolveYamlPairs");function Q1(e){if(e===null)return[];var t,n,a,s,o,u=e;for(o=new Array(u.length),t=0,n=u.length;t<n;t+=1)a=u[t],s=Object.keys(a),o[t]=[s[0],a[s[0]]];return o}x(Q1,"constructYamlPairs");var NO=new ti("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:X1,construct:Q1}),IO=Object.prototype.hasOwnProperty;function K1(e){if(e===null)return!0;var t,n=e;for(t in n)if(IO.call(n,t)&&n[t]!==null)return!1;return!0}x(K1,"resolveYamlSet");function Z1(e){return e!==null?e:{}}x(Z1,"constructYamlSet");var FO=new ti("tag:yaml.org,2002:set",{kind:"mapping",resolve:K1,construct:Z1}),J1=EO.extend({implicit:[RO,MO],explicit:[DO,OO,NO,FO]}),zr=Object.prototype.hasOwnProperty,hh=1,tC=2,eC=3,dh=4,Df=1,$O=2,LS=3,zO=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,UO=/[\x85\u2028\u2029]/,qO=/[,\[\]\{\}]/,iC=/^(?:!|!!|![a-z\-]+!)$/i,nC=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function hp(e){return Object.prototype.toString.call(e)}x(hp,"_class");function sn(e){return e===10||e===13}x(sn,"is_EOL");function Fr(e){return e===9||e===32}x(Fr,"is_WHITE_SPACE");function li(e){return e===9||e===32||e===10||e===13}x(li,"is_WS_OR_EOL");function Sa(e){return e===44||e===91||e===93||e===123||e===125}x(Sa,"is_FLOW_INDICATOR");function rC(e){var t;return 48<=e&&e<=57?e-48:(t=e|32,97<=t&&t<=102?t-97+10:-1)}x(rC,"fromHexCode");function aC(e){return e===120?2:e===117?4:e===85?8:0}x(aC,"escapedHexLen");function sC(e){return 48<=e&&e<=57?e-48:-1}x(sC,"fromDecimalCode");function dp(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}x(dp,"simpleEscapeSequence");function lC(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}x(lC,"charFromCodepoint");var oC=new Array(256),cC=new Array(256);for(fa=0;fa<256;fa++)oC[fa]=dp(fa)?1:0,cC[fa]=dp(fa);var fa;function uC(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||J1,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}x(uC,"State$1");function Sm(e,t){var n={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return n.snippet=fO(n),new xi(t,n)}x(Sm,"generateError");function Tt(e,t){throw Sm(e,t)}x(Tt,"throwError");function Fo(e,t){e.onWarning&&e.onWarning.call(null,Sm(e,t))}x(Fo,"throwWarning");var BS={YAML:x(function(t,n,a){var s,o,u;t.version!==null&&Tt(t,"duplication of %YAML directive"),a.length!==1&&Tt(t,"YAML directive accepts exactly one argument"),s=/^([0-9]+)\.([0-9]+)$/.exec(a[0]),s===null&&Tt(t,"ill-formed argument of the YAML directive"),o=parseInt(s[1],10),u=parseInt(s[2],10),o!==1&&Tt(t,"unacceptable YAML version of the document"),t.version=a[0],t.checkLineBreaks=u<2,u!==1&&u!==2&&Fo(t,"unsupported YAML version of the document")},"handleYamlDirective"),TAG:x(function(t,n,a){var s,o;a.length!==2&&Tt(t,"TAG directive accepts exactly two arguments"),s=a[0],o=a[1],iC.test(s)||Tt(t,"ill-formed tag handle (first argument) of the TAG directive"),zr.call(t.tagMap,s)&&Tt(t,'there is a previously declared suffix for "'+s+'" tag handle'),nC.test(o)||Tt(t,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch{Tt(t,"tag prefix is malformed: "+o)}t.tagMap[s]=o},"handleTagDirective")};function rr(e,t,n,a){var s,o,u,c;if(t<n){if(c=e.input.slice(t,n),a)for(s=0,o=c.length;s<o;s+=1)u=c.charCodeAt(s),u===9||32<=u&&u<=1114111||Tt(e,"expected valid JSON character");else zO.test(c)&&Tt(e,"the stream contains non-printable characters");e.result+=c}}x(rr,"captureSegment");function gp(e,t,n,a){var s,o,u,c;for(Be.isObject(n)||Tt(e,"cannot merge mappings; the provided source object is unacceptable"),s=Object.keys(n),u=0,c=s.length;u<c;u+=1)o=s[u],zr.call(t,o)||(t[o]=n[o],a[o]=!0)}x(gp,"mergeMappings");function xa(e,t,n,a,s,o,u,c,g){var d,f;if(Array.isArray(s))for(s=Array.prototype.slice.call(s),d=0,f=s.length;d<f;d+=1)Array.isArray(s[d])&&Tt(e,"nested arrays are not supported inside keys"),typeof s=="object"&&hp(s[d])==="[object Object]"&&(s[d]="[object Object]");if(typeof s=="object"&&hp(s)==="[object Object]"&&(s="[object Object]"),s=String(s),t===null&&(t={}),a==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(d=0,f=o.length;d<f;d+=1)gp(e,t,o[d],n);else gp(e,t,o,n);else!e.json&&!zr.call(n,s)&&zr.call(t,s)&&(e.line=u||e.line,e.lineStart=c||e.lineStart,e.position=g||e.position,Tt(e,"duplicated mapping key")),s==="__proto__"?Object.defineProperty(t,s,{configurable:!0,enumerable:!0,writable:!0,value:o}):t[s]=o,delete n[s];return t}x(xa,"storeMappingPair");function qh(e){var t;t=e.input.charCodeAt(e.position),t===10?e.position++:t===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):Tt(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}x(qh,"readLineBreak");function Se(e,t,n){for(var a=0,s=e.input.charCodeAt(e.position);s!==0;){for(;Fr(s);)s===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),s=e.input.charCodeAt(++e.position);if(t&&s===35)do s=e.input.charCodeAt(++e.position);while(s!==10&&s!==13&&s!==0);if(sn(s))for(qh(e),s=e.input.charCodeAt(e.position),a++,e.lineIndent=0;s===32;)e.lineIndent++,s=e.input.charCodeAt(++e.position);else break}return n!==-1&&a!==0&&e.lineIndent<n&&Fo(e,"deficient indentation"),a}x(Se,"skipSeparationSpace");function tc(e){var t=e.position,n;return n=e.input.charCodeAt(t),!!((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)&&(t+=3,n=e.input.charCodeAt(t),n===0||li(n)))}x(tc,"testDocumentSeparator");function Hh(e,t){t===1?e.result+=" ":t>1&&(e.result+=Be.repeat(`
`,t-1))}x(Hh,"writeFoldedLines");function hC(e,t,n){var a,s,o,u,c,g,d,f,m=e.kind,y=e.result,v;if(v=e.input.charCodeAt(e.position),li(v)||Sa(v)||v===35||v===38||v===42||v===33||v===124||v===62||v===39||v===34||v===37||v===64||v===96||(v===63||v===45)&&(s=e.input.charCodeAt(e.position+1),li(s)||n&&Sa(s)))return!1;for(e.kind="scalar",e.result="",o=u=e.position,c=!1;v!==0;){if(v===58){if(s=e.input.charCodeAt(e.position+1),li(s)||n&&Sa(s))break}else if(v===35){if(a=e.input.charCodeAt(e.position-1),li(a))break}else{if(e.position===e.lineStart&&tc(e)||n&&Sa(v))break;if(sn(v))if(g=e.line,d=e.lineStart,f=e.lineIndent,Se(e,!1,-1),e.lineIndent>=t){c=!0,v=e.input.charCodeAt(e.position);continue}else{e.position=u,e.line=g,e.lineStart=d,e.lineIndent=f;break}}c&&(rr(e,o,u,!1),Hh(e,e.line-g),o=u=e.position,c=!1),Fr(v)||(u=e.position+1),v=e.input.charCodeAt(++e.position)}return rr(e,o,u,!1),e.result?!0:(e.kind=m,e.result=y,!1)}x(hC,"readPlainScalar");function dC(e,t){var n,a,s;if(n=e.input.charCodeAt(e.position),n!==39)return!1;for(e.kind="scalar",e.result="",e.position++,a=s=e.position;(n=e.input.charCodeAt(e.position))!==0;)if(n===39)if(rr(e,a,e.position,!0),n=e.input.charCodeAt(++e.position),n===39)a=e.position,e.position++,s=e.position;else return!0;else sn(n)?(rr(e,a,s,!0),Hh(e,Se(e,!1,t)),a=s=e.position):e.position===e.lineStart&&tc(e)?Tt(e,"unexpected end of the document within a single quoted scalar"):(e.position++,s=e.position);Tt(e,"unexpected end of the stream within a single quoted scalar")}x(dC,"readSingleQuotedScalar");function gC(e,t){var n,a,s,o,u,c;if(c=e.input.charCodeAt(e.position),c!==34)return!1;for(e.kind="scalar",e.result="",e.position++,n=a=e.position;(c=e.input.charCodeAt(e.position))!==0;){if(c===34)return rr(e,n,e.position,!0),e.position++,!0;if(c===92){if(rr(e,n,e.position,!0),c=e.input.charCodeAt(++e.position),sn(c))Se(e,!1,t);else if(c<256&&oC[c])e.result+=cC[c],e.position++;else if((u=aC(c))>0){for(s=u,o=0;s>0;s--)c=e.input.charCodeAt(++e.position),(u=rC(c))>=0?o=(o<<4)+u:Tt(e,"expected hexadecimal character");e.result+=lC(o),e.position++}else Tt(e,"unknown escape sequence");n=a=e.position}else sn(c)?(rr(e,n,a,!0),Hh(e,Se(e,!1,t)),n=a=e.position):e.position===e.lineStart&&tc(e)?Tt(e,"unexpected end of the document within a double quoted scalar"):(e.position++,a=e.position)}Tt(e,"unexpected end of the stream within a double quoted scalar")}x(gC,"readDoubleQuotedScalar");function fC(e,t){var n=!0,a,s,o,u=e.tag,c,g=e.anchor,d,f,m,y,v,S=Object.create(null),C,T,w,k;if(k=e.input.charCodeAt(e.position),k===91)f=93,v=!1,c=[];else if(k===123)f=125,v=!0,c={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=c),k=e.input.charCodeAt(++e.position);k!==0;){if(Se(e,!0,t),k=e.input.charCodeAt(e.position),k===f)return e.position++,e.tag=u,e.anchor=g,e.kind=v?"mapping":"sequence",e.result=c,!0;n?k===44&&Tt(e,"expected the node content, but found ','"):Tt(e,"missed comma between flow collection entries"),T=C=w=null,m=y=!1,k===63&&(d=e.input.charCodeAt(e.position+1),li(d)&&(m=y=!0,e.position++,Se(e,!0,t))),a=e.line,s=e.lineStart,o=e.position,Ea(e,t,hh,!1,!0),T=e.tag,C=e.result,Se(e,!0,t),k=e.input.charCodeAt(e.position),(y||e.line===a)&&k===58&&(m=!0,k=e.input.charCodeAt(++e.position),Se(e,!0,t),Ea(e,t,hh,!1,!0),w=e.result),v?xa(e,c,S,T,C,w,a,s,o):m?c.push(xa(e,null,S,T,C,w,a,s,o)):c.push(C),Se(e,!0,t),k=e.input.charCodeAt(e.position),k===44?(n=!0,k=e.input.charCodeAt(++e.position)):n=!1}Tt(e,"unexpected end of the stream within a flow collection")}x(fC,"readFlowCollection");function pC(e,t){var n,a,s=Df,o=!1,u=!1,c=t,g=0,d=!1,f,m;if(m=e.input.charCodeAt(e.position),m===124)a=!1;else if(m===62)a=!0;else return!1;for(e.kind="scalar",e.result="";m!==0;)if(m=e.input.charCodeAt(++e.position),m===43||m===45)Df===s?s=m===43?LS:$O:Tt(e,"repeat of a chomping mode identifier");else if((f=sC(m))>=0)f===0?Tt(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):u?Tt(e,"repeat of an indentation width identifier"):(c=t+f-1,u=!0);else break;if(Fr(m)){do m=e.input.charCodeAt(++e.position);while(Fr(m));if(m===35)do m=e.input.charCodeAt(++e.position);while(!sn(m)&&m!==0)}for(;m!==0;){for(qh(e),e.lineIndent=0,m=e.input.charCodeAt(e.position);(!u||e.lineIndent<c)&&m===32;)e.lineIndent++,m=e.input.charCodeAt(++e.position);if(!u&&e.lineIndent>c&&(c=e.lineIndent),sn(m)){g++;continue}if(e.lineIndent<c){s===LS?e.result+=Be.repeat(`
`,o?1+g:g):s===Df&&o&&(e.result+=`
`);break}for(a?Fr(m)?(d=!0,e.result+=Be.repeat(`
`,o?1+g:g)):d?(d=!1,e.result+=Be.repeat(`
`,g+1)):g===0?o&&(e.result+=" "):e.result+=Be.repeat(`
`,g):e.result+=Be.repeat(`
`,o?1+g:g),o=!0,u=!0,g=0,n=e.position;!sn(m)&&m!==0;)m=e.input.charCodeAt(++e.position);rr(e,n,e.position,!1)}return!0}x(pC,"readBlockScalar");function fp(e,t){var n,a=e.tag,s=e.anchor,o=[],u,c=!1,g;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=o),g=e.input.charCodeAt(e.position);g!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,Tt(e,"tab characters must not be used in indentation")),!(g!==45||(u=e.input.charCodeAt(e.position+1),!li(u))));){if(c=!0,e.position++,Se(e,!0,-1)&&e.lineIndent<=t){o.push(null),g=e.input.charCodeAt(e.position);continue}if(n=e.line,Ea(e,t,eC,!1,!0),o.push(e.result),Se(e,!0,-1),g=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&g!==0)Tt(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break}return c?(e.tag=a,e.anchor=s,e.kind="sequence",e.result=o,!0):!1}x(fp,"readBlockSequence");function mC(e,t,n){var a,s,o,u,c,g,d=e.tag,f=e.anchor,m={},y=Object.create(null),v=null,S=null,C=null,T=!1,w=!1,k;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=m),k=e.input.charCodeAt(e.position);k!==0;){if(!T&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,Tt(e,"tab characters must not be used in indentation")),a=e.input.charCodeAt(e.position+1),o=e.line,(k===63||k===58)&&li(a))k===63?(T&&(xa(e,m,y,v,S,null,u,c,g),v=S=C=null),w=!0,T=!0,s=!0):T?(T=!1,s=!0):Tt(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,k=a;else{if(u=e.line,c=e.lineStart,g=e.position,!Ea(e,n,tC,!1,!0))break;if(e.line===o){for(k=e.input.charCodeAt(e.position);Fr(k);)k=e.input.charCodeAt(++e.position);if(k===58)k=e.input.charCodeAt(++e.position),li(k)||Tt(e,"a whitespace character is expected after the key-value separator within a block mapping"),T&&(xa(e,m,y,v,S,null,u,c,g),v=S=C=null),w=!0,T=!1,s=!1,v=e.tag,S=e.result;else if(w)Tt(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=d,e.anchor=f,!0}else if(w)Tt(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=d,e.anchor=f,!0}if((e.line===o||e.lineIndent>t)&&(T&&(u=e.line,c=e.lineStart,g=e.position),Ea(e,t,dh,!0,s)&&(T?S=e.result:C=e.result),T||(xa(e,m,y,v,S,C,u,c,g),v=S=C=null),Se(e,!0,-1),k=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>t)&&k!==0)Tt(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return T&&xa(e,m,y,v,S,null,u,c,g),w&&(e.tag=d,e.anchor=f,e.kind="mapping",e.result=m),w}x(mC,"readBlockMapping");function yC(e){var t,n=!1,a=!1,s,o,u;if(u=e.input.charCodeAt(e.position),u!==33)return!1;if(e.tag!==null&&Tt(e,"duplication of a tag property"),u=e.input.charCodeAt(++e.position),u===60?(n=!0,u=e.input.charCodeAt(++e.position)):u===33?(a=!0,s="!!",u=e.input.charCodeAt(++e.position)):s="!",t=e.position,n){do u=e.input.charCodeAt(++e.position);while(u!==0&&u!==62);e.position<e.length?(o=e.input.slice(t,e.position),u=e.input.charCodeAt(++e.position)):Tt(e,"unexpected end of the stream within a verbatim tag")}else{for(;u!==0&&!li(u);)u===33&&(a?Tt(e,"tag suffix cannot contain exclamation marks"):(s=e.input.slice(t-1,e.position+1),iC.test(s)||Tt(e,"named tag handle cannot contain such characters"),a=!0,t=e.position+1)),u=e.input.charCodeAt(++e.position);o=e.input.slice(t,e.position),qO.test(o)&&Tt(e,"tag suffix cannot contain flow indicator characters")}o&&!nC.test(o)&&Tt(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch{Tt(e,"tag name is malformed: "+o)}return n?e.tag=o:zr.call(e.tagMap,s)?e.tag=e.tagMap[s]+o:s==="!"?e.tag="!"+o:s==="!!"?e.tag="tag:yaml.org,2002:"+o:Tt(e,'undeclared tag handle "'+s+'"'),!0}x(yC,"readTagProperty");function bC(e){var t,n;if(n=e.input.charCodeAt(e.position),n!==38)return!1;for(e.anchor!==null&&Tt(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;n!==0&&!li(n)&&!Sa(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&Tt(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}x(bC,"readAnchorProperty");function vC(e){var t,n,a;if(a=e.input.charCodeAt(e.position),a!==42)return!1;for(a=e.input.charCodeAt(++e.position),t=e.position;a!==0&&!li(a)&&!Sa(a);)a=e.input.charCodeAt(++e.position);return e.position===t&&Tt(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),zr.call(e.anchorMap,n)||Tt(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],Se(e,!0,-1),!0}x(vC,"readAlias");function Ea(e,t,n,a,s){var o,u,c,g=1,d=!1,f=!1,m,y,v,S,C,T;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=u=c=dh===n||eC===n,a&&Se(e,!0,-1)&&(d=!0,e.lineIndent>t?g=1:e.lineIndent===t?g=0:e.lineIndent<t&&(g=-1)),g===1)for(;yC(e)||bC(e);)Se(e,!0,-1)?(d=!0,c=o,e.lineIndent>t?g=1:e.lineIndent===t?g=0:e.lineIndent<t&&(g=-1)):c=!1;if(c&&(c=d||s),(g===1||dh===n)&&(hh===n||tC===n?C=t:C=t+1,T=e.position-e.lineStart,g===1?c&&(fp(e,T)||mC(e,T,C))||fC(e,C)?f=!0:(u&&pC(e,C)||dC(e,C)||gC(e,C)?f=!0:vC(e)?(f=!0,(e.tag!==null||e.anchor!==null)&&Tt(e,"alias node should not have any properties")):hC(e,C,hh===n)&&(f=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):g===0&&(f=c&&fp(e,T))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&Tt(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),m=0,y=e.implicitTypes.length;m<y;m+=1)if(S=e.implicitTypes[m],S.resolve(e.result)){e.result=S.construct(e.result),e.tag=S.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(zr.call(e.typeMap[e.kind||"fallback"],e.tag))S=e.typeMap[e.kind||"fallback"][e.tag];else for(S=null,v=e.typeMap.multi[e.kind||"fallback"],m=0,y=v.length;m<y;m+=1)if(e.tag.slice(0,v[m].tag.length)===v[m].tag){S=v[m];break}S||Tt(e,"unknown tag !<"+e.tag+">"),e.result!==null&&S.kind!==e.kind&&Tt(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+S.kind+'", not "'+e.kind+'"'),S.resolve(e.result,e.tag)?(e.result=S.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):Tt(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||f}x(Ea,"composeNode");function SC(e){var t=e.position,n,a,s,o=!1,u;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(u=e.input.charCodeAt(e.position))!==0&&(Se(e,!0,-1),u=e.input.charCodeAt(e.position),!(e.lineIndent>0||u!==37));){for(o=!0,u=e.input.charCodeAt(++e.position),n=e.position;u!==0&&!li(u);)u=e.input.charCodeAt(++e.position);for(a=e.input.slice(n,e.position),s=[],a.length<1&&Tt(e,"directive name must not be less than one character in length");u!==0;){for(;Fr(u);)u=e.input.charCodeAt(++e.position);if(u===35){do u=e.input.charCodeAt(++e.position);while(u!==0&&!sn(u));break}if(sn(u))break;for(n=e.position;u!==0&&!li(u);)u=e.input.charCodeAt(++e.position);s.push(e.input.slice(n,e.position))}u!==0&&qh(e),zr.call(BS,a)?BS[a](e,a,s):Fo(e,'unknown document directive "'+a+'"')}if(Se(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,Se(e,!0,-1)):o&&Tt(e,"directives end mark is expected"),Ea(e,e.lineIndent-1,dh,!1,!0),Se(e,!0,-1),e.checkLineBreaks&&UO.test(e.input.slice(t,e.position))&&Fo(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&tc(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,Se(e,!0,-1));return}if(e.position<e.length-1)Tt(e,"end of the stream or a document separator is expected");else return}x(SC,"readDocument");function xm(e,t){e=String(e),t=t||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var n=new uC(e,t),a=e.indexOf("\0");for(a!==-1&&(n.position=a,Tt(n,"null byte is not allowed in input")),n.input+="\0";n.input.charCodeAt(n.position)===32;)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)SC(n);return n.documents}x(xm,"loadDocuments");function HO(e,t,n){t!==null&&typeof t=="object"&&typeof n>"u"&&(n=t,t=null);var a=xm(e,n);if(typeof t!="function")return a;for(var s=0,o=a.length;s<o;s+=1)t(a[s])}x(HO,"loadAll$1");function xC(e,t){var n=xm(e,t);if(n.length!==0){if(n.length===1)return n[0];throw new xi("expected a single document in the stream, but found more")}}x(xC,"load$1");var GO=xC,jO={load:GO},CC=Object.prototype.toString,_C=Object.prototype.hasOwnProperty,Cm=65279,YO=9,$o=10,WO=13,VO=32,XO=33,QO=34,pp=35,KO=37,ZO=38,JO=39,t4=42,wC=44,e4=45,gh=58,i4=61,n4=62,r4=63,a4=64,TC=91,kC=93,s4=96,AC=123,l4=124,EC=125,ii={};ii[0]="\\0";ii[7]="\\a";ii[8]="\\b";ii[9]="\\t";ii[10]="\\n";ii[11]="\\v";ii[12]="\\f";ii[13]="\\r";ii[27]="\\e";ii[34]='\\"';ii[92]="\\\\";ii[133]="\\N";ii[160]="\\_";ii[8232]="\\L";ii[8233]="\\P";var o4=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],c4=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function RC(e,t){var n,a,s,o,u,c,g;if(t===null)return{};for(n={},a=Object.keys(t),s=0,o=a.length;s<o;s+=1)u=a[s],c=String(t[u]),u.slice(0,2)==="!!"&&(u="tag:yaml.org,2002:"+u.slice(2)),g=e.compiledTypeMap.fallback[u],g&&_C.call(g.styleAliases,c)&&(c=g.styleAliases[c]),n[u]=c;return n}x(RC,"compileStyleMap");function MC(e){var t,n,a;if(t=e.toString(16).toUpperCase(),e<=255)n="x",a=2;else if(e<=65535)n="u",a=4;else if(e<=4294967295)n="U",a=8;else throw new xi("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+n+Be.repeat("0",a-t.length)+t}x(MC,"encodeHex");var u4=1,zo=2;function DC(e){this.schema=e.schema||J1,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Be.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=RC(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?zo:u4,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}x(DC,"State");function mp(e,t){for(var n=Be.repeat(" ",t),a=0,s=-1,o="",u,c=e.length;a<c;)s=e.indexOf(`
`,a),s===-1?(u=e.slice(a),a=c):(u=e.slice(a,s+1),a=s+1),u.length&&u!==`
`&&(o+=n),o+=u;return o}x(mp,"indentString");function fh(e,t){return`
`+Be.repeat(" ",e.indent*t)}x(fh,"generateNextLine");function LC(e,t){var n,a,s;for(n=0,a=e.implicitTypes.length;n<a;n+=1)if(s=e.implicitTypes[n],s.resolve(t))return!0;return!1}x(LC,"testImplicitResolving");function Uo(e){return e===VO||e===YO}x(Uo,"isWhitespace");function Hs(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==Cm||65536<=e&&e<=1114111}x(Hs,"isPrintable");function yp(e){return Hs(e)&&e!==Cm&&e!==WO&&e!==$o}x(yp,"isNsCharOrWhitespace");function bp(e,t,n){var a=yp(e),s=a&&!Uo(e);return(n?a:a&&e!==wC&&e!==TC&&e!==kC&&e!==AC&&e!==EC)&&e!==pp&&!(t===gh&&!s)||yp(t)&&!Uo(t)&&e===pp||t===gh&&s}x(bp,"isPlainSafe");function BC(e){return Hs(e)&&e!==Cm&&!Uo(e)&&e!==e4&&e!==r4&&e!==gh&&e!==wC&&e!==TC&&e!==kC&&e!==AC&&e!==EC&&e!==pp&&e!==ZO&&e!==t4&&e!==XO&&e!==l4&&e!==i4&&e!==n4&&e!==JO&&e!==QO&&e!==KO&&e!==a4&&e!==s4}x(BC,"isPlainSafeFirst");function OC(e){return!Uo(e)&&e!==gh}x(OC,"isPlainSafeLast");function Ts(e,t){var n=e.charCodeAt(t),a;return n>=55296&&n<=56319&&t+1<e.length&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(n-55296)*1024+a-56320+65536:n}x(Ts,"codePointAt");function _m(e){var t=/^\n* /;return t.test(e)}x(_m,"needIndentIndicator");var PC=1,vp=2,NC=3,IC=4,_s=5;function FC(e,t,n,a,s,o,u,c){var g,d=0,f=null,m=!1,y=!1,v=a!==-1,S=-1,C=BC(Ts(e,0))&&OC(Ts(e,e.length-1));if(t||u)for(g=0;g<e.length;d>=65536?g+=2:g++){if(d=Ts(e,g),!Hs(d))return _s;C=C&&bp(d,f,c),f=d}else{for(g=0;g<e.length;d>=65536?g+=2:g++){if(d=Ts(e,g),d===$o)m=!0,v&&(y=y||g-S-1>a&&e[S+1]!==" ",S=g);else if(!Hs(d))return _s;C=C&&bp(d,f,c),f=d}y=y||v&&g-S-1>a&&e[S+1]!==" "}return!m&&!y?C&&!u&&!s(e)?PC:o===zo?_s:vp:n>9&&_m(e)?_s:u?o===zo?_s:vp:y?IC:NC}x(FC,"chooseScalarStyle");function $C(e,t,n,a,s){e.dump=function(){if(t.length===0)return e.quotingType===zo?'""':"''";if(!e.noCompatMode&&(o4.indexOf(t)!==-1||c4.test(t)))return e.quotingType===zo?'"'+t+'"':"'"+t+"'";var o=e.indent*Math.max(1,n),u=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),c=a||e.flowLevel>-1&&n>=e.flowLevel;function g(d){return LC(e,d)}switch(x(g,"testAmbiguity"),FC(t,c,e.indent,u,g,e.quotingType,e.forceQuotes&&!a,s)){case PC:return t;case vp:return"'"+t.replace(/'/g,"''")+"'";case NC:return"|"+Sp(t,e.indent)+xp(mp(t,o));case IC:return">"+Sp(t,e.indent)+xp(mp(zC(t,u),o));case _s:return'"'+UC(t)+'"';default:throw new xi("impossible error: invalid scalar style")}}()}x($C,"writeScalar");function Sp(e,t){var n=_m(e)?String(t):"",a=e[e.length-1]===`
`,s=a&&(e[e.length-2]===`
`||e===`
`),o=s?"+":a?"":"-";return n+o+`
`}x(Sp,"blockHeader");function xp(e){return e[e.length-1]===`
`?e.slice(0,-1):e}x(xp,"dropEndingNewline");function zC(e,t){for(var n=/(\n+)([^\n]*)/g,a=function(){var d=e.indexOf(`
`);return d=d!==-1?d:e.length,n.lastIndex=d,Cp(e.slice(0,d),t)}(),s=e[0]===`
`||e[0]===" ",o,u;u=n.exec(e);){var c=u[1],g=u[2];o=g[0]===" ",a+=c+(!s&&!o&&g!==""?`
`:"")+Cp(g,t),s=o}return a}x(zC,"foldString");function Cp(e,t){if(e===""||e[0]===" ")return e;for(var n=/ [^ ]/g,a,s=0,o,u=0,c=0,g="";a=n.exec(e);)c=a.index,c-s>t&&(o=u>s?u:c,g+=`
`+e.slice(s,o),s=o+1),u=c;return g+=`
`,e.length-s>t&&u>s?g+=e.slice(s,u)+`
`+e.slice(u+1):g+=e.slice(s),g.slice(1)}x(Cp,"foldLine");function UC(e){for(var t="",n=0,a,s=0;s<e.length;n>=65536?s+=2:s++)n=Ts(e,s),a=ii[n],!a&&Hs(n)?(t+=e[s],n>=65536&&(t+=e[s+1])):t+=a||MC(n);return t}x(UC,"escapeString");function qC(e,t,n){var a="",s=e.tag,o,u,c;for(o=0,u=n.length;o<u;o+=1)c=n[o],e.replacer&&(c=e.replacer.call(n,String(o),c)),(wn(e,t,c,!1,!1)||typeof c>"u"&&wn(e,t,null,!1,!1))&&(a!==""&&(a+=","+(e.condenseFlow?"":" ")),a+=e.dump);e.tag=s,e.dump="["+a+"]"}x(qC,"writeFlowSequence");function _p(e,t,n,a){var s="",o=e.tag,u,c,g;for(u=0,c=n.length;u<c;u+=1)g=n[u],e.replacer&&(g=e.replacer.call(n,String(u),g)),(wn(e,t+1,g,!0,!0,!1,!0)||typeof g>"u"&&wn(e,t+1,null,!0,!0,!1,!0))&&((!a||s!=="")&&(s+=fh(e,t)),e.dump&&$o===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=o,e.dump=s||"[]"}x(_p,"writeBlockSequence");function HC(e,t,n){var a="",s=e.tag,o=Object.keys(n),u,c,g,d,f;for(u=0,c=o.length;u<c;u+=1)f="",a!==""&&(f+=", "),e.condenseFlow&&(f+='"'),g=o[u],d=n[g],e.replacer&&(d=e.replacer.call(n,g,d)),wn(e,t,g,!1,!1)&&(e.dump.length>1024&&(f+="? "),f+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),wn(e,t,d,!1,!1)&&(f+=e.dump,a+=f));e.tag=s,e.dump="{"+a+"}"}x(HC,"writeFlowMapping");function GC(e,t,n,a){var s="",o=e.tag,u=Object.keys(n),c,g,d,f,m,y;if(e.sortKeys===!0)u.sort();else if(typeof e.sortKeys=="function")u.sort(e.sortKeys);else if(e.sortKeys)throw new xi("sortKeys must be a boolean or a function");for(c=0,g=u.length;c<g;c+=1)y="",(!a||s!=="")&&(y+=fh(e,t)),d=u[c],f=n[d],e.replacer&&(f=e.replacer.call(n,d,f)),wn(e,t+1,d,!0,!0,!0)&&(m=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,m&&(e.dump&&$o===e.dump.charCodeAt(0)?y+="?":y+="? "),y+=e.dump,m&&(y+=fh(e,t)),wn(e,t+1,f,!0,m)&&(e.dump&&$o===e.dump.charCodeAt(0)?y+=":":y+=": ",y+=e.dump,s+=y));e.tag=o,e.dump=s||"{}"}x(GC,"writeBlockMapping");function wp(e,t,n){var a,s,o,u,c,g;for(s=n?e.explicitTypes:e.implicitTypes,o=0,u=s.length;o<u;o+=1)if(c=s[o],(c.instanceOf||c.predicate)&&(!c.instanceOf||typeof t=="object"&&t instanceof c.instanceOf)&&(!c.predicate||c.predicate(t))){if(n?c.multi&&c.representName?e.tag=c.representName(t):e.tag=c.tag:e.tag="?",c.represent){if(g=e.styleMap[c.tag]||c.defaultStyle,CC.call(c.represent)==="[object Function]")a=c.represent(t,g);else if(_C.call(c.represent,g))a=c.represent[g](t,g);else throw new xi("!<"+c.tag+'> tag resolver accepts not "'+g+'" style');e.dump=a}return!0}return!1}x(wp,"detectType");function wn(e,t,n,a,s,o,u){e.tag=null,e.dump=n,wp(e,n,!1)||wp(e,n,!0);var c=CC.call(e.dump),g=a,d;a&&(a=e.flowLevel<0||e.flowLevel>t);var f=c==="[object Object]"||c==="[object Array]",m,y;if(f&&(m=e.duplicates.indexOf(n),y=m!==-1),(e.tag!==null&&e.tag!=="?"||y||e.indent!==2&&t>0)&&(s=!1),y&&e.usedDuplicates[m])e.dump="*ref_"+m;else{if(f&&y&&!e.usedDuplicates[m]&&(e.usedDuplicates[m]=!0),c==="[object Object]")a&&Object.keys(e.dump).length!==0?(GC(e,t,e.dump,s),y&&(e.dump="&ref_"+m+e.dump)):(HC(e,t,e.dump),y&&(e.dump="&ref_"+m+" "+e.dump));else if(c==="[object Array]")a&&e.dump.length!==0?(e.noArrayIndent&&!u&&t>0?_p(e,t-1,e.dump,s):_p(e,t,e.dump,s),y&&(e.dump="&ref_"+m+e.dump)):(qC(e,t,e.dump),y&&(e.dump="&ref_"+m+" "+e.dump));else if(c==="[object String]")e.tag!=="?"&&$C(e,e.dump,t,o,g);else{if(c==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new xi("unacceptable kind of an object to dump "+c)}e.tag!==null&&e.tag!=="?"&&(d=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?d="!"+d:d.slice(0,18)==="tag:yaml.org,2002:"?d="!!"+d.slice(18):d="!<"+d+">",e.dump=d+" "+e.dump)}return!0}x(wn,"writeNode");function jC(e,t){var n=[],a=[],s,o;for(ph(e,n,a),s=0,o=a.length;s<o;s+=1)t.duplicates.push(n[a[s]]);t.usedDuplicates=new Array(o)}x(jC,"getDuplicateReferences");function ph(e,t,n){var a,s,o;if(e!==null&&typeof e=="object")if(s=t.indexOf(e),s!==-1)n.indexOf(s)===-1&&n.push(s);else if(t.push(e),Array.isArray(e))for(s=0,o=e.length;s<o;s+=1)ph(e[s],t,n);else for(a=Object.keys(e),s=0,o=a.length;s<o;s+=1)ph(e[a[s]],t,n)}x(ph,"inspectNode");function h4(e,t){t=t||{};var n=new DC(t);n.noRefs||jC(e,n);var a=e;return n.replacer&&(a=n.replacer.call({"":a},"",a)),wn(n,0,a,!0,!0)?n.dump+`
`:""}x(h4,"dump$1");function d4(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}x(d4,"renamed");var g4=N1,f4=jO.load;/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
*/var Yi={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:4};function _o(e,t){if(e===void 0||t===void 0)return{angle:0,deltaX:0,deltaY:0};e=he(e),t=he(t);const[n,a]=[e.x,e.y],[s,o]=[t.x,t.y],u=s-n,c=o-a;return{angle:Math.atan(c/u),deltaX:u,deltaY:c}}x(_o,"calculateDeltaAndAngle");var he=x(e=>Array.isArray(e)?{x:e[0],y:e[1]}:e,"pointTransformer"),p4=x(e=>({x:x(function(t,n,a){let s=0;const o=he(a[0]).x<he(a[a.length-1]).x?"left":"right";if(n===0&&Object.hasOwn(Yi,e.arrowTypeStart)){const{angle:v,deltaX:S}=_o(a[0],a[1]);s=Yi[e.arrowTypeStart]*Math.cos(v)*(S>=0?1:-1)}else if(n===a.length-1&&Object.hasOwn(Yi,e.arrowTypeEnd)){const{angle:v,deltaX:S}=_o(a[a.length-1],a[a.length-2]);s=Yi[e.arrowTypeEnd]*Math.cos(v)*(S>=0?1:-1)}const u=Math.abs(he(t).x-he(a[a.length-1]).x),c=Math.abs(he(t).y-he(a[a.length-1]).y),g=Math.abs(he(t).x-he(a[0]).x),d=Math.abs(he(t).y-he(a[0]).y),f=Yi[e.arrowTypeStart],m=Yi[e.arrowTypeEnd],y=1;if(u<m&&u>0&&c<m){let v=m+y-u;v*=o==="right"?-1:1,s-=v}if(g<f&&g>0&&d<f){let v=f+y-g;v*=o==="right"?-1:1,s+=v}return he(t).x+s},"x"),y:x(function(t,n,a){let s=0;const o=he(a[0]).y<he(a[a.length-1]).y?"down":"up";if(n===0&&Object.hasOwn(Yi,e.arrowTypeStart)){const{angle:v,deltaY:S}=_o(a[0],a[1]);s=Yi[e.arrowTypeStart]*Math.abs(Math.sin(v))*(S>=0?1:-1)}else if(n===a.length-1&&Object.hasOwn(Yi,e.arrowTypeEnd)){const{angle:v,deltaY:S}=_o(a[a.length-1],a[a.length-2]);s=Yi[e.arrowTypeEnd]*Math.abs(Math.sin(v))*(S>=0?1:-1)}const u=Math.abs(he(t).y-he(a[a.length-1]).y),c=Math.abs(he(t).x-he(a[a.length-1]).x),g=Math.abs(he(t).y-he(a[0]).y),d=Math.abs(he(t).x-he(a[0]).x),f=Yi[e.arrowTypeStart],m=Yi[e.arrowTypeEnd],y=1;if(u<m&&u>0&&c<m){let v=m+y-u;v*=o==="up"?-1:1,s-=v}if(g<f&&g>0&&d<f){let v=f+y-g;v*=o==="up"?-1:1,s+=v}return he(t).y+s},"y")}),"getLineFunctionsWithOffset"),wm=x(({flowchart:e})=>{var s,o;const t=((s=e==null?void 0:e.subGraphTitleMargin)==null?void 0:s.top)??0,n=((o=e==null?void 0:e.subGraphTitleMargin)==null?void 0:o.bottom)??0,a=t+n;return{subGraphTitleTopMargin:t,subGraphTitleBottomMargin:n,subGraphTitleTotalMargin:a}},"getSubGraphTitleMargins"),m4=x(e=>{const{handDrawnSeed:t}=Vt();return{fill:e,hachureAngle:120,hachureGap:4,fillWeight:2,roughness:.7,stroke:e,seed:t}},"solidStateFill"),Xs=x(e=>{const t=y4([...e.cssCompiledStyles||[],...e.cssStyles||[]]);return{stylesMap:t,stylesArray:[...t]}},"compileStyles"),y4=x(e=>{const t=new Map;return e.forEach(n=>{const[a,s]=n.split(":");t.set(a.trim(),s==null?void 0:s.trim())}),t},"styles2Map"),YC=x(e=>e==="color"||e==="font-size"||e==="font-family"||e==="font-weight"||e==="font-style"||e==="text-decoration"||e==="text-align"||e==="text-transform"||e==="line-height"||e==="letter-spacing"||e==="word-spacing"||e==="text-shadow"||e==="text-overflow"||e==="white-space"||e==="word-wrap"||e==="word-break"||e==="overflow-wrap"||e==="hyphens","isLabelStyle"),Ct=x(e=>{const{stylesArray:t}=Xs(e),n=[],a=[],s=[],o=[];return t.forEach(u=>{const c=u[0];YC(c)?n.push(u.join(":")+" !important"):(a.push(u.join(":")+" !important"),c.includes("stroke")&&s.push(u.join(":")+" !important"),c==="fill"&&o.push(u.join(":")+" !important"))}),{labelStyles:n.join(";"),nodeStyles:a.join(";"),stylesArray:t,borderStyles:s,backgroundStyles:o}},"styles2String"),St=x((e,t)=>{var g;const{themeVariables:n,handDrawnSeed:a}=Vt(),{nodeBorder:s,mainBkg:o}=n,{stylesMap:u}=Xs(e);return Object.assign({roughness:.7,fill:u.get("fill")||o,fillStyle:"hachure",fillWeight:4,hachureGap:5.2,stroke:u.get("stroke")||s,seed:a,strokeWidth:((g=u.get("stroke-width"))==null?void 0:g.replace("px",""))||1.3,fillLineDash:[0,0],strokeLineDash:b4(u.get("stroke-dasharray"))},t)},"userNodeOverrides"),b4=x(e=>{if(!e)return[0,0];const t=e.trim().split(/\s+/).map(Number);if(t.length===1){const s=isNaN(t[0])?0:t[0];return[s,s]}const n=isNaN(t[0])?0:t[0],a=isNaN(t[1])?0:t[1];return[n,a]},"getStrokeDashArray"),ho={},De={},OS;function v4(){return OS||(OS=1,Object.defineProperty(De,"__esModule",{value:!0}),De.BLANK_URL=De.relativeFirstCharacters=De.whitespaceEscapeCharsRegex=De.urlSchemeRegex=De.ctrlCharactersRegex=De.htmlCtrlEntityRegex=De.htmlEntitiesRegex=De.invalidProtocolRegex=void 0,De.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,De.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,De.htmlCtrlEntityRegex=/&(newline|tab);/gi,De.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,De.urlSchemeRegex=/^.+(:|&colon;)/gim,De.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,De.relativeFirstCharacters=[".","/"],De.BLANK_URL="about:blank"),De}var PS;function S4(){if(PS)return ho;PS=1,Object.defineProperty(ho,"__esModule",{value:!0}),ho.sanitizeUrl=void 0;var e=v4();function t(u){return e.relativeFirstCharacters.indexOf(u[0])>-1}function n(u){var c=u.replace(e.ctrlCharactersRegex,"");return c.replace(e.htmlEntitiesRegex,function(g,d){return String.fromCharCode(d)})}function a(u){return URL.canParse(u)}function s(u){try{return decodeURIComponent(u)}catch{return u}}function o(u){if(!u)return e.BLANK_URL;var c,g=s(u.trim());do g=n(g).replace(e.htmlCtrlEntityRegex,"").replace(e.ctrlCharactersRegex,"").replace(e.whitespaceEscapeCharsRegex,"").trim(),g=s(g),c=g.match(e.ctrlCharactersRegex)||g.match(e.htmlEntitiesRegex)||g.match(e.htmlCtrlEntityRegex)||g.match(e.whitespaceEscapeCharsRegex);while(c&&c.length>0);var d=g;if(!d)return e.BLANK_URL;if(t(d))return d;var f=d.trimStart(),m=f.match(e.urlSchemeRegex);if(!m)return d;var y=m[0].toLowerCase().trim();if(e.invalidProtocolRegex.test(y))return e.BLANK_URL;var v=f.replace(/\\/g,"/");if(y==="mailto:"||y.includes("://"))return v;if(y==="http:"||y==="https:"){if(!a(v))return e.BLANK_URL;var S=new URL(v);return S.protocol=S.protocol.toLowerCase(),S.hostname=S.hostname.toLowerCase(),S.toString()}return v}return ho.sanitizeUrl=o,ho}var x4=S4(),WC=typeof global=="object"&&global&&global.Object===Object&&global,C4=typeof self=="object"&&self&&self.Object===Object&&self,En=WC||C4||Function("return this")(),mh=En.Symbol,VC=Object.prototype,_4=VC.hasOwnProperty,w4=VC.toString,go=mh?mh.toStringTag:void 0;function T4(e){var t=_4.call(e,go),n=e[go];try{e[go]=void 0;var a=!0}catch{}var s=w4.call(e);return a&&(t?e[go]=n:delete e[go]),s}var k4=Object.prototype,A4=k4.toString;function E4(e){return A4.call(e)}var R4="[object Null]",M4="[object Undefined]",NS=mh?mh.toStringTag:void 0;function Qs(e){return e==null?e===void 0?M4:R4:NS&&NS in Object(e)?T4(e):E4(e)}function Ba(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var D4="[object AsyncFunction]",L4="[object Function]",B4="[object GeneratorFunction]",O4="[object Proxy]";function Tm(e){if(!Ba(e))return!1;var t=Qs(e);return t==L4||t==B4||t==D4||t==O4}var Lf=En["__core-js_shared__"],IS=function(){var e=/[^.]+$/.exec(Lf&&Lf.keys&&Lf.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function P4(e){return!!IS&&IS in e}var N4=Function.prototype,I4=N4.toString;function Oa(e){if(e!=null){try{return I4.call(e)}catch{}try{return e+""}catch{}}return""}var F4=/[\\^$.*+?()[\]{}|]/g,$4=/^\[object .+?Constructor\]$/,z4=Function.prototype,U4=Object.prototype,q4=z4.toString,H4=U4.hasOwnProperty,G4=RegExp("^"+q4.call(H4).replace(F4,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function j4(e){if(!Ba(e)||P4(e))return!1;var t=Tm(e)?G4:$4;return t.test(Oa(e))}function Y4(e,t){return e==null?void 0:e[t]}function Pa(e,t){var n=Y4(e,t);return j4(n)?n:void 0}var qo=Pa(Object,"create");function W4(){this.__data__=qo?qo(null):{},this.size=0}function V4(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var X4="__lodash_hash_undefined__",Q4=Object.prototype,K4=Q4.hasOwnProperty;function Z4(e){var t=this.__data__;if(qo){var n=t[e];return n===X4?void 0:n}return K4.call(t,e)?t[e]:void 0}var J4=Object.prototype,t5=J4.hasOwnProperty;function e5(e){var t=this.__data__;return qo?t[e]!==void 0:t5.call(t,e)}var i5="__lodash_hash_undefined__";function n5(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=qo&&t===void 0?i5:t,this}function Ra(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Ra.prototype.clear=W4;Ra.prototype.delete=V4;Ra.prototype.get=Z4;Ra.prototype.has=e5;Ra.prototype.set=n5;function r5(){this.__data__=[],this.size=0}function Gh(e,t){return e===t||e!==e&&t!==t}function jh(e,t){for(var n=e.length;n--;)if(Gh(e[n][0],t))return n;return-1}var a5=Array.prototype,s5=a5.splice;function l5(e){var t=this.__data__,n=jh(t,e);if(n<0)return!1;var a=t.length-1;return n==a?t.pop():s5.call(t,n,1),--this.size,!0}function o5(e){var t=this.__data__,n=jh(t,e);return n<0?void 0:t[n][1]}function c5(e){return jh(this.__data__,e)>-1}function u5(e,t){var n=this.__data__,a=jh(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this}function or(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}or.prototype.clear=r5;or.prototype.delete=l5;or.prototype.get=o5;or.prototype.has=c5;or.prototype.set=u5;var Ho=Pa(En,"Map");function h5(){this.size=0,this.__data__={hash:new Ra,map:new(Ho||or),string:new Ra}}function d5(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Yh(e,t){var n=e.__data__;return d5(t)?n[typeof t=="string"?"string":"hash"]:n.map}function g5(e){var t=Yh(this,e).delete(e);return this.size-=t?1:0,t}function f5(e){return Yh(this,e).get(e)}function p5(e){return Yh(this,e).has(e)}function m5(e,t){var n=Yh(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this}function Hr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Hr.prototype.clear=h5;Hr.prototype.delete=g5;Hr.prototype.get=f5;Hr.prototype.has=p5;Hr.prototype.set=m5;var y5="Expected a function";function ec(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(y5);var n=function(){var a=arguments,s=t?t.apply(this,a):a[0],o=n.cache;if(o.has(s))return o.get(s);var u=e.apply(this,a);return n.cache=o.set(s,u)||o,u};return n.cache=new(ec.Cache||Hr),n}ec.Cache=Hr;function b5(){this.__data__=new or,this.size=0}function v5(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function S5(e){return this.__data__.get(e)}function x5(e){return this.__data__.has(e)}var C5=200;function _5(e,t){var n=this.__data__;if(n instanceof or){var a=n.__data__;if(!Ho||a.length<C5-1)return a.push([e,t]),this.size=++n.size,this;n=this.__data__=new Hr(a)}return n.set(e,t),this.size=n.size,this}function Ks(e){var t=this.__data__=new or(e);this.size=t.size}Ks.prototype.clear=b5;Ks.prototype.delete=v5;Ks.prototype.get=S5;Ks.prototype.has=x5;Ks.prototype.set=_5;var yh=function(){try{var e=Pa(Object,"defineProperty");return e({},"",{}),e}catch{}}();function km(e,t,n){t=="__proto__"&&yh?yh(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Tp(e,t,n){(n!==void 0&&!Gh(e[t],n)||n===void 0&&!(t in e))&&km(e,t,n)}function w5(e){return function(t,n,a){for(var s=-1,o=Object(t),u=a(t),c=u.length;c--;){var g=u[++s];if(n(o[g],g,o)===!1)break}return t}}var T5=w5(),XC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,FS=XC&&typeof module=="object"&&module&&!module.nodeType&&module,k5=FS&&FS.exports===XC,$S=k5?En.Buffer:void 0,zS=$S?$S.allocUnsafe:void 0;function A5(e,t){if(t)return e.slice();var n=e.length,a=zS?zS(n):new e.constructor(n);return e.copy(a),a}var US=En.Uint8Array;function E5(e){var t=new e.constructor(e.byteLength);return new US(t).set(new US(e)),t}function R5(e,t){var n=t?E5(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function M5(e,t){var n=-1,a=e.length;for(t||(t=Array(a));++n<a;)t[n]=e[n];return t}var qS=Object.create,D5=function(){function e(){}return function(t){if(!Ba(t))return{};if(qS)return qS(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function QC(e,t){return function(n){return e(t(n))}}var KC=QC(Object.getPrototypeOf,Object),L5=Object.prototype;function Wh(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||L5;return e===n}function B5(e){return typeof e.constructor=="function"&&!Wh(e)?D5(KC(e)):{}}function ic(e){return e!=null&&typeof e=="object"}var O5="[object Arguments]";function HS(e){return ic(e)&&Qs(e)==O5}var ZC=Object.prototype,P5=ZC.hasOwnProperty,N5=ZC.propertyIsEnumerable,bh=HS(function(){return arguments}())?HS:function(e){return ic(e)&&P5.call(e,"callee")&&!N5.call(e,"callee")},vh=Array.isArray,I5=9007199254740991;function JC(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=I5}function Vh(e){return e!=null&&JC(e.length)&&!Tm(e)}function F5(e){return ic(e)&&Vh(e)}function $5(){return!1}var t_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,GS=t_&&typeof module=="object"&&module&&!module.nodeType&&module,z5=GS&&GS.exports===t_,jS=z5?En.Buffer:void 0,U5=jS?jS.isBuffer:void 0,Am=U5||$5,q5="[object Object]",H5=Function.prototype,G5=Object.prototype,e_=H5.toString,j5=G5.hasOwnProperty,Y5=e_.call(Object);function W5(e){if(!ic(e)||Qs(e)!=q5)return!1;var t=KC(e);if(t===null)return!0;var n=j5.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&e_.call(n)==Y5}var V5="[object Arguments]",X5="[object Array]",Q5="[object Boolean]",K5="[object Date]",Z5="[object Error]",J5="[object Function]",tP="[object Map]",eP="[object Number]",iP="[object Object]",nP="[object RegExp]",rP="[object Set]",aP="[object String]",sP="[object WeakMap]",lP="[object ArrayBuffer]",oP="[object DataView]",cP="[object Float32Array]",uP="[object Float64Array]",hP="[object Int8Array]",dP="[object Int16Array]",gP="[object Int32Array]",fP="[object Uint8Array]",pP="[object Uint8ClampedArray]",mP="[object Uint16Array]",yP="[object Uint32Array]",ce={};ce[cP]=ce[uP]=ce[hP]=ce[dP]=ce[gP]=ce[fP]=ce[pP]=ce[mP]=ce[yP]=!0;ce[V5]=ce[X5]=ce[lP]=ce[Q5]=ce[oP]=ce[K5]=ce[Z5]=ce[J5]=ce[tP]=ce[eP]=ce[iP]=ce[nP]=ce[rP]=ce[aP]=ce[sP]=!1;function bP(e){return ic(e)&&JC(e.length)&&!!ce[Qs(e)]}function vP(e){return function(t){return e(t)}}var i_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Do=i_&&typeof module=="object"&&module&&!module.nodeType&&module,SP=Do&&Do.exports===i_,Bf=SP&&WC.process,YS=function(){try{var e=Do&&Do.require&&Do.require("util").types;return e||Bf&&Bf.binding&&Bf.binding("util")}catch{}}(),WS=YS&&YS.isTypedArray,Em=WS?vP(WS):bP;function kp(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var xP=Object.prototype,CP=xP.hasOwnProperty;function _P(e,t,n){var a=e[t];(!(CP.call(e,t)&&Gh(a,n))||n===void 0&&!(t in e))&&km(e,t,n)}function wP(e,t,n,a){var s=!n;n||(n={});for(var o=-1,u=t.length;++o<u;){var c=t[o],g=void 0;g===void 0&&(g=e[c]),s?km(n,c,g):_P(n,c,g)}return n}function TP(e,t){for(var n=-1,a=Array(e);++n<e;)a[n]=t(n);return a}var kP=9007199254740991,AP=/^(?:0|[1-9]\d*)$/;function n_(e,t){var n=typeof e;return t=t??kP,!!t&&(n=="number"||n!="symbol"&&AP.test(e))&&e>-1&&e%1==0&&e<t}var EP=Object.prototype,RP=EP.hasOwnProperty;function MP(e,t){var n=vh(e),a=!n&&bh(e),s=!n&&!a&&Am(e),o=!n&&!a&&!s&&Em(e),u=n||a||s||o,c=u?TP(e.length,String):[],g=c.length;for(var d in e)(t||RP.call(e,d))&&!(u&&(d=="length"||s&&(d=="offset"||d=="parent")||o&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||n_(d,g)))&&c.push(d);return c}function DP(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var LP=Object.prototype,BP=LP.hasOwnProperty;function OP(e){if(!Ba(e))return DP(e);var t=Wh(e),n=[];for(var a in e)a=="constructor"&&(t||!BP.call(e,a))||n.push(a);return n}function r_(e){return Vh(e)?MP(e,!0):OP(e)}function PP(e){return wP(e,r_(e))}function NP(e,t,n,a,s,o,u){var c=kp(e,n),g=kp(t,n),d=u.get(g);if(d){Tp(e,n,d);return}var f=o?o(c,g,n+"",e,t,u):void 0,m=f===void 0;if(m){var y=vh(g),v=!y&&Am(g),S=!y&&!v&&Em(g);f=g,y||v||S?vh(c)?f=c:F5(c)?f=M5(c):v?(m=!1,f=A5(g,!0)):S?(m=!1,f=R5(g,!0)):f=[]:W5(g)||bh(g)?(f=c,bh(c)?f=PP(c):(!Ba(c)||Tm(c))&&(f=B5(g))):m=!1}m&&(u.set(g,f),s(f,g,a,o,u),u.delete(g)),Tp(e,n,f)}function a_(e,t,n,a,s){e!==t&&T5(t,function(o,u){if(s||(s=new Ks),Ba(o))NP(e,t,u,n,a_,a,s);else{var c=a?a(kp(e,u),o,u+"",e,t,s):void 0;c===void 0&&(c=o),Tp(e,u,c)}},r_)}function s_(e){return e}function IP(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var VS=Math.max;function FP(e,t,n){return t=VS(t===void 0?e.length-1:t,0),function(){for(var a=arguments,s=-1,o=VS(a.length-t,0),u=Array(o);++s<o;)u[s]=a[t+s];s=-1;for(var c=Array(t+1);++s<t;)c[s]=a[s];return c[t]=n(u),IP(e,this,c)}}function $P(e){return function(){return e}}var zP=yh?function(e,t){return yh(e,"toString",{configurable:!0,enumerable:!1,value:$P(t),writable:!0})}:s_,UP=800,qP=16,HP=Date.now;function GP(e){var t=0,n=0;return function(){var a=HP(),s=qP-(a-n);if(n=a,s>0){if(++t>=UP)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var jP=GP(zP);function YP(e,t){return jP(FP(e,t,s_),e+"")}function WP(e,t,n){if(!Ba(n))return!1;var a=typeof t;return(a=="number"?Vh(n)&&n_(t,n.length):a=="string"&&t in n)?Gh(n[t],e):!1}function VP(e){return YP(function(t,n){var a=-1,s=n.length,o=s>1?n[s-1]:void 0,u=s>2?n[2]:void 0;for(o=e.length>3&&typeof o=="function"?(s--,o):void 0,u&&WP(n[0],n[1],u)&&(o=s<3?void 0:o,s=1),t=Object(t);++a<s;){var c=n[a];c&&e(t,c,a,o)}return t})}var XP=VP(function(e,t,n){a_(e,t,n)}),QP="​",KP={curveBasis:$u,curveBasisClosed:JB,curveBasisOpen:tO,curveBumpX:j2,curveBumpY:Y2,curveBundle:eO,curveCardinalClosed:iO,curveCardinalOpen:nO,curveCardinal:Q2,curveCatmullRomClosed:rO,curveCatmullRomOpen:aO,curveCatmullRom:Z2,curveLinear:sh,curveLinearClosed:sO,curveMonotoneX:r1,curveMonotoneY:a1,curveNatural:l1,curveStep:o1,curveStepAfter:u1,curveStepBefore:c1},ZP=/\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi,JP=x(function(e,t){const n=l_(e,/(?:init\b)|(?:initialize\b)/);let a={};if(Array.isArray(n)){const u=n.map(c=>c.args);Xu(u),a=Le(a,[...u])}else a=n.args;if(!a)return;let s=Zp(e,t);const o="config";return a[o]!==void 0&&(s==="flowchart-v2"&&(s="flowchart"),a[s]=a[o],delete a[o]),a},"detectInit"),l_=x(function(e,t=null){var n,a;try{const s=new RegExp(`[%]{2}(?![{]${ZP.source})(?=[}][%]{2}).*
`,"ig");e=e.trim().replace(s,"").replace(/'/gm,'"'),st.debug(`Detecting diagram directive${t!==null?" type:"+t:""} based on the text:${e}`);let o;const u=[];for(;(o=Ro.exec(e))!==null;)if(o.index===Ro.lastIndex&&Ro.lastIndex++,o&&!t||t&&((n=o[1])!=null&&n.match(t))||t&&((a=o[2])!=null&&a.match(t))){const c=o[1]?o[1]:o[2],g=o[3]?o[3].trim():o[4]?JSON.parse(o[4].trim()):null;u.push({type:c,args:g})}return u.length===0?{type:e,args:null}:u.length===1?u[0]:u}catch(s){return st.error(`ERROR: ${s.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`),{type:void 0,args:null}}},"detectDirective"),tN=x(function(e){return e.replace(Ro,"")},"removeDirectives"),eN=x(function(e,t){for(const[n,a]of t.entries())if(a.match(e))return n;return-1},"isSubstringInArray");function Rm(e,t){if(!e)return t;const n=`curve${e.charAt(0).toUpperCase()+e.slice(1)}`;return KP[n]??t}x(Rm,"interpolateToCurve");function o_(e,t){const n=e.trim();if(n)return t.securityLevel!=="loose"?x4.sanitizeUrl(n):n}x(o_,"formatUrl");var iN=x((e,...t)=>{const n=e.split("."),a=n.length-1,s=n[a];let o=window;for(let u=0;u<a;u++)if(o=o[n[u]],!o){st.error(`Function name: ${e} not found in window`);return}o[s](...t)},"runFunc");function Mm(e,t){return!e||!t?0:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}x(Mm,"distance");function c_(e){let t,n=0;e.forEach(s=>{n+=Mm(s,t),t=s});const a=n/2;return Dm(e,a)}x(c_,"traverseEdge");function u_(e){return e.length===1?e[0]:c_(e)}x(u_,"calcLabelPosition");var XS=x((e,t=2)=>{const n=Math.pow(10,t);return Math.round(e*n)/n},"roundNumber"),Dm=x((e,t)=>{let n,a=t;for(const s of e){if(n){const o=Mm(s,n);if(o===0)return n;if(o<a)a-=o;else{const u=a/o;if(u<=0)return n;if(u>=1)return{x:s.x,y:s.y};if(u>0&&u<1)return{x:XS((1-u)*n.x+u*s.x,5),y:XS((1-u)*n.y+u*s.y,5)}}}n=s}throw new Error("Could not find a suitable point for the given distance")},"calculatePoint"),nN=x((e,t,n)=>{st.info(`our points ${JSON.stringify(t)}`),t[0]!==n&&(t=t.reverse());const s=Dm(t,25),o=e?10:5,u=Math.atan2(t[0].y-s.y,t[0].x-s.x),c={x:0,y:0};return c.x=Math.sin(u)*o+(t[0].x+s.x)/2,c.y=-Math.cos(u)*o+(t[0].y+s.y)/2,c},"calcCardinalityPosition");function h_(e,t,n){const a=structuredClone(n);st.info("our points",a),t!=="start_left"&&t!=="start_right"&&a.reverse();const s=25+e,o=Dm(a,s),u=10+e*.5,c=Math.atan2(a[0].y-o.y,a[0].x-o.x),g={x:0,y:0};return t==="start_left"?(g.x=Math.sin(c+Math.PI)*u+(a[0].x+o.x)/2,g.y=-Math.cos(c+Math.PI)*u+(a[0].y+o.y)/2):t==="end_right"?(g.x=Math.sin(c-Math.PI)*u+(a[0].x+o.x)/2-5,g.y=-Math.cos(c-Math.PI)*u+(a[0].y+o.y)/2-5):t==="end_left"?(g.x=Math.sin(c)*u+(a[0].x+o.x)/2-5,g.y=-Math.cos(c)*u+(a[0].y+o.y)/2-5):(g.x=Math.sin(c)*u+(a[0].x+o.x)/2,g.y=-Math.cos(c)*u+(a[0].y+o.y)/2),g}x(h_,"calcTerminalLabelPosition");function d_(e){let t="",n="";for(const a of e)a!==void 0&&(a.startsWith("color:")||a.startsWith("text-align:")?n=n+a+";":t=t+a+";");return{style:t,labelStyle:n}}x(d_,"getStylesFromArray");var QS=0,rN=x(()=>(QS++,"id-"+Math.random().toString(36).substr(2,12)+"-"+QS),"generateId");function g_(e){let t="";const n="0123456789abcdef",a=n.length;for(let s=0;s<e;s++)t+=n.charAt(Math.floor(Math.random()*a));return t}x(g_,"makeRandomHex");var aN=x(e=>g_(e.length),"random"),sN=x(function(){return{x:0,y:0,fill:void 0,anchor:"start",style:"#666",width:100,height:100,textMargin:0,rx:0,ry:0,valign:void 0,text:""}},"getTextObj"),lN=x(function(e,t){const n=t.text.replace(Vs.lineBreakRegex," "),[,a]=Xh(t.fontSize),s=e.append("text");s.attr("x",t.x),s.attr("y",t.y),s.style("text-anchor",t.anchor),s.style("font-family",t.fontFamily),s.style("font-size",a),s.style("font-weight",t.fontWeight),s.attr("fill",t.fill),t.class!==void 0&&s.attr("class",t.class);const o=s.append("tspan");return o.attr("x",t.x+t.textMargin*2),o.attr("fill",t.fill),o.text(n),s},"drawSimpleText"),oN=ec((e,t,n)=>{if(!e||(n=Object.assign({fontSize:12,fontWeight:400,fontFamily:"Arial",joinWith:"<br/>"},n),Vs.lineBreakRegex.test(e)))return e;const a=e.split(" ").filter(Boolean),s=[];let o="";return a.forEach((u,c)=>{const g=lr(`${u} `,n),d=lr(o,n);if(g>t){const{hyphenatedStrings:y,remainingWord:v}=cN(u,t,"-",n);s.push(o,...y),o=v}else d+g>=t?(s.push(o),o=u):o=[o,u].filter(Boolean).join(" ");c+1===a.length&&s.push(o)}),s.filter(u=>u!=="").join(n.joinWith)},(e,t,n)=>`${e}${t}${n.fontSize}${n.fontWeight}${n.fontFamily}${n.joinWith}`),cN=ec((e,t,n="-",a)=>{a=Object.assign({fontSize:12,fontWeight:400,fontFamily:"Arial",margin:0},a);const s=[...e],o=[];let u="";return s.forEach((c,g)=>{const d=`${u}${c}`;if(lr(d,a)>=t){const m=g+1,y=s.length===m,v=`${d}${n}`;o.push(y?d:v),u=""}else u=d}),{hyphenatedStrings:o,remainingWord:u}},(e,t,n="-",a)=>`${e}${t}${n}${a.fontSize}${a.fontWeight}${a.fontFamily}`);function f_(e,t){return Lm(e,t).height}x(f_,"calculateTextHeight");function lr(e,t){return Lm(e,t).width}x(lr,"calculateTextWidth");var Lm=ec((e,t)=>{const{fontSize:n=12,fontFamily:a="Arial",fontWeight:s=400}=t;if(!e)return{width:0,height:0};const[,o]=Xh(n),u=["sans-serif",a],c=e.split(Vs.lineBreakRegex),g=[],d=jt("body");if(!d.remove)return{width:0,height:0,lineHeight:0};const f=d.append("svg");for(const y of u){let v=0;const S={width:0,height:0,lineHeight:0};for(const C of c){const T=sN();T.text=C||QP;const w=lN(f,T).style("font-size",o).style("font-weight",s).style("font-family",y),k=(w._groups||w)[0][0].getBBox();if(k.width===0&&k.height===0)throw new Error("svg element not in render tree");S.width=Math.round(Math.max(S.width,k.width)),v=Math.round(k.height),S.height+=v,S.lineHeight=Math.round(Math.max(S.lineHeight,v))}g.push(S)}f.remove();const m=isNaN(g[1].height)||isNaN(g[1].width)||isNaN(g[1].lineHeight)||g[0].height>g[1].height&&g[0].width>g[1].width&&g[0].lineHeight>g[1].lineHeight?0:1;return g[m]},(e,t)=>`${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`),Ns,uN=(Ns=class{constructor(t=!1,n){this.count=0,this.count=n?n.length:0,this.next=t?()=>this.count++:()=>Date.now()}},x(Ns,"InitIDGenerator"),Ns),wu,hN=x(function(e){return wu=wu||document.createElement("div"),e=escape(e).replace(/%26/g,"&").replace(/%23/g,"#").replace(/%3B/g,";"),wu.innerHTML=e,unescape(wu.textContent)},"entityDecode");function Bm(e){return"str"in e}x(Bm,"isDetailedError");var dN=x((e,t,n,a)=>{var o;if(!a)return;const s=(o=e.node())==null?void 0:o.getBBox();s&&e.append("text").text(a).attr("text-anchor","middle").attr("x",s.x+s.width/2).attr("y",-n).attr("class",t)},"insertTitle"),Xh=x(e=>{if(typeof e=="number")return[e,e+"px"];const t=parseInt(e??"",10);return Number.isNaN(t)?[void 0,void 0]:e===String(t)?[t,e+"px"]:[t,e]},"parseFontSize");function Om(e,t){return XP({},e,t)}x(Om,"cleanAndMerge");var an={assignWithDepth:Le,wrapLabel:oN,calculateTextHeight:f_,calculateTextWidth:lr,calculateTextDimensions:Lm,cleanAndMerge:Om,detectInit:JP,detectDirective:l_,isSubstringInArray:eN,interpolateToCurve:Rm,calcLabelPosition:u_,calcCardinalityPosition:nN,calcTerminalLabelPosition:h_,formatUrl:o_,getStylesFromArray:d_,generateId:rN,random:aN,runFunc:iN,entityDecode:hN,insertTitle:dN,isLabelCoordinateInPath:p_,parseFontSize:Xh,InitIDGenerator:uN},gN=x(function(e){let t=e;return t=t.replace(/style.*:\S*#.*;/g,function(n){return n.substring(0,n.length-1)}),t=t.replace(/classDef.*:\S*#.*;/g,function(n){return n.substring(0,n.length-1)}),t=t.replace(/#\w+;/g,function(n){const a=n.substring(1,n.length-1);return/^\+?\d+$/.test(a)?"ﬂ°°"+a+"¶ß":"ﬂ°"+a+"¶ß"}),t},"encodeEntities"),Na=x(function(e){return e.replace(/ﬂ°°/g,"&#").replace(/ﬂ°/g,"&").replace(/¶ß/g,";")},"decodeEntities"),pU=x((e,t,{counter:n=0,prefix:a,suffix:s},o)=>o||`${a?`${a}_`:""}${e}_${t}_${n}${s?`_${s}`:""}`,"getEdgeId");function ei(e){return e??null}x(ei,"handleUndefinedAttr");function p_(e,t){const n=Math.round(e.x),a=Math.round(e.y),s=t.replace(/(\d+\.\d+)/g,o=>Math.round(parseFloat(o)).toString());return s.includes(n.toString())||s.includes(a.toString())}x(p_,"isLabelCoordinateInPath");const fN=Object.freeze({left:0,top:0,width:16,height:16}),Sh=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),m_=Object.freeze({...fN,...Sh}),pN=Object.freeze({...m_,body:"",hidden:!1}),mN=Object.freeze({width:null,height:null}),yN=Object.freeze({...mN,...Sh}),bN=(e,t,n,a="")=>{const s=e.split(":");if(e.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;a=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const c=s.pop(),g=s.pop(),d={provider:s.length>0?s[0]:a,prefix:g,name:c};return Of(d)?d:null}const o=s[0],u=o.split("-");if(u.length>1){const c={provider:a,prefix:u.shift(),name:u.join("-")};return Of(c)?c:null}if(n&&a===""){const c={provider:a,prefix:"",name:o};return Of(c,n)?c:null}return null},Of=(e,t)=>e?!!((t&&e.prefix===""||e.prefix)&&e.name):!1;function vN(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const a=((e.rotate||0)+(t.rotate||0))%4;return a&&(n.rotate=a),n}function KS(e,t){const n=vN(e,t);for(const a in pN)a in Sh?a in e&&!(a in n)&&(n[a]=Sh[a]):a in t?n[a]=t[a]:a in e&&(n[a]=e[a]);return n}function SN(e,t){const n=e.icons,a=e.aliases||Object.create(null),s=Object.create(null);function o(u){if(n[u])return s[u]=[];if(!(u in s)){s[u]=null;const c=a[u]&&a[u].parent,g=c&&o(c);g&&(s[u]=[c].concat(g))}return s[u]}return(t||Object.keys(n).concat(Object.keys(a))).forEach(o),s}function ZS(e,t,n){const a=e.icons,s=e.aliases||Object.create(null);let o={};function u(c){o=KS(a[c]||s[c],o)}return u(t),n.forEach(u),KS(e,o)}function xN(e,t){if(e.icons[t])return ZS(e,t,[]);const n=SN(e,[t])[t];return n?ZS(e,t,n):null}const CN=/(-?[0-9.]*[0-9]+[0-9.]*)/g,_N=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function JS(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const a=e.split(CN);if(a===null||!a.length)return e;const s=[];let o=a.shift(),u=_N.test(o);for(;;){if(u){const c=parseFloat(o);isNaN(c)?s.push(o):s.push(Math.ceil(c*t*n)/n)}else s.push(o);if(o=a.shift(),o===void 0)return s.join("");u=!u}}function wN(e,t="defs"){let n="";const a=e.indexOf("<"+t);for(;a>=0;){const s=e.indexOf(">",a),o=e.indexOf("</"+t);if(s===-1||o===-1)break;const u=e.indexOf(">",o);if(u===-1)break;n+=e.slice(s+1,o).trim(),e=e.slice(0,a).trim()+e.slice(u+1)}return{defs:n,content:e}}function TN(e,t){return e?"<defs>"+e+"</defs>"+t:t}function kN(e,t,n){const a=wN(e);return TN(a.defs,t+a.content+n)}const AN=e=>e==="unset"||e==="undefined"||e==="none";function EN(e,t){const n={...m_,...e},a={...yN,...t},s={left:n.left,top:n.top,width:n.width,height:n.height};let o=n.body;[n,a].forEach(C=>{const T=[],w=C.hFlip,k=C.vFlip;let E=C.rotate;w?k?E+=2:(T.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),T.push("scale(-1 1)"),s.top=s.left=0):k&&(T.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),T.push("scale(1 -1)"),s.top=s.left=0);let O;switch(E<0&&(E-=Math.floor(E/4)*4),E=E%4,E){case 1:O=s.height/2+s.top,T.unshift("rotate(90 "+O.toString()+" "+O.toString()+")");break;case 2:T.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:O=s.width/2+s.left,T.unshift("rotate(-90 "+O.toString()+" "+O.toString()+")");break}E%2===1&&(s.left!==s.top&&(O=s.left,s.left=s.top,s.top=O),s.width!==s.height&&(O=s.width,s.width=s.height,s.height=O)),T.length&&(o=kN(o,'<g transform="'+T.join(" ")+'">',"</g>"))});const u=a.width,c=a.height,g=s.width,d=s.height;let f,m;u===null?(m=c===null?"1em":c==="auto"?d:c,f=JS(m,g/d)):(f=u==="auto"?g:u,m=c===null?JS(f,d/g):c==="auto"?d:c);const y={},v=(C,T)=>{AN(T)||(y[C]=T.toString())};v("width",f),v("height",m);const S=[s.left,s.top,g,d];return y.viewBox=S.join(" "),{attributes:y,viewBox:S,body:o}}const RN=/\sid="(\S+)"/g,MN="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let DN=0;function LN(e,t=MN){const n=[];let a;for(;a=RN.exec(e);)n.push(a[1]);if(!n.length)return e;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(o=>{const u=typeof t=="function"?t(o):t+(DN++).toString(),c=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+u+s+"$3")}),e=e.replace(new RegExp(s,"g"),""),e}function BN(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const a in t)n+=" "+a+'="'+t[a]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Pm(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ia=Pm();function y_(e){Ia=e}var Lo={exec:()=>null};function Kt(e,t=""){let n=typeof e=="string"?e:e.source;const a={replace:(s,o)=>{let u=typeof o=="string"?o:o.source;return u=u.replace(oi.caret,"$1"),n=n.replace(s,u),a},getRegex:()=>new RegExp(n,t)};return a}var oi={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},ON=/^(?:[ \t]*(?:\n|$))+/,PN=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,NN=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,nc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,IN=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Nm=/(?:[*+-]|\d{1,9}[.)])/,b_=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,v_=Kt(b_).replace(/bull/g,Nm).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),FN=Kt(b_).replace(/bull/g,Nm).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Im=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,$N=/^[^\n]+/,Fm=/(?!\s*\])(?:\\.|[^\[\]\\])+/,zN=Kt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Fm).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),UN=Kt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Nm).getRegex(),Qh="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",$m=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,qN=Kt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",$m).replace("tag",Qh).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),S_=Kt(Im).replace("hr",nc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Qh).getRegex(),HN=Kt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",S_).getRegex(),zm={blockquote:HN,code:PN,def:zN,fences:NN,heading:IN,hr:nc,html:qN,lheading:v_,list:UN,newline:ON,paragraph:S_,table:Lo,text:$N},tx=Kt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",nc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Qh).getRegex(),GN={...zm,lheading:FN,table:tx,paragraph:Kt(Im).replace("hr",nc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",tx).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Qh).getRegex()},jN={...zm,html:Kt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",$m).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Lo,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Kt(Im).replace("hr",nc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",v_).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},YN=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,WN=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,x_=/^( {2,}|\\)\n(?!\s*$)/,VN=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Kh=/[\p{P}\p{S}]/u,Um=/[\s\p{P}\p{S}]/u,C_=/[^\s\p{P}\p{S}]/u,XN=Kt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Um).getRegex(),__=/(?!~)[\p{P}\p{S}]/u,QN=/(?!~)[\s\p{P}\p{S}]/u,KN=/(?:[^\s\p{P}\p{S}]|~)/u,ZN=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,w_=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,JN=Kt(w_,"u").replace(/punct/g,Kh).getRegex(),tI=Kt(w_,"u").replace(/punct/g,__).getRegex(),T_="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",eI=Kt(T_,"gu").replace(/notPunctSpace/g,C_).replace(/punctSpace/g,Um).replace(/punct/g,Kh).getRegex(),iI=Kt(T_,"gu").replace(/notPunctSpace/g,KN).replace(/punctSpace/g,QN).replace(/punct/g,__).getRegex(),nI=Kt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,C_).replace(/punctSpace/g,Um).replace(/punct/g,Kh).getRegex(),rI=Kt(/\\(punct)/,"gu").replace(/punct/g,Kh).getRegex(),aI=Kt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),sI=Kt($m).replace("(?:-->|$)","-->").getRegex(),lI=Kt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",sI).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),xh=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,oI=Kt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",xh).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),k_=Kt(/^!?\[(label)\]\[(ref)\]/).replace("label",xh).replace("ref",Fm).getRegex(),A_=Kt(/^!?\[(ref)\](?:\[\])?/).replace("ref",Fm).getRegex(),cI=Kt("reflink|nolink(?!\\()","g").replace("reflink",k_).replace("nolink",A_).getRegex(),qm={_backpedal:Lo,anyPunctuation:rI,autolink:aI,blockSkip:ZN,br:x_,code:WN,del:Lo,emStrongLDelim:JN,emStrongRDelimAst:eI,emStrongRDelimUnd:nI,escape:YN,link:oI,nolink:A_,punctuation:XN,reflink:k_,reflinkSearch:cI,tag:lI,text:VN,url:Lo},uI={...qm,link:Kt(/^!?\[(label)\]\((.*?)\)/).replace("label",xh).getRegex(),reflink:Kt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",xh).getRegex()},Ap={...qm,emStrongRDelimAst:iI,emStrongLDelim:tI,url:Kt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},hI={...Ap,br:Kt(x_).replace("{2,}","*").getRegex(),text:Kt(Ap.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Tu={normal:zm,gfm:GN,pedantic:jN},fo={normal:qm,gfm:Ap,breaks:hI,pedantic:uI},dI={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ex=e=>dI[e];function bn(e,t){if(t){if(oi.escapeTest.test(e))return e.replace(oi.escapeReplace,ex)}else if(oi.escapeTestNoEncode.test(e))return e.replace(oi.escapeReplaceNoEncode,ex);return e}function ix(e){try{e=encodeURI(e).replace(oi.percentDecode,"%")}catch{return null}return e}function nx(e,t){var o;const n=e.replace(oi.findPipe,(u,c,g)=>{let d=!1,f=c;for(;--f>=0&&g[f]==="\\";)d=!d;return d?"|":" |"}),a=n.split(oi.splitPipe);let s=0;if(a[0].trim()||a.shift(),a.length>0&&!((o=a.at(-1))!=null&&o.trim())&&a.pop(),t)if(a.length>t)a.splice(t);else for(;a.length<t;)a.push("");for(;s<a.length;s++)a[s]=a[s].trim().replace(oi.slashPipe,"|");return a}function po(e,t,n){const a=e.length;if(a===0)return"";let s=0;for(;s<a&&e.charAt(a-s-1)===t;)s++;return e.slice(0,a-s)}function gI(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let a=0;a<e.length;a++)if(e[a]==="\\")a++;else if(e[a]===t[0])n++;else if(e[a]===t[1]&&(n--,n<0))return a;return n>0?-2:-1}function rx(e,t,n,a,s){const o=t.href,u=t.title||null,c=e[1].replace(s.other.outputLinkReplace,"$1");a.state.inLink=!0;const g={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:u,text:c,tokens:a.inlineTokens(c)};return a.state.inLink=!1,g}function fI(e,t,n){const a=e.match(n.other.indentCodeCompensation);if(a===null)return t;const s=a[1];return t.split(`
`).map(o=>{const u=o.match(n.other.beginningSpace);if(u===null)return o;const[c]=u;return c.length>=s.length?o.slice(s.length):o}).join(`
`)}var Ch=class{constructor(e){ae(this,"options");ae(this,"rules");ae(this,"lexer");this.options=e||Ia}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:po(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],a=fI(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:a}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const a=po(n,"#");(this.options.pedantic||!a||this.rules.other.endingSpaceChar.test(a))&&(n=a.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:po(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=po(t[0],`
`).split(`
`),a="",s="";const o=[];for(;n.length>0;){let u=!1;const c=[];let g;for(g=0;g<n.length;g++)if(this.rules.other.blockquoteStart.test(n[g]))c.push(n[g]),u=!0;else if(!u)c.push(n[g]);else break;n=n.slice(g);const d=c.join(`
`),f=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");a=a?`${a}
${d}`:d,s=s?`${s}
${f}`:f;const m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,o,!0),this.lexer.state.top=m,n.length===0)break;const y=o.at(-1);if((y==null?void 0:y.type)==="code")break;if((y==null?void 0:y.type)==="blockquote"){const v=y,S=v.raw+`
`+n.join(`
`),C=this.blockquote(S);o[o.length-1]=C,a=a.substring(0,a.length-v.raw.length)+C.raw,s=s.substring(0,s.length-v.text.length)+C.text;break}else if((y==null?void 0:y.type)==="list"){const v=y,S=v.raw+`
`+n.join(`
`),C=this.list(S);o[o.length-1]=C,a=a.substring(0,a.length-y.raw.length)+C.raw,s=s.substring(0,s.length-v.raw.length)+C.raw,n=S.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:a,tokens:o,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const a=n.length>1,s={type:"list",raw:"",ordered:a,start:a?+n.slice(0,-1):"",loose:!1,items:[]};n=a?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=a?n:"[*+-]");const o=this.rules.other.listItemRegex(n);let u=!1;for(;e;){let g=!1,d="",f="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;d=t[0],e=e.substring(d.length);let m=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,w=>" ".repeat(3*w.length)),y=e.split(`
`,1)[0],v=!m.trim(),S=0;if(this.options.pedantic?(S=2,f=m.trimStart()):v?S=t[1].length+1:(S=t[2].search(this.rules.other.nonSpaceChar),S=S>4?1:S,f=m.slice(S),S+=t[1].length),v&&this.rules.other.blankLine.test(y)&&(d+=y+`
`,e=e.substring(y.length+1),g=!0),!g){const w=this.rules.other.nextBulletRegex(S),k=this.rules.other.hrRegex(S),E=this.rules.other.fencesBeginRegex(S),O=this.rules.other.headingBeginRegex(S),L=this.rules.other.htmlBeginRegex(S);for(;e;){const R=e.split(`
`,1)[0];let P;if(y=R,this.options.pedantic?(y=y.replace(this.rules.other.listReplaceNesting,"  "),P=y):P=y.replace(this.rules.other.tabCharGlobal,"    "),E.test(y)||O.test(y)||L.test(y)||w.test(y)||k.test(y))break;if(P.search(this.rules.other.nonSpaceChar)>=S||!y.trim())f+=`
`+P.slice(S);else{if(v||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||E.test(m)||O.test(m)||k.test(m))break;f+=`
`+y}!v&&!y.trim()&&(v=!0),d+=R+`
`,e=e.substring(R.length+1),m=P.slice(S)}}s.loose||(u?s.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(u=!0));let C=null,T;this.options.gfm&&(C=this.rules.other.listIsTask.exec(f),C&&(T=C[0]!=="[ ] ",f=f.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:d,task:!!C,checked:T,loose:!1,text:f,tokens:[]}),s.raw+=d}const c=s.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let g=0;g<s.items.length;g++)if(this.lexer.state.top=!1,s.items[g].tokens=this.lexer.blockTokens(s.items[g].text,[]),!s.loose){const d=s.items[g].tokens.filter(m=>m.type==="space"),f=d.length>0&&d.some(m=>this.rules.other.anyLine.test(m.raw));s.loose=f}if(s.loose)for(let g=0;g<s.items.length;g++)s.items[g].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),a=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:a,title:s}}}table(e){var u;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=nx(t[1]),a=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(u=t[3])!=null&&u.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===a.length){for(const c of a)this.rules.other.tableAlignRight.test(c)?o.align.push("right"):this.rules.other.tableAlignCenter.test(c)?o.align.push("center"):this.rules.other.tableAlignLeft.test(c)?o.align.push("left"):o.align.push(null);for(let c=0;c<n.length;c++)o.header.push({text:n[c],tokens:this.lexer.inline(n[c]),header:!0,align:o.align[c]});for(const c of s)o.rows.push(nx(c,o.header.length).map((g,d)=>({text:g,tokens:this.lexer.inline(g),header:!1,align:o.align[d]})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const o=po(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=gI(t[2],"()");if(o===-2)return;if(o>-1){const c=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let a=t[2],s="";if(this.options.pedantic){const o=this.rules.other.pedanticHrefTitle.exec(a);o&&(a=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return a=a.trim(),this.rules.other.startAngleBracket.test(a)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?a=a.slice(1):a=a.slice(1,-1)),rx(t,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const a=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=t[a.toLowerCase()];if(!s){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return rx(n,s,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let a=this.rules.inline.emStrongLDelim.exec(e);if(!a||a[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(a[1]||a[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...a[0]].length-1;let u,c,g=o,d=0;const f=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+o);(a=f.exec(t))!=null;){if(u=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!u)continue;if(c=[...u].length,a[3]||a[4]){g+=c;continue}else if((a[5]||a[6])&&o%3&&!((o+c)%3)){d+=c;continue}if(g-=c,g>0)continue;c=Math.min(c,c+g+d);const m=[...a[0]][0].length,y=e.slice(0,o+a.index+m+c);if(Math.min(o,c)%2){const S=y.slice(1,-1);return{type:"em",raw:y,text:S,tokens:this.lexer.inlineTokens(S)}}const v=y.slice(2,-2);return{type:"strong",raw:y,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const a=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return a&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,a;return t[2]==="@"?(n=t[1],a="mailto:"+n):(n=t[1],a=n),{type:"link",raw:t[0],text:n,href:a,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let a,s;if(t[2]==="@")a=t[0],s="mailto:"+a;else{let o;do o=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(o!==t[0]);a=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:a,href:s,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},tr=class Ep{constructor(t){ae(this,"tokens");ae(this,"options");ae(this,"state");ae(this,"tokenizer");ae(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ia,this.options.tokenizer=this.options.tokenizer||new Ch,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:oi,block:Tu.normal,inline:fo.normal};this.options.pedantic?(n.block=Tu.pedantic,n.inline=fo.pedantic):this.options.gfm&&(n.block=Tu.gfm,this.options.breaks?n.inline=fo.breaks:n.inline=fo.gfm),this.tokenizer.rules=n}static get rules(){return{block:Tu,inline:fo}}static lex(t,n){return new Ep(n).lex(t)}static lexInline(t,n){return new Ep(n).inlineTokens(t)}lex(t){t=t.replace(oi.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const a=this.inlineQueue[n];this.inlineTokens(a.src,a.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],a=!1){var s,o,u;for(this.options.pedantic&&(t=t.replace(oi.tabCharGlobal,"    ").replace(oi.spaceLine,""));t;){let c;if((o=(s=this.options.extensions)==null?void 0:s.block)!=null&&o.some(d=>(c=d.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.space(t)){t=t.substring(c.raw.length);const d=n.at(-1);c.raw.length===1&&d!==void 0?d.raw+=`
`:n.push(c);continue}if(c=this.tokenizer.code(t)){t=t.substring(c.raw.length);const d=n.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=`
`+c.raw,d.text+=`
`+c.text,this.inlineQueue.at(-1).src=d.text):n.push(c);continue}if(c=this.tokenizer.fences(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.heading(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.hr(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.blockquote(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.list(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.html(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.def(t)){t=t.substring(c.raw.length);const d=n.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=`
`+c.raw,d.text+=`
`+c.raw,this.inlineQueue.at(-1).src=d.text):this.tokens.links[c.tag]||(this.tokens.links[c.tag]={href:c.href,title:c.title});continue}if(c=this.tokenizer.table(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.lheading(t)){t=t.substring(c.raw.length),n.push(c);continue}let g=t;if((u=this.options.extensions)!=null&&u.startBlock){let d=1/0;const f=t.slice(1);let m;this.options.extensions.startBlock.forEach(y=>{m=y.call({lexer:this},f),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(g=t.substring(0,d+1))}if(this.state.top&&(c=this.tokenizer.paragraph(g))){const d=n.at(-1);a&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=`
`+c.raw,d.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):n.push(c),a=g.length!==t.length,t=t.substring(c.raw.length);continue}if(c=this.tokenizer.text(t)){t=t.substring(c.raw.length);const d=n.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=`
`+c.raw,d.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):n.push(c);continue}if(t){const d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var c,g,d;let a=t,s=null;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)f.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,s.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let o=!1,u="";for(;t;){o||(u=""),o=!1;let f;if((g=(c=this.options.extensions)==null?void 0:c.inline)!=null&&g.some(y=>(f=y.call({lexer:this},t,n))?(t=t.substring(f.raw.length),n.push(f),!0):!1))continue;if(f=this.tokenizer.escape(t)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.tag(t)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.link(t)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(f.raw.length);const y=n.at(-1);f.type==="text"&&(y==null?void 0:y.type)==="text"?(y.raw+=f.raw,y.text+=f.text):n.push(f);continue}if(f=this.tokenizer.emStrong(t,a,u)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.codespan(t)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.br(t)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.del(t)){t=t.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.autolink(t)){t=t.substring(f.raw.length),n.push(f);continue}if(!this.state.inLink&&(f=this.tokenizer.url(t))){t=t.substring(f.raw.length),n.push(f);continue}let m=t;if((d=this.options.extensions)!=null&&d.startInline){let y=1/0;const v=t.slice(1);let S;this.options.extensions.startInline.forEach(C=>{S=C.call({lexer:this},v),typeof S=="number"&&S>=0&&(y=Math.min(y,S))}),y<1/0&&y>=0&&(m=t.substring(0,y+1))}if(f=this.tokenizer.inlineText(m)){t=t.substring(f.raw.length),f.raw.slice(-1)!=="_"&&(u=f.raw.slice(-1)),o=!0;const y=n.at(-1);(y==null?void 0:y.type)==="text"?(y.raw+=f.raw,y.text+=f.text):n.push(f);continue}if(t){const y="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return n}},_h=class{constructor(e){ae(this,"options");ae(this,"parser");this.options=e||Ia}space(e){return""}code({text:e,lang:t,escaped:n}){var o;const a=(o=(t||"").match(oi.notSpaceStart))==null?void 0:o[0],s=e.replace(oi.endingNewline,"")+`
`;return a?'<pre><code class="language-'+bn(a)+'">'+(n?s:bn(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:bn(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let a="";for(let u=0;u<e.items.length;u++){const c=e.items[u];a+=this.listitem(c)}const s=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+s+o+`>
`+a+"</"+s+`>
`}listitem(e){var n;let t="";if(e.task){const a=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=a+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=a+" "+bn(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:a+" ",text:a+" ",escaped:!0}):t+=a+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let s=0;s<e.header.length;s++)n+=this.tablecell(e.header[s]);t+=this.tablerow({text:n});let a="";for(let s=0;s<e.rows.length;s++){const o=e.rows[s];n="";for(let u=0;u<o.length;u++)n+=this.tablecell(o[u]);a+=this.tablerow({text:n})}return a&&(a=`<tbody>${a}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+a+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${bn(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const a=this.parser.parseInline(n),s=ix(e);if(s===null)return a;e=s;let o='<a href="'+e+'"';return t&&(o+=' title="'+bn(t)+'"'),o+=">"+a+"</a>",o}image({href:e,title:t,text:n,tokens:a}){a&&(n=this.parser.parseInline(a,this.parser.textRenderer));const s=ix(e);if(s===null)return bn(n);e=s;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${bn(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:bn(e.text)}},Hm=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},er=class Rp{constructor(t){ae(this,"options");ae(this,"renderer");ae(this,"textRenderer");this.options=t||Ia,this.options.renderer=this.options.renderer||new _h,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Hm}static parse(t,n){return new Rp(n).parse(t)}static parseInline(t,n){return new Rp(n).parseInline(t)}parse(t,n=!0){var s,o;let a="";for(let u=0;u<t.length;u++){const c=t[u];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[c.type]){const d=c,f=this.options.extensions.renderers[d.type].call({parser:this},d);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type)){a+=f||"";continue}}const g=c;switch(g.type){case"space":{a+=this.renderer.space(g);continue}case"hr":{a+=this.renderer.hr(g);continue}case"heading":{a+=this.renderer.heading(g);continue}case"code":{a+=this.renderer.code(g);continue}case"table":{a+=this.renderer.table(g);continue}case"blockquote":{a+=this.renderer.blockquote(g);continue}case"list":{a+=this.renderer.list(g);continue}case"html":{a+=this.renderer.html(g);continue}case"paragraph":{a+=this.renderer.paragraph(g);continue}case"text":{let d=g,f=this.renderer.text(d);for(;u+1<t.length&&t[u+1].type==="text";)d=t[++u],f+=`
`+this.renderer.text(d);n?a+=this.renderer.paragraph({type:"paragraph",raw:f,text:f,tokens:[{type:"text",raw:f,text:f,escaped:!0}]}):a+=f;continue}default:{const d='Token with "'+g.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return a}parseInline(t,n=this.renderer){var s,o;let a="";for(let u=0;u<t.length;u++){const c=t[u];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[c.type]){const d=this.options.extensions.renderers[c.type].call({parser:this},c);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(c.type)){a+=d||"";continue}}const g=c;switch(g.type){case"escape":{a+=n.text(g);break}case"html":{a+=n.html(g);break}case"link":{a+=n.link(g);break}case"image":{a+=n.image(g);break}case"strong":{a+=n.strong(g);break}case"em":{a+=n.em(g);break}case"codespan":{a+=n.codespan(g);break}case"br":{a+=n.br(g);break}case"del":{a+=n.del(g);break}case"text":{a+=n.text(g);break}default:{const d='Token with "'+g.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return a}},Hf,qu=(Hf=class{constructor(e){ae(this,"options");ae(this,"block");this.options=e||Ia}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?tr.lex:tr.lexInline}provideParser(){return this.block?er.parse:er.parseInline}},ae(Hf,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Hf),pI=class{constructor(...e){ae(this,"defaults",Pm());ae(this,"options",this.setOptions);ae(this,"parse",this.parseMarkdown(!0));ae(this,"parseInline",this.parseMarkdown(!1));ae(this,"Parser",er);ae(this,"Renderer",_h);ae(this,"TextRenderer",Hm);ae(this,"Lexer",tr);ae(this,"Tokenizer",Ch);ae(this,"Hooks",qu);this.use(...e)}walkTokens(e,t){var a,s;let n=[];for(const o of e)switch(n=n.concat(t.call(this,o)),o.type){case"table":{const u=o;for(const c of u.header)n=n.concat(this.walkTokens(c.tokens,t));for(const c of u.rows)for(const g of c)n=n.concat(this.walkTokens(g.tokens,t));break}case"list":{const u=o;n=n.concat(this.walkTokens(u.items,t));break}default:{const u=o;(s=(a=this.defaults.extensions)==null?void 0:a.childTokens)!=null&&s[u.type]?this.defaults.extensions.childTokens[u.type].forEach(c=>{const g=u[c].flat(1/0);n=n.concat(this.walkTokens(g,t))}):u.tokens&&(n=n.concat(this.walkTokens(u.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const a={...n};if(a.async=this.defaults.async||a.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const o=t.renderers[s.name];o?t.renderers[s.name]=function(...u){let c=s.renderer.apply(this,u);return c===!1&&(c=o.apply(this,u)),c}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[s.level];o?o.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),a.extensions=t),n.renderer){const s=this.defaults.renderer||new _h(this.defaults);for(const o in n.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const u=o,c=n.renderer[u],g=s[u];s[u]=(...d)=>{let f=c.apply(s,d);return f===!1&&(f=g.apply(s,d)),f||""}}a.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new Ch(this.defaults);for(const o in n.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const u=o,c=n.tokenizer[u],g=s[u];s[u]=(...d)=>{let f=c.apply(s,d);return f===!1&&(f=g.apply(s,d)),f}}a.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new qu;for(const o in n.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const u=o,c=n.hooks[u],g=s[u];qu.passThroughHooks.has(o)?s[u]=d=>{if(this.defaults.async)return Promise.resolve(c.call(s,d)).then(m=>g.call(s,m));const f=c.call(s,d);return g.call(s,f)}:s[u]=(...d)=>{let f=c.apply(s,d);return f===!1&&(f=g.apply(s,d)),f}}a.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,o=n.walkTokens;a.walkTokens=function(u){let c=[];return c.push(o.call(this,u)),s&&(c=c.concat(s.call(this,u))),c}}this.defaults={...this.defaults,...a}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return tr.lex(e,t??this.defaults)}parser(e,t){return er.parse(e,t??this.defaults)}parseMarkdown(e){return(n,a)=>{const s={...a},o={...this.defaults,...s},u=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&s.async===!1)return u(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return u(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return u(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=e);const c=o.hooks?o.hooks.provideLexer():e?tr.lex:tr.lexInline,g=o.hooks?o.hooks.provideParser():e?er.parse:er.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(d=>c(d,o)).then(d=>o.hooks?o.hooks.processAllTokens(d):d).then(d=>o.walkTokens?Promise.all(this.walkTokens(d,o.walkTokens)).then(()=>d):d).then(d=>g(d,o)).then(d=>o.hooks?o.hooks.postprocess(d):d).catch(u);try{o.hooks&&(n=o.hooks.preprocess(n));let d=c(n,o);o.hooks&&(d=o.hooks.processAllTokens(d)),o.walkTokens&&this.walkTokens(d,o.walkTokens);let f=g(d,o);return o.hooks&&(f=o.hooks.postprocess(f)),f}catch(d){return u(d)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const a="<p>An error occurred:</p><pre>"+bn(n.message+"",!0)+"</pre>";return t?Promise.resolve(a):a}if(t)return Promise.reject(n);throw n}}},Ma=new pI;function Xt(e,t){return Ma.parse(e,t)}Xt.options=Xt.setOptions=function(e){return Ma.setOptions(e),Xt.defaults=Ma.defaults,y_(Xt.defaults),Xt};Xt.getDefaults=Pm;Xt.defaults=Ia;Xt.use=function(...e){return Ma.use(...e),Xt.defaults=Ma.defaults,y_(Xt.defaults),Xt};Xt.walkTokens=function(e,t){return Ma.walkTokens(e,t)};Xt.parseInline=Ma.parseInline;Xt.Parser=er;Xt.parser=er.parse;Xt.Renderer=_h;Xt.TextRenderer=Hm;Xt.Lexer=tr;Xt.lexer=tr.lex;Xt.Tokenizer=Ch;Xt.Hooks=qu;Xt.parse=Xt;Xt.options;Xt.setOptions;Xt.use;Xt.walkTokens;Xt.parseInline;er.parse;tr.lex;function E_(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=Array.from(typeof e=="string"?[e]:e);a[a.length-1]=a[a.length-1].replace(/\r?\n([\t ]*)$/,"");var s=a.reduce(function(c,g){var d=g.match(/\n([\t ]+|(?!\s).)/g);return d?c.concat(d.map(function(f){var m,y;return(y=(m=f.match(/[\t ]/g))===null||m===void 0?void 0:m.length)!==null&&y!==void 0?y:0})):c},[]);if(s.length){var o=new RegExp(`
[	 ]{`+Math.min.apply(Math,s)+"}","g");a=a.map(function(c){return c.replace(o,`
`)})}a[0]=a[0].replace(/^\r?\n/,"");var u=a[0];return t.forEach(function(c,g){var d=u.match(/(?:^|\n)( *)$/),f=d?d[1]:"",m=c;typeof c=="string"&&c.includes(`
`)&&(m=String(c).split(`
`).map(function(y,v){return v===0?y:""+f+y}).join(`
`)),u+=m+a[g+1]}),u}var mI={body:'<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',height:80,width:80},Mp=new Map,R_=new Map,yI=x(e=>{for(const t of e){if(!t.name)throw new Error('Invalid icon loader. Must have a "name" property with non-empty string value.');if(st.debug("Registering icon pack:",t.name),"loader"in t)R_.set(t.name,t.loader);else if("icons"in t)Mp.set(t.name,t.icons);else throw st.error("Invalid icon loader:",t),new Error('Invalid icon loader. Must have either "icons" or "loader" property.')}},"registerIconPacks"),M_=x(async(e,t)=>{const n=bN(e,!0,t!==void 0);if(!n)throw new Error(`Invalid icon name: ${e}`);const a=n.prefix||t;if(!a)throw new Error(`Icon name must contain a prefix: ${e}`);let s=Mp.get(a);if(!s){const u=R_.get(a);if(!u)throw new Error(`Icon set not found: ${n.prefix}`);try{s={...await u(),prefix:a},Mp.set(a,s)}catch(c){throw st.error(c),new Error(`Failed to load icon set: ${n.prefix}`)}}const o=xN(s,n.name);if(!o)throw new Error(`Icon not found: ${e}`);return o},"getRegisteredIconData"),bI=x(async e=>{try{return await M_(e),!0}catch{return!1}},"isIconAvailable"),rc=x(async(e,t,n)=>{let a;try{a=await M_(e,t==null?void 0:t.fallbackPrefix)}catch(u){st.error(u),a=mI}const s=EN(a,t),o=BN(LN(s.body),{...s.attributes,...n});return Vi(o,Je())},"getIconSVG");function D_(e,{markdownAutoWrap:t}){const a=e.replace(/<br\/>/g,`
`).replace(/\n{2,}/g,`
`),s=E_(a);return t===!1?s.replace(/ /g,"&nbsp;"):s}x(D_,"preprocessMarkdown");function L_(e,t={}){const n=D_(e,t),a=Xt.lexer(n),s=[[]];let o=0;function u(c,g="normal"){c.type==="text"?c.text.split(`
`).forEach((f,m)=>{m!==0&&(o++,s.push([])),f.split(" ").forEach(y=>{y=y.replace(/&#39;/g,"'"),y&&s[o].push({content:y,type:g})})}):c.type==="strong"||c.type==="em"?c.tokens.forEach(d=>{u(d,c.type)}):c.type==="html"&&s[o].push({content:c.text,type:"normal"})}return x(u,"processNode"),a.forEach(c=>{var g;c.type==="paragraph"?(g=c.tokens)==null||g.forEach(d=>{u(d)}):c.type==="html"?s[o].push({content:c.text,type:"normal"}):s[o].push({content:c.raw,type:"normal"})}),s}x(L_,"markdownToLines");function B_(e,{markdownAutoWrap:t}={}){const n=Xt.lexer(e);function a(s){var o,u,c;return s.type==="text"?t===!1?s.text.replace(/\n */g,"<br/>").replace(/ /g,"&nbsp;"):s.text.replace(/\n */g,"<br/>"):s.type==="strong"?`<strong>${(o=s.tokens)==null?void 0:o.map(a).join("")}</strong>`:s.type==="em"?`<em>${(u=s.tokens)==null?void 0:u.map(a).join("")}</em>`:s.type==="paragraph"?`<p>${(c=s.tokens)==null?void 0:c.map(a).join("")}</p>`:s.type==="space"?"":s.type==="html"?`${s.text}`:s.type==="escape"?s.text:(st.warn(`Unsupported markdown: ${s.type}`),s.raw)}return x(a,"output"),n.map(a).join("")}x(B_,"markdownToHTML");function O_(e){return Intl.Segmenter?[...new Intl.Segmenter().segment(e)].map(t=>t.segment):[...e]}x(O_,"splitTextToChars");function P_(e,t){const n=O_(t.content);return Gm(e,[],n,t.type)}x(P_,"splitWordToFitWidth");function Gm(e,t,n,a){if(n.length===0)return[{content:t.join(""),type:a},{content:"",type:a}];const[s,...o]=n,u=[...t,s];return e([{content:u.join(""),type:a}])?Gm(e,u,o,a):(t.length===0&&s&&(t.push(s),n.shift()),[{content:t.join(""),type:a},{content:n.join(""),type:a}])}x(Gm,"splitWordToFitWidthRecursion");function N_(e,t){if(e.some(({content:n})=>n.includes(`
`)))throw new Error("splitLineToFitWidth does not support newlines in the line");return wh(e,t)}x(N_,"splitLineToFitWidth");function wh(e,t,n=[],a=[]){if(e.length===0)return a.length>0&&n.push(a),n.length>0?n:[];let s="";e[0].content===" "&&(s=" ",e.shift());const o=e.shift()??{content:" ",type:"normal"},u=[...a];if(s!==""&&u.push({content:s,type:"normal"}),u.push(o),t(u))return wh(e,t,n,u);if(a.length>0)n.push(a),e.unshift(o);else if(o.content){const[c,g]=P_(t,o);n.push([c]),g.content&&e.unshift(g)}return wh(e,t,n)}x(wh,"splitLineToFitWidthRecursion");function Dp(e,t){t&&e.attr("style",t)}x(Dp,"applyStyle");async function I_(e,t,n,a,s=!1,o=Je()){const u=e.append("foreignObject");u.attr("width",`${10*n}px`),u.attr("height",`${10*n}px`);const c=u.append("xhtml:div"),g=$s(t.label)?await Jp(t.label.replace(Vs.lineBreakRegex,`
`),o):Vi(t.label,o),d=t.isNode?"nodeLabel":"edgeLabel",f=c.append("span");f.html(g),Dp(f,t.labelStyle),f.attr("class",`${d} ${a}`),Dp(c,t.labelStyle),c.style("display","table-cell"),c.style("white-space","nowrap"),c.style("line-height","1.5"),c.style("max-width",n+"px"),c.style("text-align","center"),c.attr("xmlns","http://www.w3.org/1999/xhtml"),s&&c.attr("class","labelBkg");let m=c.node().getBoundingClientRect();return m.width===n&&(c.style("display","table"),c.style("white-space","break-spaces"),c.style("width",n+"px"),m=c.node().getBoundingClientRect()),u.node()}x(I_,"addHtmlSpan");function Zh(e,t,n){return e.append("tspan").attr("class","text-outer-tspan").attr("x",0).attr("y",t*n-.1+"em").attr("dy",n+"em")}x(Zh,"createTspan");function F_(e,t,n){const a=e.append("text"),s=Zh(a,1,t);Jh(s,n);const o=s.node().getComputedTextLength();return a.remove(),o}x(F_,"computeWidthOfText");function vI(e,t,n){var u;const a=e.append("text"),s=Zh(a,1,t);Jh(s,[{content:n,type:"normal"}]);const o=(u=s.node())==null?void 0:u.getBoundingClientRect();return o&&a.remove(),o}x(vI,"computeDimensionOfText");function $_(e,t,n,a=!1){const o=t.append("g"),u=o.insert("rect").attr("class","background").attr("style","stroke: none"),c=o.append("text").attr("y","-10.1");let g=0;for(const d of n){const f=x(y=>F_(o,1.1,y)<=e,"checkWidth"),m=f(d)?[d]:N_(d,f);for(const y of m){const v=Zh(c,g,1.1);Jh(v,y),g++}}if(a){const d=c.node().getBBox(),f=2;return u.attr("x",d.x-f).attr("y",d.y-f).attr("width",d.width+2*f).attr("height",d.height+2*f),o.node()}else return c.node()}x($_,"createFormattedText");function Jh(e,t){e.text(""),t.forEach((n,a)=>{const s=e.append("tspan").attr("font-style",n.type==="em"?"italic":"normal").attr("class","text-inner-tspan").attr("font-weight",n.type==="strong"?"bold":"normal");a===0?s.text(n.content):s.text(" "+n.content)})}x(Jh,"updateTextContentAndStyles");async function z_(e,t={}){const n=[];e.replace(/(fa[bklrs]?):fa-([\w-]+)/g,(s,o,u)=>(n.push((async()=>{const c=`${o}:${u}`;return await bI(c)?await rc(c,void 0,{class:"label-icon"}):`<i class='${Vi(s,t).replace(":"," ")}'></i>`})()),s));const a=await Promise.all(n);return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g,()=>a.shift()??"")}x(z_,"replaceIconSubstring");var Gr=x(async(e,t="",{style:n="",isTitle:a=!1,classes:s="",useHtmlLabels:o=!0,isNode:u=!0,width:c=200,addSvgBackground:g=!1}={},d)=>{if(st.debug("XYZ createText",t,n,a,s,o,u,"addSvgBackground: ",g),o){const f=B_(t,d),m=await z_(Na(f),d),y=t.replace(/\\\\/g,"\\"),v={isNode:u,label:$s(t)?y:m,labelStyle:n.replace("fill:","color:")};return await I_(e,v,c,s,g,d)}else{const f=t.replace(/<br\s*\/?>/g,"<br/>"),m=L_(f.replace("<br>","<br/>"),d),y=$_(c,e,m,t?g:!1);if(u){/stroke:/.exec(n)&&(n=n.replace("stroke:","lineColor:"));const v=n.replace(/stroke:[^;]+;?/g,"").replace(/stroke-width:[^;]+;?/g,"").replace(/fill:[^;]+;?/g,"").replace(/color:/g,"fill:");jt(y).attr("style",v)}else{const v=n.replace(/stroke:[^;]+;?/g,"").replace(/stroke-width:[^;]+;?/g,"").replace(/fill:[^;]+;?/g,"").replace(/background:/g,"fill:");jt(y).select("rect").attr("style",v.replace(/background:/g,"fill:"));const S=n.replace(/stroke:[^;]+;?/g,"").replace(/stroke-width:[^;]+;?/g,"").replace(/fill:[^;]+;?/g,"").replace(/color:/g,"fill:");jt(y).select("text").attr("style",S)}return y}},"createText");function Pf(e,t,n){if(e&&e.length){const[a,s]=t,o=Math.PI/180*n,u=Math.cos(o),c=Math.sin(o);for(const g of e){const[d,f]=g;g[0]=(d-a)*u-(f-s)*c+a,g[1]=(d-a)*c+(f-s)*u+s}}}function SI(e,t){return e[0]===t[0]&&e[1]===t[1]}function xI(e,t,n,a=1){const s=n,o=Math.max(t,.1),u=e[0]&&e[0][0]&&typeof e[0][0]=="number"?[e]:e,c=[0,0];if(s)for(const d of u)Pf(d,c,s);const g=function(d,f,m){const y=[];for(const k of d){const E=[...k];SI(E[0],E[E.length-1])||E.push([E[0][0],E[0][1]]),E.length>2&&y.push(E)}const v=[];f=Math.max(f,.1);const S=[];for(const k of y)for(let E=0;E<k.length-1;E++){const O=k[E],L=k[E+1];if(O[1]!==L[1]){const R=Math.min(O[1],L[1]);S.push({ymin:R,ymax:Math.max(O[1],L[1]),x:R===O[1]?O[0]:L[0],islope:(L[0]-O[0])/(L[1]-O[1])})}}if(S.sort((k,E)=>k.ymin<E.ymin?-1:k.ymin>E.ymin?1:k.x<E.x?-1:k.x>E.x?1:k.ymax===E.ymax?0:(k.ymax-E.ymax)/Math.abs(k.ymax-E.ymax)),!S.length)return v;let C=[],T=S[0].ymin,w=0;for(;C.length||S.length;){if(S.length){let k=-1;for(let E=0;E<S.length&&!(S[E].ymin>T);E++)k=E;S.splice(0,k+1).forEach(E=>{C.push({s:T,edge:E})})}if(C=C.filter(k=>!(k.edge.ymax<=T)),C.sort((k,E)=>k.edge.x===E.edge.x?0:(k.edge.x-E.edge.x)/Math.abs(k.edge.x-E.edge.x)),(m!==1||w%f==0)&&C.length>1)for(let k=0;k<C.length;k+=2){const E=k+1;if(E>=C.length)break;const O=C[k].edge,L=C[E].edge;v.push([[Math.round(O.x),T],[Math.round(L.x),T]])}T+=m,C.forEach(k=>{k.edge.x=k.edge.x+m*k.edge.islope}),w++}return v}(u,o,a);if(s){for(const d of u)Pf(d,c,-s);(function(d,f,m){const y=[];d.forEach(v=>y.push(...v)),Pf(y,f,m)})(g,c,-s)}return g}function ac(e,t){var n;const a=t.hachureAngle+90;let s=t.hachureGap;s<0&&(s=4*t.strokeWidth),s=Math.round(Math.max(s,.1));let o=1;return t.roughness>=1&&(((n=t.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(o=s),xI(e,s,a,o||1)}class jm{constructor(t){this.helper=t}fillPolygons(t,n){return this._fillPolygons(t,n)}_fillPolygons(t,n){const a=ac(t,n);return{type:"fillSketch",ops:this.renderLines(a,n)}}renderLines(t,n){const a=[];for(const s of t)a.push(...this.helper.doubleLineOps(s[0][0],s[0][1],s[1][0],s[1][1],n));return a}}function td(e){const t=e[0],n=e[1];return Math.sqrt(Math.pow(t[0]-n[0],2)+Math.pow(t[1]-n[1],2))}class CI extends jm{fillPolygons(t,n){let a=n.hachureGap;a<0&&(a=4*n.strokeWidth),a=Math.max(a,.1);const s=ac(t,Object.assign({},n,{hachureGap:a})),o=Math.PI/180*n.hachureAngle,u=[],c=.5*a*Math.cos(o),g=.5*a*Math.sin(o);for(const[d,f]of s)td([d,f])&&u.push([[d[0]-c,d[1]+g],[...f]],[[d[0]+c,d[1]-g],[...f]]);return{type:"fillSketch",ops:this.renderLines(u,n)}}}class _I extends jm{fillPolygons(t,n){const a=this._fillPolygons(t,n),s=Object.assign({},n,{hachureAngle:n.hachureAngle+90}),o=this._fillPolygons(t,s);return a.ops=a.ops.concat(o.ops),a}}class wI{constructor(t){this.helper=t}fillPolygons(t,n){const a=ac(t,n=Object.assign({},n,{hachureAngle:0}));return this.dotsOnLines(a,n)}dotsOnLines(t,n){const a=[];let s=n.hachureGap;s<0&&(s=4*n.strokeWidth),s=Math.max(s,.1);let o=n.fillWeight;o<0&&(o=n.strokeWidth/2);const u=s/4;for(const c of t){const g=td(c),d=g/s,f=Math.ceil(d)-1,m=g-f*s,y=(c[0][0]+c[1][0])/2-s/4,v=Math.min(c[0][1],c[1][1]);for(let S=0;S<f;S++){const C=v+m+S*s,T=y-u+2*Math.random()*u,w=C-u+2*Math.random()*u,k=this.helper.ellipse(T,w,o,o,n);a.push(...k.ops)}}return{type:"fillSketch",ops:a}}}class TI{constructor(t){this.helper=t}fillPolygons(t,n){const a=ac(t,n);return{type:"fillSketch",ops:this.dashedLine(a,n)}}dashedLine(t,n){const a=n.dashOffset<0?n.hachureGap<0?4*n.strokeWidth:n.hachureGap:n.dashOffset,s=n.dashGap<0?n.hachureGap<0?4*n.strokeWidth:n.hachureGap:n.dashGap,o=[];return t.forEach(u=>{const c=td(u),g=Math.floor(c/(a+s)),d=(c+s-g*(a+s))/2;let f=u[0],m=u[1];f[0]>m[0]&&(f=u[1],m=u[0]);const y=Math.atan((m[1]-f[1])/(m[0]-f[0]));for(let v=0;v<g;v++){const S=v*(a+s),C=S+a,T=[f[0]+S*Math.cos(y)+d*Math.cos(y),f[1]+S*Math.sin(y)+d*Math.sin(y)],w=[f[0]+C*Math.cos(y)+d*Math.cos(y),f[1]+C*Math.sin(y)+d*Math.sin(y)];o.push(...this.helper.doubleLineOps(T[0],T[1],w[0],w[1],n))}}),o}}class kI{constructor(t){this.helper=t}fillPolygons(t,n){const a=n.hachureGap<0?4*n.strokeWidth:n.hachureGap,s=n.zigzagOffset<0?a:n.zigzagOffset,o=ac(t,n=Object.assign({},n,{hachureGap:a+s}));return{type:"fillSketch",ops:this.zigzagLines(o,s,n)}}zigzagLines(t,n,a){const s=[];return t.forEach(o=>{const u=td(o),c=Math.round(u/(2*n));let g=o[0],d=o[1];g[0]>d[0]&&(g=o[1],d=o[0]);const f=Math.atan((d[1]-g[1])/(d[0]-g[0]));for(let m=0;m<c;m++){const y=2*m*n,v=2*(m+1)*n,S=Math.sqrt(2*Math.pow(n,2)),C=[g[0]+y*Math.cos(f),g[1]+y*Math.sin(f)],T=[g[0]+v*Math.cos(f),g[1]+v*Math.sin(f)],w=[C[0]+S*Math.cos(f+Math.PI/4),C[1]+S*Math.sin(f+Math.PI/4)];s.push(...this.helper.doubleLineOps(C[0],C[1],w[0],w[1],a),...this.helper.doubleLineOps(w[0],w[1],T[0],T[1],a))}}),s}}const vi={};class AI{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const EI=0,Nf=1,ax=2,ku={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function If(e,t){return e.type===t}function Ym(e){const t=[],n=function(u){const c=new Array;for(;u!=="";)if(u.match(/^([ \t\r\n,]+)/))u=u.substr(RegExp.$1.length);else if(u.match(/^([aAcChHlLmMqQsStTvVzZ])/))c[c.length]={type:EI,text:RegExp.$1},u=u.substr(RegExp.$1.length);else{if(!u.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];c[c.length]={type:Nf,text:`${parseFloat(RegExp.$1)}`},u=u.substr(RegExp.$1.length)}return c[c.length]={type:ax,text:""},c}(e);let a="BOD",s=0,o=n[s];for(;!If(o,ax);){let u=0;const c=[];if(a==="BOD"){if(o.text!=="M"&&o.text!=="m")return Ym("M0,0"+e);s++,u=ku[o.text],a=o.text}else If(o,Nf)?u=ku[a]:(s++,u=ku[o.text],a=o.text);if(!(s+u<n.length))throw new Error("Path data ended short");for(let g=s;g<s+u;g++){const d=n[g];if(!If(d,Nf))throw new Error("Param not a number: "+a+","+d.text);c[c.length]=+d.text}if(typeof ku[a]!="number")throw new Error("Bad segment: "+a);{const g={key:a,data:c};t.push(g),s+=u,o=n[s],a==="M"&&(a="L"),a==="m"&&(a="l")}}return t}function U_(e){let t=0,n=0,a=0,s=0;const o=[];for(const{key:u,data:c}of e)switch(u){case"M":o.push({key:"M",data:[...c]}),[t,n]=c,[a,s]=c;break;case"m":t+=c[0],n+=c[1],o.push({key:"M",data:[t,n]}),a=t,s=n;break;case"L":o.push({key:"L",data:[...c]}),[t,n]=c;break;case"l":t+=c[0],n+=c[1],o.push({key:"L",data:[t,n]});break;case"C":o.push({key:"C",data:[...c]}),t=c[4],n=c[5];break;case"c":{const g=c.map((d,f)=>f%2?d+n:d+t);o.push({key:"C",data:g}),t=g[4],n=g[5];break}case"Q":o.push({key:"Q",data:[...c]}),t=c[2],n=c[3];break;case"q":{const g=c.map((d,f)=>f%2?d+n:d+t);o.push({key:"Q",data:g}),t=g[2],n=g[3];break}case"A":o.push({key:"A",data:[...c]}),t=c[5],n=c[6];break;case"a":t+=c[5],n+=c[6],o.push({key:"A",data:[c[0],c[1],c[2],c[3],c[4],t,n]});break;case"H":o.push({key:"H",data:[...c]}),t=c[0];break;case"h":t+=c[0],o.push({key:"H",data:[t]});break;case"V":o.push({key:"V",data:[...c]}),n=c[0];break;case"v":n+=c[0],o.push({key:"V",data:[n]});break;case"S":o.push({key:"S",data:[...c]}),t=c[2],n=c[3];break;case"s":{const g=c.map((d,f)=>f%2?d+n:d+t);o.push({key:"S",data:g}),t=g[2],n=g[3];break}case"T":o.push({key:"T",data:[...c]}),t=c[0],n=c[1];break;case"t":t+=c[0],n+=c[1],o.push({key:"T",data:[t,n]});break;case"Z":case"z":o.push({key:"Z",data:[]}),t=a,n=s}return o}function q_(e){const t=[];let n="",a=0,s=0,o=0,u=0,c=0,g=0;for(const{key:d,data:f}of e){switch(d){case"M":t.push({key:"M",data:[...f]}),[a,s]=f,[o,u]=f;break;case"C":t.push({key:"C",data:[...f]}),a=f[4],s=f[5],c=f[2],g=f[3];break;case"L":t.push({key:"L",data:[...f]}),[a,s]=f;break;case"H":a=f[0],t.push({key:"L",data:[a,s]});break;case"V":s=f[0],t.push({key:"L",data:[a,s]});break;case"S":{let m=0,y=0;n==="C"||n==="S"?(m=a+(a-c),y=s+(s-g)):(m=a,y=s),t.push({key:"C",data:[m,y,...f]}),c=f[0],g=f[1],a=f[2],s=f[3];break}case"T":{const[m,y]=f;let v=0,S=0;n==="Q"||n==="T"?(v=a+(a-c),S=s+(s-g)):(v=a,S=s);const C=a+2*(v-a)/3,T=s+2*(S-s)/3,w=m+2*(v-m)/3,k=y+2*(S-y)/3;t.push({key:"C",data:[C,T,w,k,m,y]}),c=v,g=S,a=m,s=y;break}case"Q":{const[m,y,v,S]=f,C=a+2*(m-a)/3,T=s+2*(y-s)/3,w=v+2*(m-v)/3,k=S+2*(y-S)/3;t.push({key:"C",data:[C,T,w,k,v,S]}),c=m,g=y,a=v,s=S;break}case"A":{const m=Math.abs(f[0]),y=Math.abs(f[1]),v=f[2],S=f[3],C=f[4],T=f[5],w=f[6];m===0||y===0?(t.push({key:"C",data:[a,s,T,w,T,w]}),a=T,s=w):(a!==T||s!==w)&&(H_(a,s,T,w,m,y,v,S,C).forEach(function(k){t.push({key:"C",data:k})}),a=T,s=w);break}case"Z":t.push({key:"Z",data:[]}),a=o,s=u}n=d}return t}function mo(e,t,n){return[e*Math.cos(n)-t*Math.sin(n),e*Math.sin(n)+t*Math.cos(n)]}function H_(e,t,n,a,s,o,u,c,g,d){const f=(m=u,Math.PI*m/180);var m;let y=[],v=0,S=0,C=0,T=0;if(d)[v,S,C,T]=d;else{[e,t]=mo(e,t,-f),[n,a]=mo(n,a,-f);const at=(e-n)/2,W=(t-a)/2;let j=at*at/(s*s)+W*W/(o*o);j>1&&(j=Math.sqrt(j),s*=j,o*=j);const M=s*s,F=o*o,$=M*F-M*W*W-F*at*at,ut=M*W*W+F*at*at,D=(c===g?-1:1)*Math.sqrt(Math.abs($/ut));C=D*s*W/o+(e+n)/2,T=D*-o*at/s+(t+a)/2,v=Math.asin(parseFloat(((t-T)/o).toFixed(9))),S=Math.asin(parseFloat(((a-T)/o).toFixed(9))),e<C&&(v=Math.PI-v),n<C&&(S=Math.PI-S),v<0&&(v=2*Math.PI+v),S<0&&(S=2*Math.PI+S),g&&v>S&&(v-=2*Math.PI),!g&&S>v&&(S-=2*Math.PI)}let w=S-v;if(Math.abs(w)>120*Math.PI/180){const at=S,W=n,j=a;S=g&&S>v?v+120*Math.PI/180*1:v+120*Math.PI/180*-1,y=H_(n=C+s*Math.cos(S),a=T+o*Math.sin(S),W,j,s,o,u,0,g,[S,at,C,T])}w=S-v;const k=Math.cos(v),E=Math.sin(v),O=Math.cos(S),L=Math.sin(S),R=Math.tan(w/4),P=4/3*s*R,J=4/3*o*R,nt=[e,t],rt=[e+P*E,t-J*k],X=[n+P*L,a-J*O],lt=[n,a];if(rt[0]=2*nt[0]-rt[0],rt[1]=2*nt[1]-rt[1],d)return[rt,X,lt].concat(y);{y=[rt,X,lt].concat(y);const at=[];for(let W=0;W<y.length;W+=3){const j=mo(y[W][0],y[W][1],f),M=mo(y[W+1][0],y[W+1][1],f),F=mo(y[W+2][0],y[W+2][1],f);at.push([j[0],j[1],M[0],M[1],F[0],F[1]])}return at}}const RI={randOffset:function(e,t){return Lt(e,t)},randOffsetWithRange:function(e,t,n){return Th(e,t,n)},ellipse:function(e,t,n,a,s){const o=j_(n,a,s);return Lp(e,t,s,o).opset},doubleLineOps:function(e,t,n,a,s){return Ur(e,t,n,a,s,!0)}};function G_(e,t,n,a,s){return{type:"path",ops:Ur(e,t,n,a,s)}}function Hu(e,t,n){const a=(e||[]).length;if(a>2){const s=[];for(let o=0;o<a-1;o++)s.push(...Ur(e[o][0],e[o][1],e[o+1][0],e[o+1][1],n));return t&&s.push(...Ur(e[a-1][0],e[a-1][1],e[0][0],e[0][1],n)),{type:"path",ops:s}}return a===2?G_(e[0][0],e[0][1],e[1][0],e[1][1],n):{type:"path",ops:[]}}function MI(e,t,n,a,s){return function(o,u){return Hu(o,!0,u)}([[e,t],[e+n,t],[e+n,t+a],[e,t+a]],s)}function sx(e,t){if(e.length){const n=typeof e[0][0]=="number"?[e]:e,a=Au(n[0],1*(1+.2*t.roughness),t),s=t.disableMultiStroke?[]:Au(n[0],1.5*(1+.22*t.roughness),cx(t));for(let o=1;o<n.length;o++){const u=n[o];if(u.length){const c=Au(u,1*(1+.2*t.roughness),t),g=t.disableMultiStroke?[]:Au(u,1.5*(1+.22*t.roughness),cx(t));for(const d of c)d.op!=="move"&&a.push(d);for(const d of g)d.op!=="move"&&s.push(d)}}return{type:"path",ops:a.concat(s)}}return{type:"path",ops:[]}}function j_(e,t,n){const a=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(e/2,2)+Math.pow(t/2,2))/2)),s=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*a)),o=2*Math.PI/s;let u=Math.abs(e/2),c=Math.abs(t/2);const g=1-n.curveFitting;return u+=Lt(u*g,n),c+=Lt(c*g,n),{increment:o,rx:u,ry:c}}function Lp(e,t,n,a){const[s,o]=ux(a.increment,e,t,a.rx,a.ry,1,a.increment*Th(.1,Th(.4,1,n),n),n);let u=kh(s,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[c]=ux(a.increment,e,t,a.rx,a.ry,1.5,0,n),g=kh(c,null,n);u=u.concat(g)}return{estimatedPoints:o,opset:{type:"path",ops:u}}}function lx(e,t,n,a,s,o,u,c,g){const d=e,f=t;let m=Math.abs(n/2),y=Math.abs(a/2);m+=Lt(.01*m,g),y+=Lt(.01*y,g);let v=s,S=o;for(;v<0;)v+=2*Math.PI,S+=2*Math.PI;S-v>2*Math.PI&&(v=0,S=2*Math.PI);const C=2*Math.PI/g.curveStepCount,T=Math.min(C/2,(S-v)/2),w=hx(T,d,f,m,y,v,S,1,g);if(!g.disableMultiStroke){const k=hx(T,d,f,m,y,v,S,1.5,g);w.push(...k)}return u&&(c?w.push(...Ur(d,f,d+m*Math.cos(v),f+y*Math.sin(v),g),...Ur(d,f,d+m*Math.cos(S),f+y*Math.sin(S),g)):w.push({op:"lineTo",data:[d,f]},{op:"lineTo",data:[d+m*Math.cos(v),f+y*Math.sin(v)]})),{type:"path",ops:w}}function ox(e,t){const n=q_(U_(Ym(e))),a=[];let s=[0,0],o=[0,0];for(const{key:u,data:c}of n)switch(u){case"M":o=[c[0],c[1]],s=[c[0],c[1]];break;case"L":a.push(...Ur(o[0],o[1],c[0],c[1],t)),o=[c[0],c[1]];break;case"C":{const[g,d,f,m,y,v]=c;a.push(...DI(g,d,f,m,y,v,o,t)),o=[y,v];break}case"Z":a.push(...Ur(o[0],o[1],s[0],s[1],t)),o=[s[0],s[1]]}return{type:"path",ops:a}}function Ff(e,t){const n=[];for(const a of e)if(a.length){const s=t.maxRandomnessOffset||0,o=a.length;if(o>2){n.push({op:"move",data:[a[0][0]+Lt(s,t),a[0][1]+Lt(s,t)]});for(let u=1;u<o;u++)n.push({op:"lineTo",data:[a[u][0]+Lt(s,t),a[u][1]+Lt(s,t)]})}}return{type:"fillPath",ops:n}}function Cs(e,t){return function(n,a){let s=n.fillStyle||"hachure";if(!vi[s])switch(s){case"zigzag":vi[s]||(vi[s]=new CI(a));break;case"cross-hatch":vi[s]||(vi[s]=new _I(a));break;case"dots":vi[s]||(vi[s]=new wI(a));break;case"dashed":vi[s]||(vi[s]=new TI(a));break;case"zigzag-line":vi[s]||(vi[s]=new kI(a));break;default:s="hachure",vi[s]||(vi[s]=new jm(a))}return vi[s]}(t,RI).fillPolygons(e,t)}function cx(e){const t=Object.assign({},e);return t.randomizer=void 0,e.seed&&(t.seed=e.seed+1),t}function Y_(e){return e.randomizer||(e.randomizer=new AI(e.seed||0)),e.randomizer.next()}function Th(e,t,n,a=1){return n.roughness*a*(Y_(n)*(t-e)+e)}function Lt(e,t,n=1){return Th(-e,e,t,n)}function Ur(e,t,n,a,s,o=!1){const u=o?s.disableMultiStrokeFill:s.disableMultiStroke,c=Bp(e,t,n,a,s,!0,!1);if(u)return c;const g=Bp(e,t,n,a,s,!0,!0);return c.concat(g)}function Bp(e,t,n,a,s,o,u){const c=Math.pow(e-n,2)+Math.pow(t-a,2),g=Math.sqrt(c);let d=1;d=g<200?1:g>500?.4:-.0016668*g+1.233334;let f=s.maxRandomnessOffset||0;f*f*100>c&&(f=g/10);const m=f/2,y=.2+.2*Y_(s);let v=s.bowing*s.maxRandomnessOffset*(a-t)/200,S=s.bowing*s.maxRandomnessOffset*(e-n)/200;v=Lt(v,s,d),S=Lt(S,s,d);const C=[],T=()=>Lt(m,s,d),w=()=>Lt(f,s,d),k=s.preserveVertices;return u?C.push({op:"move",data:[e+(k?0:T()),t+(k?0:T())]}):C.push({op:"move",data:[e+(k?0:Lt(f,s,d)),t+(k?0:Lt(f,s,d))]}),u?C.push({op:"bcurveTo",data:[v+e+(n-e)*y+T(),S+t+(a-t)*y+T(),v+e+2*(n-e)*y+T(),S+t+2*(a-t)*y+T(),n+(k?0:T()),a+(k?0:T())]}):C.push({op:"bcurveTo",data:[v+e+(n-e)*y+w(),S+t+(a-t)*y+w(),v+e+2*(n-e)*y+w(),S+t+2*(a-t)*y+w(),n+(k?0:w()),a+(k?0:w())]}),C}function Au(e,t,n){if(!e.length)return[];const a=[];a.push([e[0][0]+Lt(t,n),e[0][1]+Lt(t,n)]),a.push([e[0][0]+Lt(t,n),e[0][1]+Lt(t,n)]);for(let s=1;s<e.length;s++)a.push([e[s][0]+Lt(t,n),e[s][1]+Lt(t,n)]),s===e.length-1&&a.push([e[s][0]+Lt(t,n),e[s][1]+Lt(t,n)]);return kh(a,null,n)}function kh(e,t,n){const a=e.length,s=[];if(a>3){const o=[],u=1-n.curveTightness;s.push({op:"move",data:[e[1][0],e[1][1]]});for(let c=1;c+2<a;c++){const g=e[c];o[0]=[g[0],g[1]],o[1]=[g[0]+(u*e[c+1][0]-u*e[c-1][0])/6,g[1]+(u*e[c+1][1]-u*e[c-1][1])/6],o[2]=[e[c+1][0]+(u*e[c][0]-u*e[c+2][0])/6,e[c+1][1]+(u*e[c][1]-u*e[c+2][1])/6],o[3]=[e[c+1][0],e[c+1][1]],s.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]})}}else a===3?(s.push({op:"move",data:[e[1][0],e[1][1]]}),s.push({op:"bcurveTo",data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):a===2&&s.push(...Bp(e[0][0],e[0][1],e[1][0],e[1][1],n,!0,!0));return s}function ux(e,t,n,a,s,o,u,c){const g=[],d=[];if(c.roughness===0){e/=4,d.push([t+a*Math.cos(-e),n+s*Math.sin(-e)]);for(let f=0;f<=2*Math.PI;f+=e){const m=[t+a*Math.cos(f),n+s*Math.sin(f)];g.push(m),d.push(m)}d.push([t+a*Math.cos(0),n+s*Math.sin(0)]),d.push([t+a*Math.cos(e),n+s*Math.sin(e)])}else{const f=Lt(.5,c)-Math.PI/2;d.push([Lt(o,c)+t+.9*a*Math.cos(f-e),Lt(o,c)+n+.9*s*Math.sin(f-e)]);const m=2*Math.PI+f-.01;for(let y=f;y<m;y+=e){const v=[Lt(o,c)+t+a*Math.cos(y),Lt(o,c)+n+s*Math.sin(y)];g.push(v),d.push(v)}d.push([Lt(o,c)+t+a*Math.cos(f+2*Math.PI+.5*u),Lt(o,c)+n+s*Math.sin(f+2*Math.PI+.5*u)]),d.push([Lt(o,c)+t+.98*a*Math.cos(f+u),Lt(o,c)+n+.98*s*Math.sin(f+u)]),d.push([Lt(o,c)+t+.9*a*Math.cos(f+.5*u),Lt(o,c)+n+.9*s*Math.sin(f+.5*u)])}return[d,g]}function hx(e,t,n,a,s,o,u,c,g){const d=o+Lt(.1,g),f=[];f.push([Lt(c,g)+t+.9*a*Math.cos(d-e),Lt(c,g)+n+.9*s*Math.sin(d-e)]);for(let m=d;m<=u;m+=e)f.push([Lt(c,g)+t+a*Math.cos(m),Lt(c,g)+n+s*Math.sin(m)]);return f.push([t+a*Math.cos(u),n+s*Math.sin(u)]),f.push([t+a*Math.cos(u),n+s*Math.sin(u)]),kh(f,null,g)}function DI(e,t,n,a,s,o,u,c){const g=[],d=[c.maxRandomnessOffset||1,(c.maxRandomnessOffset||1)+.3];let f=[0,0];const m=c.disableMultiStroke?1:2,y=c.preserveVertices;for(let v=0;v<m;v++)v===0?g.push({op:"move",data:[u[0],u[1]]}):g.push({op:"move",data:[u[0]+(y?0:Lt(d[0],c)),u[1]+(y?0:Lt(d[0],c))]}),f=y?[s,o]:[s+Lt(d[v],c),o+Lt(d[v],c)],g.push({op:"bcurveTo",data:[e+Lt(d[v],c),t+Lt(d[v],c),n+Lt(d[v],c),a+Lt(d[v],c),f[0],f[1]]});return g}function yo(e){return[...e]}function dx(e,t=0){const n=e.length;if(n<3)throw new Error("A curve must have at least three points.");const a=[];if(n===3)a.push(yo(e[0]),yo(e[1]),yo(e[2]),yo(e[2]));else{const s=[];s.push(e[0],e[0]);for(let c=1;c<e.length;c++)s.push(e[c]),c===e.length-1&&s.push(e[c]);const o=[],u=1-t;a.push(yo(s[0]));for(let c=1;c+2<s.length;c++){const g=s[c];o[0]=[g[0],g[1]],o[1]=[g[0]+(u*s[c+1][0]-u*s[c-1][0])/6,g[1]+(u*s[c+1][1]-u*s[c-1][1])/6],o[2]=[s[c+1][0]+(u*s[c][0]-u*s[c+2][0])/6,s[c+1][1]+(u*s[c][1]-u*s[c+2][1])/6],o[3]=[s[c+1][0],s[c+1][1]],a.push(o[1],o[2],o[3])}}return a}function Gu(e,t){return Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)}function LI(e,t,n){const a=Gu(t,n);if(a===0)return Gu(e,t);let s=((e[0]-t[0])*(n[0]-t[0])+(e[1]-t[1])*(n[1]-t[1]))/a;return s=Math.max(0,Math.min(1,s)),Gu(e,ma(t,n,s))}function ma(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n]}function Op(e,t,n,a){const s=a||[];if(function(c,g){const d=c[g+0],f=c[g+1],m=c[g+2],y=c[g+3];let v=3*f[0]-2*d[0]-y[0];v*=v;let S=3*f[1]-2*d[1]-y[1];S*=S;let C=3*m[0]-2*y[0]-d[0];C*=C;let T=3*m[1]-2*y[1]-d[1];return T*=T,v<C&&(v=C),S<T&&(S=T),v+S}(e,t)<n){const c=e[t+0];s.length?(o=s[s.length-1],u=c,Math.sqrt(Gu(o,u))>1&&s.push(c)):s.push(c),s.push(e[t+3])}else{const g=e[t+0],d=e[t+1],f=e[t+2],m=e[t+3],y=ma(g,d,.5),v=ma(d,f,.5),S=ma(f,m,.5),C=ma(y,v,.5),T=ma(v,S,.5),w=ma(C,T,.5);Op([g,y,C,w],0,n,s),Op([w,T,S,m],0,n,s)}var o,u;return s}function BI(e,t){return Ah(e,0,e.length,t)}function Ah(e,t,n,a,s){const o=s||[],u=e[t],c=e[n-1];let g=0,d=1;for(let f=t+1;f<n-1;++f){const m=LI(e[f],u,c);m>g&&(g=m,d=f)}return Math.sqrt(g)>a?(Ah(e,t,d+1,a,o),Ah(e,d,n,a,o)):(o.length||o.push(u),o.push(c)),o}function $f(e,t=.15,n){const a=[],s=(e.length-1)/3;for(let o=0;o<s;o++)Op(e,3*o,t,a);return n&&n>0?Ah(a,0,a.length,n):a}const Li="none";class Eh{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1,fillShapeRoughnessGain:.8},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,n,a){return{shape:t,sets:n||[],options:a||this.defaultOptions}}line(t,n,a,s,o){const u=this._o(o);return this._d("line",[G_(t,n,a,s,u)],u)}rectangle(t,n,a,s,o){const u=this._o(o),c=[],g=MI(t,n,a,s,u);if(u.fill){const d=[[t,n],[t+a,n],[t+a,n+s],[t,n+s]];u.fillStyle==="solid"?c.push(Ff([d],u)):c.push(Cs([d],u))}return u.stroke!==Li&&c.push(g),this._d("rectangle",c,u)}ellipse(t,n,a,s,o){const u=this._o(o),c=[],g=j_(a,s,u),d=Lp(t,n,u,g);if(u.fill)if(u.fillStyle==="solid"){const f=Lp(t,n,u,g).opset;f.type="fillPath",c.push(f)}else c.push(Cs([d.estimatedPoints],u));return u.stroke!==Li&&c.push(d.opset),this._d("ellipse",c,u)}circle(t,n,a,s){const o=this.ellipse(t,n,a,a,s);return o.shape="circle",o}linearPath(t,n){const a=this._o(n);return this._d("linearPath",[Hu(t,!1,a)],a)}arc(t,n,a,s,o,u,c=!1,g){const d=this._o(g),f=[],m=lx(t,n,a,s,o,u,c,!0,d);if(c&&d.fill)if(d.fillStyle==="solid"){const y=Object.assign({},d);y.disableMultiStroke=!0;const v=lx(t,n,a,s,o,u,!0,!1,y);v.type="fillPath",f.push(v)}else f.push(function(y,v,S,C,T,w,k){const E=y,O=v;let L=Math.abs(S/2),R=Math.abs(C/2);L+=Lt(.01*L,k),R+=Lt(.01*R,k);let P=T,J=w;for(;P<0;)P+=2*Math.PI,J+=2*Math.PI;J-P>2*Math.PI&&(P=0,J=2*Math.PI);const nt=(J-P)/k.curveStepCount,rt=[];for(let X=P;X<=J;X+=nt)rt.push([E+L*Math.cos(X),O+R*Math.sin(X)]);return rt.push([E+L*Math.cos(J),O+R*Math.sin(J)]),rt.push([E,O]),Cs([rt],k)}(t,n,a,s,o,u,d));return d.stroke!==Li&&f.push(m),this._d("arc",f,d)}curve(t,n){const a=this._o(n),s=[],o=sx(t,a);if(a.fill&&a.fill!==Li)if(a.fillStyle==="solid"){const u=sx(t,Object.assign(Object.assign({},a),{disableMultiStroke:!0,roughness:a.roughness?a.roughness+a.fillShapeRoughnessGain:0}));s.push({type:"fillPath",ops:this._mergedShape(u.ops)})}else{const u=[],c=t;if(c.length){const g=typeof c[0][0]=="number"?[c]:c;for(const d of g)d.length<3?u.push(...d):d.length===3?u.push(...$f(dx([d[0],d[0],d[1],d[2]]),10,(1+a.roughness)/2)):u.push(...$f(dx(d),10,(1+a.roughness)/2))}u.length&&s.push(Cs([u],a))}return a.stroke!==Li&&s.push(o),this._d("curve",s,a)}polygon(t,n){const a=this._o(n),s=[],o=Hu(t,!0,a);return a.fill&&(a.fillStyle==="solid"?s.push(Ff([t],a)):s.push(Cs([t],a))),a.stroke!==Li&&s.push(o),this._d("polygon",s,a)}path(t,n){const a=this._o(n),s=[];if(!t)return this._d("path",s,a);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const o=a.fill&&a.fill!=="transparent"&&a.fill!==Li,u=a.stroke!==Li,c=!!(a.simplification&&a.simplification<1),g=function(f,m,y){const v=q_(U_(Ym(f))),S=[];let C=[],T=[0,0],w=[];const k=()=>{w.length>=4&&C.push(...$f(w,m)),w=[]},E=()=>{k(),C.length&&(S.push(C),C=[])};for(const{key:L,data:R}of v)switch(L){case"M":E(),T=[R[0],R[1]],C.push(T);break;case"L":k(),C.push([R[0],R[1]]);break;case"C":if(!w.length){const P=C.length?C[C.length-1]:T;w.push([P[0],P[1]])}w.push([R[0],R[1]]),w.push([R[2],R[3]]),w.push([R[4],R[5]]);break;case"Z":k(),C.push([T[0],T[1]])}if(E(),!y)return S;const O=[];for(const L of S){const R=BI(L,y);R.length&&O.push(R)}return O}(t,1,c?4-4*(a.simplification||1):(1+a.roughness)/2),d=ox(t,a);if(o)if(a.fillStyle==="solid")if(g.length===1){const f=ox(t,Object.assign(Object.assign({},a),{disableMultiStroke:!0,roughness:a.roughness?a.roughness+a.fillShapeRoughnessGain:0}));s.push({type:"fillPath",ops:this._mergedShape(f.ops)})}else s.push(Ff(g,a));else s.push(Cs(g,a));return u&&(c?g.forEach(f=>{s.push(Hu(f,!1,a))}):s.push(d)),this._d("path",s,a)}opsToPath(t,n){let a="";for(const s of t.ops){const o=typeof n=="number"&&n>=0?s.data.map(u=>+u.toFixed(n)):s.data;switch(s.op){case"move":a+=`M${o[0]} ${o[1]} `;break;case"bcurveTo":a+=`C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;break;case"lineTo":a+=`L${o[0]} ${o[1]} `}}return a.trim()}toPaths(t){const n=t.sets||[],a=t.options||this.defaultOptions,s=[];for(const o of n){let u=null;switch(o.type){case"path":u={d:this.opsToPath(o),stroke:a.stroke,strokeWidth:a.strokeWidth,fill:Li};break;case"fillPath":u={d:this.opsToPath(o),stroke:Li,strokeWidth:0,fill:a.fill||Li};break;case"fillSketch":u=this.fillSketch(o,a)}u&&s.push(u)}return s}fillSketch(t,n){let a=n.fillWeight;return a<0&&(a=n.strokeWidth/2),{d:this.opsToPath(t),stroke:n.fill||Li,strokeWidth:a,fill:Li}}_mergedShape(t){return t.filter((n,a)=>a===0||n.op!=="move")}}class OI{constructor(t,n){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new Eh(n)}draw(t){const n=t.sets||[],a=t.options||this.getDefaultOptions(),s=this.ctx,o=t.options.fixedDecimalPlaceDigits;for(const u of n)switch(u.type){case"path":s.save(),s.strokeStyle=a.stroke==="none"?"transparent":a.stroke,s.lineWidth=a.strokeWidth,a.strokeLineDash&&s.setLineDash(a.strokeLineDash),a.strokeLineDashOffset&&(s.lineDashOffset=a.strokeLineDashOffset),this._drawToContext(s,u,o),s.restore();break;case"fillPath":{s.save(),s.fillStyle=a.fill||"";const c=t.shape==="curve"||t.shape==="polygon"||t.shape==="path"?"evenodd":"nonzero";this._drawToContext(s,u,o,c),s.restore();break}case"fillSketch":this.fillSketch(s,u,a)}}fillSketch(t,n,a){let s=a.fillWeight;s<0&&(s=a.strokeWidth/2),t.save(),a.fillLineDash&&t.setLineDash(a.fillLineDash),a.fillLineDashOffset&&(t.lineDashOffset=a.fillLineDashOffset),t.strokeStyle=a.fill||"",t.lineWidth=s,this._drawToContext(t,n,a.fixedDecimalPlaceDigits),t.restore()}_drawToContext(t,n,a,s="nonzero"){t.beginPath();for(const o of n.ops){const u=typeof a=="number"&&a>=0?o.data.map(c=>+c.toFixed(a)):o.data;switch(o.op){case"move":t.moveTo(u[0],u[1]);break;case"bcurveTo":t.bezierCurveTo(u[0],u[1],u[2],u[3],u[4],u[5]);break;case"lineTo":t.lineTo(u[0],u[1])}}n.type==="fillPath"?t.fill(s):t.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,n,a,s,o){const u=this.gen.line(t,n,a,s,o);return this.draw(u),u}rectangle(t,n,a,s,o){const u=this.gen.rectangle(t,n,a,s,o);return this.draw(u),u}ellipse(t,n,a,s,o){const u=this.gen.ellipse(t,n,a,s,o);return this.draw(u),u}circle(t,n,a,s){const o=this.gen.circle(t,n,a,s);return this.draw(o),o}linearPath(t,n){const a=this.gen.linearPath(t,n);return this.draw(a),a}polygon(t,n){const a=this.gen.polygon(t,n);return this.draw(a),a}arc(t,n,a,s,o,u,c=!1,g){const d=this.gen.arc(t,n,a,s,o,u,c,g);return this.draw(d),d}curve(t,n){const a=this.gen.curve(t,n);return this.draw(a),a}path(t,n){const a=this.gen.path(t,n);return this.draw(a),a}}const Eu="http://www.w3.org/2000/svg";class PI{constructor(t,n){this.svg=t,this.gen=new Eh(n)}draw(t){const n=t.sets||[],a=t.options||this.getDefaultOptions(),s=this.svg.ownerDocument||window.document,o=s.createElementNS(Eu,"g"),u=t.options.fixedDecimalPlaceDigits;for(const c of n){let g=null;switch(c.type){case"path":g=s.createElementNS(Eu,"path"),g.setAttribute("d",this.opsToPath(c,u)),g.setAttribute("stroke",a.stroke),g.setAttribute("stroke-width",a.strokeWidth+""),g.setAttribute("fill","none"),a.strokeLineDash&&g.setAttribute("stroke-dasharray",a.strokeLineDash.join(" ").trim()),a.strokeLineDashOffset&&g.setAttribute("stroke-dashoffset",`${a.strokeLineDashOffset}`);break;case"fillPath":g=s.createElementNS(Eu,"path"),g.setAttribute("d",this.opsToPath(c,u)),g.setAttribute("stroke","none"),g.setAttribute("stroke-width","0"),g.setAttribute("fill",a.fill||""),t.shape!=="curve"&&t.shape!=="polygon"||g.setAttribute("fill-rule","evenodd");break;case"fillSketch":g=this.fillSketch(s,c,a)}g&&o.appendChild(g)}return o}fillSketch(t,n,a){let s=a.fillWeight;s<0&&(s=a.strokeWidth/2);const o=t.createElementNS(Eu,"path");return o.setAttribute("d",this.opsToPath(n,a.fixedDecimalPlaceDigits)),o.setAttribute("stroke",a.fill||""),o.setAttribute("stroke-width",s+""),o.setAttribute("fill","none"),a.fillLineDash&&o.setAttribute("stroke-dasharray",a.fillLineDash.join(" ").trim()),a.fillLineDashOffset&&o.setAttribute("stroke-dashoffset",`${a.fillLineDashOffset}`),o}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t,n){return this.gen.opsToPath(t,n)}line(t,n,a,s,o){const u=this.gen.line(t,n,a,s,o);return this.draw(u)}rectangle(t,n,a,s,o){const u=this.gen.rectangle(t,n,a,s,o);return this.draw(u)}ellipse(t,n,a,s,o){const u=this.gen.ellipse(t,n,a,s,o);return this.draw(u)}circle(t,n,a,s){const o=this.gen.circle(t,n,a,s);return this.draw(o)}linearPath(t,n){const a=this.gen.linearPath(t,n);return this.draw(a)}polygon(t,n){const a=this.gen.polygon(t,n);return this.draw(a)}arc(t,n,a,s,o,u,c=!1,g){const d=this.gen.arc(t,n,a,s,o,u,c,g);return this.draw(d)}curve(t,n){const a=this.gen.curve(t,n);return this.draw(a)}path(t,n){const a=this.gen.path(t,n);return this.draw(a)}}var vt={canvas:(e,t)=>new OI(e,t),svg:(e,t)=>new PI(e,t),generator:e=>new Eh(e),newSeed:()=>Eh.newSeed()},Rt=x(async(e,t,n)=>{var m,y;let a;const s=t.useHtmlLabels||Oe((m=Vt())==null?void 0:m.htmlLabels);n?a=n:a="node default";const o=e.insert("g").attr("class",a).attr("id",t.domId||t.id),u=o.insert("g").attr("class","label").attr("style",ei(t.labelStyle));let c;t.label===void 0?c="":c=typeof t.label=="string"?t.label:t.label[0];const g=await Gr(u,Vi(Na(c),Vt()),{useHtmlLabels:s,width:t.width||((y=Vt().flowchart)==null?void 0:y.wrappingWidth),cssClasses:"markdown-node-label",style:t.labelStyle,addSvgBackground:!!t.icon||!!t.img});let d=g.getBBox();const f=((t==null?void 0:t.padding)??0)/2;if(s){const v=g.children[0],S=jt(g),C=v.getElementsByTagName("img");if(C){const T=c.replace(/<img[^>]*>/g,"").trim()==="";await Promise.all([...C].map(w=>new Promise(k=>{function E(){if(w.style.display="flex",w.style.flexDirection="column",T){const O=Vt().fontSize?Vt().fontSize:window.getComputedStyle(document.body).fontSize,L=5,[R=a2.fontSize]=Xh(O),P=R*L+"px";w.style.minWidth=P,w.style.maxWidth=P}else w.style.width="100%";k(w)}x(E,"setupImage"),setTimeout(()=>{w.complete&&E()}),w.addEventListener("error",E),w.addEventListener("load",E)})))}d=v.getBoundingClientRect(),S.attr("width",d.width),S.attr("height",d.height)}return s?u.attr("transform","translate("+-d.width/2+", "+-d.height/2+")"):u.attr("transform","translate(0, "+-d.height/2+")"),t.centerLabel&&u.attr("transform","translate("+-d.width/2+", "+-d.height/2+")"),u.insert("rect",":first-child"),{shapeSvg:o,bbox:d,halfPadding:f,label:u}},"labelHelper"),zf=x(async(e,t,n)=>{var g,d,f,m,y,v;const a=n.useHtmlLabels||Oe((d=(g=Vt())==null?void 0:g.flowchart)==null?void 0:d.htmlLabels),s=e.insert("g").attr("class","label").attr("style",n.labelStyle||""),o=await Gr(s,Vi(Na(t),Vt()),{useHtmlLabels:a,width:n.width||((m=(f=Vt())==null?void 0:f.flowchart)==null?void 0:m.wrappingWidth),style:n.labelStyle,addSvgBackground:!!n.icon||!!n.img});let u=o.getBBox();const c=n.padding/2;if(Oe((v=(y=Vt())==null?void 0:y.flowchart)==null?void 0:v.htmlLabels)){const S=o.children[0],C=jt(o);u=S.getBoundingClientRect(),C.attr("width",u.width),C.attr("height",u.height)}return a?s.attr("transform","translate("+-u.width/2+", "+-u.height/2+")"):s.attr("transform","translate(0, "+-u.height/2+")"),n.centerLabel&&s.attr("transform","translate("+-u.width/2+", "+-u.height/2+")"),s.insert("rect",":first-child"),{shapeSvg:e,bbox:u,halfPadding:c,label:s}},"insertLabel"),xt=x((e,t)=>{const n=t.node().getBBox();e.width=n.width,e.height=n.height},"updateNodeBounds"),At=x((e,t)=>(e.look==="handDrawn"?"rough-node":"node")+" "+e.cssClasses+" "+(t||""),"getNodeClasses");function qt(e){const t=e.map((n,a)=>`${a===0?"M":"L"}${n.x},${n.y}`);return t.push("Z"),t.join(" ")}x(qt,"createPathFromPoints");function qr(e,t,n,a,s,o){const u=[],g=n-e,d=a-t,f=g/o,m=2*Math.PI/f,y=t+d/2;for(let v=0;v<=50;v++){const S=v/50,C=e+S*g,T=y+s*Math.sin(m*(C-e));u.push({x:C,y:T})}return u}x(qr,"generateFullSineWavePoints");function Go(e,t,n,a,s,o){const u=[],c=s*Math.PI/180,f=(o*Math.PI/180-c)/(a-1);for(let m=0;m<a;m++){const y=c+m*f,v=e+n*Math.cos(y),S=t+n*Math.sin(y);u.push({x:-v,y:-S})}return u}x(Go,"generateCirclePoints");var NI=x((e,t)=>{var n=e.x,a=e.y,s=t.x-n,o=t.y-a,u=e.width/2,c=e.height/2,g,d;return Math.abs(o)*u>Math.abs(s)*c?(o<0&&(c=-c),g=o===0?0:c*s/o,d=c):(s<0&&(u=-u),g=u,d=s===0?0:u*o/s),{x:n+g,y:a+d}},"intersectRect"),Zs=NI;function W_(e,t){t&&e.attr("style",t)}x(W_,"applyStyle");async function V_(e){const t=jt(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),n=t.append("xhtml:div"),a=Vt();let s=e.label;e.label&&$s(e.label)&&(s=await Jp(e.label.replace(Vs.lineBreakRegex,`
`),a));const u='<span class="'+(e.isNode?"nodeLabel":"edgeLabel")+'" '+(e.labelStyle?'style="'+e.labelStyle+'"':"")+">"+s+"</span>";return n.html(Vi(u,a)),W_(n,e.labelStyle),n.style("display","inline-block"),n.style("padding-right","1px"),n.style("white-space","nowrap"),n.attr("xmlns","http://www.w3.org/1999/xhtml"),t.node()}x(V_,"addHtmlLabel");var II=x(async(e,t,n,a)=>{let s=e||"";if(typeof s=="object"&&(s=s[0]),Oe(Vt().flowchart.htmlLabels)){s=s.replace(/\\n|\n/g,"<br />"),st.info("vertexText"+s);const o={isNode:a,label:Na(s).replace(/fa[blrs]?:fa-[\w-]+/g,c=>`<i class='${c.replace(":"," ")}'></i>`),labelStyle:t&&t.replace("fill:","color:")};return await V_(o)}else{const o=document.createElementNS("http://www.w3.org/2000/svg","text");o.setAttribute("style",t.replace("color:","fill:"));let u=[];typeof s=="string"?u=s.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(s)?u=s:u=[];for(const c of u){const g=document.createElementNS("http://www.w3.org/2000/svg","tspan");g.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),g.setAttribute("dy","1em"),g.setAttribute("x","0"),n?g.setAttribute("class","title-row"):g.setAttribute("class","row"),g.textContent=c.trim(),o.appendChild(g)}return o}},"createLabel"),Ca=II,jr=x((e,t,n,a,s)=>["M",e+s,t,"H",e+n-s,"A",s,s,0,0,1,e+n,t+s,"V",t+a-s,"A",s,s,0,0,1,e+n-s,t+a,"H",e+s,"A",s,s,0,0,1,e,t+a-s,"V",t+s,"A",s,s,0,0,1,e+s,t,"Z"].join(" "),"createRoundedRectPathD"),X_=x(async(e,t)=>{st.info("Creating subgraph rect for ",t.id,t);const n=Vt(),{themeVariables:a,handDrawnSeed:s}=n,{clusterBkg:o,clusterBorder:u}=a,{labelStyles:c,nodeStyles:g,borderStyles:d,backgroundStyles:f}=Ct(t),m=e.insert("g").attr("class","cluster "+t.cssClasses).attr("id",t.id).attr("data-look",t.look),y=Oe(n.flowchart.htmlLabels),v=m.insert("g").attr("class","cluster-label "),S=await Gr(v,t.label,{style:t.labelStyle,useHtmlLabels:y,isNode:!0});let C=S.getBBox();if(Oe(n.flowchart.htmlLabels)){const P=S.children[0],J=jt(S);C=P.getBoundingClientRect(),J.attr("width",C.width),J.attr("height",C.height)}const T=t.width<=C.width+t.padding?C.width+t.padding:t.width;t.width<=C.width+t.padding?t.diff=(T-t.width)/2-t.padding:t.diff=-t.padding;const w=t.height,k=t.x-T/2,E=t.y-w/2;st.trace("Data ",t,JSON.stringify(t));let O;if(t.look==="handDrawn"){const P=vt.svg(m),J=St(t,{roughness:.7,fill:o,stroke:u,fillWeight:3,seed:s}),nt=P.path(jr(k,E,T,w,0),J);O=m.insert(()=>(st.debug("Rough node insert CXC",nt),nt),":first-child"),O.select("path:nth-child(2)").attr("style",d.join(";")),O.select("path").attr("style",f.join(";").replace("fill","stroke"))}else O=m.insert("rect",":first-child"),O.attr("style",g).attr("rx",t.rx).attr("ry",t.ry).attr("x",k).attr("y",E).attr("width",T).attr("height",w);const{subGraphTitleTopMargin:L}=wm(n);if(v.attr("transform",`translate(${t.x-C.width/2}, ${t.y-t.height/2+L})`),c){const P=v.select("span");P&&P.attr("style",c)}const R=O.node().getBBox();return t.offsetX=0,t.width=R.width,t.height=R.height,t.offsetY=C.height-t.padding/2,t.intersect=function(P){return Zs(t,P)},{cluster:m,labelBBox:C}},"rect"),FI=x((e,t)=>{const n=e.insert("g").attr("class","note-cluster").attr("id",t.id),a=n.insert("rect",":first-child"),s=0*t.padding,o=s/2;a.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-o).attr("y",t.y-t.height/2-o).attr("width",t.width+s).attr("height",t.height+s).attr("fill","none");const u=a.node().getBBox();return t.width=u.width,t.height=u.height,t.intersect=function(c){return Zs(t,c)},{cluster:n,labelBBox:{width:0,height:0}}},"noteGroup"),$I=x(async(e,t)=>{const n=Vt(),{themeVariables:a,handDrawnSeed:s}=n,{altBackground:o,compositeBackground:u,compositeTitleBackground:c,nodeBorder:g}=a,d=e.insert("g").attr("class",t.cssClasses).attr("id",t.id).attr("data-id",t.id).attr("data-look",t.look),f=d.insert("g",":first-child"),m=d.insert("g").attr("class","cluster-label");let y=d.append("rect");const v=m.node().appendChild(await Ca(t.label,t.labelStyle,void 0,!0));let S=v.getBBox();if(Oe(n.flowchart.htmlLabels)){const nt=v.children[0],rt=jt(v);S=nt.getBoundingClientRect(),rt.attr("width",S.width),rt.attr("height",S.height)}const C=0*t.padding,T=C/2,w=(t.width<=S.width+t.padding?S.width+t.padding:t.width)+C;t.width<=S.width+t.padding?t.diff=(w-t.width)/2-t.padding:t.diff=-t.padding;const k=t.height+C,E=t.height+C-S.height-6,O=t.x-w/2,L=t.y-k/2;t.width=w;const R=t.y-t.height/2-T+S.height+2;let P;if(t.look==="handDrawn"){const nt=t.cssClasses.includes("statediagram-cluster-alt"),rt=vt.svg(d),X=t.rx||t.ry?rt.path(jr(O,L,w,k,10),{roughness:.7,fill:c,fillStyle:"solid",stroke:g,seed:s}):rt.rectangle(O,L,w,k,{seed:s});P=d.insert(()=>X,":first-child");const lt=rt.rectangle(O,R,w,E,{fill:nt?o:u,fillStyle:nt?"hachure":"solid",stroke:g,seed:s});P=d.insert(()=>X,":first-child"),y=d.insert(()=>lt)}else P=f.insert("rect",":first-child"),P.attr("class","outer").attr("x",O).attr("y",L).attr("width",w).attr("height",k).attr("data-look",t.look),y.attr("class","inner").attr("x",O).attr("y",R).attr("width",w).attr("height",E);m.attr("transform",`translate(${t.x-S.width/2}, ${L+1-(Oe(n.flowchart.htmlLabels)?0:3)})`);const J=P.node().getBBox();return t.height=J.height,t.offsetX=0,t.offsetY=S.height-t.padding/2,t.labelBBox=S,t.intersect=function(nt){return Zs(t,nt)},{cluster:d,labelBBox:S}},"roundedWithTitle"),zI=x(async(e,t)=>{st.info("Creating subgraph rect for ",t.id,t);const n=Vt(),{themeVariables:a,handDrawnSeed:s}=n,{clusterBkg:o,clusterBorder:u}=a,{labelStyles:c,nodeStyles:g,borderStyles:d,backgroundStyles:f}=Ct(t),m=e.insert("g").attr("class","cluster "+t.cssClasses).attr("id",t.id).attr("data-look",t.look),y=Oe(n.flowchart.htmlLabels),v=m.insert("g").attr("class","cluster-label "),S=await Gr(v,t.label,{style:t.labelStyle,useHtmlLabels:y,isNode:!0,width:t.width});let C=S.getBBox();if(Oe(n.flowchart.htmlLabels)){const P=S.children[0],J=jt(S);C=P.getBoundingClientRect(),J.attr("width",C.width),J.attr("height",C.height)}const T=t.width<=C.width+t.padding?C.width+t.padding:t.width;t.width<=C.width+t.padding?t.diff=(T-t.width)/2-t.padding:t.diff=-t.padding;const w=t.height,k=t.x-T/2,E=t.y-w/2;st.trace("Data ",t,JSON.stringify(t));let O;if(t.look==="handDrawn"){const P=vt.svg(m),J=St(t,{roughness:.7,fill:o,stroke:u,fillWeight:4,seed:s}),nt=P.path(jr(k,E,T,w,t.rx),J);O=m.insert(()=>(st.debug("Rough node insert CXC",nt),nt),":first-child"),O.select("path:nth-child(2)").attr("style",d.join(";")),O.select("path").attr("style",f.join(";").replace("fill","stroke"))}else O=m.insert("rect",":first-child"),O.attr("style",g).attr("rx",t.rx).attr("ry",t.ry).attr("x",k).attr("y",E).attr("width",T).attr("height",w);const{subGraphTitleTopMargin:L}=wm(n);if(v.attr("transform",`translate(${t.x-C.width/2}, ${t.y-t.height/2+L})`),c){const P=v.select("span");P&&P.attr("style",c)}const R=O.node().getBBox();return t.offsetX=0,t.width=R.width,t.height=R.height,t.offsetY=C.height-t.padding/2,t.intersect=function(P){return Zs(t,P)},{cluster:m,labelBBox:C}},"kanbanSection"),UI=x((e,t)=>{const n=Vt(),{themeVariables:a,handDrawnSeed:s}=n,{nodeBorder:o}=a,u=e.insert("g").attr("class",t.cssClasses).attr("id",t.id).attr("data-look",t.look),c=u.insert("g",":first-child"),g=0*t.padding,d=t.width+g;t.diff=-t.padding;const f=t.height+g,m=t.x-d/2,y=t.y-f/2;t.width=d;let v;if(t.look==="handDrawn"){const T=vt.svg(u).rectangle(m,y,d,f,{fill:"lightgrey",roughness:.5,strokeLineDash:[5],stroke:o,seed:s});v=u.insert(()=>T,":first-child")}else v=c.insert("rect",":first-child"),v.attr("class","divider").attr("x",m).attr("y",y).attr("width",d).attr("height",f).attr("data-look",t.look);const S=v.node().getBBox();return t.height=S.height,t.offsetX=0,t.offsetY=0,t.intersect=function(C){return Zs(t,C)},{cluster:u,labelBBox:{}}},"divider"),qI=X_,HI={rect:X_,squareRect:qI,roundedWithTitle:$I,noteGroup:FI,divider:UI,kanbanSection:zI},Q_=new Map,GI=x(async(e,t)=>{const n=t.shape||"rect",a=await HI[n](e,t);return Q_.set(t.id,a),a},"insertCluster"),mU=x(()=>{Q_=new Map},"clear");function K_(e,t){return e.intersect(t)}x(K_,"intersectNode");var jI=K_;function Z_(e,t,n,a){var s=e.x,o=e.y,u=s-a.x,c=o-a.y,g=Math.sqrt(t*t*c*c+n*n*u*u),d=Math.abs(t*n*u/g);a.x<s&&(d=-d);var f=Math.abs(t*n*c/g);return a.y<o&&(f=-f),{x:s+d,y:o+f}}x(Z_,"intersectEllipse");var J_=Z_;function tw(e,t,n){return J_(e,t,t,n)}x(tw,"intersectCircle");var YI=tw;function ew(e,t,n,a){{const s=t.y-e.y,o=e.x-t.x,u=t.x*e.y-e.x*t.y,c=s*n.x+o*n.y+u,g=s*a.x+o*a.y+u,d=1e-6;if(c!==0&&g!==0&&Pp(c,g))return;const f=a.y-n.y,m=n.x-a.x,y=a.x*n.y-n.x*a.y,v=f*e.x+m*e.y+y,S=f*t.x+m*t.y+y;if(Math.abs(v)<d&&Math.abs(S)<d&&Pp(v,S))return;const C=s*m-f*o;if(C===0)return;const T=Math.abs(C/2);let w=o*y-m*u;const k=w<0?(w-T)/C:(w+T)/C;w=f*u-s*y;const E=w<0?(w-T)/C:(w+T)/C;return{x:k,y:E}}}x(ew,"intersectLine");function Pp(e,t){return e*t>0}x(Pp,"sameSign");var WI=ew;function iw(e,t,n){let a=e.x,s=e.y,o=[],u=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY;typeof t.forEach=="function"?t.forEach(function(f){u=Math.min(u,f.x),c=Math.min(c,f.y)}):(u=Math.min(u,t.x),c=Math.min(c,t.y));let g=a-e.width/2-u,d=s-e.height/2-c;for(let f=0;f<t.length;f++){let m=t[f],y=t[f<t.length-1?f+1:0],v=WI(e,n,{x:g+m.x,y:d+m.y},{x:g+y.x,y:d+y.y});v&&o.push(v)}return o.length?(o.length>1&&o.sort(function(f,m){let y=f.x-n.x,v=f.y-n.y,S=Math.sqrt(y*y+v*v),C=m.x-n.x,T=m.y-n.y,w=Math.sqrt(C*C+T*T);return S<w?-1:S===w?0:1}),o[0]):e}x(iw,"intersectPolygon");var VI=iw,ft={node:jI,circle:YI,ellipse:J_,polygon:VI,rect:Zs};function nw(e,t){const{labelStyles:n}=Ct(t);t.labelStyle=n;const a=At(t);let s=a;a||(s="anchor");const o=e.insert("g").attr("class",s).attr("id",t.domId||t.id),u=1,{cssStyles:c}=t,g=vt.svg(o),d=St(t,{fill:"black",stroke:"none",fillStyle:"solid"});t.look!=="handDrawn"&&(d.roughness=0);const f=g.circle(0,0,u*2,d),m=o.insert(()=>f,":first-child");return m.attr("class","anchor").attr("style",ei(c)),xt(t,m),t.intersect=function(y){return st.info("Circle intersect",t,u,y),ft.circle(t,u,y)},o}x(nw,"anchor");function Np(e,t,n,a,s,o,u){const g=(e+n)/2,d=(t+a)/2,f=Math.atan2(a-t,n-e),m=(n-e)/2,y=(a-t)/2,v=m/s,S=y/o,C=Math.sqrt(v**2+S**2);if(C>1)throw new Error("The given radii are too small to create an arc between the points.");const T=Math.sqrt(1-C**2),w=g+T*o*Math.sin(f)*(u?-1:1),k=d-T*s*Math.cos(f)*(u?-1:1),E=Math.atan2((t-k)/o,(e-w)/s);let L=Math.atan2((a-k)/o,(n-w)/s)-E;u&&L<0&&(L+=2*Math.PI),!u&&L>0&&(L-=2*Math.PI);const R=[];for(let P=0;P<20;P++){const J=P/19,nt=E+J*L,rt=w+s*Math.cos(nt),X=k+o*Math.sin(nt);R.push({x:rt,y:X})}return R}x(Np,"generateArcPoints");async function rw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=o.width+t.padding+20,c=o.height+t.padding,g=c/2,d=g/(2.5+c/50),{cssStyles:f}=t,m=[{x:u/2,y:-c/2},{x:-u/2,y:-c/2},...Np(-u/2,-c/2,-u/2,c/2,d,g,!1),{x:u/2,y:c/2},...Np(u/2,c/2,u/2,-c/2,d,g,!0)],y=vt.svg(s),v=St(t,{});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=qt(m),C=y.path(S,v),T=s.insert(()=>C,":first-child");return T.attr("class","basic label-container"),f&&t.look!=="handDrawn"&&T.selectAll("path").attr("style",f),a&&t.look!=="handDrawn"&&T.selectAll("path").attr("style",a),T.attr("transform",`translate(${d/2}, 0)`),xt(t,T),t.intersect=function(w){return ft.polygon(t,m,w)},s}x(rw,"bowTieRect");function Yr(e,t,n,a){return e.insert("polygon",":first-child").attr("points",a.map(function(s){return s.x+","+s.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-t/2+","+n/2+")")}x(Yr,"insertPolygonShape");async function aw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=o.height+t.padding,c=12,g=o.width+t.padding+c,d=0,f=g,m=-u,y=0,v=[{x:d+c,y:m},{x:f,y:m},{x:f,y},{x:d,y},{x:d,y:m+c},{x:d+c,y:m}];let S;const{cssStyles:C}=t;if(t.look==="handDrawn"){const T=vt.svg(s),w=St(t,{}),k=qt(v),E=T.path(k,w);S=s.insert(()=>E,":first-child").attr("transform",`translate(${-g/2}, ${u/2})`),C&&S.attr("style",C)}else S=Yr(s,g,u,v);return a&&S.attr("style",a),xt(t,S),t.intersect=function(T){return ft.polygon(t,v,T)},s}x(aw,"card");function sw(e,t){const{nodeStyles:n}=Ct(t);t.label="";const a=e.insert("g").attr("class",At(t)).attr("id",t.domId??t.id),{cssStyles:s}=t,o=Math.max(28,t.width??0),u=[{x:0,y:o/2},{x:o/2,y:0},{x:0,y:-o/2},{x:-o/2,y:0}],c=vt.svg(a),g=St(t,{});t.look!=="handDrawn"&&(g.roughness=0,g.fillStyle="solid");const d=qt(u),f=c.path(d,g),m=a.insert(()=>f,":first-child");return s&&t.look!=="handDrawn"&&m.selectAll("path").attr("style",s),n&&t.look!=="handDrawn"&&m.selectAll("path").attr("style",n),t.width=28,t.height=28,t.intersect=function(y){return ft.polygon(t,u,y)},a}x(sw,"choice");async function Wm(e,t,n){const{labelStyles:a,nodeStyles:s}=Ct(t);t.labelStyle=a;const{shapeSvg:o,bbox:u,halfPadding:c}=await Rt(e,t,At(t)),g=(n==null?void 0:n.padding)??c,d=u.width/2+g;let f;const{cssStyles:m}=t;if(t.look==="handDrawn"){const y=vt.svg(o),v=St(t,{}),S=y.circle(0,0,d*2,v);f=o.insert(()=>S,":first-child"),f.attr("class","basic label-container").attr("style",ei(m))}else f=o.insert("circle",":first-child").attr("class","basic label-container").attr("style",s).attr("r",d).attr("cx",0).attr("cy",0);return xt(t,f),t.calcIntersect=function(y,v){const S=y.width/2;return ft.circle(y,S,v)},t.intersect=function(y){return st.info("Circle intersect",t,d,y),ft.circle(t,d,y)},o}x(Wm,"circle");function lw(e){const t=Math.cos(Math.PI/4),n=Math.sin(Math.PI/4),a=e*2,s={x:a/2*t,y:a/2*n},o={x:-(a/2)*t,y:a/2*n},u={x:-(a/2)*t,y:-(a/2)*n},c={x:a/2*t,y:-(a/2)*n};return`M ${o.x},${o.y} L ${c.x},${c.y}
                   M ${s.x},${s.y} L ${u.x},${u.y}`}x(lw,"createLine");function ow(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n,t.label="";const s=e.insert("g").attr("class",At(t)).attr("id",t.domId??t.id),o=Math.max(30,(t==null?void 0:t.width)??0),{cssStyles:u}=t,c=vt.svg(s),g=St(t,{});t.look!=="handDrawn"&&(g.roughness=0,g.fillStyle="solid");const d=c.circle(0,0,o*2,g),f=lw(o),m=c.path(f,g),y=s.insert(()=>d,":first-child");return y.insert(()=>m),u&&t.look!=="handDrawn"&&y.selectAll("path").attr("style",u),a&&t.look!=="handDrawn"&&y.selectAll("path").attr("style",a),xt(t,y),t.intersect=function(v){return st.info("crossedCircle intersect",t,{radius:o,point:v}),ft.circle(t,o,v)},s}x(ow,"crossedCircle");function Zn(e,t,n,a=100,s=0,o=180){const u=[],c=s*Math.PI/180,f=(o*Math.PI/180-c)/(a-1);for(let m=0;m<a;m++){const y=c+m*f,v=e+n*Math.cos(y),S=t+n*Math.sin(y);u.push({x:-v,y:-S})}return u}x(Zn,"generateCirclePoints");async function cw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=o.width+(t.padding??0),g=o.height+(t.padding??0),d=Math.max(5,g*.1),{cssStyles:f}=t,m=[...Zn(c/2,-g/2,d,30,-90,0),{x:-c/2-d,y:d},...Zn(c/2+d*2,-d,d,20,-180,-270),...Zn(c/2+d*2,d,d,20,-90,-180),{x:-c/2-d,y:-g/2},...Zn(c/2,g/2,d,20,0,90)],y=[{x:c/2,y:-g/2-d},{x:-c/2,y:-g/2-d},...Zn(c/2,-g/2,d,20,-90,0),{x:-c/2-d,y:-d},...Zn(c/2+c*.1,-d,d,20,-180,-270),...Zn(c/2+c*.1,d,d,20,-90,-180),{x:-c/2-d,y:g/2},...Zn(c/2,g/2,d,20,0,90),{x:-c/2,y:g/2+d},{x:c/2,y:g/2+d}],v=vt.svg(s),S=St(t,{fill:"none"});t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const T=qt(m).replace("Z",""),w=v.path(T,S),k=qt(y),E=v.path(k,{...S}),O=s.insert("g",":first-child");return O.insert(()=>E,":first-child").attr("stroke-opacity",0),O.insert(()=>w,":first-child"),O.attr("class","text"),f&&t.look!=="handDrawn"&&O.selectAll("path").attr("style",f),a&&t.look!=="handDrawn"&&O.selectAll("path").attr("style",a),O.attr("transform",`translate(${d}, 0)`),u.attr("transform",`translate(${-c/2+d-(o.x-(o.left??0))},${-g/2+(t.padding??0)/2-(o.y-(o.top??0))})`),xt(t,O),t.intersect=function(L){return ft.polygon(t,y,L)},s}x(cw,"curlyBraceLeft");function Jn(e,t,n,a=100,s=0,o=180){const u=[],c=s*Math.PI/180,f=(o*Math.PI/180-c)/(a-1);for(let m=0;m<a;m++){const y=c+m*f,v=e+n*Math.cos(y),S=t+n*Math.sin(y);u.push({x:v,y:S})}return u}x(Jn,"generateCirclePoints");async function uw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=o.width+(t.padding??0),g=o.height+(t.padding??0),d=Math.max(5,g*.1),{cssStyles:f}=t,m=[...Jn(c/2,-g/2,d,20,-90,0),{x:c/2+d,y:-d},...Jn(c/2+d*2,-d,d,20,-180,-270),...Jn(c/2+d*2,d,d,20,-90,-180),{x:c/2+d,y:g/2},...Jn(c/2,g/2,d,20,0,90)],y=[{x:-c/2,y:-g/2-d},{x:c/2,y:-g/2-d},...Jn(c/2,-g/2,d,20,-90,0),{x:c/2+d,y:-d},...Jn(c/2+d*2,-d,d,20,-180,-270),...Jn(c/2+d*2,d,d,20,-90,-180),{x:c/2+d,y:g/2},...Jn(c/2,g/2,d,20,0,90),{x:c/2,y:g/2+d},{x:-c/2,y:g/2+d}],v=vt.svg(s),S=St(t,{fill:"none"});t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const T=qt(m).replace("Z",""),w=v.path(T,S),k=qt(y),E=v.path(k,{...S}),O=s.insert("g",":first-child");return O.insert(()=>E,":first-child").attr("stroke-opacity",0),O.insert(()=>w,":first-child"),O.attr("class","text"),f&&t.look!=="handDrawn"&&O.selectAll("path").attr("style",f),a&&t.look!=="handDrawn"&&O.selectAll("path").attr("style",a),O.attr("transform",`translate(${-d}, 0)`),u.attr("transform",`translate(${-c/2+(t.padding??0)/2-(o.x-(o.left??0))},${-g/2+(t.padding??0)/2-(o.y-(o.top??0))})`),xt(t,O),t.intersect=function(L){return ft.polygon(t,y,L)},s}x(uw,"curlyBraceRight");function He(e,t,n,a=100,s=0,o=180){const u=[],c=s*Math.PI/180,f=(o*Math.PI/180-c)/(a-1);for(let m=0;m<a;m++){const y=c+m*f,v=e+n*Math.cos(y),S=t+n*Math.sin(y);u.push({x:-v,y:-S})}return u}x(He,"generateCirclePoints");async function hw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=o.width+(t.padding??0),g=o.height+(t.padding??0),d=Math.max(5,g*.1),{cssStyles:f}=t,m=[...He(c/2,-g/2,d,30,-90,0),{x:-c/2-d,y:d},...He(c/2+d*2,-d,d,20,-180,-270),...He(c/2+d*2,d,d,20,-90,-180),{x:-c/2-d,y:-g/2},...He(c/2,g/2,d,20,0,90)],y=[...He(-c/2+d+d/2,-g/2,d,20,-90,-180),{x:c/2-d/2,y:d},...He(-c/2-d/2,-d,d,20,0,90),...He(-c/2-d/2,d,d,20,-90,0),{x:c/2-d/2,y:-d},...He(-c/2+d+d/2,g/2,d,30,-180,-270)],v=[{x:c/2,y:-g/2-d},{x:-c/2,y:-g/2-d},...He(c/2,-g/2,d,20,-90,0),{x:-c/2-d,y:-d},...He(c/2+d*2,-d,d,20,-180,-270),...He(c/2+d*2,d,d,20,-90,-180),{x:-c/2-d,y:g/2},...He(c/2,g/2,d,20,0,90),{x:-c/2,y:g/2+d},{x:c/2-d-d/2,y:g/2+d},...He(-c/2+d+d/2,-g/2,d,20,-90,-180),{x:c/2-d/2,y:d},...He(-c/2-d/2,-d,d,20,0,90),...He(-c/2-d/2,d,d,20,-90,0),{x:c/2-d/2,y:-d},...He(-c/2+d+d/2,g/2,d,30,-180,-270)],S=vt.svg(s),C=St(t,{fill:"none"});t.look!=="handDrawn"&&(C.roughness=0,C.fillStyle="solid");const w=qt(m).replace("Z",""),k=S.path(w,C),O=qt(y).replace("Z",""),L=S.path(O,C),R=qt(v),P=S.path(R,{...C}),J=s.insert("g",":first-child");return J.insert(()=>P,":first-child").attr("stroke-opacity",0),J.insert(()=>k,":first-child"),J.insert(()=>L,":first-child"),J.attr("class","text"),f&&t.look!=="handDrawn"&&J.selectAll("path").attr("style",f),a&&t.look!=="handDrawn"&&J.selectAll("path").attr("style",a),J.attr("transform",`translate(${d-d/4}, 0)`),u.attr("transform",`translate(${-c/2+(t.padding??0)/2-(o.x-(o.left??0))},${-g/2+(t.padding??0)/2-(o.y-(o.top??0))})`),xt(t,J),t.intersect=function(nt){return ft.polygon(t,v,nt)},s}x(hw,"curlyBraces");async function dw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=80,c=20,g=Math.max(u,(o.width+(t.padding??0)*2)*1.25,(t==null?void 0:t.width)??0),d=Math.max(c,o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),f=d/2,{cssStyles:m}=t,y=vt.svg(s),v=St(t,{});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=g,C=d,T=S-f,w=C/4,k=[{x:T,y:0},{x:w,y:0},{x:0,y:C/2},{x:w,y:C},{x:T,y:C},...Go(-T,-C/2,f,50,270,90)],E=qt(k),O=y.path(E,v),L=s.insert(()=>O,":first-child");return L.attr("class","basic label-container"),m&&t.look!=="handDrawn"&&L.selectChildren("path").attr("style",m),a&&t.look!=="handDrawn"&&L.selectChildren("path").attr("style",a),L.attr("transform",`translate(${-g/2}, ${-d/2})`),xt(t,L),t.intersect=function(R){return ft.polygon(t,k,R)},s}x(dw,"curvedTrapezoid");var XI=x((e,t,n,a,s,o)=>[`M${e},${t+o}`,`a${s},${o} 0,0,0 ${n},0`,`a${s},${o} 0,0,0 ${-n},0`,`l0,${a}`,`a${s},${o} 0,0,0 ${n},0`,`l0,${-a}`].join(" "),"createCylinderPathD"),QI=x((e,t,n,a,s,o)=>[`M${e},${t+o}`,`M${e+n},${t+o}`,`a${s},${o} 0,0,0 ${-n},0`,`l0,${a}`,`a${s},${o} 0,0,0 ${n},0`,`l0,${-a}`].join(" "),"createOuterCylinderPathD"),KI=x((e,t,n,a,s,o)=>[`M${e-n/2},${-a/2}`,`a${s},${o} 0,0,0 ${n},0`].join(" "),"createInnerCylinderPathD");async function gw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+t.padding,t.width??0),g=c/2,d=g/(2.5+c/50),f=Math.max(o.height+d+t.padding,t.height??0);let m;const{cssStyles:y}=t;if(t.look==="handDrawn"){const v=vt.svg(s),S=QI(0,0,c,f,g,d),C=KI(0,d,c,f,g,d),T=v.path(S,St(t,{})),w=v.path(C,St(t,{fill:"none"}));m=s.insert(()=>w,":first-child"),m=s.insert(()=>T,":first-child"),m.attr("class","basic label-container"),y&&m.attr("style",y)}else{const v=XI(0,0,c,f,g,d);m=s.insert("path",":first-child").attr("d",v).attr("class","basic label-container").attr("style",ei(y)).attr("style",a)}return m.attr("label-offset-y",d),m.attr("transform",`translate(${-c/2}, ${-(f/2+d)})`),xt(t,m),u.attr("transform",`translate(${-(o.width/2)-(o.x-(o.left??0))}, ${-(o.height/2)+(t.padding??0)/1.5-(o.y-(o.top??0))})`),t.intersect=function(v){const S=ft.rect(t,v),C=S.x-(t.x??0);if(g!=0&&(Math.abs(C)<(t.width??0)/2||Math.abs(C)==(t.width??0)/2&&Math.abs(S.y-(t.y??0))>(t.height??0)/2-d)){let T=d*d*(1-C*C/(g*g));T>0&&(T=Math.sqrt(T)),T=d-T,v.y-(t.y??0)>0&&(T=-T),S.y+=T}return S},s}x(gw,"cylinder");async function fw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=o.width+t.padding,g=o.height+t.padding,d=g*.2,f=-c/2,m=-g/2-d/2,{cssStyles:y}=t,v=vt.svg(s),S=St(t,{});t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const C=[{x:f,y:m+d},{x:-f,y:m+d},{x:-f,y:-m},{x:f,y:-m},{x:f,y:m},{x:-f,y:m},{x:-f,y:m+d}],T=v.polygon(C.map(k=>[k.x,k.y]),S),w=s.insert(()=>T,":first-child");return w.attr("class","basic label-container"),y&&t.look!=="handDrawn"&&w.selectAll("path").attr("style",y),a&&t.look!=="handDrawn"&&w.selectAll("path").attr("style",a),u.attr("transform",`translate(${f+(t.padding??0)/2-(o.x-(o.left??0))}, ${m+d+(t.padding??0)/2-(o.y-(o.top??0))})`),xt(t,w),t.intersect=function(k){return ft.rect(t,k)},s}x(fw,"dividedRectangle");async function pw(e,t){var y,v;const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,halfPadding:u}=await Rt(e,t,At(t)),g=o.width/2+u+5,d=o.width/2+u;let f;const{cssStyles:m}=t;if(t.look==="handDrawn"){const S=vt.svg(s),C=St(t,{roughness:.2,strokeWidth:2.5}),T=St(t,{roughness:.2,strokeWidth:1.5}),w=S.circle(0,0,g*2,C),k=S.circle(0,0,d*2,T);f=s.insert("g",":first-child"),f.attr("class",ei(t.cssClasses)).attr("style",ei(m)),(y=f.node())==null||y.appendChild(w),(v=f.node())==null||v.appendChild(k)}else{f=s.insert("g",":first-child");const S=f.insert("circle",":first-child"),C=f.insert("circle");f.attr("class","basic label-container").attr("style",a),S.attr("class","outer-circle").attr("style",a).attr("r",g).attr("cx",0).attr("cy",0),C.attr("class","inner-circle").attr("style",a).attr("r",d).attr("cx",0).attr("cy",0)}return xt(t,f),t.intersect=function(S){return st.info("DoubleCircle intersect",t,g,S),ft.circle(t,g,S)},s}x(pw,"doublecircle");function mw(e,t,{config:{themeVariables:n}}){const{labelStyles:a,nodeStyles:s}=Ct(t);t.label="",t.labelStyle=a;const o=e.insert("g").attr("class",At(t)).attr("id",t.domId??t.id),u=7,{cssStyles:c}=t,g=vt.svg(o),{nodeBorder:d}=n,f=St(t,{fillStyle:"solid"});t.look!=="handDrawn"&&(f.roughness=0);const m=g.circle(0,0,u*2,f),y=o.insert(()=>m,":first-child");return y.selectAll("path").attr("style",`fill: ${d} !important;`),c&&c.length>0&&t.look!=="handDrawn"&&y.selectAll("path").attr("style",c),s&&t.look!=="handDrawn"&&y.selectAll("path").attr("style",s),xt(t,y),t.intersect=function(v){return st.info("filledCircle intersect",t,{radius:u,point:v}),ft.circle(t,u,v)},o}x(mw,"filledCircle");async function yw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=o.width+(t.padding??0),g=c+o.height,d=c+o.height,f=[{x:0,y:-g},{x:d,y:-g},{x:d/2,y:0}],{cssStyles:m}=t,y=vt.svg(s),v=St(t,{});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=qt(f),C=y.path(S,v),T=s.insert(()=>C,":first-child").attr("transform",`translate(${-g/2}, ${g/2})`);return m&&t.look!=="handDrawn"&&T.selectChildren("path").attr("style",m),a&&t.look!=="handDrawn"&&T.selectChildren("path").attr("style",a),t.width=c,t.height=g,xt(t,T),u.attr("transform",`translate(${-o.width/2-(o.x-(o.left??0))}, ${-g/2+(t.padding??0)/2+(o.y-(o.top??0))})`),t.intersect=function(w){return st.info("Triangle intersect",t,f,w),ft.polygon(t,f,w)},s}x(yw,"flippedTriangle");function bw(e,t,{dir:n,config:{state:a,themeVariables:s}}){const{nodeStyles:o}=Ct(t);t.label="";const u=e.insert("g").attr("class",At(t)).attr("id",t.domId??t.id),{cssStyles:c}=t;let g=Math.max(70,(t==null?void 0:t.width)??0),d=Math.max(10,(t==null?void 0:t.height)??0);n==="LR"&&(g=Math.max(10,(t==null?void 0:t.width)??0),d=Math.max(70,(t==null?void 0:t.height)??0));const f=-1*g/2,m=-1*d/2,y=vt.svg(u),v=St(t,{stroke:s.lineColor,fill:s.lineColor});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=y.rectangle(f,m,g,d,v),C=u.insert(()=>S,":first-child");c&&t.look!=="handDrawn"&&C.selectAll("path").attr("style",c),o&&t.look!=="handDrawn"&&C.selectAll("path").attr("style",o),xt(t,C);const T=(a==null?void 0:a.padding)??0;return t.width&&t.height&&(t.width+=T/2||0,t.height+=T/2||0),t.intersect=function(w){return ft.rect(t,w)},u}x(bw,"forkJoin");async function vw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const s=80,o=50,{shapeSvg:u,bbox:c}=await Rt(e,t,At(t)),g=Math.max(s,c.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),d=Math.max(o,c.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),f=d/2,{cssStyles:m}=t,y=vt.svg(u),v=St(t,{});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=[{x:-g/2,y:-d/2},{x:g/2-f,y:-d/2},...Go(-g/2+f,0,f,50,90,270),{x:g/2-f,y:d/2},{x:-g/2,y:d/2}],C=qt(S),T=y.path(C,v),w=u.insert(()=>T,":first-child");return w.attr("class","basic label-container"),m&&t.look!=="handDrawn"&&w.selectChildren("path").attr("style",m),a&&t.look!=="handDrawn"&&w.selectChildren("path").attr("style",a),xt(t,w),t.intersect=function(k){return st.info("Pill intersect",t,{radius:f,point:k}),ft.polygon(t,S,k)},u}x(vw,"halfRoundedRectangle");async function Sw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=o.height+(t.padding??0),c=o.width+(t.padding??0)*2.5,{cssStyles:g}=t,d=vt.svg(s),f=St(t,{});t.look!=="handDrawn"&&(f.roughness=0,f.fillStyle="solid");let m=c/2;const y=m/6;m=m+y;const v=u/2,S=v/2,C=m-S,T=[{x:-C,y:-v},{x:0,y:-v},{x:C,y:-v},{x:m,y:0},{x:C,y:v},{x:0,y:v},{x:-C,y:v},{x:-m,y:0}],w=qt(T),k=d.path(w,f),E=s.insert(()=>k,":first-child");return E.attr("class","basic label-container"),g&&t.look!=="handDrawn"&&E.selectChildren("path").attr("style",g),a&&t.look!=="handDrawn"&&E.selectChildren("path").attr("style",a),t.width=c,t.height=u,xt(t,E),t.intersect=function(O){return ft.polygon(t,T,O)},s}x(Sw,"hexagon");async function xw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.label="",t.labelStyle=n;const{shapeSvg:s}=await Rt(e,t,At(t)),o=Math.max(30,(t==null?void 0:t.width)??0),u=Math.max(30,(t==null?void 0:t.height)??0),{cssStyles:c}=t,g=vt.svg(s),d=St(t,{});t.look!=="handDrawn"&&(d.roughness=0,d.fillStyle="solid");const f=[{x:0,y:0},{x:o,y:0},{x:0,y:u},{x:o,y:u}],m=qt(f),y=g.path(m,d),v=s.insert(()=>y,":first-child");return v.attr("class","basic label-container"),c&&t.look!=="handDrawn"&&v.selectChildren("path").attr("style",c),a&&t.look!=="handDrawn"&&v.selectChildren("path").attr("style",a),v.attr("transform",`translate(${-o/2}, ${-u/2})`),xt(t,v),t.intersect=function(S){return st.info("Pill intersect",t,{points:f}),ft.polygon(t,f,S)},s}x(xw,"hourglass");async function Cw(e,t,{config:{themeVariables:n,flowchart:a}}){const{labelStyles:s}=Ct(t);t.labelStyle=s;const o=t.assetHeight??48,u=t.assetWidth??48,c=Math.max(o,u),g=a==null?void 0:a.wrappingWidth;t.width=Math.max(c,g??0);const{shapeSvg:d,bbox:f,label:m}=await Rt(e,t,"icon-shape default"),y=t.pos==="t",v=c,S=c,{nodeBorder:C}=n,{stylesMap:T}=Xs(t),w=-S/2,k=-v/2,E=t.label?8:0,O=vt.svg(d),L=St(t,{stroke:"none",fill:"none"});t.look!=="handDrawn"&&(L.roughness=0,L.fillStyle="solid");const R=O.rectangle(w,k,S,v,L),P=Math.max(S,f.width),J=v+f.height+E,nt=O.rectangle(-P/2,-J/2,P,J,{...L,fill:"transparent",stroke:"none"}),rt=d.insert(()=>R,":first-child"),X=d.insert(()=>nt);if(t.icon){const lt=d.append("g");lt.html(`<g>${await rc(t.icon,{height:c,width:c,fallbackPrefix:""})}</g>`);const at=lt.node().getBBox(),W=at.width,j=at.height,M=at.x,F=at.y;lt.attr("transform",`translate(${-W/2-M},${y?f.height/2+E/2-j/2-F:-f.height/2-E/2-j/2-F})`),lt.attr("style",`color: ${T.get("stroke")??C};`)}return m.attr("transform",`translate(${-f.width/2-(f.x-(f.left??0))},${y?-J/2:J/2-f.height})`),rt.attr("transform",`translate(0,${y?f.height/2+E/2:-f.height/2-E/2})`),xt(t,X),t.intersect=function(lt){if(st.info("iconSquare intersect",t,lt),!t.label)return ft.rect(t,lt);const at=t.x??0,W=t.y??0,j=t.height??0;let M=[];return y?M=[{x:at-f.width/2,y:W-j/2},{x:at+f.width/2,y:W-j/2},{x:at+f.width/2,y:W-j/2+f.height+E},{x:at+S/2,y:W-j/2+f.height+E},{x:at+S/2,y:W+j/2},{x:at-S/2,y:W+j/2},{x:at-S/2,y:W-j/2+f.height+E},{x:at-f.width/2,y:W-j/2+f.height+E}]:M=[{x:at-S/2,y:W-j/2},{x:at+S/2,y:W-j/2},{x:at+S/2,y:W-j/2+v},{x:at+f.width/2,y:W-j/2+v},{x:at+f.width/2/2,y:W+j/2},{x:at-f.width/2,y:W+j/2},{x:at-f.width/2,y:W-j/2+v},{x:at-S/2,y:W-j/2+v}],ft.polygon(t,M,lt)},d}x(Cw,"icon");async function _w(e,t,{config:{themeVariables:n,flowchart:a}}){const{labelStyles:s}=Ct(t);t.labelStyle=s;const o=t.assetHeight??48,u=t.assetWidth??48,c=Math.max(o,u),g=a==null?void 0:a.wrappingWidth;t.width=Math.max(c,g??0);const{shapeSvg:d,bbox:f,label:m}=await Rt(e,t,"icon-shape default"),y=20,v=t.label?8:0,S=t.pos==="t",{nodeBorder:C,mainBkg:T}=n,{stylesMap:w}=Xs(t),k=vt.svg(d),E=St(t,{});t.look!=="handDrawn"&&(E.roughness=0,E.fillStyle="solid");const O=w.get("fill");E.stroke=O??T;const L=d.append("g");t.icon&&L.html(`<g>${await rc(t.icon,{height:c,width:c,fallbackPrefix:""})}</g>`);const R=L.node().getBBox(),P=R.width,J=R.height,nt=R.x,rt=R.y,X=Math.max(P,J)*Math.SQRT2+y*2,lt=k.circle(0,0,X,E),at=Math.max(X,f.width),W=X+f.height+v,j=k.rectangle(-at/2,-W/2,at,W,{...E,fill:"transparent",stroke:"none"}),M=d.insert(()=>lt,":first-child"),F=d.insert(()=>j);return L.attr("transform",`translate(${-P/2-nt},${S?f.height/2+v/2-J/2-rt:-f.height/2-v/2-J/2-rt})`),L.attr("style",`color: ${w.get("stroke")??C};`),m.attr("transform",`translate(${-f.width/2-(f.x-(f.left??0))},${S?-W/2:W/2-f.height})`),M.attr("transform",`translate(0,${S?f.height/2+v/2:-f.height/2-v/2})`),xt(t,F),t.intersect=function($){return st.info("iconSquare intersect",t,$),ft.rect(t,$)},d}x(_w,"iconCircle");async function ww(e,t,{config:{themeVariables:n,flowchart:a}}){const{labelStyles:s}=Ct(t);t.labelStyle=s;const o=t.assetHeight??48,u=t.assetWidth??48,c=Math.max(o,u),g=a==null?void 0:a.wrappingWidth;t.width=Math.max(c,g??0);const{shapeSvg:d,bbox:f,halfPadding:m,label:y}=await Rt(e,t,"icon-shape default"),v=t.pos==="t",S=c+m*2,C=c+m*2,{nodeBorder:T,mainBkg:w}=n,{stylesMap:k}=Xs(t),E=-C/2,O=-S/2,L=t.label?8:0,R=vt.svg(d),P=St(t,{});t.look!=="handDrawn"&&(P.roughness=0,P.fillStyle="solid");const J=k.get("fill");P.stroke=J??w;const nt=R.path(jr(E,O,C,S,5),P),rt=Math.max(C,f.width),X=S+f.height+L,lt=R.rectangle(-rt/2,-X/2,rt,X,{...P,fill:"transparent",stroke:"none"}),at=d.insert(()=>nt,":first-child").attr("class","icon-shape2"),W=d.insert(()=>lt);if(t.icon){const j=d.append("g");j.html(`<g>${await rc(t.icon,{height:c,width:c,fallbackPrefix:""})}</g>`);const M=j.node().getBBox(),F=M.width,$=M.height,ut=M.x,D=M.y;j.attr("transform",`translate(${-F/2-ut},${v?f.height/2+L/2-$/2-D:-f.height/2-L/2-$/2-D})`),j.attr("style",`color: ${k.get("stroke")??T};`)}return y.attr("transform",`translate(${-f.width/2-(f.x-(f.left??0))},${v?-X/2:X/2-f.height})`),at.attr("transform",`translate(0,${v?f.height/2+L/2:-f.height/2-L/2})`),xt(t,W),t.intersect=function(j){if(st.info("iconSquare intersect",t,j),!t.label)return ft.rect(t,j);const M=t.x??0,F=t.y??0,$=t.height??0;let ut=[];return v?ut=[{x:M-f.width/2,y:F-$/2},{x:M+f.width/2,y:F-$/2},{x:M+f.width/2,y:F-$/2+f.height+L},{x:M+C/2,y:F-$/2+f.height+L},{x:M+C/2,y:F+$/2},{x:M-C/2,y:F+$/2},{x:M-C/2,y:F-$/2+f.height+L},{x:M-f.width/2,y:F-$/2+f.height+L}]:ut=[{x:M-C/2,y:F-$/2},{x:M+C/2,y:F-$/2},{x:M+C/2,y:F-$/2+S},{x:M+f.width/2,y:F-$/2+S},{x:M+f.width/2/2,y:F+$/2},{x:M-f.width/2,y:F+$/2},{x:M-f.width/2,y:F-$/2+S},{x:M-C/2,y:F-$/2+S}],ft.polygon(t,ut,j)},d}x(ww,"iconRounded");async function Tw(e,t,{config:{themeVariables:n,flowchart:a}}){const{labelStyles:s}=Ct(t);t.labelStyle=s;const o=t.assetHeight??48,u=t.assetWidth??48,c=Math.max(o,u),g=a==null?void 0:a.wrappingWidth;t.width=Math.max(c,g??0);const{shapeSvg:d,bbox:f,halfPadding:m,label:y}=await Rt(e,t,"icon-shape default"),v=t.pos==="t",S=c+m*2,C=c+m*2,{nodeBorder:T,mainBkg:w}=n,{stylesMap:k}=Xs(t),E=-C/2,O=-S/2,L=t.label?8:0,R=vt.svg(d),P=St(t,{});t.look!=="handDrawn"&&(P.roughness=0,P.fillStyle="solid");const J=k.get("fill");P.stroke=J??w;const nt=R.path(jr(E,O,C,S,.1),P),rt=Math.max(C,f.width),X=S+f.height+L,lt=R.rectangle(-rt/2,-X/2,rt,X,{...P,fill:"transparent",stroke:"none"}),at=d.insert(()=>nt,":first-child"),W=d.insert(()=>lt);if(t.icon){const j=d.append("g");j.html(`<g>${await rc(t.icon,{height:c,width:c,fallbackPrefix:""})}</g>`);const M=j.node().getBBox(),F=M.width,$=M.height,ut=M.x,D=M.y;j.attr("transform",`translate(${-F/2-ut},${v?f.height/2+L/2-$/2-D:-f.height/2-L/2-$/2-D})`),j.attr("style",`color: ${k.get("stroke")??T};`)}return y.attr("transform",`translate(${-f.width/2-(f.x-(f.left??0))},${v?-X/2:X/2-f.height})`),at.attr("transform",`translate(0,${v?f.height/2+L/2:-f.height/2-L/2})`),xt(t,W),t.intersect=function(j){if(st.info("iconSquare intersect",t,j),!t.label)return ft.rect(t,j);const M=t.x??0,F=t.y??0,$=t.height??0;let ut=[];return v?ut=[{x:M-f.width/2,y:F-$/2},{x:M+f.width/2,y:F-$/2},{x:M+f.width/2,y:F-$/2+f.height+L},{x:M+C/2,y:F-$/2+f.height+L},{x:M+C/2,y:F+$/2},{x:M-C/2,y:F+$/2},{x:M-C/2,y:F-$/2+f.height+L},{x:M-f.width/2,y:F-$/2+f.height+L}]:ut=[{x:M-C/2,y:F-$/2},{x:M+C/2,y:F-$/2},{x:M+C/2,y:F-$/2+S},{x:M+f.width/2,y:F-$/2+S},{x:M+f.width/2/2,y:F+$/2},{x:M-f.width/2,y:F+$/2},{x:M-f.width/2,y:F-$/2+S},{x:M-C/2,y:F-$/2+S}],ft.polygon(t,ut,j)},d}x(Tw,"iconSquare");async function kw(e,t,{config:{flowchart:n}}){const a=new Image;a.src=(t==null?void 0:t.img)??"",await a.decode();const s=Number(a.naturalWidth.toString().replace("px","")),o=Number(a.naturalHeight.toString().replace("px",""));t.imageAspectRatio=s/o;const{labelStyles:u}=Ct(t);t.labelStyle=u;const c=n==null?void 0:n.wrappingWidth;t.defaultWidth=n==null?void 0:n.wrappingWidth;const g=Math.max(t.label?c??0:0,(t==null?void 0:t.assetWidth)??s),d=t.constraint==="on"&&t!=null&&t.assetHeight?t.assetHeight*t.imageAspectRatio:g,f=t.constraint==="on"?d/t.imageAspectRatio:(t==null?void 0:t.assetHeight)??o;t.width=Math.max(d,c??0);const{shapeSvg:m,bbox:y,label:v}=await Rt(e,t,"image-shape default"),S=t.pos==="t",C=-d/2,T=-f/2,w=t.label?8:0,k=vt.svg(m),E=St(t,{});t.look!=="handDrawn"&&(E.roughness=0,E.fillStyle="solid");const O=k.rectangle(C,T,d,f,E),L=Math.max(d,y.width),R=f+y.height+w,P=k.rectangle(-L/2,-R/2,L,R,{...E,fill:"none",stroke:"none"}),J=m.insert(()=>O,":first-child"),nt=m.insert(()=>P);if(t.img){const rt=m.append("image");rt.attr("href",t.img),rt.attr("width",d),rt.attr("height",f),rt.attr("preserveAspectRatio","none"),rt.attr("transform",`translate(${-d/2},${S?R/2-f:-R/2})`)}return v.attr("transform",`translate(${-y.width/2-(y.x-(y.left??0))},${S?-f/2-y.height/2-w/2:f/2-y.height/2+w/2})`),J.attr("transform",`translate(0,${S?y.height/2+w/2:-y.height/2-w/2})`),xt(t,nt),t.intersect=function(rt){if(st.info("iconSquare intersect",t,rt),!t.label)return ft.rect(t,rt);const X=t.x??0,lt=t.y??0,at=t.height??0;let W=[];return S?W=[{x:X-y.width/2,y:lt-at/2},{x:X+y.width/2,y:lt-at/2},{x:X+y.width/2,y:lt-at/2+y.height+w},{x:X+d/2,y:lt-at/2+y.height+w},{x:X+d/2,y:lt+at/2},{x:X-d/2,y:lt+at/2},{x:X-d/2,y:lt-at/2+y.height+w},{x:X-y.width/2,y:lt-at/2+y.height+w}]:W=[{x:X-d/2,y:lt-at/2},{x:X+d/2,y:lt-at/2},{x:X+d/2,y:lt-at/2+f},{x:X+y.width/2,y:lt-at/2+f},{x:X+y.width/2/2,y:lt+at/2},{x:X-y.width/2,y:lt+at/2},{x:X-y.width/2,y:lt-at/2+f},{x:X-d/2,y:lt-at/2+f}],ft.polygon(t,W,rt)},m}x(kw,"imageSquare");async function Aw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),c=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),g=[{x:0,y:0},{x:u,y:0},{x:u+3*c/6,y:-c},{x:-3*c/6,y:-c}];let d;const{cssStyles:f}=t;if(t.look==="handDrawn"){const m=vt.svg(s),y=St(t,{}),v=qt(g),S=m.path(v,y);d=s.insert(()=>S,":first-child").attr("transform",`translate(${-u/2}, ${c/2})`),f&&d.attr("style",f)}else d=Yr(s,u,c,g);return a&&d.attr("style",a),t.width=u,t.height=c,xt(t,d),t.intersect=function(m){return ft.polygon(t,g,m)},s}x(Aw,"inv_trapezoid");async function ed(e,t,n){const{labelStyles:a,nodeStyles:s}=Ct(t);t.labelStyle=a;const{shapeSvg:o,bbox:u}=await Rt(e,t,At(t)),c=Math.max(u.width+n.labelPaddingX*2,(t==null?void 0:t.width)||0),g=Math.max(u.height+n.labelPaddingY*2,(t==null?void 0:t.height)||0),d=-c/2,f=-g/2;let m,{rx:y,ry:v}=t;const{cssStyles:S}=t;if(n!=null&&n.rx&&n.ry&&(y=n.rx,v=n.ry),t.look==="handDrawn"){const C=vt.svg(o),T=St(t,{}),w=y||v?C.path(jr(d,f,c,g,y||0),T):C.rectangle(d,f,c,g,T);m=o.insert(()=>w,":first-child"),m.attr("class","basic label-container").attr("style",ei(S))}else m=o.insert("rect",":first-child"),m.attr("class","basic label-container").attr("style",s).attr("rx",ei(y)).attr("ry",ei(v)).attr("x",d).attr("y",f).attr("width",c).attr("height",g);return xt(t,m),t.calcIntersect=function(C,T){return ft.rect(C,T)},t.intersect=function(C){return ft.rect(t,C)},o}x(ed,"drawRect");async function Ew(e,t){const{shapeSvg:n,bbox:a,label:s}=await Rt(e,t,"label"),o=n.insert("rect",":first-child");return o.attr("width",.1).attr("height",.1),n.attr("class","label edgeLabel"),s.attr("transform",`translate(${-(a.width/2)-(a.x-(a.left??0))}, ${-(a.height/2)-(a.y-(a.top??0))})`),xt(t,o),t.intersect=function(g){return ft.rect(t,g)},n}x(Ew,"labelRect");async function Rw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=Math.max(o.width+(t.padding??0),(t==null?void 0:t.width)??0),c=Math.max(o.height+(t.padding??0),(t==null?void 0:t.height)??0),g=[{x:0,y:0},{x:u+3*c/6,y:0},{x:u,y:-c},{x:-(3*c)/6,y:-c}];let d;const{cssStyles:f}=t;if(t.look==="handDrawn"){const m=vt.svg(s),y=St(t,{}),v=qt(g),S=m.path(v,y);d=s.insert(()=>S,":first-child").attr("transform",`translate(${-u/2}, ${c/2})`),f&&d.attr("style",f)}else d=Yr(s,u,c,g);return a&&d.attr("style",a),t.width=u,t.height=c,xt(t,d),t.intersect=function(m){return ft.polygon(t,g,m)},s}x(Rw,"lean_left");async function Mw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=Math.max(o.width+(t.padding??0),(t==null?void 0:t.width)??0),c=Math.max(o.height+(t.padding??0),(t==null?void 0:t.height)??0),g=[{x:-3*c/6,y:0},{x:u,y:0},{x:u+3*c/6,y:-c},{x:0,y:-c}];let d;const{cssStyles:f}=t;if(t.look==="handDrawn"){const m=vt.svg(s),y=St(t,{}),v=qt(g),S=m.path(v,y);d=s.insert(()=>S,":first-child").attr("transform",`translate(${-u/2}, ${c/2})`),f&&d.attr("style",f)}else d=Yr(s,u,c,g);return a&&d.attr("style",a),t.width=u,t.height=c,xt(t,d),t.intersect=function(m){return ft.polygon(t,g,m)},s}x(Mw,"lean_right");function Dw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.label="",t.labelStyle=n;const s=e.insert("g").attr("class",At(t)).attr("id",t.domId??t.id),{cssStyles:o}=t,u=Math.max(35,(t==null?void 0:t.width)??0),c=Math.max(35,(t==null?void 0:t.height)??0),g=7,d=[{x:u,y:0},{x:0,y:c+g/2},{x:u-2*g,y:c+g/2},{x:0,y:2*c},{x:u,y:c-g/2},{x:2*g,y:c-g/2}],f=vt.svg(s),m=St(t,{});t.look!=="handDrawn"&&(m.roughness=0,m.fillStyle="solid");const y=qt(d),v=f.path(y,m),S=s.insert(()=>v,":first-child");return o&&t.look!=="handDrawn"&&S.selectAll("path").attr("style",o),a&&t.look!=="handDrawn"&&S.selectAll("path").attr("style",a),S.attr("transform",`translate(-${u/2},${-c})`),xt(t,S),t.intersect=function(C){return st.info("lightningBolt intersect",t,C),ft.polygon(t,d,C)},s}x(Dw,"lightningBolt");var ZI=x((e,t,n,a,s,o,u)=>[`M${e},${t+o}`,`a${s},${o} 0,0,0 ${n},0`,`a${s},${o} 0,0,0 ${-n},0`,`l0,${a}`,`a${s},${o} 0,0,0 ${n},0`,`l0,${-a}`,`M${e},${t+o+u}`,`a${s},${o} 0,0,0 ${n},0`].join(" "),"createCylinderPathD"),JI=x((e,t,n,a,s,o,u)=>[`M${e},${t+o}`,`M${e+n},${t+o}`,`a${s},${o} 0,0,0 ${-n},0`,`l0,${a}`,`a${s},${o} 0,0,0 ${n},0`,`l0,${-a}`,`M${e},${t+o+u}`,`a${s},${o} 0,0,0 ${n},0`].join(" "),"createOuterCylinderPathD"),tF=x((e,t,n,a,s,o)=>[`M${e-n/2},${-a/2}`,`a${s},${o} 0,0,0 ${n},0`].join(" "),"createInnerCylinderPathD");async function Lw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0),t.width??0),g=c/2,d=g/(2.5+c/50),f=Math.max(o.height+d+(t.padding??0),t.height??0),m=f*.1;let y;const{cssStyles:v}=t;if(t.look==="handDrawn"){const S=vt.svg(s),C=JI(0,0,c,f,g,d,m),T=tF(0,d,c,f,g,d),w=St(t,{}),k=S.path(C,w),E=S.path(T,w);s.insert(()=>E,":first-child").attr("class","line"),y=s.insert(()=>k,":first-child"),y.attr("class","basic label-container"),v&&y.attr("style",v)}else{const S=ZI(0,0,c,f,g,d,m);y=s.insert("path",":first-child").attr("d",S).attr("class","basic label-container").attr("style",ei(v)).attr("style",a)}return y.attr("label-offset-y",d),y.attr("transform",`translate(${-c/2}, ${-(f/2+d)})`),xt(t,y),u.attr("transform",`translate(${-(o.width/2)-(o.x-(o.left??0))}, ${-(o.height/2)+d-(o.y-(o.top??0))})`),t.intersect=function(S){const C=ft.rect(t,S),T=C.x-(t.x??0);if(g!=0&&(Math.abs(T)<(t.width??0)/2||Math.abs(T)==(t.width??0)/2&&Math.abs(C.y-(t.y??0))>(t.height??0)/2-d)){let w=d*d*(1-T*T/(g*g));w>0&&(w=Math.sqrt(w)),w=d-w,S.y-(t.y??0)>0&&(w=-w),C.y+=w}return C},s}x(Lw,"linedCylinder");async function Bw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),g=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=g/4,f=g+d,{cssStyles:m}=t,y=vt.svg(s),v=St(t,{});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=[{x:-c/2-c/2*.1,y:-f/2},{x:-c/2-c/2*.1,y:f/2},...qr(-c/2-c/2*.1,f/2,c/2+c/2*.1,f/2,d,.8),{x:c/2+c/2*.1,y:-f/2},{x:-c/2-c/2*.1,y:-f/2},{x:-c/2,y:-f/2},{x:-c/2,y:f/2*1.1},{x:-c/2,y:-f/2}],C=y.polygon(S.map(w=>[w.x,w.y]),v),T=s.insert(()=>C,":first-child");return T.attr("class","basic label-container"),m&&t.look!=="handDrawn"&&T.selectAll("path").attr("style",m),a&&t.look!=="handDrawn"&&T.selectAll("path").attr("style",a),T.attr("transform",`translate(0,${-d/2})`),u.attr("transform",`translate(${-c/2+(t.padding??0)+c/2*.1/2-(o.x-(o.left??0))},${-g/2+(t.padding??0)-d/2-(o.y-(o.top??0))})`),xt(t,T),t.intersect=function(w){return ft.polygon(t,S,w)},s}x(Bw,"linedWaveEdgedRect");async function Ow(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),g=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=5,f=-c/2,m=-g/2,{cssStyles:y}=t,v=vt.svg(s),S=St(t,{}),C=[{x:f-d,y:m+d},{x:f-d,y:m+g+d},{x:f+c-d,y:m+g+d},{x:f+c-d,y:m+g},{x:f+c,y:m+g},{x:f+c,y:m+g-d},{x:f+c+d,y:m+g-d},{x:f+c+d,y:m-d},{x:f+d,y:m-d},{x:f+d,y:m},{x:f,y:m},{x:f,y:m+d}],T=[{x:f,y:m+d},{x:f+c-d,y:m+d},{x:f+c-d,y:m+g},{x:f+c,y:m+g},{x:f+c,y:m},{x:f,y:m}];t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const w=qt(C),k=v.path(w,S),E=qt(T),O=v.path(E,{...S,fill:"none"}),L=s.insert(()=>O,":first-child");return L.insert(()=>k,":first-child"),L.attr("class","basic label-container"),y&&t.look!=="handDrawn"&&L.selectAll("path").attr("style",y),a&&t.look!=="handDrawn"&&L.selectAll("path").attr("style",a),u.attr("transform",`translate(${-(o.width/2)-d-(o.x-(o.left??0))}, ${-(o.height/2)+d-(o.y-(o.top??0))})`),xt(t,L),t.intersect=function(R){return ft.polygon(t,C,R)},s}x(Ow,"multiRect");async function Pw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),g=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=g/4,f=g+d,m=-c/2,y=-f/2,v=5,{cssStyles:S}=t,C=qr(m-v,y+f+v,m+c-v,y+f+v,d,.8),T=C==null?void 0:C[C.length-1],w=[{x:m-v,y:y+v},{x:m-v,y:y+f+v},...C,{x:m+c-v,y:T.y-v},{x:m+c,y:T.y-v},{x:m+c,y:T.y-2*v},{x:m+c+v,y:T.y-2*v},{x:m+c+v,y:y-v},{x:m+v,y:y-v},{x:m+v,y},{x:m,y},{x:m,y:y+v}],k=[{x:m,y:y+v},{x:m+c-v,y:y+v},{x:m+c-v,y:T.y-v},{x:m+c,y:T.y-v},{x:m+c,y},{x:m,y}],E=vt.svg(s),O=St(t,{});t.look!=="handDrawn"&&(O.roughness=0,O.fillStyle="solid");const L=qt(w),R=E.path(L,O),P=qt(k),J=E.path(P,O),nt=s.insert(()=>R,":first-child");return nt.insert(()=>J),nt.attr("class","basic label-container"),S&&t.look!=="handDrawn"&&nt.selectAll("path").attr("style",S),a&&t.look!=="handDrawn"&&nt.selectAll("path").attr("style",a),nt.attr("transform",`translate(0,${-d/2})`),u.attr("transform",`translate(${-(o.width/2)-v-(o.x-(o.left??0))}, ${-(o.height/2)+v-d/2-(o.y-(o.top??0))})`),xt(t,nt),t.intersect=function(rt){return ft.polygon(t,w,rt)},s}x(Pw,"multiWaveEdgedRectangle");async function Nw(e,t,{config:{themeVariables:n}}){var k;const{labelStyles:a,nodeStyles:s}=Ct(t);t.labelStyle=a,t.useHtmlLabels||((k=Je().flowchart)==null?void 0:k.htmlLabels)!==!1||(t.centerLabel=!0);const{shapeSvg:u,bbox:c,label:g}=await Rt(e,t,At(t)),d=Math.max(c.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),f=Math.max(c.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),m=-d/2,y=-f/2,{cssStyles:v}=t,S=vt.svg(u),C=St(t,{fill:n.noteBkgColor,stroke:n.noteBorderColor});t.look!=="handDrawn"&&(C.roughness=0,C.fillStyle="solid");const T=S.rectangle(m,y,d,f,C),w=u.insert(()=>T,":first-child");return w.attr("class","basic label-container"),v&&t.look!=="handDrawn"&&w.selectAll("path").attr("style",v),s&&t.look!=="handDrawn"&&w.selectAll("path").attr("style",s),g.attr("transform",`translate(${-c.width/2-(c.x-(c.left??0))}, ${-(c.height/2)-(c.y-(c.top??0))})`),xt(t,w),t.intersect=function(E){return ft.rect(t,E)},u}x(Nw,"note");var eF=x((e,t,n)=>[`M${e+n/2},${t}`,`L${e+n},${t-n/2}`,`L${e+n/2},${t-n}`,`L${e},${t-n/2}`,"Z"].join(" "),"createDecisionBoxPathD");async function Iw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=o.width+t.padding,c=o.height+t.padding,g=u+c,d=.5,f=[{x:g/2,y:0},{x:g,y:-g/2},{x:g/2,y:-g},{x:0,y:-g/2}];let m;const{cssStyles:y}=t;if(t.look==="handDrawn"){const v=vt.svg(s),S=St(t,{}),C=eF(0,0,g),T=v.path(C,S);m=s.insert(()=>T,":first-child").attr("transform",`translate(${-g/2+d}, ${g/2})`),y&&m.attr("style",y)}else m=Yr(s,g,g,f),m.attr("transform",`translate(${-g/2+d}, ${g/2})`);return a&&m.attr("style",a),xt(t,m),t.calcIntersect=function(v,S){const C=v.width,T=[{x:C/2,y:0},{x:C,y:-C/2},{x:C/2,y:-C},{x:0,y:-C/2}],w=ft.polygon(v,T,S);return{x:w.x-.5,y:w.y-.5}},t.intersect=function(v){return this.calcIntersect(t,v)},s}x(Iw,"question");async function Fw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0),(t==null?void 0:t.width)??0),g=Math.max(o.height+(t.padding??0),(t==null?void 0:t.height)??0),d=-c/2,f=-g/2,m=f/2,y=[{x:d+m,y:f},{x:d,y:0},{x:d+m,y:-f},{x:-d,y:-f},{x:-d,y:f}],{cssStyles:v}=t,S=vt.svg(s),C=St(t,{});t.look!=="handDrawn"&&(C.roughness=0,C.fillStyle="solid");const T=qt(y),w=S.path(T,C),k=s.insert(()=>w,":first-child");return k.attr("class","basic label-container"),v&&t.look!=="handDrawn"&&k.selectAll("path").attr("style",v),a&&t.look!=="handDrawn"&&k.selectAll("path").attr("style",a),k.attr("transform",`translate(${-m/2},0)`),u.attr("transform",`translate(${-m/2-o.width/2-(o.x-(o.left??0))}, ${-(o.height/2)-(o.y-(o.top??0))})`),xt(t,k),t.intersect=function(E){return ft.polygon(t,y,E)},s}x(Fw,"rect_left_inv_arrow");async function $w(e,t){var J,nt;const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;let s;t.cssClasses?s="node "+t.cssClasses:s="node default";const o=e.insert("g").attr("class",s).attr("id",t.domId||t.id),u=o.insert("g"),c=o.insert("g").attr("class","label").attr("style",a),g=t.description,d=t.label,f=c.node().appendChild(await Ca(d,t.labelStyle,!0,!0));let m={width:0,height:0};if(Oe((nt=(J=Vt())==null?void 0:J.flowchart)==null?void 0:nt.htmlLabels)){const rt=f.children[0],X=jt(f);m=rt.getBoundingClientRect(),X.attr("width",m.width),X.attr("height",m.height)}st.info("Text 2",g);const y=g||[],v=f.getBBox(),S=c.node().appendChild(await Ca(y.join?y.join("<br/>"):y,t.labelStyle,!0,!0)),C=S.children[0],T=jt(S);m=C.getBoundingClientRect(),T.attr("width",m.width),T.attr("height",m.height);const w=(t.padding||0)/2;jt(S).attr("transform","translate( "+(m.width>v.width?0:(v.width-m.width)/2)+", "+(v.height+w+5)+")"),jt(f).attr("transform","translate( "+(m.width<v.width?0:-(v.width-m.width)/2)+", 0)"),m=c.node().getBBox(),c.attr("transform","translate("+-m.width/2+", "+(-m.height/2-w+3)+")");const k=m.width+(t.padding||0),E=m.height+(t.padding||0),O=-m.width/2-w,L=-m.height/2-w;let R,P;if(t.look==="handDrawn"){const rt=vt.svg(o),X=St(t,{}),lt=rt.path(jr(O,L,k,E,t.rx||0),X),at=rt.line(-m.width/2-w,-m.height/2-w+v.height+w,m.width/2+w,-m.height/2-w+v.height+w,X);P=o.insert(()=>(st.debug("Rough node insert CXC",lt),at),":first-child"),R=o.insert(()=>(st.debug("Rough node insert CXC",lt),lt),":first-child")}else R=u.insert("rect",":first-child"),P=u.insert("line"),R.attr("class","outer title-state").attr("style",a).attr("x",-m.width/2-w).attr("y",-m.height/2-w).attr("width",m.width+(t.padding||0)).attr("height",m.height+(t.padding||0)),P.attr("class","divider").attr("x1",-m.width/2-w).attr("x2",m.width/2+w).attr("y1",-m.height/2-w+v.height+w).attr("y2",-m.height/2-w+v.height+w);return xt(t,R),t.intersect=function(rt){return ft.rect(t,rt)},o}x($w,"rectWithTitle");function wo(e,t,n,a,s,o,u){const g=(e+n)/2,d=(t+a)/2,f=Math.atan2(a-t,n-e),m=(n-e)/2,y=(a-t)/2,v=m/s,S=y/o,C=Math.sqrt(v**2+S**2);if(C>1)throw new Error("The given radii are too small to create an arc between the points.");const T=Math.sqrt(1-C**2),w=g+T*o*Math.sin(f)*(u?-1:1),k=d-T*s*Math.cos(f)*(u?-1:1),E=Math.atan2((t-k)/o,(e-w)/s);let L=Math.atan2((a-k)/o,(n-w)/s)-E;u&&L<0&&(L+=2*Math.PI),!u&&L>0&&(L-=2*Math.PI);const R=[];for(let P=0;P<20;P++){const J=P/19,nt=E+J*L,rt=w+s*Math.cos(nt),X=k+o*Math.sin(nt);R.push({x:rt,y:X})}return R}x(wo,"generateArcPoints");async function zw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=(t==null?void 0:t.padding)??0,c=(t==null?void 0:t.padding)??0,g=(t!=null&&t.width?t==null?void 0:t.width:o.width)+u*2,d=(t!=null&&t.height?t==null?void 0:t.height:o.height)+c*2,f=t.radius||5,m=t.taper||5,{cssStyles:y}=t,v=vt.svg(s),S=St(t,{});t.stroke&&(S.stroke=t.stroke),t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const C=[{x:-g/2+m,y:-d/2},{x:g/2-m,y:-d/2},...wo(g/2-m,-d/2,g/2,-d/2+m,f,f,!0),{x:g/2,y:-d/2+m},{x:g/2,y:d/2-m},...wo(g/2,d/2-m,g/2-m,d/2,f,f,!0),{x:g/2-m,y:d/2},{x:-g/2+m,y:d/2},...wo(-g/2+m,d/2,-g/2,d/2-m,f,f,!0),{x:-g/2,y:d/2-m},{x:-g/2,y:-d/2+m},...wo(-g/2,-d/2+m,-g/2+m,-d/2,f,f,!0)],T=qt(C),w=v.path(T,S),k=s.insert(()=>w,":first-child");return k.attr("class","basic label-container outer-path"),y&&t.look!=="handDrawn"&&k.selectChildren("path").attr("style",y),a&&t.look!=="handDrawn"&&k.selectChildren("path").attr("style",a),xt(t,k),t.intersect=function(E){return ft.polygon(t,C,E)},s}x(zw,"roundedRect");async function Uw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=(t==null?void 0:t.padding)??0,g=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),d=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),f=-o.width/2-c,m=-o.height/2-c,{cssStyles:y}=t,v=vt.svg(s),S=St(t,{});t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const C=[{x:f,y:m},{x:f+g+8,y:m},{x:f+g+8,y:m+d},{x:f-8,y:m+d},{x:f-8,y:m},{x:f,y:m},{x:f,y:m+d}],T=v.polygon(C.map(k=>[k.x,k.y]),S),w=s.insert(()=>T,":first-child");return w.attr("class","basic label-container").attr("style",ei(y)),a&&t.look!=="handDrawn"&&w.selectAll("path").attr("style",a),y&&t.look!=="handDrawn"&&w.selectAll("path").attr("style",a),u.attr("transform",`translate(${-g/2+4+(t.padding??0)-(o.x-(o.left??0))},${-d/2+(t.padding??0)-(o.y-(o.top??0))})`),xt(t,w),t.intersect=function(k){return ft.rect(t,k)},s}x(Uw,"shadedProcess");async function qw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),g=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=-c/2,f=-g/2,{cssStyles:m}=t,y=vt.svg(s),v=St(t,{});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=[{x:d,y:f},{x:d,y:f+g},{x:d+c,y:f+g},{x:d+c,y:f-g/2}],C=qt(S),T=y.path(C,v),w=s.insert(()=>T,":first-child");return w.attr("class","basic label-container"),m&&t.look!=="handDrawn"&&w.selectChildren("path").attr("style",m),a&&t.look!=="handDrawn"&&w.selectChildren("path").attr("style",a),w.attr("transform",`translate(0, ${g/4})`),u.attr("transform",`translate(${-c/2+(t.padding??0)-(o.x-(o.left??0))}, ${-g/4+(t.padding??0)-(o.y-(o.top??0))})`),xt(t,w),t.intersect=function(k){return ft.polygon(t,S,k)},s}x(qw,"slopedRect");async function Hw(e,t){const n={rx:0,ry:0,labelPaddingX:t.labelPaddingX??((t==null?void 0:t.padding)||0)*2,labelPaddingY:((t==null?void 0:t.padding)||0)*1};return ed(e,t,n)}x(Hw,"squareRect");async function Gw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=o.height+t.padding,c=o.width+u/4+t.padding,g=u/2,{cssStyles:d}=t,f=vt.svg(s),m=St(t,{});t.look!=="handDrawn"&&(m.roughness=0,m.fillStyle="solid");const y=[{x:-c/2+g,y:-u/2},{x:c/2-g,y:-u/2},...Go(-c/2+g,0,g,50,90,270),{x:c/2-g,y:u/2},...Go(c/2-g,0,g,50,270,450)],v=qt(y),S=f.path(v,m),C=s.insert(()=>S,":first-child");return C.attr("class","basic label-container outer-path"),d&&t.look!=="handDrawn"&&C.selectChildren("path").attr("style",d),a&&t.look!=="handDrawn"&&C.selectChildren("path").attr("style",a),xt(t,C),t.intersect=function(T){return ft.polygon(t,y,T)},s}x(Gw,"stadium");async function jw(e,t){return ed(e,t,{rx:5,ry:5})}x(jw,"state");function Yw(e,t,{config:{themeVariables:n}}){const{labelStyles:a,nodeStyles:s}=Ct(t);t.labelStyle=a;const{cssStyles:o}=t,{lineColor:u,stateBorder:c,nodeBorder:g}=n,d=e.insert("g").attr("class","node default").attr("id",t.domId||t.id),f=vt.svg(d),m=St(t,{});t.look!=="handDrawn"&&(m.roughness=0,m.fillStyle="solid");const y=f.circle(0,0,14,{...m,stroke:u,strokeWidth:2}),v=c??g,S=f.circle(0,0,5,{...m,fill:v,stroke:v,strokeWidth:2,fillStyle:"solid"}),C=d.insert(()=>y,":first-child");return C.insert(()=>S),o&&C.selectAll("path").attr("style",o),s&&C.selectAll("path").attr("style",s),xt(t,C),t.intersect=function(T){return ft.circle(t,7,T)},d}x(Yw,"stateEnd");function Ww(e,t,{config:{themeVariables:n}}){const{lineColor:a}=n,s=e.insert("g").attr("class","node default").attr("id",t.domId||t.id);let o;if(t.look==="handDrawn"){const c=vt.svg(s).circle(0,0,14,m4(a));o=s.insert(()=>c),o.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14)}else o=s.insert("circle",":first-child"),o.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14);return xt(t,o),t.intersect=function(u){return ft.circle(t,7,u)},s}x(Ww,"stateStart");async function Vw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=((t==null?void 0:t.padding)||0)/2,c=o.width+t.padding,g=o.height+t.padding,d=-o.width/2-u,f=-o.height/2-u,m=[{x:0,y:0},{x:c,y:0},{x:c,y:-g},{x:0,y:-g},{x:0,y:0},{x:-8,y:0},{x:c+8,y:0},{x:c+8,y:-g},{x:-8,y:-g},{x:-8,y:0}];if(t.look==="handDrawn"){const y=vt.svg(s),v=St(t,{}),S=y.rectangle(d-8,f,c+16,g,v),C=y.line(d,f,d,f+g,v),T=y.line(d+c,f,d+c,f+g,v);s.insert(()=>C,":first-child"),s.insert(()=>T,":first-child");const w=s.insert(()=>S,":first-child"),{cssStyles:k}=t;w.attr("class","basic label-container").attr("style",ei(k)),xt(t,w)}else{const y=Yr(s,c,g,m);a&&y.attr("style",a),xt(t,y)}return t.intersect=function(y){return ft.polygon(t,m,y)},s}x(Vw,"subroutine");async function Xw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),c=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),g=-u/2,d=-c/2,f=.2*c,m=.2*c,{cssStyles:y}=t,v=vt.svg(s),S=St(t,{}),C=[{x:g-f/2,y:d},{x:g+u+f/2,y:d},{x:g+u+f/2,y:d+c},{x:g-f/2,y:d+c}],T=[{x:g+u-f/2,y:d+c},{x:g+u+f/2,y:d+c},{x:g+u+f/2,y:d+c-m}];t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const w=qt(C),k=v.path(w,S),E=qt(T),O=v.path(E,{...S,fillStyle:"solid"}),L=s.insert(()=>O,":first-child");return L.insert(()=>k,":first-child"),L.attr("class","basic label-container"),y&&t.look!=="handDrawn"&&L.selectAll("path").attr("style",y),a&&t.look!=="handDrawn"&&L.selectAll("path").attr("style",a),xt(t,L),t.intersect=function(R){return ft.polygon(t,C,R)},s}x(Xw,"taggedRect");async function Qw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),g=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=g/4,f=.2*c,m=.2*g,y=g+d,{cssStyles:v}=t,S=vt.svg(s),C=St(t,{});t.look!=="handDrawn"&&(C.roughness=0,C.fillStyle="solid");const T=[{x:-c/2-c/2*.1,y:y/2},...qr(-c/2-c/2*.1,y/2,c/2+c/2*.1,y/2,d,.8),{x:c/2+c/2*.1,y:-y/2},{x:-c/2-c/2*.1,y:-y/2}],w=-c/2+c/2*.1,k=-y/2-m*.4,E=[{x:w+c-f,y:(k+g)*1.4},{x:w+c,y:k+g-m},{x:w+c,y:(k+g)*.9},...qr(w+c,(k+g)*1.3,w+c-f,(k+g)*1.5,-g*.03,.5)],O=qt(T),L=S.path(O,C),R=qt(E),P=S.path(R,{...C,fillStyle:"solid"}),J=s.insert(()=>P,":first-child");return J.insert(()=>L,":first-child"),J.attr("class","basic label-container"),v&&t.look!=="handDrawn"&&J.selectAll("path").attr("style",v),a&&t.look!=="handDrawn"&&J.selectAll("path").attr("style",a),J.attr("transform",`translate(0,${-d/2})`),u.attr("transform",`translate(${-c/2+(t.padding??0)-(o.x-(o.left??0))},${-g/2+(t.padding??0)-d/2-(o.y-(o.top??0))})`),xt(t,J),t.intersect=function(nt){return ft.polygon(t,T,nt)},s}x(Qw,"taggedWaveEdgedRectangle");async function Kw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=Math.max(o.width+t.padding,(t==null?void 0:t.width)||0),c=Math.max(o.height+t.padding,(t==null?void 0:t.height)||0),g=-u/2,d=-c/2,f=s.insert("rect",":first-child");return f.attr("class","text").attr("style",a).attr("rx",0).attr("ry",0).attr("x",g).attr("y",d).attr("width",u).attr("height",c),xt(t,f),t.intersect=function(m){return ft.rect(t,m)},s}x(Kw,"text");var iF=x((e,t,n,a,s,o)=>`M${e},${t}
    a${s},${o} 0,0,1 0,${-a}
    l${n},0
    a${s},${o} 0,0,1 0,${a}
    M${n},${-a}
    a${s},${o} 0,0,0 0,${a}
    l${-n},0`,"createCylinderPathD"),nF=x((e,t,n,a,s,o)=>[`M${e},${t}`,`M${e+n},${t}`,`a${s},${o} 0,0,0 0,${-a}`,`l${-n},0`,`a${s},${o} 0,0,0 0,${a}`,`l${n},0`].join(" "),"createOuterCylinderPathD"),rF=x((e,t,n,a,s,o)=>[`M${e+n/2},${-a/2}`,`a${s},${o} 0,0,0 0,${a}`].join(" "),"createInnerCylinderPathD");async function Zw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u,halfPadding:c}=await Rt(e,t,At(t)),g=t.look==="neo"?c*2:c,d=o.height+g,f=d/2,m=f/(2.5+d/50),y=o.width+m+g,{cssStyles:v}=t;let S;if(t.look==="handDrawn"){const C=vt.svg(s),T=nF(0,0,y,d,m,f),w=rF(0,0,y,d,m,f),k=C.path(T,St(t,{})),E=C.path(w,St(t,{fill:"none"}));S=s.insert(()=>E,":first-child"),S=s.insert(()=>k,":first-child"),S.attr("class","basic label-container"),v&&S.attr("style",v)}else{const C=iF(0,0,y,d,m,f);S=s.insert("path",":first-child").attr("d",C).attr("class","basic label-container").attr("style",ei(v)).attr("style",a),S.attr("class","basic label-container"),v&&S.selectAll("path").attr("style",v),a&&S.selectAll("path").attr("style",a)}return S.attr("label-offset-x",m),S.attr("transform",`translate(${-y/2}, ${d/2} )`),u.attr("transform",`translate(${-(o.width/2)-m-(o.x-(o.left??0))}, ${-(o.height/2)-(o.y-(o.top??0))})`),xt(t,S),t.intersect=function(C){const T=ft.rect(t,C),w=T.y-(t.y??0);if(f!=0&&(Math.abs(w)<(t.height??0)/2||Math.abs(w)==(t.height??0)/2&&Math.abs(T.x-(t.x??0))>(t.width??0)/2-m)){let k=m*m*(1-w*w/(f*f));k!=0&&(k=Math.sqrt(Math.abs(k))),k=m-k,C.x-(t.x??0)>0&&(k=-k),T.x+=k}return T},s}x(Zw,"tiltedCylinder");async function Jw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=o.width+t.padding,c=o.height+t.padding,g=[{x:-3*c/6,y:0},{x:u+3*c/6,y:0},{x:u,y:-c},{x:0,y:-c}];let d;const{cssStyles:f}=t;if(t.look==="handDrawn"){const m=vt.svg(s),y=St(t,{}),v=qt(g),S=m.path(v,y);d=s.insert(()=>S,":first-child").attr("transform",`translate(${-u/2}, ${c/2})`),f&&d.attr("style",f)}else d=Yr(s,u,c,g);return a&&d.attr("style",a),t.width=u,t.height=c,xt(t,d),t.intersect=function(m){return ft.polygon(t,g,m)},s}x(Jw,"trapezoid");async function tT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=60,c=20,g=Math.max(u,o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),d=Math.max(c,o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),{cssStyles:f}=t,m=vt.svg(s),y=St(t,{});t.look!=="handDrawn"&&(y.roughness=0,y.fillStyle="solid");const v=[{x:-g/2*.8,y:-d/2},{x:g/2*.8,y:-d/2},{x:g/2,y:-d/2*.6},{x:g/2,y:d/2},{x:-g/2,y:d/2},{x:-g/2,y:-d/2*.6}],S=qt(v),C=m.path(S,y),T=s.insert(()=>C,":first-child");return T.attr("class","basic label-container"),f&&t.look!=="handDrawn"&&T.selectChildren("path").attr("style",f),a&&t.look!=="handDrawn"&&T.selectChildren("path").attr("style",a),xt(t,T),t.intersect=function(w){return ft.polygon(t,v,w)},s}x(tT,"trapezoidalPentagon");async function eT(e,t){var k;const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Oe((k=Vt().flowchart)==null?void 0:k.htmlLabels),g=o.width+(t.padding??0),d=g+o.height,f=g+o.height,m=[{x:0,y:0},{x:f,y:0},{x:f/2,y:-d}],{cssStyles:y}=t,v=vt.svg(s),S=St(t,{});t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const C=qt(m),T=v.path(C,S),w=s.insert(()=>T,":first-child").attr("transform",`translate(${-d/2}, ${d/2})`);return y&&t.look!=="handDrawn"&&w.selectChildren("path").attr("style",y),a&&t.look!=="handDrawn"&&w.selectChildren("path").attr("style",a),t.width=g,t.height=d,xt(t,w),u.attr("transform",`translate(${-o.width/2-(o.x-(o.left??0))}, ${d/2-(o.height+(t.padding??0)/(c?2:1)-(o.y-(o.top??0)))})`),t.intersect=function(E){return st.info("Triangle intersect",t,m,E),ft.polygon(t,m,E)},s}x(eT,"triangle");async function iT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),g=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=g/8,f=g+d,{cssStyles:m}=t,v=70-c,S=v>0?v/2:0,C=vt.svg(s),T=St(t,{});t.look!=="handDrawn"&&(T.roughness=0,T.fillStyle="solid");const w=[{x:-c/2-S,y:f/2},...qr(-c/2-S,f/2,c/2+S,f/2,d,.8),{x:c/2+S,y:-f/2},{x:-c/2-S,y:-f/2}],k=qt(w),E=C.path(k,T),O=s.insert(()=>E,":first-child");return O.attr("class","basic label-container"),m&&t.look!=="handDrawn"&&O.selectAll("path").attr("style",m),a&&t.look!=="handDrawn"&&O.selectAll("path").attr("style",a),O.attr("transform",`translate(0,${-d/2})`),u.attr("transform",`translate(${-c/2+(t.padding??0)-(o.x-(o.left??0))},${-g/2+(t.padding??0)-d-(o.y-(o.top??0))})`),xt(t,O),t.intersect=function(L){return ft.polygon(t,w,L)},s}x(iT,"waveEdgedRectangle");async function nT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=100,c=50,g=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),d=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),f=g/d;let m=g,y=d;m>y*f?y=m/f:m=y*f,m=Math.max(m,u),y=Math.max(y,c);const v=Math.min(y*.2,y/4),S=y+v*2,{cssStyles:C}=t,T=vt.svg(s),w=St(t,{});t.look!=="handDrawn"&&(w.roughness=0,w.fillStyle="solid");const k=[{x:-m/2,y:S/2},...qr(-m/2,S/2,m/2,S/2,v,1),{x:m/2,y:-S/2},...qr(m/2,-S/2,-m/2,-S/2,v,-1)],E=qt(k),O=T.path(E,w),L=s.insert(()=>O,":first-child");return L.attr("class","basic label-container"),C&&t.look!=="handDrawn"&&L.selectAll("path").attr("style",C),a&&t.look!=="handDrawn"&&L.selectAll("path").attr("style",a),xt(t,L),t.intersect=function(R){return ft.polygon(t,k,R)},s}x(nT,"waveRectangle");async function rT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),g=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=5,f=-c/2,m=-g/2,{cssStyles:y}=t,v=vt.svg(s),S=St(t,{}),C=[{x:f-d,y:m-d},{x:f-d,y:m+g},{x:f+c,y:m+g},{x:f+c,y:m-d}],T=`M${f-d},${m-d} L${f+c},${m-d} L${f+c},${m+g} L${f-d},${m+g} L${f-d},${m-d}
                M${f-d},${m} L${f+c},${m}
                M${f},${m-d} L${f},${m+g}`;t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const w=v.path(T,S),k=s.insert(()=>w,":first-child");return k.attr("transform",`translate(${d/2}, ${d/2})`),k.attr("class","basic label-container"),y&&t.look!=="handDrawn"&&k.selectAll("path").attr("style",y),a&&t.look!=="handDrawn"&&k.selectAll("path").attr("style",a),u.attr("transform",`translate(${-(o.width/2)+d/2-(o.x-(o.left??0))}, ${-(o.height/2)+d/2-(o.y-(o.top??0))})`),xt(t,k),t.intersect=function(E){return ft.polygon(t,C,E)},s}x(rT,"windowPane");async function Vm(e,t){var ot,et,gt,pt;const n=t;if(n.alias&&(t.label=n.alias),t.look==="handDrawn"){const{themeVariables:ht}=Je(),{background:Dt}=ht,Bt={...t,id:t.id+"-background",look:"default",cssStyles:["stroke: none",`fill: ${Dt}`]};await Vm(e,Bt)}const a=Je();t.useHtmlLabels=a.htmlLabels;let s=((ot=a.er)==null?void 0:ot.diagramPadding)??10,o=((et=a.er)==null?void 0:et.entityPadding)??6;const{cssStyles:u}=t,{labelStyles:c,nodeStyles:g}=Ct(t);if(n.attributes.length===0&&t.label){const ht={rx:0,ry:0,labelPaddingX:s,labelPaddingY:s*1.5};lr(t.label,a)+ht.labelPaddingX*2<a.er.minEntityWidth&&(t.width=a.er.minEntityWidth);const Dt=await ed(e,t,ht);if(!Oe(a.htmlLabels)){const Bt=Dt.select("text"),Ht=(gt=Bt.node())==null?void 0:gt.getBBox();Bt.attr("transform",`translate(${-Ht.width/2}, 0)`)}return Dt}a.htmlLabels||(s*=1.25,o*=1.25);let d=At(t);d||(d="node default");const f=e.insert("g").attr("class",d).attr("id",t.domId||t.id),m=await ws(f,t.label??"",a,0,0,["name"],c);m.height+=o;let y=0;const v=[],S=[];let C=0,T=0,w=0,k=0,E=!0,O=!0;for(const ht of n.attributes){const Dt=await ws(f,ht.type,a,0,y,["attribute-type"],c);C=Math.max(C,Dt.width+s);const Bt=await ws(f,ht.name,a,0,y,["attribute-name"],c);T=Math.max(T,Bt.width+s);const Ht=await ws(f,ht.keys.join(),a,0,y,["attribute-keys"],c);w=Math.max(w,Ht.width+s);const Zt=await ws(f,ht.comment,a,0,y,["attribute-comment"],c);k=Math.max(k,Zt.width+s);const oe=Math.max(Dt.height,Bt.height,Ht.height,Zt.height)+o;S.push({yOffset:y,rowHeight:oe}),y+=oe}let L=4;w<=s&&(E=!1,w=0,L--),k<=s&&(O=!1,k=0,L--);const R=f.node().getBBox();if(m.width+s*2-(C+T+w+k)>0){const ht=m.width+s*2-(C+T+w+k);C+=ht/L,T+=ht/L,w>0&&(w+=ht/L),k>0&&(k+=ht/L)}const P=C+T+w+k,J=vt.svg(f),nt=St(t,{});t.look!=="handDrawn"&&(nt.roughness=0,nt.fillStyle="solid");let rt=0;S.length>0&&(rt=S.reduce((ht,Dt)=>ht+((Dt==null?void 0:Dt.rowHeight)??0),0));const X=Math.max(R.width+s*2,(t==null?void 0:t.width)||0,P),lt=Math.max((rt??0)+m.height,(t==null?void 0:t.height)||0),at=-X/2,W=-lt/2;f.selectAll("g:not(:first-child)").each((ht,Dt,Bt)=>{const Ht=jt(Bt[Dt]),Zt=Ht.attr("transform");let oe=0,ke=0;if(Zt){const ni=RegExp(/translate\(([^,]+),([^)]+)\)/).exec(Zt);ni&&(oe=parseFloat(ni[1]),ke=parseFloat(ni[2]),Ht.attr("class").includes("attribute-name")?oe+=C:Ht.attr("class").includes("attribute-keys")?oe+=C+T:Ht.attr("class").includes("attribute-comment")&&(oe+=C+T+w))}Ht.attr("transform",`translate(${at+s/2+oe}, ${ke+W+m.height+o/2})`)}),f.select(".name").attr("transform","translate("+-m.width/2+", "+(W+o/2)+")");const j=J.rectangle(at,W,X,lt,nt),M=f.insert(()=>j,":first-child").attr("style",u.join("")),{themeVariables:F}=Je(),{rowEven:$,rowOdd:ut,nodeBorder:D}=F;v.push(0);for(const[ht,Dt]of S.entries()){const Ht=(ht+1)%2===0&&Dt.yOffset!==0,Zt=J.rectangle(at,m.height+W+(Dt==null?void 0:Dt.yOffset),X,Dt==null?void 0:Dt.rowHeight,{...nt,fill:Ht?$:ut,stroke:D});f.insert(()=>Zt,"g.label").attr("style",u.join("")).attr("class",`row-rect-${Ht?"even":"odd"}`)}let H=J.line(at,m.height+W,X+at,m.height+W,nt);f.insert(()=>H).attr("class","divider"),H=J.line(C+at,m.height+W,C+at,lt+W,nt),f.insert(()=>H).attr("class","divider"),E&&(H=J.line(C+T+at,m.height+W,C+T+at,lt+W,nt),f.insert(()=>H).attr("class","divider")),O&&(H=J.line(C+T+w+at,m.height+W,C+T+w+at,lt+W,nt),f.insert(()=>H).attr("class","divider"));for(const ht of v)H=J.line(at,m.height+W+ht,X+at,m.height+W+ht,nt),f.insert(()=>H).attr("class","divider");if(xt(t,M),g&&t.look!=="handDrawn"){const ht=g.split(";"),Dt=(pt=ht==null?void 0:ht.filter(Bt=>Bt.includes("stroke")))==null?void 0:pt.map(Bt=>`${Bt}`).join("; ");f.selectAll("path").attr("style",Dt??""),f.selectAll(".row-rect-even path").attr("style",g)}return t.intersect=function(ht){return ft.rect(t,ht)},f}x(Vm,"erBox");async function ws(e,t,n,a=0,s=0,o=[],u=""){const c=e.insert("g").attr("class",`label ${o.join(" ")}`).attr("transform",`translate(${a}, ${s})`).attr("style",u);t!==lS(t)&&(t=lS(t),t=t.replaceAll("<","&lt;").replaceAll(">","&gt;"));const g=c.node().appendChild(await Gr(c,t,{width:lr(t,n)+100,style:u,useHtmlLabels:n.htmlLabels},n));if(t.includes("&lt;")||t.includes("&gt;")){let f=g.children[0];for(f.textContent=f.textContent.replaceAll("&lt;","<").replaceAll("&gt;",">");f.childNodes[0];)f=f.childNodes[0],f.textContent=f.textContent.replaceAll("&lt;","<").replaceAll("&gt;",">")}let d=g.getBBox();if(Oe(n.htmlLabels)){const f=g.children[0];f.style.textAlign="start";const m=jt(g);d=f.getBoundingClientRect(),m.attr("width",d.width),m.attr("height",d.height)}return d}x(ws,"addText");async function aT(e,t,n,a,s=n.class.padding??12){const o=a?0:3,u=e.insert("g").attr("class",At(t)).attr("id",t.domId||t.id);let c=null,g=null,d=null,f=null,m=0,y=0,v=0;if(c=u.insert("g").attr("class","annotation-group text"),t.annotations.length>0){const k=t.annotations[0];await To(c,{text:`«${k}»`},0),m=c.node().getBBox().height}g=u.insert("g").attr("class","label-group text"),await To(g,t,0,["font-weight: bolder"]);const S=g.node().getBBox();y=S.height,d=u.insert("g").attr("class","members-group text");let C=0;for(const k of t.members){const E=await To(d,k,C,[k.parseClassifier()]);C+=E+o}v=d.node().getBBox().height,v<=0&&(v=s/2),f=u.insert("g").attr("class","methods-group text");let T=0;for(const k of t.methods){const E=await To(f,k,T,[k.parseClassifier()]);T+=E+o}let w=u.node().getBBox();if(c!==null){const k=c.node().getBBox();c.attr("transform",`translate(${-k.width/2})`)}return g.attr("transform",`translate(${-S.width/2}, ${m})`),w=u.node().getBBox(),d.attr("transform",`translate(0, ${m+y+s*2})`),w=u.node().getBBox(),f.attr("transform",`translate(0, ${m+y+(v?v+s*4:s*2)})`),w=u.node().getBBox(),{shapeSvg:u,bbox:w}}x(aT,"textHelper");async function To(e,t,n,a=[]){const s=e.insert("g").attr("class","label").attr("style",a.join("; ")),o=Je();let u="useHtmlLabels"in t?t.useHtmlLabels:Oe(o.htmlLabels)??!0,c="";"text"in t?c=t.text:c=t.label,!u&&c.startsWith("\\")&&(c=c.substring(1)),$s(c)&&(u=!0);const g=await Gr(s,rm(Na(c)),{width:lr(c,o)+50,classes:"markdown-node-label",useHtmlLabels:u},o);let d,f=1;if(u){const m=g.children[0],y=jt(g);f=m.innerHTML.split("<br>").length,m.innerHTML.includes("</math>")&&(f+=m.innerHTML.split("<mrow>").length-1);const v=m.getElementsByTagName("img");if(v){const S=c.replace(/<img[^>]*>/g,"").trim()==="";await Promise.all([...v].map(C=>new Promise(T=>{function w(){var k;if(C.style.display="flex",C.style.flexDirection="column",S){const E=((k=o.fontSize)==null?void 0:k.toString())??window.getComputedStyle(document.body).fontSize,L=parseInt(E,10)*5+"px";C.style.minWidth=L,C.style.maxWidth=L}else C.style.width="100%";T(C)}x(w,"setupImage"),setTimeout(()=>{C.complete&&w()}),C.addEventListener("error",w),C.addEventListener("load",w)})))}d=m.getBoundingClientRect(),y.attr("width",d.width),y.attr("height",d.height)}else{a.includes("font-weight: bolder")&&jt(g).selectAll("tspan").attr("font-weight",""),f=g.children.length;const m=g.children[0];(g.textContent===""||g.textContent.includes("&gt"))&&(m.textContent=c[0]+c.substring(1).replaceAll("&gt;",">").replaceAll("&lt;","<").trim(),c[1]===" "&&(m.textContent=m.textContent[0]+" "+m.textContent.substring(1))),m.textContent==="undefined"&&(m.textContent=""),d=g.getBBox()}return s.attr("transform","translate(0,"+(-d.height/(2*f)+n)+")"),d.height}x(To,"addText");async function sT(e,t){var nt,rt;const n=Vt(),a=n.class.padding??12,s=a,o=t.useHtmlLabels??Oe(n.htmlLabels)??!0,u=t;u.annotations=u.annotations??[],u.members=u.members??[],u.methods=u.methods??[];const{shapeSvg:c,bbox:g}=await aT(e,t,n,o,s),{labelStyles:d,nodeStyles:f}=Ct(t);t.labelStyle=d,t.cssStyles=u.styles||"";const m=((nt=u.styles)==null?void 0:nt.join(";"))||f||"";t.cssStyles||(t.cssStyles=m.replaceAll("!important","").split(";"));const y=u.members.length===0&&u.methods.length===0&&!((rt=n.class)!=null&&rt.hideEmptyMembersBox),v=vt.svg(c),S=St(t,{});t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const C=g.width;let T=g.height;u.members.length===0&&u.methods.length===0?T+=s:u.members.length>0&&u.methods.length===0&&(T+=s*2);const w=-C/2,k=-T/2,E=v.rectangle(w-a,k-a-(y?a:u.members.length===0&&u.methods.length===0?-a/2:0),C+2*a,T+2*a+(y?a*2:u.members.length===0&&u.methods.length===0?-a:0),S),O=c.insert(()=>E,":first-child");O.attr("class","basic label-container");const L=O.node().getBBox();c.selectAll(".text").each((X,lt,at)=>{var ut;const W=jt(at[lt]),j=W.attr("transform");let M=0;if(j){const H=RegExp(/translate\(([^,]+),([^)]+)\)/).exec(j);H&&(M=parseFloat(H[2]))}let F=M+k+a-(y?a:u.members.length===0&&u.methods.length===0?-a/2:0);o||(F-=4);let $=w;(W.attr("class").includes("label-group")||W.attr("class").includes("annotation-group"))&&($=-((ut=W.node())==null?void 0:ut.getBBox().width)/2||0,c.selectAll("text").each(function(D,H,ot){window.getComputedStyle(ot[H]).textAnchor==="middle"&&($=0)})),W.attr("transform",`translate(${$}, ${F})`)});const R=c.select(".annotation-group").node().getBBox().height-(y?a/2:0)||0,P=c.select(".label-group").node().getBBox().height-(y?a/2:0)||0,J=c.select(".members-group").node().getBBox().height-(y?a/2:0)||0;if(u.members.length>0||u.methods.length>0||y){const X=v.line(L.x,R+P+k+a,L.x+L.width,R+P+k+a,S);c.insert(()=>X).attr("class","divider").attr("style",m)}if(y||u.members.length>0||u.methods.length>0){const X=v.line(L.x,R+P+J+k+s*2+a,L.x+L.width,R+P+J+k+a+s*2,S);c.insert(()=>X).attr("class","divider").attr("style",m)}if(u.look!=="handDrawn"&&c.selectAll("path").attr("style",m),O.select(":nth-child(2)").attr("style",m),c.selectAll(".divider").select("path").attr("style",m),t.labelStyle?c.selectAll("span").attr("style",t.labelStyle):c.selectAll("span").attr("style",m),!o){const X=RegExp(/color\s*:\s*([^;]*)/),lt=X.exec(m);if(lt){const at=lt[0].replace("color","fill");c.selectAll("tspan").attr("style",at)}else if(d){const at=X.exec(d);if(at){const W=at[0].replace("color","fill");c.selectAll("tspan").attr("style",W)}}}return xt(t,O),t.intersect=function(X){return ft.rect(t,X)},c}x(sT,"classBox");async function lT(e,t){var R,P;const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const s=t,o=t,u=20,c=20,g="verifyMethod"in t,d=At(t),f=e.insert("g").attr("class",d).attr("id",t.domId??t.id);let m;g?m=await vn(f,`&lt;&lt;${s.type}&gt;&gt;`,0,t.labelStyle):m=await vn(f,"&lt;&lt;Element&gt;&gt;",0,t.labelStyle);let y=m;const v=await vn(f,s.name,y,t.labelStyle+"; font-weight: bold;");if(y+=v+c,g){const J=await vn(f,`${s.requirementId?`ID: ${s.requirementId}`:""}`,y,t.labelStyle);y+=J;const nt=await vn(f,`${s.text?`Text: ${s.text}`:""}`,y,t.labelStyle);y+=nt;const rt=await vn(f,`${s.risk?`Risk: ${s.risk}`:""}`,y,t.labelStyle);y+=rt,await vn(f,`${s.verifyMethod?`Verification: ${s.verifyMethod}`:""}`,y,t.labelStyle)}else{const J=await vn(f,`${o.type?`Type: ${o.type}`:""}`,y,t.labelStyle);y+=J,await vn(f,`${o.docRef?`Doc Ref: ${o.docRef}`:""}`,y,t.labelStyle)}const S=(((R=f.node())==null?void 0:R.getBBox().width)??200)+u,C=(((P=f.node())==null?void 0:P.getBBox().height)??200)+u,T=-S/2,w=-C/2,k=vt.svg(f),E=St(t,{});t.look!=="handDrawn"&&(E.roughness=0,E.fillStyle="solid");const O=k.rectangle(T,w,S,C,E),L=f.insert(()=>O,":first-child");if(L.attr("class","basic label-container").attr("style",a),f.selectAll(".label").each((J,nt,rt)=>{const X=jt(rt[nt]),lt=X.attr("transform");let at=0,W=0;if(lt){const $=RegExp(/translate\(([^,]+),([^)]+)\)/).exec(lt);$&&(at=parseFloat($[1]),W=parseFloat($[2]))}const j=W-C/2;let M=T+u/2;(nt===0||nt===1)&&(M=at),X.attr("transform",`translate(${M}, ${j+u})`)}),y>m+v+c){const J=k.line(T,w+m+v+c,T+S,w+m+v+c,E);f.insert(()=>J).attr("style",a)}return xt(t,L),t.intersect=function(J){return ft.rect(t,J)},f}x(lT,"requirementBox");async function vn(e,t,n,a=""){if(t==="")return 0;const s=e.insert("g").attr("class","label").attr("style",a),o=Vt(),u=o.htmlLabels??!0,c=await Gr(s,rm(Na(t)),{width:lr(t,o)+50,classes:"markdown-node-label",useHtmlLabels:u,style:a},o);let g;if(u){const d=c.children[0],f=jt(c);g=d.getBoundingClientRect(),f.attr("width",g.width),f.attr("height",g.height)}else{const d=c.children[0];for(const f of d.children)f.textContent=f.textContent.replaceAll("&gt;",">").replaceAll("&lt;","<"),a&&f.setAttribute("style",a);g=c.getBBox(),g.height+=6}return s.attr("transform",`translate(${-g.width/2},${-g.height/2+n})`),g.height}x(vn,"addText");var aF=x(e=>{switch(e){case"Very High":return"red";case"High":return"orange";case"Medium":return null;case"Low":return"blue";case"Very Low":return"lightblue"}},"colorFromPriority");async function oT(e,t,{config:n}){var lt,at;const{labelStyles:a,nodeStyles:s}=Ct(t);t.labelStyle=a||"";const o=10,u=t.width;t.width=(t.width??200)-10;const{shapeSvg:c,bbox:g,label:d}=await Rt(e,t,At(t)),f=t.padding||10;let m="",y;"ticket"in t&&t.ticket&&((lt=n==null?void 0:n.kanban)!=null&&lt.ticketBaseUrl)&&(m=(at=n==null?void 0:n.kanban)==null?void 0:at.ticketBaseUrl.replace("#TICKET#",t.ticket),y=c.insert("svg:a",":first-child").attr("class","kanban-ticket-link").attr("xlink:href",m).attr("target","_blank"));const v={useHtmlLabels:t.useHtmlLabels,labelStyle:t.labelStyle||"",width:t.width,img:t.img,padding:t.padding||8,centerLabel:!1};let S,C;y?{label:S,bbox:C}=await zf(y,"ticket"in t&&t.ticket||"",v):{label:S,bbox:C}=await zf(c,"ticket"in t&&t.ticket||"",v);const{label:T,bbox:w}=await zf(c,"assigned"in t&&t.assigned||"",v);t.width=u;const k=10,E=(t==null?void 0:t.width)||0,O=Math.max(C.height,w.height)/2,L=Math.max(g.height+k*2,(t==null?void 0:t.height)||0)+O,R=-E/2,P=-L/2;d.attr("transform","translate("+(f-E/2)+", "+(-O-g.height/2)+")"),S.attr("transform","translate("+(f-E/2)+", "+(-O+g.height/2)+")"),T.attr("transform","translate("+(f+E/2-w.width-2*o)+", "+(-O+g.height/2)+")");let J;const{rx:nt,ry:rt}=t,{cssStyles:X}=t;if(t.look==="handDrawn"){const W=vt.svg(c),j=St(t,{}),M=nt||rt?W.path(jr(R,P,E,L,nt||0),j):W.rectangle(R,P,E,L,j);J=c.insert(()=>M,":first-child"),J.attr("class","basic label-container").attr("style",X||null)}else{J=c.insert("rect",":first-child"),J.attr("class","basic label-container __APA__").attr("style",s).attr("rx",nt??5).attr("ry",rt??5).attr("x",R).attr("y",P).attr("width",E).attr("height",L);const W="priority"in t&&t.priority;if(W){const j=c.append("line"),M=R+2,F=P+Math.floor((nt??0)/2),$=P+L-Math.floor((nt??0)/2);j.attr("x1",M).attr("y1",F).attr("x2",M).attr("y2",$).attr("stroke-width","4").attr("stroke",aF(W))}}return xt(t,J),t.height=L,t.intersect=function(W){return ft.rect(t,W)},c}x(oT,"kanbanItem");async function cT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,halfPadding:u,label:c}=await Rt(e,t,At(t)),g=o.width+10*u,d=o.height+8*u,f=.15*g,{cssStyles:m}=t,y=o.width+20,v=o.height+20,S=Math.max(g,y),C=Math.max(d,v);c.attr("transform",`translate(${-o.width/2}, ${-o.height/2})`);let T;const w=`M0 0 
    a${f},${f} 1 0,0 ${S*.25},${-1*C*.1}
    a${f},${f} 1 0,0 ${S*.25},0
    a${f},${f} 1 0,0 ${S*.25},0
    a${f},${f} 1 0,0 ${S*.25},${C*.1}

    a${f},${f} 1 0,0 ${S*.15},${C*.33}
    a${f*.8},${f*.8} 1 0,0 0,${C*.34}
    a${f},${f} 1 0,0 ${-1*S*.15},${C*.33}

    a${f},${f} 1 0,0 ${-1*S*.25},${C*.15}
    a${f},${f} 1 0,0 ${-1*S*.25},0
    a${f},${f} 1 0,0 ${-1*S*.25},0
    a${f},${f} 1 0,0 ${-1*S*.25},${-1*C*.15}

    a${f},${f} 1 0,0 ${-1*S*.1},${-1*C*.33}
    a${f*.8},${f*.8} 1 0,0 0,${-1*C*.34}
    a${f},${f} 1 0,0 ${S*.1},${-1*C*.33}
  H0 V0 Z`;if(t.look==="handDrawn"){const k=vt.svg(s),E=St(t,{}),O=k.path(w,E);T=s.insert(()=>O,":first-child"),T.attr("class","basic label-container").attr("style",ei(m))}else T=s.insert("path",":first-child").attr("class","basic label-container").attr("style",a).attr("d",w);return T.attr("transform",`translate(${-S/2}, ${-C/2})`),xt(t,T),t.calcIntersect=function(k,E){return ft.rect(k,E)},t.intersect=function(k){return st.info("Bang intersect",t,k),ft.rect(t,k)},s}x(cT,"bang");async function uT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,halfPadding:u,label:c}=await Rt(e,t,At(t)),g=o.width+2*u,d=o.height+2*u,f=.15*g,m=.25*g,y=.35*g,v=.2*g,{cssStyles:S}=t;let C;const T=`M0 0 
    a${f},${f} 0 0,1 ${g*.25},${-1*g*.1}
    a${y},${y} 1 0,1 ${g*.4},${-1*g*.1}
    a${m},${m} 1 0,1 ${g*.35},${g*.2}

    a${f},${f} 1 0,1 ${g*.15},${d*.35}
    a${v},${v} 1 0,1 ${-1*g*.15},${d*.65}

    a${m},${f} 1 0,1 ${-1*g*.25},${g*.15}
    a${y},${y} 1 0,1 ${-1*g*.5},0
    a${f},${f} 1 0,1 ${-1*g*.25},${-1*g*.15}

    a${f},${f} 1 0,1 ${-1*g*.1},${-1*d*.35}
    a${v},${v} 1 0,1 ${g*.1},${-1*d*.65}
  H0 V0 Z`;if(t.look==="handDrawn"){const w=vt.svg(s),k=St(t,{}),E=w.path(T,k);C=s.insert(()=>E,":first-child"),C.attr("class","basic label-container").attr("style",ei(S))}else C=s.insert("path",":first-child").attr("class","basic label-container").attr("style",a).attr("d",T);return c.attr("transform",`translate(${-o.width/2}, ${-o.height/2})`),C.attr("transform",`translate(${-g/2}, ${-d/2})`),xt(t,C),t.calcIntersect=function(w,k){return ft.rect(w,k)},t.intersect=function(w){return st.info("Cloud intersect",t,w),ft.rect(t,w)},s}x(uT,"cloud");async function hT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,halfPadding:u,label:c}=await Rt(e,t,At(t)),g=o.width+8*u,d=o.height+2*u,f=5,m=`
    M${-g/2} ${d/2-f}
    v${-d+2*f}
    q0,-${f} ${f},-${f}
    h${g-2*f}
    q${f},0 ${f},${f}
    v${d-2*f}
    q0,${f} -${f},${f}
    h${-g+2*f}
    q-${f},0 -${f},-${f}
    Z
  `,y=s.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+t.type).attr("style",a).attr("d",m);return s.append("line").attr("class","node-line-").attr("x1",-g/2).attr("y1",d/2).attr("x2",g/2).attr("y2",d/2),c.attr("transform",`translate(${-o.width/2}, ${-o.height/2})`),s.append(()=>c.node()),xt(t,y),t.calcIntersect=function(v,S){return ft.rect(v,S)},t.intersect=function(v){return ft.rect(t,v)},s}x(hT,"defaultMindmapNode");async function dT(e,t){const n={padding:t.padding??0};return Wm(e,t,n)}x(dT,"mindmapCircle");var sF=[{semanticName:"Process",name:"Rectangle",shortName:"rect",description:"Standard process shape",aliases:["proc","process","rectangle"],internalAliases:["squareRect"],handler:Hw},{semanticName:"Event",name:"Rounded Rectangle",shortName:"rounded",description:"Represents an event",aliases:["event"],internalAliases:["roundedRect"],handler:zw},{semanticName:"Terminal Point",name:"Stadium",shortName:"stadium",description:"Terminal point",aliases:["terminal","pill"],handler:Gw},{semanticName:"Subprocess",name:"Framed Rectangle",shortName:"fr-rect",description:"Subprocess",aliases:["subprocess","subproc","framed-rectangle","subroutine"],handler:Vw},{semanticName:"Database",name:"Cylinder",shortName:"cyl",description:"Database storage",aliases:["db","database","cylinder"],handler:gw},{semanticName:"Start",name:"Circle",shortName:"circle",description:"Starting point",aliases:["circ"],handler:Wm},{semanticName:"Bang",name:"Bang",shortName:"bang",description:"Bang",aliases:["bang"],handler:cT},{semanticName:"Cloud",name:"Cloud",shortName:"cloud",description:"cloud",aliases:["cloud"],handler:uT},{semanticName:"Decision",name:"Diamond",shortName:"diam",description:"Decision-making step",aliases:["decision","diamond","question"],handler:Iw},{semanticName:"Prepare Conditional",name:"Hexagon",shortName:"hex",description:"Preparation or condition step",aliases:["hexagon","prepare"],handler:Sw},{semanticName:"Data Input/Output",name:"Lean Right",shortName:"lean-r",description:"Represents input or output",aliases:["lean-right","in-out"],internalAliases:["lean_right"],handler:Mw},{semanticName:"Data Input/Output",name:"Lean Left",shortName:"lean-l",description:"Represents output or input",aliases:["lean-left","out-in"],internalAliases:["lean_left"],handler:Rw},{semanticName:"Priority Action",name:"Trapezoid Base Bottom",shortName:"trap-b",description:"Priority action",aliases:["priority","trapezoid-bottom","trapezoid"],handler:Jw},{semanticName:"Manual Operation",name:"Trapezoid Base Top",shortName:"trap-t",description:"Represents a manual task",aliases:["manual","trapezoid-top","inv-trapezoid"],internalAliases:["inv_trapezoid"],handler:Aw},{semanticName:"Stop",name:"Double Circle",shortName:"dbl-circ",description:"Represents a stop point",aliases:["double-circle"],internalAliases:["doublecircle"],handler:pw},{semanticName:"Text Block",name:"Text Block",shortName:"text",description:"Text block",handler:Kw},{semanticName:"Card",name:"Notched Rectangle",shortName:"notch-rect",description:"Represents a card",aliases:["card","notched-rectangle"],handler:aw},{semanticName:"Lined/Shaded Process",name:"Lined Rectangle",shortName:"lin-rect",description:"Lined process shape",aliases:["lined-rectangle","lined-process","lin-proc","shaded-process"],handler:Uw},{semanticName:"Start",name:"Small Circle",shortName:"sm-circ",description:"Small starting point",aliases:["start","small-circle"],internalAliases:["stateStart"],handler:Ww},{semanticName:"Stop",name:"Framed Circle",shortName:"fr-circ",description:"Stop point",aliases:["stop","framed-circle"],internalAliases:["stateEnd"],handler:Yw},{semanticName:"Fork/Join",name:"Filled Rectangle",shortName:"fork",description:"Fork or join in process flow",aliases:["join"],internalAliases:["forkJoin"],handler:bw},{semanticName:"Collate",name:"Hourglass",shortName:"hourglass",description:"Represents a collate operation",aliases:["hourglass","collate"],handler:xw},{semanticName:"Comment",name:"Curly Brace",shortName:"brace",description:"Adds a comment",aliases:["comment","brace-l"],handler:cw},{semanticName:"Comment Right",name:"Curly Brace",shortName:"brace-r",description:"Adds a comment",handler:uw},{semanticName:"Comment with braces on both sides",name:"Curly Braces",shortName:"braces",description:"Adds a comment",handler:hw},{semanticName:"Com Link",name:"Lightning Bolt",shortName:"bolt",description:"Communication link",aliases:["com-link","lightning-bolt"],handler:Dw},{semanticName:"Document",name:"Document",shortName:"doc",description:"Represents a document",aliases:["doc","document"],handler:iT},{semanticName:"Delay",name:"Half-Rounded Rectangle",shortName:"delay",description:"Represents a delay",aliases:["half-rounded-rectangle"],handler:vw},{semanticName:"Direct Access Storage",name:"Horizontal Cylinder",shortName:"h-cyl",description:"Direct access storage",aliases:["das","horizontal-cylinder"],handler:Zw},{semanticName:"Disk Storage",name:"Lined Cylinder",shortName:"lin-cyl",description:"Disk storage",aliases:["disk","lined-cylinder"],handler:Lw},{semanticName:"Display",name:"Curved Trapezoid",shortName:"curv-trap",description:"Represents a display",aliases:["curved-trapezoid","display"],handler:dw},{semanticName:"Divided Process",name:"Divided Rectangle",shortName:"div-rect",description:"Divided process shape",aliases:["div-proc","divided-rectangle","divided-process"],handler:fw},{semanticName:"Extract",name:"Triangle",shortName:"tri",description:"Extraction process",aliases:["extract","triangle"],handler:eT},{semanticName:"Internal Storage",name:"Window Pane",shortName:"win-pane",description:"Internal storage",aliases:["internal-storage","window-pane"],handler:rT},{semanticName:"Junction",name:"Filled Circle",shortName:"f-circ",description:"Junction point",aliases:["junction","filled-circle"],handler:mw},{semanticName:"Loop Limit",name:"Trapezoidal Pentagon",shortName:"notch-pent",description:"Loop limit step",aliases:["loop-limit","notched-pentagon"],handler:tT},{semanticName:"Manual File",name:"Flipped Triangle",shortName:"flip-tri",description:"Manual file operation",aliases:["manual-file","flipped-triangle"],handler:yw},{semanticName:"Manual Input",name:"Sloped Rectangle",shortName:"sl-rect",description:"Manual input step",aliases:["manual-input","sloped-rectangle"],handler:qw},{semanticName:"Multi-Document",name:"Stacked Document",shortName:"docs",description:"Multiple documents",aliases:["documents","st-doc","stacked-document"],handler:Pw},{semanticName:"Multi-Process",name:"Stacked Rectangle",shortName:"st-rect",description:"Multiple processes",aliases:["procs","processes","stacked-rectangle"],handler:Ow},{semanticName:"Stored Data",name:"Bow Tie Rectangle",shortName:"bow-rect",description:"Stored data",aliases:["stored-data","bow-tie-rectangle"],handler:rw},{semanticName:"Summary",name:"Crossed Circle",shortName:"cross-circ",description:"Summary",aliases:["summary","crossed-circle"],handler:ow},{semanticName:"Tagged Document",name:"Tagged Document",shortName:"tag-doc",description:"Tagged document",aliases:["tag-doc","tagged-document"],handler:Qw},{semanticName:"Tagged Process",name:"Tagged Rectangle",shortName:"tag-rect",description:"Tagged process",aliases:["tagged-rectangle","tag-proc","tagged-process"],handler:Xw},{semanticName:"Paper Tape",name:"Flag",shortName:"flag",description:"Paper tape",aliases:["paper-tape"],handler:nT},{semanticName:"Odd",name:"Odd",shortName:"odd",description:"Odd shape",internalAliases:["rect_left_inv_arrow"],handler:Fw},{semanticName:"Lined Document",name:"Lined Document",shortName:"lin-doc",description:"Lined document",aliases:["lined-document"],handler:Bw}],lF=x(()=>{const t=[...Object.entries({state:jw,choice:sw,note:Nw,rectWithTitle:$w,labelRect:Ew,iconSquare:Tw,iconCircle:_w,icon:Cw,iconRounded:ww,imageSquare:kw,anchor:nw,kanbanItem:oT,mindmapCircle:dT,defaultMindmapNode:hT,classBox:sT,erBox:Vm,requirementBox:lT}),...sF.flatMap(n=>[n.shortName,..."aliases"in n?n.aliases:[],..."internalAliases"in n?n.internalAliases:[]].map(s=>[s,n.handler]))];return Object.fromEntries(t)},"generateShapeMap"),gT=lF();function oF(e){return e in gT}x(oF,"isValidShape");var id=new Map;async function fT(e,t,n){let a,s;t.shape==="rect"&&(t.rx&&t.ry?t.shape="roundedRect":t.shape="squareRect");const o=t.shape?gT[t.shape]:void 0;if(!o)throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);if(t.link){let u;n.config.securityLevel==="sandbox"?u="_top":t.linkTarget&&(u=t.linkTarget||"_blank"),a=e.insert("svg:a").attr("xlink:href",t.link).attr("target",u??null),s=await o(a,t,n)}else s=await o(e,t,n),a=s;return t.tooltip&&s.attr("title",t.tooltip),id.set(t.id,a),t.haveCallback&&a.attr("class",a.attr("class")+" clickable"),a}x(fT,"insertNode");var yU=x((e,t)=>{id.set(t.id,e)},"setNodeElem"),bU=x(()=>{id.clear()},"clear"),vU=x(e=>{const t=id.get(e.id);st.trace("Transforming node",e.diff,e,"translate("+(e.x-e.width/2-5)+", "+e.width/2+")");const n=8,a=e.diff||0;return e.clusterNode?t.attr("transform","translate("+(e.x+a-e.width/2)+", "+(e.y-e.height/2-n)+")"):t.attr("transform","translate("+e.x+", "+e.y+")"),a},"positionNode"),cF=x((e,t,n,a,s,o)=>{t.arrowTypeStart&&gx(e,"start",t.arrowTypeStart,n,a,s,o),t.arrowTypeEnd&&gx(e,"end",t.arrowTypeEnd,n,a,s,o)},"addEdgeMarkers"),uF={arrow_cross:{type:"cross",fill:!1},arrow_point:{type:"point",fill:!0},arrow_barb:{type:"barb",fill:!0},arrow_circle:{type:"circle",fill:!1},aggregation:{type:"aggregation",fill:!1},extension:{type:"extension",fill:!1},composition:{type:"composition",fill:!0},dependency:{type:"dependency",fill:!0},lollipop:{type:"lollipop",fill:!1},only_one:{type:"onlyOne",fill:!1},zero_or_one:{type:"zeroOrOne",fill:!1},one_or_more:{type:"oneOrMore",fill:!1},zero_or_more:{type:"zeroOrMore",fill:!1},requirement_arrow:{type:"requirement_arrow",fill:!1},requirement_contains:{type:"requirement_contains",fill:!1}},gx=x((e,t,n,a,s,o,u)=>{var m;const c=uF[n];if(!c){st.warn(`Unknown arrow type: ${n}`);return}const g=c.type,f=`${s}_${o}-${g}${t==="start"?"Start":"End"}`;if(u&&u.trim()!==""){const y=u.replace(/[^\dA-Za-z]/g,"_"),v=`${f}_${y}`;if(!document.getElementById(v)){const S=document.getElementById(f);if(S){const C=S.cloneNode(!0);C.id=v,C.querySelectorAll("path, circle, line").forEach(w=>{w.setAttribute("stroke",u),c.fill&&w.setAttribute("fill",u)}),(m=S.parentNode)==null||m.appendChild(C)}}e.attr(`marker-${t}`,`url(${a}#${v})`)}else e.attr(`marker-${t}`,`url(${a}#${f})`)},"addEdgeMarker"),Rh=new Map,je=new Map,SU=x(()=>{Rh.clear(),je.clear()},"clear"),bo=x(e=>e?e.reduce((n,a)=>n+";"+a,""):"","getLabelStyles"),hF=x(async(e,t)=>{let n=Oe(Vt().flowchart.htmlLabels);const a=await Gr(e,t.label,{style:bo(t.labelStyle),useHtmlLabels:n,addSvgBackground:!0,isNode:!1});st.info("abc82",t,t.labelType);const s=e.insert("g").attr("class","edgeLabel"),o=s.insert("g").attr("class","label");o.node().appendChild(a);let u=a.getBBox();if(n){const g=a.children[0],d=jt(a);u=g.getBoundingClientRect(),d.attr("width",u.width),d.attr("height",u.height)}o.attr("transform","translate("+-u.width/2+", "+-u.height/2+")"),Rh.set(t.id,s),t.width=u.width,t.height=u.height;let c;if(t.startLabelLeft){const g=await Ca(t.startLabelLeft,bo(t.labelStyle)),d=e.insert("g").attr("class","edgeTerminals"),f=d.insert("g").attr("class","inner");c=f.node().appendChild(g);const m=g.getBBox();f.attr("transform","translate("+-m.width/2+", "+-m.height/2+")"),je.get(t.id)||je.set(t.id,{}),je.get(t.id).startLeft=d,ko(c,t.startLabelLeft)}if(t.startLabelRight){const g=await Ca(t.startLabelRight,bo(t.labelStyle)),d=e.insert("g").attr("class","edgeTerminals"),f=d.insert("g").attr("class","inner");c=d.node().appendChild(g),f.node().appendChild(g);const m=g.getBBox();f.attr("transform","translate("+-m.width/2+", "+-m.height/2+")"),je.get(t.id)||je.set(t.id,{}),je.get(t.id).startRight=d,ko(c,t.startLabelRight)}if(t.endLabelLeft){const g=await Ca(t.endLabelLeft,bo(t.labelStyle)),d=e.insert("g").attr("class","edgeTerminals"),f=d.insert("g").attr("class","inner");c=f.node().appendChild(g);const m=g.getBBox();f.attr("transform","translate("+-m.width/2+", "+-m.height/2+")"),d.node().appendChild(g),je.get(t.id)||je.set(t.id,{}),je.get(t.id).endLeft=d,ko(c,t.endLabelLeft)}if(t.endLabelRight){const g=await Ca(t.endLabelRight,bo(t.labelStyle)),d=e.insert("g").attr("class","edgeTerminals"),f=d.insert("g").attr("class","inner");c=f.node().appendChild(g);const m=g.getBBox();f.attr("transform","translate("+-m.width/2+", "+-m.height/2+")"),d.node().appendChild(g),je.get(t.id)||je.set(t.id,{}),je.get(t.id).endRight=d,ko(c,t.endLabelRight)}return a},"insertEdgeLabel");function ko(e,t){Vt().flowchart.htmlLabels&&e&&(e.style.width=t.length*9+"px",e.style.height="12px")}x(ko,"setTerminalWidth");var dF=x((e,t)=>{st.debug("Moving label abc88 ",e.id,e.label,Rh.get(e.id),t);let n=t.updatedPath?t.updatedPath:t.originalPath;const a=Vt(),{subGraphTitleTotalMargin:s}=wm(a);if(e.label){const o=Rh.get(e.id);let u=e.x,c=e.y;if(n){const g=an.calcLabelPosition(n);st.debug("Moving label "+e.label+" from (",u,",",c,") to (",g.x,",",g.y,") abc88"),t.updatedPath&&(u=g.x,c=g.y)}o.attr("transform",`translate(${u}, ${c+s/2})`)}if(e.startLabelLeft){const o=je.get(e.id).startLeft;let u=e.x,c=e.y;if(n){const g=an.calcTerminalLabelPosition(e.arrowTypeStart?10:0,"start_left",n);u=g.x,c=g.y}o.attr("transform",`translate(${u}, ${c})`)}if(e.startLabelRight){const o=je.get(e.id).startRight;let u=e.x,c=e.y;if(n){const g=an.calcTerminalLabelPosition(e.arrowTypeStart?10:0,"start_right",n);u=g.x,c=g.y}o.attr("transform",`translate(${u}, ${c})`)}if(e.endLabelLeft){const o=je.get(e.id).endLeft;let u=e.x,c=e.y;if(n){const g=an.calcTerminalLabelPosition(e.arrowTypeEnd?10:0,"end_left",n);u=g.x,c=g.y}o.attr("transform",`translate(${u}, ${c})`)}if(e.endLabelRight){const o=je.get(e.id).endRight;let u=e.x,c=e.y;if(n){const g=an.calcTerminalLabelPosition(e.arrowTypeEnd?10:0,"end_right",n);u=g.x,c=g.y}o.attr("transform",`translate(${u}, ${c})`)}},"positionEdgeLabel"),gF=x((e,t)=>{const n=e.x,a=e.y,s=Math.abs(t.x-n),o=Math.abs(t.y-a),u=e.width/2,c=e.height/2;return s>=u||o>=c},"outsideNode"),fF=x((e,t,n)=>{st.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(n)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);const a=e.x,s=e.y,o=Math.abs(a-n.x),u=e.width/2;let c=n.x<t.x?u-o:u+o;const g=e.height/2,d=Math.abs(t.y-n.y),f=Math.abs(t.x-n.x);if(Math.abs(s-t.y)*u>Math.abs(a-t.x)*g){let m=n.y<t.y?t.y-g-s:s-g-t.y;c=f*m/d;const y={x:n.x<t.x?n.x+c:n.x-f+c,y:n.y<t.y?n.y+d-m:n.y-d+m};return c===0&&(y.x=t.x,y.y=t.y),f===0&&(y.x=t.x),d===0&&(y.y=t.y),st.debug(`abc89 top/bottom calc, Q ${d}, q ${m}, R ${f}, r ${c}`,y),y}else{n.x<t.x?c=t.x-u-a:c=a-u-t.x;let m=d*c/f,y=n.x<t.x?n.x+f-c:n.x-f+c,v=n.y<t.y?n.y+m:n.y-m;return st.debug(`sides calc abc89, Q ${d}, q ${m}, R ${f}, r ${c}`,{_x:y,_y:v}),c===0&&(y=t.x,v=t.y),f===0&&(y=t.x),d===0&&(v=t.y),{x:y,y:v}}},"intersection"),fx=x((e,t)=>{st.warn("abc88 cutPathAtIntersect",e,t);let n=[],a=e[0],s=!1;return e.forEach(o=>{if(st.info("abc88 checking point",o,t),!gF(t,o)&&!s){const u=fF(t,a,o);st.debug("abc88 inside",o,a,u),st.debug("abc88 intersection",u,t);let c=!1;n.forEach(g=>{c=c||g.x===u.x&&g.y===u.y}),n.some(g=>g.x===u.x&&g.y===u.y)?st.warn("abc88 no intersect",u,n):n.push(u),s=!0}else st.warn("abc88 outside",o,a),a=o,s||n.push(o)}),st.debug("returning points",n),n},"cutPathAtIntersect");function pT(e){const t=[],n=[];for(let a=1;a<e.length-1;a++){const s=e[a-1],o=e[a],u=e[a+1];(s.x===o.x&&o.y===u.y&&Math.abs(o.x-u.x)>5&&Math.abs(o.y-s.y)>5||s.y===o.y&&o.x===u.x&&Math.abs(o.x-s.x)>5&&Math.abs(o.y-u.y)>5)&&(t.push(o),n.push(a))}return{cornerPoints:t,cornerPointPositions:n}}x(pT,"extractCornerPoints");var px=x(function(e,t,n){const a=t.x-e.x,s=t.y-e.y,o=Math.sqrt(a*a+s*s),u=n/o;return{x:t.x-u*a,y:t.y-u*s}},"findAdjacentPoint"),pF=x(function(e){const{cornerPointPositions:t}=pT(e),n=[];for(let a=0;a<e.length;a++)if(t.includes(a)){const s=e[a-1],o=e[a+1],u=e[a],c=px(s,u,5),g=px(o,u,5),d=g.x-c.x,f=g.y-c.y;n.push(c);const m=Math.sqrt(2)*2;let y={x:u.x,y:u.y};if(Math.abs(o.x-s.x)>10&&Math.abs(o.y-s.y)>=10){st.debug("Corner point fixing",Math.abs(o.x-s.x),Math.abs(o.y-s.y));const v=5;u.x===c.x?y={x:d<0?c.x-v+m:c.x+v-m,y:f<0?c.y-m:c.y+m}:y={x:d<0?c.x-m:c.x+m,y:f<0?c.y-v+m:c.y+v-m}}else st.debug("Corner point skipping fixing",Math.abs(o.x-s.x),Math.abs(o.y-s.y));n.push(y,g)}else n.push(e[a]);return n},"fixCorners"),mF=x(function(e,t,n,a,s,o,u){var X;const{handDrawnSeed:c}=Vt();let g=t.points,d=!1;const f=s;var m=o;const y=[];for(const lt in t.cssCompiledStyles)YC(lt)||y.push(t.cssCompiledStyles[lt]);m.intersect&&f.intersect&&(g=g.slice(1,t.points.length-1),g.unshift(f.intersect(g[0])),st.debug("Last point APA12",t.start,"-->",t.end,g[g.length-1],m,m.intersect(g[g.length-1])),g.push(m.intersect(g[g.length-1]))),t.toCluster&&(st.info("to cluster abc88",n.get(t.toCluster)),g=fx(t.points,n.get(t.toCluster).node),d=!0),t.fromCluster&&(st.debug("from cluster abc88",n.get(t.fromCluster),JSON.stringify(g,null,2)),g=fx(g.reverse(),n.get(t.fromCluster).node).reverse(),d=!0);let v=g.filter(lt=>!Number.isNaN(lt.y));v=pF(v);let S=$u;switch(S=sh,t.curve){case"linear":S=sh;break;case"basis":S=$u;break;case"cardinal":S=Q2;break;case"bumpX":S=j2;break;case"bumpY":S=Y2;break;case"catmullRom":S=Z2;break;case"monotoneX":S=r1;break;case"monotoneY":S=a1;break;case"natural":S=l1;break;case"step":S=o1;break;case"stepAfter":S=u1;break;case"stepBefore":S=c1;break;default:S=$u}const{x:C,y:T}=p4(t),w=ZB().x(C).y(T).curve(S);let k;switch(t.thickness){case"normal":k="edge-thickness-normal";break;case"thick":k="edge-thickness-thick";break;case"invisible":k="edge-thickness-invisible";break;default:k="edge-thickness-normal"}switch(t.pattern){case"solid":k+=" edge-pattern-solid";break;case"dotted":k+=" edge-pattern-dotted";break;case"dashed":k+=" edge-pattern-dashed";break;default:k+=" edge-pattern-solid"}let E,O=w(v);const L=Array.isArray(t.style)?t.style:t.style?[t.style]:[];let R=L.find(lt=>lt==null?void 0:lt.startsWith("stroke:"));if(t.look==="handDrawn"){const lt=vt.svg(e);Object.assign([],v);const at=lt.path(O,{roughness:.3,seed:c});k+=" transition",E=jt(at).select("path").attr("id",t.id).attr("class"," "+k+(t.classes?" "+t.classes:"")).attr("style",L?L.reduce((j,M)=>j+";"+M,""):"");let W=E.attr("d");E.attr("d",W),e.node().appendChild(E.node())}else{const lt=y.join(";"),at=L?L.reduce((M,F)=>M+F+";",""):"";let W="";t.animate&&(W=" edge-animation-fast"),t.animation&&(W=" edge-animation-"+t.animation);const j=lt?lt+";"+at+";":at;E=e.append("path").attr("d",O).attr("id",t.id).attr("class"," "+k+(t.classes?" "+t.classes:"")+(W??"")).attr("style",j),R=(X=j.match(/stroke:([^;]+)/))==null?void 0:X[1]}let P="";(Vt().flowchart.arrowMarkerAbsolute||Vt().state.arrowMarkerAbsolute)&&(P=g2(!0)),st.info("arrowTypeStart",t.arrowTypeStart),st.info("arrowTypeEnd",t.arrowTypeEnd),cF(E,t,P,u,a,R);const J=Math.floor(g.length/2),nt=g[J];an.isLabelCoordinateInPath(nt,E.attr("d"))||(d=!0);let rt={};return d&&(rt.updatedPath=g),rt.originalPath=t.points,rt},"insertEdge"),yF=x((e,t,n,a)=>{t.forEach(s=>{BF[s](e,n,a)})},"insertMarkers"),bF=x((e,t,n)=>{st.trace("Making markers for ",n),e.append("defs").append("marker").attr("id",n+"_"+t+"-extensionStart").attr("class","marker extension "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),e.append("defs").append("marker").attr("id",n+"_"+t+"-extensionEnd").attr("class","marker extension "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},"extension"),vF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-compositionStart").attr("class","marker composition "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id",n+"_"+t+"-compositionEnd").attr("class","marker composition "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"composition"),SF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-aggregationStart").attr("class","marker aggregation "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id",n+"_"+t+"-aggregationEnd").attr("class","marker aggregation "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"aggregation"),xF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-dependencyStart").attr("class","marker dependency "+t).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id",n+"_"+t+"-dependencyEnd").attr("class","marker dependency "+t).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},"dependency"),CF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-lollipopStart").attr("class","marker lollipop "+t).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),e.append("defs").append("marker").attr("id",n+"_"+t+"-lollipopEnd").attr("class","marker lollipop "+t).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},"lollipop"),_F=x((e,t,n)=>{e.append("marker").attr("id",n+"_"+t+"-pointEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",8).attr("markerHeight",8).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),e.append("marker").attr("id",n+"_"+t+"-pointStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",8).attr("markerHeight",8).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"point"),wF=x((e,t,n)=>{e.append("marker").attr("id",n+"_"+t+"-circleEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),e.append("marker").attr("id",n+"_"+t+"-circleStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"circle"),TF=x((e,t,n)=>{e.append("marker").attr("id",n+"_"+t+"-crossEnd").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),e.append("marker").attr("id",n+"_"+t+"-crossStart").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},"cross"),kF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","userSpaceOnUse").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"barb"),AF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-onlyOneStart").attr("class","marker onlyOne "+t).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("d","M9,0 L9,18 M15,0 L15,18"),e.append("defs").append("marker").attr("id",n+"_"+t+"-onlyOneEnd").attr("class","marker onlyOne "+t).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("d","M3,0 L3,18 M9,0 L9,18")},"only_one"),EF=x((e,t,n)=>{const a=e.append("defs").append("marker").attr("id",n+"_"+t+"-zeroOrOneStart").attr("class","marker zeroOrOne "+t).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto");a.append("circle").attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),a.append("path").attr("d","M9,0 L9,18");const s=e.append("defs").append("marker").attr("id",n+"_"+t+"-zeroOrOneEnd").attr("class","marker zeroOrOne "+t).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto");s.append("circle").attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),s.append("path").attr("d","M21,0 L21,18")},"zero_or_one"),RF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-oneOrMoreStart").attr("class","marker oneOrMore "+t).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),e.append("defs").append("marker").attr("id",n+"_"+t+"-oneOrMoreEnd").attr("class","marker oneOrMore "+t).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18")},"one_or_more"),MF=x((e,t,n)=>{const a=e.append("defs").append("marker").attr("id",n+"_"+t+"-zeroOrMoreStart").attr("class","marker zeroOrMore "+t).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto");a.append("circle").attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),a.append("path").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18");const s=e.append("defs").append("marker").attr("id",n+"_"+t+"-zeroOrMoreEnd").attr("class","marker zeroOrMore "+t).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto");s.append("circle").attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),s.append("path").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")},"zero_or_more"),DF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-requirement_arrowEnd").attr("refX",20).attr("refY",10).attr("markerWidth",20).attr("markerHeight",20).attr("orient","auto").append("path").attr("d",`M0,0
      L20,10
      M20,10
      L0,20`)},"requirement_arrow"),LF=x((e,t,n)=>{const a=e.append("defs").append("marker").attr("id",n+"_"+t+"-requirement_containsStart").attr("refX",0).attr("refY",10).attr("markerWidth",20).attr("markerHeight",20).attr("orient","auto").append("g");a.append("circle").attr("cx",10).attr("cy",10).attr("r",9).attr("fill","none"),a.append("line").attr("x1",1).attr("x2",19).attr("y1",10).attr("y2",10),a.append("line").attr("y1",1).attr("y2",19).attr("x1",10).attr("x2",10)},"requirement_contains"),BF={extension:bF,composition:vF,aggregation:SF,dependency:xF,lollipop:CF,point:_F,circle:wF,cross:TF,barb:kF,only_one:AF,zero_or_one:EF,one_or_more:RF,zero_or_more:MF,requirement_arrow:DF,requirement_contains:LF},OF=yF,PF={common:Vs,getConfig:Je,insertCluster:GI,insertEdge:mF,insertEdgeLabel:hF,insertMarkers:OF,insertNode:fT,interpolateToCurve:Rm,labelHelper:Rt,log:st,positionEdgeLabel:dF},jo={},mT=x(e=>{for(const t of e)jo[t.name]=t},"registerLayoutLoaders"),NF=x(()=>{mT([{name:"dagre",loader:x(async()=>await Qt(()=>import("./dagre-5GWH7T2D-hmkwKR9s.js"),__vite__mapDeps([0,1,2,3,4,5])),"loader")},{name:"cose-bilkent",loader:x(async()=>await Qt(()=>import("./cose-bilkent-S5V4N54A-fgi8zSDJ.js"),__vite__mapDeps([6,7])),"loader")}])},"registerDefaultLayoutLoaders");NF();var xU=x(async(e,t)=>{if(!(e.layoutAlgorithm in jo))throw new Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);const n=jo[e.layoutAlgorithm];return(await n.loader()).render(e,t,PF,{algorithm:n.algorithm})},"render"),CU=x((e="",{fallback:t="dagre"}={})=>{if(e in jo)return e;if(t in jo)return st.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`),t;throw new Error(`Both layout algorithms ${e} and ${t} are not registered.`)},"getRegisteredLayoutAlgorithm"),yT="comm",bT="rule",vT="decl",IF="@import",FF="@namespace",$F="@keyframes",zF="@layer",ST=Math.abs,Xm=String.fromCharCode;function xT(e){return e.trim()}function ju(e,t,n){return e.replace(t,n)}function UF(e,t,n){return e.indexOf(t,n)}function Es(e,t){return e.charCodeAt(t)|0}function Gs(e,t,n){return e.slice(t,n)}function Sn(e){return e.length}function qF(e){return e.length}function Ru(e,t){return t.push(e),e}var nd=1,js=1,CT=0,Xi=0,Te=0,Js="";function Qm(e,t,n,a,s,o,u,c){return{value:e,root:t,parent:n,type:a,props:s,children:o,line:nd,column:js,length:u,return:"",siblings:c}}function HF(){return Te}function GF(){return Te=Xi>0?Es(Js,--Xi):0,js--,Te===10&&(js=1,nd--),Te}function ln(){return Te=Xi<CT?Es(Js,Xi++):0,js++,Te===10&&(js=1,nd++),Te}function Ir(){return Es(Js,Xi)}function Yu(){return Xi}function rd(e,t){return Gs(Js,e,t)}function Yo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jF(e){return nd=js=1,CT=Sn(Js=e),Xi=0,[]}function YF(e){return Js="",e}function Uf(e){return xT(rd(Xi-1,Ip(e===91?e+2:e===40?e+1:e)))}function WF(e){for(;(Te=Ir())&&Te<33;)ln();return Yo(e)>2||Yo(Te)>3?"":" "}function VF(e,t){for(;--t&&ln()&&!(Te<48||Te>102||Te>57&&Te<65||Te>70&&Te<97););return rd(e,Yu()+(t<6&&Ir()==32&&ln()==32))}function Ip(e){for(;ln();)switch(Te){case e:return Xi;case 34:case 39:e!==34&&e!==39&&Ip(Te);break;case 40:e===41&&Ip(e);break;case 92:ln();break}return Xi}function XF(e,t){for(;ln()&&e+Te!==57;)if(e+Te===84&&Ir()===47)break;return"/*"+rd(t,Xi-1)+"*"+Xm(e===47?e:ln())}function QF(e){for(;!Yo(Ir());)ln();return rd(e,Xi)}function KF(e){return YF(Wu("",null,null,null,[""],e=jF(e),0,[0],e))}function Wu(e,t,n,a,s,o,u,c,g){for(var d=0,f=0,m=u,y=0,v=0,S=0,C=1,T=1,w=1,k=0,E="",O=s,L=o,R=a,P=E;T;)switch(S=k,k=ln()){case 40:if(S!=108&&Es(P,m-1)==58){UF(P+=ju(Uf(k),"&","&\f"),"&\f",ST(d?c[d-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:P+=Uf(k);break;case 9:case 10:case 13:case 32:P+=WF(S);break;case 92:P+=VF(Yu()-1,7);continue;case 47:switch(Ir()){case 42:case 47:Ru(ZF(XF(ln(),Yu()),t,n,g),g),(Yo(S||1)==5||Yo(Ir()||1)==5)&&Sn(P)&&Gs(P,-1,void 0)!==" "&&(P+=" ");break;default:P+="/"}break;case 123*C:c[d++]=Sn(P)*w;case 125*C:case 59:case 0:switch(k){case 0:case 125:T=0;case 59+f:w==-1&&(P=ju(P,/\f/g,"")),v>0&&(Sn(P)-m||C===0&&S===47)&&Ru(v>32?yx(P+";",a,n,m-1,g):yx(ju(P," ","")+";",a,n,m-2,g),g);break;case 59:P+=";";default:if(Ru(R=mx(P,t,n,d,f,s,c,E,O=[],L=[],m,o),o),k===123)if(f===0)Wu(P,t,R,R,O,o,m,c,L);else{switch(y){case 99:if(Es(P,3)===110)break;case 108:if(Es(P,2)===97)break;default:f=0;case 100:case 109:case 115:}f?Wu(e,R,R,a&&Ru(mx(e,R,R,0,0,s,c,E,s,O=[],m,L),L),s,L,m,c,a?O:L):Wu(P,R,R,R,[""],L,0,c,L)}}d=f=v=0,C=w=1,E=P="",m=u;break;case 58:m=1+Sn(P),v=S;default:if(C<1){if(k==123)--C;else if(k==125&&C++==0&&GF()==125)continue}switch(P+=Xm(k),k*C){case 38:w=f>0?1:(P+="\f",-1);break;case 44:c[d++]=(Sn(P)-1)*w,w=1;break;case 64:Ir()===45&&(P+=Uf(ln())),y=Ir(),f=m=Sn(E=P+=QF(Yu())),k++;break;case 45:S===45&&Sn(P)==2&&(C=0)}}return o}function mx(e,t,n,a,s,o,u,c,g,d,f,m){for(var y=s-1,v=s===0?o:[""],S=qF(v),C=0,T=0,w=0;C<a;++C)for(var k=0,E=Gs(e,y+1,y=ST(T=u[C])),O=e;k<S;++k)(O=xT(T>0?v[k]+" "+E:ju(E,/&\f/g,v[k])))&&(g[w++]=O);return Qm(e,t,n,s===0?bT:c,g,d,f,m)}function ZF(e,t,n,a){return Qm(e,t,n,yT,Xm(HF()),Gs(e,2,-2),0,a)}function yx(e,t,n,a,s){return Qm(e,t,n,vT,Gs(e,0,a),Gs(e,a+1,-1),a,s)}function Fp(e,t){for(var n="",a=0;a<e.length;a++)n+=t(e[a],a,e,t)||"";return n}function JF(e,t,n,a){switch(e.type){case zF:if(e.children.length)break;case IF:case FF:case vT:return e.return=e.return||e.value;case yT:return"";case $F:return e.return=e.value+"{"+Fp(e.children,a)+"}";case bT:if(!Sn(e.value=e.props.join(",")))return""}return Sn(n=Fp(e.children,a))?e.return=e.value+"{"+n+"}":""}var t6=QC(Object.keys,Object),e6=Object.prototype,i6=e6.hasOwnProperty;function n6(e){if(!Wh(e))return t6(e);var t=[];for(var n in Object(e))i6.call(e,n)&&n!="constructor"&&t.push(n);return t}var $p=Pa(En,"DataView"),zp=Pa(En,"Promise"),Up=Pa(En,"Set"),qp=Pa(En,"WeakMap"),bx="[object Map]",r6="[object Object]",vx="[object Promise]",Sx="[object Set]",xx="[object WeakMap]",Cx="[object DataView]",a6=Oa($p),s6=Oa(Ho),l6=Oa(zp),o6=Oa(Up),c6=Oa(qp),ya=Qs;($p&&ya(new $p(new ArrayBuffer(1)))!=Cx||Ho&&ya(new Ho)!=bx||zp&&ya(zp.resolve())!=vx||Up&&ya(new Up)!=Sx||qp&&ya(new qp)!=xx)&&(ya=function(e){var t=Qs(e),n=t==r6?e.constructor:void 0,a=n?Oa(n):"";if(a)switch(a){case a6:return Cx;case s6:return bx;case l6:return vx;case o6:return Sx;case c6:return xx}return t});var u6="[object Map]",h6="[object Set]",d6=Object.prototype,g6=d6.hasOwnProperty;function _x(e){if(e==null)return!0;if(Vh(e)&&(vh(e)||typeof e=="string"||typeof e.splice=="function"||Am(e)||Em(e)||bh(e)))return!e.length;var t=ya(e);if(t==u6||t==h6)return!e.size;if(Wh(e))return!n6(e).length;for(var n in e)if(g6.call(e,n))return!1;return!0}var _T="c4",f6=x(e=>/^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e),"detector"),p6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./c4Diagram-FPNF74CW-CrDsmkIJ.js");return{diagram:t}},__vite__mapDeps([8,9]));return{id:_T,diagram:e}},"loader"),m6={id:_T,detector:f6,loader:p6},y6=m6,wT="flowchart",b6=x((e,t)=>{var n,a;return((n=t==null?void 0:t.flowchart)==null?void 0:n.defaultRenderer)==="dagre-wrapper"||((a=t==null?void 0:t.flowchart)==null?void 0:a.defaultRenderer)==="elk"?!1:/^\s*graph/.test(e)},"detector"),v6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./flowDiagram-PVAE7QVJ-DgAZRCrg.js");return{diagram:t}},__vite__mapDeps([10,11,12,13,14]));return{id:wT,diagram:e}},"loader"),S6={id:wT,detector:b6,loader:v6},x6=S6,TT="flowchart-v2",C6=x((e,t)=>{var n,a,s;return((n=t==null?void 0:t.flowchart)==null?void 0:n.defaultRenderer)==="dagre-d3"?!1:(((a=t==null?void 0:t.flowchart)==null?void 0:a.defaultRenderer)==="elk"&&(t.layout="elk"),/^\s*graph/.test(e)&&((s=t==null?void 0:t.flowchart)==null?void 0:s.defaultRenderer)==="dagre-wrapper"?!0:/^\s*flowchart/.test(e))},"detector"),_6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./flowDiagram-PVAE7QVJ-DgAZRCrg.js");return{diagram:t}},__vite__mapDeps([10,11,12,13,14]));return{id:TT,diagram:e}},"loader"),w6={id:TT,detector:C6,loader:_6},T6=w6,kT="er",k6=x(e=>/^\s*erDiagram/.test(e),"detector"),A6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./erDiagram-AWTI2OKA-BhiXUMwR.js");return{diagram:t}},__vite__mapDeps([15,12,13,14]));return{id:kT,diagram:e}},"loader"),E6={id:kT,detector:k6,loader:A6},R6=E6,AT="gitGraph",M6=x(e=>/^\s*gitGraph/.test(e),"detector"),D6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./gitGraphDiagram-NY62KEGX-BibxgzD4.js");return{diagram:t}},__vite__mapDeps([16,17,18,19,2,4,5]));return{id:AT,diagram:e}},"loader"),L6={id:AT,detector:M6,loader:D6},B6=L6,ET="gantt",O6=x(e=>/^\s*gantt/.test(e),"detector"),P6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./ganttDiagram-OWAHRB6G-LejQyW61.js");return{diagram:t}},__vite__mapDeps([20,21,22,23]));return{id:ET,diagram:e}},"loader"),N6={id:ET,detector:O6,loader:P6},I6=N6,RT="info",F6=x(e=>/^\s*info/.test(e),"detector"),$6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./infoDiagram-STP46IZ2-RWNQY9q9.js");return{diagram:t}},__vite__mapDeps([24,19,2,4,5]));return{id:RT,diagram:e}},"loader"),z6={id:RT,detector:F6,loader:$6},MT="pie",U6=x(e=>/^\s*pie/.test(e),"detector"),q6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./pieDiagram-ADFJNKIX-DBmeeDga.js");return{diagram:t}},__vite__mapDeps([25,17,19,2,4,5,26,27,22]));return{id:MT,diagram:e}},"loader"),H6={id:MT,detector:U6,loader:q6},DT="quadrantChart",G6=x(e=>/^\s*quadrantChart/.test(e),"detector"),j6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./quadrantDiagram-LMRXKWRM-BHofHa7H.js");return{diagram:t}},__vite__mapDeps([28,21,22,23]));return{id:DT,diagram:e}},"loader"),Y6={id:DT,detector:G6,loader:j6},W6=Y6,LT="xychart",V6=x(e=>/^\s*xychart(-beta)?/.test(e),"detector"),X6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./xychartDiagram-6GGTOJPD-DG9PxQx5.js");return{diagram:t}},__vite__mapDeps([29,22,27,21,23]));return{id:LT,diagram:e}},"loader"),Q6={id:LT,detector:V6,loader:X6},K6=Q6,BT="requirement",Z6=x(e=>/^\s*requirement(Diagram)?/.test(e),"detector"),J6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./requirementDiagram-4UW4RH46-DV8vlAr2.js");return{diagram:t}},__vite__mapDeps([30,12,13]));return{id:BT,diagram:e}},"loader"),t$={id:BT,detector:Z6,loader:J6},e$=t$,OT="sequence",i$=x(e=>/^\s*sequenceDiagram/.test(e),"detector"),n$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./sequenceDiagram-C3RYC4MD-lM2TTkmS.js");return{diagram:t}},__vite__mapDeps([31,9,18]));return{id:OT,diagram:e}},"loader"),r$={id:OT,detector:i$,loader:n$},a$=r$,PT="class",s$=x((e,t)=>{var n;return((n=t==null?void 0:t.class)==null?void 0:n.defaultRenderer)==="dagre-wrapper"?!1:/^\s*classDiagram/.test(e)},"detector"),l$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./classDiagram-KNZD7YFC-SgIKW1En.js");return{diagram:t}},__vite__mapDeps([32,33,11,12,13]));return{id:PT,diagram:e}},"loader"),o$={id:PT,detector:s$,loader:l$},c$=o$,NT="classDiagram",u$=x((e,t)=>{var n;return/^\s*classDiagram/.test(e)&&((n=t==null?void 0:t.class)==null?void 0:n.defaultRenderer)==="dagre-wrapper"?!0:/^\s*classDiagram-v2/.test(e)},"detector"),h$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./classDiagram-v2-RKCZMP56-SgIKW1En.js");return{diagram:t}},__vite__mapDeps([34,33,11,12,13]));return{id:NT,diagram:e}},"loader"),d$={id:NT,detector:u$,loader:h$},g$=d$,IT="state",f$=x((e,t)=>{var n;return((n=t==null?void 0:t.state)==null?void 0:n.defaultRenderer)==="dagre-wrapper"?!1:/^\s*stateDiagram/.test(e)},"detector"),p$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./stateDiagram-KXAO66HF-D9mMByz2.js");return{diagram:t}},__vite__mapDeps([35,36,12,13,1,2,3,4]));return{id:IT,diagram:e}},"loader"),m$={id:IT,detector:f$,loader:p$},y$=m$,FT="stateDiagram",b$=x((e,t)=>{var n;return!!(/^\s*stateDiagram-v2/.test(e)||/^\s*stateDiagram/.test(e)&&((n=t==null?void 0:t.state)==null?void 0:n.defaultRenderer)==="dagre-wrapper")},"detector"),v$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./stateDiagram-v2-UMBNRL4Z-DYRG9z22.js");return{diagram:t}},__vite__mapDeps([37,36,12,13]));return{id:FT,diagram:e}},"loader"),S$={id:FT,detector:b$,loader:v$},x$=S$,$T="journey",C$=x(e=>/^\s*journey/.test(e),"detector"),_$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./journeyDiagram-BIP6EPQ6-CaiTw4IX.js");return{diagram:t}},__vite__mapDeps([38,9,11,26]));return{id:$T,diagram:e}},"loader"),w$={id:$T,detector:C$,loader:_$},T$=w$,k$=x((e,t,n)=>{st.debug(`rendering svg for syntax error
`);const a=lO(t),s=a.append("g");a.attr("viewBox","0 0 2412 512"),f2(a,100,512,!0),s.append("path").attr("class","error-icon").attr("d","m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"),s.append("path").attr("class","error-icon").attr("d","m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"),s.append("path").attr("class","error-icon").attr("d","m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"),s.append("path").attr("class","error-icon").attr("d","m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"),s.append("path").attr("class","error-icon").attr("d","m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"),s.append("path").attr("class","error-icon").attr("d","m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"),s.append("text").attr("class","error-text").attr("x",1440).attr("y",250).attr("font-size","150px").style("text-anchor","middle").text("Syntax error in text"),s.append("text").attr("class","error-text").attr("x",1250).attr("y",400).attr("font-size","100px").style("text-anchor","middle").text(`mermaid version ${n}`)},"draw"),zT={draw:k$},A$=zT,E$={db:{},renderer:zT,parser:{parse:x(()=>{},"parse")}},R$=E$,UT="flowchart-elk",M$=x((e,t={})=>{var n;return/^\s*flowchart-elk/.test(e)||/^\s*(flowchart|graph)/.test(e)&&((n=t==null?void 0:t.flowchart)==null?void 0:n.defaultRenderer)==="elk"?(t.layout="elk",!0):!1},"detector"),D$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./flowDiagram-PVAE7QVJ-DgAZRCrg.js");return{diagram:t}},__vite__mapDeps([10,11,12,13,14]));return{id:UT,diagram:e}},"loader"),L$={id:UT,detector:M$,loader:D$},B$=L$,qT="timeline",O$=x(e=>/^\s*timeline/.test(e),"detector"),P$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./timeline-definition-XQNQX7LJ-BdU7yAll.js");return{diagram:t}},__vite__mapDeps([39,26]));return{id:qT,diagram:e}},"loader"),N$={id:qT,detector:O$,loader:P$},I$=N$,HT="mindmap",F$=x(e=>/^\s*mindmap/.test(e),"detector"),$$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./mindmap-definition-Q6HEUPPD-DKCbJxCT.js");return{diagram:t}},__vite__mapDeps([40,12,13]));return{id:HT,diagram:e}},"loader"),z$={id:HT,detector:F$,loader:$$},U$=z$,GT="kanban",q$=x(e=>/^\s*kanban/.test(e),"detector"),H$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./kanban-definition-6OIFK2YF-Byzheawm.js");return{diagram:t}},__vite__mapDeps([41,11]));return{id:GT,diagram:e}},"loader"),G$={id:GT,detector:q$,loader:H$},j$=G$,jT="sankey",Y$=x(e=>/^\s*sankey(-beta)?/.test(e),"detector"),W$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./sankeyDiagram-GR3RE2ED-DziPQcAC.js");return{diagram:t}},__vite__mapDeps([42,27,22]));return{id:jT,diagram:e}},"loader"),V$={id:jT,detector:Y$,loader:W$},X$=V$,YT="packet",Q$=x(e=>/^\s*packet(-beta)?/.test(e),"detector"),K$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./diagram-S2PKOQOG-CZ0Zv6MR.js");return{diagram:t}},__vite__mapDeps([43,17,19,2,4,5]));return{id:YT,diagram:e}},"loader"),Z$={id:YT,detector:Q$,loader:K$},WT="radar",J$=x(e=>/^\s*radar-beta/.test(e),"detector"),tz=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./diagram-QEK2KX5R-tWZ1YwVs.js");return{diagram:t}},__vite__mapDeps([44,17,19,2,4,5]));return{id:WT,diagram:e}},"loader"),ez={id:WT,detector:J$,loader:tz},VT="block",iz=x(e=>/^\s*block(-beta)?/.test(e),"detector"),nz=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./blockDiagram-QIGZ2CNN-DyXaONwk.js");return{diagram:t}},__vite__mapDeps([45,11,5,2,1,14]));return{id:VT,diagram:e}},"loader"),rz={id:VT,detector:iz,loader:nz},az=rz,XT="architecture",sz=x(e=>/^\s*architecture/.test(e),"detector"),lz=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./architectureDiagram-W76B3OCA-OfQTx0_G.js");return{diagram:t}},__vite__mapDeps([46,17,19,2,4,5,7]));return{id:XT,diagram:e}},"loader"),oz={id:XT,detector:sz,loader:lz},cz=oz,QT="treemap",uz=x(e=>/^\s*treemap/.test(e),"detector"),hz=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./diagram-N5W7TBWH-KRqv06lC.js");return{diagram:t}},__vite__mapDeps([47,13,17,19,2,4,5,23,27,22]));return{id:QT,diagram:e}},"loader"),dz={id:QT,detector:uz,loader:hz},wx=!1,ad=x(()=>{wx||(wx=!0,Ju("error",R$,e=>e.toLowerCase().trim()==="error"),Ju("---",{db:{clear:x(()=>{},"clear")},styles:{},renderer:{draw:x(()=>{},"draw")},parser:{parse:x(()=>{throw new Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks")},"parse")},init:x(()=>null,"init")},e=>e.toLowerCase().trimStart().startsWith("---")),Qf(B$,U$,cz),Qf(y6,j$,g$,c$,R6,I6,z6,H6,e$,a$,T6,x6,I$,B6,x$,y$,T$,W6,X$,Z$,K6,az,ez,dz))},"addDiagrams"),gz=x(async()=>{st.debug("Loading registered diagrams");const t=(await Promise.allSettled(Object.entries(Ta).map(async([n,{detector:a,loader:s}])=>{if(s)try{tp(n)}catch{try{const{diagram:o,id:u}=await s();Ju(u,o,a)}catch(o){throw st.error(`Failed to load external diagram with key ${n}. Removing from detectors.`),delete Ta[n],o}}}))).filter(n=>n.status==="rejected");if(t.length>0){st.error(`Failed to load ${t.length} external diagrams`);for(const n of t)st.error(n);throw new Error(`Failed to load ${t.length} external diagrams`)}},"loadRegisteredDiagrams"),fz="graphics-document document";function KT(e,t){e.attr("role",fz),t!==""&&e.attr("aria-roledescription",t)}x(KT,"setA11yDiagramInfo");function ZT(e,t,n,a){if(e.insert!==void 0){if(n){const s=`chart-desc-${a}`;e.attr("aria-describedby",s),e.insert("desc",":first-child").attr("id",s).text(n)}if(t){const s=`chart-title-${a}`;e.attr("aria-labelledby",s),e.insert("title",":first-child").attr("id",s).text(t)}}}x(ZT,"addSVGa11yTitleDescription");var wa,Hp=(wa=class{constructor(t,n,a,s,o){this.type=t,this.text=n,this.db=a,this.parser=s,this.renderer=o}static async fromText(t,n={}){var d,f;const a=Je(),s=Zp(t,a);t=gN(t)+`
`;try{tp(s)}catch{const m=FM(s);if(!m)throw new e2(`Diagram ${s} not found.`);const{id:y,diagram:v}=await m();Ju(y,v)}const{db:o,parser:u,renderer:c,init:g}=tp(s);return u.parser&&(u.parser.yy=o),(d=o.clear)==null||d.call(o),g==null||g(a),n.title&&((f=o.setDiagramTitle)==null||f.call(o,n.title)),await u.parse(t),new wa(s,t,o,u,c)}async render(t,n){await this.renderer.draw(this.text,t,n,this)}getParser(){return this.parser}getType(){return this.type}},x(wa,"Diagram"),wa),Tx=[],pz=x(()=>{Tx.forEach(e=>{e()}),Tx=[]},"attachFunctions"),mz=x(e=>e.replace(/^\s*%%(?!{)[^\n]+\n?/gm,"").trimStart(),"cleanupComments");function JT(e){const t=e.match(t2);if(!t)return{text:e,metadata:{}};let n=f4(t[1],{schema:g4})??{};n=typeof n=="object"&&!Array.isArray(n)?n:{};const a={};return n.displayMode&&(a.displayMode=n.displayMode.toString()),n.title&&(a.title=n.title.toString()),n.config&&(a.config=n.config),{text:e.slice(t[0].length),metadata:a}}x(JT,"extractFrontMatter");var yz=x(e=>e.replace(/\r\n?/g,`
`).replace(/<(\w+)([^>]*)>/g,(t,n,a)=>"<"+n+a.replace(/="([^"]*)"/g,"='$1'")+">"),"cleanupText"),bz=x(e=>{const{text:t,metadata:n}=JT(e),{displayMode:a,title:s,config:o={}}=n;return a&&(o.gantt||(o.gantt={}),o.gantt.displayMode=a),{title:s,config:o,text:t}},"processFrontmatter"),vz=x(e=>{const t=an.detectInit(e)??{},n=an.detectDirective(e,"wrap");return Array.isArray(n)?t.wrap=n.some(({type:a})=>a==="wrap"):(n==null?void 0:n.type)==="wrap"&&(t.wrap=!0),{text:tN(e),directive:t}},"processDirectives");function Km(e){const t=yz(e),n=bz(t),a=vz(n.text),s=Om(n.config,a.directive);return e=mz(a.text),{code:e,title:n.title,config:s}}x(Km,"preprocessDiagram");function tk(e){const t=new TextEncoder().encode(e),n=Array.from(t,a=>String.fromCodePoint(a)).join("");return btoa(n)}x(tk,"toBase64");var Sz=5e4,xz="graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa",Cz="sandbox",_z="loose",wz="http://www.w3.org/2000/svg",Tz="http://www.w3.org/1999/xlink",kz="http://www.w3.org/1999/xhtml",Az="100%",Ez="100%",Rz="border:0;margin:0;",Mz="margin:0",Dz="allow-top-navigation-by-user-activation allow-popups",Lz='The "iframe" tag is not supported by your browser.',Bz=["foreignobject"],Oz=["dominant-baseline"];function Zm(e){const t=Km(e);return Ku(),t3(t.config??{}),t}x(Zm,"processAndSetConfigs");async function ek(e,t){ad();try{const{code:n,config:a}=Zm(e);return{diagramType:(await nk(n)).type,config:a}}catch(n){if(t!=null&&t.suppressErrors)return!1;throw n}}x(ek,"parse");var kx=x((e,t,n=[])=>`
.${e} ${t} { ${n.join(" !important; ")} !important; }`,"cssImportantStyles"),Pz=x((e,t=new Map)=>{var a;let n="";if(e.themeCSS!==void 0&&(n+=`
${e.themeCSS}`),e.fontFamily!==void 0&&(n+=`
:root { --mermaid-font-family: ${e.fontFamily}}`),e.altFontFamily!==void 0&&(n+=`
:root { --mermaid-alt-font-family: ${e.altFontFamily}}`),t instanceof Map){const c=e.htmlLabels??((a=e.flowchart)==null?void 0:a.htmlLabels)?["> *","span"]:["rect","polygon","ellipse","circle","path"];t.forEach(g=>{_x(g.styles)||c.forEach(d=>{n+=kx(g.id,d,g.styles)}),_x(g.textStyles)||(n+=kx(g.id,"tspan",((g==null?void 0:g.textStyles)||[]).map(d=>d.replace("color","fill"))))})}return n},"createCssStyles"),Nz=x((e,t,n,a)=>{const s=Pz(e,n),o=v3(t,s,e.themeVariables);return Fp(KF(`${a}{${o}}`),JF)},"createUserStyles"),Iz=x((e="",t,n)=>{let a=e;return!n&&!t&&(a=a.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g,'marker-end="url(#')),a=Na(a),a=a.replace(/<br>/g,"<br/>"),a},"cleanUpSvgCode"),Fz=x((e="",t)=>{var s,o;const n=(o=(s=t==null?void 0:t.viewBox)==null?void 0:s.baseVal)!=null&&o.height?t.viewBox.baseVal.height+"px":Ez,a=tk(`<body style="${Mz}">${e}</body>`);return`<iframe style="width:${Az};height:${n};${Rz}" src="data:text/html;charset=UTF-8;base64,${a}" sandbox="${Dz}">
  ${Lz}
</iframe>`},"putIntoIFrame"),Ax=x((e,t,n,a,s)=>{const o=e.append("div");o.attr("id",n),a&&o.attr("style",a);const u=o.append("svg").attr("id",t).attr("width","100%").attr("xmlns",wz);return s&&u.attr("xmlns:xlink",s),u.append("g"),e},"appendDivSvgG");function Gp(e,t){return e.append("iframe").attr("id",t).attr("style","width: 100%; height: 100%;").attr("sandbox","")}x(Gp,"sandboxedIframe");var $z=x((e,t,n,a)=>{var s,o,u;(s=e.getElementById(t))==null||s.remove(),(o=e.getElementById(n))==null||o.remove(),(u=e.getElementById(a))==null||u.remove()},"removeExistingElements"),zz=x(async function(e,t,n){var lt,at,W,j,M,F;ad();const a=Zm(t);t=a.code;const s=Je();st.debug(s),t.length>((s==null?void 0:s.maxTextSize)??Sz)&&(t=xz);const o="#"+e,u="i"+e,c="#"+u,g="d"+e,d="#"+g,f=x(()=>{const ut=jt(y?c:d).node();ut&&"remove"in ut&&ut.remove()},"removeTempElements");let m=jt("body");const y=s.securityLevel===Cz,v=s.securityLevel===_z,S=s.fontFamily;if(n!==void 0){if(n&&(n.innerHTML=""),y){const $=Gp(jt(n),u);m=jt($.nodes()[0].contentDocument.body),m.node().style.margin=0}else m=jt(n);Ax(m,e,g,`font-family: ${S}`,Tz)}else{if($z(document,e,g,u),y){const $=Gp(jt("body"),u);m=jt($.nodes()[0].contentDocument.body),m.node().style.margin=0}else m=jt("body");Ax(m,e,g)}let C,T;try{C=await Hp.fromText(t,{title:a.title})}catch($){if(s.suppressErrorRendering)throw f(),$;C=await Hp.fromText("error"),T=$}const w=m.select(d).node(),k=C.type,E=w.firstChild,O=E.firstChild,L=(at=(lt=C.renderer).getClasses)==null?void 0:at.call(lt,t,C),R=Nz(s,k,L,o),P=document.createElement("style");P.innerHTML=R,E.insertBefore(P,O);try{await C.renderer.draw(t,e,Vv.version,C)}catch($){throw s.suppressErrorRendering?f():A$.draw(t,e,Vv.version),$}const J=m.select(`${d} svg`),nt=(j=(W=C.db).getAccTitle)==null?void 0:j.call(W),rt=(F=(M=C.db).getAccDescription)==null?void 0:F.call(M);rk(k,J,nt,rt),m.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns",kz);let X=m.select(d).node().innerHTML;if(st.debug("config.arrowMarkerAbsolute",s.arrowMarkerAbsolute),X=Iz(X,y,Oe(s.arrowMarkerAbsolute)),y){const $=m.select(d+" svg").node();X=Fz(X,$)}else v||(X=Is.sanitize(X,{ADD_TAGS:Bz,ADD_ATTR:Oz,HTML_INTEGRATION_POINTS:{foreignobject:!0}}));if(pz(),T)throw T;return f(),{diagramType:k,svg:X,bindFunctions:C.db.bindFunctions}},"render");function ik(e={}){var a;const t=Le({},e);t!=null&&t.fontFamily&&!((a=t.themeVariables)!=null&&a.fontFamily)&&(t.themeVariables||(t.themeVariables={}),t.themeVariables.fontFamily=t.fontFamily),ZM(t),t!=null&&t.theme&&t.theme in nr?t.themeVariables=nr[t.theme].getThemeVariables(t.themeVariables):t&&(t.themeVariables=nr.default.getThemeVariables(t.themeVariables));const n=typeof t=="object"?KM(t):s2();Kp(n.logLevel),ad()}x(ik,"initialize");var nk=x((e,t={})=>{const{code:n}=Km(e);return Hp.fromText(n,t)},"getDiagramFromText");function rk(e,t,n,a){KT(t,e),ZT(t,n,a,t.attr("id"))}x(rk,"addA11yInfo");var Da=Object.freeze({render:zz,parse:ek,getDiagramFromText:nk,initialize:ik,getConfig:Je,setConfig:l2,getSiteConfig:s2,updateSiteConfig:JM,reset:x(()=>{Ku()},"reset"),globalReset:x(()=>{Ku(Fs)},"globalReset"),defaultConfig:Fs});Kp(Je().logLevel);Ku(Je());var Uz=x((e,t,n)=>{st.warn(e),Bm(e)?(n&&n(e.str,e.hash),t.push({...e,message:e.str,error:e})):(n&&n(e),e instanceof Error&&t.push({str:e.message,message:e.message,hash:e.name,error:e}))},"handleError"),ak=x(async function(e={querySelector:".mermaid"}){try{await qz(e)}catch(t){if(Bm(t)&&st.error(t.str),Bi.parseError&&Bi.parseError(t),!e.suppressErrors)throw st.error("Use the suppressErrors option to suppress these errors"),t}},"run"),qz=x(async function({postRenderCallback:e,querySelector:t,nodes:n}={querySelector:".mermaid"}){const a=Da.getConfig();st.debug(`${e?"":"No "}Callback function found`);let s;if(n)s=n;else if(t)s=document.querySelectorAll(t);else throw new Error("Nodes and querySelector are both undefined");st.debug(`Found ${s.length} diagrams`),(a==null?void 0:a.startOnLoad)!==void 0&&(st.debug("Start On Load: "+(a==null?void 0:a.startOnLoad)),Da.updateSiteConfig({startOnLoad:a==null?void 0:a.startOnLoad}));const o=new an.InitIDGenerator(a.deterministicIds,a.deterministicIDSeed);let u;const c=[];for(const g of Array.from(s)){if(st.info("Rendering diagram: "+g.id),g.getAttribute("data-processed"))continue;g.setAttribute("data-processed","true");const d=`mermaid-${o.next()}`;u=g.innerHTML,u=E_(an.entityDecode(u)).trim().replace(/<br\s*\/?>/gi,"<br/>");const f=an.detectInit(u);f&&st.debug("Detected early reinit: ",f);try{const{svg:m,bindFunctions:y}=await ck(d,u,g);g.innerHTML=m,e&&await e(d),y&&y(g)}catch(m){Uz(m,c,Bi.parseError)}}if(c.length>0)throw c[0]},"runThrowsErrors"),sk=x(function(e){Da.initialize(e)},"initialize"),Hz=x(async function(e,t,n){st.warn("mermaid.init is deprecated. Please use run instead."),e&&sk(e);const a={postRenderCallback:n,querySelector:".mermaid"};typeof t=="string"?a.querySelector=t:t&&(t instanceof HTMLElement?a.nodes=[t]:a.nodes=t),await ak(a)},"init"),Gz=x(async(e,{lazyLoad:t=!0}={})=>{ad(),Qf(...e),t===!1&&await gz()},"registerExternalDiagrams"),lk=x(function(){if(Bi.startOnLoad){const{startOnLoad:e}=Da.getConfig();e&&Bi.run().catch(t=>st.error("Mermaid failed to initialize",t))}},"contentLoaded");typeof document<"u"&&window.addEventListener("load",lk,!1);var jz=x(function(e){Bi.parseError=e},"setParseErrorHandler"),Mh=[],qf=!1,ok=x(async()=>{if(!qf){for(qf=!0;Mh.length>0;){const e=Mh.shift();if(e)try{await e()}catch(t){st.error("Error executing queue",t)}}qf=!1}},"executeQueue"),Yz=x(async(e,t)=>new Promise((n,a)=>{const s=x(()=>new Promise((o,u)=>{Da.parse(e,t).then(c=>{o(c),n(c)},c=>{var g;st.error("Error parsing",c),(g=Bi.parseError)==null||g.call(Bi,c),u(c),a(c)})}),"performCall");Mh.push(s),ok().catch(a)}),"parse"),ck=x((e,t,n)=>new Promise((a,s)=>{const o=x(()=>new Promise((u,c)=>{Da.render(e,t,n).then(g=>{u(g),a(g)},g=>{var d;st.error("Error parsing",g),(d=Bi.parseError)==null||d.call(Bi,g),c(g),s(g)})}),"performCall");Mh.push(o),ok().catch(s)}),"render"),Wz=x(()=>Object.keys(Ta).map(e=>({id:e})),"getRegisteredDiagramsMetadata"),Bi={startOnLoad:!0,mermaidAPI:Da,parse:Yz,render:ck,init:Hz,run:ak,registerExternalDiagrams:Gz,registerLayoutLoaders:mT,initialize:sk,parseError:void 0,contentLoaded:lk,setParseErrorHandler:jz,detectType:Zp,registerIconPacks:yI,getRegisteredDiagramsMetadata:Wz},Ex=Bi;/*! Check if previously processed *//*!
 * Wait for document loaded before starting the execution
 */function Vz({searchTerm:e,onClose:t}){const[n,a]=K.useState([]),[s,o]=K.useState(!1);return K.useEffect(()=>{if(!e||e.length<2){a([]);return}o(!0);const u=[],c=e.toLowerCase();Object.keys(Wf).forEach(g=>{const d=Wf[g],f=d.content.replace(/<[^>]*>/g,"");if(d.title.toLowerCase().includes(c)||f.toLowerCase().includes(c)){const y=f.split(/[.!?]+/).filter(v=>v.toLowerCase().includes(c)).slice(0,3);u.push({title:d.title,key:g,href:`/docs/${g}`,snippets:y.length>0?y:[f.substring(0,200)+"..."]})}}),a(u),o(!1)},[e]),!e||e.length<2?null:Q.jsx("div",{className:"search-overlay",onClick:t,children:Q.jsxs("div",{className:"search-results-container",onClick:u=>u.stopPropagation(),children:[Q.jsxs("div",{className:"search-results-header",children:[Q.jsxs("h3",{children:['Search Results for "',e,'"']}),Q.jsx("button",{className:"close-search",onClick:t,children:"✕"})]}),s?Q.jsx("div",{className:"search-loading",children:"Searching..."}):n.length>0?Q.jsx("div",{className:"search-results",children:n.map((u,c)=>Q.jsxs("div",{className:"search-result-item",children:[Q.jsx("h4",{children:Q.jsx(Ge,{to:u.href,onClick:t,children:u.title})}),Q.jsx("div",{className:"search-snippets",children:u.snippets.map((g,d)=>Q.jsxs("p",{className:"search-snippet",children:[g.trim(),"..."]},d))})]},c))}):Q.jsxs("div",{className:"no-results",children:['No results found for "',e,'". Try different keywords.']})]})})}function Xz(){return Q.jsxs("div",{className:"home-container",children:[Q.jsxs("div",{className:"hero-section",children:[Q.jsx("h1",{children:"Business Services Hub Documentation"}),Q.jsx("p",{className:"subtitle",children:"Everything you need: architecture, setup, features, and business strategy"}),Q.jsx("p",{className:"mission",children:"Empowering Omani businesses with SmartPRO digital solutions"}),Q.jsx("p",{className:"description",children:"Welcome to the official documentation portal for Business Services Hub — your source for technical setup, feature guides, and business strategy."}),Q.jsxs("div",{className:"metrics",children:[Q.jsxs("div",{className:"metric",children:[Q.jsx("span",{className:"metric-number",children:"5,000+"}),Q.jsx("span",{className:"metric-label",children:"Clients"})]}),Q.jsxs("div",{className:"metric",children:[Q.jsx("span",{className:"metric-number",children:"800+"}),Q.jsx("span",{className:"metric-label",children:"Providers"})]}),Q.jsxs("div",{className:"metric",children:[Q.jsx("span",{className:"metric-number",children:"15,000+"}),Q.jsx("span",{className:"metric-label",children:"Projects Completed"})]})]}),Q.jsxs("div",{className:"hero-buttons",children:[Q.jsxs(Ge,{to:"/docs/setup_deployment_guide",className:"hero-button developer-button",children:[Q.jsx("span",{className:"button-icon",children:"🚀"}),Q.jsxs("span",{className:"button-content",children:[Q.jsx("span",{className:"button-title",children:"For Developers"}),Q.jsx("span",{className:"button-subtitle",children:"Setup Guide & Technical Docs"})]})]}),Q.jsxs(Ge,{to:"/docs/business_plan",className:"hero-button stakeholder-button",children:[Q.jsx("span",{className:"button-icon",children:"📊"}),Q.jsxs("span",{className:"button-content",children:[Q.jsx("span",{className:"button-title",children:"For Stakeholders"}),Q.jsx("span",{className:"button-subtitle",children:"Business Plan & Strategy"})]})]}),Q.jsxs(Ge,{to:"/docs/security_guide",className:"hero-button admin-button",children:[Q.jsx("span",{className:"button-icon",children:"🛠️"}),Q.jsxs("span",{className:"button-content",children:[Q.jsx("span",{className:"button-title",children:"For Admins"}),Q.jsx("span",{className:"button-subtitle",children:"Security & Deployment"})]})]})]})]}),Q.jsxs("div",{className:"quick-links",children:[Q.jsx("h2",{children:"Quick Access"}),Q.jsxs("div",{className:"cards-grid",children:[Q.jsxs("div",{className:"card stakeholder-card",children:[Q.jsx("h3",{children:"📊 For Stakeholders & Investors"}),Q.jsx("p",{children:"Executive summaries, business plans, and strategic insights"}),Q.jsxs("div",{className:"card-links",children:[Q.jsx(Ge,{to:"/docs/executive_summary",children:"Executive Summary"}),Q.jsx(Ge,{to:"/docs/business_plan",children:"Business Plan"}),Q.jsx(Ge,{to:"/docs/roadmap",children:"Development Roadmap"})]})]}),Q.jsxs("div",{className:"card developer-card",children:[Q.jsx("h3",{children:"🛠️ For Developers & Technical Teams"}),Q.jsx("p",{children:"Architecture, setup guides, and technical documentation"}),Q.jsxs("div",{className:"card-links",children:[Q.jsx(Ge,{to:"/docs/architecture_diagrams",children:"Architecture Diagrams"}),Q.jsx(Ge,{to:"/docs/setup_deployment_guide",children:"Setup & Deployment"}),Q.jsx(Ge,{to:"/docs/features_detailed",children:"Features Documentation"})]})]}),Q.jsxs("div",{className:"card admin-card",children:[Q.jsx("h3",{children:"🔒 For Administrators"}),Q.jsx("p",{children:"Security guides, deployment, and platform management"}),Q.jsxs("div",{className:"card-links",children:[Q.jsx(Ge,{to:"/docs/security_guide",children:"Security Guide"}),Q.jsx(Ge,{to:"/docs/setup_deployment_guide",children:"Deployment Guide"}),Q.jsx(Ge,{to:"/docs/contributing",children:"Contributing Guide"})]})]})]})]}),Q.jsxs("div",{className:"recent-updates",children:[Q.jsx("h2",{children:"Recent Updates"}),Q.jsx("p",{children:"Last updated: September 2025"}),Q.jsx("p",{children:"Latest changes: Enhanced documentation portal with professional branding and improved navigation"})]})]})}function Qz(){const{docName:e}=sR(),[t,n]=K.useState({title:"",content:""}),[a,s]=K.useState(!0),[o,u]=K.useState(null),c=K.useRef(null);return K.useEffect(()=>{if(s(!0),u(null),n({title:"",content:""}),e){const g=e.replace(".html",""),d=Wf[g];d?(n(d),u(null)):(u("Document not found."),n({title:"",content:""}))}s(!1)},[e]),K.useEffect(()=>{if(t.content&&c.current){const g=document.documentElement.classList.contains("dark-mode");Ex.initialize({startOnLoad:!1,theme:g?"dark":"base",themeVariables:g?{primaryColor:"#00afaa",primaryTextColor:"#ffffff",primaryBorderColor:"#00afaa",lineColor:"#00afaa",secondaryColor:"#343a40",tertiaryColor:"#495057",background:"#212529",mainBkg:"#343a40",secondBkg:"#495057",tertiaryBkg:"#6c757d"}:{primaryColor:"#212529",primaryTextColor:"#ffffff",primaryBorderColor:"#00afaa",lineColor:"#00afaa",secondaryColor:"#e9ecef",tertiaryColor:"#f8f9fa"}}),c.current.querySelectorAll("pre code.language-mermaid").forEach(async(m,y)=>{const v=m.textContent;try{const{svg:S}=await Ex.render(`mermaid-svg-${e}-${y}`,v);m.innerHTML=S,m.classList.remove("language-mermaid"),m.parentElement.classList.remove("language-mermaid")}catch(S){console.error("Mermaid rendering failed:",S),m.innerHTML=`<div style="color: red;">Error rendering diagram: ${S.message}</div><pre>${v}</pre>`}}),(()=>{const m=c.current;if(!m)return;m.querySelectorAll("blockquote").forEach(v=>{const S=v.textContent.trim();let C="info",T="ℹ️";S.toLowerCase().includes("tip")||S.toLowerCase().includes("note")?(C="tip",T="✅"):(S.toLowerCase().includes("warning")||S.toLowerCase().includes("caution"))&&(C="warning",T="⚠️"),v.className=`callout callout-${C}`,v.innerHTML=`<div class="callout-icon">${T}</div><div class="callout-content">${v.innerHTML}</div>`})})()}},[t.content]),a?Q.jsx("div",{className:"doc-message",children:"Loading document..."}):o?Q.jsx("div",{className:"doc-error",children:o}):t.content?Q.jsxs("div",{className:"doc-viewer-container",children:[Q.jsxs("div",{className:"breadcrumb",children:[Q.jsx(Ge,{to:"/",children:"Documentation"})," > ",Q.jsx("span",{children:t.title})]}),Q.jsx("h1",{children:t.title}),Q.jsx("div",{ref:c,dangerouslySetInnerHTML:{__html:t.content}})]}):Q.jsx("div",{className:"doc-message",children:"No content available for this document."})}function Kz({darkMode:e,toggleDarkMode:t,onSearch:n}){const[a,s]=K.useState({}),[o,u]=K.useState(""),c=m=>{s(y=>({...y,[m]:!y[m]}))},g=m=>{const y=m.target.value;u(y),n(y)},d=tM.filter(m=>m.name.toLowerCase().includes(o.toLowerCase())),f=[{name:"Business Docs",icon:"📊",items:d.filter(m=>["Executive Summary","Business Plan","Development Roadmap"].includes(m.name))},{name:"Technical Docs",icon:"🛠️",items:d.filter(m=>["Project Documentation","Architecture Diagrams","Features Detailed","Setup & Deployment","Security Guide"].includes(m.name))},{name:"Community",icon:"🤝",items:d.filter(m=>["Contributing Guide","Changelog"].includes(m.name))}];return Q.jsxs("nav",{className:"sidebar",children:[Q.jsxs("div",{className:"sidebar-header",children:[Q.jsx("img",{src:eM,alt:"Falcon Eye Group Logo",className:"logo"}),Q.jsx("h2",{children:"Documentation"}),Q.jsx("button",{className:"dark-mode-toggle",onClick:t,"aria-label":"Toggle dark mode",title:e?"Switch to light mode":"Switch to dark mode",children:e?"☀️":"🌙"})]}),Q.jsx("div",{className:"search-container",children:Q.jsx("input",{type:"text",placeholder:"Search documentation...",value:o,onChange:g,className:"search-input"})}),Q.jsxs("div",{className:"nav-section",children:[Q.jsx("h3",{children:"🏠 Overview"}),Q.jsx("ul",{children:Q.jsx("li",{children:Q.jsx(Ge,{to:"/",className:({isActive:m})=>m?"active-link":"",children:"Home"})})})]}),f.map(m=>Q.jsxs("div",{className:"nav-section",children:[Q.jsxs("h3",{onClick:()=>c(m.name),className:"collapsible-header",children:[m.icon," ",m.name,Q.jsx("span",{className:`arrow ${a[m.name]?"collapsed":""}`,children:"▼"})]}),!a[m.name]&&Q.jsx("ul",{children:m.items.map(y=>Q.jsx("li",{children:Q.jsx(Ge,{to:y.href,className:({isActive:v})=>v?"active-link":"",children:y.name})},y.name))})]},m.name))]})}function Zz(){const[e,t]=K.useState(()=>{const d=localStorage.getItem("darkMode");return d?JSON.parse(d):!1}),[n,a]=K.useState(""),[s,o]=K.useState(!1);K.useEffect(()=>{e?document.documentElement.classList.add("dark-mode"):document.documentElement.classList.remove("dark-mode"),localStorage.setItem("darkMode",JSON.stringify(e))},[e]);const u=()=>{t(d=>!d)},c=d=>{a(d),o(d.length>=2)},g=()=>{o(!1),a("")};return Q.jsxs(jR,{basename:"/",children:[Q.jsxs("div",{className:"app-layout",children:[Q.jsx(Kz,{darkMode:e,toggleDarkMode:u,onSearch:c}),Q.jsxs("main",{className:"content",children:[s&&Q.jsx(Vz,{searchTerm:n,onClose:g}),Q.jsxs(xR,{children:[Q.jsx(jf,{path:"/",element:Q.jsx(Xz,{})}),Q.jsx(jf,{path:"/docs/:docName",element:Q.jsx(Qz,{})})]})]})]}),Q.jsx("footer",{className:"footer",children:Q.jsxs("div",{className:"footer-content",children:[Q.jsxs("div",{className:"footer-section",children:[Q.jsx("h4",{children:"Falcon Eye Group"}),Q.jsx("p",{children:"© 2025 Falcon Eye Group. All rights reserved."}),Q.jsxs("div",{className:"social-links",children:[Q.jsx("a",{href:"#","aria-label":"LinkedIn",children:"💼"}),Q.jsx("a",{href:"#","aria-label":"Twitter",children:"🐦"})]})]}),Q.jsxs("div",{className:"footer-section",children:[Q.jsx("h4",{children:"SmartPRO Hub"}),Q.jsx("p",{children:"One-Station Business Solutions"}),Q.jsx("a",{href:"#",className:"hub-link",children:"Visit SmartPRO Hub →"})]}),Q.jsxs("div",{className:"footer-section",children:[Q.jsx("h4",{children:"Contact"}),Q.jsx("p",{children:"Email: support@abuali.com"}),Q.jsx("p",{children:"Business: business@abuali.com"})]}),Q.jsxs("div",{className:"footer-section",children:[Q.jsx("h4",{children:"Documentation"}),Q.jsx("p",{children:"Docs v2.0 — Updated Sept 13, 2025"}),Q.jsx("p",{children:"Built with ❤️ by the Business Services Hub Team"}),Q.jsx("div",{className:"version-info",children:Q.jsxs("small",{children:["Last deployment: ",new Date().toLocaleDateString()]})})]})]})})]})}EE.createRoot(document.getElementById("root")).render(Q.jsx(K.StrictMode,{children:Q.jsx(Zz,{})}));export{p2 as $,Eo as A,oM as B,E3 as C,Om as D,Je as E,a2 as F,aN as G,lO as H,Vv as I,g4 as J,GM as K,$s as L,eU as M,Xh as N,g2 as O,Jp as P,lS as Q,ZB as R,$u as S,rN as T,Ko as U,m3 as V,Qo as W,bt as X,kt as Y,QP as Z,x as _,C3 as a,YC as a$,VB as a0,AS as a1,kS as a2,dU as a3,lU as a4,uU as a5,cU as a6,aU as a7,xs as a8,dm as a9,YP as aA,F5 as aB,$P as aC,Tm as aD,_x as aE,vI as aF,XB as aG,tU as aH,bE as aI,rc as aJ,yI as aK,mI as aL,om as aM,Nr as aN,SS as aO,EL as aP,No as aQ,Ba as aR,WP as aS,r_ as aT,Gh as aU,Vh as aV,vh as aW,s_ as aX,n_ as aY,_P as aZ,Ct as a_,hU as aa,sU as ab,fU as ac,gU as ad,oU as ae,GI as af,fT as ag,vU as ah,p4 as ai,Oe as aj,Gr as ak,wm as al,z_ as am,Na as an,d_ as ao,Pt as ap,_n as aq,OF as ar,bU as as,SU as at,mU as au,xt as av,yU as aw,mF as ax,dF as ay,hF as az,x3 as b,Ci as b0,xL as b1,lm as b2,R2 as b3,Jo as b4,L2 as b5,rU as b6,lM as b7,jP as b8,FP as b9,Up as bA,VP as bB,Wh as bC,Qt as bD,T5 as ba,km as bb,vP as bc,XP as bd,ic as be,Qs as bf,mh as bg,MP as bh,n6 as bi,ec as bj,bh as bk,wP as bl,KC as bm,E5 as bn,R5 as bo,ya as bp,YS as bq,M5 as br,Am as bs,A5 as bt,B5 as bu,Ks as bv,Hr as bw,US as bx,Em as by,JC as bz,Vt as c,jt as d,f2 as e,Le as f,w3 as g,lr as h,Vi as i,x4 as j,Vs as k,st as l,f_ as m,iU as n,CU as o,T3 as p,k3 as q,xU as r,_3 as s,f4 as t,an as u,oF as v,oN as w,pU as x,S3 as y,nU as z};
