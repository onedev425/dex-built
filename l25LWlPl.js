import{r as o,t as s,j as n,af as r}from"./assets/index-CyIKZwcA.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="50dfa6c8-2223-4114-b641-7dde5ad793aa",e._sentryDebugIdIdentifier="sentry-dbid-50dfa6c8-2223-4114-b641-7dde5ad793aa")}catch{}})();const d=({assetValue:e,assetName:a,fee:t="N/A"})=>o.useMemo(()=>[{label:s("views.liquidity.approve"),value:`${e} ${a.toUpperCase()}`},{label:s("common.transactionFee"),value:n.jsx(r,{tooltip:s("common.transactionFee"),value:t})}],[t,a,e]);export{d as u};