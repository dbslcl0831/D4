$(function(){
    //메뉴
    $(".main>li").mouseover(function(){
        $(".sub").stop().show();
    })
    $(".main>li").mouseout(function(){
        $(".sub").hide();
    })
    //-----메뉴

    //이미지슬라이드
    $(".fade li").eq(0).siblings().hide();
    var n =0;
    setInterval(function(){
        $(".fade li").eq(n).fadeOut();
        if(n == 2){
            n=0
        }else{
            n++
        }//if
        $(".fade li").eq(n).fadeIn();
    },2500)
    //-----이미지슬라이드

    //pop
    $(".pop").hide();
    $(".pop_click").click(function(){
        $(".pop").show();
    })
    $(".close").click(function(){
        $(".pop").hide();

    })
})//j