function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["CRWIkueS.js","assets/index-CyIKZwcA.js","assets/index-C3LuW5Z2.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as i,j as f,q as N,w as se,I as qe,t as d,R as w,G as Pt,T as ae,a9 as le,bY as Mt,A as xt,af as G,ap as Ct,P as Rt,ag as It,be as Tt,ai as Lt,aJ as Et,s as m,bR as Vt,bK as ke,z as j,b5 as Nt,aq as re,ar as ue,ao as ie,ab as de,at as me,av as Z,am as Be,ak as _t,al as je,Y as Dt,aE as qt,aH as kt,bU as Bt,$ as Ue,__tla as jt}from"./assets/index-CyIKZwcA.js";import{A as Oe}from"./nBoaRR4P.js";import{u as Ut}from"./CWmyRVe8.js";import{L as c}from"./DKb0irD5.js";import{u as Ot}from"./l25LWlPl.js";import{g as Ft}from"./DVVdR7oe.js";import{u as Ht}from"./C2yJ0wdw.js";import{c as $t}from"./Cm9YPx6u.js";import{u as Wt,__tla as Yt}from"./CJ_Ik3qV.js";let Fe,He,$e,We,Ye,Kt=Promise.all([(()=>{try{return jt}catch{}})(),(()=>{try{return Yt}catch{}})()]).then(async()=>{(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="f80cff78-2033-4f7d-b756-e2c2b2714c43",a._sentryDebugIdIdentifier="sentry-dbid-f80cff78-2033-4f7d-b756-e2c2b2714c43")}catch{}})();let ce,pe,ge,Ae,ne,he,fe,be,ye,ve,Se;Fe=i.memo(({poolAsset:a,runeAsset:n,poolAssetList:s,onAssetAmountChange:p,onRuneAmountChange:e,onPoolChange:t,liquidityType:o,isAssetPending:A,isRunePending:u})=>{const{assetInputProps:S,assets:g}=Ut(s);return f.jsxs(N,{col:!0,className:"relative self-stretch w-full",children:[f.jsx(N,{className:se("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","p-1 md:p-2 rounded-xl md:rounded-[18px]","border-10 border-solid bg-blue dark:border-dark-border-primary border-transparent","opacity-100 scale-100 transition-all",{"!scale-0 !opacity-0":o!==c.SYMMETRICAL}),children:f.jsx(qe,{className:se("w-7 h-7"),color:"white",name:"plus"})}),f.jsx(N,{className:se("overflow-hidden h-[111px] transition-all",{"!h-[0px]":o===c.RUNE}),children:f.jsx(Oe,{hideZeroPrice:!0,...S,assets:g,className:"!mb-1 flex-1",disabled:A,maxButtonLabel:u?d("pendingLiquidity.complete"):"",onAssetChange:t,onValueChange:p,selectedAsset:a,warning:A?d("pendingLiquidity.content",{asset:w.ticker}):""})}),f.jsx(N,{className:se("overflow-hidden transition-all",{"!h-[0px]":o===c.ASSET,"h-[111px] ":o!==c.RUNE,"h-[140px] md:h-[111px]":o===c.RUNE}),children:f.jsx(Oe,{hideZeroPrice:!0,singleAsset:!0,assets:s,className:"!mb-1 flex-1",disabled:u,maxButtonLabel:A?d("pendingLiquidity.complete"):"",onAssetChange:t,onValueChange:e,poolAsset:a,selectedAsset:n,showSecondaryChainSelector:o===c.RUNE,warning:u?d("pendingLiquidity.content",{asset:a.asset.ticker}):""})})]})}),ce="gap-2 border-0 border-r border-dotted border-light-typo-gray dark:border-dark-typo-gray",He=({poolTicker:a,runeTicker:n,poolShare:s,slippage:p,fee:e,rate:t})=>{const o=[{label:`${a} ${d("common.per")} ${n}`,value:t||"N/A"},{label:d("views.wallet.slip"),value:p||"N/A"},{label:d("common.fee"),value:e||"N/A"},{label:d("views.addLiquidity.shareOfPool"),value:s||"N/A"}];return f.jsx(Pt,{className:"self-stretch !mt-0 !bg-light-bg-primary dark:!bg-dark-gray-light !rounded-2xl flex-col",shadow:!1,title:f.jsxs(N,{row:!0,className:"gap-x-2",children:[f.jsx(qe,{color:"secondary",name:"infoCircle",size:16}),f.jsx(ae,{fontWeight:"normal",textStyle:"caption",variant:"primary",children:d("views.addLiquidity.pricesAndPoolShare")})]}),children:f.jsx(N,{className:"w-full",children:o.map(({label:A,value:u},S)=>{const g=S===0,x=S===o.length-1;return f.jsxs(N,{col:!0,alignCenter:!(g||x),className:x?"text-right":ce,flex:1,justify:"between",children:[f.jsx(ae,{fontWeight:"semibold",textStyle:"caption",variant:"secondary",children:A}),f.jsx(ae,{className:"text-base md:text-h4",textStyle:"caption",children:u})]},A)})})})},Ye=a=>{const[n,s]=i.useState(a||c.SYMMETRICAL);return{liquidityType:n,setLiquidityType:s}},pe=({testAddresses:a}={})=>{const{walletAddresses:n,isWalletLoading:s}=le(),p=i.useMemo(()=>{const u=Object.values(a||{});return u.length>0?u:n},[n,a]),{data:e,isFetching:t,isLoading:o,refetch:A}=Mt(p,{skip:!p.length||s});return{data:e,refetch:A,isLoading:t||o}},ge=({assetString:a,liquidityType:n})=>{const{walletAddresses:s}=le(),{data:p,refetch:e,isLoading:t}=pe(),o=i.useMemo(()=>(p==null?void 0:p.find(({pool:S,runeAddress:g,assetAddress:x})=>S.toLowerCase()!==a.toLowerCase()?!1:n===c.SYMMETRICAL?s.includes(g)&&s.includes(x):!0))||{},[a,p,s,n]),A=i.useMemo(()=>Number.parseInt((o==null?void 0:o.runePending)||"0")>0,[o==null?void 0:o.runePending]),u=i.useMemo(()=>Number.parseInt((o==null?void 0:o.assetPending)||"0")>0,[o==null?void 0:o.assetPending]);return{lpMemberData:o,isRunePending:A,isAssetPending:u,refetch:e,isLoading:t}},Ae=({assets:a,fees:n,totalFee:s,poolShare:p,slippage:e,estimatedTime:t})=>{const o=a.map(u=>({label:`${d("views.liquidity.depositAmount")} ${u.asset.symbol}`,value:f.jsxs(N,{alignCenter:!0,justify:"between",children:[f.jsx(ae,{className:"mx-2",fontWeight:"semibold",children:u.value}),f.jsx(xt,{asset:u.asset,size:24})]})})),A=n.map(u=>({label:`${u.chain==="THOR"?"THORChain":u.chain} ${d("common.fee")}`,value:f.jsx(G,{tooltip:d("views.liquidity.chainFeeTooltip",{chain:u.chain==="THOR"?"THORChain":u.chain}),value:u.fee})}));return[...o,{label:d("views.wallet.slip"),value:f.jsx(G,{tooltip:d("views.wallet.slippageTooltip"),value:e||"N/A"})},{label:d("views.liquidity.poolShareEstimated"),value:f.jsx(G,{tooltip:d("views.liquidity.poolShareTooltip"),value:p})},...A,{label:d("views.wallet.totalFee"),value:f.jsx(G,{tooltip:d("views.wallet.totalFeeTooltip"),value:s||"N/A"})},{label:d("views.wallet.estimatedTime"),value:f.jsx(G,{tooltip:d("views.wallet.estimatedTimeTooltip"),value:t})}]},ne=a=>m.fromBigInt(BigInt(a),Dt.THOR),he=({depth:a,poolUnits:n,liquidityUnits:s})=>new m(a).mul(s).div(n).getValue("string"),fe=({runeAmount:a,assetAmount:n,runeDepth:s,assetDepth:p})=>{if(a==="0"&&n==="0"||s==="0"||p==="0")return 0;if(a==="0"||n==="0"){const g=m.fromBigInt(BigInt(s)),x=m.fromBigInt(BigInt(p)).div(g),R=new m(a),E=new m(n).div(x);if(R.eqValue(E))return 0;const _=E.gt(R)?E:R;return _.div(2).div(_.add(g)).mul(100).getValue("number")}const e=ne(s),t=ne(p),o=new m(n),A=new m(a),u=o.mul(e).sub(t.mul(A)),S=t.mul(A).add(e.mul(t));return Math.abs(u.div(S).mul(100).getValue("number"))},be=({runeDepth:a,assetDepth:n,liquidityUnits:s,runeAmount:p,assetAmount:e})=>{if(p==="0"&&e==="0")return 0;const t=new m({value:a,decimal:8}),o=new m({value:n,decimal:8}),A=new m({value:s,decimal:8}),u=new m(p).mul(10**8),S=new m(e).mul(10**8),g=u.mul(o),x=S.mul(t),R=u.mul(S),E=t.mul(o),_=A.mul(g.add(x.add(R.mul(2)))),I=g.add(x.add(E.mul(2))),H=_.div(I||1);return H.gt(0)?H.div(A||1).getValue("number"):0},ye=({assetAmount:a,runeAmount:n,runePriceInAsset:s,assetPriceInRune:p,minAssetAmount:e,minRuneAmount:t})=>{const o=n.mul(s);if(o.gt(a)){const S=a.lte(e)?e:a,g=n.lte(t)?t:n,x=Math.min(S.set(S.getValue("number")/s).getValue("number"),n.getValue("number")),R=Math.min(g.set(g.getValue("number")/p).getValue("number"),a.getValue("number"));return{maxSymAssetAmount:S.set(R),maxSymRuneAmount:a.set(x)}}const A=o.lte(e)?e:o,u=n.lte(t)?t:n;return{maxSymAssetAmount:A,maxSymRuneAmount:u}},ve={assetAddress:"",contract:"",symmetric:!1,lpProgressModal:!1,poolAddress:"",poolAssetValue:void 0,runeAddress:"",runeAssetValue:void 0},Se=(a,{type:n,payload:s})=>{switch(n){case"setLpProgressModal":return{...a,lpProgressModal:s};case"setContract":return{...a,contract:s};case"setLPProgressState":return{...a,...s,lpProgressModal:!0};default:return a}},We=({onAddLiquidity:a,skipWalletCheck:n,liquidityType:s,setLiquidityType:p,poolAsset:e,poolData:t,depositAssetsBalance:o,wallet:A})=>{const{hasWallet:u,getWallet:S}=le(),g=Ct(),{expertMode:x}=Rt(),{setIsConnectModalOpen:R}=It(),{isChainPauseLPAction:E}=Tt(),{getChainDepositLPPaused:_}=Lt(),{data:I}=Et([w,e]),[H,J]=i.useReducer(Se,ve),{isWalletAssetConnected:we,runeBalance:Pe,maxRuneBalance:$,poolAssetBalance:Me,maxPoolAssetBalance:U}=o,W=i.useCallback(l=>S(l)||(A==null?void 0:A[l]),[S,A]),xe=i.useMemo(()=>E(e.chain)||_(e.chain),[E,e.chain,_]),{lpMemberData:r,isAssetPending:P,isRunePending:C}=ge({assetString:e.toString(),liquidityType:s}),V=i.useMemo(()=>s===c.SYMMETRICAL&&!x,[s,x]),[b,O]=i.useState(new m({value:0,decimal:8})),[y,F]=i.useState(new m({value:0,decimal:8})),[Ke,X]=i.useState(!1),[ze,oe]=i.useState(!1),[Ge,Ze]=i.useState(!0),{feeInUSD:Ce,inputFee:Re,outputFee:Je}=Ht({inputAsset:e,outputAsset:w}),Q=i.useMemo(()=>({runeAmount:y.getValue("string"),assetAmount:b.getValue("string"),runeDepth:(t==null?void 0:t.runeDepth)??"0",assetDepth:(t==null?void 0:t.assetDepth)??"0",liquidityUnits:(t==null?void 0:t.liquidityUnits)??"0",poolUnits:(t==null?void 0:t.units)??"0"}),[b,t==null?void 0:t.assetDepth,t==null?void 0:t.liquidityUnits,t==null?void 0:t.runeDepth,t==null?void 0:t.units,y]),D=Number.parseInt((t==null?void 0:t.assetDepth)||"0")/Number.parseInt((t==null?void 0:t.runeDepth)||"0"),q=Number.parseInt((t==null?void 0:t.runeDepth)||"0")/Number.parseInt((t==null?void 0:t.assetDepth)||"0"),Ie=i.useMemo(()=>`${fe(Q).toFixed(2)}%`,[Q]),Te=i.useMemo(()=>Vt(be(Q)),[Q]),Y=i.useMemo(()=>{const l=!!W(e.chain),h=!!W(w.chain);return s===c.ASSET?l:(s===c.RUNE||l)&&h},[W,e.chain,s]),Le=i.useCallback(async l=>{const h=await $t()||[],{router:v,halted:M}=h.find(T=>T.chain===l)||{};if(M&&!v)throw new Error("Trading & LP is temporarily halted, please try again later.");J({type:"setContract",payload:v||""})},[]);i.useEffect(()=>{Le(e.chain)},[Le,e.chain]);const{isApproved:Ee,isLoading:Xe}=Wt({assetValue:e.set(b.getValue("string")),contract:H.contract,force:!0}),ee=i.useMemo(()=>e.toString(),[e]),Ve=i.useMemo(()=>{var v;const l=((v=I[ee])==null?void 0:v.price_usd)||0,h=P&&m.fromBigInt(BigInt((r==null?void 0:r.assetPending)||"0")).getValue("number")||b.getValue("number");return l*h},[I,ee,P,r==null?void 0:r.assetPending,b]),k=i.useMemo(()=>ke(j.THORChain),[]),B=i.useMemo(()=>Nt(e)?ke(e.chain):new m({value:0,decimal:8}),[e]),{maxSymAssetAmount:Ne,maxSymRuneAmount:_e}=i.useMemo(()=>t?ye(P&&r?{runeAmount:$,assetAmount:m.fromBigInt(BigInt(r.assetPending),8),runePriceInAsset:D,assetPriceInRune:q,minAssetAmount:B,minRuneAmount:k}:U&&C&&r?{runeAmount:m.fromBigInt(BigInt(r.runePending),8),assetAmount:U,runePriceInAsset:D,assetPriceInRune:q,minAssetAmount:B,minRuneAmount:k}:{runeAmount:$||m.fromBigInt(BigInt(0),8),assetAmount:U||m.fromBigInt(BigInt(0),8),runePriceInAsset:D,assetPriceInRune:q,minAssetAmount:B,minRuneAmount:k}):{maxSymAssetAmount:new m({value:0,decimal:8}),maxSymRuneAmount:new m({value:0,decimal:8})},[t,P,r,C,$,U,D,q,B,k]),Qe=i.useCallback(l=>{l===c.ASSET?F(new m({value:0,decimal:8})):l===c.RUNE&&O(new m({value:0,decimal:8})),p(l)},[p]),et=i.useCallback(l=>{if(!t){O(l);return}const h=V?Ne:U;h&&l.gt(h)&&!n?(O(new m({value:h.getValue("string"),decimal:8})),V&&F(new m({value:h.mul(q).getValue("string"),decimal:8}))):(O(l),V&&F(new m({value:l.mul(q).getValue("string"),decimal:8})))},[t,V,Ne,U,n,q]),tt=i.useCallback(l=>{if(!t){F(l);return}const h=V?_e:$;h&&l.gt(h)&&!n?(F(new m({value:h.getValue("string"),decimal:8})),V&&O(new m({value:h.mul(D).getValue("string"),decimal:8}))):(F(l),V&&O(l.mul(D)))},[t,V,_e,$,n,D]),st=i.useCallback(async()=>{var l;if(X(!1),a&&e&&s!==c.ASSET){a({poolAsset:e,runeAmount:w.set(y.getValue("string"))});return}if(u&&t){const h=s!==c.ASSET?w.set(y.getValue("string")):void 0,v=s!==c.RUNE?e.set(b.getValue("string")):void 0,M=re(),T=re();!C&&h&&g(ue({id:M,label:d("txManager.addAmountAsset",{asset:w.ticker,amount:y.toSignificant(6)}),type:ie.TC_LP_ADD,inChain:j.THORChain})),!P&&v&&g(ue({id:T,label:d("txManager.addAmountAsset",{asset:e.ticker,amount:b.toSignificant(6)}),type:ie.TC_LP_ADD,inChain:e.chain}));const yt=C||P||s===c.SYMMETRICAL,vt=C||P||s===c.SYMMETRICAL?{runeAddr:r==null?void 0:r.runeAddress,assetAddr:r==null?void 0:r.assetAddress}:{},St=s===c.SYMMETRICAL?"sym":s===c.ASSET?"asset":"baseAsset",wt={baseAssetValue:w.set(y.getValue("string")),assetValue:e.set(b.getValue("string")),isPendingSymmAsset:yt,mode:St,poolIdentifier:"",...vt},{thorchain:De}=await(await de(()=>import("./CRWIkueS.js"),__vite__mapDeps([0,1,2]))).getSwapKitClient();if(!De)throw new Error("SwapKit client not found");try{const{runeTx:L,assetTx:z}=await De.addLiquidity(wt);g(L!=="failed"&&typeof L=="string"?me({id:M,txid:L}):Z({id:M,status:"error"})),g(z!=="failed"&&typeof z=="string"?me({id:T,txid:z}):Z({id:T,status:"error"}))}catch(L){const z=((l=L==null?void 0:L.data)==null?void 0:l.originalError)||L.message;g(Z({id:M,status:"error"})),g(Z({id:T,status:"error"})),Be(d("notification.submitFail"),z,void 0,L)}}},[a,e,s,u,t,y,b,C,P,r==null?void 0:r.runeAddress,r==null?void 0:r.assetAddress,g]),at=i.useCallback(async()=>{if(X(!1),u&&t){const l=s!==c.ASSET&&!C?w.set(y.getValue("string")):void 0,h=s!==c.RUNE&&!P?e.set(b.getValue("string")):void 0,{getAddress:v}=await(await de(()=>import("./CRWIkueS.js"),__vite__mapDeps([0,1,2]))).getSwapKitClient();J({type:"setLPProgressState",payload:{runeAssetValue:l,poolAssetValue:h,symmetric:s===c.SYMMETRICAL,poolAddress:e.toString(),runeAddress:v(j.THORChain),assetAddress:v(e.chain)}})}},[u,t,s,P,y,C,e,b]),it=i.useCallback(async()=>{if(oe(!1),we(e)){const l=re(),h=e.chain===j.Ethereum?ie.ETH_APPROVAL:ie.AVAX_APPROVAL;g(ue({id:l,type:h,label:`${d("txManager.approve")} ${e.ticker}`,inChain:e.chain}));const{thorchain:v}=await(await de(()=>import("./CRWIkueS.js"),__vite__mapDeps([0,1,2]))).getSwapKitClient();if(!v)throw new Error("SwapKit client not found");try{const M=await v.approveAssetValue({assetValue:e});typeof M=="string"&&g(me({id:l,txid:M}))}catch(M){_t(M),g(Z({id:l,status:"error"})),Be(d("notification.approveFailed"),void 0,void 0,M)}}},[g,e,we]),nt=i.useCallback(()=>{if(!(Y||n))return je(d("notification.walletNotFound"),d("notification.connectWallet"));X(!0)},[Y,n]),ot=i.useCallback(()=>{u?oe(!0):je(d("notification.walletNotFound"),d("notification.connectWallet"))},[u]),lt=i.useMemo(()=>s===c.RUNE?[w]:s===c.ASSET?[e]:[e,w],[s,e]),rt=i.useMemo(()=>P||s===c.RUNE?[{asset:w,value:y.toSignificant(6)}]:C||s===c.ASSET?[{asset:e,value:b.toSignificant(6)}]:[{asset:w,value:y.toSignificant(6)},{asset:e,value:b.toSignificant(6)}],[P,s,C,y,e,b]),te=i.useMemo(()=>{if(xe)return{valid:!1,msg:d("notification.notAvailableDeposit")};if(s===c.SYMMETRICAL){if(!(y.gte(k)&&b.gte(B)))return{valid:!1,msg:d("notification.invalidAmount")};if(r&&(Number(r.assetPending)||Number(r.runePending))&&Number(r.runeAdded)&&!Number(r.assetAdded))return{valid:!1,msg:d("notification.alreadyHaveRune")}}return s===c.ASSET&&!b.gte(B)?{valid:!1,msg:d("notification.insufficientAmount")}:s===c.RUNE&&!y.gte(k)?{valid:!1,msg:d("notification.insufficientAmount")}:{valid:!0}},[r,xe,s,y,b,k,B]),K=i.useMemo(()=>!!W(e.chain)&&Ee===!1&&s!==c.RUNE,[W,Ee,s,e.chain]),ut=i.useMemo(()=>({asset:e,balance:Me,usdPrice:Ve,value:P&&r?m.fromBigInt(BigInt(r.assetPending),e.decimal):b}),[e,Me,Ve,P,r,b]),dt=i.useMemo(()=>{var v;const l=C&&r?m.fromBigInt(BigInt(r.runePending),8):y,h=((v=I[w.toString()])==null?void 0:v.price_usd)||0;return{asset:w,balance:Pe,usdPrice:h*l.getValue("number"),value:l}},[C,r,y,Pe,I]),mt=i.useMemo(()=>`Add ${e.ticker} Liquidity`,[e]),ct=i.useMemo(()=>te.valid?K?"Add":"Add Liquidity":te.msg,[te,K]),pt=i.useMemo(()=>{const l=s===c.RUNE;return Ft({amount:l?y:b,chain:l?j.THORChain:e.chain})},[s,b,y,e]),gt=Ae({assets:rt,poolShare:Te,slippage:Ie||"N/A",estimatedTime:pt,totalFee:Ce,fees:[{chain:e.chain,fee:Re.toSignificant()},{chain:j.THORChain,fee:Je.toSignificant()}]}),At=Ot({assetName:e.ticker,assetValue:b.toSignificant(6),fee:Re.toSignificant()}),ht=i.useMemo(()=>Y&&!K,[Y,K]),ft=i.useMemo(()=>{var M,T;const l=((M=I[w.toString()])==null?void 0:M.price_usd)||0,h=((T=I[ee])==null?void 0:T.price_usd)||.001,v=l/h;return Number.isNaN(v)?0:v},[ee,I]),bt=i.useCallback(l=>J({type:"setLpProgressModal",payload:l}),[J]);return{...H,addLiquiditySlip:Ie,approveConfirmInfo:At,asymmTipVisible:Ge,btnLabel:ct,confirmInfo:gt,depositAssets:lt,feeInUSD:Ce,getEstimatedPoolShareForPoolDepth:he,handleAddLiquidity:nt,handleApprove:ot,handleChangeAssetAmount:et,handleChangeRuneAmount:tt,handleConfirmAdd:st,handleConfirmProgressModal:at,handleConfirmApprove:it,handleSelectLiquidityType:Qe,isApproveRequired:K,isAssetApproveLoading:Xe,isAssetPending:P,isDepositAvailable:ht,isRunePending:C,isValidDeposit:te,isWalletConnected:Y,lpMemberData:r,poolAssetInput:ut,poolShareEst:Te,rate:ft,runeAssetInput:dt,setAsymmTipVisible:Ze,setIsConnectModalOpen:R,setLpProgressModal:bt,setVisibleApproveModal:oe,setVisibleConfirmModal:X,title:mt,visibleApproveModal:ze,visibleConfirmModal:Ke}},$e=({assetRouteGetter:a=Bt}={})=>{const n=qt(),{assetParam:s}=kt(),[p,e]=i.useState();i.useEffect(()=>{(()=>{const o=s?Ue.from({asset:s}):Ue.from({chain:j.Bitcoin});e(o)})()},[s]);const t=i.useCallback(o=>{n(a(o))},[a,n]);return{poolAsset:p,assetParam:s,handleSelectPoolAsset:t}}});export{Fe as A,He as P,Kt as __tla,$e as a,We as b,Ye as u};