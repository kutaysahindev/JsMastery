"use strict";

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

const diceEl = document.querySelector(".dice");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

let scores = [0, 0]; // Total Scores
let currentScore = 0;
let activePlayer = 0; // 0 = P1, 1 = P2
let playing = true;

// Initial Res

const init = function () {
  scores = [0, 0]; // Total Scores
  currentScore = 0;
  activePlayer = 0; // 0 = P1, 1 = P2
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");

  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};

init();

// Random Nr

const getRandomNumber = function (min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
};

// Turn

const changeTurn = function () {
  // turn === 0 ? (turn = 1) : (turn = 0);
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

// Roll Dice

const rollDice = function () {
  if (playing) {
    diceEl.classList.remove("hidden");

    let randomNum = getRandomNumber(1, 6);
    let imagePath = `dice-${randomNum}.png`;

    diceEl.src = imagePath;
    diceEl.alt = `Dice: ${randomNum}`;

    if (randomNum !== 1) {
      currentScore += randomNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changeTurn();
    }
  }
};

// Hold Points

const holdPoints = function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      changeTurn();
    }
  }
};

// Reset Game

btnRoll.addEventListener("click", rollDice);

btnHold.addEventListener("click", holdPoints);

btnNew.addEventListener("click", init);
