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

	/* 지도 삽입 */
	var winWidth = $(document).width();
	$('#map').width(winWidth);

	var container = document.getElementById('map');
	var options = {
		center: new daum.maps.LatLng(37.5060320, 127.058236),
		level: 6,
		draggable: false //마우스로 이동안되도록 설정
	};

	var map = new daum.maps.Map(container, options);
	// 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막는다
	map.setZoomable(true);

	// 지도에 확대 축소 컨트롤을 생성한다
	var zoomControl = new daum.maps.ZoomControl();

	// 지도의 우측에 확대 축소 컨트롤을 추가한다
	map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

	// 지도에 마커를 생성하고 표시한다
	var marker = new daum.maps.Marker({
		position: new daum.maps.LatLng(37.5060320, 127.058236), // 마커의 좌표
		map: map // 마커를 표시할 지도 객체
	});
	// 마커 위에 표시할 인포윈도우를 생성한다
	var infowindow = new daum.maps.InfoWindow({
		content: '<div style="text-align:center; width:140px; font-size:11px; padding:6px;">서울 강남구 테헤란로82길 15</div>' // 인포윈도우에 표시할 내용
	});

	// 인포윈도우를 지도에 표시한다
	infowindow.open(map, marker);
	
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