function init(){

    const gridElem = document.querySelector('.grid');


    const cells = []
    const gridSize = 5; // 5x5 grid
    const numberOfCells = gridSize * gridSize;

    let mineCount = 0;



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

}
createGrid();
} document.addEventListener("DOMContentLoaded", init);