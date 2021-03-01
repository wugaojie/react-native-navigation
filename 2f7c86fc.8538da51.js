(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(372)),i=(n(376),n(377),{id:"component",title:"Component",sidebar_label:"Component"}),c={unversionedId:"api/component",id:"version-7.11.1/api/component",isDocsHomePage:!1,title:"Component",description:"registerComponent",source:"@site/versioned_docs/version-7.11.1/api/api-component.mdx",slug:"/api/component",permalink:"/react-native-navigation/api/component",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.11.1/api/api-component.mdx",version:"7.11.1",sidebar_label:"Component",sidebar:"version-7.11.1/api",next:{title:"Root",permalink:"/react-native-navigation/api/root"}},p=[{value:"<code>registerComponent</code>",id:"registercomponent",children:[]},{value:"<code>setLazyComponentRegistrator</code>",id:"setlazycomponentregistrator",children:[]},{value:"<code>updateProps</code>",id:"updateprops",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"registercomponent"},Object(o.b)("inlineCode",{parentName:"h2"},"registerComponent")),Object(o.b)("p",null,"Every screen component in your app must be registered with a unique name. The component itself is a traditional React component extending ",Object(o.b)("inlineCode",{parentName:"p"},"React.Component")," or ",Object(o.b)("inlineCode",{parentName:"p"},"React.PureComponent"),". It can also be a HOC to provide context (or a Redux store) or a functional component. Similar to React Native's ",Object(o.b)("inlineCode",{parentName:"p"},"AppRegistry.registerComponent"),"."),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"componentName"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"Unique component name - not to be confused with ",Object(o.b)("strong",{parentName:"td"},"componentId"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"componentProvider"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Function"),Object(o.b)("td",{parentName:"tr",align:null},"Anonymous function that returns the React component to register, ",Object(o.b)("strong",{parentName:"td"},"OR")," the component wrapped with Providers")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"concreteComponentProvider"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"Function"),Object(o.b)("td",{parentName:"tr",align:null},"Anonymous function that returns the concrete React component. If your component is wrapped with Providers, this must be an instance of the concrete component.")))),Object(o.b)("h4",{id:"examples"},"Examples"),Object(o.b)("h5",{id:"registering-a-component"},"Registering a component"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => WelcomeScreen);\n")),Object(o.b)("h5",{id:"registering-a-component-wrapped-with-providers"},"Registering a component wrapped with Providers"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Provider } from 'react-redux';\nconst store = createStore();\n\nNavigation.registerComponent(`navigation.playground.MyScreen`, () => (props) =>\n  <Provider store={store}>\n    <MyScreen {...props} />\n  </Provider>,\n  () => MyScreen)\n);\n")),Object(o.b)("h2",{id:"setlazycomponentregistrator"},Object(o.b)("inlineCode",{parentName:"h2"},"setLazyComponentRegistrator")),Object(o.b)("p",null,"Pass a function that will allow you to register a component lazily. When encountering an unknown component name, this function will be called, giving you a chance to register the component before an error is thrown."),Object(o.b)("h4",{id:"parameters-1"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"lazyRegistratorFn"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"(lazyComponentRequest: string"),Object(o.b)("td",{parentName:"tr",align:null},"number) => void")))),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.setLazyComponentRegistrator((componentName) => {\n  if (componentName === 'navigation.playground.LazyScreen') {\n    Navigation.registerComponent(Screens.LazilyRegisteredScreen, () => LazyScreen);\n  }\n});\n")),Object(o.b)("h2",{id:"updateprops"},Object(o.b)("inlineCode",{parentName:"h2"},"updateProps")),Object(o.b)("p",null,"Update props of a component registered with ",Object(o.b)("a",{parentName:"p",href:"#registercomponent"},"registerComponent"),". Updating props triggers the component lifecycle methods related to ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/react-component.html#updating"},"updating"),"."),Object(o.b)("h4",{id:"parameters-2"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"componentId"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"Unique component id")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"object"),Object(o.b)("td",{parentName:"tr",align:null},"props object to pass to the component")))),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.updateProps('MY_COMPONENT', {\n  // props to pass to the component\n};\n")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"updateProps")," is called with a componentId. This is the same unique id components have in props. Don't confuse it with the ",Object(o.b)("inlineCode",{parentName:"p"},"componentName")," we use when registering components with ",Object(o.b)("a",{parentName:"p",href:"#registerComponent"},"Navigation.registerComponent"),"."))))}b.isMDXComponent=!0},372:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},373:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},374:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},375:function(e,t,n){"use strict";var a=n(0),r=n(374);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},376:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(375),i=n(373),c=n(47),p=n.n(c),l=37,b=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,s=e.values,m=e.groupId,u=Object(o.a)(),d=u.tabGroupChoices,g=u.setTabGroupChoices,O=Object(a.useState)(c),j=O[0],f=O[1],h=Object(a.useState)(!1),N=h[0],v=h[1];if(null!=m){var y=d[m];null!=y&&y!==j&&s.some((function(e){return e.value===y}))&&f(y)}var w=function(e){f(e),null!=m&&g(m,e)},C=[],P=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},x=function(){v(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",P),window.addEventListener("mousedown",x)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},s.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",p.a.tabItem,{"tabs__item--active":j===t}),style:N?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),P(e)},onFocus:function(){return w(t)},onClick:function(){w(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},377:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);