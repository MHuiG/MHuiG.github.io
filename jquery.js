importScripts("https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/"});const{core:e,precaching:t,routing:s,strategies:r,expiration:n,cacheableResponse:i,backgroundSync:o}=workbox,{CacheFirst:c,NetworkFirst:a,NetworkOnly:u,StaleWhileRevalidate:l}=r,{ExpirationPlugin:m}=n,{CacheableResponsePlugin:g}=i;self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>{if(!e.includes("-000108"))return caches["delete"](e)}))))))})),e.setCacheNameDetails({prefix:"mhuig-blog",suffix:"-000108"}),e.skipWaiting(),e.clientsClaim(),t.cleanupOutdatedCaches(),t.precacheAndRoute([{url:"/css/style.css",revision:null},{url:"/js/app.js",revision:null},{url:"https://cdn.jsdelivr.net/npm/mhg@0.0.6/js/search.js",revision:null}]),s.registerRoute(/.*nocache.*/,new u),s.registerRoute(/.*cdn\.jsdelivr\.net/,new c({cacheName:"static-immutable-000108",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new m({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),s.registerRoute(/.*cdnjs\.cloudflare\.com/,new c({cacheName:"static-immutable-000108",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new m({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),s.registerRoute(/.*m7\.music\.126\.net/,new c({cacheName:"static-immutable-000108",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new m({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),s.registerRoute(/.*stream\.qqmusic\.qq\.com/,new c({cacheName:"static-immutable-000108",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new m({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),s.registerRoute(/.*api\.mhuig\.top.*/,new u),s.registerRoute(/.*captcha.*/,new u),s.registerRoute(/.*token.*/,new u),s.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)/,new l),s.registerRoute(/.*\.(css|js)/,new l),s.registerRoute("/jquery.js",new l),s.setDefaultHandler(new a({networkTimeoutSeconds:3}));