const buttons = document.querySelectorAll('.your-button-selector');
const computerOptions = ["rock", "paper", "scissors"];
const gameLogText = document.querySelector('#game-log');
const playAgainBtn = document.querySelector('#play-again');
const playerMoveText = document.querySelector('#player-move');
const computerMoveText = document.querySelector('#computer-move');
const playerScoreText = document.querySelector('#player-score');
const computerScoreText = document.querySelector('#computer-score');

const playerNameText = document.querySelector('#player-name');
const getName = prompt("Enter your name, to start the Game. Short name only!");
if (getName == ""){
    alert('No name?');
} else {
    playerNameText.innerHTML = getName;
}
// generate random options
function getComputerChoice() {
    const select = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return select;
}


function checkWinner(playerChoice, computerChoice){
    const rockWin = (playerChoice == "rock" && computerChoice == "scissors");
    const paperWin = (playerChoice == "paper" && computerChoice == "rock");
    const scissorsWin = (playerChoice == "scissors" && computerChoice == "paper");

    if (playerChoice == computerChoice){
        return "Tie";
    } else if (rockWin || paperWin || scissorsWin){
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(player, computer){
    const result = checkWinner(player, computer);
    if (result == "Tie"){
        return `${gameLogText.innerHTML = "It's a Tie!"}
                ${playerMoveText.innerHTML = player}
                ${computerMoveText.innerHTML = computer}`;
    } else if (result == "Player"){
        return `${gameLogText.innerHTML = "You Win!"}
                ${playerMoveText.innerHTML = player} 
                ${computerMoveText.innerHTML = computer}`;
    } else {
        return `${playerMoveText.innerHTML = player}
                ${gameLogText.innerHTML = "You Lose!"}
                ${computerMoveText.innerHTML = computer}`;
    }
}



let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    let playerSelection = button.id;
    let computeSelection = getComputerChoice();
    let scoreResult = checkWinner(playerSelection, computeSelection);

    playRound(playerSelection, computeSelection);
    

    if (scoreResult == "Player"){
        playerScoreText.innerHTML = ++playerScore;
    } else if (scoreResult == "Computer"){
        computerScoreText.innerHTML = ++computerScore;
    }
  
    if (playerScore === 5 || computerScore === 5){

        if (playerScore === 5){
            playerScoreText.innerHTML = playerScore;
            computerScoreText.innerHTML = computerScore;
            gameLogText.innerHTML = `GAME OVER!, <span style="color: #ffae00;">${getName} Win!</span>`;
        } else if (computerScore === 5){
            computerScoreText.innerHTML = computerScore;
            playerScoreText.innerHTML = playerScore;
            gameLogText.innerHTML = `GAME OVER!, <span style="color: #c91971;">You Lose ${getName}!</span>`;
        } else if (playerScore === 5 && computerScore == 5) {
            gameLogText.innerHTML = "GAME OVER!, Draw!";
        }
    }
        if (gameOver()){
                // display the try again btn
                playAgainBtn.style.display = 'block';

                //disable all buttons
                buttons.forEach((btn) => {
                btn.disabled = true;
            });
        }
    });
});

function gameOver(){
    return playerScore === 5 || computerScore === 5;
}

playAgainBtn.addEventListener("click", () =>{
    playerScore = 0;
    computerScore = 0;
    playerScoreText.innerHTML = playerScore;
    computerScoreText.innerHTML = computerScore;

    computerMoveText.innerHTML = "";
    playerMoveText.innerHTML = "";

    buttons.forEach((button) =>{
        button.disabled = false;
    });

    playAgainBtn.style.display = 'none';
    gameLogText.innerHTML = "";
});





