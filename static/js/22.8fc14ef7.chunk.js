(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[22],{103:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return o})),n.d(t,"i",(function(){return s})),n.d(t,"j",(function(){return r})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return j}));var a={position:"absolute",transform:"translate3d(-20rem, 0, 0)",height:"100vh",zIndex:-1},i={position:"absolute",transform:"translate3d(10rem, 0, 0)"},c={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},o={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},s={opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},r={opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},d={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},l={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"},b={opacity:1,transform:"translate3d(0, 0px, 0)",height:200},j={opacity:0,transform:"translate3d(0, 2px, 0)",height:0}},136:function(e){e.exports=JSON.parse('{"english":"English","hindi":"\u0939\u093f\u0902\u0926\u0940","bengali":"\u09ac\u09be\u0982\u09b2\u09be","gujarati":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","kannada":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","malayalam":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","marathi":"\u092e\u0930\u093e\u0920\u0940","odiya":"\u0b13\u0b21\u0b3f\u0b06","punjabi":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","tamil":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","telugu":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"}')},161:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var a=n(20),i=n(33),c=n(82),o=(n(161),function(){window.location.replace("https://blog.covid19india.org")}),s=n(103),r=n(136),d=n(1),l=n(220),b=n(221),j=n(222),u=n(223),h=n(224),O=n(271),p=n(40),m=n(90),v=n(219),f=n(262);function x(e){var t=this,n=e.pages,c=e.setExpand,o=e.darkMode,s=e.windowSize,r=Object(d.useRef)(null),l=Object(O.a)().t,b=Object(d.useCallback)((function(){s.width>768&&c(!1)}),[c,s.width]);return Object(a.jsxs)("div",{className:"expand",ref:r,onMouseLeave:b,children:[n.map((function(e,n){return!0===e.showInNavbar?Object(a.jsx)(p.b,Object(i.a)(Object(i.a)({to:e.pageLink},s.width<769&&{onClick:c.bind(t,!1)}),{},{children:Object(a.jsx)("span",Object(i.a)(Object(i.a)({},w(e.pageLink,e.animationDelayForNavbar)),{},{children:l(e.displayName)}))}),n):null})),s.width<768&&Object(a.jsx)(y,Object(i.a)({},{darkMode:o})),Object(a.jsx)("div",{className:"expand-bottom",children:Object(a.jsx)("h5",{children:l("A crowdsourced initiative.")})})]})}var g=function(e){var t,n=e.pages,o=e.darkMode,u=e.showLanguageSwitcher,h=e.setShowLanguageSwitcher,g=Object(O.a)(),w=g.i18n,N=g.t,S=Object.keys(r).includes(null===w||void 0===w?void 0:w.language)?null===w||void 0===w?void 0:w.language:null===w||void 0===w||null===(t=w.options)||void 0===t?void 0:t.fallbackLng[0],L=Object(d.useState)(!1),z=Object(c.a)(L,2),C=z[0],I=z[1];Object(v.a)(C);var M=Object(f.a)(),E=Object(m.c)((function(){return{opacity:0}})),T=Object(c.a)(E,3),A=T[0],B=T[1],J=T[2];B({opacity:1}),J();var P=Object(m.f)(C,null,{from:M.width<769?s.d:s.c,enter:M.width<769?s.f:s.e,leave:M.width<769?s.d:s.c,config:{mass:1,tension:210,friction:26}}),F=Object(d.useCallback)((function(){M.width>769&&I(!0)}),[M.width]),D=Object(d.useCallback)((function(){C&&I(!1),h(!u)}),[C,u,I,h]);return Object(a.jsxs)(m.a.div,{className:"Navbar",style:A,children:[Object(a.jsx)("div",{className:"navbar-left",onClick:D.bind(this),children:r[S]}),Object(a.jsx)("div",{className:"navbar-middle",children:Object(a.jsxs)(p.b,{to:"/",onClick:I.bind(this,!1),children:["Covid19",Object(a.jsx)("span",{children:"India"})]})}),Object(a.jsxs)("div",Object(i.a)(Object(i.a)({className:"navbar-right",onMouseEnter:F},M.width<769&&{onClick:I.bind(this,!C)}),{},{children:[M.width<769&&Object(a.jsx)("span",{children:N(C?"Close":"Menu")}),M.width>769&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p.b,{to:"/",children:Object(a.jsx)("span",{children:Object(a.jsx)(l.a,Object(i.a)({},k("/")))})}),Object(a.jsx)(p.b,{to:"/blog",children:Object(a.jsx)("span",{children:Object(a.jsx)(b.a,Object(i.a)({},k("/blog")))})}),Object(a.jsx)(p.b,{to:"/about",children:Object(a.jsx)("span",{children:Object(a.jsx)(j.a,Object(i.a)({},k("/about")))})}),Object(a.jsx)("span",{children:Object(a.jsx)(y,Object(i.a)({},{darkMode:o}))})]})]})),P.map((function(e){var t=e.item,c=e.key,s=e.props;return t?Object(a.jsx)(m.a.div,{style:s,children:Object(a.jsx)(x,Object(i.a)({},{pages:n,setExpand:I,darkMode:o,windowSize:M}))},c):Object(a.jsx)(m.a.div,{style:s},c)}))]})},w=function(e,t){return{className:"".concat(window.location.pathname===e?"focused":"")}},k=function(e){return{style:{stroke:window.location.pathname===e?"#4c75f2":""}}},y=function(e){var t=e.darkMode;return Object(a.jsx)("div",{className:"SunMoon",onClick:t.toggle,children:Object(a.jsx)("div",{children:t.value?Object(a.jsx)(u.a,{color:"#ffc107"}):Object(a.jsx)(h.a,{})})})},N=n(5),S=n(171),L=Object(d.lazy)((function(){return Promise.all([n.e(3),n.e(5),n.e(29),n.e(30)]).then(n.bind(null,268))})),z=Object(d.lazy)((function(){return Promise.all([n.e(3),n.e(26)]).then(n.bind(null,226))})),C=Object(d.lazy)((function(){return Promise.all([n.e(3),n.e(5),n.e(32)]).then(n.bind(null,269))})),I=Object(d.lazy)((function(){return n.e(27).then(n.bind(null,270))}));t.default=function(){var e=Object(S.a)(!1),t=Object(d.useState)(!1),n=Object(c.a)(t,2),s=n[0],r=n[1],l=Object(N.h)(),b=[{pageLink:"/",view:L,displayName:"Home",showInNavbar:!0},{pageLink:"/blog",view:o,displayName:"Blog",showInNavbar:!0},{pageLink:"/about",view:z,displayName:"About",showInNavbar:!0},{pageLink:"/state/:stateCode",view:C,displayName:"State",showInNavbar:!1}];return Object(d.useEffect)((function(){s&&(document.documentElement.scrollTo({top:0,behavior:"smooth"}),document.body.scrollTo({top:0,behavior:"smooth"}))}),[s]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d.Suspense,{fallback:Object(a.jsx)("div",{}),children:Object(a.jsx)(I,Object(i.a)({},{showLanguageSwitcher:s,setShowLanguageSwitcher:r}))}),Object(a.jsx)(g,Object(i.a)(Object(i.a)({pages:b},{darkMode:e}),{showLanguageSwitcher:s,setShowLanguageSwitcher:r})),Object(a.jsx)(d.Suspense,{fallback:Object(a.jsx)("div",{}),children:Object(a.jsxs)(N.d,{location:l,children:[b.map((function(e,t){return Object(a.jsx)(N.b,{exact:!0,path:e.pageLink,render:function(t){t.match;return Object(a.jsx)(e.view,{})}},t)})),Object(a.jsx)(N.a,{to:"/"})]})})]})}}}]);
//# sourceMappingURL=22.8fc14ef7.chunk.js.map
