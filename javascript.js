console.log(getHumanChoice())

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