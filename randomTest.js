// Magic 8-Ball random answer generator:
const prompt = require("prompt-sync")();

let getRandomValue = Math.random();
getRandomValue = Math.floor(Math.random() * 6);


let userName = "Prince";
console.log("hello!", userName);
let getUserInput = prompt("Enter your Question: ");
let eightRandomBall;

switch(getRandomValue){
    case 1:
        eightRandomBall = "Election Preparation are still ongoing, pls wait";
        break;
    case 2:
        eightRandomBall = "sorry we dont have such information at the moment. check later";
        break;
    case 3:
        eightRandomBall = "Did you ask who is the President of Nigeria ?";
        break;
    case 4:
        eightRandomBall = "Try asking , who is a President? ";
        break;
    case 5:
        eightRandomBall = "The President of Nigeria is, Mohammadu Buhari";
        break;
    case 6:
        eightRandomBall = "pls wait while process information, this may take sometime";
        break;
    default:
        eightRandomBall = "Oops! there is no matching result to your search";
        break;
}

console.log(` ${getUserInput}  \n ${eightRandomBall}`);
