const prompt = require("prompt-sync")();

// funcion that adds number:

/*let a = 4;
let b = 5;
let c = 3;

function solveTheQuadratic(a, b, c){
    
    let x =  b - ((b ** 2) - 4 * a * c) ;
    x = Math.sqrt(x);
    return x / 2 * a;

}

let y = solveTheQuadratic(a, b, c);
console.log(y);*/

//add Two numbers
/*function addTwoNumbers(num1, num2){
    let solve = num1 + num2;
    return solve;
};

let a = 2;
let b = 7;

let x = addTwoNumbers(a , b);
console.log(x);
let y = addTwoNumbers(5,6);
console.log(y);*/

//program that randomly describe an input;

/*let arrayOfDescriptiveWords = ["He is tall", "He is cute and Handsome", "He is 24 yrs of age", "He is dark or fair in complexion"];

function userPrompt(){
    let askUser = prompt("Enter a name: ");
    let randomValueOfArray = Math.floor(Math.random() * arrayOfDescriptiveWords.length);
    randomValueOfArray = arrayOfDescriptiveWords[randomValueOfArray];
    console.log(askUser, randomValueOfArray);

}
userPrompt();*/

//Creating a Basic Calculator with Function;
/*let num1 = 2;
let num2 = 3;
let opt = "+";

function retrieves(num1, num2, opt){
    switch(opt){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        default:
            return num1 + num2;
    }
}
//Modifying built calculator:*/

/*let addTwoValues = (a, b) => {
    return a + b;
}

let x = addTwoValues(2,4);
//console.log(x);
let emptyArray = [];

Outter:
for(let i = 0; i < 10; i++){
    emptyArray.push([]);
    Inner:
    for(let j = 0; j < 10; j++){
        emptyArray[i].push(addTwoValues(i * 5, j * j));
        if(emptyArray[i][j] === 10){
            console.log("missing values");
            continue;
        }else{
            emptyArray[i];
        }

    }
    //console.log("i ran, because inner loop skipped a value ");
}


console.log(emptyArray);
//console.table(emptyArray);*/


//using IIFE to create an immediately invoke function:

/*let variableValue = 1000;
console.log(variableValue);
(() => {

    variableValue = 2000
    console.log(variableValue);
    
})();

let resultVariable = (()=>{
    variableValue = 3000
    return variableValue
})();
console.log(resultVariable);
console.log(variableValue);

((...n) => {

    variableValue = "my name is " + n;
    return variableValue;

})("Frank");
console.log(variableValue);*/

/*let factorial = number =>{
    let y = number - 1;
    if(number === 0){
        return 1;
    }else{
        return number * factorial(y);
    }
}
let y = factorial(7);
console.log(y);

var x = 3;
if(x > 0){
    let result = factorial(x);
    console.log(`the factorial of ${x} is equal to : ${result}`);
}*/

/*let randomUntilFive = (result = 0, count = 0) => {
    if(result === 5){
        console.log(`The random result: ${result}`);
        console.log(`How many times random is executed: ${count}`);
        return;
    }
    result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    count++;
    randomUntilFive(result, count);
}
randomUntilFive();*/



//using recursive function to calculate the factorial of a number:

/*let factorial = num =>{
    
    if(num === 0){
        return 1;
    }else{
        let y = num * factorial(num - 1);
        return y;
    }
    
}
let x = factorial(7);
console.log(x);*/






/*let fibunacci = (a, b ) =>{
    let array1 = [];
    
    for(let i = 0; i < 20; i++){
        array1.push(a);
        let tempValue = a + b;
        a = b;
        b = tempValue;  
    }
    console.log(array1);
}
fibunacci(0,1);*/


/*let a = (n) => {
    let text = "";
    let arr1 = '"i", "love", "you"';
    
    if(n > 0){
        return text += arr1;
    }else{
        return a(--n);
    }

}
console.log(a(3));*/


/*let doOuterFunctionStuff = nr => {
    //console.log("Outer function");
    doInnerFunctionStuff(nr)
    function doInnerFunctionStuff(x){
        //console.log(x + 7)
        let z = 10;
       //console.log("i can do outer stuff function: ", nr)
    }
    //console.log("Not accessible:", z);
}
doInnerFunctionStuff(2);*/

/*
let start =  10;


let takesOneArgument =  countDown =>{
    console.log(countDown);
    if(countDown < 1){
        return;
    }else if(!(countDown < 1)){
        takesOneArgument(--countDown);
    }
}
takesOneArgument(start);

function second(countDown){
        console.log(countDown);
        if(countDown > 0){
            --countDown;
            return second(countDown);
        }
    return;
}
second(start);*/


let add = (x , y) => {
    let showMessage = text => console.log(text);
    let sum = x + y;
    showMessage("sum is " + sum);
}
add(2,4);

let choiceOfWords = ["exactly", "confidently", "confinement", "love", "care"];

let randomlyCalls = () =>{
    let random = Math.floor(Math.random() * choiceOfWords.length);
    let x = choiceOfWords[random];
    let countStuff = 0;
    function conditionOfChoice(){
        if(x === choiceOfWords[0]){
            console.log("both books are exactly the same");
        }else if(x === choiceOfWords[1]){
            console.log("i confidently said so");
        }else if(x === choiceOfWords[2]){
            console.log("that is a confinement latter");
        }else if(x === choiceOfWords[3] || x === choiceOfWords[4]){
            countStuff++;
            console.log("True Love Cares!");
            console.log(`it took ${countStuff} to get "True love cares"`);
        }
    }
    conditionOfChoice();
}
randomlyCalls();















































































































































































































































































































































































 




     
