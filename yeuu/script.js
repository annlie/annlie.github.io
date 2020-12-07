let userCart = [];
let total = 0;

//change cart preview to show the correct amount as soon as page loads
$(document).ready(function() {
	console.log("page loaded");
	$("#cartName").html("cart (" + total + ")");
});

//add an item to cart preview by updating number
function addCart() {
	console.log("added to cart");
	total += 1;
	document.getElementById("cartName").innerHTML = "cart (" + total + ")";
};

//remove an item from cart preview by updating number
function removeCart() {
	console.log("removing from cart");
	total -= 1;
	$("#cartName").html("cart (" + total + ")");
}

//display messages on contact page after form submitted
function messageSend() {
	console.log("message sent");
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
		document.getElementById("error").innerHTML = "error: message unable to be sent because of missing information";
	}	

	//change styling for contact form and message
	document.getElementById("contact").style.display = "none";
	document.getElementById("sent").style.visibility = "visible";
	document.getElementById("sent").style.marginTop = "10vh";
	document.getElementById("sent").style.marginBottom = "57vh";
}

function addItemBAD() {
	//im a poopoo function that doesnt work :))))
	let last = document.getElementById("nav");

	let holder = document.createElement("div");
	let item = document.createElement("div");

	let p1 = document.createElement("p");
	let p1text = document.createTextNode("embroidered tote");

	let p2 = document.createElement("p");
	let p2text = document.createTextNode("$25 usd");

	let p3 = document.createElement("p");
	let p3text = document.createTextNode("qty: 1");

	let button = document.createElement("button");

	p1.appendChild(p1text);
	p2.appendChild(p2text);
	p3.appendChild(p3text);

	last.appendChild(holder);
	holder.appendChild(p1);
	p1.appendChild(p2);
	p2.appendChild(p3);
	p3.appendChild(button);
}


// <div class="nav">
// <div class="item" style="margin-top: 10vh">
	// <div>
	// 	<p><b>embroidered tote</b></p>
	// 	<p style="line-height: .1">$25 usd</p>
	// 	<p style="font-size: 12px">qty: 1</p>
	// 	<button class="button" type="button" onclick="removeCart()">remove</button>
	// </div>
// </div>


// id - #
// class - .