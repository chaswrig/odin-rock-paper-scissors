//Scripts for playing the game.

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});


const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const computerActions = document.querySelector("#computerActions");

function updateScore(){
    humanScoreDisplay.textContent = "Human: " + humanScore;
    computerScoreDisplay.textContent = "Computer: " + computerScore;
}

function playRound(choice){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice(choice);
    determineWinner(computerChoice, humanChoice);
    updateScore();
}

function determineWinner(computerChoice, humanChoice){
    if(computerChoice === humanChoice){
        computerActions.textContent = "Computer chose the same!"
        humanScore++;
        computerScore++;
    } else {
        switch(computerChoice){
            case "rock":
                computerActions.textContent = "Computer chose rock!"
                if(humanChoice === "paper"){
                    humanScore++;
                    // console.log("Human wins!");
                } else {
                    computerScore++;
                    // console.log("Computer wins!");
                }
                break;
            case "paper":
                computerActions.textContent = "Computer chose paper!"
                if(humanChoice === "scissors"){
                    humanScore++;
                    // console.log("Human wins!")
                } else {
                    computerScore++;
                    // console.log("Computer wins!");
                }
                break;
            case "scissors":
                computerActions.textContent = "Computer chose scissors!"
                if(humanChoice === "rock"){
                    humanScore++;
                    // console.log("Human wins!");
                } else {
                    computerScore++;
                    // console.log("Computer wins!");
                }
                break;
            default:console.log("determineWinner default message");
        }
    }
}


function getComputerChoice(){
    let computerChoice;
    let choice = Math.floor(Math.random()* 100) % 3;

    switch(choice){
        case 0:
            computerChoice = "rock";
            // console.log(computerChoice)
            break;
        
        case 1:
            computerChoice = "paper";
            // console.log(computerChoice)
            break;
        
        case 2:
            computerChoice = "scissors";
            // console.log(computerChoice)
            break;
        default: computerChoice = "default";
    }

    return computerChoice;
}

function getHumanChoice(choice){
    let humanChoice;
    switch(choice){
        case "rock":
            humanChoice = "rock";
            console.log(humanChoice);
            break;
        
        case "paper":
            humanChoice = "paper";
            // console.log(humanChoice);
            break;
        
        case "scissors":
            humanChoice = "scissors";
            // console.log(humanChoice);
            break;
        default: humanChoice = "Did not type r, p, or s";
    }

    return humanChoice;
}