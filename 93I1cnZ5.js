function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["CRWIkueS.js","assets/index-CyIKZwcA.js","assets/index-C3LuW5Z2.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as t,R as g,j as s,q as y,T as A,t as o,P as De,aJ as Ne,ap as Fe,aq as Ie,ar as Oe,ao as Y,ab as ee,at as Pe,ak as Re,av as Ve,am as se,aE as He,aH as We,aD as Le,a9 as ze,ag as Ue,b6 as qe,z as D,s as Be,b9 as Ke,p as te,I as ae,a7 as Ze,aM as ne,l as Ge,ce as Je,D as oe,$ as Xe,__tla as Qe}from"./assets/index-CyIKZwcA.js";import{b as Ye,A as ie}from"./nBoaRR4P.js";import{G as es}from"./Cse5bgR0.js";import{I as ce}from"./nkxDqpDa.js";import{C as ss,__tla as ts}from"./VQNeEiYk.js";import{P}from"./B3Cf38Ih.js";import{P as as}from"./GQQXxAVl.js";import{V as ns}from"./DA3rLf5F.js";import{u as os}from"./Bfr6H5f3.js";import{u as is,__tla as cs}from"./BQokClGM.js";import{u as ls}from"./C2yJ0wdw.js";import{u as rs}from"./rzhudTEk.js";import"./BGeRo-1L.js";import"./CkVRNEhN.js";import"./C20jg5MW.js";import"./CzdZMSiN.js";import"./Cm6z4UIW.js";import"./DYrZbK8R.js";let le,ms=Promise.all([(()=>{try{return Qe}catch{}})(),(()=>{try{return ts}catch{}})(),(()=>{try{return cs}catch{}})()]).then(async()=>{(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="ac005c51-2d4e-4b8f-86c8-ee2cc2b59754",n._sentryDebugIdIdentifier="sentry-dbid-ac005c51-2d4e-4b8f-86c8-ee2cc2b59754")}catch{}})();let R,V,H,W,L,z;R=({memo:n,setMemo:i})=>{const{poolAssets:p}=rs(),[e]=t.useState("deposit"),[r,u]=t.useState(g),d=t.useMemo(()=>p.map(c=>({asset:c})),[p]),m=t.useCallback(({target:{value:c}})=>{i(c)},[i]);return s.jsxs(y,{col:!0,className:"self-stretch gap-1",flex:1,children:[s.jsx(y,{className:"self-stretch px-1.5",children:s.jsx(A,{children:o("common.msgDeposit")})}),e==="swap"&&s.jsxs(y,{alignCenter:!0,className:"px-1.5",justify:"between",children:[s.jsxs(A,{textStyle:"caption",children:[o("views.send.outputAsset"),":"]}),s.jsx(Ye,{assets:d,onSelect:u,selected:r})]}),s.jsx(P,{onChange:m,title:o("common.memo"),value:n})]})},V="",H=()=>{const{customSendVisible:n}=De(),[i,p]=t.useState(""),[e,r]=t.useState(!1),{data:u}=Ne([g]),d=t.useMemo(()=>{var c;return((c=u[g.ticker])==null?void 0:c.price_usd)||0},[u]);t.useEffect(()=>{n||r(!1)},[n]);const m=[{label:o("views.send.toggleCustomTxForm"),status:e,onClick:()=>r(c=>!c)}];return{customRecipient:V,customMemo:i,setCustomMemo:p,customTxEnabled:e,switchCustomTxEnabledMenu:m,showCustomTxToggle:n,customFeeRune:`0.02 ${g.symbol}`,customFeeUsd:(d*.02).toFixed(2)}},W=({sendAsset:n,recipientAddress:i,memo:p,setIsOpenConfirmModal:e,from:r,customTxEnabled:u=!1})=>{const d=Fe();return t.useCallback(async()=>{var m;if(e(!1),n&&(u||n.getValue("bigint")>0)){const c=Ie(),w=`${o("txManager.send")} ${n.toSignificant(6)} ${n.isSynthetic?"Synth ":""}${n.ticker}`;d(Oe({id:c,from:i,inChain:n.chain,type:u?Y.TC_DEPOSIT:Y.TC_SEND,label:w}));const{thorchain:E,getWallet:b}=await(await ee(()=>import("./CRWIkueS.js"),__vite__mapDeps([0,1,2]))).getSwapKitClient();try{if(!E)throw new Error("THORChain Provider not found");const h=u?await E.deposit({assetValue:n,recipient:i,memo:p,from:r}):await((m=b(n.chain))==null?void 0:m.transfer({assetValue:n,recipient:i,memo:p,from:r}));h&&d(Pe({id:c,txid:h}))}catch(h){Re(h),d(Ve({id:c,status:"error"})),se(o("notification.sendTxFailed"),h==null?void 0:h.toString(),void 0,h)}}},[e,n,d,i,p,r,u])},L="0xe9495f24fF1E8DD8E803B6717Fb9264683CdD7bC",z=()=>{const n=He(),{assetParam:i}=We(),[p]=Le(),[e,r]=t.useState(g),u=t.useCallback(a=>{r(f=>f.set(a))},[]),d=t.useMemo(()=>e.getValue("string"),[e]),[m,c]=t.useState(e.set(0)),[w,E]=t.useState(""),[b,h]=t.useState(p.get("recipient")||""),[N,U]=t.useState(""),[re,F]=t.useState(!1),{wallet:j,getWallet:q,getWalletAddress:me}=ze(),{setIsConnectModalOpen:ue}=Ue(),{getMaxBalance:M}=is(),{inputAssetUSDPrice:B,inputFee:K,feeInUSD:de,isLoading:Z}=ls({type:"transfer",inputAsset:e}),{customMemo:G,customRecipient:he,setCustomMemo:pe,customTxEnabled:l,switchCustomTxEnabledMenu:fe,showCustomTxToggle:ge,customFeeRune:xe,customFeeUsd:be}=H(),v=l?he:b,I=l?G:w,k=l?be:de,$=l?xe:`${K.getValue("string")} ${K.ticker}`,Ce=W({setIsOpenConfirmModal:F,sendAsset:e,recipientAddress:v,memo:I,from:j?me(e.chain):void 0,customTxEnabled:l});t.useEffect(()=>{c(void 0),M(e).then(a=>c(a))},[M,e]);const{loading:ye,TNS:x}=os(b),_=t.useMemo(()=>{var a;return x!=null&&x.entries?(a=x.entries.find(({chain:f})=>f===e.chain))==null?void 0:a.address:""},[x,e.chain]);t.useEffect(()=>{x&&_&&(U(x.thorname),h(_))},[x,_]),t.useEffect(()=>{(()=>{if(l)return r(g);if(i){const[a,f,C]=i.split("."),O=[D.THORChain,D.Maya].includes(a)&&C?`${a}.${f}/${C}`:i,Ae=Xe.from({asset:O});r(Ae||g)}else r(g)})()},[i,l]);const S=t.useMemo(()=>e&&!!q(e.chain),[e,q]),J=t.useMemo(()=>{const a=[];if(!j)return a;for(const f of Object.keys(j)){const C=j[f];if(C!=null&&C.balance)for(const O of C.balance)a.push(O)}return a},[j]),[we,je]=t.useState([]);t.useEffect(()=>{Promise.all(J.map(a=>M(a,!0).then(f=>({asset:a,balance:f})))).then(a=>{je(a)})},[M,J]);const ve=t.useCallback(a=>{h(""),n(qe(a))},[n]),X=t.useMemo(()=>e.chain===D.Ethereum&&b.toLocaleLowerCase()===L.toLocaleLowerCase(),[e,b]),Q=t.useCallback(a=>{u(S&&m&&a.gt(m)?m.getValue("string"):a.getValue("string"))},[S,m,u]),_e=t.useCallback(({target:{value:a}})=>{h(a),U("")},[]),Se=t.useCallback(({target:{value:a}})=>{E(a)},[]),Te=t.useCallback(()=>{F(!1)},[]),Ee=t.useCallback(async()=>{const{validateAddress:a}=await(await ee(()=>import("./CRWIkueS.js"),__vite__mapDeps([0,1,2]))).getSwapKitClient();l||a({chain:e.chain,address:v})?F(!0):se(o("notification.invalidChainAddy",{chain:e.chain}))},[l,e.chain,v]),T=t.useMemo(()=>({asset:e,value:new Be({value:d,decimal:e.decimal}),balance:S?m:void 0,usdPrice:Number.parseFloat(d)*B}),[B,S,m,d,e]),Me=t.useMemo(()=>[{label:o("common.transactionFee"),value:Z?s.jsx(Ke,{}):s.jsxs(y,{center:!0,className:"gap-2",children:[s.jsx(A,{textStyle:"caption",children:`${$} (${k})`}),s.jsx(te,{content:o("views.send.txFeeTooltip"),children:s.jsx(ae,{color:"secondary",name:"infoCircle",size:20})})]})}],[Z,$,k]),ke=t.useMemo(()=>[{label:o("common.send"),value:`${e==null?void 0:e.toSignificant(6)} ${e.ticker}`},{label:o("common.recipient"),value:l?o("common.msgDeposit"):Ze(v,6)},{label:o("common.memo"),value:I},{label:o("common.transactionFee"),value:s.jsxs(y,{center:!0,className:"gap-2",children:[s.jsx(A,{variant:"caption",children:`${$} (${k})`}),s.jsx(te,{content:o("views.send.txFeeTooltip"),children:s.jsx(ae,{color:"secondary",name:"infoCircle",size:20})})]})}],[e,l,v,I,$,k]),$e=t.useMemo(()=>`${o("common.recipientAddress")}${_&&N?` - ${N}.${e.chain}`:""}`,[_,e.chain,N]);return s.jsxs(as,{description:o("views.send.description"),header:s.jsx(ns,{actionsComponent:s.jsx(es,{}),title:o("common.send")}),keywords:"Wallet, Tokens, THORSwap, THORChain, DEFI, DEX",title:o("views.send.title"),children:[s.jsx("div",{className:"relative self-stretch md:w-full",children:l?s.jsx(ie,{hideZeroPrice:!0,singleAsset:!0,onValueChange:Q,selectedAsset:T}):s.jsx(ie,{hideZeroPrice:!0,assets:we,onAssetChange:ve,onValueChange:Q,selectedAsset:T})}),!l&&s.jsxs(s.Fragment,{children:[X&&s.jsx(ne,{className:"m-auto !pt-2 !pb-1 !px-2",content:"Sending funds to this address will likely result in a loss of funds. Users should deposit using the 'depositWithExpiry' method on Etherscan.",contentClassName:"py-0",title:"Warning",type:"warn"}),s.jsx(P,{loading:ye,onChange:_e,placeholder:`THORName / ${T.asset.isSynthetic||T.asset.chain===D.THORChain?g.chain:Ge(T.asset.chain)} ${o("common.address")}`,title:$e,value:b}),w&&s.jsx(ne,{className:"m-auto !pt-2 !pb-1 !px-2",content:"Sending funds to an address with a custom memo is offered as a convenience tool and should only be used by advanced users knowing precisely what they are doing. THORSwap is not responsible for any loss of funds using this functionality.",contentClassName:"py-0",title:"Warning",type:"warn"}),s.jsx(P,{collapsible:!0,onChange:Se,title:o("common.memo"),value:w})]}),ge&&s.jsx(y,{className:"self-stretch",flex:1,children:s.jsx(Je,{className:"mx-0.5",items:fe})}),l&&s.jsx(R,{memo:G,setMemo:pe}),s.jsx(ce,{horizontalInset:!0,items:Me}),s.jsx(y,{center:!0,className:"w-full pt-5",children:S?s.jsx(oe,{stretch:!0,disabled:X,onClick:Ee,size:"lg",variant:"fancy",children:o("common.send")}):s.jsx(oe,{stretch:!0,onClick:()=>ue(!0),size:"lg",variant:"fancy",children:o("common.connectWallet")})}),s.jsx(ss,{inputAssets:[e],isOpened:re,onClose:Te,onConfirm:Ce,children:s.jsx(ce,{items:ke})})]})},le=z});export{ms as __tla,le as default};