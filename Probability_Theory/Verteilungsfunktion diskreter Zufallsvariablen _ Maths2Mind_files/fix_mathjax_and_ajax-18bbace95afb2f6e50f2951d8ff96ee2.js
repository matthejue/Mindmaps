document.addEventListener("DOMContentLoaded", function(e) {
	if ('undefined' !== typeof MathJax) {
		var debounce = null;
	  jQuery(document).ajaxComplete(function () {
			clearTimeout(debounce);
			debounce = setTimeout(function() {
				MathJax.typesetPromise();
			}, 200);
	  });
	}
});
