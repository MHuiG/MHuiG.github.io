/* global CryptoJS, MathJax */
'use strict';

var hbeCookieName = 'HBEPASSWORD';

function getExecutableScript(oldElem) {
  var out = document.createElement('script');
  var attList = ['type', 'text', 'src', 'crossorigin', 'defer', 'referrerpolicy'];
  attList.forEach(function (att) {
    if (oldElem[att]) out[att] = oldElem[att];
  });
  return out;
}

function convertHTMLToElement(content) {
  var out = document.createElement('div');
  out.innerHTML = content;
  out.querySelectorAll('script').forEach(function (elem) {
    elem.parentNode.replaceChild(getExecutableScript(elem), elem);
  });
  return out;
}

function decryptAES(password) {
  try {
    var decryptionError = String(document.getElementById('decryptionError').innerHTML);
    var noContentError = String(document.getElementById('noContentError').innerHTML);
  } catch (e) {
    decryptionError = 'Incorrect Password!';
    noContentError = 'No content to display!';
  }

  try {
    var content = unescape(CryptoJS.AES.decrypt(document.getElementById('encrypt-blog').innerHTML.trim(), password).toString(CryptoJS.enc.Utf8));

    if (content === '') {
      throw new Error(noContentError);
    } else {
      document.getElementById('encrypt-blog').style.display = 'inline';
      document.getElementById('encrypt-blog').innerHTML = '';

      try {
        document.getElementById('encrypt-blog').appendChild(convertHTMLToElement(content));
        ; // eslint-disable-line no-undef
      } catch (e) {
        var errorInfo = '<p>' + 'Some errors occurred, check the original file please.' + 'Detailed exceptions are shown in console.' + '</p>';
        console.error(e);
        document.getElementById('encrypt-blog').innerHTML = errorInfo;
      }

      document.getElementById('hbe-security').style.display = 'none';
      var tocDiv = document.getElementById("toc-div");

      if (tocDiv) {
        tocDiv.style.display = 'inline';
      }

      var tocDivs = document.getElementsByClassName('toc-div-class');

      if (tocDivs && tocDivs.length > 0) {
        for (var idx in tocDivs) {
          tocDivs[idx].style.display = 'inline';
        }
      }
    } // Call MathJax to render


    if (typeof MathJax !== 'undefined') {
      try {
        MathJax.Hub.Queue(['resetEquationNumbers', MathJax.InputJax.TeX], ['PreProcess', MathJax.Hub], ['Reprocess', MathJax.Hub]);
      } catch (e) {
        console.log('Can\'t render with MathJax');
      }
    }
  } catch (e) {
    alert(decryptionError);
    console.log(e);
    return false;
  }

  return true;
}

function setCookie(cookieName, cookieValue, expireMinutes) {
  var expireTime = new Date(new Date().getTime() + 1000 * 60 * expireMinutes);
  document.cookie = cookieName + "=" + escape(cookieValue) + (expireMinutes == null ? '' : ";expires=" + expireTime.toGMTString());
}

function getCookie(cookieName) {
  if (document.cookie.length > 0) {
    var idx = document.cookie.indexOf(cookieName + "=");

    if (idx != -1) {
      idx = idx + cookieName.length + 1;
      var idy = document.cookie.indexOf(';', idx);

      if (idy == -1) {
        idy = document.cookie.length;
      }

      return unescape(document.cookie.substring(idx, idy));
    }
  }

  return '';
}

function getUrlRelativePath() {
  var url = document.location.toString();
  var arrUrl = url.split('//');
  var start = arrUrl[1].indexOf('/');
  var relUrl = arrUrl[1].substring(start);

  if (relUrl.indexOf('?') != -1) {
    relUrl = relUrl.split('?')[0];
  }

  return relUrl;
}

function generateCookieName() {
  return hbeCookieName + getUrlRelativePath();
}

function hbeLoader() {
  var password = String(getCookie(generateCookieName()));
  console.log("Get password from Cookie:" + password);

  if (password != '') {
    if (!decryptAES(password)) {
      // Delete cookie
      setCookie(hbeCookieName, password, -5);
    }
  }

  console.log('Registering Enter for decrypt.');

  document.getElementById('pass').onkeypress = function (keyPressEvent) {
    password = String(document.getElementById('pass').value);

    if (keyPressEvent.keyCode === 13) {
      var result = decryptAES(password);

      if (result) {
        setCookie(generateCookieName(), password, 30);
      }
    }
  };
}

if (document.readyState !== 'loading') {
  hbeLoader();
} else {
  document.addEventListener('DOMContentLoaded', hbeLoader);
}