(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[21],{108:function(t,e,n){"use strict";n.d(e,"a",(function(){return D}));var r,i=[],o="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var u,a=function(){function t(t,e,n,r){return this.x=t,this.y=e,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),c=function(t){return t instanceof SVGElement&&"getBBox"in t},s=function(t){if(c(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var i=t,o=i.offsetWidth,u=i.offsetHeight;return!(o||u||t.getClientRects().length)},f=function(t){var e,n,r=null===(n=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&t instanceof r.Element)},l="undefined"!==typeof window?window:{},h=new WeakMap,d=/auto|scroll/,p=/^tb|vertical/,v=/msie|trident/i.test(l.navigator&&l.navigator.userAgent),g=function(t){return parseFloat(t||"0")},b=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?e:t)||0,blockSize:(n?t:e)||0})},m=Object.freeze({devicePixelContentBoxSize:b(),borderBoxSize:b(),contentBoxSize:b(),contentRect:new a(0,0,0,0)}),y=function(t,e){if(void 0===e&&(e=!1),h.has(t)&&!e)return h.get(t);if(s(t))return h.set(t,m),m;var n=getComputedStyle(t),r=c(t)&&t.ownerSVGElement&&t.getBBox(),i=!v&&"border-box"===n.boxSizing,o=p.test(n.writingMode||""),u=!r&&d.test(n.overflowY||""),f=!r&&d.test(n.overflowX||""),l=r?0:g(n.paddingTop),y=r?0:g(n.paddingRight),x=r?0:g(n.paddingBottom),w=r?0:g(n.paddingLeft),O=r?0:g(n.borderTopWidth),E=r?0:g(n.borderRightWidth),T=r?0:g(n.borderBottomWidth),z=w+y,S=l+x,k=(r?0:g(n.borderLeftWidth))+E,M=O+T,B=f?t.offsetHeight-M-t.clientHeight:0,R=u?t.offsetWidth-k-t.clientWidth:0,j=i?z+k:0,C=i?S+M:0,F=r?r.width:g(n.width)-j-R,N=r?r.height:g(n.height)-C-B,_=F+z+R+k,A=N+S+B+M,V=Object.freeze({devicePixelContentBoxSize:b(Math.round(F*devicePixelRatio),Math.round(N*devicePixelRatio),o),borderBoxSize:b(_,A,o),contentBoxSize:b(F,N,o),contentRect:new a(w,l,F,N)});return h.set(t,V),V},x=function(t,e,n){var i=y(t,n),o=i.borderBoxSize,u=i.contentBoxSize,a=i.devicePixelContentBoxSize;switch(e){case r.DEVICE_PIXEL_CONTENT_BOX:return a;case r.BORDER_BOX:return o;default:return u}},w=function(t){var e=y(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=[e.borderBoxSize],this.contentBoxSize=[e.contentBoxSize],this.devicePixelContentBoxSize=[e.devicePixelContentBoxSize]},O=function(t){if(s(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},E=function(){var t=1/0,e=[];i.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(e){var n=new w(e.target),i=O(e.target);r.push(n),e.lastReportedSize=x(e.target,e.observedBox),i<t&&(t=i)})),e.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=e;n<r.length;n++){(0,r[n])()}return t},T=function(t){i.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(n){n.isActive()&&(O(n.target)>t?e.activeTargets.push(n):e.skippedTargets.push(n))}))}))},z=function(){var t=0;for(T(t);i.some((function(t){return t.activeTargets.length>0}));)t=E(),T(t);return i.some((function(t){return t.skippedTargets.length>0}))&&function(){var t;"function"===typeof ErrorEvent?t=new ErrorEvent("error",{message:o}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=o),window.dispatchEvent(t)}(),t>0},S=[],k=function(t){if(!u){var e=0,n=document.createTextNode("");new MutationObserver((function(){return S.splice(0).forEach((function(t){return t()}))})).observe(n,{characterData:!0}),u=function(){n.textContent=""+(e?e--:e++)}}S.push(t),u()},M=0,B={attributes:!0,characterData:!0,childList:!0,subtree:!0},R=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],j=function(t){return void 0===t&&(t=0),Date.now()+t},C=!1,F=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!C){C=!0;var n,r=j(t);n=function(){var n=!1;try{n=z()}finally{if(C=!1,t=r-j(),!M)return;n?e.run(1e3):t>0?e.run(t):e.start()}},k((function(){requestAnimationFrame(n)}))}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,B)};document.body?e():l.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),R.forEach((function(e){return l.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),R.forEach((function(e){return l.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),N=function(t){!M&&t>0&&F.start(),!(M+=t)&&F.stop()},_=function(){function t(t,e){this.target=t,this.observedBox=e||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=x(this.target,this.observedBox,!0);return t=this.target,c(t)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),A=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},V=new WeakMap,X=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},P=function(){function t(){}return t.connect=function(t,e){var n=new A(t,e);V.set(t,n)},t.observe=function(t,e,n){var r=V.get(t),o=0===r.observationTargets.length;X(r.observationTargets,e)<0&&(o&&i.push(r),r.observationTargets.push(new _(e,n&&n.box)),N(1),F.schedule())},t.unobserve=function(t,e){var n=V.get(t),r=X(n.observationTargets,e),o=1===n.observationTargets.length;r>=0&&(o&&i.splice(i.indexOf(n),1),n.observationTargets.splice(r,1),N(-1))},t.disconnect=function(t){var e=this,n=V.get(t);n.observationTargets.slice().forEach((function(n){return e.unobserve(t,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},t}(),D=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");P.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");P.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");P.unobserve(this,t)},t.prototype.disconnect=function(){P.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}()},116:function(t,e,n){"use strict";e.a=function(t){for(var e;e=t.sourceEvent;)t=e;return t}},131:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return d}));var r=Array.prototype.slice,i=function(t){return t},o=1e-6;function u(t){return"translate("+(t+.5)+",0)"}function a(t){return"translate(0,"+(t+.5)+")"}function c(t){return function(e){return+t(e)}}function s(t){var e=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}function f(){return!this.__axis}function l(t,e){var n=[],l=null,h=null,d=6,p=6,v=3,g=1===t||4===t?-1:1,b=4===t||2===t?"x":"y",m=1===t||3===t?u:a;function y(r){var u=null==l?e.ticks?e.ticks.apply(e,n):e.domain():l,a=null==h?e.tickFormat?e.tickFormat.apply(e,n):i:h,y=Math.max(d,0)+v,x=e.range(),w=+x[0]+.5,O=+x[x.length-1]+.5,E=(e.bandwidth?s:c)(e.copy()),T=r.selection?r.selection():r,z=T.selectAll(".domain").data([null]),S=T.selectAll(".tick").data(u,e).order(),k=S.exit(),M=S.enter().append("g").attr("class","tick"),B=S.select("line"),R=S.select("text");z=z.merge(z.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),S=S.merge(M),B=B.merge(M.append("line").attr("stroke","currentColor").attr(b+"2",g*d)),R=R.merge(M.append("text").attr("fill","currentColor").attr(b,g*y).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),r!==T&&(z=z.transition(r),S=S.transition(r),B=B.transition(r),R=R.transition(r),k=k.transition(r).attr("opacity",o).attr("transform",(function(t){return isFinite(t=E(t))?m(t):this.getAttribute("transform")})),M.attr("opacity",o).attr("transform",(function(t){var e=this.parentNode.__axis;return m(e&&isFinite(e=e(t))?e:E(t))}))),k.remove(),z.attr("d",4===t||2==t?p?"M"+g*p+","+w+"H0.5V"+O+"H"+g*p:"M0.5,"+w+"V"+O:p?"M"+w+","+g*p+"V0.5H"+O+"V"+g*p:"M"+w+",0.5H"+O),S.attr("opacity",1).attr("transform",(function(t){return m(E(t))})),B.attr(b+"2",g*d),R.attr(b,g*y).text(a),T.filter(f).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),T.each((function(){this.__axis=E}))}return y.scale=function(t){return arguments.length?(e=t,y):e},y.ticks=function(){return n=r.call(arguments),y},y.tickArguments=function(t){return arguments.length?(n=null==t?[]:r.call(t),y):n.slice()},y.tickValues=function(t){return arguments.length?(l=null==t?null:r.call(t),y):l&&l.slice()},y.tickFormat=function(t){return arguments.length?(h=t,y):h},y.tickSize=function(t){return arguments.length?(d=p=+t,y):d},y.tickSizeInner=function(t){return arguments.length?(d=+t,y):d},y.tickSizeOuter=function(t){return arguments.length?(p=+t,y):p},y.tickPadding=function(t){return arguments.length?(v=+t,y):v},y}function h(t){return l(2,t)}function d(t){return l(3,t)}},149:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return v}));var r=n(235),i=n(256),o=n(110),u=n(98),a=n(92);function c(t){return Math.log(t)}function s(t){return Math.exp(t)}function f(t){return-Math.log(-t)}function l(t){return-Math.exp(-t)}function h(t){return isFinite(t)?+("1e"+t):t<0?0:t}function d(t){return function(e){return-t(-e)}}function p(t){var e,n,u=t(c,s),a=u.domain,p=10;function v(){return e=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(e){return Math.log(e)/t})}(p),n=function(t){return 10===t?h:t===Math.E?Math.exp:function(e){return Math.pow(t,e)}}(p),a()[0]<0?(e=d(e),n=d(n),t(f,l)):t(c,s),u}return u.base=function(t){return arguments.length?(p=+t,v()):p},u.domain=function(t){return arguments.length?(a(t),v()):a()},u.ticks=function(t){var i,o=a(),u=o[0],c=o[o.length-1];(i=c<u)&&(h=u,u=c,c=h);var s,f,l,h=e(u),d=e(c),v=null==t?10:+t,g=[];if(!(p%1)&&d-h<v){if(h=Math.floor(h),d=Math.ceil(d),u>0){for(;h<=d;++h)for(f=1,s=n(h);f<p;++f)if(!((l=s*f)<u)){if(l>c)break;g.push(l)}}else for(;h<=d;++h)for(f=p-1,s=n(h);f>=1;--f)if(!((l=s*f)<u)){if(l>c)break;g.push(l)}2*g.length<v&&(g=Object(r.a)(u,c,v))}else g=Object(r.a)(h,d,Math.min(d-h,v)).map(n);return i?g.reverse():g},u.tickFormat=function(t,r){if(null==r&&(r=10===p?".0e":","),"function"!==typeof r&&(r=Object(i.a)(r)),t===1/0)return r;null==t&&(t=10);var o=Math.max(1,p*t/u.ticks().length);return function(t){var i=t/n(Math.round(e(t)));return i*p<p-.5&&(i*=p),i<=o?r(t):""}},u.nice=function(){return a(Object(o.a)(a(),{floor:function(t){return n(Math.floor(e(t)))},ceil:function(t){return n(Math.ceil(e(t)))}}))},u}function v(){var t=p(Object(u.d)()).domain([1,10]);return t.copy=function(){return Object(u.a)(t,v()).base(t.base())},a.b.apply(t,arguments),t}},154:function(t,e,n){"use strict";var r=n(116);e.a=function(t,e){if(t=Object(r.a)(t),void 0===e&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,[(i=i.matrixTransform(e.getScreenCTM().inverse())).x,i.y]}if(e.getBoundingClientRect){var o=e.getBoundingClientRect();return[t.clientX-o.left-e.clientLeft,t.clientY-o.top-e.clientTop]}}return[t.pageX,t.pageY]}},206:function(t,e,n){"use strict";var r=n(237),i=n(114),o=n(113),u=n(127),a=n(147),c=n(128);e.a=function(t,e,n){var s=null,f=Object(o.a)(!0),l=null,h=u.a,d=null;function p(o){var u,a,c,p,v,g=(o=Object(i.a)(o)).length,b=!1,m=new Array(g),y=new Array(g);for(null==l&&(d=h(v=Object(r.a)())),u=0;u<=g;++u){if(!(u<g&&f(p=o[u],u,o))===b)if(b=!b)a=u,d.areaStart(),d.lineStart();else{for(d.lineEnd(),d.lineStart(),c=u-1;c>=a;--c)d.point(m[c],y[c]);d.lineEnd(),d.areaEnd()}b&&(m[u]=+t(p,u,o),y[u]=+e(p,u,o),d.point(s?+s(p,u,o):m[u],n?+n(p,u,o):y[u]))}if(v)return d=null,v+""||null}function v(){return Object(a.a)().defined(f).curve(h).context(l)}return t="function"===typeof t?t:void 0===t?c.a:Object(o.a)(+t),e="function"===typeof e?e:void 0===e?Object(o.a)(0):Object(o.a)(+e),n="function"===typeof n?n:void 0===n?c.b:Object(o.a)(+n),p.x=function(e){return arguments.length?(t="function"===typeof e?e:Object(o.a)(+e),s=null,p):t},p.x0=function(e){return arguments.length?(t="function"===typeof e?e:Object(o.a)(+e),p):t},p.x1=function(t){return arguments.length?(s=null==t?null:"function"===typeof t?t:Object(o.a)(+t),p):s},p.y=function(t){return arguments.length?(e="function"===typeof t?t:Object(o.a)(+t),n=null,p):e},p.y0=function(t){return arguments.length?(e="function"===typeof t?t:Object(o.a)(+t),p):e},p.y1=function(t){return arguments.length?(n=null==t?null:"function"===typeof t?t:Object(o.a)(+t),p):n},p.lineX0=p.lineY0=function(){return v().x(t).y(e)},p.lineY1=function(){return v().x(t).y(n)},p.lineX1=function(){return v().x(s).y(e)},p.defined=function(t){return arguments.length?(f="function"===typeof t?t:Object(o.a)(!!t),p):f},p.curve=function(t){return arguments.length?(h=t,null!=l&&(d=h(l)),p):h},p.context=function(t){return arguments.length?(null==t?l=d=null:d=h(l=t),p):l},p}}}]);
//# sourceMappingURL=21.13be0bb6.chunk.js.map
