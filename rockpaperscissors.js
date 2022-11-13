/*Module: Web Design and Client Side Scripting. Week 8 Lab - If Statements
Student: Maria Marlene Pereira | Student Nr 22115234
Task: Using if statements, create a rock, paper, scissors game.
========
RULES OF THE GAME:
Rock wins against scissors.
Scissors win against paper.
Paper wins against rock.
*/

//function 'Start' executes upon being called
function start(){

    //declare variables to store the user input    
var nameone; // It's not cessary to declare the variable as global, but it's good to do it just in case we need to use t otside of this fundtion
var playerone;  
var nametwo;
var playertwo;

// Get user input, using the method Prompt() 
nameone=prompt("Player #1, what's your name?"); 
playerone=(prompt(nameone+ ", choose Rock, Paper or Scissors")); 
nametwo=prompt("Player #2, what's your name?"); 
playertwo=(prompt(nametwo+ ", choose Rock, Paper or Scissors"));

// if statements will check the input of player1 against the input of player2  and will output the result

    if(playerone=="Rock" && playertwo=="Scissors"){ 
        alert ("Player #1, " +nameone+ " won!");
    }
    else if (playerone=="Scissors" && playertwo=="Paper"){  
        alert ("Player #1, " +nameone+ " won!");
    }
    else if (playerone=="Paper" && playertwo=="Rock"){  
        alert ("Player #1, " +nameone+ " won!");
    }
    else if (playertwo=="Rock" && playerone=="Scissors"){
        alert ("Player #2, " +nametwo+ " won!");
    }
    else if (playertwo=="Scissors" && playerone=="Paper"){  
        alert ("Player #2, " +nametwo+ " won!");
    }
    else if (playertwo=="Paper" && playerone=="Rock"){  
        alert ("Player #2, " +nametwo+ " won!");
    }
    else if (playertwo==playerone){  
        alert ("Tie! Both players chose the same option");
    }
    else if (playerone==playertwo){  
        alert ("Tie! Both players chose the same option");
    }
    else {
        alert ("Attention, there was a typo or you broke the rules!");
    }
    }
