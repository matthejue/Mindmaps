$(window).load(function(){
	$('.solvedprob li').click(function(ev) {
		$(this).find('>ul').slideToggle().end().siblings().find('ul').slideUp();
		ev.stopPropagation();
	});
});