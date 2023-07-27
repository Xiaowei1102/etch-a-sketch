for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('container');
    document.body.appendChild(div);
}

const divs = document.querySelectorAll('.container');

divs.forEach(div => {
    for (let i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        div.appendChild(square);
    }
})

//add evetlistener for each element when the mouse is hovering over
const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener(
    'mouseenter', 
    (e) => {
        e.target.style.backgroundColor = 'purple';
    }));