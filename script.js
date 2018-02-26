$(document).ready(function () {
	// jQuery, find the hide ID and wait for the user to click its element (button).
	$("#hide").click(function () {
		// jQuery, when the user clicks the Hide button, find all p tags and hide them!
		$("p.coney").hide();
		$("p.brighton").show();
		$("h1.coney").hide();
		$("h1.brighton").show();
	});
	// jQuery, find the show ID and wait for the user to click its element (button).
	$("#show").click(function () {
		// jQuery, when the user clicks the Show button, reshow or keep showing all p tags!
		$("p.coney").show();
		$("h1.coney").show();
		$("p.brighton").hide();
		$("h1.brighton").hide();
	});
});