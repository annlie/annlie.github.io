let total = 1;

//change cart preview to show the correct amount as soon as page loads
$(document).ready(function() {
	console.log("page loaded");
	$("#cartName").html("cart (" + total + ")");
});

//add an item to cart preview by updating number
//once item is added to cart, can go to check out
//addCart function mimics the cart page by hiding all the DOM elements
//	related to the item and calls the addItem method instead
function addCart(itemName, price) {
	console.log("added to cart");
	total += 1;
	document.getElementById("cartName").innerHTML = "cart (" + total + ")";

	let itemDiv = document.getElementById("theItem");
	let title = document.getElementById("theTitle");

	if(window.confirm("Item added to cart. Would you like to check out?")) {
		itemDiv.style.display = "none";
		title.style.display = "none";
		addItem(itemName, price);
	}
};

//remove an item from cart preview by updating number
function removeCart() {
	console.log("removing from cart");
	total -= 1;
	$("#cartName").html("cart (" + total + ")");

	let itemDiv = document.getElementById("itemStart");
	itemDiv.style.display = "none";
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

function addItem(itemName, price) {
	//updating cart number
	document.getElementById("cartName").innerHTML = "cart (" + total + ")";

	//create new DOM elements and set their correct text values
	let last = document.getElementById("itemStart");

	let holder = document.createElement("div");
	let item = document.createElement("div");

	let p1 = document.createElement("p");
	let p1text = document.createTextNode(arguments[0]);

	let p2 = document.createElement("p");
	let p2text = document.createTextNode(arguments[1]);

	let p3 = document.createElement("p");
	let p3text = document.createTextNode("qty: 1");

	let p4 = document.createElement("p");

	let button = document.createElement("button");
	let buttonText = document.createTextNode("remove");

	//join new DOM elements together
	p1.appendChild(p1text);
	p2.appendChild(p2text);
	p3.appendChild(p3text);
	button.appendChild(buttonText);

	last.appendChild(holder);
	holder.appendChild(item);
	item.appendChild(p1);
	p1.appendChild(p2);
	p2.appendChild(p3);
	p3.appendChild(p4);
	p4.appendChild(button);

	//style the new DOM elements
	holder.style.marginTop = "10vh";
	holder.style.display = "flex";
	holder.style.flexFlow = "row";
	holder.style.justifyContent = "center";
	holder.style.textAlign = "center";
	holder.style.marginLeft = "12vw";
	holder.style.marginRight = "12vw";
	holder.style.paddingBottom = "6vh";
	holder.style.borderStyle = "solid";
	holder.style.borderWidth = "1px";
	holder.style.marginTop = "6vh";
	holder.style.flex = "1 100%";

	item.style.paddingTop = "4vh";

	button.style.border = "none";
	button.style.color = "white";
	button.style.backgroundColor = "black";
	button.style.textAlign = "center";
	button.style.textDecoration = "none";
	button.style.fontSize = "13px";
	button.style.padding = "5px 8px";
	button.style.fontFamily = "futura-pt, sans-serif";
	button.style.fontWeight = "400";
	button.style.fontStyle = "normal";
	button.style.marginTop = "2vh";

	p1.style.fontWeight = "bold";
	p3.style.fontSize = "12px";

	//handling onclick for created button
	button.onclick = function() { removeCart(); };
}

//	how the DOM elements would look if written in HTML:
// <div class="item" style="margin-top: 10vh"> - holder
	// <div> - item
	// 	<p><b>embroidered tote</b></p> - p1
	// 	<p style="line-height: .1">$25 usd</p> - p2
	// 	<p style="font-size: 12px">qty: 1</p> - p3
	//	<p> - p4
	// 		<button class="button" type="button" onclick="removeCart()">remove</button>
	//	</p>
	// </div>
// </div>


// id - #
// class - .