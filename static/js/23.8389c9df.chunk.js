(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[23],{115:function(t,e,n){"use strict";var a=n(46),i=n(2),c={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};e.a=function(t){var e=Object(i.useState)(!1),n=Object(a.a)(e,2),r=n[0],l=n[1];return Object(i.useEffect)((function(){t.current&&new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting&&(l(!0),n.unobserve(t.current))}))}),c).observe(t.current)}),[t]),r}},147:function(t,e,n){"use strict";var a=n(2);e.a=function(t,e){var n=function(){var t=Object(a.useRef)(!0);return t.current?(t.current=!1,!0):t.current}();Object(a.useEffect)((function(){if(!n)return t()}),e)}},157:function(t,e,n){"use strict";var a=n(105),i=n(46),c=n(107),r=n(118),l=n(19);e.a=function(){var t=Object(r.a)(),e=Object(i.a)(t,2),n=e[0],o=e[1].width,s=window.innerWidth;o=o||(s>=769?528:s),s<769&&(o-=30);return Object(l.jsx)("div",{ref:n,className:"TableLoader",children:Object(l.jsx)(c.a,{viewBox:"0 0 ".concat(o," ").concat(900),height:900,width:o,speed:2,animate:!1,children:Object(a.a)(Array(20).keys()).map((function(t){return Object(l.jsx)("rect",{x:"0",y:45*t,rx:"3",ry:"3",width:o,height:40},t)}))})})}},200:function(t,e,n){"use strict";var a=n(2),i=n(95);e.a=function(t,e,n){if(!i.a)return[e,i.b,i.b];if(!t)throw new Error("useLocalStorage key may not be falsy");var c=n?n.raw?function(t){return t}:n.deserializer:JSON.parse,r=Object(a.useRef)((function(t){try{var a=n?n.raw?String:n.serializer:JSON.stringify,i=localStorage.getItem(t);return null!==i?c(i):(e&&localStorage.setItem(t,a(e)),e)}catch(l){return e}})),l=Object(a.useState)((function(){return r.current(t)})),o=l[0],s=l[1];Object(a.useLayoutEffect)((function(){return s(r.current(t))}),[t]);var d=Object(a.useCallback)((function(e){try{var a="function"===typeof e?e(o):e;if("undefined"===typeof a)return;var i=void 0;i=n?n.raw?"string"===typeof a?a:JSON.stringify(a):n.serializer?n.serializer(a):JSON.stringify(a):JSON.stringify(a),localStorage.setItem(t,i),s(c(i))}catch(l){}}),[t,s]),u=Object(a.useCallback)((function(){try{localStorage.removeItem(t),s(void 0)}catch(l){}}),[t,s]);return[o,d,u]}},286:function(t,e,n){"use strict";n.r(e);var a=n(46),i=n(157),c=n(11),r=n(115),l=n(100);function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=n(108),d=n(2),u=n(147),b=n(130),v=["data","isValidating","error"];var j=function(t,e,n){for(var i=Object(d.useState)(n),c=Object(a.a)(i,2),r=c[0],j=c[1],h=arguments.length,O=new Array(h>3?h-3:0),f=3;f<h;f++)O[f-3]=arguments[f];var g=b.a.apply(void 0,[t,e,r].concat(O)),p=g.data,m=g.isValidating,x=g.error,y=o(g,v);return Object(u.a)((function(){j(Object(s.a)(r,(function(t){t.initialData=p})))}),[p]),Object(l.a)(Object(l.a)({},y),{},{isValidating:m,error:x,data:p})},h=n(24),O=n(94),f=n.n(O),g=n(67),p=n(56),m=n(250),x=n(116),y=n(5),T=n(200),V=n(249),S=n(287),D=n(19),k=Object(d.lazy)((function(){return Object(h.l)((function(){return Promise.all([n.e(0),n.e(2),n.e(28)]).then(n.bind(null,294))}))})),w=Object(d.lazy)((function(){return Object(h.l)((function(){return n.e(8).then(n.bind(null,112))}))})),N=Object(d.lazy)((function(){return Object(h.l)((function(){return Promise.all([n.e(0),n.e(33)]).then(n.bind(null,159))}))})),H=Object(d.lazy)((function(){return Object(h.l)((function(){return Promise.all([n.e(0),n.e(39)]).then(n.bind(null,160))}))})),C=Object(d.lazy)((function(){return Object(h.l)((function(){return Promise.all([n.e(0),n.e(2),n.e(5)]).then(n.bind(null,229))}))})),P=Object(d.lazy)((function(){return Object(h.l)((function(){return n.e(43).then(n.bind(null,161))}))})),A=Object(d.lazy)((function(){return Object(h.l)((function(){return Promise.all([n.e(1),n.e(4),n.e(31)]).then(n.bind(null,162))}))})),z=Object(d.lazy)((function(){return Object(h.l)((function(){return n.e(36).then(n.bind(null,283))}))})),I=Object(d.lazy)((function(){return Object(h.l)((function(){return n.e(9).then(n.bind(null,231))}))})),M=Object(d.lazy)((function(){return Object(h.l)((function(){return Promise.all([n.e(0),n.e(2),n.e(15)]).then(n.bind(null,295))}))})),R=Object(d.lazy)((function(){return Object(h.l)((function(){return Promise.all([n.e(0),n.e(32)]).then(n.bind(null,177))}))}));e.default=function(){var t,e,n=Object(d.useState)({stateCode:"TT",districtName:null}),l=Object(a.a)(n,2),o=l[0],s=l[1],u=Object(T.a)("anchor",null),b=Object(a.a)(u,2),v=b[0],O=b[1],E=Object(T.a)("expandTable",!1),F=Object(a.a)(E,2),J=F[0],L=F[1],B=Object(V.a)("mapStatistic","active"),K=Object(a.a)(B,2),G=K[0],U=K[1],Y=Object(T.a)("mapView",c.r.DISTRICTS),W=Object(a.a)(Y,2),X=W[0],Z=W[1],_=Object(d.useState)(""),q=Object(a.a)(_,2),Q=q[0],$=q[1],tt=Object(y.h)(),et=j("".concat(c.e,"https://data.incovid19.org/v4/min/timeseries.min.json"),h.b,{revalidateOnMount:!0,refreshInterval:c.b}).data,nt=j("".concat(c.e,"https://data.incovid19.org/v4/min/data").concat(Q?"-".concat(Q):"",".min.json"),h.b,{revalidateOnMount:!0,refreshInterval:c.b}).data;console.log("inida",nt);var at=function(t,e){var n,a,i,r=60,l=35,o=35,s=50,d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ",n=new Date(t),a=n.toLocaleString("default",{month:"long"}),i=n.getDate();return"".concat(i<10?"0".concat(i):"".concat(i)).concat(e).concat(a)}(null!==(n=null===(a=t[0])||void 0===a?void 0:a.Date)&&void 0!==n?n:null===(i=t[1])||void 0===i?void 0:i.Date);d3.selectAll(e).selectAll("svg").remove(),d3.selectAll(e).selectAll("#date").remove(),d3.select(e).append("div").attr("id","date").attr("class","graphtext").html("".concat(d));var u=d3.select(e).append("svg").attr("viewBox","0 0 ".concat(800," ").concat(400)),b=800-l-s-3,v=400-r-o,j=d3.scale.linear().range([v,0]),h=d3.scale.linear().range([0,b]),O=d3.svg.axis().scale(h).ticks(6).tickFormat((function(t){var e=d3.formatPrefix(t);return e.scale(t)+e.symbol})).orient("bottom"),f=d3.svg.axis().scale(j).orient("right").ticks(6).tickFormat((function(t){var e=d3.formatPrefix(t);return e.scale(t)+e.symbol}));u.append("rect").attr("width",b+l+s).attr("height",v+r+o).attr("x",0).attr("y",0).attr("fill","#E3E2F3").attr("rx",4).attr("fill-opacity",1),u=u.append("g").attr("transform","translate("+l+","+r+")");var g=d3.select(e).append("div").attr("class","tooltip");var p=t;if(!p)throw new Error("d3.json error");h.domain([0,100]),j.domain([0,100]),u.append("g").attr("class","x axis").attr("transform","translate(0,"+v+")").call(O).append("text").attr("fill","red").attr("transform","translate("+b+",-30)").attr("dy","4em").attr("text-anchor","end").text("Vaccine Dose 1 %"),u.append("g").attr("class","y axis").attr("transform","translate("+b+", 0)").call(f).append("text").attr("transform","rotate(0)").attr("dy","-0.8em").attr("text-anchor","end").text("Vaccine Dose 2 %"),u.selectAll(".cyclist").data(p).enter().append("g").attr("class","cyclist").attr("x",(function(t){return h(t.Vaccine1)})).attr("y",(function(t){return j(t.Vaccine2)})).append("circle").attr("cx",(function(t){return h(t.Vaccine1)})).attr("cy",(function(t){return j(t.Vaccine2)})).attr("r",5).attr("class","circlegraph").attr("fill",(function(t){var e={AN:"rgb(128,0,0)",AP:"rgb(165,42,42)",AR:"rgb(220,20,60)",AS:"rgb(255,0,0)",BR:"rgb(134,134,20)",CH:"rgb(255,140,0)",CT:"rgb(255,165,0)",DL:"rgb(255,215,0)",DN:"rgb(184,134,11)",GA:"rgb(218,165,32)",GJ:"rgb(189,183,107)",HP:"rgb(240,230,140)",HR:"rgb(154,205,50)",JH:"rgb(85,107,47)",JK:"rgb(124,252,0)",KA:"rgb(152,251,152)",KL:"rgb(143,188,143)",LA:"rgb(47,79,79)",LD:"rgb(0,139,139)",MH:"rgb(0,255,255)",ML:"rgb(70,130,180)",MN:"rgb(0,191,255)",MP:"rgb(30,144,255)",MZ:"rgb(135,206,250)",NL:"rgb(25,25,112)",OR:"rgb(0,0,205)",PB:"rgb(138,43,226)",PY:"rgb(139,0,139)",RJ:"rgb(186,85,211)",SK:"rgba(238,130,238)",TG:"rgb(199,21,133)",TN:"rgb(139,69,19)",TR:"rgb(210,105,30)",TT:"rgb(255,228,181)",UP:"rgb(218,112,214)",UT:"rgb(128,128,128)",WB:"rgb(255,218,185)"}[t.state];return t.color=e,e})).on("mouseover",(function(t,n){console.log("tooltip",t),g.style({display:"block","min-height":"100px",width:"200px",padding:"5px",opacity:1,"background-color":t.color});var a=parseInt(g.style("width")),i=parseInt(g.style("height"));"#scatterplotstate-stats"===e?g.style({top:d3.event.pageY-i-5+"px",left:d3.event.pageX-a+100+"px"}).html("<span><b>State: "+c.y[t.state]+"<br/>Vaccine Dose 1: "+t.Vaccine1+"% <br/>Vaccine Dose 2: "+t.Vaccine2+"%<br/>Total Vaccinations: "+t.Total):"#scatterplottotal-stats"===e&&g.style({top:d3.event.pageY-i-5+"px",left:d3.event.pageX-a+100+"px"}).html("<span><b>District: "+t.district+"<br/>State: "+c.y[t.state]+"<br/>Vaccine Dose 1: "+t.Vaccine1+"% <br/>Vaccine Dose 2: "+t.Vaccine2+"%<br/>Total Vaccinations: "+t.Total)})).on("mouseout",(function(t,e){console.log("tooltip",t),g.style({display:"none"})}))};Object(d.useEffect)((function(){console.log("india",nt);var t=[],e=[];nt&&(Object.keys(nt).forEach((function(n){if(n){var a,i,c,r,l,o,s,d,u,b,v,j,h,O,f,g,p,m,x,y={};if((null===(a=nt[n])||void 0===a||null===(i=a.meta)||void 0===i?void 0:i.population)&&(null===(c=nt[n])||void 0===c||null===(r=c.total)||void 0===r?void 0:r.vaccinated1)&&(null===(l=nt[n])||void 0===l||null===(o=l.total)||void 0===o?void 0:o.vaccinated2))y.state=n,y.district="",y.Vaccine1=((null===(s=nt[n])||void 0===s||null===(d=s.total)||void 0===d?void 0:d.vaccinated1)/(null===(u=nt[n])||void 0===u?void 0:u.meta.population)*100).toFixed(2),y.Vaccine2=((null===(b=nt[n])||void 0===b||null===(v=b.total)||void 0===v?void 0:v.vaccinated2)/(null===(j=nt[n])||void 0===j?void 0:j.meta.population)*100).toFixed(2),y.Total=(null===(h=nt[n])||void 0===h||null===(O=h.total)||void 0===O?void 0:O.vaccinated1)+(null===(f=nt[n])||void 0===f||null===(g=f.total)||void 0===g?void 0:g.vaccinated2),y.Date=null!==(p=null===(m=nt[n])||void 0===m||null===(x=m.meta)||void 0===x?void 0:x.date)&&void 0!==p?p:"",y.Vaccine1>100&&(y.Vaccine1=100,console.log("greater",y)),y.Vaccine2>100&&(y.Vaccine2=100),y.Vaccine1&&y.Vaccine2&&y.Vaccine1<=100&&y.Vaccine2<=100&&e.push(y)}Object.keys(nt[n].districts).forEach((function(e){var a,i,c,r,l,o,s,d,u,b,v,j,h,O,f,g,p,m,x,y,T,V,S,D,k,w,N,H,C,P,A,z,I,M,R,E,F={};(null===(a=nt[n])||void 0===a||null===(i=a.districts)||void 0===i||null===(c=i[e])||void 0===c?void 0:c.meta.population)&&(null===(r=nt[n])||void 0===r||null===(l=r.districts)||void 0===l||null===(o=l[e])||void 0===o||null===(s=o.total)||void 0===s?void 0:s.vaccinated1)&&(null===(d=nt[n])||void 0===d||null===(u=d.districts)||void 0===u||null===(b=u[e])||void 0===b||null===(v=b.total)||void 0===v?void 0:v.vaccinated2)&&(F.state=n,F.district=e,F.Vaccine1=((null===(j=nt[n])||void 0===j||null===(h=j.districts)||void 0===h||null===(O=h[e])||void 0===O||null===(f=O.total)||void 0===f?void 0:f.vaccinated1)/(null===(g=nt[n])||void 0===g||null===(p=g.districts)||void 0===p||null===(m=p[e])||void 0===m?void 0:m.meta.population)*100).toFixed(2),F.Vaccine2=((null===(x=nt[n])||void 0===x||null===(y=x.districts)||void 0===y||null===(T=y[e])||void 0===T||null===(V=T.total)||void 0===V?void 0:V.vaccinated2)/(null===(S=nt[n])||void 0===S||null===(D=S.districts)||void 0===D||null===(k=D[e])||void 0===k?void 0:k.meta.population)*100).toFixed(2),F.Total=(null===(w=nt[n])||void 0===w||null===(N=w.districts)||void 0===N||null===(H=N[e])||void 0===H||null===(C=H.total)||void 0===C?void 0:C.vaccinated1)+(null===(P=nt[n])||void 0===P||null===(A=P.districts)||void 0===A||null===(z=A[e])||void 0===z||null===(I=z.total)||void 0===I?void 0:I.vaccinated2),F.Date=null!==(M=null===(R=nt[n])||void 0===R||null===(E=R.meta)||void 0===E?void 0:E.date)&&void 0!==M?M:"",F.Vaccine1>100&&(F.Vaccine1=100,console.log("greater",F)),F.Vaccine2>100&&(F.Vaccine2=100),F.Vaccine1&&F.Vaccine2&&F.Vaccine1<=100&&F.Vaccine2<=100&&t.push(F))}))})),at(e,"#scatterplotstate-stats"),at(t,"#scatterplottotal-stats"))}),[nt]);var it=Object(d.useRef)(),ct=Object(r.a)(it),rt=Object(S.a)().width,lt=""!==Q&&Q<c.f,ot=""===Q||Q>Object(g.a)(Object(p.a)(Object(h.k)(c.h),c.C),{representation:"date"}),st=0===Object(h.i)(null===nt||void 0===nt?void 0:nt.TT,"total","vaccinated"),dt=Object(d.useMemo)((function(){var t,e,n,a,i,c,r,l,o=[null===nt||void 0===nt||null===(t=nt.TT)||void 0===t||null===(e=t.meta)||void 0===e?void 0:e.date,null===nt||void 0===nt||null===(n=nt.TT)||void 0===n||null===(a=n.meta)||void 0===a||null===(i=a.tested)||void 0===i?void 0:i.date,null===nt||void 0===nt||null===(c=nt.TT)||void 0===c||null===(r=c.meta)||void 0===r||null===(l=r.vaccinated)||void 0===l?void 0:l.date].filter((function(t){return t}));return o.length>0?Object(g.a)(Object(m.a)(o.map((function(t){return Object(h.k)(t)}))),{representation:"date"}):null}),[nt]),ut=Object(d.useMemo)((function(){var t=Object.keys(nt||{}).map((function(t){var e,n;return null===nt||void 0===nt||null===(e=nt[t])||void 0===e||null===(n=e.meta)||void 0===n?void 0:n.last_updated})).filter((function(t){return t}));return t.length>0?Object(h.d)(Object(m.a)(t.map((function(t){return Object(h.k)(t)})))):null}),[nt]),bt=Object(d.useMemo)((function(){return Object.entries(nt||{}).reduce((function(t,e){var n,i=Object(a.a)(e,2),r=i[0],l=i[1];return t[r]=!!((null===l||void 0===l?void 0:l.districts)&&(null===(n=l.districts)||void 0===n?void 0:n[c.H])&&c.u.every((function(t){return Object(h.i)(l,"total",t)===Object(h.i)(l.districts[c.H],"total",t)}))),t}),{})}),[nt]),vt=(null===o||void 0===o?void 0:o.stateCode)&&(null===o||void 0===o?void 0:o.districtName)&&o.districtName!==c.H&&bt[o.stateCode];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(x.a,{children:[Object(D.jsx)("title",{children:"Coronavirus Outbreak in India - covid19-live-update-tracker.blogspot.com"}),Object(D.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})]}),Object(D.jsxs)("div",{className:"Home",children:[Object(D.jsxs)("div",{className:f()("home-left",{expanded:J}),children:[Object(D.jsxs)("div",{className:"header",children:[Object(D.jsx)(d.Suspense,{fallback:Object(D.jsx)("div",{}),children:Object(D.jsx)(z,{})}),!nt&&!et&&Object(D.jsx)("div",{style:{height:"60rem"}}),Object(D.jsxs)(D.Fragment,{children:[!et&&Object(D.jsx)("div",{style:{minHeight:"61px"}}),et&&Object(D.jsx)(d.Suspense,{fallback:Object(D.jsx)("div",{style:{minHeight:"61px"}}),children:Object(D.jsx)(k,{date:Q,setDate:$,dates:Object.keys(null===(t=et.TT)||void 0===t?void 0:t.dates),lastUpdatedDate:ut})})]})]}),Object(D.jsxs)("div",{style:{position:"relative",marginTop:"1rem"},children:[nt&&Object(D.jsxs)(d.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"50rem"}}),children:[rt>=769&&!J&&Object(D.jsx)(P,{mapStatistic:G,setMapStatistic:U}),Object(D.jsx)(N,{data:nt.TT})]}),Object(D.jsxs)(D.Fragment,{children:[!et&&Object(D.jsx)("div",{style:{height:"123px"}}),et&&Object(D.jsx)(d.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"123px"}}),children:Object(D.jsx)(A,{timeseries:null===(e=et.TT)||void 0===e?void 0:e.dates,date:Q})})]})]}),!st&&Object(D.jsx)(H,{data:nt.TT}),nt&&Object(D.jsx)(d.Suspense,{fallback:Object(D.jsx)(i.a,{}),children:Object(D.jsx)(M,{data:nt,regionHighlighted:o,setRegionHighlighted:s,expandTable:J,setExpandTable:L,hideDistrictData:lt,hideDistrictTestData:ot,hideVaccinated:st,lastDataDate:dt,noDistrictDataStates:bt})})]}),Object(D.jsx)("div",{className:f()("home-right",{expanded:J}),ref:it,style:{minHeight:"4rem"},children:(ct||tt.hash)&&Object(D.jsxs)(D.Fragment,{children:[nt&&Object(D.jsx)("div",{className:f()("map-container",{expanded:J,stickied:"mapexplorer"===v||J&&rt>=769}),children:Object(D.jsxs)(d.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"50rem"}}),children:[Object(D.jsx)(I,{data:nt.TT,stateCode:"TT"}),Object(D.jsx)(C,{stateCode:"TT",data:nt,mapStatistic:G,setMapStatistic:U,mapView:X,setMapView:Z,regionHighlighted:o,setRegionHighlighted:s,anchor:v,setAnchor:O,expandTable:J,lastDataDate:dt,hideDistrictData:lt,hideDistrictTestData:ot,hideVaccinated:st,noRegionHighlightedDistrictData:vt})]})}),et&&Object(D.jsx)(d.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"50rem"}}),children:Object(D.jsx)(R,{stateCode:"TT",timeseries:et,date:Q,regionHighlighted:o,setRegionHighlighted:s,anchor:v,setAnchor:O,expandTable:J,hideVaccinated:st,noRegionHighlightedDistrictData:vt})})]})})]}),Object(D.jsxs)("div",{className:"Home homegraph",children:[Object(D.jsx)("div",{className:"home-left home-left--graphmargin",children:Object(D.jsx)("div",{id:"scatterplotstate-stats",children:Object(D.jsx)("h1",{className:"text-center ",children:"Vaccination Coverage (States)"})})}),Object(D.jsx)("div",{className:"home-right home-right--graphmargin",children:Object(D.jsx)("div",{id:"scatterplottotal-stats",children:Object(D.jsx)("h1",{className:"text-center ",children:"Vaccination Coverage (Districts)"})})})]}),ct&&Object(D.jsx)(d.Suspense,{fallback:Object(D.jsx)("div",{}),children:Object(D.jsx)(w,{})})]})}}}]);
//# sourceMappingURL=23.8389c9df.chunk.js.map
