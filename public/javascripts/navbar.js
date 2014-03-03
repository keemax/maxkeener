function swapGithub() {
	$("#github").hover(function() {
		$(this).css("background-color", "rgb(220, 220, 220)");
		$(this).find(".light").hide();
		$(this).find(".dark").show();
	}, function() {
		$(this).css("background-color", "rgb(20, 20, 20)");
		$(this).find(".dark").hide();
		$(this).find(".light").show();
	});
}

$(document).ready(function() {
	swapGithub();
})	