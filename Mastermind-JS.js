var colors = [
	"green",
	"blue",
	"red",
	"yellow",
	"cyan",
	"lime",
	"purple",
	"magenta",
	"orange",
	"pink"
];
var chosenColors = [];
var code = [];
var colorAmount = 6;
var dupes = false;

// all functions for options
function options() {
	console.log('Options');
	document.body.style.backgroundColor = colors[Math.floor(Math.random() * 10)];
	document.getElementById('buttonStart').style.display = "none";
	document.getElementById('buttonOptions').style.display = "none";
	document.getElementById('decreaseColors').style.display = "inline";
	document.getElementById('increaseColors').style.display = "inline";
	document.getElementById('amountColors').style.display = "inline";
	document.getElementById('dupeColors').style.display = "inline";
	document.getElementById('buttonBack').style.display = "inline";
}

function increaseColors() {
	if (colorAmount < 10) {
		colorAmount++;
	}
	document.getElementById('amountColors').innerHTML = colorAmount;
	console.log('color amount: ' + colorAmount)
	document.getElementById('decreaseColors').style.backgroundColor = "green";
	if (colorAmount == 10) {
		document.getElementById('increaseColors').style.backgroundColor = "red";
	} else {
		document.getElementById('increaseColors').style.backgroundColor = "green";
	}
}

function decreaseColors() {
	if (colorAmount > 6) {
		colorAmount--;
	}
	document.getElementById('amountColors').innerHTML = colorAmount;
	console.log('color amount: ' + colorAmount)
	document.getElementById('increaseColors').style.backgroundColor = "green";
	if (colorAmount == 6) {
		document.getElementById('decreaseColors').style.backgroundColor = "red";
	} else {
		document.getElementById('decreaseColors').style.backgroundColor = "green";
	}
}

function changeDupes() {
	if (dupes == false) {
		dupes = true;
		document.getElementById('dupeColors').innerHTML = dupes;
		console.log('duplicate colors: ' + dupes);
	} else {
		dupes = false;
		document.getElementById('dupeColors').innerHTML = dupes;
		console.log('duplicate colors: ' + dupes);
	}
}

function Back() {
	console.log('back');
	document.body.style.backgroundColor = "aqua";
	document.getElementById('buttonStart').style.display = "inline";
	document.getElementById('buttonOptions').style.display = "inline";
	document.getElementById('decreaseColors').style.display = "none";
	document.getElementById('increaseColors').style.display = "none";
	document.getElementById('amountColors').style.display = "none";
	document.getElementById('dupeColors').style.display = "none";
	document.getElementById('buttonBack').style.display = "none";
}

// all functions for the game
function startGame() {
	var i;
	for (i=0; i < colorAmount; i++) {
		chosenColors.push(colors[i]);
	}
	console.log(chosenColors);
	document.body.style.backgroundColor = "navy";
	document.getElementById('buttonStart').style.display = "none";
	document.getElementById('buttonOptions').style.display = "none";
	document.getElementById('buttonExit').style.display = "inline";
	document.getElementById('Circles').style.display = "inline";
	document.getElementById('test').style.display = "inline"
}

function test() {
	var c = document.getElementById('Circles');
	var ctx = c.getContext("2d");
	var i;
	var l;
	for (i=0; i == (code.length == 4);) {
		var c = Math.floor(Math.random() * colorAmount);
		console.log(chosenColors[c]);
		if (dupes == true) {
			console.log(c);
			code.push(chosenColors[c]);
		} else {
			for (l=0; l<4; l++) {
				if (code[l] == chosenColors[c]) {
					console.log("dupe");
					break;
				} else {
					console.log(c);
					code.push(chosenColors[c]);
					break;
				}
			}
		}
	}
	console.log(code);
	for (i=0; i < 4; i++) {
		ctx.beginPath();
		ctx.arc(i*100 + 50,50,50,0,2*Math.PI);
		ctx.fillStyle=code[i];
		ctx.fill();
	}
}

function exitGame() {
	//ctx.clearRect(0,0,c.width,c.height);
	document.body.style.backgroundColor = "aqua";
	document.getElementById('buttonStart').style.display = "inline";
	document.getElementById('buttonOptions').style.display = "inline";
	document.getElementById('buttonExit').style.display = "none";
	document.getElementById('Circles').style.display = "none";
	code = [];
	chosenColors = [];
}