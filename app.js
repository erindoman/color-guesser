var numSquares = 6
var colors = []
var selectedColor
var squares = document.querySelectorAll('.square')
var colorDisplay = document.querySelector('#color-display')
var messageDisplay = document.querySelector('#message')
var h1 = document.querySelector('h1')
var resetButton = document.querySelector('#reset')
var mode = document.querySelectorAll('.mode')
var easy = document.querySelector('.mode')

init();

function init() {
	colorDisplay.textContent = selectedColor;
	setupSquares();
	setupMode();
	reset();
}

resetButton.addEventListener("click", function() {
	reset();
});

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === selectedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again";
				changeColors(selectedColor);
			}
			else {
				this.style.backgroundColor = "#ffab73";
				messageDisplay.textContent = "try again";
			}
		});
	}
}

function setupMode() {
	for(var i = 0; i < mode.length; i++) {
		mode[i].addEventListener("click", function() {
			for (var i = 0; i < mode.length; i++) {
				mode[i].classList.remove("selected")
			}
			this.classList.add("selected")
			if (this.textContent === "Easy") {
				numSquares = 3;
			}
			else {
				numSquares = 6;
			}
			reset();
		});
	}
}

function reset() {
	colors = genColors(numSquares)
	selectedColor = chooseColor()
	colorDisplay.textContent = selectedColor
	h1.style.backgroundColor = '#ffab73'
	resetButton.textContent = 'New Colors'
	messageDisplay.textContent = ''
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) { 
			squares[i].style.display = 'block'
			squares[i].style.backgroundColor = colors[i]
		} else {
			squares[i].style.display = 'none'
		}
	}
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
        h1.style.backgroundColor = color
    }
}

function chooseColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function genColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(makeColor())
    }
    return arr
}

function makeColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

