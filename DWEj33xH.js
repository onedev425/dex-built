import{r as o,ak as j,t as i,cS as C,am as E,aE as N,bN as S,aL as W,j as r,q as h,T as x,I as w,w as I,br as D,D as F}from"./assets/index-CyIKZwcA.js";import{F as v}from"./C7jX1ZPo.js";import{P as z}from"./GQQXxAVl.js";import{V as K}from"./DA3rLf5F.js";import{u as M}from"./Dk64sxA0.js";import"./Cm6z4UIW.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[d]="e3910df1-2b55-4a20-b755-828e04440f67",t._sentryDebugIdIdentifier="sentry-dbid-e3910df1-2b55-4a20-b755-828e04440f67")}catch{}})();const _=({onSuccess:t})=>{const[d,c]=o.useState(""),[m,n]=o.useState(null),[u,g]=o.useState(""),{addMultisigWallet:l}=M(),b=o.useCallback(e=>{if(!(e.members&&Array.isArray(e.members))||e.members.some(a=>!a.pubKey))throw Error("Incorrect wallet members");const s=Number(e.threshold)||Number(e.treshold);if(!s||s>e.members.length)throw Error("Incorrect threshold");return{threshold:s,members:e.members.map(({pubKey:a,name:k=""})=>({pubKey:a,name:k}))}},[]),f=o.useCallback(e=>{try{const s=JSON.parse(e),a=b(s);c(""),n(a)}catch(s){j(s),c(i("views.multisig.jsonError")),n(null)}},[b]),p=o.useCallback(e=>{e&&(c(`${i("views.multisig.selectingKeyError")}: ${e}`),n(null))},[]),y=o.useCallback(async()=>{if(m)try{const{members:e,threshold:s}=m,a=await C.createMultisigWallet(e,s);if(!a)throw Error("Incorrect wallet data");l({members:e,threshold:s,address:a,name:u}),t()}catch(e){j(e),E("Handle connect Wallet failed",void 0,void 0,e)}},[l,u,t,m]);return{onChangeFile:f,fileError:d,setFileError:c,onError:p,name:u,setName:g,useCallback:o.useCallback,handleConnectWallet:y,isValid:!!m&&!d,walletData:m}},J=()=>{const t=N(),{openFilePicker:d,filesContent:[{content:c}={content:""}],loading:m,errors:n}=S({accept:[".txt",".json"]}),u=o.useCallback(()=>t(W.Multisig),[t]),{onChangeFile:g,fileError:l,onError:b,name:f,setName:p,handleConnectWallet:y,isValid:e,walletData:s}=_({onSuccess:u});return o.useEffect(()=>{var a;c?g(c):n&&b((a=n==null?void 0:n[0])==null?void 0:a.name)},[c,n,g,b]),r.jsx(z,{header:r.jsx(K,{withBack:!0,title:i("views.multisig.connectThorSafeWallet")}),title:i("views.multisig.thorSafeWallet"),children:r.jsxs(h,{col:!0,className:"self-stretch gap-8",children:[r.jsx(x,{children:i("views.multisig.selectWalletJson")}),r.jsxs(h,{col:!0,className:"gap-8",children:[r.jsxs(h,{col:!0,children:[r.jsx(v,{hasError:!!l,label:i("views.multisig.selectFile")}),r.jsxs(h,{alignCenter:!0,className:"h-10 px-3 border border-solid cursor-pointer rounded-2xl border-light-border-primary dark:border-dark-border-primary hover:border-light-typo-gray dark:hover:border-dark-typo-gray",onClick:d,children:[!(s||l)&&r.jsx(w,{name:"upload",size:18}),s&&!l&&r.jsx(w,{color:"green",name:"valid",size:18}),l&&r.jsx(w,{color:"red",name:"invalid",size:18}),r.jsx(x,{className:I("text-[11px] opacity-80 ml-2",{"opacity-100":s&&!l}),fontWeight:"semibold",textStyle:"caption-xs",children:i("views.walletModal.chooseKeystore")})]}),!!l&&r.jsx(h,{className:"my-1 mx-2",children:r.jsx(x,{fontWeight:"normal",textStyle:"caption",variant:"red",children:l})})]}),r.jsxs(h,{col:!0,children:[r.jsx(v,{label:i("views.multisig.thorSafeName")}),r.jsx(D,{stretch:!0,border:"rounded",className:"py-1",onChange:a=>p(a.target.value),placeholder:i("views.multisig.nameExample"),value:f})]})]}),r.jsx(h,{center:!0,className:"w-full pt-5",children:r.jsx(F,{stretch:!0,disabled:!e,error:!!l,loading:m,onClick:y,size:"lg",variant:"fancy",children:i("common.connect")})})]})})};export{J as default};