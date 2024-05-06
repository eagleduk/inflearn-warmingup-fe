const winSpan = document.getElementById("win");
const drawSpan = document.getElementById("draw");
const loseSpan = document.getElementById("lose");
const roundSpan = document.getElementById("round");
const gameBoard = document.querySelector(".game-board");
const gameoverBoard = document.querySelector(".gameover-board");

const TYPE = {
  scissors: 0,
  rock: 1,
  paper: 2,
};

const INIT_STATUS = {
  round: 10,
  win: 0,
  draw: 0,
  lose: 0,
};

function render(status) {
  winSpan.textContent = status.win;
  drawSpan.textContent = status.draw;
  loseSpan.textContent = status.lose;
  roundSpan.textContent = status.round;
}

function endGame(status) {
  const resultSpan = document.querySelector(".gameover-board span");

  if (
    status.win === status.lose &&
    (status.win < status.draw || status.lose < status.draw)
  )
    resultSpan.textContent = "Draw";
  else if (status.win <= status.draw && status.lose <= status.draw)
    resultSpan.textContent = "Draw";
  else if (status.draw < status.win && status.lose < status.win)
    resultSpan.textContent = "Win";
  else if (status.draw < status.lose && status.win < status.lose)
    resultSpan.textContent = "Lose";

  gameoverBoard.setAttribute("style", "display: block;");
  gameBoard.setAttribute("style", "display: none;");
}

document.addEventListener("DOMContentLoaded", () => {
  let start_status = { ...INIT_STATUS };

  document.querySelectorAll(".game-board button").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (start_status.round === 0) return;

      const type = event.target.dataset.type;
      const player = TYPE[type];

      const ai = Math.round(Math.random() * 2);

      if (ai === player) {
        start_status.draw += 1;
      } else if (ai === 2 && player === 0) {
        start_status.win += 1;
      } else if (ai === 0 && player === 2) {
        start_status.lose += 1;
      } else if (ai < player) {
        start_status.win += 1;
      } else if (player < ai) {
        start_status.lose += 1;
      }

      start_status.round -= 1;

      render(start_status);

      if (start_status.round === 0) {
        endGame(start_status);
      }
    });
  });

  document
    .querySelector(".gameover-board button")
    .addEventListener("click", () => {
      start_status = { ...INIT_STATUS };
      render(start_status);
      gameBoard.setAttribute("style", "display: block;");
      gameoverBoard.setAttribute("style", "display: none;");
    });
});
