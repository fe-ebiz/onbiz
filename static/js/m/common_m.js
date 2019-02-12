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
	$(".chClk, .chk_clsBtn").on("click", function() {
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
	$(".chk_clsBtn").on("click", function() {
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
});     