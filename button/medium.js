let theBody = document.querySelector('body');
// console.log(theBody);
let theButton = document.querySelector("button");
let theTxt = document.querySelector('h2');
//
// triggering an event with a callback function
theButton.addEventListener('click', mouseClick);

function mouseClick(){
	console.log("screen clicked");
	theBody.style.backgroundColor = "#96CDCD";
	theBody.style.color = "#76eec6";
	document.querySelector('h2').textContent = "yay";
}

// triggering an event with ES6 arrow notation:
document.addEventListener('keydown', theEvent => {
	if (theEvent.keyCode === 13){
		theTxt.textContent = "you pressed enter";
	}
})

// common ways of triggering a function you'll often see online
document.addEventListener('key',function() {
	console.log("you pressed any key!")
})


// some p5.js fun....
// global variables are great for browser debugging
var theCanvas;
var theCircle;
//
function setup() {
	console.log("p5!");
	theCanvas = createCanvas(500,500);
	background(118,238,198)
}


function keyPressed() {
 	console.log("p5 key pressed!");
 	fill(234,245,245,127);
 	noStroke();
 	//theCircle = ellipse(random(10,300),100,10,10);
 	for (let i=0; i < 10; i++) {
 		ellipse(random(10,500),random(100,500),20,80);
 		rotate(PI/5);
 	}
}