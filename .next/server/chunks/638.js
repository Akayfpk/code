exports.id=638,exports.ids=[638],exports.modules={1323:(e,t)=>{"use strict";function hoist(e,t){return t in e?e[t]:"then"in e&&"function"==typeof e.then?e.then(e=>hoist(e,t)):"function"==typeof e&&"default"===t?e:void 0}Object.defineProperty(t,"l",{enumerable:!0,get:function(){return hoist}})},7543:(e,t)=>{"use strict";function isInAmpMode(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},9201:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return defaultHead},default:function(){return f}});let r=n(167),u=n(7200),a=u._(n(6689)),o=r._(n(8955)),i=n(8039),d=n(1988),l=n(7543);function defaultHead(e){void 0===e&&(e=!1);let t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function onlyReactElement(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(1905);let c=["name","httpEquiv","charSet","itemProp"];function unique(){let e=new Set,t=new Set,n=new Set,r={};return u=>{let a=!0,o=!1;if(u.key&&"number"!=typeof u.key&&u.key.indexOf("$")>0){o=!0;let t=u.key.slice(u.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(u.type){case"title":case"base":t.has(u.type)?a=!1:t.add(u.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){let t=c[e];if(u.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?a=!1:n.add(t);else{let e=u.props[t],n=r[t]||new Set;("name"!==t||!o)&&n.has(e)?a=!1:(n.add(e),r[t]=n)}}}}return a}}function reduceComponents(e,t){let{inAmpMode:n}=t;return e.reduce(onlyReactElement,[]).reverse().concat(defaultHead(n).reverse()).filter(unique()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}function Head(e){let{children:t}=e,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(d.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:reduceComponents,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}let f=Head;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8955:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return SideEffect}});let r=n(6689),useClientOnlyLayoutEffect=()=>{},useClientOnlyEffect=()=>{};function SideEffect(e){var t;let{headManager:n,reduceComponentsToState:u}=e;function emitChange(){if(n&&n.mountedInstances){let t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(u(t,e))}}return null==n||null==(t=n.mountedInstances)||t.add(e.children),emitChange(),useClientOnlyLayoutEffect(()=>{var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),()=>{var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),useClientOnlyLayoutEffect(()=>(n&&(n._pendingUpdate=emitChange),()=>{n&&(n._pendingUpdate=emitChange)})),useClientOnlyEffect(()=>(n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),()=>{n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)})),null}},1905:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=e=>{}},5931:()=>{},5244:(e,t)=>{"use strict";var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},8039:(e,t,n)=>{"use strict";e.exports=n(7093).vendored.contexts.AmpContext},1988:(e,t,n)=>{"use strict";e.exports=n(7093).vendored.contexts.HeadManagerContext},7200:(e,t)=>{"use strict";function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}function _interop_require_wildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=u?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}t._=t._interop_require_wildcard=_interop_require_wildcard}};