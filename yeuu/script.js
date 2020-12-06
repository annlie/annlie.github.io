let userCart = [];
let total = 0;

//change cart preview to show the correct amount as soon as page loads
$(document).ready(function() {
	console.log("yeeeeeep");
	$("#cartName").html("cart (" + total + ")");

});

//add an item to cart preview by updating number
function addCart() {
	console.log("yes");
	total += 1;
	document.getElementById("cartName").innerHTML = "cart (" + total + ")";
};



// id - #
// class - .