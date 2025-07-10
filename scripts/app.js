function init(){

    const gridElem = document.querySelector('.grid');


    const cells = []
    const gridSize = 5; // 5x5 grid
    const numberOfCells = gridSize * gridSize;
    

    let mineCount = 0;
    let numberOfMines = 5; 


//functions

//create a grid
function createGrid(){

    //for every cell we want creat a div and add it to the grid
    for (let i = 0; i < numberOfCells; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('click', handelClick);  // Add click event listener
        cells.push(cell); //adding the cell to the cells array
        gridElem.appendChild(cell); //adding the cell to the grid
    }
}

//handle click
function handelClick(event) {
    if (event.target.classList.contains('mine')) {
        console.log('Game Over! You clicked on a mine.');
    }
}

//creating mines
function createMines() {
    while (mineCount < numberOfMines) { 
        let randomNumber = Math.floor(Math.random() * numberOfCells);
        const cell = cells[randomNumber];
        if (cell.classList.contains('mine')) mineCount-- //if the cell already has a mine dont count it
        cell.classList.add('mine');
        mineCount++;
    }
}

createGrid();
createMines();

} document.addEventListener("DOMContentLoaded", init);