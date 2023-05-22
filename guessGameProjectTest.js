// building a guess game;
const prompt = require("prompt-sync")();

let screteWord = "Trust section";
let count = 0;
let userGuess;


while( count < 3){
    if(userGuess !== screteWord && count < 3 ){
        userGuess = prompt("Enter the screte word: ");
        count++;
        if(userGuess !== screteWord && count == 3){
        console.log("you lose! and section is over");
        }else if(userGuess === screteWord ){

        console.log("you win");
        count = 3;
        }   
        }else{
        console.log("Game Over");
        }
    
}
console.log("Game Over!!!");
let ask = prompt("wanna play again: ");
if(ask === "Y"){
    console.log("Tap the Play botton to play!!")
}else{
    console.log("Thanks for playing!");
}
// my version of a number guessing game;