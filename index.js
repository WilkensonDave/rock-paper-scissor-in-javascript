"use strict"

const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");

const numberMoves = document.querySelector(".nb-moves");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const restultPlayer = document.querySelector(".result");
const allButtons = document.querySelectorAll(".btn");
//scissor beats paper, rock beats scissor, paper beats rock
  


const finalResultMessage = (winner,  loser) =>{
    document.querySelector(".game-content").style.display = "none";
    let winnerText = document.querySelector(".wins");
    let displayDiv = document.querySelector(".final-result");
    let restartBtn = document.querySelector(".restartbtn");
    displayDiv.style.display="block";
    winnerText.textContent = `Amazin ${winner} wins over the ${loser}✅🎉.`;

    restartBtn.addEventListener("click", ()=>{
        document.querySelector(".game-content").style.display = "block";
        displayDiv.style.display="none";
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        numberMoves.textContent = 10;
    });
}

const getScoreFinalResult = (score1, score2) => {
    
    if(score1 > score2){
        finalResultMessage('player', 'computer');
    }else if(score2 > score1){
        finalResultMessage('computer', 'player');
    }else if(score1 === score2){
        let winnerText = document.querySelector(".wins");
        winnerText.textContent = "Ahh it's a Tie Game!!🏮🌞";
    }
}
const computerWins = () =>{
    let movesLeft = Number.parseInt(numberMoves.textContent);
    movesLeft -= 1
    restultPlayer.textContent = "Computer wons";
    let score2 = Number.parseInt(computerScore.textContent);
    score2 += 1
    computerScore.textContent = score2;
    numberMoves.textContent = movesLeft;
    if(movesLeft <= 0){
        let score1 = Number.parseInt(playerScore.textContent);
        let score2 = Number.parseInt(computerScore.textContent);
        getScoreFinalResult(score1, score2);
    }
}

const playerWins = () =>{
    let movesLeft = Number.parseInt(numberMoves.textContent);
    movesLeft -= 1
    restultPlayer.textContent = "Player Wons";
    let score1 = Number.parseInt(playerScore.textContent);
    score1 += 1
    playerScore.textContent = score1;
    numberMoves.textContent = movesLeft;

    if(movesLeft === 0){
        let score1 = Number.parseInt(playerScore.textContent);
        let score2 = Number.parseInt(computerScore.textContent);
        getScoreFinalResult(score1, score2);
    }
}


const playGame = ()=>{
    allButtons.forEach((btn) =>{
        btn.addEventListener("click", (e) =>{
            let playerChoice = e.target.textContent.toLowerCase();
            console.log(playerChoice);
            let computer = Math.floor(
                Math.random() * allButtons.length - 1) + 1;
            
            let computerChoice = allButtons[computer].textContent.toLocaleLowerCase();
            console.log(computerChoice);

            if(playerChoice === computerChoice){
                restultPlayer.textContent = "Tie game!"
            }


            if(playerChoice === "rock" && computerChoice === "scissor"){
                playerWins();
            }

            if(playerChoice === "scissor" && computerChoice ==="rock"){
                computerWins();
            }

            if(playerChoice === "rock" && computerChoice === "paper"){
                computerWins();
            }
            if(playerChoice === "paper" && computerChoice === "rock"){
                playerWins();
            }

            if(playerChoice === "scissor" && computerChoice === "paper"){
                playerWins();
            }

            if(playerChoice === "paper" && computerChoice === "scissor"){
                computerWins();
            }
            
        });
    });
}

playGame();
