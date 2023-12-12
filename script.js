//Score - constants
let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result > p");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorDiv = document.getElementById("scissor");

//Events and functions - declaration
function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToward (word) {
    if (word === "rock") {
        return "ROCK";
    } else if (word === "paper") {
        return "PAPER";
    } else if (word === "scissor") {
        return "SCISSOR";
    }
}

function wins(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore; 
    resultDiv.innerHTML = `${convertToward(userChoice)} beats ${convertToward(computerChoice)}. YOU WIN!`;
}

function lose(userChoice, computerChoice) {
    compScore++;
    compScoreSpan.innerHTML = compScore;
    userScoreSpan.innerHTML = userScore;
    resultDiv.innerHTML = `${convertToward(userChoice)} lose to ${convertToward(computerChoice)}. Shoggoth WIN!.`;
}

function draw(userChoice, computerChoice) {
    compScoreSpan.innerHTML = compScore;
    userScoreSpan.innerHTML = userScore;
    resultDiv.innerHTML = `${convertToward(userChoice)} equals ${convertToward(computerChoice)}, don't give up brave Adventurer!`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            wins(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rockDiv.addEventListener('click', () => game("rock"));
    paperDiv.addEventListener('click', () => game("paper"));
    scissorDiv.addEventListener('click', () => game("scissor"));
}

main();