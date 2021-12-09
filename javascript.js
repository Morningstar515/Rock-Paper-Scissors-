
let gamecount = 0;
let playerscore = 0;
let compscore = 0;



function game(){
 
    while(gamecount <= 5){ 
        playround()
    }

function playround(){

let playerchoice = prompt("Enter Rock, Paper Or Scissor.")

function compchoice(){
    let choice = ["Rock","Paper","Scissors"];
    return choice[Math.floor(Math.random()*choice.length)]
}


    // Rock 

    if(playerchoice == "Rock" && compchoice() == "Rock"){
        console.log("Tie!");
    }
    else if(playerchoice == "Rock" && compchoice() == "Paper"){
        compscore++;
        console.log("You Lose!");
        console.log("Computer Score:",compscore,"Player Score:",playerscore);
    }
    else if(playerchoice == "Rock" && compchoice() == "Scissors"){
        playerscore++;
        console.log("You Win!");
        console.log("Computer Score:",compscore,"Player Score:",playerscore);
    }
    

    //Paper

    if(playerchoice == "Paper" && compchoice() == "Rock"){
        playerscore++;
        console.log("You Win!");
        console.log("Computer Score:",compscore,"Player Score:",playerscore);
    }
    else if(playerchoice == "Paper" && compchoice() == "Paper"){
        console.log("Tie!");
    }
    else if(playerchoice == "Paper" && compchoice() == "Scissors"){
        compscore++;
        console.log("You Lose!");
        console.log("Computer Score:",compscore,"Player Score:",playerscore);
    }


    //Scissors

    if(playerchoice == "Scissors" && compchoice() == "Rock"){
        compscore++;
        console.log("You Lose!");
        console.log("Computer Score:",compscore,"Player Score:",playerscore);
    }
    else if(playerchoice == "Scissors" && compchoice() == "Paper"){
        playerscore++;
        console.log("You Win!");
        console.log("Computer Score:",compscore,"Player Score:",playerscore);
    }
    else if(playerchoice == "Scissors" && compchoice() == "Scissors"){
        console.log("Tie!");
    }
 gamecount++;

 

    }
    return playerscore,compscore;
}

game()

if(playerscore > compscore){
    console.log("Player Wins!");
    console.log("Computer Score:",compscore,"Player Score:",playerscore);
}
else if(compscore > playerscore){
    console.log("Computer Wins");
    console.log("Computer Score:",compscore,"Player Score:",playerscore);
}
else if(playerscore === compscore){
    console.log("Its a Tie!");
    console.log("Computer Score:",compscore,"Player Score:",playerscore);
}







