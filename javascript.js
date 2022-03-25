let k = 16;
generateGrid (k);

let slider = document.getElementById("myRange");
let gridValue = slider.value;
document.getElementById("gridValue").innerHTML = gridValue + 'x' + gridValue;

slider.oninput = function() {
  gridValue = this.value;
  document.getElementById("gridValue").innerHTML = gridValue + 'x' + gridValue;
}



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