let width = 16;
const container = document.getElementById('container');

function makeGrid(length) {
    let total = length**2;
    for (let i = 0; i < total; i++) {
        const div = document.createElement('div');
        div.style.flexBasis = `${100 / length}%`;
        div.style.border = '1px solid black';
        div.style.boxSizing = 'border-box';
        div.style.backgroundColor = 'white';
        div.onmouseenter = function() {
            darken(div);
        };
        container.appendChild(div);
    }
}

function darken(element) {
    const background = element.style.backgroundColor;
    switch (background) {
        case 'white':
            element.style.backgroundColor = 'lightgray';
            break;
        case 'lightgray':
            element.style.backgroundColor = 'silver';
            break;
        case 'silver':
            element.style.backgroundColor = 'gray';
            break;
        case 'gray':
            element.style.backgroundColor = 'dimgray';
            break;
        case 'dimgray':
            element.style.backgroundColor = 'black';
            break;
        default:
            break;
    }
/*    
    if (element.style.backgroundColor === 'black') {
        element.style.backgroundColor = 'white';
    }
    else {
        element.style.backgroundColor = 'black';
    }
    */
}

function changeWidth(num) {
    width = num;
}

makeGrid(width);