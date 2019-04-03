$(function() {
	
	/* 메인 슬라이드 */
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
	
	$(".mail_select").change(function(){
		if($(this).val() == 'write') {
			$("input[name=email3]").show();
		} else {
			$("input[name=email3]").hide();
		}
	});

	document.documentElement.addEventListener('touchstart', function (event) { 
	  if (event.touches.length > 1) { 
		event.preventDefault(); 
	  } 
	}, false); 

	var lastTouchEnd = 0;
	document.documentElement.addEventListener('touchend', function (event) {
	  var now = (new Date()).getTime();
	  if (now - lastTouchEnd <= 500) {
		event.preventDefault();
	  }
	  lastTouchEnd = now;
	}, false);

	$(".btntop img").click(function(){
		$('html, body').animate({scrollTop:0},500);
	});
});

/* 폼체크 */
function formChk() {
	var fform = $("inquiry_form");
	var chk_name = $("input[name=name]");
	var chk_email1 = $("input[name=email1]");
	var chk_email2 = $("select[name=email2]");
	var chk_email3 = $("input[name=email3]");
	var chk_phone1 = $("input[name=phone1]");
	var chk_phone2 = $("input[name=phone2]");
	var chk_phone3 = $("input[name=phone3]");
	var chk_subject = $("input[name=subject]");
	var chk_message = $("textarea[name=memo]");

	if($.trim(chk_name.val()).length < 1) {
		alert('이름을 입력해주세요');
		chk_name.focus();
		
		return false;
	}

	if($.trim(chk_phone1.val()).length <1 ) {
		alert('연락처를 입력해주세요');		
		chk_phone1.focus();
		
		return false;	
	}
	if($.trim(chk_phone2.val()).length <1 ) {
		alert('연락처를 입력해주세요');
		chk_phone2.focus();
		
		return false;	
	}
	if($.trim(chk_phone3.val()).length <1 ) {
		alert('연락처를 입력해주세요');
		chk_phone3.focus();
		
		return false;	
	}
	if($.trim(chk_email1.val()).length <1 ) {
		alert('이메일을 입력해주세요');
		chk_email1.focus();
		
		return false;	
	}

	if($.trim(chk_email2.val()) == 'write' && $.trim(chk_email3.val()).length < 1) {
		alert('이메일을 입력해주세요');
		chk_email3.focus();
		
		return false;	
	}

	if($.trim(chk_subject.val()).length <1 ) {
		alert('제목을 입력해주세요');
		chk_subject.focus();
		
		return false;	
	}
	if($.trim(chk_message.val()).length <1 ) {
		alert('내용을 입력해주세요');
		
		chk_message.focus();
		return false;	
	}
	$("#inquiry_form").submit();
}

//숫자 입력체크
function Onlynum(value,id) {
	if($.isNumeric(value) === true) {
		return true;
	} else {
		$("#"+id).val('');
	}
}

function maxLengthCheck(object){
	if (object.value.length > object.maxLength){
		object.value = object.value.slice(0, object.maxLength);
	}    
}