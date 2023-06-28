let width = 16;
const container = document.getElementById('container');

function makeGrid(length) {
    let total = length**2;
    for (let i = 0; i < total; i++) {
        const div = document.createElement('div');
        div.style.flexBasis = `${100 / length}%`;
        div.style.border = '1px solid black';
        div.style.boxSizing = 'border-box';
        div.onmouseover = function() {
            darken(div);
        };
        container.appendChild(div);
    }
}

function darken(element) {
    element.style.backgroundColor = 'black';
}

function changeWidth(num) {
    width = num;
}

makeGrid(width);