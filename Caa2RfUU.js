import{r as u,j as g,B as y,w as x}from"./assets/index-CyIKZwcA.js";import{E as v}from"./mMiU1HvE.js";import{c as B,a as k}from"./BDCxTHDM.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="f70df42e-f458-45e6-992f-cc84a889c74a",e._sentryDebugIdIdentifier="sentry-dbid-f70df42e-f458-45e6-992f-cc84a889c74a")}catch{}})();const w="#346ba0",C="#4594c7",D="#4cbee3",I="#75e9ed",H="#5cd29c",R="#7b48e8",A="#ed6b82",E="rgba(52, 140, 244, 0)",_="rgba(52, 140, 243, 0.3)",j="rgba(237, 107, 130, 0)",z="rgba(237, 107, 130, 0.3)",L="#39BBF3",S="#E2EBFB",W=(e,r)=>{let t,a,o;return(d,n)=>{const s=n.right-n.left,l=n.bottom-n.top;if(!o||t!==s||a!==l){t=s,a=l;const i=r==="background",c=i?n.bottom:0,b=i?n.top:0,f=i?0:t;o=d.createLinearGradient(0,c,f,b);for(let p=0;p<e.length;p++){const m=p===e.length-1?1:p/e.length;o.addColorStop(m,e[p])}}return o}},h=(e,r)=>t=>{const{chart:{ctx:a,chartArea:o}}=t;if(o)return W(e,r)(a,o)},F=[w,C,D,I,H],G=[R,A],M=(e,r)=>{const t=r[r.length-1]>=r[0],a=t?F:G,o=t?[E,_]:[j,z];return{labels:e.length===1?Array(r.length).fill(e[0]):e,datasets:[{label:"",backgroundColor:h(o,"background"),borderColor:h(a,"stroke"),borderWidth:2,data:r,fill:!0,cubicInterpolationMode:"default",tension:.4,pointStyle:"circle",pointRadius:6,pointBackgroundColor:"transparent",pointBorderColor:"transparent",pointBorderWidth:4,pointHoverRadius:6,pointHoverBorderWidth:4,pointHoverBackgroundColor:L,pointHoverBorderColor:S}]}},N=(e,r,t,a,o,d)=>{const n={display:!1,drawOnChartArea:r,drawTicks:!1},s={display:!e,maxRotation:0,minRotation:0,sampleSize:1};return{animation:!1,maintainAspectRatio:!1,resizeDelay:300,responsive:!0,normalized:!0,interaction:{intersect:!1,axis:"x"},plugins:{legend:{display:!1},tooltip:{enabled:!d}},scales:{x:{display:!t,grid:n,ticks:{...B,...s}},y:{display:!t,grid:n,ticks:{...k,...s}}},onHover:(l,i)=>{var c,b,f;((c=i[0])==null?void 0:c.index)===o||!a||((b=i[0])==null?void 0:b.index)===0||a((f=i[0])==null?void 0:f.index)}}},O=u.memo(({className:e,labels:r,values:t,hideLabel:a=!1,hasGrid:o=!1,onHover:d,hoveredIndex:n,hideTooltip:s,hideAxisLines:l})=>{const{chartData:i,options:c}=u.useMemo(()=>({chartData:M(r,t),options:N(a,o,l,d,n,s)}),[o,a,r,t,d,n,s,l]);return g.jsx(y,{className:x("flex-1 w-full h-full relative",e),children:g.jsx(v,{data:i,options:c})})});export{O as C};