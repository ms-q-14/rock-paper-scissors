let playerScore = 0;
let computerScore = 0;


function getComputerChoice ()  {
    let compChoice = '';
    let compSelection = Math.floor(Math.random() * 3);
        if (compSelection === 0) {
            compChoice = 'rock';
        }
        else if (compSelection === 1){
            compChoice ='paper';
        }
        else if (compSelection === 2){
            compChoice = 'scissors';
        }
        return compChoice;

};

function roundPlay (){
    // let playerInput = prompt('Choose one of the three: Rock, Paper, or Scissors');
    // let playerInputString = String(playerInput);
    // let lowerPlayerInput = playerInputString.toLowerCase();

    //Rock Player Selection 

    if (lowerPlayerInput === 'rock') {
        if (compChoice === 'rock'){
            return "DRAW YOU BOTH CHOSE ROCK!";
        }
        else if (compChoice === 'paper'){
            computerScore ++;
            return "YOU LOSE PAPER BEATS ROCK!";
        }
        else if (compChoice === 'scissors') {
            playerScore ++;
            return "YOU WIN ROCK BEATS SCISSORS!";
        }
    }
    //Paper player selection
    else if(lowerPlayerInput === 'paper'){
        if (compChoice === 'rock'){
            playerScore ++;
            return "YOU WIN PAPER BEATS ROCK!";
        }
        else if(compChoice === 'paper'){
            return "DRAW YOU BOTH CHOSE PAPER!";
        }
        else if(compChoice === 'scissors'){
            computerScore ++;
            return "YOU LOSE SCISSORS BEATS PAPER!";
        }
    }
    //Scissors player selection
    else if (lowerPlayerInput === 'scissors'){
        if (compChoice === 'rock'){
            computerScore ++;
            return 'YOU LOSE ROCK BEATS SCISSORS!';
        }
        else if(compChoice === 'paper'){
            playerScore ++;
            return "YOU WIN SCISSORS BEATS PAPER!";
        }
        else if (compChoice === 'scissors'){
            return "DRAW YOU BOTH CHOSE SCISSORS!"
        }
    }
    return "Your score: " + playerScore + " Computer score: " + computerScore;
};


