(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[40,39],{160:function(e,t,n){"use strict";n.r(t);var c=n(46),a=n(11),r=n(24),s=n(97),i=n(94),o=n.n(i),d=n(93),l=n.n(d),u=n(2),j=n(293),b=n(99),f=n(19);function h(e){var t=e.dose1,n=e.dose2,a=Object(j.a)().t,s=Object(u.useState)(2),i=Object(c.a)(s,2),d=i[0],l=i[1],h=Object(u.useRef)(!1),O=Object(b.useSpring)({dose1:t,dose2:n,from:{dose1:0,dose2:0},delay:h.current?0:2e3});return Object(u.useEffect)((function(){h.current=!0}),[]),Object(f.jsxs)("div",{className:"progress-bar-wrapper fadeInUp",style:{animationDelay:"".concat(2e3,"ms")},children:[Object(f.jsxs)("div",{className:o()("legend",{highlighted:1===d}),children:[Object(f.jsxs)("div",{className:"label-wrapper",children:[Object(f.jsx)(b.animated.div,{style:{width:O.dose1.to((function(e){return"calc(".concat(e,"% - 3rem)")}))}}),Object(f.jsx)("div",{className:"label",onMouseEnter:l.bind(this,1),onMouseLeave:l.bind(this,2),children:a("At least one dose")})]}),Object(f.jsx)(b.animated.div,{className:"arrow",style:{marginLeft:O.dose1.to((function(e){return"calc(".concat(e,"% - 0.3ch)")}))},children:"|"})]}),Object(f.jsxs)("div",{className:"progress-bar",children:[Object(f.jsx)(b.animated.div,{className:o()("progress-bar","value",{highlighted:1===d}),style:{width:O.dose1.to((function(e){return"".concat(e,"%")}))},onMouseEnter:l.bind(this,1),onMouseLeave:l.bind(this,2),children:Object(f.jsx)(b.animated.span,{children:O.dose1.to((function(e){return Object(r.f)(e,"%")}))})}),Object(f.jsx)(b.animated.div,{className:o()("progress-bar","value","opaque",{highlighted:2===d}),style:{width:O.dose2.to((function(e){return"".concat(e,"%")}))}})]}),n>0&&Object(f.jsxs)("div",{className:o()("legend",{highlighted:2===d}),children:[Object(f.jsx)(b.animated.div,{className:"arrow",style:{marginLeft:O.dose2.to((function(e){return"calc(".concat(e,"% - 0.3ch)")}))},children:"|"}),Object(f.jsxs)("div",{className:"label-wrapper",children:[Object(f.jsx)(b.animated.div,{style:{width:O.dose2.to((function(e){return"calc(".concat(e,"% - 4rem)")}))}}),Object(f.jsx)(b.animated.div,{className:"label",children:O.dose2.to((function(e){return"".concat(a("Fully vaccinated")," (").concat(Object(r.f)(e,"%"),")")}))})]})]})]})}function O(e){var t=e.data,n=Object(j.a)().t,c=Object(b.useSpring)({total:Object(r.i)(t,"total","vaccinated"),config:a.v}),i=a.z.vaccinated;return Object(f.jsxs)("div",{className:"level-vaccinated fadeInUp",style:{animationDelay:"".concat(1750,"ms")},children:[Object(f.jsx)(s.u,{}),Object(f.jsx)(b.animated.div,{children:c.total.to((function(e){return Object(r.f)(e,"long")}))}),Object(f.jsx)("div",{children:n(i.displayName)})]})}function v(e){var t=e.data,n=Object(r.i)(t,"total","vaccinated1",{normalizedByPopulationPer:"hundred"}),c=Object(r.i)(t,"total","vaccinated2",{normalizedByPopulationPer:"hundred"});return Object(f.jsxs)("div",{className:"VaccinationHeader",children:[Object(f.jsx)(O,{data:t}),Object(f.jsx)(h,{dose1:n,dose2:c})]})}b.Globals.assign({colors:null});var m=function(e,t){return!!l()(e.data,t.data)};t.default=Object(u.memo)(v,m)},93:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,a,r;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(a=c;0!==a--;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(r=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(a=c;0!==a--;)if(!Object.prototype.hasOwnProperty.call(n,r[a]))return!1;for(a=c;0!==a--;){var s=r[a];if(!e(t[s],n[s]))return!1}return!0}return t!==t&&n!==n}}}]);
//# sourceMappingURL=40.94d3c710.chunk.js.map
