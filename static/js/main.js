$(document).ready(function(){
    //전역변수 설정
    var slider;
    
    /* 함수실행 */
    menuFn();
    topFn();
    
    /* 리뷰 슬라이드 */
    $("#review .review-list").bxSlider({
        pager : false,
		speed : 500,
		duration : 6000,
        slideWidth: 396,
        minSlides: 2,
        maxSlides: 2,
        slideMargin: 15,
        nextText: '',
        prevText: ''
    });
    
    /* 팝업 닫기버튼 클릭 시 */
    $('.btn-close').on('click', function(){
        var pop = $(this).parents('.pop-bg');
        pop.fadeOut();
        
        $('html').css({'overflow': 'auto', 'height': '100%'});
        pop.off('scroll touchmove mousewheel');
    });
    
    /* 사무실 구경하기 버튼 클릭 시 */
    $('.btn-office-view').on('click', function(){
        popOpen('#popView')
    });
    
    
    /**
      190111 배너 
     **/
    var bnl = $('.bn-left-wrap'), bnr = $('.bn-right-wrap');
    var bnlH = bnl.height(), bnrH = bnr.height();
    var bnrt = 60, bnTime = 250;
    
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

/* 메뉴 */
function menuFn(){
    var scltop = $(window).scrollTop();
    var menu = $('.menu-list li');
    var menuH = $('.main-header .menu-list').height();
    var time = 1200;
        
    menuGnb(scltop, menuH);
    
    //menu click
    menu.find('a').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        //console.log(target);
        var offsetTop = $(target).offset().top;
        
        if( target == '#mainTop' ){
            $('html, body').stop().animate({
                scrollTop : 0
            }, time);
            
        }else{
        
            $('html, body').stop().animate({
                scrollTop : offsetTop
            }, time);
        }

        return false;
    });
    
    //scroll
    $(window).scroll(function(){
        scltop = $(window).scrollTop();
        //target.offset().top;
        menuGnb(scltop, menuH);
        
        
    });
}

/* scroll, load 공통 */
function menuGnb(scltop, menuH){
    var menuL = $('.menu-l .menu-list li');
    var menuLH = $('.menu-l').height();
    var section = $('section[class*="-sec"]');
    
    //header
    if( scltop < $('#mainTop').offset().top ){
        $('.main-gnb').removeClass('on');
    }else {
        $('.main-gnb').addClass('on');
    }
    
    //scroll
    $.each(section, function(idx, item){
        var target = section.eq(idx);
        var targetTop = target.offset().top;

        if ( (targetTop-menuH) <= scltop ) {
            menuL.removeClass('on');
            $('.menu-l .menu-list li.nth-'+(idx+1)).addClass('on');
            //menuL.find('.menu-txt').stop().animate({'margin-left' : 15+'px', 'opacity' : 0}, 130);
            //$('.menu-l .menu-list li.nth-'+(idx+1)).addClass('on').find('.menu-txt').stop().animate({'margin-left' : 0+'px', 'opacity' : 1}, 200);
            
            
            //해당구간 지날때 왼쪽 메뉴 컬러 변경
            if( ($('#service').offset().top-menuLH) <= scltop && scltop < ($('#view').offset().top-menuLH) ){
                $('.menu-l .menu-list').addClass('white');
            }else if( ($('#office').offset().top-menuLH) <= scltop && scltop < ($('#way').offset().top-menuLH) ){
                $('.menu-l .menu-list').addClass('white');
            }else{
                $('.menu-l .menu-list').removeClass('white');
            }
        }
        
    })

}

/* 홈 div 높이값 */
function topFn(){
    var applyH, applymaxH = 0;
    var applyLen = $('.apply-area > div').length;
    
    for( var i = 0 ; i < applyLen ; i++ ){
        applyH = $('.apply-area > div:eq('+i+')').innerHeight();
        if( applyH > applymaxH ) 
            applymaxH = applyH;
    }
    
    $('.apply-box').css({'height' : applymaxH+'px'});
}

/* 층별보기 - 이미지 클릭 시 */
function floorPop(width, height, image) {
	var winH = $(window).height();
	var winW = $(window).width();
	var popH = (winH-height)/2;
	var popW = (winW-width)/2;
	var pop = window.open("/pop.php?img="+image,'','width='+width+'px,height='+height+'px,top='+popH+'px,left='+popW+'px');
    //http://onbiz.co.kr/pop.php?img=plan_13.jpg
}

/* 팝업 */
function popOpen(popId){
    var popup = $(popId);

    popup.fadeIn();
    
    $('html').css({'overflow': 'hidden', 'height': '100%'});
    
    popup.on('scroll touchmove mousewheel', function(event) { 
        event.preventDefault();     
        event.stopPropagation();     
        return false; 
    });
    
    if( popId = '#view' ){
        officePop();
    }else{
    }
}

/* 팝업 : 층별보기 - 사무실 구경하기 */
function officePop(){
    var slider_bxOption = {
        mode : 'fade',
        auto : false,
        autoControls : true,
        speed : 500,
        duration : 6000,
        prevText : '<img src="http://static.ditower.co.kr/images/prettyPhoto/facebook/btnPrevious.png" alt="이전">',
        nextText : '<img src="http://static.ditower.co.kr/images/prettyPhoto/facebook/btnNext.png" alt="다음">'
    }
    var bxClose = $('#popView .btn-close-box');
    var bxBtn, bximg = 0, bximgW = 0;
    
    //$('#popView .bx-list').bxSlider({
    
    if($('#popView .bx-list').hasClass('bx')){
        slider.reloadSlider();
    }else{
        slider = $('#popView .bx-list').bxSlider(slider_bxOption);
        $('#popView .bx-list').addClass('bx');
    }
    
    //버튼 위치
    bxBtn = $('#popView .bx-controls-direction');
    bximgW = $("#popView .bx-list li:first-child").find('img').width();
    bxBtn.css({'width' : bximgW+'px', 'margin-left' : (-(bximgW/2))+'px'});
    bxClose.css({'width' : bximgW+'px', 'margin-left' : (-(bximgW/2))+'px'});
    
    //버튼클릭 시 버튼 width조정
    $('.bx-prev, .bx-next').on('click', function(){
       bximg = 0, bximgW = 0;
        
        for( var i = 0 ; i < $("#popView .bx-list li").length ; i++ ){
            if( $("#popView .bx-list li:eq("+i+")").attr('aria-hidden') == 'false' ){
                bximg = $("#popView .bx-list li:eq("+i+")").find('img').width();
                bximgW = bximg;
            }
        }
        console.log(bximgW)
        
        bxBtn.css({'width' : bximgW+'px', 'margin-left' : (-(bximgW/2))+'px'});
        bxClose.css({'width' : bximgW+'px', 'margin-left' : (-(bximgW/2))+'px'});
    })
}

//폼체크
function formSubmit() {
	var fform = $("#fixed_inquiry");
	var chk_name = $("input[name='Name']");
	var chk_email = $("input[name='Email']");
	var chk_phone1 = $("input[name='Phone1']");
	var chk_phone2 = $("input[name='Phone2']");
	var chk_phone3 = $("input[name='Phone3']");
	var chk_message = $(".msg-box");

	if($.trim(chk_name.val()).length < 1) {
		alert('이름을 입력해주세요');
		chk_name.focus();
		layerOnoff('on');
		return false;
	}

	if($.trim(chk_email.val()).length <1 ) {
		alert('이메일을 입력해주세요');
		chk_email.focus();
		layerOnoff('on');
		return false;	
	} else {
		var mail_chk = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if(!mail_chk.test(chk_email.val())) {
			alert("잘못된 이메일 형식입니다.");  		
			chk_email.focus();
			layerOnoff('on');
			return false;
		}
	}

	if($.trim(chk_phone1.val()).length <1 ) {
		alert('휴대폰을 입력해주세요');		
		chk_phone1.focus();
		layerOnoff('on');
		return false;	
	}
	if($.trim(chk_phone2.val()).length <1 ) {
		alert('휴대폰을 입력해주세요');
		chk_phone2.focus();
		layerOnoff('on');
		return false;	
	}
	if($.trim(chk_phone3.val()).length <1 ) {
		alert('휴대폰을 입력해주세요');
		chk_phone3.focus();
		layerOnoff('on');
		return false;	
	}
	if($.trim(chk_message.val()).length <1 ) {
		alert('내용을 입력해주세요');
		layerOnoff('on');
		chk_message.focus();
		return false;	
	}
	$("#fixed_form").submit();
}

function layerOnoff(mode) {
	if(mode == "on") {
		$("#fixed_inquiry").animate({"opacity":"1"},300);
	} else {
		var chkCnt	= 0;
		$(".inquiry").each(function(){
			if($(this).is(":focus")) {
				chkCnt++;
			}
		});
	}
	if(chkCnt < 1) {
		$("#fixed_inquiry").animate({"opacity":"0.7"},200);
	}
}
