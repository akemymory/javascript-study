let userChoiceVar = "";
let computerChoiceVar = "";
let winner = "";

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    userChoiceVar = userInput;
  } else if (userInput === "bomb") {
    console.log("AHA");
  } else {
    console.log("Not a valid choice");
  }
};

getUserChoice("bomb");

function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      computerChoiceVar = "rock";
      break;
    case 1:
      computerChoiceVar = "paper";
      break;
    case 2:
      computerChoiceVar = "scissors";
      break;
  }
}

getComputerChoice();

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    winner = "We have a tie!";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    winner = `The User won this match`;
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    winner = `The Computer won this match`;
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    winner = `The User won this match`;
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    winner = `The Computer won this match`;
  } else if (userChoice === "rock" && computerChoice === "paper") {
    winner = `The Computer won this match`;
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    winner = `The User won this match`;
  } else if (userChoice === "bomb") {
    winner = `The User won this match`;
  }
}

function playGame() {
  console.log(`The User choice is ${userChoiceVar}`);
  console.log(`The Computer choice is ${computerChoiceVar}`);
  determineWinner(userChoiceVar, computerChoiceVar);
  console.log(winner);
}

playGame();
