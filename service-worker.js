var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},precacheConfig=[["/css/style.css","b638430054e0ecfc6215e4040bb7118f"],["/favicon.ico","d0cd815a171f58c431cb037873f4ef9a"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/js/app.js","0819261b2c1ac1887798378e0e30ec93"],["/js/search.js","5daa40766b8882ccf6e2199d33ce6371"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var n,e,r;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html",(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))}),function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}(function(){return function c(a,s,i){function u(n,e){if(!s[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(f)return f(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var o=s[n]={exports:{}};a[n][0].call(o.exports,function(e){var t=a[n][1][e];return u(t||e)},o,o.exports,c,a,s,i)}return s[n].exports}for(var f="function"==typeof require&&require,e=0;e<i.length;e++)u(i[e]);return u}({1:[function(e,t,n){"use strict";function i(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var a,s=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:i,fetchAndCache:function(r,o){var t=(o=o||{}).successResponses||s.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&c(o).then(function(n){n.put(r,e).then(function(){var e,t=o.cache||s.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,o=t.maxAgeSeconds,c=t.maxEntries,a=t.name,s=Date.now();return i("Updating LRU order for "+r+". Max entries is "+c+", max age is "+o),u.getDb(a).then(function(e){return u.setTimestampForUrl(e,r,s)}).then(function(e){return u.expireEntries(e,c,o,s)}).then(function(e){i("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){i("Done with cache cleanup.")})}).catch(function(e){i(e)})}.bind(null,r,n,t),a=a?a.then(e):e())})}),e.clone()})},openCache:c,renameCache:function(t,e,n){return i("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return c(e).then(function(e){return e.add(t)})},uncache:function(t,e){return c(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r)if(new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";var o="sw-toolbox-",c=1,u="store",f="url",h="timestamp",a={};t.exports={getDb:function(e){return e in a||(a[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(o+r,c);n.onupgradeneeded=function(){n.result.createObjectStore(u,{keyPath:f}).createIndex(h,h,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),a[e];var r},setTimestampForUrl:function(r,o,c){return new Promise(function(e,t){var n=r.transaction(u,"readwrite");n.objectStore(u).put({url:o,timestamp:c}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return a=e,i=r,((s=t)?new Promise(function(e,t){var r=1e3*s,o=[],n=a.transaction(u,"readwrite"),c=n.objectStore(u);c.index(h).openCursor().onsuccess=function(e){var t,n=e.target.result;n&&i-r>n.value[h]&&(t=n.value[f],o.push(t),c.delete(t),n.continue())},n.oncomplete=function(){e(o)},n.onabort=t}):Promise.resolve([])).then(function(t){return r=e,((i=n)?new Promise(function(e,t){var o=[],n=r.transaction(u,"readwrite"),c=n.objectStore(u),a=c.index(h),s=a.count();a.count().onsuccess=function(){var r=s.result;i<r&&(a.openCursor().onsuccess=function(e){var t,n=e.target.result;n&&(t=n.value[f],o.push(t),c.delete(t),r-o.length>i&&n.continue())})},n.oncomplete=function(){e(o)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,i});var a,s,i}}},{}],3:[function(e,t,n){"use strict";function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),c=e("./router"),a=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=a.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,a.cache.name))},installListener:function(e){var t=a.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(t){return Promise.all(a.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(e){return o.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href;t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";function r(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n}var o=new URL("./",self.location).pathname,c=e("path-to-regexp");r.prototype.makeHandler=function(e){var n,r;return this.regexp&&(n=this.regexp.exec(e),r={},this.keys.forEach(function(e,t){r[e.name]=n[t+1]})),function(e){return this.handler(e,r,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function s(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o}function o(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var u=e("./route"),f=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){o.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),o.prototype.add=function(e,t,n,r){var o;r=r||{},o=t instanceof RegExp?RegExp:(o=r.origin||self.location.origin)instanceof RegExp?o.source:o.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var c=new u(e,t,n,r);this.routes.has(o)||this.routes.set(o,new Map);var a=this.routes.get(o);a.has(e)||a.set(e,new Map);var s=a.get(e),i=c.regexp||c.fullUrlRegExp;s.has(i.source)&&f.debug('"'+t+'" resolves to same regex as existing route.'),s.set(i.source,c)},o.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,s(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},o.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],c=o&&o.get(e.toLowerCase());if(c){var a=s(c,n);if(0<a.length)return a[0].makeHandler(n)}}return null},o.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new o},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";var c=e("../options"),a=e("../helpers");t.exports=function(r,e,o){return o=o||{},a.debug("Strategy: cache first ["+r.url+"]",o),a.openCache(o).then(function(e){return e.match(r).then(function(e){var t=o.cache||c.cache,n=Date.now();return a.isResponseFresh(e,t.maxAgeSeconds,n)?e:a.fetchAndCache(r,o)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";var o=e("../options"),c=e("../helpers");t.exports=function(t,e,r){return r=r||{},c.debug("Strategy: cache only ["+t.url+"]",r),c.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||o.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";var u=e("../helpers"),f=e("./cacheOnly");t.exports=function(a,s,i){return u.debug("Strategy: fastest ["+a.url+"]",i),new Promise(function(t,n){function r(e){c.push(e.toString()),o?n(new Error('Both cache and network failed: "'+c.join('", "')+'"')):o=!0}function e(e){e instanceof Response?t(e):r("No result returned")}var o=!1,c=[];u.fetchAndCache(a.clone(),i).then(e,r),f(a,s,i).then(e,r)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";var f=e("../options"),h=e("../helpers");t.exports=function(a,e,s){var i=(s=s||{}).successResponses||f.successResponses,u=s.networkTimeoutSeconds||f.networkTimeoutSeconds;return h.debug("Strategy: network first ["+a.url+"]",s),h.openCache(s).then(function(e){var t,n,r,o=[];u&&(r=new Promise(function(o){t=setTimeout(function(){e.match(a).then(function(e){var t=s.cache||f.cache,n=Date.now(),r=t.maxAgeSeconds;h.isResponseFresh(e,r,n)&&o(e)})},1e3*u)}),o.push(r));var c=h.fetchAndCache(a,s).then(function(e){if(t&&clearTimeout(t),i.test(e.status))return e;throw h.debug("Response was an HTTP error: "+e.statusText,s),n=e,new Error("Bad response")}).catch(function(t){return h.debug("Network or response error, fallback to cache ["+a.url+"]",s),e.match(a).then(function(e){if(e)return e;if(n)return n;throw t})});return o.push(c),Promise.race(o)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),c=e("./helpers"),a=e("./strategies"),s=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:a.networkOnly,networkFirst:a.networkFirst,cacheOnly:a.cacheOnly,cacheFirst:a.cacheFirst,fastest:a.fastest,router:o,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function c(e,t){for(var n,r=[],o=0,c=0,a="",s=t&&t.delimiter||"/";null!=(n=C.exec(e));){var i,u,f,h,l,p,d,m,g,v,x,w,y=n[0],b=n[1],R=n.index;a+=e.slice(c,R),c=R+y.length,b?a+=b[1]:(i=e[c],u=n[2],f=n[3],h=n[4],l=n[5],p=n[6],d=n[7],a&&(r.push(a),a=""),m=null!=u&&null!=i&&i!==u,g="+"===p||"*"===p,v="?"===p||"*"===p,x=n[2]||s,w=h||l,r.push({name:f||o++,prefix:u||"",delimiter:x,optional:v,repeat:g,partial:m,asterisk:!!d,pattern:w?w.replace(/([=!:$\/()])/g,"\\$1"):d?".*":"[^"+E(x)+"]+?"}))}return c<e.length&&(a+=e.substr(c)),a&&r.push(a),r}function l(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(f){for(var h=new Array(f.length),e=0;e<f.length;e++)"object"==_typeof(f[e])&&(h[e]=new RegExp("^(?:"+f[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},o=(t||{}).pretty?l:encodeURIComponent,c=0;c<f.length;c++){var a=f[c];if("string"!=typeof a){var s,i=r[a.name];if(null==i){if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be defined')}if(m(i)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received `'+JSON.stringify(i)+"`");if(0===i.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<i.length;u++){if(s=o(i[u]),!h[c].test(s))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received `'+JSON.stringify(s)+"`");n+=(0===u?a.prefix:a.delimiter)+s}}else{if(s=a.asterisk?encodeURI(i).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):o(i),!h[c].test(s))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+s+'"');n+=a.prefix+s}}else n+=a}return n}}function E(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function p(e,t){return e.keys=t,e}function d(e){return e.sensitive?"":"i"}function a(e,t,n){m(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,c="",a=0;a<e.length;a++){var s,i,u=e[a];"string"==typeof u?c+=E(u):(s=E(u.prefix),i="(?:"+u.pattern+")",t.push(u),u.repeat&&(i+="(?:"+s+i+")*"),c+=i=u.optional?u.partial?s+"("+i+")?":"(?:"+s+"("+i+"))?":s+"("+i+")")}var f=E(n.delimiter||"/"),h=c.slice(-f.length)===f;return r||(c=(h?c.slice(0,-f.length):c)+"(?:"+f+"(?=$))?"),c+=o?"$":r&&h?"":"(?="+f+"|$)",p(new RegExp("^"+c,d(n)),t)}function s(e,t,n){return m(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return p(e,t)}(e,t):m(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(s(e[o],t,n).source);return p(new RegExp("(?:"+r.join("|")+")",d(n)),t)}(e,t,n):(r=t,a(c(e,o=n),r,o));var r,o}var m=e("isarray");t.exports=s,t.exports.parse=c,t.exports.compile=function(e,t){return r(c(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=a;var C=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){var r,o,c,a;c=Cache.prototype.addAll,(a=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/))&&(r=a[1],o=parseInt(a[2])),c&&(!a||"Firefox"===r&&46<=o||"Chrome"===r&&50<=o)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var o=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return o.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdn.jsdelivr.net"}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdnjs.cloudflare.com"}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"m7.music.126.net"}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"ajax.cloudflare.com"});