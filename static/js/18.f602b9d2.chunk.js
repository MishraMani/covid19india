(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[18],{102:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)){if(i.length){var c=r.apply(null,i);c&&e.push(c)}}else if("object"===a)if(i.toString===Object.prototype.toString)for(var s in i)n.call(i,s)&&i[s]&&e.push(s);else e.push(i.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},122:function(e,t,n){"use strict";var i=n(51),r=n(2),a={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(s(!0),n.unobserve(e.current))}))}),a).observe(e.current)}),[e]),c}},152:function(e,t,n){"use strict";var i=n(2);t.a=function(e,t){var n=function(){var e=Object(i.useRef)(!0);return e.current?(e.current=!1,!0):e.current}();Object(i.useEffect)((function(){if(!n)return e()}),t)}},163:function(e,t,n){"use strict";var i=n(110),r=n(51),a=n(121),c=n(124),s=n(20);t.a=function(){var e=Object(c.a)(),t=Object(r.a)(e,2),n=t[0],o=t[1].width,l=window.innerWidth;o=o||(l>=769?528:l),l<769&&(o-=30);return Object(s.jsx)("div",{ref:n,className:"TableLoader",children:Object(s.jsx)(a.a,{viewBox:"0 0 ".concat(o," ").concat(900),height:900,width:o,speed:2,animate:!1,children:Object(i.a)(Array(20).keys()).map((function(e){return Object(s.jsx)("rect",{x:"0",y:45*e,rx:"3",ry:"3",width:o,height:40},e)}))})})}},203:function(e,t,n){"use strict";var i=n(2),r=n(101);t.a=function(e,t,n){if(!r.a)return[t,r.b,r.b];if(!e)throw new Error("useLocalStorage key may not be falsy");var a=n?n.raw?function(e){return e}:n.deserializer:JSON.parse,c=Object(i.useRef)((function(e){try{var i=n?n.raw?String:n.serializer:JSON.stringify,r=localStorage.getItem(e);return null!==r?a(r):(t&&localStorage.setItem(e,i(t)),t)}catch(s){return t}})),s=Object(i.useState)((function(){return c.current(e)})),o=s[0],l=s[1];Object(i.useLayoutEffect)((function(){return l(c.current(e))}),[e]);var u=Object(i.useCallback)((function(t){try{var i="function"===typeof t?t(o):t;if("undefined"===typeof i)return;var r=void 0;r=n?n.raw?"string"===typeof i?i:JSON.stringify(i):n.serializer?n.serializer(i):JSON.stringify(i):JSON.stringify(i),localStorage.setItem(e,r),l(a(r))}catch(s){}}),[e,l]),d=Object(i.useCallback)((function(){try{localStorage.removeItem(e),l(void 0)}catch(s){}}),[e,l]);return[o,u,d]}},204:function(e,t,n){"use strict";var i=n(2),r=n(101);t.a=function(e,t,n){if(!r.a)return[t,function(){}];var a=Object(i.useState)((function(){try{var i=sessionStorage.getItem(e);return"string"!==typeof i?(sessionStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?i:JSON.parse(i||"null")}catch(a){return t}})),c=a[0],s=a[1];return Object(i.useEffect)((function(){try{var t=n?String(c):JSON.stringify(c);sessionStorage.setItem(e,t)}catch(a){}})),[c,s]}},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(1),r=n(0);function a(e){var t,n;if(Object(r.a)(1,arguments),e&&"function"===typeof e.forEach)t=e;else{if("object"!==typeof e||null===e)return new Date(NaN);t=Array.prototype.slice.call(e)}return t.forEach((function(e){var t=Object(i.a)(e);(void 0===n||n<t||isNaN(Number(t)))&&(n=t)})),n||new Date(NaN)}},288:function(e,t,n){"use strict";n.r(t);var i=n(51),r=n(163),a=n(10),c=n(122),s=n(107);function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=n(113),u=n(2),d=n(152),j=n(118),b=["data","isValidating","error"];var O=function(e,t,n){for(var r=Object(u.useState)(n),a=Object(i.a)(r,2),c=a[0],O=a[1],f=arguments.length,h=new Array(f>3?f-3:0),v=3;v<f;v++)h[v-3]=arguments[v];var g=j.a.apply(void 0,[e,t,c].concat(h)),p=g.data,x=g.isValidating,m=g.error,y=o(g,b);return Object(d.a)((function(){O(Object(l.a)(c,(function(e){e.initialData=p})))}),[p]),Object(s.a)(Object(s.a)({},y),{},{isValidating:x,error:m,data:p})},f=n(25),h=n(102),v=n.n(h),g=n(77),p=n(61),x=n(205),m=n(141),y=n(5),S=n(203),T=n(204),k=n(289),w=n(20),N=Object(u.lazy)((function(){return Object(f.k)((function(){return Promise.all([n.e(0),n.e(2),n.e(39),n.e(31)]).then(n.bind(null,295))}))})),D=Object(u.lazy)((function(){return Object(f.k)((function(){return n.e(9).then(n.bind(null,150))}))})),I=Object(u.lazy)((function(){return Object(f.k)((function(){return Promise.all([n.e(0),n.e(32)]).then(n.bind(null,165))}))})),z=Object(u.lazy)((function(){return Object(f.k)((function(){return Promise.all([n.e(0),n.e(37)]).then(n.bind(null,166))}))})),C=Object(u.lazy)((function(){return Object(f.k)((function(){return Promise.all([n.e(0),n.e(2),n.e(6)]).then(n.bind(null,234))}))})),H=Object(u.lazy)((function(){return Object(f.k)((function(){return n.e(41).then(n.bind(null,167))}))})),E=Object(u.lazy)((function(){return Object(f.k)((function(){return Promise.all([n.e(1),n.e(3),n.e(28)]).then(n.bind(null,168))}))})),J=Object(u.lazy)((function(){return Object(f.k)((function(){return n.e(35).then(n.bind(null,286))}))})),P=Object(u.lazy)((function(){return Object(f.k)((function(){return n.e(8).then(n.bind(null,236))}))})),M=Object(u.lazy)((function(){return Object(f.k)((function(){return Promise.all([n.e(0),n.e(2),n.e(15)]).then(n.bind(null,296))}))})),R=Object(u.lazy)((function(){return Object(f.k)((function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,183))}))}));t.default=function(){var e,t,n=Object(u.useState)({stateCode:"TT",districtName:null}),s=Object(i.a)(n,2),o=s[0],l=s[1],d=Object(S.a)("anchor",null),j=Object(i.a)(d,2),b=j[0],h=j[1],V=Object(S.a)("expandTable",!1),A=Object(i.a)(V,2),F=A[0],L=A[1],G=Object(T.a)("mapStatistic","active"),B=Object(i.a)(G,2),q=B[0],W=B[1],K=Object(S.a)("mapView",a.q.DISTRICTS),Q=Object(i.a)(K,2),U=Q[0],X=Q[1],Y=Object(u.useState)(""),Z=Object(i.a)(Y,2),$=Z[0],_=Z[1],ee=Object(y.h)(),te=O("".concat(a.d,"/timeseries.min.json"),f.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,ne=O("".concat(a.d,"/data").concat($?"-".concat($):"",".min.json"),f.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,ie=Object(u.useRef)(),re=Object(c.a)(ie),ae=Object(k.a)().width,ce=""!==$&&$<a.e,se=""===$||$>Object(g.a)(Object(p.a)(Object(f.j)(a.g),a.B),{representation:"date"}),oe=0===Object(f.h)(null===ne||void 0===ne?void 0:ne.TT,"total","vaccinated"),le=Object(u.useMemo)((function(){var e,t,n,i,r,a,c,s,o=[null===ne||void 0===ne||null===(e=ne.TT)||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.date,null===ne||void 0===ne||null===(n=ne.TT)||void 0===n||null===(i=n.meta)||void 0===i||null===(r=i.tested)||void 0===r?void 0:r.date,null===ne||void 0===ne||null===(a=ne.TT)||void 0===a||null===(c=a.meta)||void 0===c||null===(s=c.vaccinated)||void 0===s?void 0:s.date].filter((function(e){return e}));return o.length>0?Object(g.a)(Object(x.a)(o.map((function(e){return Object(f.j)(e)}))),{representation:"date"}):null}),[ne]),ue=Object(u.useMemo)((function(){return Object.entries(ne||{}).reduce((function(e,t){var n,r=Object(i.a)(t,2),c=r[0],s=r[1];return e[c]=!!((null===s||void 0===s?void 0:s.districts)&&(null===(n=s.districts)||void 0===n?void 0:n[a.G])&&a.t.every((function(e){return Object(f.h)(s,"total",e)===Object(f.h)(s.districts[a.G],"total",e)}))),e}),{})}),[ne]),de=(null===o||void 0===o?void 0:o.stateCode)&&(null===o||void 0===o?void 0:o.districtName)&&o.districtName!==a.G&&ue[o.stateCode];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(m.a,{children:[Object(w.jsx)("title",{children:"Coronavirus Outbreak in India - ovid19-live-update-tracker.blogspot.com"}),Object(w.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})]}),Object(w.jsxs)("div",{className:"Home",children:[Object(w.jsxs)("div",{className:v()("home-left",{expanded:F}),children:[Object(w.jsxs)("div",{className:"header",children:[Object(w.jsx)(u.Suspense,{fallback:Object(w.jsx)("div",{}),children:Object(w.jsx)(J,{})}),!ne&&!te&&Object(w.jsx)("div",{style:{height:"60rem"}}),Object(w.jsxs)(w.Fragment,{children:[!te&&Object(w.jsx)("div",{style:{minHeight:"61px"}}),te&&Object(w.jsx)(u.Suspense,{fallback:Object(w.jsx)("div",{style:{minHeight:"61px"}}),children:Object(w.jsx)(N,{date:$,setDate:_,dates:Object.keys(null===(e=te.TT)||void 0===e?void 0:e.dates)})})]})]}),Object(w.jsxs)("div",{style:{position:"relative",marginTop:"1rem"},children:[ne&&Object(w.jsxs)(u.Suspense,{fallback:Object(w.jsx)("div",{style:{height:"50rem"}}),children:[ae>=769&&!F&&Object(w.jsx)(H,{mapStatistic:q,setMapStatistic:W}),Object(w.jsx)(I,{data:ne.TT})]}),Object(w.jsxs)(w.Fragment,{children:[!te&&Object(w.jsx)("div",{style:{height:"107px"}}),te&&Object(w.jsx)(u.Suspense,{fallback:Object(w.jsx)("div",{style:{height:"107px"}}),children:Object(w.jsx)(E,{timeseries:null===(t=te.TT)||void 0===t?void 0:t.dates,date:$})})]})]}),!oe&&Object(w.jsx)(z,{data:ne.TT}),ne&&Object(w.jsx)(u.Suspense,{fallback:Object(w.jsx)(r.a,{}),children:Object(w.jsx)(M,{data:ne,regionHighlighted:o,setRegionHighlighted:l,expandTable:F,setExpandTable:L,hideDistrictData:ce,hideDistrictTestData:se,hideVaccinated:oe,lastDataDate:le,noDistrictDataStates:ue})})]}),Object(w.jsx)("div",{className:v()("home-right",{expanded:F}),ref:ie,style:{minHeight:"4rem"},children:(re||ee.hash)&&Object(w.jsxs)(w.Fragment,{children:[ne&&Object(w.jsx)("div",{className:v()("map-container",{expanded:F,stickied:"mapexplorer"===b||F&&ae>=769}),children:Object(w.jsxs)(u.Suspense,{fallback:Object(w.jsx)("div",{style:{height:"50rem"}}),children:[Object(w.jsx)(P,{data:ne.TT,stateCode:"TT"}),Object(w.jsx)(C,{stateCode:"TT",data:ne,mapStatistic:q,setMapStatistic:W,mapView:U,setMapView:X,regionHighlighted:o,setRegionHighlighted:l,anchor:b,setAnchor:h,expandTable:F,lastDataDate:le,hideDistrictData:ce,hideDistrictTestData:se,hideVaccinated:oe,noRegionHighlightedDistrictData:de})]})}),te&&Object(w.jsx)(u.Suspense,{fallback:Object(w.jsx)("div",{style:{height:"50rem"}}),children:Object(w.jsx)(R,{stateCode:"TT",timeseries:te,date:$,regionHighlighted:o,setRegionHighlighted:l,anchor:b,setAnchor:h,expandTable:F,hideVaccinated:oe,noRegionHighlightedDistrictData:de})})]})})]}),re&&Object(w.jsx)(u.Suspense,{fallback:Object(w.jsx)("div",{}),children:Object(w.jsx)(D,{})})]})}}}]);
//# sourceMappingURL=18.f602b9d2.chunk.js.map
