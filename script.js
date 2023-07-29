let computerScore = document.querySelector(".computerScore h1");
let playerScore = document.querySelector(".playerScore h1");
let announcement = document.querySelector(".announce");
let announcementText = document.querySelector(".announce h1");
let playAgainBtn = document.querySelector(".announce button");
let roundState = document.querySelector(".winLose");
function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return "Rock";
  } else if (randomNumber <= 0.66) {
    return "Paper";
  }
  return "Scissors";
}
function announceWin() {
  announcementText.innerText = "YOU WIN";
  announcement.style.visibility = "visible";
  announcement.style.color = "green";
}

function announceLose() {
  announcementText.innerText = "YOU LOST";
  announcement.style.visibility = "visible";
  announcement.style.color = "red";
}
function resetGame() {
  resetComputerChoice();
  playerScore.innerText = "0";
  computerScore.innerText = "0";
  roundState.innerText = "";
}
function playerWonRound() {
  playerScore.innerText++;
  roundState.innerText = "WIN";
  roundState.style.color = "green";
}
function computerWonRound() {
  computerScore.innerText++;
  roundState.innerText = "LOSE";
  roundState.style.color = "red";
}
function draw() {
  roundState.innerText = "DRAW";
  roundState.style.color = "gray";
}

playAgainBtn.addEventListener(
  "click",
  () => (announcement.style.visibility = "hidden")
);

let playRound = (playerSelection, computerSelection) => {
  updateComputerChoice(computerSelection);
  // check for draw
  console.log(`${playerSelection} vs ${computerSelection}`);
  if (playerSelection == computerSelection) {
    draw();
    return;
  }
  //  check if player win
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    playerWonRound();
    if (playerScore.innerText >= 5) {
      resetGame();
      announceWin();
    }
  } else {
    computerWonRound();
    if (computerScore.innerText >= 5) {
      announceLose();
      resetGame();
    }
  }
};

//   buttons functions
let buttonsDiv = document.querySelector(".buttons");
let buttons = buttonsDiv.querySelectorAll("button");
buttons = Array.from(buttons);

function setBorderColor(btn) {
  btn.style.borderColor = "green";
}
function removeBtnsBorderColor() {
  buttons.forEach((btn) => {
    btn.style.borderColor = "transparent";
  });
}

let computerChoiceImg = document.querySelector(".computerChoice img");

function updateComputerChoice(computerChoice) {
  if (computerChoice == "Rock") {
    computerChoiceImg.setAttribute("src", "images/icons8-rock-100.png");
  } else if (computerChoice == "Paper") {
    computerChoiceImg.setAttribute("src", "images/icons8-paper-100.png");
  } else if (computerChoice == "Scissors") {
    computerChoiceImg.setAttribute("src", "images/icons8-scissor-64.png");
  }
}
function resetComputerChoice() {
  computerChoiceImg.setAttribute("src", "images/icons8-question-mark-80.png");
}

buttons.forEach((btn) => {
  let value = btn.getAttribute("value");
  btn.addEventListener("click", () => {
    removeBtnsBorderColor();
    setBorderColor(btn);
    playRound(value, getComputerChoice());
  });
});
