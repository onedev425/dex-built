import{k as t,cu as s,cz as r}from"./assets/index-CyIKZwcA.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="15ffda7e-d80e-447f-b076-368a03005100",e._sentryDebugIdIdentifier="sentry-dbid-15ffda7e-d80e-447f-b076-368a03005100")}catch{}})();const o=({expire:e,lastThorchainBlock:a=0})=>{const n=(a-Number.parseInt(e))/5256e3*-365;return t().add(n,"days")},d=({expire:e,lastThorchainBlock:a=0})=>o({expire:e,lastThorchainBlock:a}).format("YYYY-MM-DD"),i=({expire:e,lastThorchainBlock:a=0})=>o({expire:e,lastThorchainBlock:a}).isBefore(t()),c=()=>s.get(`${r}/inbound_addresses`),l=({asset:e,address:a})=>s.get(`${r}/pool/${e}/saver/${a}`),f=({type:e,...a})=>s.get(`${r}/quote/saver/${e}?${new URLSearchParams(a).toString()}`),p=()=>s.get(`${r}/pools`);export{l as a,p as b,c,d,f as g,i};