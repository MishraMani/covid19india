(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[20],{115:function(t,n,r){"use strict";var e=r(2),i=r(92),a=i.a?e.useLayoutEffect:e.useEffect,o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};n.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(e.useState)(null),n=t[0],r=t[1],i=Object(e.useState)(o),c=i[0],u=i[1],s=Object(e.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var n=t[0].contentRect,r=n.x,e=n.y,i=n.width,a=n.height,o=n.top,c=n.left,s=n.bottom,l=n.right;u({x:r,y:e,width:i,height:a,top:o,left:c,bottom:s,right:l})}}))}),[]);return a((function(){if(n)return s.observe(n),function(){s.disconnect()}}),[n]),[r,c]}:function(){return[i.b,o]}},144:function(t,n,r){"use strict";r.d(n,"b",(function(){return f})),r.d(n,"a",(function(){return d}));var e=function(t){return t},i=1e-6;function a(t){return"translate("+t+",0)"}function o(t){return"translate(0,"+t+")"}function c(t){return function(n){return+t(n)}}function u(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),function(r){return+t(r)+n}}function s(){return!this.__axis}function l(t,n){var r=[],l=null,f=null,d=6,h=6,b=3,g="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,m=1===t||4===t?-1:1,v=4===t||2===t?"x":"y",p=1===t||3===t?a:o;function O(a){var o=null==l?n.ticks?n.ticks.apply(n,r):n.domain():l,O=null==f?n.tickFormat?n.tickFormat.apply(n,r):e:f,j=Math.max(d,0)+b,y=n.range(),x=+y[0]+g,M=+y[y.length-1]+g,k=(n.bandwidth?u:c)(n.copy(),g),w=a.selection?a.selection():a,A=w.selectAll(".domain").data([null]),S=w.selectAll(".tick").data(o,n).order(),R=S.exit(),z=S.enter().append("g").attr("class","tick"),C=S.select("line"),F=S.select("text");A=A.merge(A.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),S=S.merge(z),C=C.merge(z.append("line").attr("stroke","currentColor").attr(v+"2",m*d)),F=F.merge(z.append("text").attr("fill","currentColor").attr(v,m*j).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),a!==w&&(A=A.transition(a),S=S.transition(a),C=C.transition(a),F=F.transition(a),R=R.transition(a).attr("opacity",i).attr("transform",(function(t){return isFinite(t=k(t))?p(t+g):this.getAttribute("transform")})),z.attr("opacity",i).attr("transform",(function(t){var n=this.parentNode.__axis;return p((n&&isFinite(n=n(t))?n:k(t))+g)}))),R.remove(),A.attr("d",4===t||2===t?h?"M"+m*h+","+x+"H"+g+"V"+M+"H"+m*h:"M"+g+","+x+"V"+M:h?"M"+x+","+m*h+"V"+g+"H"+M+"V"+m*h:"M"+x+","+g+"H"+M),S.attr("opacity",1).attr("transform",(function(t){return p(k(t)+g)})),C.attr(v+"2",m*d),F.attr(v,m*j).text(O),w.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),w.each((function(){this.__axis=k}))}return O.scale=function(t){return arguments.length?(n=t,O):n},O.ticks=function(){return r=Array.from(arguments),O},O.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),O):r.slice()},O.tickValues=function(t){return arguments.length?(l=null==t?null:Array.from(t),O):l&&l.slice()},O.tickFormat=function(t){return arguments.length?(f=t,O):f},O.tickSize=function(t){return arguments.length?(d=h=+t,O):d},O.tickSizeInner=function(t){return arguments.length?(d=+t,O):d},O.tickSizeOuter=function(t){return arguments.length?(h=+t,O):h},O.tickPadding=function(t){return arguments.length?(b=+t,O):b},O.offset=function(t){return arguments.length?(g=+t,O):g},O}function f(t){return l(2,t)}function d(t){return l(3,t)}},208:function(t,n,r){"use strict";r.r(n);var e=r(47),i=r(10),a=r(24),o=r(211),c=r(144),u=r(209),s=r(142),l=r(252),f=(r(101),r(91)),d=r.n(f),h=r(2),b=r(115),g=r(19),m=50,v=0,p=50,O=0;function j(t){var n=t.timeseries,r=t.statistic,f=t.lookback,d=Object(h.useRef)(),j=Object(b.a)(),y=Object(e.a)(j,2),M=y[0],k=y[1],w=k.width,A=k.height,S=Object.keys(n||{}).filter((function(t){return t<=Object(a.h)()})).slice(-f),R=Object(h.useCallback)((function(t,r){return Object(a.i)(null===n||void 0===n?void 0:n[t],"delta",r)}),[n]);return Object(h.useEffect)((function(){if(w){var t=Object(l.a)(d.current),n=w-v,f=A-p,h=Object(u.a)().domain(S).range([O,n]).paddingInner(w/1e3),b=Object(o.a)(S,(function(t){return R(t,r)})),g=Object(e.a)(b,2),j=g[0],y=g[1],M=Object(s.a)().domain([Math.min(0,j||0),Math.max(1,y||0)]).range([f,m]),k=Object(c.a)(h).tickSize(0).tickFormat((function(t){return Object(a.c)(t,"dd MMM")})),z=t.transition().duration(i.d),C=i.z[r];t.select(".x-axis").transition(z).style("transform","translate3d(0, ".concat(M(0),"px, 0)")).call(k).on("start",(function(){return t.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(t,n){return R(t,r)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",C.color),t.selectAll(".bar").data(S).join((function(t){return t.append("path").attr("class","bar").attr("d",(function(t){return x(h(t),M(0),h.bandwidth(),0,5)}))})).transition(z).attr("d",(function(t){return x(h(t),M(0),h.bandwidth(),M(0)-M(R(t,r)),5)})).attr("fill",(function(t,n){return n<S.length-1?C.color+"90":C.color}));var F=t.selectAll(".label").data(S).join("text").attr("class","label").attr("x",(function(t){return h(t)+h.bandwidth()/2})).text((function(t){return Object(a.f)(R(t,r),(null===C||void 0===C?void 0:C.showDelta)||(null===C||void 0===C?void 0:C.nonLinear)?C.format:"short")}));F.transition(z).attr("fill",C.color).attr("y",(function(t){var n=R(t,r);return M(n)+(n<0?15:-6)})),F.append("tspan").attr("dy",(function(t){return"".concat(R(t,r)<0?1.2:-1.2,"em")})).attr("x",(function(t){return h(t)+h.bandwidth()/2})).text((function(t,n){if(0===n)return"";var e=R(S[n-1],r);if(!e)return"";var i=R(t,r)-e;return"".concat(i>0?"+":"").concat(Object(a.f)(100*i/Math.abs(e),"%"))})).transition(z).attr("fill",C.color+"90")}}),[S,A,r,w,R]),Object(g.jsx)("div",{className:"DeltaBarGraph",ref:M,children:Object(g.jsxs)("svg",{ref:d,width:w,height:250,viewBox:"0 0 ".concat(w," ").concat(A),preserveAspectRatio:"xMidYMid meet",children:[Object(g.jsx)("g",{className:"x-axis"}),Object(g.jsx)("g",{className:"y-axis"})]})})}var y=function(t,n){return!n.forceRender&&(!(n.timeseries||!t.timeseries)||!(n.timeseries&&!t.timeseries)&&(!!d()(t.stateCode,n.stateCode)&&(!!d()(t.lookback,n.lookback)&&!!d()(t.statistic,n.statistic))))};function x(t,n,r,e,i){return i=Math.sign(e)*Math.min(Math.abs(e),i),["M ".concat(t," ").concat(n),"v ".concat(-e+i),"q 0 ".concat(-i," ").concat(Math.abs(i)," ").concat(-i),"h ".concat(r-2*Math.abs(i)),"q ".concat(Math.abs(i)," 0 ").concat(Math.abs(i)," ").concat(i),"v ".concat(e-i),"Z"].join(" ")}n.default=Object(h.memo)(j,y)},209:function(t,n,r){"use strict";r.d(n,"a",(function(){return c}));var e=r(47),i=r(210),a=r(49),o=r(70);function c(){var t,n,r=Object(o.a)().unknown(void 0),u=r.domain,s=r.range,l=0,f=1,d=!1,h=0,b=0,g=.5;function m(){var r=u().length,e=f<l,a=e?f:l,o=e?l:f;t=(o-a)/Math.max(1,r-h+2*b),d&&(t=Math.floor(t)),a+=(o-a-t*(r-h))*g,n=t*(1-h),d&&(a=Math.round(a),n=Math.round(n));var c=Object(i.a)(r).map((function(n){return a+t*n}));return s(e?c.reverse():c)}return delete r.unknown,r.domain=function(t){return arguments.length?(u(t),m()):u()},r.range=function(t){var n,r;return arguments.length?(n=t,r=Object(e.a)(n,2),l=r[0],f=r[1],l=+l,f=+f,m()):[l,f]},r.rangeRound=function(t){var n,r;return n=t,r=Object(e.a)(n,2),l=r[0],f=r[1],l=+l,f=+f,d=!0,m()},r.bandwidth=function(){return n},r.step=function(){return t},r.round=function(t){return arguments.length?(d=!!t,m()):d},r.padding=function(t){return arguments.length?(h=Math.min(1,b=+t),m()):h},r.paddingInner=function(t){return arguments.length?(h=Math.min(1,t),m()):h},r.paddingOuter=function(t){return arguments.length?(b=+t,m()):b},r.align=function(t){return arguments.length?(g=Math.max(0,Math.min(1,t)),m()):g},r.copy=function(){return c(u(),[l,f]).round(d).paddingInner(h).paddingOuter(b).align(g)},a.b.apply(m(),arguments)}},210:function(t,n,r){"use strict";n.a=function(t,n,r){t=+t,n=+n,r=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+r;for(var e=-1,i=0|Math.max(0,Math.ceil((n-t)/r)),a=new Array(i);++e<i;)a[e]=t+e*r;return a}},211:function(t,n,r){"use strict";var e=r(25);n.a=function(t,n){var r,i;if(void 0===n){var a,o=Object(e.a)(t);try{for(o.s();!(a=o.n()).done;){var c=a.value;null!=c&&(void 0===r?c>=c&&(r=i=c):(r>c&&(r=c),i<c&&(i=c)))}}catch(d){o.e(d)}finally{o.f()}}else{var u,s=-1,l=Object(e.a)(t);try{for(l.s();!(u=l.n()).done;){var f=u.value;null!=(f=n(f,++s,t))&&(void 0===r?f>=f&&(r=i=f):(r>f&&(r=f),i<f&&(i=f)))}}catch(d){l.e(d)}finally{l.f()}}return[r,i]}},91:function(t,n,r){"use strict";t.exports=function t(n,r){if(n===r)return!0;if(n&&r&&"object"==typeof n&&"object"==typeof r){if(n.constructor!==r.constructor)return!1;var e,i,a;if(Array.isArray(n)){if((e=n.length)!=r.length)return!1;for(i=e;0!==i--;)if(!t(n[i],r[i]))return!1;return!0}if(n.constructor===RegExp)return n.source===r.source&&n.flags===r.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===r.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===r.toString();if((e=(a=Object.keys(n)).length)!==Object.keys(r).length)return!1;for(i=e;0!==i--;)if(!Object.prototype.hasOwnProperty.call(r,a[i]))return!1;for(i=e;0!==i--;){var o=a[i];if(!t(n[o],r[o]))return!1}return!0}return n!==n&&r!==r}}}]);
//# sourceMappingURL=20.9fb03057.chunk.js.map
