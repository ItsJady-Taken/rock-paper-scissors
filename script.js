document.addEventListener('DOMContentLoaded', function() {
    
    const rock = document.querySelector('#rock').addEventListener('click', ()=> {
        const computerSelection = getComputerChoice();
        const playerSelection = 'rock';
        document.querySelector('#player').textContent = playerSelection;
        document.querySelector('#computer').textContent = computerSelection;
        document.querySelector('#result').textContent = playRound(playerSelection, computerSelection);
        document.querySelector('#player-score').textContent = playerScore;
        document.querySelector('#computer-score').textContent = computerScore;
        if(playerScore == 5 || computerScore == 5){
            document.querySelector('#result').textContent = playGame();
            document.querySelector('#btn').style.display = 'none';
            document.querySelector('#end').textContent = 'Reload page to play again!';
        }   
    })

    const paper = document.querySelector('#paper').addEventListener('click', ()=> {

        const computerSelection = getComputerChoice();
        const playerSelection = 'paper';
        document.querySelector('#player').textContent = playerSelection;
        document.querySelector('#computer').textContent = computerSelection;
        document.querySelector('#result').textContent = playRound(playerSelection, computerSelection);
        document.querySelector('#player-score').textContent = playerScore;
        document.querySelector('#computer-score').textContent = computerScore;  
        if(playerScore == 5 || computerScore == 5){
            document.querySelector('#result').textContent = playGame();
            document.querySelector('#btn').style.display = 'none';
            document.querySelector('#end').textContent = 'Reload page to play again!';
        }
    })

    const scissors = document.querySelector('#scissors').addEventListener('click', ()=> {
        const computerSelection = getComputerChoice();
        const playerSelection = 'scissors';
        document.querySelector('#player').textContent = playerSelection;
        document.querySelector('#computer').textContent = computerSelection;
        document.querySelector('#result').textContent = playRound(playerSelection, computerSelection);
        document.querySelector('#player-score').textContent = playerScore;
        document.querySelector('#computer-score').textContent = computerScore;
        if(playerScore == 5 || computerScore == 5){
            document.querySelector('#result').textContent = playGame();
            document.querySelector('#btn').style.display = 'none';
            document.querySelector('#end').textContent = 'Reload page to play again!';
        }
        
    })
    
   
})

// Create a list of options 
const options = ["rock", "paper", "scissors"]

// Track the computer and your scores
let playerScore = 0, computerScore = 0;

// Get computer to choose randomly
function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}   

// Get player choice if it valid and case sensitive
function getPlayerChoice() {
    let is_valid = false;
    while(is_valid == false) {
        const playerChoice = prompt("rock paper or scissors:");
        const allLowerCase = playerChoice.toLowerCase();
        if(playerChoice == null) {
            continue;
        }
        if(options.includes(allLowerCase)) {
            is_valid = true;   
            return allLowerCase;
        }
        
    }
    
}


function playRound(playerSelection, computerSelection) {  
   
    // tie, if have the same result
    if(playerSelection === computerSelection) {
        return("Round: Tie, no one win.");
    }
    // if player choose rock
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper') {
            computerScore++;
            return("Round: You lose, paper beats rock.");   
        }
        else if(computerSelection == 'scissors'){
            playerScore++;
            return("Round: You win, rock beats scissors.");   
        }
        return playerScore, computerScore;
    }
    // if player choose paper
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors') {
            computerScore++;
            return("Round: You lose, scissors beats paper.")
            
        }
        else if(computerSelection == 'rock'){
            playerScore++;
            return("Round: You win, paper beats rock.")      
        }
        return playerScore, computerScore;
    }
    // if player choose scissors
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'paper') { 
            playerScore++;
            return("Round: You win, scissors beats paper.")             
        }
        else if(computerSelection == 'rock'){  
            computerScore++;
            return("Round: You lose, rock beats scissors.")    
        }
        return playerScore, computerScore;
    }  
    
    return playerSelection, computerSelection;
}

// play five round of the game 
function playGame() { 
 
   if(playerScore > computerScore) {
    return "Congratulation! YOU WIN"
   }
    if(playerScore < computerScore) {
    return "Too Bad! YOU LOSE!";
   }
   else {
    return "It's a TIE";
   }    
}




