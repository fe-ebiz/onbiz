$(function () {
	/*top 으로 버튼 노출*/
	$(window).scroll(function () {
		var st = $(window).scrollTop();
		if (st > 50) {
			$(".btntop").fadeIn("fast");
		} else {
			$(".btntop").fadeOut("fast");
		}
	});
	/*위로가기 버튼 클릭*/
	$(".btntop").click(function () {
		$(window).scrollTop(0);
	});

    /**
      190111 배너 
     **/
    var bnl = $('.bn-left-wrap'), bnr = $('.bn-right-wrap');
    var bnlH = bnl.height(), bnrH = bnr.height();
    var bnrt = 125, bnTime = 250;
    
    //좌측배너 세로 가운데 정렬
    bnl.css({'margin-top' : (-bnlH)+'px'});
    
    //우측배너 인터렉션
    bnr.css({'top' : bnrt+'px'});
    
    $(window).scroll(function(){
        if( $(window).scrollTop() < $('#mainTop').offset().top ){
            bnr.stop().animate({'top' : bnrt+'px', 'margin-top' : 0+'px'}, bnTime);
        }else {
            bnr.stop().animate({'top' : 50+'%', 'margin-top' : (-(bnrH/2))+'px'}, bnTime);
        }
    });
    
});