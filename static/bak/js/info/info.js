$(document).ready(function () {
	/*셀렉트박스 기능 생성*/
	$("#contents .selectBox .s_btn").on("click", function () {
		$(this).next().next().slideToggle('fast');
	});
	$("#contents .selectBox i").on("click", function () {
		$(this).next().slideToggle('fast');
	});
	/*업종선택 셀렉트박스*/
	$("#contents .category > ul > li").on("click", function () {
		var thIdx = $(this).index();
		$(this).closest("ul").children().removeClass("on");
		$(this).addClass("on");
		$(this).closest("ul").find(".cate_inp + span").removeClass("on");
		$(this).find(".cate_inp + span").addClass("on");
		$(this).find("input").prop("checked", true);
		var isCheck = $(this).find("input").prop("checked");
		console.log(isCheck);
		$("#container > section").css("display", "none");
		$("#container > section").eq(thIdx).css("display", "block");
		$("#contents .selectBox ul").hide();
	});
	$("#contents .st_wrap .selectBox ul li").on("click", function () {
		var thVar = $(this).text();
		//console.log(thVar);
		$("#contents .st_wrap .selectBox input").val(thVar);
		$("#contents .st_wrap .selectBox input").attr("type", "button");
		$(this).closest("ul").slideUp("fast");
	});
	$("#contents .st_wrap .selectBox ul li:last").on("click", function () {
		$("#contents .st_wrap .selectBox input").val("");
		$("#contents .st_wrap .selectBox input").attr("type", "text");
		$("#contents .st_wrap .selectBox input").focus();
		$(this).closest("ul").slideUp("fast");
	});
	/*환불계좌 정보 셀렉트박스*/
	$("#contents .refund .selectBox ul li").on("click", function () {
		var thVar = $(this).text();
		//console.log(thVar);
		$("#contents .refund .selectBox input").val(thVar);
		$("#contents .refund .selectBox input").attr("type", "button");
		$(this).closest("ul").slideUp("fast");
	});
	$("#contents .refund .selectBox ul li:last").on("click", function () {
		$("#contents .refund .selectBox input").val("");
		$("#contents .refund .selectBox input").attr("type", "text");
		$("#contents .refund .selectBox input").focus();
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