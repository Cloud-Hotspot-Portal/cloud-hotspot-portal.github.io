require(["gitbook", "jquery"], function (gitbook) {
    gitbook.events.bind("start", function (e, config) {
        //获取配置项
        var analytics = config["devops-analytics"];
        baidu(analytics.bd_token);
        google(analytics.google_token);
    });
});

/**
 * 加载百度统计JS
 * @param token 百度统计token，类似25d234bbafdb7c9bc207310c9ca5efcb
 */
function baidu(token) {
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?" + token;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}

/**
 * 加载Google统计JS
 * @param token UA-ID，跟踪ID，类似UA-111740326-1
 */
function google(token) {
    var htm = "<script async src=\"https://www.googletagmanager.com/gtag/js?id=" + token + "\"></script>";
    htm += "<script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '"+ token +"');</script>";
    $("head").append(htm);
}