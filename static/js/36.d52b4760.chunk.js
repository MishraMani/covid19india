(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[36],{140:function(e,t,r){"use strict";var n=r(1),a=r.n(n),s=r(21),c=r.n(s);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,s=e.size,c=void 0===s?24:s,l=o(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),a.a.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Send",t.a=l},240:function(e,t,r){"use strict";r.r(t);var n=r(20),a=r(6),s=r(32),c=r(74),i=r(73),o=r(1),l=r(140),d=new Date,j=d;t.default=function(e){var t=e.updates;return Object(o.useLayoutEffect)((function(){j=d})),Object(n.jsxs)("div",{className:"updates",children:[Object(n.jsx)("div",{className:"updates-header",children:Object(n.jsx)("h2",{children:Object(c.a)(j,"d MMM")})}),t.slice(-a.E).reverse().map((function(e,t){e.update=e.update.replace(/\n/g,"<br/>");var r=new Date(1e3*e.timestamp);return Object(n.jsxs)(o.Fragment,{children:[r.getDate()!==j.getDate()?(j=r,Object(n.jsxs)(n.Fragment,{children:[0===t?Object(n.jsx)("div",{className:"update",children:Object(n.jsx)("h4",{children:"No updates yet!"})}):"",Object(n.jsx)("div",{className:"updates-header",children:Object(n.jsx)("h2",{children:Object(c.a)(r,"d MMM")})})]})):" ",Object(n.jsxs)("div",{className:"update",children:[Object(n.jsx)("h5",{children:Object(s.a)(Object(i.a)(new Date(1e3*e.timestamp),new Date))+" ago"}),Object(n.jsx)("h4",{dangerouslySetInnerHTML:{__html:e.update}})]},t)]},t)})),Object(n.jsx)("div",{className:"updates-footer",children:Object(n.jsx)("a",{href:"https://t.me/covid19indiaorg_updates",target:"_blank",className:"telegram",rel:"noopener noreferrer",children:Object(n.jsxs)("h4",{children:[Object(n.jsx)(l.a,{}),"Join Instant Updates channel"]})})})]})}}}]);
//# sourceMappingURL=36.d52b4760.chunk.js.map
