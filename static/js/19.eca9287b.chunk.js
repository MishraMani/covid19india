(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[19],{105:function(e,t,a){"use strict";var n=a(86),r=a(1),l={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),c=a[0],i=a[1];return Object(r.useEffect)((function(){void 0!==e.current&&new IntersectionObserver((function(t,a){t.forEach((function(t){t.isIntersecting&&window.requestIdleCallback((function(){i(!0),a.unobserve(e.current)}))}))}),l).observe(e.current)}),[e]),c}},211:function(e,t,a){"use strict";var n=a(1);t.a=function(e,t){var a=function(){var e=Object(n.useRef)(!0);return e.current?(e.current=!1,!0):e.current}();Object(n.useEffect)((function(){if(!a)return e()}),t)}},251:function(e,t,a){"use strict";a.r(t);var n=a(127),r=a(86),l=a(27),c=a(105),i=a(133);function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=a(97),o=a(1),d=a.n(o),b=a(211),m=a(114);var f=function(e,t,a){for(var n=Object(o.useState)(a),l=Object(r.a)(n,2),c=l[0],d=l[1],f=arguments.length,h=new Array(f>3?f-3:0),O=3;O<f;O++)h[O-3]=arguments[O];var v=m.a.apply(void 0,[e,t,c].concat(h)),g=v.data,j=v.isValidating,E=v.error,p=s(v,["data","isValidating","error"]);return Object(b.a)((function(){d(Object(u.a)(c,(function(e){e.initialData=g})))}),[g]),Object(i.a)(Object(i.a)({},p),{},{isValidating:j,error:E,data:g})},h=a(34);function O(){return Object(o.useEffect)((function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}),[]),d.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4697734978723872","data-ad-slot":"5385423272","data-ad-format":"auto","data-full-width-responsive":"true"})}var v=a(49),g=a.n(v),j=(a(67),a(117)),E=a(6),p=a(223),y=a(254),T=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,209))})),S=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(24)]).then(a.bind(null,210))})),k=Object(o.lazy)((function(){return Promise.all([a.e(18),a.e(31)]).then(a.bind(null,263))})),w=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,257))})),C=Object(o.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(22)]).then(a.bind(null,181))})),I=Object(o.lazy)((function(){return a.e(32).then(a.bind(null,231))})),z=Object(o.lazy)((function(){return a.e(35).then(a.bind(null,249))})),P=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(33)]).then(a.bind(null,140))})),x=Object(o.lazy)((function(){return a.e(21).then(a.bind(null,141))})),H=Object(o.lazy)((function(){return a.e(28).then(a.bind(null,151))}));t.default=function(e){Object(o.useEffect)((function(){g.a.analytics().logEvent("Covid19LandingPageView")}),[]);var t=Object(o.useState)({stateCode:"TT",districtName:null}),a=Object(r.a)(t,2),i=a[0],s=a[1],u=Object(o.useState)(null),b=Object(r.a)(u,2),m=b[0],v=b[1],N=Object(p.a)("mapStatistic","active"),V=Object(r.a)(N,2),M=V[0],R=V[1],A=Object(o.useState)(""),D=Object(r.a)(A,2),F=D[0],J=D[1],L=Object(E.h)(),q=f("https://api.covid19india.org/v3/min/timeseries.min.json",h.c,{revalidateOnMount:!0,refreshInterval:1e5}).data,B=f("https://api.covid19india.org/v3/min/data".concat(F?"-".concat(F):"",".min.json"),h.c,{revalidateOnMount:!0,refreshInterval:1e5}).data,G=Object(o.useRef)(),K=Object(c.a)(G),Q=Object(y.a)().width,U=["TT"].concat(Object(n.a)(Object(n.a)(new Set([].concat(Object(n.a)(Object.keys(l.g).filter((function(e){return"TT"!==e}))),Object(n.a)(Object.keys(B||{}).filter((function(e){return"TT"!==e})))))).sort()));return d.a.createElement(d.a.Fragment,null,d.a.createElement(j.a,null,d.a.createElement("title",null,"COVID19 India Live Update Tracker"),d.a.createElement("meta",{name:"title",content:"COVID19 India Live Update Tracker"})),d.a.createElement("div",{style:{textAlign:"center"}},d.a.createElement("h1",null,"Covid19India Live Update Tracker" ),d.a.createElement("div",{className:"blinking"},d.a.createElement("h8",null,"By Mani Mishra"))),d.a.createElement("div",{className:"Home"},d.a.createElement("div",{className:"home-left"},d.a.createElement("div",{className:"header"},d.a.createElement(o.Suspense,{fallback:d.a.createElement("div",null)},d.a.createElement(z,null)),q&&d.a.createElement(o.Suspense,{fallback:d.a.createElement("div",{style:{minHeight:"56px"}})},d.a.createElement(k,{setDate:J,dates:Object.keys(q.TT).reverse(),date:F}))),d.a.createElement("div",{style:{position:"relative"}},B&&d.a.createElement(o.Suspense,{fallback:d.a.createElement("div",{style:{height:"50rem"}})},Q>769&&d.a.createElement(x,{mapStatistic:M,setMapStatistic:R}),d.a.createElement(P,{data:B.TT})),q&&d.a.createElement(o.Suspense,{fallback:d.a.createElement("div",{style:{height:"50rem"}})},d.a.createElement(C,Object.assign({timeseries:q.TT},{date:F})))),d.a.createElement(O,null),B&&d.a.createElement(o.Suspense,{fallback:d.a.createElement("div",null)},d.a.createElement(w,{data:B,regionHighlighted:i,setRegionHighlighted:s})),d.a.createElement(O,null)),d.a.createElement("div",{className:"home-right",ref:G},(K||L.hash)&&d.a.createElement(d.a.Fragment,null,B&&d.a.createElement(o.Suspense,{fallback:d.a.createElement("div",{style:{height:"50rem"}})},d.a.createElement(H,{data:B.TT,stateCode:"TT"}),d.a.createElement(S,Object.assign({stateCode:"TT"},{data:B},{mapStatistic:M,setMapStatistic:R},{regionHighlighted:i,setRegionHighlighted:s},{anchor:m,setAnchor:v}))),d.a.createElement(O,null),q&&d.a.createElement(o.Suspense,{fallback:d.a.createElement("div",null)},d.a.createElement(T,Object.assign({timeseries:q[i.stateCode]},{date:F,stateCodes:U},{regionHighlighted:i,setRegionHighlighted:s},{anchor:m,setAnchor:v}))),d.a.createElement(O,null)))),K&&d.a.createElement(o.Suspense,{fallback:d.a.createElement("div",null)},d.a.createElement(I,null)))}}}]);
//# sourceMappingURL=19.eca9287b.chunk.js.map
