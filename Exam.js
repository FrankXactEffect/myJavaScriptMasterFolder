// Exam Questionaire 
let prompt = require("prompt-sync")();

let attemptExam = true;
while(attemptExam){
    let userOption = prompt("Type Y to attempt exam : ");
    if(userOption === "Y"){
        attemptExam = false;
    }else{
        console.log("You are logged out and cant write exam");
        return;
    }
};

let examQuestions = {i: "what is computer science ?",
                     ii: "who is a computer scientist ?",
                     iii:"Mention an importance of computer science ?",
                     iv: "who is called the father of computer science ?",
                     v:  "A typical computer system is made up of what ?",
                    };
// let test = examQuestions.i;
// console.log(test);
let answerLists = {Oi:  {A:"computer science is the study of computers, it structure and application",
                         B:"computer science is an electronic  machine",
                         C:"computer science is the study of science and technology",
                         D:"computer science is the study of life"},

                  Oii:  {A:"a computer scientist is the study of electronics",
                         B:"a computer scientist is the one who process data and information",
                         C:"a computer scientist is one who studies or practice computer science",
                         D:"a computer scientist is one who teaches computer language"
                         }
};
let userChoice = prompt("Choose a Question to attempt: ");
console.log(userChoice);


if(userChoice === "i"){
    console.log(examQuestions.i);
    console.log(answerLists.Oi);
    let  userAttempt = prompt("Select an option from the above answer list: ");
    console.log(userAttempt);
    if(userAttempt === "A"){
        console.log("Excellent! %100");
        console.log(answerLists.Oi.A);
    }else{
        console.log("A very Poor Performance %0, try harder on your next attempt");
    };
    
    
 }else if(userChoice === "ii"){
    console.log(examQuestions.ii);
    console.log(answerLists.Oii);
    let  userAttempt = prompt("Select an option from the above answer list: ");
    console.log(userAttempt);
    if(userAttempt === "C"){
        console.log("Excellent! %100");
        console.log(answerLists.Oii.C);
    }else{
        console.log("A very Poor Performance %0, try harder on your next attempt");
    };

 };
 console.log("This section is over");








