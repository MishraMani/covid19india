(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[18],{115:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));var e=r(89);function i(t,n){var r;if(void 0===n){var i,a=Object(e.a)(t);try{for(a.s();!(i=a.n()).done;){var o=i.value;null!=o&&(r>o||void 0===r&&o>=o)&&(r=o)}}catch(f){a.e(f)}finally{a.f()}}else{var c,u=-1,l=Object(e.a)(t);try{for(l.s();!(c=l.n()).done;){var s=c.value;null!=(s=n(s,++u,t))&&(r>s||void 0===r&&s>=s)&&(r=s)}}catch(f){l.e(f)}finally{l.f()}}return r}},129:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var e=r(89),i=r(92),a=Symbol("implicit");function o(){var t=new Map,n=[],r=[],c=a;function u(e){var i=e+"",o=t.get(i);if(!o){if(c!==a)return c;t.set(i,o=n.push(e))}return r[(o-1)%r.length]}return u.domain=function(r){if(!arguments.length)return n.slice();n=[],t=new Map;var i,a=Object(e.a)(r);try{for(a.s();!(i=a.n()).done;){var o=i.value,c=o+"";t.has(c)||t.set(c,n.push(o))}}catch(l){a.e(l)}finally{a.f()}return u},u.range=function(t){return arguments.length?(r=Array.from(t),u):r.slice()},u.unknown=function(t){return arguments.length?(c=t,u):c},u.copy=function(){return o(n,r).unknown(c)},i.b.apply(u,arguments),u}},131:function(t,n,r){"use strict";r.d(n,"b",(function(){return d})),r.d(n,"a",(function(){return h}));var e=Array.prototype.slice,i=function(t){return t},a=1e-6;function o(t){return"translate("+(t+.5)+",0)"}function c(t){return"translate(0,"+(t+.5)+")"}function u(t){return function(n){return+t(n)}}function l(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(r){return+t(r)+n}}function s(){return!this.__axis}function f(t,n){var r=[],f=null,d=null,h=6,v=6,b=3,g=1===t||4===t?-1:1,p=4===t||2===t?"x":"y",m=1===t||3===t?o:c;function y(e){var o=null==f?n.ticks?n.ticks.apply(n,r):n.domain():f,c=null==d?n.tickFormat?n.tickFormat.apply(n,r):i:d,y=Math.max(h,0)+b,O=n.range(),j=+O[0]+.5,x=+O[O.length-1]+.5,M=(n.bandwidth?l:u)(n.copy()),k=e.selection?e.selection():e,w=k.selectAll(".domain").data([null]),A=k.selectAll(".tick").data(o,n).order(),S=A.exit(),R=A.enter().append("g").attr("class","tick"),z=A.select("line"),F=A.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),A=A.merge(R),z=z.merge(R.append("line").attr("stroke","currentColor").attr(p+"2",g*h)),F=F.merge(R.append("text").attr("fill","currentColor").attr(p,g*y).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),e!==k&&(w=w.transition(e),A=A.transition(e),z=z.transition(e),F=F.transition(e),S=S.transition(e).attr("opacity",a).attr("transform",(function(t){return isFinite(t=M(t))?m(t):this.getAttribute("transform")})),R.attr("opacity",a).attr("transform",(function(t){var n=this.parentNode.__axis;return m(n&&isFinite(n=n(t))?n:M(t))}))),S.remove(),w.attr("d",4===t||2==t?v?"M"+g*v+","+j+"H0.5V"+x+"H"+g*v:"M0.5,"+j+"V"+x:v?"M"+j+","+g*v+"V0.5H"+x+"V"+g*v:"M"+j+",0.5H"+x),A.attr("opacity",1).attr("transform",(function(t){return m(M(t))})),z.attr(p+"2",g*h),F.attr(p,g*y).text(c),k.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),k.each((function(){this.__axis=M}))}return y.scale=function(t){return arguments.length?(n=t,y):n},y.ticks=function(){return r=e.call(arguments),y},y.tickArguments=function(t){return arguments.length?(r=null==t?[]:e.call(t),y):r.slice()},y.tickValues=function(t){return arguments.length?(f=null==t?null:e.call(t),y):f&&f.slice()},y.tickFormat=function(t){return arguments.length?(d=t,y):d},y.tickSize=function(t){return arguments.length?(h=v=+t,y):h},y.tickSizeInner=function(t){return arguments.length?(h=+t,y):h},y.tickSizeOuter=function(t){return arguments.length?(v=+t,y):v},y.tickPadding=function(t){return arguments.length?(b=+t,y):b},y}function d(t){return f(2,t)}function h(t){return f(3,t)}},156:function(t,n,r){"use strict";var e=r(1),i=r(88),a=i.a?e.useLayoutEffect:e.useEffect,o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};n.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(e.useState)(null),n=t[0],r=t[1],i=Object(e.useState)(o),c=i[0],u=i[1],l=Object(e.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var n=t[0].contentRect,r=n.x,e=n.y,i=n.width,a=n.height,o=n.top,c=n.left,l=n.bottom,s=n.right;u({x:r,y:e,width:i,height:a,top:o,left:c,bottom:l,right:s})}}))}),[]);return a((function(){if(n)return l.observe(n),function(){l.disconnect()}}),[n]),[r,c]}:function(){return[i.b,o]}},187:function(t,n,r){"use strict";r.d(n,"a",(function(){return c}));var e=r(82),i=r(188),a=r(92),o=r(129);function c(){var t,n,r=Object(o.a)().unknown(void 0),u=r.domain,l=r.range,s=0,f=1,d=!1,h=0,v=0,b=.5;function g(){var r=u().length,e=f<s,a=e?f:s,o=e?s:f;t=(o-a)/Math.max(1,r-h+2*v),d&&(t=Math.floor(t)),a+=(o-a-t*(r-h))*b,n=t*(1-h),d&&(a=Math.round(a),n=Math.round(n));var c=Object(i.a)(r).map((function(n){return a+t*n}));return l(e?c.reverse():c)}return delete r.unknown,r.domain=function(t){return arguments.length?(u(t),g()):u()},r.range=function(t){var n,r;return arguments.length?(n=t,r=Object(e.a)(n,2),s=r[0],f=r[1],s=+s,f=+f,g()):[s,f]},r.rangeRound=function(t){var n,r;return n=t,r=Object(e.a)(n,2),s=r[0],f=r[1],s=+s,f=+f,d=!0,g()},r.bandwidth=function(){return n},r.step=function(){return t},r.round=function(t){return arguments.length?(d=!!t,g()):d},r.padding=function(t){return arguments.length?(h=Math.min(1,v=+t),g()):h},r.paddingInner=function(t){return arguments.length?(h=Math.min(1,t),g()):h},r.paddingOuter=function(t){return arguments.length?(v=+t,g()):v},r.align=function(t){return arguments.length?(b=Math.max(0,Math.min(1,t)),g()):b},r.copy=function(){return c(u(),[s,f]).round(d).paddingInner(h).paddingOuter(v).align(b)},a.b.apply(g(),arguments)}},188:function(t,n,r){"use strict";n.a=function(t,n,r){t=+t,n=+n,r=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+r;for(var e=-1,i=0|Math.max(0,Math.ceil((n-t)/r)),a=new Array(i);++e<i;)a[e]=t+e*r;return a}},239:function(t,n,r){"use strict";r.r(n);var e=r(20),i=r(82),a=r(6),o=r(32),c=r(115),u=r(183),l=r(131),s=r(187),f=r(130),d=r(236),h=(r(101),r(83)),v=r.n(h),b=r(1),g=r(156),p=function(t,n){return Object(o.h)(t,"delta",n)},m=50,y=0,O=50,j=0;function x(t){var n=t.timeseries,r=t.statistic,h=t.lookback,v=Object(b.useRef)(),x=Object(g.a)(),M=Object(i.a)(x,2),w=M[0],A=M[1],S=A.width,R=A.height,z=Object.keys(n||{}).filter((function(t){return t<=Object(o.g)()})).slice(-h);return Object(b.useEffect)((function(){if(S){var t=Object(d.a)(v.current),e=S-y,i=R-O,h=Object(s.a)().domain(z).range([j,e]).paddingInner(S/1e3),b=Object(f.a)().domain([Math.min(0,Object(c.a)(z,(function(t){return p(null===n||void 0===n?void 0:n[t],r)}))||0),Math.max(1,Object(u.a)(z,(function(t){return p(null===n||void 0===n?void 0:n[t],r)}))||0)]).range([i,m]),g=Object(l.a)(h).tickSize(0).tickFormat((function(t){return Object(o.c)(t,"dd MMM")})),x=t.transition().duration(a.c);t.select(".x-axis").transition(x).style("transform","translateY(".concat(b(0),"px)")).call(g).on("start",(function(){return t.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(t,e){return p(null===n||void 0===n?void 0:n[t],r)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",a.u[r].color),t.selectAll(".bar").data(z).join((function(t){return t.append("path").attr("class","bar").attr("d",(function(t){return k(h(t),b(0),h.bandwidth(),0,5)}))})).transition(x).attr("d",(function(t){return k(h(t),b(0),h.bandwidth(),b(0)-b(p(null===n||void 0===n?void 0:n[t],r)),5)})).attr("fill",(function(t,n){return n<z.length-1?a.u[r].color+"90":a.u[r].color}));var M=t.selectAll(".label").data(z).join("text").attr("class","label").attr("x",(function(t){return h(t)+h.bandwidth()/2})).text((function(t){return Object(o.e)(p(null===n||void 0===n?void 0:n[t],r))}));M.transition(x).attr("fill",a.u[r].color).attr("y",(function(t){var e=p(null===n||void 0===n?void 0:n[t],r);return b(e)+(e<0?15:-6)})),M.append("tspan").attr("dy",(function(t){return"".concat(p(null===n||void 0===n?void 0:n[t],r)<0?1.2:-1.2,"em")})).attr("x",(function(t){return h(t)+h.bandwidth()/2})).text((function(t,e){if(0===e)return"";var i=p(null===n||void 0===n?void 0:n[z[e-1]],r);if(!i)return"";var a=p(null===n||void 0===n?void 0:n[t],r)-i;return"".concat(a>0?"+":"").concat(Object(o.e)(100*a/Math.abs(i)),"%")})).transition(x).attr("fill",a.u[r].color+"90")}}),[z,R,r,n,S]),Object(e.jsx)("div",{className:"DeltaBarGraph",ref:w,children:Object(e.jsxs)("svg",{ref:v,width:S,height:250,viewBox:"0 0 ".concat(S," ").concat(R),preserveAspectRatio:"xMidYMid meet",children:[Object(e.jsx)("g",{className:"x-axis"}),Object(e.jsx)("g",{className:"y-axis"})]})})}var M=function(t,n){return!n.forceRender&&(!(n.timeseries||!t.timeseries)||!(n.timeseries&&!t.timeseries)&&(!!v()(t.stateCode,n.stateCode)&&(!!v()(t.lookback,n.lookback)&&!!v()(t.statistic,n.statistic))))};function k(t,n,r,e,i){return i=Math.sign(e)*Math.min(Math.abs(e),i),["M ".concat(t," ").concat(n),"v ".concat(-e+i),"q 0 ".concat(-i," ").concat(Math.abs(i)," ").concat(-i),"h ".concat(r-2*Math.abs(i)),"q ".concat(Math.abs(i)," 0 ").concat(Math.abs(i)," ").concat(i),"v ".concat(e-i),"Z"].join(" ")}n.default=Object(b.memo)(x,M)},83:function(t,n,r){"use strict";t.exports=function t(n,r){if(n===r)return!0;if(n&&r&&"object"==typeof n&&"object"==typeof r){if(n.constructor!==r.constructor)return!1;var e,i,a;if(Array.isArray(n)){if((e=n.length)!=r.length)return!1;for(i=e;0!==i--;)if(!t(n[i],r[i]))return!1;return!0}if(n.constructor===RegExp)return n.source===r.source&&n.flags===r.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===r.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===r.toString();if((e=(a=Object.keys(n)).length)!==Object.keys(r).length)return!1;for(i=e;0!==i--;)if(!Object.prototype.hasOwnProperty.call(r,a[i]))return!1;for(i=e;0!==i--;){var o=a[i];if(!t(n[o],r[o]))return!1}return!0}return n!==n&&r!==r}}}]);
//# sourceMappingURL=18.f9668a07.chunk.js.map
