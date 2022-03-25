let k = 16;
let g = k;
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

function randomizeColor () {
    const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    //epilepsy functionality
    //document.body.style.backgroundColor = randomColor;
    event.target.style.backgroundColor = randomColor;
}

function chameleonifyCells () {
    const changeColor = document.querySelectorAll('.cell').forEach(changeColor => changeColor.addEventListener('click', function () {
        changeColor = document.querySelectorAll('.cell').forEach(changeColor => changeColor.addEventListener('mouseover', randomizeColor));
        dechameleonifyCells ();
    }));
}

function dechameleonifyCells () {
    const changeColor = document.querySelectorAll('.cell').forEach(changeColor => changeColor.addEventListener('click', function () {
        changeColor = document.querySelectorAll('.cell').forEach(changeColor => changeColor.removeEventListener('mouseover', randomizeColor))
        chameleonifyCells ();
    }))
}

//scelta colore
//chiarire
//scurire
//cancellare
//UI: blu su azzurrino
//bottone per grandezze predefinite (16/32/64)
