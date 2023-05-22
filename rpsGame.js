// Rock Paper Scissor game:
const prompt = require("prompt-sync")();

let arrayVariable = ["Rock", "Paper", "Scissors"];
let ranNumPlayer = Math.floor(Math.random() * arrayVariable.length);
let ranNumComputer = Math.floor(Math.random() * arrayVariable.length);
let computerChoice = arrayVariable[ranNumComputer];
let playerChoice = arrayVariable[ranNumPlayer];
let userMessage;

if(playerChoice === computerChoice){
    userMessage = "this result is a tie";
}else if(playerChoice === "Rock" && computerChoice == "Paper"){
    userMessage = `its a lose for the ${playerChoice}`;
}else if(playerChoice === "Rock" && computerChoice === "Paper"){
    userMessage = `its a lose for the ${playerChoice} `;
}else if(playerChoice === "Scissors" && computerChoice === "Rock"){
    userMessage = `its a win for the ${playerChoice}`;
}else if(playerChoice === "Paper" && computerChoice === "Rock"){
    userMessage = `its a win for the ${playerChoice}`;
}else{
    userMessage = "bothsides Lost";
}
console.log(`player selection :${playerChoice} vs computer selection: ${computerChoice}  \n${userMessage}`);


