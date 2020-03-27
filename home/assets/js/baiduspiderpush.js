(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);

	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?d367964cbb21775bfbb9c16fe4da3484";
	var s = document.getElementsByTagName("script")[0]; 
	s.parentNode.insertBefore(hm, s);

})();
