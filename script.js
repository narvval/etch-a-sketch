const container = document.querySelector('.container');
const gridSize = 480; 

function createGrid(num) {
    squareTotal = num * num;
    squareSize = gridSize / num;
    for (i = 0; i < squareTotal; i++) {

        div = document.createElement('div');
        container.appendChild(div).classList.add('grid-square');
        div.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px`);

    }
}

createGrid(16);