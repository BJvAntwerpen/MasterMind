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
var code = [];
var playCode = [];
var colorAmount = 8;
var dupes = false;
var select = 0;
var triesLeft = 11;

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
	document.body.style.backgroundColor = "maroon";
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
	var c = document.getElementById('Canvas');
	var ctx = c.getContext("2d");
	var i;
	var button = document.getElementsByTagName('button');
	for (i=8; i < (colorAmount + 8); i++) {
		button[i].style.display = "inline";
	}
	document.body.style.backgroundColor = "navy";
	document.getElementById('buttonStart').style.display = "none";
	document.getElementById('buttonOptions').style.display = "none";
	document.getElementById('buttonExit').style.display = "inline";
	document.getElementById('Canvas').style.display = "inline";
	document.getElementById('buttonPlay').style.display = "inline";
	document.getElementById('testCodeGen').style.display = "inline";
	document.getElementById('testHints').style.display = "inline";
	ctx.beginPath();
	ctx.moveTo(42,561);
	ctx.lineTo(68,561);
	ctx.lineTo(56,549);
	ctx.moveTo(68,561);
	ctx.lineTo(56,573);
	ctx.strokeStyle='cyan';
	ctx.stroke();
	select = 0;
}

function spacing() {
	var c = document.getElementById('Canvas');
	var ctx = c.getContext("2d");
	var h;
	var v;
	ctx.strokeStyle='black';
	for (v=0;v<12;v++) {
		ctx.beginPath();
		ctx.moveTo(0, v*40 + 100);
		ctx.lineTo(480, v*40 + 100);
		ctx.stroke();
	}
	for (h=0;h<5;h++) {
		ctx.beginPath();
		ctx.moveTo(h*100+40, 0);
		ctx.lineTo(h*100+40, 580);
		ctx.stroke();
	}
}

function testCode() {
	var cr = document.getElementById('Canvas');
	var ctx = cr.getContext("2d");
	var i;
	var l;
	var c;
	if (dupes == true) {
		for (i=0; i<4; i++) {
			c = Math.floor(Math.random() * colorAmount);
			console.log(c);
			code.push(c);
		}
	} else {
		for (i=0; i == (code.length == 4);) {
			c = Math.floor(Math.random() * colorAmount);
			console.log("number =" + c)
			if (code[0] != c && code[1] != c && code[2] != c && code[3] != c) {
				console.log(c);
				code.push(c);
			} else {
				console.log("dupe: " + c)
			}
		}
	}
	console.log(code);
	for (i=0; i < 4; i++) {
		code.splice(i, 1, colors[code[i]]);
		ctx.beginPath();
		ctx.arc(i*100 + 90,50,50,0,2*Math.PI);
		ctx.fillStyle=code[i];
		ctx.fill();
	}
}

function testHints() {
	var c = document.getElementById('Canvas');
	var ctx = c.getContext("2d");
	var h;
	var v;
	var r;
	for (r=0; r<2; r++) {
		for (h=0; h<2; h++) {
			for (v=0; v<24; v++) {
				ctx.beginPath();
				ctx.arc(r*440 + h*20 + 10, v*20 + 110, 10, 0, 2*Math.PI);
				ctx.fillStyle="red";
				ctx.fill();
			}
		}
	}
}

function exitGame() {
	var c = document.getElementById('Canvas');
	var ctx = c.getContext("2d");
	ctx.clearRect(0,0,c.width,c.height);
	var button = document.getElementsByTagName('button');
	for (i=8; i < (colorAmount + 8); i++) {
		button[i].style.display = "none";
	}
	document.body.style.backgroundColor = "maroon";
	document.getElementById('buttonStart').style.display = "inline";
	document.getElementById('buttonOptions').style.display = "inline";
	document.getElementById('buttonExit').style.display = "none";
	document.getElementById('Canvas').style.display = "none";
	document.getElementById('buttonPlay').style.display = "none";
	document.getElementById('testCodeGen').style.display = "none";
	document.getElementById('testHints').style.display = "none";
	document.getElementById('color1').style.display = "none";
	code = [];
	playCode = [];
}

function moveLR(event) {
	var c = document.getElementById('Canvas');
	var ctx = c.getContext("2d");
	var arrowKey = event.key;
	if (arrowKey == 'ArrowLeft' || arrowKey == 'ArrowRight') {
		ctx.clearRect(42+select*100,548,27,26);
	}
	if (arrowKey == 'ArrowLeft') {
		console.log('pressed left');
		if (select > 0) {
			select -= 1;
		}
	} else if (arrowKey == 'ArrowRight') {
		console.log('pressed right');
		if (select < 3) {
			select += 1;
		}
	}
	if (arrowKey == 'ArrowLeft' || arrowKey == 'ArrowRight') {
	ctx.beginPath();
	ctx.moveTo(42+select*100,561);
	ctx.lineTo(68+select*100,561);
	ctx.lineTo(56+select*100,549);
	ctx.moveTo(68+select*100,561);
	ctx.lineTo(56+select*100,573);
	ctx.strokeStyle='cyan';
	ctx.stroke();
}
}

function addColor(color) {
	var c = document.getElementById('Canvas');
	var ctx = c.getContext("2d");
	playCode[select] = color;
	console.log(color);
	ctx.beginPath();
	ctx.arc(select*100 + 90, triesLeft*40 +120, 20, 0, 2*Math.PI);
	ctx.fillStyle=color;
	ctx.fill();
}

function playColors() {
	if (playCode.length != 4) {
		console.log("plz select 4 colors!");
	} else {
		console.log(playCode);
		playCode = [];
	}
}

/*
notes
http://www.w3schools.com/jsref/event_key_key.asp
http://www.w3schools.com/TAgs/ref_canvas.asp

code in progress
Func:playColors {
	if (playCode.length != 4) {
		console.log("plz select 4 colors!");
	} else {
		console.log(playCode);
		playCode = [];
	}
}

new line/-1 triesLeft
draw arrow
hints
left white,right red

*/