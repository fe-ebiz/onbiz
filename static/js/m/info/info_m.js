$(function() {
	$(".category li input").on("click", function() {
			var thIdx = $(this).closest("ul").index();
			//console.log(thIdx);
			$("#container section").css("display", "none");
			$("#container section").eq(thIdx).css("display", "block");
	});
});