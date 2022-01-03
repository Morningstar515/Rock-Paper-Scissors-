

let playerscore = 0;
let compscore = 0;

let playerNum =  document.querySelector(".playerNum")
playerNum.innerHTML =  playerscore;

let compNum = document.querySelector(".compNum")
compNum.innerHTML = compscore;

var playerchoice;
var compchoice;

// Computer Events
var compchoice = computerPlay();


function computerPlay(){
    var choice = ["Rock","Paper","Scissors"]
    return choice[Math.floor(Math.random() * choice.length)]

}
// Button Events

const reset = document.querySelector(".reset");
reset.addEventListener('click', () => {
    location.reload()
})


let rockbtn = document.querySelector(".Rock");
rockbtn.addEventListener('click', rockClick)
function rockClick(){
     playRound("rock",computerPlay());
}


let paperbtn = document.querySelector('.Paper');
    paperbtn.addEventListener('click', paperClick)
    function paperClick(){
        playRound("paper", computerPlay());
    }

let scissorsbtn = document.querySelector('.Scissors');
    scissorsbtn.addEventListener('click', scissorClick)
    function scissorClick(){
        playRound("scissors", computerPlay());
    }
    



function playRound(playerchoice,compchoice){

// Rock

if (playerchoice === "rock" && compchoice === "Rock"){
    
    result.textContent = "Tie"
    playerNum.innerHTML =  playerscore;
    compNum.innerHTML = compscore;
    
    score(playerscore, compscore)
}
else if (playerchoice === "rock" && compchoice === "Paper"){
    
    result.textContent = "You Lose!"
    compNum.innerHTML = ++compscore;

    score(playerscore, compscore)
}
else if(playerchoice === "rock" && compchoice === "Scissors"){
    
    result.textContent = "You Win!"
    playerNum.innerHTML=  ++playerscore;
    
    score(playerscore, compscore)
}

// Paper

if(playerchoice === "paper" && compchoice === "Paper"){
    result.textContent = "Tie"
    playerNum.innerHTML =  playerscore;
    compNum.innerHTML = compscore;
    
    score(playerscore, compscore)
}
else if(playerchoice === "paper" && compchoice === "Rock"){
    result.textContent = "You Win!"
    playerNum.innerHTML=  ++playerscore;
    
    score(playerscore, compscore)
}
else if(playerchoice === "paper" && compchoice === "Scissors"){
    result.textContent = "You Lose!"
    compNum.innerHTML = ++compscore;

    score(playerscore, compscore)
}

// Scissors


if(playerchoice === "scissors" && compchoice === "Scissors"){
    result.textContent = "Tie"
    playerNum.innerHTML =  playerscore;
    compNum.innerHTML = compscore;
    
    score(playerscore, compscore)
    
}
else if(playerchoice === "scissors" && compchoice === "Rock"){
    result.textContent = "You Lose!"
    compNum.innerHTML = ++compscore;

    score(playerscore, compscore)
}
else if(playerchoice === "scissors" && compchoice === "Paper"){
    result.textContent = "You Win!"
    playerNum.innerHTML=  ++playerscore;
    
    score(playerscore, compscore) 
}
  
}


function score(playerscore, compscore){
    if( playerscore === 5 || compscore === 5){

        stopGame()

        if( playerscore > compscore){
            
            const result = document.querySelector("#result")
            result.textContent = "Game Over: Player Wins";
        }
        else if (compscore > playerscore){
            
            const result = document.querySelector("#result")
            result.textContent = "Game Over: Computer Wins";
        }

        
           
            
    }

}


function stopGame(){
    
    rockbtn.removeEventListener('click',rockClick)
    paperbtn.removeEventListener('click', paperClick)
    scissorsbtn.removeEventListener('click', scissorClick)
}


function Game(){
        playRound();
}


Game()


