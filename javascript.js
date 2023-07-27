function generateSquareGrid(grideNumber) {
    for (let i = 0; i < grideNumber; i++) {
        const div = document.createElement('div');
        div.classList.add('container');
        document.body.appendChild(div);
    }
    
    const divs = document.querySelectorAll('.container');
    
    divs.forEach(div => {
        for (let i = 0; i < grideNumber; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            div.appendChild(square);
        }
    })
}
generateSquareGrid(16);

//add evetlistener for each element when the mouse is hovering over
function sketch() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener(
    'mouseenter', 
    (e) => {
        e.target.style.backgroundColor = 'purple';
    }));
}

sketch();


//add button eventlistener to clear the grids and generate new ones
const button = document.querySelector('button');
button.addEventListener('click', () => {
    let newGridSquareNum = prompt("Choose the new grid square number on each side of the screen");
    newGridSquareNum = parseInt(newGridSquareNum, 10);

    console.log(newGridSquareNum);
    //clear the old grid
    const elements = document.querySelectorAll('div');
    elements.forEach(element => element.remove());

    //reconstruct the new grid
    generateSquareGrid(newGridSquareNum);
    sketch();

});