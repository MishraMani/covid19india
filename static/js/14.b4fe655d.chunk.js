(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[14],{104:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"f",(function(){return r})),a.d(t,"i",(function(){return c})),a.d(t,"j",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d})),a.d(t,"g",(function(){return u})),a.d(t,"h",(function(){return m}));var n={position:"absolute",transform:"translate3d(-20rem, 0, 0)",height:"100vh",zIndex:-1},i={position:"absolute",transform:"translate3d(10rem, 0, 0)"},o={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},r={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},c={opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},l={opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},s={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},d={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"},u={opacity:1,transform:"translate3d(0, 0px, 0)",height:200},m={opacity:0,transform:"translate3d(0, 2px, 0)",height:0}},131:function(e){e.exports=JSON.parse('{"english":"English","hindi":"\u0939\u093f\u0902\u0926\u0940","bengali":"\u09ac\u09be\u0982\u09b2\u09be","gujarati":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","kannada":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","malayalam":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","marathi":"\u092e\u0930\u093e\u0920\u0940","odiya":"\u0b13\u0b21\u0b3f\u0b06","punjabi":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","tamil":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","telugu":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"}')},155:function(e,t,a){},256:function(e,t,a){"use strict";a.r(t);var n=a(86),i=(a(155),function(){window.location.replace("https://blog.covid19india.org")}),o=a(104),r=a(131),c=a(1),l=a.n(c),s=a(221),d=a(222),u=a(262),m=a(41),p=a(89),h=a(220),b=a(254),f=a(264),v=a(49),g=a.n(v);a(67);function w(e){var t=this,a=e.pages,n=e.setExpand,i=e.darkMode,o=e.windowSize,r=Object(c.useRef)(null),s=Object(u.a)().t,d=Object(c.useCallback)((function(){o.width>768&&n(!1)}),[n,o.width]);return l.a.createElement("div",{className:"expand",ref:r,onMouseLeave:d},a.map((function(e,a){return!0===e.showInNavbar?l.a.createElement(m.b,{to:e.pageLink,key:a,onClick:n.bind(t,!1)},l.a.createElement("span",k(e.pageLink,e.animationDelayForNavbar),s(e.displayName))):null})),o.width<768&&l.a.createElement(y,{darkMode:i}),l.a.createElement("div",{className:"expand-bottom"},l.a.createElement("h5",null,s("A crowdsourced initiative."))))}var E=function(e){var t,a=e.pages,i=e.darkMode,s=e.showLanguageSwitcher,d=e.setShowLanguageSwitcher,m=Object(u.a)(),v=m.i18n,E=(m.t,Object.keys(r).includes(null===v||void 0===v?void 0:v.language)?null===v||void 0===v?void 0:v.language:null===v||void 0===v||null===(t=v.options)||void 0===t?void 0:t.fallbackLng[0]),k=Object(c.useState)(!1),j=Object(n.a)(k,2),O=j[0],N=j[1];Object(h.a)(O);var S=Object(b.a)(),x=Object(p.c)((function(){return{opacity:0}})),I=Object(n.a)(x,3),L=I[0],C=I[1],z=I[2];C({opacity:1}),z();var M=Object(p.f)(O,null,{from:S.width<769?o.d:o.c,enter:S.width<769?o.f:o.e,leave:S.width<769?o.d:o.c,config:{mass:1,tension:210,friction:26}}),A=(Object(c.useCallback)((function(){S.width>769&&N(!0)}),[S.width]),Object(c.useState)(0)),T=Object(n.a)(A,2),D=T[0],B=T[1],J=Object(c.useState)(0),P=Object(n.a)(J,2),F=P[0],H=P[1],R=Object(c.useState)(0),U=Object(n.a)(R,2),V=U[0],W=U[1],_=Object(c.useState)(0),q=Object(n.a)(_,2),G=q[0],K=q[1],Q=Object(c.useState)(0),X=Object(n.a)(Q,2),Y=X[0],Z=X[1];return Object(c.useEffect)((function(){fetch("https://api.covid19india.org/v3/min/data.min.json").then((function(e){return e.json()})).then((function(e){var t=e.TT.total,a=t.confirmed,n=t.recovered,i=t.deceased,o=t.tested,r=t.migrated;H(a-i-n-r),B(a),W(n),K(i),Z(o)}))}),[]),l.a.createElement(p.a.div,{className:"Navbar",style:L},l.a.createElement("img",{className:"fadeInUp logo",alt:"COVID19 India Live Update Tracker",src:"https://1.bp.blogspot.com/-qwC8UL0odUE/X9HP9-dvkzI/AAAAAAAAFO0/SuaGvU8bonAEOjTDigEbuRSJAO5pTPlUQCNcBGAsYHQ/s0/mani%2Btracker.png",onClick:function(){return window.location="https://corona-covid-19-india.blogspot.com/"},style:{animationDelay:"0.0s",width:"/clusters"===window.location.pathname?"1.5rem":"",height:(window.location.pathname,"5rem"),transition:"all 0.3s ease-in-out"}}),l.a.createElement("div",{className:"navbar-left",onClick:d.bind(this,!s)},r[E]),l.a.createElement("div",{className:"navbar-middle"},l.a.createElement("a",{className:"fadeInUp",href:"https://api.whatsapp.com://send?text=Coronavirus daily status Total Count India%0AConfirmed:".concat(D,",Active:").concat(F,",%0ARecovered:").concat(V,",Deaths:").concat(G,",Tested:").concat(Y,"%0A%0Ahttps://covid19-live-update-tracker.blogspot.com/"),target:"_blank",rel:"nofollow",onClick:function(){return g.a.analytics().logEvent("Covid19WhatsappShareClicked")},style:{animationDelay:"0.0s",transition:"all 0.3s ease-in-out"}},l.a.createElement(f.a,{bgStyle:{fill:i.value?"#1e1e30":"#43a64e"},style:{width:30}}))),l.a.createElement("div",{className:"navbar-right"},S.width<769&&l.a.createElement("span",null,l.a.createElement(y,{darkMode:i})),S.width>769&&l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,S.width>768&&l.a.createElement(y,{darkMode:i})))),M.map((function(e){var t=e.item,n=e.key,o=e.props;return t?l.a.createElement(p.a.div,{key:n,style:o},l.a.createElement(w,{pages:a,setExpand:N,darkMode:i,windowSize:S})):l.a.createElement(p.a.div,{key:n,style:o})})))},k=function(e,t){return{className:"".concat(window.location.pathname===e?"focused":"")}},y=function(e){var t=e.darkMode;return l.a.createElement("div",{className:"SunMoon",onClick:t.toggle},l.a.createElement("div",null,t.value?l.a.createElement(s.a,{color:"#ffc107"}):l.a.createElement(d.a,null)))},j=a(6),O=a(163),N=Object(c.lazy)((function(){return Promise.all([a.e(3),a.e(4),a.e(19)]).then(a.bind(null,251))})),S=Object(c.lazy)((function(){return Promise.all([a.e(3),a.e(30)]).then(a.bind(null,224))})),x=Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(3),a.e(4),a.e(11)]).then(a.bind(null,248))})),I=Object(c.lazy)((function(){return a.e(20).then(a.bind(null,261))}));t.default=function(){var e=Object(O.a)(!1),t=Object(c.useState)(!1),a=Object(n.a)(t,2),o=a[0],r=a[1],s=Object(j.h)(),d=[{pageLink:"/",view:N,displayName:"Home",showInNavbar:!0},{pageLink:"/index.html",view:N,displayName:"Home",showInNavbar:!0},{pageLink:"/blog",view:i,displayName:"Blog",showInNavbar:!0},{pageLink:"/about",view:S,displayName:"About",showInNavbar:!0},{pageLink:"/state/:stateCode",view:x,displayName:"State",showInNavbar:!1}];return l.a.createElement("div",{className:"App"},l.a.createElement(c.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(I,{showLanguageSwitcher:o,setShowLanguageSwitcher:r})),l.a.createElement(E,Object.assign({pages:d},{darkMode:e},{showLanguageSwitcher:o,setShowLanguageSwitcher:r})),l.a.createElement(c.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(j.d,{location:s},d.map((function(e,t){return l.a.createElement(j.b,{exact:!0,path:e.pageLink,render:function(t){t.match;return l.a.createElement(e.view,null)},key:t})})),l.a.createElement(j.a,{to:"/"}))))}}}]);
//# sourceMappingURL=14.b4fe655d.chunk.js.map
