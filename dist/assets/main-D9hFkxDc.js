const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dagre-5GWH7T2D-DtvGn9Bb.js","assets/graph-DMqNkZrQ.js","assets/_baseUniq-D5raloam.js","assets/layout-DPtI1h_2.js","assets/_basePickBy-Bu63JeJy.js","assets/clone-B6NUqr6n.js","assets/cose-bilkent-S5V4N54A-BWw8-DYU.js","assets/cytoscape.esm-CyJtwmzi.js","assets/c4Diagram-FPNF74CW-CR_3lcqk.js","assets/chunk-TZMSLE5B-BWJ20Sq8.js","assets/flowDiagram-PVAE7QVJ-BauqebPJ.js","assets/chunk-FMBD7UC4-Canqhclp.js","assets/chunk-55IACEB6-a_0Eugbe.js","assets/chunk-QN33PNHL-D8W5uxbb.js","assets/channel-DzoQU2Kn.js","assets/erDiagram-AWTI2OKA-i2YuDA1h.js","assets/gitGraphDiagram-NY62KEGX-BfTAKUcI.js","assets/chunk-4BX2VUAB-cvmeQJ27.js","assets/chunk-QZHKN3VN-D-INw-2q.js","assets/treemap-75Q7IDZK-DPulsyrr.js","assets/ganttDiagram-OWAHRB6G-CjQgk4aa.js","assets/linear-4LFa0SXj.js","assets/init-Gi6I4Gst.js","assets/defaultLocale-C4B-KCzX.js","assets/infoDiagram-STP46IZ2-bDNOsfvf.js","assets/pieDiagram-ADFJNKIX-_0r1IC0h.js","assets/arc-DMEKP1DN.js","assets/ordinal-Cboi1Yqb.js","assets/quadrantDiagram-LMRXKWRM-CE1Gx_Tf.js","assets/xychartDiagram-6GGTOJPD-DhkWbIb2.js","assets/requirementDiagram-4UW4RH46-1s6zsY4r.js","assets/sequenceDiagram-C3RYC4MD-9P1WBK-y.js","assets/classDiagram-KNZD7YFC-CEHxpXQW.js","assets/chunk-K7UQS3LO-CzoDiQBQ.js","assets/classDiagram-v2-RKCZMP56-CEHxpXQW.js","assets/stateDiagram-KXAO66HF-Bciwszpy.js","assets/chunk-TVAH2DTR-BOmCf2M7.js","assets/stateDiagram-v2-UMBNRL4Z-CiqsjwbD.js","assets/journeyDiagram-BIP6EPQ6-BsUSxjM8.js","assets/timeline-definition-XQNQX7LJ-BX0P0sOX.js","assets/mindmap-definition-Q6HEUPPD-e-uq1l0X.js","assets/kanban-definition-6OIFK2YF-D7iKZbxX.js","assets/sankeyDiagram-GR3RE2ED-D7C0qLaS.js","assets/diagram-S2PKOQOG-B-m57FSm.js","assets/diagram-QEK2KX5R-BI0xpj8J.js","assets/blockDiagram-QIGZ2CNN-CKuQFEGt.js","assets/architectureDiagram-W76B3OCA-D2B8i-Cg.js","assets/diagram-N5W7TBWH-Toiq5Oln.js"])))=>i.map(i=>d[i]);
var pE=Object.defineProperty;var mE=(e,t,n)=>t in e?pE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ae=(e,t,n)=>mE(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function yE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pg={exports:{}},eo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function bE(){if(Mv)return eo;Mv=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,o){var u=null;if(o!==void 0&&(u=""+o),s.key!==void 0&&(u=""+s.key),"key"in s){o={};for(var c in s)c!=="key"&&(o[c]=s[c])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:u,ref:s!==void 0?s:null,props:o}}return eo.Fragment=t,eo.jsx=n,eo.jsxs=n,eo}var Lv;function vE(){return Lv||(Lv=1,pg.exports=bE()),pg.exports}var lt=vE(),mg={exports:{}},Pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function SE(){if(Dv)return Pt;Dv=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),m=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=m&&L[m]||L["@@iterator"],typeof L=="function"?L:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,C={};function w(L,H,ot){this.props=L,this.context=H,this.refs=C,this.updater=ot||v}w.prototype.isReactComponent={},w.prototype.setState=function(L,H){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,H,"setState")},w.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function T(){}T.prototype=w.prototype;function k(L,H,ot){this.props=L,this.context=H,this.refs=C,this.updater=ot||v}var E=k.prototype=new T;E.constructor=k,S(E,w.prototype),E.isPureReactComponent=!0;var O=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},R=Object.prototype.hasOwnProperty;function N(L,H,ot,tt,ft,pt){return ot=pt.ref,{$$typeof:e,type:L,key:H,ref:ot!==void 0?ot:null,props:pt}}function K(L,H){return N(L.type,H,void 0,void 0,void 0,L.props)}function it(L){return typeof L=="object"&&L!==null&&L.$$typeof===e}function nt(L){var H={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ot){return H[ot]})}var X=/\/+/g;function st(L,H){return typeof L=="object"&&L!==null&&L.key!=null?nt(""+L.key):H.toString(36)}function rt(){}function W(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(rt,rt):(L.status="pending",L.then(function(H){L.status==="pending"&&(L.status="fulfilled",L.value=H)},function(H){L.status==="pending"&&(L.status="rejected",L.reason=H)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function j(L,H,ot,tt,ft){var pt=typeof L;(pt==="undefined"||pt==="boolean")&&(L=null);var ht=!1;if(L===null)ht=!0;else switch(pt){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(L.$$typeof){case e:case t:ht=!0;break;case g:return ht=L._init,j(ht(L._payload),H,ot,tt,ft)}}if(ht)return ft=ft(L),ht=tt===""?"."+st(L,0):tt,O(ft)?(ot="",ht!=null&&(ot=ht.replace(X,"$&/")+"/"),j(ft,H,ot,"",function(Ht){return Ht})):ft!=null&&(it(ft)&&(ft=K(ft,ot+(ft.key==null||L&&L.key===ft.key?"":(""+ft.key).replace(X,"$&/")+"/")+ht)),H.push(ft)),1;ht=0;var Lt=tt===""?".":tt+":";if(O(L))for(var Bt=0;Bt<L.length;Bt++)tt=L[Bt],pt=Lt+st(tt,Bt),ht+=j(tt,H,ot,pt,ft);else if(Bt=b(L),typeof Bt=="function")for(L=Bt.call(L),Bt=0;!(tt=L.next()).done;)tt=tt.value,pt=Lt+st(tt,Bt++),ht+=j(tt,H,ot,pt,ft);else if(pt==="object"){if(typeof L.then=="function")return j(W(L),H,ot,tt,ft);throw H=String(L),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ht}function M(L,H,ot){if(L==null)return L;var tt=[],ft=0;return j(L,tt,"","",function(pt){return H.call(ot,pt,ft++)}),tt}function F(L){if(L._status===-1){var H=L._result;H=H(),H.then(function(ot){(L._status===0||L._status===-1)&&(L._status=1,L._result=ot)},function(ot){(L._status===0||L._status===-1)&&(L._status=2,L._result=ot)}),L._status===-1&&(L._status=0,L._result=H)}if(L._status===1)return L._result.default;throw L._result}var $=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function ut(){}return Pt.Children={map:M,forEach:function(L,H,ot){M(L,function(){H.apply(this,arguments)},ot)},count:function(L){var H=0;return M(L,function(){H++}),H},toArray:function(L){return M(L,function(H){return H})||[]},only:function(L){if(!it(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Pt.Component=w,Pt.Fragment=n,Pt.Profiler=s,Pt.PureComponent=k,Pt.StrictMode=a,Pt.Suspense=f,Pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,Pt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return D.H.useMemoCache(L)}},Pt.cache=function(L){return function(){return L.apply(null,arguments)}},Pt.cloneElement=function(L,H,ot){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var tt=S({},L.props),ft=L.key,pt=void 0;if(H!=null)for(ht in H.ref!==void 0&&(pt=void 0),H.key!==void 0&&(ft=""+H.key),H)!R.call(H,ht)||ht==="key"||ht==="__self"||ht==="__source"||ht==="ref"&&H.ref===void 0||(tt[ht]=H[ht]);var ht=arguments.length-2;if(ht===1)tt.children=ot;else if(1<ht){for(var Lt=Array(ht),Bt=0;Bt<ht;Bt++)Lt[Bt]=arguments[Bt+2];tt.children=Lt}return N(L.type,ft,void 0,void 0,pt,tt)},Pt.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:o,_context:L},L},Pt.createElement=function(L,H,ot){var tt,ft={},pt=null;if(H!=null)for(tt in H.key!==void 0&&(pt=""+H.key),H)R.call(H,tt)&&tt!=="key"&&tt!=="__self"&&tt!=="__source"&&(ft[tt]=H[tt]);var ht=arguments.length-2;if(ht===1)ft.children=ot;else if(1<ht){for(var Lt=Array(ht),Bt=0;Bt<ht;Bt++)Lt[Bt]=arguments[Bt+2];ft.children=Lt}if(L&&L.defaultProps)for(tt in ht=L.defaultProps,ht)ft[tt]===void 0&&(ft[tt]=ht[tt]);return N(L,pt,void 0,void 0,null,ft)},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(L){return{$$typeof:c,render:L}},Pt.isValidElement=it,Pt.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:F}},Pt.memo=function(L,H){return{$$typeof:d,type:L,compare:H===void 0?null:H}},Pt.startTransition=function(L){var H=D.T,ot={};D.T=ot;try{var tt=L(),ft=D.S;ft!==null&&ft(ot,tt),typeof tt=="object"&&tt!==null&&typeof tt.then=="function"&&tt.then(ut,$)}catch(pt){$(pt)}finally{D.T=H}},Pt.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},Pt.use=function(L){return D.H.use(L)},Pt.useActionState=function(L,H,ot){return D.H.useActionState(L,H,ot)},Pt.useCallback=function(L,H){return D.H.useCallback(L,H)},Pt.useContext=function(L){return D.H.useContext(L)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(L,H){return D.H.useDeferredValue(L,H)},Pt.useEffect=function(L,H,ot){var tt=D.H;if(typeof ot=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return tt.useEffect(L,H)},Pt.useId=function(){return D.H.useId()},Pt.useImperativeHandle=function(L,H,ot){return D.H.useImperativeHandle(L,H,ot)},Pt.useInsertionEffect=function(L,H){return D.H.useInsertionEffect(L,H)},Pt.useLayoutEffect=function(L,H){return D.H.useLayoutEffect(L,H)},Pt.useMemo=function(L,H){return D.H.useMemo(L,H)},Pt.useOptimistic=function(L,H){return D.H.useOptimistic(L,H)},Pt.useReducer=function(L,H,ot){return D.H.useReducer(L,H,ot)},Pt.useRef=function(L){return D.H.useRef(L)},Pt.useState=function(L){return D.H.useState(L)},Pt.useSyncExternalStore=function(L,H,ot){return D.H.useSyncExternalStore(L,H,ot)},Pt.useTransition=function(){return D.H.useTransition()},Pt.version="19.1.0",Pt}var Bv;function Gp(){return Bv||(Bv=1,mg.exports=SE()),mg.exports}var J=Gp(),yg={exports:{}},io={},bg={exports:{}},vg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function xE(){return Ov||(Ov=1,function(e){function t(M,F){var $=M.length;M.push(F);t:for(;0<$;){var ut=$-1>>>1,L=M[ut];if(0<s(L,F))M[ut]=F,M[$]=L,$=ut;else break t}}function n(M){return M.length===0?null:M[0]}function a(M){if(M.length===0)return null;var F=M[0],$=M.pop();if($!==F){M[0]=$;t:for(var ut=0,L=M.length,H=L>>>1;ut<H;){var ot=2*(ut+1)-1,tt=M[ot],ft=ot+1,pt=M[ft];if(0>s(tt,$))ft<L&&0>s(pt,tt)?(M[ut]=pt,M[ft]=$,ut=ft):(M[ut]=tt,M[ot]=$,ut=ot);else if(ft<L&&0>s(pt,$))M[ut]=pt,M[ft]=$,ut=ft;else break t}}return F}function s(M,F){var $=M.sortIndex-F.sortIndex;return $!==0?$:M.id-F.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var u=Date,c=u.now();e.unstable_now=function(){return u.now()-c}}var f=[],d=[],g=1,m=null,b=3,v=!1,S=!1,C=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;function O(M){for(var F=n(d);F!==null;){if(F.callback===null)a(d);else if(F.startTime<=M)a(d),F.sortIndex=F.expirationTime,t(f,F);else break;F=n(d)}}function D(M){if(C=!1,O(M),!S)if(n(f)!==null)S=!0,R||(R=!0,st());else{var F=n(d);F!==null&&j(D,F.startTime-M)}}var R=!1,N=-1,K=5,it=-1;function nt(){return w?!0:!(e.unstable_now()-it<K)}function X(){if(w=!1,R){var M=e.unstable_now();it=M;var F=!0;try{t:{S=!1,C&&(C=!1,k(N),N=-1),v=!0;var $=b;try{e:{for(O(M),m=n(f);m!==null&&!(m.expirationTime>M&&nt());){var ut=m.callback;if(typeof ut=="function"){m.callback=null,b=m.priorityLevel;var L=ut(m.expirationTime<=M);if(M=e.unstable_now(),typeof L=="function"){m.callback=L,O(M),F=!0;break e}m===n(f)&&a(f),O(M)}else a(f);m=n(f)}if(m!==null)F=!0;else{var H=n(d);H!==null&&j(D,H.startTime-M),F=!1}}break t}finally{m=null,b=$,v=!1}F=void 0}}finally{F?st():R=!1}}}var st;if(typeof E=="function")st=function(){E(X)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,W=rt.port2;rt.port1.onmessage=X,st=function(){W.postMessage(null)}}else st=function(){T(X,0)};function j(M,F){N=T(function(){M(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(M){switch(b){case 1:case 2:case 3:var F=3;break;default:F=b}var $=b;b=F;try{return M()}finally{b=$}},e.unstable_requestPaint=function(){w=!0},e.unstable_runWithPriority=function(M,F){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=b;b=M;try{return F()}finally{b=$}},e.unstable_scheduleCallback=function(M,F,$){var ut=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ut+$:ut):$=ut,M){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=$+L,M={id:g++,callback:F,priorityLevel:M,startTime:$,expirationTime:L,sortIndex:-1},$>ut?(M.sortIndex=$,t(d,M),n(f)===null&&M===n(d)&&(C?(k(N),N=-1):C=!0,j(D,$-ut))):(M.sortIndex=L,t(f,M),S||v||(S=!0,R||(R=!0,st()))),M},e.unstable_shouldYield=nt,e.unstable_wrapCallback=function(M){var F=b;return function(){var $=b;b=F;try{return M.apply(this,arguments)}finally{b=$}}}}(vg)),vg}var Nv;function CE(){return Nv||(Nv=1,bg.exports=xE()),bg.exports}var Sg={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function _E(){if(Pv)return Ke;Pv=1;var e=Gp();function t(f){var d="https://react.dev/errors/"+f;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+f+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function o(f,d,g){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:m==null?null:""+m,children:f,containerInfo:d,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(f,d){if(f==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ke.createPortal=function(f,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return o(f,d,null,g)},Ke.flushSync=function(f){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,f)return f()}finally{u.T=d,a.p=g,a.d.f()}},Ke.preconnect=function(f,d){typeof f=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(f,d))},Ke.prefetchDNS=function(f){typeof f=="string"&&a.d.D(f)},Ke.preinit=function(f,d){if(typeof f=="string"&&d&&typeof d.as=="string"){var g=d.as,m=c(g,d.crossOrigin),b=typeof d.integrity=="string"?d.integrity:void 0,v=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(f,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:m,integrity:b,fetchPriority:v}):g==="script"&&a.d.X(f,{crossOrigin:m,integrity:b,fetchPriority:v,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Ke.preinitModule=function(f,d){if(typeof f=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=c(d.as,d.crossOrigin);a.d.M(f,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(f)},Ke.preload=function(f,d){if(typeof f=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,m=c(g,d.crossOrigin);a.d.L(f,g,{crossOrigin:m,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Ke.preloadModule=function(f,d){if(typeof f=="string")if(d){var g=c(d.as,d.crossOrigin);a.d.m(f,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(f)},Ke.requestFormReset=function(f){a.d.r(f)},Ke.unstable_batchedUpdates=function(f,d){return f(d)},Ke.useFormState=function(f,d,g){return u.H.useFormState(f,d,g)},Ke.useFormStatus=function(){return u.H.useHostTransitionStatus()},Ke.version="19.1.0",Ke}var Iv;function TE(){if(Iv)return Sg.exports;Iv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Sg.exports=_E(),Sg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function wE(){if(Fv)return io;Fv=1;var e=CE(),t=Gp(),n=TE();function a(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function o(i){var r=i,l=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(l=r.return),i=r.return;while(i)}return r.tag===3?l:null}function u(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function c(i){if(o(i)!==i)throw Error(a(188))}function f(i){var r=i.alternate;if(!r){if(r=o(i),r===null)throw Error(a(188));return r!==i?null:i}for(var l=i,h=r;;){var p=l.return;if(p===null)break;var y=p.alternate;if(y===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===l)return c(p),i;if(y===h)return c(p),r;y=y.sibling}throw Error(a(188))}if(l.return!==h.return)l=p,h=y;else{for(var _=!1,A=p.child;A;){if(A===l){_=!0,l=p,h=y;break}if(A===h){_=!0,h=p,l=y;break}A=A.sibling}if(!_){for(A=y.child;A;){if(A===l){_=!0,l=y,h=p;break}if(A===h){_=!0,h=y,l=p;break}A=A.sibling}if(!_)throw Error(a(189))}}if(l.alternate!==h)throw Error(a(190))}if(l.tag!==3)throw Error(a(188));return l.stateNode.current===l?i:r}function d(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=d(i),r!==null)return r;i=i.sibling}return null}var g=Object.assign,m=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),k=Symbol.for("react.consumer"),E=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),it=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function st(i){return i===null||typeof i!="object"?null:(i=X&&i[X]||i["@@iterator"],typeof i=="function"?i:null)}var rt=Symbol.for("react.client.reference");function W(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===rt?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case S:return"Fragment";case w:return"Profiler";case C:return"StrictMode";case D:return"Suspense";case R:return"SuspenseList";case it:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case v:return"Portal";case E:return(i.displayName||"Context")+".Provider";case k:return(i._context.displayName||"Context")+".Consumer";case O:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case N:return r=i.displayName||null,r!==null?r:W(i.type)||"Memo";case K:r=i._payload,i=i._init;try{return W(i(r))}catch{}}return null}var j=Array.isArray,M=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ut=[],L=-1;function H(i){return{current:i}}function ot(i){0>L||(i.current=ut[L],ut[L]=null,L--)}function tt(i,r){L++,ut[L]=i.current,i.current=r}var ft=H(null),pt=H(null),ht=H(null),Lt=H(null);function Bt(i,r){switch(tt(ht,r),tt(pt,i),tt(ft,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?rv(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=rv(r),i=av(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ot(ft),tt(ft,i)}function Ht(){ot(ft),ot(pt),ot(ht)}function Zt(i){i.memoizedState!==null&&tt(Lt,i);var r=ft.current,l=av(r,i.type);r!==l&&(tt(pt,i),tt(ft,l))}function oe(i){pt.current===i&&(ot(ft),ot(pt)),Lt.current===i&&(ot(Lt),Ql._currentValue=$)}var Ae=Object.prototype.hasOwnProperty,hi=e.unstable_scheduleCallback,ni=e.unstable_cancelCallback,tl=e.unstable_shouldYield,el=e.unstable_requestPaint,$e=e.unstable_now,Fa=e.unstable_getCurrentPriorityLevel,Wr=e.unstable_ImmediatePriority,il=e.unstable_UserBlockingPriority,Vr=e.unstable_NormalPriority,sd=e.unstable_LowPriority,$a=e.unstable_IdlePriority,Xr=e.log,cr=e.unstable_setDisableYieldValue,Ni=null,Ye=null;function Qi(i){if(typeof Xr=="function"&&cr(i),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(Ni,i)}catch{}}var We=Math.clz32?Math.clz32:za,nl=Math.log,sc=Math.LN2;function za(i){return i>>>=0,i===0?32:31-(nl(i)/sc|0)|0}var Rn=256,di=4194304;function fi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ur(i,r,l){var h=i.pendingLanes;if(h===0)return 0;var p=0,y=i.suspendedLanes,_=i.pingedLanes;i=i.warmLanes;var A=h&134217727;return A!==0?(h=A&~y,h!==0?p=fi(h):(_&=A,_!==0?p=fi(_):l||(l=A&~i,l!==0&&(p=fi(l))))):(A=h&~y,A!==0?p=fi(A):_!==0?p=fi(_):l||(l=h&~i,l!==0&&(p=fi(l)))),p===0?0:r!==0&&r!==p&&(r&y)===0&&(y=p&-p,l=r&-r,y>=l||y===32&&(l&4194048)!==0)?r:p}function Mn(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function ld(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qr(){var i=Rn;return Rn<<=1,(Rn&4194048)===0&&(Rn=256),i}function Kr(){var i=di;return di<<=1,(di&62914560)===0&&(di=4194304),i}function rl(i){for(var r=[],l=0;31>l;l++)r.push(i);return r}function Ki(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function od(i,r,l,h,p,y){var _=i.pendingLanes;i.pendingLanes=l,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=l,i.entangledLanes&=l,i.errorRecoveryDisabledLanes&=l,i.shellSuspendCounter=0;var A=i.entanglements,B=i.expirationTimes,G=i.hiddenUpdates;for(l=_&~l;0<l;){var Q=31-We(l),et=1<<Q;A[Q]=0,B[Q]=-1;var Y=G[Q];if(Y!==null)for(G[Q]=null,Q=0;Q<Y.length;Q++){var V=Y[Q];V!==null&&(V.lane&=-536870913)}l&=~et}h!==0&&lc(i,h,0),y!==0&&p===0&&i.tag!==0&&(i.suspendedLanes|=y&~(_&~r))}function lc(i,r,l){i.pendingLanes|=r,i.suspendedLanes&=~r;var h=31-We(r);i.entangledLanes|=r,i.entanglements[h]=i.entanglements[h]|1073741824|l&4194090}function be(i,r){var l=i.entangledLanes|=r;for(i=i.entanglements;l;){var h=31-We(l),p=1<<h;p&r|i[h]&r&&(i[h]|=r),l&=~p}}function cn(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function al(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function sl(){var i=F.p;return i!==0?i:(i=window.event,i===void 0?32:Tv(i.type))}function ll(i,r){var l=F.p;try{return F.p=i,r()}finally{F.p=l}}var Zi=Math.random().toString(36).slice(2),Ee="__reactFiber$"+Zi,Ve="__reactProps$"+Zi,ze="__reactContainer$"+Zi,un="__reactEvents$"+Zi,oc="__reactListeners$"+Zi,cc="__reactHandles$"+Zi,qa="__reactResources$"+Zi,hr="__reactMarker$"+Zi;function _i(i){delete i[Ee],delete i[Ve],delete i[un],delete i[oc],delete i[cc]}function Ln(i){var r=i[Ee];if(r)return r;for(var l=i.parentNode;l;){if(r=l[ze]||l[Ee]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(i=cv(i);i!==null;){if(l=i[Ee])return l;i=cv(i)}return r}i=l,l=i.parentNode}return null}function Dn(i){if(i=i[Ee]||i[ze]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function dr(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(a(33))}function Bn(i){var r=i[qa];return r||(r=i[qa]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Ce(i){i[hr]=!0}var _t=new Set,I={};function ct(i,r){mt(i,r),mt(i+"Capture",r)}function mt(i,r){for(I[i]=r,i=0;i<r.length;i++)_t.add(r[i])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Re={},ge={};function Xe(i){return Ae.call(ge,i)?!0:Ae.call(Re,i)?!1:se.test(i)?ge[i]=!0:(Re[i]=!0,!1)}function gi(i,r,l){if(Xe(r))if(l===null)i.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var h=r.toLowerCase().slice(0,5);if(h!=="data-"&&h!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+l)}}function hn(i,r,l){if(l===null)i.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+l)}}function Ti(i,r,l,h){if(h===null)i.removeAttribute(l);else{switch(typeof h){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(l);return}i.setAttributeNS(r,l,""+h)}}var _e,ol;function On(i){if(_e===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);_e=r&&r[1]||"",ol=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_e+i+ol}var cd=!1;function ud(i,r){if(!i||cd)return"";cd=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var h={DetermineComponentFrameRoot:function(){try{if(r){var et=function(){throw Error()};if(Object.defineProperty(et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(et,[])}catch(V){var Y=V}Reflect.construct(i,[],et)}else{try{et.call()}catch(V){Y=V}i.call(et.prototype)}}else{try{throw Error()}catch(V){Y=V}(et=i())&&typeof et.catch=="function"&&et.catch(function(){})}}catch(V){if(V&&Y&&typeof V.stack=="string")return[V.stack,Y.stack]}return[null,null]}};h.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(h.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(h.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var y=h.DetermineComponentFrameRoot(),_=y[0],A=y[1];if(_&&A){var B=_.split(`
`),G=A.split(`
`);for(p=h=0;h<B.length&&!B[h].includes("DetermineComponentFrameRoot");)h++;for(;p<G.length&&!G[p].includes("DetermineComponentFrameRoot");)p++;if(h===B.length||p===G.length)for(h=B.length-1,p=G.length-1;1<=h&&0<=p&&B[h]!==G[p];)p--;for(;1<=h&&0<=p;h--,p--)if(B[h]!==G[p]){if(h!==1||p!==1)do if(h--,p--,0>p||B[h]!==G[p]){var Q=`
`+B[h].replace(" at new "," at ");return i.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",i.displayName)),Q}while(1<=h&&0<=p);break}}}finally{cd=!1,Error.prepareStackTrace=l}return(l=i?i.displayName||i.name:"")?On(l):""}function ck(i){switch(i.tag){case 26:case 27:case 5:return On(i.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 15:return ud(i.type,!1);case 11:return ud(i.type.render,!1);case 1:return ud(i.type,!0);case 31:return On("Activity");default:return""}}function Zm(i){try{var r="";do r+=ck(i),i=i.return;while(i);return r}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Pi(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Jm(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function uk(i){var r=Jm(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),h=""+i[r];if(!i.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,y=l.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return p.call(this)},set:function(_){h=""+_,y.call(this,_)}}),Object.defineProperty(i,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(_){h=""+_},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function uc(i){i._valueTracker||(i._valueTracker=uk(i))}function ty(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return i&&(h=Jm(i)?i.checked?"true":"false":i.value),i=h,i!==l?(r.setValue(i),!0):!1}function hc(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var hk=/[\n"\\]/g;function Ii(i){return i.replace(hk,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function hd(i,r,l,h,p,y,_,A){i.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?i.type=_:i.removeAttribute("type"),r!=null?_==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+Pi(r)):i.value!==""+Pi(r)&&(i.value=""+Pi(r)):_!=="submit"&&_!=="reset"||i.removeAttribute("value"),r!=null?dd(i,_,Pi(r)):l!=null?dd(i,_,Pi(l)):h!=null&&i.removeAttribute("value"),p==null&&y!=null&&(i.defaultChecked=!!y),p!=null&&(i.checked=p&&typeof p!="function"&&typeof p!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.name=""+Pi(A):i.removeAttribute("name")}function ey(i,r,l,h,p,y,_,A){if(y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(i.type=y),r!=null||l!=null){if(!(y!=="submit"&&y!=="reset"||r!=null))return;l=l!=null?""+Pi(l):"",r=r!=null?""+Pi(r):l,A||r===i.value||(i.value=r),i.defaultValue=r}h=h??p,h=typeof h!="function"&&typeof h!="symbol"&&!!h,i.checked=A?i.checked:!!h,i.defaultChecked=!!h,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(i.name=_)}function dd(i,r,l){r==="number"&&hc(i.ownerDocument)===i||i.defaultValue===""+l||(i.defaultValue=""+l)}function Ua(i,r,l,h){if(i=i.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=r.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Pi(l),r=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}r!==null||i[p].disabled||(r=i[p])}r!==null&&(r.selected=!0)}}function iy(i,r,l){if(r!=null&&(r=""+Pi(r),r!==i.value&&(i.value=r),l==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=l!=null?""+Pi(l):""}function ny(i,r,l,h){if(r==null){if(h!=null){if(l!=null)throw Error(a(92));if(j(h)){if(1<h.length)throw Error(a(93));h=h[0]}l=h}l==null&&(l=""),r=l}l=Pi(r),i.defaultValue=l,h=i.textContent,h===l&&h!==""&&h!==null&&(i.value=h)}function Ha(i,r){if(r){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=r;return}}i.textContent=r}var dk=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ry(i,r,l){var h=r.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?h?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":h?i.setProperty(r,l):typeof l!="number"||l===0||dk.has(r)?r==="float"?i.cssFloat=l:i[r]=(""+l).trim():i[r]=l+"px"}function ay(i,r,l){if(r!=null&&typeof r!="object")throw Error(a(62));if(i=i.style,l!=null){for(var h in l)!l.hasOwnProperty(h)||r!=null&&r.hasOwnProperty(h)||(h.indexOf("--")===0?i.setProperty(h,""):h==="float"?i.cssFloat="":i[h]="");for(var p in r)h=r[p],r.hasOwnProperty(p)&&l[p]!==h&&ry(i,p,h)}else for(var y in r)r.hasOwnProperty(y)&&ry(i,y,r[y])}function fd(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fk=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gk=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dc(i){return gk.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var gd=null;function pd(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ga=null,ja=null;function sy(i){var r=Dn(i);if(r&&(i=r.stateNode)){var l=i[Ve]||null;t:switch(i=r.stateNode,r.type){case"input":if(hd(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),r=l.name,l.type==="radio"&&r!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ii(""+r)+'"][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==i&&h.form===i.form){var p=h[Ve]||null;if(!p)throw Error(a(90));hd(h,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(r=0;r<l.length;r++)h=l[r],h.form===i.form&&ty(h)}break t;case"textarea":iy(i,l.value,l.defaultValue);break t;case"select":r=l.value,r!=null&&Ua(i,!!l.multiple,r,!1)}}}var md=!1;function ly(i,r,l){if(md)return i(r,l);md=!0;try{var h=i(r);return h}finally{if(md=!1,(Ga!==null||ja!==null)&&(Kc(),Ga&&(r=Ga,i=ja,ja=Ga=null,sy(r),i)))for(r=0;r<i.length;r++)sy(i[r])}}function cl(i,r){var l=i.stateNode;if(l===null)return null;var h=l[Ve]||null;if(h===null)return null;l=h[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break t;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(a(231,r,typeof l));return l}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yd=!1;if(Nn)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){yd=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{yd=!1}var fr=null,bd=null,fc=null;function oy(){if(fc)return fc;var i,r=bd,l=r.length,h,p="value"in fr?fr.value:fr.textContent,y=p.length;for(i=0;i<l&&r[i]===p[i];i++);var _=l-i;for(h=1;h<=_&&r[l-h]===p[y-h];h++);return fc=p.slice(i,1<h?1-h:void 0)}function gc(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function pc(){return!0}function cy(){return!1}function pi(i){function r(l,h,p,y,_){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=y,this.target=_,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(l=i[A],this[A]=l?l(y):y[A]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?pc:cy,this.isPropagationStopped=cy,this}return g(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=pc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=pc)},persist:function(){},isPersistent:pc}),r}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=pi(Zr),hl=g({},Zr,{view:0,detail:0}),pk=pi(hl),vd,Sd,dl,yc=g({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==dl&&(dl&&i.type==="mousemove"?(vd=i.screenX-dl.screenX,Sd=i.screenY-dl.screenY):Sd=vd=0,dl=i),vd)},movementY:function(i){return"movementY"in i?i.movementY:Sd}}),uy=pi(yc),mk=g({},yc,{dataTransfer:0}),yk=pi(mk),bk=g({},hl,{relatedTarget:0}),xd=pi(bk),vk=g({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sk=pi(vk),xk=g({},Zr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Ck=pi(xk),_k=g({},Zr,{data:0}),hy=pi(_k),Tk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ak(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=kk[i])?!!r[i]:!1}function Cd(){return Ak}var Ek=g({},hl,{key:function(i){if(i.key){var r=Tk[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=gc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?wk[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(i){return i.type==="keypress"?gc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?gc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Rk=pi(Ek),Mk=g({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dy=pi(Mk),Lk=g({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),Dk=pi(Lk),Bk=g({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ok=pi(Bk),Nk=g({},yc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Pk=pi(Nk),Ik=g({},Zr,{newState:0,oldState:0}),Fk=pi(Ik),$k=[9,13,27,32],_d=Nn&&"CompositionEvent"in window,fl=null;Nn&&"documentMode"in document&&(fl=document.documentMode);var zk=Nn&&"TextEvent"in window&&!fl,fy=Nn&&(!_d||fl&&8<fl&&11>=fl),gy=" ",py=!1;function my(i,r){switch(i){case"keyup":return $k.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yy(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ya=!1;function qk(i,r){switch(i){case"compositionend":return yy(r);case"keypress":return r.which!==32?null:(py=!0,gy);case"textInput":return i=r.data,i===gy&&py?null:i;default:return null}}function Uk(i,r){if(Ya)return i==="compositionend"||!_d&&my(i,r)?(i=oy(),fc=bd=fr=null,Ya=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return fy&&r.locale!=="ko"?null:r.data;default:return null}}var Hk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function by(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Hk[i.type]:r==="textarea"}function vy(i,r,l,h){Ga?ja?ja.push(h):ja=[h]:Ga=h,r=nu(r,"onChange"),0<r.length&&(l=new mc("onChange","change",null,l,h),i.push({event:l,listeners:r}))}var gl=null,pl=null;function Gk(i){Jb(i,0)}function bc(i){var r=dr(i);if(ty(r))return i}function Sy(i,r){if(i==="change")return r}var xy=!1;if(Nn){var Td;if(Nn){var wd="oninput"in document;if(!wd){var Cy=document.createElement("div");Cy.setAttribute("oninput","return;"),wd=typeof Cy.oninput=="function"}Td=wd}else Td=!1;xy=Td&&(!document.documentMode||9<document.documentMode)}function _y(){gl&&(gl.detachEvent("onpropertychange",Ty),pl=gl=null)}function Ty(i){if(i.propertyName==="value"&&bc(pl)){var r=[];vy(r,pl,i,pd(i)),ly(Gk,r)}}function jk(i,r,l){i==="focusin"?(_y(),gl=r,pl=l,gl.attachEvent("onpropertychange",Ty)):i==="focusout"&&_y()}function Yk(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return bc(pl)}function Wk(i,r){if(i==="click")return bc(r)}function Vk(i,r){if(i==="input"||i==="change")return bc(r)}function Xk(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var wi=typeof Object.is=="function"?Object.is:Xk;function ml(i,r){if(wi(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var l=Object.keys(i),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!Ae.call(r,p)||!wi(i[p],r[p]))return!1}return!0}function wy(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function ky(i,r){var l=wy(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=r&&h>=r)return{node:l,offset:r-i};i=h}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=wy(l)}}function Ay(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?Ay(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function Ey(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=hc(i.document);r instanceof i.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)i=r.contentWindow;else break;r=hc(i.document)}return r}function kd(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var Qk=Nn&&"documentMode"in document&&11>=document.documentMode,Wa=null,Ad=null,yl=null,Ed=!1;function Ry(i,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ed||Wa==null||Wa!==hc(h)||(h=Wa,"selectionStart"in h&&kd(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),yl&&ml(yl,h)||(yl=h,h=nu(Ad,"onSelect"),0<h.length&&(r=new mc("onSelect","select",null,r,l),i.push({event:r,listeners:h}),r.target=Wa)))}function Jr(i,r){var l={};return l[i.toLowerCase()]=r.toLowerCase(),l["Webkit"+i]="webkit"+r,l["Moz"+i]="moz"+r,l}var Va={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionrun:Jr("Transition","TransitionRun"),transitionstart:Jr("Transition","TransitionStart"),transitioncancel:Jr("Transition","TransitionCancel"),transitionend:Jr("Transition","TransitionEnd")},Rd={},My={};Nn&&(My=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function ta(i){if(Rd[i])return Rd[i];if(!Va[i])return i;var r=Va[i],l;for(l in r)if(r.hasOwnProperty(l)&&l in My)return Rd[i]=r[l];return i}var Ly=ta("animationend"),Dy=ta("animationiteration"),By=ta("animationstart"),Kk=ta("transitionrun"),Zk=ta("transitionstart"),Jk=ta("transitioncancel"),Oy=ta("transitionend"),Ny=new Map,Md="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Md.push("scrollEnd");function Ji(i,r){Ny.set(i,r),ct(r,[i])}var Py=new WeakMap;function Fi(i,r){if(typeof i=="object"&&i!==null){var l=Py.get(i);return l!==void 0?l:(r={value:i,source:r,stack:Zm(r)},Py.set(i,r),r)}return{value:i,source:r,stack:Zm(r)}}var $i=[],Xa=0,Ld=0;function vc(){for(var i=Xa,r=Ld=Xa=0;r<i;){var l=$i[r];$i[r++]=null;var h=$i[r];$i[r++]=null;var p=$i[r];$i[r++]=null;var y=$i[r];if($i[r++]=null,h!==null&&p!==null){var _=h.pending;_===null?p.next=p:(p.next=_.next,_.next=p),h.pending=p}y!==0&&Iy(l,p,y)}}function Sc(i,r,l,h){$i[Xa++]=i,$i[Xa++]=r,$i[Xa++]=l,$i[Xa++]=h,Ld|=h,i.lanes|=h,i=i.alternate,i!==null&&(i.lanes|=h)}function Dd(i,r,l,h){return Sc(i,r,l,h),xc(i)}function Qa(i,r){return Sc(i,null,null,r),xc(i)}function Iy(i,r,l){i.lanes|=l;var h=i.alternate;h!==null&&(h.lanes|=l);for(var p=!1,y=i.return;y!==null;)y.childLanes|=l,h=y.alternate,h!==null&&(h.childLanes|=l),y.tag===22&&(i=y.stateNode,i===null||i._visibility&1||(p=!0)),i=y,y=y.return;return i.tag===3?(y=i.stateNode,p&&r!==null&&(p=31-We(l),i=y.hiddenUpdates,h=i[p],h===null?i[p]=[r]:h.push(r),r.lane=l|536870912),y):null}function xc(i){if(50<Ul)throw Ul=0,$f=null,Error(a(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Ka={};function tA(i,r,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(i,r,l,h){return new tA(i,r,l,h)}function Bd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Pn(i,r){var l=i.alternate;return l===null?(l=ki(i.tag,r,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=r,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&65011712,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,r=i.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l.refCleanup=i.refCleanup,l}function Fy(i,r){i.flags&=65011714;var l=i.alternate;return l===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,r=l.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function Cc(i,r,l,h,p,y){var _=0;if(h=i,typeof i=="function")Bd(i)&&(_=1);else if(typeof i=="string")_=iE(i,l,ft.current)?26:i==="html"||i==="head"||i==="body"?27:5;else t:switch(i){case it:return i=ki(31,l,r,p),i.elementType=it,i.lanes=y,i;case S:return ea(l.children,p,y,r);case C:_=8,p|=24;break;case w:return i=ki(12,l,r,p|2),i.elementType=w,i.lanes=y,i;case D:return i=ki(13,l,r,p),i.elementType=D,i.lanes=y,i;case R:return i=ki(19,l,r,p),i.elementType=R,i.lanes=y,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case T:case E:_=10;break t;case k:_=9;break t;case O:_=11;break t;case N:_=14;break t;case K:_=16,h=null;break t}_=29,l=Error(a(130,i===null?"null":typeof i,"")),h=null}return r=ki(_,l,r,p),r.elementType=i,r.type=h,r.lanes=y,r}function ea(i,r,l,h){return i=ki(7,i,h,r),i.lanes=l,i}function Od(i,r,l){return i=ki(6,i,null,r),i.lanes=l,i}function Nd(i,r,l){return r=ki(4,i.children!==null?i.children:[],i.key,r),r.lanes=l,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Za=[],Ja=0,_c=null,Tc=0,zi=[],qi=0,ia=null,In=1,Fn="";function na(i,r){Za[Ja++]=Tc,Za[Ja++]=_c,_c=i,Tc=r}function $y(i,r,l){zi[qi++]=In,zi[qi++]=Fn,zi[qi++]=ia,ia=i;var h=In;i=Fn;var p=32-We(h)-1;h&=~(1<<p),l+=1;var y=32-We(r)+p;if(30<y){var _=p-p%5;y=(h&(1<<_)-1).toString(32),h>>=_,p-=_,In=1<<32-We(r)+p|l<<p|h,Fn=y+i}else In=1<<y|l<<p|h,Fn=i}function Pd(i){i.return!==null&&(na(i,1),$y(i,1,0))}function Id(i){for(;i===_c;)_c=Za[--Ja],Za[Ja]=null,Tc=Za[--Ja],Za[Ja]=null;for(;i===ia;)ia=zi[--qi],zi[qi]=null,Fn=zi[--qi],zi[qi]=null,In=zi[--qi],zi[qi]=null}var ri=null,pe=null,Wt=!1,ra=null,dn=!1,Fd=Error(a(519));function aa(i){var r=Error(a(418,""));throw Sl(Fi(r,i)),Fd}function zy(i){var r=i.stateNode,l=i.type,h=i.memoizedProps;switch(r[Ee]=i,r[Ve]=h,l){case"dialog":zt("cancel",r),zt("close",r);break;case"iframe":case"object":case"embed":zt("load",r);break;case"video":case"audio":for(l=0;l<Gl.length;l++)zt(Gl[l],r);break;case"source":zt("error",r);break;case"img":case"image":case"link":zt("error",r),zt("load",r);break;case"details":zt("toggle",r);break;case"input":zt("invalid",r),ey(r,h.value,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name,!0),uc(r);break;case"select":zt("invalid",r);break;case"textarea":zt("invalid",r),ny(r,h.value,h.defaultValue,h.children),uc(r)}l=h.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||r.textContent===""+l||h.suppressHydrationWarning===!0||nv(r.textContent,l)?(h.popover!=null&&(zt("beforetoggle",r),zt("toggle",r)),h.onScroll!=null&&zt("scroll",r),h.onScrollEnd!=null&&zt("scrollend",r),h.onClick!=null&&(r.onclick=ru),r=!0):r=!1,r||aa(i)}function qy(i){for(ri=i.return;ri;)switch(ri.tag){case 5:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:ri=ri.return}}function bl(i){if(i!==ri)return!1;if(!Wt)return qy(i),Wt=!0,!1;var r=i.tag,l;if((l=r!==3&&r!==27)&&((l=r===5)&&(l=i.type,l=!(l!=="form"&&l!=="button")||eg(i.type,i.memoizedProps)),l=!l),l&&pe&&aa(i),qy(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));t:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(l=i.data,l==="/$"){if(r===0){pe=en(i.nextSibling);break t}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++;i=i.nextSibling}pe=null}}else r===27?(r=pe,Rr(i.type)?(i=ag,ag=null,pe=i):pe=r):pe=ri?en(i.stateNode.nextSibling):null;return!0}function vl(){pe=ri=null,Wt=!1}function Uy(){var i=ra;return i!==null&&(bi===null?bi=i:bi.push.apply(bi,i),ra=null),i}function Sl(i){ra===null?ra=[i]:ra.push(i)}var $d=H(null),sa=null,$n=null;function gr(i,r,l){tt($d,r._currentValue),r._currentValue=l}function zn(i){i._currentValue=$d.current,ot($d)}function zd(i,r,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),i===l)break;i=i.return}}function qd(i,r,l,h){var p=i.child;for(p!==null&&(p.return=i);p!==null;){var y=p.dependencies;if(y!==null){var _=p.child;y=y.firstContext;t:for(;y!==null;){var A=y;y=p;for(var B=0;B<r.length;B++)if(A.context===r[B]){y.lanes|=l,A=y.alternate,A!==null&&(A.lanes|=l),zd(y.return,l,i),h||(_=null);break t}y=A.next}}else if(p.tag===18){if(_=p.return,_===null)throw Error(a(341));_.lanes|=l,y=_.alternate,y!==null&&(y.lanes|=l),zd(_,l,i),_=null}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===i){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}}function xl(i,r,l,h){i=null;for(var p=r,y=!1;p!==null;){if(!y){if((p.flags&524288)!==0)y=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var _=p.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var A=p.type;wi(p.pendingProps.value,_.value)||(i!==null?i.push(A):i=[A])}}else if(p===Lt.current){if(_=p.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(i!==null?i.push(Ql):i=[Ql])}p=p.return}i!==null&&qd(r,i,l,h),r.flags|=262144}function wc(i){for(i=i.firstContext;i!==null;){if(!wi(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function la(i){sa=i,$n=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Qe(i){return Hy(sa,i)}function kc(i,r){return sa===null&&la(i),Hy(i,r)}function Hy(i,r){var l=r._currentValue;if(r={context:r,memoizedValue:l,next:null},$n===null){if(i===null)throw Error(a(308));$n=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else $n=$n.next=r;return l}var eA=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(l,h){i.push(h)}};this.abort=function(){r.aborted=!0,i.forEach(function(l){return l()})}},iA=e.unstable_scheduleCallback,nA=e.unstable_NormalPriority,Me={$$typeof:E,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ud(){return{controller:new eA,data:new Map,refCount:0}}function Cl(i){i.refCount--,i.refCount===0&&iA(nA,function(){i.controller.abort()})}var _l=null,Hd=0,ts=0,es=null;function rA(i,r){if(_l===null){var l=_l=[];Hd=0,ts=Yf(),es={status:"pending",value:void 0,then:function(h){l.push(h)}}}return Hd++,r.then(Gy,Gy),r}function Gy(){if(--Hd===0&&_l!==null){es!==null&&(es.status="fulfilled");var i=_l;_l=null,ts=0,es=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function aA(i,r){var l=[],h={status:"pending",value:null,reason:null,then:function(p){l.push(p)}};return i.then(function(){h.status="fulfilled",h.value=r;for(var p=0;p<l.length;p++)(0,l[p])(r)},function(p){for(h.status="rejected",h.reason=p,p=0;p<l.length;p++)(0,l[p])(void 0)}),h}var jy=M.S;M.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&rA(i,r),jy!==null&&jy(i,r)};var oa=H(null);function Gd(){var i=oa.current;return i!==null?i:le.pooledCache}function Ac(i,r){r===null?tt(oa,oa.current):tt(oa,r.pool)}function Yy(){var i=Gd();return i===null?null:{parent:Me._currentValue,pool:i}}var Tl=Error(a(460)),Wy=Error(a(474)),Ec=Error(a(542)),jd={then:function(){}};function Vy(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Rc(){}function Xy(i,r,l){switch(l=i[l],l===void 0?i.push(r):l!==r&&(r.then(Rc,Rc),r=l),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Ky(i),i;default:if(typeof r.status=="string")r.then(Rc,Rc);else{if(i=le,i!==null&&100<i.shellSuspendCounter)throw Error(a(482));i=r,i.status="pending",i.then(function(h){if(r.status==="pending"){var p=r;p.status="fulfilled",p.value=h}},function(h){if(r.status==="pending"){var p=r;p.status="rejected",p.reason=h}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Ky(i),i}throw wl=r,Tl}}var wl=null;function Qy(){if(wl===null)throw Error(a(459));var i=wl;return wl=null,i}function Ky(i){if(i===Tl||i===Ec)throw Error(a(483))}var pr=!1;function Yd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wd(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function mr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function yr(i,r,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Jt&2)!==0){var p=h.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),h.pending=r,r=xc(i),Iy(i,null,l),r}return Sc(i,h,r,l),xc(i)}function kl(i,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194048)!==0)){var h=r.lanes;h&=i.pendingLanes,l|=h,r.lanes=l,be(i,l)}}function Vd(i,r){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var _={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};y===null?p=y=_:y=y.next=_,l=l.next}while(l!==null);y===null?p=y=r:y=y.next=r}else p=y=r;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:h.shared,callbacks:h.callbacks},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=r:i.next=r,l.lastBaseUpdate=r}var Xd=!1;function Al(){if(Xd){var i=es;if(i!==null)throw i}}function El(i,r,l,h){Xd=!1;var p=i.updateQueue;pr=!1;var y=p.firstBaseUpdate,_=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var B=A,G=B.next;B.next=null,_===null?y=G:_.next=G,_=B;var Q=i.alternate;Q!==null&&(Q=Q.updateQueue,A=Q.lastBaseUpdate,A!==_&&(A===null?Q.firstBaseUpdate=G:A.next=G,Q.lastBaseUpdate=B))}if(y!==null){var et=p.baseState;_=0,Q=G=B=null,A=y;do{var Y=A.lane&-536870913,V=Y!==A.lane;if(V?(Gt&Y)===Y:(h&Y)===Y){Y!==0&&Y===ts&&(Xd=!0),Q!==null&&(Q=Q.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ot=i,Et=A;Y=r;var ne=l;switch(Et.tag){case 1:if(Ot=Et.payload,typeof Ot=="function"){et=Ot.call(ne,et,Y);break t}et=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=Et.payload,Y=typeof Ot=="function"?Ot.call(ne,et,Y):Ot,Y==null)break t;et=g({},et,Y);break t;case 2:pr=!0}}Y=A.callback,Y!==null&&(i.flags|=64,V&&(i.flags|=8192),V=p.callbacks,V===null?p.callbacks=[Y]:V.push(Y))}else V={lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Q===null?(G=Q=V,B=et):Q=Q.next=V,_|=Y;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;V=A,A=V.next,V.next=null,p.lastBaseUpdate=V,p.shared.pending=null}}while(!0);Q===null&&(B=et),p.baseState=B,p.firstBaseUpdate=G,p.lastBaseUpdate=Q,y===null&&(p.shared.lanes=0),wr|=_,i.lanes=_,i.memoizedState=et}}function Zy(i,r){if(typeof i!="function")throw Error(a(191,i));i.call(r)}function Jy(i,r){var l=i.callbacks;if(l!==null)for(i.callbacks=null,i=0;i<l.length;i++)Zy(l[i],r)}var is=H(null),Mc=H(0);function t0(i,r){i=Wn,tt(Mc,i),tt(is,r),Wn=i|r.baseLanes}function Qd(){tt(Mc,Wn),tt(is,is.current)}function Kd(){Wn=Mc.current,ot(is),ot(Mc)}var br=0,It=null,ee=null,Te=null,Lc=!1,ns=!1,ca=!1,Dc=0,Rl=0,rs=null,sA=0;function ve(){throw Error(a(321))}function Zd(i,r){if(r===null)return!1;for(var l=0;l<r.length&&l<i.length;l++)if(!wi(i[l],r[l]))return!1;return!0}function Jd(i,r,l,h,p,y){return br=y,It=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,M.H=i===null||i.memoizedState===null?I0:F0,ca=!1,y=l(h,p),ca=!1,ns&&(y=i0(r,l,h,p)),e0(i),y}function e0(i){M.H=Fc;var r=ee!==null&&ee.next!==null;if(br=0,Te=ee=It=null,Lc=!1,Rl=0,rs=null,r)throw Error(a(300));i===null||Pe||(i=i.dependencies,i!==null&&wc(i)&&(Pe=!0))}function i0(i,r,l,h){It=i;var p=0;do{if(ns&&(rs=null),Rl=0,ns=!1,25<=p)throw Error(a(301));if(p+=1,Te=ee=null,i.updateQueue!=null){var y=i.updateQueue;y.lastEffect=null,y.events=null,y.stores=null,y.memoCache!=null&&(y.memoCache.index=0)}M.H=fA,y=r(l,h)}while(ns);return y}function lA(){var i=M.H,r=i.useState()[0];return r=typeof r.then=="function"?Ml(r):r,i=i.useState()[0],(ee!==null?ee.memoizedState:null)!==i&&(It.flags|=1024),r}function tf(){var i=Dc!==0;return Dc=0,i}function ef(i,r,l){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~l}function nf(i){if(Lc){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Lc=!1}br=0,Te=ee=It=null,ns=!1,Rl=Dc=0,rs=null}function mi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?It.memoizedState=Te=i:Te=Te.next=i,Te}function we(){if(ee===null){var i=It.alternate;i=i!==null?i.memoizedState:null}else i=ee.next;var r=Te===null?It.memoizedState:Te.next;if(r!==null)Te=r,ee=i;else{if(i===null)throw It.alternate===null?Error(a(467)):Error(a(310));ee=i,i={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},Te===null?It.memoizedState=Te=i:Te=Te.next=i}return Te}function rf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ml(i){var r=Rl;return Rl+=1,rs===null&&(rs=[]),i=Xy(rs,i,r),r=It,(Te===null?r.memoizedState:Te.next)===null&&(r=r.alternate,M.H=r===null||r.memoizedState===null?I0:F0),i}function Bc(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Ml(i);if(i.$$typeof===E)return Qe(i)}throw Error(a(438,String(i)))}function af(i){var r=null,l=It.updateQueue;if(l!==null&&(r=l.memoCache),r==null){var h=It.alternate;h!==null&&(h=h.updateQueue,h!==null&&(h=h.memoCache,h!=null&&(r={data:h.data.map(function(p){return p.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),l===null&&(l=rf(),It.updateQueue=l),l.memoCache=r,l=r.data[r.index],l===void 0)for(l=r.data[r.index]=Array(i),h=0;h<i;h++)l[h]=nt;return r.index++,l}function qn(i,r){return typeof r=="function"?r(i):r}function Oc(i){var r=we();return sf(r,ee,i)}function sf(i,r,l){var h=i.queue;if(h===null)throw Error(a(311));h.lastRenderedReducer=l;var p=i.baseQueue,y=h.pending;if(y!==null){if(p!==null){var _=p.next;p.next=y.next,y.next=_}r.baseQueue=p=y,h.pending=null}if(y=i.baseState,p===null)i.memoizedState=y;else{r=p.next;var A=_=null,B=null,G=r,Q=!1;do{var et=G.lane&-536870913;if(et!==G.lane?(Gt&et)===et:(br&et)===et){var Y=G.revertLane;if(Y===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),et===ts&&(Q=!0);else if((br&Y)===Y){G=G.next,Y===ts&&(Q=!0);continue}else et={lane:0,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},B===null?(A=B=et,_=y):B=B.next=et,It.lanes|=Y,wr|=Y;et=G.action,ca&&l(y,et),y=G.hasEagerState?G.eagerState:l(y,et)}else Y={lane:et,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},B===null?(A=B=Y,_=y):B=B.next=Y,It.lanes|=et,wr|=et;G=G.next}while(G!==null&&G!==r);if(B===null?_=y:B.next=A,!wi(y,i.memoizedState)&&(Pe=!0,Q&&(l=es,l!==null)))throw l;i.memoizedState=y,i.baseState=_,i.baseQueue=B,h.lastRenderedState=y}return p===null&&(h.lanes=0),[i.memoizedState,h.dispatch]}function lf(i){var r=we(),l=r.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,y=r.memoizedState;if(p!==null){l.pending=null;var _=p=p.next;do y=i(y,_.action),_=_.next;while(_!==p);wi(y,r.memoizedState)||(Pe=!0),r.memoizedState=y,r.baseQueue===null&&(r.baseState=y),l.lastRenderedState=y}return[y,h]}function n0(i,r,l){var h=It,p=we(),y=Wt;if(y){if(l===void 0)throw Error(a(407));l=l()}else l=r();var _=!wi((ee||p).memoizedState,l);_&&(p.memoizedState=l,Pe=!0),p=p.queue;var A=s0.bind(null,h,p,i);if(Ll(2048,8,A,[i]),p.getSnapshot!==r||_||Te!==null&&Te.memoizedState.tag&1){if(h.flags|=2048,as(9,Nc(),a0.bind(null,h,p,l,r),null),le===null)throw Error(a(349));y||(br&124)!==0||r0(h,r,l)}return l}function r0(i,r,l){i.flags|=16384,i={getSnapshot:r,value:l},r=It.updateQueue,r===null?(r=rf(),It.updateQueue=r,r.stores=[i]):(l=r.stores,l===null?r.stores=[i]:l.push(i))}function a0(i,r,l,h){r.value=l,r.getSnapshot=h,l0(r)&&o0(i)}function s0(i,r,l){return l(function(){l0(r)&&o0(i)})}function l0(i){var r=i.getSnapshot;i=i.value;try{var l=r();return!wi(i,l)}catch{return!0}}function o0(i){var r=Qa(i,2);r!==null&&Li(r,i,2)}function of(i){var r=mi();if(typeof i=="function"){var l=i;if(i=l(),ca){Qi(!0);try{l()}finally{Qi(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:i},r}function c0(i,r,l,h){return i.baseState=l,sf(i,ee,typeof h=="function"?h:qn)}function oA(i,r,l,h,p){if(Ic(i))throw Error(a(485));if(i=r.action,i!==null){var y={payload:p,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){y.listeners.push(_)}};M.T!==null?l(!0):y.isTransition=!1,h(y),l=r.pending,l===null?(y.next=r.pending=y,u0(r,y)):(y.next=l.next,r.pending=l.next=y)}}function u0(i,r){var l=r.action,h=r.payload,p=i.state;if(r.isTransition){var y=M.T,_={};M.T=_;try{var A=l(p,h),B=M.S;B!==null&&B(_,A),h0(i,r,A)}catch(G){cf(i,r,G)}finally{M.T=y}}else try{y=l(p,h),h0(i,r,y)}catch(G){cf(i,r,G)}}function h0(i,r,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(h){d0(i,r,h)},function(h){return cf(i,r,h)}):d0(i,r,l)}function d0(i,r,l){r.status="fulfilled",r.value=l,f0(r),i.state=l,r=i.pending,r!==null&&(l=r.next,l===r?i.pending=null:(l=l.next,r.next=l,u0(i,l)))}function cf(i,r,l){var h=i.pending;if(i.pending=null,h!==null){h=h.next;do r.status="rejected",r.reason=l,f0(r),r=r.next;while(r!==h)}i.action=null}function f0(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function g0(i,r){return r}function p0(i,r){if(Wt){var l=le.formState;if(l!==null){t:{var h=It;if(Wt){if(pe){e:{for(var p=pe,y=dn;p.nodeType!==8;){if(!y){p=null;break e}if(p=en(p.nextSibling),p===null){p=null;break e}}y=p.data,p=y==="F!"||y==="F"?p:null}if(p){pe=en(p.nextSibling),h=p.data==="F!";break t}}aa(h)}h=!1}h&&(r=l[0])}}return l=mi(),l.memoizedState=l.baseState=r,h={pending:null,lanes:0,dispatch:null,lastRenderedReducer:g0,lastRenderedState:r},l.queue=h,l=O0.bind(null,It,h),h.dispatch=l,h=of(!1),y=gf.bind(null,It,!1,h.queue),h=mi(),p={state:r,dispatch:null,action:i,pending:null},h.queue=p,l=oA.bind(null,It,p,y,l),p.dispatch=l,h.memoizedState=i,[r,l,!1]}function m0(i){var r=we();return y0(r,ee,i)}function y0(i,r,l){if(r=sf(i,r,g0)[0],i=Oc(qn)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var h=Ml(r)}catch(_){throw _===Tl?Ec:_}else h=r;r=we();var p=r.queue,y=p.dispatch;return l!==r.memoizedState&&(It.flags|=2048,as(9,Nc(),cA.bind(null,p,l),null)),[h,y,i]}function cA(i,r){i.action=r}function b0(i){var r=we(),l=ee;if(l!==null)return y0(r,l,i);we(),r=r.memoizedState,l=we();var h=l.queue.dispatch;return l.memoizedState=i,[r,h,!1]}function as(i,r,l,h){return i={tag:i,create:l,deps:h,inst:r,next:null},r=It.updateQueue,r===null&&(r=rf(),It.updateQueue=r),l=r.lastEffect,l===null?r.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,r.lastEffect=i),i}function Nc(){return{destroy:void 0,resource:void 0}}function v0(){return we().memoizedState}function Pc(i,r,l,h){var p=mi();h=h===void 0?null:h,It.flags|=i,p.memoizedState=as(1|r,Nc(),l,h)}function Ll(i,r,l,h){var p=we();h=h===void 0?null:h;var y=p.memoizedState.inst;ee!==null&&h!==null&&Zd(h,ee.memoizedState.deps)?p.memoizedState=as(r,y,l,h):(It.flags|=i,p.memoizedState=as(1|r,y,l,h))}function S0(i,r){Pc(8390656,8,i,r)}function x0(i,r){Ll(2048,8,i,r)}function C0(i,r){return Ll(4,2,i,r)}function _0(i,r){return Ll(4,4,i,r)}function T0(i,r){if(typeof r=="function"){i=i();var l=r(i);return function(){typeof l=="function"?l():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function w0(i,r,l){l=l!=null?l.concat([i]):null,Ll(4,4,T0.bind(null,r,i),l)}function uf(){}function k0(i,r){var l=we();r=r===void 0?null:r;var h=l.memoizedState;return r!==null&&Zd(r,h[1])?h[0]:(l.memoizedState=[i,r],i)}function A0(i,r){var l=we();r=r===void 0?null:r;var h=l.memoizedState;if(r!==null&&Zd(r,h[1]))return h[0];if(h=i(),ca){Qi(!0);try{i()}finally{Qi(!1)}}return l.memoizedState=[h,r],h}function hf(i,r,l){return l===void 0||(br&1073741824)!==0?i.memoizedState=r:(i.memoizedState=l,i=Mb(),It.lanes|=i,wr|=i,l)}function E0(i,r,l,h){return wi(l,r)?l:is.current!==null?(i=hf(i,l,h),wi(i,r)||(Pe=!0),i):(br&42)===0?(Pe=!0,i.memoizedState=l):(i=Mb(),It.lanes|=i,wr|=i,r)}function R0(i,r,l,h,p){var y=F.p;F.p=y!==0&&8>y?y:8;var _=M.T,A={};M.T=A,gf(i,!1,r,l);try{var B=p(),G=M.S;if(G!==null&&G(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var Q=aA(B,h);Dl(i,r,Q,Mi(i))}else Dl(i,r,h,Mi(i))}catch(et){Dl(i,r,{then:function(){},status:"rejected",reason:et},Mi())}finally{F.p=y,M.T=_}}function uA(){}function df(i,r,l,h){if(i.tag!==5)throw Error(a(476));var p=M0(i).queue;R0(i,p,r,$,l===null?uA:function(){return L0(i),l(h)})}function M0(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:$},next:null};var l={};return r.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:l},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function L0(i){var r=M0(i).next.queue;Dl(i,r,{},Mi())}function ff(){return Qe(Ql)}function D0(){return we().memoizedState}function B0(){return we().memoizedState}function hA(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var l=Mi();i=mr(l);var h=yr(r,i,l);h!==null&&(Li(h,r,l),kl(h,r,l)),r={cache:Ud()},i.payload=r;return}r=r.return}}function dA(i,r,l){var h=Mi();l={lane:h,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Ic(i)?N0(r,l):(l=Dd(i,r,l,h),l!==null&&(Li(l,i,h),P0(l,r,h)))}function O0(i,r,l){var h=Mi();Dl(i,r,l,h)}function Dl(i,r,l,h){var p={lane:h,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ic(i))N0(r,p);else{var y=i.alternate;if(i.lanes===0&&(y===null||y.lanes===0)&&(y=r.lastRenderedReducer,y!==null))try{var _=r.lastRenderedState,A=y(_,l);if(p.hasEagerState=!0,p.eagerState=A,wi(A,_))return Sc(i,r,p,0),le===null&&vc(),!1}catch{}finally{}if(l=Dd(i,r,p,h),l!==null)return Li(l,i,h),P0(l,r,h),!0}return!1}function gf(i,r,l,h){if(h={lane:2,revertLane:Yf(),action:h,hasEagerState:!1,eagerState:null,next:null},Ic(i)){if(r)throw Error(a(479))}else r=Dd(i,l,h,2),r!==null&&Li(r,i,2)}function Ic(i){var r=i.alternate;return i===It||r!==null&&r===It}function N0(i,r){ns=Lc=!0;var l=i.pending;l===null?r.next=r:(r.next=l.next,l.next=r),i.pending=r}function P0(i,r,l){if((l&4194048)!==0){var h=r.lanes;h&=i.pendingLanes,l|=h,r.lanes=l,be(i,l)}}var Fc={readContext:Qe,use:Bc,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve,useHostTransitionStatus:ve,useFormState:ve,useActionState:ve,useOptimistic:ve,useMemoCache:ve,useCacheRefresh:ve},I0={readContext:Qe,use:Bc,useCallback:function(i,r){return mi().memoizedState=[i,r===void 0?null:r],i},useContext:Qe,useEffect:S0,useImperativeHandle:function(i,r,l){l=l!=null?l.concat([i]):null,Pc(4194308,4,T0.bind(null,r,i),l)},useLayoutEffect:function(i,r){return Pc(4194308,4,i,r)},useInsertionEffect:function(i,r){Pc(4,2,i,r)},useMemo:function(i,r){var l=mi();r=r===void 0?null:r;var h=i();if(ca){Qi(!0);try{i()}finally{Qi(!1)}}return l.memoizedState=[h,r],h},useReducer:function(i,r,l){var h=mi();if(l!==void 0){var p=l(r);if(ca){Qi(!0);try{l(r)}finally{Qi(!1)}}}else p=r;return h.memoizedState=h.baseState=p,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:p},h.queue=i,i=i.dispatch=dA.bind(null,It,i),[h.memoizedState,i]},useRef:function(i){var r=mi();return i={current:i},r.memoizedState=i},useState:function(i){i=of(i);var r=i.queue,l=O0.bind(null,It,r);return r.dispatch=l,[i.memoizedState,l]},useDebugValue:uf,useDeferredValue:function(i,r){var l=mi();return hf(l,i,r)},useTransition:function(){var i=of(!1);return i=R0.bind(null,It,i.queue,!0,!1),mi().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,l){var h=It,p=mi();if(Wt){if(l===void 0)throw Error(a(407));l=l()}else{if(l=r(),le===null)throw Error(a(349));(Gt&124)!==0||r0(h,r,l)}p.memoizedState=l;var y={value:l,getSnapshot:r};return p.queue=y,S0(s0.bind(null,h,y,i),[i]),h.flags|=2048,as(9,Nc(),a0.bind(null,h,y,l,r),null),l},useId:function(){var i=mi(),r=le.identifierPrefix;if(Wt){var l=Fn,h=In;l=(h&~(1<<32-We(h)-1)).toString(32)+l,r="«"+r+"R"+l,l=Dc++,0<l&&(r+="H"+l.toString(32)),r+="»"}else l=sA++,r="«"+r+"r"+l.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:ff,useFormState:p0,useActionState:p0,useOptimistic:function(i){var r=mi();r.memoizedState=r.baseState=i;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=l,r=gf.bind(null,It,!0,l),l.dispatch=r,[i,r]},useMemoCache:af,useCacheRefresh:function(){return mi().memoizedState=hA.bind(null,It)}},F0={readContext:Qe,use:Bc,useCallback:k0,useContext:Qe,useEffect:x0,useImperativeHandle:w0,useInsertionEffect:C0,useLayoutEffect:_0,useMemo:A0,useReducer:Oc,useRef:v0,useState:function(){return Oc(qn)},useDebugValue:uf,useDeferredValue:function(i,r){var l=we();return E0(l,ee.memoizedState,i,r)},useTransition:function(){var i=Oc(qn)[0],r=we().memoizedState;return[typeof i=="boolean"?i:Ml(i),r]},useSyncExternalStore:n0,useId:D0,useHostTransitionStatus:ff,useFormState:m0,useActionState:m0,useOptimistic:function(i,r){var l=we();return c0(l,ee,i,r)},useMemoCache:af,useCacheRefresh:B0},fA={readContext:Qe,use:Bc,useCallback:k0,useContext:Qe,useEffect:x0,useImperativeHandle:w0,useInsertionEffect:C0,useLayoutEffect:_0,useMemo:A0,useReducer:lf,useRef:v0,useState:function(){return lf(qn)},useDebugValue:uf,useDeferredValue:function(i,r){var l=we();return ee===null?hf(l,i,r):E0(l,ee.memoizedState,i,r)},useTransition:function(){var i=lf(qn)[0],r=we().memoizedState;return[typeof i=="boolean"?i:Ml(i),r]},useSyncExternalStore:n0,useId:D0,useHostTransitionStatus:ff,useFormState:b0,useActionState:b0,useOptimistic:function(i,r){var l=we();return ee!==null?c0(l,ee,i,r):(l.baseState=i,[i,l.queue.dispatch])},useMemoCache:af,useCacheRefresh:B0},ss=null,Bl=0;function $c(i){var r=Bl;return Bl+=1,ss===null&&(ss=[]),Xy(ss,i,r)}function Ol(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function zc(i,r){throw r.$$typeof===m?Error(a(525)):(i=Object.prototype.toString.call(r),Error(a(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function $0(i){var r=i._init;return r(i._payload)}function z0(i){function r(z,P){if(i){var U=z.deletions;U===null?(z.deletions=[P],z.flags|=16):U.push(P)}}function l(z,P){if(!i)return null;for(;P!==null;)r(z,P),P=P.sibling;return null}function h(z){for(var P=new Map;z!==null;)z.key!==null?P.set(z.key,z):P.set(z.index,z),z=z.sibling;return P}function p(z,P){return z=Pn(z,P),z.index=0,z.sibling=null,z}function y(z,P,U){return z.index=U,i?(U=z.alternate,U!==null?(U=U.index,U<P?(z.flags|=67108866,P):U):(z.flags|=67108866,P)):(z.flags|=1048576,P)}function _(z){return i&&z.alternate===null&&(z.flags|=67108866),z}function A(z,P,U,Z){return P===null||P.tag!==6?(P=Od(U,z.mode,Z),P.return=z,P):(P=p(P,U),P.return=z,P)}function B(z,P,U,Z){var yt=U.type;return yt===S?Q(z,P,U.props.children,Z,U.key):P!==null&&(P.elementType===yt||typeof yt=="object"&&yt!==null&&yt.$$typeof===K&&$0(yt)===P.type)?(P=p(P,U.props),Ol(P,U),P.return=z,P):(P=Cc(U.type,U.key,U.props,null,z.mode,Z),Ol(P,U),P.return=z,P)}function G(z,P,U,Z){return P===null||P.tag!==4||P.stateNode.containerInfo!==U.containerInfo||P.stateNode.implementation!==U.implementation?(P=Nd(U,z.mode,Z),P.return=z,P):(P=p(P,U.children||[]),P.return=z,P)}function Q(z,P,U,Z,yt){return P===null||P.tag!==7?(P=ea(U,z.mode,Z,yt),P.return=z,P):(P=p(P,U),P.return=z,P)}function et(z,P,U){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Od(""+P,z.mode,U),P.return=z,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case b:return U=Cc(P.type,P.key,P.props,null,z.mode,U),Ol(U,P),U.return=z,U;case v:return P=Nd(P,z.mode,U),P.return=z,P;case K:var Z=P._init;return P=Z(P._payload),et(z,P,U)}if(j(P)||st(P))return P=ea(P,z.mode,U,null),P.return=z,P;if(typeof P.then=="function")return et(z,$c(P),U);if(P.$$typeof===E)return et(z,kc(z,P),U);zc(z,P)}return null}function Y(z,P,U,Z){var yt=P!==null?P.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return yt!==null?null:A(z,P,""+U,Z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case b:return U.key===yt?B(z,P,U,Z):null;case v:return U.key===yt?G(z,P,U,Z):null;case K:return yt=U._init,U=yt(U._payload),Y(z,P,U,Z)}if(j(U)||st(U))return yt!==null?null:Q(z,P,U,Z,null);if(typeof U.then=="function")return Y(z,P,$c(U),Z);if(U.$$typeof===E)return Y(z,P,kc(z,U),Z);zc(z,U)}return null}function V(z,P,U,Z,yt){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return z=z.get(U)||null,A(P,z,""+Z,yt);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:return z=z.get(Z.key===null?U:Z.key)||null,B(P,z,Z,yt);case v:return z=z.get(Z.key===null?U:Z.key)||null,G(P,z,Z,yt);case K:var Ft=Z._init;return Z=Ft(Z._payload),V(z,P,U,Z,yt)}if(j(Z)||st(Z))return z=z.get(U)||null,Q(P,z,Z,yt,null);if(typeof Z.then=="function")return V(z,P,U,$c(Z),yt);if(Z.$$typeof===E)return V(z,P,U,kc(P,Z),yt);zc(P,Z)}return null}function Ot(z,P,U,Z){for(var yt=null,Ft=null,Tt=P,Mt=P=0,Fe=null;Tt!==null&&Mt<U.length;Mt++){Tt.index>Mt?(Fe=Tt,Tt=null):Fe=Tt.sibling;var Yt=Y(z,Tt,U[Mt],Z);if(Yt===null){Tt===null&&(Tt=Fe);break}i&&Tt&&Yt.alternate===null&&r(z,Tt),P=y(Yt,P,Mt),Ft===null?yt=Yt:Ft.sibling=Yt,Ft=Yt,Tt=Fe}if(Mt===U.length)return l(z,Tt),Wt&&na(z,Mt),yt;if(Tt===null){for(;Mt<U.length;Mt++)Tt=et(z,U[Mt],Z),Tt!==null&&(P=y(Tt,P,Mt),Ft===null?yt=Tt:Ft.sibling=Tt,Ft=Tt);return Wt&&na(z,Mt),yt}for(Tt=h(Tt);Mt<U.length;Mt++)Fe=V(Tt,z,Mt,U[Mt],Z),Fe!==null&&(i&&Fe.alternate!==null&&Tt.delete(Fe.key===null?Mt:Fe.key),P=y(Fe,P,Mt),Ft===null?yt=Fe:Ft.sibling=Fe,Ft=Fe);return i&&Tt.forEach(function(Or){return r(z,Or)}),Wt&&na(z,Mt),yt}function Et(z,P,U,Z){if(U==null)throw Error(a(151));for(var yt=null,Ft=null,Tt=P,Mt=P=0,Fe=null,Yt=U.next();Tt!==null&&!Yt.done;Mt++,Yt=U.next()){Tt.index>Mt?(Fe=Tt,Tt=null):Fe=Tt.sibling;var Or=Y(z,Tt,Yt.value,Z);if(Or===null){Tt===null&&(Tt=Fe);break}i&&Tt&&Or.alternate===null&&r(z,Tt),P=y(Or,P,Mt),Ft===null?yt=Or:Ft.sibling=Or,Ft=Or,Tt=Fe}if(Yt.done)return l(z,Tt),Wt&&na(z,Mt),yt;if(Tt===null){for(;!Yt.done;Mt++,Yt=U.next())Yt=et(z,Yt.value,Z),Yt!==null&&(P=y(Yt,P,Mt),Ft===null?yt=Yt:Ft.sibling=Yt,Ft=Yt);return Wt&&na(z,Mt),yt}for(Tt=h(Tt);!Yt.done;Mt++,Yt=U.next())Yt=V(Tt,z,Mt,Yt.value,Z),Yt!==null&&(i&&Yt.alternate!==null&&Tt.delete(Yt.key===null?Mt:Yt.key),P=y(Yt,P,Mt),Ft===null?yt=Yt:Ft.sibling=Yt,Ft=Yt);return i&&Tt.forEach(function(gE){return r(z,gE)}),Wt&&na(z,Mt),yt}function ne(z,P,U,Z){if(typeof U=="object"&&U!==null&&U.type===S&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case b:t:{for(var yt=U.key;P!==null;){if(P.key===yt){if(yt=U.type,yt===S){if(P.tag===7){l(z,P.sibling),Z=p(P,U.props.children),Z.return=z,z=Z;break t}}else if(P.elementType===yt||typeof yt=="object"&&yt!==null&&yt.$$typeof===K&&$0(yt)===P.type){l(z,P.sibling),Z=p(P,U.props),Ol(Z,U),Z.return=z,z=Z;break t}l(z,P);break}else r(z,P);P=P.sibling}U.type===S?(Z=ea(U.props.children,z.mode,Z,U.key),Z.return=z,z=Z):(Z=Cc(U.type,U.key,U.props,null,z.mode,Z),Ol(Z,U),Z.return=z,z=Z)}return _(z);case v:t:{for(yt=U.key;P!==null;){if(P.key===yt)if(P.tag===4&&P.stateNode.containerInfo===U.containerInfo&&P.stateNode.implementation===U.implementation){l(z,P.sibling),Z=p(P,U.children||[]),Z.return=z,z=Z;break t}else{l(z,P);break}else r(z,P);P=P.sibling}Z=Nd(U,z.mode,Z),Z.return=z,z=Z}return _(z);case K:return yt=U._init,U=yt(U._payload),ne(z,P,U,Z)}if(j(U))return Ot(z,P,U,Z);if(st(U)){if(yt=st(U),typeof yt!="function")throw Error(a(150));return U=yt.call(U),Et(z,P,U,Z)}if(typeof U.then=="function")return ne(z,P,$c(U),Z);if(U.$$typeof===E)return ne(z,P,kc(z,U),Z);zc(z,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,P!==null&&P.tag===6?(l(z,P.sibling),Z=p(P,U),Z.return=z,z=Z):(l(z,P),Z=Od(U,z.mode,Z),Z.return=z,z=Z),_(z)):l(z,P)}return function(z,P,U,Z){try{Bl=0;var yt=ne(z,P,U,Z);return ss=null,yt}catch(Tt){if(Tt===Tl||Tt===Ec)throw Tt;var Ft=ki(29,Tt,null,z.mode);return Ft.lanes=Z,Ft.return=z,Ft}finally{}}}var ls=z0(!0),q0=z0(!1),Ui=H(null),fn=null;function vr(i){var r=i.alternate;tt(Le,Le.current&1),tt(Ui,i),fn===null&&(r===null||is.current!==null||r.memoizedState!==null)&&(fn=i)}function U0(i){if(i.tag===22){if(tt(Le,Le.current),tt(Ui,i),fn===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(fn=i)}}else Sr()}function Sr(){tt(Le,Le.current),tt(Ui,Ui.current)}function Un(i){ot(Ui),fn===i&&(fn=null),ot(Le)}var Le=H(0);function qc(i){for(var r=i;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||rg(l)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function pf(i,r,l,h){r=i.memoizedState,l=l(h,r),l=l==null?r:g({},r,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var mf={enqueueSetState:function(i,r,l){i=i._reactInternals;var h=Mi(),p=mr(h);p.payload=r,l!=null&&(p.callback=l),r=yr(i,p,h),r!==null&&(Li(r,i,h),kl(r,i,h))},enqueueReplaceState:function(i,r,l){i=i._reactInternals;var h=Mi(),p=mr(h);p.tag=1,p.payload=r,l!=null&&(p.callback=l),r=yr(i,p,h),r!==null&&(Li(r,i,h),kl(r,i,h))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var l=Mi(),h=mr(l);h.tag=2,r!=null&&(h.callback=r),r=yr(i,h,l),r!==null&&(Li(r,i,l),kl(r,i,l))}};function H0(i,r,l,h,p,y,_){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,y,_):r.prototype&&r.prototype.isPureReactComponent?!ml(l,h)||!ml(p,y):!0}function G0(i,r,l,h){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==i&&mf.enqueueReplaceState(r,r.state,null)}function ua(i,r){var l=r;if("ref"in r){l={};for(var h in r)h!=="ref"&&(l[h]=r[h])}if(i=i.defaultProps){l===r&&(l=g({},l));for(var p in i)l[p]===void 0&&(l[p]=i[p])}return l}var Uc=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function j0(i){Uc(i)}function Y0(i){console.error(i)}function W0(i){Uc(i)}function Hc(i,r){try{var l=i.onUncaughtError;l(r.value,{componentStack:r.stack})}catch(h){setTimeout(function(){throw h})}}function V0(i,r,l){try{var h=i.onCaughtError;h(l.value,{componentStack:l.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function yf(i,r,l){return l=mr(l),l.tag=3,l.payload={element:null},l.callback=function(){Hc(i,r)},l}function X0(i){return i=mr(i),i.tag=3,i}function Q0(i,r,l,h){var p=l.type.getDerivedStateFromError;if(typeof p=="function"){var y=h.value;i.payload=function(){return p(y)},i.callback=function(){V0(r,l,h)}}var _=l.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(i.callback=function(){V0(r,l,h),typeof p!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var A=h.stack;this.componentDidCatch(h.value,{componentStack:A!==null?A:""})})}function gA(i,r,l,h,p){if(l.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){if(r=l.alternate,r!==null&&xl(r,l,p,!0),l=Ui.current,l!==null){switch(l.tag){case 13:return fn===null?qf():l.alternate===null&&me===0&&(me=3),l.flags&=-257,l.flags|=65536,l.lanes=p,h===jd?l.flags|=16384:(r=l.updateQueue,r===null?l.updateQueue=new Set([h]):r.add(h),Hf(i,h,p)),!1;case 22:return l.flags|=65536,h===jd?l.flags|=16384:(r=l.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([h])},l.updateQueue=r):(l=r.retryQueue,l===null?r.retryQueue=new Set([h]):l.add(h)),Hf(i,h,p)),!1}throw Error(a(435,l.tag))}return Hf(i,h,p),qf(),!1}if(Wt)return r=Ui.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=p,h!==Fd&&(i=Error(a(422),{cause:h}),Sl(Fi(i,l)))):(h!==Fd&&(r=Error(a(423),{cause:h}),Sl(Fi(r,l))),i=i.current.alternate,i.flags|=65536,p&=-p,i.lanes|=p,h=Fi(h,l),p=yf(i.stateNode,h,p),Vd(i,p),me!==4&&(me=2)),!1;var y=Error(a(520),{cause:h});if(y=Fi(y,l),ql===null?ql=[y]:ql.push(y),me!==4&&(me=2),r===null)return!0;h=Fi(h,l),l=r;do{switch(l.tag){case 3:return l.flags|=65536,i=p&-p,l.lanes|=i,i=yf(l.stateNode,h,i),Vd(l,i),!1;case 1:if(r=l.type,y=l.stateNode,(l.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(kr===null||!kr.has(y))))return l.flags|=65536,p&=-p,l.lanes|=p,p=X0(p),Q0(p,i,l,h),Vd(l,p),!1}l=l.return}while(l!==null);return!1}var K0=Error(a(461)),Pe=!1;function qe(i,r,l,h){r.child=i===null?q0(r,null,l,h):ls(r,i.child,l,h)}function Z0(i,r,l,h,p){l=l.render;var y=r.ref;if("ref"in h){var _={};for(var A in h)A!=="ref"&&(_[A]=h[A])}else _=h;return la(r),h=Jd(i,r,l,_,y,p),A=tf(),i!==null&&!Pe?(ef(i,r,p),Hn(i,r,p)):(Wt&&A&&Pd(r),r.flags|=1,qe(i,r,h,p),r.child)}function J0(i,r,l,h,p){if(i===null){var y=l.type;return typeof y=="function"&&!Bd(y)&&y.defaultProps===void 0&&l.compare===null?(r.tag=15,r.type=y,tb(i,r,y,h,p)):(i=Cc(l.type,null,h,r,r.mode,p),i.ref=r.ref,i.return=r,r.child=i)}if(y=i.child,!wf(i,p)){var _=y.memoizedProps;if(l=l.compare,l=l!==null?l:ml,l(_,h)&&i.ref===r.ref)return Hn(i,r,p)}return r.flags|=1,i=Pn(y,h),i.ref=r.ref,i.return=r,r.child=i}function tb(i,r,l,h,p){if(i!==null){var y=i.memoizedProps;if(ml(y,h)&&i.ref===r.ref)if(Pe=!1,r.pendingProps=h=y,wf(i,p))(i.flags&131072)!==0&&(Pe=!0);else return r.lanes=i.lanes,Hn(i,r,p)}return bf(i,r,l,h,p)}function eb(i,r,l){var h=r.pendingProps,p=h.children,y=i!==null?i.memoizedState:null;if(h.mode==="hidden"){if((r.flags&128)!==0){if(h=y!==null?y.baseLanes|l:l,i!==null){for(p=r.child=i.child,y=0;p!==null;)y=y|p.lanes|p.childLanes,p=p.sibling;r.childLanes=y&~h}else r.childLanes=0,r.child=null;return ib(i,r,h,l)}if((l&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Ac(r,y!==null?y.cachePool:null),y!==null?t0(r,y):Qd(),U0(r);else return r.lanes=r.childLanes=536870912,ib(i,r,y!==null?y.baseLanes|l:l,l)}else y!==null?(Ac(r,y.cachePool),t0(r,y),Sr(),r.memoizedState=null):(i!==null&&Ac(r,null),Qd(),Sr());return qe(i,r,p,l),r.child}function ib(i,r,l,h){var p=Gd();return p=p===null?null:{parent:Me._currentValue,pool:p},r.memoizedState={baseLanes:l,cachePool:p},i!==null&&Ac(r,null),Qd(),U0(r),i!==null&&xl(i,r,h,!0),null}function Gc(i,r){var l=r.ref;if(l===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(a(284));(i===null||i.ref!==l)&&(r.flags|=4194816)}}function bf(i,r,l,h,p){return la(r),l=Jd(i,r,l,h,void 0,p),h=tf(),i!==null&&!Pe?(ef(i,r,p),Hn(i,r,p)):(Wt&&h&&Pd(r),r.flags|=1,qe(i,r,l,p),r.child)}function nb(i,r,l,h,p,y){return la(r),r.updateQueue=null,l=i0(r,h,l,p),e0(i),h=tf(),i!==null&&!Pe?(ef(i,r,y),Hn(i,r,y)):(Wt&&h&&Pd(r),r.flags|=1,qe(i,r,l,y),r.child)}function rb(i,r,l,h,p){if(la(r),r.stateNode===null){var y=Ka,_=l.contextType;typeof _=="object"&&_!==null&&(y=Qe(_)),y=new l(h,y),r.memoizedState=y.state!==null&&y.state!==void 0?y.state:null,y.updater=mf,r.stateNode=y,y._reactInternals=r,y=r.stateNode,y.props=h,y.state=r.memoizedState,y.refs={},Yd(r),_=l.contextType,y.context=typeof _=="object"&&_!==null?Qe(_):Ka,y.state=r.memoizedState,_=l.getDerivedStateFromProps,typeof _=="function"&&(pf(r,l,_,h),y.state=r.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof y.getSnapshotBeforeUpdate=="function"||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(_=y.state,typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount(),_!==y.state&&mf.enqueueReplaceState(y,y.state,null),El(r,h,y,p),Al(),y.state=r.memoizedState),typeof y.componentDidMount=="function"&&(r.flags|=4194308),h=!0}else if(i===null){y=r.stateNode;var A=r.memoizedProps,B=ua(l,A);y.props=B;var G=y.context,Q=l.contextType;_=Ka,typeof Q=="object"&&Q!==null&&(_=Qe(Q));var et=l.getDerivedStateFromProps;Q=typeof et=="function"||typeof y.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,Q||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(A||G!==_)&&G0(r,y,h,_),pr=!1;var Y=r.memoizedState;y.state=Y,El(r,h,y,p),Al(),G=r.memoizedState,A||Y!==G||pr?(typeof et=="function"&&(pf(r,l,et,h),G=r.memoizedState),(B=pr||H0(r,l,B,h,Y,G,_))?(Q||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(r.flags|=4194308)):(typeof y.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=G),y.props=h,y.state=G,y.context=_,h=B):(typeof y.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{y=r.stateNode,Wd(i,r),_=r.memoizedProps,Q=ua(l,_),y.props=Q,et=r.pendingProps,Y=y.context,G=l.contextType,B=Ka,typeof G=="object"&&G!==null&&(B=Qe(G)),A=l.getDerivedStateFromProps,(G=typeof A=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(_!==et||Y!==B)&&G0(r,y,h,B),pr=!1,Y=r.memoizedState,y.state=Y,El(r,h,y,p),Al();var V=r.memoizedState;_!==et||Y!==V||pr||i!==null&&i.dependencies!==null&&wc(i.dependencies)?(typeof A=="function"&&(pf(r,l,A,h),V=r.memoizedState),(Q=pr||H0(r,l,Q,h,Y,V,B)||i!==null&&i.dependencies!==null&&wc(i.dependencies))?(G||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(h,V,B),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(h,V,B)),typeof y.componentDidUpdate=="function"&&(r.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof y.componentDidUpdate!="function"||_===i.memoizedProps&&Y===i.memoizedState||(r.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||_===i.memoizedProps&&Y===i.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=V),y.props=h,y.state=V,y.context=B,h=Q):(typeof y.componentDidUpdate!="function"||_===i.memoizedProps&&Y===i.memoizedState||(r.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||_===i.memoizedProps&&Y===i.memoizedState||(r.flags|=1024),h=!1)}return y=h,Gc(i,r),h=(r.flags&128)!==0,y||h?(y=r.stateNode,l=h&&typeof l.getDerivedStateFromError!="function"?null:y.render(),r.flags|=1,i!==null&&h?(r.child=ls(r,i.child,null,p),r.child=ls(r,null,l,p)):qe(i,r,l,p),r.memoizedState=y.state,i=r.child):i=Hn(i,r,p),i}function ab(i,r,l,h){return vl(),r.flags|=256,qe(i,r,l,h),r.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(i){return{baseLanes:i,cachePool:Yy()}}function xf(i,r,l){return i=i!==null?i.childLanes&~l:0,r&&(i|=Hi),i}function sb(i,r,l){var h=r.pendingProps,p=!1,y=(r.flags&128)!==0,_;if((_=y)||(_=i!==null&&i.memoizedState===null?!1:(Le.current&2)!==0),_&&(p=!0,r.flags&=-129),_=(r.flags&32)!==0,r.flags&=-33,i===null){if(Wt){if(p?vr(r):Sr(),Wt){var A=pe,B;if(B=A){t:{for(B=A,A=dn;B.nodeType!==8;){if(!A){A=null;break t}if(B=en(B.nextSibling),B===null){A=null;break t}}A=B}A!==null?(r.memoizedState={dehydrated:A,treeContext:ia!==null?{id:In,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},B=ki(18,null,null,0),B.stateNode=A,B.return=r,r.child=B,ri=r,pe=null,B=!0):B=!1}B||aa(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return rg(A)?r.lanes=32:r.lanes=536870912,null;Un(r)}return A=h.children,h=h.fallback,p?(Sr(),p=r.mode,A=jc({mode:"hidden",children:A},p),h=ea(h,p,l,null),A.return=r,h.return=r,A.sibling=h,r.child=A,p=r.child,p.memoizedState=Sf(l),p.childLanes=xf(i,_,l),r.memoizedState=vf,h):(vr(r),Cf(r,A))}if(B=i.memoizedState,B!==null&&(A=B.dehydrated,A!==null)){if(y)r.flags&256?(vr(r),r.flags&=-257,r=_f(i,r,l)):r.memoizedState!==null?(Sr(),r.child=i.child,r.flags|=128,r=null):(Sr(),p=h.fallback,A=r.mode,h=jc({mode:"visible",children:h.children},A),p=ea(p,A,l,null),p.flags|=2,h.return=r,p.return=r,h.sibling=p,r.child=h,ls(r,i.child,null,l),h=r.child,h.memoizedState=Sf(l),h.childLanes=xf(i,_,l),r.memoizedState=vf,r=p);else if(vr(r),rg(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var G=_.dgst;_=G,h=Error(a(419)),h.stack="",h.digest=_,Sl({value:h,source:null,stack:null}),r=_f(i,r,l)}else if(Pe||xl(i,r,l,!1),_=(l&i.childLanes)!==0,Pe||_){if(_=le,_!==null&&(h=l&-l,h=(h&42)!==0?1:cn(h),h=(h&(_.suspendedLanes|l))!==0?0:h,h!==0&&h!==B.retryLane))throw B.retryLane=h,Qa(i,h),Li(_,i,h),K0;A.data==="$?"||qf(),r=_f(i,r,l)}else A.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=B.treeContext,pe=en(A.nextSibling),ri=r,Wt=!0,ra=null,dn=!1,i!==null&&(zi[qi++]=In,zi[qi++]=Fn,zi[qi++]=ia,In=i.id,Fn=i.overflow,ia=r),r=Cf(r,h.children),r.flags|=4096);return r}return p?(Sr(),p=h.fallback,A=r.mode,B=i.child,G=B.sibling,h=Pn(B,{mode:"hidden",children:h.children}),h.subtreeFlags=B.subtreeFlags&65011712,G!==null?p=Pn(G,p):(p=ea(p,A,l,null),p.flags|=2),p.return=r,h.return=r,h.sibling=p,r.child=h,h=p,p=r.child,A=i.child.memoizedState,A===null?A=Sf(l):(B=A.cachePool,B!==null?(G=Me._currentValue,B=B.parent!==G?{parent:G,pool:G}:B):B=Yy(),A={baseLanes:A.baseLanes|l,cachePool:B}),p.memoizedState=A,p.childLanes=xf(i,_,l),r.memoizedState=vf,h):(vr(r),l=i.child,i=l.sibling,l=Pn(l,{mode:"visible",children:h.children}),l.return=r,l.sibling=null,i!==null&&(_=r.deletions,_===null?(r.deletions=[i],r.flags|=16):_.push(i)),r.child=l,r.memoizedState=null,l)}function Cf(i,r){return r=jc({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function jc(i,r){return i=ki(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function _f(i,r,l){return ls(r,i.child,null,l),i=Cf(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function lb(i,r,l){i.lanes|=r;var h=i.alternate;h!==null&&(h.lanes|=r),zd(i.return,r,l)}function Tf(i,r,l,h,p){var y=i.memoizedState;y===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=h,y.tail=l,y.tailMode=p)}function ob(i,r,l){var h=r.pendingProps,p=h.revealOrder,y=h.tail;if(qe(i,r,h.children,l),h=Le.current,(h&2)!==0)h=h&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)t:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&lb(i,l,r);else if(i.tag===19)lb(i,l,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break t;for(;i.sibling===null;){if(i.return===null||i.return===r)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}switch(tt(Le,h),p){case"forwards":for(l=r.child,p=null;l!==null;)i=l.alternate,i!==null&&qc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Tf(r,!1,p,l,y);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(i=p.alternate,i!==null&&qc(i)===null){r.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Tf(r,!0,l,null,y);break;case"together":Tf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Hn(i,r,l){if(i!==null&&(r.dependencies=i.dependencies),wr|=r.lanes,(l&r.childLanes)===0)if(i!==null){if(xl(i,r,l,!1),(l&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(a(153));if(r.child!==null){for(i=r.child,l=Pn(i,i.pendingProps),r.child=l,l.return=r;i.sibling!==null;)i=i.sibling,l=l.sibling=Pn(i,i.pendingProps),l.return=r;l.sibling=null}return r.child}function wf(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&wc(i)))}function pA(i,r,l){switch(r.tag){case 3:Bt(r,r.stateNode.containerInfo),gr(r,Me,i.memoizedState.cache),vl();break;case 27:case 5:Zt(r);break;case 4:Bt(r,r.stateNode.containerInfo);break;case 10:gr(r,r.type,r.memoizedProps.value);break;case 13:var h=r.memoizedState;if(h!==null)return h.dehydrated!==null?(vr(r),r.flags|=128,null):(l&r.child.childLanes)!==0?sb(i,r,l):(vr(r),i=Hn(i,r,l),i!==null?i.sibling:null);vr(r);break;case 19:var p=(i.flags&128)!==0;if(h=(l&r.childLanes)!==0,h||(xl(i,r,l,!1),h=(l&r.childLanes)!==0),p){if(h)return ob(i,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),tt(Le,Le.current),h)break;return null;case 22:case 23:return r.lanes=0,eb(i,r,l);case 24:gr(r,Me,i.memoizedState.cache)}return Hn(i,r,l)}function cb(i,r,l){if(i!==null)if(i.memoizedProps!==r.pendingProps)Pe=!0;else{if(!wf(i,l)&&(r.flags&128)===0)return Pe=!1,pA(i,r,l);Pe=(i.flags&131072)!==0}else Pe=!1,Wt&&(r.flags&1048576)!==0&&$y(r,Tc,r.index);switch(r.lanes=0,r.tag){case 16:t:{i=r.pendingProps;var h=r.elementType,p=h._init;if(h=p(h._payload),r.type=h,typeof h=="function")Bd(h)?(i=ua(h,i),r.tag=1,r=rb(null,r,h,i,l)):(r.tag=0,r=bf(null,r,h,i,l));else{if(h!=null){if(p=h.$$typeof,p===O){r.tag=11,r=Z0(null,r,h,i,l);break t}else if(p===N){r.tag=14,r=J0(null,r,h,i,l);break t}}throw r=W(h)||h,Error(a(306,r,""))}}return r;case 0:return bf(i,r,r.type,r.pendingProps,l);case 1:return h=r.type,p=ua(h,r.pendingProps),rb(i,r,h,p,l);case 3:t:{if(Bt(r,r.stateNode.containerInfo),i===null)throw Error(a(387));h=r.pendingProps;var y=r.memoizedState;p=y.element,Wd(i,r),El(r,h,null,l);var _=r.memoizedState;if(h=_.cache,gr(r,Me,h),h!==y.cache&&qd(r,[Me],l,!0),Al(),h=_.element,y.isDehydrated)if(y={element:h,isDehydrated:!1,cache:_.cache},r.updateQueue.baseState=y,r.memoizedState=y,r.flags&256){r=ab(i,r,h,l);break t}else if(h!==p){p=Fi(Error(a(424)),r),Sl(p),r=ab(i,r,h,l);break t}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(pe=en(i.firstChild),ri=r,Wt=!0,ra=null,dn=!0,l=q0(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(vl(),h===p){r=Hn(i,r,l);break t}qe(i,r,h,l)}r=r.child}return r;case 26:return Gc(i,r),i===null?(l=fv(r.type,null,r.pendingProps,null))?r.memoizedState=l:Wt||(l=r.type,i=r.pendingProps,h=au(ht.current).createElement(l),h[Ee]=r,h[Ve]=i,He(h,l,i),Ce(h),r.stateNode=h):r.memoizedState=fv(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Zt(r),i===null&&Wt&&(h=r.stateNode=uv(r.type,r.pendingProps,ht.current),ri=r,dn=!0,p=pe,Rr(r.type)?(ag=p,pe=en(h.firstChild)):pe=p),qe(i,r,r.pendingProps.children,l),Gc(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Wt&&((p=h=pe)&&(h=HA(h,r.type,r.pendingProps,dn),h!==null?(r.stateNode=h,ri=r,pe=en(h.firstChild),dn=!1,p=!0):p=!1),p||aa(r)),Zt(r),p=r.type,y=r.pendingProps,_=i!==null?i.memoizedProps:null,h=y.children,eg(p,y)?h=null:_!==null&&eg(p,_)&&(r.flags|=32),r.memoizedState!==null&&(p=Jd(i,r,lA,null,null,l),Ql._currentValue=p),Gc(i,r),qe(i,r,h,l),r.child;case 6:return i===null&&Wt&&((i=l=pe)&&(l=GA(l,r.pendingProps,dn),l!==null?(r.stateNode=l,ri=r,pe=null,i=!0):i=!1),i||aa(r)),null;case 13:return sb(i,r,l);case 4:return Bt(r,r.stateNode.containerInfo),h=r.pendingProps,i===null?r.child=ls(r,null,h,l):qe(i,r,h,l),r.child;case 11:return Z0(i,r,r.type,r.pendingProps,l);case 7:return qe(i,r,r.pendingProps,l),r.child;case 8:return qe(i,r,r.pendingProps.children,l),r.child;case 12:return qe(i,r,r.pendingProps.children,l),r.child;case 10:return h=r.pendingProps,gr(r,r.type,h.value),qe(i,r,h.children,l),r.child;case 9:return p=r.type._context,h=r.pendingProps.children,la(r),p=Qe(p),h=h(p),r.flags|=1,qe(i,r,h,l),r.child;case 14:return J0(i,r,r.type,r.pendingProps,l);case 15:return tb(i,r,r.type,r.pendingProps,l);case 19:return ob(i,r,l);case 31:return h=r.pendingProps,l=r.mode,h={mode:h.mode,children:h.children},i===null?(l=jc(h,l),l.ref=r.ref,r.child=l,l.return=r,r=l):(l=Pn(i.child,h),l.ref=r.ref,r.child=l,l.return=r,r=l),r;case 22:return eb(i,r,l);case 24:return la(r),h=Qe(Me),i===null?(p=Gd(),p===null&&(p=le,y=Ud(),p.pooledCache=y,y.refCount++,y!==null&&(p.pooledCacheLanes|=l),p=y),r.memoizedState={parent:h,cache:p},Yd(r),gr(r,Me,p)):((i.lanes&l)!==0&&(Wd(i,r),El(r,null,null,l),Al()),p=i.memoizedState,y=r.memoizedState,p.parent!==h?(p={parent:h,cache:h},r.memoizedState=p,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=p),gr(r,Me,h)):(h=y.cache,gr(r,Me,h),h!==p.cache&&qd(r,[Me],l,!0))),qe(i,r,r.pendingProps.children,l),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Gn(i){i.flags|=4}function ub(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!bv(r)){if(r=Ui.current,r!==null&&((Gt&4194048)===Gt?fn!==null:(Gt&62914560)!==Gt&&(Gt&536870912)===0||r!==fn))throw wl=jd,Wy;i.flags|=8192}}function Yc(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Kr():536870912,i.lanes|=r,hs|=r)}function Nl(i,r){if(!Wt)switch(i.tailMode){case"hidden":r=i.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function de(i){var r=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(r)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&65011712,h|=p.flags&65011712,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,r}function mA(i,r,l){var h=r.pendingProps;switch(Id(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(r),null;case 1:return de(r),null;case 3:return l=r.stateNode,h=null,i!==null&&(h=i.memoizedState.cache),r.memoizedState.cache!==h&&(r.flags|=2048),zn(Me),Ht(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(i===null||i.child===null)&&(bl(r)?Gn(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Uy())),de(r),null;case 26:return l=r.memoizedState,i===null?(Gn(r),l!==null?(de(r),ub(r,l)):(de(r),r.flags&=-16777217)):l?l!==i.memoizedState?(Gn(r),de(r),ub(r,l)):(de(r),r.flags&=-16777217):(i.memoizedProps!==h&&Gn(r),de(r),r.flags&=-16777217),null;case 27:oe(r),l=ht.current;var p=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==h&&Gn(r);else{if(!h){if(r.stateNode===null)throw Error(a(166));return de(r),null}i=ft.current,bl(r)?zy(r):(i=uv(p,h,l),r.stateNode=i,Gn(r))}return de(r),null;case 5:if(oe(r),l=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==h&&Gn(r);else{if(!h){if(r.stateNode===null)throw Error(a(166));return de(r),null}if(i=ft.current,bl(r))zy(r);else{switch(p=au(ht.current),i){case 1:i=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=p.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof h.is=="string"?p.createElement("select",{is:h.is}):p.createElement("select"),h.multiple?i.multiple=!0:h.size&&(i.size=h.size);break;default:i=typeof h.is=="string"?p.createElement(l,{is:h.is}):p.createElement(l)}}i[Ee]=r,i[Ve]=h;t:for(p=r.child;p!==null;){if(p.tag===5||p.tag===6)i.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===r)break t;for(;p.sibling===null;){if(p.return===null||p.return===r)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}r.stateNode=i;t:switch(He(i,l,h),l){case"button":case"input":case"select":case"textarea":i=!!h.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Gn(r)}}return de(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==h&&Gn(r);else{if(typeof h!="string"&&r.stateNode===null)throw Error(a(166));if(i=ht.current,bl(r)){if(i=r.stateNode,l=r.memoizedProps,h=null,p=ri,p!==null)switch(p.tag){case 27:case 5:h=p.memoizedProps}i[Ee]=r,i=!!(i.nodeValue===l||h!==null&&h.suppressHydrationWarning===!0||nv(i.nodeValue,l)),i||aa(r)}else i=au(i).createTextNode(h),i[Ee]=r,r.stateNode=i}return de(r),null;case 13:if(h=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(p=bl(r),h!==null&&h.dehydrated!==null){if(i===null){if(!p)throw Error(a(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[Ee]=r}else vl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;de(r),p=!1}else p=Uy(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=p),p=!0;if(!p)return r.flags&256?(Un(r),r):(Un(r),null)}if(Un(r),(r.flags&128)!==0)return r.lanes=l,r;if(l=h!==null,i=i!==null&&i.memoizedState!==null,l){h=r.child,p=null,h.alternate!==null&&h.alternate.memoizedState!==null&&h.alternate.memoizedState.cachePool!==null&&(p=h.alternate.memoizedState.cachePool.pool);var y=null;h.memoizedState!==null&&h.memoizedState.cachePool!==null&&(y=h.memoizedState.cachePool.pool),y!==p&&(h.flags|=2048)}return l!==i&&l&&(r.child.flags|=8192),Yc(r,r.updateQueue),de(r),null;case 4:return Ht(),i===null&&Qf(r.stateNode.containerInfo),de(r),null;case 10:return zn(r.type),de(r),null;case 19:if(ot(Le),p=r.memoizedState,p===null)return de(r),null;if(h=(r.flags&128)!==0,y=p.rendering,y===null)if(h)Nl(p,!1);else{if(me!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(y=qc(i),y!==null){for(r.flags|=128,Nl(p,!1),i=y.updateQueue,r.updateQueue=i,Yc(r,i),r.subtreeFlags=0,i=l,l=r.child;l!==null;)Fy(l,i),l=l.sibling;return tt(Le,Le.current&1|2),r.child}i=i.sibling}p.tail!==null&&$e()>Xc&&(r.flags|=128,h=!0,Nl(p,!1),r.lanes=4194304)}else{if(!h)if(i=qc(y),i!==null){if(r.flags|=128,h=!0,i=i.updateQueue,r.updateQueue=i,Yc(r,i),Nl(p,!0),p.tail===null&&p.tailMode==="hidden"&&!y.alternate&&!Wt)return de(r),null}else 2*$e()-p.renderingStartTime>Xc&&l!==536870912&&(r.flags|=128,h=!0,Nl(p,!1),r.lanes=4194304);p.isBackwards?(y.sibling=r.child,r.child=y):(i=p.last,i!==null?i.sibling=y:r.child=y,p.last=y)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,i=Le.current,tt(Le,h?i&1|2:i&1),r):(de(r),null);case 22:case 23:return Un(r),Kd(),h=r.memoizedState!==null,i!==null?i.memoizedState!==null!==h&&(r.flags|=8192):h&&(r.flags|=8192),h?(l&536870912)!==0&&(r.flags&128)===0&&(de(r),r.subtreeFlags&6&&(r.flags|=8192)):de(r),l=r.updateQueue,l!==null&&Yc(r,l.retryQueue),l=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),h=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),h!==l&&(r.flags|=2048),i!==null&&ot(oa),null;case 24:return l=null,i!==null&&(l=i.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),zn(Me),de(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function yA(i,r){switch(Id(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return zn(Me),Ht(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return oe(r),null;case 13:if(Un(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(a(340));vl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ot(Le),null;case 4:return Ht(),null;case 10:return zn(r.type),null;case 22:case 23:return Un(r),Kd(),i!==null&&ot(oa),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return zn(Me),null;case 25:return null;default:return null}}function hb(i,r){switch(Id(r),r.tag){case 3:zn(Me),Ht();break;case 26:case 27:case 5:oe(r);break;case 4:Ht();break;case 13:Un(r);break;case 19:ot(Le);break;case 10:zn(r.type);break;case 22:case 23:Un(r),Kd(),i!==null&&ot(oa);break;case 24:zn(Me)}}function Pl(i,r){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var p=h.next;l=p;do{if((l.tag&i)===i){h=void 0;var y=l.create,_=l.inst;h=y(),_.destroy=h}l=l.next}while(l!==p)}}catch(A){re(r,r.return,A)}}function xr(i,r,l){try{var h=r.updateQueue,p=h!==null?h.lastEffect:null;if(p!==null){var y=p.next;h=y;do{if((h.tag&i)===i){var _=h.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,p=r;var B=l,G=A;try{G()}catch(Q){re(p,B,Q)}}}h=h.next}while(h!==y)}}catch(Q){re(r,r.return,Q)}}function db(i){var r=i.updateQueue;if(r!==null){var l=i.stateNode;try{Jy(r,l)}catch(h){re(i,i.return,h)}}}function fb(i,r,l){l.props=ua(i.type,i.memoizedProps),l.state=i.memoizedState;try{l.componentWillUnmount()}catch(h){re(i,r,h)}}function Il(i,r){try{var l=i.ref;if(l!==null){switch(i.tag){case 26:case 27:case 5:var h=i.stateNode;break;case 30:h=i.stateNode;break;default:h=i.stateNode}typeof l=="function"?i.refCleanup=l(h):l.current=h}}catch(p){re(i,r,p)}}function gn(i,r){var l=i.ref,h=i.refCleanup;if(l!==null)if(typeof h=="function")try{h()}catch(p){re(i,r,p)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(p){re(i,r,p)}else l.current=null}function gb(i){var r=i.type,l=i.memoizedProps,h=i.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":l.autoFocus&&h.focus();break t;case"img":l.src?h.src=l.src:l.srcSet&&(h.srcset=l.srcSet)}}catch(p){re(i,i.return,p)}}function kf(i,r,l){try{var h=i.stateNode;FA(h,i.type,l,r),h[Ve]=r}catch(p){re(i,i.return,p)}}function pb(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Rr(i.type)||i.tag===4}function Af(i){t:for(;;){for(;i.sibling===null;){if(i.return===null||pb(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Rr(i.type)||i.flags&2||i.child===null||i.tag===4)continue t;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ef(i,r,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,r?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(i,r):(r=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,r.appendChild(i),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=ru));else if(h!==4&&(h===27&&Rr(i.type)&&(l=i.stateNode,r=null),i=i.child,i!==null))for(Ef(i,r,l),i=i.sibling;i!==null;)Ef(i,r,l),i=i.sibling}function Wc(i,r,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,r?l.insertBefore(i,r):l.appendChild(i);else if(h!==4&&(h===27&&Rr(i.type)&&(l=i.stateNode),i=i.child,i!==null))for(Wc(i,r,l),i=i.sibling;i!==null;)Wc(i,r,l),i=i.sibling}function mb(i){var r=i.stateNode,l=i.memoizedProps;try{for(var h=i.type,p=r.attributes;p.length;)r.removeAttributeNode(p[0]);He(r,h,l),r[Ee]=i,r[Ve]=l}catch(y){re(i,i.return,y)}}var jn=!1,Se=!1,Rf=!1,yb=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function bA(i,r){if(i=i.containerInfo,Jf=hu,i=Ey(i),kd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else t:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,y=h.focusNode;h=h.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break t}var _=0,A=-1,B=-1,G=0,Q=0,et=i,Y=null;e:for(;;){for(var V;et!==l||p!==0&&et.nodeType!==3||(A=_+p),et!==y||h!==0&&et.nodeType!==3||(B=_+h),et.nodeType===3&&(_+=et.nodeValue.length),(V=et.firstChild)!==null;)Y=et,et=V;for(;;){if(et===i)break e;if(Y===l&&++G===p&&(A=_),Y===y&&++Q===h&&(B=_),(V=et.nextSibling)!==null)break;et=Y,Y=et.parentNode}et=V}l=A===-1||B===-1?null:{start:A,end:B}}else l=null}l=l||{start:0,end:0}}else l=null;for(tg={focusedElem:i,selectionRange:l},hu=!1,Ie=r;Ie!==null;)if(r=Ie,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,Ie=i;else for(;Ie!==null;){switch(r=Ie,y=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&y!==null){i=void 0,l=r,p=y.memoizedProps,y=y.memoizedState,h=l.stateNode;try{var Ot=ua(l.type,p,l.elementType===l.type);i=h.getSnapshotBeforeUpdate(Ot,y),h.__reactInternalSnapshotBeforeUpdate=i}catch(Et){re(l,l.return,Et)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,l=i.nodeType,l===9)ng(i);else if(l===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":ng(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(a(163))}if(i=r.sibling,i!==null){i.return=r.return,Ie=i;break}Ie=r.return}}function bb(i,r,l){var h=l.flags;switch(l.tag){case 0:case 11:case 15:Cr(i,l),h&4&&Pl(5,l);break;case 1:if(Cr(i,l),h&4)if(i=l.stateNode,r===null)try{i.componentDidMount()}catch(_){re(l,l.return,_)}else{var p=ua(l.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(p,r,i.__reactInternalSnapshotBeforeUpdate)}catch(_){re(l,l.return,_)}}h&64&&db(l),h&512&&Il(l,l.return);break;case 3:if(Cr(i,l),h&64&&(i=l.updateQueue,i!==null)){if(r=null,l.child!==null)switch(l.child.tag){case 27:case 5:r=l.child.stateNode;break;case 1:r=l.child.stateNode}try{Jy(i,r)}catch(_){re(l,l.return,_)}}break;case 27:r===null&&h&4&&mb(l);case 26:case 5:Cr(i,l),r===null&&h&4&&gb(l),h&512&&Il(l,l.return);break;case 12:Cr(i,l);break;case 13:Cr(i,l),h&4&&xb(i,l),h&64&&(i=l.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(l=AA.bind(null,l),jA(i,l))));break;case 22:if(h=l.memoizedState!==null||jn,!h){r=r!==null&&r.memoizedState!==null||Se,p=jn;var y=Se;jn=h,(Se=r)&&!y?_r(i,l,(l.subtreeFlags&8772)!==0):Cr(i,l),jn=p,Se=y}break;case 30:break;default:Cr(i,l)}}function vb(i){var r=i.alternate;r!==null&&(i.alternate=null,vb(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&_i(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var ue=null,yi=!1;function Yn(i,r,l){for(l=l.child;l!==null;)Sb(i,r,l),l=l.sibling}function Sb(i,r,l){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Ni,l)}catch{}switch(l.tag){case 26:Se||gn(l,r),Yn(i,r,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Se||gn(l,r);var h=ue,p=yi;Rr(l.type)&&(ue=l.stateNode,yi=!1),Yn(i,r,l),Yl(l.stateNode),ue=h,yi=p;break;case 5:Se||gn(l,r);case 6:if(h=ue,p=yi,ue=null,Yn(i,r,l),ue=h,yi=p,ue!==null)if(yi)try{(ue.nodeType===9?ue.body:ue.nodeName==="HTML"?ue.ownerDocument.body:ue).removeChild(l.stateNode)}catch(y){re(l,r,y)}else try{ue.removeChild(l.stateNode)}catch(y){re(l,r,y)}break;case 18:ue!==null&&(yi?(i=ue,ov(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,l.stateNode),to(i)):ov(ue,l.stateNode));break;case 4:h=ue,p=yi,ue=l.stateNode.containerInfo,yi=!0,Yn(i,r,l),ue=h,yi=p;break;case 0:case 11:case 14:case 15:Se||xr(2,l,r),Se||xr(4,l,r),Yn(i,r,l);break;case 1:Se||(gn(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"&&fb(l,r,h)),Yn(i,r,l);break;case 21:Yn(i,r,l);break;case 22:Se=(h=Se)||l.memoizedState!==null,Yn(i,r,l),Se=h;break;default:Yn(i,r,l)}}function xb(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{to(i)}catch(l){re(r,r.return,l)}}function vA(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new yb),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new yb),r;default:throw Error(a(435,i.tag))}}function Mf(i,r){var l=vA(i);r.forEach(function(h){var p=EA.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}function Ai(i,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h],y=i,_=r,A=_;t:for(;A!==null;){switch(A.tag){case 27:if(Rr(A.type)){ue=A.stateNode,yi=!1;break t}break;case 5:ue=A.stateNode,yi=!1;break t;case 3:case 4:ue=A.stateNode.containerInfo,yi=!0;break t}A=A.return}if(ue===null)throw Error(a(160));Sb(y,_,p),ue=null,yi=!1,y=p.alternate,y!==null&&(y.return=null),p.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Cb(r,i),r=r.sibling}var tn=null;function Cb(i,r){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Ai(r,i),Ei(i),h&4&&(xr(3,i,i.return),Pl(3,i),xr(5,i,i.return));break;case 1:Ai(r,i),Ei(i),h&512&&(Se||l===null||gn(l,l.return)),h&64&&jn&&(i=i.updateQueue,i!==null&&(h=i.callbacks,h!==null&&(l=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=l===null?h:l.concat(h))));break;case 26:var p=tn;if(Ai(r,i),Ei(i),h&512&&(Se||l===null||gn(l,l.return)),h&4){var y=l!==null?l.memoizedState:null;if(h=i.memoizedState,l===null)if(h===null)if(i.stateNode===null){t:{h=i.type,l=i.memoizedProps,p=p.ownerDocument||p;e:switch(h){case"title":y=p.getElementsByTagName("title")[0],(!y||y[hr]||y[Ee]||y.namespaceURI==="http://www.w3.org/2000/svg"||y.hasAttribute("itemprop"))&&(y=p.createElement(h),p.head.insertBefore(y,p.querySelector("head > title"))),He(y,h,l),y[Ee]=i,Ce(y),h=y;break t;case"link":var _=mv("link","href",p).get(h+(l.href||""));if(_){for(var A=0;A<_.length;A++)if(y=_[A],y.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&y.getAttribute("rel")===(l.rel==null?null:l.rel)&&y.getAttribute("title")===(l.title==null?null:l.title)&&y.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){_.splice(A,1);break e}}y=p.createElement(h),He(y,h,l),p.head.appendChild(y);break;case"meta":if(_=mv("meta","content",p).get(h+(l.content||""))){for(A=0;A<_.length;A++)if(y=_[A],y.getAttribute("content")===(l.content==null?null:""+l.content)&&y.getAttribute("name")===(l.name==null?null:l.name)&&y.getAttribute("property")===(l.property==null?null:l.property)&&y.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&y.getAttribute("charset")===(l.charSet==null?null:l.charSet)){_.splice(A,1);break e}}y=p.createElement(h),He(y,h,l),p.head.appendChild(y);break;default:throw Error(a(468,h))}y[Ee]=i,Ce(y),h=y}i.stateNode=h}else yv(p,i.type,i.stateNode);else i.stateNode=pv(p,h,i.memoizedProps);else y!==h?(y===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):y.count--,h===null?yv(p,i.type,i.stateNode):pv(p,h,i.memoizedProps)):h===null&&i.stateNode!==null&&kf(i,i.memoizedProps,l.memoizedProps)}break;case 27:Ai(r,i),Ei(i),h&512&&(Se||l===null||gn(l,l.return)),l!==null&&h&4&&kf(i,i.memoizedProps,l.memoizedProps);break;case 5:if(Ai(r,i),Ei(i),h&512&&(Se||l===null||gn(l,l.return)),i.flags&32){p=i.stateNode;try{Ha(p,"")}catch(V){re(i,i.return,V)}}h&4&&i.stateNode!=null&&(p=i.memoizedProps,kf(i,p,l!==null?l.memoizedProps:p)),h&1024&&(Rf=!0);break;case 6:if(Ai(r,i),Ei(i),h&4){if(i.stateNode===null)throw Error(a(162));h=i.memoizedProps,l=i.stateNode;try{l.nodeValue=h}catch(V){re(i,i.return,V)}}break;case 3:if(ou=null,p=tn,tn=su(r.containerInfo),Ai(r,i),tn=p,Ei(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{to(r.containerInfo)}catch(V){re(i,i.return,V)}Rf&&(Rf=!1,_b(i));break;case 4:h=tn,tn=su(i.stateNode.containerInfo),Ai(r,i),Ei(i),tn=h;break;case 12:Ai(r,i),Ei(i);break;case 13:Ai(r,i),Ei(i),i.child.flags&8192&&i.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Pf=$e()),h&4&&(h=i.updateQueue,h!==null&&(i.updateQueue=null,Mf(i,h)));break;case 22:p=i.memoizedState!==null;var B=l!==null&&l.memoizedState!==null,G=jn,Q=Se;if(jn=G||p,Se=Q||B,Ai(r,i),Se=Q,jn=G,Ei(i),h&8192)t:for(r=i.stateNode,r._visibility=p?r._visibility&-2:r._visibility|1,p&&(l===null||B||jn||Se||ha(i)),l=null,r=i;;){if(r.tag===5||r.tag===26){if(l===null){B=l=r;try{if(y=B.stateNode,p)_=y.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=B.stateNode;var et=B.memoizedProps.style,Y=et!=null&&et.hasOwnProperty("display")?et.display:null;A.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(V){re(B,B.return,V)}}}else if(r.tag===6){if(l===null){B=r;try{B.stateNode.nodeValue=p?"":B.memoizedProps}catch(V){re(B,B.return,V)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break t;for(;r.sibling===null;){if(r.return===null||r.return===i)break t;l===r&&(l=null),r=r.return}l===r&&(l=null),r.sibling.return=r.return,r=r.sibling}h&4&&(h=i.updateQueue,h!==null&&(l=h.retryQueue,l!==null&&(h.retryQueue=null,Mf(i,l))));break;case 19:Ai(r,i),Ei(i),h&4&&(h=i.updateQueue,h!==null&&(i.updateQueue=null,Mf(i,h)));break;case 30:break;case 21:break;default:Ai(r,i),Ei(i)}}function Ei(i){var r=i.flags;if(r&2){try{for(var l,h=i.return;h!==null;){if(pb(h)){l=h;break}h=h.return}if(l==null)throw Error(a(160));switch(l.tag){case 27:var p=l.stateNode,y=Af(i);Wc(i,y,p);break;case 5:var _=l.stateNode;l.flags&32&&(Ha(_,""),l.flags&=-33);var A=Af(i);Wc(i,A,_);break;case 3:case 4:var B=l.stateNode.containerInfo,G=Af(i);Ef(i,G,B);break;default:throw Error(a(161))}}catch(Q){re(i,i.return,Q)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function _b(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;_b(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Cr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)bb(i,r.alternate,r),r=r.sibling}function ha(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:xr(4,r,r.return),ha(r);break;case 1:gn(r,r.return);var l=r.stateNode;typeof l.componentWillUnmount=="function"&&fb(r,r.return,l),ha(r);break;case 27:Yl(r.stateNode);case 26:case 5:gn(r,r.return),ha(r);break;case 22:r.memoizedState===null&&ha(r);break;case 30:ha(r);break;default:ha(r)}i=i.sibling}}function _r(i,r,l){for(l=l&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var h=r.alternate,p=i,y=r,_=y.flags;switch(y.tag){case 0:case 11:case 15:_r(p,y,l),Pl(4,y);break;case 1:if(_r(p,y,l),h=y,p=h.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(G){re(h,h.return,G)}if(h=y,p=h.updateQueue,p!==null){var A=h.stateNode;try{var B=p.shared.hiddenCallbacks;if(B!==null)for(p.shared.hiddenCallbacks=null,p=0;p<B.length;p++)Zy(B[p],A)}catch(G){re(h,h.return,G)}}l&&_&64&&db(y),Il(y,y.return);break;case 27:mb(y);case 26:case 5:_r(p,y,l),l&&h===null&&_&4&&gb(y),Il(y,y.return);break;case 12:_r(p,y,l);break;case 13:_r(p,y,l),l&&_&4&&xb(p,y);break;case 22:y.memoizedState===null&&_r(p,y,l),Il(y,y.return);break;case 30:break;default:_r(p,y,l)}r=r.sibling}}function Lf(i,r){var l=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==l&&(i!=null&&i.refCount++,l!=null&&Cl(l))}function Df(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Cl(i))}function pn(i,r,l,h){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Tb(i,r,l,h),r=r.sibling}function Tb(i,r,l,h){var p=r.flags;switch(r.tag){case 0:case 11:case 15:pn(i,r,l,h),p&2048&&Pl(9,r);break;case 1:pn(i,r,l,h);break;case 3:pn(i,r,l,h),p&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Cl(i)));break;case 12:if(p&2048){pn(i,r,l,h),i=r.stateNode;try{var y=r.memoizedProps,_=y.id,A=y.onPostCommit;typeof A=="function"&&A(_,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(B){re(r,r.return,B)}}else pn(i,r,l,h);break;case 13:pn(i,r,l,h);break;case 23:break;case 22:y=r.stateNode,_=r.alternate,r.memoizedState!==null?y._visibility&2?pn(i,r,l,h):Fl(i,r):y._visibility&2?pn(i,r,l,h):(y._visibility|=2,os(i,r,l,h,(r.subtreeFlags&10256)!==0)),p&2048&&Lf(_,r);break;case 24:pn(i,r,l,h),p&2048&&Df(r.alternate,r);break;default:pn(i,r,l,h)}}function os(i,r,l,h,p){for(p=p&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var y=i,_=r,A=l,B=h,G=_.flags;switch(_.tag){case 0:case 11:case 15:os(y,_,A,B,p),Pl(8,_);break;case 23:break;case 22:var Q=_.stateNode;_.memoizedState!==null?Q._visibility&2?os(y,_,A,B,p):Fl(y,_):(Q._visibility|=2,os(y,_,A,B,p)),p&&G&2048&&Lf(_.alternate,_);break;case 24:os(y,_,A,B,p),p&&G&2048&&Df(_.alternate,_);break;default:os(y,_,A,B,p)}r=r.sibling}}function Fl(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var l=i,h=r,p=h.flags;switch(h.tag){case 22:Fl(l,h),p&2048&&Lf(h.alternate,h);break;case 24:Fl(l,h),p&2048&&Df(h.alternate,h);break;default:Fl(l,h)}r=r.sibling}}var $l=8192;function cs(i){if(i.subtreeFlags&$l)for(i=i.child;i!==null;)wb(i),i=i.sibling}function wb(i){switch(i.tag){case 26:cs(i),i.flags&$l&&i.memoizedState!==null&&rE(tn,i.memoizedState,i.memoizedProps);break;case 5:cs(i);break;case 3:case 4:var r=tn;tn=su(i.stateNode.containerInfo),cs(i),tn=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=$l,$l=16777216,cs(i),$l=r):cs(i));break;default:cs(i)}}function kb(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function zl(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var l=0;l<r.length;l++){var h=r[l];Ie=h,Eb(h,i)}kb(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ab(i),i=i.sibling}function Ab(i){switch(i.tag){case 0:case 11:case 15:zl(i),i.flags&2048&&xr(9,i,i.return);break;case 3:zl(i);break;case 12:zl(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Vc(i)):zl(i);break;default:zl(i)}}function Vc(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var l=0;l<r.length;l++){var h=r[l];Ie=h,Eb(h,i)}kb(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:xr(8,r,r.return),Vc(r);break;case 22:l=r.stateNode,l._visibility&2&&(l._visibility&=-3,Vc(r));break;default:Vc(r)}i=i.sibling}}function Eb(i,r){for(;Ie!==null;){var l=Ie;switch(l.tag){case 0:case 11:case 15:xr(8,l,r);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var h=l.memoizedState.cachePool.pool;h!=null&&h.refCount++}break;case 24:Cl(l.memoizedState.cache)}if(h=l.child,h!==null)h.return=l,Ie=h;else t:for(l=i;Ie!==null;){h=Ie;var p=h.sibling,y=h.return;if(vb(h),h===l){Ie=null;break t}if(p!==null){p.return=y,Ie=p;break t}Ie=y}}}var SA={getCacheForType:function(i){var r=Qe(Me),l=r.data.get(i);return l===void 0&&(l=i(),r.data.set(i,l)),l}},xA=typeof WeakMap=="function"?WeakMap:Map,Jt=0,le=null,$t=null,Gt=0,te=0,Ri=null,Tr=!1,us=!1,Bf=!1,Wn=0,me=0,wr=0,da=0,Of=0,Hi=0,hs=0,ql=null,bi=null,Nf=!1,Pf=0,Xc=1/0,Qc=null,kr=null,Ue=0,Ar=null,ds=null,fs=0,If=0,Ff=null,Rb=null,Ul=0,$f=null;function Mi(){if((Jt&2)!==0&&Gt!==0)return Gt&-Gt;if(M.T!==null){var i=ts;return i!==0?i:Yf()}return sl()}function Mb(){Hi===0&&(Hi=(Gt&536870912)===0||Wt?Qr():536870912);var i=Ui.current;return i!==null&&(i.flags|=32),Hi}function Li(i,r,l){(i===le&&(te===2||te===9)||i.cancelPendingCommit!==null)&&(gs(i,0),Er(i,Gt,Hi,!1)),Ki(i,l),((Jt&2)===0||i!==le)&&(i===le&&((Jt&2)===0&&(da|=l),me===4&&Er(i,Gt,Hi,!1)),mn(i))}function Lb(i,r,l){if((Jt&6)!==0)throw Error(a(327));var h=!l&&(r&124)===0&&(r&i.expiredLanes)===0||Mn(i,r),p=h?TA(i,r):Uf(i,r,!0),y=h;do{if(p===0){us&&!h&&Er(i,r,0,!1);break}else{if(l=i.current.alternate,y&&!CA(l)){p=Uf(i,r,!1),y=!1;continue}if(p===2){if(y=r,i.errorRecoveryDisabledLanes&y)var _=0;else _=i.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){r=_;t:{var A=i;p=ql;var B=A.current.memoizedState.isDehydrated;if(B&&(gs(A,_).flags|=256),_=Uf(A,_,!1),_!==2){if(Bf&&!B){A.errorRecoveryDisabledLanes|=y,da|=y,p=4;break t}y=bi,bi=p,y!==null&&(bi===null?bi=y:bi.push.apply(bi,y))}p=_}if(y=!1,p!==2)continue}}if(p===1){gs(i,0),Er(i,r,0,!0);break}t:{switch(h=i,y=p,y){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Er(h,r,Hi,!Tr);break t;case 2:bi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(p=Pf+300-$e(),10<p)){if(Er(h,r,Hi,!Tr),ur(h,0,!0)!==0)break t;h.timeoutHandle=sv(Db.bind(null,h,l,bi,Qc,Nf,r,Hi,da,hs,Tr,y,2,-0,0),p);break t}Db(h,l,bi,Qc,Nf,r,Hi,da,hs,Tr,y,0,-0,0)}}break}while(!0);mn(i)}function Db(i,r,l,h,p,y,_,A,B,G,Q,et,Y,V){if(i.timeoutHandle=-1,et=r.subtreeFlags,(et&8192||(et&16785408)===16785408)&&(Xl={stylesheets:null,count:0,unsuspend:nE},wb(r),et=aE(),et!==null)){i.cancelPendingCommit=et($b.bind(null,i,r,y,l,h,p,_,A,B,Q,1,Y,V)),Er(i,y,_,!G);return}$b(i,r,y,l,h,p,_,A,B)}function CA(i){for(var r=i;;){var l=r.tag;if((l===0||l===11||l===15)&&r.flags&16384&&(l=r.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var h=0;h<l.length;h++){var p=l[h],y=p.getSnapshot;p=p.value;try{if(!wi(y(),p))return!1}catch{return!1}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Er(i,r,l,h){r&=~Of,r&=~da,i.suspendedLanes|=r,i.pingedLanes&=~r,h&&(i.warmLanes|=r),h=i.expirationTimes;for(var p=r;0<p;){var y=31-We(p),_=1<<y;h[y]=-1,p&=~_}l!==0&&lc(i,l,r)}function Kc(){return(Jt&6)===0?(Hl(0),!1):!0}function zf(){if($t!==null){if(te===0)var i=$t.return;else i=$t,$n=sa=null,nf(i),ss=null,Bl=0,i=$t;for(;i!==null;)hb(i.alternate,i),i=i.return;$t=null}}function gs(i,r){var l=i.timeoutHandle;l!==-1&&(i.timeoutHandle=-1,zA(l)),l=i.cancelPendingCommit,l!==null&&(i.cancelPendingCommit=null,l()),zf(),le=i,$t=l=Pn(i.current,null),Gt=r,te=0,Ri=null,Tr=!1,us=Mn(i,r),Bf=!1,hs=Hi=Of=da=wr=me=0,bi=ql=null,Nf=!1,(r&8)!==0&&(r|=r&32);var h=i.entangledLanes;if(h!==0)for(i=i.entanglements,h&=r;0<h;){var p=31-We(h),y=1<<p;r|=i[p],h&=~y}return Wn=r,vc(),l}function Bb(i,r){It=null,M.H=Fc,r===Tl||r===Ec?(r=Qy(),te=3):r===Wy?(r=Qy(),te=4):te=r===K0?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Ri=r,$t===null&&(me=1,Hc(i,Fi(r,i.current)))}function Ob(){var i=M.H;return M.H=Fc,i===null?Fc:i}function Nb(){var i=M.A;return M.A=SA,i}function qf(){me=4,Tr||(Gt&4194048)!==Gt&&Ui.current!==null||(us=!0),(wr&134217727)===0&&(da&134217727)===0||le===null||Er(le,Gt,Hi,!1)}function Uf(i,r,l){var h=Jt;Jt|=2;var p=Ob(),y=Nb();(le!==i||Gt!==r)&&(Qc=null,gs(i,r)),r=!1;var _=me;t:do try{if(te!==0&&$t!==null){var A=$t,B=Ri;switch(te){case 8:zf(),_=6;break t;case 3:case 2:case 9:case 6:Ui.current===null&&(r=!0);var G=te;if(te=0,Ri=null,ps(i,A,B,G),l&&us){_=0;break t}break;default:G=te,te=0,Ri=null,ps(i,A,B,G)}}_A(),_=me;break}catch(Q){Bb(i,Q)}while(!0);return r&&i.shellSuspendCounter++,$n=sa=null,Jt=h,M.H=p,M.A=y,$t===null&&(le=null,Gt=0,vc()),_}function _A(){for(;$t!==null;)Pb($t)}function TA(i,r){var l=Jt;Jt|=2;var h=Ob(),p=Nb();le!==i||Gt!==r?(Qc=null,Xc=$e()+500,gs(i,r)):us=Mn(i,r);t:do try{if(te!==0&&$t!==null){r=$t;var y=Ri;e:switch(te){case 1:te=0,Ri=null,ps(i,r,y,1);break;case 2:case 9:if(Vy(y)){te=0,Ri=null,Ib(r);break}r=function(){te!==2&&te!==9||le!==i||(te=7),mn(i)},y.then(r,r);break t;case 3:te=7;break t;case 4:te=5;break t;case 7:Vy(y)?(te=0,Ri=null,Ib(r)):(te=0,Ri=null,ps(i,r,y,7));break;case 5:var _=null;switch($t.tag){case 26:_=$t.memoizedState;case 5:case 27:var A=$t;if(!_||bv(_)){te=0,Ri=null;var B=A.sibling;if(B!==null)$t=B;else{var G=A.return;G!==null?($t=G,Zc(G)):$t=null}break e}}te=0,Ri=null,ps(i,r,y,5);break;case 6:te=0,Ri=null,ps(i,r,y,6);break;case 8:zf(),me=6;break t;default:throw Error(a(462))}}wA();break}catch(Q){Bb(i,Q)}while(!0);return $n=sa=null,M.H=h,M.A=p,Jt=l,$t!==null?0:(le=null,Gt=0,vc(),me)}function wA(){for(;$t!==null&&!tl();)Pb($t)}function Pb(i){var r=cb(i.alternate,i,Wn);i.memoizedProps=i.pendingProps,r===null?Zc(i):$t=r}function Ib(i){var r=i,l=r.alternate;switch(r.tag){case 15:case 0:r=nb(l,r,r.pendingProps,r.type,void 0,Gt);break;case 11:r=nb(l,r,r.pendingProps,r.type.render,r.ref,Gt);break;case 5:nf(r);default:hb(l,r),r=$t=Fy(r,Wn),r=cb(l,r,Wn)}i.memoizedProps=i.pendingProps,r===null?Zc(i):$t=r}function ps(i,r,l,h){$n=sa=null,nf(r),ss=null,Bl=0;var p=r.return;try{if(gA(i,p,r,l,Gt)){me=1,Hc(i,Fi(l,i.current)),$t=null;return}}catch(y){if(p!==null)throw $t=p,y;me=1,Hc(i,Fi(l,i.current)),$t=null;return}r.flags&32768?(Wt||h===1?i=!0:us||(Gt&536870912)!==0?i=!1:(Tr=i=!0,(h===2||h===9||h===3||h===6)&&(h=Ui.current,h!==null&&h.tag===13&&(h.flags|=16384))),Fb(r,i)):Zc(r)}function Zc(i){var r=i;do{if((r.flags&32768)!==0){Fb(r,Tr);return}i=r.return;var l=mA(r.alternate,r,Wn);if(l!==null){$t=l;return}if(r=r.sibling,r!==null){$t=r;return}$t=r=i}while(r!==null);me===0&&(me=5)}function Fb(i,r){do{var l=yA(i.alternate,i);if(l!==null){l.flags&=32767,$t=l;return}if(l=i.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!r&&(i=i.sibling,i!==null)){$t=i;return}$t=i=l}while(i!==null);me=6,$t=null}function $b(i,r,l,h,p,y,_,A,B){i.cancelPendingCommit=null;do Jc();while(Ue!==0);if((Jt&6)!==0)throw Error(a(327));if(r!==null){if(r===i.current)throw Error(a(177));if(y=r.lanes|r.childLanes,y|=Ld,od(i,l,y,_,A,B),i===le&&($t=le=null,Gt=0),ds=r,Ar=i,fs=l,If=y,Ff=p,Rb=h,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,RA(Vr,function(){return Gb(),null})):(i.callbackNode=null,i.callbackPriority=0),h=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||h){h=M.T,M.T=null,p=F.p,F.p=2,_=Jt,Jt|=4;try{bA(i,r,l)}finally{Jt=_,F.p=p,M.T=h}}Ue=1,zb(),qb(),Ub()}}function zb(){if(Ue===1){Ue=0;var i=Ar,r=ds,l=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||l){l=M.T,M.T=null;var h=F.p;F.p=2;var p=Jt;Jt|=4;try{Cb(r,i);var y=tg,_=Ey(i.containerInfo),A=y.focusedElem,B=y.selectionRange;if(_!==A&&A&&A.ownerDocument&&Ay(A.ownerDocument.documentElement,A)){if(B!==null&&kd(A)){var G=B.start,Q=B.end;if(Q===void 0&&(Q=G),"selectionStart"in A)A.selectionStart=G,A.selectionEnd=Math.min(Q,A.value.length);else{var et=A.ownerDocument||document,Y=et&&et.defaultView||window;if(Y.getSelection){var V=Y.getSelection(),Ot=A.textContent.length,Et=Math.min(B.start,Ot),ne=B.end===void 0?Et:Math.min(B.end,Ot);!V.extend&&Et>ne&&(_=ne,ne=Et,Et=_);var z=ky(A,Et),P=ky(A,ne);if(z&&P&&(V.rangeCount!==1||V.anchorNode!==z.node||V.anchorOffset!==z.offset||V.focusNode!==P.node||V.focusOffset!==P.offset)){var U=et.createRange();U.setStart(z.node,z.offset),V.removeAllRanges(),Et>ne?(V.addRange(U),V.extend(P.node,P.offset)):(U.setEnd(P.node,P.offset),V.addRange(U))}}}}for(et=[],V=A;V=V.parentNode;)V.nodeType===1&&et.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<et.length;A++){var Z=et[A];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}hu=!!Jf,tg=Jf=null}finally{Jt=p,F.p=h,M.T=l}}i.current=r,Ue=2}}function qb(){if(Ue===2){Ue=0;var i=Ar,r=ds,l=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||l){l=M.T,M.T=null;var h=F.p;F.p=2;var p=Jt;Jt|=4;try{bb(i,r.alternate,r)}finally{Jt=p,F.p=h,M.T=l}}Ue=3}}function Ub(){if(Ue===4||Ue===3){Ue=0,el();var i=Ar,r=ds,l=fs,h=Rb;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Ue=5:(Ue=0,ds=Ar=null,Hb(i,i.pendingLanes));var p=i.pendingLanes;if(p===0&&(kr=null),al(l),r=r.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Ni,r,void 0,(r.current.flags&128)===128)}catch{}if(h!==null){r=M.T,p=F.p,F.p=2,M.T=null;try{for(var y=i.onRecoverableError,_=0;_<h.length;_++){var A=h[_];y(A.value,{componentStack:A.stack})}}finally{M.T=r,F.p=p}}(fs&3)!==0&&Jc(),mn(i),p=i.pendingLanes,(l&4194090)!==0&&(p&42)!==0?i===$f?Ul++:(Ul=0,$f=i):Ul=0,Hl(0)}}function Hb(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Cl(r)))}function Jc(i){return zb(),qb(),Ub(),Gb()}function Gb(){if(Ue!==5)return!1;var i=Ar,r=If;If=0;var l=al(fs),h=M.T,p=F.p;try{F.p=32>l?32:l,M.T=null,l=Ff,Ff=null;var y=Ar,_=fs;if(Ue=0,ds=Ar=null,fs=0,(Jt&6)!==0)throw Error(a(331));var A=Jt;if(Jt|=4,Ab(y.current),Tb(y,y.current,_,l),Jt=A,Hl(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Ni,y)}catch{}return!0}finally{F.p=p,M.T=h,Hb(i,r)}}function jb(i,r,l){r=Fi(l,r),r=yf(i.stateNode,r,2),i=yr(i,r,2),i!==null&&(Ki(i,2),mn(i))}function re(i,r,l){if(i.tag===3)jb(i,i,l);else for(;r!==null;){if(r.tag===3){jb(r,i,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(kr===null||!kr.has(h))){i=Fi(l,i),l=X0(2),h=yr(r,l,2),h!==null&&(Q0(l,h,r,i),Ki(h,2),mn(h));break}}r=r.return}}function Hf(i,r,l){var h=i.pingCache;if(h===null){h=i.pingCache=new xA;var p=new Set;h.set(r,p)}else p=h.get(r),p===void 0&&(p=new Set,h.set(r,p));p.has(l)||(Bf=!0,p.add(l),i=kA.bind(null,i,r,l),r.then(i,i))}function kA(i,r,l){var h=i.pingCache;h!==null&&h.delete(r),i.pingedLanes|=i.suspendedLanes&l,i.warmLanes&=~l,le===i&&(Gt&l)===l&&(me===4||me===3&&(Gt&62914560)===Gt&&300>$e()-Pf?(Jt&2)===0&&gs(i,0):Of|=l,hs===Gt&&(hs=0)),mn(i)}function Yb(i,r){r===0&&(r=Kr()),i=Qa(i,r),i!==null&&(Ki(i,r),mn(i))}function AA(i){var r=i.memoizedState,l=0;r!==null&&(l=r.retryLane),Yb(i,l)}function EA(i,r){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;case 22:h=i.stateNode._retryCache;break;default:throw Error(a(314))}h!==null&&h.delete(r),Yb(i,l)}function RA(i,r){return hi(i,r)}var tu=null,ms=null,Gf=!1,eu=!1,jf=!1,fa=0;function mn(i){i!==ms&&i.next===null&&(ms===null?tu=ms=i:ms=ms.next=i),eu=!0,Gf||(Gf=!0,LA())}function Hl(i,r){if(!jf&&eu){jf=!0;do for(var l=!1,h=tu;h!==null;){if(i!==0){var p=h.pendingLanes;if(p===0)var y=0;else{var _=h.suspendedLanes,A=h.pingedLanes;y=(1<<31-We(42|i)+1)-1,y&=p&~(_&~A),y=y&201326741?y&201326741|1:y?y|2:0}y!==0&&(l=!0,Qb(h,y))}else y=Gt,y=ur(h,h===le?y:0,h.cancelPendingCommit!==null||h.timeoutHandle!==-1),(y&3)===0||Mn(h,y)||(l=!0,Qb(h,y));h=h.next}while(l);jf=!1}}function MA(){Wb()}function Wb(){eu=Gf=!1;var i=0;fa!==0&&($A()&&(i=fa),fa=0);for(var r=$e(),l=null,h=tu;h!==null;){var p=h.next,y=Vb(h,r);y===0?(h.next=null,l===null?tu=p:l.next=p,p===null&&(ms=l)):(l=h,(i!==0||(y&3)!==0)&&(eu=!0)),h=p}Hl(i)}function Vb(i,r){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,y=i.pendingLanes&-62914561;0<y;){var _=31-We(y),A=1<<_,B=p[_];B===-1?((A&l)===0||(A&h)!==0)&&(p[_]=ld(A,r)):B<=r&&(i.expiredLanes|=A),y&=~A}if(r=le,l=Gt,l=ur(i,i===r?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),h=i.callbackNode,l===0||i===r&&(te===2||te===9)||i.cancelPendingCommit!==null)return h!==null&&h!==null&&ni(h),i.callbackNode=null,i.callbackPriority=0;if((l&3)===0||Mn(i,l)){if(r=l&-l,r===i.callbackPriority)return r;switch(h!==null&&ni(h),al(l)){case 2:case 8:l=il;break;case 32:l=Vr;break;case 268435456:l=$a;break;default:l=Vr}return h=Xb.bind(null,i),l=hi(l,h),i.callbackPriority=r,i.callbackNode=l,r}return h!==null&&h!==null&&ni(h),i.callbackPriority=2,i.callbackNode=null,2}function Xb(i,r){if(Ue!==0&&Ue!==5)return i.callbackNode=null,i.callbackPriority=0,null;var l=i.callbackNode;if(Jc()&&i.callbackNode!==l)return null;var h=Gt;return h=ur(i,i===le?h:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),h===0?null:(Lb(i,h,r),Vb(i,$e()),i.callbackNode!=null&&i.callbackNode===l?Xb.bind(null,i):null)}function Qb(i,r){if(Jc())return null;Lb(i,r,!0)}function LA(){qA(function(){(Jt&6)!==0?hi(Wr,MA):Wb()})}function Yf(){return fa===0&&(fa=Qr()),fa}function Kb(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:dc(""+i)}function Zb(i,r){var l=r.ownerDocument.createElement("input");return l.name=r.name,l.value=r.value,i.id&&l.setAttribute("form",i.id),r.parentNode.insertBefore(l,r),i=new FormData(i),l.parentNode.removeChild(l),i}function DA(i,r,l,h,p){if(r==="submit"&&l&&l.stateNode===p){var y=Kb((p[Ve]||null).action),_=h.submitter;_&&(r=(r=_[Ve]||null)?Kb(r.formAction):_.getAttribute("formAction"),r!==null&&(y=r,_=null));var A=new mc("action","action",null,h,p);i.push({event:A,listeners:[{instance:null,listener:function(){if(h.defaultPrevented){if(fa!==0){var B=_?Zb(p,_):new FormData(p);df(l,{pending:!0,data:B,method:p.method,action:y},null,B)}}else typeof y=="function"&&(A.preventDefault(),B=_?Zb(p,_):new FormData(p),df(l,{pending:!0,data:B,method:p.method,action:y},y,B))},currentTarget:p}]})}}for(var Wf=0;Wf<Md.length;Wf++){var Vf=Md[Wf],BA=Vf.toLowerCase(),OA=Vf[0].toUpperCase()+Vf.slice(1);Ji(BA,"on"+OA)}Ji(Ly,"onAnimationEnd"),Ji(Dy,"onAnimationIteration"),Ji(By,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(Kk,"onTransitionRun"),Ji(Zk,"onTransitionStart"),Ji(Jk,"onTransitionCancel"),Ji(Oy,"onTransitionEnd"),mt("onMouseEnter",["mouseout","mouseover"]),mt("onMouseLeave",["mouseout","mouseover"]),mt("onPointerEnter",["pointerout","pointerover"]),mt("onPointerLeave",["pointerout","pointerover"]),ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl));function Jb(i,r){r=(r&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;t:{var y=void 0;if(r)for(var _=h.length-1;0<=_;_--){var A=h[_],B=A.instance,G=A.currentTarget;if(A=A.listener,B!==y&&p.isPropagationStopped())break t;y=A,p.currentTarget=G;try{y(p)}catch(Q){Uc(Q)}p.currentTarget=null,y=B}else for(_=0;_<h.length;_++){if(A=h[_],B=A.instance,G=A.currentTarget,A=A.listener,B!==y&&p.isPropagationStopped())break t;y=A,p.currentTarget=G;try{y(p)}catch(Q){Uc(Q)}p.currentTarget=null,y=B}}}}function zt(i,r){var l=r[un];l===void 0&&(l=r[un]=new Set);var h=i+"__bubble";l.has(h)||(tv(r,i,2,!1),l.add(h))}function Xf(i,r,l){var h=0;r&&(h|=4),tv(l,i,h,r)}var iu="_reactListening"+Math.random().toString(36).slice(2);function Qf(i){if(!i[iu]){i[iu]=!0,_t.forEach(function(l){l!=="selectionchange"&&(NA.has(l)||Xf(l,!1,i),Xf(l,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[iu]||(r[iu]=!0,Xf("selectionchange",!1,r))}}function tv(i,r,l,h){switch(Tv(r)){case 2:var p=oE;break;case 8:p=cE;break;default:p=ug}l=p.bind(null,r,l,i),p=void 0,!yd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(r,l,{capture:!0,passive:p}):i.addEventListener(r,l,!0):p!==void 0?i.addEventListener(r,l,{passive:p}):i.addEventListener(r,l,!1)}function Kf(i,r,l,h,p){var y=h;if((r&1)===0&&(r&2)===0&&h!==null)t:for(;;){if(h===null)return;var _=h.tag;if(_===3||_===4){var A=h.stateNode.containerInfo;if(A===p)break;if(_===4)for(_=h.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===p)return;_=_.return}for(;A!==null;){if(_=Ln(A),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){h=y=_;continue t}A=A.parentNode}}h=h.return}ly(function(){var G=y,Q=pd(l),et=[];t:{var Y=Ny.get(i);if(Y!==void 0){var V=mc,Ot=i;switch(i){case"keypress":if(gc(l)===0)break t;case"keydown":case"keyup":V=Rk;break;case"focusin":Ot="focus",V=xd;break;case"focusout":Ot="blur",V=xd;break;case"beforeblur":case"afterblur":V=xd;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=uy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=yk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Dk;break;case Ly:case Dy:case By:V=Sk;break;case Oy:V=Ok;break;case"scroll":case"scrollend":V=pk;break;case"wheel":V=Pk;break;case"copy":case"cut":case"paste":V=Ck;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=dy;break;case"toggle":case"beforetoggle":V=Fk}var Et=(r&4)!==0,ne=!Et&&(i==="scroll"||i==="scrollend"),z=Et?Y!==null?Y+"Capture":null:Y;Et=[];for(var P=G,U;P!==null;){var Z=P;if(U=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||U===null||z===null||(Z=cl(P,z),Z!=null&&Et.push(jl(P,Z,U))),ne)break;P=P.return}0<Et.length&&(Y=new V(Y,Ot,null,l,Q),et.push({event:Y,listeners:Et}))}}if((r&7)===0){t:{if(Y=i==="mouseover"||i==="pointerover",V=i==="mouseout"||i==="pointerout",Y&&l!==gd&&(Ot=l.relatedTarget||l.fromElement)&&(Ln(Ot)||Ot[ze]))break t;if((V||Y)&&(Y=Q.window===Q?Q:(Y=Q.ownerDocument)?Y.defaultView||Y.parentWindow:window,V?(Ot=l.relatedTarget||l.toElement,V=G,Ot=Ot?Ln(Ot):null,Ot!==null&&(ne=o(Ot),Et=Ot.tag,Ot!==ne||Et!==5&&Et!==27&&Et!==6)&&(Ot=null)):(V=null,Ot=G),V!==Ot)){if(Et=uy,Z="onMouseLeave",z="onMouseEnter",P="mouse",(i==="pointerout"||i==="pointerover")&&(Et=dy,Z="onPointerLeave",z="onPointerEnter",P="pointer"),ne=V==null?Y:dr(V),U=Ot==null?Y:dr(Ot),Y=new Et(Z,P+"leave",V,l,Q),Y.target=ne,Y.relatedTarget=U,Z=null,Ln(Q)===G&&(Et=new Et(z,P+"enter",Ot,l,Q),Et.target=U,Et.relatedTarget=ne,Z=Et),ne=Z,V&&Ot)e:{for(Et=V,z=Ot,P=0,U=Et;U;U=ys(U))P++;for(U=0,Z=z;Z;Z=ys(Z))U++;for(;0<P-U;)Et=ys(Et),P--;for(;0<U-P;)z=ys(z),U--;for(;P--;){if(Et===z||z!==null&&Et===z.alternate)break e;Et=ys(Et),z=ys(z)}Et=null}else Et=null;V!==null&&ev(et,Y,V,Et,!1),Ot!==null&&ne!==null&&ev(et,ne,Ot,Et,!0)}}t:{if(Y=G?dr(G):window,V=Y.nodeName&&Y.nodeName.toLowerCase(),V==="select"||V==="input"&&Y.type==="file")var yt=Sy;else if(by(Y))if(xy)yt=Vk;else{yt=Yk;var Ft=jk}else V=Y.nodeName,!V||V.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?G&&fd(G.elementType)&&(yt=Sy):yt=Wk;if(yt&&(yt=yt(i,G))){vy(et,yt,l,Q);break t}Ft&&Ft(i,Y,G),i==="focusout"&&G&&Y.type==="number"&&G.memoizedProps.value!=null&&dd(Y,"number",Y.value)}switch(Ft=G?dr(G):window,i){case"focusin":(by(Ft)||Ft.contentEditable==="true")&&(Wa=Ft,Ad=G,yl=null);break;case"focusout":yl=Ad=Wa=null;break;case"mousedown":Ed=!0;break;case"contextmenu":case"mouseup":case"dragend":Ed=!1,Ry(et,l,Q);break;case"selectionchange":if(Qk)break;case"keydown":case"keyup":Ry(et,l,Q)}var Tt;if(_d)t:{switch(i){case"compositionstart":var Mt="onCompositionStart";break t;case"compositionend":Mt="onCompositionEnd";break t;case"compositionupdate":Mt="onCompositionUpdate";break t}Mt=void 0}else Ya?my(i,l)&&(Mt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Mt="onCompositionStart");Mt&&(fy&&l.locale!=="ko"&&(Ya||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Ya&&(Tt=oy()):(fr=Q,bd="value"in fr?fr.value:fr.textContent,Ya=!0)),Ft=nu(G,Mt),0<Ft.length&&(Mt=new hy(Mt,i,null,l,Q),et.push({event:Mt,listeners:Ft}),Tt?Mt.data=Tt:(Tt=yy(l),Tt!==null&&(Mt.data=Tt)))),(Tt=zk?qk(i,l):Uk(i,l))&&(Mt=nu(G,"onBeforeInput"),0<Mt.length&&(Ft=new hy("onBeforeInput","beforeinput",null,l,Q),et.push({event:Ft,listeners:Mt}),Ft.data=Tt)),DA(et,i,G,l,Q)}Jb(et,r)})}function jl(i,r,l){return{instance:i,listener:r,currentTarget:l}}function nu(i,r){for(var l=r+"Capture",h=[];i!==null;){var p=i,y=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||y===null||(p=cl(i,l),p!=null&&h.unshift(jl(i,p,y)),p=cl(i,r),p!=null&&h.push(jl(i,p,y))),i.tag===3)return h;i=i.return}return[]}function ys(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function ev(i,r,l,h,p){for(var y=r._reactName,_=[];l!==null&&l!==h;){var A=l,B=A.alternate,G=A.stateNode;if(A=A.tag,B!==null&&B===h)break;A!==5&&A!==26&&A!==27||G===null||(B=G,p?(G=cl(l,y),G!=null&&_.unshift(jl(l,G,B))):p||(G=cl(l,y),G!=null&&_.push(jl(l,G,B)))),l=l.return}_.length!==0&&i.push({event:r,listeners:_})}var PA=/\r\n?/g,IA=/\u0000|\uFFFD/g;function iv(i){return(typeof i=="string"?i:""+i).replace(PA,`
`).replace(IA,"")}function nv(i,r){return r=iv(r),iv(i)===r}function ru(){}function ie(i,r,l,h,p,y){switch(l){case"children":typeof h=="string"?r==="body"||r==="textarea"&&h===""||Ha(i,h):(typeof h=="number"||typeof h=="bigint")&&r!=="body"&&Ha(i,""+h);break;case"className":hn(i,"class",h);break;case"tabIndex":hn(i,"tabindex",h);break;case"dir":case"role":case"viewBox":case"width":case"height":hn(i,l,h);break;case"style":ay(i,h,y);break;case"data":if(r!=="object"){hn(i,"data",h);break}case"src":case"href":if(h===""&&(r!=="a"||l!=="href")){i.removeAttribute(l);break}if(h==null||typeof h=="function"||typeof h=="symbol"||typeof h=="boolean"){i.removeAttribute(l);break}h=dc(""+h),i.setAttribute(l,h);break;case"action":case"formAction":if(typeof h=="function"){i.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof y=="function"&&(l==="formAction"?(r!=="input"&&ie(i,r,"name",p.name,p,null),ie(i,r,"formEncType",p.formEncType,p,null),ie(i,r,"formMethod",p.formMethod,p,null),ie(i,r,"formTarget",p.formTarget,p,null)):(ie(i,r,"encType",p.encType,p,null),ie(i,r,"method",p.method,p,null),ie(i,r,"target",p.target,p,null)));if(h==null||typeof h=="symbol"||typeof h=="boolean"){i.removeAttribute(l);break}h=dc(""+h),i.setAttribute(l,h);break;case"onClick":h!=null&&(i.onclick=ru);break;case"onScroll":h!=null&&zt("scroll",i);break;case"onScrollEnd":h!=null&&zt("scrollend",i);break;case"dangerouslySetInnerHTML":if(h!=null){if(typeof h!="object"||!("__html"in h))throw Error(a(61));if(l=h.__html,l!=null){if(p.children!=null)throw Error(a(60));i.innerHTML=l}}break;case"multiple":i.multiple=h&&typeof h!="function"&&typeof h!="symbol";break;case"muted":i.muted=h&&typeof h!="function"&&typeof h!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(h==null||typeof h=="function"||typeof h=="boolean"||typeof h=="symbol"){i.removeAttribute("xlink:href");break}l=dc(""+h),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":h!=null&&typeof h!="function"&&typeof h!="symbol"?i.setAttribute(l,""+h):i.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":h&&typeof h!="function"&&typeof h!="symbol"?i.setAttribute(l,""):i.removeAttribute(l);break;case"capture":case"download":h===!0?i.setAttribute(l,""):h!==!1&&h!=null&&typeof h!="function"&&typeof h!="symbol"?i.setAttribute(l,h):i.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":h!=null&&typeof h!="function"&&typeof h!="symbol"&&!isNaN(h)&&1<=h?i.setAttribute(l,h):i.removeAttribute(l);break;case"rowSpan":case"start":h==null||typeof h=="function"||typeof h=="symbol"||isNaN(h)?i.removeAttribute(l):i.setAttribute(l,h);break;case"popover":zt("beforetoggle",i),zt("toggle",i),gi(i,"popover",h);break;case"xlinkActuate":Ti(i,"http://www.w3.org/1999/xlink","xlink:actuate",h);break;case"xlinkArcrole":Ti(i,"http://www.w3.org/1999/xlink","xlink:arcrole",h);break;case"xlinkRole":Ti(i,"http://www.w3.org/1999/xlink","xlink:role",h);break;case"xlinkShow":Ti(i,"http://www.w3.org/1999/xlink","xlink:show",h);break;case"xlinkTitle":Ti(i,"http://www.w3.org/1999/xlink","xlink:title",h);break;case"xlinkType":Ti(i,"http://www.w3.org/1999/xlink","xlink:type",h);break;case"xmlBase":Ti(i,"http://www.w3.org/XML/1998/namespace","xml:base",h);break;case"xmlLang":Ti(i,"http://www.w3.org/XML/1998/namespace","xml:lang",h);break;case"xmlSpace":Ti(i,"http://www.w3.org/XML/1998/namespace","xml:space",h);break;case"is":gi(i,"is",h);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=fk.get(l)||l,gi(i,l,h))}}function Zf(i,r,l,h,p,y){switch(l){case"style":ay(i,h,y);break;case"dangerouslySetInnerHTML":if(h!=null){if(typeof h!="object"||!("__html"in h))throw Error(a(61));if(l=h.__html,l!=null){if(p.children!=null)throw Error(a(60));i.innerHTML=l}}break;case"children":typeof h=="string"?Ha(i,h):(typeof h=="number"||typeof h=="bigint")&&Ha(i,""+h);break;case"onScroll":h!=null&&zt("scroll",i);break;case"onScrollEnd":h!=null&&zt("scrollend",i);break;case"onClick":h!=null&&(i.onclick=ru);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!I.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(p=l.endsWith("Capture"),r=l.slice(2,p?l.length-7:void 0),y=i[Ve]||null,y=y!=null?y[l]:null,typeof y=="function"&&i.removeEventListener(r,y,p),typeof h=="function")){typeof y!="function"&&y!==null&&(l in i?i[l]=null:i.hasAttribute(l)&&i.removeAttribute(l)),i.addEventListener(r,h,p);break t}l in i?i[l]=h:h===!0?i.setAttribute(l,""):gi(i,l,h)}}}function He(i,r,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":zt("error",i),zt("load",i);var h=!1,p=!1,y;for(y in l)if(l.hasOwnProperty(y)){var _=l[y];if(_!=null)switch(y){case"src":h=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:ie(i,r,y,_,l,null)}}p&&ie(i,r,"srcSet",l.srcSet,l,null),h&&ie(i,r,"src",l.src,l,null);return;case"input":zt("invalid",i);var A=y=_=p=null,B=null,G=null;for(h in l)if(l.hasOwnProperty(h)){var Q=l[h];if(Q!=null)switch(h){case"name":p=Q;break;case"type":_=Q;break;case"checked":B=Q;break;case"defaultChecked":G=Q;break;case"value":y=Q;break;case"defaultValue":A=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(a(137,r));break;default:ie(i,r,h,Q,l,null)}}ey(i,y,A,B,G,_,p,!1),uc(i);return;case"select":zt("invalid",i),h=_=y=null;for(p in l)if(l.hasOwnProperty(p)&&(A=l[p],A!=null))switch(p){case"value":y=A;break;case"defaultValue":_=A;break;case"multiple":h=A;default:ie(i,r,p,A,l,null)}r=y,l=_,i.multiple=!!h,r!=null?Ua(i,!!h,r,!1):l!=null&&Ua(i,!!h,l,!0);return;case"textarea":zt("invalid",i),y=p=h=null;for(_ in l)if(l.hasOwnProperty(_)&&(A=l[_],A!=null))switch(_){case"value":h=A;break;case"defaultValue":p=A;break;case"children":y=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:ie(i,r,_,A,l,null)}ny(i,h,p,y),uc(i);return;case"option":for(B in l)if(l.hasOwnProperty(B)&&(h=l[B],h!=null))switch(B){case"selected":i.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ie(i,r,B,h,l,null)}return;case"dialog":zt("beforetoggle",i),zt("toggle",i),zt("cancel",i),zt("close",i);break;case"iframe":case"object":zt("load",i);break;case"video":case"audio":for(h=0;h<Gl.length;h++)zt(Gl[h],i);break;case"image":zt("error",i),zt("load",i);break;case"details":zt("toggle",i);break;case"embed":case"source":case"link":zt("error",i),zt("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in l)if(l.hasOwnProperty(G)&&(h=l[G],h!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:ie(i,r,G,h,l,null)}return;default:if(fd(r)){for(Q in l)l.hasOwnProperty(Q)&&(h=l[Q],h!==void 0&&Zf(i,r,Q,h,l,void 0));return}}for(A in l)l.hasOwnProperty(A)&&(h=l[A],h!=null&&ie(i,r,A,h,l,null))}function FA(i,r,l,h){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,y=null,_=null,A=null,B=null,G=null,Q=null;for(V in l){var et=l[V];if(l.hasOwnProperty(V)&&et!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":B=et;default:h.hasOwnProperty(V)||ie(i,r,V,null,h,et)}}for(var Y in h){var V=h[Y];if(et=l[Y],h.hasOwnProperty(Y)&&(V!=null||et!=null))switch(Y){case"type":y=V;break;case"name":p=V;break;case"checked":G=V;break;case"defaultChecked":Q=V;break;case"value":_=V;break;case"defaultValue":A=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(a(137,r));break;default:V!==et&&ie(i,r,Y,V,h,et)}}hd(i,_,A,B,G,Q,y,p);return;case"select":V=_=A=Y=null;for(y in l)if(B=l[y],l.hasOwnProperty(y)&&B!=null)switch(y){case"value":break;case"multiple":V=B;default:h.hasOwnProperty(y)||ie(i,r,y,null,h,B)}for(p in h)if(y=h[p],B=l[p],h.hasOwnProperty(p)&&(y!=null||B!=null))switch(p){case"value":Y=y;break;case"defaultValue":A=y;break;case"multiple":_=y;default:y!==B&&ie(i,r,p,y,h,B)}r=A,l=_,h=V,Y!=null?Ua(i,!!l,Y,!1):!!h!=!!l&&(r!=null?Ua(i,!!l,r,!0):Ua(i,!!l,l?[]:"",!1));return;case"textarea":V=Y=null;for(A in l)if(p=l[A],l.hasOwnProperty(A)&&p!=null&&!h.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ie(i,r,A,null,h,p)}for(_ in h)if(p=h[_],y=l[_],h.hasOwnProperty(_)&&(p!=null||y!=null))switch(_){case"value":Y=p;break;case"defaultValue":V=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==y&&ie(i,r,_,p,h,y)}iy(i,Y,V);return;case"option":for(var Ot in l)if(Y=l[Ot],l.hasOwnProperty(Ot)&&Y!=null&&!h.hasOwnProperty(Ot))switch(Ot){case"selected":i.selected=!1;break;default:ie(i,r,Ot,null,h,Y)}for(B in h)if(Y=h[B],V=l[B],h.hasOwnProperty(B)&&Y!==V&&(Y!=null||V!=null))switch(B){case"selected":i.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:ie(i,r,B,Y,h,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Et in l)Y=l[Et],l.hasOwnProperty(Et)&&Y!=null&&!h.hasOwnProperty(Et)&&ie(i,r,Et,null,h,Y);for(G in h)if(Y=h[G],V=l[G],h.hasOwnProperty(G)&&Y!==V&&(Y!=null||V!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,r));break;default:ie(i,r,G,Y,h,V)}return;default:if(fd(r)){for(var ne in l)Y=l[ne],l.hasOwnProperty(ne)&&Y!==void 0&&!h.hasOwnProperty(ne)&&Zf(i,r,ne,void 0,h,Y);for(Q in h)Y=h[Q],V=l[Q],!h.hasOwnProperty(Q)||Y===V||Y===void 0&&V===void 0||Zf(i,r,Q,Y,h,V);return}}for(var z in l)Y=l[z],l.hasOwnProperty(z)&&Y!=null&&!h.hasOwnProperty(z)&&ie(i,r,z,null,h,Y);for(et in h)Y=h[et],V=l[et],!h.hasOwnProperty(et)||Y===V||Y==null&&V==null||ie(i,r,et,Y,h,V)}var Jf=null,tg=null;function au(i){return i.nodeType===9?i:i.ownerDocument}function rv(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function av(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function eg(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ig=null;function $A(){var i=window.event;return i&&i.type==="popstate"?i===ig?!1:(ig=i,!0):(ig=null,!1)}var sv=typeof setTimeout=="function"?setTimeout:void 0,zA=typeof clearTimeout=="function"?clearTimeout:void 0,lv=typeof Promise=="function"?Promise:void 0,qA=typeof queueMicrotask=="function"?queueMicrotask:typeof lv<"u"?function(i){return lv.resolve(null).then(i).catch(UA)}:sv;function UA(i){setTimeout(function(){throw i})}function Rr(i){return i==="head"}function ov(i,r){var l=r,h=0,p=0;do{var y=l.nextSibling;if(i.removeChild(l),y&&y.nodeType===8)if(l=y.data,l==="/$"){if(0<h&&8>h){l=h;var _=i.ownerDocument;if(l&1&&Yl(_.documentElement),l&2&&Yl(_.body),l&4)for(l=_.head,Yl(l),_=l.firstChild;_;){var A=_.nextSibling,B=_.nodeName;_[hr]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&_.rel.toLowerCase()==="stylesheet"||l.removeChild(_),_=A}}if(p===0){i.removeChild(y),to(r);return}p--}else l==="$"||l==="$?"||l==="$!"?p++:h=l.charCodeAt(0)-48;else h=0;l=y}while(l);to(r)}function ng(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var l=r;switch(r=r.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":ng(l),_i(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}i.removeChild(l)}}function HA(i,r,l,h){for(;i.nodeType===1;){var p=l;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!h&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(h){if(!i[hr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(y=i.getAttribute("rel"),y==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(y!==p.rel||i.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||i.getAttribute("title")!==(p.title==null?null:p.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(y=i.getAttribute("src"),(y!==(p.src==null?null:p.src)||i.getAttribute("type")!==(p.type==null?null:p.type)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&y&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var y=p.name==null?null:""+p.name;if(p.type==="hidden"&&i.getAttribute("name")===y)return i}else return i;if(i=en(i.nextSibling),i===null)break}return null}function GA(i,r,l){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!l||(i=en(i.nextSibling),i===null))return null;return i}function rg(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function jA(i,r){var l=i.ownerDocument;if(i.data!=="$?"||l.readyState==="complete")r();else{var h=function(){r(),l.removeEventListener("DOMContentLoaded",h)};l.addEventListener("DOMContentLoaded",h),i._reactRetry=h}}function en(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var ag=null;function cv(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return i;r--}else l==="/$"&&r++}i=i.previousSibling}return null}function uv(i,r,l){switch(r=au(l),i){case"html":if(i=r.documentElement,!i)throw Error(a(452));return i;case"head":if(i=r.head,!i)throw Error(a(453));return i;case"body":if(i=r.body,!i)throw Error(a(454));return i;default:throw Error(a(451))}}function Yl(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);_i(i)}var Gi=new Map,hv=new Set;function su(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Vn=F.d;F.d={f:YA,r:WA,D:VA,C:XA,L:QA,m:KA,X:JA,S:ZA,M:tE};function YA(){var i=Vn.f(),r=Kc();return i||r}function WA(i){var r=Dn(i);r!==null&&r.tag===5&&r.type==="form"?L0(r):Vn.r(i)}var bs=typeof document>"u"?null:document;function dv(i,r,l){var h=bs;if(h&&typeof r=="string"&&r){var p=Ii(r);p='link[rel="'+i+'"][href="'+p+'"]',typeof l=="string"&&(p+='[crossorigin="'+l+'"]'),hv.has(p)||(hv.add(p),i={rel:i,crossOrigin:l,href:r},h.querySelector(p)===null&&(r=h.createElement("link"),He(r,"link",i),Ce(r),h.head.appendChild(r)))}}function VA(i){Vn.D(i),dv("dns-prefetch",i,null)}function XA(i,r){Vn.C(i,r),dv("preconnect",i,r)}function QA(i,r,l){Vn.L(i,r,l);var h=bs;if(h&&i&&r){var p='link[rel="preload"][as="'+Ii(r)+'"]';r==="image"&&l&&l.imageSrcSet?(p+='[imagesrcset="'+Ii(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(p+='[imagesizes="'+Ii(l.imageSizes)+'"]')):p+='[href="'+Ii(i)+'"]';var y=p;switch(r){case"style":y=vs(i);break;case"script":y=Ss(i)}Gi.has(y)||(i=g({rel:"preload",href:r==="image"&&l&&l.imageSrcSet?void 0:i,as:r},l),Gi.set(y,i),h.querySelector(p)!==null||r==="style"&&h.querySelector(Wl(y))||r==="script"&&h.querySelector(Vl(y))||(r=h.createElement("link"),He(r,"link",i),Ce(r),h.head.appendChild(r)))}}function KA(i,r){Vn.m(i,r);var l=bs;if(l&&i){var h=r&&typeof r.as=="string"?r.as:"script",p='link[rel="modulepreload"][as="'+Ii(h)+'"][href="'+Ii(i)+'"]',y=p;switch(h){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":y=Ss(i)}if(!Gi.has(y)&&(i=g({rel:"modulepreload",href:i},r),Gi.set(y,i),l.querySelector(p)===null)){switch(h){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Vl(y)))return}h=l.createElement("link"),He(h,"link",i),Ce(h),l.head.appendChild(h)}}}function ZA(i,r,l){Vn.S(i,r,l);var h=bs;if(h&&i){var p=Bn(h).hoistableStyles,y=vs(i);r=r||"default";var _=p.get(y);if(!_){var A={loading:0,preload:null};if(_=h.querySelector(Wl(y)))A.loading=5;else{i=g({rel:"stylesheet",href:i,"data-precedence":r},l),(l=Gi.get(y))&&sg(i,l);var B=_=h.createElement("link");Ce(B),He(B,"link",i),B._p=new Promise(function(G,Q){B.onload=G,B.onerror=Q}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,lu(_,r,h)}_={type:"stylesheet",instance:_,count:1,state:A},p.set(y,_)}}}function JA(i,r){Vn.X(i,r);var l=bs;if(l&&i){var h=Bn(l).hoistableScripts,p=Ss(i),y=h.get(p);y||(y=l.querySelector(Vl(p)),y||(i=g({src:i,async:!0},r),(r=Gi.get(p))&&lg(i,r),y=l.createElement("script"),Ce(y),He(y,"link",i),l.head.appendChild(y)),y={type:"script",instance:y,count:1,state:null},h.set(p,y))}}function tE(i,r){Vn.M(i,r);var l=bs;if(l&&i){var h=Bn(l).hoistableScripts,p=Ss(i),y=h.get(p);y||(y=l.querySelector(Vl(p)),y||(i=g({src:i,async:!0,type:"module"},r),(r=Gi.get(p))&&lg(i,r),y=l.createElement("script"),Ce(y),He(y,"link",i),l.head.appendChild(y)),y={type:"script",instance:y,count:1,state:null},h.set(p,y))}}function fv(i,r,l,h){var p=(p=ht.current)?su(p):null;if(!p)throw Error(a(446));switch(i){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(r=vs(l.href),l=Bn(p).hoistableStyles,h=l.get(r),h||(h={type:"style",instance:null,count:0,state:null},l.set(r,h)),h):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){i=vs(l.href);var y=Bn(p).hoistableStyles,_=y.get(i);if(_||(p=p.ownerDocument||p,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},y.set(i,_),(y=p.querySelector(Wl(i)))&&!y._p&&(_.instance=y,_.state.loading=5),Gi.has(i)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Gi.set(i,l),y||eE(p,i,l,_.state))),r&&h===null)throw Error(a(528,""));return _}if(r&&h!==null)throw Error(a(529,""));return null;case"script":return r=l.async,l=l.src,typeof l=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ss(l),l=Bn(p).hoistableScripts,h=l.get(r),h||(h={type:"script",instance:null,count:0,state:null},l.set(r,h)),h):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,i))}}function vs(i){return'href="'+Ii(i)+'"'}function Wl(i){return'link[rel="stylesheet"]['+i+"]"}function gv(i){return g({},i,{"data-precedence":i.precedence,precedence:null})}function eE(i,r,l,h){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?h.loading=1:(r=i.createElement("link"),h.preload=r,r.addEventListener("load",function(){return h.loading|=1}),r.addEventListener("error",function(){return h.loading|=2}),He(r,"link",l),Ce(r),i.head.appendChild(r))}function Ss(i){return'[src="'+Ii(i)+'"]'}function Vl(i){return"script[async]"+i}function pv(i,r,l){if(r.count++,r.instance===null)switch(r.type){case"style":var h=i.querySelector('style[data-href~="'+Ii(l.href)+'"]');if(h)return r.instance=h,Ce(h),h;var p=g({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return h=(i.ownerDocument||i).createElement("style"),Ce(h),He(h,"style",p),lu(h,l.precedence,i),r.instance=h;case"stylesheet":p=vs(l.href);var y=i.querySelector(Wl(p));if(y)return r.state.loading|=4,r.instance=y,Ce(y),y;h=gv(l),(p=Gi.get(p))&&sg(h,p),y=(i.ownerDocument||i).createElement("link"),Ce(y);var _=y;return _._p=new Promise(function(A,B){_.onload=A,_.onerror=B}),He(y,"link",h),r.state.loading|=4,lu(y,l.precedence,i),r.instance=y;case"script":return y=Ss(l.src),(p=i.querySelector(Vl(y)))?(r.instance=p,Ce(p),p):(h=l,(p=Gi.get(y))&&(h=g({},l),lg(h,p)),i=i.ownerDocument||i,p=i.createElement("script"),Ce(p),He(p,"link",h),i.head.appendChild(p),r.instance=p);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(h=r.instance,r.state.loading|=4,lu(h,l.precedence,i));return r.instance}function lu(i,r,l){for(var h=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=h.length?h[h.length-1]:null,y=p,_=0;_<h.length;_++){var A=h[_];if(A.dataset.precedence===r)y=A;else if(y!==p)break}y?y.parentNode.insertBefore(i,y.nextSibling):(r=l.nodeType===9?l.head:l,r.insertBefore(i,r.firstChild))}function sg(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function lg(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var ou=null;function mv(i,r,l){if(ou===null){var h=new Map,p=ou=new Map;p.set(l,h)}else p=ou,h=p.get(l),h||(h=new Map,p.set(l,h));if(h.has(i))return h;for(h.set(i,null),l=l.getElementsByTagName(i),p=0;p<l.length;p++){var y=l[p];if(!(y[hr]||y[Ee]||i==="link"&&y.getAttribute("rel")==="stylesheet")&&y.namespaceURI!=="http://www.w3.org/2000/svg"){var _=y.getAttribute(r)||"";_=i+_;var A=h.get(_);A?A.push(y):h.set(_,[y])}}return h}function yv(i,r,l){i=i.ownerDocument||i,i.head.insertBefore(l,r==="title"?i.querySelector("head > title"):null)}function iE(i,r,l){if(l===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function bv(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Xl=null;function nE(){}function rE(i,r,l){if(Xl===null)throw Error(a(475));var h=Xl;if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var p=vs(l.href),y=i.querySelector(Wl(p));if(y){i=y._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(h.count++,h=cu.bind(h),i.then(h,h)),r.state.loading|=4,r.instance=y,Ce(y);return}y=i.ownerDocument||i,l=gv(l),(p=Gi.get(p))&&sg(l,p),y=y.createElement("link"),Ce(y);var _=y;_._p=new Promise(function(A,B){_.onload=A,_.onerror=B}),He(y,"link",l),r.instance=y}h.stylesheets===null&&(h.stylesheets=new Map),h.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(h.count++,r=cu.bind(h),i.addEventListener("load",r),i.addEventListener("error",r))}}function aE(){if(Xl===null)throw Error(a(475));var i=Xl;return i.stylesheets&&i.count===0&&og(i,i.stylesheets),0<i.count?function(r){var l=setTimeout(function(){if(i.stylesheets&&og(i,i.stylesheets),i.unsuspend){var h=i.unsuspend;i.unsuspend=null,h()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(l)}}:null}function cu(){if(this.count--,this.count===0){if(this.stylesheets)og(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var uu=null;function og(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,uu=new Map,r.forEach(sE,i),uu=null,cu.call(i))}function sE(i,r){if(!(r.state.loading&4)){var l=uu.get(i);if(l)var h=l.get(null);else{l=new Map,uu.set(i,l);for(var p=i.querySelectorAll("link[data-precedence],style[data-precedence]"),y=0;y<p.length;y++){var _=p[y];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(l.set(_.dataset.precedence,_),h=_)}h&&l.set(null,h)}p=r.instance,_=p.getAttribute("data-precedence"),y=l.get(_)||h,y===h&&l.set(null,p),l.set(_,p),this.count++,h=cu.bind(this),p.addEventListener("load",h),p.addEventListener("error",h),y?y.parentNode.insertBefore(p,y.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(p,i.firstChild)),r.state.loading|=4}}var Ql={$$typeof:E,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function lE(i,r,l,h,p,y,_,A){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.hiddenUpdates=rl(null),this.identifierPrefix=h,this.onUncaughtError=p,this.onCaughtError=y,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function vv(i,r,l,h,p,y,_,A,B,G,Q,et){return i=new lE(i,r,l,_,A,B,G,et),r=1,y===!0&&(r|=24),y=ki(3,null,null,r),i.current=y,y.stateNode=i,r=Ud(),r.refCount++,i.pooledCache=r,r.refCount++,y.memoizedState={element:h,isDehydrated:l,cache:r},Yd(y),i}function Sv(i){return i?(i=Ka,i):Ka}function xv(i,r,l,h,p,y){p=Sv(p),h.context===null?h.context=p:h.pendingContext=p,h=mr(r),h.payload={element:l},y=y===void 0?null:y,y!==null&&(h.callback=y),l=yr(i,h,r),l!==null&&(Li(l,i,r),kl(l,i,r))}function Cv(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<r?l:r}}function cg(i,r){Cv(i,r),(i=i.alternate)&&Cv(i,r)}function _v(i){if(i.tag===13){var r=Qa(i,67108864);r!==null&&Li(r,i,67108864),cg(i,67108864)}}var hu=!0;function oE(i,r,l,h){var p=M.T;M.T=null;var y=F.p;try{F.p=2,ug(i,r,l,h)}finally{F.p=y,M.T=p}}function cE(i,r,l,h){var p=M.T;M.T=null;var y=F.p;try{F.p=8,ug(i,r,l,h)}finally{F.p=y,M.T=p}}function ug(i,r,l,h){if(hu){var p=hg(h);if(p===null)Kf(i,r,h,du,l),wv(i,h);else if(hE(p,i,r,l,h))h.stopPropagation();else if(wv(i,h),r&4&&-1<uE.indexOf(i)){for(;p!==null;){var y=Dn(p);if(y!==null)switch(y.tag){case 3:if(y=y.stateNode,y.current.memoizedState.isDehydrated){var _=fi(y.pendingLanes);if(_!==0){var A=y;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var B=1<<31-We(_);A.entanglements[1]|=B,_&=~B}mn(y),(Jt&6)===0&&(Xc=$e()+500,Hl(0))}}break;case 13:A=Qa(y,2),A!==null&&Li(A,y,2),Kc(),cg(y,2)}if(y=hg(h),y===null&&Kf(i,r,h,du,l),y===p)break;p=y}p!==null&&h.stopPropagation()}else Kf(i,r,h,null,l)}}function hg(i){return i=pd(i),dg(i)}var du=null;function dg(i){if(du=null,i=Ln(i),i!==null){var r=o(i);if(r===null)i=null;else{var l=r.tag;if(l===13){if(i=u(r),i!==null)return i;i=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return du=i,null}function Tv(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fa()){case Wr:return 2;case il:return 8;case Vr:case sd:return 32;case $a:return 268435456;default:return 32}default:return 32}}var fg=!1,Mr=null,Lr=null,Dr=null,Kl=new Map,Zl=new Map,Br=[],uE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wv(i,r){switch(i){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Kl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(r.pointerId)}}function Jl(i,r,l,h,p,y){return i===null||i.nativeEvent!==y?(i={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:y,targetContainers:[p]},r!==null&&(r=Dn(r),r!==null&&_v(r)),i):(i.eventSystemFlags|=h,r=i.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),i)}function hE(i,r,l,h,p){switch(r){case"focusin":return Mr=Jl(Mr,i,r,l,h,p),!0;case"dragenter":return Lr=Jl(Lr,i,r,l,h,p),!0;case"mouseover":return Dr=Jl(Dr,i,r,l,h,p),!0;case"pointerover":var y=p.pointerId;return Kl.set(y,Jl(Kl.get(y)||null,i,r,l,h,p)),!0;case"gotpointercapture":return y=p.pointerId,Zl.set(y,Jl(Zl.get(y)||null,i,r,l,h,p)),!0}return!1}function kv(i){var r=Ln(i.target);if(r!==null){var l=o(r);if(l!==null){if(r=l.tag,r===13){if(r=u(l),r!==null){i.blockedOn=r,ll(i.priority,function(){if(l.tag===13){var h=Mi();h=cn(h);var p=Qa(l,h);p!==null&&Li(p,l,h),cg(l,h)}});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function fu(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var l=hg(i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);gd=h,l.target.dispatchEvent(h),gd=null}else return r=Dn(l),r!==null&&_v(r),i.blockedOn=l,!1;r.shift()}return!0}function Av(i,r,l){fu(i)&&l.delete(r)}function dE(){fg=!1,Mr!==null&&fu(Mr)&&(Mr=null),Lr!==null&&fu(Lr)&&(Lr=null),Dr!==null&&fu(Dr)&&(Dr=null),Kl.forEach(Av),Zl.forEach(Av)}function gu(i,r){i.blockedOn===r&&(i.blockedOn=null,fg||(fg=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,dE)))}var pu=null;function Ev(i){pu!==i&&(pu=i,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){pu===i&&(pu=null);for(var r=0;r<i.length;r+=3){var l=i[r],h=i[r+1],p=i[r+2];if(typeof h!="function"){if(dg(h||l)===null)continue;break}var y=Dn(l);y!==null&&(i.splice(r,3),r-=3,df(y,{pending:!0,data:p,method:l.method,action:h},h,p))}}))}function to(i){function r(B){return gu(B,i)}Mr!==null&&gu(Mr,i),Lr!==null&&gu(Lr,i),Dr!==null&&gu(Dr,i),Kl.forEach(r),Zl.forEach(r);for(var l=0;l<Br.length;l++){var h=Br[l];h.blockedOn===i&&(h.blockedOn=null)}for(;0<Br.length&&(l=Br[0],l.blockedOn===null);)kv(l),l.blockedOn===null&&Br.shift();if(l=(i.ownerDocument||i).$$reactFormReplay,l!=null)for(h=0;h<l.length;h+=3){var p=l[h],y=l[h+1],_=p[Ve]||null;if(typeof y=="function")_||Ev(l);else if(_){var A=null;if(y&&y.hasAttribute("formAction")){if(p=y,_=y[Ve]||null)A=_.formAction;else if(dg(p)!==null)continue}else A=_.action;typeof A=="function"?l[h+1]=A:(l.splice(h,3),h-=3),Ev(l)}}}function gg(i){this._internalRoot=i}mu.prototype.render=gg.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(a(409));var l=r.current,h=Mi();xv(l,h,i,r,null,null)},mu.prototype.unmount=gg.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;xv(i.current,2,null,i,null,null),Kc(),r[ze]=null}};function mu(i){this._internalRoot=i}mu.prototype.unstable_scheduleHydration=function(i){if(i){var r=sl();i={blockedOn:null,target:i,priority:r};for(var l=0;l<Br.length&&r!==0&&r<Br[l].priority;l++);Br.splice(l,0,i),l===0&&kv(i)}};var Rv=t.version;if(Rv!=="19.1.0")throw Error(a(527,Rv,"19.1.0"));F.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(a(188)):(i=Object.keys(i).join(","),Error(a(268,i)));return i=f(r),i=i!==null?d(i):null,i=i===null?null:i.stateNode,i};var fE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Ni=yu.inject(fE),Ye=yu}catch{}}return io.createRoot=function(i,r){if(!s(i))throw Error(a(299));var l=!1,h="",p=j0,y=Y0,_=W0,A=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=vv(i,1,!1,null,null,l,h,p,y,_,A,null),i[ze]=r.current,Qf(i),new gg(r)},io.hydrateRoot=function(i,r,l){if(!s(i))throw Error(a(299));var h=!1,p="",y=j0,_=Y0,A=W0,B=null,G=null;return l!=null&&(l.unstable_strictMode===!0&&(h=!0),l.identifierPrefix!==void 0&&(p=l.identifierPrefix),l.onUncaughtError!==void 0&&(y=l.onUncaughtError),l.onCaughtError!==void 0&&(_=l.onCaughtError),l.onRecoverableError!==void 0&&(A=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(B=l.unstable_transitionCallbacks),l.formState!==void 0&&(G=l.formState)),r=vv(i,1,!0,r,l??null,h,p,y,_,A,B,G),r.context=Sv(null),l=r.current,h=Mi(),h=cn(h),p=mr(h),p.callback=null,yr(l,p,h),l=h,r.current.lanes=l,Ki(r,l),mn(r),i[ze]=r.current,Qf(i),new mu(r)},io.version="19.1.0",io}var $v;function kE(){if($v)return yg.exports;$v=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),yg.exports=wE(),yg.exports}var AE=kE(),no={},zv;function EE(){if(zv)return no;zv=1,Object.defineProperty(no,"__esModule",{value:!0}),no.parse=u,no.serialize=d;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,o=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function u(b,v){const S=new o,C=b.length;if(C<2)return S;const w=(v==null?void 0:v.decode)||g;let T=0;do{const k=b.indexOf("=",T);if(k===-1)break;const E=b.indexOf(";",T),O=E===-1?C:E;if(k>O){T=b.lastIndexOf(";",k-1)+1;continue}const D=c(b,T,k),R=f(b,k,D),N=b.slice(D,R);if(S[N]===void 0){let K=c(b,k+1,O),it=f(b,O,K);const nt=w(b.slice(K,it));S[N]=nt}T=O+1}while(T<C);return S}function c(b,v,S){do{const C=b.charCodeAt(v);if(C!==32&&C!==9)return v}while(++v<S);return S}function f(b,v,S){for(;v>S;){const C=b.charCodeAt(--v);if(C!==32&&C!==9)return v+1}return S}function d(b,v,S){const C=(S==null?void 0:S.encode)||encodeURIComponent;if(!e.test(b))throw new TypeError(`argument name is invalid: ${b}`);const w=C(v);if(!t.test(w))throw new TypeError(`argument val is invalid: ${v}`);let T=b+"="+w;if(!S)return T;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);T+="; Max-Age="+S.maxAge}if(S.domain){if(!n.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);T+="; Domain="+S.domain}if(S.path){if(!a.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);T+="; Path="+S.path}if(S.expires){if(!m(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);T+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(T+="; HttpOnly"),S.secure&&(T+="; Secure"),S.partitioned&&(T+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":T+="; Priority=Low";break;case"medium":T+="; Priority=Medium";break;case"high":T+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":T+="; SameSite=Strict";break;case"lax":T+="; SameSite=Lax";break;case"none":T+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return T}function g(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function m(b){return s.call(b)==="[object Date]"}return no}EE();var qv="popstate";function RE(e={}){function t(a,s){let{pathname:o,search:u,hash:c}=a.location;return Gg("",{pathname:o,search:u,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(a,s){return typeof s=="string"?s:Bo(s)}return LE(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Cn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ME(){return Math.random().toString(36).substring(2,10)}function Uv(e,t){return{usr:e.state,key:e.key,idx:t}}function Gg(e,t,n=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ys(t):t,state:n,key:t&&t.key||a||ME()}}function Bo({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ys(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function LE(e,t,n,a={}){let{window:s=document.defaultView,v5Compat:o=!1}=a,u=s.history,c="POP",f=null,d=g();d==null&&(d=0,u.replaceState({...u.state,idx:d},""));function g(){return(u.state||{idx:null}).idx}function m(){c="POP";let w=g(),T=w==null?null:w-d;d=w,f&&f({action:c,location:C.location,delta:T})}function b(w,T){c="PUSH";let k=Gg(C.location,w,T);d=g()+1;let E=Uv(k,d),O=C.createHref(k);try{u.pushState(E,"",O)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;s.location.assign(O)}o&&f&&f({action:c,location:C.location,delta:1})}function v(w,T){c="REPLACE";let k=Gg(C.location,w,T);d=g();let E=Uv(k,d),O=C.createHref(k);u.replaceState(E,"",O),o&&f&&f({action:c,location:C.location,delta:0})}function S(w){return DE(w)}let C={get action(){return c},get location(){return e(s,u)},listen(w){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(qv,m),f=w,()=>{s.removeEventListener(qv,m),f=null}},createHref(w){return t(s,w)},createURL:S,encodeLocation(w){let T=S(w);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:b,replace:v,go(w){return u.go(w)}};return C}function DE(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),fe(n,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:Bo(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function Ex(e,t,n="/"){return BE(e,t,n,!1)}function BE(e,t,n,a){let s=typeof t=="string"?Ys(t):t,o=ar(s.pathname||"/",n);if(o==null)return null;let u=Rx(e);OE(u);let c=null;for(let f=0;c==null&&f<u.length;++f){let d=jE(o);c=HE(u[f],d,a)}return c}function Rx(e,t=[],n=[],a=""){let s=(o,u,c)=>{let f={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};f.relativePath.startsWith("/")&&(fe(f.relativePath.startsWith(a),`Absolute route path "${f.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(a.length));let d=ir([a,f.relativePath]),g=n.concat(f);o.children&&o.children.length>0&&(fe(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Rx(o.children,t,g,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:qE(d,o.index),routesMeta:g})};return e.forEach((o,u)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))s(o,u);else for(let f of Mx(o.path))s(o,u,f)}),t}function Mx(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,s=n.endsWith("?"),o=n.replace(/\?$/,"");if(a.length===0)return s?[o,""]:[o];let u=Mx(a.join("/")),c=[];return c.push(...u.map(f=>f===""?o:[o,f].join("/"))),s&&c.push(...u),c.map(f=>e.startsWith("/")&&f===""?"/":f)}function OE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:UE(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var NE=/^:[\w-]+$/,PE=3,IE=2,FE=1,$E=10,zE=-2,Hv=e=>e==="*";function qE(e,t){let n=e.split("/"),a=n.length;return n.some(Hv)&&(a+=zE),t&&(a+=IE),n.filter(s=>!Hv(s)).reduce((s,o)=>s+(NE.test(o)?PE:o===""?FE:$E),a)}function UE(e,t){return e.length===t.length&&e.slice(0,-1).every((a,s)=>a===t[s])?e[e.length-1]-t[t.length-1]:0}function HE(e,t,n=!1){let{routesMeta:a}=e,s={},o="/",u=[];for(let c=0;c<a.length;++c){let f=a[c],d=c===a.length-1,g=o==="/"?t:t.slice(o.length)||"/",m=Vu({path:f.relativePath,caseSensitive:f.caseSensitive,end:d},g),b=f.route;if(!m&&d&&n&&!a[a.length-1].route.index&&(m=Vu({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},g)),!m)return null;Object.assign(s,m.params),u.push({params:s,pathname:ir([o,m.pathname]),pathnameBase:XE(ir([o,m.pathnameBase])),route:b}),m.pathnameBase!=="/"&&(o=ir([o,m.pathnameBase]))}return u}function Vu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=GE(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let o=s[0],u=o.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:a.reduce((d,{paramName:g,isOptional:m},b)=>{if(g==="*"){let S=c[b]||"";u=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}const v=c[b];return m&&!v?d[g]=void 0:d[g]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:u,pattern:e}}function GE(e,t=!1,n=!0){Cn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,f)=>(a.push({paramName:c,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),a]}function jE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Cn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ar(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function YE(e,t="/"){let{pathname:n,search:a="",hash:s=""}=typeof e=="string"?Ys(e):e;return{pathname:n?n.startsWith("/")?n:WE(n,t):t,search:QE(a),hash:KE(s)}}function WE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function xg(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function VE(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lx(e){let t=VE(e);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function Dx(e,t,n,a=!1){let s;typeof e=="string"?s=Ys(e):(s={...e},fe(!s.pathname||!s.pathname.includes("?"),xg("?","pathname","search",s)),fe(!s.pathname||!s.pathname.includes("#"),xg("#","pathname","hash",s)),fe(!s.search||!s.search.includes("#"),xg("#","search","hash",s)));let o=e===""||s.pathname==="",u=o?"/":s.pathname,c;if(u==null)c=n;else{let m=t.length-1;if(!a&&u.startsWith("..")){let b=u.split("/");for(;b[0]==="..";)b.shift(),m-=1;s.pathname=b.join("/")}c=m>=0?t[m]:"/"}let f=YE(s,c),d=u&&u!=="/"&&u.endsWith("/"),g=(o||u===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(d||g)&&(f.pathname+="/"),f}var ir=e=>e.join("/").replace(/\/\/+/g,"/"),XE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),QE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,KE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ZE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Bx=["POST","PUT","PATCH","DELETE"];new Set(Bx);var JE=["GET",...Bx];new Set(JE);var Ws=J.createContext(null);Ws.displayName="DataRouter";var Lh=J.createContext(null);Lh.displayName="DataRouterState";var Ox=J.createContext({isTransitioning:!1});Ox.displayName="ViewTransition";var tR=J.createContext(new Map);tR.displayName="Fetchers";var eR=J.createContext(null);eR.displayName="Await";var wn=J.createContext(null);wn.displayName="Navigation";var Wo=J.createContext(null);Wo.displayName="Location";var kn=J.createContext({outlet:null,matches:[],isDataRoute:!1});kn.displayName="Route";var jp=J.createContext(null);jp.displayName="RouteError";function iR(e,{relative:t}={}){fe(Vo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=J.useContext(wn),{hash:s,pathname:o,search:u}=Xo(e,{relative:t}),c=o;return n!=="/"&&(c=o==="/"?n:ir([n,o])),a.createHref({pathname:c,search:u,hash:s})}function Vo(){return J.useContext(Wo)!=null}function Da(){return fe(Vo(),"useLocation() may be used only in the context of a <Router> component."),J.useContext(Wo).location}var Nx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Px(e){J.useContext(wn).static||J.useLayoutEffect(e)}function nR(){let{isDataRoute:e}=J.useContext(kn);return e?yR():rR()}function rR(){fe(Vo(),"useNavigate() may be used only in the context of a <Router> component.");let e=J.useContext(Ws),{basename:t,navigator:n}=J.useContext(wn),{matches:a}=J.useContext(kn),{pathname:s}=Da(),o=JSON.stringify(Lx(a)),u=J.useRef(!1);return Px(()=>{u.current=!0}),J.useCallback((f,d={})=>{if(Cn(u.current,Nx),!u.current)return;if(typeof f=="number"){n.go(f);return}let g=Dx(f,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ir([t,g.pathname])),(d.replace?n.replace:n.push)(g,d.state,d)},[t,n,o,s,e])}J.createContext(null);function aR(){let{matches:e}=J.useContext(kn),t=e[e.length-1];return t?t.params:{}}function Xo(e,{relative:t}={}){let{matches:n}=J.useContext(kn),{pathname:a}=Da(),s=JSON.stringify(Lx(n));return J.useMemo(()=>Dx(e,JSON.parse(s),a,t==="path"),[e,s,a,t])}function sR(e,t){return Ix(e,t)}function Ix(e,t,n,a){var T;fe(Vo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=J.useContext(wn),{matches:o}=J.useContext(kn),u=o[o.length-1],c=u?u.params:{},f=u?u.pathname:"/",d=u?u.pathnameBase:"/",g=u&&u.route;{let k=g&&g.path||"";Fx(f,!g||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let m=Da(),b;if(t){let k=typeof t=="string"?Ys(t):t;fe(d==="/"||((T=k.pathname)==null?void 0:T.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${k.pathname}" was given in the \`location\` prop.`),b=k}else b=m;let v=b.pathname||"/",S=v;if(d!=="/"){let k=d.replace(/^\//,"").split("/");S="/"+v.replace(/^\//,"").split("/").slice(k.length).join("/")}let C=Ex(e,{pathname:S});Cn(g||C!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Cn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=hR(C&&C.map(k=>Object.assign({},k,{params:Object.assign({},c,k.params),pathname:ir([d,s.encodeLocation?s.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?d:ir([d,s.encodeLocation?s.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,n,a);return t&&w?J.createElement(Wo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},w):w}function lR(){let e=mR(),t=ZE(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},o={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=J.createElement(J.Fragment,null,J.createElement("p",null,"💿 Hey developer 👋"),J.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",J.createElement("code",{style:o},"ErrorBoundary")," or"," ",J.createElement("code",{style:o},"errorElement")," prop on your route.")),J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},t),n?J.createElement("pre",{style:s},n):null,u)}var oR=J.createElement(lR,null),cR=class extends J.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?J.createElement(kn.Provider,{value:this.props.routeContext},J.createElement(jp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function uR({routeContext:e,match:t,children:n}){let a=J.useContext(Ws);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),J.createElement(kn.Provider,{value:e},n)}function hR(e,t=[],n=null,a=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,o=n==null?void 0:n.errors;if(o!=null){let f=s.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);fe(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,f+1))}let u=!1,c=-1;if(n)for(let f=0;f<s.length;f++){let d=s[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:g,errors:m}=n,b=d.route.loader&&!g.hasOwnProperty(d.route.id)&&(!m||m[d.route.id]===void 0);if(d.route.lazy||b){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((f,d,g)=>{let m,b=!1,v=null,S=null;n&&(m=o&&d.route.id?o[d.route.id]:void 0,v=d.route.errorElement||oR,u&&(c<0&&g===0?(Fx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,S=null):c===g&&(b=!0,S=d.route.hydrateFallbackElement||null)));let C=t.concat(s.slice(0,g+1)),w=()=>{let T;return m?T=v:b?T=S:d.route.Component?T=J.createElement(d.route.Component,null):d.route.element?T=d.route.element:T=f,J.createElement(uR,{match:d,routeContext:{outlet:f,matches:C,isDataRoute:n!=null},children:T})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?J.createElement(cR,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:w(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):w()},null)}function Yp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dR(e){let t=J.useContext(Ws);return fe(t,Yp(e)),t}function fR(e){let t=J.useContext(Lh);return fe(t,Yp(e)),t}function gR(e){let t=J.useContext(kn);return fe(t,Yp(e)),t}function Wp(e){let t=gR(e),n=t.matches[t.matches.length-1];return fe(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function pR(){return Wp("useRouteId")}function mR(){var a;let e=J.useContext(jp),t=fR("useRouteError"),n=Wp("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[n]}function yR(){let{router:e}=dR("useNavigate"),t=Wp("useNavigate"),n=J.useRef(!1);return Px(()=>{n.current=!0}),J.useCallback(async(s,o={})=>{Cn(n.current,Nx),n.current&&(typeof s=="number"?e.navigate(s):await e.navigate(s,{fromRouteId:t,...o}))},[e,t])}var Gv={};function Fx(e,t,n){!t&&!Gv[e]&&(Gv[e]=!0,Cn(!1,n))}J.memo(bR);function bR({routes:e,future:t,state:n}){return Ix(e,void 0,n,t)}function jg(e){fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vR({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:s,static:o=!1}){fe(!Vo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),c=J.useMemo(()=>({basename:u,navigator:s,static:o,future:{}}),[u,s,o]);typeof n=="string"&&(n=Ys(n));let{pathname:f="/",search:d="",hash:g="",state:m=null,key:b="default"}=n,v=J.useMemo(()=>{let S=ar(f,u);return S==null?null:{location:{pathname:S,search:d,hash:g,state:m,key:b},navigationType:a}},[u,f,d,g,m,b,a]);return Cn(v!=null,`<Router basename="${u}"> is not able to match the URL "${f}${d}${g}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:J.createElement(wn.Provider,{value:c},J.createElement(Wo.Provider,{children:t,value:v}))}function SR({children:e,location:t}){return sR(Yg(e),t)}function Yg(e,t=[]){let n=[];return J.Children.forEach(e,(a,s)=>{if(!J.isValidElement(a))return;let o=[...t,s];if(a.type===J.Fragment){n.push.apply(n,Yg(a.props.children,o));return}fe(a.type===jg,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),fe(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=Yg(a.props.children,o)),n.push(u)}),n}var Mu="get",Lu="application/x-www-form-urlencoded";function Dh(e){return e!=null&&typeof e.tagName=="string"}function xR(e){return Dh(e)&&e.tagName.toLowerCase()==="button"}function CR(e){return Dh(e)&&e.tagName.toLowerCase()==="form"}function _R(e){return Dh(e)&&e.tagName.toLowerCase()==="input"}function TR(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wR(e,t){return e.button===0&&(!t||t==="_self")&&!TR(e)}var bu=null;function kR(){if(bu===null)try{new FormData(document.createElement("form"),0),bu=!1}catch{bu=!0}return bu}var AR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cg(e){return e!=null&&!AR.has(e)?(Cn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lu}"`),null):e}function ER(e,t){let n,a,s,o,u;if(CR(e)){let c=e.getAttribute("action");a=c?ar(c,t):null,n=e.getAttribute("method")||Mu,s=Cg(e.getAttribute("enctype"))||Lu,o=new FormData(e)}else if(xR(e)||_R(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=e.getAttribute("formaction")||c.getAttribute("action");if(a=f?ar(f,t):null,n=e.getAttribute("formmethod")||c.getAttribute("method")||Mu,s=Cg(e.getAttribute("formenctype"))||Cg(c.getAttribute("enctype"))||Lu,o=new FormData(c,e),!kR()){let{name:d,type:g,value:m}=e;if(g==="image"){let b=d?`${d}.`:"";o.append(`${b}x`,"0"),o.append(`${b}y`,"0")}else d&&o.append(d,m)}}else{if(Dh(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Mu,a=null,s=Lu,u=e}return o&&s==="text/plain"&&(u=o,o=void 0),{action:a,method:n.toLowerCase(),encType:s,formData:o,body:u}}function Vp(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function RR(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function MR(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function LR(e,t,n){let a=await Promise.all(e.map(async s=>{let o=t.routes[s.route.id];if(o){let u=await RR(o,n);return u.links?u.links():[]}return[]}));return NR(a.flat(1).filter(MR).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function jv(e,t,n,a,s,o){let u=(f,d)=>n[d]?f.route.id!==n[d].route.id:!0,c=(f,d)=>{var g;return n[d].pathname!==f.pathname||((g=n[d].route.path)==null?void 0:g.endsWith("*"))&&n[d].params["*"]!==f.params["*"]};return o==="assets"?t.filter((f,d)=>u(f,d)||c(f,d)):o==="data"?t.filter((f,d)=>{var m;let g=a.routes[f.route.id];if(!g||!g.hasLoader)return!1;if(u(f,d)||c(f,d))return!0;if(f.route.shouldRevalidate){let b=f.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(e,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function DR(e,t,{includeHydrateFallback:n}={}){return BR(e.map(a=>{let s=t.routes[a.route.id];if(!s)return[];let o=[s.module];return s.clientActionModule&&(o=o.concat(s.clientActionModule)),s.clientLoaderModule&&(o=o.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(o=o.concat(s.hydrateFallbackModule)),s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function BR(e){return[...new Set(e)]}function OR(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}function NR(e,t){let n=new Set;return new Set(t),e.reduce((a,s)=>{let o=JSON.stringify(OR(s));return n.has(o)||(n.add(o),a.push({key:o,link:s})),a},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var PR=new Set([100,101,204,205]);function IR(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&ar(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function $x(){let e=J.useContext(Ws);return Vp(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function FR(){let e=J.useContext(Lh);return Vp(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Xp=J.createContext(void 0);Xp.displayName="FrameworkContext";function zx(){let e=J.useContext(Xp);return Vp(e,"You must render this element inside a <HydratedRouter> element"),e}function $R(e,t){let n=J.useContext(Xp),[a,s]=J.useState(!1),[o,u]=J.useState(!1),{onFocus:c,onBlur:f,onMouseEnter:d,onMouseLeave:g,onTouchStart:m}=t,b=J.useRef(null);J.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let C=T=>{T.forEach(k=>{u(k.isIntersecting)})},w=new IntersectionObserver(C,{threshold:.5});return b.current&&w.observe(b.current),()=>{w.disconnect()}}},[e]),J.useEffect(()=>{if(a){let C=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(C)}}},[a]);let v=()=>{s(!0)},S=()=>{s(!1),u(!1)};return n?e!=="intent"?[o,b,{}]:[o,b,{onFocus:ro(c,v),onBlur:ro(f,S),onMouseEnter:ro(d,v),onMouseLeave:ro(g,S),onTouchStart:ro(m,v)}]:[!1,b,{}]}function ro(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function zR({page:e,...t}){let{router:n}=$x(),a=J.useMemo(()=>Ex(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?J.createElement(UR,{page:e,matches:a,...t}):null}function qR(e){let{manifest:t,routeModules:n}=zx(),[a,s]=J.useState([]);return J.useEffect(()=>{let o=!1;return LR(e,t,n).then(u=>{o||s(u)}),()=>{o=!0}},[e,t,n]),a}function UR({page:e,matches:t,...n}){let a=Da(),{manifest:s,routeModules:o}=zx(),{basename:u}=$x(),{loaderData:c,matches:f}=FR(),d=J.useMemo(()=>jv(e,t,f,s,a,"data"),[e,t,f,s,a]),g=J.useMemo(()=>jv(e,t,f,s,a,"assets"),[e,t,f,s,a]),m=J.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let S=new Set,C=!1;if(t.forEach(T=>{var E;let k=s.routes[T.route.id];!k||!k.hasLoader||(!d.some(O=>O.route.id===T.route.id)&&T.route.id in c&&((E=o[T.route.id])!=null&&E.shouldRevalidate)||k.hasClientLoader?C=!0:S.add(T.route.id))}),S.size===0)return[];let w=IR(e,u);return C&&S.size>0&&w.searchParams.set("_routes",t.filter(T=>S.has(T.route.id)).map(T=>T.route.id).join(",")),[w.pathname+w.search]},[u,c,a,s,d,t,e,o]),b=J.useMemo(()=>DR(g,s),[g,s]),v=qR(g);return J.createElement(J.Fragment,null,m.map(S=>J.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...n})),b.map(S=>J.createElement("link",{key:S,rel:"modulepreload",href:S,...n})),v.map(({key:S,link:C})=>J.createElement("link",{key:S,...C})))}function HR(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var qx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qx&&(window.__reactRouterVersion="7.6.1")}catch{}function GR({basename:e,children:t,window:n}){let a=J.useRef();a.current==null&&(a.current=RE({window:n,v5Compat:!0}));let s=a.current,[o,u]=J.useState({action:s.action,location:s.location}),c=J.useCallback(f=>{J.startTransition(()=>u(f))},[u]);return J.useLayoutEffect(()=>s.listen(c),[s,c]),J.createElement(vR,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:s})}var Ux=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hx=J.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:s,reloadDocument:o,replace:u,state:c,target:f,to:d,preventScrollReset:g,viewTransition:m,...b},v){let{basename:S}=J.useContext(wn),C=typeof d=="string"&&Ux.test(d),w,T=!1;if(typeof d=="string"&&C&&(w=d,qx))try{let it=new URL(window.location.href),nt=d.startsWith("//")?new URL(it.protocol+d):new URL(d),X=ar(nt.pathname,S);nt.origin===it.origin&&X!=null?d=X+nt.search+nt.hash:T=!0}catch{Cn(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=iR(d,{relative:s}),[E,O,D]=$R(a,b),R=WR(d,{replace:u,state:c,target:f,preventScrollReset:g,relative:s,viewTransition:m});function N(it){t&&t(it),it.defaultPrevented||R(it)}let K=J.createElement("a",{...b,...D,href:w||k,onClick:T||o?t:N,ref:HR(v,O),target:f,"data-discover":!C&&n==="render"?"true":void 0});return E&&!C?J.createElement(J.Fragment,null,K,J.createElement(zR,{page:k})):K});Hx.displayName="Link";var ye=J.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:s=!1,style:o,to:u,viewTransition:c,children:f,...d},g){let m=Xo(u,{relative:d.relative}),b=Da(),v=J.useContext(Lh),{navigator:S,basename:C}=J.useContext(wn),w=v!=null&&ZR(m)&&c===!0,T=S.encodeLocation?S.encodeLocation(m).pathname:m.pathname,k=b.pathname,E=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;n||(k=k.toLowerCase(),E=E?E.toLowerCase():null,T=T.toLowerCase()),E&&C&&(E=ar(E,C)||E);const O=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let D=k===T||!s&&k.startsWith(T)&&k.charAt(O)==="/",R=E!=null&&(E===T||!s&&E.startsWith(T)&&E.charAt(T.length)==="/"),N={isActive:D,isPending:R,isTransitioning:w},K=D?t:void 0,it;typeof a=="function"?it=a(N):it=[a,D?"active":null,R?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let nt=typeof o=="function"?o(N):o;return J.createElement(Hx,{...d,"aria-current":K,className:it,ref:g,style:nt,to:u,viewTransition:c},typeof f=="function"?f(N):f)});ye.displayName="NavLink";var jR=J.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:s,state:o,method:u=Mu,action:c,onSubmit:f,relative:d,preventScrollReset:g,viewTransition:m,...b},v)=>{let S=QR(),C=KR(c,{relative:d}),w=u.toLowerCase()==="get"?"get":"post",T=typeof c=="string"&&Ux.test(c),k=E=>{if(f&&f(E),E.defaultPrevented)return;E.preventDefault();let O=E.nativeEvent.submitter,D=(O==null?void 0:O.getAttribute("formmethod"))||u;S(O||E.currentTarget,{fetcherKey:t,method:D,navigate:n,replace:s,state:o,relative:d,preventScrollReset:g,viewTransition:m})};return J.createElement("form",{ref:v,method:w,action:C,onSubmit:a?f:k,...b,"data-discover":!T&&e==="render"?"true":void 0})});jR.displayName="Form";function YR(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gx(e){let t=J.useContext(Ws);return fe(t,YR(e)),t}function WR(e,{target:t,replace:n,state:a,preventScrollReset:s,relative:o,viewTransition:u}={}){let c=nR(),f=Da(),d=Xo(e,{relative:o});return J.useCallback(g=>{if(wR(g,t)){g.preventDefault();let m=n!==void 0?n:Bo(f)===Bo(d);c(e,{replace:m,state:a,preventScrollReset:s,relative:o,viewTransition:u})}},[f,c,d,n,a,t,e,s,o,u])}var VR=0,XR=()=>`__${String(++VR)}__`;function QR(){let{router:e}=Gx("useSubmit"),{basename:t}=J.useContext(wn),n=pR();return J.useCallback(async(a,s={})=>{let{action:o,method:u,encType:c,formData:f,body:d}=ER(a,t);if(s.navigate===!1){let g=s.fetcherKey||XR();await e.fetch(g,n,s.action||o,{preventScrollReset:s.preventScrollReset,formData:f,body:d,formMethod:s.method||u,formEncType:s.encType||c,flushSync:s.flushSync})}else await e.navigate(s.action||o,{preventScrollReset:s.preventScrollReset,formData:f,body:d,formMethod:s.method||u,formEncType:s.encType||c,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[e,t,n])}function KR(e,{relative:t}={}){let{basename:n}=J.useContext(wn),a=J.useContext(kn);fe(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),o={...Xo(e||".",{relative:t})},u=Da();if(e==null){o.search=u.search;let c=new URLSearchParams(o.search),f=c.getAll("index");if(f.some(g=>g==="")){c.delete("index"),f.filter(m=>m).forEach(m=>c.append("index",m));let g=c.toString();o.search=g?`?${g}`:""}}return(!e||e===".")&&s.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:ir([n,o.pathname])),Bo(o)}function ZR(e,t={}){let n=J.useContext(Ox);fe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Gx("useViewTransitionState"),s=Xo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=ar(n.currentLocation.pathname,a)||n.currentLocation.pathname,u=ar(n.nextLocation.pathname,a)||n.nextLocation.pathname;return Vu(s.pathname,u)!=null||Vu(s.pathname,o)!=null}[...PR];const JR={readme:{title:"📖 Business Services Hub - Documentation Portal",content:`<h1 id="business-services-hub-documentation-portal">📖 Business Services Hub - Documentation Portal</h1>
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
<p>This comprehensive setup and deployment guide provides step-by-step instructions for setting up the Business Services Hub in development and production environments, including troubleshooting tips and best practices for maintaining a healthy deployment.</p>`}},tM="/assets/falcon_eye_logo.jpg",eM="modulepreload",iM=function(e){return"/"+e},Yv={},Qt=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){let u=function(d){return Promise.all(d.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),f=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=u(n.map(d=>{if(d=iM(d),d in Yv)return;Yv[d]=!0;const g=d.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const b=document.createElement("link");if(b.rel=g?"stylesheet":eM,g||(b.as="script"),b.crossOrigin="",b.href=d,f&&b.setAttribute("nonce",f),document.head.appendChild(b),g)return new Promise((v,S)=>{b.addEventListener("load",v),b.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(u){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u}return s.then(u=>{for(const c of u||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};var Wv={name:"mermaid",version:"11.11.0",description:"Markdown-ish syntax for generating flowcharts, mindmaps, sequence diagrams, class diagrams, gantt charts, git graphs and more.",type:"module",module:"./dist/mermaid.core.mjs",types:"./dist/mermaid.d.ts",exports:{".":{types:"./dist/mermaid.d.ts",import:"./dist/mermaid.core.mjs",default:"./dist/mermaid.core.mjs"},"./*":"./*"},keywords:["diagram","markdown","flowchart","sequence diagram","gantt","class diagram","git graph","mindmap","packet diagram","c4 diagram","er diagram","pie chart","pie diagram","quadrant chart","requirement diagram","graph"],scripts:{clean:"rimraf dist",dev:"pnpm -w dev","docs:code":"typedoc src/defaultConfig.ts src/config.ts src/mermaid.ts && prettier --write ./src/docs/config/setup","docs:build":"rimraf ../../docs && pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts","docs:verify":"pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts --verify","docs:pre:vitepress":"pnpm --filter ./src/docs prefetch && rimraf src/vitepress && pnpm docs:code && tsx scripts/docs.cli.mts --vitepress && pnpm --filter ./src/vitepress install --no-frozen-lockfile --ignore-scripts","docs:build:vitepress":"pnpm docs:pre:vitepress && (cd src/vitepress && pnpm run build) && cpy --flat src/docs/landing/ ./src/vitepress/.vitepress/dist/landing","docs:dev":'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev" "tsx scripts/docs.cli.mts --watch --vitepress"',"docs:dev:docker":'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev:docker" "tsx scripts/docs.cli.mts --watch --vitepress"',"docs:serve":"pnpm docs:build:vitepress && vitepress serve src/vitepress","docs:spellcheck":'cspell "src/docs/**/*.md"',"docs:release-version":"tsx scripts/update-release-version.mts","docs:verify-version":"tsx scripts/update-release-version.mts --verify","types:build-config":"tsx scripts/create-types-from-json-schema.mts","types:verify-config":"tsx scripts/create-types-from-json-schema.mts --verify",checkCircle:"npx madge --circular ./src",prepublishOnly:"pnpm docs:verify-version"},repository:{type:"git",url:"https://github.com/mermaid-js/mermaid"},author:"Knut Sveidqvist",license:"MIT",standard:{ignore:["**/parser/*.js","dist/**/*.js","cypress/**/*.js"],globals:["page"]},dependencies:{"@braintree/sanitize-url":"^7.0.4","@iconify/utils":"^3.0.1","@mermaid-js/parser":"workspace:^","@types/d3":"^7.4.3",cytoscape:"^3.29.3","cytoscape-cose-bilkent":"^4.1.0","cytoscape-fcose":"^2.2.0",d3:"^7.9.0","d3-sankey":"^0.12.3","dagre-d3-es":"7.0.11",dayjs:"^1.11.13",dompurify:"^3.2.5",katex:"^0.16.22",khroma:"^2.1.0","lodash-es":"^4.17.21",marked:"^15.0.7",roughjs:"^4.6.6",stylis:"^4.3.6","ts-dedent":"^2.2.0",uuid:"^11.1.0"},devDependencies:{"@adobe/jsonschema2md":"^8.0.2","@iconify/types":"^2.0.0","@types/cytoscape":"^3.21.9","@types/cytoscape-fcose":"^2.2.4","@types/d3-sankey":"^0.12.4","@types/d3-scale":"^4.0.9","@types/d3-scale-chromatic":"^3.1.0","@types/d3-selection":"^3.0.11","@types/d3-shape":"^3.1.7","@types/jsdom":"^21.1.7","@types/katex":"^0.16.7","@types/lodash-es":"^4.17.12","@types/micromatch":"^4.0.9","@types/stylis":"^4.2.7","@types/uuid":"^10.0.0",ajv:"^8.17.1",canvas:"^3.1.0",chokidar:"3.6.0",concurrently:"^9.1.2","csstree-validator":"^4.0.1",globby:"^14.0.2",jison:"^0.4.18","js-base64":"^3.7.7",jsdom:"^26.1.0","json-schema-to-typescript":"^15.0.4",micromatch:"^4.0.8","path-browserify":"^1.0.1",prettier:"^3.5.2",remark:"^15.0.1","remark-frontmatter":"^5.0.0","remark-gfm":"^4.0.1",rimraf:"^6.0.1","start-server-and-test":"^2.0.10","type-fest":"^4.35.0",typedoc:"^0.28.9","typedoc-plugin-markdown":"^4.8.0",typescript:"~5.7.3","unist-util-flatmap":"^1.0.0","unist-util-visit":"^5.0.0",vitepress:"^1.0.2","vitepress-plugin-search":"1.0.4-alpha.22"},files:["dist/","README.md"],publishConfig:{access:"public"}},Du={exports:{}},nM=Du.exports,Vv;function rM(){return Vv||(Vv=1,function(e,t){(function(n,a){e.exports=a()})(nM,function(){var n=1e3,a=6e4,s=36e5,o="millisecond",u="second",c="minute",f="hour",d="day",g="week",m="month",b="quarter",v="year",S="date",C="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,T=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,k={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(W){var j=["th","st","nd","rd"],M=W%100;return"["+W+(j[(M-20)%10]||j[M]||j[0])+"]"}},E=function(W,j,M){var F=String(W);return!F||F.length>=j?W:""+Array(j+1-F.length).join(M)+W},O={s:E,z:function(W){var j=-W.utcOffset(),M=Math.abs(j),F=Math.floor(M/60),$=M%60;return(j<=0?"+":"-")+E(F,2,"0")+":"+E($,2,"0")},m:function W(j,M){if(j.date()<M.date())return-W(M,j);var F=12*(M.year()-j.year())+(M.month()-j.month()),$=j.clone().add(F,m),ut=M-$<0,L=j.clone().add(F+(ut?-1:1),m);return+(-(F+(M-$)/(ut?$-L:L-$))||0)},a:function(W){return W<0?Math.ceil(W)||0:Math.floor(W)},p:function(W){return{M:m,y:v,w:g,d,D:S,h:f,m:c,s:u,ms:o,Q:b}[W]||String(W||"").toLowerCase().replace(/s$/,"")},u:function(W){return W===void 0}},D="en",R={};R[D]=k;var N="$isDayjsObject",K=function(W){return W instanceof st||!(!W||!W[N])},it=function W(j,M,F){var $;if(!j)return D;if(typeof j=="string"){var ut=j.toLowerCase();R[ut]&&($=ut),M&&(R[ut]=M,$=ut);var L=j.split("-");if(!$&&L.length>1)return W(L[0])}else{var H=j.name;R[H]=j,$=H}return!F&&$&&(D=$),$||!F&&D},nt=function(W,j){if(K(W))return W.clone();var M=typeof j=="object"?j:{};return M.date=W,M.args=arguments,new st(M)},X=O;X.l=it,X.i=K,X.w=function(W,j){return nt(W,{locale:j.$L,utc:j.$u,x:j.$x,$offset:j.$offset})};var st=function(){function W(M){this.$L=it(M.locale,null,!0),this.parse(M),this.$x=this.$x||M.x||{},this[N]=!0}var j=W.prototype;return j.parse=function(M){this.$d=function(F){var $=F.date,ut=F.utc;if($===null)return new Date(NaN);if(X.u($))return new Date;if($ instanceof Date)return new Date($);if(typeof $=="string"&&!/Z$/i.test($)){var L=$.match(w);if(L){var H=L[2]-1||0,ot=(L[7]||"0").substring(0,3);return ut?new Date(Date.UTC(L[1],H,L[3]||1,L[4]||0,L[5]||0,L[6]||0,ot)):new Date(L[1],H,L[3]||1,L[4]||0,L[5]||0,L[6]||0,ot)}}return new Date($)}(M),this.init()},j.init=function(){var M=this.$d;this.$y=M.getFullYear(),this.$M=M.getMonth(),this.$D=M.getDate(),this.$W=M.getDay(),this.$H=M.getHours(),this.$m=M.getMinutes(),this.$s=M.getSeconds(),this.$ms=M.getMilliseconds()},j.$utils=function(){return X},j.isValid=function(){return this.$d.toString()!==C},j.isSame=function(M,F){var $=nt(M);return this.startOf(F)<=$&&$<=this.endOf(F)},j.isAfter=function(M,F){return nt(M)<this.startOf(F)},j.isBefore=function(M,F){return this.endOf(F)<nt(M)},j.$g=function(M,F,$){return X.u(M)?this[F]:this.set($,M)},j.unix=function(){return Math.floor(this.valueOf()/1e3)},j.valueOf=function(){return this.$d.getTime()},j.startOf=function(M,F){var $=this,ut=!!X.u(F)||F,L=X.p(M),H=function(Ht,Zt){var oe=X.w($.$u?Date.UTC($.$y,Zt,Ht):new Date($.$y,Zt,Ht),$);return ut?oe:oe.endOf(d)},ot=function(Ht,Zt){return X.w($.toDate()[Ht].apply($.toDate("s"),(ut?[0,0,0,0]:[23,59,59,999]).slice(Zt)),$)},tt=this.$W,ft=this.$M,pt=this.$D,ht="set"+(this.$u?"UTC":"");switch(L){case v:return ut?H(1,0):H(31,11);case m:return ut?H(1,ft):H(0,ft+1);case g:var Lt=this.$locale().weekStart||0,Bt=(tt<Lt?tt+7:tt)-Lt;return H(ut?pt-Bt:pt+(6-Bt),ft);case d:case S:return ot(ht+"Hours",0);case f:return ot(ht+"Minutes",1);case c:return ot(ht+"Seconds",2);case u:return ot(ht+"Milliseconds",3);default:return this.clone()}},j.endOf=function(M){return this.startOf(M,!1)},j.$set=function(M,F){var $,ut=X.p(M),L="set"+(this.$u?"UTC":""),H=($={},$[d]=L+"Date",$[S]=L+"Date",$[m]=L+"Month",$[v]=L+"FullYear",$[f]=L+"Hours",$[c]=L+"Minutes",$[u]=L+"Seconds",$[o]=L+"Milliseconds",$)[ut],ot=ut===d?this.$D+(F-this.$W):F;if(ut===m||ut===v){var tt=this.clone().set(S,1);tt.$d[H](ot),tt.init(),this.$d=tt.set(S,Math.min(this.$D,tt.daysInMonth())).$d}else H&&this.$d[H](ot);return this.init(),this},j.set=function(M,F){return this.clone().$set(M,F)},j.get=function(M){return this[X.p(M)]()},j.add=function(M,F){var $,ut=this;M=Number(M);var L=X.p(F),H=function(ft){var pt=nt(ut);return X.w(pt.date(pt.date()+Math.round(ft*M)),ut)};if(L===m)return this.set(m,this.$M+M);if(L===v)return this.set(v,this.$y+M);if(L===d)return H(1);if(L===g)return H(7);var ot=($={},$[c]=a,$[f]=s,$[u]=n,$)[L]||1,tt=this.$d.getTime()+M*ot;return X.w(tt,this)},j.subtract=function(M,F){return this.add(-1*M,F)},j.format=function(M){var F=this,$=this.$locale();if(!this.isValid())return $.invalidDate||C;var ut=M||"YYYY-MM-DDTHH:mm:ssZ",L=X.z(this),H=this.$H,ot=this.$m,tt=this.$M,ft=$.weekdays,pt=$.months,ht=$.meridiem,Lt=function(Zt,oe,Ae,hi){return Zt&&(Zt[oe]||Zt(F,ut))||Ae[oe].slice(0,hi)},Bt=function(Zt){return X.s(H%12||12,Zt,"0")},Ht=ht||function(Zt,oe,Ae){var hi=Zt<12?"AM":"PM";return Ae?hi.toLowerCase():hi};return ut.replace(T,function(Zt,oe){return oe||function(Ae){switch(Ae){case"YY":return String(F.$y).slice(-2);case"YYYY":return X.s(F.$y,4,"0");case"M":return tt+1;case"MM":return X.s(tt+1,2,"0");case"MMM":return Lt($.monthsShort,tt,pt,3);case"MMMM":return Lt(pt,tt);case"D":return F.$D;case"DD":return X.s(F.$D,2,"0");case"d":return String(F.$W);case"dd":return Lt($.weekdaysMin,F.$W,ft,2);case"ddd":return Lt($.weekdaysShort,F.$W,ft,3);case"dddd":return ft[F.$W];case"H":return String(H);case"HH":return X.s(H,2,"0");case"h":return Bt(1);case"hh":return Bt(2);case"a":return Ht(H,ot,!0);case"A":return Ht(H,ot,!1);case"m":return String(ot);case"mm":return X.s(ot,2,"0");case"s":return String(F.$s);case"ss":return X.s(F.$s,2,"0");case"SSS":return X.s(F.$ms,3,"0");case"Z":return L}return null}(Zt)||L.replace(":","")})},j.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},j.diff=function(M,F,$){var ut,L=this,H=X.p(F),ot=nt(M),tt=(ot.utcOffset()-this.utcOffset())*a,ft=this-ot,pt=function(){return X.m(L,ot)};switch(H){case v:ut=pt()/12;break;case m:ut=pt();break;case b:ut=pt()/3;break;case g:ut=(ft-tt)/6048e5;break;case d:ut=(ft-tt)/864e5;break;case f:ut=ft/s;break;case c:ut=ft/a;break;case u:ut=ft/n;break;default:ut=ft}return $?ut:X.a(ut)},j.daysInMonth=function(){return this.endOf(m).$D},j.$locale=function(){return R[this.$L]},j.locale=function(M,F){if(!M)return this.$L;var $=this.clone(),ut=it(M,F,!0);return ut&&($.$L=ut),$},j.clone=function(){return X.w(this.$d,this)},j.toDate=function(){return new Date(this.valueOf())},j.toJSON=function(){return this.isValid()?this.toISOString():null},j.toISOString=function(){return this.$d.toISOString()},j.toString=function(){return this.$d.toUTCString()},W}(),rt=st.prototype;return nt.prototype=rt,[["$ms",o],["$s",u],["$m",c],["$H",f],["$W",d],["$M",m],["$y",v],["$D",S]].forEach(function(W){rt[W[1]]=function(j){return this.$g(j,W[0],W[1])}}),nt.extend=function(W,j){return W.$i||(W(j,st,nt),W.$i=!0),nt},nt.locale=it,nt.isDayjs=K,nt.unix=function(W){return nt(1e3*W)},nt.en=R[D],nt.Ls=R,nt.p={},nt})}(Du)),Du.exports}var aM=rM();const sM=yE(aM);var jx=Object.defineProperty,x=(e,t)=>jx(e,"name",{value:t,configurable:!0}),lM=(e,t)=>{for(var n in t)jx(e,n,{get:t[n],enumerable:!0})},Xn={trace:0,debug:1,info:2,warn:3,error:4,fatal:5},at={trace:x((...e)=>{},"trace"),debug:x((...e)=>{},"debug"),info:x((...e)=>{},"info"),warn:x((...e)=>{},"warn"),error:x((...e)=>{},"error"),fatal:x((...e)=>{},"fatal")},Qp=x(function(e="fatal"){let t=Xn.fatal;typeof e=="string"?e.toLowerCase()in Xn&&(t=Xn[e]):typeof e=="number"&&(t=e),at.trace=()=>{},at.debug=()=>{},at.info=()=>{},at.warn=()=>{},at.error=()=>{},at.fatal=()=>{},t<=Xn.fatal&&(at.fatal=console.error?console.error.bind(console,ji("FATAL"),"color: orange"):console.log.bind(console,"\x1B[35m",ji("FATAL"))),t<=Xn.error&&(at.error=console.error?console.error.bind(console,ji("ERROR"),"color: orange"):console.log.bind(console,"\x1B[31m",ji("ERROR"))),t<=Xn.warn&&(at.warn=console.warn?console.warn.bind(console,ji("WARN"),"color: orange"):console.log.bind(console,"\x1B[33m",ji("WARN"))),t<=Xn.info&&(at.info=console.info?console.info.bind(console,ji("INFO"),"color: lightblue"):console.log.bind(console,"\x1B[34m",ji("INFO"))),t<=Xn.debug&&(at.debug=console.debug?console.debug.bind(console,ji("DEBUG"),"color: lightgreen"):console.log.bind(console,"\x1B[32m",ji("DEBUG"))),t<=Xn.trace&&(at.trace=console.debug?console.debug.bind(console,ji("TRACE"),"color: lightgreen"):console.log.bind(console,"\x1B[32m",ji("TRACE")))},"setLogLevel"),ji=x(e=>`%c${sM().format("ss.SSS")} : ${e} : `,"format");const Bu={min:{r:0,g:0,b:0,s:0,l:0,a:0},max:{r:255,g:255,b:255,h:360,s:100,l:100,a:1},clamp:{r:e=>e>=255?255:e<0?0:e,g:e=>e>=255?255:e<0?0:e,b:e=>e>=255?255:e<0?0:e,h:e=>e%360,s:e=>e>=100?100:e<0?0:e,l:e=>e>=100?100:e<0?0:e,a:e=>e>=1?1:e<0?0:e},toLinear:e=>{const t=e/255;return e>.03928?Math.pow((t+.055)/1.055,2.4):t/12.92},hue2rgb:(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),hsl2rgb:({h:e,s:t,l:n},a)=>{if(!t)return n*2.55;e/=360,t/=100,n/=100;const s=n<.5?n*(1+t):n+t-n*t,o=2*n-s;switch(a){case"r":return Bu.hue2rgb(o,s,e+1/3)*255;case"g":return Bu.hue2rgb(o,s,e)*255;case"b":return Bu.hue2rgb(o,s,e-1/3)*255}},rgb2hsl:({r:e,g:t,b:n},a)=>{e/=255,t/=255,n/=255;const s=Math.max(e,t,n),o=Math.min(e,t,n),u=(s+o)/2;if(a==="l")return u*100;if(s===o)return 0;const c=s-o,f=u>.5?c/(2-s-o):c/(s+o);if(a==="s")return f*100;switch(s){case e:return((t-n)/c+(t<n?6:0))*60;case t:return((n-e)/c+2)*60;case n:return((e-t)/c+4)*60;default:return-1}}},oM={clamp:(e,t,n)=>t>n?Math.min(t,Math.max(n,e)):Math.min(n,Math.max(t,e)),round:e=>Math.round(e*1e10)/1e10},cM={dec2hex:e=>{const t=Math.round(e).toString(16);return t.length>1?t:`0${t}`}},Nt={channel:Bu,lang:oM,unit:cM},Nr={};for(let e=0;e<=255;e++)Nr[e]=Nt.unit.dec2hex(e);const Ze={ALL:0,RGB:1,HSL:2};class uM{constructor(){this.type=Ze.ALL}get(){return this.type}set(t){if(this.type&&this.type!==t)throw new Error("Cannot change both RGB and HSL channels at the same time");this.type=t}reset(){this.type=Ze.ALL}is(t){return this.type===t}}class hM{constructor(t,n){this.color=n,this.changed=!1,this.data=t,this.type=new uM}set(t,n){return this.color=n,this.changed=!1,this.data=t,this.type.type=Ze.ALL,this}_ensureHSL(){const t=this.data,{h:n,s:a,l:s}=t;n===void 0&&(t.h=Nt.channel.rgb2hsl(t,"h")),a===void 0&&(t.s=Nt.channel.rgb2hsl(t,"s")),s===void 0&&(t.l=Nt.channel.rgb2hsl(t,"l"))}_ensureRGB(){const t=this.data,{r:n,g:a,b:s}=t;n===void 0&&(t.r=Nt.channel.hsl2rgb(t,"r")),a===void 0&&(t.g=Nt.channel.hsl2rgb(t,"g")),s===void 0&&(t.b=Nt.channel.hsl2rgb(t,"b"))}get r(){const t=this.data,n=t.r;return!this.type.is(Ze.HSL)&&n!==void 0?n:(this._ensureHSL(),Nt.channel.hsl2rgb(t,"r"))}get g(){const t=this.data,n=t.g;return!this.type.is(Ze.HSL)&&n!==void 0?n:(this._ensureHSL(),Nt.channel.hsl2rgb(t,"g"))}get b(){const t=this.data,n=t.b;return!this.type.is(Ze.HSL)&&n!==void 0?n:(this._ensureHSL(),Nt.channel.hsl2rgb(t,"b"))}get h(){const t=this.data,n=t.h;return!this.type.is(Ze.RGB)&&n!==void 0?n:(this._ensureRGB(),Nt.channel.rgb2hsl(t,"h"))}get s(){const t=this.data,n=t.s;return!this.type.is(Ze.RGB)&&n!==void 0?n:(this._ensureRGB(),Nt.channel.rgb2hsl(t,"s"))}get l(){const t=this.data,n=t.l;return!this.type.is(Ze.RGB)&&n!==void 0?n:(this._ensureRGB(),Nt.channel.rgb2hsl(t,"l"))}get a(){return this.data.a}set r(t){this.type.set(Ze.RGB),this.changed=!0,this.data.r=t}set g(t){this.type.set(Ze.RGB),this.changed=!0,this.data.g=t}set b(t){this.type.set(Ze.RGB),this.changed=!0,this.data.b=t}set h(t){this.type.set(Ze.HSL),this.changed=!0,this.data.h=t}set s(t){this.type.set(Ze.HSL),this.changed=!0,this.data.s=t}set l(t){this.type.set(Ze.HSL),this.changed=!0,this.data.l=t}set a(t){this.changed=!0,this.data.a=t}}const Bh=new hM({r:0,g:0,b:0,a:0},"transparent"),ks={re:/^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,parse:e=>{if(e.charCodeAt(0)!==35)return;const t=e.match(ks.re);if(!t)return;const n=t[1],a=parseInt(n,16),s=n.length,o=s%4===0,u=s>4,c=u?1:17,f=u?8:4,d=o?0:-1,g=u?255:15;return Bh.set({r:(a>>f*(d+3)&g)*c,g:(a>>f*(d+2)&g)*c,b:(a>>f*(d+1)&g)*c,a:o?(a&g)*c/255:1},e)},stringify:e=>{const{r:t,g:n,b:a,a:s}=e;return s<1?`#${Nr[Math.round(t)]}${Nr[Math.round(n)]}${Nr[Math.round(a)]}${Nr[Math.round(s*255)]}`:`#${Nr[Math.round(t)]}${Nr[Math.round(n)]}${Nr[Math.round(a)]}`}},ba={re:/^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,hueRe:/^(.+?)(deg|grad|rad|turn)$/i,_hue2deg:e=>{const t=e.match(ba.hueRe);if(t){const[,n,a]=t;switch(a){case"grad":return Nt.channel.clamp.h(parseFloat(n)*.9);case"rad":return Nt.channel.clamp.h(parseFloat(n)*180/Math.PI);case"turn":return Nt.channel.clamp.h(parseFloat(n)*360)}}return Nt.channel.clamp.h(parseFloat(e))},parse:e=>{const t=e.charCodeAt(0);if(t!==104&&t!==72)return;const n=e.match(ba.re);if(!n)return;const[,a,s,o,u,c]=n;return Bh.set({h:ba._hue2deg(a),s:Nt.channel.clamp.s(parseFloat(s)),l:Nt.channel.clamp.l(parseFloat(o)),a:u?Nt.channel.clamp.a(c?parseFloat(u)/100:parseFloat(u)):1},e)},stringify:e=>{const{h:t,s:n,l:a,a:s}=e;return s<1?`hsla(${Nt.lang.round(t)}, ${Nt.lang.round(n)}%, ${Nt.lang.round(a)}%, ${s})`:`hsl(${Nt.lang.round(t)}, ${Nt.lang.round(n)}%, ${Nt.lang.round(a)}%)`}},Ao={colors:{aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyanaqua:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",transparent:"#00000000",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},parse:e=>{e=e.toLowerCase();const t=Ao.colors[e];if(t)return ks.parse(t)},stringify:e=>{const t=ks.stringify(e);for(const n in Ao.colors)if(Ao.colors[n]===t)return n}},vo={re:/^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,parse:e=>{const t=e.charCodeAt(0);if(t!==114&&t!==82)return;const n=e.match(vo.re);if(!n)return;const[,a,s,o,u,c,f,d,g]=n;return Bh.set({r:Nt.channel.clamp.r(s?parseFloat(a)*2.55:parseFloat(a)),g:Nt.channel.clamp.g(u?parseFloat(o)*2.55:parseFloat(o)),b:Nt.channel.clamp.b(f?parseFloat(c)*2.55:parseFloat(c)),a:d?Nt.channel.clamp.a(g?parseFloat(d)/100:parseFloat(d)):1},e)},stringify:e=>{const{r:t,g:n,b:a,a:s}=e;return s<1?`rgba(${Nt.lang.round(t)}, ${Nt.lang.round(n)}, ${Nt.lang.round(a)}, ${Nt.lang.round(s)})`:`rgb(${Nt.lang.round(t)}, ${Nt.lang.round(n)}, ${Nt.lang.round(a)})`}},_n={format:{keyword:Ao,hex:ks,rgb:vo,rgba:vo,hsl:ba,hsla:ba},parse:e=>{if(typeof e!="string")return e;const t=ks.parse(e)||vo.parse(e)||ba.parse(e)||Ao.parse(e);if(t)return t;throw new Error(`Unsupported color format: "${e}"`)},stringify:e=>!e.changed&&e.color?e.color:e.type.is(Ze.HSL)||e.data.r===void 0?ba.stringify(e):e.a<1||!Number.isInteger(e.r)||!Number.isInteger(e.g)||!Number.isInteger(e.b)?vo.stringify(e):ks.stringify(e)},Yx=(e,t)=>{const n=_n.parse(e);for(const a in t)n[a]=Nt.channel.clamp[a](t[a]);return _n.stringify(n)},Eo=(e,t,n=0,a=1)=>{if(typeof e!="number")return Yx(e,{a:t});const s=Bh.set({r:Nt.channel.clamp.r(e),g:Nt.channel.clamp.g(t),b:Nt.channel.clamp.b(n),a:Nt.channel.clamp.a(a)});return _n.stringify(s)},dM=e=>{const{r:t,g:n,b:a}=_n.parse(e),s=.2126*Nt.channel.toLinear(t)+.7152*Nt.channel.toLinear(n)+.0722*Nt.channel.toLinear(a);return Nt.lang.round(s)},fM=e=>dM(e)>=.5,Qo=e=>!fM(e),Wx=(e,t,n)=>{const a=_n.parse(e),s=a[t],o=Nt.channel.clamp[t](s+n);return s!==o&&(a[t]=o),_n.stringify(a)},bt=(e,t)=>Wx(e,"l",t),kt=(e,t)=>Wx(e,"l",-t),q=(e,t)=>{const n=_n.parse(e),a={};for(const s in t)t[s]&&(a[s]=n[s]+t[s]);return Yx(e,a)},gM=(e,t,n=50)=>{const{r:a,g:s,b:o,a:u}=_n.parse(e),{r:c,g:f,b:d,a:g}=_n.parse(t),m=n/100,b=m*2-1,v=u-g,C=((b*v===-1?b:(b+v)/(1+b*v))+1)/2,w=1-C,T=a*C+c*w,k=s*C+f*w,E=o*C+d*w,O=u*m+g*(1-m);return Eo(T,k,E,O)},dt=(e,t=100)=>{const n=_n.parse(e);return n.r=255-n.r,n.g=255-n.g,n.b=255-n.b,gM(n,e,t)};/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */const{entries:Vx,setPrototypeOf:Xv,isFrozen:pM,getPrototypeOf:mM,getOwnPropertyDescriptor:yM}=Object;let{freeze:ci,seal:Wi,create:Xx}=Object,{apply:Wg,construct:Vg}=typeof Reflect<"u"&&Reflect;ci||(ci=function(t){return t});Wi||(Wi=function(t){return t});Wg||(Wg=function(t,n,a){return t.apply(n,a)});Vg||(Vg=function(t,n){return new t(...n)});const vu=ui(Array.prototype.forEach),bM=ui(Array.prototype.lastIndexOf),Qv=ui(Array.prototype.pop),ao=ui(Array.prototype.push),vM=ui(Array.prototype.splice),Ou=ui(String.prototype.toLowerCase),_g=ui(String.prototype.toString),Kv=ui(String.prototype.match),so=ui(String.prototype.replace),SM=ui(String.prototype.indexOf),xM=ui(String.prototype.trim),nn=ui(Object.prototype.hasOwnProperty),ai=ui(RegExp.prototype.test),lo=CM(TypeError);function ui(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,a=new Array(n>1?n-1:0),s=1;s<n;s++)a[s-1]=arguments[s];return Wg(e,t,a)}}function CM(e){return function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return Vg(e,n)}}function qt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ou;Xv&&Xv(e,null);let a=t.length;for(;a--;){let s=t[a];if(typeof s=="string"){const o=n(s);o!==s&&(pM(t)||(t[a]=o),s=o)}e[s]=!0}return e}function _M(e){for(let t=0;t<e.length;t++)nn(e,t)||(e[t]=null);return e}function Kn(e){const t=Xx(null);for(const[n,a]of Vx(e))nn(e,n)&&(Array.isArray(a)?t[n]=_M(a):a&&typeof a=="object"&&a.constructor===Object?t[n]=Kn(a):t[n]=a);return t}function oo(e,t){for(;e!==null;){const a=yM(e,t);if(a){if(a.get)return ui(a.get);if(typeof a.value=="function")return ui(a.value)}e=mM(e)}function n(){return null}return n}const Zv=ci(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Tg=ci(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),wg=ci(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),TM=ci(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),kg=ci(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),wM=ci(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Jv=ci(["#text"]),tS=ci(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ag=ci(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),eS=ci(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Su=ci(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),kM=Wi(/\{\{[\w\W]*|[\w\W]*\}\}/gm),AM=Wi(/<%[\w\W]*|[\w\W]*%>/gm),EM=Wi(/\$\{[\w\W]*/gm),RM=Wi(/^data-[\-\w.\u00B7-\uFFFF]+$/),MM=Wi(/^aria-[\-\w]+$/),Qx=Wi(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),LM=Wi(/^(?:\w+script|data):/i),DM=Wi(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Kx=Wi(/^html$/i),BM=Wi(/^[a-z][.\w]*(-[.\w]+)+$/i);var iS=Object.freeze({__proto__:null,ARIA_ATTR:MM,ATTR_WHITESPACE:DM,CUSTOM_ELEMENT:BM,DATA_ATTR:RM,DOCTYPE_NAME:Kx,ERB_EXPR:AM,IS_ALLOWED_URI:Qx,IS_SCRIPT_OR_DATA:LM,MUSTACHE_EXPR:kM,TMPLIT_EXPR:EM});const co={element:1,text:3,progressingInstruction:7,comment:8,document:9},OM=function(){return typeof window>"u"?null:window},NM=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let a=null;const s="data-tt-policy-suffix";n&&n.hasAttribute(s)&&(a=n.getAttribute(s));const o="dompurify"+(a?"#"+a:"");try{return t.createPolicy(o,{createHTML(u){return u},createScriptURL(u){return u}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},nS=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Zx(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:OM();const t=_t=>Zx(_t);if(t.version="3.2.6",t.removed=[],!e||!e.document||e.document.nodeType!==co.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const a=n,s=a.currentScript,{DocumentFragment:o,HTMLTemplateElement:u,Node:c,Element:f,NodeFilter:d,NamedNodeMap:g=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:m,DOMParser:b,trustedTypes:v}=e,S=f.prototype,C=oo(S,"cloneNode"),w=oo(S,"remove"),T=oo(S,"nextSibling"),k=oo(S,"childNodes"),E=oo(S,"parentNode");if(typeof u=="function"){const _t=n.createElement("template");_t.content&&_t.content.ownerDocument&&(n=_t.content.ownerDocument)}let O,D="";const{implementation:R,createNodeIterator:N,createDocumentFragment:K,getElementsByTagName:it}=n,{importNode:nt}=a;let X=nS();t.isSupported=typeof Vx=="function"&&typeof E=="function"&&R&&R.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:st,ERB_EXPR:rt,TMPLIT_EXPR:W,DATA_ATTR:j,ARIA_ATTR:M,IS_SCRIPT_OR_DATA:F,ATTR_WHITESPACE:$,CUSTOM_ELEMENT:ut}=iS;let{IS_ALLOWED_URI:L}=iS,H=null;const ot=qt({},[...Zv,...Tg,...wg,...kg,...Jv]);let tt=null;const ft=qt({},[...tS,...Ag,...eS,...Su]);let pt=Object.seal(Xx(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ht=null,Lt=null,Bt=!0,Ht=!0,Zt=!1,oe=!0,Ae=!1,hi=!0,ni=!1,tl=!1,el=!1,$e=!1,Fa=!1,Wr=!1,il=!0,Vr=!1;const sd="user-content-";let $a=!0,Xr=!1,cr={},Ni=null;const Ye=qt({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Qi=null;const We=qt({},["audio","video","img","source","image","track"]);let nl=null;const sc=qt({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),za="http://www.w3.org/1998/Math/MathML",Rn="http://www.w3.org/2000/svg",di="http://www.w3.org/1999/xhtml";let fi=di,ur=!1,Mn=null;const ld=qt({},[za,Rn,di],_g);let Qr=qt({},["mi","mo","mn","ms","mtext"]),Kr=qt({},["annotation-xml"]);const rl=qt({},["title","style","font","a","script"]);let Ki=null;const od=["application/xhtml+xml","text/html"],lc="text/html";let be=null,cn=null;const al=n.createElement("form"),sl=function(I){return I instanceof RegExp||I instanceof Function},ll=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(cn&&cn===I)){if((!I||typeof I!="object")&&(I={}),I=Kn(I),Ki=od.indexOf(I.PARSER_MEDIA_TYPE)===-1?lc:I.PARSER_MEDIA_TYPE,be=Ki==="application/xhtml+xml"?_g:Ou,H=nn(I,"ALLOWED_TAGS")?qt({},I.ALLOWED_TAGS,be):ot,tt=nn(I,"ALLOWED_ATTR")?qt({},I.ALLOWED_ATTR,be):ft,Mn=nn(I,"ALLOWED_NAMESPACES")?qt({},I.ALLOWED_NAMESPACES,_g):ld,nl=nn(I,"ADD_URI_SAFE_ATTR")?qt(Kn(sc),I.ADD_URI_SAFE_ATTR,be):sc,Qi=nn(I,"ADD_DATA_URI_TAGS")?qt(Kn(We),I.ADD_DATA_URI_TAGS,be):We,Ni=nn(I,"FORBID_CONTENTS")?qt({},I.FORBID_CONTENTS,be):Ye,ht=nn(I,"FORBID_TAGS")?qt({},I.FORBID_TAGS,be):Kn({}),Lt=nn(I,"FORBID_ATTR")?qt({},I.FORBID_ATTR,be):Kn({}),cr=nn(I,"USE_PROFILES")?I.USE_PROFILES:!1,Bt=I.ALLOW_ARIA_ATTR!==!1,Ht=I.ALLOW_DATA_ATTR!==!1,Zt=I.ALLOW_UNKNOWN_PROTOCOLS||!1,oe=I.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ae=I.SAFE_FOR_TEMPLATES||!1,hi=I.SAFE_FOR_XML!==!1,ni=I.WHOLE_DOCUMENT||!1,$e=I.RETURN_DOM||!1,Fa=I.RETURN_DOM_FRAGMENT||!1,Wr=I.RETURN_TRUSTED_TYPE||!1,el=I.FORCE_BODY||!1,il=I.SANITIZE_DOM!==!1,Vr=I.SANITIZE_NAMED_PROPS||!1,$a=I.KEEP_CONTENT!==!1,Xr=I.IN_PLACE||!1,L=I.ALLOWED_URI_REGEXP||Qx,fi=I.NAMESPACE||di,Qr=I.MATHML_TEXT_INTEGRATION_POINTS||Qr,Kr=I.HTML_INTEGRATION_POINTS||Kr,pt=I.CUSTOM_ELEMENT_HANDLING||{},I.CUSTOM_ELEMENT_HANDLING&&sl(I.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(pt.tagNameCheck=I.CUSTOM_ELEMENT_HANDLING.tagNameCheck),I.CUSTOM_ELEMENT_HANDLING&&sl(I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(pt.attributeNameCheck=I.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),I.CUSTOM_ELEMENT_HANDLING&&typeof I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(pt.allowCustomizedBuiltInElements=I.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ae&&(Ht=!1),Fa&&($e=!0),cr&&(H=qt({},Jv),tt=[],cr.html===!0&&(qt(H,Zv),qt(tt,tS)),cr.svg===!0&&(qt(H,Tg),qt(tt,Ag),qt(tt,Su)),cr.svgFilters===!0&&(qt(H,wg),qt(tt,Ag),qt(tt,Su)),cr.mathMl===!0&&(qt(H,kg),qt(tt,eS),qt(tt,Su))),I.ADD_TAGS&&(H===ot&&(H=Kn(H)),qt(H,I.ADD_TAGS,be)),I.ADD_ATTR&&(tt===ft&&(tt=Kn(tt)),qt(tt,I.ADD_ATTR,be)),I.ADD_URI_SAFE_ATTR&&qt(nl,I.ADD_URI_SAFE_ATTR,be),I.FORBID_CONTENTS&&(Ni===Ye&&(Ni=Kn(Ni)),qt(Ni,I.FORBID_CONTENTS,be)),$a&&(H["#text"]=!0),ni&&qt(H,["html","head","body"]),H.table&&(qt(H,["tbody"]),delete ht.tbody),I.TRUSTED_TYPES_POLICY){if(typeof I.TRUSTED_TYPES_POLICY.createHTML!="function")throw lo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof I.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw lo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');O=I.TRUSTED_TYPES_POLICY,D=O.createHTML("")}else O===void 0&&(O=NM(v,s)),O!==null&&typeof D=="string"&&(D=O.createHTML(""));ci&&ci(I),cn=I}},Zi=qt({},[...Tg,...wg,...TM]),Ee=qt({},[...kg,...wM]),Ve=function(I){let ct=E(I);(!ct||!ct.tagName)&&(ct={namespaceURI:fi,tagName:"template"});const mt=Ou(I.tagName),se=Ou(ct.tagName);return Mn[I.namespaceURI]?I.namespaceURI===Rn?ct.namespaceURI===di?mt==="svg":ct.namespaceURI===za?mt==="svg"&&(se==="annotation-xml"||Qr[se]):!!Zi[mt]:I.namespaceURI===za?ct.namespaceURI===di?mt==="math":ct.namespaceURI===Rn?mt==="math"&&Kr[se]:!!Ee[mt]:I.namespaceURI===di?ct.namespaceURI===Rn&&!Kr[se]||ct.namespaceURI===za&&!Qr[se]?!1:!Ee[mt]&&(rl[mt]||!Zi[mt]):!!(Ki==="application/xhtml+xml"&&Mn[I.namespaceURI]):!1},ze=function(I){ao(t.removed,{element:I});try{E(I).removeChild(I)}catch{w(I)}},un=function(I,ct){try{ao(t.removed,{attribute:ct.getAttributeNode(I),from:ct})}catch{ao(t.removed,{attribute:null,from:ct})}if(ct.removeAttribute(I),I==="is")if($e||Fa)try{ze(ct)}catch{}else try{ct.setAttribute(I,"")}catch{}},oc=function(I){let ct=null,mt=null;if(el)I="<remove></remove>"+I;else{const ge=Kv(I,/^[\r\n\t ]+/);mt=ge&&ge[0]}Ki==="application/xhtml+xml"&&fi===di&&(I='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+I+"</body></html>");const se=O?O.createHTML(I):I;if(fi===di)try{ct=new b().parseFromString(se,Ki)}catch{}if(!ct||!ct.documentElement){ct=R.createDocument(fi,"template",null);try{ct.documentElement.innerHTML=ur?D:se}catch{}}const Re=ct.body||ct.documentElement;return I&&mt&&Re.insertBefore(n.createTextNode(mt),Re.childNodes[0]||null),fi===di?it.call(ct,ni?"html":"body")[0]:ni?ct.documentElement:Re},cc=function(I){return N.call(I.ownerDocument||I,I,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},qa=function(I){return I instanceof m&&(typeof I.nodeName!="string"||typeof I.textContent!="string"||typeof I.removeChild!="function"||!(I.attributes instanceof g)||typeof I.removeAttribute!="function"||typeof I.setAttribute!="function"||typeof I.namespaceURI!="string"||typeof I.insertBefore!="function"||typeof I.hasChildNodes!="function")},hr=function(I){return typeof c=="function"&&I instanceof c};function _i(_t,I,ct){vu(_t,mt=>{mt.call(t,I,ct,cn)})}const Ln=function(I){let ct=null;if(_i(X.beforeSanitizeElements,I,null),qa(I))return ze(I),!0;const mt=be(I.nodeName);if(_i(X.uponSanitizeElement,I,{tagName:mt,allowedTags:H}),hi&&I.hasChildNodes()&&!hr(I.firstElementChild)&&ai(/<[/\w!]/g,I.innerHTML)&&ai(/<[/\w!]/g,I.textContent)||I.nodeType===co.progressingInstruction||hi&&I.nodeType===co.comment&&ai(/<[/\w]/g,I.data))return ze(I),!0;if(!H[mt]||ht[mt]){if(!ht[mt]&&dr(mt)&&(pt.tagNameCheck instanceof RegExp&&ai(pt.tagNameCheck,mt)||pt.tagNameCheck instanceof Function&&pt.tagNameCheck(mt)))return!1;if($a&&!Ni[mt]){const se=E(I)||I.parentNode,Re=k(I)||I.childNodes;if(Re&&se){const ge=Re.length;for(let Xe=ge-1;Xe>=0;--Xe){const gi=C(Re[Xe],!0);gi.__removalCount=(I.__removalCount||0)+1,se.insertBefore(gi,T(I))}}}return ze(I),!0}return I instanceof f&&!Ve(I)||(mt==="noscript"||mt==="noembed"||mt==="noframes")&&ai(/<\/no(script|embed|frames)/i,I.innerHTML)?(ze(I),!0):(Ae&&I.nodeType===co.text&&(ct=I.textContent,vu([st,rt,W],se=>{ct=so(ct,se," ")}),I.textContent!==ct&&(ao(t.removed,{element:I.cloneNode()}),I.textContent=ct)),_i(X.afterSanitizeElements,I,null),!1)},Dn=function(I,ct,mt){if(il&&(ct==="id"||ct==="name")&&(mt in n||mt in al))return!1;if(!(Ht&&!Lt[ct]&&ai(j,ct))){if(!(Bt&&ai(M,ct))){if(!tt[ct]||Lt[ct]){if(!(dr(I)&&(pt.tagNameCheck instanceof RegExp&&ai(pt.tagNameCheck,I)||pt.tagNameCheck instanceof Function&&pt.tagNameCheck(I))&&(pt.attributeNameCheck instanceof RegExp&&ai(pt.attributeNameCheck,ct)||pt.attributeNameCheck instanceof Function&&pt.attributeNameCheck(ct))||ct==="is"&&pt.allowCustomizedBuiltInElements&&(pt.tagNameCheck instanceof RegExp&&ai(pt.tagNameCheck,mt)||pt.tagNameCheck instanceof Function&&pt.tagNameCheck(mt))))return!1}else if(!nl[ct]){if(!ai(L,so(mt,$,""))){if(!((ct==="src"||ct==="xlink:href"||ct==="href")&&I!=="script"&&SM(mt,"data:")===0&&Qi[I])){if(!(Zt&&!ai(F,so(mt,$,"")))){if(mt)return!1}}}}}}return!0},dr=function(I){return I!=="annotation-xml"&&Kv(I,ut)},Bn=function(I){_i(X.beforeSanitizeAttributes,I,null);const{attributes:ct}=I;if(!ct||qa(I))return;const mt={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:tt,forceKeepAttr:void 0};let se=ct.length;for(;se--;){const Re=ct[se],{name:ge,namespaceURI:Xe,value:gi}=Re,hn=be(ge),Ti=gi;let _e=ge==="value"?Ti:xM(Ti);if(mt.attrName=hn,mt.attrValue=_e,mt.keepAttr=!0,mt.forceKeepAttr=void 0,_i(X.uponSanitizeAttribute,I,mt),_e=mt.attrValue,Vr&&(hn==="id"||hn==="name")&&(un(ge,I),_e=sd+_e),hi&&ai(/((--!?|])>)|<\/(style|title)/i,_e)){un(ge,I);continue}if(mt.forceKeepAttr)continue;if(!mt.keepAttr){un(ge,I);continue}if(!oe&&ai(/\/>/i,_e)){un(ge,I);continue}Ae&&vu([st,rt,W],On=>{_e=so(_e,On," ")});const ol=be(I.nodeName);if(!Dn(ol,hn,_e)){un(ge,I);continue}if(O&&typeof v=="object"&&typeof v.getAttributeType=="function"&&!Xe)switch(v.getAttributeType(ol,hn)){case"TrustedHTML":{_e=O.createHTML(_e);break}case"TrustedScriptURL":{_e=O.createScriptURL(_e);break}}if(_e!==Ti)try{Xe?I.setAttributeNS(Xe,ge,_e):I.setAttribute(ge,_e),qa(I)?ze(I):Qv(t.removed)}catch{un(ge,I)}}_i(X.afterSanitizeAttributes,I,null)},Ce=function _t(I){let ct=null;const mt=cc(I);for(_i(X.beforeSanitizeShadowDOM,I,null);ct=mt.nextNode();)_i(X.uponSanitizeShadowNode,ct,null),Ln(ct),Bn(ct),ct.content instanceof o&&_t(ct.content);_i(X.afterSanitizeShadowDOM,I,null)};return t.sanitize=function(_t){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ct=null,mt=null,se=null,Re=null;if(ur=!_t,ur&&(_t="<!-->"),typeof _t!="string"&&!hr(_t))if(typeof _t.toString=="function"){if(_t=_t.toString(),typeof _t!="string")throw lo("dirty is not a string, aborting")}else throw lo("toString is not a function");if(!t.isSupported)return _t;if(tl||ll(I),t.removed=[],typeof _t=="string"&&(Xr=!1),Xr){if(_t.nodeName){const gi=be(_t.nodeName);if(!H[gi]||ht[gi])throw lo("root node is forbidden and cannot be sanitized in-place")}}else if(_t instanceof c)ct=oc("<!---->"),mt=ct.ownerDocument.importNode(_t,!0),mt.nodeType===co.element&&mt.nodeName==="BODY"||mt.nodeName==="HTML"?ct=mt:ct.appendChild(mt);else{if(!$e&&!Ae&&!ni&&_t.indexOf("<")===-1)return O&&Wr?O.createHTML(_t):_t;if(ct=oc(_t),!ct)return $e?null:Wr?D:""}ct&&el&&ze(ct.firstChild);const ge=cc(Xr?_t:ct);for(;se=ge.nextNode();)Ln(se),Bn(se),se.content instanceof o&&Ce(se.content);if(Xr)return _t;if($e){if(Fa)for(Re=K.call(ct.ownerDocument);ct.firstChild;)Re.appendChild(ct.firstChild);else Re=ct;return(tt.shadowroot||tt.shadowrootmode)&&(Re=nt.call(a,Re,!0)),Re}let Xe=ni?ct.outerHTML:ct.innerHTML;return ni&&H["!doctype"]&&ct.ownerDocument&&ct.ownerDocument.doctype&&ct.ownerDocument.doctype.name&&ai(Kx,ct.ownerDocument.doctype.name)&&(Xe="<!DOCTYPE "+ct.ownerDocument.doctype.name+`>
`+Xe),Ae&&vu([st,rt,W],gi=>{Xe=so(Xe,gi," ")}),O&&Wr?O.createHTML(Xe):Xe},t.setConfig=function(){let _t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ll(_t),tl=!0},t.clearConfig=function(){cn=null,tl=!1},t.isValidAttribute=function(_t,I,ct){cn||ll({});const mt=be(_t),se=be(I);return Dn(mt,se,ct)},t.addHook=function(_t,I){typeof I=="function"&&ao(X[_t],I)},t.removeHook=function(_t,I){if(I!==void 0){const ct=bM(X[_t],I);return ct===-1?void 0:vM(X[_t],ct,1)[0]}return Qv(X[_t])},t.removeHooks=function(_t){X[_t]=[]},t.removeAllHooks=function(){X=nS()},t}var Is=Zx(),Jx=/^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s,Ro=/%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi,PM=/\s*%%.*\n/gm,Rs,t2=(Rs=class extends Error{constructor(t){super(t),this.name="UnknownDiagramError"}},x(Rs,"UnknownDiagramError"),Rs),wa={},Kp=x(function(e,t){e=e.replace(Jx,"").replace(Ro,"").replace(PM,`
`);for(const[n,{detector:a}]of Object.entries(wa))if(a(e,t))return n;throw new t2(`No diagram type detected matching given configuration for text: ${e}`)},"detectType"),Xg=x((...e)=>{for(const{id:t,detector:n,loader:a}of e)e2(t,n,a)},"registerLazyLoadedDiagrams"),e2=x((e,t,n)=>{wa[e]&&at.warn(`Detector with key ${e} already exists. Overwriting.`),wa[e]={detector:t,loader:n},at.debug(`Detector with key ${e} added${n?" with loader":""}`)},"addDetector"),IM=x(e=>wa[e].loader,"getDiagramLoader"),Qg=x((e,t,{depth:n=2,clobber:a=!1}={})=>{const s={depth:n,clobber:a};return Array.isArray(t)&&!Array.isArray(e)?(t.forEach(o=>Qg(e,o,s)),e):Array.isArray(t)&&Array.isArray(e)?(t.forEach(o=>{e.includes(o)||e.push(o)}),e):e===void 0||n<=0?e!=null&&typeof e=="object"&&typeof t=="object"?Object.assign(e,t):t:(t!==void 0&&typeof e=="object"&&typeof t=="object"&&Object.keys(t).forEach(o=>{typeof t[o]=="object"&&(e[o]===void 0||typeof e[o]=="object")?(e[o]===void 0&&(e[o]=Array.isArray(t[o])?[]:{}),e[o]=Qg(e[o],t[o],{depth:n-1,clobber:a})):(a||typeof e[o]!="object"&&typeof t[o]!="object")&&(e[o]=t[o])}),e)},"assignWithDepth"),Be=Qg,Oh="#ffffff",Nh="#f2f2f2",si=x((e,t)=>t?q(e,{s:-40,l:10}):q(e,{s:-40,l:-10}),"mkBorder"),Ms,FM=(Ms=class{constructor(){this.background="#f4f4f4",this.primaryColor="#fff4dd",this.noteBkgColor="#fff5ad",this.noteTextColor="#333",this.THEME_COLOR_LIMIT=12,this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px"}updateColors(){var n,a,s,o,u,c,f,d,g,m,b,v,S,C,w,T,k,E,O,D,R;if(this.primaryTextColor=this.primaryTextColor||(this.darkMode?"#eee":"#333"),this.secondaryColor=this.secondaryColor||q(this.primaryColor,{h:-120}),this.tertiaryColor=this.tertiaryColor||q(this.primaryColor,{h:180,l:5}),this.primaryBorderColor=this.primaryBorderColor||si(this.primaryColor,this.darkMode),this.secondaryBorderColor=this.secondaryBorderColor||si(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=this.tertiaryBorderColor||si(this.tertiaryColor,this.darkMode),this.noteBorderColor=this.noteBorderColor||si(this.noteBkgColor,this.darkMode),this.noteBkgColor=this.noteBkgColor||"#fff5ad",this.noteTextColor=this.noteTextColor||"#333",this.secondaryTextColor=this.secondaryTextColor||dt(this.secondaryColor),this.tertiaryTextColor=this.tertiaryTextColor||dt(this.tertiaryColor),this.lineColor=this.lineColor||dt(this.background),this.arrowheadColor=this.arrowheadColor||dt(this.background),this.textColor=this.textColor||this.primaryTextColor,this.border2=this.border2||this.tertiaryBorderColor,this.nodeBkg=this.nodeBkg||this.primaryColor,this.mainBkg=this.mainBkg||this.primaryColor,this.nodeBorder=this.nodeBorder||this.primaryBorderColor,this.clusterBkg=this.clusterBkg||this.tertiaryColor,this.clusterBorder=this.clusterBorder||this.tertiaryBorderColor,this.defaultLinkColor=this.defaultLinkColor||this.lineColor,this.titleColor=this.titleColor||this.tertiaryTextColor,this.edgeLabelBackground=this.edgeLabelBackground||(this.darkMode?kt(this.secondaryColor,30):this.secondaryColor),this.nodeTextColor=this.nodeTextColor||this.primaryTextColor,this.actorBorder=this.actorBorder||this.primaryBorderColor,this.actorBkg=this.actorBkg||this.mainBkg,this.actorTextColor=this.actorTextColor||this.primaryTextColor,this.actorLineColor=this.actorLineColor||this.actorBorder,this.labelBoxBkgColor=this.labelBoxBkgColor||this.actorBkg,this.signalColor=this.signalColor||this.textColor,this.signalTextColor=this.signalTextColor||this.textColor,this.labelBoxBorderColor=this.labelBoxBorderColor||this.actorBorder,this.labelTextColor=this.labelTextColor||this.actorTextColor,this.loopTextColor=this.loopTextColor||this.actorTextColor,this.activationBorderColor=this.activationBorderColor||kt(this.secondaryColor,10),this.activationBkgColor=this.activationBkgColor||this.secondaryColor,this.sequenceNumberColor=this.sequenceNumberColor||dt(this.lineColor),this.sectionBkgColor=this.sectionBkgColor||this.tertiaryColor,this.altSectionBkgColor=this.altSectionBkgColor||"white",this.sectionBkgColor=this.sectionBkgColor||this.secondaryColor,this.sectionBkgColor2=this.sectionBkgColor2||this.primaryColor,this.excludeBkgColor=this.excludeBkgColor||"#eeeeee",this.taskBorderColor=this.taskBorderColor||this.primaryBorderColor,this.taskBkgColor=this.taskBkgColor||this.primaryColor,this.activeTaskBorderColor=this.activeTaskBorderColor||this.primaryColor,this.activeTaskBkgColor=this.activeTaskBkgColor||bt(this.primaryColor,23),this.gridColor=this.gridColor||"lightgrey",this.doneTaskBkgColor=this.doneTaskBkgColor||"lightgrey",this.doneTaskBorderColor=this.doneTaskBorderColor||"grey",this.critBorderColor=this.critBorderColor||"#ff8888",this.critBkgColor=this.critBkgColor||"red",this.todayLineColor=this.todayLineColor||"red",this.vertLineColor=this.vertLineColor||"navy",this.taskTextColor=this.taskTextColor||this.textColor,this.taskTextOutsideColor=this.taskTextOutsideColor||this.textColor,this.taskTextLightColor=this.taskTextLightColor||this.textColor,this.taskTextColor=this.taskTextColor||this.primaryTextColor,this.taskTextDarkColor=this.taskTextDarkColor||this.textColor,this.taskTextClickableColor=this.taskTextClickableColor||"#003163",this.personBorder=this.personBorder||this.primaryBorderColor,this.personBkg=this.personBkg||this.mainBkg,this.darkMode?(this.rowOdd=this.rowOdd||kt(this.mainBkg,5)||"#ffffff",this.rowEven=this.rowEven||kt(this.mainBkg,10)):(this.rowOdd=this.rowOdd||bt(this.mainBkg,75)||"#ffffff",this.rowEven=this.rowEven||bt(this.mainBkg,5)),this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||this.tertiaryColor,this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.nodeBorder,this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.specialStateColor=this.lineColor,this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||q(this.primaryColor,{h:30}),this.cScale4=this.cScale4||q(this.primaryColor,{h:60}),this.cScale5=this.cScale5||q(this.primaryColor,{h:90}),this.cScale6=this.cScale6||q(this.primaryColor,{h:120}),this.cScale7=this.cScale7||q(this.primaryColor,{h:150}),this.cScale8=this.cScale8||q(this.primaryColor,{h:210,l:150}),this.cScale9=this.cScale9||q(this.primaryColor,{h:270}),this.cScale10=this.cScale10||q(this.primaryColor,{h:300}),this.cScale11=this.cScale11||q(this.primaryColor,{h:330}),this.darkMode)for(let N=0;N<this.THEME_COLOR_LIMIT;N++)this["cScale"+N]=kt(this["cScale"+N],75);else for(let N=0;N<this.THEME_COLOR_LIMIT;N++)this["cScale"+N]=kt(this["cScale"+N],25);for(let N=0;N<this.THEME_COLOR_LIMIT;N++)this["cScaleInv"+N]=this["cScaleInv"+N]||dt(this["cScale"+N]);for(let N=0;N<this.THEME_COLOR_LIMIT;N++)this.darkMode?this["cScalePeer"+N]=this["cScalePeer"+N]||bt(this["cScale"+N],10):this["cScalePeer"+N]=this["cScalePeer"+N]||kt(this["cScale"+N],10);this.scaleLabelColor=this.scaleLabelColor||this.labelTextColor;for(let N=0;N<this.THEME_COLOR_LIMIT;N++)this["cScaleLabel"+N]=this["cScaleLabel"+N]||this.scaleLabelColor;const t=this.darkMode?-4:-1;for(let N=0;N<5;N++)this["surface"+N]=this["surface"+N]||q(this.mainBkg,{h:180,s:-15,l:t*(5+N*3)}),this["surfacePeer"+N]=this["surfacePeer"+N]||q(this.mainBkg,{h:180,s:-15,l:t*(8+N*3)});this.classText=this.classText||this.textColor,this.fillType0=this.fillType0||this.primaryColor,this.fillType1=this.fillType1||this.secondaryColor,this.fillType2=this.fillType2||q(this.primaryColor,{h:64}),this.fillType3=this.fillType3||q(this.secondaryColor,{h:64}),this.fillType4=this.fillType4||q(this.primaryColor,{h:-64}),this.fillType5=this.fillType5||q(this.secondaryColor,{h:-64}),this.fillType6=this.fillType6||q(this.primaryColor,{h:128}),this.fillType7=this.fillType7||q(this.secondaryColor,{h:128}),this.pie1=this.pie1||this.primaryColor,this.pie2=this.pie2||this.secondaryColor,this.pie3=this.pie3||this.tertiaryColor,this.pie4=this.pie4||q(this.primaryColor,{l:-10}),this.pie5=this.pie5||q(this.secondaryColor,{l:-10}),this.pie6=this.pie6||q(this.tertiaryColor,{l:-10}),this.pie7=this.pie7||q(this.primaryColor,{h:60,l:-10}),this.pie8=this.pie8||q(this.primaryColor,{h:-60,l:-10}),this.pie9=this.pie9||q(this.primaryColor,{h:120,l:0}),this.pie10=this.pie10||q(this.primaryColor,{h:60,l:-20}),this.pie11=this.pie11||q(this.primaryColor,{h:-60,l:-20}),this.pie12=this.pie12||q(this.primaryColor,{h:120,l:-10}),this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.radar={axisColor:((n=this.radar)==null?void 0:n.axisColor)||this.lineColor,axisStrokeWidth:((a=this.radar)==null?void 0:a.axisStrokeWidth)||2,axisLabelFontSize:((s=this.radar)==null?void 0:s.axisLabelFontSize)||12,curveOpacity:((o=this.radar)==null?void 0:o.curveOpacity)||.5,curveStrokeWidth:((u=this.radar)==null?void 0:u.curveStrokeWidth)||2,graticuleColor:((c=this.radar)==null?void 0:c.graticuleColor)||"#DEDEDE",graticuleStrokeWidth:((f=this.radar)==null?void 0:f.graticuleStrokeWidth)||1,graticuleOpacity:((d=this.radar)==null?void 0:d.graticuleOpacity)||.3,legendBoxSize:((g=this.radar)==null?void 0:g.legendBoxSize)||12,legendFontSize:((m=this.radar)==null?void 0:m.legendFontSize)||12},this.archEdgeColor=this.archEdgeColor||"#777",this.archEdgeArrowColor=this.archEdgeArrowColor||"#777",this.archEdgeWidth=this.archEdgeWidth||"3",this.archGroupBorderColor=this.archGroupBorderColor||"#000",this.archGroupBorderWidth=this.archGroupBorderWidth||"2px",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||q(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||q(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||q(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||q(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||q(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||q(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Qo(this.quadrant1Fill)?bt(this.quadrant1Fill):kt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((b=this.xyChart)==null?void 0:b.backgroundColor)||this.background,titleColor:((v=this.xyChart)==null?void 0:v.titleColor)||this.primaryTextColor,xAxisTitleColor:((S=this.xyChart)==null?void 0:S.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((C=this.xyChart)==null?void 0:C.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((w=this.xyChart)==null?void 0:w.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((T=this.xyChart)==null?void 0:T.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((k=this.xyChart)==null?void 0:k.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((E=this.xyChart)==null?void 0:E.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((O=this.xyChart)==null?void 0:O.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((D=this.xyChart)==null?void 0:D.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((R=this.xyChart)==null?void 0:R.plotColorPalette)||"#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||(this.darkMode?kt(this.secondaryColor,30):this.secondaryColor),this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=this.git0||this.primaryColor,this.git1=this.git1||this.secondaryColor,this.git2=this.git2||this.tertiaryColor,this.git3=this.git3||q(this.primaryColor,{h:-30}),this.git4=this.git4||q(this.primaryColor,{h:-60}),this.git5=this.git5||q(this.primaryColor,{h:-90}),this.git6=this.git6||q(this.primaryColor,{h:60}),this.git7=this.git7||q(this.primaryColor,{h:120}),this.darkMode?(this.git0=bt(this.git0,25),this.git1=bt(this.git1,25),this.git2=bt(this.git2,25),this.git3=bt(this.git3,25),this.git4=bt(this.git4,25),this.git5=bt(this.git5,25),this.git6=bt(this.git6,25),this.git7=bt(this.git7,25)):(this.git0=kt(this.git0,25),this.git1=kt(this.git1,25),this.git2=kt(this.git2,25),this.git3=kt(this.git3,25),this.git4=kt(this.git4,25),this.git5=kt(this.git5,25),this.git6=kt(this.git6,25),this.git7=kt(this.git7,25)),this.gitInv0=this.gitInv0||dt(this.git0),this.gitInv1=this.gitInv1||dt(this.git1),this.gitInv2=this.gitInv2||dt(this.git2),this.gitInv3=this.gitInv3||dt(this.git3),this.gitInv4=this.gitInv4||dt(this.git4),this.gitInv5=this.gitInv5||dt(this.git5),this.gitInv6=this.gitInv6||dt(this.git6),this.gitInv7=this.gitInv7||dt(this.git7),this.branchLabelColor=this.branchLabelColor||(this.darkMode?"black":this.labelTextColor),this.gitBranchLabel0=this.gitBranchLabel0||this.branchLabelColor,this.gitBranchLabel1=this.gitBranchLabel1||this.branchLabelColor,this.gitBranchLabel2=this.gitBranchLabel2||this.branchLabelColor,this.gitBranchLabel3=this.gitBranchLabel3||this.branchLabelColor,this.gitBranchLabel4=this.gitBranchLabel4||this.branchLabelColor,this.gitBranchLabel5=this.gitBranchLabel5||this.branchLabelColor,this.gitBranchLabel6=this.gitBranchLabel6||this.branchLabelColor,this.gitBranchLabel7=this.gitBranchLabel7||this.branchLabelColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||Oh,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||Nh}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(a=>{this[a]=t[a]}),this.updateColors(),n.forEach(a=>{this[a]=t[a]})}},x(Ms,"Theme"),Ms),$M=x(e=>{const t=new FM;return t.calculate(e),t},"getThemeVariables"),Ls,zM=(Ls=class{constructor(){this.background="#333",this.primaryColor="#1f2020",this.secondaryColor=bt(this.primaryColor,16),this.tertiaryColor=q(this.primaryColor,{h:-160}),this.primaryBorderColor=dt(this.background),this.secondaryBorderColor=si(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=si(this.tertiaryColor,this.darkMode),this.primaryTextColor=dt(this.primaryColor),this.secondaryTextColor=dt(this.secondaryColor),this.tertiaryTextColor=dt(this.tertiaryColor),this.lineColor=dt(this.background),this.textColor=dt(this.background),this.mainBkg="#1f2020",this.secondBkg="calculated",this.mainContrastColor="lightgrey",this.darkTextColor=bt(dt("#323D47"),10),this.lineColor="calculated",this.border1="#ccc",this.border2=Eo(255,255,255,.25),this.arrowheadColor="calculated",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.labelBackground="#181818",this.textColor="#ccc",this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="#F9FFFE",this.edgeLabelBackground="calculated",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="calculated",this.actorLineColor="calculated",this.signalColor="calculated",this.signalTextColor="calculated",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="calculated",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="#fff5ad",this.noteTextColor="calculated",this.activationBorderColor="calculated",this.activationBkgColor="calculated",this.sequenceNumberColor="black",this.sectionBkgColor=kt("#EAE8D9",30),this.altSectionBkgColor="calculated",this.sectionBkgColor2="#EAE8D9",this.excludeBkgColor=kt(this.sectionBkgColor,10),this.taskBorderColor=Eo(255,255,255,70),this.taskBkgColor="calculated",this.taskTextColor="calculated",this.taskTextLightColor="calculated",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor=Eo(255,255,255,50),this.activeTaskBkgColor="#81B1DB",this.gridColor="calculated",this.doneTaskBkgColor="calculated",this.doneTaskBorderColor="grey",this.critBorderColor="#E83737",this.critBkgColor="#E83737",this.taskTextDarkColor="calculated",this.todayLineColor="#DB5757",this.vertLineColor="#00BFFF",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.archEdgeColor="calculated",this.archEdgeArrowColor="calculated",this.archEdgeWidth="3",this.archGroupBorderColor=this.primaryBorderColor,this.archGroupBorderWidth="2px",this.rowOdd=this.rowOdd||bt(this.mainBkg,5)||"#ffffff",this.rowEven=this.rowEven||kt(this.mainBkg,10),this.labelColor="calculated",this.errorBkgColor="#a44141",this.errorTextColor="#ddd"}updateColors(){var t,n,a,s,o,u,c,f,d,g,m,b,v,S,C,w,T,k,E,O,D;this.secondBkg=bt(this.mainBkg,16),this.lineColor=this.mainContrastColor,this.arrowheadColor=this.mainContrastColor,this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.edgeLabelBackground=bt(this.labelBackground,25),this.actorBorder=this.border1,this.actorBkg=this.mainBkg,this.actorTextColor=this.mainContrastColor,this.actorLineColor=this.actorBorder,this.signalColor=this.mainContrastColor,this.signalTextColor=this.mainContrastColor,this.labelBoxBkgColor=this.actorBkg,this.labelBoxBorderColor=this.actorBorder,this.labelTextColor=this.mainContrastColor,this.loopTextColor=this.mainContrastColor,this.noteBorderColor=this.secondaryBorderColor,this.noteBkgColor=this.secondBkg,this.noteTextColor=this.secondaryTextColor,this.activationBorderColor=this.border1,this.activationBkgColor=this.secondBkg,this.altSectionBkgColor=this.background,this.taskBkgColor=bt(this.mainBkg,23),this.taskTextColor=this.darkTextColor,this.taskTextLightColor=this.mainContrastColor,this.taskTextOutsideColor=this.taskTextLightColor,this.gridColor=this.mainContrastColor,this.doneTaskBkgColor=this.mainContrastColor,this.taskTextDarkColor=this.darkTextColor,this.archEdgeColor=this.lineColor,this.archEdgeArrowColor=this.lineColor,this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#555",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.primaryBorderColor,this.specialStateColor="#f4f4f4",this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=q(this.primaryColor,{h:64}),this.fillType3=q(this.secondaryColor,{h:64}),this.fillType4=q(this.primaryColor,{h:-64}),this.fillType5=q(this.secondaryColor,{h:-64}),this.fillType6=q(this.primaryColor,{h:128}),this.fillType7=q(this.secondaryColor,{h:128}),this.cScale1=this.cScale1||"#0b0000",this.cScale2=this.cScale2||"#4d1037",this.cScale3=this.cScale3||"#3f5258",this.cScale4=this.cScale4||"#4f2f1b",this.cScale5=this.cScale5||"#6e0a0a",this.cScale6=this.cScale6||"#3b0048",this.cScale7=this.cScale7||"#995a01",this.cScale8=this.cScale8||"#154706",this.cScale9=this.cScale9||"#161722",this.cScale10=this.cScale10||"#00296f",this.cScale11=this.cScale11||"#01629c",this.cScale12=this.cScale12||"#010029",this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||q(this.primaryColor,{h:30}),this.cScale4=this.cScale4||q(this.primaryColor,{h:60}),this.cScale5=this.cScale5||q(this.primaryColor,{h:90}),this.cScale6=this.cScale6||q(this.primaryColor,{h:120}),this.cScale7=this.cScale7||q(this.primaryColor,{h:150}),this.cScale8=this.cScale8||q(this.primaryColor,{h:210}),this.cScale9=this.cScale9||q(this.primaryColor,{h:270}),this.cScale10=this.cScale10||q(this.primaryColor,{h:300}),this.cScale11=this.cScale11||q(this.primaryColor,{h:330});for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleInv"+R]=this["cScaleInv"+R]||dt(this["cScale"+R]);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScalePeer"+R]=this["cScalePeer"+R]||bt(this["cScale"+R],10);for(let R=0;R<5;R++)this["surface"+R]=this["surface"+R]||q(this.mainBkg,{h:30,s:-30,l:-(-10+R*4)}),this["surfacePeer"+R]=this["surfacePeer"+R]||q(this.mainBkg,{h:30,s:-30,l:-(-7+R*4)});this.scaleLabelColor=this.scaleLabelColor||(this.darkMode?"black":this.labelTextColor);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleLabel"+R]=this["cScaleLabel"+R]||this.scaleLabelColor;for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["pie"+R]=this["cScale"+R];this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||q(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||q(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||q(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||q(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||q(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||q(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Qo(this.quadrant1Fill)?bt(this.quadrant1Fill):kt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((a=this.xyChart)==null?void 0:a.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((s=this.xyChart)==null?void 0:s.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((o=this.xyChart)==null?void 0:o.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((u=this.xyChart)==null?void 0:u.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((c=this.xyChart)==null?void 0:c.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((f=this.xyChart)==null?void 0:f.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((d=this.xyChart)==null?void 0:d.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((g=this.xyChart)==null?void 0:g.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((m=this.xyChart)==null?void 0:m.plotColorPalette)||"#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"},this.packet={startByteColor:this.primaryTextColor,endByteColor:this.primaryTextColor,labelColor:this.primaryTextColor,titleColor:this.primaryTextColor,blockStrokeColor:this.primaryTextColor,blockFillColor:this.background},this.radar={axisColor:((b=this.radar)==null?void 0:b.axisColor)||this.lineColor,axisStrokeWidth:((v=this.radar)==null?void 0:v.axisStrokeWidth)||2,axisLabelFontSize:((S=this.radar)==null?void 0:S.axisLabelFontSize)||12,curveOpacity:((C=this.radar)==null?void 0:C.curveOpacity)||.5,curveStrokeWidth:((w=this.radar)==null?void 0:w.curveStrokeWidth)||2,graticuleColor:((T=this.radar)==null?void 0:T.graticuleColor)||"#DEDEDE",graticuleStrokeWidth:((k=this.radar)==null?void 0:k.graticuleStrokeWidth)||1,graticuleOpacity:((E=this.radar)==null?void 0:E.graticuleOpacity)||.3,legendBoxSize:((O=this.radar)==null?void 0:O.legendBoxSize)||12,legendFontSize:((D=this.radar)==null?void 0:D.legendFontSize)||12},this.classText=this.primaryTextColor,this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||(this.darkMode?kt(this.secondaryColor,30):this.secondaryColor),this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=bt(this.secondaryColor,20),this.git1=bt(this.pie2||this.secondaryColor,20),this.git2=bt(this.pie3||this.tertiaryColor,20),this.git3=bt(this.pie4||q(this.primaryColor,{h:-30}),20),this.git4=bt(this.pie5||q(this.primaryColor,{h:-60}),20),this.git5=bt(this.pie6||q(this.primaryColor,{h:-90}),10),this.git6=bt(this.pie7||q(this.primaryColor,{h:60}),10),this.git7=bt(this.pie8||q(this.primaryColor,{h:120}),20),this.gitInv0=this.gitInv0||dt(this.git0),this.gitInv1=this.gitInv1||dt(this.git1),this.gitInv2=this.gitInv2||dt(this.git2),this.gitInv3=this.gitInv3||dt(this.git3),this.gitInv4=this.gitInv4||dt(this.git4),this.gitInv5=this.gitInv5||dt(this.git5),this.gitInv6=this.gitInv6||dt(this.git6),this.gitInv7=this.gitInv7||dt(this.git7),this.gitBranchLabel0=this.gitBranchLabel0||dt(this.labelTextColor),this.gitBranchLabel1=this.gitBranchLabel1||this.labelTextColor,this.gitBranchLabel2=this.gitBranchLabel2||this.labelTextColor,this.gitBranchLabel3=this.gitBranchLabel3||dt(this.labelTextColor),this.gitBranchLabel4=this.gitBranchLabel4||this.labelTextColor,this.gitBranchLabel5=this.gitBranchLabel5||this.labelTextColor,this.gitBranchLabel6=this.gitBranchLabel6||this.labelTextColor,this.gitBranchLabel7=this.gitBranchLabel7||this.labelTextColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||bt(this.background,12),this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||bt(this.background,2),this.nodeBorder=this.nodeBorder||"#999"}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(a=>{this[a]=t[a]}),this.updateColors(),n.forEach(a=>{this[a]=t[a]})}},x(Ls,"Theme"),Ls),qM=x(e=>{const t=new zM;return t.calculate(e),t},"getThemeVariables"),Ds,UM=(Ds=class{constructor(){this.background="#f4f4f4",this.primaryColor="#ECECFF",this.secondaryColor=q(this.primaryColor,{h:120}),this.secondaryColor="#ffffde",this.tertiaryColor=q(this.primaryColor,{h:-160}),this.primaryBorderColor=si(this.primaryColor,this.darkMode),this.secondaryBorderColor=si(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=si(this.tertiaryColor,this.darkMode),this.primaryTextColor=dt(this.primaryColor),this.secondaryTextColor=dt(this.secondaryColor),this.tertiaryTextColor=dt(this.tertiaryColor),this.lineColor=dt(this.background),this.textColor=dt(this.background),this.background="white",this.mainBkg="#ECECFF",this.secondBkg="#ffffde",this.lineColor="#333333",this.border1="#9370DB",this.border2="#aaaa33",this.arrowheadColor="#333333",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.labelBackground="rgba(232,232,232, 0.8)",this.textColor="#333",this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="calculated",this.edgeLabelBackground="calculated",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="black",this.actorLineColor="calculated",this.signalColor="calculated",this.signalTextColor="calculated",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="calculated",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="#fff5ad",this.noteTextColor="calculated",this.activationBorderColor="#666",this.activationBkgColor="#f4f4f4",this.sequenceNumberColor="white",this.sectionBkgColor="calculated",this.altSectionBkgColor="calculated",this.sectionBkgColor2="calculated",this.excludeBkgColor="#eeeeee",this.taskBorderColor="calculated",this.taskBkgColor="calculated",this.taskTextLightColor="calculated",this.taskTextColor=this.taskTextLightColor,this.taskTextDarkColor="calculated",this.taskTextOutsideColor=this.taskTextDarkColor,this.taskTextClickableColor="calculated",this.activeTaskBorderColor="calculated",this.activeTaskBkgColor="calculated",this.gridColor="calculated",this.doneTaskBkgColor="calculated",this.doneTaskBorderColor="calculated",this.critBorderColor="calculated",this.critBkgColor="calculated",this.todayLineColor="calculated",this.vertLineColor="calculated",this.sectionBkgColor=Eo(102,102,255,.49),this.altSectionBkgColor="white",this.sectionBkgColor2="#fff400",this.taskBorderColor="#534fbc",this.taskBkgColor="#8a90dd",this.taskTextLightColor="white",this.taskTextColor="calculated",this.taskTextDarkColor="black",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor="#534fbc",this.activeTaskBkgColor="#bfc7ff",this.gridColor="lightgrey",this.doneTaskBkgColor="lightgrey",this.doneTaskBorderColor="grey",this.critBorderColor="#ff8888",this.critBkgColor="red",this.todayLineColor="red",this.vertLineColor="navy",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.archEdgeColor="calculated",this.archEdgeArrowColor="calculated",this.archEdgeWidth="3",this.archGroupBorderColor=this.primaryBorderColor,this.archGroupBorderWidth="2px",this.rowOdd="calculated",this.rowEven="calculated",this.labelColor="black",this.errorBkgColor="#552222",this.errorTextColor="#552222",this.updateColors()}updateColors(){var t,n,a,s,o,u,c,f,d,g,m,b,v,S,C,w,T,k,E,O,D;this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||q(this.primaryColor,{h:30}),this.cScale4=this.cScale4||q(this.primaryColor,{h:60}),this.cScale5=this.cScale5||q(this.primaryColor,{h:90}),this.cScale6=this.cScale6||q(this.primaryColor,{h:120}),this.cScale7=this.cScale7||q(this.primaryColor,{h:150}),this.cScale8=this.cScale8||q(this.primaryColor,{h:210}),this.cScale9=this.cScale9||q(this.primaryColor,{h:270}),this.cScale10=this.cScale10||q(this.primaryColor,{h:300}),this.cScale11=this.cScale11||q(this.primaryColor,{h:330}),this.cScalePeer1=this.cScalePeer1||kt(this.secondaryColor,45),this.cScalePeer2=this.cScalePeer2||kt(this.tertiaryColor,40);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScale"+R]=kt(this["cScale"+R],10),this["cScalePeer"+R]=this["cScalePeer"+R]||kt(this["cScale"+R],25);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleInv"+R]=this["cScaleInv"+R]||q(this["cScale"+R],{h:180});for(let R=0;R<5;R++)this["surface"+R]=this["surface"+R]||q(this.mainBkg,{h:30,l:-(5+R*5)}),this["surfacePeer"+R]=this["surfacePeer"+R]||q(this.mainBkg,{h:30,l:-(7+R*5)});if(this.scaleLabelColor=this.scaleLabelColor!=="calculated"&&this.scaleLabelColor?this.scaleLabelColor:this.labelTextColor,this.labelTextColor!=="calculated"){this.cScaleLabel0=this.cScaleLabel0||dt(this.labelTextColor),this.cScaleLabel3=this.cScaleLabel3||dt(this.labelTextColor);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleLabel"+R]=this["cScaleLabel"+R]||this.labelTextColor}this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.titleColor=this.textColor,this.edgeLabelBackground=this.labelBackground,this.actorBorder=bt(this.border1,23),this.actorBkg=this.mainBkg,this.labelBoxBkgColor=this.actorBkg,this.signalColor=this.textColor,this.signalTextColor=this.textColor,this.labelBoxBorderColor=this.actorBorder,this.labelTextColor=this.actorTextColor,this.loopTextColor=this.actorTextColor,this.noteBorderColor=this.border2,this.noteTextColor=this.actorTextColor,this.actorLineColor=this.actorBorder,this.taskTextColor=this.taskTextLightColor,this.taskTextOutsideColor=this.taskTextDarkColor,this.archEdgeColor=this.lineColor,this.archEdgeArrowColor=this.lineColor,this.rowOdd=this.rowOdd||bt(this.primaryColor,75)||"#ffffff",this.rowEven=this.rowEven||bt(this.primaryColor,1),this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#f0f0f0",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.nodeBorder,this.specialStateColor=this.lineColor,this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.classText=this.primaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=q(this.primaryColor,{h:64}),this.fillType3=q(this.secondaryColor,{h:64}),this.fillType4=q(this.primaryColor,{h:-64}),this.fillType5=q(this.secondaryColor,{h:-64}),this.fillType6=q(this.primaryColor,{h:128}),this.fillType7=q(this.secondaryColor,{h:128}),this.pie1=this.pie1||this.primaryColor,this.pie2=this.pie2||this.secondaryColor,this.pie3=this.pie3||q(this.tertiaryColor,{l:-40}),this.pie4=this.pie4||q(this.primaryColor,{l:-10}),this.pie5=this.pie5||q(this.secondaryColor,{l:-30}),this.pie6=this.pie6||q(this.tertiaryColor,{l:-20}),this.pie7=this.pie7||q(this.primaryColor,{h:60,l:-20}),this.pie8=this.pie8||q(this.primaryColor,{h:-60,l:-40}),this.pie9=this.pie9||q(this.primaryColor,{h:120,l:-40}),this.pie10=this.pie10||q(this.primaryColor,{h:60,l:-40}),this.pie11=this.pie11||q(this.primaryColor,{h:-90,l:-40}),this.pie12=this.pie12||q(this.primaryColor,{h:120,l:-30}),this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||q(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||q(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||q(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||q(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||q(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||q(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Qo(this.quadrant1Fill)?bt(this.quadrant1Fill):kt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.radar={axisColor:((t=this.radar)==null?void 0:t.axisColor)||this.lineColor,axisStrokeWidth:((n=this.radar)==null?void 0:n.axisStrokeWidth)||2,axisLabelFontSize:((a=this.radar)==null?void 0:a.axisLabelFontSize)||12,curveOpacity:((s=this.radar)==null?void 0:s.curveOpacity)||.5,curveStrokeWidth:((o=this.radar)==null?void 0:o.curveStrokeWidth)||2,graticuleColor:((u=this.radar)==null?void 0:u.graticuleColor)||"#DEDEDE",graticuleStrokeWidth:((c=this.radar)==null?void 0:c.graticuleStrokeWidth)||1,graticuleOpacity:((f=this.radar)==null?void 0:f.graticuleOpacity)||.3,legendBoxSize:((d=this.radar)==null?void 0:d.legendBoxSize)||12,legendFontSize:((g=this.radar)==null?void 0:g.legendFontSize)||12},this.xyChart={backgroundColor:((m=this.xyChart)==null?void 0:m.backgroundColor)||this.background,titleColor:((b=this.xyChart)==null?void 0:b.titleColor)||this.primaryTextColor,xAxisTitleColor:((v=this.xyChart)==null?void 0:v.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((S=this.xyChart)==null?void 0:S.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((C=this.xyChart)==null?void 0:C.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((w=this.xyChart)==null?void 0:w.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((T=this.xyChart)==null?void 0:T.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((k=this.xyChart)==null?void 0:k.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((E=this.xyChart)==null?void 0:E.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((O=this.xyChart)==null?void 0:O.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((D=this.xyChart)==null?void 0:D.plotColorPalette)||"#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||this.labelBackground,this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=this.git0||this.primaryColor,this.git1=this.git1||this.secondaryColor,this.git2=this.git2||this.tertiaryColor,this.git3=this.git3||q(this.primaryColor,{h:-30}),this.git4=this.git4||q(this.primaryColor,{h:-60}),this.git5=this.git5||q(this.primaryColor,{h:-90}),this.git6=this.git6||q(this.primaryColor,{h:60}),this.git7=this.git7||q(this.primaryColor,{h:120}),this.darkMode?(this.git0=bt(this.git0,25),this.git1=bt(this.git1,25),this.git2=bt(this.git2,25),this.git3=bt(this.git3,25),this.git4=bt(this.git4,25),this.git5=bt(this.git5,25),this.git6=bt(this.git6,25),this.git7=bt(this.git7,25)):(this.git0=kt(this.git0,25),this.git1=kt(this.git1,25),this.git2=kt(this.git2,25),this.git3=kt(this.git3,25),this.git4=kt(this.git4,25),this.git5=kt(this.git5,25),this.git6=kt(this.git6,25),this.git7=kt(this.git7,25)),this.gitInv0=this.gitInv0||kt(dt(this.git0),25),this.gitInv1=this.gitInv1||dt(this.git1),this.gitInv2=this.gitInv2||dt(this.git2),this.gitInv3=this.gitInv3||dt(this.git3),this.gitInv4=this.gitInv4||dt(this.git4),this.gitInv5=this.gitInv5||dt(this.git5),this.gitInv6=this.gitInv6||dt(this.git6),this.gitInv7=this.gitInv7||dt(this.git7),this.gitBranchLabel0=this.gitBranchLabel0||dt(this.labelTextColor),this.gitBranchLabel1=this.gitBranchLabel1||this.labelTextColor,this.gitBranchLabel2=this.gitBranchLabel2||this.labelTextColor,this.gitBranchLabel3=this.gitBranchLabel3||dt(this.labelTextColor),this.gitBranchLabel4=this.gitBranchLabel4||this.labelTextColor,this.gitBranchLabel5=this.gitBranchLabel5||this.labelTextColor,this.gitBranchLabel6=this.gitBranchLabel6||this.labelTextColor,this.gitBranchLabel7=this.gitBranchLabel7||this.labelTextColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||Oh,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||Nh}calculate(t){if(Object.keys(this).forEach(a=>{this[a]==="calculated"&&(this[a]=void 0)}),typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(a=>{this[a]=t[a]}),this.updateColors(),n.forEach(a=>{this[a]=t[a]})}},x(Ds,"Theme"),Ds),HM=x(e=>{const t=new UM;return t.calculate(e),t},"getThemeVariables"),Bs,GM=(Bs=class{constructor(){this.background="#f4f4f4",this.primaryColor="#cde498",this.secondaryColor="#cdffb2",this.background="white",this.mainBkg="#cde498",this.secondBkg="#cdffb2",this.lineColor="green",this.border1="#13540c",this.border2="#6eaa49",this.arrowheadColor="green",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.tertiaryColor=bt("#cde498",10),this.primaryBorderColor=si(this.primaryColor,this.darkMode),this.secondaryBorderColor=si(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=si(this.tertiaryColor,this.darkMode),this.primaryTextColor=dt(this.primaryColor),this.secondaryTextColor=dt(this.secondaryColor),this.tertiaryTextColor=dt(this.primaryColor),this.lineColor=dt(this.background),this.textColor=dt(this.background),this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="#333",this.edgeLabelBackground="#e8e8e8",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="black",this.actorLineColor="calculated",this.signalColor="#333",this.signalTextColor="#333",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="#326932",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="#fff5ad",this.noteTextColor="calculated",this.activationBorderColor="#666",this.activationBkgColor="#f4f4f4",this.sequenceNumberColor="white",this.sectionBkgColor="#6eaa49",this.altSectionBkgColor="white",this.sectionBkgColor2="#6eaa49",this.excludeBkgColor="#eeeeee",this.taskBorderColor="calculated",this.taskBkgColor="#487e3a",this.taskTextLightColor="white",this.taskTextColor="calculated",this.taskTextDarkColor="black",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor="calculated",this.activeTaskBkgColor="calculated",this.gridColor="lightgrey",this.doneTaskBkgColor="lightgrey",this.doneTaskBorderColor="grey",this.critBorderColor="#ff8888",this.critBkgColor="red",this.todayLineColor="red",this.vertLineColor="#00BFFF",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.archEdgeColor="calculated",this.archEdgeArrowColor="calculated",this.archEdgeWidth="3",this.archGroupBorderColor=this.primaryBorderColor,this.archGroupBorderWidth="2px",this.labelColor="black",this.errorBkgColor="#552222",this.errorTextColor="#552222"}updateColors(){var t,n,a,s,o,u,c,f,d,g,m,b,v,S,C,w,T,k,E,O,D;this.actorBorder=kt(this.mainBkg,20),this.actorBkg=this.mainBkg,this.labelBoxBkgColor=this.actorBkg,this.labelTextColor=this.actorTextColor,this.loopTextColor=this.actorTextColor,this.noteBorderColor=this.border2,this.noteTextColor=this.actorTextColor,this.actorLineColor=this.actorBorder,this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||q(this.primaryColor,{h:30}),this.cScale4=this.cScale4||q(this.primaryColor,{h:60}),this.cScale5=this.cScale5||q(this.primaryColor,{h:90}),this.cScale6=this.cScale6||q(this.primaryColor,{h:120}),this.cScale7=this.cScale7||q(this.primaryColor,{h:150}),this.cScale8=this.cScale8||q(this.primaryColor,{h:210}),this.cScale9=this.cScale9||q(this.primaryColor,{h:270}),this.cScale10=this.cScale10||q(this.primaryColor,{h:300}),this.cScale11=this.cScale11||q(this.primaryColor,{h:330}),this.cScalePeer1=this.cScalePeer1||kt(this.secondaryColor,45),this.cScalePeer2=this.cScalePeer2||kt(this.tertiaryColor,40);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScale"+R]=kt(this["cScale"+R],10),this["cScalePeer"+R]=this["cScalePeer"+R]||kt(this["cScale"+R],25);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleInv"+R]=this["cScaleInv"+R]||q(this["cScale"+R],{h:180});this.scaleLabelColor=this.scaleLabelColor!=="calculated"&&this.scaleLabelColor?this.scaleLabelColor:this.labelTextColor;for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleLabel"+R]=this["cScaleLabel"+R]||this.scaleLabelColor;for(let R=0;R<5;R++)this["surface"+R]=this["surface"+R]||q(this.mainBkg,{h:30,s:-30,l:-(5+R*5)}),this["surfacePeer"+R]=this["surfacePeer"+R]||q(this.mainBkg,{h:30,s:-30,l:-(8+R*5)});this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.taskBorderColor=this.border1,this.taskTextColor=this.taskTextLightColor,this.taskTextOutsideColor=this.taskTextDarkColor,this.activeTaskBorderColor=this.taskBorderColor,this.activeTaskBkgColor=this.mainBkg,this.archEdgeColor=this.lineColor,this.archEdgeArrowColor=this.lineColor,this.rowOdd=this.rowOdd||bt(this.mainBkg,75)||"#ffffff",this.rowEven=this.rowEven||bt(this.mainBkg,20),this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#f0f0f0",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.primaryBorderColor,this.specialStateColor=this.lineColor,this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.classText=this.primaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=q(this.primaryColor,{h:64}),this.fillType3=q(this.secondaryColor,{h:64}),this.fillType4=q(this.primaryColor,{h:-64}),this.fillType5=q(this.secondaryColor,{h:-64}),this.fillType6=q(this.primaryColor,{h:128}),this.fillType7=q(this.secondaryColor,{h:128}),this.pie1=this.pie1||this.primaryColor,this.pie2=this.pie2||this.secondaryColor,this.pie3=this.pie3||this.tertiaryColor,this.pie4=this.pie4||q(this.primaryColor,{l:-30}),this.pie5=this.pie5||q(this.secondaryColor,{l:-30}),this.pie6=this.pie6||q(this.tertiaryColor,{h:40,l:-40}),this.pie7=this.pie7||q(this.primaryColor,{h:60,l:-10}),this.pie8=this.pie8||q(this.primaryColor,{h:-60,l:-10}),this.pie9=this.pie9||q(this.primaryColor,{h:120,l:0}),this.pie10=this.pie10||q(this.primaryColor,{h:60,l:-50}),this.pie11=this.pie11||q(this.primaryColor,{h:-60,l:-50}),this.pie12=this.pie12||q(this.primaryColor,{h:120,l:-50}),this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||q(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||q(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||q(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||q(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||q(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||q(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Qo(this.quadrant1Fill)?bt(this.quadrant1Fill):kt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.packet={startByteColor:this.primaryTextColor,endByteColor:this.primaryTextColor,labelColor:this.primaryTextColor,titleColor:this.primaryTextColor,blockStrokeColor:this.primaryTextColor,blockFillColor:this.mainBkg},this.radar={axisColor:((t=this.radar)==null?void 0:t.axisColor)||this.lineColor,axisStrokeWidth:((n=this.radar)==null?void 0:n.axisStrokeWidth)||2,axisLabelFontSize:((a=this.radar)==null?void 0:a.axisLabelFontSize)||12,curveOpacity:((s=this.radar)==null?void 0:s.curveOpacity)||.5,curveStrokeWidth:((o=this.radar)==null?void 0:o.curveStrokeWidth)||2,graticuleColor:((u=this.radar)==null?void 0:u.graticuleColor)||"#DEDEDE",graticuleStrokeWidth:((c=this.radar)==null?void 0:c.graticuleStrokeWidth)||1,graticuleOpacity:((f=this.radar)==null?void 0:f.graticuleOpacity)||.3,legendBoxSize:((d=this.radar)==null?void 0:d.legendBoxSize)||12,legendFontSize:((g=this.radar)==null?void 0:g.legendFontSize)||12},this.xyChart={backgroundColor:((m=this.xyChart)==null?void 0:m.backgroundColor)||this.background,titleColor:((b=this.xyChart)==null?void 0:b.titleColor)||this.primaryTextColor,xAxisTitleColor:((v=this.xyChart)==null?void 0:v.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((S=this.xyChart)==null?void 0:S.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((C=this.xyChart)==null?void 0:C.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((w=this.xyChart)==null?void 0:w.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((T=this.xyChart)==null?void 0:T.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((k=this.xyChart)==null?void 0:k.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((E=this.xyChart)==null?void 0:E.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((O=this.xyChart)==null?void 0:O.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((D=this.xyChart)==null?void 0:D.plotColorPalette)||"#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||this.edgeLabelBackground,this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=this.git0||this.primaryColor,this.git1=this.git1||this.secondaryColor,this.git2=this.git2||this.tertiaryColor,this.git3=this.git3||q(this.primaryColor,{h:-30}),this.git4=this.git4||q(this.primaryColor,{h:-60}),this.git5=this.git5||q(this.primaryColor,{h:-90}),this.git6=this.git6||q(this.primaryColor,{h:60}),this.git7=this.git7||q(this.primaryColor,{h:120}),this.darkMode?(this.git0=bt(this.git0,25),this.git1=bt(this.git1,25),this.git2=bt(this.git2,25),this.git3=bt(this.git3,25),this.git4=bt(this.git4,25),this.git5=bt(this.git5,25),this.git6=bt(this.git6,25),this.git7=bt(this.git7,25)):(this.git0=kt(this.git0,25),this.git1=kt(this.git1,25),this.git2=kt(this.git2,25),this.git3=kt(this.git3,25),this.git4=kt(this.git4,25),this.git5=kt(this.git5,25),this.git6=kt(this.git6,25),this.git7=kt(this.git7,25)),this.gitInv0=this.gitInv0||dt(this.git0),this.gitInv1=this.gitInv1||dt(this.git1),this.gitInv2=this.gitInv2||dt(this.git2),this.gitInv3=this.gitInv3||dt(this.git3),this.gitInv4=this.gitInv4||dt(this.git4),this.gitInv5=this.gitInv5||dt(this.git5),this.gitInv6=this.gitInv6||dt(this.git6),this.gitInv7=this.gitInv7||dt(this.git7),this.gitBranchLabel0=this.gitBranchLabel0||dt(this.labelTextColor),this.gitBranchLabel1=this.gitBranchLabel1||this.labelTextColor,this.gitBranchLabel2=this.gitBranchLabel2||this.labelTextColor,this.gitBranchLabel3=this.gitBranchLabel3||dt(this.labelTextColor),this.gitBranchLabel4=this.gitBranchLabel4||this.labelTextColor,this.gitBranchLabel5=this.gitBranchLabel5||this.labelTextColor,this.gitBranchLabel6=this.gitBranchLabel6||this.labelTextColor,this.gitBranchLabel7=this.gitBranchLabel7||this.labelTextColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||Oh,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||Nh}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(a=>{this[a]=t[a]}),this.updateColors(),n.forEach(a=>{this[a]=t[a]})}},x(Bs,"Theme"),Bs),jM=x(e=>{const t=new GM;return t.calculate(e),t},"getThemeVariables"),Os,YM=(Os=class{constructor(){this.primaryColor="#eee",this.contrast="#707070",this.secondaryColor=bt(this.contrast,55),this.background="#ffffff",this.tertiaryColor=q(this.primaryColor,{h:-160}),this.primaryBorderColor=si(this.primaryColor,this.darkMode),this.secondaryBorderColor=si(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=si(this.tertiaryColor,this.darkMode),this.primaryTextColor=dt(this.primaryColor),this.secondaryTextColor=dt(this.secondaryColor),this.tertiaryTextColor=dt(this.tertiaryColor),this.lineColor=dt(this.background),this.textColor=dt(this.background),this.mainBkg="#eee",this.secondBkg="calculated",this.lineColor="#666",this.border1="#999",this.border2="calculated",this.note="#ffa",this.text="#333",this.critical="#d42",this.done="#bbb",this.arrowheadColor="#333333",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="calculated",this.edgeLabelBackground="white",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="calculated",this.actorLineColor=this.actorBorder,this.signalColor="calculated",this.signalTextColor="calculated",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="calculated",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="calculated",this.noteTextColor="calculated",this.activationBorderColor="#666",this.activationBkgColor="#f4f4f4",this.sequenceNumberColor="white",this.sectionBkgColor="calculated",this.altSectionBkgColor="white",this.sectionBkgColor2="calculated",this.excludeBkgColor="#eeeeee",this.taskBorderColor="calculated",this.taskBkgColor="calculated",this.taskTextLightColor="white",this.taskTextColor="calculated",this.taskTextDarkColor="calculated",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor="calculated",this.activeTaskBkgColor="calculated",this.gridColor="calculated",this.doneTaskBkgColor="calculated",this.doneTaskBorderColor="calculated",this.critBkgColor="calculated",this.critBorderColor="calculated",this.todayLineColor="calculated",this.vertLineColor="calculated",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.archEdgeColor="calculated",this.archEdgeArrowColor="calculated",this.archEdgeWidth="3",this.archGroupBorderColor=this.primaryBorderColor,this.archGroupBorderWidth="2px",this.rowOdd=this.rowOdd||bt(this.mainBkg,75)||"#ffffff",this.rowEven=this.rowEven||"#f4f4f4",this.labelColor="black",this.errorBkgColor="#552222",this.errorTextColor="#552222"}updateColors(){var t,n,a,s,o,u,c,f,d,g,m,b,v,S,C,w,T,k,E,O,D;this.secondBkg=bt(this.contrast,55),this.border2=this.contrast,this.actorBorder=bt(this.border1,23),this.actorBkg=this.mainBkg,this.actorTextColor=this.text,this.actorLineColor=this.actorBorder,this.signalColor=this.text,this.signalTextColor=this.text,this.labelBoxBkgColor=this.actorBkg,this.labelBoxBorderColor=this.actorBorder,this.labelTextColor=this.text,this.loopTextColor=this.text,this.noteBorderColor="#999",this.noteBkgColor="#666",this.noteTextColor="#fff",this.cScale0=this.cScale0||"#555",this.cScale1=this.cScale1||"#F4F4F4",this.cScale2=this.cScale2||"#555",this.cScale3=this.cScale3||"#BBB",this.cScale4=this.cScale4||"#777",this.cScale5=this.cScale5||"#999",this.cScale6=this.cScale6||"#DDD",this.cScale7=this.cScale7||"#FFF",this.cScale8=this.cScale8||"#DDD",this.cScale9=this.cScale9||"#BBB",this.cScale10=this.cScale10||"#999",this.cScale11=this.cScale11||"#777";for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleInv"+R]=this["cScaleInv"+R]||dt(this["cScale"+R]);for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this.darkMode?this["cScalePeer"+R]=this["cScalePeer"+R]||bt(this["cScale"+R],10):this["cScalePeer"+R]=this["cScalePeer"+R]||kt(this["cScale"+R],10);this.scaleLabelColor=this.scaleLabelColor||(this.darkMode?"black":this.labelTextColor),this.cScaleLabel0=this.cScaleLabel0||this.cScale1,this.cScaleLabel2=this.cScaleLabel2||this.cScale1;for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["cScaleLabel"+R]=this["cScaleLabel"+R]||this.scaleLabelColor;for(let R=0;R<5;R++)this["surface"+R]=this["surface"+R]||q(this.mainBkg,{l:-(5+R*5)}),this["surfacePeer"+R]=this["surfacePeer"+R]||q(this.mainBkg,{l:-(8+R*5)});this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.titleColor=this.text,this.sectionBkgColor=bt(this.contrast,30),this.sectionBkgColor2=bt(this.contrast,30),this.taskBorderColor=kt(this.contrast,10),this.taskBkgColor=this.contrast,this.taskTextColor=this.taskTextLightColor,this.taskTextDarkColor=this.text,this.taskTextOutsideColor=this.taskTextDarkColor,this.activeTaskBorderColor=this.taskBorderColor,this.activeTaskBkgColor=this.mainBkg,this.gridColor=bt(this.border1,30),this.doneTaskBkgColor=this.done,this.doneTaskBorderColor=this.lineColor,this.critBkgColor=this.critical,this.critBorderColor=kt(this.critBkgColor,10),this.todayLineColor=this.critBkgColor,this.vertLineColor=this.critBkgColor,this.archEdgeColor=this.lineColor,this.archEdgeArrowColor=this.lineColor,this.transitionColor=this.transitionColor||"#000",this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#f4f4f4",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.stateBorder=this.stateBorder||"#000",this.innerEndBackground=this.primaryBorderColor,this.specialStateColor="#222",this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.classText=this.primaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=q(this.primaryColor,{h:64}),this.fillType3=q(this.secondaryColor,{h:64}),this.fillType4=q(this.primaryColor,{h:-64}),this.fillType5=q(this.secondaryColor,{h:-64}),this.fillType6=q(this.primaryColor,{h:128}),this.fillType7=q(this.secondaryColor,{h:128});for(let R=0;R<this.THEME_COLOR_LIMIT;R++)this["pie"+R]=this["cScale"+R];this.pie12=this.pie0,this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||q(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||q(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||q(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||q(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||q(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||q(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Qo(this.quadrant1Fill)?bt(this.quadrant1Fill):kt(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((a=this.xyChart)==null?void 0:a.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((s=this.xyChart)==null?void 0:s.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((o=this.xyChart)==null?void 0:o.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((u=this.xyChart)==null?void 0:u.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((c=this.xyChart)==null?void 0:c.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((f=this.xyChart)==null?void 0:f.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((d=this.xyChart)==null?void 0:d.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((g=this.xyChart)==null?void 0:g.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((m=this.xyChart)==null?void 0:m.plotColorPalette)||"#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"},this.radar={axisColor:((b=this.radar)==null?void 0:b.axisColor)||this.lineColor,axisStrokeWidth:((v=this.radar)==null?void 0:v.axisStrokeWidth)||2,axisLabelFontSize:((S=this.radar)==null?void 0:S.axisLabelFontSize)||12,curveOpacity:((C=this.radar)==null?void 0:C.curveOpacity)||.5,curveStrokeWidth:((w=this.radar)==null?void 0:w.curveStrokeWidth)||2,graticuleColor:((T=this.radar)==null?void 0:T.graticuleColor)||"#DEDEDE",graticuleStrokeWidth:((k=this.radar)==null?void 0:k.graticuleStrokeWidth)||1,graticuleOpacity:((E=this.radar)==null?void 0:E.graticuleOpacity)||.3,legendBoxSize:((O=this.radar)==null?void 0:O.legendBoxSize)||12,legendFontSize:((D=this.radar)==null?void 0:D.legendFontSize)||12},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||this.edgeLabelBackground,this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=kt(this.pie1,25)||this.primaryColor,this.git1=this.pie2||this.secondaryColor,this.git2=this.pie3||this.tertiaryColor,this.git3=this.pie4||q(this.primaryColor,{h:-30}),this.git4=this.pie5||q(this.primaryColor,{h:-60}),this.git5=this.pie6||q(this.primaryColor,{h:-90}),this.git6=this.pie7||q(this.primaryColor,{h:60}),this.git7=this.pie8||q(this.primaryColor,{h:120}),this.gitInv0=this.gitInv0||dt(this.git0),this.gitInv1=this.gitInv1||dt(this.git1),this.gitInv2=this.gitInv2||dt(this.git2),this.gitInv3=this.gitInv3||dt(this.git3),this.gitInv4=this.gitInv4||dt(this.git4),this.gitInv5=this.gitInv5||dt(this.git5),this.gitInv6=this.gitInv6||dt(this.git6),this.gitInv7=this.gitInv7||dt(this.git7),this.branchLabelColor=this.branchLabelColor||this.labelTextColor,this.gitBranchLabel0=this.branchLabelColor,this.gitBranchLabel1="white",this.gitBranchLabel2=this.branchLabelColor,this.gitBranchLabel3="white",this.gitBranchLabel4=this.branchLabelColor,this.gitBranchLabel5=this.branchLabelColor,this.gitBranchLabel6=this.branchLabelColor,this.gitBranchLabel7=this.branchLabelColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||Oh,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||Nh}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(a=>{this[a]=t[a]}),this.updateColors(),n.forEach(a=>{this[a]=t[a]})}},x(Os,"Theme"),Os),WM=x(e=>{const t=new YM;return t.calculate(e),t},"getThemeVariables"),nr={base:{getThemeVariables:$M},dark:{getThemeVariables:qM},default:{getThemeVariables:HM},forest:{getThemeVariables:jM},neutral:{getThemeVariables:WM}},yn={flowchart:{useMaxWidth:!0,titleTopMargin:25,subGraphTitleMargin:{top:0,bottom:0},diagramPadding:8,htmlLabels:!0,nodeSpacing:50,rankSpacing:50,curve:"basis",padding:15,defaultRenderer:"dagre-wrapper",wrappingWidth:200,inheritDir:!1},sequence:{useMaxWidth:!0,hideUnusedParticipants:!1,activationWidth:10,diagramMarginX:50,diagramMarginY:10,actorMargin:50,width:150,height:65,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,messageAlign:"center",mirrorActors:!0,forceMenus:!1,bottomMarginAdj:1,rightAngles:!1,showSequenceNumbers:!1,actorFontSize:14,actorFontFamily:'"Open Sans", sans-serif',actorFontWeight:400,noteFontSize:14,noteFontFamily:'"trebuchet ms", verdana, arial, sans-serif',noteFontWeight:400,noteAlign:"center",messageFontSize:16,messageFontFamily:'"trebuchet ms", verdana, arial, sans-serif',messageFontWeight:400,wrap:!1,wrapPadding:10,labelBoxWidth:50,labelBoxHeight:20},gantt:{useMaxWidth:!0,titleTopMargin:25,barHeight:20,barGap:4,topPadding:50,rightPadding:75,leftPadding:75,gridLineStartPadding:35,fontSize:11,sectionFontSize:11,numberSectionStyles:4,axisFormat:"%Y-%m-%d",topAxis:!1,displayMode:"",weekday:"sunday"},journey:{useMaxWidth:!0,diagramMarginX:50,diagramMarginY:10,leftMargin:150,maxLabelWidth:360,width:150,height:50,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,messageAlign:"center",bottomMarginAdj:1,rightAngles:!1,taskFontSize:14,taskFontFamily:'"Open Sans", sans-serif',taskMargin:50,activationWidth:10,textPlacement:"fo",actorColours:["#8FBC8F","#7CFC00","#00FFFF","#20B2AA","#B0E0E6","#FFFFE0"],sectionFills:["#191970","#8B008B","#4B0082","#2F4F4F","#800000","#8B4513","#00008B"],sectionColours:["#fff"],titleColor:"",titleFontFamily:'"trebuchet ms", verdana, arial, sans-serif',titleFontSize:"4ex"},class:{useMaxWidth:!0,titleTopMargin:25,arrowMarkerAbsolute:!1,dividerMargin:10,padding:5,textHeight:10,defaultRenderer:"dagre-wrapper",htmlLabels:!1,hideEmptyMembersBox:!1},state:{useMaxWidth:!0,titleTopMargin:25,dividerMargin:10,sizeUnit:5,padding:8,textHeight:10,titleShift:-15,noteMargin:10,forkWidth:70,forkHeight:7,miniPadding:2,fontSizeFactor:5.02,fontSize:24,labelHeight:16,edgeLengthFactor:"20",compositTitleSize:35,radius:5,defaultRenderer:"dagre-wrapper"},er:{useMaxWidth:!0,titleTopMargin:25,diagramPadding:20,layoutDirection:"TB",minEntityWidth:100,minEntityHeight:75,entityPadding:15,nodeSpacing:140,rankSpacing:80,stroke:"gray",fill:"honeydew",fontSize:12},pie:{useMaxWidth:!0,textPosition:.75},quadrantChart:{useMaxWidth:!0,chartWidth:500,chartHeight:500,titleFontSize:20,titlePadding:10,quadrantPadding:5,xAxisLabelPadding:5,yAxisLabelPadding:5,xAxisLabelFontSize:16,yAxisLabelFontSize:16,quadrantLabelFontSize:16,quadrantTextTopPadding:5,pointTextPadding:5,pointLabelFontSize:12,pointRadius:5,xAxisPosition:"top",yAxisPosition:"left",quadrantInternalBorderStrokeWidth:1,quadrantExternalBorderStrokeWidth:2},xyChart:{useMaxWidth:!0,width:700,height:500,titleFontSize:20,titlePadding:10,showDataLabel:!1,showTitle:!0,xAxis:{$ref:"#/$defs/XYChartAxisConfig",showLabel:!0,labelFontSize:14,labelPadding:5,showTitle:!0,titleFontSize:16,titlePadding:5,showTick:!0,tickLength:5,tickWidth:2,showAxisLine:!0,axisLineWidth:2},yAxis:{$ref:"#/$defs/XYChartAxisConfig",showLabel:!0,labelFontSize:14,labelPadding:5,showTitle:!0,titleFontSize:16,titlePadding:5,showTick:!0,tickLength:5,tickWidth:2,showAxisLine:!0,axisLineWidth:2},chartOrientation:"vertical",plotReservedSpacePercent:50},requirement:{useMaxWidth:!0,rect_fill:"#f9f9f9",text_color:"#333",rect_border_size:"0.5px",rect_border_color:"#bbb",rect_min_width:200,rect_min_height:200,fontSize:14,rect_padding:10,line_height:20},mindmap:{useMaxWidth:!0,padding:10,maxNodeWidth:200,layoutAlgorithm:"cose-bilkent"},kanban:{useMaxWidth:!0,padding:8,sectionWidth:200,ticketBaseUrl:""},timeline:{useMaxWidth:!0,diagramMarginX:50,diagramMarginY:10,leftMargin:150,width:150,height:50,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,messageAlign:"center",bottomMarginAdj:1,rightAngles:!1,taskFontSize:14,taskFontFamily:'"Open Sans", sans-serif',taskMargin:50,activationWidth:10,textPlacement:"fo",actorColours:["#8FBC8F","#7CFC00","#00FFFF","#20B2AA","#B0E0E6","#FFFFE0"],sectionFills:["#191970","#8B008B","#4B0082","#2F4F4F","#800000","#8B4513","#00008B"],sectionColours:["#fff"],disableMulticolor:!1},gitGraph:{useMaxWidth:!0,titleTopMargin:25,diagramPadding:8,nodeLabel:{width:75,height:100,x:-25,y:0},mainBranchName:"main",mainBranchOrder:0,showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0,parallelCommits:!1,arrowMarkerAbsolute:!1},c4:{useMaxWidth:!0,diagramMarginX:50,diagramMarginY:10,c4ShapeMargin:50,c4ShapePadding:20,width:216,height:60,boxMargin:10,c4ShapeInRow:4,nextLinePaddingX:0,c4BoundaryInRow:2,personFontSize:14,personFontFamily:'"Open Sans", sans-serif',personFontWeight:"normal",external_personFontSize:14,external_personFontFamily:'"Open Sans", sans-serif',external_personFontWeight:"normal",systemFontSize:14,systemFontFamily:'"Open Sans", sans-serif',systemFontWeight:"normal",external_systemFontSize:14,external_systemFontFamily:'"Open Sans", sans-serif',external_systemFontWeight:"normal",system_dbFontSize:14,system_dbFontFamily:'"Open Sans", sans-serif',system_dbFontWeight:"normal",external_system_dbFontSize:14,external_system_dbFontFamily:'"Open Sans", sans-serif',external_system_dbFontWeight:"normal",system_queueFontSize:14,system_queueFontFamily:'"Open Sans", sans-serif',system_queueFontWeight:"normal",external_system_queueFontSize:14,external_system_queueFontFamily:'"Open Sans", sans-serif',external_system_queueFontWeight:"normal",boundaryFontSize:14,boundaryFontFamily:'"Open Sans", sans-serif',boundaryFontWeight:"normal",messageFontSize:12,messageFontFamily:'"Open Sans", sans-serif',messageFontWeight:"normal",containerFontSize:14,containerFontFamily:'"Open Sans", sans-serif',containerFontWeight:"normal",external_containerFontSize:14,external_containerFontFamily:'"Open Sans", sans-serif',external_containerFontWeight:"normal",container_dbFontSize:14,container_dbFontFamily:'"Open Sans", sans-serif',container_dbFontWeight:"normal",external_container_dbFontSize:14,external_container_dbFontFamily:'"Open Sans", sans-serif',external_container_dbFontWeight:"normal",container_queueFontSize:14,container_queueFontFamily:'"Open Sans", sans-serif',container_queueFontWeight:"normal",external_container_queueFontSize:14,external_container_queueFontFamily:'"Open Sans", sans-serif',external_container_queueFontWeight:"normal",componentFontSize:14,componentFontFamily:'"Open Sans", sans-serif',componentFontWeight:"normal",external_componentFontSize:14,external_componentFontFamily:'"Open Sans", sans-serif',external_componentFontWeight:"normal",component_dbFontSize:14,component_dbFontFamily:'"Open Sans", sans-serif',component_dbFontWeight:"normal",external_component_dbFontSize:14,external_component_dbFontFamily:'"Open Sans", sans-serif',external_component_dbFontWeight:"normal",component_queueFontSize:14,component_queueFontFamily:'"Open Sans", sans-serif',component_queueFontWeight:"normal",external_component_queueFontSize:14,external_component_queueFontFamily:'"Open Sans", sans-serif',external_component_queueFontWeight:"normal",wrap:!0,wrapPadding:10,person_bg_color:"#08427B",person_border_color:"#073B6F",external_person_bg_color:"#686868",external_person_border_color:"#8A8A8A",system_bg_color:"#1168BD",system_border_color:"#3C7FC0",system_db_bg_color:"#1168BD",system_db_border_color:"#3C7FC0",system_queue_bg_color:"#1168BD",system_queue_border_color:"#3C7FC0",external_system_bg_color:"#999999",external_system_border_color:"#8A8A8A",external_system_db_bg_color:"#999999",external_system_db_border_color:"#8A8A8A",external_system_queue_bg_color:"#999999",external_system_queue_border_color:"#8A8A8A",container_bg_color:"#438DD5",container_border_color:"#3C7FC0",container_db_bg_color:"#438DD5",container_db_border_color:"#3C7FC0",container_queue_bg_color:"#438DD5",container_queue_border_color:"#3C7FC0",external_container_bg_color:"#B3B3B3",external_container_border_color:"#A6A6A6",external_container_db_bg_color:"#B3B3B3",external_container_db_border_color:"#A6A6A6",external_container_queue_bg_color:"#B3B3B3",external_container_queue_border_color:"#A6A6A6",component_bg_color:"#85BBF0",component_border_color:"#78A8D8",component_db_bg_color:"#85BBF0",component_db_border_color:"#78A8D8",component_queue_bg_color:"#85BBF0",component_queue_border_color:"#78A8D8",external_component_bg_color:"#CCCCCC",external_component_border_color:"#BFBFBF",external_component_db_bg_color:"#CCCCCC",external_component_db_border_color:"#BFBFBF",external_component_queue_bg_color:"#CCCCCC",external_component_queue_border_color:"#BFBFBF"},sankey:{useMaxWidth:!0,width:600,height:400,linkColor:"gradient",nodeAlignment:"justify",showValues:!0,prefix:"",suffix:""},block:{useMaxWidth:!0,padding:8},packet:{useMaxWidth:!0,rowHeight:32,bitWidth:32,bitsPerRow:32,showBits:!0,paddingX:5,paddingY:5},architecture:{useMaxWidth:!0,padding:40,iconSize:80,fontSize:16},radar:{useMaxWidth:!0,width:600,height:600,marginTop:50,marginRight:50,marginBottom:50,marginLeft:50,axisScaleFactor:1,axisLabelFactor:1.05,curveTension:.17},theme:"default",look:"classic",handDrawnSeed:0,layout:"dagre",maxTextSize:5e4,maxEdges:500,darkMode:!1,fontFamily:'"trebuchet ms", verdana, arial, sans-serif;',logLevel:5,securityLevel:"strict",startOnLoad:!0,arrowMarkerAbsolute:!1,secure:["secure","securityLevel","startOnLoad","maxTextSize","suppressErrorRendering","maxEdges"],legacyMathML:!1,forceLegacyMathML:!1,deterministicIds:!1,fontSize:16,markdownAutoWrap:!0,suppressErrorRendering:!1},i2={...yn,deterministicIDSeed:void 0,elk:{mergeEdges:!1,nodePlacementStrategy:"BRANDES_KOEPF",forceNodeModelOrder:!1,considerModelOrder:"NODES_AND_EDGES"},themeCSS:void 0,themeVariables:nr.default.getThemeVariables(),sequence:{...yn.sequence,messageFont:x(function(){return{fontFamily:this.messageFontFamily,fontSize:this.messageFontSize,fontWeight:this.messageFontWeight}},"messageFont"),noteFont:x(function(){return{fontFamily:this.noteFontFamily,fontSize:this.noteFontSize,fontWeight:this.noteFontWeight}},"noteFont"),actorFont:x(function(){return{fontFamily:this.actorFontFamily,fontSize:this.actorFontSize,fontWeight:this.actorFontWeight}},"actorFont")},class:{hideEmptyMembersBox:!1},gantt:{...yn.gantt,tickInterval:void 0,useWidth:void 0},c4:{...yn.c4,useWidth:void 0,personFont:x(function(){return{fontFamily:this.personFontFamily,fontSize:this.personFontSize,fontWeight:this.personFontWeight}},"personFont"),flowchart:{...yn.flowchart,inheritDir:!1},external_personFont:x(function(){return{fontFamily:this.external_personFontFamily,fontSize:this.external_personFontSize,fontWeight:this.external_personFontWeight}},"external_personFont"),systemFont:x(function(){return{fontFamily:this.systemFontFamily,fontSize:this.systemFontSize,fontWeight:this.systemFontWeight}},"systemFont"),external_systemFont:x(function(){return{fontFamily:this.external_systemFontFamily,fontSize:this.external_systemFontSize,fontWeight:this.external_systemFontWeight}},"external_systemFont"),system_dbFont:x(function(){return{fontFamily:this.system_dbFontFamily,fontSize:this.system_dbFontSize,fontWeight:this.system_dbFontWeight}},"system_dbFont"),external_system_dbFont:x(function(){return{fontFamily:this.external_system_dbFontFamily,fontSize:this.external_system_dbFontSize,fontWeight:this.external_system_dbFontWeight}},"external_system_dbFont"),system_queueFont:x(function(){return{fontFamily:this.system_queueFontFamily,fontSize:this.system_queueFontSize,fontWeight:this.system_queueFontWeight}},"system_queueFont"),external_system_queueFont:x(function(){return{fontFamily:this.external_system_queueFontFamily,fontSize:this.external_system_queueFontSize,fontWeight:this.external_system_queueFontWeight}},"external_system_queueFont"),containerFont:x(function(){return{fontFamily:this.containerFontFamily,fontSize:this.containerFontSize,fontWeight:this.containerFontWeight}},"containerFont"),external_containerFont:x(function(){return{fontFamily:this.external_containerFontFamily,fontSize:this.external_containerFontSize,fontWeight:this.external_containerFontWeight}},"external_containerFont"),container_dbFont:x(function(){return{fontFamily:this.container_dbFontFamily,fontSize:this.container_dbFontSize,fontWeight:this.container_dbFontWeight}},"container_dbFont"),external_container_dbFont:x(function(){return{fontFamily:this.external_container_dbFontFamily,fontSize:this.external_container_dbFontSize,fontWeight:this.external_container_dbFontWeight}},"external_container_dbFont"),container_queueFont:x(function(){return{fontFamily:this.container_queueFontFamily,fontSize:this.container_queueFontSize,fontWeight:this.container_queueFontWeight}},"container_queueFont"),external_container_queueFont:x(function(){return{fontFamily:this.external_container_queueFontFamily,fontSize:this.external_container_queueFontSize,fontWeight:this.external_container_queueFontWeight}},"external_container_queueFont"),componentFont:x(function(){return{fontFamily:this.componentFontFamily,fontSize:this.componentFontSize,fontWeight:this.componentFontWeight}},"componentFont"),external_componentFont:x(function(){return{fontFamily:this.external_componentFontFamily,fontSize:this.external_componentFontSize,fontWeight:this.external_componentFontWeight}},"external_componentFont"),component_dbFont:x(function(){return{fontFamily:this.component_dbFontFamily,fontSize:this.component_dbFontSize,fontWeight:this.component_dbFontWeight}},"component_dbFont"),external_component_dbFont:x(function(){return{fontFamily:this.external_component_dbFontFamily,fontSize:this.external_component_dbFontSize,fontWeight:this.external_component_dbFontWeight}},"external_component_dbFont"),component_queueFont:x(function(){return{fontFamily:this.component_queueFontFamily,fontSize:this.component_queueFontSize,fontWeight:this.component_queueFontWeight}},"component_queueFont"),external_component_queueFont:x(function(){return{fontFamily:this.external_component_queueFontFamily,fontSize:this.external_component_queueFontSize,fontWeight:this.external_component_queueFontWeight}},"external_component_queueFont"),boundaryFont:x(function(){return{fontFamily:this.boundaryFontFamily,fontSize:this.boundaryFontSize,fontWeight:this.boundaryFontWeight}},"boundaryFont"),messageFont:x(function(){return{fontFamily:this.messageFontFamily,fontSize:this.messageFontSize,fontWeight:this.messageFontWeight}},"messageFont")},pie:{...yn.pie,useWidth:984},xyChart:{...yn.xyChart,useWidth:void 0},requirement:{...yn.requirement,useWidth:void 0},packet:{...yn.packet},radar:{...yn.radar},treemap:{useMaxWidth:!0,padding:10,diagramPadding:8,showValues:!0,nodeWidth:100,nodeHeight:40,borderWidth:1,valueFontSize:12,labelFontSize:14,valueFormat:","}},n2=x((e,t="")=>Object.keys(e).reduce((n,a)=>Array.isArray(e[a])?n:typeof e[a]=="object"&&e[a]!==null?[...n,t+a,...n2(e[a],"")]:[...n,t+a],[]),"keyify"),VM=new Set(n2(i2,"")),r2=i2,Xu=x(e=>{if(at.debug("sanitizeDirective called with",e),!(typeof e!="object"||e==null)){if(Array.isArray(e)){e.forEach(t=>Xu(t));return}for(const t of Object.keys(e)){if(at.debug("Checking key",t),t.startsWith("__")||t.includes("proto")||t.includes("constr")||!VM.has(t)||e[t]==null){at.debug("sanitize deleting key: ",t),delete e[t];continue}if(typeof e[t]=="object"){at.debug("sanitizing object",t),Xu(e[t]);continue}const n=["themeCSS","fontFamily","altFontFamily"];for(const a of n)t.includes(a)&&(at.debug("sanitizing css option",t),e[t]=XM(e[t]))}if(e.themeVariables)for(const t of Object.keys(e.themeVariables)){const n=e.themeVariables[t];n!=null&&n.match&&!n.match(/^[\d "#%(),.;A-Za-z]+$/)&&(e.themeVariables[t]="")}at.debug("After sanitization",e)}},"sanitizeDirective"),XM=x(e=>{let t=0,n=0;for(const a of e){if(t<n)return"{ /* ERROR: Unbalanced CSS */ }";a==="{"?t++:a==="}"&&n++}return t!==n?"{ /* ERROR: Unbalanced CSS */ }":e},"sanitizeCss"),Fs=Object.freeze(r2),Si=Be({},Fs),Qu,ka=[],Mo=Be({},Fs),Ph=x((e,t)=>{let n=Be({},e),a={};for(const s of t)l2(s),a=Be(a,s);if(n=Be(n,a),a.theme&&a.theme in nr){const s=Be({},Qu),o=Be(s.themeVariables||{},a.themeVariables);n.theme&&n.theme in nr&&(n.themeVariables=nr[n.theme].getThemeVariables(o))}return Mo=n,o2(Mo),Mo},"updateCurrentConfig"),QM=x(e=>(Si=Be({},Fs),Si=Be(Si,e),e.theme&&nr[e.theme]&&(Si.themeVariables=nr[e.theme].getThemeVariables(e.themeVariables)),Ph(Si,ka),Si),"setSiteConfig"),KM=x(e=>{Qu=Be({},e)},"saveConfigFromInitialize"),ZM=x(e=>(Si=Be(Si,e),Ph(Si,ka),Si),"updateSiteConfig"),a2=x(()=>Be({},Si),"getSiteConfig"),s2=x(e=>(o2(e),Be(Mo,e),Je()),"setConfig"),Je=x(()=>Be({},Mo),"getConfig"),l2=x(e=>{e&&(["secure",...Si.secure??[]].forEach(t=>{Object.hasOwn(e,t)&&(at.debug(`Denied attempt to modify a secure key ${t}`,e[t]),delete e[t])}),Object.keys(e).forEach(t=>{t.startsWith("__")&&delete e[t]}),Object.keys(e).forEach(t=>{typeof e[t]=="string"&&(e[t].includes("<")||e[t].includes(">")||e[t].includes("url(data:"))&&delete e[t],typeof e[t]=="object"&&l2(e[t])}))},"sanitize"),JM=x(e=>{var t;Xu(e),e.fontFamily&&!((t=e.themeVariables)!=null&&t.fontFamily)&&(e.themeVariables={...e.themeVariables,fontFamily:e.fontFamily}),ka.push(e),Ph(Si,ka)},"addDirective"),Ku=x((e=Si)=>{ka=[],Ph(e,ka)},"reset"),t3={LAZY_LOAD_DEPRECATED:"The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."},rS={},e3=x(e=>{rS[e]||(at.warn(t3[e]),rS[e]=!0)},"issueWarning"),o2=x(e=>{e&&(e.lazyLoadedDiagrams||e.loadExternalDiagramsAtStartup)&&e3("LAZY_LOAD_DEPRECATED")},"checkConfig"),Kz=x(()=>{let e={};Qu&&(e=Be(e,Qu));for(const t of ka)e=Be(e,t);return e},"getUserDefinedConfig"),Ko=/<br\s*\/?>/gi,i3=x(e=>e?h2(e).replace(/\\n/g,"#br#").split("#br#"):[""],"getRows"),n3=(()=>{let e=!1;return()=>{e||(c2(),e=!0)}})();function c2(){const e="data-temp-href-target";Is.addHook("beforeSanitizeAttributes",t=>{t.tagName==="A"&&t.hasAttribute("target")&&t.setAttribute(e,t.getAttribute("target")??"")}),Is.addHook("afterSanitizeAttributes",t=>{t.tagName==="A"&&t.hasAttribute(e)&&(t.setAttribute("target",t.getAttribute(e)??""),t.removeAttribute(e),t.getAttribute("target")==="_blank"&&t.setAttribute("rel","noopener"))})}x(c2,"setupDompurifyHooks");var u2=x(e=>(n3(),Is.sanitize(e)),"removeScript"),aS=x((e,t)=>{var n;if(((n=t.flowchart)==null?void 0:n.htmlLabels)!==!1){const a=t.securityLevel;a==="antiscript"||a==="strict"?e=u2(e):a!=="loose"&&(e=h2(e),e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"),e=e.replace(/=/g,"&equals;"),e=l3(e))}return e},"sanitizeMore"),Vi=x((e,t)=>e&&(t.dompurifyConfig?e=Is.sanitize(aS(e,t),t.dompurifyConfig).toString():e=Is.sanitize(aS(e,t),{FORBID_TAGS:["style"]}).toString(),e),"sanitizeText"),r3=x((e,t)=>typeof e=="string"?Vi(e,t):e.flat().map(n=>Vi(n,t)),"sanitizeTextOrArray"),a3=x(e=>Ko.test(e),"hasBreaks"),s3=x(e=>e.split(Ko),"splitBreaks"),l3=x(e=>e.replace(/#br#/g,"<br/>"),"placeholderToBreak"),h2=x(e=>e.replace(Ko,"#br#"),"breakToPlaceholder"),d2=x(e=>{let t="";return e&&(t=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,t=CSS.escape(t)),t},"getUrl"),Ne=x(e=>!(e===!1||["false","null","0"].includes(String(e).trim().toLowerCase())),"evaluate"),o3=x(function(...e){const t=e.filter(n=>!isNaN(n));return Math.max(...t)},"getMax"),c3=x(function(...e){const t=e.filter(n=>!isNaN(n));return Math.min(...t)},"getMin"),sS=x(function(e){const t=e.split(/(,)/),n=[];for(let a=0;a<t.length;a++){let s=t[a];if(s===","&&a>0&&a+1<t.length){const o=t[a-1],u=t[a+1];u3(o,u)&&(s=o+","+u,a++,n.pop())}n.push(h3(s))}return n.join("")},"parseGenericTypes"),Kg=x((e,t)=>Math.max(0,e.split(t).length-1),"countOccurrence"),u3=x((e,t)=>{const n=Kg(e,"~"),a=Kg(t,"~");return n===1&&a===1},"shouldCombineSets"),h3=x(e=>{const t=Kg(e,"~");let n=!1;if(t<=1)return e;t%2!==0&&e.startsWith("~")&&(e=e.substring(1),n=!0);const a=[...e];let s=a.indexOf("~"),o=a.lastIndexOf("~");for(;s!==-1&&o!==-1&&s!==o;)a[s]="<",a[o]=">",s=a.indexOf("~"),o=a.lastIndexOf("~");return n&&a.unshift("~"),a.join("")},"processSet"),lS=x(()=>window.MathMLElement!==void 0,"isMathMLSupported"),Zg=/\$\$(.*)\$\$/g,$s=x(e=>{var t;return(((t=e.match(Zg))==null?void 0:t.length)??0)>0},"hasKatex"),Zz=x(async(e,t)=>{const n=document.createElement("div");n.innerHTML=await Zp(e,t),n.id="katex-temp",n.style.visibility="hidden",n.style.position="absolute",n.style.top="0";const a=document.querySelector("body");a==null||a.insertAdjacentElement("beforeend",n);const s={width:n.clientWidth,height:n.clientHeight};return n.remove(),s},"calculateMathMLDimensions"),d3=x(async(e,t)=>{if(!$s(e))return e;if(!(lS()||t.legacyMathML||t.forceLegacyMathML))return e.replace(Zg,"MathML is unsupported in this environment.");{const{default:n}=await Qt(async()=>{const{default:s}=await import("./katex-ChWnQ-fc.js");return{default:s}},[]),a=t.forceLegacyMathML||!lS()&&t.legacyMathML?"htmlAndMathml":"mathml";return e.split(Ko).map(s=>$s(s)?`<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${s}</div>`:`<div>${s}</div>`).join("").replace(Zg,(s,o)=>n.renderToString(o,{throwOnError:!0,displayMode:!0,output:a}).replace(/\n/g," ").replace(/<annotation.*<\/annotation>/g,""))}},"renderKatexUnsanitized"),Zp=x(async(e,t)=>Vi(await d3(e,t),t),"renderKatexSanitized"),Vs={getRows:i3,sanitizeText:Vi,sanitizeTextOrArray:r3,hasBreaks:a3,splitBreaks:s3,lineBreakRegex:Ko,removeScript:u2,getUrl:d2,evaluate:Ne,getMax:o3,getMin:c3},f3=x(function(e,t){for(let n of t)e.attr(n[0],n[1])},"d3Attrs"),g3=x(function(e,t,n){let a=new Map;return n?(a.set("width","100%"),a.set("style",`max-width: ${t}px;`)):(a.set("height",e),a.set("width",t)),a},"calculateSvgSizeAttrs"),f2=x(function(e,t,n,a){const s=g3(t,n,a);f3(e,s)},"configureSvgSize"),p3=x(function(e,t,n,a){const s=t.node().getBBox(),o=s.width,u=s.height;at.info(`SVG bounds: ${o}x${u}`,s);let c=0,f=0;at.info(`Graph bounds: ${c}x${f}`,e),c=o+n*2,f=u+n*2,at.info(`Calculated bounds: ${c}x${f}`),f2(t,f,c,a);const d=`${s.x-n} ${s.y-n} ${s.width+2*n} ${s.height+2*n}`;t.attr("viewBox",d)},"setupGraphViewbox"),Nu={},m3=x((e,t,n)=>{let a="";return e in Nu&&Nu[e]?a=Nu[e](n):at.warn(`No theme found for ${e}`),` & {
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
`},"getStyles"),y3=x((e,t)=>{t!==void 0&&(Nu[e]=t)},"addStylesForDiagram"),b3=m3,g2={};lM(g2,{clear:()=>v3,getAccDescription:()=>_3,getAccTitle:()=>x3,getDiagramTitle:()=>w3,setAccDescription:()=>C3,setAccTitle:()=>S3,setDiagramTitle:()=>T3});var Jp="",tm="",em="",im=x(e=>Vi(e,Je()),"sanitizeText"),v3=x(()=>{Jp="",em="",tm=""},"clear"),S3=x(e=>{Jp=im(e).replace(/^\s+/g,"")},"setAccTitle"),x3=x(()=>Jp,"getAccTitle"),C3=x(e=>{em=im(e).replace(/\n\s+/g,`
`)},"setAccDescription"),_3=x(()=>em,"getAccDescription"),T3=x(e=>{tm=im(e)},"setDiagramTitle"),w3=x(()=>tm,"getDiagramTitle"),oS=at,k3=Qp,Vt=Je,Jz=s2,tq=Fs,nm=x(e=>Vi(e,Vt()),"sanitizeText"),A3=p3,E3=x(()=>g2,"getCommonDb"),Zu={},Ju=x((e,t,n)=>{var a;Zu[e]&&oS.warn(`Diagram with id ${e} already registered. Overwriting.`),Zu[e]=t,n&&e2(e,n),y3(e,t.styles),(a=t.injectUtils)==null||a.call(t,oS,k3,Vt,nm,A3,E3(),()=>{})},"registerDiagram"),Jg=x(e=>{if(e in Zu)return Zu[e];throw new R3(e)},"getDiagram"),Ns,R3=(Ns=class extends Error{constructor(t){super(`Diagram ${t} not found.`)}},x(Ns,"DiagramNotFoundError"),Ns),M3={value:()=>{}};function p2(){for(var e=0,t=arguments.length,n={},a;e<t;++e){if(!(a=arguments[e]+"")||a in n||/[\s.]/.test(a))throw new Error("illegal type: "+a);n[a]=[]}return new Pu(n)}function Pu(e){this._=e}function L3(e,t){return e.trim().split(/^|\s+/).map(function(n){var a="",s=n.indexOf(".");if(s>=0&&(a=n.slice(s+1),n=n.slice(0,s)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:a}})}Pu.prototype=p2.prototype={constructor:Pu,on:function(e,t){var n=this._,a=L3(e+"",n),s,o=-1,u=a.length;if(arguments.length<2){for(;++o<u;)if((s=(e=a[o]).type)&&(s=D3(n[s],e.name)))return s;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<u;)if(s=(e=a[o]).type)n[s]=cS(n[s],e.name,t);else if(t==null)for(s in n)n[s]=cS(n[s],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Pu(e)},call:function(e,t){if((s=arguments.length-2)>0)for(var n=new Array(s),a=0,s,o;a<s;++a)n[a]=arguments[a+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],a=0,s=o.length;a<s;++a)o[a].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var a=this._[e],s=0,o=a.length;s<o;++s)a[s].value.apply(t,n)}};function D3(e,t){for(var n=0,a=e.length,s;n<a;++n)if((s=e[n]).name===t)return s.value}function cS(e,t,n){for(var a=0,s=e.length;a<s;++a)if(e[a].name===t){e[a]=M3,e=e.slice(0,a).concat(e.slice(a+1));break}return n!=null&&e.push({name:t,value:n}),e}var tp="http://www.w3.org/1999/xhtml";const uS={svg:"http://www.w3.org/2000/svg",xhtml:tp,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ih(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),uS.hasOwnProperty(t)?{space:uS[t],local:e}:e}function B3(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===tp&&t.documentElement.namespaceURI===tp?t.createElement(e):t.createElementNS(n,e)}}function O3(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function m2(e){var t=Ih(e);return(t.local?O3:B3)(t)}function N3(){}function rm(e){return e==null?N3:function(){return this.querySelector(e)}}function P3(e){typeof e!="function"&&(e=rm(e));for(var t=this._groups,n=t.length,a=new Array(n),s=0;s<n;++s)for(var o=t[s],u=o.length,c=a[s]=new Array(u),f,d,g=0;g<u;++g)(f=o[g])&&(d=e.call(f,f.__data__,g,o))&&("__data__"in f&&(d.__data__=f.__data__),c[g]=d);return new Oi(a,this._parents)}function I3(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function F3(){return[]}function y2(e){return e==null?F3:function(){return this.querySelectorAll(e)}}function $3(e){return function(){return I3(e.apply(this,arguments))}}function z3(e){typeof e=="function"?e=$3(e):e=y2(e);for(var t=this._groups,n=t.length,a=[],s=[],o=0;o<n;++o)for(var u=t[o],c=u.length,f,d=0;d<c;++d)(f=u[d])&&(a.push(e.call(f,f.__data__,d,u)),s.push(f));return new Oi(a,s)}function b2(e){return function(){return this.matches(e)}}function v2(e){return function(t){return t.matches(e)}}var q3=Array.prototype.find;function U3(e){return function(){return q3.call(this.children,e)}}function H3(){return this.firstElementChild}function G3(e){return this.select(e==null?H3:U3(typeof e=="function"?e:v2(e)))}var j3=Array.prototype.filter;function Y3(){return Array.from(this.children)}function W3(e){return function(){return j3.call(this.children,e)}}function V3(e){return this.selectAll(e==null?Y3:W3(typeof e=="function"?e:v2(e)))}function X3(e){typeof e!="function"&&(e=b2(e));for(var t=this._groups,n=t.length,a=new Array(n),s=0;s<n;++s)for(var o=t[s],u=o.length,c=a[s]=[],f,d=0;d<u;++d)(f=o[d])&&e.call(f,f.__data__,d,o)&&c.push(f);return new Oi(a,this._parents)}function S2(e){return new Array(e.length)}function Q3(){return new Oi(this._enter||this._groups.map(S2),this._parents)}function th(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}th.prototype={constructor:th,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function K3(e){return function(){return e}}function Z3(e,t,n,a,s,o){for(var u=0,c,f=t.length,d=o.length;u<d;++u)(c=t[u])?(c.__data__=o[u],a[u]=c):n[u]=new th(e,o[u]);for(;u<f;++u)(c=t[u])&&(s[u]=c)}function J3(e,t,n,a,s,o,u){var c,f,d=new Map,g=t.length,m=o.length,b=new Array(g),v;for(c=0;c<g;++c)(f=t[c])&&(b[c]=v=u.call(f,f.__data__,c,t)+"",d.has(v)?s[c]=f:d.set(v,f));for(c=0;c<m;++c)v=u.call(e,o[c],c,o)+"",(f=d.get(v))?(a[c]=f,f.__data__=o[c],d.delete(v)):n[c]=new th(e,o[c]);for(c=0;c<g;++c)(f=t[c])&&d.get(b[c])===f&&(s[c]=f)}function tL(e){return e.__data__}function eL(e,t){if(!arguments.length)return Array.from(this,tL);var n=t?J3:Z3,a=this._parents,s=this._groups;typeof e!="function"&&(e=K3(e));for(var o=s.length,u=new Array(o),c=new Array(o),f=new Array(o),d=0;d<o;++d){var g=a[d],m=s[d],b=m.length,v=iL(e.call(g,g&&g.__data__,d,a)),S=v.length,C=c[d]=new Array(S),w=u[d]=new Array(S),T=f[d]=new Array(b);n(g,m,C,w,T,v,t);for(var k=0,E=0,O,D;k<S;++k)if(O=C[k]){for(k>=E&&(E=k+1);!(D=w[E])&&++E<S;);O._next=D||null}}return u=new Oi(u,a),u._enter=c,u._exit=f,u}function iL(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function nL(){return new Oi(this._exit||this._groups.map(S2),this._parents)}function rL(e,t,n){var a=this.enter(),s=this,o=this.exit();return typeof e=="function"?(a=e(a),a&&(a=a.selection())):a=a.append(e+""),t!=null&&(s=t(s),s&&(s=s.selection())),n==null?o.remove():n(o),a&&s?a.merge(s).order():s}function aL(e){for(var t=e.selection?e.selection():e,n=this._groups,a=t._groups,s=n.length,o=a.length,u=Math.min(s,o),c=new Array(s),f=0;f<u;++f)for(var d=n[f],g=a[f],m=d.length,b=c[f]=new Array(m),v,S=0;S<m;++S)(v=d[S]||g[S])&&(b[S]=v);for(;f<s;++f)c[f]=n[f];return new Oi(c,this._parents)}function sL(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var a=e[t],s=a.length-1,o=a[s],u;--s>=0;)(u=a[s])&&(o&&u.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(u,o),o=u);return this}function lL(e){e||(e=oL);function t(m,b){return m&&b?e(m.__data__,b.__data__):!m-!b}for(var n=this._groups,a=n.length,s=new Array(a),o=0;o<a;++o){for(var u=n[o],c=u.length,f=s[o]=new Array(c),d,g=0;g<c;++g)(d=u[g])&&(f[g]=d);f.sort(t)}return new Oi(s,this._parents).order()}function oL(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function cL(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function uL(){return Array.from(this)}function hL(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var a=e[t],s=0,o=a.length;s<o;++s){var u=a[s];if(u)return u}return null}function dL(){let e=0;for(const t of this)++e;return e}function fL(){return!this.node()}function gL(e){for(var t=this._groups,n=0,a=t.length;n<a;++n)for(var s=t[n],o=0,u=s.length,c;o<u;++o)(c=s[o])&&e.call(c,c.__data__,o,s);return this}function pL(e){return function(){this.removeAttribute(e)}}function mL(e){return function(){this.removeAttributeNS(e.space,e.local)}}function yL(e,t){return function(){this.setAttribute(e,t)}}function bL(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function vL(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function SL(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function xL(e,t){var n=Ih(e);if(arguments.length<2){var a=this.node();return n.local?a.getAttributeNS(n.space,n.local):a.getAttribute(n)}return this.each((t==null?n.local?mL:pL:typeof t=="function"?n.local?SL:vL:n.local?bL:yL)(n,t))}function x2(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function CL(e){return function(){this.style.removeProperty(e)}}function _L(e,t,n){return function(){this.style.setProperty(e,t,n)}}function TL(e,t,n){return function(){var a=t.apply(this,arguments);a==null?this.style.removeProperty(e):this.style.setProperty(e,a,n)}}function wL(e,t,n){return arguments.length>1?this.each((t==null?CL:typeof t=="function"?TL:_L)(e,t,n??"")):zs(this.node(),e)}function zs(e,t){return e.style.getPropertyValue(t)||x2(e).getComputedStyle(e,null).getPropertyValue(t)}function kL(e){return function(){delete this[e]}}function AL(e,t){return function(){this[e]=t}}function EL(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function RL(e,t){return arguments.length>1?this.each((t==null?kL:typeof t=="function"?EL:AL)(e,t)):this.node()[e]}function C2(e){return e.trim().split(/^|\s+/)}function am(e){return e.classList||new _2(e)}function _2(e){this._node=e,this._names=C2(e.getAttribute("class")||"")}_2.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function T2(e,t){for(var n=am(e),a=-1,s=t.length;++a<s;)n.add(t[a])}function w2(e,t){for(var n=am(e),a=-1,s=t.length;++a<s;)n.remove(t[a])}function ML(e){return function(){T2(this,e)}}function LL(e){return function(){w2(this,e)}}function DL(e,t){return function(){(t.apply(this,arguments)?T2:w2)(this,e)}}function BL(e,t){var n=C2(e+"");if(arguments.length<2){for(var a=am(this.node()),s=-1,o=n.length;++s<o;)if(!a.contains(n[s]))return!1;return!0}return this.each((typeof t=="function"?DL:t?ML:LL)(n,t))}function OL(){this.textContent=""}function NL(e){return function(){this.textContent=e}}function PL(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function IL(e){return arguments.length?this.each(e==null?OL:(typeof e=="function"?PL:NL)(e)):this.node().textContent}function FL(){this.innerHTML=""}function $L(e){return function(){this.innerHTML=e}}function zL(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function qL(e){return arguments.length?this.each(e==null?FL:(typeof e=="function"?zL:$L)(e)):this.node().innerHTML}function UL(){this.nextSibling&&this.parentNode.appendChild(this)}function HL(){return this.each(UL)}function GL(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function jL(){return this.each(GL)}function YL(e){var t=typeof e=="function"?e:m2(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function WL(){return null}function VL(e,t){var n=typeof e=="function"?e:m2(e),a=t==null?WL:typeof t=="function"?t:rm(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),a.apply(this,arguments)||null)})}function XL(){var e=this.parentNode;e&&e.removeChild(this)}function QL(){return this.each(XL)}function KL(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function ZL(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function JL(e){return this.select(e?ZL:KL)}function tD(e){return arguments.length?this.property("__data__",e):this.node().__data__}function eD(e){return function(t){e.call(this,t,this.__data__)}}function iD(e){return e.trim().split(/^|\s+/).map(function(t){var n="",a=t.indexOf(".");return a>=0&&(n=t.slice(a+1),t=t.slice(0,a)),{type:t,name:n}})}function nD(e){return function(){var t=this.__on;if(t){for(var n=0,a=-1,s=t.length,o;n<s;++n)o=t[n],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):t[++a]=o;++a?t.length=a:delete this.__on}}}function rD(e,t,n){return function(){var a=this.__on,s,o=eD(t);if(a){for(var u=0,c=a.length;u<c;++u)if((s=a[u]).type===e.type&&s.name===e.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=o,s.options=n),s.value=t;return}}this.addEventListener(e.type,o,n),s={type:e.type,name:e.name,value:t,listener:o,options:n},a?a.push(s):this.__on=[s]}}function aD(e,t,n){var a=iD(e+""),s,o=a.length,u;if(arguments.length<2){var c=this.node().__on;if(c){for(var f=0,d=c.length,g;f<d;++f)for(s=0,g=c[f];s<o;++s)if((u=a[s]).type===g.type&&u.name===g.name)return g.value}return}for(c=t?rD:nD,s=0;s<o;++s)this.each(c(a[s],t,n));return this}function k2(e,t,n){var a=x2(e),s=a.CustomEvent;typeof s=="function"?s=new s(t,n):(s=a.document.createEvent("Event"),n?(s.initEvent(t,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(t,!1,!1)),e.dispatchEvent(s)}function sD(e,t){return function(){return k2(this,e,t)}}function lD(e,t){return function(){return k2(this,e,t.apply(this,arguments))}}function oD(e,t){return this.each((typeof t=="function"?lD:sD)(e,t))}function*cD(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var a=e[t],s=0,o=a.length,u;s<o;++s)(u=a[s])&&(yield u)}var A2=[null];function Oi(e,t){this._groups=e,this._parents=t}function Zo(){return new Oi([[document.documentElement]],A2)}function uD(){return this}Oi.prototype=Zo.prototype={constructor:Oi,select:P3,selectAll:z3,selectChild:G3,selectChildren:V3,filter:X3,data:eL,enter:Q3,exit:nL,join:rL,merge:aL,selection:uD,order:sL,sort:lL,call:cL,nodes:uL,node:hL,size:dL,empty:fL,each:gL,attr:xL,style:wL,property:RL,classed:BL,text:IL,html:qL,raise:HL,lower:jL,append:YL,insert:VL,remove:QL,clone:JL,datum:tD,on:aD,dispatch:oD,[Symbol.iterator]:cD};function jt(e){return typeof e=="string"?new Oi([[document.querySelector(e)]],[document.documentElement]):new Oi([[e]],A2)}function sm(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function E2(e,t){var n=Object.create(e.prototype);for(var a in t)n[a]=t[a];return n}function Jo(){}var Oo=.7,eh=1/Oo,As="\\s*([+-]?\\d+)\\s*",No="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",hD=/^#([0-9a-f]{3,8})$/,dD=new RegExp(`^rgb\\(${As},${As},${As}\\)$`),fD=new RegExp(`^rgb\\(${xn},${xn},${xn}\\)$`),gD=new RegExp(`^rgba\\(${As},${As},${As},${No}\\)$`),pD=new RegExp(`^rgba\\(${xn},${xn},${xn},${No}\\)$`),mD=new RegExp(`^hsl\\(${No},${xn},${xn}\\)$`),yD=new RegExp(`^hsla\\(${No},${xn},${xn},${No}\\)$`),hS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};sm(Jo,Po,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:dS,formatHex:dS,formatHex8:bD,formatHsl:vD,formatRgb:fS,toString:fS});function dS(){return this.rgb().formatHex()}function bD(){return this.rgb().formatHex8()}function vD(){return R2(this).formatHsl()}function fS(){return this.rgb().formatRgb()}function Po(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=hD.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?gS(t):n===3?new Ci(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?xu(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?xu(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=dD.exec(e))?new Ci(t[1],t[2],t[3],1):(t=fD.exec(e))?new Ci(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=gD.exec(e))?xu(t[1],t[2],t[3],t[4]):(t=pD.exec(e))?xu(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=mD.exec(e))?yS(t[1],t[2]/100,t[3]/100,1):(t=yD.exec(e))?yS(t[1],t[2]/100,t[3]/100,t[4]):hS.hasOwnProperty(e)?gS(hS[e]):e==="transparent"?new Ci(NaN,NaN,NaN,0):null}function gS(e){return new Ci(e>>16&255,e>>8&255,e&255,1)}function xu(e,t,n,a){return a<=0&&(e=t=n=NaN),new Ci(e,t,n,a)}function SD(e){return e instanceof Jo||(e=Po(e)),e?(e=e.rgb(),new Ci(e.r,e.g,e.b,e.opacity)):new Ci}function ep(e,t,n,a){return arguments.length===1?SD(e):new Ci(e,t,n,a??1)}function Ci(e,t,n,a){this.r=+e,this.g=+t,this.b=+n,this.opacity=+a}sm(Ci,ep,E2(Jo,{brighter(e){return e=e==null?eh:Math.pow(eh,e),new Ci(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Oo:Math.pow(Oo,e),new Ci(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ci(_a(this.r),_a(this.g),_a(this.b),ih(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:pS,formatHex:pS,formatHex8:xD,formatRgb:mS,toString:mS}));function pS(){return`#${va(this.r)}${va(this.g)}${va(this.b)}`}function xD(){return`#${va(this.r)}${va(this.g)}${va(this.b)}${va((isNaN(this.opacity)?1:this.opacity)*255)}`}function mS(){const e=ih(this.opacity);return`${e===1?"rgb(":"rgba("}${_a(this.r)}, ${_a(this.g)}, ${_a(this.b)}${e===1?")":`, ${e})`}`}function ih(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function _a(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function va(e){return e=_a(e),(e<16?"0":"")+e.toString(16)}function yS(e,t,n,a){return a<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new rn(e,t,n,a)}function R2(e){if(e instanceof rn)return new rn(e.h,e.s,e.l,e.opacity);if(e instanceof Jo||(e=Po(e)),!e)return new rn;if(e instanceof rn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,a=e.b/255,s=Math.min(t,n,a),o=Math.max(t,n,a),u=NaN,c=o-s,f=(o+s)/2;return c?(t===o?u=(n-a)/c+(n<a)*6:n===o?u=(a-t)/c+2:u=(t-n)/c+4,c/=f<.5?o+s:2-o-s,u*=60):c=f>0&&f<1?0:u,new rn(u,c,f,e.opacity)}function CD(e,t,n,a){return arguments.length===1?R2(e):new rn(e,t,n,a??1)}function rn(e,t,n,a){this.h=+e,this.s=+t,this.l=+n,this.opacity=+a}sm(rn,CD,E2(Jo,{brighter(e){return e=e==null?eh:Math.pow(eh,e),new rn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Oo:Math.pow(Oo,e),new rn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,a=n+(n<.5?n:1-n)*t,s=2*n-a;return new Ci(Eg(e>=240?e-240:e+120,s,a),Eg(e,s,a),Eg(e<120?e+240:e-120,s,a),this.opacity)},clamp(){return new rn(bS(this.h),Cu(this.s),Cu(this.l),ih(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=ih(this.opacity);return`${e===1?"hsl(":"hsla("}${bS(this.h)}, ${Cu(this.s)*100}%, ${Cu(this.l)*100}%${e===1?")":`, ${e})`}`}}));function bS(e){return e=(e||0)%360,e<0?e+360:e}function Cu(e){return Math.max(0,Math.min(1,e||0))}function Eg(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const lm=e=>()=>e;function M2(e,t){return function(n){return e+n*t}}function _D(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(a){return Math.pow(e+a*t,n)}}function eq(e,t){var n=t-e;return n?M2(e,n>180||n<-180?n-360*Math.round(n/360):n):lm(isNaN(e)?t:e)}function TD(e){return(e=+e)==1?L2:function(t,n){return n-t?_D(t,n,e):lm(isNaN(t)?n:t)}}function L2(e,t){var n=t-e;return n?M2(e,n):lm(isNaN(e)?t:e)}const vS=function e(t){var n=TD(t);function a(s,o){var u=n((s=ep(s)).r,(o=ep(o)).r),c=n(s.g,o.g),f=n(s.b,o.b),d=L2(s.opacity,o.opacity);return function(g){return s.r=u(g),s.g=c(g),s.b=f(g),s.opacity=d(g),s+""}}return a.gamma=e,a}(1);function Pr(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var ip=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Rg=new RegExp(ip.source,"g");function wD(e){return function(){return e}}function kD(e){return function(t){return e(t)+""}}function AD(e,t){var n=ip.lastIndex=Rg.lastIndex=0,a,s,o,u=-1,c=[],f=[];for(e=e+"",t=t+"";(a=ip.exec(e))&&(s=Rg.exec(t));)(o=s.index)>n&&(o=t.slice(n,o),c[u]?c[u]+=o:c[++u]=o),(a=a[0])===(s=s[0])?c[u]?c[u]+=s:c[++u]=s:(c[++u]=null,f.push({i:u,x:Pr(a,s)})),n=Rg.lastIndex;return n<t.length&&(o=t.slice(n),c[u]?c[u]+=o:c[++u]=o),c.length<2?f[0]?kD(f[0].x):wD(t):(t=f.length,function(d){for(var g=0,m;g<t;++g)c[(m=f[g]).i]=m.x(d);return c.join("")})}var SS=180/Math.PI,np={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function D2(e,t,n,a,s,o){var u,c,f;return(u=Math.sqrt(e*e+t*t))&&(e/=u,t/=u),(f=e*n+t*a)&&(n-=e*f,a-=t*f),(c=Math.sqrt(n*n+a*a))&&(n/=c,a/=c,f/=c),e*a<t*n&&(e=-e,t=-t,f=-f,u=-u),{translateX:s,translateY:o,rotate:Math.atan2(t,e)*SS,skewX:Math.atan(f)*SS,scaleX:u,scaleY:c}}var _u;function ED(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?np:D2(t.a,t.b,t.c,t.d,t.e,t.f)}function RD(e){return e==null||(_u||(_u=document.createElementNS("http://www.w3.org/2000/svg","g")),_u.setAttribute("transform",e),!(e=_u.transform.baseVal.consolidate()))?np:(e=e.matrix,D2(e.a,e.b,e.c,e.d,e.e,e.f))}function B2(e,t,n,a){function s(d){return d.length?d.pop()+" ":""}function o(d,g,m,b,v,S){if(d!==m||g!==b){var C=v.push("translate(",null,t,null,n);S.push({i:C-4,x:Pr(d,m)},{i:C-2,x:Pr(g,b)})}else(m||b)&&v.push("translate("+m+t+b+n)}function u(d,g,m,b){d!==g?(d-g>180?g+=360:g-d>180&&(d+=360),b.push({i:m.push(s(m)+"rotate(",null,a)-2,x:Pr(d,g)})):g&&m.push(s(m)+"rotate("+g+a)}function c(d,g,m,b){d!==g?b.push({i:m.push(s(m)+"skewX(",null,a)-2,x:Pr(d,g)}):g&&m.push(s(m)+"skewX("+g+a)}function f(d,g,m,b,v,S){if(d!==m||g!==b){var C=v.push(s(v)+"scale(",null,",",null,")");S.push({i:C-4,x:Pr(d,m)},{i:C-2,x:Pr(g,b)})}else(m!==1||b!==1)&&v.push(s(v)+"scale("+m+","+b+")")}return function(d,g){var m=[],b=[];return d=e(d),g=e(g),o(d.translateX,d.translateY,g.translateX,g.translateY,m,b),u(d.rotate,g.rotate,m,b),c(d.skewX,g.skewX,m,b),f(d.scaleX,d.scaleY,g.scaleX,g.scaleY,m,b),d=g=null,function(v){for(var S=-1,C=b.length,w;++S<C;)m[(w=b[S]).i]=w.x(v);return m.join("")}}}var MD=B2(ED,"px, ","px)","deg)"),LD=B2(RD,", ",")",")"),qs=0,So=0,uo=0,O2=1e3,nh,xo,rh=0,Aa=0,Fh=0,Io=typeof performance=="object"&&performance.now?performance:Date,N2=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function om(){return Aa||(N2(DD),Aa=Io.now()+Fh)}function DD(){Aa=0}function ah(){this._call=this._time=this._next=null}ah.prototype=P2.prototype={constructor:ah,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?om():+n)+(t==null?0:+t),!this._next&&xo!==this&&(xo?xo._next=this:nh=this,xo=this),this._call=e,this._time=n,rp()},stop:function(){this._call&&(this._call=null,this._time=1/0,rp())}};function P2(e,t,n){var a=new ah;return a.restart(e,t,n),a}function BD(){om(),++qs;for(var e=nh,t;e;)(t=Aa-e._time)>=0&&e._call.call(void 0,t),e=e._next;--qs}function xS(){Aa=(rh=Io.now())+Fh,qs=So=0;try{BD()}finally{qs=0,ND(),Aa=0}}function OD(){var e=Io.now(),t=e-rh;t>O2&&(Fh-=t,rh=e)}function ND(){for(var e,t=nh,n,a=1/0;t;)t._call?(a>t._time&&(a=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:nh=n);xo=e,rp(a)}function rp(e){if(!qs){So&&(So=clearTimeout(So));var t=e-Aa;t>24?(e<1/0&&(So=setTimeout(xS,e-Io.now()-Fh)),uo&&(uo=clearInterval(uo))):(uo||(rh=Io.now(),uo=setInterval(OD,O2)),qs=1,N2(xS))}}function CS(e,t,n){var a=new ah;return t=t==null?0:+t,a.restart(s=>{a.stop(),e(s+t)},t,n),a}var PD=p2("start","end","cancel","interrupt"),ID=[],I2=0,_S=1,ap=2,Iu=3,TS=4,sp=5,Fu=6;function $h(e,t,n,a,s,o){var u=e.__transition;if(!u)e.__transition={};else if(n in u)return;FD(e,n,{name:t,index:a,group:s,on:PD,tween:ID,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:I2})}function cm(e,t){var n=on(e,t);if(n.state>I2)throw new Error("too late; already scheduled");return n}function An(e,t){var n=on(e,t);if(n.state>Iu)throw new Error("too late; already running");return n}function on(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function FD(e,t,n){var a=e.__transition,s;a[t]=n,n.timer=P2(o,0,n.time);function o(d){n.state=_S,n.timer.restart(u,n.delay,n.time),n.delay<=d&&u(d-n.delay)}function u(d){var g,m,b,v;if(n.state!==_S)return f();for(g in a)if(v=a[g],v.name===n.name){if(v.state===Iu)return CS(u);v.state===TS?(v.state=Fu,v.timer.stop(),v.on.call("interrupt",e,e.__data__,v.index,v.group),delete a[g]):+g<t&&(v.state=Fu,v.timer.stop(),v.on.call("cancel",e,e.__data__,v.index,v.group),delete a[g])}if(CS(function(){n.state===Iu&&(n.state=TS,n.timer.restart(c,n.delay,n.time),c(d))}),n.state=ap,n.on.call("start",e,e.__data__,n.index,n.group),n.state===ap){for(n.state=Iu,s=new Array(b=n.tween.length),g=0,m=-1;g<b;++g)(v=n.tween[g].value.call(e,e.__data__,n.index,n.group))&&(s[++m]=v);s.length=m+1}}function c(d){for(var g=d<n.duration?n.ease.call(null,d/n.duration):(n.timer.restart(f),n.state=sp,1),m=-1,b=s.length;++m<b;)s[m].call(e,g);n.state===sp&&(n.on.call("end",e,e.__data__,n.index,n.group),f())}function f(){n.state=Fu,n.timer.stop(),delete a[t];for(var d in a)return;delete e.__transition}}function $D(e,t){var n=e.__transition,a,s,o=!0,u;if(n){t=t==null?null:t+"";for(u in n){if((a=n[u]).name!==t){o=!1;continue}s=a.state>ap&&a.state<sp,a.state=Fu,a.timer.stop(),a.on.call(s?"interrupt":"cancel",e,e.__data__,a.index,a.group),delete n[u]}o&&delete e.__transition}}function zD(e){return this.each(function(){$D(this,e)})}function qD(e,t){var n,a;return function(){var s=An(this,e),o=s.tween;if(o!==n){a=n=o;for(var u=0,c=a.length;u<c;++u)if(a[u].name===t){a=a.slice(),a.splice(u,1);break}}s.tween=a}}function UD(e,t,n){var a,s;if(typeof n!="function")throw new Error;return function(){var o=An(this,e),u=o.tween;if(u!==a){s=(a=u).slice();for(var c={name:t,value:n},f=0,d=s.length;f<d;++f)if(s[f].name===t){s[f]=c;break}f===d&&s.push(c)}o.tween=s}}function HD(e,t){var n=this._id;if(e+="",arguments.length<2){for(var a=on(this.node(),n).tween,s=0,o=a.length,u;s<o;++s)if((u=a[s]).name===e)return u.value;return null}return this.each((t==null?qD:UD)(n,e,t))}function um(e,t,n){var a=e._id;return e.each(function(){var s=An(this,a);(s.value||(s.value={}))[t]=n.apply(this,arguments)}),function(s){return on(s,a).value[t]}}function F2(e,t){var n;return(typeof t=="number"?Pr:t instanceof Po?vS:(n=Po(t))?(t=n,vS):AD)(e,t)}function GD(e){return function(){this.removeAttribute(e)}}function jD(e){return function(){this.removeAttributeNS(e.space,e.local)}}function YD(e,t,n){var a,s=n+"",o;return function(){var u=this.getAttribute(e);return u===s?null:u===a?o:o=t(a=u,n)}}function WD(e,t,n){var a,s=n+"",o;return function(){var u=this.getAttributeNS(e.space,e.local);return u===s?null:u===a?o:o=t(a=u,n)}}function VD(e,t,n){var a,s,o;return function(){var u,c=n(this),f;return c==null?void this.removeAttribute(e):(u=this.getAttribute(e),f=c+"",u===f?null:u===a&&f===s?o:(s=f,o=t(a=u,c)))}}function XD(e,t,n){var a,s,o;return function(){var u,c=n(this),f;return c==null?void this.removeAttributeNS(e.space,e.local):(u=this.getAttributeNS(e.space,e.local),f=c+"",u===f?null:u===a&&f===s?o:(s=f,o=t(a=u,c)))}}function QD(e,t){var n=Ih(e),a=n==="transform"?LD:F2;return this.attrTween(e,typeof t=="function"?(n.local?XD:VD)(n,a,um(this,"attr."+e,t)):t==null?(n.local?jD:GD)(n):(n.local?WD:YD)(n,a,t))}function KD(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function ZD(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function JD(e,t){var n,a;function s(){var o=t.apply(this,arguments);return o!==a&&(n=(a=o)&&ZD(e,o)),n}return s._value=t,s}function tB(e,t){var n,a;function s(){var o=t.apply(this,arguments);return o!==a&&(n=(a=o)&&KD(e,o)),n}return s._value=t,s}function eB(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var a=Ih(e);return this.tween(n,(a.local?JD:tB)(a,t))}function iB(e,t){return function(){cm(this,e).delay=+t.apply(this,arguments)}}function nB(e,t){return t=+t,function(){cm(this,e).delay=t}}function rB(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?iB:nB)(t,e)):on(this.node(),t).delay}function aB(e,t){return function(){An(this,e).duration=+t.apply(this,arguments)}}function sB(e,t){return t=+t,function(){An(this,e).duration=t}}function lB(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?aB:sB)(t,e)):on(this.node(),t).duration}function oB(e,t){if(typeof t!="function")throw new Error;return function(){An(this,e).ease=t}}function cB(e){var t=this._id;return arguments.length?this.each(oB(t,e)):on(this.node(),t).ease}function uB(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;An(this,e).ease=n}}function hB(e){if(typeof e!="function")throw new Error;return this.each(uB(this._id,e))}function dB(e){typeof e!="function"&&(e=b2(e));for(var t=this._groups,n=t.length,a=new Array(n),s=0;s<n;++s)for(var o=t[s],u=o.length,c=a[s]=[],f,d=0;d<u;++d)(f=o[d])&&e.call(f,f.__data__,d,o)&&c.push(f);return new sr(a,this._parents,this._name,this._id)}function fB(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,a=t.length,s=n.length,o=Math.min(a,s),u=new Array(a),c=0;c<o;++c)for(var f=t[c],d=n[c],g=f.length,m=u[c]=new Array(g),b,v=0;v<g;++v)(b=f[v]||d[v])&&(m[v]=b);for(;c<a;++c)u[c]=t[c];return new sr(u,this._parents,this._name,this._id)}function gB(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function pB(e,t,n){var a,s,o=gB(t)?cm:An;return function(){var u=o(this,e),c=u.on;c!==a&&(s=(a=c).copy()).on(t,n),u.on=s}}function mB(e,t){var n=this._id;return arguments.length<2?on(this.node(),n).on.on(e):this.each(pB(n,e,t))}function yB(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function bB(){return this.on("end.remove",yB(this._id))}function vB(e){var t=this._name,n=this._id;typeof e!="function"&&(e=rm(e));for(var a=this._groups,s=a.length,o=new Array(s),u=0;u<s;++u)for(var c=a[u],f=c.length,d=o[u]=new Array(f),g,m,b=0;b<f;++b)(g=c[b])&&(m=e.call(g,g.__data__,b,c))&&("__data__"in g&&(m.__data__=g.__data__),d[b]=m,$h(d[b],t,n,b,d,on(g,n)));return new sr(o,this._parents,t,n)}function SB(e){var t=this._name,n=this._id;typeof e!="function"&&(e=y2(e));for(var a=this._groups,s=a.length,o=[],u=[],c=0;c<s;++c)for(var f=a[c],d=f.length,g,m=0;m<d;++m)if(g=f[m]){for(var b=e.call(g,g.__data__,m,f),v,S=on(g,n),C=0,w=b.length;C<w;++C)(v=b[C])&&$h(v,t,n,C,b,S);o.push(b),u.push(g)}return new sr(o,u,t,n)}var xB=Zo.prototype.constructor;function CB(){return new xB(this._groups,this._parents)}function _B(e,t){var n,a,s;return function(){var o=zs(this,e),u=(this.style.removeProperty(e),zs(this,e));return o===u?null:o===n&&u===a?s:s=t(n=o,a=u)}}function $2(e){return function(){this.style.removeProperty(e)}}function TB(e,t,n){var a,s=n+"",o;return function(){var u=zs(this,e);return u===s?null:u===a?o:o=t(a=u,n)}}function wB(e,t,n){var a,s,o;return function(){var u=zs(this,e),c=n(this),f=c+"";return c==null&&(f=c=(this.style.removeProperty(e),zs(this,e))),u===f?null:u===a&&f===s?o:(s=f,o=t(a=u,c))}}function kB(e,t){var n,a,s,o="style."+t,u="end."+o,c;return function(){var f=An(this,e),d=f.on,g=f.value[o]==null?c||(c=$2(t)):void 0;(d!==n||s!==g)&&(a=(n=d).copy()).on(u,s=g),f.on=a}}function AB(e,t,n){var a=(e+="")=="transform"?MD:F2;return t==null?this.styleTween(e,_B(e,a)).on("end.style."+e,$2(e)):typeof t=="function"?this.styleTween(e,wB(e,a,um(this,"style."+e,t))).each(kB(this._id,e)):this.styleTween(e,TB(e,a,t),n).on("end.style."+e,null)}function EB(e,t,n){return function(a){this.style.setProperty(e,t.call(this,a),n)}}function RB(e,t,n){var a,s;function o(){var u=t.apply(this,arguments);return u!==s&&(a=(s=u)&&EB(e,u,n)),a}return o._value=t,o}function MB(e,t,n){var a="style."+(e+="");if(arguments.length<2)return(a=this.tween(a))&&a._value;if(t==null)return this.tween(a,null);if(typeof t!="function")throw new Error;return this.tween(a,RB(e,t,n??""))}function LB(e){return function(){this.textContent=e}}function DB(e){return function(){var t=e(this);this.textContent=t??""}}function BB(e){return this.tween("text",typeof e=="function"?DB(um(this,"text",e)):LB(e==null?"":e+""))}function OB(e){return function(t){this.textContent=e.call(this,t)}}function NB(e){var t,n;function a(){var s=e.apply(this,arguments);return s!==n&&(t=(n=s)&&OB(s)),t}return a._value=e,a}function PB(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,NB(e))}function IB(){for(var e=this._name,t=this._id,n=z2(),a=this._groups,s=a.length,o=0;o<s;++o)for(var u=a[o],c=u.length,f,d=0;d<c;++d)if(f=u[d]){var g=on(f,t);$h(f,e,n,d,u,{time:g.time+g.delay+g.duration,delay:0,duration:g.duration,ease:g.ease})}return new sr(a,this._parents,e,n)}function FB(){var e,t,n=this,a=n._id,s=n.size();return new Promise(function(o,u){var c={value:u},f={value:function(){--s===0&&o()}};n.each(function(){var d=An(this,a),g=d.on;g!==e&&(t=(e=g).copy(),t._.cancel.push(c),t._.interrupt.push(c),t._.end.push(f)),d.on=t}),s===0&&o()})}var $B=0;function sr(e,t,n,a){this._groups=e,this._parents=t,this._name=n,this._id=a}function z2(){return++$B}var Qn=Zo.prototype;sr.prototype={constructor:sr,select:vB,selectAll:SB,selectChild:Qn.selectChild,selectChildren:Qn.selectChildren,filter:dB,merge:fB,selection:CB,transition:IB,call:Qn.call,nodes:Qn.nodes,node:Qn.node,size:Qn.size,empty:Qn.empty,each:Qn.each,on:mB,attr:QD,attrTween:eB,style:AB,styleTween:MB,text:BB,textTween:PB,remove:bB,tween:HD,delay:rB,duration:lB,ease:cB,easeVarying:hB,end:FB,[Symbol.iterator]:Qn[Symbol.iterator]};function zB(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var qB={time:null,delay:0,duration:250,ease:zB};function UB(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function HB(e){var t,n;e instanceof sr?(t=e._id,e=e._name):(t=z2(),(n=qB).time=om(),e=e==null?null:e+"");for(var a=this._groups,s=a.length,o=0;o<s;++o)for(var u=a[o],c=u.length,f,d=0;d<c;++d)(f=u[d])&&$h(f,e,t,d,u,n||UB(f,t));return new sr(a,this._parents,e,t)}Zo.prototype.interrupt=zD;Zo.prototype.transition=HB;const lp=Math.PI,op=2*lp,pa=1e-6,GB=op-pa;function q2(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function jB(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return q2;const n=10**t;return function(a){this._+=a[0];for(let s=1,o=a.length;s<o;++s)this._+=Math.round(arguments[s]*n)/n+a[s]}}class YB{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?q2:jB(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,a,s){this._append`Q${+t},${+n},${this._x1=+a},${this._y1=+s}`}bezierCurveTo(t,n,a,s,o,u){this._append`C${+t},${+n},${+a},${+s},${this._x1=+o},${this._y1=+u}`}arcTo(t,n,a,s,o){if(t=+t,n=+n,a=+a,s=+s,o=+o,o<0)throw new Error(`negative radius: ${o}`);let u=this._x1,c=this._y1,f=a-t,d=s-n,g=u-t,m=c-n,b=g*g+m*m;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(b>pa)if(!(Math.abs(m*f-d*g)>pa)||!o)this._append`L${this._x1=t},${this._y1=n}`;else{let v=a-u,S=s-c,C=f*f+d*d,w=v*v+S*S,T=Math.sqrt(C),k=Math.sqrt(b),E=o*Math.tan((lp-Math.acos((C+b-w)/(2*T*k)))/2),O=E/k,D=E/T;Math.abs(O-1)>pa&&this._append`L${t+O*g},${n+O*m}`,this._append`A${o},${o},0,0,${+(m*v>g*S)},${this._x1=t+D*f},${this._y1=n+D*d}`}}arc(t,n,a,s,o,u){if(t=+t,n=+n,a=+a,u=!!u,a<0)throw new Error(`negative radius: ${a}`);let c=a*Math.cos(s),f=a*Math.sin(s),d=t+c,g=n+f,m=1^u,b=u?s-o:o-s;this._x1===null?this._append`M${d},${g}`:(Math.abs(this._x1-d)>pa||Math.abs(this._y1-g)>pa)&&this._append`L${d},${g}`,a&&(b<0&&(b=b%op+op),b>GB?this._append`A${a},${a},0,1,${m},${t-c},${n-f}A${a},${a},0,1,${m},${this._x1=d},${this._y1=g}`:b>pa&&this._append`A${a},${a},0,${+(b>=lp)},${m},${this._x1=t+a*Math.cos(o)},${this._y1=n+a*Math.sin(o)}`)}rect(t,n,a,s){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${a=+a}v${+s}h${-a}Z`}toString(){return this._}}function xs(e){return function(){return e}}const iq=Math.abs,nq=Math.atan2,rq=Math.cos,aq=Math.max,sq=Math.min,lq=Math.sin,oq=Math.sqrt,wS=1e-12,hm=Math.PI,kS=hm/2,cq=2*hm;function uq(e){return e>1?0:e<-1?hm:Math.acos(e)}function hq(e){return e>=1?kS:e<=-1?-kS:Math.asin(e)}function WB(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const a=Math.floor(n);if(!(a>=0))throw new RangeError(`invalid digits: ${n}`);t=a}return e},()=>new YB(t)}function VB(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function U2(e){this._context=e}U2.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function sh(e){return new U2(e)}function XB(e){return e[0]}function QB(e){return e[1]}function KB(e,t){var n=xs(!0),a=null,s=sh,o=null,u=WB(c);e=typeof e=="function"?e:e===void 0?XB:xs(e),t=typeof t=="function"?t:t===void 0?QB:xs(t);function c(f){var d,g=(f=VB(f)).length,m,b=!1,v;for(a==null&&(o=s(v=u())),d=0;d<=g;++d)!(d<g&&n(m=f[d],d,f))===b&&((b=!b)?o.lineStart():o.lineEnd()),b&&o.point(+e(m,d,f),+t(m,d,f));if(v)return o=null,v+""||null}return c.x=function(f){return arguments.length?(e=typeof f=="function"?f:xs(+f),c):e},c.y=function(f){return arguments.length?(t=typeof f=="function"?f:xs(+f),c):t},c.defined=function(f){return arguments.length?(n=typeof f=="function"?f:xs(!!f),c):n},c.curve=function(f){return arguments.length?(s=f,a!=null&&(o=s(a)),c):s},c.context=function(f){return arguments.length?(f==null?a=o=null:o=s(a=f),c):a},c}class H2{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function G2(e){return new H2(e,!0)}function j2(e){return new H2(e,!1)}function $r(){}function lh(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function zh(e){this._context=e}zh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:lh(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:lh(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function $u(e){return new zh(e)}function Y2(e){this._context=e}Y2.prototype={areaStart:$r,areaEnd:$r,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:lh(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function ZB(e){return new Y2(e)}function W2(e){this._context=e}W2.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,a=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,a):this._context.moveTo(n,a);break;case 3:this._point=4;default:lh(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function JB(e){return new W2(e)}function V2(e,t){this._basis=new zh(e),this._beta=t}V2.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var e=this._x,t=this._y,n=e.length-1;if(n>0)for(var a=e[0],s=t[0],o=e[n]-a,u=t[n]-s,c=-1,f;++c<=n;)f=c/n,this._basis.point(this._beta*e[c]+(1-this._beta)*(a+f*o),this._beta*t[c]+(1-this._beta)*(s+f*u));this._x=this._y=null,this._basis.lineEnd()},point:function(e,t){this._x.push(+e),this._y.push(+t)}};const t4=function e(t){function n(a){return t===1?new zh(a):new V2(a,t)}return n.beta=function(a){return e(+a)},n}(.85);function oh(e,t,n){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-t),e._y2+e._k*(e._y1-n),e._x2,e._y2)}function dm(e,t){this._context=e,this._k=(1-t)/6}dm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:oh(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2,this._x1=e,this._y1=t;break;case 2:this._point=3;default:oh(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const X2=function e(t){function n(a){return new dm(a,t)}return n.tension=function(a){return e(+a)},n}(0);function fm(e,t){this._context=e,this._k=(1-t)/6}fm.prototype={areaStart:$r,areaEnd:$r,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:oh(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const e4=function e(t){function n(a){return new fm(a,t)}return n.tension=function(a){return e(+a)},n}(0);function gm(e,t){this._context=e,this._k=(1-t)/6}gm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:oh(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const i4=function e(t){function n(a){return new gm(a,t)}return n.tension=function(a){return e(+a)},n}(0);function pm(e,t,n){var a=e._x1,s=e._y1,o=e._x2,u=e._y2;if(e._l01_a>wS){var c=2*e._l01_2a+3*e._l01_a*e._l12_a+e._l12_2a,f=3*e._l01_a*(e._l01_a+e._l12_a);a=(a*c-e._x0*e._l12_2a+e._x2*e._l01_2a)/f,s=(s*c-e._y0*e._l12_2a+e._y2*e._l01_2a)/f}if(e._l23_a>wS){var d=2*e._l23_2a+3*e._l23_a*e._l12_a+e._l12_2a,g=3*e._l23_a*(e._l23_a+e._l12_a);o=(o*d+e._x1*e._l23_2a-t*e._l12_2a)/g,u=(u*d+e._y1*e._l23_2a-n*e._l12_2a)/g}e._context.bezierCurveTo(a,s,o,u,e._x2,e._y2)}function Q2(e,t){this._context=e,this._alpha=t}Q2.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,a=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+a*a,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3;default:pm(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const K2=function e(t){function n(a){return t?new Q2(a,t):new dm(a,0)}return n.alpha=function(a){return e(+a)},n}(.5);function Z2(e,t){this._context=e,this._alpha=t}Z2.prototype={areaStart:$r,areaEnd:$r,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,a=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+a*a,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:pm(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const n4=function e(t){function n(a){return t?new Z2(a,t):new fm(a,0)}return n.alpha=function(a){return e(+a)},n}(.5);function J2(e,t){this._context=e,this._alpha=t}J2.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,a=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+a*a,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:pm(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const r4=function e(t){function n(a){return t?new J2(a,t):new gm(a,0)}return n.alpha=function(a){return e(+a)},n}(.5);function t1(e){this._context=e}t1.prototype={areaStart:$r,areaEnd:$r,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function a4(e){return new t1(e)}function AS(e){return e<0?-1:1}function ES(e,t,n){var a=e._x1-e._x0,s=t-e._x1,o=(e._y1-e._y0)/(a||s<0&&-0),u=(n-e._y1)/(s||a<0&&-0),c=(o*s+u*a)/(a+s);return(AS(o)+AS(u))*Math.min(Math.abs(o),Math.abs(u),.5*Math.abs(c))||0}function RS(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function Mg(e,t,n){var a=e._x0,s=e._y0,o=e._x1,u=e._y1,c=(o-a)/3;e._context.bezierCurveTo(a+c,s+c*t,o-c,u-c*n,o,u)}function ch(e){this._context=e}ch.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Mg(this,this._t0,RS(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Mg(this,RS(this,n=ES(this,e,t)),n);break;default:Mg(this,this._t0,n=ES(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function e1(e){this._context=new i1(e)}(e1.prototype=Object.create(ch.prototype)).point=function(e,t){ch.prototype.point.call(this,t,e)};function i1(e){this._context=e}i1.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,a,s,o){this._context.bezierCurveTo(t,e,a,n,o,s)}};function n1(e){return new ch(e)}function r1(e){return new e1(e)}function a1(e){this._context=e}a1.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var a=MS(e),s=MS(t),o=0,u=1;u<n;++o,++u)this._context.bezierCurveTo(a[0][o],s[0][o],a[1][o],s[1][o],e[u],t[u]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function MS(e){var t,n=e.length-1,a,s=new Array(n),o=new Array(n),u=new Array(n);for(s[0]=0,o[0]=2,u[0]=e[0]+2*e[1],t=1;t<n-1;++t)s[t]=1,o[t]=4,u[t]=4*e[t]+2*e[t+1];for(s[n-1]=2,o[n-1]=7,u[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)a=s[t]/o[t-1],o[t]-=a,u[t]-=a*u[t-1];for(s[n-1]=u[n-1]/o[n-1],t=n-2;t>=0;--t)s[t]=(u[t]-s[t+1])/o[t];for(o[n-1]=(e[n]+s[n-1])/2,t=0;t<n-1;++t)o[t]=2*e[t+1]-s[t+1];return[s,o]}function s1(e){return new a1(e)}function qh(e,t){this._context=e,this._t=t}qh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function l1(e){return new qh(e,.5)}function o1(e){return new qh(e,0)}function c1(e){return new qh(e,1)}function Co(e,t,n){this.k=e,this.x=t,this.y=n}Co.prototype={constructor:Co,scale:function(e){return e===1?this:new Co(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Co(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Co.prototype;var s4=x(e=>{var s;const{securityLevel:t}=Vt();let n=jt("body");if(t==="sandbox"){const u=((s=jt(`#i${e}`).node())==null?void 0:s.contentDocument)??document;n=jt(u.body)}return n.select(`#${e}`)},"selectSvgElement");function mm(e){return typeof e>"u"||e===null}x(mm,"isNothing");function u1(e){return typeof e=="object"&&e!==null}x(u1,"isObject");function h1(e){return Array.isArray(e)?e:mm(e)?[]:[e]}x(h1,"toArray");function d1(e,t){var n,a,s,o;if(t)for(o=Object.keys(t),n=0,a=o.length;n<a;n+=1)s=o[n],e[s]=t[s];return e}x(d1,"extend");function f1(e,t){var n="",a;for(a=0;a<t;a+=1)n+=e;return n}x(f1,"repeat");function g1(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}x(g1,"isNegativeZero");var l4=mm,o4=u1,c4=h1,u4=f1,h4=g1,d4=d1,Oe={isNothing:l4,isObject:o4,toArray:c4,repeat:u4,isNegativeZero:h4,extend:d4};function ym(e,t){var n="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),a+" "+n):a}x(ym,"formatError");function Us(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=ym(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}x(Us,"YAMLException$1");Us.prototype=Object.create(Error.prototype);Us.prototype.constructor=Us;Us.prototype.toString=x(function(t){return this.name+": "+ym(this,t)},"toString");var xi=Us;function zu(e,t,n,a,s){var o="",u="",c=Math.floor(s/2)-1;return a-t>c&&(o=" ... ",t=a-c+o.length),n-a>c&&(u=" ...",n=a+c-u.length),{str:o+e.slice(t,n).replace(/\t/g,"→")+u,pos:a-t+o.length}}x(zu,"getLine");function qu(e,t){return Oe.repeat(" ",t-e.length)+e}x(qu,"padStart");function p1(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),typeof t.indent!="number"&&(t.indent=1),typeof t.linesBefore!="number"&&(t.linesBefore=3),typeof t.linesAfter!="number"&&(t.linesAfter=2);for(var n=/\r?\n|\r|\0/g,a=[0],s=[],o,u=-1;o=n.exec(e.buffer);)s.push(o.index),a.push(o.index+o[0].length),e.position<=o.index&&u<0&&(u=a.length-2);u<0&&(u=a.length-1);var c="",f,d,g=Math.min(e.line+t.linesAfter,s.length).toString().length,m=t.maxLength-(t.indent+g+3);for(f=1;f<=t.linesBefore&&!(u-f<0);f++)d=zu(e.buffer,a[u-f],s[u-f],e.position-(a[u]-a[u-f]),m),c=Oe.repeat(" ",t.indent)+qu((e.line-f+1).toString(),g)+" | "+d.str+`
`+c;for(d=zu(e.buffer,a[u],s[u],e.position,m),c+=Oe.repeat(" ",t.indent)+qu((e.line+1).toString(),g)+" | "+d.str+`
`,c+=Oe.repeat("-",t.indent+g+3+d.pos)+`^
`,f=1;f<=t.linesAfter&&!(u+f>=s.length);f++)d=zu(e.buffer,a[u+f],s[u+f],e.position-(a[u]-a[u+f]),m),c+=Oe.repeat(" ",t.indent)+qu((e.line+f+1).toString(),g)+" | "+d.str+`
`;return c.replace(/\n$/,"")}x(p1,"makeSnippet");var f4=p1,g4=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],p4=["scalar","sequence","mapping"];function m1(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(a){t[String(a)]=n})}),t}x(m1,"compileStyleAliases");function y1(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(g4.indexOf(n)===-1)throw new xi('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=m1(t.styleAliases||null),p4.indexOf(this.kind)===-1)throw new xi('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}x(y1,"Type$1");var ti=y1;function cp(e,t){var n=[];return e[t].forEach(function(a){var s=n.length;n.forEach(function(o,u){o.tag===a.tag&&o.kind===a.kind&&o.multi===a.multi&&(s=u)}),n[s]=a}),n}x(cp,"compileList");function b1(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function a(s){s.multi?(e.multi[s.kind].push(s),e.multi.fallback.push(s)):e[s.kind][s.tag]=e.fallback[s.tag]=s}for(x(a,"collectType"),t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(a);return e}x(b1,"compileMap");function uh(e){return this.extend(e)}x(uh,"Schema$1");uh.prototype.extend=x(function(t){var n=[],a=[];if(t instanceof ti)a.push(t);else if(Array.isArray(t))a=a.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(a=a.concat(t.explicit));else throw new xi("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(o){if(!(o instanceof ti))throw new xi("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new xi("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new xi("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(o){if(!(o instanceof ti))throw new xi("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var s=Object.create(uh.prototype);return s.implicit=(this.implicit||[]).concat(n),s.explicit=(this.explicit||[]).concat(a),s.compiledImplicit=cp(s,"implicit"),s.compiledExplicit=cp(s,"explicit"),s.compiledTypeMap=b1(s.compiledImplicit,s.compiledExplicit),s},"extend");var m4=uh,y4=new ti("tag:yaml.org,2002:str",{kind:"scalar",construct:x(function(e){return e!==null?e:""},"construct")}),b4=new ti("tag:yaml.org,2002:seq",{kind:"sequence",construct:x(function(e){return e!==null?e:[]},"construct")}),v4=new ti("tag:yaml.org,2002:map",{kind:"mapping",construct:x(function(e){return e!==null?e:{}},"construct")}),S4=new m4({explicit:[y4,b4,v4]});function v1(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}x(v1,"resolveYamlNull");function S1(){return null}x(S1,"constructYamlNull");function x1(e){return e===null}x(x1,"isNull");var x4=new ti("tag:yaml.org,2002:null",{kind:"scalar",resolve:v1,construct:S1,predicate:x1,represent:{canonical:x(function(){return"~"},"canonical"),lowercase:x(function(){return"null"},"lowercase"),uppercase:x(function(){return"NULL"},"uppercase"),camelcase:x(function(){return"Null"},"camelcase"),empty:x(function(){return""},"empty")},defaultStyle:"lowercase"});function C1(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}x(C1,"resolveYamlBoolean");function _1(e){return e==="true"||e==="True"||e==="TRUE"}x(_1,"constructYamlBoolean");function T1(e){return Object.prototype.toString.call(e)==="[object Boolean]"}x(T1,"isBoolean");var C4=new ti("tag:yaml.org,2002:bool",{kind:"scalar",resolve:C1,construct:_1,predicate:T1,represent:{lowercase:x(function(e){return e?"true":"false"},"lowercase"),uppercase:x(function(e){return e?"TRUE":"FALSE"},"uppercase"),camelcase:x(function(e){return e?"True":"False"},"camelcase")},defaultStyle:"lowercase"});function w1(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}x(w1,"isHexCode");function k1(e){return 48<=e&&e<=55}x(k1,"isOctCode");function A1(e){return 48<=e&&e<=57}x(A1,"isDecCode");function E1(e){if(e===null)return!1;var t=e.length,n=0,a=!1,s;if(!t)return!1;if(s=e[n],(s==="-"||s==="+")&&(s=e[++n]),s==="0"){if(n+1===t)return!0;if(s=e[++n],s==="b"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(s!=="0"&&s!=="1")return!1;a=!0}return a&&s!=="_"}if(s==="x"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(!w1(e.charCodeAt(n)))return!1;a=!0}return a&&s!=="_"}if(s==="o"){for(n++;n<t;n++)if(s=e[n],s!=="_"){if(!k1(e.charCodeAt(n)))return!1;a=!0}return a&&s!=="_"}}if(s==="_")return!1;for(;n<t;n++)if(s=e[n],s!=="_"){if(!A1(e.charCodeAt(n)))return!1;a=!0}return!(!a||s==="_")}x(E1,"resolveYamlInteger");function R1(e){var t=e,n=1,a;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),a=t[0],(a==="-"||a==="+")&&(a==="-"&&(n=-1),t=t.slice(1),a=t[0]),t==="0")return 0;if(a==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}x(R1,"constructYamlInteger");function M1(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Oe.isNegativeZero(e)}x(M1,"isInteger");var _4=new ti("tag:yaml.org,2002:int",{kind:"scalar",resolve:E1,construct:R1,predicate:M1,represent:{binary:x(function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},"binary"),octal:x(function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},"octal"),decimal:x(function(e){return e.toString(10)},"decimal"),hexadecimal:x(function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)},"hexadecimal")},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),T4=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function L1(e){return!(e===null||!T4.test(e)||e[e.length-1]==="_")}x(L1,"resolveYamlFloat");function D1(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}x(D1,"constructYamlFloat");var w4=/^[-+]?[0-9]+e/;function B1(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Oe.isNegativeZero(e))return"-0.0";return n=e.toString(10),w4.test(n)?n.replace("e",".e"):n}x(B1,"representYamlFloat");function O1(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Oe.isNegativeZero(e))}x(O1,"isFloat");var k4=new ti("tag:yaml.org,2002:float",{kind:"scalar",resolve:L1,construct:D1,predicate:O1,represent:B1,defaultStyle:"lowercase"}),N1=S4.extend({implicit:[x4,C4,_4,k4]}),A4=N1,P1=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),I1=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function F1(e){return e===null?!1:P1.exec(e)!==null||I1.exec(e)!==null}x(F1,"resolveYamlTimestamp");function $1(e){var t,n,a,s,o,u,c,f=0,d=null,g,m,b;if(t=P1.exec(e),t===null&&(t=I1.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],a=+t[2]-1,s=+t[3],!t[4])return new Date(Date.UTC(n,a,s));if(o=+t[4],u=+t[5],c=+t[6],t[7]){for(f=t[7].slice(0,3);f.length<3;)f+="0";f=+f}return t[9]&&(g=+t[10],m=+(t[11]||0),d=(g*60+m)*6e4,t[9]==="-"&&(d=-d)),b=new Date(Date.UTC(n,a,s,o,u,c,f)),d&&b.setTime(b.getTime()-d),b}x($1,"constructYamlTimestamp");function z1(e){return e.toISOString()}x(z1,"representYamlTimestamp");var E4=new ti("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:F1,construct:$1,instanceOf:Date,represent:z1});function q1(e){return e==="<<"||e===null}x(q1,"resolveYamlMerge");var R4=new ti("tag:yaml.org,2002:merge",{kind:"scalar",resolve:q1}),bm=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function U1(e){if(e===null)return!1;var t,n,a=0,s=e.length,o=bm;for(n=0;n<s;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;a+=6}return a%8===0}x(U1,"resolveYamlBinary");function H1(e){var t,n,a=e.replace(/[\r\n=]/g,""),s=a.length,o=bm,u=0,c=[];for(t=0;t<s;t++)t%4===0&&t&&(c.push(u>>16&255),c.push(u>>8&255),c.push(u&255)),u=u<<6|o.indexOf(a.charAt(t));return n=s%4*6,n===0?(c.push(u>>16&255),c.push(u>>8&255),c.push(u&255)):n===18?(c.push(u>>10&255),c.push(u>>2&255)):n===12&&c.push(u>>4&255),new Uint8Array(c)}x(H1,"constructYamlBinary");function G1(e){var t="",n=0,a,s,o=e.length,u=bm;for(a=0;a<o;a++)a%3===0&&a&&(t+=u[n>>18&63],t+=u[n>>12&63],t+=u[n>>6&63],t+=u[n&63]),n=(n<<8)+e[a];return s=o%3,s===0?(t+=u[n>>18&63],t+=u[n>>12&63],t+=u[n>>6&63],t+=u[n&63]):s===2?(t+=u[n>>10&63],t+=u[n>>4&63],t+=u[n<<2&63],t+=u[64]):s===1&&(t+=u[n>>2&63],t+=u[n<<4&63],t+=u[64],t+=u[64]),t}x(G1,"representYamlBinary");function j1(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}x(j1,"isBinary");var M4=new ti("tag:yaml.org,2002:binary",{kind:"scalar",resolve:U1,construct:H1,predicate:j1,represent:G1}),L4=Object.prototype.hasOwnProperty,D4=Object.prototype.toString;function Y1(e){if(e===null)return!0;var t=[],n,a,s,o,u,c=e;for(n=0,a=c.length;n<a;n+=1){if(s=c[n],u=!1,D4.call(s)!=="[object Object]")return!1;for(o in s)if(L4.call(s,o))if(!u)u=!0;else return!1;if(!u)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}x(Y1,"resolveYamlOmap");function W1(e){return e!==null?e:[]}x(W1,"constructYamlOmap");var B4=new ti("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Y1,construct:W1}),O4=Object.prototype.toString;function V1(e){if(e===null)return!0;var t,n,a,s,o,u=e;for(o=new Array(u.length),t=0,n=u.length;t<n;t+=1){if(a=u[t],O4.call(a)!=="[object Object]"||(s=Object.keys(a),s.length!==1))return!1;o[t]=[s[0],a[s[0]]]}return!0}x(V1,"resolveYamlPairs");function X1(e){if(e===null)return[];var t,n,a,s,o,u=e;for(o=new Array(u.length),t=0,n=u.length;t<n;t+=1)a=u[t],s=Object.keys(a),o[t]=[s[0],a[s[0]]];return o}x(X1,"constructYamlPairs");var N4=new ti("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:V1,construct:X1}),P4=Object.prototype.hasOwnProperty;function Q1(e){if(e===null)return!0;var t,n=e;for(t in n)if(P4.call(n,t)&&n[t]!==null)return!1;return!0}x(Q1,"resolveYamlSet");function K1(e){return e!==null?e:{}}x(K1,"constructYamlSet");var I4=new ti("tag:yaml.org,2002:set",{kind:"mapping",resolve:Q1,construct:K1}),Z1=A4.extend({implicit:[E4,R4],explicit:[M4,B4,N4,I4]}),zr=Object.prototype.hasOwnProperty,hh=1,J1=2,tC=3,dh=4,Lg=1,F4=2,LS=3,$4=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,z4=/[\x85\u2028\u2029]/,q4=/[,\[\]\{\}]/,eC=/^(?:!|!!|![a-z\-]+!)$/i,iC=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function up(e){return Object.prototype.toString.call(e)}x(up,"_class");function sn(e){return e===10||e===13}x(sn,"is_EOL");function Fr(e){return e===9||e===32}x(Fr,"is_WHITE_SPACE");function li(e){return e===9||e===32||e===10||e===13}x(li,"is_WS_OR_EOL");function Sa(e){return e===44||e===91||e===93||e===123||e===125}x(Sa,"is_FLOW_INDICATOR");function nC(e){var t;return 48<=e&&e<=57?e-48:(t=e|32,97<=t&&t<=102?t-97+10:-1)}x(nC,"fromHexCode");function rC(e){return e===120?2:e===117?4:e===85?8:0}x(rC,"escapedHexLen");function aC(e){return 48<=e&&e<=57?e-48:-1}x(aC,"fromDecimalCode");function hp(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}x(hp,"simpleEscapeSequence");function sC(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}x(sC,"charFromCodepoint");var lC=new Array(256),oC=new Array(256);for(ga=0;ga<256;ga++)lC[ga]=hp(ga)?1:0,oC[ga]=hp(ga);var ga;function cC(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||Z1,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}x(cC,"State$1");function vm(e,t){var n={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return n.snippet=f4(n),new xi(t,n)}x(vm,"generateError");function wt(e,t){throw vm(e,t)}x(wt,"throwError");function Fo(e,t){e.onWarning&&e.onWarning.call(null,vm(e,t))}x(Fo,"throwWarning");var DS={YAML:x(function(t,n,a){var s,o,u;t.version!==null&&wt(t,"duplication of %YAML directive"),a.length!==1&&wt(t,"YAML directive accepts exactly one argument"),s=/^([0-9]+)\.([0-9]+)$/.exec(a[0]),s===null&&wt(t,"ill-formed argument of the YAML directive"),o=parseInt(s[1],10),u=parseInt(s[2],10),o!==1&&wt(t,"unacceptable YAML version of the document"),t.version=a[0],t.checkLineBreaks=u<2,u!==1&&u!==2&&Fo(t,"unsupported YAML version of the document")},"handleYamlDirective"),TAG:x(function(t,n,a){var s,o;a.length!==2&&wt(t,"TAG directive accepts exactly two arguments"),s=a[0],o=a[1],eC.test(s)||wt(t,"ill-formed tag handle (first argument) of the TAG directive"),zr.call(t.tagMap,s)&&wt(t,'there is a previously declared suffix for "'+s+'" tag handle'),iC.test(o)||wt(t,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch{wt(t,"tag prefix is malformed: "+o)}t.tagMap[s]=o},"handleTagDirective")};function rr(e,t,n,a){var s,o,u,c;if(t<n){if(c=e.input.slice(t,n),a)for(s=0,o=c.length;s<o;s+=1)u=c.charCodeAt(s),u===9||32<=u&&u<=1114111||wt(e,"expected valid JSON character");else $4.test(c)&&wt(e,"the stream contains non-printable characters");e.result+=c}}x(rr,"captureSegment");function dp(e,t,n,a){var s,o,u,c;for(Oe.isObject(n)||wt(e,"cannot merge mappings; the provided source object is unacceptable"),s=Object.keys(n),u=0,c=s.length;u<c;u+=1)o=s[u],zr.call(t,o)||(t[o]=n[o],a[o]=!0)}x(dp,"mergeMappings");function xa(e,t,n,a,s,o,u,c,f){var d,g;if(Array.isArray(s))for(s=Array.prototype.slice.call(s),d=0,g=s.length;d<g;d+=1)Array.isArray(s[d])&&wt(e,"nested arrays are not supported inside keys"),typeof s=="object"&&up(s[d])==="[object Object]"&&(s[d]="[object Object]");if(typeof s=="object"&&up(s)==="[object Object]"&&(s="[object Object]"),s=String(s),t===null&&(t={}),a==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(d=0,g=o.length;d<g;d+=1)dp(e,t,o[d],n);else dp(e,t,o,n);else!e.json&&!zr.call(n,s)&&zr.call(t,s)&&(e.line=u||e.line,e.lineStart=c||e.lineStart,e.position=f||e.position,wt(e,"duplicated mapping key")),s==="__proto__"?Object.defineProperty(t,s,{configurable:!0,enumerable:!0,writable:!0,value:o}):t[s]=o,delete n[s];return t}x(xa,"storeMappingPair");function Uh(e){var t;t=e.input.charCodeAt(e.position),t===10?e.position++:t===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):wt(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}x(Uh,"readLineBreak");function xe(e,t,n){for(var a=0,s=e.input.charCodeAt(e.position);s!==0;){for(;Fr(s);)s===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),s=e.input.charCodeAt(++e.position);if(t&&s===35)do s=e.input.charCodeAt(++e.position);while(s!==10&&s!==13&&s!==0);if(sn(s))for(Uh(e),s=e.input.charCodeAt(e.position),a++,e.lineIndent=0;s===32;)e.lineIndent++,s=e.input.charCodeAt(++e.position);else break}return n!==-1&&a!==0&&e.lineIndent<n&&Fo(e,"deficient indentation"),a}x(xe,"skipSeparationSpace");function tc(e){var t=e.position,n;return n=e.input.charCodeAt(t),!!((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)&&(t+=3,n=e.input.charCodeAt(t),n===0||li(n)))}x(tc,"testDocumentSeparator");function Hh(e,t){t===1?e.result+=" ":t>1&&(e.result+=Oe.repeat(`
`,t-1))}x(Hh,"writeFoldedLines");function uC(e,t,n){var a,s,o,u,c,f,d,g,m=e.kind,b=e.result,v;if(v=e.input.charCodeAt(e.position),li(v)||Sa(v)||v===35||v===38||v===42||v===33||v===124||v===62||v===39||v===34||v===37||v===64||v===96||(v===63||v===45)&&(s=e.input.charCodeAt(e.position+1),li(s)||n&&Sa(s)))return!1;for(e.kind="scalar",e.result="",o=u=e.position,c=!1;v!==0;){if(v===58){if(s=e.input.charCodeAt(e.position+1),li(s)||n&&Sa(s))break}else if(v===35){if(a=e.input.charCodeAt(e.position-1),li(a))break}else{if(e.position===e.lineStart&&tc(e)||n&&Sa(v))break;if(sn(v))if(f=e.line,d=e.lineStart,g=e.lineIndent,xe(e,!1,-1),e.lineIndent>=t){c=!0,v=e.input.charCodeAt(e.position);continue}else{e.position=u,e.line=f,e.lineStart=d,e.lineIndent=g;break}}c&&(rr(e,o,u,!1),Hh(e,e.line-f),o=u=e.position,c=!1),Fr(v)||(u=e.position+1),v=e.input.charCodeAt(++e.position)}return rr(e,o,u,!1),e.result?!0:(e.kind=m,e.result=b,!1)}x(uC,"readPlainScalar");function hC(e,t){var n,a,s;if(n=e.input.charCodeAt(e.position),n!==39)return!1;for(e.kind="scalar",e.result="",e.position++,a=s=e.position;(n=e.input.charCodeAt(e.position))!==0;)if(n===39)if(rr(e,a,e.position,!0),n=e.input.charCodeAt(++e.position),n===39)a=e.position,e.position++,s=e.position;else return!0;else sn(n)?(rr(e,a,s,!0),Hh(e,xe(e,!1,t)),a=s=e.position):e.position===e.lineStart&&tc(e)?wt(e,"unexpected end of the document within a single quoted scalar"):(e.position++,s=e.position);wt(e,"unexpected end of the stream within a single quoted scalar")}x(hC,"readSingleQuotedScalar");function dC(e,t){var n,a,s,o,u,c;if(c=e.input.charCodeAt(e.position),c!==34)return!1;for(e.kind="scalar",e.result="",e.position++,n=a=e.position;(c=e.input.charCodeAt(e.position))!==0;){if(c===34)return rr(e,n,e.position,!0),e.position++,!0;if(c===92){if(rr(e,n,e.position,!0),c=e.input.charCodeAt(++e.position),sn(c))xe(e,!1,t);else if(c<256&&lC[c])e.result+=oC[c],e.position++;else if((u=rC(c))>0){for(s=u,o=0;s>0;s--)c=e.input.charCodeAt(++e.position),(u=nC(c))>=0?o=(o<<4)+u:wt(e,"expected hexadecimal character");e.result+=sC(o),e.position++}else wt(e,"unknown escape sequence");n=a=e.position}else sn(c)?(rr(e,n,a,!0),Hh(e,xe(e,!1,t)),n=a=e.position):e.position===e.lineStart&&tc(e)?wt(e,"unexpected end of the document within a double quoted scalar"):(e.position++,a=e.position)}wt(e,"unexpected end of the stream within a double quoted scalar")}x(dC,"readDoubleQuotedScalar");function fC(e,t){var n=!0,a,s,o,u=e.tag,c,f=e.anchor,d,g,m,b,v,S=Object.create(null),C,w,T,k;if(k=e.input.charCodeAt(e.position),k===91)g=93,v=!1,c=[];else if(k===123)g=125,v=!0,c={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=c),k=e.input.charCodeAt(++e.position);k!==0;){if(xe(e,!0,t),k=e.input.charCodeAt(e.position),k===g)return e.position++,e.tag=u,e.anchor=f,e.kind=v?"mapping":"sequence",e.result=c,!0;n?k===44&&wt(e,"expected the node content, but found ','"):wt(e,"missed comma between flow collection entries"),w=C=T=null,m=b=!1,k===63&&(d=e.input.charCodeAt(e.position+1),li(d)&&(m=b=!0,e.position++,xe(e,!0,t))),a=e.line,s=e.lineStart,o=e.position,Ea(e,t,hh,!1,!0),w=e.tag,C=e.result,xe(e,!0,t),k=e.input.charCodeAt(e.position),(b||e.line===a)&&k===58&&(m=!0,k=e.input.charCodeAt(++e.position),xe(e,!0,t),Ea(e,t,hh,!1,!0),T=e.result),v?xa(e,c,S,w,C,T,a,s,o):m?c.push(xa(e,null,S,w,C,T,a,s,o)):c.push(C),xe(e,!0,t),k=e.input.charCodeAt(e.position),k===44?(n=!0,k=e.input.charCodeAt(++e.position)):n=!1}wt(e,"unexpected end of the stream within a flow collection")}x(fC,"readFlowCollection");function gC(e,t){var n,a,s=Lg,o=!1,u=!1,c=t,f=0,d=!1,g,m;if(m=e.input.charCodeAt(e.position),m===124)a=!1;else if(m===62)a=!0;else return!1;for(e.kind="scalar",e.result="";m!==0;)if(m=e.input.charCodeAt(++e.position),m===43||m===45)Lg===s?s=m===43?LS:F4:wt(e,"repeat of a chomping mode identifier");else if((g=aC(m))>=0)g===0?wt(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):u?wt(e,"repeat of an indentation width identifier"):(c=t+g-1,u=!0);else break;if(Fr(m)){do m=e.input.charCodeAt(++e.position);while(Fr(m));if(m===35)do m=e.input.charCodeAt(++e.position);while(!sn(m)&&m!==0)}for(;m!==0;){for(Uh(e),e.lineIndent=0,m=e.input.charCodeAt(e.position);(!u||e.lineIndent<c)&&m===32;)e.lineIndent++,m=e.input.charCodeAt(++e.position);if(!u&&e.lineIndent>c&&(c=e.lineIndent),sn(m)){f++;continue}if(e.lineIndent<c){s===LS?e.result+=Oe.repeat(`
`,o?1+f:f):s===Lg&&o&&(e.result+=`
`);break}for(a?Fr(m)?(d=!0,e.result+=Oe.repeat(`
`,o?1+f:f)):d?(d=!1,e.result+=Oe.repeat(`
`,f+1)):f===0?o&&(e.result+=" "):e.result+=Oe.repeat(`
`,f):e.result+=Oe.repeat(`
`,o?1+f:f),o=!0,u=!0,f=0,n=e.position;!sn(m)&&m!==0;)m=e.input.charCodeAt(++e.position);rr(e,n,e.position,!1)}return!0}x(gC,"readBlockScalar");function fp(e,t){var n,a=e.tag,s=e.anchor,o=[],u,c=!1,f;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=o),f=e.input.charCodeAt(e.position);f!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,wt(e,"tab characters must not be used in indentation")),!(f!==45||(u=e.input.charCodeAt(e.position+1),!li(u))));){if(c=!0,e.position++,xe(e,!0,-1)&&e.lineIndent<=t){o.push(null),f=e.input.charCodeAt(e.position);continue}if(n=e.line,Ea(e,t,tC,!1,!0),o.push(e.result),xe(e,!0,-1),f=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&f!==0)wt(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break}return c?(e.tag=a,e.anchor=s,e.kind="sequence",e.result=o,!0):!1}x(fp,"readBlockSequence");function pC(e,t,n){var a,s,o,u,c,f,d=e.tag,g=e.anchor,m={},b=Object.create(null),v=null,S=null,C=null,w=!1,T=!1,k;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=m),k=e.input.charCodeAt(e.position);k!==0;){if(!w&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,wt(e,"tab characters must not be used in indentation")),a=e.input.charCodeAt(e.position+1),o=e.line,(k===63||k===58)&&li(a))k===63?(w&&(xa(e,m,b,v,S,null,u,c,f),v=S=C=null),T=!0,w=!0,s=!0):w?(w=!1,s=!0):wt(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,k=a;else{if(u=e.line,c=e.lineStart,f=e.position,!Ea(e,n,J1,!1,!0))break;if(e.line===o){for(k=e.input.charCodeAt(e.position);Fr(k);)k=e.input.charCodeAt(++e.position);if(k===58)k=e.input.charCodeAt(++e.position),li(k)||wt(e,"a whitespace character is expected after the key-value separator within a block mapping"),w&&(xa(e,m,b,v,S,null,u,c,f),v=S=C=null),T=!0,w=!1,s=!1,v=e.tag,S=e.result;else if(T)wt(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=d,e.anchor=g,!0}else if(T)wt(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=d,e.anchor=g,!0}if((e.line===o||e.lineIndent>t)&&(w&&(u=e.line,c=e.lineStart,f=e.position),Ea(e,t,dh,!0,s)&&(w?S=e.result:C=e.result),w||(xa(e,m,b,v,S,C,u,c,f),v=S=C=null),xe(e,!0,-1),k=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>t)&&k!==0)wt(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return w&&xa(e,m,b,v,S,null,u,c,f),T&&(e.tag=d,e.anchor=g,e.kind="mapping",e.result=m),T}x(pC,"readBlockMapping");function mC(e){var t,n=!1,a=!1,s,o,u;if(u=e.input.charCodeAt(e.position),u!==33)return!1;if(e.tag!==null&&wt(e,"duplication of a tag property"),u=e.input.charCodeAt(++e.position),u===60?(n=!0,u=e.input.charCodeAt(++e.position)):u===33?(a=!0,s="!!",u=e.input.charCodeAt(++e.position)):s="!",t=e.position,n){do u=e.input.charCodeAt(++e.position);while(u!==0&&u!==62);e.position<e.length?(o=e.input.slice(t,e.position),u=e.input.charCodeAt(++e.position)):wt(e,"unexpected end of the stream within a verbatim tag")}else{for(;u!==0&&!li(u);)u===33&&(a?wt(e,"tag suffix cannot contain exclamation marks"):(s=e.input.slice(t-1,e.position+1),eC.test(s)||wt(e,"named tag handle cannot contain such characters"),a=!0,t=e.position+1)),u=e.input.charCodeAt(++e.position);o=e.input.slice(t,e.position),q4.test(o)&&wt(e,"tag suffix cannot contain flow indicator characters")}o&&!iC.test(o)&&wt(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch{wt(e,"tag name is malformed: "+o)}return n?e.tag=o:zr.call(e.tagMap,s)?e.tag=e.tagMap[s]+o:s==="!"?e.tag="!"+o:s==="!!"?e.tag="tag:yaml.org,2002:"+o:wt(e,'undeclared tag handle "'+s+'"'),!0}x(mC,"readTagProperty");function yC(e){var t,n;if(n=e.input.charCodeAt(e.position),n!==38)return!1;for(e.anchor!==null&&wt(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;n!==0&&!li(n)&&!Sa(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&wt(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}x(yC,"readAnchorProperty");function bC(e){var t,n,a;if(a=e.input.charCodeAt(e.position),a!==42)return!1;for(a=e.input.charCodeAt(++e.position),t=e.position;a!==0&&!li(a)&&!Sa(a);)a=e.input.charCodeAt(++e.position);return e.position===t&&wt(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),zr.call(e.anchorMap,n)||wt(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],xe(e,!0,-1),!0}x(bC,"readAlias");function Ea(e,t,n,a,s){var o,u,c,f=1,d=!1,g=!1,m,b,v,S,C,w;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=u=c=dh===n||tC===n,a&&xe(e,!0,-1)&&(d=!0,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)),f===1)for(;mC(e)||yC(e);)xe(e,!0,-1)?(d=!0,c=o,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)):c=!1;if(c&&(c=d||s),(f===1||dh===n)&&(hh===n||J1===n?C=t:C=t+1,w=e.position-e.lineStart,f===1?c&&(fp(e,w)||pC(e,w,C))||fC(e,C)?g=!0:(u&&gC(e,C)||hC(e,C)||dC(e,C)?g=!0:bC(e)?(g=!0,(e.tag!==null||e.anchor!==null)&&wt(e,"alias node should not have any properties")):uC(e,C,hh===n)&&(g=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):f===0&&(g=c&&fp(e,w))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&wt(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),m=0,b=e.implicitTypes.length;m<b;m+=1)if(S=e.implicitTypes[m],S.resolve(e.result)){e.result=S.construct(e.result),e.tag=S.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(zr.call(e.typeMap[e.kind||"fallback"],e.tag))S=e.typeMap[e.kind||"fallback"][e.tag];else for(S=null,v=e.typeMap.multi[e.kind||"fallback"],m=0,b=v.length;m<b;m+=1)if(e.tag.slice(0,v[m].tag.length)===v[m].tag){S=v[m];break}S||wt(e,"unknown tag !<"+e.tag+">"),e.result!==null&&S.kind!==e.kind&&wt(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+S.kind+'", not "'+e.kind+'"'),S.resolve(e.result,e.tag)?(e.result=S.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):wt(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||g}x(Ea,"composeNode");function vC(e){var t=e.position,n,a,s,o=!1,u;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(u=e.input.charCodeAt(e.position))!==0&&(xe(e,!0,-1),u=e.input.charCodeAt(e.position),!(e.lineIndent>0||u!==37));){for(o=!0,u=e.input.charCodeAt(++e.position),n=e.position;u!==0&&!li(u);)u=e.input.charCodeAt(++e.position);for(a=e.input.slice(n,e.position),s=[],a.length<1&&wt(e,"directive name must not be less than one character in length");u!==0;){for(;Fr(u);)u=e.input.charCodeAt(++e.position);if(u===35){do u=e.input.charCodeAt(++e.position);while(u!==0&&!sn(u));break}if(sn(u))break;for(n=e.position;u!==0&&!li(u);)u=e.input.charCodeAt(++e.position);s.push(e.input.slice(n,e.position))}u!==0&&Uh(e),zr.call(DS,a)?DS[a](e,a,s):Fo(e,'unknown document directive "'+a+'"')}if(xe(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,xe(e,!0,-1)):o&&wt(e,"directives end mark is expected"),Ea(e,e.lineIndent-1,dh,!1,!0),xe(e,!0,-1),e.checkLineBreaks&&z4.test(e.input.slice(t,e.position))&&Fo(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&tc(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,xe(e,!0,-1));return}if(e.position<e.length-1)wt(e,"end of the stream or a document separator is expected");else return}x(vC,"readDocument");function Sm(e,t){e=String(e),t=t||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var n=new cC(e,t),a=e.indexOf("\0");for(a!==-1&&(n.position=a,wt(n,"null byte is not allowed in input")),n.input+="\0";n.input.charCodeAt(n.position)===32;)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)vC(n);return n.documents}x(Sm,"loadDocuments");function U4(e,t,n){t!==null&&typeof t=="object"&&typeof n>"u"&&(n=t,t=null);var a=Sm(e,n);if(typeof t!="function")return a;for(var s=0,o=a.length;s<o;s+=1)t(a[s])}x(U4,"loadAll$1");function SC(e,t){var n=Sm(e,t);if(n.length!==0){if(n.length===1)return n[0];throw new xi("expected a single document in the stream, but found more")}}x(SC,"load$1");var H4=SC,G4={load:H4},xC=Object.prototype.toString,CC=Object.prototype.hasOwnProperty,xm=65279,j4=9,$o=10,Y4=13,W4=32,V4=33,X4=34,gp=35,Q4=37,K4=38,Z4=39,J4=42,_C=44,tO=45,fh=58,eO=61,iO=62,nO=63,rO=64,TC=91,wC=93,aO=96,kC=123,sO=124,AC=125,ii={};ii[0]="\\0";ii[7]="\\a";ii[8]="\\b";ii[9]="\\t";ii[10]="\\n";ii[11]="\\v";ii[12]="\\f";ii[13]="\\r";ii[27]="\\e";ii[34]='\\"';ii[92]="\\\\";ii[133]="\\N";ii[160]="\\_";ii[8232]="\\L";ii[8233]="\\P";var lO=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],oO=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function EC(e,t){var n,a,s,o,u,c,f;if(t===null)return{};for(n={},a=Object.keys(t),s=0,o=a.length;s<o;s+=1)u=a[s],c=String(t[u]),u.slice(0,2)==="!!"&&(u="tag:yaml.org,2002:"+u.slice(2)),f=e.compiledTypeMap.fallback[u],f&&CC.call(f.styleAliases,c)&&(c=f.styleAliases[c]),n[u]=c;return n}x(EC,"compileStyleMap");function RC(e){var t,n,a;if(t=e.toString(16).toUpperCase(),e<=255)n="x",a=2;else if(e<=65535)n="u",a=4;else if(e<=4294967295)n="U",a=8;else throw new xi("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+n+Oe.repeat("0",a-t.length)+t}x(RC,"encodeHex");var cO=1,zo=2;function MC(e){this.schema=e.schema||Z1,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Oe.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=EC(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?zo:cO,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}x(MC,"State");function pp(e,t){for(var n=Oe.repeat(" ",t),a=0,s=-1,o="",u,c=e.length;a<c;)s=e.indexOf(`
`,a),s===-1?(u=e.slice(a),a=c):(u=e.slice(a,s+1),a=s+1),u.length&&u!==`
`&&(o+=n),o+=u;return o}x(pp,"indentString");function gh(e,t){return`
`+Oe.repeat(" ",e.indent*t)}x(gh,"generateNextLine");function LC(e,t){var n,a,s;for(n=0,a=e.implicitTypes.length;n<a;n+=1)if(s=e.implicitTypes[n],s.resolve(t))return!0;return!1}x(LC,"testImplicitResolving");function qo(e){return e===W4||e===j4}x(qo,"isWhitespace");function Hs(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==xm||65536<=e&&e<=1114111}x(Hs,"isPrintable");function mp(e){return Hs(e)&&e!==xm&&e!==Y4&&e!==$o}x(mp,"isNsCharOrWhitespace");function yp(e,t,n){var a=mp(e),s=a&&!qo(e);return(n?a:a&&e!==_C&&e!==TC&&e!==wC&&e!==kC&&e!==AC)&&e!==gp&&!(t===fh&&!s)||mp(t)&&!qo(t)&&e===gp||t===fh&&s}x(yp,"isPlainSafe");function DC(e){return Hs(e)&&e!==xm&&!qo(e)&&e!==tO&&e!==nO&&e!==fh&&e!==_C&&e!==TC&&e!==wC&&e!==kC&&e!==AC&&e!==gp&&e!==K4&&e!==J4&&e!==V4&&e!==sO&&e!==eO&&e!==iO&&e!==Z4&&e!==X4&&e!==Q4&&e!==rO&&e!==aO}x(DC,"isPlainSafeFirst");function BC(e){return!qo(e)&&e!==fh}x(BC,"isPlainSafeLast");function ws(e,t){var n=e.charCodeAt(t),a;return n>=55296&&n<=56319&&t+1<e.length&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(n-55296)*1024+a-56320+65536:n}x(ws,"codePointAt");function Cm(e){var t=/^\n* /;return t.test(e)}x(Cm,"needIndentIndicator");var OC=1,bp=2,NC=3,PC=4,_s=5;function IC(e,t,n,a,s,o,u,c){var f,d=0,g=null,m=!1,b=!1,v=a!==-1,S=-1,C=DC(ws(e,0))&&BC(ws(e,e.length-1));if(t||u)for(f=0;f<e.length;d>=65536?f+=2:f++){if(d=ws(e,f),!Hs(d))return _s;C=C&&yp(d,g,c),g=d}else{for(f=0;f<e.length;d>=65536?f+=2:f++){if(d=ws(e,f),d===$o)m=!0,v&&(b=b||f-S-1>a&&e[S+1]!==" ",S=f);else if(!Hs(d))return _s;C=C&&yp(d,g,c),g=d}b=b||v&&f-S-1>a&&e[S+1]!==" "}return!m&&!b?C&&!u&&!s(e)?OC:o===zo?_s:bp:n>9&&Cm(e)?_s:u?o===zo?_s:bp:b?PC:NC}x(IC,"chooseScalarStyle");function FC(e,t,n,a,s){e.dump=function(){if(t.length===0)return e.quotingType===zo?'""':"''";if(!e.noCompatMode&&(lO.indexOf(t)!==-1||oO.test(t)))return e.quotingType===zo?'"'+t+'"':"'"+t+"'";var o=e.indent*Math.max(1,n),u=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),c=a||e.flowLevel>-1&&n>=e.flowLevel;function f(d){return LC(e,d)}switch(x(f,"testAmbiguity"),IC(t,c,e.indent,u,f,e.quotingType,e.forceQuotes&&!a,s)){case OC:return t;case bp:return"'"+t.replace(/'/g,"''")+"'";case NC:return"|"+vp(t,e.indent)+Sp(pp(t,o));case PC:return">"+vp(t,e.indent)+Sp(pp($C(t,u),o));case _s:return'"'+zC(t)+'"';default:throw new xi("impossible error: invalid scalar style")}}()}x(FC,"writeScalar");function vp(e,t){var n=Cm(e)?String(t):"",a=e[e.length-1]===`
`,s=a&&(e[e.length-2]===`
`||e===`
`),o=s?"+":a?"":"-";return n+o+`
`}x(vp,"blockHeader");function Sp(e){return e[e.length-1]===`
`?e.slice(0,-1):e}x(Sp,"dropEndingNewline");function $C(e,t){for(var n=/(\n+)([^\n]*)/g,a=function(){var d=e.indexOf(`
`);return d=d!==-1?d:e.length,n.lastIndex=d,xp(e.slice(0,d),t)}(),s=e[0]===`
`||e[0]===" ",o,u;u=n.exec(e);){var c=u[1],f=u[2];o=f[0]===" ",a+=c+(!s&&!o&&f!==""?`
`:"")+xp(f,t),s=o}return a}x($C,"foldString");function xp(e,t){if(e===""||e[0]===" ")return e;for(var n=/ [^ ]/g,a,s=0,o,u=0,c=0,f="";a=n.exec(e);)c=a.index,c-s>t&&(o=u>s?u:c,f+=`
`+e.slice(s,o),s=o+1),u=c;return f+=`
`,e.length-s>t&&u>s?f+=e.slice(s,u)+`
`+e.slice(u+1):f+=e.slice(s),f.slice(1)}x(xp,"foldLine");function zC(e){for(var t="",n=0,a,s=0;s<e.length;n>=65536?s+=2:s++)n=ws(e,s),a=ii[n],!a&&Hs(n)?(t+=e[s],n>=65536&&(t+=e[s+1])):t+=a||RC(n);return t}x(zC,"escapeString");function qC(e,t,n){var a="",s=e.tag,o,u,c;for(o=0,u=n.length;o<u;o+=1)c=n[o],e.replacer&&(c=e.replacer.call(n,String(o),c)),(Tn(e,t,c,!1,!1)||typeof c>"u"&&Tn(e,t,null,!1,!1))&&(a!==""&&(a+=","+(e.condenseFlow?"":" ")),a+=e.dump);e.tag=s,e.dump="["+a+"]"}x(qC,"writeFlowSequence");function Cp(e,t,n,a){var s="",o=e.tag,u,c,f;for(u=0,c=n.length;u<c;u+=1)f=n[u],e.replacer&&(f=e.replacer.call(n,String(u),f)),(Tn(e,t+1,f,!0,!0,!1,!0)||typeof f>"u"&&Tn(e,t+1,null,!0,!0,!1,!0))&&((!a||s!=="")&&(s+=gh(e,t)),e.dump&&$o===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=o,e.dump=s||"[]"}x(Cp,"writeBlockSequence");function UC(e,t,n){var a="",s=e.tag,o=Object.keys(n),u,c,f,d,g;for(u=0,c=o.length;u<c;u+=1)g="",a!==""&&(g+=", "),e.condenseFlow&&(g+='"'),f=o[u],d=n[f],e.replacer&&(d=e.replacer.call(n,f,d)),Tn(e,t,f,!1,!1)&&(e.dump.length>1024&&(g+="? "),g+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Tn(e,t,d,!1,!1)&&(g+=e.dump,a+=g));e.tag=s,e.dump="{"+a+"}"}x(UC,"writeFlowMapping");function HC(e,t,n,a){var s="",o=e.tag,u=Object.keys(n),c,f,d,g,m,b;if(e.sortKeys===!0)u.sort();else if(typeof e.sortKeys=="function")u.sort(e.sortKeys);else if(e.sortKeys)throw new xi("sortKeys must be a boolean or a function");for(c=0,f=u.length;c<f;c+=1)b="",(!a||s!=="")&&(b+=gh(e,t)),d=u[c],g=n[d],e.replacer&&(g=e.replacer.call(n,d,g)),Tn(e,t+1,d,!0,!0,!0)&&(m=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,m&&(e.dump&&$o===e.dump.charCodeAt(0)?b+="?":b+="? "),b+=e.dump,m&&(b+=gh(e,t)),Tn(e,t+1,g,!0,m)&&(e.dump&&$o===e.dump.charCodeAt(0)?b+=":":b+=": ",b+=e.dump,s+=b));e.tag=o,e.dump=s||"{}"}x(HC,"writeBlockMapping");function _p(e,t,n){var a,s,o,u,c,f;for(s=n?e.explicitTypes:e.implicitTypes,o=0,u=s.length;o<u;o+=1)if(c=s[o],(c.instanceOf||c.predicate)&&(!c.instanceOf||typeof t=="object"&&t instanceof c.instanceOf)&&(!c.predicate||c.predicate(t))){if(n?c.multi&&c.representName?e.tag=c.representName(t):e.tag=c.tag:e.tag="?",c.represent){if(f=e.styleMap[c.tag]||c.defaultStyle,xC.call(c.represent)==="[object Function]")a=c.represent(t,f);else if(CC.call(c.represent,f))a=c.represent[f](t,f);else throw new xi("!<"+c.tag+'> tag resolver accepts not "'+f+'" style');e.dump=a}return!0}return!1}x(_p,"detectType");function Tn(e,t,n,a,s,o,u){e.tag=null,e.dump=n,_p(e,n,!1)||_p(e,n,!0);var c=xC.call(e.dump),f=a,d;a&&(a=e.flowLevel<0||e.flowLevel>t);var g=c==="[object Object]"||c==="[object Array]",m,b;if(g&&(m=e.duplicates.indexOf(n),b=m!==-1),(e.tag!==null&&e.tag!=="?"||b||e.indent!==2&&t>0)&&(s=!1),b&&e.usedDuplicates[m])e.dump="*ref_"+m;else{if(g&&b&&!e.usedDuplicates[m]&&(e.usedDuplicates[m]=!0),c==="[object Object]")a&&Object.keys(e.dump).length!==0?(HC(e,t,e.dump,s),b&&(e.dump="&ref_"+m+e.dump)):(UC(e,t,e.dump),b&&(e.dump="&ref_"+m+" "+e.dump));else if(c==="[object Array]")a&&e.dump.length!==0?(e.noArrayIndent&&!u&&t>0?Cp(e,t-1,e.dump,s):Cp(e,t,e.dump,s),b&&(e.dump="&ref_"+m+e.dump)):(qC(e,t,e.dump),b&&(e.dump="&ref_"+m+" "+e.dump));else if(c==="[object String]")e.tag!=="?"&&FC(e,e.dump,t,o,f);else{if(c==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new xi("unacceptable kind of an object to dump "+c)}e.tag!==null&&e.tag!=="?"&&(d=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?d="!"+d:d.slice(0,18)==="tag:yaml.org,2002:"?d="!!"+d.slice(18):d="!<"+d+">",e.dump=d+" "+e.dump)}return!0}x(Tn,"writeNode");function GC(e,t){var n=[],a=[],s,o;for(ph(e,n,a),s=0,o=a.length;s<o;s+=1)t.duplicates.push(n[a[s]]);t.usedDuplicates=new Array(o)}x(GC,"getDuplicateReferences");function ph(e,t,n){var a,s,o;if(e!==null&&typeof e=="object")if(s=t.indexOf(e),s!==-1)n.indexOf(s)===-1&&n.push(s);else if(t.push(e),Array.isArray(e))for(s=0,o=e.length;s<o;s+=1)ph(e[s],t,n);else for(a=Object.keys(e),s=0,o=a.length;s<o;s+=1)ph(e[a[s]],t,n)}x(ph,"inspectNode");function uO(e,t){t=t||{};var n=new MC(t);n.noRefs||GC(e,n);var a=e;return n.replacer&&(a=n.replacer.call({"":a},"",a)),Tn(n,0,a,!0,!0)?n.dump+`
`:""}x(uO,"dump$1");function hO(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}x(hO,"renamed");var dO=N1,fO=G4.load;/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
*/var Yi={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:4};function _o(e,t){if(e===void 0||t===void 0)return{angle:0,deltaX:0,deltaY:0};e=he(e),t=he(t);const[n,a]=[e.x,e.y],[s,o]=[t.x,t.y],u=s-n,c=o-a;return{angle:Math.atan(c/u),deltaX:u,deltaY:c}}x(_o,"calculateDeltaAndAngle");var he=x(e=>Array.isArray(e)?{x:e[0],y:e[1]}:e,"pointTransformer"),gO=x(e=>({x:x(function(t,n,a){let s=0;const o=he(a[0]).x<he(a[a.length-1]).x?"left":"right";if(n===0&&Object.hasOwn(Yi,e.arrowTypeStart)){const{angle:v,deltaX:S}=_o(a[0],a[1]);s=Yi[e.arrowTypeStart]*Math.cos(v)*(S>=0?1:-1)}else if(n===a.length-1&&Object.hasOwn(Yi,e.arrowTypeEnd)){const{angle:v,deltaX:S}=_o(a[a.length-1],a[a.length-2]);s=Yi[e.arrowTypeEnd]*Math.cos(v)*(S>=0?1:-1)}const u=Math.abs(he(t).x-he(a[a.length-1]).x),c=Math.abs(he(t).y-he(a[a.length-1]).y),f=Math.abs(he(t).x-he(a[0]).x),d=Math.abs(he(t).y-he(a[0]).y),g=Yi[e.arrowTypeStart],m=Yi[e.arrowTypeEnd],b=1;if(u<m&&u>0&&c<m){let v=m+b-u;v*=o==="right"?-1:1,s-=v}if(f<g&&f>0&&d<g){let v=g+b-f;v*=o==="right"?-1:1,s+=v}return he(t).x+s},"x"),y:x(function(t,n,a){let s=0;const o=he(a[0]).y<he(a[a.length-1]).y?"down":"up";if(n===0&&Object.hasOwn(Yi,e.arrowTypeStart)){const{angle:v,deltaY:S}=_o(a[0],a[1]);s=Yi[e.arrowTypeStart]*Math.abs(Math.sin(v))*(S>=0?1:-1)}else if(n===a.length-1&&Object.hasOwn(Yi,e.arrowTypeEnd)){const{angle:v,deltaY:S}=_o(a[a.length-1],a[a.length-2]);s=Yi[e.arrowTypeEnd]*Math.abs(Math.sin(v))*(S>=0?1:-1)}const u=Math.abs(he(t).y-he(a[a.length-1]).y),c=Math.abs(he(t).x-he(a[a.length-1]).x),f=Math.abs(he(t).y-he(a[0]).y),d=Math.abs(he(t).x-he(a[0]).x),g=Yi[e.arrowTypeStart],m=Yi[e.arrowTypeEnd],b=1;if(u<m&&u>0&&c<m){let v=m+b-u;v*=o==="up"?-1:1,s-=v}if(f<g&&f>0&&d<g){let v=g+b-f;v*=o==="up"?-1:1,s+=v}return he(t).y+s},"y")}),"getLineFunctionsWithOffset"),_m=x(({flowchart:e})=>{var s,o;const t=((s=e==null?void 0:e.subGraphTitleMargin)==null?void 0:s.top)??0,n=((o=e==null?void 0:e.subGraphTitleMargin)==null?void 0:o.bottom)??0,a=t+n;return{subGraphTitleTopMargin:t,subGraphTitleBottomMargin:n,subGraphTitleTotalMargin:a}},"getSubGraphTitleMargins"),pO=x(e=>{const{handDrawnSeed:t}=Vt();return{fill:e,hachureAngle:120,hachureGap:4,fillWeight:2,roughness:.7,stroke:e,seed:t}},"solidStateFill"),Xs=x(e=>{const t=mO([...e.cssCompiledStyles||[],...e.cssStyles||[]]);return{stylesMap:t,stylesArray:[...t]}},"compileStyles"),mO=x(e=>{const t=new Map;return e.forEach(n=>{const[a,s]=n.split(":");t.set(a.trim(),s==null?void 0:s.trim())}),t},"styles2Map"),jC=x(e=>e==="color"||e==="font-size"||e==="font-family"||e==="font-weight"||e==="font-style"||e==="text-decoration"||e==="text-align"||e==="text-transform"||e==="line-height"||e==="letter-spacing"||e==="word-spacing"||e==="text-shadow"||e==="text-overflow"||e==="white-space"||e==="word-wrap"||e==="word-break"||e==="overflow-wrap"||e==="hyphens","isLabelStyle"),Ct=x(e=>{const{stylesArray:t}=Xs(e),n=[],a=[],s=[],o=[];return t.forEach(u=>{const c=u[0];jC(c)?n.push(u.join(":")+" !important"):(a.push(u.join(":")+" !important"),c.includes("stroke")&&s.push(u.join(":")+" !important"),c==="fill"&&o.push(u.join(":")+" !important"))}),{labelStyles:n.join(";"),nodeStyles:a.join(";"),stylesArray:t,borderStyles:s,backgroundStyles:o}},"styles2String"),St=x((e,t)=>{var f;const{themeVariables:n,handDrawnSeed:a}=Vt(),{nodeBorder:s,mainBkg:o}=n,{stylesMap:u}=Xs(e);return Object.assign({roughness:.7,fill:u.get("fill")||o,fillStyle:"hachure",fillWeight:4,hachureGap:5.2,stroke:u.get("stroke")||s,seed:a,strokeWidth:((f=u.get("stroke-width"))==null?void 0:f.replace("px",""))||1.3,fillLineDash:[0,0],strokeLineDash:yO(u.get("stroke-dasharray"))},t)},"userNodeOverrides"),yO=x(e=>{if(!e)return[0,0];const t=e.trim().split(/\s+/).map(Number);if(t.length===1){const s=isNaN(t[0])?0:t[0];return[s,s]}const n=isNaN(t[0])?0:t[0],a=isNaN(t[1])?0:t[1];return[n,a]},"getStrokeDashArray"),ho={},De={},BS;function bO(){return BS||(BS=1,Object.defineProperty(De,"__esModule",{value:!0}),De.BLANK_URL=De.relativeFirstCharacters=De.whitespaceEscapeCharsRegex=De.urlSchemeRegex=De.ctrlCharactersRegex=De.htmlCtrlEntityRegex=De.htmlEntitiesRegex=De.invalidProtocolRegex=void 0,De.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,De.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,De.htmlCtrlEntityRegex=/&(newline|tab);/gi,De.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,De.urlSchemeRegex=/^.+(:|&colon;)/gim,De.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,De.relativeFirstCharacters=[".","/"],De.BLANK_URL="about:blank"),De}var OS;function vO(){if(OS)return ho;OS=1,Object.defineProperty(ho,"__esModule",{value:!0}),ho.sanitizeUrl=void 0;var e=bO();function t(u){return e.relativeFirstCharacters.indexOf(u[0])>-1}function n(u){var c=u.replace(e.ctrlCharactersRegex,"");return c.replace(e.htmlEntitiesRegex,function(f,d){return String.fromCharCode(d)})}function a(u){return URL.canParse(u)}function s(u){try{return decodeURIComponent(u)}catch{return u}}function o(u){if(!u)return e.BLANK_URL;var c,f=s(u.trim());do f=n(f).replace(e.htmlCtrlEntityRegex,"").replace(e.ctrlCharactersRegex,"").replace(e.whitespaceEscapeCharsRegex,"").trim(),f=s(f),c=f.match(e.ctrlCharactersRegex)||f.match(e.htmlEntitiesRegex)||f.match(e.htmlCtrlEntityRegex)||f.match(e.whitespaceEscapeCharsRegex);while(c&&c.length>0);var d=f;if(!d)return e.BLANK_URL;if(t(d))return d;var g=d.trimStart(),m=g.match(e.urlSchemeRegex);if(!m)return d;var b=m[0].toLowerCase().trim();if(e.invalidProtocolRegex.test(b))return e.BLANK_URL;var v=g.replace(/\\/g,"/");if(b==="mailto:"||b.includes("://"))return v;if(b==="http:"||b==="https:"){if(!a(v))return e.BLANK_URL;var S=new URL(v);return S.protocol=S.protocol.toLowerCase(),S.hostname=S.hostname.toLowerCase(),S.toString()}return v}return ho.sanitizeUrl=o,ho}var SO=vO(),YC=typeof global=="object"&&global&&global.Object===Object&&global,xO=typeof self=="object"&&self&&self.Object===Object&&self,En=YC||xO||Function("return this")(),mh=En.Symbol,WC=Object.prototype,CO=WC.hasOwnProperty,_O=WC.toString,fo=mh?mh.toStringTag:void 0;function TO(e){var t=CO.call(e,fo),n=e[fo];try{e[fo]=void 0;var a=!0}catch{}var s=_O.call(e);return a&&(t?e[fo]=n:delete e[fo]),s}var wO=Object.prototype,kO=wO.toString;function AO(e){return kO.call(e)}var EO="[object Null]",RO="[object Undefined]",NS=mh?mh.toStringTag:void 0;function Qs(e){return e==null?e===void 0?RO:EO:NS&&NS in Object(e)?TO(e):AO(e)}function Ba(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var MO="[object AsyncFunction]",LO="[object Function]",DO="[object GeneratorFunction]",BO="[object Proxy]";function Tm(e){if(!Ba(e))return!1;var t=Qs(e);return t==LO||t==DO||t==MO||t==BO}var Dg=En["__core-js_shared__"],PS=function(){var e=/[^.]+$/.exec(Dg&&Dg.keys&&Dg.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function OO(e){return!!PS&&PS in e}var NO=Function.prototype,PO=NO.toString;function Oa(e){if(e!=null){try{return PO.call(e)}catch{}try{return e+""}catch{}}return""}var IO=/[\\^$.*+?()[\]{}|]/g,FO=/^\[object .+?Constructor\]$/,$O=Function.prototype,zO=Object.prototype,qO=$O.toString,UO=zO.hasOwnProperty,HO=RegExp("^"+qO.call(UO).replace(IO,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function GO(e){if(!Ba(e)||OO(e))return!1;var t=Tm(e)?HO:FO;return t.test(Oa(e))}function jO(e,t){return e==null?void 0:e[t]}function Na(e,t){var n=jO(e,t);return GO(n)?n:void 0}var Uo=Na(Object,"create");function YO(){this.__data__=Uo?Uo(null):{},this.size=0}function WO(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var VO="__lodash_hash_undefined__",XO=Object.prototype,QO=XO.hasOwnProperty;function KO(e){var t=this.__data__;if(Uo){var n=t[e];return n===VO?void 0:n}return QO.call(t,e)?t[e]:void 0}var ZO=Object.prototype,JO=ZO.hasOwnProperty;function t5(e){var t=this.__data__;return Uo?t[e]!==void 0:JO.call(t,e)}var e5="__lodash_hash_undefined__";function i5(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Uo&&t===void 0?e5:t,this}function Ra(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Ra.prototype.clear=YO;Ra.prototype.delete=WO;Ra.prototype.get=KO;Ra.prototype.has=t5;Ra.prototype.set=i5;function n5(){this.__data__=[],this.size=0}function Gh(e,t){return e===t||e!==e&&t!==t}function jh(e,t){for(var n=e.length;n--;)if(Gh(e[n][0],t))return n;return-1}var r5=Array.prototype,a5=r5.splice;function s5(e){var t=this.__data__,n=jh(t,e);if(n<0)return!1;var a=t.length-1;return n==a?t.pop():a5.call(t,n,1),--this.size,!0}function l5(e){var t=this.__data__,n=jh(t,e);return n<0?void 0:t[n][1]}function o5(e){return jh(this.__data__,e)>-1}function c5(e,t){var n=this.__data__,a=jh(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this}function or(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}or.prototype.clear=n5;or.prototype.delete=s5;or.prototype.get=l5;or.prototype.has=o5;or.prototype.set=c5;var Ho=Na(En,"Map");function u5(){this.size=0,this.__data__={hash:new Ra,map:new(Ho||or),string:new Ra}}function h5(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Yh(e,t){var n=e.__data__;return h5(t)?n[typeof t=="string"?"string":"hash"]:n.map}function d5(e){var t=Yh(this,e).delete(e);return this.size-=t?1:0,t}function f5(e){return Yh(this,e).get(e)}function g5(e){return Yh(this,e).has(e)}function p5(e,t){var n=Yh(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this}function Hr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Hr.prototype.clear=u5;Hr.prototype.delete=d5;Hr.prototype.get=f5;Hr.prototype.has=g5;Hr.prototype.set=p5;var m5="Expected a function";function ec(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(m5);var n=function(){var a=arguments,s=t?t.apply(this,a):a[0],o=n.cache;if(o.has(s))return o.get(s);var u=e.apply(this,a);return n.cache=o.set(s,u)||o,u};return n.cache=new(ec.Cache||Hr),n}ec.Cache=Hr;function y5(){this.__data__=new or,this.size=0}function b5(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function v5(e){return this.__data__.get(e)}function S5(e){return this.__data__.has(e)}var x5=200;function C5(e,t){var n=this.__data__;if(n instanceof or){var a=n.__data__;if(!Ho||a.length<x5-1)return a.push([e,t]),this.size=++n.size,this;n=this.__data__=new Hr(a)}return n.set(e,t),this.size=n.size,this}function Ks(e){var t=this.__data__=new or(e);this.size=t.size}Ks.prototype.clear=y5;Ks.prototype.delete=b5;Ks.prototype.get=v5;Ks.prototype.has=S5;Ks.prototype.set=C5;var yh=function(){try{var e=Na(Object,"defineProperty");return e({},"",{}),e}catch{}}();function wm(e,t,n){t=="__proto__"&&yh?yh(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Tp(e,t,n){(n!==void 0&&!Gh(e[t],n)||n===void 0&&!(t in e))&&wm(e,t,n)}function _5(e){return function(t,n,a){for(var s=-1,o=Object(t),u=a(t),c=u.length;c--;){var f=u[++s];if(n(o[f],f,o)===!1)break}return t}}var T5=_5(),VC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,IS=VC&&typeof module=="object"&&module&&!module.nodeType&&module,w5=IS&&IS.exports===VC,FS=w5?En.Buffer:void 0,$S=FS?FS.allocUnsafe:void 0;function k5(e,t){if(t)return e.slice();var n=e.length,a=$S?$S(n):new e.constructor(n);return e.copy(a),a}var zS=En.Uint8Array;function A5(e){var t=new e.constructor(e.byteLength);return new zS(t).set(new zS(e)),t}function E5(e,t){var n=t?A5(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function R5(e,t){var n=-1,a=e.length;for(t||(t=Array(a));++n<a;)t[n]=e[n];return t}var qS=Object.create,M5=function(){function e(){}return function(t){if(!Ba(t))return{};if(qS)return qS(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function XC(e,t){return function(n){return e(t(n))}}var QC=XC(Object.getPrototypeOf,Object),L5=Object.prototype;function Wh(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||L5;return e===n}function D5(e){return typeof e.constructor=="function"&&!Wh(e)?M5(QC(e)):{}}function ic(e){return e!=null&&typeof e=="object"}var B5="[object Arguments]";function US(e){return ic(e)&&Qs(e)==B5}var KC=Object.prototype,O5=KC.hasOwnProperty,N5=KC.propertyIsEnumerable,bh=US(function(){return arguments}())?US:function(e){return ic(e)&&O5.call(e,"callee")&&!N5.call(e,"callee")},vh=Array.isArray,P5=9007199254740991;function ZC(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=P5}function Vh(e){return e!=null&&ZC(e.length)&&!Tm(e)}function I5(e){return ic(e)&&Vh(e)}function F5(){return!1}var JC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,HS=JC&&typeof module=="object"&&module&&!module.nodeType&&module,$5=HS&&HS.exports===JC,GS=$5?En.Buffer:void 0,z5=GS?GS.isBuffer:void 0,km=z5||F5,q5="[object Object]",U5=Function.prototype,H5=Object.prototype,t_=U5.toString,G5=H5.hasOwnProperty,j5=t_.call(Object);function Y5(e){if(!ic(e)||Qs(e)!=q5)return!1;var t=QC(e);if(t===null)return!0;var n=G5.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&t_.call(n)==j5}var W5="[object Arguments]",V5="[object Array]",X5="[object Boolean]",Q5="[object Date]",K5="[object Error]",Z5="[object Function]",J5="[object Map]",tN="[object Number]",eN="[object Object]",iN="[object RegExp]",nN="[object Set]",rN="[object String]",aN="[object WeakMap]",sN="[object ArrayBuffer]",lN="[object DataView]",oN="[object Float32Array]",cN="[object Float64Array]",uN="[object Int8Array]",hN="[object Int16Array]",dN="[object Int32Array]",fN="[object Uint8Array]",gN="[object Uint8ClampedArray]",pN="[object Uint16Array]",mN="[object Uint32Array]",ce={};ce[oN]=ce[cN]=ce[uN]=ce[hN]=ce[dN]=ce[fN]=ce[gN]=ce[pN]=ce[mN]=!0;ce[W5]=ce[V5]=ce[sN]=ce[X5]=ce[lN]=ce[Q5]=ce[K5]=ce[Z5]=ce[J5]=ce[tN]=ce[eN]=ce[iN]=ce[nN]=ce[rN]=ce[aN]=!1;function yN(e){return ic(e)&&ZC(e.length)&&!!ce[Qs(e)]}function bN(e){return function(t){return e(t)}}var e_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Lo=e_&&typeof module=="object"&&module&&!module.nodeType&&module,vN=Lo&&Lo.exports===e_,Bg=vN&&YC.process,jS=function(){try{var e=Lo&&Lo.require&&Lo.require("util").types;return e||Bg&&Bg.binding&&Bg.binding("util")}catch{}}(),YS=jS&&jS.isTypedArray,Am=YS?bN(YS):yN;function wp(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var SN=Object.prototype,xN=SN.hasOwnProperty;function CN(e,t,n){var a=e[t];(!(xN.call(e,t)&&Gh(a,n))||n===void 0&&!(t in e))&&wm(e,t,n)}function _N(e,t,n,a){var s=!n;n||(n={});for(var o=-1,u=t.length;++o<u;){var c=t[o],f=void 0;f===void 0&&(f=e[c]),s?wm(n,c,f):CN(n,c,f)}return n}function TN(e,t){for(var n=-1,a=Array(e);++n<e;)a[n]=t(n);return a}var wN=9007199254740991,kN=/^(?:0|[1-9]\d*)$/;function i_(e,t){var n=typeof e;return t=t??wN,!!t&&(n=="number"||n!="symbol"&&kN.test(e))&&e>-1&&e%1==0&&e<t}var AN=Object.prototype,EN=AN.hasOwnProperty;function RN(e,t){var n=vh(e),a=!n&&bh(e),s=!n&&!a&&km(e),o=!n&&!a&&!s&&Am(e),u=n||a||s||o,c=u?TN(e.length,String):[],f=c.length;for(var d in e)(t||EN.call(e,d))&&!(u&&(d=="length"||s&&(d=="offset"||d=="parent")||o&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||i_(d,f)))&&c.push(d);return c}function MN(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var LN=Object.prototype,DN=LN.hasOwnProperty;function BN(e){if(!Ba(e))return MN(e);var t=Wh(e),n=[];for(var a in e)a=="constructor"&&(t||!DN.call(e,a))||n.push(a);return n}function n_(e){return Vh(e)?RN(e,!0):BN(e)}function ON(e){return _N(e,n_(e))}function NN(e,t,n,a,s,o,u){var c=wp(e,n),f=wp(t,n),d=u.get(f);if(d){Tp(e,n,d);return}var g=o?o(c,f,n+"",e,t,u):void 0,m=g===void 0;if(m){var b=vh(f),v=!b&&km(f),S=!b&&!v&&Am(f);g=f,b||v||S?vh(c)?g=c:I5(c)?g=R5(c):v?(m=!1,g=k5(f,!0)):S?(m=!1,g=E5(f,!0)):g=[]:Y5(f)||bh(f)?(g=c,bh(c)?g=ON(c):(!Ba(c)||Tm(c))&&(g=D5(f))):m=!1}m&&(u.set(f,g),s(g,f,a,o,u),u.delete(f)),Tp(e,n,g)}function r_(e,t,n,a,s){e!==t&&T5(t,function(o,u){if(s||(s=new Ks),Ba(o))NN(e,t,u,n,r_,a,s);else{var c=a?a(wp(e,u),o,u+"",e,t,s):void 0;c===void 0&&(c=o),Tp(e,u,c)}},n_)}function a_(e){return e}function PN(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var WS=Math.max;function IN(e,t,n){return t=WS(t===void 0?e.length-1:t,0),function(){for(var a=arguments,s=-1,o=WS(a.length-t,0),u=Array(o);++s<o;)u[s]=a[t+s];s=-1;for(var c=Array(t+1);++s<t;)c[s]=a[s];return c[t]=n(u),PN(e,this,c)}}function FN(e){return function(){return e}}var $N=yh?function(e,t){return yh(e,"toString",{configurable:!0,enumerable:!1,value:FN(t),writable:!0})}:a_,zN=800,qN=16,UN=Date.now;function HN(e){var t=0,n=0;return function(){var a=UN(),s=qN-(a-n);if(n=a,s>0){if(++t>=zN)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var GN=HN($N);function jN(e,t){return GN(IN(e,t,a_),e+"")}function YN(e,t,n){if(!Ba(n))return!1;var a=typeof t;return(a=="number"?Vh(n)&&i_(t,n.length):a=="string"&&t in n)?Gh(n[t],e):!1}function WN(e){return jN(function(t,n){var a=-1,s=n.length,o=s>1?n[s-1]:void 0,u=s>2?n[2]:void 0;for(o=e.length>3&&typeof o=="function"?(s--,o):void 0,u&&YN(n[0],n[1],u)&&(o=s<3?void 0:o,s=1),t=Object(t);++a<s;){var c=n[a];c&&e(t,c,a,o)}return t})}var VN=WN(function(e,t,n){r_(e,t,n)}),XN="​",QN={curveBasis:$u,curveBasisClosed:ZB,curveBasisOpen:JB,curveBumpX:G2,curveBumpY:j2,curveBundle:t4,curveCardinalClosed:e4,curveCardinalOpen:i4,curveCardinal:X2,curveCatmullRomClosed:n4,curveCatmullRomOpen:r4,curveCatmullRom:K2,curveLinear:sh,curveLinearClosed:a4,curveMonotoneX:n1,curveMonotoneY:r1,curveNatural:s1,curveStep:l1,curveStepAfter:c1,curveStepBefore:o1},KN=/\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi,ZN=x(function(e,t){const n=s_(e,/(?:init\b)|(?:initialize\b)/);let a={};if(Array.isArray(n)){const u=n.map(c=>c.args);Xu(u),a=Be(a,[...u])}else a=n.args;if(!a)return;let s=Kp(e,t);const o="config";return a[o]!==void 0&&(s==="flowchart-v2"&&(s="flowchart"),a[s]=a[o],delete a[o]),a},"detectInit"),s_=x(function(e,t=null){var n,a;try{const s=new RegExp(`[%]{2}(?![{]${KN.source})(?=[}][%]{2}).*
`,"ig");e=e.trim().replace(s,"").replace(/'/gm,'"'),at.debug(`Detecting diagram directive${t!==null?" type:"+t:""} based on the text:${e}`);let o;const u=[];for(;(o=Ro.exec(e))!==null;)if(o.index===Ro.lastIndex&&Ro.lastIndex++,o&&!t||t&&((n=o[1])!=null&&n.match(t))||t&&((a=o[2])!=null&&a.match(t))){const c=o[1]?o[1]:o[2],f=o[3]?o[3].trim():o[4]?JSON.parse(o[4].trim()):null;u.push({type:c,args:f})}return u.length===0?{type:e,args:null}:u.length===1?u[0]:u}catch(s){return at.error(`ERROR: ${s.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`),{type:void 0,args:null}}},"detectDirective"),JN=x(function(e){return e.replace(Ro,"")},"removeDirectives"),tP=x(function(e,t){for(const[n,a]of t.entries())if(a.match(e))return n;return-1},"isSubstringInArray");function Em(e,t){if(!e)return t;const n=`curve${e.charAt(0).toUpperCase()+e.slice(1)}`;return QN[n]??t}x(Em,"interpolateToCurve");function l_(e,t){const n=e.trim();if(n)return t.securityLevel!=="loose"?SO.sanitizeUrl(n):n}x(l_,"formatUrl");var eP=x((e,...t)=>{const n=e.split("."),a=n.length-1,s=n[a];let o=window;for(let u=0;u<a;u++)if(o=o[n[u]],!o){at.error(`Function name: ${e} not found in window`);return}o[s](...t)},"runFunc");function Rm(e,t){return!e||!t?0:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}x(Rm,"distance");function o_(e){let t,n=0;e.forEach(s=>{n+=Rm(s,t),t=s});const a=n/2;return Mm(e,a)}x(o_,"traverseEdge");function c_(e){return e.length===1?e[0]:o_(e)}x(c_,"calcLabelPosition");var VS=x((e,t=2)=>{const n=Math.pow(10,t);return Math.round(e*n)/n},"roundNumber"),Mm=x((e,t)=>{let n,a=t;for(const s of e){if(n){const o=Rm(s,n);if(o===0)return n;if(o<a)a-=o;else{const u=a/o;if(u<=0)return n;if(u>=1)return{x:s.x,y:s.y};if(u>0&&u<1)return{x:VS((1-u)*n.x+u*s.x,5),y:VS((1-u)*n.y+u*s.y,5)}}}n=s}throw new Error("Could not find a suitable point for the given distance")},"calculatePoint"),iP=x((e,t,n)=>{at.info(`our points ${JSON.stringify(t)}`),t[0]!==n&&(t=t.reverse());const s=Mm(t,25),o=e?10:5,u=Math.atan2(t[0].y-s.y,t[0].x-s.x),c={x:0,y:0};return c.x=Math.sin(u)*o+(t[0].x+s.x)/2,c.y=-Math.cos(u)*o+(t[0].y+s.y)/2,c},"calcCardinalityPosition");function u_(e,t,n){const a=structuredClone(n);at.info("our points",a),t!=="start_left"&&t!=="start_right"&&a.reverse();const s=25+e,o=Mm(a,s),u=10+e*.5,c=Math.atan2(a[0].y-o.y,a[0].x-o.x),f={x:0,y:0};return t==="start_left"?(f.x=Math.sin(c+Math.PI)*u+(a[0].x+o.x)/2,f.y=-Math.cos(c+Math.PI)*u+(a[0].y+o.y)/2):t==="end_right"?(f.x=Math.sin(c-Math.PI)*u+(a[0].x+o.x)/2-5,f.y=-Math.cos(c-Math.PI)*u+(a[0].y+o.y)/2-5):t==="end_left"?(f.x=Math.sin(c)*u+(a[0].x+o.x)/2-5,f.y=-Math.cos(c)*u+(a[0].y+o.y)/2-5):(f.x=Math.sin(c)*u+(a[0].x+o.x)/2,f.y=-Math.cos(c)*u+(a[0].y+o.y)/2),f}x(u_,"calcTerminalLabelPosition");function h_(e){let t="",n="";for(const a of e)a!==void 0&&(a.startsWith("color:")||a.startsWith("text-align:")?n=n+a+";":t=t+a+";");return{style:t,labelStyle:n}}x(h_,"getStylesFromArray");var XS=0,nP=x(()=>(XS++,"id-"+Math.random().toString(36).substr(2,12)+"-"+XS),"generateId");function d_(e){let t="";const n="0123456789abcdef",a=n.length;for(let s=0;s<e;s++)t+=n.charAt(Math.floor(Math.random()*a));return t}x(d_,"makeRandomHex");var rP=x(e=>d_(e.length),"random"),aP=x(function(){return{x:0,y:0,fill:void 0,anchor:"start",style:"#666",width:100,height:100,textMargin:0,rx:0,ry:0,valign:void 0,text:""}},"getTextObj"),sP=x(function(e,t){const n=t.text.replace(Vs.lineBreakRegex," "),[,a]=Xh(t.fontSize),s=e.append("text");s.attr("x",t.x),s.attr("y",t.y),s.style("text-anchor",t.anchor),s.style("font-family",t.fontFamily),s.style("font-size",a),s.style("font-weight",t.fontWeight),s.attr("fill",t.fill),t.class!==void 0&&s.attr("class",t.class);const o=s.append("tspan");return o.attr("x",t.x+t.textMargin*2),o.attr("fill",t.fill),o.text(n),s},"drawSimpleText"),lP=ec((e,t,n)=>{if(!e||(n=Object.assign({fontSize:12,fontWeight:400,fontFamily:"Arial",joinWith:"<br/>"},n),Vs.lineBreakRegex.test(e)))return e;const a=e.split(" ").filter(Boolean),s=[];let o="";return a.forEach((u,c)=>{const f=lr(`${u} `,n),d=lr(o,n);if(f>t){const{hyphenatedStrings:b,remainingWord:v}=oP(u,t,"-",n);s.push(o,...b),o=v}else d+f>=t?(s.push(o),o=u):o=[o,u].filter(Boolean).join(" ");c+1===a.length&&s.push(o)}),s.filter(u=>u!=="").join(n.joinWith)},(e,t,n)=>`${e}${t}${n.fontSize}${n.fontWeight}${n.fontFamily}${n.joinWith}`),oP=ec((e,t,n="-",a)=>{a=Object.assign({fontSize:12,fontWeight:400,fontFamily:"Arial",margin:0},a);const s=[...e],o=[];let u="";return s.forEach((c,f)=>{const d=`${u}${c}`;if(lr(d,a)>=t){const m=f+1,b=s.length===m,v=`${d}${n}`;o.push(b?d:v),u=""}else u=d}),{hyphenatedStrings:o,remainingWord:u}},(e,t,n="-",a)=>`${e}${t}${n}${a.fontSize}${a.fontWeight}${a.fontFamily}`);function f_(e,t){return Lm(e,t).height}x(f_,"calculateTextHeight");function lr(e,t){return Lm(e,t).width}x(lr,"calculateTextWidth");var Lm=ec((e,t)=>{const{fontSize:n=12,fontFamily:a="Arial",fontWeight:s=400}=t;if(!e)return{width:0,height:0};const[,o]=Xh(n),u=["sans-serif",a],c=e.split(Vs.lineBreakRegex),f=[],d=jt("body");if(!d.remove)return{width:0,height:0,lineHeight:0};const g=d.append("svg");for(const b of u){let v=0;const S={width:0,height:0,lineHeight:0};for(const C of c){const w=aP();w.text=C||XN;const T=sP(g,w).style("font-size",o).style("font-weight",s).style("font-family",b),k=(T._groups||T)[0][0].getBBox();if(k.width===0&&k.height===0)throw new Error("svg element not in render tree");S.width=Math.round(Math.max(S.width,k.width)),v=Math.round(k.height),S.height+=v,S.lineHeight=Math.round(Math.max(S.lineHeight,v))}f.push(S)}g.remove();const m=isNaN(f[1].height)||isNaN(f[1].width)||isNaN(f[1].lineHeight)||f[0].height>f[1].height&&f[0].width>f[1].width&&f[0].lineHeight>f[1].lineHeight?0:1;return f[m]},(e,t)=>`${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`),Ps,cP=(Ps=class{constructor(t=!1,n){this.count=0,this.count=n?n.length:0,this.next=t?()=>this.count++:()=>Date.now()}},x(Ps,"InitIDGenerator"),Ps),Tu,uP=x(function(e){return Tu=Tu||document.createElement("div"),e=escape(e).replace(/%26/g,"&").replace(/%23/g,"#").replace(/%3B/g,";"),Tu.innerHTML=e,unescape(Tu.textContent)},"entityDecode");function Dm(e){return"str"in e}x(Dm,"isDetailedError");var hP=x((e,t,n,a)=>{var o;if(!a)return;const s=(o=e.node())==null?void 0:o.getBBox();s&&e.append("text").text(a).attr("text-anchor","middle").attr("x",s.x+s.width/2).attr("y",-n).attr("class",t)},"insertTitle"),Xh=x(e=>{if(typeof e=="number")return[e,e+"px"];const t=parseInt(e??"",10);return Number.isNaN(t)?[void 0,void 0]:e===String(t)?[t,e+"px"]:[t,e]},"parseFontSize");function Bm(e,t){return VN({},e,t)}x(Bm,"cleanAndMerge");var an={assignWithDepth:Be,wrapLabel:lP,calculateTextHeight:f_,calculateTextWidth:lr,calculateTextDimensions:Lm,cleanAndMerge:Bm,detectInit:ZN,detectDirective:s_,isSubstringInArray:tP,interpolateToCurve:Em,calcLabelPosition:c_,calcCardinalityPosition:iP,calcTerminalLabelPosition:u_,formatUrl:l_,getStylesFromArray:h_,generateId:nP,random:rP,runFunc:eP,entityDecode:uP,insertTitle:hP,isLabelCoordinateInPath:g_,parseFontSize:Xh,InitIDGenerator:cP},dP=x(function(e){let t=e;return t=t.replace(/style.*:\S*#.*;/g,function(n){return n.substring(0,n.length-1)}),t=t.replace(/classDef.*:\S*#.*;/g,function(n){return n.substring(0,n.length-1)}),t=t.replace(/#\w+;/g,function(n){const a=n.substring(1,n.length-1);return/^\+?\d+$/.test(a)?"ﬂ°°"+a+"¶ß":"ﬂ°"+a+"¶ß"}),t},"encodeEntities"),Pa=x(function(e){return e.replace(/ﬂ°°/g,"&#").replace(/ﬂ°/g,"&").replace(/¶ß/g,";")},"decodeEntities"),dq=x((e,t,{counter:n=0,prefix:a,suffix:s},o)=>o||`${a?`${a}_`:""}${e}_${t}_${n}${s?`_${s}`:""}`,"getEdgeId");function ei(e){return e??null}x(ei,"handleUndefinedAttr");function g_(e,t){const n=Math.round(e.x),a=Math.round(e.y),s=t.replace(/(\d+\.\d+)/g,o=>Math.round(parseFloat(o)).toString());return s.includes(n.toString())||s.includes(a.toString())}x(g_,"isLabelCoordinateInPath");const fP=Object.freeze({left:0,top:0,width:16,height:16}),Sh=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),p_=Object.freeze({...fP,...Sh}),gP=Object.freeze({...p_,body:"",hidden:!1}),pP=Object.freeze({width:null,height:null}),mP=Object.freeze({...pP,...Sh}),yP=(e,t,n,a="")=>{const s=e.split(":");if(e.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;a=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const c=s.pop(),f=s.pop(),d={provider:s.length>0?s[0]:a,prefix:f,name:c};return Og(d)?d:null}const o=s[0],u=o.split("-");if(u.length>1){const c={provider:a,prefix:u.shift(),name:u.join("-")};return Og(c)?c:null}if(n&&a===""){const c={provider:a,prefix:"",name:o};return Og(c,n)?c:null}return null},Og=(e,t)=>e?!!((t&&e.prefix===""||e.prefix)&&e.name):!1;function bP(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const a=((e.rotate||0)+(t.rotate||0))%4;return a&&(n.rotate=a),n}function QS(e,t){const n=bP(e,t);for(const a in gP)a in Sh?a in e&&!(a in n)&&(n[a]=Sh[a]):a in t?n[a]=t[a]:a in e&&(n[a]=e[a]);return n}function vP(e,t){const n=e.icons,a=e.aliases||Object.create(null),s=Object.create(null);function o(u){if(n[u])return s[u]=[];if(!(u in s)){s[u]=null;const c=a[u]&&a[u].parent,f=c&&o(c);f&&(s[u]=[c].concat(f))}return s[u]}return(t||Object.keys(n).concat(Object.keys(a))).forEach(o),s}function KS(e,t,n){const a=e.icons,s=e.aliases||Object.create(null);let o={};function u(c){o=QS(a[c]||s[c],o)}return u(t),n.forEach(u),QS(e,o)}function SP(e,t){if(e.icons[t])return KS(e,t,[]);const n=vP(e,[t])[t];return n?KS(e,t,n):null}const xP=/(-?[0-9.]*[0-9]+[0-9.]*)/g,CP=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ZS(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const a=e.split(xP);if(a===null||!a.length)return e;const s=[];let o=a.shift(),u=CP.test(o);for(;;){if(u){const c=parseFloat(o);isNaN(c)?s.push(o):s.push(Math.ceil(c*t*n)/n)}else s.push(o);if(o=a.shift(),o===void 0)return s.join("");u=!u}}function _P(e,t="defs"){let n="";const a=e.indexOf("<"+t);for(;a>=0;){const s=e.indexOf(">",a),o=e.indexOf("</"+t);if(s===-1||o===-1)break;const u=e.indexOf(">",o);if(u===-1)break;n+=e.slice(s+1,o).trim(),e=e.slice(0,a).trim()+e.slice(u+1)}return{defs:n,content:e}}function TP(e,t){return e?"<defs>"+e+"</defs>"+t:t}function wP(e,t,n){const a=_P(e);return TP(a.defs,t+a.content+n)}const kP=e=>e==="unset"||e==="undefined"||e==="none";function AP(e,t){const n={...p_,...e},a={...mP,...t},s={left:n.left,top:n.top,width:n.width,height:n.height};let o=n.body;[n,a].forEach(C=>{const w=[],T=C.hFlip,k=C.vFlip;let E=C.rotate;T?k?E+=2:(w.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),w.push("scale(-1 1)"),s.top=s.left=0):k&&(w.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),w.push("scale(1 -1)"),s.top=s.left=0);let O;switch(E<0&&(E-=Math.floor(E/4)*4),E=E%4,E){case 1:O=s.height/2+s.top,w.unshift("rotate(90 "+O.toString()+" "+O.toString()+")");break;case 2:w.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:O=s.width/2+s.left,w.unshift("rotate(-90 "+O.toString()+" "+O.toString()+")");break}E%2===1&&(s.left!==s.top&&(O=s.left,s.left=s.top,s.top=O),s.width!==s.height&&(O=s.width,s.width=s.height,s.height=O)),w.length&&(o=wP(o,'<g transform="'+w.join(" ")+'">',"</g>"))});const u=a.width,c=a.height,f=s.width,d=s.height;let g,m;u===null?(m=c===null?"1em":c==="auto"?d:c,g=ZS(m,f/d)):(g=u==="auto"?f:u,m=c===null?ZS(g,d/f):c==="auto"?d:c);const b={},v=(C,w)=>{kP(w)||(b[C]=w.toString())};v("width",g),v("height",m);const S=[s.left,s.top,f,d];return b.viewBox=S.join(" "),{attributes:b,viewBox:S,body:o}}const EP=/\sid="(\S+)"/g,RP="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let MP=0;function LP(e,t=RP){const n=[];let a;for(;a=EP.exec(e);)n.push(a[1]);if(!n.length)return e;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(o=>{const u=typeof t=="function"?t(o):t+(MP++).toString(),c=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+u+s+"$3")}),e=e.replace(new RegExp(s,"g"),""),e}function DP(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const a in t)n+=" "+a+'="'+t[a]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Om(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ia=Om();function m_(e){Ia=e}var Do={exec:()=>null};function Kt(e,t=""){let n=typeof e=="string"?e:e.source;const a={replace:(s,o)=>{let u=typeof o=="string"?o:o.source;return u=u.replace(oi.caret,"$1"),n=n.replace(s,u),a},getRegex:()=>new RegExp(n,t)};return a}var oi={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},BP=/^(?:[ \t]*(?:\n|$))+/,OP=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,NP=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,nc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,PP=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Nm=/(?:[*+-]|\d{1,9}[.)])/,y_=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,b_=Kt(y_).replace(/bull/g,Nm).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),IP=Kt(y_).replace(/bull/g,Nm).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Pm=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,FP=/^[^\n]+/,Im=/(?!\s*\])(?:\\.|[^\[\]\\])+/,$P=Kt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Im).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),zP=Kt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Nm).getRegex(),Qh="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Fm=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,qP=Kt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Fm).replace("tag",Qh).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),v_=Kt(Pm).replace("hr",nc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Qh).getRegex(),UP=Kt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",v_).getRegex(),$m={blockquote:UP,code:OP,def:$P,fences:NP,heading:PP,hr:nc,html:qP,lheading:b_,list:zP,newline:BP,paragraph:v_,table:Do,text:FP},JS=Kt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",nc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Qh).getRegex(),HP={...$m,lheading:IP,table:JS,paragraph:Kt(Pm).replace("hr",nc).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",JS).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Qh).getRegex()},GP={...$m,html:Kt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Fm).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Do,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Kt(Pm).replace("hr",nc).replace("heading",` *#{1,6} *[^
]`).replace("lheading",b_).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},jP=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,YP=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,S_=/^( {2,}|\\)\n(?!\s*$)/,WP=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Kh=/[\p{P}\p{S}]/u,zm=/[\s\p{P}\p{S}]/u,x_=/[^\s\p{P}\p{S}]/u,VP=Kt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,zm).getRegex(),C_=/(?!~)[\p{P}\p{S}]/u,XP=/(?!~)[\s\p{P}\p{S}]/u,QP=/(?:[^\s\p{P}\p{S}]|~)/u,KP=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,__=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,ZP=Kt(__,"u").replace(/punct/g,Kh).getRegex(),JP=Kt(__,"u").replace(/punct/g,C_).getRegex(),T_="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",tI=Kt(T_,"gu").replace(/notPunctSpace/g,x_).replace(/punctSpace/g,zm).replace(/punct/g,Kh).getRegex(),eI=Kt(T_,"gu").replace(/notPunctSpace/g,QP).replace(/punctSpace/g,XP).replace(/punct/g,C_).getRegex(),iI=Kt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,x_).replace(/punctSpace/g,zm).replace(/punct/g,Kh).getRegex(),nI=Kt(/\\(punct)/,"gu").replace(/punct/g,Kh).getRegex(),rI=Kt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),aI=Kt(Fm).replace("(?:-->|$)","-->").getRegex(),sI=Kt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",aI).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),xh=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,lI=Kt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",xh).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),w_=Kt(/^!?\[(label)\]\[(ref)\]/).replace("label",xh).replace("ref",Im).getRegex(),k_=Kt(/^!?\[(ref)\](?:\[\])?/).replace("ref",Im).getRegex(),oI=Kt("reflink|nolink(?!\\()","g").replace("reflink",w_).replace("nolink",k_).getRegex(),qm={_backpedal:Do,anyPunctuation:nI,autolink:rI,blockSkip:KP,br:S_,code:YP,del:Do,emStrongLDelim:ZP,emStrongRDelimAst:tI,emStrongRDelimUnd:iI,escape:jP,link:lI,nolink:k_,punctuation:VP,reflink:w_,reflinkSearch:oI,tag:sI,text:WP,url:Do},cI={...qm,link:Kt(/^!?\[(label)\]\((.*?)\)/).replace("label",xh).getRegex(),reflink:Kt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",xh).getRegex()},kp={...qm,emStrongRDelimAst:eI,emStrongLDelim:JP,url:Kt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},uI={...kp,br:Kt(S_).replace("{2,}","*").getRegex(),text:Kt(kp.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},wu={normal:$m,gfm:HP,pedantic:GP},go={normal:qm,gfm:kp,breaks:uI,pedantic:cI},hI={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tx=e=>hI[e];function bn(e,t){if(t){if(oi.escapeTest.test(e))return e.replace(oi.escapeReplace,tx)}else if(oi.escapeTestNoEncode.test(e))return e.replace(oi.escapeReplaceNoEncode,tx);return e}function ex(e){try{e=encodeURI(e).replace(oi.percentDecode,"%")}catch{return null}return e}function ix(e,t){var o;const n=e.replace(oi.findPipe,(u,c,f)=>{let d=!1,g=c;for(;--g>=0&&f[g]==="\\";)d=!d;return d?"|":" |"}),a=n.split(oi.splitPipe);let s=0;if(a[0].trim()||a.shift(),a.length>0&&!((o=a.at(-1))!=null&&o.trim())&&a.pop(),t)if(a.length>t)a.splice(t);else for(;a.length<t;)a.push("");for(;s<a.length;s++)a[s]=a[s].trim().replace(oi.slashPipe,"|");return a}function po(e,t,n){const a=e.length;if(a===0)return"";let s=0;for(;s<a&&e.charAt(a-s-1)===t;)s++;return e.slice(0,a-s)}function dI(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let a=0;a<e.length;a++)if(e[a]==="\\")a++;else if(e[a]===t[0])n++;else if(e[a]===t[1]&&(n--,n<0))return a;return n>0?-2:-1}function nx(e,t,n,a,s){const o=t.href,u=t.title||null,c=e[1].replace(s.other.outputLinkReplace,"$1");a.state.inLink=!0;const f={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:u,text:c,tokens:a.inlineTokens(c)};return a.state.inLink=!1,f}function fI(e,t,n){const a=e.match(n.other.indentCodeCompensation);if(a===null)return t;const s=a[1];return t.split(`
`).map(o=>{const u=o.match(n.other.beginningSpace);if(u===null)return o;const[c]=u;return c.length>=s.length?o.slice(s.length):o}).join(`
`)}var Ch=class{constructor(e){ae(this,"options");ae(this,"rules");ae(this,"lexer");this.options=e||Ia}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:po(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],a=fI(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:a}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const a=po(n,"#");(this.options.pedantic||!a||this.rules.other.endingSpaceChar.test(a))&&(n=a.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:po(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=po(t[0],`
`).split(`
`),a="",s="";const o=[];for(;n.length>0;){let u=!1;const c=[];let f;for(f=0;f<n.length;f++)if(this.rules.other.blockquoteStart.test(n[f]))c.push(n[f]),u=!0;else if(!u)c.push(n[f]);else break;n=n.slice(f);const d=c.join(`
`),g=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");a=a?`${a}
${d}`:d,s=s?`${s}
${g}`:g;const m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,o,!0),this.lexer.state.top=m,n.length===0)break;const b=o.at(-1);if((b==null?void 0:b.type)==="code")break;if((b==null?void 0:b.type)==="blockquote"){const v=b,S=v.raw+`
`+n.join(`
`),C=this.blockquote(S);o[o.length-1]=C,a=a.substring(0,a.length-v.raw.length)+C.raw,s=s.substring(0,s.length-v.text.length)+C.text;break}else if((b==null?void 0:b.type)==="list"){const v=b,S=v.raw+`
`+n.join(`
`),C=this.list(S);o[o.length-1]=C,a=a.substring(0,a.length-b.raw.length)+C.raw,s=s.substring(0,s.length-v.raw.length)+C.raw,n=S.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:a,tokens:o,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const a=n.length>1,s={type:"list",raw:"",ordered:a,start:a?+n.slice(0,-1):"",loose:!1,items:[]};n=a?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=a?n:"[*+-]");const o=this.rules.other.listItemRegex(n);let u=!1;for(;e;){let f=!1,d="",g="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;d=t[0],e=e.substring(d.length);let m=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,T=>" ".repeat(3*T.length)),b=e.split(`
`,1)[0],v=!m.trim(),S=0;if(this.options.pedantic?(S=2,g=m.trimStart()):v?S=t[1].length+1:(S=t[2].search(this.rules.other.nonSpaceChar),S=S>4?1:S,g=m.slice(S),S+=t[1].length),v&&this.rules.other.blankLine.test(b)&&(d+=b+`
`,e=e.substring(b.length+1),f=!0),!f){const T=this.rules.other.nextBulletRegex(S),k=this.rules.other.hrRegex(S),E=this.rules.other.fencesBeginRegex(S),O=this.rules.other.headingBeginRegex(S),D=this.rules.other.htmlBeginRegex(S);for(;e;){const R=e.split(`
`,1)[0];let N;if(b=R,this.options.pedantic?(b=b.replace(this.rules.other.listReplaceNesting,"  "),N=b):N=b.replace(this.rules.other.tabCharGlobal,"    "),E.test(b)||O.test(b)||D.test(b)||T.test(b)||k.test(b))break;if(N.search(this.rules.other.nonSpaceChar)>=S||!b.trim())g+=`
`+N.slice(S);else{if(v||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||E.test(m)||O.test(m)||k.test(m))break;g+=`
`+b}!v&&!b.trim()&&(v=!0),d+=R+`
`,e=e.substring(R.length+1),m=N.slice(S)}}s.loose||(u?s.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(u=!0));let C=null,w;this.options.gfm&&(C=this.rules.other.listIsTask.exec(g),C&&(w=C[0]!=="[ ] ",g=g.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:d,task:!!C,checked:w,loose:!1,text:g,tokens:[]}),s.raw+=d}const c=s.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let f=0;f<s.items.length;f++)if(this.lexer.state.top=!1,s.items[f].tokens=this.lexer.blockTokens(s.items[f].text,[]),!s.loose){const d=s.items[f].tokens.filter(m=>m.type==="space"),g=d.length>0&&d.some(m=>this.rules.other.anyLine.test(m.raw));s.loose=g}if(s.loose)for(let f=0;f<s.items.length;f++)s.items[f].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),a=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:a,title:s}}}table(e){var u;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=ix(t[1]),a=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(u=t[3])!=null&&u.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===a.length){for(const c of a)this.rules.other.tableAlignRight.test(c)?o.align.push("right"):this.rules.other.tableAlignCenter.test(c)?o.align.push("center"):this.rules.other.tableAlignLeft.test(c)?o.align.push("left"):o.align.push(null);for(let c=0;c<n.length;c++)o.header.push({text:n[c],tokens:this.lexer.inline(n[c]),header:!0,align:o.align[c]});for(const c of s)o.rows.push(ix(c,o.header.length).map((f,d)=>({text:f,tokens:this.lexer.inline(f),header:!1,align:o.align[d]})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const o=po(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=dI(t[2],"()");if(o===-2)return;if(o>-1){const c=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let a=t[2],s="";if(this.options.pedantic){const o=this.rules.other.pedanticHrefTitle.exec(a);o&&(a=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return a=a.trim(),this.rules.other.startAngleBracket.test(a)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?a=a.slice(1):a=a.slice(1,-1)),nx(t,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const a=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=t[a.toLowerCase()];if(!s){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return nx(n,s,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let a=this.rules.inline.emStrongLDelim.exec(e);if(!a||a[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(a[1]||a[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...a[0]].length-1;let u,c,f=o,d=0;const g=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,t=t.slice(-1*e.length+o);(a=g.exec(t))!=null;){if(u=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!u)continue;if(c=[...u].length,a[3]||a[4]){f+=c;continue}else if((a[5]||a[6])&&o%3&&!((o+c)%3)){d+=c;continue}if(f-=c,f>0)continue;c=Math.min(c,c+f+d);const m=[...a[0]][0].length,b=e.slice(0,o+a.index+m+c);if(Math.min(o,c)%2){const S=b.slice(1,-1);return{type:"em",raw:b,text:S,tokens:this.lexer.inlineTokens(S)}}const v=b.slice(2,-2);return{type:"strong",raw:b,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const a=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return a&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,a;return t[2]==="@"?(n=t[1],a="mailto:"+n):(n=t[1],a=n),{type:"link",raw:t[0],text:n,href:a,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let a,s;if(t[2]==="@")a=t[0],s="mailto:"+a;else{let o;do o=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(o!==t[0]);a=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:a,href:s,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},tr=class Ap{constructor(t){ae(this,"tokens");ae(this,"options");ae(this,"state");ae(this,"tokenizer");ae(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ia,this.options.tokenizer=this.options.tokenizer||new Ch,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:oi,block:wu.normal,inline:go.normal};this.options.pedantic?(n.block=wu.pedantic,n.inline=go.pedantic):this.options.gfm&&(n.block=wu.gfm,this.options.breaks?n.inline=go.breaks:n.inline=go.gfm),this.tokenizer.rules=n}static get rules(){return{block:wu,inline:go}}static lex(t,n){return new Ap(n).lex(t)}static lexInline(t,n){return new Ap(n).inlineTokens(t)}lex(t){t=t.replace(oi.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const a=this.inlineQueue[n];this.inlineTokens(a.src,a.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],a=!1){var s,o,u;for(this.options.pedantic&&(t=t.replace(oi.tabCharGlobal,"    ").replace(oi.spaceLine,""));t;){let c;if((o=(s=this.options.extensions)==null?void 0:s.block)!=null&&o.some(d=>(c=d.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.space(t)){t=t.substring(c.raw.length);const d=n.at(-1);c.raw.length===1&&d!==void 0?d.raw+=`
`:n.push(c);continue}if(c=this.tokenizer.code(t)){t=t.substring(c.raw.length);const d=n.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=`
`+c.raw,d.text+=`
`+c.text,this.inlineQueue.at(-1).src=d.text):n.push(c);continue}if(c=this.tokenizer.fences(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.heading(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.hr(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.blockquote(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.list(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.html(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.def(t)){t=t.substring(c.raw.length);const d=n.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=`
`+c.raw,d.text+=`
`+c.raw,this.inlineQueue.at(-1).src=d.text):this.tokens.links[c.tag]||(this.tokens.links[c.tag]={href:c.href,title:c.title});continue}if(c=this.tokenizer.table(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.lheading(t)){t=t.substring(c.raw.length),n.push(c);continue}let f=t;if((u=this.options.extensions)!=null&&u.startBlock){let d=1/0;const g=t.slice(1);let m;this.options.extensions.startBlock.forEach(b=>{m=b.call({lexer:this},g),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(f=t.substring(0,d+1))}if(this.state.top&&(c=this.tokenizer.paragraph(f))){const d=n.at(-1);a&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=`
`+c.raw,d.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):n.push(c),a=f.length!==t.length,t=t.substring(c.raw.length);continue}if(c=this.tokenizer.text(t)){t=t.substring(c.raw.length);const d=n.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=`
`+c.raw,d.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):n.push(c);continue}if(t){const d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var c,f,d;let a=t,s=null;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)g.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,s.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let o=!1,u="";for(;t;){o||(u=""),o=!1;let g;if((f=(c=this.options.extensions)==null?void 0:c.inline)!=null&&f.some(b=>(g=b.call({lexer:this},t,n))?(t=t.substring(g.raw.length),n.push(g),!0):!1))continue;if(g=this.tokenizer.escape(t)){t=t.substring(g.raw.length),n.push(g);continue}if(g=this.tokenizer.tag(t)){t=t.substring(g.raw.length),n.push(g);continue}if(g=this.tokenizer.link(t)){t=t.substring(g.raw.length),n.push(g);continue}if(g=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(g.raw.length);const b=n.at(-1);g.type==="text"&&(b==null?void 0:b.type)==="text"?(b.raw+=g.raw,b.text+=g.text):n.push(g);continue}if(g=this.tokenizer.emStrong(t,a,u)){t=t.substring(g.raw.length),n.push(g);continue}if(g=this.tokenizer.codespan(t)){t=t.substring(g.raw.length),n.push(g);continue}if(g=this.tokenizer.br(t)){t=t.substring(g.raw.length),n.push(g);continue}if(g=this.tokenizer.del(t)){t=t.substring(g.raw.length),n.push(g);continue}if(g=this.tokenizer.autolink(t)){t=t.substring(g.raw.length),n.push(g);continue}if(!this.state.inLink&&(g=this.tokenizer.url(t))){t=t.substring(g.raw.length),n.push(g);continue}let m=t;if((d=this.options.extensions)!=null&&d.startInline){let b=1/0;const v=t.slice(1);let S;this.options.extensions.startInline.forEach(C=>{S=C.call({lexer:this},v),typeof S=="number"&&S>=0&&(b=Math.min(b,S))}),b<1/0&&b>=0&&(m=t.substring(0,b+1))}if(g=this.tokenizer.inlineText(m)){t=t.substring(g.raw.length),g.raw.slice(-1)!=="_"&&(u=g.raw.slice(-1)),o=!0;const b=n.at(-1);(b==null?void 0:b.type)==="text"?(b.raw+=g.raw,b.text+=g.text):n.push(g);continue}if(t){const b="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw new Error(b)}}return n}},_h=class{constructor(e){ae(this,"options");ae(this,"parser");this.options=e||Ia}space(e){return""}code({text:e,lang:t,escaped:n}){var o;const a=(o=(t||"").match(oi.notSpaceStart))==null?void 0:o[0],s=e.replace(oi.endingNewline,"")+`
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${bn(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const a=this.parser.parseInline(n),s=ex(e);if(s===null)return a;e=s;let o='<a href="'+e+'"';return t&&(o+=' title="'+bn(t)+'"'),o+=">"+a+"</a>",o}image({href:e,title:t,text:n,tokens:a}){a&&(n=this.parser.parseInline(a,this.parser.textRenderer));const s=ex(e);if(s===null)return bn(n);e=s;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${bn(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:bn(e.text)}},Um=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},er=class Ep{constructor(t){ae(this,"options");ae(this,"renderer");ae(this,"textRenderer");this.options=t||Ia,this.options.renderer=this.options.renderer||new _h,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Um}static parse(t,n){return new Ep(n).parse(t)}static parseInline(t,n){return new Ep(n).parseInline(t)}parse(t,n=!0){var s,o;let a="";for(let u=0;u<t.length;u++){const c=t[u];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[c.type]){const d=c,g=this.options.extensions.renderers[d.type].call({parser:this},d);if(g!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type)){a+=g||"";continue}}const f=c;switch(f.type){case"space":{a+=this.renderer.space(f);continue}case"hr":{a+=this.renderer.hr(f);continue}case"heading":{a+=this.renderer.heading(f);continue}case"code":{a+=this.renderer.code(f);continue}case"table":{a+=this.renderer.table(f);continue}case"blockquote":{a+=this.renderer.blockquote(f);continue}case"list":{a+=this.renderer.list(f);continue}case"html":{a+=this.renderer.html(f);continue}case"paragraph":{a+=this.renderer.paragraph(f);continue}case"text":{let d=f,g=this.renderer.text(d);for(;u+1<t.length&&t[u+1].type==="text";)d=t[++u],g+=`
`+this.renderer.text(d);n?a+=this.renderer.paragraph({type:"paragraph",raw:g,text:g,tokens:[{type:"text",raw:g,text:g,escaped:!0}]}):a+=g;continue}default:{const d='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return a}parseInline(t,n=this.renderer){var s,o;let a="";for(let u=0;u<t.length;u++){const c=t[u];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[c.type]){const d=this.options.extensions.renderers[c.type].call({parser:this},c);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(c.type)){a+=d||"";continue}}const f=c;switch(f.type){case"escape":{a+=n.text(f);break}case"html":{a+=n.html(f);break}case"link":{a+=n.link(f);break}case"image":{a+=n.image(f);break}case"strong":{a+=n.strong(f);break}case"em":{a+=n.em(f);break}case"codespan":{a+=n.codespan(f);break}case"br":{a+=n.br(f);break}case"del":{a+=n.del(f);break}case"text":{a+=n.text(f);break}default:{const d='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return a}},Hg,Uu=(Hg=class{constructor(e){ae(this,"options");ae(this,"block");this.options=e||Ia}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?tr.lex:tr.lexInline}provideParser(){return this.block?er.parse:er.parseInline}},ae(Hg,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Hg),gI=class{constructor(...e){ae(this,"defaults",Om());ae(this,"options",this.setOptions);ae(this,"parse",this.parseMarkdown(!0));ae(this,"parseInline",this.parseMarkdown(!1));ae(this,"Parser",er);ae(this,"Renderer",_h);ae(this,"TextRenderer",Um);ae(this,"Lexer",tr);ae(this,"Tokenizer",Ch);ae(this,"Hooks",Uu);this.use(...e)}walkTokens(e,t){var a,s;let n=[];for(const o of e)switch(n=n.concat(t.call(this,o)),o.type){case"table":{const u=o;for(const c of u.header)n=n.concat(this.walkTokens(c.tokens,t));for(const c of u.rows)for(const f of c)n=n.concat(this.walkTokens(f.tokens,t));break}case"list":{const u=o;n=n.concat(this.walkTokens(u.items,t));break}default:{const u=o;(s=(a=this.defaults.extensions)==null?void 0:a.childTokens)!=null&&s[u.type]?this.defaults.extensions.childTokens[u.type].forEach(c=>{const f=u[c].flat(1/0);n=n.concat(this.walkTokens(f,t))}):u.tokens&&(n=n.concat(this.walkTokens(u.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const a={...n};if(a.async=this.defaults.async||a.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const o=t.renderers[s.name];o?t.renderers[s.name]=function(...u){let c=s.renderer.apply(this,u);return c===!1&&(c=o.apply(this,u)),c}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[s.level];o?o.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),a.extensions=t),n.renderer){const s=this.defaults.renderer||new _h(this.defaults);for(const o in n.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const u=o,c=n.renderer[u],f=s[u];s[u]=(...d)=>{let g=c.apply(s,d);return g===!1&&(g=f.apply(s,d)),g||""}}a.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new Ch(this.defaults);for(const o in n.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const u=o,c=n.tokenizer[u],f=s[u];s[u]=(...d)=>{let g=c.apply(s,d);return g===!1&&(g=f.apply(s,d)),g}}a.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new Uu;for(const o in n.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const u=o,c=n.hooks[u],f=s[u];Uu.passThroughHooks.has(o)?s[u]=d=>{if(this.defaults.async)return Promise.resolve(c.call(s,d)).then(m=>f.call(s,m));const g=c.call(s,d);return f.call(s,g)}:s[u]=(...d)=>{let g=c.apply(s,d);return g===!1&&(g=f.apply(s,d)),g}}a.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,o=n.walkTokens;a.walkTokens=function(u){let c=[];return c.push(o.call(this,u)),s&&(c=c.concat(s.call(this,u))),c}}this.defaults={...this.defaults,...a}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return tr.lex(e,t??this.defaults)}parser(e,t){return er.parse(e,t??this.defaults)}parseMarkdown(e){return(n,a)=>{const s={...a},o={...this.defaults,...s},u=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&s.async===!1)return u(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return u(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return u(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=e);const c=o.hooks?o.hooks.provideLexer():e?tr.lex:tr.lexInline,f=o.hooks?o.hooks.provideParser():e?er.parse:er.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(d=>c(d,o)).then(d=>o.hooks?o.hooks.processAllTokens(d):d).then(d=>o.walkTokens?Promise.all(this.walkTokens(d,o.walkTokens)).then(()=>d):d).then(d=>f(d,o)).then(d=>o.hooks?o.hooks.postprocess(d):d).catch(u);try{o.hooks&&(n=o.hooks.preprocess(n));let d=c(n,o);o.hooks&&(d=o.hooks.processAllTokens(d)),o.walkTokens&&this.walkTokens(d,o.walkTokens);let g=f(d,o);return o.hooks&&(g=o.hooks.postprocess(g)),g}catch(d){return u(d)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const a="<p>An error occurred:</p><pre>"+bn(n.message+"",!0)+"</pre>";return t?Promise.resolve(a):a}if(t)return Promise.reject(n);throw n}}},Ma=new gI;function Xt(e,t){return Ma.parse(e,t)}Xt.options=Xt.setOptions=function(e){return Ma.setOptions(e),Xt.defaults=Ma.defaults,m_(Xt.defaults),Xt};Xt.getDefaults=Om;Xt.defaults=Ia;Xt.use=function(...e){return Ma.use(...e),Xt.defaults=Ma.defaults,m_(Xt.defaults),Xt};Xt.walkTokens=function(e,t){return Ma.walkTokens(e,t)};Xt.parseInline=Ma.parseInline;Xt.Parser=er;Xt.parser=er.parse;Xt.Renderer=_h;Xt.TextRenderer=Um;Xt.Lexer=tr;Xt.lexer=tr.lex;Xt.Tokenizer=Ch;Xt.Hooks=Uu;Xt.parse=Xt;Xt.options;Xt.setOptions;Xt.use;Xt.walkTokens;Xt.parseInline;er.parse;tr.lex;function A_(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=Array.from(typeof e=="string"?[e]:e);a[a.length-1]=a[a.length-1].replace(/\r?\n([\t ]*)$/,"");var s=a.reduce(function(c,f){var d=f.match(/\n([\t ]+|(?!\s).)/g);return d?c.concat(d.map(function(g){var m,b;return(b=(m=g.match(/[\t ]/g))===null||m===void 0?void 0:m.length)!==null&&b!==void 0?b:0})):c},[]);if(s.length){var o=new RegExp(`
[	 ]{`+Math.min.apply(Math,s)+"}","g");a=a.map(function(c){return c.replace(o,`
`)})}a[0]=a[0].replace(/^\r?\n/,"");var u=a[0];return t.forEach(function(c,f){var d=u.match(/(?:^|\n)( *)$/),g=d?d[1]:"",m=c;typeof c=="string"&&c.includes(`
`)&&(m=String(c).split(`
`).map(function(b,v){return v===0?b:""+g+b}).join(`
`)),u+=m+a[f+1]}),u}var pI={body:'<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',height:80,width:80},Rp=new Map,E_=new Map,mI=x(e=>{for(const t of e){if(!t.name)throw new Error('Invalid icon loader. Must have a "name" property with non-empty string value.');if(at.debug("Registering icon pack:",t.name),"loader"in t)E_.set(t.name,t.loader);else if("icons"in t)Rp.set(t.name,t.icons);else throw at.error("Invalid icon loader:",t),new Error('Invalid icon loader. Must have either "icons" or "loader" property.')}},"registerIconPacks"),R_=x(async(e,t)=>{const n=yP(e,!0,t!==void 0);if(!n)throw new Error(`Invalid icon name: ${e}`);const a=n.prefix||t;if(!a)throw new Error(`Icon name must contain a prefix: ${e}`);let s=Rp.get(a);if(!s){const u=E_.get(a);if(!u)throw new Error(`Icon set not found: ${n.prefix}`);try{s={...await u(),prefix:a},Rp.set(a,s)}catch(c){throw at.error(c),new Error(`Failed to load icon set: ${n.prefix}`)}}const o=SP(s,n.name);if(!o)throw new Error(`Icon not found: ${e}`);return o},"getRegisteredIconData"),yI=x(async e=>{try{return await R_(e),!0}catch{return!1}},"isIconAvailable"),rc=x(async(e,t,n)=>{let a;try{a=await R_(e,t==null?void 0:t.fallbackPrefix)}catch(u){at.error(u),a=pI}const s=AP(a,t),o=DP(LP(s.body),{...s.attributes,...n});return Vi(o,Je())},"getIconSVG");function M_(e,{markdownAutoWrap:t}){const a=e.replace(/<br\/>/g,`
`).replace(/\n{2,}/g,`
`),s=A_(a);return t===!1?s.replace(/ /g,"&nbsp;"):s}x(M_,"preprocessMarkdown");function L_(e,t={}){const n=M_(e,t),a=Xt.lexer(n),s=[[]];let o=0;function u(c,f="normal"){c.type==="text"?c.text.split(`
`).forEach((g,m)=>{m!==0&&(o++,s.push([])),g.split(" ").forEach(b=>{b=b.replace(/&#39;/g,"'"),b&&s[o].push({content:b,type:f})})}):c.type==="strong"||c.type==="em"?c.tokens.forEach(d=>{u(d,c.type)}):c.type==="html"&&s[o].push({content:c.text,type:"normal"})}return x(u,"processNode"),a.forEach(c=>{var f;c.type==="paragraph"?(f=c.tokens)==null||f.forEach(d=>{u(d)}):c.type==="html"?s[o].push({content:c.text,type:"normal"}):s[o].push({content:c.raw,type:"normal"})}),s}x(L_,"markdownToLines");function D_(e,{markdownAutoWrap:t}={}){const n=Xt.lexer(e);function a(s){var o,u,c;return s.type==="text"?t===!1?s.text.replace(/\n */g,"<br/>").replace(/ /g,"&nbsp;"):s.text.replace(/\n */g,"<br/>"):s.type==="strong"?`<strong>${(o=s.tokens)==null?void 0:o.map(a).join("")}</strong>`:s.type==="em"?`<em>${(u=s.tokens)==null?void 0:u.map(a).join("")}</em>`:s.type==="paragraph"?`<p>${(c=s.tokens)==null?void 0:c.map(a).join("")}</p>`:s.type==="space"?"":s.type==="html"?`${s.text}`:s.type==="escape"?s.text:(at.warn(`Unsupported markdown: ${s.type}`),s.raw)}return x(a,"output"),n.map(a).join("")}x(D_,"markdownToHTML");function B_(e){return Intl.Segmenter?[...new Intl.Segmenter().segment(e)].map(t=>t.segment):[...e]}x(B_,"splitTextToChars");function O_(e,t){const n=B_(t.content);return Hm(e,[],n,t.type)}x(O_,"splitWordToFitWidth");function Hm(e,t,n,a){if(n.length===0)return[{content:t.join(""),type:a},{content:"",type:a}];const[s,...o]=n,u=[...t,s];return e([{content:u.join(""),type:a}])?Hm(e,u,o,a):(t.length===0&&s&&(t.push(s),n.shift()),[{content:t.join(""),type:a},{content:n.join(""),type:a}])}x(Hm,"splitWordToFitWidthRecursion");function N_(e,t){if(e.some(({content:n})=>n.includes(`
`)))throw new Error("splitLineToFitWidth does not support newlines in the line");return Th(e,t)}x(N_,"splitLineToFitWidth");function Th(e,t,n=[],a=[]){if(e.length===0)return a.length>0&&n.push(a),n.length>0?n:[];let s="";e[0].content===" "&&(s=" ",e.shift());const o=e.shift()??{content:" ",type:"normal"},u=[...a];if(s!==""&&u.push({content:s,type:"normal"}),u.push(o),t(u))return Th(e,t,n,u);if(a.length>0)n.push(a),e.unshift(o);else if(o.content){const[c,f]=O_(t,o);n.push([c]),f.content&&e.unshift(f)}return Th(e,t,n)}x(Th,"splitLineToFitWidthRecursion");function Mp(e,t){t&&e.attr("style",t)}x(Mp,"applyStyle");async function P_(e,t,n,a,s=!1,o=Je()){const u=e.append("foreignObject");u.attr("width",`${10*n}px`),u.attr("height",`${10*n}px`);const c=u.append("xhtml:div"),f=$s(t.label)?await Zp(t.label.replace(Vs.lineBreakRegex,`
`),o):Vi(t.label,o),d=t.isNode?"nodeLabel":"edgeLabel",g=c.append("span");g.html(f),Mp(g,t.labelStyle),g.attr("class",`${d} ${a}`),Mp(c,t.labelStyle),c.style("display","table-cell"),c.style("white-space","nowrap"),c.style("line-height","1.5"),c.style("max-width",n+"px"),c.style("text-align","center"),c.attr("xmlns","http://www.w3.org/1999/xhtml"),s&&c.attr("class","labelBkg");let m=c.node().getBoundingClientRect();return m.width===n&&(c.style("display","table"),c.style("white-space","break-spaces"),c.style("width",n+"px"),m=c.node().getBoundingClientRect()),u.node()}x(P_,"addHtmlSpan");function Zh(e,t,n){return e.append("tspan").attr("class","text-outer-tspan").attr("x",0).attr("y",t*n-.1+"em").attr("dy",n+"em")}x(Zh,"createTspan");function I_(e,t,n){const a=e.append("text"),s=Zh(a,1,t);Jh(s,n);const o=s.node().getComputedTextLength();return a.remove(),o}x(I_,"computeWidthOfText");function bI(e,t,n){var u;const a=e.append("text"),s=Zh(a,1,t);Jh(s,[{content:n,type:"normal"}]);const o=(u=s.node())==null?void 0:u.getBoundingClientRect();return o&&a.remove(),o}x(bI,"computeDimensionOfText");function F_(e,t,n,a=!1){const o=t.append("g"),u=o.insert("rect").attr("class","background").attr("style","stroke: none"),c=o.append("text").attr("y","-10.1");let f=0;for(const d of n){const g=x(b=>I_(o,1.1,b)<=e,"checkWidth"),m=g(d)?[d]:N_(d,g);for(const b of m){const v=Zh(c,f,1.1);Jh(v,b),f++}}if(a){const d=c.node().getBBox(),g=2;return u.attr("x",d.x-g).attr("y",d.y-g).attr("width",d.width+2*g).attr("height",d.height+2*g),o.node()}else return c.node()}x(F_,"createFormattedText");function Jh(e,t){e.text(""),t.forEach((n,a)=>{const s=e.append("tspan").attr("font-style",n.type==="em"?"italic":"normal").attr("class","text-inner-tspan").attr("font-weight",n.type==="strong"?"bold":"normal");a===0?s.text(n.content):s.text(" "+n.content)})}x(Jh,"updateTextContentAndStyles");async function $_(e,t={}){const n=[];e.replace(/(fa[bklrs]?):fa-([\w-]+)/g,(s,o,u)=>(n.push((async()=>{const c=`${o}:${u}`;return await yI(c)?await rc(c,void 0,{class:"label-icon"}):`<i class='${Vi(s,t).replace(":"," ")}'></i>`})()),s));const a=await Promise.all(n);return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g,()=>a.shift()??"")}x($_,"replaceIconSubstring");var Gr=x(async(e,t="",{style:n="",isTitle:a=!1,classes:s="",useHtmlLabels:o=!0,isNode:u=!0,width:c=200,addSvgBackground:f=!1}={},d)=>{if(at.debug("XYZ createText",t,n,a,s,o,u,"addSvgBackground: ",f),o){const g=D_(t,d),m=await $_(Pa(g),d),b=t.replace(/\\\\/g,"\\"),v={isNode:u,label:$s(t)?b:m,labelStyle:n.replace("fill:","color:")};return await P_(e,v,c,s,f,d)}else{const g=t.replace(/<br\s*\/?>/g,"<br/>"),m=L_(g.replace("<br>","<br/>"),d),b=F_(c,e,m,t?f:!1);if(u){/stroke:/.exec(n)&&(n=n.replace("stroke:","lineColor:"));const v=n.replace(/stroke:[^;]+;?/g,"").replace(/stroke-width:[^;]+;?/g,"").replace(/fill:[^;]+;?/g,"").replace(/color:/g,"fill:");jt(b).attr("style",v)}else{const v=n.replace(/stroke:[^;]+;?/g,"").replace(/stroke-width:[^;]+;?/g,"").replace(/fill:[^;]+;?/g,"").replace(/background:/g,"fill:");jt(b).select("rect").attr("style",v.replace(/background:/g,"fill:"));const S=n.replace(/stroke:[^;]+;?/g,"").replace(/stroke-width:[^;]+;?/g,"").replace(/fill:[^;]+;?/g,"").replace(/color:/g,"fill:");jt(b).select("text").attr("style",S)}return b}},"createText");function Ng(e,t,n){if(e&&e.length){const[a,s]=t,o=Math.PI/180*n,u=Math.cos(o),c=Math.sin(o);for(const f of e){const[d,g]=f;f[0]=(d-a)*u-(g-s)*c+a,f[1]=(d-a)*c+(g-s)*u+s}}}function vI(e,t){return e[0]===t[0]&&e[1]===t[1]}function SI(e,t,n,a=1){const s=n,o=Math.max(t,.1),u=e[0]&&e[0][0]&&typeof e[0][0]=="number"?[e]:e,c=[0,0];if(s)for(const d of u)Ng(d,c,s);const f=function(d,g,m){const b=[];for(const k of d){const E=[...k];vI(E[0],E[E.length-1])||E.push([E[0][0],E[0][1]]),E.length>2&&b.push(E)}const v=[];g=Math.max(g,.1);const S=[];for(const k of b)for(let E=0;E<k.length-1;E++){const O=k[E],D=k[E+1];if(O[1]!==D[1]){const R=Math.min(O[1],D[1]);S.push({ymin:R,ymax:Math.max(O[1],D[1]),x:R===O[1]?O[0]:D[0],islope:(D[0]-O[0])/(D[1]-O[1])})}}if(S.sort((k,E)=>k.ymin<E.ymin?-1:k.ymin>E.ymin?1:k.x<E.x?-1:k.x>E.x?1:k.ymax===E.ymax?0:(k.ymax-E.ymax)/Math.abs(k.ymax-E.ymax)),!S.length)return v;let C=[],w=S[0].ymin,T=0;for(;C.length||S.length;){if(S.length){let k=-1;for(let E=0;E<S.length&&!(S[E].ymin>w);E++)k=E;S.splice(0,k+1).forEach(E=>{C.push({s:w,edge:E})})}if(C=C.filter(k=>!(k.edge.ymax<=w)),C.sort((k,E)=>k.edge.x===E.edge.x?0:(k.edge.x-E.edge.x)/Math.abs(k.edge.x-E.edge.x)),(m!==1||T%g==0)&&C.length>1)for(let k=0;k<C.length;k+=2){const E=k+1;if(E>=C.length)break;const O=C[k].edge,D=C[E].edge;v.push([[Math.round(O.x),w],[Math.round(D.x),w]])}w+=m,C.forEach(k=>{k.edge.x=k.edge.x+m*k.edge.islope}),T++}return v}(u,o,a);if(s){for(const d of u)Ng(d,c,-s);(function(d,g,m){const b=[];d.forEach(v=>b.push(...v)),Ng(b,g,m)})(f,c,-s)}return f}function ac(e,t){var n;const a=t.hachureAngle+90;let s=t.hachureGap;s<0&&(s=4*t.strokeWidth),s=Math.round(Math.max(s,.1));let o=1;return t.roughness>=1&&(((n=t.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(o=s),SI(e,s,a,o||1)}class Gm{constructor(t){this.helper=t}fillPolygons(t,n){return this._fillPolygons(t,n)}_fillPolygons(t,n){const a=ac(t,n);return{type:"fillSketch",ops:this.renderLines(a,n)}}renderLines(t,n){const a=[];for(const s of t)a.push(...this.helper.doubleLineOps(s[0][0],s[0][1],s[1][0],s[1][1],n));return a}}function td(e){const t=e[0],n=e[1];return Math.sqrt(Math.pow(t[0]-n[0],2)+Math.pow(t[1]-n[1],2))}class xI extends Gm{fillPolygons(t,n){let a=n.hachureGap;a<0&&(a=4*n.strokeWidth),a=Math.max(a,.1);const s=ac(t,Object.assign({},n,{hachureGap:a})),o=Math.PI/180*n.hachureAngle,u=[],c=.5*a*Math.cos(o),f=.5*a*Math.sin(o);for(const[d,g]of s)td([d,g])&&u.push([[d[0]-c,d[1]+f],[...g]],[[d[0]+c,d[1]-f],[...g]]);return{type:"fillSketch",ops:this.renderLines(u,n)}}}class CI extends Gm{fillPolygons(t,n){const a=this._fillPolygons(t,n),s=Object.assign({},n,{hachureAngle:n.hachureAngle+90}),o=this._fillPolygons(t,s);return a.ops=a.ops.concat(o.ops),a}}class _I{constructor(t){this.helper=t}fillPolygons(t,n){const a=ac(t,n=Object.assign({},n,{hachureAngle:0}));return this.dotsOnLines(a,n)}dotsOnLines(t,n){const a=[];let s=n.hachureGap;s<0&&(s=4*n.strokeWidth),s=Math.max(s,.1);let o=n.fillWeight;o<0&&(o=n.strokeWidth/2);const u=s/4;for(const c of t){const f=td(c),d=f/s,g=Math.ceil(d)-1,m=f-g*s,b=(c[0][0]+c[1][0])/2-s/4,v=Math.min(c[0][1],c[1][1]);for(let S=0;S<g;S++){const C=v+m+S*s,w=b-u+2*Math.random()*u,T=C-u+2*Math.random()*u,k=this.helper.ellipse(w,T,o,o,n);a.push(...k.ops)}}return{type:"fillSketch",ops:a}}}class TI{constructor(t){this.helper=t}fillPolygons(t,n){const a=ac(t,n);return{type:"fillSketch",ops:this.dashedLine(a,n)}}dashedLine(t,n){const a=n.dashOffset<0?n.hachureGap<0?4*n.strokeWidth:n.hachureGap:n.dashOffset,s=n.dashGap<0?n.hachureGap<0?4*n.strokeWidth:n.hachureGap:n.dashGap,o=[];return t.forEach(u=>{const c=td(u),f=Math.floor(c/(a+s)),d=(c+s-f*(a+s))/2;let g=u[0],m=u[1];g[0]>m[0]&&(g=u[1],m=u[0]);const b=Math.atan((m[1]-g[1])/(m[0]-g[0]));for(let v=0;v<f;v++){const S=v*(a+s),C=S+a,w=[g[0]+S*Math.cos(b)+d*Math.cos(b),g[1]+S*Math.sin(b)+d*Math.sin(b)],T=[g[0]+C*Math.cos(b)+d*Math.cos(b),g[1]+C*Math.sin(b)+d*Math.sin(b)];o.push(...this.helper.doubleLineOps(w[0],w[1],T[0],T[1],n))}}),o}}class wI{constructor(t){this.helper=t}fillPolygons(t,n){const a=n.hachureGap<0?4*n.strokeWidth:n.hachureGap,s=n.zigzagOffset<0?a:n.zigzagOffset,o=ac(t,n=Object.assign({},n,{hachureGap:a+s}));return{type:"fillSketch",ops:this.zigzagLines(o,s,n)}}zigzagLines(t,n,a){const s=[];return t.forEach(o=>{const u=td(o),c=Math.round(u/(2*n));let f=o[0],d=o[1];f[0]>d[0]&&(f=o[1],d=o[0]);const g=Math.atan((d[1]-f[1])/(d[0]-f[0]));for(let m=0;m<c;m++){const b=2*m*n,v=2*(m+1)*n,S=Math.sqrt(2*Math.pow(n,2)),C=[f[0]+b*Math.cos(g),f[1]+b*Math.sin(g)],w=[f[0]+v*Math.cos(g),f[1]+v*Math.sin(g)],T=[C[0]+S*Math.cos(g+Math.PI/4),C[1]+S*Math.sin(g+Math.PI/4)];s.push(...this.helper.doubleLineOps(C[0],C[1],T[0],T[1],a),...this.helper.doubleLineOps(T[0],T[1],w[0],w[1],a))}}),s}}const vi={};class kI{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const AI=0,Pg=1,rx=2,ku={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function Ig(e,t){return e.type===t}function jm(e){const t=[],n=function(u){const c=new Array;for(;u!=="";)if(u.match(/^([ \t\r\n,]+)/))u=u.substr(RegExp.$1.length);else if(u.match(/^([aAcChHlLmMqQsStTvVzZ])/))c[c.length]={type:AI,text:RegExp.$1},u=u.substr(RegExp.$1.length);else{if(!u.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];c[c.length]={type:Pg,text:`${parseFloat(RegExp.$1)}`},u=u.substr(RegExp.$1.length)}return c[c.length]={type:rx,text:""},c}(e);let a="BOD",s=0,o=n[s];for(;!Ig(o,rx);){let u=0;const c=[];if(a==="BOD"){if(o.text!=="M"&&o.text!=="m")return jm("M0,0"+e);s++,u=ku[o.text],a=o.text}else Ig(o,Pg)?u=ku[a]:(s++,u=ku[o.text],a=o.text);if(!(s+u<n.length))throw new Error("Path data ended short");for(let f=s;f<s+u;f++){const d=n[f];if(!Ig(d,Pg))throw new Error("Param not a number: "+a+","+d.text);c[c.length]=+d.text}if(typeof ku[a]!="number")throw new Error("Bad segment: "+a);{const f={key:a,data:c};t.push(f),s+=u,o=n[s],a==="M"&&(a="L"),a==="m"&&(a="l")}}return t}function z_(e){let t=0,n=0,a=0,s=0;const o=[];for(const{key:u,data:c}of e)switch(u){case"M":o.push({key:"M",data:[...c]}),[t,n]=c,[a,s]=c;break;case"m":t+=c[0],n+=c[1],o.push({key:"M",data:[t,n]}),a=t,s=n;break;case"L":o.push({key:"L",data:[...c]}),[t,n]=c;break;case"l":t+=c[0],n+=c[1],o.push({key:"L",data:[t,n]});break;case"C":o.push({key:"C",data:[...c]}),t=c[4],n=c[5];break;case"c":{const f=c.map((d,g)=>g%2?d+n:d+t);o.push({key:"C",data:f}),t=f[4],n=f[5];break}case"Q":o.push({key:"Q",data:[...c]}),t=c[2],n=c[3];break;case"q":{const f=c.map((d,g)=>g%2?d+n:d+t);o.push({key:"Q",data:f}),t=f[2],n=f[3];break}case"A":o.push({key:"A",data:[...c]}),t=c[5],n=c[6];break;case"a":t+=c[5],n+=c[6],o.push({key:"A",data:[c[0],c[1],c[2],c[3],c[4],t,n]});break;case"H":o.push({key:"H",data:[...c]}),t=c[0];break;case"h":t+=c[0],o.push({key:"H",data:[t]});break;case"V":o.push({key:"V",data:[...c]}),n=c[0];break;case"v":n+=c[0],o.push({key:"V",data:[n]});break;case"S":o.push({key:"S",data:[...c]}),t=c[2],n=c[3];break;case"s":{const f=c.map((d,g)=>g%2?d+n:d+t);o.push({key:"S",data:f}),t=f[2],n=f[3];break}case"T":o.push({key:"T",data:[...c]}),t=c[0],n=c[1];break;case"t":t+=c[0],n+=c[1],o.push({key:"T",data:[t,n]});break;case"Z":case"z":o.push({key:"Z",data:[]}),t=a,n=s}return o}function q_(e){const t=[];let n="",a=0,s=0,o=0,u=0,c=0,f=0;for(const{key:d,data:g}of e){switch(d){case"M":t.push({key:"M",data:[...g]}),[a,s]=g,[o,u]=g;break;case"C":t.push({key:"C",data:[...g]}),a=g[4],s=g[5],c=g[2],f=g[3];break;case"L":t.push({key:"L",data:[...g]}),[a,s]=g;break;case"H":a=g[0],t.push({key:"L",data:[a,s]});break;case"V":s=g[0],t.push({key:"L",data:[a,s]});break;case"S":{let m=0,b=0;n==="C"||n==="S"?(m=a+(a-c),b=s+(s-f)):(m=a,b=s),t.push({key:"C",data:[m,b,...g]}),c=g[0],f=g[1],a=g[2],s=g[3];break}case"T":{const[m,b]=g;let v=0,S=0;n==="Q"||n==="T"?(v=a+(a-c),S=s+(s-f)):(v=a,S=s);const C=a+2*(v-a)/3,w=s+2*(S-s)/3,T=m+2*(v-m)/3,k=b+2*(S-b)/3;t.push({key:"C",data:[C,w,T,k,m,b]}),c=v,f=S,a=m,s=b;break}case"Q":{const[m,b,v,S]=g,C=a+2*(m-a)/3,w=s+2*(b-s)/3,T=v+2*(m-v)/3,k=S+2*(b-S)/3;t.push({key:"C",data:[C,w,T,k,v,S]}),c=m,f=b,a=v,s=S;break}case"A":{const m=Math.abs(g[0]),b=Math.abs(g[1]),v=g[2],S=g[3],C=g[4],w=g[5],T=g[6];m===0||b===0?(t.push({key:"C",data:[a,s,w,T,w,T]}),a=w,s=T):(a!==w||s!==T)&&(U_(a,s,w,T,m,b,v,S,C).forEach(function(k){t.push({key:"C",data:k})}),a=w,s=T);break}case"Z":t.push({key:"Z",data:[]}),a=o,s=u}n=d}return t}function mo(e,t,n){return[e*Math.cos(n)-t*Math.sin(n),e*Math.sin(n)+t*Math.cos(n)]}function U_(e,t,n,a,s,o,u,c,f,d){const g=(m=u,Math.PI*m/180);var m;let b=[],v=0,S=0,C=0,w=0;if(d)[v,S,C,w]=d;else{[e,t]=mo(e,t,-g),[n,a]=mo(n,a,-g);const rt=(e-n)/2,W=(t-a)/2;let j=rt*rt/(s*s)+W*W/(o*o);j>1&&(j=Math.sqrt(j),s*=j,o*=j);const M=s*s,F=o*o,$=M*F-M*W*W-F*rt*rt,ut=M*W*W+F*rt*rt,L=(c===f?-1:1)*Math.sqrt(Math.abs($/ut));C=L*s*W/o+(e+n)/2,w=L*-o*rt/s+(t+a)/2,v=Math.asin(parseFloat(((t-w)/o).toFixed(9))),S=Math.asin(parseFloat(((a-w)/o).toFixed(9))),e<C&&(v=Math.PI-v),n<C&&(S=Math.PI-S),v<0&&(v=2*Math.PI+v),S<0&&(S=2*Math.PI+S),f&&v>S&&(v-=2*Math.PI),!f&&S>v&&(S-=2*Math.PI)}let T=S-v;if(Math.abs(T)>120*Math.PI/180){const rt=S,W=n,j=a;S=f&&S>v?v+120*Math.PI/180*1:v+120*Math.PI/180*-1,b=U_(n=C+s*Math.cos(S),a=w+o*Math.sin(S),W,j,s,o,u,0,f,[S,rt,C,w])}T=S-v;const k=Math.cos(v),E=Math.sin(v),O=Math.cos(S),D=Math.sin(S),R=Math.tan(T/4),N=4/3*s*R,K=4/3*o*R,it=[e,t],nt=[e+N*E,t-K*k],X=[n+N*D,a-K*O],st=[n,a];if(nt[0]=2*it[0]-nt[0],nt[1]=2*it[1]-nt[1],d)return[nt,X,st].concat(b);{b=[nt,X,st].concat(b);const rt=[];for(let W=0;W<b.length;W+=3){const j=mo(b[W][0],b[W][1],g),M=mo(b[W+1][0],b[W+1][1],g),F=mo(b[W+2][0],b[W+2][1],g);rt.push([j[0],j[1],M[0],M[1],F[0],F[1]])}return rt}}const EI={randOffset:function(e,t){return Dt(e,t)},randOffsetWithRange:function(e,t,n){return wh(e,t,n)},ellipse:function(e,t,n,a,s){const o=G_(n,a,s);return Lp(e,t,s,o).opset},doubleLineOps:function(e,t,n,a,s){return qr(e,t,n,a,s,!0)}};function H_(e,t,n,a,s){return{type:"path",ops:qr(e,t,n,a,s)}}function Hu(e,t,n){const a=(e||[]).length;if(a>2){const s=[];for(let o=0;o<a-1;o++)s.push(...qr(e[o][0],e[o][1],e[o+1][0],e[o+1][1],n));return t&&s.push(...qr(e[a-1][0],e[a-1][1],e[0][0],e[0][1],n)),{type:"path",ops:s}}return a===2?H_(e[0][0],e[0][1],e[1][0],e[1][1],n):{type:"path",ops:[]}}function RI(e,t,n,a,s){return function(o,u){return Hu(o,!0,u)}([[e,t],[e+n,t],[e+n,t+a],[e,t+a]],s)}function ax(e,t){if(e.length){const n=typeof e[0][0]=="number"?[e]:e,a=Au(n[0],1*(1+.2*t.roughness),t),s=t.disableMultiStroke?[]:Au(n[0],1.5*(1+.22*t.roughness),ox(t));for(let o=1;o<n.length;o++){const u=n[o];if(u.length){const c=Au(u,1*(1+.2*t.roughness),t),f=t.disableMultiStroke?[]:Au(u,1.5*(1+.22*t.roughness),ox(t));for(const d of c)d.op!=="move"&&a.push(d);for(const d of f)d.op!=="move"&&s.push(d)}}return{type:"path",ops:a.concat(s)}}return{type:"path",ops:[]}}function G_(e,t,n){const a=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(e/2,2)+Math.pow(t/2,2))/2)),s=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*a)),o=2*Math.PI/s;let u=Math.abs(e/2),c=Math.abs(t/2);const f=1-n.curveFitting;return u+=Dt(u*f,n),c+=Dt(c*f,n),{increment:o,rx:u,ry:c}}function Lp(e,t,n,a){const[s,o]=cx(a.increment,e,t,a.rx,a.ry,1,a.increment*wh(.1,wh(.4,1,n),n),n);let u=kh(s,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[c]=cx(a.increment,e,t,a.rx,a.ry,1.5,0,n),f=kh(c,null,n);u=u.concat(f)}return{estimatedPoints:o,opset:{type:"path",ops:u}}}function sx(e,t,n,a,s,o,u,c,f){const d=e,g=t;let m=Math.abs(n/2),b=Math.abs(a/2);m+=Dt(.01*m,f),b+=Dt(.01*b,f);let v=s,S=o;for(;v<0;)v+=2*Math.PI,S+=2*Math.PI;S-v>2*Math.PI&&(v=0,S=2*Math.PI);const C=2*Math.PI/f.curveStepCount,w=Math.min(C/2,(S-v)/2),T=ux(w,d,g,m,b,v,S,1,f);if(!f.disableMultiStroke){const k=ux(w,d,g,m,b,v,S,1.5,f);T.push(...k)}return u&&(c?T.push(...qr(d,g,d+m*Math.cos(v),g+b*Math.sin(v),f),...qr(d,g,d+m*Math.cos(S),g+b*Math.sin(S),f)):T.push({op:"lineTo",data:[d,g]},{op:"lineTo",data:[d+m*Math.cos(v),g+b*Math.sin(v)]})),{type:"path",ops:T}}function lx(e,t){const n=q_(z_(jm(e))),a=[];let s=[0,0],o=[0,0];for(const{key:u,data:c}of n)switch(u){case"M":o=[c[0],c[1]],s=[c[0],c[1]];break;case"L":a.push(...qr(o[0],o[1],c[0],c[1],t)),o=[c[0],c[1]];break;case"C":{const[f,d,g,m,b,v]=c;a.push(...MI(f,d,g,m,b,v,o,t)),o=[b,v];break}case"Z":a.push(...qr(o[0],o[1],s[0],s[1],t)),o=[s[0],s[1]]}return{type:"path",ops:a}}function Fg(e,t){const n=[];for(const a of e)if(a.length){const s=t.maxRandomnessOffset||0,o=a.length;if(o>2){n.push({op:"move",data:[a[0][0]+Dt(s,t),a[0][1]+Dt(s,t)]});for(let u=1;u<o;u++)n.push({op:"lineTo",data:[a[u][0]+Dt(s,t),a[u][1]+Dt(s,t)]})}}return{type:"fillPath",ops:n}}function Cs(e,t){return function(n,a){let s=n.fillStyle||"hachure";if(!vi[s])switch(s){case"zigzag":vi[s]||(vi[s]=new xI(a));break;case"cross-hatch":vi[s]||(vi[s]=new CI(a));break;case"dots":vi[s]||(vi[s]=new _I(a));break;case"dashed":vi[s]||(vi[s]=new TI(a));break;case"zigzag-line":vi[s]||(vi[s]=new wI(a));break;default:s="hachure",vi[s]||(vi[s]=new Gm(a))}return vi[s]}(t,EI).fillPolygons(e,t)}function ox(e){const t=Object.assign({},e);return t.randomizer=void 0,e.seed&&(t.seed=e.seed+1),t}function j_(e){return e.randomizer||(e.randomizer=new kI(e.seed||0)),e.randomizer.next()}function wh(e,t,n,a=1){return n.roughness*a*(j_(n)*(t-e)+e)}function Dt(e,t,n=1){return wh(-e,e,t,n)}function qr(e,t,n,a,s,o=!1){const u=o?s.disableMultiStrokeFill:s.disableMultiStroke,c=Dp(e,t,n,a,s,!0,!1);if(u)return c;const f=Dp(e,t,n,a,s,!0,!0);return c.concat(f)}function Dp(e,t,n,a,s,o,u){const c=Math.pow(e-n,2)+Math.pow(t-a,2),f=Math.sqrt(c);let d=1;d=f<200?1:f>500?.4:-.0016668*f+1.233334;let g=s.maxRandomnessOffset||0;g*g*100>c&&(g=f/10);const m=g/2,b=.2+.2*j_(s);let v=s.bowing*s.maxRandomnessOffset*(a-t)/200,S=s.bowing*s.maxRandomnessOffset*(e-n)/200;v=Dt(v,s,d),S=Dt(S,s,d);const C=[],w=()=>Dt(m,s,d),T=()=>Dt(g,s,d),k=s.preserveVertices;return u?C.push({op:"move",data:[e+(k?0:w()),t+(k?0:w())]}):C.push({op:"move",data:[e+(k?0:Dt(g,s,d)),t+(k?0:Dt(g,s,d))]}),u?C.push({op:"bcurveTo",data:[v+e+(n-e)*b+w(),S+t+(a-t)*b+w(),v+e+2*(n-e)*b+w(),S+t+2*(a-t)*b+w(),n+(k?0:w()),a+(k?0:w())]}):C.push({op:"bcurveTo",data:[v+e+(n-e)*b+T(),S+t+(a-t)*b+T(),v+e+2*(n-e)*b+T(),S+t+2*(a-t)*b+T(),n+(k?0:T()),a+(k?0:T())]}),C}function Au(e,t,n){if(!e.length)return[];const a=[];a.push([e[0][0]+Dt(t,n),e[0][1]+Dt(t,n)]),a.push([e[0][0]+Dt(t,n),e[0][1]+Dt(t,n)]);for(let s=1;s<e.length;s++)a.push([e[s][0]+Dt(t,n),e[s][1]+Dt(t,n)]),s===e.length-1&&a.push([e[s][0]+Dt(t,n),e[s][1]+Dt(t,n)]);return kh(a,null,n)}function kh(e,t,n){const a=e.length,s=[];if(a>3){const o=[],u=1-n.curveTightness;s.push({op:"move",data:[e[1][0],e[1][1]]});for(let c=1;c+2<a;c++){const f=e[c];o[0]=[f[0],f[1]],o[1]=[f[0]+(u*e[c+1][0]-u*e[c-1][0])/6,f[1]+(u*e[c+1][1]-u*e[c-1][1])/6],o[2]=[e[c+1][0]+(u*e[c][0]-u*e[c+2][0])/6,e[c+1][1]+(u*e[c][1]-u*e[c+2][1])/6],o[3]=[e[c+1][0],e[c+1][1]],s.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]})}}else a===3?(s.push({op:"move",data:[e[1][0],e[1][1]]}),s.push({op:"bcurveTo",data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):a===2&&s.push(...Dp(e[0][0],e[0][1],e[1][0],e[1][1],n,!0,!0));return s}function cx(e,t,n,a,s,o,u,c){const f=[],d=[];if(c.roughness===0){e/=4,d.push([t+a*Math.cos(-e),n+s*Math.sin(-e)]);for(let g=0;g<=2*Math.PI;g+=e){const m=[t+a*Math.cos(g),n+s*Math.sin(g)];f.push(m),d.push(m)}d.push([t+a*Math.cos(0),n+s*Math.sin(0)]),d.push([t+a*Math.cos(e),n+s*Math.sin(e)])}else{const g=Dt(.5,c)-Math.PI/2;d.push([Dt(o,c)+t+.9*a*Math.cos(g-e),Dt(o,c)+n+.9*s*Math.sin(g-e)]);const m=2*Math.PI+g-.01;for(let b=g;b<m;b+=e){const v=[Dt(o,c)+t+a*Math.cos(b),Dt(o,c)+n+s*Math.sin(b)];f.push(v),d.push(v)}d.push([Dt(o,c)+t+a*Math.cos(g+2*Math.PI+.5*u),Dt(o,c)+n+s*Math.sin(g+2*Math.PI+.5*u)]),d.push([Dt(o,c)+t+.98*a*Math.cos(g+u),Dt(o,c)+n+.98*s*Math.sin(g+u)]),d.push([Dt(o,c)+t+.9*a*Math.cos(g+.5*u),Dt(o,c)+n+.9*s*Math.sin(g+.5*u)])}return[d,f]}function ux(e,t,n,a,s,o,u,c,f){const d=o+Dt(.1,f),g=[];g.push([Dt(c,f)+t+.9*a*Math.cos(d-e),Dt(c,f)+n+.9*s*Math.sin(d-e)]);for(let m=d;m<=u;m+=e)g.push([Dt(c,f)+t+a*Math.cos(m),Dt(c,f)+n+s*Math.sin(m)]);return g.push([t+a*Math.cos(u),n+s*Math.sin(u)]),g.push([t+a*Math.cos(u),n+s*Math.sin(u)]),kh(g,null,f)}function MI(e,t,n,a,s,o,u,c){const f=[],d=[c.maxRandomnessOffset||1,(c.maxRandomnessOffset||1)+.3];let g=[0,0];const m=c.disableMultiStroke?1:2,b=c.preserveVertices;for(let v=0;v<m;v++)v===0?f.push({op:"move",data:[u[0],u[1]]}):f.push({op:"move",data:[u[0]+(b?0:Dt(d[0],c)),u[1]+(b?0:Dt(d[0],c))]}),g=b?[s,o]:[s+Dt(d[v],c),o+Dt(d[v],c)],f.push({op:"bcurveTo",data:[e+Dt(d[v],c),t+Dt(d[v],c),n+Dt(d[v],c),a+Dt(d[v],c),g[0],g[1]]});return f}function yo(e){return[...e]}function hx(e,t=0){const n=e.length;if(n<3)throw new Error("A curve must have at least three points.");const a=[];if(n===3)a.push(yo(e[0]),yo(e[1]),yo(e[2]),yo(e[2]));else{const s=[];s.push(e[0],e[0]);for(let c=1;c<e.length;c++)s.push(e[c]),c===e.length-1&&s.push(e[c]);const o=[],u=1-t;a.push(yo(s[0]));for(let c=1;c+2<s.length;c++){const f=s[c];o[0]=[f[0],f[1]],o[1]=[f[0]+(u*s[c+1][0]-u*s[c-1][0])/6,f[1]+(u*s[c+1][1]-u*s[c-1][1])/6],o[2]=[s[c+1][0]+(u*s[c][0]-u*s[c+2][0])/6,s[c+1][1]+(u*s[c][1]-u*s[c+2][1])/6],o[3]=[s[c+1][0],s[c+1][1]],a.push(o[1],o[2],o[3])}}return a}function Gu(e,t){return Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)}function LI(e,t,n){const a=Gu(t,n);if(a===0)return Gu(e,t);let s=((e[0]-t[0])*(n[0]-t[0])+(e[1]-t[1])*(n[1]-t[1]))/a;return s=Math.max(0,Math.min(1,s)),Gu(e,ma(t,n,s))}function ma(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n]}function Bp(e,t,n,a){const s=a||[];if(function(c,f){const d=c[f+0],g=c[f+1],m=c[f+2],b=c[f+3];let v=3*g[0]-2*d[0]-b[0];v*=v;let S=3*g[1]-2*d[1]-b[1];S*=S;let C=3*m[0]-2*b[0]-d[0];C*=C;let w=3*m[1]-2*b[1]-d[1];return w*=w,v<C&&(v=C),S<w&&(S=w),v+S}(e,t)<n){const c=e[t+0];s.length?(o=s[s.length-1],u=c,Math.sqrt(Gu(o,u))>1&&s.push(c)):s.push(c),s.push(e[t+3])}else{const f=e[t+0],d=e[t+1],g=e[t+2],m=e[t+3],b=ma(f,d,.5),v=ma(d,g,.5),S=ma(g,m,.5),C=ma(b,v,.5),w=ma(v,S,.5),T=ma(C,w,.5);Bp([f,b,C,T],0,n,s),Bp([T,w,S,m],0,n,s)}var o,u;return s}function DI(e,t){return Ah(e,0,e.length,t)}function Ah(e,t,n,a,s){const o=s||[],u=e[t],c=e[n-1];let f=0,d=1;for(let g=t+1;g<n-1;++g){const m=LI(e[g],u,c);m>f&&(f=m,d=g)}return Math.sqrt(f)>a?(Ah(e,t,d+1,a,o),Ah(e,d,n,a,o)):(o.length||o.push(u),o.push(c)),o}function $g(e,t=.15,n){const a=[],s=(e.length-1)/3;for(let o=0;o<s;o++)Bp(e,3*o,t,a);return n&&n>0?Ah(a,0,a.length,n):a}const Di="none";class Eh{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1,fillShapeRoughnessGain:.8},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,n,a){return{shape:t,sets:n||[],options:a||this.defaultOptions}}line(t,n,a,s,o){const u=this._o(o);return this._d("line",[H_(t,n,a,s,u)],u)}rectangle(t,n,a,s,o){const u=this._o(o),c=[],f=RI(t,n,a,s,u);if(u.fill){const d=[[t,n],[t+a,n],[t+a,n+s],[t,n+s]];u.fillStyle==="solid"?c.push(Fg([d],u)):c.push(Cs([d],u))}return u.stroke!==Di&&c.push(f),this._d("rectangle",c,u)}ellipse(t,n,a,s,o){const u=this._o(o),c=[],f=G_(a,s,u),d=Lp(t,n,u,f);if(u.fill)if(u.fillStyle==="solid"){const g=Lp(t,n,u,f).opset;g.type="fillPath",c.push(g)}else c.push(Cs([d.estimatedPoints],u));return u.stroke!==Di&&c.push(d.opset),this._d("ellipse",c,u)}circle(t,n,a,s){const o=this.ellipse(t,n,a,a,s);return o.shape="circle",o}linearPath(t,n){const a=this._o(n);return this._d("linearPath",[Hu(t,!1,a)],a)}arc(t,n,a,s,o,u,c=!1,f){const d=this._o(f),g=[],m=sx(t,n,a,s,o,u,c,!0,d);if(c&&d.fill)if(d.fillStyle==="solid"){const b=Object.assign({},d);b.disableMultiStroke=!0;const v=sx(t,n,a,s,o,u,!0,!1,b);v.type="fillPath",g.push(v)}else g.push(function(b,v,S,C,w,T,k){const E=b,O=v;let D=Math.abs(S/2),R=Math.abs(C/2);D+=Dt(.01*D,k),R+=Dt(.01*R,k);let N=w,K=T;for(;N<0;)N+=2*Math.PI,K+=2*Math.PI;K-N>2*Math.PI&&(N=0,K=2*Math.PI);const it=(K-N)/k.curveStepCount,nt=[];for(let X=N;X<=K;X+=it)nt.push([E+D*Math.cos(X),O+R*Math.sin(X)]);return nt.push([E+D*Math.cos(K),O+R*Math.sin(K)]),nt.push([E,O]),Cs([nt],k)}(t,n,a,s,o,u,d));return d.stroke!==Di&&g.push(m),this._d("arc",g,d)}curve(t,n){const a=this._o(n),s=[],o=ax(t,a);if(a.fill&&a.fill!==Di)if(a.fillStyle==="solid"){const u=ax(t,Object.assign(Object.assign({},a),{disableMultiStroke:!0,roughness:a.roughness?a.roughness+a.fillShapeRoughnessGain:0}));s.push({type:"fillPath",ops:this._mergedShape(u.ops)})}else{const u=[],c=t;if(c.length){const f=typeof c[0][0]=="number"?[c]:c;for(const d of f)d.length<3?u.push(...d):d.length===3?u.push(...$g(hx([d[0],d[0],d[1],d[2]]),10,(1+a.roughness)/2)):u.push(...$g(hx(d),10,(1+a.roughness)/2))}u.length&&s.push(Cs([u],a))}return a.stroke!==Di&&s.push(o),this._d("curve",s,a)}polygon(t,n){const a=this._o(n),s=[],o=Hu(t,!0,a);return a.fill&&(a.fillStyle==="solid"?s.push(Fg([t],a)):s.push(Cs([t],a))),a.stroke!==Di&&s.push(o),this._d("polygon",s,a)}path(t,n){const a=this._o(n),s=[];if(!t)return this._d("path",s,a);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const o=a.fill&&a.fill!=="transparent"&&a.fill!==Di,u=a.stroke!==Di,c=!!(a.simplification&&a.simplification<1),f=function(g,m,b){const v=q_(z_(jm(g))),S=[];let C=[],w=[0,0],T=[];const k=()=>{T.length>=4&&C.push(...$g(T,m)),T=[]},E=()=>{k(),C.length&&(S.push(C),C=[])};for(const{key:D,data:R}of v)switch(D){case"M":E(),w=[R[0],R[1]],C.push(w);break;case"L":k(),C.push([R[0],R[1]]);break;case"C":if(!T.length){const N=C.length?C[C.length-1]:w;T.push([N[0],N[1]])}T.push([R[0],R[1]]),T.push([R[2],R[3]]),T.push([R[4],R[5]]);break;case"Z":k(),C.push([w[0],w[1]])}if(E(),!b)return S;const O=[];for(const D of S){const R=DI(D,b);R.length&&O.push(R)}return O}(t,1,c?4-4*(a.simplification||1):(1+a.roughness)/2),d=lx(t,a);if(o)if(a.fillStyle==="solid")if(f.length===1){const g=lx(t,Object.assign(Object.assign({},a),{disableMultiStroke:!0,roughness:a.roughness?a.roughness+a.fillShapeRoughnessGain:0}));s.push({type:"fillPath",ops:this._mergedShape(g.ops)})}else s.push(Fg(f,a));else s.push(Cs(f,a));return u&&(c?f.forEach(g=>{s.push(Hu(g,!1,a))}):s.push(d)),this._d("path",s,a)}opsToPath(t,n){let a="";for(const s of t.ops){const o=typeof n=="number"&&n>=0?s.data.map(u=>+u.toFixed(n)):s.data;switch(s.op){case"move":a+=`M${o[0]} ${o[1]} `;break;case"bcurveTo":a+=`C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;break;case"lineTo":a+=`L${o[0]} ${o[1]} `}}return a.trim()}toPaths(t){const n=t.sets||[],a=t.options||this.defaultOptions,s=[];for(const o of n){let u=null;switch(o.type){case"path":u={d:this.opsToPath(o),stroke:a.stroke,strokeWidth:a.strokeWidth,fill:Di};break;case"fillPath":u={d:this.opsToPath(o),stroke:Di,strokeWidth:0,fill:a.fill||Di};break;case"fillSketch":u=this.fillSketch(o,a)}u&&s.push(u)}return s}fillSketch(t,n){let a=n.fillWeight;return a<0&&(a=n.strokeWidth/2),{d:this.opsToPath(t),stroke:n.fill||Di,strokeWidth:a,fill:Di}}_mergedShape(t){return t.filter((n,a)=>a===0||n.op!=="move")}}class BI{constructor(t,n){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new Eh(n)}draw(t){const n=t.sets||[],a=t.options||this.getDefaultOptions(),s=this.ctx,o=t.options.fixedDecimalPlaceDigits;for(const u of n)switch(u.type){case"path":s.save(),s.strokeStyle=a.stroke==="none"?"transparent":a.stroke,s.lineWidth=a.strokeWidth,a.strokeLineDash&&s.setLineDash(a.strokeLineDash),a.strokeLineDashOffset&&(s.lineDashOffset=a.strokeLineDashOffset),this._drawToContext(s,u,o),s.restore();break;case"fillPath":{s.save(),s.fillStyle=a.fill||"";const c=t.shape==="curve"||t.shape==="polygon"||t.shape==="path"?"evenodd":"nonzero";this._drawToContext(s,u,o,c),s.restore();break}case"fillSketch":this.fillSketch(s,u,a)}}fillSketch(t,n,a){let s=a.fillWeight;s<0&&(s=a.strokeWidth/2),t.save(),a.fillLineDash&&t.setLineDash(a.fillLineDash),a.fillLineDashOffset&&(t.lineDashOffset=a.fillLineDashOffset),t.strokeStyle=a.fill||"",t.lineWidth=s,this._drawToContext(t,n,a.fixedDecimalPlaceDigits),t.restore()}_drawToContext(t,n,a,s="nonzero"){t.beginPath();for(const o of n.ops){const u=typeof a=="number"&&a>=0?o.data.map(c=>+c.toFixed(a)):o.data;switch(o.op){case"move":t.moveTo(u[0],u[1]);break;case"bcurveTo":t.bezierCurveTo(u[0],u[1],u[2],u[3],u[4],u[5]);break;case"lineTo":t.lineTo(u[0],u[1])}}n.type==="fillPath"?t.fill(s):t.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,n,a,s,o){const u=this.gen.line(t,n,a,s,o);return this.draw(u),u}rectangle(t,n,a,s,o){const u=this.gen.rectangle(t,n,a,s,o);return this.draw(u),u}ellipse(t,n,a,s,o){const u=this.gen.ellipse(t,n,a,s,o);return this.draw(u),u}circle(t,n,a,s){const o=this.gen.circle(t,n,a,s);return this.draw(o),o}linearPath(t,n){const a=this.gen.linearPath(t,n);return this.draw(a),a}polygon(t,n){const a=this.gen.polygon(t,n);return this.draw(a),a}arc(t,n,a,s,o,u,c=!1,f){const d=this.gen.arc(t,n,a,s,o,u,c,f);return this.draw(d),d}curve(t,n){const a=this.gen.curve(t,n);return this.draw(a),a}path(t,n){const a=this.gen.path(t,n);return this.draw(a),a}}const Eu="http://www.w3.org/2000/svg";class OI{constructor(t,n){this.svg=t,this.gen=new Eh(n)}draw(t){const n=t.sets||[],a=t.options||this.getDefaultOptions(),s=this.svg.ownerDocument||window.document,o=s.createElementNS(Eu,"g"),u=t.options.fixedDecimalPlaceDigits;for(const c of n){let f=null;switch(c.type){case"path":f=s.createElementNS(Eu,"path"),f.setAttribute("d",this.opsToPath(c,u)),f.setAttribute("stroke",a.stroke),f.setAttribute("stroke-width",a.strokeWidth+""),f.setAttribute("fill","none"),a.strokeLineDash&&f.setAttribute("stroke-dasharray",a.strokeLineDash.join(" ").trim()),a.strokeLineDashOffset&&f.setAttribute("stroke-dashoffset",`${a.strokeLineDashOffset}`);break;case"fillPath":f=s.createElementNS(Eu,"path"),f.setAttribute("d",this.opsToPath(c,u)),f.setAttribute("stroke","none"),f.setAttribute("stroke-width","0"),f.setAttribute("fill",a.fill||""),t.shape!=="curve"&&t.shape!=="polygon"||f.setAttribute("fill-rule","evenodd");break;case"fillSketch":f=this.fillSketch(s,c,a)}f&&o.appendChild(f)}return o}fillSketch(t,n,a){let s=a.fillWeight;s<0&&(s=a.strokeWidth/2);const o=t.createElementNS(Eu,"path");return o.setAttribute("d",this.opsToPath(n,a.fixedDecimalPlaceDigits)),o.setAttribute("stroke",a.fill||""),o.setAttribute("stroke-width",s+""),o.setAttribute("fill","none"),a.fillLineDash&&o.setAttribute("stroke-dasharray",a.fillLineDash.join(" ").trim()),a.fillLineDashOffset&&o.setAttribute("stroke-dashoffset",`${a.fillLineDashOffset}`),o}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t,n){return this.gen.opsToPath(t,n)}line(t,n,a,s,o){const u=this.gen.line(t,n,a,s,o);return this.draw(u)}rectangle(t,n,a,s,o){const u=this.gen.rectangle(t,n,a,s,o);return this.draw(u)}ellipse(t,n,a,s,o){const u=this.gen.ellipse(t,n,a,s,o);return this.draw(u)}circle(t,n,a,s){const o=this.gen.circle(t,n,a,s);return this.draw(o)}linearPath(t,n){const a=this.gen.linearPath(t,n);return this.draw(a)}polygon(t,n){const a=this.gen.polygon(t,n);return this.draw(a)}arc(t,n,a,s,o,u,c=!1,f){const d=this.gen.arc(t,n,a,s,o,u,c,f);return this.draw(d)}curve(t,n){const a=this.gen.curve(t,n);return this.draw(a)}path(t,n){const a=this.gen.path(t,n);return this.draw(a)}}var vt={canvas:(e,t)=>new BI(e,t),svg:(e,t)=>new OI(e,t),generator:e=>new Eh(e),newSeed:()=>Eh.newSeed()},Rt=x(async(e,t,n)=>{var m,b;let a;const s=t.useHtmlLabels||Ne((m=Vt())==null?void 0:m.htmlLabels);n?a=n:a="node default";const o=e.insert("g").attr("class",a).attr("id",t.domId||t.id),u=o.insert("g").attr("class","label").attr("style",ei(t.labelStyle));let c;t.label===void 0?c="":c=typeof t.label=="string"?t.label:t.label[0];const f=await Gr(u,Vi(Pa(c),Vt()),{useHtmlLabels:s,width:t.width||((b=Vt().flowchart)==null?void 0:b.wrappingWidth),cssClasses:"markdown-node-label",style:t.labelStyle,addSvgBackground:!!t.icon||!!t.img});let d=f.getBBox();const g=((t==null?void 0:t.padding)??0)/2;if(s){const v=f.children[0],S=jt(f),C=v.getElementsByTagName("img");if(C){const w=c.replace(/<img[^>]*>/g,"").trim()==="";await Promise.all([...C].map(T=>new Promise(k=>{function E(){if(T.style.display="flex",T.style.flexDirection="column",w){const O=Vt().fontSize?Vt().fontSize:window.getComputedStyle(document.body).fontSize,D=5,[R=r2.fontSize]=Xh(O),N=R*D+"px";T.style.minWidth=N,T.style.maxWidth=N}else T.style.width="100%";k(T)}x(E,"setupImage"),setTimeout(()=>{T.complete&&E()}),T.addEventListener("error",E),T.addEventListener("load",E)})))}d=v.getBoundingClientRect(),S.attr("width",d.width),S.attr("height",d.height)}return s?u.attr("transform","translate("+-d.width/2+", "+-d.height/2+")"):u.attr("transform","translate(0, "+-d.height/2+")"),t.centerLabel&&u.attr("transform","translate("+-d.width/2+", "+-d.height/2+")"),u.insert("rect",":first-child"),{shapeSvg:o,bbox:d,halfPadding:g,label:u}},"labelHelper"),zg=x(async(e,t,n)=>{var f,d,g,m,b,v;const a=n.useHtmlLabels||Ne((d=(f=Vt())==null?void 0:f.flowchart)==null?void 0:d.htmlLabels),s=e.insert("g").attr("class","label").attr("style",n.labelStyle||""),o=await Gr(s,Vi(Pa(t),Vt()),{useHtmlLabels:a,width:n.width||((m=(g=Vt())==null?void 0:g.flowchart)==null?void 0:m.wrappingWidth),style:n.labelStyle,addSvgBackground:!!n.icon||!!n.img});let u=o.getBBox();const c=n.padding/2;if(Ne((v=(b=Vt())==null?void 0:b.flowchart)==null?void 0:v.htmlLabels)){const S=o.children[0],C=jt(o);u=S.getBoundingClientRect(),C.attr("width",u.width),C.attr("height",u.height)}return a?s.attr("transform","translate("+-u.width/2+", "+-u.height/2+")"):s.attr("transform","translate(0, "+-u.height/2+")"),n.centerLabel&&s.attr("transform","translate("+-u.width/2+", "+-u.height/2+")"),s.insert("rect",":first-child"),{shapeSvg:e,bbox:u,halfPadding:c,label:s}},"insertLabel"),xt=x((e,t)=>{const n=t.node().getBBox();e.width=n.width,e.height=n.height},"updateNodeBounds"),At=x((e,t)=>(e.look==="handDrawn"?"rough-node":"node")+" "+e.cssClasses+" "+(t||""),"getNodeClasses");function Ut(e){const t=e.map((n,a)=>`${a===0?"M":"L"}${n.x},${n.y}`);return t.push("Z"),t.join(" ")}x(Ut,"createPathFromPoints");function Ur(e,t,n,a,s,o){const u=[],f=n-e,d=a-t,g=f/o,m=2*Math.PI/g,b=t+d/2;for(let v=0;v<=50;v++){const S=v/50,C=e+S*f,w=b+s*Math.sin(m*(C-e));u.push({x:C,y:w})}return u}x(Ur,"generateFullSineWavePoints");function Go(e,t,n,a,s,o){const u=[],c=s*Math.PI/180,g=(o*Math.PI/180-c)/(a-1);for(let m=0;m<a;m++){const b=c+m*g,v=e+n*Math.cos(b),S=t+n*Math.sin(b);u.push({x:-v,y:-S})}return u}x(Go,"generateCirclePoints");var NI=x((e,t)=>{var n=e.x,a=e.y,s=t.x-n,o=t.y-a,u=e.width/2,c=e.height/2,f,d;return Math.abs(o)*u>Math.abs(s)*c?(o<0&&(c=-c),f=o===0?0:c*s/o,d=c):(s<0&&(u=-u),f=u,d=s===0?0:u*o/s),{x:n+f,y:a+d}},"intersectRect"),Zs=NI;function Y_(e,t){t&&e.attr("style",t)}x(Y_,"applyStyle");async function W_(e){const t=jt(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),n=t.append("xhtml:div"),a=Vt();let s=e.label;e.label&&$s(e.label)&&(s=await Zp(e.label.replace(Vs.lineBreakRegex,`
`),a));const u='<span class="'+(e.isNode?"nodeLabel":"edgeLabel")+'" '+(e.labelStyle?'style="'+e.labelStyle+'"':"")+">"+s+"</span>";return n.html(Vi(u,a)),Y_(n,e.labelStyle),n.style("display","inline-block"),n.style("padding-right","1px"),n.style("white-space","nowrap"),n.attr("xmlns","http://www.w3.org/1999/xhtml"),t.node()}x(W_,"addHtmlLabel");var PI=x(async(e,t,n,a)=>{let s=e||"";if(typeof s=="object"&&(s=s[0]),Ne(Vt().flowchart.htmlLabels)){s=s.replace(/\\n|\n/g,"<br />"),at.info("vertexText"+s);const o={isNode:a,label:Pa(s).replace(/fa[blrs]?:fa-[\w-]+/g,c=>`<i class='${c.replace(":"," ")}'></i>`),labelStyle:t&&t.replace("fill:","color:")};return await W_(o)}else{const o=document.createElementNS("http://www.w3.org/2000/svg","text");o.setAttribute("style",t.replace("color:","fill:"));let u=[];typeof s=="string"?u=s.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(s)?u=s:u=[];for(const c of u){const f=document.createElementNS("http://www.w3.org/2000/svg","tspan");f.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),f.setAttribute("dy","1em"),f.setAttribute("x","0"),n?f.setAttribute("class","title-row"):f.setAttribute("class","row"),f.textContent=c.trim(),o.appendChild(f)}return o}},"createLabel"),Ca=PI,jr=x((e,t,n,a,s)=>["M",e+s,t,"H",e+n-s,"A",s,s,0,0,1,e+n,t+s,"V",t+a-s,"A",s,s,0,0,1,e+n-s,t+a,"H",e+s,"A",s,s,0,0,1,e,t+a-s,"V",t+s,"A",s,s,0,0,1,e+s,t,"Z"].join(" "),"createRoundedRectPathD"),V_=x(async(e,t)=>{at.info("Creating subgraph rect for ",t.id,t);const n=Vt(),{themeVariables:a,handDrawnSeed:s}=n,{clusterBkg:o,clusterBorder:u}=a,{labelStyles:c,nodeStyles:f,borderStyles:d,backgroundStyles:g}=Ct(t),m=e.insert("g").attr("class","cluster "+t.cssClasses).attr("id",t.id).attr("data-look",t.look),b=Ne(n.flowchart.htmlLabels),v=m.insert("g").attr("class","cluster-label "),S=await Gr(v,t.label,{style:t.labelStyle,useHtmlLabels:b,isNode:!0});let C=S.getBBox();if(Ne(n.flowchart.htmlLabels)){const N=S.children[0],K=jt(S);C=N.getBoundingClientRect(),K.attr("width",C.width),K.attr("height",C.height)}const w=t.width<=C.width+t.padding?C.width+t.padding:t.width;t.width<=C.width+t.padding?t.diff=(w-t.width)/2-t.padding:t.diff=-t.padding;const T=t.height,k=t.x-w/2,E=t.y-T/2;at.trace("Data ",t,JSON.stringify(t));let O;if(t.look==="handDrawn"){const N=vt.svg(m),K=St(t,{roughness:.7,fill:o,stroke:u,fillWeight:3,seed:s}),it=N.path(jr(k,E,w,T,0),K);O=m.insert(()=>(at.debug("Rough node insert CXC",it),it),":first-child"),O.select("path:nth-child(2)").attr("style",d.join(";")),O.select("path").attr("style",g.join(";").replace("fill","stroke"))}else O=m.insert("rect",":first-child"),O.attr("style",f).attr("rx",t.rx).attr("ry",t.ry).attr("x",k).attr("y",E).attr("width",w).attr("height",T);const{subGraphTitleTopMargin:D}=_m(n);if(v.attr("transform",`translate(${t.x-C.width/2}, ${t.y-t.height/2+D})`),c){const N=v.select("span");N&&N.attr("style",c)}const R=O.node().getBBox();return t.offsetX=0,t.width=R.width,t.height=R.height,t.offsetY=C.height-t.padding/2,t.intersect=function(N){return Zs(t,N)},{cluster:m,labelBBox:C}},"rect"),II=x((e,t)=>{const n=e.insert("g").attr("class","note-cluster").attr("id",t.id),a=n.insert("rect",":first-child"),s=0*t.padding,o=s/2;a.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-o).attr("y",t.y-t.height/2-o).attr("width",t.width+s).attr("height",t.height+s).attr("fill","none");const u=a.node().getBBox();return t.width=u.width,t.height=u.height,t.intersect=function(c){return Zs(t,c)},{cluster:n,labelBBox:{width:0,height:0}}},"noteGroup"),FI=x(async(e,t)=>{const n=Vt(),{themeVariables:a,handDrawnSeed:s}=n,{altBackground:o,compositeBackground:u,compositeTitleBackground:c,nodeBorder:f}=a,d=e.insert("g").attr("class",t.cssClasses).attr("id",t.id).attr("data-id",t.id).attr("data-look",t.look),g=d.insert("g",":first-child"),m=d.insert("g").attr("class","cluster-label");let b=d.append("rect");const v=m.node().appendChild(await Ca(t.label,t.labelStyle,void 0,!0));let S=v.getBBox();if(Ne(n.flowchart.htmlLabels)){const it=v.children[0],nt=jt(v);S=it.getBoundingClientRect(),nt.attr("width",S.width),nt.attr("height",S.height)}const C=0*t.padding,w=C/2,T=(t.width<=S.width+t.padding?S.width+t.padding:t.width)+C;t.width<=S.width+t.padding?t.diff=(T-t.width)/2-t.padding:t.diff=-t.padding;const k=t.height+C,E=t.height+C-S.height-6,O=t.x-T/2,D=t.y-k/2;t.width=T;const R=t.y-t.height/2-w+S.height+2;let N;if(t.look==="handDrawn"){const it=t.cssClasses.includes("statediagram-cluster-alt"),nt=vt.svg(d),X=t.rx||t.ry?nt.path(jr(O,D,T,k,10),{roughness:.7,fill:c,fillStyle:"solid",stroke:f,seed:s}):nt.rectangle(O,D,T,k,{seed:s});N=d.insert(()=>X,":first-child");const st=nt.rectangle(O,R,T,E,{fill:it?o:u,fillStyle:it?"hachure":"solid",stroke:f,seed:s});N=d.insert(()=>X,":first-child"),b=d.insert(()=>st)}else N=g.insert("rect",":first-child"),N.attr("class","outer").attr("x",O).attr("y",D).attr("width",T).attr("height",k).attr("data-look",t.look),b.attr("class","inner").attr("x",O).attr("y",R).attr("width",T).attr("height",E);m.attr("transform",`translate(${t.x-S.width/2}, ${D+1-(Ne(n.flowchart.htmlLabels)?0:3)})`);const K=N.node().getBBox();return t.height=K.height,t.offsetX=0,t.offsetY=S.height-t.padding/2,t.labelBBox=S,t.intersect=function(it){return Zs(t,it)},{cluster:d,labelBBox:S}},"roundedWithTitle"),$I=x(async(e,t)=>{at.info("Creating subgraph rect for ",t.id,t);const n=Vt(),{themeVariables:a,handDrawnSeed:s}=n,{clusterBkg:o,clusterBorder:u}=a,{labelStyles:c,nodeStyles:f,borderStyles:d,backgroundStyles:g}=Ct(t),m=e.insert("g").attr("class","cluster "+t.cssClasses).attr("id",t.id).attr("data-look",t.look),b=Ne(n.flowchart.htmlLabels),v=m.insert("g").attr("class","cluster-label "),S=await Gr(v,t.label,{style:t.labelStyle,useHtmlLabels:b,isNode:!0,width:t.width});let C=S.getBBox();if(Ne(n.flowchart.htmlLabels)){const N=S.children[0],K=jt(S);C=N.getBoundingClientRect(),K.attr("width",C.width),K.attr("height",C.height)}const w=t.width<=C.width+t.padding?C.width+t.padding:t.width;t.width<=C.width+t.padding?t.diff=(w-t.width)/2-t.padding:t.diff=-t.padding;const T=t.height,k=t.x-w/2,E=t.y-T/2;at.trace("Data ",t,JSON.stringify(t));let O;if(t.look==="handDrawn"){const N=vt.svg(m),K=St(t,{roughness:.7,fill:o,stroke:u,fillWeight:4,seed:s}),it=N.path(jr(k,E,w,T,t.rx),K);O=m.insert(()=>(at.debug("Rough node insert CXC",it),it),":first-child"),O.select("path:nth-child(2)").attr("style",d.join(";")),O.select("path").attr("style",g.join(";").replace("fill","stroke"))}else O=m.insert("rect",":first-child"),O.attr("style",f).attr("rx",t.rx).attr("ry",t.ry).attr("x",k).attr("y",E).attr("width",w).attr("height",T);const{subGraphTitleTopMargin:D}=_m(n);if(v.attr("transform",`translate(${t.x-C.width/2}, ${t.y-t.height/2+D})`),c){const N=v.select("span");N&&N.attr("style",c)}const R=O.node().getBBox();return t.offsetX=0,t.width=R.width,t.height=R.height,t.offsetY=C.height-t.padding/2,t.intersect=function(N){return Zs(t,N)},{cluster:m,labelBBox:C}},"kanbanSection"),zI=x((e,t)=>{const n=Vt(),{themeVariables:a,handDrawnSeed:s}=n,{nodeBorder:o}=a,u=e.insert("g").attr("class",t.cssClasses).attr("id",t.id).attr("data-look",t.look),c=u.insert("g",":first-child"),f=0*t.padding,d=t.width+f;t.diff=-t.padding;const g=t.height+f,m=t.x-d/2,b=t.y-g/2;t.width=d;let v;if(t.look==="handDrawn"){const w=vt.svg(u).rectangle(m,b,d,g,{fill:"lightgrey",roughness:.5,strokeLineDash:[5],stroke:o,seed:s});v=u.insert(()=>w,":first-child")}else v=c.insert("rect",":first-child"),v.attr("class","divider").attr("x",m).attr("y",b).attr("width",d).attr("height",g).attr("data-look",t.look);const S=v.node().getBBox();return t.height=S.height,t.offsetX=0,t.offsetY=0,t.intersect=function(C){return Zs(t,C)},{cluster:u,labelBBox:{}}},"divider"),qI=V_,UI={rect:V_,squareRect:qI,roundedWithTitle:FI,noteGroup:II,divider:zI,kanbanSection:$I},X_=new Map,HI=x(async(e,t)=>{const n=t.shape||"rect",a=await UI[n](e,t);return X_.set(t.id,a),a},"insertCluster"),fq=x(()=>{X_=new Map},"clear");function Q_(e,t){return e.intersect(t)}x(Q_,"intersectNode");var GI=Q_;function K_(e,t,n,a){var s=e.x,o=e.y,u=s-a.x,c=o-a.y,f=Math.sqrt(t*t*c*c+n*n*u*u),d=Math.abs(t*n*u/f);a.x<s&&(d=-d);var g=Math.abs(t*n*c/f);return a.y<o&&(g=-g),{x:s+d,y:o+g}}x(K_,"intersectEllipse");var Z_=K_;function J_(e,t,n){return Z_(e,t,t,n)}x(J_,"intersectCircle");var jI=J_;function tT(e,t,n,a){{const s=t.y-e.y,o=e.x-t.x,u=t.x*e.y-e.x*t.y,c=s*n.x+o*n.y+u,f=s*a.x+o*a.y+u,d=1e-6;if(c!==0&&f!==0&&Op(c,f))return;const g=a.y-n.y,m=n.x-a.x,b=a.x*n.y-n.x*a.y,v=g*e.x+m*e.y+b,S=g*t.x+m*t.y+b;if(Math.abs(v)<d&&Math.abs(S)<d&&Op(v,S))return;const C=s*m-g*o;if(C===0)return;const w=Math.abs(C/2);let T=o*b-m*u;const k=T<0?(T-w)/C:(T+w)/C;T=g*u-s*b;const E=T<0?(T-w)/C:(T+w)/C;return{x:k,y:E}}}x(tT,"intersectLine");function Op(e,t){return e*t>0}x(Op,"sameSign");var YI=tT;function eT(e,t,n){let a=e.x,s=e.y,o=[],u=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY;typeof t.forEach=="function"?t.forEach(function(g){u=Math.min(u,g.x),c=Math.min(c,g.y)}):(u=Math.min(u,t.x),c=Math.min(c,t.y));let f=a-e.width/2-u,d=s-e.height/2-c;for(let g=0;g<t.length;g++){let m=t[g],b=t[g<t.length-1?g+1:0],v=YI(e,n,{x:f+m.x,y:d+m.y},{x:f+b.x,y:d+b.y});v&&o.push(v)}return o.length?(o.length>1&&o.sort(function(g,m){let b=g.x-n.x,v=g.y-n.y,S=Math.sqrt(b*b+v*v),C=m.x-n.x,w=m.y-n.y,T=Math.sqrt(C*C+w*w);return S<T?-1:S===T?0:1}),o[0]):e}x(eT,"intersectPolygon");var WI=eT,gt={node:GI,circle:jI,ellipse:Z_,polygon:WI,rect:Zs};function iT(e,t){const{labelStyles:n}=Ct(t);t.labelStyle=n;const a=At(t);let s=a;a||(s="anchor");const o=e.insert("g").attr("class",s).attr("id",t.domId||t.id),u=1,{cssStyles:c}=t,f=vt.svg(o),d=St(t,{fill:"black",stroke:"none",fillStyle:"solid"});t.look!=="handDrawn"&&(d.roughness=0);const g=f.circle(0,0,u*2,d),m=o.insert(()=>g,":first-child");return m.attr("class","anchor").attr("style",ei(c)),xt(t,m),t.intersect=function(b){return at.info("Circle intersect",t,u,b),gt.circle(t,u,b)},o}x(iT,"anchor");function Np(e,t,n,a,s,o,u){const f=(e+n)/2,d=(t+a)/2,g=Math.atan2(a-t,n-e),m=(n-e)/2,b=(a-t)/2,v=m/s,S=b/o,C=Math.sqrt(v**2+S**2);if(C>1)throw new Error("The given radii are too small to create an arc between the points.");const w=Math.sqrt(1-C**2),T=f+w*o*Math.sin(g)*(u?-1:1),k=d-w*s*Math.cos(g)*(u?-1:1),E=Math.atan2((t-k)/o,(e-T)/s);let D=Math.atan2((a-k)/o,(n-T)/s)-E;u&&D<0&&(D+=2*Math.PI),!u&&D>0&&(D-=2*Math.PI);const R=[];for(let N=0;N<20;N++){const K=N/19,it=E+K*D,nt=T+s*Math.cos(it),X=k+o*Math.sin(it);R.push({x:nt,y:X})}return R}x(Np,"generateArcPoints");async function nT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=o.width+t.padding+20,c=o.height+t.padding,f=c/2,d=f/(2.5+c/50),{cssStyles:g}=t,m=[{x:u/2,y:-c/2},{x:-u/2,y:-c/2},...Np(-u/2,-c/2,-u/2,c/2,d,f,!1),{x:u/2,y:c/2},...Np(u/2,c/2,u/2,-c/2,d,f,!0)],b=vt.svg(s),v=St(t,{});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=Ut(m),C=b.path(S,v),w=s.insert(()=>C,":first-child");return w.attr("class","basic label-container"),g&&t.look!=="handDrawn"&&w.selectAll("path").attr("style",g),a&&t.look!=="handDrawn"&&w.selectAll("path").attr("style",a),w.attr("transform",`translate(${d/2}, 0)`),xt(t,w),t.intersect=function(T){return gt.polygon(t,m,T)},s}x(nT,"bowTieRect");function Yr(e,t,n,a){return e.insert("polygon",":first-child").attr("points",a.map(function(s){return s.x+","+s.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-t/2+","+n/2+")")}x(Yr,"insertPolygonShape");async function rT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=o.height+t.padding,c=12,f=o.width+t.padding+c,d=0,g=f,m=-u,b=0,v=[{x:d+c,y:m},{x:g,y:m},{x:g,y:b},{x:d,y:b},{x:d,y:m+c},{x:d+c,y:m}];let S;const{cssStyles:C}=t;if(t.look==="handDrawn"){const w=vt.svg(s),T=St(t,{}),k=Ut(v),E=w.path(k,T);S=s.insert(()=>E,":first-child").attr("transform",`translate(${-f/2}, ${u/2})`),C&&S.attr("style",C)}else S=Yr(s,f,u,v);return a&&S.attr("style",a),xt(t,S),t.intersect=function(w){return gt.polygon(t,v,w)},s}x(rT,"card");function aT(e,t){const{nodeStyles:n}=Ct(t);t.label="";const a=e.insert("g").attr("class",At(t)).attr("id",t.domId??t.id),{cssStyles:s}=t,o=Math.max(28,t.width??0),u=[{x:0,y:o/2},{x:o/2,y:0},{x:0,y:-o/2},{x:-o/2,y:0}],c=vt.svg(a),f=St(t,{});t.look!=="handDrawn"&&(f.roughness=0,f.fillStyle="solid");const d=Ut(u),g=c.path(d,f),m=a.insert(()=>g,":first-child");return s&&t.look!=="handDrawn"&&m.selectAll("path").attr("style",s),n&&t.look!=="handDrawn"&&m.selectAll("path").attr("style",n),t.width=28,t.height=28,t.intersect=function(b){return gt.polygon(t,u,b)},a}x(aT,"choice");async function Ym(e,t,n){const{labelStyles:a,nodeStyles:s}=Ct(t);t.labelStyle=a;const{shapeSvg:o,bbox:u,halfPadding:c}=await Rt(e,t,At(t)),f=(n==null?void 0:n.padding)??c,d=u.width/2+f;let g;const{cssStyles:m}=t;if(t.look==="handDrawn"){const b=vt.svg(o),v=St(t,{}),S=b.circle(0,0,d*2,v);g=o.insert(()=>S,":first-child"),g.attr("class","basic label-container").attr("style",ei(m))}else g=o.insert("circle",":first-child").attr("class","basic label-container").attr("style",s).attr("r",d).attr("cx",0).attr("cy",0);return xt(t,g),t.calcIntersect=function(b,v){const S=b.width/2;return gt.circle(b,S,v)},t.intersect=function(b){return at.info("Circle intersect",t,d,b),gt.circle(t,d,b)},o}x(Ym,"circle");function sT(e){const t=Math.cos(Math.PI/4),n=Math.sin(Math.PI/4),a=e*2,s={x:a/2*t,y:a/2*n},o={x:-(a/2)*t,y:a/2*n},u={x:-(a/2)*t,y:-(a/2)*n},c={x:a/2*t,y:-(a/2)*n};return`M ${o.x},${o.y} L ${c.x},${c.y}
                   M ${s.x},${s.y} L ${u.x},${u.y}`}x(sT,"createLine");function lT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n,t.label="";const s=e.insert("g").attr("class",At(t)).attr("id",t.domId??t.id),o=Math.max(30,(t==null?void 0:t.width)??0),{cssStyles:u}=t,c=vt.svg(s),f=St(t,{});t.look!=="handDrawn"&&(f.roughness=0,f.fillStyle="solid");const d=c.circle(0,0,o*2,f),g=sT(o),m=c.path(g,f),b=s.insert(()=>d,":first-child");return b.insert(()=>m),u&&t.look!=="handDrawn"&&b.selectAll("path").attr("style",u),a&&t.look!=="handDrawn"&&b.selectAll("path").attr("style",a),xt(t,b),t.intersect=function(v){return at.info("crossedCircle intersect",t,{radius:o,point:v}),gt.circle(t,o,v)},s}x(lT,"crossedCircle");function Zn(e,t,n,a=100,s=0,o=180){const u=[],c=s*Math.PI/180,g=(o*Math.PI/180-c)/(a-1);for(let m=0;m<a;m++){const b=c+m*g,v=e+n*Math.cos(b),S=t+n*Math.sin(b);u.push({x:-v,y:-S})}return u}x(Zn,"generateCirclePoints");async function oT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=o.width+(t.padding??0),f=o.height+(t.padding??0),d=Math.max(5,f*.1),{cssStyles:g}=t,m=[...Zn(c/2,-f/2,d,30,-90,0),{x:-c/2-d,y:d},...Zn(c/2+d*2,-d,d,20,-180,-270),...Zn(c/2+d*2,d,d,20,-90,-180),{x:-c/2-d,y:-f/2},...Zn(c/2,f/2,d,20,0,90)],b=[{x:c/2,y:-f/2-d},{x:-c/2,y:-f/2-d},...Zn(c/2,-f/2,d,20,-90,0),{x:-c/2-d,y:-d},...Zn(c/2+c*.1,-d,d,20,-180,-270),...Zn(c/2+c*.1,d,d,20,-90,-180),{x:-c/2-d,y:f/2},...Zn(c/2,f/2,d,20,0,90),{x:-c/2,y:f/2+d},{x:c/2,y:f/2+d}],v=vt.svg(s),S=St(t,{fill:"none"});t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const w=Ut(m).replace("Z",""),T=v.path(w,S),k=Ut(b),E=v.path(k,{...S}),O=s.insert("g",":first-child");return O.insert(()=>E,":first-child").attr("stroke-opacity",0),O.insert(()=>T,":first-child"),O.attr("class","text"),g&&t.look!=="handDrawn"&&O.selectAll("path").attr("style",g),a&&t.look!=="handDrawn"&&O.selectAll("path").attr("style",a),O.attr("transform",`translate(${d}, 0)`),u.attr("transform",`translate(${-c/2+d-(o.x-(o.left??0))},${-f/2+(t.padding??0)/2-(o.y-(o.top??0))})`),xt(t,O),t.intersect=function(D){return gt.polygon(t,b,D)},s}x(oT,"curlyBraceLeft");function Jn(e,t,n,a=100,s=0,o=180){const u=[],c=s*Math.PI/180,g=(o*Math.PI/180-c)/(a-1);for(let m=0;m<a;m++){const b=c+m*g,v=e+n*Math.cos(b),S=t+n*Math.sin(b);u.push({x:v,y:S})}return u}x(Jn,"generateCirclePoints");async function cT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=o.width+(t.padding??0),f=o.height+(t.padding??0),d=Math.max(5,f*.1),{cssStyles:g}=t,m=[...Jn(c/2,-f/2,d,20,-90,0),{x:c/2+d,y:-d},...Jn(c/2+d*2,-d,d,20,-180,-270),...Jn(c/2+d*2,d,d,20,-90,-180),{x:c/2+d,y:f/2},...Jn(c/2,f/2,d,20,0,90)],b=[{x:-c/2,y:-f/2-d},{x:c/2,y:-f/2-d},...Jn(c/2,-f/2,d,20,-90,0),{x:c/2+d,y:-d},...Jn(c/2+d*2,-d,d,20,-180,-270),...Jn(c/2+d*2,d,d,20,-90,-180),{x:c/2+d,y:f/2},...Jn(c/2,f/2,d,20,0,90),{x:c/2,y:f/2+d},{x:-c/2,y:f/2+d}],v=vt.svg(s),S=St(t,{fill:"none"});t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const w=Ut(m).replace("Z",""),T=v.path(w,S),k=Ut(b),E=v.path(k,{...S}),O=s.insert("g",":first-child");return O.insert(()=>E,":first-child").attr("stroke-opacity",0),O.insert(()=>T,":first-child"),O.attr("class","text"),g&&t.look!=="handDrawn"&&O.selectAll("path").attr("style",g),a&&t.look!=="handDrawn"&&O.selectAll("path").attr("style",a),O.attr("transform",`translate(${-d}, 0)`),u.attr("transform",`translate(${-c/2+(t.padding??0)/2-(o.x-(o.left??0))},${-f/2+(t.padding??0)/2-(o.y-(o.top??0))})`),xt(t,O),t.intersect=function(D){return gt.polygon(t,b,D)},s}x(cT,"curlyBraceRight");function Ge(e,t,n,a=100,s=0,o=180){const u=[],c=s*Math.PI/180,g=(o*Math.PI/180-c)/(a-1);for(let m=0;m<a;m++){const b=c+m*g,v=e+n*Math.cos(b),S=t+n*Math.sin(b);u.push({x:-v,y:-S})}return u}x(Ge,"generateCirclePoints");async function uT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=o.width+(t.padding??0),f=o.height+(t.padding??0),d=Math.max(5,f*.1),{cssStyles:g}=t,m=[...Ge(c/2,-f/2,d,30,-90,0),{x:-c/2-d,y:d},...Ge(c/2+d*2,-d,d,20,-180,-270),...Ge(c/2+d*2,d,d,20,-90,-180),{x:-c/2-d,y:-f/2},...Ge(c/2,f/2,d,20,0,90)],b=[...Ge(-c/2+d+d/2,-f/2,d,20,-90,-180),{x:c/2-d/2,y:d},...Ge(-c/2-d/2,-d,d,20,0,90),...Ge(-c/2-d/2,d,d,20,-90,0),{x:c/2-d/2,y:-d},...Ge(-c/2+d+d/2,f/2,d,30,-180,-270)],v=[{x:c/2,y:-f/2-d},{x:-c/2,y:-f/2-d},...Ge(c/2,-f/2,d,20,-90,0),{x:-c/2-d,y:-d},...Ge(c/2+d*2,-d,d,20,-180,-270),...Ge(c/2+d*2,d,d,20,-90,-180),{x:-c/2-d,y:f/2},...Ge(c/2,f/2,d,20,0,90),{x:-c/2,y:f/2+d},{x:c/2-d-d/2,y:f/2+d},...Ge(-c/2+d+d/2,-f/2,d,20,-90,-180),{x:c/2-d/2,y:d},...Ge(-c/2-d/2,-d,d,20,0,90),...Ge(-c/2-d/2,d,d,20,-90,0),{x:c/2-d/2,y:-d},...Ge(-c/2+d+d/2,f/2,d,30,-180,-270)],S=vt.svg(s),C=St(t,{fill:"none"});t.look!=="handDrawn"&&(C.roughness=0,C.fillStyle="solid");const T=Ut(m).replace("Z",""),k=S.path(T,C),O=Ut(b).replace("Z",""),D=S.path(O,C),R=Ut(v),N=S.path(R,{...C}),K=s.insert("g",":first-child");return K.insert(()=>N,":first-child").attr("stroke-opacity",0),K.insert(()=>k,":first-child"),K.insert(()=>D,":first-child"),K.attr("class","text"),g&&t.look!=="handDrawn"&&K.selectAll("path").attr("style",g),a&&t.look!=="handDrawn"&&K.selectAll("path").attr("style",a),K.attr("transform",`translate(${d-d/4}, 0)`),u.attr("transform",`translate(${-c/2+(t.padding??0)/2-(o.x-(o.left??0))},${-f/2+(t.padding??0)/2-(o.y-(o.top??0))})`),xt(t,K),t.intersect=function(it){return gt.polygon(t,v,it)},s}x(uT,"curlyBraces");async function hT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=80,c=20,f=Math.max(u,(o.width+(t.padding??0)*2)*1.25,(t==null?void 0:t.width)??0),d=Math.max(c,o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),g=d/2,{cssStyles:m}=t,b=vt.svg(s),v=St(t,{});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=f,C=d,w=S-g,T=C/4,k=[{x:w,y:0},{x:T,y:0},{x:0,y:C/2},{x:T,y:C},{x:w,y:C},...Go(-w,-C/2,g,50,270,90)],E=Ut(k),O=b.path(E,v),D=s.insert(()=>O,":first-child");return D.attr("class","basic label-container"),m&&t.look!=="handDrawn"&&D.selectChildren("path").attr("style",m),a&&t.look!=="handDrawn"&&D.selectChildren("path").attr("style",a),D.attr("transform",`translate(${-f/2}, ${-d/2})`),xt(t,D),t.intersect=function(R){return gt.polygon(t,k,R)},s}x(hT,"curvedTrapezoid");var VI=x((e,t,n,a,s,o)=>[`M${e},${t+o}`,`a${s},${o} 0,0,0 ${n},0`,`a${s},${o} 0,0,0 ${-n},0`,`l0,${a}`,`a${s},${o} 0,0,0 ${n},0`,`l0,${-a}`].join(" "),"createCylinderPathD"),XI=x((e,t,n,a,s,o)=>[`M${e},${t+o}`,`M${e+n},${t+o}`,`a${s},${o} 0,0,0 ${-n},0`,`l0,${a}`,`a${s},${o} 0,0,0 ${n},0`,`l0,${-a}`].join(" "),"createOuterCylinderPathD"),QI=x((e,t,n,a,s,o)=>[`M${e-n/2},${-a/2}`,`a${s},${o} 0,0,0 ${n},0`].join(" "),"createInnerCylinderPathD");async function dT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+t.padding,t.width??0),f=c/2,d=f/(2.5+c/50),g=Math.max(o.height+d+t.padding,t.height??0);let m;const{cssStyles:b}=t;if(t.look==="handDrawn"){const v=vt.svg(s),S=XI(0,0,c,g,f,d),C=QI(0,d,c,g,f,d),w=v.path(S,St(t,{})),T=v.path(C,St(t,{fill:"none"}));m=s.insert(()=>T,":first-child"),m=s.insert(()=>w,":first-child"),m.attr("class","basic label-container"),b&&m.attr("style",b)}else{const v=VI(0,0,c,g,f,d);m=s.insert("path",":first-child").attr("d",v).attr("class","basic label-container").attr("style",ei(b)).attr("style",a)}return m.attr("label-offset-y",d),m.attr("transform",`translate(${-c/2}, ${-(g/2+d)})`),xt(t,m),u.attr("transform",`translate(${-(o.width/2)-(o.x-(o.left??0))}, ${-(o.height/2)+(t.padding??0)/1.5-(o.y-(o.top??0))})`),t.intersect=function(v){const S=gt.rect(t,v),C=S.x-(t.x??0);if(f!=0&&(Math.abs(C)<(t.width??0)/2||Math.abs(C)==(t.width??0)/2&&Math.abs(S.y-(t.y??0))>(t.height??0)/2-d)){let w=d*d*(1-C*C/(f*f));w>0&&(w=Math.sqrt(w)),w=d-w,v.y-(t.y??0)>0&&(w=-w),S.y+=w}return S},s}x(dT,"cylinder");async function fT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=o.width+t.padding,f=o.height+t.padding,d=f*.2,g=-c/2,m=-f/2-d/2,{cssStyles:b}=t,v=vt.svg(s),S=St(t,{});t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const C=[{x:g,y:m+d},{x:-g,y:m+d},{x:-g,y:-m},{x:g,y:-m},{x:g,y:m},{x:-g,y:m},{x:-g,y:m+d}],w=v.polygon(C.map(k=>[k.x,k.y]),S),T=s.insert(()=>w,":first-child");return T.attr("class","basic label-container"),b&&t.look!=="handDrawn"&&T.selectAll("path").attr("style",b),a&&t.look!=="handDrawn"&&T.selectAll("path").attr("style",a),u.attr("transform",`translate(${g+(t.padding??0)/2-(o.x-(o.left??0))}, ${m+d+(t.padding??0)/2-(o.y-(o.top??0))})`),xt(t,T),t.intersect=function(k){return gt.rect(t,k)},s}x(fT,"dividedRectangle");async function gT(e,t){var b,v;const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,halfPadding:u}=await Rt(e,t,At(t)),f=o.width/2+u+5,d=o.width/2+u;let g;const{cssStyles:m}=t;if(t.look==="handDrawn"){const S=vt.svg(s),C=St(t,{roughness:.2,strokeWidth:2.5}),w=St(t,{roughness:.2,strokeWidth:1.5}),T=S.circle(0,0,f*2,C),k=S.circle(0,0,d*2,w);g=s.insert("g",":first-child"),g.attr("class",ei(t.cssClasses)).attr("style",ei(m)),(b=g.node())==null||b.appendChild(T),(v=g.node())==null||v.appendChild(k)}else{g=s.insert("g",":first-child");const S=g.insert("circle",":first-child"),C=g.insert("circle");g.attr("class","basic label-container").attr("style",a),S.attr("class","outer-circle").attr("style",a).attr("r",f).attr("cx",0).attr("cy",0),C.attr("class","inner-circle").attr("style",a).attr("r",d).attr("cx",0).attr("cy",0)}return xt(t,g),t.intersect=function(S){return at.info("DoubleCircle intersect",t,f,S),gt.circle(t,f,S)},s}x(gT,"doublecircle");function pT(e,t,{config:{themeVariables:n}}){const{labelStyles:a,nodeStyles:s}=Ct(t);t.label="",t.labelStyle=a;const o=e.insert("g").attr("class",At(t)).attr("id",t.domId??t.id),u=7,{cssStyles:c}=t,f=vt.svg(o),{nodeBorder:d}=n,g=St(t,{fillStyle:"solid"});t.look!=="handDrawn"&&(g.roughness=0);const m=f.circle(0,0,u*2,g),b=o.insert(()=>m,":first-child");return b.selectAll("path").attr("style",`fill: ${d} !important;`),c&&c.length>0&&t.look!=="handDrawn"&&b.selectAll("path").attr("style",c),s&&t.look!=="handDrawn"&&b.selectAll("path").attr("style",s),xt(t,b),t.intersect=function(v){return at.info("filledCircle intersect",t,{radius:u,point:v}),gt.circle(t,u,v)},o}x(pT,"filledCircle");async function mT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=o.width+(t.padding??0),f=c+o.height,d=c+o.height,g=[{x:0,y:-f},{x:d,y:-f},{x:d/2,y:0}],{cssStyles:m}=t,b=vt.svg(s),v=St(t,{});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=Ut(g),C=b.path(S,v),w=s.insert(()=>C,":first-child").attr("transform",`translate(${-f/2}, ${f/2})`);return m&&t.look!=="handDrawn"&&w.selectChildren("path").attr("style",m),a&&t.look!=="handDrawn"&&w.selectChildren("path").attr("style",a),t.width=c,t.height=f,xt(t,w),u.attr("transform",`translate(${-o.width/2-(o.x-(o.left??0))}, ${-f/2+(t.padding??0)/2+(o.y-(o.top??0))})`),t.intersect=function(T){return at.info("Triangle intersect",t,g,T),gt.polygon(t,g,T)},s}x(mT,"flippedTriangle");function yT(e,t,{dir:n,config:{state:a,themeVariables:s}}){const{nodeStyles:o}=Ct(t);t.label="";const u=e.insert("g").attr("class",At(t)).attr("id",t.domId??t.id),{cssStyles:c}=t;let f=Math.max(70,(t==null?void 0:t.width)??0),d=Math.max(10,(t==null?void 0:t.height)??0);n==="LR"&&(f=Math.max(10,(t==null?void 0:t.width)??0),d=Math.max(70,(t==null?void 0:t.height)??0));const g=-1*f/2,m=-1*d/2,b=vt.svg(u),v=St(t,{stroke:s.lineColor,fill:s.lineColor});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=b.rectangle(g,m,f,d,v),C=u.insert(()=>S,":first-child");c&&t.look!=="handDrawn"&&C.selectAll("path").attr("style",c),o&&t.look!=="handDrawn"&&C.selectAll("path").attr("style",o),xt(t,C);const w=(a==null?void 0:a.padding)??0;return t.width&&t.height&&(t.width+=w/2||0,t.height+=w/2||0),t.intersect=function(T){return gt.rect(t,T)},u}x(yT,"forkJoin");async function bT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const s=80,o=50,{shapeSvg:u,bbox:c}=await Rt(e,t,At(t)),f=Math.max(s,c.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),d=Math.max(o,c.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),g=d/2,{cssStyles:m}=t,b=vt.svg(u),v=St(t,{});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=[{x:-f/2,y:-d/2},{x:f/2-g,y:-d/2},...Go(-f/2+g,0,g,50,90,270),{x:f/2-g,y:d/2},{x:-f/2,y:d/2}],C=Ut(S),w=b.path(C,v),T=u.insert(()=>w,":first-child");return T.attr("class","basic label-container"),m&&t.look!=="handDrawn"&&T.selectChildren("path").attr("style",m),a&&t.look!=="handDrawn"&&T.selectChildren("path").attr("style",a),xt(t,T),t.intersect=function(k){return at.info("Pill intersect",t,{radius:g,point:k}),gt.polygon(t,S,k)},u}x(bT,"halfRoundedRectangle");async function vT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=o.height+(t.padding??0),c=o.width+(t.padding??0)*2.5,{cssStyles:f}=t,d=vt.svg(s),g=St(t,{});t.look!=="handDrawn"&&(g.roughness=0,g.fillStyle="solid");let m=c/2;const b=m/6;m=m+b;const v=u/2,S=v/2,C=m-S,w=[{x:-C,y:-v},{x:0,y:-v},{x:C,y:-v},{x:m,y:0},{x:C,y:v},{x:0,y:v},{x:-C,y:v},{x:-m,y:0}],T=Ut(w),k=d.path(T,g),E=s.insert(()=>k,":first-child");return E.attr("class","basic label-container"),f&&t.look!=="handDrawn"&&E.selectChildren("path").attr("style",f),a&&t.look!=="handDrawn"&&E.selectChildren("path").attr("style",a),t.width=c,t.height=u,xt(t,E),t.intersect=function(O){return gt.polygon(t,w,O)},s}x(vT,"hexagon");async function ST(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.label="",t.labelStyle=n;const{shapeSvg:s}=await Rt(e,t,At(t)),o=Math.max(30,(t==null?void 0:t.width)??0),u=Math.max(30,(t==null?void 0:t.height)??0),{cssStyles:c}=t,f=vt.svg(s),d=St(t,{});t.look!=="handDrawn"&&(d.roughness=0,d.fillStyle="solid");const g=[{x:0,y:0},{x:o,y:0},{x:0,y:u},{x:o,y:u}],m=Ut(g),b=f.path(m,d),v=s.insert(()=>b,":first-child");return v.attr("class","basic label-container"),c&&t.look!=="handDrawn"&&v.selectChildren("path").attr("style",c),a&&t.look!=="handDrawn"&&v.selectChildren("path").attr("style",a),v.attr("transform",`translate(${-o/2}, ${-u/2})`),xt(t,v),t.intersect=function(S){return at.info("Pill intersect",t,{points:g}),gt.polygon(t,g,S)},s}x(ST,"hourglass");async function xT(e,t,{config:{themeVariables:n,flowchart:a}}){const{labelStyles:s}=Ct(t);t.labelStyle=s;const o=t.assetHeight??48,u=t.assetWidth??48,c=Math.max(o,u),f=a==null?void 0:a.wrappingWidth;t.width=Math.max(c,f??0);const{shapeSvg:d,bbox:g,label:m}=await Rt(e,t,"icon-shape default"),b=t.pos==="t",v=c,S=c,{nodeBorder:C}=n,{stylesMap:w}=Xs(t),T=-S/2,k=-v/2,E=t.label?8:0,O=vt.svg(d),D=St(t,{stroke:"none",fill:"none"});t.look!=="handDrawn"&&(D.roughness=0,D.fillStyle="solid");const R=O.rectangle(T,k,S,v,D),N=Math.max(S,g.width),K=v+g.height+E,it=O.rectangle(-N/2,-K/2,N,K,{...D,fill:"transparent",stroke:"none"}),nt=d.insert(()=>R,":first-child"),X=d.insert(()=>it);if(t.icon){const st=d.append("g");st.html(`<g>${await rc(t.icon,{height:c,width:c,fallbackPrefix:""})}</g>`);const rt=st.node().getBBox(),W=rt.width,j=rt.height,M=rt.x,F=rt.y;st.attr("transform",`translate(${-W/2-M},${b?g.height/2+E/2-j/2-F:-g.height/2-E/2-j/2-F})`),st.attr("style",`color: ${w.get("stroke")??C};`)}return m.attr("transform",`translate(${-g.width/2-(g.x-(g.left??0))},${b?-K/2:K/2-g.height})`),nt.attr("transform",`translate(0,${b?g.height/2+E/2:-g.height/2-E/2})`),xt(t,X),t.intersect=function(st){if(at.info("iconSquare intersect",t,st),!t.label)return gt.rect(t,st);const rt=t.x??0,W=t.y??0,j=t.height??0;let M=[];return b?M=[{x:rt-g.width/2,y:W-j/2},{x:rt+g.width/2,y:W-j/2},{x:rt+g.width/2,y:W-j/2+g.height+E},{x:rt+S/2,y:W-j/2+g.height+E},{x:rt+S/2,y:W+j/2},{x:rt-S/2,y:W+j/2},{x:rt-S/2,y:W-j/2+g.height+E},{x:rt-g.width/2,y:W-j/2+g.height+E}]:M=[{x:rt-S/2,y:W-j/2},{x:rt+S/2,y:W-j/2},{x:rt+S/2,y:W-j/2+v},{x:rt+g.width/2,y:W-j/2+v},{x:rt+g.width/2/2,y:W+j/2},{x:rt-g.width/2,y:W+j/2},{x:rt-g.width/2,y:W-j/2+v},{x:rt-S/2,y:W-j/2+v}],gt.polygon(t,M,st)},d}x(xT,"icon");async function CT(e,t,{config:{themeVariables:n,flowchart:a}}){const{labelStyles:s}=Ct(t);t.labelStyle=s;const o=t.assetHeight??48,u=t.assetWidth??48,c=Math.max(o,u),f=a==null?void 0:a.wrappingWidth;t.width=Math.max(c,f??0);const{shapeSvg:d,bbox:g,label:m}=await Rt(e,t,"icon-shape default"),b=20,v=t.label?8:0,S=t.pos==="t",{nodeBorder:C,mainBkg:w}=n,{stylesMap:T}=Xs(t),k=vt.svg(d),E=St(t,{});t.look!=="handDrawn"&&(E.roughness=0,E.fillStyle="solid");const O=T.get("fill");E.stroke=O??w;const D=d.append("g");t.icon&&D.html(`<g>${await rc(t.icon,{height:c,width:c,fallbackPrefix:""})}</g>`);const R=D.node().getBBox(),N=R.width,K=R.height,it=R.x,nt=R.y,X=Math.max(N,K)*Math.SQRT2+b*2,st=k.circle(0,0,X,E),rt=Math.max(X,g.width),W=X+g.height+v,j=k.rectangle(-rt/2,-W/2,rt,W,{...E,fill:"transparent",stroke:"none"}),M=d.insert(()=>st,":first-child"),F=d.insert(()=>j);return D.attr("transform",`translate(${-N/2-it},${S?g.height/2+v/2-K/2-nt:-g.height/2-v/2-K/2-nt})`),D.attr("style",`color: ${T.get("stroke")??C};`),m.attr("transform",`translate(${-g.width/2-(g.x-(g.left??0))},${S?-W/2:W/2-g.height})`),M.attr("transform",`translate(0,${S?g.height/2+v/2:-g.height/2-v/2})`),xt(t,F),t.intersect=function($){return at.info("iconSquare intersect",t,$),gt.rect(t,$)},d}x(CT,"iconCircle");async function _T(e,t,{config:{themeVariables:n,flowchart:a}}){const{labelStyles:s}=Ct(t);t.labelStyle=s;const o=t.assetHeight??48,u=t.assetWidth??48,c=Math.max(o,u),f=a==null?void 0:a.wrappingWidth;t.width=Math.max(c,f??0);const{shapeSvg:d,bbox:g,halfPadding:m,label:b}=await Rt(e,t,"icon-shape default"),v=t.pos==="t",S=c+m*2,C=c+m*2,{nodeBorder:w,mainBkg:T}=n,{stylesMap:k}=Xs(t),E=-C/2,O=-S/2,D=t.label?8:0,R=vt.svg(d),N=St(t,{});t.look!=="handDrawn"&&(N.roughness=0,N.fillStyle="solid");const K=k.get("fill");N.stroke=K??T;const it=R.path(jr(E,O,C,S,5),N),nt=Math.max(C,g.width),X=S+g.height+D,st=R.rectangle(-nt/2,-X/2,nt,X,{...N,fill:"transparent",stroke:"none"}),rt=d.insert(()=>it,":first-child").attr("class","icon-shape2"),W=d.insert(()=>st);if(t.icon){const j=d.append("g");j.html(`<g>${await rc(t.icon,{height:c,width:c,fallbackPrefix:""})}</g>`);const M=j.node().getBBox(),F=M.width,$=M.height,ut=M.x,L=M.y;j.attr("transform",`translate(${-F/2-ut},${v?g.height/2+D/2-$/2-L:-g.height/2-D/2-$/2-L})`),j.attr("style",`color: ${k.get("stroke")??w};`)}return b.attr("transform",`translate(${-g.width/2-(g.x-(g.left??0))},${v?-X/2:X/2-g.height})`),rt.attr("transform",`translate(0,${v?g.height/2+D/2:-g.height/2-D/2})`),xt(t,W),t.intersect=function(j){if(at.info("iconSquare intersect",t,j),!t.label)return gt.rect(t,j);const M=t.x??0,F=t.y??0,$=t.height??0;let ut=[];return v?ut=[{x:M-g.width/2,y:F-$/2},{x:M+g.width/2,y:F-$/2},{x:M+g.width/2,y:F-$/2+g.height+D},{x:M+C/2,y:F-$/2+g.height+D},{x:M+C/2,y:F+$/2},{x:M-C/2,y:F+$/2},{x:M-C/2,y:F-$/2+g.height+D},{x:M-g.width/2,y:F-$/2+g.height+D}]:ut=[{x:M-C/2,y:F-$/2},{x:M+C/2,y:F-$/2},{x:M+C/2,y:F-$/2+S},{x:M+g.width/2,y:F-$/2+S},{x:M+g.width/2/2,y:F+$/2},{x:M-g.width/2,y:F+$/2},{x:M-g.width/2,y:F-$/2+S},{x:M-C/2,y:F-$/2+S}],gt.polygon(t,ut,j)},d}x(_T,"iconRounded");async function TT(e,t,{config:{themeVariables:n,flowchart:a}}){const{labelStyles:s}=Ct(t);t.labelStyle=s;const o=t.assetHeight??48,u=t.assetWidth??48,c=Math.max(o,u),f=a==null?void 0:a.wrappingWidth;t.width=Math.max(c,f??0);const{shapeSvg:d,bbox:g,halfPadding:m,label:b}=await Rt(e,t,"icon-shape default"),v=t.pos==="t",S=c+m*2,C=c+m*2,{nodeBorder:w,mainBkg:T}=n,{stylesMap:k}=Xs(t),E=-C/2,O=-S/2,D=t.label?8:0,R=vt.svg(d),N=St(t,{});t.look!=="handDrawn"&&(N.roughness=0,N.fillStyle="solid");const K=k.get("fill");N.stroke=K??T;const it=R.path(jr(E,O,C,S,.1),N),nt=Math.max(C,g.width),X=S+g.height+D,st=R.rectangle(-nt/2,-X/2,nt,X,{...N,fill:"transparent",stroke:"none"}),rt=d.insert(()=>it,":first-child"),W=d.insert(()=>st);if(t.icon){const j=d.append("g");j.html(`<g>${await rc(t.icon,{height:c,width:c,fallbackPrefix:""})}</g>`);const M=j.node().getBBox(),F=M.width,$=M.height,ut=M.x,L=M.y;j.attr("transform",`translate(${-F/2-ut},${v?g.height/2+D/2-$/2-L:-g.height/2-D/2-$/2-L})`),j.attr("style",`color: ${k.get("stroke")??w};`)}return b.attr("transform",`translate(${-g.width/2-(g.x-(g.left??0))},${v?-X/2:X/2-g.height})`),rt.attr("transform",`translate(0,${v?g.height/2+D/2:-g.height/2-D/2})`),xt(t,W),t.intersect=function(j){if(at.info("iconSquare intersect",t,j),!t.label)return gt.rect(t,j);const M=t.x??0,F=t.y??0,$=t.height??0;let ut=[];return v?ut=[{x:M-g.width/2,y:F-$/2},{x:M+g.width/2,y:F-$/2},{x:M+g.width/2,y:F-$/2+g.height+D},{x:M+C/2,y:F-$/2+g.height+D},{x:M+C/2,y:F+$/2},{x:M-C/2,y:F+$/2},{x:M-C/2,y:F-$/2+g.height+D},{x:M-g.width/2,y:F-$/2+g.height+D}]:ut=[{x:M-C/2,y:F-$/2},{x:M+C/2,y:F-$/2},{x:M+C/2,y:F-$/2+S},{x:M+g.width/2,y:F-$/2+S},{x:M+g.width/2/2,y:F+$/2},{x:M-g.width/2,y:F+$/2},{x:M-g.width/2,y:F-$/2+S},{x:M-C/2,y:F-$/2+S}],gt.polygon(t,ut,j)},d}x(TT,"iconSquare");async function wT(e,t,{config:{flowchart:n}}){const a=new Image;a.src=(t==null?void 0:t.img)??"",await a.decode();const s=Number(a.naturalWidth.toString().replace("px","")),o=Number(a.naturalHeight.toString().replace("px",""));t.imageAspectRatio=s/o;const{labelStyles:u}=Ct(t);t.labelStyle=u;const c=n==null?void 0:n.wrappingWidth;t.defaultWidth=n==null?void 0:n.wrappingWidth;const f=Math.max(t.label?c??0:0,(t==null?void 0:t.assetWidth)??s),d=t.constraint==="on"&&t!=null&&t.assetHeight?t.assetHeight*t.imageAspectRatio:f,g=t.constraint==="on"?d/t.imageAspectRatio:(t==null?void 0:t.assetHeight)??o;t.width=Math.max(d,c??0);const{shapeSvg:m,bbox:b,label:v}=await Rt(e,t,"image-shape default"),S=t.pos==="t",C=-d/2,w=-g/2,T=t.label?8:0,k=vt.svg(m),E=St(t,{});t.look!=="handDrawn"&&(E.roughness=0,E.fillStyle="solid");const O=k.rectangle(C,w,d,g,E),D=Math.max(d,b.width),R=g+b.height+T,N=k.rectangle(-D/2,-R/2,D,R,{...E,fill:"none",stroke:"none"}),K=m.insert(()=>O,":first-child"),it=m.insert(()=>N);if(t.img){const nt=m.append("image");nt.attr("href",t.img),nt.attr("width",d),nt.attr("height",g),nt.attr("preserveAspectRatio","none"),nt.attr("transform",`translate(${-d/2},${S?R/2-g:-R/2})`)}return v.attr("transform",`translate(${-b.width/2-(b.x-(b.left??0))},${S?-g/2-b.height/2-T/2:g/2-b.height/2+T/2})`),K.attr("transform",`translate(0,${S?b.height/2+T/2:-b.height/2-T/2})`),xt(t,it),t.intersect=function(nt){if(at.info("iconSquare intersect",t,nt),!t.label)return gt.rect(t,nt);const X=t.x??0,st=t.y??0,rt=t.height??0;let W=[];return S?W=[{x:X-b.width/2,y:st-rt/2},{x:X+b.width/2,y:st-rt/2},{x:X+b.width/2,y:st-rt/2+b.height+T},{x:X+d/2,y:st-rt/2+b.height+T},{x:X+d/2,y:st+rt/2},{x:X-d/2,y:st+rt/2},{x:X-d/2,y:st-rt/2+b.height+T},{x:X-b.width/2,y:st-rt/2+b.height+T}]:W=[{x:X-d/2,y:st-rt/2},{x:X+d/2,y:st-rt/2},{x:X+d/2,y:st-rt/2+g},{x:X+b.width/2,y:st-rt/2+g},{x:X+b.width/2/2,y:st+rt/2},{x:X-b.width/2,y:st+rt/2},{x:X-b.width/2,y:st-rt/2+g},{x:X-d/2,y:st-rt/2+g}],gt.polygon(t,W,nt)},m}x(wT,"imageSquare");async function kT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),c=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),f=[{x:0,y:0},{x:u,y:0},{x:u+3*c/6,y:-c},{x:-3*c/6,y:-c}];let d;const{cssStyles:g}=t;if(t.look==="handDrawn"){const m=vt.svg(s),b=St(t,{}),v=Ut(f),S=m.path(v,b);d=s.insert(()=>S,":first-child").attr("transform",`translate(${-u/2}, ${c/2})`),g&&d.attr("style",g)}else d=Yr(s,u,c,f);return a&&d.attr("style",a),t.width=u,t.height=c,xt(t,d),t.intersect=function(m){return gt.polygon(t,f,m)},s}x(kT,"inv_trapezoid");async function ed(e,t,n){const{labelStyles:a,nodeStyles:s}=Ct(t);t.labelStyle=a;const{shapeSvg:o,bbox:u}=await Rt(e,t,At(t)),c=Math.max(u.width+n.labelPaddingX*2,(t==null?void 0:t.width)||0),f=Math.max(u.height+n.labelPaddingY*2,(t==null?void 0:t.height)||0),d=-c/2,g=-f/2;let m,{rx:b,ry:v}=t;const{cssStyles:S}=t;if(n!=null&&n.rx&&n.ry&&(b=n.rx,v=n.ry),t.look==="handDrawn"){const C=vt.svg(o),w=St(t,{}),T=b||v?C.path(jr(d,g,c,f,b||0),w):C.rectangle(d,g,c,f,w);m=o.insert(()=>T,":first-child"),m.attr("class","basic label-container").attr("style",ei(S))}else m=o.insert("rect",":first-child"),m.attr("class","basic label-container").attr("style",s).attr("rx",ei(b)).attr("ry",ei(v)).attr("x",d).attr("y",g).attr("width",c).attr("height",f);return xt(t,m),t.calcIntersect=function(C,w){return gt.rect(C,w)},t.intersect=function(C){return gt.rect(t,C)},o}x(ed,"drawRect");async function AT(e,t){const{shapeSvg:n,bbox:a,label:s}=await Rt(e,t,"label"),o=n.insert("rect",":first-child");return o.attr("width",.1).attr("height",.1),n.attr("class","label edgeLabel"),s.attr("transform",`translate(${-(a.width/2)-(a.x-(a.left??0))}, ${-(a.height/2)-(a.y-(a.top??0))})`),xt(t,o),t.intersect=function(f){return gt.rect(t,f)},n}x(AT,"labelRect");async function ET(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=Math.max(o.width+(t.padding??0),(t==null?void 0:t.width)??0),c=Math.max(o.height+(t.padding??0),(t==null?void 0:t.height)??0),f=[{x:0,y:0},{x:u+3*c/6,y:0},{x:u,y:-c},{x:-(3*c)/6,y:-c}];let d;const{cssStyles:g}=t;if(t.look==="handDrawn"){const m=vt.svg(s),b=St(t,{}),v=Ut(f),S=m.path(v,b);d=s.insert(()=>S,":first-child").attr("transform",`translate(${-u/2}, ${c/2})`),g&&d.attr("style",g)}else d=Yr(s,u,c,f);return a&&d.attr("style",a),t.width=u,t.height=c,xt(t,d),t.intersect=function(m){return gt.polygon(t,f,m)},s}x(ET,"lean_left");async function RT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=Math.max(o.width+(t.padding??0),(t==null?void 0:t.width)??0),c=Math.max(o.height+(t.padding??0),(t==null?void 0:t.height)??0),f=[{x:-3*c/6,y:0},{x:u,y:0},{x:u+3*c/6,y:-c},{x:0,y:-c}];let d;const{cssStyles:g}=t;if(t.look==="handDrawn"){const m=vt.svg(s),b=St(t,{}),v=Ut(f),S=m.path(v,b);d=s.insert(()=>S,":first-child").attr("transform",`translate(${-u/2}, ${c/2})`),g&&d.attr("style",g)}else d=Yr(s,u,c,f);return a&&d.attr("style",a),t.width=u,t.height=c,xt(t,d),t.intersect=function(m){return gt.polygon(t,f,m)},s}x(RT,"lean_right");function MT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.label="",t.labelStyle=n;const s=e.insert("g").attr("class",At(t)).attr("id",t.domId??t.id),{cssStyles:o}=t,u=Math.max(35,(t==null?void 0:t.width)??0),c=Math.max(35,(t==null?void 0:t.height)??0),f=7,d=[{x:u,y:0},{x:0,y:c+f/2},{x:u-2*f,y:c+f/2},{x:0,y:2*c},{x:u,y:c-f/2},{x:2*f,y:c-f/2}],g=vt.svg(s),m=St(t,{});t.look!=="handDrawn"&&(m.roughness=0,m.fillStyle="solid");const b=Ut(d),v=g.path(b,m),S=s.insert(()=>v,":first-child");return o&&t.look!=="handDrawn"&&S.selectAll("path").attr("style",o),a&&t.look!=="handDrawn"&&S.selectAll("path").attr("style",a),S.attr("transform",`translate(-${u/2},${-c})`),xt(t,S),t.intersect=function(C){return at.info("lightningBolt intersect",t,C),gt.polygon(t,d,C)},s}x(MT,"lightningBolt");var KI=x((e,t,n,a,s,o,u)=>[`M${e},${t+o}`,`a${s},${o} 0,0,0 ${n},0`,`a${s},${o} 0,0,0 ${-n},0`,`l0,${a}`,`a${s},${o} 0,0,0 ${n},0`,`l0,${-a}`,`M${e},${t+o+u}`,`a${s},${o} 0,0,0 ${n},0`].join(" "),"createCylinderPathD"),ZI=x((e,t,n,a,s,o,u)=>[`M${e},${t+o}`,`M${e+n},${t+o}`,`a${s},${o} 0,0,0 ${-n},0`,`l0,${a}`,`a${s},${o} 0,0,0 ${n},0`,`l0,${-a}`,`M${e},${t+o+u}`,`a${s},${o} 0,0,0 ${n},0`].join(" "),"createOuterCylinderPathD"),JI=x((e,t,n,a,s,o)=>[`M${e-n/2},${-a/2}`,`a${s},${o} 0,0,0 ${n},0`].join(" "),"createInnerCylinderPathD");async function LT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0),t.width??0),f=c/2,d=f/(2.5+c/50),g=Math.max(o.height+d+(t.padding??0),t.height??0),m=g*.1;let b;const{cssStyles:v}=t;if(t.look==="handDrawn"){const S=vt.svg(s),C=ZI(0,0,c,g,f,d,m),w=JI(0,d,c,g,f,d),T=St(t,{}),k=S.path(C,T),E=S.path(w,T);s.insert(()=>E,":first-child").attr("class","line"),b=s.insert(()=>k,":first-child"),b.attr("class","basic label-container"),v&&b.attr("style",v)}else{const S=KI(0,0,c,g,f,d,m);b=s.insert("path",":first-child").attr("d",S).attr("class","basic label-container").attr("style",ei(v)).attr("style",a)}return b.attr("label-offset-y",d),b.attr("transform",`translate(${-c/2}, ${-(g/2+d)})`),xt(t,b),u.attr("transform",`translate(${-(o.width/2)-(o.x-(o.left??0))}, ${-(o.height/2)+d-(o.y-(o.top??0))})`),t.intersect=function(S){const C=gt.rect(t,S),w=C.x-(t.x??0);if(f!=0&&(Math.abs(w)<(t.width??0)/2||Math.abs(w)==(t.width??0)/2&&Math.abs(C.y-(t.y??0))>(t.height??0)/2-d)){let T=d*d*(1-w*w/(f*f));T>0&&(T=Math.sqrt(T)),T=d-T,S.y-(t.y??0)>0&&(T=-T),C.y+=T}return C},s}x(LT,"linedCylinder");async function DT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),f=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=f/4,g=f+d,{cssStyles:m}=t,b=vt.svg(s),v=St(t,{});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=[{x:-c/2-c/2*.1,y:-g/2},{x:-c/2-c/2*.1,y:g/2},...Ur(-c/2-c/2*.1,g/2,c/2+c/2*.1,g/2,d,.8),{x:c/2+c/2*.1,y:-g/2},{x:-c/2-c/2*.1,y:-g/2},{x:-c/2,y:-g/2},{x:-c/2,y:g/2*1.1},{x:-c/2,y:-g/2}],C=b.polygon(S.map(T=>[T.x,T.y]),v),w=s.insert(()=>C,":first-child");return w.attr("class","basic label-container"),m&&t.look!=="handDrawn"&&w.selectAll("path").attr("style",m),a&&t.look!=="handDrawn"&&w.selectAll("path").attr("style",a),w.attr("transform",`translate(0,${-d/2})`),u.attr("transform",`translate(${-c/2+(t.padding??0)+c/2*.1/2-(o.x-(o.left??0))},${-f/2+(t.padding??0)-d/2-(o.y-(o.top??0))})`),xt(t,w),t.intersect=function(T){return gt.polygon(t,S,T)},s}x(DT,"linedWaveEdgedRect");async function BT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),f=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=5,g=-c/2,m=-f/2,{cssStyles:b}=t,v=vt.svg(s),S=St(t,{}),C=[{x:g-d,y:m+d},{x:g-d,y:m+f+d},{x:g+c-d,y:m+f+d},{x:g+c-d,y:m+f},{x:g+c,y:m+f},{x:g+c,y:m+f-d},{x:g+c+d,y:m+f-d},{x:g+c+d,y:m-d},{x:g+d,y:m-d},{x:g+d,y:m},{x:g,y:m},{x:g,y:m+d}],w=[{x:g,y:m+d},{x:g+c-d,y:m+d},{x:g+c-d,y:m+f},{x:g+c,y:m+f},{x:g+c,y:m},{x:g,y:m}];t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const T=Ut(C),k=v.path(T,S),E=Ut(w),O=v.path(E,{...S,fill:"none"}),D=s.insert(()=>O,":first-child");return D.insert(()=>k,":first-child"),D.attr("class","basic label-container"),b&&t.look!=="handDrawn"&&D.selectAll("path").attr("style",b),a&&t.look!=="handDrawn"&&D.selectAll("path").attr("style",a),u.attr("transform",`translate(${-(o.width/2)-d-(o.x-(o.left??0))}, ${-(o.height/2)+d-(o.y-(o.top??0))})`),xt(t,D),t.intersect=function(R){return gt.polygon(t,C,R)},s}x(BT,"multiRect");async function OT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),f=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=f/4,g=f+d,m=-c/2,b=-g/2,v=5,{cssStyles:S}=t,C=Ur(m-v,b+g+v,m+c-v,b+g+v,d,.8),w=C==null?void 0:C[C.length-1],T=[{x:m-v,y:b+v},{x:m-v,y:b+g+v},...C,{x:m+c-v,y:w.y-v},{x:m+c,y:w.y-v},{x:m+c,y:w.y-2*v},{x:m+c+v,y:w.y-2*v},{x:m+c+v,y:b-v},{x:m+v,y:b-v},{x:m+v,y:b},{x:m,y:b},{x:m,y:b+v}],k=[{x:m,y:b+v},{x:m+c-v,y:b+v},{x:m+c-v,y:w.y-v},{x:m+c,y:w.y-v},{x:m+c,y:b},{x:m,y:b}],E=vt.svg(s),O=St(t,{});t.look!=="handDrawn"&&(O.roughness=0,O.fillStyle="solid");const D=Ut(T),R=E.path(D,O),N=Ut(k),K=E.path(N,O),it=s.insert(()=>R,":first-child");return it.insert(()=>K),it.attr("class","basic label-container"),S&&t.look!=="handDrawn"&&it.selectAll("path").attr("style",S),a&&t.look!=="handDrawn"&&it.selectAll("path").attr("style",a),it.attr("transform",`translate(0,${-d/2})`),u.attr("transform",`translate(${-(o.width/2)-v-(o.x-(o.left??0))}, ${-(o.height/2)+v-d/2-(o.y-(o.top??0))})`),xt(t,it),t.intersect=function(nt){return gt.polygon(t,T,nt)},s}x(OT,"multiWaveEdgedRectangle");async function NT(e,t,{config:{themeVariables:n}}){var k;const{labelStyles:a,nodeStyles:s}=Ct(t);t.labelStyle=a,t.useHtmlLabels||((k=Je().flowchart)==null?void 0:k.htmlLabels)!==!1||(t.centerLabel=!0);const{shapeSvg:u,bbox:c,label:f}=await Rt(e,t,At(t)),d=Math.max(c.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),g=Math.max(c.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),m=-d/2,b=-g/2,{cssStyles:v}=t,S=vt.svg(u),C=St(t,{fill:n.noteBkgColor,stroke:n.noteBorderColor});t.look!=="handDrawn"&&(C.roughness=0,C.fillStyle="solid");const w=S.rectangle(m,b,d,g,C),T=u.insert(()=>w,":first-child");return T.attr("class","basic label-container"),v&&t.look!=="handDrawn"&&T.selectAll("path").attr("style",v),s&&t.look!=="handDrawn"&&T.selectAll("path").attr("style",s),f.attr("transform",`translate(${-c.width/2-(c.x-(c.left??0))}, ${-(c.height/2)-(c.y-(c.top??0))})`),xt(t,T),t.intersect=function(E){return gt.rect(t,E)},u}x(NT,"note");var tF=x((e,t,n)=>[`M${e+n/2},${t}`,`L${e+n},${t-n/2}`,`L${e+n/2},${t-n}`,`L${e},${t-n/2}`,"Z"].join(" "),"createDecisionBoxPathD");async function PT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=o.width+t.padding,c=o.height+t.padding,f=u+c,d=.5,g=[{x:f/2,y:0},{x:f,y:-f/2},{x:f/2,y:-f},{x:0,y:-f/2}];let m;const{cssStyles:b}=t;if(t.look==="handDrawn"){const v=vt.svg(s),S=St(t,{}),C=tF(0,0,f),w=v.path(C,S);m=s.insert(()=>w,":first-child").attr("transform",`translate(${-f/2+d}, ${f/2})`),b&&m.attr("style",b)}else m=Yr(s,f,f,g),m.attr("transform",`translate(${-f/2+d}, ${f/2})`);return a&&m.attr("style",a),xt(t,m),t.calcIntersect=function(v,S){const C=v.width,w=[{x:C/2,y:0},{x:C,y:-C/2},{x:C/2,y:-C},{x:0,y:-C/2}],T=gt.polygon(v,w,S);return{x:T.x-.5,y:T.y-.5}},t.intersect=function(v){return this.calcIntersect(t,v)},s}x(PT,"question");async function IT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0),(t==null?void 0:t.width)??0),f=Math.max(o.height+(t.padding??0),(t==null?void 0:t.height)??0),d=-c/2,g=-f/2,m=g/2,b=[{x:d+m,y:g},{x:d,y:0},{x:d+m,y:-g},{x:-d,y:-g},{x:-d,y:g}],{cssStyles:v}=t,S=vt.svg(s),C=St(t,{});t.look!=="handDrawn"&&(C.roughness=0,C.fillStyle="solid");const w=Ut(b),T=S.path(w,C),k=s.insert(()=>T,":first-child");return k.attr("class","basic label-container"),v&&t.look!=="handDrawn"&&k.selectAll("path").attr("style",v),a&&t.look!=="handDrawn"&&k.selectAll("path").attr("style",a),k.attr("transform",`translate(${-m/2},0)`),u.attr("transform",`translate(${-m/2-o.width/2-(o.x-(o.left??0))}, ${-(o.height/2)-(o.y-(o.top??0))})`),xt(t,k),t.intersect=function(E){return gt.polygon(t,b,E)},s}x(IT,"rect_left_inv_arrow");async function FT(e,t){var K,it;const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;let s;t.cssClasses?s="node "+t.cssClasses:s="node default";const o=e.insert("g").attr("class",s).attr("id",t.domId||t.id),u=o.insert("g"),c=o.insert("g").attr("class","label").attr("style",a),f=t.description,d=t.label,g=c.node().appendChild(await Ca(d,t.labelStyle,!0,!0));let m={width:0,height:0};if(Ne((it=(K=Vt())==null?void 0:K.flowchart)==null?void 0:it.htmlLabels)){const nt=g.children[0],X=jt(g);m=nt.getBoundingClientRect(),X.attr("width",m.width),X.attr("height",m.height)}at.info("Text 2",f);const b=f||[],v=g.getBBox(),S=c.node().appendChild(await Ca(b.join?b.join("<br/>"):b,t.labelStyle,!0,!0)),C=S.children[0],w=jt(S);m=C.getBoundingClientRect(),w.attr("width",m.width),w.attr("height",m.height);const T=(t.padding||0)/2;jt(S).attr("transform","translate( "+(m.width>v.width?0:(v.width-m.width)/2)+", "+(v.height+T+5)+")"),jt(g).attr("transform","translate( "+(m.width<v.width?0:-(v.width-m.width)/2)+", 0)"),m=c.node().getBBox(),c.attr("transform","translate("+-m.width/2+", "+(-m.height/2-T+3)+")");const k=m.width+(t.padding||0),E=m.height+(t.padding||0),O=-m.width/2-T,D=-m.height/2-T;let R,N;if(t.look==="handDrawn"){const nt=vt.svg(o),X=St(t,{}),st=nt.path(jr(O,D,k,E,t.rx||0),X),rt=nt.line(-m.width/2-T,-m.height/2-T+v.height+T,m.width/2+T,-m.height/2-T+v.height+T,X);N=o.insert(()=>(at.debug("Rough node insert CXC",st),rt),":first-child"),R=o.insert(()=>(at.debug("Rough node insert CXC",st),st),":first-child")}else R=u.insert("rect",":first-child"),N=u.insert("line"),R.attr("class","outer title-state").attr("style",a).attr("x",-m.width/2-T).attr("y",-m.height/2-T).attr("width",m.width+(t.padding||0)).attr("height",m.height+(t.padding||0)),N.attr("class","divider").attr("x1",-m.width/2-T).attr("x2",m.width/2+T).attr("y1",-m.height/2-T+v.height+T).attr("y2",-m.height/2-T+v.height+T);return xt(t,R),t.intersect=function(nt){return gt.rect(t,nt)},o}x(FT,"rectWithTitle");function To(e,t,n,a,s,o,u){const f=(e+n)/2,d=(t+a)/2,g=Math.atan2(a-t,n-e),m=(n-e)/2,b=(a-t)/2,v=m/s,S=b/o,C=Math.sqrt(v**2+S**2);if(C>1)throw new Error("The given radii are too small to create an arc between the points.");const w=Math.sqrt(1-C**2),T=f+w*o*Math.sin(g)*(u?-1:1),k=d-w*s*Math.cos(g)*(u?-1:1),E=Math.atan2((t-k)/o,(e-T)/s);let D=Math.atan2((a-k)/o,(n-T)/s)-E;u&&D<0&&(D+=2*Math.PI),!u&&D>0&&(D-=2*Math.PI);const R=[];for(let N=0;N<20;N++){const K=N/19,it=E+K*D,nt=T+s*Math.cos(it),X=k+o*Math.sin(it);R.push({x:nt,y:X})}return R}x(To,"generateArcPoints");async function $T(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=(t==null?void 0:t.padding)??0,c=(t==null?void 0:t.padding)??0,f=(t!=null&&t.width?t==null?void 0:t.width:o.width)+u*2,d=(t!=null&&t.height?t==null?void 0:t.height:o.height)+c*2,g=t.radius||5,m=t.taper||5,{cssStyles:b}=t,v=vt.svg(s),S=St(t,{});t.stroke&&(S.stroke=t.stroke),t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const C=[{x:-f/2+m,y:-d/2},{x:f/2-m,y:-d/2},...To(f/2-m,-d/2,f/2,-d/2+m,g,g,!0),{x:f/2,y:-d/2+m},{x:f/2,y:d/2-m},...To(f/2,d/2-m,f/2-m,d/2,g,g,!0),{x:f/2-m,y:d/2},{x:-f/2+m,y:d/2},...To(-f/2+m,d/2,-f/2,d/2-m,g,g,!0),{x:-f/2,y:d/2-m},{x:-f/2,y:-d/2+m},...To(-f/2,-d/2+m,-f/2+m,-d/2,g,g,!0)],w=Ut(C),T=v.path(w,S),k=s.insert(()=>T,":first-child");return k.attr("class","basic label-container outer-path"),b&&t.look!=="handDrawn"&&k.selectChildren("path").attr("style",b),a&&t.look!=="handDrawn"&&k.selectChildren("path").attr("style",a),xt(t,k),t.intersect=function(E){return gt.polygon(t,C,E)},s}x($T,"roundedRect");async function zT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=(t==null?void 0:t.padding)??0,f=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),d=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),g=-o.width/2-c,m=-o.height/2-c,{cssStyles:b}=t,v=vt.svg(s),S=St(t,{});t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const C=[{x:g,y:m},{x:g+f+8,y:m},{x:g+f+8,y:m+d},{x:g-8,y:m+d},{x:g-8,y:m},{x:g,y:m},{x:g,y:m+d}],w=v.polygon(C.map(k=>[k.x,k.y]),S),T=s.insert(()=>w,":first-child");return T.attr("class","basic label-container").attr("style",ei(b)),a&&t.look!=="handDrawn"&&T.selectAll("path").attr("style",a),b&&t.look!=="handDrawn"&&T.selectAll("path").attr("style",a),u.attr("transform",`translate(${-f/2+4+(t.padding??0)-(o.x-(o.left??0))},${-d/2+(t.padding??0)-(o.y-(o.top??0))})`),xt(t,T),t.intersect=function(k){return gt.rect(t,k)},s}x(zT,"shadedProcess");async function qT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),f=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=-c/2,g=-f/2,{cssStyles:m}=t,b=vt.svg(s),v=St(t,{});t.look!=="handDrawn"&&(v.roughness=0,v.fillStyle="solid");const S=[{x:d,y:g},{x:d,y:g+f},{x:d+c,y:g+f},{x:d+c,y:g-f/2}],C=Ut(S),w=b.path(C,v),T=s.insert(()=>w,":first-child");return T.attr("class","basic label-container"),m&&t.look!=="handDrawn"&&T.selectChildren("path").attr("style",m),a&&t.look!=="handDrawn"&&T.selectChildren("path").attr("style",a),T.attr("transform",`translate(0, ${f/4})`),u.attr("transform",`translate(${-c/2+(t.padding??0)-(o.x-(o.left??0))}, ${-f/4+(t.padding??0)-(o.y-(o.top??0))})`),xt(t,T),t.intersect=function(k){return gt.polygon(t,S,k)},s}x(qT,"slopedRect");async function UT(e,t){const n={rx:0,ry:0,labelPaddingX:t.labelPaddingX??((t==null?void 0:t.padding)||0)*2,labelPaddingY:((t==null?void 0:t.padding)||0)*1};return ed(e,t,n)}x(UT,"squareRect");async function HT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=o.height+t.padding,c=o.width+u/4+t.padding,f=u/2,{cssStyles:d}=t,g=vt.svg(s),m=St(t,{});t.look!=="handDrawn"&&(m.roughness=0,m.fillStyle="solid");const b=[{x:-c/2+f,y:-u/2},{x:c/2-f,y:-u/2},...Go(-c/2+f,0,f,50,90,270),{x:c/2-f,y:u/2},...Go(c/2-f,0,f,50,270,450)],v=Ut(b),S=g.path(v,m),C=s.insert(()=>S,":first-child");return C.attr("class","basic label-container outer-path"),d&&t.look!=="handDrawn"&&C.selectChildren("path").attr("style",d),a&&t.look!=="handDrawn"&&C.selectChildren("path").attr("style",a),xt(t,C),t.intersect=function(w){return gt.polygon(t,b,w)},s}x(HT,"stadium");async function GT(e,t){return ed(e,t,{rx:5,ry:5})}x(GT,"state");function jT(e,t,{config:{themeVariables:n}}){const{labelStyles:a,nodeStyles:s}=Ct(t);t.labelStyle=a;const{cssStyles:o}=t,{lineColor:u,stateBorder:c,nodeBorder:f}=n,d=e.insert("g").attr("class","node default").attr("id",t.domId||t.id),g=vt.svg(d),m=St(t,{});t.look!=="handDrawn"&&(m.roughness=0,m.fillStyle="solid");const b=g.circle(0,0,14,{...m,stroke:u,strokeWidth:2}),v=c??f,S=g.circle(0,0,5,{...m,fill:v,stroke:v,strokeWidth:2,fillStyle:"solid"}),C=d.insert(()=>b,":first-child");return C.insert(()=>S),o&&C.selectAll("path").attr("style",o),s&&C.selectAll("path").attr("style",s),xt(t,C),t.intersect=function(w){return gt.circle(t,7,w)},d}x(jT,"stateEnd");function YT(e,t,{config:{themeVariables:n}}){const{lineColor:a}=n,s=e.insert("g").attr("class","node default").attr("id",t.domId||t.id);let o;if(t.look==="handDrawn"){const c=vt.svg(s).circle(0,0,14,pO(a));o=s.insert(()=>c),o.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14)}else o=s.insert("circle",":first-child"),o.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14);return xt(t,o),t.intersect=function(u){return gt.circle(t,7,u)},s}x(YT,"stateStart");async function WT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=((t==null?void 0:t.padding)||0)/2,c=o.width+t.padding,f=o.height+t.padding,d=-o.width/2-u,g=-o.height/2-u,m=[{x:0,y:0},{x:c,y:0},{x:c,y:-f},{x:0,y:-f},{x:0,y:0},{x:-8,y:0},{x:c+8,y:0},{x:c+8,y:-f},{x:-8,y:-f},{x:-8,y:0}];if(t.look==="handDrawn"){const b=vt.svg(s),v=St(t,{}),S=b.rectangle(d-8,g,c+16,f,v),C=b.line(d,g,d,g+f,v),w=b.line(d+c,g,d+c,g+f,v);s.insert(()=>C,":first-child"),s.insert(()=>w,":first-child");const T=s.insert(()=>S,":first-child"),{cssStyles:k}=t;T.attr("class","basic label-container").attr("style",ei(k)),xt(t,T)}else{const b=Yr(s,c,f,m);a&&b.attr("style",a),xt(t,b)}return t.intersect=function(b){return gt.polygon(t,m,b)},s}x(WT,"subroutine");async function VT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),c=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),f=-u/2,d=-c/2,g=.2*c,m=.2*c,{cssStyles:b}=t,v=vt.svg(s),S=St(t,{}),C=[{x:f-g/2,y:d},{x:f+u+g/2,y:d},{x:f+u+g/2,y:d+c},{x:f-g/2,y:d+c}],w=[{x:f+u-g/2,y:d+c},{x:f+u+g/2,y:d+c},{x:f+u+g/2,y:d+c-m}];t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const T=Ut(C),k=v.path(T,S),E=Ut(w),O=v.path(E,{...S,fillStyle:"solid"}),D=s.insert(()=>O,":first-child");return D.insert(()=>k,":first-child"),D.attr("class","basic label-container"),b&&t.look!=="handDrawn"&&D.selectAll("path").attr("style",b),a&&t.look!=="handDrawn"&&D.selectAll("path").attr("style",a),xt(t,D),t.intersect=function(R){return gt.polygon(t,C,R)},s}x(VT,"taggedRect");async function XT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),f=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=f/4,g=.2*c,m=.2*f,b=f+d,{cssStyles:v}=t,S=vt.svg(s),C=St(t,{});t.look!=="handDrawn"&&(C.roughness=0,C.fillStyle="solid");const w=[{x:-c/2-c/2*.1,y:b/2},...Ur(-c/2-c/2*.1,b/2,c/2+c/2*.1,b/2,d,.8),{x:c/2+c/2*.1,y:-b/2},{x:-c/2-c/2*.1,y:-b/2}],T=-c/2+c/2*.1,k=-b/2-m*.4,E=[{x:T+c-g,y:(k+f)*1.4},{x:T+c,y:k+f-m},{x:T+c,y:(k+f)*.9},...Ur(T+c,(k+f)*1.3,T+c-g,(k+f)*1.5,-f*.03,.5)],O=Ut(w),D=S.path(O,C),R=Ut(E),N=S.path(R,{...C,fillStyle:"solid"}),K=s.insert(()=>N,":first-child");return K.insert(()=>D,":first-child"),K.attr("class","basic label-container"),v&&t.look!=="handDrawn"&&K.selectAll("path").attr("style",v),a&&t.look!=="handDrawn"&&K.selectAll("path").attr("style",a),K.attr("transform",`translate(0,${-d/2})`),u.attr("transform",`translate(${-c/2+(t.padding??0)-(o.x-(o.left??0))},${-f/2+(t.padding??0)-d/2-(o.y-(o.top??0))})`),xt(t,K),t.intersect=function(it){return gt.polygon(t,w,it)},s}x(XT,"taggedWaveEdgedRectangle");async function QT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=Math.max(o.width+t.padding,(t==null?void 0:t.width)||0),c=Math.max(o.height+t.padding,(t==null?void 0:t.height)||0),f=-u/2,d=-c/2,g=s.insert("rect",":first-child");return g.attr("class","text").attr("style",a).attr("rx",0).attr("ry",0).attr("x",f).attr("y",d).attr("width",u).attr("height",c),xt(t,g),t.intersect=function(m){return gt.rect(t,m)},s}x(QT,"text");var eF=x((e,t,n,a,s,o)=>`M${e},${t}
    a${s},${o} 0,0,1 0,${-a}
    l${n},0
    a${s},${o} 0,0,1 0,${a}
    M${n},${-a}
    a${s},${o} 0,0,0 0,${a}
    l${-n},0`,"createCylinderPathD"),iF=x((e,t,n,a,s,o)=>[`M${e},${t}`,`M${e+n},${t}`,`a${s},${o} 0,0,0 0,${-a}`,`l${-n},0`,`a${s},${o} 0,0,0 0,${a}`,`l${n},0`].join(" "),"createOuterCylinderPathD"),nF=x((e,t,n,a,s,o)=>[`M${e+n/2},${-a/2}`,`a${s},${o} 0,0,0 0,${a}`].join(" "),"createInnerCylinderPathD");async function KT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u,halfPadding:c}=await Rt(e,t,At(t)),f=t.look==="neo"?c*2:c,d=o.height+f,g=d/2,m=g/(2.5+d/50),b=o.width+m+f,{cssStyles:v}=t;let S;if(t.look==="handDrawn"){const C=vt.svg(s),w=iF(0,0,b,d,m,g),T=nF(0,0,b,d,m,g),k=C.path(w,St(t,{})),E=C.path(T,St(t,{fill:"none"}));S=s.insert(()=>E,":first-child"),S=s.insert(()=>k,":first-child"),S.attr("class","basic label-container"),v&&S.attr("style",v)}else{const C=eF(0,0,b,d,m,g);S=s.insert("path",":first-child").attr("d",C).attr("class","basic label-container").attr("style",ei(v)).attr("style",a),S.attr("class","basic label-container"),v&&S.selectAll("path").attr("style",v),a&&S.selectAll("path").attr("style",a)}return S.attr("label-offset-x",m),S.attr("transform",`translate(${-b/2}, ${d/2} )`),u.attr("transform",`translate(${-(o.width/2)-m-(o.x-(o.left??0))}, ${-(o.height/2)-(o.y-(o.top??0))})`),xt(t,S),t.intersect=function(C){const w=gt.rect(t,C),T=w.y-(t.y??0);if(g!=0&&(Math.abs(T)<(t.height??0)/2||Math.abs(T)==(t.height??0)/2&&Math.abs(w.x-(t.x??0))>(t.width??0)/2-m)){let k=m*m*(1-T*T/(g*g));k!=0&&(k=Math.sqrt(Math.abs(k))),k=m-k,C.x-(t.x??0)>0&&(k=-k),w.x+=k}return w},s}x(KT,"tiltedCylinder");async function ZT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=o.width+t.padding,c=o.height+t.padding,f=[{x:-3*c/6,y:0},{x:u+3*c/6,y:0},{x:u,y:-c},{x:0,y:-c}];let d;const{cssStyles:g}=t;if(t.look==="handDrawn"){const m=vt.svg(s),b=St(t,{}),v=Ut(f),S=m.path(v,b);d=s.insert(()=>S,":first-child").attr("transform",`translate(${-u/2}, ${c/2})`),g&&d.attr("style",g)}else d=Yr(s,u,c,f);return a&&d.attr("style",a),t.width=u,t.height=c,xt(t,d),t.intersect=function(m){return gt.polygon(t,f,m)},s}x(ZT,"trapezoid");async function JT(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=60,c=20,f=Math.max(u,o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),d=Math.max(c,o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),{cssStyles:g}=t,m=vt.svg(s),b=St(t,{});t.look!=="handDrawn"&&(b.roughness=0,b.fillStyle="solid");const v=[{x:-f/2*.8,y:-d/2},{x:f/2*.8,y:-d/2},{x:f/2,y:-d/2*.6},{x:f/2,y:d/2},{x:-f/2,y:d/2},{x:-f/2,y:-d/2*.6}],S=Ut(v),C=m.path(S,b),w=s.insert(()=>C,":first-child");return w.attr("class","basic label-container"),g&&t.look!=="handDrawn"&&w.selectChildren("path").attr("style",g),a&&t.look!=="handDrawn"&&w.selectChildren("path").attr("style",a),xt(t,w),t.intersect=function(T){return gt.polygon(t,v,T)},s}x(JT,"trapezoidalPentagon");async function tw(e,t){var k;const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Ne((k=Vt().flowchart)==null?void 0:k.htmlLabels),f=o.width+(t.padding??0),d=f+o.height,g=f+o.height,m=[{x:0,y:0},{x:g,y:0},{x:g/2,y:-d}],{cssStyles:b}=t,v=vt.svg(s),S=St(t,{});t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const C=Ut(m),w=v.path(C,S),T=s.insert(()=>w,":first-child").attr("transform",`translate(${-d/2}, ${d/2})`);return b&&t.look!=="handDrawn"&&T.selectChildren("path").attr("style",b),a&&t.look!=="handDrawn"&&T.selectChildren("path").attr("style",a),t.width=f,t.height=d,xt(t,T),u.attr("transform",`translate(${-o.width/2-(o.x-(o.left??0))}, ${d/2-(o.height+(t.padding??0)/(c?2:1)-(o.y-(o.top??0)))})`),t.intersect=function(E){return at.info("Triangle intersect",t,m,E),gt.polygon(t,m,E)},s}x(tw,"triangle");async function ew(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),f=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=f/8,g=f+d,{cssStyles:m}=t,v=70-c,S=v>0?v/2:0,C=vt.svg(s),w=St(t,{});t.look!=="handDrawn"&&(w.roughness=0,w.fillStyle="solid");const T=[{x:-c/2-S,y:g/2},...Ur(-c/2-S,g/2,c/2+S,g/2,d,.8),{x:c/2+S,y:-g/2},{x:-c/2-S,y:-g/2}],k=Ut(T),E=C.path(k,w),O=s.insert(()=>E,":first-child");return O.attr("class","basic label-container"),m&&t.look!=="handDrawn"&&O.selectAll("path").attr("style",m),a&&t.look!=="handDrawn"&&O.selectAll("path").attr("style",a),O.attr("transform",`translate(0,${-d/2})`),u.attr("transform",`translate(${-c/2+(t.padding??0)-(o.x-(o.left??0))},${-f/2+(t.padding??0)-d-(o.y-(o.top??0))})`),xt(t,O),t.intersect=function(D){return gt.polygon(t,T,D)},s}x(ew,"waveEdgedRectangle");async function iw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o}=await Rt(e,t,At(t)),u=100,c=50,f=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),d=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),g=f/d;let m=f,b=d;m>b*g?b=m/g:m=b*g,m=Math.max(m,u),b=Math.max(b,c);const v=Math.min(b*.2,b/4),S=b+v*2,{cssStyles:C}=t,w=vt.svg(s),T=St(t,{});t.look!=="handDrawn"&&(T.roughness=0,T.fillStyle="solid");const k=[{x:-m/2,y:S/2},...Ur(-m/2,S/2,m/2,S/2,v,1),{x:m/2,y:-S/2},...Ur(m/2,-S/2,-m/2,-S/2,v,-1)],E=Ut(k),O=w.path(E,T),D=s.insert(()=>O,":first-child");return D.attr("class","basic label-container"),C&&t.look!=="handDrawn"&&D.selectAll("path").attr("style",C),a&&t.look!=="handDrawn"&&D.selectAll("path").attr("style",a),xt(t,D),t.intersect=function(R){return gt.polygon(t,k,R)},s}x(iw,"waveRectangle");async function nw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,label:u}=await Rt(e,t,At(t)),c=Math.max(o.width+(t.padding??0)*2,(t==null?void 0:t.width)??0),f=Math.max(o.height+(t.padding??0)*2,(t==null?void 0:t.height)??0),d=5,g=-c/2,m=-f/2,{cssStyles:b}=t,v=vt.svg(s),S=St(t,{}),C=[{x:g-d,y:m-d},{x:g-d,y:m+f},{x:g+c,y:m+f},{x:g+c,y:m-d}],w=`M${g-d},${m-d} L${g+c},${m-d} L${g+c},${m+f} L${g-d},${m+f} L${g-d},${m-d}
                M${g-d},${m} L${g+c},${m}
                M${g},${m-d} L${g},${m+f}`;t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const T=v.path(w,S),k=s.insert(()=>T,":first-child");return k.attr("transform",`translate(${d/2}, ${d/2})`),k.attr("class","basic label-container"),b&&t.look!=="handDrawn"&&k.selectAll("path").attr("style",b),a&&t.look!=="handDrawn"&&k.selectAll("path").attr("style",a),u.attr("transform",`translate(${-(o.width/2)+d/2-(o.x-(o.left??0))}, ${-(o.height/2)+d/2-(o.y-(o.top??0))})`),xt(t,k),t.intersect=function(E){return gt.polygon(t,C,E)},s}x(nw,"windowPane");async function Wm(e,t){var ot,tt,ft,pt;const n=t;if(n.alias&&(t.label=n.alias),t.look==="handDrawn"){const{themeVariables:ht}=Je(),{background:Lt}=ht,Bt={...t,id:t.id+"-background",look:"default",cssStyles:["stroke: none",`fill: ${Lt}`]};await Wm(e,Bt)}const a=Je();t.useHtmlLabels=a.htmlLabels;let s=((ot=a.er)==null?void 0:ot.diagramPadding)??10,o=((tt=a.er)==null?void 0:tt.entityPadding)??6;const{cssStyles:u}=t,{labelStyles:c,nodeStyles:f}=Ct(t);if(n.attributes.length===0&&t.label){const ht={rx:0,ry:0,labelPaddingX:s,labelPaddingY:s*1.5};lr(t.label,a)+ht.labelPaddingX*2<a.er.minEntityWidth&&(t.width=a.er.minEntityWidth);const Lt=await ed(e,t,ht);if(!Ne(a.htmlLabels)){const Bt=Lt.select("text"),Ht=(ft=Bt.node())==null?void 0:ft.getBBox();Bt.attr("transform",`translate(${-Ht.width/2}, 0)`)}return Lt}a.htmlLabels||(s*=1.25,o*=1.25);let d=At(t);d||(d="node default");const g=e.insert("g").attr("class",d).attr("id",t.domId||t.id),m=await Ts(g,t.label??"",a,0,0,["name"],c);m.height+=o;let b=0;const v=[],S=[];let C=0,w=0,T=0,k=0,E=!0,O=!0;for(const ht of n.attributes){const Lt=await Ts(g,ht.type,a,0,b,["attribute-type"],c);C=Math.max(C,Lt.width+s);const Bt=await Ts(g,ht.name,a,0,b,["attribute-name"],c);w=Math.max(w,Bt.width+s);const Ht=await Ts(g,ht.keys.join(),a,0,b,["attribute-keys"],c);T=Math.max(T,Ht.width+s);const Zt=await Ts(g,ht.comment,a,0,b,["attribute-comment"],c);k=Math.max(k,Zt.width+s);const oe=Math.max(Lt.height,Bt.height,Ht.height,Zt.height)+o;S.push({yOffset:b,rowHeight:oe}),b+=oe}let D=4;T<=s&&(E=!1,T=0,D--),k<=s&&(O=!1,k=0,D--);const R=g.node().getBBox();if(m.width+s*2-(C+w+T+k)>0){const ht=m.width+s*2-(C+w+T+k);C+=ht/D,w+=ht/D,T>0&&(T+=ht/D),k>0&&(k+=ht/D)}const N=C+w+T+k,K=vt.svg(g),it=St(t,{});t.look!=="handDrawn"&&(it.roughness=0,it.fillStyle="solid");let nt=0;S.length>0&&(nt=S.reduce((ht,Lt)=>ht+((Lt==null?void 0:Lt.rowHeight)??0),0));const X=Math.max(R.width+s*2,(t==null?void 0:t.width)||0,N),st=Math.max((nt??0)+m.height,(t==null?void 0:t.height)||0),rt=-X/2,W=-st/2;g.selectAll("g:not(:first-child)").each((ht,Lt,Bt)=>{const Ht=jt(Bt[Lt]),Zt=Ht.attr("transform");let oe=0,Ae=0;if(Zt){const ni=RegExp(/translate\(([^,]+),([^)]+)\)/).exec(Zt);ni&&(oe=parseFloat(ni[1]),Ae=parseFloat(ni[2]),Ht.attr("class").includes("attribute-name")?oe+=C:Ht.attr("class").includes("attribute-keys")?oe+=C+w:Ht.attr("class").includes("attribute-comment")&&(oe+=C+w+T))}Ht.attr("transform",`translate(${rt+s/2+oe}, ${Ae+W+m.height+o/2})`)}),g.select(".name").attr("transform","translate("+-m.width/2+", "+(W+o/2)+")");const j=K.rectangle(rt,W,X,st,it),M=g.insert(()=>j,":first-child").attr("style",u.join("")),{themeVariables:F}=Je(),{rowEven:$,rowOdd:ut,nodeBorder:L}=F;v.push(0);for(const[ht,Lt]of S.entries()){const Ht=(ht+1)%2===0&&Lt.yOffset!==0,Zt=K.rectangle(rt,m.height+W+(Lt==null?void 0:Lt.yOffset),X,Lt==null?void 0:Lt.rowHeight,{...it,fill:Ht?$:ut,stroke:L});g.insert(()=>Zt,"g.label").attr("style",u.join("")).attr("class",`row-rect-${Ht?"even":"odd"}`)}let H=K.line(rt,m.height+W,X+rt,m.height+W,it);g.insert(()=>H).attr("class","divider"),H=K.line(C+rt,m.height+W,C+rt,st+W,it),g.insert(()=>H).attr("class","divider"),E&&(H=K.line(C+w+rt,m.height+W,C+w+rt,st+W,it),g.insert(()=>H).attr("class","divider")),O&&(H=K.line(C+w+T+rt,m.height+W,C+w+T+rt,st+W,it),g.insert(()=>H).attr("class","divider"));for(const ht of v)H=K.line(rt,m.height+W+ht,X+rt,m.height+W+ht,it),g.insert(()=>H).attr("class","divider");if(xt(t,M),f&&t.look!=="handDrawn"){const ht=f.split(";"),Lt=(pt=ht==null?void 0:ht.filter(Bt=>Bt.includes("stroke")))==null?void 0:pt.map(Bt=>`${Bt}`).join("; ");g.selectAll("path").attr("style",Lt??""),g.selectAll(".row-rect-even path").attr("style",f)}return t.intersect=function(ht){return gt.rect(t,ht)},g}x(Wm,"erBox");async function Ts(e,t,n,a=0,s=0,o=[],u=""){const c=e.insert("g").attr("class",`label ${o.join(" ")}`).attr("transform",`translate(${a}, ${s})`).attr("style",u);t!==sS(t)&&(t=sS(t),t=t.replaceAll("<","&lt;").replaceAll(">","&gt;"));const f=c.node().appendChild(await Gr(c,t,{width:lr(t,n)+100,style:u,useHtmlLabels:n.htmlLabels},n));if(t.includes("&lt;")||t.includes("&gt;")){let g=f.children[0];for(g.textContent=g.textContent.replaceAll("&lt;","<").replaceAll("&gt;",">");g.childNodes[0];)g=g.childNodes[0],g.textContent=g.textContent.replaceAll("&lt;","<").replaceAll("&gt;",">")}let d=f.getBBox();if(Ne(n.htmlLabels)){const g=f.children[0];g.style.textAlign="start";const m=jt(f);d=g.getBoundingClientRect(),m.attr("width",d.width),m.attr("height",d.height)}return d}x(Ts,"addText");async function rw(e,t,n,a,s=n.class.padding??12){const o=a?0:3,u=e.insert("g").attr("class",At(t)).attr("id",t.domId||t.id);let c=null,f=null,d=null,g=null,m=0,b=0,v=0;if(c=u.insert("g").attr("class","annotation-group text"),t.annotations.length>0){const k=t.annotations[0];await wo(c,{text:`«${k}»`},0),m=c.node().getBBox().height}f=u.insert("g").attr("class","label-group text"),await wo(f,t,0,["font-weight: bolder"]);const S=f.node().getBBox();b=S.height,d=u.insert("g").attr("class","members-group text");let C=0;for(const k of t.members){const E=await wo(d,k,C,[k.parseClassifier()]);C+=E+o}v=d.node().getBBox().height,v<=0&&(v=s/2),g=u.insert("g").attr("class","methods-group text");let w=0;for(const k of t.methods){const E=await wo(g,k,w,[k.parseClassifier()]);w+=E+o}let T=u.node().getBBox();if(c!==null){const k=c.node().getBBox();c.attr("transform",`translate(${-k.width/2})`)}return f.attr("transform",`translate(${-S.width/2}, ${m})`),T=u.node().getBBox(),d.attr("transform",`translate(0, ${m+b+s*2})`),T=u.node().getBBox(),g.attr("transform",`translate(0, ${m+b+(v?v+s*4:s*2)})`),T=u.node().getBBox(),{shapeSvg:u,bbox:T}}x(rw,"textHelper");async function wo(e,t,n,a=[]){const s=e.insert("g").attr("class","label").attr("style",a.join("; ")),o=Je();let u="useHtmlLabels"in t?t.useHtmlLabels:Ne(o.htmlLabels)??!0,c="";"text"in t?c=t.text:c=t.label,!u&&c.startsWith("\\")&&(c=c.substring(1)),$s(c)&&(u=!0);const f=await Gr(s,nm(Pa(c)),{width:lr(c,o)+50,classes:"markdown-node-label",useHtmlLabels:u},o);let d,g=1;if(u){const m=f.children[0],b=jt(f);g=m.innerHTML.split("<br>").length,m.innerHTML.includes("</math>")&&(g+=m.innerHTML.split("<mrow>").length-1);const v=m.getElementsByTagName("img");if(v){const S=c.replace(/<img[^>]*>/g,"").trim()==="";await Promise.all([...v].map(C=>new Promise(w=>{function T(){var k;if(C.style.display="flex",C.style.flexDirection="column",S){const E=((k=o.fontSize)==null?void 0:k.toString())??window.getComputedStyle(document.body).fontSize,D=parseInt(E,10)*5+"px";C.style.minWidth=D,C.style.maxWidth=D}else C.style.width="100%";w(C)}x(T,"setupImage"),setTimeout(()=>{C.complete&&T()}),C.addEventListener("error",T),C.addEventListener("load",T)})))}d=m.getBoundingClientRect(),b.attr("width",d.width),b.attr("height",d.height)}else{a.includes("font-weight: bolder")&&jt(f).selectAll("tspan").attr("font-weight",""),g=f.children.length;const m=f.children[0];(f.textContent===""||f.textContent.includes("&gt"))&&(m.textContent=c[0]+c.substring(1).replaceAll("&gt;",">").replaceAll("&lt;","<").trim(),c[1]===" "&&(m.textContent=m.textContent[0]+" "+m.textContent.substring(1))),m.textContent==="undefined"&&(m.textContent=""),d=f.getBBox()}return s.attr("transform","translate(0,"+(-d.height/(2*g)+n)+")"),d.height}x(wo,"addText");async function aw(e,t){var it,nt;const n=Vt(),a=n.class.padding??12,s=a,o=t.useHtmlLabels??Ne(n.htmlLabels)??!0,u=t;u.annotations=u.annotations??[],u.members=u.members??[],u.methods=u.methods??[];const{shapeSvg:c,bbox:f}=await rw(e,t,n,o,s),{labelStyles:d,nodeStyles:g}=Ct(t);t.labelStyle=d,t.cssStyles=u.styles||"";const m=((it=u.styles)==null?void 0:it.join(";"))||g||"";t.cssStyles||(t.cssStyles=m.replaceAll("!important","").split(";"));const b=u.members.length===0&&u.methods.length===0&&!((nt=n.class)!=null&&nt.hideEmptyMembersBox),v=vt.svg(c),S=St(t,{});t.look!=="handDrawn"&&(S.roughness=0,S.fillStyle="solid");const C=f.width;let w=f.height;u.members.length===0&&u.methods.length===0?w+=s:u.members.length>0&&u.methods.length===0&&(w+=s*2);const T=-C/2,k=-w/2,E=v.rectangle(T-a,k-a-(b?a:u.members.length===0&&u.methods.length===0?-a/2:0),C+2*a,w+2*a+(b?a*2:u.members.length===0&&u.methods.length===0?-a:0),S),O=c.insert(()=>E,":first-child");O.attr("class","basic label-container");const D=O.node().getBBox();c.selectAll(".text").each((X,st,rt)=>{var ut;const W=jt(rt[st]),j=W.attr("transform");let M=0;if(j){const H=RegExp(/translate\(([^,]+),([^)]+)\)/).exec(j);H&&(M=parseFloat(H[2]))}let F=M+k+a-(b?a:u.members.length===0&&u.methods.length===0?-a/2:0);o||(F-=4);let $=T;(W.attr("class").includes("label-group")||W.attr("class").includes("annotation-group"))&&($=-((ut=W.node())==null?void 0:ut.getBBox().width)/2||0,c.selectAll("text").each(function(L,H,ot){window.getComputedStyle(ot[H]).textAnchor==="middle"&&($=0)})),W.attr("transform",`translate(${$}, ${F})`)});const R=c.select(".annotation-group").node().getBBox().height-(b?a/2:0)||0,N=c.select(".label-group").node().getBBox().height-(b?a/2:0)||0,K=c.select(".members-group").node().getBBox().height-(b?a/2:0)||0;if(u.members.length>0||u.methods.length>0||b){const X=v.line(D.x,R+N+k+a,D.x+D.width,R+N+k+a,S);c.insert(()=>X).attr("class","divider").attr("style",m)}if(b||u.members.length>0||u.methods.length>0){const X=v.line(D.x,R+N+K+k+s*2+a,D.x+D.width,R+N+K+k+a+s*2,S);c.insert(()=>X).attr("class","divider").attr("style",m)}if(u.look!=="handDrawn"&&c.selectAll("path").attr("style",m),O.select(":nth-child(2)").attr("style",m),c.selectAll(".divider").select("path").attr("style",m),t.labelStyle?c.selectAll("span").attr("style",t.labelStyle):c.selectAll("span").attr("style",m),!o){const X=RegExp(/color\s*:\s*([^;]*)/),st=X.exec(m);if(st){const rt=st[0].replace("color","fill");c.selectAll("tspan").attr("style",rt)}else if(d){const rt=X.exec(d);if(rt){const W=rt[0].replace("color","fill");c.selectAll("tspan").attr("style",W)}}}return xt(t,O),t.intersect=function(X){return gt.rect(t,X)},c}x(aw,"classBox");async function sw(e,t){var R,N;const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const s=t,o=t,u=20,c=20,f="verifyMethod"in t,d=At(t),g=e.insert("g").attr("class",d).attr("id",t.domId??t.id);let m;f?m=await vn(g,`&lt;&lt;${s.type}&gt;&gt;`,0,t.labelStyle):m=await vn(g,"&lt;&lt;Element&gt;&gt;",0,t.labelStyle);let b=m;const v=await vn(g,s.name,b,t.labelStyle+"; font-weight: bold;");if(b+=v+c,f){const K=await vn(g,`${s.requirementId?`ID: ${s.requirementId}`:""}`,b,t.labelStyle);b+=K;const it=await vn(g,`${s.text?`Text: ${s.text}`:""}`,b,t.labelStyle);b+=it;const nt=await vn(g,`${s.risk?`Risk: ${s.risk}`:""}`,b,t.labelStyle);b+=nt,await vn(g,`${s.verifyMethod?`Verification: ${s.verifyMethod}`:""}`,b,t.labelStyle)}else{const K=await vn(g,`${o.type?`Type: ${o.type}`:""}`,b,t.labelStyle);b+=K,await vn(g,`${o.docRef?`Doc Ref: ${o.docRef}`:""}`,b,t.labelStyle)}const S=(((R=g.node())==null?void 0:R.getBBox().width)??200)+u,C=(((N=g.node())==null?void 0:N.getBBox().height)??200)+u,w=-S/2,T=-C/2,k=vt.svg(g),E=St(t,{});t.look!=="handDrawn"&&(E.roughness=0,E.fillStyle="solid");const O=k.rectangle(w,T,S,C,E),D=g.insert(()=>O,":first-child");if(D.attr("class","basic label-container").attr("style",a),g.selectAll(".label").each((K,it,nt)=>{const X=jt(nt[it]),st=X.attr("transform");let rt=0,W=0;if(st){const $=RegExp(/translate\(([^,]+),([^)]+)\)/).exec(st);$&&(rt=parseFloat($[1]),W=parseFloat($[2]))}const j=W-C/2;let M=w+u/2;(it===0||it===1)&&(M=rt),X.attr("transform",`translate(${M}, ${j+u})`)}),b>m+v+c){const K=k.line(w,T+m+v+c,w+S,T+m+v+c,E);g.insert(()=>K).attr("style",a)}return xt(t,D),t.intersect=function(K){return gt.rect(t,K)},g}x(sw,"requirementBox");async function vn(e,t,n,a=""){if(t==="")return 0;const s=e.insert("g").attr("class","label").attr("style",a),o=Vt(),u=o.htmlLabels??!0,c=await Gr(s,nm(Pa(t)),{width:lr(t,o)+50,classes:"markdown-node-label",useHtmlLabels:u,style:a},o);let f;if(u){const d=c.children[0],g=jt(c);f=d.getBoundingClientRect(),g.attr("width",f.width),g.attr("height",f.height)}else{const d=c.children[0];for(const g of d.children)g.textContent=g.textContent.replaceAll("&gt;",">").replaceAll("&lt;","<"),a&&g.setAttribute("style",a);f=c.getBBox(),f.height+=6}return s.attr("transform",`translate(${-f.width/2},${-f.height/2+n})`),f.height}x(vn,"addText");var rF=x(e=>{switch(e){case"Very High":return"red";case"High":return"orange";case"Medium":return null;case"Low":return"blue";case"Very Low":return"lightblue"}},"colorFromPriority");async function lw(e,t,{config:n}){var st,rt;const{labelStyles:a,nodeStyles:s}=Ct(t);t.labelStyle=a||"";const o=10,u=t.width;t.width=(t.width??200)-10;const{shapeSvg:c,bbox:f,label:d}=await Rt(e,t,At(t)),g=t.padding||10;let m="",b;"ticket"in t&&t.ticket&&((st=n==null?void 0:n.kanban)!=null&&st.ticketBaseUrl)&&(m=(rt=n==null?void 0:n.kanban)==null?void 0:rt.ticketBaseUrl.replace("#TICKET#",t.ticket),b=c.insert("svg:a",":first-child").attr("class","kanban-ticket-link").attr("xlink:href",m).attr("target","_blank"));const v={useHtmlLabels:t.useHtmlLabels,labelStyle:t.labelStyle||"",width:t.width,img:t.img,padding:t.padding||8,centerLabel:!1};let S,C;b?{label:S,bbox:C}=await zg(b,"ticket"in t&&t.ticket||"",v):{label:S,bbox:C}=await zg(c,"ticket"in t&&t.ticket||"",v);const{label:w,bbox:T}=await zg(c,"assigned"in t&&t.assigned||"",v);t.width=u;const k=10,E=(t==null?void 0:t.width)||0,O=Math.max(C.height,T.height)/2,D=Math.max(f.height+k*2,(t==null?void 0:t.height)||0)+O,R=-E/2,N=-D/2;d.attr("transform","translate("+(g-E/2)+", "+(-O-f.height/2)+")"),S.attr("transform","translate("+(g-E/2)+", "+(-O+f.height/2)+")"),w.attr("transform","translate("+(g+E/2-T.width-2*o)+", "+(-O+f.height/2)+")");let K;const{rx:it,ry:nt}=t,{cssStyles:X}=t;if(t.look==="handDrawn"){const W=vt.svg(c),j=St(t,{}),M=it||nt?W.path(jr(R,N,E,D,it||0),j):W.rectangle(R,N,E,D,j);K=c.insert(()=>M,":first-child"),K.attr("class","basic label-container").attr("style",X||null)}else{K=c.insert("rect",":first-child"),K.attr("class","basic label-container __APA__").attr("style",s).attr("rx",it??5).attr("ry",nt??5).attr("x",R).attr("y",N).attr("width",E).attr("height",D);const W="priority"in t&&t.priority;if(W){const j=c.append("line"),M=R+2,F=N+Math.floor((it??0)/2),$=N+D-Math.floor((it??0)/2);j.attr("x1",M).attr("y1",F).attr("x2",M).attr("y2",$).attr("stroke-width","4").attr("stroke",rF(W))}}return xt(t,K),t.height=D,t.intersect=function(W){return gt.rect(t,W)},c}x(lw,"kanbanItem");async function ow(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,halfPadding:u,label:c}=await Rt(e,t,At(t)),f=o.width+10*u,d=o.height+8*u,g=.15*f,{cssStyles:m}=t,b=o.width+20,v=o.height+20,S=Math.max(f,b),C=Math.max(d,v);c.attr("transform",`translate(${-o.width/2}, ${-o.height/2})`);let w;const T=`M0 0 
    a${g},${g} 1 0,0 ${S*.25},${-1*C*.1}
    a${g},${g} 1 0,0 ${S*.25},0
    a${g},${g} 1 0,0 ${S*.25},0
    a${g},${g} 1 0,0 ${S*.25},${C*.1}

    a${g},${g} 1 0,0 ${S*.15},${C*.33}
    a${g*.8},${g*.8} 1 0,0 0,${C*.34}
    a${g},${g} 1 0,0 ${-1*S*.15},${C*.33}

    a${g},${g} 1 0,0 ${-1*S*.25},${C*.15}
    a${g},${g} 1 0,0 ${-1*S*.25},0
    a${g},${g} 1 0,0 ${-1*S*.25},0
    a${g},${g} 1 0,0 ${-1*S*.25},${-1*C*.15}

    a${g},${g} 1 0,0 ${-1*S*.1},${-1*C*.33}
    a${g*.8},${g*.8} 1 0,0 0,${-1*C*.34}
    a${g},${g} 1 0,0 ${S*.1},${-1*C*.33}
  H0 V0 Z`;if(t.look==="handDrawn"){const k=vt.svg(s),E=St(t,{}),O=k.path(T,E);w=s.insert(()=>O,":first-child"),w.attr("class","basic label-container").attr("style",ei(m))}else w=s.insert("path",":first-child").attr("class","basic label-container").attr("style",a).attr("d",T);return w.attr("transform",`translate(${-S/2}, ${-C/2})`),xt(t,w),t.calcIntersect=function(k,E){return gt.rect(k,E)},t.intersect=function(k){return at.info("Bang intersect",t,k),gt.rect(t,k)},s}x(ow,"bang");async function cw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,halfPadding:u,label:c}=await Rt(e,t,At(t)),f=o.width+2*u,d=o.height+2*u,g=.15*f,m=.25*f,b=.35*f,v=.2*f,{cssStyles:S}=t;let C;const w=`M0 0 
    a${g},${g} 0 0,1 ${f*.25},${-1*f*.1}
    a${b},${b} 1 0,1 ${f*.4},${-1*f*.1}
    a${m},${m} 1 0,1 ${f*.35},${f*.2}

    a${g},${g} 1 0,1 ${f*.15},${d*.35}
    a${v},${v} 1 0,1 ${-1*f*.15},${d*.65}

    a${m},${g} 1 0,1 ${-1*f*.25},${f*.15}
    a${b},${b} 1 0,1 ${-1*f*.5},0
    a${g},${g} 1 0,1 ${-1*f*.25},${-1*f*.15}

    a${g},${g} 1 0,1 ${-1*f*.1},${-1*d*.35}
    a${v},${v} 1 0,1 ${f*.1},${-1*d*.65}
  H0 V0 Z`;if(t.look==="handDrawn"){const T=vt.svg(s),k=St(t,{}),E=T.path(w,k);C=s.insert(()=>E,":first-child"),C.attr("class","basic label-container").attr("style",ei(S))}else C=s.insert("path",":first-child").attr("class","basic label-container").attr("style",a).attr("d",w);return c.attr("transform",`translate(${-o.width/2}, ${-o.height/2})`),C.attr("transform",`translate(${-f/2}, ${-d/2})`),xt(t,C),t.calcIntersect=function(T,k){return gt.rect(T,k)},t.intersect=function(T){return at.info("Cloud intersect",t,T),gt.rect(t,T)},s}x(cw,"cloud");async function uw(e,t){const{labelStyles:n,nodeStyles:a}=Ct(t);t.labelStyle=n;const{shapeSvg:s,bbox:o,halfPadding:u,label:c}=await Rt(e,t,At(t)),f=o.width+8*u,d=o.height+2*u,g=5,m=`
    M${-f/2} ${d/2-g}
    v${-d+2*g}
    q0,-${g} ${g},-${g}
    h${f-2*g}
    q${g},0 ${g},${g}
    v${d-2*g}
    q0,${g} -${g},${g}
    h${-f+2*g}
    q-${g},0 -${g},-${g}
    Z
  `,b=s.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+t.type).attr("style",a).attr("d",m);return s.append("line").attr("class","node-line-").attr("x1",-f/2).attr("y1",d/2).attr("x2",f/2).attr("y2",d/2),c.attr("transform",`translate(${-o.width/2}, ${-o.height/2})`),s.append(()=>c.node()),xt(t,b),t.calcIntersect=function(v,S){return gt.rect(v,S)},t.intersect=function(v){return gt.rect(t,v)},s}x(uw,"defaultMindmapNode");async function hw(e,t){const n={padding:t.padding??0};return Ym(e,t,n)}x(hw,"mindmapCircle");var aF=[{semanticName:"Process",name:"Rectangle",shortName:"rect",description:"Standard process shape",aliases:["proc","process","rectangle"],internalAliases:["squareRect"],handler:UT},{semanticName:"Event",name:"Rounded Rectangle",shortName:"rounded",description:"Represents an event",aliases:["event"],internalAliases:["roundedRect"],handler:$T},{semanticName:"Terminal Point",name:"Stadium",shortName:"stadium",description:"Terminal point",aliases:["terminal","pill"],handler:HT},{semanticName:"Subprocess",name:"Framed Rectangle",shortName:"fr-rect",description:"Subprocess",aliases:["subprocess","subproc","framed-rectangle","subroutine"],handler:WT},{semanticName:"Database",name:"Cylinder",shortName:"cyl",description:"Database storage",aliases:["db","database","cylinder"],handler:dT},{semanticName:"Start",name:"Circle",shortName:"circle",description:"Starting point",aliases:["circ"],handler:Ym},{semanticName:"Bang",name:"Bang",shortName:"bang",description:"Bang",aliases:["bang"],handler:ow},{semanticName:"Cloud",name:"Cloud",shortName:"cloud",description:"cloud",aliases:["cloud"],handler:cw},{semanticName:"Decision",name:"Diamond",shortName:"diam",description:"Decision-making step",aliases:["decision","diamond","question"],handler:PT},{semanticName:"Prepare Conditional",name:"Hexagon",shortName:"hex",description:"Preparation or condition step",aliases:["hexagon","prepare"],handler:vT},{semanticName:"Data Input/Output",name:"Lean Right",shortName:"lean-r",description:"Represents input or output",aliases:["lean-right","in-out"],internalAliases:["lean_right"],handler:RT},{semanticName:"Data Input/Output",name:"Lean Left",shortName:"lean-l",description:"Represents output or input",aliases:["lean-left","out-in"],internalAliases:["lean_left"],handler:ET},{semanticName:"Priority Action",name:"Trapezoid Base Bottom",shortName:"trap-b",description:"Priority action",aliases:["priority","trapezoid-bottom","trapezoid"],handler:ZT},{semanticName:"Manual Operation",name:"Trapezoid Base Top",shortName:"trap-t",description:"Represents a manual task",aliases:["manual","trapezoid-top","inv-trapezoid"],internalAliases:["inv_trapezoid"],handler:kT},{semanticName:"Stop",name:"Double Circle",shortName:"dbl-circ",description:"Represents a stop point",aliases:["double-circle"],internalAliases:["doublecircle"],handler:gT},{semanticName:"Text Block",name:"Text Block",shortName:"text",description:"Text block",handler:QT},{semanticName:"Card",name:"Notched Rectangle",shortName:"notch-rect",description:"Represents a card",aliases:["card","notched-rectangle"],handler:rT},{semanticName:"Lined/Shaded Process",name:"Lined Rectangle",shortName:"lin-rect",description:"Lined process shape",aliases:["lined-rectangle","lined-process","lin-proc","shaded-process"],handler:zT},{semanticName:"Start",name:"Small Circle",shortName:"sm-circ",description:"Small starting point",aliases:["start","small-circle"],internalAliases:["stateStart"],handler:YT},{semanticName:"Stop",name:"Framed Circle",shortName:"fr-circ",description:"Stop point",aliases:["stop","framed-circle"],internalAliases:["stateEnd"],handler:jT},{semanticName:"Fork/Join",name:"Filled Rectangle",shortName:"fork",description:"Fork or join in process flow",aliases:["join"],internalAliases:["forkJoin"],handler:yT},{semanticName:"Collate",name:"Hourglass",shortName:"hourglass",description:"Represents a collate operation",aliases:["hourglass","collate"],handler:ST},{semanticName:"Comment",name:"Curly Brace",shortName:"brace",description:"Adds a comment",aliases:["comment","brace-l"],handler:oT},{semanticName:"Comment Right",name:"Curly Brace",shortName:"brace-r",description:"Adds a comment",handler:cT},{semanticName:"Comment with braces on both sides",name:"Curly Braces",shortName:"braces",description:"Adds a comment",handler:uT},{semanticName:"Com Link",name:"Lightning Bolt",shortName:"bolt",description:"Communication link",aliases:["com-link","lightning-bolt"],handler:MT},{semanticName:"Document",name:"Document",shortName:"doc",description:"Represents a document",aliases:["doc","document"],handler:ew},{semanticName:"Delay",name:"Half-Rounded Rectangle",shortName:"delay",description:"Represents a delay",aliases:["half-rounded-rectangle"],handler:bT},{semanticName:"Direct Access Storage",name:"Horizontal Cylinder",shortName:"h-cyl",description:"Direct access storage",aliases:["das","horizontal-cylinder"],handler:KT},{semanticName:"Disk Storage",name:"Lined Cylinder",shortName:"lin-cyl",description:"Disk storage",aliases:["disk","lined-cylinder"],handler:LT},{semanticName:"Display",name:"Curved Trapezoid",shortName:"curv-trap",description:"Represents a display",aliases:["curved-trapezoid","display"],handler:hT},{semanticName:"Divided Process",name:"Divided Rectangle",shortName:"div-rect",description:"Divided process shape",aliases:["div-proc","divided-rectangle","divided-process"],handler:fT},{semanticName:"Extract",name:"Triangle",shortName:"tri",description:"Extraction process",aliases:["extract","triangle"],handler:tw},{semanticName:"Internal Storage",name:"Window Pane",shortName:"win-pane",description:"Internal storage",aliases:["internal-storage","window-pane"],handler:nw},{semanticName:"Junction",name:"Filled Circle",shortName:"f-circ",description:"Junction point",aliases:["junction","filled-circle"],handler:pT},{semanticName:"Loop Limit",name:"Trapezoidal Pentagon",shortName:"notch-pent",description:"Loop limit step",aliases:["loop-limit","notched-pentagon"],handler:JT},{semanticName:"Manual File",name:"Flipped Triangle",shortName:"flip-tri",description:"Manual file operation",aliases:["manual-file","flipped-triangle"],handler:mT},{semanticName:"Manual Input",name:"Sloped Rectangle",shortName:"sl-rect",description:"Manual input step",aliases:["manual-input","sloped-rectangle"],handler:qT},{semanticName:"Multi-Document",name:"Stacked Document",shortName:"docs",description:"Multiple documents",aliases:["documents","st-doc","stacked-document"],handler:OT},{semanticName:"Multi-Process",name:"Stacked Rectangle",shortName:"st-rect",description:"Multiple processes",aliases:["procs","processes","stacked-rectangle"],handler:BT},{semanticName:"Stored Data",name:"Bow Tie Rectangle",shortName:"bow-rect",description:"Stored data",aliases:["stored-data","bow-tie-rectangle"],handler:nT},{semanticName:"Summary",name:"Crossed Circle",shortName:"cross-circ",description:"Summary",aliases:["summary","crossed-circle"],handler:lT},{semanticName:"Tagged Document",name:"Tagged Document",shortName:"tag-doc",description:"Tagged document",aliases:["tag-doc","tagged-document"],handler:XT},{semanticName:"Tagged Process",name:"Tagged Rectangle",shortName:"tag-rect",description:"Tagged process",aliases:["tagged-rectangle","tag-proc","tagged-process"],handler:VT},{semanticName:"Paper Tape",name:"Flag",shortName:"flag",description:"Paper tape",aliases:["paper-tape"],handler:iw},{semanticName:"Odd",name:"Odd",shortName:"odd",description:"Odd shape",internalAliases:["rect_left_inv_arrow"],handler:IT},{semanticName:"Lined Document",name:"Lined Document",shortName:"lin-doc",description:"Lined document",aliases:["lined-document"],handler:DT}],sF=x(()=>{const t=[...Object.entries({state:GT,choice:aT,note:NT,rectWithTitle:FT,labelRect:AT,iconSquare:TT,iconCircle:CT,icon:xT,iconRounded:_T,imageSquare:wT,anchor:iT,kanbanItem:lw,mindmapCircle:hw,defaultMindmapNode:uw,classBox:aw,erBox:Wm,requirementBox:sw}),...aF.flatMap(n=>[n.shortName,..."aliases"in n?n.aliases:[],..."internalAliases"in n?n.internalAliases:[]].map(s=>[s,n.handler]))];return Object.fromEntries(t)},"generateShapeMap"),dw=sF();function lF(e){return e in dw}x(lF,"isValidShape");var id=new Map;async function fw(e,t,n){let a,s;t.shape==="rect"&&(t.rx&&t.ry?t.shape="roundedRect":t.shape="squareRect");const o=t.shape?dw[t.shape]:void 0;if(!o)throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);if(t.link){let u;n.config.securityLevel==="sandbox"?u="_top":t.linkTarget&&(u=t.linkTarget||"_blank"),a=e.insert("svg:a").attr("xlink:href",t.link).attr("target",u??null),s=await o(a,t,n)}else s=await o(e,t,n),a=s;return t.tooltip&&s.attr("title",t.tooltip),id.set(t.id,a),t.haveCallback&&a.attr("class",a.attr("class")+" clickable"),a}x(fw,"insertNode");var gq=x((e,t)=>{id.set(t.id,e)},"setNodeElem"),pq=x(()=>{id.clear()},"clear"),mq=x(e=>{const t=id.get(e.id);at.trace("Transforming node",e.diff,e,"translate("+(e.x-e.width/2-5)+", "+e.width/2+")");const n=8,a=e.diff||0;return e.clusterNode?t.attr("transform","translate("+(e.x+a-e.width/2)+", "+(e.y-e.height/2-n)+")"):t.attr("transform","translate("+e.x+", "+e.y+")"),a},"positionNode"),oF=x((e,t,n,a,s,o)=>{t.arrowTypeStart&&dx(e,"start",t.arrowTypeStart,n,a,s,o),t.arrowTypeEnd&&dx(e,"end",t.arrowTypeEnd,n,a,s,o)},"addEdgeMarkers"),cF={arrow_cross:{type:"cross",fill:!1},arrow_point:{type:"point",fill:!0},arrow_barb:{type:"barb",fill:!0},arrow_circle:{type:"circle",fill:!1},aggregation:{type:"aggregation",fill:!1},extension:{type:"extension",fill:!1},composition:{type:"composition",fill:!0},dependency:{type:"dependency",fill:!0},lollipop:{type:"lollipop",fill:!1},only_one:{type:"onlyOne",fill:!1},zero_or_one:{type:"zeroOrOne",fill:!1},one_or_more:{type:"oneOrMore",fill:!1},zero_or_more:{type:"zeroOrMore",fill:!1},requirement_arrow:{type:"requirement_arrow",fill:!1},requirement_contains:{type:"requirement_contains",fill:!1}},dx=x((e,t,n,a,s,o,u)=>{var m;const c=cF[n];if(!c){at.warn(`Unknown arrow type: ${n}`);return}const f=c.type,g=`${s}_${o}-${f}${t==="start"?"Start":"End"}`;if(u&&u.trim()!==""){const b=u.replace(/[^\dA-Za-z]/g,"_"),v=`${g}_${b}`;if(!document.getElementById(v)){const S=document.getElementById(g);if(S){const C=S.cloneNode(!0);C.id=v,C.querySelectorAll("path, circle, line").forEach(T=>{T.setAttribute("stroke",u),c.fill&&T.setAttribute("fill",u)}),(m=S.parentNode)==null||m.appendChild(C)}}e.attr(`marker-${t}`,`url(${a}#${v})`)}else e.attr(`marker-${t}`,`url(${a}#${g})`)},"addEdgeMarker"),Rh=new Map,je=new Map,yq=x(()=>{Rh.clear(),je.clear()},"clear"),bo=x(e=>e?e.reduce((n,a)=>n+";"+a,""):"","getLabelStyles"),uF=x(async(e,t)=>{let n=Ne(Vt().flowchart.htmlLabels);const a=await Gr(e,t.label,{style:bo(t.labelStyle),useHtmlLabels:n,addSvgBackground:!0,isNode:!1});at.info("abc82",t,t.labelType);const s=e.insert("g").attr("class","edgeLabel"),o=s.insert("g").attr("class","label");o.node().appendChild(a);let u=a.getBBox();if(n){const f=a.children[0],d=jt(a);u=f.getBoundingClientRect(),d.attr("width",u.width),d.attr("height",u.height)}o.attr("transform","translate("+-u.width/2+", "+-u.height/2+")"),Rh.set(t.id,s),t.width=u.width,t.height=u.height;let c;if(t.startLabelLeft){const f=await Ca(t.startLabelLeft,bo(t.labelStyle)),d=e.insert("g").attr("class","edgeTerminals"),g=d.insert("g").attr("class","inner");c=g.node().appendChild(f);const m=f.getBBox();g.attr("transform","translate("+-m.width/2+", "+-m.height/2+")"),je.get(t.id)||je.set(t.id,{}),je.get(t.id).startLeft=d,ko(c,t.startLabelLeft)}if(t.startLabelRight){const f=await Ca(t.startLabelRight,bo(t.labelStyle)),d=e.insert("g").attr("class","edgeTerminals"),g=d.insert("g").attr("class","inner");c=d.node().appendChild(f),g.node().appendChild(f);const m=f.getBBox();g.attr("transform","translate("+-m.width/2+", "+-m.height/2+")"),je.get(t.id)||je.set(t.id,{}),je.get(t.id).startRight=d,ko(c,t.startLabelRight)}if(t.endLabelLeft){const f=await Ca(t.endLabelLeft,bo(t.labelStyle)),d=e.insert("g").attr("class","edgeTerminals"),g=d.insert("g").attr("class","inner");c=g.node().appendChild(f);const m=f.getBBox();g.attr("transform","translate("+-m.width/2+", "+-m.height/2+")"),d.node().appendChild(f),je.get(t.id)||je.set(t.id,{}),je.get(t.id).endLeft=d,ko(c,t.endLabelLeft)}if(t.endLabelRight){const f=await Ca(t.endLabelRight,bo(t.labelStyle)),d=e.insert("g").attr("class","edgeTerminals"),g=d.insert("g").attr("class","inner");c=g.node().appendChild(f);const m=f.getBBox();g.attr("transform","translate("+-m.width/2+", "+-m.height/2+")"),d.node().appendChild(f),je.get(t.id)||je.set(t.id,{}),je.get(t.id).endRight=d,ko(c,t.endLabelRight)}return a},"insertEdgeLabel");function ko(e,t){Vt().flowchart.htmlLabels&&e&&(e.style.width=t.length*9+"px",e.style.height="12px")}x(ko,"setTerminalWidth");var hF=x((e,t)=>{at.debug("Moving label abc88 ",e.id,e.label,Rh.get(e.id),t);let n=t.updatedPath?t.updatedPath:t.originalPath;const a=Vt(),{subGraphTitleTotalMargin:s}=_m(a);if(e.label){const o=Rh.get(e.id);let u=e.x,c=e.y;if(n){const f=an.calcLabelPosition(n);at.debug("Moving label "+e.label+" from (",u,",",c,") to (",f.x,",",f.y,") abc88"),t.updatedPath&&(u=f.x,c=f.y)}o.attr("transform",`translate(${u}, ${c+s/2})`)}if(e.startLabelLeft){const o=je.get(e.id).startLeft;let u=e.x,c=e.y;if(n){const f=an.calcTerminalLabelPosition(e.arrowTypeStart?10:0,"start_left",n);u=f.x,c=f.y}o.attr("transform",`translate(${u}, ${c})`)}if(e.startLabelRight){const o=je.get(e.id).startRight;let u=e.x,c=e.y;if(n){const f=an.calcTerminalLabelPosition(e.arrowTypeStart?10:0,"start_right",n);u=f.x,c=f.y}o.attr("transform",`translate(${u}, ${c})`)}if(e.endLabelLeft){const o=je.get(e.id).endLeft;let u=e.x,c=e.y;if(n){const f=an.calcTerminalLabelPosition(e.arrowTypeEnd?10:0,"end_left",n);u=f.x,c=f.y}o.attr("transform",`translate(${u}, ${c})`)}if(e.endLabelRight){const o=je.get(e.id).endRight;let u=e.x,c=e.y;if(n){const f=an.calcTerminalLabelPosition(e.arrowTypeEnd?10:0,"end_right",n);u=f.x,c=f.y}o.attr("transform",`translate(${u}, ${c})`)}},"positionEdgeLabel"),dF=x((e,t)=>{const n=e.x,a=e.y,s=Math.abs(t.x-n),o=Math.abs(t.y-a),u=e.width/2,c=e.height/2;return s>=u||o>=c},"outsideNode"),fF=x((e,t,n)=>{at.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(n)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);const a=e.x,s=e.y,o=Math.abs(a-n.x),u=e.width/2;let c=n.x<t.x?u-o:u+o;const f=e.height/2,d=Math.abs(t.y-n.y),g=Math.abs(t.x-n.x);if(Math.abs(s-t.y)*u>Math.abs(a-t.x)*f){let m=n.y<t.y?t.y-f-s:s-f-t.y;c=g*m/d;const b={x:n.x<t.x?n.x+c:n.x-g+c,y:n.y<t.y?n.y+d-m:n.y-d+m};return c===0&&(b.x=t.x,b.y=t.y),g===0&&(b.x=t.x),d===0&&(b.y=t.y),at.debug(`abc89 top/bottom calc, Q ${d}, q ${m}, R ${g}, r ${c}`,b),b}else{n.x<t.x?c=t.x-u-a:c=a-u-t.x;let m=d*c/g,b=n.x<t.x?n.x+g-c:n.x-g+c,v=n.y<t.y?n.y+m:n.y-m;return at.debug(`sides calc abc89, Q ${d}, q ${m}, R ${g}, r ${c}`,{_x:b,_y:v}),c===0&&(b=t.x,v=t.y),g===0&&(b=t.x),d===0&&(v=t.y),{x:b,y:v}}},"intersection"),fx=x((e,t)=>{at.warn("abc88 cutPathAtIntersect",e,t);let n=[],a=e[0],s=!1;return e.forEach(o=>{if(at.info("abc88 checking point",o,t),!dF(t,o)&&!s){const u=fF(t,a,o);at.debug("abc88 inside",o,a,u),at.debug("abc88 intersection",u,t);let c=!1;n.forEach(f=>{c=c||f.x===u.x&&f.y===u.y}),n.some(f=>f.x===u.x&&f.y===u.y)?at.warn("abc88 no intersect",u,n):n.push(u),s=!0}else at.warn("abc88 outside",o,a),a=o,s||n.push(o)}),at.debug("returning points",n),n},"cutPathAtIntersect");function gw(e){const t=[],n=[];for(let a=1;a<e.length-1;a++){const s=e[a-1],o=e[a],u=e[a+1];(s.x===o.x&&o.y===u.y&&Math.abs(o.x-u.x)>5&&Math.abs(o.y-s.y)>5||s.y===o.y&&o.x===u.x&&Math.abs(o.x-s.x)>5&&Math.abs(o.y-u.y)>5)&&(t.push(o),n.push(a))}return{cornerPoints:t,cornerPointPositions:n}}x(gw,"extractCornerPoints");var gx=x(function(e,t,n){const a=t.x-e.x,s=t.y-e.y,o=Math.sqrt(a*a+s*s),u=n/o;return{x:t.x-u*a,y:t.y-u*s}},"findAdjacentPoint"),gF=x(function(e){const{cornerPointPositions:t}=gw(e),n=[];for(let a=0;a<e.length;a++)if(t.includes(a)){const s=e[a-1],o=e[a+1],u=e[a],c=gx(s,u,5),f=gx(o,u,5),d=f.x-c.x,g=f.y-c.y;n.push(c);const m=Math.sqrt(2)*2;let b={x:u.x,y:u.y};if(Math.abs(o.x-s.x)>10&&Math.abs(o.y-s.y)>=10){at.debug("Corner point fixing",Math.abs(o.x-s.x),Math.abs(o.y-s.y));const v=5;u.x===c.x?b={x:d<0?c.x-v+m:c.x+v-m,y:g<0?c.y-m:c.y+m}:b={x:d<0?c.x-m:c.x+m,y:g<0?c.y-v+m:c.y+v-m}}else at.debug("Corner point skipping fixing",Math.abs(o.x-s.x),Math.abs(o.y-s.y));n.push(b,f)}else n.push(e[a]);return n},"fixCorners"),pF=x(function(e,t,n,a,s,o,u){var X;const{handDrawnSeed:c}=Vt();let f=t.points,d=!1;const g=s;var m=o;const b=[];for(const st in t.cssCompiledStyles)jC(st)||b.push(t.cssCompiledStyles[st]);m.intersect&&g.intersect&&(f=f.slice(1,t.points.length-1),f.unshift(g.intersect(f[0])),at.debug("Last point APA12",t.start,"-->",t.end,f[f.length-1],m,m.intersect(f[f.length-1])),f.push(m.intersect(f[f.length-1]))),t.toCluster&&(at.info("to cluster abc88",n.get(t.toCluster)),f=fx(t.points,n.get(t.toCluster).node),d=!0),t.fromCluster&&(at.debug("from cluster abc88",n.get(t.fromCluster),JSON.stringify(f,null,2)),f=fx(f.reverse(),n.get(t.fromCluster).node).reverse(),d=!0);let v=f.filter(st=>!Number.isNaN(st.y));v=gF(v);let S=$u;switch(S=sh,t.curve){case"linear":S=sh;break;case"basis":S=$u;break;case"cardinal":S=X2;break;case"bumpX":S=G2;break;case"bumpY":S=j2;break;case"catmullRom":S=K2;break;case"monotoneX":S=n1;break;case"monotoneY":S=r1;break;case"natural":S=s1;break;case"step":S=l1;break;case"stepAfter":S=c1;break;case"stepBefore":S=o1;break;default:S=$u}const{x:C,y:w}=gO(t),T=KB().x(C).y(w).curve(S);let k;switch(t.thickness){case"normal":k="edge-thickness-normal";break;case"thick":k="edge-thickness-thick";break;case"invisible":k="edge-thickness-invisible";break;default:k="edge-thickness-normal"}switch(t.pattern){case"solid":k+=" edge-pattern-solid";break;case"dotted":k+=" edge-pattern-dotted";break;case"dashed":k+=" edge-pattern-dashed";break;default:k+=" edge-pattern-solid"}let E,O=T(v);const D=Array.isArray(t.style)?t.style:t.style?[t.style]:[];let R=D.find(st=>st==null?void 0:st.startsWith("stroke:"));if(t.look==="handDrawn"){const st=vt.svg(e);Object.assign([],v);const rt=st.path(O,{roughness:.3,seed:c});k+=" transition",E=jt(rt).select("path").attr("id",t.id).attr("class"," "+k+(t.classes?" "+t.classes:"")).attr("style",D?D.reduce((j,M)=>j+";"+M,""):"");let W=E.attr("d");E.attr("d",W),e.node().appendChild(E.node())}else{const st=b.join(";"),rt=D?D.reduce((M,F)=>M+F+";",""):"";let W="";t.animate&&(W=" edge-animation-fast"),t.animation&&(W=" edge-animation-"+t.animation);const j=st?st+";"+rt+";":rt;E=e.append("path").attr("d",O).attr("id",t.id).attr("class"," "+k+(t.classes?" "+t.classes:"")+(W??"")).attr("style",j),R=(X=j.match(/stroke:([^;]+)/))==null?void 0:X[1]}let N="";(Vt().flowchart.arrowMarkerAbsolute||Vt().state.arrowMarkerAbsolute)&&(N=d2(!0)),at.info("arrowTypeStart",t.arrowTypeStart),at.info("arrowTypeEnd",t.arrowTypeEnd),oF(E,t,N,u,a,R);const K=Math.floor(f.length/2),it=f[K];an.isLabelCoordinateInPath(it,E.attr("d"))||(d=!0);let nt={};return d&&(nt.updatedPath=f),nt.originalPath=t.points,nt},"insertEdge"),mF=x((e,t,n,a)=>{t.forEach(s=>{DF[s](e,n,a)})},"insertMarkers"),yF=x((e,t,n)=>{at.trace("Making markers for ",n),e.append("defs").append("marker").attr("id",n+"_"+t+"-extensionStart").attr("class","marker extension "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),e.append("defs").append("marker").attr("id",n+"_"+t+"-extensionEnd").attr("class","marker extension "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},"extension"),bF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-compositionStart").attr("class","marker composition "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id",n+"_"+t+"-compositionEnd").attr("class","marker composition "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"composition"),vF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-aggregationStart").attr("class","marker aggregation "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id",n+"_"+t+"-aggregationEnd").attr("class","marker aggregation "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"aggregation"),SF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-dependencyStart").attr("class","marker dependency "+t).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id",n+"_"+t+"-dependencyEnd").attr("class","marker dependency "+t).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},"dependency"),xF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-lollipopStart").attr("class","marker lollipop "+t).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),e.append("defs").append("marker").attr("id",n+"_"+t+"-lollipopEnd").attr("class","marker lollipop "+t).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},"lollipop"),CF=x((e,t,n)=>{e.append("marker").attr("id",n+"_"+t+"-pointEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",8).attr("markerHeight",8).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),e.append("marker").attr("id",n+"_"+t+"-pointStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",8).attr("markerHeight",8).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"point"),_F=x((e,t,n)=>{e.append("marker").attr("id",n+"_"+t+"-circleEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),e.append("marker").attr("id",n+"_"+t+"-circleStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"circle"),TF=x((e,t,n)=>{e.append("marker").attr("id",n+"_"+t+"-crossEnd").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),e.append("marker").attr("id",n+"_"+t+"-crossStart").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},"cross"),wF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","userSpaceOnUse").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"barb"),kF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-onlyOneStart").attr("class","marker onlyOne "+t).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("d","M9,0 L9,18 M15,0 L15,18"),e.append("defs").append("marker").attr("id",n+"_"+t+"-onlyOneEnd").attr("class","marker onlyOne "+t).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("d","M3,0 L3,18 M9,0 L9,18")},"only_one"),AF=x((e,t,n)=>{const a=e.append("defs").append("marker").attr("id",n+"_"+t+"-zeroOrOneStart").attr("class","marker zeroOrOne "+t).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto");a.append("circle").attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),a.append("path").attr("d","M9,0 L9,18");const s=e.append("defs").append("marker").attr("id",n+"_"+t+"-zeroOrOneEnd").attr("class","marker zeroOrOne "+t).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto");s.append("circle").attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),s.append("path").attr("d","M21,0 L21,18")},"zero_or_one"),EF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-oneOrMoreStart").attr("class","marker oneOrMore "+t).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),e.append("defs").append("marker").attr("id",n+"_"+t+"-oneOrMoreEnd").attr("class","marker oneOrMore "+t).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18")},"one_or_more"),RF=x((e,t,n)=>{const a=e.append("defs").append("marker").attr("id",n+"_"+t+"-zeroOrMoreStart").attr("class","marker zeroOrMore "+t).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto");a.append("circle").attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),a.append("path").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18");const s=e.append("defs").append("marker").attr("id",n+"_"+t+"-zeroOrMoreEnd").attr("class","marker zeroOrMore "+t).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto");s.append("circle").attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),s.append("path").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")},"zero_or_more"),MF=x((e,t,n)=>{e.append("defs").append("marker").attr("id",n+"_"+t+"-requirement_arrowEnd").attr("refX",20).attr("refY",10).attr("markerWidth",20).attr("markerHeight",20).attr("orient","auto").append("path").attr("d",`M0,0
      L20,10
      M20,10
      L0,20`)},"requirement_arrow"),LF=x((e,t,n)=>{const a=e.append("defs").append("marker").attr("id",n+"_"+t+"-requirement_containsStart").attr("refX",0).attr("refY",10).attr("markerWidth",20).attr("markerHeight",20).attr("orient","auto").append("g");a.append("circle").attr("cx",10).attr("cy",10).attr("r",9).attr("fill","none"),a.append("line").attr("x1",1).attr("x2",19).attr("y1",10).attr("y2",10),a.append("line").attr("y1",1).attr("y2",19).attr("x1",10).attr("x2",10)},"requirement_contains"),DF={extension:yF,composition:bF,aggregation:vF,dependency:SF,lollipop:xF,point:CF,circle:_F,cross:TF,barb:wF,only_one:kF,zero_or_one:AF,one_or_more:EF,zero_or_more:RF,requirement_arrow:MF,requirement_contains:LF},BF=mF,OF={common:Vs,getConfig:Je,insertCluster:HI,insertEdge:pF,insertEdgeLabel:uF,insertMarkers:BF,insertNode:fw,interpolateToCurve:Em,labelHelper:Rt,log:at,positionEdgeLabel:hF},jo={},pw=x(e=>{for(const t of e)jo[t.name]=t},"registerLayoutLoaders"),NF=x(()=>{pw([{name:"dagre",loader:x(async()=>await Qt(()=>import("./dagre-5GWH7T2D-DtvGn9Bb.js"),__vite__mapDeps([0,1,2,3,4,5])),"loader")},{name:"cose-bilkent",loader:x(async()=>await Qt(()=>import("./cose-bilkent-S5V4N54A-BWw8-DYU.js"),__vite__mapDeps([6,7])),"loader")}])},"registerDefaultLayoutLoaders");NF();var bq=x(async(e,t)=>{if(!(e.layoutAlgorithm in jo))throw new Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);const n=jo[e.layoutAlgorithm];return(await n.loader()).render(e,t,OF,{algorithm:n.algorithm})},"render"),vq=x((e="",{fallback:t="dagre"}={})=>{if(e in jo)return e;if(t in jo)return at.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`),t;throw new Error(`Both layout algorithms ${e} and ${t} are not registered.`)},"getRegisteredLayoutAlgorithm"),mw="comm",yw="rule",bw="decl",PF="@import",IF="@namespace",FF="@keyframes",$F="@layer",vw=Math.abs,Vm=String.fromCharCode;function Sw(e){return e.trim()}function ju(e,t,n){return e.replace(t,n)}function zF(e,t,n){return e.indexOf(t,n)}function Es(e,t){return e.charCodeAt(t)|0}function Gs(e,t,n){return e.slice(t,n)}function Sn(e){return e.length}function qF(e){return e.length}function Ru(e,t){return t.push(e),e}var nd=1,js=1,xw=0,Xi=0,ke=0,Js="";function Xm(e,t,n,a,s,o,u,c){return{value:e,root:t,parent:n,type:a,props:s,children:o,line:nd,column:js,length:u,return:"",siblings:c}}function UF(){return ke}function HF(){return ke=Xi>0?Es(Js,--Xi):0,js--,ke===10&&(js=1,nd--),ke}function ln(){return ke=Xi<xw?Es(Js,Xi++):0,js++,ke===10&&(js=1,nd++),ke}function Ir(){return Es(Js,Xi)}function Yu(){return Xi}function rd(e,t){return Gs(Js,e,t)}function Yo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function GF(e){return nd=js=1,xw=Sn(Js=e),Xi=0,[]}function jF(e){return Js="",e}function qg(e){return Sw(rd(Xi-1,Pp(e===91?e+2:e===40?e+1:e)))}function YF(e){for(;(ke=Ir())&&ke<33;)ln();return Yo(e)>2||Yo(ke)>3?"":" "}function WF(e,t){for(;--t&&ln()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return rd(e,Yu()+(t<6&&Ir()==32&&ln()==32))}function Pp(e){for(;ln();)switch(ke){case e:return Xi;case 34:case 39:e!==34&&e!==39&&Pp(ke);break;case 40:e===41&&Pp(e);break;case 92:ln();break}return Xi}function VF(e,t){for(;ln()&&e+ke!==57;)if(e+ke===84&&Ir()===47)break;return"/*"+rd(t,Xi-1)+"*"+Vm(e===47?e:ln())}function XF(e){for(;!Yo(Ir());)ln();return rd(e,Xi)}function QF(e){return jF(Wu("",null,null,null,[""],e=GF(e),0,[0],e))}function Wu(e,t,n,a,s,o,u,c,f){for(var d=0,g=0,m=u,b=0,v=0,S=0,C=1,w=1,T=1,k=0,E="",O=s,D=o,R=a,N=E;w;)switch(S=k,k=ln()){case 40:if(S!=108&&Es(N,m-1)==58){zF(N+=ju(qg(k),"&","&\f"),"&\f",vw(d?c[d-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:N+=qg(k);break;case 9:case 10:case 13:case 32:N+=YF(S);break;case 92:N+=WF(Yu()-1,7);continue;case 47:switch(Ir()){case 42:case 47:Ru(KF(VF(ln(),Yu()),t,n,f),f),(Yo(S||1)==5||Yo(Ir()||1)==5)&&Sn(N)&&Gs(N,-1,void 0)!==" "&&(N+=" ");break;default:N+="/"}break;case 123*C:c[d++]=Sn(N)*T;case 125*C:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+g:T==-1&&(N=ju(N,/\f/g,"")),v>0&&(Sn(N)-m||C===0&&S===47)&&Ru(v>32?mx(N+";",a,n,m-1,f):mx(ju(N," ","")+";",a,n,m-2,f),f);break;case 59:N+=";";default:if(Ru(R=px(N,t,n,d,g,s,c,E,O=[],D=[],m,o),o),k===123)if(g===0)Wu(N,t,R,R,O,o,m,c,D);else{switch(b){case 99:if(Es(N,3)===110)break;case 108:if(Es(N,2)===97)break;default:g=0;case 100:case 109:case 115:}g?Wu(e,R,R,a&&Ru(px(e,R,R,0,0,s,c,E,s,O=[],m,D),D),s,D,m,c,a?O:D):Wu(N,R,R,R,[""],D,0,c,D)}}d=g=v=0,C=T=1,E=N="",m=u;break;case 58:m=1+Sn(N),v=S;default:if(C<1){if(k==123)--C;else if(k==125&&C++==0&&HF()==125)continue}switch(N+=Vm(k),k*C){case 38:T=g>0?1:(N+="\f",-1);break;case 44:c[d++]=(Sn(N)-1)*T,T=1;break;case 64:Ir()===45&&(N+=qg(ln())),b=Ir(),g=m=Sn(E=N+=XF(Yu())),k++;break;case 45:S===45&&Sn(N)==2&&(C=0)}}return o}function px(e,t,n,a,s,o,u,c,f,d,g,m){for(var b=s-1,v=s===0?o:[""],S=qF(v),C=0,w=0,T=0;C<a;++C)for(var k=0,E=Gs(e,b+1,b=vw(w=u[C])),O=e;k<S;++k)(O=Sw(w>0?v[k]+" "+E:ju(E,/&\f/g,v[k])))&&(f[T++]=O);return Xm(e,t,n,s===0?yw:c,f,d,g,m)}function KF(e,t,n,a){return Xm(e,t,n,mw,Vm(UF()),Gs(e,2,-2),0,a)}function mx(e,t,n,a,s){return Xm(e,t,n,bw,Gs(e,0,a),Gs(e,a+1,-1),a,s)}function Ip(e,t){for(var n="",a=0;a<e.length;a++)n+=t(e[a],a,e,t)||"";return n}function ZF(e,t,n,a){switch(e.type){case $F:if(e.children.length)break;case PF:case IF:case bw:return e.return=e.return||e.value;case mw:return"";case FF:return e.return=e.value+"{"+Ip(e.children,a)+"}";case yw:if(!Sn(e.value=e.props.join(",")))return""}return Sn(n=Ip(e.children,a))?e.return=e.value+"{"+n+"}":""}var JF=XC(Object.keys,Object),t6=Object.prototype,e6=t6.hasOwnProperty;function i6(e){if(!Wh(e))return JF(e);var t=[];for(var n in Object(e))e6.call(e,n)&&n!="constructor"&&t.push(n);return t}var Fp=Na(En,"DataView"),$p=Na(En,"Promise"),zp=Na(En,"Set"),qp=Na(En,"WeakMap"),yx="[object Map]",n6="[object Object]",bx="[object Promise]",vx="[object Set]",Sx="[object WeakMap]",xx="[object DataView]",r6=Oa(Fp),a6=Oa(Ho),s6=Oa($p),l6=Oa(zp),o6=Oa(qp),ya=Qs;(Fp&&ya(new Fp(new ArrayBuffer(1)))!=xx||Ho&&ya(new Ho)!=yx||$p&&ya($p.resolve())!=bx||zp&&ya(new zp)!=vx||qp&&ya(new qp)!=Sx)&&(ya=function(e){var t=Qs(e),n=t==n6?e.constructor:void 0,a=n?Oa(n):"";if(a)switch(a){case r6:return xx;case a6:return yx;case s6:return bx;case l6:return vx;case o6:return Sx}return t});var c6="[object Map]",u6="[object Set]",h6=Object.prototype,d6=h6.hasOwnProperty;function Cx(e){if(e==null)return!0;if(Vh(e)&&(vh(e)||typeof e=="string"||typeof e.splice=="function"||km(e)||Am(e)||bh(e)))return!e.length;var t=ya(e);if(t==c6||t==u6)return!e.size;if(Wh(e))return!i6(e).length;for(var n in e)if(d6.call(e,n))return!1;return!0}var Cw="c4",f6=x(e=>/^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e),"detector"),g6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./c4Diagram-FPNF74CW-CR_3lcqk.js");return{diagram:t}},__vite__mapDeps([8,9]));return{id:Cw,diagram:e}},"loader"),p6={id:Cw,detector:f6,loader:g6},m6=p6,_w="flowchart",y6=x((e,t)=>{var n,a;return((n=t==null?void 0:t.flowchart)==null?void 0:n.defaultRenderer)==="dagre-wrapper"||((a=t==null?void 0:t.flowchart)==null?void 0:a.defaultRenderer)==="elk"?!1:/^\s*graph/.test(e)},"detector"),b6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./flowDiagram-PVAE7QVJ-BauqebPJ.js");return{diagram:t}},__vite__mapDeps([10,11,12,13,14]));return{id:_w,diagram:e}},"loader"),v6={id:_w,detector:y6,loader:b6},S6=v6,Tw="flowchart-v2",x6=x((e,t)=>{var n,a,s;return((n=t==null?void 0:t.flowchart)==null?void 0:n.defaultRenderer)==="dagre-d3"?!1:(((a=t==null?void 0:t.flowchart)==null?void 0:a.defaultRenderer)==="elk"&&(t.layout="elk"),/^\s*graph/.test(e)&&((s=t==null?void 0:t.flowchart)==null?void 0:s.defaultRenderer)==="dagre-wrapper"?!0:/^\s*flowchart/.test(e))},"detector"),C6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./flowDiagram-PVAE7QVJ-BauqebPJ.js");return{diagram:t}},__vite__mapDeps([10,11,12,13,14]));return{id:Tw,diagram:e}},"loader"),_6={id:Tw,detector:x6,loader:C6},T6=_6,ww="er",w6=x(e=>/^\s*erDiagram/.test(e),"detector"),k6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./erDiagram-AWTI2OKA-i2YuDA1h.js");return{diagram:t}},__vite__mapDeps([15,12,13,14]));return{id:ww,diagram:e}},"loader"),A6={id:ww,detector:w6,loader:k6},E6=A6,kw="gitGraph",R6=x(e=>/^\s*gitGraph/.test(e),"detector"),M6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./gitGraphDiagram-NY62KEGX-BfTAKUcI.js");return{diagram:t}},__vite__mapDeps([16,17,18,19,2,4,5]));return{id:kw,diagram:e}},"loader"),L6={id:kw,detector:R6,loader:M6},D6=L6,Aw="gantt",B6=x(e=>/^\s*gantt/.test(e),"detector"),O6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./ganttDiagram-OWAHRB6G-CjQgk4aa.js");return{diagram:t}},__vite__mapDeps([20,21,22,23]));return{id:Aw,diagram:e}},"loader"),N6={id:Aw,detector:B6,loader:O6},P6=N6,Ew="info",I6=x(e=>/^\s*info/.test(e),"detector"),F6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./infoDiagram-STP46IZ2-bDNOsfvf.js");return{diagram:t}},__vite__mapDeps([24,19,2,4,5]));return{id:Ew,diagram:e}},"loader"),$6={id:Ew,detector:I6,loader:F6},Rw="pie",z6=x(e=>/^\s*pie/.test(e),"detector"),q6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./pieDiagram-ADFJNKIX-_0r1IC0h.js");return{diagram:t}},__vite__mapDeps([25,17,19,2,4,5,26,27,22]));return{id:Rw,diagram:e}},"loader"),U6={id:Rw,detector:z6,loader:q6},Mw="quadrantChart",H6=x(e=>/^\s*quadrantChart/.test(e),"detector"),G6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./quadrantDiagram-LMRXKWRM-CE1Gx_Tf.js");return{diagram:t}},__vite__mapDeps([28,21,22,23]));return{id:Mw,diagram:e}},"loader"),j6={id:Mw,detector:H6,loader:G6},Y6=j6,Lw="xychart",W6=x(e=>/^\s*xychart(-beta)?/.test(e),"detector"),V6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./xychartDiagram-6GGTOJPD-DhkWbIb2.js");return{diagram:t}},__vite__mapDeps([29,22,27,21,23]));return{id:Lw,diagram:e}},"loader"),X6={id:Lw,detector:W6,loader:V6},Q6=X6,Dw="requirement",K6=x(e=>/^\s*requirement(Diagram)?/.test(e),"detector"),Z6=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./requirementDiagram-4UW4RH46-1s6zsY4r.js");return{diagram:t}},__vite__mapDeps([30,12,13]));return{id:Dw,diagram:e}},"loader"),J6={id:Dw,detector:K6,loader:Z6},t$=J6,Bw="sequence",e$=x(e=>/^\s*sequenceDiagram/.test(e),"detector"),i$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./sequenceDiagram-C3RYC4MD-9P1WBK-y.js");return{diagram:t}},__vite__mapDeps([31,9,18]));return{id:Bw,diagram:e}},"loader"),n$={id:Bw,detector:e$,loader:i$},r$=n$,Ow="class",a$=x((e,t)=>{var n;return((n=t==null?void 0:t.class)==null?void 0:n.defaultRenderer)==="dagre-wrapper"?!1:/^\s*classDiagram/.test(e)},"detector"),s$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./classDiagram-KNZD7YFC-CEHxpXQW.js");return{diagram:t}},__vite__mapDeps([32,33,11,12,13]));return{id:Ow,diagram:e}},"loader"),l$={id:Ow,detector:a$,loader:s$},o$=l$,Nw="classDiagram",c$=x((e,t)=>{var n;return/^\s*classDiagram/.test(e)&&((n=t==null?void 0:t.class)==null?void 0:n.defaultRenderer)==="dagre-wrapper"?!0:/^\s*classDiagram-v2/.test(e)},"detector"),u$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./classDiagram-v2-RKCZMP56-CEHxpXQW.js");return{diagram:t}},__vite__mapDeps([34,33,11,12,13]));return{id:Nw,diagram:e}},"loader"),h$={id:Nw,detector:c$,loader:u$},d$=h$,Pw="state",f$=x((e,t)=>{var n;return((n=t==null?void 0:t.state)==null?void 0:n.defaultRenderer)==="dagre-wrapper"?!1:/^\s*stateDiagram/.test(e)},"detector"),g$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./stateDiagram-KXAO66HF-Bciwszpy.js");return{diagram:t}},__vite__mapDeps([35,36,12,13,1,2,3,4]));return{id:Pw,diagram:e}},"loader"),p$={id:Pw,detector:f$,loader:g$},m$=p$,Iw="stateDiagram",y$=x((e,t)=>{var n;return!!(/^\s*stateDiagram-v2/.test(e)||/^\s*stateDiagram/.test(e)&&((n=t==null?void 0:t.state)==null?void 0:n.defaultRenderer)==="dagre-wrapper")},"detector"),b$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./stateDiagram-v2-UMBNRL4Z-CiqsjwbD.js");return{diagram:t}},__vite__mapDeps([37,36,12,13]));return{id:Iw,diagram:e}},"loader"),v$={id:Iw,detector:y$,loader:b$},S$=v$,Fw="journey",x$=x(e=>/^\s*journey/.test(e),"detector"),C$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./journeyDiagram-BIP6EPQ6-BsUSxjM8.js");return{diagram:t}},__vite__mapDeps([38,9,11,26]));return{id:Fw,diagram:e}},"loader"),_$={id:Fw,detector:x$,loader:C$},T$=_$,w$=x((e,t,n)=>{at.debug(`rendering svg for syntax error
`);const a=s4(t),s=a.append("g");a.attr("viewBox","0 0 2412 512"),f2(a,100,512,!0),s.append("path").attr("class","error-icon").attr("d","m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"),s.append("path").attr("class","error-icon").attr("d","m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"),s.append("path").attr("class","error-icon").attr("d","m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"),s.append("path").attr("class","error-icon").attr("d","m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"),s.append("path").attr("class","error-icon").attr("d","m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"),s.append("path").attr("class","error-icon").attr("d","m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"),s.append("text").attr("class","error-text").attr("x",1440).attr("y",250).attr("font-size","150px").style("text-anchor","middle").text("Syntax error in text"),s.append("text").attr("class","error-text").attr("x",1250).attr("y",400).attr("font-size","100px").style("text-anchor","middle").text(`mermaid version ${n}`)},"draw"),$w={draw:w$},k$=$w,A$={db:{},renderer:$w,parser:{parse:x(()=>{},"parse")}},E$=A$,zw="flowchart-elk",R$=x((e,t={})=>{var n;return/^\s*flowchart-elk/.test(e)||/^\s*(flowchart|graph)/.test(e)&&((n=t==null?void 0:t.flowchart)==null?void 0:n.defaultRenderer)==="elk"?(t.layout="elk",!0):!1},"detector"),M$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./flowDiagram-PVAE7QVJ-BauqebPJ.js");return{diagram:t}},__vite__mapDeps([10,11,12,13,14]));return{id:zw,diagram:e}},"loader"),L$={id:zw,detector:R$,loader:M$},D$=L$,qw="timeline",B$=x(e=>/^\s*timeline/.test(e),"detector"),O$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./timeline-definition-XQNQX7LJ-BX0P0sOX.js");return{diagram:t}},__vite__mapDeps([39,26]));return{id:qw,diagram:e}},"loader"),N$={id:qw,detector:B$,loader:O$},P$=N$,Uw="mindmap",I$=x(e=>/^\s*mindmap/.test(e),"detector"),F$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./mindmap-definition-Q6HEUPPD-e-uq1l0X.js");return{diagram:t}},__vite__mapDeps([40,12,13]));return{id:Uw,diagram:e}},"loader"),$$={id:Uw,detector:I$,loader:F$},z$=$$,Hw="kanban",q$=x(e=>/^\s*kanban/.test(e),"detector"),U$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./kanban-definition-6OIFK2YF-D7iKZbxX.js");return{diagram:t}},__vite__mapDeps([41,11]));return{id:Hw,diagram:e}},"loader"),H$={id:Hw,detector:q$,loader:U$},G$=H$,Gw="sankey",j$=x(e=>/^\s*sankey(-beta)?/.test(e),"detector"),Y$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./sankeyDiagram-GR3RE2ED-D7C0qLaS.js");return{diagram:t}},__vite__mapDeps([42,27,22]));return{id:Gw,diagram:e}},"loader"),W$={id:Gw,detector:j$,loader:Y$},V$=W$,jw="packet",X$=x(e=>/^\s*packet(-beta)?/.test(e),"detector"),Q$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./diagram-S2PKOQOG-B-m57FSm.js");return{diagram:t}},__vite__mapDeps([43,17,19,2,4,5]));return{id:jw,diagram:e}},"loader"),K$={id:jw,detector:X$,loader:Q$},Yw="radar",Z$=x(e=>/^\s*radar-beta/.test(e),"detector"),J$=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./diagram-QEK2KX5R-BI0xpj8J.js");return{diagram:t}},__vite__mapDeps([44,17,19,2,4,5]));return{id:Yw,diagram:e}},"loader"),tz={id:Yw,detector:Z$,loader:J$},Ww="block",ez=x(e=>/^\s*block(-beta)?/.test(e),"detector"),iz=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./blockDiagram-QIGZ2CNN-CKuQFEGt.js");return{diagram:t}},__vite__mapDeps([45,11,5,2,1,14]));return{id:Ww,diagram:e}},"loader"),nz={id:Ww,detector:ez,loader:iz},rz=nz,Vw="architecture",az=x(e=>/^\s*architecture/.test(e),"detector"),sz=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./architectureDiagram-W76B3OCA-D2B8i-Cg.js");return{diagram:t}},__vite__mapDeps([46,17,19,2,4,5,7]));return{id:Vw,diagram:e}},"loader"),lz={id:Vw,detector:az,loader:sz},oz=lz,Xw="treemap",cz=x(e=>/^\s*treemap/.test(e),"detector"),uz=x(async()=>{const{diagram:e}=await Qt(async()=>{const{diagram:t}=await import("./diagram-N5W7TBWH-Toiq5Oln.js");return{diagram:t}},__vite__mapDeps([47,13,17,19,2,4,5,23,27,22]));return{id:Xw,diagram:e}},"loader"),hz={id:Xw,detector:cz,loader:uz},_x=!1,ad=x(()=>{_x||(_x=!0,Ju("error",E$,e=>e.toLowerCase().trim()==="error"),Ju("---",{db:{clear:x(()=>{},"clear")},styles:{},renderer:{draw:x(()=>{},"draw")},parser:{parse:x(()=>{throw new Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks")},"parse")},init:x(()=>null,"init")},e=>e.toLowerCase().trimStart().startsWith("---")),Xg(D$,z$,oz),Xg(m6,G$,d$,o$,E6,P6,$6,U6,t$,r$,T6,S6,P$,D6,S$,m$,T$,Y6,V$,K$,Q6,rz,tz,hz))},"addDiagrams"),dz=x(async()=>{at.debug("Loading registered diagrams");const t=(await Promise.allSettled(Object.entries(wa).map(async([n,{detector:a,loader:s}])=>{if(s)try{Jg(n)}catch{try{const{diagram:o,id:u}=await s();Ju(u,o,a)}catch(o){throw at.error(`Failed to load external diagram with key ${n}. Removing from detectors.`),delete wa[n],o}}}))).filter(n=>n.status==="rejected");if(t.length>0){at.error(`Failed to load ${t.length} external diagrams`);for(const n of t)at.error(n);throw new Error(`Failed to load ${t.length} external diagrams`)}},"loadRegisteredDiagrams"),fz="graphics-document document";function Qw(e,t){e.attr("role",fz),t!==""&&e.attr("aria-roledescription",t)}x(Qw,"setA11yDiagramInfo");function Kw(e,t,n,a){if(e.insert!==void 0){if(n){const s=`chart-desc-${a}`;e.attr("aria-describedby",s),e.insert("desc",":first-child").attr("id",s).text(n)}if(t){const s=`chart-title-${a}`;e.attr("aria-labelledby",s),e.insert("title",":first-child").attr("id",s).text(t)}}}x(Kw,"addSVGa11yTitleDescription");var Ta,Up=(Ta=class{constructor(t,n,a,s,o){this.type=t,this.text=n,this.db=a,this.parser=s,this.renderer=o}static async fromText(t,n={}){var d,g;const a=Je(),s=Kp(t,a);t=dP(t)+`
`;try{Jg(s)}catch{const m=IM(s);if(!m)throw new t2(`Diagram ${s} not found.`);const{id:b,diagram:v}=await m();Ju(b,v)}const{db:o,parser:u,renderer:c,init:f}=Jg(s);return u.parser&&(u.parser.yy=o),(d=o.clear)==null||d.call(o),f==null||f(a),n.title&&((g=o.setDiagramTitle)==null||g.call(o,n.title)),await u.parse(t),new Ta(s,t,o,u,c)}async render(t,n){await this.renderer.draw(this.text,t,n,this)}getParser(){return this.parser}getType(){return this.type}},x(Ta,"Diagram"),Ta),Tx=[],gz=x(()=>{Tx.forEach(e=>{e()}),Tx=[]},"attachFunctions"),pz=x(e=>e.replace(/^\s*%%(?!{)[^\n]+\n?/gm,"").trimStart(),"cleanupComments");function Zw(e){const t=e.match(Jx);if(!t)return{text:e,metadata:{}};let n=fO(t[1],{schema:dO})??{};n=typeof n=="object"&&!Array.isArray(n)?n:{};const a={};return n.displayMode&&(a.displayMode=n.displayMode.toString()),n.title&&(a.title=n.title.toString()),n.config&&(a.config=n.config),{text:e.slice(t[0].length),metadata:a}}x(Zw,"extractFrontMatter");var mz=x(e=>e.replace(/\r\n?/g,`
`).replace(/<(\w+)([^>]*)>/g,(t,n,a)=>"<"+n+a.replace(/="([^"]*)"/g,"='$1'")+">"),"cleanupText"),yz=x(e=>{const{text:t,metadata:n}=Zw(e),{displayMode:a,title:s,config:o={}}=n;return a&&(o.gantt||(o.gantt={}),o.gantt.displayMode=a),{title:s,config:o,text:t}},"processFrontmatter"),bz=x(e=>{const t=an.detectInit(e)??{},n=an.detectDirective(e,"wrap");return Array.isArray(n)?t.wrap=n.some(({type:a})=>a==="wrap"):(n==null?void 0:n.type)==="wrap"&&(t.wrap=!0),{text:JN(e),directive:t}},"processDirectives");function Qm(e){const t=mz(e),n=yz(t),a=bz(n.text),s=Bm(n.config,a.directive);return e=pz(a.text),{code:e,title:n.title,config:s}}x(Qm,"preprocessDiagram");function Jw(e){const t=new TextEncoder().encode(e),n=Array.from(t,a=>String.fromCodePoint(a)).join("");return btoa(n)}x(Jw,"toBase64");var vz=5e4,Sz="graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa",xz="sandbox",Cz="loose",_z="http://www.w3.org/2000/svg",Tz="http://www.w3.org/1999/xlink",wz="http://www.w3.org/1999/xhtml",kz="100%",Az="100%",Ez="border:0;margin:0;",Rz="margin:0",Mz="allow-top-navigation-by-user-activation allow-popups",Lz='The "iframe" tag is not supported by your browser.',Dz=["foreignobject"],Bz=["dominant-baseline"];function Km(e){const t=Qm(e);return Ku(),JM(t.config??{}),t}x(Km,"processAndSetConfigs");async function tk(e,t){ad();try{const{code:n,config:a}=Km(e);return{diagramType:(await ik(n)).type,config:a}}catch(n){if(t!=null&&t.suppressErrors)return!1;throw n}}x(tk,"parse");var wx=x((e,t,n=[])=>`
.${e} ${t} { ${n.join(" !important; ")} !important; }`,"cssImportantStyles"),Oz=x((e,t=new Map)=>{var a;let n="";if(e.themeCSS!==void 0&&(n+=`
${e.themeCSS}`),e.fontFamily!==void 0&&(n+=`
:root { --mermaid-font-family: ${e.fontFamily}}`),e.altFontFamily!==void 0&&(n+=`
:root { --mermaid-alt-font-family: ${e.altFontFamily}}`),t instanceof Map){const c=e.htmlLabels??((a=e.flowchart)==null?void 0:a.htmlLabels)?["> *","span"]:["rect","polygon","ellipse","circle","path"];t.forEach(f=>{Cx(f.styles)||c.forEach(d=>{n+=wx(f.id,d,f.styles)}),Cx(f.textStyles)||(n+=wx(f.id,"tspan",((f==null?void 0:f.textStyles)||[]).map(d=>d.replace("color","fill"))))})}return n},"createCssStyles"),Nz=x((e,t,n,a)=>{const s=Oz(e,n),o=b3(t,s,e.themeVariables);return Ip(QF(`${a}{${o}}`),ZF)},"createUserStyles"),Pz=x((e="",t,n)=>{let a=e;return!n&&!t&&(a=a.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g,'marker-end="url(#')),a=Pa(a),a=a.replace(/<br>/g,"<br/>"),a},"cleanUpSvgCode"),Iz=x((e="",t)=>{var s,o;const n=(o=(s=t==null?void 0:t.viewBox)==null?void 0:s.baseVal)!=null&&o.height?t.viewBox.baseVal.height+"px":Az,a=Jw(`<body style="${Rz}">${e}</body>`);return`<iframe style="width:${kz};height:${n};${Ez}" src="data:text/html;charset=UTF-8;base64,${a}" sandbox="${Mz}">
  ${Lz}
</iframe>`},"putIntoIFrame"),kx=x((e,t,n,a,s)=>{const o=e.append("div");o.attr("id",n),a&&o.attr("style",a);const u=o.append("svg").attr("id",t).attr("width","100%").attr("xmlns",_z);return s&&u.attr("xmlns:xlink",s),u.append("g"),e},"appendDivSvgG");function Hp(e,t){return e.append("iframe").attr("id",t).attr("style","width: 100%; height: 100%;").attr("sandbox","")}x(Hp,"sandboxedIframe");var Fz=x((e,t,n,a)=>{var s,o,u;(s=e.getElementById(t))==null||s.remove(),(o=e.getElementById(n))==null||o.remove(),(u=e.getElementById(a))==null||u.remove()},"removeExistingElements"),$z=x(async function(e,t,n){var st,rt,W,j,M,F;ad();const a=Km(t);t=a.code;const s=Je();at.debug(s),t.length>((s==null?void 0:s.maxTextSize)??vz)&&(t=Sz);const o="#"+e,u="i"+e,c="#"+u,f="d"+e,d="#"+f,g=x(()=>{const ut=jt(b?c:d).node();ut&&"remove"in ut&&ut.remove()},"removeTempElements");let m=jt("body");const b=s.securityLevel===xz,v=s.securityLevel===Cz,S=s.fontFamily;if(n!==void 0){if(n&&(n.innerHTML=""),b){const $=Hp(jt(n),u);m=jt($.nodes()[0].contentDocument.body),m.node().style.margin=0}else m=jt(n);kx(m,e,f,`font-family: ${S}`,Tz)}else{if(Fz(document,e,f,u),b){const $=Hp(jt("body"),u);m=jt($.nodes()[0].contentDocument.body),m.node().style.margin=0}else m=jt("body");kx(m,e,f)}let C,w;try{C=await Up.fromText(t,{title:a.title})}catch($){if(s.suppressErrorRendering)throw g(),$;C=await Up.fromText("error"),w=$}const T=m.select(d).node(),k=C.type,E=T.firstChild,O=E.firstChild,D=(rt=(st=C.renderer).getClasses)==null?void 0:rt.call(st,t,C),R=Nz(s,k,D,o),N=document.createElement("style");N.innerHTML=R,E.insertBefore(N,O);try{await C.renderer.draw(t,e,Wv.version,C)}catch($){throw s.suppressErrorRendering?g():k$.draw(t,e,Wv.version),$}const K=m.select(`${d} svg`),it=(j=(W=C.db).getAccTitle)==null?void 0:j.call(W),nt=(F=(M=C.db).getAccDescription)==null?void 0:F.call(M);nk(k,K,it,nt),m.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns",wz);let X=m.select(d).node().innerHTML;if(at.debug("config.arrowMarkerAbsolute",s.arrowMarkerAbsolute),X=Pz(X,b,Ne(s.arrowMarkerAbsolute)),b){const $=m.select(d+" svg").node();X=Iz(X,$)}else v||(X=Is.sanitize(X,{ADD_TAGS:Dz,ADD_ATTR:Bz,HTML_INTEGRATION_POINTS:{foreignobject:!0}}));if(gz(),w)throw w;return g(),{diagramType:k,svg:X,bindFunctions:C.db.bindFunctions}},"render");function ek(e={}){var a;const t=Be({},e);t!=null&&t.fontFamily&&!((a=t.themeVariables)!=null&&a.fontFamily)&&(t.themeVariables||(t.themeVariables={}),t.themeVariables.fontFamily=t.fontFamily),KM(t),t!=null&&t.theme&&t.theme in nr?t.themeVariables=nr[t.theme].getThemeVariables(t.themeVariables):t&&(t.themeVariables=nr.default.getThemeVariables(t.themeVariables));const n=typeof t=="object"?QM(t):a2();Qp(n.logLevel),ad()}x(ek,"initialize");var ik=x((e,t={})=>{const{code:n}=Qm(e);return Up.fromText(n,t)},"getDiagramFromText");function nk(e,t,n,a){Qw(t,e),Kw(t,n,a,t.attr("id"))}x(nk,"addA11yInfo");var La=Object.freeze({render:$z,parse:tk,getDiagramFromText:ik,initialize:ek,getConfig:Je,setConfig:s2,getSiteConfig:a2,updateSiteConfig:ZM,reset:x(()=>{Ku()},"reset"),globalReset:x(()=>{Ku(Fs)},"globalReset"),defaultConfig:Fs});Qp(Je().logLevel);Ku(Je());var zz=x((e,t,n)=>{at.warn(e),Dm(e)?(n&&n(e.str,e.hash),t.push({...e,message:e.str,error:e})):(n&&n(e),e instanceof Error&&t.push({str:e.message,message:e.message,hash:e.name,error:e}))},"handleError"),rk=x(async function(e={querySelector:".mermaid"}){try{await qz(e)}catch(t){if(Dm(t)&&at.error(t.str),Bi.parseError&&Bi.parseError(t),!e.suppressErrors)throw at.error("Use the suppressErrors option to suppress these errors"),t}},"run"),qz=x(async function({postRenderCallback:e,querySelector:t,nodes:n}={querySelector:".mermaid"}){const a=La.getConfig();at.debug(`${e?"":"No "}Callback function found`);let s;if(n)s=n;else if(t)s=document.querySelectorAll(t);else throw new Error("Nodes and querySelector are both undefined");at.debug(`Found ${s.length} diagrams`),(a==null?void 0:a.startOnLoad)!==void 0&&(at.debug("Start On Load: "+(a==null?void 0:a.startOnLoad)),La.updateSiteConfig({startOnLoad:a==null?void 0:a.startOnLoad}));const o=new an.InitIDGenerator(a.deterministicIds,a.deterministicIDSeed);let u;const c=[];for(const f of Array.from(s)){if(at.info("Rendering diagram: "+f.id),f.getAttribute("data-processed"))continue;f.setAttribute("data-processed","true");const d=`mermaid-${o.next()}`;u=f.innerHTML,u=A_(an.entityDecode(u)).trim().replace(/<br\s*\/?>/gi,"<br/>");const g=an.detectInit(u);g&&at.debug("Detected early reinit: ",g);try{const{svg:m,bindFunctions:b}=await ok(d,u,f);f.innerHTML=m,e&&await e(d),b&&b(f)}catch(m){zz(m,c,Bi.parseError)}}if(c.length>0)throw c[0]},"runThrowsErrors"),ak=x(function(e){La.initialize(e)},"initialize"),Uz=x(async function(e,t,n){at.warn("mermaid.init is deprecated. Please use run instead."),e&&ak(e);const a={postRenderCallback:n,querySelector:".mermaid"};typeof t=="string"?a.querySelector=t:t&&(t instanceof HTMLElement?a.nodes=[t]:a.nodes=t),await rk(a)},"init"),Hz=x(async(e,{lazyLoad:t=!0}={})=>{ad(),Xg(...e),t===!1&&await dz()},"registerExternalDiagrams"),sk=x(function(){if(Bi.startOnLoad){const{startOnLoad:e}=La.getConfig();e&&Bi.run().catch(t=>at.error("Mermaid failed to initialize",t))}},"contentLoaded");typeof document<"u"&&window.addEventListener("load",sk,!1);var Gz=x(function(e){Bi.parseError=e},"setParseErrorHandler"),Mh=[],Ug=!1,lk=x(async()=>{if(!Ug){for(Ug=!0;Mh.length>0;){const e=Mh.shift();if(e)try{await e()}catch(t){at.error("Error executing queue",t)}}Ug=!1}},"executeQueue"),jz=x(async(e,t)=>new Promise((n,a)=>{const s=x(()=>new Promise((o,u)=>{La.parse(e,t).then(c=>{o(c),n(c)},c=>{var f;at.error("Error parsing",c),(f=Bi.parseError)==null||f.call(Bi,c),u(c),a(c)})}),"performCall");Mh.push(s),lk().catch(a)}),"parse"),ok=x((e,t,n)=>new Promise((a,s)=>{const o=x(()=>new Promise((u,c)=>{La.render(e,t,n).then(f=>{u(f),a(f)},f=>{var d;at.error("Error parsing",f),(d=Bi.parseError)==null||d.call(Bi,f),c(f),s(f)})}),"performCall");Mh.push(o),lk().catch(s)}),"render"),Yz=x(()=>Object.keys(wa).map(e=>({id:e})),"getRegisteredDiagramsMetadata"),Bi={startOnLoad:!0,mermaidAPI:La,parse:jz,render:ok,init:Uz,run:rk,registerExternalDiagrams:Hz,registerLayoutLoaders:pw,initialize:ak,parseError:void 0,contentLoaded:sk,setParseErrorHandler:Gz,detectType:Kp,registerIconPacks:mI,getRegisteredDiagramsMetadata:Yz},Ax=Bi;/*! Check if previously processed *//*!
 * Wait for document loaded before starting the execution
 */function Wz(){return lt.jsxs("div",{className:"home-container",children:[lt.jsxs("div",{className:"hero-section",children:[lt.jsx("h1",{children:"Business Services Hub Documentation"}),lt.jsx("p",{className:"subtitle",children:"Everything you need: architecture, setup, features, and business strategy"}),lt.jsx("p",{className:"description",children:"Welcome to the official documentation portal for Business Services Hub — your source for technical setup, feature guides, and business strategy."})]}),lt.jsxs("div",{className:"quick-links",children:[lt.jsx("h2",{children:"Quick Access"}),lt.jsxs("div",{className:"cards-grid",children:[lt.jsxs("div",{className:"card stakeholder-card",children:[lt.jsx("h3",{children:"📊 For Stakeholders & Investors"}),lt.jsx("p",{children:"Executive summaries, business plans, and strategic insights"}),lt.jsxs("div",{className:"card-links",children:[lt.jsx(ye,{to:"/docs/executive_summary",children:"Executive Summary"}),lt.jsx(ye,{to:"/docs/business_plan",children:"Business Plan"}),lt.jsx(ye,{to:"/docs/roadmap",children:"Development Roadmap"})]})]}),lt.jsxs("div",{className:"card developer-card",children:[lt.jsx("h3",{children:"🛠️ For Developers & Technical Teams"}),lt.jsx("p",{children:"Architecture, setup guides, and technical documentation"}),lt.jsxs("div",{className:"card-links",children:[lt.jsx(ye,{to:"/docs/architecture_diagrams",children:"Architecture Diagrams"}),lt.jsx(ye,{to:"/docs/setup_deployment_guide",children:"Setup & Deployment"}),lt.jsx(ye,{to:"/docs/features_detailed",children:"Features Documentation"})]})]}),lt.jsxs("div",{className:"card admin-card",children:[lt.jsx("h3",{children:"🔒 For Administrators"}),lt.jsx("p",{children:"Security guides, deployment, and platform management"}),lt.jsxs("div",{className:"card-links",children:[lt.jsx(ye,{to:"/docs/security_guide",children:"Security Guide"}),lt.jsx(ye,{to:"/docs/setup_deployment_guide",children:"Deployment Guide"}),lt.jsx(ye,{to:"/docs/contributing",children:"Contributing Guide"})]})]})]})]}),lt.jsxs("div",{className:"recent-updates",children:[lt.jsx("h2",{children:"Recent Updates"}),lt.jsx("p",{children:"Last updated: September 2025"}),lt.jsx("p",{children:"Latest changes: Enhanced documentation portal with professional branding and improved navigation"})]})]})}function Vz(){const{docName:e}=aR(),[t,n]=J.useState({title:"",content:""}),[a,s]=J.useState(!0),[o,u]=J.useState(null),c=J.useRef(null);return J.useEffect(()=>{if(s(!0),u(null),n({title:"",content:""}),e){const f=e.replace(".html",""),d=JR[f];d?(n(d),u(null)):(u("Document not found."),n({title:"",content:""}))}s(!1)},[e]),J.useEffect(()=>{t.content&&c.current&&(Ax.initialize({startOnLoad:!1,theme:"base",themeVariables:{primaryColor:"#212529",primaryTextColor:"#ffffff",primaryBorderColor:"#007bff",lineColor:"#007bff",secondaryColor:"#e9ecef",tertiaryColor:"#f8f9fa"}}),c.current.querySelectorAll("pre code.language-mermaid").forEach(async(d,g)=>{const m=d.textContent;try{const{svg:b}=await Ax.render(`mermaid-svg-${e}-${g}`,m);d.innerHTML=b,d.classList.remove("language-mermaid"),d.parentElement.classList.remove("language-mermaid")}catch(b){console.error("Mermaid rendering failed:",b),d.innerHTML=`<div style="color: red;">Error rendering diagram: ${b.message}</div><pre>${m}</pre>`}}))},[t.content]),a?lt.jsx("div",{className:"doc-message",children:"Loading document..."}):o?lt.jsx("div",{className:"doc-error",children:o}):t.content?lt.jsxs("div",{className:"doc-viewer-container",children:[lt.jsxs("div",{className:"breadcrumb",children:[lt.jsx(ye,{to:"/",children:"Documentation"})," > ",lt.jsx("span",{children:t.title})]}),lt.jsx("h1",{children:t.title}),lt.jsx("div",{ref:c,dangerouslySetInnerHTML:{__html:t.content}})]}):lt.jsx("div",{className:"doc-message",children:"No content available for this document."})}function Xz(){return lt.jsxs(GR,{basename:"/",children:[lt.jsxs("div",{className:"app-layout",children:[lt.jsxs("nav",{className:"sidebar",children:[lt.jsxs("div",{className:"sidebar-header",children:[lt.jsx("img",{src:tM,alt:"Falcon Eye Group Logo",className:"logo"}),lt.jsx("h2",{children:"Documentation"})]}),lt.jsxs("div",{className:"nav-section",children:[lt.jsx("h3",{children:"🏠 Overview"}),lt.jsx("ul",{children:lt.jsx("li",{children:lt.jsx(ye,{to:"/",className:({isActive:e})=>e?"active-link":"",children:"Home"})})})]}),lt.jsxs("div",{className:"nav-section",children:[lt.jsx("h3",{children:"📊 Business Docs"}),lt.jsxs("ul",{children:[lt.jsx("li",{children:lt.jsx(ye,{to:"/docs/executive_summary",className:({isActive:e})=>e?"active-link":"",children:"Executive Summary"})}),lt.jsx("li",{children:lt.jsx(ye,{to:"/docs/business_plan",className:({isActive:e})=>e?"active-link":"",children:"Business Plan"})}),lt.jsx("li",{children:lt.jsx(ye,{to:"/docs/roadmap",className:({isActive:e})=>e?"active-link":"",children:"Development Roadmap"})})]})]}),lt.jsxs("div",{className:"nav-section",children:[lt.jsx("h3",{children:"🛠️ Technical Docs"}),lt.jsxs("ul",{children:[lt.jsx("li",{children:lt.jsx(ye,{to:"/docs/project_documentation",className:({isActive:e})=>e?"active-link":"",children:"Project Documentation"})}),lt.jsx("li",{children:lt.jsx(ye,{to:"/docs/architecture_diagrams",className:({isActive:e})=>e?"active-link":"",children:"Architecture Diagrams"})}),lt.jsx("li",{children:lt.jsx(ye,{to:"/docs/features_detailed",className:({isActive:e})=>e?"active-link":"",children:"Features Detailed"})}),lt.jsx("li",{children:lt.jsx(ye,{to:"/docs/setup_deployment_guide",className:({isActive:e})=>e?"active-link":"",children:"Setup & Deployment"})}),lt.jsx("li",{children:lt.jsx(ye,{to:"/docs/security_guide",className:({isActive:e})=>e?"active-link":"",children:"Security Guide"})})]})]}),lt.jsxs("div",{className:"nav-section",children:[lt.jsx("h3",{children:"🤝 Community"}),lt.jsxs("ul",{children:[lt.jsx("li",{children:lt.jsx(ye,{to:"/docs/contributing",className:({isActive:e})=>e?"active-link":"",children:"Contributing Guide"})}),lt.jsx("li",{children:lt.jsx(ye,{to:"/docs/changelog",className:({isActive:e})=>e?"active-link":"",children:"Changelog"})})]})]})]}),lt.jsx("main",{className:"content",children:lt.jsxs(SR,{children:[lt.jsx(jg,{path:"/",element:lt.jsx(Wz,{})}),lt.jsx(jg,{path:"/docs/:docName",element:lt.jsx(Vz,{})})]})})]}),lt.jsx("footer",{className:"footer",children:lt.jsxs("div",{className:"footer-content",children:[lt.jsxs("div",{className:"footer-section",children:[lt.jsx("h4",{children:"Falcon Eye Group"}),lt.jsx("p",{children:"© 2025 Falcon Eye Group. All rights reserved."})]}),lt.jsxs("div",{className:"footer-section",children:[lt.jsx("h4",{children:"SmartPRO Hub"}),lt.jsx("p",{children:"One-Station Business Solutions"})]}),lt.jsxs("div",{className:"footer-section",children:[lt.jsx("h4",{children:"Contact"}),lt.jsx("p",{children:"Email: support@abuali.com"}),lt.jsx("p",{children:"Business: business@abuali.com"})]})]})})]})}AE.createRoot(document.getElementById("root")).render(lt.jsx(J.StrictMode,{children:lt.jsx(Xz,{})}));export{g2 as $,Eo as A,lM as B,A3 as C,Bm as D,Je as E,r2 as F,rP as G,s4 as H,Wv as I,dO as J,HM as K,$s as L,Zz as M,Xh as N,d2 as O,Zp as P,sS as Q,KB as R,$u as S,nP as T,Ko as U,p3 as V,Qo as W,bt as X,kt as Y,XN as Z,x as _,x3 as a,jC as a$,WB as a0,kS as a1,wS as a2,cq as a3,rq as a4,lq as a5,sq as a6,iq as a7,xs as a8,hm as a9,jN as aA,I5 as aB,FN as aC,Tm as aD,Cx as aE,bI as aF,VB as aG,Kz as aH,yE as aI,rc as aJ,mI as aK,pI as aL,lm as aM,Pr as aN,vS as aO,AD as aP,Po as aQ,Ba as aR,YN as aS,n_ as aT,Gh as aU,Vh as aV,vh as aW,a_ as aX,i_ as aY,CN as aZ,Ct as a_,oq as aa,nq as ab,hq as ac,uq as ad,aq as ae,HI as af,fw as ag,mq as ah,gO as ai,Ne as aj,Gr as ak,_m as al,$_ as am,Pa as an,h_ as ao,Nt as ap,_n as aq,BF as ar,pq as as,yq as at,fq as au,xt as av,gq as aw,pF as ax,hF as ay,uF as az,S3 as b,Ci as b0,SD as b1,sm as b2,E2 as b3,Jo as b4,L2 as b5,eq as b6,sM as b7,GN as b8,IN as b9,zp as bA,WN as bB,Wh as bC,Qt as bD,T5 as ba,wm as bb,bN as bc,VN as bd,ic as be,Qs as bf,mh as bg,RN as bh,i6 as bi,ec as bj,bh as bk,_N as bl,QC as bm,A5 as bn,E5 as bo,ya as bp,jS as bq,R5 as br,km as bs,k5 as bt,D5 as bu,Ks as bv,Hr as bw,zS as bx,Am as by,ZC as bz,Vt as c,jt as d,f2 as e,Be as f,_3 as g,lr as h,Vi as i,SO as j,Vs as k,at as l,f_ as m,Jz as n,vq as o,T3 as p,w3 as q,bq as r,C3 as s,fO as t,an as u,lF as v,lP as w,dq as x,v3 as y,tq as z};
