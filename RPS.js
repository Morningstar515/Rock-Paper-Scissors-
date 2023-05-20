let comupterScore = document.querySelector(".score-computer")
let playerScore = document.querySelector(".score-one")
let buttons = document.querySelectorAll(".button")
const computerChoice = document.querySelector(".choice-computer")
let playerChoice = document.querySelector(".choice-one")
let result = document.querySelector("#result")
let final = document.querySelector('#final')
let node = document.querySelector('#button-node')

// Inital setup
let roundCounter = 0
playerScore.innerText = 0
comupterScore.innerText = 0

    // Button player selection listener and game activation
    buttons.forEach((buttons) =>{
        buttons.addEventListener('click', (e) =>{
            playerChoice.innerText = e.target.innerText
            computerChoice.innerText = RNG(0,2) 
            result.innerText = PlayRound(playerChoice.innerText,computerChoice.innerText)

            //End condition/reset and removal of listeners
            roundCounter++
            if(roundCounter > 5){
                result.innerText = "Game Over"
                document.querySelectorAll(".button").forEach(buttons =>{
                    buttons.disabled = true
                })
                
                //Reset button and DOM pop up
                let reset = document.createElement('button')
                reset.addEventListener('click',(e)=>{
                    Reload()
                })
                reset.setAttribute('id','reset') 
                reset.innerText = "Play Again?"
                node.appendChild(reset)
                final.innerText = WinCheck(playerScore.innerText,comupterScore.innerText)
                
            } 
        })
    })
 
    
// Game Logic
function PlayRound(player,computer){
  
    switch(player){
        case "Rock":
            if(computer == "Paper"){
                ++comupterScore.innerText
                return "You Lose"
            }
            else if(computer == "Rock"){
                return "Tie"
            }
            else{
                ++playerScore.innerText
                return "You Win"
            }
        case "Paper":
            if(computer == "Rock"){
                ++comupterScore.innerText
                return "You Lose"
            }
            else if(computer == "Paper"){
               return "Tie"
            }
            else{
                ++playerScore.innerText
                return "You Win"
            }
        case "Scissors":
            if(computer == "Rock"){
                ++comupterScore.innerText
                return "You Lose"
            }
            else if(computer == "Scissors"){
                return "Tie"
            }
            else{
                ++playerScore.innerText
                return "You Win"
            }               
    }
}

function Reload(){
    location.reload()
}

//Todo: set up win check
function WinCheck(playerScore,comupterScore){
    if(playerScore > comupterScore){
        return "Player Wins"
    }
    else if(comupterScore > playerScore){
        return "Computer Wins"
    }
    else{
        return "Tie Game"
    }
}

function RNG(min,max){
    let rngChoice = Math.floor(Math.random() * (max-min + 1) + min)
    switch(rngChoice){
        case 0:
            return "Rock"
        case 1:
            return "Paper"            
        case 2:
            return "Scissors"
    }
}