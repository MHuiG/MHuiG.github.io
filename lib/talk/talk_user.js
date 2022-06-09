function ajaxObject() {
  var e;
  try {
    e = new XMLHttpRequest();
  } catch (t) {
    try {
      e = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (t) {
      try {
        e = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
      }
    }
  }
  return e;
}
function loadStyle(e) {
  var t = document.createElement("link");
  (t.type = "text/css"),
    (t.rel = "stylesheet"),
    (t.href = e),
    document.getElementsByTagName("head")[0].appendChild(t);
}
function hpp_loadmore(e, t, n) {
  new hpp_talk({
    id: e,
    domain: t,
    limit: n,
    start: Number(localStorage.getItem("hpp_start")),
  });
}
function hpp_talk({ id: e, domain: t, limit: n, start: r, themecss: i }) {
  function s(e) {
    var t = 0;
    for (var n in e) t++;
    return t;
  }
  null != i && loadStyle(i),
    (document.getElementById(e).innerHTML =
      '<div class="hpp_talk_loading"><div class="hpp_talk_part"><div style="display: flex;justify-content: center;"><div class="hppt_loader"><div class="hppt_inner one"></div><div class="hppt_inner two"></div><div class="hppt_inner three"></div></div></div></div><p style="text-align:center;">加载中</p></div>'),
    console.log(e),
    (back = "https://" + t + "/hpp/api/gethpptalk");
  var l = ajaxObject();
  l.open("post", back, !0),
    l.setRequestHeader("Content-Type", "text/plain"),
    (l.onreadystatechange = function () {
      if (4 == l.readyState)
        if (200 == l.status) {
          // (document.getElementById(e).innerHTML = `<div class="hppt_streamline hppt_b-l hppt_m-l-lg hppt_m-b hppt_padder-v">\n   <ol id="hpp_talk_list"></ol> \n   <a href="javascript:hpp_loadmore('${e}','${t}',${n})" class="hppt_button_nextpage">下一页</a>\n  </div>`),
          (document.getElementById(e).innerHTML = `<div class="hppt_streamline hppt_b-l hppt_m-l-lg hppt_m-b hppt_padder-v">\n   <ol id="hpp_talk_list"></ol> \n</div>`),
            console.log("OK"),
            console.log(l.responseText);
          let i = JSON.parse(l.responseText);
          i.reverse();
          document.getElementById("hpp_talk_list").innerHTML = "";
          for (var r = 0; r < s(i); r++) {
            if (null == i[r]) {
              localStorage.setItem("hpp_start", 0);
              break;
            }
            let e = i[r],
              t = e.content;
            document.getElementById(
              "hpp_talk_list"
            ).innerHTML += `<div id="${e.id}" class="hppt_comment-body hppt_comment-parent hppt_comment-odd hppt_comment-by-user"> <div id="item">\n     <a class="hppt_pull-left hppt_thumb-sm hppt_avatar hppt_m-l-n-md"> <img nogallery="" src="${e.avatar}" class="hppt_img-40px hppt_photo hppt_img-square hppt_normal-shadow"> </a> \n     <div class="hppt_time-machine hppt_m-l-lg hppt_panel hppt_box-shadow-wrap-normal"> \n      <div class="hppt_panel-heading hppt_pos-rlt hppt_b-b hppt_b-light">\n       <span class="hppt_text-muted hppt_m-l-sm hppt_pull-right" datetime="${e.time}"><strong class="talk_mobile_hide">  ${e.name}·</strong>${e.time}</span> \n      </div> \n      <div class="hppt_panel-body hppt_comment-content-true"> \n       <p>${t}</p> \n      </div> \n      <div class="hppt_panel-footer"> \n       <div class="hppt_say_footer">\t   \n\t   </div> \n      </div> \n     </div> \n    </div>`;
          }
        } else console.log("ERROR");
    });
  let a = { limit: n, start: r };
  (r += n), localStorage.setItem("hpp_start", r), l.send(JSON.stringify(a));
}
localStorage.setItem("hpp_start", 0);
