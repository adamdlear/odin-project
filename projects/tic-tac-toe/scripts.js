function Gameboard() {
    board = [];
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i].push(Tile());
        }
    }

    const getBoard = () => board;

    const makeMove = (marker, row, column) => {
        const tile = board[row][column];
        tile.addMarker(marker);
        console.log(tile);
        // if (tile.getValue === "*") tile.addMarker(marker);
    };

    const printBoard = () => {
        const boardValues = board.map((row) => row.map((tile) => tile.getValue()));
        console.log(boardValues);
    };

    return { getBoard, makeMove, printBoard };
}

function Tile() {
    let value = "*";

    const getValue = () => value;

    const addMarker = (marker) => {
        value = marker;
    };

    return { getValue, addMarker };
}

function GameController() {
    const board = Gameboard();

    const players = [
        {
            name: "Player 1",
            marker: "X",
        },
        {
            name: "Player 2",
            marker: "O",
        },
    ];
    let currentPlayer = players[0];

    const getCurrentPlayer = () => currentPlayer;

    const switchCurrentPlayer = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };

    const printNewRound = () => {
        board.printBoard();
        console.log(`${currentPlayer.name}'s move`);
    };

    const playRound = (row, column) => {
        board.makeMove(currentPlayer.marker, row, column);
        switchCurrentPlayer();
    };

    return { playRound, printNewRound, getCurrentPlayer };
}

function ScreenController() {
    const game = GameController();
    const boardDiv = document.querySelector(".board");

    const updateScreen = () => {
        boardDiv.textContent = "";

        const board = game.getBoard();
    }
}
