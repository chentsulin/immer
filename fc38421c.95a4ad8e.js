(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(98)),o={id:"produce",title:"Using produce"},c={unversionedId:"produce",id:"produce",isDocsHomePage:!1,title:"Using produce",description:"<div",source:"@site/docs/produce.mdx",slug:"/produce",permalink:"/immer/produce",editUrl:"https://github.com/immerjs/immer/edit/master/website/docs/produce.mdx",version:"current",sidebar:"Immer",previous:{title:"Installation",permalink:"/immer/installation"},next:{title:"Curried producers",permalink:"/immer/curried-produce"}},p=[{value:"Example",id:"example",children:[{value:"Terminology",id:"terminology",children:[]}]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("center",null,Object(i.b)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"}))," ",Object(i.b)("details",null,Object(i.b)("summary",{className:"egghead-summary"},"egghead.io lesson 3: Simplifying deep updates with _produce_"),Object(i.b)("br",null),Object(i.b)("div",null,Object(i.b)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/javascript-simplify-deep-state-updates-using-immer-produce/embed"})),Object(i.b)("a",{className:"egghead-link",href:"https://egghead.io/lessons/javascript-simplify-deep-state-updates-using-immer-produce"},"Hosted on egghead.io")),Object(i.b)("p",null,"The Immer package exposes a default function that does all the work."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"produce(baseState, recipe: (draftState) => void): nextState")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"produce")," takes a base state, and a ",Object(i.b)("em",{parentName:"p"},"recipe")," that can be used to perform all the desired mutations on the ",Object(i.b)("inlineCode",{parentName:"p"},"draft")," that is passed in. The interesting thing about Immer is that the ",Object(i.b)("inlineCode",{parentName:"p"},"baseState")," will be untouched, but the ",Object(i.b)("inlineCode",{parentName:"p"},"nextState")," will reflect all changes made to ",Object(i.b)("inlineCode",{parentName:"p"},"draftState"),"."),Object(i.b)("p",null,"Inside the recipe, all standard JavaScript APIs can be used on the ",Object(i.b)("inlineCode",{parentName:"p"},"draft")," object, including field assignments, ",Object(i.b)("inlineCode",{parentName:"p"},"delete")," operations, and mutating array, Map and Set operations like ",Object(i.b)("inlineCode",{parentName:"p"},"push"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pop"),", ",Object(i.b)("inlineCode",{parentName:"p"},"splice"),", ",Object(i.b)("inlineCode",{parentName:"p"},"set"),", ",Object(i.b)("inlineCode",{parentName:"p"},"sort"),", ",Object(i.b)("inlineCode",{parentName:"p"},"remove"),", etc."),Object(i.b)("p",null,"Any of those mutations don't have to happen at the root, but it is allowed to modify anything anywhere deep inside the draft: ",Object(i.b)("inlineCode",{parentName:"p"},'draft.todos[0].tags["urgent"].author.age = 56')),Object(i.b)("p",null,"Note that the recipe function itself normally doesn't return anything. However, it is possible to return in case you want to replace the ",Object(i.b)("inlineCode",{parentName:"p"},"draft")," object in its entirety with another object, for more details see ",Object(i.b)("a",{parentName:"p",href:"/immer/return"},"returning new data"),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'import produce from "immer"\n\nconst baseState = [\n    {\n        title: "Learn TypeScript",\n        done: true\n    },\n    {\n        title: "Try Immer",\n        done: false\n    }\n]\n\nconst nextState = produce(baseState, draftState => {\n    draftState.push({title: "Tweet about it"})\n    draftState[1].done = true\n})\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"// the new item is only added to the next state,\n// base state is unmodified\nexpect(baseState.length).toBe(2)\nexpect(nextState.length).toBe(3)\n\n// same for the changed 'done' prop\nexpect(baseState[1].done).toBe(false)\nexpect(nextState[1].done).toBe(true)\n\n// unchanged data is structurally shared\nexpect(nextState[0]).toBe(baseState[0])\n// ...but changed data isn't.\nexpect(nextState[1]).not.toBe(baseState[1])\n")),Object(i.b)("h3",{id:"terminology"},"Terminology"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"(base)state"),", the immutable state passed to ",Object(i.b)("inlineCode",{parentName:"li"},"produce")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"recipe"),": the second argument of ",Object(i.b)("inlineCode",{parentName:"li"},"produce"),', that captures how the base state should be "mutated".'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"draft"),": the first argument of any ",Object(i.b)("inlineCode",{parentName:"li"},"recipe"),", which is a proxy to the original base state that can be safely mutated."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"producer"),". A function that uses ",Object(i.b)("inlineCode",{parentName:"li"},"produce")," and is generally of the form ",Object(i.b)("inlineCode",{parentName:"li"},"(baseState, ...arguments) => resultState"))),Object(i.b)("p",null,"Note that it isn't strictly necessary to name the first argument of the recipe ",Object(i.b)("inlineCode",{parentName:"p"},"draft"),". You can name it anything you want, for example ",Object(i.b)("inlineCode",{parentName:"p"},"users"),". Using ",Object(i.b)("inlineCode",{parentName:"p"},"draft"),' as a name is just a convention to signal: "mutation is OK here".'))}s.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);