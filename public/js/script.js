$(function() {
	$(window).scroll(function() {
	
		var offset = $(window).scrollTop();
	 	console.log($(window).scrollTop());

	 	var height = $(".media-header").height();

	 	var opacity = offset/height;

	 	var margin = offset/-2;

	 	console.log(opacity);

	 	$(".text-header").css("background","rgba(0,0,0,"+ (opacity-0.1) +")");
	 	$(".text-header img").css({
    			"-webkit-transform":"translateY("+margin+")",
    			"-ms-transform":"translateY(margin)",
    			"transform":"translateY("+margin+"px)"
 		 });
	 	$(".text-header img").css("opacity", (1-opacity) );
	});

	$(".menu-btn").on("click",function(){
		$("nav").toggleClass("display");
	});
});