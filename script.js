const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const restartBtn = document.createElement('button');

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

restartBtn.textContent = "Restart";
restartBtn.style.display = "none";
document.body.appendChild(restartBtn);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (roundsPlayed < 3) {
      const result = playRound(button.id, computerPlay());
      resultEl.textContent = result;
      roundsPlayed++;

      if (roundsPlayed === 3) {
        declareWinner();
        restartBtn.style.display = "block"; 
      }
    }
  });
});

restartBtn.addEventListener("click", () => {
  resetGame();
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function declareWinner() {
  if (playerScore > computerScore) {
    resultEl.textContent = "Game over! You are the winner!";
    document.body.style.background = "linear-gradient(135deg, #ff9800, #ff5722)";
  } else if (computerScore > playerScore) {
    resultEl.textContent = "Game over! The computer wins!";
    document.body.style.background = "linear-gradient(135deg, #000000, #434343)";
  } else {
    resultEl.textContent = "Game over! It's a tie!";
    document.body.style.background = "linear-gradient(135deg, #4caf50, #8bc34a)";
  }
  

  resultEl.style.fontSize = "3rem";
  resultEl.style.marginTop = "20px";
  resultEl.style.textAlign = "center";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  resultEl.textContent = "";
  resultEl.style.fontSize = "";
  restartBtn.style.display = "none";
  document.body.style.background = "linear-gradient(135deg, #ff00ff, #1f1c2c)";
}
