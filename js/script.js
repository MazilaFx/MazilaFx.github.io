$(document).ready(function(){

	$(window).scroll(function(){
		if($(this).scrollTop() > 120){
			$('#arrow_up').fadeIn();
		}else{
		$('#arrow_up').fadeOut();
		}
	});
	$('#arrow_up').click(function(){
		$('body,html').animate({
			scrollTop: 0
		},700);
		return false;
	});
});


$(document).ready(function(){
	$('#photo').click(function(){
		var opt = $('#photo_1').attr('src', 'img/photography_1.jpg');
		var opt = $('#photo_2').attr('src', 'img/photography_2.jpg');
		var opt = $('#photo_3').attr('src', 'img/photography_3.jpg');
		var opt = $('#photo_4').attr('src', 'img/photography_4.jpg');
		var opt = $('#photo_5').attr('src', 'img/photography_5.jpg');
		var opt = $('#photo_6').attr('src', 'img/photography_6.jpg');
	});
});




$(document).ready(function(){
	$('#web_design').click(function(){
		var opt = $('#photo_1').attr('src', 'img/web_design_1.jpg');
		var opt = $('#photo_2').attr('src', 'img/web_design_2.jpg');
		var opt = $('#photo_3').attr('src', 'img/web_design_3.jpg');
		var opt = $('#photo_4').attr('src', 'img/web_design_4.jpg');
		var opt = $('#photo_5').attr('src', 'img/web_design_5.jpg');
		var opt = $('#photo_6').attr('src', 'img/web_design_6.jpg');
	});
});


$(document).ready(function(){
	$('#branding').click(function(){
		var opt = $('#photo_1').attr('src', 'img/branding_1.jpg');
		var opt = $('#photo_2').attr('src', 'img/branding_2.jpg');
		var opt = $('#photo_3').attr('src', 'img/branding_3.jpg');
		var opt = $('#photo_4').attr('src', 'img/branding_4.jpg');
		var opt = $('#photo_5').attr('src', 'img/branding_5.jpg');
		var opt = $('#photo_6').attr('src', 'img/branding_6.jpg');
	});
});




$(document).ready(function(){
	$('#mobile_app').click(function(){
		var opt = $('#photo_1').attr('src', 'img/mobile_app_1.jpg');
		var opt = $('#photo_2').attr('src', 'img/mobile_app_2.jpg');
		var opt = $('#photo_3').attr('src', 'img/mobile_app_3.jpg');
		var opt = $('#photo_4').attr('src', 'img/mobile_app_4.jpg');
		var opt = $('#photo_5').attr('src', 'img/mobile_app_5.jpg');
		var opt = $('#photo_6').attr('src', 'img/mobile_app_6.jpg');
	});
});








