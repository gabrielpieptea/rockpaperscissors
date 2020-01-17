let computerScore = 0;
let playerScore = 0;

// ----- computer play & rand int  ------//
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
  const x = getRndInteger(1, 3);
  console.log('x: ', x);
  if (x === 1) {
    return "rock";
  } else if (x === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice == "rock" && playerChoice == "scissors") {
    return 1;
  } else if (computerChoice == "scissors" && playerChoice == "paper") {
    return 1;
  } else if (computerChoice == "paper" && playerChoice == "rock") {
    return 1;
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    return 0;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    return 0;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    return 0;
  } else {
    return 2;
  }
}

//---- player and computer decisions ----//
function chooseRock() {
  playerChoice = "rock";
  let computerChoice = computerPlay();
  choiceboard.innerHTML = 'Computer played ' + computerChoice;
  if (playRound(computerChoice, 'rock') == 1) {
    computerScore++;
  } else if (playRound(computerChoice, 'rock') == 0) {
    playerScore++;
  } else {
    console.log();
  }
  showscoreboard();
}

function choosePaper() {
  playerChoice = "paper";
  let computerChoice = computerPlay();
  choiceboard.innerHTML = 'Computer played ' + computerChoice;
  if (playRound(computerChoice, 'paper') == 1) {
    computerScore++;
  } else if (playRound(computerChoice, 'paper') == 0) {
    playerScore++;
  } else {
    console.log();
  }
  showscoreboard();
}

function chooseScissors() {
  playerChoice = "scissors";
  let computerChoice = computerPlay();
  choiceboard.innerHTML = 'Computer played ' + computerChoice;
  if (playRound(computerChoice, 'scissors') == 1) {
    computerScore++;
  } else if (playRound(computerChoice, 'scissors') == 0) {
    playerScore++;
  } else {
    console.log();
  }
  showscoreboard();
}

// ----------- ADD BUTTONS -----------//
const buttonContainer = document.getElementById('buttonContainer');

let rockBtn = document.createElement('button');
let paperBtn = document.createElement('button');
let scissorsBtn = document.createElement('button');
let scoreboard = document.createElement('div');
let choiceboard = document.createElement('div');

rockBtn.addEventListener('click', e => chooseRock());
paperBtn.addEventListener('click', e => choosePaper());
scissorsBtn.addEventListener('click', e => chooseScissors());

rockBtn.innerHTML = 'rock';
paperBtn.innerHTML = 'paper';
scissorsBtn.innerHTML = 'scissors';

function showscoreboard() {
  if (computerScore == 5) {
    computerScore = 0;
    playerScore = 0;
    scoreboard.innerHTML = 'Computer wins! Choose to play again...';
  } else if (playerScore == 5) {
    computerScore = 0;
    playerScore = 0;
    scoreboard.innerHTML = 'Player wins! Choose to play again...';
  } else {
    scoreboard.innerHTML = 'Computer score: ' + computerScore + ' ' + playerScore + ' :Player score';
  }
}

buttonContainer.appendChild(rockBtn).className = 'buttonlist';
buttonContainer.appendChild(paperBtn).className = 'buttonlist';
buttonContainer.appendChild(scissorsBtn).className = 'buttonlist';
buttonContainer.appendChild(choiceboard).className = 'scoreboardClass';
buttonContainer.appendChild(scoreboard).className = 'scoreboardClass';
