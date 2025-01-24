//Scripts for playing the game.

let humanScore = 0;
let computerScore = 0;

playRound();

function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    determineWinner(computerChoice, humanChoice);
}

function determineWinner(computerChoice, humanChoice){
    if(computerChoice === humanChoice){
        console.log("Tie!");
    } else if (computerChoice === "rock") {
        let outcome = "";
        switch(humanChoice){
            case "paper":
                outcome = "Humans win!";
                break;
            
            case "scissors":
                outcome = "Computers win!";
                break;
            default: outcome = "Tie after all?"
        }
            
        console.log(outcome);
    } else if (computerChoice === "paper") {
        let outcome = "";
        switch(humanChoice){
            case "scissors":
                outcome = "Humans win!";
                break;
            
            case "rock":
                outcome = "Computers win!";
                break;
            default: outcome = "Tie after all?"
        }
            
        console.log(outcome);
    } else {
        let outcome = "";
        switch(humanChoice){
            case "rock":
                outcome = "Humans win!";
                break;
            
            case "paper":
                outcome = "Computers win!";
                break;
            default: outcome = "Tie after all?"

        console.log(outcome);
        }
    }
    
}


function getComputerChoice(){

    let computerChoice;
    let choice = Math.floor(Math.random()* 100) % 3;

    switch(choice){
        case 0:
            computerChoice = "rock";
            break;
        
        case 1:
            computerChoice = "paper";
            break;
        
        case 2:
            computerChoice = "scissors";
            break;
        default: computerChoice = "default";
    }

    return computerChoice;
}

function getHumanChoice(){
    let humanChoice
    choice = prompt("Rock, paper, or scissors? Type r, p, or s")
    switch(choice){
        case "r":
            humanChoice = "rock";
            break;
        
        case "p":
            humanChoice = "paper";
            break;
        
        case "s":
            humanChoice = "scissors";
            break;
        default: humanChoice = "Did not type r, p, or s";
    }

    return humanChoice;
}