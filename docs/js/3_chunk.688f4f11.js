(this.webpackJsonptheblog=this.webpackJsonptheblog||[]).push([[3],{340:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),l=a(325),o=a.n(l),s=a(341),c=function(e){var t=e.code,a=e.lang||"javascript",n=o.a.highlight(t,o.a.languages[a],a);return r.a.createElement("pre",null,r.a.createElement("code",{spellCheck:"false",dangerouslySetInnerHTML:{__html:n.replace(/^\n/,"")}}),r.a.createElement(s.a,{text:t}))}},353:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(340),o=a(97),s=a(339);t.default=function(e){var t=e.summary;return(r.a.createElement("article",null,r.a.createElement(s.a,{summary:t},r.a.createElement("span",null,"Photo by",r.a.createElement(o.a,{href:"https://unsplash.com/@zal3wa"},"Damian Zaleski"),"on",r.a.createElement(o.a,{href:"https://unsplash.com/s/photos/computer"},"Unsplash"))),r.a.createElement("h1",null,"Redux"),r.a.createElement("p",null,r.a.createElement("strong",null,"Redux"),"\xa0is a famous state management library, it offers\xa0",r.a.createElement("em",null,"centralized global store"),"\xa0and helps maintain the states with consistency. But when the store gets bigger and bigger you get wonder, is this a good way to manage states shared among components as global state."),r.a.createElement("p",null,"Redux is simple.",r.a.createElement("br",null),"Reducer returns new state(or same one if no change requires) by the action dispatched and triggers listeners to notify its change."),r.a.createElement("p",null,"In other words dispatch triggers this notification. Here\u2019s the code."),r.a.createElement("p",null,r.a.createElement(o.a,{href:"https://github.com/reduxjs/redux/blob/master/src/createStore.ts#L225"},"Redux Repo")),r.a.createElement(l.a,{code:"\nfunction dispatch(action: A) {\n  ...\n  if (isDispatching) {\n    throw new Error(\n    'Reducers may not dispatch actions.')\n  }\n\n  try {\n    isDispatching = true\n    // update state      \n    currentState = currentReducer(currentState, action)\n  } finally {\n    isDispatching = false\n  }\n  const listeners = (currentListeners = nextListeners)\n  for (let i = 0; i &lt; listeners.length; i++) {\n    const listener = listeners[i];\n    listener()\n  }\n  return action\n}\n"}),r.a.createElement("p",null,"So notification of change is not necessarily indicates actual changes on the state. The responsibility of check genuine event is left to View renderers."),r.a.createElement("p",null,"Libraries like React and Angular(or so on\u2026) put some effort to check the change on props, but mostly it is left to developers."),r.a.createElement("p",null,"This is where\xa0",r.a.createElement("strong",null,"selector"),"\xa0comes in."),r.a.createElement("h1",null,"Selector"),r.a.createElement("p",null,"Selector is\xa0",r.a.createElement("strong",null,"a delicate way of using memoization"),". If you\u2019ve experienced React hooks, you\u2019d get the main concept,\xa0",r.a.createElement("strong",null,"same input pops same output"),"."),r.a.createElement("p",null,"We\u2019d look into 2 libraries here,\xa0",r.a.createElement(o.a,{href:"https://github.com/reduxjs/reselect/blob/master/src/index.js"},"reselect"),"\xa0and\xa0",r.a.createElement(o.a,{href:"https://github.com/ngrx/platform/blob/master/modules/store/src/selector.ts"},"@ngrx/store")),r.a.createElement("p",null,"They give same concept of\xa0",r.a.createElement("strong",null,"createSelector"),"."),r.a.createElement("p",null,"CreateSelector gets pure functions(or selectors) as arguments and run the memoization.",r.a.createElement("br",null),"Say the last function is combiner and the rest of functions before it propSelectors."),r.a.createElement("p",null,"PropSelectors are to identify the ingredients to memoize and combiner is to compute and return real value that we need with these ingredients."),r.a.createElement(l.a,{code:"\nconst propSelector1 = (state) => state.a;\nconst propSelector2 = (state) => state.b;\nconst combiner = (a, b) => a + b;\nconst selector= createSelector(propSelector1, propSelector2, combiner);\nconst value = selector({a: 2, b: 4, c: 3}); // 6\n// propSelector1 return 2 | propSelector1 return 4 \n// combiner gets those returns and computes them accordingly\n// which results in 6;\n"}),r.a.createElement("p",null,"If you pass new set of data { a: 2, b: 4, c:1 } into",r.a.createElement("strong",null,"selector,")),r.a.createElement("p",null,r.a.createElement("u",null,"combiner is not called since the arguments combiner gets(2, 4) are the same as before\xa0"),"and\xa0instead of recomputing, cached result from previous computing is returned.",r.a.createElement("em",null,"So we get ensured that same value gives same reference and to be free from shallowEqual changeDetection.")),r.a.createElement("iframe",{src:"https://codesandbox.io/embed/createselector-j17gg?fontsize=14&hidenavigation=1&theme=dark",title:"createSelector",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.a.createElement("p",null,"This is simple example, it is hard to recognize the power of memoization but when you use in complex computing, it will save lots of time and resources."),r.a.createElement("p",null,"These prop comparison is based on shallowEqual, and of course they provide a way to change this equal comparison. You can make custom selector with\xa0",r.a.createElement("strong",null,"selectorFactory"),"."),r.a.createElement("h2",null,"SelectorFactory"),r.a.createElement("p",null,r.a.createElement("em",null,"@ngrx/store")," named it\xa0",r.a.createElement("strong",null,"createSelectorFactory"),"\xa0and\xa0",r.a.createElement("em",null,"reselect")," has\xa0",r.a.createElement("strong",null,"createSelectorCreator.")),r.a.createElement("p",null,"To make customSelector import ",r.a.createElement("strong",null,"selectorFactory")," and\xa0",r.a.createElement("strong",null,"defaultMemoize.")),r.a.createElement("p",null,"Let\u2019s say your component changes by the result of\xa0",r.a.createElement("strong",null,"scale * price"),", not scale, price respectively, you can make selector for the multiplier."),r.a.createElement(l.a,{code:"\ninterface State {\n  scale: number;\n  price: number;\n}\nconst isEqual = (a, b) => a.scale * a.price === b.scale * b.price\n"}),r.a.createElement("h4",null,"@ngrx/store"),r.a.createElement(l.a,{code:'\nimport {createSelectorFactory, defaultMemoize} from "@ngrx/store";\n\nconst customSelector = createSelectorFactory((projectionFun) =>\n  defaultMemoize(projectionFun, isEqual)\n);\n'}),r.a.createElement("h4",null,"reselect"),r.a.createElement(l.a,{code:'\nimport {(createSelectorCreator, defaultMemoize)} from "reselect"; const\nreselectCustomSelector = createSelectorCreator(defaultMemoize, isEqual);\n'}),r.a.createElement("iframe",{src:"https://codesandbox.io/embed/createselectorfactory-whgjy?fontsize=14&hidenavigation=1&theme=dark",title:"createSelectorFactory",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),r.a.createElement("h1",null,"Use when and where"),r.a.createElement("p",null,"By using selectors you can produce the same output, and view libraries can easily check to render or not."),r.a.createElement("p",null,"These are important tactic to reduce rendering time."),r.a.createElement("p",null,"But you need to remember these selectors do not come free, they all keep cache(arguments, returned value), and still use computing for equal comparison. It is\xa0",r.a.createElement("strong",null,"trade-off between computing and memory"),", choose wisely to use when and where."),r.a.createElement("ul",null,r.a.createElement("li",null,"I\u2019d say featured selectors by the first props of store state aren\u2019t usually good practice, something like below.")),r.a.createElement(l.a,{code:"const select = createSelector((state) => state.hello, state=> state);"}),r.a.createElement("ul",null,r.a.createElement("li",null,"If selectors reference same state and same logic functions it is also good to share selectors. Especially between present components and containers since their data flow runs one way."),r.a.createElement("li",null,"Selectors accept extra extra state."),r.a.createElement("li",null,"In this, reselect and ngrx chose different way.")),r.a.createElement("p",null,"reselect takes as many state as you pass but it is not passed to combiner."),r.a.createElement(l.a,{code:"\nconst reselectSelector = createSelector(\n  (a, b, ..., d) => ..., \n  (a, b, ..., d) => ..., \n  (state1, state2) => ...\n)"}),r.a.createElement("p",null,"ngrx accept one prop, which is passed to propSelectors and combiner."),r.a.createElement(l.a,{code:"\nconst ngrxSelector = createSelector(\n  (state, prop) => ..., \n  (state, prop) => ..., \n  (state1, state2, prop) => ...\n)\n// you can pass global state and component state at the same time\n// but in this case, do not share selector with other components.\n// also props is the subject to identify change. if you put\n// {a : 1} and next time new instance of {a : 1}, it will recompute.\n"}),r.a.createElement("hr",null),r.a.createElement("p",null,"Selector is to prevent unnecessary triggers by store, but what if, we don\u2019t trigger view components at the first place, isn\u2019t it better?"),r.a.createElement("p",null,"I think it is better. and that\u2019s why I have local state stores for some parts.Let me continue this on next article.")))}}}]);