var customSearch,Debounce=function(e,t){var n=t||25,a=void 0;return function(){var t=this,o=arguments;a&&clearTimeout(a),a=setTimeout(function(){a=null,e.apply(t,o)},n)}};!function(a){"use strict";volantis.$bodyAnchor=a("#safearea"),volantis.$topBtn=a("#s-top"),volantis.$wrapper=a("#wrapper"),volantis.$postsBtn=a(".menu .active"),volantis.$titleBtn=a("h1.title","#header-meta"),volantis.$coverAnchor=a("#l_cover .cover-wrapper"),volantis.$switcher=a("#l_header .switcher .s-search"),volantis.$header=a("#l_header"),volantis.$headerMenu=a("body .navigation"),volantis.$search=a("#l_header .m_search"),volantis.$mPhoneList=a("#l_header .m-phone .list-v");var t,o=/mobile/i.test(window.navigator.userAgent),i=80;function s(t,o){var e=1<arguments.length&&void 0!==o?o:i,n=t.href?a(decodeURI(t.getAttribute("href"))):a(t);window.scrollTo({top:n.offset().top-e,behavior:"smooth"})}function e(){volantis.$postsBtn.length&&volantis.$bodyAnchor&&volantis.$postsBtn.click(function(t){t.preventDefault(),t.stopPropagation(),"/"!=volantis.$postsBtn.attr("href")&&s(volantis.$bodyAnchor),t.stopImmediatePropagation(),volantis.$postsBtn.unbind("click")}),volantis.$titleBtn.length&&volantis.$bodyAnchor&&volantis.$titleBtn.click(function(t){t.preventDefault(),t.stopPropagation(),s(volantis.$bodyAnchor),t.stopImmediatePropagation(),volantis.$titleBtn.unbind("click")}),volantis.$topBtn.length&&volantis.$bodyAnchor&&volantis.$topBtn.click(function(t){t.preventDefault(),t.stopPropagation(),s(volantis.$bodyAnchor),t.stopImmediatePropagation()});var e=volantis.$bodyAnchor.offset().top-i,n=document.body.scrollTop;a(document,window).scroll(Debounce(function(){var t=a(window).scrollTop(),o=t-n;(n=t)>volantis.$bodyAnchor.offset().top?(volantis.$topBtn.addClass("show"),0<o?volantis.$topBtn.removeClass("hl"):volantis.$topBtn.addClass("hl")):volantis.$topBtn.removeClass("show").removeClass("hl"),-1<t-e?volantis.$header.addClass("show"):volantis.$header.removeClass("show")}))}function n(){var e;pdata.ispage&&(window.subData={title:pdata.postTitle,tools:!0}),window.subData&&(volantis.$comment=a("#s-comment"),volantis.$toc=a("#s-toc"),volantis.$commentTarget=a("#l_body article#comments"),volantis.$wrapper.find(".nav-sub .title").text(window.subData.title),e=document.body.scrollTop,a(document,window).scroll(Debounce(function(){var t=a(window).scrollTop(),o=t-e;50<=o&&100<t?(e=t,volantis.$wrapper.addClass("sub")):o<=-50&&(e=t,volantis.$wrapper.removeClass("sub"))})),volantis.$commentTarget.length?volantis.$comment.click(function(t){t.preventDefault(),t.stopPropagation(),s(volantis.$commentTarget),t.stopImmediatePropagation()}):volantis.$comment.remove(),volantis.$tocTarget=a("#l_body .toc-wrapper"),volantis.$tocTarget.length&&volantis.$tocTarget.children().length?(volantis.$toc.click(function(t){t.stopPropagation(),volantis.$tocTarget.toggleClass("active"),volantis.$toc.toggleClass("active")}),a(document).click(function(t){t.stopPropagation(),volantis.$tocTarget.removeClass("active"),volantis.$toc.removeClass("active")}),a(document,window).scroll(Debounce(function(){volantis.$tocTarget.removeClass("active"),volantis.$toc.removeClass("active")},100))):volantis.$toc.remove())}function l(){volantis.$headerMenu.find("li a.active").removeClass("active"),volantis.$headerMenu.find("div a.active").removeClass("active");var t=null,o=location.pathname.replace(/\/|%|\./g,"");0==o.length&&(o="home");var e=o.match(/page\d{0,}$/g);e&&(e=e[0],o=o.split(e)[0]);var n=o.match(/index.html/);n&&(n=n[0],o=o.split(n)[0]),(o=o.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.$headerMenu&&((t=a("#"+o,volantis.$headerMenu))&&t.length&&t.addClass("active").siblings().removeClass("active"))}function c(){o&&(a(document).click(function(t){volantis.$mPhoneList.hide()}),a(window).scroll(Debounce(function(){volantis.$mPhoneList.hide()})))}function r(){a(".tabs .nav-tabs").on("click","a",function(t){t.preventDefault(),t.stopPropagation();var o=a(t.target.parentElement.parentElement.parentElement);return o.find(".nav-tabs .active").removeClass("active"),o.find(t.target.parentElement).addClass("active"),o.find(".tab-content .active").removeClass("active"),o.find(a(t.target).attr("class")).addClass("active"),!1})}volantis.$header[0]&&(i=volantis.$header[0].clientHeight+16),a(function(){n(),l(),o?a("#l_header .m-phone li").click(function(t){t.stopPropagation(),a(a(t.currentTarget).children("ul")).show()}):a("#wrapper .m-pc li > a[href]").parent().click(function(t){t.stopPropagation(),t.target.origin==t.target.baseURI&&a("#wrapper .m-pc .list-v").hide()}),c(),0!==volantis.$switcher.length&&(volantis.$switcher.click(function(t){t.stopPropagation(),volantis.$header.toggleClass("z_search-open"),volantis.$switcher.toggleClass("active"),volantis.$search.find("input").focus()}),a(document).click(function(t){volantis.$header.removeClass("z_search-open"),volantis.$switcher.removeClass("active")}),volantis.$search.click(function(t){t.stopPropagation()}),volantis.$header.ready(function(){volantis.$header.bind("keydown",function(t){if(9==t.keyCode)return!1;var o,e=!!document.all,n=e?(o=window.event.keyCode,window.event):(o=t.which,t);9==o&&(e?(n.keyCode=0,n.returnValue=!1):(n.which=0,n.preventDefault()))})})),e(),r(),a("#scroll-down").on("click",function(){s(volantis.$bodyAnchor)});try{document.addEventListener("pjax:complete",function(){a(function(){i=80,volantis.$header[0]&&(i=volantis.$header[0].clientHeight+16),n(),l(),c(),e(),r(),a("#scroll-down").on("click",function(){s(volantis.$bodyAnchor)}),0!==volantis.$switcher.length&&a(document).click(function(t){volantis.$header.removeClass("z_search-open"),volantis.$switcher.removeClass("active")})})},{passive:!0})}catch(t){}}),window.location.hash&&(t=setInterval(function(){a("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).length&&(a("html, body").animate({scrollTop:a("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).offset().top-40},500),clearInterval(t))},100))}(jQuery);