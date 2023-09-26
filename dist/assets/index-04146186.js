(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const E of e.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&g(E)}).observe(document,{childList:!0,subtree:!0});function Q(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function g(t){if(t.ep)return;t.ep=!0;const e=Q(t);fetch(t.href,e)}})();function Ko(A,B){const Q=Object.create(null),g=A.split(",");for(let t=0;t<g.length;t++)Q[g[t]]=!0;return B?t=>!!Q[t.toLowerCase()]:t=>!!Q[t]}const xB={},HC=[],oe=()=>{},$u=()=>!1,Ah=/^on[^a-z]/,si=A=>Ah.test(A),Il=A=>A.startsWith("onUpdate:"),eQ=Object.assign,il=(A,B)=>{const Q=A.indexOf(B);Q>-1&&A.splice(Q,1)},Bh=Object.prototype.hasOwnProperty,yB=(A,B)=>Bh.call(A,B),jA=Array.isArray,vC=A=>eI(A)==="[object Map]",FC=A=>eI(A)==="[object Set]",BD=A=>eI(A)==="[object Date]",Qh=A=>eI(A)==="[object RegExp]",rB=A=>typeof A=="function",aQ=A=>typeof A=="string",PI=A=>typeof A=="symbol",KB=A=>A!==null&&typeof A=="object",ol=A=>KB(A)&&rB(A.then)&&rB(A.catch),gd=Object.prototype.toString,eI=A=>gd.call(A),gh=A=>eI(A).slice(8,-1),td=A=>eI(A)==="[object Object]",sl=A=>aQ(A)&&A!=="NaN"&&A[0]!=="-"&&""+parseInt(A,10)===A,LI=Ko(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Po=A=>{const B=Object.create(null);return Q=>B[Q]||(B[Q]=A(Q))},th=/-(\w)/g,jg=Po(A=>A.replace(th,(B,Q)=>Q?Q.toUpperCase():"")),eh=/\B([A-Z])/g,Tt=Po(A=>A.replace(eh,"-$1").toLowerCase()),ai=Po(A=>A.charAt(0).toUpperCase()+A.slice(1)),XI=Po(A=>A?`on${ai(A)}`:""),zC=(A,B)=>!Object.is(A,B),WC=(A,B)=>{for(let Q=0;Q<A.length;Q++)A[Q](B)},Jo=(A,B,Q)=>{Object.defineProperty(A,B,{configurable:!0,enumerable:!1,value:Q})},yo=A=>{const B=parseFloat(A);return isNaN(B)?A:B},ko=A=>{const B=aQ(A)?Number(A):NaN;return isNaN(B)?A:B};let QD;const lr=()=>QD||(QD=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Eh="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",nh=Ko(Eh);function Mn(A){if(jA(A)){const B={};for(let Q=0;Q<A.length;Q++){const g=A[Q],t=aQ(g)?oh(g):Mn(g);if(t)for(const e in t)B[e]=t[e]}return B}else{if(aQ(A))return A;if(KB(A))return A}}const Ch=/;(?![^(]*\))/g,Ih=/:([^]+)/,ih=/\/\*[^]*?\*\//g;function oh(A){const B={};return A.replace(ih,"").split(Ch).forEach(Q=>{if(Q){const g=Q.split(Ih);g.length>1&&(B[g[0].trim()]=g[1].trim())}}),B}function Le(A){let B="";if(aQ(A))B=A;else if(jA(A))for(let Q=0;Q<A.length;Q++){const g=Le(A[Q]);g&&(B+=g+" ")}else if(KB(A))for(const Q in A)A[Q]&&(B+=Q+" ");return B.trim()}function sh(A){if(!A)return null;let{class:B,style:Q}=A;return B&&!aQ(B)&&(A.class=Le(B)),Q&&(A.style=Mn(Q)),A}const ah="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wh=Ko(ah);function ed(A){return!!A||A===""}function ch(A,B){if(A.length!==B.length)return!1;let Q=!0;for(let g=0;Q&&g<A.length;g++)Q=cn(A[g],B[g]);return Q}function cn(A,B){if(A===B)return!0;let Q=BD(A),g=BD(B);if(Q||g)return Q&&g?A.getTime()===B.getTime():!1;if(Q=PI(A),g=PI(B),Q||g)return A===B;if(Q=jA(A),g=jA(B),Q||g)return Q&&g?ch(A,B):!1;if(Q=KB(A),g=KB(B),Q||g){if(!Q||!g)return!1;const t=Object.keys(A).length,e=Object.keys(B).length;if(t!==e)return!1;for(const E in A){const I=A.hasOwnProperty(E),i=B.hasOwnProperty(E);if(I&&!i||!I&&i||!cn(A[E],B[E]))return!1}}return String(A)===String(B)}function jo(A,B){return A.findIndex(Q=>cn(Q,B))}const Wt=A=>aQ(A)?A:A==null?"":jA(A)||KB(A)&&(A.toString===gd||!rB(A.toString))?JSON.stringify(A,Ed,2):String(A),Ed=(A,B)=>B&&B.__v_isRef?Ed(A,B.value):vC(B)?{[`Map(${B.size})`]:[...B.entries()].reduce((Q,[g,t])=>(Q[`${g} =>`]=t,Q),{})}:FC(B)?{[`Set(${B.size})`]:[...B.values()]}:KB(B)&&!jA(B)&&!td(B)?String(B):B;let Ft;class al{constructor(B=!1){this.detached=B,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ft,!B&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}run(B){if(this._active){const Q=Ft;try{return Ft=this,B()}finally{Ft=Q}}}on(){Ft=this}off(){Ft=this.parent}stop(B){if(this._active){let Q,g;for(Q=0,g=this.effects.length;Q<g;Q++)this.effects[Q].stop();for(Q=0,g=this.cleanups.length;Q<g;Q++)this.cleanups[Q]();if(this.scopes)for(Q=0,g=this.scopes.length;Q<g;Q++)this.scopes[Q].stop(!0);if(!this.detached&&this.parent&&!B){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function wl(A){return new al(A)}function nd(A,B=Ft){B&&B.active&&B.effects.push(A)}function cl(){return Ft}function Cd(A){Ft&&Ft.cleanups.push(A)}const rl=A=>{const B=new Set(A);return B.w=0,B.n=0,B},Id=A=>(A.w&rn)>0,id=A=>(A.n&rn)>0,rh=({deps:A})=>{if(A.length)for(let B=0;B<A.length;B++)A[B].w|=rn},lh=A=>{const{deps:B}=A;if(B.length){let Q=0;for(let g=0;g<B.length;g++){const t=B[g];Id(t)&&!id(t)?t.delete(A):B[Q++]=t,t.w&=~rn,t.n&=~rn}B.length=Q}},Zo=new WeakMap;let JI=0,rn=1;const Fr=30;let ne;const gC=Symbol(""),Dr=Symbol("");class wi{constructor(B,Q=null,g){this.fn=B,this.scheduler=Q,this.active=!0,this.deps=[],this.parent=void 0,nd(this,g)}run(){if(!this.active)return this.fn();let B=ne,Q=nn;for(;B;){if(B===this)return;B=B.parent}try{return this.parent=ne,ne=this,nn=!0,rn=1<<++JI,JI<=Fr?rh(this):gD(this),this.fn()}finally{JI<=Fr&&lh(this),rn=1<<--JI,ne=this.parent,nn=Q,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ne===this?this.deferStop=!0:this.active&&(gD(this),this.onStop&&this.onStop(),this.active=!1)}}function gD(A){const{deps:B}=A;if(B.length){for(let Q=0;Q<B.length;Q++)B[Q].delete(A);B.length=0}}function Fh(A,B){A.effect&&(A=A.effect.fn);const Q=new wi(A);B&&(eQ(Q,B),B.scope&&nd(Q,B.scope)),(!B||!B.lazy)&&Q.run();const g=Q.run.bind(Q);return g.effect=Q,g}function Dh(A){A.effect.stop()}let nn=!0;const od=[];function EI(){od.push(nn),nn=!1}function nI(){const A=od.pop();nn=A===void 0?!0:A}function qg(A,B,Q){if(nn&&ne){let g=Zo.get(A);g||Zo.set(A,g=new Map);let t=g.get(Q);t||g.set(Q,t=rl()),sd(t)}}function sd(A,B){let Q=!1;JI<=Fr?id(A)||(A.n|=rn,Q=!Id(A)):Q=!A.has(ne),Q&&(A.add(ne),ne.deps.push(A))}function ME(A,B,Q,g,t,e){const E=Zo.get(A);if(!E)return;let I=[];if(B==="clear")I=[...E.values()];else if(Q==="length"&&jA(A)){const i=Number(g);E.forEach((a,w)=>{(w==="length"||w>=i)&&I.push(a)})}else switch(Q!==void 0&&I.push(E.get(Q)),B){case"add":jA(A)?sl(Q)&&I.push(E.get("length")):(I.push(E.get(gC)),vC(A)&&I.push(E.get(Dr)));break;case"delete":jA(A)||(I.push(E.get(gC)),vC(A)&&I.push(E.get(Dr)));break;case"set":vC(A)&&I.push(E.get(gC));break}if(I.length===1)I[0]&&Ur(I[0]);else{const i=[];for(const a of I)a&&i.push(...a);Ur(rl(i))}}function Ur(A,B){const Q=jA(A)?A:[...A];for(const g of Q)g.computed&&tD(g);for(const g of Q)g.computed||tD(g)}function tD(A,B){(A!==ne||A.allowRecurse)&&(A.scheduler?A.scheduler():A.run())}function Uh(A,B){var Q;return(Q=Zo.get(A))==null?void 0:Q.get(B)}const dh=Ko("__proto__,__v_isRef,__isVue"),ad=new Set(Object.getOwnPropertyNames(Symbol).filter(A=>A!=="arguments"&&A!=="caller").map(A=>Symbol[A]).filter(PI)),fh=qo(),Mh=qo(!1,!0),uh=qo(!0),hh=qo(!0,!0),eD=Gh();function Gh(){const A={};return["includes","indexOf","lastIndexOf"].forEach(B=>{A[B]=function(...Q){const g=NB(this);for(let e=0,E=this.length;e<E;e++)qg(g,"get",e+"");const t=g[B](...Q);return t===-1||t===!1?g[B](...Q.map(NB)):t}}),["push","pop","shift","unshift","splice"].forEach(B=>{A[B]=function(...Q){EI();const g=NB(this)[B].apply(this,Q);return nI(),g}}),A}function Rh(A){const B=NB(this);return qg(B,"has",A),B.hasOwnProperty(A)}function qo(A=!1,B=!1){return function(g,t,e){if(t==="__v_isReactive")return!A;if(t==="__v_isReadonly")return A;if(t==="__v_isShallow")return B;if(t==="__v_raw"&&e===(A?B?Ud:Dd:B?Fd:ld).get(g))return g;const E=jA(g);if(!A){if(E&&yB(eD,t))return Reflect.get(eD,t,e);if(t==="hasOwnProperty")return Rh}const I=Reflect.get(g,t,e);return(PI(t)?ad.has(t):dh(t))||(A||qg(g,"get",t),B)?I:fQ(I)?E&&sl(t)?I:I.value:KB(I)?A?Dl(I):CI(I):I}}const Yh=wd(),ph=wd(!0);function wd(A=!1){return function(Q,g,t,e){let E=Q[g];if(nC(E)&&fQ(E)&&!fQ(t))return!1;if(!A&&(!jI(t)&&!nC(t)&&(E=NB(E),t=NB(t)),!jA(Q)&&fQ(E)&&!fQ(t)))return E.value=t,!0;const I=jA(Q)&&sl(g)?Number(g)<Q.length:yB(Q,g),i=Reflect.set(Q,g,t,e);return Q===NB(e)&&(I?zC(t,E)&&ME(Q,"set",g,t):ME(Q,"add",g,t)),i}}function Nh(A,B){const Q=yB(A,B);A[B];const g=Reflect.deleteProperty(A,B);return g&&Q&&ME(A,"delete",B,void 0),g}function bh(A,B){const Q=Reflect.has(A,B);return(!PI(B)||!ad.has(B))&&qg(A,"has",B),Q}function mh(A){return qg(A,"iterate",jA(A)?"length":gC),Reflect.ownKeys(A)}const cd={get:fh,set:Yh,deleteProperty:Nh,has:bh,ownKeys:mh},rd={get:uh,set(A,B){return!0},deleteProperty(A,B){return!0}},Jh=eQ({},cd,{get:Mh,set:ph}),yh=eQ({},rd,{get:hh}),ll=A=>A,_o=A=>Reflect.getPrototypeOf(A);function io(A,B,Q=!1,g=!1){A=A.__v_raw;const t=NB(A),e=NB(B);Q||(B!==e&&qg(t,"get",B),qg(t,"get",e));const{has:E}=_o(t),I=g?ll:Q?dl:qI;if(E.call(t,B))return I(A.get(B));if(E.call(t,e))return I(A.get(e));A!==t&&A.get(B)}function oo(A,B=!1){const Q=this.__v_raw,g=NB(Q),t=NB(A);return B||(A!==t&&qg(g,"has",A),qg(g,"has",t)),A===t?Q.has(A):Q.has(A)||Q.has(t)}function so(A,B=!1){return A=A.__v_raw,!B&&qg(NB(A),"iterate",gC),Reflect.get(A,"size",A)}function ED(A){A=NB(A);const B=NB(this);return _o(B).has.call(B,A)||(B.add(A),ME(B,"add",A,A)),this}function nD(A,B){B=NB(B);const Q=NB(this),{has:g,get:t}=_o(Q);let e=g.call(Q,A);e||(A=NB(A),e=g.call(Q,A));const E=t.call(Q,A);return Q.set(A,B),e?zC(B,E)&&ME(Q,"set",A,B):ME(Q,"add",A,B),this}function CD(A){const B=NB(this),{has:Q,get:g}=_o(B);let t=Q.call(B,A);t||(A=NB(A),t=Q.call(B,A)),g&&g.call(B,A);const e=B.delete(A);return t&&ME(B,"delete",A,void 0),e}function ID(){const A=NB(this),B=A.size!==0,Q=A.clear();return B&&ME(A,"clear",void 0,void 0),Q}function ao(A,B){return function(g,t){const e=this,E=e.__v_raw,I=NB(E),i=B?ll:A?dl:qI;return!A&&qg(I,"iterate",gC),E.forEach((a,w)=>g.call(t,i(a),i(w),e))}}function wo(A,B,Q){return function(...g){const t=this.__v_raw,e=NB(t),E=vC(e),I=A==="entries"||A===Symbol.iterator&&E,i=A==="keys"&&E,a=t[A](...g),w=Q?ll:B?dl:qI;return!B&&qg(e,"iterate",i?Dr:gC),{next(){const{value:F,done:R}=a.next();return R?{value:F,done:R}:{value:I?[w(F[0]),w(F[1])]:w(F),done:R}},[Symbol.iterator](){return this}}}}function jE(A){return function(...B){return A==="delete"?!1:this}}function kh(){const A={get(e){return io(this,e)},get size(){return so(this)},has:oo,add:ED,set:nD,delete:CD,clear:ID,forEach:ao(!1,!1)},B={get(e){return io(this,e,!1,!0)},get size(){return so(this)},has:oo,add:ED,set:nD,delete:CD,clear:ID,forEach:ao(!1,!0)},Q={get(e){return io(this,e,!0)},get size(){return so(this,!0)},has(e){return oo.call(this,e,!0)},add:jE("add"),set:jE("set"),delete:jE("delete"),clear:jE("clear"),forEach:ao(!0,!1)},g={get(e){return io(this,e,!0,!0)},get size(){return so(this,!0)},has(e){return oo.call(this,e,!0)},add:jE("add"),set:jE("set"),delete:jE("delete"),clear:jE("clear"),forEach:ao(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(e=>{A[e]=wo(e,!1,!1),Q[e]=wo(e,!0,!1),B[e]=wo(e,!1,!0),g[e]=wo(e,!0,!0)}),[A,Q,B,g]}const[Zh,Lh,Xh,Sh]=kh();function $o(A,B){const Q=B?A?Sh:Xh:A?Lh:Zh;return(g,t,e)=>t==="__v_isReactive"?!A:t==="__v_isReadonly"?A:t==="__v_raw"?g:Reflect.get(yB(Q,t)&&t in g?Q:g,t,e)}const Hh={get:$o(!1,!1)},vh={get:$o(!1,!0)},Wh={get:$o(!0,!1)},Th={get:$o(!0,!0)},ld=new WeakMap,Fd=new WeakMap,Dd=new WeakMap,Ud=new WeakMap;function Oh(A){switch(A){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vh(A){return A.__v_skip||!Object.isExtensible(A)?0:Oh(gh(A))}function CI(A){return nC(A)?A:As(A,!1,cd,Hh,ld)}function Fl(A){return As(A,!1,Jh,vh,Fd)}function Dl(A){return As(A,!0,rd,Wh,Dd)}function xh(A){return As(A,!0,yh,Th,Ud)}function As(A,B,Q,g,t){if(!KB(A)||A.__v_raw&&!(B&&A.__v_isReactive))return A;const e=t.get(A);if(e)return e;const E=Vh(A);if(E===0)return A;const I=new Proxy(A,E===2?g:Q);return t.set(A,I),I}function FE(A){return nC(A)?FE(A.__v_raw):!!(A&&A.__v_isReactive)}function nC(A){return!!(A&&A.__v_isReadonly)}function jI(A){return!!(A&&A.__v_isShallow)}function Ul(A){return FE(A)||nC(A)}function NB(A){const B=A&&A.__v_raw;return B?NB(B):A}function ci(A){return Jo(A,"__v_skip",!0),A}const qI=A=>KB(A)?CI(A):A,dl=A=>KB(A)?Dl(A):A;function fl(A){nn&&ne&&(A=NB(A),sd(A.dep||(A.dep=rl())))}function Bs(A,B){A=NB(A);const Q=A.dep;Q&&Ur(Q)}function fQ(A){return!!(A&&A.__v_isRef===!0)}function zB(A){return fd(A,!1)}function dd(A){return fd(A,!0)}function fd(A,B){return fQ(A)?A:new zh(A,B)}class zh{constructor(B,Q){this.__v_isShallow=Q,this.dep=void 0,this.__v_isRef=!0,this._rawValue=Q?B:NB(B),this._value=Q?B:qI(B)}get value(){return fl(this),this._value}set value(B){const Q=this.__v_isShallow||jI(B)||nC(B);B=Q?B:NB(B),zC(B,this._rawValue)&&(this._rawValue=B,this._value=Q?B:qI(B),Bs(this))}}function Kh(A){Bs(A)}function ft(A){return fQ(A)?A.value:A}function Ph(A){return rB(A)?A():ft(A)}const jh={get:(A,B,Q)=>ft(Reflect.get(A,B,Q)),set:(A,B,Q,g)=>{const t=A[B];return fQ(t)&&!fQ(Q)?(t.value=Q,!0):Reflect.set(A,B,Q,g)}};function Ml(A){return FE(A)?A:new Proxy(A,jh)}class qh{constructor(B){this.dep=void 0,this.__v_isRef=!0;const{get:Q,set:g}=B(()=>fl(this),()=>Bs(this));this._get=Q,this._set=g}get value(){return this._get()}set value(B){this._set(B)}}function _h(A){return new qh(A)}function ul(A){const B=jA(A)?new Array(A.length):{};for(const Q in A)B[Q]=ud(A,Q);return B}class $h{constructor(B,Q,g){this._object=B,this._key=Q,this._defaultValue=g,this.__v_isRef=!0}get value(){const B=this._object[this._key];return B===void 0?this._defaultValue:B}set value(B){this._object[this._key]=B}get dep(){return Uh(NB(this._object),this._key)}}class AG{constructor(B){this._getter=B,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Md(A,B,Q){return fQ(A)?A:rB(A)?new AG(A):KB(A)&&arguments.length>1?ud(A,B,Q):zB(A)}function ud(A,B,Q){const g=A[B];return fQ(g)?g:new $h(A,B,Q)}class BG{constructor(B,Q,g,t){this._setter=Q,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new wi(B,()=>{this._dirty||(this._dirty=!0,Bs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!t,this.__v_isReadonly=g}get value(){const B=NB(this);return fl(B),(B._dirty||!B._cacheable)&&(B._dirty=!1,B._value=B.effect.run()),B._value}set value(B){this._setter(B)}}function QG(A,B,Q=!1){let g,t;const e=rB(A);return e?(g=A,t=oe):(g=A.get,t=A.set),new BG(g,t,e||!t,Q)}function gG(A,...B){}function tG(A,B){}function DE(A,B,Q,g){let t;try{t=g?A(...g):A()}catch(e){DC(e,B,Q)}return t}function Mt(A,B,Q,g){if(rB(A)){const e=DE(A,B,Q,g);return e&&ol(e)&&e.catch(E=>{DC(E,B,Q)}),e}const t=[];for(let e=0;e<A.length;e++)t.push(Mt(A[e],B,Q,g));return t}function DC(A,B,Q,g=!0){const t=B?B.vnode:null;if(B){let e=B.parent;const E=B.proxy,I=Q;for(;e;){const a=e.ec;if(a){for(let w=0;w<a.length;w++)if(a[w](A,E,I)===!1)return}e=e.parent}const i=B.appContext.config.errorHandler;if(i){DE(i,null,10,[A,E,I]);return}}eG(A,Q,t,g)}function eG(A,B,Q,g=!0){console.error(A)}let _I=!1,dr=!1;const wg=[];let Je=0;const TC=[];let wE=null,_n=0;const hd=Promise.resolve();let hl=null;function II(A){const B=hl||hd;return A?B.then(this?A.bind(this):A):B}function EG(A){let B=Je+1,Q=wg.length;for(;B<Q;){const g=B+Q>>>1;$I(wg[g])<A?B=g+1:Q=g}return B}function Qs(A){(!wg.length||!wg.includes(A,_I&&A.allowRecurse?Je+1:Je))&&(A.id==null?wg.push(A):wg.splice(EG(A.id),0,A),Gd())}function Gd(){!_I&&!dr&&(dr=!0,hl=hd.then(Rd))}function nG(A){const B=wg.indexOf(A);B>Je&&wg.splice(B,1)}function Gl(A){jA(A)?TC.push(...A):(!wE||!wE.includes(A,A.allowRecurse?_n+1:_n))&&TC.push(A),Gd()}function iD(A,B=_I?Je+1:0){for(;B<wg.length;B++){const Q=wg[B];Q&&Q.pre&&(wg.splice(B,1),B--,Q())}}function Lo(A){if(TC.length){const B=[...new Set(TC)];if(TC.length=0,wE){wE.push(...B);return}for(wE=B,wE.sort((Q,g)=>$I(Q)-$I(g)),_n=0;_n<wE.length;_n++)wE[_n]();wE=null,_n=0}}const $I=A=>A.id==null?1/0:A.id,CG=(A,B)=>{const Q=$I(A)-$I(B);if(Q===0){if(A.pre&&!B.pre)return-1;if(B.pre&&!A.pre)return 1}return Q};function Rd(A){dr=!1,_I=!0,wg.sort(CG);const B=oe;try{for(Je=0;Je<wg.length;Je++){const Q=wg[Je];Q&&Q.active!==!1&&DE(Q,null,14)}}finally{Je=0,wg.length=0,Lo(),_I=!1,hl=null,(wg.length||TC.length)&&Rd()}}let ZC,co=[];function Yd(A,B){var Q,g;ZC=A,ZC?(ZC.enabled=!0,co.forEach(({event:t,args:e})=>ZC.emit(t,...e)),co=[]):typeof window<"u"&&window.HTMLElement&&!((g=(Q=window.navigator)==null?void 0:Q.userAgent)!=null&&g.includes("jsdom"))?((B.__VUE_DEVTOOLS_HOOK_REPLAY__=B.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(e=>{Yd(e,B)}),setTimeout(()=>{ZC||(B.__VUE_DEVTOOLS_HOOK_REPLAY__=null,co=[])},3e3)):co=[]}function IG(A,B,...Q){if(A.isUnmounted)return;const g=A.vnode.props||xB;let t=Q;const e=B.startsWith("update:"),E=e&&B.slice(7);if(E&&E in g){const w=`${E==="modelValue"?"model":E}Modifiers`,{number:F,trim:R}=g[w]||xB;R&&(t=Q.map(h=>aQ(h)?h.trim():h)),F&&(t=Q.map(yo))}let I,i=g[I=XI(B)]||g[I=XI(jg(B))];!i&&e&&(i=g[I=XI(Tt(B))]),i&&Mt(i,A,6,t);const a=g[I+"Once"];if(a){if(!A.emitted)A.emitted={};else if(A.emitted[I])return;A.emitted[I]=!0,Mt(a,A,6,t)}}function pd(A,B,Q=!1){const g=B.emitsCache,t=g.get(A);if(t!==void 0)return t;const e=A.emits;let E={},I=!1;if(!rB(A)){const i=a=>{const w=pd(a,B,!0);w&&(I=!0,eQ(E,w))};!Q&&B.mixins.length&&B.mixins.forEach(i),A.extends&&i(A.extends),A.mixins&&A.mixins.forEach(i)}return!e&&!I?(KB(A)&&g.set(A,null),null):(jA(e)?e.forEach(i=>E[i]=null):eQ(E,e),KB(A)&&g.set(A,E),E)}function gs(A,B){return!A||!si(B)?!1:(B=B.slice(2).replace(/Once$/,""),yB(A,B[0].toLowerCase()+B.slice(1))||yB(A,Tt(B))||yB(A,B))}let VQ=null,ts=null;function Ai(A){const B=VQ;return VQ=A,ts=A&&A.type.__scopeId||null,B}function ri(A){ts=A}function li(){ts=null}const iG=A=>hE;function hE(A,B=VQ,Q){if(!B||A._n)return A;const g=(...t)=>{g._d&&Yr(-1);const e=Ai(B);let E;try{E=A(...t)}finally{Ai(e),g._d&&Yr(1)}return E};return g._n=!0,g._c=!0,g._d=!0,g}function Mo(A){const{type:B,vnode:Q,proxy:g,withProxy:t,props:e,propsOptions:[E],slots:I,attrs:i,emit:a,render:w,renderCache:F,data:R,setupState:h,ctx:y,inheritAttrs:p}=A;let M,m;const N=Ai(A);try{if(Q.shapeFlag&4){const v=t||g;M=Dt(w.call(v,v,F,e,h,R,y)),m=i}else{const v=B;M=Dt(v.length>1?v(e,{attrs:i,slots:I,emit:a}):v(e,null)),m=B.props?i:sG(i)}}catch(v){WI.length=0,DC(v,A,1),M=SB(rg)}let AA=M;if(m&&p!==!1){const v=Object.keys(m),{shapeFlag:x}=AA;v.length&&x&7&&(E&&v.some(Il)&&(m=aG(m,E)),AA=Xe(AA,m))}return Q.dirs&&(AA=Xe(AA),AA.dirs=AA.dirs?AA.dirs.concat(Q.dirs):Q.dirs),Q.transition&&(AA.transition=Q.transition),M=AA,Ai(N),M}function oG(A){let B;for(let Q=0;Q<A.length;Q++){const g=A[Q];if(ln(g)){if(g.type!==rg||g.children==="v-if"){if(B)return;B=g}}else return}return B}const sG=A=>{let B;for(const Q in A)(Q==="class"||Q==="style"||si(Q))&&((B||(B={}))[Q]=A[Q]);return B},aG=(A,B)=>{const Q={};for(const g in A)(!Il(g)||!(g.slice(9)in B))&&(Q[g]=A[g]);return Q};function wG(A,B,Q){const{props:g,children:t,component:e}=A,{props:E,children:I,patchFlag:i}=B,a=e.emitsOptions;if(B.dirs||B.transition)return!0;if(Q&&i>=0){if(i&1024)return!0;if(i&16)return g?oD(g,E,a):!!E;if(i&8){const w=B.dynamicProps;for(let F=0;F<w.length;F++){const R=w[F];if(E[R]!==g[R]&&!gs(a,R))return!0}}}else return(t||I)&&(!I||!I.$stable)?!0:g===E?!1:g?E?oD(g,E,a):!0:!!E;return!1}function oD(A,B,Q){const g=Object.keys(B);if(g.length!==Object.keys(A).length)return!0;for(let t=0;t<g.length;t++){const e=g[t];if(B[e]!==A[e]&&!gs(Q,e))return!0}return!1}function Rl({vnode:A,parent:B},Q){for(;B&&B.subTree===A;)(A=B.vnode).el=Q,B=B.parent}const Nd=A=>A.__isSuspense,cG={name:"Suspense",__isSuspense:!0,process(A,B,Q,g,t,e,E,I,i,a){A==null?lG(B,Q,g,t,e,E,I,i,a):FG(A,B,Q,g,t,E,I,i,a)},hydrate:DG,create:Yl,normalize:UG},rG=cG;function Bi(A,B){const Q=A.props&&A.props[B];rB(Q)&&Q()}function lG(A,B,Q,g,t,e,E,I,i){const{p:a,o:{createElement:w}}=i,F=w("div"),R=A.suspense=Yl(A,t,g,B,F,Q,e,E,I,i);a(null,R.pendingBranch=A.ssContent,F,null,g,R,e,E),R.deps>0?(Bi(A,"onPending"),Bi(A,"onFallback"),a(null,A.ssFallback,B,Q,g,null,e,E),OC(R,A.ssFallback)):R.resolve(!1,!0)}function FG(A,B,Q,g,t,e,E,I,{p:i,um:a,o:{createElement:w}}){const F=B.suspense=A.suspense;F.vnode=B,B.el=A.el;const R=B.ssContent,h=B.ssFallback,{activeBranch:y,pendingBranch:p,isInFallback:M,isHydrating:m}=F;if(p)F.pendingBranch=R,Ce(R,p)?(i(p,R,F.hiddenContainer,null,t,F,e,E,I),F.deps<=0?F.resolve():M&&(i(y,h,Q,g,t,null,e,E,I),OC(F,h))):(F.pendingId++,m?(F.isHydrating=!1,F.activeBranch=p):a(p,t,F),F.deps=0,F.effects.length=0,F.hiddenContainer=w("div"),M?(i(null,R,F.hiddenContainer,null,t,F,e,E,I),F.deps<=0?F.resolve():(i(y,h,Q,g,t,null,e,E,I),OC(F,h))):y&&Ce(R,y)?(i(y,R,Q,g,t,F,e,E,I),F.resolve(!0)):(i(null,R,F.hiddenContainer,null,t,F,e,E,I),F.deps<=0&&F.resolve()));else if(y&&Ce(R,y))i(y,R,Q,g,t,F,e,E,I),OC(F,R);else if(Bi(B,"onPending"),F.pendingBranch=R,F.pendingId++,i(null,R,F.hiddenContainer,null,t,F,e,E,I),F.deps<=0)F.resolve();else{const{timeout:N,pendingId:AA}=F;N>0?setTimeout(()=>{F.pendingId===AA&&F.fallback(h)},N):N===0&&F.fallback(h)}}function Yl(A,B,Q,g,t,e,E,I,i,a,w=!1){const{p:F,m:R,um:h,n:y,o:{parentNode:p,remove:M}}=a;let m;const N=dG(A);N&&B!=null&&B.pendingBranch&&(m=B.pendingId,B.deps++);const AA=A.props?ko(A.props.timeout):void 0,v={vnode:A,parent:B,parentComponent:Q,isSVG:E,container:g,hiddenContainer:t,anchor:e,deps:0,pendingId:0,timeout:typeof AA=="number"?AA:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:w,isUnmounted:!1,effects:[],resolve(x=!1,iA=!1){const{vnode:cA,activeBranch:j,pendingBranch:$,pendingId:sA,effects:DA,parentComponent:lA,container:yA}=v;if(v.isHydrating)v.isHydrating=!1;else if(!x){const XA=j&&$.transition&&$.transition.mode==="out-in";XA&&(j.transition.afterLeave=()=>{sA===v.pendingId&&R($,yA,HA,0)});let{anchor:HA}=v;j&&(HA=y(j),h(j,lA,v,!0)),XA||R($,yA,HA,0)}OC(v,$),v.pendingBranch=null,v.isInFallback=!1;let uA=v.parent,EB=!1;for(;uA;){if(uA.pendingBranch){uA.effects.push(...DA),EB=!0;break}uA=uA.parent}EB||Gl(DA),v.effects=[],N&&B&&B.pendingBranch&&m===B.pendingId&&(B.deps--,B.deps===0&&!iA&&B.resolve()),Bi(cA,"onResolve")},fallback(x){if(!v.pendingBranch)return;const{vnode:iA,activeBranch:cA,parentComponent:j,container:$,isSVG:sA}=v;Bi(iA,"onFallback");const DA=y(cA),lA=()=>{v.isInFallback&&(F(null,x,$,DA,j,null,sA,I,i),OC(v,x))},yA=x.transition&&x.transition.mode==="out-in";yA&&(cA.transition.afterLeave=lA),v.isInFallback=!0,h(cA,j,null,!0),yA||lA()},move(x,iA,cA){v.activeBranch&&R(v.activeBranch,x,iA,cA),v.container=x},next(){return v.activeBranch&&y(v.activeBranch)},registerDep(x,iA){const cA=!!v.pendingBranch;cA&&v.deps++;const j=x.vnode.el;x.asyncDep.catch($=>{DC($,x,0)}).then($=>{if(x.isUnmounted||v.isUnmounted||v.pendingId!==x.suspenseId)return;x.asyncResolved=!0;const{vnode:sA}=x;pr(x,$,!1),j&&(sA.el=j);const DA=!j&&x.subTree.el;iA(x,sA,p(j||x.subTree.el),j?null:y(x.subTree),v,E,i),DA&&M(DA),Rl(x,sA.el),cA&&--v.deps===0&&v.resolve()})},unmount(x,iA){v.isUnmounted=!0,v.activeBranch&&h(v.activeBranch,Q,x,iA),v.pendingBranch&&h(v.pendingBranch,Q,x,iA)}};return v}function DG(A,B,Q,g,t,e,E,I,i){const a=B.suspense=Yl(B,g,Q,A.parentNode,document.createElement("div"),null,t,e,E,I,!0),w=i(A,a.pendingBranch=B.ssContent,Q,a,e,E);return a.deps===0&&a.resolve(!1,!0),w}function UG(A){const{shapeFlag:B,children:Q}=A,g=B&32;A.ssContent=sD(g?Q.default:Q),A.ssFallback=g?sD(Q.fallback):SB(rg)}function sD(A){let B;if(rB(A)){const Q=iC&&A._c;Q&&(A._d=!1,fB()),A=A(),Q&&(A._d=!0,B=Pg,nf())}return jA(A)&&(A=oG(A)),A=Dt(A),B&&!A.dynamicChildren&&(A.dynamicChildren=B.filter(Q=>Q!==A)),A}function bd(A,B){B&&B.pendingBranch?jA(A)?B.effects.push(...A):B.effects.push(A):Gl(A)}function OC(A,B){A.activeBranch=B;const{vnode:Q,parentComponent:g}=A,t=Q.el=B.el;g&&g.subTree===Q&&(g.vnode.el=t,Rl(g,t))}function dG(A){var B;return((B=A.props)==null?void 0:B.suspensible)!=null&&A.props.suspensible!==!1}function fG(A,B){return Fi(A,null,B)}function md(A,B){return Fi(A,null,{flush:"post"})}function MG(A,B){return Fi(A,null,{flush:"sync"})}const ro={};function ut(A,B,Q){return Fi(A,B,Q)}function Fi(A,B,{immediate:Q,deep:g,flush:t,onTrack:e,onTrigger:E}=xB){var I;const i=cl()===((I=yQ)==null?void 0:I.scope)?yQ:null;let a,w=!1,F=!1;if(fQ(A)?(a=()=>A.value,w=jI(A)):FE(A)?(a=()=>A,g=!0):jA(A)?(F=!0,w=A.some(v=>FE(v)||jI(v)),a=()=>A.map(v=>{if(fQ(v))return v.value;if(FE(v))return AC(v);if(rB(v))return DE(v,i,2)})):rB(A)?B?a=()=>DE(A,i,2):a=()=>{if(!(i&&i.isUnmounted))return R&&R(),Mt(A,i,3,[h])}:a=oe,B&&g){const v=a;a=()=>AC(v())}let R,h=v=>{R=N.onStop=()=>{DE(v,i,4)}},y;if(PC)if(h=oe,B?Q&&Mt(B,i,3,[a(),F?[]:void 0,h]):a(),t==="sync"){const v=Ff();y=v.__watcherHandles||(v.__watcherHandles=[])}else return oe;let p=F?new Array(A.length).fill(ro):ro;const M=()=>{if(N.active)if(B){const v=N.run();(g||w||(F?v.some((x,iA)=>zC(x,p[iA])):zC(v,p)))&&(R&&R(),Mt(B,i,3,[v,p===ro?void 0:F&&p[0]===ro?[]:p,h]),p=v)}else N.run()};M.allowRecurse=!!B;let m;t==="sync"?m=M:t==="post"?m=()=>tg(M,i&&i.suspense):(M.pre=!0,i&&(M.id=i.uid),m=()=>Qs(M));const N=new wi(a,m);B?Q?M():p=N.run():t==="post"?tg(N.run.bind(N),i&&i.suspense):N.run();const AA=()=>{N.stop(),i&&i.scope&&il(i.scope.effects,N)};return y&&y.push(AA),AA}function uG(A,B,Q){const g=this.proxy,t=aQ(A)?A.includes(".")?Jd(g,A):()=>g[A]:A.bind(g,g);let e;rB(B)?e=B:(e=B.handler,Q=B);const E=yQ;Fn(this);const I=Fi(t,e.bind(g),Q);return E?Fn(E):In(),I}function Jd(A,B){const Q=B.split(".");return()=>{let g=A;for(let t=0;t<Q.length&&g;t++)g=g[Q[t]];return g}}function AC(A,B){if(!KB(A)||A.__v_skip||(B=B||new Set,B.has(A)))return A;if(B.add(A),fQ(A))AC(A.value,B);else if(jA(A))for(let Q=0;Q<A.length;Q++)AC(A[Q],B);else if(FC(A)||vC(A))A.forEach(Q=>{AC(Q,B)});else if(td(A))for(const Q in A)AC(A[Q],B);return A}function Di(A,B){const Q=VQ;if(Q===null)return A;const g=os(Q)||Q.proxy,t=A.dirs||(A.dirs=[]);for(let e=0;e<B.length;e++){let[E,I,i,a=xB]=B[e];E&&(rB(E)&&(E={mounted:E,updated:E}),E.deep&&AC(I),t.push({dir:E,instance:g,value:I,oldValue:void 0,arg:i,modifiers:a}))}return A}function me(A,B,Q,g){const t=A.dirs,e=B&&B.dirs;for(let E=0;E<t.length;E++){const I=t[E];e&&(I.oldValue=e[E].value);let i=I.dir[g];i&&(EI(),Mt(i,Q,8,[A.el,I,A,B]),nI())}}function pl(){const A={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return He(()=>{A.isMounted=!0}),di(()=>{A.isUnmounting=!0}),A}const vt=[Function,Array],Nl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vt,onEnter:vt,onAfterEnter:vt,onEnterCancelled:vt,onBeforeLeave:vt,onLeave:vt,onAfterLeave:vt,onLeaveCancelled:vt,onBeforeAppear:vt,onAppear:vt,onAfterAppear:vt,onAppearCancelled:vt},hG={name:"BaseTransition",props:Nl,setup(A,{slots:B}){const Q=ve(),g=pl();let t;return()=>{const e=B.default&&es(B.default(),!0);if(!e||!e.length)return;let E=e[0];if(e.length>1){for(const p of e)if(p.type!==rg){E=p;break}}const I=NB(A),{mode:i}=I;if(g.isLeaving)return Lc(E);const a=aD(E);if(!a)return Lc(E);const w=KC(a,I,g,Q);CC(a,w);const F=Q.subTree,R=F&&aD(F);let h=!1;const{getTransitionKey:y}=a.type;if(y){const p=y();t===void 0?t=p:p!==t&&(t=p,h=!0)}if(R&&R.type!==rg&&(!Ce(a,R)||h)){const p=KC(R,I,g,Q);if(CC(R,p),i==="out-in")return g.isLeaving=!0,p.afterLeave=()=>{g.isLeaving=!1,Q.update.active!==!1&&Q.update()},Lc(E);i==="in-out"&&a.type!==rg&&(p.delayLeave=(M,m,N)=>{const AA=kd(g,R);AA[String(R.key)]=R,M._leaveCb=()=>{m(),M._leaveCb=void 0,delete w.delayedLeave},w.delayedLeave=N})}return E}}},yd=hG;function kd(A,B){const{leavingVNodes:Q}=A;let g=Q.get(B.type);return g||(g=Object.create(null),Q.set(B.type,g)),g}function KC(A,B,Q,g){const{appear:t,mode:e,persisted:E=!1,onBeforeEnter:I,onEnter:i,onAfterEnter:a,onEnterCancelled:w,onBeforeLeave:F,onLeave:R,onAfterLeave:h,onLeaveCancelled:y,onBeforeAppear:p,onAppear:M,onAfterAppear:m,onAppearCancelled:N}=B,AA=String(A.key),v=kd(Q,A),x=(j,$)=>{j&&Mt(j,g,9,$)},iA=(j,$)=>{const sA=$[1];x(j,$),jA(j)?j.every(DA=>DA.length<=1)&&sA():j.length<=1&&sA()},cA={mode:e,persisted:E,beforeEnter(j){let $=I;if(!Q.isMounted)if(t)$=p||I;else return;j._leaveCb&&j._leaveCb(!0);const sA=v[AA];sA&&Ce(A,sA)&&sA.el._leaveCb&&sA.el._leaveCb(),x($,[j])},enter(j){let $=i,sA=a,DA=w;if(!Q.isMounted)if(t)$=M||i,sA=m||a,DA=N||w;else return;let lA=!1;const yA=j._enterCb=uA=>{lA||(lA=!0,uA?x(DA,[j]):x(sA,[j]),cA.delayedLeave&&cA.delayedLeave(),j._enterCb=void 0)};$?iA($,[j,yA]):yA()},leave(j,$){const sA=String(A.key);if(j._enterCb&&j._enterCb(!0),Q.isUnmounting)return $();x(F,[j]);let DA=!1;const lA=j._leaveCb=yA=>{DA||(DA=!0,$(),yA?x(y,[j]):x(h,[j]),j._leaveCb=void 0,v[sA]===A&&delete v[sA])};v[sA]=A,R?iA(R,[j,lA]):lA()},clone(j){return KC(j,B,Q,g)}};return cA}function Lc(A){if(Ui(A))return A=Xe(A),A.children=null,A}function aD(A){return Ui(A)?A.children?A.children[0]:void 0:A}function CC(A,B){A.shapeFlag&6&&A.component?CC(A.component.subTree,B):A.shapeFlag&128?(A.ssContent.transition=B.clone(A.ssContent),A.ssFallback.transition=B.clone(A.ssFallback)):A.transition=B}function es(A,B=!1,Q){let g=[],t=0;for(let e=0;e<A.length;e++){let E=A[e];const I=Q==null?E.key:String(Q)+String(E.key!=null?E.key:e);E.type===sQ?(E.patchFlag&128&&t++,g=g.concat(es(E.children,B,I))):(B||E.type!==rg)&&g.push(I!=null?Xe(E,{key:I}):E)}if(t>1)for(let e=0;e<g.length;e++)g[e].patchFlag=-2;return g}function Zg(A,B){return rB(A)?(()=>eQ({name:A.name},B,{setup:A}))():A}const tC=A=>!!A.type.__asyncLoader;function GG(A){rB(A)&&(A={loader:A});const{loader:B,loadingComponent:Q,errorComponent:g,delay:t=200,timeout:e,suspensible:E=!0,onError:I}=A;let i=null,a,w=0;const F=()=>(w++,i=null,R()),R=()=>{let h;return i||(h=i=B().catch(y=>{if(y=y instanceof Error?y:new Error(String(y)),I)return new Promise((p,M)=>{I(y,()=>p(F()),()=>M(y),w+1)});throw y}).then(y=>h!==i&&i?i:(y&&(y.__esModule||y[Symbol.toStringTag]==="Module")&&(y=y.default),a=y,y)))};return Zg({name:"AsyncComponentWrapper",__asyncLoader:R,get __asyncResolved(){return a},setup(){const h=yQ;if(a)return()=>Xc(a,h);const y=N=>{i=null,DC(N,h,13,!g)};if(E&&h.suspense||PC)return R().then(N=>()=>Xc(N,h)).catch(N=>(y(N),()=>g?SB(g,{error:N}):null));const p=zB(!1),M=zB(),m=zB(!!t);return t&&setTimeout(()=>{m.value=!1},t),e!=null&&setTimeout(()=>{if(!p.value&&!M.value){const N=new Error(`Async component timed out after ${e}ms.`);y(N),M.value=N}},e),R().then(()=>{p.value=!0,h.parent&&Ui(h.parent.vnode)&&Qs(h.parent.update)}).catch(N=>{y(N),M.value=N}),()=>{if(p.value&&a)return Xc(a,h);if(M.value&&g)return SB(g,{error:M.value});if(Q&&!m.value)return SB(Q)}}})}function Xc(A,B){const{ref:Q,props:g,children:t,ce:e}=B.vnode,E=SB(A,g,t);return E.ref=Q,E.ce=e,delete B.vnode.ce,E}const Ui=A=>A.type.__isKeepAlive,RG={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(A,{slots:B}){const Q=ve(),g=Q.ctx;if(!g.renderer)return()=>{const N=B.default&&B.default();return N&&N.length===1?N[0]:N};const t=new Map,e=new Set;let E=null;const I=Q.suspense,{renderer:{p:i,m:a,um:w,o:{createElement:F}}}=g,R=F("div");g.activate=(N,AA,v,x,iA)=>{const cA=N.component;a(N,AA,v,0,I),i(cA.vnode,N,AA,v,cA,I,x,N.slotScopeIds,iA),tg(()=>{cA.isDeactivated=!1,cA.a&&WC(cA.a);const j=N.props&&N.props.onVnodeMounted;j&&Kg(j,cA.parent,N)},I)},g.deactivate=N=>{const AA=N.component;a(N,R,null,1,I),tg(()=>{AA.da&&WC(AA.da);const v=N.props&&N.props.onVnodeUnmounted;v&&Kg(v,AA.parent,N),AA.isDeactivated=!0},I)};function h(N){Sc(N),w(N,Q,I,!0)}function y(N){t.forEach((AA,v)=>{const x=br(AA.type);x&&(!N||!N(x))&&p(v)})}function p(N){const AA=t.get(N);!E||!Ce(AA,E)?h(AA):E&&Sc(E),t.delete(N),e.delete(N)}ut(()=>[A.include,A.exclude],([N,AA])=>{N&&y(v=>yI(N,v)),AA&&y(v=>!yI(AA,v))},{flush:"post",deep:!0});let M=null;const m=()=>{M!=null&&t.set(M,Hc(Q.subTree))};return He(m),ns(m),di(()=>{t.forEach(N=>{const{subTree:AA,suspense:v}=Q,x=Hc(AA);if(N.type===x.type&&N.key===x.key){Sc(x);const iA=x.component.da;iA&&tg(iA,v);return}h(N)})}),()=>{if(M=null,!B.default)return null;const N=B.default(),AA=N[0];if(N.length>1)return E=null,N;if(!ln(AA)||!(AA.shapeFlag&4)&&!(AA.shapeFlag&128))return E=null,AA;let v=Hc(AA);const x=v.type,iA=br(tC(v)?v.type.__asyncResolved||{}:x),{include:cA,exclude:j,max:$}=A;if(cA&&(!iA||!yI(cA,iA))||j&&iA&&yI(j,iA))return E=v,AA;const sA=v.key==null?x:v.key,DA=t.get(sA);return v.el&&(v=Xe(v),AA.shapeFlag&128&&(AA.ssContent=v)),M=sA,DA?(v.el=DA.el,v.component=DA.component,v.transition&&CC(v,v.transition),v.shapeFlag|=512,e.delete(sA),e.add(sA)):(e.add(sA),$&&e.size>parseInt($,10)&&p(e.values().next().value)),v.shapeFlag|=256,E=v,Nd(AA.type)?AA:v}}},YG=RG;function yI(A,B){return jA(A)?A.some(Q=>yI(Q,B)):aQ(A)?A.split(",").includes(B):Qh(A)?A.test(B):!1}function Zd(A,B){Xd(A,"a",B)}function Ld(A,B){Xd(A,"da",B)}function Xd(A,B,Q=yQ){const g=A.__wdc||(A.__wdc=()=>{let t=Q;for(;t;){if(t.isDeactivated)return;t=t.parent}return A()});if(Es(B,g,Q),Q){let t=Q.parent;for(;t&&t.parent;)Ui(t.parent.vnode)&&pG(g,B,Q,t),t=t.parent}}function pG(A,B,Q,g){const t=Es(B,A,g,!0);fi(()=>{il(g[B],t)},Q)}function Sc(A){A.shapeFlag&=-257,A.shapeFlag&=-513}function Hc(A){return A.shapeFlag&128?A.ssContent:A}function Es(A,B,Q=yQ,g=!1){if(Q){const t=Q[A]||(Q[A]=[]),e=B.__weh||(B.__weh=(...E)=>{if(Q.isUnmounted)return;EI(),Fn(Q);const I=Mt(B,Q,A,E);return In(),nI(),I});return g?t.unshift(e):t.push(e),e}}const GE=A=>(B,Q=yQ)=>(!PC||A==="sp")&&Es(A,(...g)=>B(...g),Q),Sd=GE("bm"),He=GE("m"),Hd=GE("bu"),ns=GE("u"),di=GE("bum"),fi=GE("um"),vd=GE("sp"),Wd=GE("rtg"),Td=GE("rtc");function Od(A,B=yQ){Es("ec",A,B)}const bl="components",NG="directives";function Cn(A,B){return ml(bl,A,!0,B)||A}const Vd=Symbol.for("v-ndc");function Cs(A){return aQ(A)?ml(bl,A,!1)||A:A||Vd}function bG(A){return ml(NG,A)}function ml(A,B,Q=!0,g=!1){const t=VQ||yQ;if(t){const e=t.type;if(A===bl){const I=br(e,!1);if(I&&(I===B||I===jg(B)||I===ai(jg(B))))return e}const E=wD(t[A]||e[A],B)||wD(t.appContext[A],B);return!E&&g?e:E}}function wD(A,B){return A&&(A[B]||A[jg(B)]||A[ai(jg(B))])}function VC(A,B,Q,g){let t;const e=Q&&Q[g];if(jA(A)||aQ(A)){t=new Array(A.length);for(let E=0,I=A.length;E<I;E++)t[E]=B(A[E],E,void 0,e&&e[E])}else if(typeof A=="number"){t=new Array(A);for(let E=0;E<A;E++)t[E]=B(E+1,E,void 0,e&&e[E])}else if(KB(A))if(A[Symbol.iterator])t=Array.from(A,(E,I)=>B(E,I,void 0,e&&e[I]));else{const E=Object.keys(A);t=new Array(E.length);for(let I=0,i=E.length;I<i;I++){const a=E[I];t[I]=B(A[a],a,I,e&&e[I])}}else t=[];return Q&&(Q[g]=t),t}function mG(A,B){for(let Q=0;Q<B.length;Q++){const g=B[Q];if(jA(g))for(let t=0;t<g.length;t++)A[g[t].name]=g[t].fn;else g&&(A[g.name]=g.key?(...t)=>{const e=g.fn(...t);return e&&(e.key=g.key),e}:g.fn)}return A}function Is(A,B,Q={},g,t){if(VQ.isCE||VQ.parent&&tC(VQ.parent)&&VQ.parent.isCE)return B!=="default"&&(Q.name=B),SB("slot",Q,g&&g());let e=A[B];e&&e._c&&(e._d=!1),fB();const E=e&&xd(e(Q)),I=Ot(sQ,{key:Q.key||E&&E.key||`_${B}`},E||(g?g():[]),E&&A._===1?64:-2);return!t&&I.scopeId&&(I.slotScopeIds=[I.scopeId+"-s"]),e&&e._c&&(e._d=!0),I}function xd(A){return A.some(B=>ln(B)?!(B.type===rg||B.type===sQ&&!xd(B.children)):!0)?A:null}function zd(A,B){const Q={};for(const g in A)Q[B&&/[A-Z]/.test(g)?`on:${g}`:XI(g)]=A[g];return Q}const fr=A=>A?af(A)?os(A)||A.proxy:fr(A.parent):null,SI=eQ(Object.create(null),{$:A=>A,$el:A=>A.vnode.el,$data:A=>A.data,$props:A=>A.props,$attrs:A=>A.attrs,$slots:A=>A.slots,$refs:A=>A.refs,$parent:A=>fr(A.parent),$root:A=>fr(A.root),$emit:A=>A.emit,$options:A=>Jl(A),$forceUpdate:A=>A.f||(A.f=()=>Qs(A.update)),$nextTick:A=>A.n||(A.n=II.bind(A.proxy)),$watch:A=>uG.bind(A)}),vc=(A,B)=>A!==xB&&!A.__isScriptSetup&&yB(A,B),Mr={get({_:A},B){const{ctx:Q,setupState:g,data:t,props:e,accessCache:E,type:I,appContext:i}=A;let a;if(B[0]!=="$"){const h=E[B];if(h!==void 0)switch(h){case 1:return g[B];case 2:return t[B];case 4:return Q[B];case 3:return e[B]}else{if(vc(g,B))return E[B]=1,g[B];if(t!==xB&&yB(t,B))return E[B]=2,t[B];if((a=A.propsOptions[0])&&yB(a,B))return E[B]=3,e[B];if(Q!==xB&&yB(Q,B))return E[B]=4,Q[B];ur&&(E[B]=0)}}const w=SI[B];let F,R;if(w)return B==="$attrs"&&qg(A,"get",B),w(A);if((F=I.__cssModules)&&(F=F[B]))return F;if(Q!==xB&&yB(Q,B))return E[B]=4,Q[B];if(R=i.config.globalProperties,yB(R,B))return R[B]},set({_:A},B,Q){const{data:g,setupState:t,ctx:e}=A;return vc(t,B)?(t[B]=Q,!0):g!==xB&&yB(g,B)?(g[B]=Q,!0):yB(A.props,B)||B[0]==="$"&&B.slice(1)in A?!1:(e[B]=Q,!0)},has({_:{data:A,setupState:B,accessCache:Q,ctx:g,appContext:t,propsOptions:e}},E){let I;return!!Q[E]||A!==xB&&yB(A,E)||vc(B,E)||(I=e[0])&&yB(I,E)||yB(g,E)||yB(SI,E)||yB(t.config.globalProperties,E)},defineProperty(A,B,Q){return Q.get!=null?A._.accessCache[B]=0:yB(Q,"value")&&this.set(A,B,Q.value,null),Reflect.defineProperty(A,B,Q)}},JG=eQ({},Mr,{get(A,B){if(B!==Symbol.unscopables)return Mr.get(A,B,A)},has(A,B){return B[0]!=="_"&&!nh(B)}});function yG(){return null}function kG(){return null}function ZG(A){}function LG(A){}function XG(){return null}function SG(){}function HG(A,B){return null}function vG(){return Kd().slots}function WG(){return Kd().attrs}function TG(A,B,Q){const g=ve();if(Q&&Q.local){const t=zB(A[B]);return ut(()=>A[B],e=>t.value=e),ut(t,e=>{e!==A[B]&&g.emit(`update:${B}`,e)}),t}else return{__v_isRef:!0,get value(){return A[B]},set value(t){g.emit(`update:${B}`,t)}}}function Kd(){const A=ve();return A.setupContext||(A.setupContext=rf(A))}function Qi(A){return jA(A)?A.reduce((B,Q)=>(B[Q]=null,B),{}):A}function OG(A,B){const Q=Qi(A);for(const g in B){if(g.startsWith("__skip"))continue;let t=Q[g];t?jA(t)||rB(t)?t=Q[g]={type:t,default:B[g]}:t.default=B[g]:t===null&&(t=Q[g]={default:B[g]}),t&&B[`__skip_${g}`]&&(t.skipFactory=!0)}return Q}function VG(A,B){return!A||!B?A||B:jA(A)&&jA(B)?A.concat(B):eQ({},Qi(A),Qi(B))}function xG(A,B){const Q={};for(const g in A)B.includes(g)||Object.defineProperty(Q,g,{enumerable:!0,get:()=>A[g]});return Q}function zG(A){const B=ve();let Q=A();return In(),ol(Q)&&(Q=Q.catch(g=>{throw Fn(B),g})),[Q,()=>Fn(B)]}let ur=!0;function KG(A){const B=Jl(A),Q=A.proxy,g=A.ctx;ur=!1,B.beforeCreate&&cD(B.beforeCreate,A,"bc");const{data:t,computed:e,methods:E,watch:I,provide:i,inject:a,created:w,beforeMount:F,mounted:R,beforeUpdate:h,updated:y,activated:p,deactivated:M,beforeDestroy:m,beforeUnmount:N,destroyed:AA,unmounted:v,render:x,renderTracked:iA,renderTriggered:cA,errorCaptured:j,serverPrefetch:$,expose:sA,inheritAttrs:DA,components:lA,directives:yA,filters:uA}=B;if(a&&PG(a,g,null),E)for(const HA in E){const gB=E[HA];rB(gB)&&(g[HA]=gB.bind(Q))}if(t){const HA=t.call(Q,Q);KB(HA)&&(A.data=CI(HA))}if(ur=!0,e)for(const HA in e){const gB=e[HA],MB=rB(gB)?gB.bind(Q,Q):rB(gB.get)?gB.get.bind(Q,Q):oe,wB=!rB(gB)&&rB(gB.set)?gB.set.bind(Q):oe,uB=cg({get:MB,set:wB});Object.defineProperty(g,HA,{enumerable:!0,configurable:!0,get:()=>uB.value,set:RB=>uB.value=RB})}if(I)for(const HA in I)Pd(I[HA],g,Q,HA);if(i){const HA=rB(i)?i.call(Q):i;Reflect.ownKeys(HA).forEach(gB=>{HI(gB,HA[gB])})}w&&cD(w,A,"c");function XA(HA,gB){jA(gB)?gB.forEach(MB=>HA(MB.bind(Q))):gB&&HA(gB.bind(Q))}if(XA(Sd,F),XA(He,R),XA(Hd,h),XA(ns,y),XA(Zd,p),XA(Ld,M),XA(Od,j),XA(Td,iA),XA(Wd,cA),XA(di,N),XA(fi,v),XA(vd,$),jA(sA))if(sA.length){const HA=A.exposed||(A.exposed={});sA.forEach(gB=>{Object.defineProperty(HA,gB,{get:()=>Q[gB],set:MB=>Q[gB]=MB})})}else A.exposed||(A.exposed={});x&&A.render===oe&&(A.render=x),DA!=null&&(A.inheritAttrs=DA),lA&&(A.components=lA),yA&&(A.directives=yA)}function PG(A,B,Q=oe){jA(A)&&(A=hr(A));for(const g in A){const t=A[g];let e;KB(t)?"default"in t?e=ht(t.from||g,t.default,!0):e=ht(t.from||g):e=ht(t),fQ(e)?Object.defineProperty(B,g,{enumerable:!0,configurable:!0,get:()=>e.value,set:E=>e.value=E}):B[g]=e}}function cD(A,B,Q){Mt(jA(A)?A.map(g=>g.bind(B.proxy)):A.bind(B.proxy),B,Q)}function Pd(A,B,Q,g){const t=g.includes(".")?Jd(Q,g):()=>Q[g];if(aQ(A)){const e=B[A];rB(e)&&ut(t,e)}else if(rB(A))ut(t,A.bind(Q));else if(KB(A))if(jA(A))A.forEach(e=>Pd(e,B,Q,g));else{const e=rB(A.handler)?A.handler.bind(Q):B[A.handler];rB(e)&&ut(t,e,A)}}function Jl(A){const B=A.type,{mixins:Q,extends:g}=B,{mixins:t,optionsCache:e,config:{optionMergeStrategies:E}}=A.appContext,I=e.get(B);let i;return I?i=I:!t.length&&!Q&&!g?i=B:(i={},t.length&&t.forEach(a=>Xo(i,a,E,!0)),Xo(i,B,E)),KB(B)&&e.set(B,i),i}function Xo(A,B,Q,g=!1){const{mixins:t,extends:e}=B;e&&Xo(A,e,Q,!0),t&&t.forEach(E=>Xo(A,E,Q,!0));for(const E in B)if(!(g&&E==="expose")){const I=jG[E]||Q&&Q[E];A[E]=I?I(A[E],B[E]):B[E]}return A}const jG={data:rD,props:lD,emits:lD,methods:kI,computed:kI,beforeCreate:mg,created:mg,beforeMount:mg,mounted:mg,beforeUpdate:mg,updated:mg,beforeDestroy:mg,beforeUnmount:mg,destroyed:mg,unmounted:mg,activated:mg,deactivated:mg,errorCaptured:mg,serverPrefetch:mg,components:kI,directives:kI,watch:_G,provide:rD,inject:qG};function rD(A,B){return B?A?function(){return eQ(rB(A)?A.call(this,this):A,rB(B)?B.call(this,this):B)}:B:A}function qG(A,B){return kI(hr(A),hr(B))}function hr(A){if(jA(A)){const B={};for(let Q=0;Q<A.length;Q++)B[A[Q]]=A[Q];return B}return A}function mg(A,B){return A?[...new Set([].concat(A,B))]:B}function kI(A,B){return A?eQ(Object.create(null),A,B):B}function lD(A,B){return A?jA(A)&&jA(B)?[...new Set([...A,...B])]:eQ(Object.create(null),Qi(A),Qi(B??{})):B}function _G(A,B){if(!A)return B;if(!B)return A;const Q=eQ(Object.create(null),A);for(const g in B)Q[g]=mg(A[g],B[g]);return Q}function jd(){return{app:null,config:{isNativeTag:$u,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $G=0;function AR(A,B){return function(g,t=null){rB(g)||(g=eQ({},g)),t!=null&&!KB(t)&&(t=null);const e=jd(),E=new Set;let I=!1;const i=e.app={_uid:$G++,_component:g,_props:t,_container:null,_context:e,_instance:null,version:Uf,get config(){return e.config},set config(a){},use(a,...w){return E.has(a)||(a&&rB(a.install)?(E.add(a),a.install(i,...w)):rB(a)&&(E.add(a),a(i,...w))),i},mixin(a){return e.mixins.includes(a)||e.mixins.push(a),i},component(a,w){return w?(e.components[a]=w,i):e.components[a]},directive(a,w){return w?(e.directives[a]=w,i):e.directives[a]},mount(a,w,F){if(!I){const R=SB(g,t);return R.appContext=e,w&&B?B(R,a):A(R,a,F),I=!0,i._container=a,a.__vue_app__=i,os(R.component)||R.component.proxy}},unmount(){I&&(A(null,i._container),delete i._container.__vue_app__)},provide(a,w){return e.provides[a]=w,i},runWithContext(a){gi=i;try{return a()}finally{gi=null}}};return i}}let gi=null;function HI(A,B){if(yQ){let Q=yQ.provides;const g=yQ.parent&&yQ.parent.provides;g===Q&&(Q=yQ.provides=Object.create(g)),Q[A]=B}}function ht(A,B,Q=!1){const g=yQ||VQ;if(g||gi){const t=g?g.parent==null?g.vnode.appContext&&g.vnode.appContext.provides:g.parent.provides:gi._context.provides;if(t&&A in t)return t[A];if(arguments.length>1)return Q&&rB(B)?B.call(g&&g.proxy):B}}function qd(){return!!(yQ||VQ||gi)}function BR(A,B,Q,g=!1){const t={},e={};Jo(e,is,1),A.propsDefaults=Object.create(null),_d(A,B,t,e);for(const E in A.propsOptions[0])E in t||(t[E]=void 0);Q?A.props=g?t:Fl(t):A.type.props?A.props=t:A.props=e,A.attrs=e}function QR(A,B,Q,g){const{props:t,attrs:e,vnode:{patchFlag:E}}=A,I=NB(t),[i]=A.propsOptions;let a=!1;if((g||E>0)&&!(E&16)){if(E&8){const w=A.vnode.dynamicProps;for(let F=0;F<w.length;F++){let R=w[F];if(gs(A.emitsOptions,R))continue;const h=B[R];if(i)if(yB(e,R))h!==e[R]&&(e[R]=h,a=!0);else{const y=jg(R);t[y]=Gr(i,I,y,h,A,!1)}else h!==e[R]&&(e[R]=h,a=!0)}}}else{_d(A,B,t,e)&&(a=!0);let w;for(const F in I)(!B||!yB(B,F)&&((w=Tt(F))===F||!yB(B,w)))&&(i?Q&&(Q[F]!==void 0||Q[w]!==void 0)&&(t[F]=Gr(i,I,F,void 0,A,!0)):delete t[F]);if(e!==I)for(const F in e)(!B||!yB(B,F))&&(delete e[F],a=!0)}a&&ME(A,"set","$attrs")}function _d(A,B,Q,g){const[t,e]=A.propsOptions;let E=!1,I;if(B)for(let i in B){if(LI(i))continue;const a=B[i];let w;t&&yB(t,w=jg(i))?!e||!e.includes(w)?Q[w]=a:(I||(I={}))[w]=a:gs(A.emitsOptions,i)||(!(i in g)||a!==g[i])&&(g[i]=a,E=!0)}if(e){const i=NB(Q),a=I||xB;for(let w=0;w<e.length;w++){const F=e[w];Q[F]=Gr(t,i,F,a[F],A,!yB(a,F))}}return E}function Gr(A,B,Q,g,t,e){const E=A[Q];if(E!=null){const I=yB(E,"default");if(I&&g===void 0){const i=E.default;if(E.type!==Function&&!E.skipFactory&&rB(i)){const{propsDefaults:a}=t;Q in a?g=a[Q]:(Fn(t),g=a[Q]=i.call(null,B),In())}else g=i}E[0]&&(e&&!I?g=!1:E[1]&&(g===""||g===Tt(Q))&&(g=!0))}return g}function $d(A,B,Q=!1){const g=B.propsCache,t=g.get(A);if(t)return t;const e=A.props,E={},I=[];let i=!1;if(!rB(A)){const w=F=>{i=!0;const[R,h]=$d(F,B,!0);eQ(E,R),h&&I.push(...h)};!Q&&B.mixins.length&&B.mixins.forEach(w),A.extends&&w(A.extends),A.mixins&&A.mixins.forEach(w)}if(!e&&!i)return KB(A)&&g.set(A,HC),HC;if(jA(e))for(let w=0;w<e.length;w++){const F=jg(e[w]);FD(F)&&(E[F]=xB)}else if(e)for(const w in e){const F=jg(w);if(FD(F)){const R=e[w],h=E[F]=jA(R)||rB(R)?{type:R}:eQ({},R);if(h){const y=dD(Boolean,h.type),p=dD(String,h.type);h[0]=y>-1,h[1]=p<0||y<p,(y>-1||yB(h,"default"))&&I.push(F)}}}const a=[E,I];return KB(A)&&g.set(A,a),a}function FD(A){return A[0]!=="$"}function DD(A){const B=A&&A.toString().match(/^\s*(function|class) (\w+)/);return B?B[2]:A===null?"null":""}function UD(A,B){return DD(A)===DD(B)}function dD(A,B){return jA(B)?B.findIndex(Q=>UD(Q,A)):rB(B)&&UD(B,A)?0:-1}const Af=A=>A[0]==="_"||A==="$stable",yl=A=>jA(A)?A.map(Dt):[Dt(A)],gR=(A,B,Q)=>{if(B._n)return B;const g=hE((...t)=>yl(B(...t)),Q);return g._c=!1,g},Bf=(A,B,Q)=>{const g=A._ctx;for(const t in A){if(Af(t))continue;const e=A[t];if(rB(e))B[t]=gR(t,e,g);else if(e!=null){const E=yl(e);B[t]=()=>E}}},Qf=(A,B)=>{const Q=yl(B);A.slots.default=()=>Q},tR=(A,B)=>{if(A.vnode.shapeFlag&32){const Q=B._;Q?(A.slots=NB(B),Jo(B,"_",Q)):Bf(B,A.slots={})}else A.slots={},B&&Qf(A,B);Jo(A.slots,is,1)},eR=(A,B,Q)=>{const{vnode:g,slots:t}=A;let e=!0,E=xB;if(g.shapeFlag&32){const I=B._;I?Q&&I===1?e=!1:(eQ(t,B),!Q&&I===1&&delete t._):(e=!B.$stable,Bf(B,t)),E=B}else B&&(Qf(A,B),E={default:1});if(e)for(const I in t)!Af(I)&&!(I in E)&&delete t[I]};function So(A,B,Q,g,t=!1){if(jA(A)){A.forEach((R,h)=>So(R,B&&(jA(B)?B[h]:B),Q,g,t));return}if(tC(g)&&!t)return;const e=g.shapeFlag&4?os(g.component)||g.component.proxy:g.el,E=t?null:e,{i:I,r:i}=A,a=B&&B.r,w=I.refs===xB?I.refs={}:I.refs,F=I.setupState;if(a!=null&&a!==i&&(aQ(a)?(w[a]=null,yB(F,a)&&(F[a]=null)):fQ(a)&&(a.value=null)),rB(i))DE(i,I,12,[E,w]);else{const R=aQ(i),h=fQ(i);if(R||h){const y=()=>{if(A.f){const p=R?yB(F,i)?F[i]:w[i]:i.value;t?jA(p)&&il(p,e):jA(p)?p.includes(e)||p.push(e):R?(w[i]=[e],yB(F,i)&&(F[i]=w[i])):(i.value=[e],A.k&&(w[A.k]=i.value))}else R?(w[i]=E,yB(F,i)&&(F[i]=E)):h&&(i.value=E,A.k&&(w[A.k]=E))};E?(y.id=-1,tg(y,Q)):y()}}}let qE=!1;const lo=A=>/svg/.test(A.namespaceURI)&&A.tagName!=="foreignObject",Fo=A=>A.nodeType===8;function ER(A){const{mt:B,p:Q,o:{patchProp:g,createText:t,nextSibling:e,parentNode:E,remove:I,insert:i,createComment:a}}=A,w=(m,N)=>{if(!N.hasChildNodes()){Q(null,m,N),Lo(),N._vnode=m;return}qE=!1,F(N.firstChild,m,null,null,null),Lo(),N._vnode=m,qE&&console.error("Hydration completed but contains mismatches.")},F=(m,N,AA,v,x,iA=!1)=>{const cA=Fo(m)&&m.data==="[",j=()=>p(m,N,AA,v,x,cA),{type:$,ref:sA,shapeFlag:DA,patchFlag:lA}=N;let yA=m.nodeType;N.el=m,lA===-2&&(iA=!1,N.dynamicChildren=null);let uA=null;switch($){case IC:yA!==3?N.children===""?(i(N.el=t(""),E(m),m),uA=m):uA=j():(m.data!==N.children&&(qE=!0,m.data=N.children),uA=e(m));break;case rg:yA!==8||cA?uA=j():uA=e(m);break;case eC:if(cA&&(m=e(m),yA=m.nodeType),yA===1||yA===3){uA=m;const EB=!N.children.length;for(let XA=0;XA<N.staticCount;XA++)EB&&(N.children+=uA.nodeType===1?uA.outerHTML:uA.data),XA===N.staticCount-1&&(N.anchor=uA),uA=e(uA);return cA?e(uA):uA}else j();break;case sQ:cA?uA=y(m,N,AA,v,x,iA):uA=j();break;default:if(DA&1)yA!==1||N.type.toLowerCase()!==m.tagName.toLowerCase()?uA=j():uA=R(m,N,AA,v,x,iA);else if(DA&6){N.slotScopeIds=x;const EB=E(m);if(B(N,EB,null,AA,v,lo(EB),iA),uA=cA?M(m):e(m),uA&&Fo(uA)&&uA.data==="teleport end"&&(uA=e(uA)),tC(N)){let XA;cA?(XA=SB(sQ),XA.anchor=uA?uA.previousSibling:EB.lastChild):XA=m.nodeType===3?UC(""):SB("div"),XA.el=m,N.component.subTree=XA}}else DA&64?yA!==8?uA=j():uA=N.type.hydrate(m,N,AA,v,x,iA,A,h):DA&128&&(uA=N.type.hydrate(m,N,AA,v,lo(E(m)),x,iA,A,F))}return sA!=null&&So(sA,null,v,N),uA},R=(m,N,AA,v,x,iA)=>{iA=iA||!!N.dynamicChildren;const{type:cA,props:j,patchFlag:$,shapeFlag:sA,dirs:DA}=N,lA=cA==="input"&&DA||cA==="option";if(lA||$!==-1){if(DA&&me(N,null,AA,"created"),j)if(lA||!iA||$&48)for(const uA in j)(lA&&uA.endsWith("value")||si(uA)&&!LI(uA))&&g(m,uA,null,j[uA],!1,void 0,AA);else j.onClick&&g(m,"onClick",null,j.onClick,!1,void 0,AA);let yA;if((yA=j&&j.onVnodeBeforeMount)&&Kg(yA,AA,N),DA&&me(N,null,AA,"beforeMount"),((yA=j&&j.onVnodeMounted)||DA)&&bd(()=>{yA&&Kg(yA,AA,N),DA&&me(N,null,AA,"mounted")},v),sA&16&&!(j&&(j.innerHTML||j.textContent))){let uA=h(m.firstChild,N,m,AA,v,x,iA);for(;uA;){qE=!0;const EB=uA;uA=uA.nextSibling,I(EB)}}else sA&8&&m.textContent!==N.children&&(qE=!0,m.textContent=N.children)}return m.nextSibling},h=(m,N,AA,v,x,iA,cA)=>{cA=cA||!!N.dynamicChildren;const j=N.children,$=j.length;for(let sA=0;sA<$;sA++){const DA=cA?j[sA]:j[sA]=Dt(j[sA]);if(m)m=F(m,DA,v,x,iA,cA);else{if(DA.type===IC&&!DA.children)continue;qE=!0,Q(null,DA,AA,null,v,x,lo(AA),iA)}}return m},y=(m,N,AA,v,x,iA)=>{const{slotScopeIds:cA}=N;cA&&(x=x?x.concat(cA):cA);const j=E(m),$=h(e(m),N,j,AA,v,x,iA);return $&&Fo($)&&$.data==="]"?e(N.anchor=$):(qE=!0,i(N.anchor=a("]"),j,$),$)},p=(m,N,AA,v,x,iA)=>{if(qE=!0,N.el=null,iA){const $=M(m);for(;;){const sA=e(m);if(sA&&sA!==$)I(sA);else break}}const cA=e(m),j=E(m);return I(m),Q(null,N,j,cA,AA,v,lo(j),x),cA},M=m=>{let N=0;for(;m;)if(m=e(m),m&&Fo(m)&&(m.data==="["&&N++,m.data==="]")){if(N===0)return e(m);N--}return m};return[w,F]}const tg=bd;function gf(A){return ef(A)}function tf(A){return ef(A,ER)}function ef(A,B){const Q=lr();Q.__VUE__=!0;const{insert:g,remove:t,patchProp:e,createElement:E,createText:I,createComment:i,setText:a,setElementText:w,parentNode:F,nextSibling:R,setScopeId:h=oe,insertStaticContent:y}=A,p=(L,H,K,nA=null,rA=null,aA=null,oA=!1,MA=null,CA=!!H.dynamicChildren)=>{if(L===H)return;L&&!Ce(L,H)&&(nA=z(L),RB(L,rA,aA,!0),L=null),H.patchFlag===-2&&(CA=!1,H.dynamicChildren=null);const{type:QA,ref:YA,shapeFlag:SA}=H;switch(QA){case IC:M(L,H,K,nA);break;case rg:m(L,H,K,nA);break;case eC:L==null&&N(H,K,nA,oA);break;case sQ:lA(L,H,K,nA,rA,aA,oA,MA,CA);break;default:SA&1?x(L,H,K,nA,rA,aA,oA,MA,CA):SA&6?yA(L,H,K,nA,rA,aA,oA,MA,CA):(SA&64||SA&128)&&QA.process(L,H,K,nA,rA,aA,oA,MA,CA,IA)}YA!=null&&rA&&So(YA,L&&L.ref,aA,H||L,!H)},M=(L,H,K,nA)=>{if(L==null)g(H.el=I(H.children),K,nA);else{const rA=H.el=L.el;H.children!==L.children&&a(rA,H.children)}},m=(L,H,K,nA)=>{L==null?g(H.el=i(H.children||""),K,nA):H.el=L.el},N=(L,H,K,nA)=>{[L.el,L.anchor]=y(L.children,H,K,nA,L.el,L.anchor)},AA=({el:L,anchor:H},K,nA)=>{let rA;for(;L&&L!==H;)rA=R(L),g(L,K,nA),L=rA;g(H,K,nA)},v=({el:L,anchor:H})=>{let K;for(;L&&L!==H;)K=R(L),t(L),L=K;t(H)},x=(L,H,K,nA,rA,aA,oA,MA,CA)=>{oA=oA||H.type==="svg",L==null?iA(H,K,nA,rA,aA,oA,MA,CA):$(L,H,rA,aA,oA,MA,CA)},iA=(L,H,K,nA,rA,aA,oA,MA)=>{let CA,QA;const{type:YA,props:SA,shapeFlag:TA,transition:KA,dirs:VA}=L;if(CA=L.el=E(L.type,aA,SA&&SA.is,SA),TA&8?w(CA,L.children):TA&16&&j(L.children,CA,null,nA,rA,aA&&YA!=="foreignObject",oA,MA),VA&&me(L,null,nA,"created"),cA(CA,L,L.scopeId,oA,nA),SA){for(const k in SA)k!=="value"&&!LI(k)&&e(CA,k,null,SA[k],aA,L.children,nA,rA,mA);"value"in SA&&e(CA,"value",null,SA.value),(QA=SA.onVnodeBeforeMount)&&Kg(QA,nA,L)}VA&&me(L,null,nA,"beforeMount");const lB=(!rA||rA&&!rA.pendingBranch)&&KA&&!KA.persisted;lB&&KA.beforeEnter(CA),g(CA,H,K),((QA=SA&&SA.onVnodeMounted)||lB||VA)&&tg(()=>{QA&&Kg(QA,nA,L),lB&&KA.enter(CA),VA&&me(L,null,nA,"mounted")},rA)},cA=(L,H,K,nA,rA)=>{if(K&&h(L,K),nA)for(let aA=0;aA<nA.length;aA++)h(L,nA[aA]);if(rA){let aA=rA.subTree;if(H===aA){const oA=rA.vnode;cA(L,oA,oA.scopeId,oA.slotScopeIds,rA.parent)}}},j=(L,H,K,nA,rA,aA,oA,MA,CA=0)=>{for(let QA=CA;QA<L.length;QA++){const YA=L[QA]=MA?gn(L[QA]):Dt(L[QA]);p(null,YA,H,K,nA,rA,aA,oA,MA)}},$=(L,H,K,nA,rA,aA,oA)=>{const MA=H.el=L.el;let{patchFlag:CA,dynamicChildren:QA,dirs:YA}=H;CA|=L.patchFlag&16;const SA=L.props||xB,TA=H.props||xB;let KA;K&&Pn(K,!1),(KA=TA.onVnodeBeforeUpdate)&&Kg(KA,K,H,L),YA&&me(H,L,K,"beforeUpdate"),K&&Pn(K,!0);const VA=rA&&H.type!=="foreignObject";if(QA?sA(L.dynamicChildren,QA,MA,K,nA,VA,aA):oA||gB(L,H,MA,null,K,nA,VA,aA,!1),CA>0){if(CA&16)DA(MA,H,SA,TA,K,nA,rA);else if(CA&2&&SA.class!==TA.class&&e(MA,"class",null,TA.class,rA),CA&4&&e(MA,"style",SA.style,TA.style,rA),CA&8){const lB=H.dynamicProps;for(let k=0;k<lB.length;k++){const U=lB[k],d=SA[U],G=TA[U];(G!==d||U==="value")&&e(MA,U,d,G,rA,L.children,K,nA,mA)}}CA&1&&L.children!==H.children&&w(MA,H.children)}else!oA&&QA==null&&DA(MA,H,SA,TA,K,nA,rA);((KA=TA.onVnodeUpdated)||YA)&&tg(()=>{KA&&Kg(KA,K,H,L),YA&&me(H,L,K,"updated")},nA)},sA=(L,H,K,nA,rA,aA,oA)=>{for(let MA=0;MA<H.length;MA++){const CA=L[MA],QA=H[MA],YA=CA.el&&(CA.type===sQ||!Ce(CA,QA)||CA.shapeFlag&70)?F(CA.el):K;p(CA,QA,YA,null,nA,rA,aA,oA,!0)}},DA=(L,H,K,nA,rA,aA,oA)=>{if(K!==nA){if(K!==xB)for(const MA in K)!LI(MA)&&!(MA in nA)&&e(L,MA,K[MA],null,oA,H.children,rA,aA,mA);for(const MA in nA){if(LI(MA))continue;const CA=nA[MA],QA=K[MA];CA!==QA&&MA!=="value"&&e(L,MA,QA,CA,oA,H.children,rA,aA,mA)}"value"in nA&&e(L,"value",K.value,nA.value)}},lA=(L,H,K,nA,rA,aA,oA,MA,CA)=>{const QA=H.el=L?L.el:I(""),YA=H.anchor=L?L.anchor:I("");let{patchFlag:SA,dynamicChildren:TA,slotScopeIds:KA}=H;KA&&(MA=MA?MA.concat(KA):KA),L==null?(g(QA,K,nA),g(YA,K,nA),j(H.children,K,YA,rA,aA,oA,MA,CA)):SA>0&&SA&64&&TA&&L.dynamicChildren?(sA(L.dynamicChildren,TA,K,rA,aA,oA,MA),(H.key!=null||rA&&H===rA.subTree)&&kl(L,H,!0)):gB(L,H,K,YA,rA,aA,oA,MA,CA)},yA=(L,H,K,nA,rA,aA,oA,MA,CA)=>{H.slotScopeIds=MA,L==null?H.shapeFlag&512?rA.ctx.activate(H,K,nA,oA,CA):uA(H,K,nA,rA,aA,oA,CA):EB(L,H,CA)},uA=(L,H,K,nA,rA,aA,oA)=>{const MA=L.component=sf(L,nA,rA);if(Ui(L)&&(MA.ctx.renderer=IA),wf(MA),MA.asyncDep){if(rA&&rA.registerDep(MA,XA),!L.el){const CA=MA.subTree=SB(rg);m(null,CA,H,K)}return}XA(MA,L,H,K,rA,aA,oA)},EB=(L,H,K)=>{const nA=H.component=L.component;if(wG(L,H,K))if(nA.asyncDep&&!nA.asyncResolved){HA(nA,H,K);return}else nA.next=H,nG(nA.update),nA.update();else H.el=L.el,nA.vnode=H},XA=(L,H,K,nA,rA,aA,oA)=>{const MA=()=>{if(L.isMounted){let{next:YA,bu:SA,u:TA,parent:KA,vnode:VA}=L,lB=YA,k;Pn(L,!1),YA?(YA.el=VA.el,HA(L,YA,oA)):YA=VA,SA&&WC(SA),(k=YA.props&&YA.props.onVnodeBeforeUpdate)&&Kg(k,KA,YA,VA),Pn(L,!0);const U=Mo(L),d=L.subTree;L.subTree=U,p(d,U,F(d.el),z(d),L,rA,aA),YA.el=U.el,lB===null&&Rl(L,U.el),TA&&tg(TA,rA),(k=YA.props&&YA.props.onVnodeUpdated)&&tg(()=>Kg(k,KA,YA,VA),rA)}else{let YA;const{el:SA,props:TA}=H,{bm:KA,m:VA,parent:lB}=L,k=tC(H);if(Pn(L,!1),KA&&WC(KA),!k&&(YA=TA&&TA.onVnodeBeforeMount)&&Kg(YA,lB,H),Pn(L,!0),SA&&EA){const U=()=>{L.subTree=Mo(L),EA(SA,L.subTree,L,rA,null)};k?H.type.__asyncLoader().then(()=>!L.isUnmounted&&U()):U()}else{const U=L.subTree=Mo(L);p(null,U,K,nA,L,rA,aA),H.el=U.el}if(VA&&tg(VA,rA),!k&&(YA=TA&&TA.onVnodeMounted)){const U=H;tg(()=>Kg(YA,lB,U),rA)}(H.shapeFlag&256||lB&&tC(lB.vnode)&&lB.vnode.shapeFlag&256)&&L.a&&tg(L.a,rA),L.isMounted=!0,H=K=nA=null}},CA=L.effect=new wi(MA,()=>Qs(QA),L.scope),QA=L.update=()=>CA.run();QA.id=L.uid,Pn(L,!0),QA()},HA=(L,H,K)=>{H.component=L;const nA=L.vnode.props;L.vnode=H,L.next=null,QR(L,H.props,nA,K),eR(L,H.children,K),EI(),iD(),nI()},gB=(L,H,K,nA,rA,aA,oA,MA,CA=!1)=>{const QA=L&&L.children,YA=L?L.shapeFlag:0,SA=H.children,{patchFlag:TA,shapeFlag:KA}=H;if(TA>0){if(TA&128){wB(QA,SA,K,nA,rA,aA,oA,MA,CA);return}else if(TA&256){MB(QA,SA,K,nA,rA,aA,oA,MA,CA);return}}KA&8?(YA&16&&mA(QA,rA,aA),SA!==QA&&w(K,SA)):YA&16?KA&16?wB(QA,SA,K,nA,rA,aA,oA,MA,CA):mA(QA,rA,aA,!0):(YA&8&&w(K,""),KA&16&&j(SA,K,nA,rA,aA,oA,MA,CA))},MB=(L,H,K,nA,rA,aA,oA,MA,CA)=>{L=L||HC,H=H||HC;const QA=L.length,YA=H.length,SA=Math.min(QA,YA);let TA;for(TA=0;TA<SA;TA++){const KA=H[TA]=CA?gn(H[TA]):Dt(H[TA]);p(L[TA],KA,K,null,rA,aA,oA,MA,CA)}QA>YA?mA(L,rA,aA,!0,!1,SA):j(H,K,nA,rA,aA,oA,MA,CA,SA)},wB=(L,H,K,nA,rA,aA,oA,MA,CA)=>{let QA=0;const YA=H.length;let SA=L.length-1,TA=YA-1;for(;QA<=SA&&QA<=TA;){const KA=L[QA],VA=H[QA]=CA?gn(H[QA]):Dt(H[QA]);if(Ce(KA,VA))p(KA,VA,K,null,rA,aA,oA,MA,CA);else break;QA++}for(;QA<=SA&&QA<=TA;){const KA=L[SA],VA=H[TA]=CA?gn(H[TA]):Dt(H[TA]);if(Ce(KA,VA))p(KA,VA,K,null,rA,aA,oA,MA,CA);else break;SA--,TA--}if(QA>SA){if(QA<=TA){const KA=TA+1,VA=KA<YA?H[KA].el:nA;for(;QA<=TA;)p(null,H[QA]=CA?gn(H[QA]):Dt(H[QA]),K,VA,rA,aA,oA,MA,CA),QA++}}else if(QA>TA)for(;QA<=SA;)RB(L[QA],rA,aA,!0),QA++;else{const KA=QA,VA=QA,lB=new Map;for(QA=VA;QA<=TA;QA++){const wA=H[QA]=CA?gn(H[QA]):Dt(H[QA]);wA.key!=null&&lB.set(wA.key,QA)}let k,U=0;const d=TA-VA+1;let G=!1,b=0;const q=new Array(d);for(QA=0;QA<d;QA++)q[QA]=0;for(QA=KA;QA<=SA;QA++){const wA=L[QA];if(U>=d){RB(wA,rA,aA,!0);continue}let pA;if(wA.key!=null)pA=lB.get(wA.key);else for(k=VA;k<=TA;k++)if(q[k-VA]===0&&Ce(wA,H[k])){pA=k;break}pA===void 0?RB(wA,rA,aA,!0):(q[pA-VA]=QA+1,pA>=b?b=pA:G=!0,p(wA,H[pA],K,null,rA,aA,oA,MA,CA),U++)}const dA=G?nR(q):HC;for(k=dA.length-1,QA=d-1;QA>=0;QA--){const wA=VA+QA,pA=H[wA],GA=wA+1<YA?H[wA+1].el:nA;q[QA]===0?p(null,pA,K,GA,rA,aA,oA,MA,CA):G&&(k<0||QA!==dA[k]?uB(pA,K,GA,2):k--)}}},uB=(L,H,K,nA,rA=null)=>{const{el:aA,type:oA,transition:MA,children:CA,shapeFlag:QA}=L;if(QA&6){uB(L.component.subTree,H,K,nA);return}if(QA&128){L.suspense.move(H,K,nA);return}if(QA&64){oA.move(L,H,K,IA);return}if(oA===sQ){g(aA,H,K);for(let SA=0;SA<CA.length;SA++)uB(CA[SA],H,K,nA);g(L.anchor,H,K);return}if(oA===eC){AA(L,H,K);return}if(nA!==2&&QA&1&&MA)if(nA===0)MA.beforeEnter(aA),g(aA,H,K),tg(()=>MA.enter(aA),rA);else{const{leave:SA,delayLeave:TA,afterLeave:KA}=MA,VA=()=>g(aA,H,K),lB=()=>{SA(aA,()=>{VA(),KA&&KA()})};TA?TA(aA,VA,lB):lB()}else g(aA,H,K)},RB=(L,H,K,nA=!1,rA=!1)=>{const{type:aA,props:oA,ref:MA,children:CA,dynamicChildren:QA,shapeFlag:YA,patchFlag:SA,dirs:TA}=L;if(MA!=null&&So(MA,null,K,L,!0),YA&256){H.ctx.deactivate(L);return}const KA=YA&1&&TA,VA=!tC(L);let lB;if(VA&&(lB=oA&&oA.onVnodeBeforeUnmount)&&Kg(lB,H,L),YA&6)UB(L.component,K,nA);else{if(YA&128){L.suspense.unmount(K,nA);return}KA&&me(L,null,H,"beforeUnmount"),YA&64?L.type.remove(L,H,K,rA,IA,nA):QA&&(aA!==sQ||SA>0&&SA&64)?mA(QA,H,K,!1,!0):(aA===sQ&&SA&384||!rA&&YA&16)&&mA(CA,H,K),nA&&HB(L)}(VA&&(lB=oA&&oA.onVnodeUnmounted)||KA)&&tg(()=>{lB&&Kg(lB,H,L),KA&&me(L,null,H,"unmounted")},K)},HB=L=>{const{type:H,el:K,anchor:nA,transition:rA}=L;if(H===sQ){GB(K,nA);return}if(H===eC){v(L);return}const aA=()=>{t(K),rA&&!rA.persisted&&rA.afterLeave&&rA.afterLeave()};if(L.shapeFlag&1&&rA&&!rA.persisted){const{leave:oA,delayLeave:MA}=rA,CA=()=>oA(K,aA);MA?MA(L.el,aA,CA):CA()}else aA()},GB=(L,H)=>{let K;for(;L!==H;)K=R(L),t(L),L=K;t(H)},UB=(L,H,K)=>{const{bum:nA,scope:rA,update:aA,subTree:oA,um:MA}=L;nA&&WC(nA),rA.stop(),aA&&(aA.active=!1,RB(oA,L,H,K)),MA&&tg(MA,H),tg(()=>{L.isUnmounted=!0},H),H&&H.pendingBranch&&!H.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===H.pendingId&&(H.deps--,H.deps===0&&H.resolve())},mA=(L,H,K,nA=!1,rA=!1,aA=0)=>{for(let oA=aA;oA<L.length;oA++)RB(L[oA],H,K,nA,rA)},z=L=>L.shapeFlag&6?z(L.component.subTree):L.shapeFlag&128?L.suspense.next():R(L.anchor||L.el),ZA=(L,H,K)=>{L==null?H._vnode&&RB(H._vnode,null,null,!0):p(H._vnode||null,L,H,null,null,null,K),iD(),Lo(),H._vnode=L},IA={p,um:RB,m:uB,r:HB,mt:uA,mc:j,pc:gB,pbc:sA,n:z,o:A};let bA,EA;return B&&([bA,EA]=B(IA)),{render:ZA,hydrate:bA,createApp:AR(ZA,bA)}}function Pn({effect:A,update:B},Q){A.allowRecurse=B.allowRecurse=Q}function kl(A,B,Q=!1){const g=A.children,t=B.children;if(jA(g)&&jA(t))for(let e=0;e<g.length;e++){const E=g[e];let I=t[e];I.shapeFlag&1&&!I.dynamicChildren&&((I.patchFlag<=0||I.patchFlag===32)&&(I=t[e]=gn(t[e]),I.el=E.el),Q||kl(E,I)),I.type===IC&&(I.el=E.el)}}function nR(A){const B=A.slice(),Q=[0];let g,t,e,E,I;const i=A.length;for(g=0;g<i;g++){const a=A[g];if(a!==0){if(t=Q[Q.length-1],A[t]<a){B[g]=t,Q.push(g);continue}for(e=0,E=Q.length-1;e<E;)I=e+E>>1,A[Q[I]]<a?e=I+1:E=I;a<A[Q[e]]&&(e>0&&(B[g]=Q[e-1]),Q[e]=g)}}for(e=Q.length,E=Q[e-1];e-- >0;)Q[e]=E,E=B[E];return Q}const CR=A=>A.__isTeleport,vI=A=>A&&(A.disabled||A.disabled===""),fD=A=>typeof SVGElement<"u"&&A instanceof SVGElement,Rr=(A,B)=>{const Q=A&&A.to;return aQ(Q)?B?B(Q):null:Q},IR={__isTeleport:!0,process(A,B,Q,g,t,e,E,I,i,a){const{mc:w,pc:F,pbc:R,o:{insert:h,querySelector:y,createText:p,createComment:M}}=a,m=vI(B.props);let{shapeFlag:N,children:AA,dynamicChildren:v}=B;if(A==null){const x=B.el=p(""),iA=B.anchor=p("");h(x,Q,g),h(iA,Q,g);const cA=B.target=Rr(B.props,y),j=B.targetAnchor=p("");cA&&(h(j,cA),E=E||fD(cA));const $=(sA,DA)=>{N&16&&w(AA,sA,DA,t,e,E,I,i)};m?$(Q,iA):cA&&$(cA,j)}else{B.el=A.el;const x=B.anchor=A.anchor,iA=B.target=A.target,cA=B.targetAnchor=A.targetAnchor,j=vI(A.props),$=j?Q:iA,sA=j?x:cA;if(E=E||fD(iA),v?(R(A.dynamicChildren,v,$,t,e,E,I),kl(A,B,!0)):i||F(A,B,$,sA,t,e,E,I,!1),m)j||Do(B,Q,x,a,1);else if((B.props&&B.props.to)!==(A.props&&A.props.to)){const DA=B.target=Rr(B.props,y);DA&&Do(B,DA,null,a,0)}else j&&Do(B,iA,cA,a,1)}Ef(B)},remove(A,B,Q,g,{um:t,o:{remove:e}},E){const{shapeFlag:I,children:i,anchor:a,targetAnchor:w,target:F,props:R}=A;if(F&&e(w),(E||!vI(R))&&(e(a),I&16))for(let h=0;h<i.length;h++){const y=i[h];t(y,B,Q,!0,!!y.dynamicChildren)}},move:Do,hydrate:iR};function Do(A,B,Q,{o:{insert:g},m:t},e=2){e===0&&g(A.targetAnchor,B,Q);const{el:E,anchor:I,shapeFlag:i,children:a,props:w}=A,F=e===2;if(F&&g(E,B,Q),(!F||vI(w))&&i&16)for(let R=0;R<a.length;R++)t(a[R],B,Q,2);F&&g(I,B,Q)}function iR(A,B,Q,g,t,e,{o:{nextSibling:E,parentNode:I,querySelector:i}},a){const w=B.target=Rr(B.props,i);if(w){const F=w._lpa||w.firstChild;if(B.shapeFlag&16)if(vI(B.props))B.anchor=a(E(A),B,I(A),Q,g,t,e),B.targetAnchor=F;else{B.anchor=E(A);let R=F;for(;R;)if(R=E(R),R&&R.nodeType===8&&R.data==="teleport anchor"){B.targetAnchor=R,w._lpa=B.targetAnchor&&E(B.targetAnchor);break}a(F,B,w,Q,g,t,e)}Ef(B)}return B.anchor&&E(B.anchor)}const oR=IR;function Ef(A){const B=A.ctx;if(B&&B.ut){let Q=A.children[0].el;for(;Q!==A.targetAnchor;)Q.nodeType===1&&Q.setAttribute("data-v-owner",B.uid),Q=Q.nextSibling;B.ut()}}const sQ=Symbol.for("v-fgt"),IC=Symbol.for("v-txt"),rg=Symbol.for("v-cmt"),eC=Symbol.for("v-stc"),WI=[];let Pg=null;function fB(A=!1){WI.push(Pg=A?null:[])}function nf(){WI.pop(),Pg=WI[WI.length-1]||null}let iC=1;function Yr(A){iC+=A}function Cf(A){return A.dynamicChildren=iC>0?Pg||HC:null,nf(),iC>0&&Pg&&Pg.push(A),A}function TB(A,B,Q,g,t,e){return Cf(xA(A,B,Q,g,t,e,!0))}function Ot(A,B,Q,g,t){return Cf(SB(A,B,Q,g,t,!0))}function ln(A){return A?A.__v_isVNode===!0:!1}function Ce(A,B){return A.type===B.type&&A.key===B.key}function sR(A){}const is="__vInternal",If=({key:A})=>A??null,uo=({ref:A,ref_key:B,ref_for:Q})=>(typeof A=="number"&&(A=""+A),A!=null?aQ(A)||fQ(A)||rB(A)?{i:VQ,r:A,k:B,f:!!Q}:A:null);function xA(A,B=null,Q=null,g=0,t=null,e=A===sQ?0:1,E=!1,I=!1){const i={__v_isVNode:!0,__v_skip:!0,type:A,props:B,key:B&&If(B),ref:B&&uo(B),scopeId:ts,slotScopeIds:null,children:Q,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:e,patchFlag:g,dynamicProps:t,dynamicChildren:null,appContext:null,ctx:VQ};return I?(Zl(i,Q),e&128&&A.normalize(i)):Q&&(i.shapeFlag|=aQ(Q)?8:16),iC>0&&!E&&Pg&&(i.patchFlag>0||e&6)&&i.patchFlag!==32&&Pg.push(i),i}const SB=aR;function aR(A,B=null,Q=null,g=0,t=null,e=!1){if((!A||A===Vd)&&(A=rg),ln(A)){const I=Xe(A,B,!0);return Q&&Zl(I,Q),iC>0&&!e&&Pg&&(I.shapeFlag&6?Pg[Pg.indexOf(A)]=I:Pg.push(I)),I.patchFlag|=-2,I}if(dR(A)&&(A=A.__vccOpts),B){B=of(B);let{class:I,style:i}=B;I&&!aQ(I)&&(B.class=Le(I)),KB(i)&&(Ul(i)&&!jA(i)&&(i=eQ({},i)),B.style=Mn(i))}const E=aQ(A)?1:Nd(A)?128:CR(A)?64:KB(A)?4:rB(A)?2:0;return xA(A,B,Q,g,t,E,e,!0)}function of(A){return A?Ul(A)||is in A?eQ({},A):A:null}function Xe(A,B,Q=!1){const{props:g,ref:t,patchFlag:e,children:E}=A,I=B?Mi(g||{},B):g;return{__v_isVNode:!0,__v_skip:!0,type:A.type,props:I,key:I&&If(I),ref:B&&B.ref?Q&&t?jA(t)?t.concat(uo(B)):[t,uo(B)]:uo(B):t,scopeId:A.scopeId,slotScopeIds:A.slotScopeIds,children:E,target:A.target,targetAnchor:A.targetAnchor,staticCount:A.staticCount,shapeFlag:A.shapeFlag,patchFlag:B&&A.type!==sQ?e===-1?16:e|16:e,dynamicProps:A.dynamicProps,dynamicChildren:A.dynamicChildren,appContext:A.appContext,dirs:A.dirs,transition:A.transition,component:A.component,suspense:A.suspense,ssContent:A.ssContent&&Xe(A.ssContent),ssFallback:A.ssFallback&&Xe(A.ssFallback),el:A.el,anchor:A.anchor,ctx:A.ctx,ce:A.ce}}function UC(A=" ",B=0){return SB(IC,null,A,B)}function wR(A,B){const Q=SB(eC,null,A);return Q.staticCount=B,Q}function ye(A="",B=!1){return B?(fB(),Ot(rg,null,A)):SB(rg,null,A)}function Dt(A){return A==null||typeof A=="boolean"?SB(rg):jA(A)?SB(sQ,null,A.slice()):typeof A=="object"?gn(A):SB(IC,null,String(A))}function gn(A){return A.el===null&&A.patchFlag!==-1||A.memo?A:Xe(A)}function Zl(A,B){let Q=0;const{shapeFlag:g}=A;if(B==null)B=null;else if(jA(B))Q=16;else if(typeof B=="object")if(g&65){const t=B.default;t&&(t._c&&(t._d=!1),Zl(A,t()),t._c&&(t._d=!0));return}else{Q=32;const t=B._;!t&&!(is in B)?B._ctx=VQ:t===3&&VQ&&(VQ.slots._===1?B._=1:(B._=2,A.patchFlag|=1024))}else rB(B)?(B={default:B,_ctx:VQ},Q=32):(B=String(B),g&64?(Q=16,B=[UC(B)]):Q=8);A.children=B,A.shapeFlag|=Q}function Mi(...A){const B={};for(let Q=0;Q<A.length;Q++){const g=A[Q];for(const t in g)if(t==="class")B.class!==g.class&&(B.class=Le([B.class,g.class]));else if(t==="style")B.style=Mn([B.style,g.style]);else if(si(t)){const e=B[t],E=g[t];E&&e!==E&&!(jA(e)&&e.includes(E))&&(B[t]=e?[].concat(e,E):E)}else t!==""&&(B[t]=g[t])}return B}function Kg(A,B,Q,g=null){Mt(A,B,7,[Q,g])}const cR=jd();let rR=0;function sf(A,B,Q){const g=A.type,t=(B?B.appContext:A.appContext)||cR,e={uid:rR++,vnode:A,type:g,parent:B,appContext:t,root:null,next:null,subTree:null,effect:null,update:null,scope:new al(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:B?B.provides:Object.create(t.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$d(g,t),emitsOptions:pd(g,t),emit:null,emitted:null,propsDefaults:xB,inheritAttrs:g.inheritAttrs,ctx:xB,data:xB,props:xB,attrs:xB,slots:xB,refs:xB,setupState:xB,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:Q,suspenseId:Q?Q.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return e.ctx={_:e},e.root=B?B.root:e,e.emit=IG.bind(null,e),A.ce&&A.ce(e),e}let yQ=null;const ve=()=>yQ||VQ;let Ll,yC,MD="__VUE_INSTANCE_SETTERS__";(yC=lr()[MD])||(yC=lr()[MD]=[]),yC.push(A=>yQ=A),Ll=A=>{yC.length>1?yC.forEach(B=>B(A)):yC[0](A)};const Fn=A=>{Ll(A),A.scope.on()},In=()=>{yQ&&yQ.scope.off(),Ll(null)};function af(A){return A.vnode.shapeFlag&4}let PC=!1;function wf(A,B=!1){PC=B;const{props:Q,children:g}=A.vnode,t=af(A);BR(A,Q,t,B),tR(A,g);const e=t?lR(A,B):void 0;return PC=!1,e}function lR(A,B){const Q=A.type;A.accessCache=Object.create(null),A.proxy=ci(new Proxy(A.ctx,Mr));const{setup:g}=Q;if(g){const t=A.setupContext=g.length>1?rf(A):null;Fn(A),EI();const e=DE(g,A,0,[A.props,t]);if(nI(),In(),ol(e)){if(e.then(In,In),B)return e.then(E=>{pr(A,E,B)}).catch(E=>{DC(E,A,0)});A.asyncDep=e}else pr(A,e,B)}else cf(A,B)}function pr(A,B,Q){rB(B)?A.type.__ssrInlineRender?A.ssrRender=B:A.render=B:KB(B)&&(A.setupState=Ml(B)),cf(A,Q)}let Ho,Nr;function FR(A){Ho=A,Nr=B=>{B.render._rc&&(B.withProxy=new Proxy(B.ctx,JG))}}const DR=()=>!Ho;function cf(A,B,Q){const g=A.type;if(!A.render){if(!B&&Ho&&!g.render){const t=g.template||Jl(A).template;if(t){const{isCustomElement:e,compilerOptions:E}=A.appContext.config,{delimiters:I,compilerOptions:i}=g,a=eQ(eQ({isCustomElement:e,delimiters:I},E),i);g.render=Ho(t,a)}}A.render=g.render||oe,Nr&&Nr(A)}Fn(A),EI(),KG(A),nI(),In()}function UR(A){return A.attrsProxy||(A.attrsProxy=new Proxy(A.attrs,{get(B,Q){return qg(A,"get","$attrs"),B[Q]}}))}function rf(A){const B=Q=>{A.exposed=Q||{}};return{get attrs(){return UR(A)},slots:A.slots,emit:A.emit,expose:B}}function os(A){if(A.exposed)return A.exposeProxy||(A.exposeProxy=new Proxy(Ml(ci(A.exposed)),{get(B,Q){if(Q in B)return B[Q];if(Q in SI)return SI[Q](A)},has(B,Q){return Q in B||Q in SI}}))}function br(A,B=!0){return rB(A)?A.displayName||A.name:A.name||B&&A.__name}function dR(A){return rB(A)&&"__vccOpts"in A}const cg=(A,B)=>QG(A,B,PC);function ss(A,B,Q){const g=arguments.length;return g===2?KB(B)&&!jA(B)?ln(B)?SB(A,null,[B]):SB(A,B):SB(A,null,B):(g>3?Q=Array.prototype.slice.call(arguments,2):g===3&&ln(Q)&&(Q=[Q]),SB(A,B,Q))}const lf=Symbol.for("v-scx"),Ff=()=>ht(lf);function fR(){}function MR(A,B,Q,g){const t=Q[g];if(t&&Df(t,A))return t;const e=B();return e.memo=A.slice(),Q[g]=e}function Df(A,B){const Q=A.memo;if(Q.length!=B.length)return!1;for(let g=0;g<Q.length;g++)if(zC(Q[g],B[g]))return!1;return iC>0&&Pg&&Pg.push(A),!0}const Uf="3.3.4",uR={createComponentInstance:sf,setupComponent:wf,renderComponentRoot:Mo,setCurrentRenderingInstance:Ai,isVNode:ln,normalizeVNode:Dt},hR=uR,GR=null,RR=null,YR="http://www.w3.org/2000/svg",$n=typeof document<"u"?document:null,uD=$n&&$n.createElement("template"),pR={insert:(A,B,Q)=>{B.insertBefore(A,Q||null)},remove:A=>{const B=A.parentNode;B&&B.removeChild(A)},createElement:(A,B,Q,g)=>{const t=B?$n.createElementNS(YR,A):$n.createElement(A,Q?{is:Q}:void 0);return A==="select"&&g&&g.multiple!=null&&t.setAttribute("multiple",g.multiple),t},createText:A=>$n.createTextNode(A),createComment:A=>$n.createComment(A),setText:(A,B)=>{A.nodeValue=B},setElementText:(A,B)=>{A.textContent=B},parentNode:A=>A.parentNode,nextSibling:A=>A.nextSibling,querySelector:A=>$n.querySelector(A),setScopeId(A,B){A.setAttribute(B,"")},insertStaticContent(A,B,Q,g,t,e){const E=Q?Q.previousSibling:B.lastChild;if(t&&(t===e||t.nextSibling))for(;B.insertBefore(t.cloneNode(!0),Q),!(t===e||!(t=t.nextSibling)););else{uD.innerHTML=g?`<svg>${A}</svg>`:A;const I=uD.content;if(g){const i=I.firstChild;for(;i.firstChild;)I.appendChild(i.firstChild);I.removeChild(i)}B.insertBefore(I,Q)}return[E?E.nextSibling:B.firstChild,Q?Q.previousSibling:B.lastChild]}};function NR(A,B,Q){const g=A._vtc;g&&(B=(B?[B,...g]:[...g]).join(" ")),B==null?A.removeAttribute("class"):Q?A.setAttribute("class",B):A.className=B}function bR(A,B,Q){const g=A.style,t=aQ(Q);if(Q&&!t){if(B&&!aQ(B))for(const e in B)Q[e]==null&&mr(g,e,"");for(const e in Q)mr(g,e,Q[e])}else{const e=g.display;t?B!==Q&&(g.cssText=Q):B&&A.removeAttribute("style"),"_vod"in A&&(g.display=e)}}const hD=/\s*!important$/;function mr(A,B,Q){if(jA(Q))Q.forEach(g=>mr(A,B,g));else if(Q==null&&(Q=""),B.startsWith("--"))A.setProperty(B,Q);else{const g=mR(A,B);hD.test(Q)?A.setProperty(Tt(g),Q.replace(hD,""),"important"):A[g]=Q}}const GD=["Webkit","Moz","ms"],Wc={};function mR(A,B){const Q=Wc[B];if(Q)return Q;let g=jg(B);if(g!=="filter"&&g in A)return Wc[B]=g;g=ai(g);for(let t=0;t<GD.length;t++){const e=GD[t]+g;if(e in A)return Wc[B]=e}return B}const RD="http://www.w3.org/1999/xlink";function JR(A,B,Q,g,t){if(g&&B.startsWith("xlink:"))Q==null?A.removeAttributeNS(RD,B.slice(6,B.length)):A.setAttributeNS(RD,B,Q);else{const e=wh(B);Q==null||e&&!ed(Q)?A.removeAttribute(B):A.setAttribute(B,e?"":Q)}}function yR(A,B,Q,g,t,e,E){if(B==="innerHTML"||B==="textContent"){g&&E(g,t,e),A[B]=Q??"";return}const I=A.tagName;if(B==="value"&&I!=="PROGRESS"&&!I.includes("-")){A._value=Q;const a=I==="OPTION"?A.getAttribute("value"):A.value,w=Q??"";a!==w&&(A.value=w),Q==null&&A.removeAttribute(B);return}let i=!1;if(Q===""||Q==null){const a=typeof A[B];a==="boolean"?Q=ed(Q):Q==null&&a==="string"?(Q="",i=!0):a==="number"&&(Q=0,i=!0)}try{A[B]=Q}catch{}i&&A.removeAttribute(B)}function lE(A,B,Q,g){A.addEventListener(B,Q,g)}function kR(A,B,Q,g){A.removeEventListener(B,Q,g)}function ZR(A,B,Q,g,t=null){const e=A._vei||(A._vei={}),E=e[B];if(g&&E)E.value=g;else{const[I,i]=LR(B);if(g){const a=e[B]=HR(g,t);lE(A,I,a,i)}else E&&(kR(A,I,E,i),e[B]=void 0)}}const YD=/(?:Once|Passive|Capture)$/;function LR(A){let B;if(YD.test(A)){B={};let g;for(;g=A.match(YD);)A=A.slice(0,A.length-g[0].length),B[g[0].toLowerCase()]=!0}return[A[2]===":"?A.slice(3):Tt(A.slice(2)),B]}let Tc=0;const XR=Promise.resolve(),SR=()=>Tc||(XR.then(()=>Tc=0),Tc=Date.now());function HR(A,B){const Q=g=>{if(!g._vts)g._vts=Date.now();else if(g._vts<=Q.attached)return;Mt(vR(g,Q.value),B,5,[g])};return Q.value=A,Q.attached=SR(),Q}function vR(A,B){if(jA(B)){const Q=A.stopImmediatePropagation;return A.stopImmediatePropagation=()=>{Q.call(A),A._stopped=!0},B.map(g=>t=>!t._stopped&&g&&g(t))}else return B}const pD=/^on[a-z]/,WR=(A,B,Q,g,t=!1,e,E,I,i)=>{B==="class"?NR(A,g,t):B==="style"?bR(A,Q,g):si(B)?Il(B)||ZR(A,B,Q,g,E):(B[0]==="."?(B=B.slice(1),!0):B[0]==="^"?(B=B.slice(1),!1):TR(A,B,g,t))?yR(A,B,g,e,E,I,i):(B==="true-value"?A._trueValue=g:B==="false-value"&&(A._falseValue=g),JR(A,B,g,t))};function TR(A,B,Q,g){return g?!!(B==="innerHTML"||B==="textContent"||B in A&&pD.test(B)&&rB(Q)):B==="spellcheck"||B==="draggable"||B==="translate"||B==="form"||B==="list"&&A.tagName==="INPUT"||B==="type"&&A.tagName==="TEXTAREA"||pD.test(B)&&aQ(Q)?!1:B in A}function df(A,B){const Q=Zg(A);class g extends as{constructor(e){super(Q,e,B)}}return g.def=Q,g}const OR=A=>df(A,Zf),VR=typeof HTMLElement<"u"?HTMLElement:class{};class as extends VR{constructor(B,Q={},g){super(),this._def=B,this._props=Q,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&g?g(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,II(()=>{this._connected||(kr(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let g=0;g<this.attributes.length;g++)this._setAttr(this.attributes[g].name);new MutationObserver(g=>{for(const t of g)this._setAttr(t.attributeName)}).observe(this,{attributes:!0});const B=(g,t=!1)=>{const{props:e,styles:E}=g;let I;if(e&&!jA(e))for(const i in e){const a=e[i];(a===Number||a&&a.type===Number)&&(i in this._props&&(this._props[i]=ko(this._props[i])),(I||(I=Object.create(null)))[jg(i)]=!0)}this._numberProps=I,t&&this._resolveProps(g),this._applyStyles(E),this._update()},Q=this._def.__asyncLoader;Q?Q().then(g=>B(g,!0)):B(this._def)}_resolveProps(B){const{props:Q}=B,g=jA(Q)?Q:Object.keys(Q||{});for(const t of Object.keys(this))t[0]!=="_"&&g.includes(t)&&this._setProp(t,this[t],!0,!1);for(const t of g.map(jg))Object.defineProperty(this,t,{get(){return this._getProp(t)},set(e){this._setProp(t,e)}})}_setAttr(B){let Q=this.getAttribute(B);const g=jg(B);this._numberProps&&this._numberProps[g]&&(Q=ko(Q)),this._setProp(g,Q,!1)}_getProp(B){return this._props[B]}_setProp(B,Q,g=!0,t=!0){Q!==this._props[B]&&(this._props[B]=Q,t&&this._instance&&this._update(),g&&(Q===!0?this.setAttribute(Tt(B),""):typeof Q=="string"||typeof Q=="number"?this.setAttribute(Tt(B),Q+""):Q||this.removeAttribute(Tt(B))))}_update(){kr(this._createVNode(),this.shadowRoot)}_createVNode(){const B=SB(this._def,eQ({},this._props));return this._instance||(B.ce=Q=>{this._instance=Q,Q.isCE=!0;const g=(e,E)=>{this.dispatchEvent(new CustomEvent(e,{detail:E}))};Q.emit=(e,...E)=>{g(e,E),Tt(e)!==e&&g(Tt(e),E)};let t=this;for(;t=t&&(t.parentNode||t.host);)if(t instanceof as){Q.parent=t._instance,Q.provides=t._instance.provides;break}}),B}_applyStyles(B){B&&B.forEach(Q=>{const g=document.createElement("style");g.textContent=Q,this.shadowRoot.appendChild(g)})}}function xR(A="$style"){{const B=ve();if(!B)return xB;const Q=B.type.__cssModules;if(!Q)return xB;const g=Q[A];return g||xB}}function zR(A){const B=ve();if(!B)return;const Q=B.ut=(t=A(B.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${B.uid}"]`)).forEach(e=>yr(e,t))},g=()=>{const t=A(B.proxy);Jr(B.subTree,t),Q(t)};md(g),He(()=>{const t=new MutationObserver(g);t.observe(B.subTree.el.parentNode,{childList:!0}),fi(()=>t.disconnect())})}function Jr(A,B){if(A.shapeFlag&128){const Q=A.suspense;A=Q.activeBranch,Q.pendingBranch&&!Q.isHydrating&&Q.effects.push(()=>{Jr(Q.activeBranch,B)})}for(;A.component;)A=A.component.subTree;if(A.shapeFlag&1&&A.el)yr(A.el,B);else if(A.type===sQ)A.children.forEach(Q=>Jr(Q,B));else if(A.type===eC){let{el:Q,anchor:g}=A;for(;Q&&(yr(Q,B),Q!==g);)Q=Q.nextSibling}}function yr(A,B){if(A.nodeType===1){const Q=A.style;for(const g in B)Q.setProperty(`--${g}`,B[g])}}const _E="transition",pI="animation",ws=(A,{slots:B})=>ss(yd,Mf(A),B);ws.displayName="Transition";const ff={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},KR=ws.props=eQ({},Nl,ff),jn=(A,B=[])=>{jA(A)?A.forEach(Q=>Q(...B)):A&&A(...B)},ND=A=>A?jA(A)?A.some(B=>B.length>1):A.length>1:!1;function Mf(A){const B={};for(const lA in A)lA in ff||(B[lA]=A[lA]);if(A.css===!1)return B;const{name:Q="v",type:g,duration:t,enterFromClass:e=`${Q}-enter-from`,enterActiveClass:E=`${Q}-enter-active`,enterToClass:I=`${Q}-enter-to`,appearFromClass:i=e,appearActiveClass:a=E,appearToClass:w=I,leaveFromClass:F=`${Q}-leave-from`,leaveActiveClass:R=`${Q}-leave-active`,leaveToClass:h=`${Q}-leave-to`}=A,y=PR(t),p=y&&y[0],M=y&&y[1],{onBeforeEnter:m,onEnter:N,onEnterCancelled:AA,onLeave:v,onLeaveCancelled:x,onBeforeAppear:iA=m,onAppear:cA=N,onAppearCancelled:j=AA}=B,$=(lA,yA,uA)=>{Bn(lA,yA?w:I),Bn(lA,yA?a:E),uA&&uA()},sA=(lA,yA)=>{lA._isLeaving=!1,Bn(lA,F),Bn(lA,h),Bn(lA,R),yA&&yA()},DA=lA=>(yA,uA)=>{const EB=lA?cA:N,XA=()=>$(yA,lA,uA);jn(EB,[yA,XA]),bD(()=>{Bn(yA,lA?i:e),aE(yA,lA?w:I),ND(EB)||mD(yA,g,p,XA)})};return eQ(B,{onBeforeEnter(lA){jn(m,[lA]),aE(lA,e),aE(lA,E)},onBeforeAppear(lA){jn(iA,[lA]),aE(lA,i),aE(lA,a)},onEnter:DA(!1),onAppear:DA(!0),onLeave(lA,yA){lA._isLeaving=!0;const uA=()=>sA(lA,yA);aE(lA,F),hf(),aE(lA,R),bD(()=>{lA._isLeaving&&(Bn(lA,F),aE(lA,h),ND(v)||mD(lA,g,M,uA))}),jn(v,[lA,uA])},onEnterCancelled(lA){$(lA,!1),jn(AA,[lA])},onAppearCancelled(lA){$(lA,!0),jn(j,[lA])},onLeaveCancelled(lA){sA(lA),jn(x,[lA])}})}function PR(A){if(A==null)return null;if(KB(A))return[Oc(A.enter),Oc(A.leave)];{const B=Oc(A);return[B,B]}}function Oc(A){return ko(A)}function aE(A,B){B.split(/\s+/).forEach(Q=>Q&&A.classList.add(Q)),(A._vtc||(A._vtc=new Set)).add(B)}function Bn(A,B){B.split(/\s+/).forEach(g=>g&&A.classList.remove(g));const{_vtc:Q}=A;Q&&(Q.delete(B),Q.size||(A._vtc=void 0))}function bD(A){requestAnimationFrame(()=>{requestAnimationFrame(A)})}let jR=0;function mD(A,B,Q,g){const t=A._endId=++jR,e=()=>{t===A._endId&&g()};if(Q)return setTimeout(e,Q);const{type:E,timeout:I,propCount:i}=uf(A,B);if(!E)return g();const a=E+"end";let w=0;const F=()=>{A.removeEventListener(a,R),e()},R=h=>{h.target===A&&++w>=i&&F()};setTimeout(()=>{w<i&&F()},I+1),A.addEventListener(a,R)}function uf(A,B){const Q=window.getComputedStyle(A),g=y=>(Q[y]||"").split(", "),t=g(`${_E}Delay`),e=g(`${_E}Duration`),E=JD(t,e),I=g(`${pI}Delay`),i=g(`${pI}Duration`),a=JD(I,i);let w=null,F=0,R=0;B===_E?E>0&&(w=_E,F=E,R=e.length):B===pI?a>0&&(w=pI,F=a,R=i.length):(F=Math.max(E,a),w=F>0?E>a?_E:pI:null,R=w?w===_E?e.length:i.length:0);const h=w===_E&&/\b(transform|all)(,|$)/.test(g(`${_E}Property`).toString());return{type:w,timeout:F,propCount:R,hasTransform:h}}function JD(A,B){for(;A.length<B.length;)A=A.concat(A);return Math.max(...B.map((Q,g)=>yD(Q)+yD(A[g])))}function yD(A){return Number(A.slice(0,-1).replace(",","."))*1e3}function hf(){return document.body.offsetHeight}const Gf=new WeakMap,Rf=new WeakMap,Yf={name:"TransitionGroup",props:eQ({},KR,{tag:String,moveClass:String}),setup(A,{slots:B}){const Q=ve(),g=pl();let t,e;return ns(()=>{if(!t.length)return;const E=A.moveClass||`${A.name||"v"}-move`;if(!BY(t[0].el,Q.vnode.el,E))return;t.forEach(_R),t.forEach($R);const I=t.filter(AY);hf(),I.forEach(i=>{const a=i.el,w=a.style;aE(a,E),w.transform=w.webkitTransform=w.transitionDuration="";const F=a._moveCb=R=>{R&&R.target!==a||(!R||/transform$/.test(R.propertyName))&&(a.removeEventListener("transitionend",F),a._moveCb=null,Bn(a,E))};a.addEventListener("transitionend",F)})}),()=>{const E=NB(A),I=Mf(E);let i=E.tag||sQ;t=e,e=B.default?es(B.default()):[];for(let a=0;a<e.length;a++){const w=e[a];w.key!=null&&CC(w,KC(w,I,g,Q))}if(t)for(let a=0;a<t.length;a++){const w=t[a];CC(w,KC(w,I,g,Q)),Gf.set(w,w.el.getBoundingClientRect())}return SB(i,null,e)}}},qR=A=>delete A.mode;Yf.props;const pf=Yf;function _R(A){const B=A.el;B._moveCb&&B._moveCb(),B._enterCb&&B._enterCb()}function $R(A){Rf.set(A,A.el.getBoundingClientRect())}function AY(A){const B=Gf.get(A),Q=Rf.get(A),g=B.left-Q.left,t=B.top-Q.top;if(g||t){const e=A.el.style;return e.transform=e.webkitTransform=`translate(${g}px,${t}px)`,e.transitionDuration="0s",A}}function BY(A,B,Q){const g=A.cloneNode();A._vtc&&A._vtc.forEach(E=>{E.split(/\s+/).forEach(I=>I&&g.classList.remove(I))}),Q.split(/\s+/).forEach(E=>E&&g.classList.add(E)),g.style.display="none";const t=B.nodeType===1?B:B.parentNode;t.appendChild(g);const{hasTransform:e}=uf(g);return t.removeChild(g),e}const Dn=A=>{const B=A.props["onUpdate:modelValue"]||!1;return jA(B)?Q=>WC(B,Q):B};function QY(A){A.target.composing=!0}function kD(A){const B=A.target;B.composing&&(B.composing=!1,B.dispatchEvent(new Event("input")))}const ti={created(A,{modifiers:{lazy:B,trim:Q,number:g}},t){A._assign=Dn(t);const e=g||t.props&&t.props.type==="number";lE(A,B?"change":"input",E=>{if(E.target.composing)return;let I=A.value;Q&&(I=I.trim()),e&&(I=yo(I)),A._assign(I)}),Q&&lE(A,"change",()=>{A.value=A.value.trim()}),B||(lE(A,"compositionstart",QY),lE(A,"compositionend",kD),lE(A,"change",kD))},mounted(A,{value:B}){A.value=B??""},beforeUpdate(A,{value:B,modifiers:{lazy:Q,trim:g,number:t}},e){if(A._assign=Dn(e),A.composing||document.activeElement===A&&A.type!=="range"&&(Q||g&&A.value.trim()===B||(t||A.type==="number")&&yo(A.value)===B))return;const E=B??"";A.value!==E&&(A.value=E)}},Xl={deep:!0,created(A,B,Q){A._assign=Dn(Q),lE(A,"change",()=>{const g=A._modelValue,t=jC(A),e=A.checked,E=A._assign;if(jA(g)){const I=jo(g,t),i=I!==-1;if(e&&!i)E(g.concat(t));else if(!e&&i){const a=[...g];a.splice(I,1),E(a)}}else if(FC(g)){const I=new Set(g);e?I.add(t):I.delete(t),E(I)}else E(Nf(A,e))})},mounted:ZD,beforeUpdate(A,B,Q){A._assign=Dn(Q),ZD(A,B,Q)}};function ZD(A,{value:B,oldValue:Q},g){A._modelValue=B,jA(B)?A.checked=jo(B,g.props.value)>-1:FC(B)?A.checked=B.has(g.props.value):B!==Q&&(A.checked=cn(B,Nf(A,!0)))}const Sl={created(A,{value:B},Q){A.checked=cn(B,Q.props.value),A._assign=Dn(Q),lE(A,"change",()=>{A._assign(jC(A))})},beforeUpdate(A,{value:B,oldValue:Q},g){A._assign=Dn(g),B!==Q&&(A.checked=cn(B,g.props.value))}},Hl={deep:!0,created(A,{value:B,modifiers:{number:Q}},g){const t=FC(B);lE(A,"change",()=>{const e=Array.prototype.filter.call(A.options,E=>E.selected).map(E=>Q?yo(jC(E)):jC(E));A._assign(A.multiple?t?new Set(e):e:e[0])}),A._assign=Dn(g)},mounted(A,{value:B}){LD(A,B)},beforeUpdate(A,B,Q){A._assign=Dn(Q)},updated(A,{value:B}){LD(A,B)}};function LD(A,B){const Q=A.multiple;if(!(Q&&!jA(B)&&!FC(B))){for(let g=0,t=A.options.length;g<t;g++){const e=A.options[g],E=jC(e);if(Q)jA(B)?e.selected=jo(B,E)>-1:e.selected=B.has(E);else if(cn(jC(e),B)){A.selectedIndex!==g&&(A.selectedIndex=g);return}}!Q&&A.selectedIndex!==-1&&(A.selectedIndex=-1)}}function jC(A){return"_value"in A?A._value:A.value}function Nf(A,B){const Q=B?"_trueValue":"_falseValue";return Q in A?A[Q]:B}const bf={created(A,B,Q){Uo(A,B,Q,null,"created")},mounted(A,B,Q){Uo(A,B,Q,null,"mounted")},beforeUpdate(A,B,Q,g){Uo(A,B,Q,g,"beforeUpdate")},updated(A,B,Q,g){Uo(A,B,Q,g,"updated")}};function mf(A,B){switch(A){case"SELECT":return Hl;case"TEXTAREA":return ti;default:switch(B){case"checkbox":return Xl;case"radio":return Sl;default:return ti}}}function Uo(A,B,Q,g,t){const E=mf(A.tagName,Q.props&&Q.props.type)[t];E&&E(A,B,Q,g)}function gY(){ti.getSSRProps=({value:A})=>({value:A}),Sl.getSSRProps=({value:A},B)=>{if(B.props&&cn(B.props.value,A))return{checked:!0}},Xl.getSSRProps=({value:A},B)=>{if(jA(A)){if(B.props&&jo(A,B.props.value)>-1)return{checked:!0}}else if(FC(A)){if(B.props&&A.has(B.props.value))return{checked:!0}}else if(A)return{checked:!0}},bf.getSSRProps=(A,B)=>{if(typeof B.type!="string")return;const Q=mf(B.type.toUpperCase(),B.props&&B.props.type);if(Q.getSSRProps)return Q.getSSRProps(A,B)}}const tY=["ctrl","shift","alt","meta"],eY={stop:A=>A.stopPropagation(),prevent:A=>A.preventDefault(),self:A=>A.target!==A.currentTarget,ctrl:A=>!A.ctrlKey,shift:A=>!A.shiftKey,alt:A=>!A.altKey,meta:A=>!A.metaKey,left:A=>"button"in A&&A.button!==0,middle:A=>"button"in A&&A.button!==1,right:A=>"button"in A&&A.button!==2,exact:(A,B)=>tY.some(Q=>A[`${Q}Key`]&&!B.includes(Q))},SC=(A,B)=>(Q,...g)=>{for(let t=0;t<B.length;t++){const e=eY[B[t]];if(e&&e(Q,B))return}return A(Q,...g)},EY={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},nY=(A,B)=>Q=>{if(!("key"in Q))return;const g=Tt(Q.key);if(B.some(t=>t===g||EY[t]===g))return A(Q)},cs={beforeMount(A,{value:B},{transition:Q}){A._vod=A.style.display==="none"?"":A.style.display,Q&&B?Q.beforeEnter(A):NI(A,B)},mounted(A,{value:B},{transition:Q}){Q&&B&&Q.enter(A)},updated(A,{value:B,oldValue:Q},{transition:g}){!B!=!Q&&(g?B?(g.beforeEnter(A),NI(A,!0),g.enter(A)):g.leave(A,()=>{NI(A,!1)}):NI(A,B))},beforeUnmount(A,{value:B}){NI(A,B)}};function NI(A,B){A.style.display=B?A._vod:"none"}function CY(){cs.getSSRProps=({value:A})=>{if(!A)return{style:{display:"none"}}}}const Jf=eQ({patchProp:WR},pR);let TI,XD=!1;function yf(){return TI||(TI=gf(Jf))}function kf(){return TI=XD?TI:tf(Jf),XD=!0,TI}const kr=(...A)=>{yf().render(...A)},Zf=(...A)=>{kf().hydrate(...A)},vl=(...A)=>{const B=yf().createApp(...A),{mount:Q}=B;return B.mount=g=>{const t=Lf(g);if(!t)return;const e=B._component;!rB(e)&&!e.render&&!e.template&&(e.template=t.innerHTML),t.innerHTML="";const E=Q(t,!1,t instanceof SVGElement);return t instanceof Element&&(t.removeAttribute("v-cloak"),t.setAttribute("data-v-app","")),E},B},IY=(...A)=>{const B=kf().createApp(...A),{mount:Q}=B;return B.mount=g=>{const t=Lf(g);if(t)return Q(t,!0,t instanceof SVGElement)},B};function Lf(A){return aQ(A)?document.querySelector(A):A}let SD=!1;const iY=()=>{SD||(SD=!0,gY(),CY())},oY=()=>{},sY=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:yd,BaseTransitionPropsValidators:Nl,Comment:rg,EffectScope:al,Fragment:sQ,KeepAlive:YG,ReactiveEffect:wi,Static:eC,Suspense:rG,Teleport:oR,Text:IC,Transition:ws,TransitionGroup:pf,VueElement:as,assertNumber:tG,callWithAsyncErrorHandling:Mt,callWithErrorHandling:DE,camelize:jg,capitalize:ai,cloneVNode:Xe,compatUtils:RR,compile:oY,computed:cg,createApp:vl,createBlock:Ot,createCommentVNode:ye,createElementBlock:TB,createElementVNode:xA,createHydrationRenderer:tf,createPropsRestProxy:xG,createRenderer:gf,createSSRApp:IY,createSlots:mG,createStaticVNode:wR,createTextVNode:UC,createVNode:SB,customRef:_h,defineAsyncComponent:GG,defineComponent:Zg,defineCustomElement:df,defineEmits:kG,defineExpose:ZG,defineModel:SG,defineOptions:LG,defineProps:yG,defineSSRCustomElement:OR,defineSlots:XG,get devtools(){return ZC},effect:Fh,effectScope:wl,getCurrentInstance:ve,getCurrentScope:cl,getTransitionRawChildren:es,guardReactiveProps:of,h:ss,handleError:DC,hasInjectionContext:qd,hydrate:Zf,initCustomFormatter:fR,initDirectivesForSSR:iY,inject:ht,isMemoSame:Df,isProxy:Ul,isReactive:FE,isReadonly:nC,isRef:fQ,isRuntimeOnly:DR,isShallow:jI,isVNode:ln,markRaw:ci,mergeDefaults:OG,mergeModels:VG,mergeProps:Mi,nextTick:II,normalizeClass:Le,normalizeProps:sh,normalizeStyle:Mn,onActivated:Zd,onBeforeMount:Sd,onBeforeUnmount:di,onBeforeUpdate:Hd,onDeactivated:Ld,onErrorCaptured:Od,onMounted:He,onRenderTracked:Td,onRenderTriggered:Wd,onScopeDispose:Cd,onServerPrefetch:vd,onUnmounted:fi,onUpdated:ns,openBlock:fB,popScopeId:li,provide:HI,proxyRefs:Ml,pushScopeId:ri,queuePostFlushCb:Gl,reactive:CI,readonly:Dl,ref:zB,registerRuntimeCompiler:FR,render:kr,renderList:VC,renderSlot:Is,resolveComponent:Cn,resolveDirective:bG,resolveDynamicComponent:Cs,resolveFilter:GR,resolveTransitionHooks:KC,setBlockTracking:Yr,setDevtoolsHook:Yd,setTransitionHooks:CC,shallowReactive:Fl,shallowReadonly:xh,shallowRef:dd,ssrContextKey:lf,ssrUtils:hR,stop:Dh,toDisplayString:Wt,toHandlerKey:XI,toHandlers:zd,toRaw:NB,toRef:Md,toRefs:ul,toValue:Ph,transformVNodeArgs:sR,triggerRef:Kh,unref:ft,useAttrs:WG,useCssModule:xR,useCssVars:zR,useModel:TG,useSSRContext:Ff,useSlots:vG,useTransitionState:pl,vModelCheckbox:Xl,vModelDynamic:bf,vModelRadio:Sl,vModelSelect:Hl,vModelText:ti,vShow:cs,version:Uf,warn:gG,watch:ut,watchEffect:fG,watchPostEffect:md,watchSyncEffect:MG,withAsyncContext:zG,withCtx:hE,withDefaults:HG,withDirectives:Di,withKeys:nY,withMemo:MR,withModifiers:SC,withScopeId:iG},Symbol.toStringTag,{value:"Module"}));var aY=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Xf;const rs=A=>Xf=A,Sf=Symbol();function Zr(A){return A&&typeof A=="object"&&Object.prototype.toString.call(A)==="[object Object]"&&typeof A.toJSON!="function"}var OI;(function(A){A.direct="direct",A.patchObject="patch object",A.patchFunction="patch function"})(OI||(OI={}));function wY(){const A=wl(!0),B=A.run(()=>zB({}));let Q=[],g=[];const t=ci({install(e){rs(t),t._a=e,e.provide(Sf,t),e.config.globalProperties.$pinia=t,g.forEach(E=>Q.push(E)),g=[]},use(e){return!this._a&&!aY?g.push(e):Q.push(e),this},_p:Q,_a:null,_e:A,_s:new Map,state:B});return t}const Hf=()=>{};function HD(A,B,Q,g=Hf){A.push(B);const t=()=>{const e=A.indexOf(B);e>-1&&(A.splice(e,1),g())};return!Q&&cl()&&Cd(t),t}function kC(A,...B){A.slice().forEach(Q=>{Q(...B)})}const cY=A=>A();function Lr(A,B){A instanceof Map&&B instanceof Map&&B.forEach((Q,g)=>A.set(g,Q)),A instanceof Set&&B instanceof Set&&B.forEach(A.add,A);for(const Q in B){if(!B.hasOwnProperty(Q))continue;const g=B[Q],t=A[Q];Zr(t)&&Zr(g)&&A.hasOwnProperty(Q)&&!fQ(g)&&!FE(g)?A[Q]=Lr(t,g):A[Q]=g}return A}const rY=Symbol();function lY(A){return!Zr(A)||!A.hasOwnProperty(rY)}const{assign:Qn}=Object;function FY(A){return!!(fQ(A)&&A.effect)}function DY(A,B,Q,g){const{state:t,actions:e,getters:E}=B,I=Q.state.value[A];let i;function a(){I||(Q.state.value[A]=t?t():{});const w=ul(Q.state.value[A]);return Qn(w,e,Object.keys(E||{}).reduce((F,R)=>(F[R]=ci(cg(()=>{rs(Q);const h=Q._s.get(A);return E[R].call(h,h)})),F),{}))}return i=vf(A,a,B,Q,g,!0),i}function vf(A,B,Q={},g,t,e){let E;const I=Qn({actions:{}},Q),i={deep:!0};let a,w,F=[],R=[],h;const y=g.state.value[A];!e&&!y&&(g.state.value[A]={}),zB({});let p;function M(j){let $;a=w=!1,typeof j=="function"?(j(g.state.value[A]),$={type:OI.patchFunction,storeId:A,events:h}):(Lr(g.state.value[A],j),$={type:OI.patchObject,payload:j,storeId:A,events:h});const sA=p=Symbol();II().then(()=>{p===sA&&(a=!0)}),w=!0,kC(F,$,g.state.value[A])}const m=e?function(){const{state:$}=Q,sA=$?$():{};this.$patch(DA=>{Qn(DA,sA)})}:Hf;function N(){E.stop(),F=[],R=[],g._s.delete(A)}function AA(j,$){return function(){rs(g);const sA=Array.from(arguments),DA=[],lA=[];function yA(XA){DA.push(XA)}function uA(XA){lA.push(XA)}kC(R,{args:sA,name:j,store:x,after:yA,onError:uA});let EB;try{EB=$.apply(this&&this.$id===A?this:x,sA)}catch(XA){throw kC(lA,XA),XA}return EB instanceof Promise?EB.then(XA=>(kC(DA,XA),XA)).catch(XA=>(kC(lA,XA),Promise.reject(XA))):(kC(DA,EB),EB)}}const v={_p:g,$id:A,$onAction:HD.bind(null,R),$patch:M,$reset:m,$subscribe(j,$={}){const sA=HD(F,j,$.detached,()=>DA()),DA=E.run(()=>ut(()=>g.state.value[A],lA=>{($.flush==="sync"?w:a)&&j({storeId:A,type:OI.direct,events:h},lA)},Qn({},i,$)));return sA},$dispose:N},x=CI(v);g._s.set(A,x);const iA=g._a&&g._a.runWithContext||cY,cA=g._e.run(()=>(E=wl(),iA(()=>E.run(B))));for(const j in cA){const $=cA[j];if(fQ($)&&!FY($)||FE($))e||(y&&lY($)&&(fQ($)?$.value=y[j]:Lr($,y[j])),g.state.value[A][j]=$);else if(typeof $=="function"){const sA=AA(j,$);cA[j]=sA,I.actions[j]=$}}return Qn(x,cA),Qn(NB(x),cA),Object.defineProperty(x,"$state",{get:()=>g.state.value[A],set:j=>{M($=>{Qn($,j)})}}),g._p.forEach(j=>{Qn(x,E.run(()=>j({store:x,app:g._a,pinia:g,options:I})))}),y&&e&&Q.hydrate&&Q.hydrate(x.$state,y),a=!0,w=!0,x}function ls(A,B,Q){let g,t;const e=typeof B=="function";typeof A=="string"?(g=A,t=e?Q:B):(t=A,g=A.id);function E(I,i){const a=qd();return I=I||(a?ht(Sf,null):null),I&&rs(I),I=Xf,I._s.has(g)||(e?vf(g,B,t,I):DY(g,t,I)),I._s.get(g)}return E.$id=g,E}var UY=Object.defineProperty,vD=Object.getOwnPropertySymbols,dY=Object.prototype.hasOwnProperty,fY=Object.prototype.propertyIsEnumerable,WD=(A,B,Q)=>B in A?UY(A,B,{enumerable:!0,configurable:!0,writable:!0,value:Q}):A[B]=Q,Wf=(A,B)=>{for(var Q in B||(B={}))dY.call(B,Q)&&WD(A,Q,B[Q]);if(vD)for(var Q of vD(B))fY.call(B,Q)&&WD(A,Q,B[Q]);return A},Fs=A=>typeof A=="function",Ds=A=>typeof A=="string",Tf=A=>Ds(A)&&A.trim().length>0,MY=A=>typeof A=="number",BC=A=>typeof A>"u",ei=A=>typeof A=="object"&&A!==null,uY=A=>ke(A,"tag")&&Tf(A.tag),Of=A=>window.TouchEvent&&A instanceof TouchEvent,Vf=A=>ke(A,"component")&&xf(A.component),hY=A=>Fs(A)||ei(A),xf=A=>!BC(A)&&(Ds(A)||hY(A)||Vf(A)),TD=A=>ei(A)&&["height","width","right","left","top","bottom"].every(B=>MY(A[B])),ke=(A,B)=>(ei(A)||Fs(A))&&B in A,GY=(A=>()=>A++)(0);function Vc(A){return Of(A)?A.targetTouches[0].clientX:A.clientX}function OD(A){return Of(A)?A.targetTouches[0].clientY:A.clientY}var RY=A=>{BC(A.remove)?A.parentNode&&A.parentNode.removeChild(A):A.remove()},ui=A=>Vf(A)?ui(A.component):uY(A)?Zg({render(){return A}}):typeof A=="string"?A:NB(ft(A)),YY=A=>{if(typeof A=="string")return A;const B=ke(A,"props")&&ei(A.props)?A.props:{},Q=ke(A,"listeners")&&ei(A.listeners)?A.listeners:{};return{component:ui(A),props:B,listeners:Q}},pY=()=>typeof window<"u",Wl=class{constructor(){this.allHandlers={}}getHandlers(A){return this.allHandlers[A]||[]}on(A,B){const Q=this.getHandlers(A);Q.push(B),this.allHandlers[A]=Q}off(A,B){const Q=this.getHandlers(A);Q.splice(Q.indexOf(B)>>>0,1)}emit(A,B){this.getHandlers(A).forEach(g=>g(B))}},NY=A=>["on","off","emit"].every(B=>ke(A,B)&&Fs(A[B])),Ut;(function(A){A.SUCCESS="success",A.ERROR="error",A.WARNING="warning",A.INFO="info",A.DEFAULT="default"})(Ut||(Ut={}));var Ei;(function(A){A.TOP_LEFT="top-left",A.TOP_CENTER="top-center",A.TOP_RIGHT="top-right",A.BOTTOM_LEFT="bottom-left",A.BOTTOM_CENTER="bottom-center",A.BOTTOM_RIGHT="bottom-right"})(Ei||(Ei={}));var dt;(function(A){A.ADD="add",A.DISMISS="dismiss",A.UPDATE="update",A.CLEAR="clear",A.UPDATE_DEFAULTS="update_defaults"})(dt||(dt={}));var Ie="Vue-Toastification",Ee={type:{type:String,default:Ut.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},zf={type:Ee.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},ho={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:Ee.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},Xr={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},Kf={transition:{type:[Object,String],default:`${Ie}__bounce`}},bY={position:{type:String,default:Ei.TOP_RIGHT},draggable:Ee.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:Ee.trueBoolean,pauseOnHover:Ee.trueBoolean,closeOnClick:Ee.trueBoolean,timeout:Xr.timeout,hideProgressBar:Xr.hideProgressBar,toastClassName:Ee.classNames,bodyClassName:Ee.classNames,icon:zf.customIcon,closeButton:ho.component,closeButtonClassName:ho.classNames,showCloseButtonOnHover:ho.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new Wl}},mY={id:{type:[String,Number],required:!0,default:0},type:Ee.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},JY={container:{type:[Object,Function],default:()=>document.body},newestOnTop:Ee.trueBoolean,maxToasts:{type:Number,default:20},transition:Kf.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:A=>A},filterToasts:{type:Function,default:A=>A},containerClassName:Ee.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},UE={CORE_TOAST:bY,TOAST:mY,CONTAINER:JY,PROGRESS_BAR:Xr,ICON:zf,TRANSITION:Kf,CLOSE_BUTTON:ho},Pf=Zg({name:"VtProgressBar",props:UE.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${Ie}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function yY(A,B){return fB(),TB("div",{style:Mn(A.style),class:Le(A.cpClass)},null,6)}Pf.render=yY;var kY=Pf,jf=Zg({name:"VtCloseButton",props:UE.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?ui(this.component):"button"},classes(){const A=[`${Ie}__close-button`];return this.showOnHover&&A.push("show-on-hover"),A.concat(this.classNames)}}}),ZY=UC(" × ");function LY(A,B){return fB(),Ot(Cs(A.buttonComponent),Mi({"aria-label":A.ariaLabel,class:A.classes},A.$attrs),{default:hE(()=>[ZY]),_:1},16,["aria-label","class"])}jf.render=LY;var XY=jf,qf={},SY={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},HY=xA("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),vY=[HY];function WY(A,B){return fB(),TB("svg",SY,vY)}qf.render=WY;var TY=qf,_f={},OY={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},VY=xA("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),xY=[VY];function zY(A,B){return fB(),TB("svg",OY,xY)}_f.render=zY;var VD=_f,$f={},KY={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},PY=xA("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),jY=[PY];function qY(A,B){return fB(),TB("svg",KY,jY)}$f.render=qY;var _Y=$f,A0={},$Y={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},Ap=xA("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Bp=[Ap];function Qp(A,B){return fB(),TB("svg",$Y,Bp)}A0.render=Qp;var gp=A0,B0=Zg({name:"VtIcon",props:UE.ICON,computed:{customIconChildren(){return ke(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return Ds(this.customIcon)?this.trimValue(this.customIcon):ke(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return ke(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:xf(this.customIcon)?ui(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Ut.DEFAULT]:VD,[Ut.INFO]:VD,[Ut.SUCCESS]:TY,[Ut.ERROR]:gp,[Ut.WARNING]:_Y}[this.type]},iconClasses(){const A=[`${Ie}__icon`];return this.hasCustomIcon?A.concat(this.customIconClass):A}},methods:{trimValue(A,B=""){return Tf(A)?A.trim():B}}});function tp(A,B){return fB(),Ot(Cs(A.component),{class:Le(A.iconClasses)},{default:hE(()=>[UC(Wt(A.customIconChildren),1)]),_:1},8,["class"])}B0.render=tp;var ep=B0,Q0=Zg({name:"VtToast",components:{ProgressBar:kY,CloseButton:XY,Icon:ep},inheritAttrs:!1,props:Object.assign({},UE.CORE_TOAST,UE.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const A=[`${Ie}__toast`,`${Ie}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&A.push("disable-transition"),this.rtl&&A.push(`${Ie}__toast--rtl`),A},bodyClasses(){return[`${Ie}__toast-${Ds(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return TD(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:ke,getVueComponentFromObj:ui,closeToast(){this.eventBus.emit(dt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const A=this.$el;A.addEventListener("touchstart",this.onDragStart,{passive:!0}),A.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const A=this.$el;A.removeEventListener("touchstart",this.onDragStart),A.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(A){this.beingDragged=!0,this.dragPos={x:Vc(A),y:OD(A)},this.dragStart=Vc(A),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(A){this.beingDragged&&(A.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:Vc(A),y:OD(A)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,TD(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),Ep=["role"];function np(A,B){const Q=Cn("Icon"),g=Cn("CloseButton"),t=Cn("ProgressBar");return fB(),TB("div",{class:Le(A.classes),style:Mn(A.draggableStyle),onClick:B[0]||(B[0]=(...e)=>A.clickHandler&&A.clickHandler(...e)),onMouseenter:B[1]||(B[1]=(...e)=>A.hoverPause&&A.hoverPause(...e)),onMouseleave:B[2]||(B[2]=(...e)=>A.hoverPlay&&A.hoverPlay(...e))},[A.icon?(fB(),Ot(Q,{key:0,"custom-icon":A.icon,type:A.type},null,8,["custom-icon","type"])):ye("v-if",!0),xA("div",{role:A.accessibility.toastRole||"alert",class:Le(A.bodyClasses)},[typeof A.content=="string"?(fB(),TB(sQ,{key:0},[UC(Wt(A.content),1)],2112)):(fB(),Ot(Cs(A.getVueComponentFromObj(A.content)),Mi({key:1,"toast-id":A.id},A.hasProp(A.content,"props")?A.content.props:{},zd(A.hasProp(A.content,"listeners")?A.content.listeners:{}),{onCloseToast:A.closeToast}),null,16,["toast-id","onCloseToast"]))],10,Ep),A.closeButton?(fB(),Ot(g,{key:1,component:A.closeButton,"class-names":A.closeButtonClassName,"show-on-hover":A.showCloseButtonOnHover,"aria-label":A.accessibility.closeButtonLabel,onClick:SC(A.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):ye("v-if",!0),A.timeout?(fB(),Ot(t,{key:2,"is-running":A.isRunning,"hide-progress-bar":A.hideProgressBar,timeout:A.timeout,onCloseToast:A.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):ye("v-if",!0)],38)}Q0.render=np;var Cp=Q0,g0=Zg({name:"VtTransition",props:UE.TRANSITION,emits:["leave"],methods:{hasProp:ke,leave(A){A instanceof HTMLElement&&(A.style.left=A.offsetLeft+"px",A.style.top=A.offsetTop+"px",A.style.width=getComputedStyle(A).width,A.style.position="absolute")}}});function Ip(A,B){return fB(),Ot(pf,{tag:"div","enter-active-class":A.transition.enter?A.transition.enter:`${A.transition}-enter-active`,"move-class":A.transition.move?A.transition.move:`${A.transition}-move`,"leave-active-class":A.transition.leave?A.transition.leave:`${A.transition}-leave-active`,onLeave:A.leave},{default:hE(()=>[Is(A.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}g0.render=Ip;var ip=g0,t0=Zg({name:"VueToastification",devtools:{hide:!0},components:{Toast:Cp,VtTransition:ip},props:Object.assign({},UE.CORE_TOAST,UE.CONTAINER,UE.TRANSITION),data(){return{count:0,positions:Object.values(Ei),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const A=this.eventBus;A.on(dt.ADD,this.addToast),A.on(dt.CLEAR,this.clearToasts),A.on(dt.DISMISS,this.dismissToast),A.on(dt.UPDATE,this.updateToast),A.on(dt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(A){Fs(A)&&(A=await A()),RY(this.$el),A.appendChild(this.$el)},setToast(A){BC(A.id)||(this.toasts[A.id]=A)},addToast(A){A.content=YY(A.content);const B=Object.assign({},this.defaults,A.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[A.type],A),Q=this.defaults.filterBeforeCreate(B,this.toastArray);Q&&this.setToast(Q)},dismissToast(A){const B=this.toasts[A];!BC(B)&&!BC(B.onClose)&&B.onClose(),delete this.toasts[A]},clearToasts(){Object.keys(this.toasts).forEach(A=>{this.dismissToast(A)})},getPositionToasts(A){const B=this.filteredToasts.filter(Q=>Q.position===A).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?B.reverse():B},updateDefaults(A){BC(A.container)||this.setup(A.container),this.defaults=Object.assign({},this.defaults,A)},updateToast({id:A,options:B,create:Q}){this.toasts[A]?(B.timeout&&B.timeout===this.toasts[A].timeout&&B.timeout++,this.setToast(Object.assign({},this.toasts[A],B))):Q&&this.addToast(Object.assign({},{id:A},B))},getClasses(A){return[`${Ie}__container`,A].concat(this.defaults.containerClassName)}}});function op(A,B){const Q=Cn("Toast"),g=Cn("VtTransition");return fB(),TB("div",null,[(fB(!0),TB(sQ,null,VC(A.positions,t=>(fB(),TB("div",{key:t},[SB(g,{transition:A.defaults.transition,class:Le(A.getClasses(t))},{default:hE(()=>[(fB(!0),TB(sQ,null,VC(A.getPositionToasts(t),e=>(fB(),Ot(Q,Mi({key:e.id},e),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}t0.render=op;var sp=t0,xD=(A={},B=!0)=>{const Q=A.eventBus=A.eventBus||new Wl;B&&II(()=>{const e=vl(sp,Wf({},A)),E=e.mount(document.createElement("div")),I=A.onMounted;if(BC(I)||I(E,e),A.shareAppContext){const i=A.shareAppContext;i===!0?console.warn(`[${Ie}] App to share context with was not provided.`):(e._context.components=i._context.components,e._context.directives=i._context.directives,e._context.mixins=i._context.mixins,e._context.provides=i._context.provides,e.config.globalProperties=i.config.globalProperties)}});const g=(e,E)=>{const I=Object.assign({},{id:GY(),type:Ut.DEFAULT},E,{content:e});return Q.emit(dt.ADD,I),I.id};g.clear=()=>Q.emit(dt.CLEAR,void 0),g.updateDefaults=e=>{Q.emit(dt.UPDATE_DEFAULTS,e)},g.dismiss=e=>{Q.emit(dt.DISMISS,e)};function t(e,{content:E,options:I},i=!1){const a=Object.assign({},I,{content:E});Q.emit(dt.UPDATE,{id:e,options:a,create:i})}return g.update=t,g.success=(e,E)=>g(e,Object.assign({},E,{type:Ut.SUCCESS})),g.info=(e,E)=>g(e,Object.assign({},E,{type:Ut.INFO})),g.error=(e,E)=>g(e,Object.assign({},E,{type:Ut.ERROR})),g.warning=(e,E)=>g(e,Object.assign({},E,{type:Ut.WARNING})),g},ap=()=>{const A=()=>console.warn(`[${Ie}] This plugin does not support SSR!`);return new Proxy(A,{get(){return A}})};function Sr(A){return pY()?NY(A)?xD({eventBus:A},!1):xD(A,!0):ap()}var e0=Symbol("VueToastification"),E0=new Wl,wp=(A,B)=>{(B==null?void 0:B.shareAppContext)===!0&&(B.shareAppContext=A);const Q=Sr(Wf({eventBus:E0},B));A.provide(e0,Q)},n0=A=>{if(A)return Sr(A);const B=ve()?ht(e0,void 0):void 0;return B||Sr(E0)},cp=wp;/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const LC=typeof window<"u";function rp(A){return A.__esModule||A[Symbol.toStringTag]==="Module"}const VB=Object.assign;function xc(A,B){const Q={};for(const g in B){const t=B[g];Q[g]=se(t)?t.map(A):A(t)}return Q}const VI=()=>{},se=Array.isArray,lp=/\/$/,Fp=A=>A.replace(lp,"");function zc(A,B,Q="/"){let g,t={},e="",E="";const I=B.indexOf("#");let i=B.indexOf("?");return I<i&&I>=0&&(i=-1),i>-1&&(g=B.slice(0,i),e=B.slice(i+1,I>-1?I:B.length),t=A(e)),I>-1&&(g=g||B.slice(0,I),E=B.slice(I,B.length)),g=fp(g??B,Q),{fullPath:g+(e&&"?")+e+E,path:g,query:t,hash:E}}function Dp(A,B){const Q=B.query?A(B.query):"";return B.path+(Q&&"?")+Q+(B.hash||"")}function zD(A,B){return!B||!A.toLowerCase().startsWith(B.toLowerCase())?A:A.slice(B.length)||"/"}function Up(A,B,Q){const g=B.matched.length-1,t=Q.matched.length-1;return g>-1&&g===t&&qC(B.matched[g],Q.matched[t])&&C0(B.params,Q.params)&&A(B.query)===A(Q.query)&&B.hash===Q.hash}function qC(A,B){return(A.aliasOf||A)===(B.aliasOf||B)}function C0(A,B){if(Object.keys(A).length!==Object.keys(B).length)return!1;for(const Q in A)if(!dp(A[Q],B[Q]))return!1;return!0}function dp(A,B){return se(A)?KD(A,B):se(B)?KD(B,A):A===B}function KD(A,B){return se(B)?A.length===B.length&&A.every((Q,g)=>Q===B[g]):A.length===1&&A[0]===B}function fp(A,B){if(A.startsWith("/"))return A;if(!A)return B;const Q=B.split("/"),g=A.split("/"),t=g[g.length-1];(t===".."||t===".")&&g.push("");let e=Q.length-1,E,I;for(E=0;E<g.length;E++)if(I=g[E],I!==".")if(I==="..")e>1&&e--;else break;return Q.slice(0,e).join("/")+"/"+g.slice(E-(E===g.length?1:0)).join("/")}var ni;(function(A){A.pop="pop",A.push="push"})(ni||(ni={}));var xI;(function(A){A.back="back",A.forward="forward",A.unknown=""})(xI||(xI={}));function Mp(A){if(!A)if(LC){const B=document.querySelector("base");A=B&&B.getAttribute("href")||"/",A=A.replace(/^\w+:\/\/[^\/]+/,"")}else A="/";return A[0]!=="/"&&A[0]!=="#"&&(A="/"+A),Fp(A)}const up=/^[^#]+#/;function hp(A,B){return A.replace(up,"#")+B}function Gp(A,B){const Q=document.documentElement.getBoundingClientRect(),g=A.getBoundingClientRect();return{behavior:B.behavior,left:g.left-Q.left-(B.left||0),top:g.top-Q.top-(B.top||0)}}const Us=()=>({left:window.pageXOffset,top:window.pageYOffset});function Rp(A){let B;if("el"in A){const Q=A.el,g=typeof Q=="string"&&Q.startsWith("#"),t=typeof Q=="string"?g?document.getElementById(Q.slice(1)):document.querySelector(Q):Q;if(!t)return;B=Gp(t,A)}else B=A;"scrollBehavior"in document.documentElement.style?window.scrollTo(B):window.scrollTo(B.left!=null?B.left:window.pageXOffset,B.top!=null?B.top:window.pageYOffset)}function PD(A,B){return(history.state?history.state.position-B:-1)+A}const Hr=new Map;function Yp(A,B){Hr.set(A,B)}function pp(A){const B=Hr.get(A);return Hr.delete(A),B}let Np=()=>location.protocol+"//"+location.host;function I0(A,B){const{pathname:Q,search:g,hash:t}=B,e=A.indexOf("#");if(e>-1){let I=t.includes(A.slice(e))?A.slice(e).length:1,i=t.slice(I);return i[0]!=="/"&&(i="/"+i),zD(i,"")}return zD(Q,A)+g+t}function bp(A,B,Q,g){let t=[],e=[],E=null;const I=({state:R})=>{const h=I0(A,location),y=Q.value,p=B.value;let M=0;if(R){if(Q.value=h,B.value=R,E&&E===y){E=null;return}M=p?R.position-p.position:0}else g(h);t.forEach(m=>{m(Q.value,y,{delta:M,type:ni.pop,direction:M?M>0?xI.forward:xI.back:xI.unknown})})};function i(){E=Q.value}function a(R){t.push(R);const h=()=>{const y=t.indexOf(R);y>-1&&t.splice(y,1)};return e.push(h),h}function w(){const{history:R}=window;R.state&&R.replaceState(VB({},R.state,{scroll:Us()}),"")}function F(){for(const R of e)R();e=[],window.removeEventListener("popstate",I),window.removeEventListener("beforeunload",w)}return window.addEventListener("popstate",I),window.addEventListener("beforeunload",w,{passive:!0}),{pauseListeners:i,listen:a,destroy:F}}function jD(A,B,Q,g=!1,t=!1){return{back:A,current:B,forward:Q,replaced:g,position:window.history.length,scroll:t?Us():null}}function mp(A){const{history:B,location:Q}=window,g={value:I0(A,Q)},t={value:B.state};t.value||e(g.value,{back:null,current:g.value,forward:null,position:B.length-1,replaced:!0,scroll:null},!0);function e(i,a,w){const F=A.indexOf("#"),R=F>-1?(Q.host&&document.querySelector("base")?A:A.slice(F))+i:Np()+A+i;try{B[w?"replaceState":"pushState"](a,"",R),t.value=a}catch(h){console.error(h),Q[w?"replace":"assign"](R)}}function E(i,a){const w=VB({},B.state,jD(t.value.back,i,t.value.forward,!0),a,{position:t.value.position});e(i,w,!0),g.value=i}function I(i,a){const w=VB({},t.value,B.state,{forward:i,scroll:Us()});e(w.current,w,!0);const F=VB({},jD(g.value,i,null),{position:w.position+1},a);e(i,F,!1),g.value=i}return{location:g,state:t,push:I,replace:E}}function Jp(A){A=Mp(A);const B=mp(A),Q=bp(A,B.state,B.location,B.replace);function g(e,E=!0){E||Q.pauseListeners(),history.go(e)}const t=VB({location:"",base:A,go:g,createHref:hp.bind(null,A)},B,Q);return Object.defineProperty(t,"location",{enumerable:!0,get:()=>B.location.value}),Object.defineProperty(t,"state",{enumerable:!0,get:()=>B.state.value}),t}function yp(A){return A=location.host?A||location.pathname+location.search:"",A.includes("#")||(A+="#"),Jp(A)}function kp(A){return typeof A=="string"||A&&typeof A=="object"}function i0(A){return typeof A=="string"||typeof A=="symbol"}const $E={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},o0=Symbol("");var qD;(function(A){A[A.aborted=4]="aborted",A[A.cancelled=8]="cancelled",A[A.duplicated=16]="duplicated"})(qD||(qD={}));function _C(A,B){return VB(new Error,{type:A,[o0]:!0},B)}function oE(A,B){return A instanceof Error&&o0 in A&&(B==null||!!(A.type&B))}const _D="[^/]+?",Zp={sensitive:!1,strict:!1,start:!0,end:!0},Lp=/[.+*?^${}()[\]/\\]/g;function Xp(A,B){const Q=VB({},Zp,B),g=[];let t=Q.start?"^":"";const e=[];for(const a of A){const w=a.length?[]:[90];Q.strict&&!a.length&&(t+="/");for(let F=0;F<a.length;F++){const R=a[F];let h=40+(Q.sensitive?.25:0);if(R.type===0)F||(t+="/"),t+=R.value.replace(Lp,"\\$&"),h+=40;else if(R.type===1){const{value:y,repeatable:p,optional:M,regexp:m}=R;e.push({name:y,repeatable:p,optional:M});const N=m||_D;if(N!==_D){h+=10;try{new RegExp(`(${N})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${y}" (${N}): `+v.message)}}let AA=p?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;F||(AA=M&&a.length<2?`(?:/${AA})`:"/"+AA),M&&(AA+="?"),t+=AA,h+=20,M&&(h+=-8),p&&(h+=-20),N===".*"&&(h+=-50)}w.push(h)}g.push(w)}if(Q.strict&&Q.end){const a=g.length-1;g[a][g[a].length-1]+=.7000000000000001}Q.strict||(t+="/?"),Q.end?t+="$":Q.strict&&(t+="(?:/|$)");const E=new RegExp(t,Q.sensitive?"":"i");function I(a){const w=a.match(E),F={};if(!w)return null;for(let R=1;R<w.length;R++){const h=w[R]||"",y=e[R-1];F[y.name]=h&&y.repeatable?h.split("/"):h}return F}function i(a){let w="",F=!1;for(const R of A){(!F||!w.endsWith("/"))&&(w+="/"),F=!1;for(const h of R)if(h.type===0)w+=h.value;else if(h.type===1){const{value:y,repeatable:p,optional:M}=h,m=y in a?a[y]:"";if(se(m)&&!p)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const N=se(m)?m.join("/"):m;if(!N)if(M)R.length<2&&(w.endsWith("/")?w=w.slice(0,-1):F=!0);else throw new Error(`Missing required param "${y}"`);w+=N}}return w||"/"}return{re:E,score:g,keys:e,parse:I,stringify:i}}function Sp(A,B){let Q=0;for(;Q<A.length&&Q<B.length;){const g=B[Q]-A[Q];if(g)return g;Q++}return A.length<B.length?A.length===1&&A[0]===40+40?-1:1:A.length>B.length?B.length===1&&B[0]===40+40?1:-1:0}function Hp(A,B){let Q=0;const g=A.score,t=B.score;for(;Q<g.length&&Q<t.length;){const e=Sp(g[Q],t[Q]);if(e)return e;Q++}if(Math.abs(t.length-g.length)===1){if($D(g))return 1;if($D(t))return-1}return t.length-g.length}function $D(A){const B=A[A.length-1];return A.length>0&&B[B.length-1]<0}const vp={type:0,value:""},Wp=/[a-zA-Z0-9_]/;function Tp(A){if(!A)return[[]];if(A==="/")return[[vp]];if(!A.startsWith("/"))throw new Error(`Invalid path "${A}"`);function B(h){throw new Error(`ERR (${Q})/"${a}": ${h}`)}let Q=0,g=Q;const t=[];let e;function E(){e&&t.push(e),e=[]}let I=0,i,a="",w="";function F(){a&&(Q===0?e.push({type:0,value:a}):Q===1||Q===2||Q===3?(e.length>1&&(i==="*"||i==="+")&&B(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),e.push({type:1,value:a,regexp:w,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):B("Invalid state to consume buffer"),a="")}function R(){a+=i}for(;I<A.length;){if(i=A[I++],i==="\\"&&Q!==2){g=Q,Q=4;continue}switch(Q){case 0:i==="/"?(a&&F(),E()):i===":"?(F(),Q=1):R();break;case 4:R(),Q=g;break;case 1:i==="("?Q=2:Wp.test(i)?R():(F(),Q=0,i!=="*"&&i!=="?"&&i!=="+"&&I--);break;case 2:i===")"?w[w.length-1]=="\\"?w=w.slice(0,-1)+i:Q=3:w+=i;break;case 3:F(),Q=0,i!=="*"&&i!=="?"&&i!=="+"&&I--,w="";break;default:B("Unknown state");break}}return Q===2&&B(`Unfinished custom RegExp for param "${a}"`),F(),E(),t}function Op(A,B,Q){const g=Xp(Tp(A.path),Q),t=VB(g,{record:A,parent:B,children:[],alias:[]});return B&&!t.record.aliasOf==!B.record.aliasOf&&B.children.push(t),t}function Vp(A,B){const Q=[],g=new Map;B=QU({strict:!1,end:!0,sensitive:!1},B);function t(w){return g.get(w)}function e(w,F,R){const h=!R,y=xp(w);y.aliasOf=R&&R.record;const p=QU(B,w),M=[y];if("alias"in w){const AA=typeof w.alias=="string"?[w.alias]:w.alias;for(const v of AA)M.push(VB({},y,{components:R?R.record.components:y.components,path:v,aliasOf:R?R.record:y}))}let m,N;for(const AA of M){const{path:v}=AA;if(F&&v[0]!=="/"){const x=F.record.path,iA=x[x.length-1]==="/"?"":"/";AA.path=F.record.path+(v&&iA+v)}if(m=Op(AA,F,p),R?R.alias.push(m):(N=N||m,N!==m&&N.alias.push(m),h&&w.name&&!BU(m)&&E(w.name)),y.children){const x=y.children;for(let iA=0;iA<x.length;iA++)e(x[iA],m,R&&R.children[iA])}R=R||m,(m.record.components&&Object.keys(m.record.components).length||m.record.name||m.record.redirect)&&i(m)}return N?()=>{E(N)}:VI}function E(w){if(i0(w)){const F=g.get(w);F&&(g.delete(w),Q.splice(Q.indexOf(F),1),F.children.forEach(E),F.alias.forEach(E))}else{const F=Q.indexOf(w);F>-1&&(Q.splice(F,1),w.record.name&&g.delete(w.record.name),w.children.forEach(E),w.alias.forEach(E))}}function I(){return Q}function i(w){let F=0;for(;F<Q.length&&Hp(w,Q[F])>=0&&(w.record.path!==Q[F].record.path||!s0(w,Q[F]));)F++;Q.splice(F,0,w),w.record.name&&!BU(w)&&g.set(w.record.name,w)}function a(w,F){let R,h={},y,p;if("name"in w&&w.name){if(R=g.get(w.name),!R)throw _C(1,{location:w});p=R.record.name,h=VB(AU(F.params,R.keys.filter(N=>!N.optional).map(N=>N.name)),w.params&&AU(w.params,R.keys.map(N=>N.name))),y=R.stringify(h)}else if("path"in w)y=w.path,R=Q.find(N=>N.re.test(y)),R&&(h=R.parse(y),p=R.record.name);else{if(R=F.name?g.get(F.name):Q.find(N=>N.re.test(F.path)),!R)throw _C(1,{location:w,currentLocation:F});p=R.record.name,h=VB({},F.params,w.params),y=R.stringify(h)}const M=[];let m=R;for(;m;)M.unshift(m.record),m=m.parent;return{name:p,path:y,params:h,matched:M,meta:Kp(M)}}return A.forEach(w=>e(w)),{addRoute:e,resolve:a,removeRoute:E,getRoutes:I,getRecordMatcher:t}}function AU(A,B){const Q={};for(const g of B)g in A&&(Q[g]=A[g]);return Q}function xp(A){return{path:A.path,redirect:A.redirect,name:A.name,meta:A.meta||{},aliasOf:void 0,beforeEnter:A.beforeEnter,props:zp(A),children:A.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in A?A.components||null:A.component&&{default:A.component}}}function zp(A){const B={},Q=A.props||!1;if("component"in A)B.default=Q;else for(const g in A.components)B[g]=typeof Q=="object"?Q[g]:Q;return B}function BU(A){for(;A;){if(A.record.aliasOf)return!0;A=A.parent}return!1}function Kp(A){return A.reduce((B,Q)=>VB(B,Q.meta),{})}function QU(A,B){const Q={};for(const g in A)Q[g]=g in B?B[g]:A[g];return Q}function s0(A,B){return B.children.some(Q=>Q===A||s0(A,Q))}const a0=/#/g,Pp=/&/g,jp=/\//g,qp=/=/g,_p=/\?/g,w0=/\+/g,$p=/%5B/g,AN=/%5D/g,c0=/%5E/g,BN=/%60/g,r0=/%7B/g,QN=/%7C/g,l0=/%7D/g,gN=/%20/g;function Tl(A){return encodeURI(""+A).replace(QN,"|").replace($p,"[").replace(AN,"]")}function tN(A){return Tl(A).replace(r0,"{").replace(l0,"}").replace(c0,"^")}function vr(A){return Tl(A).replace(w0,"%2B").replace(gN,"+").replace(a0,"%23").replace(Pp,"%26").replace(BN,"`").replace(r0,"{").replace(l0,"}").replace(c0,"^")}function eN(A){return vr(A).replace(qp,"%3D")}function EN(A){return Tl(A).replace(a0,"%23").replace(_p,"%3F")}function nN(A){return A==null?"":EN(A).replace(jp,"%2F")}function vo(A){try{return decodeURIComponent(""+A)}catch{}return""+A}function CN(A){const B={};if(A===""||A==="?")return B;const g=(A[0]==="?"?A.slice(1):A).split("&");for(let t=0;t<g.length;++t){const e=g[t].replace(w0," "),E=e.indexOf("="),I=vo(E<0?e:e.slice(0,E)),i=E<0?null:vo(e.slice(E+1));if(I in B){let a=B[I];se(a)||(a=B[I]=[a]),a.push(i)}else B[I]=i}return B}function gU(A){let B="";for(let Q in A){const g=A[Q];if(Q=eN(Q),g==null){g!==void 0&&(B+=(B.length?"&":"")+Q);continue}(se(g)?g.map(e=>e&&vr(e)):[g&&vr(g)]).forEach(e=>{e!==void 0&&(B+=(B.length?"&":"")+Q,e!=null&&(B+="="+e))})}return B}function IN(A){const B={};for(const Q in A){const g=A[Q];g!==void 0&&(B[Q]=se(g)?g.map(t=>t==null?null:""+t):g==null?g:""+g)}return B}const iN=Symbol(""),tU=Symbol(""),ds=Symbol(""),F0=Symbol(""),Wr=Symbol("");function bI(){let A=[];function B(g){return A.push(g),()=>{const t=A.indexOf(g);t>-1&&A.splice(t,1)}}function Q(){A=[]}return{add:B,list:()=>A.slice(),reset:Q}}function tn(A,B,Q,g,t){const e=g&&(g.enterCallbacks[t]=g.enterCallbacks[t]||[]);return()=>new Promise((E,I)=>{const i=F=>{F===!1?I(_C(4,{from:Q,to:B})):F instanceof Error?I(F):kp(F)?I(_C(2,{from:B,to:F})):(e&&g.enterCallbacks[t]===e&&typeof F=="function"&&e.push(F),E())},a=A.call(g&&g.instances[t],B,Q,i);let w=Promise.resolve(a);A.length<3&&(w=w.then(i)),w.catch(F=>I(F))})}function Kc(A,B,Q,g){const t=[];for(const e of A)for(const E in e.components){let I=e.components[E];if(!(B!=="beforeRouteEnter"&&!e.instances[E]))if(oN(I)){const a=(I.__vccOpts||I)[B];a&&t.push(tn(a,Q,g,e,E))}else{let i=I();t.push(()=>i.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${E}" at "${e.path}"`));const w=rp(a)?a.default:a;e.components[E]=w;const R=(w.__vccOpts||w)[B];return R&&tn(R,Q,g,e,E)()}))}}return t}function oN(A){return typeof A=="object"||"displayName"in A||"props"in A||"__vccOpts"in A}function eU(A){const B=ht(ds),Q=ht(F0),g=cg(()=>B.resolve(ft(A.to))),t=cg(()=>{const{matched:i}=g.value,{length:a}=i,w=i[a-1],F=Q.matched;if(!w||!F.length)return-1;const R=F.findIndex(qC.bind(null,w));if(R>-1)return R;const h=EU(i[a-2]);return a>1&&EU(w)===h&&F[F.length-1].path!==h?F.findIndex(qC.bind(null,i[a-2])):R}),e=cg(()=>t.value>-1&&cN(Q.params,g.value.params)),E=cg(()=>t.value>-1&&t.value===Q.matched.length-1&&C0(Q.params,g.value.params));function I(i={}){return wN(i)?B[ft(A.replace)?"replace":"push"](ft(A.to)).catch(VI):Promise.resolve()}return{route:g,href:cg(()=>g.value.href),isActive:e,isExactActive:E,navigate:I}}const sN=Zg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:eU,setup(A,{slots:B}){const Q=CI(eU(A)),{options:g}=ht(ds),t=cg(()=>({[nU(A.activeClass,g.linkActiveClass,"router-link-active")]:Q.isActive,[nU(A.exactActiveClass,g.linkExactActiveClass,"router-link-exact-active")]:Q.isExactActive}));return()=>{const e=B.default&&B.default(Q);return A.custom?e:ss("a",{"aria-current":Q.isExactActive?A.ariaCurrentValue:null,href:Q.href,onClick:Q.navigate,class:t.value},e)}}}),aN=sN;function wN(A){if(!(A.metaKey||A.altKey||A.ctrlKey||A.shiftKey)&&!A.defaultPrevented&&!(A.button!==void 0&&A.button!==0)){if(A.currentTarget&&A.currentTarget.getAttribute){const B=A.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(B))return}return A.preventDefault&&A.preventDefault(),!0}}function cN(A,B){for(const Q in B){const g=B[Q],t=A[Q];if(typeof g=="string"){if(g!==t)return!1}else if(!se(t)||t.length!==g.length||g.some((e,E)=>e!==t[E]))return!1}return!0}function EU(A){return A?A.aliasOf?A.aliasOf.path:A.path:""}const nU=(A,B,Q)=>A??B??Q,rN=Zg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(A,{attrs:B,slots:Q}){const g=ht(Wr),t=cg(()=>A.route||g.value),e=ht(tU,0),E=cg(()=>{let a=ft(e);const{matched:w}=t.value;let F;for(;(F=w[a])&&!F.components;)a++;return a}),I=cg(()=>t.value.matched[E.value]);HI(tU,cg(()=>E.value+1)),HI(iN,I),HI(Wr,t);const i=zB();return ut(()=>[i.value,I.value,A.name],([a,w,F],[R,h,y])=>{w&&(w.instances[F]=a,h&&h!==w&&a&&a===R&&(w.leaveGuards.size||(w.leaveGuards=h.leaveGuards),w.updateGuards.size||(w.updateGuards=h.updateGuards))),a&&w&&(!h||!qC(w,h)||!R)&&(w.enterCallbacks[F]||[]).forEach(p=>p(a))},{flush:"post"}),()=>{const a=t.value,w=A.name,F=I.value,R=F&&F.components[w];if(!R)return CU(Q.default,{Component:R,route:a});const h=F.props[w],y=h?h===!0?a.params:typeof h=="function"?h(a):h:null,M=ss(R,VB({},y,B,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(F.instances[w]=null)},ref:i}));return CU(Q.default,{Component:M,route:a})||M}}});function CU(A,B){if(!A)return null;const Q=A(B);return Q.length===1?Q[0]:Q}const lN=rN;function FN(A){const B=Vp(A.routes,A),Q=A.parseQuery||CN,g=A.stringifyQuery||gU,t=A.history,e=bI(),E=bI(),I=bI(),i=dd($E);let a=$E;LC&&A.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=xc.bind(null,z=>""+z),F=xc.bind(null,nN),R=xc.bind(null,vo);function h(z,ZA){let IA,bA;return i0(z)?(IA=B.getRecordMatcher(z),bA=ZA):bA=z,B.addRoute(bA,IA)}function y(z){const ZA=B.getRecordMatcher(z);ZA&&B.removeRoute(ZA)}function p(){return B.getRoutes().map(z=>z.record)}function M(z){return!!B.getRecordMatcher(z)}function m(z,ZA){if(ZA=VB({},ZA||i.value),typeof z=="string"){const K=zc(Q,z,ZA.path),nA=B.resolve({path:K.path},ZA),rA=t.createHref(K.fullPath);return VB(K,nA,{params:R(nA.params),hash:vo(K.hash),redirectedFrom:void 0,href:rA})}let IA;if("path"in z)IA=VB({},z,{path:zc(Q,z.path,ZA.path).path});else{const K=VB({},z.params);for(const nA in K)K[nA]==null&&delete K[nA];IA=VB({},z,{params:F(K)}),ZA.params=F(ZA.params)}const bA=B.resolve(IA,ZA),EA=z.hash||"";bA.params=w(R(bA.params));const L=Dp(g,VB({},z,{hash:tN(EA),path:bA.path})),H=t.createHref(L);return VB({fullPath:L,hash:EA,query:g===gU?IN(z.query):z.query||{}},bA,{redirectedFrom:void 0,href:H})}function N(z){return typeof z=="string"?zc(Q,z,i.value.path):VB({},z)}function AA(z,ZA){if(a!==z)return _C(8,{from:ZA,to:z})}function v(z){return cA(z)}function x(z){return v(VB(N(z),{replace:!0}))}function iA(z){const ZA=z.matched[z.matched.length-1];if(ZA&&ZA.redirect){const{redirect:IA}=ZA;let bA=typeof IA=="function"?IA(z):IA;return typeof bA=="string"&&(bA=bA.includes("?")||bA.includes("#")?bA=N(bA):{path:bA},bA.params={}),VB({query:z.query,hash:z.hash,params:"path"in bA?{}:z.params},bA)}}function cA(z,ZA){const IA=a=m(z),bA=i.value,EA=z.state,L=z.force,H=z.replace===!0,K=iA(IA);if(K)return cA(VB(N(K),{state:typeof K=="object"?VB({},EA,K.state):EA,force:L,replace:H}),ZA||IA);const nA=IA;nA.redirectedFrom=ZA;let rA;return!L&&Up(g,bA,IA)&&(rA=_C(16,{to:nA,from:bA}),uB(bA,bA,!0,!1)),(rA?Promise.resolve(rA):sA(nA,bA)).catch(aA=>oE(aA)?oE(aA,2)?aA:wB(aA):gB(aA,nA,bA)).then(aA=>{if(aA){if(oE(aA,2))return cA(VB({replace:H},N(aA.to),{state:typeof aA.to=="object"?VB({},EA,aA.to.state):EA,force:L}),ZA||nA)}else aA=lA(nA,bA,!0,H,EA);return DA(nA,bA,aA),aA})}function j(z,ZA){const IA=AA(z,ZA);return IA?Promise.reject(IA):Promise.resolve()}function $(z){const ZA=GB.values().next().value;return ZA&&typeof ZA.runWithContext=="function"?ZA.runWithContext(z):z()}function sA(z,ZA){let IA;const[bA,EA,L]=DN(z,ZA);IA=Kc(bA.reverse(),"beforeRouteLeave",z,ZA);for(const K of bA)K.leaveGuards.forEach(nA=>{IA.push(tn(nA,z,ZA))});const H=j.bind(null,z,ZA);return IA.push(H),mA(IA).then(()=>{IA=[];for(const K of e.list())IA.push(tn(K,z,ZA));return IA.push(H),mA(IA)}).then(()=>{IA=Kc(EA,"beforeRouteUpdate",z,ZA);for(const K of EA)K.updateGuards.forEach(nA=>{IA.push(tn(nA,z,ZA))});return IA.push(H),mA(IA)}).then(()=>{IA=[];for(const K of L)if(K.beforeEnter)if(se(K.beforeEnter))for(const nA of K.beforeEnter)IA.push(tn(nA,z,ZA));else IA.push(tn(K.beforeEnter,z,ZA));return IA.push(H),mA(IA)}).then(()=>(z.matched.forEach(K=>K.enterCallbacks={}),IA=Kc(L,"beforeRouteEnter",z,ZA),IA.push(H),mA(IA))).then(()=>{IA=[];for(const K of E.list())IA.push(tn(K,z,ZA));return IA.push(H),mA(IA)}).catch(K=>oE(K,8)?K:Promise.reject(K))}function DA(z,ZA,IA){I.list().forEach(bA=>$(()=>bA(z,ZA,IA)))}function lA(z,ZA,IA,bA,EA){const L=AA(z,ZA);if(L)return L;const H=ZA===$E,K=LC?history.state:{};IA&&(bA||H?t.replace(z.fullPath,VB({scroll:H&&K&&K.scroll},EA)):t.push(z.fullPath,EA)),i.value=z,uB(z,ZA,IA,H),wB()}let yA;function uA(){yA||(yA=t.listen((z,ZA,IA)=>{const bA=m(z),EA=iA(bA);if(EA){cA(VB(EA,{replace:!0}),bA).catch(VI);return}a=bA;const L=i.value;LC&&Yp(PD(L.fullPath,IA.delta),Us()),sA(bA,L).catch(H=>oE(H,12)?H:oE(H,2)?(cA(H.to,bA).then(K=>{oE(K,20)&&!IA.delta&&IA.type===ni.pop&&t.go(-1,!1)}).catch(VI),Promise.reject()):(IA.delta&&t.go(-IA.delta,!1),gB(H,bA,L))).then(H=>{H=H||lA(bA,L,!1),H&&(IA.delta&&!oE(H,8)?t.go(-IA.delta,!1):IA.type===ni.pop&&oE(H,20)&&t.go(-1,!1)),DA(bA,L,H)}).catch(VI)}))}let EB=bI(),XA=bI(),HA;function gB(z,ZA,IA){wB(z);const bA=XA.list();return bA.length?bA.forEach(EA=>EA(z,ZA,IA)):console.error(z),Promise.reject(z)}function MB(){return HA&&i.value!==$E?Promise.resolve():new Promise((z,ZA)=>{EB.add([z,ZA])})}function wB(z){return HA||(HA=!z,uA(),EB.list().forEach(([ZA,IA])=>z?IA(z):ZA()),EB.reset()),z}function uB(z,ZA,IA,bA){const{scrollBehavior:EA}=A;if(!LC||!EA)return Promise.resolve();const L=!IA&&pp(PD(z.fullPath,0))||(bA||!IA)&&history.state&&history.state.scroll||null;return II().then(()=>EA(z,ZA,L)).then(H=>H&&Rp(H)).catch(H=>gB(H,z,ZA))}const RB=z=>t.go(z);let HB;const GB=new Set,UB={currentRoute:i,listening:!0,addRoute:h,removeRoute:y,hasRoute:M,getRoutes:p,resolve:m,options:A,push:v,replace:x,go:RB,back:()=>RB(-1),forward:()=>RB(1),beforeEach:e.add,beforeResolve:E.add,afterEach:I.add,onError:XA.add,isReady:MB,install(z){const ZA=this;z.component("RouterLink",aN),z.component("RouterView",lN),z.config.globalProperties.$router=ZA,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>ft(i)}),LC&&!HB&&i.value===$E&&(HB=!0,v(t.location).catch(EA=>{}));const IA={};for(const EA in $E)Object.defineProperty(IA,EA,{get:()=>i.value[EA],enumerable:!0});z.provide(ds,ZA),z.provide(F0,Fl(IA)),z.provide(Wr,i);const bA=z.unmount;GB.add(z),z.unmount=function(){GB.delete(z),GB.size<1&&(a=$E,yA&&yA(),yA=null,i.value=$E,HB=!1,HA=!1),bA()}}};function mA(z){return z.reduce((ZA,IA)=>ZA.then(()=>$(IA)),Promise.resolve())}return UB}function DN(A,B){const Q=[],g=[],t=[],e=Math.max(B.matched.length,A.matched.length);for(let E=0;E<e;E++){const I=B.matched[E];I&&(A.matched.find(a=>qC(a,I))?g.push(I):Q.push(I));const i=A.matched[E];i&&(B.matched.find(a=>qC(a,i))||t.push(i))}return[Q,g,t]}function D0(){return ht(ds)}function U0(A,B){return function(){return A.apply(B,arguments)}}const{toString:UN}=Object.prototype,{getPrototypeOf:Ol}=Object,fs=(A=>B=>{const Q=UN.call(B);return A[Q]||(A[Q]=Q.slice(8,-1).toLowerCase())})(Object.create(null)),We=A=>(A=A.toLowerCase(),B=>fs(B)===A),Ms=A=>B=>typeof B===A,{isArray:iI}=Array,Ci=Ms("undefined");function dN(A){return A!==null&&!Ci(A)&&A.constructor!==null&&!Ci(A.constructor)&&Vt(A.constructor.isBuffer)&&A.constructor.isBuffer(A)}const d0=We("ArrayBuffer");function fN(A){let B;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?B=ArrayBuffer.isView(A):B=A&&A.buffer&&d0(A.buffer),B}const MN=Ms("string"),Vt=Ms("function"),f0=Ms("number"),us=A=>A!==null&&typeof A=="object",uN=A=>A===!0||A===!1,Go=A=>{if(fs(A)!=="object")return!1;const B=Ol(A);return(B===null||B===Object.prototype||Object.getPrototypeOf(B)===null)&&!(Symbol.toStringTag in A)&&!(Symbol.iterator in A)},hN=We("Date"),GN=We("File"),RN=We("Blob"),YN=We("FileList"),pN=A=>us(A)&&Vt(A.pipe),NN=A=>{let B;return A&&(typeof FormData=="function"&&A instanceof FormData||Vt(A.append)&&((B=fs(A))==="formdata"||B==="object"&&Vt(A.toString)&&A.toString()==="[object FormData]"))},bN=We("URLSearchParams"),mN=A=>A.trim?A.trim():A.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function hi(A,B,{allOwnKeys:Q=!1}={}){if(A===null||typeof A>"u")return;let g,t;if(typeof A!="object"&&(A=[A]),iI(A))for(g=0,t=A.length;g<t;g++)B.call(null,A[g],g,A);else{const e=Q?Object.getOwnPropertyNames(A):Object.keys(A),E=e.length;let I;for(g=0;g<E;g++)I=e[g],B.call(null,A[I],I,A)}}function M0(A,B){B=B.toLowerCase();const Q=Object.keys(A);let g=Q.length,t;for(;g-- >0;)if(t=Q[g],B===t.toLowerCase())return t;return null}const u0=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),h0=A=>!Ci(A)&&A!==u0;function Tr(){const{caseless:A}=h0(this)&&this||{},B={},Q=(g,t)=>{const e=A&&M0(B,t)||t;Go(B[e])&&Go(g)?B[e]=Tr(B[e],g):Go(g)?B[e]=Tr({},g):iI(g)?B[e]=g.slice():B[e]=g};for(let g=0,t=arguments.length;g<t;g++)arguments[g]&&hi(arguments[g],Q);return B}const JN=(A,B,Q,{allOwnKeys:g}={})=>(hi(B,(t,e)=>{Q&&Vt(t)?A[e]=U0(t,Q):A[e]=t},{allOwnKeys:g}),A),yN=A=>(A.charCodeAt(0)===65279&&(A=A.slice(1)),A),kN=(A,B,Q,g)=>{A.prototype=Object.create(B.prototype,g),A.prototype.constructor=A,Object.defineProperty(A,"super",{value:B.prototype}),Q&&Object.assign(A.prototype,Q)},ZN=(A,B,Q,g)=>{let t,e,E;const I={};if(B=B||{},A==null)return B;do{for(t=Object.getOwnPropertyNames(A),e=t.length;e-- >0;)E=t[e],(!g||g(E,A,B))&&!I[E]&&(B[E]=A[E],I[E]=!0);A=Q!==!1&&Ol(A)}while(A&&(!Q||Q(A,B))&&A!==Object.prototype);return B},LN=(A,B,Q)=>{A=String(A),(Q===void 0||Q>A.length)&&(Q=A.length),Q-=B.length;const g=A.indexOf(B,Q);return g!==-1&&g===Q},XN=A=>{if(!A)return null;if(iI(A))return A;let B=A.length;if(!f0(B))return null;const Q=new Array(B);for(;B-- >0;)Q[B]=A[B];return Q},SN=(A=>B=>A&&B instanceof A)(typeof Uint8Array<"u"&&Ol(Uint8Array)),HN=(A,B)=>{const g=(A&&A[Symbol.iterator]).call(A);let t;for(;(t=g.next())&&!t.done;){const e=t.value;B.call(A,e[0],e[1])}},vN=(A,B)=>{let Q;const g=[];for(;(Q=A.exec(B))!==null;)g.push(Q);return g},WN=We("HTMLFormElement"),TN=A=>A.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(Q,g,t){return g.toUpperCase()+t}),IU=(({hasOwnProperty:A})=>(B,Q)=>A.call(B,Q))(Object.prototype),ON=We("RegExp"),G0=(A,B)=>{const Q=Object.getOwnPropertyDescriptors(A),g={};hi(Q,(t,e)=>{let E;(E=B(t,e,A))!==!1&&(g[e]=E||t)}),Object.defineProperties(A,g)},VN=A=>{G0(A,(B,Q)=>{if(Vt(A)&&["arguments","caller","callee"].indexOf(Q)!==-1)return!1;const g=A[Q];if(Vt(g)){if(B.enumerable=!1,"writable"in B){B.writable=!1;return}B.set||(B.set=()=>{throw Error("Can not rewrite read-only method '"+Q+"'")})}})},xN=(A,B)=>{const Q={},g=t=>{t.forEach(e=>{Q[e]=!0})};return iI(A)?g(A):g(String(A).split(B)),Q},zN=()=>{},KN=(A,B)=>(A=+A,Number.isFinite(A)?A:B),Pc="abcdefghijklmnopqrstuvwxyz",iU="0123456789",R0={DIGIT:iU,ALPHA:Pc,ALPHA_DIGIT:Pc+Pc.toUpperCase()+iU},PN=(A=16,B=R0.ALPHA_DIGIT)=>{let Q="";const{length:g}=B;for(;A--;)Q+=B[Math.random()*g|0];return Q};function jN(A){return!!(A&&Vt(A.append)&&A[Symbol.toStringTag]==="FormData"&&A[Symbol.iterator])}const qN=A=>{const B=new Array(10),Q=(g,t)=>{if(us(g)){if(B.indexOf(g)>=0)return;if(!("toJSON"in g)){B[t]=g;const e=iI(g)?[]:{};return hi(g,(E,I)=>{const i=Q(E,t+1);!Ci(i)&&(e[I]=i)}),B[t]=void 0,e}}return g};return Q(A,0)},_N=We("AsyncFunction"),$N=A=>A&&(us(A)||Vt(A))&&Vt(A.then)&&Vt(A.catch),fA={isArray:iI,isArrayBuffer:d0,isBuffer:dN,isFormData:NN,isArrayBufferView:fN,isString:MN,isNumber:f0,isBoolean:uN,isObject:us,isPlainObject:Go,isUndefined:Ci,isDate:hN,isFile:GN,isBlob:RN,isRegExp:ON,isFunction:Vt,isStream:pN,isURLSearchParams:bN,isTypedArray:SN,isFileList:YN,forEach:hi,merge:Tr,extend:JN,trim:mN,stripBOM:yN,inherits:kN,toFlatObject:ZN,kindOf:fs,kindOfTest:We,endsWith:LN,toArray:XN,forEachEntry:HN,matchAll:vN,isHTMLForm:WN,hasOwnProperty:IU,hasOwnProp:IU,reduceDescriptors:G0,freezeMethods:VN,toObjectSet:xN,toCamelCase:TN,noop:zN,toFiniteNumber:KN,findKey:M0,global:u0,isContextDefined:h0,ALPHABET:R0,generateString:PN,isSpecCompliantForm:jN,toJSONObject:qN,isAsyncFn:_N,isThenable:$N};function kB(A,B,Q,g,t){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=A,this.name="AxiosError",B&&(this.code=B),Q&&(this.config=Q),g&&(this.request=g),t&&(this.response=t)}fA.inherits(kB,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:fA.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Y0=kB.prototype,p0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(A=>{p0[A]={value:A}});Object.defineProperties(kB,p0);Object.defineProperty(Y0,"isAxiosError",{value:!0});kB.from=(A,B,Q,g,t,e)=>{const E=Object.create(Y0);return fA.toFlatObject(A,E,function(i){return i!==Error.prototype},I=>I!=="isAxiosError"),kB.call(E,A.message,B,Q,g,t),E.cause=A,E.name=A.name,e&&Object.assign(E,e),E};const Ab=null;function Or(A){return fA.isPlainObject(A)||fA.isArray(A)}function N0(A){return fA.endsWith(A,"[]")?A.slice(0,-2):A}function oU(A,B,Q){return A?A.concat(B).map(function(t,e){return t=N0(t),!Q&&e?"["+t+"]":t}).join(Q?".":""):B}function Bb(A){return fA.isArray(A)&&!A.some(Or)}const Qb=fA.toFlatObject(fA,{},null,function(B){return/^is[A-Z]/.test(B)});function hs(A,B,Q){if(!fA.isObject(A))throw new TypeError("target must be an object");B=B||new FormData,Q=fA.toFlatObject(Q,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,M){return!fA.isUndefined(M[p])});const g=Q.metaTokens,t=Q.visitor||w,e=Q.dots,E=Q.indexes,i=(Q.Blob||typeof Blob<"u"&&Blob)&&fA.isSpecCompliantForm(B);if(!fA.isFunction(t))throw new TypeError("visitor must be a function");function a(y){if(y===null)return"";if(fA.isDate(y))return y.toISOString();if(!i&&fA.isBlob(y))throw new kB("Blob is not supported. Use a Buffer instead.");return fA.isArrayBuffer(y)||fA.isTypedArray(y)?i&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function w(y,p,M){let m=y;if(y&&!M&&typeof y=="object"){if(fA.endsWith(p,"{}"))p=g?p:p.slice(0,-2),y=JSON.stringify(y);else if(fA.isArray(y)&&Bb(y)||(fA.isFileList(y)||fA.endsWith(p,"[]"))&&(m=fA.toArray(y)))return p=N0(p),m.forEach(function(AA,v){!(fA.isUndefined(AA)||AA===null)&&B.append(E===!0?oU([p],v,e):E===null?p:p+"[]",a(AA))}),!1}return Or(y)?!0:(B.append(oU(M,p,e),a(y)),!1)}const F=[],R=Object.assign(Qb,{defaultVisitor:w,convertValue:a,isVisitable:Or});function h(y,p){if(!fA.isUndefined(y)){if(F.indexOf(y)!==-1)throw Error("Circular reference detected in "+p.join("."));F.push(y),fA.forEach(y,function(m,N){(!(fA.isUndefined(m)||m===null)&&t.call(B,m,fA.isString(N)?N.trim():N,p,R))===!0&&h(m,p?p.concat(N):[N])}),F.pop()}}if(!fA.isObject(A))throw new TypeError("data must be an object");return h(A),B}function sU(A){const B={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(A).replace(/[!'()~]|%20|%00/g,function(g){return B[g]})}function Vl(A,B){this._pairs=[],A&&hs(A,this,B)}const b0=Vl.prototype;b0.append=function(B,Q){this._pairs.push([B,Q])};b0.toString=function(B){const Q=B?function(g){return B.call(this,g,sU)}:sU;return this._pairs.map(function(t){return Q(t[0])+"="+Q(t[1])},"").join("&")};function gb(A){return encodeURIComponent(A).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function m0(A,B,Q){if(!B)return A;const g=Q&&Q.encode||gb,t=Q&&Q.serialize;let e;if(t?e=t(B,Q):e=fA.isURLSearchParams(B)?B.toString():new Vl(B,Q).toString(g),e){const E=A.indexOf("#");E!==-1&&(A=A.slice(0,E)),A+=(A.indexOf("?")===-1?"?":"&")+e}return A}class tb{constructor(){this.handlers=[]}use(B,Q,g){return this.handlers.push({fulfilled:B,rejected:Q,synchronous:g?g.synchronous:!1,runWhen:g?g.runWhen:null}),this.handlers.length-1}eject(B){this.handlers[B]&&(this.handlers[B]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(B){fA.forEach(this.handlers,function(g){g!==null&&B(g)})}}const aU=tb,J0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},eb=typeof URLSearchParams<"u"?URLSearchParams:Vl,Eb=typeof FormData<"u"?FormData:null,nb=typeof Blob<"u"?Blob:null,Cb=(()=>{let A;return typeof navigator<"u"&&((A=navigator.product)==="ReactNative"||A==="NativeScript"||A==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ib=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ie={isBrowser:!0,classes:{URLSearchParams:eb,FormData:Eb,Blob:nb},isStandardBrowserEnv:Cb,isStandardBrowserWebWorkerEnv:Ib,protocols:["http","https","file","blob","url","data"]};function ib(A,B){return hs(A,new ie.classes.URLSearchParams,Object.assign({visitor:function(Q,g,t,e){return ie.isNode&&fA.isBuffer(Q)?(this.append(g,Q.toString("base64")),!1):e.defaultVisitor.apply(this,arguments)}},B))}function ob(A){return fA.matchAll(/\w+|\[(\w*)]/g,A).map(B=>B[0]==="[]"?"":B[1]||B[0])}function sb(A){const B={},Q=Object.keys(A);let g;const t=Q.length;let e;for(g=0;g<t;g++)e=Q[g],B[e]=A[e];return B}function y0(A){function B(Q,g,t,e){let E=Q[e++];const I=Number.isFinite(+E),i=e>=Q.length;return E=!E&&fA.isArray(t)?t.length:E,i?(fA.hasOwnProp(t,E)?t[E]=[t[E],g]:t[E]=g,!I):((!t[E]||!fA.isObject(t[E]))&&(t[E]=[]),B(Q,g,t[E],e)&&fA.isArray(t[E])&&(t[E]=sb(t[E])),!I)}if(fA.isFormData(A)&&fA.isFunction(A.entries)){const Q={};return fA.forEachEntry(A,(g,t)=>{B(ob(g),t,Q,0)}),Q}return null}function ab(A,B,Q){if(fA.isString(A))try{return(B||JSON.parse)(A),fA.trim(A)}catch(g){if(g.name!=="SyntaxError")throw g}return(Q||JSON.stringify)(A)}const xl={transitional:J0,adapter:ie.isNode?"http":"xhr",transformRequest:[function(B,Q){const g=Q.getContentType()||"",t=g.indexOf("application/json")>-1,e=fA.isObject(B);if(e&&fA.isHTMLForm(B)&&(B=new FormData(B)),fA.isFormData(B))return t&&t?JSON.stringify(y0(B)):B;if(fA.isArrayBuffer(B)||fA.isBuffer(B)||fA.isStream(B)||fA.isFile(B)||fA.isBlob(B))return B;if(fA.isArrayBufferView(B))return B.buffer;if(fA.isURLSearchParams(B))return Q.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),B.toString();let I;if(e){if(g.indexOf("application/x-www-form-urlencoded")>-1)return ib(B,this.formSerializer).toString();if((I=fA.isFileList(B))||g.indexOf("multipart/form-data")>-1){const i=this.env&&this.env.FormData;return hs(I?{"files[]":B}:B,i&&new i,this.formSerializer)}}return e||t?(Q.setContentType("application/json",!1),ab(B)):B}],transformResponse:[function(B){const Q=this.transitional||xl.transitional,g=Q&&Q.forcedJSONParsing,t=this.responseType==="json";if(B&&fA.isString(B)&&(g&&!this.responseType||t)){const E=!(Q&&Q.silentJSONParsing)&&t;try{return JSON.parse(B)}catch(I){if(E)throw I.name==="SyntaxError"?kB.from(I,kB.ERR_BAD_RESPONSE,this,null,this.response):I}}return B}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ie.classes.FormData,Blob:ie.classes.Blob},validateStatus:function(B){return B>=200&&B<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};fA.forEach(["delete","get","head","post","put","patch"],A=>{xl.headers[A]={}});const zl=xl,wb=fA.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cb=A=>{const B={};let Q,g,t;return A&&A.split(`
`).forEach(function(E){t=E.indexOf(":"),Q=E.substring(0,t).trim().toLowerCase(),g=E.substring(t+1).trim(),!(!Q||B[Q]&&wb[Q])&&(Q==="set-cookie"?B[Q]?B[Q].push(g):B[Q]=[g]:B[Q]=B[Q]?B[Q]+", "+g:g)}),B},wU=Symbol("internals");function mI(A){return A&&String(A).trim().toLowerCase()}function Ro(A){return A===!1||A==null?A:fA.isArray(A)?A.map(Ro):String(A)}function rb(A){const B=Object.create(null),Q=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let g;for(;g=Q.exec(A);)B[g[1]]=g[2];return B}const lb=A=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(A.trim());function jc(A,B,Q,g,t){if(fA.isFunction(g))return g.call(this,B,Q);if(t&&(B=Q),!!fA.isString(B)){if(fA.isString(g))return B.indexOf(g)!==-1;if(fA.isRegExp(g))return g.test(B)}}function Fb(A){return A.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(B,Q,g)=>Q.toUpperCase()+g)}function Db(A,B){const Q=fA.toCamelCase(" "+B);["get","set","has"].forEach(g=>{Object.defineProperty(A,g+Q,{value:function(t,e,E){return this[g].call(this,B,t,e,E)},configurable:!0})})}class Gs{constructor(B){B&&this.set(B)}set(B,Q,g){const t=this;function e(I,i,a){const w=mI(i);if(!w)throw new Error("header name must be a non-empty string");const F=fA.findKey(t,w);(!F||t[F]===void 0||a===!0||a===void 0&&t[F]!==!1)&&(t[F||i]=Ro(I))}const E=(I,i)=>fA.forEach(I,(a,w)=>e(a,w,i));return fA.isPlainObject(B)||B instanceof this.constructor?E(B,Q):fA.isString(B)&&(B=B.trim())&&!lb(B)?E(cb(B),Q):B!=null&&e(Q,B,g),this}get(B,Q){if(B=mI(B),B){const g=fA.findKey(this,B);if(g){const t=this[g];if(!Q)return t;if(Q===!0)return rb(t);if(fA.isFunction(Q))return Q.call(this,t,g);if(fA.isRegExp(Q))return Q.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(B,Q){if(B=mI(B),B){const g=fA.findKey(this,B);return!!(g&&this[g]!==void 0&&(!Q||jc(this,this[g],g,Q)))}return!1}delete(B,Q){const g=this;let t=!1;function e(E){if(E=mI(E),E){const I=fA.findKey(g,E);I&&(!Q||jc(g,g[I],I,Q))&&(delete g[I],t=!0)}}return fA.isArray(B)?B.forEach(e):e(B),t}clear(B){const Q=Object.keys(this);let g=Q.length,t=!1;for(;g--;){const e=Q[g];(!B||jc(this,this[e],e,B,!0))&&(delete this[e],t=!0)}return t}normalize(B){const Q=this,g={};return fA.forEach(this,(t,e)=>{const E=fA.findKey(g,e);if(E){Q[E]=Ro(t),delete Q[e];return}const I=B?Fb(e):String(e).trim();I!==e&&delete Q[e],Q[I]=Ro(t),g[I]=!0}),this}concat(...B){return this.constructor.concat(this,...B)}toJSON(B){const Q=Object.create(null);return fA.forEach(this,(g,t)=>{g!=null&&g!==!1&&(Q[t]=B&&fA.isArray(g)?g.join(", "):g)}),Q}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([B,Q])=>B+": "+Q).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(B){return B instanceof this?B:new this(B)}static concat(B,...Q){const g=new this(B);return Q.forEach(t=>g.set(t)),g}static accessor(B){const g=(this[wU]=this[wU]={accessors:{}}).accessors,t=this.prototype;function e(E){const I=mI(E);g[I]||(Db(t,E),g[I]=!0)}return fA.isArray(B)?B.forEach(e):e(B),this}}Gs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);fA.reduceDescriptors(Gs.prototype,({value:A},B)=>{let Q=B[0].toUpperCase()+B.slice(1);return{get:()=>A,set(g){this[Q]=g}}});fA.freezeMethods(Gs);const dE=Gs;function qc(A,B){const Q=this||zl,g=B||Q,t=dE.from(g.headers);let e=g.data;return fA.forEach(A,function(I){e=I.call(Q,e,t.normalize(),B?B.status:void 0)}),t.normalize(),e}function k0(A){return!!(A&&A.__CANCEL__)}function Gi(A,B,Q){kB.call(this,A??"canceled",kB.ERR_CANCELED,B,Q),this.name="CanceledError"}fA.inherits(Gi,kB,{__CANCEL__:!0});function Ub(A,B,Q){const g=Q.config.validateStatus;!Q.status||!g||g(Q.status)?A(Q):B(new kB("Request failed with status code "+Q.status,[kB.ERR_BAD_REQUEST,kB.ERR_BAD_RESPONSE][Math.floor(Q.status/100)-4],Q.config,Q.request,Q))}const db=ie.isStandardBrowserEnv?function(){return{write:function(Q,g,t,e,E,I){const i=[];i.push(Q+"="+encodeURIComponent(g)),fA.isNumber(t)&&i.push("expires="+new Date(t).toGMTString()),fA.isString(e)&&i.push("path="+e),fA.isString(E)&&i.push("domain="+E),I===!0&&i.push("secure"),document.cookie=i.join("; ")},read:function(Q){const g=document.cookie.match(new RegExp("(^|;\\s*)("+Q+")=([^;]*)"));return g?decodeURIComponent(g[3]):null},remove:function(Q){this.write(Q,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function fb(A){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(A)}function Mb(A,B){return B?A.replace(/\/+$/,"")+"/"+B.replace(/^\/+/,""):A}function Z0(A,B){return A&&!fb(B)?Mb(A,B):B}const ub=ie.isStandardBrowserEnv?function(){const B=/(msie|trident)/i.test(navigator.userAgent),Q=document.createElement("a");let g;function t(e){let E=e;return B&&(Q.setAttribute("href",E),E=Q.href),Q.setAttribute("href",E),{href:Q.href,protocol:Q.protocol?Q.protocol.replace(/:$/,""):"",host:Q.host,search:Q.search?Q.search.replace(/^\?/,""):"",hash:Q.hash?Q.hash.replace(/^#/,""):"",hostname:Q.hostname,port:Q.port,pathname:Q.pathname.charAt(0)==="/"?Q.pathname:"/"+Q.pathname}}return g=t(window.location.href),function(E){const I=fA.isString(E)?t(E):E;return I.protocol===g.protocol&&I.host===g.host}}():function(){return function(){return!0}}();function hb(A){const B=/^([-+\w]{1,25})(:?\/\/|:)/.exec(A);return B&&B[1]||""}function Gb(A,B){A=A||10;const Q=new Array(A),g=new Array(A);let t=0,e=0,E;return B=B!==void 0?B:1e3,function(i){const a=Date.now(),w=g[e];E||(E=a),Q[t]=i,g[t]=a;let F=e,R=0;for(;F!==t;)R+=Q[F++],F=F%A;if(t=(t+1)%A,t===e&&(e=(e+1)%A),a-E<B)return;const h=w&&a-w;return h?Math.round(R*1e3/h):void 0}}function cU(A,B){let Q=0;const g=Gb(50,250);return t=>{const e=t.loaded,E=t.lengthComputable?t.total:void 0,I=e-Q,i=g(I),a=e<=E;Q=e;const w={loaded:e,total:E,progress:E?e/E:void 0,bytes:I,rate:i||void 0,estimated:i&&E&&a?(E-e)/i:void 0,event:t};w[B?"download":"upload"]=!0,A(w)}}const Rb=typeof XMLHttpRequest<"u",Yb=Rb&&function(A){return new Promise(function(Q,g){let t=A.data;const e=dE.from(A.headers).normalize(),E=A.responseType;let I;function i(){A.cancelToken&&A.cancelToken.unsubscribe(I),A.signal&&A.signal.removeEventListener("abort",I)}fA.isFormData(t)&&(ie.isStandardBrowserEnv||ie.isStandardBrowserWebWorkerEnv?e.setContentType(!1):e.setContentType("multipart/form-data;",!1));let a=new XMLHttpRequest;if(A.auth){const h=A.auth.username||"",y=A.auth.password?unescape(encodeURIComponent(A.auth.password)):"";e.set("Authorization","Basic "+btoa(h+":"+y))}const w=Z0(A.baseURL,A.url);a.open(A.method.toUpperCase(),m0(w,A.params,A.paramsSerializer),!0),a.timeout=A.timeout;function F(){if(!a)return;const h=dE.from("getAllResponseHeaders"in a&&a.getAllResponseHeaders()),p={data:!E||E==="text"||E==="json"?a.responseText:a.response,status:a.status,statusText:a.statusText,headers:h,config:A,request:a};Ub(function(m){Q(m),i()},function(m){g(m),i()},p),a=null}if("onloadend"in a?a.onloadend=F:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(F)},a.onabort=function(){a&&(g(new kB("Request aborted",kB.ECONNABORTED,A,a)),a=null)},a.onerror=function(){g(new kB("Network Error",kB.ERR_NETWORK,A,a)),a=null},a.ontimeout=function(){let y=A.timeout?"timeout of "+A.timeout+"ms exceeded":"timeout exceeded";const p=A.transitional||J0;A.timeoutErrorMessage&&(y=A.timeoutErrorMessage),g(new kB(y,p.clarifyTimeoutError?kB.ETIMEDOUT:kB.ECONNABORTED,A,a)),a=null},ie.isStandardBrowserEnv){const h=(A.withCredentials||ub(w))&&A.xsrfCookieName&&db.read(A.xsrfCookieName);h&&e.set(A.xsrfHeaderName,h)}t===void 0&&e.setContentType(null),"setRequestHeader"in a&&fA.forEach(e.toJSON(),function(y,p){a.setRequestHeader(p,y)}),fA.isUndefined(A.withCredentials)||(a.withCredentials=!!A.withCredentials),E&&E!=="json"&&(a.responseType=A.responseType),typeof A.onDownloadProgress=="function"&&a.addEventListener("progress",cU(A.onDownloadProgress,!0)),typeof A.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",cU(A.onUploadProgress)),(A.cancelToken||A.signal)&&(I=h=>{a&&(g(!h||h.type?new Gi(null,A,a):h),a.abort(),a=null)},A.cancelToken&&A.cancelToken.subscribe(I),A.signal&&(A.signal.aborted?I():A.signal.addEventListener("abort",I)));const R=hb(w);if(R&&ie.protocols.indexOf(R)===-1){g(new kB("Unsupported protocol "+R+":",kB.ERR_BAD_REQUEST,A));return}a.send(t||null)})},Yo={http:Ab,xhr:Yb};fA.forEach(Yo,(A,B)=>{if(A){try{Object.defineProperty(A,"name",{value:B})}catch{}Object.defineProperty(A,"adapterName",{value:B})}});const L0={getAdapter:A=>{A=fA.isArray(A)?A:[A];const{length:B}=A;let Q,g;for(let t=0;t<B&&(Q=A[t],!(g=fA.isString(Q)?Yo[Q.toLowerCase()]:Q));t++);if(!g)throw g===!1?new kB(`Adapter ${Q} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(fA.hasOwnProp(Yo,Q)?`Adapter '${Q}' is not available in the build`:`Unknown adapter '${Q}'`);if(!fA.isFunction(g))throw new TypeError("adapter is not a function");return g},adapters:Yo};function _c(A){if(A.cancelToken&&A.cancelToken.throwIfRequested(),A.signal&&A.signal.aborted)throw new Gi(null,A)}function rU(A){return _c(A),A.headers=dE.from(A.headers),A.data=qc.call(A,A.transformRequest),["post","put","patch"].indexOf(A.method)!==-1&&A.headers.setContentType("application/x-www-form-urlencoded",!1),L0.getAdapter(A.adapter||zl.adapter)(A).then(function(g){return _c(A),g.data=qc.call(A,A.transformResponse,g),g.headers=dE.from(g.headers),g},function(g){return k0(g)||(_c(A),g&&g.response&&(g.response.data=qc.call(A,A.transformResponse,g.response),g.response.headers=dE.from(g.response.headers))),Promise.reject(g)})}const lU=A=>A instanceof dE?A.toJSON():A;function $C(A,B){B=B||{};const Q={};function g(a,w,F){return fA.isPlainObject(a)&&fA.isPlainObject(w)?fA.merge.call({caseless:F},a,w):fA.isPlainObject(w)?fA.merge({},w):fA.isArray(w)?w.slice():w}function t(a,w,F){if(fA.isUndefined(w)){if(!fA.isUndefined(a))return g(void 0,a,F)}else return g(a,w,F)}function e(a,w){if(!fA.isUndefined(w))return g(void 0,w)}function E(a,w){if(fA.isUndefined(w)){if(!fA.isUndefined(a))return g(void 0,a)}else return g(void 0,w)}function I(a,w,F){if(F in B)return g(a,w);if(F in A)return g(void 0,a)}const i={url:e,method:e,data:e,baseURL:E,transformRequest:E,transformResponse:E,paramsSerializer:E,timeout:E,timeoutMessage:E,withCredentials:E,adapter:E,responseType:E,xsrfCookieName:E,xsrfHeaderName:E,onUploadProgress:E,onDownloadProgress:E,decompress:E,maxContentLength:E,maxBodyLength:E,beforeRedirect:E,transport:E,httpAgent:E,httpsAgent:E,cancelToken:E,socketPath:E,responseEncoding:E,validateStatus:I,headers:(a,w)=>t(lU(a),lU(w),!0)};return fA.forEach(Object.keys(Object.assign({},A,B)),function(w){const F=i[w]||t,R=F(A[w],B[w],w);fA.isUndefined(R)&&F!==I||(Q[w]=R)}),Q}const X0="1.5.0",Kl={};["object","boolean","number","function","string","symbol"].forEach((A,B)=>{Kl[A]=function(g){return typeof g===A||"a"+(B<1?"n ":" ")+A}});const FU={};Kl.transitional=function(B,Q,g){function t(e,E){return"[Axios v"+X0+"] Transitional option '"+e+"'"+E+(g?". "+g:"")}return(e,E,I)=>{if(B===!1)throw new kB(t(E," has been removed"+(Q?" in "+Q:"")),kB.ERR_DEPRECATED);return Q&&!FU[E]&&(FU[E]=!0,console.warn(t(E," has been deprecated since v"+Q+" and will be removed in the near future"))),B?B(e,E,I):!0}};function pb(A,B,Q){if(typeof A!="object")throw new kB("options must be an object",kB.ERR_BAD_OPTION_VALUE);const g=Object.keys(A);let t=g.length;for(;t-- >0;){const e=g[t],E=B[e];if(E){const I=A[e],i=I===void 0||E(I,e,A);if(i!==!0)throw new kB("option "+e+" must be "+i,kB.ERR_BAD_OPTION_VALUE);continue}if(Q!==!0)throw new kB("Unknown option "+e,kB.ERR_BAD_OPTION)}}const Vr={assertOptions:pb,validators:Kl},An=Vr.validators;class Wo{constructor(B){this.defaults=B,this.interceptors={request:new aU,response:new aU}}request(B,Q){typeof B=="string"?(Q=Q||{},Q.url=B):Q=B||{},Q=$C(this.defaults,Q);const{transitional:g,paramsSerializer:t,headers:e}=Q;g!==void 0&&Vr.assertOptions(g,{silentJSONParsing:An.transitional(An.boolean),forcedJSONParsing:An.transitional(An.boolean),clarifyTimeoutError:An.transitional(An.boolean)},!1),t!=null&&(fA.isFunction(t)?Q.paramsSerializer={serialize:t}:Vr.assertOptions(t,{encode:An.function,serialize:An.function},!0)),Q.method=(Q.method||this.defaults.method||"get").toLowerCase();let E=e&&fA.merge(e.common,e[Q.method]);e&&fA.forEach(["delete","get","head","post","put","patch","common"],y=>{delete e[y]}),Q.headers=dE.concat(E,e);const I=[];let i=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(Q)===!1||(i=i&&p.synchronous,I.unshift(p.fulfilled,p.rejected))});const a=[];this.interceptors.response.forEach(function(p){a.push(p.fulfilled,p.rejected)});let w,F=0,R;if(!i){const y=[rU.bind(this),void 0];for(y.unshift.apply(y,I),y.push.apply(y,a),R=y.length,w=Promise.resolve(Q);F<R;)w=w.then(y[F++],y[F++]);return w}R=I.length;let h=Q;for(F=0;F<R;){const y=I[F++],p=I[F++];try{h=y(h)}catch(M){p.call(this,M);break}}try{w=rU.call(this,h)}catch(y){return Promise.reject(y)}for(F=0,R=a.length;F<R;)w=w.then(a[F++],a[F++]);return w}getUri(B){B=$C(this.defaults,B);const Q=Z0(B.baseURL,B.url);return m0(Q,B.params,B.paramsSerializer)}}fA.forEach(["delete","get","head","options"],function(B){Wo.prototype[B]=function(Q,g){return this.request($C(g||{},{method:B,url:Q,data:(g||{}).data}))}});fA.forEach(["post","put","patch"],function(B){function Q(g){return function(e,E,I){return this.request($C(I||{},{method:B,headers:g?{"Content-Type":"multipart/form-data"}:{},url:e,data:E}))}}Wo.prototype[B]=Q(),Wo.prototype[B+"Form"]=Q(!0)});const po=Wo;class Pl{constructor(B){if(typeof B!="function")throw new TypeError("executor must be a function.");let Q;this.promise=new Promise(function(e){Q=e});const g=this;this.promise.then(t=>{if(!g._listeners)return;let e=g._listeners.length;for(;e-- >0;)g._listeners[e](t);g._listeners=null}),this.promise.then=t=>{let e;const E=new Promise(I=>{g.subscribe(I),e=I}).then(t);return E.cancel=function(){g.unsubscribe(e)},E},B(function(e,E,I){g.reason||(g.reason=new Gi(e,E,I),Q(g.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(B){if(this.reason){B(this.reason);return}this._listeners?this._listeners.push(B):this._listeners=[B]}unsubscribe(B){if(!this._listeners)return;const Q=this._listeners.indexOf(B);Q!==-1&&this._listeners.splice(Q,1)}static source(){let B;return{token:new Pl(function(t){B=t}),cancel:B}}}const Nb=Pl;function bb(A){return function(Q){return A.apply(null,Q)}}function mb(A){return fA.isObject(A)&&A.isAxiosError===!0}const xr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xr).forEach(([A,B])=>{xr[B]=A});const Jb=xr;function S0(A){const B=new po(A),Q=U0(po.prototype.request,B);return fA.extend(Q,po.prototype,B,{allOwnKeys:!0}),fA.extend(Q,B,null,{allOwnKeys:!0}),Q.create=function(t){return S0($C(A,t))},Q}const kQ=S0(zl);kQ.Axios=po;kQ.CanceledError=Gi;kQ.CancelToken=Nb;kQ.isCancel=k0;kQ.VERSION=X0;kQ.toFormData=hs;kQ.AxiosError=kB;kQ.Cancel=kQ.CanceledError;kQ.all=function(B){return Promise.all(B)};kQ.spread=bb;kQ.isAxiosError=mb;kQ.mergeConfig=$C;kQ.AxiosHeaders=dE;kQ.formToJSON=A=>y0(fA.isHTMLForm(A)?new FormData(A):A);kQ.getAdapter=L0.getAdapter;kQ.HttpStatusCode=Jb;kQ.default=kQ;const Rs=kQ,yb="https://community-api-c7kj.onrender.com",$c="community-client-auth-key",Ys=ls("AuthStore",{state:()=>({user:null}),getters:{getUser:A=>A.user||JSON.parse(localStorage.getItem($c))},actions:{authenticate:async function(A){this.user=null,await Rs.post(`${yb}/student/authenticate`,A).then(B=>{if(B.data==1)this.user=A,localStorage.setItem($c,JSON.stringify(A));else throw new Error("unable to register user")}).catch(B=>{throw B})},logout:function(){this.user=null,window.localStorage.removeItem($c)}}});var ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jl(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}function H0(A){if(A.__esModule)return A;var B=A.default;if(typeof B=="function"){var Q=function g(){return this instanceof g?Reflect.construct(B,arguments,this.constructor):B.apply(this,arguments)};Q.prototype=B.prototype}else Q={};return Object.defineProperty(Q,"__esModule",{value:!0}),Object.keys(A).forEach(function(g){var t=Object.getOwnPropertyDescriptor(A,g);Object.defineProperty(Q,g,t.get?t:{enumerable:!0,get:function(){return A[g]}})}),Q}var v0={exports:{}};/*!
* sweetalert2 v11.7.27
* Released under the MIT License.
*/(function(A,B){(function(Q,g){A.exports=g()})(ee,function(){function Q(C,s){var l=t(C,s,"get");return e(C,l)}function g(C,s,l){var Y=t(C,s,"set");return E(C,Y,l),l}function t(C,s,l){if(!s.has(C))throw new TypeError("attempted to "+l+" private field on non-instance");return s.get(C)}function e(C,s){return s.get?s.get.call(C):s.value}function E(C,s,l){if(s.set)s.set.call(C,l);else{if(!s.writable)throw new TypeError("attempted to set read only private field");s.value=l}}function I(C,s){if(s.has(C))throw new TypeError("Cannot initialize the same private elements twice on an object")}function i(C,s,l){I(C,s),s.set(C,l)}const a=100,w={},F=()=>{w.previousActiveElement instanceof HTMLElement?(w.previousActiveElement.focus(),w.previousActiveElement=null):document.body&&document.body.focus()},R=C=>new Promise(s=>{if(!C)return s();const l=window.scrollX,Y=window.scrollY;w.restoreFocusTimeout=setTimeout(()=>{F(),s()},a),window.scrollTo(l,Y)});var h={innerParams:new WeakMap,domCache:new WeakMap};const y="swal2-",M=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((C,s)=>(C[s]=y+s,C),{}),N=["success","warning","info","question","error"].reduce((C,s)=>(C[s]=y+s,C),{}),AA="SweetAlert2:",v=C=>C.charAt(0).toUpperCase()+C.slice(1),x=C=>{console.warn("".concat(AA," ").concat(typeof C=="object"?C.join(" "):C))},iA=C=>{console.error("".concat(AA," ").concat(C))},cA=[],j=C=>{cA.includes(C)||(cA.push(C),x(C))},$=(C,s)=>{j('"'.concat(C,'" is deprecated and will be removed in the next major release. Please use "').concat(s,'" instead.'))},sA=C=>typeof C=="function"?C():C,DA=C=>C&&typeof C.toPromise=="function",lA=C=>DA(C)?C.toPromise():Promise.resolve(C),yA=C=>C&&Promise.resolve(C)===C,uA=()=>document.body.querySelector(".".concat(M.container)),EB=C=>{const s=uA();return s?s.querySelector(C):null},XA=C=>EB(".".concat(C)),HA=()=>XA(M.popup),gB=()=>XA(M.icon),MB=()=>XA(M["icon-content"]),wB=()=>XA(M.title),uB=()=>XA(M["html-container"]),RB=()=>XA(M.image),HB=()=>XA(M["progress-steps"]),GB=()=>XA(M["validation-message"]),UB=()=>EB(".".concat(M.actions," .").concat(M.confirm)),mA=()=>EB(".".concat(M.actions," .").concat(M.cancel)),z=()=>EB(".".concat(M.actions," .").concat(M.deny)),ZA=()=>XA(M["input-label"]),IA=()=>EB(".".concat(M.loader)),bA=()=>XA(M.actions),EA=()=>XA(M.footer),L=()=>XA(M["timer-progress-bar"]),H=()=>XA(M.close),K=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,nA=()=>{const C=HA();if(!C)return[];const s=C.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),l=Array.from(s).sort((vA,iB)=>{const LB=parseInt(vA.getAttribute("tabindex")||"0"),AQ=parseInt(iB.getAttribute("tabindex")||"0");return LB>AQ?1:LB<AQ?-1:0}),Y=C.querySelectorAll(K),eA=Array.from(Y).filter(vA=>vA.getAttribute("tabindex")!=="-1");return[...new Set(l.concat(eA))].filter(vA=>dA(vA))},rA=()=>CA(document.body,M.shown)&&!CA(document.body,M["toast-shown"])&&!CA(document.body,M["no-backdrop"]),aA=()=>{const C=HA();return C?CA(C,M.toast):!1},oA=()=>{const C=HA();return C?C.hasAttribute("data-loading"):!1},MA=(C,s)=>{if(C.textContent="",s){const Y=new DOMParser().parseFromString(s,"text/html"),eA=Y.querySelector("head");eA&&Array.from(eA.childNodes).forEach(iB=>{C.appendChild(iB)});const vA=Y.querySelector("body");vA&&Array.from(vA.childNodes).forEach(iB=>{iB instanceof HTMLVideoElement||iB instanceof HTMLAudioElement?C.appendChild(iB.cloneNode(!0)):C.appendChild(iB)})}},CA=(C,s)=>{if(!s)return!1;const l=s.split(/\s+/);for(let Y=0;Y<l.length;Y++)if(!C.classList.contains(l[Y]))return!1;return!0},QA=(C,s)=>{Array.from(C.classList).forEach(l=>{!Object.values(M).includes(l)&&!Object.values(N).includes(l)&&!Object.values(s.showClass||{}).includes(l)&&C.classList.remove(l)})},YA=(C,s,l)=>{if(QA(C,s),s.customClass&&s.customClass[l]){if(typeof s.customClass[l]!="string"&&!s.customClass[l].forEach){x("Invalid type of customClass.".concat(l,'! Expected string or iterable object, got "').concat(typeof s.customClass[l],'"'));return}VA(C,s.customClass[l])}},SA=(C,s)=>{if(!s)return null;switch(s){case"select":case"textarea":case"file":return C.querySelector(".".concat(M.popup," > .").concat(M[s]));case"checkbox":return C.querySelector(".".concat(M.popup," > .").concat(M.checkbox," input"));case"radio":return C.querySelector(".".concat(M.popup," > .").concat(M.radio," input:checked"))||C.querySelector(".".concat(M.popup," > .").concat(M.radio," input:first-child"));case"range":return C.querySelector(".".concat(M.popup," > .").concat(M.range," input"));default:return C.querySelector(".".concat(M.popup," > .").concat(M.input))}},TA=C=>{if(C.focus(),C.type!=="file"){const s=C.value;C.value="",C.value=s}},KA=(C,s,l)=>{!C||!s||(typeof s=="string"&&(s=s.split(/\s+/).filter(Boolean)),s.forEach(Y=>{Array.isArray(C)?C.forEach(eA=>{l?eA.classList.add(Y):eA.classList.remove(Y)}):l?C.classList.add(Y):C.classList.remove(Y)}))},VA=(C,s)=>{KA(C,s,!0)},lB=(C,s)=>{KA(C,s,!1)},k=(C,s)=>{const l=Array.from(C.children);for(let Y=0;Y<l.length;Y++){const eA=l[Y];if(eA instanceof HTMLElement&&CA(eA,s))return eA}},U=(C,s,l)=>{l==="".concat(parseInt(l))&&(l=parseInt(l)),l||parseInt(l)===0?C.style[s]=typeof l=="number"?"".concat(l,"px"):l:C.style.removeProperty(s)},d=function(C){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";C&&(C.style.display=s)},G=C=>{C&&(C.style.display="none")},b=(C,s,l,Y)=>{const eA=C.querySelector(s);eA&&(eA.style[l]=Y)},q=function(C,s){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";s?d(C,l):G(C)},dA=C=>!!(C&&(C.offsetWidth||C.offsetHeight||C.getClientRects().length)),wA=()=>!dA(UB())&&!dA(z())&&!dA(mA()),pA=C=>C.scrollHeight>C.clientHeight,GA=C=>{const s=window.getComputedStyle(C),l=parseFloat(s.getPropertyValue("animation-duration")||"0"),Y=parseFloat(s.getPropertyValue("transition-duration")||"0");return l>0||Y>0},qA=function(C){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const l=L();l&&dA(l)&&(s&&(l.style.transition="none",l.style.width="100%"),setTimeout(()=>{l.style.transition="width ".concat(C/1e3,"s linear"),l.style.width="0%"},10))},AB=()=>{const C=L();if(!C)return;const s=parseInt(window.getComputedStyle(C).width);C.style.removeProperty("transition"),C.style.width="100%";const l=parseInt(window.getComputedStyle(C).width),Y=s/l*100;C.style.width="".concat(Y,"%")},CB=()=>typeof window>"u"||typeof document>"u",gA=`
 <div aria-labelledby="`.concat(M.title,'" aria-describedby="').concat(M["html-container"],'" class="').concat(M.popup,`" tabindex="-1">
   <button type="button" class="`).concat(M.close,`"></button>
   <ul class="`).concat(M["progress-steps"],`"></ul>
   <div class="`).concat(M.icon,`"></div>
   <img class="`).concat(M.image,`" />
   <h2 class="`).concat(M.title,'" id="').concat(M.title,`"></h2>
   <div class="`).concat(M["html-container"],'" id="').concat(M["html-container"],`"></div>
   <input class="`).concat(M.input,'" id="').concat(M.input,`" />
   <input type="file" class="`).concat(M.file,`" />
   <div class="`).concat(M.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(M.select,'" id="').concat(M.select,`"></select>
   <div class="`).concat(M.radio,`"></div>
   <label class="`).concat(M.checkbox,`">
     <input type="checkbox" id="`).concat(M.checkbox,`" />
     <span class="`).concat(M.label,`"></span>
   </label>
   <textarea class="`).concat(M.textarea,'" id="').concat(M.textarea,`"></textarea>
   <div class="`).concat(M["validation-message"],'" id="').concat(M["validation-message"],`"></div>
   <div class="`).concat(M.actions,`">
     <div class="`).concat(M.loader,`"></div>
     <button type="button" class="`).concat(M.confirm,`"></button>
     <button type="button" class="`).concat(M.deny,`"></button>
     <button type="button" class="`).concat(M.cancel,`"></button>
   </div>
   <div class="`).concat(M.footer,`"></div>
   <div class="`).concat(M["timer-progress-bar-container"],`">
     <div class="`).concat(M["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),BB=()=>{const C=uA();return C?(C.remove(),lB([document.documentElement,document.body],[M["no-backdrop"],M["toast-shown"],M["has-column"]]),!0):!1},_=()=>{w.currentInstance.resetValidationMessage()},QB=()=>{const C=HA(),s=k(C,M.input),l=k(C,M.file),Y=C.querySelector(".".concat(M.range," input")),eA=C.querySelector(".".concat(M.range," output")),vA=k(C,M.select),iB=C.querySelector(".".concat(M.checkbox," input")),LB=k(C,M.textarea);s.oninput=_,l.onchange=_,vA.onchange=_,iB.onchange=_,LB.oninput=_,Y.oninput=()=>{_(),eA.value=Y.value},Y.onchange=()=>{_(),eA.value=Y.value}},LA=C=>typeof C=="string"?document.querySelector(C):C,vB=C=>{const s=HA();s.setAttribute("role",C.toast?"alert":"dialog"),s.setAttribute("aria-live",C.toast?"polite":"assertive"),C.toast||s.setAttribute("aria-modal","true")},PB=C=>{window.getComputedStyle(C).direction==="rtl"&&VA(uA(),M.rtl)},lg=C=>{const s=BB();if(CB()){iA("SweetAlert2 requires document to initialize");return}const l=document.createElement("div");l.className=M.container,s&&VA(l,M["no-transition"]),MA(l,gA);const Y=LA(C.target);Y.appendChild(l),vB(C),PB(Y),QB()},BQ=(C,s)=>{C instanceof HTMLElement?s.appendChild(C):typeof C=="object"?eg(C,s):C&&MA(s,C)},eg=(C,s)=>{C.jquery?RQ(s,C):MA(s,C.toString())},RQ=(C,s)=>{if(C.textContent="",0 in s)for(let l=0;l in s;l++)C.appendChild(s[l].cloneNode(!0));else C.appendChild(s.cloneNode(!0))},MQ=(()=>{if(CB())return!1;const C=document.createElement("div");return typeof C.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof C.style.animation<"u"?"animationend":!1})(),$g=(C,s)=>{const l=bA(),Y=IA();!l||!Y||(!s.showConfirmButton&&!s.showDenyButton&&!s.showCancelButton?G(l):d(l),YA(l,s,"actions"),ZB(l,Y,s),MA(Y,s.loaderHtml||""),YA(Y,s,"loader"))};function ZB(C,s,l){const Y=UB(),eA=z(),vA=mA();!Y||!eA||!vA||(Lg(Y,"confirm",l),Lg(eA,"deny",l),Lg(vA,"cancel",l),IQ(Y,eA,vA,l),l.reverseButtons&&(l.toast?(C.insertBefore(vA,Y),C.insertBefore(eA,Y)):(C.insertBefore(vA,s),C.insertBefore(eA,s),C.insertBefore(Y,s))))}function IQ(C,s,l,Y){if(!Y.buttonsStyling){lB([C,s,l],M.styled);return}VA([C,s,l],M.styled),Y.confirmButtonColor&&(C.style.backgroundColor=Y.confirmButtonColor,VA(C,M["default-outline"])),Y.denyButtonColor&&(s.style.backgroundColor=Y.denyButtonColor,VA(s,M["default-outline"])),Y.cancelButtonColor&&(l.style.backgroundColor=Y.cancelButtonColor,VA(l,M["default-outline"]))}function Lg(C,s,l){const Y=v(s);q(C,l["show".concat(Y,"Button")],"inline-block"),MA(C,l["".concat(s,"ButtonText")]||""),C.setAttribute("aria-label",l["".concat(s,"ButtonAriaLabel")]||""),C.className=M[s],YA(C,l,"".concat(s,"Button"))}const xQ=(C,s)=>{const l=H();l&&(MA(l,s.closeButtonHtml||""),YA(l,s,"closeButton"),q(l,s.showCloseButton),l.setAttribute("aria-label",s.closeButtonAriaLabel||""))},uQ=(C,s)=>{const l=uA();l&&(Fg(l,s.backdrop),QQ(l,s.position),hQ(l,s.grow),YA(l,s,"container"))};function Fg(C,s){typeof s=="string"?C.style.background=s:s||VA([document.documentElement,document.body],M["no-backdrop"])}function QQ(C,s){s&&(s in M?VA(C,M[s]):(x('The "position" parameter is not valid, defaulting to "center"'),VA(C,M.center)))}function hQ(C,s){s&&VA(C,M["grow-".concat(s)])}const Dg=["input","file","range","select","radio","checkbox","textarea"],RE=(C,s)=>{const l=HA();if(!l)return;const Y=h.innerParams.get(C),eA=!Y||s.input!==Y.input;Dg.forEach(vA=>{const iB=k(l,M[vA]);iB&&(hn(vA,s.inputAttributes),iB.className=M[vA],eA&&G(iB))}),s.input&&(eA&&ae(s),At(s))},ae=C=>{if(!C.input)return;if(!jB[C.input]){iA('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(C.input,'"'));return}const s=Bt(C.input),l=jB[C.input](s,C);d(s),C.inputAutoFocus&&setTimeout(()=>{TA(l)})},pQ=C=>{for(let s=0;s<C.attributes.length;s++){const l=C.attributes[s].name;["id","type","value","style"].includes(l)||C.removeAttribute(l)}},hn=(C,s)=>{const l=SA(HA(),C);if(l){pQ(l);for(const Y in s)l.setAttribute(Y,s[Y])}},At=C=>{const s=Bt(C.input);typeof C.customClass=="object"&&VA(s,C.customClass.input)},Xg=(C,s)=>{(!C.placeholder||s.inputPlaceholder)&&(C.placeholder=s.inputPlaceholder)},vQ=(C,s,l)=>{if(l.inputLabel){const Y=document.createElement("label"),eA=M["input-label"];Y.setAttribute("for",C.id),Y.className=eA,typeof l.customClass=="object"&&VA(Y,l.customClass.inputLabel),Y.innerText=l.inputLabel,s.insertAdjacentElement("beforebegin",Y)}},Bt=C=>k(HA(),M[C]||M.input),Ug=(C,s)=>{["string","number"].includes(typeof s)?C.value="".concat(s):yA(s)||x('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof s,'"'))},jB={};jB.text=jB.email=jB.password=jB.number=jB.tel=jB.url=(C,s)=>(Ug(C,s.inputValue),vQ(C,C,s),Xg(C,s),C.type=s.input,C),jB.file=(C,s)=>(vQ(C,C,s),Xg(C,s),C),jB.range=(C,s)=>{const l=C.querySelector("input"),Y=C.querySelector("output");return Ug(l,s.inputValue),l.type=s.input,Ug(Y,s.inputValue),vQ(l,C,s),C},jB.select=(C,s)=>{if(C.textContent="",s.inputPlaceholder){const l=document.createElement("option");MA(l,s.inputPlaceholder),l.value="",l.disabled=!0,l.selected=!0,C.appendChild(l)}return vQ(C,C,s),C},jB.radio=C=>(C.textContent="",C),jB.checkbox=(C,s)=>{const l=SA(HA(),"checkbox");l.value="1",l.checked=!!s.inputValue;const Y=C.querySelector("span");return MA(Y,s.inputPlaceholder),l},jB.textarea=(C,s)=>{Ug(C,s.inputValue),Xg(C,s),vQ(C,C,s);const l=Y=>parseInt(window.getComputedStyle(Y).marginLeft)+parseInt(window.getComputedStyle(Y).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const Y=parseInt(window.getComputedStyle(HA()).width),eA=()=>{if(!document.body.contains(C))return;const vA=C.offsetWidth+l(C);vA>Y?HA().style.width="".concat(vA,"px"):U(HA(),"width",s.width)};new MutationObserver(eA).observe(C,{attributes:!0,attributeFilter:["style"]})}}),C};const Gn=(C,s)=>{const l=uB();l&&(YA(l,s,"htmlContainer"),s.html?(BQ(s.html,l),d(l,"block")):s.text?(l.textContent=s.text,d(l,"block")):G(l),RE(C,s))},Qt=(C,s)=>{const l=EA();l&&(q(l,s.footer,"block"),s.footer&&BQ(s.footer,l),YA(l,s,"footer"))},ZQ=(C,s)=>{const l=h.innerParams.get(C),Y=gB();if(Y){if(l&&s.icon===l.icon){zQ(Y,s),Eg(Y,s);return}if(!s.icon&&!s.iconHtml){G(Y);return}if(s.icon&&Object.keys(N).indexOf(s.icon)===-1){iA('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(s.icon,'"')),G(Y);return}d(Y),zQ(Y,s),Eg(Y,s),VA(Y,s.showClass&&s.showClass.icon)}},Eg=(C,s)=>{for(const[l,Y]of Object.entries(N))s.icon!==l&&lB(C,Y);VA(C,s.icon&&N[s.icon]),KQ(C,s),YE(),YA(C,s,"icon")},YE=()=>{const C=HA();if(!C)return;const s=window.getComputedStyle(C).getPropertyValue("background-color"),l=C.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let Y=0;Y<l.length;Y++)l[Y].style.backgroundColor=s},wQ=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Oe=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,zQ=(C,s)=>{if(!s.icon&&!s.iconHtml)return;let l=C.innerHTML,Y="";s.iconHtml?Y=PQ(s.iconHtml):s.icon==="success"?(Y=wQ,l=l.replace(/ style=".*?"/g,"")):s.icon==="error"?Y=Oe:s.icon&&(Y=PQ({question:"?",warning:"!",info:"i"}[s.icon])),l.trim()!==Y.trim()&&MA(C,Y)},KQ=(C,s)=>{if(s.iconColor){C.style.color=s.iconColor,C.style.borderColor=s.iconColor;for(const l of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])b(C,l,"backgroundColor",s.iconColor);b(C,".swal2-success-ring","borderColor",s.iconColor)}},PQ=C=>'<div class="'.concat(M["icon-content"],'">').concat(C,"</div>"),Sg=(C,s)=>{const l=RB();if(l){if(!s.imageUrl){G(l);return}d(l,""),l.setAttribute("src",s.imageUrl),l.setAttribute("alt",s.imageAlt||""),U(l,"width",s.imageWidth),U(l,"height",s.imageHeight),l.className=M.image,YA(l,s,"image")}},ng=(C,s)=>{const l=uA(),Y=HA();if(!(!l||!Y)){if(s.toast){U(l,"width",s.width),Y.style.width="100%";const eA=IA();eA&&Y.insertBefore(eA,gB())}else U(Y,"width",s.width);U(Y,"padding",s.padding),s.color&&(Y.style.color=s.color),s.background&&(Y.style.background=s.background),G(GB()),dg(Y,s)}},dg=(C,s)=>{const l=s.showClass||{};C.className="".concat(M.popup," ").concat(dA(C)?l.popup:""),s.toast?(VA([document.documentElement,document.body],M["toast-shown"]),VA(C,M.toast)):VA(C,M.modal),YA(C,s,"popup"),typeof s.customClass=="string"&&VA(C,s.customClass),s.icon&&VA(C,M["icon-".concat(s.icon)])},gt=(C,s)=>{const l=HB();if(!l)return;const{progressSteps:Y,currentProgressStep:eA}=s;if(!Y||Y.length===0||eA===void 0){G(l);return}d(l),l.textContent="",eA>=Y.length&&x("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),Y.forEach((vA,iB)=>{const LB=pE(vA);if(l.appendChild(LB),iB===eA&&VA(LB,M["active-progress-step"]),iB!==Y.length-1){const AQ=NQ(s);l.appendChild(AQ)}})},pE=C=>{const s=document.createElement("li");return VA(s,M["progress-step"]),MA(s,C),s},NQ=C=>{const s=document.createElement("li");return VA(s,M["progress-step-line"]),C.progressStepsDistance&&U(s,"width",C.progressStepsDistance),s},Hg=(C,s)=>{const l=wB();l&&(q(l,s.title||s.titleText,"block"),s.title&&BQ(s.title,l),s.titleText&&(l.innerText=s.titleText),YA(l,s,"title"))},fg=(C,s)=>{ng(C,s),uQ(C,s),gt(C,s),ZQ(C,s),Sg(C,s),Hg(C,s),xQ(C,s),Gn(C,s),$g(C,s),Qt(C,s);const l=HA();typeof s.didRender=="function"&&l&&s.didRender(l)},Mg=()=>dA(HA()),jQ=()=>{var C;return(C=UB())===null||C===void 0?void 0:C.click()},we=()=>{var C;return(C=z())===null||C===void 0?void 0:C.click()},Rn=()=>{var C;return(C=mA())===null||C===void 0?void 0:C.click()},ug=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),oB=C=>{C.keydownTarget&&C.keydownHandlerAdded&&(C.keydownTarget.removeEventListener("keydown",C.keydownHandler,{capture:C.keydownListenerCapture}),C.keydownHandlerAdded=!1)},Yn=(C,s,l,Y)=>{oB(s),l.toast||(s.keydownHandler=eA=>NE(C,eA,Y),s.keydownTarget=l.keydownListenerCapture?window:HA(),s.keydownListenerCapture=l.keydownListenerCapture,s.keydownTarget.addEventListener("keydown",s.keydownHandler,{capture:s.keydownListenerCapture}),s.keydownHandlerAdded=!0)},zt=(C,s)=>{const l=nA();if(l.length){C=C+s,C===l.length?C=0:C===-1&&(C=l.length-1),l[C].focus();return}HA().focus()},cQ=["ArrowRight","ArrowDown"],ce=["ArrowLeft","ArrowUp"],NE=(C,s,l)=>{const Y=h.innerParams.get(C);Y&&(s.isComposing||s.keyCode===229||(Y.stopKeydownPropagation&&s.stopPropagation(),s.key==="Enter"?LQ(C,s,Y):s.key==="Tab"?tt(s):[...cQ,...ce].includes(s.key)?re(s.key):s.key==="Escape"&&bQ(s,Y,l)))},LQ=(C,s,l)=>{if(sA(l.allowEnterKey)&&s.target&&C.getInput()&&s.target instanceof HTMLElement&&s.target.outerHTML===C.getInput().outerHTML){if(["textarea","file"].includes(l.input))return;jQ(),s.preventDefault()}},tt=C=>{const s=C.target,l=nA();let Y=-1;for(let eA=0;eA<l.length;eA++)if(s===l[eA]){Y=eA;break}C.shiftKey?zt(Y,-1):zt(Y,1),C.stopPropagation(),C.preventDefault()},re=C=>{const s=UB(),l=z(),Y=mA(),eA=[s,l,Y];if(document.activeElement instanceof HTMLElement&&!eA.includes(document.activeElement))return;const vA=cQ.includes(C)?"nextElementSibling":"previousElementSibling";let iB=document.activeElement;for(let LB=0;LB<bA().children.length;LB++){if(iB=iB[vA],!iB)return;if(iB instanceof HTMLButtonElement&&dA(iB))break}iB instanceof HTMLButtonElement&&iB.focus()},bQ=(C,s,l)=>{sA(s.allowEscapeKey)&&(C.preventDefault(),l(ug.esc))};var iQ={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Cg=()=>{Array.from(document.body.children).forEach(s=>{s===uA()||s.contains(uA())||(s.hasAttribute("aria-hidden")&&s.setAttribute("data-previous-aria-hidden",s.getAttribute("aria-hidden")||""),s.setAttribute("aria-hidden","true"))})},Kt=()=>{Array.from(document.body.children).forEach(s=>{s.hasAttribute("data-previous-aria-hidden")?(s.setAttribute("aria-hidden",s.getAttribute("data-previous-aria-hidden")||""),s.removeAttribute("data-previous-aria-hidden")):s.removeAttribute("aria-hidden")})},le=typeof window<"u"&&!!window.GestureEvent,vg=()=>{if(le&&!CA(document.body,M.iosfix)){const C=document.body.scrollTop;document.body.style.top="".concat(C*-1,"px"),VA(document.body,M.iosfix),gQ()}},gQ=()=>{const C=uA();if(!C)return;let s;C.ontouchstart=l=>{s=Pt(l)},C.ontouchmove=l=>{s&&(l.preventDefault(),l.stopPropagation())}},Pt=C=>{const s=C.target,l=uA(),Y=uB();return!l||!Y||hg(C)||et(C)?!1:s===l||!pA(l)&&s instanceof HTMLElement&&s.tagName!=="INPUT"&&s.tagName!=="TEXTAREA"&&!(pA(Y)&&Y.contains(s))},hg=C=>C.touches&&C.touches.length&&C.touches[0].touchType==="stylus",et=C=>C.touches&&C.touches.length>1,mQ=()=>{if(CA(document.body,M.iosfix)){const C=parseInt(document.body.style.top,10);lB(document.body,M.iosfix),document.body.style.top="",document.body.scrollTop=C*-1}},Fe=()=>{const C=document.createElement("div");C.className=M["scrollbar-measure"],document.body.appendChild(C);const s=C.getBoundingClientRect().width-C.clientWidth;return document.body.removeChild(C),s};let Ig=null;const De=C=>{Ig===null&&(document.body.scrollHeight>window.innerHeight||C==="scroll")&&(Ig=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Ig+Fe(),"px"))},Ve=()=>{Ig!==null&&(document.body.style.paddingRight="".concat(Ig,"px"),Ig=null)};function Ue(C,s,l,Y){aA()?de(C,Y):(R(l).then(()=>de(C,Y)),oB(w)),le?(s.setAttribute("style","display:none !important"),s.removeAttribute("class"),s.innerHTML=""):s.remove(),rA()&&(Ve(),mQ(),Kt()),pn()}function pn(){lB([document.documentElement,document.body],[M.shown,M["height-auto"],M["no-backdrop"],M["toast-shown"]])}function qQ(C){C=xe(C);const s=iQ.swalPromiseResolve.get(this),l=bE(this);this.isAwaitingPromise?C.isDismissed||(Et(this),s(C)):l&&s(C)}const bE=C=>{const s=HA();if(!s)return!1;const l=h.innerParams.get(C);if(!l||CA(s,l.hideClass.popup))return!1;lB(s,l.showClass.popup),VA(s,l.hideClass.popup);const Y=uA();return lB(Y,l.showClass.backdrop),VA(Y,l.hideClass.backdrop),nt(C,s,l),!0};function Wg(C){const s=iQ.swalPromiseReject.get(this);Et(this),s&&s(C)}const Et=C=>{C.isAwaitingPromise&&(delete C.isAwaitingPromise,h.innerParams.get(C)||C._destroy())},xe=C=>typeof C>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},C),nt=(C,s,l)=>{const Y=uA(),eA=MQ&&GA(s);typeof l.willClose=="function"&&l.willClose(s),eA?Nn(C,s,Y,l.returnFocus,l.didClose):Ue(C,Y,l.returnFocus,l.didClose)},Nn=(C,s,l,Y,eA)=>{MQ&&(w.swalCloseEventFinishedCallback=Ue.bind(null,C,l,Y,eA),s.addEventListener(MQ,function(vA){vA.target===s&&(w.swalCloseEventFinishedCallback(),delete w.swalCloseEventFinishedCallback)}))},de=(C,s)=>{setTimeout(()=>{typeof s=="function"&&s.bind(C.params)(),C._destroy&&C._destroy()})},eB=C=>{let s=HA();if(s||new $B,s=HA(),!s)return;const l=IA();aA()?G(gB()):JA(s,C),d(l),s.setAttribute("data-loading","true"),s.setAttribute("aria-busy","true"),s.focus()},JA=(C,s)=>{const l=bA(),Y=IA();!l||!Y||(!s&&dA(UB())&&(s=UB()),d(l),s&&(G(s),Y.setAttribute("data-button-to-replace",s.className),l.insertBefore(Y,s)),VA([C,l],M.loading))},mE=(C,s)=>{s.input==="select"||s.input==="radio"?mn(C,s):["text","email","number","tel","textarea"].some(l=>l===s.input)&&(DA(s.inputValue)||yA(s.inputValue))&&(eB(UB()),yE(C,s))},PA=(C,s)=>{const l=C.getInput();if(!l)return null;switch(s.input){case"checkbox":return bn(l);case"radio":return fe(l);case"file":return JE(l);default:return s.inputAutoTrim?l.value.trim():l.value}},bn=C=>C.checked?1:0,fe=C=>C.checked?C.value:null,JE=C=>C.files&&C.files.length?C.getAttribute("multiple")!==null?C.files:C.files[0]:null,mn=(C,s)=>{const l=HA();if(!l)return;const Y=eA=>{s.input==="select"?kE(l,Me(eA),s):s.input==="radio"&&Jn(l,Me(eA),s)};DA(s.inputOptions)||yA(s.inputOptions)?(eB(UB()),lA(s.inputOptions).then(eA=>{C.hideLoading(),Y(eA)})):typeof s.inputOptions=="object"?Y(s.inputOptions):iA("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof s.inputOptions))},yE=(C,s)=>{const l=C.getInput();l&&(G(l),lA(s.inputValue).then(Y=>{l.value=s.input==="number"?"".concat(parseFloat(Y)||0):"".concat(Y),d(l),l.focus(),C.hideLoading()}).catch(Y=>{iA("Error in inputValue promise: ".concat(Y)),l.value="",d(l),l.focus(),C.hideLoading()}))};function kE(C,s,l){const Y=k(C,M.select);if(!Y)return;const eA=(vA,iB,LB)=>{const AQ=document.createElement("option");AQ.value=LB,MA(AQ,iB),AQ.selected=ZE(LB,l.inputValue),vA.appendChild(AQ)};s.forEach(vA=>{const iB=vA[0],LB=vA[1];if(Array.isArray(LB)){const AQ=document.createElement("optgroup");AQ.label=iB,AQ.disabled=!1,Y.appendChild(AQ),LB.forEach(Ye=>eA(AQ,Ye[1],Ye[0]))}else eA(Y,LB,iB)}),Y.focus()}function Jn(C,s,l){const Y=k(C,M.radio);if(!Y)return;s.forEach(vA=>{const iB=vA[0],LB=vA[1],AQ=document.createElement("input"),Ye=document.createElement("label");AQ.type="radio",AQ.name=M.radio,AQ.value=iB,ZE(iB,l.inputValue)&&(AQ.checked=!0);const vE=document.createElement("span");MA(vE,LB),vE.className=M.label,Ye.appendChild(AQ),Ye.appendChild(vE),Y.appendChild(Ye)});const eA=Y.querySelectorAll("input");eA.length&&eA[0].focus()}const Me=C=>{const s=[];return C instanceof Map?C.forEach((l,Y)=>{let eA=l;typeof eA=="object"&&(eA=Me(eA)),s.push([Y,eA])}):Object.keys(C).forEach(l=>{let Y=C[l];typeof Y=="object"&&(Y=Me(Y)),s.push([l,Y])}),s},ZE=(C,s)=>!!s&&s.toString()===C.toString(),qB=C=>{const s=h.innerParams.get(C);C.disableButtons(),s.input?Gg(C,"confirm"):lQ(C,!0)},Ct=C=>{const s=h.innerParams.get(C);C.disableButtons(),s.returnInputValueOnDeny?Gg(C,"deny"):rQ(C,!1)},_A=(C,s)=>{C.disableButtons(),s(ug.cancel)},Gg=(C,s)=>{const l=h.innerParams.get(C);if(!l.input){iA('The "input" parameter is needed to be set when using returnInputValueOn'.concat(v(s)));return}const Y=C.getInput(),eA=PA(C,l);l.inputValidator?It(C,eA,s):Y&&!Y.checkValidity()?(C.enableButtons(),C.showValidationMessage(l.validationMessage)):s==="deny"?rQ(C,eA):lQ(C,eA)},It=(C,s,l)=>{const Y=h.innerParams.get(C);C.disableInput(),Promise.resolve().then(()=>lA(Y.inputValidator(s,Y.validationMessage))).then(vA=>{C.enableButtons(),C.enableInput(),vA?C.showValidationMessage(vA):l==="deny"?rQ(C,s):lQ(C,s)})},rQ=(C,s)=>{const l=h.innerParams.get(C||void 0);l.showLoaderOnDeny&&eB(z()),l.preDeny?(C.isAwaitingPromise=!0,Promise.resolve().then(()=>lA(l.preDeny(s,l.validationMessage))).then(eA=>{eA===!1?(C.hideLoading(),Et(C)):C.close({isDenied:!0,value:typeof eA>"u"?s:eA})}).catch(eA=>EQ(C||void 0,eA))):C.close({isDenied:!0,value:s})},mB=(C,s)=>{C.close({isConfirmed:!0,value:s})},EQ=(C,s)=>{C.rejectPromise(s)},lQ=(C,s)=>{const l=h.innerParams.get(C||void 0);l.showLoaderOnConfirm&&eB(),l.preConfirm?(C.resetValidationMessage(),C.isAwaitingPromise=!0,Promise.resolve().then(()=>lA(l.preConfirm(s,l.validationMessage))).then(eA=>{dA(GB())||eA===!1?(C.hideLoading(),Et(C)):mB(C,typeof eA>"u"?s:eA)}).catch(eA=>EQ(C||void 0,eA))):mB(C,s)};function Rg(){const C=h.innerParams.get(this);if(!C)return;const s=h.domCache.get(this);G(s.loader),aA()?C.icon&&d(gB()):jt(s),lB([s.popup,s.actions],M.loading),s.popup.removeAttribute("aria-busy"),s.popup.removeAttribute("data-loading"),s.confirmButton.disabled=!1,s.denyButton.disabled=!1,s.cancelButton.disabled=!1}const jt=C=>{const s=C.popup.getElementsByClassName(C.loader.getAttribute("data-button-to-replace"));s.length?d(s[0],"inline-block"):wA()&&G(C.actions)};function qt(){const C=h.innerParams.get(this),s=h.domCache.get(this);return s?SA(s.popup,C.input):null}function _t(C,s,l){const Y=h.domCache.get(C);s.forEach(eA=>{Y[eA].disabled=l})}function pt(C,s){const l=HA();if(!(!l||!C))if(C.type==="radio"){const Y=l.querySelectorAll('[name="'.concat(M.radio,'"]'));for(let eA=0;eA<Y.length;eA++)Y[eA].disabled=s}else C.disabled=s}function it(){_t(this,["confirmButton","denyButton","cancelButton"],!1)}function ue(){_t(this,["confirmButton","denyButton","cancelButton"],!0)}function WQ(){pt(this.getInput(),!1)}function $t(){pt(this.getInput(),!0)}function Ae(C){const s=h.domCache.get(this),l=h.innerParams.get(this);MA(s.validationMessage,C),s.validationMessage.className=M["validation-message"],l.customClass&&l.customClass.validationMessage&&VA(s.validationMessage,l.customClass.validationMessage),d(s.validationMessage);const Y=this.getInput();Y&&(Y.setAttribute("aria-invalid",!0),Y.setAttribute("aria-describedby",M["validation-message"]),TA(Y),VA(Y,M.inputerror))}function dB(){const C=h.domCache.get(this);C.validationMessage&&G(C.validationMessage);const s=this.getInput();s&&(s.removeAttribute("aria-invalid"),s.removeAttribute("aria-describedby"),lB(s,M.inputerror))}const bB={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},_Q=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Tg={},ot=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Yg=C=>Object.prototype.hasOwnProperty.call(bB,C),hB=C=>_Q.indexOf(C)!==-1,st=C=>Tg[C],Be=C=>{Yg(C)||x('Unknown parameter "'.concat(C,'"'))},ze=C=>{ot.includes(C)&&x('The parameter "'.concat(C,'" is incompatible with toasts'))},Qe=C=>{const s=st(C);s&&$(C,s)},yn=C=>{C.backdrop===!1&&C.allowOutsideClick&&x('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const s in C)Be(s),C.toast&&ze(s),Qe(s)};function $Q(C){const s=HA(),l=h.innerParams.get(this);if(!s||CA(s,l.hideClass.popup)){x("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const Y=OB(C),eA=Object.assign({},l,Y);fg(this,eA),h.innerParams.set(this,eA),Object.defineProperties(this,{params:{value:Object.assign({},this.params,C),writable:!1,enumerable:!0}})}const OB=C=>{const s={};return Object.keys(C).forEach(l=>{hB(l)?s[l]=C[l]:x("Invalid parameter to update: ".concat(l))}),s};function Ag(){const C=h.domCache.get(this),s=h.innerParams.get(this);if(!s){YQ(this);return}C.popup&&w.swalCloseEventFinishedCallback&&(w.swalCloseEventFinishedCallback(),delete w.swalCloseEventFinishedCallback),typeof s.didDestroy=="function"&&s.didDestroy(),sB(this)}const sB=C=>{YQ(C),delete C.params,delete w.keydownHandler,delete w.keydownTarget,delete w.currentInstance},YQ=C=>{C.isAwaitingPromise?(IB(h,C),C.isAwaitingPromise=!0):(IB(iQ,C),IB(h,C),delete C.isAwaitingPromise,delete C.disableButtons,delete C.enableButtons,delete C.getInput,delete C.disableInput,delete C.enableInput,delete C.hideLoading,delete C.disableLoading,delete C.showValidationMessage,delete C.resetValidationMessage,delete C.close,delete C.closePopup,delete C.closeModal,delete C.closeToast,delete C.rejectPromise,delete C.update,delete C._destroy)},IB=(C,s)=>{for(const l in C)C[l].delete(s)};var aB=Object.freeze({__proto__:null,_destroy:Ag,close:qQ,closeModal:qQ,closePopup:qQ,closeToast:qQ,disableButtons:ue,disableInput:$t,disableLoading:Rg,enableButtons:it,enableInput:WQ,getInput:qt,handleAwaitingPromise:Et,hideLoading:Rg,rejectPromise:Wg,resetValidationMessage:dB,showValidationMessage:Ae,update:$Q});const FQ=(C,s,l)=>{h.innerParams.get(C).toast?GQ(C,s,l):(Ke(s),Pe(s),LE(C,s,l))},GQ=(C,s,l)=>{s.popup.onclick=()=>{const Y=h.innerParams.get(C);Y&&(_B(Y)||Y.timer||Y.input)||l(ug.close)}},_B=C=>C.showConfirmButton||C.showDenyButton||C.showCancelButton||C.showCloseButton;let pg=!1;const Ke=C=>{C.popup.onmousedown=()=>{C.container.onmouseup=function(s){C.container.onmouseup=void 0,s.target===C.container&&(pg=!0)}}},Pe=C=>{C.container.onmousedown=()=>{C.popup.onmouseup=function(s){C.popup.onmouseup=void 0,(s.target===C.popup||C.popup.contains(s.target))&&(pg=!0)}}},LE=(C,s,l)=>{s.container.onclick=Y=>{const eA=h.innerParams.get(C);if(pg){pg=!1;return}Y.target===s.container&&sA(eA.allowOutsideClick)&&l(ug.backdrop)}},XQ=C=>typeof C=="object"&&C.jquery,Nt=C=>C instanceof Element||XQ(C),je=C=>{const s={};return typeof C[0]=="object"&&!Nt(C[0])?Object.assign(s,C[0]):["title","html","icon"].forEach((l,Y)=>{const eA=C[Y];typeof eA=="string"||Nt(eA)?s[l]=eA:eA!==void 0&&iA("Unexpected type of ".concat(l,'! Expected "string" or "Element", got ').concat(typeof eA))}),s};function ge(){const C=this;for(var s=arguments.length,l=new Array(s),Y=0;Y<s;Y++)l[Y]=arguments[Y];return new C(...l)}function qe(C){class s extends this{_main(Y,eA){return super._main(Y,Object.assign({},C,eA))}}return s}const XE=()=>w.timeout&&w.timeout.getTimerLeft(),bt=()=>{if(w.timeout)return AB(),w.timeout.stop()},at=()=>{if(w.timeout){const C=w.timeout.start();return qA(C),C}},Og=()=>{const C=w.timeout;return C&&(C.running?bt():at())},_e=C=>{if(w.timeout){const s=w.timeout.increase(C);return qA(s,!0),s}},ig=()=>!!(w.timeout&&w.timeout.isRunning());let SE=!1;const he={};function og(){let C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";he[C]=this,SE||(document.body.addEventListener("click",mt),SE=!0)}const mt=C=>{for(let s=C.target;s&&s!==document;s=s.parentNode)for(const l in he){const Y=s.getAttribute(l);if(Y){he[l].fire({template:Y});return}}};var Ge=Object.freeze({__proto__:null,argsToParams:je,bindClickHandler:og,clickCancel:Rn,clickConfirm:jQ,clickDeny:we,enableLoading:eB,fire:ge,getActions:bA,getCancelButton:mA,getCloseButton:H,getConfirmButton:UB,getContainer:uA,getDenyButton:z,getFocusableElements:nA,getFooter:EA,getHtmlContainer:uB,getIcon:gB,getIconContent:MB,getImage:RB,getInputLabel:ZA,getLoader:IA,getPopup:HA,getProgressSteps:HB,getTimerLeft:XE,getTimerProgressBar:L,getTitle:wB,getValidationMessage:GB,increaseTimer:_e,isDeprecatedParameter:st,isLoading:oA,isTimerRunning:ig,isUpdatableParameter:hB,isValidParameter:Yg,isVisible:Mg,mixin:qe,resumeTimer:at,showLoading:eB,stopTimer:bt,toggleTimer:Og});class HE{constructor(s,l){this.callback=s,this.remaining=l,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(s){const l=this.running;return l&&this.stop(),this.remaining+=s,l&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const $e=["swal-title","swal-html","swal-footer"],AE=C=>{const s=typeof C.template=="string"?document.querySelector(C.template):C.template;if(!s)return{};const l=s.content;return QE(l),Object.assign(JQ(l),kn(l),BE(l),Bg(l),TQ(l),Re(l),te(l,$e))},JQ=C=>{const s={};return Array.from(C.querySelectorAll("swal-param")).forEach(Y=>{Vg(Y,["name","value"]);const eA=Y.getAttribute("name"),vA=Y.getAttribute("value");typeof bB[eA]=="boolean"?s[eA]=vA!=="false":typeof bB[eA]=="object"?s[eA]=JSON.parse(vA):s[eA]=vA}),s},kn=C=>{const s={};return Array.from(C.querySelectorAll("swal-function-param")).forEach(Y=>{const eA=Y.getAttribute("name"),vA=Y.getAttribute("value");s[eA]=new Function("return ".concat(vA))()}),s},BE=C=>{const s={};return Array.from(C.querySelectorAll("swal-button")).forEach(Y=>{Vg(Y,["type","color","aria-label"]);const eA=Y.getAttribute("type");s["".concat(eA,"ButtonText")]=Y.innerHTML,s["show".concat(v(eA),"Button")]=!0,Y.hasAttribute("color")&&(s["".concat(eA,"ButtonColor")]=Y.getAttribute("color")),Y.hasAttribute("aria-label")&&(s["".concat(eA,"ButtonAriaLabel")]=Y.getAttribute("aria-label"))}),s},Bg=C=>{const s={},l=C.querySelector("swal-image");return l&&(Vg(l,["src","width","height","alt"]),l.hasAttribute("src")&&(s.imageUrl=l.getAttribute("src")),l.hasAttribute("width")&&(s.imageWidth=l.getAttribute("width")),l.hasAttribute("height")&&(s.imageHeight=l.getAttribute("height")),l.hasAttribute("alt")&&(s.imageAlt=l.getAttribute("alt"))),s},TQ=C=>{const s={},l=C.querySelector("swal-icon");return l&&(Vg(l,["type","color"]),l.hasAttribute("type")&&(s.icon=l.getAttribute("type")),l.hasAttribute("color")&&(s.iconColor=l.getAttribute("color")),s.iconHtml=l.innerHTML),s},Re=C=>{const s={},l=C.querySelector("swal-input");l&&(Vg(l,["type","label","placeholder","value"]),s.input=l.getAttribute("type")||"text",l.hasAttribute("label")&&(s.inputLabel=l.getAttribute("label")),l.hasAttribute("placeholder")&&(s.inputPlaceholder=l.getAttribute("placeholder")),l.hasAttribute("value")&&(s.inputValue=l.getAttribute("value")));const Y=Array.from(C.querySelectorAll("swal-input-option"));return Y.length&&(s.inputOptions={},Y.forEach(eA=>{Vg(eA,["value"]);const vA=eA.getAttribute("value"),iB=eA.innerHTML;s.inputOptions[vA]=iB})),s},te=(C,s)=>{const l={};for(const Y in s){const eA=s[Y],vA=C.querySelector(eA);vA&&(Vg(vA,[]),l[eA.replace(/^swal-/,"")]=vA.innerHTML.trim())}return l},QE=C=>{const s=$e.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(C.children).forEach(l=>{const Y=l.tagName.toLowerCase();s.includes(Y)||x("Unrecognized element <".concat(Y,">"))})},Vg=(C,s)=>{Array.from(C.attributes).forEach(l=>{s.indexOf(l.name)===-1&&x(['Unrecognized attribute "'.concat(l.name,'" on <').concat(C.tagName.toLowerCase(),">."),"".concat(s.length?"Allowed attributes are: ".concat(s.join(", ")):"To set the value, use HTML within the element.")])})},wt=10,Zn=C=>{const s=uA(),l=HA();typeof C.willOpen=="function"&&C.willOpen(l);const eA=window.getComputedStyle(document.body).overflowY;c(s,l,C),setTimeout(()=>{Jt(s,l)},wt),rA()&&(T(s,C.scrollbarPadding,eA),Cg()),!aA()&&!w.previousActiveElement&&(w.previousActiveElement=document.activeElement),typeof C.didOpen=="function"&&setTimeout(()=>C.didOpen(l)),lB(s,M["no-transition"])},gE=C=>{const s=HA();if(C.target!==s||!MQ)return;const l=uA();s.removeEventListener(MQ,gE),l.style.overflowY="auto"},Jt=(C,s)=>{MQ&&GA(s)?(C.style.overflowY="hidden",s.addEventListener(MQ,gE)):C.style.overflowY="auto"},T=(C,s,l)=>{vg(),s&&l!=="hidden"&&De(l),setTimeout(()=>{C.scrollTop=0})},c=(C,s,l)=>{VA(C,l.showClass.backdrop),s.style.setProperty("opacity","0","important"),d(s,"grid"),setTimeout(()=>{VA(s,l.showClass.popup),s.style.removeProperty("opacity")},wt),VA([document.documentElement,document.body],M.shown),l.heightAuto&&l.backdrop&&!l.toast&&VA([document.documentElement,document.body],M["height-auto"])};var r={email:(C,s)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(C)?Promise.resolve():Promise.resolve(s||"Invalid email address"),url:(C,s)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(C)?Promise.resolve():Promise.resolve(s||"Invalid URL")};function u(C){C.inputValidator||(C.input==="email"&&(C.inputValidator=r.email),C.input==="url"&&(C.inputValidator=r.url))}function J(C){(!C.target||typeof C.target=="string"&&!document.querySelector(C.target)||typeof C.target!="string"&&!C.target.appendChild)&&(x('Target parameter is not valid, defaulting to "body"'),C.target="body")}function O(C){u(C),C.showLoaderOnConfirm&&!C.preConfirm&&x(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),J(C),typeof C.title=="string"&&(C.title=C.title.split(`
`).join("<br />")),lg(C)}let V;var tA=new WeakMap;class P{constructor(){if(i(this,tA,{writable:!0,value:void 0}),typeof window>"u")return;V=this;for(var s=arguments.length,l=new Array(s),Y=0;Y<s;Y++)l[Y]=arguments[Y];const eA=Object.freeze(this.constructor.argsToParams(l));this.params=eA,this.isAwaitingPromise=!1,g(this,tA,this._main(V.params))}_main(s){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};yn(Object.assign({},l,s)),w.currentInstance&&(w.currentInstance._destroy(),rA()&&Kt()),w.currentInstance=V;const Y=NA(s,l);O(Y),Object.freeze(Y),w.timeout&&(w.timeout.stop(),delete w.timeout),clearTimeout(w.restoreFocusTimeout);const eA=zA(V);return fg(V,Y),h.innerParams.set(V,Y),FA(V,eA,Y)}then(s){return Q(this,tA).then(s)}finally(s){return Q(this,tA).finally(s)}}const FA=(C,s,l)=>new Promise((Y,eA)=>{const vA=iB=>{C.close({isDismissed:!0,dismiss:iB})};iQ.swalPromiseResolve.set(C,Y),iQ.swalPromiseReject.set(C,eA),s.confirmButton.onclick=()=>{qB(C)},s.denyButton.onclick=()=>{Ct(C)},s.cancelButton.onclick=()=>{_A(C,vA)},s.closeButton.onclick=()=>{vA(ug.close)},FQ(C,s,vA),Yn(C,w,l,vA),mE(C,l),Zn(l),$A(w,l,vA),nB(s,l),setTimeout(()=>{s.container.scrollTop=0})}),NA=(C,s)=>{const l=AE(C),Y=Object.assign({},bB,s,l,C);return Y.showClass=Object.assign({},bB.showClass,Y.showClass),Y.hideClass=Object.assign({},bB.hideClass,Y.hideClass),Y},zA=C=>{const s={popup:HA(),container:uA(),actions:bA(),confirmButton:UB(),denyButton:z(),cancelButton:mA(),loader:IA(),closeButton:H(),validationMessage:GB(),progressSteps:HB()};return h.domCache.set(C,s),s},$A=(C,s,l)=>{const Y=L();G(Y),s.timer&&(C.timeout=new HE(()=>{l("timer"),delete C.timeout},s.timer),s.timerProgressBar&&(d(Y),YA(Y,s,"timerProgressBar"),setTimeout(()=>{C.timeout&&C.timeout.running&&qA(s.timer)})))},nB=(C,s)=>{if(!s.toast){if(!sA(s.allowEnterKey)){JB();return}YB(C,s)||zt(-1,1)}},YB=(C,s)=>s.focusDeny&&dA(C.denyButton)?(C.denyButton.focus(),!0):s.focusCancel&&dA(C.cancelButton)?(C.cancelButton.focus(),!0):s.focusConfirm&&dA(C.confirmButton)?(C.confirmButton.focus(),!0):!1,JB=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const C=new Date,s=localStorage.getItem("swal-initiation");s?(C.getTime()-Date.parse(s))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const l=document.createElement("audio");l.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",l.loop=!0,document.body.appendChild(l),setTimeout(()=>{l.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation","".concat(C))}P.prototype.disableButtons=ue,P.prototype.enableButtons=it,P.prototype.getInput=qt,P.prototype.disableInput=$t,P.prototype.enableInput=WQ,P.prototype.hideLoading=Rg,P.prototype.disableLoading=Rg,P.prototype.showValidationMessage=Ae,P.prototype.resetValidationMessage=dB,P.prototype.close=qQ,P.prototype.closePopup=qQ,P.prototype.closeModal=qQ,P.prototype.closeToast=qQ,P.prototype.rejectPromise=Wg,P.prototype.update=$Q,P.prototype._destroy=Ag,Object.assign(P,Ge),Object.keys(aB).forEach(C=>{P[C]=function(){return V&&V[C]?V[C](...arguments):null}}),P.DismissReason=ug,P.version="11.7.27";const $B=P;return $B.default=$B,$B}),typeof ee<"u"&&ee.Sweetalert2&&(ee.swal=ee.sweetAlert=ee.Swal=ee.SweetAlert=ee.Sweetalert2),typeof document<"u"&&function(Q,g){var t=Q.createElement("style");if(Q.getElementsByTagName("head")[0].appendChild(t),t.styleSheet)t.styleSheet.disabled||(t.styleSheet.cssText=g);else try{t.innerHTML=g}catch{t.innerText=g}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(v0);var kb=v0.exports;const Ii=jl(kb);var W0={exports:{}};const Zb=H0(sY);(function(A,B){(function(g,t){A.exports=t(Zb)})(ee,Q=>(()=>{var g={657:(I,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=(a,w)=>{const F=a.__vccOpts||a;for(const[R,h]of w)F[R]=h;return F}},976:I=>{I.exports=Q}},t={};function e(I){var i=t[I];if(i!==void 0)return i.exports;var a=t[I]={exports:{}};return g[I](a,a.exports,e),a.exports}e.d=(I,i)=>{for(var a in i)e.o(i,a)&&!e.o(I,a)&&Object.defineProperty(I,a,{enumerable:!0,get:i[a]})},e.o=(I,i)=>Object.prototype.hasOwnProperty.call(I,i),e.r=I=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(I,"__esModule",{value:!0})};var E={};return(()=>{e.r(E),e.d(E,{Component:()=>UB,LoadingPlugin:()=>z,default:()=>ZA,useLoading:()=>mA});var I=e(976);function i(IA){var bA;typeof IA.remove<"u"?IA.remove():(bA=IA.parentNode)==null||bA.removeChild(IA)}function a(IA,bA,EA){let L=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const H=(0,I.h)(IA,bA,L),K=document.createElement("div");return K.classList.add("vld-container"),EA.appendChild(K),(0,I.render)(H,K),H.component}function w(){return typeof window<"u"}const F=w()?window.HTMLElement:Object,R=["aria-busy"],h={class:"vl-icon"};function y(IA,bA,EA,L,H,K){return(0,I.openBlock)(),(0,I.createBlock)(I.Transition,{name:IA.transition},{default:(0,I.withCtx)(()=>[(0,I.withDirectives)((0,I.createElementVNode)("div",{tabindex:"0",class:(0,I.normalizeClass)(["vl-overlay vl-active",{"vl-full-page":IA.isFullPage}]),"aria-busy":IA.isActive,"aria-label":"Loading",style:(0,I.normalizeStyle)({zIndex:IA.zIndex})},[(0,I.createElementVNode)("div",{class:"vl-background",onClick:bA[0]||(bA[0]=(0,I.withModifiers)(function(){return IA.cancel&&IA.cancel(...arguments)},["prevent"])),style:(0,I.normalizeStyle)(IA.bgStyle)},null,4),(0,I.createElementVNode)("div",h,[(0,I.renderSlot)(IA.$slots,"before"),(0,I.renderSlot)(IA.$slots,"default",{},()=>[((0,I.openBlock)(),(0,I.createBlock)((0,I.resolveDynamicComponent)(IA.loader),{color:IA.color,width:IA.width,height:IA.height},null,8,["color","width","height"]))]),(0,I.renderSlot)(IA.$slots,"after")])],14,R),[[I.vShow,IA.isActive]])]),_:3},8,["name"])}const p={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(IA){if(!this.isActive||IA.target===this.$el||this.$el.contains(IA.target))return;let bA=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||bA&&bA.contains(IA.target))&&(IA.preventDefault(),this.$el.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},M=["width","height","stroke"],N=[(0,I.createStaticVNode)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',1)];function AA(IA,bA,EA,L,H,K){return(0,I.openBlock)(),(0,I.createElementBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:IA.width,height:IA.height,stroke:IA.color},N,8,M)}const v=(0,I.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});var x=e(657);const cA=(0,x.default)(v,[["render",AA]]),j=["fill","width","height"],sA=[(0,I.createStaticVNode)('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',3)];function DA(IA,bA,EA,L,H,K){return(0,I.openBlock)(),(0,I.createElementBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:IA.color,width:IA.width,height:IA.height},sA,8,j)}const lA=(0,I.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}}),uA=(0,x.default)(lA,[["render",DA]]),EB=["height","width","fill"],HA=[(0,I.createStaticVNode)('<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3)];function gB(IA,bA,EA,L,H,K){return(0,I.openBlock)(),(0,I.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:IA.height,width:IA.width,fill:IA.color},HA,8,EB)}const MB=(0,I.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}}),RB={Spinner:cA,Dots:uA,Bars:(0,x.default)(MB,[["render",gB]])},HB=(0,I.defineComponent)({name:"VueLoading",mixins:[p],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,F],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:Boolean,transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},components:RB,emits:["hide","update:active"],data(){return{isActive:this.active}},mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){!this.canCancel||!this.isActive||(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(()=>{const IA=this.$el.parentElement;(0,I.render)(null,IA),i(IA)},150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vl-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vl-shown")},keyPress(IA){IA.keyCode===27&&this.cancel()}},watch:{active(IA){this.isActive=IA},isActive(IA){IA?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),UB=(0,x.default)(HB,[["render",y]]);function mA(){let IA=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},bA=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{show(){let EA=arguments.length>0&&arguments[0]!==void 0?arguments[0]:IA,L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:bA;const K={...IA,...EA,...{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0}};let nA=K.container;K.container||(nA=document.body,K.isFullPage=!0);const rA={...bA,...L};return{hide:a(UB,K,nA,rA).ctx.hide}}}}const z=function(IA){let bA=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},EA=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const L=mA(bA,EA);IA.config.globalProperties.$loading=L,IA.provide("$loading",L)},ZA=UB})(),E})())})(W0);var Lb=W0.exports;const T0=jl(Lb),Xb="https://community-api-c7kj.onrender.com",Sb=ls("AttendanceStore",{state:()=>({attendances:[],attendance:{}}),getters:{getAttendance:A=>A.attendance,getAttendances:A=>A.attendances},actions:{insert:async function(A){await Rs.post(`${Xb}/attendance`,A).then(B=>B.data).catch(B=>{throw B})}}});const ps=(A,B)=>{const Q=A.__vccOpts||A;for(const[g,t]of B)Q[g]=t;return Q},ql=A=>(ri("data-v-f1e643fa"),A=A(),li(),A),Hb={class:"overlay"},vb={class:"modal-display"},Wb=ql(()=>xA("div",{class:"text-center"},[xA("h6",null,"Scan your Attendance")],-1)),Tb={class:"container-fluid p-3"},Ob={class:"row mb-3"},Vb={class:"col-12 text-center"},xb={class:"fw-bold"},zb={class:"row mb-3"},Kb={class:"col-12"},Pb={class:"scan-confirmation"},jb=ql(()=>xA("div",null,[xA("h2",null,"Scan OKOK !. Thank you for attending class !!")],-1)),qb=[jb],_b=ql(()=>xA("div",{class:"col-12 text-center pt-2"},[xA("p",null,"** Scan any qrCode. This is a test")],-1)),$b={__name:"ScanDialog",props:["model"],emits:["dialogClosed"],setup(A,{emit:B}){const g=Md(A.model),t=zB(!1),e=zB(!1),E=n0(),I=Sb();function i(){B("dialogClosed")}const a=zB(!1),w=zB(!1);function F(){t.value=!1,a.value=!1}function R(){a.value=!0}function h(M){t.value=!1,Ii.fire({icon:"error",title:`<p>${M.message}</p>`,text:"please make sure the device camera is not open in another application"}),i()}async function y(M){if(JSON.stringify(M.map(N=>N.rawValue)))try{t.value=!0,await I.insert({subjectId:g.value.subjectId,email:g.value.studentEmail}),E.success("Attendance updated successfully")}catch(N){Ii.fire({icon:"error",text:N.message})}w.value=!0,await p(800),w.value=!1}function p(M){return new Promise(m=>{window.setTimeout(m,M)})}return He(()=>{t.value=!0}),(M,m)=>{const N=Cn("qrcode-stream");return fB(),TB("div",Hb,[xA("div",vb,[Wb,xA("div",Tb,[xA("div",Ob,[xA("div",Vb,[xA("h5",xb,Wt(g.value.subjectName),1)])]),xA("div",zb,[xA("div",Kb,[SB(ft(T0),{active:t.value,"is-full-page":e.value},null,8,["active","is-full-page"]),SB(N,{paused:w.value,onDetect:y,onCameraOn:F,onCameraOff:R,onError:h},{default:hE(()=>[Di(xA("div",Pb,qb,512),[[cs,a.value]])]),_:1},8,["paused"])]),_b])]),xA("div",{class:"row"},[xA("div",{class:"d-flex justify-content-end"},[xA("button",{type:"button",class:"btn btn-secondary",onClick:i},"Close")])])])])}}},Am=ps($b,[["__scopeId","data-v-f1e643fa"]]),Bm="https://community-api-c7kj.onrender.com",Qm=ls("TimetableStore",{state:()=>({timetable:[]}),getters:{getTimetable:A=>A.timetable,getTimetableByDay:A=>{let B=[{id:1,name:"Monday",events:[]},{id:2,name:"Tuesday",events:[]},{id:3,name:"Wednesday",events:[]},{id:4,name:"Thursday",events:[]},{id:5,name:"Friday",events:[]}];for(var Q=0;Q<A.timetable.length;Q++){let g=B.find(t=>t.id==A.timetable[Q].classDay);g&&g.events.push({id:A.timetable[Q].id,subjectName:A.timetable[Q].subjectName,startTime:A.timetable[Q].startTime,endTime:A.timetable[Q].endTime,locationCode:A.timetable[Q].locationCode})}return B}},actions:{async retrieveTimetableByCourse(A){await Rs.get(`${Bm}/timetable/course/${A}`).then(B=>{this.timetable=B.data}).catch(B=>{throw B})}}}),gm="https://community-api-c7kj.onrender.com",tm=ls("CourseStore",{state:()=>({courses:[],course:{}}),getters:{getCourses:A=>A.courses},actions:{retrieveCourses:async function(){await Rs.get(`${gm}/courses`).then(A=>{this.courses=A.data}).catch(A=>{throw A})}}});const Ns=A=>(ri("data-v-606675ed"),A=A(),li(),A),em={class:"text-center pt-3"},Em=Ns(()=>xA("h2",null,"Timetable",-1)),nm={class:"nav navbar-nav pt-4"},Cm={class:"nav-item"},Im=Ns(()=>xA("option",{disabled:"",value:"0"},"Please select a course",-1)),im=["value"],om={class:"accordion pt-3",id:"accordionExample"},sm={class:"accordion-item"},am=["id"],wm=["data-bs-target","aria-controls","disabled"],cm={key:0,class:"badge rounded-pill bg-success"},rm=["id","aria-labelledby"],lm={class:"accordion-body"},Fm={class:"row d-flex justify-content-center"},Dm={class:"col-12 col-md-10"},Um={class:"main-card card"},dm=Ns(()=>xA("div",{class:"text-center"},[xA("p",{class:"small text-warning"},"click on subject to scan attendance")],-1)),fm={class:"card-body"},Mm={class:"scroll-area"},um={class:"vertical-timeline vertical-timeline--animate vertical-timeline--one-column"},hm=["onClick"],Gm={class:"timeline-title"},Rm={class:"vertical-timeline-element-date"},Ym={key:0,class:"text-center p-5"},pm=Ns(()=>xA("p",{class:"text-black-50"},[xA("i",null,"please select a course to view")],-1)),Nm=[pm],bm={__name:"TimetablePage",setup(A){const B=zB(0),Q=zB(!1),g=zB(!1),t=zB([]),e=zB({}),E=zB([]),I=Ys(),i=tm(),a=Qm(),w=zB(null);function F(){w.value;debugger}async function R(){try{Q.value=!0,await i.retrieveCourses(),t.value=i.getCourses}catch(M){Ii.fire({icon:"error",text:M.message})}finally{Q.value=!1}}async function h(M){try{Q.value=!0,await a.retrieveTimetableByCourse(M),E.value=a.getTimetableByDay}catch(m){Ii.fire({icon:"error",text:m.message})}finally{Q.value=!1}}function y(){g.value=!1}function p(M){e.value={subjectId:M.id,subjectName:M.subjectName,studentEmail:I.getUser.email},g.value=!0}return ut(B,async(M,m)=>{await h(M)}),He(async()=>{await R()}),(M,m)=>(fB(),TB(sQ,null,[SB(ft(T0),{active:Q.value,"is-full-page":!0},null,8,["active"]),SB(ws,{name:"fade"},{default:hE(()=>[g.value?(fB(),Ot(Am,{key:0,model:e.value,onDialogClosed:y},null,8,["model"])):ye("",!0)]),_:1}),xA("div",em,[Em,xA("ul",nm,[xA("li",Cm,[Di(xA("select",{"onUpdate:modelValue":m[0]||(m[0]=N=>B.value=N),class:"form-select"},[Im,(fB(!0),TB(sQ,null,VC(t.value,(N,AA)=>(fB(),TB("option",{key:AA,value:N.id},Wt(N.courseName),9,im))),128))],512),[[Hl,B.value]])])])]),xA("div",om,[(fB(!0),TB(sQ,null,VC(E.value,N=>(fB(),TB("div",sm,[xA("h2",{class:"accordion-header",id:N.name},[xA("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":`#collapse${N.name}`,"aria-expanded":"true","aria-controls":`collapse${N.name}`,disabled:N.events.length==0,ref_for:!0,ref_key:"accordion",ref:w},[N.events.length>0?(fB(),TB("span",cm,Wt(N.events.length),1)):ye("",!0),UC("  "+Wt(N.name),1)],8,wm)],8,am),xA("button",{type:"button",class:"btn btn-primart",onClick:F},"Check"),xA("div",{id:`collapse${N.name}`,class:"accordion-collapse collapse","aria-labelledby":N.name,"data-bs-parent":"#accordionExample"},[xA("div",lm,[xA("div",Fm,[xA("div",Dm,[xA("div",Um,[dm,xA("div",fm,[xA("div",Mm,[xA("div",um,[(fB(!0),TB(sQ,null,VC(N.events,AA=>(fB(),TB("div",{class:"vertical-timeline-item vertical-timeline-element",key:AA.id},[xA("div",{class:"vertical-timeline-element-content",onClick:v=>p(AA)},[xA("h6",Gm,Wt(AA.subjectName),1),xA("p",null,Wt(AA.endTime),1),xA("p",null,Wt(AA.locationCode),1),xA("span",Rm,Wt(AA.startTime),1)],8,hm)]))),128))])])])])])])])],8,rm)]))),256))]),B.value==0?(fB(),TB("div",Ym,Nm)):ye("",!0)],64))}},mm=ps(bm,[["__scopeId","data-v-606675ed"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=function(A){const B=[];let Q=0;for(let g=0;g<A.length;g++){let t=A.charCodeAt(g);t<128?B[Q++]=t:t<2048?(B[Q++]=t>>6|192,B[Q++]=t&63|128):(t&64512)===55296&&g+1<A.length&&(A.charCodeAt(g+1)&64512)===56320?(t=65536+((t&1023)<<10)+(A.charCodeAt(++g)&1023),B[Q++]=t>>18|240,B[Q++]=t>>12&63|128,B[Q++]=t>>6&63|128,B[Q++]=t&63|128):(B[Q++]=t>>12|224,B[Q++]=t>>6&63|128,B[Q++]=t&63|128)}return B},Jm=function(A){const B=[];let Q=0,g=0;for(;Q<A.length;){const t=A[Q++];if(t<128)B[g++]=String.fromCharCode(t);else if(t>191&&t<224){const e=A[Q++];B[g++]=String.fromCharCode((t&31)<<6|e&63)}else if(t>239&&t<365){const e=A[Q++],E=A[Q++],I=A[Q++],i=((t&7)<<18|(e&63)<<12|(E&63)<<6|I&63)-65536;B[g++]=String.fromCharCode(55296+(i>>10)),B[g++]=String.fromCharCode(56320+(i&1023))}else{const e=A[Q++],E=A[Q++];B[g++]=String.fromCharCode((t&15)<<12|(e&63)<<6|E&63)}}return B.join("")},V0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(A,B){if(!Array.isArray(A))throw Error("encodeByteArray takes an array as a parameter");this.init_();const Q=B?this.byteToCharMapWebSafe_:this.byteToCharMap_,g=[];for(let t=0;t<A.length;t+=3){const e=A[t],E=t+1<A.length,I=E?A[t+1]:0,i=t+2<A.length,a=i?A[t+2]:0,w=e>>2,F=(e&3)<<4|I>>4;let R=(I&15)<<2|a>>6,h=a&63;i||(h=64,E||(R=64)),g.push(Q[w],Q[F],Q[R],Q[h])}return g.join("")},encodeString(A,B){return this.HAS_NATIVE_SUPPORT&&!B?btoa(A):this.encodeByteArray(O0(A),B)},decodeString(A,B){return this.HAS_NATIVE_SUPPORT&&!B?atob(A):Jm(this.decodeStringToByteArray(A,B))},decodeStringToByteArray(A,B){this.init_();const Q=B?this.charToByteMapWebSafe_:this.charToByteMap_,g=[];for(let t=0;t<A.length;){const e=Q[A.charAt(t++)],I=t<A.length?Q[A.charAt(t)]:0;++t;const a=t<A.length?Q[A.charAt(t)]:64;++t;const F=t<A.length?Q[A.charAt(t)]:64;if(++t,e==null||I==null||a==null||F==null)throw new ym;const R=e<<2|I>>4;if(g.push(R),a!==64){const h=I<<4&240|a>>2;if(g.push(h),F!==64){const y=a<<6&192|F;g.push(y)}}}return g},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let A=0;A<this.ENCODED_VALS.length;A++)this.byteToCharMap_[A]=this.ENCODED_VALS.charAt(A),this.charToByteMap_[this.byteToCharMap_[A]]=A,this.byteToCharMapWebSafe_[A]=this.ENCODED_VALS_WEBSAFE.charAt(A),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[A]]=A,A>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(A)]=A,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(A)]=A)}}};class ym extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const km=function(A){const B=O0(A);return V0.encodeByteArray(B,!0)},x0=function(A){return km(A).replace(/\./g,"")},Zm=function(A){try{return V0.decodeString(A,!0)}catch(B){console.error("base64Decode failed: ",B)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=()=>Lm().__FIREBASE_DEFAULTS__,Sm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const A={}.__FIREBASE_DEFAULTS__;if(A)return JSON.parse(A)},Hm=()=>{if(typeof document>"u")return;let A;try{A=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const B=A&&Zm(A[1]);return B&&JSON.parse(B)},vm=()=>{try{return Xm()||Sm()||Hm()}catch(A){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${A}`);return}},z0=()=>{var A;return(A=vm())===null||A===void 0?void 0:A.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((B,Q)=>{this.resolve=B,this.reject=Q})}wrapCallback(B){return(Q,g)=>{Q?this.reject(Q):this.resolve(g),typeof B=="function"&&(this.promise.catch(()=>{}),B.length===1?B(Q):B(Q,g))}}}function K0(){try{return typeof indexedDB=="object"}catch{return!1}}function P0(){return new Promise((A,B)=>{try{let Q=!0;const g="validate-browser-context-for-indexeddb-analytics-module",t=self.indexedDB.open(g);t.onsuccess=()=>{t.result.close(),Q||self.indexedDB.deleteDatabase(g),A(!0)},t.onupgradeneeded=()=>{Q=!1},t.onerror=()=>{var e;B(((e=t.error)===null||e===void 0?void 0:e.message)||"")}}catch(Q){B(Q)}})}function Tm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="FirebaseError";class oI extends Error{constructor(B,Q,g){super(Q),this.code=B,this.customData=g,this.name=Om,Object.setPrototypeOf(this,oI.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bs.prototype.create)}}class bs{constructor(B,Q,g){this.service=B,this.serviceName=Q,this.errors=g}create(B,...Q){const g=Q[0]||{},t=`${this.service}/${B}`,e=this.errors[B],E=e?Vm(e,g):"Error",I=`${this.serviceName}: ${E} (${t}).`;return new oI(t,I,g)}}function Vm(A,B){return A.replace(xm,(Q,g)=>{const t=B[g];return t!=null?String(t):`<${g}?>`})}const xm=/\{\$([^}]+)}/g;function zr(A,B){if(A===B)return!0;const Q=Object.keys(A),g=Object.keys(B);for(const t of Q){if(!g.includes(t))return!1;const e=A[t],E=B[t];if(DU(e)&&DU(E)){if(!zr(e,E))return!1}else if(e!==E)return!1}for(const t of g)if(!Q.includes(t))return!1;return!0}function DU(A){return A!==null&&typeof A=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(A){return A&&A._delegate?A._delegate:A}class Un{constructor(B,Q,g){this.name=B,this.instanceFactory=Q,this.type=g,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(B){return this.instantiationMode=B,this}setMultipleInstances(B){return this.multipleInstances=B,this}setServiceProps(B){return this.serviceProps=B,this}setInstanceCreatedCallback(B){return this.onInstanceCreated=B,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(B,Q){this.name=B,this.container=Q,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(B){const Q=this.normalizeInstanceIdentifier(B);if(!this.instancesDeferred.has(Q)){const g=new Wm;if(this.instancesDeferred.set(Q,g),this.isInitialized(Q)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:Q});t&&g.resolve(t)}catch{}}return this.instancesDeferred.get(Q).promise}getImmediate(B){var Q;const g=this.normalizeInstanceIdentifier(B==null?void 0:B.identifier),t=(Q=B==null?void 0:B.optional)!==null&&Q!==void 0?Q:!1;if(this.isInitialized(g)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:g})}catch(e){if(t)return null;throw e}else{if(t)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(B){if(B.name!==this.name)throw Error(`Mismatching Component ${B.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=B,!!this.shouldAutoInitialize()){if(Pm(B))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[Q,g]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(Q);try{const e=this.getOrInitializeService({instanceIdentifier:t});g.resolve(e)}catch{}}}}clearInstance(B=qn){this.instancesDeferred.delete(B),this.instancesOptions.delete(B),this.instances.delete(B)}async delete(){const B=Array.from(this.instances.values());await Promise.all([...B.filter(Q=>"INTERNAL"in Q).map(Q=>Q.INTERNAL.delete()),...B.filter(Q=>"_delete"in Q).map(Q=>Q._delete())])}isComponentSet(){return this.component!=null}isInitialized(B=qn){return this.instances.has(B)}getOptions(B=qn){return this.instancesOptions.get(B)||{}}initialize(B={}){const{options:Q={}}=B,g=this.normalizeInstanceIdentifier(B.instanceIdentifier);if(this.isInitialized(g))throw Error(`${this.name}(${g}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const t=this.getOrInitializeService({instanceIdentifier:g,options:Q});for(const[e,E]of this.instancesDeferred.entries()){const I=this.normalizeInstanceIdentifier(e);g===I&&E.resolve(t)}return t}onInit(B,Q){var g;const t=this.normalizeInstanceIdentifier(Q),e=(g=this.onInitCallbacks.get(t))!==null&&g!==void 0?g:new Set;e.add(B),this.onInitCallbacks.set(t,e);const E=this.instances.get(t);return E&&B(E,t),()=>{e.delete(B)}}invokeOnInitCallbacks(B,Q){const g=this.onInitCallbacks.get(Q);if(g)for(const t of g)try{t(B,Q)}catch{}}getOrInitializeService({instanceIdentifier:B,options:Q={}}){let g=this.instances.get(B);if(!g&&this.component&&(g=this.component.instanceFactory(this.container,{instanceIdentifier:Km(B),options:Q}),this.instances.set(B,g),this.instancesOptions.set(B,Q),this.invokeOnInitCallbacks(g,B),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,B,g)}catch{}return g||null}normalizeInstanceIdentifier(B=qn){return this.component?this.component.multipleInstances?B:qn:B}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Km(A){return A===qn?void 0:A}function Pm(A){return A.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(B){this.name=B,this.providers=new Map}addComponent(B){const Q=this.getProvider(B.name);if(Q.isComponentSet())throw new Error(`Component ${B.name} has already been registered with ${this.name}`);Q.setComponent(B)}addOrOverwriteComponent(B){this.getProvider(B.name).isComponentSet()&&this.providers.delete(B.name),this.addComponent(B)}getProvider(B){if(this.providers.has(B))return this.providers.get(B);const Q=new zm(B,this);return this.providers.set(B,Q),Q}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var CQ;(function(A){A[A.DEBUG=0]="DEBUG",A[A.VERBOSE=1]="VERBOSE",A[A.INFO=2]="INFO",A[A.WARN=3]="WARN",A[A.ERROR=4]="ERROR",A[A.SILENT=5]="SILENT"})(CQ||(CQ={}));const qm={debug:CQ.DEBUG,verbose:CQ.VERBOSE,info:CQ.INFO,warn:CQ.WARN,error:CQ.ERROR,silent:CQ.SILENT},_m=CQ.INFO,$m={[CQ.DEBUG]:"log",[CQ.VERBOSE]:"log",[CQ.INFO]:"info",[CQ.WARN]:"warn",[CQ.ERROR]:"error"},A2=(A,B,...Q)=>{if(B<A.logLevel)return;const g=new Date().toISOString(),t=$m[B];if(t)console[t](`[${g}]  ${A.name}:`,...Q);else throw new Error(`Attempted to log a message with an invalid logType (value: ${B})`)};class B2{constructor(B){this.name=B,this._logLevel=_m,this._logHandler=A2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(B){if(!(B in CQ))throw new TypeError(`Invalid value "${B}" assigned to \`logLevel\``);this._logLevel=B}setLogLevel(B){this._logLevel=typeof B=="string"?qm[B]:B}get logHandler(){return this._logHandler}set logHandler(B){if(typeof B!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=B}get userLogHandler(){return this._userLogHandler}set userLogHandler(B){this._userLogHandler=B}debug(...B){this._userLogHandler&&this._userLogHandler(this,CQ.DEBUG,...B),this._logHandler(this,CQ.DEBUG,...B)}log(...B){this._userLogHandler&&this._userLogHandler(this,CQ.VERBOSE,...B),this._logHandler(this,CQ.VERBOSE,...B)}info(...B){this._userLogHandler&&this._userLogHandler(this,CQ.INFO,...B),this._logHandler(this,CQ.INFO,...B)}warn(...B){this._userLogHandler&&this._userLogHandler(this,CQ.WARN,...B),this._logHandler(this,CQ.WARN,...B)}error(...B){this._userLogHandler&&this._userLogHandler(this,CQ.ERROR,...B),this._logHandler(this,CQ.ERROR,...B)}}const Q2=(A,B)=>B.some(Q=>A instanceof Q);let UU,dU;function g2(){return UU||(UU=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function t2(){return dU||(dU=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q0=new WeakMap,Kr=new WeakMap,_0=new WeakMap,Ar=new WeakMap,_l=new WeakMap;function e2(A){const B=new Promise((Q,g)=>{const t=()=>{A.removeEventListener("success",e),A.removeEventListener("error",E)},e=()=>{Q(on(A.result)),t()},E=()=>{g(A.error),t()};A.addEventListener("success",e),A.addEventListener("error",E)});return B.then(Q=>{Q instanceof IDBCursor&&q0.set(Q,A)}).catch(()=>{}),_l.set(B,A),B}function E2(A){if(Kr.has(A))return;const B=new Promise((Q,g)=>{const t=()=>{A.removeEventListener("complete",e),A.removeEventListener("error",E),A.removeEventListener("abort",E)},e=()=>{Q(),t()},E=()=>{g(A.error||new DOMException("AbortError","AbortError")),t()};A.addEventListener("complete",e),A.addEventListener("error",E),A.addEventListener("abort",E)});Kr.set(A,B)}let Pr={get(A,B,Q){if(A instanceof IDBTransaction){if(B==="done")return Kr.get(A);if(B==="objectStoreNames")return A.objectStoreNames||_0.get(A);if(B==="store")return Q.objectStoreNames[1]?void 0:Q.objectStore(Q.objectStoreNames[0])}return on(A[B])},set(A,B,Q){return A[B]=Q,!0},has(A,B){return A instanceof IDBTransaction&&(B==="done"||B==="store")?!0:B in A}};function n2(A){Pr=A(Pr)}function C2(A){return A===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(B,...Q){const g=A.call(Br(this),B,...Q);return _0.set(g,B.sort?B.sort():[B]),on(g)}:t2().includes(A)?function(...B){return A.apply(Br(this),B),on(q0.get(this))}:function(...B){return on(A.apply(Br(this),B))}}function I2(A){return typeof A=="function"?C2(A):(A instanceof IDBTransaction&&E2(A),Q2(A,g2())?new Proxy(A,Pr):A)}function on(A){if(A instanceof IDBRequest)return e2(A);if(Ar.has(A))return Ar.get(A);const B=I2(A);return B!==A&&(Ar.set(A,B),_l.set(B,A)),B}const Br=A=>_l.get(A);function i2(A,B,{blocked:Q,upgrade:g,blocking:t,terminated:e}={}){const E=indexedDB.open(A,B),I=on(E);return g&&E.addEventListener("upgradeneeded",i=>{g(on(E.result),i.oldVersion,i.newVersion,on(E.transaction),i)}),Q&&E.addEventListener("blocked",i=>Q(i.oldVersion,i.newVersion,i)),I.then(i=>{e&&i.addEventListener("close",()=>e()),t&&i.addEventListener("versionchange",a=>t(a.oldVersion,a.newVersion,a))}).catch(()=>{}),I}const o2=["get","getKey","getAll","getAllKeys","count"],s2=["put","add","delete","clear"],Qr=new Map;function fU(A,B){if(!(A instanceof IDBDatabase&&!(B in A)&&typeof B=="string"))return;if(Qr.get(B))return Qr.get(B);const Q=B.replace(/FromIndex$/,""),g=B!==Q,t=s2.includes(Q);if(!(Q in(g?IDBIndex:IDBObjectStore).prototype)||!(t||o2.includes(Q)))return;const e=async function(E,...I){const i=this.transaction(E,t?"readwrite":"readonly");let a=i.store;return g&&(a=a.index(I.shift())),(await Promise.all([a[Q](...I),t&&i.done]))[0]};return Qr.set(B,e),e}n2(A=>({...A,get:(B,Q,g)=>fU(B,Q)||A.get(B,Q,g),has:(B,Q)=>!!fU(B,Q)||A.has(B,Q)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(B){this.container=B}getPlatformInfoString(){return this.container.getProviders().map(Q=>{if(w2(Q)){const g=Q.getImmediate();return`${g.library}/${g.version}`}else return null}).filter(Q=>Q).join(" ")}}function w2(A){const B=A.getComponent();return(B==null?void 0:B.type)==="VERSION"}const jr="@firebase/app",MU="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=new B2("@firebase/app"),c2="@firebase/app-compat",r2="@firebase/analytics-compat",l2="@firebase/analytics",F2="@firebase/app-check-compat",D2="@firebase/app-check",U2="@firebase/auth",d2="@firebase/auth-compat",f2="@firebase/database",M2="@firebase/database-compat",u2="@firebase/functions",h2="@firebase/functions-compat",G2="@firebase/installations",R2="@firebase/installations-compat",Y2="@firebase/messaging",p2="@firebase/messaging-compat",N2="@firebase/performance",b2="@firebase/performance-compat",m2="@firebase/remote-config",J2="@firebase/remote-config-compat",y2="@firebase/storage",k2="@firebase/storage-compat",Z2="@firebase/firestore",L2="@firebase/firestore-compat",X2="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="[DEFAULT]",S2={[jr]:"fire-core",[c2]:"fire-core-compat",[l2]:"fire-analytics",[r2]:"fire-analytics-compat",[D2]:"fire-app-check",[F2]:"fire-app-check-compat",[U2]:"fire-auth",[d2]:"fire-auth-compat",[f2]:"fire-rtdb",[M2]:"fire-rtdb-compat",[u2]:"fire-fn",[h2]:"fire-fn-compat",[G2]:"fire-iid",[R2]:"fire-iid-compat",[Y2]:"fire-fcm",[p2]:"fire-fcm-compat",[N2]:"fire-perf",[b2]:"fire-perf-compat",[m2]:"fire-rc",[J2]:"fire-rc-compat",[y2]:"fire-gcs",[k2]:"fire-gcs-compat",[Z2]:"fire-fst",[L2]:"fire-fst-compat","fire-js":"fire-js",[X2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map,_r=new Map;function H2(A,B){try{A.container.addComponent(B)}catch(Q){oC.debug(`Component ${B.name} failed to register with FirebaseApp ${A.name}`,Q)}}function sC(A){const B=A.name;if(_r.has(B))return oC.debug(`There were multiple attempts to register component ${B}.`),!1;_r.set(B,A);for(const Q of To.values())H2(Q,A);return!0}function $l(A,B){const Q=A.container.getProvider("heartbeat").getImmediate({optional:!0});return Q&&Q.triggerHeartbeat(),A.container.getProvider(B)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sn=new bs("app","Firebase",v2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(B,Q,g){this._isDeleted=!1,this._options=Object.assign({},B),this._config=Object.assign({},Q),this._name=Q.name,this._automaticDataCollectionEnabled=Q.automaticDataCollectionEnabled,this._container=g,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(B){this.checkDestroyed(),this._automaticDataCollectionEnabled=B}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(B){this._isDeleted=B}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}function $0(A,B={}){let Q=A;typeof B!="object"&&(B={name:B});const g=Object.assign({name:qr,automaticDataCollectionEnabled:!1},B),t=g.name;if(typeof t!="string"||!t)throw sn.create("bad-app-name",{appName:String(t)});if(Q||(Q=z0()),!Q)throw sn.create("no-options");const e=To.get(t);if(e){if(zr(Q,e.options)&&zr(g,e.config))return e;throw sn.create("duplicate-app",{appName:t})}const E=new jm(t);for(const i of _r.values())E.addComponent(i);const I=new W2(Q,g,E);return To.set(t,I),I}function T2(A=qr){const B=To.get(A);if(!B&&A===qr&&z0())return $0();if(!B)throw sn.create("no-app",{appName:A});return B}function an(A,B,Q){var g;let t=(g=S2[A])!==null&&g!==void 0?g:A;Q&&(t+=`-${Q}`);const e=t.match(/\s|\//),E=B.match(/\s|\//);if(e||E){const I=[`Unable to register library "${t}" with version "${B}":`];e&&I.push(`library name "${t}" contains illegal characters (whitespace or "/")`),e&&E&&I.push("and"),E&&I.push(`version name "${B}" contains illegal characters (whitespace or "/")`),oC.warn(I.join(" "));return}sC(new Un(`${t}-version`,()=>({library:t,version:B}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2="firebase-heartbeat-database",V2=1,ii="firebase-heartbeat-store";let gr=null;function AM(){return gr||(gr=i2(O2,V2,{upgrade:(A,B)=>{switch(B){case 0:A.createObjectStore(ii)}}}).catch(A=>{throw sn.create("idb-open",{originalErrorMessage:A.message})})),gr}async function x2(A){try{return await(await AM()).transaction(ii).objectStore(ii).get(BM(A))}catch(B){if(B instanceof oI)oC.warn(B.message);else{const Q=sn.create("idb-get",{originalErrorMessage:B==null?void 0:B.message});oC.warn(Q.message)}}}async function uU(A,B){try{const g=(await AM()).transaction(ii,"readwrite");await g.objectStore(ii).put(B,BM(A)),await g.done}catch(Q){if(Q instanceof oI)oC.warn(Q.message);else{const g=sn.create("idb-set",{originalErrorMessage:Q==null?void 0:Q.message});oC.warn(g.message)}}}function BM(A){return`${A.name}!${A.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=1024,K2=30*24*60*60*1e3;class P2{constructor(B){this.container=B,this._heartbeatsCache=null;const Q=this.container.getProvider("app").getImmediate();this._storage=new q2(Q),this._heartbeatsCachePromise=this._storage.read().then(g=>(this._heartbeatsCache=g,g))}async triggerHeartbeat(){const Q=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),g=hU();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===g||this._heartbeatsCache.heartbeats.some(t=>t.date===g)))return this._heartbeatsCache.heartbeats.push({date:g,agent:Q}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=K2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const B=hU(),{heartbeatsToSend:Q,unsentEntries:g}=j2(this._heartbeatsCache.heartbeats),t=x0(JSON.stringify({version:2,heartbeats:Q}));return this._heartbeatsCache.lastSentHeartbeatDate=B,g.length>0?(this._heartbeatsCache.heartbeats=g,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),t}}function hU(){return new Date().toISOString().substring(0,10)}function j2(A,B=z2){const Q=[];let g=A.slice();for(const t of A){const e=Q.find(E=>E.agent===t.agent);if(e){if(e.dates.push(t.date),GU(Q)>B){e.dates.pop();break}}else if(Q.push({agent:t.agent,dates:[t.date]}),GU(Q)>B){Q.pop();break}g=g.slice(1)}return{heartbeatsToSend:Q,unsentEntries:g}}class q2{constructor(B){this.app=B,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K0()?P0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await x2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(B){var Q;if(await this._canUseIndexedDBPromise){const t=await this.read();return uU(this.app,{lastSentHeartbeatDate:(Q=B.lastSentHeartbeatDate)!==null&&Q!==void 0?Q:t.lastSentHeartbeatDate,heartbeats:B.heartbeats})}else return}async add(B){var Q;if(await this._canUseIndexedDBPromise){const t=await this.read();return uU(this.app,{lastSentHeartbeatDate:(Q=B.lastSentHeartbeatDate)!==null&&Q!==void 0?Q:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...B.heartbeats]})}else return}}function GU(A){return x0(JSON.stringify({version:2,heartbeats:A})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(A){sC(new Un("platform-logger",B=>new a2(B),"PRIVATE")),sC(new Un("heartbeat",B=>new P2(B),"PRIVATE")),an(jr,MU,A),an(jr,MU,"esm2017"),an("fire-js","")}_2("");const $2=(A,B)=>B.some(Q=>A instanceof Q);let RU,YU;function AJ(){return RU||(RU=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BJ(){return YU||(YU=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const QM=new WeakMap,$r=new WeakMap,gM=new WeakMap,tr=new WeakMap,AF=new WeakMap;function QJ(A){const B=new Promise((Q,g)=>{const t=()=>{A.removeEventListener("success",e),A.removeEventListener("error",E)},e=()=>{Q(wn(A.result)),t()},E=()=>{g(A.error),t()};A.addEventListener("success",e),A.addEventListener("error",E)});return B.then(Q=>{Q instanceof IDBCursor&&QM.set(Q,A)}).catch(()=>{}),AF.set(B,A),B}function gJ(A){if($r.has(A))return;const B=new Promise((Q,g)=>{const t=()=>{A.removeEventListener("complete",e),A.removeEventListener("error",E),A.removeEventListener("abort",E)},e=()=>{Q(),t()},E=()=>{g(A.error||new DOMException("AbortError","AbortError")),t()};A.addEventListener("complete",e),A.addEventListener("error",E),A.addEventListener("abort",E)});$r.set(A,B)}let Al={get(A,B,Q){if(A instanceof IDBTransaction){if(B==="done")return $r.get(A);if(B==="objectStoreNames")return A.objectStoreNames||gM.get(A);if(B==="store")return Q.objectStoreNames[1]?void 0:Q.objectStore(Q.objectStoreNames[0])}return wn(A[B])},set(A,B,Q){return A[B]=Q,!0},has(A,B){return A instanceof IDBTransaction&&(B==="done"||B==="store")?!0:B in A}};function tJ(A){Al=A(Al)}function eJ(A){return A===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(B,...Q){const g=A.call(er(this),B,...Q);return gM.set(g,B.sort?B.sort():[B]),wn(g)}:BJ().includes(A)?function(...B){return A.apply(er(this),B),wn(QM.get(this))}:function(...B){return wn(A.apply(er(this),B))}}function EJ(A){return typeof A=="function"?eJ(A):(A instanceof IDBTransaction&&gJ(A),$2(A,AJ())?new Proxy(A,Al):A)}function wn(A){if(A instanceof IDBRequest)return QJ(A);if(tr.has(A))return tr.get(A);const B=EJ(A);return B!==A&&(tr.set(A,B),AF.set(B,A)),B}const er=A=>AF.get(A);function nJ(A,B,{blocked:Q,upgrade:g,blocking:t,terminated:e}={}){const E=indexedDB.open(A,B),I=wn(E);return g&&E.addEventListener("upgradeneeded",i=>{g(wn(E.result),i.oldVersion,i.newVersion,wn(E.transaction))}),Q&&E.addEventListener("blocked",()=>Q()),I.then(i=>{e&&i.addEventListener("close",()=>e()),t&&i.addEventListener("versionchange",()=>t())}).catch(()=>{}),I}const CJ=["get","getKey","getAll","getAllKeys","count"],IJ=["put","add","delete","clear"],Er=new Map;function pU(A,B){if(!(A instanceof IDBDatabase&&!(B in A)&&typeof B=="string"))return;if(Er.get(B))return Er.get(B);const Q=B.replace(/FromIndex$/,""),g=B!==Q,t=IJ.includes(Q);if(!(Q in(g?IDBIndex:IDBObjectStore).prototype)||!(t||CJ.includes(Q)))return;const e=async function(E,...I){const i=this.transaction(E,t?"readwrite":"readonly");let a=i.store;return g&&(a=a.index(I.shift())),(await Promise.all([a[Q](...I),t&&i.done]))[0]};return Er.set(B,e),e}tJ(A=>({...A,get:(B,Q,g)=>pU(B,Q)||A.get(B,Q,g),has:(B,Q)=>!!pU(B,Q)||A.has(B,Q)}));const tM="@firebase/installations",BF="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=1e4,EM=`w:${BF}`,nM="FIS_v2",iJ="https://firebaseinstallations.googleapis.com/v1",oJ=60*60*1e3,sJ="installations",aJ="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wJ={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},aC=new bs(sJ,aJ,wJ);function CM(A){return A instanceof oI&&A.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM({projectId:A}){return`${iJ}/projects/${A}/installations`}function iM(A){return{token:A.token,requestStatus:2,expiresIn:rJ(A.expiresIn),creationTime:Date.now()}}async function oM(A,B){const g=(await B.json()).error;return aC.create("request-failed",{requestName:A,serverCode:g.code,serverMessage:g.message,serverStatus:g.status})}function sM({apiKey:A}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":A})}function cJ(A,{refreshToken:B}){const Q=sM(A);return Q.append("Authorization",lJ(B)),Q}async function aM(A){const B=await A();return B.status>=500&&B.status<600?A():B}function rJ(A){return Number(A.replace("s","000"))}function lJ(A){return`${nM} ${A}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FJ({appConfig:A,heartbeatServiceProvider:B},{fid:Q}){const g=IM(A),t=sM(A),e=B.getImmediate({optional:!0});if(e){const a=await e.getHeartbeatsHeader();a&&t.append("x-firebase-client",a)}const E={fid:Q,authVersion:nM,appId:A.appId,sdkVersion:EM},I={method:"POST",headers:t,body:JSON.stringify(E)},i=await aM(()=>fetch(g,I));if(i.ok){const a=await i.json();return{fid:a.fid||Q,registrationStatus:2,refreshToken:a.refreshToken,authToken:iM(a.authToken)}}else throw await oM("Create Installation",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wM(A){return new Promise(B=>{setTimeout(B,A)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DJ(A){return btoa(String.fromCharCode(...A)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UJ=/^[cdef][\w-]{21}$/,Bl="";function dJ(){try{const A=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(A),A[0]=112+A[0]%16;const Q=fJ(A);return UJ.test(Q)?Q:Bl}catch{return Bl}}function fJ(A){return DJ(A).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(A){return`${A.appName}!${A.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=new Map;function rM(A,B){const Q=ms(A);lM(Q,B),MJ(Q,B)}function lM(A,B){const Q=cM.get(A);if(Q)for(const g of Q)g(B)}function MJ(A,B){const Q=uJ();Q&&Q.postMessage({key:A,fid:B}),hJ()}let QC=null;function uJ(){return!QC&&"BroadcastChannel"in self&&(QC=new BroadcastChannel("[Firebase] FID Change"),QC.onmessage=A=>{lM(A.data.key,A.data.fid)}),QC}function hJ(){cM.size===0&&QC&&(QC.close(),QC=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GJ="firebase-installations-database",RJ=1,wC="firebase-installations-store";let nr=null;function QF(){return nr||(nr=nJ(GJ,RJ,{upgrade:(A,B)=>{switch(B){case 0:A.createObjectStore(wC)}}})),nr}async function Oo(A,B){const Q=ms(A),t=(await QF()).transaction(wC,"readwrite"),e=t.objectStore(wC),E=await e.get(Q);return await e.put(B,Q),await t.done,(!E||E.fid!==B.fid)&&rM(A,B.fid),B}async function FM(A){const B=ms(A),g=(await QF()).transaction(wC,"readwrite");await g.objectStore(wC).delete(B),await g.done}async function Js(A,B){const Q=ms(A),t=(await QF()).transaction(wC,"readwrite"),e=t.objectStore(wC),E=await e.get(Q),I=B(E);return I===void 0?await e.delete(Q):await e.put(I,Q),await t.done,I&&(!E||E.fid!==I.fid)&&rM(A,I.fid),I}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gF(A){let B;const Q=await Js(A.appConfig,g=>{const t=YJ(g),e=pJ(A,t);return B=e.registrationPromise,e.installationEntry});return Q.fid===Bl?{installationEntry:await B}:{installationEntry:Q,registrationPromise:B}}function YJ(A){const B=A||{fid:dJ(),registrationStatus:0};return DM(B)}function pJ(A,B){if(B.registrationStatus===0){if(!navigator.onLine){const t=Promise.reject(aC.create("app-offline"));return{installationEntry:B,registrationPromise:t}}const Q={fid:B.fid,registrationStatus:1,registrationTime:Date.now()},g=NJ(A,Q);return{installationEntry:Q,registrationPromise:g}}else return B.registrationStatus===1?{installationEntry:B,registrationPromise:bJ(A)}:{installationEntry:B}}async function NJ(A,B){try{const Q=await FJ(A,B);return Oo(A.appConfig,Q)}catch(Q){throw CM(Q)&&Q.customData.serverCode===409?await FM(A.appConfig):await Oo(A.appConfig,{fid:B.fid,registrationStatus:0}),Q}}async function bJ(A){let B=await NU(A.appConfig);for(;B.registrationStatus===1;)await wM(100),B=await NU(A.appConfig);if(B.registrationStatus===0){const{installationEntry:Q,registrationPromise:g}=await gF(A);return g||Q}return B}function NU(A){return Js(A,B=>{if(!B)throw aC.create("installation-not-found");return DM(B)})}function DM(A){return mJ(A)?{fid:A.fid,registrationStatus:0}:A}function mJ(A){return A.registrationStatus===1&&A.registrationTime+eM<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JJ({appConfig:A,heartbeatServiceProvider:B},Q){const g=yJ(A,Q),t=cJ(A,Q),e=B.getImmediate({optional:!0});if(e){const a=await e.getHeartbeatsHeader();a&&t.append("x-firebase-client",a)}const E={installation:{sdkVersion:EM,appId:A.appId}},I={method:"POST",headers:t,body:JSON.stringify(E)},i=await aM(()=>fetch(g,I));if(i.ok){const a=await i.json();return iM(a)}else throw await oM("Generate Auth Token",i)}function yJ(A,{fid:B}){return`${IM(A)}/${B}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tF(A,B=!1){let Q;const g=await Js(A.appConfig,e=>{if(!UM(e))throw aC.create("not-registered");const E=e.authToken;if(!B&&LJ(E))return e;if(E.requestStatus===1)return Q=kJ(A,B),e;{if(!navigator.onLine)throw aC.create("app-offline");const I=SJ(e);return Q=ZJ(A,I),I}});return Q?await Q:g.authToken}async function kJ(A,B){let Q=await bU(A.appConfig);for(;Q.authToken.requestStatus===1;)await wM(100),Q=await bU(A.appConfig);const g=Q.authToken;return g.requestStatus===0?tF(A,B):g}function bU(A){return Js(A,B=>{if(!UM(B))throw aC.create("not-registered");const Q=B.authToken;return HJ(Q)?Object.assign(Object.assign({},B),{authToken:{requestStatus:0}}):B})}async function ZJ(A,B){try{const Q=await JJ(A,B),g=Object.assign(Object.assign({},B),{authToken:Q});return await Oo(A.appConfig,g),Q}catch(Q){if(CM(Q)&&(Q.customData.serverCode===401||Q.customData.serverCode===404))await FM(A.appConfig);else{const g=Object.assign(Object.assign({},B),{authToken:{requestStatus:0}});await Oo(A.appConfig,g)}throw Q}}function UM(A){return A!==void 0&&A.registrationStatus===2}function LJ(A){return A.requestStatus===2&&!XJ(A)}function XJ(A){const B=Date.now();return B<A.creationTime||A.creationTime+A.expiresIn<B+oJ}function SJ(A){const B={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},A),{authToken:B})}function HJ(A){return A.requestStatus===1&&A.requestTime+eM<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vJ(A){const B=A,{installationEntry:Q,registrationPromise:g}=await gF(B);return g?g.catch(console.error):tF(B).catch(console.error),Q.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WJ(A,B=!1){const Q=A;return await TJ(Q),(await tF(Q,B)).token}async function TJ(A){const{registrationPromise:B}=await gF(A);B&&await B}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OJ(A){if(!A||!A.options)throw Cr("App Configuration");if(!A.name)throw Cr("App Name");const B=["projectId","apiKey","appId"];for(const Q of B)if(!A.options[Q])throw Cr(Q);return{appName:A.name,projectId:A.options.projectId,apiKey:A.options.apiKey,appId:A.options.appId}}function Cr(A){return aC.create("missing-app-config-values",{valueName:A})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM="installations",VJ="installations-internal",xJ=A=>{const B=A.getProvider("app").getImmediate(),Q=OJ(B),g=$l(B,"heartbeat");return{app:B,appConfig:Q,heartbeatServiceProvider:g,_delete:()=>Promise.resolve()}},zJ=A=>{const B=A.getProvider("app").getImmediate(),Q=$l(B,dM).getImmediate();return{getId:()=>vJ(Q),getToken:t=>WJ(Q,t)}};function KJ(){sC(new Un(dM,xJ,"PUBLIC")),sC(new Un(VJ,zJ,"PRIVATE"))}KJ();an(tM,BF);an(tM,BF,"esm2017");const PJ=(A,B)=>B.some(Q=>A instanceof Q);let mU,JU;function jJ(){return mU||(mU=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qJ(){return JU||(JU=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fM=new WeakMap,Ql=new WeakMap,MM=new WeakMap,Ir=new WeakMap,eF=new WeakMap;function _J(A){const B=new Promise((Q,g)=>{const t=()=>{A.removeEventListener("success",e),A.removeEventListener("error",E)},e=()=>{Q(fE(A.result)),t()},E=()=>{g(A.error),t()};A.addEventListener("success",e),A.addEventListener("error",E)});return B.then(Q=>{Q instanceof IDBCursor&&fM.set(Q,A)}).catch(()=>{}),eF.set(B,A),B}function $J(A){if(Ql.has(A))return;const B=new Promise((Q,g)=>{const t=()=>{A.removeEventListener("complete",e),A.removeEventListener("error",E),A.removeEventListener("abort",E)},e=()=>{Q(),t()},E=()=>{g(A.error||new DOMException("AbortError","AbortError")),t()};A.addEventListener("complete",e),A.addEventListener("error",E),A.addEventListener("abort",E)});Ql.set(A,B)}let gl={get(A,B,Q){if(A instanceof IDBTransaction){if(B==="done")return Ql.get(A);if(B==="objectStoreNames")return A.objectStoreNames||MM.get(A);if(B==="store")return Q.objectStoreNames[1]?void 0:Q.objectStore(Q.objectStoreNames[0])}return fE(A[B])},set(A,B,Q){return A[B]=Q,!0},has(A,B){return A instanceof IDBTransaction&&(B==="done"||B==="store")?!0:B in A}};function Ay(A){gl=A(gl)}function By(A){return A===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(B,...Q){const g=A.call(ir(this),B,...Q);return MM.set(g,B.sort?B.sort():[B]),fE(g)}:qJ().includes(A)?function(...B){return A.apply(ir(this),B),fE(fM.get(this))}:function(...B){return fE(A.apply(ir(this),B))}}function Qy(A){return typeof A=="function"?By(A):(A instanceof IDBTransaction&&$J(A),PJ(A,jJ())?new Proxy(A,gl):A)}function fE(A){if(A instanceof IDBRequest)return _J(A);if(Ir.has(A))return Ir.get(A);const B=Qy(A);return B!==A&&(Ir.set(A,B),eF.set(B,A)),B}const ir=A=>eF.get(A);function uM(A,B,{blocked:Q,upgrade:g,blocking:t,terminated:e}={}){const E=indexedDB.open(A,B),I=fE(E);return g&&E.addEventListener("upgradeneeded",i=>{g(fE(E.result),i.oldVersion,i.newVersion,fE(E.transaction))}),Q&&E.addEventListener("blocked",()=>Q()),I.then(i=>{e&&i.addEventListener("close",()=>e()),t&&i.addEventListener("versionchange",()=>t())}).catch(()=>{}),I}function or(A,{blocked:B}={}){const Q=indexedDB.deleteDatabase(A);return B&&Q.addEventListener("blocked",()=>B()),fE(Q).then(()=>{})}const gy=["get","getKey","getAll","getAllKeys","count"],ty=["put","add","delete","clear"],sr=new Map;function yU(A,B){if(!(A instanceof IDBDatabase&&!(B in A)&&typeof B=="string"))return;if(sr.get(B))return sr.get(B);const Q=B.replace(/FromIndex$/,""),g=B!==Q,t=ty.includes(Q);if(!(Q in(g?IDBIndex:IDBObjectStore).prototype)||!(t||gy.includes(Q)))return;const e=async function(E,...I){const i=this.transaction(E,t?"readwrite":"readonly");let a=i.store;return g&&(a=a.index(I.shift())),(await Promise.all([a[Q](...I),t&&i.done]))[0]};return sr.set(B,e),e}Ay(A=>({...A,get:(B,Q,g)=>yU(B,Q)||A.get(B,Q,g),has:(B,Q)=>!!yU(B,Q)||A.has(B,Q)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="/firebase-messaging-sw.js",Ey="/firebase-cloud-messaging-push-scope",hM="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ny="https://fcmregistrations.googleapis.com/v1",GM="google.c.a.c_id",Cy="google.c.a.c_l",Iy="google.c.a.ts",iy="google.c.a.e";var kU;(function(A){A[A.DATA_MESSAGE=1]="DATA_MESSAGE",A[A.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(kU||(kU={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var oi;(function(A){A.PUSH_RECEIVED="push-received",A.NOTIFICATION_CLICKED="notification-clicked"})(oi||(oi={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(A){const B=new Uint8Array(A);return btoa(String.fromCharCode(...B)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function oy(A){const B="=".repeat((4-A.length%4)%4),Q=(A+B).replace(/\-/g,"+").replace(/_/g,"/"),g=atob(Q),t=new Uint8Array(g.length);for(let e=0;e<g.length;++e)t[e]=g.charCodeAt(e);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="fcm_token_details_db",sy=5,ZU="fcm_token_object_Store";async function ay(A){if("databases"in indexedDB&&!(await indexedDB.databases()).map(e=>e.name).includes(ar))return null;let B=null;return(await uM(ar,sy,{upgrade:async(g,t,e,E)=>{var I;if(t<2||!g.objectStoreNames.contains(ZU))return;const i=E.objectStore(ZU),a=await i.index("fcmSenderId").get(A);if(await i.clear(),!!a){if(t===2){const w=a;if(!w.auth||!w.p256dh||!w.endpoint)return;B={token:w.fcmToken,createTime:(I=w.createTime)!==null&&I!==void 0?I:Date.now(),subscriptionOptions:{auth:w.auth,p256dh:w.p256dh,endpoint:w.endpoint,swScope:w.swScope,vapidKey:typeof w.vapidKey=="string"?w.vapidKey:cE(w.vapidKey)}}}else if(t===3){const w=a;B={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:cE(w.auth),p256dh:cE(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:cE(w.vapidKey)}}}else if(t===4){const w=a;B={token:w.fcmToken,createTime:w.createTime,subscriptionOptions:{auth:cE(w.auth),p256dh:cE(w.p256dh),endpoint:w.endpoint,swScope:w.swScope,vapidKey:cE(w.vapidKey)}}}}}})).close(),await or(ar),await or("fcm_vapid_details_db"),await or("undefined"),wy(B)?B:null}function wy(A){if(!A||!A.subscriptionOptions)return!1;const{subscriptionOptions:B}=A;return typeof A.createTime=="number"&&A.createTime>0&&typeof A.token=="string"&&A.token.length>0&&typeof B.auth=="string"&&B.auth.length>0&&typeof B.p256dh=="string"&&B.p256dh.length>0&&typeof B.endpoint=="string"&&B.endpoint.length>0&&typeof B.swScope=="string"&&B.swScope.length>0&&typeof B.vapidKey=="string"&&B.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="firebase-messaging-database",ry=1,cC="firebase-messaging-store";let wr=null;function EF(){return wr||(wr=uM(cy,ry,{upgrade:(A,B)=>{switch(B){case 0:A.createObjectStore(cC)}}})),wr}async function RM(A){const B=CF(A),g=await(await EF()).transaction(cC).objectStore(cC).get(B);if(g)return g;{const t=await ay(A.appConfig.senderId);if(t)return await nF(A,t),t}}async function nF(A,B){const Q=CF(A),t=(await EF()).transaction(cC,"readwrite");return await t.objectStore(cC).put(B,Q),await t.done,B}async function ly(A){const B=CF(A),g=(await EF()).transaction(cC,"readwrite");await g.objectStore(cC).delete(B),await g.done}function CF({appConfig:A}){return A.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Jg=new bs("messaging","Messaging",Fy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dy(A,B){const Q=await iF(A),g=pM(B),t={method:"POST",headers:Q,body:JSON.stringify(g)};let e;try{e=await(await fetch(IF(A.appConfig),t)).json()}catch(E){throw Jg.create("token-subscribe-failed",{errorInfo:E==null?void 0:E.toString()})}if(e.error){const E=e.error.message;throw Jg.create("token-subscribe-failed",{errorInfo:E})}if(!e.token)throw Jg.create("token-subscribe-no-token");return e.token}async function Uy(A,B){const Q=await iF(A),g=pM(B.subscriptionOptions),t={method:"PATCH",headers:Q,body:JSON.stringify(g)};let e;try{e=await(await fetch(`${IF(A.appConfig)}/${B.token}`,t)).json()}catch(E){throw Jg.create("token-update-failed",{errorInfo:E==null?void 0:E.toString()})}if(e.error){const E=e.error.message;throw Jg.create("token-update-failed",{errorInfo:E})}if(!e.token)throw Jg.create("token-update-no-token");return e.token}async function YM(A,B){const g={method:"DELETE",headers:await iF(A)};try{const e=await(await fetch(`${IF(A.appConfig)}/${B}`,g)).json();if(e.error){const E=e.error.message;throw Jg.create("token-unsubscribe-failed",{errorInfo:E})}}catch(t){throw Jg.create("token-unsubscribe-failed",{errorInfo:t==null?void 0:t.toString()})}}function IF({projectId:A}){return`${ny}/projects/${A}/registrations`}async function iF({appConfig:A,installations:B}){const Q=await B.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":A.apiKey,"x-goog-firebase-installations-auth":`FIS ${Q}`})}function pM({p256dh:A,auth:B,endpoint:Q,vapidKey:g}){const t={web:{endpoint:Q,auth:B,p256dh:A}};return g!==hM&&(t.web.applicationPubKey=g),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=7*24*60*60*1e3;async function fy(A){const B=await hy(A.swRegistration,A.vapidKey),Q={vapidKey:A.vapidKey,swScope:A.swRegistration.scope,endpoint:B.endpoint,auth:cE(B.getKey("auth")),p256dh:cE(B.getKey("p256dh"))},g=await RM(A.firebaseDependencies);if(g){if(Gy(g.subscriptionOptions,Q))return Date.now()>=g.createTime+dy?uy(A,{token:g.token,createTime:Date.now(),subscriptionOptions:Q}):g.token;try{await YM(A.firebaseDependencies,g.token)}catch(t){console.warn(t)}return LU(A.firebaseDependencies,Q)}else return LU(A.firebaseDependencies,Q)}async function My(A){const B=await RM(A.firebaseDependencies);B&&(await YM(A.firebaseDependencies,B.token),await ly(A.firebaseDependencies));const Q=await A.swRegistration.pushManager.getSubscription();return Q?Q.unsubscribe():!0}async function uy(A,B){try{const Q=await Uy(A.firebaseDependencies,B),g=Object.assign(Object.assign({},B),{token:Q,createTime:Date.now()});return await nF(A.firebaseDependencies,g),Q}catch(Q){throw await My(A),Q}}async function LU(A,B){const g={token:await Dy(A,B),createTime:Date.now(),subscriptionOptions:B};return await nF(A,g),g.token}async function hy(A,B){const Q=await A.pushManager.getSubscription();return Q||A.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:oy(B)})}function Gy(A,B){const Q=B.vapidKey===A.vapidKey,g=B.endpoint===A.endpoint,t=B.auth===A.auth,e=B.p256dh===A.p256dh;return Q&&g&&t&&e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XU(A){const B={from:A.from,collapseKey:A.collapse_key,messageId:A.fcmMessageId};return Ry(B,A),Yy(B,A),py(B,A),B}function Ry(A,B){if(!B.notification)return;A.notification={};const Q=B.notification.title;Q&&(A.notification.title=Q);const g=B.notification.body;g&&(A.notification.body=g);const t=B.notification.image;t&&(A.notification.image=t);const e=B.notification.icon;e&&(A.notification.icon=e)}function Yy(A,B){B.data&&(A.data=B.data)}function py(A,B){var Q,g,t,e,E;if(!B.fcmOptions&&!(!((Q=B.notification)===null||Q===void 0)&&Q.click_action))return;A.fcmOptions={};const I=(t=(g=B.fcmOptions)===null||g===void 0?void 0:g.link)!==null&&t!==void 0?t:(e=B.notification)===null||e===void 0?void 0:e.click_action;I&&(A.fcmOptions.link=I);const i=(E=B.fcmOptions)===null||E===void 0?void 0:E.analytics_label;i&&(A.fcmOptions.analyticsLabel=i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(A){return typeof A=="object"&&!!A&&GM in A}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */NM("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");NM("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function NM(A,B){const Q=[];for(let g=0;g<A.length;g++)Q.push(A.charAt(g)),g<B.length&&Q.push(B.charAt(g));return Q.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(A){if(!A||!A.options)throw cr("App Configuration Object");if(!A.name)throw cr("App Name");const B=["projectId","apiKey","appId","messagingSenderId"],{options:Q}=A;for(const g of B)if(!Q[g])throw cr(g);return{appName:A.name,projectId:Q.projectId,apiKey:Q.apiKey,appId:Q.appId,senderId:Q.messagingSenderId}}function cr(A){return Jg.create("missing-app-config-values",{valueName:A})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(B,Q,g){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const t=by(B);this.firebaseDependencies={app:B,appConfig:t,installations:Q,analyticsProvider:g}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(A){try{A.swRegistration=await navigator.serviceWorker.register(ey,{scope:Ey}),A.swRegistration.update().catch(()=>{})}catch(B){throw Jg.create("failed-service-worker-registration",{browserErrorMessage:B==null?void 0:B.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy(A,B){if(!B&&!A.swRegistration&&await Jy(A),!(!B&&A.swRegistration)){if(!(B instanceof ServiceWorkerRegistration))throw Jg.create("invalid-sw-registration");A.swRegistration=B}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ky(A,B){B?A.vapidKey=B:A.vapidKey||(A.vapidKey=hM)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bM(A,B){if(!navigator)throw Jg.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Jg.create("permission-blocked");return await ky(A,B==null?void 0:B.vapidKey),await yy(A,B==null?void 0:B.serviceWorkerRegistration),fy(A)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zy(A,B,Q){const g=Ly(B);(await A.firebaseDependencies.analyticsProvider.get()).logEvent(g,{message_id:Q[GM],message_name:Q[Cy],message_time:Q[Iy],message_device_time:Math.floor(Date.now()/1e3)})}function Ly(A){switch(A){case oi.NOTIFICATION_CLICKED:return"notification_open";case oi.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(A,B){const Q=B.data;if(!Q.isFirebaseMessaging)return;A.onMessageHandler&&Q.messageType===oi.PUSH_RECEIVED&&(typeof A.onMessageHandler=="function"?A.onMessageHandler(XU(Q)):A.onMessageHandler.next(XU(Q)));const g=Q.data;Ny(g)&&g[iy]==="1"&&await Zy(A,Q.messageType,g)}const SU="@firebase/messaging",HU="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=A=>{const B=new my(A.getProvider("app").getImmediate(),A.getProvider("installations-internal").getImmediate(),A.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",Q=>Xy(B,Q)),B},Hy=A=>{const B=A.getProvider("messaging").getImmediate();return{getToken:g=>bM(B,g)}};function vy(){sC(new Un("messaging",Sy,"PUBLIC")),sC(new Un("messaging-internal",Hy,"PRIVATE")),an(SU,HU),an(SU,HU,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(){try{await P0()}catch{return!1}return typeof window<"u"&&K0()&&Tm()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(A=T2()){return Wy().then(B=>{if(!B)throw Jg.create("unsupported-browser")},B=>{throw Jg.create("indexed-db-unsupported")}),$l(j0(A),"messaging").getImmediate()}async function Oy(A,B){return A=j0(A),bM(A,B)}vy();const mM=A=>(ri("data-v-a0c3bd93"),A=A(),li(),A),Vy={class:"container pt-5"},xy={class:"row text-center justify-content-center"},zy={class:"col-12 col-md-6 col-xl-5"},Ky={class:"card border-0 rounded-4"},Py={class:"card-body p-3 p-md-4 p-xl-5"},jy=mM(()=>xA("div",{class:"row"},[xA("div",{class:"col-12"},[xA("div",{class:"mb-4"},[xA("h3",null,"My Timetable")])])],-1)),qy={class:"row gy-3 overflow-hidden"},_y={class:"col-12"},$y={class:"form-floating mb-1"},Ak=["disabled"],Bk=mM(()=>xA("label",{for:"email",class:"form-label"},"Email",-1)),Qk={class:"col-12"},gk={class:"d-grid"},tk=["disabled"],ek={key:0},Ek={key:1,class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"},nk={__name:"LoginPage",setup(A){const B=zB(""),Q=zB(!1),g=Ys(),t=n0(),e=D0();async function E(){let I=null;try{Q.value=!0;const i=Ty();await Oy(i,{vapidKey:"BAybJDScOTCYPQAVYCSnqkVbpiAyQyJALWxe23NRHzRbofv5qDql2p1rxwrxuTpcqngTiCO9o5HToxhWGWdmFcg"}).then(async a=>{console.log("currentToken:"+a),t.info("Firebase Token received ! Notifications Enabled !"),I=a}).catch(a=>{})}catch{}finally{Q.value=!1}try{Q.value=!0,await g.authenticate({email:B.value,token:I}),g.getUser!=null&&t.success("login successful")}catch(i){Ii.fire({icon:"error",text:i.message})}finally{Q.value=!1}I||t.warning("No tokens available. Notifications not enabled"),e.push("/timetable")}return He(()=>{g.getUser!=null&&e.push("/timetable")}),(I,i)=>(fB(),TB("div",Vy,[xA("div",xy,[xA("div",zy,[xA("div",Ky,[xA("div",Py,[jy,xA("div",qy,[xA("div",_y,[xA("div",$y,[Di(xA("input",{type:"email",class:"form-control",name:"email",id:"email","onUpdate:modelValue":i[0]||(i[0]=a=>B.value=a),disabled:Q.value},null,8,Ak),[[ti,B.value]]),Bk])]),xA("div",Qk,[xA("div",gk,[xA("button",{class:"btn btn-primary btn-lg",onClick:E,disabled:Q.value},[Q.value?ye("",!0):(fB(),TB("span",ek,"Log in")),Q.value?(fB(),TB("span",Ek)):ye("",!0)],8,tk)])])])])])])])]))}},Ck=ps(nk,[["__scopeId","data-v-a0c3bd93"]]),JM=new FN({history:yp(),routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:Ck},{path:"/timetable",name:"Timetable",component:mm}]});JM.beforeEach(A=>{const B=Ys();if(A.fullPath!="/login"&&!B.getUser)return"/login"});var yM=(A,B,Q)=>{if(!B.has(A))throw TypeError("Cannot "+Q)},Ik=(A,B,Q)=>(yM(A,B,"read from private field"),Q?Q.call(A):B.get(A)),ik=(A,B,Q)=>{if(B.has(A))throw TypeError("Cannot add the same private member more than once");B instanceof WeakSet?B.add(A):B.set(A,Q)},ok=(A,B,Q,g)=>(yM(A,B,"write to private field"),g?g.call(A,Q):B.set(A,Q),Q);const vU=["aztec","code_128","code_39","code_93","codabar","data_matrix","ean_13","ean_8","itf","pdf417","qr_code","upc_a","upc_e","unknown"];function sk(A){if(kM(A))return{width:A.naturalWidth,height:A.naturalHeight};if(ZM(A))return{width:A.width.baseVal.value,height:A.height.baseVal.value};if(LM(A))return{width:A.videoWidth,height:A.videoHeight};if(ak(A))return{width:A.width,height:A.height};if(XM(A))return{width:A.width,height:A.height};if(wk(A))return{width:A.width,height:A.height};if(SM(A))return{width:A.displayWidth,height:A.displayHeight};throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.")}function kM(A){try{return A instanceof HTMLImageElement}catch{return!1}}function ZM(A){try{return A instanceof SVGImageElement}catch{return!1}}function LM(A){try{return A instanceof HTMLVideoElement}catch{return!1}}function ak(A){try{return A instanceof HTMLCanvasElement}catch{return!1}}function XM(A){try{return A instanceof ImageBitmap}catch{return!1}}function wk(A){try{return A instanceof OffscreenCanvas}catch{return!1}}function SM(A){try{return A instanceof VideoFrame}catch{return!1}}function ck(A){try{return A instanceof Blob}catch{return!1}}function rk(A){try{return A instanceof ImageData}catch{return!1}}function lk(A,B){try{const Q=new OffscreenCanvas(A,B);if(Q.getContext("2d")instanceof OffscreenCanvasRenderingContext2D)return Q;throw void 0}catch{const g=document.createElement("canvas");return g.width=A,g.height=B,g}}async function HM(A){if(kM(A)&&!await Uk(A))throw new DOMException("Failed to load or decode HTMLImageElement.","InvalidStateError");if(ZM(A)&&!await dk(A))throw new DOMException("Failed to load or decode SVGImageElement.","InvalidStateError");if(SM(A)&&fk(A))throw new DOMException("VideoFrame is closed.","InvalidStateError");if(LM(A)&&(A.readyState===0||A.readyState===1))throw new DOMException("Invalid element or state.","InvalidStateError");if(XM(A)&&uk(A))throw new DOMException("The image source is detached.","InvalidStateError");const{width:B,height:Q}=sk(A);if(B===0||Q===0)return null;const g=lk(B,Q).getContext("2d");g.drawImage(A,0,0);try{return g.getImageData(0,0,B,Q)}catch{throw new DOMException("Source would taint origin.","SecurityError")}}async function Fk(A){let B;try{B=await createImageBitmap(A)}catch{throw new DOMException("Failed to load or decode Blob.","InvalidStateError")}return await HM(B)}async function Dk(A){if(ck(A))return await Fk(A);if(rk(A)){if(Mk(A))throw new DOMException("The image data has been detached.","InvalidStateError");return A}return await HM(A)}async function Uk(A){try{return await A.decode(),!0}catch{return!1}}async function dk(A){var B;try{return await((B=A.decode)==null?void 0:B.call(A)),!0}catch{return!1}}function fk(A){return A.format===null}function Mk(A){return A.data.buffer.byteLength===0}function uk(A){return A.width===0&&A.height===0}function WU(A,B){return A instanceof DOMException?new DOMException(`${B}: ${A.message}`,A.name):A instanceof Error?new A.constructor(`${B}: ${A.message}`):new Error(`${B}: ${A}`)}const TU=A=>{let B;const Q=new Set,g=(E,I)=>{const i=typeof E=="function"?E(B):E;if(!Object.is(i,B)){const a=B;B=I??typeof i!="object"?i:Object.assign({},B,i),Q.forEach(w=>w(B,a))}},t=()=>B,e={setState:g,getState:t,subscribe:E=>(Q.add(E),()=>Q.delete(E)),destroy:()=>{Q.clear()}};return B=A(g,t,e),e},hk=A=>A?TU(A):TU,Gk={locateFile:(A,B)=>{var Q;const g=(Q=A.match(/_(.+?)\.wasm$/))==null?void 0:Q[1];return g?`https://cdn.jsdelivr.net/npm/@sec-ant/zxing-wasm@2.1.3/dist/${g}/${A}`:B+A}},ZI=hk()(()=>({zxingModuleWeakMap:new WeakMap,zxingModuleOverrides:Gk}));function vM(A,B=ZI.getState().zxingModuleOverrides){const{zxingModuleWeakMap:Q}=ZI.getState(),g=Q.get(A);if(g&&Object.is(B,ZI.getState().zxingModuleOverrides))return g;{ZI.setState({zxingModuleOverrides:B});const t=A(B);return Q.set(A,t),t}}const OU=["Aztec","Codabar","Code128","Code39","Code93","DataBar","DataBarExpanded","DataMatrix","EAN-13","EAN-8","ITF","Linear-Codes","Matrix-Codes","MaxiCode","MicroQRCode","None","PDF417","QRCode","UPC-A","UPC-E"],En={tryHarder:!0,formats:[],maxSymbols:255};async function Rk(A,{tryHarder:B=En.tryHarder,formats:Q=En.formats,maxSymbols:g=En.maxSymbols}=En,t){const e=await vM(t,ZI.getState().zxingModuleOverrides),{data:E,width:I,height:i,data:{byteLength:a}}=A,w=e._malloc(a);e.HEAP8.set(E,w);const F=e.readBarcodesFromPixmap(w,I,i,B,Yk(Q),g);e._free(w);const R=[];for(let h=0;h<F.size();++h){const y=F.get(h);R.push({...y,format:pk(y.format)})}return R}function Yk(A){return A.join("|")}function pk(A){const B=VU(A);let Q=0,g=OU.length-1;for(;Q<=g;){const t=Math.floor((Q+g)/2),e=OU[t],E=VU(e);if(E===B)return e;E<B?Q=t+1:g=t-1}return"None"}function VU(A){return A.toLowerCase().replace(/_-\[\]/g,"")}var WM=(()=>{var A=import.meta.url;return function(B={}){var Q=B,g,t;Q.ready=new Promise((c,r)=>{g=c,t=r});var e=Object.assign({},Q),E="./this.program",I=typeof window=="object",i=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var a="";function w(c){return Q.locateFile?Q.locateFile(c,a):a+c}var F;(I||i)&&(i?a=self.location.href:typeof document<"u"&&document.currentScript&&(a=document.currentScript.src),A&&(a=A),a.indexOf("blob:")!==0?a=a.substr(0,a.replace(/[?#].*/,"").lastIndexOf("/")+1):a="",i&&(F=c=>{var r=new XMLHttpRequest;return r.open("GET",c,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)})),Q.print||console.log.bind(console);var R=Q.printErr||console.error.bind(console);Object.assign(Q,e),e=null,Q.arguments&&Q.arguments,Q.thisProgram&&(E=Q.thisProgram),Q.quit&&Q.quit;var h;Q.wasmBinary&&(h=Q.wasmBinary),Q.noExitRuntime,typeof WebAssembly!="object"&&GB("no native wasm support detected");var y,p,M=!1,m,N,AA,v,x,iA,cA,j;function $(){var c=y.buffer;Q.HEAP8=m=new Int8Array(c),Q.HEAP16=AA=new Int16Array(c),Q.HEAP32=x=new Int32Array(c),Q.HEAPU8=N=new Uint8Array(c),Q.HEAPU16=v=new Uint16Array(c),Q.HEAPU32=iA=new Uint32Array(c),Q.HEAPF32=cA=new Float32Array(c),Q.HEAPF64=j=new Float64Array(c)}var sA,DA=[],lA=[],yA=[];function uA(){if(Q.preRun)for(typeof Q.preRun=="function"&&(Q.preRun=[Q.preRun]);Q.preRun.length;)HA(Q.preRun.shift());H(DA)}function EB(){H(lA)}function XA(){if(Q.postRun)for(typeof Q.postRun=="function"&&(Q.postRun=[Q.postRun]);Q.postRun.length;)MB(Q.postRun.shift());H(yA)}function HA(c){DA.unshift(c)}function gB(c){lA.unshift(c)}function MB(c){yA.unshift(c)}var wB=0,uB=null;function RB(c){wB++,Q.monitorRunDependencies&&Q.monitorRunDependencies(wB)}function HB(c){if(wB--,Q.monitorRunDependencies&&Q.monitorRunDependencies(wB),wB==0&&uB){var r=uB;uB=null,r()}}function GB(c){Q.onAbort&&Q.onAbort(c),c="Aborted("+c+")",R(c),M=!0,c+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(c);throw t(r),r}var UB="data:application/octet-stream;base64,";function mA(c){return c.startsWith(UB)}var z;Q.locateFile?(z="zxing_reader.wasm",mA(z)||(z=w(z))):z=new URL("/reader/zxing_reader.wasm",self.location).href;function ZA(c){if(c==z&&h)return new Uint8Array(h);if(F)return F(c);throw"both async and sync fetching of the wasm failed"}function IA(c){return!h&&(I||i)&&typeof fetch=="function"?fetch(c,{credentials:"same-origin"}).then(r=>{if(!r.ok)throw"failed to load wasm binary file at '"+c+"'";return r.arrayBuffer()}).catch(()=>ZA(c)):Promise.resolve().then(()=>ZA(c))}function bA(c,r,u){return IA(c).then(J=>WebAssembly.instantiate(J,r)).then(J=>J).then(u,J=>{R("failed to asynchronously prepare wasm: "+J),GB(J)})}function EA(c,r,u,J){return!c&&typeof WebAssembly.instantiateStreaming=="function"&&!mA(r)&&typeof fetch=="function"?fetch(r,{credentials:"same-origin"}).then(O=>{var V=WebAssembly.instantiateStreaming(O,u);return V.then(J,function(tA){return R("wasm streaming compile failed: "+tA),R("falling back to ArrayBuffer instantiation"),bA(r,u,J)})}):bA(r,u,J)}function L(){var c={a:yn};function r(J,O){var V=J.exports;return p=V,y=p.qa,$(),sA=p.ua,gB(p.ra),HB(),V}RB();function u(J){r(J.instance)}if(Q.instantiateWasm)try{return Q.instantiateWasm(c,r)}catch(J){R("Module.instantiateWasm callback failed with error: "+J),t(J)}return EA(h,z,c,u).catch(t),{}}var H=c=>{for(;c.length>0;)c.shift()(Q)},K=[],nA=0;function rA(c){var r=new MA(c);return r.get_caught()||(r.set_caught(!0),nA--),r.set_rethrown(!1),K.push(r),GQ(r.excPtr),r.get_exception_ptr()}var aA=0;function oA(){sB(0,0);var c=K.pop();FQ(c.excPtr),aA=0}function MA(c){this.excPtr=c,this.ptr=c-24,this.set_type=function(r){iA[this.ptr+4>>2]=r},this.get_type=function(){return iA[this.ptr+4>>2]},this.set_destructor=function(r){iA[this.ptr+8>>2]=r},this.get_destructor=function(){return iA[this.ptr+8>>2]},this.set_caught=function(r){r=r?1:0,m[this.ptr+12>>0]=r},this.get_caught=function(){return m[this.ptr+12>>0]!=0},this.set_rethrown=function(r){r=r?1:0,m[this.ptr+13>>0]=r},this.get_rethrown=function(){return m[this.ptr+13>>0]!=0},this.init=function(r,u){this.set_adjusted_ptr(0),this.set_type(r),this.set_destructor(u)},this.set_adjusted_ptr=function(r){iA[this.ptr+16>>2]=r},this.get_adjusted_ptr=function(){return iA[this.ptr+16>>2]},this.get_exception_ptr=function(){var r=pg(this.get_type());if(r)return iA[this.excPtr>>2];var u=this.get_adjusted_ptr();return u!==0?u:this.excPtr}}function CA(c){throw aA||(aA=c),aA}var QA=c=>{var r=aA;if(!r)return YQ(0),0;var u=new MA(r);u.set_adjusted_ptr(r);var J=u.get_type();if(!J)return YQ(0),r;for(var O in c){var V=c[O];if(V===0||V===J)break;var tA=u.ptr+16;if(_B(V,J,tA))return YQ(V),r}return YQ(J),r},YA=()=>QA([]),SA=c=>QA([c]),TA=(c,r)=>QA([c,r]);function KA(c){var r=new MA(c).get_exception_ptr();return r}function VA(){var c=K.pop();c||GB("no exception to throw");var r=c.excPtr;throw c.get_rethrown()||(K.push(c),c.set_rethrown(!0),c.set_caught(!1),nA++),aA=r,aA}function lB(c,r,u){var J=new MA(c);throw J.init(r,u),aA=c,nA++,aA}function k(){return nA}var U={};function d(c){for(;c.length;){var r=c.pop(),u=c.pop();u(r)}}function G(c){return this.fromWireType(x[c>>2])}var b={},q={},dA={},wA=void 0;function pA(c){throw new wA(c)}function GA(c,r,u){c.forEach(function(P){dA[P]=r});function J(P){var FA=u(P);FA.length!==c.length&&pA("Mismatched type converter count");for(var NA=0;NA<c.length;++NA)PB(c[NA],FA[NA])}var O=new Array(r.length),V=[],tA=0;r.forEach((P,FA)=>{q.hasOwnProperty(P)?O[FA]=q[P]:(V.push(P),b.hasOwnProperty(P)||(b[P]=[]),b[P].push(()=>{O[FA]=q[P],++tA,tA===V.length&&J(O)}))}),V.length===0&&J(O)}var qA=function(c){var r=U[c];delete U[c];var u=r.rawConstructor,J=r.rawDestructor,O=r.fields,V=O.map(tA=>tA.getterReturnType).concat(O.map(tA=>tA.setterArgumentType));GA([c],V,tA=>{var P={};return O.forEach((FA,NA)=>{var zA=FA.fieldName,$A=tA[NA],nB=FA.getter,YB=FA.getterContext,JB=tA[NA+O.length],$B=FA.setter,C=FA.setterContext;P[zA]={read:s=>$A.fromWireType(nB(YB,s)),write:(s,l)=>{var Y=[];$B(C,s,JB.toWireType(Y,l)),d(Y)}}}),[{name:r.name,fromWireType:function(FA){var NA={};for(var zA in P)NA[zA]=P[zA].read(FA);return J(FA),NA},toWireType:function(FA,NA){for(var zA in P)if(!(zA in NA))throw new TypeError(`Missing field: "${zA}"`);var $A=u();for(zA in P)P[zA].write($A,NA[zA]);return FA!==null&&FA.push(J,$A),$A},argPackAdvance:8,readValueFromPointer:G,destructorFunction:J}]})};function AB(c,r,u,J,O){}function CB(c){switch(c){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${c}`)}}function gA(){for(var c=new Array(256),r=0;r<256;++r)c[r]=String.fromCharCode(r);BB=c}var BB=void 0;function _(c){for(var r="",u=c;N[u];)r+=BB[N[u++]];return r}var QB=void 0;function LA(c){throw new QB(c)}function vB(c,r,u={}){var J=r.name;if(c||LA(`type "${J}" must have a positive integer typeid pointer`),q.hasOwnProperty(c)){if(u.ignoreDuplicateRegistrations)return;LA(`Cannot register type '${J}' twice`)}if(q[c]=r,delete dA[c],b.hasOwnProperty(c)){var O=b[c];delete b[c],O.forEach(V=>V())}}function PB(c,r,u={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return vB(c,r,u)}function lg(c,r,u,J,O){var V=CB(u);r=_(r),PB(c,{name:r,fromWireType:function(tA){return!!tA},toWireType:function(tA,P){return P?J:O},argPackAdvance:8,readValueFromPointer:function(tA){var P;if(u===1)P=m;else if(u===2)P=AA;else if(u===4)P=x;else throw new TypeError("Unknown boolean type size: "+r);return this.fromWireType(P[tA>>V])},destructorFunction:null})}function BQ(c){if(!(this instanceof Eg)||!(c instanceof Eg))return!1;for(var r=this.$$.ptrType.registeredClass,u=this.$$.ptr,J=c.$$.ptrType.registeredClass,O=c.$$.ptr;r.baseClass;)u=r.upcast(u),r=r.baseClass;for(;J.baseClass;)O=J.upcast(O),J=J.baseClass;return r===J&&u===O}function eg(c){return{count:c.count,deleteScheduled:c.deleteScheduled,preservePointerOnDelete:c.preservePointerOnDelete,ptr:c.ptr,ptrType:c.ptrType,smartPtr:c.smartPtr,smartPtrType:c.smartPtrType}}function RQ(c){function r(u){return u.$$.ptrType.registeredClass.name}LA(r(c)+" instance already deleted")}var MQ=!1;function $g(c){}function ZB(c){c.smartPtr?c.smartPtrType.rawDestructor(c.smartPtr):c.ptrType.registeredClass.rawDestructor(c.ptr)}function IQ(c){c.count.value-=1;var r=c.count.value===0;r&&ZB(c)}function Lg(c,r,u){if(r===u)return c;if(u.baseClass===void 0)return null;var J=Lg(c,r,u.baseClass);return J===null?null:u.downcast(J)}var xQ={};function uQ(){return Object.keys(pQ).length}function Fg(){var c=[];for(var r in pQ)pQ.hasOwnProperty(r)&&c.push(pQ[r]);return c}var QQ=[];function hQ(){for(;QQ.length;){var c=QQ.pop();c.$$.deleteScheduled=!1,c.delete()}}var Dg=void 0;function RE(c){Dg=c,QQ.length&&Dg&&Dg(hQ)}function ae(){Q.getInheritedInstanceCount=uQ,Q.getLiveInheritedInstances=Fg,Q.flushPendingDeletes=hQ,Q.setDelayFunction=RE}var pQ={};function hn(c,r){for(r===void 0&&LA("ptr should not be undefined");c.baseClass;)r=c.upcast(r),c=c.baseClass;return r}function At(c,r){return r=hn(c,r),pQ[r]}function Xg(c,r){(!r.ptrType||!r.ptr)&&pA("makeClassHandle requires ptr and ptrType");var u=!!r.smartPtrType,J=!!r.smartPtr;return u!==J&&pA("Both smartPtrType and smartPtr must be specified"),r.count={value:1},Bt(Object.create(c,{$$:{value:r}}))}function vQ(c){var r=this.getPointee(c);if(!r)return this.destructor(c),null;var u=At(this.registeredClass,r);if(u!==void 0){if(u.$$.count.value===0)return u.$$.ptr=r,u.$$.smartPtr=c,u.clone();var J=u.clone();return this.destructor(c),J}function O(){return this.isSmartPointer?Xg(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:r,smartPtrType:this,smartPtr:c}):Xg(this.registeredClass.instancePrototype,{ptrType:this,ptr:c})}var V=this.registeredClass.getActualType(r),tA=xQ[V];if(!tA)return O.call(this);var P;this.isConst?P=tA.constPointerType:P=tA.pointerType;var FA=Lg(r,this.registeredClass,P.registeredClass);return FA===null?O.call(this):this.isSmartPointer?Xg(P.registeredClass.instancePrototype,{ptrType:P,ptr:FA,smartPtrType:this,smartPtr:c}):Xg(P.registeredClass.instancePrototype,{ptrType:P,ptr:FA})}var Bt=function(c){return typeof FinalizationRegistry>"u"?(Bt=r=>r,c):(MQ=new FinalizationRegistry(r=>{IQ(r.$$)}),Bt=r=>{var u=r.$$,J=!!u.smartPtr;if(J){var O={$$:u};MQ.register(r,O,r)}return r},$g=r=>MQ.unregister(r),Bt(c))};function Ug(){if(this.$$.ptr||RQ(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var c=Bt(Object.create(Object.getPrototypeOf(this),{$$:{value:eg(this.$$)}}));return c.$$.count.value+=1,c.$$.deleteScheduled=!1,c}function jB(){this.$$.ptr||RQ(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&LA("Object already scheduled for deletion"),$g(this),IQ(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Gn(){return!this.$$.ptr}function Qt(){return this.$$.ptr||RQ(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&LA("Object already scheduled for deletion"),QQ.push(this),QQ.length===1&&Dg&&Dg(hQ),this.$$.deleteScheduled=!0,this}function ZQ(){Eg.prototype.isAliasOf=BQ,Eg.prototype.clone=Ug,Eg.prototype.delete=jB,Eg.prototype.isDeleted=Gn,Eg.prototype.deleteLater=Qt}function Eg(){}var YE=48,wQ=57;function Oe(c){if(c===void 0)return"_unknown";c=c.replace(/[^a-zA-Z0-9_]/g,"$");var r=c.charCodeAt(0);return r>=YE&&r<=wQ?`_${c}`:c}function zQ(c,r){return c=Oe(c),{[c]:function(){return r.apply(this,arguments)}}[c]}function KQ(c,r,u){if(c[r].overloadTable===void 0){var J=c[r];c[r]=function(){return c[r].overloadTable.hasOwnProperty(arguments.length)||LA(`Function '${u}' called with an invalid number of arguments (${arguments.length}) - expects one of (${c[r].overloadTable})!`),c[r].overloadTable[arguments.length].apply(this,arguments)},c[r].overloadTable=[],c[r].overloadTable[J.argCount]=J}}function PQ(c,r,u){Q.hasOwnProperty(c)?((u===void 0||Q[c].overloadTable!==void 0&&Q[c].overloadTable[u]!==void 0)&&LA(`Cannot register public name '${c}' twice`),KQ(Q,c,c),Q.hasOwnProperty(u)&&LA(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),Q[c].overloadTable[u]=r):(Q[c]=r,u!==void 0&&(Q[c].numArguments=u))}function Sg(c,r,u,J,O,V,tA,P){this.name=c,this.constructor=r,this.instancePrototype=u,this.rawDestructor=J,this.baseClass=O,this.getActualType=V,this.upcast=tA,this.downcast=P,this.pureVirtualFunctions=[]}function ng(c,r,u){for(;r!==u;)r.upcast||LA(`Expected null or instance of ${u.name}, got an instance of ${r.name}`),c=r.upcast(c),r=r.baseClass;return c}function dg(c,r){if(r===null)return this.isReference&&LA(`null is not a valid ${this.name}`),0;r.$$||LA(`Cannot pass "${Ig(r)}" as a ${this.name}`),r.$$.ptr||LA(`Cannot pass deleted object as a pointer of type ${this.name}`);var u=r.$$.ptrType.registeredClass,J=ng(r.$$.ptr,u,this.registeredClass);return J}function gt(c,r){var u;if(r===null)return this.isReference&&LA(`null is not a valid ${this.name}`),this.isSmartPointer?(u=this.rawConstructor(),c!==null&&c.push(this.rawDestructor,u),u):0;r.$$||LA(`Cannot pass "${Ig(r)}" as a ${this.name}`),r.$$.ptr||LA(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&r.$$.ptrType.isConst&&LA(`Cannot convert argument of type ${r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name} to parameter type ${this.name}`);var J=r.$$.ptrType.registeredClass;if(u=ng(r.$$.ptr,J,this.registeredClass),this.isSmartPointer)switch(r.$$.smartPtr===void 0&&LA("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:r.$$.smartPtrType===this?u=r.$$.smartPtr:LA(`Cannot convert argument of type ${r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:u=r.$$.smartPtr;break;case 2:if(r.$$.smartPtrType===this)u=r.$$.smartPtr;else{var O=r.clone();u=this.rawShare(u,mQ.toHandle(function(){O.delete()})),c!==null&&c.push(this.rawDestructor,u)}break;default:LA("Unsupporting sharing policy")}return u}function pE(c,r){if(r===null)return this.isReference&&LA(`null is not a valid ${this.name}`),0;r.$$||LA(`Cannot pass "${Ig(r)}" as a ${this.name}`),r.$$.ptr||LA(`Cannot pass deleted object as a pointer of type ${this.name}`),r.$$.ptrType.isConst&&LA(`Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`);var u=r.$$.ptrType.registeredClass,J=ng(r.$$.ptr,u,this.registeredClass);return J}function NQ(c){return this.rawGetPointee&&(c=this.rawGetPointee(c)),c}function Hg(c){this.rawDestructor&&this.rawDestructor(c)}function fg(c){c!==null&&c.delete()}function Mg(){jQ.prototype.getPointee=NQ,jQ.prototype.destructor=Hg,jQ.prototype.argPackAdvance=8,jQ.prototype.readValueFromPointer=G,jQ.prototype.deleteObject=fg,jQ.prototype.fromWireType=vQ}function jQ(c,r,u,J,O,V,tA,P,FA,NA,zA){this.name=c,this.registeredClass=r,this.isReference=u,this.isConst=J,this.isSmartPointer=O,this.pointeeType=V,this.sharingPolicy=tA,this.rawGetPointee=P,this.rawConstructor=FA,this.rawShare=NA,this.rawDestructor=zA,!O&&r.baseClass===void 0?J?(this.toWireType=dg,this.destructorFunction=null):(this.toWireType=pE,this.destructorFunction=null):this.toWireType=gt}function we(c,r,u){Q.hasOwnProperty(c)||pA("Replacing nonexistant public symbol"),Q[c].overloadTable!==void 0&&u!==void 0?Q[c].overloadTable[u]=r:(Q[c]=r,Q[c].argCount=u)}var Rn=(c,r,u)=>{var J=Q["dynCall_"+c];return u&&u.length?J.apply(null,[r].concat(u)):J.call(null,r)},ug=[],oB=c=>{var r=ug[c];return r||(c>=ug.length&&(ug.length=c+1),ug[c]=r=sA.get(c)),r},Yn=(c,r,u)=>{if(c.includes("j"))return Rn(c,r,u);var J=oB(r).apply(null,u);return J},zt=(c,r)=>{var u=[];return function(){return u.length=0,Object.assign(u,arguments),Yn(c,r,u)}};function cQ(c,r){c=_(c);function u(){return c.includes("j")?zt(c,r):oB(r)}var J=u();return typeof J!="function"&&LA(`unknown function pointer with signature ${c}: ${r}`),J}function ce(c,r){var u=zQ(r,function(J){this.name=r,this.message=J;var O=new Error(J).stack;O!==void 0&&(this.stack=this.toString()+`
`+O.replace(/^Error(:[^\n]*)?\n/,""))});return u.prototype=Object.create(c.prototype),u.prototype.constructor=u,u.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},u}var NE=void 0;function LQ(c){var r=Ag(c),u=_(r);return $Q(r),u}function tt(c,r){var u=[],J={};function O(V){if(!J[V]&&!q[V]){if(dA[V]){dA[V].forEach(O);return}u.push(V),J[V]=!0}}throw r.forEach(O),new NE(`${c}: `+u.map(LQ).join([", "]))}function re(c,r,u,J,O,V,tA,P,FA,NA,zA,$A,nB){zA=_(zA),V=cQ(O,V),P&&(P=cQ(tA,P)),NA&&(NA=cQ(FA,NA)),nB=cQ($A,nB);var YB=Oe(zA);PQ(YB,function(){tt(`Cannot construct ${zA} due to unbound types`,[J])}),GA([c,r,u],J?[J]:[],function(JB){JB=JB[0];var $B,C;J?($B=JB.registeredClass,C=$B.instancePrototype):C=Eg.prototype;var s=zQ(YB,function(){if(Object.getPrototypeOf(this)!==l)throw new QB("Use 'new' to construct "+zA);if(Y.constructor_body===void 0)throw new QB(zA+" has no accessible constructor");var LB=Y.constructor_body[arguments.length];if(LB===void 0)throw new QB(`Tried to invoke ctor of ${zA} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(Y.constructor_body).toString()}) parameters instead!`);return LB.apply(this,arguments)}),l=Object.create(C,{constructor:{value:s}});s.prototype=l;var Y=new Sg(zA,s,l,nB,$B,V,P,NA);Y.baseClass&&(Y.baseClass.__derivedClasses===void 0&&(Y.baseClass.__derivedClasses=[]),Y.baseClass.__derivedClasses.push(Y));var eA=new jQ(zA,Y,!0,!1,!1),vA=new jQ(zA+"*",Y,!1,!1,!1),iB=new jQ(zA+" const*",Y,!1,!0,!1);return xQ[c]={pointerType:vA,constPointerType:iB},we(YB,s),[eA,vA,iB]})}function bQ(c,r){for(var u=[],J=0;J<c;J++)u.push(iA[r+J*4>>2]);return u}function iQ(c,r,u,J,O,V){var tA=r.length;tA<2&&LA("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var P=r[1]!==null&&u!==null,FA=!1,NA=1;NA<r.length;++NA)if(r[NA]!==null&&r[NA].destructorFunction===void 0){FA=!0;break}var zA=r[0].name!=="void",$A=tA-2,nB=new Array($A),YB=[],JB=[];return function(){arguments.length!==$A&&LA(`function ${c} called with ${arguments.length} arguments, expected ${$A} args!`),JB.length=0;var $B;YB.length=P?2:1,YB[0]=O,P&&($B=r[1].toWireType(JB,this),YB[1]=$B);for(var C=0;C<$A;++C)nB[C]=r[C+2].toWireType(JB,arguments[C]),YB.push(nB[C]);var s=J.apply(null,YB);function l(Y){if(FA)d(JB);else for(var eA=P?1:2;eA<r.length;eA++){var vA=eA===1?$B:nB[eA-2];r[eA].destructorFunction!==null&&r[eA].destructorFunction(vA)}if(zA)return r[0].fromWireType(Y)}return l(s)}}function Cg(c,r,u,J,O,V){var tA=bQ(r,u);O=cQ(J,O),GA([],[c],function(P){P=P[0];var FA=`constructor ${P.name}`;if(P.registeredClass.constructor_body===void 0&&(P.registeredClass.constructor_body=[]),P.registeredClass.constructor_body[r-1]!==void 0)throw new QB(`Cannot register multiple constructors with identical number of parameters (${r-1}) for class '${P.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return P.registeredClass.constructor_body[r-1]=()=>{tt(`Cannot construct ${P.name} due to unbound types`,tA)},GA([],tA,function(NA){return NA.splice(1,0,null),P.registeredClass.constructor_body[r-1]=iQ(FA,NA,null,O,V),[]}),[]})}function Kt(c,r,u,J,O,V,tA,P,FA){var NA=bQ(u,J);r=_(r),V=cQ(O,V),GA([],[c],function(zA){zA=zA[0];var $A=`${zA.name}.${r}`;r.startsWith("@@")&&(r=Symbol[r.substring(2)]),P&&zA.registeredClass.pureVirtualFunctions.push(r);function nB(){tt(`Cannot call ${$A} due to unbound types`,NA)}var YB=zA.registeredClass.instancePrototype,JB=YB[r];return JB===void 0||JB.overloadTable===void 0&&JB.className!==zA.name&&JB.argCount===u-2?(nB.argCount=u-2,nB.className=zA.name,YB[r]=nB):(KQ(YB,r,$A),YB[r].overloadTable[u-2]=nB),GA([],NA,function($B){var C=iQ($A,$B,zA,V,tA);return YB[r].overloadTable===void 0?(C.argCount=u-2,YB[r]=C):YB[r].overloadTable[u-2]=C,[]}),[]})}function le(){Object.assign(vg.prototype,{get(c){return this.allocated[c]},has(c){return this.allocated[c]!==void 0},allocate(c){var r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=c,r},free(c){this.allocated[c]=void 0,this.freelist.push(c)}})}function vg(){this.allocated=[void 0],this.freelist=[]}var gQ=new vg;function Pt(c){c>=gQ.reserved&&--gQ.get(c).refcount===0&&gQ.free(c)}function hg(){for(var c=0,r=gQ.reserved;r<gQ.allocated.length;++r)gQ.allocated[r]!==void 0&&++c;return c}function et(){gQ.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),gQ.reserved=gQ.allocated.length,Q.count_emval_handles=hg}var mQ={toValue:c=>(c||LA("Cannot use deleted val. handle = "+c),gQ.get(c).value),toHandle:c=>{switch(c){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return gQ.allocate({refcount:1,value:c})}}};function Fe(c,r){r=_(r),PB(c,{name:r,fromWireType:function(u){var J=mQ.toValue(u);return Pt(u),J},toWireType:function(u,J){return mQ.toHandle(J)},argPackAdvance:8,readValueFromPointer:G,destructorFunction:null})}function Ig(c){if(c===null)return"null";var r=typeof c;return r==="object"||r==="array"||r==="function"?c.toString():""+c}function De(c,r){switch(r){case 2:return function(u){return this.fromWireType(cA[u>>2])};case 3:return function(u){return this.fromWireType(j[u>>3])};default:throw new TypeError("Unknown float type: "+c)}}function Ve(c,r,u){var J=CB(u);r=_(r),PB(c,{name:r,fromWireType:function(O){return O},toWireType:function(O,V){return V},argPackAdvance:8,readValueFromPointer:De(r,J),destructorFunction:null})}function Ue(c,r,u,J,O,V,tA){var P=bQ(r,u);c=_(c),O=cQ(J,O),PQ(c,function(){tt(`Cannot call ${c} due to unbound types`,P)},r-1),GA([],P,function(FA){var NA=[FA[0],null].concat(FA.slice(1));return we(c,iQ(c,NA,null,O,V),r-1),[]})}function pn(c,r,u){switch(r){case 0:return u?function(J){return m[J]}:function(J){return N[J]};case 1:return u?function(J){return AA[J>>1]}:function(J){return v[J>>1]};case 2:return u?function(J){return x[J>>2]}:function(J){return iA[J>>2]};default:throw new TypeError("Unknown integer type: "+c)}}function qQ(c,r,u,J,O){r=_(r);var V=CB(u),tA=$A=>$A;if(J===0){var P=32-8*u;tA=$A=>$A<<P>>>P}var FA=r.includes("unsigned"),NA=($A,nB)=>{},zA;FA?zA=function($A,nB){return NA(nB,this.name),nB>>>0}:zA=function($A,nB){return NA(nB,this.name),nB},PB(c,{name:r,fromWireType:tA,toWireType:zA,argPackAdvance:8,readValueFromPointer:pn(r,V,J!==0),destructorFunction:null})}function bE(c,r,u){var J=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],O=J[r];function V(tA){tA=tA>>2;var P=iA,FA=P[tA],NA=P[tA+1];return new O(P.buffer,NA,FA)}u=_(u),PB(c,{name:u,fromWireType:V,argPackAdvance:8,readValueFromPointer:V},{ignoreDuplicateRegistrations:!0})}var Wg=(c,r,u,J)=>{if(!(J>0))return 0;for(var O=u,V=u+J-1,tA=0;tA<c.length;++tA){var P=c.charCodeAt(tA);if(P>=55296&&P<=57343){var FA=c.charCodeAt(++tA);P=65536+((P&1023)<<10)|FA&1023}if(P<=127){if(u>=V)break;r[u++]=P}else if(P<=2047){if(u+1>=V)break;r[u++]=192|P>>6,r[u++]=128|P&63}else if(P<=65535){if(u+2>=V)break;r[u++]=224|P>>12,r[u++]=128|P>>6&63,r[u++]=128|P&63}else{if(u+3>=V)break;r[u++]=240|P>>18,r[u++]=128|P>>12&63,r[u++]=128|P>>6&63,r[u++]=128|P&63}}return r[u]=0,u-O},Et=(c,r,u)=>Wg(c,N,r,u),xe=c=>{for(var r=0,u=0;u<c.length;++u){var J=c.charCodeAt(u);J<=127?r++:J<=2047?r+=2:J>=55296&&J<=57343?(r+=4,++u):r+=3}return r},nt=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Nn=(c,r,u)=>{for(var J=r+u,O=r;c[O]&&!(O>=J);)++O;if(O-r>16&&c.buffer&&nt)return nt.decode(c.subarray(r,O));for(var V="";r<O;){var tA=c[r++];if(!(tA&128)){V+=String.fromCharCode(tA);continue}var P=c[r++]&63;if((tA&224)==192){V+=String.fromCharCode((tA&31)<<6|P);continue}var FA=c[r++]&63;if((tA&240)==224?tA=(tA&15)<<12|P<<6|FA:tA=(tA&7)<<18|P<<12|FA<<6|c[r++]&63,tA<65536)V+=String.fromCharCode(tA);else{var NA=tA-65536;V+=String.fromCharCode(55296|NA>>10,56320|NA&1023)}}return V},de=(c,r)=>c?Nn(N,c,r):"";function eB(c,r){r=_(r);var u=r==="std::string";PB(c,{name:r,fromWireType:function(J){var O=iA[J>>2],V=J+4,tA;if(u)for(var P=V,FA=0;FA<=O;++FA){var NA=V+FA;if(FA==O||N[NA]==0){var zA=NA-P,$A=de(P,zA);tA===void 0?tA=$A:(tA+=String.fromCharCode(0),tA+=$A),P=NA+1}}else{for(var nB=new Array(O),FA=0;FA<O;++FA)nB[FA]=String.fromCharCode(N[V+FA]);tA=nB.join("")}return $Q(J),tA},toWireType:function(J,O){O instanceof ArrayBuffer&&(O=new Uint8Array(O));var V,tA=typeof O=="string";tA||O instanceof Uint8Array||O instanceof Uint8ClampedArray||O instanceof Int8Array||LA("Cannot pass non-string to std::string"),u&&tA?V=xe(O):V=O.length;var P=OB(4+V+1),FA=P+4;if(iA[P>>2]=V,u&&tA)Et(O,FA,V+1);else if(tA)for(var NA=0;NA<V;++NA){var zA=O.charCodeAt(NA);zA>255&&($Q(FA),LA("String has UTF-16 code units that do not fit in 8 bits")),N[FA+NA]=zA}else for(var NA=0;NA<V;++NA)N[FA+NA]=O[NA];return J!==null&&J.push($Q,P),P},argPackAdvance:8,readValueFromPointer:G,destructorFunction:function(J){$Q(J)}})}var JA=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,mE=(c,r)=>{for(var u=c,J=u>>1,O=J+r/2;!(J>=O)&&v[J];)++J;if(u=J<<1,u-c>32&&JA)return JA.decode(N.subarray(c,u));for(var V="",tA=0;!(tA>=r/2);++tA){var P=AA[c+tA*2>>1];if(P==0)break;V+=String.fromCharCode(P)}return V},PA=(c,r,u)=>{if(u===void 0&&(u=2147483647),u<2)return 0;u-=2;for(var J=r,O=u<c.length*2?u/2:c.length,V=0;V<O;++V){var tA=c.charCodeAt(V);AA[r>>1]=tA,r+=2}return AA[r>>1]=0,r-J},bn=c=>c.length*2,fe=(c,r)=>{for(var u=0,J="";!(u>=r/4);){var O=x[c+u*4>>2];if(O==0)break;if(++u,O>=65536){var V=O-65536;J+=String.fromCharCode(55296|V>>10,56320|V&1023)}else J+=String.fromCharCode(O)}return J},JE=(c,r,u)=>{if(u===void 0&&(u=2147483647),u<4)return 0;for(var J=r,O=J+u-4,V=0;V<c.length;++V){var tA=c.charCodeAt(V);if(tA>=55296&&tA<=57343){var P=c.charCodeAt(++V);tA=65536+((tA&1023)<<10)|P&1023}if(x[r>>2]=tA,r+=4,r+4>O)break}return x[r>>2]=0,r-J},mn=c=>{for(var r=0,u=0;u<c.length;++u){var J=c.charCodeAt(u);J>=55296&&J<=57343&&++u,r+=4}return r},yE=function(c,r,u){u=_(u);var J,O,V,tA,P;r===2?(J=mE,O=PA,tA=bn,V=()=>v,P=1):r===4&&(J=fe,O=JE,tA=mn,V=()=>iA,P=2),PB(c,{name:u,fromWireType:function(FA){for(var NA=iA[FA>>2],zA=V(),$A,nB=FA+4,YB=0;YB<=NA;++YB){var JB=FA+4+YB*r;if(YB==NA||zA[JB>>P]==0){var $B=JB-nB,C=J(nB,$B);$A===void 0?$A=C:($A+=String.fromCharCode(0),$A+=C),nB=JB+r}}return $Q(FA),$A},toWireType:function(FA,NA){typeof NA!="string"&&LA(`Cannot pass non-string to C++ string type ${u}`);var zA=tA(NA),$A=OB(4+zA+r);return iA[$A>>2]=zA>>P,O(NA,$A+4,zA+r),FA!==null&&FA.push($Q,$A),$A},argPackAdvance:8,readValueFromPointer:G,destructorFunction:function(FA){$Q(FA)}})};function kE(c,r,u,J,O,V){U[c]={name:_(r),rawConstructor:cQ(u,J),rawDestructor:cQ(O,V),fields:[]}}function Jn(c,r,u,J,O,V,tA,P,FA,NA){U[c].fields.push({fieldName:_(r),getterReturnType:u,getter:cQ(J,O),getterContext:V,setterArgumentType:tA,setter:cQ(P,FA),setterContext:NA})}function Me(c,r){r=_(r),PB(c,{isVoid:!0,name:r,argPackAdvance:0,fromWireType:function(){},toWireType:function(u,J){}})}var ZE={};function qB(c){var r=ZE[c];return r===void 0?_(c):r}function Ct(){if(typeof globalThis=="object")return globalThis;function c(r){r.$$$embind_global$$$=r;var u=typeof $$$embind_global$$$=="object"&&r.$$$embind_global$$$==r;return u||delete r.$$$embind_global$$$,u}if(typeof $$$embind_global$$$=="object"||(typeof global=="object"&&c(global)?$$$embind_global$$$=global:typeof self=="object"&&c(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function _A(c){return c===0?mQ.toHandle(Ct()):(c=qB(c),mQ.toHandle(Ct()[c]))}function Gg(c){c>4&&(gQ.get(c).refcount+=1)}function It(c,r){var u=q[c];return u===void 0&&LA(r+" has unknown type "+LQ(c)),u}function rQ(c){var r=new Array(c+1);return function(u,J,O){r[0]=u;for(var V=0;V<c;++V){var tA=It(iA[J+V*4>>2],"parameter "+V);r[V+1]=tA.readValueFromPointer(O),O+=tA.argPackAdvance}var P=new(u.bind.apply(u,r));return mQ.toHandle(P)}}var mB={};function EQ(c,r,u,J){c=mQ.toValue(c);var O=mB[r];return O||(O=rQ(r),mB[r]=O),O(c,u,J)}function lQ(c,r){c=It(c,"_emval_take_value");var u=c.readValueFromPointer(r);return mQ.toHandle(u)}var Rg=()=>{GB("")},jt=(c,r,u)=>N.copyWithin(c,r,r+u),qt=()=>2147483648,_t=c=>{var r=y.buffer,u=c-r.byteLength+65535>>>16;try{return y.grow(u),$(),1}catch{}},pt=c=>{var r=N.length;c>>>=0;var u=qt();if(c>u)return!1;for(var J=(FA,NA)=>FA+(NA-FA%NA)%NA,O=1;O<=4;O*=2){var V=r*(1+.2/O);V=Math.min(V,c+100663296);var tA=Math.min(u,J(Math.max(c,V),65536)),P=_t(tA);if(P)return!0}return!1},it={},ue=()=>E||"./this.program",WQ=()=>{if(!WQ.strings){var c=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:c,_:ue()};for(var u in it)it[u]===void 0?delete r[u]:r[u]=it[u];var J=[];for(var u in r)J.push(`${u}=${r[u]}`);WQ.strings=J}return WQ.strings},$t=(c,r)=>{for(var u=0;u<c.length;++u)m[r++>>0]=c.charCodeAt(u);m[r>>0]=0},Ae=(c,r)=>{var u=0;return WQ().forEach(function(J,O){var V=r+u;iA[c+O*4>>2]=V,$t(J,V),u+=J.length+1}),0},dB=(c,r)=>{var u=WQ();iA[c>>2]=u.length;var J=0;return u.forEach(function(O){J+=O.length+1}),iA[r>>2]=J,0};function bB(c){return c}var _Q=c=>c%4===0&&(c%100!==0||c%400===0),Tg=(c,r)=>{for(var u=0,J=0;J<=r;u+=c[J++]);return u},ot=[31,29,31,30,31,30,31,31,30,31,30,31],Yg=[31,28,31,30,31,30,31,31,30,31,30,31],hB=(c,r)=>{for(var u=new Date(c.getTime());r>0;){var J=_Q(u.getFullYear()),O=u.getMonth(),V=(J?ot:Yg)[O];if(r>V-u.getDate())r-=V-u.getDate()+1,u.setDate(1),O<11?u.setMonth(O+1):(u.setMonth(0),u.setFullYear(u.getFullYear()+1));else return u.setDate(u.getDate()+r),u}return u};function st(c,r,u){var J=u>0?u:xe(c)+1,O=new Array(J),V=Wg(c,O,0,O.length);return r&&(O.length=V),O}var Be=(c,r)=>{m.set(c,r)},ze=(c,r,u,J)=>{var O=x[J+40>>2],V={tm_sec:x[J>>2],tm_min:x[J+4>>2],tm_hour:x[J+8>>2],tm_mday:x[J+12>>2],tm_mon:x[J+16>>2],tm_year:x[J+20>>2],tm_wday:x[J+24>>2],tm_yday:x[J+28>>2],tm_isdst:x[J+32>>2],tm_gmtoff:x[J+36>>2],tm_zone:O?de(O):""},tA=de(u),P={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var FA in P)tA=tA.replace(new RegExp(FA,"g"),P[FA]);var NA=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],zA=["January","February","March","April","May","June","July","August","September","October","November","December"];function $A(l,Y,eA){for(var vA=typeof l=="number"?l.toString():l||"";vA.length<Y;)vA=eA[0]+vA;return vA}function nB(l,Y){return $A(l,Y,"0")}function YB(l,Y){function eA(iB){return iB<0?-1:iB>0?1:0}var vA;return(vA=eA(l.getFullYear()-Y.getFullYear()))===0&&(vA=eA(l.getMonth()-Y.getMonth()))===0&&(vA=eA(l.getDate()-Y.getDate())),vA}function JB(l){switch(l.getDay()){case 0:return new Date(l.getFullYear()-1,11,29);case 1:return l;case 2:return new Date(l.getFullYear(),0,3);case 3:return new Date(l.getFullYear(),0,2);case 4:return new Date(l.getFullYear(),0,1);case 5:return new Date(l.getFullYear()-1,11,31);case 6:return new Date(l.getFullYear()-1,11,30)}}function $B(l){var Y=hB(new Date(l.tm_year+1900,0,1),l.tm_yday),eA=new Date(Y.getFullYear(),0,4),vA=new Date(Y.getFullYear()+1,0,4),iB=JB(eA),LB=JB(vA);return YB(iB,Y)<=0?YB(LB,Y)<=0?Y.getFullYear()+1:Y.getFullYear():Y.getFullYear()-1}var C={"%a":l=>NA[l.tm_wday].substring(0,3),"%A":l=>NA[l.tm_wday],"%b":l=>zA[l.tm_mon].substring(0,3),"%B":l=>zA[l.tm_mon],"%C":l=>{var Y=l.tm_year+1900;return nB(Y/100|0,2)},"%d":l=>nB(l.tm_mday,2),"%e":l=>$A(l.tm_mday,2," "),"%g":l=>$B(l).toString().substring(2),"%G":l=>$B(l),"%H":l=>nB(l.tm_hour,2),"%I":l=>{var Y=l.tm_hour;return Y==0?Y=12:Y>12&&(Y-=12),nB(Y,2)},"%j":l=>nB(l.tm_mday+Tg(_Q(l.tm_year+1900)?ot:Yg,l.tm_mon-1),3),"%m":l=>nB(l.tm_mon+1,2),"%M":l=>nB(l.tm_min,2),"%n":()=>`
`,"%p":l=>l.tm_hour>=0&&l.tm_hour<12?"AM":"PM","%S":l=>nB(l.tm_sec,2),"%t":()=>"	","%u":l=>l.tm_wday||7,"%U":l=>{var Y=l.tm_yday+7-l.tm_wday;return nB(Math.floor(Y/7),2)},"%V":l=>{var Y=Math.floor((l.tm_yday+7-(l.tm_wday+6)%7)/7);if((l.tm_wday+371-l.tm_yday-2)%7<=2&&Y++,Y){if(Y==53){var eA=(l.tm_wday+371-l.tm_yday)%7;eA!=4&&(eA!=3||!_Q(l.tm_year))&&(Y=1)}}else{Y=52;var vA=(l.tm_wday+7-l.tm_yday-1)%7;(vA==4||vA==5&&_Q(l.tm_year%400-1))&&Y++}return nB(Y,2)},"%w":l=>l.tm_wday,"%W":l=>{var Y=l.tm_yday+7-(l.tm_wday+6)%7;return nB(Math.floor(Y/7),2)},"%y":l=>(l.tm_year+1900).toString().substring(2),"%Y":l=>l.tm_year+1900,"%z":l=>{var Y=l.tm_gmtoff,eA=Y>=0;return Y=Math.abs(Y)/60,Y=Y/60*100+Y%60,(eA?"+":"-")+("0000"+Y).slice(-4)},"%Z":l=>l.tm_zone,"%%":()=>"%"};tA=tA.replace(/%%/g,"\0\0");for(var FA in C)tA.includes(FA)&&(tA=tA.replace(new RegExp(FA,"g"),C[FA](V)));tA=tA.replace(/\0\0/g,"%");var s=st(tA,!1);return s.length>r?0:(Be(s,c),s.length-1)},Qe=(c,r,u,J,O)=>ze(c,r,u,J);wA=Q.InternalError=class extends Error{constructor(c){super(c),this.name="InternalError"}},gA(),QB=Q.BindingError=class extends Error{constructor(c){super(c),this.name="BindingError"}},ZQ(),ae(),Mg(),NE=Q.UnboundTypeError=ce(Error,"UnboundTypeError"),le(),et();var yn={q:rA,u:oA,a:YA,h:SA,l:TA,I:KA,P:VA,n:lB,ba:k,d:CA,oa:qA,Y:AB,fa:lg,na:re,ma:Cg,D:Kt,ea:Fe,W:Ve,J:Ue,w:qQ,s:bE,V:eB,L:yE,Q:kE,pa:Jn,ga:Me,U:Pt,la:_A,R:Gg,ia:EQ,ka:lQ,K:Rg,da:jt,ca:pt,$:Ae,aa:dB,H:$e,T:QE,B:JQ,p:mt,b:LE,C:HE,ha:BE,c:qe,j:bt,i:je,x:AE,O:Ge,v:he,G:TQ,N:Re,A:kn,F:Vg,Z:Zn,X:gE,k:XE,f:ge,e:Nt,g:XQ,M:te,m:SE,o:at,S:Og,t:ig,ja:og,y:Bg,r:_e,E:wt,z:bB,_:Qe};L();var $Q=Q._free=c=>($Q=Q._free=p.sa)(c),OB=Q._malloc=c=>(OB=Q._malloc=p.ta)(c),Ag=c=>(Ag=p.va)(c);Q.__embind_initialize_bindings=()=>(Q.__embind_initialize_bindings=p.wa)();var sB=(c,r)=>(sB=p.xa)(c,r),YQ=c=>(YQ=p.ya)(c),IB=()=>(IB=p.za)(),aB=c=>(aB=p.Aa)(c),FQ=c=>(FQ=p.Ba)(c),GQ=c=>(GQ=p.Ca)(c),_B=(c,r,u)=>(_B=p.Da)(c,r,u),pg=c=>(pg=p.Ea)(c);Q.dynCall_viijii=(c,r,u,J,O,V,tA)=>(Q.dynCall_viijii=p.Fa)(c,r,u,J,O,V,tA);var Ke=Q.dynCall_jiii=(c,r,u,J)=>(Ke=Q.dynCall_jiii=p.Ga)(c,r,u,J),Pe=Q.dynCall_jiiii=(c,r,u,J,O)=>(Pe=Q.dynCall_jiiii=p.Ha)(c,r,u,J,O);Q.dynCall_iiiiij=(c,r,u,J,O,V,tA)=>(Q.dynCall_iiiiij=p.Ia)(c,r,u,J,O,V,tA),Q.dynCall_iiiiijj=(c,r,u,J,O,V,tA,P,FA)=>(Q.dynCall_iiiiijj=p.Ja)(c,r,u,J,O,V,tA,P,FA),Q.dynCall_iiiiiijj=(c,r,u,J,O,V,tA,P,FA,NA)=>(Q.dynCall_iiiiiijj=p.Ka)(c,r,u,J,O,V,tA,P,FA,NA);function LE(c,r){var u=IB();try{return oB(c)(r)}catch(J){if(aB(u),J!==J+0)throw J;sB(1,0)}}function XQ(c,r,u,J){var O=IB();try{oB(c)(r,u,J)}catch(V){if(aB(O),V!==V+0)throw V;sB(1,0)}}function Nt(c,r,u){var J=IB();try{oB(c)(r,u)}catch(O){if(aB(J),O!==O+0)throw O;sB(1,0)}}function je(c,r,u,J,O){var V=IB();try{return oB(c)(r,u,J,O)}catch(tA){if(aB(V),tA!==tA+0)throw tA;sB(1,0)}}function ge(c,r){var u=IB();try{oB(c)(r)}catch(J){if(aB(u),J!==J+0)throw J;sB(1,0)}}function qe(c,r,u){var J=IB();try{return oB(c)(r,u)}catch(O){if(aB(J),O!==O+0)throw O;sB(1,0)}}function XE(c){var r=IB();try{oB(c)()}catch(u){if(aB(r),u!==u+0)throw u;sB(1,0)}}function bt(c,r,u,J){var O=IB();try{return oB(c)(r,u,J)}catch(V){if(aB(O),V!==V+0)throw V;sB(1,0)}}function at(c,r,u,J,O,V){var tA=IB();try{oB(c)(r,u,J,O,V)}catch(P){if(aB(tA),P!==P+0)throw P;sB(1,0)}}function Og(c,r,u,J,O,V,tA){var P=IB();try{oB(c)(r,u,J,O,V,tA)}catch(FA){if(aB(P),FA!==FA+0)throw FA;sB(1,0)}}function _e(c,r,u,J,O,V,tA,P,FA,NA,zA){var $A=IB();try{oB(c)(r,u,J,O,V,tA,P,FA,NA,zA)}catch(nB){if(aB($A),nB!==nB+0)throw nB;sB(1,0)}}function ig(c,r,u,J,O,V,tA,P){var FA=IB();try{oB(c)(r,u,J,O,V,tA,P)}catch(NA){if(aB(FA),NA!==NA+0)throw NA;sB(1,0)}}function SE(c,r,u,J,O){var V=IB();try{oB(c)(r,u,J,O)}catch(tA){if(aB(V),tA!==tA+0)throw tA;sB(1,0)}}function he(c,r,u,J,O,V,tA){var P=IB();try{return oB(c)(r,u,J,O,V,tA)}catch(FA){if(aB(P),FA!==FA+0)throw FA;sB(1,0)}}function og(c,r,u,J,O,V,tA,P,FA){var NA=IB();try{oB(c)(r,u,J,O,V,tA,P,FA)}catch(zA){if(aB(NA),zA!==zA+0)throw zA;sB(1,0)}}function mt(c){var r=IB();try{return oB(c)()}catch(u){if(aB(r),u!==u+0)throw u;sB(1,0)}}function Ge(c,r,u,J,O,V,tA){var P=IB();try{return oB(c)(r,u,J,O,V,tA)}catch(FA){if(aB(P),FA!==FA+0)throw FA;sB(1,0)}}function HE(c,r,u,J){var O=IB();try{return oB(c)(r,u,J)}catch(V){if(aB(O),V!==V+0)throw V;sB(1,0)}}function $e(c,r,u,J){var O=IB();try{return oB(c)(r,u,J)}catch(V){if(aB(O),V!==V+0)throw V;sB(1,0)}}function AE(c,r,u,J,O,V){var tA=IB();try{return oB(c)(r,u,J,O,V)}catch(P){if(aB(tA),P!==P+0)throw P;sB(1,0)}}function JQ(c,r,u,J,O,V){var tA=IB();try{return oB(c)(r,u,J,O,V)}catch(P){if(aB(tA),P!==P+0)throw P;sB(1,0)}}function kn(c,r,u,J,O,V,tA,P,FA,NA){var zA=IB();try{return oB(c)(r,u,J,O,V,tA,P,FA,NA)}catch($A){if(aB(zA),$A!==$A+0)throw $A;sB(1,0)}}function BE(c,r,u){var J=IB();try{return oB(c)(r,u)}catch(O){if(aB(J),O!==O+0)throw O;sB(1,0)}}function Bg(c,r,u,J,O,V,tA,P,FA,NA){var zA=IB();try{oB(c)(r,u,J,O,V,tA,P,FA,NA)}catch($A){if(aB(zA),$A!==$A+0)throw $A;sB(1,0)}}function TQ(c,r,u,J,O,V,tA,P){var FA=IB();try{return oB(c)(r,u,J,O,V,tA,P)}catch(NA){if(aB(FA),NA!==NA+0)throw NA;sB(1,0)}}function Re(c,r,u,J,O,V,tA,P,FA){var NA=IB();try{return oB(c)(r,u,J,O,V,tA,P,FA)}catch(zA){if(aB(NA),zA!==zA+0)throw zA;sB(1,0)}}function te(c,r,u,J,O,V,tA){var P=IB();try{oB(c)(r,u,J,O,V,tA)}catch(FA){if(aB(P),FA!==FA+0)throw FA;sB(1,0)}}function QE(c,r,u,J){var O=IB();try{return oB(c)(r,u,J)}catch(V){if(aB(O),V!==V+0)throw V;sB(1,0)}}function Vg(c,r,u,J,O,V,tA,P,FA,NA,zA,$A){var nB=IB();try{return oB(c)(r,u,J,O,V,tA,P,FA,NA,zA,$A)}catch(YB){if(aB(nB),YB!==YB+0)throw YB;sB(1,0)}}function wt(c,r,u,J,O,V,tA,P,FA,NA,zA,$A,nB,YB,JB,$B){var C=IB();try{oB(c)(r,u,J,O,V,tA,P,FA,NA,zA,$A,nB,YB,JB,$B)}catch(s){if(aB(C),s!==s+0)throw s;sB(1,0)}}function Zn(c,r,u,J){var O=IB();try{return Ke(c,r,u,J)}catch(V){if(aB(O),V!==V+0)throw V;sB(1,0)}}function gE(c,r,u,J,O){var V=IB();try{return Pe(c,r,u,J,O)}catch(tA){if(aB(V),tA!==tA+0)throw tA;sB(1,0)}}var Jt;uB=function c(){Jt||T(),Jt||(uB=c)};function T(){if(wB>0||(uA(),wB>0))return;function c(){Jt||(Jt=!0,Q.calledRun=!0,!M&&(EB(),g(Q),Q.onRuntimeInitialized&&Q.onRuntimeInitialized(),XA()))}Q.setStatus?(Q.setStatus("Running..."),setTimeout(function(){setTimeout(function(){Q.setStatus("")},1),c()},1)):c()}if(Q.preInit)for(typeof Q.preInit=="function"&&(Q.preInit=[Q.preInit]);Q.preInit.length>0;)Q.preInit.pop()();return T(),B.ready}})();function Nk(A){return vM(WM,A)}async function bk(A,{tryHarder:B=En.tryHarder,formats:Q=En.formats,maxSymbols:g=En.maxSymbols}=En){return Rk(A,{tryHarder:B,formats:Q,maxSymbols:g},WM)}const TM=new Map([["aztec","Aztec"],["code_128","Code128"],["code_39","Code39"],["code_93","Code93"],["codabar","Codabar"],["data_matrix","DataMatrix"],["ean_13","EAN-13"],["ean_8","EAN-8"],["itf","ITF"],["pdf417","PDF417"],["qr_code","QRCode"],["upc_a","UPC-A"],["upc_e","UPC-E"]]);function mk(A){for(const[B,Q]of TM)if(A===Q)return B;return"unknown"}var No;class ys{constructor(B={}){ik(this,No,void 0);var Q;try{const g=(Q=B==null?void 0:B.formats)==null?void 0:Q.filter(t=>t!=="unknown");if((g==null?void 0:g.length)===0)throw new TypeError("Hint option provided, but is empty.");g==null||g.forEach(t=>{if(!vU.includes(t))throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${t}' is not a valid enum value of type BarcodeFormat.`)}),Nk().catch(()=>{}),ok(this,No,g??[])}catch(g){throw WU(g,"Failed to construct 'BarcodeDetector'")}}static async getSupportedFormats(){return vU.filter(B=>B!=="unknown")}async detect(B){try{const Q=await Dk(B);if(Q===null)return[];let g;try{g=await bk(Q,{tryHarder:!0,formats:Ik(this,No).map(t=>TM.get(t))})}catch{throw new DOMException("Barcode detection service unavailable. Use 'setZXingModuleOverrides' in offline or strict CSP environments.","NotSupportedError")}return g.map(t=>{const{topLeft:{x:e,y:E},topRight:{x:I,y:i},bottomLeft:{x:a,y:w},bottomRight:{x:F,y:R}}=t.position,h=Math.min(e,I,a,F),y=Math.min(E,i,w,R),p=Math.max(e,I,a,F),M=Math.max(E,i,w,R);return{boundingBox:new DOMRectReadOnly(h,y,p-h,M-y),rawValue:new TextDecoder().decode(t.bytes),format:mk(t.format),cornerPoints:[{x:e,y:E},{x:I,y:i},{x:F,y:R},{x:a,y:w}]}})}catch(Q){throw WU(Q,"Failed to execute 'detect' on 'BarcodeDetector'")}}}No=new WeakMap;const OM=(A,B,Q="error")=>{let g,t;const e=new Promise((E,I)=>{g=E,t=I,A.addEventListener(B,g),A.addEventListener(Q,t)});return e.finally(()=>{A.removeEventListener(B,g),A.removeEventListener(Q,t)}),e},xU=A=>new Promise(B=>setTimeout(B,A));class Jk extends Error{constructor(){super("can't process cross-origin image"),this.name="DropImageFetchError"}}class VM extends Error{constructor(){super("this browser has no Stream API support"),this.name="StreamApiNotSupportedError"}}class yk extends Error{constructor(){super("camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP."),this.name="InsecureContextError"}}class kk extends Error{constructor(){super("Loading camera stream timed out after 3 seconds. If you are on iOS in PWA mode, this is a known issue (see https://github.com/gruhn/vue-qrcode-reader/issues/298)"),this.name="StreamLoadTimeoutError"}}let tl;const Zk=A=>{tl=new ys({formats:A})},Lk=async(A,{detectHandler:B,locateHandler:Q,minDelay:g,formats:t})=>{tl=new ys({formats:t});const e=E=>async I=>{if(A.readyState>1){const{lastScanned:i,contentBefore:a,lastScanHadContent:w}=E;if(I-i<g)window.requestAnimationFrame(e(E));else{const F=await tl.detect(A),R=F.some(p=>!a.includes(p.rawValue));R&&B(F);const h=F.length>0;h&&Q(F),!h&&w&&Q(F);const y={lastScanned:I,lastScanHadContent:h,contentBefore:R?F.map(p=>p.rawValue):a};window.requestAnimationFrame(e(y))}}};e({lastScanned:performance.now(),contentBefore:[],lastScanHadContent:!1})(performance.now())},Xk=async A=>{if(A.startsWith("http")&&A.includes(location.host)===!1)throw new Jk;const B=document.createElement("img");return B.src=A,await OM(B,"load"),B},xM=async(A,B=["qr_code"])=>await new ys({formats:B}).detect(A),Sk=async(A,B=["qr_code"])=>{const Q=new ys({formats:B}),g=await Xk(A);return await Q.detect(g)};var zM={},_g={};Object.defineProperty(_g,"__esModule",{value:!0});_g.compactObject=jM;_g.deprecated=Kk;var Hk=_g.detectBrowser=Pk;_g.disableLog=Vk;_g.disableWarnings=xk;_g.extractVersion=bo;_g.filterStats=jk;_g.log=zk;_g.walkStats=Vo;_g.wrapPeerConnectionEvent=Ok;function vk(A,B,Q){return B=Wk(B),B in A?Object.defineProperty(A,B,{value:Q,enumerable:!0,configurable:!0,writable:!0}):A[B]=Q,A}function Wk(A){var B=Tk(A,"string");return dn(B)==="symbol"?B:String(B)}function Tk(A,B){if(dn(A)!=="object"||A===null)return A;var Q=A[Symbol.toPrimitive];if(Q!==void 0){var g=Q.call(A,B||"default");if(dn(g)!=="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return(B==="string"?String:Number)(A)}function dn(A){"@babel/helpers - typeof";return dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},dn(A)}var KM=!0,PM=!0;function bo(A,B,Q){var g=A.match(B);return g&&g.length>=Q&&parseInt(g[Q],10)}function Ok(A,B,Q){if(A.RTCPeerConnection){var g=A.RTCPeerConnection.prototype,t=g.addEventListener;g.addEventListener=function(E,I){if(E!==B)return t.apply(this,arguments);var i=function(a){var w=Q(a);w&&(I.handleEvent?I.handleEvent(w):I(w))};return this._eventMap=this._eventMap||{},this._eventMap[B]||(this._eventMap[B]=new Map),this._eventMap[B].set(I,i),t.apply(this,[E,i])};var e=g.removeEventListener;g.removeEventListener=function(E,I){if(E!==B||!this._eventMap||!this._eventMap[B])return e.apply(this,arguments);if(!this._eventMap[B].has(I))return e.apply(this,arguments);var i=this._eventMap[B].get(I);return this._eventMap[B].delete(I),this._eventMap[B].size===0&&delete this._eventMap[B],Object.keys(this._eventMap).length===0&&delete this._eventMap,e.apply(this,[E,i])},Object.defineProperty(g,"on"+B,{get:function(){return this["_on"+B]},set:function(E){this["_on"+B]&&(this.removeEventListener(B,this["_on"+B]),delete this["_on"+B]),E&&this.addEventListener(B,this["_on"+B]=E)},enumerable:!0,configurable:!0})}}function Vk(A){return typeof A!="boolean"?new Error("Argument type: "+dn(A)+". Please use a boolean."):(KM=A,A?"adapter.js logging disabled":"adapter.js logging enabled")}function xk(A){return typeof A!="boolean"?new Error("Argument type: "+dn(A)+". Please use a boolean."):(PM=!A,"adapter.js deprecation warnings "+(A?"disabled":"enabled"))}function zk(){if((typeof window>"u"?"undefined":dn(window))==="object"){if(KM)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Kk(A,B){PM&&console.warn(A+" is deprecated, please use "+B+" instead.")}function Pk(A){var B={browser:null,version:null};if(typeof A>"u"||!A.navigator||!A.navigator.userAgent)return B.browser="Not a browser.",B;var Q=A.navigator;if(Q.mozGetUserMedia)B.browser="firefox",B.version=bo(Q.userAgent,/Firefox\/(\d+)\./,1);else if(Q.webkitGetUserMedia||A.isSecureContext===!1&&A.webkitRTCPeerConnection)B.browser="chrome",B.version=bo(Q.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(A.RTCPeerConnection&&Q.userAgent.match(/AppleWebKit\/(\d+)\./))B.browser="safari",B.version=bo(Q.userAgent,/AppleWebKit\/(\d+)\./,1),B.supportsUnifiedPlan=A.RTCRtpTransceiver&&"currentDirection"in A.RTCRtpTransceiver.prototype;else return B.browser="Not a supported browser.",B;return B}function zU(A){return Object.prototype.toString.call(A)==="[object Object]"}function jM(A){return zU(A)?Object.keys(A).reduce(function(B,Q){var g=zU(A[Q]),t=g?jM(A[Q]):A[Q],e=g&&!Object.keys(t).length;return t===void 0||e?B:Object.assign(B,vk({},Q,t))},{}):A}function Vo(A,B,Q){!B||Q.has(B.id)||(Q.set(B.id,B),Object.keys(B).forEach(function(g){g.endsWith("Id")?Vo(A,A.get(B[g]),Q):g.endsWith("Ids")&&B[g].forEach(function(t){Vo(A,A.get(t),Q)})}))}function jk(A,B,Q){var g=Q?"outbound-rtp":"inbound-rtp",t=new Map;if(B===null)return t;var e=[];return A.forEach(function(E){E.type==="track"&&E.trackIdentifier===B.id&&e.push(E)}),e.forEach(function(E){A.forEach(function(I){I.type===g&&I.trackId===E.id&&Vo(A,I,t)})}),t}Object.defineProperty(zM,"__esModule",{value:!0});var qk=zM.shimGetUserMedia=AZ,_k=$k(_g);function qM(A){if(typeof WeakMap!="function")return null;var B=new WeakMap,Q=new WeakMap;return(qM=function(g){return g?Q:B})(A)}function $k(A,B){if(!B&&A&&A.__esModule)return A;if(A===null||en(A)!=="object"&&typeof A!="function")return{default:A};var Q=qM(B);if(Q&&Q.has(A))return Q.get(A);var g={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in A)if(e!=="default"&&Object.prototype.hasOwnProperty.call(A,e)){var E=t?Object.getOwnPropertyDescriptor(A,e):null;E&&(E.get||E.set)?Object.defineProperty(g,e,E):g[e]=A[e]}return g.default=A,Q&&Q.set(A,g),g}function en(A){"@babel/helpers - typeof";return en=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},en(A)}var KU=_k.log;function AZ(A,B){var Q=A&&A.navigator;if(Q.mediaDevices){var g=function(i){if(en(i)!=="object"||i.mandatory||i.optional)return i;var a={};return Object.keys(i).forEach(function(w){if(!(w==="require"||w==="advanced"||w==="mediaSource")){var F=en(i[w])==="object"?i[w]:{ideal:i[w]};F.exact!==void 0&&typeof F.exact=="number"&&(F.min=F.max=F.exact);var R=function(y,p){return y?y+p.charAt(0).toUpperCase()+p.slice(1):p==="deviceId"?"sourceId":p};if(F.ideal!==void 0){a.optional=a.optional||[];var h={};typeof F.ideal=="number"?(h[R("min",w)]=F.ideal,a.optional.push(h),h={},h[R("max",w)]=F.ideal,a.optional.push(h)):(h[R("",w)]=F.ideal,a.optional.push(h))}F.exact!==void 0&&typeof F.exact!="number"?(a.mandatory=a.mandatory||{},a.mandatory[R("",w)]=F.exact):["min","max"].forEach(function(y){F[y]!==void 0&&(a.mandatory=a.mandatory||{},a.mandatory[R(y,w)]=F[y])})}}),i.advanced&&(a.optional=(a.optional||[]).concat(i.advanced)),a},t=function(i,a){if(B.version>=61)return a(i);if(i=JSON.parse(JSON.stringify(i)),i&&en(i.audio)==="object"){var w=function(y,p,M){p in y&&!(M in y)&&(y[M]=y[p],delete y[p])};i=JSON.parse(JSON.stringify(i)),w(i.audio,"autoGainControl","googAutoGainControl"),w(i.audio,"noiseSuppression","googNoiseSuppression"),i.audio=g(i.audio)}if(i&&en(i.video)==="object"){var F=i.video.facingMode;F=F&&(en(F)==="object"?F:{ideal:F});var R=B.version<66;if(F&&(F.exact==="user"||F.exact==="environment"||F.ideal==="user"||F.ideal==="environment")&&!(Q.mediaDevices.getSupportedConstraints&&Q.mediaDevices.getSupportedConstraints().facingMode&&!R)){delete i.video.facingMode;var h;if(F.exact==="environment"||F.ideal==="environment"?h=["back","rear"]:(F.exact==="user"||F.ideal==="user")&&(h=["front"]),h)return Q.mediaDevices.enumerateDevices().then(function(y){y=y.filter(function(M){return M.kind==="videoinput"});var p=y.find(function(M){return h.some(function(m){return M.label.toLowerCase().includes(m)})});return!p&&y.length&&h.includes("back")&&(p=y[y.length-1]),p&&(i.video.deviceId=F.exact?{exact:p.deviceId}:{ideal:p.deviceId}),i.video=g(i.video),KU("chrome: "+JSON.stringify(i)),a(i)})}i.video=g(i.video)}return KU("chrome: "+JSON.stringify(i)),a(i)},e=function(i){return B.version>=64?i:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[i.name]||i.name,message:i.message,constraint:i.constraint||i.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}},E=function(i,a,w){t(i,function(F){Q.webkitGetUserMedia(F,a,function(R){w&&w(e(R))})})};if(Q.getUserMedia=E.bind(Q),Q.mediaDevices.getUserMedia){var I=Q.mediaDevices.getUserMedia.bind(Q.mediaDevices);Q.mediaDevices.getUserMedia=function(i){return t(i,function(a){return I(a).then(function(w){if(a.audio&&!w.getAudioTracks().length||a.video&&!w.getVideoTracks().length)throw w.getTracks().forEach(function(F){F.stop()}),new DOMException("","NotFoundError");return w},function(w){return Promise.reject(e(w))})})}}}}var _M={};Object.defineProperty(_M,"__esModule",{value:!0});var BZ=_M.shimGetUserMedia=tZ,QZ=gZ(_g);function $M(A){if(typeof WeakMap!="function")return null;var B=new WeakMap,Q=new WeakMap;return($M=function(g){return g?Q:B})(A)}function gZ(A,B){if(!B&&A&&A.__esModule)return A;if(A===null||xC(A)!=="object"&&typeof A!="function")return{default:A};var Q=$M(B);if(Q&&Q.has(A))return Q.get(A);var g={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in A)if(e!=="default"&&Object.prototype.hasOwnProperty.call(A,e)){var E=t?Object.getOwnPropertyDescriptor(A,e):null;E&&(E.get||E.set)?Object.defineProperty(g,e,E):g[e]=A[e]}return g.default=A,Q&&Q.set(A,g),g}function xC(A){"@babel/helpers - typeof";return xC=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},xC(A)}function tZ(A,B){var Q=A&&A.navigator,g=A&&A.MediaStreamTrack;if(Q.getUserMedia=function(i,a,w){QZ.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),Q.mediaDevices.getUserMedia(i).then(a,w)},!(B.version>55&&"autoGainControl"in Q.mediaDevices.getSupportedConstraints())){var t=function(i,a,w){a in i&&!(w in i)&&(i[w]=i[a],delete i[a])},e=Q.mediaDevices.getUserMedia.bind(Q.mediaDevices);if(Q.mediaDevices.getUserMedia=function(i){return xC(i)==="object"&&xC(i.audio)==="object"&&(i=JSON.parse(JSON.stringify(i)),t(i.audio,"autoGainControl","mozAutoGainControl"),t(i.audio,"noiseSuppression","mozNoiseSuppression")),e(i)},g&&g.prototype.getSettings){var E=g.prototype.getSettings;g.prototype.getSettings=function(){var i=E.apply(this,arguments);return t(i,"mozAutoGainControl","autoGainControl"),t(i,"mozNoiseSuppression","noiseSuppression"),i}}if(g&&g.prototype.applyConstraints){var I=g.prototype.applyConstraints;g.prototype.applyConstraints=function(i){return this.kind==="audio"&&xC(i)==="object"&&(i=JSON.parse(JSON.stringify(i)),t(i,"autoGainControl","mozAutoGainControl"),t(i,"noiseSuppression","mozNoiseSuppression")),I.apply(this,[i])}}}}var Te={};Object.defineProperty(Te,"__esModule",{value:!0});Te.shimAudioContext=wZ;Te.shimCallbacksAPI=IZ;Te.shimConstraints=Qu;Te.shimCreateOfferLegacy=aZ;var eZ=Te.shimGetUserMedia=iZ;Te.shimLocalStreamsAPI=nZ;Te.shimRTCIceServerUrls=oZ;Te.shimRemoteStreamsAPI=CZ;Te.shimTrackEventTransceiver=sZ;var Au=EZ(_g);function Bu(A){if(typeof WeakMap!="function")return null;var B=new WeakMap,Q=new WeakMap;return(Bu=function(g){return g?Q:B})(A)}function EZ(A,B){if(!B&&A&&A.__esModule)return A;if(A===null||fn(A)!=="object"&&typeof A!="function")return{default:A};var Q=Bu(B);if(Q&&Q.has(A))return Q.get(A);var g={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in A)if(e!=="default"&&Object.prototype.hasOwnProperty.call(A,e)){var E=t?Object.getOwnPropertyDescriptor(A,e):null;E&&(E.get||E.set)?Object.defineProperty(g,e,E):g[e]=A[e]}return g.default=A,Q&&Q.set(A,g),g}function fn(A){"@babel/helpers - typeof";return fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},fn(A)}function nZ(A){if(!(fn(A)!=="object"||!A.RTCPeerConnection)){if("getLocalStreams"in A.RTCPeerConnection.prototype||(A.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in A.RTCPeerConnection.prototype)){var B=A.RTCPeerConnection.prototype.addTrack;A.RTCPeerConnection.prototype.addStream=function(Q){var g=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(Q)||this._localStreams.push(Q),Q.getAudioTracks().forEach(function(t){return B.call(g,t,Q)}),Q.getVideoTracks().forEach(function(t){return B.call(g,t,Q)})},A.RTCPeerConnection.prototype.addTrack=function(Q){for(var g=this,t=arguments.length,e=new Array(t>1?t-1:0),E=1;E<t;E++)e[E-1]=arguments[E];return e&&e.forEach(function(I){g._localStreams?g._localStreams.includes(I)||g._localStreams.push(I):g._localStreams=[I]}),B.apply(this,arguments)}}"removeStream"in A.RTCPeerConnection.prototype||(A.RTCPeerConnection.prototype.removeStream=function(Q){var g=this;this._localStreams||(this._localStreams=[]);var t=this._localStreams.indexOf(Q);if(t!==-1){this._localStreams.splice(t,1);var e=Q.getTracks();this.getSenders().forEach(function(E){e.includes(E.track)&&g.removeTrack(E)})}})}}function CZ(A){if(!(fn(A)!=="object"||!A.RTCPeerConnection)&&("getRemoteStreams"in A.RTCPeerConnection.prototype||(A.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in A.RTCPeerConnection.prototype))){Object.defineProperty(A.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(Q){var g=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=Q),this.addEventListener("track",this._onaddstreampoly=function(t){t.streams.forEach(function(e){if(g._remoteStreams||(g._remoteStreams=[]),!g._remoteStreams.includes(e)){g._remoteStreams.push(e);var E=new Event("addstream");E.stream=e,g.dispatchEvent(E)}})})}});var B=A.RTCPeerConnection.prototype.setRemoteDescription;A.RTCPeerConnection.prototype.setRemoteDescription=function(){var Q=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(g){g.streams.forEach(function(t){if(Q._remoteStreams||(Q._remoteStreams=[]),!(Q._remoteStreams.indexOf(t)>=0)){Q._remoteStreams.push(t);var e=new Event("addstream");e.stream=t,Q.dispatchEvent(e)}})}),B.apply(Q,arguments)}}}function IZ(A){if(!(fn(A)!=="object"||!A.RTCPeerConnection)){var B=A.RTCPeerConnection.prototype,Q=B.createOffer,g=B.createAnswer,t=B.setLocalDescription,e=B.setRemoteDescription,E=B.addIceCandidate;B.createOffer=function(i,a){var w=arguments.length>=2?arguments[2]:arguments[0],F=Q.apply(this,[w]);return a?(F.then(i,a),Promise.resolve()):F},B.createAnswer=function(i,a){var w=arguments.length>=2?arguments[2]:arguments[0],F=g.apply(this,[w]);return a?(F.then(i,a),Promise.resolve()):F};var I=function(i,a,w){var F=t.apply(this,[i]);return w?(F.then(a,w),Promise.resolve()):F};B.setLocalDescription=I,I=function(i,a,w){var F=e.apply(this,[i]);return w?(F.then(a,w),Promise.resolve()):F},B.setRemoteDescription=I,I=function(i,a,w){var F=E.apply(this,[i]);return w?(F.then(a,w),Promise.resolve()):F},B.addIceCandidate=I}}function iZ(A){var B=A&&A.navigator;if(B.mediaDevices&&B.mediaDevices.getUserMedia){var Q=B.mediaDevices,g=Q.getUserMedia.bind(Q);B.mediaDevices.getUserMedia=function(t){return g(Qu(t))}}!B.getUserMedia&&B.mediaDevices&&B.mediaDevices.getUserMedia&&(B.getUserMedia=(function(t,e,E){B.mediaDevices.getUserMedia(t).then(e,E)}).bind(B))}function Qu(A){return A&&A.video!==void 0?Object.assign({},A,{video:Au.compactObject(A.video)}):A}function oZ(A){if(A.RTCPeerConnection){var B=A.RTCPeerConnection;A.RTCPeerConnection=function(Q,g){if(Q&&Q.iceServers){for(var t=[],e=0;e<Q.iceServers.length;e++){var E=Q.iceServers[e];E.urls===void 0&&E.url?(Au.deprecated("RTCIceServer.url","RTCIceServer.urls"),E=JSON.parse(JSON.stringify(E)),E.urls=E.url,delete E.url,t.push(E)):t.push(Q.iceServers[e])}Q.iceServers=t}return new B(Q,g)},A.RTCPeerConnection.prototype=B.prototype,"generateCertificate"in B&&Object.defineProperty(A.RTCPeerConnection,"generateCertificate",{get:function(){return B.generateCertificate}})}}function sZ(A){fn(A)==="object"&&A.RTCTrackEvent&&"receiver"in A.RTCTrackEvent.prototype&&!("transceiver"in A.RTCTrackEvent.prototype)&&Object.defineProperty(A.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function aZ(A){var B=A.RTCPeerConnection.prototype.createOffer;A.RTCPeerConnection.prototype.createOffer=function(Q){if(Q){typeof Q.offerToReceiveAudio<"u"&&(Q.offerToReceiveAudio=!!Q.offerToReceiveAudio);var g=this.getTransceivers().find(function(e){return e.receiver.track.kind==="audio"});Q.offerToReceiveAudio===!1&&g?g.direction==="sendrecv"?g.setDirection?g.setDirection("sendonly"):g.direction="sendonly":g.direction==="recvonly"&&(g.setDirection?g.setDirection("inactive"):g.direction="inactive"):Q.offerToReceiveAudio===!0&&!g&&this.addTransceiver("audio",{direction:"recvonly"}),typeof Q.offerToReceiveVideo<"u"&&(Q.offerToReceiveVideo=!!Q.offerToReceiveVideo);var t=this.getTransceivers().find(function(e){return e.receiver.track.kind==="video"});Q.offerToReceiveVideo===!1&&t?t.direction==="sendrecv"?t.setDirection?t.setDirection("sendonly"):t.direction="sendonly":t.direction==="recvonly"&&(t.setDirection?t.setDirection("inactive"):t.direction="inactive"):Q.offerToReceiveVideo===!0&&!t&&this.addTransceiver("video",{direction:"recvonly"})}return B.apply(this,arguments)}}function wZ(A){fn(A)!=="object"||A.AudioContext||(A.AudioContext=A.webkitAudioContext)}const cZ=A=>{let B=!1,Q;return(...g)=>(B||(Q=A(g),B=!0),Q)};function sE(A,B){if(A===!1)throw new Error(B??"assertion failure")}const rZ=cZ(()=>{const A=Hk(window);switch(A.browser){case"chrome":qk(window,A);break;case"firefox":BZ(window,A);break;case"safari":eZ(window,A);break;default:throw new VM}});let rE={isActive:!1};function rr(){if(rE.isActive){rE.videoEl.src="",rE.videoEl.srcObject=null,rE.videoEl.load();for(const A of rE.stream.getTracks())rE.stream.removeTrack(A),A.stop();rE={isActive:!1}}}async function lZ(A,{constraints:B,torch:Q}){var g,t;if(window.isSecureContext!==!0)throw new yk;if(((g=navigator==null?void 0:navigator.mediaDevices)==null?void 0:g.getUserMedia)===void 0)throw new VM;rZ();const e=await navigator.mediaDevices.getUserMedia({audio:!1,video:B});if(A.srcObject!==void 0?A.srcObject=e:A.mozSrcObject!==void 0?A.mozSrcObject=e:window.URL.createObjectURL?A.src=window.URL.createObjectURL(e):window.webkitURL?A.src=window.webkitURL.createObjectURL(e):A.src=e.id,await Promise.race([OM(A,"loadeddata"),xU(3e3).then(()=>{throw new kk})]),await xU(500),Q){const[I]=e.getVideoTracks();I.getCapabilities().torch?I.applyConstraints({advanced:[{torch:!0}]}):console.warn("device does not support torch capability")}rE={videoEl:A,stream:e,isActive:!0};const[E]=rE.stream.getVideoTracks();return((t=E==null?void 0:E.getCapabilities)==null?void 0:t.call(E))??{}}const FZ=Zg({__name:"QrcodeStream",props:{constraints:{type:Object,default(){return{facingMode:"environment"}}},formats:{type:Array,default:()=>["qr_code"]},paused:{type:Boolean,default:!1},torch:{type:Boolean,default:!1},track:{type:Function}},emits:["detect","camera-on","camera-off","error"],setup(A,{emit:B}){const Q=A,g=zB(),t=zB(),e=zB(),E=zB(!1),I=zB(!1);He(()=>{I.value=!0}),fi(()=>{rr()});const i=cg(()=>({torch:Q.torch,constraints:Q.constraints,shouldStream:I.value&&!Q.paused}));ut(i,async m=>{const N=e.value;sE(N!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus video element should always be defined.");const AA=g.value;sE(AA!==void 0,"cameraSettings watcher should never be triggered when component is not mounted. Thus canvas should always be defined.");const v=AA.getContext("2d");if(sE(v!==null,"if cavnas is defined, canvas 2d context should also be non-null"),m.shouldStream)try{const x=await lZ(N,m);I.value?(E.value=!0,B("camera-on",x)):rr()}catch(x){B("error",x)}else AA.width=N.videoWidth,AA.height=N.videoHeight,v.drawImage(N,0,0,N.videoWidth,N.videoHeight),rr(),E.value=!1,B("camera-off")},{deep:!0});const{formats:a}=ul(Q);ut(a,m=>{I.value&&Zk(m)});const w=cg(()=>i.value.shouldStream&&E.value);ut(w,m=>{if(m){sE(g.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus pause frame canvas is defined"),F(g.value),sE(t.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus tracking canvas is defined"),F(t.value);const N=()=>Q.track===void 0?500:40;sE(e.value!==void 0,"shouldScan watcher should only be triggered when component is mounted. Thus video element is defined"),Lk(e.value,{detectHandler:AA=>B("detect",AA),formats:Q.formats,locateHandler:R,minDelay:N()})}});const F=m=>{const N=m.getContext("2d");sE(N!==null,"canvas 2d context should always be non-null"),N.clearRect(0,0,m.width,m.height)},R=m=>{const N=t.value;sE(N!==void 0,"onLocate handler should only be called when component is mounted. Thus tracking canvas is always defined.");const AA=e.value;if(sE(AA!==void 0,"onLocate handler should only be called when component is mounted. Thus video element is always defined."),m.length===0||Q.track===void 0)F(N);else{const v=AA.offsetWidth,x=AA.offsetHeight,iA=AA.videoWidth,cA=AA.videoHeight,j=Math.max(v/iA,x/cA),$=iA*j,sA=cA*j,DA=$/iA,lA=sA/cA,yA=(v-$)/2,uA=(x-sA)/2,EB=({x:MB,y:wB})=>({x:Math.floor(MB*DA),y:Math.floor(wB*lA)}),XA=({x:MB,y:wB})=>({x:Math.floor(MB+yA),y:Math.floor(wB+uA)}),HA=m.map(MB=>{const{boundingBox:wB,cornerPoints:uB}=MB,{x:RB,y:HB}=XA(EB({x:wB.x,y:wB.y})),{x:GB,y:UB}=EB({x:wB.width,y:wB.height});return{...MB,cornerPoints:uB.map(mA=>XA(EB(mA))),boundingBox:DOMRectReadOnly.fromRect({x:RB,y:HB,width:GB,height:UB})}});N.width=AA.offsetWidth,N.height=AA.offsetHeight;const gB=N.getContext("2d");Q.track(HA,gB)}},h={width:"100%",height:"100%",position:"relative","z-index":"0"},y={width:"100%",height:"100%",position:"absolute",top:"0",left:"0"},p={width:"100%",height:"100%","object-fit":"cover"},M=cg(()=>w.value?p:{...p,visibility:"hidden",position:"absolute"});return(m,N)=>(fB(),TB("div",{style:h},[xA("video",{ref_key:"videoRef",ref:e,style:Mn(M.value),autoplay:"",muted:"",playsinline:""},null,4),Di(xA("canvas",{id:"qrcode-stream-pause-frame",ref_key:"pauseFrameRef",ref:g,style:p},null,512),[[cs,!w.value]]),xA("canvas",{id:"qrcode-stream-tracking-layer",ref_key:"trackingLayerRef",ref:t,style:y},null,512),xA("div",{style:y},[Is(m.$slots,"default")])]))}}),DZ=Zg({__name:"QrcodeCapture",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect"],setup(A,{emit:B}){const Q=A,g=t=>{if(!(!(t.target instanceof HTMLInputElement)||!t.target.files))for(const e of Array.from(t.target.files))xM(e,Q.formats).then(E=>{B("detect",E)})};return(t,e)=>(fB(),TB("input",{onChange:g,type:"file",name:"image",accept:"image/*",capture:"environment",multiple:""},null,32))}}),UZ=["onDrop"],dZ=Zg({__name:"QrcodeDropZone",props:{formats:{type:Array,default:()=>["qr_code"]}},emits:["detect","dragover","error"],setup(A,{emit:B}){const Q=A,g=async E=>{try{const I=await E;B("detect",I)}catch(I){B("error",I)}},t=E=>{B("dragover",E)},e=({dataTransfer:E})=>{if(!E)return;t(!1);const I=[...Array.from(E.files)],i=E.getData("text/uri-list");I.forEach(a=>{g(xM(a))}),i!==""&&g(Sk(i,Q.formats))};return(E,I)=>(fB(),TB("div",{onDrop:SC(e,["prevent","stop"]),onDragenter:I[0]||(I[0]=SC(i=>t(!0),["prevent","stop"])),onDragleave:I[1]||(I[1]=SC(i=>t(!1),["prevent","stop"])),onDragover:I[2]||(I[2]=SC(()=>{},["prevent","stop"]))},[Is(E.$slots,"default")],40,UZ))}});function fZ(A){A.component("qrcode-stream",FZ),A.component("qrcode-capture",DZ),A.component("qrcode-drop-zone",dZ)}const gu={install:fZ};let xo=null;typeof window<"u"?xo=window.Vue:typeof global<"u"&&(xo=global.Vue);xo&&xo.use(gu);var MZ="firebase",uZ="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(MZ,uZ,"app");var el={exports:{}};(function(A,B){(function(Q,g){A.exports=g()})(ee,function(){(function(E){function I(){return new Promise(function(h,y){var p="wss://javascript.info/article/websocket/chat/ws";console.log("[WS]: Start testing"),console.log("[WS]: Connecting to "+p);try{var M=new WebSocket(p);M.onopen=function(m){var N="test-msg";console.log("[WS]: Connection established"),console.log("[WS]: Sending data to socket, msg: "+N),M.send(N)},M.onmessage=function(m){console.log("[WS]: Data received from server: "+m.data),console.log("[WS]: Finish testing - OK"),h()},M.onerror=function(m){console.log("[WS]: ",m.message),console.log("[WS]: Finish testing - ERROR"),y()}}catch(m){console.log("[WS]: ",m),y()}})}function i(){return new Promise(function(h,y){if(console.log("[WebWorker]: Start testing"),typeof Worker<"u"){console.log("[WebWorker]: Has Web Worker support");try{var p=new Worker(window.URL.createObjectURL(new Blob(["onmessage = function(e) {console.log('[WebWorker]: Message received from main script');var workerResult = e.data[0];console.log('[WebWorker]: Posting message back to main script');postMessage(workerResult);}"])));p.onmessage=function(M){console.log("[WebWorker]: Message received from worker: ",M.data),console.log("[WebWorker]: Finish testing - OK"),h()},p.onerror=function(M){console.error("[WebWorker]: Finish testing - ERROR"),y()},p.postMessage(["test-msg"])}catch{console.error("[WebWorker]: Finish testing - ERROR"),y()}}else console.log("[WebWorker]: No Web Worker support"),y()})}function a(){return new Promise(function(h,y){console.log("[ORIGN]: Start testing");var p=window.location.protocol,M=window.location.hostname;p==="https:"||p==="file:"||p==="http:"&&(M.indexOf("localhost")>-1||M.indexOf("127.0.0.1")>-1)?(console.log("[ORIGN]: Secure"),console.log("[ORIGN]: Finish testing - OK"),h()):(console.log("[ORIGN]: Not secure"),console.log("[ORIGN]: Finish testing - ERROR"),y())})}function w(){return new Promise(function(h,y){console.log("[AUDIO CONTEXT]: Start testing");var p=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,M=window.AudioContext||window.webkitAudioContext||window.mozAudioContext;p&&M?(console.log("[AUDIO CONTEXT]: Audio supported"),console.log("[AUDIO CONTEXT]: Finish testing - OK"),h()):(console.log("[AUDIO CONTEXT]: Audio NOT supported"),console.log("[AUDIO CONTEXT DETAILS]:",F()),console.log("[AUDIO CONTEXT]: Finish testing - ERROR"),y())})}function F(){var h="";return h+="getUserMedia: ",h+=navigator.getUserMedia?"1":"0",h+=", ",h+="mediaDevices: ",h+=navigator.mediaDevices?"1":"0",h+=", ",h+="mediaDevices.getUserMedia: ",h+=navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?"1":"0",h+=", ",h+="webkitGUM: ",h+=navigator.webkitGetUserMedia?"1":"0",h+=", ",h+="mozGUM: ",h+=navigator.mozGetUserMedia?"1":"0",h+=", ",h+="msGUM: ",h+=navigator.msGetUserMedia?"1":"0",h+=`
`,h+=`window: 
`,h+="AudioContext: ",h+=window.AudioContext?"1":"0",h+=", ",h+="webkitAC: ",h+=window.webkitAudioContext?"1":"0",h+=", ",h+="mozAC: ",h+=window.mozAudioContext?"1":"0",h+=`
`,h+="userAgent: ",h+=navigator.userAgent,h}function R(){var h=this,y=Object.keys(this);function p(M){return h[M]()}return y=y.filter(M=>M!=="run"&&M!=="getAudioDebugInfo"),y.reduce((M,m)=>M.then(()=>p(m)),Promise.resolve())}E.alanDiagnostic={testSocket:I,testWorker:i,testOrignSecure:a,testAudioContext:w,getAudioDebugInfo:F,run:R}})(window),function(E){var I="studio.alan.app",i={baseURL:"wss://"+(I.indexOf("$")===0||I===""?window.location.hostname:I),codec:"opus",version:"2.0.45",platform:"web"};function a(){var p=this;this._worker=new Worker(window.URL.createObjectURL(new Blob([`(function(ns) {
    'use strict';

    var SENT_TS    = 1;
    var REMOTE_TS  = 2;
    var TIMESTAMP  = 3;
    var AUDIO_DATA = 4;
    var JSON_DATA  = 5;

    AlanFrame.fields = [
        propUint64(SENT_TS,   'sentTs'),
        propUint64(REMOTE_TS, 'remoteTs'),
        propUint64(TIMESTAMP, 'timestamp'),
        propBytes(AUDIO_DATA, 'audioData'),
        propJson(JSON_DATA,   'jsonData'),
    ];

    function AlanFrameProp(type, name, sizeF, readF, writeF) {
        this.type   = type;
        this.name   = name;
        this.sizeF  = sizeF;
        this.writeF = writeF;
        this.readF  = readF;
    }

    function fixedSize(size) {
        return function() {
            return size;
        }
    }

    function bufferSize(buffer) {
        return 4 + byteLength(buffer);
    }

    function writeUIntN(uint8array, value, nBytes, offset) {
        for (var i = 0; i < nBytes; i++ ) {
            uint8array[offset + i] = 0xFF & value;
            value /= 256;
        }
    }

    function readUIntN(uint8array, nBytes, offset) {
        var r = 0;
        for (var i = nBytes - 1; i >= 0; i-- ) {
            r *= 256;
            r += 0xFF & uint8array[offset + i];
        }
        return r;
    }

    function writeUInt64(uint8array, value, offset) {
        writeUIntN(uint8array, value, 8, offset);
    }

    function readUInt64(uint8array, offset) {
        return readUIntN(uint8array, 8, offset);
    }

    function writeUInt32(uint8array, value, offset) {
        writeUIntN(uint8array, value, 4, offset);
    }

    function readUInt32(uint8array, offset) {
        return readUIntN(uint8array, 4, offset);
    }

    function writeBuffer(uint8array, buffer, offset) {
        buffer = toUint8(buffer);
        writeUInt32(uint8array, buffer.length, offset);
        for (var i = 0; i < buffer.length; i++ ) {
            uint8array[offset + 4 + i] = buffer[i];
        }
    }

    function readBuffer(uint8array, offset) {
        var size = readUInt32(uint8array, offset);
        if (size > 1024 * 1024) {
            throw new Error('buffer too big');
        }
        return uint8array.subarray(offset + 4, offset + 4 + size);
    }

    function readUTF8(uint8array, offset) {
        var size = readUInt32(uint8array, offset);
        if (size > 1024 * 1024) {
            throw new Error('string too big');
        }
        return String.fromCharCode.apply(null, uint8array.slice(offset + 4, offset + 4 + size));
    }

    function writeUTF8(uint8array, string, offset) {
        writeUInt32(uint8array, string.length, offset);
        for (var i = 0; i < string.length; i++ ) {
            uint8array[offset + 4 + i] = string.charCodeAt(i);
        }
    }

    function sizeUTF8(string) {
        return 4 + string.length;
    }

    function propUint32(type, name) {
        return new AlanFrameProp(type, name, fixedSize(4), readUInt32, writeUInt32);
    }

    function propUint64(type, name) {
        return new AlanFrameProp(type, name, fixedSize(8), readUInt64, writeUInt64);
    }

    function propBytes(type, name) {
        return new AlanFrameProp(type, name, bufferSize, readBuffer, writeBuffer);
    }

    function propJson(type, name) {
        return new AlanFrameProp(type, name, sizeUTF8, readUTF8, writeUTF8);
    }

    AlanFrame.fieldByType = function(type) {
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var frame = AlanFrame.fields[i];
            if (frame.type === type) {
                return frame;
            }
        }
        throw new Error('invalid field: ' + type);
    };

    function AlanFrame() {
        this.version = 1;
    }

    AlanFrame.prototype.write = function() {
        var result = new Uint8Array(this.writeSize());
        var offset = 1;
        result[0]  = 1;
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var field = AlanFrame.fields[i];
            var value = this[field.name];
            if (value) {
                result[offset++] = field.type;
                field.writeF(result, value, offset);
                offset += field.sizeF(value);
            }
        }
        return result.buffer;
    };

    /**
     * @returns UInt8Array
     */
    AlanFrame.prototype.writeSize = function() {
        var size = 1;
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var field = AlanFrame.fields[i];
            var value = this[field.name];
            if (value) {
                size += 1 + field.sizeF(value);
            }
        }
        return size;
    };

    AlanFrame.prototype.toString = function() {
        var first = true, str = '';
        for (var k in this) {
            if (this.hasOwnProperty(k)) {
                if (first) {
                    str += k + ' = ';
                    first = false;
                } else {
                    str += ', ' + k + ' = ';
                }
                var v = this[k];
                if (typeof(v) === 'object') {
                    str += 'bytes[' + byteLength(v) + ']';
                } else {
                    str += v;
                }
            }
        }
        return str;
    };

    function byteLength(b) {
        if (b instanceof Uint8Array) {
            return b.length;
        }
        if (b instanceof ArrayBuffer) {
            return b.byteLength;
        }
    }

    function toArrayBuffer(buffer) {
        if (buffer instanceof ArrayBuffer) {
            return buffer;
        }
        return buffer.buffer;
    }

    function toUint8(buffer) {
        if (buffer instanceof Uint8Array) {
            return buffer;
        }
        if (buffer instanceof ArrayBuffer) {
            return new Uint8Array(buffer);
        }
        throw new Error('invalid buffer type');
    }

    function parse(uint8array) {
        uint8array = toUint8(uint8array);
        var r = new AlanFrame();
        var offset = 0;
        r.version = uint8array[offset++];
        while (offset < uint8array.length) {
            var frame = AlanFrame.fieldByType(uint8array[offset++]);
            r[frame.name] = frame.readF(uint8array, offset);
            offset += frame.sizeF(r[frame.name]);
        }
        return r;
    }

    ns.create = function() {
        return new AlanFrame();
    };

    ns.parse = parse;

})(typeof(window)            !== 'undefined' ? (function() {window.alanFrame = {}; return window.alanFrame; })() :
   typeof(WorkerGlobalScope) !== 'undefined' ? (function() {alanFrame = {}; return alanFrame; })() :
   exports);


'use strict';



var ALAN_OFF       = 'off';
var ALAN_SPEAKING  = 'speaking';
var ALAN_LISTENING = 'listening';

function ConnectionImpl(config, auth, mode) {
    var _this = this;
    this._config = config;
    this._auth = auth;
    this._mode = mode;
    this._projectId = config.projectId;
    this._url = config.url;
    this._connected = false;
    this._authorized = false;
    this._dialogId = null;
    this._callId = 1;
    this._callSent = {};
    this._callWait = [];
    this._failed = false;
    this._closed = false;
    this._reconnectTimeout = 100;
    this._cleanups = [];
    this._format = null;
    this._formatSent = false;
    this._frameQueue = [];
    this._remoteSentTs = 0;
    this._remoteRecvTs = 0;
    this._rtt = 25;
    this._rttAlpha = 1./16;
    this._alanState = ALAN_OFF;
    this._sendTimer = setInterval(_this._flushQueue.bind(_this), 50);
    this._visualState = {};
    this._addCleanup(function() {clearInterval(_this._sendTimer);});
    this._connect();
    console.log('Alan: connection created');
}

ConnectionImpl.prototype._addCleanup = function(f) {
    this._cleanups.push(f);
};

ConnectionImpl.prototype._onConnectStatus = function(s) {
    console.log('Alan: connection status - ' + s);
    this._fire('connectStatus', s);
};

ConnectionImpl.prototype._fire = function(event, object) {
    if (event === 'options') {
        if (object.versions) {
            object.versions['alanbase:web'] = this._config.version;
        }
    }
    postMessage(['fireEvent', event, object]);
};

ConnectionImpl.prototype._connect = function() {
    var _this = this;
    if (this._socket) {
        console.error('socket is already connected');
        return;
    }
    console.log('Alan: connecting - ' + getConnectionDetails(this._url));
    this._socket = new WebSocket(this._url);
    this._socket.binaryType = 'arraybuffer';
    console.time('Alan: connection time');
    this._socket.onopen = function(e) {
        console.info('Alan: connected');
        _this._connected = true;
        _this._reconnectTimeout = 100;
        _this._fire('connection', {status: 'connected'});
        console.timeEnd('Alan: connection time');
        if (_this._auth) {
            _this._fire('connection', {status: 'authorizing'});
            _this._callAuth();
        } else {
            _this._callWait.forEach(function(c) {  _this._sendCall(c); });
            _this._callWait = [];
        }
    };
    this._socket.onmessage = function(msg) {
        if (msg.data instanceof ArrayBuffer) {
            var f = alanFrame.parse(msg.data);
            if (f.sentTs > 0) {
                _this._remoteSentTs = f.sentTs;
                _this._remoteRecvTs = Date.now();
            } else {
                _this._remoteSentTs = null;
                _this._remoteRecvTs = null;
            }
            var rtt = 0;
            if (f.remoteTs) {
                rtt = Date.now() - f.remoteTs;
            }
            _this._rtt = _this._rttAlpha * rtt  + (1 - _this._rttAlpha) * _this._rtt;
            var uint8 = new Uint8Array(f.audioData);
            var frame = [];
            var batch = 10000;
            for (var offset = 0; offset < uint8.byteLength; offset += batch) {
                var b = uint8.subarray(offset, Math.min(uint8.byteLength, offset + batch));
                let a = String.fromCharCode.apply(null, b);
                frame.push(a);
            }
            frame = frame.join('');
            postMessage(['alanAudio', 'playFrame', frame]);
        } else if (typeof(msg.data) === 'string') {
            msg = JSON.parse(msg.data);
            if (msg.i) {
                var c = _this._callSent[msg.i];
                delete _this._callSent[msg.i];
                if (c && c.callback) {
                    c.callback(msg.e, msg.r);
                }
            } else if (msg.e) {
                if (msg.e === 'text') {
                    postMessage(['alanAudio', 'playText', msg.p]);
                } else if (msg.e === 'afterText') {
                    postMessage(['alanAudio', 'playAfterText', msg.p]);
                } else if (msg.e === 'showPopup') {
                    postMessage(['alanAudio', 'showPopup', msg.p]);
                } else if (msg.e === 'command') {
                    postMessage(['alanAudio', 'playCommand', msg.p]);
                } else if (msg.e === 'inactivity') {
                    postMessage(['alanAudio', 'stop']);
                } else {
                    _this._fire(msg.e, msg.p);
                }
            }
        } else {
            console.error('invalid message type');
        }
    };
    this._socket.onerror = function(evt) {
        console.error('Alan: connection closed due to error: ', evt);
    };
    this._socket.onclose = function(evt) {
        console.info('Alan: connection closed');
        _this._connected = false;
        _this._authorized = false;
        _this._socket = null;
        _this._onConnectStatus('disconnected');
        if (!_this._failed && _this._reconnectTimeout && !_this._closed) {
            console.log('Alan: reconnecting in %s ms.', _this._reconnectTimeout);
            _this._reConnect = setTimeout(_this._connect.bind(_this), _this._reconnectTimeout);
            if (_this._reconnectTimeout < 3000) {
                _this._reconnectTimeout *= 2;
            } else {
                _this._reconnectTimeout += 500;
            }
            _this._reconnectTimeout = Math.min(7000, _this._reconnectTimeout);
        }
    };
    this._addCleanup(function() {
        if (this._socket) {
            this._socket.close();
            this._socket = null;
        }
    });
};

ConnectionImpl.prototype._callAuth = function() {
    var _this = this;
    var callback = function(err, r) {
        if (!err && r.status === 'authorized') {
            _this._authorized = true;
            _this._formatSent = false;
            if (r.dialogId) {
                postMessage(['setDialogId', r.dialogId]);
                _this._dialogId = r.dialogId;
            }
            _this._onAuthorized();
            _this._onConnectStatus('authorized');
        } else if (err === 'auth-failed') {
            _this._onConnectStatus('auth-failed');
            if (_this._socket) {
                _this._socket.close();
                _this._socket = null;
                _this._failed = true;
            }
        } else {
            _this._onConnectStatus('invalid-auth-response');
            console.log('Alan: invalid auth response', err, r);
        }
    };
    var authParam = this._auth;
    authParam.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (this._dialogId) {
        authParam.dialogId = this._dialogId;
    }
    authParam.mode = this._mode;
    this._sendCall({cid: this._callId++, method: '_auth_', callback: callback, param: authParam});
    return this;
};

ConnectionImpl.prototype._sendCall = function(call) {
    this._sendFormatIfNeeded(false);
    this._socket.send(JSON.stringify({i: call.cid, m: call.method, p: call.param}));
    if (call.callback) {
        this._callSent[call.cid] = call;
    }
};

ConnectionImpl.prototype._onAuthorized = function() {
    var _this = this;
    this._callWait.forEach(function(c) {
        _this._sendCall(c);
    });
    this._callWait = [];
};

ConnectionImpl.prototype.close = function() {
    for (var i = 0; i < this._cleanups.length; i++ ) {
        this._cleanups[i]();
    }
    this._cleanups = [];
    this._closed = true;
    
    if (this._socket && (this._socket.readyState === WebSocket.OPEN || this._socket.readyState === WebSocket.CONNECTING)) {
        this._socket.close();
        this._socket = null;
    }
    console.log('Alan: closed connection to: ' + getConnectionDetails(this._url));
    //close(); TODO: delete it!
};

ConnectionImpl.prototype.call = function(cid, method, param) {
    var call = {cid: cid, method: method, param: param, callback: function(err, obj) {
        if (cid) {
            postMessage(['callback', cid, err, obj]);
        }
    }};
    if (this._authorized || this._connected && !this._auth) {
        this._sendCall(call);
    } else {
        this._callWait.push(call);
    }
};

ConnectionImpl.prototype.setVisual = function(state) {
    this._visualState = state;
    this.call(null, '_visual_', state);
};

ConnectionImpl.prototype._sendFrame = function(frame) {
    if (!this._socket) {
        console.error('sendFrame to closed socket');
        return;
    }
    frame.sentTs = Date.now();
    if (this._remoteSentTs > 0 && this._remoteRecvTs > 0) {
        frame.remoteTs = this._remoteSentTs + Date.now() - this._remoteRecvTs;
    }
    this._socket.send(frame.write());
};

ConnectionImpl.prototype._listen = function() {
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({signal: 'listen'});
    this._frameQueue.push(f);
    this._alanState = ALAN_LISTENING;
};

ConnectionImpl.prototype._stopListen = function() {
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({signal: 'stopListen'});
    this._frameQueue.push(f);
    this._alanState = ALAN_OFF;
};

ConnectionImpl.prototype._onAudioFormat = function(format) {
    this._formatSent = false;
    this._format = format;
};

ConnectionImpl.prototype._onMicFrame = function(sampleRate, frame) {
    if (this._alanState === ALAN_SPEAKING) {
        return;
    }
    if (this._alanState === ALAN_OFF) {
        this._listen();
    }
    if (this._alanState !== ALAN_LISTENING) {
        console.error('invalid alan state: ' + this._alanState);
        return;
    }
    this._sendFormatIfNeeded(true);
    var f = alanFrame.create();
    f.audioData = frame;
    this._frameQueue.push(f);
};

ConnectionImpl.prototype._sendFormatIfNeeded = function(inQueue) {
    if (!this._format || this._formatSent) {
        return;
    }
    this._formatSent = true;
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({format: this._format});
    if (inQueue) {
        this._frameQueue.push(f);
    } else {
        this._sendFrame(f);
    }
};

ConnectionImpl.prototype._flushQueue = function() {
    if (!this._socket || !this._connected) {
        var d = 0;
        while (this._frameQueue.length > 100 && !this._frameQueue[0].jsonData) {
            this._frameQueue.shift();
            d++;
        }
        if (d > 0) {
            console.error('dropped: %s, frames', d);
        }
        return;
    }
    while (this._frameQueue.length > 0 && this._socket && this._socket.bufferedAmount < 64 * 1024) {
        this._sendFrame(this._frameQueue.shift());
    }
};

function getConnectionDetails(url){
    var urlParts = url.split('/');
    var projectId = urlParts[4];
    var environment = urlParts[5];
    var host = urlParts[2];

    if (projectId && environment && host) {
        return ' (ProjectID: ' + projectId + ', environment: ' + environment + ', host: ' + host + ')';
    }

    return url;
}

function connectProject(config, auth, mode) {
    var c = new ConnectionImpl(config, auth, mode);
    c.onAudioEvent = function(event, arg1, arg2) {
        if (event === 'format') {
            c._onAudioFormat(arg1);
        } else if (event === 'frame') {
            c._onMicFrame(arg1, arg2);
        } else if (event === 'micStop' || event === 'playStart') {
            c._stopListen();
        } else {
            console.error('unknown audio event: ' + event, arg1, arg2);
        }
    };
    return c;
}

var factories = {
    connectProject: connectProject,
};

var currentConnect = null;

onmessage = function(e) {
    var name = e.data[0];
    try {
        if (!currentConnect) {
            currentConnect = factories[name].apply(null, e.data.slice(1, e.data.length));
        } else {
            currentConnect[name].apply(currentConnect, e.data.slice(1, e.data.length));
        }
    } catch(e) {
        console.error('error calling: ' + name, e);
    }
};
`],{type:"text/javascript"}))),this._worker.onmessage=function(M){if(M.data[0]==="fireEvent"){p._fire(M.data[1],M.data[2]);return}if(M.data[0]==="alanAudio"){if(M.data[1]==="playText"){alanAudio.playText(M.data[2]);return}if(M.data[1]==="playAfterText"){alanAudio.playAfterText(M.data[2]);return}if(M.data[1]==="playAudio"||M.data[1]==="playFrame"){alanAudio.playAudio(M.data[2]);return}if(M.data[1]==="playEvent"||M.data[1]==="playCommand"){alanAudio.playEvent(M.data[2]);return}if(M.data[1]==="showPopup"){alanAudio.showPopup(M.data[2]);return}if(M.data[1]==="stop"){alanAudio.stop();return}}if(M.data[0]==="callback"){p._callback[M.data[1]](M.data[2],M.data[3]),delete p._callback[M.data[1]];return}if(M.data[0]==="setDialogId"){p._dialogId=M.data[1];return}console.error("invalid event",M.data)},this._worker.onerror=function(M){console.error("error in worker: "+M.filename+":"+M.lineno+" - "+M.message)},this._handlers={},this._cleanups=[],this._callback={},this._callIds=1,this._config={}}a.prototype.on=function(p,M){var m=this._handlers[p];m||(m=[],this._handlers[p]=m),m.push(M)},a.prototype.off=function(p,M){var m=this._handlers[p];if(m){var N=m.indexOf(M);N>=0&&m.splice(N,1)}},a.prototype.getSettings=function(){return{server:i.baseURL,projectId:this._config.projectId,dialogId:this._dialogId}},a.prototype.setVisual=function(p){this._worker.postMessage(["setVisual",p])},a.prototype.call=function(p,M,m){var N=null;m&&(N=this._callIds++,this._callback[N]=m),this._worker.postMessage(["call",N,p,M])},a.prototype.close=function(){console.log("closing connection to: "+this._url),this._cleanups.forEach(function(p){p()}),this._worker.postMessage(["close"]),this._worker.terminate()},a.prototype._fire=function(p,M){var m=this._handlers[p];if(m)for(var N=0;N<m.length;N++)m[N](M)},a.prototype._addCleanup=function(p){this._cleanups.push(p)};function w(p,M){var m={};for(var N in M)m[N]=M[N];for(var N in p)m[N]=p[N];return!M||M&&M.platform==null?m.platform=i.platform:m.platform=i.platform+":"+M.platform,!M||M&&M.platformVersion==null?m.platformVersion=i.version:m.platformVersion=i.version+":"+M.platformVersion,M&&M.appName&&(m.appName=M.appName),m}function F(p){return p.match(/^[A-Z0-9]{64}\/(prod|stage|testing)$/gi)}function R(p,M,m,N,AA){var v=new a;if(m&&(i.baseURL="wss://"+m),v._config.projectId=p,v._config.codec=i.codec,v._config.version=i.version,v._config.url=i.baseURL+"/ws_project/"+p,!F(p))throw new Error("Wrong projectId was provided: ",p);v._worker.postMessage(["connectProject",v._config,w(M,AA),N]);function x(j,$){alanAudio.on(j,$),v._addCleanup(function(){alanAudio.off(j,$)})}function iA(j){function $(sA,DA){j==="frame"&&alanAudio.isPlaying()||v._worker.postMessage(["onAudioEvent",j,sA,DA])}x(j,$)}function cA(j){function $(sA){v._fire(j,sA)}x(j,$)}return iA("frame"),iA("micStop"),iA("playStart"),cA("text"),cA("command"),v._worker.postMessage(["onAudioEvent","format",alanAudio.getFormat()]),v}function h(p,M,m,N,AA){var v=new a;if(m&&(i.baseURL="wss://"+m),v._config.projectId=p,v._config.codec=i.codec,v._config.version=i.version,v._config.url=i.baseURL+"/ws_project/"+p,!F(p))throw new Error("Wrong projectId was provided");v._worker.postMessage(["connectProject",v._config,w(M,AA),N]);function x(j,$){alanAudio.on(j,$),v._addCleanup(function(){alanAudio.off(j,$)})}function iA(j){function $(sA,DA){j==="frame"&&alanAudio.isPlaying()||v._worker.postMessage(["onAudioEvent",j,sA,DA])}x(j,$)}function cA(j){function $(sA){v._fire(j,sA)}x(j,$)}return iA("frame"),iA("micStop"),iA("playStart"),cA("text"),cA("command"),v}function y(p,M){var m=new a;return M&&(i.baseURL="wss://"+M),m._config.version=i.version,m._config.url=i.baseURL+"/ws_tutor",m._worker.postMessage(["connectProject",m._config,p]),m}E.alanSDKVersion=i.version,E.alan={sdkVersion:i.version,diagnostic:E.alanDiagnostic,projectTest:h,project:R,tutor:y}}(window),function(E){var I="playIdle",i="playActive",a="playStopped",w=!1,F="micIdle",R="micActive",h="micStopped",y="processingIdle",p="processingActive",M="audioRunning",m={bufferLength:4096,sampleRate:16e3,encoderApplication:2048,encodePCM:!1,micTimeout:4e3};const N=window.URL.createObjectURL(new Blob([`

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// \`/\` should be present at the end if \`scriptDirectory\` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  var ret = tryParseAsDataURI(filename);
  if (ret) {
    return binary ? ret : ret.toString();
  }
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

// end include: node_shell_read.js


  arguments_ = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function shell_read(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];
if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message




var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // 'WebAssembly.Function' constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === 'function') {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ('\0asm')
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import 'e' 'f' (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export 'f' (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at 'e.f'), that it reroutes to an export (at 'f')
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// end include: runtime_stack_check.js
// include: runtime_assertions.js


// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module['preloadedImages'] = {}; // maps url to image data
Module['preloadedAudios'] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = 'file://';

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}

// end include: URIUtils.js
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    var binary = tryParseAsDataURI(file);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw 'sync fetching of the wasm failed: you can preload it to Module[wasmBinary] manually, or emcc.py will do that for you when generating HTML (but not JS)';
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      // Let's not use fetch to get objects over file:// as it's most likely Cordova which doesn't support fetch for file://
      && !isFileURI(wasmBinaryFile)
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw 'failed to load wasm binary file at ' + wasmBinaryFile;
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary(wasmBinaryFile);
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

function instantiateSync(file, info) {
  var instance;
  var module;
  var binary;
  try {
    binary = getBinary(file);
    module = new WebAssembly.Module(binary);
    instance = new WebAssembly.Instance(module, info);
  } catch (e) {
    var str = e.toString();
    err('failed to compile wasm module: ' + str);
    if (str.indexOf('imported Memory') >= 0 ||
        str.indexOf('memory import') >= 0) {
      err('Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time).');
    }
    throw e;
  }
  return [instance, module];
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  var result = instantiateSync(wasmBinaryFile, info);
  receiveInstance(result[0], result[1]);
  return Module['asm']; // exports were assigned here
}

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function callRuntimeCallbacks(callbacks) {
      while(callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[wd_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function _abort() {
      abort();
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function abortOnCannotGrowMemory(requestedSize) {
      abort('OOM');
    }
  function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

  var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },get64:function(low, high) {
        return low;
      }};
  function _fd_close(fd) {
      return 0;
    }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  }

  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      if (typeof _fflush !== 'undefined') _fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }
  function _fd_write(fd, iov, iovcnt, pnum) {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAP32[((pnum)>>2)]=num
      return 0;
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }
var ASSERTIONS = false;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9+/=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {
  if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
    var buf;
    try {
      // TODO: Update Node.js externs, Closure does not recognize the following Buffer.from()
      /**@suppress{checkTypes}*/
      buf = Buffer.from(s, 'base64');
    } catch (_) {
      buf = new Buffer(s, 'base64');
    }
    return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
  }

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}



__ATINIT__.push({ func: function() { ___wasm_call_ctors() } });
var asmLibraryArg = {
  'abort': _abort,
  'emscripten_memcpy_big': _emscripten_memcpy_big,
  'emscripten_resize_heap': _emscripten_resize_heap,
  'fd_close': _fd_close,
  'fd_seek': _fd_seek,
  'fd_write': _fd_write,
  'setTempRet0': _setTempRet0
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module['___wasm_call_ctors'] = asm['__wasm_call_ctors']

/** @type {function(...*):?} */
var _opus_encoder_create = Module['_opus_encoder_create'] = asm['opus_encoder_create']

/** @type {function(...*):?} */
var _opus_encode_float = Module['_opus_encode_float'] = asm['opus_encode_float']

/** @type {function(...*):?} */
var _opus_encoder_ctl = Module['_opus_encoder_ctl'] = asm['opus_encoder_ctl']

/** @type {function(...*):?} */
var _opus_encoder_destroy = Module['_opus_encoder_destroy'] = asm['opus_encoder_destroy']

/** @type {function(...*):?} */
var _speex_resampler_init = Module['_speex_resampler_init'] = asm['speex_resampler_init']

/** @type {function(...*):?} */
var _speex_resampler_destroy = Module['_speex_resampler_destroy'] = asm['speex_resampler_destroy']

/** @type {function(...*):?} */
var _speex_resampler_process_interleaved_float = Module['_speex_resampler_process_interleaved_float'] = asm['speex_resampler_process_interleaved_float']

/** @type {function(...*):?} */
var ___errno_location = Module['___errno_location'] = asm['__errno_location']

/** @type {function(...*):?} */
var stackSave = Module['stackSave'] = asm['stackSave']

/** @type {function(...*):?} */
var stackRestore = Module['stackRestore'] = asm['stackRestore']

/** @type {function(...*):?} */
var stackAlloc = Module['stackAlloc'] = asm['stackAlloc']

/** @type {function(...*):?} */
var _malloc = Module['_malloc'] = asm['malloc']

/** @type {function(...*):?} */
var _free = Module['_free'] = asm['free']

/** @type {function(...*):?} */
var dynCall_jiji = Module['dynCall_jiji'] = asm['dynCall_jiji']





// === Auto-generated postamble setup entry stuff ===



var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = 'ExitStatus';
  this.message = 'Program terminated with exit(' + status + ')';
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;

/** @param {boolean|number=} implicit */
function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
  } else {

    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

noExitRuntime = true;

run();





'use strict';

const OggOpusEncoder = function( config, Module ){
  if ( !Module ) {
    throw new Error('Module with exports required to initialize an encoder instance');
  }

  this.config = Object.assign({ 
    encoderApplication: 2049, // 2048 = Voice (Lower fidelity)
                              // 2049 = Full Band Audio (Highest fidelity)
                              // 2051 = Restricted Low Delay (Lowest latency)
    encoderFrameSize: 20, // Specified in ms.
    encoderSampleRate: 48000, // Desired encoding sample rate. Audio will be resampled
    maxFramesPerPage: 40, // Tradeoff latency with overhead
    numberOfChannels: 1,
    originalSampleRate: 44100,
    resampleQuality: 3,  // Value between 0 and 10 inclusive. 10 being highest quality.
    serial: Math.floor(Math.random() * 4294967296),
    encodeRaw: true,
    encodePCM: false,
  }, config );

  this._opus_encoder_create = Module._opus_encoder_create;
  this._opus_encoder_destroy = Module._opus_encoder_destroy;
  this._opus_encoder_ctl = Module._opus_encoder_ctl;
  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;
  this._speex_resampler_init = Module._speex_resampler_init;
  this._speex_resampler_destroy = Module._speex_resampler_destroy;
  this._opus_encode_float = Module._opus_encode_float;
  this._free = Module._free;
  this._malloc = Module._malloc;
  this.HEAPU8 = Module.HEAPU8;
  this.HEAP32 = Module.HEAP32;
  this.HEAPF32 = Module.HEAPF32;

  this.pageIndex = 0;
  this.granulePosition = 0;
  this.segmentData = new Uint8Array( 65025 ); // Maximum length of oggOpus data
  this.segmentDataIndex = 0;
  this.segmentTable = new Uint8Array( 255 ); // Maximum data segments
  this.segmentTableIndex = 0;
  this.framesInPage = 0;

  this.initChecksumTable();
  this.initCodec();
  this.initResampler();

  //print(\`config = \${JSON.stringify(this.config)}\`);

  if ( this.config.numberOfChannels === 1 ) {
    this.interleave = function( buffers ) { return buffers[0]; };
  }
};

OggOpusEncoder.prototype.encode = function( buffers ) {
    // Determine bufferLength dynamically
    if ( !this.bufferLength ) {
        this.bufferLength = buffers[0].length;
        this.interleavedBuffers = new Float32Array( this.bufferLength * this.config.numberOfChannels );
    }

    var samples = this.interleave(buffers);
    if (this.config.encodePCM) {
        var buff = samples.subarray(0, samples.length).slice(0, samples.length).buffer
        var page = new Uint8Array(buff);
        return [{message: 'page', page: page}];
    }

    var sampleIndex = 0;
    var exportPages = [];

    while ( sampleIndex < samples.length ) {
        var lengthToCopy = Math.min( this.resampleBufferLength - this.resampleBufferIndex, samples.length - sampleIndex );
        this.resampleBuffer.set( samples.subarray( sampleIndex, sampleIndex+lengthToCopy ), this.resampleBufferIndex );
        sampleIndex += lengthToCopy;
        this.resampleBufferIndex += lengthToCopy;

        if ( this.resampleBufferIndex === this.resampleBufferLength ) {
            this._speex_resampler_process_interleaved_float( this.resampler, this.resampleBufferPointer, this.resampleSamplesPerChannelPointer, this.encoderBufferPointer, this.encoderSamplesPerChannelPointer );
            var packetLength = this._opus_encode_float( this.encoder, this.encoderBufferPointer, this.encoderSamplesPerChannel, this.encoderOutputPointer, this.encoderOutputMaxLength );
            if (this.config.encodeRaw) {
                this.resampleBufferIndex = 0;
                if (packetLength > 0) {
                    var page = this.encoderOutputBuffer.subarray(0, packetLength).slice(0, packetLength);
                    exportPages.push({message: 'page', page: page});
                }
            } else {
                exportPages.concat(this.segmentPacket( packetLength ));
                this.resampleBufferIndex = 0;

                this.framesInPage++;
                if ( this.framesInPage >= this.config.maxFramesPerPage ) {
                    exportPages.push( this.generatePage() );
                }
            }
        }
    }
    return exportPages;
};

OggOpusEncoder.prototype.destroy = function() {
  if ( this.encoder ) {
    this._free(this.encoderSamplesPerChannelPointer);
    delete this.encoderSamplesPerChannelPointer;
    this._free(this.encoderBufferPointer);
    delete this.encoderBufferPointer;
    this._free(this.encoderOutputPointer);
    delete this.encoderOutputPointer;
    this._free(this.resampleSamplesPerChannelPointer);
    delete this.resampleSamplesPerChannelPointer;
    this._free(this.resampleBufferPointer);
    delete this.resampleBufferPointer;
    this._speex_resampler_destroy(this.resampler);
    delete this.resampler;
    this._opus_encoder_destroy(this.encoder);
    delete this.encoder;
  }
};

OggOpusEncoder.prototype.flush = function() {
  if (this.config.encodeRaw) {
    this.resampleBufferIndex = 0;	  
    return [];
  }
  var exportPage;
  if ( this.framesInPage ) {
    exportPage = this.generatePage();
  }
  // discard any pending data in resample buffer (only a few ms worth)
  this.resampleBufferIndex = 0;
  return exportPage;
};

OggOpusEncoder.prototype.encodeFinalFrame = function() {
  const exportPages = [];

  // Encode the data remaining in the resample buffer.
  if ( this.resampleBufferIndex > 0 ) {
    const dataToFill = (this.resampleBufferLength - this.resampleBufferIndex) / this.config.numberOfChannels;
    const numBuffers = Math.ceil(dataToFill / this.bufferLength);

    for ( var i = 0; i < numBuffers; i++ ) { 
      var finalFrameBuffers = [];
      for ( var j = 0; j < this.config.numberOfChannels; j++ ) {
        finalFrameBuffers.push( new Float32Array( this.bufferLength ));
      }
      exportPages.concat(this.encode( finalFrameBuffers ));
    }
  }
  if (this.config.encodeRaw) {
	return exportPages;
  }

  this.headerType += 4;
  exportPages.push(this.generatePage());
  return exportPages;
};

OggOpusEncoder.prototype.getChecksum = function( data ){
  var checksum = 0;
  for ( var i = 0; i < data.length; i++ ) {
    checksum = (checksum << 8) ^ this.checksumTable[ ((checksum>>>24) & 0xff) ^ data[i] ];
  }
  return checksum >>> 0;
};

OggOpusEncoder.prototype.generateCommentPage = function(){
  var segmentDataView = new DataView( this.segmentData.buffer );
  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'
  segmentDataView.setUint32( 4, 1936154964, true ) // Magic Signature 'Tags'
  segmentDataView.setUint32( 8, 10, true ); // Vendor Length
  segmentDataView.setUint32( 12, 1868784978, true ); // Vendor name 'Reco'
  segmentDataView.setUint32( 16, 1919247474, true ); // Vendor name 'rder'
  segmentDataView.setUint16( 20, 21322, true ); // Vendor name 'JS'
  segmentDataView.setUint32( 22, 0, true ); // User Comment List Length
  this.segmentTableIndex = 1;
  this.segmentDataIndex = this.segmentTable[0] = 26;
  this.headerType = 0;
  return this.generatePage();
};

OggOpusEncoder.prototype.generateIdPage = function(){
  var segmentDataView = new DataView( this.segmentData.buffer );
  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'
  segmentDataView.setUint32( 4, 1684104520, true ) // Magic Signature 'Head'
  segmentDataView.setUint8( 8, 1, true ); // Version
  segmentDataView.setUint8( 9, this.config.numberOfChannels, true ); // Channel count
  segmentDataView.setUint16( 10, 3840, true ); // pre-skip (80ms)
  segmentDataView.setUint32( 12, this.config.originalSampleRateOverride || this.config.originalSampleRate, true ); // original sample rate
  segmentDataView.setUint16( 16, 0, true ); // output gain
  segmentDataView.setUint8( 18, 0, true ); // channel map 0 = mono or stereo
  this.segmentTableIndex = 1;
  this.segmentDataIndex = this.segmentTable[0] = 19;
  this.headerType = 2;
  return this.generatePage();
};

OggOpusEncoder.prototype.generatePage = function(){
  var granulePosition = ( this.lastPositiveGranulePosition === this.granulePosition) ? -1 : this.granulePosition;
  var pageBuffer = new ArrayBuffer(  27 + this.segmentTableIndex + this.segmentDataIndex );
  var pageBufferView = new DataView( pageBuffer );
  var page = new Uint8Array( pageBuffer );

  pageBufferView.setUint32( 0, 1399285583, true); // Capture Pattern starts all page headers 'OggS'
  pageBufferView.setUint8( 4, 0, true ); // Version
  pageBufferView.setUint8( 5, this.headerType, true ); // 1 = continuation, 2 = beginning of stream, 4 = end of stream

  // Number of samples upto and including this page at 48000Hz, into signed 64 bit Little Endian integer
  // Javascript Number maximum value is 53 bits or 2^53 - 1 
  pageBufferView.setUint32( 6, granulePosition, true );
  if (granulePosition < 0) {
    pageBufferView.setInt32( 10, Math.ceil(granulePosition/4294967297) - 1, true );
  }
  else {
    pageBufferView.setInt32( 10, Math.floor(granulePosition/4294967296), true );
  }

  pageBufferView.setUint32( 14, this.config.serial, true ); // Bitstream serial number
  pageBufferView.setUint32( 18, this.pageIndex++, true ); // Page sequence number
  pageBufferView.setUint8( 26, this.segmentTableIndex, true ); // Number of segments in page.
  page.set( this.segmentTable.subarray(0, this.segmentTableIndex), 27 ); // Segment Table
  page.set( this.segmentData.subarray(0, this.segmentDataIndex), 27 + this.segmentTableIndex ); // Segment Data
  pageBufferView.setUint32( 22, this.getChecksum( page ), true ); // Checksum

  var exportPage = { message: 'page', page: page, samplePosition: this.granulePosition };
  this.segmentTableIndex = 0;
  this.segmentDataIndex = 0;
  this.framesInPage = 0;
  if ( granulePosition > 0 ) {
    this.lastPositiveGranulePosition = granulePosition;
  }

  return exportPage;
};

OggOpusEncoder.prototype.initChecksumTable = function(){
  this.checksumTable = [];
  for ( var i = 0; i < 256; i++ ) {
    var r = i << 24;
    for ( var j = 0; j < 8; j++ ) {
      r = ((r & 0x80000000) != 0) ? ((r << 1) ^ 0x04c11db7) : (r << 1);
    }
    this.checksumTable[i] = (r & 0xffffffff);
  }
};

OggOpusEncoder.prototype.setOpusControl = function( control, value ){
  var location = this._malloc( 4 );
  this.HEAP32[ location >> 2 ] = value;
  this._opus_encoder_ctl( this.encoder, control, location );
  this._free( location );
};

OggOpusEncoder.prototype.initCodec = function() {
  var errLocation = this._malloc( 4 );
  this.encoder = this._opus_encoder_create( this.config.encoderSampleRate, this.config.numberOfChannels, this.config.encoderApplication, errLocation );
  this._free( errLocation );

  if ( this.config.encoderBitRate ) {
    this.setOpusControl( 4002, this.config.encoderBitRate );
  }

  if ( this.config.encoderComplexity ) {
    this.setOpusControl( 4010, this.config.encoderComplexity );
  }

  this.encoderSamplesPerChannel = this.config.encoderSampleRate * this.config.encoderFrameSize / 1000;
  this.encoderSamplesPerChannelPointer = this._malloc( 4 );
  this.HEAP32[ this.encoderSamplesPerChannelPointer >> 2 ] = this.encoderSamplesPerChannel;

  this.encoderBufferLength = this.encoderSamplesPerChannel * this.config.numberOfChannels;
  this.encoderBufferPointer = this._malloc( this.encoderBufferLength * 4 ); // 4 bytes per sample
  this.encoderBuffer = this.HEAPF32.subarray( this.encoderBufferPointer >> 2, (this.encoderBufferPointer >> 2) + this.encoderBufferLength );

  this.encoderOutputMaxLength = 4000;
  this.encoderOutputPointer = this._malloc( this.encoderOutputMaxLength );
  this.encoderOutputBuffer = this.HEAPU8.subarray( this.encoderOutputPointer, this.encoderOutputPointer + this.encoderOutputMaxLength );
};

OggOpusEncoder.prototype.initResampler = function() {
  var errLocation = this._malloc( 4 );
  this.resampler = this._speex_resampler_init( this.config.numberOfChannels, this.config.originalSampleRate, this.config.encoderSampleRate, this.config.resampleQuality, errLocation );
  this._free( errLocation );

  this.resampleBufferIndex = 0;
  this.resampleSamplesPerChannel = this.config.originalSampleRate * this.config.encoderFrameSize / 1000;
  this.resampleSamplesPerChannelPointer = this._malloc( 4 );
  this.HEAP32[ this.resampleSamplesPerChannelPointer >> 2 ] = this.resampleSamplesPerChannel;

  this.resampleBufferLength = this.resampleSamplesPerChannel * this.config.numberOfChannels;
  this.resampleBufferPointer = this._malloc( this.resampleBufferLength * 4 ); // 4 bytes per sample
  this.resampleBuffer = this.HEAPF32.subarray( this.resampleBufferPointer >> 2, (this.resampleBufferPointer >> 2) + this.resampleBufferLength );
};

OggOpusEncoder.prototype.interleave = function( buffers ) {
  for ( var i = 0; i < this.bufferLength; i++ ) {
    for ( var channel = 0; channel < this.config.numberOfChannels; channel++ ) {
      this.interleavedBuffers[ i * this.config.numberOfChannels + channel ] = buffers[ channel ][ i ];
    }
  }

  return this.interleavedBuffers;
};

OggOpusEncoder.prototype.segmentPacket = function( packetLength ) {
  var packetIndex = 0;
  var exportPages = [];

  while ( packetLength >= 0 ) {

    if ( this.segmentTableIndex === 255 ) {
      exportPages.push( this.generatePage() );
      this.headerType = 1;
    }

    var segmentLength = Math.min( packetLength, 255 );
    this.segmentTable[ this.segmentTableIndex++ ] = segmentLength;
    this.segmentData.set( this.encoderOutputBuffer.subarray( packetIndex, packetIndex + segmentLength ), this.segmentDataIndex );
    this.segmentDataIndex += segmentLength;
    packetIndex += segmentLength;
    packetLength -= 255;
  }

  this.granulePosition += ( 48 * this.config.encoderFrameSize );
  if ( this.segmentTableIndex === 255 ) {
    exportPages.push( this.generatePage() );
    this.headerType = 0;
  }

  return exportPages;
};

var print = ()=> {};

// Run in AudioWorkletGlobal scope
if (typeof registerProcessor === 'function') {

  class EncoderWorklet extends AudioWorkletProcessor {

    constructor(){
      super();
      print = (text)=> {
          this.port.postMessage( {message: 'print', text: text} );
      };
      this.continueProcess = true;
      this.port.onmessage = ({ data }) => {
        if (this.encoder) {
          switch( data['command'] ){
            case 'getHeaderPages':
			  if (!this.encoder.config.encodeRaw) {
			    this.postPage(this.encoder.generateIdPage());
	            this.postPage(this.encoder.generateCommentPage());
			  }
              break;

            case 'done':
              this.encoder.encodeFinalFrame().forEach(pageData => this.postPage(pageData));
              this.encoder.destroy();
              delete this.encoder;
              this.port.postMessage( {message: 'done'} );
              break;

            case 'flush':
              this.postPage(this.encoder.flush());
              this.port.postMessage( {message: 'flushed'} );
              break;

            default:
              // Ignore any unknown commands and continue recieving commands
          }
        }

        switch( data['command'] ){

          case 'close':
            this.continueProcess = false;
            break;

          case 'init':
            this.encoder = new OggOpusEncoder( data, Module );
            this.port.postMessage( {message: 'ready'} );
            break;

          default:
            // Ignore any unknown commands and continue recieving commands
        }
      }
    }

    process(inputs) {
      if (this.encoder && inputs[0] && inputs[0].length && inputs[0][0] && inputs[0][0].length){
        this.encoder.encode( inputs[0] ).forEach(pageData => this.postPage(pageData));
      }
      return this.continueProcess;
    }

    postPage(pageData) {
      if (pageData) {
        this.port.postMessage( pageData, [pageData.page.buffer] );
      }
    }
  }

  registerProcessor('encoder-worklet', EncoderWorklet);
}

// run in scriptProcessor worker scope
else {
  var encoder;
  var postPageGlobal = (pageData) => {
    if (pageData) {
      postMessage( pageData, [pageData.page.buffer] );
    }
  }
    print = (text)=> {
        postMessage({message: 'print', text: text} );
    };

  onmessage = ({ data }) => {
    if (encoder) {
      switch( data['command'] ){

        case 'encode':
          encoder.encode( data['buffers'] ).forEach(pageData => postPageGlobal(pageData));
          break;

        case 'getHeaderPages':
          postPageGlobal(encoder.generateIdPage());
          postPageGlobal(encoder.generateCommentPage());
          break;

        case 'done':
          encoder.encodeFinalFrame().forEach(pageData => postPageGlobal(pageData));
          encoder.destroy();
          encoder = null;
          postMessage( {message: 'done'} );
          break;

        case 'flush':
          postPageGlobal(encoder.flush());
          postMessage( {message: 'flushed'} );
          break;

        default:
          // Ignore any unknown commands and continue recieving commands
      }
    }

    switch( data['command'] ){

      case 'close':
        close();
        break;

      case 'init':
        encoder = new OggOpusEncoder( data, Module );
        postMessage( {message: 'ready'} );
        break;

      default:
        // Ignore any unknown commands and continue recieving commands
    }
  };
}


// Exports for unit testing.
var module = module || {};
module.exports = {
  Module: Module,
  OggOpusEncoder: OggOpusEncoder
};

`],{type:"text/javascript"})),AA=v(N);function v(QA){const YA=`importScripts( "${QA}" );`;return URL.createObjectURL(new Blob([YA],{type:"text/javascript"}))}var x=new Worker(AA);URL.revokeObjectURL(AA);var iA={},cA=h,j=a,$=y,sA=[],DA=null,lA=null,yA=window.AudioContext||window.webkitAudioContext,uA=null,EB=!1,XA=!!document.documentMode,HA=!XA&&!!window.StyleMedia,gB=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),MB=navigator.userAgent.match(/safari/i)&&navigator.vendor.match(/apple/i)&&navigator.maxTouchPoints;HA||gB?lA=new yA({sampleRate:m.sampleRate}):lA=new yA,lA.resume().then(()=>aA(M));var wB=null,uB=null,RB=lA.createGain(),HB=lA.createGain();HB.gain.value=1;var GB=null,UB=lA.createScriptProcessor(m.bufferLength,1,1);UB.onaudioprocess=({inputBuffer:QA})=>ZA(QA),UB.connect(lA.destination),x.start&&x.start();var mA=({data:QA})=>{switch(QA.message){case"ready":console.log("Alan: audio worker initialized");break;case"page":j!==i&&$!==p&&aA("frame",m.sampleRate,QA.page);break;case"done":x.removeEventListener("message",mA);break;case"print":console.log("AUDIO-WORKER",QA.text);break}};x.addEventListener("message",mA),x.postMessage({command:"init",originalSampleRate:lA.sampleRate,encoderSampleRate:m.sampleRate,encoderApplication:m.encoderApplication,encodePCM:m.encodePCM});function z(){return uB?Promise.resolve(uB):navigator.mediaDevices.getUserMedia({audio:!0}).then(QA=>{aA("micAllowed"),wB=QA,uB=lA.createMediaStreamSource(QA),uB.connect(RB),RB.connect(UB)})}function ZA(QA){if(!(cA!==R||j===i||EB)){var YA=[QA.getChannelData(0)];x.postMessage({command:"encode",buffers:YA})}}function IA(){j=I,nA(!0)}function bA(){return DA||(DA=document.createElement("audio"),DA.addEventListener("ended",function(){IA()}),document.body.appendChild(DA),DA.setAttribute("autoplay","true"),DA)}function EA(QA){for(var YA=window.atob(QA),SA=YA.length,TA=new Uint8Array(SA),KA=0;KA<SA;KA++)TA[KA]=YA.charCodeAt(KA);return TA.buffer}function L(QA){if($=y,MB){const SA="data:audio/mpeg;base64,";QA.startsWith(SA)&&(QA=QA.substring(SA.length));var YA=EA(QA);lA.decodeAudioData(YA,TA=>{GB=lA.createBufferSource(),GB.addEventListener("ended",KA=>IA()),GB.connect(RB),GB.connect(HB),HB.connect(lA.destination),GB.loop=!1,GB.buffer=TA,GB.start(0)},TA=>console.error(`Error with decoding audio data: ${TA.err}`))}else bA().muted=!1,bA().setAttribute("src",QA)}function H(){MB?GB&&GB.stop():DA&&(DA.pause(),DA.currentTime=0,DA.src="")}function K(){MB||bA().setAttribute("src",""),rA()}function nA(QA){if(lA.state!=="suspended"&&(QA&&!sA.length&&K(),!(!sA.length||j===i))){for(;sA.length&&j!==i;){var YA=sA.shift();YA.event?aA("command",YA.event):YA.text?aA("text",YA.text):YA.afterText?aA("afterText",YA.afterText):YA.popup?aA("popup",YA.popup):YA.audio?(w||cA!==h)&&(j=i,aA("playStart"),L(YA.audio)):console.error("invalid queue item")}QA&&j!==i&&rA()}}function rA(){aA("playStop")}function aA(QA,YA,SA){var TA=iA[QA];if(TA)for(var KA=0;KA<TA.length;KA++)TA[KA](YA,SA)}E.getFormat=function(){return{send:{codec:"opus",sampleRate:16e3},recv:{codec:"mp3;base64",sampleRate:16e3}}},E.isAudioRunning=function(){return lA&&lA.state==="running"},E.isPlaying=function(){return j===i},E.enableVoice=function(){w=!0,bA().muted=!1},E.disableVoice=function(){w=!1,bA().muted=!0},E.setProcessingState=function(){$=p},E.playText=function(QA){QA&&QA.ctx&&QA.ctx.opts&&QA.ctx.opts.force===!0?aA("text",QA):lA.resume().then(()=>{sA.push({text:QA}),nA()})},E.playAfterText=function(QA){lA.resume().then(()=>{sA.push({afterText:QA}),nA()})},E.playCommand=function(QA){lA.resume().then(()=>{sA.push({event:QA}),nA()})},E.showPopup=function(QA){QA.popup.force?aA("popup",QA):lA.resume().then(()=>{sA.push({popup:QA}),nA()})},E.playEvent=function(QA){E.playCommand(QA)},E.playAudio=function(QA){lA.resume().then(()=>{sA.push({audio:QA}),nA()})},E.on=function(QA,YA){var SA=iA[QA];SA==null?iA[QA]=[YA]:SA.push(YA)},E.off=function(QA,YA){var SA=iA[QA];if(SA){var TA=SA.indexOf(YA);TA>=0&&SA.splice(TA,1)}},E.resumeAudioCtx=function(){lA.resume()};var oA=!1;function MA(QA){oA=QA}E.isMicAllowed=function(){return oA},E.start=function(QA){uA&&(clearTimeout(uA),uA=null),$=y,bA().setAttribute("src",""),j=I,z().then(()=>{cA=R,aA("micStart")}).then(()=>{MA(!0),MB||lA.resume()}).catch(YA=>{aA("micFail",YA)}),QA&&(QA(),QA=null)},E.stop=function(){uB&&(cA=F),uA&&(clearTimeout(uA),uA=null),uA=setTimeout(CA,m.micTimeout),aA("micStop"),j=a,sA=[],H()},E.skipExternalSounds=function(QA){EB=QA};function CA(){console.log("stopping the mic."),cA=h,uB&&(uB.disconnect(),uB=null),RB.disconnect(),wB&&(wB.getTracks?wB.getTracks().forEach(QA=>QA.stop()):wB.stop(),wB=null)}}(typeof window<"u"?function(){return window.alanAudio={},window.alanAudio}():B);var Q=this&&this.__assign||function(){return Q=Object.assign||function(E){for(var I,i=1,a=arguments.length;i<a;i++){I=arguments[i];for(var w in I)Object.prototype.hasOwnProperty.call(I,w)&&(E[w]=I[w])}return E},Q.apply(this,arguments)},g=this&&this.__awaiter||function(E,I,i,a){function w(F){return F instanceof i?F:new i(function(R){R(F)})}return new(i||(i=Promise))(function(F,R){function h(M){try{p(a.next(M))}catch(m){R(m)}}function y(M){try{p(a.throw(M))}catch(m){R(m)}}function p(M){M.done?F(M.value):w(M.value).then(h,y)}p((a=a.apply(E,I||[])).next())})},t=this&&this.__generator||function(E,I){var i={label:0,sent:function(){if(F[0]&1)throw F[1];return F[1]},trys:[],ops:[]},a,w,F,R;return R={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(R[Symbol.iterator]=function(){return this}),R;function h(p){return function(M){return y([p,M])}}function y(p){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,w&&(F=p[0]&2?w.return:p[0]?w.throw||((F=w.return)&&F.call(w),0):w.next)&&!(F=F.call(w,p[1])).done)return F;switch(w=0,F&&(p=[p[0]&2,F.value]),p[0]){case 0:case 1:F=p;break;case 4:return i.label++,{value:p[1],done:!1};case 5:i.label++,w=p[1],p=[0];continue;case 7:p=i.ops.pop(),i.trys.pop();continue;default:if(F=i.trys,!(F=F.length>0&&F[F.length-1])&&(p[0]===6||p[0]===2)){i=0;continue}if(p[0]===3&&(!F||p[1]>F[0]&&p[1]<F[3])){i.label=p[1];break}if(p[0]===6&&i.label<F[1]){i.label=F[1],F=p;break}if(F&&i.label<F[2]){i.label=F[2],i.ops.push(p);break}F[2]&&i.ops.pop(),i.trys.pop();continue}p=I.call(E,i)}catch(M){p=[6,M],w=0}finally{a=F=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}},e=this&&this.__spreadArray||function(E,I,i){if(i||arguments.length===2)for(var a=0,w=I.length,F;a<w;a++)(F||!(a in I))&&(F||(F=Array.prototype.slice.call(I,0,a)),F[a]=I[a]);return E.concat(F||Array.prototype.slice.call(I))};return function(){var E=Object.defineProperty,I=function(k,U,d){return U in k?E(k,U,{enumerable:!0,configurable:!0,writable:!0,value:d}):k[U]=d},i=function(k,U,d){return I(k,typeof U!="symbol"?U+"":U,d),d};function a(){return'<div class="alan-btn__chat-incomming-msg-wrapper"> <div class="alan-btn__chat-incomming-msg msg-1">&nbsp;</div> <div class="alan-btn__chat-incomming-msg msg-2">&nbsp;</div> <div class="alan-btn__chat-incomming-msg msg-3">&nbsp;</div>  </div>'}function w(k){var U;return((U=k.ctx)===null||U===void 0?void 0:U.final)!==!1}function F(k){return k.initLoad||w(k)?"":'<div style="margin-top: 12px;margin-bottom: 12px;">'.concat(a(),"</div>")}function R(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var h=R();function y(k){h=k}var p=/[&<>"']/,M=new RegExp(p.source,"g"),m=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,N=new RegExp(m.source,"g"),AA={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},v=function(k){return AA[k]};function x(k,U){if(U){if(p.test(k))return k.replace(M,v)}else if(m.test(k))return k.replace(N,v);return k}var iA=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function cA(k){return k.replace(iA,function(U,d){return d=d.toLowerCase(),d==="colon"?":":d.charAt(0)==="#"?d.charAt(1)==="x"?String.fromCharCode(parseInt(d.substring(2),16)):String.fromCharCode(+d.substring(1)):""})}var j=/(^|[^\[])\^/g;function $(k,U){k=typeof k=="string"?k:k.source,U=U||"";var d={replace:function(G,b){return b=b.source||b,b=b.replace(j,"$1"),k=k.replace(G,b),d},getRegex:function(){return new RegExp(k,U)}};return d}var sA=/[^\w:]/g,DA=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function lA(k,U,d){if(k){var G=void 0;try{G=decodeURIComponent(cA(d)).replace(sA,"").toLowerCase()}catch{return null}if(G.indexOf("javascript:")===0||G.indexOf("vbscript:")===0||G.indexOf("data:")===0)return null}U&&!DA.test(d)&&(d=HA(U,d));try{d=encodeURI(d).replace(/%25/g,"%")}catch{return null}return d}var yA={},uA=/^[^:]+:\/*[^/]*$/,EB=/^([^:]+:)[\s\S]*$/,XA=/^([^:]+:\/*[^/]*)[\s\S]*$/;function HA(k,U){yA[" "+k]||(uA.test(k)?yA[" "+k]=k+"/":yA[" "+k]=wB(k,"/",!0)),k=yA[" "+k];var d=k.indexOf(":")===-1;return U.substring(0,2)==="//"?d?U:k.replace(EB,"$1")+U:U.charAt(0)==="/"?d?U:k.replace(XA,"$1")+U:k+U}var gB={exec:function(){}};function MB(k,U){var d=k.replace(/\|/g,function(q,dA,wA){for(var pA=!1,GA=dA;--GA>=0&&wA[GA]==="\\";)pA=!pA;return pA?"|":" |"}),G=d.split(/ \|/),b=0;if(G[0].trim()||G.shift(),G.length>0&&!G[G.length-1].trim()&&G.pop(),G.length>U)G.splice(U);else for(;G.length<U;)G.push("");for(;b<G.length;b++)G[b]=G[b].trim().replace(/\\\|/g,"|");return G}function wB(k,U,d){var G=k.length;if(G===0)return"";for(var b=0;b<G;){var q=k.charAt(G-b-1);if(q===U&&!d)b++;else if(q!==U&&d)b++;else break}return k.slice(0,G-b)}function uB(k,U){if(k.indexOf(U[1])===-1)return-1;for(var d=k.length,G=0,b=0;b<d;b++)if(k[b]==="\\")b++;else if(k[b]===U[0])G++;else if(k[b]===U[1]&&(G--,G<0))return b;return-1}function RB(k,U){!k||k.silent||(U&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(k.sanitize||k.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(k.highlight||k.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),k.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),k.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),k.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),k.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(k.headerIds||k.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function HB(k,U,d,G){var b=U.href,q=U.title?x(U.title):null,dA=k[1].replace(/\\([\[\]])/g,"$1");if(k[0].charAt(0)!=="!"){G.state.inLink=!0;var wA={type:"link",raw:d,href:b,title:q,text:dA,tokens:G.inlineTokens(dA)};return G.state.inLink=!1,wA}return{type:"image",raw:d,href:b,title:q,text:x(dA)}}function GB(k,U){var d=k.match(/^(\s+)(?:```)/);if(d===null)return U;var G=d[1];return U.split(`
`).map(function(b){var q=b.match(/^\s+/);if(q===null)return b;var dA=q[0];return dA.length>=G.length?b.slice(G.length):b}).join(`
`)}var UB=function(){function k(U){this.options=U||h}return k.prototype.space=function(U){var d=this.rules.block.newline.exec(U);if(d&&d[0].length>0)return{type:"space",raw:d[0]}},k.prototype.code=function(U){var d=this.rules.block.code.exec(U);if(d){var G=d[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:d[0],codeBlockStyle:"indented",text:this.options.pedantic?G:wB(G,`
`)}}},k.prototype.fences=function(U){var d=this.rules.block.fences.exec(U);if(d){var G=d[0],b=GB(G,d[3]||"");return{type:"code",raw:G,lang:d[2]?d[2].trim().replace(this.rules.inline._escapes,"$1"):d[2],text:b}}},k.prototype.heading=function(U){var d=this.rules.block.heading.exec(U);if(d){var G=d[2].trim();if(/#$/.test(G)){var b=wB(G,"#");(this.options.pedantic||!b||/ $/.test(b))&&(G=b.trim())}return{type:"heading",raw:d[0],depth:d[1].length,text:G,tokens:this.lexer.inline(G)}}},k.prototype.hr=function(U){var d=this.rules.block.hr.exec(U);if(d)return{type:"hr",raw:d[0]}},k.prototype.blockquote=function(U){var d=this.rules.block.blockquote.exec(U);if(d){var G=d[0].replace(/^ *>[ \t]?/gm,""),b=this.lexer.state.top;this.lexer.state.top=!0;var q=this.lexer.blockTokens(G);return this.lexer.state.top=b,{type:"blockquote",raw:d[0],tokens:q,text:G}}},k.prototype.list=function(U){var d=this.rules.block.list.exec(U);if(d){var G=void 0,b=void 0,q=void 0,dA=void 0,wA=void 0,pA=void 0,GA=void 0,qA=void 0,AB=void 0,CB=void 0,gA=void 0,BB=void 0,_=d[1].trim(),QB=_.length>1,LA={type:"list",raw:"",ordered:QB,start:QB?+_.slice(0,-1):"",loose:!1,items:[]};_=QB?"\\d{1,9}\\".concat(_.slice(-1)):"\\".concat(_),this.options.pedantic&&(_=QB?_:"[*+-]");for(var vB=new RegExp("^( {0,3}".concat(_,")((?:[	 ][^\\n]*)?(?:\\n|$))"));U&&(BB=!1,!(!(d=vB.exec(U))||this.rules.block.hr.test(U)));){if(G=d[0],U=U.substring(G.length),qA=d[2].split(`
`,1)[0].replace(/^\t+/,function(ZB){return" ".repeat(3*ZB.length)}),AB=U.split(`
`,1)[0],this.options.pedantic?(dA=2,gA=qA.trimLeft()):(dA=d[2].search(/[^ ]/),dA=dA>4?1:dA,gA=qA.slice(dA),dA+=d[1].length),pA=!1,!qA&&/^ *$/.test(AB)&&(G+=AB+`
`,U=U.substring(AB.length+1),BB=!0),!BB)for(var PB=new RegExp("^ {0,".concat(Math.min(3,dA-1),"}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))")),lg=new RegExp("^ {0,".concat(Math.min(3,dA-1),"}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)")),BQ=new RegExp("^ {0,".concat(Math.min(3,dA-1),"}(?:```|~~~)")),eg=new RegExp("^ {0,".concat(Math.min(3,dA-1),"}#"));U&&(CB=U.split(`
`,1)[0],AB=CB,this.options.pedantic&&(AB=AB.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(BQ.test(AB)||eg.test(AB)||PB.test(AB)||lg.test(U)));){if(AB.search(/[^ ]/)>=dA||!AB.trim())gA+=`
`+AB.slice(dA);else{if(pA||qA.search(/[^ ]/)>=4||BQ.test(qA)||eg.test(qA)||lg.test(qA))break;gA+=`
`+AB}!pA&&!AB.trim()&&(pA=!0),G+=CB+`
`,U=U.substring(CB.length+1),qA=AB.slice(dA)}LA.loose||(GA?LA.loose=!0:/\n *\n *$/.test(G)&&(GA=!0)),this.options.gfm&&(b=/^\[[ xX]\] /.exec(gA),b&&(q=b[0]!=="[ ] ",gA=gA.replace(/^\[[ xX]\] +/,""))),LA.items.push({type:"list_item",raw:G,task:!!b,checked:q,loose:!1,text:gA}),LA.raw+=G}LA.items[LA.items.length-1].raw=G.trimRight(),LA.items[LA.items.length-1].text=gA.trimRight(),LA.raw=LA.raw.trimRight();var RQ=LA.items.length;for(wA=0;wA<RQ;wA++)if(this.lexer.state.top=!1,LA.items[wA].tokens=this.lexer.blockTokens(LA.items[wA].text,[]),!LA.loose){var MQ=LA.items[wA].tokens.filter(function(ZB){return ZB.type==="space"}),$g=MQ.length>0&&MQ.some(function(ZB){return/\n.*\n/.test(ZB.raw)});LA.loose=$g}if(LA.loose)for(wA=0;wA<RQ;wA++)LA.items[wA].loose=!0;return LA}},k.prototype.html=function(U){var d=this.rules.block.html.exec(U);if(d){var G={type:"html",block:!0,raw:d[0],pre:!this.options.sanitizer&&(d[1]==="pre"||d[1]==="script"||d[1]==="style"),text:d[0]};if(this.options.sanitize){var b=this.options.sanitizer?this.options.sanitizer(d[0]):x(d[0]);G.type="paragraph",G.text=b,G.tokens=this.lexer.inline(b)}return G}},k.prototype.def=function(U){var d=this.rules.block.def.exec(U);if(d){var G=d[1].toLowerCase().replace(/\s+/g," "),b=d[2]?d[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",q=d[3]?d[3].substring(1,d[3].length-1).replace(this.rules.inline._escapes,"$1"):d[3];return{type:"def",tag:G,raw:d[0],href:b,title:q}}},k.prototype.table=function(U){var d=this.rules.block.table.exec(U);if(d){var G={type:"table",header:MB(d[1]).map(function(GA){return{text:GA}}),align:d[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:d[3]&&d[3].trim()?d[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(G.header.length===G.align.length){G.raw=d[0];var b=G.align.length,q=void 0,dA=void 0,wA=void 0,pA=void 0;for(q=0;q<b;q++)/^ *-+: *$/.test(G.align[q])?G.align[q]="right":/^ *:-+: *$/.test(G.align[q])?G.align[q]="center":/^ *:-+ *$/.test(G.align[q])?G.align[q]="left":G.align[q]=null;for(b=G.rows.length,q=0;q<b;q++)G.rows[q]=MB(G.rows[q],G.header.length).map(function(GA){return{text:GA}});for(b=G.header.length,dA=0;dA<b;dA++)G.header[dA].tokens=this.lexer.inline(G.header[dA].text);for(b=G.rows.length,dA=0;dA<b;dA++)for(pA=G.rows[dA],wA=0;wA<pA.length;wA++)pA[wA].tokens=this.lexer.inline(pA[wA].text);return G}}},k.prototype.lheading=function(U){var d=this.rules.block.lheading.exec(U);if(d)return{type:"heading",raw:d[0],depth:d[2].charAt(0)==="="?1:2,text:d[1],tokens:this.lexer.inline(d[1])}},k.prototype.paragraph=function(U){var d=this.rules.block.paragraph.exec(U);if(d){var G=d[1].charAt(d[1].length-1)===`
`?d[1].slice(0,-1):d[1];return{type:"paragraph",raw:d[0],text:G,tokens:this.lexer.inline(G)}}},k.prototype.text=function(U){var d=this.rules.block.text.exec(U);if(d)return{type:"text",raw:d[0],text:d[0],tokens:this.lexer.inline(d[0])}},k.prototype.escape=function(U){var d=this.rules.inline.escape.exec(U);if(d)return{type:"escape",raw:d[0],text:x(d[1])}},k.prototype.tag=function(U){var d=this.rules.inline.tag.exec(U);if(d)return!this.lexer.state.inLink&&/^<a /i.test(d[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(d[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(d[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(d[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:d[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(d[0]):x(d[0]):d[0]}},k.prototype.link=function(U){var d=this.rules.inline.link.exec(U);if(d){var G=d[2].trim();if(!this.options.pedantic&&/^</.test(G)){if(!/>$/.test(G))return;var b=wB(G.slice(0,-1),"\\");if((G.length-b.length)%2===0)return}else{var q=uB(d[2],"()");if(q>-1){var dA=d[0].indexOf("!")===0?5:4,wA=dA+d[1].length+q;d[2]=d[2].substring(0,q),d[0]=d[0].substring(0,wA).trim(),d[3]=""}}var pA=d[2],GA="";if(this.options.pedantic){var qA=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(pA);qA&&(pA=qA[1],GA=qA[3])}else GA=d[3]?d[3].slice(1,-1):"";return pA=pA.trim(),/^</.test(pA)&&(this.options.pedantic&&!/>$/.test(G)?pA=pA.slice(1):pA=pA.slice(1,-1)),HB(d,{href:pA&&pA.replace(this.rules.inline._escapes,"$1"),title:GA&&GA.replace(this.rules.inline._escapes,"$1")},d[0],this.lexer)}},k.prototype.reflink=function(U,d){var G;if((G=this.rules.inline.reflink.exec(U))||(G=this.rules.inline.nolink.exec(U))){var b=(G[2]||G[1]).replace(/\s+/g," ");if(b=d[b.toLowerCase()],!b){var q=G[0].charAt(0);return{type:"text",raw:q,text:q}}return HB(G,b,G[0],this.lexer)}},k.prototype.emStrong=function(U,d,G){G===void 0&&(G="");var b=this.rules.inline.emStrong.lDelim.exec(U);if(b&&!(b[3]&&G.match(/[\p{L}\p{N}]/u))){var q=b[1]||b[2]||"";if(!q||q&&(G===""||this.rules.inline.punctuation.exec(G))){var dA=b[0].length-1,wA=void 0,pA=void 0,GA=dA,qA=0,AB=b[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(AB.lastIndex=0,d=d.slice(-1*U.length+dA);(b=AB.exec(d))!=null;)if(wA=b[1]||b[2]||b[3]||b[4]||b[5]||b[6],!!wA){if(pA=wA.length,b[3]||b[4]){GA+=pA;continue}else if((b[5]||b[6])&&dA%3&&!((dA+pA)%3)){qA+=pA;continue}if(GA-=pA,!(GA>0)){pA=Math.min(pA,pA+GA+qA);var CB=U.slice(0,dA+b.index+(b[0].length-wA.length)+pA);if(Math.min(dA,pA)%2){var gA=CB.slice(1,-1);return{type:"em",raw:CB,text:gA,tokens:this.lexer.inlineTokens(gA)}}var BB=CB.slice(2,-2);return{type:"strong",raw:CB,text:BB,tokens:this.lexer.inlineTokens(BB)}}}}}},k.prototype.codespan=function(U){var d=this.rules.inline.code.exec(U);if(d){var G=d[2].replace(/\n/g," "),b=/[^ ]/.test(G),q=/^ /.test(G)&&/ $/.test(G);return b&&q&&(G=G.substring(1,G.length-1)),G=x(G,!0),{type:"codespan",raw:d[0],text:G}}},k.prototype.br=function(U){var d=this.rules.inline.br.exec(U);if(d)return{type:"br",raw:d[0]}},k.prototype.del=function(U){var d=this.rules.inline.del.exec(U);if(d)return{type:"del",raw:d[0],text:d[2],tokens:this.lexer.inlineTokens(d[2])}},k.prototype.autolink=function(U,d){var G=this.rules.inline.autolink.exec(U);if(G){var b=void 0,q=void 0;return G[2]==="@"?(b=x(this.options.mangle?d(G[1]):G[1]),q="mailto:"+b):(b=x(G[1]),q=b),{type:"link",raw:G[0],text:b,href:q,tokens:[{type:"text",raw:b,text:b}]}}},k.prototype.url=function(U,d){var G;if(G=this.rules.inline.url.exec(U)){var b=void 0,q=void 0;if(G[2]==="@")b=x(this.options.mangle?d(G[0]):G[0]),q="mailto:"+b;else{var dA=void 0;do dA=G[0],G[0]=this.rules.inline._backpedal.exec(G[0])[0];while(dA!==G[0]);b=x(G[0]),G[1]==="www."?q="http://"+G[0]:q=G[0]}return{type:"link",raw:G[0],text:b,href:q,tokens:[{type:"text",raw:b,text:b}]}}},k.prototype.inlineText=function(U,d){var G=this.rules.inline.text.exec(U);if(G){var b=void 0;return this.lexer.state.inRawBlock?b=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(G[0]):x(G[0]):G[0]:b=x(this.options.smartypants?d(G[0]):G[0]),{type:"text",raw:G[0],text:b}}},k}(),mA={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:gB,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};mA._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/,mA._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,mA.def=$(mA.def).replace("label",mA._label).replace("title",mA._title).getRegex(),mA.bullet=/(?:[*+-]|\d{1,9}[.)])/,mA.listItemStart=$(/^( *)(bull) */).replace("bull",mA.bullet).getRegex(),mA.list=$(mA.list).replace(/bull/g,mA.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+mA.def.source+")").getRegex(),mA._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",mA._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,mA.html=$(mA.html,"i").replace("comment",mA._comment).replace("tag",mA._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),mA.lheading=$(mA.lheading).replace(/bull/g,mA.bullet).getRegex(),mA.paragraph=$(mA._paragraph).replace("hr",mA.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",mA._tag).getRegex(),mA.blockquote=$(mA.blockquote).replace("paragraph",mA.paragraph).getRegex(),mA.normal=Q({},mA),mA.gfm=Q(Q({},mA.normal),{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),mA.gfm.table=$(mA.gfm.table).replace("hr",mA.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",mA._tag).getRegex(),mA.gfm.paragraph=$(mA._paragraph).replace("hr",mA.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",mA.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",mA._tag).getRegex(),mA.pedantic=Q(Q({},mA.normal),{html:$(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",mA._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:gB,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:$(mA.normal._paragraph).replace("hr",mA.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",mA.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var z={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:gB,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:gB,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};z._uc_punctuation="\\u00A1\\u00A7\\u00AB\\u00B6\\u00B7\\u00BB\\u00BF\\u037E\\u0387\\u055A-\\u055F\\u0589\\u058A\\u05BE\\u05C0\\u05C3\\u05C6\\u05F3\\u05F4\\u0609\\u060A\\u060C\\u060D\\u061B\\u061E\\u061F\\u066A-\\u066D\\u06D4\\u0700-\\u070D\\u07F7-\\u07F9\\u0830-\\u083E\\u085E\\u0964\\u0965\\u0970\\u0AF0\\u0DF4\\u0E4F\\u0E5A\\u0E5B\\u0F04-\\u0F12\\u0F14\\u0F3A-\\u0F3D\\u0F85\\u0FD0-\\u0FD4\\u0FD9\\u0FDA\\u104A-\\u104F\\u10FB\\u1360-\\u1368\\u1400\\u166D\\u166E\\u169B\\u169C\\u16EB-\\u16ED\\u1735\\u1736\\u17D4-\\u17D6\\u17D8-\\u17DA\\u1800-\\u180A\\u1944\\u1945\\u1A1E\\u1A1F\\u1AA0-\\u1AA6\\u1AA8-\\u1AAD\\u1B5A-\\u1B60\\u1BFC-\\u1BFF\\u1C3B-\\u1C3F\\u1C7E\\u1C7F\\u1CC0-\\u1CC7\\u1CD3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205E\\u207D\\u207E\\u208D\\u208E\\u2308-\\u230B\\u2329\\u232A\\u2768-\\u2775\\u27C5\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD\\u2CF9-\\u2CFC\\u2CFE\\u2CFF\\u2D70\\u2E00-\\u2E2E\\u2E30-\\u2E42\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301F\\u3030\\u303D\\u30A0\\u30FB\\uA4FE\\uA4FF\\uA60D-\\uA60F\\uA673\\uA67E\\uA6F2-\\uA6F7\\uA874-\\uA877\\uA8CE\\uA8CF\\uA8F8-\\uA8FA\\uA8FC\\uA92E\\uA92F\\uA95F\\uA9C1-\\uA9CD\\uA9DE\\uA9DF\\uAA5C-\\uAA5F\\uAADE\\uAADF\\uAAF0\\uAAF1\\uABEB\\uFD3E\\uFD3F\\uFE10-\\uFE19\\uFE30-\\uFE52\\uFE54-\\uFE61\\uFE63\\uFE68\\uFE6A\\uFE6B\\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A\\uFF1B\\uFF1F\\uFF20\\uFF3B-\\uFF3D\\uFF3F\\uFF5B\\uFF5D\\uFF5F-\\uFF65",z._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"+z._uc_punctuation,z.punctuation=$(z.punctuation).replace(/punctuation/g,z._punctuation).getRegex(),z.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,z.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,z._comment=$(mA._comment).replace("(?:-->|$)","-->").getRegex(),z.emStrong.lDelim=$(z.emStrong.lDelim).replace(/punct/g,z._punctuation).getRegex(),z.emStrong.rDelimAst=$(z.emStrong.rDelimAst,"g").replace(/punct/g,z._punctuation).getRegex(),z.emStrong.rDelimUnd=$(z.emStrong.rDelimUnd,"g").replace(/punct/g,z._punctuation).getRegex(),z._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,z._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,z._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,z.autolink=$(z.autolink).replace("scheme",z._scheme).replace("email",z._email).getRegex(),z._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,z.tag=$(z.tag).replace("comment",z._comment).replace("attribute",z._attribute).getRegex(),z._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,z._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,z._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,z.link=$(z.link).replace("label",z._label).replace("href",z._href).replace("title",z._title).getRegex(),z.reflink=$(z.reflink).replace("label",z._label).replace("ref",mA._label).getRegex(),z.nolink=$(z.nolink).replace("ref",mA._label).getRegex(),z.reflinkSearch=$(z.reflinkSearch,"g").replace("reflink",z.reflink).replace("nolink",z.nolink).getRegex(),z.normal=Q({},z),z.pedantic=Q(Q({},z.normal),{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:$(/^!?\[(label)\]\((.*?)\)/).replace("label",z._label).getRegex(),reflink:$(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",z._label).getRegex()}),z.gfm=Q(Q({},z.normal),{escape:$(z.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),z.gfm.url=$(z.gfm.url,"i").replace("email",z.gfm._extended_email).getRegex(),z.breaks=Q(Q({},z.gfm),{br:$(z.br).replace("{2,}","*").getRegex(),text:$(z.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function ZA(k){return k.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function IA(k){var U="",d,G,b=k.length;for(d=0;d<b;d++)G=k.charCodeAt(d),Math.random()>.5&&(G="x"+G.toString(16)),U+="&#"+G+";";return U}var bA=function(){function k(U){this.tokens=[],this.tokens.links=Object.create(null),this.options=U||h,this.options.tokenizer=this.options.tokenizer||new UB,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};var d={block:mA.normal,inline:z.normal};this.options.pedantic?(d.block=mA.pedantic,d.inline=z.pedantic):this.options.gfm&&(d.block=mA.gfm,this.options.breaks?d.inline=z.breaks:d.inline=z.gfm),this.tokenizer.rules=d}return Object.defineProperty(k,"rules",{get:function(){return{block:mA,inline:z}},enumerable:!1,configurable:!0}),k.lex=function(U,d){var G=new k(d);return G.lex(U)},k.lexInline=function(U,d){var G=new k(d);return G.inlineTokens(U)},k.prototype.lex=function(U){U=U.replace(/\r\n|\r/g,`
`),this.blockTokens(U,this.tokens);for(var d;d=this.inlineQueue.shift();)this.inlineTokens(d.src,d.tokens);return this.tokens},k.prototype.blockTokens=function(U,d){var G=this;d===void 0&&(d=[]),this.options.pedantic?U=U.replace(/\t/g,"    ").replace(/^ +$/gm,""):U=U.replace(/^( *)(\t+)/gm,function(AB,CB,gA){return CB+"    ".repeat(gA.length)});for(var b,q,dA,wA,pA=function(){if(GA.options.extensions&&GA.options.extensions.block&&GA.options.extensions.block.some(function(_){return(b=_.call({lexer:G},U,d))?(U=U.substring(b.raw.length),d.push(b),!0):!1}))return"continue";if(b=GA.tokenizer.space(U))return U=U.substring(b.raw.length),b.raw.length===1&&d.length>0?d[d.length-1].raw+=`
`:d.push(b),"continue";if(b=GA.tokenizer.code(U))return U=U.substring(b.raw.length),q=d[d.length-1],q&&(q.type==="paragraph"||q.type==="text")?(q.raw+=`
`+b.raw,q.text+=`
`+b.text,GA.inlineQueue[GA.inlineQueue.length-1].src=q.text):d.push(b),"continue";if((b=GA.tokenizer.fences(U))||(b=GA.tokenizer.heading(U))||(b=GA.tokenizer.hr(U))||(b=GA.tokenizer.blockquote(U))||(b=GA.tokenizer.list(U))||(b=GA.tokenizer.html(U)))return U=U.substring(b.raw.length),d.push(b),"continue";if(b=GA.tokenizer.def(U))return U=U.substring(b.raw.length),q=d[d.length-1],q&&(q.type==="paragraph"||q.type==="text")?(q.raw+=`
`+b.raw,q.text+=`
`+b.raw,GA.inlineQueue[GA.inlineQueue.length-1].src=q.text):GA.tokens.links[b.tag]||(GA.tokens.links[b.tag]={href:b.href,title:b.title}),"continue";if((b=GA.tokenizer.table(U))||(b=GA.tokenizer.lheading(U)))return U=U.substring(b.raw.length),d.push(b),"continue";if(dA=U,GA.options.extensions&&GA.options.extensions.startBlock){var AB=1/0,CB=U.slice(1),gA;GA.options.extensions.startBlock.forEach(function(_){gA=_.call({lexer:this},CB),typeof gA=="number"&&gA>=0&&(AB=Math.min(AB,gA))}),AB<1/0&&AB>=0&&(dA=U.substring(0,AB+1))}if(GA.state.top&&(b=GA.tokenizer.paragraph(dA)))return q=d[d.length-1],wA&&q.type==="paragraph"?(q.raw+=`
`+b.raw,q.text+=`
`+b.text,GA.inlineQueue.pop(),GA.inlineQueue[GA.inlineQueue.length-1].src=q.text):d.push(b),wA=dA.length!==U.length,U=U.substring(b.raw.length),"continue";if(b=GA.tokenizer.text(U))return U=U.substring(b.raw.length),q=d[d.length-1],q&&q.type==="text"?(q.raw+=`
`+b.raw,q.text+=`
`+b.text,GA.inlineQueue.pop(),GA.inlineQueue[GA.inlineQueue.length-1].src=q.text):d.push(b),"continue";if(U){var BB="Infinite loop on byte: "+U.charCodeAt(0);if(GA.options.silent)return console.error(BB),"break";throw new Error(BB)}},GA=this;U;){var qA=pA();if(qA==="break")break}return this.state.top=!0,d},k.prototype.inline=function(U,d){return d===void 0&&(d=[]),this.inlineQueue.push({src:U,tokens:d}),d},k.prototype.inlineTokens=function(U,d){var G=this;d===void 0&&(d=[]);var b,q,dA,wA=U,pA,GA,qA;if(this.tokens.links){var AB=Object.keys(this.tokens.links);if(AB.length>0)for(;(pA=this.tokenizer.rules.inline.reflinkSearch.exec(wA))!=null;)AB.includes(pA[0].slice(pA[0].lastIndexOf("[")+1,-1))&&(wA=wA.slice(0,pA.index)+"["+"a".repeat(pA[0].length-2)+"]"+wA.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(pA=this.tokenizer.rules.inline.blockSkip.exec(wA))!=null;)wA=wA.slice(0,pA.index)+"["+"a".repeat(pA[0].length-2)+"]"+wA.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(pA=this.tokenizer.rules.inline.escapedEmSt.exec(wA))!=null;)wA=wA.slice(0,pA.index+pA[0].length-2)+"++"+wA.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(var CB=function(){if(GA||(qA=""),GA=!1,gA.options.extensions&&gA.options.extensions.inline&&gA.options.extensions.inline.some(function(PB){return(b=PB.call({lexer:G},U,d))?(U=U.substring(b.raw.length),d.push(b),!0):!1}))return"continue";if(b=gA.tokenizer.escape(U))return U=U.substring(b.raw.length),d.push(b),"continue";if(b=gA.tokenizer.tag(U))return U=U.substring(b.raw.length),q=d[d.length-1],q&&b.type==="text"&&q.type==="text"?(q.raw+=b.raw,q.text+=b.text):d.push(b),"continue";if(b=gA.tokenizer.link(U))return U=U.substring(b.raw.length),d.push(b),"continue";if(b=gA.tokenizer.reflink(U,gA.tokens.links))return U=U.substring(b.raw.length),q=d[d.length-1],q&&b.type==="text"&&q.type==="text"?(q.raw+=b.raw,q.text+=b.text):d.push(b),"continue";if((b=gA.tokenizer.emStrong(U,wA,qA))||(b=gA.tokenizer.codespan(U))||(b=gA.tokenizer.br(U))||(b=gA.tokenizer.del(U))||(b=gA.tokenizer.autolink(U,IA))||!gA.state.inLink&&(b=gA.tokenizer.url(U,IA)))return U=U.substring(b.raw.length),d.push(b),"continue";if(dA=U,gA.options.extensions&&gA.options.extensions.startInline){var _=1/0,QB=U.slice(1),LA;gA.options.extensions.startInline.forEach(function(PB){LA=PB.call({lexer:this},QB),typeof LA=="number"&&LA>=0&&(_=Math.min(_,LA))}),_<1/0&&_>=0&&(dA=U.substring(0,_+1))}if(b=gA.tokenizer.inlineText(dA,ZA))return U=U.substring(b.raw.length),b.raw.slice(-1)!=="_"&&(qA=b.raw.slice(-1)),GA=!0,q=d[d.length-1],q&&q.type==="text"?(q.raw+=b.raw,q.text+=b.text):d.push(b),"continue";if(U){var vB="Infinite loop on byte: "+U.charCodeAt(0);if(gA.options.silent)return console.error(vB),"break";throw new Error(vB)}},gA=this;U;){var BB=CB();if(BB==="break")break}return d},k}(),EA=function(){function k(U){this.options=U||h}return k.prototype.code=function(U,d,G){var b=(d||"").match(/\S*/)[0];if(this.options.highlight){var q=this.options.highlight(U,b);q!=null&&q!==U&&(G=!0,U=q)}return U=U.replace(/\n$/,"")+`
`,b?'<pre><code class="'+this.options.langPrefix+x(b)+'">'+(G?U:x(U,!0))+`</code></pre>
`:"<pre><code>"+(G?U:x(U,!0))+`</code></pre>
`},k.prototype.blockquote=function(U){return`<blockquote>
`.concat(U,`</blockquote>
`)},k.prototype.html=function(U,d){return U},k.prototype.heading=function(U,d,G,b){if(this.options.headerIds){var q=this.options.headerPrefix+b.slug(G);return"<h".concat(d,' id="').concat(q,'">').concat(U,"</h").concat(d,`>
`)}return"<h".concat(d,">").concat(U,"</h").concat(d,`>
`)},k.prototype.hr=function(){return this.options.xhtml?`<hr/>
`:`<hr>
`},k.prototype.list=function(U,d,G){var b=d?"ol":"ul",q=d&&G!==1?' start="'+G+'"':"";return"<"+b+q+`>
`+U+"</"+b+`>
`},k.prototype.listitem=function(U){return"<li>".concat(U,`</li>
`)},k.prototype.checkbox=function(U){return"<input "+(U?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},k.prototype.paragraph=function(U){return"<p>".concat(U,`</p>
`)},k.prototype.table=function(U,d){return d&&(d="<tbody>".concat(d,"</tbody>")),`<table>
<thead>
`+U+`</thead>
`+d+`</table>
`},k.prototype.tablerow=function(U){return`<tr>
`.concat(U,`</tr>
`)},k.prototype.tablecell=function(U,d){var G=d.header?"th":"td",b=d.align?"<".concat(G,' align="').concat(d.align,'">'):"<".concat(G,">");return b+U+"</".concat(G,`>
`)},k.prototype.strong=function(U){return"<strong>".concat(U,"</strong>")},k.prototype.em=function(U){return"<em>".concat(U,"</em>")},k.prototype.codespan=function(U){return"<code>".concat(U,"</code>")},k.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},k.prototype.del=function(U){return"<del>".concat(U,"</del>")},k.prototype.link=function(U,d,G){if(U=lA(this.options.sanitize,this.options.baseUrl,U),U===null)return G;var b='<a href="'+U+'"';return d&&(b+=' title="'+d+'"'),b+=">"+G+"</a>",b},k.prototype.image=function(U,d,G){if(U=lA(this.options.sanitize,this.options.baseUrl,U),U===null)return G;var b='<img src="'.concat(U,'" alt="').concat(G,'"');return d&&(b+=' title="'.concat(d,'"')),b+=this.options.xhtml?"/>":">",b},k.prototype.text=function(U){return U},k}(),L=function(){function k(){}return k.prototype.strong=function(U){return U},k.prototype.em=function(U){return U},k.prototype.codespan=function(U){return U},k.prototype.del=function(U){return U},k.prototype.html=function(U){return U},k.prototype.text=function(U){return U},k.prototype.link=function(U,d,G){return""+G},k.prototype.image=function(U,d,G){return""+G},k.prototype.br=function(){return""},k}(),H=function(){function k(){this.seen={}}return k.prototype.serialize=function(U){return U.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},k.prototype.getNextSafeSlug=function(U,d){var G=U,b=0;if(this.seen.hasOwnProperty(G)){b=this.seen[U];do b++,G=U+"-"+b;while(this.seen.hasOwnProperty(G))}return d||(this.seen[U]=b,this.seen[G]=0),G},k.prototype.slug=function(U,d){d===void 0&&(d={});var G=this.serialize(U);return this.getNextSafeSlug(G,d.dryrun)},k}(),K=function(){function k(U){this.options=U||h,this.options.renderer=this.options.renderer||new EA,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new L,this.slugger=new H}return k.parse=function(U,d){var G=new k(d);return G.parse(U)},k.parseInline=function(U,d){var G=new k(d);return G.parseInline(U)},k.prototype.parse=function(U,d){d===void 0&&(d=!0);var G="",b,q,dA,wA,pA,GA,qA,AB,CB,gA,BB,_,QB,LA,vB,PB,lg,BQ,eg,RQ=U.length;for(b=0;b<RQ;b++){if(gA=U[b],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[gA.type]&&(eg=this.options.extensions.renderers[gA.type].call({parser:this},gA),eg!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(gA.type))){G+=eg||"";continue}switch(gA.type){case"space":continue;case"hr":{G+=this.renderer.hr();continue}case"heading":{G+=this.renderer.heading(this.parseInline(gA.tokens),gA.depth,cA(this.parseInline(gA.tokens,this.textRenderer)),this.slugger);continue}case"code":{G+=this.renderer.code(gA.text,gA.lang,gA.escaped);continue}case"table":{for(AB="",qA="",wA=gA.header.length,q=0;q<wA;q++)qA+=this.renderer.tablecell(this.parseInline(gA.header[q].tokens),{header:!0,align:gA.align[q]});for(AB+=this.renderer.tablerow(qA),CB="",wA=gA.rows.length,q=0;q<wA;q++){for(GA=gA.rows[q],qA="",pA=GA.length,dA=0;dA<pA;dA++)qA+=this.renderer.tablecell(this.parseInline(GA[dA].tokens),{header:!1,align:gA.align[dA]});CB+=this.renderer.tablerow(qA)}G+=this.renderer.table(AB,CB);continue}case"blockquote":{CB=this.parse(gA.tokens),G+=this.renderer.blockquote(CB);continue}case"list":{for(BB=gA.ordered,_=gA.start,QB=gA.loose,wA=gA.items.length,CB="",q=0;q<wA;q++)vB=gA.items[q],PB=vB.checked,lg=vB.task,LA="",vB.task&&(BQ=this.renderer.checkbox(PB),QB?vB.tokens.length>0&&vB.tokens[0].type==="paragraph"?(vB.tokens[0].text=BQ+" "+vB.tokens[0].text,vB.tokens[0].tokens&&vB.tokens[0].tokens.length>0&&vB.tokens[0].tokens[0].type==="text"&&(vB.tokens[0].tokens[0].text=BQ+" "+vB.tokens[0].tokens[0].text)):vB.tokens.unshift({type:"text",text:BQ}):LA+=BQ),LA+=this.parse(vB.tokens,QB),CB+=this.renderer.listitem(LA,lg,PB);G+=this.renderer.list(CB,BB,_);continue}case"html":{G+=this.renderer.html(gA.text,gA.block);continue}case"paragraph":{G+=this.renderer.paragraph(this.parseInline(gA.tokens));continue}case"text":{for(CB=gA.tokens?this.parseInline(gA.tokens):gA.text;b+1<RQ&&U[b+1].type==="text";)gA=U[++b],CB+=`
`+(gA.tokens?this.parseInline(gA.tokens):gA.text);G+=d?this.renderer.paragraph(CB):CB;continue}default:{var MQ='Token with "'+gA.type+'" type was not found.';if(this.options.silent){console.error(MQ);return}else throw new Error(MQ)}}}return G},k.prototype.parseInline=function(U,d){d=d||this.renderer;var G="",b,q,dA,wA=U.length;for(b=0;b<wA;b++){if(q=U[b],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[q.type]&&(dA=this.options.extensions.renderers[q.type].call({parser:this},q),dA!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(q.type))){G+=dA||"";continue}switch(q.type){case"escape":{G+=d.text(q.text);break}case"html":{G+=d.html(q.text);break}case"link":{G+=d.link(q.href,q.title,this.parseInline(q.tokens,d));break}case"image":{G+=d.image(q.href,q.title,q.text);break}case"strong":{G+=d.strong(this.parseInline(q.tokens,d));break}case"em":{G+=d.em(this.parseInline(q.tokens,d));break}case"codespan":{G+=d.codespan(q.text);break}case"br":{G+=d.br();break}case"del":{G+=d.del(this.parseInline(q.tokens,d));break}case"text":{G+=d.text(q.text);break}default:{var pA='Token with "'+q.type+'" type was not found.';if(this.options.silent){console.error(pA);return}else throw new Error(pA)}}}return G},k}(),nA=function(){function k(U){this.options=U||h}return k.prototype.preprocess=function(U){return U},k.prototype.postprocess=function(U){return U},k}();i(nA,"passThroughHooks",new Set(["preprocess","postprocess"]));function rA(k,U,d){return function(G){if(G.message+=`
Please report this to https://github.com/markedjs/marked.`,k){var b="<p>An error occurred:</p><pre>"+x(G.message+"",!0)+"</pre>";if(U)return Promise.resolve(b);if(d){d(null,b);return}return b}if(U)return Promise.reject(G);if(d){d(G);return}throw G}}function aA(k,U){return function(d,G,b){typeof G=="function"&&(b=G,G=null);var q=Q({},G);G=Q(Q({},oA.defaults),q);var dA=rA(G.silent,G.async,b);if(typeof d>"u"||d===null)return dA(new Error("marked(): input parameter is undefined or null"));if(typeof d!="string")return dA(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(d)+", string expected"));if(RB(G,b),G.hooks&&(G.hooks.options=G),b){var wA=G.highlight,pA;try{G.hooks&&(d=G.hooks.preprocess(d)),pA=k(d,G)}catch(gA){return dA(gA)}var GA=function(gA){var BB;if(!gA)try{G.walkTokens&&oA.walkTokens(pA,G.walkTokens),BB=U(pA,G),G.hooks&&(BB=G.hooks.postprocess(BB))}catch(_){gA=_}return G.highlight=wA,gA?dA(gA):b(null,BB)};if(!wA||wA.length<3||(delete G.highlight,!pA.length))return GA();var qA=0;oA.walkTokens(pA,function(gA){gA.type==="code"&&(qA++,setTimeout(function(){wA(gA.text,gA.lang,function(BB,_){if(BB)return GA(BB);_!=null&&_!==gA.text&&(gA.text=_,gA.escaped=!0),qA--,qA===0&&GA()})},0))}),qA===0&&GA();return}if(G.async)return Promise.resolve(G.hooks?G.hooks.preprocess(d):d).then(function(gA){return k(gA,G)}).then(function(gA){return G.walkTokens?Promise.all(oA.walkTokens(gA,G.walkTokens)).then(function(){return gA}):gA}).then(function(gA){return U(gA,G)}).then(function(gA){return G.hooks?G.hooks.postprocess(gA):gA}).catch(dA);try{G.hooks&&(d=G.hooks.preprocess(d));var AB=k(d,G);G.walkTokens&&oA.walkTokens(AB,G.walkTokens);var CB=U(AB,G);return G.hooks&&(CB=G.hooks.postprocess(CB)),CB}catch(gA){return dA(gA)}}}function oA(k,U,d){return aA(bA.lex,K.parse)(k,U,d)}oA.options=oA.setOptions=function(k){return oA.defaults=Q(Q({},oA.defaults),k),y(oA.defaults),oA},oA.getDefaults=R,oA.defaults=h,oA.use=function(){for(var k=[],U=0;U<arguments.length;U++)k[U]=arguments[U];var d=oA.defaults.extensions||{renderers:{},childTokens:{}};k.forEach(function(G){var b=Q({},G);if(b.async=oA.defaults.async||b.async||!1,G.extensions&&(G.extensions.forEach(function(gA){if(!gA.name)throw new Error("extension name required");if(gA.renderer){var BB=d.renderers[gA.name];BB?d.renderers[gA.name]=function(){for(var _=[],QB=0;QB<arguments.length;QB++)_[QB]=arguments[QB];var LA=gA.renderer.apply(this,_);return LA===!1&&(LA=BB.apply(this,_)),LA}:d.renderers[gA.name]=gA.renderer}if(gA.tokenizer){if(!gA.level||gA.level!=="block"&&gA.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");d[gA.level]?d[gA.level].unshift(gA.tokenizer):d[gA.level]=[gA.tokenizer],gA.start&&(gA.level==="block"?d.startBlock?d.startBlock.push(gA.start):d.startBlock=[gA.start]:gA.level==="inline"&&(d.startInline?d.startInline.push(gA.start):d.startInline=[gA.start]))}gA.childTokens&&(d.childTokens[gA.name]=gA.childTokens)}),b.extensions=d),G.renderer){var q=oA.defaults.renderer||new EA,dA=function(gA){var BB=q[gA];q[gA]=function(){for(var _=[],QB=0;QB<arguments.length;QB++)_[QB]=arguments[QB];var LA=G.renderer[gA].apply(q,_);return LA===!1&&(LA=BB.apply(q,_)),LA}};for(var wA in G.renderer)dA(wA);b.renderer=q}if(G.tokenizer){var pA=oA.defaults.tokenizer||new UB,GA=function(gA){var BB=pA[gA];pA[gA]=function(){for(var _=[],QB=0;QB<arguments.length;QB++)_[QB]=arguments[QB];var LA=G.tokenizer[gA].apply(pA,_);return LA===!1&&(LA=BB.apply(pA,_)),LA}};for(var wA in G.tokenizer)GA(wA);b.tokenizer=pA}if(G.hooks){var qA=oA.defaults.hooks||new nA,AB=function(gA){var BB=qA[gA];nA.passThroughHooks.has(gA)?qA[gA]=function(_){if(oA.defaults.async)return Promise.resolve(G.hooks[gA].call(qA,_)).then(function(LA){return BB.call(qA,LA)});var QB=G.hooks[gA].call(qA,_);return BB.call(qA,QB)}:qA[gA]=function(){for(var _=[],QB=0;QB<arguments.length;QB++)_[QB]=arguments[QB];var LA=G.hooks[gA].apply(qA,_);return LA===!1&&(LA=BB.apply(qA,_)),LA}};for(var wA in G.hooks)AB(wA);b.hooks=qA}if(G.walkTokens){var CB=oA.defaults.walkTokens;b.walkTokens=function(gA){var BB=[];return BB.push(G.walkTokens.call(this,gA)),CB&&(BB=BB.concat(CB.call(this,gA))),BB}}oA.setOptions(b)})},oA.walkTokens=function(k,U){for(var d=[],G=function(wA){switch(d=d.concat(U.call(oA,wA)),wA.type){case"table":{for(var pA=0,GA=wA.header;pA<GA.length;pA++){var qA=GA[pA];d=d.concat(oA.walkTokens(qA.tokens,U))}for(var AB=0,CB=wA.rows;AB<CB.length;AB++)for(var gA=CB[AB],BB=0,_=gA;BB<_.length;BB++){var qA=_[BB];d=d.concat(oA.walkTokens(qA.tokens,U))}break}case"list":{d=d.concat(oA.walkTokens(wA.items,U));break}default:oA.defaults.extensions&&oA.defaults.extensions.childTokens&&oA.defaults.extensions.childTokens[wA.type]?oA.defaults.extensions.childTokens[wA.type].forEach(function(QB){d=d.concat(oA.walkTokens(wA[QB],U))}):wA.tokens&&(d=d.concat(oA.walkTokens(wA.tokens,U)))}},b=0,q=k;b<q.length;b++){var dA=q[b];G(dA)}return d},oA.parseInline=aA(bA.lexInline,K.parseInline),oA.Parser=K,oA.parser=K.parse,oA.Renderer=EA,oA.TextRenderer=L,oA.Lexer=bA,oA.lexer=bA.lex,oA.Tokenizer=UB,oA.Slugger=H,oA.Hooks=nA,oA.parse=oA,oA.options,oA.setOptions,oA.use,oA.walkTokens,oA.parseInline,K.parse,bA.lex;function MA(k,U){return k?Math.max(16,U):U}function CA(k,U){return{read:k.read!==void 0?k.read:!U}}function QA(k,U,d){var G,b=d.images||[],q=k[U].text||"",dA=d.text||"";k[U].text=q+((q&&dA?" ":"")+dA),k[U].images=e(e([],k[U].images||[],!0),b,!0),k[U].links=e(e([],k[U].links||[],!0),d.links||[],!0),k[U].hasLikes=k[U].hasLikes||d.hasLikes,((G=d.ctx)===null||G===void 0?void 0:G.format)==="markdown"&&(k[U].ctx?k[U].ctx.format="markdown":k[U].ctx={format:"markdown"})}function YA(k,U){var d,G,b=!0,q=!1,dA=null,wA=!1,pA=k.reqId||((d=k==null?void 0:k.ctx)===null||d===void 0?void 0:d.reqId),GA=(G=k==null?void 0:k.ctx)===null||G===void 0?void 0:G.responseId;if(k.type==="response"&&k.name==="text"){var qA=U.findIndex(function(gA){var BB;return gA.name==="loading"&&pA&&(((BB=gA==null?void 0:gA.ctx)===null||BB===void 0?void 0:BB.reqId)||gA.reqId)===pA});if(qA>-1)dA=qA,U[dA]=Q({},k),q=!0,b=!1;else{var AB=U.findIndex(function(gA){var BB;return gA.type==="response"&&GA&&((BB=gA==null?void 0:gA.ctx)===null||BB===void 0?void 0:BB.responseId)===GA}),CB=AB!==-1;CB&&(dA=AB,wA=!0,q=!1,b=!1,QA(U,dA,k))}}return b?(U.push(Q({},k)),{isNew:b,msgInd:U.length-1,replaceLoader:q,updateResponse:wA}):{isNew:b,updateResponse:wA,replaceLoader:q,msgInd:dA}}function SA(k){return(k||[]).filter(function(U){return U&&U.src?U.src.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i):null})}function TA(k){var U=/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm;return!!k.match(U)}function KA(k){return TA(k.href)?'<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20px" height="20px">    <path d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z" fill="#919191"/></svg>':`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.22602 9.27842L5.17192 11.3326C5.17192 11.3326 5.17192 11.3326 5.17187 11.3326C5.17187 11.3326 5.17187 11.3327 5.17183 11.3327C4.32239 12.1821 2.94018 12.1822 2.09065 11.3327C1.67911 10.9211 1.45252 10.374 1.45252 9.79203C1.45252 9.21015 1.67911 8.66309 2.09051 8.25154C2.09056 8.25149 2.09061 8.25144 2.09065 8.25139L4.14475 6.19725C4.42833 5.91362 4.42833 5.45375 4.1447 5.17017C3.86112 4.88659 3.40126 4.88659 3.11763 5.17017L1.06353 7.22432C1.06339 7.22447 1.06324 7.22466 1.0631 7.2248C0.377557 7.91058 0 8.82233 0 9.79203C0 10.762 0.377702 11.6739 1.06358 12.3597C1.77154 13.0676 2.70139 13.4216 3.63129 13.4216C4.56119 13.4216 5.49109 13.0676 6.19895 12.3597C6.199 12.3597 6.199 12.3596 6.199 12.3596L8.25309 10.3055C8.53667 10.0219 8.53667 9.56205 8.25305 9.27842C7.96951 8.99484 7.5097 8.99484 7.22602 9.27842Z" fill="#919191"/>
    <path d="M13.4249 3.62955C13.4249 2.65961 13.0472 1.74772 12.3613 1.06184C10.9455 -0.353972 8.64171 -0.353923 7.22595 1.06184C7.2259 1.06194 7.2258 1.06199 7.22576 1.06209L5.17171 3.11609C4.88808 3.39967 4.88808 3.85958 5.17171 4.14316C5.31357 4.28502 5.49939 4.35591 5.68527 4.35591C5.87109 4.35591 6.05701 4.28497 6.19878 4.14316L8.25283 2.08916C8.25288 2.08906 8.25297 2.08901 8.25307 2.08892C9.1025 1.23949 10.4847 1.23944 11.3342 2.08892C11.7457 2.50046 11.9724 3.04762 11.9724 3.62955C11.9724 4.21143 11.7458 4.75849 11.3344 5.17004L11.3342 5.17018L9.28014 7.22433C8.99656 7.50791 8.99656 7.96778 9.28019 8.2514C9.42201 8.39322 9.60788 8.46415 9.7937 8.46415C9.97958 8.46415 10.1655 8.39322 10.3073 8.2514L12.3614 6.19726C12.3615 6.19711 12.3617 6.19692 12.3618 6.19677C13.0473 5.51099 13.4249 4.59925 13.4249 3.62955Z" fill="#919191"/>
    <path d="M4.14491 9.27836C4.28672 9.42018 4.4726 9.49111 4.65842 9.49111C4.8443 9.49111 5.03017 9.42018 5.17198 9.27836L9.28028 5.17007C9.56391 4.88649 9.56391 4.42663 9.28028 4.143C8.9967 3.85942 8.53683 3.85942 8.2532 4.143L4.14491 8.25124C3.86128 8.53492 3.86128 8.99479 4.14491 9.27836Z" fill="#919191"/>
</svg>`}function VA(k){return k.replace(/send-text/gi,"data-alan-btn-send-text").replace(/call-project-api/gi,"data-alan-btn-call-project-api").replace(/project-api-param/gi,"data-alan-btn-project-api-param")}function lB(k,U,d){var G=k.closest("[data-alan-btn-send-text]");if(G){var b=G.getAttribute("data-alan-btn-send-text");if(b){d(b);return}}var q=k.closest("[data-alan-btn-call-project-api]");if(q){var dA=q.getAttribute("data-alan-btn-call-project-api"),wA=null;try{wA=q.getAttribute("data-alan-btn-project-api-param"),wA=JSON.parse(wA)}catch{console.log("Alan: unable to parse params for calling project api method")}if(dA){U.callProjectApi(dA,wA);return}}}(function(k){var U="alan-version.1.8.53";U=U.replace("alan-version.",""),window.alanBtn&&console.warn("Alan: the Alan Button source code has already added (v."+U+")");var d="Alan voice assistant",G=null,b,q=null,dA,wA=!1;try{localStorage.getItem("test"),wA=!0}catch{wA=!1}var pA=!1;try{sessionStorage.getItem("test"),pA=!0}catch{pA=!1}function GA(_){return _?"1":"0"}function qA(){return`
        Debug Info:
        alanBtn: v.`.concat(U,`
        alanSDK: v.`).concat(window.alanSDKVersion,`
        projectId: `).concat(G||"unknown",`
        deviceId: `).concat(AB(),`
        navigator: 
        getUserMedia: `).concat(GA(navigator.getUserMedia),`, 
        mediaDevices: `).concat(GA(navigator.mediaDevices),`, 
        mediaDevices.getUserMedia: `).concat(GA(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),`,
        webkitGUM: `).concat(GA(navigator.webkitGetUserMedia),`,
        mozGUM: `).concat(GA(navigator.mozGetUserMedia),`,
        msGUM: `).concat(GA(navigator.msGetUserMedia),`,
        window:
        AudioContext: `).concat(GA(window.AudioContext),`,
        webkitAC: `).concat(GA(window.webkitAudioContext),`,
        mozAC: `).concat(GA(window.mozAudioContext),`,
        userAgent: `).concat(navigator.userAgent,`
        `)}function AB(){if(G){var _="alan-btn-uuid-"+G;return wA&&(b=localStorage.getItem(_)),b||(b=CB(),wA&&localStorage.setItem(_,b)),b}}function CB(){function _(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return _()+_()+"-"+_()+"-"+_()+"-"+_()+"-"+_()+_()+_()}var gA;(function(_){_.Request="request",_.Response="response"})(gA||(gA={}));function BB(_){_=_||{};var QB=!0,LA=!1,vB=!1,PB=!0,lg=!1,BQ=!1,eg=!1,RQ=!1,MQ=!0,$g=null,ZB=!0,IQ=!1,Lg=!0,xQ=[],uQ=null,Fg=null,QQ=null,hQ=[],Dg=400,RE=700,ae=250,pQ=40,hn=1.25,At=67,Xg=50,vQ=34,Bt=6,Ug=200,jB=25,Gn=15,Qt=FB(),ZQ;if(_.mode==="tutor"?(ZQ="tutor",lg=!0):_.mode==="demo"?ZQ="demo":ZQ="component",console.log("Alan: v."+U),window.tutorProject&&!Og()&&dA){if(G===_.key)return dA;throw new Error("The Alan Button instance has already been created. There cannot be two Alan Button instances created at the same time connected to the different projects.")}dA={version:U,setVisualState:function(n){QB||window.tutorProject&&window.tutorProject.setVisual(n)},callProjectApi:function(n,D,Z){var BA="script::";if(!QB){if(!n)throw new Error("Function name for callProjectApi must be provided");window.tutorProject&&(n.indexOf(BA)===0?window.tutorProject.call(n,D,Z):window.tutorProject.call(BA+n,D,Z))}},playText:function(n){QB||window.tutorProject&&window.tutorProject.call("play",{text:n})},playCommand:function(n){QB||eB.playCommand({data:n})},activate:function(){return LB({activate:!0})},deactivate:function(){AQ()},isActive:function(){return bQ},sendText:function(n){dI(n)},textChat:{setAudioOutputEnabled:function(n){n===!0?YC(!0):nE(!0)},isAudioOutputEnabled:function(){return Qt}},callClientApi:function(n,D,Z){console.error(`The "callClientApi" method is deprecated. Please use the "callProjectApi: instead.

See more info here: https://alan.app/docs/client-api/methods/common-api/?highlight=callprojectapi#callprojectapi`),!QB&&window.tutorProject&&window.tutorProject.call(n,D,Z)},setAuthData:function(n){console.error(`The "setAuthData" method is deprecated. Please use the "authData" property when you create the Alan Button.

See more info here:  https://alan.app/docs/server-api/sending-data/authdata/?highlight=authdata`),!QB&&window.tutorProject&&(window.tutorProject.close(),window.tutorProject=window.alan.project(_.key,O(n),_.host),window.tutorProject.on("connectStatus",Xn),window.tutorProject.on("options",tE))},setOptions:function(n){tE(n)},setPreviewState:function(n){DQ(n)},remove:function(){eB.stop(),window.tutorProject.close(),window.tutorProject.off("scripts",Xi),window.tutorProject.off("text",cI),window.tutorProject.off("parsed",TE),eB.off("command",uC),eB.off("afterText",pe),JA.innerHTML="",dA=null,Og()||(window.tutorProject=null)},stop:function(){eB.stop()},updateButtonState:function(n){Xn(n)},sendEvent:YE},document.addEventListener("click",Eg);function Eg(){eB.resumeAudioCtx(),document.removeEventListener("click",Eg)}function YE(n,D){var Z=D?{name:n,value:D}:{name:n};wQ(Z)}function wQ(n){window.tutorProject?window.tutorProject.call("clientEvent",n):setTimeout(function(){return wQ(n)},3e3)}_.host&&""+_.host,(_.position==="absolute"||_.pinned)&&(lg=!0),_.position==="absolute"&&(BQ=!0);var Oe={default:"ONLINE",offline:"OFFLINE",disconnected:"CONNECTING",listening:"LISTEN",understood:"PROCESS",intermediate:"PROCESS",speaking:"REPLY",permissionDenied:"NO_PERMISSION",noVoiceSupport:"NO_VOICE_SUPPORT",notSecureOrigin:"INSECURE_ORIGIN"},zQ="default",KQ="listening",PQ="speaking",Sg="intermediate",ng="understood",dg="disconnected",gt="offline",pE="lowVolume",NQ="permissionDenied",Hg="noVoiceSupport",fg="notSecureOrigin",Mg="Microphone access is blocked in your browser settings. Enable it to allow the voice assistant using your microphone",jQ="Your browser doesn’t support voice input. If you think your browser supports voice input, please send the Debug info below to support@alan.app. "+qA(),we='Audio is allowed only on a secure connection: make sure your connection protocol is under HTTPS, HTTP on localhost or file. A connection over the file protocol may not work in some browsers, e.g., in Safari. Now you are running with "'+window.location.protocol+'" protocol and "'+window.location.hostname+'" hostname',Rn="Low volume level",ug="You're offline",oB=null,Yn="browser-does-not-support-voice-input",zt="microphone-access-blocked",cQ="preview-mode",ce="btn-is-disabled",NE="no-alan-audio-instance-was-provided",LQ=dg,tt=null,re=!1,bQ=!1,iQ=!1,Cg=!1,Kt=!1,le=!0,vg=3e4,gQ,CE=[0,0],Pt=!1,hg=!1,et=!1,mQ=null,Fe=0,Ig,De=300,Ve=0,Ue=0,pn=De+"ms",qQ=!0;function bE(){gQ=P(function(){bQ&&(re?gQ():(eB.stop(),eg=!0))},vg)}bE();var Wg="",Et="",xe="";_e()||(Wg="alan-pulsating 2s ease-in-out infinite",Et="alan-mic-pulsating 1.4s ease-in-out infinite",xe="alan-triangle-mic-pulsating 1.2s ease-in-out infinite");var nt="alan-text-chat-pulsating 2s ease-in-out infinite",Nn="alan-gradient 3s ease-in-out infinite",de="disconnected-loader-animation 2s linear infinite",eB=window.alanAudio,JA=_.rootEl||document.createElement("div"),mE=document.getElementsByTagName("body")[0],PA=document.createElement("div"),bn=`<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.90233 10.4566C7.52988 9.72656 6.63602 9.42857 5.90602 9.78613C4.95254 10.2629 4.02887 11.0525 3.32866 11.708C2.71784 12.2593 2.68803 13.2127 3.23926 13.8086C3.53722 14.1215 3.93946 14.2854 4.34171 14.2854C4.69926 14.2854 5.05681 14.1513 5.35477 13.898C5.65273 13.6298 6.54661 12.7956 7.24682 12.4529C7.97682 12.0805 8.27478 11.1866 7.91723 10.4566H7.90233Z" />
        <path d="M32.1414 11.4398C28.1636 7.92391 23.0983 5.9872 17.884 5.9872C15.4258 5.9872 13.0273 6.40437 10.733 7.22376C10.6883 7.23866 10.6436 7.28335 10.5989 7.31315L8.40888 4.97415C7.84276 4.37823 6.9042 4.33355 6.30828 4.89967C5.71236 5.4658 5.68256 6.40434 6.23379 7.00026L27.091 29.3472C27.3889 29.6601 27.7763 29.824 28.1785 29.824C28.5361 29.824 28.9085 29.6899 29.1916 29.4217C29.7875 28.8556 29.8173 27.917 29.2661 27.3211L18.2714 15.5368C21.5638 15.6411 24.6328 17.0266 26.9718 19.4848C27.2698 19.7976 27.6571 19.9466 28.0444 19.9466C28.4169 19.9466 28.7893 19.8127 29.0724 19.5296C29.6683 18.9635 29.6981 18.0248 29.132 17.4288C26.1375 14.2705 22.1299 12.5424 17.884 12.5424C17.1391 12.5424 16.3942 12.6019 15.6642 12.7062C15.6642 12.7062 15.6493 12.7062 15.6344 12.7062L12.8187 9.68189C14.4575 9.20515 16.1558 8.9519 17.884 8.9519C22.3683 8.9519 26.7334 10.6205 30.1749 13.6597C30.4579 13.913 30.8155 14.0322 31.1581 14.0322C31.5753 14.0322 31.9775 13.8682 32.2755 13.5256C32.8267 12.9148 32.7671 11.9613 32.1414 11.425V11.4398Z" />
        <path d="M12.2079 15.1643C11.7908 14.4492 10.882 14.2109 10.1669 14.628C8.94526 15.3282 7.8279 16.2072 6.82973 17.2203C6.24871 17.8013 6.26361 18.7548 6.82973 19.3209C7.12769 19.6039 7.50014 19.7529 7.87259 19.7529C8.24504 19.7529 8.64731 19.6039 8.93037 19.306C9.74976 18.4717 10.6585 17.7715 11.6418 17.1905C12.3569 16.7733 12.5953 15.8645 12.1781 15.1494L12.2079 15.1643Z" />
        <path d="M16.7666 20.3637C16.5282 19.5741 15.694 19.1421 14.9044 19.3805C13.355 19.8572 11.8354 21.2874 11.0756 22.0919C10.5094 22.6878 10.5243 23.6263 11.1352 24.1924C11.4182 24.4605 11.7907 24.6097 12.1631 24.6097C12.5505 24.6097 12.9527 24.4607 13.2358 24.1478C14.1595 23.1795 15.1576 22.4346 15.7833 22.2409C16.5729 22.0025 17.005 21.1682 16.7666 20.3786V20.3637Z" />
        <path d="M17.7499 29.7644C18.7785 29.7644 19.6122 28.9307 19.6122 27.9021C19.6122 26.8737 18.7785 26.0399 17.7499 26.0399C16.7214 26.0399 15.8877 26.8737 15.8877 27.9021C15.8877 28.9307 16.7214 29.7644 17.7499 29.7644Z"/>
        </svg>
        `,fe=`
        <svg class="alan-btn_disconnected-chat-icon-rotate" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M24.0579 3.47502C18.5874 0.922942 12.1534 1.67973 7.4383 5.76748C2.7232 9.85523 1.24337 15.2725 2.34798 20.767C3.45259 26.2615 7.87342 31.0097 13.2994 32.4594C19.715 34.174 26.6107 31.7302 30.2577 26.2615C26.9893 30.6213 20.7089 33.242 15.1228 32.2771C9.62181 31.3275 4.71002 26.606 3.45259 21.1573C2.11284 15.3541 3.59462 10.949 8.37598 6.57398C13.1573 2.19898 22.9638 1.8344 28.2519 8.2146C29.2614 9.43264 30.6224 11.6781 30.9871 14.4125C31.1694 15.5063 31.1694 15.6886 31.3518 16.6C31.3518 16.9646 31.7165 17.3292 32.0812 17.3292C32.6282 17.3292 33.0612 16.918 32.9929 16.2354C32.4459 10.7667 29.0622 5.80967 24.0579 3.47502Z" fill="#B8B6B6"/>
        </svg>`,JE=`
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.0134 15.9238L8.98646 6.40981C7.82892 5.83162 6.75249 5.99963 6.17778 6.77248C5.89042 7.15832 5.61697 7.85122 5.94952 8.96241L8.09542 16.1092C8.39668 17.1138 8.39668 18.8797 8.09542 19.8843L5.94952 27.0311C5.61697 28.1423 5.88926 28.8363 6.17662 29.2222C6.51959 29.681 7.04564 29.9348 7.65743 29.9348C8.07109 29.9348 8.51834 29.8166 8.9853 29.5837L28.0134 20.0697C28.9635 19.5946 29.5093 18.838 29.5093 17.9968C29.5093 17.1555 28.9647 16.3989 28.0134 15.9238ZM8.27386 27.3486L10.3155 20.5494C10.4383 20.1403 10.5217 19.6606 10.575 19.1554H16.6868C17.3276 19.1554 17.8455 18.6375 17.8455 17.9968C17.8455 17.356 17.3276 16.8381 16.6868 16.8381H10.575C10.5217 16.3329 10.4395 15.8532 10.3155 15.4441L8.27386 8.64493L26.9775 17.9968L8.27386 27.3486Z" fill="#B8B6B6"/>
        </svg>`,mn=`
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2623 24.0476C16.7915 24.0458 15.3814 23.4608 14.3414 22.4208C13.3014 21.3808 12.7164 19.9707 12.7147 18.5V10.7333C12.7147 9.26204 13.2992 7.85099 14.3395 6.81061C15.3799 5.77024 16.791 5.18576 18.2623 5.18576C19.7336 5.18576 21.1446 5.77024 22.185 6.81061C23.2254 7.85099 23.8099 9.26204 23.8099 10.7333V18.5C23.8081 19.9707 23.2231 21.3808 22.1831 22.4208C21.1431 23.4608 19.733 24.0458 18.2623 24.0476ZM18.2623 7.4048C17.3798 7.40576 16.5337 7.75676 15.9097 8.38078C15.2857 9.00479 14.9347 9.85086 14.9337 10.7333V18.5C14.9337 19.3828 15.2844 20.2294 15.9086 20.8536C16.5329 21.4778 17.3795 21.8285 18.2623 21.8285C19.1451 21.8285 19.9917 21.4778 20.6159 20.8536C21.2401 20.2294 21.5908 19.3828 21.5908 18.5V10.7333C21.5899 9.85086 21.2389 9.00479 20.6148 8.38078C19.9908 7.75676 19.1448 7.40576 18.2623 7.4048ZM28.2479 18.5C28.2479 18.2057 28.131 17.9235 27.923 17.7154C27.7149 17.5073 27.4327 17.3905 27.1384 17.3905C26.8441 17.3905 26.5619 17.5073 26.3539 17.7154C26.1458 17.9235 26.0289 18.2057 26.0289 18.5C26.0289 20.5598 25.2106 22.5353 23.7541 23.9918C22.2976 25.4483 20.3221 26.2666 18.2623 26.2666C16.2024 26.2666 14.227 25.4483 12.7704 23.9918C11.3139 22.5353 10.4956 20.5598 10.4956 18.5C10.4956 18.2057 10.3788 17.9235 10.1707 17.7154C9.9626 17.5073 9.68039 17.3905 9.38613 17.3905C9.09187 17.3905 8.80966 17.5073 8.60158 17.7154C8.39351 17.9235 8.27661 18.2057 8.27661 18.5C8.27661 21.1483 9.32867 23.6882 11.2013 25.5609C13.074 27.4336 15.6139 28.4856 18.2623 28.4856C20.9106 28.4856 23.4505 27.4336 25.3232 25.5609C27.1959 23.6882 28.2479 21.1483 28.2479 18.5ZM19.3718 30.7047V27.3761C19.3718 27.0818 19.2549 26.7996 19.0468 26.5916C18.8387 26.3835 18.5565 26.2666 18.2623 26.2666C17.968 26.2666 17.6858 26.3835 17.4777 26.5916C17.2696 26.7996 17.1528 27.0818 17.1528 27.3761V30.7047C17.1528 30.9989 17.2696 31.2811 17.4777 31.4892C17.6858 31.6973 17.968 31.8142 18.2623 31.8142C18.5565 31.8142 18.8387 31.6973 19.0468 31.4892C19.2549 31.2811 19.3718 30.9989 19.3718 30.7047Z" fill="#171717"/>
        </svg>
        <div class="alan-text-chat__animated-btn-bars">
            <div class="alan-text-chat__bar alan-text-chat__bar-1"></div>
            <div class="alan-text-chat__bar alan-text-chat__bar-2"></div>
            <div class="alan-text-chat__bar alan-text-chat__bar-3"></div>
            <div class="alan-text-chat__bar alan-text-chat__bar-3"></div>
            <div class="alan-text-chat__bar alan-text-chat__bar-2"></div>
            <div class="alan-text-chat__bar alan-text-chat__bar-1"></div>
        </div>`,yE=`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9675 16.3602V18.6166C12.9692 20.0539 13.541 21.432 14.5574 22.4483C15.5738 23.4647 16.9518 24.0365 18.3892 24.0382C19.2643 24.0371 20.1175 23.8248 20.8804 23.4294L19.0569 21.8003C18.8389 21.846 18.6153 21.8695 18.3892 21.8695C17.5264 21.8695 16.699 21.5268 16.089 20.9168C15.4789 20.3067 15.1362 19.4793 15.1362 18.6166V18.2976L12.9675 16.3602ZM21.6421 16.7466V11.0263C21.6412 10.1638 21.2982 9.33696 20.6883 8.72712C20.0785 8.11727 19.2516 7.77424 18.3892 7.7733C17.5267 7.77424 16.6999 8.11727 16.09 8.72712C15.5048 9.31233 15.1653 10.0974 15.138 10.9219L13.2678 9.24713C13.5339 8.48102 13.9711 7.77698 14.5555 7.1926C15.5723 6.17585 16.9513 5.60464 18.3892 5.60464C19.8271 5.60464 21.2061 6.17585 22.2228 7.1926C23.2396 8.20935 23.8108 9.58837 23.8108 11.0263V18.6166C23.8108 18.6404 23.8106 18.6643 23.8102 18.6882L21.6421 16.7466ZM22.5782 24.9462C21.345 25.7623 19.89 26.2068 18.3892 26.2068C16.3761 26.2068 14.4455 25.4071 13.022 23.9837C11.5986 22.5602 10.7989 20.6296 10.7989 18.6166C10.7989 18.329 10.6847 18.0532 10.4813 17.8498C10.2779 17.6465 10.0021 17.5322 9.71457 17.5322C9.42699 17.5322 9.15118 17.6465 8.94783 17.8498C8.74448 18.0532 8.63024 18.329 8.63024 18.6166C8.63024 21.2048 9.65841 23.687 11.4886 25.5172C13.0613 27.0899 15.1156 28.0704 17.3048 28.3151V30.5441C17.3048 30.8317 17.4191 31.1075 17.6224 31.3109C17.8258 31.5142 18.1016 31.6285 18.3892 31.6285C18.6768 31.6285 18.9526 31.5142 19.1559 31.3109C19.3593 31.1075 19.4735 30.8317 19.4735 30.5441V28.3151C21.2027 28.1218 22.8477 27.4695 24.2378 26.4288L22.5782 24.9462ZM27.5342 22.0231L25.7589 20.4332C25.9042 19.8436 25.9794 19.2339 25.9794 18.6166C25.9794 18.329 26.0937 18.0532 26.297 17.8498C26.5004 17.6465 26.7762 17.5322 27.0638 17.5322C27.3514 17.5322 27.6272 17.6465 27.8305 17.8498C28.0339 18.0532 28.1481 18.329 28.1481 18.6166C28.1481 19.7909 27.9364 20.9434 27.5342 22.0231Z" fill="#B8B6B6"/>
        <path d="M8.18825 6.56812L31.2883 27.1759C31.8123 27.6433 31.8581 28.4471 31.3906 28.9711C30.9232 29.4951 30.1194 29.5409 29.5954 29.0735L6.49538 8.46573C5.97137 7.99826 5.92553 7.1945 6.39301 6.67049C6.86048 6.14648 7.66424 6.10065 8.18825 6.56812Z" fill="#B8B6B6"/>
        </svg>
        `,kE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH9SURBVHgB7dvvUcIwGMfxByfADdjAEdQN3EA2YATcAJ2AEXADdALcgG4AGzwm13DQkNKWQBvK93OXF4W0Z36mf5IUEQAAAAAAAAAAgPOo6ocpS91bmfIuOM2ENHJhlVnbOoIwF1CVleCYCWas9U0kEQ+SjibXuDdJxEASYbtVg+rbwWDwKAm41QDFBJjE357SKXyTCDASAUYiwEgEGIkAIxFgJAKMRICRWgvQTRZs3IzLxef2rn38zmlxqmoT+L6Rpse/ltbGk36j/bFsKJRTqvZva6zc2TXQtHfofbSV+rYVx2pNmwFm3vbI2/6R+r4rjvUnLWkzQL9Rz972l9T3WXGsTPrGTsN794FloM5Uq00D+/kLUb28Cw8DYbwE6k1LgrOPKJNA/dBaykj6SItrvdZaAzcAzZc3bTBzVyYl9YZ6vJK3kL6yPS7QW+ZyJhvW3fS+HdPAWaDRiyYNdz1vecl/xs0oOe12p3Plxd+d2mX7t/482MnKlutt9i48CnydSf5M+Cv7xxFb78mUsSnDkn1ezeAjk3uh+Y0i1JOaWuu9vi/jTueZns/u29kwLhma98Z5g+CWpjwLirT4/Oezn01S63HJvNrhs4kdbqfyKoePKf1IBBiJACMRYCQCjESAkVIO8HDhKBM0o/tZFzsTzY9sAAAAAAAAAABAjH+9EqX09fBHaQAAAABJRU5ErkJggg==",Jn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAFtElEQVR4Ae3dL4wcZRjH8WeRKJJTTRBbc4JgkK26UCSXVIHkUBgS2uBAcCQIDAGCh8VAgkG0DsFhqAEqoKI1rCCgLiGhgYA53rd932S7bXdmdmfe3/vn+0kmW45pc7179tvZm3dmzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0ZWaNOzs723cPJ247ZxrnZ7PZ0hr1hOFlt/1oOp9Zw5oeQFe/C+7habf97rY/TOPAfR4H1qjWC3i48mtlBd+xRjU7gKF+eysfooICLRfw8BEf+9Z0mqxgkwP4iPpFd9122zSarGCrBTzc8P9uuO1f02iugs0N4Ib6Rf+57RfTaK6CLRbwsMc+PxsVTKKpAexRv0hdwVesEc0MoPum+sHrU79IWcFja0RLBbxo/eoX+Qr+ZBrzVirYxACG+l2w4XwF/zKNY/d5P2WVa6WAL9iw+q1SnaKbu+0Nq1z1Axjq97xt747pTtFdqb2CLRRwyAuPx1FV0A9f1RWsegB3OPZbp1yoUHUFay/gGPWLqOAEqh3AEesXUcEJ1FzAMesXUcGRVTmAE9Qv8hVULdeqsoK1FnCK+kXKCla3UKG6AZywfpFftKoaQl/BuVWkxgIe2fRYrjWSqgYwXGS+b9NTLtc6qqmCtRVwymO/dcoKVnMxezUDGBabpqhfxNL9EdRUwJT1izgW3FEVAzhgqf3YfAU/N40qKlhLARX1827PZrPX3OPSNIqvYPEDKKyf91V4fNU0iq9gDQVU1e97V7/f/C/c44ndv8egQtEVLHoAxfW7vvbf75pG0RUsvYDK+p2ufoAKbqfYAcysfpGygpetQEUO4BYXmY/pofpF4gp+aAUqtYBDLzIfix+86x37qF4RF3kxe3EDmGC51SaPrV8U7ni/MI3iLmYvsYDK+t3oue9Vt/1p6c2tsKX7RQ1gqN+LpnGtq36R288P30emUdTS/dIKqHrhceqGqm/9oo9NU8GiLmAqZgDFx37XbCAq2E9JBSypfhEV7FDEAJZWv4gKdiulgCXW7x73+/3ZkaWlV0QFsx9Acf0WNg7VKbrsK1hCAVX1u+nqdcdG4P6chWlO0WVfwazfL9g9e59xD9+YxqfW7wXEaRiwjcKSKcVbgfm/w3O5vidx7gPov2EHlp6//8t3A/Zf9DlWFP59/OenOke9Ubb/BIdiHJjG0Ftv9D1MUB0LZnsxe87HgJ+Yhq/f3WG/xfbcN7jzFCHLtR6W5QC6b+aRe3jWNLa98dAl93k/2WM/VQUv57h0P9cCqpaY/2DD6xf54eu8G3+o4MI0slu6n90AhvrNLT3/hjS7/tgl9wpmdwFTjgVUPUu3OfZb17eCS9O9H1xWFcxqAMX1G+t94S6FszddVAsVsqpgbgVUPTvHvOOpr2CfV8TKhQrZVDCbASz82G/dxXCzzC7NVzCnAtZQv1WdP5ymgpkMoHs2vmn11C/ap4Ld5APovgjn3MPrpjH13e77VvCqachv9ZtDAf399eaWnn/TmanqF/WqYFhNs7T05BezSwcwnCBXfQF2Wuk8wFHP/VSrVY5NSF1A1bGf/6Fzr2t8R7AXbqS0kXChgq/gFRORrQcM9fvVNL6w3c96DOGH/T03ZH9v2km8aPV8OB5NSlnAkk+5DeXPjPRdqHBi6cmW7ksK2Fj9Il+/t6ngg1QFbKl+0ZDlWieWnqSCyQsorN8/bvvadAPo9a3g3DRfo+QVVBRQVb9bph0+r+9ChaVpFq0mr2DSAgqf2f6Um7/FhnoAo7e6bvUWvlY37f5QpJS0gqkLqFxwkMvweS917RAqqFiokLSCyQoYLjK/Zen5+n1p+fmg684L4bYa/l8MRQWTXMyesoDvm8bUCw62lfNyLT/wVb0zOwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANfsfb80MpE9p2rYAAAAASUVORK5CYII=",Me=`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjMuNzQ5Mzk5NDZlLTMxJSIgeDI9IjIuODYwODIwMDklIiB5Mj0iOTcuMTM5MTc5OSUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjEyIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wNCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJBbGFuLUJ1dHRvbi0vLUFuaW1hdGlvbi0vLWJ1dHRvbi1pbm5lci1zaGFwZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTQwLjEwMDU0MjIsOSBMNDAuMTAwNTQyMiw5IEM1MC4wNzA0NzUxLDkgNTkuMTUxNjIzNSwxNC43MzM3OTM4IDYzLjQzODA5OCwyMy43MzUyMjE0IEw3MC40MjIwMjY3LDM4LjQwMTE5NyBDNzUuMTcxMDE0NSw0OC4zNzM4ODQ0IDcwLjkzNjM2OTMsNjAuMzA4MTYwMSA2MC45NjM2ODE5LDY1LjA1NzE0NzggQzU4LjI3NzU5NDksNjYuMzM2MjYwOCA1NS4zMzk5NzQ0LDY3IDUyLjM2NDg3ODksNjcgTDI3LjgzNjIwNTQsNjcgQzE2Ljc5MDUxMDQsNjcgNy44MzYyMDU0Myw1OC4wNDU2OTUgNy44MzYyMDU0Myw0NyBDNy44MzYyMDU0Myw0NC4wMjQ5MDQ1IDguNDk5OTQ0NTksNDEuMDg3Mjg0IDkuNzc5MDU3NiwzOC40MDExOTcgTDE2Ljc2Mjk4NjQsMjMuNzM1MjIxNCBDMjEuMDQ5NDYwOCwxNC43MzM3OTM4IDMwLjEzMDYwOTIsOSA0MC4xMDA1NDIyLDkgWiIgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==
`,ZE=`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZS1zcGVha2luZyBiYWNrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMy43NDkzOTk0NmUtMzElIiB4Mj0iMi44NjA4MjAwOSUiIHkyPSI5Ny4xMzkxNzk5JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMTIiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjA0IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWlubmVyLXNoYXBlLXNwZWFraW5nLWJhY2siIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBjeD0iNDAiIGN5PSI0MCIgcj0iMzIiPjwvY2lyY2xlPgogICAgPC9nPgo8L3N2Zz4=
`}),Re(ot,{height:"100%",top:"0%",altText:" no voice support icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgB7dvxUYMwFAbwpxMwAhvoBtVJygZ1A92gI1Qn6AjoBO0GsEG7wfPlgCtNA7xASzX5fnf5oyThLp+BQDiJAAAAAAAAAAAAAAAAxmHmDyk5n+ykLAn6SUhpHVaXwrQhcBsIr5FTLGSwb1IOmpkj9RnrxXE5+1x+fH7Pwyw0+PKSLLpCrGeq1oFiwNWiUGhCZE8UC22I7IliogmRPVFshkJkTxSjvhDZE8WqJ0QEqNURIgL0MTVEgmkhElTGhkix4WqzoNlYWFp1k1fhvvMHgc9n2cFRPzXAou/8t/JAM7EH/SD66ocM9bfrb+WR7kTGm1iHjqR3HDjXbOYMsLR+p9bvPentr3iuSeYM0B7Uwvr9RXqfA+cqKTRyma2sdSB3tMlZJ7X62Ru3Qa7CiSOIF6uN9pmw4NMuTjYUcDAcM8wEkTjaZdasytm9AfHsOL6lUJkZx5c2yr7a2ZlSyGSAa8egt5qBK0JU/TH+Na7uha4QzLHBm7+0ee8Iz/Sf/XlwtjeRtnq2mVU4dVSXUr6l/NDpccS0e5KSSekKybR9lReQkmLAV9hU7ZiFKcWCq8t5zeOtWfndOWhczcYN6+VSFq2+RfQhGnUYWUeY5ph5m0k6+iHENjs9RXuE2OYbYN3HFeKOYjQmwLrfRYgUo7EB1n2bEM03khXd0F0epDXs0Obaovd1ty39UCDAif5ygO0PRyWBH64eqJuFAP9kAwAAAAAAAAAAAAAAU/wC52820szaQtwAAAAASUVORK5CYII="}),Re(Yg,{height:"100%",top:"0%",altText:" offline icon",src:`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1uby1uZXR3b3JrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLW5vLW5ldHdvcmsiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMS4wMDAwMDAsIDIyLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzMsMiBDMzQuNjU2ODU0MiwyIDM2LDMuMzQzMTQ1NzUgMzYsNSBMMzYsMjkgQzM2LDMwLjY1Njg1NDIgMzQuNjU2ODU0MiwzMiAzMywzMiBDMzEuMzQzMTQ1OCwzMiAzMCwzMC42NTY4NTQyIDMwLDI5IEwzMCw1IEMzMCwzLjM0MzE0NTc1IDMxLjM0MzE0NTgsMiAzMywyIFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIzLDggQzI0LjY1Njg1NDIsOCAyNiw5LjM0MzE0NTc1IDI2LDExIEwyNiwyOSBDMjYsMzAuNjU2ODU0MiAyNC42NTY4NTQyLDMyIDIzLDMyIEMyMS4zNDMxNDU4LDMyIDIwLDMwLjY1Njg1NDIgMjAsMjkgTDIwLDExIEMyMCw5LjM0MzE0NTc1IDIxLjM0MzE0NTgsOCAyMyw4IFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEzLDE2IEMxNC42NTY4NTQyLDE2IDE2LDE3LjM0MzE0NTggMTYsMTkgTDE2LDI5IEMxNiwzMC42NTY4NTQyIDE0LjY1Njg1NDIsMzIgMTMsMzIgQzExLjM0MzE0NTgsMzIgMTAsMzAuNjU2ODU0MiAxMCwyOSBMMTAsMTkgQzEwLDE3LjM0MzE0NTggMTEuMzQzMTQ1OCwxNiAxMywxNiBaIiBpZD0iU2hhcGUiIGZpbGwtb3BhY2l0eT0iMC44Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLDIyIEM0LjY1Njg1NDI1LDIyIDYsMjMuMzQzMTQ1OCA2LDI1IEw2LDI5IEM2LDMwLjY1Njg1NDIgNC42NTY4NTQyNSwzMiAzLDMyIEMxLjM0MzE0NTc1LDMyIDIuMDI5MDYxMjVlLTE2LDMwLjY1Njg1NDIgMCwyOSBMMCwyNSBDLTIuMDI5MDYxMjVlLTE2LDIzLjM0MzE0NTggMS4zNDMxNDU3NSwyMiAzLDIyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNS44MSwxLjI3IEwzNi43MywzMi4xOSBDMzcuNDMxNDAxNiwzMi44OTE0MDE2IDM3LjQzMTQwMTYsMzQuMDI4NTk4NCAzNi43MywzNC43MyBDMzYuMDI4NTk4NCwzNS40MzE0MDE2IDM0Ljg5MTQwMTYsMzUuNDMxNDAxNiAzNC4xOSwzNC43MyBMMy4yNywzLjgxIEMyLjU2ODU5ODM3LDMuMTA4NTk4MzcgMi41Njg1OTgzNywxLjk3MTQwMTYzIDMuMjcsMS4yNyBDMy45NzE0MDE2MywwLjU2ODU5ODM2OCA1LjEwODU5ODM3LDAuNTY4NTk4MzY4IDUuODEsMS4yNyBaIiBpZD0iUGF0aCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=
                transform: scale(0.4);
                opacity: 0.5;
                pointer-events: none;
                transition: `.concat(JQ,`;
                position: fixed;
                height:  `.concat(xn,`;
                min-height: `).concat(((nQ=(UQ=(WB=n==null?void 0:n.chatOptions)===null||WB===void 0?void 0:WB.textChat)===null||UQ===void 0?void 0:UQ.popup)===null||nQ===void 0?void 0:nQ.minHeight)||Dg,`px;
                max-height: `).concat(((SQ=(dQ=(tQ=n==null?void 0:n.chatOptions)===null||tQ===void 0?void 0:tQ.textChat)===null||dQ===void 0?void 0:dQ.popup)===null||SQ===void 0?void 0:SQ.maxHeight)||"1200",`px;
                width: `).concat(zn,`;
                display: none;
                transform: scale(0);
                opacity: 0;
                opacity: 0;
      