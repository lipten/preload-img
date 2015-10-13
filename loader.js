var i = 0;
var c = 3;
var imgarr = new Array();
imgarr[0] = "http://www.baidu.com/img/baidu_logo.gif";
imgarr[1] = "http://img.baidu.com/img/logo-img.gif";
imgarr[2] = "http://img.baidu.com/img/logo-zhidao.gif";
var Browser = new Object();
Browser.userAgent = window.navigator.userAgent.toLowerCase();
Browser.ie = /msie/.test(Browser.userAgent);
Browser.Moz = /gecko/.test(Browser.userAgent);


function SImage(url, callback) {
    alert(url);
    var img = new Image();
    if (Browser.ie) {
        img.onreadystatechange = function () {
            if (img.readyState == "complete" || img.readyState == "loaded") {
                var ii = i + 1;
                callback(ii);
            }
        }
    } else if (Browser.Moz) {
        img.onload = function () {
            if (img.complete == true) {
                var ii = i + 1;
                callback(ii);
            }
        }
    }
    img.src = url;
}
function icall(v) {
    alert(v);
    if (v < c) {
        SImage("" + imgarr[v] + "", icall);
    }
    else if (v >= c) {
        i = 0;
        alert('img all loaded')
    }
}