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