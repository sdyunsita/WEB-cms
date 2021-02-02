$("div#lecture-title h1").eq(0).css({ "background": "#cce1d8" });
$("div#lecture-title h1").hover(function () {
    var key2 = $(this).index();
    $(this).css({ "background": "#cce1d8" }).siblings().css({ "background": "white" });
    $("ul.lecture1").eq(key2).show().siblings().hide();
    if (key2 == 0) {
        $('div#lecture-title a').attr("href", "http://www.sdyu.edu.cn/xwzx/xyxw.htm");
    }
    else {
        $('div#lecture-title a').attr("href", "http://www.sdyu.edu.cn/ryb.htm");
    }
});
$("div#lecture-title2 h1").eq(0).css({ "background": "#cce1d8" });
$("div#lecture-title2 h1").hover(function () {
    var key2 = $(this).index();
    $(this).css({ "background": "#cce1d8" }).siblings().css({ "background": "white" });
    $("ul.lecture2").eq(key2).show().siblings().hide();
    if (key2 == 0) {
        $('div#lecture-title2 a').attr("href", "http://www.sdyu.edu.cn/xwzx/xsjz.htm");
    }
    else {
        $('div#lecture-title2 a').attr("href", "http://www.sdyu.edu.cn/xwzx/hdbg.htm");
    }
});
$("div#lecture-title3 h1").eq(0).css({ "background": "#cce1d8" });
$("div#lecture-title3 h1").hover(function () {
    var key2 = $(this).index();
    $(this).css({ "background": "#cce1d8" }).siblings().css({ "background": "white" });
    $("ul.lecture3").eq(key2).show().siblings().hide();
    if (key2 == 0) {
        $('div#lecture-title3 a').attr("href", "http://www.sdyu.edu.cn/bxck.htm");
    }
    else {
        $('div#lecture-title3 a').attr("href", "http://www.sdyu.edu.cn/xxzy.htm");
    }
});