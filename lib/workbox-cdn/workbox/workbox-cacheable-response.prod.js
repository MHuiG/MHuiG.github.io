this.workbox=this.workbox||{},this.workbox.cacheableResponse=function(s){"use strict";try{self["workbox:cacheable-response:5.1.3"]&amp;&amp;_()}catch(s){}class t{constructor(s={}){this.s=s.statuses,this.t=s.headers}isResponseCacheable(s){let t=!0;return this.s&amp;&amp;(t=this.s.includes(s.status)),this.t&amp;&amp;t&amp;&amp;(t=Object.keys(this.t).some(t=&gt;s.headers.get(t)===this.t[t])),t}}return s.CacheableResponse=t,s.CacheableResponsePlugin=class{constructor(s){this.cacheWillUpdate=async({response:s})=&gt;this.i.isResponseCacheable(s)?s:null,this.i=new t(s)}},s}({});


