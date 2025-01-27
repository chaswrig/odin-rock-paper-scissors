//Scripts for playing the game.

let humanScore = 0;
let computerScore = 0;

playRound();
playRound();
playRound();
playRound();
playRound();
console.log("Final Score: " + humanScore + " to " + computerScore);

function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    determineWinner(computerChoice, humanChoice);
}

function determineWinner(computerChoice, humanChoice){
    if(computerChoice === humanChoice){
        console.log("Tie!");
    } else {
        switch(computerChoice){
            case "rock":
                if(humanChoice === "paper"){
                    humanScore++;
                    console.log("Human wins!");
                } else {
                    computerScore++;
                    console.log("Computer wins!");
                }
                break;
            case "paper":
                if(humanChoice === "scissors"){
                    humanScore++;
                    console.log("Human wins!")
                } else {
                    computerScore++;
                    console.log("Computer wins!");
                }
                break;
            case "scissors":
                if(humanChoice === "rock"){
                    humanScore++;
                    console.log("Human wins!");
                } else {
                    computerScore++;
                    console.log("Computer wins!");
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
            console.log(computerChoice)
            break;
        
        case 1:
            computerChoice = "paper";
            console.log(computerChoice)
            break;
        
        case 2:
            computerChoice = "scissors";
            console.log(computerChoice)
            break;
        default: computerChoice = "default";
    }

    return computerChoice;
}

function getHumanChoice(){
    let humanChoice
    choice = prompt("Rock, paper, or scissors? Press 1 for rock, 2 for paper, or 3 for scissors")
    switch(choice){
        case "1":
            humanChoice = "rock";
            console.log(humanChoice);
            break;
        
        case "2":
            humanChoice = "paper";
            console.log(humanChoice);
            break;
        
        case "3":
            humanChoice = "scissors";
            console.log(humanChoice);
            break;
        default: humanChoice = "Did not type r, p, or s";
    }

    return humanChoice;
}