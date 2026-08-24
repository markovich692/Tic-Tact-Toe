"use-strict";

function Gameboard() {
  const board = ["", "", "", "", "", "", "", "", ""];

  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
  ];

  const player1 = { marker: "X", moves: [], score: "" };

  const player2 = { marker: "0", moves: [], score: "" };

  return { player1, player2, board, winningCombination };
}

const game = Gameboard();

// Player 1 clicks on the 4th square

game.board[4] = game.player1.marker;

game.player1.moves.push(4);

// Player 1 clicks on the 5th square

game.board[5] = game.player1.marker;

game.player1.moves.push(5);

// Player 1 clicks on the 6th square

game.board[6] = game.player1.marker;

game.player1.moves.push(6);

// Checks if the player moves match the winning combination no matter the order

console.log(game.player1.moves);

console.log(game.winningCombination);

const test = game.winningCombination.some(function (combination) {
  return combination.every(function (square) {
    return game.player1.moves.includes(square);
  });
});

console.log(test);
