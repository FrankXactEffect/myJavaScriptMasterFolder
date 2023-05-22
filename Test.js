const prompt = require("prompt-sync")();


let eightBall;
let greeting = "Hello! Prince";

do{
    
    console.log(greeting);
    let userQuestion = prompt("Enter your Question: ");
    let arrayResponse = ["please wait while process you information", "there is a probably cause that it may rain","it rained yesterday", "its gonna be a sunny day", "its gonnan be cold today","certainly, your umbrellas closed", "thank you for asking", "we've got a cloudy wether today"];
    let randomChoice = Math.floor(Math.random() * 8);


    switch(randomChoice){
        case 1:
            eightBall = arrayResponse[1];
            break;
        case 2:
            eightBall = arrayResponse[2];
            break;
        case 3:
            eightBall = arrayResponse[3];
            break;
        case 4:
            eightBall = arrayResponse[4];
            break;
        case 5:
            eightBall = arrayResponse[5];
            break;
        case 6:
            eightBall = arrayResponse[6];
            break;
        case 7:
            eightBall = arrayResponse[7];
            break;
        case 8:
            eightBall = arrayResponse[8];
            break;
        default:
            eightBall = "0ops! can't find any response at the moment";
    }

console.log(`${userQuestion}\n${eightBall}`);

}while (true);



