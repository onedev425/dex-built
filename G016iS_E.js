import{j as r,q as l,r as y,T as t,w as h,t as p}from"./assets/index-CyIKZwcA.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="45f6683c-11e3-49ca-91cc-681a5e3d4b7e",a._sentryDebugIdIdentifier="sentry-dbid-45f6683c-11e3-49ca-91cc-681a5e3d4b7e")}catch{}})();const w=({chartTypeIndexes:a,selectedChartTypeIndex:n,selectChartTypeIndex:o})=>r.jsx(l,{row:!0,className:"space-x-2",children:a.map((e,c)=>r.jsxs(y.Fragment,{children:[c!==0&&r.jsx(t,{children:" / "}),r.jsx("div",{className:"cursor-pointer",onClick:()=>o(e),children:r.jsx(t,{className:h("hover:underline underline-offset-4",{underline:e===n}),fontWeight:"bold",textStyle:"body",variant:e===n?"primary":"secondary",children:p("views.home.chart",{context:e})})},e)]},e))});var d=(a=>(a.Swap="swap",a.Add="add",a.Withdraw="withdraw",a.Synth="synth",a))(d||{}),s=(a=>(a.Total="total",a.Earned="earned",a))(s||{}),i=(a=>(a.Liquidity="liquidity",a.LpEarning="lpEarning",a.BondEarning="bondEarning",a))(i||{});const u=["swap","synth","add","withdraw"],g=["earned","total"],b=["liquidity","lpEarning","bondEarning"];export{w as C,i as L,s as S,d as V,b as l,g as s,u as v};