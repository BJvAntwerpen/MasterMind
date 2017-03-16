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
var select = 0;
var triesLeft = 11;
var optionsStyle = {
	"buttonStart": "none",
	"buttonOptions": "none",
	"explanation": "none",
	"title": "none",
	"decreaseColors": "inline",
	"increaseColors": "inline",
	"amountColors": "inline",
	"infoAmountColors": "inline",
	"buttonBack": "inline"
};
var menuStyle = {
	"buttonStart": "inline",
	"buttonOptions": "inline",
	"explanation": "block",
	"title": "inline",
	"decreaseColors": "none",
	"increaseColors": "none",
	"amountColors": "none",
	"infoAmountColors": "none",
	"buttonBack": "none"
};

function setDisplayStyle(styles) {
	for (var style in styles) {
		document.getElementById(style).style.display = styles[style];
	}
}

// all functions for options
function options() {
	console.log('Options');
	document.body.style.backgroundColor = colors[Math.floor(Math.random() * 10)];
	setDisplayStyle(optionsStyle);
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

function Back() {
	console.log('back');
	document.body.style.backgroundColor = "maroon";
	setDisplayStyle(menuStyle);
}

// all functions for the game
function startGame() {
	var c = document.getElementById('Canvas');
	var ctx = c.getContext("2d");
	var i;
	var button = document.getElementsByTagName('button');
	for (i=5; i < (colorAmount + 5); i++) {
		button[i].style.display = "inline";
	}
	document.body.style.backgroundColor = "navy";
	document.getElementById('buttonStart').style.display = "none";
	document.getElementById('buttonOptions').style.display = "none";
	document.getElementById('explanation').style.display = "none";
	document.getElementById('title').style.display = "none";
	document.getElementById('buttonExit').style.display = "inline";
	document.getElementById('Canvas').style.display = "inline";
	document.getElementById('buttonPlay').style.display = "inline";
	document.getElementById('inGameInfo').style.display = "inline";
	select = 0;
}

function HUD() {
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
	ctx.beginPath();
	ctx.moveTo(42,561);
	ctx.lineTo(68,561);
	ctx.lineTo(56,549);
	ctx.moveTo(68,561);
	ctx.lineTo(56,573);
	ctx.strokeStyle='cyan';
	ctx.stroke();
	ctx.fillStyle='black';
	ctx.fillRect(0,0,40,580);
	ctx.fillRect(440,0,40,580);
}

function genCode() {
	var i;
	var c;
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
	for (i=0; i < 4; i++) {
		code.splice(i, 1, colors[code[i]]);
	}
	console.log(code);
}

function viewCode() {
	var cr = document.getElementById('Canvas');
	var ctx = cr.getContext("2d");
	var i;
	for (i=0; i < 4; i++) {
		ctx.beginPath();
		ctx.arc(i*100 + 90,50,50,0,2*Math.PI);
		ctx.fillStyle=code[i];
		ctx.fill();
	}
}

function exitGame() {
	var c = document.getElementById('Canvas');
	var ctx = c.getContext("2d");
	ctx.clearRect(0,0,c.width,c.height);
	var button = document.getElementsByTagName('button');
	for (i=5; i < (colorAmount + 5); i++) {
		button[i].style.display = "none";
	}
	document.body.style.backgroundColor = "maroon";
	document.getElementById('buttonStart').style.display = "inline";
	document.getElementById('buttonOptions').style.display = "inline";
	document.getElementById('explanation').style.display = "block";
	document.getElementById('title').style.display = "inline";
	document.getElementById('buttonExit').style.display = "none";
	document.getElementById('Canvas').style.display = "none";
	document.getElementById('buttonPlay').style.display = "none";
	document.getElementById('color1').style.display = "none";
	document.getElementById('inGameInfo').style.display = "none";
	document.getElementById('inGameInfo').innerHTML = "";
	code = [];
	playCode = [];
	triesLeft = 11;
}

function moveLR(event) {
	var c = document.getElementById('Canvas');
	var ctx = c.getContext("2d");
	var inputKey = event.key;
	if (inputKey == 'ArrowLeft' || inputKey == 'ArrowRight') {
		ctx.clearRect(42+select*100,triesLeft*40+108,27,26);
	}
	if (inputKey == 'ArrowLeft') {
		console.log('pressed left');
		if (select > 0) {
			select -= 1;
		}
	} else if (inputKey == 'ArrowRight') {
		console.log('pressed right');
		if (select < 3) {
			select += 1;
		}
	}
	if (inputKey == 'ArrowLeft' || inputKey == 'ArrowRight') {
		ctx.beginPath();
		ctx.moveTo(42+select*100,triesLeft*40+121);
		ctx.lineTo(68+select*100,triesLeft*40+121);
		ctx.lineTo(56+select*100,triesLeft*40+109);
		ctx.moveTo(68+select*100,triesLeft*40+121);
		ctx.lineTo(56+select*100,triesLeft*40+133);
		ctx.strokeStyle='cyan';
		ctx.stroke();
	}
	if (inputKey == 'Enter') {
		checkHints();
	} else if (inputKey == '0') {
		addColor('green');
	} else if (inputKey == '1') {
		addColor('blue');
	} else if (inputKey == '2') {
		addColor('red');
	} else if (inputKey == '3') {
		addColor('yellow');
	} else if (inputKey == '4') {
		addColor('cyan');
	} else if (inputKey == '5') {
		addColor('lime');
	} else if (inputKey == '6' && colorAmount > 6) {
		addColor('purple');
	} else if (inputKey == '7' && colorAmount > 7) {
		addColor('magenta');
	} else if (inputKey == '8' && colorAmount > 8) {
		addColor('orange');
	} else if (inputKey == '9' && colorAmount > 9) {
		addColor('pink');
	}
}

function selectPosition(e) {
	var c = document.getElementById('Canvas');
	var ctx = c.getContext("2d");
	posX = e.clientX;
	if (posX <= 668) {
		ctx.clearRect(42+select*100,triesLeft*40+108,27,26);
		select = 0
		ctx.beginPath();
		ctx.moveTo(42+select*100,triesLeft*40+121);
		ctx.lineTo(68+select*100,triesLeft*40+121);
		ctx.lineTo(56+select*100,triesLeft*40+109);
		ctx.moveTo(68+select*100,triesLeft*40+121);
		ctx.lineTo(56+select*100,triesLeft*40+133);
		ctx.strokeStyle='cyan';
		ctx.stroke();
	} else if (posX > 668 && posX <= 768) {
		ctx.clearRect(42+select*100,triesLeft*40+108,27,26);
		select = 1
		ctx.beginPath();
		ctx.moveTo(42+select*100,triesLeft*40+121);
		ctx.lineTo(68+select*100,triesLeft*40+121);
		ctx.lineTo(56+select*100,triesLeft*40+109);
		ctx.moveTo(68+select*100,triesLeft*40+121);
		ctx.lineTo(56+select*100,triesLeft*40+133);
		ctx.strokeStyle='cyan';
		ctx.stroke();
	} else if (posX > 768 && posX <= 868) {
		ctx.clearRect(42+select*100,triesLeft*40+108,27,26);
		select = 2
		ctx.beginPath();
		ctx.moveTo(42+select*100,triesLeft*40+121);
		ctx.lineTo(68+select*100,triesLeft*40+121);
		ctx.lineTo(56+select*100,triesLeft*40+109);
		ctx.moveTo(68+select*100,triesLeft*40+121);
		ctx.lineTo(56+select*100,triesLeft*40+133);
		ctx.strokeStyle='cyan';
		ctx.stroke();
	} else if (posX > 868) {
		ctx.clearRect(42+select*100,triesLeft*40+108,27,26);
		select = 3
		ctx.beginPath();
		ctx.moveTo(42+select*100,triesLeft*40+121);
		ctx.lineTo(68+select*100,triesLeft*40+121);
		ctx.lineTo(56+select*100,triesLeft*40+109);
		ctx.moveTo(68+select*100,triesLeft*40+121);
		ctx.lineTo(56+select*100,triesLeft*40+133);
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
	var c = document.getElementById('Canvas');
	var ctx = c.getContext("2d");
	if (playCode.length == 4 && playCode[0] != undefined && playCode[1] != undefined && playCode[2] != undefined && playCode[3] != undefined) {
		console.log("code played is: "+playCode);
		playCode = [];
		ctx.clearRect(42+select*100,triesLeft*40+108,27,26);
		if (triesLeft != 0) {
			triesLeft -=1;
			ctx.beginPath();
			ctx.moveTo(42+select*100,triesLeft*40+121);
			ctx.lineTo(68+select*100,triesLeft*40+121);
			ctx.lineTo(56+select*100,triesLeft*40+109);
			ctx.moveTo(68+select*100,triesLeft*40+121);
			ctx.lineTo(56+select*100,triesLeft*40+133);
			ctx.strokeStyle='cyan';
			ctx.stroke();
		} else {
			document.getElementById('inGameInfo').innerHTML = "game over!";
			viewCode();
			setTimeout(exitGame,4000);
		}
	} else {
		document.getElementById('inGameInfo').innerHTML = "plz select 4 colors";
		console.log("plz select 4 colors!");
	}
}

function checkHints() {
	var correctColor = 0;
	var correctPosition = 0;
	var i;
	var l;
	var c = document.getElementById('Canvas');
	var ctx = c.getContext("2d");

	for (i=0; i<4; i++) {
		if (playCode[i] == code[i]) {
			correctPosition += 1;
		}
	}

	if (playCode[0] == code[1] || playCode[0] == code[2] || playCode[0] == code[3]) {
		correctColor += 1;
	}
	if (playCode[1] == code[0] || playCode[1] == code[2] || playCode[1] == code[3]) {
		correctColor += 1;
	}
	if (playCode[2] == code[0] || playCode[2] == code[1] || playCode[2] == code[3]) {
		correctColor += 1;
	}
	if (playCode[3] == code[0] || playCode[3] == code[1] || playCode[3] == code[2]) {
		correctColor += 1;
	}

	switch(correctColor) {
		case 1:
			ctx.beginPath();
			ctx.arc(10, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
			ctx.fillStyle="white";
			ctx.fill();
			break;
		case 2:
			ctx.beginPath();
			ctx.arc(10, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
			ctx.arc(30, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
			ctx.fillStyle="white";
			ctx.fill();
			break;
		case 3:
			ctx.beginPath();
			ctx.arc(10, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
			ctx.arc(30, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
			ctx.fillStyle="white";
			ctx.fill()
			ctx.beginPath();
			ctx.arc(10, (triesLeft*2)*20+130, 10, 0, 2*Math.PI);
			ctx.fillStyle="white";
			ctx.fill();
			break;
		case 4:
			ctx.beginPath();
			ctx.arc(10, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
			ctx.arc(30, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
			ctx.fillStyle="white";
			ctx.fill()
			ctx.beginPath();
			ctx.arc(10, (triesLeft*2)*20+130, 10, 0, 2*Math.PI);
			ctx.arc(30, (triesLeft*2)*20+130, 10, 0, 2*Math.PI);
			ctx.fillStyle="white";
			ctx.fill();
			break;
	}

	switch(correctPosition) {
			case 1:
				ctx.beginPath();
				ctx.arc(450, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
				ctx.fillStyle="red";
				ctx.fill();
				break;
			case 2:
				ctx.beginPath();
				ctx.arc(450, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
				ctx.arc(470, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
				ctx.fillStyle="red";
				ctx.fill();
				break;
			case 3:
				ctx.beginPath();
				ctx.arc(450, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
				ctx.arc(470, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
				ctx.fillStyle="red";
				ctx.fill()
				ctx.beginPath();
				ctx.arc(450, (triesLeft*2)*20+130, 10, 0, 2*Math.PI);
				ctx.fillStyle="red";
				ctx.fill();
				break;
			case 4:
				ctx.beginPath();
				ctx.arc(450, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
				ctx.arc(470, (triesLeft*2)*20+110, 10, 0, 2*Math.PI);
				ctx.fillStyle="red";
				ctx.fill()
				ctx.beginPath();
				ctx.arc(450, (triesLeft*2)*20+130, 10, 0, 2*Math.PI);
				ctx.arc(470, (triesLeft*2)*20+130, 10, 0, 2*Math.PI);
				ctx.fillStyle="red";
				ctx.fill();
				break;
		}

	if (correctPosition == 4) {
		document.getElementById('inGameInfo').innerHTML = "You WIN";
		viewCode();
		setTimeout(exitGame,4000);
	} else {
		console.log("colors on correct position: " + correctPosition);
		console.log("correct colors: " + correctColor);
		playColors();
	}
}