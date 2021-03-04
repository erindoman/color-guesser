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

init()