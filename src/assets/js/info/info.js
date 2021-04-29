$(document).ready(function() {
  /*공통 셀렉트박스 기능 생성*/
  $("#contents .selectBox .s_btn").on("click", function() {
    $(this).next().next().slideToggle('fast');
  });
  $("#contents .selectBox i").on("click", function() {
    $(this).next().slideToggle('fast');
  });
  /*업종선택 셀렉트박스*/
  $("#contents .category > ul > li").on("click", function() {
    var thIdx = $(this).index();
	onbiz.company(thIdx);
    $(this).closest("ul").children().removeClass("on");
    $(this).addClass("on");
    $(this).closest("ul").find(".cate_inp + span").removeClass("on");
    $(this).find(".cate_inp + span").addClass("on");
    $(this).find("input").prop("checked", true);
    var isCheck = $(this).find("input").prop("checked");
    
    $("#section1, #section2").css("display", "none");
    $("#container > section").eq(thIdx).css("display", "block");
    $("#contents .st_wrap .selectBox ul").hide();
  });
  /*업종선택 및 환불계좌 선택*/
  $.each($("#contents .st_wrap .selectBox ul li"), function(idx, item) {
    $(this).click(function() {
      var thVar = $(this).text();
      //console.log(thVar);
      if (thVar == '직접입력') {
		$("#service1").val(thVar);
        $(this).closest(".selectBox").find("input").val("");
        $(this).closest(".selectBox").find("input").attr("type", "text");
        $(this).closest(".selectBox").find("input").focus();
      } else {
		$("#service1").val(thVar);
        $(this).closest(".selectBox").find("input").val(thVar);
        $(this).closest(".selectBox").find("input").attr("type", "button");
      }
      $(this).closest("ul").slideUp("fast");
    });
  });
  $.each($("#contents .refund .selectBox ul li"), function(idx, item) {
    $(this).click(function() {
      var thVar = $(this).text();
      //console.log(thVar);
      if (thVar == '직접입력') {
        $(this).closest(".selectBox").find("input").val("");
        $(this).closest(".selectBox").find("input").attr("type", "text");
        $(this).closest(".selectBox").find("input").focus();
      } else {
		$("#bank1").val(thVar);
        $(this).closest(".selectBox").find("input").val(thVar);
        $(this).closest(".selectBox").find("input").attr("type", "button");
      }
      $(this).closest("ul").slideUp("fast");
    });
  });
  /*계약 신청인 정보 동일 체크박스*/
  /*정보입력창 체크박스 추가*/
  $("#contents .manager #mng + span, #contents .manager #les + span, #cork + span").on('click', function() {
    $(this).toggleClass("on");
    var isChecked = $(this).prev().prop("checked");
    isChecked = !isChecked;
    $(this).prev().prop("checked", isChecked);
  });
  $("#contents .manager #mng + span + label, #contents .manager #les + span + label, #cork + span + label").on('click', function() {
    $(this).prev().toggleClass("on");
  });
  
});