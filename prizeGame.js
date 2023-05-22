//Prize Game:
const prompt = require("prompt-sync")();

let prize = prompt("choose a random number from 0 to 10: ");
prize = Number(prize);
let message = "My Selection: ";
switch(prize){
    case 0:
    case 2:
        console.log("this poor");
        break;
    case 1:
    case 2:
        console.log("try again!");
        break;
    case 2:
        console.log("not a enough");
        break;
    case 3:
    case 4:
        console.log("coming up");
        break;
    case 4:
    case 5:
        console.log("fair");
        break;
    case 5:
        console.log("still coming up");
        break;
    case 6:
    case 7:
        console.log("Pen and Book");
        break;
    case 7:
        console.log("Just a Pen");
        break;
    case 8:
    case 9:
        console.log("a bag and a wrist watch");
        break;
    case 9:
        console.log("a bag");
        break;
    case 10:
        console.log("you won Hp Laptop");
        break;
    default:
        console.log("sorry no prize for you , make the right selection")


}
console.log(`${message} ${prize}`);

