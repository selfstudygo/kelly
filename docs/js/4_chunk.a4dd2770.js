/*! For license information please see 4_chunk.a4dd2770.js.LICENSE.txt */
(this.webpackJsonptheblog=this.webpackJsonptheblog||[]).push([[4],{308:function(n,e,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&n.push(o)}else if("object"===i)for(var c in r)t.call(r,c)&&r[c]&&n.push(c)}}return n.join(" ")}n.exports?(a.default=a,n.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(n.exports=r)}()},310:function(n,e,t){(function(e){var t=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,o=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=c||u||Function("return this")(),f=Object.prototype.toString,m=Math.max,s=Math.min,d=function(){return l.Date.now()};function p(n,e,t){var r,a,i,o,c,u,l=0,f=!1,p=!1,b=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function v(e){var t=r,i=a;return r=a=void 0,l=e,o=n.apply(i,t)}function x(n){return l=n,c=setTimeout(j,e),f?v(n):o}function y(n){var t=n-u;return void 0===u||t>=e||t<0||p&&n-l>=i}function j(){var n=d();if(y(n))return O(n);c=setTimeout(j,function(n){var t=e-(n-u);return p?s(t,i-(n-l)):t}(n))}function O(n){return c=void 0,b&&r?v(n):(r=a=void 0,o)}function E(){var n=d(),t=y(n);if(r=arguments,a=this,u=n,t){if(void 0===c)return x(u);if(p)return c=setTimeout(j,e),v(u)}return void 0===c&&(c=setTimeout(j,e)),o}return e=g(e)||0,h(t)&&(f=!!t.leading,i=(p="maxWait"in t)?m(g(t.maxWait)||0,e):i,b="trailing"in t?!!t.trailing:b),E.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=u=a=c=void 0},E.flush=function(){return void 0===c?o:O(d())},E}function h(n){var e=typeof n;return!!n&&("object"==e||"function"==e)}function g(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==f.call(n)}(n))return NaN;if(h(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=h(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(t,"");var c=a.test(n);return c||i.test(n)?o(n.slice(2),c?2:8):r.test(n)?NaN:+n}n.exports=function(n,e,t){var r=!0,a=!0;if("function"!=typeof n)throw new TypeError("Expected a function");return h(t)&&(r="leading"in t?!!t.leading:r,a="trailing"in t?!!t.trailing:a),p(n,e,{leading:r,maxWait:e,trailing:a})}}).call(this,t(21))},322:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t(16),a=t(22),i=function(){function n(){Object(r.a)(this,n)}return Object(a.a)(n,[{key:"dateFormatNumber",value:function(n){var e=new Date(n),t=e.getFullYear(),r="0"+e.getMonth(),a="0"+e.getDate();return this.dateFormat("".concat(t).concat(r.slice(-2)).concat(a.slice(-2)))}},{key:"dateFormat",value:function(e){if("number"===typeof e)return this.dateFormatNumber(e);var t=e.slice(0,4),r=e.slice(4,6),a=e.slice(6,8),i="jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dep".split(",").map((function(n){return"".concat(n[0].toUpperCase()).concat(n.slice(1))}));return t===n.THIS_YEAR?"".concat(i[+r-1]," . ").concat(a):"".concat(i[+r-1]," . ").concat(a," . ").concat(t)}}]),n}();i.THIS_YEAR=(new Date).getFullYear().toString();var o=new i},326:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(0),a=t.n(r),i=function(n){var e=n.type;return(a.a.createElement("span",{role:"img","aria-label":e,className:"emoji-".concat(e)}))}},327:function(n,e,t){"use strict";e.a=["bath_tub","first_commit","happy_birthday","hello_me","if_ryan","mac_env","the_9_habits_of_highly_ineffective_programmers","the_best_engineering_advice_I_ever_got","utterances","video_cam"].reduce((function(n,e){return n[e]=function(){return t(328)("./".concat(e,".jsx"))},n}),{})},328:function(n,e,t){var r={"./bath_tub.jsx":[332,12],"./first_commit.jsx":[333,13],"./happy_birthday.jsx":[334,14],"./hello_me.jsx":[335,15],"./if_ryan.jsx":[340,16],"./mac_env.jsx":[336,7],"./the_9_habits_of_highly_ineffective_programmers.jsx":[325,10],"./the_best_engineering_advice_I_ever_got.jsx":[337,11],"./utterances.jsx":[338,8],"./video_cam.jsx":[339,9]};function a(n){if(!t.o(r,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[n],a=e[0];return t.e(e[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=328,n.exports=a},329:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t(24),a=t(0),i=t.n(a),o=t(50),c=function(n){var e=n.loader,t=n.children,c=n.name,u=Object(a.useState)(null),l=Object(r.a)(u,2),f=l[0],m=l[1];if(Object(a.useEffect)((function(){var n=!0;return m(null),e().then((function(e){n&&m({component:e.default})}),(function(e){n&&m("failed")})),function(){n=!1}}),[e]),"failed"===f)return null;if(null===f||!f.component)return i.a.createElement(o.a,null);var s=f.component.summaryInfo;return s?t({summary:s,Comp:f.component,name:c}):null}},330:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(2);function a(){var n=Object(r.a)(["\n  text-align: center;\n  margin: 5rem auto;\n  padding: 1rem;\n  max-width: 400px;\n  font-size: 2rem;\n"]);return a=function(){return n},n}var i=t(1).d.div(a())},331:function(n,e,t){"use strict";var r=t(2),a=t(0),i=t.n(a),o=t(322),c=t(1),u=t(308),l=t.n(u),f=t(5),m=t(115),s=t(6),d=t(46);function p(){var n=Object(r.a)(["\n  font-style: normal;\n  text-transform: capitalize;\n  color: ",";\n  &::before {\n    content: '#';\n  }\n  margin-right: 5px;\n"]);return p=function(){return n},n}function h(){var n=Object(r.a)(["\n  font-size: 1.4rem;\n"]);return h=function(){return n},n}function g(){var n=Object(r.a)(["\n  font-size: 1.6rem;\n  margin-bottom: 0.5rem;\n  ","\n"]);return g=function(){return n},n}function b(){var n=Object(r.a)(["\n  font-size: 1.8rem;\n  font-weight: 600;\n  color: ",";\n  ","\n  margin-bottom: 1rem;\n"]);return b=function(){return n},n}function v(){var n=Object(r.a)(["\n  flex: 1 1 0;\n  min-width: 0;\n"]);return v=function(){return n},n}function x(){var n=Object(r.a)(["\n  display: flex;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  line-height: 1.2;\n  font-size: 1.4rem;\n  background: linear-gradient(\n    ","\n  );\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: bold;\n"]);return x=function(){return n},n}function y(){var n=Object(r.a)(["\n  flex: 0 0 8rem;\n  height: 8rem;\n  margin-right: 2rem;\n  border-radius: 50%;\n  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.125);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n"]);return y=function(){return n},n}function j(){var n=Object(r.a)(["\n  font-weight: normal;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  &:focus {\n    outline: 1px solid #eee;\n    outline-offset: 8px;\n  }\n  color: ",";\n  & + & {\n    margin-top: 3rem;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(r.a)(["\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n"]);return O=function(){return n},n}function E(){var n=Object(r.a)(["\n  margin: 0 auto;\n  max-width: 420px;\n"]);return E=function(){return n},n}function w(){var n=Object(r.a)(["\n  font-size: 1.6rem;\n  margin-top: 2rem;\n  padding: 4rem 1rem 6rem;\n  border-top: 1px solid ",";\n"]);return w=function(){return n},n}var _=c.d.div(w(),(function(n){return n.theme.color.light})),k=c.d.dl(E()),z=c.d.dt(O()),T=c.d.dd(j(),(function(n){return n.theme.color.asideText})),N=c.d.div(y()),C=Object(c.d)(N)(x(),(function(n){var e=n.theme;return"".concat(e.color.pastelGreen,", ").concat(e.color.point,", ").concat(e.color.main)})),F=c.d.dl(v()),I=c.d.dt(b(),(function(n){return n.theme.color.subText}),f.f.ellipsis(1,1.3)),U=c.d.dd(g(),f.f.ellipsis(1)),M=c.d.dd(h()),S=c.d.em(p(),(function(n){return n.theme.color.light})),D=function(n){var e=n.item,t=n.onClickFactory;return(i.a.createElement(T,{role:"link","aria-label":"Jump to read article: ".concat(e.title),tabIndex:0,onClick:t(e.fileName)},e.imageName?i.a.createElement(C,null,e.imageName):i.a.createElement(N,{style:d.a.getBackgroundWithDefaultImage(e.imageUrl)}),i.a.createElement(F,null,i.a.createElement(I,null,e.title),i.a.createElement(U,null,e.desc),i.a.createElement(M,{style:{display:e.tags.length?"block":"none"}},e.tags.map((function(n){return i.a.createElement(S,{key:n},n)}))))))},R=function(n){var e=n.items,t=Object(s.g)(),r=Object(a.useCallback)((function(n){return function(){return t.push("/view/".concat(n))}}),[t]);return e.length?i.a.createElement(_,null,i.a.createElement(k,null,i.a.createElement(z,null,"More to Read"),e.map((function(n){return i.a.createElement(D,{key:n.fileName,item:n,onClickFactory:r})})))):null},A=t(117),W=t(57),$=t(25),L=t(27),P=t(8),Y=t(310),B=t.n(Y),J=t(116),q=t.n(J),H={},G={},K=function(n){var e=n.eventName,t=n.handler,r=n.capture,i=void 0!==r&&r,o=n.throttle,c=n.debounce;return Object(a.useEffect)((function(){var n=i?"capture":"bubble",r=o&&o>10,a=c&&c>10,u=r?B()(t,o):a?q()(t,c):t;r&&a&&console.warn("throttle and debounce both are set. throttle is used. ");var l="".concat(e,"_").concat(n),f=H[l]||(H[l]=[]);return 0===f.length&&(G[l]=function(n){f.forEach((function(e){e(n)}))},window.addEventListener(e,G[l],i)),f.push(u),function(){var n=f.findIndex((function(n){return n===u}));f.splice(n,1),0===f.length&&window.removeEventListener(e,G[l],i)}}),[e,i,t,o,c]),null};function Q(){var n=Object(r.a)(["\n  margin-top: 4rem;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 760px;\n  margin-left: auto;\n  margin-right: auto;\n  iframe {\n    position: relative;\n    box-sizing: border-box;\n    width: 100%;\n    max-width: 760px;\n    margin-left: auto;\n    margin-right: auto;\n    border: none;\n    height: 150px;\n    transition: height 0.3s ease;\n  }\n"]);return Q=function(){return n},n}var V=c.d.div(Q());var X="".concat("https://utteranc.es","/utterances.html"),Z=function(n){if("https://utteranc.es"===n.origin){var e=n.data;if(e&&"resize"===e.type&&e.height){var t=document.querySelector("#utterancesFrame");t&&(t.style.height="".concat(e.height,"px"))}}},nn=function(n){var e=document.querySelector("meta[property='".concat(n,"'], meta[name='").concat(n,"']"));return e?e.content:""},en=function(n){var e,t=function(n){for(var e,t=/\+/g,r=/([^&=]+)=?([^&]*)/g,a=function(n){return decodeURIComponent(n.replace(t," "))},i={};e=r.exec(n);)i[a(e[1])]=a(e[2]);return i}(location.search.slice(1)),r=n.theme||(window.matchMedia("(prefers-color-scheme: dark)").matches?"github-dark":"github-light"),a="".concat(location.protocol,"//").concat(location.host),i=a+location.pathname+location.search,o=n.title||document.title,c=n.ogTitle||nn("og:title"),u=nn("description").slice(0,50),l=n.pathname||("/"===location.pathname?"index":location.pathname.slice(1).replace(/\.\w+$/,""));return Object(P.a)(Object(P.a)(Object(P.a)({},t),n),{},(e={theme:r,url:i,origin:a,pathname:l,title:o},Object(L.a)(e,"og:title",c),Object(L.a)(e,"description",u),Object(L.a)(e,"ogTitle",""),e))},tn=function(n){var e=n.title,t=n.repo,r=n.pathname,o=n.theme,c=n.label,u=n.issueTerm,l=n.ogTitle,f=Object(a.useRef)(null),m=function(n){var e=[];for(var t in n)n.hasOwnProperty(t)&&n[t]&&e.push("".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(n[t])));return e.join("&")}(en({title:e,repo:t,"issue-term":u||"pathname",label:c,theme:o,ogTitle:l,pathname:r}));return i.a.createElement(V,null,i.a.createElement(K,{handler:Z,eventName:"message"}),i.a.createElement("iframe",{ref:f,id:"utterancesFrame",title:"Comments",scrolling:"no",loading:"lazy",src:"".concat(X,"?").concat(m)}))};function rn(){var n=Object(r.a)(["\n  padding: 1rem;\n  font-size: inherit;\n  text-decoration: none !important;\n  position: relative;\n  span {\n    position: absolute;\n    right: 100%;\n    background: #333;\n    border-radius: 3px;\n    white-space: nowrap;\n    padding: 0 5px;\n    color: #fff;\n    font-size: 1.4rem;\n    opacity: 0;\n  }\n  &:hover {\n    span {\n      opacity: 1;\n    }\n  }\n  &::before {\n    content: '\ud83d\udc33';\n  }\n  &::after {\n    content: '';\n    display: block;\n    background: linear-gradient(\n      #ff0000,\n      #ff7300,\n      #fffb00,\n      #48ff00,\n      #00ffd5,\n      #002bff,\n      #7a00ff,\n      #ff00c8,\n      #ff0000\n    );\n    height: 10px;\n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(r.a)(["\n  margin-top: 7rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]);return an=function(){return n},n}function on(){var n=Object(r.a)(["\n  &::before {\n    content: attr(data-nth) '.';\n  }\n  margin-right: 0.5em;\n"]);return on=function(){return n},n}function cn(){var n=Object(r.a)(["\n  float: left;\n  display: block;\n  font-size: inherit;\n  padding: 3px 2px 1px;\n  margin: 0 3px 5px;\n  letter-spacing: 0.5px;\n  color: ",";\n  text-decoration: underline ",";\n  word-spacing: -3px;\n  font-style: normal;\n  text-transform: capitalize;\n  &::before {\n    content: '#';\n    font-family: ",";\n    color: ",";\n    margin-right: 3px;\n    padding: 0 2px;\n    font-family: ",";\n    display: inline-block;\n    border-radius: 0.5em 0 0.5em 0;\n    line-height: 0.7;\n    border: 1px solid ",";\n  }\n  &:first-child {\n    margin-left: 0;\n  }\n"]);return cn=function(){return n},n}function un(){var n=Object(r.a)(["\n  font-size: 1.5rem;\n  font-family: ",";\n  color: ",";\n  &::after {\n    content: '';\n    display: block;\n    clear: both;\n  }\n"]);return un=function(){return n},n}function ln(){var n=Object(r.a)(["\n  color: ",";\n  min-height: 1px;\n  margin-bottom: 5rem;\n  font-size: 1.8rem;\n  text-align: center;\n  &::before {\n    content: '\"';\n    margin-right: 5px;\n  }\n  &::after {\n    content: '\"';\n    margin-left: 5px;\n  }\n"]);return ln=function(){return n},n}function fn(){var n=Object(r.a)(["\n  font-size: 4rem;\n  line-height: 1.2;\n  font-weight: 600;\n  margin: 0 0 5rem;\n  padding: 1rem 0 2rem;\n  font-family: ",";\n  color: ",";\n  letter-spacing: 1px;\n  border-bottom: 1px solid #eee;\n"]);return fn=function(){return n},n}function mn(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 1.4rem;\n  line-height: 1.1;\n  border-left: 2px solid ",";\n  padding-left: 1rem;\n  display: flex;\n  justify-content: flex-start;\n"]);return mn=function(){return n},n}function sn(){var n=Object(r.a)(["\n  position: relative;\n  padding: 5rem 20px 7rem;\n  font-family: ",";\n"]);return sn=function(){return n},n}t.d(e,"a",(function(){return On}));var dn=c.d.div(sn(),f.c.basic),pn=c.d.div(mn(),(function(n){return n.theme.color.sub}),(function(n){return n.theme.color.sub})),hn=c.d.h1(fn(),f.c.basic,(function(n){return n.theme.color.main})),gn=c.d.p(ln(),(function(n){return n.theme.color.asideText})),bn=c.d.div(un(),f.c.code,(function(n){return n.theme.color.asideText})),vn=c.d.em(cn(),(function(n){return n.theme.color.subText}),(function(n){return n.theme.color.sub}),f.c.basic,(function(n){return n.theme.color.sub}),f.c.code,(function(n){return n.theme.color.sub})),xn=c.d.span(on()),yn=c.d.div(an()),jn=Object(c.d)($.b)(rn()),On=Object(a.memo)((function(n){var e=n.summary,t=n.name,r=n.children,a=n.hideComment,c=n.className,u=e.type,f=Object(m.c)(u);if(Object(m.b)(u),!f)return null;var s,d=f.findIndex((function(n){return n.fileName===t})),p=-1!==d,h=f[d+1],g=[f[d-1],h].filter(Boolean),b=e.imageUrl&&"".concat(W.a.getBaseUrl(!0)).concat(e.imageUrl);return i.a.createElement(dn,{className:l()("page-animate-opacity",c)},i.a.createElement(A.a,{title:e.title,desc:e.desc,imageUrl:b,isArticle:!0}),i.a.createElement(pn,null,i.a.createElement("time",null,o.a.dateFormat(e.time))),i.a.createElement(hn,null,p&&i.a.createElement(xn,{"data-nth":(s=f.length-1-d,"000".concat(s+1).slice(-3))}),e.title),e.desc&&i.a.createElement(gn,null,e.desc),i.a.createElement("div",{className:"editor"},r),i.a.createElement(yn,null,i.a.createElement(bn,null,e.tags.map((function(n){return i.a.createElement(vn,{key:n},n)}))),i.a.createElement(jn,{to:"/list/".concat(e.type),title:"to list"},i.a.createElement("span",null,"To List"))),!a&&i.a.createElement(tn,{repo:"selfstudygo/kelly",label:"comment",theme:"github-light",pathname:t}),p&&i.a.createElement(R,{items:g}))}));On.displayName="PostArticle"},343:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),i=t.n(a),o=t(1),c=t(5),u=t(327),l=t(329),f=t(30),m=t(6),s=t(330),d=t(331),p=t(326);function h(){var n=Object(r.a)(["\n  font-size: 1.8rem;\n  line-height: 1.6;\n  max-width: ","px;\n  margin: 0 auto;\n  padding: 0 10px;\n"]);return h=function(){return n},n}var g=o.d.div(h(),c.e.contentMaxWidth),b=function(n){var e=n.summary,t=n.Comp,r=n.name;return(i.a.createElement(d.a,{summary:e,name:r},i.a.createElement(t,null)))};e.default=function(){var n=Object(f.b)().viewMatch;if(!n)return i.a.createElement(m.a,{to:"/landing"});var e=n.params.name,t=u.a[e];return t?i.a.createElement(g,null,i.a.createElement(l.a,{loader:t,name:e},(function(n){var e=n.summary,t=n.Comp,r=n.name;return(i.a.createElement(b,{summary:e,name:r,Comp:t}))}))):i.a.createElement(g,null,i.a.createElement(s.a,null,"no such article\xa0",i.a.createElement(p.a,{type:"cry"})))}}}]);