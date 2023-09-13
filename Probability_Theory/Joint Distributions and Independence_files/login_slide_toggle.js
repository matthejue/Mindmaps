$(document).ready(function() {
	$( ".login_container" ).click(function() {
		$( ".login_extended" ).slideToggle(500);
	});
});

$(document).ready(function() {
	$( ".instructor_container" ).click(function() {
		$( ".instructor_extended" ).slideToggle(500);
	});
});


$(document).ready(function() {
	$( ".toggle_chapters" ).click(function() {
		$( "#menu" ).slideToggle("slow", function() {
			// Animation complete.
		});
		$( "#mobile_menu" ).hide(200);
	});
});


$(document).ready(function() {
	$( ".toggle_chapters" ).click(function() {
		$( "#menu_risk" ).slideToggle("slow", function() {
			// Animation complete.
		});
		$( "#mobile_menu" ).hide(200);
	});
});



$(document).ready(function() {
	$( ".toggle_menu" ).click(function() {
		$( "#mobile_menu" ).slideToggle("slow", function() {
			// Animation complete.
		});
		$( "#menu" ).hide(200);
		$( "#menu_risk" ).hide(200);
	});
});

MathJax.Hub.Config({
    tex2jax: {
        inlineMath: [['$','$'], ['\\(','\\)']]
    },
    "HTML-CSS": { linebreaks: { automatic: true } },
         SVG: { linebreaks: { automatic: true } }
  });