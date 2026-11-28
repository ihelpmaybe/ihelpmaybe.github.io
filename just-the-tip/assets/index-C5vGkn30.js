const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/secp256k1-C0FC5ww2.js","assets/rolldown-runtime-hePW80VL.js","assets/utils-Bpv4vmSW.js"])))=>i.map(i=>d[i]);
import{r as e,t}from"./rolldown-runtime-hePW80VL.js";import{$ as n,$t as r,A as i,At as a,B as o,Bt as s,C as c,Ct as l,D as u,Dt as d,E as f,Et as p,F as m,Ft as h,G as g,Gt as _,H as v,Ht as y,I as b,It as x,J as S,Jt as C,K as w,Kt as T,L as E,Lt as D,M as ee,Mt as te,N as O,Nt as k,O as A,Ot as ne,P as re,Pt as j,Q as M,Qt as N,R as P,Rt as F,S as I,St as L,T as ie,Tt as ae,U as oe,Ut as R,V as se,Vt as ce,W as le,Wt as ue,X as de,Xt as fe,Y as pe,Yt as me,Z as he,Zt as ge,_ as _e,_n as ve,_t as ye,a as be,an as xe,b as Se,bt as Ce,c as we,cn as Te,ct as z,d as B,dn as V,dt as Ee,en as De,et as Oe,f as ke,fn as Ae,ft as je,g as Me,gn as Ne,gt as Pe,h as Fe,hn as Ie,ht as Le,i as Re,in as H,it as ze,j as Be,jt as U,k as Ve,kt as He,l as Ue,ln as We,lt as Ge,m as Ke,mn as qe,mt as Je,nn as Ye,nt as Xe,o as Ze,on as Qe,ot as $e,p as et,pn as tt,pt as nt,q as rt,qt as it,r as at,rn as ot,rt as st,s as ct,sn as lt,st as ut,tn as dt,tt as ft,u as pt,un as mt,ut as ht,v as gt,w as _t,wt as vt,x as yt,xt as bt,y as xt,yt as St,z as Ct,zt as wt}from"./localBatchGatewayRequest-UqB8mj4T.js";import{r as Tt,t as Et}from"./secp256k1-C0FC5ww2.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function Dt(e){let t;if(typeof e==`string`)t=mt(e);else{let n=Te(e),r=e.length;for(let i=0;i<r;i++){let r=e[i];if(!qe(r)){t=mt(r,n);break}}}if(!t)throw new tt({signature:e});return t}function Ot(e){let t=[];if(typeof e==`string`){let n=V(e),r=n.length;for(let e=0;e<r;e++)t.push(We(n[e],{modifiers:Ie}))}else{let n=Te(e),r=e.length;for(let i=0;i<r;i++){let r=e[i];if(qe(r))continue;let a=V(r),o=a.length;for(let e=0;e<o;e++)t.push(We(a[e],{modifiers:Ie,structs:n}))}}if(t.length===0)throw new Ae({params:e});return t}function W(e,t,n){let r=e[t.name];if(typeof r==`function`)return r;let i=e[n];return typeof i==`function`?i:n=>t(e,n)}var kt=class extends H{constructor(e){super(`Filter type "${e}" is not supported.`,{name:`FilterTypeNotSupportedError`})}},At=`/docs/contract/encodeEventTopics`;function jt(e){let{abi:t,eventName:n,args:r}=e,i=t[0];if(n){let e=vt({abi:t,name:n});if(!e)throw new N(n,{docsPath:At});i=e}if(i.type!==`event`)throw new N(void 0,{docsPath:At});let a=[];if(r&&`inputs`in i){let e=i.inputs?.filter(e=>`indexed`in e&&e.indexed),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map(e=>r[e.name])??[]:[];t.length>0&&(a=e?.map((e,n)=>Array.isArray(t[n])?t[n].map((r,i)=>Mt({param:e,value:t[n][i]})):t[n]!==void 0&&t[n]!==null?Mt({param:e,value:t[n]}):null)??[])}if(i.anonymous)return a;let o=lt(i);return[x(o),...a]}function Mt({param:e,value:t}){if(e.type===`string`||e.type===`bytes`)return D(ce(t));if(e.type===`tuple`||e.type.match(/^(.*)\[(\d+)?\]$/))throw new kt(e.type);return ae([e],[t])}function Nt(e,{method:t}){let n={};return e.transport.type===`fallback`&&e.transport.onResponse?.(({method:e,response:r,status:i,transport:a})=>{i===`success`&&t===e&&(n[r]=a.request)}),(t=>n[t]||e.request)}async function Pt(e,t){let{address:n,abi:r,args:i,eventName:a,fromBlock:o,strict:s,toBlock:c}=t,l=Nt(e,{method:`eth_newFilter`}),u=a?jt({abi:r,args:i,eventName:a}):void 0,d=await e.request({method:`eth_newFilter`,params:[{address:n,fromBlock:typeof o==`bigint`?R(o):o,toBlock:typeof c==`bigint`?R(c):c,topics:u}]});return{abi:r,args:i,eventName:a,id:d,request:l(d),strict:!!s,type:`event`}}var Ft=-1,It=class extends H{constructor(e,{code:t,docsPath:n,metaMessages:r,name:i,shortMessage:a}){super(a,{cause:e,docsPath:n,metaMessages:r||e?.metaMessages,name:i||`RpcError`}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=i||e.name,this.code=e instanceof he?e.code:t??Ft}},Lt=class extends It{constructor(e,t){super(e,t),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}},Rt=class e extends It{constructor(t){super(t,{code:e.code,name:`ParseRpcError`,shortMessage:`Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.`})}};Object.defineProperty(Rt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});var zt=class e extends It{constructor(t){super(t,{code:e.code,name:`InvalidRequestRpcError`,shortMessage:`JSON is not a valid request object.`})}};Object.defineProperty(zt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});var Bt=class e extends It{constructor(t,{method:n}={}){super(t,{code:e.code,name:`MethodNotFoundRpcError`,shortMessage:`The method${n?` "${n}"`:``} does not exist / is not available.`})}};Object.defineProperty(Bt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});var Vt=class e extends It{constructor(t){super(t,{code:e.code,name:`InvalidParamsRpcError`,shortMessage:[`Invalid parameters were provided to the RPC method.`,`Double check you have provided the correct parameters.`].join(`
`)})}};Object.defineProperty(Vt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});var Ht=class e extends It{constructor(t){super(t,{code:e.code,name:`InternalRpcError`,shortMessage:`An internal error was received.`})}};Object.defineProperty(Ht,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});var Ut=class e extends It{constructor(t){super(t,{code:e.code,name:`InvalidInputRpcError`,shortMessage:[`Missing or invalid parameters.`,`Double check you have provided the correct parameters.`].join(`
`)})}};Object.defineProperty(Ut,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});var Wt=class e extends It{constructor(t){super(t,{code:e.code,name:`ResourceNotFoundRpcError`,shortMessage:`Requested resource not found.`}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`ResourceNotFoundRpcError`})}};Object.defineProperty(Wt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});var Gt=class e extends It{constructor(t){super(t,{code:e.code,name:`ResourceUnavailableRpcError`,shortMessage:`Requested resource not available.`})}};Object.defineProperty(Gt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});var Kt=class e extends It{constructor(t){super(t,{code:e.code,name:`TransactionRejectedRpcError`,shortMessage:`Transaction creation failed.`})}};Object.defineProperty(Kt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});var qt=class e extends It{constructor(t,{method:n}={}){super(t,{code:e.code,name:`MethodNotSupportedRpcError`,shortMessage:`Method${n?` "${n}"`:``} is not supported.`})}};Object.defineProperty(qt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});var Jt=class e extends It{constructor(t){super(t,{code:e.code,name:`LimitExceededRpcError`,shortMessage:`Request exceeds defined limit.`})}};Object.defineProperty(Jt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});var Yt=class e extends It{constructor(t){super(t,{code:e.code,name:`JsonRpcVersionUnsupportedError`,shortMessage:`Version of JSON-RPC protocol is not supported.`})}};Object.defineProperty(Yt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});var Xt=class e extends Lt{constructor(t){super(t,{code:e.code,name:`UserRejectedRequestError`,shortMessage:`User rejected the request.`})}};Object.defineProperty(Xt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});var Zt=class e extends Lt{constructor(t){super(t,{code:e.code,name:`UnauthorizedProviderError`,shortMessage:`The requested method and/or account has not been authorized by the user.`})}};Object.defineProperty(Zt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});var Qt=class e extends Lt{constructor(t,{method:n}={}){super(t,{code:e.code,name:`UnsupportedProviderMethodError`,shortMessage:`The Provider does not support the requested method${n?` " ${n}"`:``}.`})}};Object.defineProperty(Qt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});var $t=class e extends Lt{constructor(t){super(t,{code:e.code,name:`ProviderDisconnectedError`,shortMessage:`The Provider is disconnected from all chains.`})}};Object.defineProperty($t,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});var en=class e extends Lt{constructor(t){super(t,{code:e.code,name:`ChainDisconnectedError`,shortMessage:`The Provider is not connected to the requested chain.`})}};Object.defineProperty(en,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});var tn=class e extends Lt{constructor(t){super(t,{code:e.code,name:`SwitchChainError`,shortMessage:`An error occurred when attempting to switch chain.`})}};Object.defineProperty(tn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});var nn=class e extends Lt{constructor(t){super(t,{code:e.code,name:`UnsupportedNonOptionalCapabilityError`,shortMessage:`This Wallet does not support a capability that was not marked as optional.`})}};Object.defineProperty(nn,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});var rn=class e extends Lt{constructor(t){super(t,{code:e.code,name:`UnsupportedChainIdError`,shortMessage:`This Wallet does not support the requested chain ID.`})}};Object.defineProperty(rn,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});var an=class e extends Lt{constructor(t){super(t,{code:e.code,name:`DuplicateIdError`,shortMessage:`There is already a bundle submitted with this ID.`})}};Object.defineProperty(an,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});var on=class e extends Lt{constructor(t){super(t,{code:e.code,name:`UnknownBundleIdError`,shortMessage:`This bundle id is unknown / has not been submitted`})}};Object.defineProperty(on,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});var sn=class e extends Lt{constructor(t){super(t,{code:e.code,name:`BundleTooLargeError`,shortMessage:`The call bundle is too large for the Wallet to process.`})}};Object.defineProperty(sn,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});var cn=class e extends Lt{constructor(t){super(t,{code:e.code,name:`AtomicReadyWalletRejectedUpgradeError`,shortMessage:`The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.`})}};Object.defineProperty(cn,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});var ln=class e extends Lt{constructor(t){super(t,{code:e.code,name:`AtomicityNotSupportedError`,shortMessage:`The wallet does not support atomic execution but the request requires it.`})}};Object.defineProperty(ln,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});var un=class e extends Lt{constructor(t){super(t,{code:e.code,name:`WalletConnectSessionSettlementError`,shortMessage:`WalletConnect session settlement failed.`})}};Object.defineProperty(un,"code",{enumerable:!0,configurable:!0,writable:!0,value:7e3});var dn=class extends It{constructor(e){super(e,{name:`UnknownRpcError`,shortMessage:`An unknown RPC error occurred.`})}},fn=3;function pn(e,{abi:t,address:n,args:r,docsPath:i,functionName:a,sender:o}){let s=e instanceof st?e:e instanceof H?e.walk(e=>`data`in e)||e.walk():{},{code:c,data:l,details:u,message:d,shortMessage:f}=s,p=e instanceof ge?new Xe({functionName:a,cause:e}):[fn,Ht.code].includes(c)&&(l||u||d||f)||c===Ut.code&&u===`execution reverted`&&l?new ft({abi:t,data:typeof l==`object`?l.data:l,functionName:a,message:s instanceof he?u:f??d,cause:e}):e;return new Oe(p,{abi:t,args:r,contractAddress:n,docsPath:i,functionName:a,sender:o})}function mn(e){let t=D(`0x${e.substring(4)}`).substring(26);return te(`0x${t}`)}async function hn({hash:e,signature:t}){let n=Qe(e)?e:_(e),{secp256k1:r}=await S(async()=>{let{secp256k1:e}=await import(`./secp256k1-C0FC5ww2.js`).then(e=>e.n);return{secp256k1:e}},__vite__mapDeps([0,1,2]));return`0x${(()=>{if(typeof t==`object`&&`r`in t&&`s`in t){let{r:e,s:n,v:i,yParity:a}=t,o=gn(Number(a??i));return new r.Signature(T(e),T(n)).addRecoveryBit(o)}let e=Qe(t)?t:_(t);if(xe(e)!==65)throw Error(`invalid signature length`);let n=gn(C(`0x${e.slice(130)}`));return r.Signature.fromCompact(e.substring(2,130)).addRecoveryBit(n)})().recoverPublicKey(n.substring(2)).toHex(!1)}`}function gn(e){if(e===0||e===1)return e;if(e===27)return 0;if(e===28)return 1;throw Error(`Invalid yParityOrV value`)}async function _n({hash:e,signature:t}){return mn(await hn({hash:e,signature:t}))}function vn(e,t=`hex`){let n=yn(e),r=Ce(new Uint8Array(n.length));return n.encode(r),t===`hex`?y(r.bytes):r.bytes}function yn(e){return Array.isArray(e)?bn(e.map(e=>yn(e))):xn(e)}function bn(e){let t=e.reduce((e,t)=>e+t.length,0),n=Sn(t);return{length:t<=55?1+t:1+n+t,encode(r){t<=55?r.pushByte(192+t):(r.pushByte(247+n),n===1?r.pushUint8(t):n===2?r.pushUint16(t):n===3?r.pushUint24(t):r.pushUint32(t));for(let{encode:t}of e)t(r)}}}function xn(e){let t=typeof e==`string`?wt(e):e,n=Sn(t.length);return{length:t.length===1&&t[0]<128?1:t.length<=55?1+t.length:1+n+t.length,encode(e){t.length===1&&t[0]<128?e.pushBytes(t):t.length<=55?(e.pushByte(128+t.length),e.pushBytes(t)):(e.pushByte(183+n),n===1?e.pushUint8(t.length):n===2?e.pushUint16(t.length):n===3?e.pushUint24(t.length):e.pushUint32(t.length),e.pushBytes(t))}}}function Sn(e){if(e<256)return 1;if(e<2**16)return 2;if(e<2**24)return 3;if(e<2**32)return 4;throw new H(`Length is too large.`)}function Cn(e){let{chainId:t,nonce:n,to:r}=e,i=e.contractAddress??e.address,o=D(a([`0x05`,vn([t?R(t):`0x`,i,n?R(n):`0x`])]));return r===`bytes`?wt(o):o}async function wn(e){let{authorization:t,signature:n}=e;return _n({hash:Cn(t),signature:n??t})}var Tn=class extends H{constructor(e,{account:t,docsPath:n,chain:r,data:i,gas:a,gasPrice:o,maxFeePerGas:s,maxPriorityFeePerGas:c,nonce:l,to:u,value:d}){let f=nt({from:t?.address,to:u,value:d!==void 0&&`${Le(d)} ${r?.nativeCurrency?.symbol||`ETH`}`,data:i,gas:a,gasPrice:o!==void 0&&`${Je(o)} gwei`,maxFeePerGas:s!==void 0&&`${Je(s)} gwei`,maxPriorityFeePerGas:c!==void 0&&`${Je(c)} gwei`,nonce:l});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages,` `]:[],`Estimate Gas Arguments:`,f].filter(Boolean),name:`EstimateGasExecutionError`}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.cause=e}};function En(e,{docsPath:t,...n}){return new Tn((()=>{let t=g(e,n);return t instanceof rt?e:t})(),{docsPath:t,...n})}var Dn=class extends H{constructor(){super("`baseFeeMultiplier` must be greater than 1.",{name:`BaseFeeScalarError`})}},On=class extends H{constructor(){super(`Chain does not support EIP-1559 fees.`,{name:`Eip1559FeesNotSupportedError`})}},kn=class extends H{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Je(e)} gwei).`,{name:`MaxFeePerGasTooLowError`})}},An=class extends H{constructor({blockHash:e,blockNumber:t}){let n=`Block`;e&&(n=`Block at hash "${e}"`),t&&(n=`Block at number "${t}"`),super(`${n} could not be found.`,{name:`BlockNotFoundError`})}},jn={"0x0":`legacy`,"0x1":`eip2930`,"0x2":`eip1559`,"0x3":`eip4844`,"0x4":`eip7702`};function Mn(e,t){let n={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,...e.blockTimestamp!=null&&{blockTimestamp:BigInt(e.blockTimestamp)},chainId:e.chainId?C(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?C(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?jn[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return e.authorizationList&&(n.authorizationList=Nn(e.authorizationList)),n.yParity=(()=>{if(e.yParity)return Number(e.yParity);if(typeof n.v==`bigint`){if(n.v===0n||n.v===27n)return 0;if(n.v===1n||n.v===28n)return 1;if(n.v>=35n)return+(n.v%2n==0n)}})(),n.type===`legacy`&&(delete n.accessList,delete n.maxFeePerBlobGas,delete n.maxFeePerGas,delete n.maxPriorityFeePerGas,delete n.yParity),n.type===`eip2930`&&(delete n.maxFeePerBlobGas,delete n.maxFeePerGas,delete n.maxPriorityFeePerGas),n.type===`eip1559`&&delete n.maxFeePerBlobGas,n}function Nn(e){return e.map(e=>({address:e.address,chainId:Number(e.chainId),nonce:Number(e.nonce),r:e.r,s:e.s,yParity:Number(e.yParity)}))}function Pn(e,t){let n=(e.transactions??[]).map(e=>typeof e==`string`?e:Mn(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:n,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}async function Fn(e,{blockHash:t,blockNumber:n,blockTag:r=e.experimental_blockTag??`latest`,includeTransactions:i}={}){let a=i??!1,o=n===void 0?void 0:R(n),s=null;if(s=t?await e.request({method:`eth_getBlockByHash`,params:[t,a]},{dedupe:!0}):await e.request({method:`eth_getBlockByNumber`,params:[o||r,a]},{dedupe:!!o}),!s)throw new An({blockHash:t,blockNumber:n});return(e.chain?.formatters?.block?.format||Pn)(s,`getBlock`)}async function In(e){let t=await e.request({method:`eth_gasPrice`});return BigInt(t)}async function Ln(e,t){return Rn(e,t)}async function Rn(e,t){let{block:n,chain:r=e.chain,request:i}=t||{};try{let t=r?.fees?.maxPriorityFeePerGas??r?.fees?.defaultPriorityFee;if(typeof t==`function`){let r=await t({block:n||await W(e,Fn,`getBlock`)({}),client:e,request:i});if(r===null)throw Error();return r}if(t!==void 0)return t;let a=await e.request({method:`eth_maxPriorityFeePerGas`});return T(a)}catch{let[t,r]=await Promise.all([n?Promise.resolve(n):W(e,Fn,`getBlock`)({}),W(e,In,`getGasPrice`)({})]);if(typeof t.baseFeePerGas!=`bigint`)throw new On;let i=r-t.baseFeePerGas;return i<0n?0n:i}}async function zn(e,t){return Bn(e,t)}async function Bn(e,t){let{block:n,chain:r=e.chain,request:i,type:a=`eip1559`}=t||{},o=await(async()=>typeof r?.fees?.baseFeeMultiplier==`function`?r.fees.baseFeeMultiplier({block:n,client:e,request:i}):r?.fees?.baseFeeMultiplier??1.2)();if(o<1)throw new Dn;let s=10**(o.toString().split(`.`)[1]?.length??0),c=e=>e*BigInt(Math.round(o*s))/BigInt(s),l=n||await W(e,Fn,`getBlock`)({});if(typeof r?.fees?.estimateFeesPerGas==`function`){let t=await r.fees.estimateFeesPerGas({block:n,client:e,multiply:c,request:i,type:a});if(t!==null)return t}if(a===`eip1559`){if(typeof l.baseFeePerGas!=`bigint`)throw new On;let t=typeof i?.maxPriorityFeePerGas==`bigint`?i.maxPriorityFeePerGas:await Rn(e,{block:l,chain:r,request:i}),n=c(l.baseFeePerGas);return{maxFeePerGas:i?.maxFeePerGas??n+t,maxPriorityFeePerGas:t}}return{gasPrice:i?.gasPrice??c(await W(e,In,`getGasPrice`)({}))}}async function Vn(e,{address:t,blockHash:n,blockNumber:r,blockTag:i=`latest`,requireCanonical:a}){let s=o({blockHash:n,blockNumber:r,blockTag:i,requireCanonical:a}),c=await e.request({method:`eth_getTransactionCount`,params:[t,s]},{dedupe:typeof r==`bigint`||n!==void 0});return C(c)}function Hn(e){let{kzg:t}=e,n=e.to??(typeof e.blobs[0]==`string`?`hex`:`bytes`),r=typeof e.blobs[0]==`string`?e.blobs.map(e=>wt(e)):e.blobs,i=[];for(let e of r)i.push(Uint8Array.from(t.blobToKzgCommitment(e)));return n===`bytes`?i:i.map(e=>y(e))}function Un(e){let{kzg:t}=e,n=e.to??(typeof e.blobs[0]==`string`?`hex`:`bytes`),r=typeof e.blobs[0]==`string`?e.blobs.map(e=>wt(e)):e.blobs,i=typeof e.commitments[0]==`string`?e.commitments.map(e=>wt(e)):e.commitments,a=[];for(let e=0;e<r.length;e++){let n=r[e],o=i[e];a.push(Uint8Array.from(t.computeBlobKzgProof(n,o)))}return n===`bytes`?a:a.map(e=>y(e))}var Wn=Tt;function Gn(e,t){let n=t||`hex`,r=Wn(Qe(e,{strict:!1})?ce(e):e);return n===`bytes`?r:_(r)}function Kn(e){let{commitment:t,version:n=1}=e,r=e.to??(typeof t==`string`?`hex`:`bytes`),i=Gn(t,`bytes`);return i.set([n],0),r===`bytes`?i:y(i)}function qn(e){let{commitments:t,version:n}=e,r=e.to??(typeof t[0]==`string`?`hex`:`bytes`),i=[];for(let e of t)i.push(Kn({commitment:e,to:r,version:n}));return i}var Jn=6,Yn=4096,Xn=32*Yn,Zn=Xn*Jn-1-1*Yn*Jn,Qn=class extends H{constructor({maxSize:e,size:t}){super(`Blob size is too large.`,{metaMessages:[`Max: ${e} bytes`,`Given: ${t} bytes`],name:`BlobSizeTooLargeError`})}},$n=class extends H{constructor(){super(`Blob data must not be empty.`,{name:`EmptyBlobError`})}};function er(e){let t=e.to??(typeof e.data==`string`?`hex`:`bytes`),n=typeof e.data==`string`?wt(e.data):e.data,r=xe(n);if(!r)throw new $n;if(r>761855)throw new Qn({maxSize:Zn,size:r});let i=[],a=!0,o=0;for(;a;){let e=Ce(new Uint8Array(Xn)),t=0;for(;t<Yn;){let r=n.slice(o,o+31);if(e.pushByte(0),e.pushBytes(r),r.length<31){e.pushByte(128),a=!1;break}t++,o+=31}i.push(e)}return t===`bytes`?i.map(e=>e.bytes):i.map(e=>y(e.bytes))}function tr(e){let{data:t,kzg:n,to:r}=e,i=e.blobs??er({data:t,to:r}),a=e.commitments??Hn({blobs:i,kzg:n,to:r}),o=e.proofs??Un({blobs:i,commitments:a,kzg:n,to:r}),s=[];for(let e=0;e<i.length;e++)s.push({blob:i[e],commitment:a[e],proof:o[e]});return s}function nr(e){if(e.type)return e.type;if(e.authorizationList!==void 0)return`eip7702`;if(e.blobs!==void 0||e.blobVersionedHashes!==void 0||e.maxFeePerBlobGas!==void 0||e.sidecars!==void 0)return`eip4844`;if(e.maxFeePerGas!==void 0||e.maxPriorityFeePerGas!==void 0)return`eip1559`;if(e.gasPrice!==void 0)return e.accessList===void 0?`legacy`:`eip2930`;throw new ut({transaction:e})}function rr(e,{docsPath:t,...n}){let r=(()=>{let t=g(e,n);return t instanceof rt?e:t})();return new z(r,{docsPath:t,...n})}async function ir(e){let t=await e.request({method:`eth_chainId`},{dedupe:!0});return C(t)}async function ar(e,t){let{account:n=e.account,accessList:r,authorizationList:i,chain:a=e.chain,blobVersionedHashes:o,blobs:s,data:c,gas:u,gasPrice:d,maxFeePerBlobGas:f,maxFeePerGas:p,maxPriorityFeePerGas:m,nonce:h,nonceManager:g,to:_,type:v,value:y,...b}=t,x=await(async()=>{if(!n||!g||h!==void 0)return h;let t=l(n),r=a?a.id:await W(e,ir,`getChainId`)({});return await g.consume({address:t.address,chainId:r,client:e})})();se(t);let S=a?.formatters?.transactionRequest?.format,C=(S||oe)({...le(b,{format:S}),account:n?l(n):void 0,accessList:r,authorizationList:i,blobs:s,blobVersionedHashes:o,data:c,gas:u,gasPrice:d,maxFeePerBlobGas:f,maxFeePerGas:p,maxPriorityFeePerGas:m,nonce:x,to:_,type:v,value:y},`fillTransaction`);try{let n=await e.request({method:`eth_fillTransaction`,params:[C]}),r=(a?.formatters?.transaction?.format||Mn)(n.tx);delete r.blockHash,delete r.blockNumber,delete r.r,delete r.s,delete r.transactionIndex,delete r.v,delete r.yParity,r.data=r.input,r.gas&&=t.gas??r.gas,r.gasPrice&&=t.gasPrice??r.gasPrice,r.maxFeePerBlobGas&&=t.maxFeePerBlobGas??r.maxFeePerBlobGas,r.maxFeePerGas&&=t.maxFeePerGas??r.maxFeePerGas,r.maxPriorityFeePerGas&&=t.maxPriorityFeePerGas??r.maxPriorityFeePerGas,r.nonce!==void 0&&(r.nonce=t.nonce??r.nonce);let i=await(async()=>{if(typeof a?.fees?.baseFeeMultiplier==`function`){let n=await W(e,Fn,`getBlock`)({});return a.fees.baseFeeMultiplier({block:n,client:e,request:t})}return a?.fees?.baseFeeMultiplier??1.2})();if(i<1)throw new Dn;let o=10**(i.toString().split(`.`)[1]?.length??0),s=e=>e*BigInt(Math.round(i*o))/BigInt(o);return r.feePayerSignature||(r.maxFeePerGas&&!t.maxFeePerGas&&(r.maxFeePerGas=s(r.maxFeePerGas)),r.gasPrice&&!t.gasPrice&&(r.gasPrice=s(r.gasPrice))),{raw:n.raw,transaction:{from:C.from,...r},...n.capabilities?{capabilities:n.capabilities}:{}}}catch(n){throw rr(n,{...t,chain:e.chain})}}var or=[`blobVersionedHashes`,`chainId`,`fees`,`gas`,`nonce`,`type`],sr=new Map,cr=new j(128);async function lr(e,t){let n=t;n.account??=e.account,n.parameters??=or;let{account:r,chain:i=e.chain,nonceManager:a,parameters:o}=n,s=(()=>{if(typeof i?.prepareTransactionRequest==`function`)return{fn:i.prepareTransactionRequest,runAt:[`beforeFillTransaction`]};if(Array.isArray(i?.prepareTransactionRequest))return{fn:i.prepareTransactionRequest[0],runAt:i.prepareTransactionRequest[1].runAt}})(),c;async function u(){return c||(n.chainId===void 0?i?i.id:(c=await W(e,ir,`getChainId`)({}),c):n.chainId)}let d=r&&l(r),f=n.nonce;if(o.includes(`nonce`)&&f===void 0&&d&&a){let t=await u();f=await a.consume({address:d.address,chainId:t,client:e})}if(s?.fn&&s.runAt?.includes(`beforeFillTransaction`)){n=await s.fn({...n,chain:i},{client:e,phase:`beforeFillTransaction`}),f??=n.nonce;let t=n.account??n.from;d=t?l(t):void 0}let p=!((o.includes(`blobVersionedHashes`)||o.includes(`sidecars`))&&n.kzg&&n.blobs||cr.get(e.uid)===!1)&&(o.length>0&&`feePayer`in n&&n.feePayer&&!(`feePayerSignature`in n&&n.feePayerSignature)||[`fees`,`gas`].some(e=>o.includes(e))&&(o.includes(`chainId`)&&typeof n.chainId!=`number`||o.includes(`nonce`)&&typeof f!=`number`||o.includes(`fees`)&&typeof n.gasPrice!=`bigint`&&(typeof n.maxFeePerGas!=`bigint`||typeof n.maxPriorityFeePerGas!=`bigint`)||o.includes(`gas`)&&typeof n.gas!=`bigint`))?await W(e,ar,`fillTransaction`)({...n,nonce:f}).then(t=>{let{chainId:r,from:i,gas:a,gasPrice:o,nonce:s,maxFeePerBlobGas:c,maxFeePerGas:l,maxPriorityFeePerGas:u,type:d,...f}=t.transaction,p=`feeToken`in f?f.feeToken:void 0,m=`feePayerSignature`in f&&f.feePayerSignature!==null&&f.feePayerSignature!==void 0,h=p!=null&&(!(`feeToken`in n)||m);return cr.set(e.uid,!0),{...n,...i?{from:i}:{},...d&&!n.type?{type:d}:{},...r===void 0?{}:{chainId:r},...a===void 0?{}:{gas:a},...o===void 0?{}:{gasPrice:o},...s===void 0?{}:{nonce:s},...c!==void 0&&n.type!==`legacy`&&n.type!==`eip2930`?{maxFeePerBlobGas:c}:{},...l!==void 0&&n.type!==`legacy`&&n.type!==`eip2930`?{maxFeePerGas:l}:{},...u!==void 0&&n.type!==`legacy`&&n.type!==`eip2930`?{maxPriorityFeePerGas:u}:{},...`nonceKey`in f&&f.nonceKey!==void 0?{nonceKey:f.nonceKey}:{},...`keyAuthorization`in f&&f.keyAuthorization!==void 0&&f.keyAuthorization!==null&&!(`keyAuthorization`in n)?{keyAuthorization:f.keyAuthorization}:{},...`feePayerSignature`in f&&f.feePayerSignature!==void 0&&f.feePayerSignature!==null?{feePayerSignature:f.feePayerSignature}:{},...h?{feeToken:p}:{},...t.capabilities?{_capabilities:t.capabilities}:{}}}).catch(t=>{let r=t;if(r.name!==`TransactionExecutionError`)return n;if(r.walk?.(e=>e.name===`ExecutionRevertedError`))throw t;return r.walk?.(e=>{let t=e;return t.name===`MethodNotFoundRpcError`||t.name===`MethodNotSupportedRpcError`||t.message?.includes(`eth_fillTransaction is not available`)})&&cr.set(e.uid,!1),n}):n;f??=p.nonce,n={...p,...d?{from:d?.address}:{},...f===void 0?{}:{nonce:f}};let{blobs:m,gas:h,kzg:g,type:_}=n;s?.fn&&s.runAt?.includes(`beforeFillParameters`)&&(n=await s.fn({...n,chain:i},{client:e,phase:`beforeFillParameters`}));let v;async function y(){return v||(v=await W(e,Fn,`getBlock`)({blockTag:`latest`}),v)}if(o.includes(`nonce`)&&f===void 0&&d&&!a&&(n.nonce=await W(e,Vn,`getTransactionCount`)({address:d.address,blockTag:`pending`})),(o.includes(`blobVersionedHashes`)||o.includes(`sidecars`))&&m&&g){let e=Hn({blobs:m,kzg:g});if(o.includes(`blobVersionedHashes`)){let t=qn({commitments:e,to:`hex`});n.blobVersionedHashes=t}if(o.includes(`sidecars`)){let t=tr({blobs:m,commitments:e,proofs:Un({blobs:m,commitments:e,kzg:g}),to:`hex`});n.sidecars=t}}if(o.includes(`chainId`)&&(n.chainId=await u()),(o.includes(`fees`)||o.includes(`type`))&&_===void 0)try{n.type=nr(n)}catch{let t=sr.get(e.uid);t===void 0&&(t=typeof(await y())?.baseFeePerGas==`bigint`,sr.set(e.uid,t)),n.type=t?`eip1559`:`legacy`}if(o.includes(`fees`)){if(n.type!==`legacy`&&n.type!==`eip2930`){if(n.maxFeePerGas===void 0||n.maxPriorityFeePerGas===void 0){let{maxFeePerGas:t,maxPriorityFeePerGas:r}=await Bn(e,{block:await y(),chain:i,request:n});if(n.maxPriorityFeePerGas===void 0&&n.maxFeePerGas&&n.maxFeePerGas<r)throw new kn({maxPriorityFeePerGas:r});n.maxPriorityFeePerGas=r,n.maxFeePerGas=t}}else{if(n.maxFeePerGas!==void 0||n.maxPriorityFeePerGas!==void 0)throw new On;if(n.gasPrice===void 0){let{gasPrice:t}=await Bn(e,{block:await y(),chain:i,request:n,type:`legacy`});n.gasPrice=t}}}return o.includes(`gas`)&&h===void 0&&(n.gas=await W(e,ur,`estimateGas`)({...n,account:d,prepare:d?.type===`local`?[]:[`blobVersionedHashes`]})),s?.fn&&s.runAt?.includes(`afterFillParameters`)&&(n=await s.fn({...n,chain:i},{client:e,phase:`afterFillParameters`})),se(n),delete n.parameters,n}async function ur(e,t){let{account:n=e.account,prepare:r=!0}=t,i=n?l(n):void 0,a=(()=>{if(Array.isArray(r))return r;if(i?.type!==`local`)return[`blobVersionedHashes`]})();try{let n=await(async()=>{if(t.to)return t.to;if(t.authorizationList&&t.authorizationList.length>0)return await wn({authorization:t.authorizationList[0]}).catch(()=>{throw new H("`to` is required. Could not infer from `authorizationList`")})})(),{accessList:o,authorizationList:s,blobs:c,blobVersionedHashes:l,blockNumber:u,blockTag:d,data:f,gas:p,gasPrice:m,maxFeePerBlobGas:h,maxFeePerGas:g,maxPriorityFeePerGas:_,nonce:y,value:b,stateOverride:x,...S}=r?await lr(e,{...t,parameters:a,to:n}):t;if(p&&t.gas!==p)return p;let C=(typeof u==`bigint`?R(u):void 0)||d,w=v(x);se(t);let T=e.chain?.formatters?.transactionRequest?.format,E=(T||oe)({...le(S,{format:T}),account:i,accessList:o,authorizationList:s,blobs:c,blobVersionedHashes:l,data:f,gasPrice:m,maxFeePerBlobGas:h,maxFeePerGas:g,maxPriorityFeePerGas:_,nonce:y,to:n,value:b},`estimateGas`);return BigInt(await e.request({method:`eth_estimateGas`,params:w?[E,C??e.experimental_blockTag??`latest`,w]:C?[E,C]:[E]}))}catch(n){throw En(n,{...t,account:i,chain:e.chain})}}async function dr(e,t){let{abi:n,address:r,args:i,functionName:a,dataSuffix:o=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,...s}=t,c=L({abi:n,args:i,functionName:a});try{return await W(e,ur,`estimateGas`)({data:`${c}${o?o.replace(`0x`,``):``}`,to:r,...s})}catch(e){throw pn(e,{abi:n,address:r,args:i,docsPath:`/docs/contract/estimateContractGas`,functionName:a,sender:(s.account?l(s.account):void 0)?.address})}}function fr(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,blockTimestamp:e.blockTimestamp?BigInt(e.blockTimestamp):e.blockTimestamp===null?null:void 0,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}var pr=`/docs/contract/decodeEventLog`;function mr(e){let{abi:t,data:n,strict:i,topics:a}=e,o=i??!0,[s,...c]=a;if(!s)throw new r({docsPath:pr});let l=t.find(e=>e.type===`event`&&s===x(lt(e)));if(!(l&&`name`in l)||l.type!==`event`)throw new De(s,{docsPath:pr});let{name:u,inputs:d}=l,f=d?.some(e=>!(`name`in e&&e.name)),p=f?[]:{},m=d.map((e,t)=>[e,t]).filter(([e])=>`indexed`in e&&e.indexed),h=[];for(let e=0;e<m.length;e++){let[t,n]=m[e],r=c[e];if(!r){if(o)throw new ot({abiItem:l,param:t});h.push([t,n]);continue}p[f?n:t.name||n]=hr({param:t,value:r})}let g=d.filter(e=>!(`indexed`in e&&e.indexed)),_=o?g:[...h.map(([e])=>e),...g];if(_.length>0){if(n&&n!==`0x`)try{let e=St(_,n);if(e){let t=0;if(!o)for(let[n,r]of h)p[f?r:n.name||r]=e[t++];if(f)for(let n=0;n<d.length;n++)p[n]===void 0&&t<e.length&&(p[n]=e[t++]);else for(let n=0;n<g.length;n++)p[g[n].name]=e[t++]}}catch(e){if(o)throw e instanceof fe||e instanceof bt?new Ye({abiItem:l,data:n,params:_,size:xe(n)}):e}else if(o)throw new Ye({abiItem:l,data:`0x`,params:_,size:0})}return{eventName:u,args:Object.values(p).length>0?p:void 0}}function hr({param:e,value:t}){return e.type===`string`||e.type===`bytes`||e.type===`tuple`||e.type.match(/^(.*)\[(\d+)?\]$/)?t:(St([e],t)||[])[0]}function gr(e){let{abi:t,args:n,logs:r,strict:i=!0}=e,a=(()=>{if(e.eventName)return Array.isArray(e.eventName)?e.eventName:[e.eventName]})(),o=t.filter(e=>e.type===`event`).map(e=>({abi:e,selector:x(e)}));return r.map(e=>{let t=typeof e.blockNumber==`string`?fr(e):e,r=o.filter(e=>t.topics[0]===e.selector);if(r.length===0)return null;let s,c;for(let e of r)try{s=mr({...t,abi:[e.abi],strict:!0}),c=e;break}catch{}if(!s&&!i){c=r[0];try{s=mr({data:t.data,topics:t.topics,abi:[c.abi],strict:!1})}catch{let e=c.abi.inputs?.some(e=>!(`name`in e&&e.name));return{...t,args:e?[]:{},eventName:c.abi.name}}}return!s||!c||a&&!a.includes(s.eventName)||!_r({args:s.args,inputs:c.abi.inputs,matchArgs:n})?null:{...s,...t}}).filter(Boolean)}function _r(e){let{args:t,inputs:n,matchArgs:r}=e;if(!r)return!0;if(!t)return!1;function i(e,t,n){try{return e.type===`address`?Ct(t,n):e.type===`string`||e.type===`bytes`?D(ce(t))===n:t===n}catch{return!1}}return Array.isArray(t)&&Array.isArray(r)?r.every((e,r)=>{if(e==null)return!0;let a=n[r];return a?(Array.isArray(e)?e:[e]).some(e=>i(a,e,t[r])):!1}):typeof t==`object`&&!Array.isArray(t)&&typeof r==`object`&&!Array.isArray(r)&&Object.entries(r).every(([e,r])=>{if(r==null)return!0;let a=n.find(t=>t.name===e);return a?(Array.isArray(r)?r:[r]).some(n=>i(a,n,t[e])):!1})}async function vr(e,{address:t,blockHash:n,fromBlock:r,toBlock:i,event:a,events:o,args:s,strict:c}={}){let l=c??!1,u=o??(a?[a]:void 0),d=[];u&&(d=[u.flatMap(e=>jt({abi:[e],eventName:e.name,args:o?void 0:s}))],a&&(d=d[0]));let f;f=n?await e.request({method:`eth_getLogs`,params:[{address:t,topics:d,blockHash:n}]}):await e.request({method:`eth_getLogs`,params:[{address:t,topics:d,fromBlock:typeof r==`bigint`?R(r):r,toBlock:typeof i==`bigint`?R(i):i}]});let p=f.map(e=>fr(e));return u?gr({abi:u,args:s,logs:p,strict:l}):p}async function yr(e,t){let{abi:n,address:r,args:i,blockHash:a,eventName:o,fromBlock:s,toBlock:c,strict:l}=t,u=o?vt({abi:n,name:o}):void 0,d=u?void 0:n.filter(e=>e.type===`event`);return W(e,vr,`getLogs`)({address:r,args:i,blockHash:a,event:u,events:d,fromBlock:s,toBlock:c,strict:l})}function br(e,t){if(Pr(e)>t)throw new Ur({givenSize:Pr(e),maxSize:t})}function xr(e,t){if(typeof t==`number`&&t>0&&t>Pr(e)-1)throw new Wr({offset:t,position:`start`,size:Pr(e)})}function Sr(e,t,n){if(typeof t==`number`&&typeof n==`number`&&Pr(e)!==n-t)throw new Wr({offset:n,position:`end`,size:Pr(e)})}var Cr={zero:48,nine:57,A:65,F:70,a:97,f:102};function wr(e){if(e>=Cr.zero&&e<=Cr.nine)return e-Cr.zero;if(e>=Cr.A&&e<=Cr.F)return e-(Cr.A-10);if(e>=Cr.a&&e<=Cr.f)return e-(Cr.a-10)}function Tr(e,t={}){let{dir:n,size:r=32}=t;if(r===0)return e;if(e.length>r)throw new Gr({size:e.length,targetSize:r,type:`Bytes`});let i=new Uint8Array(r);for(let t=0;t<r;t++){let a=n===`right`;i[a?t:r-t-1]=e[a?t:e.length-t-1]}return i}function Er(e,t={}){let{dir:n=`left`}=t,r=e,i=0;for(let e=0;e<r.length-1&&r[n===`left`?e:r.length-e-1].toString()===`0`;e++)i++;return r=n===`left`?r.slice(i):r.slice(0,r.length-i),r}var Dr=new TextDecoder,Or=new TextEncoder;function kr(e){return e instanceof Uint8Array?e:typeof e==`string`?jr(e):Ar(e)}function Ar(e){return e instanceof Uint8Array?e:new Uint8Array(e)}function jr(e,t={}){let{size:n}=t,r=e;n&&(b(e,n),r=Ve(e,n));let i=r.slice(2);i.length%2&&(i=`0${i}`);let a=i.length/2,o=new Uint8Array(a);for(let e=0,t=0;e<a;e++){let n=wr(i.charCodeAt(t++)),r=wr(i.charCodeAt(t++));if(n===void 0||r===void 0)throw new E(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);o[e]=n<<4|r}return o}function Mr(e,t={}){let{size:n}=t,r=Or.encode(e);return typeof n==`number`?(br(r,n),Nr(r,n)):r}function Nr(e,t){return Tr(e,{dir:`right`,size:t})}function Pr(e){return e.length}function Fr(e,t,n,r={}){let{strict:i}=r;xr(e,t);let a=e.slice(t,n);return i&&Sr(a,t,n),a}function Ir(e,t={}){let{size:n}=t;n!==void 0&&br(e,n);let r=ie(e,t);return ee(r,t)}function Lr(e,t={}){let{size:n}=t,r=e;if(n!==void 0&&(br(r,n),r=Br(r)),r.length>1||r[0]>1)throw new Hr(r);return!!r[0]}function Rr(e,t={}){let{size:n}=t;n!==void 0&&br(e,n);let r=ie(e,t);return O(r,t)}function zr(e,t={}){let{size:n}=t,r=e;return n!==void 0&&(br(r,n),r=Vr(r)),Dr.decode(r)}function Br(e){return Er(e,{dir:`left`})}function Vr(e){return Er(e,{dir:`right`})}var Hr=class extends E{constructor(e){super(`Bytes value \`${e}\` is not a valid boolean.`,{metaMessages:["The bytes array must contain a single byte of either a `0` or `1` value."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Bytes.InvalidBytesBooleanError`})}},Ur=class extends E{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Bytes.SizeOverflowError`})}},Wr=class extends E{constructor({offset:e,position:t,size:n}){super(`Slice ${t===`start`?`starting`:`ending`} at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Bytes.SliceOffsetOutOfBoundsError`})}},Gr=class extends E{constructor({size:e,targetSize:t,type:n}){super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Bytes.SizeExceedsPaddingSizeError`})}};async function Kr(e,t){let{abi:n,address:r,args:i,functionName:a,...o}=t,s=L({abi:n,args:i,functionName:a});try{let{data:t}=await W(e,at,`call`)({...o,data:s,to:r});return P({abi:n,args:i,functionName:a,data:t||`0x`})}catch(e){throw pn(e,{abi:n,address:r,args:i,docsPath:`/docs/contract/readContract`,functionName:a})}}async function qr(e,t){let{abi:n,address:r,args:i,functionName:a,dataSuffix:o=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,...s}=t,c=s.account?l(s.account):e.account,u=L({abi:n,args:i,functionName:a});try{let{data:l}=await W(e,at,`call`)({batch:!1,data:`${u}${o?o.replace(`0x`,``):``}`,to:r,...s,account:c});return{result:P({abi:n,args:i,functionName:a,data:l||`0x`}),request:{abi:n.filter(e=>`name`in e&&e.name===t.functionName),address:r,args:i,dataSuffix:o,functionName:a,...s,account:c}}}catch(e){throw pn(e,{abi:n,address:r,args:i,docsPath:`/docs/contract/simulateContract`,functionName:a,sender:c?.address})}}var Jr=new Map,Yr=new Map,Xr=0;function Zr(e,t,n){let r=++Xr,i=()=>Jr.get(e)||[],a=()=>{let t=i().filter(e=>e.id!==r);if(t.length===0){Jr.delete(e),Yr.delete(e);return}Jr.set(e,t)},o=()=>{let t=i();if(!t.some(e=>e.id===r))return;let n=Yr.get(e);if(t.length===1&&n){let e=n();e instanceof Promise&&e.catch(()=>{})}a()},s=i();if(Jr.set(e,[...s,{id:r,fns:t}]),s&&s.length>0)return o;let c={};for(let e in t)c[e]=((...t)=>{let n=i();if(n.length!==0)for(let r of n)r.fns[e]?.(...t)});let l=n(c);return typeof l==`function`&&Yr.set(e,l),o}async function Qr(e,{signal:t}={}){return new Promise((n,r)=>{if(t?.aborted){r(ze(t));return}let i=()=>t?.removeEventListener(`abort`,o),a=setTimeout(()=>{i(),n()},e),o=()=>{clearTimeout(a),i(),r(ze(t))};t?.addEventListener(`abort`,o,{once:!0})})}function $r(e,{emitOnBegin:t,initialWaitTime:n,interval:r}){let i=!0,a=()=>i=!1;return(async()=>{let o;t&&(o=await e({unpoll:a})),await Qr(await n?.(o)??r);let s=async()=>{i&&(await e({unpoll:a}),await Qr(r),s())};s()})(),a}var ei=new Map,ti=new Map;function ni(e){let t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:n=>t.set(e,n)}),n=t(e,ei),r=t(e,ti);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function ri(e,{cacheKey:t,cacheTime:n=1/0}){let r=ni(t),i=r.response.get();if(i&&n>0&&Date.now()-i.created.getTime()<n)return i.data;let a=r.promise.get();a||(a=e(),r.promise.set(a));try{let e=await a;return r.response.set({created:new Date,data:e}),e}finally{r.promise.clear()}}var ii=e=>`blockNumber.${e}`;async function ai(e,{cacheTime:t=e.cacheTime}={}){let n=await ri(()=>e.request({method:`eth_blockNumber`}),{cacheKey:ii(e.uid),cacheTime:t});return BigInt(n)}async function oi(e,{filter:t}){let n=`strict`in t&&t.strict,r=await t.request({method:`eth_getFilterChanges`,params:[t.id]});if(typeof r[0]==`string`)return r;let i=r.map(e=>fr(e));return!(`abi`in t)||!t.abi?i:gr({abi:t.abi,logs:i,strict:n})}async function si(e,{filter:t}){return t.request({method:`eth_uninstallFilter`,params:[t.id]})}function ci(e,t){let{abi:n,address:r,args:i,batch:a=!0,eventName:o,fromBlock:s,onError:c,onLogs:l,poll:u,pollingInterval:d=e.pollingInterval,strict:f}=t;return(u===void 0?typeof s==`bigint`||e.transport.type!==`webSocket`&&e.transport.type!==`ipc`&&(e.transport.type!==`fallback`||e.transport.transports[0].config.type!==`webSocket`&&e.transport.transports[0].config.type!==`ipc`):u)?(()=>{let t=f??!1;return Zr(ye([`watchContractEvent`,r,i,a,e.uid,o,d,t,s]),{onLogs:l,onError:c},c=>{let l;s!==void 0&&(l=s-1n);let u,f=!1,p=$r(async()=>{if(!f){try{u=await W(e,Pt,`createContractEventFilter`)({abi:n,address:r,args:i,eventName:o,strict:t,fromBlock:s})}catch{}f=!0;return}try{let s;if(u)s=await W(e,oi,`getFilterChanges`)({filter:u});else{let a=await W(e,ai,`getBlockNumber`)({});s=l&&l<a?await W(e,yr,`getContractEvents`)({abi:n,address:r,args:i,eventName:o,fromBlock:l+1n,toBlock:a,strict:t}):[],l=a}if(s.length===0)return;if(a)c.onLogs(s);else for(let e of s)c.onLogs([e])}catch(e){u&&e instanceof Ut&&(f=!1),c.onError?.(e)}},{emitOnBegin:!0,interval:d});return async()=>{u&&await W(e,si,`uninstallFilter`)({filter:u}),p()}})})():(()=>{let t=f??!1,s=ye([`watchContractEvent`,r,i,a,e.uid,o,d,t]),u=!0,p=()=>u=!1;return Zr(s,{onLogs:l,onError:c},t=>((async()=>{try{let a=(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})(),s=o?jt({abi:n,eventName:o,args:i}):[],{unsubscribe:c}=await a.subscribe({params:[`logs`,{address:r,topics:s}],onData(e){if(!u)return;let r=e.result;try{let{eventName:e,args:i}=mr({abi:n,data:r.data,topics:r.topics,strict:f}),a=fr(r,{args:i,eventName:e});t.onLogs([a])}catch(e){let n,i;if(e instanceof Ye||e instanceof ot){if(f)return;n=e.abiItem.name,i=e.abiItem.inputs?.some(e=>!(`name`in e&&e.name))}let a=fr(r,{args:i?[]:{},eventName:n});t.onLogs([a])}},onError(e){t.onError?.(e)}});p=c,u||p()}catch(e){c?.(e)}})(),()=>p()))})()}var li=class extends H{constructor({docsPath:e}={}){super([`Could not find an Account to execute with this Action.`,"Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."].join(`
`),{docsPath:e,docsSlug:`account`,name:`AccountNotFoundError`})}};async function ui(e,{serializedTransaction:t}){return e.request({method:`eth_sendRawTransaction`,params:[t]},{retryCount:0})}function di(e,{delay:t=100,retryCount:n=2,shouldRetry:r=()=>!0,signal:i}={}){return new Promise((a,o)=>{let s=async({count:c=0}={})=>{if(i?.aborted){o(ze(i));return}let l=async({error:e})=>{let n=typeof t==`function`?t({count:c,error:e}):t;if(n)try{await Qr(n,{signal:i})}catch(e){o(e);return}return s({count:c+1})};try{a(await e())}catch(e){if(i?.aborted){o(ze(i));return}if($e(e)){o(e);return}if(c<n&&await r({count:c,error:e}))return l({error:e});o(e)}};s().catch(o)})}var fi={"0x0":`reverted`,"0x1":`success`};function pi(e,t){let n={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>fr(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?C(e.transactionIndex):null,status:e.status?fi[e.status]:null,type:e.type?jn[e.type]||e.type:null};return e.blobGasPrice&&(n.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(n.blobGasUsed=BigInt(e.blobGasUsed)),n}var mi=256,hi=mi,gi;function _i(e=11){if(!gi||hi+e>mi*2){gi=``,hi=0;for(let e=0;e<mi;e++)gi+=(256+Math.random()*256|0).toString(16).substring(1)}return gi.substring(hi,hi+++e)}function vi(e){let{batch:t,chain:n,ccipRead:r,dataSuffix:i,key:a=`base`,name:o=`Base Client`,tokens:s,type:c=`base`}=e,u=e.experimental_blockTag??(typeof n?.experimental_preconfirmationTime==`number`?`pending`:void 0),d=n?.blockTime??12e3,f=Math.min(Math.max(Math.floor(d/2),500),4e3),p=e.pollingInterval??f,m=e.cacheTime??p,h=e.account?l(e.account):void 0,{config:g,request:_,value:v}=e.transport({account:h,chain:n,pollingInterval:p}),y={account:h,batch:t,cacheTime:m,ccipRead:r,chain:n,dataSuffix:i,key:a,name:o,pollingInterval:p,request:_,tokens:s,transport:{...g,...v},type:c,uid:_i(),...u?{experimental_blockTag:u}:{}};function b(e){return t=>{let n=t(e);for(let e in y)delete n[e];let r={...e,...n};for(let t in n){let i=e[t],a=n[t];yi(i)&&yi(a)&&(r[t]={...i,...a})}return Object.assign(r,{extend:b(r)})}}return Object.assign(y,{extend:b(y)})}function yi(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function bi(e,t){let n=(n={})=>t(e,n);for(let r of[`call`,`calls`,`callWithPeriod`,`estimateGas`,`prepare`,`prepareRecipient`,`simulate`])if(Object.hasOwn(t,r)){let i=t[r];n[r]=(t={})=>i.length===1?i(t):i(e,t)}for(let e of[`extractEvent`,`extractEvents`])Object.hasOwn(t,e)&&(n[e]=t[e]);return n}function xi(e){if(!(e instanceof H))return!1;let t=e.walk(e=>e instanceof ft);return t instanceof ft?t.data?.errorName===`HttpError`||t.data?.errorName===`ResolverError`||t.data?.errorName===`ResolverNotContract`||t.data?.errorName===`ResolverNotFound`||t.data?.errorName===`ReverseAddressMismatch`||t.data?.errorName===`UnsupportedResolverProfile`:!1}function Si(e){if(e.length!==66||e.indexOf(`[`)!==0||e.indexOf(`]`)!==65)return null;let t=`0x${e.slice(1,65)}`;return Qe(t)?t:null}function Ci(e){let t=new Uint8Array(32).fill(0);if(!e)return y(t);let n=e.split(`.`);for(let e=n.length-1;e>=0;--e){let r=Si(n[e]),i=r?ce(r):D(s(n[e]),`bytes`);t=D(He([t,i]),`bytes`)}return y(t)}function wi(e){return`[${e.slice(2)}]`}function Ti(e){let t=new Uint8Array(32).fill(0);return e?Si(e)||D(s(e)):y(t)}function Ei(e){let t=e.replace(/^\.|\.$/gm,``);if(t.length===0)return new Uint8Array(1);let n=new Uint8Array(s(t).byteLength+2),r=0,i=t.split(`.`);for(let e=0;e<i.length;e++){let t=s(i[e]);t.byteLength>255&&(t=s(wi(Ti(i[e])))),n[r]=t.length,n.set(t,r+1),r+=t.length+1}return n.byteLength===r+1?n:n.slice(0,r+1)}async function Di(e,t){let{blockNumber:n,blockTag:r,coinType:i,name:a,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return ct({blockNumber:n,chain:c,contract:`ensUniversalResolver`})})(),u=c?.ensTlds;if(u&&!u.some(e=>a.endsWith(e)))return null;let d=i==null?[Ci(a)]:[Ci(a),BigInt(i)];try{let t=L({abi:ke,functionName:`addr`,args:d}),s={address:l,abi:gt,functionName:`resolveWithGateways`,args:[_(Ei(a)),t,o??[`x-batch-gateway:true`]],blockNumber:n,blockTag:r},c=await W(e,Kr,`readContract`)(s);if(c[0]===`0x`)return null;let u=Oi({coinType:i,data:c[0],args:d});return u===`0x`||me(u)===`0x00`?null:u}catch(e){if(s)throw e;if(xi(e))return null;throw e}}function Oi({coinType:e,data:t,args:n}){try{return P({abi:ke,args:n,functionName:`addr`,data:t})}catch(n){if(e==null)throw n;let r=me(t);if(xe(r)===20)return k(r);throw n}}var ki=class extends H{constructor({data:e}){super(`Unable to extract image from metadata. The metadata may be malformed or invalid.`,{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",``,`Provided data: ${JSON.stringify(e)}`],name:`EnsAvatarInvalidMetadataError`})}},Ai=class extends H{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`,{name:`EnsAvatarInvalidNftUriError`})}},ji=class extends H{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,{name:`EnsAvatarUriResolutionError`})}},Mi=class extends H{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,{name:`EnsAvatarUnsupportedNamespaceError`})}},Ni=/(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,Pi=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,Fi=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,Ii=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function Li(e){try{let t=await fetch(e,{method:`HEAD`});return t.status===200&&t.headers.get(`content-type`)?.startsWith(`image/`)}catch(t){return typeof t==`object`&&t.response!==void 0||!Object.hasOwn(globalThis,`Image`)?!1:new Promise(t=>{let n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e})}}function Ri(e,t){return e?e.endsWith(`/`)?e.slice(0,-1):e:t}function zi({uri:e,gatewayUrls:t}){let n=Fi.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};let r=Ri(t?.ipfs,`https://ipfs.io`),i=Ri(t?.arweave,`https://arweave.net`),{protocol:a,subpath:o,target:s,subtarget:c=``}=e.match(Ni)?.groups||{},l=a===`ipns:/`||o===`ipns/`,u=a===`ipfs:/`||o===`ipfs/`||Pi.test(e);if(e.startsWith(`http`)&&!l&&!u){let n=e;return t?.arweave&&(n=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:n,isOnChain:!1,isEncoded:!1}}if((l||u)&&s)return{uri:`${r}/${l?`ipns`:`ipfs`}/${s}${c}`,isOnChain:!1,isEncoded:!1};if(a===`ar:/`&&s)return{uri:`${i}/${s}${c||``}`,isOnChain:!1,isEncoded:!1};let d=e.replace(Ii,``);if(d.startsWith(`<svg`)&&(d=`data:image/svg+xml;base64,${btoa(d)}`),d.startsWith(`data:`)||d.startsWith(`{`))return{uri:d,isOnChain:!0,isEncoded:!1};throw new ji({uri:e})}function Bi(e){if(typeof e!=`object`||!(`image`in e)&&!(`image_url`in e)&&!(`image_data`in e))throw new ki({data:e});return e.image||e.image_url||e.image_data}async function Vi({gatewayUrls:e,uri:t}){try{return await Hi({gatewayUrls:e,uri:Bi(await fetch(t).then(e=>e.json()))})}catch{throw new ji({uri:t})}}async function Hi({gatewayUrls:e,uri:t}){let{uri:n,isOnChain:r}=zi({uri:t,gatewayUrls:e});if(r||await Li(n))return n;throw new ji({uri:t})}function Ui(e){let t=e;t.startsWith(`did:nft:`)&&(t=t.replace(`did:nft:`,``).replace(/_/g,`/`));let[n,r,i]=t.split(`/`),[a,o]=n.split(`:`),[s,c]=r.split(`:`);if(!a||a.toLowerCase()!==`eip155`)throw new Ai({reason:`Only EIP-155 supported`});if(!o)throw new Ai({reason:`Chain ID not found`});if(!c)throw new Ai({reason:`Contract address not found`});if(!i)throw new Ai({reason:`Token ID not found`});if(!s)throw new Ai({reason:`ERC namespace not found`});return{chainID:Number.parseInt(o,10),namespace:s.toLowerCase(),contractAddress:c,tokenID:i}}async function Wi(e,{nft:t}){if(t.namespace===`erc721`)return Kr(e,{address:t.contractAddress,abi:[{name:`tokenURI`,type:`function`,stateMutability:`view`,inputs:[{name:`tokenId`,type:`uint256`}],outputs:[{name:``,type:`string`}]}],functionName:`tokenURI`,args:[BigInt(t.tokenID)]});if(t.namespace===`erc1155`)return Kr(e,{address:t.contractAddress,abi:[{name:`uri`,type:`function`,stateMutability:`view`,inputs:[{name:`_id`,type:`uint256`}],outputs:[{name:``,type:`string`}]}],functionName:`uri`,args:[BigInt(t.tokenID)]});throw new Mi({namespace:t.namespace})}async function Gi(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?Ki(e,{gatewayUrls:t,record:n}):Hi({uri:n,gatewayUrls:t})}async function Ki(e,{gatewayUrls:t,record:n}){let r=Ui(n),{uri:i,isOnChain:a,isEncoded:o}=zi({uri:await Wi(e,{nft:r}),gatewayUrls:t});if(a&&(i.includes(`data:application/json;base64,`)||i.startsWith(`{`))){let e=o?atob(i.replace(`data:application/json;base64,`,``)):i;return Hi({uri:Bi(JSON.parse(e)),gatewayUrls:t})}let s=r.tokenID;return r.namespace===`erc1155`&&(s=s.replace(`0x`,``).padStart(64,`0`)),Vi({gatewayUrls:t,uri:i.replace(/(?:0x)?{id}/,s)})}async function qi(e,t){let{blockNumber:n,blockTag:r,key:i,name:a,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return ct({blockNumber:n,chain:c,contract:`ensUniversalResolver`})})(),u=c?.ensTlds;if(u&&!u.some(e=>a.endsWith(e)))return null;try{let t={address:l,abi:gt,args:[_(Ei(a)),L({abi:_e,functionName:`text`,args:[Ci(a),i]}),o??[`x-batch-gateway:true`]],functionName:`resolveWithGateways`,blockNumber:n,blockTag:r},s=await W(e,Kr,`readContract`)(t);if(s[0]===`0x`)return null;let c=P({abi:_e,functionName:`text`,data:s[0]});return c===``?null:c}catch(e){if(s)throw e;if(xi(e))return null;throw e}}async function Ji(e,{blockNumber:t,blockTag:n,assetGatewayUrls:r,name:i,gatewayUrls:a,strict:o,universalResolverAddress:s}){let c=await W(e,qi,`getEnsText`)({blockNumber:t,blockTag:n,key:`avatar`,name:i,universalResolverAddress:s,gatewayUrls:a,strict:o});if(!c)return null;try{return await Gi(e,{record:c,gatewayUrls:r})}catch{return null}}async function Yi(e,t){let{address:n,blockNumber:r,blockTag:i,coinType:a=60n,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return ct({blockNumber:r,chain:c,contract:`ensUniversalResolver`})})();try{let t={address:l,abi:xt,args:[n,a,o??[`x-batch-gateway:true`]],functionName:`reverseWithGateways`,blockNumber:r,blockTag:i},[s]=await W(e,Kr,`readContract`)(t);return s||null}catch(e){if(s)throw e;if(xi(e))return null;throw e}}async function Xi(e,t){let{blockNumber:n,blockTag:r,name:i}=t,{chain:a}=e,o=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!a)throw Error(`client chain not configured. universalResolverAddress is required.`);return ct({blockNumber:n,chain:a,contract:`ensUniversalResolver`})})(),s=a?.ensTlds;if(s&&!s.some(e=>i.endsWith(e)))throw Error(`${i} is not a valid ENS TLD (${s?.join(`, `)}) for chain "${a.name}" (id: ${a.id}).`);let[c]=await W(e,Kr,`readContract`)({address:o,abi:[{inputs:[{type:`bytes`}],name:`findResolver`,outputs:[{type:`address`},{type:`bytes32`},{type:`uint256`}],stateMutability:`view`,type:`function`}],functionName:`findResolver`,args:[_(Ei(i))],blockNumber:n,blockTag:r});return c}async function Zi(e,t){let{account:n=e.account,blockNumber:r,blockTag:i=`latest`,blobs:a,data:o,gas:s,gasPrice:c,maxFeePerBlobGas:u,maxFeePerGas:d,maxPriorityFeePerGas:f,to:p,value:m,...h}=t,g=n?l(n):void 0;try{se(t);let n=(typeof r==`bigint`?R(r):void 0)||i,l=e.chain?.formatters?.transactionRequest?.format,_=(l||oe)({...le(h,{format:l}),account:g,blobs:a,data:o,gas:s,gasPrice:c,maxFeePerBlobGas:u,maxFeePerGas:d,maxPriorityFeePerGas:f,to:p,value:m},`createAccessList`),v=await e.request({method:`eth_createAccessList`,params:[_,n]});if(v.error)throw new H(v.error,{details:v.error});return{accessList:v.accessList,gasUsed:BigInt(v.gasUsed)}}catch(n){throw Ze(n,{...t,account:g,chain:e.chain})}}async function Qi(e){let t=Nt(e,{method:`eth_newBlockFilter`}),n=await e.request({method:`eth_newBlockFilter`});return{id:n,request:t(n),type:`block`}}async function $i(e,{address:t,args:n,event:r,events:i,fromBlock:a,strict:o,toBlock:s}={}){let c=i??(r?[r]:void 0),l=Nt(e,{method:`eth_newFilter`}),u=[];c&&(u=[c.flatMap(e=>jt({abi:[e],eventName:e.name,args:n}))],r&&(u=u[0]));let d=await e.request({method:`eth_newFilter`,params:[{address:t,fromBlock:typeof a==`bigint`?R(a):a,toBlock:typeof s==`bigint`?R(s):s,...u.length?{topics:u}:{}}]});return{abi:c,args:n,eventName:r?r.name:void 0,fromBlock:a,id:d,request:l(d),strict:!!o,toBlock:s,type:`event`}}async function ea(e){let t=Nt(e,{method:`eth_newPendingTransactionFilter`}),n=await e.request({method:`eth_newPendingTransactionFilter`});return{id:n,request:t(n),type:`transaction`}}async function ta(e,{address:t,blockHash:n,blockNumber:r,blockTag:i=e.experimental_blockTag??`latest`,requireCanonical:a}){let s=o({blockHash:n,blockNumber:r,blockTag:i,requireCanonical:a});if(e.batch?.multicall&&e.chain?.contracts?.multicall3){let o=e.chain.contracts.multicall3.address,s=L({abi:Me,functionName:`getEthBalance`,args:[t]}),{data:c}=await W(e,at,`call`)({to:o,data:s,blockHash:n,blockNumber:r,blockTag:i,requireCanonical:a});return P({abi:Me,functionName:`getEthBalance`,args:[t],data:c||`0x`})}let c=await e.request({method:`eth_getBalance`,params:[t,s]});return BigInt(c)}async function na(e){let t=await e.request({method:`eth_blobBaseFee`});return BigInt(t)}async function ra(e,{blockHash:t,blockNumber:n,blockTag:r=e.experimental_blockTag??`latest`}={}){let i=n===void 0?void 0:R(n),a=await e.request({method:`eth_getBlockReceipts`,params:[t||i||r]},{dedupe:!!(t||i)});if(!a)throw new An({blockHash:t,blockNumber:n});let o=e.chain?.formatters?.transactionReceipt?.format||pi;return a.map(e=>o(e,`getBlockReceipts`))}async function ia(e,{blockHash:t,blockNumber:n,blockTag:r=`latest`}={}){let i=n===void 0?void 0:R(n),a;return a=t?await e.request({method:`eth_getBlockTransactionCountByHash`,params:[t]},{dedupe:!0}):await e.request({method:`eth_getBlockTransactionCountByNumber`,params:[i||r]},{dedupe:!!i}),C(a)}async function aa(e,{address:t,blockHash:n,blockNumber:r,blockTag:i=`latest`,requireCanonical:a}){let s=o({blockHash:n,blockNumber:r,blockTag:i,requireCanonical:a}),c=await e.request({method:`eth_getCode`,params:[t,s]},{dedupe:typeof r==`bigint`||n!==void 0});if(c!==`0x`)return c}async function oa(e,{address:t,blockNumber:n,blockTag:r=`latest`}){let i=await aa(e,{address:t,...n===void 0?{blockTag:r}:{blockNumber:n}});if(i&&xe(i)===23&&i.startsWith(`0xef0100`))return k(ne(i,3,23))}var sa=class extends H{constructor({address:e}){super(`No EIP-712 domain found on contract "${e}".`,{metaMessages:[`Ensure that:`,`- The contract is deployed at the address "${e}".`,"- `eip712Domain()` function exists on the contract.","- `eip712Domain()` function matches signature to ERC-5267 specification."],name:`Eip712DomainNotFoundError`})}};async function ca(e,t){let{address:n,factory:r,factoryData:i}=t;try{let[t,a,o,s,c,l,u]=await W(e,Kr,`readContract`)({abi:la,address:n,functionName:`eip712Domain`,factory:r,factoryData:i});return{domain:{name:a,version:o,chainId:Number(s),verifyingContract:c,salt:l},extensions:u,fields:t}}catch(e){let t=e;throw t.name===`ContractFunctionExecutionError`&&t.cause.name===`ContractFunctionZeroDataError`?new sa({address:n}):t}}var la=[{inputs:[],name:`eip712Domain`,outputs:[{name:`fields`,type:`bytes1`},{name:`name`,type:`string`},{name:`version`,type:`string`},{name:`chainId`,type:`uint256`},{name:`verifyingContract`,type:`address`},{name:`salt`,type:`bytes32`},{name:`extensions`,type:`uint256[]`}],stateMutability:`view`,type:`function`}];function ua(e){return{baseFeePerGas:e.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:e.gasUsedRatio,oldestBlock:BigInt(e.oldestBlock),reward:e.reward?.map(e=>e.map(e=>BigInt(e)))}}async function da(e,{blockCount:t,blockNumber:n,blockTag:r=`latest`,rewardPercentiles:i}){let a=typeof n==`bigint`?R(n):void 0;return ua(await e.request({method:`eth_feeHistory`,params:[R(t),a||r,i]},{dedupe:!!a}))}async function fa(e,{filter:t}){let n=t.strict??!1,r=(await t.request({method:`eth_getFilterLogs`,params:[t.id]})).map(e=>fr(e));return t.abi?gr({abi:t.abi,logs:r,strict:n}):r}async function pa({address:e,authorization:t,signature:n}){return Ct(k(e),await wn({authorization:t,signature:n}))}var ma=new j(8192);function ha(e,{enabled:t=!0,id:n}){if(!t||!n)return e();if(ma.get(n))return ma.get(n);let r=e().finally(()=>ma.delete(n));return ma.set(n,r),r}function ga(e,t={}){return async(n,r={})=>{let{dedupe:i=!1,methods:a,retryDelay:o=150,retryCount:s=3,signal:c,uid:l}={...t,...r},{method:u}=n;if(a?.exclude?.includes(u)||a?.include&&!a.include.includes(u))throw new qt(Error(`method not supported`),{method:u});if(c?.aborted)throw ze(c);return ha(()=>di(async()=>{try{return await e(n,c?{signal:c}:void 0)}catch(e){if(c?.aborted)throw ze(c);if($e(e))throw e;let t=e;switch(t.code){case Rt.code:throw new Rt(t);case zt.code:throw new zt(t);case Bt.code:throw new Bt(t,{method:n.method});case Vt.code:throw new Vt(t);case Ht.code:throw new Ht(t);case Ut.code:throw new Ut(t);case Wt.code:throw new Wt(t);case Gt.code:throw new Gt(t);case Kt.code:throw new Kt(t);case qt.code:throw new qt(t,{method:n.method});case Jt.code:throw new Jt(t);case Yt.code:throw new Yt(t);case Xt.code:throw new Xt(t);case Zt.code:throw new Zt(t);case Qt.code:throw new Qt(t);case $t.code:throw new $t(t);case en.code:throw new en(t);case tn.code:throw new tn(t);case nn.code:throw new nn(t);case rn.code:throw new rn(t);case an.code:throw new an(t);case on.code:throw new on(t);case sn.code:throw new sn(t);case cn.code:throw new cn(t);case ln.code:throw new ln(t);case 5e3:throw new Xt(t);case un.code:throw new un(t);default:throw e instanceof H?e:new dn(t)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof pe){let e=t?.headers?.get(`Retry-After`);if(e?.match(/\d/))return Number.parseInt(e,10)*1e3}return~~(1<<e)*o},retryCount:s,signal:c,shouldRetry:({error:e})=>_a(e)}),{enabled:i,id:i?va(`${l}.${ye(n)}`):void 0})}}function _a(e){return $e(e)?!1:`code`in e&&typeof e.code==`number`?e.code===-1||e.code===Jt.code||e.code===Ht.code||e.code===429:e instanceof pe&&e.status?e.status===403||e.status===408||e.status===413||e.status===429||e.status===500||e.status===502||e.status===503||e.status===504:!0}function va(e,t=0){let n=3735928559^t,r=1103547991^t;for(let t=0;t<e.length;t++){let i=e.charCodeAt(t);n=Math.imul(n^i,2654435761),r=Math.imul(r^i,1597334677)}return n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(r^r>>>16,3266489909),r=Math.imul(r^r>>>16,2246822507),r^=Math.imul(n^n>>>16,3266489909),(4294967296*(2097151&r)+(n>>>0)).toString(36)}function ya(e){let t={formatters:void 0,fees:void 0,serializers:void 0,...e};function n(e){return t=>{let r=typeof t==`function`?t(e):t,i={...e,...r};return Object.assign(i,{extend:n(i)})}}return Object.assign(t,{extend:n(t)})}function ba(e,{errorInstance:t=Error(`timed out`),timeout:n,signal:r}){return new Promise((i,a)=>{(async()=>{let o,s=new AbortController;try{n>0&&(o=setTimeout(()=>{r?s.abort():a(t)},n)),i(await e({signal:s?.signal||null}))}catch(e){if(s?.signal.aborted&&$e(e)){a(t);return}a(e)}finally{clearTimeout(o)}})()})}function xa(){return{current:0,take(){return this.current++},reset(){this.current=0}}}var Sa=xa(),Ca=10485760;function wa(e,t={}){let{url:n,headers:r}=Ea(e);return{async request(e){let{body:i,fetchFn:a=t.fetchFn??fetch,maxResponseBodySize:o=t.maxResponseBodySize??Ca,onRequest:s=t.onRequest,onResponse:c=t.onResponse,timeout:l=t.timeout??1e4}=e,u={...t.fetchOptions??{},...e.fetchOptions??{}},{headers:d,method:f,signal:p}=u;try{let e=await ba(async({signal:e})=>{let t={...u,body:ye(Array.isArray(i)?i.map(e=>({jsonrpc:`2.0`,id:e.id??Sa.take(),...e})):{jsonrpc:`2.0`,id:i.id??Sa.take(),...i}),headers:{...r,"Content-Type":`application/json`,...d},method:f||`POST`,signal:p||(l>0?e:null)},o=new Request(n,t),c=await s?.(o,t)??{...t,url:n};return await a(c.url??n,c)},{errorInstance:new M({body:i,url:n}),timeout:l,signal:!0});c&&await c(e);let t,m=await Ta(e,{maxResponseBodySize:o});if(e.headers.get(`Content-Type`)?.startsWith(`application/json`))t=JSON.parse(m);else{t=m;try{t=JSON.parse(t||`{}`)}catch(n){if(e.ok)throw n;t={error:t}}}if(!e.ok){if(typeof t.error?.code==`number`&&typeof t.error?.message==`string`)return t;throw new pe({body:i,details:ye(t.error)||e.statusText,headers:e.headers,status:e.status,url:n})}return t}catch(e){throw p?.aborted?ze(p):$e(e)||e instanceof pe||e instanceof de||e instanceof M?e:new pe({body:i,cause:e,url:n})}}}}async function Ta(e,{maxResponseBodySize:t}){if(t===!1)return e.text();let n=e.headers.get(`Content-Length`);if(n){let e=Number(n);if(e>t)throw new de({maxSize:t,size:e})}if(!e.body){let n=await e.text(),r=new TextEncoder().encode(n).length;if(r>t)throw new de({maxSize:t,size:r});return n}let r=e.body.getReader(),i=new TextDecoder,a=``,o=0;try{for(;;){let{done:e,value:n}=await r.read();if(e)break;if(o+=n.byteLength,o>t)throw await r.cancel(),new de({maxSize:t,size:o});a+=i.decode(n,{stream:!0})}return a+=i.decode(),a}finally{r.releaseLock()}}function Ea(e){try{let t=new URL(e),n=(()=>{if(t.username){let e=`${decodeURIComponent(t.username)}:${decodeURIComponent(t.password)}`;return t.username=``,t.password=``,{url:t.toString(),headers:{Authorization:`Basic ${btoa(e)}`}}}})();return{url:t.toString(),...n}}catch{return{url:e}}}var Da=`Ethereum Signed Message:
`;function Oa(e){let t=typeof e==`string`?ue(e):typeof e.raw==`string`?e.raw:y(e.raw),n=ue(`${Da}${xe(t)}`);return He([n,t])}function ka(e,t){return D(Oa(e),t)}var Aa=class extends H{constructor({domain:e}){super(`Invalid domain "${ye(e)}".`,{metaMessages:[`Must be a valid EIP-712 domain.`]})}},ja=class extends H{constructor({primaryType:e,types:t}){super(`Invalid primary type \`${e}\` must be one of \`${JSON.stringify(Object.keys(t))}\`.`,{docsPath:`/api/glossary/Errors#typeddatainvalidprimarytypeerror`,metaMessages:["Check that the primary type is a key in `types`."]})}},Ma=class extends H{constructor({type:e}){super(`Struct type "${e}" is invalid.`,{metaMessages:[`Struct type must not be a Solidity type.`],name:`InvalidStructTypeError`})}},Na=class extends H{constructor({type:e}){let t=e.replace(/^(u?int)/,`$&256`);super(`Type "${e}" is not a valid EIP-712 type.`,{metaMessages:[`Use "${t}" instead.`],name:`InvalidTypedDataTypeError`})}};function Pa(e){let{domain:t,message:n,primaryType:r,types:i}=e,a=(e,t)=>{for(let n of e){let{name:e,type:r}=n,o=t[e],s=r.replace(/(\[[0-9]*\])+$/,``);if(s===`int`||s===`uint`)throw new Na({type:r});let c=r.match(d);if(c&&(typeof o==`number`||typeof o==`bigint`)){let[e,t,n]=c;R(o,{signed:t===`int`,size:Number.parseInt(n,10)/8})}if(r===`address`&&typeof o==`string`&&!U(o))throw new h({address:o});let l=r.match(p);if(l){let[e,t]=l;if(t&&xe(o)!==Number.parseInt(t,10))throw new dt({expectedSize:Number.parseInt(t,10),givenSize:xe(o)})}let u=i[r];u&&(Ia(r),a(u,o))}};if(i.EIP712Domain&&t){if(typeof t!=`object`)throw new Aa({domain:t});a(i.EIP712Domain,t)}if(r!==`EIP712Domain`){if(i[r])a(i[r],n);else throw new ja({primaryType:r,types:i})}}function Fa({domain:e}){return[typeof e?.name==`string`&&{name:`name`,type:`string`},e?.version&&{name:`version`,type:`string`},(typeof e?.chainId==`number`||typeof e?.chainId==`bigint`)&&{name:`chainId`,type:`uint256`},e?.verifyingContract&&{name:`verifyingContract`,type:`address`},e?.salt&&{name:`salt`,type:`bytes32`}].filter(Boolean)}function Ia(e){if(e===`address`||e===`bool`||e===`string`||e.startsWith(`bytes`)||e.startsWith(`uint`)||e.startsWith(`int`))throw new Ma({type:e})}function La(e){let{domain:t={},message:n,primaryType:r}=e,i={EIP712Domain:Fa({domain:t}),...e.types};Pa({domain:t,message:n,primaryType:r,types:i});let a=[`0x1901`];return t&&a.push(Ra({domain:t,types:i})),r!==`EIP712Domain`&&a.push(za({data:n,primaryType:r,types:i})),D(He(a))}function Ra({domain:e,types:t}){return za({data:e,primaryType:`EIP712Domain`,types:t})}function za({data:e,primaryType:t,types:n}){let r=Ba({data:e,primaryType:t,types:n});return D(r)}function Ba({data:e,primaryType:t,types:n}){let r=[{type:`bytes32`}],i=[Va({primaryType:t,types:n})];for(let a of n[t]){let[t,o]=Wa({types:n,name:a.name,type:a.type,value:e[a.name]});r.push(t),i.push(o)}return ae(r,i)}function Va({primaryType:e,types:t}){let n=_(Ha({primaryType:e,types:t}));return D(n)}function Ha({primaryType:e,types:t}){let n=``,r=Ua({primaryType:e,types:t});r.delete(e);let i=[e,...Array.from(r).sort()];for(let e of i)n+=`${e}(${t[e].map(({name:e,type:t})=>`${t} ${e}`).join(`,`)})`;return n}function Ua({primaryType:e,types:t},n=new Set){let r=e.match(/^\w*/u)?.[0];if(n.has(r)||t[r]===void 0)return n;n.add(r);for(let e of t[r])Ua({primaryType:e.type,types:t},n);return n}function Wa({types:e,name:t,type:n,value:r}){if(e[n]!==void 0)return[{type:`bytes32`},D(Ba({data:r,primaryType:n,types:e}))];if(n===`bytes`)return[{type:`bytes32`},D(r)];if(n===`string`)return[{type:`bytes32`},D(_(r))];if(n.lastIndexOf(`]`)===n.length-1){let i=n.slice(0,n.lastIndexOf(`[`)),a=r.map(n=>Wa({name:t,type:i,types:e,value:n}));return[{type:`bytes32`},D(ae(a.map(([e])=>e),a.map(([,e])=>e)))]}return[{type:n},r]}var Ga={checksum:new class extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){let t=super.get(e);return super.has(e)&&t!==void 0&&(this.delete(e),super.set(e,t)),t}set(e,t){if(super.set(e,t),this.maxSize&&this.size>this.maxSize){let e=this.keys().next().value;e&&this.delete(e)}return this}}(8192)}.checksum;function Ka(e,t={}){let{as:n=typeof e==`string`?`Hex`:`Bytes`}=t,r=F(kr(e));return n===`Bytes`?r:ie(r)}var qa=/^0x[a-fA-F0-9]{40}$/;function Ja(e,t={}){let{strict:n=!0}=t;if(!qa.test(e))throw new Za({address:e,cause:new Qa});if(n){if(e.toLowerCase()===e)return;if(Ya(e)!==e)throw new Za({address:e,cause:new $a})}}function Ya(e){if(Ga.has(e))return Ga.get(e);Ja(e,{strict:!1});let t=e.substring(2).toLowerCase(),n=Ka(Mr(t),{as:`Bytes`}),r=t.split(``);for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&r[e]&&(r[e]=r[e].toUpperCase()),(n[e>>1]&15)>=8&&r[e+1]&&(r[e+1]=r[e+1].toUpperCase());let i=`0x${r.join(``)}`;return Ga.set(e,i),i}function Xa(e,t={}){let{strict:n=!0}=t??{};try{return Ja(e,{strict:n}),!0}catch{return!1}}var Za=class extends E{constructor({address:e,cause:t}){super(`Address "${e}" is invalid.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidAddressError`})}},Qa=class extends E{constructor(){super(`Address is not a 20 byte (40 hexadecimal character) value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidInputError`})}},$a=class extends E{constructor(){super(`Address does not match its checksum counterpart.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidChecksumError`})}},eo=/^(.*)\[([0-9]*)\]$/,to=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,no=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;2n**(8n-1n)-1n,2n**(16n-1n)-1n,2n**(24n-1n)-1n,2n**(32n-1n)-1n,2n**(40n-1n)-1n,2n**(48n-1n)-1n,2n**(56n-1n)-1n,2n**(64n-1n)-1n,2n**(72n-1n)-1n,2n**(80n-1n)-1n,2n**(88n-1n)-1n,2n**(96n-1n)-1n,2n**(104n-1n)-1n,2n**(112n-1n)-1n,2n**(120n-1n)-1n,2n**(128n-1n)-1n,2n**(136n-1n)-1n,2n**(144n-1n)-1n,2n**(152n-1n)-1n,2n**(160n-1n)-1n,2n**(168n-1n)-1n,2n**(176n-1n)-1n,2n**(184n-1n)-1n,2n**(192n-1n)-1n,2n**(200n-1n)-1n,2n**(208n-1n)-1n,2n**(216n-1n)-1n,2n**(224n-1n)-1n,2n**(232n-1n)-1n,2n**(240n-1n)-1n,2n**(248n-1n)-1n,2n**(256n-1n)-1n,-(2n**(8n-1n)),-(2n**(16n-1n)),-(2n**(24n-1n)),-(2n**(32n-1n)),-(2n**(40n-1n)),-(2n**(48n-1n)),-(2n**(56n-1n)),-(2n**(64n-1n)),-(2n**(72n-1n)),-(2n**(80n-1n)),-(2n**(88n-1n)),-(2n**(96n-1n)),-(2n**(104n-1n)),-(2n**(112n-1n)),-(2n**(120n-1n)),-(2n**(128n-1n)),-(2n**(136n-1n)),-(2n**(144n-1n)),-(2n**(152n-1n)),-(2n**(160n-1n)),-(2n**(168n-1n)),-(2n**(176n-1n)),-(2n**(184n-1n)),-(2n**(192n-1n)),-(2n**(200n-1n)),-(2n**(208n-1n)),-(2n**(216n-1n)),-(2n**(224n-1n)),-(2n**(232n-1n)),-(2n**(240n-1n)),-(2n**(248n-1n)),-(2n**(256n-1n));var ro=2n**256n-1n;function io(e,t,n){let{checksumAddress:r,staticPosition:i}=n,a=To(t.type);if(a){let[n,o]=a;return co(e,{...t,type:o},{checksumAddress:r,length:n,staticPosition:i})}if(t.type===`tuple`)return po(e,t,{checksumAddress:r,staticPosition:i});if(t.type===`address`)return so(e,{checksum:r});if(t.type===`bool`)return lo(e);if(t.type.startsWith(`bytes`))return uo(e,t,{staticPosition:i});if(t.type.startsWith(`uint`)||t.type.startsWith(`int`))return fo(e,t);if(t.type===`string`)return mo(e,{staticPosition:i});throw new Ho(t.type)}var ao=32,oo=32;function so(e,t={}){let{checksum:n=!1}=t,r=e.readBytes(32);return[(e=>n?Ya(e):e)(ie(Fr(r,-20))),32]}function co(e,t,n){let{checksumAddress:r,length:i,staticPosition:a}=n;if(i===null){let n=a+Rr(e.readBytes(oo)),i=n+ao;e.setPosition(n);let o=Rr(e.readBytes(ao)),s=Eo(t),c=0,l=[];for(let n=0;n<o;++n){e.setPosition(i+(s?n*32:c));let[a,o]=io(e,t,{checksumAddress:r,staticPosition:i});c+=o,l.push(a),o===0&&(e.assertReadLimit(),e._touch())}return e.setPosition(a+32),[l,32]}if(Eo(t)){let n=a+Rr(e.readBytes(oo)),o=[];for(let a=0;a<i;++a){e.setPosition(n+a*32);let[i]=io(e,t,{checksumAddress:r,staticPosition:n});o.push(i)}return e.setPosition(a+32),[o,32]}let o=0,s=[];for(let n=0;n<i;++n){let[n,i]=io(e,t,{checksumAddress:r,staticPosition:a+o});o+=i,s.push(n),i===0&&(e.assertReadLimit(),e._touch())}return[s,o]}function lo(e){return[Lr(e.readBytes(32),{size:32}),32]}function uo(e,t,{staticPosition:n}){let[r,i]=t.type.split(`bytes`);if(!i){let t=Rr(e.readBytes(32));e.setPosition(n+t);let r=Rr(e.readBytes(32));if(r===0)return e.setPosition(n+32),[`0x`,32];let i=e.readBytes(r);return e.setPosition(n+32),[ie(i),32]}return[ie(e.readBytes(Number.parseInt(i,10),32)),32]}function fo(e,t){let n=t.type.startsWith(`int`),r=Number.parseInt(t.type.split(`int`)[1]||`256`,10),i=e.readBytes(32);return[r>48?Ir(i,{signed:n}):Rr(i,{signed:n}),32]}function po(e,t,n){let{checksumAddress:r,staticPosition:i}=n,a=t.components.length===0||t.components.some(({name:e})=>!e),o=a?[]:{},s=0;if(Eo(t)){let n=i+Rr(e.readBytes(oo));for(let i=0;i<t.components.length;++i){let c=t.components[i];e.setPosition(n+s);let[l,u]=io(e,c,{checksumAddress:r,staticPosition:n});s+=u,o[a?i:c?.name]=l}return e.setPosition(i+32),[o,32]}for(let n=0;n<t.components.length;++n){let c=t.components[n],[l,u]=io(e,c,{checksumAddress:r,staticPosition:i});o[a?n:c?.name]=l,s+=u}return[o,s]}function mo(e,{staticPosition:t}){let n=t+Rr(e.readBytes(32));e.setPosition(n);let r=Rr(e.readBytes(32));if(r===0)return e.setPosition(t+32),[``,32];let i=zr(Br(e.readBytes(r,32)));return e.setPosition(t+32),[i,32]}function ho({checksumAddress:e,parameters:t,values:n}){let r=[];for(let i=0;i<t.length;i++)r.push(go({checksumAddress:e,parameter:t[i],value:n[i]}));return r}function go({checksumAddress:e=!1,parameter:t,value:n}){let r=t,i=To(r.type);if(i){let[t,a]=i;return yo(n,{checksumAddress:e,length:t,parameter:{...r,type:a}})}if(r.type===`tuple`)return wo(n,{checksumAddress:e,parameter:r});if(r.type===`address`)return vo(n,{checksum:e});if(r.type===`bool`)return xo(n);if(r.type.startsWith(`uint`)||r.type.startsWith(`int`)){let e=r.type.startsWith(`int`),[,,t=`256`]=no.exec(r.type)??[];return So(n,{signed:e,size:Number(t)})}if(r.type.startsWith(`bytes`))return bo(n,{type:r.type});if(r.type===`string`)return Co(n);throw new Ho(r.type)}function _o(e){let t=0;for(let n=0;n<e.length;n++){let{dynamic:r,encoded:a}=e[n];t+=r?32:i(a)}let n=[],r=[],a=0;for(let o=0;o<e.length;o++){let{dynamic:s,encoded:c}=e[o];s?(n.push(f(t+a,{size:32})),r.push(c),a+=i(c)):n.push(c)}return I(...n,...r)}function vo(e,t){let{checksum:n=!1}=t;return Ja(e,{strict:n}),{dynamic:!1,encoded:A(e.toLowerCase())}}function yo(e,t){let{checksumAddress:n,length:r,parameter:i}=t,a=r===null;if(!Array.isArray(e))throw new Vo(e);if(!a&&e.length!==r)throw new Ro({expectedLength:r,givenLength:e.length,type:`${i.type}[${r}]`});let o=e.length===0&&Eo(i),s=[];for(let t=0;t<e.length;t++){let r=go({checksumAddress:n,parameter:i,value:e[t]});r.dynamic&&(o=!0),s.push(r)}if(a||o){let e=_o(s);if(a){let t=f(s.length,{size:32});return{dynamic:!0,encoded:s.length>0?I(t,e):t}}if(o)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:I(...s.map(({encoded:e})=>e))}}function bo(e,{type:t}){let[,n]=t.split(`bytes`),r=i(e);if(!n){let t=e;return r%32!=0&&(t=Ve(t,Math.ceil((e.length-2)/2/32)*32)),{dynamic:!0,encoded:I(A(f(r,{size:32})),t)}}if(r!==Number.parseInt(n,10))throw new zo({expectedSize:Number.parseInt(n,10),value:e});return{dynamic:!1,encoded:Ve(e)}}function xo(e){if(typeof e!=`boolean`)throw new E(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:A(_t(e))}}function So(e,{signed:t,size:n}){if(typeof n==`number`){let r=2n**(BigInt(n)-(t?1n:0n))-1n,i=t?-r-1n:0n;if(e>r||e<i)throw new yt({max:r.toString(),min:i.toString(),signed:t,size:n/8,value:e.toString()})}return{dynamic:!1,encoded:f(e,{size:32,signed:t})}}function Co(e){let t=u(e),n=Math.ceil(i(t)/32),r=[];for(let e=0;e<n;e++)r.push(Ve(Be(t,e*32,(e+1)*32)));return{dynamic:!0,encoded:I(Ve(f(i(t),{size:32})),...r)}}function wo(e,t){let{checksumAddress:n,parameter:r}=t,i=!1,a=[];for(let t=0;t<r.components.length;t++){let o=r.components[t],s=go({checksumAddress:n,parameter:o,value:e[Array.isArray(e)?t:o.name]});a.push(s),s.dynamic&&(i=!0)}return{dynamic:i,encoded:i?_o(a):I(...a.map(({encoded:e})=>e))}}function To(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}function Eo(e){let{type:t}=e;if(t===`string`||t===`bytes`||t.endsWith(`[]`))return!0;if(t===`tuple`)return e.components?.some(Eo);let n=To(e.type);return!!(n&&Eo({...e,type:n[1]}))}var Do={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new jo({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new Ao({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new ko({offset:e});let t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new ko({offset:e});let t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){let n=t??this.position;return this.assertPosition(n+e-1),this.bytes.subarray(n,n+e)},inspectUint8(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){let t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){let t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){let t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,e&255),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();let n=this.inspectBytes(e);return this.position+=t??e,n},readUint8(){this.assertReadLimit(),this._touch();let e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();let e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();let e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();let e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){let t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};function Oo(e,{recursiveReadLimit:t=8192}={}){let n=Object.create(Do);return n.bytes=e,n.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),n.positionReadCount=new Map,n.recursiveReadLimit=t,n}var ko=class extends E{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.NegativeOffsetError`})}},Ao=class extends E{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.PositionOutOfBoundsError`})}},jo=class extends E{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.RecursiveReadLimitExceededError`})}};function Mo(e,t,n={}){let{as:r=`Array`,checksumAddress:i=!1}=n,a=typeof t==`string`?jr(t):t,o=Oo(a);if(Pr(a)===0&&e.length>0)throw new Lo;if(Pr(a)&&Pr(a)<32)throw new Io({data:typeof t==`string`?t:ie(t),parameters:e,size:Pr(a)});let s=0,c=r===`Array`?[]:{};for(let t=0;t<e.length;++t){let n=e[t];s<a.length&&o.setPosition(s);let[l,u]=io(o,n,{checksumAddress:i,staticPosition:0});s+=u,r===`Array`?c.push(l):c[n.name??t]=l}return c}function No(e,t,n){let{checksumAddress:r=!1}=n??{};if(e.length!==t.length)throw new Bo({expectedLength:e.length,givenLength:t.length});let i=_o(ho({checksumAddress:r,parameters:e,values:t}));return i.length===0?`0x`:i}function Po(e,t){if(e.length!==t.length)throw new Bo({expectedLength:e.length,givenLength:t.length});let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r];n.push(Po.encode(i,a))}return I(...n)}(function(e){function t(e,n,r=!1){if(e===`address`){let e=n;return Ja(e),A(e.toLowerCase(),r?32:0)}if(e===`string`)return u(n);if(e===`bytes`)return n;if(e===`bool`)return A(_t(n),r?32:1);let i=e.match(no);if(i){let[e,t,a=`256`]=i,o=Number.parseInt(a,10)/8;return f(n,{size:r?32:o,signed:t===`int`})}let a=e.match(to);if(a){let[e,t]=a;if(Number.parseInt(t,10)!==(n.length-2)/2)throw new zo({expectedSize:Number.parseInt(t,10),value:n});return Ve(n,r?32:0)}let o=e.match(eo);if(o&&Array.isArray(n)){let[e,r]=o,i=[];for(let e=0;e<n.length;e++)i.push(t(r,n[e],!0));return i.length===0?`0x`:I(...i)}throw new Ho(e)}e.encode=t})(Po||={});function Fo(e){return Array.isArray(e)&&typeof e[0]==`string`||typeof e==`string`?Ot(e):e}var Io=class extends E{constructor({data:e,parameters:t,size:n}){super(`Data size of ${n} bytes is too small for given parameters.`,{metaMessages:[`Params: (${ve(t)})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.DataSizeTooSmallError`})}},Lo=class extends E{constructor(){super(`Cannot decode zero data ("0x") with ABI parameters.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.ZeroDataError`})}},Ro=class extends E{constructor({expectedLength:e,givenLength:t,type:n}){super(`Array length mismatch for type \`${n}\`. Expected: \`${e}\`. Given: \`${t}\`.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.ArrayLengthMismatchError`})}},zo=class extends E{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${i(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.BytesSizeMismatchError`})}},Bo=class extends E{constructor({expectedLength:e,givenLength:t}){super([`ABI encoding parameters/values length mismatch.`,`Expected length (parameters): ${e}`,`Given length (values): ${t}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.LengthMismatchError`})}},Vo=class extends E{constructor(e){super(`Value \`${e}\` is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.InvalidArrayError`})}},Ho=class extends E{constructor(e){super(`Type \`${e}\` is not a valid ABI Type.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.InvalidTypeError`})}};function Uo(e,t={}){let{recovered:n}=t;if(e.r===void 0||e.s===void 0||n&&e.yParity===void 0)throw new Qo({signature:e});if(e.r<0n||e.r>ro)throw new $o({value:e.r});if(e.s<0n||e.s>ro)throw new es({value:e.s});if(typeof e.yParity==`number`&&e.yParity!==0&&e.yParity!==1)throw new ts({value:e.yParity})}function Wo(e){return Go(ie(e))}function Go(e){if(e.length!==130&&e.length!==132)throw new Zo({signature:e});let t=BigInt(Be(e,0,32)),n=BigInt(Be(e,32,64)),r=(()=>{let t=Number(`0x${e.slice(130)}`);if(!Number.isNaN(t))try{return Xo(t)}catch{throw new ts({value:t})}})();return r===void 0?{r:t,s:n}:{r:t,s:n,yParity:r}}function Ko(e){if(e.r!==void 0&&e.s!==void 0)return qo(e)}function qo(e){let t=typeof e==`string`?Go(e):e instanceof Uint8Array?Wo(e):typeof e.r==`string`?Yo(e):e.v?Jo(e):{r:e.r,s:e.s,...e.yParity===void 0?{}:{yParity:e.yParity}};return Uo(t),t}function Jo(e){return{r:e.r,s:e.s,yParity:Xo(e.v)}}function Yo(e){let t=(()=>{let t=e.v?Number(e.v):void 0,n=e.yParity?Number(e.yParity):void 0;if(typeof t==`number`&&typeof n!=`number`&&(n=Xo(t)),typeof n!=`number`)throw new ts({value:e.yParity});return n})();return{r:BigInt(e.r),s:BigInt(e.s),yParity:t}}function Xo(e){if(e===0||e===27)return 0;if(e===1||e===28)return 1;if(e>=35)return+(e%2==0);throw new ns({value:e})}var Zo=class extends E{constructor({signature:e}){super(`Value \`${e}\` is an invalid signature size.`,{metaMessages:[`Expected: 64 bytes or 65 bytes.`,`Received ${i(c(e))} bytes.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidSerializedSizeError`})}},Qo=class extends E{constructor({signature:e}){super(`Signature \`${m(e)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Signature.MissingPropertiesError`})}},$o=class extends E{constructor({value:e}){super(`Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidRError`})}},es=class extends E{constructor({value:e}){super(`Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidSError`})}},ts=class extends E{constructor({value:e}){super(`Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidYParityError`})}},ns=class extends E{constructor({value:e}){super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidVError`})}};function rs(e,t={}){return typeof e.chainId==`string`?is(e):{...e,...t.signature}}function is(e){let{address:t,chainId:n,nonce:r}=e,i=Ko(e);return{address:t,chainId:Number(n),nonce:BigInt(r),...i}}var as=Fo(`(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data`);function os(e){if(typeof e==`string`){if(Be(e,-32)!==`0x8010801080108010801080108010801080108010801080108010801080108010`)throw new ls(e)}else Uo(e.authorization)}function ss(e){os(e);let t=O(Be(e,-64,-32)),n=Be(e,-t-64,-64),r=Be(e,0,-t-64),[i,a,o]=Mo(as,n);return{authorization:rs({address:i.delegation,chainId:Number(i.chainId),nonce:i.nonce,yParity:i.yParity,r:i.r,s:i.s}),signature:r,...o&&o!==`0x`?{data:o,to:a}:{}}}function cs(e){try{return os(e),!0}catch{return!1}}var ls=class extends E{constructor(e){super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`SignatureErc8010.InvalidWrappedSignatureError`})}};function us(e,t){return Pe(e,t)}function ds(e){return e.map(e=>({...e,value:BigInt(e.value)}))}function fs(e){return{...e,balance:e.balance?BigInt(e.balance):void 0,nonce:e.nonce?C(e.nonce):void 0,storageProof:e.storageProof?ds(e.storageProof):void 0}}async function ps(e,{address:t,blockHash:n,blockNumber:r,blockTag:i=`latest`,requireCanonical:a,storageKeys:s}){let c=o({blockHash:n,blockNumber:r,blockTag:i,requireCanonical:a});return fs(await e.request({method:`eth_getProof`,params:[t,s,c]}))}async function ms(e,{hash:t}){let n=await e.request({method:`eth_getRawTransactionByHash`,params:[t]},{dedupe:!0});if(!n)throw new Ge({hash:t});return n}async function hs(e,{address:t,blockHash:n,blockNumber:r,blockTag:i=`latest`,requireCanonical:a,slot:s}){let c=o({blockHash:n,blockNumber:r,blockTag:i,requireCanonical:a});return await e.request({method:`eth_getStorageAt`,params:[t,s,c]})}async function gs(e,{blockHash:t,blockNumber:n,blockTag:r,hash:i,index:a,sender:o,nonce:s}){let c=r||`latest`,l=n===void 0?void 0:R(n),u=null;if(i?u=await e.request({method:`eth_getTransactionByHash`,params:[i]},{dedupe:!0}):t?u=await e.request({method:`eth_getTransactionByBlockHashAndIndex`,params:[t,R(a)]},{dedupe:!0}):(l||c)&&typeof a==`number`?u=await e.request({method:`eth_getTransactionByBlockNumberAndIndex`,params:[l||c,R(a)]},{dedupe:!!l}):o&&typeof s==`number`&&(u=await e.request({method:`eth_getTransactionBySenderAndNonce`,params:[o,R(s)]},{dedupe:!0})),!u)throw new Ge({blockHash:t,blockNumber:n,blockTag:c,hash:i,index:a});return(e.chain?.formatters?.transaction?.format||Mn)(u,`getTransaction`)}async function _s(e,{hash:t,transactionReceipt:n}){let[r,i]=await Promise.all([W(e,ai,`getBlockNumber`)({}),t?W(e,gs,`getTransaction`)({hash:t}):void 0]),a=n?.blockNumber||i?.blockNumber;return a?r-a+1n:0n}async function vs(e,{hash:t}){let n=await e.request({method:`eth_getTransactionReceipt`,params:[t]},{dedupe:!0});if(!n)throw new ht({hash:t});return(e.chain?.formatters?.transactionReceipt?.format||pi)(n,`getTransactionReceipt`)}async function ys(e,t){let{account:n,authorizationList:r,allowFailure:i=!0,blockHash:a,blockNumber:o,blockOverrides:s,blockTag:c,requireCanonical:l,stateOverride:u}=t,d=t.contracts,f=typeof e.batch?.multicall==`object`?e.batch.multicall:{},p=t.batchSize??f.batchSize??1024,m=t.deployless??f.deployless??!1,h=(()=>{if(t.multicallAddress)return t.multicallAddress;if(m)return null;if(e.chain)return ct({blockNumber:o,chain:e.chain,contract:`multicall3`});throw Error(`client chain not configured. multicallAddress is required.`)})(),g=[[]],_=0,v=0;for(let e=0;e<d.length;e++){let{abi:t,address:r,args:a,functionName:o}=d[e];try{let e=L({abi:t,args:a,functionName:o});v+=(e.length-2)/2,p>0&&v>p&&g[_].length>0&&(_++,v=(e.length-2)/2,g[_]=[]),g[_]=[...g[_],{allowFailure:!0,callData:e,target:r}]}catch(e){let s=pn(e,{abi:t,address:r,args:a,docsPath:`/docs/contract/multicall`,functionName:o,sender:n});if(!i)throw s;g[_]=[...g[_],{allowFailure:!0,callData:`0x`,target:r}]}}let y=!!e.batch?.multicall,b=y?g.flatMap(e=>e.map(e=>[e])):g,x=await Promise.allSettled(b.map(t=>y?bs(e,{account:n,authorizationList:r,batchSize:p,blockHash:a,blockNumber:o,blockOverrides:s,blockTag:c,call:t[0],multicallAddress:h,requireCanonical:l,stateOverride:u}).then(e=>[e]):W(e,Kr,`readContract`)({...h===null?{code:B}:{address:h},abi:Me,account:n,args:[t],authorizationList:r,blockHash:a,blockNumber:o,blockOverrides:s,blockTag:c,functionName:`aggregate3`,requireCanonical:l,stateOverride:u}))),S=[];for(let e=0;e<x.length;e++){let t=x[e];if(t.status===`rejected`){if(!i)throw t.reason;for(let n=0;n<b[e].length;n++)S.push({status:`failure`,error:t.reason,result:void 0});continue}let n=t.value;for(let t=0;t<n.length;t++){let{returnData:r,success:a}=n[t],{callData:o}=b[e][t],{abi:s,address:c,functionName:l,args:u}=d[S.length];try{if(o===`0x`)throw new ge;if(!a)throw new st({data:r});let e=P({abi:s,args:u,data:r,functionName:l});S.push(i?{result:e,status:`success`}:e)}catch(e){let t=pn(e,{abi:s,address:c,args:u,docsPath:`/docs/contract/multicall`,functionName:l});if(!i)throw t;S.push({error:t,result:void 0,status:`failure`})}}}if(S.length!==d.length)throw new H(`multicall results mismatch`);return S}async function bs(e,t){let{batchSize:n,call:r,multicallAddress:i,...a}=t,{wait:o=0}=typeof e.batch?.multicall==`object`?e.batch.multicall:{},{schedule:s}=Re({id:ye([`multicall`,e.uid,n,i,a]),wait:o,shouldSplitBatch(e){return n!==0&&e.reduce((e,{callData:t})=>e+(t.length-2)/2,0)>n},fn:t=>W(e,Kr,`readContract`)({...i===null?{code:B}:{address:i},...a,abi:Me,args:[t],functionName:`aggregate3`})}),[c]=await s(r);return c}async function xs(e,t){let{blockNumber:n,blockTag:r=e.experimental_blockTag??`latest`,blocks:i,returnFullTransactions:a,traceTransfers:o,validation:s}=t;try{let t=[];for(let e of i){let n=e.blockOverrides?Se(e.blockOverrides):void 0,r=e.calls.map(e=>{let t=e,n=t.account?l(t.account):void 0,r=t.abi?L(t):t.data,i={...t,account:n,data:t.dataSuffix?He([r||`0x`,t.dataSuffix]):r,from:t.from??n?.address};return se(i),oe(i)}),i=e.stateOverrides?v(e.stateOverrides):void 0;t.push({blockOverrides:n,calls:r,stateOverrides:i})}let c=(typeof n==`bigint`?R(n):void 0)||r;return(await e.request({method:`eth_simulateV1`,params:[{blockStateCalls:t,returnFullTransactions:a,traceTransfers:o,validation:s},c]})).map((e,t)=>({...Pn(e),calls:e.calls.map((e,n)=>{let{abi:r,args:a,functionName:o,to:s}=i[t].calls[n],c=e.error?.data??e.returnData,l=BigInt(e.gasUsed),u=e.logs?.map(e=>fr(e)),d=e.status===`0x1`?`success`:`failure`,f=r&&d===`success`&&c!==`0x`?P({abi:r,data:c,functionName:o}):null,p=(()=>{if(d===`success`)return;let e;if(c===`0x`?e=new ge:c&&(e=new st({data:c})),e)return pn(e,{abi:r??[],address:s??`0x`,args:a,functionName:o??`<unknown>`})})();return{data:c,gasUsed:l,logs:u,status:d,...d===`success`?{result:f}:{error:p}}})}))}catch(e){let t=e,n=g(t,{});throw n instanceof rt?t:n}}function Ss(e){let t=!0,n=``,r=0,i=``,a=!1;for(let o=0;o<e.length;o++){let s=e[o];if([`(`,`)`,`,`].includes(s)&&(t=!0),s===`(`&&r++,s===`)`&&r--,t){if(r===0){if(s===` `&&[`event`,`function`,`error`,``].includes(i))i=``;else if(i+=s,s===`)`){a=!0;break}continue}if(s===` `){e[o-1]!==`,`&&n!==`,`&&n!==`,(`&&(n=``,t=!1);continue}i+=s,n+=s}}if(!a)throw new E(`Unable to normalize signature.`);return i}function Cs(e,t){let n=typeof e,r=t.type;switch(r){case`address`:return Xa(e,{strict:!1});case`bool`:return n===`boolean`;case`function`:return n===`string`;case`string`:return n===`string`;default:return r===`tuple`&&`components`in t?Object.values(t.components).every((t,n)=>Cs(Object.values(e)[n],t)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n===`number`||n===`bigint`:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n===`string`||e instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(e)&&e.every(e=>Cs(e,{...t,type:r.replace(/(\[[0-9]{0,}\])$/,``)})):!1}}function ws(e,t,n){for(let r in e){let i=e[r],a=t[r];if(i.type===`tuple`&&a.type===`tuple`&&`components`in i&&`components`in a)return ws(i.components,a.components,n[r]);let o=[i.type,a.type];if(o.includes(`address`)&&o.includes(`bytes20`)||(o.includes(`address`)&&o.includes(`string`)||o.includes(`address`)&&o.includes(`bytes`))&&Xa(n[r],{strict:!1}))return o}}function Ts(e,t={}){let{prepare:n=!0}=t,r=Array.isArray(e)||typeof e==`string`?Dt(e):e;return{...r,...n?{hash:ks(r)}:{}}}function Es(e,t,n){let{args:r=[],prepare:i=!0}=n??{},a=re(t,{strict:!1}),o=e.filter(e=>a?e.type===`function`||e.type===`error`?Ds(e)===Be(t,0,4):e.type===`event`&&ks(e)===t:`name`in e&&e.name===t);if(o.length===0)throw new js({name:t});if(o.length===1)return{...o[0],...i?{hash:ks(o[0])}:{}};let s;for(let e of o)if(`inputs`in e){if(!r||r.length===0){if(!e.inputs||e.inputs.length===0)return{...e,...i?{hash:ks(e)}:{}};continue}if(e.inputs&&e.inputs.length!==0&&e.inputs.length===r.length&&r.every((t,n)=>{let r=`inputs`in e&&e.inputs[n];return r?Cs(t,r):!1})){if(s&&`inputs`in s&&s.inputs){let t=ws(e.inputs,s.inputs,r);if(t)throw new As({abiItem:e,type:t[0]},{abiItem:s,type:t[1]})}s=e}}let c=(()=>{if(s)return s;let[e,...t]=o;return{...e,overloads:t}})();if(!c)throw new js({name:t});return{...c,...i?{hash:ks(c)}:{}}}function Ds(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return Es(t,n)}return e[0]})();return Be(ks(t),0,4)}function Os(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return Es(t,n)}return e[0]})();return Ss(typeof t==`string`?t:Ne(t))}function ks(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return Es(t,n)}return e[0]})();return typeof t!=`string`&&`hash`in t&&t.hash?t.hash:Ka(u(Os(t)))}var As=class extends E{constructor(e,t){super(`Found ambiguous types in overloaded ABI Items.`,{metaMessages:[`\`${e.type}\` in \`${Ss(Ne(e.abiItem))}\`, and`,`\`${t.type}\` in \`${Ss(Ne(t.abiItem))}\``,``,`These types encode differently and cannot be distinguished at runtime.`,`Remove one of the ambiguous items in the ABI.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`AbiItem.AmbiguityError`})}},js=class extends E{constructor({name:e,data:t,type:n=`item`}){let r=e?` with name "${e}"`:t?` with data "${t}"`:``;super(`ABI ${n}${r} not found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`AbiItem.NotFoundError`})}};function Ms(...e){let[t,n]=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return[Ps(t),n]}return e})(),{bytecode:r,args:i}=n;return I(r,t.inputs?.length&&i?.length?No(t.inputs,i):`0x`)}function Ns(e){return Ts(e)}function Ps(e){let t=e.find(e=>e.type===`constructor`);if(!t)throw new js({name:`constructor`});return t}function Fs(...e){let[t,n=[]]=(()=>{if(Array.isArray(e[0])){let[t,n,r]=e;return[Ls(t,n,{args:r}),r]}let[t,n]=e;return[t,n]})(),{overloads:r}=t,i=r?Ls([t,...r],t.name,{args:n}):t,a=Rs(i),o=n.length>0?No(i.inputs,n):void 0;return o?I(a,o):a}function Is(e,t={}){return Ts(e,t)}function Ls(e,t,n){let r=Es(e,t,n);if(r.type!==`function`)throw new js({name:t,type:`function`});return r}function Rs(e){return Ds(e)}var zs=`0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`,Bs=`0x0000000000000000000000000000000000000000`,Vs=`0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033`;async function Hs(e,t){let{blockNumber:n,blockTag:r,calls:i,stateOverrides:a,traceAssetChanges:o,traceTransfers:s,validation:c}=t,u=t.account?l(t.account):void 0;if(o&&!u)throw new H("`account` is required when `traceAssetChanges` is true");let d=u?Ms(Ns(`constructor(bytes, bytes)`),{bytecode:Ue,args:[Vs,Fs(Is(`function getBalance(address)`),[u.address])]}):void 0,f=o?await Promise.all(t.calls.map(async t=>{if(!t.data&&!t.abi)return;let{accessList:n}=await Zi(e,{account:u.address,...t,data:t.abi?L(t):t.data});return n.map(({address:e,storageKeys:t})=>t.length>0?e:null)})).then(e=>e.flat().filter(Boolean)):[],p=await xs(e,{blockNumber:n,blockTag:r,blocks:[...o?[{calls:[{data:d}],stateOverrides:a},{calls:f.map((e,t)=>({abi:[Is(`function balanceOf(address) returns (uint256)`)],functionName:`balanceOf`,args:[u.address],to:e,from:Bs,nonce:t})),stateOverrides:[{address:Bs,nonce:0}]}]:[],{calls:[...i,{to:Bs}].map(e=>({...e,from:u?.address})),stateOverrides:a},...o?[{calls:[{data:d}]},{calls:f.map((e,t)=>({abi:[Is(`function balanceOf(address) returns (uint256)`)],functionName:`balanceOf`,args:[u.address],to:e,from:Bs,nonce:t})),stateOverrides:[{address:Bs,nonce:0}]},{calls:f.map((e,t)=>({to:e,abi:[Is(`function decimals() returns (uint256)`)],functionName:`decimals`,from:Bs,nonce:t})),stateOverrides:[{address:Bs,nonce:0}]},{calls:f.map((e,t)=>({to:e,abi:[Is(`function tokenURI(uint256) returns (string)`)],functionName:`tokenURI`,args:[0n],from:Bs,nonce:t})),stateOverrides:[{address:Bs,nonce:0}]},{calls:f.map((e,t)=>({to:e,abi:[Is(`function symbol() returns (string)`)],functionName:`symbol`,from:Bs,nonce:t})),stateOverrides:[{address:Bs,nonce:0}]}]:[]],traceTransfers:s,validation:c}),m=o?p[2]:p[0],[h,g,,_,v,y,b,x]=o?p:[],{calls:S,...C}=m,w=S.slice(0,-1)??[],E=h?.calls??[],D=g?.calls??[],ee=[...E,...D].map(e=>e.status===`success`?T(e.data):null),te=_?.calls??[],O=v?.calls??[],k=[...te,...O].map(e=>e.status===`success`?T(e.data):null),A=(y?.calls??[]).map(e=>e.status===`success`?e.result:null),ne=(x?.calls??[]).map(e=>e.status===`success`?e.result:null),re=(b?.calls??[]).map(e=>e.status===`success`?e.result:null),j=[];for(let[e,t]of k.entries()){let n=ee[e];if(typeof t!=`bigint`||typeof n!=`bigint`)continue;let r=A[e-1],i=ne[e-1],a=re[e-1],o=e===0?{address:zs,decimals:18,symbol:`ETH`}:{address:f[e-1],decimals:a||r?Number(r??1):void 0,symbol:i??void 0};j.some(e=>e.token.address===o.address)||j.push({token:o,value:{pre:n,post:t,diff:t-n}})}return{assetChanges:j,block:C,results:w}}var Us=`0x6492649264926492649264926492649264926492649264926492649264926492`;function Ws(e){if(Be(e,-32)!==`0x6492649264926492649264926492649264926492649264926492649264926492`)throw new qs(e)}function Gs(e){let{data:t,signature:n,to:r}=e;return I(No(Fo(`address, bytes, bytes`),[r,t,n]),Us)}function Ks(e){try{return Ws(e),!0}catch{return!1}}var qs=class extends E{constructor(e){super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:`SignatureErc6492.InvalidWrappedSignatureError`})}};function Js({r:e,s:t,to:n=`hex`,v:r,yParity:i}){let a=(()=>{if(i===0||i===1)return i;if(r&&(r===27n||r===28n||r>=35n))return+(r%2n==0n);throw Error("Invalid `v` or `yParity` value")})(),o=`0x${new Et.Signature(T(e),T(t)).toCompactHex()}${a===0?`1b`:`1c`}`;return n===`hex`?o:wt(o)}async function Ys(e,t){let{address:n,chain:r=e.chain,hash:i,erc6492VerifierAddress:a=t.universalSignatureVerifierAddress??r?.contracts?.erc6492Verifier?.address,multicallAddress:o=t.multicallAddress??r?.contracts?.multicall3?.address,mode:s=`auto`}=t;if(r?.verifyHash)return await r.verifyHash(e,t);let c=(()=>{let e=t.signature;return Qe(e)?e:typeof e==`object`&&`r`in e&&`s`in e?Js(e):y(e)})();try{if(s===`eoa`)try{if(Ct(k(n),await _n({hash:i,signature:c})))return!0}catch{}return cs(c)?await Xs(e,{...t,multicallAddress:o,signature:c}):await Zs(e,{...t,verifierAddress:a,signature:c})}catch(e){if(s!==`eoa`)try{if(Ct(k(n),await _n({hash:i,signature:c})))return!0}catch{}if(e instanceof $s)return!1;throw e}}async function Xs(e,t){let{address:n,blockHash:r,blockNumber:i,blockTag:o,hash:s,multicallAddress:c,requireCanonical:l}=t,{authorization:u,data:d,signature:f,to:p}=ss(t.signature);if(await aa(e,{address:n,blockHash:r,blockNumber:i,blockTag:o,requireCanonical:l})===a([`0xef0100`,u.address]))return await Qs(e,{...t,signature:f});let m={address:u.address,chainId:Number(u.chainId),nonce:Number(u.nonce),r:R(u.r,{size:32}),s:R(u.s,{size:32}),yParity:u.yParity};if(!await pa({address:n,authorization:m}))throw new $s;let h=await W(e,Kr,`readContract`)({...c?{address:c}:{code:B},authorizationList:[m],abi:Me,blockHash:r,blockNumber:i,blockTag:`pending`,functionName:`aggregate3`,requireCanonical:l,args:[[...d?[{allowFailure:!0,target:p??n,callData:d}]:[],{allowFailure:!0,target:n,callData:L({abi:et,functionName:`isValidSignature`,args:[s,f]})}]]});if((h[h.length-1]?.returnData)?.startsWith(`0x1626ba7e`))return!0;throw new $s}async function Zs(e,t){let{address:r,factory:i,factoryData:a,hash:o,signature:s,verifierAddress:c,...l}=t,u=await(async()=>!i&&!a||Ks(s)?s:Gs({data:a,signature:s,to:i}))(),d=c?{to:c,data:L({abi:Fe,functionName:`isValidSig`,args:[r,o,u]}),...l}:{data:we({abi:Fe,args:[r,o,u],bytecode:pt}),...l},{data:f}=await W(e,at,`call`)(d).catch(e=>{throw e instanceof n?new $s:e});if(it(f??`0x0`))return!0;throw new $s}async function Qs(e,t){let{address:n,blockHash:r,blockNumber:i,blockTag:a,hash:o,requireCanonical:s,signature:c}=t;if((await W(e,Kr,`readContract`)({address:n,abi:et,args:[o,c],blockHash:r,blockNumber:i,blockTag:a,functionName:`isValidSignature`,requireCanonical:s}).catch(e=>{throw e instanceof Oe?new $s:e})).startsWith(`0x1626ba7e`))return!0;throw new $s}var $s=class extends Error{};async function ec(e,{address:t,message:n,factory:r,factoryData:i,signature:a,...o}){let s=ka(n);return W(e,Ys,`verifyHash`)({address:t,factory:r,factoryData:i,hash:s,signature:a,...o})}async function tc(e,t){let{address:n,factory:r,factoryData:i,signature:a,message:o,primaryType:s,types:c,domain:l,...u}=t,d=La({message:o,primaryType:s,types:c,domain:l});return W(e,Ys,`verifyHash`)({address:n,factory:r,factoryData:i,hash:d,signature:a,...u})}function nc(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:a,pollingInterval:o=e.pollingInterval}){let s=a===void 0?e.transport.type!==`webSocket`&&e.transport.type!==`ipc`&&(e.transport.type!==`fallback`||e.transport.transports[0].config.type!==`webSocket`&&e.transport.transports[0].config.type!==`ipc`):a,c;return s?Zr(ye([`watchBlockNumber`,e.uid,t,n,o]),{onBlockNumber:r,onError:i},r=>$r(async()=>{try{let t=await W(e,ai,`getBlockNumber`)({cacheTime:0});if(c!==void 0){if(t===c)return;if(t-c>1&&n)for(let e=c+1n;e<t;e++)r.onBlockNumber(e,c),c=e}(c===void 0||t>c)&&(r.onBlockNumber(t,c),c=t)}catch(e){r.onError?.(e)}},{emitOnBegin:t,interval:o})):Zr(ye([`watchBlockNumber`,e.uid,t,n]),{onBlockNumber:r,onError:i},t=>{let n=!0,r=()=>n=!1;return(async()=>{try{let{unsubscribe:i}=await(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})().subscribe({params:[`newHeads`],onData(e){if(!n)return;let r=T(e.result?.number);t.onBlockNumber(r,c),c=r},onError(e){t.onError?.(e)}});r=i,n||r()}catch(e){i?.(e)}})(),()=>r()})}async function rc(e,t){let{checkReplacement:n=e.chain?.supportsTransactionReplacementDetection??!0,confirmations:r=1,hash:i,onReplaced:a,retryCount:o=6,retryDelay:s=({count:e})=>~~(1<<e)*200,timeout:c=18e4}=t,l=ye([`waitForTransactionReceipt`,e.uid,i]),u=t.pollingInterval?t.pollingInterval:e.chain?.experimental_preconfirmationTime?e.chain.experimental_preconfirmationTime:e.pollingInterval,d,f,p,m=!1,h,g,{promise:_,resolve:v,reject:y}=be(),b=c?setTimeout(()=>{g?.(),h?.(),y(new je({hash:i}))},c):void 0;return h=Zr(l,{onReplaced:a,resolve:v,reject:y},async t=>{if(p=await W(e,vs,`getTransactionReceipt`)({hash:i}).catch(()=>void 0),p&&r<=1){clearTimeout(b),t.resolve(p),h?.();return}g=W(e,nc,`watchBlockNumber`)({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:u,async onBlockNumber(a){let c=e=>{clearTimeout(b),g?.(),e(),h?.()},l=a;if(!m)try{if(p){if(r>1&&(!p.blockNumber||l-p.blockNumber+1n<r))return;c(()=>t.resolve(p));return}if(n&&!d&&(m=!0,await di(async()=>{d=await W(e,gs,`getTransaction`)({hash:i}),d.blockNumber&&(l=d.blockNumber)},{delay:s,retryCount:o}),m=!1),p=await W(e,vs,`getTransactionReceipt`)({hash:i}),r>1&&(!p.blockNumber||l-p.blockNumber+1n<r))return;c(()=>t.resolve(p))}catch(n){if(n instanceof Ge||n instanceof ht){if(!d){m=!1;return}try{f=d,m=!0;let n=await di(()=>W(e,Fn,`getBlock`)({blockNumber:l,includeTransactions:!0}),{delay:s,retryCount:o,shouldRetry:({error:e})=>e instanceof An});m=!1;let i=n.transactions.find(({from:e,nonce:t})=>e===f.from&&t===f.nonce);if(!i||(p=await W(e,vs,`getTransactionReceipt`)({hash:i.hash}),r>1&&(!p.blockNumber||l-p.blockNumber+1n<r)))return;let a=`replaced`;i.to===f.to&&i.value===f.value&&i.input===f.input?a=`repriced`:i.from===i.to&&i.value===0n&&(a=`cancelled`),c(()=>{t.onReplaced?.({reason:a,replacedTransaction:f,transaction:i,transactionReceipt:p}),t.resolve(p)})}catch(e){c(()=>t.reject(e))}}else c(()=>t.reject(n))}}})}),_}function ic(e,{blockTag:t=e.experimental_blockTag??`latest`,emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:a,includeTransactions:o,poll:s,pollingInterval:c=e.pollingInterval}){let l=s===void 0?e.transport.type!==`webSocket`&&e.transport.type!==`ipc`&&(e.transport.type!==`fallback`||e.transport.transports[0].config.type!==`webSocket`&&e.transport.transports[0].config.type!==`ipc`):s,u=o??!1,d;return l?Zr(ye([`watchBlocks`,e.uid,t,n,r,u,c]),{onBlock:i,onError:a},i=>$r(async()=>{try{let r=await W(e,Fn,`getBlock`)({blockTag:t,includeTransactions:u});if(r.number!==null&&d?.number!=null){if(r.number===d.number)return;if(r.number-d.number>1&&n)for(let t=d?.number+1n;t<r.number;t++){let n=await W(e,Fn,`getBlock`)({blockNumber:t,includeTransactions:u});i.onBlock(n,d),d=n}}(d?.number==null||t===`pending`&&r?.number==null||r.number!==null&&r.number>d.number)&&(i.onBlock(r,d),d=r)}catch(e){i.onError?.(e)}},{emitOnBegin:r,interval:c})):(()=>{let n=!0,o=!0,s=()=>n=!1;return(async()=>{try{r&&W(e,Fn,`getBlock`)({blockTag:t,includeTransactions:u}).then(e=>{n&&(o&&=(i(e,void 0),!1))}).catch(a);let{unsubscribe:c}=await(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})().subscribe({params:[`newHeads`],async onData(t){if(!n)return;let r=await W(e,Fn,`getBlock`)({blockNumber:t.result?.number,includeTransactions:u}).catch(()=>{});n&&(i(r,d),o=!1,d=r)},onError(e){a?.(e)}});s=c,n||s()}catch(e){a?.(e)}})(),()=>s()})()}function ac(e,{address:t,args:n,batch:r=!0,event:i,events:a,fromBlock:o,onError:s,onLogs:c,poll:l,pollingInterval:u=e.pollingInterval,strict:d}){let f=l===void 0?typeof o==`bigint`||e.transport.type!==`webSocket`&&e.transport.type!==`ipc`&&(e.transport.type!==`fallback`||e.transport.transports[0].config.type!==`webSocket`&&e.transport.transports[0].config.type!==`ipc`):l,p=d??!1;return f?Zr(ye([`watchEvent`,t,n,r,e.uid,i,u,o]),{onLogs:c,onError:s},s=>{let c;o!==void 0&&(c=o-1n);let l,d=!1,f=$r(async()=>{if(!d){try{l=await W(e,$i,`createEventFilter`)({address:t,args:n,event:i,events:a,strict:p,fromBlock:o})}catch{}d=!0;return}try{let o;if(l)o=await W(e,oi,`getFilterChanges`)({filter:l});else{let r=await W(e,ai,`getBlockNumber`)({});o=c&&c!==r?await W(e,vr,`getLogs`)({address:t,args:n,event:i,events:a,fromBlock:c+1n,toBlock:r}):[],c=r}if(o.length===0)return;if(r)s.onLogs(o);else for(let e of o)s.onLogs([e])}catch(e){l&&e instanceof Ut&&(d=!1),s.onError?.(e)}},{emitOnBegin:!0,interval:u});return async()=>{l&&await W(e,si,`uninstallFilter`)({filter:l}),f()}}):(()=>{let r=!0,o=()=>r=!1;return(async()=>{try{let l=(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})(),u=a??(i?[i]:void 0),f=[];u&&(f=[u.flatMap(e=>jt({abi:[e],eventName:e.name,args:n}))],i&&(f=f[0]));let{unsubscribe:m}=await l.subscribe({params:[`logs`,{address:t,topics:f}],onData(e){if(!r)return;let t=e.result;try{let{eventName:e,args:n}=mr({abi:u??[],data:t.data,topics:t.topics,strict:p});c([fr(t,{args:n,eventName:e})])}catch(e){let n,r;if(e instanceof Ye||e instanceof ot){if(d)return;n=e.abiItem.name,r=e.abiItem.inputs?.some(e=>!(`name`in e&&e.name))}c([fr(t,{args:r?[]:{},eventName:n})])}},onError(e){s?.(e)}});o=m,r||o()}catch(e){s?.(e)}})(),()=>o()})()}function oc(e,{batch:t=!0,onError:n,onTransactions:r,poll:i,pollingInterval:a=e.pollingInterval}){return(i===void 0?e.transport.type!==`webSocket`&&e.transport.type!==`ipc`:i)?Zr(ye([`watchPendingTransactions`,e.uid,t,a]),{onTransactions:r,onError:n},n=>{let r,i=$r(async()=>{try{if(!r)try{r=await W(e,ea,`createPendingTransactionFilter`)({});return}catch(e){throw i(),e}let a=await W(e,oi,`getFilterChanges`)({filter:r});if(a.length===0)return;if(t)n.onTransactions(a);else for(let e of a)n.onTransactions([e])}catch(e){n.onError?.(e)}},{emitOnBegin:!0,interval:a});return async()=>{r&&await W(e,si,`uninstallFilter`)({filter:r}),i()}}):(()=>{let t=!0,i=()=>t=!1;return(async()=>{try{let{unsubscribe:a}=await e.transport.subscribe({params:[`newPendingTransactions`],onData(e){if(!t)return;let n=e.result;r([n])},onError(e){n?.(e)}});i=a,t||i()}catch(e){n?.(e)}})(),()=>i()})()}function sc(e){let{scheme:t,statement:n,...r}=e.match(cc)?.groups??{},{chainId:i,expirationTime:a,issuedAt:o,notBefore:s,requestId:c,...l}=e.match(lc)?.groups??{},u=e.split(`Resources:`)[1]?.split(`
- `).slice(1);return{...r,...l,...i?{chainId:Number(i)}:{},...a?{expirationTime:new Date(a)}:{},...o?{issuedAt:new Date(o)}:{},...s?{notBefore:new Date(s)}:{},...c?{requestId:c}:{},...u?{resources:u}:{},...t?{scheme:t}:{},...n?{statement:n}:{}}}var cc=/^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,lc=/(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;function uc(e){let{address:t,domain:n,message:r,nonce:i,scheme:a,time:o=new Date}=e;if(n&&r.domain!==n||i&&r.nonce!==i||a&&r.scheme!==a||r.expirationTime&&o>=r.expirationTime||r.notBefore&&o<r.notBefore)return!1;try{if(!r.address||!U(r.address,{strict:!1})||t&&!Ct(r.address,t))return!1}catch{return!1}return!0}async function dc(e,t){let{address:n,domain:r,message:i,nonce:a,scheme:o,signature:s,time:c=new Date,...l}=t,u=sc(i);if(!u.address||!uc({address:n,domain:r,message:u,nonce:a,scheme:o,time:c}))return!1;let d=ka(i);return Ys(e,{address:u.address,hash:d,signature:s,...l})}function fc(e,t){return{amount:e,decimals:t,formatted:us(e,t)}}function pc(e,t){let{decimals:n,token:r}=t,i=mc(e,r);if(i)return{address:i.address,decimals:n??i.decimals};if(U(r,{strict:!1}))return{address:r,decimals:n??_c(e,r)};throw Error(`Token "${r}" is not a declared ERC-20 token on the client's \`tokens\` array (with an address for the client's chain), and is not a valid address.`)}function mc(e,t){let n=e.tokens,r=e.chain?.id;if(!n||r===void 0)return;let i=gc(n,t);if(i)return hc(i,r);if(U(t,{strict:!1}))for(let e of n){let n=hc(e,r);if(n&&Ct(n.address,t))return n}}function hc(e,t){let n=e.addresses[t];if(n)return{address:n,currency:e.currency,decimals:e.decimals,name:e.name,popular:e.popular,symbol:e.symbol}}function gc(e,t){let n=t.toLowerCase();for(let t of e)if(t.symbol?.toLowerCase()===n)return t}function _c(e,t){let n=e.tokens,r=e.chain?.id;if(n&&r!==void 0)for(let e of n){let n=hc(e,r);if(n&&Ct(n.address,t))return n.decimals}}async function vc(e,t){let{address:n,decimals:r}=pc(e,t);return r===void 0?{address:n,decimals:await Kr(e,{abi:Ke,address:n,functionName:`decimals`})}:{address:n,decimals:r}}function yc(e){return{...e,data:L(e),to:e.address}}async function bc(e,{serializedTransaction:t,throwOnReceiptRevert:n,timeout:r}){let i=await e.request({method:`eth_sendRawTransactionSync`,params:r?[t,r]:[t]},{retryCount:0}),a=(e.chain?.formatters?.transactionReceipt?.format||pi)(i);if(a.status===`reverted`&&n)throw new Ee({receipt:a});return a}async function xc(e,t){let{account:n,decimals:r,spender:i,token:a,...o}=t,[s,{decimals:c}]=await Promise.all([Kr(e,{...o,...xc.call(e,{account:n,spender:i,token:a})}),vc(e,{decimals:r,token:a})]);return fc(s,c)}(function(e){function t(e,t){return yc({address:pc(e,t).address,abi:Ke,functionName:`allowance`,args:[t.account,t.spender]})}e.call=t})(xc||={});async function Sc(e,t){let{account:n=e.account,decimals:r,token:i,...a}=t;if(!n)throw new li;let o=l(n).address,[s,{decimals:c}]=await Promise.all([Kr(e,{...a,...Sc.call(e,{account:o,token:i})}),vc(e,{decimals:r,token:i})]);return fc(s,c)}(function(e){function t(e,t){let n=t.account??e.account;if(!n)throw new li;let r=l(n).address;return yc({address:pc(e,t).address,abi:Ke,functionName:`balanceOf`,args:[r]})}e.call=t})(Sc||={});async function Cc(e,t){let{token:n,...r}=t,{address:i}=pc(e,{token:n}),a=mc(e,n),[o,s,c]=await Promise.all([a?.decimals??Kr(e,{...r,abi:Ke,address:i,functionName:`decimals`}),a?.name??Kr(e,{...r,abi:Ke,address:i,functionName:`name`}),a?.symbol??Kr(e,{...r,abi:Ke,address:i,functionName:`symbol`})]);return{decimals:o,name:s,symbol:c}}async function wc(e,t){let{decimals:n,token:r,...i}=t,[a,{decimals:o}]=await Promise.all([Kr(e,{...i,...wc.call(e,{token:r})}),vc(e,{decimals:n,token:r})]);return fc(a,o)}(function(e){function t(e,t){return yc({address:pc(e,t).address,abi:Ke,args:[],functionName:`totalSupply`})}e.call=t})(wc||={});function Tc(e){return{call:t=>at(e,t),createAccessList:t=>Zi(e,t),createBlockFilter:()=>Qi(e),createContractEventFilter:t=>Pt(e,t),createEventFilter:t=>$i(e,t),createPendingTransactionFilter:()=>ea(e),estimateContractGas:t=>dr(e,t),estimateGas:t=>ur(e,t),getBalance:t=>ta(e,t),getBlobBaseFee:()=>na(e),getBlock:t=>Fn(e,t),getBlockNumber:t=>ai(e,t),getBlockReceipts:t=>ra(e,t),getBlockTransactionCount:t=>ia(e,t),getBytecode:t=>aa(e,t),getChainId:()=>ir(e),getCode:t=>aa(e,t),getContractEvents:t=>yr(e,t),getDelegation:t=>oa(e,t),getEip712Domain:t=>ca(e,t),getEnsAddress:t=>Di(e,t),getEnsAvatar:t=>Ji(e,t),getEnsName:t=>Yi(e,t),getEnsResolver:t=>Xi(e,t),getEnsText:t=>qi(e,t),getFeeHistory:t=>da(e,t),estimateFeesPerGas:t=>zn(e,t),getFilterChanges:t=>oi(e,t),getFilterLogs:t=>fa(e,t),getGasPrice:()=>In(e),getLogs:t=>vr(e,t),getProof:t=>ps(e,t),estimateMaxPriorityFeePerGas:t=>Ln(e,t),fillTransaction:t=>ar(e,t),getRawTransaction:t=>ms(e,t),getStorageAt:t=>hs(e,t),getTransaction:t=>gs(e,t),getTransactionConfirmations:t=>_s(e,t),getTransactionCount:t=>Vn(e,t),getTransactionReceipt:t=>vs(e,t),multicall:t=>ys(e,t),prepareTransactionRequest:t=>lr(e,t),readContract:t=>Kr(e,t),sendRawTransaction:t=>ui(e,t),sendRawTransactionSync:t=>bc(e,t),simulate:t=>xs(e,t),simulateBlocks:t=>xs(e,t),simulateCalls:t=>Hs(e,t),simulateContract:t=>qr(e,t),verifyHash:t=>Ys(e,t),verifyMessage:t=>ec(e,t),verifySiweMessage:t=>dc(e,t),verifyTypedData:t=>tc(e,t),uninstallFilter:t=>si(e,t),waitForTransactionReceipt:t=>rc(e,t),watchBlocks:t=>ic(e,t),watchBlockNumber:t=>nc(e,t),watchContractEvent:t=>ci(e,t),watchEvent:t=>ac(e,t),watchPendingTransactions:t=>oc(e,t),token:Ec(e)}}function Ec(e){return{getAllowance:bi(e,xc),getBalance:bi(e,Sc),getMetadata:bi(e,Cc),getTotalSupply:bi(e,wc)}}function Dc(e){let{key:t=`public`,name:n=`Public Client`}=e;return vi({...e,key:t,name:n,type:`publicClient`}).extend(Tc)}function Oc({key:e,methods:t,name:n,request:r,retryCount:i=3,retryDelay:a=150,timeout:o,type:s},c){let l=_i();return{config:{key:e,methods:t,name:n,request:r,retryCount:i,retryDelay:a,timeout:o,type:s},request:ga(r,{methods:t,retryCount:i,retryDelay:a,uid:l}),value:c}}function kc(e,t={}){let{key:n=`fallback`,name:r=`Fallback`,rank:i=!1,shouldThrow:a=Ac,retryCount:o,retryDelay:s}=t;return(({chain:t,pollingInterval:c=4e3,timeout:l,...u})=>{let d=e,f=()=>{},p=Oc({key:n,name:r,async request({method:e,params:n}){let r,i=async(o=0)=>{let s=d[o]({...u,chain:t,retryCount:0,timeout:l});try{let t=await s.request({method:e,params:n});return f({method:e,params:n,response:t,transport:s,status:`success`}),t}catch(c){if(f({error:c,method:e,params:n,transport:s,status:`error`}),a(c)||o===d.length-1||(r??=d.slice(o+1).some(n=>{let{include:r,exclude:i}=n({chain:t}).config.methods||{};return r?r.includes(e):!i||!i.includes(e)}),!r))throw c;return i(o+1)}};return i()},retryCount:o,retryDelay:s,type:`fallback`},{onResponse:e=>f=e,transports:d.map(e=>e({chain:t,retryCount:0}))});if(i){let e=typeof i==`object`?i:{};jc({chain:t,interval:e.interval??c,onTransports:e=>d=e,ping:e.ping,sampleCount:e.sampleCount,timeout:e.timeout,transports:d,weights:e.weights})}return p})}function Ac(e){return!!(`code`in e&&typeof e.code==`number`&&(e.code===Kt.code||e.code===Xt.code||e.code===un.code||w.nodeMessage.test(e.message)||e.code===5e3))}function jc({chain:e,interval:t=4e3,onTransports:n,ping:r,sampleCount:i=10,timeout:a=1e3,transports:o,weights:s={}}){let{stability:c=.7,latency:l=.3}=s,u=[],d=async()=>{let s=await Promise.all(o.map(async t=>{let n=t({chain:e,retryCount:0,timeout:a}),i=Date.now(),o,s;try{await(r?r({transport:n}):n.request({method:`net_listening`})),s=1}catch{s=0}finally{o=Date.now()}return{latency:o-i,success:s}}));u.push(s),u.length>i&&u.shift();let f=Math.max(...u.map(e=>Math.max(...e.map(({latency:e})=>e))));n(o.map((e,t)=>{let n=u.map(e=>e[t].latency),r=1-n.reduce((e,t)=>e+t,0)/n.length/f,i=u.map(e=>e[t].success),a=i.reduce((e,t)=>e+t,0)/i.length;return a===0?[0,t]:[l*r+c*a,t]}).sort((e,t)=>t[0]-e[0]).map(([,e])=>o[e])),await Qr(t),d()};d()}var Mc=class extends H{constructor(){super(`No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.`,{docsPath:`/docs/clients/intro`,name:`UrlRequiredError`})}},Nc=0,Pc=new WeakMap;function Fc(e){if(!e)return`default`;let t=Pc.get(e);if(t!==void 0)return t;let n=Nc++;return Pc.set(e,n),n}function Ic(e,t={}){let{batch:n,fetchFn:r,fetchOptions:i,key:a=`http`,maxResponseBodySize:o,methods:s,name:c=`HTTP JSON-RPC`,onFetchRequest:l,onFetchResponse:u,retryDelay:d,raw:f}=t;return({chain:p,retryCount:m,timeout:h})=>{let{batchSize:g=1e3,wait:_=0}=typeof n==`object`?n:{},v=t.retryCount??m,y=h??t.timeout??1e4,b=e||p?.rpcUrls.default.http[0];if(!b)throw new Mc;let x=wa(b,{fetchFn:r,fetchOptions:i,maxResponseBodySize:o,onRequest:l,onResponse:u,timeout:y});return Oc({key:a,methods:s,name:c,async request({method:e,params:t},r){let i={method:e,params:t},a=r?.signal?{signal:r.signal}:void 0,{schedule:o}=Re({id:`${b}.${Fc(r?.signal)}`,wait:_,shouldSplitBatch(e){return e.length>g},fn:e=>x.request({body:e,fetchOptions:a}),sort:(e,t)=>e.id-t.id}),[{error:s,result:c}]=await(async e=>n?o(e):[await x.request({body:e,fetchOptions:a})])(i);if(f)return{error:s,result:c};if(s)throw new he({body:i,error:s,url:b});return c},retryCount:v,retryDelay:d,timeout:y,type:`http`},{fetchOptions:i,url:b})}}var Lc={pulsechain:{chain:ya({id:369,name:`PulseChain`,nativeCurrency:{name:`Pulse`,symbol:`PLS`,decimals:18},rpcUrls:{default:{http:[`https://rpc.pulsechain.com`,`https://pulsechain-rpc.publicnode.com`,`https://rpc-pulsechain.g4mm4.io`]}},blockExplorers:{default:{name:`PulseScan`,url:`https://scan.pulsechain.com`}}}),label:`PulseChain`,symbol:`PLS`,rpcs:[`https://rpc.pulsechain.com`,`https://pulsechain-rpc.publicnode.com`,`https://pulsechain.publicnode.com`,`https://rpc-pulsechain.g4mm4.io`,`https://pulsechain.rpc.thirdweb.com`,`https://rpc.pulsechainrpc.com`,`https://rpc.pulsechainstats.com`,`https://rpc.hairylabs.io/rpc`]}};function Rc(e){return`pulsechain`}var zc=`pulsefans-tipbuzz-v1`;function Bc(e=`pulsechain`){return[...Lc[e].rpcs]}function Vc(e){let t=[],n=new Set,r=e.split(/[\n\r,;]+/).map(e=>e.trim()).filter(Boolean);for(let e of r)if(!e.startsWith(`#`)&&(e=e.replace(/^[-\d.)\s]+/,``).trim(),e))try{let r=new URL(e);if(r.protocol!==`http:`&&r.protocol!==`https:`)continue;let i=r.toString().replace(/\/$/,``);if(n.has(i))continue;n.add(i),t.push(i)}catch{}return t}function Hc(e){return e.join(`
`)}var Uc=new Set([`https://rpc.pulsechain.com`,`https://pulsechain-rpc.publicnode.com`,`https://rpc-pulsechain.g4mm4.io`,`https://evex.cloud/pulserpc`]);function Wc(e){let t=Bc(`pulsechain`),n=Vc(e);return!n.length||n.every(e=>Uc.has(e))?Hc(t):Hc(n)}var Gc=[`0x1715a3E4A142d8b698131108995174F37aEBA10D`,`0x29eA7545DEf87022BAdc76323F373EA1e707C523`],Kc=`0x0000000000000000000000000000000000000000`;function qc(e){return e===`all`||e===`buy`||e===`sell`||e===`add`||e===`remove`||e===`in`||e===`out`}function Jc(e){return e===`swap`||e===`mint`||e===`burn`}function Yc(e){return e===`swap`||e===`mint`||e===`burn`||e===`bridge-in`||e===`bridge-out`||e===`custom`}function Xc(e){switch(e){case`mint`:return`LP add`;case`burn`:return`LP remove`;case`bridge-in`:return`Bridge in`;case`bridge-out`:return`Bridge out`;case`custom`:return`Chain event`;default:return`Pool swap`}}function Zc(e){switch(e){case`mint`:return`LP ADD`;case`burn`:return`LP REMOVE`;case`bridge-in`:return`BRIDGE IN`;case`bridge-out`:return`BRIDGE OUT`;case`custom`:return`EVENT`;default:return`SWAP`}}function Qc(e){if(e==null||!Array.isArray(e))return[`swap`];let t=[],n=new Set;for(let r of e.slice(0,8))!Jc(r)||n.has(r)||(n.add(r),t.push(r));return t}function $c(e,t){let n=e?.listen;return n?n.includes(t):t===`swap`}function el(e){if(typeof e!=`string`)return null;let t=e.trim();return!U(t)||t.toLowerCase()===Kc?null:t}function tl(){return`pbr-${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`}function nl(e){return`${String(e||`trg`).trim().replace(/[^a-z0-9-]/gi,``).slice(0,8)||`trg`}-${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`}function rl(e){if(!e||typeof e!=`object`||Array.isArray(e))return null;let t=e,n=Number(t.minAmount),r=Math.round(Number(t.multiples)),i=Array.isArray(t.toyIds)?[...new Set(t.toyIds.map(e=>String(e||``).trim()).filter(Boolean).slice(0,24))]:[];return{id:String(t.id||``).trim().slice(0,48)||tl(),minAmount:Number.isFinite(n)&&n>=0?n:0,patternId:String(t.patternId||``).trim().slice(0,64),toyIds:i,multiples:Number.isFinite(r)?Math.min(8,Math.max(1,r)):1,side:qc(t.side)?t.side:`all`}}function il(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r of e.slice(0,24)){let e=rl(r);e&&(n.has(e.id)&&(e.id=tl()),n.add(e.id),t.push(e))}return t}function al(e,t,n){let r=Number(t);if(!Number.isFinite(r)||r<0)return null;let i=String(n||``).toLowerCase(),a=[...e?.buzzRules||[]].sort((e,t)=>t.minAmount-e.minAmount||e.side.localeCompare(t.side)||e.id.localeCompare(t.id));for(let e of a){if(r<e.minAmount)continue;let t=e.side||`all`;if(!(t!==`all`&&(!qc(i)||i===`all`||t!==i)))return e}return null}function ol(e){return rl({id:tl(),minAmount:0,patternId:``,toyIds:[],multiples:1,side:`all`,...e})||{id:tl(),minAmount:0,patternId:``,toyIds:[],multiples:1,side:`all`}}function sl(e){let t=String(e||`0x`).replace(/^0x/i,``).padStart(256,`0`);return{amount0In:BigInt(`0x`+t.slice(0,64)),amount1In:BigInt(`0x`+t.slice(64,128)),amount0Out:BigInt(`0x`+t.slice(128,192)),amount1Out:BigInt(`0x`+t.slice(192,256))}}function cl(e,t){let n=e.quoteToken.toLowerCase(),r=(e.token0||``).toLowerCase(),i=(e.token1||``).toLowerCase(),a=0n,o=0n;if(r&&r===n)a=t.amount0In,o=t.amount0Out;else if(i&&i===n)a=t.amount1In,o=t.amount1Out;else return{amountWei:0n,side:`unknown`,quoteSymbol:e.quoteSymbol||`TOK`};let s=`swap`,c=0n;return a>0n&&o===0n?(s=`buy`,c=a):o>0n&&a===0n?(s=`sell`,c=o):(c=a>o?a:o,s=a>=o?`buy`:`sell`),{amountWei:c,side:s,quoteSymbol:e.quoteSymbol||`WPLS`}}function ll(e,t,n){let r=e.quoteToken.toLowerCase(),i=(e.token0||``).toLowerCase(),a=(e.token1||``).toLowerCase();return i&&i===r?{amountWei:t>0n?t:0n,quoteSymbol:e.quoteSymbol||`WPLS`}:a&&a===r?{amountWei:n>0n?n:0n,quoteSymbol:e.quoteSymbol||`WPLS`}:{amountWei:0n,quoteSymbol:e.quoteSymbol||`TOK`}}function ul(e){if(!e||typeof e!=`object`||Array.isArray(e))return null;let t=e,n=el(t.address);if(!n)return null;let r=el(t.quoteToken)||`0xA1077a294dDE1B09bB078844df40758a5D0f9a27`,i=Math.min(36,Math.max(0,Math.round(Number(t.decimals)||18))),a=Number(t.minAmount),o=Number(t.overlayMinAmount);return{address:n,label:String(t.label||`pool`).trim().slice(0,48)||`pool`,token0:el(t.token0)||void 0,token1:el(t.token1)||void 0,quoteToken:r,quoteSymbol:String(t.quoteSymbol||`WPLS`).trim().slice(0,16)||`WPLS`,decimals:i,side:qc(t.side)?t.side:`all`,minAmount:Number.isFinite(a)&&a>=0?a:0,enabled:t.enabled!==!1,overlayAlert:t.overlayAlert===void 0||!!t.overlayAlert,overlayMinAmount:t.overlayMinAmount===null||t.overlayMinAmount===void 0||t.overlayMinAmount===``?null:Number.isFinite(o)&&o>=0?o:null,buzzRules:il(t.buzzRules),listen:Qc(t.listen===void 0?t.events:t.listen)}}function dl(e){return(e||[]).filter(e=>e.enabled!==!1&&U(e.address))}function fl(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r of e){let e=ul(r);if(!e)continue;let i=e.address.toLowerCase();n.has(i)||(n.add(i),t.push(e))}return t}var pl=fl([{address:`0xE56043671df55dE5CDf8459710433C10324DE0aE`,label:`WPLS/DAI (liquid)`,token0:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,token1:`0xefd766ccb38eaf1dfd701853bfce31359239f305`,quoteToken:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteSymbol:`WPLS`,decimals:18,side:`all`,minAmount:`50000`},{address:`0x6753560538ECa67617A9Ce605178F788bE7E524E`,label:`WPLS/USDC`,token0:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,token1:`0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07`,quoteToken:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteSymbol:`WPLS`,decimals:18,side:`all`,minAmount:`50000`},{address:`0x322Df7921F28F1146Cdf62aFdaC0D6bC0Ab80711`,label:`WPLS/USDT`,token0:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,token1:`0x0cb6f5a34ad42ec934882a05265a7d5f59b51a2f`,quoteToken:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteSymbol:`WPLS`,decimals:18,side:`all`,minAmount:`50000`},{address:`0x1b45b9148791d3a104184Cd5DFE5CE57193a3ee9`,label:`PLSX/WPLS (deep)`,token0:`0x95b303987a60c71504d99aa1b13b4da07b0790ab`,token1:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteToken:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteSymbol:`WPLS`,decimals:18,side:`all`,minAmount:`100000`},{address:`0x149B2C629e652f2E89E11cd57e5d4D77ee166f9F`,label:`PLSX/WPLS`,token0:`0x95b303987a60c71504d99aa1b13b4da07b0790ab`,token1:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteToken:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteSymbol:`WPLS`,decimals:18,side:`all`,minAmount:`50000`},{address:`0x19BB45a7270177e303DEe6eAA6F5Ad700812bA98`,label:`HEX/WPLS`,token0:`0x2b591e99afe9f32eaa6214f7b7629768c40eeb39`,token1:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteToken:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteSymbol:`WPLS`,decimals:18,side:`all`,minAmount:`50000`},{address:`0xf1F4ee610b2bAbB05C635F726eF8B0C568c8dc65`,label:`HEX/WPLS (alt)`,token0:`0x2b591e99afe9f32eaa6214f7b7629768c40eeb39`,token1:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteToken:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteSymbol:`WPLS`,decimals:18,side:`all`,minAmount:`50000`},{address:`0xC475332e92561CD58f278E4e2eD76c17D5b50f05`,label:`HEX/USDC`,token0:`0x2b591e99afe9f32eaa6214f7b7629768c40eeb39`,token1:`0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07`,quoteToken:`0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07`,quoteSymbol:`USDC`,decimals:6,side:`all`,minAmount:`50`},{address:`0x8268De0B539d1C03Fa693CA7EE47EAF70c8CD57D`,label:`HEX/PLSX`,token0:`0x2b591e99afe9f32eaa6214f7b7629768c40eeb39`,token1:`0x95b303987a60c71504d99aa1b13b4da07b0790ab`,quoteToken:`0x95b303987a60c71504d99aa1b13b4da07b0790ab`,quoteSymbol:`PLSX`,decimals:18,side:`all`,minAmount:`100000`},{address:`0xf808Bb6265e9Ca27002c0A04562Bf50d4FE37EAA`,label:`INC/WPLS`,token0:`0x2fa878ab3f87cc1c9737fc071108f904c0b0c95d`,token1:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteToken:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteSymbol:`WPLS`,decimals:18,side:`all`,minAmount:`30000`},{address:`0x7Dbeca4c74d01cd8782D4EF5C05C0769723fb0ea`,label:`INC/PLSX`,token0:`0x2fa878ab3f87cc1c9737fc071108f904c0b0c95d`,token1:`0x95b303987a60c71504d99aa1b13b4da07b0790ab`,quoteToken:`0x95b303987a60c71504d99aa1b13b4da07b0790ab`,quoteSymbol:`PLSX`,decimals:18,side:`all`,minAmount:`50000`},{address:`0xB2893ceA8080bF43b7b60B589EDaAb5211D98F23`,label:`PLSX/DAI`,token0:`0x95b303987a60c71504d99aa1b13b4da07b0790ab`,token1:`0xefd766ccb38eaf1dfd701853bfce31359239f305`,quoteToken:`0xefd766ccb38eaf1dfd701853bfce31359239f305`,quoteSymbol:`DAI`,decimals:18,side:`all`,minAmount:`100`},{address:`0x146e1f1e060e5b5016db0d118d2c5a11a240ae32`,label:`WPLS/eDAI`,token0:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,token1:`0xefd766ccb38eaf1dfd701853bfce31359239f305`,quoteToken:`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,quoteSymbol:`WPLS`,decimals:18,side:`all`,minAmount:`20000`}]);function ml(e){let t=new Set(e.map(e=>e.address.toLowerCase())),n=[...e],r=0;for(let e of pl){let i=e.address.toLowerCase();t.has(i)||(t.add(i),n.push({...e,enabled:!1}),r++)}return{pools:n,added:r}}var hl=`0x4fD0aaa7506f3d9cB8274bdB946Ec42A1b8751Ef`,gl=Dt(`event TokensBridged(address indexed token, address indexed recipient, uint256 value, bytes32 indexed messageId)`),_l=Dt(`event TokensBridgingInitiated(address indexed token, address indexed sender, uint256 value, bytes32 indexed messageId)`),vl=Dt(`event Transfer(address indexed from, address indexed to, uint256 value)`),yl=[`0x57fde0a71132198bbec939b98976993d8d89d225`,`0x02DcdD04e3F455D838cd1249292C58f3B79e3C3C`,`0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07`,`0x0cb6f5a34ad42ec934882a05265a7d5f59b51a2f`,`0xefD766cCb38EaF1dfd701853BFCe31359239F305`],bl=`0x0000000000000000000000000000000000000000`;function xl(e){if(typeof e!=`string`)return null;let t=e.trim();return!U(t)||t.toLowerCase()===bl?null:t}function Sl(e){return e===`both`||e===`in`||e===`out`}function Cl(e){if(!e||typeof e!=`object`||Array.isArray(e))return null;let t=e,n=xl(t.address);if(!n)return null;let r=Number(t.minAmount),i=Number(t.overlayMinAmount),a=Math.min(36,Math.max(0,Math.round(Number(t.decimals)||18)));return{id:String(t.id||``).trim().slice(0,48)||nl(`brg`),address:n,label:String(t.label||`bridge`).trim().slice(0,48)||`bridge`,direction:Sl(t.direction)?t.direction:`both`,token:xl(t.token),minAmount:Number.isFinite(r)&&r>=0?r:0,quoteSymbol:String(t.quoteSymbol||`TOKEN`).trim().slice(0,16)||`TOKEN`,decimals:a,enabled:t.enabled!==!1,overlayAlert:t.overlayAlert===void 0||!!t.overlayAlert,overlayMinAmount:t.overlayMinAmount===null||t.overlayMinAmount===void 0||t.overlayMinAmount===``?null:Number.isFinite(i)&&i>=0?i:null,buzzRules:il(t.buzzRules),tokenTxBackup:t.tokenTxBackup===void 0||!!t.tokenTxBackup}}function wl(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r of e.slice(0,16)){let e=Cl(r);if(!e)continue;let i=e.address.toLowerCase();n.has(i)||(n.add(i),t.push(e))}return t}function Tl(e){return(e||[]).filter(e=>e.enabled!==!1&&U(e.address))}function El(e){if(e.token)return[e.token];let t=new Set,n=[];for(let e of yl){let r=e.toLowerCase();t.has(r)||(t.add(r),n.push(e))}return n}function Dl(e,t,n){let r=String(e||``).toLowerCase(),i=String(t||``).toLowerCase(),a=String(n||``).toLowerCase(),o=bl;if(!r||!i||r===i)return null;let s=r===o||r===a,c=i===o||i===a;return s&&!c?`in`:c&&!s?`out`:null}function Ol(e,t,n){return`${String(e).toLowerCase()}:${t}:${String(n).toLowerCase()}`}var kl=wl([{address:hl,label:`PulseChain OmniBridge`,direction:`both`,minAmount:`100`,quoteSymbol:`TOKEN`,decimals:18}]);function Al(e){let t=new Set(e.map(e=>e.address.toLowerCase())),n=[...e],r=0;for(let e of kl){let i=e.address.toLowerCase();t.has(i)||(t.add(i),n.push({...e,enabled:!1}),r++)}return{bridges:n,added:r}}var jl=`0x0000000000000000000000000000000000000000`;function Ml(e){if(typeof e!=`string`)return null;let t=e.trim();return!U(t)||t.toLowerCase()===jl?null:t}function Nl(e){let t=String(e||``).trim();if(!t||t.length>400)return null;try{let e=Dt(/^event\s/i.test(t)?t:`event ${t}`);return!e||e.type!==`event`?null:e}catch{return null}}function Pl(e){if(!e||typeof e!=`object`||Array.isArray(e))return null;let t=e,n=Ml(t.address);if(!n)return null;let r=String(t.eventAbi||t.signature||``).trim().slice(0,400);if(!Nl(r))return null;let i=Number(t.minAmount),a=Number(t.overlayMinAmount),o=Math.min(36,Math.max(0,Math.round(Number(t.decimals)||18)));return{id:String(t.id||``).trim().slice(0,48)||nl(`log`),address:n,label:String(t.label||`event`).trim().slice(0,48)||`event`,eventAbi:r,amountArg:String(t.amountArg||``).trim().slice(0,64),minAmount:Number.isFinite(i)&&i>=0?i:0,quoteSymbol:String(t.quoteSymbol||`TOKEN`).trim().slice(0,16)||`TOKEN`,decimals:o,enabled:t.enabled!==!1,overlayAlert:t.overlayAlert===void 0||!!t.overlayAlert,overlayMinAmount:t.overlayMinAmount===null||t.overlayMinAmount===void 0||t.overlayMinAmount===``?null:Number.isFinite(a)&&a>=0?a:null,buzzRules:il(t.buzzRules)}}function Fl(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r of e.slice(0,16)){let e=Pl(r);if(!e)continue;let i=`${e.address.toLowerCase()}:${e.eventAbi.toLowerCase()}`;n.has(i)||(n.add(i),t.push(e))}return t}function Il(e){return(e||[]).filter(e=>e.enabled!==!1&&U(e.address))}function Ll(e,t){if(!e)return null;let n=String(t||``).trim();if(!n)return 0n;let r=e[n],i=/^\d+$/.test(n)?e[n]:void 0,a=r===void 0?i:r;if(typeof a==`bigint`)return a;if(typeof a==`number`&&Number.isFinite(a)&&a>=0)return BigInt(Math.trunc(a));if(typeof a==`string`&&/^(0x)?[0-9a-f]+$/i.test(a.trim()))try{return BigInt(a)}catch{return null}return null}var Rl=Dt(`event Transfer(address indexed from, address indexed to, uint256 value)`),zl=Dt(`event Swap(address indexed sender, uint256 amount0In, uint256 amount1In, uint256 amount0Out, uint256 amount1Out, address indexed to)`),Bl=Dt(`event Mint(address indexed sender, uint amount0, uint amount1)`),Vl=Dt(`event Burn(address indexed sender, uint amount0, uint amount1, address indexed to)`),Hl=`0x0000000000000000000000000000000000000000`;function Ul(e){let t=e.map(e=>e.trim()).filter(Boolean);return t.length===0?Ic(void 0,{timeout:2e4,retryCount:2}):t.length===1?Ic(t[0],{timeout:2e4,retryCount:2}):kc(t.map(e=>Ic(e,{timeout:18e3,retryCount:1})),{rank:!1})}var Wl=class{client;options;timer=null;lastBlock=null;seen=new Set;stopped=!0;rpcCount;pools=[];bridges=[];chainLogs=[];tokenMeta=new Map;receipts=new Map;tipTokens=[];constructor(e){this.options=e;let t=(e.rpcUrls||[]).map(e=>e.trim()).filter(Boolean);t.length||(t=[...e.chain.rpcUrls.default.http||[]]),this.rpcCount=t.length||1,this.client=Dc({chain:e.chain,transport:Ul(t)}),this.pools=e.poolWatch?(e.pools||[]).filter(e=>U(e.address)&&e.enabled!==!1):[],this.bridges=e.poolWatch?(e.bridges||[]).filter(e=>U(e.address)&&e.enabled!==!1):[],this.chainLogs=e.poolWatch?(e.chainLogs||[]).filter(e=>U(e.address)&&e.enabled!==!1).map(e=>({...e,abiEvent:Nl(e.eventAbi)})).filter(e=>e.abiEvent):[],this.tipTokens=this.resolveTipTokens(e)}resolveTipTokens(e){let t=[],n=new Set,r=(e,r,i)=>{if(!e||!U(e))return;let a=e.toLowerCase();n.has(a)||(n.add(a),t.push({address:e,decimals:Number.isFinite(r)&&r>=0?Math.min(36,Math.round(r)):18,symbol:String(i||`TOKEN`).slice(0,16)||`TOKEN`}))};for(let t of e.watchedTokens||[])r(t.address,t.decimals,t.symbol);return r(e.tokenAddress,e.tokenDecimals,e.tokenSymbol),t}get isWatching(){return!this.stopped}async start(){let e=U(this.options.receiveAddress)&&this.options.receiveAddress.toLowerCase()!==Hl,t=this.pools.length>0||this.bridges.length>0||this.chainLogs.length>0;if(!e&&!t)throw Error(`Enter a receive wallet and/or enable chain-event watching with at least one pool, bridge, or custom event`);this.stopped=!1,this.seen.clear(),this.receipts.clear(),this.tokenMeta.clear();try{if(this.pools.length&&await this.hydratePools(),this.bridges.length&&await this.hydrateBridges(),this.chainLogs.length&&await this.hydrateChainLogs(),!e&&!this.pools.length&&!this.bridges.length&&!this.chainLogs.length)throw Error(`No verified PulseX pools, bridges, or custom events are enabled.`);this.lastBlock=await this.client.getBlockNumber(),this.emitStatus(),await this.tick()}catch(e){let t=e instanceof Error?e.message:String(e);throw this.options.onError(t),this.stopped=!0,this.emitStatus(),e instanceof Error?e:Error(t)}let n=this.options.pollMs??4e3;this.timer=setInterval(()=>{this.tick()},n)}stop(){this.stopped=!0,this.timer&&=(clearInterval(this.timer),null),this.emitStatus()}emitStatus(){this.options.onStatus({watching:!this.stopped,blockNumber:this.lastBlock,lastPollAt:Date.now(),rpcCount:this.rpcCount,poolWatch:!!this.options.poolWatch&&(this.pools.length>0||this.bridges.length>0||this.chainLogs.length>0),poolCount:this.pools.length})}async hydratePools(){let e=[],t=[],n=(this.options.trustedPoolFactories||[]).map(e=>e.toLowerCase());for(let r of this.pools)try{if(!n.length)throw Error(`No trusted pool factories`);let t=await this.client.getBytecode({address:r.address});if(!t||t===`0x`)throw Error(`Pair has no contract code`);let i=[{name:`factory`,type:`function`,stateMutability:`view`,inputs:[],outputs:[{type:`address`}]},{name:`token0`,type:`function`,stateMutability:`view`,inputs:[],outputs:[{type:`address`}]},{name:`token1`,type:`function`,stateMutability:`view`,inputs:[],outputs:[{type:`address`}]}],[a,o,s]=await Promise.all([this.client.readContract({address:r.address,abi:i,functionName:`factory`}),this.client.readContract({address:r.address,abi:i,functionName:`token0`}),this.client.readContract({address:r.address,abi:i,functionName:`token1`})]);if(!n.includes(a.toLowerCase()))throw Error(`Pair factory is not trusted`);if((await this.client.readContract({address:a,abi:[{name:`getPair`,type:`function`,stateMutability:`view`,inputs:[{name:`tokenA`,type:`address`},{name:`tokenB`,type:`address`}],outputs:[{type:`address`}]}],functionName:`getPair`,args:[o,s]})).toLowerCase()!==r.address.toLowerCase())throw Error(`Pair is not registered by its factory`);if(o.toLowerCase()!==r.quoteToken.toLowerCase()&&s.toLowerCase()!==r.quoteToken.toLowerCase())throw Error(`Configured quote token is not in the pair`);let c=r.decimals;try{let e=await this.client.readContract({address:r.quoteToken,abi:[{name:`decimals`,type:`function`,stateMutability:`view`,inputs:[],outputs:[{type:`uint8`}]}],functionName:`decimals`}),t=Number(e);Number.isFinite(t)&&t>=0&&t<=36&&(c=Math.round(t))}catch{}e.push({...r,token0:o,token1:s,decimals:c})}catch{t.push(r.label)}this.pools=e,t.length&&this.options.onError(`Skipped unverified pool${t.length===1?``:`s`}: ${t.join(`, `)}`)}async hydrateBridges(){let e=[],t=[];for(let n of this.bridges)try{let t=await this.client.getBytecode({address:n.address});if(!t||t===`0x`)throw Error(`Bridge has no contract code`);e.push(n)}catch{t.push(n.label)}this.bridges=e,t.length&&this.options.onError(`Skipped unverified bridge${t.length===1?``:`s`}: ${t.join(`, `)}`)}async hydrateChainLogs(){let e=[],t=[];for(let n of this.chainLogs)try{if(!n.abiEvent)throw Error(`Invalid event ABI`);let t=await this.client.getBytecode({address:n.address});if(!t||t===`0x`)throw Error(`Contract has no code`);e.push(n)}catch{t.push(n.label)}this.chainLogs=e,t.length&&this.options.onError(`Skipped unverified event${t.length===1?``:`s`}: ${t.join(`, `)}`)}erc20MetaAbi=[{name:`decimals`,type:`function`,stateMutability:`view`,inputs:[],outputs:[{type:`uint8`}]},{name:`symbol`,type:`function`,stateMutability:`view`,inputs:[],outputs:[{type:`string`}]}];async readTokenMeta(e,t){let n=e.toLowerCase(),r=this.tokenMeta.get(n);if(r)return r;let i=t.decimals,a=t.symbol;try{let t=await this.client.readContract({address:e,abi:this.erc20MetaAbi,functionName:`decimals`}),n=Number(t);Number.isFinite(n)&&n>=0&&n<=36&&(i=Math.round(n))}catch{}try{let t=await this.client.readContract({address:e,abi:this.erc20MetaAbi,functionName:`symbol`}),n=String(t||``).trim().slice(0,16);n&&(a=n)}catch{}let o={decimals:i,symbol:a};return this.tokenMeta.set(n,o),o}async tick(){if(!this.stopped)try{let e=await this.client.getBlockNumber();if(this.lastBlock===null){this.lastBlock=e,this.emitStatus();return}let t=e-BigInt(Math.max(0,this.options.confirmations??2)),n=this.lastBlock+1n,r=t-n>25n?this.lastBlock+25n:t;if(r<n){this.emitStatus();return}if(U(this.options.receiveAddress)&&this.options.receiveAddress.toLowerCase()!==Hl){for(let e=n;e<=r;e++)await this.scanBlock(e),this.lastBlock=e;this.tipTokens.length&&await this.scanTokenTransfers(n,r)}else this.lastBlock=r;(this.pools.length||this.bridges.length||this.chainLogs.length)&&await this.scanExtras(n,r),this.emitStatus()}catch(e){this.options.onError(e instanceof Error?e.message:String(e))}}async isSuccessfulTransaction(e){let t=this.receipts.get(e);return t||(t=this.client.getTransactionReceipt({hash:e}).then(e=>e.status===`success`).catch(()=>!1),this.receipts.set(e,t)),t}async scanBlock(e){let t=await this.client.getBlock({blockNumber:e,includeTransactions:!0}),n=this.options.receiveAddress.toLowerCase(),r=BigInt(Math.floor(this.options.minAmount*0xde0b6b3a7640000));for(let i of t.transactions){if(typeof i==`string`||!i.to||i.to.toLowerCase()!==n||i.from.toLowerCase()===n||i.value<r&&this.options.minAmount>0&&(i.value===0n||i.value<r)||i.value===0n)continue;let a=`${i.hash}:native`;if(this.seen.has(a)||!await this.isSuccessfulTransaction(i.hash))continue;let o=Number(Le(i.value));o<this.options.minAmount||(this.seen.add(a),this.options.onPayment({id:a,hash:i.hash,from:i.from,to:i.to,amount:o,amountRaw:i.value,symbol:this.options.nativeSymbol,token:null,blockNumber:e,timestamp:Number(t.timestamp)*1e3,source:`wallet`}))}}async scanTokenTransfers(e,t){if(!this.tipTokens.length)return;let n=this.options.receiveAddress;for(let r of this.tipTokens){let i=r.address,a=r.decimals,o=r.symbol,s;try{s=await this.client.getLogs({address:i,event:Rl,args:{to:n},fromBlock:e,toBlock:t})}catch{continue}for(let t of s){if(!t.args.value||!t.args.from||!t.transactionHash||t.args.from.toLowerCase()===n.toLowerCase())continue;let r=Number(us(t.args.value,a));if(r<this.options.minAmount)continue;let s=`${t.transactionHash}:erc20:${i.toLowerCase()}:${t.logIndex}`;this.seen.has(s)||await this.isSuccessfulTransaction(t.transactionHash)&&(this.seen.add(s),this.options.onPayment({id:s,hash:t.transactionHash,from:t.args.from,to:n,amount:r,amountRaw:t.args.value,symbol:o,token:i,blockNumber:t.blockNumber??e,timestamp:Date.now(),source:`wallet`}))}}}async scanExtras(e,t){let n=[],r=async(e,t,r)=>{if(this.seen.has(e)||!await this.isSuccessfulTransaction(t))return;let i=await r();this.seen.add(e),i&&n.push(i)};if(await this.collectPoolEvents(e,t,r),await this.collectBridgeEvents(e,t,r),await this.collectChainLogEvents(e,t,r),!n.length)return;n.sort((e,t)=>t.amount-e.amount);let i=Math.max(1,this.options.maxPoolEventsPerTick??6);for(let e of n.slice(0,i))this.options.onPayment(e)}async collectPoolEvents(e,t,n){for(let r of this.pools){if($c(r,`swap`)){let i=[];try{i=await this.client.getLogs({address:r.address,event:zl,fromBlock:e,toBlock:t})}catch{i=[]}for(let t of i){if(!t.transactionHash||t.logIndex==null)continue;let i=`${t.transactionHash}:pool:${r.address}:${t.logIndex}`,a=t.args,o=cl(r,a.amount0In!=null&&a.amount1In!=null&&a.amount0Out!=null&&a.amount1Out!=null?{amount0In:a.amount0In,amount1In:a.amount1In,amount0Out:a.amount0Out,amount1Out:a.amount1Out}:sl(t.data||`0x`));if(r.side===`buy`&&o.side!==`buy`||r.side===`sell`&&o.side!==`sell`||o.amountWei<=0n)continue;let s=Number(us(o.amountWei,r.decimals));!Number.isFinite(s)||s<(r.minAmount||0)||await n(i,t.transactionHash,()=>({id:i,hash:t.transactionHash,from:a.sender||Hl,to:a.to||r.address,amount:s,amountRaw:o.amountWei,symbol:o.quoteSymbol||r.quoteSymbol,token:r.quoteToken,blockNumber:t.blockNumber??e,timestamp:Date.now(),source:`pool`,poolLabel:r.label,poolAddress:r.address,poolSide:o.side,eventKind:`swap`}))}}for(let i of[`mint`,`burn`]){if(!$c(r,i))continue;let a=i===`mint`?Bl:Vl,o;try{o=await this.client.getLogs({address:r.address,event:a,fromBlock:e,toBlock:t})}catch{continue}for(let t of o){if(!t.transactionHash||t.logIndex==null)continue;let a=`${t.transactionHash}:${i}:${r.address}:${t.logIndex}`,o=t.args,s=ll(r,o.amount0??0n,o.amount1??0n);if(s.amountWei<=0n)continue;let c=Number(us(s.amountWei,r.decimals));if(!Number.isFinite(c)||c<(r.minAmount||0))continue;let l=i===`mint`?`add`:`remove`;await n(a,t.transactionHash,()=>({id:a,hash:t.transactionHash,from:o.sender||Hl,to:o.to||r.address,amount:c,amountRaw:s.amountWei,symbol:s.quoteSymbol||r.quoteSymbol,token:r.quoteToken,blockNumber:t.blockNumber??e,timestamp:Date.now(),source:`pool`,poolLabel:r.label,poolAddress:r.address,poolSide:l,eventKind:i}))}}}}async collectBridgeEvents(e,t,n){for(let r of this.bridges){let i=r.direction===`both`||r.direction===`in`,a=r.direction===`both`||r.direction===`out`,o=new Set,s=[];i&&s.push({event:gl,kind:`bridge-in`,side:`in`}),a&&s.push({event:_l,kind:`bridge-out`,side:`out`});for(let i of s){let a;try{a=await this.client.getLogs({address:r.address,event:i.event,fromBlock:e,toBlock:t})}catch{continue}for(let t of a){if(!t.transactionHash||t.logIndex==null)continue;let a=t.args,s=a.token;if(!s||r.token&&s.toLowerCase()!==r.token.toLowerCase())continue;let c=a.value??0n;if(c<=0n)continue;o.add(Ol(t.transactionHash,i.kind,s));let l=`${t.transactionHash}:${i.kind}:${r.address}:${t.logIndex}`;await n(l,t.transactionHash,async()=>{let n=await this.readTokenMeta(s,{decimals:r.decimals,symbol:r.quoteSymbol}),o=Number(us(c,n.decimals));if(!Number.isFinite(o)||o<(r.minAmount||0))return null;let u=i.kind===`bridge-in`?a.recipient||Hl:a.sender||Hl;return{id:l,hash:t.transactionHash,from:u,to:r.address,amount:o,amountRaw:c,symbol:n.symbol,token:s,blockNumber:t.blockNumber??e,timestamp:Date.now(),source:`pool`,poolLabel:r.label,poolAddress:r.address,poolSide:i.side,eventKind:i.kind,triggerId:r.id}})}}if(r.tokenTxBackup===!1)continue;let c=El(r);for(let s of c){let c;try{c=await this.client.getLogs({address:s,event:vl,fromBlock:e,toBlock:t})}catch{continue}for(let t of c){if(!t.transactionHash||t.logIndex==null)continue;let c=t.args,l=c.from||Hl,u=c.to||Hl,d=Dl(l,u,r.address);if(!d||d===`in`&&!i||d===`out`&&!a)continue;let f=c.value??0n;if(f<=0n)continue;let p=d===`in`?`bridge-in`:`bridge-out`;if(o.has(Ol(t.transactionHash,p,s)))continue;let m=`${t.transactionHash}:bridgetx:${p}:${s}:${t.logIndex}`;await n(m,t.transactionHash,async()=>{let n=await this.readTokenMeta(s,{decimals:r.decimals,symbol:r.quoteSymbol}),i=Number(us(f,n.decimals));return!Number.isFinite(i)||i<(r.minAmount||0)?null:(o.add(Ol(t.transactionHash,p,s)),{id:m,hash:t.transactionHash,from:l,to:u,amount:i,amountRaw:f,symbol:n.symbol,token:s,blockNumber:t.blockNumber??e,timestamp:Date.now(),source:`pool`,poolLabel:`${r.label} · token tx`,poolAddress:r.address,poolSide:d,eventKind:p,triggerId:r.id})})}}}}async collectChainLogEvents(e,t,n){for(let r of this.chainLogs){if(!r.abiEvent)continue;let i;try{i=await this.client.getLogs({address:r.address,event:r.abiEvent,fromBlock:e,toBlock:t})}catch{continue}for(let t of i){if(!t.transactionHash||t.logIndex==null)continue;let i=`${t.transactionHash}:log:${r.id}:${t.logIndex}`,a=t.args||{},o=Ll(a,r.amountArg);if(o==null)continue;let s=o===0n&&!r.amountArg?0:Number(us(o,r.decimals));if(!Number.isFinite(s)||s<(r.minAmount||0))continue;let c=a.from,l=a.to;await n(i,t.transactionHash,()=>({id:i,hash:t.transactionHash,from:typeof c==`string`&&U(c)?c:Hl,to:typeof l==`string`&&U(l)?l:r.address,amount:s,amountRaw:o,symbol:r.quoteSymbol,token:r.address,blockNumber:t.blockNumber??e,timestamp:Date.now(),source:`pool`,poolLabel:r.label,poolAddress:r.address,poolSide:`all`,eventKind:`custom`,triggerId:r.id}))}}}};function Gl(e,t,n,r){let i=BigInt(Math.round(t*0xde0b6b3a7640000)),a=`0x${Array.from({length:8},()=>Math.floor(Math.random()*4294967295).toString(16).padStart(8,`0`)).join(``)}`.slice(0,66),o=(n||``).trim()||`PLS`;return{id:`sim:${a}`,hash:a,from:`0x0000000000000000000000000000000000000001`,to:e,amount:t,amountRaw:i,symbol:o,token:null,blockNumber:0n,timestamp:Date.now(),source:`wallet`,...r?{force:r}:{}}}var Kl=[{id:`multi`,label:`multi`},{id:`rotate`,label:`rotate`},{id:`air`,label:`air`},{id:`thrust`,label:`thrust`}];function ql(e){let t=new Set,n=`${e.name||``} ${e.toyType||``} ${(e.functions||[]).join(` `)}`.toLowerCase();return Math.max(1,Number(e.motors)||1)>=2&&t.add(`multi`),/gemini|edge|dolce|lapis|magnet|clamp|twin|dual|n0104/.test(n)&&!/\bnora\b|\bmax\b|\bsolace\b/.test(n)&&t.add(`multi`),(e.secondary?.rotate||/rotate|\bnora\b/.test(n))&&t.add(`rotate`),(e.secondary?.air||e.secondary?.pump||/\bair\b|pump|suction|\bmax\b/.test(n))&&t.add(`air`),(e.secondary?.thrust||/thrust|\bsolace\b/.test(n))&&t.add(`thrust`),t}function Jl(e){let t=(e.functions||[]).map(e=>String(e).toLowerCase());if(t.some(e=>/vibrat|all/.test(e)))return!0;let n=`${e.name||``} ${e.toyType||``}`.toLowerCase();return/\bnora\b|\bmax\b|lush|edge|gemini|dolce|ferri|ambi|domi|hush|osci/.test(n)||!t.length||t.some(e=>/rotate|air|thrust|pump/.test(e)),!0}function Yl(e){let t=ql(e);return t.has(`thrust`)?`thrust`:t.has(`rotate`)?`rotate`:t.has(`air`)?`air`:t.has(`multi`)?`multi`:`vibe`}function Xl(e){let t=[];Jl(e)&&t.push(`vibe`);let n=ql(e);return n.has(`multi`)&&t.push(`multi`),n.has(`rotate`)&&t.push(`rotate`),n.has(`air`)&&t.push(`air`),n.has(`thrust`)&&t.push(`thrust`),t.length?t:[`vibe`]}function Zl(e){return e.includes(`thrust`)?`thrust`:e.includes(`rotate`)?`rotate`:e.includes(`air`)?`air`:e.includes(`multi`)?`multi`:`vibe`}function Ql(e){let t=tu(e.needs);if(t.includes(`thrust`)&&(t.includes(`multi`)||t.length>1)||t.includes(`rotate`)&&t.length>1||t.includes(`air`)&&t.length>1)return!0;let n=`${e.id||``} ${e.name||``} ${e.blurb||``} ${e.tag||``}`.toLowerCase();return!!/\bsync\b|\bcombo\b|simult|dual.?channel|vibe\s*[+&·/]\s*rotate|rotate\s*[+&·/]\s*vibe|vibe\s*[+&·/]\s*air|vibe\s*[+&·/]\s*thrust/.test(n)}function $l(e){switch(e){case`vibe`:return`vibe`;case`multi`:return`multi-motor`;case`rotate`:return`rotate`;case`air`:return`air`;case`thrust`:return`thrust`}}function eu(e){let t=ql(e),n=[];return Jl(e)&&n.push(`vibe`),t.has(`multi`)&&n.push(`multi`),t.has(`rotate`)&&n.push(`rotate`),t.has(`air`)&&n.push(`air`),t.has(`thrust`)&&n.push(`thrust`),n.length?n.join(` · `):$l(Yl(e))}function tu(e){if(!Array.isArray(e))return[];let t=[];for(let n of e)(n===`multi`||n===`rotate`||n===`air`||n===`thrust`)&&!t.includes(n)&&t.push(n);return t}function nu(e){if(e.needs?.length)return tu(e.needs);let t=`${e.id||``} ${e.name||``} ${e.blurb||``} ${e.tag||``}`.toLowerCase(),n=[];return/thrust|solace|stroke.?depth|linear/.test(t)&&n.push(`thrust`),/rotat|spin|nora|head.?nudge/.test(t)&&n.push(`rotate`),/\bair\b|suction|pump|\bmax\b/.test(t)&&n.push(`air`),/multi.?motor|dual.?motor|both motors|v1.?v2|two.?motor|\bedge\s*2\b|gemini|dolce/.test(t)&&n.push(`multi`),n}function ru(e){return String(e||``).trim().toLowerCase().replace(/\s+/g,``)}function iu(e,t){if(!t?.length)return!0;let n=new Set([e.id,e.toyType,e.name].map(e=>ru(e)).filter(Boolean)),r=`${e.id||``} ${e.toyType||``} ${e.name||``}`.toLowerCase();return t.some(e=>{let t=ru(e);return t?n.has(t)?!0:r.includes(t):!1})}function au(e,t,n){if(!iu(t,n))return!1;let r=ql(t),i=Zl(e);return i===`vibe`?Jl(t):e.length?e.every(e=>r.has(e)):i===`multi`?r.has(`multi`):i===`rotate`?r.has(`rotate`):i===`air`?r.has(`air`):i===`thrust`?r.has(`thrust`):Jl(t)}function ou(e,t,n){return t===null?!0:t.length?t.some(t=>au(e,t,n)):!1}function su(e){return Kl.find(t=>t.id===e)?.label||e}function cu(e){return Array.isArray(e.needs)?tu(e.needs):[]}var lu=new Set([`science`,`feature`]);function uu(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return Math.abs(t>>>0)}function du(e){let t=e||1;return()=>(t=Math.imul(1664525,t)+1013904223>>>0,t/4294967296)}function G(e){return Math.max(0,Math.min(8,Math.round(e)))}function fu(e){let t=e.map(G);return(!t.length||t[t.length-1]!==0)&&t.push(0),t}function pu(e,t){return e.map((e,n)=>e===0?0:G(e+((Math.imul(t+n*374761393,668265263)>>>0)%5-2)))}function mu(e){return JSON.stringify({s:e.strengths,m:e.motorStrengths,t:e.stepMotors,i:e.intervalMs})}function hu(e,t){return e===`multi`&&t?Ou:e===`rotate`?Eu:e===`thrust`||e===`air`?Du:Tu}function gu(e){return e<2e3?`cheap`:e<1e4?`mid`:e<25e3?`high`:`whale`}function _u(e,t){let n=G((e===`cheap`?4:e===`mid`?6:e===`high`?7:8)+t%5-2);return e===`cheap`?Math.min(n,5):n}function vu(e,t,n,r){return n+t%(r-n+1)+(e===`whale`?2:+(e===`high`))}function yu(e){return`${e.id} ${e.name} ${e.blurb}`.toLowerCase()}function bu(e,t){for(let[n,r]of t)if(n.test(e))return r;return null}var xu=[[/\bflash\b|\btick\b|\bspark\b|\bhello\b|\bcontact\b|\bshort blast\b/,`tick`],[/\bwink\b|\bdouble\b|\bpeeks\b|\blub.?dub\b|\bpaired\b|\btwo soft\b/,`doubleClick`],[/\bheartbeat\b|\bthrob\b|\blub\b|\bdub\b/,`heartbeat`],[/\bgod candle\b|\bramp\b|\bgenesis\b|\bcompounding\b|\bclimb\b|\bbreakout\b|\b100x\b/,`rampUp`],[/\bslow rug\b|\brug pull\b|\bfade\b|\bhalving\b|\bcapitulation\b|\bcollapse\b|\bdump\b/,`rampDown`],[/\bath\b|\bstaked\b|\bhold\b|\bplateau\b|\bnode\b|\bfull node\b|\bpos\b|\bproof of stake\b/,`plateau`],[/\bdca\b|\bpulse train\b|\bgreen candle\b|\bpulsechain\b|\bliq\b|\bcascade\b|\benigma\b/,`pulseTrain`],[/\bwave\b|\bripple\b|\broll\b|\bvibrafi\b|\bvibenomics\b|\bdecentralized\b/,`wave`],[/\bhum\b|\bnuzzle\b|\bkrause\b|\bsteady mid\b|\bswell\b|\barousal\b/,`hum`],[/\bfireworks\b|\bburst\b|\bwhale\b|\bblock reward\b|\bcluster\b|\bsupernova\b|\bflash loan\b/,`burstCluster`],[/\bfakeout\b|\bstop hunt\b|\bdead cat\b|\btease\b|\bdesist\b|\bwick\b/,`fakeout`],[/\bgas wars\b|\bbrrrr\b|\bhigh frequency\b|\bmachine.?gun\b|\bstrobe\b|\bdegen\b/,`strobe`],[/\bvolatility\b|\bchaos\b|\bslippage\b|\birregular\b|\bunpredictable\b|\bmax slip\b/,`chaos`],[/\blong\b|\bsuite\b|\bfull send\b|\bexit liq\b|\bwhale alert\b|\bbuild\b|\barc\b/,`longArc`],[/\bbounce\b|\belastic\b|\bpump.?&?\b/,`bounce`],[/\bflutter\b|\bon.?off\b|\btease &\b/,`teaseFlutter`],[/\bsqueeze\b|\bpop\b|\bcompress\b|\bvibe squeeze\b/,`burstCluster`],[/\bedge\b|\bpermissionless\b/,`plateau`]],Su=[[/\bnudge\b|\bsoft\b|\bquiet\b|\bzk\b/,`nudge`],[/\blap\b|\bcircle\b|\b360\b|\bblock\b|\bround trip\b|\bcircuit\b/,`lap`],[/\bpulse\b|\bon\/off\b|\bdeadlock\b|\bhung\b|\bspin then stop\b/,`pulseSpin`],[/\bsupercycle\b|\baccelerat\b|\bdeath spiral\b|\btornado\b|\bunlicensed\b/,`accelerate`],[/\bdecelerat\b|\bunwind\b|\bunravel\b/,`decelerate`],[/\bwobble\b|\bsector\b|\bshift\b|\bcorkscrew\b|\btwist\b/,`wobble`],[/\bperpetual\b|\bnever.?stop\b|\bimmutable\b|\blocked forever\b/,`holdSpin`],[/\bhigh turnover\b|\bquick\b|\brpm\b|\bredline\b/,`strobeSpin`],[/\bvortex\b|\bwhirl\b|\bstorm\b|\bdeposit\b/,`lap`]],Cu=[[/\bsoft\b|\bsteady\b|\bmaintain\b|\bstable\b|\bpeg algorithm\b/,`stroke`],[/\bstaccato\b|\bmint\b|\bpulse\b|\bpressure\b/,`pulseThrust`],[/\bclimb\b|\bpar\b|\brecovery\b|\bthrust to\b|\bda[iy] harder\b/,`climb`],[/\bclamp\b|\bpegged\b|\bhard peg\b|\bbacked\b|\bhold\b|\btethered\b/,`clamp`],[/\bemergency\b|\bdepeg\b|\bcrash\b|\bbust\b|\bdollar.?peg punch\b/,`emergency`],[/\bdesist\b|\bcease\b|\bfull stroke\b/,`staccato`]],wu=[[/\bl.?rug\b|\bleft rugs\b|\bsolo.*left\b/,`soloLeft`],[/\br.?rug\b|\bright rugs\b|\bsolo.*right\b/,`soloRight`],[/\barbitrage\b|\bcrossfade\b|\bbalance\b|\bdual liquidity\b|\bas one rises\b/,`counterPhase`],[/\bcall\b|\bresponse\b|\bvalidator\b|\bproposes\b|\bconfirms\b/,`callResponse`],[/\bstagger\b|\btwin peak\b|\byield\b|\bdouble yield\b/,`stagger`],[/\bchase\b|\bstereo ping\b|\bpulse pair\b|\balternate\b|\bl \/ r\b/,`chaseStereo`],[/\bhot.?cold\b|\bnipple\b|\bwarm hold\b|\bcold tap\b/,`hotCold`],[/\bscissor\b|\bcrossing\b|\bliquidity pair\b|\bphase.?offset\b|\borbit\b|\bhex\b/,`scissor`],[/\bshort squeeze\b|\bpressure\b|\bpop\b/,`mirrorPulse`],[/\bstaked\b|\bhold\b|\bassets\b/,`mirrorHold`],[/\bsprinkle\b|\bsoft\b|\bproof of tits\b/,`mirrorSoft`],[/\bclamp\b|\bpump\b|\bdesync\b|\bimbalance\b|\btwin pump\b/,`hotCold`],[/\becho\b|\bpair of assets\b|\bheartbeat\b/,`callResponse`],[/\bbuild\b|\bclimb\b/,`mirrorClimb`]],Tu=[`tick`,`doubleClick`,`rampUp`,`rampDown`,`plateau`,`pulseTrain`,`wave`,`hum`,`burstCluster`,`fakeout`,`strobe`,`chaos`,`longArc`,`heartbeat`,`bounce`,`teaseFlutter`],Eu=[`nudge`,`lap`,`pulseSpin`,`accelerate`,`decelerate`,`wobble`,`holdSpin`,`strobeSpin`],Du=[`stroke`,`staccato`,`climb`,`clamp`,`emergency`,`pulseThrust`],Ou=[`mirrorSoft`,`mirrorPulse`,`mirrorClimb`,`mirrorHold`,`counterPhase`,`callResponse`,`stagger`,`chaseStereo`,`hotCold`,`soloLeft`,`soloRight`,`scissor`];function ku(e,t){let n=yu(e);return t===`multi`&&e.motorStrengths?.length?bu(n,wu)??Ou[uu(e.id)%Ou.length]:t===`rotate`?bu(n,Su)??Eu[uu(e.id)%Eu.length]:t===`thrust`||t===`air`?bu(n,Cu)??Du[uu(e.id)%Du.length]:bu(n,xu)??Tu[uu(e.id)%Tu.length]}function Au(e,t,n){let r=du(t),i=_u(n,t),a=vu(n,t,4,10),o=[],s=280+Math.round(r()*180);switch(e){case`tick`:o=[0,G(i-1),G(i),0],s=220+t%80;break;case`doubleClick`:o=[0,G(i-1),0,0,i,0],s=260+t%60;break;case`rampUp`:{let e=a+2;for(let t=0;t<e;t++)o.push(G(t/(e-1)*i));s=300+t%100;break}case`rampDown`:for(let e=0;e<a;e++)o.push(G(i-e/(a-1)*i));s=380+t%120;break;case`plateau`:{let e=Math.max(2,Math.floor(a/3));for(let t=0;t<e;t++)o.push(G(2+t/e*(i-2)));for(let t=0;t<Math.max(2,a-e-1);t++)o.push(i);o.push(G(i-2),1),s=400+t%80;break}case`pulseTrain`:{let e=4+t%4;for(let t=0;t<e;t++)o.push(0,G(i-t%2));s=280+t%140;break}case`wave`:{let e=a+4;for(let t=0;t<e;t++){let n=t/(e-1)*Math.PI*2;o.push(G(2+(Math.sin(n)+1)/2*(i-2)))}s=320+t%100;break}case`hum`:{let e=a+2;for(let t=0;t<e;t++){let n=t/(e-1),r=Math.exp(-(((n-.5)*3)**2));o.push(G(2+r*(i-2)))}s=450+t%150;break}case`burstCluster`:{let e=2+t%2;for(let t=0;t<e;t++)o.push(0,G(i-1),i,G(i-2),0,0);s=240+t%80;break}case`fakeout`:o=[G(i-2),G(i-1),1,0,G(i-1),i,G(i-2)],s=320+t%80;break;case`strobe`:{let e=6+t%4;for(let t=0;t<e;t++)o.push(0,G(i-t%2));s=180+t%50;break}case`chaos`:for(let e=0;e<a+3;e++)o.push(G(1+r()*i));s=260+t%80;break;case`longArc`:{let e=a+6;for(let t=0;t<e;t++){let n=t/(e-1),r=n<.7?n/.7:1-(n-.7)/.3;o.push(G(1+r*(i-1)))}s=350+t%100;break}case`heartbeat`:{let e=2+t%3;for(let t=0;t<e;t++){let e=G(i-1-t%2),n=G(i-2-t%2);o.push(e,G(i-3),0,0,n,G(i-2),0,0)}s=260+t%40;break}case`bounce`:for(let e=0;e<a;e++)o.push(G(2+(e%2+.5)*(i-3)));s=300+t%60;break;case`teaseFlutter`:for(let e=0;e<a+2;e++)o.push(e%2==0?0:G(i-e%3));s=300+t%70}return{strengths:fu(o),intervalMs:Math.max(120,s)}}function ju(e,t,n){let r=_u(n,t),i=vu(n,t,4,8),a=[],o=1500+t%400;switch(e){case`nudge`:a=Array.from({length:i},(e,t)=>G(2+t%2)),o=1600+t%200;break;case`lap`:for(let e=0;e<i;e++){let t=e/(i-1);a.push(G(2+Math.sin(t*Math.PI)*(r-2)))}o=1700+t%300;break;case`pulseSpin`:for(let e=0;e<i+2;e++)a.push(e%2==0?0:r),e%2==1&&a.push(0,0);o=1400+t%200;break;case`accelerate`:for(let e=0;e<i;e++)a.push(G(1+e/(i-1)*r));o=1400+t%250;break;case`decelerate`:for(let e=0;e<i;e++)a.push(G(r-e/(i-1)*(r-1)));o=1500+t%250;break;case`wobble`:for(let e=0;e<i+2;e++)a.push(G(r-2+e%3));o=1550+t%200;break;case`holdSpin`:a=Array.from({length:i},()=>G(r-t%2)),o=1600+t%200;break;case`strobeSpin`:for(let e=0;e<i+1;e++)a.push(0,r);o=1400+t%150}return{strengths:fu(a),intervalMs:Math.max(1400,o)}}function Mu(e,t,n){let r=_u(n,t),i=vu(n,t,4,8),a=[],o=1500+t%350;switch(e){case`stroke`:a=Array.from({length:i},(e,t)=>G(3+t%2)),o=1700+t%200;break;case`staccato`:for(let e=0;e<i;e++)a.push(0,r);o=1400+t%200;break;case`climb`:for(let e=0;e<i;e++)a.push(G(1+e/(i-1)*r));o=1800+t%200;break;case`clamp`:a=[r,r,r,G(r-3),G(r-5)],o=1500+t%300;break;case`emergency`:a=[r,0,0,r,r,G(r-2)],o=1400+t%200;break;case`pulseThrust`:for(let e=0;e<i+1;e++)a.push(0,G(r-e%2));o=1500+t%200}return{strengths:fu(a),intervalMs:Math.max(1400,o)}}function Nu(e,t,n){let r=_u(n,t),i=vu(n,t,5,9),a=Au(`wave`,t+1,n),o=[],s=[],c=a.intervalMs;switch(e){case`mirrorSoft`:o=Array.from({length:i},(e,t)=>G(2+t%3)),s=[...o],c=350+t%80;break;case`mirrorPulse`:for(let e=0;e<i;e++)o.push(e%2==0?0:r),s.push(o[o.length-1]);c=300+t%80;break;case`mirrorClimb`:for(let e=0;e<i;e++){let t=G(1+e/(i-1)*r);o.push(t),s.push(t)}c=360+t%80;break;case`mirrorHold`:o=Array.from({length:i},()=>G(r-t%2)),s=[...o],c=450+t%100;break;case`counterPhase`:for(let e=0;e<i;e++){let t=e/(i-1);o.push(G(1+t*r)),s.push(G(1+(1-t)*r))}c=380+t%80;break;case`callResponse`:o=[r,0,0,0,G(r-1),0,0],s=[0,0,G(r-2),0,0,0,G(r-1)],c=320+t%60;break;case`stagger`:o=[2,5,r,5,2,0,0,0],s=[0,0,0,2,5,r,5,0],c=340+t%60;break;case`chaseStereo`:for(let e=0;e<i;e++)o.push(e%2==0?r:0),s.push(e%2==0?0:G(r-1));c=300+t%60;break;case`hotCold`:o=Array.from({length:i},()=>G(r-2));for(let e=0;e<i;e++)s.push(e%2==0?0:r);c=330+t%70;break;case`soloLeft`:for(let e=0;e<i;e++)o.push(G(2+e%4)),s.push(0);c=320+t%60;break;case`soloRight`:for(let e=0;e<i;e++)o.push(0),s.push(G(2+e%4));c=320+t%60;break;case`scissor`:for(let e=0;e<i+1;e++){let t=e/i;o.push(G(1+t*r)),s.push(G(1+(1-t)*r))}c=350+t%80}o=fu(o),s=fu(s);let l=Math.max(o.length,s.length);for(;o.length<l;)o.push(0);for(;s.length<l;)s.push(0);return{strengths:o.map((e,t)=>Math.max(e,s[t])),intervalMs:c,motorStrengths:[o,s]}}function Pu(e,t){let n=_u(t,e),r=6+e%3,i=[],a=[];for(let e=0;e<r;e++)i.push(e%2==0?0:n),a.push(e%2==0?0:e%4==1?1:2);return{strengths:fu(pu(i,e)),intervalMs:Math.max(1400,1500+e%200),stepMotors:a}}function Fu(e,t,n,r=0){let i=uu(e.id)+r*2654435761,a=gu(e.price),o;if(e.stepMotors?.some(e=>e===1||e===2))o=Pu(i,a);else if(t===`multi`&&(e.motorStrengths?.length||e.needs?.includes(`multi`))){if(e.motorStrengths?.length)o=Nu(n,i,a);else{let e=Au(n,i,a),t=e.strengths.length;o={...e,stepMotors:Array.from({length:t},(e,t)=>t%2==0?1:2)}}}else o=t===`rotate`?ju(n,i,a):t===`thrust`||t===`air`?Mu(n,i,a):Au(n,i,a);return o={...o,strengths:fu(pu(o.strengths,i)),motorStrengths:o.motorStrengths?.map(e=>fu(pu(e,i+e.length)))},o}var Iu=[`crypto-`,`rh-`,`gg-`,`storm-`,`spin-`,`peg-`,`gemini-`,`vibe-`];function Lu(e){if(e.kind===`preset`||lu.has(e.tag||``))return!0;let t=e.id||``;return!Iu.some(e=>t.startsWith(e))}function Ru(e){let t=new Set,n=new Map,r=[...e.map(e=>({p:e})).filter(({p:e})=>!Lu(e))].sort((e,t)=>{let n=Zl(cu(e.p)),r=Zl(cu(t.p));return n.localeCompare(r)||e.p.id.localeCompare(t.p.id)}),i=new Map;r.forEach(({p:e},t)=>i.set(e.id,t));for(let{p:e}of r){let r=Zl(cu(e)),a=hu(r,!!e.motorStrengths?.length),o=i.get(e.id)??0,s=ku(e,r),c=Fu(e,r,s,o),l=mu(c),u=0;for(;t.has(l)&&u<a.length*4;)u++,s=a[(a.indexOf(s)+1)%a.length],c=Fu(e,r,s,o+u*997),l=mu(c);t.add(l);let d=Math.max(1,Math.round(c.strengths.length*c.intervalMs/1e3)),f={...e,strengths:c.strengths,intervalMs:c.intervalMs,timeSec:d};c.stepMotors?f.stepMotors=c.stepMotors:delete f.stepMotors,c.motorStrengths?f.motorStrengths=c.motorStrengths:delete f.motorStrengths,n.set(e.id,f)}return e.map(e=>n.get(e.id)??e)}function zu(e,t){let n=Math.max(0,Math.min(32,Math.round(t)||0));if(!n||!Array.isArray(e))return;let r=[];for(let t=0;t<n;t++){let n=Math.round(Number(e[t])||0);n===1||n===2||n===3?r.push(n):r.push(0)}if(!r.every(e=>e===0))return r}function Bu(e,t){let n=Math.max(0,Math.min(32,Math.round(t)||0));if(!n||!Array.isArray(e))return;let r=[];for(let t of e.slice(0,3)){if(!Array.isArray(t))continue;let e=[];for(let r=0;r<n;r++)e.push(Math.max(0,Math.min(8,Math.round(Number(t[r])||0))));r.push(e)}if(!(r.length<2)&&!r.every(e=>e.every(e=>e===0)))return r}function Vu(e,t){let n=Math.max(1,Math.min(3,Math.round(Number(t)||1))),r=(e.strengths||[]).map(e=>Number(e)||0);if(!r.length){let t=Math.max(1,Math.min(8,Number(e.intensity)||4));r=[0,t,t,0]}if(n<=1)return[r];let i=e.motorStrengths;if(i?.length)return Array.from({length:n},(e,t)=>{let n=i[t]||i[i.length-1]||r;return r.map((e,t)=>Math.max(0,Math.min(8,Math.round(Number(n[t])||0))))});let a=e.stepMotors||[];return Array.from({length:n},(e,t)=>r.map((e,n)=>{let r=Math.round(Number(a[n])||0);return r===0||r===t+1?e:0}))}function Hu(e){let t=Math.round(Number(e)||0);if(t===1)return[1];if(t===2)return[2];if(t===3)return[3]}function Uu(...e){let t=null;for(let n of e){if(!n||!n.length)continue;let e=[...new Set(n.map(e=>Math.round(Number(e))).filter(e=>e>=1&&e<=3))].sort();if(!e.length)continue;if(t==null){t=e;continue}let r=new Set(e);if(t=t.filter(e=>r.has(e)),!t.length)return[]}return t??void 0}var Wu=[{id:`sci-wink`,name:`Soft contact`,blurb:`science · lowest threshold hello`,price:500,tag:`science`,kind:`pulse`,timeSec:2,intervalMs:500,strengths:[0,2,3,2,0],intensity:3},{id:`sci-krause`,name:`Krause band`,blurb:`science · steady mid hold (40–80 Hz class)`,price:1500,tag:`science`,kind:`pattern`,timeSec:6,intervalMs:500,strengths:[4,4,5,5,4,5,4,4,5,0]},{id:`sci-clinical`,name:`Clinical 10 / 5`,blurb:`science · ~10s on · ~5s off (FSAD-style duty)`,price:3e3,tag:`science`,kind:`pattern`,timeSec:12,intervalMs:1e3,strengths:[5,5,5,5,5,5,5,0,0,0,0]},{id:`sci-heartbeat`,name:`Lub-dub`,blurb:`science · paired peaks · full rests`,price:5e3,tag:`science`,kind:`pattern`,timeSec:6,intervalMs:280,strengths:[5,2,0,0,6,3,0,0,5,2,0,0,6,3,0]},{id:`sci-swell`,name:`Arousal swell`,blurb:`science · slow rise · soft fade (build time)`,price:1e4,tag:`science`,kind:`pattern`,timeSec:8,intervalMs:450,strengths:[1,2,3,3,4,4,5,5,6,5,4,3,2,1,0]},{id:`sci-edge`,name:`Edge & hold`,blurb:`science · climb · plateau · drop`,price:2e4,tag:`science`,kind:`pattern`,timeSec:7,intervalMs:450,strengths:[2,3,4,5,6,6,6,5,3,1,0]},{id:`sci-wave`,name:`Natural wave`,blurb:`science · low-band roll like tissue contact`,price:35e3,tag:`science`,kind:`pattern`,timeSec:7,intervalMs:400,strengths:[2,3,5,6,5,3,2,3,5,6,4,2,0]},{id:`sci-build`,name:`Long build`,blurb:`science · minute-scale arousal arc (bigger swaps)`,price:75e3,tag:`science`,kind:`pattern`,timeSec:12,intervalMs:600,strengths:[2,2,3,3,4,4,5,5,5,6,6,5,4,3,2,0]},{id:`sci-release`,name:`Peak release`,blurb:`science · short peak · quiet recovery`,price:125e3,tag:`science`,kind:`pattern`,timeSec:8,intervalMs:350,strengths:[3,4,5,6,7,7,5,2,0,0,3,0,0]},{id:`sci-suite`,name:`Response suite`,blurb:`science · full arc: contact → duty → swell → edge`,price:25e4,tag:`science`,kind:`pattern`,timeSec:12,intervalMs:400,strengths:[3,4,4,0,0,5,5,5,0,0,2,3,4,5,6,6,5,3,1,0]},{id:`spark`,name:`Spark`,blurb:`quick hello · soft tickle`,price:50,tag:`light`,kind:`pulse`,timeSec:1.5,intervalMs:375,strengths:[0,3,3,0],intensity:3},{id:`wink`,name:`Wink`,blurb:`two soft peeks`,price:75,tag:`light`,kind:`pattern`,timeSec:2.5,intervalMs:300,strengths:[0,3,0,0,4,0]},{id:`kiss`,name:`Kiss`,blurb:`slow warm crest`,price:100,tag:`light`,kind:`pattern`,timeSec:3,intervalMs:500,strengths:[2,3,4,3,2,0]},{id:`ripple`,name:`Ripple`,blurb:`tiny waves · calm`,price:150,tag:`light`,kind:`pattern`,timeSec:4,intervalMs:400,strengths:[1,2,3,2,1,2,3,2,1,0]},{id:`nuzzle`,name:`Nuzzle`,blurb:`long low hum`,price:200,tag:`light`,kind:`pattern`,timeSec:4,intervalMs:600,strengths:[2,3,3,4,3,3,2,0]},{id:`tease`,name:`Tease`,blurb:`on–off flutter`,price:250,tag:`medium`,kind:`pattern`,timeSec:4,intervalMs:350,strengths:[0,4,0,5,0,4,0,5]},{id:`heartbeat`,name:`Heartbeat`,blurb:`lub-dub · lub-dub`,price:350,tag:`medium`,kind:`pattern`,timeSec:5,intervalMs:280,strengths:[5,2,0,0,6,3,0,0,5,2,0,0]},{id:`wave`,name:`Wave`,blurb:`Lovense preset · smooth roll`,price:500,tag:`medium`,kind:`preset`,timeSec:5,intervalMs:280,strengths:[1,3,5,7,6,4,2,1,3,5,7,5,3,2],preset:`wave`},{id:`bounce`,name:`Bounce`,blurb:`elastic peaks`,price:600,tag:`medium`,kind:`pattern`,timeSec:5,intervalMs:320,strengths:[2,5,3,6,2,5,3,7,2,0]},{id:`pulse`,name:`Pulse train`,blurb:`Lovense preset · steady thump`,price:750,tag:`medium`,kind:`preset`,timeSec:5,intervalMs:280,strengths:[0,6,0,6,0,7,0,6,0,7,0,6],preset:`pulse`},{id:`swell`,name:`Swell`,blurb:`slow rise · soft fade`,price:900,tag:`medium`,kind:`pattern`,timeSec:6,intervalMs:450,strengths:[1,2,3,4,5,6,5,4,3,2,1,0]},{id:`edge`,name:`Edge`,blurb:`climb · hold · drop`,price:1e3,tag:`hot`,kind:`pattern`,timeSec:5,intervalMs:450,strengths:[2,3,4,5,6,6,4,2,0]},{id:`ladder`,name:`Ladder`,blurb:`step up each bar`,price:1500,tag:`hot`,kind:`pattern`,timeSec:5,intervalMs:400,strengths:[2,3,4,5,6,7,8,4,0]},{id:`sawtooth`,name:`Sawtooth`,blurb:`sharp ramps · drop`,price:2e3,tag:`hot`,kind:`pattern`,timeSec:5,intervalMs:250,strengths:[2,4,6,8,0,3,5,7,0,4,6,8,0]},{id:`fireworks`,name:`Fireworks`,blurb:`Lovense preset · bursts`,price:2500,tag:`hot`,kind:`preset`,timeSec:6,intervalMs:280,strengths:[2,8,1,0,4,8,2,0,3,8,0,5,8,0],preset:`fireworks`},{id:`double-tap`,name:`Double tap`,blurb:`pairs of hard hits`,price:3e3,tag:`hot`,kind:`pattern`,timeSec:5,intervalMs:220,strengths:[7,7,0,0,8,8,0,0,6,6,0,0,8,7,0]},{id:`siren`,name:`Siren`,blurb:`up-down sweep loop`,price:4e3,tag:`hot`,kind:`pattern`,timeSec:6,intervalMs:300,strengths:[3,5,7,8,6,4,2,4,6,8,7,5,3,0]},{id:`strobe`,name:`Strobe`,blurb:`fast beats · high energy`,price:5e3,tag:`wild`,kind:`pattern`,timeSec:5,intervalMs:200,strengths:[6,0,7,0,6,0,8,0,6,0,7,0]},{id:`chaos`,name:`Chaos`,blurb:`irregular hits · no groove`,price:6500,tag:`wild`,kind:`pattern`,timeSec:6,intervalMs:240,strengths:[5,0,8,2,0,7,0,0,6,8,1,0,7,0,8,0]},{id:`quake`,name:`Quake`,blurb:`deep rumbles · heavy`,price:8e3,tag:`wild`,kind:`pattern`,timeSec:6,intervalMs:350,strengths:[5,6,7,8,7,8,6,8,7,5,0]},{id:`earthquake`,name:`Earthquake`,blurb:`Lovense preset · max roll`,price:1e4,tag:`wild`,kind:`preset`,timeSec:7,intervalMs:280,strengths:[4,7,8,6,8,7,8,5,8,7,6,8,5],preset:`earthquake`},{id:`machine`,name:`Machine`,blurb:`industrial thrum`,price:15e3,tag:`wild`,kind:`pattern`,timeSec:6,intervalMs:180,strengths:[4,5,4,6,4,5,4,7,4,5,4,6,4,8,0]},{id:`tornado`,name:`Tornado`,blurb:`spin up · hold · unravel`,price:25e3,tag:`wild`,kind:`pattern`,timeSec:7,intervalMs:280,strengths:[2,3,4,5,6,7,8,8,8,7,6,4,2,0]},{id:`whale`,name:`Whale tip`,blurb:`full show · climb + bursts`,price:5e4,tag:`legend`,kind:`pattern`,timeSec:8,intervalMs:400,strengths:[3,5,7,8,6,8,4,8,6,3,0]},{id:`meteor`,name:`Meteor`,blurb:`long approach · impact`,price:75e3,tag:`legend`,kind:`pattern`,timeSec:8,intervalMs:350,strengths:[1,2,3,4,5,6,7,8,8,8,4,0,8,0]},{id:`supernova`,name:`Supernova`,blurb:`build · explode · aftershocks`,price:1e5,tag:`legend`,kind:`pattern`,timeSec:9,intervalMs:300,strengths:[2,3,4,5,6,7,8,0,8,0,8,6,4,8,0,0]},{id:`oceanking`,name:`Ocean King`,blurb:`max suite · waves + strobe finish`,price:25e4,tag:`legend`,kind:`pattern`,timeSec:10,intervalMs:250,strengths:[3,5,7,6,8,5,7,8,4,0,7,0,8,0,7,0,8,8,6,0]}];function Gu(e,t,n,r,i,a=400){return{id:e,name:t,blurb:n,price:r,tag:`gemini`,kind:`pattern`,timeSec:Math.max(1,Math.round(i.length*a/1e3)),intervalMs:a,strengths:i,needs:[`multi`],forProducts:[`gemini`]}}var Ku=[Gu(`gemini-titty-sprinkles`,`Titty Sprinkles`,`soft sparkles · shared rhythm`,1500,[2,3,2,4,1,0],350),Gu(`gemini-proof-of-tits`,`Proof of Tits`,`verified pulses · rise then settle`,2500,[2,4,6,4,2,0]),Gu(`gemini-double-staked`,`Double Staked`,`two steady holds · shared motor sync`,3500,[5,5,0,6,6,0]),Gu(`gemini-short-squeeze`,`Short Squeeze`,`quick pressure · sudden release`,12e3,[3,6,8,8,4,0],300),Gu(`gemini-staked-assets`,`Staked Assets`,`slow lock-in hold`,2e4,[4,6,7,7,7,3,0],500)];function qu(e,t,n,r,i,a,o=400){let s=Math.max(i.length,a.length),c=Array.from({length:s},(e,t)=>Math.max(0,Math.min(8,Math.round(Number(i[t])||0)))),l=Array.from({length:s},(e,t)=>Math.max(0,Math.min(8,Math.round(Number(a[t])||0)))),u=c.map((e,t)=>Math.max(e,l[t]));return{id:e,name:t,blurb:n,price:r,tag:`gemini`,kind:`pattern`,timeSec:Math.max(1,Math.round(s*o/1e3)),intervalMs:o,strengths:u,motorStrengths:[c,l],needs:[`multi`],forProducts:[`gemini`]}}var Ju=[qu(`gemini-crossfade`,`Titty Arbitrage`,`multi · two peaks · take the spread across M1/M2`,4500,[8,6,4,2,0,0],[0,0,2,4,6,8],400),qu(`gemini-call-response`,`Twin Validators`,`multi · M1 proposes · M2 confirms`,5500,[7,0,0,0,7,0,0],[0,0,5,0,0,0,6],320),qu(`gemini-lead-follow`,`HEXy Twins`,`multi · M2 trails M1 by one hex beat`,6500,[2,4,6,8,6,4,0],[0,2,4,6,8,6,4],360),qu(`gemini-hot-cold`,`Nipple Nodes`,`multi · M1 warm hold · M2 cold taps`,7500,[5,5,5,5,5,5,0],[0,7,0,7,0,8,0],340),qu(`gemini-scissor`,`Liquidity Pair`,`multi · crossing pool pressure`,8500,[1,3,5,7,5,3,1,0],[7,5,3,1,3,5,7,0],350),qu(`gemini-stereo-ping`,`Pulse Pair`,`multi · left pulse · right pulse`,9500,[8,0,6,0,8,0],[0,7,0,5,0,8],300),qu(`gemini-orbit`,`Double HEX`,`multi · phase-offset hex waves`,11e3,[2,4,6,8,6,4,2,0],[6,4,2,0,2,4,6,8],380),qu(`gemini-balance-trade`,`Dual Liquidity`,`multi · as one rises the other falls`,13e3,[8,7,5,3,1,0],[0,1,3,5,7,8],400),qu(`gemini-heartbeat-echo`,`Pair of Assets`,`multi · M1 lub-dub · M2 soft echo`,15e3,[0,7,3,0,7,3,0],[0,0,0,4,0,0,3],320),qu(`gemini-twin-peaks`,`Double Yield`,`multi · staggered twin climaxes`,17e3,[2,5,8,5,2,0,0,0],[0,0,0,2,5,8,5,0],360),qu(`gemini-desync`,`Twin Pumps`,`multi · desynced pump cadence`,19e3,[6,6,0,6,6,0,6,0],[0,4,4,0,4,4,0,4],300),qu(`gemini-clamp-release`,`Pump & Clamp`,`multi · M1 clamps · M2 flutters`,21e3,[8,8,8,3,8,8,0],[2,5,2,6,2,5,0],340),qu(`gemini-liquidity-imbalance`,`Two Nodes One Chain`,`multi · uneven node pressure`,24e3,[3,6,8,6,3,0],[7,4,1,4,7,0],380),qu(`gemini-l-solo`,`L/Rug Pull`,`multi · left rugs · right silent`,8e3,[0,5,7,5,0,6,0],[0,0,0,0,0,0,0],320),qu(`gemini-r-solo`,`R/Rug Pull`,`multi · right rugs · left silent`,8e3,[0,0,0,0,0,0,0],[0,5,7,5,0,6,0],320)];function Yu(e,t,n,r,i,a=1600){return{id:e,name:t,blurb:n,price:r,tag:`peg`,kind:`pattern`,timeSec:Math.max(1,Math.round(i.length*a/1e3)),intervalMs:Math.max(1400,a),strengths:i,needs:[`thrust`]}}var Xu=[Yu(`peg-hard`,`Hard Peg`,`thrust · locked deep stroke`,3e3,[5,7,8,7,5,0]),Yu(`peg-pegged-hard`,`Pegged Hard`,`thrust · firm hold then release`,4500,[7,8,8,4,0]),Yu(`peg-maintain`,`Maintain the Peg`,`thrust · steady mid stroke`,5500,[4,5,5,4,0],1800),Yu(`peg-dont-depeg`,`Don’t Depeg`,`thrust · refuse the drop`,6500,[6,7,8,8,7,0]),Yu(`peg-recovery`,`Peg Recovery`,`thrust · climb back to par`,7500,[2,4,6,8,0],1800),Yu(`peg-pressure`,`Peg Pressure`,`thrust · rising pressure pulses`,8500,[0,6,0,7,0,8,0],1500),Yu(`peg-backed-hard`,`Backed Hard`,`thrust · collateral max hold`,1e4,[8,8,8,5,0]),Yu(`peg-fully-backed`,`Fully Backed`,`thrust · full-depth reserve stroke`,12e3,[5,7,8,8,6,0],1700),Yu(`peg-mint-thrust`,`Mint & Thrust`,`thrust · mint pulse then drive`,14e3,[0,8,0,7,0,8,0],1500),Yu(`peg-stable-thrust`,`Stable Thrust`,`thrust · even stable cadence`,16e3,[4,6,4,6,4,0]),Yu(`peg-pegorithm`,`Pegorithm`,`thrust · algorithmic rhythm`,18e3,[2,5,2,7,2,8,0],1500),Yu(`peg-tethered-tight`,`Tethered Tight`,`thrust · short deep clamps`,2e4,[7,7,3,7,7,0],1500),Yu(`peg-dai-harder`,`DAI Harder`,`thrust · harder each beat`,22500,[3,5,7,8,8,0],1700),Yu(`peg-one-buck-fuck`,`One Buck Peg`,`thrust · dollar-peg punch`,25e3,[0,8,8,0,8,0],1500),Yu(`peg-thrust-to-par`,`Thrust to Par`,`thrust · climb until $1`,27500,[1,3,5,7,8,0],1800),Yu(`peg-emergency-repeg`,`Emergency Repeg`,`thrust · crash · snap back`,3e4,[8,0,0,8,8,0],1500),Yu(`peg-proof-of-peg`,`Proof of Peg`,`thrust · verified hold at par`,32500,[5,5,8,8,5,0]),Yu(`peg-proof-of-backing`,`Proof of Backing`,`thrust · reserves on display`,35e3,[4,6,8,6,8,0],1700),Yu(`peg-one-or-bust`,`$1 or Bust`,`thrust · all-in to one dollar`,4e4,[2,4,6,8,8,8,0],1600),Yu(`peg-federal-pegserve`,`Federal Pegserve`,`thrust · central bank stroke`,45e3,[3,5,7,7,5,3,0],1800)];function Zu(e,t,n,r,i,a=400){return{id:e,name:t,blurb:n,price:r,tag:`vibe`,kind:`pattern`,timeSec:Math.max(1,Math.round(i.length*a/1e3)),intervalMs:a,strengths:i,needs:[]}}var Qu=[Zu(`vibe-proof-of-vibe`,`Proof of Vibe`,`verified soft-to-firm pulses`,2e3,[2,4,5,4,2,0]),Zu(`vibe-high-frequency`,`High Frequency`,`fast ticks · trading cadence`,3500,[0,5,0,5,0,6,0,6,0],220),Zu(`vibe-volatility-spike`,`Volatility Spike`,`calm · sudden spike · settle`,5e3,[2,2,8,2,0],350),Zu(`vibe-staked-vibes`,`Staked Vibes`,`locked mid hold · yield drip`,6500,[3,5,6,5,4,2,0],450),Zu(`vibe-genesis-vibe`,`Genesis Vibe`,`first block · warm climb`,8e3,[1,2,4,6,7,0]),Zu(`vibe-vibrafi`,`VibraFi`,`yield farm rhythm`,1e4,[3,5,3,6,3,7,0],360),Zu(`vibe-vibrax`,`VibraX`,`cross-chain buzz swap`,12e3,[0,6,4,0,7,5,0],320),Zu(`vibe-pump-and-buzz`,`Pump & Buzz`,`pump then buzz dump`,14e3,[2,5,8,0,6,0],300),Zu(`vibe-vibe-squeeze`,`Vibe Squeeze`,`compress · pop · release`,16e3,[3,6,8,8,2,0],300),Zu(`vibe-vibenomics`,`Vibenomics`,`compounding little waves`,18e3,[2,3,5,4,6,5,7,6,0],380),Zu(`vibe-decentralized-vibes`,`Decentralized Vibes`,`many soft nodes · one wave`,22e3,[3,4,3,5,3,4,0]),Zu(`vibe-permissionless`,`Permissionless Vibration`,`open access · hard finish`,26e3,[3,5,7,8,6,8,4,0],350)];function K(e,t,n,r,i,a=400){return{id:e,name:t,blurb:n,price:r,tag:`crypto`,kind:`pattern`,timeSec:Math.max(1,Math.round(i.length*a/1e3)),intervalMs:a,strengths:i,needs:[]}}var $u=[K(`crypto-god-candle`,`God Candle`,`sudden huge ramp to max`,3e3,[1,2,4,8,8,0],300),K(`crypto-green-dildo`,`Green Candle`,`tall repeated green spikes`,4e3,[0,8,0,8,0,8,0],280),K(`crypto-pump-dump`,`Pump & Dump`,`rise hard · fall hard`,5e3,[2,5,8,8,2,0],320),K(`crypto-rug-pull`,`Rug Pull`,`max hold · instant drop`,6e3,[8,8,8,0,0],300),K(`crypto-slow-rug`,`Slow Rug`,`gradual fade to nothing`,7e3,[8,6,4,2,1,0],450),K(`crypto-short-squeeze-vibe`,`Squeeze Play`,`tighter · faster · pop`,8e3,[3,5,6,7,8,8,0],260),K(`crypto-liq-cascade`,`Liquidation Cascade`,`escalating repeated hits`,9e3,[3,0,5,0,7,0,8,0,6,0],260),K(`crypto-full-liq`,`Full Liquidation`,`one brutal wipeout`,1e4,[8,8,8,8,1,0],350),K(`crypto-dead-cat`,`Dead Cat Bounce`,`drop · surprise comeback`,11e3,[7,1,0,5,3,0],340),K(`crypto-long-wick`,`Long Wick`,`one sharp extended peak`,12e3,[2,8,2,0],300),K(`crypto-stop-hunt`,`Stop Hunt`,`tease near peaks · fakeout`,13e3,[4,7,4,7,3,0],320),K(`crypto-breakout`,`Breakout`,`sudden intensity jump`,14e3,[3,3,3,8,8,0],350),K(`crypto-blow-off`,`Blow-Off Top`,`violent final crescendo`,15e3,[4,5,6,8,8,8,0],300),K(`crypto-volatility`,`Volatility`,`chaotic intensity swings`,16e3,[2,7,3,8,1,6,0],280),K(`crypto-dca`,`DCA`,`even spaced repeated hits`,17e3,[0,4,0,5,0,6,0,5,0],400),K(`crypto-halving`,`Halving`,`intensity halves each cycle`,18e3,[8,8,4,4,2,2,0],400),K(`crypto-compounding`,`Compounding`,`every cycle gets stronger`,19e3,[2,3,4,5,6,7,8,0],360),K(`crypto-rebase`,`Rebase`,`reset baseline · climb again`,2e4,[5,6,2,5,6,2,0],380),K(`crypto-gas-wars`,`Gas Wars`,`frantic rapid pulses`,22e3,[6,7,6,8,6,8,0],200),K(`crypto-block-reward`,`Block Reward`,`pause · burst · pause`,24e3,[0,0,8,0,0,8,0],350),K(`crypto-flash-loan`,`Flash Loan`,`very short max blast`,26e3,[0,8,0],250),K(`crypto-100x`,`100x Leverage`,`absurdly aggressive`,28e3,[8,8,7,8,8,6,0,8,0],260),K(`crypto-max-slip`,`Maximum Slippage`,`irregular sliding intensity`,3e4,[7,5,8,3,6,2,0],300),K(`crypto-price-discovery`,`Price Discovery`,`unpredictable climb`,32e3,[2,5,3,7,4,8,0],340),K(`crypto-capitulation`,`Capitulation`,`brutal peak then collapse`,34e3,[6,8,8,8,1,0],350),K(`crypto-full-send`,`Full Send`,`straight to max`,36e3,[8,8,8,8,8,0],300),K(`crypto-ath`,`ATH`,`all-time high hold`,38e3,[7,8,8,8,0],400),K(`crypto-new-ath`,`New ATH`,`beats prior peak each cycle`,4e4,[5,6,7,8,8,0],360),K(`crypto-exit-liq`,`Exit Liquidity`,`premium whale exit pattern`,42e3,[4,6,8,8,3,0],380),K(`crypto-whale-alert`,`Whale Alert`,`huge sudden burst`,45e3,[0,0,8,8,0],300),K(`crypto-hard-fork`,`Hard Fork`,`split · hard new path`,16e3,[5,5,0,7,7,0],350),K(`crypto-full-node`,`Full Node`,`steady full-stack hold`,18e3,[5,6,7,7,7,6,5,0],450),K(`crypto-pos`,`Proof of Stake`,`lock in · earn the drip`,2e4,[4,5,6,6,5,3,0],420),K(`crypto-degen-mode`,`Degen Mode`,`no brakes · full degen`,5e4,[7,8,6,8,7,8,0],240)];function ed(e,t,n,r,i,a=1600){return{id:e,name:t,blurb:n,price:r,tag:`spin`,kind:`pattern`,timeSec:Math.max(1,Math.round(i.length*a/1e3)),intervalMs:Math.max(1400,a),strengths:i,needs:[`rotate`]}}var td=[ed(`spin-cycle`,`Spin Cycle`,`rotate · wash-rinse cadence`,3e3,[4,6,4,6,0]),ed(`spin-proof-of-spin`,`Proof of Spin`,`rotate · verified continuous spin`,4500,[5,5,6,5,0]),ed(`spin-full-circle`,`Full Circle`,`rotate · complete lap then rest`,5500,[3,5,7,5,3,0],1700),ed(`spin-around-the-block`,`Around the Block`,`rotate · lap · pause · lap`,6500,[6,6,0,6,6,0],1500),ed(`spin-sector-rotation`,`Sector Rotation`,`rotate · shift between speeds`,8e3,[3,6,3,7,3,0],1700),ed(`spin-supercycle`,`Supercycle`,`rotate · long macro climb`,1e4,[2,4,6,8,8,0],1800),ed(`spin-perpetual-motion`,`Perpetual Motion`,`rotate · never-stop mid spin`,12e3,[5,6,5,6,5,0]),ed(`spin-infinite-loop`,`Infinite Loop`,`rotate · looped on/off forever feel`,14e3,[0,6,0,8,0,6,0,8,0],1500),ed(`spin-liquidity-loop`,`Liquidity Loop`,`rotate · smooth closed circuit`,16e3,[4,5,6,5,4,0],1700),ed(`spin-token-tornado`,`Token Tornado`,`rotate · spin up · hold · unravel`,18e3,[3,5,7,8,4,0],1600),ed(`spin-vortex`,`Vortex`,`rotate · hard center pull`,2e4,[6,7,8,8,5,0]),ed(`spin-death-spiral`,`Death Spiral`,`rotate · accelerate into the drop`,25e3,[2,4,6,8,8,0,0],1500),ed(`spin-corkscrew`,`Corkscrew`,`rotate · twist in · twist out`,27500,[5,7,5,7,5,0],1500),ed(`spin-high-turnover`,`High Turnover`,`rotate · quick trade flips`,3e4,[0,8,0,8,0,7,0],1500),ed(`spin-full-360`,`Full 360`,`rotate · one hard full turn`,35e3,[5,7,8,8,8,4,0],1800)];function nd(e,t,n,r,i,a=1600){return{id:e,name:t,blurb:n,price:r,tag:`storm`,kind:`pattern`,timeSec:Math.max(1,Math.round(i.length*a/1e3)),intervalMs:Math.max(1400,a),strengths:i,needs:[`rotate`]}}var rd=[nd(`storm-zk-whirl`,`ZK Whirl`,`rotate · zero-knowledge spin`,4e3,[4,5,6,5,0]),nd(`storm-open-source`,`Open Source Spin`,`rotate · can’t be switched off`,5500,[5,6,5,7,6,5,4,0],1550),nd(`storm-peppersec`,`PepperSec`,`rotate · dev-shop cadence`,7e3,[4,4,6,7,6,4,3,0],1650),nd(`storm-non-custodial`,`Hands Off`,`rotate · never hold the asset`,8500,[4,7,3,7,4,6,0]),nd(`storm-privacy-pool`,`Deposit Whirl`,`rotate · deposit · spin · exit`,1e4,[2,4,6,8,4,0],1600),nd(`storm-immutable`,`Locked Forever`,`rotate · locked forever spin`,12500,[7,7,7,6,7,7,0]),nd(`storm-tornado-cash`,`Storm Cell`,`rotate · classic mixer whirl`,15e3,[2,4,6,7,8,5,3,0],1550),nd(`storm-roman-storm`,`Roman's Storm`,`rotate · Seattle whirlwind`,18e3,[6,7,6,7,5,0]),nd(`storm-deadlock`,`Hung Jury`,`rotate · split · spin again`,22e3,[0,6,0,7,0,8,0],1500),nd(`storm-proof-of-privacy`,`Proof of Privacy`,`rotate · verified anonymous lap`,26e3,[3,5,7,7,5,0],1700),nd(`storm-unlicensed-spin`,`Unlicensed Spin`,`rotate · off-book transmitter`,3e4,[2,4,5,7,8,8,2,0],1500),nd(`storm-circuit-loop`,`Round Trip`,`rotate · delist · relist cadence`,34e3,[5,4,7,4,5,6,4,0],1750)];function id(e,t,n,r,i,a=400){return{id:e,name:t,blurb:n,price:r,tag:`richard`,kind:`pattern`,timeSec:Math.max(1,Math.round(i.length*a/1e3)),intervalMs:a,strengths:i,needs:[]}}function ad(e,t,n,r,i,a=1600){return{id:e,name:t,blurb:n,price:r,tag:`richard`,kind:`pattern`,timeSec:Math.max(1,Math.round(i.length*a/1e3)),intervalMs:Math.max(1400,a),strengths:i,needs:[`rotate`]}}var od=[id(`rh-richard-hard`,`Richard Hard`,`firm hold · no soft landing`,2500,[6,7,7,6,0]),id(`rh-heart-throbber`,`Heart Throbber`,`heavy pulse · throb cadence`,4e3,[0,7,0,7,0,8,0],320),id(`rh-richard-goes-brrrr`,`Richard Goes Brrrr`,`machine-gun buzz run`,5500,[5,6,5,7,5,8,0],220),id(`rh-hexual-heartbeat`,`HEXual Heartbeat`,`hexed lub-dub · climb`,7e3,[2,5,2,6,2,7,0],360),id(`rh-hex-me-harder`,`HEX Me Harder`,`each beat hits harder`,9e3,[3,5,7,8,8,0],350),id(`rh-pulse-my-heart`,`Pulse My Heart`,`pulsechain heartbeat`,11e3,[0,5,0,8,0,6,0,7,0],300),id(`rh-hard-pulsex`,`Hard PulseX`,`swap hard · hold the peak`,13e3,[4,7,8,8,5,0]),id(`rh-pulsechain-reaction`,`PulseChain Reaction`,`cascade · chain reaction climb`,16e3,[2,4,6,8,6,8,0],340),id(`rh-proof-of-heart`,`Proof of Heart`,`verified soft-to-firm heart`,18e3,[2,4,6,5,3,0]),id(`rh-enigma-machine`,`Enigma Machine`,`cipher pulses · decode finish`,24e3,[2,0,4,0,6,0,8,0,7,0],320),id(`rh-proof-of-flex`,`Proof of Flex`,`luxury climb · flex hold`,28e3,[3,5,7,8,8,6,0],380),ad(`rh-spin-cycle`,`Richard’s Spin Cycle`,`rotate · rinse · repeat`,6500,[4,6,5,7,4,6,0],1550),ad(`rh-perpetual-richard`,`Perpetual Richard`,`rotate · never-stop mid spin`,12e3,[6,5,7,5,6,5,0]),ad(`rh-automatic-movement`,`Automatic Movement`,`rotate · self-winding rhythm`,15e3,[3,5,6,5,3,0],1700),ad(`rh-555-rpm`,`555 RPM`,`rotate · redline spin hold`,22e3,[6,7,8,8,8,0],1500)];function sd(e,t,n,r,i,a=400){return{id:e,name:t,blurb:n,price:r,tag:`gensler`,kind:`pattern`,timeSec:Math.max(1,Math.round(i.length*a/1e3)),intervalMs:a,strengths:i,needs:[]}}function cd(e,t,n,r,i,a=1600){return{id:e,name:t,blurb:n,price:r,tag:`gensler`,kind:`pattern`,timeSec:Math.max(1,Math.round(i.length*a/1e3)),intervalMs:Math.max(1400,a),strengths:i,needs:[`rotate`]}}function ld(e,t,n,r,i,a=1600){return{id:e,name:t,blurb:n,price:r,tag:`gensler`,kind:`pattern`,timeSec:Math.max(1,Math.round(i.length*a/1e3)),intervalMs:Math.max(1400,a),strengths:i,needs:[`thrust`]}}var ud=[sd(`gg-secstasy`,`SECstasy`,`regulatory bliss · rising waves`,2500,[2,4,6,7,5,0]),sd(`gg-tease-desist`,`Tease & Desist`,`soft tease · hard stop`,3500,[3,5,3,0,6,0],320),sd(`gg-vibrate-desist`,`Vibrate & Desist`,`buzz · cease · buzz again`,4500,[0,7,0,0,7,0],300),sd(`gg-gary-goes-brrrr`,`Gary Goes Brrrr`,`enforcement machine-gun`,5500,[4,7,5,8,6,7,8,0],200),sd(`gg-unregistered`,`Unregistered Stimulation`,`off-book buzz · no filing`,7e3,[3,5,3,6,4,0]),sd(`gg-reg-by-stim`,`Regulation by Stimulation`,`enforce through the vibe`,8500,[2,4,6,4,7,0],360),sd(`gg-howey-hard`,`Howey Hard`,`pass the test · hard hold`,1e4,[4,6,8,8,5,0]),sd(`gg-pass-the-howey`,`Pass the Howey`,`four-prong climb to pass`,12e3,[1,3,5,7,8,6,0],380),sd(`gg-expectation`,`Expectation of Pleasure`,`soft promise · efforts of others`,14e3,[3,4,5,6,5,0],420),sd(`gg-wells-notice`,`Gary’s Wells Notice`,`served · respond · peak`,16e3,[0,5,0,7,0,8,0],340),sd(`gg-full-disclosure`,`Full Disclosure`,`leave nothing undisclosed`,18e3,[4,5,6,7,8,0]),sd(`gg-best-execution`,`Best Execution`,`optimal path · clean finish`,2e4,[3,5,7,6,8,0],360),sd(`gg-t69`,`T+69`,`settlement delayed · spicy`,22e3,[2,4,2,6,2,8,0],300),sd(`gg-reg-pressure`,`Regulatory Pressure`,`rising pressure pulses`,25e3,[2,4,6,7,8,8,7,5,0],340),sd(`gg-enforcement-mode`,`Enforcement Mode`,`steady hard compliance hold`,28e3,[7,7,8,7,6,7,0]),cd(`gg-gensleration`,`Gensleration`,`rotate · next-gen enforcement spin`,6e3,[4,6,5,7,0]),cd(`gg-sector-rotation`,`SECtor Rotation`,`rotate · sector shift cadence`,9e3,[3,5,3,6,4,7,3,0],1650),cd(`gg-gary-spin-cycle`,`Gary’s Spin Cycle`,`rotate · rinse the market`,13e3,[6,4,8,4,6,0],1500),cd(`gg-reg-death-spiral`,`Regulatory Death Spiral`,`rotate · accelerate into the drop`,3e4,[1,2,4,6,8,8,7,0],1400),ld(`gg-thrust-desist`,`Thrust & Desist`,`thrust · full stroke then cease`,15e3,[0,8,0,0,8,0],1500)],dd=[{id:`fx-thrust-soft`,name:`Soft stroke`,blurb:`thrust · gentle steady in-out`,price:2500,tag:`feature`,kind:`pattern`,timeSec:8,intervalMs:1600,strengths:[3,3,3,3,0],needs:[`thrust`]},{id:`fx-thrust-staccato`,name:`Thrust pulse`,blurb:`thrust · full stroke then rest`,price:7e3,tag:`feature`,kind:`pattern`,timeSec:10,intervalMs:1500,strengths:[0,8,0,8,0,8,0],needs:[`thrust`]},{id:`fx-thrust-swell`,name:`Thrust climb`,blurb:`thrust · slow depth climb`,price:12e3,tag:`feature`,kind:`pattern`,timeSec:11,intervalMs:1900,strengths:[1,3,4,6,7,8,0],needs:[`thrust`]},{id:`fx-thrust-hold`,name:`Depth hold`,blurb:`thrust · deep press then drop`,price:15e3,tag:`feature`,kind:`pattern`,timeSec:10,intervalMs:1800,strengths:[8,8,8,3,0],needs:[`thrust`]},{id:`fx-solace-combo`,name:`Solace dual`,blurb:`vibe · thrust · both together (steady)`,price:16e3,tag:`combo`,kind:`pattern`,timeSec:10,intervalMs:1600,strengths:[4,6,6,7,5,0],needs:[`thrust`,`multi`]},{id:`fx-rotate-nudge`,name:`Rotate soft`,blurb:`rotate · slow quiet head turns`,price:3500,tag:`feature`,kind:`pattern`,timeSec:8,intervalMs:1600,strengths:[2,3,3,2,3,0],needs:[`rotate`]},{id:`fx-rotate-spin`,name:`Rotate full`,blurb:`rotate · strong continuous spin`,price:9e3,tag:`feature`,kind:`pattern`,timeSec:9,intervalMs:1600,strengths:[6,8,7,8,6,0],needs:[`rotate`]},{id:`fx-rotate-pulse`,name:`Rotate pulse`,blurb:`rotate · hard spin then stop`,price:11e3,tag:`feature`,kind:`pattern`,timeSec:11,intervalMs:1400,strengths:[0,8,0,0,8,0,0,8,0],needs:[`rotate`]},{id:`fx-nora-sync-soft`,name:`Dual soft`,blurb:`vibe · rotate · low steady both`,price:6e3,tag:`combo`,kind:`pattern`,timeSec:8,intervalMs:1550,strengths:[2,4,3,4,3,4,2,0],needs:[`rotate`]},{id:`fx-nora-sync-pulse`,name:`Dual pulse`,blurb:`vibe · rotate · both on/off together`,price:1e4,tag:`combo`,kind:`pattern`,timeSec:11,intervalMs:1450,strengths:[0,7,2,8,0,7,2,8,0],needs:[`rotate`]},{id:`fx-nora-sync-climb`,name:`Dual climb`,blurb:`vibe · rotate · slow ramp both axes`,price:15e3,tag:`combo`,kind:`pattern`,timeSec:10,intervalMs:1800,strengths:[2,4,6,8,0],needs:[`rotate`]},{id:`fx-air-kiss`,name:`Air soft`,blurb:`air · light suction hold`,price:4e3,tag:`feature`,kind:`pattern`,timeSec:8,intervalMs:1600,strengths:[3,3,4,3,0],needs:[`air`]},{id:`fx-air-pulse`,name:`Air pulse`,blurb:`air · suck hard then rest`,price:8e3,tag:`feature`,kind:`pattern`,timeSec:10,intervalMs:1500,strengths:[0,8,0,8,0,7,0],needs:[`air`]},{id:`fx-air-vacuum`,name:`Air vacuum`,blurb:`air · deep suction hold then drop`,price:12e3,tag:`feature`,kind:`pattern`,timeSec:10,intervalMs:1800,strengths:[7,8,8,3,0],needs:[`air`]},{id:`fx-dual-soft`,name:`Twin soft`,blurb:`multi · low both motors`,price:3e3,tag:`feature`,kind:`pattern`,timeSec:8,intervalMs:1600,strengths:[2,4,3,4,2,0],needs:[`multi`]},{id:`fx-dual-pulse`,name:`Twin pulse`,blurb:`multi · both motors on/off`,price:6e3,tag:`feature`,kind:`pattern`,timeSec:11,intervalMs:1400,strengths:[0,7,0,8,0,7,0,8,0],needs:[`multi`]},{id:`fx-dual-chase`,name:`L / R chase`,blurb:`multi · alternate left then right`,price:1e4,tag:`feature`,kind:`pattern`,timeSec:10,intervalMs:1500,strengths:[7,7,7,7,7,7,0],stepMotors:[1,2,1,2,1,2,0],needs:[`multi`]},{id:`fx-dual-build`,name:`Twin climb`,blurb:`multi · both motors step up`,price:14e3,tag:`feature`,kind:`pattern`,timeSec:10,intervalMs:1800,strengths:[2,4,6,8,0],needs:[`multi`]},{id:`fx-dual-peak`,name:`Twin max`,blurb:`multi · hard both motors hold`,price:18e3,tag:`feature`,kind:`pattern`,timeSec:9,intervalMs:1600,strengths:[7,8,8,8,6,0],needs:[`multi`]}],fd=Ru([...Wu,...Ku,...Ju,...Qu,...$u,...od,...ud,...Xu,...td,...rd,...dd]),pd=new Set(fd.map(e=>e.id)),q=fd.map(e=>({...e,strengths:e.strengths.slice(),stepMotors:e.stepMotors?[...e.stepMotors]:void 0,needs:e.needs?[...e.needs]:[],forProducts:e.forProducts?[...e.forProducts]:void 0}));q.map(e=>e.id);var md=new Map(q.map(e=>[e.id,e]));function hd(e){return pd.has(e)}function gd(e){return e.startsWith(`u_`)||!pd.has(e)&&md.has(e)}function _d(e){return fd.find(t=>t.id===e)}function vd(e){return Array.isArray(e.needs)?tu(e.needs):tu(nu(e))}function yd(){return`u_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,7)}`}function bd(e){return e.trim().toLowerCase().replace(/\s+/g,` `)}function xd(e){let t=(e.strengths||[]).map(e=>Math.max(0,Math.min(8,Math.round(Number(e)||0)))).join(`,`);return`${Math.max(80,Math.min(2e3,Math.round(Number(e.intervalMs)||400)))};${t};${(e.stepMotors||[]).map(e=>Math.round(Number(e)||0)).join(`,`)};${(e.motorStrengths||[]).map(e=>(e||[]).map(e=>Math.max(0,Math.min(8,Math.round(Number(e)||0)))).join(`.`)).join(`|`)};${[...e.needs||[]].map(String).sort().join(`+`)}`}function Sd(e,t){let n=(t?.excludeId||``).trim(),r=bd(e.name),i=xd(e);if(!r&&!i)return null;for(let e of q)if(!(!e?.id||e.id===n)&&r&&bd(e.name)===r)return{id:e.id,name:e.name,reason:`name`};for(let e of q)if(!(!e?.id||e.id===n)&&xd(e)===i)return{id:e.id,name:e.name,reason:`wave`};return null}function Cd(e,t){if(!e||typeof e!=`object`)return null;let n=typeof e.id==`string`&&e.id.trim()?e.id.trim().slice(0,48):t||``;if(!n)return null;let r=typeof e.name==`string`&&e.name.trim()?e.name.trim().slice(0,48):`Untitled`,i=typeof e.blurb==`string`?e.blurb.trim().slice(0,120):``,a=typeof e.tag==`string`&&e.tag.trim()?e.tag.trim().toLowerCase().slice(0,24):`custom`,o=e.kind===`preset`||e.kind===`pulse`||e.kind===`pattern`?e.kind:`pattern`,s=Math.max(80,Math.min(2e3,Math.round(Number(e.intervalMs)||400))),c=Array.isArray(e.strengths)?e.strengths.map(e=>Math.max(0,Math.min(8,Math.round(Number(e)||0)))).slice(0,32):[];c.length||(c=[4,4,0]);let l=Math.max(0,Number(e.price)||0),u=Math.max(0,Number(e.timeSec)||0);u||=Math.max(1,Math.round(c.length*s/1e3));let d={id:n,name:r,blurb:i,price:l,tag:a,kind:o,timeSec:u,intervalMs:s,strengths:c};typeof e.preset==`string`&&e.preset.trim()&&(d.preset=e.preset.trim()),e.intensity!=null&&Number.isFinite(Number(e.intensity))&&(d.intensity=Math.max(1,Math.min(8,Math.round(Number(e.intensity)))));let f=zu(e.stepMotors,c.length);f&&(d.stepMotors=f);let p=Bu(e.motorStrengths,c.length);p&&(d.motorStrengths=p);let m=tu(e.needs);if(Array.isArray(e.needs))d.needs=m;else{let e=nu({id:n,name:r,blurb:i});e.length&&(d.needs=e)}if(Array.isArray(e.forProducts)){let t=e.forProducts.map(e=>ru(String(e||``))).filter(Boolean).slice(0,12);t.length&&(d.forProducts=t)}return d}function wd(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r of e){let e=Cd(r);!e||n.has(e.id)||pd.has(e.id)||(n.add(e.id),t.push(e))}return t}function Td(e){if(!e||typeof e!=`object`||Array.isArray(e))return{};let t={};for(let[n,r]of Object.entries(e)){if(!pd.has(n))continue;let e=Cd(r,n);e&&(t[n]={...e,id:n})}return t}function Ed(e=[],t={}){let n=[];for(let e of fd){let r=t[e.id],i=r?{...r,id:e.id,forProducts:r.forProducts?.length?[...r.forProducts]:e.forProducts?[...e.forProducts]:void 0}:{...e,strengths:e.strengths.slice(),stepMotors:e.stepMotors?[...e.stepMotors]:void 0,motorStrengths:e.motorStrengths?.map(e=>e.slice()),needs:e.needs?[...e.needs]:void 0,forProducts:e.forProducts?[...e.forProducts]:void 0};if(!Array.isArray(i.needs)){let e=nu(i);e.length&&(i.needs=e)}let a=zu(i.stepMotors,i.strengths.length);a?i.stepMotors=a:delete i.stepMotors;let o=Bu(i.motorStrengths,i.strengths.length);o?i.motorStrengths=o:delete i.motorStrengths,n.push(i)}for(let t of e){if(pd.has(t.id))continue;let e={...t,strengths:t.strengths.slice(),stepMotors:t.stepMotors?[...t.stepMotors]:void 0,motorStrengths:t.motorStrengths?.map(e=>e.slice()),needs:t.needs?[...t.needs]:void 0};if(!Array.isArray(e.needs)){let t=nu(e);t.length&&(e.needs=t)}let r=zu(e.stepMotors,e.strengths.length);r?e.stepMotors=r:delete e.stepMotors;let i=Bu(e.motorStrengths,e.strengths.length);i?e.motorStrengths=i:delete e.motorStrengths,n.push(e)}q=n,q.map(e=>e.id),md=new Map(q.map(e=>[e.id,e]))}function Dd(e){if(typeof e==`string`)return md.get(e)}function Od(e){return typeof e==`string`&&md.has(e)}function kd(e){return Dd(e)?.name??e}function Ad(e,t=1,n){let r=Dd(e),i=Math.min(1,Math.max(.05,t));if(!r)return[{level:i,ms:Math.max(400,Math.round(n??2500))}];let a=Math.max(80,Math.min(2e3,r.intervalMs||400)),o=r.strengths.slice();o.length||(o=[4]);let s=r.stepMotors?[...r.stepMotors]:[],c=r.motorStrengths?.length?r.motorStrengths.map(e=>e.slice()):[];if(n!=null&&n>0){let e=Math.max(1,Math.round(n/a));if(e<o.length)o=o.slice(0,e),s=s.slice(0,e),c=c.map(t=>t.slice(0,e));else if(e>o.length){let t=[],n=[],r=c.map(()=>[]);for(;t.length<e;)t.push(...o),s.length&&n.push(...s),c.forEach((e,t)=>r[t].push(...e));o=t.slice(0,e),s=n.slice(0,e),c=r.map(t=>t.slice(0,e))}}return o.map((e,t)=>{let n=Hu(s[t]),r=Math.max(0,Math.min(8,Number(e)||0))/8*i;if(c.length){let e=c.map(e=>Math.max(0,Math.min(8,Number(e[t])||0))/8*i),o={level:Math.max(r,...e),ms:a,motorLevels:e};return n&&(o.motorMask=n),o}let o={level:r,ms:a};return n&&(o.motorMask=n),o})}function jd(e){let t=Dd(e);return t?t.timeSec>0?Math.round(t.timeSec*1e3):Ad(e).reduce((e,t)=>e+t.ms,0):2500}function Md(){let e=new Set(q.map(e=>e.tag||`other`));return e.add(`custom`),[...e]}var Nd=[{id:`catalog`,label:`Catalog`},{id:`duration-desc`,label:`Longest`},{id:`duration-asc`,label:`Shortest`},{id:`price-desc`,label:`Price high → low`},{id:`price-asc`,label:`Price low → high`},{id:`rating-desc`,label:`Rating high → low`},{id:`rating-asc`,label:`Rating low → high`}];function Pd(e){return typeof e==`string`&&Nd.some(t=>t.id===e)}function Fd(){let e={};for(let t of q)e[t.id]=t.price;return e}function Id(){let e=1/0;for(let t of q){let n=Number(t.price);Number.isFinite(n)&&n>0&&n<e&&(e=n)}return Number.isFinite(e)?e:1}function Ld(){let e=0;for(let t of q){let n=Number(t.price);Number.isFinite(n)&&n>e&&(e=n)}return e>0?e:Id()}function Rd(){let e=1/0;for(let t of q){let n=jd(t.id);Number.isFinite(n)&&n>0&&n<e&&(e=n)}return Number.isFinite(e)?e:1e3}function zd(){let e=0;for(let t of q){let n=jd(t.id);Number.isFinite(n)&&n>e&&(e=n)}return e>0?e:Rd()}function Bd(e){return!Number.isFinite(e)||e<0?0:e>=1e3?Math.round(e):e>=10?Math.round(e*100)/100:Math.round(e*1e4)/1e4}function Vd(e){return Math.max(0,Number(e)||0)>=1e3?1:.01}function Hd(e){return Vd(e)*2}function Ud(e){return Math.round(Math.max(0,e)*100)/100}function Wd(e){return .02}function Gd(e){return String(Math.round(e*1e9)/1e9)}function Kd(e,t){let n=jd(e)||0,r=jd(t)||0;if(n!==r)return n-r;let i=q.find(t=>t.id===e)?.name||e,a=q.find(e=>e.id===t)?.name||t;return i===a?e.localeCompare(t):i.localeCompare(a)}function qd(e,t){let n=t?.round??Bd,r=t?.step??Hd,i=t?.tieBreak??Kd,a=[...e].sort((e,t)=>{let r=n(e.price)-n(t.price);return r===0?i(e.id,t.id):r}),o=new Set,s={};for(let{id:e,price:t}of a){let i=n(Math.max(0,t)),a=0;for(;o.has(Gd(i))&&a<1e5;)i=n(i+r(i)),a++;o.add(Gd(i)),s[e]=i}return s}function Jd(e,t){let n=t?.length?t:q.map(e=>e.id),r=qd(n.map(t=>({id:t,price:ff(t,e)}))),i={...e};for(let e of n){let t=r[e];t!=null&&(i[e]=t)}return i}function Yd(e,t,n,r){let i=String(n||``).trim();if(!i||!r.length)return{toyPrices:t||{},changed:[]};let a=qd(r.map(n=>({id:n,price:pf(n,e,t,i)}))),o={...t||{}},s={...o[i]||{}},c=[];for(let n of r){let r=a[n];if(r==null)continue;let o=ff(n,e);Af(r,pf(n,e,t,i))||c.push(n),Af(r,o)?delete s[n]:s[n]=r}return Object.keys(s).length?o[i]=s:delete o[i],{toyPrices:o,changed:c}}function Xd(e,t){let n=t?.length?t:q.map(e=>e.id),r=new Map(n.map(t=>[t,ff(t,e)])),i=Jd(e,n);return{prices:i,changed:n.filter(e=>!Af(r.get(e),i[e]))}}function Zd(e,t){let n=sf(t);for(let t of Object.keys(n)){let r=[...new Set([...Object.keys(n[t]||{}),...q.map(e=>e.id)])];n=Yd(e,n,t,r).toyPrices}return n}function Qd(e,t,n){let r=Math.max(0,Number(e)||0),i=Math.max(0,Number(t)||0);i<r&&(i=r);let a=Math.max(0,Number(n?.loMs??Rd())||0),o=Math.max(a,Number(n?.hiMs??zd())||a||1)-a,s={};for(let e of q){let t=Math.max(0,jd(e.id)||0);if(o<=0){s[e.id]=Bd(r);continue}let n=Math.min(1,Math.max(0,(t-a)/o));s[e.id]=Bd(r+n*(i-r))}return Jd(s)}function $d(e){let t=1/0,n=0;for(let r of e){let e=jd(r.id);!Number.isFinite(e)||e<=0||(e<t&&(t=e),e>n&&(n=e))}return!Number.isFinite(t)||t<=0?{loMs:Rd(),hiMs:zd()}:{loMs:t,hiMs:Math.max(t,n)}}function ef(e,t,n,r){let i=Math.max(0,Number(t)||0),a=Math.max(i,Number(n)||0),o=Math.max(0,Number(r?.loMs??Rd())||0),s=Math.max(o,Number(r?.hiMs??zd())||o||1)-o;if(s<=0)return Ud(i);let c=Math.max(0,jd(e));return Ud(i+Math.min(1,Math.max(0,(c-o)/s))*(a-i))}function tf(e,t,n,r){return e.length?qd(e.map(e=>({id:e,price:ef(e,t,n,r)})),{round:Ud,step:Wd,tieBreak:Kd}):{}}function nf(e){if(e.length<2)return e;let t=qd(e.map(e=>({id:e.id,price:e.amount})));return e.map(e=>({...e,amount:t[e.id]??e.amount}))}function rf(e){let t=1/0;for(let n of q){let r=ff(n.id,e);Number.isFinite(r)&&r>=0&&r<t&&(t=r)}return Number.isFinite(t)?t:Id()}function af(e){let t=0;for(let n of q){let r=ff(n.id,e);Number.isFinite(r)&&r>t&&(t=r)}return t>0?t:Ld()}function of(e){let t=Fd();if(!e||typeof e!=`object`||Array.isArray(e))return Jd(t);for(let n of q){let r=Number(e[n.id]);Number.isFinite(r)&&r>=0&&(t[n.id]=r)}return Jd(t)}function sf(e){if(!e||typeof e!=`object`||Array.isArray(e))return{};let t={};for(let[n,r]of Object.entries(e)){let e=String(n||``).trim();if(!e||!r||typeof r!=`object`||Array.isArray(r))continue;let i={};for(let[e,t]of Object.entries(r)){let n=Number(t);e&&Number.isFinite(n)&&n>=0&&(i[e]=n)}Object.keys(i).length&&(t[e]=i)}return t}function cf(){let e={};for(let t of q)e[t.id]=0;return e}function lf(e){let t=cf();if(!e||typeof e!=`object`||Array.isArray(e))return t;for(let n of q){let r=Number(e[n.id]);Number.isFinite(r)&&(t[n.id]=Math.min(5,Math.max(0,Math.round(r))))}return t}function uf(e,t){let n=Number(t[e]);return Number.isFinite(n)?Math.min(5,Math.max(0,Math.round(n))):0}function df(e){if(!Array.isArray(e)||!e.length)return null;let t=Fd(),n=!1;for(let r of e){if(!r||typeof r!=`object`)continue;let e=r,i=typeof e.pattern==`string`?e.pattern:``,a=Number(e.amount);Od(i)&&Number.isFinite(a)&&a>=0&&(t[i]=a,n=!0)}return n?t:null}function ff(e,t){let n=Number(t[e]);return Number.isFinite(n)&&n>=0?n:q.find(t=>t.id===e)?.price??0}function pf(e,t,n,r){if(r&&n){let t=Number(n[r]?.[e]);if(Number.isFinite(t)&&t>=0)return t}return ff(e,t)}function mf(e,t,n,r){let i=String(t||``).trim();if(!i)return e;let a=Math.max(0,Number(r)||0),o={...e};return o[i]={...o[i]||{},[n]:a},o}function hf(e,t,n){let r=String(t||``).trim();return r?{...e,[r]:{...n}}:e}function gf(e){if(!Array.isArray(e))return[];let t=[];for(let n of e)typeof n==`string`&&Od(n)&&!t.includes(n)&&t.push(n);return t}function _f(e){return gf(e)}function vf(e){let t=new Set(e);return q.filter(e=>!t.has(e.id))}var yf=[`vibe`,`multi`,`rotate`,`air`,`thrust`];function bf(e){if(typeof e.timeSec==`number`&&e.timeSec>0)return e.timeSec;let t=Math.max(1,e.strengths?.length||1);return(e.intervalMs||400)*t/1e3}function xf(e,t,n){let r=+!n.has(e.id),i=+!n.has(t.id);if(r!==i)return r-i;let a=bf(e),o=bf(t);return a===o?e.name.localeCompare(t.name)||e.id.localeCompare(t.id):a-o}function Sf(e,t,n){let r=[...e];return r.sort((e,n)=>xf(e,n,t)),n===void 0?r:r.slice(0,Math.max(1,Math.round(n)))}function Cf(e,t,n){return t.filter(t=>e.some(e=>!n.has(e.id)&&Zl(vd(e))===t))}function wf(e,t,n,r){if(n===void 0||n<=0)return Sf(e,t,n);let i=e.filter(e=>t.has(e.id)).sort((e,n)=>xf(e,n,t)).slice(0,n),a=new Set(i.map(e=>e.id));if(i.length>=n)return i.slice(0,n);let o=n-i.length,s=Cf(e,r,a);if(s.length<=1){let r=e.filter(e=>!a.has(e.id)).sort((e,n)=>xf(e,n,t)).slice(0,o);return i.push(...r),i.slice(0,n)}let c=Math.max(1,Math.floor(o/s.length));for(let r of s){let o=e.filter(e=>!a.has(e.id)&&Zl(vd(e))===r).sort((e,n)=>xf(e,n,t)),s=Math.min(o.length,c);for(let e=0;e<s&&i.length<n;e++)i.push(o[e]),a.add(o[e].id)}if(o=n-i.length,o>0){let n=e.filter(e=>!a.has(e.id)).sort((e,n)=>xf(e,n,t)).slice(0,o);i.push(...n)}return i.slice(0,n)}function Tf(e,t,n,r){let i=Xl(r);return i.length<=1?Sf(e,t,n):wf(e,t,n,i)}function Ef(e,t){let n=t?.limit===void 0?void 0:Math.max(1,Math.round(t.limit)),r=new Set(t?.disabled||[]),i=new Set(t?.featured||[]),a=t?.includeDisabled!==!1;return Tf(q.filter(t=>!a&&r.has(t.id)?!1:au(vd(t),e,t.forProducts)),i,n,e)}function Df(e){let t=e?.limit===void 0?void 0:Math.max(1,Math.round(e.limit)),n=new Set(e?.disabled||[]),r=new Set(e?.featured||[]),i=e?.includeDisabled!==!1,a=q.filter(e=>i||!n.has(e.id));return t===void 0?Sf(a,r,t):wf(a,r,t,yf)}function Of(e=10){let t=new Set(wf(q,new Set,Math.max(1,Math.round(e)),yf).map(e=>e.id));return q.filter(e=>!t.has(e.id)).map(e=>e.id)}var kf=0;function Af(e,t){if(e===t)return!0;if(!Number.isFinite(e)||!Number.isFinite(t))return!1;let n=Math.max(1,Math.abs(e),Math.abs(t));return Math.abs(e-t)<=n*1e-9}function jf(e,t){return Math.max(1,Math.abs(e),Math.abs(t))*1e-9}function Mf(e,t,n){let r=n?.round??Bd,i=n?.truncationStep??Vd,a=Number(e);if(!Number.isFinite(a)||a<0)return null;let o=[...new Set([...t].map(e=>r(Number(e))).filter(e=>Number.isFinite(e)&&e>=0))].sort((e,t)=>e-t);if(!o.length)return null;let s=o.find(e=>Af(e,a));if(s!=null)return s;let c=o.find(e=>e>a);if(c!=null){let e=o.indexOf(c)-1,t=e>=0?o[e]:null,n=t==null?1/0:c-t,r=Math.min(i(c),Number.isFinite(n)?n/2:i(c));if(r>0&&c-a<=r+jf(c,a))return c}return null}function Nf(e){let t=new Map;for(let n of e){let e=t.get(n.toyId);(!e||n.pattern.localeCompare(e.pattern)<0||n.pattern===e.pattern&&n.name.localeCompare(e.name)<0)&&t.set(n.toyId,n)}return[...t.values()].sort((e,t)=>e.toyId.localeCompare(t.toyId))}function Pf(e,t,n=[],r){let i=vf(n);if(!i.length)return null;let a=Number(e);if(!Number.isFinite(a)||a<0)return null;let o=(r?.toys||[]).filter(e=>!(!e.id||r?.disabledToys?.includes(e.id)||e.connected===!1));if(o.length){let e=[];for(let i of o){let a=String(i.name||i.toyType||i.id||`toy`).trim()||i.id,o=Ef(i,{disabled:n,featured:r?.featured,includeDisabled:!1});for(let n of o){let o=pf(n.id,t,r?.toyPrices,i.id);e.push({pattern:n.id,name:n.name,price:o,toyId:i.id,toyLabel:a})}}if(!e.length)return null;let i=Mf(a,e.map(e=>e.price));if(i==null)return null;let s=e.filter(e=>Af(e.price,i));if(!s.length)return null;let c=Nf(s),l=c[kf%c.length];return kf=(kf+1)%1e6,{intensity:1,durationMs:jd(l.pattern),pattern:l.pattern,toyId:l.toyId,price:l.price,label:`${l.name} · ${l.toyLabel}`}}let s=i.map(e=>({id:e.id,name:e.name,price:ff(e.id,t)})),c=Mf(a,s.map(e=>e.price));if(c==null)return null;let l=s.filter(e=>Af(e.price,c));if(!l.length)return null;l.sort((e,t)=>e.id.localeCompare(t.id));let u=l[kf%l.length];return kf=(kf+1)%1e6,{intensity:1,durationMs:jd(u.id),pattern:u.id,price:u.price,label:u.name}}function Ff(e,t,n=[],r){let i=(r?.toys||[]).filter(e=>!(!e.id||r?.disabledToys?.includes(e.id)||e.connected===!1));if(!i.length){let i=Pf(e,t,n,r);return i?[i]:[]}let a=[];for(let o of i){let i=Pf(e,t,n,{...r,toys:[o]});i&&a.push(i)}return a}function If(e){let t=vf(e.disabled||[]),n=Math.max(0,Number(e.minAmount)||0),r=(e.toys||[]).filter(e=>e.id),i=[];if(r.length){for(let t of r){let r=String(t.name||t.toyType||t.id||`toy`).trim()||t.id,a=Ef(t,{disabled:e.disabled,featured:e.featured,includeDisabled:!1});for(let o of a){let a=pf(o.id,e.prices,e.toyPrices,t.id);!Number.isFinite(a)||a<0||a<n||i.push({amount:a,pattern:o.id,name:o.name,price:a,toyId:t.id,toyLabel:r})}}return i}for(let r of t){let t=ff(r.id,e.prices);!Number.isFinite(t)||t<0||t<n||i.push({amount:t,pattern:r.id,name:r.name,price:t,toyId:``,toyLabel:``})}return i}function Lf(e){let t=If({...e,minAmount:0});if(!t.length)return null;let n=new Map;for(let e of t){let t=e.toyId||`_`,r=n.get(t)||[];r.push(e),n.set(t,r)}let r=[...n.keys()],i=r[Math.floor(Math.random()*r.length)],a=n.get(i);return a[Math.floor(Math.random()*a.length)]}function Rf(e){let t=If({...e,minAmount:0});if(!t.length)return[];let n=new Map;for(let e of t){let t=e.toyId||`_`,r=n.get(t)||[];r.push(e),n.set(t,r)}let r=[];for(let e of n.values())r.push(e[Math.floor(Math.random()*e.length)]);return r}function zf(e){let t=Math.max(1,Math.min(64,e.maxTips??32)),n=If({...e,minAmount:0});if(!n.length)return[];let r=new Map;for(let e of n){let t=e.toyId||`_`,n=r.get(t)||[];n.push(e),r.set(t,n)}for(let e of r.values())for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}let i=[...r.keys()].sort(),a=i.map(()=>0),o=[],s=0;for(;o.length<t&&s<t*16;){s++;let e=!1;for(let n=0;n<i.length;n++){let s=r.get(i[n]),c=a[n];if(!(c>=s.length)&&(o.push(s[c]),a[n]=c+1,e=!0,o.length>=t))break}if(!e)break}return Bf(o)}function Bf(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}function Vf(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r of e){if(!r||typeof r!=`object`)continue;let e=r,i=typeof e.address==`string`?e.address.trim():``;if(!U(i))continue;let a;try{a=k(i)}catch{continue}let o=a.toLowerCase();if(n.has(o))continue;n.add(o);let s=typeof e.label==`string`?e.label.trim().slice(0,48):``,c=Number(e.lastUsed);t.push({address:a,label:s,lastUsed:Number.isFinite(c)?c:0})}return t.sort((e,t)=>t.lastUsed-e.lastUsed),t.slice(0,24)}function Hf(e,t,n){if(!U(t))return e;let r;try{r=k(t)}catch{return e}let i=r.toLowerCase(),a=e.find(e=>e.address.toLowerCase()===i),o=n?.label===void 0?a?.label||``:n.label.trim().slice(0,48),s=e.filter(e=>e.address.toLowerCase()!==i);return Vf([{address:r,label:o,lastUsed:Date.now()},...s])}function Uf(e,t){if(!U(t))return e;let n=t.toLowerCase();return e.filter(e=>e.address.toLowerCase()!==n)}function Wf(e){return e.label||Gf(e.address)}function Gf(e){return e.length>12?`${e.slice(0,6)}…${e.slice(-4)}`:e}var Kf=[{address:`0x95B303987A60C71504D99Aa1b13B4DA07b0790ab`,symbol:`PLSX`,decimals:18,label:`PLSX`,note:`PulseX`},{address:`0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39`,symbol:`HEX`,decimals:8,label:`HEX`,note:`HEX on PulseChain`},{address:`0xF6f8Db0aBa00007681F8fAF16A0FDa1c9B030b11`,symbol:`PRVX`,decimals:18,label:`ProveX`,note:`ProveX (PRVX)`},{address:`0x2fa878Ab3F87CC1C9737Fc071108F904c0B0C95d`,symbol:`INC`,decimals:18,label:`INC`,note:`PulseX Incentive`}],qf=[{address:`0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07`,symbol:`USDC`,decimals:6,label:`eUSDC`,note:`USDC bridged (~$1)`},{address:`0x0Cb6F5a34ad42ec934882A05265A7d5F59b51A2f`,symbol:`USDT`,decimals:6,label:`eUSDT`,note:`USDT bridged (~$1)`},{address:`0xefD766cCb38EaF1dfd701853BFCe31359239F305`,symbol:`DAI`,decimals:18,label:`eDAI`,note:`DAI bridged (~$1)`}],Jf=new Set([`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,`0x57fde0a71132198bbec939b98976993d8d89d225`,`0x02dcdd04e3f455d838cd1249292c58f3b79e3c3c`,`0x1b71505d95ab3e7234ed2239b8ec7aa65b94ae7b`,`0x3ca80d83277e721171284667829c686527b8b3c5`,`0x8b4cfb020af9acad95ad80020ce8f67fbb2c700e`]),Yf=new Set(qf.map(e=>e.address.toLowerCase()));function Xf(e){let t=String(e||``).trim().toLowerCase();return!!t&&Jf.has(t)}function Zf(e){let t=String(e||``).trim().toLowerCase();return!!t&&Yf.has(t)}var Qf=[{address:`0xe33a5AE21F93aceC5CfC0b7b0FDBB65A0f0Be5cC`,symbol:`MOST`,decimals:18,label:`MOST`,note:`MostWanted (pump.tires)`},{address:`0xec4252e62c6de3d655ca9ce3afc12e553ebba274`,symbol:`PUMP`,decimals:18,label:`PUMP`,note:`PUMP.tires`}],$f={address:`0x6B175474E89094C44Da98b954EedeAC495271d0F`,symbol:`DAI`,decimals:18,label:`PornDai`,note:`DAI on PulseChain (state fork, not bridged eDAI)`},ep=[],tp=[],np=[],rp=[],ip=new Set(rp.map(e=>e.address.toLowerCase()));function ap(e){return!String(e||``).trim().toLowerCase()}function op(e){let t=String(e||``).trim().toLowerCase();return!!t&&ip.has(t)}var sp=[],cp=new Set(sp.map(e=>e.address.toLowerCase()));function lp(e){let t=String(e||``).trim().toLowerCase();return!!t&&cp.has(t)}function up(e,t){if(ap(t))return[...e||[]];let n=String(t||``).trim().toLowerCase();return n?[...new Set([...(e||[]).map(e=>e.toLowerCase()),n])]:[...e||[]]}function dp(e,t){let n=String(t||``).trim().toLowerCase();return(e||[]).map(e=>String(e||``).trim().toLowerCase()).filter(e=>e&&e!==n)}var fp=new Set([]);function pp(e){let t=String(e||``).trim().toLowerCase();return!!t&&fp.has(t)}function mp(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r of e){if(!r||typeof r!=`object`)continue;let e=r,i=typeof e.address==`string`?e.address.trim():``;if(!U(i))continue;let a;try{a=k(i)}catch{continue}let o=a.toLowerCase();if(n.has(o)||pp(o))continue;n.add(o);let s=Math.max(0,Math.min(36,Math.round(Number(e.decimals)||18))),c=typeof e.symbol==`string`&&e.symbol.trim()?e.symbol.trim().slice(0,16):`TOKEN`,l=typeof e.label==`string`?e.label.trim().slice(0,48):``,u=Number(e.lastUsed);t.push({address:a,symbol:c,decimals:s,label:l,lastUsed:Number.isFinite(u)?u:0})}return t.sort((e,t)=>t.lastUsed-e.lastUsed),t.slice(0,96)}function hp(e,t,n){if(!U(t)||pp(t))return e;let r;try{r=k(t)}catch{return e}let i=r.toLowerCase(),a=e.find(e=>e.address.toLowerCase()===i),o=n?.decimals===void 0?a?.decimals??18:Math.max(0,Math.min(36,Math.round(Number(n.decimals)||18))),s=n?.symbol===void 0?a?.symbol||`TOKEN`:n.symbol.trim().slice(0,16)||a?.symbol||`TOKEN`,c=n?.label===void 0?a?.label||``:n.label.trim().slice(0,48),l=e.filter(e=>e.address.toLowerCase()!==i);return mp([{address:r,symbol:s,decimals:o,label:c,lastUsed:Date.now()},...l])}function gp(e,t=[]){let n=new Set((t||[]).map(e=>String(e||``).trim().toLowerCase()).filter(Boolean)),r=e.filter(e=>n.has(e.address.toLowerCase()));return mp([...e.filter(e=>!n.has(e.address.toLowerCase())),...r])}function _p(e){let t=e.address.toLowerCase(),n=Kf.find(e=>e.address.toLowerCase()===t)||qf.find(e=>e.address.toLowerCase()===t)||Qf.find(e=>e.address.toLowerCase()===t)||(t===`0x6b175474e89094c44da98b954eedeac495271d0f`?$f:void 0)||sp.find(e=>e.address.toLowerCase()===t)||ep.find(e=>e.address.toLowerCase()===t)||tp.find(e=>e.address.toLowerCase()===t)||np.find(e=>e.address.toLowerCase()===t);return n?.label?n.label:e.label||e.symbol||Gf(e.address)}var vp=``;function yp(){return`cr_${Math.random().toString(36).slice(2,10)}`}function bp(e,t){return String(e||``).trim().slice(0,t)}function xp(e){let t=String(e.patternId||``).trim();if(!t||!Od(t))return null;let n=Number(e.usdTarget);if(!Number.isFinite(n)||n<0)return null;let r=String(e.tokenAddress||``).trim(),i=vp;if(r){if(!U(r))return null;i=k(r)}let a=Array.isArray(e.toyIds)?e.toyIds.map(e=>String(e||``).trim()).filter(Boolean).slice(0,12):[];return{id:bp(String(e.id||``),48)||yp(),coin:bp(String(e.coin||``),32)||(i?`TOKEN`:`PLS`),tokenAddress:i,patternId:t,usdTarget:Math.min(1e6,n),enabled:e.enabled===void 0||!!e.enabled,toyIds:a}}function Sp(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r of e){if(!r||typeof r!=`object`)continue;let e=xp(r);if(!e||pp(e.tokenAddress)||Xf(e.tokenAddress))continue;let i=`${e.tokenAddress.toLowerCase()}|${e.patternId}`;if(!n.has(i)&&(n.add(i),t.push(e),t.length>=3e3))break}return Fp(t)}function Cp(e){let t=[],n=new Set;for(let r of e){if(!r.enabled)continue;let e=r.tokenAddress.toLowerCase();n.has(e)||(n.add(e),t.push(r.tokenAddress))}return t}function wp(e){return(e||[]).filter(e=>e.enabled&&e.usdTarget>=0)}var Tp=[190,28,145,320,48,250,8,170,85,210,340,115],Ep={native:{skin:`pls`,hue:188},"0x95b303987a60c71504d99aa1b13b4da07b0790ab":{skin:`plsx`,hue:0},"0x2b591e99afe9f32eaa6214f7b7629768c40eeb39":{skin:`hex`,hue:172},"0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07":{skin:`stable`,hue:0},"0x0cb6f5a34ad42ec934882a05265a7d5f59b51a2f":{skin:`stable`,hue:0},"0xefd766ccb38eaf1dfd701853bfce31359239f305":{skin:`stable`,hue:0},"0xf6f8db0aba00007681f8faf16a0fda1c9b030b11":{skin:`hue`,hue:28},"0x2fa878ab3f87cc1c9737fc071108f904c0b0c95d":{skin:`hue`,hue:128},"0xec4252e62c6de3d655ca9ce3afc12e553ebba274":{skin:`pump`,hue:120},"0x6b175474e89094c44da98b954eedeac495271d0f":{skin:`hue`,hue:48}};function Dp(e){return Ep[String(e||``).trim().toLowerCase()||`native`]?.skin||`hue`}function Op(e){let t=String(e||``).trim().toLowerCase()||`native`,n=Ep[t];if(n)return n.hue;let r=0;for(let e=0;e<t.length;e++)r=r*31+t.charCodeAt(e)>>>0;return Tp[r%Tp.length]}function kp(e,t){return`${String(e||``).toLowerCase()}|${t}`}function Ap(e,t){return[...new Set([...e,...t].map(e=>String(e||``).trim()).filter(Boolean))].slice(0,12)}function jp(e,t){let n=new Set([``]);for(let t of e)for(let e of t.toyIds)n.add(e);for(let e of t||[]){let t=String(e||``).trim();t&&n.add(t)}return[...n].sort((e,t)=>e.localeCompare(t))}function Mp(e,t,n){let r=String(t||``).toLowerCase(),i=[];for(let t=0;t<e.length;t++){let a=e[t];if(a.enabled&&a.tokenAddress.toLowerCase()===r){if(n){if(a.toyIds.length&&!a.toyIds.includes(n))continue}else if(a.toyIds.length)continue;i.push({idx:t,rule:a})}}return i}function Np(e){return Array.isArray(e)?{extraToyIds:e}:e||{}}function Pp(e,t,n,r,i){let a=Mp(e,t,n);if(a.length<2)return;let o=r[t];if(o==null||!Number.isFinite(o)||o<=0)return;let s=i[t]??18,c=qd(a.map(({rule:e})=>{let t=Bp(e.usdTarget,o,s)??e.usdTarget;return{id:e.patternId,price:t}}));for(let{idx:t,rule:n}of a){let r=c[n.patternId];if(r==null)continue;let i=Bp(e[t].usdTarget,o,s);if(i!=null&&Af(i,r))continue;let a=Ud(r*o);Af(a,e[t].usdTarget)||(e[t]={...e[t],usdTarget:a})}}function Fp(e,t){let{extraToyIds:n,quotes:r,decimalsByToken:i}=Np(t),a=(e||[]).map(e=>({...e,toyIds:[...e.toyIds]})),o=[...new Set(a.map(e=>e.tokenAddress.toLowerCase()))].sort(),s=jp(a,n),c={round:Ud,step:Wd,tieBreak:Kd};for(let e of o)for(let t of s){let n=Mp(a,e,t);if(n.length<2)continue;let o=qd(n.map(({rule:e})=>({id:e.patternId,price:e.usdTarget})),c);for(let{idx:e,rule:t}of n){let n=o[t.patternId];n==null||Af(n,t.usdTarget)||(a[e]={...a[e],usdTarget:n})}if(r&&i){Pp(a,e,t,r,i);let n=qd(Mp(a,e,t).map(({rule:e})=>({id:e.patternId,price:e.usdTarget})),c);for(let{idx:r,rule:i}of Mp(a,e,t)){let e=n[i.patternId];e==null||Af(e,i.usdTarget)||(a[r]={...a[r],usdTarget:e})}}}return a}function Ip(e,t){let n=Sp(e||[]);for(let e of t){let t=xp(e);if(!t||pp(t.tokenAddress))continue;let r=kp(t.tokenAddress,t.patternId),i=n.findIndex(e=>kp(e.tokenAddress,e.patternId)===r);if(i<0){if(n.length>=3e3)continue;n.push(t);continue}let a=n[i];n[i]={...a,coin:t.coin||a.coin,usdTarget:t.usdTarget,enabled:t.enabled,toyIds:Ap(a.toyIds,t.toyIds)}}return Fp(n)}function Lp(e,t){let n=new Set((t.tokenAddresses||[]).map(e=>String(e||``).toLowerCase())),r=t.patternIds?.length?new Set(t.patternIds):null;return Sp(e||[]).filter(e=>!!(!n.has(e.tokenAddress.toLowerCase())||r&&!r.has(e.patternId)))}function Rp(e,t){let n=String(t.toyId||``).trim(),r=(e,t)=>({rules:Fp(e,n?[n]:void 0),assigned:t}),i=xp({coin:t.coin,tokenAddress:t.tokenAddress,patternId:t.patternId,usdTarget:t.usdTarget,enabled:!0,toyIds:n?[n]:[]});if(!i||pp(i.tokenAddress))return r(Sp(e||[]),!1);let a=Sp(e||[]),o=kp(i.tokenAddress,i.patternId),s=a.findIndex(e=>kp(e.tokenAddress,e.patternId)===o);if(!n)return s>=0&&a[s].toyIds.length===0?(a.splice(s,1),r(a,!1)):s>=0?(a[s]={...a[s],coin:i.coin||a[s].coin,usdTarget:i.usdTarget,enabled:!0,toyIds:[]},r(a,!0)):a.length>=3e3?r(a,!1):(a.push(i),r(a,!0));if(s<0)return a.length>=3e3?r(a,!1):(a.push(i),r(a,!0));let c=a[s];if(c.toyIds.includes(n)){let e=c.toyIds.filter(e=>e!==n);return e.length?(a[s]={...c,toyIds:e},r(a,!1)):(a.splice(s,1),r(a,!1))}return c.toyIds.length?(a[s]={...c,coin:i.coin||c.coin,usdTarget:i.usdTarget,enabled:!0,toyIds:Ap(c.toyIds,[n])},r(a,!0)):(a.splice(s,1),r(a,!1))}function zp(e,t,n){let r=String(t||``).trim();return r?wp(e||[]).filter(e=>e.patternId===r?!n||!e.toyIds.length||e.toyIds.includes(n):!1):[]}function Bp(e,t,n=18){let r=Number(e),i=Number(t);if(!Number.isFinite(r)||r<0||!Number.isFinite(i)||i<=0)return null;let a=r/i;if(!Number.isFinite(a)||a<0)return null;let o=10**Math.max(0,Math.min(8,Math.round(Number(n)||18)));return Math.round(a*o)/o}function Vp(e,t,n,r={}){let i=Number(t.amount);if(!Number.isFinite(i)||i<0)return null;let a=String(t.tokenAddress||``).trim().toLowerCase(),o=wp(e||[]).filter(e=>e.tokenAddress.toLowerCase()===a).sort((e,t)=>t.usdTarget-e.usdTarget||e.patternId.localeCompare(t.patternId));if(!o.length)return null;let s=n[a];if(s==null||!Number.isFinite(s)||s<=0)return null;let c=r[a]??18,l=[];for(let e of o){let t=Bp(e.usdTarget,s,c);t!=null&&Dd(e.patternId)&&l.push({rule:e,requiredAmount:t,usdPerUnit:s})}let u=Mf(i,l.map(e=>e.requiredAmount));return u==null?null:l.find(e=>Af(e.requiredAmount,u))??null}function Hp(e,t){let n=Number(t);if(!Number.isFinite(n)||n<0)return null;let r=wp(e||[]).sort((e,t)=>t.usdTarget-e.usdTarget||e.patternId.localeCompare(t.patternId)).filter(e=>Dd(e.patternId)),i=Mf(n,r.map(e=>e.usdTarget),{round:Ud,truncationStep:()=>.01});if(i==null)return null;let a=r.find(e=>Af(e.usdTarget,i));return a?{rule:a,requiredAmount:a.usdTarget,usdPerUnit:1}:null}function Up(e){let t=[],n=``,r=!1;for(let i=0;i<e.length;i++){let a=e[i];if(r){a===`"`?e[i+1]===`"`?(n+=`"`,i++):r=!1:n+=a;continue}if(a===`"`){r=!0;continue}if(a===`,`){t.push(n),n=``;continue}n+=a}return t.push(n),t.map(e=>e.trim())}function Wp(e){let t=String(e??``);return/[",\n\r]/.test(t)?`"${t.replace(/"/g,`""`)}"`:t}var Gp=[`coin`,`token_address`,`pattern`,`usd_target`,`enabled`,`toy_ids`];function Kp(e){let t=[Gp.join(`,`)];for(let n of e)t.push([Wp(n.coin),Wp(n.tokenAddress),Wp(n.patternId),String(n.usdTarget),n.enabled?`true`:`false`,Wp(n.toyIds.join(`|`))].join(`,`));return`${t.join(`
`)}\n`}function qp(e){let t=[],n=[];e.includeNative&&n.push({coin:e.nativeSymbol||`PLS`,tokenAddress:vp});for(let t of e.tokens)U(t.address)&&n.push({coin:bp(t.label||t.symbol||`TOKEN`,32),tokenAddress:k(t.address)});for(let r of n)for(let n of e.patterns){if(!Od(n.id))continue;let e=Number(n.price);t.push({id:yp(),coin:r.coin,tokenAddress:r.tokenAddress,patternId:n.id,usdTarget:Number.isFinite(e)&&e>=0?e:1,enabled:!0,toyIds:[]})}return Kp(t)}function Jp(e){let t=[],n=[],r=[],i=new Set,a=String(e||``).replace(/^\uFEFF/,``).split(/\r?\n/).filter(e=>e.trim().length>0);if(!a.length)return{rules:[],errors:[`CSV is empty`],warnings:n};let o=Up(a[0]).map(e=>e.toLowerCase()),s=e=>o.indexOf(e),c=s(`coin`),l=s(`token_address`),u=s(`pattern`),d=s(`usd_target`),f=s(`enabled`),p=s(`toy_ids`);if(u<0||d<0)return{rules:[],errors:[`CSV header must include pattern and usd_target columns`],warnings:n};for(let e=2;e<=a.length;e++){let o=Up(a[e-1]),s=o[u]||``,m=o[d]||``;if(!s&&!m)continue;let h=c>=0&&o[c]||``,g=l>=0&&o[l]||``,_=f>=0&&o[f]||`true`,v=p>=0&&o[p]||``,y=!/^(0|false|no|off)$/i.test(_.trim())&&_.trim()!==``;if(g&&!U(g)){t.push(`Row ${e}: invalid token_address`);continue}if(g&&pp(g)){n.push(`Row ${e}: skipped blocked tip token`);continue}if(!Od(s)){t.push(`Row ${e}: unknown pattern “${s}”`);continue}let b=Number(m);if(!Number.isFinite(b)||b<0){t.push(`Row ${e}: usd_target must be a non-negative number`);continue}let x=xp({coin:h||(g?`TOKEN`:`PLS`),tokenAddress:g?k(g):vp,patternId:s,usdTarget:b,enabled:y,toyIds:v?v.split(/[|;]/).map(e=>e.trim()).filter(Boolean):[]});if(!x){t.push(`Row ${e}: could not build rule`);continue}let S=`${x.tokenAddress.toLowerCase()}|${x.patternId}`;if(i.has(S)){n.push(`Row ${e}: duplicate ${x.coin}/${x.patternId} — keeping first`);continue}i.add(S),r.push(x)}return{rules:Fp(r),errors:t,warnings:n}}function Yp(e){if(e.existing&&e.existing.length)return Sp(e.existing);let t=e.tokenAddress&&U(e.tokenAddress)?k(e.tokenAddress):vp,n=bp(e.tokenSymbol||(t?`TOKEN`:`PLS`),32),r=[];for(let[i,a]of Object.entries(e.patternPrices||{})){let e=xp({coin:n,tokenAddress:t,patternId:i,usdTarget:Number(a)||0,enabled:!0});e&&r.push(e)}return Fp(r)}var Xp=(e=0)=>({watching:!1,blockNumber:null,lastPollAt:null,rpcCount:e,poolWatch:!1,poolCount:0});function Zp(e){let t=null;function n(n){t?.stop(),t=null,e.onStatus(Xp(Vc(n.rpcList).length))}async function r(r){let i=U(r.receive),a=dl(r.pools),o=Tl(r.bridges),s=Il(r.chainLogs),c=!!r.poolWatch&&(a.length>0||o.length>0||s.length>0);if(!i&&!c)return`missing-target`;n(r);let l=Lc[r.chainKey],u=r.tokenAddress&&U(r.tokenAddress)?r.tokenAddress:void 0,d=Vc(r.rpcList),f=d.length>0?d:Bc(r.chainKey),p=Cp(wp(r.coinRewardRules||[])),m=new Map,h=new Map;for(let e of r.savedTokens||[]){let t=e.address.toLowerCase();m.set(t,e.decimals),h.set(t,e.symbol)}u&&(m.set(u.toLowerCase(),r.tokenDecimals),h.set(u.toLowerCase(),r.tokenSymbol));let g=p.filter(e=>e&&U(e)).map(e=>{let t=e.toLowerCase();return{address:e,decimals:m.get(t)??18,symbol:h.get(t)||`TOKEN`}});t=new Wl({chain:l.chain,receiveAddress:i?r.receive:`0x0000000000000000000000000000000000000000`,rpcUrls:f,nativeSymbol:l.symbol,minAmount:r.minAmount,tokenAddress:u,tokenDecimals:r.tokenDecimals,tokenSymbol:r.tokenSymbol,watchedTokens:g,pollMs:r.pollMs,poolWatch:c,pools:c?a:[],bridges:c?o:[],chainLogs:c?s:[],confirmations:2,trustedPoolFactories:Gc,onPayment:t=>void e.onPayment(t),onStatus:e.onStatus,onError:e.onError});try{return await t.start(),`started`}catch(n){t=null,e.onStatus(Xp(f.length));let r=n instanceof Error?n.message:String(n);return e.onError(r),`failed`}}return{start:r,stop:n}}var Qp={N0104:`gemini`};function $p(e){return String(e||``).trim().toUpperCase().replace(/^LVS-?/i,``).replace(/[^A-Z0-9]/g,``)}function em(e){let t=$p(e);return t&&Qp[t]||null}function tm(e){let t=[e.modelCode,e.extra?.modelCode==null?``:String(e.extra.modelCode),e.name,e.toyType];for(let e of t){let t=em(e);if(t)return t}let n=`${e.name||``} ${e.toyType||``}`.toUpperCase().match(/\bN0\d{3}\b/);return n?em(n[0]):null}var nm=[{id:`nora`,title:`Nora`,motors:1,rotate:!0,thrust:!1,air:!1,pump:!1},{id:`lush`,title:`Lush`,motors:1,rotate:!1,thrust:!1,air:!1,pump:!1},{id:`edge`,title:`Edge`,motors:2,rotate:!1,thrust:!1,air:!1,pump:!1},{id:`gemini`,title:`Gemini`,motors:2,rotate:!1,thrust:!1,air:!1,pump:!1},{id:`max`,title:`Max`,motors:1,rotate:!1,thrust:!1,air:!0,pump:!0},{id:`hush`,title:`Hush`,motors:1,rotate:!1,thrust:!1,air:!1,pump:!1},{id:`domi`,title:`Domi`,motors:1,rotate:!1,thrust:!1,air:!1,pump:!1},{id:`osci`,title:`Osci`,motors:1,rotate:!0,thrust:!1,air:!1,pump:!1},{id:`solace`,title:`Solace`,motors:1,rotate:!1,thrust:!0,air:!1,pump:!1},{id:`ambi`,title:`Ambi`,motors:1,rotate:!1,thrust:!1,air:!1,pump:!1},{id:`ferri`,title:`Ferri`,motors:1,rotate:!1,thrust:!1,air:!1,pump:!1},{id:`gush`,title:`Gush`,motors:1,rotate:!0,thrust:!1,air:!1,pump:!1},{id:`flexer`,title:`Flexer`,motors:1,rotate:!1,thrust:!0,air:!1,pump:!1},{id:`gravity`,title:`Gravity`,motors:1,rotate:!1,thrust:!0,air:!1,pump:!1},{id:`dolce`,title:`Dolce`,motors:2,rotate:!1,thrust:!1,air:!1,pump:!1},{id:`calor`,title:`Calor`,motors:1,rotate:!1,thrust:!1,air:!1,pump:!1},{id:`hyphy`,title:`Hyphy`,motors:1,rotate:!1,thrust:!1,air:!1,pump:!1},{id:`lapis`,title:`Lapis`,motors:2,rotate:!1,thrust:!1,air:!1,pump:!1},{id:`mission`,title:`Mission`,motors:1,rotate:!0,thrust:!0,air:!1,pump:!1},{id:`vulse`,title:`Vulse`,motors:1,rotate:!0,thrust:!1,air:!1,pump:!1}],rm=new Map(nm.map(e=>[e.id,e]));function im(e){let t=String(e||``).trim().toLowerCase().replace(/\s+/g,``);return!t||t===`auto`?null:rm.get(t)||null}function am(e){let t=[`Vibrate`];if(e.motors>1)for(let n=1;n<=e.motors;n++)t.push(`Vibrate${n}`);return e.rotate&&t.push(`Rotate`),e.thrust&&t.push(`Thrust`),e.air&&t.push(`Air`),e.pump&&t.push(`Pump`),t}function om(e){return{id:e.id,name:e.title,toyType:e.id,motors:e.motors,functions:am(e),secondary:{rotate:e.rotate,air:e.air,pump:e.pump,thrust:e.thrust}}}function sm(e,t){if(!e.id)return e;let n=e.extra&&e.extra.mac!=null?String(e.extra.mac).toLowerCase().replace(/[^0-9a-f]/g,``):``,r=t&&(t[e.id]||(n?t[`mac:${n}`]:void 0))||null;if(r?.product){let t=im(r.product);if(!t){let t=(r.label||r.product).trim();return t?{...e,name:t,toyType:t.toLowerCase(),extra:{...e.extra||{},autoName:e.name,identityProduct:r.product,identityManual:!0}}:e}let n=(r.label||t.title).trim()||t.title;return{...e,name:n,toyType:t.id,motors:t.motors,functions:am(t),secondary:{rotate:t.rotate,air:t.air,pump:t.pump,thrust:t.thrust},extra:{...e.extra||{},autoName:e.name,autoType:e.toyType||null,identityProduct:t.id,identityManual:!0}}}let i=tm({name:e.name,toyType:e.toyType,modelCode:e.extra?.modelCode==null?null:String(e.extra.modelCode),extra:e.extra});if(!i)return e;let a=im(i);return a?String(e.toyType||``).toLowerCase()===a.id&&Number(e.motors)===a.motors?{...e,extra:{...e.extra||{},identityProduct:a.id,identityManual:!1}}:{...e,name:a.title,toyType:a.id,motors:a.motors,functions:am(a),secondary:{rotate:a.rotate,air:a.air,pump:a.pump,thrust:a.thrust},extra:{...e.extra||{},autoName:e.name,autoType:e.toyType||null,identityProduct:a.id,identityManual:!1}}:e}function cm(e){if(!e||typeof e!=`object`)return{};let t={};for(let[n,r]of Object.entries(e)){let e=String(n||``).trim();if(!e)continue;if(typeof r==`string`){let n=r.trim().toLowerCase();n&&n!==`auto`&&(t[e]={product:n});continue}if(!r||typeof r!=`object`)continue;let i=r,a=String(i.product||``).trim().toLowerCase();if(!a||a===`auto`)continue;let o=i.label==null?void 0:String(i.label).trim();t[e]=o?{product:a,label:o}:{product:a}}return t}function lm(e){let t=[];e.id&&t.push(e.id);let n=e.extra&&e.extra.mac!=null?String(e.extra.mac).toLowerCase().replace(/[^0-9a-f]/g,``):``;return n.length>=8&&t.push(`mac:${n}`),t}function J(e,t,n,r,i,a=70,o=`1`){return{id:e,name:t,toyType:n,f:r,vibrationMotors:i,battery:a,version:o}}var um=[J(`a10000000001`,`Lush 3`,`lush`,`Vibrate`,1,87,`3`),J(`a10000000002`,`Lush 2`,`lush`,`Vibrate`,1,81,`2`),J(`a10000000003`,`Hush 2`,`hush`,`Vibrate`,1,76,`2`),J(`a10000000004`,`Hush`,`hush`,`Vibrate`,1,70,`1`),J(`a10000000005`,`Domi 2`,`domi`,`Vibrate`,1,92,`2`),J(`a10000000006`,`Ambi`,`ambi`,`Vibrate`,1,88,`1`),J(`a10000000007`,`Osci 3`,`osci`,`Vibrate`,1,74,`3`),J(`a10000000008`,`Ferri`,`ferri`,`Vibrate`,1,69,`1`),J(`a10000000009`,`Exomoon`,`exomoon`,`Vibrate`,1,85,`1`),J(`a1000000000a`,`Diamo`,`diamo`,`Vibrate`,1,78,`1`),J(`a1000000000b`,`Flexer`,`flexer`,`Vibrate`,1,73,`1`),J(`a1000000000c`,`Vulse`,`vulse`,`Vibrate`,1,80,`1`),J(`a1000000000d`,`Hyphy`,`hyphy`,`Vibrate`,1,77,`1`),J(`a1000000000e`,`Tenera`,`tenera`,`Vibrate`,1,71,`1`),J(`a1000000000f`,`Mission 2`,`mission`,`Vibrate`,1,66,`2`),J(`a10000000010`,`Ridge`,`ridge`,`Vibrate,Thrusting`,1,68,`1`),J(`a10000000011`,`Gush 2`,`gush`,`Vibrate,Thrusting`,1,75,`2`),J(`a10000000012`,`Calor`,`calor`,`Vibrate`,1,82,`1`),J(`a10000000013`,`Gravity`,`gravity`,`Vibrate,Thrusting`,1,64,`1`),J(`a20000000001`,`Edge 2`,`edge`,`Vibrate,Vibrate1,Vibrate2`,2,64,`2`),J(`a20000000002`,`Edge`,`edge`,`Vibrate,Vibrate1,Vibrate2`,2,60,`1`),J(`a20000000003`,`Dolce`,`dolce`,`Vibrate,Vibrate1,Vibrate2`,2,71,`1`),J(`a20000000004`,`Gemini`,`gemini`,`Vibrate,Vibrate1,Vibrate2`,2,79,`1`),J(`a20000000005`,`Lapis`,`lapis`,`Vibrate,Vibrate1,Vibrate2`,2,73,`1`),J(`a20000000006`,`Sex Machine`,`sexmachine`,`Vibrate,Vibrate1,Vibrate2,Thrusting`,2,58,`1`),J(`a30000000001`,`Nora`,`nora`,`Vibrate,Rotate`,1,72,`1`),J(`a30000000002`,`Max 2`,`max`,`Vibrate,Air`,1,55,`2`),J(`a30000000003`,`Max`,`max`,`Vibrate,Air`,1,50,`1`),J(`a30000000004`,`Solace Pro`,`solace`,`Vibrate,Vibrate1,Vibrate2,Thrusting`,2,62,`2`),J(`a30000000005`,`Solace`,`solace`,`Vibrate,Thrusting`,1,59,`1`),J(`a30000000006`,`Solace Demo`,`solace`,`Vibrate,Thrusting`,1,95,`1`),J(`a40000000001`,`Lush Flex`,`lush`,`Vibrate`,1,83,`1`),J(`a40000000002`,`Edge Flex`,`edge`,`Vibrate,Vibrate1,Vibrate2`,2,67,`1`),J(`a40000000003`,`Panty Vibe`,`panty`,`Vibrate`,1,90,`1`),J(`a40000000004`,`Vulse Adjustable`,`vulse`,`Vibrate`,1,86,`1`),J(`a40000000005`,`Magnet Clips`,`clamps`,`Vibrate,Vibrate1,Vibrate2`,2,84,`1`),J(`a40000000006`,`Bloom`,`bloom`,`Vibrate`,1,65,`1`),J(`a40000000007`,`Amaze`,`amaze`,`Vibrate`,1,70,`1`)];function dm(e){let t=e.toLowerCase();return{rotate:/\brotate\b/.test(t),air:/\bair\b|absoluteair|pump/.test(t),pump:/\bpump\b|\bair\b/.test(t),thrust:/\bthrust/.test(t)}}function fm(e){return{id:`filter:${e.id}`,name:e.name,toyType:e.toyType,connected:!0,status:`catalog`,motors:e.vibrationMotors,functions:e.f.split(`,`).map(e=>e.trim()).filter(Boolean),secondary:dm(e.f),source:`preview`}}var pm=um.map(fm);function mm(e){return!e?.id||e.id===`preview`||e.id.startsWith(`filter:`)||e.source===`preview`?!1:String(e.status||``).toLowerCase()!==`catalog`}function hm(e){let t=String(e.extra?.mac||``).replace(/[^0-9A-Fa-f]/g,``).toUpperCase();if(t.length>=8)return`mac:${t}`;let n=String(e.id||``).trim().toLowerCase();if(n)return`id:${n}`;let r=String(e.name||``).toLowerCase().replace(/\s+/g,` `).trim(),i=String(e.toyType||``).toLowerCase().trim();return r?`name:${i}:${r}`:`id:`}function gm(e){let t={},n=e.extra||{};for(let e of[`mac`,`modelCode`,`firmware`,`typeRaw`]){let r=n[e];r!=null&&r!==``&&(t[e]=r)}let r=e.connected!==!1;return{id:e.id,name:e.name,nickName:e.nickName,toyType:e.toyType,connected:r,status:r?e.status||`online`:`offline`,motors:e.motors,functions:Array.isArray(e.functions)?e.functions.slice(0,12):void 0,secondary:e.secondary,extra:Object.keys(t).length?t:void 0,source:e.source===`preview`?`bluetooth`:e.source}}function _m(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r of e){if(!r||typeof r!=`object`)continue;let e=r,i=typeof e.id==`string`?e.id.trim():``,a=typeof e.name==`string`?e.name.trim():``;if(!i||!a)continue;let o=e.source===`lovense`||e.source===`intiface`||e.source===`bluetooth`||e.source===`ble`?e.source===`ble`?`bluetooth`:e.source:`bluetooth`,s=gm({id:i,name:a.slice(0,48),nickName:typeof e.nickName==`string`?e.nickName.slice(0,48):void 0,toyType:typeof e.toyType==`string`?e.toyType.slice(0,32):void 0,connected:e.connected!==!1,status:typeof e.status==`string`?e.status:void 0,motors:Number(e.motors)||void 0,functions:Array.isArray(e.functions)?e.functions.filter(e=>typeof e==`string`):void 0,secondary:e.secondary,extra:e.extra,source:o});if(!mm(s))continue;let c=hm(s);if(!n.has(c)&&(n.add(c),t.push({...s,connected:!1,status:`offline`}),t.length>=12))break}return t}function vm(e,t){let n=[],r=new Set,i=(e,t)=>{if(!e.id)return;let i=hm(e);r.has(i)||r.has(`id:${e.id.toLowerCase()}`)||(r.add(i),r.add(`id:${e.id.toLowerCase()}`),n.push(t?{...gm(e),connected:!1,status:`offline`}:e))};for(let t of e)i(t,!1);for(let e of t)mm(e)&&i(e,!0);return n}function ym(e,t){let n=e.filter(mm);return n.length?vm(n,t).map(e=>n.some(t=>t.id===e.id)?gm(e):{...gm(e),connected:!1,status:`offline`}).slice(0,12):t.map(e=>({...gm(e),connected:!1,status:`offline`}))}function bm(e,t){return JSON.stringify(e)===JSON.stringify(t)}function xm(e,t=[]){let n=vm(e.filter(e=>e.id),t),r=pm;if(!n.length)return r.slice();let i=[...n],a=new Set(n.map(e=>e.id)),o=new Set(n.map(e=>Tm(e.name,e.toyType,e.id)));for(let e of r){if(a.has(e.id))continue;let t=Tm(e.name,e.toyType,e.id);if(o.has(t))continue;let r=e.id.replace(/^filter:/,``);n.some(e=>e.id===r||e.id?.endsWith(r))||(i.push(e),o.add(t))}return i}function Sm(e,t=xm(e)){let n=e.filter(e=>mm(e)&&e.connected!==!1&&String(e.status||``).toLowerCase()!==`catalog`);if(!n.length)return[];let r=new Set(t.map(e=>e.id).filter(e=>!!e)),i=[],a=new Set;for(let e of n)if(!(!e.id||a.has(e.id))){if(r.has(e.id)){i.push(e.id),a.add(e.id);continue}i.push(e.id),a.add(e.id)}return i}function Cm(e){let t=[],n=new Set;for(let r of e)!r.id||n.has(r.id)||mm(r)&&r.connected!==!1&&String(r.status||``).toLowerCase()!==`catalog`&&(t.push(r.id),n.add(r.id));return t}function wm(e,t){let n=new Set(e.map(e=>e.id).filter(e=>!!e));if(t===null)return Cm(e);let r=t.filter(e=>n.has(e));return!r.length&&t.length>0?Cm(e):r}function Tm(e,t,n){let r=String(e||``).toLowerCase().replace(/\s+/g,` `).trim(),i=String(t||``).toLowerCase().trim();return r&&i?`${i}::${r}`:r?`n::${r}`:`id::${n||``}`}var Em=`.alert.theme-custom {
  padding: 0;
  border: none;
  background: transparent;
  box-shadow: none;
  max-width: min(32rem, 92vw);
}`,Dm=[{id:`rose-window`,name:`Rose window`,blurb:`Pink frame · gradient bar title strip`,size:`normal`,html:`<div class="t-rose">
  <div class="t-rose-bar">{{brand}}</div>
  <div class="t-rose-body">
    <div class="t-rose-eye">{{eyebrow}}</div>
    <div class="t-rose-title">{{title}}</div>
    <div class="t-rose-sub">{{subtitle}}</div>
  </div>
</div>`,css:`${Em}
.t-rose {
  border: 3px solid #f0a0c0;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #2a1020 0%, #120818 100%);
  box-shadow: 0 12px 40px rgba(0,0,0,.55), 0 0 0 1px rgba(255,180,210,.2);
}
.t-rose-bar {
  padding: .35rem .75rem;
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: #120818;
  background: linear-gradient(90deg, #f0a0c0, #ffd0e0);
  min-height: 1.4rem;
}
.t-rose-bar:empty { display: none; }
.t-rose-body { padding: .85rem 1.1rem 1rem; }
.t-rose-eye {
  font-size: .7rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #f0a0c0;
  font-weight: 700;
  margin-bottom: .25rem;
}
.t-rose-title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 800;
  color: #fff5fa;
  line-height: 1.1;
}
.t-rose-sub {
  margin-top: .35rem;
  font-size: .95rem;
  color: #e0b0c8;
  font-weight: 600;
}
.t-rose-sub:empty { display: none; }
`},{id:`neon-cyan`,name:`Neon cyan`,blurb:`Cyber glow · thin neon rim`,size:`normal`,html:`<div class="t-neon">
  <div class="t-neon-brand">{{brand}}</div>
  <div class="t-neon-eye">{{eyebrow}}</div>
  <div class="t-neon-title">{{title}}</div>
  <div class="t-neon-sub">{{subtitle}}</div>
</div>`,css:`${Em}
.t-neon {
  padding: 1rem 1.25rem 1.1rem;
  border-radius: 4px;
  border: 1px solid #3de0ff;
  background: rgba(2, 12, 22, 0.92);
  box-shadow:
    0 0 0 1px rgba(61, 224, 255, 0.25),
    0 0 28px rgba(0, 200, 255, 0.35),
    inset 0 0 40px rgba(0, 120, 180, 0.12);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
}
.t-neon-brand {
  font-size: .7rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: #3de0ff;
  margin-bottom: .35rem;
  text-shadow: 0 0 12px rgba(61, 224, 255, 0.8);
}
.t-neon-brand:empty { display: none; }
.t-neon-eye {
  font-size: .65rem;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: #7a9aac;
  margin-bottom: .3rem;
}
.t-neon-title {
  font-size: clamp(1.55rem, 3.6vw, 2.3rem);
  font-weight: 700;
  color: #e8fbff;
  text-shadow: 0 0 18px rgba(61, 224, 255, 0.55);
  line-height: 1.1;
}
.t-neon-sub {
  margin-top: .4rem;
  font-size: .88rem;
  color: #7ec8d8;
}
.t-neon-sub:empty { display: none; }
`},{id:`gold-vip`,name:`Gold VIP`,blurb:`Plaque · heavy gold edge`,size:`large`,html:`<div class="t-vip">
  <div class="t-vip-seal">{{eyebrow}}</div>
  <div class="t-vip-brand">{{brand}}</div>
  <div class="t-vip-title">{{title}}</div>
  <div class="t-vip-sub">{{subtitle}}</div>
</div>`,css:`${Em}
.t-vip {
  padding: 1.15rem 1.5rem 1.2rem;
  border-radius: 6px;
  border: 2px solid #e8c060;
  background:
    linear-gradient(145deg, rgba(48, 36, 12, 0.95), rgba(18, 14, 6, 0.96));
  box-shadow:
    0 0 0 4px rgba(0,0,0,.35),
    0 16px 40px rgba(80, 50, 0, 0.45),
    inset 0 1px 0 rgba(255, 230, 160, 0.25);
  text-align: center;
}
.t-vip-seal {
  display: inline-block;
  padding: .2rem .65rem;
  margin-bottom: .45rem;
  font-size: .62rem;
  font-weight: 800;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: #1a1204;
  background: linear-gradient(90deg, #c9a045, #f0d878, #c9a045);
  border-radius: 999px;
}
.t-vip-brand {
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #f0d878;
  margin-bottom: .35rem;
}
.t-vip-brand:empty { display: none; }
.t-vip-title {
  font-size: clamp(1.75rem, 4vw, 2.6rem);
  font-weight: 800;
  color: #fff8e8;
  line-height: 1.05;
  text-shadow: 0 2px 0 rgba(0,0,0,.4);
}
.t-vip-sub {
  margin-top: .45rem;
  font-size: .95rem;
  color: #d4b878;
  font-weight: 600;
}
.t-vip-sub:empty { display: none; }
`},{id:`soft-glass`,name:`Soft glass`,blurb:`Frosted panel · quiet stream chrome`,size:`normal`,html:`<div class="t-glass">
  <div class="t-glass-brand">{{brand}}</div>
  <div class="t-glass-eye">{{eyebrow}}</div>
  <div class="t-glass-title">{{title}}</div>
  <div class="t-glass-sub">{{subtitle}}</div>
</div>`,css:`${Em}
.t-glass {
  padding: 1rem 1.35rem 1.05rem;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.22);
  background: rgba(18, 22, 32, 0.55);
  backdrop-filter: blur(14px);
  box-shadow: 0 12px 36px rgba(0,0,0,.35);
}
.t-glass-brand {
  font-size: .78rem;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
  margin-bottom: .2rem;
}
.t-glass-brand:empty { display: none; }
.t-glass-eye {
  font-size: .68rem;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(200, 220, 240, 0.75);
  margin-bottom: .3rem;
}
.t-glass-title {
  font-size: clamp(1.5rem, 3.4vw, 2.15rem);
  font-weight: 700;
  color: #f4f7fb;
  line-height: 1.12;
}
.t-glass-sub {
  margin-top: .35rem;
  font-size: .92rem;
  color: rgba(210, 220, 230, 0.85);
}
.t-glass-sub:empty { display: none; }
`},{id:`lower-third`,name:`Lower third`,blurb:`News ticker strip · bottom of frame`,position:`bottom`,size:`compact`,html:`<div class="t-lt">
  <div class="t-lt-accent"></div>
  <div class="t-lt-inner">
    <span class="t-lt-eye">{{eyebrow}}</span>
    <span class="t-lt-brand">{{brand}}</span>
    <span class="t-lt-title">{{title}}</span>
    <span class="t-lt-sub">{{subtitle}}</span>
  </div>
</div>`,css:`${Em}
.alert.theme-custom { max-width: min(48rem, 94vw); }
.t-lt {
  display: flex;
  min-height: 3.1rem;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0,0,0,.5);
}
.t-lt-accent {
  width: 8px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #ff4d6d, #c9184a);
}
.t-lt-inner {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: .35rem .75rem;
  padding: .55rem 1rem;
  background: linear-gradient(90deg, #0c1018 0%, #141c28 100%);
}
.t-lt-eye {
  font-size: .65rem;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: #ff6b88;
}
.t-lt-brand {
  font-size: .75rem;
  font-weight: 700;
  color: #9eb0c4;
}
.t-lt-brand:empty { display: none; }
.t-lt-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
}
.t-lt-sub {
  font-size: .85rem;
  color: #8a9bb0;
  width: 100%;
}
.t-lt-sub:empty { display: none; }
`},{id:`pulse-coin`,name:`Pulse coin`,blurb:`Round badge · amount-first`,size:`compact`,html:`<div class="t-coin">
  <div class="t-coin-ring">
    <div class="t-coin-eye">{{eyebrow}}</div>
    <div class="t-coin-amt">{{amount}}</div>
    <div class="t-coin-sym">{{symbol}}</div>
  </div>
  <div class="t-coin-side">
    <div class="t-coin-brand">{{brand}}</div>
    <div class="t-coin-sub">{{subtitle}}</div>
  </div>
</div>`,css:`${Em}
.t-coin {
  display: flex;
  align-items: center;
  gap: .85rem;
  padding: .35rem .5rem .35rem .35rem;
  border-radius: 999px;
  background: rgba(6, 16, 28, 0.9);
  border: 1px solid rgba(0, 200, 255, 0.4);
  box-shadow: 0 10px 32px rgba(0,40,80,.45);
}
.t-coin-ring {
  width: 5.5rem;
  height: 5.5rem;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 35% 30%, #3a8fd0, #062038 70%);
  border: 3px solid #6ec8ff;
  box-shadow: inset 0 0 18px rgba(0,0,0,.4), 0 0 16px rgba(0,180,255,.35);
}
.t-coin-eye {
  font-size: .55rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #8fd4ff;
  font-weight: 700;
}
.t-coin-amt {
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
}
.t-coin-sym {
  font-size: .65rem;
  font-weight: 700;
  color: #6ec8ff;
}
.t-coin-side { padding-right: .65rem; min-width: 0; }
.t-coin-brand {
  font-size: .8rem;
  font-weight: 700;
  color: #a8d8f0;
}
.t-coin-brand:empty { display: none; }
.t-coin-sub {
  font-size: .85rem;
  color: #7aa8c0;
  margin-top: .15rem;
}
.t-coin-sub:empty { display: none; }
`},{id:`chat-bubble`,name:`Chat bubble`,blurb:`Speech balloon · casual live chat feel`,size:`normal`,html:`<div class="t-bub">
  <div class="t-bub-brand">{{brand}}</div>
  <div class="t-bub-eye">{{eyebrow}}</div>
  <div class="t-bub-title">{{title}}</div>
  <div class="t-bub-sub">{{subtitle}}</div>
  <div class="t-bub-tail" aria-hidden="true"></div>
</div>`,css:`${Em}
.t-bub {
  position: relative;
  padding: 1rem 1.2rem 1.15rem;
  border-radius: 18px 18px 18px 4px;
  background: #1e2430;
  border: 2px solid #3d4a60;
  box-shadow: 0 10px 28px rgba(0,0,0,.4);
  max-width: min(26rem, 88vw);
}
.t-bub-brand {
  font-size: .78rem;
  font-weight: 700;
  color: #8eb4ff;
  margin-bottom: .15rem;
}
.t-bub-brand:empty { display: none; }
.t-bub-eye {
  font-size: .65rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #8898b0;
  margin-bottom: .25rem;
}
.t-bub-title {
  font-size: clamp(1.4rem, 3.2vw, 2rem);
  font-weight: 800;
  color: #f0f4fa;
  line-height: 1.15;
}
.t-bub-sub {
  margin-top: .35rem;
  font-size: .9rem;
  color: #a0b0c8;
}
.t-bub-sub:empty { display: none; }
.t-bub-tail {
  position: absolute;
  left: 18px;
  bottom: -12px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 12px solid #3d4a60;
}
.t-bub-tail::after {
  content: "";
  position: absolute;
  left: -8px;
  top: -14px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid #1e2430;
}
`},{id:`ticket-stub`,name:`Ticket stub`,blurb:`Perforated admit-one look`,size:`normal`,html:`<div class="t-tix">
  <div class="t-tix-main">
    <div class="t-tix-eye">{{eyebrow}}</div>
    <div class="t-tix-title">{{title}}</div>
    <div class="t-tix-sub">{{subtitle}}</div>
  </div>
  <div class="t-tix-side">
    <div class="t-tix-admit">ADMIT</div>
    <div class="t-tix-brand">{{brand}}</div>
  </div>
</div>`,css:`${Em}
.t-tix {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  background: #f4efe4;
  color: #1a1410;
  box-shadow: 0 12px 32px rgba(0,0,0,.4);
  font-family: "Segoe UI", system-ui, sans-serif;
}
.t-tix-main {
  flex: 1;
  padding: .9rem 1.1rem;
  border-right: 2px dashed #b8a890;
  min-width: 0;
}
.t-tix-eye {
  font-size: .65rem;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: #a06040;
  margin-bottom: .25rem;
}
.t-tix-title {
  font-size: clamp(1.35rem, 3vw, 1.9rem);
  font-weight: 800;
  line-height: 1.1;
  color: #1a1410;
}
.t-tix-sub {
  margin-top: .3rem;
  font-size: .85rem;
  color: #5a5048;
}
.t-tix-sub:empty { display: none; }
.t-tix-side {
  width: 5.5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .35rem;
  background: #1a1410;
  color: #f4efe4;
  padding: .5rem;
  text-align: center;
}
.t-tix-admit {
  font-size: .6rem;
  font-weight: 800;
  letter-spacing: .18em;
  color: #e8c060;
}
.t-tix-brand {
  font-size: .7rem;
  font-weight: 700;
  word-break: break-word;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  max-height: 5rem;
}
.t-tix-brand:empty::after { content: "ONE"; writing-mode: horizontal-tb; transform: none; }
`},{id:`matrix-term`,name:`Matrix term`,blurb:`Terminal green · on-chain vibe`,size:`normal`,html:`<div class="t-mat">
  <div class="t-mat-head">root@pulse · tip</div>
  <div class="t-mat-line"><span class="t-mat-k">brand</span> {{brand}}</div>
  <div class="t-mat-line"><span class="t-mat-k">type</span> {{eyebrow}}</div>
  <div class="t-mat-line t-mat-hi"><span class="t-mat-k">amt</span> {{title}}</div>
  <div class="t-mat-line"><span class="t-mat-k">note</span> {{subtitle}}</div>
  <div class="t-mat-line"><span class="t-mat-k">src</span> {{source}}</div>
</div>`,css:`${Em}
.t-mat {
  padding: .85rem 1rem;
  border: 1px solid #1a5c2a;
  border-radius: 2px;
  background: #040a06;
  color: #3dff7a;
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: .88rem;
  box-shadow: 0 0 24px rgba(20, 120, 50, 0.25), inset 0 0 40px rgba(0,40,10,.4);
  line-height: 1.45;
}
.t-mat-head {
  color: #1a8c40;
  margin-bottom: .45rem;
  padding-bottom: .35rem;
  border-bottom: 1px dashed #1a5c2a;
  font-size: .75rem;
}
.t-mat-k {
  display: inline-block;
  width: 3.2rem;
  color: #1a8c40;
  margin-right: .35rem;
}
.t-mat-hi { font-size: 1.15rem; font-weight: 700; color: #7dffb0; text-shadow: 0 0 10px rgba(61,255,122,.4); }
.t-mat-line { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
`},{id:`arcade-cab`,name:`Arcade cab`,blurb:`8‑bit score popup energy`,size:`normal`,html:`<div class="t-arc">
  <div class="t-arc-score">HIGH SCORE</div>
  <div class="t-arc-brand">{{brand}}</div>
  <div class="t-arc-title">{{title}}</div>
  <div class="t-arc-sub">{{subtitle}}</div>
  <div class="t-arc-eye">{{eyebrow}}</div>
</div>`,css:`${Em}
.t-arc {
  padding: 1rem 1.15rem;
  border: 4px solid #fff;
  outline: 4px solid #ff2e63;
  background: #0d0221;
  box-shadow: 8px 8px 0 #08f7fe;
  text-align: center;
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  image-rendering: pixelated;
}
.t-arc-score {
  font-size: .65rem;
  letter-spacing: .25em;
  color: #ff2e63;
  margin-bottom: .35rem;
}
.t-arc-brand {
  font-size: .75rem;
  color: #08f7fe;
  margin-bottom: .25rem;
}
.t-arc-brand:empty { display: none; }
.t-arc-title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  text-shadow: 3px 3px 0 #ff2e63;
}
.t-arc-sub {
  margin-top: .4rem;
  font-size: .8rem;
  color: #b0a0d0;
}
.t-arc-sub:empty { display: none; }
.t-arc-eye {
  margin-top: .55rem;
  font-size: .6rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: #08f7fe;
}
`},{id:`polaroid`,name:`Polaroid`,blurb:`Photo frame · caption under shot`,size:`normal`,html:`<div class="t-pol">
  <div class="t-pol-shot">
    <div class="t-pol-eye">{{eyebrow}}</div>
    <div class="t-pol-title">{{title}}</div>
  </div>
  <div class="t-pol-cap">
    <span class="t-pol-brand">{{brand}}</span>
    <span class="t-pol-sub">{{subtitle}}</span>
  </div>
</div>`,css:`${Em}
.t-pol {
  width: min(18rem, 78vw);
  padding: .65rem .65rem 0;
  background: #f2f0ea;
  box-shadow: 0 14px 36px rgba(0,0,0,.45), 0 0 0 1px rgba(0,0,0,.08);
  transform: rotate(-1.5deg);
}
.t-pol-shot {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(160deg, #1a2838, #0c141c);
  color: #fff;
  padding: 1rem;
  text-align: center;
}
.t-pol-eye {
  font-size: .65rem;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: #8ab4d0;
  margin-bottom: .4rem;
}
.t-pol-title {
  font-size: clamp(1.4rem, 3.2vw, 1.9rem);
  font-weight: 800;
  line-height: 1.1;
}
.t-pol-cap {
  min-height: 2.6rem;
  padding: .65rem .4rem .85rem;
  display: flex;
  flex-direction: column;
  gap: .15rem;
  text-align: center;
  color: #2a241c;
  font-family: Georgia, "Times New Roman", serif;
}
.t-pol-brand { font-size: .85rem; font-weight: 700; }
.t-pol-brand:empty { display: none; }
.t-pol-sub { font-size: .78rem; color: #5a5048; }
.t-pol-sub:empty { display: none; }
`},{id:`ribbon-banner`,name:`Ribbon banner`,blurb:`Wide streamer ribbon · top or bottom`,position:`top`,size:`compact`,html:`<div class="t-rib">
  <div class="t-rib-fold" aria-hidden="true"></div>
  <div class="t-rib-main">
    <span class="t-rib-eye">{{eyebrow}}</span>
    <span class="t-rib-title">{{title}}</span>
    <span class="t-rib-sub">{{subtitle}}</span>
  </div>
  <div class="t-rib-fold t-rib-fold-r" aria-hidden="true"></div>
</div>`,css:`${Em}
.alert.theme-custom { max-width: min(40rem, 92vw); }
.t-rib {
  display: flex;
  align-items: stretch;
  filter: drop-shadow(0 8px 16px rgba(0,0,0,.4));
}
.t-rib-fold {
  width: 18px;
  background: #7a1238;
  clip-path: polygon(100% 0, 100% 100%, 0 50%);
}
.t-rib-fold-r {
  clip-path: polygon(0 0, 0 100%, 100% 50%);
  background: #7a1238;
}
.t-rib-main {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: .35rem .75rem;
  padding: .55rem 1.25rem;
  background: linear-gradient(180deg, #e83e6e, #b21e4b);
  color: #fff;
  text-align: center;
}
.t-rib-eye {
  font-size: .65rem;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
  opacity: .9;
}
.t-rib-title {
  font-size: 1.2rem;
  font-weight: 800;
}
.t-rib-sub {
  font-size: .8rem;
  opacity: .88;
  width: 100%;
}
.t-rib-sub:empty { display: none; }
`},{id:`esports-hud`,name:`Esports HUD`,blurb:`Angular competitive banner`,size:`normal`,html:`<div class="t-es">
  <div class="t-es-tag">{{eyebrow}}</div>
  <div class="t-es-body">
    <div class="t-es-brand">{{brand}}</div>
    <div class="t-es-title">{{title}}</div>
    <div class="t-es-sub">{{subtitle}}</div>
  </div>
</div>`,css:`${Em}
.t-es {
  display: flex;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
  background: linear-gradient(120deg, #0a0e16, #121a28);
  border: 1px solid #3d8bfd;
  box-shadow: 0 0 0 1px rgba(61,139,253,.2), 0 12px 32px rgba(0,0,0,.5);
}
.t-es-tag {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  padding: .5rem .35rem;
  background: #3d8bfd;
  color: #041018;
  font-size: .65rem;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
  text-align: center;
}
.t-es-body {
  padding: .85rem 1.25rem .9rem 1rem;
  min-width: 0;
}
.t-es-brand {
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: #3d8bfd;
  margin-bottom: .2rem;
}
.t-es-brand:empty { display: none; }
.t-es-title {
  font-size: clamp(1.45rem, 3.3vw, 2.1rem);
  font-weight: 800;
  color: #f0f6ff;
  line-height: 1.1;
}
.t-es-sub {
  margin-top: .3rem;
  font-size: .88rem;
  color: #8aa4c0;
}
.t-es-sub:empty { display: none; }
`},{id:`chain-receipt`,name:`Chain receipt`,blurb:`Mini tx receipt · explorer-ish`,size:`normal`,html:`<div class="t-rx">
  <div class="t-rx-top">
    <span class="t-rx-ok">CONFIRMED</span>
    <span class="t-rx-eye">{{eyebrow}}</span>
  </div>
  <div class="t-rx-title">{{title}}</div>
  <div class="t-rx-row"><span>Brand</span><span>{{brand}}</span></div>
  <div class="t-rx-row"><span>Detail</span><span>{{subtitle}}</span></div>
  <div class="t-rx-row"><span>Source</span><span>{{source}}</span></div>
  <div class="t-rx-row"><span>Asset</span><span>{{amount}} {{symbol}}</span></div>
</div>`,css:`${Em}
.t-rx {
  width: min(22rem, 90vw);
  padding: .9rem 1rem;
  border-radius: 8px;
  background: #0f1419;
  border: 1px solid #2a3544;
  box-shadow: 0 12px 32px rgba(0,0,0,.5);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: .8rem;
  color: #c8d4e0;
}
.t-rx-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .55rem;
}
.t-rx-ok {
  font-size: .65rem;
  font-weight: 800;
  letter-spacing: .1em;
  color: #0d1a12;
  background: #3dff9a;
  padding: .15rem .4rem;
  border-radius: 3px;
}
.t-rx-eye {
  font-size: .65rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #6a7a8c;
}
.t-rx-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: .65rem;
  font-family: "Segoe UI", system-ui, sans-serif;
}
.t-rx-row {
  display: flex;
  justify-content: space-between;
  gap: .75rem;
  padding: .28rem 0;
  border-top: 1px solid #1e2834;
}
.t-rx-row span:first-child { color: #6a7a8c; }
.t-rx-row span:last-child {
  text-align: right;
  max-width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`},{id:`heart-drop`,name:`Heart drop`,blurb:`Cute tip heart · soft pastel`,size:`compact`,html:`<div class="t-hrt">
  <div class="t-hrt-icon" aria-hidden="true">♥</div>
  <div class="t-hrt-body">
    <div class="t-hrt-eye">{{eyebrow}}</div>
    <div class="t-hrt-title">{{title}}</div>
    <div class="t-hrt-sub">{{subtitle}}</div>
    <div class="t-hrt-brand">{{brand}}</div>
  </div>
</div>`,css:`${Em}
.t-hrt {
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: .7rem .95rem .7rem .75rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #fff0f5, #ffe4ec);
  border: 2px solid #ff9ebd;
  box-shadow: 0 10px 28px rgba(180, 40, 90, 0.25);
  color: #4a1830;
}
.t-hrt-icon {
  width: 2.6rem;
  height: 2.6rem;
  flex-shrink: 0;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.25rem;
  color: #fff;
  background: linear-gradient(145deg, #ff6b9d, #e83e6e);
  box-shadow: 0 4px 12px rgba(232, 62, 110, 0.4);
}
.t-hrt-eye {
  font-size: .62rem;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #c04070;
}
.t-hrt-title {
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.15;
  color: #3a1228;
}
.t-hrt-sub {
  font-size: .8rem;
  color: #8a4060;
  margin-top: .1rem;
}
.t-hrt-sub:empty { display: none; }
.t-hrt-brand {
  font-size: .72rem;
  font-weight: 700;
  color: #b05070;
  margin-top: .1rem;
}
.t-hrt-brand:empty { display: none; }
`},{id:`midnight-card`,name:`Midnight card`,blurb:`Deep card · left accent rail`,size:`normal`,html:`<div class="t-mid">
  <div class="t-mid-rail"></div>
  <div class="t-mid-body">
    <div class="t-mid-brand">{{brand}}</div>
    <div class="t-mid-eye">{{eyebrow}}</div>
    <div class="t-mid-title">{{title}}</div>
    <div class="t-mid-sub">{{subtitle}}</div>
  </div>
</div>`,css:`${Em}
.t-mid {
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  background: #12141c;
  border: 1px solid #2a2e3c;
  box-shadow: 0 14px 36px rgba(0,0,0,.5);
}
.t-mid-rail {
  width: 6px;
  background: linear-gradient(180deg, #7c5cff, #3d8bfd);
  flex-shrink: 0;
}
.t-mid-body { padding: .95rem 1.2rem 1rem; min-width: 0; }
.t-mid-brand {
  font-size: .78rem;
  font-weight: 700;
  color: #9b8cff;
  margin-bottom: .15rem;
}
.t-mid-brand:empty { display: none; }
.t-mid-eye {
  font-size: .65rem;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: #6a7088;
  margin-bottom: .3rem;
}
.t-mid-title {
  font-size: clamp(1.5rem, 3.4vw, 2.2rem);
  font-weight: 800;
  color: #eef0f8;
  line-height: 1.1;
}
.t-mid-sub {
  margin-top: .35rem;
  font-size: .9rem;
  color: #8a90a8;
}
.t-mid-sub:empty { display: none; }
`},{id:`minimal-sash`,name:`Minimal sash`,blurb:`Bare amount + one line · low distraction`,size:`compact`,html:`<div class="t-min">
  <span class="t-min-eye">{{eyebrow}}</span>
  <span class="t-min-title">{{title}}</span>
  <span class="t-min-sub">{{subtitle}}</span>
</div>`,css:`${Em}
.t-min {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: .35rem .65rem;
  padding: .45rem .9rem;
  border-radius: 999px;
  background: rgba(0,0,0,0.72);
  border: 1px solid rgba(255,255,255,0.18);
  box-shadow: 0 8px 24px rgba(0,0,0,.4);
}
.t-min-eye {
  font-size: .65rem;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
}
.t-min-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
}
.t-min-sub {
  font-size: .8rem;
  color: rgba(255,255,255,0.65);
}
.t-min-sub:empty { display: none; }
`},{id:`fire-streak`,name:`Fire streak`,blurb:`Warm ember edge · big tip energy`,size:`large`,html:`<div class="t-fire">
  <div class="t-fire-eye">{{eyebrow}}</div>
  <div class="t-fire-brand">{{brand}}</div>
  <div class="t-fire-title">{{title}}</div>
  <div class="t-fire-sub">{{subtitle}}</div>
</div>`,css:`${Em}
.t-fire {
  padding: 1.15rem 1.4rem 1.2rem;
  border-radius: 14px;
  background:
    linear-gradient(160deg, #2a0c08 0%, #120604 55%, #1a0a04 100%);
  border: 1px solid #ff6b35;
  box-shadow:
    0 0 0 1px rgba(255, 120, 40, 0.25),
    0 0 48px rgba(255, 80, 20, 0.28),
    0 16px 40px rgba(0,0,0,.5);
  text-align: center;
}
.t-fire-eye {
  font-size: .68rem;
  font-weight: 800;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: #ff9a5c;
  margin-bottom: .25rem;
}
.t-fire-brand {
  font-size: .8rem;
  font-weight: 700;
  color: #ffc090;
  margin-bottom: .3rem;
}
.t-fire-brand:empty { display: none; }
.t-fire-title {
  font-size: clamp(1.9rem, 4.5vw, 2.8rem);
  font-weight: 900;
  color: #fff5ee;
  line-height: 1.05;
  text-shadow: 0 0 24px rgba(255, 100, 40, 0.55);
}
.t-fire-sub {
  margin-top: .4rem;
  font-size: 1rem;
  color: #e0a080;
  font-weight: 600;
}
.t-fire-sub:empty { display: none; }
`}];function Om(e){return Dm.find(t=>t.id===e)}Dm[0].html,Dm[0].css;var km={position:`bottom`,theme:`cyan`,size:`normal`,holdSec:7,eyebrow:`Tip`,brand:``,showPattern:!0,showPoolAlerts:!0,showPoolLabel:!0,showDryRun:!0,minAmount:0,walletMinAmount:0,poolMinAmount:0,showStatus:!1,showEco:!0,customCss:``,customHtml:``},Am=new Set([`bottom`,`top`,`bottom-left`,`bottom-right`,`top-left`,`top-right`]),jm=new Set([`cyan`,`pink`,`gold`,`soft`,`custom`]),Mm=new Set([`compact`,`normal`,`large`]),Nm=24e3,Pm=12e3;function Fm(e,t){return String(e??``).slice(0,t)}function Im(e){let t=e&&typeof e==`object`&&!Array.isArray(e)?e:{},n=String(t.position||``),r=String(t.theme||``),i=String(t.size||``),a=Math.round(Number(t.holdSec));Number.isFinite(a)||(a=km.holdSec),a=Math.min(20,Math.max(2,a));let o=Number(t.minAmount);(!Number.isFinite(o)||o<0)&&(o=0);let s=Number(t.walletMinAmount);(!Number.isFinite(s)||s<0)&&(s=o);let c=Number(t.poolMinAmount);(!Number.isFinite(c)||c<0)&&(c=0);let l=Fm(t.customHtml,Pm),u=Fm(t.customCss,Nm),d=l.trim().length>0,f=jm.has(r)?r:km.theme;return d?f=`custom`:f===`custom`&&(f=`cyan`),{position:Am.has(n)?n:km.position,theme:f,size:Mm.has(i)?i:km.size,holdSec:a,eyebrow:String(t.eyebrow??km.eyebrow).trim().slice(0,32),brand:String(t.brand??``).trim().slice(0,48),showPattern:t.showPattern===void 0||!!t.showPattern,showPoolAlerts:t.showPoolAlerts===void 0||!!t.showPoolAlerts,showPoolLabel:t.showPoolLabel===void 0||!!t.showPoolLabel,showDryRun:t.showDryRun===void 0||!!t.showDryRun,minAmount:s,walletMinAmount:s,poolMinAmount:c,showStatus:!!t.showStatus,showEco:t.showEco===void 0||!!t.showEco,customCss:u,customHtml:l}}function Lm(e){return String(e.customHtml||``).trim().length>0}function Rm(e){if(!Number.isInteger(e)||e<=0)throw Error(`Invalid chain id`)}function zm(e,t=`address`){let n=String(e||``).trim();if(!U(n))throw Error(`Invalid ${t}`);return k(n)}function Bm(e,t=48){let n=String(e||``).trim().replace(/\s+/g,` `).slice(0,t);return!n||/[\u0000-\u001f]/.test(n)?``:n}function Vm(e,t){let n=[],r=Bm(t?.tokenSymbol,24),i=Bm(t?.networkName,48);return r&&n.push(`symbol=${encodeURIComponent(r)}`),i&&n.push(`network=${encodeURIComponent(i)}`),n.length?`${e}${e.includes(`?`)?`&`:`?`}${n.join(`&`)}`:e}function Hm(e,t){let[n,r=``]=e.split(`.`);if(r.length<=t)return e;let i=r.slice(0,t);if(!(r.charCodeAt(t)>=53)){let e=i.replace(/0+$/,``);return e?`${n}.${e}`:n||`0`}let a=`${n.replace(/^0+/,``)||`0`}${i}`,o=(BigInt(a)+1n).toString().padStart(t+1,`0`);if(t===0)return o;let s=o.slice(0,o.length-t)||`0`,c=o.slice(o.length-t).replace(/0+$/,``);return c?`${s}.${c}`:s}function Um(e,t){if(!Number.isInteger(t)||t<0||t>36)throw Error(`Invalid decimals`);let n;if(typeof e==`number`){if(!Number.isFinite(e))throw Error(`Invalid amount`);n=Number.isInteger(e)?String(e):e.toFixed(Math.min(t,20)).replace(/\.?0+$/,``)}else n=String(e).trim().replace(/,/g,``);if(!n||n===`.`||!/^\d+(\.\d+)?$/.test(n))throw Error(`Invalid amount`);let[r,i=``]=Hm(n,t).split(`.`);if(i.length>t)throw Error(`Too many fractional digits`);let a=`${r.replace(/^0+(?=\d)/,``)||`0`}${i.padEnd(t,`0`)}`.replace(/^0+(?=\d)/,``)||`0`,o=BigInt(a);if(o<=0n)throw Error(`Amount must be positive`);return o}function Wm(e){let t=zm(e.address);if(Rm(e.chainId),e.valueBeats<=0n)throw Error(`Amount must be positive`);return`ethereum:${t}@${e.chainId}?value=${e.valueBeats.toString()}`}function Gm(e){let t=zm(e.tokenAddress,`token address`),n=zm(e.receiveAddress,`receive address`);if(Rm(e.chainId),e.amountRaw<=0n)throw Error(`Amount must be positive`);return`ethereum:${t}@${e.chainId}/transfer?address=${n}&uint256=${e.amountRaw.toString()}`}function Km(e){let t=String(e||``).trim().match(/^ethereum:(0x[a-fA-F0-9]{40})\b/i);if(!t)return null;try{return k(t[1])}catch{return null}}function qm(e){let t=String(e||``).trim().match(/^ethereum:(0x[a-fA-F0-9]{40})@(\d+)\/transfer\?(.+)$/i);if(!t)return null;let n=Number(t[2]);if(!Number.isInteger(n)||n<=0)return null;let r;try{r=k(t[1])}catch{return null}let i=new URLSearchParams(t[3]),a=String(i.get(`address`)||``).trim(),o=String(i.get(`uint256`)||``).trim();if(!U(a)||!/^[0-9]+$/.test(o))return null;let s;try{s=k(a)}catch{return null}let c;try{c=BigInt(o)}catch{return null}return c<=0n||r===s?null:{token:r,receive:s,amountRaw:c,chainId:n}}function Jm(e){let t=String(e||``).trim().match(/[?&]value=([0-9]+)(?:&|$)/i);if(!t)return null;try{let e=BigInt(t[1]);return e>0n?e:null}catch{return null}}function Ym(e,t){let n=String(e||``).trim();if(!n.startsWith(`ethereum:`))return!1;try{let e=k(t),r=qm(n);return r?r.receive===e:/\/transfer\b/i.test(n)||Km(n)!==e?!1:Jm(n)!==null}catch{return!1}}function Xm(e){let t=zm(e.receiveAddress,`receive address`),n=Um(e.amountHuman,e.decimals),r=(e.tokenAddress||``).trim(),i;if(i=r?Gm({tokenAddress:r,receiveAddress:t,chainId:e.chainId,amountRaw:n}):Wm({address:t,chainId:e.chainId,valueBeats:n}),i=Vm(i,{tokenSymbol:e.tokenSymbol,networkName:e.networkName}),!Ym(i,t))throw Error(`Payment URI destination is not the receive wallet`);if(r){let e=qm(i);if(!e||e.amountRaw!==n)throw Error(`ERC-20 payment URI missing amount`)}else if(!Jm(i))throw Error(`Native payment URI missing amount`);return i}function Zm(e){try{return Xm(e)}catch{return null}}var Qm=/0x[a-fA-F0-9]{40}/gi;function $m(e){let t=new Set,n=[],r=new RegExp(Qm.source,`gi`),i;for(;(i=r.exec(e))!==null;){let e=i[0].toLowerCase();t.has(e)||(t.add(e),n.push(e))}return n}function eh(e){return/^https?:\/\//i.test(String(e||``).trim())}function th(e,t){let n=String(t||``).trim();if(!U(n))return!1;let r=k(n).toLowerCase(),i=String(e||``).trim();if(!i||eh(i))return!1;if(i.startsWith(`ethereum:`))return Ym(i,n);let a=$m(i);return a.length===1&&a[0]===r&&i.toLowerCase()===r}function nh(e,t){let n=String(e||``).trim();return n&&th(n,t)?n:null}function rh(e,t){return nh(e,t)??void 0}var ih={hex:{label:`HEX`,blurb:`Official HEX.COM logo downloads & guidelines`,url:`https://hex.com/downloads`,site:`https://hex.com/`},pulsechain:{label:`PulseChain`,blurb:`Chain site — branding resources download`,url:`https://pulsechain.com/`,site:`https://pulsechain.com/`},pulsechainMedia:{label:`PulseChain media kit`,blurb:`Logos, wordmarks, banners, tickers`,url:`https://www.gopulsechain.com/media-kit`,site:`https://www.gopulsechain.com/media-kit`},pls:{label:`PLS (native gas)`,blurb:`PLS is PulseChain gas — use PulseChain brand assets`,url:`https://pulsechain.com/`,site:`https://pulsechain.com/`},pulsex:{label:`PulseX`,blurb:`Official PulseX branding resources`,url:`https://pulsex.com/brand`,site:`https://pulsex.com/`}},ah=[{id:`pulsechain`,kind:`chain`,label:`PulseChain`,blurb:`The chain tips settle on · also PLS gas mark`,url:`https://pulsechain.com/`,logo:`/brand/pulsechain-mark.svg`,eco:!0,streamQr:!0,streamQrDefault:!1,slideEyebrow:`The chain`,brandKitUrl:ih.pulsechain.url,brandLinks:[{label:`Media kit`,url:ih.pulsechainMedia.url},{label:`PLS gas brand`,url:ih.pls.url}]},{id:`pulsex`,kind:`dex`,label:`PulseX`,blurb:`Swap tokens on PulseChain`,url:`https://pulsex.com/`,logo:`/brand/pulsex-mark.svg`,eco:!0,streamQr:!0,streamQrDefault:!1,slideEyebrow:`Trade`,brandKitUrl:ih.pulsex.url},{id:`hex`,kind:`token`,label:`HEX`,blurb:`Certificate of deposit on-chain`,url:`https://hex.com/`,logo:`/brand/hex-mark.svg`,eco:!0,brandKitUrl:ih.hex.url},{id:`plsx`,kind:`token`,label:`PLSX`,blurb:`PulseX native token`,url:`https://pulsex.com/`,logo:`/brand/plsx-mark.png`,eco:!0,brandKitUrl:ih.pulsex.url},{id:`tipWallet`,kind:`wallet`,label:`Tip Wallet`,blurb:`Android EIP-681 PulseChain wallet for QR tips`,url:`https://github.com/ihelpmaybe/Tip-wallet/releases/tag/0.1.0`,streamQr:!0,streamQrDefault:!0,slideEyebrow:`Get a wallet`},{id:`pulsescan`,kind:`scan`,label:`PulseScan`,blurb:`Explorer — txs & tip proofs`,url:`https://scan.pulsechain.com/`,streamQr:!0,streamQrDefault:!1,slideEyebrow:`Explorer`},{id:`bridge`,kind:`bridge`,label:`Bridge`,blurb:`Move value onto PulseChain`,url:`https://bridge.pulsechain.com/`,streamQr:!0,streamQrDefault:!1,slideEyebrow:`Bridge in`}];function oh(e){return ah.find(t=>t.id===e)}function sh(){return ah.filter(e=>e.eco&&e.logo)}function ch(){return ah.filter(e=>e.streamQr)}function lh(){let e={};for(let t of ch())e[t.id]=t.streamQrDefault===!0;return e}function uh(e,t){let n=lh(),r=e&&typeof e==`object`&&!Array.isArray(e)?e:{};for(let e of ch())r[e.id]!==void 0&&(n[e.id]=!!r[e.id]);return r.tipWallet===void 0&&(r.internetMoney===void 0?t!==void 0&&(n.tipWallet=!!t):n.tipWallet=!!r.internetMoney),n}oh(`tipWallet`)?.url;var dh={enabled:!1,address:``,label:`Tip on PulseChain`,brand:``,position:`bottom-right`,size:`md`,showAddress:!0,theme:`pulse`,carousel:!0,dwellSec:7,slides:{qr:!0,brand:!0,menu:!0,eco:!0,how:!0,pack:lh(),pack:{...lh()}},menuOffers:[],menuSymbol:`PLS`,slideHtml:{},customCss:``},fh=12e3,ph=24e3,mh=16e4,hh=24;function gh(e,t){return String(e??``).slice(0,t)}function _h(e){if(!e||typeof e!=`object`||Array.isArray(e))return{};let t=e,n={},r=0;for(let[e,i]of Object.entries(t)){if(r>=hh)break;let t=String(e).trim().slice(0,48);if((t===`pack:internetMoney`||t===`internetMoney`)&&(t=`pack:tipWallet`),!t)continue;let a=gh(i,fh).trim();a&&(n[t]&&t===`pack:tipWallet`&&e!==`pack:tipWallet`||(n[t]=a,r+=1))}return n}function vh(e,t,n=32){if(e.length<=n)return e.slice();let r=new Map;for(let n of e){let e=t(n)||``,i=r.get(e)||[];i.push(n),r.set(e,i)}let i=[...r.keys()],a=[];for(;a.length<n;){let e=!1;for(let t of i){let i=r.get(t);if(i?.length&&(a.push(i.shift()),e=!0,a.length>=n))break}if(!e)break}return a}var yh=new Set([`bottom`,`top`,`bottom-left`,`bottom-right`,`top-left`,`top-right`]),bh=new Set([`sm`,`md`,`lg`]),xh=new Set([`dark`,`light`,`pulse`]);function Sh(e,t){if(!Array.isArray(e))return[];let n=[];for(let r of e.slice(0,32)){if(!r||typeof r!=`object`)continue;let e=r,i=String(e.name||``).trim().slice(0,48),a=Number(e.amount);if(!i||!Number.isFinite(a))continue;let o=String(e.amountLabel||``).trim().slice(0,24)||String(a),s=String(e.note||``).trim().slice(0,40),c=String(e.blurb||``).trim().slice(0,80),l=Array.isArray(e.strengths)?e.strengths.map(e=>Math.max(0,Math.min(8,Number(e)||0))).slice(0,24):void 0,u=String(e.paymentUri||``).trim().slice(0,512),d=String(e.qrSvg||``).trim().slice(0,mh),f=String(e.sellPitch||``).trim().slice(0,56),p=Math.round(Number(e.timeSec));(!Number.isFinite(p)||p<0)&&(p=0);let m=rh(u,t);n.push({name:i,amount:a,amountLabel:o,note:s||void 0,blurb:c||void 0,sellPitch:f||void 0,timeSec:p||void 0,featured:!!e.featured,strengths:l?.length?l:void 0,barsSvg:void 0,paymentUri:m,id:String(e.id||``).trim().slice(0,96)||void 0,qrSvg:m&&d.startsWith(`<svg`)?d:void 0})}return n}function Ch(e){let t=e&&typeof e==`object`&&!Array.isArray(e)?e:{},n=uh(t.pack,t.internetMoney);return{qr:t.qr===void 0||!!t.qr,brand:t.brand===void 0||!!t.brand,menu:t.menu===void 0||!!t.menu,eco:t.eco===void 0||!!t.eco,how:t.how===void 0||!!t.how,pack:n}}function wh(e,t){return e?t.qr||t.brand||t.menu||t.eco||t.how?!0:Object.values(t.pack||{}).some(Boolean):!1}function Th(e){let t=e&&typeof e==`object`&&!Array.isArray(e)?e:{},n=String(t.position||``),r=String(t.size||``),i=String(t.theme||``),a=String(t.address??``).trim().slice(0,128),o=Math.round(Number(t.dwellSec));Number.isFinite(o)||(o=dh.dwellSec),o=Math.min(20,Math.max(1,o));let s=Ch(t.slides);return{enabled:wh(t.carousel===void 0||!!t.carousel,s),address:a,label:String(t.label??dh.label).trim().slice(0,48)||dh.label,brand:String(t.brand??``).trim().slice(0,48),position:yh.has(n)?n:dh.position,size:bh.has(r)?r:dh.size,showAddress:t.showAddress===void 0||!!t.showAddress,theme:xh.has(i)?i:dh.theme,carousel:t.carousel===void 0||!!t.carousel,dwellSec:o,slides:s,menuOffers:Sh(t.menuOffers,a),menuSymbol:String(t.menuSymbol||`PLS`).trim().slice(0,12)||`PLS`,slideHtml:_h(t.slideHtml),customCss:gh(t.customCss,ph)}}var Eh={qr:`<div class="kq">
  <div class="label">Creator wallet</div>
  <div class="kq-head">
    <img class="kq-mark" src="/brand/pulsechain-mark.svg" alt="" width="28" height="28" />
    <div class="kq-title">{{brandOrLabel}}</div>
  </div>
  <div class="qr-wrap">{{qrSvg}}</div>
  <div class="kq-caption">Your receive wallet · never a token contract</div>
  <div class="kq-meta">{{shortAddress}}</div>
</div>`,brand:`<div class="slide-info">
  <div class="label">{{label}}</div>
  <div class="brand-big">{{brandOrLabel}}</div>
  <div class="kq-caption">Crypto tips on PulseChain</div>
</div>`,menu:`{{default}}`,eco:`<div class="slide-info">
  <div class="label">Ecosystem</div>
  {{ecoHtml}}
  <div class="kq-caption">PLS · PulseX · HEX · PLSX</div>
</div>`,how:`<div class="slide-info">
  <div class="label">How to tip</div>
  <div class="how-body">Menu shows the treats. This QR is the buy button.</div>
  <ul class="how-list">
    <li>Read the tip menu on stream (time · feel · price)</li>
    <li>When this carousel shows a treat, scan that QR</li>
    <li>Send the exact amount on PulseChain — that row buzzes</li>
  </ul>
</div>`};function Dh(e){return Eh[e]?Eh[e]:e.startsWith(`pack:`)?`<div class="kq">
  <div class="label">Website link</div>
  <div class="kq-head">
    {{packLogo}}
    <div class="kq-title">{{packLabel}}</div>
  </div>
  <div class="qr-wrap">{{packQrSvg}}</div>
  <div class="kq-caption">Opens {{packHost}} · not a payment QR</div>
  <div class="kq-meta">{{packBlurb}}</div>
</div>`:`{{default}}`}function Oh(e){let t={qr:`Tip QR`,brand:`Brand spotlight`,menu:`Tip menu patterns`,eco:`Ecosystem logos`,how:`How to participate`};return t[e]?t[e]:e.startsWith(`pack:`)?e.slice(5).replace(/([A-Z])/g,` $1`).replace(/^./,e=>e.toUpperCase()).trim()||`Pack QR`:e}var kh=[{id:`waves`,name:`Waves`,blurb:`Price, hold time, and the vibration shape — same read as Stream Master.`,badge:`Best for cam`},{id:`side`,name:`Side list`,blurb:`Text pitch + price. Use when you want copy instead of waveforms.`},{id:`cols`,name:`Two columns`,blurb:`Same text rows, shorter stack — use when 8–16 offers would grow too tall.`},{id:`cards`,name:`Compact cards`,blurb:`Small tiles for a dedicated menu scene, not a close-up cam.`},{id:`grouped`,name:`Grouped`,blurb:`Section headers by toy or coin when you sell more than one.`}],Ah={layout:`waves`,position:`top-left`,size:`normal`,opacity:.78,maxRows:16,featuredFirst:!1,showNote:!1,showBlurb:!1,theme:`cyan`,headline:`Tip menu`,brand:``,board:2,visibleOfferIds:null},jh=new Set([`bottom`,`top`,`bottom-left`,`bottom-right`,`top-left`,`top-right`]),Mh=new Set([`compact`,`normal`,`large`]),Nh=new Set([`cyan`,`pink`,`gold`,`soft`]);function Ph(e){let t=e&&typeof e==`object`&&!Array.isArray(e)?e:{},n=Math.round(Number(t.board)),r=Number.isFinite(n)&&n>0?n:0,i=String(t.position||``),a=String(t.size||``),o=String(t.theme||``),s=Number(t.opacity);Number.isFinite(s)||(s=Ah.opacity),s=Math.min(.95,Math.max(.4,Math.round(s*100)/100));let c=Math.round(Number(t.maxRows));return Number.isFinite(c)||(c=Ah.maxRows),c=Math.min(32,Math.max(1,c)),{layout:`waves`,position:jh.has(i)?i:Ah.position,size:Mh.has(a)?a:Ah.size,opacity:s,maxRows:c,featuredFirst:!1,showNote:!!t.showNote,showBlurb:!!t.showBlurb,theme:Nh.has(o)?o:Ah.theme,headline:String(t.headline??Ah.headline).trim().slice(0,48),brand:String(t.brand??Ah.brand).trim().slice(0,48),board:Math.max(r,2),visibleOfferIds:Array.isArray(t.visibleOfferIds)?t.visibleOfferIds.map(e=>String(e||``).trim()).filter(Boolean).slice(0,32):null}}var Fh=`Just The Tip`,Ih=`just-the-tip`,Lh=`2.0.29`;function Rh(){try{return`/Just-The-Tip/brand/just-the-tip-logo.png`}catch{return`/brand/just-the-tip-logo.png`}}var zh=Rh(),Bh=`0x64fB4919D9336a059cbD5F4428E319d0F232F64d`,Vh=32;function Hh(e,t){let n=String(e.name||``).trim().slice(0,48),r=String(e.amountLabel||e.amount||``).trim().slice(0,24);if(!n||!r)return null;let i=String(e.note||``).trim().slice(0,40),a=String(e.blurb||``).trim().slice(0,80),o=String(e.id||``).trim().slice(0,96),s=Number(e.amount),c={name:n,amountLabel:r,featured:t||void 0};o&&(c.id=o),i&&(c.note=i),a&&(c.blurb=a),Number.isFinite(s)&&(c.amount=s);let l=String(e.sellPitch||``).trim().slice(0,56);l&&(c.sellPitch=l);let u=Math.round(Number(e.timeSec));if(Number.isFinite(u)&&u>0&&(c.timeSec=u),Array.isArray(e.strengths)&&e.strengths.length){let t=e.strengths.map(e=>{let t=Math.round(Number(e)||0);return t<0?0:t>8?8:t}).slice(0,16);t.length&&(c.strengths=t)}return c}function Uh(e,t){if(!Array.isArray(e))return[];let n=Math.min(Vh,Math.max(1,Math.round(Number(t?.limit)||Vh))),r=t?.featuredFirst!==!1,i=[],a=new Set,o=(e,t)=>{let n=Hh(e,t);if(!n)return;let r=n.id||`${n.name.toLowerCase()}|${n.amountLabel.toLowerCase()}|${(n.note||``).toLowerCase()}`;a.has(r)||(a.add(r),i.push(n))},s=r?[!0,!1]:[!1];for(let t of s)for(let a of e){if(!a||typeof a!=`object`)continue;let e=a;if(!(t&&!e.featured)&&!(!t&&r&&e.featured)&&(o(e,!!e.featured),i.length>=n))return i}return i}function Wh(e,t){if(!Array.isArray(t))return e;let n=new Set(t.map(e=>String(e)));return e.filter(e=>e.id&&n.has(e.id))}function Gh(e){return[...e].sort((e,t)=>String(e.note||``).localeCompare(String(t.note||``))||(Number(e.amount)||0)-(Number(t.amount)||0)||String(e.name).localeCompare(String(t.name)))}function Kh(e){let t=Array.isArray(e)?e.map(e=>Math.max(0,Math.min(8,Number(e)||0))).slice(0,16):[],n=t.length?t:[1.5,5.5,2,6.5,1.5],r=n.length,i=[];for(let e=0;e<r;e++){let t=r===1?27:2+e/Math.max(1,r-1)*50,a=15.6-n[e]/8*13.2;i.push(`${t.toFixed(1)} ${a.toFixed(1)}`)}return r===1&&(i.unshift(`${23 .toFixed(1)} ${15.6.toFixed(1)}`),i.push(`${31 .toFixed(1)} ${15.6.toFixed(1)}`)),`<svg class="menu-wave-svg" viewBox="0 0 54 18" width="54" height="18" fill="none" aria-hidden="true"><path d="${i.map((e,t)=>`${t===0?`M`:`L`}${e}`).join(` `)}" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function qh(e){let t=Math.round(Number(e.timeSec)||0);if(t>0)return`${t}s`;let n=String(e.sellPitch||``).match(/^(\d+)\s*s\b/i);return n?`${n[1]}s`:`—`}function Jh(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function Yh(e){let t=e||Ah;return[`menu-stage`,`layout-${t.layout}`,`pos-${t.position}`,`size-${t.size}`,`theme-${t.theme}`].join(` `)}function Xh(e,t){return Gh(Wh(Uh(e,{limit:t.maxRows,featuredFirst:!1}),t.visibleOfferIds))}function Zh(e){let t=e.amountLabel.trim().split(/\s+/);return t.length>1?t[t.length-1]:``}function Qh(e){if(!e.length)return[];let t=new Map;for(let n of e){let e=n.note||Zh(n)||`Tips`,r=t.get(e)||[];r.push(n),t.set(e,r)}return[...t.entries()].map(([e,t])=>({title:e,rows:t}))}function $h(e,t){let n=[];return t.showNote&&e.note&&n.push(`<span class="menu-note">${Jh(e.note)}</span>`),t.showBlurb&&e.name&&n.push(`<span class="menu-tag">${Jh(e.name)}</span>`),n.length?`<p class="menu-meta">${n.join(` · `)}</p>`:``}function eg(e,t){return`<li class="menu-row${e.featured?` feat`:``}" data-focus="${Jh(`${e.name.toLowerCase()}|${e.amountLabel.toLowerCase()}`)}"><span class="menu-amt">${Jh(e.amountLabel)}<span class="menu-cta">Scan</span></span><span class="menu-hold">${Jh(qh(e))}</span><span class="menu-wave">${Kh(e.strengths)}</span>${$h(e,t)}</li>`}function tg(){return`<div class="menu-cols-head" aria-hidden="true"><span>Price</span><span>Time</span><span>Feel</span></div>`}function ng(e){let t=String(e.brand||``).trim(),n=String(e.headline||``).trim();return!t&&!n?``:`<header class="menu-head">${t?`<p class="menu-brand">${Jh(t)}</p>`:``}${n?`<h1 class="menu-title">${Jh(n)}</h1>`:``}</header>`}function rg(e,t){if(!e.length)return`${ng(t)}<p class="menu-empty">Tick treats below to show them on stream</p>`;let n=Qh(e).map(e=>`<section class="menu-group">${e.title?`<h2 class="menu-group-title">${Jh(e.title)}</h2>`:``}<ol class="menu-list">${e.rows.map(e=>eg(e,t)).join(``)}</ol></section>`).join(``);return`${ng(t)}${tg()}${n}`}function ig(e,t){let n=Xh(e,t);return`<div class="menu-panel" style="--menu-panel-a:${t.opacity}">${rg(n,t)}</div>`}var ag=`
.menu-stage {
  position: fixed;
  inset: 0;
  pointer-events: none;
  display: flex;
  padding: 4.5vh 3.2vw;
  font-family: "Segoe UI", system-ui, sans-serif;
  color: #f4f8fc;
  --menu-accent: #7ad7ff;
  --menu-line: rgba(122, 215, 255, 0.32);
  --menu-feat: #ffe08a;
}
.menu-stage.pos-bottom { align-items: flex-end; justify-content: center; }
.menu-stage.pos-top { align-items: flex-start; justify-content: center; }
.menu-stage.pos-bottom-left { align-items: flex-end; justify-content: flex-start; }
.menu-stage.pos-bottom-right { align-items: flex-end; justify-content: flex-end; }
.menu-stage.pos-top-left { align-items: flex-start; justify-content: flex-start; }
.menu-stage.pos-top-right { align-items: flex-start; justify-content: flex-end; }

.menu-stage.theme-cyan { --menu-accent: #7ad7ff; --menu-line: rgba(122, 215, 255, 0.32); --menu-feat: #ffe08a; }
.menu-stage.theme-pink { --menu-accent: #ff9ad4; --menu-line: rgba(255, 154, 212, 0.34); --menu-feat: #ffd0ea; }
.menu-stage.theme-gold { --menu-accent: #f0c36a; --menu-line: rgba(240, 195, 106, 0.36); --menu-feat: #ffe9b0; }
.menu-stage.theme-soft { --menu-accent: #c8d4e4; --menu-line: rgba(200, 212, 228, 0.28); --menu-feat: #ffffff; }

.menu-panel {
  pointer-events: none;
  min-width: 11.5rem;
  max-width: min(28rem, 92vw);
  padding: 0.55rem 0.7rem 0.6rem;
  border-radius: 12px;
  border: 1px solid var(--menu-line);
  background: rgba(6, 14, 24, var(--menu-panel-a, 0.78));
  color: #f4f8fc;
}
.menu-stage.size-compact .menu-panel { max-width: 16.5rem; padding: 0.42rem 0.55rem 0.48rem; }
.menu-stage.size-large .menu-panel { max-width: min(36rem, 94vw); padding: 0.7rem 0.85rem 0.75rem; }
.menu-stage.layout-cols .menu-panel,
.menu-stage.layout-cards .menu-panel,
.menu-stage.layout-grouped .menu-panel { max-width: min(34rem, 94vw); }
.menu-stage.layout-waves .menu-panel { min-width: 13.2rem; max-width: 18.8rem; }

.menu-cols-head {
  display: grid;
  grid-template-columns: minmax(4.4rem, 1fr) 2.5rem 3.7rem;
  column-gap: 0.4rem;
  margin: 0 0 0.18rem;
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(220, 230, 240, 0.42);
}

.menu-head { margin: 0 0 0.4rem; }
.menu-brand {
  margin: 0 0 0.08rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--menu-accent);
  opacity: 0.92;
}
.menu-title {
  margin: 0;
  font-size: 0.92rem;
  font-weight: 750;
  letter-spacing: 0.02em;
  color: #f7fbff;
}
.menu-stage.size-compact .menu-title { font-size: 0.8rem; }
.menu-stage.size-large .menu-title { font-size: 1.08rem; }

.menu-empty {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.35;
  color: rgba(230, 240, 250, 0.78);
  max-width: 16rem;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
}
.menu-stage.layout-cols .menu-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.1rem;
  row-gap: 0.12rem;
}

.menu-row,
.menu-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  column-gap: 0.75rem;
  row-gap: 0.05rem;
  padding: 0.12rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.menu-row:last-child,
.menu-card:last-child { border-bottom: none; }
.menu-stage.layout-waves .menu-row {
  grid-template-columns: minmax(4.4rem, 1fr) 2.5rem 3.7rem;
  align-items: center;
  column-gap: 0.4rem;
}
.menu-hold {
  font-size: 0.82rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  text-align: center;
  color: #e8eef6;
}
.menu-wave {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #f4f8fc;
}
.menu-wave-svg {
  display: block;
  width: 3.4rem;
  height: 1.05rem;
}
.menu-stage.layout-waves .menu-amt {
  justify-self: start;
  font-size: 0.82rem;
}
.menu-row.feat .menu-hold,
.menu-row.feat .menu-wave { color: var(--menu-feat); }
.menu-name {
  min-width: 0;
  font-size: 0.92rem;
  font-weight: 650;
  color: #f4f8fc;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.menu-amt {
  font-size: 0.88rem;
  font-weight: 750;
  font-variant-numeric: tabular-nums;
  color: var(--menu-accent);
  white-space: nowrap;
}
.menu-row.feat .menu-name,
.menu-card.feat .menu-name { color: var(--menu-feat); }
.menu-badge {
  display: inline-block;
  margin-right: 0.35rem;
  padding: 0.05rem 0.28rem;
  border-radius: 4px;
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  vertical-align: 0.08em;
  color: #1a1408;
  background: var(--menu-feat);
}
.menu-cta {
  display: none;
  margin-left: 0.35rem;
  padding: 0.04rem 0.28rem;
  border-radius: 4px;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #041018;
  background: var(--menu-accent);
}
.menu-row.is-focus,
.menu-card.is-focus {
  border-color: var(--menu-accent);
  background: rgba(122, 215, 255, 0.12);
}
.menu-row.is-focus .menu-cta,
.menu-card.is-focus .menu-cta { display: inline; }
.menu-meta {
  grid-column: 1 / -1;
  margin: 0;
  font-size: 0.68rem;
  line-height: 1.25;
  color: rgba(220, 230, 240, 0.72);
}
.menu-note { font-weight: 650; }
.menu-tag { font-weight: 500; opacity: 0.85; }

.menu-stage.size-compact .menu-name { font-size: 0.8rem; }
.menu-stage.size-compact .menu-amt { font-size: 0.76rem; }
.menu-stage.size-compact .menu-hold { font-size: 0.72rem; }
.menu-stage.size-compact .menu-wave-svg { width: 2.8rem; height: 0.9rem; }
.menu-stage.size-large .menu-name { font-size: 1.08rem; }
.menu-stage.size-large .menu-amt { font-size: 1rem; }
.menu-stage.size-large .menu-hold { font-size: 0.95rem; }
.menu-stage.size-large .menu-wave-svg { width: 4rem; height: 1.2rem; }

.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.4rem;
}
.menu-stage.size-large.layout-cards .menu-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.menu-card {
  margin: 0;
  padding: 0.4rem 0.48rem 0.42rem;
  border: 1px solid var(--menu-line);
  border-radius: 8px;
  background: rgba(4, 10, 18, 0.35);
}

.menu-group { margin: 0 0 0.55rem; }
.menu-group:last-child { margin-bottom: 0; }
.menu-group-title {
  margin: 0 0 0.22rem;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--menu-accent);
}
`;async function og(e){try{return(await fetch(`/api/overlay/qr`,{method:`PUT`,headers:{"content-type":`application/json`},body:JSON.stringify({qr:{...Th(e),slideHtml:Th(e).slideHtml||{}}})})).ok}catch{return!1}}function sg(e=location.origin){return`${e}/overlay/qr?v=18`}function cg(e=location.origin){return`${e}/overlay/qr?preview=1&v=18`}async function lg(e){let t={id:e.id||`tip-${Date.now()}`,amount:Number(e.amount)||0,symbol:String(e.symbol||`PLS`),title:e.title||`${(Number(e.amount)||0).toLocaleString(void 0,{maximumFractionDigits:4})} ${e.symbol||`PLS`}`,subtitle:e.subtitle||void 0,source:e.source||`wallet`,eventKind:e.eventKind||void 0,dryRun:!!e.dryRun,at:e.at||Date.now(),...e.force?{force:!0}:{},...Number.isFinite(Number(e.usd))&&Number(e.usd)>=0?{usd:Number(e.usd)}:{}};try{let e=await fetch(`/api/overlay/tip`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify(t)});if(!e.ok)return{ok:!1,filtered:!1,clients:0,error:`HTTP ${e.status}`};let n=await e.json();return{ok:!0,filtered:!!n.filtered||!n.event,clients:Number(n.clients)||0}}catch(e){return{ok:!1,filtered:!1,clients:0,error:e instanceof Error?e.message:`network error`}}}async function ug(e){let t=Im(e);try{return(await fetch(`/api/overlay/style`,{method:`PUT`,headers:{"content-type":`application/json`},body:JSON.stringify({style:t})})).ok}catch{return!1}}async function dg(e){try{return(await fetch(`/api/overlay/ladder`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({ladder:e})})).ok}catch{return!1}}async function fg(e){let t=Ph(e);try{return(await fetch(`/api/overlay/menu-style`,{method:`PUT`,headers:{"content-type":`application/json`},body:JSON.stringify({style:t})})).ok}catch{return!1}}async function pg(){try{let e=await fetch(`/api/overlay/status`,{cache:`no-store`});if(!e.ok)return{clients:0,ok:!1};let t=await e.json();return{clients:Number(t.clients)||0,ok:!0,qrAddress:String(t.qr?.address||``),qrMenuCount:Number(t.qr?.menuCount)||0,qrSlideCount:Number(t.qr?.slideCount)||0}}catch{return{clients:0,ok:!1}}}function mg(e=location.origin){return`${e}/overlay`}function hg(e=location.origin){return`${e}/overlay?preview=1`}function gg(e=location.origin){return`${e}/overlay/menu?v=1`}function _g(e=location.origin){return`${e}/overlay/menu?preview=1&v=1`}function vg(e){let t=navigator.userAgent||``;if(/\bCursor\//i.test(t)){fetch(`/api/open-chrome`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({url:e})}).catch(()=>{window.open(e,`_blank`,`noopener,noreferrer`)});return}window.open(e,`_blank`,`noopener,noreferrer`)}function yg(e){return e.logo?{id:e.id,label:e.label,src:e.logo,href:e.url}:null}var bg=sh().map(yg).filter(e=>!!e);function xg(e=22){return`<div class="eco" aria-label="PulseChain ecosystem">${bg.map(t=>`<span class="eco-item" title="${t.label}" data-eco="${t.id}"><img class="eco-img" src="${t.src}" width="${e}" height="${e}" alt="${t.label}" decoding="async" /><span class="eco-label">${t.label}</span></span>`).join(``)}</div>`}async function Sg(e){let t=String(e||``);if(!t)return!1;try{return await navigator.clipboard.writeText(t),!0}catch{}try{let e=document.createElement(`textarea`);e.value=t,e.setAttribute(`readonly`,``),e.style.position=`fixed`,e.style.left=`-9999px`,e.style.top=`0`,document.body.appendChild(e),e.focus(),e.select(),e.setSelectionRange(0,t.length);let n=document.execCommand(`copy`);return e.remove(),!!n}catch{return!1}}var Cg=`
:host { display: block; }
* { box-sizing: border-box; }
.frame {
  position: relative;
  min-height: 14.5rem;
  border-radius: calc(var(--radius, 14px) - 2px);
  border: 1px solid rgba(0, 200, 255, 0.18);
  background: #0a0e14;
  overflow: hidden;
}
.menu-stage {
  position: absolute;
  inset: 0;
  padding: 0.7rem 0.65rem;
}
.thumb {
  min-height: 6.4rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.08);
  background: #0a0e14;
  overflow: hidden;
  position: relative;
}
.thumb .menu-stage { padding: 0.45rem 0.4rem; }
.thumb .menu-panel { max-width: 100%; }
.thumb .menu-title { font-size: 0.72rem; }
.thumb .menu-name, .thumb .menu-amt, .thumb .menu-hold { font-size: 0.68rem; }
.thumb .menu-cols-head { font-size: 0.48rem; }
.thumb .menu-wave-svg { width: 2.6rem; height: 0.8rem; }
`;function wg(e,t){let n=e.attachShadow({mode:`open`});n.innerHTML=`
    <style>${ag}${Cg}</style>
    <div class="${t}">
      <div class="menu-stage layout-waves pos-top-left size-normal theme-cyan" id="stage"></div>
    </div>
  `;let r=n.getElementById(`stage`);return{refresh(e,t){let n=e||Ah;r.className=Yh(n),r.innerHTML=ig(t,n)}}}function Tg(e){return wg(e,`frame`)}function Eg(e){return wg(e,`thumb`)}function Dg(e,t){let n=!1,r=t=>{n=t.target===e},i=r=>{let i=r.target===e;n&&i&&t(),n=!1},a=()=>{n=!1};return e.addEventListener(`pointerdown`,r),e.addEventListener(`click`,i),e.addEventListener(`pointercancel`,a),()=>{e.removeEventListener(`pointerdown`,r),e.removeEventListener(`click`,i),e.removeEventListener(`pointercancel`,a)}}var Og={"rose-window":`pink`,"neon-cyan":`cyan`,"gold-vip":`gold`,"soft-glass":`soft`,"lower-third":`cyan`,"pulse-coin":`cyan`,"chat-bubble":`pink`,"ticket-stub":`gold`,"matrix-term":`cyan`,"arcade-cab":`gold`,polaroid:`soft`,"ribbon-banner":`pink`,"esports-hud":`cyan`,"chain-receipt":`cyan`,"heart-drop":`pink`,"midnight-card":`soft`,"minimal-sash":`soft`,"fire-streak":`gold`};function kg(e,t){let n=String(e?.theme||``);return n===`pink`||n===`gold`||n===`soft`||n===`cyan`?n:(t?Og[t]:void 0)||`cyan`}var Ag=[{name:`Spark`,amountLabel:`10 PLS`,amount:10,timeSec:4,sellPitch:`4s · spark`,featured:!0,strengths:[2,6,2]},{name:`Wave`,amountLabel:`25 PLS`,amount:25,timeSec:8,sellPitch:`8s · wave`,strengths:[1,4,7,4,1]},{name:`Pulse`,amountLabel:`50 PLS`,amount:50,timeSec:12,sellPitch:`12s · pulse`,strengths:[8,0,8,0,8]}],jg=`
:host { display: block; }
* { box-sizing: border-box; }
.stage {
  position: relative;
  min-height: 18.5rem;
  aspect-ratio: 16 / 9;
  max-height: 24rem;
  padding: 0.7rem;
  border-radius: calc(var(--radius, 14px) - 2px);
  border: 1px solid rgba(0, 200, 255, 0.18);
  background:
    radial-gradient(80% 70% at 20% 0%, rgba(0, 160, 255, 0.12), transparent 55%),
    #0a0e14;
  overflow: hidden;
}
.stage.is-thumb {
  min-height: 5.6rem;
  aspect-ratio: auto;
  max-height: none;
  padding: 0.4rem 0.45rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.slot-alert {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0.7rem 7.2rem 0.7rem 8.4rem;
  pointer-events: none;
  z-index: 2;
}
.stage.pos-top .slot-alert { align-items: flex-start; }
.stage.pos-bottom-left .slot-alert,
.stage.pos-top-left .slot-alert { justify-content: flex-start; padding-left: 8.4rem; padding-right: 7.2rem; }
.stage.pos-bottom-right .slot-alert,
.stage.pos-top-right .slot-alert { justify-content: flex-end; }
.stage.is-thumb .slot-alert {
  position: relative;
  inset: auto;
  padding: 0;
  z-index: 1;
}
.slot-menu {
  position: absolute;
  left: 0.45rem;
  top: 0.45rem;
  width: min(42%, 11.2rem);
  z-index: 3;
  pointer-events: none;
  transform: scale(0.84);
  transform-origin: top left;
}
.stage.is-thumb .slot-menu,
.stage.is-thumb .slot-qr { display: none; }
.stage.is-thumb .alert {
  zoom: 0.72;
  max-width: 100%;
}
.slot-menu .menu-stage {
  position: relative;
  inset: auto;
  padding: 0;
  width: 100%;
  height: auto;
  display: block;
}
.slot-menu .menu-panel { max-width: 100%; }
.slot-qr {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  width: min(30%, 7.8rem);
  z-index: 3;
  pointer-events: none;
}
.qr-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.28rem;
  padding: 0.42rem 0.4rem 0.38rem;
  border-radius: 10px;
  text-align: center;
  font-family: "Segoe UI", system-ui, sans-serif;
}
.qr-card.theme-pulse {
  background: linear-gradient(160deg, rgba(8,18,32,0.92), rgba(18,8,28,0.9));
  border: 1px solid rgba(0, 200, 255, 0.4);
  color: #e8f8ff;
}
.qr-card.theme-dark {
  background: rgba(8, 12, 18, 0.88);
  border: 1px solid rgba(255,255,255,0.12);
  color: #e8f0f8;
}
.qr-card.theme-light {
  background: rgba(244, 248, 252, 0.94);
  border: 1px solid rgba(20, 40, 70, 0.16);
  color: #102030;
}
.qr-card.look-cyan { --look-accent: #7ad7ff; }
.qr-card.look-pink { --look-accent: #ff9ad4; }
.qr-card.look-gold { --look-accent: #f0c36a; }
.qr-card.look-soft { --look-accent: #c8d4e4; }
.qr-card.look-cyan,
.qr-card.look-pink,
.qr-card.look-gold,
.qr-card.look-soft {
  border-color: color-mix(in srgb, var(--look-accent) 60%, transparent);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--look-accent) 22%, transparent);
}
.qr-label {
  font-size: 0.48rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--look-accent, #7ad7ff);
}
.qr-fake {
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 6px;
  background:
    linear-gradient(#111 1px, transparent 1px) 0 0 / 20% 20%,
    linear-gradient(90deg, #111 1px, transparent 1px) 0 0 / 20% 20%,
    #fff;
  box-shadow: inset 0 0 0 3px #fff;
}
.qr-card.theme-light .qr-fake {
  background:
    linear-gradient(#111 1px, transparent 1px) 0 0 / 20% 20%,
    linear-gradient(90deg, #111 1px, transparent 1px) 0 0 / 20% 20%,
    #fff;
}
.qr-brand {
  font-size: 0.52rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  opacity: 0.88;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.alert {
  --accent: #6ec8ff;
  --glow: rgba(0, 180, 255, 0.35);
  position: relative;
  max-width: min(22rem, 94%);
  padding: 0.85rem 1.05rem 0.95rem;
  border-radius: 14px;
  color: #f2f8ff;
  font-family: "Segoe UI", system-ui, sans-serif;
  background: color-mix(in srgb, #0c1828 82%, var(--accent));
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--accent) 18%, transparent),
    0 14px 36px rgba(0, 20, 50, 0.55),
    0 0 28px var(--glow);
  transform-origin: 50% 100%;
}
.alert.is-flash {
  animation: tip-preview-flash 0.85s ease;
}
@keyframes tip-preview-flash {
  0% { transform: translateY(10px) scale(0.96); opacity: 0.4; filter: brightness(1.35); }
  40% { transform: translateY(0) scale(1.02); opacity: 1; filter: brightness(1.12); }
  100% { transform: translateY(0) scale(1); opacity: 1; filter: none; }
}
.alert.theme-cyan { --accent: #6ec8ff; --glow: rgba(0, 180, 255, 0.35); }
.alert.theme-pink { --accent: #ff7ab8; --glow: rgba(255, 90, 160, 0.32); }
.alert.theme-gold { --accent: #f0c75a; --glow: rgba(230, 180, 40, 0.28); }
.alert.theme-soft {
  --accent: #b8c8d8;
  --glow: rgba(160, 180, 200, 0.2);
  background: rgba(18, 24, 34, 0.92);
}
.alert.theme-custom {
  padding: 0;
  border: none;
  background: transparent;
  box-shadow: none;
  max-width: min(26rem, 96%);
}
.alert.size-compact {
  padding: 0.55rem 0.75rem 0.65rem;
  max-width: min(16rem, 90%);
  border-radius: 12px;
}
.alert.size-compact .title { font-size: clamp(1.05rem, 3.5vw, 1.35rem); }
.alert.size-compact .sub { font-size: 0.78rem; }
.alert.size-compact .eyebrow { font-size: 0.58rem; }
.alert.size-large {
  padding: 1.2rem 1.45rem 1.3rem;
  max-width: min(30rem, 98%);
}
.alert.size-large .title { font-size: clamp(1.7rem, 5vw, 2.45rem); }
.alert.size-large .sub { font-size: 1.05rem; }
.alert.size-large .eyebrow { font-size: 0.78rem; }
.alert.size-large .brand { font-size: 0.85rem; }
.alert.theme-custom.size-compact,
.alert.theme-custom.size-normal,
.alert.theme-custom.size-large {
  padding: 0;
  border-radius: 0;
}
.alert.theme-custom.size-compact { zoom: 0.82; max-width: min(22rem, 92%); }
.alert.theme-custom.size-normal { zoom: 1; }
.alert.theme-custom.size-large { zoom: 1.28; max-width: min(30rem, 98%); }
.brand {
  font-size: 0.72rem;
  font-weight: 700;
  color: color-mix(in srgb, var(--accent) 85%, #fff);
  margin-bottom: 0.15rem;
  letter-spacing: 0.04em;
}
.eyebrow {
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 0.28rem;
}
.title {
  font-size: clamp(1.25rem, 4vw, 1.75rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
.sub {
  margin-top: 0.3rem;
  font-size: 0.88rem;
  color: #b8d8f0;
  font-weight: 600;
}
.eco {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 0.55rem;
  margin-top: 0.6rem;
  padding-top: 0.5rem;
  border-top: 1px solid color-mix(in srgb, var(--accent, #6ec8ff) 28%, transparent);
}
.theme-custom .eco {
  margin: 0.5rem 0.2rem 0;
  padding: 0.45rem 0.3rem 0;
  border-top-color: rgba(255,255,255,0.14);
}
.eco-item { display: inline-flex; align-items: center; gap: 0.25rem; }
.eco-img {
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  object-fit: contain;
}
.eco-label {
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--accent, #9ec8e8) 70%, #c8d8e8);
}
.size-compact .eco-label { display: none; }
`;function Mg(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function Ng(e){return e?xg(20):``}function Pg(e,t){let n=``;return e.brand&&(n+=`<div class="brand">${Mg(e.brand)}</div>`),n+=`<div class="eyebrow">${Mg(e.eyebrow)}</div>`,n+=`<div class="title">${Mg(e.title)}</div>`,e.subtitle&&(n+=`<div class="sub">${Mg(e.subtitle)}</div>`),n+=Ng(t),n}function Fg(e,t,n){let r=Ng(n),i=String(e).replace(/\{\{title\}\}/g,Mg(t.title)).replace(/\{\{subtitle\}\}/g,Mg(t.subtitle)).replace(/\{\{eyebrow\}\}/g,Mg(t.eyebrow)).replace(/\{\{brand\}\}/g,Mg(t.brand)).replace(/\{\{amount\}\}/g,Mg(t.amount)).replace(/\{\{symbol\}\}/g,Mg(t.symbol)).replace(/\{\{source\}\}/g,Mg(t.source)).replace(/\{\{eco\}\}/g,r);return n&&!i.includes(`class="eco"`)&&(i+=r),i}function Ig(e,t){let n=t?.amount??1e3,r=t?.symbol||`PLS`,i=`${n.toLocaleString(void 0,{maximumFractionDigits:4})} ${r}`,a=String(e.eyebrow||`Tip`).trim()||`Tip`;return{title:i,subtitle:e.showPattern?`Sample tip · live preview`:``,eyebrow:a,brand:String(e.brand||``).trim(),amount:n,symbol:r,source:`test`}}function Lg(e,t){let n=String(e.customHtml||``).trim(),r=e.showEco!==!1;return{innerHtml:n?Fg(n,t,r):Pg(t,r),theme:n?`custom`:e.theme===`pink`||e.theme===`gold`||e.theme===`soft`?e.theme:`cyan`,size:e.size||`normal`,position:e.position||`bottom`}}function Rg(e){return Ag.map(t=>({...t,amountLabel:`${t.amount} ${e}`}))}function zg(e,t,n,r){let i=n?.qrTheme||`pulse`,a=String(n?.qrLabel||`Tip on PulseChain`).trim()||`Tip on PulseChain`,o=String(n?.qrBrand||t.brand||`Scan to send`).trim()||`Scan to send`;e.className=`qr-card theme-${i} look-${r}`,e.innerHTML=`<div class="qr-label">${Mg(a)}</div><div class="qr-fake" aria-hidden="true"></div><div class="qr-brand">${Mg(o)}</div>`}function Bg(e,t){let n=!!t.thumb,r=e.attachShadow({mode:`open`});r.innerHTML=`
    <style id="base">${jg}${n?``:ag}</style>
    <style id="user"></style>
    <div class="stage${n?` is-thumb`:``} pos-bottom" id="stage">
      ${n?``:`<div class="slot-menu" id="menu-slot"></div>`}
      <div class="slot-alert">
        <div class="alert theme-cyan size-normal" id="alert"></div>
      </div>
      ${n?``:`<div class="slot-qr"><div class="qr-card theme-pulse look-cyan" id="qr-card"></div></div>`}
    </div>
  `;let i=r.getElementById(`stage`),a=r.getElementById(`alert`),o=r.getElementById(`user`),s=r.getElementById(`menu-slot`),c=r.getElementById(`qr-card`);return{refresh(e,t=`PLS`,r){let l=Lg(e,Ig(e,{symbol:t}));if(i.className=`stage${n?` is-thumb`:``} pos-${l.position}`,a.className=`alert theme-${l.theme} size-${l.size}`,a.innerHTML=l.innerHtml,o.textContent=String(e.customCss||``),n)return;let u=kg(e,r?.templateId),d={...r?.menuStyle||Ah,theme:u},f=r?.menuRows&&r.menuRows.length?r.menuRows.slice(0,6):Rg(t);s&&(s.innerHTML=`<div class="${Yh(d)}">${ig(f,d)}</div>`),c&&zg(c,e,r,u)},flash(e,t){let r=Lg(e,t);i.className=`stage${n?` is-thumb`:``} pos-${r.position}`,a.className=`alert theme-${r.theme} size-${r.size}`,a.innerHTML=r.innerHtml,o.textContent=String(e.customCss||``),a.classList.remove(`is-flash`),a.offsetWidth,a.classList.add(`is-flash`)}}}function Vg(e){return Bg(e,{})}function Hg(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`)}function Ug(){return Dm.map(e=>`<option value="${Hg(e.id)}">${Hg(e.name)} — ${Hg(e.blurb)}</option>`).join(``)}function Wg(e,t){let n=e.trim(),r=t.trim();return Dm.find(e=>e.html.trim()===n&&e.css.trim()===r)||Dm.find(e=>e.html.trim()===n)}function Gg(){return`
        <div id="obs-branding-modal" class="pattern-wizard obs-branding-modal" hidden>
          <div
            class="pattern-wizard-panel obs-branding-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="obs-branding-h"
          >
            <div class="pattern-catalog-head">
              <h3 id="obs-branding-h">Branding</h3>
              <button type="button" class="btn ghost tiny" id="btn-obs-branding-close" aria-label="Close branding">Close</button>
            </div>

            <p class="obs-branding-lead">
              Need logos for thumbnails, panels, or socials? Open the official kits.
              Want logos on tip alerts? Toggle them on — no files to download.
            </p>

            <div class="obs-brand-official-grid">
              ${[{title:`HEX`,blurb:`Logos & guidelines from HEX.COM`,logo:`/brand/hex-mark.svg`,url:ih.hex.url,cta:`HEX brand kit`},{title:`PulseChain · PLS`,blurb:`Chain logo pack (PLS uses the same brand)`,logo:`/brand/pulsechain-mark.svg`,url:ih.pulsechainMedia.url,cta:`PulseChain media kit`},{title:`PulseX · PLSX`,blurb:`DEX logo pack from PulseX.com`,logo:`/brand/pulsex-mark.svg`,url:ih.pulsex.url,cta:`PulseX brand kit`}].map(e=>`
        <a class="obs-brand-card obs-brand-card-link" href="${Hg(e.url)}" target="_blank" rel="noopener noreferrer">
          <img class="obs-brand-mark" src="${Hg(e.logo)}" alt="" width="40" height="40" decoding="async" />
          <div class="obs-brand-card-copy">
            <h4>${Hg(e.title)}</h4>
            <p>${Hg(e.blurb)}</p>
            <span class="obs-brand-cta">${Hg(e.cta)} →</span>
          </div>
        </a>`).join(``)}
            </div>

            <div class="obs-brand-stream-box">
              <p class="obs-look-shared-title">On tip alerts</p>
              <p class="hint" style="margin:0 0 0.55rem">
                Ecosystem marks already ship with the app. Use
                <strong>Copy OBS URL</strong> on the page behind this dialog, then:
              </p>
              <button type="button" class="btn primary" id="btn-obs-branding-eco-on">
                Show ecosystem logos on tip alerts
              </button>
              <p class="setup-note" id="obs-branding-status" role="status"></p>
            </div>
          </div>
        </div>`}function Kg(){return kh.map(e=>{let t=e.badge?`<span class="pill">${Hg(e.badge)}</span>`:``;return`
            <button type="button" class="obs-menu-layout-card" data-menu-layout="${Hg(e.id)}" aria-pressed="false">
              <span class="obs-menu-layout-thumb" id="obs-menu-thumb-${Hg(e.id)}"></span>
              <span class="obs-menu-layout-copy">
                <span class="obs-menu-layout-name">${Hg(e.name)}</span>
                ${t}
              </span>
              <span class="obs-menu-layout-blurb">${Hg(e.blurb)}</span>
            </button>`}).join(``)}function qg(){return`
      <div id="page-obs" class="page-settings stream-tip-alert" hidden>
        <p class="settings-intro">
          Three separate OBS Browser Sources: tip pop-up, always-on tip menu, and optional QR carousel.
          Picture below is the pop-up. Build the readable price list in <strong>Tip menu overlay</strong>.
          PulseChain only. Keep Just The Tip running while live.
        </p>

        <section class="settings-block" aria-labelledby="obs-h">
          <div class="settings-block-head">
            <h2 id="obs-h">Stream tip alert</h2>
            <span class="pill" id="obs-clients-pill">0 watching</span>
          </div>
          <p class="hint">
            OBS: paste this URL (transparent, 1920×1080). Pop-up only — the always-on price list is the Tip menu overlay URL below.
            Add the carousel URL only if you want rotating QRs.
            <strong>Open dark preview</strong> uses a dark background so you can see it in a browser tab.
          </p>
          <label class="field grow">
            <span>Browser Source URL (OBS — transparent)</span>
            <input id="obs-overlay-url" type="text" readonly spellcheck="false" />
          </label>
          <div class="actions obs-actions">
            <button type="button" class="btn primary" id="btn-obs-copy">Copy OBS URL</button>
            <button type="button" class="btn" id="btn-obs-open">Open dark preview</button>
            <button type="button" class="btn ghost" id="btn-obs-test">Send test tip</button>
            <button type="button" class="btn ghost" id="btn-obs-test-pool">Send test pool swap</button>
            <button type="button" class="btn" id="btn-obs-branding" title="Official HEX, PulseChain, PulseX brand kits + tip logos">Branding</button>
          </div>
          <p class="setup-note" id="obs-status" role="status"></p>

          <div class="obs-look-preview-wrap obs-board-preview-wrap">
            <p class="obs-look-preview-label">What OBS shows</p>
            <div
              class="obs-look-preview"
              id="obs-board-preview"
              aria-label="Tip pop-up sample"
            ></div>
            <p class="hint obs-look-preview-hint">
              Sample of the tip pop-up. <strong>Open dark preview</strong> is the full-size version.
              The live price list is built under <strong>Tip menu overlay</strong>.
            </p>
          </div>

          <details class="obs-advanced-details obs-look-fold" id="obs-look-fold">
            <summary>
              <span class="obs-look-fold-title">Customize look</span>
              <span class="pill" id="obs-look-mode-pill">Built-in</span>
            </summary>
            <p class="hint" id="obs-look-h">
              Theme, size, and filters for tip pop-ups. Changes apply live without reloading OBS.
            </p>

            <div class="obs-look-tabs" role="tablist" aria-label="Look style">
              <button type="button" class="obs-look-tab is-active" role="tab" id="obs-tab-builtin" aria-selected="true" aria-controls="obs-panel-builtin" data-look-mode="builtin">Built-in themes</button>
              <button type="button" class="obs-look-tab" role="tab" id="obs-tab-template" aria-selected="false" aria-controls="obs-panel-template" data-look-mode="template">Template packs</button>
            </div>
            <input type="hidden" id="obs-look-mode" value="builtin" />

            <div class="obs-look-preview-wrap">
              <p class="obs-look-preview-label">Live preview</p>
              <div
                class="obs-look-preview"
                id="obs-look-preview"
                aria-live="polite"
                aria-label="Tip alert look preview"
              ></div>
              <p class="hint obs-look-preview-hint">
                Updates as you change theme or template — no need to open dark preview for a quick look.
              </p>
            </div>

            <div class="obs-look-panel" role="tabpanel" id="obs-panel-builtin" aria-labelledby="obs-tab-builtin">
              <p class="obs-look-panel-title">Card color</p>
              <div class="settings-grid">
                <label class="field grow">
                  <span>Theme color</span>
                  <select id="obs-theme">
                    <option value="cyan">Cyan</option>
                    <option value="pink">Pink</option>
                    <option value="gold">Gold</option>
                    <option value="soft">Soft</option>
                  </select>
                </label>
              </div>
              <p class="hint">Simple colored tip cards. Position, size, and text live below.</p>
            </div>

            <div class="obs-look-panel" role="tabpanel" id="obs-panel-template" aria-labelledby="obs-tab-template" hidden>
              <p class="obs-look-panel-title">Window design</p>
              <div class="settings-grid">
                <label class="field grow">
                  <span>Template pack</span>
                  <select id="obs-template">${Ug()}</select>
                </label>
              </div>
              <p class="hint obs-template-blurb" id="obs-template-blurb"></p>
              <details class="obs-advanced-details" id="obs-advanced">
                <summary>Edit HTML / CSS</summary>
                <p class="hint">
                  Tokens:
                  <code>{{title}}</code> <code>{{subtitle}}</code> <code>{{eyebrow}}</code>
                  <code>{{brand}}</code> <code>{{amount}}</code> <code>{{symbol}}</code>
                  <code>{{source}}</code> <code>{{eco}}</code> (ecosystem logo strip).
                  Switching to Built-in clears this.
                </p>
                <label class="field grow">
                  <span>Custom HTML</span>
                  <textarea id="obs-custom-html" rows="7" spellcheck="false"></textarea>
                </label>
                <label class="field grow">
                  <span>Custom CSS</span>
                  <textarea id="obs-custom-css" rows="8" spellcheck="false"></textarea>
                </label>
              </details>
            </div>

            <div class="obs-look-shared">
              <p class="obs-look-shared-title">All looks</p>
              <div class="settings-grid">
                <label class="field">
                  <span>Position</span>
                  <select id="obs-position">
                    <option value="bottom">Bottom center</option>
                    <option value="top">Top center</option>
                    <option value="bottom-left">Bottom left</option>
                    <option value="bottom-right">Bottom right</option>
                    <option value="top-left">Top left</option>
                    <option value="top-right">Top right</option>
                  </select>
                </label>
                <label class="field">
                  <span>Size</span>
                  <select id="obs-size">
                    <option value="compact">Compact</option>
                    <option value="normal">Normal</option>
                    <option value="large">Large</option>
                  </select>
                </label>
                <label class="field">
                  <span>Hold (seconds)</span>
                  <input id="obs-hold" type="number" min="2" max="20" step="1" />
                </label>
                <label class="field">
                  <span>Label (above amount)</span>
                  <input id="obs-eyebrow" type="text" maxlength="32" placeholder="Tip" spellcheck="false" />
                </label>
                <label class="field">
                  <span>Brand line (optional)</span>
                  <input id="obs-brand" type="text" maxlength="48" placeholder="Your stream name" spellcheck="false" />
                </label>
                <label class="field">
                  <span>Wallet tip alert minimum</span>
                  <input id="obs-wallet-min" type="number" min="0" step="any" />
                </label>
                <label class="field">
                  <span>Pool / chain event alert minimum</span>
                  <input id="obs-pool-min" type="number" min="0" step="any" />
                </label>
              </div>
              <div class="obs-toggles">
                <label class="field settings-toggle-field">
                  <span>Show pattern line</span>
                  <input type="checkbox" id="obs-show-pattern" />
                </label>
                <label class="field settings-toggle-field">
                  <span>Show pool / chain event alerts (same OBS tip card)</span>
                  <input type="checkbox" id="obs-show-pool-alerts" />
                </label>
                <label class="field settings-toggle-field">
                  <span>Show pool name</span>
                  <input type="checkbox" id="obs-show-pool-label" />
                </label>
                <label class="field settings-toggle-field">
                  <span>Show dry-run / tests</span>
                  <input type="checkbox" id="obs-show-dry" />
                </label>
                <label class="field settings-toggle-field">
                  <span>Show connection status on alert page</span>
                  <input type="checkbox" id="obs-show-status" />
                </label>
                <label class="field settings-toggle-field">
                  <span>PulseChain ecosystem logos</span>
                  <input type="checkbox" id="obs-show-eco" />
                </label>
              </div>
            </div>
          </details>
        </section>

        ${Gg()}

        <section class="settings-block" aria-labelledby="obs-menu-h">
          <div class="settings-block-head">
            <h2 id="obs-menu-h">Tip menu overlay</h2>
          </div>
          <p class="hint">
            Always-on price list for OBS. Same patterns and amounts as <strong>Tip menu</strong>.
            Separate Browser Source (transparent, 1920×1080). Pick a layout — Side list is the cam default.
            Changes apply live without reloading OBS.
          </p>
          <label class="field grow">
            <span>Browser Source URL (OBS — transparent)</span>
            <input id="obs-menu-url" type="text" readonly spellcheck="false" />
          </label>
          <div class="actions obs-actions">
            <button type="button" class="btn primary" id="btn-obs-menu-copy">Copy OBS URL</button>
            <button type="button" class="btn" id="btn-obs-menu-open">Open dark preview</button>
          </div>
          <p class="setup-note" id="obs-menu-status" role="status"></p>

          <p class="obs-look-shared-title">Layout</p>
          <div class="obs-menu-gallery" role="listbox" aria-label="Tip menu overlay layouts">
            ${Kg()}
          </div>
          <input type="hidden" id="obs-menu-layout" value="side" />

          <div class="obs-look-preview-wrap">
            <p class="obs-look-preview-label">Live preview</p>
            <div
              class="obs-look-preview"
              id="obs-menu-preview"
              aria-label="Tip menu overlay preview"
            ></div>
            <p class="hint obs-look-preview-hint" id="obs-menu-empty-hint">
              Set patterns and prices on Tip menu — this overlay follows that list.
            </p>
          </div>

          <div class="settings-grid">
            <label class="field">
              <span>Position</span>
              <select id="obs-menu-position">
                <option value="top-left">Top left</option>
                <option value="top-right">Top right</option>
                <option value="bottom-left">Bottom left</option>
                <option value="bottom-right">Bottom right</option>
                <option value="top">Top center</option>
                <option value="bottom">Bottom center</option>
              </select>
            </label>
            <label class="field">
              <span>Size</span>
              <select id="obs-menu-size">
                <option value="compact">Compact</option>
                <option value="normal">Normal</option>
                <option value="large">Large</option>
              </select>
            </label>
            <label class="field">
              <span>Theme</span>
              <select id="obs-menu-theme">
                <option value="cyan">Cyan</option>
                <option value="pink">Pink</option>
                <option value="gold">Gold</option>
                <option value="soft">Soft</option>
              </select>
            </label>
            <label class="field">
              <span>Panel opacity</span>
              <input id="obs-menu-opacity" type="range" min="0.4" max="0.95" step="0.01" />
            </label>
            <label class="field">
              <span>Max rows</span>
              <input id="obs-menu-max-rows" type="number" min="1" max="16" step="1" />
            </label>
            <label class="field grow">
              <span>Headline</span>
              <input id="obs-menu-headline" type="text" maxlength="48" placeholder="Tip menu" spellcheck="false" />
            </label>
            <label class="field grow">
              <span>Brand</span>
              <input id="obs-menu-brand" type="text" maxlength="48" placeholder="Optional stream name" spellcheck="false" />
            </label>
            <label class="field settings-toggle-field">
              <span>Featured patterns first</span>
              <input type="checkbox" id="obs-menu-featured-first" />
            </label>
            <label class="field settings-toggle-field">
              <span>Show toy note</span>
              <input type="checkbox" id="obs-menu-show-note" />
            </label>
            <label class="field settings-toggle-field">
              <span>Show blurb</span>
              <input type="checkbox" id="obs-menu-show-blurb" />
            </label>
          </div>
        </section>

        <section class="settings-block" aria-labelledby="obs-qr-h">
          <div class="settings-block-head">
            <h2 id="obs-qr-h">Tip QR · carousel</h2>
            <button type="button" class="pill obs-qr-header-toggle" id="obs-qr-enabled-pill" aria-pressed="false">OFF</button>
          </div>
          <p class="hint">
            Optional third source. Tip pop-ups stay on the Stream tip alert URL above —
            this carousel is QR slides only (no tip alert overlay).
            Rotation is <strong>pre-show</strong> (how to join + links) →
            <strong>tip menu</strong> (one QR per pattern) →
            <strong>post-show</strong> (same join slides again).
            Tick what you want in each block. Nothing ticked = hidden, no empty box.
          </p>
          <label class="field grow">
            <span>Carousel / QR Browser Source URL (OBS — transparent)</span>
            <input id="obs-qr-url" type="text" readonly spellcheck="false" />
          </label>
          <div class="actions obs-actions">
            <button type="button" class="btn primary" id="btn-obs-qr-copy">Copy carousel URL</button>
            <button type="button" class="btn" id="btn-obs-qr-open">Open dark preview</button>
          </div>
          <p class="setup-note" id="obs-qr-status" role="status"></p>
          <div class="settings-grid">
            <label class="field grow">
              <span>Label</span>
              <input id="obs-qr-label" type="text" maxlength="48" placeholder="Tip on PulseChain" spellcheck="false" />
            </label>
            <label class="field">
              <span>Brand under QR</span>
              <input id="obs-qr-brand" type="text" maxlength="48" placeholder="Your stream name" spellcheck="false" />
            </label>
            <label class="field">
              <span>Position</span>
              <select id="obs-qr-position">
                <option value="bottom-right">Bottom right</option>
                <option value="bottom-left">Bottom left</option>
                <option value="bottom">Bottom center</option>
                <option value="top-right">Top right</option>
                <option value="top-left">Top left</option>
                <option value="top">Top center</option>
              </select>
            </label>
            <label class="field">
              <span>Size</span>
              <select id="obs-qr-size">
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </label>
            <label class="field">
              <span>Look</span>
              <select id="obs-qr-theme">
                <option value="pulse">Pulse</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </label>
            <label class="field">
              <span>Seconds per slide</span>
              <input id="obs-qr-dwell" type="number" min="1" max="20" step="1" />
            </label>
            <label class="field settings-toggle-field obs-qr-master-toggle">
              <span>QR carousel on</span>
              <input type="checkbox" id="obs-qr-carousel" />
            </label>
            <label class="field settings-toggle-field">
              <span>Show shortened address</span>
              <input type="checkbox" id="obs-qr-show-addr" />
            </label>
          </div>
          <p class="obs-look-shared-title" style="margin-top:0.75rem">During the show · creator wallet QRs</p>
          <p class="hint" style="margin-top:0">
            One slide per On pattern. <strong>Featured</strong> patterns go first (then cheapest). Each QR pays your receive wallet only.
          </p>
          <div class="obs-toggles obs-slide-toggles">
            <div class="obs-slide-row">
              <label class="field settings-toggle-field">
                <span>Tip menu (creator wallet · FEAT pattern)</span>
                <input type="checkbox" id="obs-qr-slide-menu" />
              </label>
              <button type="button" class="btn ghost obs-slide-edit" data-slide-edit="menu">Edit</button>
            </div>
          </div>
          <p class="obs-look-shared-title" style="margin-top:0.75rem">Pre &amp; post show · how to join</p>
          <p class="hint" style="margin-top:0">
            <strong>Creator wallet</strong> slides (Tip QR, tip menu) encode your receive address.
            <strong>Website link</strong> slides below open public URLs only — no 0x addresses.
          </p>
          <div class="obs-toggles obs-slide-toggles">
            <div class="obs-slide-row">
              <label class="field settings-toggle-field">
                <span>How to participate</span>
                <input type="checkbox" id="obs-qr-slide-how" />
              </label>
              <button type="button" class="btn ghost obs-slide-edit" data-slide-edit="how">Edit</button>
            </div>
            <div class="obs-slide-row">
              <label class="field settings-toggle-field">
                <span>Tip QR (creator wallet)</span>
                <input type="checkbox" id="obs-qr-slide-qr" />
              </label>
              <button type="button" class="btn ghost obs-slide-edit" data-slide-edit="qr">Edit</button>
            </div>
            <div class="obs-slide-row">
              <label class="field settings-toggle-field">
                <span>Brand spotlight</span>
                <input type="checkbox" id="obs-qr-slide-brand" />
              </label>
              <button type="button" class="btn ghost obs-slide-edit" data-slide-edit="brand">Edit</button>
            </div>
            <div class="obs-slide-row">
              <label class="field settings-toggle-field">
                <span>Ecosystem logos</span>
                <input type="checkbox" id="obs-qr-slide-eco" />
              </label>
              <button type="button" class="btn ghost obs-slide-edit" data-slide-edit="eco">Edit</button>
            </div>
          </div>
          <p class="obs-look-shared-title" style="margin-top:0.75rem">PulseChain pack · website link QRs</p>
          <p class="hint" style="margin-top:0">
            Scan-to-open public sites (Tip Wallet, PulseScan, bridge…). These are <strong>not</strong> payment QRs — fans do not send tips to these links.
          </p>
          <div class="obs-toggles obs-slide-toggles" id="obs-qr-pack-toggles">
            ${ch().map(e=>`
            <div class="obs-slide-row">
              <label class="field settings-toggle-field">
                <span>${e.label}</span>
                <input type="checkbox" id="obs-qr-pack-${e.id}" data-pack-id="${e.id}" />
              </label>
              <button type="button" class="btn ghost obs-slide-edit" data-slide-edit="pack:${e.id}">Edit</button>
            </div>`).join(``)}
          </div>
          <details class="obs-advanced-details obs-qr-edit" id="obs-qr-slide-editor" hidden>
            <summary id="obs-qr-slide-editor-summary">Edit slide HTML</summary>
            <p class="hint" id="obs-qr-slide-editor-hint">
              Tokens:
              <code>{{label}}</code> <code>{{brand}}</code> <code>{{brandOrLabel}}</code>
              <code>{{qrSvg}}</code> <code>{{shortAddress}}</code> <code>{{ecoHtml}}</code>
              <code>{{default}}</code> (built-in HTML) · pack:
              <code>{{packLabel}}</code> <code>{{packQrSvg}}</code> <code>{{packLogo}}</code>
            </p>
            <input type="hidden" id="obs-qr-edit-key" value="" />
            <label class="field grow">
              <span id="obs-qr-slide-html-label">Slide HTML</span>
              <textarea id="obs-qr-slide-html" rows="8" spellcheck="false"></textarea>
            </label>
            <div class="actions obs-actions">
              <button type="button" class="btn primary" id="btn-obs-qr-slide-save">Save slide HTML</button>
              <button type="button" class="btn ghost" id="btn-obs-qr-slide-reset">Reset to built-in</button>
              <button type="button" class="btn" id="btn-obs-qr-slide-close">Close</button>
            </div>
            <p class="setup-note" id="obs-qr-slide-edit-status" role="status"></p>
          </details>
          <details class="obs-advanced-details" id="obs-qr-css-editor">
            <summary>Carousel CSS (all slides)</summary>
            <p class="hint">
              Extra CSS for the OBS carousel card. Targets built-in classes like
              <code>.card</code>, <code>.label</code>, <code>.qr-wrap</code>, <code>.menu-row</code>.
            </p>
            <label class="field grow">
              <span>Custom CSS</span>
              <textarea id="obs-qr-custom-css" rows="8" spellcheck="false"></textarea>
            </label>
          </details>
          <p class="hint" id="obs-qr-addr-hint">No receive wallet set yet — add one on Home.</p>
        </section>

        <section class="settings-block">
          <ol class="obs-steps hint">
            <li>OBS → Sources → + → Browser for the tip pop-up URL</li>
            <li>Add a second Browser Source for the <strong>Tip menu overlay</strong> URL (always-on prices)</li>
            <li>Customize look under <strong>Customize look</strong>, then Send test tip</li>
            <li>Optional: add a third Browser Source for tip QR carousel</li>
            <li>Paste each OBS URL without <code>?preview</code>; keep Just The Tip running while live</li>
            <li><strong>Branding</strong> — official logo kits (HEX / PulseChain / PulseX)</li>
          </ol>
        </section>
      </div>
  `}var Jg=[`obs-position`,`obs-theme`,`obs-size`,`obs-hold`,`obs-eyebrow`,`obs-brand`,`obs-wallet-min`,`obs-pool-min`,`obs-show-pattern`,`obs-show-pool-alerts`,`obs-show-pool-label`,`obs-show-dry`,`obs-show-status`,`obs-show-eco`,`obs-custom-html`,`obs-custom-css`];function Yg(e){let t=e.el,n=document.getElementById(`obs-look-preview`),r=document.getElementById(`obs-board-preview`),i=n?Vg(n):null,a=r?Vg(r):null,o=document.getElementById(`obs-menu-preview`),s=o?Tg(o):null,c=new Map;for(let e of kh){let t=document.getElementById(`obs-menu-thumb-${e.id}`);t&&c.set(e.id,Eg(t))}function l(){return Uh(e.getMenuOffers(),{featuredFirst:!0})}function u(){let t=v(),n=e.getChainSymbol();i?.refresh(t,n),a?.refresh(t,n)}function d(){let e=S(),t=l();s?.refresh(e,t);for(let n of kh)c.get(n.id)?.refresh({...e,layout:n.id},t);let n=document.getElementById(`obs-menu-empty-hint`);n&&(n.hidden=t.length>0),document.querySelectorAll(`[data-menu-layout]`).forEach(t=>{let n=t.getAttribute(`data-menu-layout`)===e.layout;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-pressed`,n?`true`:`false`)})}function f(){return document.getElementById(`obs-look-mode`)?.value===`template`?`template`:`builtin`}function p(e,t){let n=document.getElementById(`obs-look-mode`);n&&(n.value=e);let r=document.getElementById(`obs-tab-builtin`),i=document.getElementById(`obs-tab-template`),a=document.getElementById(`obs-panel-builtin`),o=document.getElementById(`obs-panel-template`),s=document.getElementById(`obs-look-mode-pill`);r?.classList.toggle(`is-active`,e===`builtin`),i?.classList.toggle(`is-active`,e===`template`),r?.setAttribute(`aria-selected`,e===`builtin`?`true`:`false`),i?.setAttribute(`aria-selected`,e===`template`?`true`:`false`),a&&(a.hidden=e!==`builtin`),o&&(o.hidden=e!==`template`),s&&(s.textContent=e===`template`?`Templates`:`Built-in`,s.classList.toggle(`on`,e===`template`)),t?.silent||h(),u()}function m(e){if(e===f()){p(e);return}if(e===`builtin`)_(),p(`builtin`),x(),t(`obs-status`).textContent=`Built-in themes — pick a color, then Send test tip`;else{p(`template`);let e=document.getElementById(`obs-template`);if(!t(`obs-custom-html`).value.trim()){let t=Om(e?.value||Dm[0].id);t&&g(t)}x(),h();let n=Om(document.getElementById(`obs-template`)?.value||``);t(`obs-status`).textContent=n?`Template “${n.name}” — Send test tip (Open dark preview to see)`:`Template packs`}}function h(){let e=document.getElementById(`obs-template-blurb`),t=document.getElementById(`obs-template`);if(!e||!t)return;let n=Om(t.value);e.textContent=n?`${n.name} — ${n.blurb}`:``}function g(e){t(`obs-custom-html`).value=e.html,t(`obs-custom-css`).value=e.css,e.position&&(t(`obs-position`).value=e.position),e.size&&(t(`obs-size`).value=e.size)}function _(){t(`obs-custom-html`).value=``,t(`obs-custom-css`).value=``;let e=t(`obs-theme`);(!e.value||e.value===`custom`)&&(e.value=`cyan`)}function v(){let n=document.getElementById(`obs-position`);if(!n)return Im(e.getStyle()||km);let r=f(),i=t(`obs-theme`).value,a=t(`obs-custom-html`).value,o=t(`obs-custom-css`).value;return r===`builtin`?(a=``,o=``,(i===`custom`||!i)&&(i=`cyan`)):i=`custom`,Im({position:n.value,theme:i,size:t(`obs-size`).value,holdSec:Number(t(`obs-hold`).value),eyebrow:t(`obs-eyebrow`).value,brand:t(`obs-brand`).value,walletMinAmount:Number(t(`obs-wallet-min`).value),poolMinAmount:Number(t(`obs-pool-min`).value),showPattern:t(`obs-show-pattern`).checked,showPoolAlerts:t(`obs-show-pool-alerts`).checked,showPoolLabel:t(`obs-show-pool-label`).checked,showDryRun:t(`obs-show-dry`).checked,showStatus:t(`obs-show-status`).checked,showEco:t(`obs-show-eco`).checked,customHtml:a,customCss:o})}function y(e){let n=Lm(e)?`template`:`builtin`;t(`obs-position`).value=e.position;let r=e.theme===`pink`||e.theme===`gold`||e.theme===`soft`?e.theme:`cyan`;t(`obs-theme`).value=r,t(`obs-size`).value=e.size,t(`obs-hold`).value=String(e.holdSec),t(`obs-eyebrow`).value=e.eyebrow,t(`obs-brand`).value=e.brand,t(`obs-wallet-min`).value=String(e.walletMinAmount||0),t(`obs-pool-min`).value=String(e.poolMinAmount||0),t(`obs-show-pattern`).checked=e.showPattern,t(`obs-show-pool-alerts`).checked=e.showPoolAlerts,t(`obs-show-pool-label`).checked=e.showPoolLabel,t(`obs-show-dry`).checked=e.showDryRun,t(`obs-show-status`).checked=e.showStatus,t(`obs-show-eco`).checked=e.showEco!==!1,t(`obs-custom-html`).value=e.customHtml||``,t(`obs-custom-css`).value=e.customCss||``;let i=Wg(e.customHtml||``,e.customCss||``),a=document.getElementById(`obs-template`);a&&i&&(a.value=i.id),p(n)}async function b(){let e=t(`obs-status`),n=t(`obs-clients-pill`),r=mg(),{clients:i,ok:a}=await pg();if(!a){n.textContent=`offline`,n.classList.remove(`on`),e.textContent=`Could not reach overlay API — keep the Just The Tip dev server running`;return}n.textContent=i===0?`0 watching`:i===1?`1 watching`:`${i} watching`,n.classList.toggle(`on`,i>0),e.textContent=i>0?`OBS (or a preview tab) connected · tips will show live`:`No OBS yet · paste ${r} as Browser Source, or Open dark preview`}function x(){let t=v();return e.setStyle(t),e.persist(t),u(),ug(t)}function S(){let n=document.getElementById(`obs-menu-layout`);return Ph(n?{layout:n.value||`side`,position:t(`obs-menu-position`).value,size:t(`obs-menu-size`).value,theme:t(`obs-menu-theme`).value,opacity:Number(t(`obs-menu-opacity`).value),maxRows:Number(t(`obs-menu-max-rows`).value),headline:t(`obs-menu-headline`).value,brand:t(`obs-menu-brand`).value,featuredFirst:t(`obs-menu-featured-first`).checked,showNote:t(`obs-menu-show-note`).checked,showBlurb:t(`obs-menu-show-blurb`).checked}:e.getMenuStyle()||Ah)}function C(e){let n=document.getElementById(`obs-menu-layout`);if(!n)return;n.value=e.layout,t(`obs-menu-position`).value=e.position,t(`obs-menu-size`).value=e.size,t(`obs-menu-theme`).value=e.theme,t(`obs-menu-opacity`).value=String(e.opacity),t(`obs-menu-max-rows`).value=String(e.maxRows),t(`obs-menu-headline`).value=e.headline,t(`obs-menu-brand`).value=e.brand,t(`obs-menu-featured-first`).checked=e.featuredFirst!==!1,t(`obs-menu-show-note`).checked=!!e.showNote,t(`obs-menu-show-blurb`).checked=!!e.showBlurb;let r=document.getElementById(`obs-menu-url`);r&&(r.value=gg())}function w(){let t=S();return e.setMenuStyle(t),e.persistMenu(t),d(),dg(l()),fg(t)}function T(){let n=document.getElementById(`obs-qr-position`),r={menuOffers:e.getMenuOffers(),menuSymbol:e.getChainSymbol()};return Th(n?{address:e.getReceiveAddress(),label:t(`obs-qr-label`).value,brand:t(`obs-qr-brand`).value,position:n.value,size:t(`obs-qr-size`).value,theme:t(`obs-qr-theme`).value,showAddress:t(`obs-qr-show-addr`).checked,carousel:t(`obs-qr-carousel`).checked,dwellSec:Number(t(`obs-qr-dwell`).value)||7,slides:{qr:t(`obs-qr-slide-qr`).checked,brand:t(`obs-qr-slide-brand`).checked,menu:t(`obs-qr-slide-menu`).checked,eco:t(`obs-qr-slide-eco`).checked,how:t(`obs-qr-slide-how`).checked,pack:k()},slideHtml:e.getQr().slideHtml||{},customCss:t(`obs-qr-custom-css`).value,...r}:{...dh,...e.getQr(),address:e.getReceiveAddress(),...r})}function E(t){let n=document.getElementById(`obs-qr-slide-editor`),r=document.getElementById(`obs-qr-edit-key`),i=document.getElementById(`obs-qr-slide-html`),a=document.getElementById(`obs-qr-slide-editor-summary`),o=document.getElementById(`obs-qr-slide-html-label`),s=document.getElementById(`obs-qr-slide-edit-status`);if(!n||!r||!i)return;let c=ch().find(e=>`pack:${e.id}`===t)?.label||Oh(t);r.value=t;let l=(e.getQr().slideHtml||{})[t];i.value=l?.trim()?l:Dh(t),a&&(a.textContent=`Edit HTML · ${c}`),o&&(o.textContent=`${c} HTML`),s&&(s.textContent=l?.trim()?`Custom HTML loaded — Save to keep edits`:`Starter template shown — Save to use it (or Reset for built-in)`),n.hidden=!1,n.setAttribute(`open`,``),i.focus()}function D(){let e=document.getElementById(`obs-qr-slide-editor`),t=document.getElementById(`obs-qr-edit-key`);t&&(t.value=``),e&&(e.hidden=!0,e.removeAttribute(`open`))}function ee(){let t=e.getQr().slideHtml||{};document.querySelectorAll(`[data-slide-edit]`).forEach(e=>{let n=e.getAttribute(`data-slide-edit`)||``;e.classList.toggle(`is-custom`,!!t[n]?.trim()),e.title=t[n]?.trim()?`Custom HTML set — click to edit`:`Edit HTML for this slide`})}async function te(){let t=document.getElementById(`obs-qr-edit-key`),n=document.getElementById(`obs-qr-slide-html`),r=t?.value?.trim();if(!r||!n)return;let i={...e.getQr().slideHtml||{}},a=n.value.trim();a?i[r]=a:delete i[r];let o=Th({...T(),slideHtml:i});e.setQr(o),e.persistQr(o);let s=await og({...o,menuOffers:e.getMenuOffers(),menuSymbol:e.getChainSymbol()});ee();let c=document.getElementById(`obs-qr-slide-edit-status`);c&&(c.textContent=s?a?`Saved — open dark preview to check the slide`:`Built-in layout restored for this slide`:`Could not push to hub`)}async function O(){let t=document.getElementById(`obs-qr-edit-key`),n=document.getElementById(`obs-qr-slide-html`),r=t?.value?.trim();if(!r)return;let i={...e.getQr().slideHtml||{}};delete i[r];let a=Th({...T(),slideHtml:i});e.setQr(a),e.persistQr(a),n&&(n.value=Dh(r)),await og({...a,menuOffers:e.getMenuOffers(),menuSymbol:e.getChainSymbol()}),ee();let o=document.getElementById(`obs-qr-slide-edit-status`);o&&(o.textContent=`Back to built-in layout for this slide`)}function k(){let e=lh();for(let t of ch()){let n=document.getElementById(`obs-qr-pack-${t.id}`);n&&(e[t.id]=n.checked)}return e}function A(t){return Th({...t||e.getQr(),address:e.getReceiveAddress(),menuOffers:e.getMenuOffers(),menuSymbol:e.getChainSymbol()})}async function ne(e){return og(A(e))}function re(t){let n=Th({...t,address:e.getReceiveAddress(),menuOffers:[]});return e.setQr(n),e.persistQr(n),n}function j(e){let t=document.getElementById(`obs-qr-enabled-pill`);t&&(t.textContent=e?`ON`:`OFF`,t.classList.toggle(`on`,e),t.classList.toggle(`off`,!e),t.setAttribute(`aria-pressed`,e?`true`:`false`),t.title=e?`Turn QR carousel off`:`Turn QR carousel on`)}let M=!1;function N(n){let r=e.getReceiveAddress().trim();t(`obs-qr-url`).value=sg(),t(`obs-qr-label`).value=n.label||dh.label,t(`obs-qr-brand`).value=n.brand||``,t(`obs-qr-position`).value=n.position,t(`obs-qr-size`).value=n.size,t(`obs-qr-theme`).value=n.theme,t(`obs-qr-show-addr`).checked=n.showAddress!==!1,t(`obs-qr-carousel`).checked=n.carousel!==!1,t(`obs-qr-dwell`).value=String(n.dwellSec||7);let i=n.slides||dh.slides;t(`obs-qr-slide-qr`).checked=i.qr!==!1,t(`obs-qr-slide-brand`).checked=i.brand!==!1,t(`obs-qr-slide-menu`).checked=i.menu!==!1,t(`obs-qr-slide-eco`).checked=i.eco!==!1,t(`obs-qr-slide-how`).checked=i.how!==!1;let a=i.pack||lh();for(let e of ch()){let t=document.getElementById(`obs-qr-pack-${e.id}`);t&&(t.checked=a[e.id]===!0)}t(`obs-qr-custom-css`).value=n.customCss||``,ee(),j(n.enabled);let o=document.getElementById(`obs-qr-addr-hint`);if(o){let t=(n.menuOffers||e.getMenuOffers()).length,a=r?`Encoding receive wallet ${r.slice(0,8)}…${r.slice(-4)}`:`No receive wallet set yet — add one on Home.`;o.textContent=t>0?`${a} · tip menu carousel has ${t} pattern${t===1?``:`s`}`:i.menu===!1?`${a} · tick Tip QR or a pack website link below`:`${a} · Tip menu is on but no patterns yet — enable toys/patterns on Tip menu`}M=!0}async function P(){let t=re(M?T():e.getQr()),n=await ne(t);j(t.enabled);let r=document.getElementById(`obs-qr-status`);r&&(r.textContent=n?t.carousel?t.enabled?t.address.trim()?`On for OBS · open dark preview to watch the rotation`:`On, but tip QR needs a receive address in Settings (other slides still rotate)`:`Hidden in OBS — tick at least one slide or pack QR below`:`QR overlay off for OBS — turn QR carousel on to show it`:`Could not push QR to hub`)}async function F(){M=!0;let e=re(T()),t=await ne(e);j(e.enabled);let n=document.getElementById(`obs-qr-status`);n&&(n.textContent=t?e.carousel?e.enabled?e.address.trim()?`On for OBS · open dark preview to watch the rotation`:`On, but tip QR needs a receive address in Settings (other slides still rotate)`:`Hidden in OBS — tick at least one slide or pack QR below`:`QR overlay off for OBS — turn QR carousel on to show it`:`Could not push QR to hub`)}function I(){let n=Im(e.getStyle()||km);e.setStyle(n),t(`obs-overlay-url`).value=mg(),y(n),ug(n),M=!1;let r=Th({...dh,...e.getQr(),address:e.getReceiveAddress()});N(r),ne(r);let i=Ph(e.getMenuStyle()||Ah);C(i),fg(i),dg(l()),b(),u(),d()}function L(){ug(Im(e.getStyle()||km)),ne(M&&e.isPageActive()?T():e.getQr()),fg(Ph(e.getMenuStyle()||Ah)),dg(l())}async function ie(e){let t=await lg(e);return t.ok&&!t.filtered}function ae(){if(f()!==`template`)return;let e=Om(document.getElementById(`obs-template`)?.value||``);e&&(g(e),h(),x(),t(`obs-status`).textContent=`Switched to “${e.name}” · preview updated above`)}function oe(e){let t=document.getElementById(`obs-branding-status`);t&&(t.textContent=e)}function R(){let e=document.getElementById(`obs-branding-modal`);e&&(e.hidden=!1,oe(``),document.getElementById(`btn-obs-branding-close`)?.focus())}function se(){let e=document.getElementById(`obs-branding-modal`);e&&(e.hidden=!0)}document.getElementById(`btn-obs-branding`)?.addEventListener(`click`,()=>R()),document.getElementById(`btn-obs-branding-close`)?.addEventListener(`click`,()=>se());let ce=document.getElementById(`obs-branding-modal`);ce&&Dg(ce,se),document.getElementById(`btn-obs-branding-eco-on`)?.addEventListener(`click`,()=>{let e=document.getElementById(`obs-show-eco`);e&&(e.checked=!0,x()),oe(`On. Copy OBS URL on the main page, then Send test tip to confirm.`)}),t(`btn-obs-copy`).addEventListener(`click`,async()=>{let e=mg(),n=t(`obs-status`);if(await Sg(e)){n.textContent=`Copied OBS URL (transparent background)`;return}t(`obs-overlay-url`).select(),n.textContent=`Select the URL and copy (Ctrl+C)`}),t(`btn-obs-open`).addEventListener(`click`,()=>{vg(hg()),window.setTimeout(()=>void b(),600),t(`obs-status`).textContent=`Dark preview opened — Send test tip; OBS should still use the transparent URL`});function le(e){let t=v(),n={title:e.title,subtitle:e.subtitle||``,eyebrow:e.eyebrow,brand:String(t.brand||``).trim(),amount:e.amount,symbol:e.symbol,source:e.source};i?.flash(t,n),a?.flash(t,n)}async function ue(e,t){let n=await lg({...e,force:!0});return n.ok&&!n.filtered&&n.clients===0&&(vg(hg()),await new Promise(e=>window.setTimeout(e,900)),n=await lg({...e,force:!0})),n.ok&&!n.filtered&&le({title:e.title||`${e.amount} ${e.symbol}`,subtitle:e.subtitle,eyebrow:t.eyebrow,amount:e.amount,symbol:e.symbol,source:e.source||`test`}),n}t(`btn-obs-test`).addEventListener(`click`,()=>{(async()=>{let n=t(`obs-status`);n.textContent=`Sending test tip…`,await x();let r=e.getStyle(),i=e.getChainSymbol(),a=await ue({id:`test-${Date.now()}`,amount:1e3,symbol:i,title:`1,000 ${i}`,subtitle:r?.showPattern?`Test alert · stream tip`:void 0,source:`test`,dryRun:!1,usd:8,force:!0},{eyebrow:`Test tip`});n.textContent=a.ok?a.filtered?`Filtered (min amount?) — lower min amount or check Look filters`:a.clients===0?`Tip sent · preview opened — if you still see nothing, check the dark preview window`:`Test tip sent · ${a.clients} watching`:a.error?`Test tip failed: ${a.error}`:`Test tip failed — is the server running?`,b()})()}),t(`btn-obs-test-pool`).addEventListener(`click`,()=>{(async()=>{let n=t(`obs-status`);n.textContent=`Sending test pool swap…`,await x();let r=e.getStyle(),i=await ue({id:`pool-test-${Date.now()}`,amount:2500,symbol:`WPLS`,title:`2,500 WPLS`,subtitle:r?.showPoolLabel?`PulseX · test pool swap`:`Test pool swap`,source:`pool`,eventKind:`swap`,dryRun:!1,usd:12,force:!0},{eyebrow:`Test pool swap`});n.textContent=i.ok?i.filtered?`Filtered — tick “Show pool / chain event alerts” and lower the chain event alert minimum`:i.clients===0?`Pool test sent · preview opened — check the dark preview window`:`Test pool swap sent · ${i.clients} watching`:i.error?`Test pool swap failed: ${i.error}`:`Test pool swap failed — is the server running?`,b()})()}),document.getElementById(`btn-obs-qr-copy`)?.addEventListener(`click`,async()=>{let e=sg(),n=document.getElementById(`obs-qr-status`);if(await Sg(e)){n&&(n.textContent=`Copied QR OBS URL`);return}t(`obs-qr-url`).select(),n&&(n.textContent=`Select the QR URL and copy (Ctrl+C)`)}),document.getElementById(`btn-obs-qr-open`)?.addEventListener(`click`,()=>{(e.isPageActive()?P():ne()).then(()=>{vg(cg());let e=document.getElementById(`obs-qr-status`);e&&(e.textContent=`Dark QR preview opened — OBS uses the URL without ?preview`)})}),document.getElementById(`btn-obs-menu-copy`)?.addEventListener(`click`,async()=>{let e=gg(),t=document.getElementById(`obs-menu-status`);if(await Sg(e)){t&&(t.textContent=`Copied tip menu OBS URL (transparent background)`);return}document.getElementById(`obs-menu-url`)?.select(),t&&(t.textContent=`Select the URL and copy (Ctrl+C)`)}),document.getElementById(`btn-obs-menu-open`)?.addEventListener(`click`,()=>{w().then(()=>{vg(_g());let e=document.getElementById(`obs-menu-status`);e&&(e.textContent=`Dark tip menu preview opened — OBS uses the URL without ?preview`)})}),document.querySelectorAll(`[data-menu-layout]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-menu-layout`)||`side`,n=document.getElementById(`obs-menu-layout`);n&&(n.value=t),w();let r=document.getElementById(`obs-menu-status`);r&&(r.textContent=`Layout updated — OBS follows without a reload`)})}),document.getElementById(`obs-qr-enabled-pill`)?.addEventListener(`click`,()=>{let e=document.getElementById(`obs-qr-carousel`);e&&(e.checked=!e.checked,F())}),document.querySelectorAll(`.obs-look-tab`).forEach(e=>{e.addEventListener(`click`,()=>{m(e.dataset.lookMode===`template`?`template`:`builtin`)})}),document.getElementById(`obs-template`)?.addEventListener(`change`,ae);for(let e of Jg){let n=document.getElementById(e);n?.addEventListener(`change`,()=>{if((e===`obs-custom-html`||e===`obs-custom-css`)&&f()===`builtin`){m(`template`);return}x()}),n?.addEventListener(`input`,()=>{(e===`obs-eyebrow`||e===`obs-brand`||e===`obs-custom-html`||e===`obs-custom-css`)&&(window.clearTimeout(n._t),n._t=window.setTimeout(()=>{(e===`obs-custom-html`||e===`obs-custom-css`)&&f()===`builtin`&&(t(`obs-custom-html`).value.trim()||t(`obs-custom-css`).value.trim())&&p(`template`),x()},400))})}for(let e of[`obs-menu-position`,`obs-menu-size`,`obs-menu-theme`,`obs-menu-opacity`,`obs-menu-max-rows`,`obs-menu-headline`,`obs-menu-brand`,`obs-menu-featured-first`,`obs-menu-show-note`,`obs-menu-show-blurb`]){let t=document.getElementById(e);t?.addEventListener(`change`,()=>void w()),t?.addEventListener(`input`,()=>{window.clearTimeout(t._t),t._t=window.setTimeout(()=>void w(),400)})}let de=[`obs-qr-label`,`obs-qr-brand`,`obs-qr-position`,`obs-qr-size`,`obs-qr-theme`,`obs-qr-show-addr`,`obs-qr-carousel`,`obs-qr-dwell`,`obs-qr-slide-qr`,`obs-qr-slide-brand`,`obs-qr-slide-menu`,`obs-qr-slide-eco`,`obs-qr-slide-how`,`obs-qr-custom-css`,...ch().map(e=>`obs-qr-pack-${e.id}`)];for(let e of de){let t=document.getElementById(e);t?.addEventListener(`change`,()=>void F()),t?.addEventListener(`input`,()=>{window.clearTimeout(t._t),t._t=window.setTimeout(()=>void F(),400)})}document.querySelectorAll(`[data-slide-edit]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-slide-edit`);t&&E(t)})}),document.getElementById(`btn-obs-qr-slide-save`)?.addEventListener(`click`,()=>{te()}),document.getElementById(`btn-obs-qr-slide-reset`)?.addEventListener(`click`,()=>{O()}),document.getElementById(`btn-obs-qr-slide-close`)?.addEventListener(`click`,()=>D());let fe=window.setInterval(()=>{e.isPageActive()&&b()},4e3);return L(),{paint:I,readStyle:v,saveStyle:x,syncQr:P,readQr:T,readMenuStyle:S,saveMenuStyle:w,syncHub:L,notify:ie,dispose:()=>{window.clearInterval(fe),se()}}}var Y={chainKey:`pulsechain`,receive:``,savedWallets:[],rpcList:Hc(Bc(`pulsechain`)),minAmount:0,tokenAddress:``,tokenDecimals:18,tokenSymbol:`TOKEN`,savedTokens:[],coinRewardRules:[],acceptedStables:[],paintCoinKeys:[],hiddenTipCoins:[],poolWatch:!1,pools:[],bridges:[],chainLogs:[],backend:`lovense`,intifaceUrl:`ws://127.0.0.1:12345`,lovenseLocalIp:``,lovenseAppId:``,nightMode:!0,dryRun:!1,queueGapMs:450,maxQueue:64,pollMs:4e3,watchLive:!1,watchLiveSince:0,hardwareLive:!0,defaultPattern:`wave`,patternPrices:Fd(),toyPatternPrices:{},patternRatings:cf(),disabledPatterns:Of(),featuredPatterns:[],disabledToys:[],toyMotorMasks:{},toyIdentity:{},savedToys:[],menuSort:`duration-asc`,menuUsdLo:3.69,menuUsdHi:55.55,toyMenuUsd:{},menuMaxVibe:8,toyMaxVibe:{},menuFilterFullCatalog:!1,menuFilterToyIds:null,overlayStyle:structuredClone(km),overlayQr:structuredClone(dh),overlayMenu:structuredClone(Ah),customPatterns:[],patternOverrides:{}};function Xg(e){if(!e||typeof e!=`object`||Array.isArray(e))return{};let t={};for(let[n,r]of Object.entries(e)){if(!n||typeof n!=`string`||!Array.isArray(r))continue;let e=[...new Set(r.map(e=>Math.round(Number(e))).filter(e=>e===1||e===2||e===3))].sort();e.length&&(t[n]=e)}return t}function Zg(e,t,n,r){let i=Number(e);return Number.isFinite(i)?Math.min(n,Math.max(t,Math.round(i))):r}function Qg(e,t){let n=Number(e);return!Number.isFinite(n)||n<=0?t:Math.min(1e6,Math.round(n*100)/100)}function $g(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r of e){let e=String(r||``).trim().toLowerCase();if(!(!e||n.has(e))&&(n.add(e),t.push(e),t.length>=48))break}return t}function e_(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r of e){let e=String(r??``).trim().toLowerCase();if(!(!e||n.has(e))&&!(e!==`native`&&Xf(e))&&(n.add(e),t.push(e),t.length>=48))break}return t}function t_(e,t){return Array.isArray(e)?$g(e).filter(e=>Yf.has(e)):t===!0?[...Yf]:[]}function n_(e,t){let n=String(t||``).trim().toLowerCase();return!n||!Yf.has(n)?!1:(e||[]).some(e=>String(e||``).trim().toLowerCase()===n)}function r_(e,t=8){return Zg(e,1,8,t)}function i_(e){if(!e||typeof e!=`object`||Array.isArray(e))return{};let t={};for(let[n,r]of Object.entries(e)){let e=String(n||``).trim();e&&(t[e]=r_(r,8))}return t}function a_(e,t){let n=r_(t.menuMaxVibe,Y.menuMaxVibe);if(e){let r=t.toyMaxVibe?.[e];if(r!=null)return r_(r,n)}return n}function o_(e){if(!e||typeof e!=`object`||Array.isArray(e))return{};let t={};for(let[n,r]of Object.entries(e)){let e=String(n||``).trim();if(!e||!r||typeof r!=`object`||Array.isArray(r))continue;let i=r,a=Qg(i.lo,Y.menuUsdLo),o=Qg(i.hi,Y.menuUsdHi);t[e]={lo:a,hi:Math.max(a,o)}}return t}function s_(e,t=Y){let n=e.rpcList;!n&&e.rpcUrl&&(n=e.rpcUrl),n||=t.rpcList||Hc(Bc(Rc(e.chainKey??t.chainKey))),n=Wc(String(n||``));let r;r=e.patternPrices&&typeof e.patternPrices==`object`&&!Array.isArray(e.patternPrices)?of(e.patternPrices):df(e.priceTiers)??Fd();let i={chainKey:Rc(e.chainKey??t.chainKey??Y.chainKey),receive:e.receive??t.receive??``,savedWallets:Vf(e.savedWallets??t.savedWallets),rpcList:n,minAmount:Number(e.minAmount??t.minAmount)||0,tokenAddress:(()=>{let n=e.tokenAddress??t.tokenAddress??``;return pp(n)?``:n})(),tokenDecimals:Number(e.tokenDecimals??t.tokenDecimals)||18,tokenSymbol:pp(e.tokenAddress??t.tokenAddress??``)?`PLS`:e.tokenSymbol||t.tokenSymbol||`TOKEN`,savedTokens:gp(mp(e.savedTokens??t.savedTokens),e.hiddenTipCoins??t.hiddenTipCoins),coinRewardRules:(()=>{if(Object.prototype.hasOwnProperty.call(e,`coinRewardRules`))return Sp(e.coinRewardRules);let n=Sp(t.coinRewardRules);return n.length?n:Yp({patternPrices:r,tokenAddress:e.tokenAddress??t.tokenAddress??``,tokenSymbol:e.tokenSymbol||t.tokenSymbol||`TOKEN`,existing:[]})})(),acceptedStables:t_(e.acceptedStables??t.acceptedStables,e.acceptStables===void 0?t.acceptStables===void 0?void 0:!!t.acceptStables:!!e.acceptStables),paintCoinKeys:e_(e.paintCoinKeys??t.paintCoinKeys),hiddenTipCoins:$g(e.hiddenTipCoins??t.hiddenTipCoins),poolWatch:e.poolWatch===void 0?!!t.poolWatch:!!e.poolWatch,pools:fl(e.pools===void 0?t.pools:e.pools),bridges:wl(e.bridges===void 0?t.bridges:e.bridges),chainLogs:Fl(e.chainLogs===void 0?t.chainLogs:e.chainLogs),backend:(()=>{let n=String(e.backend||t.backend||`lovense`).trim();return n===`bluetooth`||n===`ble`||n===`toy`?`bluetooth`:n===`lovense`?`lovense`:n===`lovense-remote`||n===`remote`?`lovense-remote`:n===`intiface`?`intiface`:`lovense`})(),intifaceUrl:e.intifaceUrl||t.intifaceUrl||Y.intifaceUrl,lovenseLocalIp:(()=>{let n=String(e.lovenseLocalIp||e.lovenseUrl||t.lovenseLocalIp||Y.lovenseLocalIp||``).trim();return/^127\.0\.0\.1\b/i.test(n)||/^localhost\b/i.test(n)||/\/\/127\.0\.0\.1\b/i.test(n)||/\/\/localhost\b/i.test(n)?``:n})(),lovenseAppId:e.lovenseAppId??t.lovenseAppId??``,nightMode:e.nightMode!==!1,dryRun:!1,queueGapMs:Zg(e.queueGapMs,0,1e4,Y.queueGapMs),maxQueue:Zg(e.maxQueue,1,256,Y.maxQueue),pollMs:Zg(e.pollMs,1500,3e4,Y.pollMs),watchLive:!!(e.watchLive??t.watchLive??Y.watchLive),watchLiveSince:Zg(e.watchLiveSince??t.watchLiveSince,0,2**53-1,0),hardwareLive:!!(e.hardwareLive??t.hardwareLive??Y.hardwareLive),defaultPattern:(typeof e.defaultPattern==`string`?e.defaultPattern:t.defaultPattern)||Y.defaultPattern,patternPrices:r,toyPatternPrices:sf(e.toyPatternPrices??t.toyPatternPrices),patternRatings:lf(e.patternRatings??t.patternRatings),disabledPatterns:Array.isArray(e.disabledPatterns)?e.disabledPatterns.filter(e=>typeof e==`string`):t.disabledPatterns?.length?[...t.disabledPatterns]:Y.disabledPatterns,featuredPatterns:Array.isArray(e.featuredPatterns)?e.featuredPatterns.filter(e=>typeof e==`string`):t.featuredPatterns?.length?[...t.featuredPatterns]:[],disabledToys:Array.isArray(e.disabledToys)?e.disabledToys.filter(e=>typeof e==`string`&&e.trim()):t.disabledToys?.length?[...t.disabledToys]:[],toyMotorMasks:Xg(e.toyMotorMasks??t.toyMotorMasks),toyIdentity:cm(e.toyIdentity??t.toyIdentity),savedToys:_m(e.savedToys??t.savedToys),menuSort:Pd(e.menuSort)?e.menuSort:Pd(t.menuSort)?t.menuSort:Y.menuSort,menuUsdLo:Qg(e.menuUsdLo??t.menuUsdLo,Y.menuUsdLo),menuUsdHi:Qg(e.menuUsdHi??t.menuUsdHi,Y.menuUsdHi),toyMenuUsd:o_(e.toyMenuUsd??t.toyMenuUsd),menuMaxVibe:r_(e.menuMaxVibe??t.menuMaxVibe,Y.menuMaxVibe),toyMaxVibe:i_(e.toyMaxVibe??t.toyMaxVibe),menuFilterFullCatalog:e.menuFilterFullCatalog===void 0?(e.menuToyFilter??t.menuToyFilter)===``||!!t.menuFilterFullCatalog:!!e.menuFilterFullCatalog,menuFilterToyIds:(()=>{if(e.menuFilterToyIds===null)return null;if(Array.isArray(e.menuFilterToyIds))return e.menuFilterToyIds.filter(e=>typeof e==`string`&&e.trim());if(t.menuFilterToyIds===null)return null;if(Array.isArray(t.menuFilterToyIds))return[...t.menuFilterToyIds];let n=e.menuToyFilter??t.menuToyFilter;return n===`*`?null:typeof n==`string`&&n&&n!==``?[n]:null})(),overlayStyle:Im(e.overlayStyle??t.overlayStyle??km),overlayQr:Th(e.overlayQr??t.overlayQr??dh),overlayMenu:Ph(e.overlayMenu??t.overlayMenu??Ah),customPatterns:wd(e.customPatterns??t.customPatterns),patternOverrides:Td(e.patternOverrides??t.patternOverrides)};return Ed(i.customPatterns,i.patternOverrides),i.patternPrices=of(i.patternPrices),i.toyPatternPrices=Zd(i.patternPrices,sf(i.toyPatternPrices)),i.patternRatings=lf(i.patternRatings),i.disabledPatterns=gf(i.disabledPatterns),i.featuredPatterns=_f(i.featuredPatterns),Od(i.defaultPattern)||(i.defaultPattern=Y.defaultPattern),i}function c_(e){return Ed(e.customPatterns,e.patternOverrides),e.patternPrices=of(e.patternPrices),e.toyPatternPrices=Zd(e.patternPrices,sf(e.toyPatternPrices)),e.patternRatings=lf(e.patternRatings),e}function l_(){try{let e=localStorage.getItem(zc);if(!e){let e=structuredClone(Y);return e.savedTokens=gp(e.savedTokens),c_(e)}return c_(s_(JSON.parse(e)))}catch{let e=structuredClone(Y);return e.savedTokens=gp(e.savedTokens),c_(e)}}function u_(e){Ed(e.customPatterns,e.patternOverrides);let t=Th({...e.overlayQr||dh,menuOffers:[]}),n={chainKey:e.chainKey,receive:e.receive,savedWallets:Vf(e.savedWallets),rpcList:e.rpcList,minAmount:e.minAmount,tokenAddress:pp(e.tokenAddress)?``:e.tokenAddress,tokenDecimals:e.tokenDecimals,tokenSymbol:pp(e.tokenAddress)?`PLS`:e.tokenSymbol,savedTokens:gp(mp(e.savedTokens),e.hiddenTipCoins),coinRewardRules:Sp(e.coinRewardRules),acceptedStables:t_(e.acceptedStables),paintCoinKeys:e_(e.paintCoinKeys),hiddenTipCoins:$g(e.hiddenTipCoins),poolWatch:!!e.poolWatch,pools:fl(e.pools),bridges:wl(e.bridges),chainLogs:Fl(e.chainLogs),backend:e.backend,intifaceUrl:e.intifaceUrl,lovenseLocalIp:e.lovenseLocalIp,lovenseAppId:e.lovenseAppId,nightMode:e.nightMode,dryRun:!1,queueGapMs:e.queueGapMs,maxQueue:e.maxQueue,pollMs:e.pollMs,watchLive:!!e.watchLive,watchLiveSince:Zg(e.watchLiveSince,0,2**53-1,0),hardwareLive:e.hardwareLive!==!1,defaultPattern:e.defaultPattern,patternPrices:of(e.patternPrices),toyPatternPrices:Zd(of(e.patternPrices),sf(e.toyPatternPrices)),patternRatings:e.patternRatings,disabledPatterns:e.disabledPatterns,featuredPatterns:e.featuredPatterns,disabledToys:e.disabledToys,toyMotorMasks:Xg(e.toyMotorMasks),toyIdentity:cm(e.toyIdentity),savedToys:_m(e.savedToys),menuSort:e.menuSort,menuUsdLo:Qg(e.menuUsdLo,Y.menuUsdLo),menuUsdHi:Qg(e.menuUsdHi,Y.menuUsdHi),toyMenuUsd:o_(e.toyMenuUsd),menuMaxVibe:r_(e.menuMaxVibe,Y.menuMaxVibe),toyMaxVibe:i_(e.toyMaxVibe),menuFilterFullCatalog:!!e.menuFilterFullCatalog,menuFilterToyIds:e.menuFilterToyIds===null?null:Array.isArray(e.menuFilterToyIds)?e.menuFilterToyIds.filter(e=>typeof e==`string`&&e.trim()):null,overlayStyle:Im(e.overlayStyle),overlayQr:t,overlayMenu:Ph(e.overlayMenu),customPatterns:e.customPatterns,patternOverrides:e.patternOverrides};try{return localStorage.setItem(zc,JSON.stringify(n)),!0}catch(e){console.warn(`[settings] localStorage save failed`,e);try{let e={...n,patternOverrides:{},customPatterns:n.customPatterns.slice(0,32),overlayQr:Th({...n.overlayQr,menuOffers:[]})};return localStorage.setItem(zc,JSON.stringify(e)),!0}catch{return!1}}}var d_=`_`;function f_(e){return new Promise(t=>setTimeout(t,Math.max(0,e)))}var p_=class{lanes=new Map;nextId=0;stopDrain=!1;gapMs;maxQueue;run;onStatus;constructor(e){this.gapMs=Math.max(0,e.gapMs??450),this.maxQueue=Math.max(1,e.maxQueue??64),this.run=e.run,this.onStatus=e.onStatus??(()=>{})}get status(){return this.snapshot(this.statusMessage())}enqueue(e){this.stopDrain=!1,this.waitingCount()>=this.maxQueue&&(this.dropOldestWaiting(),this.emit(`dropped oldest · max ${this.maxQueue}`));let t={...e,id:++this.nextId},n=this.laneFor(t.toyId),r=new Promise((e,r)=>{n.q.push({job:t,resolve:e,reject:r})}),i=this.waitingCount()-+!n.running,a=this.playingJobs().length;return this.emit(a>0||i>0?`queued #${t.id}${t.label?` · ${t.label}`:``}${i>0?` · ${i} waiting`:``}`:`play #${t.id}${t.label?` · ${t.label}`:``}`),this.drain(this.laneKey(t.toyId)),r}clearWaiting(){for(let e of this.lanes.values()){for(let t of e.q)t.resolve();e.q=[]}this.emit(this.anyRunning()?`cleared waiting`:`queue empty`)}clear(){this.stopDrain=!0,this.clearWaiting();for(let e of this.lanes.values())e.playing=null;this.emit(`stopped`)}setGapMs(e){this.gapMs=Math.max(0,e)}setMaxQueue(e){this.maxQueue=Math.max(1,Math.min(256,Math.round(e)||64))}get gapMsValue(){return this.gapMs}get maxQueueValue(){return this.maxQueue}laneKey(e){return e||d_}laneFor(e){let t=this.laneKey(e),n=this.lanes.get(t);return n||(n={q:[],running:!1,playing:null},this.lanes.set(t,n)),n}waitingCount(){let e=0;for(let t of this.lanes.values())e+=t.q.length;return e}playingJobs(){let e=[];for(let t of this.lanes.values())t.playing&&e.push(t.playing);return e}anyRunning(){for(let e of this.lanes.values())if(e.running)return!0;return!1}dropOldestWaiting(){let e=null;for(let t of this.lanes.values()){let n=t.q[0];n&&(!e||n.job.id<e.item.job.id)&&(e={lane:t,item:n})}e&&(e.lane.q.shift(),e.item.resolve())}statusMessage(){let e=this.playingJobs(),t=this.waitingCount();if(e.length){let n=e.map(e=>e.label||`#${e.id}`).slice(0,3),r=e.length>3?` +${e.length-3}`:``,i=t?` · ${t} waiting`:``;return e.length===1?`playing ${n[0]}${i}`:`playing ${e.length} toys · ${n.join(` · `)}${r}${i}`}return t?`${t} queued`:`idle`}snapshot(e){let t=this.playingJobs(),n=this.waitingCount();return{depth:n+t.length,waiting:n,busy:this.anyRunning(),playingId:t[0]?.id??null,playingLabel:t.map(e=>e.label).filter(Boolean).join(` · `)||null,playingToys:t.length,message:e}}emit(e){this.onStatus(this.snapshot(e))}async drain(e){let t=this.lanes.get(e);if(!(!t||t.running)){t.running=!0;try{for(;t.q.length>0&&!this.stopDrain;){let e=t.q.shift();if(!e)break;t.playing=e.job,this.emit(this.statusMessage());try{await this.run(e.job),e.resolve()}catch(t){e.reject(t)}finally{t.playing=null}if(this.stopDrain)break;t.q.length>0&&this.gapMs>0&&(this.emit(`gap ${this.gapMs}ms · ${this.waitingCount()} waiting`),await f_(this.gapMs))}}finally{t.running=!1,t.playing=null,!this.anyRunning()&&!this.stopDrain&&this.emit(`idle`)}}}},m_=`0xa1077a294dde1b09bb078844df40758a5d0f9a27`,h_=`https://graph.pulsechain.com/subgraphs/name/pulsechain/pulsexv2`,g_=3e5,__=new Map;function v_(e){return String(e||``).trim().toLowerCase()}function y_(e){return Zf(e)}function b_(e){if(!Number.isFinite(e))return`—`;let t=Math.abs(e);return t===0?`0`:t>=1e3?e.toLocaleString(void 0,{maximumFractionDigits:0}):t>=1?e.toLocaleString(void 0,{maximumFractionDigits:2}):t>=.01?e.toLocaleString(void 0,{maximumFractionDigits:4}):t>=1e-8?e.toLocaleString(void 0,{maximumFractionDigits:8}):e.toExponential(2)}function x_(e,t,n){let r=(t||`TOKEN`).trim()||`TOKEN`,i=Number(e),a=Number.isFinite(i)?`${i.toLocaleString(void 0,{maximumFractionDigits:8})} ${r}`:r;return n==null||!Number.isFinite(i)||!Number.isFinite(n)?a:`${a} ≈ $${b_(i*n)} USD`}function S_(e,t){if(!e.length)return``;let n=[],r=e.find(e=>e.usdTarget!=null&&Number.isFinite(e.usdTarget))?.usdTarget;r!=null&&n.push(`≈ $${b_(r)} USD`);for(let t of e){let e=(t.label||`TOKEN`).trim()||`TOKEN`,r=Number(t.amount);Number.isFinite(r)&&r>=0?n.push(`${r.toLocaleString(void 0,{maximumFractionDigits:8})} ${e}`):n.push(`${e} · waiting for quote`)}return t?.toyNote&&n.push(t.toyNote),n.join(`
`)}function C_(e){let t=v_(e.tokenAddress);if(/^0x[a-f0-9]{40}$/.test(t))return t;let n=e.symbol.trim().toUpperCase();return!n||n===`PLS`||n===`WPLS`?m_:null}async function w_(e){try{let t=await fetch(h_,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({query:`{ token(id: "${e}") { derivedUSD } }`}),signal:AbortSignal.timeout(8e3)});if(!t.ok)return null;let n=await t.json(),r=Number(n.data?.token?.derivedUSD);return Number.isFinite(r)&&r>0?r:null}catch{return null}}async function T_(e){try{let t=await fetch(`https://api.dexscreener.com/latest/dex/tokens/${e}`,{signal:AbortSignal.timeout(8e3)});if(!t.ok)return null;let n=((await t.json()).pairs||[]).filter(e=>String(e.chainId||``).toLowerCase()===`pulsechain`);for(let e of n){let t=Number(e.priceUsd);if(Number.isFinite(t)&&t>0)return t}return null}catch{return null}}async function E_(e){let t=v_(e),n=__.get(t);if(n&&Date.now()-n.at<g_&&n.usdPerUnit!=null)return{usdPerUnit:n.usdPerUnit,at:n.at,source:`cache`};if(n?.inflight)return n.inflight;let r=(async()=>{let e=await w_(t),n=`subgraph`;e??(e=await T_(t),n=`dexscreener`),e==null&&y_(t)&&(e=1,n=`stable-fallback`);let r={usdPerUnit:e,at:Date.now(),source:e==null?`none`:n};return __.set(t,r),r})();__.set(t,{usdPerUnit:n?.usdPerUnit??null,at:n?.at??0,source:n?.source??`none`,inflight:r});try{return await r}finally{let e=__.get(t);e&&delete e.inflight}}function D_(e){let t=C_(e);if(!t)return null;if(y_(t)){let e=__.get(t);return e?.usdPerUnit==null?1:e.usdPerUnit}return __.get(t)?.usdPerUnit??null}function O_(e){let t={};for(let n of e){let e=v_(n);if(e===``){t[``]=__.get(m_)?.usdPerUnit??null;continue}if(y_(e)){t[e]=__.get(e)?.usdPerUnit??1;continue}t[e]=__.get(e)?.usdPerUnit??null}return t}async function k_(e){let t=[...new Set(e.map(e=>v_(e)).filter(e=>e!==void 0))];return await Promise.all(t.map(async e=>{if(!e){await E_(m_);return}await E_(e)})),O_(t)}async function A_(e){let t=C_(e);return t?(await E_(t)).usdPerUnit:null}var j_=A_;function X(e,t,n){let r=(e||t||n||`Toy`).trim();return r.split(/\s*·\s*/)[0]?.trim()||r}function M_(e){let t=()=>e.getState();function n(){return e.getDeviceToys().filter(e=>!!e.id&&e.source!==`preview`&&String(e.status||``).toLowerCase()!==`catalog`&&!t().disabledToys.includes(e.id)&&e.connected!==!1)}function r(e,r){let i=t();return Pf(e,i.patternPrices,i.disabledPatterns,{toys:r||n(),toyPrices:i.toyPatternPrices,disabledToys:i.disabledToys,featured:i.featuredPatterns})}function i(e,t){return u({amount:e,force:{pattern:t.pattern,toyId:t.toyId,name:Dd(t.pattern)?.name,price:t.price}})}function a(e,r){let a=t(),o=Ff(e,a.patternPrices,a.disabledPatterns,{toys:r||n(),toyPrices:a.toyPatternPrices,disabledToys:a.disabledToys,featured:a.featuredPatterns}),s=[];for(let t of o){let n=i(e,t);n&&s.push(n)}return s}function o(n){let r=n.eventKind||`swap`,i=n.poolAddress?.toLowerCase();if(r===`bridge-in`||r===`bridge-out`){let t=e.getState().bridges||[];if(n.triggerId){let e=t.find(e=>e.id===n.triggerId);if(e)return e}return t.find(e=>i&&e.address.toLowerCase()===i)}if(r===`custom`){let t=e.getState().chainLogs||[];if(n.triggerId){let e=t.find(e=>e.id===n.triggerId);if(e)return e}return t.find(e=>i&&e.address.toLowerCase()===i&&(!n.poolLabel||e.label===n.poolLabel))}let a=t().pools||[];if(n.poolAddress){let e=a.find(e=>e.address.toLowerCase()===n.poolAddress.toLowerCase());if(e)return e}if(n.poolLabel)return a.find(e=>e.label===n.poolLabel)}function s(e){let t=n();if(!e.length)return t;let r=new Set(e);return t.filter(e=>e.id&&r.has(e.id))}function c(e){if(e.force?.pattern){let t=u(e);return t?[t]:[]}if(e.source===`pool`){let t=al(o(e),e.amount,e.poolSide);if(t){let i=t.toyIds.length>0,a=s(t.toyIds);if(i&&!a.length)return[];let o=Math.min(8,Math.max(1,t.multiples||1)),c=[];if(t.patternId){let r=t.patternId,s=Dd(r);if(s){let t=(i?a:n()).filter(e=>au(vd(s),e,s.forProducts));if(t.length){for(let n=0;n<o;n++)for(let n of t){let t=u({amount:e.amount,force:{pattern:r,toyId:n.id,name:s.name,price:e.amount}});t&&c.push(t)}if(c.length)return c}if(i||!n().length)return[]}}if(a.length){for(let t of a){let n=r(e.amount,[t]);if(!n)continue;let i=u({amount:e.amount,force:{pattern:n.pattern,toyId:n.toyId,name:Dd(n.pattern)?.name,price:n.price}});if(i)for(let e=0;e<o;e++)c.push(i)}return c.length?c:[]}let l=u(e);if(l){for(let e=0;e<o;e++)c.push(l);return c}return[]}}let i=e.token||``,c=String(i).trim().toLowerCase(),l=t().coinRewardRules||[];if(n_(t().paintCoinKeys,i)||n_(t().acceptedStables,i)){let r=O_([i])[c]??1,o=Number(e.amount)*(Number(r)||1),d=Hp(l,o);if(d){let t=d.rule.toyIds.length>0,r=s(d.rule.toyIds);if(t&&!r.length)return[];let i=Dd(d.rule.patternId);if(!i)return[];let a=(t?r:n()).filter(e=>au(vd(i),e,i.forProducts));if(!a.length)return[];let o=[];for(let t of a){let n=u({amount:e.amount,force:{pattern:d.rule.patternId,toyId:t.id,name:i.name,price:e.amount}});n&&o.push(n)}return o}let f=(t().tokenAddress||``).trim().toLowerCase(),p=O_([f]),m=p[f]??(f?null:p[``])??null;if(m!=null&&m>0){let e=Bp(o,m,18);if(e!=null)return a(e)}return[]}if(wp(l).filter(e=>e.tokenAddress.toLowerCase()===c).length){let r=O_([i]),a={"":18};for(let e of t().savedTokens||[])a[e.address.toLowerCase()]=e.decimals;let o=t().tokenAddress.trim();o&&(a[o.toLowerCase()]=t().tokenDecimals);let c=Vp(l,{amount:e.amount,tokenAddress:i},r,a);if(!c)return[];let d=c.rule.toyIds.length>0,f=s(c.rule.toyIds);if(d&&!f.length)return[];let p=Dd(c.rule.patternId);if(!p)return[];let m=(d?f:n()).filter(e=>au(vd(p),e,p.forProducts));if(!m.length)return[];let h=[];for(let t of m){let n=u({amount:e.amount,force:{pattern:c.rule.patternId,toyId:t.id,name:p.name,price:e.amount}});n&&h.push(n)}return h}return a(e.amount)}function l(t,n){if(n&&n.trim()){let r=n.trim();if(t){let n=e.getDeviceToys().find(e=>e.id===t);if(n)return X(n.name||``,n.toyType,n.id)}return r.length>18?r.slice(0,16)+`…`:r}if(!t)return``;let r=e.getDeviceToys().find(e=>e.id===t);return r?X(r.name||``,r.toyType,r.id):t.length>12?t.slice(0,10)+`…`:t}function u(e){let t=e.force;if(t?.pattern){let e=t.pattern,n=Dd(e),r=t.name||n?.name||kd(e),i=l(t.toyId,t.toyLabel),a=n?$l(Zl(vd(n))):``,o=t.price!=null&&Number.isFinite(t.price)?`menu ${t.price}`:``;return{intensity:1,durationMs:jd(e),pattern:e,toyId:t.toyId||void 0,price:t.price,label:[r,i&&`on ${i}`,a,o].filter(Boolean).join(` · `)}}let n=r(e.amount);if(!n)return null;let i=Dd(n.pattern),a=i?$l(Zl(vd(i))):``,o=l(n.toyId),s=n.price!=null&&Number.isFinite(n.price)?`menu ${n.price}`:``,c=i?.name||kd(n.pattern);return{...n,label:[c,o&&`on ${o}`,a,s].filter(Boolean).join(` · `)}}function d(e){if(!Number.isFinite(e)||e<=0)return`—`;if(e>=1e3){let t=e/1e3;return`${t%1==0?t.toFixed(0):t.toFixed(1)}s`}return`${Math.round(e)}ms`}function f(e,t){let n=Array.isArray(t)?t:[t],r=e.dryRun?`dry-run`:`→`;return n.length?`${r} ${n.map(e=>`${e.label} · ${d(e.durationMs)}`).join(` · `)}`:`${r} no pattern`}async function p(){e.applyDeviceSettings(),(e.device.activeBackend!==t().backend||!e.device.isConnected)&&await e.device.connect(t().backend,t().backend===`bluetooth`?{skipPicker:!0}:void 0)}async function m(t,n,r,i,a){try{await p(),await e.buzzQueue.enqueue({intensity:t,durationMs:n>0?Math.min(n,12e3):0,pattern:r,toyId:a||void 0,label:`test · ${i}`}),e.showError(``)}catch(t){e.showError(t instanceof Error?t.message:String(t))}}async function h(t){let n=!!t.force;e.addPayment({...t,dryRun:!1});let r=c(t),i=r[0]||null,a=r.length<=1?i?.label:r.map(e=>e.label).join(` · `),s=t.source===`pool`?`${t.amount.toLocaleString(void 0,{maximumFractionDigits:4})} ${t.symbol}${t.poolLabel?` · ${t.poolLabel}`:``}`:`${t.amount.toLocaleString(void 0,{maximumFractionDigits:4})} ${t.symbol}`,l=e.getOverlayStyle(),u=[];if(l.showPoolLabel&&t.source===`pool`&&t.poolLabel&&u.push(t.poolLabel),l.showPattern&&(a?u.push(a):u.push(`Below menu / no pattern`)),(()=>{if(t.source!==`pool`)return!0;if(!l.showPoolAlerts)return!1;let e=o(t);if(e&&e.overlayAlert===!1)return!1;let n=(e?.overlayMinAmount!=null&&Number.isFinite(e.overlayMinAmount)?Number(e.overlayMinAmount):null)??(Number(l.poolMinAmount)||0);return!(n>0&&t.amount<n)})()&&e.notifyTip({id:t.id,amount:t.amount,symbol:t.symbol,title:`${t.amount.toLocaleString(void 0,{maximumFractionDigits:4})} ${t.symbol}`,subtitle:u.join(` · `)||void 0,source:t.source===`pool`?`pool`:n?`test`:`wallet`,eventKind:t.eventKind,dryRun:!1,at:t.timestamp||Date.now()}),!r.length){e.showError(``),e.paintFeed(),e.setQueueStatus(t.source===`pool`?`${Xc(t.eventKind)} ${s} below menu (or no patterns on) · no buzz`:`Tip ${s} below menu (or no patterns on) · no buzz`);return}try{await p(),await Promise.all(r.map(t=>e.buzzQueue.enqueue({intensity:t.intensity,durationMs:t.durationMs,pattern:t.pattern,toyId:t.toyId,label:[s,t.label].filter(Boolean).join(` · `),forcePlay:n}))),e.showError(``)}catch(t){e.showError(t instanceof Error?t.message:String(t))}}return{tipBuzzToys:n,planForAmount:r,planForPayment:u,plansForPayment:c,resolveToyFeedLabel:l,feedFeelLine:f,ensureDeviceReady:p,runPatternTest:m,onPayment:h}}var N_=`http://www.w3.org/2000/svg`;function P_(e,t){let n=document.createElementNS(N_,e);for(let[e,r]of Object.entries(t))n.setAttribute(e,r);return n}function F_(e,t){let n=t?.w??200,r=t?.h??44,i=t?.animate!==!1,a=t?.intervalMs??400,o=P_(`svg`,{viewBox:`0 0 ${n} ${r}`,preserveAspectRatio:`none`,class:`pattern-viz-svg`,"aria-hidden":`true`}),s=(e?.length?e:[2,4,3]).slice(0,24),c=s.length,l=Math.max(1,Math.min(3,(n-8)/c*.18)),u=n-8-l*(c-1),d=Math.max(2,u/c);o.appendChild(P_(`line`,{x1:`4`,x2:String(n-4),y1:String(r-4),y2:String(r-4),class:`pattern-baseline`}));let f=``;for(let e=0;e<c;e++){let t=Math.max(0,Math.min(8,Number(s[e])||0)),n=4+e*(d+l)+d/2,i=(r-8)*t/8,a=r-4-i;f+=`${e===0?`M`:`L`}${n.toFixed(1)} ${a.toFixed(1)} `}let p=P_(`path`,{d:f,class:`pattern-path`,fill:`none`});o.appendChild(p);for(let e=0;e<c;e++){let t=Math.max(0,Math.min(8,Number(s[e])||0)),n=Math.max(1.5,(r-8)*t/8),c=4+e*(d+l),u=r-4-n,f=P_(`rect`,{x:c.toFixed(2),y:u.toFixed(2),width:d.toFixed(2),height:n.toFixed(2),rx:`1.5`,class:`pattern-bar`});if(f.dataset.i=String(e),f.style.setProperty(`--v`,String(t/8)),i){let t=a/1e3*e*.12;f.style.animationDelay=`${t.toFixed(2)}s`}o.appendChild(f)}return o}function I_(e){if(!e.length)return``;if(e.length===1)return`M${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;if(e.length===2)return`M${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)} L${e[1].x.toFixed(2)} ${e[1].y.toFixed(2)}`;let t=`M${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;for(let n=0;n<e.length-1;n++){let r=e[n-1]||e[n],i=e[n],a=e[n+1],o=e[n+2]||a,s=i.x+(a.x-r.x)/6,c=i.y+(a.y-r.y)/6,l=a.x-(o.x-i.x)/6,u=a.y-(o.y-i.y)/6;t+=`C${s.toFixed(2)} ${c.toFixed(2)} ${l.toFixed(2)} ${u.toFixed(2)} ${a.x.toFixed(2)} ${a.y.toFixed(2)}`}return t}function L_(e,t){let n=t?.quality===`hd`,r=t?.w??(n?720:180),i=t?.h??(n?64:28),a=(e?.length?e:[2,4,3]).slice(0,24),o=Math.max(1,a.length),s=n?18:3,c=n?10:3,l=n?.38:.16,u=Math.max(n?6:1,Math.min(n?14:2.5,(r-s*2)/o*l)),d=r-s*2-u*(o-1),f=Math.min(n?32:10,Math.max(n?8:2,d/o)),p=(r-(o*f+(o-1)*u))/2,m=f/2,h=i-c,g=[],_=[];for(let e=0;e<o;e++){let t=Math.max(0,Math.min(8,Number(a[e])||0)),r=p+e*(f+u),o=r+f/2,s=(i-c*2)*t/8,l=h-s;if(g.push({x:o,y:l}),t>0){let e=Math.max(n?3:1.4,s),t=h-e,i=n?`menu-bar-hd`:`menu-bar`,a=n?` fill="url(#pv-bar)"`:``;_.push(`<rect class="${i}" x="${r.toFixed(2)}" y="${t.toFixed(2)}" width="${f.toFixed(2)}" height="${e.toFixed(2)}" rx="${m.toFixed(2)}"${a}/>`)}}let v=n?I_(g):g.map((e,t)=>`${t===0?`M`:`L`}${e.x.toFixed(1)} ${e.y.toFixed(1)}`).join(` `),y=g[0],b=g[g.length-1],x=n&&y&&b?`<path class="menu-viz-fill" d="${v} L${b.x.toFixed(2)} ${h.toFixed(2)} L${y.x.toFixed(2)} ${h.toFixed(2)} Z"/>`:``,S=n?`<defs><linearGradient id="pv-bar" x1="0" y1="${c}" x2="0" y2="${h}" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="var(--viz-hi,#b8fff6)"/><stop offset="100%" stop-color="var(--viz-lo,#1a7dff)"/></linearGradient><linearGradient id="pv-path" x1="${s}" y1="0" x2="${r-s}" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="var(--viz-hi,#b8fff6)"/><stop offset="100%" stop-color="var(--viz-path,#7dffef)"/></linearGradient><filter id="pv-glow" x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur stdDeviation="1.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`:``,C=n?`<path class="menu-viz-path-hd" d="${v}" fill="none" stroke="url(#pv-path)" filter="url(#pv-glow)"/>`:`<path class="menu-viz-path" d="${v}" fill="none"/>`;return`<svg${n?` class="menu-viz-svg menu-viz-svg-hd"`:` class="menu-viz-svg"`} viewBox="0 0 ${r} ${i}" preserveAspectRatio="${n?`xMidYMid meet`:`none`}" shape-rendering="geometricPrecision" aria-hidden="true">`+S+`<line class="menu-viz-base" x1="${s}" y1="${h}" x2="${r-s}" y2="${h}"/>`+x+_.join(``)+C+`</svg>`}function R_(e){if(e.strengths?.length)return e.strengths.map(e=>Number(e)||0);let t=Math.max(1,Math.min(8,Number(e.intensity)||4));return[0,t,t,0]}function z_(e,t){let n=Vu({...e,strengths:R_(e)},t);if(n.length<=1)return n;let r=n[0];return n.every(e=>e.length===r.length&&e.every((e,t)=>e===r[t]))?[r]:n}function B_(e){if(!e)return 1;let t=Math.max(1,Math.min(3,Number(e.motors)||1));return ql(e).has(`multi`)?Math.max(t,2):t}function V_(e,t,n){let r=document.createElement(`div`);r.className=`pattern-stars`,r.setAttribute(`role`,`group`),r.setAttribute(`aria-label`,`Rating for ${e}`);let i=document.createElement(`div`);i.className=`pattern-stars-picker`;for(let e=1;e<=5;e++){let r=document.createElement(`button`);r.type=`button`,r.className=`pattern-star`,r.classList.toggle(`on`,e<=t),r.setAttribute(`aria-label`,e===1?`1 star`:`${e} stars`),r.setAttribute(`aria-pressed`,e<=t?`true`:`false`),r.dataset.n=String(e),r.textContent=`★`,r.title=e===t?`Clear rating (now ${t})`:`Rate ${e} of 5`,r.addEventListener(`click`,r=>{r.stopPropagation(),n(e===t?0:e)}),i.append(r)}let a=document.createElement(`button`);return a.type=`button`,a.className=`pattern-stars-summary`,a.textContent=`${t}/5`,a.title=t?`${t} of 5 — hover to change`:`Not rated — hover to rate`,a.setAttribute(`aria-label`,t?`${e} rated ${t} of 5`:`${e} not rated`),a.addEventListener(`click`,e=>{e.stopPropagation(),i.querySelector(`.pattern-star`)?.focus()}),r.append(a,i),r}function H_(e){return e.timeSec>0?e.timeSec:(e.intervalMs||400)*Math.max(1,e.strengths?.length||1)/1e3}function U_(e,t,n,r,i,a){let o=[...e],s=(e,t)=>e.name.localeCompare(t.name),c=e=>pf(e,n,i,a);switch(t){case`duration-desc`:return o.sort((e,t)=>H_(t)-H_(e)||s(e,t));case`duration-asc`:return o.sort((e,t)=>H_(e)-H_(t)||s(e,t));case`price-desc`:return o.sort((e,t)=>c(t.id)-c(e.id)||s(e,t));case`price-asc`:return o.sort((e,t)=>c(e.id)-c(t.id)||s(e,t));case`rating-desc`:return o.sort((e,t)=>uf(t.id,r)-uf(e.id,r)||s(e,t));case`rating-asc`:return o.sort((e,t)=>uf(e.id,r)-uf(t.id,r)||s(e,t));default:return o}}function W_(e,t){e.replaceChildren();for(let n of Nd){let r=document.createElement(`option`);r.value=n.id,r.textContent=n.label,n.id===t&&(r.selected=!0),e.append(r)}}function G_(e,t,n){e.classList.add(`menu-toy-picker`),e.classList.remove(`menu-toy-list`,`menu-toy-tiles`);let r=e.querySelector(`.menu-toy-chips`),i=e.querySelector(`#menu-toy-search`),a=e.querySelector(`.menu-toy-results`);if(!r||!i||!a){e.replaceChildren(),r=document.createElement(`div`),r.className=`menu-toy-chips`,r.id=`menu-toy-chips`;let t=document.createElement(`label`);t.className=`field menu-toy-search-field`;let n=document.createElement(`span`);n.className=`visually-hidden`,n.textContent=`Search toys`,i=document.createElement(`input`),i.id=`menu-toy-search`,i.type=`search`,i.placeholder=`Search toys… (e.g. Lush, Nora)`,i.autocomplete=`off`,i.spellcheck=!1,t.append(n,i),a=document.createElement(`div`),a.className=`menu-toy-results`,a.id=`menu-toy-results`,a.setAttribute(`role`,`listbox`),a.setAttribute(`aria-label`,`Matching toys`),e.append(r,t,a)}r.replaceChildren(),r.hidden=!0,r.removeAttribute(`role`),r.removeAttribute(`aria-label`);let o=new Map(t.toys.filter(e=>e.id).map(e=>[e.id,e])),s=t.selectedIds.filter(e=>o.has(e)),c=new Set(s),l=()=>i.value.toLowerCase().replace(/\s+/g,` `).trim(),u=()=>{let e=l();if(a.replaceChildren(),!e){a.hidden=!0;return}let r=t.toys.map(t=>{if(!t.id||c.has(t.id))return{t,score:0};let n=X(t.name||``,t.toyType,t.id).toLowerCase(),r=String(t.toyType||``).toLowerCase().replace(/[_-]+/g,` `),i=String(t.name||``).toLowerCase().replace(/[_-]+/g,` `),a=0;return n===e||i===e||r===e?a=100:n.startsWith(e)||i.startsWith(e)?a=90:r.startsWith(e)?a=80:n.split(/\s+/).some(t=>t.startsWith(e))||i.split(/\s+/).some(t=>t.startsWith(e))||r.split(/\s+/).some(t=>t.startsWith(e))?a=70:e.length>=3&&(n.includes(e)||i.includes(e)||r.includes(e))&&(a=40),{t,score:a}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score||X(e.t.name||``,e.t.toyType,e.t.id).localeCompare(X(t.t.name||``,t.t.toyType,t.t.id))).map(e=>e.t);if(!r.length){a.hidden=!1;let e=document.createElement(`p`);e.className=`menu-toy-results-empty`,e.textContent=`No matching toys`,a.append(e);return}a.hidden=!1;for(let e of r.slice(0,6)){let t=X(e.name||``,e.toyType,e.id),r=eu(e),o=document.createElement(`button`);o.type=`button`,o.className=`menu-toy-result`,o.setAttribute(`role`,`option`),o.setAttribute(`aria-label`,`Add ${t}`);let l=document.createElement(`span`);l.className=`menu-toy-result-name`,l.textContent=t;let u=document.createElement(`span`);u.className=`menu-toy-result-caps`,u.textContent=r,o.append(l,u),o.addEventListener(`click`,()=>{if(!e.id||c.has(e.id))return;let t=[...s,e.id];i.value=``,n(t)}),a.append(o)}if(r.length>6){let e=document.createElement(`p`);e.className=`menu-toy-results-more`,e.textContent=`${r.length-6} more — refine search`,a.append(e)}};if(i.oninput=()=>u(),i.onkeydown=e=>{e.key===`Escape`&&(i.value=``,u(),i.blur()),e.key===`Enter`&&(e.preventDefault(),a.querySelector(`.menu-toy-result`)?.click())},u(),!t.toys.length){a.hidden=!1,a.replaceChildren();let e=document.createElement(`p`);e.className=`menu-toy-results-empty`,e.textContent=`No toys available.`,a.append(e)}}function K_(e,t,n){e.replaceChildren(),e.classList.remove(`is-by-toy`);let r=new Set(t.disabled),i=new Set(t.featured),a=q.slice(),o=a.length;a=a.filter(e=>!r.has(e.id)&&ou(vd(e),t.fitToys,e.forProducts));let s=a.length,c=(e,r,a)=>{let o=e.tag||`other`,s=i.has(e.id),c=document.createElement(`article`);c.className=`pattern-card tag-${o.replace(/[^a-z0-9-]/gi,``)}`;let l=!!n.onPaintPattern;c.classList.toggle(`selected`,!l&&e.id===t.selected),c.classList.toggle(`is-disabled`,!1),c.classList.toggle(`is-featured`,s),c.dataset.id=e.id;let u=document.createElement(`button`);u.type=`button`,u.className=`pattern-card-remove`,u.textContent=`×`,gd(e.id)?(u.title=`Delete ${e.name}`,u.setAttribute(`aria-label`,`Delete ${e.name}`),u.addEventListener(`click`,t=>{t.stopPropagation(),n.onDelete(e.id)})):(u.title=`Remove ${e.name} from tip menu`,u.setAttribute(`aria-label`,`Remove ${e.name} from tip menu`),u.addEventListener(`click`,t=>{t.stopPropagation(),n.onToggleDisabled(e.id,!0)}));let d=document.createElement(`div`);d.className=`pattern-card-main`;let f=document.createElement(`div`);f.className=`pattern-card-title-row`;let p=document.createElement(`button`);p.type=`button`,p.className=`pattern-card-pick`,p.innerHTML=`<strong>${e.name}</strong>`,p.addEventListener(`click`,()=>{if(l){n.onPaintPattern(e.id);return}n.onSelect(e.id)}),f.append(p);let m=document.createElement(`div`);m.className=`pattern-card-ops`;let h=document.createElement(`button`);h.type=`button`,h.className=`btn ghost tiny pattern-edit-btn`,h.textContent=`Edit`,h.addEventListener(`click`,t=>{t.stopPropagation(),n.onEdit(e.id)}),m.append(h);let g=document.createElement(`label`);g.className=`pattern-featured`,g.title=`Highlight on tip menu export (brighter card)`;let _=document.createElement(`input`);_.type=`checkbox`,_.checked=s,_.setAttribute(`aria-label`,`Feature ${e.name} on export`),_.addEventListener(`click`,e=>e.stopPropagation()),_.addEventListener(`change`,()=>{n.onToggleFeatured(e.id,_.checked)});let v=document.createElement(`span`);v.textContent=`Feat`,g.append(_,v);let y=V_(e.name,uf(e.id,t.ratings),t=>n.onRate(e.id,t)),b=document.createElement(`div`);b.className=`pattern-card-corner`,b.append(y,m),f.append(b);let x=vd(e),S=document.createElement(`div`);if(S.className=`pattern-need-chips`,x.length)for(let e of x){let t=document.createElement(`span`);t.className=`pattern-need chip-${e}`,t.textContent=su(e),S.append(t)}else{let e=document.createElement(`span`);e.className=`pattern-need chip-vibe`,e.textContent=`vibe`,S.append(e)}let C=document.createElement(`span`);C.className=`pattern-duration`,C.textContent=`${e.timeSec}s`,C.title=`${e.timeSec} second pattern`,S.append(C);let w=t.assign?.badges[e.id]||[],T=t.assign?.paintKeys,E=w.filter(e=>e.on!==!1),D=T&&T.size?E.find(e=>T.has(e.key)):E[0];D&&(c.classList.add(`is-coin-painted`),c.classList.add(`coin-skin-${D.skin||`hue`}`),c.style.setProperty(`--coin-hue`,String(D.hue))),l?(p.setAttribute(`aria-pressed`,D?`true`:`false`),p.title=D?`Click to remove coin colors from ${e.name}`:`Click to paint the selected coins onto ${e.name}`):p.setAttribute(`aria-pressed`,e.id===t.selected?`true`:`false`);let ee=document.createElement(`div`);ee.className=`pattern-coin-badges`;for(let t of w){let r=document.createElement(`button`);r.type=`button`;let i=t.on!==!1;r.className=`pattern-coin-badge coin-skin-${t.skin||`hue`}${i?``:` is-off`}`,r.style.setProperty(`--coin-hue`,String(t.hue)),r.textContent=t.label,r.setAttribute(`aria-pressed`,i?`true`:`false`);let a=t.amount,o=t.usdTarget!=null&&Number.isFinite(t.usdTarget)?` ≈ $${b_(t.usdTarget)}`:``,s=a!=null&&Number.isFinite(a)?`${a.toLocaleString(void 0,{maximumFractionDigits:8})} ${t.label}${o}`:`${t.label}${o||` · waiting for quote`}`;r.title=i?`${s}\nClick to turn ${t.label} off`:`${s}\nOff — click to turn ${t.label} on`,r.addEventListener(`click`,r=>{r.stopPropagation(),n.onCycleCoinBadge&&n.onCycleCoinBadge(e.id,t.key)}),ee.append(r)}ee.append(g),d.append(f,S,ee);let te=pf(e.id,t.prices,t.toyPrices,a?.id),O=a?X(a.name||``,a.toyType,a.id):``,k=document.createElement(`button`);k.type=`button`,k.className=`pattern-viz`,k.title=O?`Test ${e.name} on ${O}`:`Test ${e.name} on a matching toy`,k.setAttribute(`aria-label`,O?`Test ${e.name} on ${O}`:`Test ${e.name}`);let A=z_(e,B_(a));if(A.length>1){k.classList.add(`pattern-viz-multi`);for(let t=0;t<A.length;t++){let n=document.createElement(`span`);n.className=`pattern-viz-lane`;let r=document.createElement(`span`);r.className=`pattern-viz-lane-label`,r.textContent=`M${t+1}`,n.append(r,F_(A[t],{w:160,h:28,intervalMs:e.intervalMs||400,animate:!0})),k.append(n)}}else k.appendChild(F_(A[0],{w:160,h:32,intervalMs:e.intervalMs||400,animate:!0}));k.addEventListener(`click`,t=>{t.stopPropagation(),n.onTest(e.id,a?.id)});let ne=document.createElement(`label`);ne.className=`pattern-price-field`;let re=t.tipSymbol||`PLS`,j=document.createElement(`input`);j.type=`number`,j.min=`0`,j.step=`any`,j.inputMode=`decimal`,j.value=String(te),j.setAttribute(`aria-label`,a?.id?`Tip price for ${e.name} on this toy (${re})`:`Tip price for ${e.name} (${re})`);let M=()=>{let e=Number(j.value);if(w.length){j.title=S_(w.map(e=>({label:e.label,amount:e.amount,usdTarget:e.usdTarget})),{toyNote:a?.id?`Price field edits this toy’s tip ladder`:void 0});return}let n=x_(Number.isFinite(e)?e:te,re,t.usdPerUnit);j.title=a?.id?`${n} · price for this linked toy only`:n};M(),j.addEventListener(`click`,e=>e.stopPropagation()),j.addEventListener(`input`,M),j.addEventListener(`change`,()=>{let r=Number(j.value);if(!Number.isFinite(r)||r<0){j.value=String(pf(e.id,t.prices,t.toyPrices,a?.id)),M();return}n.onPrice(e.id,r,a?.id),M()}),ne.append(j);let N=[];if(hd(e.id)&&t.modified.has(e.id)){let t=document.createElement(`button`);t.type=`button`,t.className=`btn ghost tiny`,t.textContent=`Reset default`,t.title=`Restore built-in feel and tip price`,t.addEventListener(`click`,t=>{t.stopPropagation(),n.onReset(e.id)}),N.push(t)}let P=document.createElement(`div`);if(P.className=`pattern-card-side`,P.append(ne),N.length){let e=document.createElement(`div`);e.className=`pattern-card-actions`,e.append(...N),P.append(e)}c.append(u,d,P,k),r.append(c)},l=(e,n,r)=>{if(t.sort===`catalog`){let t=[...new Set(e.map(e=>e.tag||`other`))];for(let i of t){let t=e.filter(e=>(e.tag||`other`)===i);if(!t.length)continue;let a=document.createElement(`p`);a.className=`pattern-tag`,a.textContent=i,n.append(a);for(let e of t)c(e,n,r)}}else{let i=U_(e,t.sort,t.prices,t.ratings,t.toyPrices,r?.id);for(let e of i)c(e,n,r)}},u=t.fitToys,d=e;if(u&&u.length>0){e.classList.add(`is-by-toy`);let r=u.filter(e=>!!e.id),i=r.length?r:u,a=i.find(e=>e.id&&e.id===t.activeToyId)||i[0],o=document.createElement(`div`);o.className=`pattern-toy-tabs`,o.setAttribute(`role`,`tablist`),o.setAttribute(`aria-label`,`Selected toys`);for(let e of i){let r=e.id||``,i=X(e.name||``,e.toyType,e.id),s=!!(r&&r===a.id),c=document.createElement(`div`);c.className=`pattern-toy-tab`,c.classList.toggle(`is-active`,s);let l=r?t.assign?.toyPaint?.[r]:void 0;l&&(c.classList.add(`is-coin-painted`,`coin-skin-${l.skin}`),c.style.setProperty(`--coin-hue`,String(l.hue)));let u=document.createElement(`button`);if(u.type=`button`,u.className=`pattern-toy-tab-select`,u.setAttribute(`role`,`tab`),u.setAttribute(`aria-selected`,s?`true`:`false`),u.textContent=i,u.title=l?`${eu(e)} · painted`:eu(e),r&&n.onSelectToyTab&&u.addEventListener(`click`,()=>n.onSelectToyTab(r)),c.append(u),r&&n.onRemoveToyTab){let e=document.createElement(`button`);e.type=`button`,e.className=`pattern-toy-tab-x`,e.title=`Remove ${i}`,e.setAttribute(`aria-label`,`Remove ${i}`),e.textContent=`×`,e.addEventListener(`click`,e=>{e.stopPropagation(),n.onRemoveToyTab(r)}),c.append(e)}o.append(c)}e.append(o);let s=a,c=Ef(s,{disabled:t.disabled,featured:t.featured,includeDisabled:!1}),f=document.createElement(`section`);f.className=`pattern-toy-col`;let p=document.createElement(`header`);p.className=`pattern-toy-col-head`;let m=document.createElement(`div`);m.className=`pattern-toy-col-title`;let h=document.createElement(`p`);if(h.className=`pattern-toy-col-meta`,h.textContent=`${eu(s)} · ${c.length} pattern${c.length===1?``:`s`}`,h.title=eu(s),m.append(h),s.id&&(n.onBackupToy||n.onImportToy)){let e=document.createElement(`div`);if(e.className=`pattern-toy-col-ops`,n.onBackupToy){let t=document.createElement(`button`);t.type=`button`,t.className=`btn ghost tiny pattern-toy-pack-btn`,t.textContent=`Backup`,t.title=`Download this toy’s tip prices, On/Off, and Featured as JSON`,t.addEventListener(`click`,e=>{e.stopPropagation(),n.onBackupToy(s.id)}),e.append(t)}if(n.onImportToy){let t=document.createElement(`button`);t.type=`button`,t.className=`btn ghost tiny pattern-toy-pack-btn`,t.textContent=`Import`,t.title=`Import a toy price/menu pack onto this device (prices map to this toy)`,t.addEventListener(`click`,e=>{e.stopPropagation(),n.onImportToy(s.id)}),e.append(t)}p.append(m,e)}else p.append(m);let g=document.createElement(`div`);if(g.className=`pattern-toy-col-cards`,c.length)l(c,g,s);else{let e=document.createElement(`p`);e.className=`hint pattern-toy-col-empty`,e.textContent=`No patterns for this toy family.`,g.append(e)}f.append(p,g),e.append(f),d=g}else a.length&&l(a,e);if(!e.children.length){let n=document.createElement(`p`);n.className=`hint`,n.textContent=t.fitToys===null?`No patterns.`:t.fitToys.length?`No patterns for that family. Vibrators show vibe patterns; thrusters show thrust only. Pick a matching toy or Create pattern.`:`Search a toy above to see patterns for that family.`,e.append(n)}if(t.leadCard){let e=d.querySelector(`.pattern-card`);e?d.insertBefore(t.leadCard,e):d.prepend(t.leadCard)}return{shown:s,total:o}}function q_(e){return e.timeSec>0?e.timeSec:(e.intervalMs||400)*Math.max(1,e.strengths?.length||1)/1e3}function J_(e){if(!e)return 1;let t=Math.max(1,Math.min(3,Number(e.motors)||1));return ql(e).has(`multi`)?Math.max(t,2):t}function Y_(){return fd.map(e=>{let t=Dd(e.id);return t?{...t}:{...e,strengths:e.strengths.slice()}})}function X_(e,t,n){e.replaceChildren();let r=t.query.trim().toLowerCase(),i=Y_(),a=i.length,o=t.toy||null,s=new Set(t.disabled||[]);if(o&&(i=i.filter(e=>au(vd(e),o,e.forProducts))),r&&(i=i.filter(e=>[e.name,e.blurb,e.tag,e.id,Zl(vd(e))].join(` `).toLowerCase().includes(r))),i.sort((e,n)=>{let r=(e.tag||`other`).localeCompare(n.tag||`other`);if(r)return r;let i=t.prices[e.id]??e.price,a=t.prices[n.id]??n.price;return i===a?e.name.localeCompare(n.name):i-a}),!i.length){let t=document.createElement(`p`);return t.className=`hint pattern-catalog-empty`,t.textContent=o?`No patterns match that toy.`:`No patterns match that filter.`,e.append(t),{shown:0,total:a}}let c=J_(o),l=``,u=null;for(let r of i){let i=r.tag||`other`;if(i!==l){l=i;let t=document.createElement(`h4`);t.className=`pattern-catalog-group`,t.textContent=i,e.append(t),u=document.createElement(`div`),u.className=`pattern-catalog-grid`,e.append(u)}let a=document.createElement(`article`);a.className=`pattern-catalog-row`,a.dataset.id=r.id;let o=s.has(r.id);a.classList.toggle(`is-off-menu`,o);let d=document.createElement(`div`);d.className=`pattern-catalog-row-main`;let f=document.createElement(`button`);f.type=`button`,f.className=`pattern-catalog-title`,f.innerHTML=`<strong>${r.name}</strong>`,f.title=`Set as selected default pattern`,f.addEventListener(`click`,()=>n.onSelect(r.id));let p=document.createElement(`div`);p.className=`pattern-need-chips`;let m=vd(r);if(m.length)for(let e of m){let t=document.createElement(`span`);t.className=`pattern-need chip-${e}`,t.textContent=su(e),p.append(t)}else{let e=document.createElement(`span`);e.className=`pattern-need chip-vibe`,e.textContent=`vibe`,p.append(e)}let h=document.createElement(`p`);h.className=`pattern-catalog-meta`;let g=t.prices[r.id]??r.price;h.textContent=`${Math.round(q_(r))}s · tip ${g}`;let _=document.createElement(`p`);_.className=`pattern-catalog-blurb`,_.textContent=r.blurb||``;let v=V_(r.name,uf(r.id,t.ratings),e=>n.onRate(r.id,e));d.append(f,p,v,h,_);let y=document.createElement(`div`);y.className=`pattern-catalog-viz`;let b=z_(r,c);if(b.length>1){y.classList.add(`pattern-viz-multi`);for(let e=0;e<b.length;e++){let t=document.createElement(`span`);t.className=`pattern-viz-lane`;let n=document.createElement(`span`);n.className=`pattern-viz-lane-label`,n.textContent=`M${e+1}`,t.append(n,F_(b[e],{w:120,h:20,intervalMs:r.intervalMs})),y.append(t)}}else y.append(F_(R_(r),{w:120,h:32,intervalMs:r.intervalMs}));let x=document.createElement(`div`);x.className=`pattern-catalog-ops`;let S=document.createElement(`button`);S.type=`button`,S.className=`btn primary tiny`,S.textContent=`Test`,S.addEventListener(`click`,()=>n.onTest(r.id));let C=document.createElement(`button`);C.type=`button`,C.className=`btn ghost tiny`,C.textContent=`Edit`,C.addEventListener(`click`,()=>n.onEdit(r.id));let w=document.createElement(`button`);if(w.type=`button`,w.className=`btn ghost tiny`,w.textContent=`Duplicate`,w.title=`Create a custom pattern from this template`,w.addEventListener(`click`,()=>n.onDuplicate(r.id)),x.append(S,C,w),o&&n.onAddToMenu){let e=document.createElement(`button`);e.type=`button`,e.className=`btn primary tiny`,e.textContent=`Add to menu`,e.title=`Put ${r.name} back on the tip menu`,e.addEventListener(`click`,()=>n.onAddToMenu(r.id)),x.append(e)}else if(!o){let e=document.createElement(`span`);e.className=`pattern-catalog-on-menu`,e.textContent=`On menu`,x.append(e)}a.append(d,y,x),(u||e).append(a)}return{shown:i.length,total:a}}function Z_(e,t,n){e.replaceChildren();let r=!!n?.showMotors,i=n?.stepMotors||[];t.forEach((t,n)=>{let a=document.createElement(`label`);a.className=`wizard-step-cell`,a.title=`Step ${n+1}`,r&&a.classList.add(`has-motor`);let o=document.createElement(`input`);if(o.type=`number`,o.min=`0`,o.max=`8`,o.step=`1`,o.value=String(Math.max(0,Math.min(8,Math.round(t)))),o.setAttribute(`aria-label`,`Strength step ${n+1}`),a.append(o),r){let e=document.createElement(`select`);e.className=`wizard-step-motor`,e.setAttribute(`aria-label`,`Motor step ${n+1}`);for(let[t,n]of[[`0`,`Both`],[`1`,`L`],[`2`,`R`]]){let r=document.createElement(`option`);r.value=t,r.textContent=n,e.append(r)}let t=i[n];e.value=t===1||t===2||t===3?String(t):`0`,a.append(e)}e.append(a)})}function Q_(e,t){e.replaceChildren(),t.forEach((t,n)=>{let r=document.createElement(`div`);r.className=`wizard-motor-row`,r.dataset.motor=String(n+1);let i=document.createElement(`span`);i.className=`wizard-motor-label`,i.textContent=`M${n+1}`,r.append(i);let a=document.createElement(`div`);a.className=`wizard-strengths-row`,t.forEach((e,t)=>{let r=document.createElement(`label`);r.className=`wizard-step-cell`,r.title=`M${n+1} · step ${t+1}`;let i=document.createElement(`input`);i.type=`number`,i.min=`0`,i.max=`8`,i.step=`1`,i.value=String(Math.max(0,Math.min(8,Math.round(e)))),i.setAttribute(`aria-label`,`M${n+1} strength step ${t+1}`),r.append(i),a.append(r)}),r.append(a),e.append(r)})}function $_(e){return[...e.querySelectorAll(`.wizard-motor-row`)].map(e=>[...e.querySelectorAll(`input[type="number"]`)].map(e=>Math.max(0,Math.min(8,Math.round(Number(e.value)||0)))))}function ev(e){return[...e.querySelectorAll(`input[type="number"]`)].map(e=>Math.max(0,Math.min(8,Math.round(Number(e.value)||0))))}function tv(e){return[...e.querySelectorAll(`select.wizard-step-motor`)].map(e=>{let t=Math.round(Number(e.value)||0);return t===1||t===2||t===3?t:0})}function nv(e,t){e.replaceChildren();for(let n of t){let t=document.createElement(`option`);t.value=n,e.append(t)}}function rv(e){let t=[];for(let n of e.querySelectorAll(`input[type="checkbox"]`))n.checked&&t.push(n.value);return tu(t)}function iv(e,t){let n=new Set(t);for(let t of e.querySelectorAll(`input[type="checkbox"]`))t.checked=n.has(t.value)}function av(e){return Cd({id:e.id,name:e.name,blurb:e.blurb,tag:e.tag,price:e.price,intervalMs:e.intervalMs,strengths:e.strengths,stepMotors:e.stepMotors,motorStrengths:e.motorStrengths,kind:e.kind??`pattern`,preset:e.preset,intensity:e.intensity,timeSec:e.timeSec,needs:e.needs})}var ov=t(((e,t)=>{t.exports=function(){return typeof Promise==`function`&&Promise.prototype&&Promise.prototype.then}})),sv=t((e=>{var t,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(e){if(!e)throw Error(`"version" cannot be null or undefined`);if(e<1||e>40)throw Error(`"version" should be in range from 1 to 40`);return e*4+17},e.getSymbolTotalCodewords=function(e){return n[e]},e.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t},e.setToSJISFunction=function(e){if(typeof e!=`function`)throw Error(`"toSJISFunc" is not a valid function.`);t=e},e.isKanjiModeEnabled=function(){return t!==void 0},e.toSJIS=function(e){return t(e)}})),cv=t((e=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`l`:case`low`:return e.L;case`m`:case`medium`:return e.M;case`q`:case`quartile`:return e.Q;case`h`:case`high`:return e.H;default:throw Error(`Unknown EC Level: `+t)}}e.isValid=function(e){return e&&e.bit!==void 0&&e.bit>=0&&e.bit<4},e.from=function(n,r){if(e.isValid(n))return n;try{return t(n)}catch{return r}}})),lv=t(((e,t)=>{function n(){this.buffer=[],this.length=0}n.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=n})),uv=t(((e,t)=>{function n(e){if(!e||e<1)throw Error(`BitMatrix size must be defined and greater than 0`);this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}n.prototype.set=function(e,t,n,r){let i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=n})),dv=t((e=>{var t=sv().getSymbolSize;e.getRowColCoords=function(e){if(e===1)return[];let n=Math.floor(e/7)+2,r=t(e),i=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let e=1;e<n-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},e.getPositions=function(t){let n=[],r=e.getRowColCoords(t),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)e===0&&t===0||e===0&&t===i-1||e===i-1&&t===0||n.push([r[e],r[t]]);return n}})),fv=t((e=>{var t=sv().getSymbolSize,n=7;e.getPositions=function(e){let r=t(e);return[[0,0],[r-n,0],[0,r-n]]}})),pv=t((e=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(e){return e!=null&&e!==``&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){let n=e.size,r=0,i=0,a=0,o=null,s=null;for(let c=0;c<n;c++){i=a=0,o=s=null;for(let l=0;l<n;l++){let n=e.get(c,l);n===o?i++:(i>=5&&(r+=t.N1+(i-5)),o=n,i=1),n=e.get(l,c),n===s?a++:(a>=5&&(r+=t.N1+(a-5)),s=n,a=1)}i>=5&&(r+=t.N1+(i-5)),a>=5&&(r+=t.N1+(a-5))}return r},e.getPenaltyN2=function(e){let n=e.size,r=0;for(let t=0;t<n-1;t++)for(let i=0;i<n-1;i++){let n=e.get(t,i)+e.get(t,i+1)+e.get(t+1,i)+e.get(t+1,i+1);(n===4||n===0)&&r++}return r*t.N2},e.getPenaltyN3=function(e){let n=e.size,r=0,i=0,a=0;for(let t=0;t<n;t++){i=a=0;for(let o=0;o<n;o++)i=i<<1&2047|e.get(t,o),o>=10&&(i===1488||i===93)&&r++,a=a<<1&2047|e.get(o,t),o>=10&&(a===1488||a===93)&&r++}return r*t.N3},e.getPenaltyN4=function(e){let n=0,r=e.data.length;for(let t=0;t<r;t++)n+=e.data[t];return Math.abs(Math.ceil(n*100/r/5)-10)*t.N4};function n(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw Error(`bad maskPattern:`+t)}}e.applyMask=function(e,t){let r=t.size;for(let i=0;i<r;i++)for(let a=0;a<r;a++)t.isReserved(a,i)||t.xor(a,i,n(e,a,i))},e.getBestMask=function(t,n){let r=Object.keys(e.Patterns).length,i=0,a=1/0;for(let o=0;o<r;o++){n(o),e.applyMask(o,t);let r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(o,t),r<a&&(a=r,i=o)}return i}})),mv=t((e=>{var t=cv(),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(e,r){switch(r){case t.L:return n[(e-1)*4+0];case t.M:return n[(e-1)*4+1];case t.Q:return n[(e-1)*4+2];case t.H:return n[(e-1)*4+3];default:return}},e.getTotalCodewordsCount=function(e,n){switch(n){case t.L:return r[(e-1)*4+0];case t.M:return r[(e-1)*4+1];case t.Q:return r[(e-1)*4+2];case t.H:return r[(e-1)*4+3];default:return}}})),hv=t((e=>{var t=new Uint8Array(512),n=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)t[r]=e,n[e]=r,e<<=1,e&256&&(e^=285);for(let e=255;e<512;e++)t[e]=t[e-255]})(),e.log=function(e){if(e<1)throw Error(`log(`+e+`)`);return n[e]},e.exp=function(e){return t[e]},e.mul=function(e,r){return e===0||r===0?0:t[n[e]+n[r]]}})),gv=t((e=>{var t=hv();e.mul=function(e,n){let r=new Uint8Array(e.length+n.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<n.length;a++)r[i+a]^=t.mul(e[i],n[a]);return r},e.mod=function(e,n){let r=new Uint8Array(e);for(;r.length-n.length>=0;){let e=r[0];for(let i=0;i<n.length;i++)r[i]^=t.mul(n[i],e);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r},e.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let i=0;i<n;i++)r=e.mul(r,new Uint8Array([1,t.exp(i)]));return r}})),_v=t(((e,t)=>{var n=gv();function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw Error(`Encoder not initialized`);let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},t.exports=r})),vv=t((e=>{e.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}})),yv=t((e=>{var t=`[0-9]+`,n=`[A-Z $%*+\\-./:]+`,r=`(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+`;r=r.replace(/u/g,`\\u`);var i=`(?:(?![A-Z0-9 $%*+\\-./:]|`+r+`)(?:.|[\r
]))+`;e.KANJI=new RegExp(r,`g`),e.BYTE_KANJI=RegExp(`[^A-Z0-9 $%*+\\-./:]+`,`g`),e.BYTE=new RegExp(i,`g`),e.NUMERIC=new RegExp(t,`g`),e.ALPHANUMERIC=new RegExp(n,`g`);var a=RegExp(`^`+r+`$`),o=RegExp(`^[0-9]+$`),s=RegExp(`^[A-Z0-9 $%*+\\-./:]+$`);e.testKanji=function(e){return a.test(e)},e.testNumeric=function(e){return o.test(e)},e.testAlphanumeric=function(e){return s.test(e)}})),bv=t((e=>{var t=vv(),n=yv();e.NUMERIC={id:`Numeric`,bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:`Alphanumeric`,bit:2,ccBits:[9,11,13]},e.BYTE={id:`Byte`,bit:4,ccBits:[8,16,16]},e.KANJI={id:`Kanji`,bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,n){if(!e.ccBits)throw Error(`Invalid mode: `+e);if(!t.isValid(n))throw Error(`Invalid version: `+n);return n>=1&&n<10?e.ccBits[0]:n<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return n.testNumeric(t)?e.NUMERIC:n.testAlphanumeric(t)?e.ALPHANUMERIC:n.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw Error(`Invalid mode`)},e.isValid=function(e){return e&&e.bit&&e.ccBits};function r(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`numeric`:return e.NUMERIC;case`alphanumeric`:return e.ALPHANUMERIC;case`kanji`:return e.KANJI;case`byte`:return e.BYTE;default:throw Error(`Unknown mode: `+t)}}e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch{return n}}})),xv=t((e=>{var t=sv(),n=mv(),r=cv(),i=bv(),a=vv(),o=7973,s=t.getBCHDigit(o);function c(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}function l(e,t){return i.getCharCountIndicator(e,t)+4}function u(e,t){let n=0;return e.forEach(function(e){let r=l(e.mode,t);n+=r+e.getBitsLength()}),n}function d(t,n){for(let r=1;r<=40;r++)if(u(t,r)<=e.getCapacity(r,n,i.MIXED))return r}e.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,r,o){if(!a.isValid(e))throw Error(`Invalid QR Code version`);o===void 0&&(o=i.BYTE);let s=(t.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,r))*8;if(o===i.MIXED)return s;let c=s-l(o,e);switch(o){case i.NUMERIC:return Math.floor(c/10*3);case i.ALPHANUMERIC:return Math.floor(c/11*2);case i.KANJI:return Math.floor(c/13);case i.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(e,t){let n,i=r.from(t,r.M);if(Array.isArray(e)){if(e.length>1)return d(e,i);if(e.length===0)return 1;n=e[0]}else n=e;return c(n.mode,n.getLength(),i)},e.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw Error(`Invalid QR Code version`);let n=e<<12;for(;t.getBCHDigit(n)-s>=0;)n^=o<<t.getBCHDigit(n)-s;return e<<12|n}})),Sv=t((e=>{var t=sv(),n=1335,r=21522,i=t.getBCHDigit(n);e.getEncodedBits=function(e,a){let o=e.bit<<3|a,s=o<<10;for(;t.getBCHDigit(s)-i>=0;)s^=n<<t.getBCHDigit(s)-i;return(o<<10|s)^r}})),Cv=t(((e,t)=>{var n=bv();function r(e){this.mode=n.NUMERIC,this.data=e.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);let i=this.data.length-t;i>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,i*3+1))},t.exports=r})),wv=t(((e,t)=>{var n=bv(),r=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`.split(``);function i(e){this.mode=n.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let n=r.indexOf(this.data[t])*45;n+=r.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(r.indexOf(this.data[t]),6)},t.exports=i})),Tv=t(((e,t)=>{var n=bv();function r(e){this.mode=n.BYTE,this.data=typeof e==`string`?new TextEncoder().encode(e):new Uint8Array(e)}r.getBitsLength=function(e){return e*8},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},t.exports=r})),Ev=t(((e,t)=>{var n=bv(),r=sv();function i(e){this.mode=n.KANJI,this.data=e}i.getBitsLength=function(e){return e*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error(`Invalid SJIS character: `+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},t.exports=i})),Dv=t(((e,t)=>{var n={single_source_shortest_paths:function(e,t,r){var i={},a={};a[t]=0;var o=n.PriorityQueue.make();o.push(t,0);for(var s,c,l,u,d,f,p,m,h;!o.empty();)for(l in s=o.pop(),c=s.value,u=s.cost,d=e[c]||{},d)d.hasOwnProperty(l)&&(f=d[l],p=u+f,m=a[l],h=a[l]===void 0,(h||m>p)&&(a[l]=p,o.push(l,p),i[l]=c));if(r!==void 0&&a[r]===void 0){var g=[`Could not find a path from `,t,` to `,r,`.`].join(``);throw Error(g)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,t,r){var i=n.single_source_shortest_paths(e,t,r);return n.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var t=n.PriorityQueue,r={},i;for(i in e||={},t)t.hasOwnProperty(i)&&(r[i]=t[i]);return r.queue=[],r.sorter=e.sorter||t.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t!==void 0&&(t.exports=n)})),Ov=t((e=>{var t=bv(),n=Cv(),r=wv(),i=Tv(),a=Ev(),o=yv(),s=sv(),c=Dv();function l(e){return unescape(encodeURIComponent(e)).length}function u(e,t,n){let r=[],i;for(;(i=e.exec(n))!==null;)r.push({data:i[0],index:i.index,mode:t,length:i[0].length});return r}function d(e){let n=u(o.NUMERIC,t.NUMERIC,e),r=u(o.ALPHANUMERIC,t.ALPHANUMERIC,e),i,a;return s.isKanjiModeEnabled()?(i=u(o.BYTE,t.BYTE,e),a=u(o.KANJI,t.KANJI,e)):(i=u(o.BYTE_KANJI,t.BYTE,e),a=[]),n.concat(r,i,a).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,o){switch(o){case t.NUMERIC:return n.getBitsLength(e);case t.ALPHANUMERIC:return r.getBitsLength(e);case t.KANJI:return a.getBitsLength(e);case t.BYTE:return i.getBitsLength(e)}}function p(e){return e.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function m(e){let n=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case t.NUMERIC:n.push([i,{data:i.data,mode:t.ALPHANUMERIC,length:i.length},{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.ALPHANUMERIC:n.push([i,{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.KANJI:n.push([i,{data:i.data,mode:t.BYTE,length:l(i.data)}]);break;case t.BYTE:n.push([{data:i.data,mode:t.BYTE,length:l(i.data)}])}}return n}function h(e,n){let r={},i={start:{}},a=[`start`];for(let o=0;o<e.length;o++){let s=e[o],c=[];for(let e=0;e<s.length;e++){let l=s[e],u=``+o+e;c.push(u),r[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===l.mode?(i[o][u]=f(r[o].lastCount+l.length,l.mode)-f(r[o].lastCount,l.mode),r[o].lastCount+=l.length):(r[o]&&(r[o].lastCount=l.length),i[o][u]=f(l.length,l.mode)+4+t.getCharCountIndicator(l.mode,n))}}a=c}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:r}}function g(e,o){let c,l=t.getBestModeForData(e);if(c=t.from(o,l),c!==t.BYTE&&c.bit<l.bit)throw Error(`"`+e+`" cannot be encoded with mode `+t.toString(c)+`.
 Suggested mode is: `+t.toString(l));switch(c===t.KANJI&&!s.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new n(e);case t.ALPHANUMERIC:return new r(e);case t.KANJI:return new a(e);case t.BYTE:return new i(e)}}e.fromArray=function(e){return e.reduce(function(e,t){return typeof t==`string`?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},e.fromString=function(t,n){let r=h(m(d(t,s.isKanjiModeEnabled())),n),i=c.find_path(r.map,`start`,`end`),a=[];for(let e=1;e<i.length-1;e++)a.push(r.table[i[e]].node);return e.fromArray(p(a))},e.rawSplit=function(t){return e.fromArray(d(t,s.isKanjiModeEnabled()))}})),kv=t((e=>{var t=sv(),n=cv(),r=lv(),i=uv(),a=dv(),o=fv(),s=pv(),c=mv(),l=_v(),u=xv(),d=Sv(),f=bv(),p=Ov();function m(e,t){let n=e.size,r=o.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],a=r[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||n<=i+t))for(let r=-1;r<=7;r++)a+r<=-1||n<=a+r||(t>=0&&t<=6&&(r===0||r===6)||r>=0&&r<=6&&(t===0||t===6)||t>=2&&t<=4&&r>=2&&r<=4?e.set(i+t,a+r,!0,!0):e.set(i+t,a+r,!1,!0))}}function h(e){let t=e.size;for(let n=8;n<t-8;n++){let t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}function g(e,t){let n=a.getPositions(t);for(let t=0;t<n.length;t++){let r=n[t][0],i=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)t===-2||t===2||n===-2||n===2||t===0&&n===0?e.set(r+t,i+n,!0,!0):e.set(r+t,i+n,!1,!0)}}function _(e,t){let n=e.size,r=u.getEncodedBits(t),i,a,o;for(let t=0;t<18;t++)i=Math.floor(t/3),a=t%3+n-8-3,o=(r>>t&1)==1,e.set(i,a,o,!0),e.set(a,i,o,!0)}function v(e,t,n){let r=e.size,i=d.getEncodedBits(t,n),a,o;for(a=0;a<15;a++)o=(i>>a&1)==1,a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(r-15+a,8,o,!0),a<8?e.set(8,r-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(r-8,8,1,!0)}function y(e,t){let n=e.size,r=-1,i=n-1,a=7,o=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,s-n)){let r=!1;o<t.length&&(r=(t[o]>>>a&1)==1),e.set(i,s-n,r),a--,a===-1&&(o++,a=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function b(e,n,i){let a=new r;i.forEach(function(t){a.put(t.mode.bit,4),a.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(a)});let o=(t.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,n))*8;for(a.getLengthInBits()+4<=o&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(0);let s=(o-a.getLengthInBits())/8;for(let e=0;e<s;e++)a.put(e%2?17:236,8);return x(a,e,n)}function x(e,n,r){let i=t.getSymbolTotalCodewords(n),a=i-c.getTotalCodewordsCount(n,r),o=c.getBlocksCount(n,r),s=o-i%o,u=Math.floor(i/o),d=Math.floor(a/o),f=d+1,p=u-d,m=new l(p),h=0,g=Array(o),_=Array(o),v=0,y=new Uint8Array(e.buffer);for(let e=0;e<o;e++){let t=e<s?d:f;g[e]=y.slice(h,h+t),_[e]=m.encode(g[e]),h+=t,v=Math.max(v,t)}let b=new Uint8Array(i),x=0,S,C;for(S=0;S<v;S++)for(C=0;C<o;C++)S<g[C].length&&(b[x++]=g[C][S]);for(S=0;S<p;S++)for(C=0;C<o;C++)b[x++]=_[C][S];return b}function S(e,n,r,a){let o;if(Array.isArray(e))o=p.fromArray(e);else if(typeof e==`string`){let t=n;if(!t){let n=p.rawSplit(e);t=u.getBestVersionForData(n,r)}o=p.fromString(e,t||40)}else throw Error(`Invalid data`);let c=u.getBestVersionForData(o,r);if(!c)throw Error(`The amount of data is too big to be stored in a QR Code`);if(!n)n=c;else if(n<c)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+c+`.
`);let l=b(n,r,o),d=new i(t.getSymbolSize(n));return m(d,n),h(d),g(d,n),v(d,r,0),n>=7&&_(d,n),y(d,l),isNaN(a)&&(a=s.getBestMask(d,v.bind(null,d,r))),s.applyMask(a,d),v(d,r,a),{modules:d,version:n,errorCorrectionLevel:r,maskPattern:a,segments:o}}e.create=function(e,r){if(e===void 0||e===``)throw Error(`No input text`);let i=n.M,a,o;return r!==void 0&&(i=n.from(r.errorCorrectionLevel,n.M),a=u.from(r.version),o=s.from(r.maskPattern),r.toSJISFunc&&t.setToSJISFunction(r.toSJISFunc)),S(e,a,i,o)}})),Av=t((e=>{function t(e){if(typeof e==`number`&&(e=e.toString()),typeof e!=`string`)throw Error(`Color should be defined as hex string`);let t=e.slice().replace(`#`,``).split(``);if(t.length<3||t.length===5||t.length>8)throw Error(`Invalid hex color: `+e);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),t.length===6&&t.push(`F`,`F`);let n=parseInt(t.join(``),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:`#`+t.slice(0,6).join(``)}}e.getOptions=function(e){e||={},e.color||(e.color={});let n=e.margin===void 0||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:n,color:{dark:t(e.color.dark||`#000000ff`),light:t(e.color.light||`#ffffffff`)},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},e.getImageWidth=function(t,n){let r=e.getScale(t,n);return Math.floor((t+n.margin*2)*r)},e.qrToImageData=function(t,n,r){let i=n.modules.size,a=n.modules.data,o=e.getScale(i,r),s=Math.floor((i+r.margin*2)*o),c=r.margin*o,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=(e*s+n)*4,d=r.color.light;if(e>=c&&n>=c&&e<s-c&&n<s-c){let t=Math.floor((e-c)/o),r=Math.floor((n-c)/o);d=l[+!!a[t*i+r]]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}})),jv=t((e=>{var t=Av();function n(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||={},t.height=n,t.width=n,t.style.height=n+`px`,t.style.width=n+`px`}function r(){try{return document.createElement(`canvas`)}catch{throw Error(`You need to specify a canvas element`)}}e.render=function(e,i,a){let o=a,s=i;o===void 0&&(!i||!i.getContext)&&(o=i,i=void 0),i||(s=r()),o=t.getOptions(o);let c=t.getImageWidth(e.modules.size,o),l=s.getContext(`2d`),u=l.createImageData(c,c);return t.qrToImageData(u.data,e,o),n(l,s,c),l.putImageData(u,0,0),s},e.renderToDataURL=function(t,n,r){let i=r;i===void 0&&(!n||!n.getContext)&&(i=n,n=void 0),i||={};let a=e.render(t,n,i),o=i.type||`image/png`,s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}})),Mv=t((e=>{var t=Av();function n(e,t){let n=e.a/255,r=t+`="`+e.hex+`"`;return n<1?r+` `+t+`-opacity="`+n.toFixed(2).slice(1)+`"`:r}function r(e,t,n){let r=e+t;return n!==void 0&&(r+=` `+n),r}function i(e,t,n){let i=``,a=0,o=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);!l&&!o&&(o=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=o?r(`M`,l+n,.5+u+n):r(`m`,a,0),a=0,o=!1),l+1<t&&e[c+1]||(i+=r(`h`,s),s=0)):a++}return i}e.render=function(e,r,a){let o=t.getOptions(r),s=e.modules.size,c=e.modules.data,l=s+o.margin*2,u=o.color.light.a?`<path `+n(o.color.light,`fill`)+` d="M0 0h`+l+`v`+l+`H0z"/>`:``,d=`<path `+n(o.color.dark,`stroke`)+` d="`+i(c,s,o.margin)+`"/>`,f=`viewBox="0 0 `+l+` `+l+`"`,p=`<svg xmlns="http://www.w3.org/2000/svg" `+(o.width?`width="`+o.width+`" height="`+o.width+`" `:``)+f+` shape-rendering="crispEdges">`+u+d+`</svg>
`;return typeof a==`function`&&a(null,p),p}})),Nv=e(t((e=>{var t=ov(),n=kv(),r=jv(),i=Mv();function a(e,r,i,a,o){let s=[].slice.call(arguments,1),c=s.length,l=typeof s[c-1]==`function`;if(!l&&!t())throw Error(`Callback required as last argument`);if(l){if(c<2)throw Error(`Too few arguments provided`);c===2?(o=i,i=r,r=a=void 0):c===3&&(r.getContext&&o===void 0?(o=a,a=void 0):(o=a,a=i,i=r,r=void 0))}else{if(c<1)throw Error(`Too few arguments provided`);return c===1?(i=r,r=a=void 0):c===2&&!r.getContext&&(a=i,i=r,r=void 0),new Promise(function(t,o){try{t(e(n.create(i,a),r,a))}catch(e){o(e)}})}try{let t=n.create(i,a);o(null,e(t,r,a))}catch(e){o(e)}}e.create=n.create,e.toCanvas=a.bind(null,r.render),e.toDataURL=a.bind(null,r.renderToDataURL),e.toString=a.bind(null,function(e,t,n){return i.render(e,n)})}))(),1),Pv=`#ffffff`,Fv=`#0b1020`,Iv=2;function Lv(e,t,n){let r=n*.92,i=(n-r)/2,a=e+i,o=t+i;return`M${a.toFixed(2)} ${o.toFixed(2)}h${r.toFixed(2)}v${r.toFixed(2)}h${-r.toFixed(2)}z`}function Rv(e,t=180){let n=String(e||``).trim();if(!n)return``;let r=Nv.create(n,{errorCorrectionLevel:`H`}),i=r.modules.size,a=i+4,o=Math.max(64,Math.round(t)),s=o/a,c=[];for(let e=0;e<i;e++)for(let t=0;t<i;t++){if(!r.modules.get(e,t))continue;let n=(Iv+t)*s,i=(Iv+e)*s;c.push(Lv(n,i,s))}return`<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${o}" viewBox="0 0 ${o} ${o}" role="img" aria-hidden="true"><rect width="${o}" height="${o}" fill="${Pv}"/><g fill="${Fv}">${c.length?`<path d="${c.join(``)}"/>`:``}</g></svg>`}function zv(e,t=180){return Rv(e,t)}async function Bv(e,t=128){let n=String(e||``).trim();return n?Nv.toDataURL(n,{width:Math.max(64,Math.round(t)),margin:2,errorCorrectionLevel:`H`,color:{dark:Fv,light:Pv}}):``}function Vv(e,t){let n=Zm(e);return n?nh(n,t):null}var Hv=8;function Z(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function Uv(e){return Number.isFinite(e)?e>=1e3?e.toLocaleString(void 0,{maximumFractionDigits:0}):e>=10?e.toLocaleString(void 0,{maximumFractionDigits:2}):e.toLocaleString(void 0,{maximumFractionDigits:4,minimumFractionDigits:0}):`0`}function Wv(e,t){let n=(t||``).trim(),r=(e||``).trim()||`TOKEN`;return!n||(n.toUpperCase(),r.toUpperCase()),r}function Gv(e){let t=e.value.trim();if(!t)return`#`;if(/^https?:\/\//i.test(t))return t;let n=e.label.toLowerCase();if(n===`x`){let e=t.replace(/^@+/,``);return`https://x.com/${encodeURIComponent(e)}`}if(n===`telegram`){if(/^t\.me\//i.test(t))return`https://${t}`;let e=t.replace(/^@+/,``);return`https://t.me/${encodeURIComponent(e)}`}return n===`discord`?/discord\.gg|discord\.com/i.test(t)?t.startsWith(`http`)?t:`https://${t}`:`#`:(n===`web`||n===`link`)&&/^[a-z0-9.-]+\.[a-z]{2,}/i.test(t)&&!/\s/.test(t)?`https://${t}`:`#`}function Kv(e){let t=(e?.length?e:[2,4,3]).slice(0,24),n=Math.max(1,t.length),r=Math.max(1,Math.min(3,192/n*.16)),i=192-r*(n-1),a=Math.max(2,i/n),o=``,s=[];for(let e=0;e<n;e++){let n=Math.max(0,Math.min(Hv,Number(t[e])||0)),i=4+e*(a+r)+a/2,c=n/Hv*32,l=36-c;if(o+=`${e===0?`M`:`L`}${i.toFixed(1)} ${l.toFixed(1)} `,n>0){let t=Math.max(1.5,c),n=36-t,i=4+e*(a+r);s.push(`<rect x="${i.toFixed(1)}" y="${n.toFixed(1)}" width="${a.toFixed(1)}" height="${t.toFixed(1)}" rx="1.2" class="bar"/>`)}}return`<svg class="viz-svg" viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
  <line class="ceiling" x1="4" y1="4" x2="196" y2="4" stroke-dasharray="3 3"/>
  <line class="mid" x1="4" y1="12" x2="196" y2="12"/>
  <line class="mid" x1="4" y1="20" x2="196" y2="20"/>
  <line class="floor" x1="4" y1="36" x2="196" y2="36"/>
  <path class="env" d="${o.trim()}" fill="none"/>
  ${s.join(``)}
</svg>`}function qv(e){let t=e.motorStrengths?.filter(e=>e.length)||[];return t.length<2?`<div class="viz" title="Intensity over time · max ceiling = 8">
    ${Kv(e.strengths)}
    <span class="max-label">max</span>
  </div>`:`<div class="viz viz-multi" title="Independent motor intensity over time · max ceiling = 8">
    ${t.slice(0,3).map((e,t)=>`<div class="viz-lane">
      <span class="motor-label">M${t+1}</span>
      ${Kv(e)}
    </div>`).join(``)}
    <span class="max-label">max</span>
  </div>`}function Jv(e,t){return Yv({name:``,blurb:``,price:e.price,timeSec:0,tag:``,family:``,strengths:[],coin:e.coin,tokenAddress:e.tokenAddress,tokenDecimals:e.tokenDecimals,paymentUri:e.paymentUri},t.receive,t.chainId,t.tokenAddress||``,t.tokenDecimals??18,t.nativeDecimals??18,t.tokenSymbol||``,t.networkName||``)}function Yv(e,t,n,r,i,a,o=``,s=``){if(!t||!/^0x[a-fA-F0-9]{40}$/i.test(t))return null;let c=(e.tokenAddress||r||``).trim(),l=c?Math.max(0,Math.round(Number(e.tokenDecimals??i)||18)):Math.max(0,Math.round(Number(a)||18)),u=(e.coin||o||``).trim(),d=Vv({receiveAddress:t,amountHuman:e.price,chainId:n,decimals:l,tokenAddress:c||null,tokenSymbol:u||null,networkName:s||null},t);if(d)return d;let f=String(e.paymentUri||``).trim();return f&&f.startsWith(`ethereum:`)?nh(f,t):null}function Xv(e,t,n,r,i){let a=Uv(e.price),o=e.timeSec>0?`${Math.round(e.timeSec)}s`:`—`,s=(e.coin||t||`TOKEN`).trim()||`TOKEN`,c=(i||``).trim(),l=String(e.price),u=e.featured?` is-featured`:``,d=r?` href="${Z(r)}" data-payment-uri="${Z(r)}"`:``,f=n&&r?`<div class="card-qr" aria-hidden="true">${zv(r,200)}</div>`:``,p=n&&r?` class="card tip-card${u}" data-amount="${Z(l)}" data-name="${Z(e.name)}"${d} title="Pay ${Z(a)} ${Z(s)} on ${Z(c||`PulseChain`)}"`:` class="card${u}" aria-disabled="true"`,m=n&&r?`a`:`article`;return`<${m}${p}>
  <div class="price-block">
    <div class="price">${Z(a)}</div>
    <div class="sym-line">${Z(s)} · ${Z(o)}</div>
  </div>
  ${f}
  <div class="name">${Z(e.name)}</div>
  ${qv(e)}
  ${n?`<span class="tap-hint">Click to pay · or scan QR</span>`:``}
</${m}>`}var Zv=`:root {
  color-scheme: dark;
  --ink: #e8f4ff;
  --soft: #9bb8d4;
  --muted: rgba(232, 244, 255, 0.55);
  --ember: #00c8ff;
  --gold: #5ce1ff;
  --ok: #6fbf95;
  --paper: #050d18;
  --card: rgba(10, 28, 52, 0.9);
  --panel: rgba(8, 22, 44, 0.85);
  --line: rgba(232, 244, 255, 0.14);
  --sans: "Avenir Next", "Segoe UI", Candara, system-ui, sans-serif;
  --display: "Avenir Next", "Segoe UI", Candara, system-ui, sans-serif;
}
* { box-sizing: border-box; }
html, body {
  margin: 0;
  min-height: 100%;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);
}
body {
  background:
    radial-gradient(80% 50% at 8% -5%, rgba(0, 200, 255, 0.22), transparent 55%),
    radial-gradient(60% 40% at 100% 0%, rgba(0, 140, 220, 0.12), transparent 50%),
    linear-gradient(168deg, #040a14 0%, #071428 45%, #030810 100%);
  min-height: 100svh;
  padding-bottom: 4rem;
}
.wrap {
  max-width: 72rem;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 2.5rem;
}
.brand {
  color: var(--ember);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  margin: 0 0 0.5rem;
}
h1 {
  font-family: var(--display);
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 600;
  margin: 0 0 0.35rem;
  line-height: 1.15;
}
.tagline {
  color: var(--soft);
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
}
.show-times {
  margin: 0 0 0.85rem;
  font-size: 0.95rem;
  color: var(--ink);
}
.show-times .lbl {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ember);
  margin-bottom: 0.2rem;
}
.subtitle {
  color: var(--soft);
  margin: 0 0 1rem;
  font-size: 1.15rem;
  font-weight: 500;
}
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 1.15rem;
}
.links a {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(0, 200, 255, 0.14);
  border: 1px solid rgba(0, 200, 255, 0.35);
  color: var(--ink);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
}
.links a:hover { border-color: var(--ember); }
.links a .lbl { color: var(--ember); margin-right: 0.35rem; }
.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 0.9rem 1.1rem;
  margin-bottom: 1.35rem;
}
.panel p { margin: 0.35rem 0; font-size: 0.95rem; }
.panel .wallet { color: var(--gold); word-break: break-all; font-weight: 500; }
.panel .rule { color: var(--soft); font-size: 0.9rem; }
.panel .rule a { color: var(--ember); }
.file-warn {
  margin: 0.5rem 0 0;
  padding: 0.55rem 0.7rem;
  border-radius: 10px;
  border: 1px solid rgba(240, 128, 128, 0.45);
  background: rgba(240, 128, 128, 0.12);
  color: #f08080;
  font-size: 0.9rem;
}
.pay-now {
  display: inline-block;
  margin-top: 0.65rem;
  padding: 0.65rem 1.1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 200, 255, 0.55);
  background: linear-gradient(180deg, rgba(0, 200, 255, 0.28), rgba(0, 140, 220, 0.18));
  color: var(--ink);
  font: inherit;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}
.pay-now:hover {
  border-color: var(--gold);
  background: linear-gradient(180deg, rgba(92, 225, 255, 0.35), rgba(0, 160, 230, 0.22));
}
.pay-now[aria-disabled="true"] {
  opacity: 0.45;
  pointer-events: none;
}
.pay-layout {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem 1.15rem;
  align-items: start;
  margin-top: 0.65rem;
}
@media (max-width: 520px) {
  .pay-layout { grid-template-columns: 1fr; justify-items: center; text-align: center; }
  .pay-layout .wallet { text-align: center; }
}
.pay-qr-wrap {
  width: 168px;
  border-radius: 10px;
  background: #fff;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.pay-qr-wrap svg {
  width: 156px;
  height: 156px;
  display: block;
}
.pay-qr-wrap .qr-cap,
.card-qr .qr-cap {
  display: block;
  margin-top: 4px;
  padding: 0 2px 2px;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.25;
  color: #123;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
#pay-uri-display {
  margin: 0.45rem 0 0;
  font-size: 0.72rem;
  line-height: 1.35;
  color: var(--soft);
  word-break: break-all;
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
}
#pay-uri-display code { color: var(--gold); font-size: inherit; }
.pay-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.55rem;
}
.pay-actions button {
  display: inline-block;
  padding: 0.35rem 0.7rem;
  border-radius: 8px;
  border: 1px solid rgba(212, 168, 75, 0.4);
  background: rgba(212, 168, 75, 0.12);
  color: var(--gold);
  font: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
}
.pay-actions button:hover {
  border-color: var(--gold);
  background: rgba(212, 168, 75, 0.22);
}
#selected-tip {
  margin: 0.5rem 0 0;
  padding: 0.55rem 0.7rem;
  border-radius: 10px;
  border: 1px dashed rgba(0, 200, 255, 0.45);
  background: rgba(0, 200, 255, 0.1);
  color: var(--ink);
  font-size: 0.95rem;
  min-height: 2.6rem;
}
#selected-tip strong { color: var(--gold); }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11.5rem, 1fr));
  gap: 0.75rem;
}
.toy-block { margin: 0 0 1.1rem; }
.toy-h {
  margin: 0 0 0.45rem;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gold, #f0c14b);
}
@media (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  }
}
.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.45rem 0.5rem 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.35rem;
  min-height: 13rem;
  color: inherit;
  text-align: center;
  font: inherit;
  width: 100%;
}
.card-qr {
  flex: 1 1 auto;
  width: 100%;
  min-height: 5.5rem;
  background: #fff;
  border-radius: 8px;
  padding: 4px;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-qr svg {
  width: 100%;
  height: auto;
  max-height: 100%;
  aspect-ratio: 1;
  display: block;
}
a.card {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: border-color 0.15s ease, transform 0.12s ease, box-shadow 0.15s ease;
}
a.card:hover {
  border-color: rgba(0, 200, 255, 0.55);
  box-shadow: 0 0 0 1px rgba(0, 200, 255, 0.2);
  transform: translateY(-1px);
}
a.card:active { transform: translateY(0); }
a.card.is-selected {
  border-color: var(--ember);
  box-shadow: 0 0 0 1px rgba(0, 200, 255, 0.35);
}
.card.is-featured {
  background: linear-gradient(165deg, rgba(78, 52, 34, 0.98), rgba(48, 34, 26, 0.96));
  border-color: rgba(92, 225, 255, 0.55);
  box-shadow: 0 0 0 1px rgba(92, 225, 255, 0.22), 0 8px 22px rgba(0, 0, 0, 0.28);
}
.card.is-featured .price-block {
  background: rgba(0, 200, 255, 0.3);
}
.card.is-featured .price {
  color: #7af0ff;
}
.card.is-featured .price {
  color: #7af0ff;
}
.feat-badge {
  margin: 0;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gold);
}
.price-block {
  flex: 0 0 auto;
  width: 100%;
  background: rgba(0, 200, 255, 0.14);
  border-radius: 7px;
  padding: 0.3rem 0.45rem 0.28rem;
}
.price {
  font-family: var(--display);
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1.05;
  color: var(--gold);
}
.sym-line {
  margin-top: 0.38rem;
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--muted);
  letter-spacing: 0.03em;
}
.name {
  font-size: 0.78rem;
  font-weight: 650;
  line-height: 1.25;
  color: var(--ink);
  word-break: break-word;
}
.viz {
  position: relative;
  height: 2.4rem;
  margin-top: auto;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  background: rgba(0,0,0,0.25);
}
.viz-svg { width: 100%; height: 100%; display: block; }
.viz-multi {
  height: 4.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.16rem;
  padding: 0.2rem 0.25rem;
}
.viz-lane {
  display: grid;
  grid-template-columns: 1.35rem minmax(0, 1fr);
  align-items: center;
  min-height: 0;
  flex: 1;
}
.viz-lane .viz-svg { min-height: 0; }
.motor-label {
  color: var(--soft);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.viz .bar { fill: rgba(0, 200, 255, 0.75); }
.viz .env { stroke: var(--gold); stroke-width: 1.2; }
.viz .ceiling { stroke: rgba(92, 225, 255, 0.55); stroke-width: 1; }
.viz .mid { stroke: rgba(232, 244, 255, 0.08); stroke-width: 1; }
.viz .floor { stroke: rgba(232, 244, 255, 0.12); stroke-width: 1; }
.max-label {
  position: absolute;
  top: 2px;
  right: 4px;
  font-size: 0.62rem;
  color: var(--muted);
}
.tap-hint {
  display: block;
  margin-top: 0.4rem;
  font-size: 0.72rem;
  color: var(--ember);
  font-weight: 600;
  letter-spacing: 0.03em;
}
.foot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
  font-size: 0.8rem;
  color: var(--muted);
}
#tip-toast {
  position: fixed;
  left: 50%;
  bottom: 1.25rem;
  transform: translateX(-50%);
  z-index: 50;
  max-width: min(36rem, calc(100vw - 1.5rem));
  padding: 0.65rem 1rem;
  border-radius: 12px;
  background: rgba(28, 22, 20, 0.95);
  border: 1px solid var(--line);
  color: var(--ink);
  font-size: 0.88rem;
  box-shadow: 0 8px 28px rgba(0,0,0,0.45);
  display: none;
}
#tip-toast.show { display: block; }
#tip-toast.ok { border-color: rgba(111, 191, 149, 0.5); color: var(--ok); }
#tip-toast.err { border-color: rgba(240, 128, 128, 0.5); color: #f08080; }
#tip-toast a { color: var(--gold); }`;function Qv(e){return`
(function () {
  const CFG = ${e};
  const toast = document.getElementById('tip-toast');
  const selectedEl = document.getElementById('selected-tip');
  const payQrWrap = document.querySelector('.pay-qr-wrap');
  const payUriDisplay = document.getElementById('pay-uri-display');
  const fileWarn = document.getElementById('file-warn');
  const isFile = location.protocol === 'file:';
  let currentUri = '';

  if (isFile && fileWarn) fileWarn.hidden = false;

  function showToast(msg, kind) {
    if (!toast) return;
    toast.className = 'show' + (kind ? ' ' + kind : '');
    toast.innerHTML = msg;
  }

  function tipUnitLabel() {
    return CFG.symbol || CFG.tokenSymbol || 'TOKEN';
  }

  function fanSafePaymentUri(uri) {
    uri = String(uri || '').trim();
    if (!uri || uri.indexOf('ethereum:') !== 0) return '';
    var receive = String(CFG.receive || '').toLowerCase();
    if (!receive) return '';
    var transfer = uri.match(/^ethereum:(0x[a-fA-F0-9]{40})@(\\d+)\\/transfer\\?(.+)$/i);
    if (transfer) {
      var params = new URLSearchParams(transfer[3]);
      var dest = String(params.get('address') || '');
      var amt = String(params.get('uint256') || '');
      if (!/^0x[a-fA-F0-9]{40}$/i.test(dest)) return '';
      if (dest.toLowerCase() !== receive) return '';
      if (transfer[1].toLowerCase() === receive) return '';
      if (!/^\\d+$/.test(amt) || amt === '0') return '';
      return uri;
    }
    if (/\\/transfer\\b/i.test(uri)) return '';
    var value = uri.match(/[?&]value=([0-9]+)(?:&|$)/i);
    if (!value || value[1] === '0') return '';
    var addrs = uri.match(/0x[a-fA-F0-9]{40}/g) || [];
    if (addrs.length !== 1) return '';
    if (addrs[0].toLowerCase() !== receive) return '';
    return uri;
  }

  function setMainQrFromButton(el) {
    if (!payQrWrap) return;
    var cardQr = el && el.querySelector && el.querySelector('.card-qr');
    if (!cardQr) return;
    payQrWrap.innerHTML = cardQr.innerHTML;
  }

  function setPayUriDisplay(uri) {
    if (!payUriDisplay) return;
    if (!uri) {
      payUriDisplay.innerHTML = '';
      return;
    }
    payUriDisplay.innerHTML = 'EIP-681: <code>' + uri.replace(/</g, '') + '</code>';
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () { return true; }).catch(function () {
        return legacyCopy(text);
      });
    }
    return Promise.resolve(legacyCopy(text));
  }

  function legacyCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (_) {
      return false;
    }
  }

  function markSelected(el) {
    document.querySelectorAll('a.tip-card').forEach(function (b) {
      b.classList.remove('is-selected');
    });
    if (el && el.classList.contains('tip-card')) el.classList.add('is-selected');
  }

  function onPayClick(e, el) {
    var raw = el.getAttribute('href') || el.getAttribute('data-payment-uri') || '';
    var uri = fanSafePaymentUri(raw);
    var amount = el.getAttribute('data-amount') || '';
    var name = el.getAttribute('data-name') || 'tip';
    if (!uri) return;
    currentUri = uri;
    markSelected(el);
    setMainQrFromButton(el);
    setPayUriDisplay(uri);
    if (selectedEl) {
      selectedEl.innerHTML =
        'Pay <strong>' +
        (amount || '') +
        ' ' +
        tipUnitLabel() +
        '</strong> for “' +
        name +
        '” — same EIP-681 as the QR (token, amount, network).';
    }
    if (isFile) {
      e.preventDefault();
      showToast('This downloaded file cannot open a wallet. Host the page over http(s), or scan the QR.', 'err');
      copyText(uri);
      return;
    }
    showToast('Opening wallet… confirm token, amount, and network.', 'ok');
    copyText(uri);
  }

  document.querySelectorAll('a.tip-card').forEach(function (el) {
    el.addEventListener('click', function (e) {
      onPayClick(e, el);
    });
  });

  var payNow = document.getElementById('btn-pay-now');
  if (payNow) {
    currentUri = fanSafePaymentUri(payNow.getAttribute('href') || '') || currentUri;
    payNow.addEventListener('click', function (e) {
      onPayClick(e, payNow);
    });
  }

  var copyAddr = document.getElementById('btn-copy-addr');
  if (copyAddr) {
    copyAddr.addEventListener('click', function () {
      copyText(CFG.receive).then(function (ok) {
        showToast(ok ? 'Address copied' : 'Copy failed — long-press the address', ok ? 'ok' : 'err');
      });
    });
  }

  var copyLink = document.getElementById('btn-copy-payment');
  if (copyLink) {
    currentUri = fanSafePaymentUri(copyLink.getAttribute('data-default-uri') || '') || currentUri;
    copyLink.addEventListener('click', function () {
      if (!currentUri) {
        showToast('Tap a pattern first to copy its payment link', 'err');
        return;
      }
      copyText(currentUri).then(function (ok) {
        showToast(ok ? 'Payment link copied — paste into a PulseChain EIP-681 wallet' : 'Copy failed', ok ? 'ok' : 'err');
      });
    });
  }
})();
`.trim()}function $v(e){let t=e.items.filter(e=>e.name.trim());if(!t.length)throw Error(`No enabled patterns to export — turn some On in the tip menu.`);let n=e.brand||`Just The Tip`,r=e.symbol||`TOKEN`,i=e.displayName.trim(),a=(e.tagline||``).trim(),o=(e.showTimes||``).trim(),s=Wv(r,e.tokenSymbol),c=e.receive?.trim()||``,l=(e.links||[]).filter(e=>e.value.trim()),u=e.cheapest!=null&&Number.isFinite(e.cheapest)?e.cheapest:Math.min(...t.map(e=>e.price)),d=Uv(u),f=!!(c&&/^0x[a-fA-F0-9]{40}$/i.test(c)),p=i?`${i} · Tip menu`:`${n} Tip menu`,m=l.length?`<nav class="links">${l.map(e=>{let t=Gv(e),n=t.startsWith(`http`)?` target="_blank" rel="noopener noreferrer"`:``;return`<a href="${Z(t)}"${n}><span class="lbl">${Z(e.label)}</span>${Z(e.value)}</a>`}).join(``)}</nav>`:``,h={receive:c,symbol:r,tokenSymbol:e.tokenSymbol||``,tokenAddress:(e.tokenAddress||``).trim(),chainId:Number(e.chainId)||369},g=JSON.stringify(h).replace(/</g,`\\u003c`),_=Number(e.chainId)||369,v=(e.tokenAddress||``).trim(),y=v?Math.max(0,Math.round(Number(e.tokenDecimals)||18)):Math.max(0,Math.round(Number(e.nativeDecimals)||18)),b=Math.max(0,Math.round(Number(e.nativeDecimals)||18)),x=f?Yv({name:``,blurb:``,price:u,timeSec:0,tag:``,family:``,strengths:[],tokenAddress:v||void 0,tokenDecimals:y},c,_,v,y,b,r,e.chainLabel):null,S=[d,r,e.chainLabel].filter(Boolean).join(` · `),C=f&&x?`${zv(x,156)}<span class="qr-cap">${Z(S)}</span>`:``,w=t=>{let n=(t.coin||r||`TOKEN`).trim()||`TOKEN`,i=f?Yv(t,c,_,v,y,b,r,e.chainLabel):null;return Xv(t,n,f,i,e.chainLabel)},T=[...new Set(t.map(e=>(e.forToy||``).trim()).filter(Boolean))],E=T.length>1?T.map(e=>{let n=t.filter(t=>(t.forToy||``).trim()===e);return n.length?`<section class="toy-block" aria-label="${Z(e)}">
    <h2 class="toy-h">${Z(e)}</h2>
    <div class="grid">${n.map(w).join(`
    `)}</div>
  </section>`:``}).join(`
  `):`<section class="grid" aria-label="Patterns">
    ${t.map(w).join(`
    `)}
  </section>`,D=T.length>1?`${T.length} toys · `:``,ee=f?`<div class="pay-layout">
    <div class="pay-qr-wrap" aria-label="Payment QR">${C}</div>
    <div>
      <p class="rule"><strong>Same EIP-681 as the QR:</strong> click a pattern (or Open payment) to send with token name, amount, and network filled in. Scan the QR from a PulseChain wallet. Host this page over http(s) so <code>ethereum:</code> links can open a wallet — a downloaded file often cannot.</p>
      <p id="file-warn" class="file-warn" hidden>This is a downloaded file. Scan the QR, or open this menu from an http(s) URL so Pay can launch a wallet.</p>
      <p class="wallet">${Z(c)}</p>
      <a id="btn-pay-now" class="pay-now" href="${Z(x||`#`)}"${x?` data-payment-uri="${Z(x)}" data-amount="${Z(d)}" data-name="tip"`:` aria-disabled="true"`}>Open payment</a>
      <div class="pay-actions">
        <button type="button" id="btn-copy-addr">Copy address</button>
        <button type="button" id="btn-copy-payment"${x?` data-default-uri="${Z(x)}"`:``}>Copy payment link</button>
      </div>
      <div id="selected-tip">Tap a pattern — wallet Send should prefill token, amount, and network</div>
      <p id="pay-uri-display">${x?`EIP-681: <code>${Z(x)}</code>`:``}</p>
    </div>
  </div>`:`<p class="rule">Set a valid 0x receive address in Just The Tip before export — QRs need that wallet, plus token name, amount, and network.</p>`;return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="color-scheme" content="dark"/>
<title>${Z(p)}</title>
<style>
${Zv}
</style>
</head>
<body>
<main class="wrap">
  <p class="brand">${Z(n.toUpperCase())}</p>
  ${i?`<h1>${Z(i)}</h1>`:``}
  ${a?`<p class="tagline">${Z(a)}</p>`:``}
  ${o?`<p class="show-times"><span class="lbl">Show times</span>${Z(o)}</p>`:``}
  <p class="subtitle">Tip menu</p>
  ${m}
  <section class="panel" aria-label="How to tip">
    <p><strong>Send ${Z(s)} on ${Z(e.chainLabel)}</strong></p>
    <p class="rule">Tip at least ${Z(d)} ${Z(r)} · higher amounts unlock the next pattern up</p>
    ${ee}
  </section>
  ${E}
  <footer class="foot">
    <span>${Z(D)}${t.length} pattern${t.length===1?``:`s`} · cheapest ${Z(d)} ${Z(r)}</span>
    <span>${Z(n)} · PulseChain · EIP-681</span>
  </footer>
</main>
<div id="tip-toast" role="status" aria-live="polite"></div>
${f?`<script>\n${Qv(g)}\n<\/script>`:``}
</body>
</html>
`}function ey(e){return`index.html`}var ty=2,ny=12,ry=48,iy=8,Q={paper:`#050d18`,ink:`#e8f4ff`,soft:`#9bb8d4`,muted:`rgba(232, 244, 255, 0.52)`,ember:`#00c8ff`,emberSoft:`rgba(0, 200, 255, 0.16)`,emberSoftFeatured:`rgba(0, 200, 255, 0.32)`,gold:`#5ce1ff`,line:`rgba(0, 200, 255, 0.14)`,lineFeatured:`rgba(92, 225, 255, 0.55)`,card:`rgba(10, 28, 52, 0.82)`,cardAlt:`rgba(14, 36, 64, 0.88)`,cardFeatured:`rgba(18, 48, 82, 0.96)`,cardFeaturedAlt:`rgba(22, 56, 96, 0.98)`,panel:`rgba(8, 22, 44, 0.78)`},ay=`"Avenir Next", "Segoe UI", Candara, system-ui, sans-serif`,oy=`"Avenir Next", "Segoe UI", Candara, system-ui, sans-serif`,sy={landscape:{id:`landscape`,w:1920,targetH:1080,padX:48,minCols:3,maxCols:7,minCardW:180,minCardH:190,cardAspect:.62},portrait:{id:`portrait`,w:1080,targetH:1920,padX:36,minCols:2,maxCols:3,minCardW:200,minCardH:175,cardAspect:.7}};function cy(e){return Number.isFinite(e)?e>=1e3?e.toLocaleString(void 0,{maximumFractionDigits:0}):e>=10?e.toLocaleString(void 0,{maximumFractionDigits:2}):e.toLocaleString(void 0,{maximumFractionDigits:4,minimumFractionDigits:0}):`0`}function ly(e,t){let n=(t||``).trim(),r=(e||``).trim()||`TOKEN`;return!n||(n.toUpperCase(),r.toUpperCase()),r}function uy(e,t,n){e.fillStyle=Q.paper,e.fillRect(0,0,t,n);let r=e.createRadialGradient(t*.12,0,0,t*.12,0,t*.75);r.addColorStop(0,`rgba(0, 200, 255, 0.26)`),r.addColorStop(1,`transparent`),e.fillStyle=r,e.fillRect(0,0,t,n);let i=e.createRadialGradient(t*.95,n*.05,0,t*.95,n*.05,t*.6);i.addColorStop(0,`rgba(0, 100, 220, 0.16)`),i.addColorStop(1,`transparent`),e.fillStyle=i,e.fillRect(0,0,t,n);let a=e.createLinearGradient(0,0,0,n);a.addColorStop(0,`transparent`),a.addColorStop(1,`rgba(0, 8, 24, 0.55)`),e.fillStyle=a,e.fillRect(0,0,t,n)}function dy(e,t,n,r){let i=t.replace(/\s+/g,` `).trim();if(!i)return[];let a=i.split(` `),o=[],s=``;for(let t of a){let i=s?`${s} ${t}`:t;if(e.measureText(i).width<=n){s=i;continue}if(s&&o.push(s),s=t,o.length>=r)break}if(s&&o.length<r&&o.push(s),o.length>r&&(o.length=r),o.length===r&&o.join(` `).length<i.length){let t=o[r-1];for(;t.length>1&&e.measureText(`${t}…`).width>n;)t=t.slice(0,-1);o[r-1]=`${t}…`}return o}function fy(e,t,n){if(e.measureText(t).width<=n)return t;let r=t;for(;r.length>1&&e.measureText(`${r}…`).width>n;)r=r.slice(0,-1);return`${r}…`}function py(e,t,n,r,i,a){let o=Math.min(a,r/2,i/2);e.beginPath(),e.moveTo(t+o,n),e.arcTo(t+r,n,t+r,n+i,o),e.arcTo(t+r,n+i,t,n+i,o),e.arcTo(t,n+i,t,n,o),e.arcTo(t,n,t+r,n,o),e.closePath()}function my(e,t,n,r,i,a){let o=(t?.length?t:[2,4,3]).slice(0,24),s=Math.max(1,o.length),c=iy,l=e.createLinearGradient(n,r,n,r+a);l.addColorStop(0,`rgba(0, 0, 0, 0.42)`),l.addColorStop(1,`rgba(0, 0, 0, 0.22)`),e.fillStyle=l,py(e,n,r,i,a,7),e.fill(),e.strokeStyle=`rgba(90, 78, 70, 0.95)`,e.lineWidth=1.25,py(e,n,r,i,a,7),e.stroke();let u=Math.max(3,Math.min(5,a*.12)),d=n+u,f=r+u,p=i-u*2,m=a-u*2;e.save(),e.beginPath(),py(e,n,r,i,a,7),e.clip();for(let t of[1,.75,.5,.25]){let n=f+m*(1-t);e.strokeStyle=t===1?`rgba(0, 200, 255, 0.38)`:`rgba(139, 130, 120, 0.18)`,e.lineWidth=t===1?1.25:1,e.setLineDash(t===1?[3,3]:[]),e.beginPath(),e.moveTo(d,n),e.lineTo(d+p,n),e.stroke()}e.setLineDash([]),e.strokeStyle=`rgba(139, 130, 120, 0.4)`,e.lineWidth=1,e.beginPath(),e.moveTo(d,f+m),e.lineTo(d+p,f+m),e.stroke(),a>=28&&(e.fillStyle=`rgba(0, 200, 255, 0.55)`,e.font=`600 8px ${oy}`,e.textAlign=`right`,e.fillText(`max`,d+p-1,f+8),e.textAlign=`left`);let h=Math.max(1,Math.min(2.5,(p-4)/s*.16)),g=p-4-h*(s-1),_=Math.max(2,g/s);e.beginPath();for(let t=0;t<s;t++){let n=Math.max(0,Math.min(c,Number(o[t])||0)),r=d+2+t*(_+h)+_/2,i=m*n/c,a=f+m-i;t===0?e.moveTo(r,a):e.lineTo(r,a)}e.strokeStyle=`rgba(0, 200, 255, 0.55)`,e.lineWidth=1.5,e.lineJoin=`round`,e.lineCap=`round`,e.stroke();for(let t=0;t<s;t++){let n=Math.max(0,Math.min(c,Number(o[t])||0));if(n<=0)continue;let r=Math.max(1.5,m*n/c),i=d+2+t*(_+h),a=f+m-r,s=n/c;e.fillStyle=`rgba(${Math.round(224+-12*(1-s))}, ${Math.round(120+45*s)}, ${Math.round(98+18*s)}, ${.55+s*.4})`,py(e,i,a,_,r,1.2),e.fill()}e.restore()}function hy(e,t,n,r,i,a){let o=t.motorStrengths?.filter(e=>e.length)||[];if(o.length<2){my(e,t.strengths,n,r,i,a);return}let s=Math.max(16,(a-3)/Math.min(3,o.length));for(let t=0;t<Math.min(3,o.length);t++){let a=r+t*(s+3);e.fillStyle=`rgba(232, 244, 255, 0.7)`,e.font=`700 ${Math.max(7,Math.min(9,s*.32))}px ${oy}`,e.fillText(`M${t+1}`,n,a+s*.62),my(e,o[t],n+15,a,i-15,s)}}function gy(e,t,n,r){let i=ny,a=Math.max(1,Math.floor((t+i)/(r.minCardW+i))),o=Math.min(r.minCols,e),s=Math.min(r.maxCols,e,a),c=t/Math.max(1,n),l=Math.sqrt(e*c*r.cardAspect),u=null,d=1/0;for(let a=o;a<=s;a++){let o=Math.ceil(e/a),s=(t-i*(a-1))/a,c=(n-i*(o-1))/o,f=s/r.cardAspect;if(c>f*1.25&&(c=f*1.25),c<r.minCardH&&(c=r.minCardH),s<r.minCardW-.5)continue;let p=o*c+Math.max(0,o-1)*i,m=a*o-e,h=Math.abs(p-n)/Math.max(n,1),g=Math.abs(a-l)*1.4+m*.55+h*1.2+(p>n*1.02?(p-n)/n:0);g<d&&(d=g,u={cols:a,rows:o,cardW:s,cardH:c,gridH:p})}if(!u){let n=e,a=t,o=Math.max(r.minCardH,a/r.cardAspect);return{cols:1,rows:n,cardW:a,cardH:o,gridH:n*o+Math.max(0,n-1)*i}}return u}function _y(e,t){let n=ry;if(n+=28,t.hasName&&(n+=58),t.tagline&&(n+=28),t.showTimes&&(n+=44),n+=t.hasName||t.tagline||t.showTimes?36:52,t.links.length){e.font=`600 13px ${oy}`;let r=0,i=1;for(let n of t.links){let a=`${n.label.trim()||`Link`}  ${n.value.trim()}`,o=Math.min(t.innerW,e.measureText(a).width+28);r+o>t.innerW&&r>0&&(r=0,i+=1),r+=o+10}n+=10+i*36+8}let r=18+(1+ +!!t.receive+ +!!t.hasPayQr+1)*22+14;return t.hasPayQr&&(r=Math.max(r,188)),n+=r+28,n+=8,{headerH:n,panelH:r}}function vy(e){return e?new Promise(t=>{let n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=e}):Promise.resolve(null)}async function yy(e){let t=e.items.filter(e=>e.name.trim());if(!t.length)throw Error(`No enabled patterns to export — turn some On in the tip menu.`);let n=e.orientation===`portrait`?`portrait`:`landscape`,r=sy[n],i=r.w,a=r.padX,o=e.brand||`Just The Tip`,s=e.symbol||`TOKEN`,c=e.displayName.trim()||`Tip menu`,l=(e.tagline||``).trim(),u=(e.showTimes||``).trim(),d=ly(s,e.tokenSymbol),f=e.receive?.trim()||``,p=!!e.displayName.trim(),m=(e.links||[]).filter(e=>e.value.trim()),h={receive:f,chainId:e.chainId??369,tokenAddress:e.tokenAddress,tokenDecimals:e.tokenDecimals,nativeDecimals:e.nativeDecimals??18,tokenSymbol:s,networkName:e.chainLabel},g=t.map(e=>Jv(e,h)),_=!!(f&&g.some(Boolean)),v=await Promise.all(g.map(async e=>e?vy(await Bv(e,320)):null)),y=null,b=1/0;for(let e=0;e<t.length;e++){let n=g[e];if(!n)continue;let r=t[e].price;r<b&&(b=r,y=n)}let x=y?await vy(await Bv(y,140)):null,S=document.createElement(`canvas`).getContext(`2d`);if(!S)throw Error(`Canvas unavailable`);let C=i-a*2,{headerH:w,panelH:T}=_y(S,{hasName:p,tagline:!!l,showTimes:!!u,links:m,receive:!!f,hasPayQr:_,innerW:C,padX:a,W:i}),E=Math.max(r.minCardH,r.targetH-w-64),D=gy(t.length,C,E,r),ee=Math.ceil(w+D.gridH+64),te=Math.max(r.targetH,ee),O=D.cardH,k=D.cardW;if(ee<r.targetH&&D.rows>0){let e=(r.targetH-w-64-ny*Math.max(0,D.rows-1))/D.rows;e>O&&(O=Math.min(e,k/r.cardAspect*1.2))}let A=O>=175?2:1;S.font=`400 ${k<220?10:11}px ${oy}`;let ne=k-24,re=t.map((e,t)=>({row:e,blurbLines:dy(S,e.blurb||``,ne,A),qrImg:v[t]??null})),j=document.createElement(`canvas`);j.width=Math.round(i*ty),j.height=Math.round(te*ty);let M=j.getContext(`2d`);if(!M)throw Error(`Canvas unavailable`);M.scale(ty,ty),uy(M,i,te);let N=ry;M.fillStyle=Q.ember,M.font=`600 13px ${oy}`,M.fillText(o.toUpperCase(),a,N+12),N+=28,p&&(M.fillStyle=Q.ink,M.font=`600 ${n===`portrait`?42:48}px ${ay}`,M.fillText(fy(M,c,C),a,N+38),N+=n===`portrait`?52:58),l&&(M.fillStyle=Q.soft,M.font=`400 17px ${oy}`,M.fillText(fy(M,l,C),a,N+15),N+=28),u&&(M.fillStyle=Q.ember,M.font=`600 12px ${oy}`,M.fillText(`SHOW TIMES`,a,N+12),N+=16,M.fillStyle=Q.soft,M.font=`500 16px ${oy}`,M.fillText(fy(M,u,C),a,N+14),N+=28);let P=p||!!l||!!u;if(M.fillStyle=P?Q.soft:Q.ink,M.font=P?`500 20px ${oy}`:`600 40px ${ay}`,M.fillText(`Tip menu`,a,N+(P?16:32)),N+=P?34:50,m.length){N+=4;let e=a,t=N,n=i-a,r=t+28;M.font=`600 13px ${oy}`;for(let i of m){let o=`${i.label.trim()||`Link`}  ${i.value.trim()}`,s=M.measureText(o).width,c=Math.min(C,s+28);e+c>n&&e>a&&(e=a,t=r+8,r=t+28),M.fillStyle=`rgba(0, 200, 255, 0.14)`,py(M,e,t,c,28,999),M.fill(),M.strokeStyle=`rgba(0, 200, 255, 0.35)`,M.lineWidth=1,py(M,e,t,c,28,999),M.stroke(),M.fillStyle=Q.ink,M.fillText(o,e+14,t+19),e+=c+10}N=r+18}let F=N;M.fillStyle=Q.panel,py(M,a,F,C,T,14),M.fill(),M.strokeStyle=Q.line,M.lineWidth=1,py(M,a,F,C,T,14),M.stroke();let I=F+28,L=x?140:0,ie=x?22:0,ae=x?a+20+L+16:a+20,oe=x?C-40-L-16:C-40,R=e.cheapest!=null&&Number.isFinite(e.cheapest)?cy(e.cheapest):cy(Math.min(...t.map(e=>e.price))),se=[R,s,e.chainLabel].filter(Boolean).join(` · `);x&&(M.fillStyle=`#ffffff`,py(M,a+20,F+14,L,L+ie,8),M.fill(),M.drawImage(x,a+20,F+14,L,L),M.fillStyle=`#123456`,M.font=`700 10px ${oy}`,M.textAlign=`center`,M.fillText(fy(M,se,L-8),a+20+L/2,F+14+L+14),M.textAlign=`left`),M.fillStyle=Q.ink,M.font=`600 15px ${oy}`,M.fillText(x?`Scan ${se}`:`Send ${d} on ${e.chainLabel} to this wallet`,ae,I),I+=22,f&&(M.fillStyle=Q.gold,M.font=`500 14px ${oy}`,M.fillText(fy(M,f,oe),ae,I),I+=22),x&&y&&(M.fillStyle=Q.soft,M.font=`400 11px ${oy}`,M.fillText(fy(M,y,oe),ae,I),I+=20),M.fillStyle=Q.soft,M.font=`400 13px ${oy}`,M.fillText(`Tip at least ${R} ${s} · higher amounts unlock the next pattern up`,ae,I),N=F+T+28;for(let t=0;t<re.length;t++){let n=t%D.cols,r=Math.floor(t/D.cols),i=a+n*(k+ny),o=N+r*(O+ny);by(M,re[t],i,o,k,O,s,t,e.chainLabel)}let ce=te-28;M.strokeStyle=Q.line,M.beginPath(),M.moveTo(a,ce-18),M.lineTo(i-a,ce-18),M.stroke(),M.fillStyle=Q.muted,M.font=`400 12px ${oy}`;let le=[...new Set(t.map(e=>(e.forToy||``).trim()).filter(Boolean))],ue=t.length===1?`1 pattern on this menu`:le.length>1?`${le.length} toys · ${t.length} patterns · ${D.cols}×${D.rows} · ${n}`:`${t.length} patterns · ${D.cols}×${D.rows} · ${n}`;M.fillText(`${ue} · cheapest ${R} ${s}`,a,ce),M.textAlign=`right`,M.fillText(`${o} · local tip-to-buzz`,i-a,ce),M.textAlign=`left`;let de=await new Promise((e,t)=>{j.toBlob(n=>n?e(n):t(Error(`JPEG encode failed`)),`image/jpeg`,.93)}),fe=(e.displayName.trim()||`menu`).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``).slice(0,32),pe=new Date().toISOString().slice(0,10),me=document.createElement(`a`);me.href=URL.createObjectURL(de),me.download=`${Ih}-tip-menu-${n}-${fe||`menu`}-${pe}.jpg`,me.click(),URL.revokeObjectURL(me.href)}function by(e,t,n,r,i,a,o,s,c){let{row:l,qrImg:u}=t,d=!!l.featured,f=Math.min(1.15,Math.max(.68,a/190)),p=Math.max(6,Math.round(8*f)),m=i-p*2,h=Math.max(3,Math.round(5*f)),g=Math.max(9,Math.round(10*f)),_=Math.max(6,Math.round(7*f)),v=Math.max(6,Math.round(7*f)),y=Math.max(16,Math.round(24*f)),b=g+2,x=l.motorStrengths&&l.motorStrengths.length>1?Math.max(32,Math.min(56,Math.round(48*f))):Math.max(18,Math.min(36,Math.round(28*f)));e.fillStyle=d?s%2==0?Q.cardFeatured:Q.cardFeaturedAlt:s%2==0?Q.card:Q.cardAlt,py(e,n,r,i,a,12),e.fill(),e.strokeStyle=d?Q.lineFeatured:Q.line,e.lineWidth=d?1.75:1,py(e,n,r,i,a,12),e.stroke(),e.fillStyle=d?Q.emberSoftFeatured:Q.emberSoft;let S=cy(l.price);for(e.fillStyle=d?`#7af0ff`:Q.gold,e.font=`800 ${y}px ${oy}`,e.textAlign=`center`;y>12&&e.measureText(S).width>m-4;)--y,e.font=`800 ${y}px ${oy}`;let C=_+y+v+b+Math.round(_*.6);py(e,n+4,r+4,i-8,C,7),e.fillStyle=d?Q.emberSoftFeatured:Q.emberSoft,e.fill();let w=(l.coin||o||`TOKEN`).trim()||`TOKEN`,T=l.timeSec>0?`${Math.round(l.timeSec)}s`:`—`,E=r+4;e.fillStyle=d?`#7af0ff`:Q.gold,e.font=`800 ${y}px ${oy}`,e.fillText(S,n+i/2,E+_+y),e.fillStyle=d?`rgba(232, 244, 255, 0.78)`:Q.muted,e.font=`600 ${g}px ${oy}`,e.fillText(`${w} · ${T}`,n+i/2,E+_+y+v+g),e.textAlign=`left`;let D=E+C+h;if(u){let t=p+x+h,o=a-(D-r)-t,s=i-p*2,c=Math.max(56,Math.min(s,o)),l=n+(i-c)/2,d=D+Math.max(0,(o-c)/2);e.fillStyle=`#ffffff`,py(e,l-3,d-3,c+6,c+6,6),e.fill(),e.drawImage(u,l,d,c,c)}let ee=r+a-p-x;hy(e,l,n+p,ee,m,x)}function xy(e,t){let n=new Blob([e],{type:`text/html;charset=utf-8`}),r=document.createElement(`a`);r.href=URL.createObjectURL(n),r.download=ey(),r.click(),URL.revokeObjectURL(r.href)}async function Sy(e){let t=await fetch(`/api/tip-menu`,{method:`PUT`,headers:{"Content-Type":`text/html; charset=utf-8`},body:e});if(!t.ok){let e=t.statusText;try{let n=await t.json();n.error&&(e=n.error)}catch{}throw Error(`Could not publish tip menu (${t.status}): ${e}`)}return`/tip-menu`}async function Cy(e){let t=$v(e),n=!1;try{let e=await Sy(t);window.open(e,`_blank`,`noopener,noreferrer`),n=!0}catch{n=!1}return xy(t,e),{opened:n,downloaded:!0}}var wy=`pulsefans-toy-menu`;function Ty(e){if(!e||typeof e!=`object`||Array.isArray(e))return!1;let t=e;return t.kind===`pulsefans-toy-menu`&&Number(t.version)===1&&Array.isArray(t.items)}function Ey(e){if(!Ty(e))throw Error(`Not a toy price/menu pack (expected pulsefans-toy-menu v1 JSON)`);let t=[];for(let n of e.items){if(!n||typeof n!=`object`)continue;let e=n,r=String(e.id||``).trim();if(!r)continue;let i=Number(e.price);t.push({id:r,name:String(e.name||r),price:Number.isFinite(i)&&i>=0?i:0,enabled:e.enabled!==!1,featured:!!e.featured})}if(!t.length)throw Error(`Toy menu pack has no patterns`);return{kind:wy,version:1,exportedAt:typeof e.exportedAt==`string`?e.exportedAt:new Date().toISOString(),label:String(e.label||e.source?.name||`Toy menu`).trim()||`Toy menu`,source:{id:e.source?.id?String(e.source.id):void 0,name:e.source?.name?String(e.source.name):void 0,toyType:e.source?.toyType?String(e.source.toyType):void 0},items:t}}function Dy(e){let t=new Set(e.disabled),n=new Set(e.featured),r=(e.patterns||q.filter(t=>au(vd(t),e.toy,t.forProducts)).map(e=>({id:e.id,name:e.name}))).map(r=>({id:r.id,name:r.name,price:pf(r.id,e.basePrices,e.toyPrices,e.toy.id),enabled:!t.has(r.id),featured:n.has(r.id)}));return{kind:wy,version:1,exportedAt:new Date().toISOString(),label:e.label,source:{id:e.toy.id,name:e.toy.name,toyType:e.toy.toyType},items:r}}function Oy(e,t,n){let r=String(t||``).trim();if(!r)throw Error(`Target toy id required`);let i={...n.toyPatternPrices[r]||{}},a=new Set(n.disabledPatterns),o=new Set(n.featuredPatterns),s=0,c=0;for(let t of e.items){let e=t.id;if(!q.some(t=>t.id===e)){c++;continue}i[e]=Math.max(0,Number(t.price)||0),t.enabled?a.delete(e):a.add(e),t.featured?o.add(e):o.delete(e),s++}let l=qd(Object.entries(i).map(([e,t])=>({id:e,price:t})));for(let e of Object.keys(i)){let t=l[e];t!=null&&(i[e]=t)}return{toyPatternPrices:sf({...n.toyPatternPrices,[r]:i}),disabledPatterns:[...a],featuredPatterns:[...o],applied:s,skipped:c}}function ky(e,t){let n=(e.label||`toy`).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``).slice(0,40),r=new Date().toISOString().slice(0,10),i=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),a=document.createElement(`a`);a.href=URL.createObjectURL(i),a.download=t||`just-the-tip-toy-menu-${n||`menu`}-${r}.json`,a.click(),URL.revokeObjectURL(a.href)}var Ay=`https://ihelpmaybe.github.io/donate.json`,jy=`MCowBQYDK2VwAyEAL0vlzfs/pP7qrgq3K61S1MisC0YCCSTJuiOrrVXlw2w=`,My=/^0x[a-fA-F0-9]{40}$/,Ny=/^\d{4}-\d{2}-\d{2}$/,Py=`ihmb-donate-updated`,Fy=2;function Iy(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}function Ly(e){if(!Ny.test(e))return!1;let t=Date.parse(`${e}T00:00:00Z`);if(!Number.isFinite(t)||t>Date.now()+Fy*864e5)return!1;try{let t=localStorage.getItem(Py);if(t&&e<t)return!1}catch{}return!0}function Ry(e){try{let t=localStorage.getItem(Py);(!t||e>t)&&localStorage.setItem(Py,e)}catch{}}async function zy(e,t,n,r,i){if(!globalThis.crypto?.subtle)return!1;try{let a=await crypto.subtle.importKey(`spki`,Iy(jy),{name:`Ed25519`},!1,[`verify`]),o=new TextEncoder().encode(`v${e}\n${t}\n${n.toLowerCase()}\n${r}`);return crypto.subtle.verify(`Ed25519`,a,Iy(i),o)}catch{return!1}}async function By(e=Bh,t=2500){let n=new AbortController,r=window.setTimeout(()=>n.abort(),t);try{let t=await fetch(Ay,{signal:n.signal,cache:`no-store`});if(!t.ok)return e;let r=await t.json(),i=Number(r.v??0),a=String(r.updated??``),o=String(r.sig??``),s=r.pulse?.address??r.address??``,c=r.pulse?.label??r.label??``;return i!==1||!o||!My.test(s)||!Ly(a)||!await zy(i,a,s,c,o)?e:(Ry(a),s)}catch{return e}finally{window.clearTimeout(r)}}function Vy(e){let t=e.$,n=()=>e.getState(),r=null,i=``,a=null,o=``,s=!1,c=new Set,l=`native`,u=3.69,d=55.55,f=null;function p(){f=null}function m(e){return`No price detected for ${e} — waiting for PulseChain quote`}function h(t){let r=[...new Set((e.menuFitToys()||[]).map(e=>e.id).filter(Boolean))],i=O_(Cp(t)),a={"":18};for(let e of n().savedTokens||[])a[e.address.toLowerCase()]=e.decimals;let o=(n().tokenAddress||``).trim().toLowerCase();o&&(a[o]=n().tokenDecimals);let s=Fp(t,{extraToyIds:r,quotes:i,decimalsByToken:a});p(),n().coinRewardRules=s,e.saveSettings({...e.readForm(),coinRewardRules:s})}function g(e){let t=e.toLowerCase();if(!t)return 18;let r=(n().savedTokens||[]).find(e=>e.address.toLowerCase()===t);return r?r.decimals:n().tokenAddress.toLowerCase()===t?n().tokenDecimals:18}function _(){let t=[{key:``,label:Lc[n().chainKey].symbol,tokenAddress:``}],r=new Set((n().hiddenTipCoins||[]).map(e=>e.trim().toLowerCase())),i=new Set([``]);for(let e of n().savedTokens||[]){let n=e.address.toLowerCase();!n||i.has(n)||r.has(n)||Xf(n)||(i.add(n),t.push({key:n,label:_p(e)||e.symbol||`TOKEN`,tokenAddress:e.address}))}let a=n().tokenAddress.trim();if(a&&U(a)&&!Xf(a)&&!r.has(a.toLowerCase())){let r=a.toLowerCase();i.has(r)||t.push({key:r,label:e.getTokenLabelFieldValue().trim()||e.tokenLabelForAddress(a)||n().tokenSymbol||`TOKEN`,tokenAddress:a})}return t}function v(){let e=_(),t=[];for(let n of rp){let r=e.find(e=>e.key===n.address.toLowerCase());r&&c.has(r.key)&&t.push(r)}let n=e.find(e=>!e.key);n&&c.has(``)&&t.push(n);for(let n of e)ap(n.tokenAddress)||op(n.tokenAddress)||lp(n.tokenAddress)||t.push(n);return t}function y(){let e=_(),t=new Map(e.map(e=>[e.key,e])),r=[],i=new Set,a=e=>{let t=e.key||l;i.has(t)||c.has(e.key)||(i.add(t),r.push(e))},o=t.get(``);o&&a(o);for(let e of rp){let n=e.address.toLowerCase(),r=t.get(n);if(r){a(r);continue}a({key:n,label:e.label||e.symbol,tokenAddress:e.address})}for(let e of sp){let n=e.address.toLowerCase();t.has(n)||a({key:n,label:e.label||e.symbol,tokenAddress:e.address})}let s=new Set((n().hiddenTipCoins||[]).map(e=>e.trim().toLowerCase()));for(let e of n().savedTokens||[]){let t=e.address.toLowerCase();s.has(t)&&(ap(t)||op(t)||lp(t)||a({key:t,label:_p(e)||e.symbol||`TOKEN`,tokenAddress:e.address}))}return r}function b(e){return ap(e.tokenAddress)?c.has(``):!op(e.tokenAddress)&&!!e.key}function x(t){if(ap(t.tokenAddress)){c.has(``)&&ie(t),fe();return}if(!b(t))return;c.has(t.key)&&(c.delete(t.key),T(t.key),c.size?ae():w(),te());let r=up(n().hiddenTipCoins,t.tokenAddress);n().hiddenTipCoins=r,e.saveSettings({...e.readForm(),hiddenTipCoins:r,savedTokens:n().savedTokens}),fe(),z(),e.paintSession()}function S(t){let r=rp.find(e=>e.address.toLowerCase()===t.key)||sp.find(e=>e.address.toLowerCase()===t.key),i=(n().savedTokens||[]).find(e=>e.address.toLowerCase()===t.key),a=dp(n().hiddenTipCoins,t.tokenAddress),o=hp(n().savedTokens||[],t.tokenAddress,{symbol:r?.symbol||i?.symbol||t.label,decimals:r?.decimals??i?.decimals??18,label:r?.label||i?.label||t.label});n().hiddenTipCoins=a,n().savedTokens=o,e.saveSettings({...e.readForm(),hiddenTipCoins:a,savedTokens:o})}function C(){return _().filter(e=>c.has(e.key)&&!Zf(e.tokenAddress))}function w(){return(n().coinRewardRules||[]).length?(h([]),!0):!1}function T(e){let t=String(e||``).trim().toLowerCase(),r=n().coinRewardRules||[],i=Lp(r,{tokenAddresses:[t]});return i.length!==r.length&&(h(i),!0)}let E=!1;function D(){if(E)return;E=!0,c.clear();let t=n().savedTokens||[],r=!1;for(let e of n().paintCoinKeys||[]){let n=e===l?``:String(e||``).toLowerCase();if(!n||(t||[]).some(e=>e.address.toLowerCase()===n))continue;let i=rp.find(e=>e.address.toLowerCase()===n)||sp.find(e=>e.address.toLowerCase()===n);i&&(t=hp(t,i.address,{symbol:i.symbol,decimals:i.decimals,label:i.label}),r=!0)}r&&(n().savedTokens=t,e.saveSettings({...e.readForm(),savedTokens:t}));let i=new Set(_().map(e=>e.key));for(let e of n().paintCoinKeys||[]){let t=e===l?``:e;i.has(t)&&c.add(t)}ee()}function ee(){let e=n().coinRewardRules||[];if(!e.length)return!1;if(!c.size)return h([]),!0;let t=e.filter(e=>c.has(e.tokenAddress.trim().toLowerCase()));return t.length!==e.length&&(h(t),!0)}function te(){let t=[...c].map(e=>e||l),r=t.filter(e=>Zf(e));n().paintCoinKeys=t,n().acceptedStables=r,e.saveSettings({...e.readForm(),paintCoinKeys:t,acceptedStables:r})}function O(){let t=o||``,r=n().coinRewardRules||[],i=r.filter(e=>e.toyIds.length?!t||!e.toyIds.includes(t)||e.toyIds.length>1:!!t).map(e=>t&&e.toyIds.length>1&&e.toyIds.includes(t)?{...e,toyIds:e.toyIds.filter(e=>e!==t)}:e);(i.length!==r.length||i.some((e,t)=>e.toyIds.length!==r[t]?.toyIds.length))&&(h(i),e.showError(``),fe(),z(),e.paintSession())}function k(e){return $d(e?Ef(e,{disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1}):Df({disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1}))}function A(t,r,i){let a=r&&(e.menuFitToys()||[]).find(e=>e.id===r)||null,o=a?Ef(a,{disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1}):Df({disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1}),s=r?n().toyMenuUsd?.[r]:void 0,c=s?.lo||n().menuUsdLo||u,l=Math.max(c,s?.hi||n().menuUsdHi||d),p=k(a),m=`${r||``}|${c}|${l}|${p.loMs}|${p.hiMs}|${o.map(e=>e.id).join(`,`)}`;return(!f||f.key!==m)&&(f={key:m,sheet:tf(o.map(e=>e.id),c,l,p)}),f.sheet[t]??ef(t,c,l,p)}function ne(e){let t=n().coinRewardRules||[];if(!t.length)return;let r=[];for(let n of t)if(n.enabled){if(e){if(!n.toyIds.length||!n.toyIds.includes(e))continue;r.push({coin:n.coin,tokenAddress:n.tokenAddress,patternId:n.patternId,usdTarget:A(n.patternId,e,n.tokenAddress.toLowerCase()),enabled:!0,toyIds:n.toyIds});continue}n.toyIds.length||r.push({coin:n.coin,tokenAddress:n.tokenAddress,patternId:n.patternId,usdTarget:A(n.patternId,void 0,n.tokenAddress.toLowerCase()),enabled:!0,toyIds:[]})}r.length&&h(Ip(t,r))}function re(){let e=n().coinRewardRules||[];if(!e.length)return;let t=[];for(let n of e){if(!n.enabled)continue;let e=n.toyIds.length===1?n.toyIds[0]:void 0;t.push({coin:n.coin,tokenAddress:n.tokenAddress,patternId:n.patternId,usdTarget:A(n.patternId,e,n.tokenAddress.toLowerCase()),enabled:!0,toyIds:n.toyIds})}h(Ip(e,t))}function j(e,t,n,r){let i=e.find(e=>e.patternId===n&&e.tokenAddress.toLowerCase()===t&&e.enabled);return i?r?i.toyIds.length===0||i.toyIds.includes(r):i.toyIds.length===0:!1}function M(t){let r=he(),i=r.tokenAddress?g(r.tokenAddress):18,a=n().menuUsdLo||u,s=Math.max(a,n().menuUsdHi||d),c=Bp(a,t,i),l=Bp(s,t,i);if(c==null||l==null)return{toys:0,shortest:0,longest:0};n().patternPrices=Qd(c,l,k(null));let f={...n().toyPatternPrices||{}},m={...n().toyMenuUsd||{}},h=e.menuFitToys()||[],_=new Set([...Object.keys(f),...Object.keys(m),...o?[o]:[],...h.map(e=>e.id).filter(Boolean)]),v=0;for(let e of _){let n=m[e]||{lo:a,hi:s},r=Bp(n.lo,t,i),o=Bp(Math.max(n.lo,n.hi),t,i);if(r==null||o==null)continue;let c=h.find(t=>t.id===e)||null;f=hf(f,e,Qd(r,o,k(c))),m[e]={lo:n.lo,hi:Math.max(n.lo,n.hi)},v++}return n().toyPatternPrices=f,n().toyMenuUsd=m,e.saveSettings({...e.readForm(),patternPrices:n().patternPrices,toyPatternPrices:n().toyPatternPrices,toyMenuUsd:n().toyMenuUsd,menuUsdLo:a,menuUsdHi:s}),p(),re(),{toys:v,shortest:c,longest:l}}function N(t){let{usdLo:r,usdHi:i,usdPer:a}=t;if(!Number.isFinite(r)||r<=0||!Number.isFinite(i)||i<=0||!Number.isFinite(a)||a<=0)return!1;let o=he(),s=o.tokenAddress?g(o.tokenAddress):18,c=Bp(r,a,s),l=Bp(i,a,s);if(c==null||l==null)return!1;let u=t.toyId||``,d=Qd(c,l,k(u&&(e.menuFitToys()||[]).find(e=>e.id===u)||null));return u?(n().toyPatternPrices=hf(n().toyPatternPrices||{},u,d),n().toyMenuUsd={...n().toyMenuUsd||{},[u]:{lo:r,hi:i}},e.saveSettings({...e.readForm(),toyPatternPrices:n().toyPatternPrices,toyMenuUsd:n().toyMenuUsd})):(n().patternPrices=d,n().menuUsdLo=r,n().menuUsdHi=i,e.saveSettings({...e.readForm(),patternPrices:n().patternPrices,menuUsdLo:r,menuUsdHi:i})),p(),ne(u||void 0),!0}function P(t){if(t==null||!Number.isFinite(t)||t<=0)return!1;let r=n().menuUsdLo||u,i=Math.max(r,n().menuUsdHi||d),a=(e,r,i)=>{let a=e?Ef(e,{disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1}):Df({disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1}),o=1/0;for(let e of a){let t=pf(e.id,r,n().toyPatternPrices||{},i);Number.isFinite(t)&&t>=0&&t<o&&(o=t)}return Number.isFinite(o)||(o=rf(r)),o*t},o=(e,t,n,r)=>{let i=a(e,t,r);return!Number.isFinite(i)||i<=0||i<n*.25||i>n*1.35},s=!1,c=(e.menuFitToys()||[]).filter(e=>!!e.id);if(!c.length)return o(null,n().patternPrices,r)&&(s=N({usdLo:r,usdHi:i,usdPer:t})||s),s;for(let e of c){let a=e.id,c=n().toyMenuUsd?.[a]||{lo:r,hi:i},l=c.lo||r,u=Math.max(l,c.hi||i),d=n().toyPatternPrices?.[a];o(e,d&&Object.keys(d).length?d:n().patternPrices,l,a)&&(s=N({toyId:a,usdLo:l,usdHi:u,usdPer:t})||s)}return o(null,n().patternPrices,r)&&(s=N({usdLo:r,usdHi:i,usdPer:t})||s),s}function F(t){let r=document.getElementById(`token`),o=document.getElementById(`token-dec`),s=document.getElementById(`token-sym`),c=document.getElementById(`token-label`),l=t.trim().toLowerCase(),u=(n().tokenAddress||``).trim().toLowerCase();if(l){let i=(n().savedTokens||[]).find(e=>e.address.toLowerCase()===l),a=i?.symbol||n().tokenSymbol||`TOKEN`,u=i?.decimals??n().tokenDecimals??18,d=i?.label||``;n().tokenAddress=i?.address||t,n().tokenSymbol=a,n().tokenDecimals=u,r&&(r.value=n().tokenAddress),s&&(s.value=a),o&&(o.value=String(u)),c&&(c.value=d),e.saveSettings({...e.readForm(),tokenAddress:n().tokenAddress,tokenSymbol:a,tokenDecimals:u})}else{let t=Lc[n().chainKey];n().tokenAddress=``,n().tokenSymbol=t.symbol,n().tokenDecimals=t.chain.nativeCurrency.decimals??18,r&&(r.value=``),s&&(s.value=t.symbol),o&&(o.value=String(n().tokenDecimals)),c&&(c.value=``),e.saveSettings({...e.readForm(),tokenAddress:``,tokenSymbol:n().tokenSymbol,tokenDecimals:n().tokenDecimals})}let d=he(),f=d.display||Lc[n().chainKey].symbol,p=t=>{fe(),z(),e.paintSession()};if(l===u){p(`Active tip coin: ${f}`);return}(async()=>{let e=(await k_([d.tokenAddress||``]))[(d.tokenAddress||``).trim().toLowerCase()]??D_(d)??(y_(d.tokenAddress)?1:null);if(e==null||!Number.isFinite(e)||e<=0){p(`Active tip coin: ${f} · ${m(f)}`);return}i=`${d.tokenAddress||``}|${d.symbol}|${d.display}`,a=e;let t=M(e);p(`Active tip coin: ${f} · ladders rescaled (≈ ${t.shortest.toLocaleString()}–${t.longest.toLocaleString()} ${f})`)})()}function I(e,t){let n=document.createElement(`button`);n.type=`button`,n.className=`menu-coin-price-chip coin-skin-${Dp(e.tokenAddress)}`,n.style.setProperty(`--coin-hue`,String(Op(e.tokenAddress)));let r=c.has(e.key);if(r&&n.classList.add(`is-picked`),n.setAttribute(`aria-pressed`,r?`true`:`false`),n.textContent=t==null?`${e.label} · …`:`${e.label} · $${b_(t)}`,n.title=t==null?`Fetching ${e.label} price…`:r?`1 ${e.label} ≈ $${b_(t)} · click to unselect`:`1 ${e.label} ≈ $${b_(t)} · click to select`,n.addEventListener(`click`,()=>ie(e)),!b(e))return n;let i=document.createElement(`div`);i.className=`menu-coin-price-chip-wrap`;let a=document.createElement(`button`);return a.type=`button`,a.className=`menu-coin-chip-remove`,a.setAttribute(`aria-label`,`Remove ${e.label}`),a.title=`Remove ${e.label}`,a.textContent=`×`,a.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation(),x(e)}),i.append(n,a),i}function L(e,t){let n=document.createElement(`label`);n.className=`menu-coin-suggest`;let r=document.createElement(`span`);r.className=`visually-hidden`,r.textContent=`Suggested tokens`;let i=document.createElement(`select`);i.id=`menu-coin-suggest`,i.setAttribute(`aria-label`,`Suggested tokens`);let a=document.createElement(`option`);a.value=``,a.textContent=`Suggestions…`,i.append(a);for(let n of e){let e=document.createElement(`option`);e.value=n.key||l;let r=t(n);e.textContent=r==null?`${n.label} · …`:`${n.label} · $${b_(r)}`,i.append(e)}return i.addEventListener(`change`,()=>{let e=i.value;if(i.value=``,!e)return;let t=e===l?``:e,n=_().find(e=>e.key===t);if(!n){if(n=y().find(e=>e.key===t),!n)return;S(n),n=_().find(e=>e.key===t)||n}n&&!c.has(n.key)&&ie(n)}),n.append(r,i),n}function ie(t){c.has(t.key)?(c.delete(t.key),T(t.key),c.size?ae():(w(),`${t.label}`)):(c.add(t.key),ae()),te(),fe(),z(),e.paintSession()}function ae(){let t=C(),r=(e.menuFitToys()||[]).filter(e=>!!e.id);if(!t.length)return;if(!r.length){let e=t[0],r=Df({disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1}).map(t=>({coin:e.label,tokenAddress:e.tokenAddress,patternId:t.id,usdTarget:A(t.id,void 0,e.key),enabled:!0,toyIds:[]}));h(Ip((n().coinRewardRules||[]).filter(e=>!!e.toyIds.length),r)),`${e.label}${r.length}`;return}let i=t.length,a=r.length,o=Math.floor(a/i),s=a%i,c=[],l=[],u=0;for(let e=0;e<i;e++){let i=o+ +(e<s),a=t[e],d=r.slice(u,u+i);if(u+=i,!d.length)continue;let f=[];for(let e of d){let t=e.id;f.push(X(e.name||``,e.toyType,t));let r=Ef(e,{disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1});for(let e of r)c.push({coin:a.label,tokenAddress:a.tokenAddress,patternId:e.id,usdTarget:A(e.id,t,a.key),enabled:!0,toyIds:[t]})}l.push(`${a.label}→${f.join(`+`)||`—`}`)}let d=new Set(r.map(e=>e.id)),f=new Set(t.map(e=>e.key)),p=[];for(let e of n().coinRewardRules||[]){if(!e.toyIds.length||!f.has(e.tokenAddress.trim().toLowerCase()))continue;let t=e.toyIds.filter(e=>!d.has(e));t.length&&p.push({...e,toyIds:t})}h(Ip(p,c)),i===1?`${t[0].label}${a}`:`${i}${l.join(` · `)}`,e.showError(``)}function oe(e,t){let r=C();if(!r.length)return{assigned:!1,labels:[]};let i=n().coinRewardRules||[],a=r.every(n=>j(i,n.key,e,t)),o=[];for(let n of r){let r=j(i,n.key,e,t);(a?r:!r)&&(i=Rp(i,{coin:n.label,tokenAddress:n.tokenAddress,patternId:e,usdTarget:A(e,t||void 0,n.key),toyId:t}).rules,o.push(n.label))}return h(i),{assigned:!a,labels:o}}function R(t){let r=Dd(t);if(!r)return;let i=[],a=n().coinRewardRules||[],o=(e.menuFitToys()||[]).filter(e=>!!e.id);if(o.length)for(let e of o){let n=e.id;if(!au(vd(r),e,r.forProducts))continue;let o=new Map;for(let e of a){if(!e.enabled||!e.toyIds.includes(n))continue;let t=e.tokenAddress.trim().toLowerCase();o.has(t)||o.set(t,e)}for(let e of o.values()){let r=e.tokenAddress.trim().toLowerCase();i.push({coin:e.coin,tokenAddress:e.tokenAddress,patternId:t,usdTarget:A(t,n,r),enabled:!0,toyIds:[n]})}}else{let e=new Map;for(let t of a){if(!t.enabled||t.toyIds.length)continue;let n=t.tokenAddress.trim().toLowerCase();e.has(n)||e.set(n,t)}for(let n of e.values()){let e=n.tokenAddress.trim().toLowerCase();i.push({coin:n.coin,tokenAddress:n.tokenAddress,patternId:t,usdTarget:A(t,void 0,e),enabled:!0,toyIds:[]})}}i.length&&h(Ip(a,i))}function se(t){let r=C(),i=o||null;if(!r.length){let r=zp(n().coinRewardRules||[],t,i||void 0);if(r.length){let a=n().coinRewardRules||[];for(let e of r)a=Rp(a,{coin:e.coin,tokenAddress:e.tokenAddress,patternId:t,usdTarget:e.usdTarget,toyId:i}).rules;h(a),`${t}`,z(),e.paintSession();return}return}let{assigned:a,labels:s}=oe(t,i);`${s.join(`, `)}${t}`,e.showError(``),z(),e.paintSession()}function ce(e,t){let r=new Set(e.map(e=>e.id).filter(e=>!!e)),i=[];for(let e of n().coinRewardRules||[]){if(!e.toyIds.length){r.size&&i.push(e);continue}if(!r.size){i.push(e);continue}let t=e.toyIds.filter(e=>!r.has(e));t.length&&i.push({...e,toyIds:t})}h(Ip(i,t))}function le(t){let r=t.trim().toLowerCase(),i=_().find(e=>e.key===r);if(!i||!c.has(i.key))return;c.add(i.key),te();let a=(e.menuFitToys()||[]).filter(e=>!!e.id),s=o?a.filter(e=>e.id===o):[],l=s.length?s:o?[]:a,u=[];if(l.length)for(let e of l){let t=e.id,r=Ef(e,{disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1});for(let e of r)u.push({coin:i.label,tokenAddress:i.tokenAddress,patternId:e.id,usdTarget:A(e.id,t,i.key),enabled:!0,toyIds:[t]})}else{let e=Df({disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1});for(let t of e)u.push({coin:i.label,tokenAddress:i.tokenAddress,patternId:t.id,usdTarget:A(t.id,void 0,i.key),enabled:!0,toyIds:[]})}ce(l,u);let d=l.length?X(l[0].name||``,l[0].toyType,l[0].id):`shared menu`;`${i.label}${u.length}`,u.length,`${d}`,e.showError(``),z(),`${i.label}${d}`,F(i.tokenAddress)}function ue(){let t=C();if(t.length<2)return;let r=(e.menuFitToys()||[]).filter(e=>!!e.id),i=o?r.filter(e=>e.id===o):[],a=i.length?i:o?[]:r,s=[];if(a.length)for(let e of a){let r=e.id,i=Ef(e,{disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1});for(let e of t)for(let t of i)s.push({coin:e.label,tokenAddress:e.tokenAddress,patternId:t.id,usdTarget:A(t.id,r,e.key),enabled:!0,toyIds:[r]})}else{let e=Df({disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1});for(let n of t)for(let t of e)s.push({coin:n.label,tokenAddress:n.tokenAddress,patternId:t.id,usdTarget:A(t.id,void 0,n.key),enabled:!0,toyIds:[]})}ce(a,s);let c=a.length?X(a[0].name||``,a[0].toyType,a[0].id):`shared menu`;`${t.map(e=>e.label).join(`, `)}${c}${s.length}`,e.showError(``),z(),`${t.length}${c}`,F(t[0].tokenAddress)}function de(t,r){let i=o||null,a=_().find(e=>e.key===r);if(!a||!c.has(a.key))return;let s=zp(n().coinRewardRules||[],t,i||void 0).find(e=>e.tokenAddress.trim().toLowerCase()===r)?.usdTarget??A(t,i||void 0,a.key),{rules:l,assigned:u}=Rp(n().coinRewardRules||[],{coin:a.label,tokenAddress:a.tokenAddress,patternId:t,usdTarget:s,toyId:i});h(l),`${a.label}${t}`,e.showError(``),z(),e.paintSession()}function fe(){let t=(n().savedTokens||[]).filter(e=>!Xf(e.address));if(t.length!==(n().savedTokens||[]).length){n().savedTokens=t,e.saveSettings({...e.readForm(),savedTokens:t});for(let e of[...c])e&&Xf(e)&&c.delete(e)}let r=(n().coinRewardRules||[]).filter(e=>!Zf(e.tokenAddress));if(r.length!==(n().coinRewardRules||[]).length&&h(r),!document.getElementById(`menu-coin-price`))return;let i=_(),a=y(),o=[...new Set([...i.map(e=>e.tokenAddress),...a.map(e=>e.tokenAddress)])],s=O_(o),l=e=>{let t=document.getElementById(`menu-coin-price`);if(!t)return;t.replaceChildren();for(let n of v())t.append(I(n,e(n)));let n=y();n.length&&t.append(L(n,e))};l(e=>s[e.key]),k_(o).then(e=>{if(!document.getElementById(`menu-coin-price`))return;let t=_();if(t.length!==i.length||t.some((e,t)=>e.key!==i[t]?.key)){fe();return}l(t=>e[t.key]??O_([t.tokenAddress])[t.key])})}function pe(e,t){let n=new Blob([t],{type:`text/csv;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=e,i.click(),URL.revokeObjectURL(r)}function me(e){return!Number.isFinite(e)||e<0?``:e>=1e3?e.toFixed(0):e.toFixed(2)}function he(){let t=Lc[n().chainKey],r=n().tokenAddress.trim();if(!(r&&U(r)))return{symbol:t.symbol,tokenAddress:null,display:t.symbol};let i=(n().savedTokens||[]).find(e=>e.address.toLowerCase()===r.toLowerCase()),a=(i?_p(i):``)||e.getTokenLabelFieldValue().trim()||e.tokenLabelForAddress(r)||n().tokenSymbol||`TOKEN`;return{symbol:n().tokenSymbol||a,tokenAddress:r,display:a}}function ge(){let e=he(),t=`${e.tokenAddress||``}|${e.symbol}|${e.display}`,n=D_(e);if(n!=null&&(i!==t||a!==n)){i=t,a=n,P(n),z(),fe();return}j_(e).then(e=>{(i!==t||a!==e)&&(i=t,a=e,e!=null&&P(e),z(),fe())})}function _e(t){let r=xm(e.getDeviceToys()).find(e=>e.id===t)||e.getDeviceToys().find(e=>e.id===t);if(!r?.id){e.showError(`Toy not found for backup`);return}let i=X(r.name||``,r.toyType,r.id),a=Dy({toy:r,label:i,basePrices:n().patternPrices,toyPrices:n().toyPatternPrices||{},disabled:n().disabledPatterns,featured:n().featuredPatterns});ky(a),e.showError(``),`${a.items.length}${i}`}function ve(t,r){let i=new FileReader;i.onload=()=>{try{let t=Ey(JSON.parse(String(i.result||``))),a=X(e.getDeviceToys().find(e=>e.id===r)?.name||``,e.getDeviceToys().find(e=>e.id===r)?.toyType,r)||r,o=t.label||t.source.name||`pack`;if(!confirm(`Import “${o}” onto ${a}?\n\n• Applies ${t.items.length} tip prices to this toy only\n• Updates On/Off and Featured for those patterns (shared catalogue flags)\n• Does not change other toys’ prices`))return;let s=Oy(t,r,{toyPatternPrices:n().toyPatternPrices||{},disabledPatterns:n().disabledPatterns,featuredPatterns:n().featuredPatterns});n().toyPatternPrices=s.toyPatternPrices,n().disabledPatterns=s.disabledPatterns,n().featuredPatterns=s.featuredPatterns,e.saveSettings({...e.readForm(),toyPatternPrices:n().toyPatternPrices,disabledPatterns:n().disabledPatterns,featuredPatterns:n().featuredPatterns}),z(),e.paintSession(),e.showError(``),`Imported ${s.applied} prices onto ${a}`+(s.skipped?` · ${s.skipped} unknown patterns skipped`:``)}catch(t){e.showError(t instanceof Error?t.message:String(t))}},i.onerror=()=>e.showError(`Could not read file`),i.readAsText(t)}let ye=null;function be(){return ye||=document.getElementById(`menu-pattern-tools-card`),ye}function xe(e,n){let r=t(`menu-tip-currency`),i=C(),a=e=>e||`native`;r.replaceChildren();let o=e!==null||!!n?.allCurrencies;if(!i.length&&!o){let e=document.createElement(`option`);e.value=``,e.textContent=`Select coins above`,r.append(e),r.disabled=!0;return}r.disabled=!1;let s=document.createElement(`option`);s.value=``,s.textContent=i.length?`Select coin`:`Select coins above`,r.append(s);for(let e of i){let t=document.createElement(`option`);t.value=a(e.key),t.textContent=e.label,r.append(t)}if(i.length>=2){let e=document.createElement(`option`);e.value=`__all__`,e.textContent=`All currencies`,e.title=`Paint every selected whitelist coin onto this toy’s tip menu patterns`,r.append(e)}if(o){let e=document.createElement(`option`);e.value=`__clear__`,e.textContent=`Clear tip coins on this toy`,r.append(e)}if(n?.allCurrencies&&i.length>=2){r.value=`__all__`;return}r.value=e!==null&&i.some(t=>t.key===e)?a(e):``}function Se(e){let t=C();if(t.length<2||!e)return!1;let r=wp(n().coinRewardRules||[]);return t.every(t=>r.some(n=>n.tokenAddress.trim().toLowerCase()===t.key&&n.toyIds.includes(e)))}function Ce(e){let t=(e||[]).find(e=>e.id===o)||null,n=t?X(t.name||``,t.toyType,t.id):``,r=(e,t,r,i=!1)=>{let a=document.getElementById(e);a&&(a.textContent=i&&n?`${t} - ${n}`:t);let o=e===`menu-tools-currency-label`?`menu-tip-currency`:e===`menu-tools-lo-label`?`menu-base-price`:e===`menu-tools-hi-label`?`menu-top-price`:`menu-max-vibe`,s=document.getElementById(o);s&&s.setAttribute(`aria-label`,n?`${r} for ${n}`:r)};r(`menu-tools-currency-label`,`Currency`,`Tip coin`,!0),r(`menu-tools-lo-label`,`Low`,`Lowest tip in USD`),r(`menu-tools-hi-label`,`High`,`Highest tip in USD`),r(`menu-tools-max-vibe-label`,`Max vibe`,`Maximum vibration strength`,!0)}function we(e,t=`Loading…`){let n=document.querySelector(`.menu-catalog-block`);n?.classList.toggle(`is-busy`,e),n?.setAttribute(`aria-busy`,e?`true`:`false`);let r=document.getElementById(`menu-toy-loading`);if(r){r.hidden=!e;let n=r.querySelector(`.menu-toy-loading-text`);n&&(n.textContent=t)}let i=document.getElementById(`menu-toy-search`);i&&(i.disabled=e)}function Te(e,t){we(!0,e),requestAnimationFrame(()=>{requestAnimationFrame(()=>{try{t()}finally{we(!1)}})})}function z(){D();let l=t(`menu-sort`),f=t(`menu-base-price`);W_(l,n().menuSort);let v=xm(e.getDeviceToys()),y=e.resolvedFilterToyIds(v),b=e.menuFitToys();if(b?.length){let e=b.map(e=>e.id).filter(Boolean);e.includes(o)||(o=e[0]||``)}else o=``;Ce(b),G_(t(`menu-toy-ticks`),{toys:v,selectedIds:y},t=>{let r=new Set(y),i=t.find(e=>!r.has(e)),a=y.find(e=>!t.includes(e)),s=i?X(v.find(e=>e.id===i)?.name||``,v.find(e=>e.id===i)?.toyType,i):``;Te(i?`Loading ${s||`toy`}…`:`Updating toys…`,()=>{n().menuFilterToyIds=t,i?o=i:t.includes(o)||(o=t[0]||``),e.saveSettings({...e.readForm(),menuFilterToyIds:n().menuFilterToyIds}),c.size&&(i||a)&&ae(),z()})});let x=he(),S=i===`${x.tokenAddress||``}|${x.symbol}|${x.display}`?a:D_(x);S!=null&&P(S);let w=t(`menu-top-price`),T=o||``,E=T?n().toyMenuUsd?.[T]:void 0,ee=E?.lo||n().menuUsdLo||u,te=E?.hi||n().menuUsdHi||d,O=T?n().toyPatternPrices?.[T]:void 0,k=O&&Object.keys(O).length?O:n().patternPrices,ne=rf(k),re=af(k);document.activeElement!==f&&(f.value=me(ee)),document.activeElement!==w&&(w.value=me(te)),f.placeholder=me(u),w.placeholder=me(d);let j=t(`menu-max-vibe`),M=t(`menu-max-vibe-val`),N=a_(T||void 0,n());document.activeElement!==j&&(j.value=String(N)),M.textContent=`${N}/8`,j.title=T?`Pattern peaks never exceed ${N}/8 on this toy`:`Pattern peaks never exceed ${N}/8 on the shared menu`;let I=T?`this toy`:`the shared menu`;f.title=S==null?m(x.display):`Shortest tip is ~${ne.toLocaleString()} ${x.display} (${I}). Scales from the USD range automatically.`,w.title=S==null?m(x.display):`Longest tip is ~${re.toLocaleString()} ${x.display} (${I}). Scales from the USD range automatically.`;let L=new Set(Object.keys(n().patternOverrides)),ie={},oe=C(),R=oe.map(e=>e.tokenAddress),ce=O_(R);for(let e of q){if(!oe.length)continue;let t=zp(n().coinRewardRules||[],e.id,o||void 0),r=new Map(t.map(e=>[e.tokenAddress.trim().toLowerCase(),e]));ie[e.id]=oe.map(t=>{let n=r.get(t.key),i=n?.usdTarget??A(e.id,o||void 0,t.key),a=ce[t.key]??null;return{key:t.key,label:t.label,hue:Op(t.tokenAddress),skin:Dp(t.tokenAddress),on:!!n,usdTarget:i,amount:Bp(i,a,g(t.tokenAddress))}})}R.length&&k_(R).then(e=>{let t=!1;for(let n of Object.values(ie)){for(let r of n)if(r.amount==null&&(e[r.key]??O_([r.key])[r.key])!=null){t=!0;break}if(t)break}t&&z()});let le=c,ue=le.size>0?Op(_().find(e=>le.has(e.key))?.tokenAddress):null,pe={};for(let e of b||[]){if(!e.id)continue;let t=(n().coinRewardRules||[]).filter(t=>t.enabled&&t.toyIds.includes(e.id));if(!t.length)continue;let r=new Map;for(let e of t){let t=e.tokenAddress.trim().toLowerCase(),n=r.get(t);n?n.count+=1:r.set(t,{count:1,rule:e})}let i=null;for(let e of r.values())(!i||e.count>i.count||e.count===i.count&&e.rule.tokenAddress.localeCompare(i.rule.tokenAddress)<0)&&(i=e);i&&(pe[e.id]={key:i.rule.tokenAddress.trim().toLowerCase(),hue:Op(i.rule.tokenAddress),skin:Dp(i.rule.tokenAddress)})}let ve=be();if(ve){for(let e of[...ve.classList])(e===`is-coin-painted`||e.startsWith(`coin-skin-`))&&ve.classList.remove(e);let e=o?pe[o]:void 0;e?(ve.classList.add(`is-coin-painted`,`coin-skin-${e.skin}`),ve.style.setProperty(`--coin-hue`,String(e.hue))):ve.style.removeProperty(`--coin-hue`)}let ye=(n().coinRewardRules||[]).find(e=>!e.toyIds.length);xe(o?pe[o]?.key??null:ye?.tokenAddress.trim().toLowerCase()??null,{allCurrencies:!!(o&&Se(o))});let we=o?pe[o]:void 0,B=we===void 0?void 0:_().find(e=>e.key===we.key),V=B?.label||x.display,Ee=(n().tokenAddress||``).trim().toLowerCase(),De=we===void 0?null:we.key;if(B&&De&&!Ee&&!s){s=!0;try{F(B.tokenAddress)}finally{s=!1}return}let{total:Oe}=K_(t(`pattern-list`),{selected:n().defaultPattern,prices:n().patternPrices,toyPrices:n().toyPatternPrices||{},ratings:n().patternRatings,disabled:n().disabledPatterns,featured:n().featuredPatterns,sort:n().menuSort,modified:L,fitToys:b,activeToyId:o,tipSymbol:V,usdPerUnit:S,leadCard:be(),assign:{paintKeys:le,paintHue:ue,badges:ie,toyPaint:pe}},{onSelect:t=>{n().defaultPattern=t,e.saveSettings({...e.readForm(),defaultPattern:t}),z(),e.paintSession()},onRate:(t,r)=>{n().patternRatings={...n().patternRatings,[t]:r},e.saveSettings({...e.readForm(),patternRatings:n().patternRatings}),z()},onPrice:(t,r,i)=>{let a=0;if(i){let o=(e.menuFitToys()||[]).find(e=>e.id===i)||null,s=(o?Ef(o,{disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1}):[]).map(e=>e.id),c=mf(n().toyPatternPrices||{},i,t,r),l=Yd(n().patternPrices,c,i,s.length?s:[t]);n().toyPatternPrices=l.toyPrices,a=l.changed.length,e.saveSettings({...e.readForm(),toyPatternPrices:n().toyPatternPrices})}else{let i=Df({disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1}).map(e=>e.id),o=Xd({...n().patternPrices,[t]:r},i.length?i:[t]);n().patternPrices=o.prices,a=o.changed.length,e.saveSettings({...e.readForm(),patternPrices:n().patternPrices})}a>1||a===1&&r!==pf(t,n().patternPrices,n().toyPatternPrices,i)?e.showError(a===1?`Price nudged so each menu amount stays unique`:`Adjusted ${a} duplicate menu prices to keep SKUs unique`):e.showError(``),p(),z(),e.paintSession()},onToggleDisabled:(t,r)=>{let i=new Set(n().disabledPatterns);if(r?i.add(t):i.delete(t),n().disabledPatterns=[...i],r){let e=(n().coinRewardRules||[]).filter(e=>e.patternId!==t);e.length!==(n().coinRewardRules||[]).length&&h(e),n().featuredPatterns.includes(t)&&(n().featuredPatterns=n().featuredPatterns.filter(e=>e!==t))}e.saveSettings({...e.readForm(),disabledPatterns:n().disabledPatterns,featuredPatterns:n().featuredPatterns}),z(),e.paintSession(),e.scheduleStreamMenuPush()},onToggleFeatured:(t,r)=>{let i=new Set(n().featuredPatterns);r?i.add(t):i.delete(t),n().featuredPatterns=[...i],e.saveSettings({...e.readForm(),featuredPatterns:n().featuredPatterns}),z(),e.paintSession(),e.scheduleStreamMenuPush()},onEdit:e=>Le(`edit`,e),onTest:(t,r)=>{n().defaultPattern=t,e.saveSettings({...e.readForm(),defaultPattern:t}),z(),e.paintSession(),e.runPatternTest(1,0,t,kd(t),r)},onReset:e=>Qe(e),onDelete:e=>$e(e),onSelectToyTab:e=>{e!==o&&Te(`Loading ${X(b?.find(t=>t.id===e)?.name||``,b?.find(t=>t.id===e)?.toyType,e)||`toy`}…`,()=>{o=e,z()})},onRemoveToyTab:t=>{let r=y.filter(e=>e!==t);Te(`Updating toys…`,()=>{n().menuFilterToyIds=r,o===t&&(o=r[0]||``),e.saveSettings({...e.readForm(),menuFilterToyIds:n().menuFilterToyIds}),c.size&&ae(),z()})},onPaintPattern:e=>se(e),onCycleCoinBadge:(e,t)=>de(e,t),onBackupToy:e=>_e(e),onImportToy:e=>{r=e;let n=t(`menu-toy-pack-import`);n.value=``,n.click()}});e.scheduleStreamMenuPush(),ge(),fe()}let B=[4,4,0],V=[0,0,0],Ee=[[4,4,0],[4,4,0]],De=!1;function Oe(e,n=`err`){let r=t(`wizard-err`);if(!e){r.hidden=!0,r.textContent=``,r.classList.remove(`wizard-dup-warn`);return}r.hidden=!1,r.textContent=e,r.classList.toggle(`wizard-dup-warn`,n===`warn`)}function ke(){return rv(t(`wizard-needs`)).includes(`multi`)}function Ae(){let e=t(`wizard-strengths`);if(e.querySelector(`.wizard-motor-row`)){let t=$_(e);t.length&&(Ee=t,B=t[0].map((e,n)=>Math.max(...t.map(e=>e[n]??0))))}else B=ev(e),V=tv(e);Pe(),Fe()}function je(){let e=t(`wizard-mode`).value,n=t(`wizard-name`).value,r=Number(t(`wizard-interval`).value)||400,i=ke(),a=rv(t(`wizard-needs`)),o=e===`edit`?t(`wizard-id`).value.trim():``;if(!n.trim()&&!B.length)return Oe(null),null;let s=Sd({name:n,strengths:B.length?B:[4,4,0],intervalMs:r,stepMotors:i?Ie(Ee):void 0,motorStrengths:i&&Ee.length?Ee:void 0,needs:a},{excludeId:o||void 0});return s?(Oe(s.reason===`name`?`Duplicate name — already used by “${s.name}”.`:`Duplicate pattern — same steps & timing as “${s.name}”.`,`warn`),s):(Oe(null),null)}function Me(){let e=document.getElementById(`wizard-preview`);if(!e)return;let n=Number(t(`wizard-interval`).value)||400,r=ke(),i={strengths:B.length?B:[4,4,0],stepMotors:r?V:void 0,motorStrengths:r?Ee:void 0},a=z_(i,r?2:1);e.replaceChildren(),e.classList.toggle(`pattern-viz-multi`,a.length>1);for(let t=0;t<a.length;t++)if(a.length>1){let r=document.createElement(`span`);r.className=`pattern-viz-lane`;let i=document.createElement(`span`);i.className=`pattern-viz-lane-label`,i.textContent=`M${t+1}`,r.append(i,F_(a[t],{w:220,h:28,intervalMs:n,animate:!0})),e.append(r)}else e.append(F_(a[0]||R_(i),{w:220,h:36,intervalMs:n,animate:!0}));je()}function Ne(){let e=ke(),n=document.getElementById(`wizard-strength-label`),r=document.getElementById(`wizard-strength-hint`);n&&(n.textContent=e?`Strength steps (0–8) · one row per motor`:`Strength steps (0–8)`),r&&(r.textContent=e?`Gemini / Edge: M1 and M2 each run their own row of beats. Set a box to 0 to keep that motor quiet for that beat.`:`Each box is one beat of the vibe. Tick Multi-motor above for dual-motor toys.`),e?(Fe(),Q_(t(`wizard-strengths`),Ee)):Z_(t(`wizard-strengths`),B);for(let e of t(`wizard-strengths`).querySelectorAll(`input, select`))e.addEventListener(`input`,()=>{Ae(),Me()}),e.addEventListener(`change`,()=>{Ae(),Me()});Me()}function Pe(){for(;V.length<B.length;)V.push(0);V=V.slice(0,B.length)}function Fe(){let e=B.length,t=Vu({strengths:B,stepMotors:V},2);Ee=[0,1].map(n=>{let r=Ee[n]||[];return Array.from({length:e},(e,i)=>r[i]==null?t[n]?.[i]??0:r[i])})}function Ie(e){let[t=[],n=[]]=e;return(e[0]||[]).map((e,r)=>{let i=t[r]??0,a=n[r]??0;return i>0&&a===0?1:a>0&&i===0?2:0})}function Le(e,r,i){De=!!i?.fromCatalog,Oe(null),t(`wizard-mode`).value=e;let a=t(`pattern-wizard-title`);if(nv(t(`wizard-tag-list`),Md().filter(e=>e)),e===`edit`&&r){let e=Dd(r);if(!e)return;a.textContent=hd(r)?`Edit ${e.name}`:`Edit pattern`,t(`wizard-id`).value=r,t(`wizard-name`).value=e.name,t(`wizard-blurb`).value=e.blurb,t(`wizard-tag`).value=e.tag||`custom`,t(`wizard-price`).value=String(n().patternPrices[r]??e.price),t(`wizard-interval`).value=String(e.intervalMs||400),B=e.strengths.slice(),V=(e.stepMotors||[]).slice(),Pe(),Ee=Vu(e,2),iv(t(`wizard-needs`),vd(e))}else a.textContent=`Create pattern`,t(`wizard-id`).value=``,t(`wizard-name`).value=``,t(`wizard-blurb`).value=``,t(`wizard-tag`).value=`custom`,t(`wizard-price`).value=`1000`,t(`wizard-interval`).value=`400`,B=[4,4,0],V=[0,0,0],Ee=[[4,4,0],[4,4,0]],iv(t(`wizard-needs`),[]);Ne(),t(`pattern-wizard`).hidden=!1,t(`wizard-name`).focus()}function Re(){t(`pattern-wizard`).hidden=!0,Oe(null),De&&(De=!1,t(`pattern-catalog`).hidden?He():Ve())}function H(){let n=t(`pattern-catalog-toy`),r=n.value;n.replaceChildren();let i=document.createElement(`option`);i.value=``,i.textContent=`All toys`,n.append(i);let a=[...nm].sort((e,t)=>e.title.localeCompare(t.title));for(let e of a){let t=document.createElement(`option`);t.value=e.id,t.textContent=e.title,n.append(t)}if(r&&[...n.options].some(e=>e.value===r)){n.value=r;return}let s=e.getDeviceToys().find(e=>e.id&&e.id===o);n.value=(s&&(im(s.toyType)||im(s.name))||null)?.id||``}function ze(){let e=t(`pattern-catalog-toy`).value.trim();if(!e)return null;let n=im(e);return n?om(n):null}function Be(t){let n=t.toLowerCase();return e.getDeviceToys().find(e=>e.id?`${e.toyType||``} ${e.name||``}`.toLowerCase().includes(n):!1)?.id}function Ve(){let r=t(`pattern-catalog-search`).value,i=ze(),{shown:a,total:o}=X_(t(`pattern-catalog-body`),{query:r,toy:i,prices:n().patternPrices,ratings:n().patternRatings,disabled:n().disabledPatterns},{onTest:t=>{let n=i?.id||``;e.runPatternTest(1,0,t,kd(t),n?Be(n):void 0)},onEdit:e=>{Le(`edit`,e,{fromCatalog:!0})},onDuplicate:e=>{Xe(e,{fromCatalog:!0})},onSelect:t=>{n().defaultPattern=t,e.saveSettings({...e.readForm(),defaultPattern:t}),z(),e.paintSession(),Ue()},onRate:(t,r)=>{n().patternRatings={...n().patternRatings,[t]:r},e.saveSettings({...e.readForm(),patternRatings:n().patternRatings}),Ve()},onAddToMenu:t=>{let r=n().disabledPatterns.filter(e=>e!==t);n().disabledPatterns=r,r.includes(t)||R(t),e.saveSettings({...e.readForm(),disabledPatterns:n().disabledPatterns}),Ve(),z(),e.paintSession(),e.scheduleStreamMenuPush(),`${kd(t)}`}}),s=i?` for ${i.name}`:``;t(`pattern-catalog-count`).textContent=a===o?`${o} built-in patterns${s} · × on a tip card removes it · Add to menu here to restore`:`${a} of ${o} built-in patterns${s} · × on a tip card removes it · Add to menu here to restore`}function He(){H(),t(`pattern-catalog`).hidden=!1,Ve(),t(`pattern-catalog-search`).focus()}function Ue(){t(`pattern-catalog`).hidden=!0}function We(){return U(n().receive.trim())}function Ge(){t(`export-need-wallet-modal`).hidden=!1,document.getElementById(`btn-export-need-wallet-ok`)?.focus()}function Ke(){t(`export-need-wallet-modal`).hidden=!0}function qe(){return We()?!0:(Ge(),!1)}function Je(){qe()&&(t(`menu-share-modal`).hidden=!1,document.getElementById(`btn-export-menu-jpg`)?.focus())}function Ye(){t(`menu-share-modal`).hidden=!0}function Xe(e,r){let i=Dd(e)||_d(e);if(!i){Le(`create`,void 0,r);return}De=!!r?.fromCatalog,Oe(null),t(`wizard-mode`).value=`create`;let a=t(`pattern-wizard-title`);for(nv(t(`wizard-tag-list`),Md().filter(e=>e)),a.textContent=`Create pattern`,t(`wizard-id`).value=``,t(`wizard-name`).value=`${i.name} copy`,t(`wizard-blurb`).value=i.blurb,t(`wizard-tag`).value=i.tag||`custom`,t(`wizard-price`).value=String(n().patternPrices[i.id]??i.price),t(`wizard-interval`).value=String(i.intervalMs||400),B=i.strengths.slice(),V=(i.stepMotors||[]).slice();V.length<B.length;)V.push(0);V=V.slice(0,B.length),Ee=Vu(i,2),iv(t(`wizard-needs`),vd(i)),Ne(),t(`pattern-wizard`).hidden=!1,t(`wizard-name`).focus()}function Ze(){let r=t(`wizard-mode`).value,i=Number(t(`wizard-interval`).value),a=ke();Ae();let o=a?Ee:[],s=B,c=a?Ie(o):V;if(!s.length){Oe(`Add at least one strength step.`);return}let l=Number(t(`wizard-price`).value),u=t(`wizard-name`).value;if(!u.trim()){Oe(`Name is required.`),t(`wizard-name`).focus();return}let d=t(`wizard-id`).value.trim();(r===`create`||!d)&&(d=yd());let f=rv(t(`wizard-needs`));je();let p=r===`edit`?Dd(d):void 0,m=av({id:d,name:u,blurb:t(`wizard-blurb`).value,tag:t(`wizard-tag`).value,price:Number.isFinite(l)&&l>=0?l:0,intervalMs:i,strengths:s,stepMotors:f.includes(`multi`)?c:void 0,motorStrengths:f.includes(`multi`)&&o.length?o:void 0,kind:p?.kind??`pattern`,preset:p?.preset,intensity:p?.intensity,needs:f});if(!m){Oe(`Could not save pattern.`);return}if(hd(d))n().patternOverrides={...n().patternOverrides,[d]:m};else{let e=n().customPatterns.filter(e=>e.id!==d);e.push(m),n().customPatterns=e}n().patternPrices={...n().patternPrices,[d]:m.price},r===`create`&&(n().defaultPattern=d),e.saveSettings({...e.readForm(),customPatterns:n().customPatterns,patternOverrides:n().patternOverrides,patternPrices:n().patternPrices,defaultPattern:n().defaultPattern}),Re(),z(),e.paintSession()}function Qe(t){if(!hd(t))return;let r=_d(t);if(!r||!confirm(`Restore “${r.name}” to the built-in pattern and default tip price?`))return;let{[t]:i,...a}=n().patternOverrides;n().patternOverrides=a,n().patternPrices={...n().patternPrices,[t]:r.price},e.saveSettings({...e.readForm(),patternOverrides:n().patternOverrides,patternPrices:n().patternPrices}),z(),e.paintSession()}function $e(t){if(!gd(t))return;let r=Dd(t);if(!confirm(`Delete custom pattern “${r?.name||t}”? This cannot be undone.`))return;n().customPatterns=n().customPatterns.filter(e=>e.id!==t);let i={...n().patternPrices};delete i[t],n().patternPrices=i;let a={...n().patternRatings};delete a[t],n().patternRatings=a,n().disabledPatterns=n().disabledPatterns.filter(e=>e!==t),n().featuredPatterns=n().featuredPatterns.filter(e=>e!==t),n().defaultPattern===t&&(n().defaultPattern=q.find(e=>e.id!==t)?.id||`wave`),e.saveSettings({...e.readForm(),customPatterns:n().customPatterns,patternPrices:n().patternPrices,patternRatings:n().patternRatings,disabledPatterns:n().disabledPatterns,featuredPatterns:n().featuredPatterns,defaultPattern:n().defaultPattern}),z(),e.paintSession()}function et(e){let t=n().receive.trim();if(!t||!U(t))return;let r=Lc[n().chainKey],i=(e.tokenAddress||n().tokenAddress||``).trim(),a=e.tokenDecimals??(i&&U(i)?g(i):r.chain.nativeCurrency.decimals??18),o=Zm({receiveAddress:t,amountHuman:e.price,chainId:r.chain.id,decimals:a,tokenAddress:i&&U(i)?i:null,tokenSymbol:(e.coin||``).trim()||n().tokenSymbol||r.symbol||null,networkName:r.label});if(o)return rh(o,t)}async function tt(){let r=e.menuFitToys()??[];if(!r.length)throw Error(`No toy selected for the tip menu — search a toy under Toys, then export.`);let i=Lc[n().chainKey],a=[],o=r.length>1;for(let e of r){let t=X(e.name||``,e.toyType,e.id);for(let r of Ef(e,{disabled:n().disabledPatterns,featured:n().featuredPatterns,includeDisabled:!1})){let i=vd(r),s=pf(r.id,n().patternPrices,n().toyPatternPrices,e.id);!Number.isFinite(s)||s<=0||a.push({name:r.name,forToy:o?t:void 0,blurb:(r.blurb||``).trim(),timeSec:r.timeSec,tag:r.tag||`other`,family:$l(Zl(i)),strengths:R_(r),motorStrengths:i.includes(`multi`)?Vu(r,2):void 0,featured:n().featuredPatterns.includes(r.id),price:s})}}a.sort((e,t)=>(e.forToy||``).localeCompare(t.forToy||``)||e.price-t.price||e.name.localeCompare(t.name));let s=(()=>{let e=new Map;for(let t of a){let n=`${t.forToy||``}|tip`,r=e.get(n)||[];r.push(t),e.set(n,r)}let t=[];for(let n of e.values()){let e=nf(n.map((e,t)=>({id:`${e.name}|${t}`,amount:e.price}))),r=new Map(e.map(e=>[e.id,e.amount]));n.forEach((e,n)=>{t.push({...e,price:r.get(`${e.name}|${n}`)??e.price})})}return t})();if(!s.length)throw Error(`No enabled patterns match the selected toy(s). Turn patterns On or pick another toy.`);let c=Math.min(...s.map(e=>e.price)),l=[r.length===1?`${X(r[0].name||``,r[0].toyType,r[0].id)} · ${eu(r[0])}`:`${r.length} toys selected`].filter(Boolean),u=t(`export-orient-landscape`),d=t(`export-orient-portrait`).checked?`portrait`:(u.checked,`landscape`),f=n().tokenAddress.trim(),p=!!(f&&U(f)),m=p?f:void 0,h=i.symbol;if(p){let t=(n().savedTokens||[]).find(e=>e.address.toLowerCase()===f.toLowerCase());h=(t?_p(t):``)||e.getTokenLabelFieldValue().trim()||e.tokenLabelForAddress(f)||n().tokenSymbol||`TOKEN`}return{brand:Fh,displayName:``,tagline:l.join(` · `),chainLabel:i.label,symbol:h,receive:n().receive.trim()||void 0,cheapest:c,orientation:d,chainId:i.chain.id,chainRpcs:i.rpcs.slice(),explorerUrl:i.chain.blockExplorers?.default.url,nativeSymbol:i.symbol,nativeDecimals:i.chain.nativeCurrency.decimals??18,tokenAddress:m,tokenDecimals:n().tokenDecimals,tokenSymbol:p?n().tokenSymbol||h:void 0,links:[],items:s.map(e=>({...e,paymentUri:et({...e,coin:h})}))}}async function nt(){if(!qe())return;let n=t(`btn-export-menu-jpg`),r=t(`export-orient-landscape`),i=t(`export-orient-portrait`),a=n.textContent;n.disabled=!0,r.disabled=!0,i.disabled=!0;try{await yy(await tt()),e.showError(``),n.textContent=`Saved`,window.setTimeout(()=>{n.textContent===`Saved`&&(n.textContent=a)},1800)}catch(t){e.showError(t instanceof Error?t.message:String(t)),n.textContent=a}finally{n.disabled=!1,r.disabled=!1,i.disabled=!1}}async function rt(){if(!qe())return;let n=t(`btn-export-menu-html`),r=n.textContent;n.disabled=!0;try{let{orientation:t,...i}=await tt();await Cy(i),e.showError(``),n.textContent=`Saved`,window.setTimeout(()=>{n.textContent===`Saved`&&(n.textContent=r)},1800)}catch(t){e.showError(t instanceof Error?t.message:String(t)),n.textContent=r}finally{n.disabled=!1}}function it(){t(`btn-pattern-create`).addEventListener(`click`,()=>Le(`create`)),t(`btn-pattern-catalog`).addEventListener(`click`,()=>He()),t(`btn-pattern-catalog-close`).addEventListener(`click`,()=>Ue()),t(`btn-menu-share`).addEventListener(`click`,()=>Je()),t(`btn-menu-share-close`).addEventListener(`click`,()=>Ye()),Dg(t(`menu-share-modal`),Ye),t(`btn-export-need-wallet-ok`).addEventListener(`click`,()=>{Ke(),Ye(),e.goHome(),window.setTimeout(()=>{document.getElementById(`receive`)?.focus()},0)}),Dg(t(`export-need-wallet-modal`),Ke);let i=Bh,s=t(`donate-addr`);By(Bh).then(e=>{i=e,s&&(s.textContent=e,s.setAttribute(`title`,e))}),t(`btn-copy-donate`).addEventListener(`click`,()=>{let e=t(`donate-copy-status`),n=t=>{e.textContent=t?`Copied`:`Copy failed`,window.setTimeout(()=>{e.textContent=``},1600)};(async()=>{try{await navigator.clipboard.writeText(i),n(!0)}catch{try{let e=document.createElement(`textarea`);e.value=i,e.setAttribute(`readonly`,``),e.style.position=`fixed`,e.style.left=`-9999px`,document.body.append(e),e.select();let t=document.execCommand(`copy`);e.remove(),n(t)}catch{n(!1)}}})()}),Dg(t(`pattern-catalog`),Ue),t(`pattern-catalog-search`).addEventListener(`input`,()=>Ve()),t(`pattern-catalog-toy`).addEventListener(`change`,()=>Ve()),t(`btn-wizard-cancel`).addEventListener(`click`,()=>Re()),t(`btn-wizard-save`).addEventListener(`click`,()=>Ze()),t(`wizard-name`).addEventListener(`input`,()=>je()),t(`wizard-needs`).addEventListener(`change`,()=>{Ae(),Ne()}),t(`wizard-interval`).addEventListener(`change`,()=>{Ae(),Me()}),t(`wizard-interval`).addEventListener(`input`,()=>je()),t(`btn-wizard-add-step`).addEventListener(`click`,()=>{if(Ae(),!(B.length>=32)){B.push(4),V.push(0);for(let e of Ee)e.push(4);Ne()}}),t(`btn-wizard-rm-step`).addEventListener(`click`,()=>{if(Ae(),!(B.length<=1)){B.pop(),V.pop();for(let e of Ee)e.pop();Ne()}}),t(`menu-tip-currency`).addEventListener(`change`,()=>{let e=t(`menu-tip-currency`),n=e.value;if(e.value=``,n){if(n===`__clear__`){O();return}if(n===`__all__`){ue();return}le(n===`native`?``:n)}}),t(`btn-menu-base-apply`).addEventListener(`click`,()=>{let n=Number(t(`menu-base-price`).value),r=Number(t(`menu-top-price`).value),i=he(),s=D_(i)??a;if(s==null||!Number.isFinite(s)||s<=0){e.showError(`${m(i.display||`tip coin`)} — then Scale menu`);return}if(!Number.isFinite(n)||n<=0||!Number.isFinite(r)||r<=0){z();return}if(!N({toyId:o||void 0,usdLo:n,usdHi:r,usdPer:s})){e.showError(`Could not convert USD tips to the tip coin`);return}`${b_(n)}${b_(r)}`,e.showError(``),z(),e.paintSession()});let l=e=>{let t=he(),n=Number(e.value),r=D_(t)??a;if(!Number.isFinite(n)||n<0||r==null||r<=0){e.title=m(t.display||`tip coin`);return}let i=Bp(n,r,t.tokenAddress?g(t.tokenAddress):18);e.title=i==null?`$${b_(n)} USD`:`$${b_(n)} ≈ ${i.toLocaleString()} ${t.display}`},u=()=>{let r=Number(t(`menu-base-price`).value),i=Number(t(`menu-top-price`).value);if(!Number.isFinite(r)||r<=0||!Number.isFinite(i)||i<=0)return;let a=o||``;if(a){n().toyMenuUsd={...n().toyMenuUsd||{},[a]:{lo:r,hi:i}},e.saveSettings({...e.readForm(),toyMenuUsd:n().toyMenuUsd});return}n().menuUsdLo=r,n().menuUsdHi=i,e.saveSettings({...e.readForm(),menuUsdLo:r,menuUsdHi:i})};for(let e of[`menu-base-price`,`menu-top-price`])t(e).addEventListener(`input`,()=>{l(t(e))}),t(e).addEventListener(`change`,u),t(e).addEventListener(`blur`,u);for(let e of[`menu-base-price`,`menu-top-price`])t(e).addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),t(`btn-menu-base-apply`).click())});t(`menu-max-vibe`).addEventListener(`input`,()=>{let e=r_(t(`menu-max-vibe`).value,8);t(`menu-max-vibe-val`).textContent=`${e}/8`}),t(`menu-max-vibe`).addEventListener(`change`,()=>{let r=r_(t(`menu-max-vibe`).value,8),i=o||``;if(i){let t={...n().toyMaxVibe||{}};r>=8?delete t[i]:t[i]=r,n().toyMaxVibe=t,e.saveSettings({...e.readForm(),toyMaxVibe:n().toyMaxVibe}),e.applyDeviceSettings();return}n().menuMaxVibe=r,e.saveSettings({...e.readForm(),menuMaxVibe:r}),e.applyDeviceSettings()}),t(`menu-sort`).addEventListener(`change`,()=>{let r=t(`menu-sort`).value;Pd(r)&&(n().menuSort=r,e.saveSettings({...e.readForm(),menuSort:n().menuSort}),z())}),t(`btn-menu-toys-import`).addEventListener(`click`,()=>{let t=e.getDeviceToys(),r=xm(t),i=Sm(t,r);if(!i.length){e.showError(`Use linked needs a connected toy on Device.`);return}n().menuFilterToyIds=null,e.saveSettings({...e.readForm(),menuFilterToyIds:n().menuFilterToyIds}),e.showError(``);let a=i.map(e=>{let n=t.find(t=>t.id===e)||r.find(t=>t.id===e);return X(n?.name||``,n?.toyType,e)}).filter(Boolean);`${i.length}`,a.length&&`${a.join(` · `)}`,Te(`Loading ${i.length} linked toy${i.length===1?``:`s`}…`,()=>{c.size&&ae(),z()})}),t(`btn-menu-toys-none`).addEventListener(`click`,()=>{n().menuFilterToyIds=[],e.saveSettings({...e.readForm(),menuFilterToyIds:n().menuFilterToyIds}),Te(`Clearing toys…`,()=>{z()})}),t(`btn-coin-csv-export`).addEventListener(`click`,()=>{let e=Kp(n().coinRewardRules||[]);pe(`${Ih}-coin-rewards.csv`,e),`${(n().coinRewardRules||[]).length}`}),t(`btn-coin-csv-starter`).addEventListener(`click`,()=>{let e=Lc[n().chainKey],t=qp({tokens:(n().savedTokens||[]).map(e=>({address:e.address,symbol:e.symbol,label:_p(e)})),patterns:q.filter(e=>!n().disabledPatterns.includes(e.id)).map(e=>({id:e.id,name:e.name,price:n().patternPrices[e.id]??e.price})),includeNative:!0,nativeSymbol:e.symbol});pe(`${Ih}-coin-rewards-starter.csv`,t)}),t(`coin-csv-import`).addEventListener(`change`,()=>{let n=t(`coin-csv-import`),r=n.files?.[0];if(n.value=``,!r)return;let i=new FileReader;i.onload=()=>{let t=Jp(String(i.result||``));if(t.errors.length&&!t.rules.length){e.showError(t.errors.slice(0,3).join(` · `)),t.errors[0];return}h(t.rules);let n=new Set(_().map(e=>e.key));for(let e of t.rules){let t=e.tokenAddress.trim().toLowerCase();n.has(t)&&c.add(t)}te(),e.showError(``);let r=[`Imported ${t.rules.length} row(s)`];t.warnings.length&&r.push(`${t.warnings.length} warning(s)`),t.errors.length&&r.push(`${t.errors.length} row error(s) skipped`),r.join(` · `),fe(),e.paintSession()},i.readAsText(r)}),t(`btn-coin-csv-clear`).addEventListener(`click`,()=>{confirm(`Clear the coin reward CSV?

Optional coin×pattern USD rows will be removed until you import again.`)&&(h([]),fe(),e.paintSession())}),t(`menu-toy-pack-import`).addEventListener(`change`,()=>{let e=t(`menu-toy-pack-import`),n=e.files?.[0],i=r;r=null,e.value=``,!(!n||!i)&&ve(n,i)}),t(`btn-export-menu-jpg`).addEventListener(`click`,()=>{nt()}),t(`btn-export-menu-html`).addEventListener(`click`,()=>{rt()})}function at(){let t=n(),r=_(),i=t.coinRewardRules||[],a=(e.menuFitToys()||[]).filter(e=>!!e.id),s={};for(let e of i)for(let t of e.toyIds.length?e.toyIds:[`(shared)`])s[t]=[...new Set([...s[t]||[],e.coin])];let l={bytes:0,rules:0,paintCoinKeys:[],menuFilterToyIds:[]};try{let e=localStorage.getItem(`pulsefans-tipbuzz-v1`)||``,t=JSON.parse(e||`{}`);l={bytes:e.length,rules:(t.coinRewardRules||[]).length,paintCoinKeys:t.paintCoinKeys||[],menuFilterToyIds:t.menuFilterToyIds??null}}catch{}let u={selectedChips:[...c].map(e=>r.find(t=>t.key===e)?.label||e||`PLS`),selectedKeys:[...c],paintCoinKeys:t.paintCoinKeys||[],boardCoins:r.map(e=>e.label),ruleCount:i.length,coinsInRules:[...new Set(i.map(e=>`${e.coin}:${e.tokenAddress.toLowerCase()}`))],tabs:a.map(e=>({id:e.id,label:X(e.name||``,e.toyType,e.id),coins:s[e.id]||[]})),orphanRuleToyIds:Object.keys(s).filter(e=>e!==`(shared)`&&!a.some(t=>t.id===e)),sharedRules:(s[`(shared)`]||[]).length,activeTab:o,stored:l};return console.table(u.tabs),console.log(`[paintDebug]`,u),u}return window.__paintDebug=at,{paintPatterns:z,openPatternWizard:Le,closePatternWizard:Re,openPatternCatalog:He,closePatternCatalog:Ue,openShareCardModal:Je,closeShareCardModal:Ye,closeNeedWalletPopup:Ke,wireTipMenuEvents:it}}function Hy(e){let{receive:t,receiveLabel:n,settingsStatus:r}=e.elements;function i(t){if(!U(t))return``;let n=t.toLowerCase();return e.getState().savedWallets.find(e=>e.address.toLowerCase()===n)?.label||``}function a(){document.activeElement!==n&&(n.value=i(t.value.trim()))}function o(t,n){if(!U(t))return!1;let r=e.getState(),i=Hf(r.savedWallets,t,{label:n.trim().slice(0,48)});return e.setState({...r,receive:t,savedWallets:i}),e.save({...e.readForm(),receive:t,savedWallets:i})}function s(){let i=e.$(`saved-wallets`),o=e.$(`wallet-list`),l=e.getState().savedWallets||[];if(o.replaceChildren(),!l.length){i.hidden=!0;return}i.hidden=!1;let u=t.value.trim().toLowerCase();for(let i of l){let l=document.createElement(`li`);l.className=`wallet-item`,i.address.toLowerCase()===u&&l.classList.add(`active`);let d=document.createElement(`button`);d.type=`button`,d.className=`wallet-item-main`,d.title=`Watch ${i.address}`;let f=document.createElement(`span`);f.className=`wallet-item-name`,f.textContent=Wf(i);let p=document.createElement(`span`);p.className=`wallet-item-addr`,p.textContent=i.label?Gf(i.address):i.address,d.append(f,p),d.addEventListener(`click`,()=>{let r=e.getState(),a=Hf(r.savedWallets,i.address);t.value=i.address,n.value=i.label||``,e.setState({...r,receive:i.address,savedWallets:a}),e.save({...e.readForm(),savedWallets:a}),e.paintAddressPill(),s(),e.paintSession(),e.paintWatch()});let m=document.createElement(`div`);m.className=`wallet-item-actions`;let h=document.createElement(`button`);h.type=`button`,h.className=`btn ghost tiny`,h.textContent=`Name`,h.title=`Edit wallet name`,h.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),c(l,i.address,i.label||``)});let g=document.createElement(`button`);g.type=`button`,g.className=`btn ghost tiny`,g.textContent=`Remove`,g.title=`Remove from saved list`,g.addEventListener(`click`,o=>{o.preventDefault(),o.stopPropagation();let c=e.getState(),l=Uf(c.savedWallets,i.address),u=t.value.trim().toLowerCase()===i.address.toLowerCase();u&&(t.value=``,n.value=``);let d={...c,savedWallets:l,...u?{receive:``}:{}};e.setState(d),e.save({...e.readForm(),savedWallets:l,...u?{receive:``}:{}}),u?(e.paintAddressPill(),e.syncQr(),r.textContent=`Removed · tip wallet cleared so it stays gone`):r.textContent=`Removed from saved list`,a(),s(),e.paintSession(),e.paintWatch(),e.showError(``)}),m.append(h,g),l.append(d,m),o.append(l)}}function c(r,i,c){r.classList.add(`is-renaming`),r.replaceChildren();let l=document.createElement(`div`);l.className=`wallet-item-rename`;let u=document.createElement(`input`);u.type=`text`,u.maxLength=48,u.value=c,u.placeholder=`Wallet name`,u.setAttribute(`aria-label`,`Wallet name`);let d=document.createElement(`button`);d.type=`button`,d.className=`btn primary tiny`,d.textContent=`Save name`;let f=document.createElement(`button`);f.type=`button`,f.className=`btn ghost tiny`,f.textContent=`Cancel`;let p=()=>{if(!o(i,u.value)){e.showError(`Could not save wallet name — browser storage may be full or blocked.`),s();return}t.value.trim().toLowerCase()===i.toLowerCase()?n.value=u.value.trim().slice(0,48):a(),e.syncQr(),s(),e.paintSession(),e.showError(``)};d.addEventListener(`click`,e=>{e.preventDefault(),p()}),f.addEventListener(`click`,e=>{e.preventDefault(),s()}),u.addEventListener(`keydown`,e=>{e.key===`Enter`?(e.preventDefault(),p()):e.key===`Escape`&&(e.preventDefault(),s())}),l.append(u,d,f),r.append(l),u.focus(),u.select()}function l(){let i=t.value.trim();if(!U(i)){e.showError(`Enter a valid 0x address before saving`);return}let a=n.value.trim().slice(0,48);if(!o(i,a)){r.textContent=``;return}t.value=i,n.value=a,e.syncQr(),e.paintAddressPill(),s(),e.paintSession(),e.showError(``);let c=e.getState().savedWallets.length;r.textContent=a?`Saved “${a}” · ${c} wallet${c===1?``:`s`} in Settings`:`Wallet saved · ${c} wallet${c===1?``:`s`} in Settings`}function u(){e.$(`btn-save-wallet`).addEventListener(`click`,l),n.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),l())}),t.addEventListener(`blur`,a),t.addEventListener(`change`,e.onReceiveChange),t.addEventListener(`input`,()=>{e.paintAddressPill(),s(),a()})}return{labelForAddress:i,syncReceiveLabelField:a,paintSavedWallets:s,saveCurrentWallet:l,wire:u}}function Uy(e){let{token:t,symbol:n,decimals:r,label:i,settingsStatus:a}=e.elements;function o(t){if(!U(t))return``;let n=t.toLowerCase();return(e.getState().savedTokens||[]).find(e=>e.address.toLowerCase()===n)?.label||``}function s(){document.activeElement!==i&&(i.value=o(t.value.trim()))}function c(a,o,s,c){let l={...e.getState(),tokenAddress:a,tokenSymbol:o||`TOKEN`,tokenDecimals:Math.max(0,Math.min(36,Math.round(Number(s)||18)))};e.setState(l),t.value=a,n.value=l.tokenSymbol,r.value=String(l.tokenDecimals),c!==void 0&&(i.value=c)}function l(){}function u(){let o=t.value.trim();if(!U(o)){e.showError(`Enter a valid ERC‑20 contract address before saving`);return}let s=n.value.trim().slice(0,16)||`TOKEN`,l=Math.max(0,Math.min(36,Math.round(Number(r.value)||18))),u=i.value.trim().slice(0,48),d=e.getState(),f=hp(d.savedTokens||[],o,{symbol:s,decimals:l,label:u}),p=(d.hiddenTipCoins||[]).filter(e=>e.toLowerCase()!==o.toLowerCase());e.setState({...d,savedTokens:f,hiddenTipCoins:p}),c(o,s,l,u),e.save({...e.readForm(),tokenAddress:o,tokenSymbol:s,tokenDecimals:l,savedTokens:f,hiddenTipCoins:p}),e.paintSession(),e.showError(``),a&&(a.textContent=u?`Saved token “${u}” (${s})`:`Saved token ${s}`)}function d(){e.$(`btn-save-token`).addEventListener(`click`,u),i.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),u())}),t.addEventListener(`blur`,s),t.addEventListener(`input`,()=>{s()});for(let i of[t,n,r])i.addEventListener(`change`,()=>{e.onTokenFieldChange()})}return{tokenLabelForAddress:o,syncTokenLabelField:s,applyActiveToken:c,paintSavedTokens:l,saveCurrentToken:u,wire:d}}var Wy=Dt(`event Swap(address indexed sender, uint256 amount0In, uint256 amount1In, uint256 amount0Out, uint256 amount1Out, address indexed to)`);function Gy(e){let t=e.map(e=>e.trim()).filter(Boolean);return t.length?t.length===1?Ic(t[0],{timeout:2e4,retryCount:2}):kc(t.map(e=>Ic(e,{timeout:18e3,retryCount:1})),{rank:!1}):Ic(void 0,{timeout:2e4,retryCount:2})}function Ky(e){let t=(e.rpcUrls||[]).map(e=>e.trim()).filter(Boolean);return t.length||(t=[...e.chain.rpcUrls.default.http||[]]),Dc({chain:e.chain,transport:Gy(t)})}async function qy(e,t){let n=[{name:`token0`,type:`function`,stateMutability:`view`,inputs:[],outputs:[{type:`address`}]},{name:`token1`,type:`function`,stateMutability:`view`,inputs:[],outputs:[{type:`address`}]}],r=[{name:`decimals`,type:`function`,stateMutability:`view`,inputs:[],outputs:[{type:`uint8`}]}],[i,a]=t.token0&&t.token1?[t.token0,t.token1]:await Promise.all([t.token0?Promise.resolve(t.token0):e.readContract({address:t.address,abi:n,functionName:`token0`}),t.token1?Promise.resolve(t.token1):e.readContract({address:t.address,abi:n,functionName:`token1`})]),o=t.decimals;try{let n=await e.readContract({address:t.quoteToken,abi:r,functionName:`decimals`}),i=Number(n);Number.isFinite(i)&&i>=0&&i<=36&&(o=Math.round(i))}catch{}return{...t,token0:i,token1:a,decimals:o}}function Jy(e,t){return e.length?e.length===1?e[0]:e[Math.min(e.length-1,Math.max(0,Math.ceil(t/100*e.length)-1))]:0}function Yy(e){return!Number.isFinite(e)||e<=0?0:e<10?Math.max(1,Math.round(e)):e<100?Math.round(e/5)*5:e<1e3?Math.round(e/10)*10:e<1e4?Math.round(e/50)*50:e<1e5?Math.round(e/500)*500:e<1e6?Math.round(e/1e3)*1e3:Math.round(e/5e3)*5e3}async function Xy(e,t,n,r){let i=[],a=0,o=[],s=[[n,r]];for(;s.length;){let[n,r]=s.pop();if(!(r<n))try{let i=await e.getLogs({address:t,event:Wy,fromBlock:n,toBlock:r});o.push(...i)}catch{if(r-n+1n<=25n){a+=1,i.push(`RPC getLogs failed for blocks ${n}–${r}`);continue}let e=n+(r-n)/2n;s.push([e+1n,r],[n,e])}}return{logs:o,warnings:i,hardFails:a}}async function Zy(e,t,n){let r=Math.min(4e3,Math.max(80,n?.lookbackBlocks??900)),i=Math.min(400,Math.max(20,n?.maxSwaps??120)),a=await qy(e,t),o=await e.getBlockNumber(),s=o>BigInt(r)?o-BigInt(r):0n,c=[],l=[],u=0,d=200n;for(let t=o;t>=s&&c.length<i;t=t>d?t-d:0n){let n=t>=d-1n+s?t-(d-1n):s,r=await Xy(e,a.address,n,t);u+=r.hardFails;for(let e of r.warnings)l.length<4&&l.push(e);for(let e of r.logs){let n=e.args,r=cl(a,n.amount0In!=null&&n.amount1In!=null&&n.amount0Out!=null&&n.amount1Out!=null?{amount0In:n.amount0In,amount1In:n.amount1In,amount0Out:n.amount0Out,amount1Out:n.amount1Out}:sl(e.data||`0x`));if(r.amountWei<=0n)continue;let i=Number(us(r.amountWei,a.decimals));!Number.isFinite(i)||i<=0||c.push({amount:i,side:r.side,symbol:r.quoteSymbol||a.quoteSymbol,blockNumber:e.blockNumber??t})}if(n===0n||n===s)break}if(u>0&&!c.length)throw Error(`Could not read recent swaps (${u} RPC range failure${u===1?``:`s`}). Check RPC and try again.`);return c.sort((e,t)=>Number(t.blockNumber-e.blockNumber)),{swaps:c.slice(0,i),blocks:Number(o-s),pool:a,warnings:l}}function Qy(e,t){return e.filter(e=>e.side===t).map(e=>e.amount).filter(e=>Number.isFinite(e)&&e>0).sort((e,t)=>e-t)}function $y(e,t){let n=Qy(e,`buy`),r=Qy(e,`sell`),i=e.filter(e=>e.side!==`buy`&&e.side!==`sell`).length,a=t?.symbol||e[0]?.symbol||`WPLS`,o=[],s=[];function c(e,t){if(t.length<4){s.push(`${e}: only ${t.length} sample${t.length===1?``:`s`}`);return}let n=Yy(Jy(t,70)),r=Yy(Jy(t,90)),i=Yy(Jy(t,97));n>0&&o.push(ol({minAmount:n,side:e,multiples:1,patternId:``})),r>n&&o.push(ol({minAmount:r,side:e,multiples:2,patternId:``})),i>r&&o.push(ol({minAmount:i,side:e,multiples:3,patternId:``})),s.push(`${e} n=${t.length} · ≥${n} / ≥${r}${i>r?` / ≥${i}`:``} ${a}`)}c(`buy`,n),c(`sell`,r);let l=[...n,...r].sort((e,t)=>e-t);o.sort((e,t)=>e.side.localeCompare(t.side)||t.minAmount-e.minAmount);let u=o.slice(0,6),d=u.reduce((e,t)=>Math.min(e,t.minAmount),1/0),f=Yy(l.length?Jy(l,55):0);Number.isFinite(d)&&d>0&&(f=f>0?Math.min(f,d):d);let p=Yy(l.length?Jy(l,85):0);p>0&&f>0&&(p=Math.max(p,f));let m=u.some(e=>e.side===`buy`),h=u.some(e=>e.side===`sell`),g=m&&h,_=u.length?`Suggested ${u.length} trigger${u.length===1?``:`s`} from ${e.length} swaps`+(t?.blocks?` (~${t.blocks} blocks)`:``)+`: ${s.join(` · `)}`:`Not enough sized buy/sell swaps yet (${e.length} total). Try again when the pair is more active.`;return t?.warnings?.length&&(_+=` · Note: ${t.warnings[0]}`),{summary:_,scanMinAmount:f,overlayMinAmount:p>0?p:null,preferPoolSideAll:g,rules:u,samples:{buys:n.length,sells:r.length,other:i,blocks:t?.blocks||0}}}async function eb(e,t,n){let r=await Zy(e,t,n);return{...$y(r.swaps,{blocks:r.blocks,symbol:r.pool.quoteSymbol,warnings:r.warnings}),pool:r.pool}}function tb(e){let t=null,n=null,r=null,i=new Map,a=new Set,o=[[`all`,`All`],[`buy`,`Buy`],[`sell`,`Sell`],[`add`,`Add LP`],[`remove`,`Remove LP`],[`in`,`Bridge in`],[`out`,`Bridge out`]];function s(){e.isWatching()&&e.getState().poolWatch&&e.restartWatch()}function c(t,n){let r=e.getState(),i=[...r.pools||[]],a=i[t];a&&(i[t]={...a,...n},e.setState({...r,pools:i}),e.save({...e.readForm(),pools:i}),p(),s())}function l(e){let t=[],n=e.listen?.length?e.listen:[`swap`];t.push(n.join(`+`)),e.overlayAlert===!1?t.push(`OBS off`):e.overlayMinAmount!=null&&e.overlayMinAmount>0?t.push(`OBS ≥${e.overlayMinAmount}`):t.push(`OBS on`);let r=e.buzzRules?.length||0;return r&&t.push(`${r} rule${r===1?``:`s`}`),t.join(` · `)}async function u(t){let n=t.address.toLowerCase();if(!a.has(n)){a.add(n),i.set(n,`Sampling recent buy/sell swaps…`),p();try{let r=e.getState(),a=r.chainKey,o=Lc[a],s=Vc(r.rpcList),l=s.length>0?s:Bc(a),u=await eb(Ky({chain:o.chain,rpcUrls:l}),t,{lookbackBlocks:900,maxSwaps:120});if(!u.rules.length){i.set(n,u.summary);return}let d=(e.getState().pools||[]).findIndex(e=>e.address.toLowerCase()===n);if(d<0){i.set(n,`Pool was removed before suggestions could apply.`);return}let f={buzzRules:u.rules,token0:u.pool.token0,token1:u.pool.token1,decimals:u.pool.decimals};u.preferPoolSideAll&&(f.side=`all`),u.scanMinAmount>0&&(f.minAmount=u.scanMinAmount),u.overlayMinAmount!=null&&u.overlayMinAmount>0&&(f.overlayMinAmount=u.overlayMinAmount),c(d,f),i.set(n,u.summary)}catch(e){let t=e instanceof Error?e.message:String(e);i.set(n,`Suggest failed: ${t.slice(0,160)}`)}finally{a.delete(n),p()}}}function d(t,n){let r=document.createElement(`div`);r.className=`pool-rules`;let s=n.address.toLowerCase(),l=document.createElement(`div`);l.className=`pool-rules-head`;let d=document.createElement(`p`);d.className=`pool-rules-title`,d.textContent=`Buzz rules`;let p=document.createElement(`div`);p.className=`pool-rules-actions`;let m=document.createElement(`button`);m.type=`button`,m.className=`btn ghost tiny`,m.textContent=a.has(s)?`Sampling…`:`Suggest from recent`,m.disabled=a.has(s),m.title=`Sample recent pair swaps and propose buy/sell amount triggers (replaces current rules)`,m.addEventListener(`click`,()=>{u(n)});let h=document.createElement(`button`);h.type=`button`,h.className=`btn ghost tiny`,h.textContent=`Add rule`,h.title=`Add amount → toy / pattern / multiples`,h.addEventListener(`click`,()=>{c(t,{buzzRules:[...n.buzzRules||[],ol({minAmount:n.minAmount||0})]})}),p.append(m,h),l.append(d,p),r.append(l);let g=i.get(s);if(g){let e=document.createElement(`p`);e.className=`hint pool-suggest-status`,e.textContent=g,r.append(e)}let _=e.getToys(),v=e.getPatterns(),y=n.buzzRules||[];if(!y.length){let e=document.createElement(`p`);return e.className=`hint`,e.textContent=`No rules yet — swaps use the tip menu ladder. Suggest from recent, or add a rule for toys, side, function, amount, and repeats.`,r.append(e),r}for(let e=0;e<y.length;e++){let i=y[e],a=document.createElement(`div`);a.className=`pool-rule-row`;let s=document.createElement(`label`);s.className=`field narrow`,s.innerHTML=`<span>Side</span>`;let l=document.createElement(`select`);for(let[e,t]of o){let n=document.createElement(`option`);n.value=e,n.textContent=t,(i.side||`all`)===e&&(n.selected=!0),l.append(n)}l.addEventListener(`change`,()=>{f(t,n,e,{side:l.value})}),s.append(l);let u=document.createElement(`label`);u.className=`field narrow`,u.innerHTML=`<span>Amount ≥</span>`;let d=document.createElement(`input`);d.type=`number`,d.min=`0`,d.step=`any`,d.value=String(i.minAmount||0),d.addEventListener(`change`,()=>{let r=Number(d.value);f(t,n,e,{minAmount:Number.isFinite(r)&&r>=0?r:0})}),u.append(d);let p=document.createElement(`label`);p.className=`field`,p.innerHTML=`<span>Function</span>`;let m=document.createElement(`select`),h=document.createElement(`option`);h.value=``,h.textContent=`Tip ladder (auto)`,m.append(h);for(let e of v){let t=document.createElement(`option`);t.value=e.id,t.textContent=e.name,i.patternId===e.id&&(t.selected=!0),m.append(t)}if(i.patternId&&!v.some(e=>e.id===i.patternId)){let e=document.createElement(`option`);e.value=i.patternId,e.textContent=`${i.patternId} (missing)`,e.selected=!0,m.append(e)}m.addEventListener(`change`,()=>{f(t,n,e,{patternId:m.value})}),p.append(m);let g=document.createElement(`label`);g.className=`field narrow`,g.innerHTML=`<span>Multiples</span>`;let b=document.createElement(`input`);b.type=`number`,b.min=`1`,b.max=`8`,b.step=`1`,b.value=String(i.multiples||1),b.title=`How many times to play on each selected toy (1–8)`,b.addEventListener(`change`,()=>{let r=Math.round(Number(b.value));f(t,n,e,{multiples:Number.isFinite(r)?Math.min(8,Math.max(1,r)):1})}),g.append(b);let x=document.createElement(`button`);x.type=`button`,x.className=`btn ghost tiny`,x.textContent=`Remove`,x.addEventListener(`click`,()=>{c(t,{buzzRules:(n.buzzRules||[]).filter((t,n)=>n!==e)})});let S=document.createElement(`div`);S.className=`pool-rule-toys`;let C=document.createElement(`p`);if(C.className=`pool-rule-toys-label`,C.textContent=_.length?`Toys (tick one or more)`:`Toys — connect a toy on Home to target`,S.append(C),_.length)for(let r of _){let a=document.createElement(`label`);a.className=`pool-rule-toy`;let o=document.createElement(`input`);o.type=`checkbox`,o.checked=i.toyIds.includes(r.id),o.addEventListener(`change`,()=>{let a=new Set(i.toyIds);o.checked?a.add(r.id):a.delete(r.id),f(t,n,e,{toyIds:[...a]})});let s=document.createElement(`span`);s.textContent=X(r.name||``,r.toyType,r.id),a.append(o,s),S.append(a)}a.append(s,u,p,g,x,S),r.append(a)}return r}function f(e,t,n,r){let i=[...t.buzzRules||[]],a=i[n];a&&(i[n]={...a,...r},c(e,{buzzRules:i}))}function p(){let i=e.$(`pool-watch-enabled`),a=e.$(`pool-watch-hint`),o=e.$(`pool-list`),u=e.$(`pool-list-empty`),f=e.getState();i.checked=!!f.poolWatch;let m=f.pools||[],h=m.length,g=m.filter(e=>e.enabled!==!1).length;a.textContent=f.poolWatch?h?`On · ${g}/${h} pool${h===1?``:`s`} ticked`:`On · listening for ticked pools, bridges, and custom events`:`Off · not listening for chain events`,o.replaceChildren();for(let i=0;i<h;i++){let a=m[i],u=document.createElement(`li`);u.className=a.enabled===!1?`pool-row is-off`:`pool-row`,t===a.address.toLowerCase()&&u.classList.add(`is-editing`);let f=document.createElement(`label`);f.className=`pool-enable`,f.title=a.enabled===!1?`Disabled — not watched`:`Enabled for watching`;let h=document.createElement(`input`);h.type=`checkbox`,h.checked=a.enabled!==!1,h.setAttribute(`aria-label`,`Watch ${a.label}`),h.addEventListener(`change`,()=>{c(i,{enabled:h.checked})});let g=document.createElement(`span`);g.textContent=`On`,f.append(h,g);let _=document.createElement(`div`);_.className=`pool-body`;let v=document.createElement(`p`);v.className=`pool-title`,v.textContent=a.label;let y=document.createElement(`p`);y.className=`pool-meta`,y.textContent=`${a.address.slice(0,10)}… · min ${a.minAmount} ${a.quoteSymbol} · ${a.side} · ${l(a)}`,_.append(v,y);let b=document.createElement(`div`);b.className=`pool-row-actions`;let x=document.createElement(`button`);x.type=`button`,x.className=`btn ghost tiny`;let S=t===a.address.toLowerCase();x.textContent=S?`Done`:`Alert`,x.title=S?`Close alert settings`:`Edit OBS alerts and buzz rules (toy, amount, function, multiples)`,x.addEventListener(`click`,()=>{t=S?null:a.address.toLowerCase(),n=null,r=null,p()});let C=document.createElement(`button`);if(C.type=`button`,C.className=`btn ghost tiny`,C.textContent=`Remove`,C.addEventListener(`click`,()=>{let n=e.getState(),r=(n.pools||[]).filter((e,t)=>t!==i);t===a.address.toLowerCase()&&(t=null),e.setState({...n,pools:r}),e.save({...e.readForm(),pools:r}),p(),s()}),b.append(x,C),u.append(f,_,b),S){let e=document.createElement(`div`);e.className=`pool-alert-panel`,e.setAttribute(`role`,`region`),e.setAttribute(`aria-label`,`Alerts for ${a.label}`);let t=document.createElement(`label`);t.className=`field narrow`,t.innerHTML=`<span>Scan min</span>`;let n=document.createElement(`input`);n.type=`number`,n.min=`0`,n.step=`any`,n.value=String(a.minAmount||0),n.title=`Ignore swaps below this quote size`,n.addEventListener(`change`,()=>{let e=Number(n.value);c(i,{minAmount:Number.isFinite(e)&&e>=0?e:0})}),t.append(n);let r=document.createElement(`label`);r.className=`field`,r.innerHTML=`<span>Side</span>`;let o=document.createElement(`select`);for(let[e,t]of[[`all`,`All swaps`],[`buy`,`Buy (spend quote)`],[`sell`,`Sell (receive quote)`]]){let n=document.createElement(`option`);n.value=e,n.textContent=t,a.side===e&&(n.selected=!0),o.append(n)}o.addEventListener(`change`,()=>{c(i,{side:o.value})}),r.append(o);let s=document.createElement(`label`);s.className=`field settings-toggle-field pool-obs-toggle`;let l=document.createElement(`input`);l.type=`checkbox`,l.checked=a.overlayAlert!==!1,l.addEventListener(`change`,()=>{c(i,{overlayAlert:l.checked})});let f=document.createElement(`span`);f.textContent=`Show on stream overlay`,s.append(f,l);let p=document.createElement(`label`);p.className=`field narrow`,p.innerHTML=`<span>OBS min</span>`;let m=document.createElement(`input`);m.type=`number`,m.min=`0`,m.step=`any`,m.placeholder=`stream default`,m.value=a.overlayMinAmount==null?``:String(a.overlayMinAmount),m.title=`OBS alert minimum for this pool only. Empty = use Stream tip alert “Pool / chain event alert minimum”.`,m.addEventListener(`change`,()=>{let e=m.value.trim();if(!e){c(i,{overlayMinAmount:null});return}let t=Number(e);c(i,{overlayMinAmount:Number.isFinite(t)&&t>=0?t:null})}),p.append(m);let h=document.createElement(`p`);h.className=`hint pool-alert-hint`,h.textContent=`Scan min gates detection. Matching events also fire the OBS tip alert (same card as wallet tips) unless “Show on stream overlay” is off.`;let g=document.createElement(`div`);g.className=`pool-listen`;let _=document.createElement(`p`);_.className=`pool-listen-label`,_.textContent=`Listen`,g.append(_);let v=new Set(a.listen?.length?a.listen:[`swap`]);for(let[e,t]of[[`swap`,`Swaps`],[`mint`,`Add LP`],[`burn`,`Remove LP`]]){let n=document.createElement(`label`);n.className=`pool-rule-toy`;let r=document.createElement(`input`);r.type=`checkbox`,r.checked=v.has(e),r.addEventListener(`change`,()=>{let t=new Set(v);r.checked?t.add(e):t.delete(e),c(i,{listen:[...t]})});let a=document.createElement(`span`);a.textContent=t,n.append(r,a),g.append(n)}e.append(g,t,r,s,p,h,d(i,a)),u.append(e)}o.append(u)}u.hidden=h>0,T(),E()}function m(){let t=e.getState(),n=e.$(`pool-watch-enabled`).checked;e.setState({...t,poolWatch:n}),e.save({...e.readForm(),poolWatch:n}),p(),e.isWatching()&&e.restartWatch()}function h(){let t=e.$(`pool-address`).value.trim(),n=e.$(`pool-quote`).value.trim(),r=ul({address:t,label:e.$(`pool-label`).value.trim(),minAmount:Number(e.$(`pool-min`).value)||0,quoteSymbol:e.$(`pool-quote-sym`).value.trim()||`WPLS`,quoteToken:n||`0xA1077a294dDE1B09bB078844df40758a5D0f9a27`,side:e.$(`pool-side`).value,decimals:18,overlayAlert:!0,overlayMinAmount:null,buzzRules:[],listen:[`swap`]}),i=e.$(`pool-form-status`);if(!r){i.textContent=`Invalid pair address`;return}let a=e.getState();if((a.pools||[]).some(e=>e.address.toLowerCase()===r.address.toLowerCase())){i.textContent=`Pool already listed`;return}let o=[...a.pools||[],{...r,enabled:!0}];e.setState({...a,pools:o}),e.save({...e.readForm(),pools:o}),e.$(`pool-address`).value=``,e.$(`pool-label`).value=``,i.textContent=`Added ${r.label} (On)`,p(),e.getState().poolWatch||(i.textContent=`Added ${r.label} — turn on Watch chain events to listen`)}function g(){let t=e.getState(),{pools:n,added:r}=ml(t.pools||[]);e.setState({...t,pools:n}),e.save({...e.readForm(),pools:n}),p(),e.$(`pool-form-status`).textContent=r?`Loaded ${r} presets (all Off — tick the ones you want)`:`Presets already loaded — tick pools On to watch`}function _(){let t=e.getState(),n=(t.pools||[]).map(e=>({...e,enabled:!0}));e.setState({...t,pools:n}),e.save({...e.readForm(),pools:n}),p(),s()}function v(){let t=e.getState(),n=(t.pools||[]).map(e=>({...e,enabled:!1}));e.setState({...t,pools:n}),e.save({...e.readForm(),pools:n}),p(),s()}function y(e){let t=[];e.overlayAlert===!1?t.push(`OBS off`):e.overlayMinAmount!=null&&e.overlayMinAmount>0?t.push(`OBS ≥${e.overlayMinAmount}`):t.push(`OBS on`);let n=e.buzzRules?.length||0;return n&&t.push(`${n} rule${n===1?``:`s`}`),t.join(` · `)}function b(t,n,r){let i=document.createElement(`div`);i.className=`pool-rules`;let a=document.createElement(`div`);a.className=`pool-rules-head`;let s=document.createElement(`p`);s.className=`pool-rules-title`,s.textContent=`Buzz rules`;let c=document.createElement(`button`);if(c.type=`button`,c.className=`btn ghost tiny`,c.textContent=`Add rule`,c.addEventListener(`click`,()=>{r([...t,ol({minAmount:n||0})])}),a.append(s,c),i.append(a),!t.length){let e=document.createElement(`p`);return e.className=`hint`,e.textContent=`No rules yet — matching events use the tip menu ladder. Add a rule to target toys, side, function, amount, and repeats.`,i.append(e),i}let l=e.getToys(),u=e.getPatterns();for(let e=0;e<t.length;e++){let n=t[e],a=document.createElement(`div`);a.className=`pool-rule-row`;let s=document.createElement(`label`);s.className=`field narrow`,s.innerHTML=`<span>Side</span>`;let c=document.createElement(`select`);for(let[e,t]of o){let r=document.createElement(`option`);r.value=e,r.textContent=t,(n.side||`all`)===e&&(r.selected=!0),c.append(r)}c.addEventListener(`change`,()=>{let i=[...t];i[e]={...n,side:c.value},r(i)}),s.append(c);let d=document.createElement(`label`);d.className=`field narrow`,d.innerHTML=`<span>Amount ≥</span>`;let f=document.createElement(`input`);f.type=`number`,f.min=`0`,f.step=`any`,f.value=String(n.minAmount||0),f.addEventListener(`change`,()=>{let i=Number(f.value),a=[...t];a[e]={...n,minAmount:Number.isFinite(i)&&i>=0?i:0},r(a)}),d.append(f);let p=document.createElement(`label`);p.className=`field`,p.innerHTML=`<span>Function</span>`;let m=document.createElement(`select`),h=document.createElement(`option`);h.value=``,h.textContent=`Tip ladder (auto)`,m.append(h);for(let e of u){let t=document.createElement(`option`);t.value=e.id,t.textContent=e.name,n.patternId===e.id&&(t.selected=!0),m.append(t)}m.addEventListener(`change`,()=>{let i=[...t];i[e]={...n,patternId:m.value},r(i)}),p.append(m);let g=document.createElement(`button`);g.type=`button`,g.className=`btn ghost tiny`,g.textContent=`Remove`,g.addEventListener(`click`,()=>{r(t.filter((t,n)=>n!==e))});let _=document.createElement(`div`);_.className=`pool-rule-toys`;let v=document.createElement(`p`);v.className=`pool-rule-toys-label`,v.textContent=l.length?`Toys (tick one or more)`:`Toys — connect a toy on Home to target`,_.append(v);for(let i of l){let a=document.createElement(`label`);a.className=`pool-rule-toy`;let o=document.createElement(`input`);o.type=`checkbox`,o.checked=n.toyIds.includes(i.id),o.addEventListener(`change`,()=>{let a=new Set(n.toyIds);o.checked?a.add(i.id):a.delete(i.id);let s=[...t];s[e]={...n,toyIds:[...a]},r(s)});let s=document.createElement(`span`);s.textContent=X(i.name||``,i.toyType,i.id),a.append(o,s),_.append(a)}a.append(s,d,p,g,_),i.append(a)}return i}function x(t,n){let r=e.getState(),i=[...r.bridges||[]],a=i[t];a&&(i[t]={...a,...n},e.setState({...r,bridges:i}),e.save({...e.readForm(),bridges:i}),p(),s())}function S(t,n){let r=e.getState(),i=[...r.chainLogs||[]],a=i[t];a&&(i[t]={...a,...n},e.setState({...r,chainLogs:i}),e.save({...e.readForm(),chainLogs:i}),p(),s())}function C(e,t){let n=document.createElement(`li`);n.className=t.enabled===!1?`pool-row is-off`:`pool-row`,t.open&&n.classList.add(`is-editing`);let r=document.createElement(`label`);r.className=`pool-enable`;let i=document.createElement(`input`);i.type=`checkbox`,i.checked=t.enabled,i.addEventListener(`change`,()=>t.onToggle(i.checked));let a=document.createElement(`span`);a.textContent=`On`,r.append(i,a);let o=document.createElement(`div`);o.className=`pool-body`;let s=document.createElement(`p`);s.className=`pool-title`,s.textContent=t.title;let c=document.createElement(`p`);c.className=`pool-meta`,c.textContent=t.meta,o.append(s,c);let l=document.createElement(`div`);l.className=`pool-row-actions`;let u=document.createElement(`button`);u.type=`button`,u.className=`btn ghost tiny`,u.textContent=t.open?`Done`:`Alert`,u.addEventListener(`click`,t.onEdit);let d=document.createElement(`button`);d.type=`button`,d.className=`btn ghost tiny`,d.textContent=`Remove`,d.addEventListener(`click`,t.onRemove),l.append(u,d),n.append(r,o,l),t.panel&&n.append(t.panel),e.append(n)}function w(e,t,n,r){let i=document.createElement(`label`);i.className=`field settings-toggle-field pool-obs-toggle`;let a=document.createElement(`input`);a.type=`checkbox`,a.checked=e!==!1,a.addEventListener(`change`,()=>n(a.checked));let o=document.createElement(`span`);o.textContent=`Show on stream overlay`,i.append(o,a);let s=document.createElement(`label`);s.className=`field narrow`,s.innerHTML=`<span>OBS min</span>`;let c=document.createElement(`input`);return c.type=`number`,c.min=`0`,c.step=`any`,c.placeholder=`stream default`,c.value=t==null?``:String(t),c.addEventListener(`change`,()=>{let e=c.value.trim();if(!e){r(null);return}let t=Number(e);r(Number.isFinite(t)&&t>=0?t:null)}),s.append(c),[i,s]}function T(){let i=e.$(`bridge-list`),a=e.$(`bridge-list-empty`);if(!i||!a)return;let o=e.getState().bridges||[];i.replaceChildren();for(let a=0;a<o.length;a++){let c=o[a],l=n===c.id,u=l?document.createElement(`div`):void 0;if(u){u.className=`pool-alert-panel`;let e=document.createElement(`label`);e.className=`field narrow`,e.innerHTML=`<span>Scan min</span>`;let t=document.createElement(`input`);t.type=`number`,t.min=`0`,t.step=`any`,t.value=String(c.minAmount||0),t.addEventListener(`change`,()=>{let e=Number(t.value);x(a,{minAmount:Number.isFinite(e)&&e>=0?e:0})}),e.append(t);let n=document.createElement(`label`);n.className=`field`,n.innerHTML=`<span>Direction</span>`;let r=document.createElement(`select`);for(let[e,t]of[[`both`,`In and out`],[`in`,`Deposits in`],[`out`,`Withdrawals out`]]){let n=document.createElement(`option`);n.value=e,n.textContent=t,c.direction===e&&(n.selected=!0),r.append(n)}r.addEventListener(`change`,()=>{x(a,{direction:r.value})}),n.append(r);let i=document.createElement(`label`);i.className=`field settings-toggle-field pool-obs-toggle`;let o=document.createElement(`input`);o.type=`checkbox`,o.checked=c.tokenTxBackup!==!1,o.addEventListener(`change`,()=>{x(a,{tokenTxBackup:o.checked})});let s=document.createElement(`span`);s.textContent=`Token tx backup`,i.append(s,o);let l=document.createElement(`p`);l.className=`hint pool-alert-hint`,l.textContent=c.token?`If OmniBridge logs miss, also watch Transfer mint/burn on the filtered token (same min / rules). Official bridge events still win for the same tx.`:`If OmniBridge logs miss, also watch Transfer mint/burn on bridged HEX / WETH / USDC / USDT / DAI. Official bridge events still win for the same tx.`;let[d,f]=w(c.overlayAlert,c.overlayMinAmount,e=>x(a,{overlayAlert:e}),e=>x(a,{overlayMinAmount:e}));u.append(e,n,i,l,d,f,b(c.buzzRules||[],c.minAmount,e=>x(a,{buzzRules:e})))}C(i,{enabled:c.enabled!==!1,title:c.label,meta:`${c.address.slice(0,10)}… · ${c.direction} · min ${c.minAmount}${c.tokenTxBackup===!1?``:` · tx backup`} · ${y(c)}`,open:l,onToggle:e=>x(a,{enabled:e}),onEdit:()=>{n=l?null:c.id,t=null,r=null,p()},onRemove:()=>{let t=e.getState(),r=(t.bridges||[]).filter((e,t)=>t!==a);n===c.id&&(n=null),e.setState({...t,bridges:r}),e.save({...e.readForm(),bridges:r}),p(),s()},panel:u})}a.hidden=o.length>0}function E(){let i=e.$(`log-list`),a=e.$(`log-list-empty`);if(!i||!a)return;let o=e.getState().chainLogs||[];i.replaceChildren();for(let a=0;a<o.length;a++){let c=o[a],l=r===c.id,u=l?document.createElement(`div`):void 0;if(u){u.className=`pool-alert-panel`;let e=document.createElement(`label`);e.className=`field narrow`,e.innerHTML=`<span>Scan min</span>`;let t=document.createElement(`input`);t.type=`number`,t.min=`0`,t.step=`any`,t.value=String(c.minAmount||0),t.addEventListener(`change`,()=>{let e=Number(t.value);S(a,{minAmount:Number.isFinite(e)&&e>=0?e:0})}),e.append(t);let[n,r]=w(c.overlayAlert,c.overlayMinAmount,e=>S(a,{overlayAlert:e}),e=>S(a,{overlayMinAmount:e}));u.append(e,n,r,b(c.buzzRules||[],c.minAmount,e=>S(a,{buzzRules:e})))}C(i,{enabled:c.enabled!==!1,title:c.label,meta:`${c.address.slice(0,10)}… · ${c.eventAbi.slice(0,42)}${c.eventAbi.length>42?`…`:``} · min ${c.minAmount} · ${y(c)}`,open:l,onToggle:e=>S(a,{enabled:e}),onEdit:()=>{r=l?null:c.id,t=null,n=null,p()},onRemove:()=>{let t=e.getState(),n=(t.chainLogs||[]).filter((e,t)=>t!==a);r===c.id&&(r=null),e.setState({...t,chainLogs:n}),e.save({...e.readForm(),chainLogs:n}),p(),s()},panel:u})}a.hidden=o.length>0}function D(){let t=e.$(`bridge-form-status`),n=e.$(`bridge-token`).value.trim(),r=Cl({address:e.$(`bridge-address`).value.trim(),label:e.$(`bridge-label`).value.trim(),minAmount:Number(e.$(`bridge-min`).value)||0,direction:e.$(`bridge-dir`).value,token:n,quoteSymbol:`TOKEN`,decimals:18,overlayAlert:!0,overlayMinAmount:null,buzzRules:[],enabled:!0,tokenTxBackup:!0});if(!r){t.textContent=`Invalid mediator address`;return}let i=e.getState();if((i.bridges||[]).some(e=>e.address.toLowerCase()===r.address.toLowerCase())){t.textContent=`Bridge already listed`;return}let a=[...i.bridges||[],r];e.setState({...i,bridges:a}),e.save({...e.readForm(),bridges:a}),e.$(`bridge-address`).value=``,e.$(`bridge-label`).value=``,t.textContent=`Added ${r.label} (On)`,p(),e.getState().poolWatch||(t.textContent=`Added ${r.label} — turn on Watch chain events to listen`)}function ee(){let t=e.getState(),{bridges:n,added:r}=Al(t.bridges||[]);e.setState({...t,bridges:n}),e.save({...e.readForm(),bridges:n}),p(),e.$(`bridge-form-status`).textContent=r?`Loaded ${r} OmniBridge preset (Off — tick to watch)`:`OmniBridge already listed — tick On to watch`,e.$(`bridge-address`).value.trim()||(e.$(`bridge-address`).value=hl,e.$(`bridge-label`).value=`PulseChain OmniBridge`)}function te(){let t=e.$(`log-form-status`),n=e.$(`log-abi`).value.trim();if(!Nl(n)){t.textContent=`Invalid event ABI — example: Transfer(address indexed from, address indexed to, uint256 value)`;return}let r=Pl({address:e.$(`log-address`).value.trim(),label:e.$(`log-label`).value.trim(),eventAbi:n,amountArg:e.$(`log-amount-arg`).value.trim(),minAmount:Number(e.$(`log-min`).value)||0,decimals:Number(e.$(`log-decimals`).value)||18,quoteSymbol:e.$(`log-symbol`).value.trim()||`TOKEN`,overlayAlert:!0,overlayMinAmount:null,buzzRules:[],enabled:!0});if(!r){t.textContent=`Invalid contract address or event ABI`;return}let i=e.getState();if((i.chainLogs||[]).some(e=>e.address.toLowerCase()===r.address.toLowerCase()&&e.eventAbi.toLowerCase()===r.eventAbi.toLowerCase())){t.textContent=`Event already listed on that contract`;return}let a=[...i.chainLogs||[],r];e.setState({...i,chainLogs:a}),e.save({...e.readForm(),chainLogs:a}),e.$(`log-address`).value=``,e.$(`log-label`).value=``,t.textContent=`Added ${r.label} (On)`,p(),e.getState().poolWatch||(t.textContent=`Added ${r.label} — turn on Watch chain events to listen`)}function O(){e.$(`pool-watch-enabled`).addEventListener(`change`,m),e.$(`btn-pool-add`).addEventListener(`click`,h),e.$(`btn-pool-presets`).addEventListener(`click`,g),e.$(`btn-pools-all`).addEventListener(`click`,_),e.$(`btn-pools-none`).addEventListener(`click`,v),e.$(`btn-bridge-add`).addEventListener(`click`,D),e.$(`btn-bridge-presets`).addEventListener(`click`,ee),e.$(`btn-log-add`).addEventListener(`click`,te)}return{paintPoolPanel:p,wire:O}}var nb=`pulsefans.payments.v1`;function rb(e){return Number.isFinite(e)?e:0}function ib(e){return{v:1,savedAt:Date.now(),items:e.slice(0,200).map(e=>({id:e.id,hash:String(e.hash),from:String(e.from),to:String(e.to),amount:rb(e.amount),amountRaw:e.amountRaw.toString(),symbol:e.symbol||``,token:e.token?String(e.token):null,blockNumber:e.blockNumber.toString(),timestamp:e.timestamp||Date.now(),source:e.source,poolLabel:e.poolLabel,poolAddress:e.poolAddress?String(e.poolAddress):void 0,poolSide:e.poolSide,eventKind:e.eventKind,triggerId:e.triggerId,dryRun:e.dryRun,feel:e.feel,force:e.force}))}}function ab(e){if(!e||typeof e!=`object`)return[];let t=e;if(!Array.isArray(t.items))return[];let n=[],r=new Set;for(let e of t.items){if(!e||typeof e!=`object`)continue;let t=e;if(typeof t.id!=`string`||!t.id||r.has(t.id))continue;r.add(t.id);let i;try{i=BigInt(String(t.amountRaw||`0`))}catch{i=0n}let a;try{a=BigInt(String(t.blockNumber||`0`))}catch{a=0n}if(n.push({id:t.id.slice(0,80),hash:String(t.hash||`0x`),from:String(t.from||`0x`),to:String(t.to||`0x`),amount:rb(Number(t.amount)),amountRaw:i,symbol:String(t.symbol||``).slice(0,24)||`TOKEN`,token:t.token?String(t.token):null,blockNumber:a,timestamp:Number(t.timestamp)||Date.now(),source:t.source===`pool`?`pool`:t.source===`wallet`?`wallet`:void 0,poolLabel:t.poolLabel?String(t.poolLabel).slice(0,64):void 0,poolAddress:t.poolAddress?String(t.poolAddress).slice(0,64):void 0,poolSide:t.poolSide?String(t.poolSide).slice(0,32):void 0,eventKind:Yc(t.eventKind)?t.eventKind:void 0,triggerId:t.triggerId?String(t.triggerId).slice(0,48):void 0,dryRun:!!t.dryRun,feel:t.feel?String(t.feel).slice(0,160):void 0,force:t.force}),n.length>=200)break}return n}function ob(e,t,n){let r=(t||`TOKEN`).trim()||`TOKEN`,i=e.get(r);if(i){i.amount+=n,i.count+=1;return}e.set(r,{symbol:r,amount:n,count:1})}function sb(e){return[...e.values()].sort((e,t)=>t.amount-e.amount||e.symbol.localeCompare(t.symbol))}function cb(e){let t=new Map,n=new Map,r=0,i=0,a=0;for(let o of e){let e=rb(o.amount);if(o.dryRun||o.force){a+=1;continue}if(o.source===`pool`){ob(n,o.symbol,e),i+=1;continue}ob(t,o.symbol,e),r+=1}return{tips:sb(t),tipCount:r,pools:sb(n),poolCount:i,excludedCount:a,totalLogged:e.length}}function lb(e){if(!Number.isFinite(e)||e===0)return`0`;let t=Math.abs(e);return t>=1e6||t>=1e3?e.toLocaleString(void 0,{maximumFractionDigits:2}):t>=1?e.toLocaleString(void 0,{maximumFractionDigits:4}):e.toLocaleString(void 0,{maximumFractionDigits:6,minimumFractionDigits:0})}function ub(){try{let e=localStorage.getItem(nb);return e?ab(JSON.parse(e)):[]}catch{return[]}}function db(e){try{localStorage.setItem(nb,JSON.stringify(ib(e)))}catch{}}function fb(){try{localStorage.removeItem(nb)}catch{}}function pb(e,t,n){let r=new Blob([t],{type:n}),i=document.createElement(`a`);i.href=URL.createObjectURL(r),i.download=e,i.click(),URL.revokeObjectURL(i.href)}function mb(e){let t=new Date().toISOString().slice(0,10),n={app:Fh,version:Lh,exportedAt:new Date().toISOString(),count:e.length,...ib(e)};pb(`${Ih}-payments-${t}.json`,JSON.stringify(n,null,2),`application/json`)}function hb(e){return/[",\n\r]/.test(e)?`"${e.replace(/"/g,`""`)}"`:e}function gb(e){let t=new Date().toISOString().slice(0,10),n=[[`time_iso`,`timestamp_ms`,`kind`,`amount`,`symbol`,`token`,`from`,`to`,`tx_hash`,`block`,`pool`,`side`,`dry_run`,`feel`,`pattern`,`toy_id`].join(`,`)];for(let t of e){let e=t.source===`pool`?`swap`:t.force?`sim`:`tip`;n.push([new Date(t.timestamp).toISOString(),String(t.timestamp),e,String(t.amount),t.symbol,t.token||``,String(t.from),String(t.to),String(t.hash),t.blockNumber.toString(),t.poolLabel||``,t.poolSide||``,t.dryRun?`1`:`0`,t.feel||``,t.force?.pattern||``,t.force?.toyId||``].map(e=>hb(String(e))).join(`,`))}pb(`${Ih}-payments-${t}.csv`,n.join(`
`),`text/csv;charset=utf-8`)}function _b(e,t){let n=e.querySelector(`#${t}`);if(!n)throw Error(`#${t} missing`);return n}function vb(e){return e.length>12?`${e.slice(0,6)}…${e.slice(-4)}`:e}function yb(e){return e.source===`pool`}function bb(e,t){let n=e/Math.max(t||0,1);return n>=50?`tip-tier-3`:n>=10?`tip-tier-2`:n>=3?`tip-tier-1`:``}function xb(e,t,n){let r=yb(t),i=e.getState(),a=r?``:bb(t.amount,i.minAmount),o=e.plansForPayment(t),s=o[0]||null,c=Lc[e.getState().chainKey].chain.blockExplorers?.default.url,l=c?`<a href="${c}/tx/${t.hash}" target="_blank" rel="noreferrer">${vb(t.hash)}</a>`:vb(t.hash),u=r?`${Zc(t.eventKind)}${t.poolLabel?` · ${t.poolLabel}`:``}${t.poolSide&&t.poolSide!==`all`?` · ${t.poolSide}`:``}`:t.force?`sim`:`tip`,d=o.length?e.feedFeelLine(t,o):t.dryRun?`dry-run · under menu · no pattern`:`under menu · no buzz`;t.feel!==d&&(t.feel=d,n.dirty=!0);let f=s?.price!=null&&Number.isFinite(s.price)&&Math.abs(s.price-t.amount)>1e-9?` (pays ${t.amount.toLocaleString(void 0,{maximumFractionDigits:4})})`:``;return`<li class="${[a,t.dryRun?`feed-dry`:``,r?`feed-pool`:``,t.force?`feed-sim`:``].filter(Boolean).join(` `)}">
    <div class="pay-main">
      <strong>${t.amount.toLocaleString(void 0,{maximumFractionDigits:6})} ${t.symbol}${f}</strong>
      <span class="muted">${u} · ${d}</span>
    </div>
    <div class="pay-meta">
      <span>${t.force?s?.toyId?`target ${e.resolveToyFeedLabel(s.toyId,t.force.toyLabel)}`:`spoof tip (no linked toy id)`:`from ${vb(t.from)}`}</span>
      <span>${l}</span>
      <span>${new Date(t.timestamp).toLocaleTimeString()}</span>
    </div>
  </li>`}function Sb(e){function t(){db(e.getFeed())}let n=null,r=``,i=null;function a(e){e.classList.remove(`earn-punch`),e.offsetWidth,e.classList.add(`earn-punch`),setTimeout(()=>e.classList.remove(`earn-punch`),400)}function o(){return e.getFeed().filter(e=>!yb(e))}function s(){return e.getFeed().filter(yb)}function c(){let t=e.$(`pay-earnings-total`),s=e.$(`pay-earnings-meta`),c=e.$(`pay-earnings`);if(!t||!s||!c)return;let l=cb(o());if(!l.tipCount){t.textContent=`0`,s.textContent=l.excludedCount?`No tips yet · ${l.excludedCount} dry/sim excluded`:`No tips yet`,c.classList.toggle(`has-earnings`,!1),c.classList.remove(`first-tip`),i&&clearTimeout(i),i=null,n=0,r=``;return}let u=l.tips.map(e=>`${lb(e.amount)} ${e.symbol}`).join(` · `),d=[`${l.tipCount} tip${l.tipCount===1?``:`s`}`];l.excludedCount&&d.push(`${l.excludedCount} dry/sim excluded`),s.textContent=d.join(` · `);let f=n===null;t.textContent=u,!f&&u!==r&&a(t),!f&&n===0&&l.tipCount===1&&(c.classList.add(`first-tip`),i&&clearTimeout(i),i=setTimeout(()=>{c.classList.remove(`first-tip`)},2e3)),c.classList.toggle(`has-earnings`,!0),n=l.tipCount,r=u}function l(){let t=e.$(`pool-earnings-total`),n=e.$(`pool-earnings-meta`),r=e.$(`pool-earnings`),i=e.$(`pool-feed-pill`);if(!t||!n||!r)return;let a=cb(s()),o=a.poolCount;if(i&&(i.textContent=o?`${o} event${o===1?``:`s`}`:`no events`,i.classList.toggle(`on`,o>0)),!o){t.textContent=`0`,n.textContent=a.excludedCount?`No chain events yet · ${a.excludedCount} dry/sim excluded`:`No chain events yet`,r.classList.toggle(`has-earnings`,!1);return}t.textContent=a.pools.map(e=>`${lb(e.amount)} ${e.symbol}`).join(` · `);let c=[`${o} event${o===1?``:`s`}`];a.excludedCount&&c.push(`${a.excludedCount} dry/sim excluded`),n.textContent=c.join(` · `),r.classList.toggle(`has-earnings`,!0)}function u(){let n={dirty:!1},r=o(),i=s(),a=e.$(`feed`),u=e.$(`feed-empty`);u.hidden=r.length>0,a.innerHTML=r.map(t=>xb(e,t,n)).join(``),c();let d=e.$(`pool-feed`),f=e.$(`pool-feed-empty`);d&&f&&(f.hidden=i.length>0,d.innerHTML=i.map(t=>xb(e,t,n)).join(``),l()),n.dirty&&t()}function d(n){let r=e.getFeed();r.unshift(n),r.length>200&&(r.length=200),u(),t()}function f(){e.$(`btn-clear`).addEventListener(`click`,()=>{let n=e.getFeed();if(!n.filter(e=>!yb(e)).length||!confirm(`Clear wallet tip history? Chain events stay in Chain events below.`))return;let r=n.filter(yb);n.length=0,n.push(...r),n.length?t():fb(),u()});let n=e.$(`btn-clear-pools`);n&&n.addEventListener(`click`,()=>{let n=e.getFeed();if(!n.filter(yb).length||!confirm(`Clear chain event history? Wallet tips stay in Wallet tips above.`))return;let r=n.filter(e=>!yb(e));n.length=0,n.push(...r),n.length?t():fb(),u()}),e.$(`btn-export-payments-json`).addEventListener(`click`,()=>{let t=e.getFeed();if(!t.length){e.showError(`No payments to export yet`);return}mb(t),e.showError(``)}),e.$(`btn-export-payments-csv`).addEventListener(`click`,()=>{let t=e.getFeed();if(!t.length){e.showError(`No payments to export yet`);return}gb(t),e.showError(``)})}return{addPayment:d,persistPaymentLog:t,paintEarnings:c,paintFeed:u,wire:f}}function Cb(e){return e.trim().replace(/^Local\s*IP:\s*/i,``).trim()}var wb=`https://XXX-XXX-X-XXX.lovense.club:XXXXX/GetToys`,Tb=/^https?:\/\/x+(?:-x+)*\.lovense\.club(?::x+)?(?:\/GetToys)?\/?$/i;function Eb(e){let t=String(e||``).trim();if(!t||/^https?:\/\/$/i.test(t)||Tb.test(t))return!0;let n=Cb(t);return!n||/^https?:\/\/$/i.test(n)||Tb.test(n)}function Db(e){return Eb(e)?wb:Cb(e)}function Ob(e){return e.trim().replace(/^APPID:\s*/i,``).trim()}function kb(e){let t=String(e||``).replace(/\u00a0/g,` `).trim();if(!t)return{localIp:``,appId:``};let n=``,r=t.match(/APPID\s*:?\s*([A-Za-z0-9_-]+)/i);r&&(n=Ob(r[1]));let i=t,a=t.match(/Local\s*IP\s*:?\s*(\S+)/i);return i=a?a[1]:t.replace(/APPID\s*:?\s*[A-Za-z0-9_-]+/gi,` `).replace(/^[\s\S]*?\bLocal\s*IP\s*:?\s*/i,``).split(/\r?\n/)[0].trim(),{localIp:Cb(i),appId:n}}async function Ab(e){let t=await fetch(`/api/lovense`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify(e)}),n=await t.text(),r=n;try{r=JSON.parse(n)}catch{}if(!t.ok){let e=typeof r==`object`&&r&&`error`in r?String(r.error):n.slice(0,200);throw Error(e||`HTTP ${t.status}`)}return r}var jb=class{base=``;toys=[];rawLocalIp=``;setLocalIp(e){this.rawLocalIp=Cb(e)}async probe(e,t){let n=Cb(e||this.rawLocalIp);if(!n)throw Error(`Local IP missing`);let r=await Ab({op:`probe`,localIp:n,...t?.mode===`remote`?{mode:`remote`}:{}});return r.ok&&r.base?(this.base=r.base,this.toys=(r.list||[]).map(Mb)):(this.base=``,this.toys=[]),r}async discover(){return await Ab({op:`discover`})}async refreshToys(){if(!this.base)throw Error(`Not connected`);let e=await Ab({op:`toys`,base:this.base});if(!e.ok)throw Error(e.error||`GetToys failed`);return this.toys=(e.list||[]).map(Mb),this.toys}async drive(e,t,n,r,i,a){if(!this.base)throw Error(`Not connected`);let o=Math.max(0,Math.min(20,Math.round(e*20))),s=a?.length?a.map(e=>Math.max(0,Math.min(20,Math.round((Number(e)||0)*20)))):void 0,c=(n?this.toys.filter(n):this.toys).map(e=>{let t=r?.[e.id],n={...e};return t?.length&&(n.motorMask=t),s&&(n.motorLevels=s),i&&(n.driveAxis=i),n});return await Ab({op:`vibrate`,base:this.base,intensity:o,durationSec:t,toys:c})}async vibrate(e,t,n,r){return this.drive(e,t,n,r)}async testChannel(e,t,n=.9,r=3){if(!this.base)throw Error(`Not connected`);let i=Math.max(0,Math.min(20,Math.round(n*20))),a=this.toys.find(t=>t.id===e);return await Ab({op:`channel`,base:this.base,channel:t,intensity:i,durationSec:r,toyId:e,toys:a?[a]:[]})}async stop(e){if(!this.base)return;let t=e?this.toys.filter(e):this.toys;await this.stopOn(this.base,t)}async stopOn(e,t=[]){e&&await Ab({op:`stop`,base:e,toys:t})}clear(){this.base=``,this.toys=[]}};function Mb(e){return{id:String(e.id||``),name:String(e.name||e.nickName||e.toyType||`toy`),nickName:String(e.nickName||``),toyType:String(e.toyType||`lovense`),connected:!!e.connected,status:String(e.status||(e.connected?`online`:`offline`)),battery:e.battery!=null&&Number.isFinite(Number(e.battery))?Number(e.battery):null,motors:Math.max(1,Number(e.motors)||1),functions:Array.isArray(e.functions)?e.functions.map(String):[],secondary:{rotate:!!e.secondary?.rotate,air:!!e.secondary?.air,pump:!!e.secondary?.pump,thrust:!!e.secondary?.thrust},extra:e.extra&&typeof e.extra==`object`?e.extra:{},liveLevel:e.liveLevel!=null&&Number.isFinite(Number(e.liveLevel))?Number(e.liveLevel):null,liveAction:e.liveAction==null?null:String(e.liveAction)}}var Nb=`optional`,Pb=`Open Lovense Connect on your phone (same Wi‑Fi), then click Connect.`,Fb=`Lovense Remote → Discover → Game Mode → Enable LAN. Paste Local IP, then click Connect.`,Ib=`https://www.lovense.com/cam-model/extension`;function Lb(e){let{backend:t,deviceUrl:n,appId:r,chain:i,rpcList:a,receive:o,receiveLabel:s,minAmount:c,token:l,tokenDecimals:u,tokenSymbol:d,tokenLabel:f,night:p,queueGap:m,maxQueue:h,pollMs:g,status:_,importFile:v}=e.elements;function y(){let s=e.getState(),f=e.parseRpcList(a.value);return{...s,chainKey:i.value,backend:t.value,receive:o.value.trim(),rpcList:f.length?e.formatRpcList(f.join(`
`)):a.value.trim(),minAmount:Number(c.value)||0,tokenAddress:l.value.trim(),tokenDecimals:Number(u.value)||18,tokenSymbol:d.value.trim()||`TOKEN`,overlayStyle:e.getOverlayStyle(),overlayQr:e.getOverlayQr(),overlayMenu:e.getOverlayMenu(),intifaceUrl:t.value===`intiface`?n.value.trim():s.intifaceUrl,lovenseLocalIp:t.value===`lovense`||t.value===`lovense-remote`?Eb(n.value)?``:Cb(n.value):s.lovenseLocalIp,lovenseAppId:t.value===`lovense`?r.value.trim():s.lovenseAppId}}function b(){let t=y();U(t.receive)&&(t={...t,savedWallets:Hf(t.savedWallets,t.receive)}),e.setState(t);let n=e.save(t);return e.applyDeviceSettings(),e.applyQueueSettings(),e.paintSavedWallets(),n}function x(){document.documentElement.classList.toggle(`night`,e.getState().nightMode),document.documentElement.classList.toggle(`day`,!e.getState().nightMode)}function S(){let t=e.getState();p.checked=t.nightMode,m.value=String(t.queueGapMs),h.value=String(t.maxQueue),g.value=String(t.pollMs),_.textContent=``,e.paintPoolPanel()}function C(){let n=e.getState();t.value=n.backend,i.value=n.chainKey,o.value=n.receive,s.value=e.labelForAddress(n.receive),a.value=n.rpcList,c.value=String(n.minAmount),l.value=n.tokenAddress,u.value=String(n.tokenDecimals),d.value=n.tokenSymbol,f.value=e.tokenLabelForAddress(n.tokenAddress),r.value=n.lovenseAppId,e.syncUrlField(),e.paintRpcCount(),x(),e.paintAddressPill(),e.paintSavedWallets(),e.paintSavedTokens(),e.paintSession(),e.paintPatterns(),e.paintPoolPanel(),e.applyDeviceSettings()}function w(){b();let t={...e.getState(),nightMode:p.checked,dryRun:!1,queueGapMs:Zg(m.value,0,1e4,Y.queueGapMs),maxQueue:Zg(h.value,1,256,Y.maxQueue),pollMs:Zg(g.value,1500,3e4,Y.pollMs)};e.setState(t),e.save(t),x(),e.applyQueueSettings(),e.paintMode(),e.paintWatch(),e.paintQueue(),e.paintSession(),S(),_.textContent=e.isWatching()?`Saved. Restart watching if you changed the chain check interval.`:`Saved.`}function T(){b();let t=new Blob([JSON.stringify(e.getState(),null,2)],{type:`application/json`}),n=document.createElement(`a`);n.href=URL.createObjectURL(t),n.download=`${Ih}-settings-${new Date().toISOString().slice(0,10)}.json`,n.click(),URL.revokeObjectURL(n.href),_.textContent=`Exported settings file.`}function E(t){C(),x(),e.applyDeviceSettings(),e.applyQueueSettings(),e.paintMode(),e.paintWatch(),e.paintQueue(),e.paintSession(),e.paintPatterns(),S(),_.textContent=t}function D(t){if(!t||typeof t!=`object`)throw Error(`Invalid settings file`);let n=s_(t,e.getState());e.setState(n),e.save(n),E(`Imported. Restart watching if poll interval changed.`)}function ee(){if(!confirm(`Reset all Just The Tip settings to defaults? Wallet, device IP, patterns, and prices will clear.`))return;let t=structuredClone(Y);e.setState(t),e.save(t),E(`Reset to defaults.`)}function te(){e.$(`btn-settings-save`).addEventListener(`click`,w),e.$(`btn-settings-export`).addEventListener(`click`,T),e.$(`btn-settings-reset`).addEventListener(`click`,ee),v.addEventListener(`change`,()=>{let e=v.files?.[0];if(!e)return;let t=new FileReader;t.onload=()=>{try{D(JSON.parse(String(t.result||``)))}catch(e){_.textContent=e instanceof Error?e.message:`Could not import settings`}},t.onerror=()=>{_.textContent=`Could not read file`},t.readAsText(e),v.value=``}),p.addEventListener(`change`,()=>{let t=e.getState();e.setState({...t,nightMode:p.checked}),e.save({...y(),nightMode:p.checked}),x()})}return{readForm:y,persist:b,applyTheme:x,fillSettingsForm:S,applyForm:C,wire:te}}var Rb=t(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=`~`;function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1));function a(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,n,i,o){if(typeof n!=`function`)throw TypeError(`The listener must be a function`);var s=new a(n,i||e,o),c=r?r+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function s(e,t){--e._eventsCount===0?e._events=new i:delete e._events[t]}function c(){this._events=new i,this._eventsCount=0}c.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)n.call(t,i)&&e.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e},c.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,a=n.length,o=Array(a);i<a;i++)o[i]=n[i].fn;return o},c.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},c.prototype.emit=function(e,t,n,i,a,o){var s=r?r+e:e;if(!this._events[s])return!1;var c=this._events[s],l=arguments.length,u,d;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,a),!0;case 6:return c.fn.call(c.context,t,n,i,a,o),!0}for(d=1,u=Array(l-1);d<l;d++)u[d-1]=arguments[d];c.fn.apply(c.context,u)}else{var f=c.length,p;for(d=0;d<f;d++)switch(c[d].once&&this.removeListener(e,c[d].fn,void 0,!0),l){case 1:c[d].fn.call(c[d].context);break;case 2:c[d].fn.call(c[d].context,t);break;case 3:c[d].fn.call(c[d].context,t,n);break;case 4:c[d].fn.call(c[d].context,t,n,i);break;default:if(!u)for(p=1,u=Array(l-1);p<l;p++)u[p-1]=arguments[p];c[d].fn.apply(c[d].context,u)}}return!0},c.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},c.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},c.prototype.removeListener=function(e,t,n,i){var a=r?r+e:e;if(!this._events[a])return this;if(!t)return s(this,a),this;var o=this._events[a];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&s(this,a);else{for(var c=0,l=[],u=o.length;c<u;c++)(o[c].fn!==t||i&&!o[c].once||n&&o[c].context!==n)&&l.push(o[c]);l.length?this._events[a]=l.length===1?l[0]:l:s(this,a)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&s(this,t)):(this._events=new i,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=r,c.EventEmitter=c,t!==void 0&&(t.exports=c)})),zb=t((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ButtplugLogger=e.LogMessage=e.ButtplugLogLevel=void 0;var t=Rb(),n;(function(e){e[e.Off=0]=`Off`,e[e.Error=1]=`Error`,e[e.Warn=2]=`Warn`,e[e.Info=3]=`Info`,e[e.Debug=4]=`Debug`,e[e.Trace=5]=`Trace`})(n||(e.ButtplugLogLevel=n={}));var r=class{timestamp;logMessage;logLevel;constructor(e,t){let n=new Date,r=n.getHours(),i=n.getMinutes(),a=n.getSeconds();this.timestamp=`${r}:${i}:${a}`,this.logMessage=e,this.logLevel=t}get Message(){return this.logMessage}get LogLevel(){return this.logLevel}get Timestamp(){return this.timestamp}get FormattedMessage(){return`${n[this.logLevel]} : ${this.timestamp} : ${this.logMessage}`}};e.LogMessage=r,e.ButtplugLogger=class e extends t.EventEmitter{static sLogger=void 0;maximumConsoleLogLevel=n.Off;maximumEventLogLevel=n.Off;static get Logger(){return e.sLogger===void 0&&(e.sLogger=new e),this.sLogger}constructor(){super()}get MaximumConsoleLogLevel(){return this.maximumConsoleLogLevel}set MaximumConsoleLogLevel(e){this.maximumConsoleLogLevel=e}get MaximumEventLogLevel(){return this.maximumEventLogLevel}set MaximumEventLogLevel(e){this.maximumEventLogLevel=e}Error(e){this.AddLogMessage(e,n.Error)}Warn(e){this.AddLogMessage(e,n.Warn)}Info(e){this.AddLogMessage(e,n.Info)}Debug(e){this.AddLogMessage(e,n.Debug)}Trace(e){this.AddLogMessage(e,n.Trace)}AddLogMessage(e,t){if(t>this.maximumEventLogLevel&&t>this.maximumConsoleLogLevel)return;let n=new r(e,t);t<=this.maximumConsoleLogLevel&&console.log(n.FormattedMessage),t<=this.maximumEventLogLevel&&this.emit(`log`,n)}}})),Bb=t((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),r=e&&e.__importStar||(function(){var e=function(t){return e=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},e(t)};return function(r){if(r&&r.__esModule)return r;var i={};if(r!=null)for(var a=e(r),o=0;o<a.length;o++)a[o]!=="default"&&t(i,r,a[o]);return n(i,r),i}})();Object.defineProperty(e,"__esModule",{value:!0}),e.ButtplugUnknownError=e.ButtplugPingError=e.ButtplugMessageError=e.ButtplugDeviceError=e.ButtplugInitError=e.ButtplugError=void 0;var i=r(Vb()),a=class extends Error{get ErrorClass(){return this._errorClass}get InnerError(){return this._innerError}get Id(){return this._messageId}get ErrorMessage(){return{Error:{Id:this.Id,ErrorCode:this.ErrorClass,ErrorMessage:this.message}}}static LogAndError(e,t,n,r=i.SYSTEM_MESSAGE_ID){return t.Error(n),new e(n,r)}static FromError(e){switch(e.ErrorCode){case i.ErrorClass.ERROR_DEVICE:return new s(e.ErrorMessage,e.Id);case i.ErrorClass.ERROR_INIT:return new o(e.ErrorMessage,e.Id);case i.ErrorClass.ERROR_UNKNOWN:return new u(e.ErrorMessage,e.Id);case i.ErrorClass.ERROR_PING:return new l(e.ErrorMessage,e.Id);case i.ErrorClass.ERROR_MSG:return new c(e.ErrorMessage,e.Id);default:throw Error(`Message type ${e.ErrorCode} not handled`)}}_errorClass;_innerError;_messageId;constructor(e,t,n=i.SYSTEM_MESSAGE_ID,r){super(e),this._errorClass=t,this._innerError=r,this._messageId=n}};e.ButtplugError=a;var o=class extends a{constructor(e,t=i.SYSTEM_MESSAGE_ID){super(e,i.ErrorClass.ERROR_INIT,t)}};e.ButtplugInitError=o;var s=class extends a{constructor(e,t=i.SYSTEM_MESSAGE_ID){super(e,i.ErrorClass.ERROR_DEVICE,t)}};e.ButtplugDeviceError=s;var c=class extends a{constructor(e,t=i.SYSTEM_MESSAGE_ID){super(e,i.ErrorClass.ERROR_MSG,t)}};e.ButtplugMessageError=c;var l=class extends a{constructor(e,t=i.SYSTEM_MESSAGE_ID){super(e,i.ErrorClass.ERROR_PING,t)}};e.ButtplugPingError=l;var u=class extends a{constructor(e,t=i.SYSTEM_MESSAGE_ID){super(e,i.ErrorClass.ERROR_UNKNOWN,t)}};e.ButtplugUnknownError=u})),Vb=t((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.InputCommandType=e.InputType=e.OutputType=e.ErrorClass=e.MESSAGE_SPEC_VERSION_MINOR=e.MESSAGE_SPEC_VERSION_MAJOR=e.MAX_ID=e.DEFAULT_MESSAGE_ID=e.SYSTEM_MESSAGE_ID=void 0,e.msgId=n,e.setMsgId=r;var t=Bb();e.SYSTEM_MESSAGE_ID=0,e.DEFAULT_MESSAGE_ID=1,e.MAX_ID=4294967295,e.MESSAGE_SPEC_VERSION_MAJOR=4,e.MESSAGE_SPEC_VERSION_MINOR=0;function n(e){for(let[t,n]of Object.entries(e))if(n!=null)return n.Id;throw new t.ButtplugMessageError(`Message ${e} does not have an ID.`)}function r(e,n){for(let[t,r]of Object.entries(e))if(r!=null){r.Id=n;return}throw new t.ButtplugMessageError(`Message ${e} does not have an ID.`)}var i;(function(e){e[e.ERROR_UNKNOWN=0]=`ERROR_UNKNOWN`,e[e.ERROR_INIT=1]=`ERROR_INIT`,e[e.ERROR_PING=2]=`ERROR_PING`,e[e.ERROR_MSG=3]=`ERROR_MSG`,e[e.ERROR_DEVICE=4]=`ERROR_DEVICE`})(i||(e.ErrorClass=i={}));var a;(function(e){e.Unknown=`Unknown`,e.Vibrate=`Vibrate`,e.Rotate=`Rotate`,e.Oscillate=`Oscillate`,e.Constrict=`Constrict`,e.Inflate=`Inflate`,e.Position=`Position`,e.HwPositionWithDuration=`HwPositionWithDuration`,e.Temperature=`Temperature`,e.Spray=`Spray`,e.Led=`Led`})(a||(e.OutputType=a={}));var o;(function(e){e.Unknown=`Unknown`,e.Battery=`Battery`,e.RSSI=`RSSI`,e.Button=`Button`,e.Pressure=`Pressure`})(o||(e.InputType=o={}));var s;(function(e){e.Read=`Read`,e.Subscribe=`Subscribe`,e.Unsubscribe=`Unsubscribe`})(s||(e.InputCommandType=s={}))})),Hb=t((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),r=e&&e.__importStar||(function(){var e=function(t){return e=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},e(t)};return function(r){if(r&&r.__esModule)return r;var i={};if(r!=null)for(var a=e(r),o=0;o<a.length;o++)a[o]!=="default"&&t(i,r,a[o]);return n(i,r),i}})();Object.defineProperty(e,"__esModule",{value:!0}),e.ButtplugClientDeviceFeature=void 0;var i=Bb(),a=r(Vb()),o=Rb();e.ButtplugClientDeviceFeature=class extends o.EventEmitter{_device;_feature;_sendClosure;constructor(e,t,n){super(),this._device=e,this._feature=t,this._sendClosure=n}send=async e=>await this._sendClosure(e);sendMsgExpectOk=async e=>{let t=await this.send(e);if(t.Ok===void 0)throw t.Error===void 0?new i.ButtplugMessageError(`Expected Ok or Error, and didn't get either!`):i.ButtplugError.FromError(t)};isOutputValid(e){if(this._feature.Output!==void 0&&!this._feature.Output.hasOwnProperty(e))throw new i.ButtplugDeviceError(`Feature index ${this._feature.FeatureIndex} does not support type ${e} for device ${this._device.name}`)}isInputValid(e){if(this._feature.Input!==void 0&&!this._feature.Input.hasOwnProperty(e))throw new i.ButtplugDeviceError(`Feature index ${this._feature.FeatureIndex} does not support type ${e} for device ${this._device.name}`)}valueRange(e){return Object.freeze([e[0],e[1]])}createOutputInfo(e,t){let n=Array.isArray(t.Duration)?this.valueRange(t.Duration):void 0;return Object.freeze({type:e,valueRange:this.valueRange(t.Value),...n===void 0?{}:{durationRange:n}})}createInputInfo(e,t){return Object.freeze({type:e,valueRange:this.valueRange(t.Value),commands:Object.freeze([...t.Command])})}async sendOutputCmd(e){this.isOutputValid(e.outputType);let t=e.outputType,n=this._feature.Output[t],r;if(t==a.OutputType.HwPositionWithDuration){if(e.duration===void 0)throw new i.ButtplugDeviceError(`PositionWithDuration requires duration defined`);if(r=e.duration,n.Duration!==void 0&&(r<n.Duration[0]||r>n.Duration[1]))throw new i.ButtplugDeviceError(`Duration value ${r} is not in the range ${n.Duration[0]} <= x <= ${n.Duration[1]}`)}let o,[s,c]=n.Value;if(e.percent===void 0){if(e.value===void 0)throw new i.ButtplugDeviceError(`${e.outputType} requires value defined`);o=e.value}else o=Math.ceil(s+(c-s)*e.percent);if(o<s||o>c)throw new i.ButtplugDeviceError(`${e.outputType} value ${o} is not in the range ${s} <= x <= ${c}`);let l={Value:o,Duration:r},u={};u[t.toString()]=l;let d={OutputCmd:{Id:1,DeviceIndex:this._device.index,FeatureIndex:this._feature.FeatureIndex,Command:u}};await this.sendMsgExpectOk(d)}get index(){return this._feature.FeatureIndex}get descriptor(){return this._feature.FeatureDescriptor}get featureDescriptor(){return this.descriptor}get outputs(){let e=new Map;if(this._feature.Output!==void 0)for(let[t,n]of Object.entries(this._feature.Output))e.set(t,this.createOutputInfo(t,n));return e}get inputs(){let e=new Map;if(this._feature.Input!==void 0)for(let[t,n]of Object.entries(this._feature.Input))e.set(t,this.createInputInfo(t,n));return e}output(e){let t=this._feature.Output?.[e];if(t!==void 0)return this.createOutputInfo(e,t)}input(e){let t=this._feature.Input?.[e];if(t!==void 0)return this.createInputInfo(e,t)}inputReadingsFromMessage(e){if(e.FeatureIndex!==this._feature.FeatureIndex)return[];let t=[];for(let[n,r]of Object.entries(e.Reading))t.push(Object.freeze({device:this._device,feature:this,inputType:n,value:r.Value}));return t}emitInputReading(e){let t=this.inputReadingsFromMessage(e);for(let e of t)this.emit(`inputreading`,e);return t}hasOutput(e){return this._feature.Output!==void 0&&this._feature.Output.hasOwnProperty(e.toString())}hasInput(e){return this._feature.Input!==void 0&&this._feature.Input.hasOwnProperty(e.toString())}async runOutput(e){if(this._feature.Output!==void 0&&this._feature.Output.hasOwnProperty(e.outputType.toString()))return this.sendOutputCmd(e);throw new i.ButtplugDeviceError(`Output type ${e.outputType} not supported by feature.`)}async runInput(e,t){this.isInputValid(e);let n=this._feature.Input[e];if(t===a.InputCommandType.Unsubscribe&&!n.Command.includes(a.InputCommandType.Subscribe)&&!n.Command.includes(t))throw new i.ButtplugDeviceError(`${e} does not support command ${t}`);let r={InputCmd:{Id:1,DeviceIndex:this._device.index,FeatureIndex:this._feature.FeatureIndex,Type:e,Command:t}};if(t==a.InputCommandType.Read){let t=await this.send(r);if(t.InputReading!==void 0){let n=this.inputReadingsFromMessage(t.InputReading).find(t=>t.inputType===e);if(n===void 0)throw new i.ButtplugMessageError(`Expected ${e} reading, and didn't get one.`);return n}throw t.Error===void 0?new i.ButtplugMessageError(`Expected InputReading or Error, and didn't get either!`):i.ButtplugError.FromError(t)}await this.sendMsgExpectOk(r)}}})),Ub=t((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),r=e&&e.__importStar||(function(){var e=function(t){return e=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},e(t)};return function(r){if(r&&r.__esModule)return r;var i={};if(r!=null)for(var a=e(r),o=0;o<a.length;o++)a[o]!=="default"&&t(i,r,a[o]);return n(i,r),i}})();Object.defineProperty(e,"__esModule",{value:!0}),e.ButtplugClientDevice=void 0;var i=r(Vb()),a=Bb(),o=Rb(),s=Hb();e.ButtplugClientDevice=class e extends o.EventEmitter{_deviceInfo;_sendClosure;_features;get name(){return this._deviceInfo.DeviceName}get displayName(){return this._deviceInfo.DeviceDisplayName}get index(){return this._deviceInfo.DeviceIndex}get messageTimingGap(){return this._deviceInfo.DeviceMessageTimingGap}get features(){return new Map(this._features)}static fromMsg(t,n){return new e(t,n)}constructor(e,t){super(),this._deviceInfo=e,this._sendClosure=t,this._features=new Map(Object.entries(e.DeviceFeatures).map(([e,n])=>[parseInt(e),new s.ButtplugClientDeviceFeature(this,n,t)]))}async send(e){return await this._sendClosure(e)}sendMsgExpectOk=async e=>{let t=await this.send(e);if(t.Ok===void 0&&t.Error!==void 0)throw a.ButtplugError.FromError(t)};isOutputValid(e,t){if(!this._deviceInfo.DeviceFeatures.hasOwnProperty(e))throw new a.ButtplugDeviceError(`Feature index ${e} does not exist for device ${this.name}`);if(this._deviceInfo.DeviceFeatures[e].Output!==void 0&&!this._deviceInfo.DeviceFeatures[e].Output.hasOwnProperty(t))throw new a.ButtplugDeviceError(`Feature index ${e} does not support type ${t} for device ${this.name}`)}hasOutput(e){return this._features.values().some(t=>t.hasOutput(e))}hasInput(e){return this._features.values().some(t=>t.hasInput(e))}async runOutput(e){let t=[];for(let n of this._features.values())n.hasOutput(e.outputType)&&t.push(n.runOutput(e));if(t.length==0)return Promise.reject(`No features with output type ${e.outputType}`);await Promise.all(t)}async stop(){await this.sendMsgExpectOk({StopCmd:{Id:1,DeviceIndex:this.index,FeatureIndex:void 0,Inputs:!0,Outputs:!0}})}async battery(){for(let e of this._features.values())if(e.hasInput(i.InputType.Battery)){let t=await e.runInput(i.InputType.Battery,i.InputCommandType.Read);if(t===void 0)throw new a.ButtplugMessageError(`Got incorrect message back.`);return t.value}throw new a.ButtplugDeviceError(`No battery present on this device.`)}emitInputReading(e){let t=this._features.get(e.FeatureIndex);if(t===void 0)return[];let n=t.emitInputReading(e);for(let e of n)this.emit(`inputreading`,e);return n}emitDisconnected(){this.emit(`deviceremoved`)}}})),Wb=t((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),r=e&&e.__importStar||(function(){var e=function(t){return e=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},e(t)};return function(r){if(r&&r.__esModule)return r;var i={};if(r!=null)for(var a=e(r),o=0;o<a.length;o++)a[o]!=="default"&&t(i,r,a[o]);return n(i,r),i}})();Object.defineProperty(e,"__esModule",{value:!0}),e.ButtplugMessageSorter=void 0;var i=r(Vb()),a=Bb();e.ButtplugMessageSorter=class{_useCounter;_counter=1;_waitingMsgs=new Map;constructor(e){this._useCounter=e}PrepareOutgoingMessage(e){this._useCounter&&(i.setMsgId(e,this._counter),this._counter+=1);let t,n,r=new Promise((e,r)=>{t=e,n=r});return this._waitingMsgs.set(i.msgId(e),[t,n]),r}ParseIncomingMessages(e){let t=[];for(let n of e){let e=i.msgId(n);if(e!==i.SYSTEM_MESSAGE_ID&&this._waitingMsgs.has(e)){let[t,r]=this._waitingMsgs.get(e);if(n.Error!==void 0){r(a.ButtplugError.FromError(n.Error));continue}t(n);continue}t.push(n)}return t}}})),Gb=t((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),r=e&&e.__importStar||(function(){var e=function(t){return e=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},e(t)};return function(r){if(r&&r.__esModule)return r;var i={};if(r!=null)for(var a=e(r),o=0;o<a.length;o++)a[o]!=="default"&&t(i,r,a[o]);return n(i,r),i}})();Object.defineProperty(e,"__esModule",{value:!0}),e.ButtplugClientConnectorException=void 0;var i=Bb(),a=r(Vb());e.ButtplugClientConnectorException=class extends i.ButtplugError{constructor(e){super(e,a.ErrorClass.ERROR_UNKNOWN)}}})),Kb=t((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),r=e&&e.__importStar||(function(){var e=function(t){return e=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},e(t)};return function(r){if(r&&r.__esModule)return r;var i={};if(r!=null)for(var a=e(r),o=0;o<a.length;o++)a[o]!=="default"&&t(i,r,a[o]);return n(i,r),i}})();Object.defineProperty(e,"__esModule",{value:!0}),e.ButtplugClient=void 0;var i=zb(),a=Rb(),o=Ub(),s=Wb(),c=r(Vb()),l=Bb(),u=Gb();e.ButtplugClient=class extends a.EventEmitter{_pingTimer=null;_connector=null;_devices=new Map;_clientName;_logger=i.ButtplugLogger.Logger;_isScanning=!1;_serverInfo;_sorter=new s.ButtplugMessageSorter(!0);constructor(e=`Generic Buttplug Client`){super(),this._clientName=e,this._logger.Debug(`ButtplugClient: Client ${e} created.`)}get connected(){return this._connector!==null&&this._connector.Connected}get devices(){return this.checkConnector(),new Map(this._devices)}get isScanning(){return this._isScanning}get serverInfo(){return this._serverInfo}connect=async e=>{this._logger.Info(`ButtplugClient: Connecting using ${e.constructor.name}`),await e.connect(),this._connector=e,this._connector.addListener(`message`,this.parseMessages),this._connector.addListener(`disconnect`,this.disconnectHandler),await this.initializeConnection()};disconnect=async()=>{this._logger.Debug(`ButtplugClient: Disconnect called`),this._devices.clear(),this.checkConnector(),await this.shutdownConnection(),await this._connector.disconnect(),this._serverInfo=void 0};startScanning=async()=>{this._logger.Debug(`ButtplugClient: StartScanning called`),this._isScanning=!0,await this.sendMsgExpectOk({StartScanning:{Id:1}})};stopScanning=async()=>{this._logger.Debug(`ButtplugClient: StopScanning called`),this._isScanning=!1,await this.sendMsgExpectOk({StopScanning:{Id:1}})};stopAllDevices=async()=>{this._logger.Debug(`ButtplugClient: StopCmd (all devices)`),await this.sendMsgExpectOk({StopCmd:{Id:1,DeviceIndex:void 0,FeatureIndex:void 0,Inputs:!0,Outputs:!0}})};disconnectHandler=()=>{this._logger.Info(`ButtplugClient: Disconnect event receieved.`),this.emit(`disconnect`)};parseMessages=e=>{let t=this._sorter.ParseIncomingMessages(e);for(let e of t)if(e.DeviceList!==void 0){this.parseDeviceList(e.DeviceList);break}else if(e.ScanningFinished!==void 0)this._isScanning=!1,this.emit(`scanningfinished`,e);else if(e.InputReading!==void 0){let t=this._devices.get(e.InputReading.DeviceIndex);if(t!==void 0)for(let n of t.emitInputReading(e.InputReading))this.emit(`inputreading`,n)}else console.log(`Unhandled message: ${e}`)};initializeConnection=async()=>{this.checkConnector();let e=await this.sendMessage({RequestServerInfo:{ClientName:this._clientName,Id:1,ProtocolVersionMajor:c.MESSAGE_SPEC_VERSION_MAJOR,ProtocolVersionMinor:c.MESSAGE_SPEC_VERSION_MINOR}});if(e.ServerInfo!==void 0){let t=e.ServerInfo;return this._serverInfo=Object.freeze({serverName:t.ServerName,maxPingTime:t.MaxPingTime,protocolVersionMajor:t.ProtocolVersionMajor,protocolVersionMinor:t.ProtocolVersionMinor}),this._logger.Info(`ButtplugClient: Connected to Server ${t.ServerName}`),t.MaxPingTime,await this.requestDeviceList(),!0}if(e.Error!==void 0){await this._connector.disconnect();let t=e.Error;throw l.ButtplugError.LogAndError(l.ButtplugInitError,this._logger,`Cannot connect to server. ${t.ErrorMessage}`)}return!1};parseDeviceList=e=>{for(let[t,n]of Object.entries(e.Devices))if(this._devices.has(n.DeviceIndex))this._logger.Debug(`ButtplugClient: Device already added: ${n}`);else{let e=o.ButtplugClientDevice.fromMsg(n,this.sendMessageClosure);this._logger.Debug(`ButtplugClient: Adding Device: ${e}`),this._devices.set(n.DeviceIndex,e),this.emit(`deviceadded`,e)}for(let[t,n]of this._devices.entries())e.Devices.hasOwnProperty(t.toString())||(this._devices.delete(t),this.emit(`deviceremoved`,n))};requestDeviceList=async()=>{this.checkConnector(),this._logger.Debug(`ButtplugClient: ReceiveDeviceList called`);let e=await this.sendMessage({RequestDeviceList:{Id:1}});this.parseDeviceList(e.DeviceList)};shutdownConnection=async()=>{await this.stopAllDevices(),this._pingTimer!==null&&(clearInterval(this._pingTimer),this._pingTimer=null)};async sendMessage(e){this.checkConnector();let t=this._sorter.PrepareOutgoingMessage(e);return await this._connector.send(e),await t}checkConnector(){if(!this.connected)throw new u.ButtplugClientConnectorException(`ButtplugClient not connected`)}sendMsgExpectOk=async e=>{let t=await this.sendMessage(e);if(t.Ok===void 0)throw t.Error===void 0?l.ButtplugError.LogAndError(l.ButtplugMessageError,this._logger,`Message ${t} not handled by SendMsgExpectOk`):l.ButtplugError.FromError(t)};sendMessageClosure=async e=>await this.sendMessage(e)}})),qb=t((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ButtplugBrowserWebsocketConnector=void 0;var t=Rb(),n=Gb();e.ButtplugBrowserWebsocketConnector=class extends t.EventEmitter{_url;_ws;_websocketConstructor=null;constructor(e){super(),this._url=e}get Connected(){return this._ws!==void 0}connect=async()=>new Promise((e,t)=>{let r=new(this._websocketConstructor??WebSocket)(this._url),i=e=>{t(new n.ButtplugClientConnectorException(`WebSocket connection failed to ${this._url}`))},a=e=>{t(new n.ButtplugClientConnectorException(e.reason||`WebSocket closed before connection to ${this._url} was established`))};r.addEventListener(`open`,async()=>{this._ws=r;try{await this.initialize(),this._ws.addEventListener(`message`,e=>{this.parseIncomingMessage(e)}),this._ws.removeEventListener(`close`,a),this._ws.removeEventListener(`error`,i),this._ws.addEventListener(`close`,this.disconnect),e()}catch(e){t(e)}}),r.addEventListener(`error`,i),r.addEventListener(`close`,a)});disconnect=async()=>{this.Connected&&(this._ws.close(),this._ws=void 0,this.emit(`disconnect`))};sendMessage(e){if(!this.Connected)throw Error(`ButtplugBrowserWebsocketConnector not connected`);this._ws.send(`[`+JSON.stringify(e)+`]`)}initialize=async()=>Promise.resolve();parseIncomingMessage(e){if(typeof e.data==`string`){let t=JSON.parse(e.data);this.emit(`message`,t)}else e.data instanceof Blob}onReaderLoad(e){let t=JSON.parse(e.target.result);this.emit(`message`,t)}}})),Jb=t((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ButtplugBrowserWebsocketClientConnector=void 0;var t=qb();e.ButtplugBrowserWebsocketClientConnector=class extends t.ButtplugBrowserWebsocketConnector{send=e=>{if(!this.Connected)throw Error(`ButtplugClient not connected`);this.sendMessage(e)}}})),Yb=t(((e,t)=>{t.exports=function(){throw Error(`ws does not work in the browser. Browser clients must use the native WebSocket object`)}})),Xb=t((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ButtplugNodeWebsocketClientConnector=void 0;var t=Jb(),n=Yb();e.ButtplugNodeWebsocketClientConnector=class extends t.ButtplugBrowserWebsocketClientConnector{_websocketConstructor=n.WebSocket}})),Zb=t((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.DeviceOutput=e.DeviceOutputPositionWithDurationConstructor=e.DeviceOutputValueConstructor=e.DeviceOutputCommand=void 0;var t=Bb(),n=Vb(),r=class e{_percent;_value;get percent(){return this._percent}get value(){return this._value}static createValue(n){if(!Number.isFinite(n))throw new t.ButtplugDeviceError(`Output value ${n} is not finite`);let r=new e;return r._value=n,r}static createPercent(n){if(n<0||n>1)throw new t.ButtplugDeviceError(`Percent value ${n} is not in the range 0.0 <= x <= 1.0`);let r=new e;return r._percent=n,r}},i=class e{_outputType;_value;_duration;constructor(e,t,n){this._outputType=e,this._value=t,this._duration=n}static createValue(t,n,i){return new e(t,r.createValue(n),i)}static createPercent(t,n,i){return new e(t,r.createPercent(n),i)}get outputType(){return this._outputType}get value(){return this._value.value}get percent(){return this._value.percent}get duration(){return this._duration}};e.DeviceOutputCommand=i;var a=class{_outputType;constructor(e){this._outputType=e}value(e){return i.createValue(this._outputType,e)}steps(e){return this.value(e)}percent(e){return i.createPercent(this._outputType,e)}};e.DeviceOutputValueConstructor=a;var o=class{value(e,t){return i.createValue(n.OutputType.HwPositionWithDuration,e,t)}steps(e,t){return this.value(e,t)}percent(e,t){return i.createPercent(n.OutputType.HwPositionWithDuration,e,t)}};e.DeviceOutputPositionWithDurationConstructor=o,e.DeviceOutput=class{constructor(){}static get Vibrate(){return new a(n.OutputType.Vibrate)}static get Rotate(){return new a(n.OutputType.Rotate)}static get Oscillate(){return new a(n.OutputType.Oscillate)}static get Constrict(){return new a(n.OutputType.Constrict)}static get Inflate(){return new a(n.OutputType.Inflate)}static get Temperature(){return new a(n.OutputType.Temperature)}static get Led(){return new a(n.OutputType.Led)}static get Spray(){return new a(n.OutputType.Spray)}static get Position(){return new a(n.OutputType.Position)}static get PositionWithDuration(){return new o}static get HwPositionWithDuration(){return new o}}})),Qb=t((e=>{Object.defineProperty(e,"__esModule",{value:!0})})),$=t((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__exportStar||function(e,n){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(n,r)&&t(n,e,r)};Object.defineProperty(e,"__esModule",{value:!0}),n(Kb(),e),n(Ub(),e),n(Jb(),e),n(Xb(),e),n(Gb(),e),n(Zb(),e),n(Qb(),e),n(Vb(),e),n(zb(),e),n(Bb(),e)}))();function $b(e,t,n,r={}){let i={sessionId:`63e21f`,hypothesisId:e,location:t,message:n,data:r,timestamp:Date.now()};fetch(`http://127.0.0.1:7245/ingest/a8dbc250-d2c6-4438-81d4-34466a52f5b1`,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Debug-Session-Id":`63e21f`},body:JSON.stringify(i)}).catch(()=>{}),fetch(`/api/debug-log`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(i)}).catch(()=>{})}var ex=`0000fff0-0000-1000-8000-00805f9b34fb`,tx=`6e400001-b5a3-f393-e0a9-e50e24dcca9e`,nx=`4bd4-bbd5-a6920e4c5653`;function rx(){let e=new Set([ex,tx,`50300001-0024-4bd4-bbd5-a6920e4c5653`,`57300001-0023-4bd4-bbd5-a6920e4c5653`,`5a300001-0024-4bd4-bbd5-a6920e4c5653`,`50300001-0023-4bd4-bbd5-a6920e4c5653`,`53300001-0023-4bd4-bbd5-a6920e4c5653`,`5a300001-0023-4bd4-bbd5-a6920e4c5653`,`4f300001-0023-4bd4-bbd5-a6920e4c5653`,`42300001-0023-4bd4-bbd5-a6920e4c5653`,`43300001-0023-4bd4-bbd5-a6920e4c5653`]);for(let t of[`4`,`5`])for(let n=0;n<16;n++){let r=`${t}${n.toString(16)}`;for(let t of[`3`,`4`])e.add(`${r}300001-002${t}-${nx}`)}return[...e]}var ix=rx(),ax=[{namePrefix:`LVS-`},{namePrefix:`LVS`},{namePrefix:`LOVE-`}];function ox(){return{filters:ax,optionalServices:ix}}function sx(e){let t=e.properties;return!!(t.write||t.writeWithoutResponse)}function cx(e){return e.length&&(e.find(e=>/0002|fff2/i.test(e.uuid)&&sx(e))||e.find(e=>e.properties.writeWithoutResponse)||e.find(e=>e.properties.write)||e[0])||null}function lx(e){let t=e.toLowerCase().split(`-`)[0]||``;return t.length>=4?t.slice(-4):t}function ux(e){let t=e.toLowerCase();return t.includes(`4bd4-bbd5`)||t.endsWith(`a6920e4c5653`)||t.endsWith(`a6921c11fcad`)||lx(t)===`0001`&&t.includes(`-002`)}function dx(e){let t=String(e||``),n=t.match(/\b([0-9A-Fa-f]{2}(?::[0-9A-Fa-f]{2}){5})\b/);if(n)return n[1].toUpperCase();let r=t.match(/\b([0-9A-Fa-f]{2}(?:-[0-9A-Fa-f]{2}){5})\b/);if(r)return r[1].replace(/-/g,`:`).toUpperCase();let i=t.match(/\b([0-9A-Fa-f]{12})\b/);return i&&i[1].match(/.{1,2}/g)?.join(`:`).toUpperCase()||null}function fx(e){return String(e||``).replace(/\s*\((?:[0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}\)\s*$/i,``).replace(/\s*\([0-9A-Fa-f]{12}\)\s*$/i,``).trim()}function px(e,t){let n=dx(t),r=fx(t),i=r.replace(/^LVS-/i,``)||r||t||`Toy`,a=`${t} ${i}`.toLowerCase(),o=em(i)||em(t),s=o||(/\bnora\b/i.test(a)?`nora`:``),c=s===`nora`||/\bnora\b|\bmax\b|\bedge\b|\bosci|\bsolace|\bmission|\bgush|\bflexer|\bvulse/.test(a),l=/\bmission|\bsolace|\bgravity|\bflexer/.test(a),u=/\bmax\b|\bair\b|\bpump\b/.test(a),d=o&&o!==`nora`&&o!==`max`||/\bedge\b|\bgemini\b|\bdolce\b|\blapis\b/.test(a)?2:1,f=[`Vibrate`];if(d>1)for(let e=1;e<=d;e++)f.push(`Vibrate${e}`);c&&f.push(`Rotate`),l&&f.push(`Thrust`),u&&f.push(`Air`);let p=o===`gemini`?`Gemini`:o?o.charAt(0).toUpperCase()+o.slice(1):i;return{id:e||`ble`,name:p,toyType:s||(/\bnora\b/i.test(a)?`nora`:i),connected:!0,secondary:{rotate:c,air:u,pump:u,thrust:l},functions:f,motors:d,battery:null,firmware:null,modelCode:o?$p(i)||$p(t):null,mac:n,typeRaw:null,deviceStatus:null,batch:null}}function mx(e){let t=e.trim();if(!t)return``;let n=[`nora`,`lush`,`edge`,`solace`,`hush`,`domi`,`max`,`gemini`,`dolce`,`osci`,`ambi`,`ferri`,`gush`,`hyphy`,`flexer`,`ridge`,`lapis`,`gravity`,`calor`],r=t.toLowerCase();for(let e of n)if(r.includes(e))return e.charAt(0).toUpperCase()+e.slice(1);let i=t.split(/[:;]/)[0]?.trim().toUpperCase(),a=em(i);if(a)return a.charAt(0).toUpperCase()+a.slice(1);let o={A:`Nora`,C:`Nora`,B:`Max`,L:`Ambi`,S:`Lush`,Z:`Hush`,W:`Domi`,P:`Edge`,O:`Osci`,H:`Solace`};return i&&o[i]?o[i]:``}function hx(e,t){return t?{...px(e.id,t),id:e.id,name:t,toyType:t.toLowerCase(),battery:e.battery,firmware:e.firmware,modelCode:e.modelCode,mac:e.mac,typeRaw:e.typeRaw,deviceStatus:e.deviceStatus,batch:e.batch,connected:e.connected}:e}function gx(e){return e.length&&(e.find(e=>/0003|fff1/i.test(e.uuid)&&e.properties.notify)||e.find(e=>e.properties.notify)||e.find(e=>e.properties.indicate))||null}function _x(e){return!!(e.properties.notify||e.properties.indicate)}function vx(e){return new Promise(t=>setTimeout(t,e))}function yx(e,t,n){let r;return Promise.race([e.finally(()=>{r!==void 0&&clearTimeout(r)}),new Promise((e,i)=>{r=setTimeout(()=>i(Error(n)),t)})])}function bx(e){return!!(e&&/^unkn?own$/i.test(e.trim()))}function xx(e){let t=e.split(`:`).map(e=>e.trim()).filter(Boolean);if(!t.length||bx(t[0]))return!1;let n=(t[1]||``).toLowerCase();return n!==`status`&&n!==`getbatch`&&n!==`battery`}function Sx(e){let t=e instanceof Error?e.name:``,n=e instanceof Error?e.message:String(e);return t===`NotFoundError`||/cancel|choos|no device selected|no device/i.test(n)}function Cx(){try{let e=typeof navigator<`u`?String(navigator.userAgent||``):``;return/\bElectron\//i.test(e)?`Bluetooth`:`Chrome Bluetooth`}catch{return`Bluetooth`}}function wx(e,t){let n=e instanceof Error?e.name:``,r=e instanceof Error?e.message:String(e);return Sx(e)?Error(`Cancelled · keep the toy on and nearby, then Link toy again (${Cx()} pick)`):n===`SecurityError`||/secure|permission|blocked/i.test(r)?Error(r||`Bluetooth blocked`):n===`NetworkError`||/connection failed|gatt|link timed out|NetworkError/i.test(r)?Error(`Link failed · close Windows Bluetooth pairing and retry`):/No write characteristic/i.test(r)?Error(r):Error(r||t)}function Tx(){try{let e=typeof navigator<`u`?String(navigator.userAgent||``):``;return/\bCursor\//i.test(e)?`Open Just The Tip in Chrome, Edge, or the desktop app to use Bluetooth`:null}catch{return null}}function Ex(){try{return!Tx()&&!!(typeof navigator<`u`&&navigator.bluetooth&&typeof navigator.bluetooth.requestDevice==`function`)}catch{return!1}}function Dx(){return Tx()||`Bluetooth is not available in this browser`}var Ox=new WeakMap,kx=0;function Ax(e){if(e.id)return e.id;let t=Ox.get(e);if(t)return t;let n=`ble-${(e.name||`toy`).replace(/\s+/g,`-`)}-${++kx}`;return Ox.set(e,n),n}var jx=`chrome://flags/#enable-web-bluetooth-new-permissions-backend`;function Mx(){try{return typeof navigator>`u`||!navigator.bluetooth?!1:typeof navigator.bluetooth.getDevices==`function`}catch{return!1}}var Nx=class e{bounds=new Map;onLost=null;onInfo=null;attachingIds=new Set;linkWatch=null;reconnectInflight=null;rememberedService=new Map;linkGen=0;adStops=new Set;attachingDevices=new Map;unloadBound=!1;attachMutex=Promise.resolve();recoveryTimer=null;recoveryUntil=0;constructor(){this.bindPageUnload()}get reconnecting(){return this.reconnectInflight!=null||this.recoveryUntil>Date.now()}get linked(){for(let e of this.bounds.values())if(e.server.connected&&e.tx)return!0;return!1}get count(){let e=0;for(let t of this.bounds.values())t.server.connected&&t.tx&&e++;return e}get info(){return this.allInfo()[0]||null}allInfo(){this.sweepDeadLinks();let e=[];for(let t of this.bounds.values())e.push({...t.info,connected:!!t.server.connected});return e}setOnLost(e){this.onLost=e}setOnInfo(e){this.onInfo=e}emitInfo(){this.onInfo?.()}ensureLinkWatch(){this.linkWatch??=setInterval(()=>{if(!this.bounds.size){this.clearLinkWatch();return}this.sweepDeadLinks()},2500)}clearLinkWatch(){this.linkWatch!=null&&(clearInterval(this.linkWatch),this.linkWatch=null)}sweepDeadLinks(){let e=[];for(let[t,n]of this.bounds){if(this.attachingIds.has(t))continue;let r=!1;try{r=!!n.server.connected}catch{r=!1}r||e.push(t)}for(let t of e)this.dropBound(t)}dropBound(e){let t=this.bounds.get(e);if(t){try{t.device.removeEventListener(`gattserverdisconnected`,t.onLost)}catch{}if(t.rx){try{t.rx.removeEventListener(`characteristicvaluechanged`,t.onRx)}catch{}try{t.rx.stopNotifications()}catch{}}this.bounds.delete(e),this.bounds.size||this.clearLinkWatch(),this.attachingIds.has(e)||this.onLost?.()}}async connectFromPicker(e){if(!Ex())throw Error(Dx());let t=this.openPickerFromUserGesture();try{let n=await t;return e?.onPicked?.(n.name||`Toy`),await this.attach(n)}catch(e){throw wx(e,`Link failed`)}}openPickerFromUserGesture(){let e=Tx();if(e)return Promise.reject(Error(e));if(typeof navigator>`u`||!navigator.bluetooth||typeof navigator.bluetooth.requestDevice!=`function`)return Promise.reject(Error(Dx()));let t=navigator.bluetooth,n;try{n=t.requestDevice(ox())}catch(e){return Promise.reject(wx(e,`Device selection failed`))}return n.catch(e=>{throw wx(e,`No device selected`)})}async attachChosenDevice(e,t){t?.onPicked?.(e.name||`Toy`);try{return await this.attach(e)}catch(e){throw wx(e,`Link failed`)}}beginAdvertisementWatch(e){if(e.gatt?.connected)return null;if(typeof e.watchAdvertisements!=`function`)return $b(`F`,`webBluetooth.ts:waitForAdvertisement`,`no watchAdvertisements`,{name:e.name||``}),null;let t=Date.now(),n=new AbortController,r=!1,i=new Promise(i=>{let a=()=>{r||(r=!0,e.removeEventListener(`advertisementreceived`,a),$b(`F`,`webBluetooth.ts:waitForAdvertisement`,`ad event`,{name:e.name||``,ms:Date.now()-t}),i())};e.addEventListener(`advertisementreceived`,a),n.signal.addEventListener(`abort`,()=>{e.removeEventListener(`advertisementreceived`,a),i()})});e.watchAdvertisements({signal:n.signal}).catch(n=>{$b(`F`,`webBluetooth.ts:waitForAdvertisement`,`watch fail`,{name:e.name||``,err:n instanceof Error?n.message:String(n),ms:Date.now()-t})});let a=()=>{this.adStops.delete(a);try{n.abort()}catch{}};return this.adStops.add(a),{t0:t,seen:i,gotAd:()=>r,stop:a}}isBoundLive(e){let t=this.bounds.get(Ax(e));try{return!!(t?.server.connected&&t.tx)}catch{return!1}}async tryReconnectKnown(e){return this.reconnectInflight?($b(`G`,`webBluetooth.ts:tryReconnectKnown`,`join inflight`,{waitForAds:e?.waitForAds}),this.reconnectInflight):(this.reconnectInflight=this.tryReconnectKnownInner(e).finally(()=>{this.reconnectInflight=null}),this.reconnectInflight)}async tryReconnectKnownInner(t){let n={permitted:0,linked:0,names:[],permittedNames:[]};if(!Ex())return n;let r=navigator.bluetooth;if(!r.getDevices)return $b(`A`,`webBluetooth.ts:tryReconnectKnownInner`,`getDevices missing`),n;let i=[];try{i=await r.getDevices()}catch{return n}let a=i.map(e=>e.name||`Toy`).filter(Boolean);if($b(`A`,`webBluetooth.ts:tryReconnectKnownInner`,`getDevices result`,{waitForAds:t?.waitForAds,permitted:i.length,names:a,gattUp:i.map(e=>({name:e.name||``,gatt:!!e.gatt?.connected,id:e.id?.slice(0,8)}))}),!i.length)return{...n,permittedNames:a};for(let t of e.loadRememberedToys())t.id&&t.service&&this.rememberedService.set(t.id,t.service);let o=e=>{let t=(e.name||``).toUpperCase();return t.includes(`LVS`)||t.includes(`NORA`)||t.includes(`LOVE`)?3:+!!t},s=[...i].sort((e,t)=>o(t)-o(e)),c=this.linkGen,l=async e=>{if(this.isBoundLive(e)||c!==this.linkGen)return;let t=this.attachMutex,n;this.attachMutex=new Promise(e=>{n=e}),await t;try{if(this.isBoundLive(e)||c!==this.linkGen)return;let t=Date.now();try{await this.attach(e,{forceFresh:!!e.gatt?.connected,quick:!0,recover:!0}),$b(`B`,`webBluetooth.ts:attachOne`,`attach ok`,{name:e.name||``,id:e.id?.slice(0,8),ms:Date.now()-t})}catch(n){$b(`B`,`webBluetooth.ts:attachOne`,`attach fail`,{name:e.name||``,id:e.id?.slice(0,8),err:n instanceof Error?n.message:String(n),ms:Date.now()-t})}}finally{n()}},u=[];if(t?.waitForAds!==!1&&c===this.linkGen)for(let e of s){if(this.isBoundLive(e)||e.gatt?.connected)continue;let t=this.beginAdvertisementWatch(e);t&&u.push({d:e,w:t})}$b(`G`,`webBluetooth.ts:tryReconnectKnownInner`,`attach batch`,{mode:`first-live-then-background`,n:s.filter(e=>!this.isBoundLive(e)).length});for(let e of s)if(c!==this.linkGen||(await l(e),this.linked))break;let d=s.filter(e=>!this.isBoundLive(e));if(d.length&&c===this.linkGen)this.startBackgroundRecovery(d,c,u);else for(let{w:e}of u)e.stop();let f=this.allInfo().filter(e=>e.connected!==!1).map(e=>e.name).filter(Boolean);return{permitted:i.length,linked:f.length,names:f,permittedNames:a}}startBackgroundRecovery(e,t,n=[]){this.clearBackgroundRecovery(!1),this.recoveryUntil=Date.now()+9e4;let r=0,i=()=>{for(let{w:e}of n)e.stop()},a=async()=>{if(t!==this.linkGen){i(),this.clearBackgroundRecovery();return}let o=e.filter(e=>!this.isBoundLive(e));if(!o.length||Date.now()>this.recoveryUntil){i(),this.clearBackgroundRecovery(),this.emitInfo();return}let s=o.filter(e=>n.some(t=>t.d===e&&t.w.gotAd())),c=s[0]||o[0];r+=1;try{await this.attach(c,{quick:!0,recover:r<=3})}catch{}this.emitInfo(),this.recoveryTimer=setTimeout(()=>void a(),s.length?200:800)};this.recoveryTimer=setTimeout(()=>void a(),50)}clearBackgroundRecovery(e=!0){this.recoveryTimer!=null&&(clearTimeout(this.recoveryTimer),this.recoveryTimer=null),e&&(this.recoveryUntil=0)}static rememberedKey=`pulsefans.ble.remembered.v3`;static rememberedKeyLegacy=[`pulsefans.ble.remembered.v2`,`pulsefans.ble.remembered.v1`];static loadRememberedToys(){try{let t=[e.rememberedKey,...e.rememberedKeyLegacy],n=[];for(let r of t){let t=localStorage.getItem(r);if(!t)continue;let i=JSON.parse(t);if(!Array.isArray(i)||!i.length)continue;let a=[];for(let e of i){if(typeof e==`string`&&e.trim()){a.push({name:e.trim().slice(0,48),mac:``,tag:``,id:``});continue}if(!e||typeof e!=`object`)continue;let t=e,n=typeof t.name==`string`?t.name.trim().slice(0,48):``;if(!n)continue;let r=typeof t.id==`string`?t.id.trim().slice(0,64):``,i=typeof t.mac==`string`?t.mac.trim().toUpperCase():dx(String(t.mac||``))||``,o=typeof t.tag==`string`?t.tag.trim().toUpperCase().slice(0,8):i?i.replace(/[^0-9A-F]/gi,``).slice(-4).toUpperCase():``,s=typeof t.service==`string`&&t.service.includes(`-`)?t.service.trim().toLowerCase().slice(0,64):``;a.push({name:n,mac:i,tag:o,id:r,...s?{service:s}:{}})}let o=e.dedupeRemembered(a);o.length>n.length&&(n=o)}return n.slice(0,12)}catch{return[]}}static dedupeRemembered(e){let t=(e,t)=>({name:e.name||t.name,mac:e.mac||t.mac,tag:e.tag||t.tag,id:e.id||t.id,service:e.service||t.service}),n=new Map,r=[];for(let i of e)if(i.id){let e=n.get(i.id);n.set(i.id,e?t(e,i):i)}else r.push(i);let i=new Map,a=[],o=e=>{if(e.mac){let n=i.get(e.mac);if(n){let r=a.indexOf(n),o=t(n,e);i.set(e.mac,o),r>=0&&(a[r]=o);return}i.set(e.mac,e)}let n=e.name.toLowerCase();!e.mac&&!e.id&&a.some(t=>!t.mac&&!t.id&&t.name.toLowerCase()===n&&(t.tag||``)===(e.tag||``))||a.push(e)};for(let e of n.values())o(e);for(let e of r)o(e);return a}static loadRememberedNames(){return e.loadRememberedToys().map(e=>e.tag?`${e.name} ${e.tag}`:e.name)}persistRemembered(){try{let t=this.allInfo().map(e=>{let t=(e.mac||dx(e.name)||``).toUpperCase(),n=t?t.replace(/[^0-9A-F]/gi,``).slice(-4).toUpperCase():``,r=e.id?this.rememberedService.get(e.id):``;return{name:fx(e.name).replace(/^LVS-/i,``)||e.name,mac:t,tag:n,id:e.id||``,...r?{service:r}:{}}});if(!t.length)return;let n=e.loadRememberedToys(),r=e.dedupeRemembered([...t,...n]);localStorage.setItem(e.rememberedKey,JSON.stringify(r.slice(0,12)));for(let t of e.rememberedKeyLegacy)try{localStorage.removeItem(t)}catch{}}catch{}}static clearRemembered(){try{localStorage.removeItem(e.rememberedKey);for(let t of e.rememberedKeyLegacy)localStorage.removeItem(t)}catch{}}async attach(e,t){let n=Ax(e);this.attachingIds.add(n),this.attachingDevices.set(n,e);let r=!!t?.recover,i=this.linkGen;try{this.bounds.has(n)&&await this.disconnectOne(n,!0);let a=e.gatt;if(!a)throw Error(`No GATT on this device`);if(a.connected){try{a.disconnect()}catch{}await vx(r?20:t?.quick?250:160)}let o=null,s=null,c=r?1:t?.quick?2:3,l=r?1400:t?.quick?8e3:18e3;for(let e=0;e<c;e++){if(i!==this.linkGen)throw Error(`Reconnect cancelled`);e&&await vx(r?80:400*e);try{o=await yx(a.connect(),l,`Link timed out`);break}catch(e){s=e;try{a.connected&&a.disconnect()}catch{}}}if(!o)throw s||Error(`Link failed`);if(i!==this.linkGen){try{o.disconnect()}catch{}throw Error(`Reconnect cancelled`)}r||await vx(t?.quick?80:120);let u=this.rememberedService.get(n),d=null,f=r?1:t?.quick?2:6;for(let e=0;e<f;e++){if(i!==this.linkGen)throw Error(`Reconnect cancelled`);if(e&&await vx(r?80:150*e),!o.connected)try{o=await yx(a.connect(),r?2e3:t?.quick?2500:8e3,`Link timed out`)}catch{}if(d=await this.findPair(o,u,{quick:!!(t?.quick||r),recover:r}),d)break}if(!d){try{o.disconnect()}catch{}throw Error(`No write characteristic on ${e.name||`device`}`)}let p=d.tx.service?.uuid;p&&this.rememberedService.set(n,p.toLowerCase());let m=px(n,e.name||`Toy`),h=()=>this.dropBound(n),g={device:e,server:o,tx:d.tx,rx:d.rx,info:m,onLost:h,onRx:()=>{},rxBuf:``};if(g.onRx=e=>this.handleRxEvent(n,e),e.removeEventListener(`gattserverdisconnected`,h),e.addEventListener(`gattserverdisconnected`,h),this.bounds.set(n,g),d.rx)try{d.rx.addEventListener(`characteristicvaluechanged`,g.onRx);let e=yx(d.rx.startNotifications(),r?400:3e3,`Notify start timed out`);r?e.catch(()=>{}):await e}catch{}return r?this.probeToy(n,0):this.probeToy(n),this.persistRemembered(),this.ensureLinkWatch(),this.emitInfo(),{...m,connected:!0}}finally{this.attachingIds.delete(n),this.attachingDevices.delete(n)}}handleRxEvent(e,t){let n=this.bounds.get(e);if(!n)return;let r=t.target?.value;if(!r)return;let i=new TextDecoder(`utf-8`).decode(r.buffer);if(!i)return;n.rxBuf+=i;let a=n.rxBuf;for(;;){let t=a.indexOf(`;`);if(t<0){a.length>220&&(a=a.slice(-48)),n.rxBuf=a;break}let r=a.slice(0,t).trim();a=a.slice(t+1),n.rxBuf=a,r&&this.handleReply(e,r)}}handleReply(e,t){let n=this.bounds.get(e);if(!n)return;let r=t.toLowerCase();if(r===`ok`||r===`err`)return;let i=!1;if(/^\d{5,8}$/.test(t)&&!t.includes(`:`))n.info={...n.info,batch:t},i=!0;else if(t.includes(`:`)&&xx(t)||mx(t)){let e=mx(t),r=t.split(`:`).map(e=>e.trim()).filter(Boolean),a=r[0]||null,o=a&&!bx(a)?a:n.info.modelCode,s=r[1]&&!/^status$/i.test(r[1])&&!/^getbatch$/i.test(r[1])?r[1]:n.info.firmware,c=dx(t)||(r[2]&&r[2].length>=12?r[2]:null)||n.info.mac;c&&c.length===12&&!c.includes(`:`)&&(c=c.match(/.{1,2}/g)?.join(`:`).toUpperCase()||c);let l={...n.info,typeRaw:e||o?t:n.info.typeRaw,modelCode:o,firmware:s||null,mac:c};e&&(l=hx(l,e)),n.info=l,i=!0}else if(/^\d{1,3}$/.test(t)){let e=Number(t);!Number.isFinite(e)||e<0||e>100||(n.info.battery==null||r.includes(`battery`)?(n.info={...n.info,battery:e},i=!0):e<=20?(n.info={...n.info,deviceStatus:e===2?`normal`:String(e)},i=!0):(n.info={...n.info,battery:e},i=!0))}else if(/battery/i.test(t)){let e=t.match(/(\d{1,3})/),r=e?Number(e[1]):NaN;Number.isFinite(r)&&r>=0&&r<=100&&(n.info={...n.info,battery:r},i=!0)}i&&(this.persistRemembered(),this.emitInfo())}async probeToy(e,t=400){let n=this.bounds.get(e);if(!(!n?.server.connected||!n.tx)){t>0&&await new Promise(e=>setTimeout(e,t));try{await this.writeCmds(n.tx,[`DeviceType;`,`Battery;`,`Status:1;`,`GetBatch;`])}catch{}}}async findPair(e,t,n){let r=Date.now()+(n?.recover?1200:n?.quick?4e3:12e3),i=async t=>{if(Date.now()>r)return null;try{let r=await yx((await yx(e.getPrimaryService(t),n?.recover?350:n?.quick?800:1500,`Service lookup timed out`)).getCharacteristics(),n?.recover?350:n?.quick?800:1500,`Characteristics timed out`),i=cx(r.filter(sx));return i?{tx:i,rx:gx(r.filter(_x).filter(e=>e!==i))||gx(r.filter(_x))}:null}catch{return null}},a=!!t;if(t){let e=await i(t);if(e)return e}for(let e of[ex,tx]){let t=await i(e);if(t)return t}if(!n?.quick&&!n?.recover)for(let e of ix){if(Date.now()>r)break;if(e===ex||e===tx)continue;let t=await i(e);if(t)return t}if(n?.recover&&a||Date.now()>r)return null;try{let t=[...await yx(e.getPrimaryServices(),2500,`Primary services timed out`)].sort((e,t)=>{let n=e=>/fff0|6e400001/i.test(e)?0:ux(e)?1:2;return n(e.uuid)-n(t.uuid)});for(let e of t){if(Date.now()>r)break;let t=e.uuid.toLowerCase();if(!(t.includes(`1800`)||t.includes(`1801`)))try{let n=await yx(e.getCharacteristics(),1500,`Characteristics timed out`),r=n.filter(sx);if(!r.length)continue;let i=null;if(ux(t)||/fff0|6e400001/i.test(t))i=r.find(e=>lx(e.uuid)===`0002`)||cx(r);else{let e=n.filter(e=>e.properties.notify);i=(r.length&&e.length,cx(r))}if(!i)continue;let a=gx(n.filter(_x).filter(e=>e!==i))||gx(n.filter(_x));return{tx:i,rx:a}}catch{}}}catch{}return null}targets(e){return e?.length?e.map(e=>this.bounds.get(e)).filter(e=>!!(e?.server.connected&&e.tx)):[...this.bounds.values()].filter(e=>e.server.connected&&e.tx)}async writeCmds(e,t,n=2e3){let r=new TextEncoder;for(let i of t){let t=r.encode(i),a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength),o=e.properties.writeWithoutResponse?[`without`,`with`,`without`]:[`with`,`without`],s=null,c=!1;for(let t of o)try{t===`without`?await yx(e.writeValueWithoutResponse(a),n,`BLE write timed out`):await yx(e.writeValueWithResponse(a),n,`BLE write timed out`),c=!0;break}catch(e){if(s=e,e instanceof Error&&/timed out/i.test(e.message))throw e}if(!c)throw s instanceof Error?s:Error(`BLE write failed`);await new Promise(e=>setTimeout(e,30))}}evictUnresponsive(e){try{e.server.connected&&e.server.disconnect()}catch{}this.dropBound(e.info.id)}buildCmds(e,t){let n=e=>Math.max(0,Math.min(20,Math.round(Math.max(0,Math.min(1,e))*20))),r=n(e),i=n(t?.rotate01??0),a=n(t?.thrust01??0),o=n(t?.air01??0),s=(t?.motors||[]).map(e=>Math.round(Number(e))).filter(e=>e>=1&&e<=3),c=!s.length,l=t?.motorLevels||[];if(l.length>1&&i===0&&a===0&&o===0){let e=[1,2,3].map(e=>{if(!c&&!s.includes(e))return 0;let t=l[e-1];return t==null?0:n(t)});if(e.some(e=>e>0))return e.map((e,t)=>`Vibrate${t+1}:${e};`)}if(r>0&&i===0&&a===0&&o===0)return c?[`Vibrate1:${r};`,`Vibrate2:${r};`,`Vibrate:${r};`]:[1,2,3].map(e=>`Vibrate${e}:${s.includes(e)?r:0};`);if(i>0&&r===0&&a===0&&o===0)return[`Rotate:${i};`];if(a>0&&r===0&&i===0&&o===0)return[`Thrusting:${a};`];if(o>0&&r===0&&i===0&&a===0){let e=Math.max(1,Math.min(3,Math.round(o/20*3)));return[`Air:Level:${e};`,`Air:${e};`]}if(r===0&&i===0&&a===0&&o===0)return[`Vibrate:0;`,`Vibrate1:0;`,`Vibrate2:0;`,`Vibrate3:0;`,`Rotate:0;`,`Thrusting:0;`];let u=[];if(c)u.push(`Vibrate:${r};`,`Vibrate1:${r};`,`Vibrate2:${r};`);else for(let e of[1,2,3])u.push(`Vibrate${e}:${s.includes(e)?r:0};`);if(u.push(`Rotate:${i};`),a>0&&u.push(`Thrusting:${a};`),o>0){let e=Math.max(1,Math.min(3,Math.round(o/20*3)));u.push(`Air:Level:${e};`)}return u}async drive(e,t){let n=this.targets(t?.toyIds);if(!n.length)throw Error(`Not connected`);let r=this.buildCmds(e,t);if(await Promise.all(n.map(async e=>{try{await this.writeCmds(e.tx,r)}catch{this.evictUnresponsive(e)}})),![...this.bounds.values()].some(e=>e.server.connected&&e.tx))throw Error(`Not connected`)}async stop(e){let t=this.targets(e);if(!t.length)return;let n=[`Vibrate:0;`,`Vibrate1:0;`,`Vibrate2:0;`,`Vibrate3:0;`,`Rotate:0;`,`Thrusting:0;`];await Promise.all(t.map(async e=>{try{await this.writeCmds(e.tx,n,1200)}catch{this.evictUnresponsive(e)}}))}async disconnectOne(e,t=!1){let n=this.bounds.get(e);if(n){this.bounds.delete(e);try{n.device.removeEventListener(`gattserverdisconnected`,n.onLost)}catch{}if(n.rx)try{n.rx.removeEventListener(`characteristicvaluechanged`,n.onRx)}catch{}await(async()=>{try{n.server.connected&&n.tx&&await this.writeCmds(n.tx,[`Vibrate:0;`],800)}catch{}if(n.rx)try{await yx(n.rx.stopNotifications(),800,`stopNotifications timed out`)}catch{}try{n.server.connected&&n.server.disconnect()}catch{}})(),t||this.onLost?.()}}async disconnect(e=!1){this.linkGen++;let t=[...this.bounds.keys()];await Promise.allSettled(t.map(e=>this.disconnectOne(e,!0))),this.disconnectSync(),e||this.onLost?.()}disconnectSync(){this.linkGen++,this.reconnectInflight=null,this.clearBackgroundRecovery();for(let e of[...this.adStops])try{e()}catch{}this.adStops.clear(),this.clearLinkWatch();for(let e of this.attachingDevices.values())try{e.gatt?.disconnect()}catch{}this.attachingDevices.clear(),this.attachingIds.clear();let e=[...this.bounds.values()];this.bounds.clear();for(let t of e){try{t.device.removeEventListener(`gattserverdisconnected`,t.onLost)}catch{}if(t.rx)try{t.rx.removeEventListener(`characteristicvaluechanged`,t.onRx)}catch{}try{t.server.connected&&t.server.disconnect()}catch{}try{t.device.gatt?.connected&&t.device.gatt.disconnect()}catch{}}}bindPageUnload(){if(this.unloadBound||typeof window>`u`)return;this.unloadBound=!0;let e=()=>this.disconnectSync();window.addEventListener(`pagehide`,e,{capture:!0}),window.addEventListener(`beforeunload`,e,{capture:!0}),document.addEventListener(`freeze`,e)}},Px=/127\.0\.0\.1|localhost/i;function Fx(e){if(!e)return!1;try{let t=new URL(e.includes(`://`)?e:`http://${e}`),n=t.port||(t.protocol===`https:`?`443`:`80`);return Px.test(t.hostname)&&(n===`20010`||e.includes(`20010`))}catch{return/127\.0\.0\.1:20010|localhost:20010/i.test(e)}}function Ix(e){return`${e.name} ${e.toyType} ${(e.functions||[]).join(` `)}`.toLowerCase()}function Lx(e){let t=[],n=n=>{let r=e.find(e=>n(e)&&!t.some(t=>t.id===e.id));r&&t.push(r)};n(e=>/solace/.test(Ix(e))),n(e=>e.secondary.thrust||/thrust/.test(Ix(e))),n(e=>e.secondary.rotate||/rotate|nora/.test(Ix(e))),n(e=>e.secondary.air||/\bair\b|\bmax\b|pump/.test(Ix(e))),n(e=>(e.motors||1)>=2),n(e=>(e.motors||1)===1&&!e.secondary.thrust&&!e.secondary.rotate&&!e.secondary.air);for(let n of e){if(t.length>=8)break;t.some(e=>e.id===n.id)||t.push(n)}return t}function Rx(e){let t=[`Vibrate`];(e.motors||1)>=2&&t.push(`Vibrate1`);let n=Ix(e);return(e.secondary.rotate||/rotate|nora/.test(n))&&t.push(`Rotate`),(e.secondary.air||e.secondary.pump||/\bair\b|\bmax\b|pump/.test(n))&&t.push(`Air`),(e.secondary.thrust||/thrust|solace/.test(n))&&t.push(`Thrusting`),t}function zx(e,t){return RegExp(`\\b${t}\\s*:`,`i`).test(e)}async function Bx(e,t){let n=e.base;if(!n)return{ok:!1,base:``,steps:[],summary:`Not connected — Connect Lovense first`};let r=Fx(n),i=t?.intensity??.7,a=t?.durationSec??1.2,o=e.toys.filter(e=>e.connected!==!1);if(o.length||(o=[...e.toys]),o.length||(o=await e.refreshToys()),!o.length)return{ok:!1,base:n,steps:[],summary:`No toys from bridge — is Connect/emu up?`};let s=Lx(o),c=[];c.push({id:`catalog`,name:`Catalog`,expect:[],action:``,ok:o.length>=1,detail:`${o.length} toy(s) @ ${n}${r?` · local emu base`:` · live Connect`}`}),r&&o.length<5&&c.push({id:`emu-catalog`,name:`Emu full catalog`,expect:[],action:``,ok:!1,detail:`expected wide virtual catalog (≥5), got ${o.length}`});for(let t of s){let n=Rx(t);try{let o=await e.drive(i,a,e=>e.id===t.id),s=String(o.action||``),l=n.filter(e=>!zx(s,e));await Vx(120);let u=(await e.refreshToys()).find(e=>e.id===t.id),d=u?.liveLevel!=null&&Number.isFinite(u.liveLevel)?Number(u.liveLevel):null,f=!r||d!=null&&d>0,p=l.length===0,m=p&&f,h=``;h=p?f?`channels ${n.join(`+`)}${d==null?``:` · live ${d}/20`}`:`bridge action ok but live level ${d} (emu GetToys _emu)`:`missing ${l.join(`, `)} in «${s}»`,c.push({id:t.id,name:t.name||t.id,expect:n,action:s,ok:m,detail:h,liveLevel:d})}catch(e){c.push({id:t.id,name:t.name||t.id,expect:n,action:``,ok:!1,detail:e instanceof Error?e.message:String(e)})}}try{let t=await e.drive(.45,2),n=String(t.action||``),r=(t.toys||[]).length;c.push({id:`fleet`,name:`All toys pulse`,expect:[`Vibrate`],action:n,ok:zx(n,`Vibrate`)||r>0,detail:r?`${r} target(s) · ${n.slice(0,90)}`:n.slice(0,100)||`no action string`})}catch(e){c.push({id:`fleet`,name:`All toys pulse`,expect:[`Vibrate`],action:``,ok:!1,detail:e instanceof Error?e.message:String(e)})}try{if(await e.stop(),r){await Vx(150);let t=(await e.refreshToys()).filter(e=>e.liveLevel!=null&&e.liveLevel>0);c.push({id:`stop`,name:`Stop all`,expect:[],action:`Stop`,ok:t.length===0,detail:t.length===0?`all toys live level 0`:`still hot: ${t.map(e=>e.name).join(`, `)}`})}else c.push({id:`stop`,name:`Stop all`,expect:[],action:`Stop`,ok:!0,detail:`stop op completed (real Connect has no _emu levels)`})}catch(e){c.push({id:`stop`,name:`Stop all`,expect:[],action:``,ok:!1,detail:e instanceof Error?e.message:String(e)})}let l=c.filter(e=>!e.ok),u=l.length===0;return{ok:u,base:n,steps:c,summary:u?`Full scope pass · ${c.length} checks · ${o.length} toys @ ${n}`:`Full scope FAIL · ${l.length}/${c.length} · ${l.map(e=>e.name).join(`, `)}`}}function Vx(e){return new Promise(t=>setTimeout(t,e))}function Hx(e){return e===`emu`||e===`lovense`||e===`lovense-remote`}function Ux(e,t){return e.map(e=>sm({id:e.id,name:e.name,nickName:e.nickName,toyType:e.toyType,connected:e.connected,status:e.status,battery:e.battery,motors:e.motors,functions:e.functions,secondary:e.secondary,extra:e.extra,source:`lovense`},t))}function Wx(e){let t=String(e||``).toLowerCase();return t===`vibrate1`||t===`m1`?`M1`:t===`vibrate2`||t===`m2`?`M2`:t===`vibrate3`||t===`m3`?`M3`:t===`vibrate`?`Vibe`:t===`rotate`?`Rotate`:t===`thrust`||t===`thrusting`?`Thrust`:t===`air`?`Air`:t===`pump`?`Pump`:t===`all`?`All`:e}function Gx(e){if(!e)return`full`;let t=Dd(e);if(!t)return`full`;let n=vd(t);if(Ql({id:t.id,name:t.name,blurb:t.blurb,tag:t.tag,needs:n}))return`full`;switch(Zl(n)){case`rotate`:return`rotate`;case`thrust`:return`thrust`;case`air`:return`air`;case`vibe`:return`vibe`;default:return`full`}}function Kx(e){return e.length?e.map(e=>{let t={level:e.level<.04?0:e.level,ms:Math.max(1400,Math.max(1,e.ms))};return e.motorMask?.length&&(t.motorMask=e.motorMask),e.motorLevels?.length&&(t.motorLevels=e.motorLevels),t}):[{level:.7,ms:3e3}]}var qx=class{client=null;ble=new Nx;backend=`lovense`;lovenseRaw=``;lovense=new jb;intifaceUrl=`ws://127.0.0.1:12345`;onStatus;stopGen=0;playSeq=0;plays=new Map;pulseLevels=new Map;disabledToyIds=new Set;toyMotorMasks=new Map;menuMaxVibe=8;toyMaxVibe=new Map;toyIdentity={};buzzRr=0;constructor(e){this.onStatus=e,this.ble.setOnLost(()=>{if(this.backend===`bluetooth`){if(this.ble.linked){let e=this.ble.allInfo().map(e=>e.name).filter(Boolean);this.push(`Linked · ${e.join(` · `)}`)}else this.push(`Disconnected`)}}),this.ble.setOnInfo(()=>{if(this.backend!==`bluetooth`)return;if(!this.ble.linked){this.ble.reconnecting&&this.push(`Reconnecting toys…`);return}let e=this.ble.allInfo().map(e=>e.name).filter(Boolean);$b(`D`,`controller.ts:onInfo`,`ui paint`,{n:e.length,names:e}),this.push(`Linked · ${e.join(` · `)}`)})}get activeBackend(){return this.backend}get isReconnecting(){return this.backend===`bluetooth`&&this.ble.reconnecting}get isConnected(){return this.backend===`bluetooth`?this.ble.linked:this.backend===`intiface`?!!this.client?.connected:Hx(this.backend)?!!this.lovense.base:!1}setIntifaceUrl(e){this.intifaceUrl=e.trim()||`ws://127.0.0.1:12345`}setLovenseLocalIp(e){this.lovenseRaw=Eb(e)?``:e.trim(),this.lovense.setLocalIp(this.lovenseRaw)}get lovenseLocalIp(){return this.lovenseRaw}setLovenseAppId(e){}setDisabledToys(e){this.disabledToyIds=new Set((e||[]).filter(e=>typeof e==`string`&&e.trim()))}setToyMotorMasks(e){this.toyMotorMasks.clear();for(let[t,n]of Object.entries(e||{})){if(!t||!Array.isArray(n))continue;let e=[...new Set(n.map(e=>Math.round(Number(e))).filter(e=>e>=1&&e<=3))].sort();e.length&&this.toyMotorMasks.set(t,e)}}setMaxVibeCaps(e,t){let n=Math.min(8,Math.max(1,Math.round(Number(e)||8)));this.menuMaxVibe=n,this.toyMaxVibe.clear();for(let[e,r]of Object.entries(t||{})){if(!e)continue;let t=Math.min(8,Math.max(1,Math.round(Number(r)||n)));this.toyMaxVibe.set(e,t)}}maxVibeScale(e){let t=e&&this.toyMaxVibe.has(e)?this.toyMaxVibe.get(e):this.menuMaxVibe;return Math.min(8,Math.max(1,t))/8}setToyIdentity(e){this.toyIdentity={...e||{}}}refreshToys(){if(this.backend===`bluetooth`){if(!this.ble.linked){this.push(`Not connected`);return}let e=this.bleToys().map(e=>e.name).filter(Boolean);this.push(e.length?`Linked · ${e.join(` · `)}`:`Not connected`);return}if(Hx(this.backend)&&this.lovense.base){this.push(this.lovense.base);return}this.push(`Ready`)}masksForApi(e,t){let n={},r=new Set;for(let e of this.buzzableInventory())e.id&&r.add(e.id);if(t&&r.add(t),Hx(this.backend))for(let e of this.lovense.toys)e.id&&this.toyIsBuzzable(e.id)&&r.add(e.id);for(let t of r){let r=Uu(this.toyMotorMasks.get(t),e);r&&(n[t]=r)}return n}toyIsBuzzable(e){return!!e&&!this.disabledToyIds.has(e)}buzzableInventory(){return this.backend===`bluetooth`?this.bleToys().filter(e=>this.toyIsBuzzable(e.id)):Hx(this.backend)?Ux(this.lovense.toys,this.toyIdentity).filter(e=>this.toyIsBuzzable(e.id)&&e.connected!==!1):this.backend===`intiface`&&this.client?.connected?[...this.client.devices.values()].filter(e=>this.deviceHasAnyOutput(e)).map(e=>({id:String(e.index),name:e.displayName||e.name,source:`intiface`})).filter(e=>this.toyIsBuzzable(e.id)):[]}bleToys(){let e=this.toyIdentity;return this.ble.allInfo().filter(e=>e.connected!==!1).map(t=>sm({id:t.id||`ble`,name:t.name||`Toy`,toyType:t.toyType||`lovense`,connected:!0,status:`online`,motors:t.motors||1,functions:t.functions||[`Vibrate`],battery:t.battery!=null&&Number.isFinite(t.battery)?t.battery:null,secondary:t.secondary||{rotate:!1,air:!1,pump:!1,thrust:!1},source:`bluetooth`,extra:{firmware:t.firmware,modelCode:t.modelCode,mac:t.mac,typeRaw:t.typeRaw,deviceStatus:t.deviceStatus,batch:t.batch}},e))}pickSessionToy(e){if(e?.toyId&&this.toyIsBuzzable(e.toyId)){let t=this.buzzableInventory().find(t=>t.id===e.toyId);if(t)return{id:t.id,name:t.name||t.id};if(Hx(this.backend)){let t=this.lovense.toys.find(t=>t.id===e.toyId);if(t)return{id:t.id,name:String(t.name||t.nickName||t.id)}}return{id:e.toyId,name:e.toyId}}let t=this.buzzableInventory();if(e?.patternId){let n=Dd(e.patternId);if(n){let e=vd(n),r=t.filter(t=>au(e,t,n.forProducts));if(r.length)t=r;else return null}}if(!t.length)return null;let n=t[this.buzzRr%t.length];return this.buzzRr=(this.buzzRr+1)%1e6,{id:n.id,name:n.name||n.id}}wakePlay(e){if(e.timer&&=(clearTimeout(e.timer),null),e.waitResolve){let t=e.waitResolve;e.waitResolve=null,t()}}abortAllPlays(){this.stopGen++;for(let e of this.plays.values())this.wakePlay(e);this.plays.clear(),this.pulseLevels.clear(),document.documentElement.classList.remove(`is-buzzing`),document.documentElement.style.setProperty(`--pulse-level`,`0`)}isLive(e){return e.stopAt===this.stopGen&&this.plays.get(e.toyId)?.id===e.id}replacePlay(e,t,n){let r=this.plays.get(e);r&&this.wakePlay(r);let i={id:++this.playSeq,toyId:e,name:t,driveAxis:n,stopAt:this.stopGen,timer:null,waitResolve:null};return this.plays.set(e,i),i}beginPlay(e){let t=Gx(e?.patternId),n=this.pickSessionToy(e);if(!n)throw e?.patternId?Error(`No enabled toy can play -${e.patternId}- - turn buzz On on a matching Linked toy`):Error(`No toys enabled for buzz - turn buzz On on a Linked toy (or Scan again)`);return this.replacePlay(n.id,n.name,t)}endPlay(e){this.plays.get(e.toyId)?.id===e.id&&this.plays.delete(e.toyId),this.pulseLevels.delete(e.toyId),this.syncPulseUi()}syncPulseUi(){let e=0;for(let t of this.pulseLevels.values())t>e&&(e=t);document.documentElement.style.setProperty(`--pulse-level`,String(e)),document.documentElement.classList.toggle(`is-buzzing`,e>.02)}get lovenseBase(){return this.lovense.base}get isLocalEmu(){return this.backend===`emu`||Hx(this.backend)&&Fx(this.lovense.base)}async runFullScopeCheck(){if(!Hx(this.backend)||!this.lovense.base)throw Error(`Connect Lovense Connect first`);this.push(`Full-scope check running...`);let e=await Bx(this.lovense);return this.push(e.summary),e}openBluetoothPicker(){return Ex()?(this.backend=`bluetooth`,this.ble.openPickerFromUserGesture().then(e=>this.ble.attachChosenDevice(e,{onPicked:e=>{let t=String(e||`device`).replace(/^LVS-/i,``);this.push(`Connecting · ${t}…`)}})).then(async e=>{let t=window.__jttBlePendingLinks,n=Math.max(0,Math.floor(Number(t)||0));window.__jttBlePendingLinks=0;let r=[];for(;n>0;){--n;try{let e=await this.ble.openPickerFromUserGesture();await this.ble.attachChosenDevice(e,{onPicked:e=>{let t=String(e||`device`).replace(/^LVS-/i,``);this.push(`Connecting · ${t}…`)}})}catch(e){for(r.push(e instanceof Error?e.message:String(e));n>0;){--n;try{await this.ble.openPickerFromUserGesture()}catch{}}break}}let i=this.ble.allInfo().map(e=>e.name).filter(Boolean);if(this.push(i.length>1?`Linked · ${i.join(` · `)}`:`Linked · ${e.name}`),r.length&&i.length)this.push(`Some toys failed · ${r[0]}`);else if(r.length)throw Error(r[0]||`Link failed`);return e}).catch(e=>{if(!this.ble.linked)this.push(`Not connected`);else{let e=this.ble.allInfo().map(e=>e.name).filter(Boolean);this.push(`Linked · ${e.join(` · `)}`)}throw e})):Promise.reject(Error(Dx()))}async connect(e,t){if(e===`bluetooth`){if(this.backend!==`bluetooth`&&await this.disconnect(!0),!Ex())throw this.backend=`bluetooth`,this.push(`Not connected`),Error(Dx());if(this.backend=`bluetooth`,t?.skipPicker){!this.ble.reconnecting&&!this.ble.linked&&this.push(`Reconnecting toys…`);let e=await this.ble.tryReconnectKnown({waitForAds:t.waitForAds});if($b(`C`,`controller.ts:connect skipPicker`,`reconnect finished`,{waitForAds:t.waitForAds,linked:e.linked,permitted:e.permitted,names:e.names,permittedNames:e.permittedNames}),e.linked>0){let t=e.permitted>e.linked?` · recovering ${e.permitted-e.linked}`:``;this.push(`Linked · ${e.names.join(` · `)}${t}`);return}let n=Nx.loadRememberedNames();if(e.permitted>0){this.push(this.ble.reconnecting?`Reconnecting toys…`:`Browser still remembers ${e.permitted} · power toys on, then Connect again`);return}if(n.length>0){this.push(this.ble.reconnecting?`Reconnecting toys…`:`After refresh: Connect, then Add toy for each other paired toy · had ${n.length}`);return}this.push(`Not connected`);return}this.push(`Selecting device…`);try{let e=await this.ble.connectFromPicker();this.push(`Linked · ${e.name}`);return}catch(e){throw this.push(`Not connected`),e}}if(await this.disconnect(!0),this.backend=e,e===`intiface`){let e=new $.ButtplugClient(`Just The Tip`),t=new $.ButtplugBrowserWebsocketClientConnector(this.intifaceUrl);e.addListener(`deviceadded`,()=>this.refreshIntiface()),e.addListener(`deviceremoved`,()=>this.refreshIntiface());try{await e.connect(t)}catch(e){this.backend=`intiface`;let t=e instanceof Error?e.message:String(e);throw this.push(`Not connected`),Error(`Intiface unavailable (${t})`)}this.client=e,await e.startScanning(),this.refreshIntiface(`Intiface connected`);return}if(e===`emu`)throw this.backend=`lovense`,this.push(`Unavailable`),Error(`Local emulator is disabled`);let n=e===`lovense-remote`?`lovense-remote`:`lovense`,r=n===`lovense-remote`;if(Eb(this.lovenseRaw)){if(r)throw this.backend=n,this.push(`Local IP needed`),Error(`Paste the Local IP from Lovense Remote → Game Mode (Enable LAN)`);this.backend=`lovense`,this.push(`Searching this Wi‑Fi…`);let e=await this.lovense.discover();if(!e.ok||!e.localIp)throw this.push(`Not found`),Error(e.error||`Open Lovense Connect on this Wi‑Fi, then paste the Local IP it shows`);this.setLovenseLocalIp(e.localIp)}let i=this.lovenseRaw.trim();if(/^127\.0\.0\.1\b/i.test(i)||/^localhost\b/i.test(i)||/\/\/127\.0\.0\.1\b/i.test(i)||/\/\/localhost\b/i.test(i))throw this.backend=n,this.push(`Invalid endpoint`),Error(r?`Local IP must be the phone/PC running Remote Game Mode on the LAN`:`Local IP must be the Connect host on the LAN`);this.push(`Connecting…`);let a=await this.lovense.probe(this.lovenseRaw,r?{mode:`remote`}:void 0);if(!a.ok||!a.base)throw this.backend=n,this.lovense.clear(),this.push(`Offline`),Error([r?`Could not reach Lovense Remote`:`Could not reach Lovense Connect`,a.error||``].filter(Boolean).join(` — `));this.backend=n,this.push(a.detail||`Linked · ${a.base}`)}async disconnect(e=!1){this.abortAllPlays();let t=Hx(this.backend)?this.lovense.base:``,n=t?[...this.lovense.toys]:[];if(t&&this.lovense.clear(),this.backend===`bluetooth`||this.ble.linked)try{await Promise.race([this.ble.disconnect(!0),new Promise(e=>setTimeout(e,2e3))])}catch{}if(this.client?.connected)try{await Promise.race([(async()=>{await this.client?.stopAllDevices(),await this.client?.disconnect()})(),new Promise(e=>setTimeout(e,2e3))])}catch{}t&&Promise.race([this.lovense.stopOn(t,n),new Promise(e=>setTimeout(e,2e3))]).catch(()=>{});let r=this.backend;this.client=null,this.backend=r===`bluetooth`||r===`intiface`||r===`lovense`||r===`lovense-remote`?r:`lovense`,e||this.push(`Disconnected`)}async scan(e){let t=e||this.backend;if(t===`bluetooth`){await this.openBluetoothPicker();return}if(Hx(t)){this.backend=t;let e=t===`lovense-remote`;if(Eb(this.lovenseRaw)){if(e)throw this.push(`Local IP needed`),Error(`Paste the Local IP from Lovense Remote → Game Mode (Enable LAN)`);this.push(`Searching this Wi‑Fi…`);let t=await this.lovense.discover();if(!t.ok||!t.localIp)throw this.push(`Not found`),Error(t.error||`Open Lovense Connect on this Wi‑Fi, then paste the Local IP it shows`);this.setLovenseLocalIp(t.localIp)}this.push(`Refreshing toys...`);let n=await this.lovense.probe(this.lovenseRaw,e?{mode:`remote`}:void 0);if(!n.ok)throw Error(n.error||`Probe failed`);this.push(n.detail||`ok`);return}if(this.client?.connected){await this.client.startScanning(),this.refreshIntiface(`Scanning...`);return}throw Error(`Not connected`)}async solidBuzz(e,t=4e3){let n=Math.min(1,Math.max(0,e)),r=Math.max(1500,Math.min(3e4,Math.round(t)||4e3)),i=this.beginPlay();this.push(`Solid buzz · ${i.name} · ${(n*100).toFixed(0)}% · ${r}ms`);try{if(!this.isLive(i))return;await this.setLevel(n,r,void 0,void 0,i),await this.waitMs(i,r)}finally{if(this.isLive(i)){try{await this.setLevel(0,1e3,void 0,void 0,i)}catch{}this.endPlay(i),Hx(this.backend)||this.backend===`bluetooth`?this.push(`Idle`):this.refreshIntiface(`Idle`)}}}async testFeature(e,t,n=3e3,r=.95){let i=Math.max(1500,Math.min(15e3,Math.round(n)||3e3)),a=Math.min(1,Math.max(.1,r)),o=Wx(t),s=String(t||``).toLowerCase(),c=`full`;s===`rotate`?c=`rotate`:s===`thrust`||s===`thrusting`?c=`thrust`:s===`air`||s===`pump`?c=`air`:(/^vibrate\d*$/.test(s)||s===`m1`||s===`m2`||s===`m3`)&&(c=`vibe`);let l=this.replacePlay(e,e,c);if(this.push(`Test ${o} · ${i}ms`),Hx(this.backend)){if(!this.lovense.base)throw this.endPlay(l),Error(`Not connected`);if(!e)throw this.endPlay(l),Error(`Toy id required`);try{if(!this.isLive(l))return;let n=Math.max(1.2,Math.min(30,i/1e3+.25));await this.lovense.testChannel(e,t,a,n),await this.waitMs(l,i)}finally{if(this.isLive(l)){try{await this.lovense.stop(t=>t.id===e)}catch{}this.endPlay(l),this.push(`Idle`)}}return}if(this.backend===`bluetooth`){if(!this.ble.linked)throw this.endPlay(l),Error(`Not connected`);if(!e)throw this.endPlay(l),Error(`Toy id required`);try{if(!this.isLive(l))return;await this.bleDriveChannel(e,s,a),await this.waitMs(l,i)}finally{if(this.isLive(l)){try{await this.ble.stop([e])}catch{}this.endPlay(l),this.push(`Idle`)}}return}try{if(!this.isLive(l))return;await this.setLevel(a,i,void 0,void 0,l),await this.waitMs(l,i)}finally{if(this.isLive(l)){try{await this.setLevel(0,1e3,void 0,void 0,l)}catch{}this.endPlay(l),this.refreshIntiface(`Idle`)}}}async bleDriveChannel(e,t,n){let r=[e],i=Math.min(1,Math.max(0,n));if(t===`rotate`){await this.ble.drive(0,{rotate01:i,toyIds:r});return}if(t===`thrust`||t===`thrusting`){await this.ble.drive(0,{thrust01:i,toyIds:r});return}if(t===`air`||t===`pump`){await this.ble.drive(0,{air01:i,toyIds:r});return}let a,o=t.match(/^vibrate(\d)$/i)||t.match(/^m(\d)$/i);o?a=[Number(o[1])]:(t===`both`||t===`all`||t===`vibrate`||t===`vibrate`)&&(a=void 0),await this.ble.drive(i,{toyIds:r,motors:a})}async buzz(e,t,n=`spark`,r){let i=this.beginPlay({patternId:n,toyId:r}),a=this.maxVibeScale(i.toyId),o=Math.min(1,Math.max(0,e))*a,s=Dd(n),c=Ad(n,o,t>0?t:void 0),l=!!s&&i.driveAxis===`full`&&Ql({id:s.id,name:s.name,blurb:s.blurb,tag:s.tag,needs:vd(s)});Hx(this.backend)&&i.driveAxis&&i.driveAxis!==`vibe`&&(i.driveAxis!==`full`||l)&&(c=Kx(c));let u=c.reduce((e,t)=>e+t.ms,0);this.push(`Buzz ${n} · ${i.name}${l?` · vibe+rotate`:i.driveAxis&&i.driveAxis!==`full`?` · ${i.driveAxis}`:``} · ${(o*100).toFixed(0)}%${a<.999?` · cap ${Math.round(a*8)}/8`:``} · ${u}ms`);try{for(let e of c){if(!this.isLive(i))return;if(e.level<.04)await this.setLevel(0,1e3,void 0,void 0,i),await this.waitMs(i,e.ms);else{let t=i.driveAxis===`rotate`||i.driveAxis===`thrust`||i.driveAxis===`air`?Math.max(.28,e.level):e.level;await this.setLevel(t,e.ms,e.motorMask,e.motorLevels,i),await this.waitMs(i,e.ms)}}}finally{if(this.isLive(i)){try{await this.setLevel(0,1e3,void 0,void 0,i)}catch{}this.endPlay(i),this.plays.size===0&&(Hx(this.backend)||this.backend===`bluetooth`?this.push(`Idle`):this.refreshIntiface(`Idle`))}}}async setLevel(e,t=1e3,n,r,i){let a=Math.min(1,Math.max(0,e)),o=r?.length?r.map(e=>Math.min(1,Math.max(0,Number(e)||0))):void 0,s=i?.toyId,c=i?.driveAxis||`full`;if(this.backend===`bluetooth`){if(!this.ble.linked)throw Error(`Not connected`);s&&(a>.02?this.pulseLevels.set(s,a):this.pulseLevels.delete(s)),this.syncPulseUi();let e=this.ble.allInfo().filter(e=>e.connected!==!1),t=[];if(s?e.some(e=>e.id===s)&&this.toyIsBuzzable(s)&&(t=[s]):t=e.filter(e=>this.toyIsBuzzable(e.id)).map(e=>e.id),!t.length)throw Error(`No toys enabled for buzz - turn buzz On on a Linked toy`);if(a<.04){await this.ble.stop(t);return}let r=c,i=this.masksForApi(n,s);for(let e of t){let t=i[e],n=!!this.bleToys().find(t=>t.id===e)?.secondary?.rotate;r===`rotate`?await this.ble.drive(0,{rotate01:a,toyIds:[e]}):r===`thrust`?await this.ble.drive(0,{thrust01:a,toyIds:[e]}):r===`air`?await this.ble.drive(0,{air01:a,toyIds:[e]}):r===`vibe`?await this.ble.drive(a,{toyIds:[e],motors:t?.length?t:void 0,motorLevels:o}):n?await this.ble.drive(a,{rotate01:a,toyIds:[e],motors:t?.length?t:void 0,motorLevels:o}):await this.ble.drive(a,{toyIds:[e],motors:t?.length?t:void 0,motorLevels:o})}return}if(Hx(this.backend)){if(!this.lovense.base)throw Error(`Not connected`);let e=s?e=>e.id===s:e=>this.toyIsBuzzable(e.id);if(a<.04){await this.lovense.stop(e);return}if(!this.lovense.toys.filter(e).length)throw Error(`No toys enabled for buzz - turn buzz On on a Linked toy (or Scan again)`);let r=this.masksForApi(n,s);if(s){let t=r[s];if(Array.isArray(t)&&t.length===0){await this.lovense.stop(e);return}}let i=0;t>=1200&&(i=Math.max(1.2,Math.min(120,t/1e3+.2))),await this.lovense.drive(a,i,e,r,c||void 0,o);return}if(!this.client?.connected)throw Error(`Intiface not connected`);let l=[...this.client.devices.values()],u=l.filter(e=>this.deviceHasAnyOutput(e)),d=u.length?u:l;if(!d.length)throw Error(`No toys found - pair in Intiface Central`);let f=s?d.filter(e=>String(e.index)===s):d.filter(e=>this.toyIsBuzzable(String(e.index)));if(a<.04){if(s){let e=f[0];if(e)try{await e.stop()}catch{}}else try{await this.client.stopAllDevices()}catch{}return}if(!f.length)throw Error(`No toys enabled for buzz - turn buzz On on a Linked toy`);await this.driveIntifaceDevice(f[0],a,c||`full`,o)}async stopAll(){if(this.abortAllPlays(),this.backend===`bluetooth`){try{await Promise.race([this.ble.stop(),new Promise(e=>setTimeout(e,4e3))])}catch{}this.push(`Stopped`);return}if(Hx(this.backend)){try{await this.lovense.stop()}catch{}this.push(`Stopped`);return}if(this.client?.connected){try{await this.client.stopAllDevices()}catch{}this.refreshIntiface(`Stopped`)}}deviceHasAnyOutput(e){let t=[$.OutputType.Vibrate,$.OutputType.Rotate,$.OutputType.Oscillate,$.OutputType.Constrict,$.OutputType.Inflate,$.OutputType.Position];if(t.some(t=>e.hasOutput(t)))return!0;for(let n of e.features.values())if(t.some(e=>n.hasOutput(e)))return!0;return!1}async driveIntifaceDevice(e,t,n=`full`,r){let i=[$.DeviceOutput.Vibrate,$.DeviceOutput.Rotate,$.DeviceOutput.Oscillate,$.DeviceOutput.Constrict,$.DeviceOutput.Inflate,$.DeviceOutput.Position],a=[$.OutputType.Vibrate,$.OutputType.Rotate,$.OutputType.Oscillate,$.OutputType.Constrict,$.OutputType.Inflate,$.OutputType.Position],o=e=>n===`rotate`?e===$.OutputType.Rotate:n===`thrust`?e===$.OutputType.Position||e===$.OutputType.Oscillate:n===`air`?e===$.OutputType.Constrict||e===$.OutputType.Inflate:n!==`vibe`||e===$.OutputType.Vibrate,s=!1,c=!1;if(r?.length&&(n===`full`||n===`vibe`)){let n=[...e.features.values()].filter(e=>e.hasOutput($.OutputType.Vibrate));if(n.length>1)for(let e=0;e<n.length;e++){let i=r[e]??r[r.length-1]??t,a=Math.min(1,Math.max(0,i));try{await n[e].runOutput($.DeviceOutput.Vibrate.percent(a)),s=!0,c=!0}catch{try{await n[e].runOutput($.DeviceOutput.Vibrate.value(a)),s=!0,c=!0}catch{}}}}for(let n=0;n<i.length;n++){let r=a[n];if(!o(r)||c&&r===$.OutputType.Vibrate)continue;let l=i[n];if(!e.hasOutput(r)){let t=!1;for(let n of e.features.values())if(n.hasOutput(r)){t=!0;break}if(!t)continue}try{await e.runOutput(l.percent(t)),s=!0}catch{try{await e.runOutput(l.value(t)),s=!0}catch{}}}if(!s)try{await e.runOutput($.DeviceOutput.Vibrate.percent(t)),s=!0}catch{try{await e.runOutput($.DeviceOutput.Vibrate.value(t)),s=!0}catch{}}if(!s)throw Error(`Toy -${e.displayName||e.name}- listed but rejected all motor commands - check Intiface device control / pairing`)}refreshIntiface(e){let t=this.client?[...this.client.devices.values()].map(e=>e.displayName||e.name):[];this.push(e??t.length?`Ready · ${t.length} device(s)`:`Connected — no devices`)}intifaceToys(){return this.client?[...this.client.devices.values()].map(e=>{let t=[],n={rotate:!1,air:!1,pump:!1,thrust:!1},r=0,i=e=>{switch(e){case $.OutputType.Vibrate:r++,t.push(r>1?`Vibrate${r}`:`Vibrate`);break;case $.OutputType.Rotate:n.rotate=!0,t.push(`Rotate`);break;case $.OutputType.Oscillate:n.thrust=!0,t.push(`Oscillate`);break;case $.OutputType.Constrict:case $.OutputType.Inflate:n.air=!0,n.pump=!0,t.push(String(e));break;case $.OutputType.Position:n.thrust=!0,t.push(`Position`);break;default:t.push(String(e))}};e.hasOutput($.OutputType.Vibrate)&&i($.OutputType.Vibrate),e.hasOutput($.OutputType.Rotate)&&i($.OutputType.Rotate),e.hasOutput($.OutputType.Oscillate)&&i($.OutputType.Oscillate),e.hasOutput($.OutputType.Constrict)&&i($.OutputType.Constrict),e.hasOutput($.OutputType.Inflate)&&i($.OutputType.Inflate),e.hasOutput($.OutputType.Position)&&i($.OutputType.Position);for(let t of e.features.values())for(let e of t.outputs.keys())i(e);return{id:String(e.index),name:e.displayName||e.name,toyType:e.name,connected:!0,status:`online`,motors:Math.max(1,r||1),functions:[...new Set(t)],secondary:n,extra:{},source:`intiface`}}):[]}waitMs(e,t){return new Promise(n=>{e.waitResolve=n,e.timer=setTimeout(()=>{e.timer=null,e.waitResolve=null,n()},Math.max(0,t))})}push(e){let t=[];this.backend===`bluetooth`?t=this.bleToys():Hx(this.backend)?t=Ux(this.lovense.toys,this.toyIdentity):this.backend===`intiface`&&(t=this.intifaceToys()),this.onStatus({backend:this.backend,connected:this.isConnected,devices:t.map(e=>e.name),toys:t,endpoint:Hx(this.backend)&&this.lovense.base?this.lovense.base:this.backend===`intiface`?this.intifaceUrl:void 0,message:e})}};function Jx(){return`
    <div class="atmosphere" aria-hidden="true"></div>
    <button
      type="button"
      class="menu-btn"
      id="btn-menu"
      aria-label="Menu"
      aria-expanded="false"
      aria-controls="app-drawer"
      title="Menu"
    >
      <span class="burger" aria-hidden="true"></span>
    </button>
    <div class="shell">
      <header class="brand-bar">
        <span class="menu-btn-slot" aria-hidden="true"></span>
        <button type="button" class="brand-lockup" id="btn-home-brand" title="Home" aria-label="Go to Home">
            <img
              class="brand-mark brand-mark-app"
              src="${zh}"
              width="128"
              height="128"
              alt="${Fh}"
              decoding="async"
            />
            <div class="brand-text">
              <p class="brand visually-hidden">${Fh}</p>
              <p class="brand-chain">
                <span class="pls-dot" aria-hidden="true"></span>
                PulseChain tip-to-buzz
              </p>
            </div>
        </button>
        <div class="header-tools">
          <button
            type="button"
            class="btn primary btn-header-watch"
            id="btn-watch"
            title="Start or stop listening for tips and chain events"
            aria-pressed="false"
          >
            Start watching
          </button>
          <div class="link-lights" id="link-lights" role="status" aria-label="Toy connection">
          <span
            class="link-light"
            id="link-light-lovense"
            data-backend="lovense"
            title="Lovense Connect"
          >
            <svg class="link-light-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 20.4S4.8 15.6 4.8 10.1A4.4 4.4 0 0 1 12 6.6a4.4 4.4 0 0 1 7.2 3.5c0 5.5-7.2 10.3-7.2 10.3z"
              />
            </svg>
            <span class="visually-hidden">Lovense Connect</span>
          </span>
          <span
            class="link-light"
            id="link-light-lovense-remote"
            data-backend="lovense-remote"
            title="Lovense Remote"
          >
            <svg class="link-light-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v3M12 18v3M3 12h3M18 12h3M6.2 6.2l2.1 2.1M15.7 15.7l2.1 2.1M17.8 6.2l-2.1 2.1M8.3 15.7l-2.1 2.1"
              />
              <circle
                cx="12"
                cy="12"
                r="3.2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
            <span class="visually-hidden">Lovense Remote</span>
          </span>
          <span
            class="link-light"
            id="link-light-bluetooth"
            data-backend="bluetooth"
            title="Bluetooth"
          >
            <svg class="link-light-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="2.1"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 7l10 10-5 5V2l5 5L7 17"
              />
            </svg>
            <span class="visually-hidden">Bluetooth</span>
          </span>
          <span
            class="link-light"
            id="link-light-intiface"
            data-backend="intiface"
            title="Intiface"
          >
            <svg class="link-light-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="2.1"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 3.5v6.5M16 3.5v6.5M6.5 10h11v3.2a5.5 5.5 0 0 1-11 0V10zM12 18.7V21"
              />
            </svg>
            <span class="visually-hidden">Intiface</span>
          </span>
          </div>
        </div>
        <p class="tag" id="page-tag">Home</p>
      </header>

      <div id="page-main">
      <ol class="setup-steps" aria-label="Setup">
        <li>
          <section class="panel panel-address" aria-labelledby="home-wallet-h">
            <div class="panel-head">
              <h2 id="home-wallet-h"><span class="step-num">1</span> Tip wallet</h2>
              <span class="pill" id="address-pill">required</span>
            </div>
            <div class="wallet-watch-row">
              <label class="field address-field">
                <span>Paste the PulseChain address tippers send to</span>
                <input id="receive" type="text" inputmode="text" placeholder="0x…" spellcheck="false" autocomplete="off" autocapitalize="off" />
              </label>
              <label class="field wallet-name-field">
                <span>Name (optional)</span>
                <input
                  id="receive-label"
                  type="text"
                  maxlength="48"
                  placeholder="e.g. Main show"
                  spellcheck="false"
                  autocomplete="off"
                />
              </label>
              <button type="button" class="btn ghost" id="btn-save-wallet" title="Save this address + name to your list">Save</button>
            </div>
            <p class="hint">This is your tip jar address — not a private key. Saved wallets live in Settings.</p>
            <p class="settings-flash home-flash" id="home-wallet-status" role="status"></p>
          </section>
        </li>

        <li>
          <section class="panel" id="device-panel" aria-labelledby="device-h">
            <div class="panel-head">
              <h2 id="device-h"><span class="step-num">2</span> Toy</h2>
              <div class="panel-head-tools">
                <span class="pill" id="device-pill">idle</span>
                <button
                  type="button"
                  class="panel-min-btn"
                  id="btn-device-min"
                  aria-expanded="true"
                  aria-controls="device-body"
                  title="Minimize Device"
                >
                  <span class="panel-min-icon" aria-hidden="true"></span>
                  <span class="visually-hidden" id="device-min-label">Minimize Device</span>
                </button>
              </div>
            </div>
            <div class="panel-body" id="device-body">
              <p class="hint" id="device-summary"></p>
              <p class="hint device-coop" id="device-coop">
                <strong>Chaturbate tippers?</strong>
                Use <strong>Lovense Connect</strong> so site tips and PulseChain tips share the same toy.
              </p>
              <div class="device-setup settings-grid" id="device-setup">
                <div class="field backend-field">
                  <span>How to connect</span>
                  <div class="backend-picks" role="radiogroup" aria-label="How to connect">
                    <button
                      type="button"
                      class="backend-pick"
                      id="backend-pick-lovense"
                      data-backend="lovense"
                      aria-pressed="false"
                      title="Lovense Connect (recommended)"
                    >
                      <span class="link-light" data-backend="lovense">
                        <svg class="link-light-icon" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fill="currentColor"
                            d="M12 20.4S4.8 15.6 4.8 10.1A4.4 4.4 0 0 1 12 6.6a4.4 4.4 0 0 1 7.2 3.5c0 5.5-7.2 10.3-7.2 10.3z"
                          />
                        </svg>
                      </span>
                      <span class="backend-pick-name">Connect</span>
                    </button>
                    <button
                      type="button"
                      class="backend-pick"
                      id="backend-pick-lovense-remote"
                      data-backend="lovense-remote"
                      aria-pressed="false"
                      title="Lovense Remote Game Mode"
                    >
                      <span class="link-light" data-backend="lovense-remote">
                        <svg class="link-light-icon" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 3v3M12 18v3M3 12h3M18 12h3M6.2 6.2l2.1 2.1M15.7 15.7l2.1 2.1M17.8 6.2l-2.1 2.1M8.3 15.7l-2.1 2.1"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="3.2"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                          />
                        </svg>
                      </span>
                      <span class="backend-pick-name">Remote</span>
                    </button>
                    <button
                      type="button"
                      class="backend-pick"
                      id="backend-pick-bluetooth"
                      data-backend="bluetooth"
                      aria-pressed="false"
                      title="Bluetooth (this PC)"
                    >
                      <span class="link-light" data-backend="bluetooth">
                        <svg class="link-light-icon" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7 7l10 10-5 5V2l5 5L7 17"
                          />
                        </svg>
                      </span>
                      <span class="backend-pick-name">Bluetooth</span>
                    </button>
                    <button
                      type="button"
                      class="backend-pick"
                      id="backend-pick-intiface"
                      data-backend="intiface"
                      aria-pressed="false"
                      title="Intiface (advanced)"
                    >
                      <span class="link-light" data-backend="intiface">
                        <svg class="link-light-icon" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8 3.5v6.5M16 3.5v6.5M6.5 10h11v3.2a5.5 5.5 0 0 1-11 0V10zM12 18.7V21"
                          />
                        </svg>
                      </span>
                      <span class="backend-pick-name">Intiface</span>
                    </button>
                  </div>
                  <select id="backend" class="visually-hidden" aria-hidden="true" tabindex="-1">
                    <option value="lovense">Lovense Connect (recommended)</option>
                    <option value="lovense-remote">Lovense Remote (Game Mode)</option>
                    <option value="bluetooth">Bluetooth (this PC)</option>
                    <option value="intiface">Intiface (advanced)</option>
                  </select>
                </div>
                <label class="field grow" id="url-field" hidden>
                  <span id="url-label">Local IP</span>
                  <input id="device-url" type="text" spellcheck="false" autocomplete="off" />
                </label>
                <label class="field narrow" id="appid-field" hidden>
                  <span>APPID <em>(optional)</em></span>
                  <input id="lovense-appid" type="text" spellcheck="false" autocomplete="off" />
                </label>
              </div>
              <p class="hint" id="device-hint"></p>
              <details class="hint lovense-more" id="lovense-download" hidden>
                <summary>Windows PC app</summary>
                <p>
                  Needs Lovense’s USB adapter — phone Connect does not.
                  Skip Stream Master.
                  <a
                    href="${Ib}"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Connect download</a>
                  (<code>Lovense_Connect.exe</code>).
                </p>
              </details>
              <div class="ble-relink" id="ble-relink" hidden>
                <button type="button" class="ble-relink-close" id="btn-ble-dismiss" title="Hide this tip" aria-label="Hide this tip">×</button>
                <p class="ble-relink-title" id="ble-relink-title"></p>
                <p class="ble-relink-body" id="ble-relink-body"></p>
                <div class="actions">
                  <button type="button" class="btn tiny" id="btn-ble-flag" title="Copy the desktop Chrome/Edge flag link (browser builds only)">Keep toys after refresh</button>
                  <button type="button" class="btn ghost tiny" id="btn-ble-lovense" hidden title="Lovense Connect survives refresh">Use Lovense Connect</button>
                </div>
              </div>
              <div class="actions">
                <button type="button" class="btn primary" id="btn-connect">Connect</button>
                <button type="button" class="btn danger" id="btn-disconnect" hidden title="Stop this page talking to the toy. Stays off after refresh.">Disconnect</button>
                <button type="button" class="btn" id="btn-test" title="Full tip test: alert, feed, queue, and toy">Test</button>
                <button type="button" class="btn ghost" id="btn-stop">Stop</button>
                <button type="button" class="btn" id="btn-scan" hidden title="Refresh the toy list">Refresh</button>
              </div>
              <div class="toy-box" id="toy-box">
                <span class="toy-label">Linked toys</span>
                <div class="toy-list" id="toy-list"></div>
                <p class="toy-empty" id="toy-empty">Not connected</p>
              </div>
              <p class="status" id="device-status"></p>
            </div>
          </section>
        </li>
      </ol>
      </div>

      <div id="page-live" class="page-settings" hidden>
        <p class="settings-intro">
          One watch session for wallet tips and PulseChain events (PulseX swaps, LP add/remove, OmniBridge, custom logs) — all buzz the same tip ladder.
        </p>

        <section class="panel" id="watch-panel" aria-labelledby="watch-h">
          <div class="panel-head">
            <h2 id="watch-h">Go live</h2>
            <div class="panel-head-tools">
              <span class="pill" id="watch-pill">stopped</span>
              <span class="live-flash" id="live-flash" aria-hidden="true"></span>
              <button
                type="button"
                class="panel-min-btn"
                id="btn-watch-min"
                aria-expanded="true"
                aria-controls="watch-body"
                title="Minimize Go live"
              >
                <span class="panel-min-icon" aria-hidden="true"></span>
                <span class="visually-hidden" id="watch-min-label">Minimize Go live</span>
              </button>
            </div>
          </div>
          <div class="panel-body" id="watch-body">
            <p class="hint" id="session-line"></p>
            <div class="actions go-live-actions">
              <button type="button" class="btn primary" id="btn-simulate" title="Test the list, menu, and toy without a real payment. Shift+click for a longer pattern test.">Fake a tip</button>
            </div>
            <p class="status" id="watch-status"></p>
            <p class="hint">Fake a tip is the full test: feed, menu match, and toy. Shift+click runs a longer pattern test.</p>
          </div>
        </section>

        <section class="panel feed-panel" aria-labelledby="feed-h">
          <div class="panel-head">
            <h2 id="feed-h">Wallet tips</h2>
            <span class="pill" id="queue-pill">queue idle</span>
            <div class="feed-actions">
              <button type="button" class="btn ghost tiny" id="btn-clear">Clear</button>
            </div>
          </div>
          <div class="pay-earnings" id="pay-earnings" aria-live="polite">
            <div class="pay-earnings-label">Earned</div>
            <div class="pay-earnings-total" id="pay-earnings-total">0</div>
            <div class="pay-earnings-meta" id="pay-earnings-meta">No tips yet</div>
          </div>
          <p class="status queue-status" id="queue-status">Each toy buzzes its own queue</p>
          <ul class="feed" id="feed"></ul>
          <p class="empty feed-empty-idle" id="feed-empty">Ready and listening — your first tip will appear here.</p>
          <details class="advanced-fold" id="feed-advanced">
            <summary>Backup tip list</summary>
            <p class="hint feed-backup-hint">Wallet tips and pool swaps auto-save in this browser (last 200). Export backs up both. Settings Export does not include this list.</p>
            <div class="actions">
              <button type="button" class="btn ghost tiny" id="btn-export-payments-json" title="Download payments log as JSON backup">Export JSON</button>
              <button type="button" class="btn ghost tiny" id="btn-export-payments-csv" title="Download payments as spreadsheet CSV">Export CSV</button>
            </div>
          </details>
        </section>

        <section class="settings-block" id="live-pools" aria-labelledby="set-pools-h">
          <div class="settings-block-head">
            <h2 id="set-pools-h">Chain triggers <span class="tab-hint">optional</span></h2>
          </div>
          <p class="hint">
            Watch PulseX pairs (swaps and LP add/remove), the PulseChain OmniBridge, or any contract event you paste.
            Quote size drives buzzes. PulseX pairs are verified against official factories before they can trigger.
            No tip wallet needed — enable Watch chain events, tick targets On, then Start watching in the header.
          </p>
          <label class="field settings-toggle-field">
            <span>Watch chain events</span>
            <input type="checkbox" id="pool-watch-enabled" />
          </label>
          <p class="setup-note" id="pool-watch-hint">Off · not listening for chain events</p>
          <div class="pool-add cardish">
            <p class="pool-add-kicker">PulseX pair</p>
            <label class="field">
              <span>Pair address</span>
              <input id="pool-address" type="text" placeholder="0x…" spellcheck="false" autocomplete="off" />
            </label>
            <div class="settings-grid">
              <label class="field">
                <span>Label</span>
                <input id="pool-label" type="text" placeholder="PLSX/WPLS" autocomplete="off" />
              </label>
              <label class="field narrow">
                <span>Min quote</span>
                <input id="pool-min" type="number" min="0" step="any" value="50000" inputmode="decimal" />
              </label>
              <label class="field narrow">
                <span>Quote symbol</span>
                <input id="pool-quote-sym" type="text" value="WPLS" autocomplete="off" />
              </label>
              <label class="field">
                <span>Swap side</span>
                <select id="pool-side">
                  <option value="all">All swaps</option>
                  <option value="buy">Buy (spend quote)</option>
                  <option value="sell">Sell (receive quote)</option>
                </select>
              </label>
            </div>
            <label class="field grow">
              <span>Quote token (default WPLS)</span>
              <input id="pool-quote" type="text" value="0xa1077a294dde1b09bb078844df40758a5d0f9a27" spellcheck="false" autocomplete="off" />
            </label>
            <div class="actions">
              <button type="button" class="btn primary tiny" id="btn-pool-add">Add pool</button>
              <button type="button" class="btn ghost tiny" id="btn-pool-presets">Load PulseX presets</button>
            </div>
            <p class="setup-note" id="pool-form-status"></p>
          </div>
          <div class="pool-list-tools actions">
            <button type="button" class="btn ghost tiny" id="btn-pools-all" title="Tick every listed pool On">All on</button>
            <button type="button" class="btn ghost tiny" id="btn-pools-none" title="Untick every listed pool">All off</button>
          </div>
          <ul class="pool-list" id="pool-list"></ul>
          <p class="setup-note" id="pool-list-empty">No pools yet — paste a pair address or load presets (presets start Off — tick to watch). Open Alert to enable LP add/remove.</p>

          <div class="pool-add cardish" id="bridge-add">
            <p class="pool-add-kicker">Bridge</p>
            <p class="hint">PulseChain OmniBridge ERC-20 deposits (in) and withdrawals (out). Sized in the bridged token. Token transfers (mint/burn to the mediator) are a backup if OmniBridge logs miss — not the primary trigger.</p>
            <label class="field">
              <span>Mediator address</span>
              <input id="bridge-address" type="text" placeholder="0x4fD0aaa7…" spellcheck="false" autocomplete="off" />
            </label>
            <div class="settings-grid">
              <label class="field">
                <span>Label</span>
                <input id="bridge-label" type="text" placeholder="OmniBridge" autocomplete="off" />
              </label>
              <label class="field narrow">
                <span>Min amount</span>
                <input id="bridge-min" type="number" min="0" step="any" value="100" inputmode="decimal" />
              </label>
              <label class="field">
                <span>Direction</span>
                <select id="bridge-dir">
                  <option value="both">In and out</option>
                  <option value="in">Deposits in</option>
                  <option value="out">Withdrawals out</option>
                </select>
              </label>
            </div>
            <label class="field grow">
              <span>Token filter (optional)</span>
              <input id="bridge-token" type="text" placeholder="any token" spellcheck="false" autocomplete="off" />
            </label>
            <div class="actions">
              <button type="button" class="btn primary tiny" id="btn-bridge-add">Add bridge</button>
              <button type="button" class="btn ghost tiny" id="btn-bridge-presets">Load OmniBridge</button>
            </div>
            <p class="setup-note" id="bridge-form-status"></p>
          </div>
          <ul class="pool-list" id="bridge-list"></ul>
          <p class="setup-note" id="bridge-list-empty">No bridges yet — load the official OmniBridge preset or paste a mediator.</p>

          <div class="pool-add cardish" id="log-add">
            <p class="pool-add-kicker">Custom event</p>
            <p class="hint">Any contract log on PulseChain. Bound to one address. Amount field is optional (empty = fire on every match).</p>
            <label class="field">
              <span>Contract</span>
              <input id="log-address" type="text" placeholder="0x…" spellcheck="false" autocomplete="off" />
            </label>
            <label class="field">
              <span>Event ABI</span>
              <input id="log-abi" type="text" placeholder="Transfer(address indexed from, address indexed to, uint256 value)" spellcheck="false" autocomplete="off" />
            </label>
            <div class="settings-grid">
              <label class="field">
                <span>Label</span>
                <input id="log-label" type="text" placeholder="Whale transfer" autocomplete="off" />
              </label>
              <label class="field narrow">
                <span>Amount arg</span>
                <input id="log-amount-arg" type="text" value="value" autocomplete="off" />
              </label>
              <label class="field narrow">
                <span>Min amount</span>
                <input id="log-min" type="number" min="0" step="any" value="0" inputmode="decimal" />
              </label>
              <label class="field narrow">
                <span>Decimals</span>
                <input id="log-decimals" type="number" min="0" max="36" step="1" value="18" inputmode="numeric" />
              </label>
              <label class="field narrow">
                <span>Symbol</span>
                <input id="log-symbol" type="text" value="TOKEN" autocomplete="off" />
              </label>
            </div>
            <div class="actions">
              <button type="button" class="btn primary tiny" id="btn-log-add">Add event</button>
            </div>
            <p class="setup-note" id="log-form-status"></p>
          </div>
          <ul class="pool-list" id="log-list"></ul>
          <p class="setup-note" id="log-list-empty">No custom events yet — paste a contract and event signature.</p>
        </section>

        <section class="panel feed-panel pool-feed-panel" aria-labelledby="pool-feed-h">
          <div class="panel-head">
            <h2 id="pool-feed-h">Chain events</h2>
            <span class="pill" id="pool-feed-pill">no events</span>
            <div class="feed-actions">
              <button type="button" class="btn ghost tiny" id="btn-clear-pools" title="Clear chain events from this list (wallet tips stay above)">Clear</button>
            </div>
          </div>
          <div class="pay-earnings" id="pool-earnings" aria-live="polite">
            <div class="pay-earnings-label">Chain volume</div>
            <div class="pay-earnings-total" id="pool-earnings-total">0</div>
            <div class="pay-earnings-meta" id="pool-earnings-meta">No chain events yet</div>
          </div>
          <ul class="feed" id="pool-feed"></ul>
          <p class="empty" id="pool-feed-empty">No chain events yet. Enable Watch chain events, tick verified targets On, then Start watching in the header.</p>
        </section>
      </div>

      <div id="page-settings" class="page-settings" hidden>
        <p class="settings-intro">
          Saved wallets, extras, and backups. Everyday setup is on Home.
        </p>
        <p class="settings-flash" id="settings-status" role="status"></p>

        <section class="settings-block" aria-labelledby="set-wallet-h">
          <div class="settings-block-head">
            <h2 id="set-wallet-h">Saved wallets</h2>
          </div>
          <div class="saved-wallets" id="saved-wallets" hidden>
            <p class="saved-wallets-label">Tap a row to watch it</p>
            <ul class="wallet-list" id="wallet-list"></ul>
          </div>
          <p class="hint">
            Change the active tip address on Home. Names make this list easier to read.
          </p>
        </section>

        <section class="settings-block" aria-labelledby="set-chain-h">
          <div class="settings-block-head">
            <h2 id="set-chain-h">Chain &amp; RPC</h2>
          </div>
          <div class="settings-grid">
            <label class="field">
              <span>Chain</span>
              <input type="text" value="PulseChain (PLS)" readonly disabled title="Just The Tip is PulseChain-only" />
              <input type="hidden" id="chain" value="pulsechain" />
            </label>
            <label class="field">
              <span>Min tip amount</span>
              <input id="min-amount" type="number" min="0" step="any" />
            </label>
          </div>
          <label class="field rpc-field">
            <span>RPC list <em id="rpc-count" class="rpc-count"></em></span>
            <textarea
              id="rpc-list"
              rows="5"
              spellcheck="false"
              placeholder="One https://… URL per line (paste / import a list)"
            ></textarea>
          </label>
          <div class="actions rpc-actions">
            <button type="button" class="btn ghost tiny" id="btn-rpc-defaults">Load chain defaults</button>
            <label class="btn ghost tiny file-btn">
              Import file
              <input id="rpc-file" type="file" accept=".txt,.csv,.json,text/*" hidden />
            </label>
            <button type="button" class="btn ghost tiny" id="btn-rpc-clear">Clear</button>
          </div>
          <p class="hint">Leave empty to use built-in PulseChain RPCs. Multiple lines = automatic failover.</p>
        </section>

        <section class="settings-block" aria-labelledby="set-appear-h">
          <div class="settings-block-head">
            <h2 id="set-appear-h">Look &amp; feel</h2>
          </div>
          <div class="settings-grid">
            <label class="field settings-toggle-field">
              <span>Night mode</span>
              <label class="toggle">
                <input type="checkbox" id="set-night" />
                <span>Dark theme (off = day)</span>
              </label>
            </label>
          </div>
        </section>

        <section class="settings-block" aria-labelledby="set-perf-h">
          <div class="settings-block-head">
            <h2 id="set-perf-h">Buzz timing</h2>
          </div>
          <div class="settings-grid">
            <label class="field">
              <span>Gap between tips on the same toy (ms)</span>
              <input id="set-queue-gap" type="number" min="0" max="10000" step="50" />
            </label>
            <label class="field">
              <span>Max waiting tips</span>
              <input id="set-max-queue" type="number" min="1" max="256" step="1" />
            </label>
            <label class="field">
              <span>Chain check interval (ms)</span>
              <input id="set-poll-ms" type="number" min="1500" max="30000" step="100" />
            </label>
          </div>
          <p class="hint">Lower interval = faster tip detection, more RPC load. Restart watching after changing interval.</p>
        </section>

        <section class="settings-block" aria-labelledby="set-data-h">
          <div class="settings-block-head">
            <h2 id="set-data-h">Backup</h2>
          </div>
          <p class="hint">Save or restore preferences on this device. Never includes private keys.</p>
          <div class="actions">
            <button type="button" class="btn primary" id="btn-settings-save">Save</button>
            <button type="button" class="btn" id="btn-settings-export">Export</button>
            <label class="btn file-btn">
              Import
              <input id="set-import-file" type="file" accept=".json,application/json" hidden />
            </label>
            <button type="button" class="btn ghost" id="btn-settings-reset">Reset defaults</button>
          </div>
        </section>
      </div>

      ${qg()}

      <div id="page-menu" class="page-settings" hidden>
        <section class="settings-block menu-token-block" aria-labelledby="menu-token-h">
          <div class="settings-block-head">
            <h2 id="menu-token-h">Whitelist</h2>
            <p class="settings-block-note">
              Pick PLS from Suggestions, or paste a contract and Save token.
            </p>
          </div>
          <div class="menu-token-board">
            <div class="settings-grid token-tips-grid">
              <label class="field grow">
                <span>ERC/PRC-20</span>
                <input id="token" type="text" placeholder="0x… — leave empty for native PLS" spellcheck="false" autocomplete="off" />
              </label>
              <label class="field narrow">
                <span>Decimals</span>
                <input id="token-dec" type="number" min="0" max="36" />
              </label>
              <label class="field narrow">
                <span>Symbol</span>
                <input id="token-sym" type="text" placeholder="HEX" maxlength="16" spellcheck="false" />
              </label>
              <label class="field token-label-field">
                <span>Token name</span>
                <input
                  id="token-label"
                  type="text"
                  maxlength="48"
                  placeholder="Optional nickname"
                  spellcheck="false"
                  autocomplete="off"
                />
              </label>
              <div class="token-tip-actions">
                <button type="button" class="btn primary tiny" id="btn-save-token" title="Save this token to your list">Save token</button>
              </div>
            </div>
            <div class="menu-coin-prices" id="menu-coin-price" aria-live="polite"></div>
          </div>
          <div class="actions menu-coin-matrix-actions">
            <button type="button" class="btn primary tiny" id="btn-coin-csv-export" title="Download current coin reward CSV">Export CSV</button>
            <button type="button" class="btn ghost tiny" id="btn-coin-csv-starter" title="Download a starter CSV from saved tokens × patterns">Starter CSV</button>
            <label class="btn ghost tiny file-btn" title="Replace rewards from a CSV file">
              Import CSV
              <input id="coin-csv-import" type="file" accept=".csv,text/csv,text/plain" hidden />
            </label>
            <button type="button" class="btn ghost tiny" id="btn-coin-csv-clear" title="Remove all coin reward rows">Clear CSV</button>
          </div>
        </section>

        <section class="settings-block menu-catalog-block" aria-labelledby="menu-toys-h">
          <div class="menu-toys-compact" aria-labelledby="menu-toys-h">
            <div class="settings-block-head menu-toys-head">
              <h2 id="menu-toys-h">Toys</h2>
              <div class="menu-toy-picker" id="menu-toy-ticks" aria-label="Search toys for tip menu">
                <div class="menu-toy-chips" id="menu-toy-chips" hidden></div>
                <div class="menu-toy-search-row">
                  <label class="field menu-toy-search-field">
                    <span class="visually-hidden">Search toys</span>
                    <input
                      id="menu-toy-search"
                      type="search"
                      placeholder="Search…"
                      autocomplete="off"
                      spellcheck="false"
                    />
                  </label>
                  <p class="menu-toy-loading" id="menu-toy-loading" hidden role="status" aria-live="polite">
                    <span class="menu-toy-loading-spin" aria-hidden="true"></span>
                    <span class="menu-toy-loading-text">Loading…</span>
                  </p>
                </div>
                <div class="menu-toy-results" id="menu-toy-results" role="listbox" aria-label="Matching toys" hidden></div>
              </div>
              <div class="actions menu-toy-actions">
                <button type="button" class="btn ghost tiny" id="btn-menu-share" title="Name, socials, Export HTML / JPG">Share</button>
                <button type="button" class="btn ghost tiny" id="btn-pattern-catalog" title="Browse and re-add tip menu patterns">Catalog</button>
                <button type="button" class="btn primary tiny" id="btn-pattern-create" title="Create a custom pattern">Create</button>
                <button type="button" class="btn ghost tiny" id="btn-menu-toys-import" title="Show only toys currently linked on Device">Use linked</button>
                <button type="button" class="btn ghost tiny" id="btn-menu-toys-none" title="Clear selected toys">Clear</button>
              </div>
              <select id="menu-sort" class="menu-sort-select" aria-label="Sort patterns"></select>
            </div>
          </div>

          <article class="pattern-card menu-pattern-tools-card" id="menu-pattern-tools-card" aria-label="Pattern tools">
            <div class="pattern-card-main menu-pattern-tools-main">
              <label class="field menu-base-field pattern-toy-currency-field">
                <span id="menu-tools-currency-label">Currency</span>
                <select
                  id="menu-tip-currency"
                  aria-label="Tip coin for this toy"
                  title="Only selected coin chips appear here. Pick one to set that tip coin on every pattern for this toy."
                >
                  <option value="">Select coins above</option>
                </select>
              </label>
              <div class="menu-usd-range-row">
                <label class="field menu-base-field menu-usd-lo-field">
                  <span id="menu-tools-lo-label">Low</span>
                  <div class="menu-usd-input">
                    <span class="menu-usd-affix" aria-hidden="true">$</span>
                    <input id="menu-base-price" type="number" min="0" step="0.01" inputmode="decimal" aria-label="Lowest tip in USD" />
                  </div>
                </label>
                <label class="field menu-base-field menu-top-field menu-usd-hi-field">
                  <span id="menu-tools-hi-label">High</span>
                  <div class="menu-usd-input">
                    <span class="menu-usd-affix" aria-hidden="true">$</span>
                    <input id="menu-top-price" type="number" min="0" step="0.01" inputmode="decimal" aria-label="Highest tip in USD" />
                  </div>
                </label>
              </div>
              <label class="field menu-base-field menu-max-vibe-field">
                <span id="menu-tools-max-vibe-label">Max vibe</span>
                <div class="menu-max-vibe-control">
                  <input
                    id="menu-max-vibe"
                    type="range"
                    min="1"
                    max="8"
                    step="1"
                    value="8"
                    aria-label="Maximum vibration strength"
                    title="Caps every pattern peak for this toy (1 = soft … 8 = full)"
                  />
                  <output id="menu-max-vibe-val" for="menu-max-vibe">8/8</output>
                </div>
              </label>
              <div class="pattern-card-actions menu-pattern-tools-actions">
                <button
                  type="button"
                  class="btn primary tiny"
                  id="btn-menu-base-apply"
                  title="Enter cheapest / most expensive in USD for the active toy tab. Scale converts to the tip coin and prices by duration — shortest → cheapest, longest → most expensive. Each toy keeps its own ladder."
                >
                  Scale menu
                </button>
              </div>
            </div>
          </article>

          <input type="file" id="menu-toy-pack-import" accept="application/json,.json" hidden />
          <div class="pattern-list" id="pattern-list"></div>
        </section>

        <div id="menu-share-modal" class="pattern-wizard menu-share-modal" hidden>
          <div
            class="pattern-wizard-panel menu-share-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-share-h"
          >
            <div class="pattern-catalog-head">
              <h3 id="menu-share-h">Share card</h3>
              <button type="button" class="btn ghost tiny" id="btn-menu-share-close" aria-label="Close share card">Close</button>
            </div>
            <div class="actions menu-export-actions">
              <button type="button" class="btn ghost tiny" id="btn-export-menu-html" title="Download index.html for fans (drag to Netlify Drop)">Export HTML</button>
              <div class="menu-jpg-export">
                <button type="button" class="btn primary tiny" id="btn-export-menu-jpg" title="Download tip menu as JPG">Export JPG</button>
                <div class="menu-orient-row" role="group" aria-label="JPG orientation">
                  <label class="menu-orient-tick">
                    <input type="radio" name="export-orient" id="export-orient-landscape" value="landscape" checked />
                    <span>Landscape</span>
                  </label>
                  <label class="menu-orient-tick">
                    <input type="radio" name="export-orient" id="export-orient-portrait" value="portrait" />
                    <span>Portrait</span>
                  </label>
                </div>
              </div>
            </div>
            <p class="hint menu-html-host-hint">
              <strong>Export HTML</strong> downloads <code>index.html</code> for
              <a href="https://app.netlify.com/drop" target="_blank" rel="noopener noreferrer">Netlify Drop</a>,
              <a href="https://pages.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare Pages</a>,
              or
              <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a>.
              Tip coin is set on this page. Export needs a tip wallet on Home so the QR and amounts work.
            </p>
          </div>
        </div>

        <div id="export-need-wallet-modal" class="pattern-wizard export-need-wallet-modal" hidden>
          <div
            class="pattern-wizard-panel export-need-wallet-panel"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="export-need-wallet-h"
          >
            <h3 id="export-need-wallet-h">PLEASE ADD A TIP WALLET FIRST</h3>
            <p class="hint">Set a receive address on Home, then export again.</p>
            <div class="actions">
              <button type="button" class="btn primary" id="btn-export-need-wallet-ok">OK</button>
            </div>
          </div>
        </div>

      </div>

        <div id="pattern-catalog" class="pattern-wizard pattern-catalog-modal" hidden>
          <div class="pattern-wizard-panel pattern-catalog-panel" role="dialog" aria-labelledby="pattern-catalog-title">
            <div class="pattern-catalog-head">
              <h3 id="pattern-catalog-title">Pattern catalog</h3>
              <button type="button" class="btn ghost tiny" id="btn-pattern-catalog-close" aria-label="Close catalog">Close</button>
            </div>
            <p class="hint" id="pattern-catalog-count">Built-in stock patterns · browse, test, edit, or duplicate</p>
            <div class="pattern-catalog-toolbar">
              <label class="field grow">
                <span class="sr-only">Search patterns</span>
                <input
                  id="pattern-catalog-search"
                  type="search"
                  placeholder="Search name, tag, id…"
                  autocomplete="off"
                />
              </label>
              <label class="field">
                <span class="sr-only">Toy</span>
                <select id="pattern-catalog-toy" aria-label="Filter by toy">
                  <option value="">All toys</option>
                </select>
              </label>
            </div>
            <div class="pattern-catalog-body" id="pattern-catalog-body"></div>
          </div>
        </div>

        <div id="pattern-wizard" class="pattern-wizard" hidden>
          <div class="pattern-wizard-panel" role="dialog" aria-labelledby="pattern-wizard-title" aria-modal="true">
            <h3 id="pattern-wizard-title">Create pattern</h3>
            <input type="hidden" id="wizard-mode" value="create" />
            <input type="hidden" id="wizard-id" value="" />

            <div class="wizard-form">
              <label class="field">
                <span>Name</span>
                <input id="wizard-name" type="text" maxlength="48" autocomplete="off" />
              </label>
              <label class="field">
                <span>Blurb</span>
                <input id="wizard-blurb" type="text" maxlength="120" autocomplete="off" />
              </label>
              <label class="field">
                <span>Tag</span>
                <input id="wizard-tag" type="text" list="wizard-tag-list" maxlength="24" autocomplete="off" />
                <datalist id="wizard-tag-list"></datalist>
              </label>
              <label class="field">
                <span>Tip price</span>
                <input id="wizard-price" type="number" min="0" step="any" inputmode="decimal" />
              </label>
              <div class="field wizard-needs">
                <span>Requires (for toy filter)</span>
                <div class="wizard-need-row" id="wizard-needs">
                  <label class="wizard-need"><input type="checkbox" value="multi" /> Multi-motor</label>
                  <label class="wizard-need"><input type="checkbox" value="rotate" /> Rotate</label>
                  <label class="wizard-need"><input type="checkbox" value="air" /> Air / pump</label>
                  <label class="wizard-need"><input type="checkbox" value="thrust" /> Thrust</label>
                </div>
                <p class="hint">Tick <strong>Multi-motor</strong> for Gemini / Edge (M1 + M2). Leave empty for single-vibe toys.</p>
              </div>
              <label class="field">
                <span>Step length (ms)</span>
                <input id="wizard-interval" type="number" min="80" max="2000" step="10" />
              </label>
              <div class="field wizard-strength-field">
                <span id="wizard-strength-label">Strength steps (0–8)</span>
                <p class="hint" id="wizard-strength-hint">
                  Each box is one beat. With Multi-motor, pick Both / L / R per beat.
                </p>
                <div class="wizard-strengths" id="wizard-strengths"></div>
                <div class="actions wizard-strength-actions">
                  <button type="button" class="btn ghost tiny" id="btn-wizard-add-step">Add step</button>
                  <button type="button" class="btn ghost tiny" id="btn-wizard-rm-step">Remove last</button>
                </div>
              </div>
              <div class="field wizard-preview-field">
                <span>Preview</span>
                <div class="wizard-preview pattern-viz pattern-viz-multi" id="wizard-preview" aria-live="polite"></div>
              </div>
            </div>

            <p class="err" id="wizard-err" hidden role="alert"></p>
            <div class="actions pattern-wizard-actions">
              <button type="button" class="btn ghost" id="btn-wizard-cancel">Cancel</button>
              <button type="button" class="btn primary" id="btn-wizard-save">Save</button>
            </div>
          </div>
        </div>

      <p class="err shell-err" id="err" hidden role="alert"></p>
      <footer class="foot shell-foot">
        <p class="foot-brand-line">
          <img class="foot-mark foot-mark-app" src="${zh}" width="36" height="36" alt="" decoding="async" />
          <span>${Fh}</span>
          <span class="foot-sep">·</span>
          <img class="foot-mark" src="/brand/pulsechain-mark.svg" width="18" height="18" alt="" decoding="async" />
          <a class="foot-pls" href="https://pulsechain.com" target="_blank" rel="noreferrer">PulseChain</a>
        </p>
        <p>
          v${Lh} · local only · no private keys.
        </p>
        <p class="foot-donate">
          <span class="foot-donate-label">Donate (PLS / PulseChain)</span>
          <code class="foot-donate-addr" id="donate-addr" title="Donation address">${Bh}</code>
          <button type="button" class="btn ghost tiny" id="btn-copy-donate" title="Copy donation address">Copy</button>
          <span class="foot-donate-status" id="donate-copy-status" aria-live="polite"></span>
        </p>
      </footer>
    </div>

    <div class="drawer-scrim" id="drawer-scrim" hidden></div>
    <aside class="app-drawer" id="app-drawer" hidden aria-label="Menu">
      <p class="drawer-title">Menu</p>
      <button type="button" class="nav-item" id="nav-home"><span class="nav-num">1</span> Home</button>
      <button type="button" class="nav-item" id="nav-tip-menu" title="Tip menu"><span class="nav-num">2</span> Tip menu</button>
      <button type="button" class="nav-item" id="nav-obs"><span class="nav-num">3</span> Stream alerts</button>
      <button type="button" class="nav-item" id="nav-live"><span class="nav-num">4</span> Go live</button>
      <button type="button" class="nav-item" id="nav-settings">Settings</button>
      <p class="drawer-title drawer-title-sub">Ecosystem</p>
      <a
        class="nav-item nav-item-link"
        id="nav-provex"
        href="https://provex.com"
        target="_blank"
        rel="noreferrer"
      >
        <span class="nav-item-copy">
          <span class="nav-item-name">ProveX</span>
          <span class="nav-item-desc">Stable Coins to Dollars</span>
        </span>
      </a>
      <a
        class="nav-item nav-item-link"
        id="nav-pulsex"
        href="https://pulsex.com"
        target="_blank"
        rel="noreferrer"
      >
        <span class="nav-item-copy">
          <span class="nav-item-name">PulseX</span>
          <span class="nav-item-desc">Crypto to Stable Coins</span>
        </span>
      </a>
      <a
        class="nav-item nav-item-link"
        id="nav-pulsechain"
        href="https://pulsechain.com"
        target="_blank"
        rel="noreferrer"
      >
        <span class="nav-item-copy">
          <span class="nav-item-name">PulseChain</span>
          <span class="nav-item-desc">Network</span>
        </span>
      </a>
      <a
        class="nav-item nav-item-link"
        id="nav-hex"
        href="https://hex.com"
        target="_blank"
        rel="noreferrer"
      >
        <span class="nav-item-copy">
          <span class="nav-item-name">HEX</span>
          <span class="nav-item-desc">Saving Account</span>
        </span>
      </a>
    </aside>
  `}function Yx(){if(typeof window>`u`)return!1;try{if(/\.github\.io$/i.test(window.location.hostname))return!0}catch{}return!0}var Xx=`
  <div class="showcase-banner" role="status">
    <strong>Showcase peek</strong>
    — look only. Do not treat GitHub Pages as a tip-to-buzz front end.
    <a href="https://github.com/ihelpmaybe/Just-The-Tip">Clone / download</a>
    → run <code>npm run desktop</code> or the Windows Setup on your PC to watch tips and buzz toys.
  </div>
`,Zx=[`main`,`live`,`settings`,`menu`,`obs`];function Qx(){let e=(location.hash||``).replace(/^#\/?/,``).toLowerCase();return e===`live`||e===`go-live`||e===`watch`||e===`pools`||e===`pool`?`live`:e===`settings`?`settings`:e===`menu`||e===`menu2`||e===`menu-2`||e===`menu3`||e===`menu-3`?`menu`:e===`obs`?`obs`:`main`}function $x(e){let t=e===`main`?``:`#${e}`,n=location.hash||``;if(e===`main`){n&&history.replaceState(null,``,`${location.pathname}${location.search}`);return}n!==t&&history.replaceState(null,``,`${location.pathname}${location.search}${t}`)}function eS(e){let t=Qx(),n=!1,r=!1,i=e.root.querySelector(`#page-tag`);if(!i)throw Error(`#page-tag missing`);let a=i;function o(t){n=t,e.drawer.hidden=!t,e.drawerScrim.hidden=!t,e.menuButton.setAttribute(`aria-expanded`,t?`true`:`false`),e.menuButton.classList.toggle(`open`,t),document.body.classList.toggle(`drawer-open`,t),e.onDrawerChange?.(t)}function s(n,i){Zx.includes(n)||(n=`main`),t=n,o(!1),e.pageMain.hidden=n!==`main`,e.pageLive.hidden=n!==`live`,e.pageSettings.hidden=n!==`settings`,e.pageMenu.hidden=n!==`menu`,e.pageObs.hidden=n!==`obs`,document.body.classList.toggle(`view-live`,n===`live`),document.body.classList.toggle(`view-menu`,n===`menu`),document.body.classList.toggle(`view-settings`,n===`settings`),document.body.classList.toggle(`view-obs`,n===`obs`);let s=n===`main`?`Home`:n===`live`?``:n===`settings`?`Settings`:n===`obs`?`Stream alerts`:`Tip menu`;a.textContent=s,a.hidden=!s,e.menuButton.setAttribute(`aria-label`,`Menu`),e.menuButton.title=`Menu`,e.onPage(n),i?.fromHash?n===`live`&&/^#\/?(pools|pool|go-live|watch)$/i.test(location.hash||``)?(r=!0,$x(`live`),r=!1):n===`menu`&&/^#\/?(menu2|menu-2|menu3|menu-3)$/i.test(location.hash||``)&&(r=!0,$x(`menu`),r=!1):(r=!0,$x(n),r=!1),window.scrollTo({top:0,behavior:i?.fromHash?`auto`:`smooth`})}return{get current(){return t},get drawerOpen(){return n},get syncingHash(){return r},setDrawerOpen:o,showPage:s}}function tS(e,t,n){if(n==null||n===``)return;let r=document.createElement(`dt`);r.textContent=t;let i=document.createElement(`dd`);i.textContent=n,e.append(r,i)}function nS(e){let t=[],n=Math.max(1,Math.min(3,Number(e.motors)||1)),r=[e.toyType,e.name,...e.functions||[]].join(` `).toLowerCase();/gemini|edge|dolce|lapis|magnet|clamp|twin|dual/.test(r)&&(n=Math.max(n,2)),/vibrate3|v3:/.test(r)&&(n=Math.max(n,3));let i=!!e.secondary?.rotate||/\brotate\b|\bnora\b/.test(r),a=!!e.secondary?.thrust||/\bthrust|\bsolace\b/.test(r),o=!!e.secondary?.air||!!e.secondary?.pump||/\bair\b|\bmax\b|\bpump\b|\bsuction\b/.test(r),s=!!e.secondary?.pump||/\bpump\b|\bsuction\b/.test(r),c=i||a||o||s;if(n<=1)t.push({id:`vibrate`,label:`Vibe`,kind:`motor`});else{for(let e=1;e<=n;e++)t.push({id:`vibrate${e}`,label:`M${e}`,kind:`motor`});t.push({id:`vibrate`,label:`Both`,kind:`all`})}i&&t.push({id:`rotate`,label:`Rotate`,kind:`rotate`}),a&&t.push({id:`thrust`,label:`Thrust`,kind:`thrust`}),o&&!s&&t.push({id:`air`,label:`Air`,kind:`air`}),s&&t.push({id:`pump`,label:`Pump`,kind:`pump`}),n<=1&&c&&t.push({id:`both`,label:`Both`,kind:`all`}),n>1&&c&&t.push({id:`all`,label:`All`,kind:`all`});let l=new Set(t.map(e=>e.id));for(let n of e.functions||[]){let e=String(n).toLowerCase().replace(/\s+/g,``);!e||l.has(e)||/^vibrate\d*$/.test(e)||e===`all`||e===`both`||e===`rotate`&&i||(e===`thrusting`||e===`thrust`)&&a||(e===`air`||e===`absoluteair`)&&(o||s)||e===`pump`&&s||e!==`stop`&&(t.push({id:e===`thrusting`?`thrust`:e,label:n.length>10?n.slice(0,9)+`…`:n,kind:`other`}),l.add(e))}return t}function rS(e,t){let n=document.createElement(`article`);n.className=`toy-card`,e.connected&&n.classList.add(`online`);let r=Math.max(1,Math.min(3,Number(e.motors)||1)),i=[e.toyType,e.name,...e.functions||[]].join(` `).toLowerCase();/gemini|edge|dolce|lapis|magnet|clamp|twin|dual/.test(i)&&(r=Math.max(r,2)),r>1&&n.classList.add(`multi-motor`),e.secondary?.thrust&&n.classList.add(`has-thrust`),e.secondary?.rotate&&n.classList.add(`has-rotate`),e.secondary?.air&&n.classList.add(`has-air`);let a=t?.buzzOn!==!1;a||n.classList.add(`buzz-off`);let o=document.createElement(`div`);o.className=`toy-card-head`;let s=document.createElement(`strong`);s.className=`toy-card-name`,s.textContent=e.name||e.toyType||`Toy`,e.toyType&&(n.title=[s.textContent,e.toyType].filter(Boolean).join(` · `));let c=document.createElement(`span`);c.className=`toy-badge`;let l=String(e.status||``).toLowerCase();if(l===`reconnecting`||l===`recovering`?(c.textContent=`reconnecting`,c.classList.add(`recover`)):e.connected===!1||l===`0`||l===`offline`||l===`off`?c.textContent=`offline`:l===`1`||l===`on`||l===`online`||e.connected?(c.textContent=`online`,c.classList.add(`on`)):c.textContent=e.status||`—`,o.append(s,c),n.append(o),t?.onToggleBuzz&&e.id){let r=document.createElement(`label`);r.className=`toy-buzz-toggle`;let i=document.createElement(`input`);i.type=`checkbox`,i.checked=a,i.setAttribute(`aria-label`,`Include ${s.textContent} in buzz`),i.addEventListener(`change`,()=>{t.onToggleBuzz(e.id,i.checked)});let o=document.createElement(`span`);o.textContent=a?`Buzz on`:`Buzz off`,r.append(i,o),n.append(r)}if(t?.onIdentity&&e.id){let r=document.createElement(`label`);r.className=`toy-identity`;let i=document.createElement(`span`);i.className=`toy-identity-cap`,i.textContent=`Model`;let a=document.createElement(`select`);a.className=`toy-identity-select`,a.setAttribute(`aria-label`,`Model for ${s.textContent}`);let o=document.createElement(`option`);o.value=`auto`,o.textContent=`Auto (${e.extra?.autoName==null?e.extra?.autoType==null?`advertised`:String(e.extra.autoType):String(e.extra.autoName)})`,a.append(o);let c=e.extra?.identityProduct==null?`auto`:String(e.extra.identityProduct).toLowerCase();for(let e of nm){let t=document.createElement(`option`);t.value=e.id,t.textContent=e.title,e.id===c&&(t.selected=!0),a.append(t)}if(c===`auto`&&(o.selected=!0),c!==`auto`&&!nm.some(e=>e.id===c)){let e=document.createElement(`option`);e.value=c,e.textContent=c,e.selected=!0,a.append(e)}a.addEventListener(`change`,()=>{t.onIdentity(e.id,a.value===`auto`?``:a.value)}),r.append(i,a),n.append(r)}if(t?.onMotorMask&&e.id&&r>=2){let i=(t.motorMask||[]).filter(e=>e>=1&&e<=r),a=`both`;i.length===1&&i[0]===1?a=`1`:i.length===1&&i[0]===2?a=`2`:i.length===1&&i[0]===3&&(a=`3`);let o=document.createElement(`div`);o.className=`toy-motor-lock`,o.setAttribute(`role`,`group`),o.setAttribute(`aria-label`,`Tip motors`);let s=document.createElement(`span`);s.className=`toy-motor-lock-cap`,s.textContent=`Tips`,o.append(s);let c=r>=3?[{id:`1`,label:`M1`,motors:[1]},{id:`2`,label:`M2`,motors:[2]},{id:`3`,label:`M3`,motors:[3]},{id:`both`,label:`All`,motors:[]}]:[{id:`1`,label:`Left`,motors:[1]},{id:`both`,label:`Both`,motors:[]},{id:`2`,label:`Right`,motors:[2]}];for(let n of c){let r=document.createElement(`label`);r.className=`toy-motor-lock-opt`;let i=document.createElement(`input`);i.type=`radio`,i.name=`motor-mask-${e.id}`,i.value=n.id,i.checked=a===n.id,i.addEventListener(`change`,()=>{i.checked&&t.onMotorMask(e.id,n.motors)});let s=document.createElement(`span`);s.textContent=n.label,r.append(i,s),o.append(r)}n.append(o)}let u=nS(e);if(t?.onTestFeature&&e.id&&u.length){let r=document.createElement(`div`);r.className=`toy-feature-tests`,r.setAttribute(`role`,`group`),r.setAttribute(`aria-label`,`Test features`);for(let n of u){let i=document.createElement(`button`);i.type=`button`,i.className=`btn ghost tiny toy-feat-test toy-feat-${n.kind}`,i.textContent=n.label,i.title=`Test ${n.label} ~3s`,i.disabled=!!t.testing,i.addEventListener(`click`,r=>{r.preventDefault(),r.stopPropagation(),t.onTestFeature(e.id,n.id)}),r.append(i)}n.append(r)}let d=document.createElement(`div`);d.className=`toy-feature-chips`,d.setAttribute(`aria-label`,`Toy features`);let f=[r===1?`1 motor`:`${r} motors`,...e.secondary?.rotate?[`rotate`]:[],...e.secondary?.air?[`air`]:[],...e.secondary?.pump?[`pump`]:[],...e.secondary?.thrust?[`thrust`]:[]];for(let e of f){let t=document.createElement(`span`);t.className=`toy-chip`,e.includes(`motor`)&&t.classList.add(`chip-motors`),e===`rotate`&&t.classList.add(`chip-rotate`),(e===`air`||e===`pump`)&&t.classList.add(`chip-air`),e===`thrust`&&t.classList.add(`chip-thrust`),t.textContent=e,d.append(t)}f.length&&n.append(d);let p=document.createElement(`dl`);p.className=`toy-meta`,e.toyType&&e.toyType!==e.name&&tS(p,`Type`,e.toyType),e.nickName&&e.nickName!==e.name&&tS(p,`Nick`,e.nickName),tS(p,`Bat`,e.battery!=null&&Number.isFinite(e.battery)?`${Math.round(Number(e.battery))}%`:void 0);let m=e.extra||{},h=m.modelCode==null?``:String(m.modelCode),g=m.firmware==null?``:String(m.firmware),_=m.mac==null?``:String(m.mac),v=m.batch==null?``:String(m.batch),y=m.deviceStatus==null?``:String(m.deviceStatus),b=m.typeRaw==null?``:String(m.typeRaw);if(h&&!/^unkn?own$/i.test(h)&&tS(p,`Code`,h),g&&!/^status$/i.test(g)&&!/^getbatch$/i.test(g)&&tS(p,`FW`,g),_&&tS(p,`MAC`,_),v&&tS(p,`Batch`,v),y&&tS(p,`State`,y),e.extra?.identityManual){let t=e.extra.autoName==null?``:String(e.extra.autoName);t&&tS(p,`Adv`,t)}return b&&b!==h&&!/^unkn?own:/i.test(b)&&tS(p,`Type;`,b),p.childElementCount&&n.append(p),n}function iS(e){let t=e;try{let n=JSON.parse(e);Array.isArray(n)?t=n.map(String).join(`
`):n&&typeof n==`object`&&Array.isArray(n.rpcs)&&(t=n.rpcs.join(`
`))}catch{}return Vc(t)}function aS(e,t){return Hc(Vc([...Vc(e),...t].join(`
`)))}function oS(e){let t=l_(),n=Xp(),r=!1,i=null,a=null,o=null,s={backend:t.backend,connected:!1,devices:[],toys:[],message:``},c=ub(),l=!1,u=!1,d=null,f=Qx(),p=`pulsefans.ble.tipDismissed.v1`,m=(()=>{try{return localStorage.getItem(p)===`1`}catch{return!1}})();e.innerHTML=(Yx()?Xx:``)+Jx(),Yx()&&(document.documentElement.dataset.pagesShowcase=`1`,e.classList.add(`app--showcase`));let h=t=>_b(e,t),g=u_;function _(e){let t=h(`err`);if(!e){t.hidden=!0,t.textContent=``;return}t.hidden=!1,t.textContent=e}g=e=>{let t=u_(e);return t||_(`Could not save settings — browser storage may be full or blocked. Export a backup from Settings.`),t};function v(){return/\bElectron\//i.test(typeof navigator<`u`&&navigator.userAgent||``)}function y(){if(t.backend!==`bluetooth`||!D())return[];let e=D();return Nx.loadRememberedToys().map(t=>{let n=t.id||(t.mac?`mac:${t.mac}`:``);return!n||!t.name?null:{id:n,name:t.tag?`${t.name} ${t.tag}`:t.name,connected:!1,status:e?`reconnecting`:`offline`,source:`bluetooth`,extra:t.mac?{mac:t.mac}:void 0}}).filter(e=>!!e)}function b(){return s.toys||[]}function x(e){let n=String(e.source||``);return t.backend===`bluetooth`?n===`bluetooth`||n===`ble`:t.backend===`intiface`?n===`intiface`:n===`lovense`||n===`emu`}function S(){let e=vm(b(),[...t.savedToys||[],...y()]).filter(x);return t.backend!==`bluetooth`||!D()?e:e.map(e=>e.source!==`bluetooth`||e.connected!==!1?e:{...e,status:`reconnecting`})}function C(){return(s.toys||[]).filter(e=>e.source===`bluetooth`&&e.connected!==!1).length}function w(){return Nx.loadRememberedToys().length}let T=!1,E=t.hardwareLive!==!1&&(t.backend===`bluetooth`||t.backend===`intiface`||(t.backend===`lovense`||t.backend===`lovense-remote`)&&!Eb(t.lovenseLocalIp||``));function D(){return E||A.isReconnecting}function ee(){T=!0,t.savedToys=[],g({...t,savedToys:[]}),Nx.clearRemembered()}function te(e){(e||[]).some(mm)&&(T=!1);let n=ym(e,T?[]:t.savedToys||[]);bm(n,t.savedToys||[])||(t.savedToys=n,g({...t,savedToys:n}))}let O=()=>{},k=()=>{},A=new qx(e=>{s=e,te(e.toys||[]),l&&(pt(),f===`menu`&&O(),k())}),ne={depth:0,waiting:0,busy:!1,playingId:null,playingLabel:null,playingToys:0,message:`idle`},re=new p_({gapMs:t.queueGapMs,maxQueue:t.maxQueue,run:async e=>{await A.buzz(e.intensity,e.durationMs,e.pattern??`spark`,e.toyId)},onStatus:e=>{ne=e,l&&vt()}}),j=h(`backend`),M=h(`device-url`),N=h(`lovense-appid`),P=h(`chain`),F=h(`rpc-list`),I=h(`receive`),L=h(`receive-label`),ie=h(`min-amount`),ae=h(`token`),oe=h(`token-dec`),R=h(`token-sym`),se=h(`token-label`),ce=h(`rpc-file`),le=h(`page-main`),ue=h(`page-live`),de=h(`page-settings`),fe=h(`page-menu`),pe=h(`page-obs`),me=h(`btn-menu`),he=h(`app-drawer`),ge=h(`drawer-scrim`),_e=h(`set-night`),ve=h(`set-queue-gap`),ye=h(`set-max-queue`),be=h(`set-poll-ms`),xe=h(`settings-status`),Se=h(`home-wallet-status`),Ce=h(`set-import-file`),we=Yg({el:h,getStyle:()=>Im(t.overlayStyle||km),setStyle:e=>{t.overlayStyle=e},persist:e=>{t.overlayStyle=e,g({...t,overlayStyle:e})},getQr:()=>Th({...t.overlayQr||dh,address:t.receive}),setQr:e=>{t.overlayQr=Th({...e,menuOffers:[]})},persistQr:e=>{t.overlayQr=Th({...e,menuOffers:[]}),g({...t,overlayQr:t.overlayQr})},getMenuStyle:()=>Ph(t.overlayMenu||Ah),setMenuStyle:e=>{t.overlayMenu=e},persistMenu:e=>{t.overlayMenu=e,g({...t,overlayMenu:e})},getReceiveAddress:()=>t.receive||``,getDryRun:()=>!1,getChainSymbol:()=>Me(),getMenuOffers:()=>Fe(),isPageActive:()=>f===`obs`}),Te=[h(`btn-connect`),h(`btn-disconnect`),h(`btn-test`),h(`btn-scan`),h(`btn-stop`),h(`btn-watch`),h(`btn-simulate`)];function z(){for(let e of Te)if(e.id!==`btn-stop`&&e.id!==`btn-disconnect`){if(u){e.disabled=!0;continue}if(e.id===`btn-scan`){e.disabled=!s.connected;continue}e.disabled=!1}}function B(e){u=e,d&&=(clearTimeout(d),null),e&&(d=setTimeout(()=>{d=null,u&&(u=!1,l?pt():z())},25e3)),l?pt():z()}function V(){A.setIntifaceUrl(t.intifaceUrl),A.setLovenseLocalIp(t.lovenseLocalIp),A.setLovenseAppId(t.lovenseAppId),A.setDisabledToys(t.disabledToys),A.setToyMotorMasks(t.toyMotorMasks||{}),A.setMaxVibeCaps(t.menuMaxVibe??8,t.toyMaxVibe||{}),A.setToyIdentity(t.toyIdentity||{})}function Ee(){re.setGapMs(t.queueGapMs),re.setMaxQueue(t.maxQueue)}function De(){let e=Vc(F.value).length;h(`rpc-count`).textContent=e?`(${e} active)`:`(using chain defaults when empty)`}function Oe(){let e=h(`url-label`),n=h(`url-field`),r=h(`appid-field`),i=t.backend===`bluetooth`,a=t.backend!==`lovense`;if(t.backend===`bluetooth`){let e=v();h(`device-hint`).textContent=e?`Bluetooth stays in this app. Link toy opens a picker — select several toys and link them together. Add toy links more without dropping the first.`:Mx()?`Bluetooth in this browser window. After a refresh, Link toy brings them back. Same button adds the next one.`:`Bluetooth in this browser window. After a refresh you pick each toy again — that is the Bluetooth picker, not Lovense Connect.`}else t.backend===`intiface`?(e.textContent=`Intiface WebSocket`,M.placeholder=`ws://127.0.0.1:12345`,M.value=t.intifaceUrl,h(`device-hint`).textContent=`Advanced multi-brand stack. Most people should use Lovense Connect.`):t.backend===`lovense-remote`?(e.textContent=`Local IP`,M.placeholder=wb,M.value=Db(t.lovenseLocalIp),N.placeholder=Nb,N.value=t.lovenseAppId,h(`device-hint`).textContent=Fb):(e.textContent=`Local IP`,M.placeholder=wb,M.value=Db(t.lovenseLocalIp),N.placeholder=Nb,N.value=t.lovenseAppId,h(`device-hint`).textContent=Pb);let o=t.backend===`lovense`;h(`lovense-download`).hidden=!o,n.hidden=i,r.hidden=a,n.classList.remove(`is-idle`),r.classList.remove(`is-idle`),M.disabled=i,N.disabled=a}function ke(){let e=I.value.trim(),t=h(`address-pill`);if(!e){t.textContent=`required`,t.classList.remove(`on`,`bad`);return}U(e)?(t.textContent=`valid`,t.classList.add(`on`),t.classList.remove(`bad`)):(t.textContent=`invalid`,t.classList.add(`bad`),t.classList.remove(`on`))}function Ae(e){return wm(e,t.menuFilterToyIds)}function je(){let e=xm(S()),t=new Set(Ae(e));return e.filter(e=>e.id&&t.has(e.id))}function Me(){let e=Lc[t.chainKey],n=t.tokenAddress.trim();if(n&&U(n)){let e=(t.savedTokens||[]).find(e=>e.address.toLowerCase()===n.toLowerCase());return(e?_p(e):``)||se.value.trim()||rt(n)||t.tokenSymbol||`TOKEN`}return e.symbol}function Ne(e){return Number.isFinite(e)?e>=1e3?e.toLocaleString(void 0,{maximumFractionDigits:0}):e>=10?e.toLocaleString(void 0,{maximumFractionDigits:2}):e.toLocaleString(void 0,{maximumFractionDigits:4,minimumFractionDigits:0}):`0`}function Pe(e){let t=new Map;for(let n of e){let e=t.get(n.sheetKey)||[];e.push(n),t.set(n.sheetKey,e)}let n=[];for(let e of t.values()){let t=nf(e.map(e=>({id:e.id,amount:e.offer.amount}))),r=new Map(t.map(e=>[e.id,e.amount]));for(let t of e){let e=r.get(t.id)??t.offer.amount,i=t.receive&&U(t.receive)?Zm({receiveAddress:t.receive,amountHuman:e,chainId:t.chainId,decimals:t.decimals,tokenAddress:t.tokenAddress||null}):null,a=i&&t.receive?rh(i,t.receive):void 0;n.push({...t.offer,amount:e,amountLabel:`${Ne(e)} ${t.symbol}`,paymentUri:a})}}return n}function Fe(e){let n=e?.includeMenuViz!==!1,r=je()||[];if(!r.length)return[];let i=Lc[t.chainKey],a=t.receive.trim(),o=t.tokenAddress.trim(),s=!!(o&&U(o)),c=s?Math.max(0,Math.round(Number(t.tokenDecimals)||18)):Math.max(0,Math.round(i.chain.nativeCurrency.decimals??18)),l=[];for(let e of r){let r=X(e.name||``,e.toyType,e.id),u=Ef(e,{disabled:t.disabledPatterns,featured:t.featuredPatterns,includeDisabled:!1});for(let d of u){let u=n?R_(d):void 0,f=pf(d.id,t.patternPrices,t.toyPatternPrices,e.id);if(!Number.isFinite(f)||f<=0)continue;let p=Me(),m=`${r}|${s?o.toLowerCase():`native`}`,h={name:d.name,amount:f,amountLabel:`${Ne(f)} ${p}`,note:r,blurb:String(d.blurb||``).trim()||void 0,featured:t.featuredPatterns.includes(d.id),strengths:u,barsSvg:u?L_(u,{w:720,h:64,quality:`hd`}):void 0};l.push({id:`${m}|${d.id}`,sheetKey:m,offer:h,symbol:p,tokenAddress:s?o:``,decimals:c,receive:a,chainId:i.chain.id})}}let u=Pe(l);return u.sort((e,t)=>Number(!!t.featured)-Number(!!e.featured)||e.amount-t.amount||(e.note||``).localeCompare(t.note||``)||e.name.localeCompare(t.name)),vh(u,e=>e.note||``,32)}let Ie=0,Le=!1;k=()=>{window.clearTimeout(Ie);let e=Le?450:2400;Ie=window.setTimeout(()=>{let e=Th({...t.overlayQr||dh,address:t.receive||``}),n=e.slides.menu!==!1||e.slides.qr!==!1,r=Th({...e,menuOffers:n?Fe():[],menuSymbol:Me()});Le=!0,t.overlayQr=Th({...r,menuOffers:[]}),og(r),dg(Fe({includeMenuViz:!1}))},e)};let Re=()=>{throw Error(`Payments feed is not initialized`)},H=()=>{},{tipBuzzToys:ze,plansForPayment:Be,resolveToyFeedLabel:Ve,feedFeelLine:He,ensureDeviceReady:Ue,runPatternTest:We,onPayment:Ge}=M_({getState:()=>t,getDeviceToys:()=>s.toys||[],device:A,applyDeviceSettings:V,buzzQueue:re,addPayment:e=>Re(e),paintFeed:()=>H(),setQueueStatus:e=>{h(`queue-status`).textContent=e},getOverlayStyle:()=>Im(t.overlayStyle||km),notifyTip:e=>{we.notify(e)},showError:_}),Ke=Sb({$:h,getState:()=>t,getFeed:()=>c,plansForPayment:Be,feedFeelLine:He,resolveToyFeedLabel:Ve,showError:_});({addPayment:Re,paintFeed:H}=Ke);let qe=Zp({onPayment:Ge,onStatus:e=>{n=e,l&&_t()},onError:_});function Je(){let e=t.backend===`bluetooth`?`Bluetooth`:t.backend===`lovense`?`Lovense Connect`:t.backend===`lovense-remote`?`Lovense Remote`:t.backend===`intiface`?`Intiface`:`Lovense Connect`,r=U(t.receive)?(()=>{let e=et(t.receive);return e?`${e} (${vb(t.receive)})`:vb(t.receive)})():`wallet not set`,i=q.length-t.disabledPatterns.length,a=s.connected?`connected`:`off`,o=n.watching?`watching`:`idle`,c=s.toys?.filter(e=>e.id&&!t.disabledToys.includes(e.id)).length??0,l=s.toys?.length??0;h(`session-line`).textContent=[r,`${e} · ${a}`,o,`${i} patterns on`].join(` · `),h(`device-summary`).textContent=[e,a,l?`toys ${c}/${l} buzz`:`no toys yet`].join(` · `)}if(U(t.receive)){let e=t.savedWallets.length;t.savedWallets=Hf(t.savedWallets,t.receive),t.savedWallets.length!==e&&g(t)}let Ye=eS({root:e,pageMain:le,pageLive:ue,pageSettings:de,pageMenu:fe,pageObs:pe,menuButton:me,drawer:he,drawerScrim:ge,onPage:e=>{f=e,e===`main`?Je():e===`live`?(dt(),Je(),_t(),ot(),H()):e===`settings`?(dt(),ut()):e===`obs`?we.paint():(dt(),O())}}),Xe=Ye.setDrawerOpen,Ze=Ye.showPage;function Qe(e){let t=(s.toys||[]).filter(e=>e.source===`bluetooth`&&e.connected!==!1);if(Sx(e)&&t.length){_(``),h(`device-status`).textContent=`Linked · ${t.map(e=>e.name).join(` · `)} · ${t.length} online · Add toy for the next one`;return}_(e instanceof Error?e.message:String(e))}let $e=Hy({$:h,elements:{receive:I,receiveLabel:L,settingsStatus:Se},getState:()=>t,setState:e=>{t=e},readForm:()=>st.readForm(),save:g,showError:_,paintSession:Je,paintWatch:_t,paintAddressPill:ke,syncQr:()=>void we.syncQr(),onReceiveChange:()=>{lt(),ke(),De(),Je()}}),{labelForAddress:et,paintSavedWallets:tt}=$e,nt=Uy({$:h,elements:{token:ae,symbol:R,decimals:oe,label:se,settingsStatus:document.getElementById(`menu-token-status`)},getState:()=>t,setState:e=>{t=e},readForm:()=>st.readForm(),save:g,showError:_,paintSession:()=>{Je(),O()},onTokenFieldChange:()=>{lt(),ke(),De(),Je(),O()}}),{tokenLabelForAddress:rt,paintSavedTokens:it}=nt,at=tb({$:h,getState:()=>t,setState:e=>{t=e},readForm:()=>st.readForm(),save:g,isWatching:()=>n.watching,restartWatch:()=>void Tt(),getToys:()=>(s.toys||[]).filter(e=>!!e.id&&e.source!==`preview`&&String(e.status||``).toLowerCase()!==`catalog`).map(e=>({id:e.id,name:e.name||``,toyType:e.toyType,connected:e.connected})),getPatterns:()=>vf(t.disabledPatterns).map(e=>({id:e.id,name:e.name}))}),{paintPoolPanel:ot}=at,st=Lb({$:h,elements:{backend:j,deviceUrl:M,appId:N,chain:P,rpcList:F,receive:I,receiveLabel:L,minAmount:ie,token:ae,tokenDecimals:oe,tokenSymbol:R,tokenLabel:se,night:_e,queueGap:ve,maxQueue:ye,pollMs:be,status:xe,importFile:Ce},getState:()=>t,setState:e=>{t=e},save:g,getView:()=>f,getOverlayStyle:()=>Im(t.overlayStyle||km),getOverlayQr:()=>Th({...t.overlayQr||dh,address:t.receive||``,menuOffers:[]}),getOverlayMenu:()=>Ph(t.overlayMenu||Ah),readOverlayStyle:()=>we.readStyle(),readOverlayQr:()=>we.readQr(),readOverlayMenu:()=>we.readMenuStyle(),formatRpcList:e=>Hc(Vc(e)),parseRpcList:Vc,syncUrlField:Oe,paintRpcCount:De,applyDeviceSettings:V,applyQueueSettings:Ee,paintAddressPill:ke,paintSavedWallets:tt,paintSavedTokens:it,paintPoolPanel:ot,paintSession:Je,paintPatterns:O,paintMode:gt,paintWatch:_t,paintQueue:vt,isWatching:()=>n.watching,labelForAddress:et,tokenLabelForAddress:rt}),{readForm:ct,persist:lt,fillSettingsForm:ut,applyForm:dt}=st;function ft(){if(t.backend!==`lovense`&&t.backend!==`lovense-remote`)return;let e=A.lovenseLocalIp.trim();Eb(e)||(M.value.trim()!==e||t.lovenseLocalIp.trim()!==e)&&(M.value=e,lt())}function pt(){let e=h(`device-pill`),n=h(`btn-connect`),r=h(`btn-disconnect`),i=h(`btn-scan`),a=t.backend,o=s.connected;try{window.__jttBleLinked=(s.toys||[]).filter(e=>e.source===`bluetooth`||e.source===`ble`).map(e=>({id:String(e.id||``),name:String(e.name||e.toyType||``),mac:e.extra?.mac==null?``:String(e.extra.mac),connected:e.connected!==!1}))}catch{}let c=a===`bluetooth`&&D()&&!o;e.textContent=a===`bluetooth`?o?`bluetooth`:c?`linking`:`off`:a===`intiface`?o?`intiface`:`off`:o?`connected`:c?`linking`:`off`,e.classList.toggle(`on`,o),n.textContent=a===`bluetooth`?o?`Add toy`:`Link toy`:`Connect`,n.title=a===`bluetooth`&&o?`Open the Bluetooth picker to link another toy (keeps existing links)`:a===`bluetooth`?v()?`Open the Bluetooth picker and choose a toy`:`Open the browser Bluetooth picker`:`Find and link a toy`,i.hidden=a===`bluetooth`||!o,i.textContent=`Refresh`,i.title=`Refresh the toy list`;let l=h(`toy-list`),d=h(`toy-empty`),f=h(`toy-box`);l.replaceChildren();let p=S().filter(e=>e.source!==`preview`);if(p.length){f.classList.add(`has-toys`),d.hidden=!0;let e=h(`err`);!e.hidden&&/no device selected|cancelled · pick a toy/i.test(e.textContent||``)&&p.some(e=>e.source===`bluetooth`&&e.connected!==!1)&&_(``);let n=new Set(t.disabledToys);for(let e of p)l.append(rS(e,{buzzOn:!e.id||!n.has(e.id),testing:u,motorMask:e.id?t.toyMotorMasks?.[e.id]:void 0,onMotorMask:(e,n)=>{let r={...t.toyMotorMasks||{}};n.length?r[e]=n:delete r[e],t.toyMotorMasks=r,A.setToyMotorMasks(t.toyMotorMasks),g({...ct(),toyMotorMasks:t.toyMotorMasks}),pt()},onToggleBuzz:(e,n)=>{let r=new Set(t.disabledToys);n?r.delete(e):r.add(e),t.disabledToys=[...r],A.setDisabledToys(t.disabledToys),g({...ct(),disabledToys:t.disabledToys}),pt(),O()},onIdentity:(e,n)=>{let r=lm((s.toys||[]).find(t=>t.id===e)||{id:e}),i={...t.toyIdentity||{}},a=String(n||``).trim().toLowerCase();for(let t of r.length?r:[e])!a||a===`auto`?delete i[t]:i[t]={product:a};t.toyIdentity=i,A.setToyIdentity(t.toyIdentity),g({...ct(),toyIdentity:t.toyIdentity}),A.refreshToys(),O()},onTestFeature:(e,n)=>{if(u)return;let r=async e=>{B(!0);try{let t=(s.toys||[]).map(e=>({id:e.id,name:e.name,connected:e.connected!==!1,source:e.source}));$b(`E`,`app.ts:onTestFeature`,`feature test click`,{id:e,channel:n,deviceConnected:s.connected,bleLinked:A.isConnected,live:t}),await A.testFeature(e,n,3e3),_(``)}catch(t){$b(`E`,`app.ts:onTestFeature`,`feature test error`,{id:e,channel:n,err:t instanceof Error?t.message:String(t)}),_(t instanceof Error?t.message:String(t))}finally{B(!1)}},i=(s.toys||[]).some(t=>t.id===e&&t.connected!==!1);if(t.backend===`bluetooth`&&!i){A.openBluetoothPicker().then(t=>{let n=(s.toys||[]).some(t=>t.id===e&&t.connected!==!1)?e:t.id||e;return r(n)}).catch(e=>{Qe(e)});return}r(e)}}))}else f.classList.remove(`has-toys`),d.hidden=!1,d.textContent=s.connected?`No toys online`:`Not connected`;let m=[s.message||``];a===`bluetooth`&&Tx()&&m.unshift(Dx()),s.endpoint&&s.backend!==`bluetooth`&&m.push(`endpoint ${s.endpoint}`);let y=p.filter(e=>e.id&&!t.disabledToys.includes(e.id)).length;p.length&&m.push(`${y}/${p.length} set to buzz`),h(`device-status`).textContent=m.filter(Boolean).join(` · `),r.hidden=!p.length&&!s.connected;let b=a===`lovense`||a===`lovense-remote`;r.textContent=s.connected&&!b?`Disconnect all`:`Disconnect`,r.title=b?a===`lovense-remote`?`Stop this page talking to Remote. Does not close the Lovense app. Stays off after refresh.`:`Stop this page talking to Connect. Does not close the Lovense app. Stays off after refresh.`:s.connected?`Drop every live toy`:`Clear leftover toys from last session`,mt(),ht(),z(),Je()}function mt(){let e=s.connected?s.backend:``,n=t.backend,r={bluetooth:`Bluetooth`,lovense:`Lovense Connect`,"lovense-remote":`Lovense Remote`,intiface:`Intiface`};for(let t of[`lovense`,`lovense-remote`,`bluetooth`,`intiface`]){let i=e===t,a=n===t,o=r[t],s=i?`${o} · connected`:a?`${o} · selected`:o,c=document.getElementById(`link-light-${t}`);c&&(c.classList.toggle(`is-on`,i),c.classList.toggle(`is-picked`,a&&!i),c.title=s);let l=document.getElementById(`backend-pick-${t}`);l&&(l.classList.toggle(`is-on`,i),l.classList.toggle(`is-picked`,a&&!i),l.setAttribute(`aria-pressed`,a||i?`true`:`false`),l.title=s)}}function ht(){let e=h(`ble-relink`),n=h(`ble-relink-title`),r=h(`ble-relink-body`),i=C();if(t.backend!==`bluetooth`||Tx()||m||i>0||A.isReconnecting){e.hidden=!0;return}try{let e=Nx.loadRememberedToys();e.length&&localStorage.setItem(Nx.rememberedKey,JSON.stringify(e));for(let e of Nx.rememberedKeyLegacy)localStorage.removeItem(e)}catch{}let a=Nx.loadRememberedNames();if(!a.length){e.hidden=!0;return}e.hidden=!1,n.textContent=`Re-link after refresh`;let o=a.length;r.textContent=Mx()?`Last session: ${o} Bluetooth toy${o===1?``:`s`}. Keep them powered on, then Link toy.`:v()?`After refresh, Link toy again for each of your ${o} toy${o===1?``:`s`}.`:`This browser asks again after each refresh. Hit Link toy, then Add toy for each of your ${o} toy${o===1?``:`s`}.`,h(`btn-ble-lovense`).hidden=!0,h(`btn-ble-flag`).hidden=v()}function gt(){}function _t(){let e=h(`watch-pill`);e.textContent=n.watching?`watching`:`stopped`,e.classList.toggle(`on`,n.watching);let s=h(`page-live`),c=n.watching;if(s.classList.toggle(`is-live`,c),c&&!r){let e=h(`live-flash`);e.classList.add(`flash-burst`),i&&clearTimeout(i),i=setTimeout(()=>{e.classList.remove(`flash-burst`)},800),a??=t.watchLiveSince||Date.now(),o&&clearInterval(o),o=setInterval(()=>{n.watching&&_t()},3e4)}else!c&&r&&(a=null,o&&clearInterval(o),o=null);r=c;let l=n.blockNumber==null?``:` · block ${n.blockNumber.toString()}`,u=n.rpcCount>0?` · ${n.rpcCount} RPC(s)`:``,d=dl(t.pools),f=t.pools?.length||0,p=Tl(t.bridges),m=Il(t.chainLogs),g=d.length+p.length+m.length,_=f+(t.bridges?.length||0)+(t.chainLogs?.length||0),v=t.poolWatch&&g>0?` · ${g} chain event${g===1?``:`s`}`:t.poolWatch&&_>0?` · chain events on (none ticked)`:``,y=vb(t.receive)||`…`,b=n.watching?t.receive?`Listening for wallet tips to ${y}${l}${u}${v}`:t.poolWatch&&g?`Listening for chain events only${l}${u}`:`Listening${l}${u}${v}`:`Not watching — press Start watching in the header when ready`,x=n.watching&&a!=null?Math.floor((Date.now()-a)/1e3):0,S=n.watching&&a!=null?(()=>{let e=Math.floor(x/60),t=x%60;return e?`${e}m ${t}s`:`${t}s`})():``;h(`watch-status`).textContent=b+(S?` · ${S}`:``);let C=h(`btn-watch`);C.textContent=n.watching?`Stop watching`:`Start watching`,C.classList.toggle(`is-watching`,n.watching),C.setAttribute(`aria-pressed`,n.watching?`true`:`false`),Je()}function vt(){let e=h(`queue-pill`),n=ne.busy||ne.waiting>0;e.textContent=n?ne.waiting>0?`queue ${ne.waiting}`:`playing`:`ready`,e.classList.toggle(`on`,n),h(`queue-status`).textContent=ne.message&&ne.message!==`idle`?ne.message:`Each toy buzzes its own queue · ${t.queueGapMs}ms gap`}let yt=Vy({$:h,getState:()=>t,readForm:ct,saveSettings:g,getDeviceToys:()=>S(),resolvedFilterToyIds:Ae,menuFitToys:je,tokenLabelForAddress:rt,getTokenLabelFieldValue:()=>se.value,showError:_,goHome:()=>Ze(`main`),paintSession:Je,runPatternTest:We,scheduleStreamMenuPush:k,applyDeviceSettings:V});O=yt.paintPatterns;let{closePatternWizard:bt,closePatternCatalog:xt,closeShareCardModal:St,closeNeedWalletPopup:Ct}=yt;function wt(){qe.stop(t),t.watchLive=!1,t.watchLiveSince=0,g({...t,watchLive:!1,watchLiveSince:0}),_t()}async function Tt(){lt();let e=await qe.start(t);if(e===`missing-target`){t.watchLive=!1,t.watchLiveSince=0,g({...t,watchLive:!1,watchLiveSince:0}),_(`Enter a tip wallet on Home, or enable Watch chain events and tick at least one pool, bridge, or custom event On`),_t();return}if(e===`failed`){_t();return}t.watchLive=!0,t.watchLiveSince||(t.watchLiveSince=Date.now()),g({...t,watchLive:!0,watchLiveSince:t.watchLiveSince}),_(``),_t()}for(let e of document.querySelectorAll(`.backend-pick`))e.addEventListener(`click`,()=>{let t=e.dataset.backend;!t||t===j.value||(j.value=t,j.dispatchEvent(new Event(`change`,{bubbles:!0})))});j.addEventListener(`change`,()=>{let e=j.value,n=e!==t.backend;t.backend=e,n&&(E=!1,t.hardwareLive=!1),Oe(),lt(),Je(),pt(),n&&(_(``),(async()=>{try{await A.disconnect()}catch{}l&&pt()})())}),M.addEventListener(`paste`,e=>{if(t.backend!==`lovense`&&t.backend!==`lovense-remote`)return;let n=kb(e.clipboardData?.getData(`text`)||``);!n.localIp&&!n.appId||(e.preventDefault(),n.localIp&&(M.value=/^https?:\/\//i.test(n.localIp)?n.localIp:n.localIp.includes(`lovense.club`)?`https://${n.localIp}`:n.localIp),t.backend===`lovense`&&n.appId&&!N.value.trim()&&(N.value=n.appId),lt())}),M.addEventListener(`focus`,()=>{(t.backend===`lovense`||t.backend===`lovense-remote`)&&Eb(M.value)&&(M.value=Db(``),M.select())}),M.addEventListener(`blur`,()=>{(t.backend===`lovense`||t.backend===`lovense-remote`)&&Eb(M.value)&&(M.value=Db(``))}),P.addEventListener(`change`,()=>{t.chainKey=`pulsechain`,P.value=`pulsechain`,lt(),Je()});for(let e of[M,N,F,ie])e.addEventListener(`change`,()=>{lt(),ke(),De(),Je()}),e.addEventListener(`input`,()=>{e===F&&De()});h(`btn-rpc-defaults`).addEventListener(`click`,()=>{F.value=Hc(Bc(P.value)),lt(),De()}),h(`btn-rpc-clear`).addEventListener(`click`,()=>{F.value=``,lt(),De()}),ce.addEventListener(`change`,()=>{let e=ce.files?.[0];if(!e)return;let t=new FileReader;t.onload=()=>{let e=iS(String(t.result||``));F.value=aS(F.value,e),lt(),De(),_(``)},t.onerror=()=>_(`Could not read RPC file`),t.readAsText(e),ce.value=``}),me.addEventListener(`click`,e=>{e.stopPropagation(),Xe(!Ye.drawerOpen)}),ge.addEventListener(`click`,()=>Xe(!1));for(let e of he.querySelectorAll(`a.nav-item-link`))e.addEventListener(`click`,()=>Xe(!1));h(`nav-home`).addEventListener(`click`,()=>Ze(`main`)),h(`btn-home-brand`).addEventListener(`click`,()=>Ze(`main`)),h(`nav-live`).addEventListener(`click`,()=>Ze(`live`)),h(`nav-tip-menu`).addEventListener(`click`,()=>Ze(`menu`)),h(`nav-obs`).addEventListener(`click`,()=>Ze(`obs`)),h(`nav-settings`).addEventListener(`click`,()=>Ze(`settings`));let Et=`pulsefans.devicePanelMin`,Dt=h(`device-panel`),Ot=h(`btn-device-min`),W=h(`device-min-label`);function kt(e){Dt.classList.toggle(`is-minimized`,e),Ot.setAttribute(`aria-expanded`,e?`false`:`true`),Ot.title=e?`Expand Device`:`Minimize Device`,W.textContent=e?`Expand Device`:`Minimize Device`}kt(localStorage.getItem(Et)===`1`),Ot.addEventListener(`click`,()=>{let e=!Dt.classList.contains(`is-minimized`);kt(e);try{localStorage.setItem(Et,e?`1`:`0`)}catch{}});let At=`pulsefans.watchPanelMin`,jt=h(`watch-panel`),Mt=h(`btn-watch-min`),Nt=h(`watch-min-label`);function Pt(e){jt.classList.toggle(`is-minimized`,e),Mt.setAttribute(`aria-expanded`,e?`false`:`true`),Mt.title=e?`Expand Go live`:`Minimize Go live`,Nt.textContent=e?`Expand Go live`:`Minimize Go live`}Pt(localStorage.getItem(At)===`1`),Mt.addEventListener(`click`,()=>{let e=!jt.classList.contains(`is-minimized`);Pt(e);try{localStorage.setItem(At,e?`1`:`0`)}catch{}}),document.addEventListener(`keydown`,e=>{if(e.key!==`Escape`)return;if(!h(`pattern-wizard`).hidden){bt();return}if(!h(`pattern-catalog`).hidden){xt();return}if(!h(`export-need-wallet-modal`).hidden){Ct();return}if(!h(`menu-share-modal`).hidden){St();return}let t=document.getElementById(`obs-branding-modal`);if(t&&!t.hidden){t.hidden=!0;return}Ye.drawerOpen?Xe(!1):f!==`main`&&Ze(`main`)}),yt.wireTipMenuEvents(),$e.wire(),nt.wire(),at.wire(),st.wire(),Ke.wire(),h(`btn-connect`).addEventListener(`click`,()=>{if(!u){if(t.hardwareLive=!0,(j.value||t.backend)===`bluetooth`){t.backend=`bluetooth`;let e=Tx();if(e){_(e),fetch(`/api/open-chrome`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({url:`${location.origin}/`})}).then(async t=>{let n=await t.json().catch(()=>({}));n.ok&&_(`${e} · opened ${n.via||`browser`}`)}).catch(()=>{});return}A.openBluetoothPicker().then(async()=>{B(!0),lt(),A.setDisabledToys(t.disabledToys),A.setToyMotorMasks(t.toyMotorMasks||{}),Mx()&&await A.connect(`bluetooth`,{skipPicker:!0}).catch(()=>{});let e=C();_(``),e>0&&(h(`device-status`).textContent=e>=6?`Linked ${e}`:`Linked ${e} · Add toy anytime for more`)}).catch(e=>{Qe(e)}).finally(()=>{B(!1)});return}(async()=>{B(!0);try{lt(),A.setDisabledToys(t.disabledToys),A.setToyMotorMasks(t.toyMotorMasks||{}),await A.connect(t.backend),ft(),_(``)}catch(e){_(e instanceof Error?e.message:String(e))}finally{B(!1)}})()}}),h(`btn-disconnect`).addEventListener(`click`,()=>{(async()=>{E=!1,t.hardwareLive=!1,ee(),g({...t,hardwareLive:!1,savedToys:[]}),B(!0);try{await A.disconnect()}catch{}finally{B(!1),_(``),h(`device-status`).textContent=`Disconnected`,pt()}})()}),h(`btn-ble-dismiss`).addEventListener(`click`,()=>{m=!0;try{localStorage.setItem(p,`1`)}catch{}h(`ble-relink`).hidden=!0}),h(`btn-ble-flag`).addEventListener(`click`,()=>{let e=h(`btn-ble-flag`);navigator.clipboard?.writeText(jx).then(()=>{e.textContent=`Copied — paste in Chrome address bar`,h(`ble-relink-body`).textContent=`Paste the copied link in Chrome, set it to Enabled, restart Chrome, then link your toys once. They come back on every refresh after that.`}).catch(()=>{h(`ble-relink-body`).textContent=`Open this in Chrome, set Enabled, restart: ${jx}`})}),h(`btn-ble-lovense`).addEventListener(`click`,()=>{j.value=`lovense`,j.dispatchEvent(new Event(`change`,{bubbles:!0})),_(``),h(`device-status`).textContent=`Lovense Connect keeps toys linked across refreshes — open Connect, then click Connect`}),h(`btn-scan`).addEventListener(`click`,()=>{if(!u&&s.connected){if((j.value||t.backend)===`bluetooth`){t.backend=`bluetooth`;let e=Tx();if(e){_(e),fetch(`/api/open-chrome`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({url:`${location.origin}/`})}).catch(()=>{});return}A.openBluetoothPicker().then(async()=>{B(!0),lt(),_(``),Mx()&&await A.connect(`bluetooth`,{skipPicker:!0}).catch(()=>{})}).catch(e=>{Qe(e)}).finally(()=>{B(!1)});return}(async()=>{B(!0);try{lt(),V(),await A.scan(t.backend),ft(),_(``)}catch(e){_(e instanceof Error?e.message:String(e))}finally{B(!1)}})()}});async function Ft(e){lt(),await Ue();let n=U(t.receive)?t.receive:`0x0000000000000000000000000000000000000000`,r=Lc[t.chainKey].symbol,i=ze(),a={prices:t.patternPrices,disabled:t.disabledPatterns,toyPrices:t.toyPatternPrices,toys:i,minAmount:0,maxTips:Math.min(48,Math.max(12,t.maxQueue||32))},o=e===`ladder`?zf(a):e===`everyToy`?Rf(a):(()=>{let e=Lf(a);return e?[e]:[]})();if(!o.length){_(`No sim tips — enable patterns that fit a Buzz-on linked toy (rotate needs Nora, multi needs dual motors)`);return}for(let e of o)Ge(Gl(n,e.amount,r,{pattern:e.pattern,toyId:e.toyId||void 0,name:e.name,price:e.price,toyLabel:e.toyLabel||void 0}));if(e===`ladder`)h(`queue-status`).textContent=`Spoofed ${o.length} forced tips (per-toy patterns, incl. rotate/thrust) · queue playing`;else if(e===`everyToy`){let e=o.map(e=>e.toyLabel||e.name).filter(Boolean);h(`queue-status`).textContent=`Test · ${o.length} toy(s) playing${e.length?` · ${e.join(`, `)}`:``}`}else h(`queue-status`).textContent=`Test · ${o[0].name}${o[0].toyLabel?` · ${o[0].toyLabel}`:``}`;_(``)}if(h(`btn-test`).addEventListener(`click`,()=>{u||(async()=>{B(!0);try{await Ft(`everyToy`)}catch(e){_(e instanceof Error?e.message:String(e))}finally{B(!1)}})()}),h(`btn-stop`).addEventListener(`click`,()=>{re.clear(),A.stopAll(),vt()}),h(`btn-watch`).addEventListener(`click`,()=>{u||(async()=>{if(n.watching){wt();return}B(!0);try{await Tt()}catch(e){_(e instanceof Error?e.message:String(e))}finally{B(!1)}})()}),h(`btn-simulate`).addEventListener(`click`,e=>{if(u)return;let t=e.shiftKey;(async()=>{B(!0);try{await Ft(t?`ladder`:`one`)}catch(e){_(e instanceof Error?e.message:String(e))}finally{B(!1)}})()}),window.addEventListener(`hashchange`,()=>{if(Ye.syncingHash)return;let e=Qx();e!==f&&Ze(e,{fromHash:!0})}),dt(),Ee(),!(t.savedToys||[]).length){let e=y();e.length&&(t.savedToys=ym([],e),g({...t,savedToys:t.savedToys}))}t.watchLive&&t.watchLiveSince&&(a=t.watchLiveSince),l=!0,pt(),_t(),H(),vt(),Je(),Xe(!1),Ze(Qx(),{fromHash:!0}),k(),(e=>{let t=()=>window.setTimeout(e,0);document.readyState===`complete`?t():window.addEventListener(`load`,t,{once:!0})})(()=>{t.watchLive&&Tt(),It()});async function It(){try{if(V(),t.hardwareLive===!1){E=!1,s={backend:t.backend,connected:!1,devices:[],toys:[],message:`Disconnected`},pt();return}if(t.backend===`bluetooth`){try{await A.connect(`bluetooth`,{skipPicker:!0,waitForAds:!0}),_(``)}catch{}$b(`D`,`app.ts:boot bluetooth`,`boot reconnect done`,{isConnected:A.isConnected,activeBackend:A.activeBackend,live:C(),remembered:w(),silentOk:Mx(),status:s.message,toys:(s.toys||[]).map(e=>({id:e.id,name:e.name,connected:e.connected}))}),pt();return}let e=(t.backend===`lovense`||t.backend===`lovense-remote`)&&!Eb(t.lovenseLocalIp||``),n=t.backend===`intiface`;if(!e&&!n){s={backend:t.backend,connected:!1,devices:[],toys:[],message:t.backend===`lovense`?`Open Connect, then click Connect`:t.backend===`lovense-remote`?`Open Remote Game Mode, paste Local IP, then Connect`:`Not connected`},pt();return}s={...s,backend:t.backend,connected:!1,devices:[],toys:[],message:`Reconnecting…`},pt();try{await A.connect(t.backend),_(``)}catch(e){let n=e instanceof Error?e.message:String(e);s={backend:t.backend,connected:!1,devices:[],toys:[],message:`Not connected`},pt(),/could not reach|connect first|local ip required|not running/i.test(n)||_(n)}}finally{E=A.isReconnecting,l&&pt()}}document.addEventListener(`visibilitychange`,()=>{if(document.visibilityState!==`visible`||t.backend!==`bluetooth`||A.isReconnecting)return;let e=w();A.isConnected&&C()>=Math.max(1,e)||!Mx()&&!e||A.connect(`bluetooth`,{skipPicker:!0}).catch(()=>{})})}var sS=document.querySelector(`#app`);if(!sS)throw Error(`#app missing`);oS(sS);