const gameboard = document.getElementById("board");
const boardcontext = gameboard.getContext("2d");
let board = new Board();

function gameSetup() {
    boardcontext.canvas.width = COLS * BLOCKSIZE;
    boardcontext.canvas.height = ROWS * BLOCKSIZE;
    boardcontext.scale(BLOCKSIZE, BLOCKSIZE);

    board.setEmptyBoard();
    console.table(board.grid);
}

gameSetup();