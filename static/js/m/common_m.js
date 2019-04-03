$(function () {
	/*top 으로 버튼 노출*/
  $(window).scroll(function() {
    var st = $(window).scrollTop();
    if( st > 50 ){
      $(".btntop").fadeIn("fast");
    } else {
      $(".btntop").fadeOut("fast");
    }
  });
  /*위로가기 버튼 클릭*/
  $(".btntop").click(function() {
    $(window).scrollTop(0);
  });
  /*tab 클릭시 Nav전체화면 등장*/
	$("#wrap .nav_tab2 > a:eq(1), #wrap .nav_tab2 > a:eq(2), #wrap .headerOrigin > .nav_tab").on("click", function() {
		$(this).closest('.headerOrigin').toggleClass('on');
		$("#backDrop").fadeIn();
		$("#menu_wrap").fadeIn();
	});
	/*X, 홈으로 클릭시 Nav사라짐*/
	$(".clsBtn").on("click", function() {
		$("#backDrop, #menu_wrap").fadeOut();
	});
	/*임대신청내역확인 내역조회 등장*/
	$(".chClk, #menu_wrap .chk_clsBtn").on("click", function() {
		$(this).closest("section").addClass("off");
		$(this).closest("section").next().removeClass("off");

		var wh = $(window).height();
		//console.log(wh);
		if(wh > 306){
			wh = wh/2 ;
			$(this).closest("section").next().css({
				"top": wh,
				"margin-top": "-163px"
			});
		}
		
	});
	/*내역조회 X버튼 클릭시 다시 Nav등장*/
	$("#menu_wrap .chk_clsBtn").on("click", function() {
		$(this).closest("section").addClass("off");
		$(this).closest("section").prev().removeClass("off");
	}); 
	/* faq */
	$("#faq .f_q").on("click", function() {
    	$(this).next().slideToggle("fast");
    });
  /*tab 클릭시 Nav전체화면 등장
	$(".nav_tab").on("click", function() {
		$("#backDrop").hide();
		$("#menu_wrap").hide();
	});
	*/
    
    /* 190403 메뉴 클릭 이벤트 */
    $('.btn-nav').on('click', function(){
        $(this).toggleClass('on');
        $('.header-renew .gnb').toggleClass('on');
    });
    
    /* 문의하기 & 오시는 길 */
    $('.gnb .gnb-list li a').on('click',function(e){
       if( $(this).parents('li').hasClass('mv') ){
           e.preventDefault();
           
           var getId = $(this).attr('href');
           var offset = $(getId).offset();
           
           $("html, body").animate({
               scrollTop: offset.top
           }, 1000);
       }
    });
    
    /* 임대신청 내역 확인 */
    $('.btn-chk').on('click', function(){
		$('.chk_wrap').removeClass("off");

		$("#backDrop").fadeIn();
		var wd = $('.chk_wrap').width();
		var wh = $(window).height();
		$('.chk_wrap').css({"left" : "50%", "margin-left" : -(wd/2)+'px'});
		if(wh > 306){
			wh = wh/2 ;
			$('.chk_wrap').css({
				"top": wh,
				"margin-top": "-163px"
			});
		}
    });
    //이전 임대신청 내역 확인 팝업 닫기 버튼과 겹치지 않도록 멀티클래스 추가
    $(".chk_clsBtn.type-2").on("click", function() {
		$("#backDrop").fadeOut();
		$('.chk_wrap').addClass("off");
	}); 
}); 




