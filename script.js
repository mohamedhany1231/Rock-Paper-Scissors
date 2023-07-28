let computerScore = document.querySelector(".computerScore h1");
let  playerScore = document.querySelector(".playerScore h1");
let announcement = document.querySelector(".announce")
let announcementText = document.querySelector(".announce h1")
let playAgainBtn = document.querySelector(".announce button");
function getComputerChoice () {
    let randomNumber  = Math.random();
    if (randomNumber <= 0.33) {
        return 'Rock';
    } else if (randomNumber <= 0.66) {
        return 'Paper';
    }
    return'Scissors';
}
function announceWin(){
    announcementText.innerText = "YOU WIN";
    announcement.style.visibility = "visible";
    announcement.style.color="green";
}

function announceLose(){
    announcementText.innerText = "YOU LOST";
    announcement.style.visibility = "visible";
    announcement.style.color="red";
}
function resetGame()
{
    playerScore.innerText ="0";
    computerScore.innerText = "0";

}

playAgainBtn.addEventListener("click", () => announcement.style.visibility = "hidden")


 let playRound = ( playerSelection,computerSelection) => {
    console.log(playerSelection ," vs ", computerSelection);
    // check for draw
    if (playerSelection == computerSelection) return 'tie!';
    //  check if player win
    if 
    (
         (playerSelection =='Rock' && computerSelection== 'Scissors' ) ||
         (playerSelection == 'Scissors' && computerSelection== 'Paper' ) ||
         (playerSelection =='Paper' && computerSelection== 'Rock' )         
    ) 
        { 
            playerScore.innerText++;
            if(playerScore.innerText >= 5) 
            {
                resetGame();
                announceWin();
            }
            return  `You Win! ${playerSelection} beats ${computerSelection}`
        }
    else 
    {   
        computerScore.innerText++;
        if(computerScore.innerText >= 5) 
        { 
            announceLose();
            resetGame();
        }
        return  `You Lose! ${computerSelection} beats ${playerSelection}`
    }
   
 }
 


//   buttons event listener

let buttonsDiv = document.querySelector(".buttons");
 buttons = buttonsDiv.querySelectorAll("button");
 buttons = Array.from(buttons);
 buttons.forEach(btn => {
     let value = btn.getAttribute("value")
    btn.addEventListener("click" , () => { 
        playRound(value , getComputerChoice())
       
    } )
});


