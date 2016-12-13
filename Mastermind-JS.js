var colors = [
	"green",
	"blue",
	"red",
	"yellow",
	"cyan",
	"lime",
	"purple",
	"magenta",
	"orange"
];
var chosenColors = [];
var colorAmount = 6;
var dupes = false;

function startGame() {
	var i;
	for (i=0; i < colorAmount; i++) {
		chosenColors.push(colors[i]);
	}
	console.log(chosenColors);
}

function increaseColors() {
	if (colorAmount < 9) {
		colorAmount++;
	}
	document.getElementById('amountColors').innerHTML = colorAmount;
}

function decreaseColors() {
	if (colorAmount > 6) {
		colorAmount--;
	}
	document.getElementById('amountColors').innerHTML = colorAmount;
}