
// Create a list of options 
const options = ["rock", "paper", "scissors"]

// Get computer to choose randomly
function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice
}


function playRound(playerSelection, computerSelection) {
    // tie if have the same result
    if(playerSelection === computerSelection) {
        console.log("tie")
    }
    // if player choice rock
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper') {
            console.log("You lose, paper beats rock.")
        }
        else if(computerSelection == 'scissors'){
            console.log("You win, rock beats scissors.")
        }
    }
    // if player choice paper
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors') {
            console.log("You lose, scissors beats paper.")
        }
        else if(computerSelection == 'rock'){
            console.log("You win, paper beats rock.")
        }
    }
    // if player choice scissors
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'paper') {
            console.log("You win, scissors beats paper.")
        }
        else if(computerSelection == 'rock'){
            console.log("You lose, rock beats scissors.")
        }
    }
    // result
    return playerSelection, computerSelection;
}

  
const playerSelection = "Scissors";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection.toLowerCase(), computerSelection));
console.log("player: " + playerSelection)



