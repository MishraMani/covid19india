(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[4],{114:function(e,t,r){"use strict";var n=r(1),i=r(165),o=r.n(i);function u(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function a(){return"undefined"===typeof navigator.onLine||navigator.onLine}var c=new WeakMap,f=0;var s=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t,r){void 0===r&&(r=!0);var n=this.serializeKey(e)[0];this.__cache.set(n,t),r&&R(e,t,!1),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(e){void 0===e&&(e=!0),e&&this.__cache.forEach((function(e){return R(e,null,!1)})),this.__cache.clear(),this.notify()},e.prototype.delete=function(e,t){void 0===t&&(t=!0);var r=this.serializeKey(e)[0];t&&R(e,null,!1),this.__cache.delete(r),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(r){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",r=0;r<e.length;++r){var n=void 0;null===e[r]||"object"!==typeof e[r]?n="string"===typeof e[r]?'"'+e[r]+'"':String(e[r]):c.has(e[r])?n=c.get(e[r]):(n=f,c.set(e[r],f++)),t+="@"+n}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var r=!0;return this.__listeners.push(e),function(){if(r){r=!1;var n=t.__listeners.indexOf(e);n>-1&&(t.__listeners[n]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}()),l={},d={},p={},v={},h={};var y="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),b={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,r,n,i){if(u()&&!(r.errorRetryCount&&i.retryCount>r.errorRetryCount)){var o=Math.min(i.retryCount||0,8),a=~~((Math.random()+.5)*(1<<o))*r.errorRetryInterval;setTimeout(n,a,i)}},errorRetryInterval:1e3*(y?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(y?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:o.a},g=!1;if("undefined"!==typeof window&&window.addEventListener&&!g){var O=function(){if(u()&&a())for(var e in p)p[e][0]&&p[e][0]()};window.addEventListener("visibilitychange",O,!1),window.addEventListener("focus",O,!1),g=!0}var m=b;function w(e,t){var r=!1;return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];r||(r=!0,e.apply(void 0,n),setTimeout((function(){return r=!1}),t))}}var P=Object(n.createContext)({});P.displayName="SWRConfigContext";var j=P,S=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function u(e){try{c(n.next(e))}catch(t){o(t)}}function a(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,a)}c((n=n.apply(e,t||[])).next())}))},_=function(e,t){var r,n,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(a){o=[6,a],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},E="undefined"===typeof window,A=E?n.useEffect:n.useLayoutEffect,x=function(e,t){void 0===t&&(t=!0);var r=s.serializeKey(e),n=r[0],i=r[2];if(!n)return Promise.resolve();var o=v[n];if(n&&o){for(var u=s.get(n),a=s.get(i),c=[],f=0;f<o.length;++f)c.push(o[f](t,u,a,f>0));return Promise.all(c).then((function(){return s.get(n)}))}return Promise.resolve(s.get(n))},D=function(e,t,r){var n=v[e];if(e&&n)for(var i=0;i<n.length;++i)n[i](!1,t,r)},R=function(e,t,r){return void 0===r&&(r=!0),S(void 0,void 0,void 0,(function(){var n,i,o,u,a,c,f,l,p,y;return _(this,(function(b){switch(b.label){case 0:if(!(n=s.serializeKey(e)[0]))return[2];if("undefined"===typeof t)return[2,x(e,r)];if(h[n]=Date.now()-1,u=h[n],a=d[n],!t||"function"!==typeof t)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,t(s.get(n))];case 2:return i=b.sent(),[3,4];case 3:return c=b.sent(),o=c,[3,4];case 4:return[3,11];case 5:if(!t||"function"!==typeof t.then)return[3,10];b.label=6;case 6:return b.trys.push([6,8,,9]),[4,t];case 7:return i=b.sent(),[3,9];case 8:return f=b.sent(),o=f,[3,9];case 9:return[3,11];case 10:i=t,b.label=11;case 11:if(u!==h[n]||a!==d[n]){if(o)throw o;return[2,i]}if("undefined"!==typeof i&&s.set(n,i,!1),l=v[n]){for(p=[],y=0;y<l.length;++y)p.push(l[y](!!r,i,o,y>0));return[2,Promise.all(p).then((function(){return s.get(n)}))]}if(o)throw o;return[2,i]}}))}))};j.Provider;var I=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i,o,c={};t.length>=1&&(i=t[0]),t.length>2?(o=t[1],c=t[2]):"function"===typeof t[1]?o=t[1]:"object"===typeof t[1]&&(c=t[1]);var f=s.serializeKey(i),y=f[0],b=f[1],g=f[2];c=Object.assign({},m,Object(n.useContext)(j),c),"undefined"===typeof o&&(o=c.fetcher);var O=s.get(y)||c.initialData,P=s.get(g),x=Object(n.useRef)({data:!1,error:!1,isValidating:!1}),I=Object(n.useRef)({data:O,error:P,isValidating:!1}),k=Object(n.useState)(null)[1],C=Object(n.useCallback)((function(e){var t=!1;for(var r in e)I.current[r]=e[r],x.current[r]&&(t=!0);(t||c.suspense)&&k({})}),[]),T=Object(n.useRef)(!1),z=Object(n.useRef)(y),K=Object(n.useRef)({emit:function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];T.current||c[e].apply(c,t)}}),M=Object(n.useCallback)((function(e,t){return R(y,e,t)}),[y]),W=Object(n.useCallback)((function(t){return void 0===t&&(t={}),S(e,void 0,void 0,(function(){var e,r,n,i,u,a,f;return _(this,(function(p){switch(p.label){case 0:if(!y||!o)return[2,!1];if(T.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,r="undefined"!==typeof l[y]&&t.dedupe,p.label=1;case 1:return p.trys.push([1,6,,7]),C({isValidating:!0}),n=void 0,i=void 0,r?(i=d[y],[4,l[y]]):[3,3];case 2:return n=p.sent(),[3,5];case 3:return l[y]&&(h[y]=Date.now()-1),c.loadingTimeout&&!s.get(y)&&setTimeout((function(){e&&K.current.emit("onLoadingSlow",y,c)}),c.loadingTimeout),l[y]=null!==b?o.apply(void 0,b):o(y),d[y]=i=Date.now(),[4,l[y]];case 4:n=p.sent(),setTimeout((function(){delete l[y],delete d[y]}),c.dedupingInterval),K.current.emit("onSuccess",n,y,c),p.label=5;case 5:return h[y]&&i<=h[y]?(C({isValidating:!1}),[2,!1]):(s.set(y,n,!1),s.set(g,void 0,!1),u={isValidating:!1},"undefined"!==typeof I.current.error&&(u.error=void 0),c.compare(I.current.data,n)||(u.data=n),C(u),r||D(y,n,void 0),[3,7]);case 6:return a=p.sent(),delete l[y],delete d[y],s.set(g,a,!1),I.current.error!==a&&(C({isValidating:!1,error:a}),r||D(y,void 0,a)),K.current.emit("onError",a,y,c),c.shouldRetryOnError&&(f=(t.retryCount||0)+1,K.current.emit("onErrorRetry",a,y,c,W,Object.assign({dedupe:!0},t,{retryCount:f}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[y]);if(A((function(){if(y){T.current=!1;var e=I.current.data,t=s.get(y)||c.initialData;z.current===y&&c.compare(e,t)||(C({data:t}),z.current=y);var r,n=function(){return W({dedupe:!0})};(c.revalidateOnMount||!c.initialData&&void 0===c.revalidateOnMount)&&("undefined"!==typeof t&&!E&&window.requestIdleCallback?window.requestIdleCallback(n):n()),c.revalidateOnFocus&&(r=w(n,c.focusThrottleInterval),p[y]?p[y].push(r):p[y]=[r]);var i=function(e,t,r,i){void 0===e&&(e=!0),void 0===i&&(i=!0);var o={},u=!1;return"undefined"===typeof t||c.compare(I.current.data,t)||(o.data=t,u=!0),I.current.error!==r&&(o.error=r,u=!0),u&&C(o),!!e&&(i?n():W())};v[y]?v[y].push(i):v[y]=[i];var o=null;return!E&&window.addEventListener&&c.revalidateOnReconnect&&window.addEventListener("online",o=n),function(){var e,t;(C=function(){return null},T.current=!0,r&&p[y])&&((t=(e=p[y]).indexOf(r))>=0&&(e[t]=e[e.length-1],e.pop()));v[y]&&((t=(e=v[y]).indexOf(i))>=0&&(e[t]=e[e.length-1],e.pop()));!E&&window.removeEventListener&&null!==o&&window.removeEventListener("online",o)}}}),[y,W]),A((function(){var t=null;return c.refreshInterval&&(t=setTimeout((function r(){return S(e,void 0,void 0,(function(){return _(this,(function(e){switch(e.label){case 0:return I.current.error||!c.refreshWhenHidden&&!u()||!c.refreshWhenOffline&&!a()?[3,2]:[4,W({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return c.refreshInterval&&(t=setTimeout(r,c.refreshInterval)),[2]}}))}))}),c.refreshInterval)),function(){t&&clearTimeout(t)}}),[c.refreshInterval,c.refreshWhenHidden,c.refreshWhenOffline,W]),c.suspense){var L=s.get(y)||O,N=s.get(g)||P;if("undefined"===typeof L&&"undefined"===typeof N){if(l[y]||W(),l[y]&&"function"===typeof l[y].then)throw l[y];L=l[y]}if("undefined"===typeof L&&N)throw N;return{error:N,data:L,revalidate:W,mutate:M,isValidating:I.current.isValidating}}return Object(n.useMemo)((function(){var e={revalidate:W,mutate:M};return Object.defineProperties(e,{error:{get:function(){return x.current.error=!0,z.current===y?I.current.error:P},enumerable:!0},data:{get:function(){return x.current.data=!0,z.current===y?I.current.data:O},enumerable:!0},isValidating:{get:function(){return x.current.isValidating=!0,I.current.isValidating},enumerable:!0}}),e}),[W])};new Map;t.a=I},133:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(42);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},165:function(e,t,r){"use strict";var n=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var u,a,c,f=n(t),s=n(r);if(f&&s){if((a=t.length)!=r.length)return!1;for(u=a;0!==u--;)if(!e(t[u],r[u]))return!1;return!0}if(f!=s)return!1;var l=t instanceof Date,d=r instanceof Date;if(l!=d)return!1;if(l&&d)return t.getTime()==r.getTime();var p=t instanceof RegExp,v=r instanceof RegExp;if(p!=v)return!1;if(p&&v)return t.toString()==r.toString();var h=i(t);if((a=h.length)!==i(r).length)return!1;for(u=a;0!==u--;)if(!o.call(r,h[u]))return!1;for(u=a;0!==u--;)if(!e(t[c=h[u]],r[c]))return!1;return!0}return t!==t&&r!==r}},223:function(e,t,r){"use strict";var n=r(1),i=r(93);t.a=function(e,t,r){if(!i.a)return[t,function(){}];var o=Object(n.useState)((function(){try{var n=sessionStorage.getItem(e);return"string"!==typeof n?(sessionStorage.setItem(e,r?String(t):JSON.stringify(t)),t):r?n:JSON.parse(n||"null")}catch(o){return t}})),u=o[0],a=o[1];return Object(n.useEffect)((function(){try{var t=r?String(u):JSON.stringify(u);sessionStorage.setItem(e,t)}catch(o){}})),[u,a]}},97:function(e,t,r){"use strict";function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[H]}function o(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[J]||!!e.constructor[J]||d(e)||p(e))}function u(e,t,r){void 0===r&&(r=!1),0===a(e)?(r?Object.keys:U)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function a(e){var t=e[H];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:d(e)?2:p(e)?3:0}function c(e,t){return 2===a(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function f(e,t){return 2===a(e)?e.get(t):e[t]}function s(e,t,r){var n=a(e);2===n?e.set(t,r):3===n?(e.delete(t),e.add(r)):e[t]=r}function l(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){return L&&e instanceof Map}function p(e){return N&&e instanceof Set}function v(e){return e.o||e.t}function h(e){if(Array.isArray(e))return e.slice();var t=$(e);delete t[H];for(var r=U(t),n=0;n<r.length;n++){var i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function y(e,t){g(e)||i(e)||!o(e)||(a(e)>1&&(e.set=e.add=e.clear=e.delete=b),Object.freeze(e),t&&u(e,(function(e,t){return y(t,!0)}),!0))}function b(){n(2)}function g(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function O(e){var t=q[e];return t||n(19,e),t}function m(){return M}function w(e,t){t&&(O("Patches"),e.u=[],e.s=[],e.v=t)}function P(e){j(e),e.p.forEach(_),e.p=null}function j(e){e===M&&(M=e.l)}function S(e){return M={p:[],l:M,h:e,m:!0,_:0}}function _(e){var t=e[H];0===t.i||1===t.i?t.j():t.g=!0}function E(e,t){t._=t.p.length;var r=t.p[0],i=void 0!==e&&e!==r;return t.h.O||O("ES5").S(t,e,i),i?(r[H].P&&(P(t),n(4)),o(e)&&(e=A(t,e),t.l||D(t,e)),t.u&&O("Patches").M(r[H],e,t.u,t.s)):e=A(t,r,[]),P(t),t.u&&t.v(t.u,t.s),e!==F?e:void 0}function A(e,t,r){if(g(t))return t;var n=t[H];if(!n)return u(t,(function(i,o){return x(e,n,t,i,o,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return D(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=4===n.i||5===n.i?n.o=h(n.k):n.o;u(i,(function(t,o){return x(e,n,i,t,o,r)})),D(e,i,!1),r&&e.u&&O("Patches").R(n,r,e.u,e.s)}return n.o}function x(e,t,r,n,u,a){if(i(u)){var f=A(e,u,a&&t&&3!==t.i&&!c(t.D,n)?a.concat(n):void 0);if(s(r,n,f),!i(f))return;e.m=!1}if(o(u)&&!g(u)){if(!e.h.N&&e._<1)return;A(e,u),t&&t.A.l||D(e,u)}}function D(e,t,r){void 0===r&&(r=!1),e.h.N&&e.m&&y(t,r)}function R(e,t){var r=e[H];return(r?v(r):e)[t]}function I(e){e.P||(e.P=!0,e.l&&I(e.l))}function k(e){e.o||(e.o=h(e.t))}function C(e,t,r){var n=d(t)?O("MapSet").T(t,r):p(t)?O("MapSet").F(t,r):e.O?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:m(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},i=n,o=G;r&&(i=[n],o=X);var u=Proxy.revocable(i,o),a=u.revoke,c=u.proxy;return n.k=c,n.j=a,c}(t,r):O("ES5").J(t,r);return(r?r.A:m()).p.push(n),n}function T(e){return i(e)||n(22,e),function e(t){if(!o(t))return t;var r,n=t[H],i=a(t);if(n){if(!n.P&&(n.i<4||!O("ES5").K(n)))return n.t;n.I=!0,r=z(t,i),n.I=!1}else r=z(t,i);return u(r,(function(t,i){n&&f(n.t,t)===i||s(r,t,e(i))})),3===i?new Set(r):r}(e)}function z(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return h(e)}var K,M,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),L="undefined"!=typeof Map,N="undefined"!=typeof Set,V="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,F=W?Symbol("immer-nothing"):((K={})["immer-nothing"]=!0,K),J=W?Symbol("immer-draftable"):"__$immer_draftable",H=W?Symbol("immer-state"):"__$immer_state",U=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),$=Object.getOwnPropertyDescriptors||function(e){var t={};return U(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},q={},G={get:function(e,t){if(t===H)return e;var r=v(e);if(!c(r,t))return function(e,t,r){if(r in t)for(var n=Object.getPrototypeOf(t);n;){var i,o=Object.getOwnPropertyDescriptor(n,r);if(o)return"value"in o?o.value:null===(i=o.get)||void 0===i?void 0:i.call(e.k);n=Object.getPrototypeOf(n)}}(e,r,t);var n=r[t];return e.I||!o(n)?n:n===R(e.t,t)?(k(e),e.o[t]=C(e.A.h,n,e)):n},has:function(e,t){return t in v(e)},ownKeys:function(e){return Reflect.ownKeys(v(e))},set:function(e,t,r){if(e.D[t]=!0,!e.P){if(l(r,R(v(e),t))&&void 0!==r)return!0;k(e),I(e)}return e.o[t]=r,!0},deleteProperty:function(e,t){return void 0!==R(e.t,t)||t in e.t?(e.D[t]=!1,k(e),I(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=v(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){n(12)}},X={};u(G,(function(e,t){X[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),X.deleteProperty=function(e,t){return G.deleteProperty.call(this,e[0],t)},X.set=function(e,t,r){return G.set.call(this,e[0],t,r,e[0])};var B=new(function(){function e(e){this.O=V,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,r){if("function"==typeof e&&"function"!=typeof t){var i=t;t=e;var u=this;return function(e){var r=this;void 0===e&&(e=i);for(var n=arguments.length,o=Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return u.produce(e,(function(e){var n;return(n=t).call.apply(n,[r,e].concat(o))}))}}var a;if("function"!=typeof t&&n(6),void 0!==r&&"function"!=typeof r&&n(7),o(e)){var c=S(this),f=C(this,e,void 0),s=!0;try{a=t(f),s=!1}finally{s?P(c):j(c)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return w(c,r),E(e,c)}),(function(e){throw P(c),e})):(w(c,r),E(a,c))}if(!e||"object"!=typeof e){if((a=t(e))===F)return;return void 0===a&&(a=e),this.N&&y(a,!0),a}n(21,e)},t.produceWithPatches=function(e,t){var r,n,i=this;return"function"==typeof e?function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(n))}))}:[this.produce(e,t,(function(e,t){r=e,n=t})),r,n]},t.createDraft=function(e){o(e)||n(8),i(e)&&(e=T(e));var t=S(this),r=C(this,e,void 0);return r[H].C=!0,j(t),r},t.finishDraft=function(e,t){var r=(e&&e[H]).A;return w(r,t),E(void 0,r)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){e&&!V&&n(20),this.O=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}var o=O("Patches").$;return i(e)?o(e,t):this.produce(e,(function(e){return o(e,t.slice(r+1))}))},e}()),Q=B.produce;B.produceWithPatches.bind(B),B.setAutoFreeze.bind(B),B.setUseProxies.bind(B),B.applyPatches.bind(B),B.createDraft.bind(B),B.finishDraft.bind(B);t.a=Q}}]);
//# sourceMappingURL=4.66665002.chunk.js.map