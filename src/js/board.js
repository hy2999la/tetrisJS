class Board {
    grid;

    setEmptyBoard() {
        this.grid =  Array(ROWS).fill(0).map(() => Array(COLS).fill(0));
    }
}