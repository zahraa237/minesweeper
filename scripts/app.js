function init(){

    const gridElem = document.querySelector('.grid');

    const cells = []
    const gridSize = 5; // 5x5 grid
    const cellSize = 50; // Size of each cell 
    const numberOfCells = gridSize * gridSize;
    const flagBtn = document.querySelector('#flag');

    let mineCount = 0;
    let numberOfMines = 5; 
    let flag = false; 
    let checkedCells = []

    let idk = 0

    flagBtn.addEventListener('click', useFlag); 
//functions

//create a grid
function createGrid(){

    //for every cell we want creat a div and add it to the grid
    for (let x = 0; x < numberOfCells; x++) {
        const cell = document.createElement('div');

        // for (let y = 0; y < gridSize; y++)
        //     {cell.id.add(`${x}-${y}`); }

        cell.style.width = `${cellSize}px`; // Set cell width
        cell.style.height = `${cellSize}px`; // Set cell height
        cell.addEventListener('click', handelClick);  // Add click event listener
        cells.push(cell);
        gridElem.appendChild(cell); 
    }

    //adjusting grid size based on number/ size of cells
    gridElem.style.width = `${gridSize * cellSize}px`; 
    gridElem.style.height = `${gridSize * cellSize}px`; 
}
//handle click
function handelClick(event) {
    if (event.target.classList.contains('mine')) {
        if (flag) event.target.classList.replace('mine','flagged'); 
        else console.log('Game Over! You clicked on a mine.'); //LOSE
    }
    else if (flag) event.target.classList.toggle('flagged'); // add/remove flagged class on click
    }

function useFlag(){
    flag = !flag
    console.log(flag)
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

function checkBombs(){
    cells.forEach (cell => {
        if (checkedCells.includes(cell)) return;
        if (!cell.classList.contains('mine')) checkedCells.push(cell)})
}

// function checkBombs(){
//     cells.forEach(cell => {
//         if (checkedCells.includes(cell)) return; // Skip if cell has already been checked
//         if (checkedCells.length < 1) { //!!                             
//             checkedCells.push(cell); // Add the cell to checked cells
//         }
//         else {                                               
//             if (cell.classList.contains('mine')) { 
//             }
//         }
//     }
// )}

createGrid();
createMines();
checkBombs();
} document.addEventListener("DOMContentLoaded", init);
