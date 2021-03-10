let numSquares = 6
let colors = []
let selectedColor
let squares = document.querySelectorAll('.square')
let colorDisplay = document.querySelector('#color-display')
let messageDisplay = document.querySelector('#message')
let h1 = document.querySelector('h1')
let resetButton = document.querySelector('#reset')
let mode = document.querySelectorAll('.mode')
let easy = document.querySelector('.mode')

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
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			let clickedColor = this.style.backgroundColor;
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
			for (let i = 0; i < mode.length; i++) {
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
	h1.style.backgroundColor = '#bbdfc8'
	resetButton.textContent = 'New Colors'
	messageDisplay.textContent = ''
	for (let i = 0; i < squares.length; i++) {
		if(colors[i]) { 
			squares[i].style.display = 'block'
			squares[i].style.backgroundColor = colors[i]
		} else {
			squares[i].style.display = 'none'
		}
	}
}

function changeColors(color){
    for(let i = 0; i < squares.length; i++) {
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
    for (let i = 0; i < num; i++) {
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

