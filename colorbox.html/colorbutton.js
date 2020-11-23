$(document).ready(function() {
	//click the buttons once to activate the effect
	//click the buttonns twice to undo the effect

	$("#button1").click(function() {
		//fade out rows
		$("#first").fadeTo("slow", 0.2);
		$("#second").fadeTo("slow", 0.5);
		$("#third").fadeTo("slow", 0.9);
	});

	$("#button1").dblclick(function() {
		//fade in rows
		$("#first").fadeTo("fast", 1);
		$("#second").fadeTo("fast", 1);
		$("#third").fadeTo("fast", 1);
	});

	$("#button2").click(function() {
		//hide all warm colors
		$(".warm").fadeTo("fast", 0);
	});

	$("#button2").dblclick(function() {
		//show all warm colors
		$(".warm").fadeTo("fast", 1);
	});

	$("#button3").click(function() {
		//hide all cool colors
		$(".cool").fadeTo("fast", 0);
	});

	$("#button3").dblclick(function() {
		//show all cool colors
		$(".cool").fadeTo("fast", 1);
	});


	//slide down/up menu options
	$(".slider").click(function() {
		$(".container").slideToggle("slow");
	});

	//animate box once button clicked
	$(".animator").click(function() {
		var box = $(".box");
		box.animate({width: '40vw'}, "slow");
		box.animate({width: '85vw'}, "slow");
	});
});


//notes:
//classes use . (multiple elements)
//ids use # (one element)



	//leaving a page
	// $("something").mousedown(function() {
	// 	//message that pops up when you leave a page
	// 	alert("You're now leaving the main page.");
	// });