(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[29,42],{175:function(t,e,r){"use strict";var n=r(1),o=r(88);e.a=function(t,e,r){if(!o.a)return[e,o.b,o.b];if(!t)throw new Error("useLocalStorage key may not be falsy");var i=r?r.raw?function(t){return t}:r.deserializer:JSON.parse,u=Object(n.useState)((function(){try{var n=r?r.raw?String:r.serializer:JSON.stringify,o=localStorage.getItem(t);return null!==o?i(o):(e&&localStorage.setItem(t,n(e)),e)}catch(u){return e}})),c=u[0],f=u[1],a=Object(n.useCallback)((function(e){try{var n="function"===typeof e?e(c):e;if("undefined"===typeof n)return;var o=void 0;o=r?r.raw?"string"===typeof n?n:JSON.stringify(n):r.serializer?r.serializer(n):JSON.stringify(n):JSON.stringify(n),localStorage.setItem(t,o),f(i(o))}catch(u){}}),[t,f]),s=Object(n.useCallback)((function(){try{localStorage.removeItem(t),f(void 0)}catch(u){}}),[t,f]);return[c,a,s]}},212:function(t,e,r){"use strict";var n=r(1);e.a=function(t,e){var r=function(){var t=Object(n.useRef)(!0);return t.current?(t.current=!1,!0):t.current}();Object(n.useEffect)((function(){if(!r)return t()}),e)}},94:function(t,e,r){"use strict";function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[X]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);return!e||e===Object.prototype}(t)||Array.isArray(t)||!!t[T]||!!t.constructor[T]||p(t)||y(t))}function u(t,e,r){void 0===r&&(r=!1),0===c(t)?(r?Object.keys:q)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function c(t){var e=t[X];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:p(t)?2:y(t)?3:0}function f(t,e){return 2===c(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function a(t,e){return 2===c(t)?t.get(e):t[e]}function s(t,e,r){var n=c(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function l(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function p(t){return C&&t instanceof Map}function y(t){return U&&t instanceof Set}function v(t){return t.o||t.t}function d(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=B(t);delete e[X];for(var r=q(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function h(t,e){return void 0===e&&(e=!1),O(t)||o(t)||!i(t)||(c(t)>1&&(t.set=t.add=t.clear=t.delete=b),Object.freeze(t),e&&u(t,(function(t,e){return h(e,!0)}),!0)),t}function b(){n(2)}function O(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function P(t){var e=G[t];return e||n(18,t),e}function g(){return M}function m(t,e){e&&(P("Patches"),t.u=[],t.s=[],t.v=e)}function w(t){S(t),t.p.forEach(A),t.p=null}function S(t){t===M&&(M=t.l)}function j(t){return M={p:[],l:M,h:t,m:!0,_:0}}function A(t){var e=t[X];0===e.i||1===e.i?e.j():e.g=!0}function D(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.O||P("ES5").S(e,t,o),o?(r[X].P&&(w(e),n(4)),i(t)&&(t=k(e,t),e.l||z(e,t)),e.u&&P("Patches").M(r[X],t,e.u,e.s)):t=k(e,r,[]),w(e),e.u&&e.v(e.u,e.s),t!==L?t:void 0}function k(t,e,r){if(O(e))return e;var n=e[X];if(!n)return u(e,(function(o,i){return N(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return z(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=d(n.k):n.o;u(3===n.i?new Set(o):o,(function(e,i){return N(t,n,o,e,i,r)})),z(t,o,!1),r&&t.u&&P("Patches").R(n,r,t.u,t.s)}return n.o}function N(t,e,r,n,u,c){if(o(u)){var a=k(t,u,c&&e&&3!==e.i&&!f(e.D,n)?c.concat(n):void 0);if(s(r,n,a),!o(a))return;t.m=!1}if(i(u)&&!O(u)){if(!t.h.N&&t._<1)return;k(t,u),e&&e.A.l||z(t,u)}}function z(t,e,r){void 0===r&&(r=!1),t.h.N&&t.m&&h(e,r)}function E(t,e){var r=t[X];return(r?v(r):t)[e]}function I(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function x(t){t.P||(t.P=!0,t.l&&x(t.l))}function _(t){t.o||(t.o=d(t.t))}function F(t,e,r){var n=p(e)?P("MapSet").T(e,r):y(e)?P("MapSet").F(e,r):t.O?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:g(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=H;r&&(o=[n],i=Q);var u=Proxy.revocable(o,i),c=u.revoke,f=u.proxy;return n.k=f,n.j=c,f}(e,r):P("ES5").J(e,r);return(r?r.A:g()).p.push(n),n}function J(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[X],o=c(e);if(n){if(!n.P&&(n.i<4||!P("ES5").K(n)))return n.t;n.I=!0,r=R(e,o),n.I=!1}else r=R(e,o);return u(r,(function(e,o){n&&a(n.t,e)===o||s(r,e,t(o))})),3===o?new Set(r):r}(t)}function R(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return d(t)}var K,M,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),C="undefined"!=typeof Map,U="undefined"!=typeof Set,$="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,L=W?Symbol.for("immer-nothing"):((K={})["immer-nothing"]=!0,K),T=W?Symbol.for("immer-draftable"):"__$immer_draftable",X=W?Symbol.for("immer-state"):"__$immer_state",q=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames),B=Object.getOwnPropertyDescriptors||function(t){var e={};return q(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},G={},H={get:function(t,e){if(e===X)return t;var r=v(t);if(!f(r,e))return function(t,e,r){var n,o=I(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===E(t.t,e)?(_(t),t.o[e]=F(t.A.h,n,t)):n},has:function(t,e){return e in v(t)},ownKeys:function(t){return Reflect.ownKeys(v(t))},set:function(t,e,r){var n=I(v(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=E(v(t),e),i=null==o?void 0:o[X];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(l(r,o)&&(void 0!==r||f(t.t,e)))return!0;_(t),x(t)}return t.o[e]=r,t.D[e]=!0,!0},deleteProperty:function(t,e){return void 0!==E(t.t,e)||e in t.t?(t.D[e]=!1,_(t),x(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=v(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},Q={};u(H,(function(t,e){Q[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Q.deleteProperty=function(t,e){return H.deleteProperty.call(this,t[0],e)},Q.set=function(t,e,r){return H.set.call(this,t[0],e,r,t[0])};var V=new(function(){function t(t){this.O=$,this.N=!0,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var e=t.prototype;return e.produce=function(t,e,r){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(t){var r=this;void 0===t&&(t=o);for(var n=arguments.length,i=Array(n>1?n-1:0),c=1;c<n;c++)i[c-1]=arguments[c];return u.produce(t,(function(t){var n;return(n=e).call.apply(n,[r,t].concat(i))}))}}var c;if("function"!=typeof e&&n(6),void 0!==r&&"function"!=typeof r&&n(7),i(t)){var f=j(this),a=F(this,t,void 0),s=!0;try{c=e(a),s=!1}finally{s?w(f):S(f)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return m(f,r),D(t,f)}),(function(t){throw w(f),t})):(m(f,r),D(c,f))}if(!t||"object"!=typeof t){if((c=e(t))===L)return;return void 0===c&&(c=t),this.N&&h(c,!0),c}n(21,t)},e.produceWithPatches=function(t,e){var r,n,o=this;return"function"==typeof t?function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return o.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(n))}))}:[this.produce(t,e,(function(t,e){r=t,n=e})),r,n]},e.createDraft=function(t){i(t)||n(8),o(t)&&(t=J(t));var e=j(this),r=F(this,t,void 0);return r[X].C=!0,S(e),r},e.finishDraft=function(t,e){var r=(t&&t[X]).A;return m(r,e),D(void 0,r)},e.setAutoFreeze=function(t){this.N=t},e.setUseProxies=function(t){t&&!$&&n(20),this.O=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var i=P("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(r+1))}))},t}()),Y=V.produce;V.produceWithPatches.bind(V),V.setAutoFreeze.bind(V),V.setUseProxies.bind(V),V.applyPatches.bind(V),V.createDraft.bind(V),V.finishDraft.bind(V);e.a=Y}}]);
//# sourceMappingURL=29.f5d1161c.chunk.js.map
