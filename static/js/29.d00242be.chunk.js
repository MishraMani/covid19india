(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[29],{100:function(e,t,i){"use strict";e.exports=function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,n,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(n=c;0!==n--;)if(!e(t[n],i[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(n=c;0!==n--;)if(!Object.prototype.hasOwnProperty.call(i,s[n]))return!1;for(n=c;0!==n--;){var a=s[n];if(!e(t[a],i[a]))return!1}return!0}return t!==t&&i!==i}},149:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var c=i(26);function n(e,t){var i;if(void 0===t){var n,s=Object(c.a)(e);try{for(s.s();!(n=s.n()).done;){var a=n.value;null!=a&&(i>a||void 0===i&&a>=a)&&(i=a)}}catch(u){s.e(u)}finally{s.f()}}else{var r,o=-1,d=Object(c.a)(e);try{for(d.s();!(r=d.n()).done;){var l=r.value;null!=(l=t(l,++o,e))&&(i>l||void 0===i&&l>=l)&&(i=l)}}catch(u){d.e(u)}finally{d.f()}}return i}},183:function(e,t,i){"use strict";i.r(t);var c=i(110),n=i(51),s=i(121),a=i(20),r=function(){var e=window.innerWidth,t=e>=769?480:e,i=1200;return Object(a.jsxs)(s.a,{viewBox:"0 0 ".concat(t," ").concat(i),height:i,width:t,speed:2,children:[Object(a.jsx)("circle",{cx:.4*t,cy:600,r:"5"}),Object(a.jsx)("circle",{cx:.5*t,cy:600,r:"5"}),Object(a.jsx)("circle",{cx:.6*t,cy:600,r:"5"})]})},o=i(10),d=i(122),l=i(25),u=i(104),j=i(102),b=i.n(j),h=i(149),m=i(77),O=i(89),f=i(100),v=i.n(f),g=i(2),x=i(294),p=i(203),y=i(289),N=Object(g.lazy)((function(){return Object(l.k)((function(){return Promise.all([i.e(1),i.e(3),i.e(19)]).then(i.bind(null,300))}))})),C=Object(g.lazy)((function(){return Object(l.k)((function(){return Promise.all([i.e(1),i.e(3),i.e(17),i.e(45)]).then(i.bind(null,275))}))}));function k(e){var t,i=this,s=e.stateCode,j=e.timeseries,f=e.date,v=e.regionHighlighted,k=e.setRegionHighlighted,D=e.anchor,S=e.setAnchor,w=e.expandTable,H=void 0!==w&&w,M=e.hideVaccinated,R=void 0!==M&&M,T=e.noRegionHighlightedDistrictData,A=Object(x.a)().t,U=Object(p.a)("timeseriesLookbackDays",90),E=Object(n.a)(U,2),J=E[0],L=E[1],B=Object(p.a)("chartType","delta"),I=Object(n.a)(B,2),F=I[0],P=I[1],V=Object(p.a)("isUniform",!1),z=Object(n.a)(V,2),W=z[0],q=z[1],G=Object(p.a)("isLog",!1),K=Object(n.a)(G,2),Q=K[0],X=K[1],Y=Object(p.a)("isMovingAverage",!1),Z=Object(n.a)(Y,2),$=Z[0],_=Z[1],ee=Object.keys((null===j||void 0===j||null===(t=j[s])||void 0===t?void 0:t.dates)||{}),te=ee[0]||f||Object(l.g)(),ie=Object(h.a)([ee[ee.length-1],f||Object(l.g)()]),ce=Object(g.useState)(ie),ne=Object(n.a)(ce,2),se=ne[0],ae=ne[1];Object(g.useEffect)((function(){ae(ie)}),[ie]);var re=null!==J?Object(m.a)(Object(O.a)(Object(l.j)(se),J),{representation:"date"}):te,oe=Object(g.useRef)(),de=Object(d.a)(oe,{once:!0}),le=Object(y.a)().width,ue=Object(g.useMemo)((function(){var e;return(null===j||void 0===j||null===(e=j[v.stateCode])||void 0===e?void 0:e.districts)?{stateCode:v.stateCode,districtName:v.districtName}:{stateCode:v.stateCode,districtName:null}}),[j,v.stateCode,v.districtName]),je=Object(g.useMemo)((function(){var e,t,i,c;return ue.districtName?null===j||void 0===j||null===(e=j[ue.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(i=t[ue.districtName])||void 0===i?void 0:i.dates:null===j||void 0===j||null===(c=j[ue.stateCode])||void 0===c?void 0:c.dates}),[j,ue.stateCode,ue.districtName]),be=Object(g.useMemo)((function(){var e=Object.keys(j||{}).filter((function(e){return e!==s})).sort((function(e,t){return o.x[e].localeCompare(o.x[t])})).map((function(e){return{stateCode:e,districtName:null}})),t=Object.keys(j||{}).reduce((function(e,t){var i;return[].concat(Object(c.a)(e),Object(c.a)(Object.keys((null===j||void 0===j||null===(i=j[t])||void 0===i?void 0:i.districts)||{}).reduce((function(e,i){return[].concat(Object(c.a)(e),[{stateCode:t,districtName:i}])}),[])))}),[]);return[{stateCode:s,districtName:null}].concat(Object(c.a)(e),Object(c.a)(t))}),[j,s]),he=Object(g.useMemo)((function(){return be.find((function(e){return e.stateCode===v.stateCode&&e.districtName===v.districtName}))?be:[].concat(Object(c.a)(be),[{stateCode:v.stateCode,districtName:v.districtName}])}),[v.stateCode,v.districtName,be]),me=Object(g.useMemo)((function(){return Object.keys(je||{}).filter((function(e){return e<=ie}))}),[je,ie]),Oe=Object(g.useMemo)((function(){return me.filter((function(e){return re<=e&&e<=se}))}),[me,re,se]),fe=Object(g.useCallback)((function(e){var t=e.target;k(JSON.parse(t.value))}),[k]),ve=Object(g.useCallback)((function(){k({stateCode:s,districtName:null})}),[s,k]),ge=Object(g.useMemo)((function(){return o.E.filter((function(e){var t;return(!("vaccinated"===(null===(t=o.y[e])||void 0===t?void 0:t.category))||!R)&&("delta"===F||"tpr"!==e)}))}),[F,R]);return Object(a.jsxs)("div",{className:b()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===D},{expanded:H}),style:{display:D&&"timeseries"!==D&&(!H||le<769)?"none":""},ref:oe,children:[Object(a.jsxs)("div",{className:"timeseries-header",children:[Object(a.jsx)("div",{className:b()("anchor","fadeInUp",{stickied:"timeseries"===D}),style:{display:H&&le>=769?"none":""},onClick:S&&S.bind(this,"timeseries"===D?null:"timeseries"),children:Object(a.jsx)(u.r,{})}),Object(a.jsx)("h1",{children:A("Spread Trends")}),Object(a.jsx)("div",{className:"tabs",children:Object.entries(o.C).map((function(e,t){var c=Object(n.a)(e,2),s=c[0],r=c[1];return Object(a.jsx)("div",{className:"tab ".concat(F===s?"focused":""),onClick:P.bind(i,s),children:Object(a.jsx)("h4",{children:A(r)})},s)}))}),Object(a.jsxs)("div",{className:"timeseries-options",children:[Object(a.jsxs)("div",{className:"scale-modes",children:[Object(a.jsx)("label",{className:"main",children:"".concat(A("Scale Modes"),":")}),Object(a.jsxs)("div",{className:"timeseries-mode",children:[Object(a.jsx)("label",{htmlFor:"timeseries-mode",children:A("Uniform")}),Object(a.jsx)("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:W,"aria-label":A("Checked by default to scale uniformly."),onChange:q.bind(this,!W)})]}),Object(a.jsxs)("div",{className:"timeseries-mode ".concat("total"!==F?"disabled":""),children:[Object(a.jsx)("label",{htmlFor:"timeseries-logmode",children:A("Logarithmic")}),Object(a.jsx)("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===F&&Q,className:"switch",disabled:"total"!==F,onChange:X.bind(this,!Q)})]})]}),Object(a.jsxs)("div",{className:"timeseries-mode ".concat("total"===F?"disabled":""," moving-average"),children:[Object(a.jsx)("label",{htmlFor:"timeseries-moving-average",children:A("7 Day Moving Average")}),Object(a.jsx)("input",{id:"timeseries-moving-average",type:"checkbox",checked:"delta"===F&&$,className:"switch",disabled:"delta"!==F,onChange:_.bind(this,!$)})]})]})]}),he&&Object(a.jsxs)("div",{className:"state-selection",children:[Object(a.jsx)("div",{className:"dropdown",children:Object(a.jsx)("select",{value:JSON.stringify(ue),onChange:fe,children:he.filter((function(e){return o.x[e.stateCode]!==e.districtName})).map((function(e){return Object(a.jsx)("option",{value:JSON.stringify(e),children:e.districtName?A(e.districtName):A(o.x[e.stateCode])},"".concat(e.stateCode,"-").concat(e.districtName))}))})}),Object(a.jsx)("div",{className:"reset-icon",onClick:ve,children:Object(a.jsx)(u.u,{})})]}),de&&Object(a.jsxs)(g.Suspense,{fallback:Object(a.jsx)(r,{}),children:[Object(a.jsx)(N,{timeseries:je,regionHighlighted:ue,dates:Oe,statistics:ge,endDate:ie,chartType:F,isUniform:W,isLog:Q,isMovingAverage:$,noRegionHighlightedDistrictData:T}),Object(a.jsx)(C,{timeseries:je,regionHighlighted:ue,currentBrushSelection:[re,se],animationIndex:ge.length,dates:me,endDate:ie,lookback:J,setBrushSelectionEnd:ae,setLookback:L})]}),!de&&Object(a.jsx)("div",{style:{height:"50rem"}}),Object(a.jsx)("div",{className:"pills fadeInUp",style:{animationDelay:"".concat(250*(1+ge.length),"ms")},children:o.D.map((function(e){return Object(a.jsx)("button",{type:"button",className:b()({selected:e===J}),onClick:L.bind(i,e),children:null!==e?"".concat(e," ").concat(A("days")):A("Beginning")},e)}))})]})}var D=function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!v()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!v()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!v()(t.date,e.date)&&(!!v()(t.anchor,e.anchor)&&(!!v()(t.expandTable,e.expandTable)&&(!!v()(t.hideVaccinated,e.hideVaccinated)&&!!v()(t.noRegionHighlightedDistrictData,e.noRegionHighlightedDistrictData))))))))};t.default=Object(g.memo)(k,D)}}]);
//# sourceMappingURL=29.d00242be.chunk.js.map
