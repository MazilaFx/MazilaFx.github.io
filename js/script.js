$(document).ready(function(){

	$(window).scroll(function(){
		if($(this).scrollTop() > 120){
			$('#arrow_up').fadeIn();
			$('#arrow_up').css('display', 'flex');
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


(function (jQuery) {
 jQuery.fn.lightTabs = function (options) {
  var createTabs = function () {
   var tabs = this;
   var i = 0;
   showPage = function (i,tabs) {         
     $(tabs).children("div").children("div").hide();
     $(tabs).children("div").children("div").eq(i).fadeIn("900");
     $(tabs).children("ul").children("li").removeClass("active-tab");
     $(tabs).children("ul").children("li").eq(i).addClass("active-tab");
   }
   showPage(0,tabs);
 	
  jQuery(tabs).children("ul").children("li").each(function (index, element) {
     $(element).attr("data-page", i);
     i++;
  });
  jQuery(tabs).children("ul").children("li").click(function () {
        var tabs1 = $(this).parent().parent();
        showPage(parseInt($(this).attr("data-page")),tabs1);
   });
 };
 return this.each(createTabs);
};
})(jQuery);
  
 jQuery(".tabs").lightTabs(); 
 