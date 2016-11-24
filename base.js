var gifts=null;
$(function (){
    var gfs=sessionStorage.getItem('gifts');
    if(gfs) {
        gifts=JSON.parse(gfs);
    }else{
        $.getJSON("https://quany.github.io/gifts/goods.json?t=1", function (data) {
            gifts=data;
            dealGifs();
            sessionStorage.setItem('gifts',JSON.stringify(data));
        });
    }
});
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    };
    $.getYmdFormatDate=function (dd){
        var r=new Date(dd);
        return r.getFullYear()+'-'+(r.getMonth()+1)+'-'+r.getDate();
    };
})(jQuery);