// Settings
let rows = 16;
let cols = 16;
// Make a table of different colors to choose from randomly.
let color = ['red','green','blue','yellow','orange','black','purple'];
// Variable for the board
let gameBoard = document.getElementById('game');
// Function to create the drawing board
function createGrid(rows,cols){
    for(let e = 0; e < rows*cols;e++){
        let div = document.createElement('div'); 
        div.className = 'boardPieces';
        div.id = `num${e}`;
        div.style.width = `${800/rows-2}px`;
        div.style.height = `${(800/cols-2)}px`;
        div.addEventListener('mouseover',(e) => {
            div.style.backgroundColor = color[Math.floor(Math.random()*7)];
        });
        gameBoard.appendChild(div);
    }
}

createGrid(rows,cols);