$(document).ready(function() {
	
	//모달창 텍스트
	var s_arg = ["서명란에 서명을 해주세요", "도장 이미지를 업로드 해주세요"];

	/*전자서명하기, 도장이미지 업로드*/
	$("#contents .way li input").on("click", function() {
		//console.log($(this).index());
		var wIdx = $(this).closest("li").index();
		$sign_wrap = $("#sign_wrap");

		/* 모달창 브라우저 중앙높이 정렬 */
		$(window).scrollTop(0);
		var wh = $(window).height();
		//console.log(wh);
		if(wh > 380){
			wh = wh/2 ;
			$(".common_wrap section").css({
				"top": wh,
				"margin-top": "-190px"
			});
			
		}

		/* 캔버스 높이 부여 */
		/*var cw = $("#signature-pad > div:first p:last").width();
		var ch = $("#signature-pad > div:first p:last").height();
		console.log(cw);
		console.log(ch);
		$sign_wrap.find("#signature-pad canvas").css({
			"width": cw,
			"height": ch
		});*/

		$("#backDrop").css("display", "block");
		//$sign_wrap.fadeIn();
		$sign_wrap.addClass("on");
		$sign_wrap.find(".sign_tab").find("li").removeClass("on");
		$sign_wrap.find(".sign_tab").find("li").eq(wIdx).addClass("on");
		$sign_wrap.find(".sign_pan").find("li").removeClass("on");
		$sign_wrap.find(".sign_pan").find("li").eq(wIdx).addClass("on");
		
		$sign_wrap.find(".common_box > h3").text(s_arg[wIdx]);

	});

	/*모달 창 닫기, X누룰 시, 계약서 발급완료 확인 버튼 누를 시*/
	$("#sign_wrap .common_clsBtn, #comp_wrap .common_clsBtn").on("click", function() {
		$(".common_wrap").removeClass("on");
		$("#backDrop").css("display", "none");
		signaturePad.clear();
	});
	
	/*모달 탭 클릭*/
	$("#sign_wrap .sign_tab li").on("click", function() {
		var sIdx = $(this).index();
		$("#sign_wrap .sign_tab li").removeClass("on");
		$(this).addClass("on");
		//console.log(idx);
		$(this).parent().next().children().removeClass("on");
		$(this).parent().next().children().eq(sIdx).addClass("on");

		$("#sign_wrap .common_box > h3").text(s_arg[sIdx]);

	});
	
	/*파일박스 꾸미기*/
	var fileTarget = $('.filebox .upload-hidden'); 
	fileTarget.on('change', function(){ // 값이 변경되면 
		if(window.FileReader){ // modern browser 
			var filename = $(this)[0].files[0].name; 
		} else { // old IE 
			var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
		} 
		// 추출한 파일명 삽입 
		$(this).siblings('.upload-name').val(filename);
	});

	/*발급 중 보기*/
	/*$("#backDrop").css("display", "block");
	$("#load_wrap").addClass("on");*/
	
	/*발급완료 보기*/
	/*$("#backDrop").css("display", "block");
	$("#comp_wrap").addClass("on");*/
	
	/*로딩 클래스부여 예시*/
	$("#sign_wrap .st_ld").on("click", function() {
		$("#sign_wrap").removeClass("on");
		$("#load_wrap").addClass("on");
		$("#load_wrap").addClass("on");
		setTimeout(function() {
			$("#load_wrap").removeClass("on");
			$("#comp_wrap").addClass("on");
		}, 1000);
	});	
	
});