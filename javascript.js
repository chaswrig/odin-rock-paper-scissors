//add logic to the buttons
const rockButton = document.querySelector("#rock");
rockButton.addEventListener ("click", () => {
    humanChoice = "rock";
    playRound();
    displayScore();
})

const paperButton = document.querySelector("#paper");
paperButton.addEventListener ("click", () => {
    humanChoice = "paper";
    playRound();
    displayScore();
})

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener ("click", () => {
    humanChoice = "scissors";
    playRound();
    displayScore();
})

const resetButton = document.querySelector("#reset");
resetButton.addEventListener ("click", resetScore);

const playerActions = document.querySelector("#playerActions");


function resetScore(){
    humanScore = 0;
    computerScore = 0;
    displayScore();
    playerActions.appendChild(rockButton);
    playerActions.appendChild(paperButton);
    playerActions.appendChild(scissorsButton);
}


// Logic for playing rock paper scissors
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

let humanChoice = "";

const humanScoreboard = document.querySelector("#humanScore");
const computerScoreboard = document.querySelector("#computerScore");

function displayScore() {
    humanScoreboard.textContent = `Player Score: ${humanScore}`;
    computerScoreboard.textContent = `Computer Score: ${computerScore}`;

}

function isGameOver() {
    if (humanScore >= 5 || computerScore >= 5) {
        playerActions.removeChild(rockButton);
        playerActions.removeChild(paperButton);
        playerActions.removeChild(scissorsButton);
        (humanScore > computerScore) ? alert("Human wins it all!"):alert("Computer wins it all!");
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) % 3;
    let choice="";
    switch (randomNumber) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            console.log("randomNumber is broken");
    }
    return choice;
}

function playRound() {
    
    let computerChoice = getComputerChoice();

    if (computerChoice === humanChoice) {
        alert("Tie Game. No points awarded");
    } else {
        identifyWinner(humanChoice, computerChoice);
    }
    isGameOver();
}

function playGame(numberRounds){
    for (let i = 1; i <= numberRounds; i++) {
        console.log("Playing round " + i);
        playRound();
    }
}


function identifyWinner(humanChoice, computerChoice){
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            alert("Computer chose paper. You lose.");
            computerScore++;
            return;
        } else {
            alert("Computer chose scissors. You win!");
            humanScore++;
            return;
        }
    } else if (humanChoice === "paper") {
        if(computerChoice === "scissors") {
            alert("Computer chose scissors. You lose.");
            computerScore++;
            return;
        } else {
            alert("Computer chose rock. You win!");
            humanScore++;
            return;
        }
    } else {
        if(computerChoice === "rock") {
            alert("Computer chose rock. You lose.");
            computerScore++;
            return;
        } else {
            alert("Computer chose paper. You win!");
            humanScore++;
            return;
        }
    }
}
