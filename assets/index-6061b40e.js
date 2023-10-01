var At=Object.defineProperty;var Et=(i,t,l)=>t in i?At(i,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[t]=l;var F=(i,t,l)=>(Et(i,typeof t!="symbol"?t+"":t,l),l);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function l(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function e(n){if(n.ep)return;n.ep=!0;const c=l(n);fetch(n.href,c)}})();function W(){}function Gt(i,t){for(const l in t)i[l]=t[l];return i}function Ct(i){return i()}function ve(){return Object.create(null)}function ie(i){i.forEach(Ct)}function jt(i){return typeof i=="function"}function de(i,t){return i!=i?t==t:i!==t||i&&typeof i=="object"||typeof i=="function"}function Tt(i){return Object.keys(i).length===0}function Mt(i,t,l,e){if(i){const n=Ot(i,t,l,e);return i[0](n)}}function Ot(i,t,l,e){return i[1]&&e?Gt(l.ctx.slice(),i[1](e(t))):l.ctx}function Pt(i,t,l,e){if(i[2]&&e){const n=i[2](e(l));if(t.dirty===void 0)return n;if(typeof n=="object"){const c=[],o=Math.max(t.dirty.length,n.length);for(let f=0;f<o;f+=1)c[f]=t.dirty[f]|n[f];return c}return t.dirty|n}return t.dirty}function zt(i,t,l,e,n,c){if(n){const o=Ot(t,l,e,c);i.p(o,n)}}function It(i){if(i.ctx.length>32){const t=[],l=i.ctx.length/32;for(let e=0;e<l;e++)t[e]=-1;return t}return-1}function m(i,t){i.appendChild(t)}function u(i,t,l){i.insertBefore(t,l||null)}function s(i){i.parentNode&&i.parentNode.removeChild(i)}function O(i,t){for(let l=0;l<i.length;l+=1)i[l]&&i[l].d(t)}function d(i){return document.createElement(i)}function Ut(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function ne(i){return document.createTextNode(i)}function $(){return ne(" ")}function h(){return ne("")}function r(i,t,l){l==null?i.removeAttribute(t):i.getAttribute(t)!==l&&i.setAttribute(t,l)}function Ht(i){return Array.from(i.childNodes)}class Vt{constructor(t=!1){F(this,"is_svg",!1);F(this,"e");F(this,"n");F(this,"t");F(this,"a");this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,l,e=null){this.e||(this.is_svg?this.e=Ut(l.nodeName):this.e=d(l.nodeType===11?"TEMPLATE":l.nodeName),this.t=l.tagName!=="TEMPLATE"?l:l.content,this.c(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let l=0;l<this.n.length;l+=1)u(this.t,this.n[l],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(s)}}let he;function le(i){he=i}const ee=[],we=[];let te=[];const Ne=[],Qt=Promise.resolve();let _e=!1;function Zt(){_e||(_e=!0,Qt.then(St))}function ue(i){te.push(i)}const fe=new Set;let x=0;function St(){if(x!==0)return;const i=he;do{try{for(;x<ee.length;){const t=ee[x];x++,le(t),qt(t.$$)}}catch(t){throw ee.length=0,x=0,t}for(le(null),ee.length=0,x=0;we.length;)we.pop()();for(let t=0;t<te.length;t+=1){const l=te[t];fe.has(l)||(fe.add(l),l())}te.length=0}while(ee.length);for(;Ne.length;)Ne.pop()();_e=!1,fe.clear(),le(i)}function qt(i){if(i.fragment!==null){i.update(),ie(i.before_update);const t=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,t),i.after_update.forEach(ue)}}function Xt(i){const t=[],l=[];te.forEach(e=>i.indexOf(e)===-1?t.push(e):l.push(e)),l.forEach(e=>e()),te=t}const ce=new Set;let K;function Bt(){K={r:0,c:[],p:K}}function Dt(){K.r||ie(K.c),K=K.p}function Y(i,t){i&&i.i&&(ce.delete(i),i.i(t))}function oe(i,t,l,e){if(i&&i.o){if(ce.has(i))return;ce.add(i),K.c.push(()=>{ce.delete(i),e&&(l&&i.d(1),e())}),i.o(t)}else e&&e()}function p(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Lt(i){i&&i.c()}function me(i,t,l){const{fragment:e,after_update:n}=i.$$;e&&e.m(t,l),ue(()=>{const c=i.$$.on_mount.map(Ct).filter(jt);i.$$.on_destroy?i.$$.on_destroy.push(...c):ie(c),i.$$.on_mount=[]}),n.forEach(ue)}function pe(i,t){const l=i.$$;l.fragment!==null&&(Xt(l.after_update),ie(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function Jt(i,t){i.$$.dirty[0]===-1&&(ee.push(i),Zt(),i.$$.dirty.fill(0)),i.$$.dirty[t/31|0]|=1<<t%31}function be(i,t,l,e,n,c,o,f=[-1]){const C=he;le(i);const b=i.$$={fragment:null,ctx:[],props:c,update:W,not_equal:n,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(C?C.$$.context:[])),callbacks:ve(),dirty:f,skip_bound:!1,root:t.target||C.$$.root};o&&o(b.root);let L=!1;if(b.ctx=l?l(i,t.props||{},(g,V,...N)=>{const S=N.length?N[0]:V;return b.ctx&&n(b.ctx[g],b.ctx[g]=S)&&(!b.skip_bound&&b.bound[g]&&b.bound[g](S),L&&Jt(i,g)),V}):[],b.update(),L=!0,ie(b.before_update),b.fragment=e?e(b.ctx):!1,t.target){if(t.hydrate){const g=Ht(t.target);b.fragment&&b.fragment.l(g),g.forEach(s)}else b.fragment&&b.fragment.c();t.intro&&Y(i.$$.fragment),me(i,t.target,t.anchor),St()}le(C)}class ge{constructor(){F(this,"$$");F(this,"$$set")}$destroy(){pe(this,1),this.$destroy=W}$on(t,l){if(!jt(l))return W;const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(l),()=>{const n=e.indexOf(l);n!==-1&&e.splice(n,1)}}$set(t){this.$$set&&!Tt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Rt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Rt);function Ce(i,t,l){const e=i.slice();e[1]=t[l][0],e[2]=t[l][1];const n=typeof e[2];return e[3]=n,e}function je(i,t,l){const e=i.slice();e[1]=t[l][0],e[2]=t[l][1];const n=e[1].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return e[19]=n,e}function Oe(i,t,l){const e=i.slice();return e[1]=t[l][0],e[2]=t[l][1],e}function Se(i,t,l){const e=i.slice();return e[24]=t[l],e}function Wt(i){const t=i.slice(),l=t[1].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return t[19]=l,t}function Le(i,t,l){const e=i.slice();return e[1]=t[l][0],e[2]=t[l][1],e}function Ae(i,t,l){const e=i.slice();return e[24]=t[l],e}function Ft(i){const t=i.slice(),l=t[1].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return t[19]=l,t}function Ee(i,t,l){const e=i.slice();return e[1]=t[l][0],e[2]=t[l][1],e}function Ge(i,t,l){const e=i.slice();return e[24]=t[l],e}function Kt(i){const t=i.slice(),l=t[1].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return t[19]=l,t}function Te(i,t,l){const e=i.slice();e[1]=t[l][0],e[2]=t[l][1];const n=e[1].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return e[19]=n,e}function Me(i,t,l){const e=i.slice();return e[16]=t[l],e}function Pe(i,t,l){const e=i.slice();return e[11]=t[l],e}function ze(i,t,l){const e=i.slice();return e[1]=t[l][0],e[2]=t[l][1],e}function Ie(i,t,l){const e=i.slice();return e[6]=t[l],e}function Ue(i,t,l){const e=i.slice();return e[1]=t[l][0],e[2]=t[l][1],e}function ae(i){const t=i.slice(),l=t[1].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return t[19]=l,t}function He(i){let t,l=p(Object.entries(i[0])),e=[];for(let n=0;n<l.length;n+=1)e[n]=lt(Ce(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(Object.entries(n[0]));let o;for(o=0;o<l.length;o+=1){const f=Ce(n,l,o);e[o]?e[o].p(f,c):(e[o]=lt(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function Ve(i){let t,l,e;return{c(){t=d("meta"),r(t,"property",l="og:"+i[19]),r(t,"content",e=i[2])},m(n,c){u(n,t,c)},p(n,c){c[0]&1&&l!==(l="og:"+n[19])&&r(t,"property",l),c[0]&1&&e!==(e=n[2])&&r(t,"content",e)},d(n){n&&s(t)}}}function Qe(i){let t;function l(c,o){if(c[1]==="images")return on;if(c[1]==="videos")return ln;if(c[1]==="localeAlternate")return nn;if(c[1]==="music")return tn;if(c[1]==="movie")return en;if(c[1]==="article")return $t;if(c[1]==="book")return xt;if(c[1]==="profile")return Yt}let e=l(i),n=e&&e(i);return{c(){n&&n.c(),t=h()},m(c,o){n&&n.m(c,o),u(c,t,o)},p(c,o){e===(e=l(c))&&n?n.p(c,o):(n&&n.d(1),n=e&&e(c),n&&(n.c(),n.m(t.parentNode,t)))},d(c){c&&s(t),n&&n.d(c)}}}function Yt(i){let t,l=p(Object.entries(i[0].profile??{})),e=[];for(let n=0;n<l.length;n+=1)e[n]=Ze(je(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(Object.entries(n[0].profile??{}));let o;for(o=0;o<l.length;o+=1){const f=je(n,l,o);e[o]?e[o].p(f,c):(e[o]=Ze(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function xt(i){let t,l=p(Object.entries(i[0].book??{})),e=[];for(let n=0;n<l.length;n+=1)e[n]=Be(Oe(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(Object.entries(n[0].book??{}));let o;for(o=0;o<l.length;o+=1){const f=Oe(n,l,o);e[o]?e[o].p(f,c):(e[o]=Be(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function $t(i){let t,l=p(Object.entries(i[0].article??{})),e=[];for(let n=0;n<l.length;n+=1)e[n]=Re(Le(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(Object.entries(n[0].article??{}));let o;for(o=0;o<l.length;o+=1){const f=Le(n,l,o);e[o]?e[o].p(f,c):(e[o]=Re(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function en(i){let t,l=p(Object.entries(i[0].movie??{})),e=[];for(let n=0;n<l.length;n+=1)e[n]=Ke(Ee(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(Object.entries(n[0].movie??{}));let o;for(o=0;o<l.length;o+=1){const f=Ee(n,l,o);e[o]?e[o].p(f,c):(e[o]=Ke(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function tn(i){let t,l=p(Object.entries(i[0].music??{})),e=[];for(let n=0;n<l.length;n+=1)e[n]=Ye(Te(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(Object.entries(n[0].music??{}));let o;for(o=0;o<l.length;o+=1){const f=Te(n,l,o);e[o]?e[o].p(f,c):(e[o]=Ye(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function nn(i){let t,l=p(i[0].localeAlternate??[]),e=[];for(let n=0;n<l.length;n+=1)e[n]=xe(Me(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(n[0].localeAlternate??[]);let o;for(o=0;o<l.length;o+=1){const f=Me(n,l,o);e[o]?e[o].p(f,c):(e[o]=xe(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function ln(i){let t,l=p(i[0].videos??[]),e=[];for(let n=0;n<l.length;n+=1)e[n]=et(Pe(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(n[0].videos??[]);let o;for(o=0;o<l.length;o+=1){const f=Pe(n,l,o);e[o]?e[o].p(f,c):(e[o]=et(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function on(i){let t,l=p(i[0].images??[]),e=[];for(let n=0;n<l.length;n+=1)e[n]=nt(Ie(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(n[0].images??[]);let o;for(o=0;o<l.length;o+=1){const f=Ie(n,l,o);e[o]?e[o].p(f,c):(e[o]=nt(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function Ze(i){let t,l,e;return{c(){t=d("meta"),r(t,"property",l="profile:"+i[19]),r(t,"content",e=i[2])},m(n,c){u(n,t,c)},p(n,c){c[0]&1&&l!==(l="profile:"+n[19])&&r(t,"property",l),c[0]&1&&e!==(e=n[2])&&r(t,"content",e)},d(n){n&&s(t)}}}function qe(i){let t,l,e;return{c(){t=d("meta"),r(t,"property",l="book:"+i[19]),r(t,"content",e=i[2].toString())},m(n,c){u(n,t,c)},p(n,c){c[0]&1&&l!==(l="book:"+n[19])&&r(t,"property",l),c[0]&1&&e!==(e=n[2].toString())&&r(t,"content",e)},d(n){n&&s(t)}}}function cn(i){let t,l=p(i[2]),e=[];for(let n=0;n<l.length;n+=1)e[n]=Xe(Se(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(n[2]);let o;for(o=0;o<l.length;o+=1){const f=Se(n,l,o);e[o]?e[o].p(f,c):(e[o]=Xe(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function Xe(i){let t,l,e;return{c(){t=d("meta"),r(t,"property",l="book:"+i[1]),r(t,"content",e=i[24])},m(n,c){u(n,t,c)},p(n,c){c[0]&1&&l!==(l="book:"+n[1])&&r(t,"property",l),c[0]&1&&e!==(e=n[24])&&r(t,"content",e)},d(n){n&&s(t)}}}function Be(i){let t;function l(o,f){return typeof o[2]=="object"?cn:qe}function e(o,f){return f===qe?Wt(o):o}let n=l(i),c=n(e(i,n));return{c(){c.c(),t=h()},m(o,f){c.m(o,f),u(o,t,f)},p(o,f){n===(n=l(o))&&c?c.p(e(o,n),f):(c.d(1),c=n(e(o,n)),c&&(c.c(),c.m(t.parentNode,t)))},d(o){o&&s(t),c.d(o)}}}function De(i){let t,l,e;return{c(){t=d("meta"),r(t,"property",l="article:"+i[19]),r(t,"content",e=i[2].toString())},m(n,c){u(n,t,c)},p(n,c){c[0]&1&&l!==(l="article:"+n[19])&&r(t,"property",l),c[0]&1&&e!==(e=n[2].toString())&&r(t,"content",e)},d(n){n&&s(t)}}}function rn(i){let t,l=p(i[2]),e=[];for(let n=0;n<l.length;n+=1)e[n]=Je(Ae(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(n[2]);let o;for(o=0;o<l.length;o+=1){const f=Ae(n,l,o);e[o]?e[o].p(f,c):(e[o]=Je(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function Je(i){let t,l,e;return{c(){t=d("meta"),r(t,"property",l="article:"+i[1]),r(t,"content",e=i[24])},m(n,c){u(n,t,c)},p(n,c){c[0]&1&&l!==(l="article:"+n[1])&&r(t,"property",l),c[0]&1&&e!==(e=n[24])&&r(t,"content",e)},d(n){n&&s(t)}}}function Re(i){let t;function l(o,f){return typeof o[2]=="object"?rn:De}function e(o,f){return f===De?Ft(o):o}let n=l(i),c=n(e(i,n));return{c(){c.c(),t=h()},m(o,f){c.m(o,f),u(o,t,f)},p(o,f){n===(n=l(o))&&c?c.p(e(o,n),f):(c.d(1),c=n(e(o,n)),c&&(c.c(),c.m(t.parentNode,t)))},d(o){o&&s(t),c.d(o)}}}function We(i){let t,l,e;return{c(){t=d("meta"),r(t,"property",l="video:"+i[19]),r(t,"content",e=i[2].toString())},m(n,c){u(n,t,c)},p(n,c){c[0]&1&&l!==(l="video:"+n[19])&&r(t,"property",l),c[0]&1&&e!==(e=n[2].toString())&&r(t,"content",e)},d(n){n&&s(t)}}}function fn(i){let t,l=p(i[2]),e=[];for(let n=0;n<l.length;n+=1)e[n]=Fe(Ge(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(n[2]);let o;for(o=0;o<l.length;o+=1){const f=Ge(n,l,o);e[o]?e[o].p(f,c):(e[o]=Fe(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function Fe(i){let t,l,e;return{c(){t=d("meta"),r(t,"property",l="video:"+i[1]),r(t,"content",e=i[24])},m(n,c){u(n,t,c)},p(n,c){c[0]&1&&l!==(l="video:"+n[1])&&r(t,"property",l),c[0]&1&&e!==(e=n[24])&&r(t,"content",e)},d(n){n&&s(t)}}}function Ke(i){let t;function l(o,f){return typeof o[2]=="object"?fn:We}function e(o,f){return f===We?Kt(o):o}let n=l(i),c=n(e(i,n));return{c(){c.c(),t=h()},m(o,f){c.m(o,f),u(o,t,f)},p(o,f){n===(n=l(o))&&c?c.p(e(o,n),f):(c.d(1),c=n(e(o,n)),c&&(c.c(),c.m(t.parentNode,t)))},d(o){o&&s(t),c.d(o)}}}function Ye(i){let t,l,e;return{c(){t=d("meta"),r(t,"property",l="music:"+i[19]),r(t,"content",e=i[2].toString())},m(n,c){u(n,t,c)},p(n,c){c[0]&1&&l!==(l="music:"+n[19])&&r(t,"property",l),c[0]&1&&e!==(e=n[2].toString())&&r(t,"content",e)},d(n){n&&s(t)}}}function xe(i){let t,l;return{c(){t=d("meta"),r(t,"property","og:locale:alternate"),r(t,"content",l=i[16])},m(e,n){u(e,t,n)},p(e,n){n[0]&1&&l!==(l=e[16])&&r(t,"content",l)},d(e){e&&s(t)}}}function an(i){let t,l,e;return{c(){t=d("meta"),r(t,"property",l="og:video:"+i[1]),r(t,"content",e=i[2].toString())},m(n,c){u(n,t,c)},p(n,c){c[0]&1&&l!==(l="og:video:"+n[1])&&r(t,"property",l),c[0]&1&&e!==(e=n[2].toString())&&r(t,"content",e)},d(n){n&&s(t)}}}function sn(i){let t,l;return{c(){t=d("meta"),r(t,"property","og:video"),r(t,"content",l=i[2].toString())},m(e,n){u(e,t,n)},p(e,n){n[0]&1&&l!==(l=e[2].toString())&&r(t,"content",l)},d(e){e&&s(t)}}}function $e(i){let t;function l(c,o){return c[1]==="url"?sn:an}let e=l(i),n=e(i);return{c(){n.c(),t=h()},m(c,o){n.m(c,o),u(c,t,o)},p(c,o){e===(e=l(c))&&n?n.p(c,o):(n.d(1),n=e(c),n&&(n.c(),n.m(t.parentNode,t)))},d(c){c&&s(t),n.d(c)}}}function et(i){let t,l=p(Object.entries(i[11])),e=[];for(let n=0;n<l.length;n+=1)e[n]=$e(ze(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(Object.entries(n[11]));let o;for(o=0;o<l.length;o+=1){const f=ze(n,l,o);e[o]?e[o].p(f,c):(e[o]=$e(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function tt(i){let t,l,e;return{c(){t=d("meta"),r(t,"property",l="og:image:"+i[1]),r(t,"content",e=i[2].toString())},m(n,c){u(n,t,c)},p(n,c){c[0]&1&&l!==(l="og:image:"+n[1])&&r(t,"property",l),c[0]&1&&e!==(e=n[2].toString())&&r(t,"content",e)},d(n){n&&s(t)}}}function nt(i){let t,l=p(Object.entries(i[6])),e=[];for(let n=0;n<l.length;n+=1)e[n]=tt(Ue(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c[0]&1){l=p(Object.entries(n[6]));let o;for(o=0;o<l.length;o+=1){const f=Ue(n,l,o);e[o]?e[o].p(f,c):(e[o]=tt(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function lt(i){let t,l,e=i[3]!=="object"&&Ve(ae(i)),n=i[3]==="object"&&Qe(i);return{c(){e&&e.c(),t=$(),n&&n.c(),l=h()},m(c,o){e&&e.m(c,o),u(c,t,o),n&&n.m(c,o),u(c,l,o)},p(c,o){c[3]!=="object"?e?e.p(ae(c),o):(e=Ve(ae(c)),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null),c[3]==="object"?n?n.p(c,o):(n=Qe(c),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null)},d(c){c&&(s(t),s(l)),e&&e.d(c),n&&n.d(c)}}}function _n(i){let t,l=i[0]&&He(i);return{c(){l&&l.c(),t=h()},m(e,n){l&&l.m(e,n),u(e,t,n)},p(e,n){e[0]?l?l.p(e,n):(l=He(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},i:W,o:W,d(e){e&&s(t),l&&l.d(e)}}}function un(i,t,l){let{openGraph:e=void 0}=t;return i.$$set=n=>{"openGraph"in n&&l(0,e=n.openGraph)},[e]}class dn extends ge{constructor(t){super(),be(this,t,un,_n,de,{openGraph:0},null,[-1,-1])}}function se(i){const t=i.slice(),l=Object.assign({"@context":"https://schema.org"},t[17]);return t[20]=l,t}function ot(i,t,l){const e=i.slice();e[21]=t[l][0],e[22]=t[l][1];const n=e[21].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return e[23]=n,e}function it(i,t,l){const e=i.slice();return e[26]=t[l].href,e[27]=t[l].hreflang,e}function ct(i){return document.title=i[0],{c:W,m:W,d:W}}function rt(i){let t;return{c(){t=d("meta"),r(t,"name","description"),r(t,"content",i[1])},m(l,e){u(l,t,e)},p(l,e){e&2&&r(t,"content",l[1])},d(l){l&&s(t)}}}function ft(i){let t;return{c(){t=d("link"),r(t,"rel","canonical"),r(t,"href",i[10])},m(l,e){u(l,t,e)},p(l,e){e&1024&&r(t,"href",l[10])},d(l){l&&s(t)}}}function at(i){let t;return{c(){t=d("meta"),r(t,"name","keywords"),r(t,"content",i[2])},m(l,e){u(l,t,e)},p(l,e){e&4&&r(t,"content",l[2])},d(l){l&&s(t)}}}function st(i){let t;return{c(){t=d("link"),r(t,"rel","amphtml"),r(t,"href",i[11])},m(l,e){u(l,t,e)},p(l,e){e&2048&&r(t,"href",l[11])},d(l){l&&s(t)}}}function _t(i){let t;return{c(){t=d("link"),r(t,"rel","manifest"),r(t,"href",i[12])},m(l,e){u(l,t,e)},p(l,e){e&4096&&r(t,"href",l[12])},d(l){l&&s(t)}}}function ut(i){let t;return{c(){t=d("meta"),r(t,"name","application-name"),r(t,"content",i[4])},m(l,e){u(l,t,e)},p(l,e){e&16&&r(t,"content",l[4])},d(l){l&&s(t)}}}function dt(i){let t,l=p(i[13]),e=[];for(let n=0;n<l.length;n+=1)e[n]=ht(it(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c&8192){l=p(n[13]);let o;for(o=0;o<l.length;o+=1){const f=it(n,l,o);e[o]?e[o].p(f,c):(e[o]=ht(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function ht(i){let t,l,e;return{c(){t=d("link"),r(t,"rel","alternate"),r(t,"href",l=i[26]),r(t,"hreflang",e=i[27])},m(n,c){u(n,t,c)},p(n,c){c&8192&&l!==(l=n[26])&&r(t,"href",l),c&8192&&e!==(e=n[27])&&r(t,"hreflang",e)},d(n){n&&s(t)}}}function mt(i){let t;return{c(){t=d("meta"),r(t,"name","theme-color"),r(t,"content",i[5])},m(l,e){u(l,t,e)},p(l,e){e&32&&r(t,"content",l[5])},d(l){l&&s(t)}}}function pt(i){let t;return{c(){t=d("base"),r(t,"href",i[3])},m(l,e){u(l,t,e)},p(l,e){e&8&&r(t,"href",l[3])},d(l){l&&s(t)}}}function bt(i){let t,l;return{c(){t=d("meta"),r(t,"property","fb:app_id"),r(t,"content",l=i[16].appId)},m(e,n){u(e,t,n)},p(e,n){n&65536&&l!==(l=e[16].appId)&&r(t,"content",l)},d(e){e&&s(t)}}}function gt(i){let t;return{c(){t=d("meta"),r(t,"name","google"),r(t,"content","nositelinkssearchbox")},m(l,e){u(l,t,e)},d(l){l&&s(t)}}}function kt(i){let t;return{c(){t=d("meta"),r(t,"name","google"),r(t,"content","notranslate")},m(l,e){u(l,t,e)},d(l){l&&s(t)}}}function yt(i){let t,l=p(Object.entries(i[14])),e=[];for(let n=0;n<l.length;n+=1)e[n]=vt(ot(i,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=h()},m(n,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,c);u(n,t,c)},p(n,c){if(c&16384){l=p(Object.entries(n[14]));let o;for(o=0;o<l.length;o+=1){const f=ot(n,l,o);e[o]?e[o].p(f,c):(e[o]=vt(f),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=l.length}},d(n){n&&s(t),O(e,n)}}}function vt(i){let t,l,e;return{c(){t=d("meta"),r(t,"name",l="twitter:"+i[23]),r(t,"content",e=i[22])},m(n,c){u(n,t,c)},p(n,c){c&16384&&l!==(l="twitter:"+n[23])&&r(t,"name",l),c&16384&&e!==(e=n[22])&&r(t,"content",e)},d(n){n&&s(t)}}}function wt(i){let t,l;return t=new dn({props:{openGraph:i[15]}}),{c(){Lt(t.$$.fragment)},m(e,n){me(t,e,n),l=!0},p(e,n){const c={};n&32768&&(c.openGraph=e[15]),t.$set(c)},i(e){l||(Y(t.$$.fragment,e),l=!0)},o(e){oe(t.$$.fragment,e),l=!1},d(e){pe(t,e)}}}function Nt(i){let t,l=`<script type="application/ld+json">${JSON.stringify(i[20])+"<"}/script>`,e;return{c(){t=new Vt(!1),e=h(),t.a=e},m(n,c){t.m(l,n,c),u(n,e,c)},p(n,c){c&131072&&l!==(l=`<script type="application/ld+json">${JSON.stringify(n[20])+"<"}/script>`)&&t.p(l)},d(n){n&&(s(e),t.d())}}}function hn(i){var ke;let t,l,e,n,c,o,f,C,b,L,g,V,N,S,B,Q,Z,D,J,j,y=i[0]&&ct(i),k=i[1]&&rt(i),_=i[10]&&ft(i),A=i[2]&&at(i),E=i[11]&&st(i),G=i[12]&&_t(i),T=i[4]&&ut(i),M=i[13]&&dt(i),P=i[5]&&mt(i),z=i[3]&&pt(i),I=((ke=i[16])==null?void 0:ke.appId)&&bt(i),q=i[8]&&gt(),X=i[9]&&kt(),U=i[14]&&yt(i),w=i[15]&&wt(i),H=i[17]&&Nt(se(i));const re=i[19].default,R=Mt(re,i,i[18],null);return{c(){y&&y.c(),t=h(),k&&k.c(),l=h(),_&&_.c(),e=h(),A&&A.c(),n=h(),E&&E.c(),c=h(),G&&G.c(),o=h(),T&&T.c(),f=h(),M&&M.c(),C=h(),P&&P.c(),b=h(),z&&z.c(),L=h(),I&&I.c(),g=d("meta"),N=d("meta"),q&&q.c(),B=h(),X&&X.c(),Q=h(),U&&U.c(),Z=h(),w&&w.c(),D=h(),H&&H.c(),J=h(),R&&R.c(),r(g,"name","robots"),r(g,"content",V=`${i[7]?"noindex":"index"},${i[6]?"nofollow":"follow"}`),r(N,"name","googlebot"),r(N,"content",S=`${i[7]?"noindex":"index"},${i[6]?"nofollow":"follow"}`)},m(a,v){y&&y.m(document.head,null),m(document.head,t),k&&k.m(document.head,null),m(document.head,l),_&&_.m(document.head,null),m(document.head,e),A&&A.m(document.head,null),m(document.head,n),E&&E.m(document.head,null),m(document.head,c),G&&G.m(document.head,null),m(document.head,o),T&&T.m(document.head,null),m(document.head,f),M&&M.m(document.head,null),m(document.head,C),P&&P.m(document.head,null),m(document.head,b),z&&z.m(document.head,null),m(document.head,L),I&&I.m(document.head,null),m(document.head,g),m(document.head,N),q&&q.m(document.head,null),m(document.head,B),X&&X.m(document.head,null),m(document.head,Q),U&&U.m(document.head,null),m(document.head,Z),w&&w.m(document.head,null),m(document.head,D),H&&H.m(document.head,null),m(document.head,J),R&&R.m(document.head,null),j=!0},p(a,[v]){var ye;a[0]?y||(y=ct(a),y.c(),y.m(t.parentNode,t)):y&&(y.d(1),y=null),a[1]?k?k.p(a,v):(k=rt(a),k.c(),k.m(l.parentNode,l)):k&&(k.d(1),k=null),a[10]?_?_.p(a,v):(_=ft(a),_.c(),_.m(e.parentNode,e)):_&&(_.d(1),_=null),a[2]?A?A.p(a,v):(A=at(a),A.c(),A.m(n.parentNode,n)):A&&(A.d(1),A=null),a[11]?E?E.p(a,v):(E=st(a),E.c(),E.m(c.parentNode,c)):E&&(E.d(1),E=null),a[12]?G?G.p(a,v):(G=_t(a),G.c(),G.m(o.parentNode,o)):G&&(G.d(1),G=null),a[4]?T?T.p(a,v):(T=ut(a),T.c(),T.m(f.parentNode,f)):T&&(T.d(1),T=null),a[13]?M?M.p(a,v):(M=dt(a),M.c(),M.m(C.parentNode,C)):M&&(M.d(1),M=null),a[5]?P?P.p(a,v):(P=mt(a),P.c(),P.m(b.parentNode,b)):P&&(P.d(1),P=null),a[3]?z?z.p(a,v):(z=pt(a),z.c(),z.m(L.parentNode,L)):z&&(z.d(1),z=null),(ye=a[16])!=null&&ye.appId?I?I.p(a,v):(I=bt(a),I.c(),I.m(g.parentNode,g)):I&&(I.d(1),I=null),(!j||v&192&&V!==(V=`${a[7]?"noindex":"index"},${a[6]?"nofollow":"follow"}`))&&r(g,"content",V),(!j||v&192&&S!==(S=`${a[7]?"noindex":"index"},${a[6]?"nofollow":"follow"}`))&&r(N,"content",S),a[8]?q||(q=gt(),q.c(),q.m(B.parentNode,B)):q&&(q.d(1),q=null),a[9]?X||(X=kt(),X.c(),X.m(Q.parentNode,Q)):X&&(X.d(1),X=null),a[14]?U?U.p(a,v):(U=yt(a),U.c(),U.m(Z.parentNode,Z)):U&&(U.d(1),U=null),a[15]?w?(w.p(a,v),v&32768&&Y(w,1)):(w=wt(a),w.c(),Y(w,1),w.m(D.parentNode,D)):w&&(Bt(),oe(w,1,1,()=>{w=null}),Dt()),a[17]?H?H.p(se(a),v):(H=Nt(se(a)),H.c(),H.m(J.parentNode,J)):H&&(H.d(1),H=null),R&&R.p&&(!j||v&262144)&&zt(R,re,a,a[18],j?Pt(re,a[18],v,null):It(a[18]),null)},i(a){j||(Y(w),Y(R,a),j=!0)},o(a){oe(w),oe(R,a),j=!1},d(a){y&&y.d(a),s(t),k&&k.d(a),s(l),_&&_.d(a),s(e),A&&A.d(a),s(n),E&&E.d(a),s(c),G&&G.d(a),s(o),T&&T.d(a),s(f),M&&M.d(a),s(C),P&&P.d(a),s(b),z&&z.d(a),s(L),I&&I.d(a),s(g),s(N),q&&q.d(a),s(B),X&&X.d(a),s(Q),U&&U.d(a),s(Z),w&&w.d(a),s(D),H&&H.d(a),s(J),R&&R.d(a)}}}function mn(i,t,l){let{$$slots:e={},$$scope:n}=t,{title:c=void 0}=t,{description:o=void 0}=t,{keywords:f=void 0}=t,{base:C=void 0}=t,{applicationName:b=void 0}=t,{themeColor:L=void 0}=t,{nofollow:g=!1}=t,{noindex:V=!1}=t,{nositelinkssearchbox:N=!1}=t,{notranslate:S=!1}=t,{canonical:B=void 0}=t,{amp:Q=void 0}=t,{manifest:Z=void 0}=t,{languageAlternates:D=void 0}=t,{twitter:J=void 0}=t,{openGraph:j=void 0}=t,{facebook:y=void 0}=t,{jsonLd:k=void 0}=t;return i.$$set=_=>{"title"in _&&l(0,c=_.title),"description"in _&&l(1,o=_.description),"keywords"in _&&l(2,f=_.keywords),"base"in _&&l(3,C=_.base),"applicationName"in _&&l(4,b=_.applicationName),"themeColor"in _&&l(5,L=_.themeColor),"nofollow"in _&&l(6,g=_.nofollow),"noindex"in _&&l(7,V=_.noindex),"nositelinkssearchbox"in _&&l(8,N=_.nositelinkssearchbox),"notranslate"in _&&l(9,S=_.notranslate),"canonical"in _&&l(10,B=_.canonical),"amp"in _&&l(11,Q=_.amp),"manifest"in _&&l(12,Z=_.manifest),"languageAlternates"in _&&l(13,D=_.languageAlternates),"twitter"in _&&l(14,J=_.twitter),"openGraph"in _&&l(15,j=_.openGraph),"facebook"in _&&l(16,y=_.facebook),"jsonLd"in _&&l(17,k=_.jsonLd),"$$scope"in _&&l(18,n=_.$$scope)},[c,o,f,C,b,L,g,V,N,S,B,Q,Z,D,J,j,y,k,n,e]}class pn extends ge{constructor(t){super(),be(this,t,mn,hn,de,{title:0,description:1,keywords:2,base:3,applicationName:4,themeColor:5,nofollow:6,noindex:7,nositelinkssearchbox:8,notranslate:9,canonical:10,amp:11,manifest:12,languageAlternates:13,twitter:14,openGraph:15,facebook:16,jsonLd:17})}}function bn(i){let t,l,e,n,c,o,f,C,b,L,g,V,N,S,B,Q,Z,D,J,j,y;return l=new pn({props:{title:gn,description:kn,keywords:"competitions undergrad quant trading consulting case stock pitch win lose first careers stand out",openGraph:{title:"Competitions.fyi -- Undergrad Quant, Trading, Consulting, Case, Stock, Competitions",description:"[LIVE] Get first dibs on competitions, showcase your skills to employers. Updated and refreshed regularly.",url:"https://competitions.fyi",type:"website",images:[],site_name:"Competitions.fyi"},twitter:{card:"summary_large_image",site:"@competitions_fyi",title:"Competitions.fyi -- Undergrad Quant, Trading, Consulting, Case, Stock, Competitions",description:"[LIVE] Get first dibs on competitions, showcase your skills to employers. Updated and refreshed regularly.",image:""},jsonLd:{"@context":"https://schema.org","@type":"WebSite",name:"Competitions.fyi -- Undergrad Quant, Trading, Consulting, Case, Stock, Competitions",description:"[LIVE] Get first dibs on competitions, showcase your skills to employers. Updated and refreshed regularly.",url:"https://competitions.fyi"}}}),{c(){t=d("main"),Lt(l.$$.fragment),e=$(),n=d("header"),n.innerHTML='<div class="grid grid-cols-3 px-20"><div></div> <div>Submit a competition <a href="https://airtable.com/appHETbcQa0XSzVGP/shrG20EaMH7a0RG7M" target="_blank" rel="noopener noreferrer" class="bg-white hover:bg-blue-500 mb-1 text-2xl btn rounded-full font-bold text-black"><span class="text-2xl">here</span></a></div> <div class="flex justify-end"><span class="text-right py-2"><a target="_blank" rel="noopener noreferrer" href="https://yoitsyoung.xyz/about.html">Contact</a></span></div></div>',c=$(),o=d("div"),f=d("h1"),f.textContent="Competitions.fyi",C=$(),b=d("h4"),b.textContent="The largest database of university competitions",L=$(),g=d("blockquote"),V=ne(`Tracking
    `),N=d("span"),S=d("span"),S.textContent=`${yn}`,B=ne(`
    compeititions across
    `),Q=d("span"),Z=d("span"),Z.textContent=`${vn}`,D=ne(`
  organizations`),J=$(),j=d("div"),j.innerHTML='<div class="col-span-4"><iframe class="airtable-embed" src="https://airtable.com/embed/appHETbcQa0XSzVGP/shraldA2MygP5UXDW?backgroundColor=redDusty&amp;viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe></div> <div class="px flex justify-end text-right"><iframe class="airtable-embed" src="https://airtable.com/embed/appHETbcQa0XSzVGP/shrndGbnJYlsLpfUG?backgroundColor=redDusty" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe></div>',r(n,"class","bg-cyan-500 text-2xl mb-12 md:text-center p-7 text-white"),r(f,"class","font-display-italic font-extrabold text-5xl md:text-6xl leading-none mb-12"),r(S,"class","relative text-white"),r(N,"class","before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block"),r(Z,"class","relative text-white"),r(Q,"class","before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block"),r(g,"class","text-2xl font-semibold italic text-center text-slate-900"),r(j,"class","grid grid-cols-5"),r(o,"class","px-20")},m(k,_){u(k,t,_),me(l,t,null),m(t,e),m(t,n),m(t,c),m(t,o),m(o,f),m(o,C),m(o,b),m(o,L),m(o,g),m(g,V),m(g,N),m(N,S),m(g,B),m(g,Q),m(Q,Z),m(g,D),m(o,J),m(o,j),y=!0},p:W,i(k){y||(Y(l.$$.fragment,k),y=!0)},o(k){oe(l.$$.fragment,k),y=!1},d(k){k&&s(t),pe(l)}}}let gn="Competitions.fyi -- Undergrad Quant, Trading, Consulting, Case, Stock, Competitions",kn="[LIVE] Get first dibs on competitions, showcase your skills to employers. Updated and refreshed regularly.",yn=41,vn=36;class wn extends ge{constructor(t){super(),be(this,t,null,bn,de,{})}}new wn({target:document.getElementById("app")});
