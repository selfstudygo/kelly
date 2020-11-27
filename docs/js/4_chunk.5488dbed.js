/*! For license information please see 4_chunk.5488dbed.js.LICENSE.txt */
(this.webpackJsonptheblog=this.webpackJsonptheblog||[]).push([[4],{141:function(n,e,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)n.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&n.push(i)}else if("object"===o)for(var c in r)t.call(r,c)&&r[c]&&n.push(c)}}return n.join(" ")}n.exports?(a.default=a,n.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(n.exports=r)}()},143:function(n,e,t){(function(e){var t=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=c||u||Function("return this")(),f=Object.prototype.toString,m=Math.max,s=Math.min,d=function(){return l.Date.now()};function p(n,e,t){var r,a,o,i,c,u,l=0,f=!1,p=!1,g=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function v(e){var t=r,o=a;return r=a=void 0,l=e,i=n.apply(o,t)}function x(n){return l=n,c=setTimeout(j,e),f?v(n):i}function y(n){var t=n-u;return void 0===u||t>=e||t<0||p&&n-l>=o}function j(){var n=d();if(y(n))return O(n);c=setTimeout(j,function(n){var t=e-(n-u);return p?s(t,o-(n-l)):t}(n))}function O(n){return c=void 0,g&&r?v(n):(r=a=void 0,i)}function E(){var n=d(),t=y(n);if(r=arguments,a=this,u=n,t){if(void 0===c)return x(u);if(p)return c=setTimeout(j,e),v(u)}return void 0===c&&(c=setTimeout(j,e)),i}return e=b(e)||0,h(t)&&(f=!!t.leading,o=(p="maxWait"in t)?m(b(t.maxWait)||0,e):o,g="trailing"in t?!!t.trailing:g),E.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=u=a=c=void 0},E.flush=function(){return void 0===c?i:O(d())},E}function h(n){var e=typeof n;return!!n&&("object"==e||"function"==e)}function b(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==f.call(n)}(n))return NaN;if(h(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=h(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(t,"");var c=a.test(n);return c||o.test(n)?i(n.slice(2),c?2:8):r.test(n)?NaN:+n}n.exports=function(n,e,t){var r=!0,a=!0;if("function"!=typeof n)throw new TypeError("Expected a function");return h(t)&&(r="leading"in t?!!t.leading:r,a="trailing"in t?!!t.trailing:a),p(n,e,{leading:r,maxWait:e,trailing:a})}}).call(this,t(22))},155:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(15),a=t(20),o=function(){function n(){Object(r.a)(this,n)}return Object(a.a)(n,[{key:"dateFormatNumber",value:function(n){var e=new Date(n),t=e.getFullYear(),r="0"+e.getMonth(),a="0"+e.getDate();return this.dateFormat("".concat(t).concat(r.slice(-2)).concat(a.slice(-2)))}},{key:"dateFormat",value:function(e){if("number"===typeof e)return this.dateFormatNumber(e);var t=e.slice(0,4),r=e.slice(4,6),a=e.slice(6,8),o="jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dep".split(",").map((function(n){return"".concat(n[0].toUpperCase()).concat(n.slice(1))}));return t===n.THIS_YEAR?"".concat(o[+r-1]," . ").concat(a):"".concat(o[+r-1]," . ").concat(a," . ").concat(t)}}]),n}();o.THIS_YEAR=(new Date).getFullYear().toString();var i=new o},157:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t(0),a=t.n(r),o=function(n){var e=n.type;return(a.a.createElement("span",{role:"img","aria-label":e,className:"emoji-".concat(e)}))}},159:function(n,e,t){"use strict";e.a=["bath_tub","first_commit","happy_birthday","hello_me","if_ryan","mac_env","utterances","video_cam"].reduce((function(n,e){return n[e]=function(){return t(160)("./".concat(e,".jsx"))},n}),{})},160:function(n,e,t){var r={"./bath_tub.jsx":[164,10],"./first_commit.jsx":[165,11],"./happy_birthday.jsx":[166,12],"./hello_me.jsx":[167,13],"./if_ryan.jsx":[158,14],"./mac_env.jsx":[168,7],"./utterances.jsx":[169,8],"./video_cam.jsx":[170,9]};function a(n){if(!t.o(r,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[n],a=e[0];return t.e(e[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=160,n.exports=a},161:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t(23),a=t(0),o=t.n(a),i=t(42),c=function(n){var e=n.loader,t=n.children,c=n.name,u=Object(a.useState)(null),l=Object(r.a)(u,2),f=l[0],m=l[1];if(Object(a.useEffect)((function(){var n=!0;return m(null),e().then((function(e){n&&m({component:e.default})}),(function(e){n&&m("failed")})),function(){n=!1}}),[e]),"failed"===f)return null;if(null===f||!f.component)return o.a.createElement(i.a,null);var s=f.component.summaryInfo;return s?t({summary:s,Comp:f.component,name:c}):null}},162:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t(2);function a(){var n=Object(r.a)(["\n  text-align: center;\n  margin: 5rem auto;\n  padding: 1rem;\n  max-width: 400px;\n  font-size: 2rem;\n"]);return a=function(){return n},n}var o=t(1).d.div(a())},163:function(n,e,t){"use strict";var r=t(2),a=t(0),o=t.n(a),i=t(155),c=t(1),u=t(141),l=t.n(u),f=t(5),m=t(83),s=t(6),d=t(41);function p(){var n=Object(r.a)(["\n  font-style: normal;\n  text-transform: capitalize;\n  color: ",";\n  &::before {\n    content: '#';\n  }\n  margin-right: 5px;\n"]);return p=function(){return n},n}function h(){var n=Object(r.a)(["\n  font-size: 1.4rem;\n"]);return h=function(){return n},n}function b(){var n=Object(r.a)(["\n  font-size: 1.6rem;\n  margin-bottom: 0.5rem;\n  ","\n"]);return b=function(){return n},n}function g(){var n=Object(r.a)(["\n  font-size: 1.8rem;\n  font-weight: 600;\n  color: ",";\n  ","\n  margin-bottom: 1rem;\n"]);return g=function(){return n},n}function v(){var n=Object(r.a)(["\n  flex: 1 1 0;\n  min-width: 0;\n"]);return v=function(){return n},n}function x(){var n=Object(r.a)(["\n  flex: 0 0 8rem;\n  height: 8rem;\n  margin-right: 2rem;\n  border-radius: 50%;\n  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.125);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n"]);return x=function(){return n},n}function y(){var n=Object(r.a)(["\n  font-weight: normal;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  &:focus {\n    outline: 1px solid #eee;\n    outline-offset: 8px;\n  }\n  color: ",";\n  & + & {\n    margin-top: 3rem;\n  }\n"]);return y=function(){return n},n}function j(){var n=Object(r.a)(["\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n"]);return j=function(){return n},n}function O(){var n=Object(r.a)(["\n  margin: 0 auto;\n  max-width: 420px;\n"]);return O=function(){return n},n}function E(){var n=Object(r.a)(["\n  font-size: 1.6rem;\n  margin-top: 2rem;\n  padding: 4rem 1rem 6rem;\n  border-top: 1px solid ",";\n"]);return E=function(){return n},n}var w=c.d.div(E(),(function(n){return n.theme.color.light})),k=c.d.dl(O()),z=c.d.dt(j()),T=c.d.dd(y(),(function(n){return n.theme.color.asideText})),_=c.d.div(x()),N=c.d.dl(v()),C=c.d.dt(g(),(function(n){return n.theme.color.subText}),f.f.ellipsis(1)),F=c.d.dd(b(),f.f.ellipsis(1)),I=c.d.dd(h()),U=c.d.em(p(),(function(n){return n.theme.color.light})),M=function(n){var e=n.item,t=n.onClickFactory;return(o.a.createElement(T,{role:"link","aria-label":"Jump to read article: ".concat(e.title),tabIndex:0,onClick:t(e.fileName)},o.a.createElement(_,{style:d.a.getBackgroundWithDefaultImage(e.imageUrl)}),o.a.createElement(N,null,o.a.createElement(C,null,e.title),o.a.createElement(F,null,e.desc),o.a.createElement(I,{style:{display:e.tags.length?"block":"none"}},e.tags.map((function(n){return o.a.createElement(U,{key:n},n)}))))))},S=function(n){var e=n.items,t=Object(s.g)(),r=Object(a.useCallback)((function(n){return function(){return t.push("/view/".concat(n))}}),[t]);return e.length?o.a.createElement(w,null,o.a.createElement(k,null,o.a.createElement(z,null,"More to Read"),e.map((function(n){return o.a.createElement(M,{key:n.fileName,item:n,onClickFactory:r})})))):null},D=t(85),R=t(48),A=t(24),W=t(25),$=t(8),L=t(143),P=t.n(L),Y=t(84),B=t.n(Y),J={},q={},H=function(n){var e=n.eventName,t=n.handler,r=n.capture,o=void 0!==r&&r,i=n.throttle,c=n.debounce;return Object(a.useEffect)((function(){var n=o?"capture":"bubble",r=i&&i>10,a=c&&c>10,u=r?P()(t,i):a?B()(t,c):t;r&&a&&console.warn("throttle and debounce both are set. throttle is used. ");var l="".concat(e,"_").concat(n),f=J[l]||(J[l]=[]);return 0===f.length&&(q[l]=function(n){f.forEach((function(e){e(n)}))},window.addEventListener(e,q[l],o)),f.push(u),function(){var n=f.findIndex((function(n){return n===u}));f.splice(n,1),0===f.length&&window.removeEventListener(e,q[l],o)}}),[e,o,t,i,c]),null};function G(){var n=Object(r.a)(["\n  margin-top: 4rem;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 760px;\n  margin-left: auto;\n  margin-right: auto;\n  iframe {\n    position: relative;\n    box-sizing: border-box;\n    width: 100%;\n    max-width: 760px;\n    margin-left: auto;\n    margin-right: auto;\n    border: none;\n    height: 150px;\n    transition: height 0.3s ease;\n  }\n"]);return G=function(){return n},n}var K=c.d.div(G());var Q="".concat("https://utteranc.es","/utterances.html"),V=function(n){if("https://utteranc.es"===n.origin){var e=n.data;if(e&&"resize"===e.type&&e.height){var t=document.querySelector("#utterancesFrame");t&&(t.style.height="".concat(e.height,"px"))}}},X=function(n){var e=document.querySelector("meta[property='".concat(n,"'], meta[name='").concat(n,"']"));return e?e.content:""},Z=function(n){var e,t=function(n){for(var e,t=/\+/g,r=/([^&=]+)=?([^&]*)/g,a=function(n){return decodeURIComponent(n.replace(t," "))},o={};e=r.exec(n);)o[a(e[1])]=a(e[2]);return o}(location.search.slice(1)),r=n.theme||(window.matchMedia("(prefers-color-scheme: dark)").matches?"github-dark":"github-light"),a="".concat(location.protocol,"//").concat(location.host),o=a+location.pathname+location.search,i=n.title||document.title,c=n.ogTitle||X("og:title"),u=X("description").slice(0,50),l=n.pathname||("/"===location.pathname?"index":location.pathname.slice(1).replace(/\.\w+$/,""));return Object($.a)(Object($.a)(Object($.a)({},t),n),{},(e={theme:r,url:o,origin:a,pathname:l,title:i},Object(W.a)(e,"og:title",c),Object(W.a)(e,"description",u),Object(W.a)(e,"ogTitle",""),e))},nn=function(n){var e=n.title,t=n.repo,r=n.pathname,i=n.theme,c=n.label,u=n.issueTerm,l=n.ogTitle,f=Object(a.useRef)(null),m=function(n){var e=[];for(var t in n)n.hasOwnProperty(t)&&n[t]&&e.push("".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(n[t])));return e.join("&")}(Z({title:e,repo:t,"issue-term":u||"pathname",label:c,theme:i,ogTitle:l,pathname:r}));return o.a.createElement(K,null,o.a.createElement(H,{handler:V,eventName:"message"}),o.a.createElement("iframe",{ref:f,id:"utterancesFrame",title:"Comments",scrolling:"no",loading:"lazy",src:"".concat(Q,"?").concat(m)}))};function en(){var n=Object(r.a)(["\n  padding: 1rem;\n  font-size: inherit;\n  text-decoration: none !important;\n  position: relative;\n  span {\n    position: absolute;\n    right: 100%;\n    background: #333;\n    border-radius: 3px;\n    white-space: nowrap;\n    padding: 0 5px;\n    color: #fff;\n    font-size: 1.4rem;\n    opacity: 0;\n  }\n  &:hover {\n    span {\n      opacity: 1;\n    }\n  }\n  &::before {\n    content: '\ud83d\udc33';\n  }\n  &::after {\n    content: '';\n    display: block;\n    background: linear-gradient(\n      #ff0000,\n      #ff7300,\n      #fffb00,\n      #48ff00,\n      #00ffd5,\n      #002bff,\n      #7a00ff,\n      #ff00c8,\n      #ff0000\n    );\n    height: 10px;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(r.a)(["\n  margin-top: 7rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]);return tn=function(){return n},n}function rn(){var n=Object(r.a)(["\n  &::before {\n    content: attr(data-nth) '.';\n  }\n  margin-right: 0.5em;\n"]);return rn=function(){return n},n}function an(){var n=Object(r.a)(["\n  float: left;\n  display: block;\n  font-size: inherit;\n  padding: 3px 2px 1px;\n  margin: 0 3px 5px;\n  letter-spacing: 0.5px;\n  color: ",";\n  text-decoration: underline ",";\n  word-spacing: -3px;\n  font-style: normal;\n  text-transform: capitalize;\n  &::before {\n    content: '#';\n    font-family: ",";\n    color: ",";\n    margin-right: 3px;\n    padding: 0 2px;\n    font-family: ",";\n    display: inline-block;\n    border-radius: 0.5em 0 0.5em 0;\n    line-height: 0.7;\n    border: 1px solid ",";\n  }\n  &:first-child {\n    margin-left: 0;\n  }\n"]);return an=function(){return n},n}function on(){var n=Object(r.a)(["\n  font-size: 1.5rem;\n  font-family: ",";\n  color: ",";\n  &::after {\n    content: '';\n    display: block;\n    clear: both;\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(r.a)(["\n  color: ",";\n  min-height: 1px;\n  margin-bottom: 5rem;\n  font-size: 1.8rem;\n  text-align: center;\n  &::before {\n    content: '\"';\n    margin-right: 5px;\n  }\n  &::after {\n    content: '\"';\n    margin-left: 5px;\n  }\n"]);return cn=function(){return n},n}function un(){var n=Object(r.a)(["\n  font-size: 4.8rem;\n  line-height: 1.2;\n  font-weight: 600;\n  margin: 0 0 5rem;\n  padding: 1rem 0 2rem;\n  font-family: ",";\n  color: ",";\n  letter-spacing: 1px;\n  border-bottom: 1px solid #eee;\n"]);return un=function(){return n},n}function ln(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 1.4rem;\n  line-height: 1.1;\n  border-left: 2px solid ",";\n  padding-left: 1rem;\n  display: flex;\n  justify-content: flex-start;\n"]);return ln=function(){return n},n}function fn(){var n=Object(r.a)(["\n  position: relative;\n  padding: 5rem 20px 7rem;\n  font-family: ",";\n"]);return fn=function(){return n},n}t.d(e,"a",(function(){return yn}));var mn=c.d.div(fn(),f.c.basic),sn=c.d.div(ln(),(function(n){return n.theme.color.sub}),(function(n){return n.theme.color.sub})),dn=c.d.h1(un(),f.c.basic,(function(n){return n.theme.color.main})),pn=c.d.p(cn(),(function(n){return n.theme.color.asideText})),hn=c.d.div(on(),f.c.code,(function(n){return n.theme.color.asideText})),bn=c.d.em(an(),(function(n){return n.theme.color.subText}),(function(n){return n.theme.color.sub}),f.c.basic,(function(n){return n.theme.color.sub}),f.c.code,(function(n){return n.theme.color.sub})),gn=c.d.span(rn()),vn=c.d.div(tn()),xn=Object(c.d)(A.b)(en()),yn=Object(a.memo)((function(n){var e=n.summary,t=n.name,r=n.children,a=n.hideComment,c=n.className,u=e.type,f=Object(m.c)(u);if(Object(m.b)(u),!f)return null;var s,d=f.findIndex((function(n){return n.fileName===t})),p=-1!==d,h=f[d+1],b=[f[d-1],h].filter(Boolean),g=e.imageUrl&&"".concat(R.a.getBaseUrl(!0)).concat(e.imageUrl);return o.a.createElement(mn,{className:l()("page-animate-opacity",c)},o.a.createElement(D.a,{title:e.title,desc:e.desc,imageUrl:g,isArticle:!0}),o.a.createElement(sn,null,o.a.createElement("time",null,i.a.dateFormat(e.time))),o.a.createElement(dn,null,p&&o.a.createElement(gn,{"data-nth":(s=f.length-1-d,"000".concat(s+1).slice(-3))}),e.title),e.desc&&o.a.createElement(pn,null,e.desc),o.a.createElement("div",{className:"editor"},r),o.a.createElement(vn,null,o.a.createElement(hn,null,e.tags.map((function(n){return o.a.createElement(bn,{key:n},n)}))),o.a.createElement(xn,{to:"/list/".concat(e.type),title:"to list"},o.a.createElement("span",null,"To List"))),!a&&o.a.createElement(nn,{repo:"selfstudygo/kelly",label:"comment",theme:"github-light",pathname:t}),p&&o.a.createElement(S,{items:b}))}));yn.displayName="PostArticle"},173:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),o=t.n(a),i=t(1),c=t(5),u=t(159),l=t(161),f=t(28),m=t(6),s=t(162),d=t(163),p=t(157);function h(){var n=Object(r.a)(["\n  font-size: 1.8rem;\n  line-height: 1.6;\n  max-width: ","px;\n  margin: 0 auto;\n  padding: 0 10px;\n"]);return h=function(){return n},n}var b=i.d.div(h(),c.e.contentMaxWidth),g=function(n){var e=n.summary,t=n.Comp,r=n.name;return(o.a.createElement(d.a,{summary:e,name:r},o.a.createElement(t,null)))};e.default=function(){var n=Object(f.b)().viewMatch;if(!n)return o.a.createElement(m.a,{to:"/landing"});var e=n.params.name,t=u.a[e];return t?o.a.createElement(b,null,o.a.createElement(l.a,{loader:t,name:e},(function(n){var e=n.summary,t=n.Comp,r=n.name;return(o.a.createElement(g,{summary:e,name:r,Comp:t}))}))):o.a.createElement(b,null,o.a.createElement(s.a,null,"no such article\xa0",o.a.createElement(p.a,{type:"cry"})))}}}]);