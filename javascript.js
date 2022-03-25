let k = 16;
let g = k;

generateGrid (k);

function generateGrid (k) {
    g = k;
    for (let i = 0; i < k**2; i++) {
        const grid = document.querySelector('.grid');

        const cell = document.createElement('div');
        cell.classList.add('cell');

        grid.appendChild(cell);
    }

    let flexPercentage = ((1 / k) * 100) + '%';
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
}

const slider = document.querySelector('.slider');
let gridValue = slider.value;
document.querySelector(".display").innerHTML = gridValue + 'x' + gridValue;

slider.oninput = function() {
    document.querySelector(".display").innerHTML = this.value + 'x' + this.value;
}