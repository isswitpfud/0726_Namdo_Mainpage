$(function() {

    // gnb메뉴
    $("li.mainLi, ul.subMenu").mouseover(function(){
        $(this).children("ul.subMenu").stop().slideDown(600);

        $("li.mainLi, ul.subMenu").mouseout(function () {
            $(this).children("ul.subMenu").stop().fadeOut(200);
        });
    });
    // gnb메뉴 끝 


    //   slideShow 시작 





    //   slideShow 끝 



    //레이어 팝업 시작

$("#noticePopup").click(function(){
    $("#popupBG").css({"display":"block"});
});

$("#closeBtn").click(function(){
    $("#popupBG").css({"display":"none"});
});

    //레이어 팝업 끝
    


    

});