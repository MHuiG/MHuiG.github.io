var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},precacheConfig=[["/css/style.css","f8228c63f9504e58e536bf529e5335a7"],["/favicon.ico","d0cd815a171f58c431cb037873f4ef9a"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/js/app.js","a26ac3a7b56246d43fedff1cdb939d47"],["/js/search.js","d8161eda44a43071a9603724ac66714a"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var n,e,r;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html",(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))}),function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}(function(){return function a(c,s,i){function u(n,e){if(!s[n]){if(!c[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(f)return f(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var o=s[n]={exports:{}};c[n][0].call(o.exports,function(e){var t=c[n][1][e];return u(t||e)},o,o.exports,a,c,s,i)}return s[n].exports}for(var f="function"==typeof require&&require,e=0;e<i.length;e++)u(i[e]);return u}({1:[function(e,t,n){"use strict";function i(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function a(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var c,s=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:i,fetchAndCache:function(r,o){var t=(o=o||{}).successResponses||s.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&a(o).then(function(n){n.put(r,e).then(function(){var e,t=o.cache||s.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,o=t.maxAgeSeconds,a=t.maxEntries,c=t.name,s=Date.now();return i("Updating LRU order for "+r+". Max entries is "+a+", max age is "+o),u.getDb(c).then(function(e){return u.setTimestampForUrl(e,r,s)}).then(function(e){return u.expireEntries(e,a,o,s)}).then(function(e){i("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){i("Done with cache cleanup.")})}).catch(function(e){i(e)})}.bind(null,r,n,t),c=c?c.then(e):e())})}),e.clone()})},openCache:a,renameCache:function(t,e,n){return i("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return a(e).then(function(e){return e.add(t)})},uncache:function(t,e){return a(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r)if(new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";var o="sw-toolbox-",a=1,u="store",f="url",h="timestamp",c={};t.exports={getDb:function(e){return e in c||(c[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(o+r,a);n.onupgradeneeded=function(){n.result.createObjectStore(u,{keyPath:f}).createIndex(h,h,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),c[e];var r},setTimestampForUrl:function(r,o,a){return new Promise(function(e,t){var n=r.transaction(u,"readwrite");n.objectStore(u).put({url:o,timestamp:a}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return c=e,i=r,((s=t)?new Promise(function(e,t){var r=1e3*s,o=[],n=c.transaction(u,"readwrite"),a=n.objectStore(u);a.index(h).openCursor().onsuccess=function(e){var t,n=e.target.result;n&&i-r>n.value[h]&&(t=n.value[f],o.push(t),a.delete(t),n.continue())},n.oncomplete=function(){e(o)},n.onabort=t}):Promise.resolve([])).then(function(t){return r=e,((i=n)?new Promise(function(e,t){var o=[],n=r.transaction(u,"readwrite"),a=n.objectStore(u),c=a.index(h),s=c.count();c.count().onsuccess=function(){var r=s.result;i<r&&(c.openCursor().onsuccess=function(e){var t,n=e.target.result;n&&(t=n.value[f],o.push(t),a.delete(t),r-o.length>i&&n.continue())})},n.oncomplete=function(){e(o)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,i});var c,s,i}}},{}],3:[function(e,t,n){"use strict";function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),a=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(t){return Promise.all(c.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(e){return o.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href;t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";function r(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=a(t,this.keys)),this.method=e,this.options=r,this.handler=n}var o=new URL("./",self.location).pathname,a=e("path-to-regexp");r.prototype.makeHandler=function(e){var n,r;return this.regexp&&(n=this.regexp.exec(e),r={},this.keys.forEach(function(e,t){r[e.name]=n[t+1]})),function(e){return this.handler(e,r,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function s(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o}function o(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var u=e("./route"),f=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){o.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),o.prototype.add=function(e,t,n,r){var o;r=r||{},o=t instanceof RegExp?RegExp:(o=r.origin||self.location.origin)instanceof RegExp?o.source:o.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var a=new u(e,t,n,r);this.routes.has(o)||this.routes.set(o,new Map);var c=this.routes.get(o);c.has(e)||c.set(e,new Map);var s=c.get(e),i=a.regexp||a.fullUrlRegExp;s.has(i.source)&&f.debug('"'+t+'" resolves to same regex as existing route.'),s.set(i.source,a)},o.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,s(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},o.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],a=o&&o.get(e.toLowerCase());if(a){var c=s(a,n);if(0<c.length)return c[0].makeHandler(n)}}return null},o.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new o},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";var a=e("../options"),c=e("../helpers");t.exports=function(r,e,o){return o=o||{},c.debug("Strategy: cache first ["+r.url+"]",o),c.openCache(o).then(function(e){return e.match(r).then(function(e){var t=o.cache||a.cache,n=Date.now();return c.isResponseFresh(e,t.maxAgeSeconds,n)?e:c.fetchAndCache(r,o)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";var o=e("../options"),a=e("../helpers");t.exports=function(t,e,r){return r=r||{},a.debug("Strategy: cache only ["+t.url+"]",r),a.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||o.cache,n=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";var u=e("../helpers"),f=e("./cacheOnly");t.exports=function(c,s,i){return u.debug("Strategy: fastest ["+c.url+"]",i),new Promise(function(t,n){function r(e){a.push(e.toString()),o?n(new Error('Both cache and network failed: "'+a.join('", "')+'"')):o=!0}function e(e){e instanceof Response?t(e):r("No result returned")}var o=!1,a=[];u.fetchAndCache(c.clone(),i).then(e,r),f(c,s,i).then(e,r)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";var f=e("../options"),h=e("../helpers");t.exports=function(c,e,s){var i=(s=s||{}).successResponses||f.successResponses,u=s.networkTimeoutSeconds||f.networkTimeoutSeconds;return h.debug("Strategy: network first ["+c.url+"]",s),h.openCache(s).then(function(e){var t,n,r,o=[];u&&(r=new Promise(function(o){t=setTimeout(function(){e.match(c).then(function(e){var t=s.cache||f.cache,n=Date.now(),r=t.maxAgeSeconds;h.isResponseFresh(e,r,n)&&o(e)})},1e3*u)}),o.push(r));var a=h.fetchAndCache(c,s).then(function(e){if(t&&clearTimeout(t),i.test(e.status))return e;throw h.debug("Response was an HTTP error: "+e.statusText,s),n=e,new Error("Bad response")}).catch(function(t){return h.debug("Network or response error, fallback to cache ["+c.url+"]",s),e.match(c).then(function(e){if(e)return e;if(n)return n;throw t})});return o.push(a),Promise.race(o)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),a=e("./helpers"),c=e("./strategies"),s=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function a(e,t){for(var n,r=[],o=0,a=0,c="",s=t&&t.delimiter||"/";null!=(n=C.exec(e));){var i,u,f,h,l,p,d,m,g,v,x,w,y=n[0],b=n[1],R=n.index;c+=e.slice(a,R),a=R+y.length,b?c+=b[1]:(i=e[a],u=n[2],f=n[3],h=n[4],l=n[5],p=n[6],d=n[7],c&&(r.push(c),c=""),m=null!=u&&null!=i&&i!==u,g="+"===p||"*"===p,v="?"===p||"*"===p,x=n[2]||s,w=h||l,r.push({name:f||o++,prefix:u||"",delimiter:x,optional:v,repeat:g,partial:m,asterisk:!!d,pattern:w?w.replace(/([=!:$\/()])/g,"\\$1"):d?".*":"[^"+E(x)+"]+?"}))}return a<e.length&&(c+=e.substr(a)),c&&r.push(c),r}function l(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(f){for(var h=new Array(f.length),e=0;e<f.length;e++)"object"==_typeof(f[e])&&(h[e]=new RegExp("^(?:"+f[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},o=(t||{}).pretty?l:encodeURIComponent,a=0;a<f.length;a++){var c=f[a];if("string"!=typeof c){var s,i=r[c.name];if(null==i){if(c.optional){c.partial&&(n+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(m(i)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(i)+"`");if(0===i.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var u=0;u<i.length;u++){if(s=o(i[u]),!h[a].test(s))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(s)+"`");n+=(0===u?c.prefix:c.delimiter)+s}}else{if(s=c.asterisk?encodeURI(i).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):o(i),!h[a].test(s))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+s+'"');n+=c.prefix+s}}else n+=c}return n}}function E(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function p(e,t){return e.keys=t,e}function d(e){return e.sensitive?"":"i"}function c(e,t,n){m(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,a="",c=0;c<e.length;c++){var s,i,u=e[c];"string"==typeof u?a+=E(u):(s=E(u.prefix),i="(?:"+u.pattern+")",t.push(u),u.repeat&&(i+="(?:"+s+i+")*"),a+=i=u.optional?u.partial?s+"("+i+")?":"(?:"+s+"("+i+"))?":s+"("+i+")")}var f=E(n.delimiter||"/"),h=a.slice(-f.length)===f;return r||(a=(h?a.slice(0,-f.length):a)+"(?:"+f+"(?=$))?"),a+=o?"$":r&&h?"":"(?="+f+"|$)",p(new RegExp("^"+a,d(n)),t)}function s(e,t,n){return m(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return p(e,t)}(e,t):m(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(s(e[o],t,n).source);return p(new RegExp("(?:"+r.join("|")+")",d(n)),t)}(e,t,n):(r=t,c(a(e,o=n),r,o));var r,o}var m=e("isarray");t.exports=s,t.exports.parse=a,t.exports.compile=function(e,t){return r(a(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=c;var C=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){var r,o,a,c;a=Cache.prototype.addAll,(c=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/))&&(r=c[1],o=parseInt(c[2])),a&&(!c||"Firefox"===r&&46<=o||"Chrome"===r&&50<=o)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var o=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return o.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdn.jsdelivr.net"}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdnjs.cloudflare.com"}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"m7.music.126.net"}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"ajax.cloudflare.com"});