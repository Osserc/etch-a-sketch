let k = 16;
let g = k;
let c = 0;
let color = 'black';
let flexPercentage = ((1 / k) * 100) + '%';
generateGrid (k);
chameleonifyCells ();

function generateGrid (k) {
    g = k;
    for (let i = 0; i < k**2; i++) {
        const grid = document.querySelector('.grid');

        const cell = document.createElement('div');
        cell.classList.add('cell');

        grid.appendChild(cell);
    }

    flexPercentage = ((1 / k) * 100) + '%';
    document.documentElement.style.setProperty('--flex-basis-percentage', flexPercentage);
}

function clearGrid (k) {
    for (let i = 0; i < k**2; i++) {
        const grid = document.querySelector('.grid');

        grid.removeChild(grid.lastChild);
    }
}

function refreshGrid (k) {
    clearGrid (g);
    generateGrid (k);
    chameleonifyCells ();
}

//set the default text in the reset button
const slider = document.querySelector('.slider');
let gridValue = document.querySelector('.slider').value;
document.querySelector(".display").innerHTML = gridValue + 'x' + gridValue;

//dynamically change the text in the reset button
slider.oninput = function() {
    document.querySelector(".display").innerHTML = this.value + 'x' + this.value;
    gridValue = document.querySelector('.slider').value;
}

//make the button refresh the grid with the desired dimension
const refresh = document.querySelector('.regenerate');
refresh.addEventListener('click', function () {refreshGrid (gridValue)});

//set up various buttons
const blackButton = document.querySelector('.black');
blackButton.addEventListener('click', activateBlack);
const randomButton = document.querySelector('.random');
randomButton.addEventListener('click', activateRandom);
const eraserButton = document.querySelector('.eraser');
eraserButton.addEventListener('click', activateEraser);
const colorPicker = document.querySelector('.picker');
colorPicker.addEventListener('change', pickColor);
const smallButton = document.querySelector('.small');
smallButton.addEventListener('click', function () {refreshGrid (16)});
const mediumButton = document.querySelector('.medium');
mediumButton.addEventListener('click', function () {refreshGrid (32)});
const largeButton = document.querySelector('.large');
largeButton.addEventListener('click', function () {refreshGrid (64)});

//distinguish which "brush" is selected
function colorSquare () {
    if (c == 0) {
        standardColor ();
    } else if (c == 1) {
        randomizeColor ();
    } else if (c == 2) {
        eraseColor ();
    } else if (c == 3) {
        chooseColor ();
    }
}

function standardColor () {
    event.target.style.backgroundColor = 'black';
}

function activateBlack () {
    c = 0;
}

function randomizeColor () {
    const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    event.target.style.backgroundColor = randomColor;
}

function activateRandom () {
    c = 1;
}

function eraseColor () {
    event.target.style.backgroundColor = 'white';
}

function activateEraser () {
    c = 2;
}

function pickColor () {
    c = 3;
    color = event.target.value;
    return color;
}

function chooseColor () {
    event.target.style.backgroundColor = color;
}

function chameleonifyCells () {
    const changeColor = document.querySelectorAll('.cell').forEach(changeColor => changeColor.addEventListener('click', function () {
        changeColor = document.querySelectorAll('.cell').forEach(changeColor => changeColor.addEventListener('mouseenter', colorSquare));
        dechameleonifyCells ();
    }));
}

function dechameleonifyCells () {
    const changeColor = document.querySelectorAll('.cell').forEach(changeColor => changeColor.addEventListener('click', function () {
        changeColor = document.querySelectorAll('.cell').forEach(changeColor => changeColor.removeEventListener('mouseenter', colorSquare));
        chameleonifyCells ();
    }))
}