const e={requestAPI:(e,t,r)=>{let a=5;!function n(){return new Promise((o,s)=>{let l=0,c=setTimeout(()=>{0===l&&(l=2,c=null,s("请求超时"),0==a&&r())},5e3);fetch(e).then((function(e){if(2!==l&&(clearTimeout(c),o(e),c=null,l=1),e.ok)return e.json();throw new Error("Network response was not ok.")})).then((function(e){a=0,t(e)}))["catch"]((function(e){a>0?(a-=1,setTimeout(()=>{n()},5e3)):r()}))})}()},layout:t=>{const r=t.el;e.requestAPI(t.api,(function(e){r.querySelector(".loading-wrap").remove();var a="";(e||[]).forEach((e,r)=>{var n='<div class="user-card">';n+='<a class="card-link" target="_blank" rel="external nofollow noopener noreferrer"',n+=' href="'+e.html_url+'">',n+='<img src="'+(e.avatar_url||t.avatar)+'" onerror="javascript:this.src=\''+t.avatar+"';\">",n+='<div class="name"><span>'+e.login+"</span></div>",n+="</a>",a+=n+="</div>"}),r.querySelector(".group-body").innerHTML=a}),(function(){try{r.querySelector(".loading-wrap svg").remove(),r.querySelector(".loading-wrap p").innerText("加载失败，请稍后重试。")}catch(e){}}))},start:()=>{const t=document.getElementsByClassName("contributorsjs-wrap");for(var r=0;r<t.length;r++){const n=t[r],o=n.getAttribute("api");if(null!=o){var a=new Object;a.el=n,a.api=o,a["class"]=n.getAttribute("class"),a.avatar="https://cdn.jsdelivr.net/gh/cdn-x/placeholder@1.0.1/avatar/round/3442075.svg",e.layout(a)}}}};e.start(),document.addEventListener("pjax:complete",(function(){e.start()}));