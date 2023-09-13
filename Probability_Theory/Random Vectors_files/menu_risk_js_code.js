$(window).load(function(){
/*
	$('#printButton').click(function(e) {
		print();
		window.close();
		return false;
	});
*/

//Jquery code for the mobile menu toggle function
    $('#mobile_menu ul ul').hide();
    $('#mobile_menu ul li').click(function(e) {  // inserted callback param "e" meaning "event"

        $(this).children('.subLink').slideToggle();
    });
    $('#mobile_menu li:has(ul)').addClass('myLink');
    $('#mobile_menu ul ul').addClass('subLink');
	
	
//Jquery code for the Chapters toggle function

	
	$.fn.scrollView = function () {
	  return this.each(function () {
		$('#menu_risk').animate({
		  scrollTop: ($(this).offset().top - $(menu_risk).offset().top - 215)
		}, 1000);
	  });
	}
	
	$('#menuButton').click(function(ev) {
		$('#hiddenMenu').toggle();
	});
	$('#menu_risk li').click(function(ev) {
		$(this).find('>ul').slideToggle().end().siblings().find('ul').slideUp();
		ev.stopPropagation();
	});
	
	var sPath = window.location.pathname;
	var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
	$('#menu_risk li').each(function(i, val){
		var fullPath = $('a', val).attr('href');
		if(typeof fullPath != 'undefined'){
			var menuItem = fullPath.substring(fullPath.lastIndexOf('/') + 1);
      			if(menuItem == sPage) {
        			$(val).addClass('active');
					$(val).parent().show();
					$(val).parent().parent().show();

					if($(val).parent().parent().parent().is("ul")){
						$(val).parent().parent().parent().show();
					}
				if($.contains($(val), $(val).parent())){
					$(val).parent().parent().parent().scrollView();
				} else {
					$(val).scrollView();
				}

			}	
		}					
    });
});
