const e=["W7DAW54/","W5FcTCoCW4XBreJcLKjmvMJcKW==","vmkOWOlcUmkeWQldQmoJmNPqW69V","W5jsWOO=","W6D2yainWOldL8o0jCkCW4BcQXm=","WRVcMfFcOaGyW5/cQtpdJ33dTSkebbPC","uY8gW6JcSmoffW==","f8oAFhNdR081W7RcHSoOFsfw","WOlcJ8oImW==","sbaiWP7cVSo+W5DDBCkn","WQ5LWRNdHCkkWRRdJryhhrG4W7ddUtawca==","uvxcJmkmWQzx","FCoVhCkXWORdTmksdW==","W5RdTr3dTfPRW7vZW4XEANhcOSoFxSoy","W6/dV8kdfmkXW4hcGSkGBCkLWOGd","W7RdQmoGWOXnjtjzWPdcMCoxW6D4","W4tcTmoFW6bEvupcKfXkugJcKW0FW4e=","WQ50WQZdTCkgWR/cGqOgbcuTW7/dVZaw","dtOXWPiYW6dcUCkzv8ong8kmWOykzuiRW67dIG==","iCoUi3u=","WQLFwXxdUCocWPe/odJcGmkNoZpcVSoCWOhcG37dJmo8WPnqpaRcSWBdMSkvWOClzqNcUs3dNmkJWPuVWOZdS8kRWONdSmoUl38RrCo5mW==","exjFWQW=","WOuCWRJcPCodW6VcLbhcUSorFbRdSSodW5W2W70rfSoJW7n5i8kfoCoBW7PBumktjmoeWQ3dRmo5W4ddUSkDhbdcKNyPz8kjsSkLzt/dGgLhWQmqcW==","W6NdOCoR","p8kzk8kWdWaMiCoGeCo7WR8n","WQddIZOb","mCoKjuuAbCkVWQRdGW=="];!function(e,o){!function(o){for(;--o;)e.push(e.shift())}(++o)}(e,377);const o=function(n,c){let t=e[n-=0];if(o.qjeuyL===undefined){const e=function(e,o){let n,c,t=[],r=0,W="",i="";for(let d=0,s=(e=function(e){const o=String(e).replace(/=+$/,"");let n="";for(let c,t,r=0,W=0;t=o.charAt(W++);~t&&(c=r%4?64*c+t:t,r++%4)?n+=String.fromCharCode(255&c>>(-2*r&6)):0)t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(t);return n}(e)).length;d<s;d++)i+="%"+("00"+e.charCodeAt(d).toString(16)).slice(-2);for(e=decodeURIComponent(i),c=0;c<256;c++)t[c]=c;for(c=0;c<256;c++)r=(r+t[c]+o.charCodeAt(c%o.length))%256,n=t[c],t[c]=t[r],t[r]=n;c=0,r=0;for(let d=0;d<e.length;d++)c=(c+1)%256,r=(r+t[c])%256,n=t[c],t[c]=t[r],t[r]=n,W+=String.fromCharCode(e.charCodeAt(d)^t[(t[c]+t[r])%256]);return W};o.WnbZpG=e,o.qltZvf={},o.qjeuyL=!0}const r=o.qltZvf[n];return r===undefined?(o.oWgukB===undefined&&(o.oWgukB=!0),t=o.WnbZpG(t,c),o.qltZvf[n]=t):t=r,t},n=o;importScripts("https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/workbox-sw.js"),workbox[n("0x0","CPCn")]({modulePathPrefix:n("0x17","qJZk")});const{core:c,precaching:t,routing:r,strategies:W,expiration:i,cacheableResponse:d,backgroundSync:s}=workbox,{CacheFirst:u,NetworkFirst:a,NetworkOnly:l,StaleWhileRevalidate:m}=W,{ExpirationPlugin:f}=i,{CacheableResponsePlugin:x}=d,k=n("0x7","V@5p");self[n("0x11","Widr")](n("0xd","2@zL"),e=>{e.waitUntil(caches.keys().then(e=>{const n=o;return Promise[n("0x18","cwj0")](e[n("0x4","KmWd")](e=>{const o=n;if(!e.includes(k))return caches[o("0xc","p2^!")](e)}))}))}),c[n("0x13","ihy#")]({prefix:n("0xa","u0PO"),suffix:k}),c.skipWaiting(),c[n("0xf","i%th")](),t.cleanupOutdatedCaches(),t[n("0x6","^riW")]([{url:"/css/style.css",revision:null},{url:n("0x8","kFBd"),revision:null},{url:n("0x15","cr9i"),revision:null}]),r[n("0x2","Widr")](/.*cdn\.jsdelivr\.net/,new u({cacheName:n("0x12","aqR1")+k,fetchOptions:{mode:n("0x14","CPCn"),credentials:n("0x1a","BPJC")},plugins:[new f({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r[n("0x10","cwj0")](/.*cdnjs\.cloudflare\.com/,new u({cacheName:"static-immutable"+k,fetchOptions:{mode:"cors",credentials:n("0x9","i58l")},plugins:[new f({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r.registerRoute(/.*m7\.music\.126\.net/,new u({cacheName:n("0xe","e9EC")+k,fetchOptions:{mode:n("0x1","9I7p"),credentials:n("0x16","V@5p")},plugins:[new f({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r[n("0x5","iN#O")](/.*baidu\.com.*/,new l),r.registerRoute(/https:\/\/ip\..*/,new l),r[n("0x2","Widr")](/.*jq\.mhuig\.top.*/,new l),r[n("0x19","1PD*")](/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)/,new m),r.registerRoute(/.*\.(css|js)/,new m),r[n("0x3","g(fN")]("/jquery.js",new m),r[n("0xb","aqR1")](new a({networkTimeoutSeconds:3}));