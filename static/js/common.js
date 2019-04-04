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

    
});