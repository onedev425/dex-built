import{cE as f,gw as He,gx as Je,gB as Ee,gy as ce,dM as Le}from"./assets/index-CyIKZwcA.js";import{b as W}from"./CNxQ-ina.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="60746810-4c2a-40da-9e23-0e752ced772d",e._sentryDebugIdIdentifier="sentry-dbid-60746810-4c2a-40da-9e23-0e752ced772d")}catch{}})();function Ge(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var de={},y={},P={},T={};Object.defineProperty(T,"__esModule",{value:!0}),T.fromAscii=T.toAscii=void 0;function Ze(e){const t=r=>r.split("").map(n=>{const o=n.charCodeAt(0);if(o<32||o>126)throw new Error("Cannot encode character that is out of printable ASCII range: "+o);return o});return Uint8Array.from(t(e))}T.toAscii=Ze;function qe(e){return(t=>t.map(r=>{if(r<32||r>126)throw new Error("Cannot decode character that is out of printable ASCII range: "+r);return String.fromCharCode(r)}))(Array.from(e)).join("")}T.fromAscii=qe;var B={},Ve=f&&f.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Xe=f&&f.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Ye=f&&f.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&Ve(t,e,r);return Xe(t,e),t};Object.defineProperty(B,"__esModule",{value:!0}),B.fromBase64=B.toBase64=void 0;const Oe=Ye(He);function Qe(e){return Oe.fromByteArray(e)}B.toBase64=Qe;function et(e){if(!e.match(/^[a-zA-Z0-9+/]*={0,2}$/))throw new Error("Invalid base64 string format");return Oe.toByteArray(e)}B.fromBase64=et;var E={},tt=f&&f.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),rt=f&&f.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),nt=f&&f.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&tt(t,e,r);return rt(t,e),t};Object.defineProperty(E,"__esModule",{value:!0}),E.normalizeBech32=E.fromBech32=E.toBech32=void 0;const Q=nt(Je);function Ae(e,t,r){return Q.encode(e,Q.toWords(t),r)}E.toBech32=Ae;function je(e,t=1/0){const r=Q.decode(e,t);return{prefix:r.prefix,data:new Uint8Array(Q.fromWords(r.words))}}E.fromBech32=je;function ot(e){const{prefix:t,data:r}=je(e);return Ae(t,r)}E.normalizeBech32=ot;var D={};Object.defineProperty(D,"__esModule",{value:!0}),D.fromHex=D.toHex=void 0;function it(e){let t="";for(const r of e)t+=("0"+r.toString(16)).slice(-2);return t}D.toHex=it;function at(e){if(e.length%2!==0)throw new Error("hex string length must be a multiple of 2");const t=new Uint8Array(e.length/2);for(let r=0;r<t.length;r++){const n=2*r,o=e.slice(n,n+2);if(!o.match(/[0-9a-f]{2}/i))throw new Error("hex string contains invalid characters");t[r]=parseInt(o,16)}return t}D.fromHex=at;var N={};Object.defineProperty(N,"__esModule",{value:!0}),N.toRfc3339=N.fromRfc3339=void 0;const st=/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(\.\d{1,9})?((?:[+-]\d{2}:\d{2})|Z)$/;function I(e,t=2){return e.toString().padStart(t,"0")}function ut(e){const t=st.exec(e);if(!t)throw new Error("Date string is not in RFC3339 format");const r=+t[1],n=+t[2],o=+t[3],i=+t[4],s=+t[5],a=+t[6],u=t[7]?Math.floor(+t[7]*1e3):0;let d,S,h;t[8]==="Z"?(d=1,S=0,h=0):(d=t[8].substring(0,1)==="-"?-1:1,S=+t[8].substring(1,3),h=+t[8].substring(4,6));const Y=d*(S*60+h)*60,z=new Date;return z.setUTCFullYear(r,n-1,o),z.setUTCHours(i,s,a,u),new Date(z.getTime()-Y*1e3)}N.fromRfc3339=ut;function ct(e){const t=e.getUTCFullYear(),r=I(e.getUTCMonth()+1),n=I(e.getUTCDate()),o=I(e.getUTCHours()),i=I(e.getUTCMinutes()),s=I(e.getUTCSeconds()),a=I(e.getUTCMilliseconds(),3);return`${t}-${r}-${n}T${o}:${i}:${s}.${a}Z`}N.toRfc3339=ct;var M={};Object.defineProperty(M,"__esModule",{value:!0}),M.fromUtf8=M.toUtf8=void 0;function dt(e){return new TextEncoder().encode(e)}M.toUtf8=dt;function ft(e,t=!1){const r=!t;return new TextDecoder("utf-8",{fatal:r}).decode(e)}M.fromUtf8=ft,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.toUtf8=e.fromUtf8=e.toRfc3339=e.fromRfc3339=e.toHex=e.fromHex=e.toBech32=e.normalizeBech32=e.fromBech32=e.toBase64=e.fromBase64=e.toAscii=e.fromAscii=void 0;var t=T;Object.defineProperty(e,"fromAscii",{enumerable:!0,get:function(){return t.fromAscii}}),Object.defineProperty(e,"toAscii",{enumerable:!0,get:function(){return t.toAscii}});var r=B;Object.defineProperty(e,"fromBase64",{enumerable:!0,get:function(){return r.fromBase64}}),Object.defineProperty(e,"toBase64",{enumerable:!0,get:function(){return r.toBase64}});var n=E;Object.defineProperty(e,"fromBech32",{enumerable:!0,get:function(){return n.fromBech32}}),Object.defineProperty(e,"normalizeBech32",{enumerable:!0,get:function(){return n.normalizeBech32}}),Object.defineProperty(e,"toBech32",{enumerable:!0,get:function(){return n.toBech32}});var o=D;Object.defineProperty(e,"fromHex",{enumerable:!0,get:function(){return o.fromHex}}),Object.defineProperty(e,"toHex",{enumerable:!0,get:function(){return o.toHex}});var i=N;Object.defineProperty(e,"fromRfc3339",{enumerable:!0,get:function(){return i.fromRfc3339}}),Object.defineProperty(e,"toRfc3339",{enumerable:!0,get:function(){return i.toRfc3339}});var s=M;Object.defineProperty(e,"fromUtf8",{enumerable:!0,get:function(){return s.fromUtf8}}),Object.defineProperty(e,"toUtf8",{enumerable:!0,get:function(){return s.toUtf8}})}(P);var l={},F={},ee={},lt=f&&f.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ee,"__esModule",{value:!0}),ee.Decimal=void 0;const g=lt(Ee()),xe=100;class c{static fromUserInput(t,r){c.verifyFractionalDigits(r);const n=t.match(/[^0-9.]/);if(n)throw new Error(`Invalid character at position ${n.index+1}`);let o,i;if(t==="")o="0",i="";else if(t.search(/\./)===-1)o=t,i="";else{const a=t.split(".");switch(a.length){case 0:case 1:throw new Error("Fewer than two elements in split result. This must not happen here.");case 2:if(!a[1])throw new Error("Fractional part missing");o=a[0],i=a[1].replace(/0+$/,"");break;default:throw new Error("More than one separator found")}}if(i.length>r)throw new Error("Got more fractional digits than supported");const s=`${o}${i.padEnd(r,"0")}`;return new c(s,r)}static fromAtomics(t,r){return c.verifyFractionalDigits(r),new c(t,r)}static zero(t){return c.verifyFractionalDigits(t),new c("0",t)}static one(t){return c.verifyFractionalDigits(t),new c("1"+"0".repeat(t),t)}static verifyFractionalDigits(t){if(!Number.isInteger(t))throw new Error("Fractional digits is not an integer");if(t<0)throw new Error("Fractional digits must not be negative");if(t>xe)throw new Error(`Fractional digits must not exceed ${xe}`)}static compare(t,r){if(t.fractionalDigits!==r.fractionalDigits)throw new Error("Fractional digits do not match");return t.data.atomics.cmp(new g.default(r.atomics))}get atomics(){return this.data.atomics.toString()}get fractionalDigits(){return this.data.fractionalDigits}constructor(t,r){if(!t.match(/^[0-9]+$/))throw new Error("Invalid string format. Only non-negative integers in decimal representation supported.");this.data={atomics:new g.default(t),fractionalDigits:r}}clone(){return new c(this.atomics,this.fractionalDigits)}floor(){const t=new g.default(10).pow(new g.default(this.data.fractionalDigits)),r=this.data.atomics.div(t);return this.data.atomics.mod(t).isZero()?this.clone():c.fromAtomics(r.mul(t).toString(),this.fractionalDigits)}ceil(){const t=new g.default(10).pow(new g.default(this.data.fractionalDigits)),r=this.data.atomics.div(t);return this.data.atomics.mod(t).isZero()?this.clone():c.fromAtomics(r.addn(1).mul(t).toString(),this.fractionalDigits)}toString(){const t=new g.default(10).pow(new g.default(this.data.fractionalDigits)),r=this.data.atomics.div(t),n=this.data.atomics.mod(t);if(n.isZero())return r.toString();{const o=n.toString().padStart(this.data.fractionalDigits,"0").replace(/0+$/,"");return`${r.toString()}.${o}`}}toFloatApproximation(){const t=Number(this.toString());if(Number.isNaN(t))throw new Error("Conversion to number failed");return t}plus(t){if(this.fractionalDigits!==t.fractionalDigits)throw new Error("Fractional digits do not match");const r=this.data.atomics.add(new g.default(t.atomics));return new c(r.toString(),this.fractionalDigits)}minus(t){if(this.fractionalDigits!==t.fractionalDigits)throw new Error("Fractional digits do not match");const r=this.data.atomics.sub(new g.default(t.atomics));if(r.ltn(0))throw new Error("Difference must not be negative");return new c(r.toString(),this.fractionalDigits)}multiply(t){const r=this.data.atomics.mul(new g.default(t.toString()));return new c(r.toString(),this.fractionalDigits)}equals(t){return c.compare(this,t)===0}isLessThan(t){return c.compare(this,t)<0}isLessThanOrEqual(t){return c.compare(this,t)<=0}isGreaterThan(t){return c.compare(this,t)>0}isGreaterThanOrEqual(t){return c.compare(this,t)>=0}}ee.Decimal=c;var w={},pt=f&&f.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(w,"__esModule",{value:!0}),w.Uint64=w.Uint53=w.Int53=w.Uint32=void 0;const te=pt(Ee()),yt=new te.default("18446744073709551615",10,"be");class V{static fromBigEndianBytes(t){return V.fromBytes(t)}static fromBytes(t,r="be"){if(t.length!==4)throw new Error("Invalid input length. Expected 4 bytes.");for(let o=0;o<t.length;++o)if(!Number.isInteger(t[o])||t[o]>255||t[o]<0)throw new Error("Invalid value in byte. Found: "+t[o]);const n=r==="be"?t:Array.from(t).reverse();return new V(n[0]*2**24+n[1]*2**16+n[2]*2**8+n[3])}static fromString(t){if(!t.match(/^[0-9]+$/))throw new Error("Invalid string format");return new V(Number.parseInt(t,10))}constructor(t){if(Number.isNaN(t))throw new Error("Input is not a number");if(!Number.isInteger(t))throw new Error("Input is not an integer");if(t<0||t>4294967295)throw new Error("Input not in uint32 range: "+t.toString());this.data=t}toBytesBigEndian(){return new Uint8Array([Math.floor(this.data/2**24)&255,Math.floor(this.data/2**16)&255,Math.floor(this.data/2**8)&255,Math.floor(this.data/2**0)&255])}toBytesLittleEndian(){return new Uint8Array([Math.floor(this.data/2**0)&255,Math.floor(this.data/2**8)&255,Math.floor(this.data/2**16)&255,Math.floor(this.data/2**24)&255])}toNumber(){return this.data}toBigInt(){return BigInt(this.toNumber())}toString(){return this.data.toString()}}w.Uint32=V;class X{static fromString(t){if(!t.match(/^-?[0-9]+$/))throw new Error("Invalid string format");return new X(Number.parseInt(t,10))}constructor(t){if(Number.isNaN(t))throw new Error("Input is not a number");if(!Number.isInteger(t))throw new Error("Input is not an integer");if(t<Number.MIN_SAFE_INTEGER||t>Number.MAX_SAFE_INTEGER)throw new Error("Input not in int53 range: "+t.toString());this.data=t}toNumber(){return this.data}toBigInt(){return BigInt(this.toNumber())}toString(){return this.data.toString()}}w.Int53=X;class ve{static fromString(t){const r=X.fromString(t);return new ve(r.toNumber())}constructor(t){const r=new X(t);if(r.toNumber()<0)throw new Error("Input is negative");this.data=r}toNumber(){return this.data.toNumber()}toBigInt(){return BigInt(this.toNumber())}toString(){return this.data.toString()}}w.Uint53=ve;class ${static fromBytesBigEndian(t){return $.fromBytes(t)}static fromBytes(t,r="be"){if(t.length!==8)throw new Error("Invalid input length. Expected 8 bytes.");for(let o=0;o<t.length;++o)if(!Number.isInteger(t[o])||t[o]>255||t[o]<0)throw new Error("Invalid value in byte. Found: "+t[o]);const n=r==="be"?Array.from(t):Array.from(t).reverse();return new $(new te.default(n))}static fromString(t){if(!t.match(/^[0-9]+$/))throw new Error("Invalid string format");return new $(new te.default(t,10,"be"))}static fromNumber(t){if(Number.isNaN(t))throw new Error("Input is not a number");if(!Number.isInteger(t))throw new Error("Input is not an integer");let r;try{r=new te.default(t)}catch{throw new Error("Input is not a safe integer")}return new $(r)}constructor(t){if(t.isNeg())throw new Error("Input is negative");if(t.gt(yt))throw new Error("Input exceeds uint64 range");this.data=t}toBytesBigEndian(){return Uint8Array.from(this.data.toArray("be",8))}toBytesLittleEndian(){return Uint8Array.from(this.data.toArray("le",8))}toString(){return this.data.toString(10)}toBigInt(){return BigInt(this.toString())}toNumber(){return this.data.toNumber()}}w.Uint64=$,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Uint64=e.Uint53=e.Uint32=e.Int53=e.Decimal=void 0;var t=ee;Object.defineProperty(e,"Decimal",{enumerable:!0,get:function(){return t.Decimal}});var r=w;Object.defineProperty(e,"Int53",{enumerable:!0,get:function(){return r.Int53}}),Object.defineProperty(e,"Uint32",{enumerable:!0,get:function(){return r.Uint32}}),Object.defineProperty(e,"Uint53",{enumerable:!0,get:function(){return r.Uint53}}),Object.defineProperty(e,"Uint64",{enumerable:!0,get:function(){return r.Uint64}})}(F);var fe={},U={};Object.defineProperty(U,"__esModule",{value:!0}),U.arrayContentStartsWith=U.arrayContentEquals=void 0;function ht(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}U.arrayContentEquals=ht;function mt(e,t){if(e.length<t.length)return!1;for(let r=0;r<t.length;++r)if(e[r]!==t[r])return!1;return!0}U.arrayContentStartsWith=mt;var O={};Object.defineProperty(O,"__esModule",{value:!0}),O.assertDefinedAndNotNull=O.assertDefined=O.assert=void 0;function bt(e,t){if(!e)throw new Error(t||"condition is not truthy")}O.assert=bt;function gt(e,t){if(e===void 0)throw new Error(t??"value is undefined")}O.assertDefined=gt;function wt(e,t){if(e==null)throw new Error(t??"value is undefined or null")}O.assertDefinedAndNotNull=wt;var re={};Object.defineProperty(re,"__esModule",{value:!0}),re.sleep=void 0;async function kt(e){return new Promise(t=>setTimeout(t,e))}re.sleep=kt;var A={};Object.defineProperty(A,"__esModule",{value:!0}),A.isDefined=A.isUint8Array=A.isNonNullObject=void 0;function Te(e){return typeof e=="object"&&e!==null}A.isNonNullObject=Te;function Pt(e){return!(!Te(e)||Object.prototype.toString.call(e)!=="[object Uint8Array]"||typeof ce<"u"&&typeof ce.isBuffer<"u"&&ce.isBuffer(e))}A.isUint8Array=Pt;function vt(e){return e!==void 0}A.isDefined=vt,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isUint8Array=e.isNonNullObject=e.isDefined=e.sleep=e.assertDefinedAndNotNull=e.assertDefined=e.assert=e.arrayContentStartsWith=e.arrayContentEquals=void 0;var t=U;Object.defineProperty(e,"arrayContentEquals",{enumerable:!0,get:function(){return t.arrayContentEquals}}),Object.defineProperty(e,"arrayContentStartsWith",{enumerable:!0,get:function(){return t.arrayContentStartsWith}});var r=O;Object.defineProperty(e,"assert",{enumerable:!0,get:function(){return r.assert}}),Object.defineProperty(e,"assertDefined",{enumerable:!0,get:function(){return r.assertDefined}}),Object.defineProperty(e,"assertDefinedAndNotNull",{enumerable:!0,get:function(){return r.assertDefinedAndNotNull}});var n=re;Object.defineProperty(e,"sleep",{enumerable:!0,get:function(){return n.sleep}});var o=A;Object.defineProperty(e,"isDefined",{enumerable:!0,get:function(){return o.isDefined}}),Object.defineProperty(e,"isNonNullObject",{enumerable:!0,get:function(){return o.isNonNullObject}}),Object.defineProperty(e,"isUint8Array",{enumerable:!0,get:function(){return o.isUint8Array}})}(fe);var H={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isMultisigThresholdPubkey=e.isSinglePubkey=e.pubkeyType=e.isSecp256k1Pubkey=e.isEd25519Pubkey=void 0;function t(i){return i.type==="tendermint/PubKeyEd25519"}e.isEd25519Pubkey=t;function r(i){return i.type==="tendermint/PubKeySecp256k1"}e.isSecp256k1Pubkey=r,e.pubkeyType={secp256k1:"tendermint/PubKeySecp256k1",ed25519:"tendermint/PubKeyEd25519",sr25519:"tendermint/PubKeySr25519",multisigThreshold:"tendermint/PubKeyMultisigThreshold"};function n(i){return[e.pubkeyType.ed25519,e.pubkeyType.secp256k1,e.pubkeyType.sr25519].includes(i.type)}e.isSinglePubkey=n;function o(i){return i.type==="tendermint/PubKeyMultisigThreshold"}e.isMultisigThresholdPubkey=o})(H),Object.defineProperty(l,"__esModule",{value:!0}),l.encodeBech32Pubkey=l.encodeAminoPubkey=l.decodeBech32Pubkey=l.decodeAminoPubkey=l.encodeEd25519Pubkey=l.encodeSecp256k1Pubkey=void 0;const p=P,St=F,J=fe,v=H;function Et(e){if(e.length!==33||e[0]!==2&&e[0]!==3)throw new Error("Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03");return{type:v.pubkeyType.secp256k1,value:(0,p.toBase64)(e)}}l.encodeSecp256k1Pubkey=Et;function Ot(e){if(e.length!==32)throw new Error("Ed25519 public key must be 32 bytes long");return{type:v.pubkeyType.ed25519,value:(0,p.toBase64)(e)}}l.encodeEd25519Pubkey=Ot;const le=(0,p.fromHex)("eb5ae98721"),pe=(0,p.fromHex)("1624de6420"),Be=(0,p.fromHex)("0dfb100520"),ne=(0,p.fromHex)("22c1f7e2");function ye(e){if((0,J.arrayContentStartsWith)(e,le)){const t=e.slice(le.length);if(t.length!==33)throw new Error("Invalid rest data length. Expected 33 bytes (compressed secp256k1 pubkey).");return{type:v.pubkeyType.secp256k1,value:(0,p.toBase64)(t)}}else if((0,J.arrayContentStartsWith)(e,pe)){const t=e.slice(pe.length);if(t.length!==32)throw new Error("Invalid rest data length. Expected 32 bytes (Ed25519 pubkey).");return{type:v.pubkeyType.ed25519,value:(0,p.toBase64)(t)}}else if((0,J.arrayContentStartsWith)(e,Be)){const t=e.slice(Be.length);if(t.length!==32)throw new Error("Invalid rest data length. Expected 32 bytes (Sr25519 pubkey).");return{type:v.pubkeyType.sr25519,value:(0,p.toBase64)(t)}}else{if((0,J.arrayContentStartsWith)(e,ne))return jt(e);throw new Error("Unsupported public key type. Amino data starts with: "+(0,p.toHex)(e.slice(0,5)))}}l.decodeAminoPubkey=ye;function At(e){const{data:t}=(0,p.fromBech32)(e);return ye(t)}l.decodeBech32Pubkey=At;function De(e){if(e.length<1)throw new Error("Can't decode varint. EOF");if(e[0]>127)throw new Error("Decoding numbers > 127 is not supported here. Please tell those lazy CosmJS maintainers to port the binary.Varint implementation from the Go standard library and write some tests.");return[e[0],1]}function jt(e){const t=Array.from(e),r=t.splice(0,ne.length);if(!(0,J.arrayContentStartsWith)(r,ne))throw new Error("Invalid multisig prefix.");if(t.shift()!=8)throw new Error("Invalid multisig data. Expecting 0x08 prefix before threshold.");const[n,o]=De(t);t.splice(0,o);const i=[];for(;t.length>0;){if(t.shift()!=18)throw new Error("Invalid multisig data. Expecting 0x12 prefix before participant pubkey length.");const[s,a]=De(t);if(t.splice(0,a),t.length<s)throw new Error("Invalid multisig data length.");const u=t.splice(0,s),d=ye(Uint8Array.from(u));i.push(d)}return{type:v.pubkeyType.multisigThreshold,value:{threshold:n.toString(),pubkeys:i}}}function Ne(e){const t=St.Uint53.fromString(e.toString()).toNumber();if(t>127)throw new Error("Encoding numbers > 127 is not supported here. Please tell those lazy CosmJS maintainers to port the binary.PutUvarint implementation from the Go standard library and write some tests.");return[t]}function he(e){if((0,v.isMultisigThresholdPubkey)(e)){const t=Array.from(ne);t.push(8),t.push(...Ne(e.value.threshold));for(const r of e.value.pubkeys.map(n=>he(n)))t.push(18),t.push(...Ne(r.length)),t.push(...r);return new Uint8Array(t)}else{if((0,v.isEd25519Pubkey)(e))return new Uint8Array([...pe,...(0,p.fromBase64)(e.value)]);if((0,v.isSecp256k1Pubkey)(e))return new Uint8Array([...le,...(0,p.fromBase64)(e.value)]);throw new Error("Unsupported pubkey type")}}l.encodeAminoPubkey=he;function xt(e,t){return(0,p.toBech32)(t,he(e))}l.encodeBech32Pubkey=xt,Object.defineProperty(y,"__esModule",{value:!0}),y.pubkeyToAddress=y.pubkeyToRawAddress=y.rawSecp256k1PubkeyToRawAddress=y.rawEd25519PubkeyToRawAddress=void 0;const oe=W,me=P,Tt=l,be=H;function Ie(e){if(e.length!==32)throw new Error(`Invalid Ed25519 pubkey length: ${e.length}`);return(0,oe.sha256)(e).slice(0,20)}y.rawEd25519PubkeyToRawAddress=Ie;function Me(e){if(e.length!==33)throw new Error(`Invalid Secp256k1 pubkey length (compressed): ${e.length}`);return(0,oe.ripemd160)((0,oe.sha256)(e))}y.rawSecp256k1PubkeyToRawAddress=Me;function Ue(e){if((0,be.isSecp256k1Pubkey)(e)){const t=(0,me.fromBase64)(e.value);return Me(t)}else if((0,be.isEd25519Pubkey)(e)){const t=(0,me.fromBase64)(e.value);return Ie(t)}else if((0,be.isMultisigThresholdPubkey)(e)){const t=(0,Tt.encodeAminoPubkey)(e);return(0,oe.sha256)(t).slice(0,20)}else throw new Error("Unsupported public key type")}y.pubkeyToRawAddress=Ue;function Bt(e,t){return(0,me.toBech32)(t,Ue(e))}y.pubkeyToAddress=Bt;var k={};Object.defineProperty(k,"__esModule",{value:!0}),k.addCoins=k.parseCoins=k.coins=k.coin=void 0;const ge=F;function _e(e,t){let r;if(typeof e=="number")try{r=new ge.Uint53(e).toString()}catch{throw new Error("Given amount is not a safe integer. Consider using a string instead to overcome the limitations of JS numbers.")}else{if(!e.match(/^[0-9]+$/))throw new Error("Invalid unsigned integer string format");r=e.replace(/^0*/,"")||"0"}return{amount:r,denom:t}}k.coin=_e;function Dt(e,t){return[_e(e,t)]}k.coins=Dt;function Nt(e){return e.replace(/\s/g,"").split(",").filter(Boolean).map(t=>{const r=t.match(/^([0-9]+)([a-zA-Z][a-zA-Z0-9/]{2,127})$/);if(!r)throw new Error("Got an invalid coin string");return{amount:r[1].replace(/^0+/,"")||"0",denom:r[2]}})}k.parseCoins=Nt;function It(e,t){if(e.denom!==t.denom)throw new Error("Trying to add two coins with different denoms");return{amount:ge.Decimal.fromAtomics(e.amount,0).plus(ge.Decimal.fromAtomics(t.amount,0)).atomics,denom:e.denom}}k.addCoins=It;var _={};Object.defineProperty(_,"__esModule",{value:!0}),_.createMultisigThresholdPubkey=_.compareArrays=void 0;const Ce=P,Mt=F,Re=y;function Ke(e,t){const r=(0,Ce.toHex)(e),n=(0,Ce.toHex)(t);return r===n?0:r<n?-1:1}_.compareArrays=Ke;function Ut(e,t,r=!1){const n=new Mt.Uint53(t);if(n.toNumber()>e.length)throw new Error(`Threshold k = ${n.toNumber()} exceeds number of keys n = ${e.length}`);const o=r?e:Array.from(e).sort((i,s)=>{const a=(0,Re.pubkeyToRawAddress)(i),u=(0,Re.pubkeyToRawAddress)(s);return Ke(a,u)});return{type:"tendermint/PubKeyMultisigThreshold",value:{threshold:n.toString(),pubkeys:o}}}_.createMultisigThresholdPubkey=Ut;var ie={};Object.defineProperty(ie,"__esModule",{value:!0}),ie.omitDefault=void 0;function _t(e){switch(typeof e){case"string":return e===""?void 0:e;case"number":return e===0?void 0:e;case"bigint":return e===BigInt(0)?void 0:e;case"boolean":return e||void 0;default:throw new Error(`Got unsupported type '${typeof e}'`)}}ie.omitDefault=_t;var L={};Object.defineProperty(L,"__esModule",{value:!0}),L.makeCosmoshubPath=void 0;const G=W;function Ct(e){return[G.Slip10RawIndex.hardened(44),G.Slip10RawIndex.hardened(118),G.Slip10RawIndex.hardened(0),G.Slip10RawIndex.normal(0),G.Slip10RawIndex.normal(e)]}L.makeCosmoshubPath=Ct;var C={},j={};Object.defineProperty(j,"__esModule",{value:!0}),j.decodeSignature=j.encodeSecp256k1Signature=void 0;const we=P,Rt=l,Kt=H;function $t(e,t){if(t.length!==64)throw new Error("Signature must be 64 bytes long. Cosmos SDK uses a 2x32 byte fixed length encoding for the secp256k1 signature integers r and s.");return{pub_key:(0,Rt.encodeSecp256k1Pubkey)(e),signature:(0,we.toBase64)(t)}}j.encodeSecp256k1Signature=$t;function zt(e){switch(e.pub_key.type){case Kt.pubkeyType.secp256k1:return{pubkey:(0,we.fromBase64)(e.pub_key.value),signature:(0,we.fromBase64)(e.signature)};default:throw new Error("Unsupported pubkey type")}}j.decodeSignature=zt;var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.serializeSignDoc=m.escapeCharacters=m.makeSignDoc=m.sortedJsonStringify=void 0;const Wt=P,$e=F;function ke(e){if(typeof e!="object"||e===null)return e;if(Array.isArray(e))return e.map(ke);const t=Object.keys(e).sort(),r={};return t.forEach(n=>{r[n]=ke(e[n])}),r}function ze(e){return JSON.stringify(ke(e))}m.sortedJsonStringify=ze;function Ft(e,t,r,n,o,i,s){return{chain_id:r,account_number:$e.Uint53.fromString(o.toString()).toString(),sequence:$e.Uint53.fromString(i.toString()).toString(),fee:t,msgs:e,memo:n||"",...s&&{timeout_height:s.toString()}}}m.makeSignDoc=Ft;function We(e){const t=/&/g,r=/</g,n=/>/g;return e.replace(t,"\\u0026").replace(r,"\\u003c").replace(n,"\\u003e")}m.escapeCharacters=We;function Ht(e){const t=We(ze(e));return(0,Wt.toUtf8)(t)}m.serializeSignDoc=Ht;var Pe={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.decrypt=e.encrypt=e.supportedAlgorithms=e.executeKdf=e.cosmjsSalt=void 0;const t=W,r=P;e.cosmjsSalt=(0,r.toAscii)("The CosmJS salt.");async function n(s,a){switch(a.algorithm){case"argon2id":{const u=a.params;if(!(0,t.isArgon2idOptions)(u))throw new Error("Invalid format of argon2id params");return t.Argon2id.execute(s,e.cosmjsSalt,u)}default:throw new Error("Unsupported KDF algorithm")}}e.executeKdf=n,e.supportedAlgorithms={xchacha20poly1305Ietf:"xchacha20poly1305-ietf"};async function o(s,a,u){switch(u.algorithm){case e.supportedAlgorithms.xchacha20poly1305Ietf:{const d=t.Random.getBytes(t.xchacha20NonceLength);return new Uint8Array([...d,...await t.Xchacha20poly1305Ietf.encrypt(s,a,d)])}default:throw new Error(`Unsupported encryption algorithm: '${u.algorithm}'`)}}e.encrypt=o;async function i(s,a,u){switch(u.algorithm){case e.supportedAlgorithms.xchacha20poly1305Ietf:{const d=s.slice(0,t.xchacha20NonceLength);return t.Xchacha20poly1305Ietf.decrypt(s.slice(t.xchacha20NonceLength),a,d)}default:throw new Error(`Unsupported encryption algorithm: '${u.algorithm}'`)}}e.decrypt=i})(Pe),Object.defineProperty(C,"__esModule",{value:!0}),C.Secp256k1HdWallet=C.extractKdfConfiguration=void 0;const b=W,Z=P,R=fe,Jt=y,Lt=L,Gt=j,Zt=m,q=Pe,ae="secp256k1wallet-v1",qt={algorithm:"argon2id",params:{outputLength:32,opsLimit:24,memLimitKib:12*1024}};function Vt(e){return!(!(0,R.isNonNullObject)(e)||typeof e.hdPath!="string"||typeof e.prefix!="string")}function Xt(e){return e.kdf}function Yt(e){const t=JSON.parse(e);if(!(0,R.isNonNullObject)(t))throw new Error("Root document is not an object.");switch(t.type){case ae:return Xt(t);default:throw new Error("Unsupported serialization type")}}C.extractKdfConfiguration=Yt;const Fe={bip39Password:"",hdPaths:[(0,Lt.makeCosmoshubPath)(0)],prefix:"cosmos"};class x{static async fromMnemonic(t,r={}){const n=new b.EnglishMnemonic(t),o=await b.Bip39.mnemonicToSeed(n,r.bip39Password);return new x(n,{...r,seed:o})}static async generate(t=12,r={}){const n=4*Math.floor(11*t/33),o=b.Random.getBytes(n),i=b.Bip39.encode(o);return x.fromMnemonic(i.toString(),r)}static async deserialize(t,r){const n=JSON.parse(t);if(!(0,R.isNonNullObject)(n))throw new Error("Root document is not an object.");switch(n.type){case ae:return x.deserializeTypeV1(t,r);default:throw new Error("Unsupported serialization type")}}static async deserializeWithEncryptionKey(t,r){const n=JSON.parse(t);if(!(0,R.isNonNullObject)(n))throw new Error("Root document is not an object.");const o=n;switch(o.type){case ae:{const i=await(0,q.decrypt)((0,Z.fromBase64)(o.data),r,o.encryption),s=JSON.parse((0,Z.fromUtf8)(i)),{mnemonic:a,accounts:u}=s;if((0,R.assert)(typeof a=="string"),!Array.isArray(u))throw new Error("Property 'accounts' is not an array");if(!u.every(h=>Vt(h)))throw new Error("Account is not in the correct format.");const d=u[0].prefix;if(!u.every(({prefix:h})=>h===d))throw new Error("Accounts do not all have the same prefix");const S=u.map(({hdPath:h})=>(0,b.stringToPath)(h));return x.fromMnemonic(a,{hdPaths:S,prefix:d})}default:throw new Error("Unsupported serialization type")}}static async deserializeTypeV1(t,r){const n=JSON.parse(t);if(!(0,R.isNonNullObject)(n))throw new Error("Root document is not an object.");const o=await(0,q.executeKdf)(r,n.kdf);return x.deserializeWithEncryptionKey(t,o)}constructor(t,r){const n=r.hdPaths??Fe.hdPaths,o=r.prefix??Fe.prefix;this.secret=t,this.seed=r.seed,this.accounts=n.map(i=>({hdPath:i,prefix:o}))}get mnemonic(){return this.secret.toString()}async getAccounts(){return(await this.getAccountsWithPrivkeys()).map(({algo:t,pubkey:r,address:n})=>({algo:t,pubkey:r,address:n}))}async signAmino(t,r){const n=(await this.getAccountsWithPrivkeys()).find(({address:d})=>d===t);if(n===void 0)throw new Error(`Address ${t} not found in wallet`);const{privkey:o,pubkey:i}=n,s=(0,b.sha256)((0,Zt.serializeSignDoc)(r)),a=await b.Secp256k1.createSignature(s,o),u=new Uint8Array([...a.r(32),...a.s(32)]);return{signed:r,signature:(0,Gt.encodeSecp256k1Signature)(i,u)}}async serialize(t){const r=qt,n=await(0,q.executeKdf)(t,r);return this.serializeWithEncryptionKey(n,r)}async serializeWithEncryptionKey(t,r){const n={mnemonic:this.mnemonic,accounts:this.accounts.map(({hdPath:u,prefix:d})=>({hdPath:(0,b.pathToString)(u),prefix:d}))},o=(0,Z.toUtf8)(JSON.stringify(n)),i={algorithm:q.supportedAlgorithms.xchacha20poly1305Ietf},s=await(0,q.encrypt)(o,t,i),a={type:ae,kdf:r,encryption:i,data:(0,Z.toBase64)(s)};return JSON.stringify(a)}async getKeyPair(t){const{privkey:r}=b.Slip10.derivePath(b.Slip10Curve.Secp256k1,this.seed,t),{pubkey:n}=await b.Secp256k1.makeKeypair(r);return{privkey:r,pubkey:b.Secp256k1.compressPubkey(n)}}async getAccountsWithPrivkeys(){return Promise.all(this.accounts.map(async({hdPath:t,prefix:r})=>{const{privkey:n,pubkey:o}=await this.getKeyPair(t),i=(0,Z.toBech32)(r,(0,Jt.rawSecp256k1PubkeyToRawAddress)(o));return{algo:"secp256k1",privkey:n,pubkey:o,address:i}}))}}C.Secp256k1HdWallet=x;var se={};Object.defineProperty(se,"__esModule",{value:!0}),se.Secp256k1Wallet=void 0;const ue=W,Qt=P,er=y,tr=j,rr=m;class Se{static async fromKey(t,r="cosmos"){const n=(await ue.Secp256k1.makeKeypair(t)).pubkey;return new Se(t,ue.Secp256k1.compressPubkey(n),r)}constructor(t,r,n){this.privkey=t,this.pubkey=r,this.prefix=n}get address(){return(0,Qt.toBech32)(this.prefix,(0,er.rawSecp256k1PubkeyToRawAddress)(this.pubkey))}async getAccounts(){return[{algo:"secp256k1",address:this.address,pubkey:this.pubkey}]}async signAmino(t,r){if(t!==this.address)throw new Error(`Address ${t} not found in wallet`);const n=new ue.Sha256((0,rr.serializeSignDoc)(r)).digest(),o=await ue.Secp256k1.createSignature(n,this.privkey),i=new Uint8Array([...o.r(32),...o.s(32)]);return{signed:r,signature:(0,tr.encodeSecp256k1Signature)(this.pubkey,i)}}}se.Secp256k1Wallet=Se;var K={};Object.defineProperty(K,"__esModule",{value:!0}),K.makeStdTx=K.isStdTx=void 0;function nr(e){const{memo:t,msg:r,fee:n,signatures:o}=e;return typeof t=="string"&&Array.isArray(r)&&typeof n=="object"&&Array.isArray(o)}K.isStdTx=nr;function or(e,t){return{msg:e.msgs,fee:e.fee,memo:e.memo,signatures:Array.isArray(t)?t:[t]}}K.makeStdTx=or,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.executeKdf=e.makeStdTx=e.isStdTx=e.serializeSignDoc=e.makeSignDoc=e.encodeSecp256k1Signature=e.decodeSignature=e.Secp256k1Wallet=e.Secp256k1HdWallet=e.extractKdfConfiguration=e.pubkeyType=e.isSinglePubkey=e.isSecp256k1Pubkey=e.isMultisigThresholdPubkey=e.isEd25519Pubkey=e.makeCosmoshubPath=e.omitDefault=e.createMultisigThresholdPubkey=e.encodeSecp256k1Pubkey=e.encodeEd25519Pubkey=e.encodeBech32Pubkey=e.encodeAminoPubkey=e.decodeBech32Pubkey=e.decodeAminoPubkey=e.parseCoins=e.coins=e.coin=e.addCoins=e.rawSecp256k1PubkeyToRawAddress=e.rawEd25519PubkeyToRawAddress=e.pubkeyToRawAddress=e.pubkeyToAddress=void 0;var t=y;Object.defineProperty(e,"pubkeyToAddress",{enumerable:!0,get:function(){return t.pubkeyToAddress}}),Object.defineProperty(e,"pubkeyToRawAddress",{enumerable:!0,get:function(){return t.pubkeyToRawAddress}}),Object.defineProperty(e,"rawEd25519PubkeyToRawAddress",{enumerable:!0,get:function(){return t.rawEd25519PubkeyToRawAddress}}),Object.defineProperty(e,"rawSecp256k1PubkeyToRawAddress",{enumerable:!0,get:function(){return t.rawSecp256k1PubkeyToRawAddress}});var r=k;Object.defineProperty(e,"addCoins",{enumerable:!0,get:function(){return r.addCoins}}),Object.defineProperty(e,"coin",{enumerable:!0,get:function(){return r.coin}}),Object.defineProperty(e,"coins",{enumerable:!0,get:function(){return r.coins}}),Object.defineProperty(e,"parseCoins",{enumerable:!0,get:function(){return r.parseCoins}});var n=l;Object.defineProperty(e,"decodeAminoPubkey",{enumerable:!0,get:function(){return n.decodeAminoPubkey}}),Object.defineProperty(e,"decodeBech32Pubkey",{enumerable:!0,get:function(){return n.decodeBech32Pubkey}}),Object.defineProperty(e,"encodeAminoPubkey",{enumerable:!0,get:function(){return n.encodeAminoPubkey}}),Object.defineProperty(e,"encodeBech32Pubkey",{enumerable:!0,get:function(){return n.encodeBech32Pubkey}}),Object.defineProperty(e,"encodeEd25519Pubkey",{enumerable:!0,get:function(){return n.encodeEd25519Pubkey}}),Object.defineProperty(e,"encodeSecp256k1Pubkey",{enumerable:!0,get:function(){return n.encodeSecp256k1Pubkey}});var o=_;Object.defineProperty(e,"createMultisigThresholdPubkey",{enumerable:!0,get:function(){return o.createMultisigThresholdPubkey}});var i=ie;Object.defineProperty(e,"omitDefault",{enumerable:!0,get:function(){return i.omitDefault}});var s=L;Object.defineProperty(e,"makeCosmoshubPath",{enumerable:!0,get:function(){return s.makeCosmoshubPath}});var a=H;Object.defineProperty(e,"isEd25519Pubkey",{enumerable:!0,get:function(){return a.isEd25519Pubkey}}),Object.defineProperty(e,"isMultisigThresholdPubkey",{enumerable:!0,get:function(){return a.isMultisigThresholdPubkey}}),Object.defineProperty(e,"isSecp256k1Pubkey",{enumerable:!0,get:function(){return a.isSecp256k1Pubkey}}),Object.defineProperty(e,"isSinglePubkey",{enumerable:!0,get:function(){return a.isSinglePubkey}}),Object.defineProperty(e,"pubkeyType",{enumerable:!0,get:function(){return a.pubkeyType}});var u=C;Object.defineProperty(e,"extractKdfConfiguration",{enumerable:!0,get:function(){return u.extractKdfConfiguration}}),Object.defineProperty(e,"Secp256k1HdWallet",{enumerable:!0,get:function(){return u.Secp256k1HdWallet}});var d=se;Object.defineProperty(e,"Secp256k1Wallet",{enumerable:!0,get:function(){return d.Secp256k1Wallet}});var S=j;Object.defineProperty(e,"decodeSignature",{enumerable:!0,get:function(){return S.decodeSignature}}),Object.defineProperty(e,"encodeSecp256k1Signature",{enumerable:!0,get:function(){return S.encodeSecp256k1Signature}});var h=m;Object.defineProperty(e,"makeSignDoc",{enumerable:!0,get:function(){return h.makeSignDoc}}),Object.defineProperty(e,"serializeSignDoc",{enumerable:!0,get:function(){return h.serializeSignDoc}});var Y=K;Object.defineProperty(e,"isStdTx",{enumerable:!0,get:function(){return Y.isStdTx}}),Object.defineProperty(e,"makeStdTx",{enumerable:!0,get:function(){return Y.makeStdTx}});var z=Pe;Object.defineProperty(e,"executeKdf",{enumerable:!0,get:function(){return z.executeKdf}})}(de);const ir=Le(de),ar=Ge({__proto__:null,default:ir},[de]);export{ar as i};