(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[33,32],{156:function(t,e,r){"use strict";r.r(e);var n=r(10),c=r(24),a=r(95),i=r(93),o=r.n(i),u=r(91),s=r.n(u),l=r(2),f=r(284),j=r(97),O=r(19);function b(t){var e=t.statistic,r=t.total,i=t.delta,o=Object(f.a)().t,u=Object(j.useSpring)({total:r,delta:i,config:n.v}),s=n.z[e];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h5",{children:o(Object(c.a)(s.displayName))}),Object(O.jsx)(j.animated.h4,{children:"active"!==e?i>0?u.delta.to((function(t){return"+ ".concat(Object(c.f)(t,"short"!==s.format?s.format:"long",e))})):Object(O.jsx)(a.m,{size:9,verticalAlign:2}):"\xa0"}),Object(O.jsx)(j.animated.h1,{children:u.total.to((function(t){return Object(c.f)(t,"short"!==s.format?s.format:"long",e)}))})]})}var d=Object(l.memo)(b);function h(t){var e=t.data,r=Object(l.useMemo)((function(){var t=[];return n.k.map((function(e,r){return t.push({animationDelay:"".concat(750+250*r,"ms"),width:"calc(".concat(100/n.k.length,"%)")}),null})),t}),[]);return Object(O.jsx)("div",{className:"Level",children:n.k.map((function(t,n){return Object(O.jsx)(j.animated.div,{className:o()("level-item","is-".concat(t),"fadeInUp"),style:r[n],children:Object(O.jsx)(d,{statistic:t,total:Object(c.i)(e,"total",t),delta:Object(c.i)(e,"delta",t)})},n)}))})}var m=function(t,e){return!!s()(t.data,e.data)};e.default=Object(l.memo)(h,m)},91:function(t,e,r){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,c,a;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(c=n;0!==c--;)if(!t(e[c],r[c]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(a=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(c=n;0!==c--;)if(!Object.prototype.hasOwnProperty.call(r,a[c]))return!1;for(c=n;0!==c--;){var i=a[c];if(!t(e[i],r[i]))return!1}return!0}return e!==e&&r!==r}}}]);
//# sourceMappingURL=33.591c5166.chunk.js.map
