// Settings
let rows = 16;
let cols = 16;
// Make a table of different colors to choose from randomly.
let color = ['red','green','blue','yellow','orange','black','purple'];
// Variable for the board
let gameBoard = document.getElementById('game');
//Variable for the change size button
let sizeBtn = document.getElementById('size');
// Add event listener for the button 
sizeBtn.addEventListener('click',(e) => {
    getnewSize();
})
// Function to get new size board 
function getnewSize(){
    r = prompt('How many rows?');
    rows = parseInt(r);
    c = prompt('How many columns?');
    cols = parseInt(c);
    if(rows > 100 || cols > 100 || rows < 2 || cols < 2){
        return getnewSize();
    }
    return createGrid(rows,cols);
}
// Function to refresh board to make a new one.
function clearGrid(){
    gameBoard.textContent = "";
}
// Function to create the drawing board
function createGrid(rows,cols){
    clearGrid();
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