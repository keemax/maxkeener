function swapGithub() {
	$("#github").hover(function() {
		$(this).find(".light").hide();
		$(this).find(".dark").show();
	}, function() {
		$(this).find(".dark").hide();
		$(this).find(".light").show();
	});
}

$(document).ready(function() {
	swapGithub();
})	