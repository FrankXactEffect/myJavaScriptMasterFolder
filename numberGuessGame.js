const prompt = require("prompt-sync")();
// Another version of  number guessing game;

let maxValue = 5;
let randomNumber = Math.floor(Math.random() * 6);
 console.log(randomNumber);

let guessAnswer;
guessAnswer = true;                 
// can be updated to true, if userGuess matches;

while( guessAnswer){
    let userGuess = Number(prompt("Enter a number between 1 and 5: "));
    console.log(userGuess);

    if(userGuess === randomNumber){
        console.log("you guessed right!");
        guessAnswer = false;
    }else{
        console.log("Your Guess was to high or low");
    };

};