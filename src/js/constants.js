const COLS = 10;
const ROWS = 20;
const BLOCKSIZE = 30;

const I = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

const L = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 0]
];

const J = [
    [0, 0, 1],
    [0, 0, 1],
    [0, 1, 1]
];

const O = [
    [1, 1],
    [1, 1]
];

const S = [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
];

const Z = [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
];

const T = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]
];

const TETRONIMOES = [I, L, J, O, S, Z, T];

const COLORS = ["cyan", "blue", "orange", "yellow", "green", "purple", "red"];