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

//display messages on contact page after form submitted
function messageSend() {
	let nameCheck = document.getElementById("userName").value;
	let emailCheck = document.getElementById("userEmail").value;
	let messageCheck = document.getElementById("userMessage").value;

	//check to see if form has been submitted "correctly"
	//all three sections must be filled out for form to be sent
	if (nameCheck && emailCheck && messageCheck) {
		//fill in name after retrieving the data from the form
		document.getElementById("name").innerHTML = "thank you "+document.getElementById("userName").value+" for your message";
	} else {
		//display an error message if something wasn't filled out
		document.getElementById("error").innerHTML = "poo error: message unable to be sent because of missing information";
	}

	// document.getElementById("error").innerHTML = "error: message unable to be sent because of missing information";
	// document.getElementById("name").innerHTML = "thank you "+document.getElementById("userName").value+" for your message";
	

	//change styling for contact form and message
	document.getElementById("contact").style.display = "none";
	document.getElementById("sent").style.visibility = "visible";
	document.getElementById("sent").style.marginTop = "10vh";
	document.getElementById("sent").style.marginBottom = "57vh";
}



// id - #
// class - .