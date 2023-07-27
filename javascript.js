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