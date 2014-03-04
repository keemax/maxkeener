function dynamicResize() {
	$(".section").each(function() {
		var height = $(this).width() / 1.5;
		$(this).height(height - 5);
	});
	$(".center-tile").each(function() {
		$(this).textfill({maxFontPixels: 140});
	});
}

$(document).ready(function() {
	dynamicResize();
	$(window).resize(dynamicResize);
});