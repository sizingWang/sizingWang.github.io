// 以下为开始载入执行
$(document).ready(function () {
    //菜单收缩到图标
    if(clientIs == 'phone'||clientIs == 'pad'){
        $(".ax-admin nav").addClass("ax-nav-fold");
    }
    $(".ax-admin nav .ax-close-nav,.ax-admin nav .ax-mask").click(function(){

        if(clientIs == 'phone'||clientIs == 'pad'){
            $(".ax-admin aside").removeClass("ax-aside-unfold");
            $.cookie('closeAside', 'fold', { expires: 3650, path: '/' });
        }
        setTimeout(function(){  $(".ax-scroll").getAxScroll().resize();}, 500);
        if($(".ax-admin nav").hasClass("ax-nav-fold")){
            $(".ax-admin nav").removeClass("ax-nav-fold");
            $(".ax-admin nav .ax-menu .ax-show").css("height","auto");
            $.cookie('closeNav', '', { expires: 3650, path: '/' });
        }else{
            $(".ax-admin nav").addClass("ax-nav-fold");
            $(".ax-admin nav .ax-menu .ax-show").css("height","0");
            $.cookie('closeNav', 'fold', { expires: 3650, path: '/' });
        }
    });
    $(".ax-menu a").click(function(){
        if($(".ax-nav").hasClass("ax-nav-fold")){
            $(".ax-nav").removeClass("ax-nav-fold");
            $.cookie('closeNav', '', { expires: 3650, path: '/' });
        }
    });
    if($.cookie("closeNav") === 'fold') {
        $(".ax-admin nav").addClass("ax-nav-fold");
        $(".ax-admin nav .ax-menu .ax-show").css("height","0");
    } else {
        if(clientIs == 'phone'||clientIs == 'pad'){
            $(".ax-admin nav").addClass("ax-nav-fold");
        }else{
            $(".ax-admin nav").removeClass("ax-nav-fold");
        }
        $(".ax-admin nav .ax-menu .ax-show").css("height","auto");
    }
    $(".ax-menu").click(function () {

        setTimeout(function(){  $(".ax-scroll").getAxScroll().resize();}, 500);
    });
});
//以下为滚动执行
$(window).scroll(function () {

});
//以下为完全载入执行
$(window).load(function () {

});
