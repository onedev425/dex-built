function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["CRWIkueS.js","assets/index-CyIKZwcA.js","assets/index-C3LuW5Z2.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as e,q as l,D as j,I as C,t as d,r as p,aK as $,ab as me,al as pe,bC as xe,aY as ge,T as x,l as q,w as b,cC as u,aE as Q,h as ue,A,c3 as S,b6 as Y,J as G,$ as N,c7 as J,b0 as U,bi as X,bF as Z,O as ye,U as je,b7 as we,a9 as be,P as ee,b8 as Ce,br as fe,W as ve,bg as ke,__tla as Se}from"./assets/index-CyIKZwcA.js";import{u as Ne}from"./BDlMcymV.js";import{P as _e,a as Ie,S as ae,b as se,u as ne,C as le,W as re,__tla as Te}from"./DKA_CR4d.js";import{T as Ae}from"./D07MMJG9.js";import{u as W}from"./C20jg5MW.js";import{C as We}from"./Caa2RfUU.js";import"./B88jsabw.js";import"./Dqpzwe9K.js";import"./mMiU1HvE.js";import"./BDCxTHDM.js";let ie,De=Promise.all([(()=>{try{return Se}catch{}})(),(()=>{try{return Te}catch{}})()]).then(async()=>{(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="97b79069-1079-4d06-a41c-8bc05cc88263",n._sentryDebugIdIdentifier="sentry-dbid-97b79069-1079-4d06-a41c-8bc05cc88263")}catch{}})();let _,I,T,D,L,R,k,z,M,O,V,P;_=({isLoading:n,isConnected:a,handleRefreshChain:r,toggleConnect:o})=>e.jsx(l,{className:"gap-2",children:a?e.jsxs(e.Fragment,{children:[e.jsx(j,{className:"px-3",leftIcon:e.jsx(C,{color:"primaryBtn",name:"refresh",size:16,spin:n}),onClick:r,tooltip:d("common.refresh"),variant:"outlinePrimary"}),e.jsx(j,{className:"px-3",leftIcon:e.jsx(C,{color:"orange",name:"disconnect",size:16}),onClick:o,tooltip:d("common.disconnect"),variant:"outlineWarn"})]}):e.jsx(j,{disabled:n,onClick:o,variant:a?"outlinePrimary":"primary",children:e.jsx(l,{center:!0,className:"gap-x-2",children:d("common.connect")})})}),I=({chain:n,chainWallet:a,balance:r})=>{const[o,i]=p.useState(!1),c=()=>{i(!1)},s=p.useCallback(async()=>{(a==null?void 0:a.walletType)===$.KEYSTORE&&i(!0);const{getAddress:t}=await(await me(()=>import("./CRWIkueS.js"),__vite__mapDeps([0,1,2]))).getSwapKitClient();(a==null?void 0:a.walletType)===$.LEDGER&&pe(xe("notification.verifyLedgerAddy"),t(n),{duration:20*1e3})},[a==null?void 0:a.walletType,n]);return e.jsxs(l,{center:!0,className:"space-x-1",children:[!!a&&e.jsx(ge,{onClick:s,size:16,walletType:a==null?void 0:a.walletType}),e.jsx(x,{children:q(n,!0)}),!!a&&e.jsx(x,{fontWeight:"semibold",variant:"primaryBtn",children:r}),e.jsx(_e,{isOpen:o,onCancel:c})]})},T=p.memo(({asset:n,mode:a,sparkline:r})=>{const{label:o,values:i}=Ie(n,r);return e.jsx(l,{center:!0,className:b("opacity-0 w-[99%] transition-opacity duration-500",{"!opacity-100":i.length>0,"!-my-[20px] lg:w-[100px] xl:w-[320px]":a===u.LIST}),style:{height:a===u.CARD?100:80},children:i.length>0&&e.jsx(We,{hideLabel:!0,labels:[o],values:i})})}),D=(n,a,r)=>{const o=W(),i=Q(),{isLgActive:c}=ue();return p.useMemo(()=>[{id:"asset",Header:()=>d("common.asset"),disableSortBy:!0,accessor:s=>s,Cell:({cell:{value:s}})=>e.jsx(A,{asset:s,hasChainIcon:!1,size:40})},{id:"name",Header:()=>"",disableSortBy:!0,minScreenSize:S.md,accessor:s=>s,Cell:({cell:{value:s}})=>e.jsxs(l,{col:!0,className:"pl-4",justify:"between",children:[e.jsx(x,{children:s.ticker}),e.jsx(x,{variant:"secondary",children:s.type})]})},{id:"amount",Header:()=>d("common.amount"),align:"right",accessor:s=>s.toFixed(2),Cell:({cell:{value:s}})=>e.jsx(x,{fontWeight:"bold",children:n?s:"-"})},{id:"price",Header:()=>d("common.usdPrice"),align:"right",minScreenSize:S.md,accessor:s=>{var t;return((t=r[s.toString()])==null?void 0:t.price_usd)||0},Cell:({cell:{value:s}})=>e.jsx(x,{fontWeight:"bold",children:o(s)}),sortType:"basic"},{id:"price24h",Header:()=>"24h%",align:"right",accessor:s=>{var t,h;return((h=(t=r[s.toString()])==null?void 0:t.cg)==null?void 0:h.price_change_percentage_24h_usd)||0},minScreenSize:S.md,Cell:({cell:{value:s}})=>e.jsxs(x,{fontWeight:"bold",variant:s>=0?"green":"red",children:[s.toFixed(2),"%"]}),sortType:"basic"},{id:"chart",Header:()=>d("views.wallet.chart7d"),minScreenSize:S.lg,align:"center",disableSortBy:!0,accessor:s=>s,Cell:({cell:{value:s}})=>{var t,h;return e.jsx(T,{asset:s,mode:u.LIST,sparkline:(h=(t=r[s.toString()])==null?void 0:t.cg)==null?void 0:h.sparkline_in_7d})}},{accessor:s=>s,id:"actions",Header:()=>"",align:"right",disableSortBy:!0,Cell:({cell:{value:s}})=>e.jsxs(l,{row:!0,className:"gap-2",justify:"end",children:[e.jsx(j,{leftIcon:e.jsx(C,{className:"rotate-180 group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",color:"secondary",name:"receive",size:20}),onClick:()=>i(Y(s)),variant:"tint",children:c?d("common.send"):null}),e.jsx(ae,{address:n,chain:a,openComponent:e.jsx(j,{disabled:!n,leftIcon:e.jsx(C,{className:"group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",color:"secondary",name:"receive",size:20}),tooltip:n?d("views.wallet.showQRCode"):d("views.walletModal.notConnected"),variant:"tint",children:c?d("common.receive"):null})}),e.jsx(j,{leftIcon:e.jsx(C,{className:"group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",color:"secondary",name:"swap",size:20}),onClick:()=>i(G(s)),variant:"tint",children:c?d("common.swap"):null})]})}],[n,r,o,c,a,i])},L=p.memo(({priceData:n,chainInfo:a,chain:r,chainAddress:o})=>{const[i,c]=p.useState(!1),s=N.fromChainOrSignature(r),t=a.filter(y=>!y.eqAsset(s)),h=a.find(y=>y.eqAsset(s))||N.fromChainOrSignature(s.chain,0),m=p.useCallback(()=>{c(y=>!y)},[]),w=D(o,r,n),g=i?[h,...t]:[h];return e.jsxs(l,{col:!0,className:"transition-all",children:[e.jsx(Ae,{columns:w,data:g,hasShadow:!1,sortable:g.length>1}),!!t.length&&e.jsx(j,{leftIcon:e.jsx(J,{isActive:i}),onClick:m,variant:"tint",children:i?d("views.wallet.hideTokens"):d("views.wallet.showAllTokens")})]})}),R=p.memo(({thornames:n,chain:a})=>{const r=U(),{chainWalletLoading:o,accountBalance:i,chainAddress:c,chainInfo:s,priceData:t,setIsConnectModalOpen:h,chainWallet:m}=se(a),{handleRefreshChain:w}=ne(a),g=p.useCallback(()=>{c?r({type:"disconnectByChain",payload:a}):h(!0)},[a,c,h,r]);return e.jsx(X,{className:b("overflow-hidden",Z),children:e.jsxs(l,{col:!0,className:"w-full min-w-fit",flex:1,children:[e.jsxs(l,{alignCenter:!0,row:!0,className:"pb-2 border-0 border-b border-solid border-light-gray-light dark:border-dark-border-primary",justify:"between",children:[e.jsxs(l,{className:"flex-wrap flex-1 gap-3",justify:"between",children:[e.jsx(I,{balance:i,chain:a,chainWallet:m}),c&&e.jsxs(l,{alignCenter:!0,className:"!mr-4",children:[n.map(y=>e.jsx(le,{address:y,type:"full"},y)),e.jsx(re,{address:c,chain:a})]})]}),e.jsx(_,{handleRefreshChain:w,isConnected:!!c,isLoading:o,toggleConnect:g})]}),e.jsx(L,{chain:a,chainAddress:c,chainInfo:s,priceData:t})]})})}),k=p.memo(({className:n,label:a,onClick:r,icon:o,disabled:i,tooltip:c})=>e.jsxs(l,{center:!0,col:!0,className:"group gap-y-2",children:[e.jsx(j,{className:"!w-12 px-0",disabled:i,leftIcon:e.jsx(C,{className:b("group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary min-w-[20px]",n),color:"secondary",name:o,size:20}),onClick:r,size:"md",tooltip:c,variant:"tint"}),e.jsx(x,{className:"group-hover:!text-light-typo-primary dark:group-hover:!text-dark-typo-primary",fontWeight:"medium",textStyle:"caption",variant:"secondary",children:a})]})),z=p.memo(({assetValue:n,priceData:a})=>{const r=W(2,""),{currentPrice:o,priceChangePercentage24h:i}=p.useMemo(()=>{const{price_usd:t,cg:h}=(a==null?void 0:a[n.toString()])||{};return{currentPrice:t||0,priceChangePercentage24h:(h==null?void 0:h.price_change_percentage_24h_usd)||0}},[n,a]),c=n.getValue("number"),s=`${n.toSignificant(6)} (${r(c*o)})`;return e.jsxs(l,{className:"px-3 py-2 border-0 border-b border-solid border-light-gray-light dark:border-dark-border-primary",justify:"between",children:[e.jsxs(l,{children:[e.jsx(A,{asset:n,hasChainIcon:!1}),e.jsxs(l,{col:!0,className:"pl-2",children:[e.jsx(x,{children:n.ticker}),e.jsx(x,{fontWeight:"semibold",textStyle:"caption",variant:"secondary",children:s})]})]}),e.jsxs(l,{col:!0,align:"end",children:[e.jsx(x,{children:r(o)}),e.jsxs(x,{fontWeight:"semibold",textStyle:"caption",variant:i>=0?"green":"red",children:[i==null?void 0:i.toFixed(2),"%"]})]})]})}),M=p.memo(({thornames:n,chain:a})=>{var B,E,F,K;const{isActive:r,contentRef:o,toggle:i,maxHeightStyle:c}=ye(),s=W(),t=Q(),h=U(),{sigAssetPriceInfo:m,accountBalance:w,chainAddress:g,chainInfo:y,priceData:te,setIsConnectModalOpen:H,chainWallet:oe,chainWalletLoading:ce}=se(a),{handleRefreshChain:de}=ne(a),f=N.from({chain:a}),he=p.useCallback(()=>{g?h({type:"disconnectByChain",payload:a}):H(!0)},[a,g,H,h]);return e.jsx(X,{className:b("overflow-hidden",Z),children:e.jsxs(l,{col:!0,className:"w-full",children:[e.jsxs(l,{row:!0,className:"pb-4 border-0 border-b-2 border-solid border-light-gray-light dark:border-dark-border-primary",justify:"between",children:[e.jsx(I,{balance:w,chain:a,chainWallet:oe}),e.jsx(_,{handleRefreshChain:de,isConnected:!!g,isLoading:!!ce,toggleConnect:he})]}),e.jsxs(l,{alignCenter:!0,className:"mt-3",justify:"between",children:[e.jsxs(l,{children:[e.jsx(A,{hasShadow:!0,asset:f,size:40}),e.jsxs(l,{col:!0,className:"ml-2",children:[e.jsx(x,{children:f.ticker}),e.jsx(x,{fontWeight:"medium",textStyle:"caption-xs",variant:"secondary",children:f.type})]})]}),g&&e.jsxs(l,{alignCenter:!0,children:[e.jsxs(l,{col:!0,children:[e.jsx(l,{alignCenter:!0,row:!0,children:n.length>0&&e.jsx(l,{onClick:i,children:e.jsx(J,{isActive:r})})}),e.jsx("div",{className:je,ref:o,style:c,children:e.jsx(l,{col:!0,align:"start",children:n.map(v=>e.jsx(le,{address:v,type:"full"},v))})})]}),e.jsx(re,{address:g,chain:a})]})]}),e.jsxs(l,{center:!0,col:!0,className:"mt-2",children:[e.jsx(l,{alignCenter:!0,flex:1,justify:"between",children:e.jsx(x,{fontWeight:"semibold",textStyle:"h3",children:s(m==null?void 0:m.price_usd)})}),e.jsxs(x,{fontWeight:"semibold",textStyle:"caption",variant:(((B=m==null?void 0:m.cg)==null?void 0:B.price_change_percentage_24h_usd)||0)>=0?"green":"red",children:[(F=(E=m==null?void 0:m.cg)==null?void 0:E.price_change_percentage_24h_usd)==null?void 0:F.toFixed(2),"%"]})]}),e.jsx(T,{asset:f,mode:u.CARD,sparkline:(K=m==null?void 0:m.cg)==null?void 0:K.sparkline_in_7d}),e.jsxs(l,{center:!0,className:"pb-4 border-0 border-b-2 border-solid gap-x-6 border-light-gray-light dark:border-dark-border-primary",children:[e.jsx(k,{className:"rotate-180",icon:"receive",label:d("common.send"),onClick:()=>t(Y(f))}),e.jsx(ae,{address:g,chain:a,openComponent:e.jsx(k,{disabled:!g,icon:"receive",label:d("common.receive"),tooltip:g?d("views.wallet.showQRCode"):d("views.walletModal.notConnected")})}),e.jsx(k,{icon:"swap",label:d("common.swap"),onClick:()=>t(G(f))})]}),e.jsx(l,{className:"h-24 md:h-36",children:y.length>0?e.jsx(l,{col:!0,className:"!-mb-6",flex:1,children:e.jsx(we,{children:y.map(v=>e.jsx(z,{assetValue:v,priceData:te},v.ticker))})}):e.jsx(l,{center:!0,flex:1,children:e.jsx(x,{textStyle:"subtitle2",variant:"secondary",children:d("views.wallet.noDataToShow")})})})]})})}),O=p.memo(({onlyConnected:n,keyword:a})=>{const{getWalletAddress:r}=be(),{walletViewMode:o}=ee(),i=Ne(),c=p.useMemo(()=>Ce.filter(t=>{const h=N.fromChainOrSignature(t),m=a.toLowerCase();return[h.chain.toLowerCase(),h.symbol.toLowerCase(),q(t,!0).toLowerCase()].some(w=>w.includes(m))&&(n?!!r(t):!0)}),[r,a,n]),s=p.useCallback(t=>{const h=r(t);return i&&h?i.reduce((m,{entries:w=[],thorname:g})=>(w.find(y=>y.address===h)&&m.push(`${g}.${t.toLowerCase()}`),m),[]):[]},[r,i]);return e.jsx(l,{col:!0,className:b({"gap-1.5 flex-1":o===u.LIST,"grid w-full grid-cols-1 gap-2.5 lg:grid-cols-2 xl:grid-cols-3 md:flex-row":o===u.CARD}),children:c.map(t=>o===u.CARD?e.jsx(M,{chain:t,thornames:s(t)},t):e.jsx(R,{chain:t,thornames:s(t)},t))})}),V=p.memo(({setOnlyConnected:n,onlyConnected:a,walletViewMode:r,setWalletViewMode:o,keyword:i,setKeyword:c})=>e.jsxs(l,{alignCenter:!0,className:"w-full px-1.5 flex-wrap gap-2",justify:"between",children:[e.jsx(fe,{border:"rounded",icon:"search",onChange:s=>c(s.target.value),placeholder:d("views.wallet.search"),value:i}),e.jsxs(l,{alignCenter:!0,className:"space-x-6",children:[e.jsxs(l,{center:!0,className:"gap-x-2 rounded-2xl",children:[e.jsx(x,{textStyle:"caption",children:d("views.wallet.showOnlyConnectedChains")}),e.jsx(ve,{checked:a,onChange:n})]}),e.jsxs(l,{center:!0,children:[e.jsx(j,{className:b("pl-3 pr-3 !rounded-r-none",{"!bg-opacity-90 dark:!bg-opacity-50":r===u.CARD}),leftIcon:e.jsx(C,{className:b({"!text-white !stroke-white":r===u.CARD}),name:"grid",size:20}),onClick:()=>o(u.CARD),tooltip:d("views.wallet.gridView"),variant:r===u.CARD?"primary":"outlineTint"}),e.jsx(j,{className:b("pl-2 pr-3 !rounded-l-none",{"!bg-opacity-90 dark:!bg-opacity-50":r===u.LIST}),leftIcon:e.jsx(C,{className:b({"!text-white !stroke-white":r===u.LIST}),name:"list",size:20}),onClick:()=>o(u.LIST),tooltip:d("views.wallet.listView"),variant:r===u.LIST?"primary":"outlineTint"})]})]})]})),P=()=>{const{walletViewMode:n,setWalletViewMode:a}=ee(),[r,o]=p.useState(""),[i,c]=p.useState(!1);return e.jsxs(l,{col:!0,className:"w-full",children:[e.jsx(ke,{content:"Manage you tokens in your custodial wallet on THORSwap",keywords:"Wallet, Tokens, THORSwap, THORChain, DEFI, DEX",title:d("views.wallet.wallet")}),e.jsx(V,{keyword:r,onlyConnected:i,setKeyword:o,setOnlyConnected:c,setWalletViewMode:a,walletViewMode:n}),e.jsx(l,{className:"w-full mt-4",children:e.jsx(O,{keyword:r,onlyConnected:i})})]})},ie=P});export{De as __tla,ie as default};