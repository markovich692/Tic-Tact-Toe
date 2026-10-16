"use strict";

const gameboard = function () {
  let gameboardArray = [, , , , , , , ,];

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

  const updateGameboardArray = function (position, marker) {
    gameboardArray[position] = marker;

    return gameboardArray;
  };

  return { gameboardArray, updateGameboardArray };
};

const startGame = gameboard();

const createPlayer = function (marker) {
  const { gameboardArray, updateGameboardArray } = startGame;

  return { gameboardArray, updateGameboardArray, marker };
};

/* PLAYER 1 */
const player1 = createPlayer("X");

player1.updateGameboardArray(3, player1.marker);

// console.log(player1);

/* PLAYER 2 */
const player2 = createPlayer("0");

player2.updateGameboardArray(4, player2.marker);


const gameLogic 





// console.log(player2);
console.log(player1.gameboardArray);
console.log(player2.gameboardArray);
console.log(player1.gameboardArray === player2.gameboardArray);
