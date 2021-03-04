var numSquares = 6
var colors = []
var selectedColor
var squares = document.querySelectorAll('.square')
var colorDisplay = document.querySelector('#color-display')
var messageDisplay = document.querySelector('#message')
var h1 = document.querySelector('h1')
var reset = document.querySelector('#reset')
var mode = document.querySelectorAll('.mode')
var easy = document.querySelector('.mode')

function init(){
    colorDisplay.textContent = selectedColor
    setupSquares()
    setupMode()
    reset()
}

reset.addEventListener('click', function() {
    reset()
})

function reset() {
    colors = genColors(numSquares)
    selectedColor = chooseColor()
    colorDisplay.textContent = selectedColor
    h1.style.backgroundColor = '#ffffff'
    reset.textContent = 'New Colors'
    messageDisplay.textContent = ''
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = 'block'
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = 'none'
        }
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].addEventListener('click', function() {
            var clickedColor = this.style.backgroundColor
            if(clickedColor === selectedColor) {
                messageDisplay.textContent = 'Correct'
                reset.textContent = 'Play Again'
                changeColors(selectedColor)
            } else {
                this.style.backgroundColor = '#ffffff'
                messageDisplay.textContent ='Try Again'
            }
        })
    }
}

function setupMode() {
    for(var i = 0; i < mode.length; i++){
        mode[i].addEventListener('click', function() {
            for (var i = 0; i < mode.length; i++) {
                mode[i].classList.remove('selected')
            }
            this.classList.add('selected')
            if (this.textContent === "Easy") {
                numSquares = 3
            } else {
                numSquares = 6
            }
            reset()
        })
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

init()