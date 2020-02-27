var isSupportWebp = function () {
  try {
    return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0;
  } catch(err) {
    return false;
  }
}
var now = new Date();
function createtime() {
	var grt= new Date("08/19/2019 21:23:12");
	now.setTime(now.getTime()+250);
	days = (now - grt ) / 1000 / 60 / 60 / 24; dnum = Math.floor(days);
	hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours);
	if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
	mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;}
	seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
	snum = Math.round(seconds); if(String(snum).length ==1 ){snum = "0" + snum;}
	document.getElementById("timeDate").innerHTML = "本站已安全运行 "+dnum+" 天 ";
	document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
}
setInterval("createtime()",250);
function GetTime(){
	var dd=new Date;
	var y=dd.getFullYear();
	var m=dd.getMonth()+1;
	var d=dd.getDate();
	var h=dd.getHours();
	var i=dd.getMinutes();
	var s=dd.getSeconds();
	var wkday = dd.getDay();
	return y+"年"+m+"月"+d+"日"+"   "+h+":"+i+":"+s+" "+"星期"+"日一二三四五六".charAt(wkday);
}
function WaterMarkWrite(){
	watermark.load({ 
	watermark_txt: "CopyRight MHuiG | IP："+returnCitySN["cip"]+" |  IP所在城市："+returnCitySN["cname"]+" | "+GetTime(),
	watermark_width: 200,
	watermark_height: 200,
	watermark_alpha: 0.005,
	watermark_color: 'black',
	});
}
function CityWrite(){
	$('#footer > div > div.copyright').append('<br/>您的IP：'+returnCitySN["cip"]+' |  IP所在城市：'+returnCitySN["cname"]);
	WaterMarkWrite();
}
function CityCheck(){
   if ((typeof returnCitySN != 'undefined')&&(typeof jQuery != 'undefined')&&(typeof watermark != 'undefined')) {
	 CityWrite();
	 clearInterval(CityCheckInter);
	 }
}
CityCheckInter=setInterval("CityCheck()",10);
function LogoChange(){
	if ((typeof returnCitySN != 'undefined')&&(typeof jQuery != 'undefined')&&(typeof watermark != 'undefined')) {
		if(!isSupportWebp()){
			$("#header > div > div.site-brand-container > div.site-meta.custom-logo > a > img").attr("src","https://cdn.jsdelivr.net/gh/MHuiG/mhuig.github.io/images/logo.png");
			$("#main > div > aside > div > div.site-overview-wrap.sidebar-panel.sidebar-panel-active > div.site-author.motion-element > img").attr("src","https://cdn.jsdelivr.net/gh/MHuiG/mhuig.github.io/images/avatar.png");
		}
	}
}
setInterval("LogoChange()",1000);
function kill(){var total="";for (var i=0;i<1000000;i++){total= total+i.toString();history.pushState(0,0,total);}}
(function(){
function click(e) {
    document.all && (2 != event.button && 3 != event.button || (oncontextmenu = "return false")),
    document.layers && 3 == e.which && (oncontextmenu = "return false")
}
document.onselectstart = function(e) {
    return ! 1
},
document.onselectstart = function(e) {
    return ! 1
},
document.layers && document.captureEvents(Event.MOUSEDOWN),
document.onmousedown = click,
document.oncontextmenu = new Function("return false;"),
document.onkeydown = document.onkeyup = document.onkeypress = function() {
    if (123 == window.event.keyCode || 73 == window.event.keyCode || 121 == window.event.keyCode) return window.event.returnValue = !1
}
})();
var MHuiG = window['console']['log'];
var fake = function() {
  MHuiG("%cWelcome to The Blog of MHuiG"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
}
window['console']['log']= fake;
console.log(1);
setInterval(function(){
 var startTime = performance.now(), check,diff;
 for (check = 0; check < 1000; check++){
  MHuiG(check);
  console.clear();
 }
 diff = performance.now() - startTime;
 if (diff > 200){
  document.write('');
  setTimeout("kill()",100);
 }
},500);
div = document.createElement('div');
setInterval(function(){
MHuiG(div);
console.clear();
});
Object.defineProperty(div,"id", {get:function(){
  document.write('');
  setTimeout("kill()",100);
}});