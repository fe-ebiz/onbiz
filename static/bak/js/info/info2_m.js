$(function() {
	/*공통 셀렉트박스 기능 생성*/
	$("#contents .selectBox .s_btn, #container2 .selectBox .s_btn").on("click", function() {
		$(this).next().next().slideToggle('fast');
	});
	$("#contents .selectBox i, #container2 .selectBox i").on("click", function() {
		$(this).next().slideToggle('fast');
	});

	$(".category li input").on("click", function() {
		var thIdx = $(this).closest("ul").index();
		//console.log(thIdx);
		$("#container section").css("display", "none");
		$("#container section").eq(thIdx).css("display", "block");
	});

	/*업종선택 셀렉트박스*/
	$("#contents .category > ul > li").on("click", function() {
		var thIdx = $(this).index();
		//company2(thIdx);
		$(this).closest("ul").children().removeClass("on");
		$(this).addClass("on");
		$(this).closest("ul").find(".cate_inp + span").removeClass("on");
		$(this).find(".cate_inp + span").addClass("on");
		$("input[name='ctype']").prop("checked", false);
		$("input[name='ctype']").attr("checked", false);
		$(this).find("input").prop("checked", true);
		$(this).find("input").attr("checked", true);
		var isCheck = $(this).find("input").prop("checked");

		$("#section1, #section2").css("display", "none");
		$("#container > section").eq(thIdx).css("display", "block");
		$("#contents .st_wrap .selectBox ul").hide();
	});

	$("#contents .st_wrap .selectBox ul li").on("click",function(){
		var thVar = $(this).text();
		$("#contents .st_wrap .selectBox input").val(thVar);
		$("#contents .st_wrap .selectBox input").attr("type", "button");
		$("#service1").val(thVar);
		$(this).closest("ul").slideUp("fast");
	});

	$("#contents .st_wrap .selectBox ul li:last").on("click",function(){
		$("#service1").val("dr");
		$("#contents .st_wrap .selectBox input").val("");
		$("#contents .st_wrap .selectBox input").attr("type", "text");
		$("#contents .st_wrap .selectBox input").focus();
		$(this).closest("ul").slideUp("fast");
	});

	
	/*환불계좌 정보 셀렉트박스*/
	$("#contents .refund .selectBox ul li, #container2 .refund .selectBox ul li").on("click", function () {
		var thVar = $(this).text();
		//console.log(thVar);
		$(this).closest(".refund").find(".selectBox input").val(thVar);
		$(this).closest(".refund").find(".selectBox input").attr("type", "button");
		$(this).closest("ul").slideUp("fast");
	});
	$("#contents .refund .selectBox ul li:last, #container2 .refund .selectBox ul li:last").on("click", function () {
		$(this).closest(".refund").find(".selectBox input").val("");
		$(this).closest(".refund").find(".selectBox input").attr("type", "text");
		$(this).closest(".refund").find(".selectBox input").focus();
		$(this).closest("ul").slideUp("fast");
	});

	/*계약 신청인 정보 동일 체크박스*/
	/*정보입력창 체크박스 추가*/
	$("[id*=container] #mng + span, [id*=container] #les + span, #cork + span").on('click', function () {
		$(this).toggleClass("on");
		var isChecked = $(this).prev().prop("checked");
		console.log(isChecked);
		isChecked = !isChecked;
		console.log(isChecked);
		$(this).prev().prop("checked", isChecked);
	});
	$("[id*=container] #mng + span + label, [id*=container] #les + span + label, #cork + span + label").on('click', function () {
		$(this).prev().toggleClass("on");
	});
});


/*function company2(e) {
	if(e != 1) {		
		$("#section2 input").val("");
		$("#section1 input[name='cpcode']").attr("name", "pcode");
		$("#section1 input[name='caddr']").attr("name", "addr");
		$("#section1 input[name='caddr_sub']").attr("name", "addr_sub");
		$("#section2 input[name='pcode']").attr("name", "cpcode");
		$("#section2 input[name='addr']").attr("name", "caddr");
		$("#section2 input[name='addr_sub']").attr("name", "caddr_sub");
	} else {
		$("#section1 input").val("");
		$("#section1 input[name='pcode']").attr("name", "cpcode");
		$("#section1 input[name='addr']").attr("name", "caddr");
		$("#section1 input[name='addr_sub']").attr("name", "caddr_sub");
		$("#section2 input[name='cpcode']").attr("name", "pcode");
		$("#section2 input[name='caddr']").attr("name", "addr");
		$("#section2 input[name='caddr_sub']").attr("name", "addr_sub");
	}
}*/