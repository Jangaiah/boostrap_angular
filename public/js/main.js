$(document).ready(function(){
	var names=["First","Second","Third","Fourth","Fifth","Sixth","Seven","Eight"];
	$('#exmCarousel').on('slid.bs.carousel', function (e) {
	   	//console.log('slide event!');
	   	$("#txtId").html(names[$(this).find(".carousel-indicators").find(".active").attr("data-slide-to")]);
	});
});