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
}

function decreaseColors() {
	if (colorAmount > 6) {
		colorAmount--;
	}
	document.getElementById('amountColors').innerHTML = colorAmount;
	console.log('color amount: ' + colorAmount)
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
}

function test() {
	var i;
	for (i=0; i < 4; i++) {
		var c = Math.floor(Math.random() * colorAmount);
		console.log(c);
		code.push(chosenColors[c]);
	}
	console.log(code);
}

function exitGame() {
	document.body.style.backgroundColor = "aqua";
	document.getElementById('buttonStart').style.display = "inline";
	document.getElementById('buttonOptions').style.display = "inline";
	document.getElementById('buttonExit').style.display = "none";
	code = [];
	chosenColors = [];
}