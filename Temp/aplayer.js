function checkAPlayer(){null==APlayerController.player?setAPlayerObject():null==APlayerController.observer&&setAPlayerObserver()}function setAPlayerObject(){null!=APlayerController.id&&document.querySelectorAll("meting-js").forEach(function(e,l){e.meta.id==APlayerController.id&&null!=document.querySelectorAll("meting-js")[l].aplayer&&(APlayerController.player=document.querySelectorAll("meting-js")[l].aplayer,setAPlayerObserver())})}function setAPlayerObserver(){try{function l(e){var l=((e.clientX||e.changedTouches[0].clientX)-APlayerController.volumeBar.getBoundingClientRect().left)/APlayerController.volumeBar.clientWidth,l=Math.max(l,0);l=Math.min(l,1),APlayerController.player.volume(l)}APlayerController.player.on("play",function(e){updateAPlayerControllerStatus()}),APlayerController.player.on("pause",function(e){updateAPlayerControllerStatus()}),APlayerController.player.on("volumechange",function(e){onUpdateAPlayerVolume()}),APlayerController.player.on("loadstart",function(e){updateTitle()}),APlayerController.volumeBarWrap=document.getElementsByClassName("nav volume")[0].children[0],APlayerController.volumeBar=APlayerController.volumeBarWrap.children[0];function r(e){l(e)}function o(e){APlayerController.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"),document.removeEventListener("mouseup",o),document.removeEventListener("mousemove",r),l(e)}APlayerController.volumeBarWrap.addEventListener("mousedown",function(){APlayerController.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"),document.addEventListener("mousemove",r),document.addEventListener("mouseup",o)}),updateAPlayerControllerStatus(),onUpdateAPlayerVolume(),APlayerController.observer=!0,console.log("APlayerController ready!")}catch(e){delete APlayerController.observer}}function updateAPlayerControllerStatus(){try{APlayerController.player.audio.paused?(document.getElementsByClassName("nav toggle")[0].children[0].classList.add("fa-play"),document.getElementsByClassName("nav toggle")[0].children[0].classList.remove("fa-pause")):(document.getElementsByClassName("nav toggle")[0].children[0].classList.remove("fa-play"),document.getElementsByClassName("nav toggle")[0].children[0].classList.add("fa-pause"))}catch(e){console.log(e)}}function onUpdateAPlayerVolume(){try{APlayerController.volumeBar.children[0].style.width=100*APlayerController.player.audio.volume+"%"}catch(e){console.log(e)}}function aplayerToggle(){checkAPlayer();try{APlayerController.player.toggle()}catch(e){console.log(e)}}function aplayerBackward(){checkAPlayer();try{APlayerController.player.skipBack(),APlayerController.player.play()}catch(e){console.log(e)}}function aplayerForward(){checkAPlayer();try{APlayerController.player.skipForward(),APlayerController.player.play()}catch(e){console.log(e)}}function aplayerVolume(e){checkAPlayer();try{APlayerController.player.volume(e)}catch(e){console.log(e)}}function updateTitle(){checkAPlayer();try{var e=APlayerController.player.list.index,l=APlayerController.player.list.audios[e];document.getElementsByClassName("nav music-title")[0].innerHTML=l.title}catch(e){console.log(e)}}jQuery,checkAPlayer(),setTimeout(function(){checkAPlayer()},3e3),setTimeout(function(){checkAPlayer()},1e4);