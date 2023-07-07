$(document).ready(function () {
	$(".hamburger-icon").click(function(){
		$("body").toggleClass("overflow-hide");
		$(".hamburger-icon").toggleClass("close-menu");
		$("#mainNavbar").toggleClass("show");
	});

	
	 $(".dropmenu-item").on('click', function (e) {
     	$(this).toggleClass("visible").siblings().removeClass("visible");
    });

});