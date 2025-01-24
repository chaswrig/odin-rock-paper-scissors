console.log(getComputerChoice())

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