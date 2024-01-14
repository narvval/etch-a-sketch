const container = document.querySelector('.grid-container');
const gridWidth = 800;
const gridHeight = 400; 

function createGrid(num) {
    widthSquares = gridWidth / num;
    heightSquares = gridHeight / num;
    divs = document.querySelectorAll('.grid-square');
        
    if (divs.length == 0) {
        for (i = 0; i < widthSquares; i++) {
            for (j = 0; j < heightSquares; j++) {
                div = document.createElement('div');
                container.appendChild(div).classList.add('grid-square');
                div.setAttribute('style', `width: ${num}px; height: ${num}px`);
            }
        }
    }
    else {
        divs.forEach((div) => {
           container.removeChild(div);
        });

        for (i = 0; i < widthSquares; i++) {
            for (j = 0; j < heightSquares; j++) {
                div = document.createElement('div');
                container.appendChild(div).classList.add('grid-square');
                div.setAttribute('style', `width: ${num}px; height: ${num}px`);
            }
        }
    }
    paintColor();
}

createGrid(10);

const small = document.querySelector('#small');
small.addEventListener('click', () => {
    createGrid(10);
})

const medium = document.querySelector('#medium');
medium.addEventListener('click', () => {
    createGrid(20);
})

const large = document.querySelector('#large');
large.addEventListener('click', () => {
    createGrid(40);
})

function paintColor() {
    divs = document.querySelectorAll('.grid-square');
    divsArray = Array.from(divs);

    divsArray.forEach((div) => {
        div.onmouseover = () => {
            div.style.backgroundColor = 'black';
        }
    });
}

function paintRainbow() {
    divs = document.querySelectorAll('.grid-square');
    divsArray = Array.from(divs);

    divsArray.forEach((div) => {
        div.onmouseover = () => {
            div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)})`;
        }
    });
}

function erase() {
    console.log('erase activated')
    divs = document.querySelectorAll('.grid-square');
    divsArray = Array.from(divs);

    divsArray.forEach((div) => {
        div.onmouseover = () => {
            div.style.backgroundColor = 'white';
        }
    });
}

eraseButton = document.querySelector('#erase');
eraseButton.addEventListener('click', erase);

colorButton = document.querySelector('#color');
colorButton.addEventListener('click', paintColor);

rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', paintRainbow);

