const e=["WPSdhtKkzMCVW7ioDmkGsZxdIColcCkQWQ0=","iCkiWPvUwN/cRNxdRmo+","WPDWWQlcOCo5p2/cKqL1kSo5WPKtpSoL","kIdcL3y6W41jDSkS","WPGZW5RcOSodW6BcOCk2W5OVB01iWR7dTuzuhCouWP3cU8ozsgr1WOzhhGm+rcBdVSovrCoeW7FcQHxdPfFcLgdcQb1SwCkrqSkYW4tcStFcUWi=","zSkYELy=","FmkhWOnYthNcSINdLmoIWO7cH8kJ","W4ldUdSCW6bBWQVcLtjGWQjBWR8=","WQFcLCkWW4yVuCkneSkLE8oSjmkU","WORcGhn1WQjBz8kTW7fdkSoiDbJdJ8ojmIzkiK5KW4f9dMhcGJSqWQ0RWPqra8kcW7WHtWmth8oac8kyW4jaWQdcPmk9W6TTd8klimoolSoyWRdcPSk0oItcOblcU8o8WQhdNG==","lItcIKeaW41BDSkN","wCoLW7/cPmobsLddHSogWRZcQmk4","W4tdUCoeWRPJDCoIhu9JnmoQtmoFWQGPE8obqv1xWOH7fmknW5nECurefYxcMwJdQsJcTCo+WPaVAComW6muWQaJi8oMddpdKq==","iCk5W5PQgrZdPSoqlcmTjCkjrmoHW4yH","W7y4W5tcJmkcWRZdPeFcM8ksaa==","W7/dQColWPaIsK8oWRddQrhcICkAaWfNWRbdW7Cxoq==","WOrXWQhcJCo8lMtcLXDZlmo5WPK=","qbNdJaRcImoXua==","u8kOh1lcI8o/WO5VW4ldGmkehbpcOSoSgG==","eJmAfqxcH8olmmoCy3WTWOj0","W4FdQmojWRK=","WQ89WPmdw3DhbsybWRRcJhm=","ESkkWOf1","WR1LCam=","x8oXgu0=","WQFcVuZcISoQW5vbimkZxmkRW7i1","ac/dSwVcU2RcTmkpeCkQWO5Duq==","EhXqsSoPWQhdKq0="];!function(e,o){!function(o){for(;--o;)e.push(e.shift())}(++o)}(e,136);const o=function(c,t){let n=e[c-=0];if(o.ZvLzYs===undefined){const e=function(e,o){let c,t,n=[],r=0,W="",i="";for(let d=0,s=(e=function(e){const o=String(e).replace(/=+$/,"");let c="";for(let t,n,r=0,W=0;n=o.charAt(W++);~n&&(t=r%4?64*t+n:n,r++%4)?c+=String.fromCharCode(255&t>>(-2*r&6)):0)n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(n);return c}(e)).length;d<s;d++)i+="%"+("00"+e.charCodeAt(d).toString(16)).slice(-2);for(e=decodeURIComponent(i),t=0;t<256;t++)n[t]=t;for(t=0;t<256;t++)r=(r+n[t]+o.charCodeAt(t%o.length))%256,c=n[t],n[t]=n[r],n[r]=c;t=0,r=0;for(let d=0;d<e.length;d++)t=(t+1)%256,r=(r+n[t])%256,c=n[t],n[t]=n[r],n[r]=c,W+=String.fromCharCode(e.charCodeAt(d)^n[(n[t]+n[r])%256]);return W};o.BVnyTM=e,o.rgQmvd={},o.ZvLzYs=!0}const r=o.rgQmvd[c];return r===undefined?(o.MtARvV===undefined&&(o.MtARvV=!0),n=o.BVnyTM(n,t),o.rgQmvd[c]=n):n=r,n},c=o;importScripts(c("0xd","*jmT")),workbox[c("0x7","u!Hk")]({modulePathPrefix:c("0x8","njR)")});const{core:t,precaching:n,routing:r,strategies:W,expiration:i,cacheableResponse:d,backgroundSync:s}=workbox,{CacheFirst:m,NetworkFirst:a,NetworkOnly:l,StaleWhileRevalidate:u}=W,{ExpirationPlugin:k}=i,{CacheableResponsePlugin:x}=d,h=c("0x15","8E4O");self[c("0x6","*1%s")](c("0x3","xFmI"),e=>{const o=c;e[o("0xe","u!Hk")](caches[o("0x18","F&v3")]()[o("0x1a","EjCl")](e=>Promise.all(e.map(e=>{if(!e.includes(h))return caches["delete"](e)}))))}),t[c("0x4","xCOc")]({prefix:"mhuig-blog",suffix:h}),t[c("0x12","L!#k")](),t[c("0xf","e2w1")](),n[c("0x13","ACzI")](),n.precacheAndRoute([{url:c("0x17","]Sg6"),revision:null},{url:c("0xc","du7y"),revision:null},{url:c("0x10","F&v3"),revision:null}]),r[c("0x1","084a")](/.*cdn\.jsdelivr\.net/,new m({cacheName:c("0x16","Or)4")+h,fetchOptions:{mode:c("0x1b","pY1W"),credentials:c("0x9","*rST")},plugins:[new k({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r[c("0x19","j2qy")](/.*cdnjs\.cloudflare\.com/,new m({cacheName:"static-immutable"+h,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new k({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r[c("0xa","EjCl")](/.*m7\.music\.126\.net/,new m({cacheName:"static-immutable"+h,fetchOptions:{mode:"cors",credentials:c("0x0","FkK$")},plugins:[new k({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),r[c("0x2","GvbC")](/.*baidu\.com.*/,new l),r[c("0x14","*1%s")](/https:\/\/ip\..*/,new l),r.registerRoute(/.*jq\.mhuig\.top.*/,new l),r[c("0xb","BzW]")](/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)/,new u),r.registerRoute(/.*\.(css|js)/,new u),r.registerRoute(c("0x5","EjCl"),new u),r[c("0x11","owSX")](new a({networkTimeoutSeconds:3}));