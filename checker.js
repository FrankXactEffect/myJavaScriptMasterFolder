//Friend checker game:

const prompt = require("prompt-sync")();

let userName = "Frank";
let enterName = prompt("Enter a Name: ");
let confirmation;

switch(enterName){
    case "Mike":
        confirmation = `Mike is a friend to ${userName}`;
        break;
    case "John":
        confirmation = `John is a friend to ${userName}`;
        break;
    case "Dima":
        confirmation = `Dima is a friend to ${userName}`;
        break;
    case "Samson":
        confirmation = `Samson is a friend to ${userName}`;
        break;
    case "Godson":
        confirmation = `Godson is a friend to ${userName}`;
        break;
    default:
        confirmation = `Sorry but you are not a friend to ${userName}`;

}
console.log(confirmation)
