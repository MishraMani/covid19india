(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[20],{158:function(e,t,n){"use strict";var r=n(2),i=n(95),o=["mousedown","touchstart"];t.a=function(e,t,n){void 0===n&&(n=o);var a=Object(r.useRef)(t);Object(r.useEffect)((function(){a.current=t}),[t]),Object(r.useEffect)((function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&a.current(t)},r=0,o=n;r<o.length;r++){var c=o[r];Object(i.d)(document,c,t)}return function(){for(var e=0,r=n;e<r.length;e++){var o=r[e];Object(i.c)(document,o,t)}}}),[n,e])}},176:function(e,t,n){"use strict";var r=n(2),i=n(95),o=i.a?window:null,a=function(e){return!!e.addEventListener},c=function(e){return!!e.on},u=function(e,t,n,u){void 0===n&&(n=o),Object(r.useEffect)((function(){if(t&&n)return a(n)?Object(i.d)(n,e,t,u):c(n)&&n.on(e,t,u),function(){a(n)?Object(i.c)(n,e,t,u):c(n)&&n.off(e,t,u)}}),[e,t,n,JSON.stringify(u)])},s=function(e,t,n,o){void 0===t&&(t=i.b),void 0===n&&(n={}),void 0===o&&(o=[e]);var a=n.event,c=void 0===a?"keydown":a,s=n.target,l=n.options,f=Object(r.useMemo)((function(){var n,r="function"===typeof(n=e)?n:"string"===typeof n?function(e){return e.key===n}:n?function(){return!0}:function(){return!1};return function(e){if(r(e))return t(e)}}),o);u(c,f,s,l)},l=function(e){var t=Object(r.useState)([!1,null]),n=t[0],i=t[1];return s(e,(function(e){return i([!0,e])}),{event:"keydown"},[n]),s(e,(function(e){return i([!1,e])}),{event:"keyup"},[n]),n},f=n(147);t.a=function(e,t,n,r){void 0===r&&(r=l);var i=r(e),o=i[0],a=i[1];Object(f.a)((function(){!o&&n?n(a):o&&t&&t(a)}),[o])}},216:function(e,t,n){!function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){var t,n,r,o,c,u,s,l,v,h,b,p,g,m,j,O,y,w,x,S,k,M,E,P,T,A,L,N,z,C,I,B,_,R,D=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},W="data-keen-slider-moves",Y="data-keen-slider-v",V=[],X=null,F=!1,H=!1,J=0,U=[];function q(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.addEventListener(t,n,r),V.push([e,t,n,r])}function K(e){if(w&&x===Q(e)&&se()){var n=te(e).x;if(!re(e)&&P)return $(e);P&&(Fe(),S=n,P=!1),e.cancelable&&e.preventDefault();var r=S-n;T+=Math.abs(r),!A&&T>5&&(A=!0,t.setAttribute(W,!0)),Be(E(r,Ze)*(fe()?-1:1),e.timeStamp),S=n}}function Z(e){w||!se()||ne(e.target)||(w=!0,P=!0,x=Q(e),A=!1,T=0,re(e),be(),y=h,S=te(e).x,Be(0,e.timeStamp),ce("dragStart"))}function $(e){w&&x===Q(e,!0)&&se()&&(t.removeAttribute(W),w=!1,me(),ce("dragEnd"))}function G(e){return e.changedTouches}function Q(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?G(e):ee(e);return t?t[0]?t[0].identifier:"error":"default"}function ee(e){return e.targetTouches}function te(e){var t=ee(e);return{x:ve()?t?t[0].screenY:e.pageY:t?t[0].screenX:e.pageX,timestamp:e.timeStamp}}function ne(e){return e.hasAttribute(O.preventEvent)}function re(e){var t=ee(e);if(!t)return!0;var n=t[0],r=ve()?n.clientY:n.clientX,i=ve()?n.clientX:n.clientY,o=void 0!==k&&void 0!==M&&Math.abs(M-i)<=Math.abs(k-r);return k=r,M=i,o}function ie(e){se()&&w&&e.preventDefault()}function oe(){q(window,"orientationchange",Le),q(window,"resize",(function(){return Ae()})),q(t,"dragstart",(function(e){se()&&e.preventDefault()})),q(t,"mousedown",Z),q(O.cancelOnLeave?t:window,"mousemove",K),O.cancelOnLeave&&q(t,"mouseleave",$),q(window,"mouseup",$),q(t,"touchstart",Z,{passive:!0}),q(t,"touchmove",K,{passive:!1}),q(t,"touchend",$,{passive:!0}),q(t,"touchcancel",$,{passive:!0}),q(window,"wheel",ie,{passive:!1})}function ae(){V.forEach((function(e){e[0].removeEventListener(e[1],e[2],e[3])})),V=[]}function ce(e){O[e]&&O[e](Ze)}function ue(){return O.centered}function se(){return void 0!==n?n:O.controls}function le(){return O.loop&&r>1}function fe(){return O.rtl}function de(){return!O.loop&&O.rubberband}function ve(){return!!O.vertical}function he(){L=window.requestAnimationFrame(pe)}function be(){L&&(window.cancelAnimationFrame(L),L=null),N=null}function pe(e){N||(N=e);var t=e-N,n=ge(t);if(t>=C)return Be(z-B,!1),R?R():void ce("afterChange");var r=_e(n);if(0===r||le()||de()||_){if(0!==r&&de()&&!_)return xe();B+=n,Be(n,!1),he()}else Be(n-r,!1)}function ge(e){return z*I(e/C)-B}function me(){switch(ce("beforeChange"),O.mode){case"free":ye();break;case"free-snap":we();break;default:je()}}function je(){Oe((1===s&&0!==b?y:h)+Math.sign(b))}function Oe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:O.duration,r=function(e){return 1+--e*e*e*e*e};Se(Ye(e=We(e,arguments.length>3&&void 0!==arguments[3]&&arguments[3],arguments.length>4&&void 0!==arguments[4]&&arguments[4])),n,r,t)}function ye(){if(0===g)return!(!_e(0)||le())&&Oe(h);var e=O.friction/Math.pow(Math.abs(g),-.5);Se(Math.pow(g,2)/e*Math.sign(g),6*Math.abs(g/e),(function(e){return 1-Math.pow(1-e,5)}))}function we(){if(0===g)return Oe(h);var e=O.friction/Math.pow(Math.abs(g),-.5),t=Math.pow(g,2)/e*Math.sign(g),n=6*Math.abs(g/e),r=(J+t)/(u/s);Se((-1===b?Math.floor(r):Math.ceil(r))*(u/s)-J,n,(function(e){return 1-Math.pow(1-e,5)}))}function xe(){if(be(),0===g)return Oe(h,!0);var e=.04/Math.pow(Math.abs(g),-.5),t=Math.pow(g,2)/e*Math.sign(g),n=function(e){return--e*e*e+1},r=g;Se(t,3*Math.abs(r/e),n,!0,(function(){Se(Ye(We(h)),500,n,!0)}))}function Se(e,t,n,r,i){be(),z=e,B=0,C=t,I=n,_=r,R=i,N=null,he()}function ke(n){var r=f(e);r.length&&(t=r[0],Ae(n),oe(),ce("mounted"))}function Me(){var e,t=D.breakpoints||[];for(var n in t)window.matchMedia(n).matches&&(e=n);if(e===X)return!0;var r=(X=e)?t[X]:D;r.breakpoints&&X&&delete r.breakpoints,O=i(i(i({},Ke),D),r),F=!0,v=null,ce("optionsChanged"),Te()}function Ee(e){if("function"==typeof e)return e();var t=O.autoAdjustSlidesPerView;t||(r=Math.max(e,r));var n=le()&&t?r-1:r;return d(e,1,Math.max(n,1))}function Pe(){Me(),H=!0,ce("created")}function Te(e,t){e&&(D=e),t&&(X=null),Ne(),ke(t)}function Ae(e){var n=window.innerWidth;if(Me()&&(n!==v||e)){v=n;var i=O.slides;"number"==typeof i?(c=null,r=i):(c=f(i,t),r=c?c.length:0);var a=O.dragSpeed;E="function"==typeof a?a:function(e){return e*a},u=ve()?t.offsetHeight:t.offsetWidth,s=Ee(O.slidesPerView),l=d(O.spacing,0,u/(s-1)-1),u+=l,o=ue()?(u/2-u/s/2)/u:0,Ce();var b=!H||F&&O.resetSlide?O.initial:h;qe(le()?b:Re(b)),ve()&&t.setAttribute(Y,!0),F=!1}}function Le(e){Ae(),setTimeout(Ae,500),setTimeout(Ae,2e3)}function Ne(){ae(),Ie(),t&&t.hasAttribute(Y)&&t.removeAttribute(Y),ce("destroyed")}function ze(){c&&c.forEach((function(e,t){var n=m[t].distance*u-t*(u/s-l/s-l/s*(s-1)),r=ve()?0:n,i=ve()?n:0,o="translate3d(".concat(r,"px, ").concat(i,"px, 0)");e.style.transform=o,e.style["-webkit-transform"]=o}))}function Ce(){c&&c.forEach((function(e){var t="calc(".concat(100/s,"% - ").concat(l/s*(s-1),"px)");ve()?(e.style["min-height"]=t,e.style["max-height"]=t):(e.style["min-width"]=t,e.style["max-width"]=t)}))}function Ie(){if(c){var e=["transform","-webkit-transform"];e=[].concat(a(e),ve?["min-height","max-height"]:["min-width","max-width"]),c.forEach((function(t){e.forEach((function(e){t.style.removeProperty(e)}))}))}}function Be(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Xe(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now()),t&&(e=Je(e)),J+=e,He()}function _e(e){var t=u*(r-1*(ue()?1:s))/s,n=J+e;return n>t?n-t:n<0?n:0}function Re(e){return d(e,0,r-1-(ue()?0:s-1))}function De(){var e=Math.abs(j),t=J<0?1-e:e;return{direction:b,progressTrack:t,progressSlides:t*r/(r-1),positions:m,position:J,speed:g,relativeSlide:(h%r+r)%r,absoluteSlide:h,size:r,slidesPerView:s,widthOrHeight:u}}function We(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return le()?t?Ve(e,n):e:Re(e)}function Ye(e){return-(-u/s*e+J)}function Ve(e,t){var n=(h%r+r)%r,i=n<(e=(e%r+r)%r)?-n-r+e:-(n-e),o=n>e?r-n+e:e-n,a=t?Math.abs(i)<=o?i:o:e<n?i:o;return h+a}function Xe(e,t){clearTimeout(p);var n=Math.sign(e);if(n!==b&&Fe(),b=n,U.push({distance:e,time:t}),p=setTimeout((function(){U=[],g=0}),50),(U=U.slice(-6)).length<=1||0===b)return g=0;var r=U.slice(0,-1).reduce((function(e,t){return e+t.distance}),0),i=U[U.length-1].time,o=U[0].time;g=d(r/(i-o),-10,10)}function Fe(){U=[]}function He(){j=le()?J%(u*r/s)/(u*r/s):J/(u*r/s),Ue();for(var e=[],t=0;t<r;t++){var n=(1/r*t-(j<0&&le()?j+1:j))*r/s+o;le()&&(n+=n>(r-1)/s?-r/s:n<-r/s+1?r/s:0);var i=1/s,a=n+i,c=a<i?a/i:a>1?1-(a-1)*s/1:1;e.push({portion:c<0||c>1?0:c,distance:fe()?-1*n+1-i:n})}m=e,ze(),ce("move")}function Je(e){if(le())return e;var t,n=_e(e);return de()?0===n?e:e*(t=n/u,(1-Math.abs(t))*(1-Math.abs(t))):e-n}function Ue(){var e=Math.round(J/(u/s));e!==h&&(!le()&&(e<0||e>r-1)||(h=e,ce("slideChanged")))}function qe(e){ce("beforeChange"),Be(Ye(e),!1),ce("afterChange")}var Ke={autoAdjustSlidesPerView:!0,centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},Ze={controls:function(e){n=e},destroy:Ne,refresh:function(e){Te(e,!0)},next:function(){Oe(h+1,!0)},prev:function(){Oe(h-1,!0)},moveToSlide:function(e,t){Oe(e,!0,t)},moveToSlideRelative:function(e){Oe(e,!0,arguments.length>2?arguments[2]:void 0,!0,arguments.length>1&&void 0!==arguments[1]&&arguments[1])},resize:function(){Ae(!0)},details:function(){return De()},options:function(){var e=i({},O);return delete e.breakpoints,e}};return Pe(),Ze}function l(e){return Array.prototype.slice.call(e)}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof e?l(e()):"string"==typeof e?l(t.querySelectorAll(e)):e instanceof HTMLElement!=0?[e]:e instanceof NodeList!=0?e:[]}function d(e,t,n){return Math.min(Math.max(e,t),n)}Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});var v=function e(t,n){var r=Object.prototype.toString.call(t);if(r!==Object.prototype.toString.call(n))return!1;if(["[object Array]","[object Object]"].indexOf(r)<0)return!1;var i="[object Array]"===r?t.length:Object.keys(t).length;if(i!==("[object Array]"===r?n.length:Object.keys(n).length))return!1;var o=function(t,n){var r=Object.prototype.toString.call(t);if(["[object Array]","[object Object]"].indexOf(r)>=0){if(!e(t,n))return!1}else{if(r!==Object.prototype.toString.call(n))return!1;if("[object Function]"===r){if(t.toString()!==n.toString())return!1}else if(t!==n)return!1}};if("[object Array]"===r){for(var a=0;a<i;a++)if(!1===o(t[a],n[a]))return!1}else for(var c in t)if(t.hasOwnProperty(c)&&!1===o(t[c],n[c]))return!1;return!0};e.default=s,e.useKeenSlider=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.useRef(),r=t.useRef();function i(e){return v(r.current,e)||(r.current=e),r.current}var a=o(t.useState(null),2),c=a[0],u=a[1];return t.useEffect((function(){var e=new s(n.current,r.current);return u(e),function(){e.destroy()}}),[i(e)]),[n,c]},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(2))},217:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var r=n(46),i=n(24),o=n(97),a=n(94),c=n.n(a),u=n(93),s=n.n(u),l=n(216),f=(n(217),n(2)),d=n.n(f),v=n(54),h=n.n(v),b=n(23),p=n.n(b);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var j=Object(f.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,a=m(e,["color","size"]);return d.a.createElement("svg",g({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),d.a.createElement("polygon",{points:"13 19 22 12 13 5 13 19"}),d.a.createElement("polygon",{points:"2 19 11 12 2 5 2 19"}))}));j.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},j.displayName="FastForward";var O=j;function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var x=Object(f.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,a=w(e,["color","size"]);return d.a.createElement("svg",y({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),d.a.createElement("rect",{x:"6",y:"4",width:"4",height:"16"}),d.a.createElement("rect",{x:"14",y:"4",width:"4",height:"16"}))}));x.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},x.displayName="Pause";var S=x;function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var E=Object(f.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,a=M(e,["color","size"]);return d.a.createElement("svg",k({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),d.a.createElement("polygon",{points:"5 3 19 12 5 21 5 3"}))}));E.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},E.displayName="Play";var P=E,T=n(293),A=n(99),L=n(158),N=n(176),z=n(19),C=Object(f.lazy)((function(){return Object(i.l)((function(){return Promise.all([n.e(16),n.e(42)]).then(n.bind(null,275))}))}));function I(e){var t=this,n=e.date,a=e.setDate,u=e.dates,s=(e.isTimelineMode,e.setIsTimelineMode),d=Object(T.a)().t,v=Object(f.useState)(null),b=Object(r.a)(v,2),p=b[0],g=b[1],m=Object(f.useState)(!1),j=Object(r.a)(m,2),y=j[0],w=j[1],x=Object(f.useState)(!1),k=Object(r.a)(x,2),M=k[0],E=k[1],I=Object(f.useRef)(),B=Object(f.useRef)();Object(L.a)(I,(function(){E(!1)}));var _=Object(l.useKeenSlider)({initial:""===n?Math.max(0,u.length-2):u.indexOf(n),dragSpeed:function(e,t){var n=t.details().widthOrHeight;return e*(n/(n/2*Math.tan(Math.PI/180*20))/1)},move:function(e){g(e.details())},afterChange:function(e){var t=e.details().absoluteSlide;t===e.details().size-1?h.a.unstable_batchedUpdates((function(){s(!1),E(!1),a("")})):a(u[t])},mode:"free-snap",slides:u.length,slidesPerView:1}),R=Object(r.a)(_,2),D=R[0],W=R[1],Y=Object(f.useState)(0),V=Object(r.a)(Y,2),X=V[0],F=V[1];Object(f.useEffect)((function(){W&&F(W.details().widthOrHeight)}),[W]);var H=function(e){return e===Object(i.g)()?d("Today"):e===Object(i.h)()?d("Yesterday"):Object(i.c)(e,"dd MMM y")},J=Object(f.useMemo)((function(){if(!p)return[];for(var e=[],t=0;t<p.size;t++){var n=1*p.positions[t].distance,r=Math.abs(n)>9?180:20*n,i={transform:"rotateY(".concat(r,"deg) translateZ(").concat(X,"px)"),WebkitTransform:"rotateY(".concat(r,"deg) translateZ(").concat(X,"px)")},o=t===p.absoluteSlide?"current":"",a=p.absoluteSlide+Math.round(n);Math.abs(n)<5&&e.push({className:o,style:i,slide:a})}return e}),[p,X]);Object(N.a)("ArrowLeft",(function(){W&&W.prev()})),Object(N.a)("ArrowRight",(function(){W&&W.next()})),Object(N.a)("Escape",(function(){w(!1),W&&W.moveToSlide(p.size-1)})),Object(N.a)("Enter",(function(){w(!y)}));var U=function(e){e===(null===p||void 0===p?void 0:p.absoluteSlide)?E(!M):W&&W.moveToSlide(e)},q={"2020-03-25":d("Beginning of Lockdown Phase 1"),"2020-04-14":d("End of Lockdown Phase 1"),"2020-04-15":d("Beginning of Lockdown Phase 2"),"2020-05-03":d("End of Lockdown Phase 2"),"2020-05-04":d("Beginning of Lockdown Phase 3"),"2020-05-17":d("End of Lockdown Phase 3"),"2020-05-18":d("Beginning of Lockdown Phase 4"),"2020-05-31":d("End of Lockdown Phase 4"),"2020-06-01":d("Beginning of Lockdown Phase 5"),"2020-11-20":"\ud83e\udd40"};Object(f.useEffect)((function(){return B.current=setInterval((function(){y&&W&&W.next()}),2500),function(){clearInterval(B.current)}}),[y,W]);var K=Object(A.useTransition)(M,{from:{pointerEvents:"none",paddingTop:0,marginBottom:0,height:0,opacity:0},enter:{pointerEvents:"all",paddingTop:36,marginBottom:400,opacity:1},leave:{pointerEvents:"none",paddingTop:0,marginBottom:0,height:0,opacity:0},config:{mass:1,tension:100,friction:15}});return Object(z.jsxs)("div",{className:"Timeline",ref:I,children:[Object(z.jsxs)("div",{className:"actions timeline fadeInUp",onWheel:function(e){W&&(e.deltaX>0?W.next():e.deltaX<0&&W.prev())},children:[Object(z.jsxs)("div",{className:"wheel-buttons",children:[Object(z.jsx)("div",{className:"wheel-button left",onClick:U.bind(this,0),children:Object(z.jsx)(O,{})}),Object(z.jsx)("div",{className:c()("wheel-button",{active:y}),onClick:w.bind(this,!y),children:y?Object(z.jsx)(S,{}):Object(z.jsx)(P,{})}),Object(z.jsx)("div",{className:"wheel-button",onClick:U.bind(this,u.length-1),children:Object(z.jsx)(O,{})})]}),Object(z.jsxs)("div",{className:"wheel",ref:D,children:[Object(z.jsx)("div",{className:"wheel__inner",children:Object(z.jsx)("div",{className:"wheel__slides",children:J.map((function(e){var n=e.className,r=e.style,i=e.slide;return Object(z.jsxs)("div",{className:"wheel__slide",style:r,children:[Object(z.jsx)("h5",{className:n,onClick:U.bind(t,i),children:H(u[i])}),Object(z.jsx)("div",{className:c()("calendar-icon",{show:i===(null===p||void 0===p?void 0:p.absoluteSlide)}),onClick:E.bind(t,!M),children:i!==p.size-1&&Object(z.jsx)(o.f,{size:12})})]},i)}))})}),J.map((function(e){var t=e.slide;return Object.keys(q).includes(u[t])&&Object(z.jsx)("h5",{className:c()("highlight",{current:t===(null===p||void 0===p?void 0:p.absoluteSlide)}),children:q[u[t]]},t)}))]})]}),Object(z.jsx)(f.Suspense,{fallback:Object(z.jsx)("div",{}),children:K((function(e,t){return t&&Object(z.jsx)(A.animated.div,{style:e,children:Object(z.jsx)(C,{date:n,dates:u,slider:W})})}))})]})}var B=function(e,t){return!!s()(t.date,e.date)&&(!!s()(t.isTimelineMode,e.isTimelineMode)&&!!s()(t.dates,e.dates))};t.default=Object(f.memo)(I,B)}}]);
//# sourceMappingURL=20.e7d4c73e.chunk.js.map
