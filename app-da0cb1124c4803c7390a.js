webpackJsonp([0xd2a57dc1d883],{196:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(354),options:{plugins:[],trackingId:""}},{plugin:t(356),options:{plugins:[]}},{plugin:t(353),options:{plugins:[]}}]},197:function(n,e,t){"use strict";var o;e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(312),"component---src-templates-post-template-js":t(320),"component---src-templates-tag-template-js":t(321),"component---src-templates-category-template-js":t(318),"component---src-templates-page-template-js":t(319),"component---src-pages-404-jsx":t(314),"component---src-pages-categories-jsx":t(315),"component---src-pages-index-jsx":t(316),"component---src-pages-tags-jsx":t(317)},e.json=(o={"layout-index.json":t(5),"offline-plugin-app-shell-fallback.json":t(331)},o["layout-index.json"]=t(5),o["posts-perfecting-the-art-of-perfection.json"]=t(334),o["layout-index.json"]=t(5),o["tags-handwriting.json"]=t(340),o["layout-index.json"]=t(5),o["tags-learning-to-write.json"]=t(344),o["layout-index.json"]=t(5),o["categories-design-inspiration.json"]=t(327),o["layout-index.json"]=t(5),o["posts-a-brief-history-of-typography.json"]=t(332),o["layout-index.json"]=t(5),o["tags-linotype.json"]=t(346),o["layout-index.json"]=t(5),o["tags-monotype.json"]=t(347),o["layout-index.json"]=t(5),o["tags-history-of-typography.json"]=t(343),o["layout-index.json"]=t(5),o["tags-helvetica.json"]=t(341),o["layout-index.json"]=t(5),o["posts-the-origins-of-social-stationery-lettering.json"]=t(336),o["layout-index.json"]=t(5),o["tags-typefaces.json"]=t(349),o["layout-index.json"]=t(5),o["tags-lettering.json"]=t(345),o["layout-index.json"]=t(5),o["tags-history.json"]=t(342),o["layout-index.json"]=t(5),o["categories-design-culture.json"]=t(326),o["layout-index.json"]=t(5),o["about.json"]=t(324),o["layout-index.json"]=t(5),o["posts-humane-typography-in-the-digital-age.json"]=t(333),o["layout-index.json"]=t(5),o["tags-design.json"]=t(338),o["layout-index.json"]=t(5),o["tags-typography.json"]=t(350),o["layout-index.json"]=t(5),o["tags-web-development.json"]=t(351),o["layout-index.json"]=t(5),o["categories-typography.json"]=t(328),o["layout-index.json"]=t(5),o["posts-the-birth-of-movable-type.json"]=t(335),o["layout-index.json"]=t(5),o["tags-open-source.json"]=t(348),o["layout-index.json"]=t(5),o["tags-gatsby.json"]=t(339),o["layout-index.json"]=t(5),o["contact.json"]=t(329),o["layout-index.json"]=t(5),o["404.json"]=t(322),o["layout-index.json"]=t(5),o["categories.json"]=t(325),o["layout-index.json"]=t(5),o["index.json"]=t(330),o["layout-index.json"]=t(5),o["404-html.json"]=t(323),o["layout-index.json"]=t(5),o["tags.json"]=t(337),o),e.layouts={"component---src-layouts-index-jsx":t(313)}},198:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),c=o(i),l=t(4),p=o(l),f=t(131),d=o(f),m=t(54),g=o(m),h=function(n){var e=n.children;return c.default.createElement("div",null,e())},y=function(n){function e(t){r(this,e);var o=a(this,n.call(this));return o.state={location:t.location,pageResources:d.default.getResourcesForPathname(t.location.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);t?this.setState({location:n.location,pageResources:t}):d.default.getResourcesForPathname(n.location.pathname,function(t){e.setState({location:n.location,pageResources:t})})}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){return this.props.page?this.state.pageResources?(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:h,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);y.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=y,n.exports=e.default},54:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(437),a=o(r),u=(0,a.default)();n.exports=u},199:function(n,e,t){"use strict";var o=t(75),r={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=decodeURIComponent(t),u=a.slice(e.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,o.matchPath)(u,{path:n.path})||(0,o.matchPath)(u,{path:n.matchPath}))return s=n,r[u]=n,!0}else{if((0,o.matchPath)(u,{path:n.path,exact:!0}))return s=n,r[u]=n,!0;if((0,o.matchPath)(u,{path:n.path+"index.html"}))return s=n,r[u]=n,!0}return!1}),s}}},323:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(364)})})}},322:function(n,e,t){t(2),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(365)})})}},324:function(n,e,t){t(2),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(366)})})}},326:function(n,e,t){t(2),n.exports=function(n){return t.e(23344975645473,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(367)})})}},327:function(n,e,t){t(2),n.exports=function(n){return t.e(86806178100415,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(368)})})}},328:function(n,e,t){t(2),n.exports=function(n){return t.e(58048626276655,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(369)})})}},325:function(n,e,t){t(2),n.exports=function(n){return t.e(30875753179511,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(370)})})}},329:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa7f31e1aeaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(371)})})}},330:function(n,e,t){t(2),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(372)})})}},5:function(n,e,t){t(2),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(96)})})}},331:function(n,e,t){t(2),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(373)})})}},332:function(n,e,t){t(2),n.exports=function(n){return t.e(0xe1dd4847cd0f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(374)})})}},333:function(n,e,t){t(2),n.exports=function(n){return t.e(27289334676535,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(375)})})}},334:function(n,e,t){t(2),n.exports=function(n){return t.e(9943303745503,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(376)})})}},335:function(n,e,t){t(2),n.exports=function(n){return t.e(0xf7f7f86d856,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(377)})})}},336:function(n,e,t){t(2),n.exports=function(n){return t.e(0x7933eff9b2a9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(378)})})}},338:function(n,e,t){t(2),n.exports=function(n){return t.e(65951750749414,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(379)})})}},339:function(n,e,t){t(2),n.exports=function(n){return t.e(0x7ab76f7a7e61,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(380)})})}},340:function(n,e,t){t(2),n.exports=function(n){return t.e(0xb4e5f151e811,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(381)})})}},341:function(n,e,t){t(2),n.exports=function(n){return t.e(79794552500884,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(382)})})}},343:function(n,e,t){t(2),n.exports=function(n){return t.e(0x707b8f44ac80,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(383)})})}},342:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa535ea119525,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(384)})})}},344:function(n,e,t){t(2),n.exports=function(n){return t.e(0x7d452d1fb9ab,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(385)})})}},345:function(n,e,t){t(2),n.exports=function(n){return t.e(0x74666f7946b5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(386)})})}},346:function(n,e,t){t(2),n.exports=function(n){return t.e(22083049329370,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(387)})})}},347:function(n,e,t){t(2),n.exports=function(n){return t.e(0xceddda9b8d1a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(388)})})}},348:function(n,e,t){t(2),n.exports=function(n){return t.e(52998803222938,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(389)})})}},349:function(n,e,t){t(2),n.exports=function(n){return t.e(35072081723212,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(390)})})}},350:function(n,e,t){t(2),n.exports=function(n){return t.e(43479966672054,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(391)})})}},351:function(n,e,t){t(2),n.exports=function(n){return t.e(0xe04e745676b4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(392)})})}},337:function(n,e,t){t(2),n.exports=function(n){return t.e(55702396619907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(393)})})}},313:function(n,e,t){t(2),n.exports=function(n){return t.e(79611799117203,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(200)})})}},131:function(n,e,t){(function(e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(1),a=(o(r),t(199)),u=o(a),s=t(54),i=o(s),c=void 0,l={},p={},f={},d={},m={},g=[],h=[],y={},x=[],j={},v=function(n){return n&&n.default||n},N=void 0,C=!0;N=t(201)({getNextQueuedResources:function(){return x.slice(-1)[0]},createResourceDownload:function(n){R(n,function(){x=x.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var b=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},k=function(n,e){return y[n]>y[e]?1:y[n]<y[e]?-1:0},R=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[n])e.nextTick(function(){t(null,d[n])});else{var o="component---"===n.slice(0,12)?p.components[n]||p.layouts[n]:p.json[n];o(function(e,o){d[n]=o,t(e,o)})}},w=function(n,t){m[n]?e.nextTick(function(){t(null,m[n])}):R(n,function(e,o){if(e)t(e);else{var r=v(o());m[n]=r,t(e,r)}})},_=1,P={empty:function(){h=[],y={},j={},x=[],g=[]},addPagesArray:function(n){g=n;var e="";e="",c=(0,u.default)(n,e)},addDevRequires:function(n){l=n},addProdRequires:function(n){p=n},dequeue:function(n){return h.pop()},enqueue:function(n){if(!g.some(function(e){return e.path===n}))return!1;var e=1/_;_+=1,y[n]?y[n]+=1:y[n]=1,P.has(n)||h.unshift(n),h.sort(k);var t=c(n);return t.jsonName&&(j[t.jsonName]?j[t.jsonName]+=1+e:j[t.jsonName]=1+e,x.indexOf(t.jsonName)!==-1||d[t.jsonName]||x.unshift(t.jsonName)),t.componentChunkName&&(j[t.componentChunkName]?j[t.componentChunkName]+=1+e:j[t.componentChunkName]=1+e,x.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||x.unshift(t.componentChunkName)),x.sort(b),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:x,resourcesCount:j}},getPages:function(){return{pathArray:h,pathCount:y}},getPage:function(n){return c(n)},has:function(n){return h.some(function(e){return e===n})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(n)||navigator.serviceWorker.getRegistrations().then(function(n){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()})),C=!1;var o=c(n);if(!o)return void console.log("A page wasn't found for \""+n+'"');if(n=o.path,f[n])return e.nextTick(function(){t(f[n]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:f[n]})}),f[n];i.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){f[n]={component:r,json:a,layout:u};var e={component:r,json:a,layout:u};t(e),i.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return w(o.componentChunkName,function(n,e){n&&console.log("Loading the component for "+o.path+" failed"),r=e,s()}),w(o.jsonName,function(n,e){n&&console.log("Loading the JSON for "+o.path+" failed"),a=e,s()}),void(o.layoutComponentChunkName&&w(o.layoutComponentChunkName,function(n,e){n&&console.log("Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return h.slice(-1)[0]},length:function(){return h.length},indexOf:function(n){return h.length-h.indexOf(n)-1}};n.exports=P}).call(e,t(111))},394:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-post-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-perfecting-the-art-of-perfection.json",path:"/posts/perfecting-the-art-of-perfection/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-handwriting.json",path:"/tags/handwriting/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-learning-to-write.json",path:"/tags/learning-to-write/"},{componentChunkName:"component---src-templates-category-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-design-inspiration.json",path:"/categories/design-inspiration/"},{componentChunkName:"component---src-templates-post-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-a-brief-history-of-typography.json",path:"/posts/a-brief-history-of-typography/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-linotype.json",path:"/tags/linotype/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-monotype.json",path:"/tags/monotype/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-history-of-typography.json",path:"/tags/history-of-typography/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-helvetica.json",path:"/tags/helvetica/"},{componentChunkName:"component---src-templates-post-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-the-origins-of-social-stationery-lettering.json",path:"/posts/the-origins-of-social-stationery-lettering"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-typefaces.json",path:"/tags/typefaces/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-lettering.json",path:"/tags/lettering/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-history.json",path:"/tags/history/"},{componentChunkName:"component---src-templates-category-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-design-culture.json",path:"/categories/design-culture/"},{componentChunkName:"component---src-templates-page-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about"},{componentChunkName:"component---src-templates-post-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-humane-typography-in-the-digital-age.json",path:"/posts/humane-typography-in-the-digital-age/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-design.json",path:"/tags/design/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-typography.json",path:"/tags/typography/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-web-development.json",path:"/tags/web-development/"},{componentChunkName:"component---src-templates-category-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-typography.json",path:"/categories/typography/"},{componentChunkName:"component---src-templates-post-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-the-birth-of-movable-type.json",path:"/posts/the-birth-of-movable-type/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-open-source.json",path:"/tags/open-source/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-gatsby.json",path:"/tags/gatsby/"},{componentChunkName:"component---src-templates-page-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"contact.json",path:"/contact"},{componentChunkName:"component---src-pages-404-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-categories-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories.json",path:"/categories/"},{componentChunkName:"component---src-pages-index-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"},{componentChunkName:"component---src-pages-tags-jsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags.json",path:"/tags/"}]},201:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(196),u=t(1),s=o(u),i=t(165),c=o(i),l=t(75),p=t(360),f=t(94),d=o(f),m=t(296),g=o(m),h=t(54),y=o(h),x=t(394),j=o(x),v=t(395),N=o(v),C=t(198),b=o(C),k=t(197),R=o(k),w=t(131),_=o(w);t(286),window.___emitter=y.default,_.default.addPagesArray(j.default),_.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=_.default,window.matchPath=l.matchPath;var P=(0,d.default)(),E=N.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(P.replace(e.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,e){O(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(202);var o=function(n){function e(t){t.page.path===_.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(o),window.___history.push(n))}var t=E[n];if(t&&(n=t.toPath),window.location.pathname!==n){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);_.default.getResourcesForPathname(n)?(clearTimeout(o),window.___history.push(n)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:P.location,action:P.action});var i=(0,a.apiRunner)("replaceRouterComponent",{history:P})[0],f=function(n){var e=n.children;return s.default.createElement(l.Router,{history:P},e)};_.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(i?i:f,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)((0,l.withRouter)(b.default),{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return _.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,r({page:!0},o)):(0,u.createElement)(b.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,g.default)(function(){return c.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},395:function(n,e){n.exports=[]},202:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(54),a=o(r),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},296:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},2:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},352:function(n,e){"use strict";n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,o=n.target;o.parentNode;o=o.parentNode)if("A"===o.nodeName){t=o;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.target.hash)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=t.href;var a=document.createElement("a");return a.href=window.location.href,r.host!==a.host||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},353:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(18),a=t(352),u=o(a);(0,u.default)(window,function(n){(0,r.navigateTo)(n)})},354:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",(e||{}).pathname),window.ga("send","pageview"))}},312:function(n,e,t){t(2),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(355)})})}},356:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},437:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).map(function(n){n(t)}),(n["*"]||[]).map(function(n){n(e,t)})}}}n.exports=t},111:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&s())}function s(){if(!g){var n=r(u);g=!0;for(var e=m.length;e;){for(d=m,m=[];++h<e;)d&&d[h].run();h=-1,e=m.length}d=null,g=!1,a(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],g=!1,h=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new i(n,e)),1!==m.length||g||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},314:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa6bc690a59e9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(210)})})}},315:function(n,e,t){t(2),n.exports=function(n){return t.e(0x81a450a7cd7a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(211)})})}},316:function(n,e,t){t(2),n.exports=function(n){return t.e(0xc23565d713b7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(212)})})}},317:function(n,e,t){t(2),n.exports=function(n){return t.e(36530248567819,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(213)})})}},318:function(n,e,t){t(2),n.exports=function(n){return t.e(78839606078735,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(214)})})}},319:function(n,e,t){t(2),n.exports=function(n){return t.e(0xd5d9d741ef0b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(215)})})}},320:function(n,e,t){t(2),n.exports=function(n){return t.e(0xb48ce3051dcc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(216)})})}},321:function(n,e,t){t(2),n.exports=function(n){return t.e(7243222379581,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(217)})})}}});
//# sourceMappingURL=app-da0cb1124c4803c7390a.js.map