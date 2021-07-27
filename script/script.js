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

    setInterval (fnSlide, 3000);

    function fnSlide() {

        $("#slideArea").animate(
            {"margin-left":"-800px"},
            3000,
            function() {
                $("#slideArea>a:nth-child(1)").insertAfter("#slideArea>a:nth-child(3)");
            //  = $("#slideArea").eq(0)
                $("#slideArea").css({
                    "margin-left":"0"
                });

            }
        );
    }
   






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