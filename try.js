// const prompt = require("prompt-sync")();

// const { table } = require("console");

// let myWork = [];

// for(let i = 0; i < 11; i++){
//     // myWork.push({name:`Lesson ${i}`, status:true});
//     let stat = i % 2 == 0 ? true : false;
//     let temp = {name: `Lesson ${i}`,status:stat};
//     myWork.push(temp);
// }
// console.log(myWork);

// let listOfItems = [];
// for(let i = 0; i < 3; i++){
//     listOfItems.push([]);
//     for(let j = 0; j < 7; j++){
//         listOfItems[i].push(i * j);
//     }
// }

// // console.log(listOfItems);
// console.table(listOfItems);


// // let row_array = ["Name","Age","Gender","Date"];
// // let main_table = [];
// // for(let s = 0; s < 4; s++){
// //     main_table.push([]);
// //     for(let c = 0; c < row_array.length; c++){
// //         main_table[s].push(row_array[c]);
// //     }
// // }
// // console.table(main_table);

// // let myTable = [];
// // let rowMaxValue = 5;
// // let columnMaxValue = 10;
// // let counter = 0;
// // for(let i = 0; i < rowMaxValue; i++){
// //     let temTable = [];
// //     for(let j = 0; j < columnMaxValue; j++){
// //         counter++;
// //         temTable.push(counter);
        
// //     }
// //     myTable.push(temTable);
// // }
// // console.table(myTable);

// // let names = ["Chantal", "John","Maxime","Bobbie","Jair"];
// // for(let i = 0; i < names.length; i++){
// //     if(names[i].startsWith("M")){
// //         delete names[i];
// //         continue;
// //     }
// //     names[i] = "hello " + names[i];
// // }
// // console.log(names);

// let gridArray = [];
// let numberOfCells = 64;
// let counter = 0;
// let rowArray = [];
// for(let i = 0; i < numberOfCells + 1; i++){
//     if(counter % 8 == 0){
//         if(rowArray == undefined){
//             console.log(undefined);
//         }else{
//             gridArray.push(rowArray);
//         }
//         rowArray.length = 0;
//     }
//     counter++;
//     let temp = counter;
//     rowArray.push(temp);

//     // if(counter == numberOfCells){
//     //     gridArray.push(rowArray);
//     // }
// };
// console.log(gridArray);

// let emptyArray = [];

// for(let i = 0;  i < 11; i++){
//     emptyArray.push(i);
//     if(i == 4){
//         delete emptyArray[i];
//         // emptyArray.splice(4,0,4);
//         if(emptyArray[4] == null){
//             emptyArray.splice(4,0,"this number have been deleted");
//         }else{
//             console.log("difficult to figure out");
//         }
//     }
// }
// console.log(emptyArray);
// for(let j = 0; j < emptyArray.length; j++){
// }
// console.log(emptyArray);
// for(temp of emptyArray){
//     console.log(temp);
// }
// for(let get in emptyArray){
//     console.log(get);
// }
// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black"
// };

// for(let prop in car){
//     console.log(car[prop]);
//     console.log(prop);
// }

// let array = [{color:"blue", age:25,sex:"female"}]
// for(let i = 0; i < array.length; i++){
//     array[i].age;
//     array[i].color;
//     array[i].sex;
//     console.log(array);
// }
// for(rays in array){
//     console.log(array[rays]);
// }

// let car = {
//     model:"Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black"
// };

// let item = Object.entries(car);
// console.log(item);

// for(let [array, items] of Object.entries(car)){
//     console.log(array, ":", items);
// }


// let arrayKeys = Object.keys(car);
// console.log(arrayKeys);
// for(let item of arrayKeys){
//     console.log(item);
// }

// 

// let isFound = false;
// for(let i = 0; i < cars.length; i++){
//     if (cars[i].year < 2023){
//         if(cars[i].color === "black"){
//             isFound = true;
//             console.log("i have found it!");
//             let showIndex = isFound ? console.log(cars[i].year + "\n" + cars[i].color + cars[i].make ) : console.log("sorry could not display result");
//             console.log(showIndex);
//             break;
//         }else{
//             console.log("it is not it!");
//         }
//     }
// }

// let someLargeNumberOfArray = [20,39,40,30,33,94,31,42,49];
// let container;
// let remaining;
// while(true){
//     if(someLargeNumberOfArray[0] != 42){
//         container = someLargeNumberOfArray.shift();
//         // container.push(someLargeNumberOfArray.shift()); 
//     }else{
//         console.log("its been found");
//         remaining = someLargeNumberOfArray.length;
//         console.log(remaining);
//         console.log(someLargeNumberOfArray);
//         if(remaining  == 2){
//            let askUser = prompt("should the array be refilled with the content of the container? ");
//            if(askUser == "yes"){
//               someLargeNumberOfArray.push(container);
//               console.log(someLargeNumberOfArray.length);
//               break;
//             }else{
//                 console.log(remaining);
//             }
//         }
//     }       // console.log(someLargeNumberOfArray.length);
// }
// let stringWord = "i am not ready";
// let splitIt = stringWord.split(" ");
// console.log(splitIt);
// for(let some of splitIt){
//     if(some == "am"){
//         break;
//     }
//     console.log(some + " am not ready");
// }




// let cars = [
//     {
//         model: "Golf",
//         make: "Volkswagen",
//         year: 1999,
//         color: "black"
//     },
//     {
//         model: "Picanto",
//         make: "Kita",
//         year: 2020,
//         color: "red"
//     },
//     {
//         model: "Peugeot",
//         make: "208",
//         year: 2021,
//         color: "black"
//     },
//     {
//         model: "Fiat",
//         make: "Punto",
//         year: 2020,
//         color: "black"
//     }
// ];

// for(let car of cars){
//     if(car.color !== "black"){
//         continue;
//     }
//     if(car.year <= 2020){
//         console.log("we could get this ", car);
//     }
// }

// let generateAray = [];
// for(let i = 0; i < 10; i++){
//     if(i == 6){
//         console.log("six has been skipped");
//         continue;
//     }
//     generateAray.push(i);
    
// }
// console.log(generateAray);
// let findAnumber = generateAray.find(e => e == 6);
// console.log(findAnumber);
// let check = findAnumber == undefined ? true : false;
// console.log(check);
// let addIf_isTrue = check ? generateAray.splice(6,0, 6) : generateAray.splice(5,1);
// console.log(addIf_isTrue);


// let i = 1;
// loop1:
// while(i < 50){
//     i++;
//     if(i % 2 !== 0){
//         continue loop1;  
//     }
//     console.log(i + " / 2 = ",i/2 );
// }

// let stringVlaues = " ";

// let numberToSkip = 4;

// for(let i = 0; i < 10+1; i++){
//     if( i == numberToSkip){
//         // continue;
//         break;
//     }
//     stringVlaues += i
// }
// console.log(stringVlaues);

// let groups = [
//     ["Martin", "Daniel", "Kieth"],
//     ["Margot", "Martina", "Ali"],
//     ["Helen", "Jonah", "Sambikos"]
// ];

// for(let i = 0; i < groups.length; i++){
//     let matches = 0;
//     let notMatched = 0;
//     for(let j = 0; j < groups[i].length; j++){
//         if(groups[i][j].startsWith("M")){
//             matches++;
//         }else if(!(groups[i][j].startsWith("M"))){
//             notMatched++;
//         }
//         if((matches == 2)){
//             console.log("Found a group with two names starting with M: ");
//             console.log(groups[i]);
//         }
//         if(notMatched == 3){
//             console.log("Found a group with three names that didnt match with M: ");
//             console.log(groups[i]);
//         }
//     }
    
// }
// outer:
// for(let group of groups){
//     inner:
//     for(let member of group){
//         if(member.startsWith("M")){
//             console.log("found one start with M: ", member);

//             break inner;
//         }
//     }
// }
// multiplication table chapter project:

// let finalMultiTable = [];

// let valueVariable = 20;

// outer:
//     for(let i = 0; i < valueVariable + 1; i++){
        
//         // finalMultiTable.push([]);
//         let temp = [];
//         finalMultiTable.push(temp);
//         inner:
//         for(let j = 0; j < 10+1; j++){
//             temp = i * j;
//           finalMultiTable[i].push(temp);
//         }
//     }
// console.log(finalMultiTable);
// console.table(finalMultiTable);

// const myArray = [1,5,7];
// for(el in myArray){
//     console.log(Number(el));
//     el = Number(el) + 5;
//     console.log(el);
// }

// console.log(myArray);


// function partyApp(){
//     let is_working = true;
//     do{
//         console.log(`***welcome to the party***`);
//         console.log("1. Age 1 - 12\n2. Age 13 - 18\n3. Age 18 - 30\n4. Age 31-above");
//         let userName = prompt("what is your name: ");
//         let howOldIsUser = Number(prompt("how old are you: "));
//         for(let i = 0; i < 40; i++){
//             if(i === howOldIsUser){
//                 if(i <= 12){
//                     console.log(" free entry!!");
//                     break;
//                 }else if((i <= 13) || (i <= 18)){
//                     console.log(userName + " $500");
//                     break;
//                 } else if ((i >= 18) && (i < 30)){
//                     console.log(userName + " $1000");
//                     break;
//                 }else if((i === 31) || (i > 31)){
//                     console.log(userName + " live  at once!");
//                     break;
//                 }
//             }
//         }
//         // switch(howOldIsUser){
//         //     case "1":
//         //          console.log(`${userName} you are welcome!,your entry is free`);
//         //          break;
//         //     case "2":
//         //          console.log(`${userName} you are eligible, but have a ticket fee of $500`);
//         //          break;
//         //     case "3":
//         //         console.log(`${userName} you are eligible, but have a ticket fee of $1000`);
//         //         break;
//         //     case "4":
//         //         console.log(`${userName} you are not eligible for this party, kindly live this premises`);
//         //         break;
//         //     default:
//         //         console.log(`invalid try again`);
//         //         break;   

//         // }

//     }while (!(is_working == true));
// }

// partyApp();

// let addNumbers = function (fig1, fig2){
//     let result = fig1 + fig2;
//     return result;
   
// }
// let add = addNumbers(2,5);
// console.log(add);
// let num1 = 5;
// let num2 = 8;
// let num3 = 7;

// let arrayNumber = [3, 5, 91];
// let maxNumber = function(){
//     if ((arrayNumber[0] > arrayNumber[1])&&(arrayNumber[0]> arrayNumber[2])){
//         console.log(arrayNumber[0]);
//     }else if((arrayNumber[1] > arrayNumber[0])&&(arrayNumber[1]> arrayNumber[2])){
//         console.log(arrayNumber[1]);
//     }else{
//         console.log(arrayNumber[2]);
//     }
// }

// maxNumber();


// let a = 6;
// let b = 10;
// let result = addNumbers(a,b)
// console.log(result);

// let descriptiveArray = ["you are tall and handsome", "you are pretty and beautiful", "pretty and short", "smart and cute", "intelligent and short", "wise and tall", "innocent and truthful"]

// let askUser = function (){
//     let askUserName = prompt("what is your name: ");
//     let randomselection = Math.floor(Math.random() * 7);
//     let makeSelection =  descriptiveArray[randomselection];
//     console.log(askUserName + "\n" + makeSelection);
    
// }


// askUser();



// let calculator = function (num1  , num2 ){

//     let operatorSymbol = ["+","-","*","/"];
//     let performCalculation = prompt("Enter operator to begin calculation: ");
//     if(performCalculation == operatorSymbol[0]){
//         return num1 + num2;
//     }else if(performCalculation == operatorSymbol[1]){
//         return num1 - num2;
//     }else if(performCalculation == operatorSymbol[2]){
//         return num1 * num2;
//     }else if(performCalculation == operatorSymbol[3]){
//         return num1 / num2;
//     }else{
//         return "youve entered an invalid operator"
//     }
    
   
// }

// let calculate = calculator(3,4,5,6,6);
// console.log(calculate);

// let map = (f,a) => {
//     const result =  new Array(a.length);
//     for(let i = 0; i < a.length; i++){
//         result[i] = f(a[i]);
//     }
//     return result;
// }

// console.log(map())

// let playGameApp = () => {
//     let guessWord = "deRealdeal";
//     let chances = 0;
    
//     let playGame = () => {
//         let askplay = prompt("what is the guess word: ");
//         if (askplay == guessWord) {
//             console.log("congrats!");
//             count = 5;
            
//             // if(count == 5){
//             //     gameMenue();
//             // // }
//         }else{
//             chances++;
//             console.log("you are wrong");
//             if(chances == 3){
//                 count = 5;
//                 console.log("you are out of guess chance");
//                 let wouldLikeToPlay = prompt("would u like to play again: ");
//                 if(wouldLikeToPlay == "yes"){
//                     gameMenue();
//                     count = 0;
//                 }else{
//                     count = 5;
//                     chances = 0;
//                     gameMenue();
//                 }
//             }
//         }
//         // console.log(chances);
//     }
//     let quitGame = () => {
//         let dontWantToPlay = prompt("you sure you dont want to play: ");
//         if (dontWantToPlay == "yes") {
//             count = 0;
//         } else {
//             playGame();
//         }
//     }

//     let playAgain = () => {
//         gameMenue();
//     }
//     let gameMenue = () => {
//         console.log("1. play game\n2. quit\n3. play again");
//         let userOption = Number(prompt("enter number: "));
//         let count = 0;
//         while (count < 5) {
//             count++;
//             if (userOption == 1) {
//                 playGame();
//             } else if (userOption == 2) {
//                 quitGame();
//             } else if (userOption == 3) {
//                 playAgain();
//             }
//         }
//     }
//     gameMenue();


// }
// playGameApp();

// let addTwoValues = (x, y) => {
//     return x + y;
// // }
// let addTwoValues = (x, y) => x + y;
// let isStoreValuesOfArray = [];

// for(let i = 0; i < 10 + 1; i++){
//     let firstvalue = i * 5;
//     let secondValue = i * i;
//     let responseVarriable = addTwoValues(firstvalue,secondValue);
//     isStoreValuesOfArray.push(responseVarriable);
// }
// console.log(isStoreValuesOfArray);
 

// const x = "gobal";
// let scope = () => {
//     let y = x ? "gobally define" : "local";
//     console.log(y);
// }
// scope();


// let createStringValue = "1000";

// (() => {
//     let createStringValue = 2000;
//     console.log(createStringValue);
// })();

// let newResult = (() => {
//     let createStringValue = 3000;
//     return createStringValue;
// })(); 

// console.log(newResult);
// console.log(newResult , createStringValue);

// ((x) => {
//     let createStringValue = x;
//     console.log("this is my desired value: ", createStringValue);
// })(5000);


// recursive

// factorial
// i! == num * num + 1;
// factorial of 1 = 1 * 1+1
// let findFactorial = num => {
//     if( num === 0){
//         return 1;
//     }else{
//         return num * findFactorial(num - 1);
//     }
// }
// console.log(findFactorial(4));

// let countDown = function f(fromNumber){
//     console.log(fromNumber);
//     let nextNumber = fromNumber - 1;
//     if(fromNumber > 0){
//         f(nextNumber);
//     }
// }

// countDown(3);

// let assignFunct = countDown;

// countDown = null;

// assignFunct(10);


// function getRecursive(nr) {
//     console.log(nr);
 
//     if(nr > 0){
//         getRecursive(--nr);
//     }
// }
// getRecursive(3);

// let useRecursiveFunc = nr => {
//     let askUserForCorrectName = prompt(" what is your full name: ");
//     console.log(askUserForCorrectName.length);
//     let chances = nr;

//     if(!(askUserForCorrectName.length >= 7)){
//         console.log("the length of your name is too short");
//         if(chances == 0){
//             console.log("we will give one more try!");
//             nr++;
//         }
//     }else if(askUserForCorrectName.length > 7){
//             console.log("correctly matches");
//             nr = -1;
//         }
    
//     if(nr > 0){
//         useRecursiveFunc(--nr);
//     }
// }
// useRecursiveFunc(3);


// let logRecursive = nr => {
//     if (nr > 0){
//         logRecursive(nr - 1);
//     }else{
//         console.log("done with recursion");
//     }
//     console.log("Ended function: ", nr);
// }
// logRecursive(3);

// let functionCheck = number => {
//     //  console.log(`the factorial of ${number} is ${result}`);
//     if (number == 0){
//         return 1;
//     }else{
//          return number * functionCheck(number - 1);
        
//     }
    
// }

// let startVariable = 10;

// let updateCountDown = num => {
//     console.log(num);
//     if(num > 0){
//         updateCountDown(--num);
//     }else{
//         return;
//     }
// }
// updateCountDown(startVariable);
// let countDownFunc = value =>  {
//     console.log(value);
//     if(value < 1){
//         return;
//     }if(!(value < 1)){
//         countDownFunc(--value);
//     }
// }

// countDownFunc(startVariable);


// let functName = name => {
//     console.log('i love ', name);
// }
// functName('Javascript');

// function myLove(name){
//     console.log('i love ', name);
// }
// myLove("Javascript!")

// let mult = (number,callback) => {
    
//     callback();
//     console.log(number * number);
// }

// let sendNumber = () => {
//     console.log('the power of 7 is: ');
    
// }

//  mult(7,sendNumber);




// function greet() {
//     console.log('hello world ');
// }

// function sayName(name){
//     console.log('Hello ' + name);
// }
// let makeSay = () => {
//     console.log('pls wait while your greeting is processing...');
// }

// // calling the function 
// setTimeout(greet,10000);
// sayName('John');
// setTimeout(makeSay, 3000);


// let greet = (name, myfunction) => {
//     console.log('Hello world');
//     //callback function
//     //executed only after the greet()is executed
//     myfunction(name);
// }
// //callback function
// function sayName(name){
//     console.log('Hello ' + name);
// }

// calling the function after 2 seconds
// setTimeout(greet, 2000, 'Frank', sayName);
// let sendValue = (number,funct) => {
//     console.log(number);
//     funct(number);
// }
// let mul = number => {
//     console.log(number * number);
// }

// setTimeout(sendValue, 2000, 7, mul);



// let foo = bar => {
//     bar();
// }

// foo(() => console.log('bar'));

// function orderPizza(type, name,callback){
//     console.log('Pizza ordered...');
//     console.log('Pizza is for preparation');
//     setTimeout(function () {
//         let msg = `Your ${type} ${name} Pizza is! The total bill is $13`;
//         console.log(`On the Pizzahub server ${msg}`);
//         callback(msg);
//     }, 3000);
    
// }
// orderPizza('Veg', 'Cheese Barbeque',function (message){console.log(message)});


// built by xact;
// let messsageApp = () => {
//     function recieve(name,password, sms) {
     
//             let encrypt = "********";
//         if ((password === encrypt) && (encrypt.length == 8)) {
//             console.log("access granted");
//         } else {
//             console.log("pls wait...");
//             setTimeout(function () { console.log("verifying..."), 3000 });
//             setTimeout(function () { console.log("access denied!!"), 40000 });
//             return 0;
//         }
//         let result = `${name} you have a new sms from anonymous👥`;
//         console.log(result)
//         let askUser = prompt("would you like to read: ");
//         if (askUser == "yes") {
//             setTimeout(function () { console.log("pls wait a minute..."), 10000 });
//             setTimeout(function () { console.log("loading..."), 30000 });
//             sms(name); 
//         }
//     }
//     function sendMsm(message) {
//         setTimeout(function () {
//             console.log(`${message} this is to inform you that code 360 is now valid!`);
//         }, 50000);
//     }

//     recieve(prompt('enter name: '),prompt('enter password: '), sendMsm);
// }

// messsageApp();

// setInterval(function (){console.log("hello")},2000);

// let recursiveCount = count => {
    
//     console.log(count);
//     if(count < 10){
//         recursiveCount(++count);
//     }else{
//         return;
//     }
   
// }

// recursiveCount(0);

// let outPutOne = () =>{
//     console.log('One');
// }
// let outPutTwo = () =>{
//     console.log('Two');
// }
// let outPutThree = () =>{
//     console.log('Three');
//     outPutOne();
//     outPutTwo();
// }


// let outPutFour = () =>{
//     console.log('Four');
//     setTimeout(outPutOne,0)
//     outPutThree();
// }
// outPutFour();

// (function () {
//     console.log("Welcome");
// })();
// (function () {
//     let firstName = "Laurence";
// })();
// let result = (function () {
//     let firstName = "Laurence";
//     return firstName;
// })();
// console.log(result);
// (function (firstName) {
//     console.log("My Name is " + firstName);
// })("Laurence");



// let test2 = (num) => num + 5;
// console.log(test2(14));

// var addFive1 = function addFive1(num) {
//     return num + 2;
// };
// console.log(addFive1(14));

// let factorial = num => {
//     if(num == 0){
//         return 1;
//     }else{
//         return num * factorial( num - 1);
//     }

// }
// console.log(factorial(3));

// class Person {
//     #firstName;
//     #lastName;

//     constructor(firstName, lastName){

//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     }
//     get firstName() {
//         return this.#firstName;
//     }

//     set firstName(firstName){
//         this.#firstName = firstName;
//     }

//     get lastName() {
//         return this.#lastName;
//     }
//     set lastName(lastName) {
//         this.#lastName = lastName;

//     }

    // method(){
    //     console.log("my full name is: ", this.#firstName ,this.#lastName);
    // }
// }

// let objPerson = new Person("Prince","Frank");

// objPerson.firstName = "chidera";

// console.log("my first name is: ", objPerson.firstName);
// class Security{
//     prompt;
//     callback;

//     constructor(prompt, callback){
//         this.prompt = prompt;
//         this.callback = callback;
//     }

//     confirmName = () => {
//     this.prompt();
//     setTimeout(function () { console.log("your validation was successful, congrats!"), 1000 });
// }

// }

// let instance = new Security(function(){
//     let secCheck = prompt("what is ur full name: ");
//     if(secCheck == "frank prince"){
//         setTimeout(function (){ console.log("wait,confirming...")}, 3000);
//         setTimeout(function (){ console.log("access granted!")}, 40000);
        
//     }
// },(function (){
//     function sms(sms){
//         console.log(sms,"this is to let you know, CODE 23DXDF-34F IS ACTIVATED");
//     }

//     (function (recieve,callback){
//         console.log("you have a message!");
//         callback(recieve);
//     })('frank ', sms);
// })());
// instance.confirmName();
// instance.callback;
// instance.prompt();

// class Vehicle{
//     #color;
//     #currentSpeed;
//     #maxSpeed;

//     constructor(color, currentSpeed, maxSpeed){
//         this.#color = color;
//         this.#currentSpeed = currentSpeed;
//         this.#maxSpeed = maxSpeed;
//     }

    // get color(){
    //     return this.#color;
    // }
    // set color(color){
    //     this.#color = color;
    // }

    // get currentSpeed() {
    //     return this.#currentSpeed;
    // }
    // set currentSpeed(currentSpeed) {
    //     this.#currentSpeed = currentSpeed;
    // }

    // get maxSpeed() {
    //     return this.#maxSpeed;
    // }
    // set maxSpeed(maxSpeed) {
    //     this.#maxSpeed = maxSpeed;
    // }
//     move() {
//         console.log("moving at", this.#currentSpeed);

//     }

//     accelerate(amount){
//         this.#currentSpeed += amount;
//         console.log(this.#currentSpeed);
//     }
// }

// class Motorcycle extends Vehicle {
//     fuel;
//     constructor(color, currentSpeed, maxSpeed, fuel){
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }

//     doWheelie() {
//         console.log("Driving on one wheel!");
//     }
// }
// let motor = new Motorcycle("Black", 0, 250, "gasoline");
// console.log(motor.color);
// motor.accelerate(120);
// motor.move();


// Vehicle.prototype.parkikngSpace = function (){
//     console.log("make a revice back, and the",this.move());
// };
// let v = new Vehicle("black",0, 250);
// v.parkikngSpace();

// Vehicle.prototype.favoriteColor = "silver";
// console.log(v.favoriteColor)

// console.log(v instanceof Person);//true
// class Chair{
// //Defaults that will be common for all the instances:
//     static backSupport = true;
//     static armRests = true;

//     color;
//     seatHeight;
//     recliningAngle;
//     backSupport;
//     headsSupport;
//     padding;
//     armRests;
//     seatSize;
//     isHeightAdjustable;
//     isMovable;

//     constructor(color, seatHeight, recliningAngle,backSupport,headsSupport,padding,armRests,seatSize,isHeightAdjustable,isMovable){
//         //Defaults which can be changed by the subclass class.
//         this.color = color;
//         this.seatHeight = seatHeight;
//         this.recliningAngle = recliningAngle;
//         this.backSupport = backSupport;
//         this.headsSupport = headsSupport;
//         this.padding = padding;
//         this.armRests = armRests;
//         this.seatSize = seatSize;
//         this.isHeightAdjustable = isHeightAdjustable;
//         this.isMovable = isMovable;
//         this.type = "Chair";
//         console.log(Chair.printDefaultProps()); //Usage of static method inside constructor
//     }

//     static logObjectProps(){
//         console.dir(this);
//     }

//     //Static within static usage
//     static printDefaultProps() {
//         console.log(`Chair Back Support = ${this.backSupport}`);
//         console.log(`Arm rests support = ${this.armRests}`);
//     }

//     adjustableHeight(){

//     };
//     adjustAngle(){

//     };
//     moveChair(){

//     };
// }

// let newChair = new Chair("Blue", "25 inch", "20 deg",true,false,"3 inch",true,"16 inch",false,false);

// // console.dir("Chair Prototype",  Chair);
// // console.log("Chair Object", newChair);
// Chair.logObjectProps();
// Chair.printDefaultProps();



// class OfficeChair extends Chair{
//     // private properties
//     #basePrice;
//     #maxDiscount;
//     #sellerAddress;
//     constructor(color, isHeightAdjustable, seatHeight, recliningAngle,basePrice,maxDiscount,sellerAddress){
//         super();
//         this.type = "Office Chair";
//         this.color = color;
//         this.isHeightAdjustable = isHeightAdjustable;
//         this.seatHeight  = seatHeight;
//         this.recliningAngle = recliningAngle;
//         this.isMovable = true;
//         this.#basePrice = 1000;
//         this.#maxDiscount = 5;
//         this.#sellerAddress = "XYZ, street";
        
//     }

//     adjustableHeight(height){
//         if(height > this.seatHeight){
//             console.log(`Chair height changed to ${height}`);
//         }else {
//             console.log(`Height cannot be decreased more than the saet height ${this.seatHeight}`);
//         }
//     }

//     adjustAngle(angle){
//         if(angle >= this.recliningAngle){
//             console.log(`Chair angle changed to ${angle}`);
//         }else {
//             console.log(`Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`);
//         }
//     }

//     moveChair(x, y){
//         console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
//     }

//     //Newly Added function
//     #getChairAmount(taxCharge) {
//         return this.#basePrice + (this.#basePrice - this.#basePrice * this.#maxDiscount / 100) + taxCharge;
//     }

//     //Newly Added function
//     generateBill() {
//         console.log("**** BILLING INFORMATION ****");
//         console.log(`Chair Price = ${this.#getChairAmount(20)}`);
//         console.log(`Seller Address = ${this.#sellerAddress}`);
//     }
// }


// let newOfficeChair = new OfficeChair("Red", true, 30, 30);

// newOfficeChair.adjustableHeight(31);
// newOfficeChair.adjustAngle(40);
// newOfficeChair.moveChair(10, 20);

// class DinningChair extends OfficeChair{
//     contructor(){
        
//     }

//     get getChairAmount(){
//         return getChairAmount
//     }

//     set getChairAmount(getChairAmount){
//         getChairAmount();
//     }
// }

// let newDinningChair = new DinningChair();
// newDinningChair.getChairAmount();


// function polymorphism
// class A{
//     area(x,y){
//         console.log(x * y);
//     }
// }
// class B extends A{
//     add(a,b){
//         super.area(a,b);
//         console.log("Class B")
//     }
// }

// class ThirdClass extends SecondClass{
//     add(){
//         console.log("Last Method")
//     }
// }

// let newA =  new A();
// let output =  newA.area(100, 200);


// class Animal{

//     species;
//     makeSound;

//     constructor(species,makeSound){
//         this.species = species;
//         this.makeSound = makeSound;
        
//     }

//     speaks(){
//         console.log(this.species , this.makeSound);
//     }
    
    
// }
// Animal.prototype.eat = function (){
//     console.log('dogs eats bone');
// }

// let dog = new Animal("Dog","Barks");
// let cat = new Animal("Cat","meow");

// dog.speaks();
// dog.eat();


// // Employee tracking App


// class EmployeeTracker{
//     firstName;
//     lastName;
//     yearsWorked;

//     constructor(firstName, lastName,yearsWorked){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.yearsWorked = yearsWorked;
//     }
// }

// let person1 = new EmployeeTracker("Mr.John ","Fedrick ", 5);
// let person2 = new EmployeeTracker("Mr.Davison ", "Methron ", 10);
// let addPersonToArray = [];
// addPersonToArray.push(person1,person2);

// EmployeeTracker.prototype.detailsOfPerson = function (){
//     return (this.firstName + this.lastName +" has worked "+ this.yearsWorked +"years");
// }
// for (let person of addPersonToArray) {
//     console.log(person.detailsOfPerson());
// }



// // for(let i = 0; i < addPersonToArray.length; i++){
// //     let itrateArray = addPersonToArray[i];
// //     if(i == 0){
// //         console.log("we were able to track person1: ",itrateArray);
// //     }if(i == 1){
// //         console.log("we were able to track person2: ",itrateArray);
// //     }
// // }
// // addPersonToArray.forEach((person) => {

// //     console.log(person.detailsOfPerson())
    
// // });



// // Menu items price calculator;

// class PriceCalculaor{
//     #offer1 = 10;
//     #offer2 = 20;
//     menuItemOne;
//     menuItemTwo;

//     constructor(menuItemOne,menuItemTwo){
//         this.menuItemOne = menuItemOne;
//         this.menuItemTwo = menuItemTwo;
//     }

//     totalCost(){
//        return ((this.menuItemOne * this.#offer1) + (this.menuItemOne * this.#offer2));
//     };

//     get getter(){
//         return this.totalCost();
//     }
// }

// let item1 = new PriceCalculaor(2,0);
// let item2 = new PriceCalculaor(1,3);
// let item3 = new PriceCalculaor(3,2);

// console.log(item1.totalCost());
// console.log(item2.totalCost());
// console.log(item3.totalCost());


// function Person(first, last) {
//     this.first = first;
//     this.last = last;
// }


// Person.prototype.getName = function getName() {
//     return this.first + " " + this.last;
// };





// const friend1 = new Person("Laurence", "Svekis");
// console.log(friend1.getName());



// let s = "Hello";
// console.log(s.concat(" there")
//              .toUpperCase()
//              .replace("THERE", "you")
//              .concat(" you're amazing!"));
// // gobal Javascript Method: can be used with referring to the built-in object
// let x = 7;
// console.log(Number.isNaN(x));
// console.log(isNaN(x));
// // encodeURL and decodeURI 
// let uri = "https://www.example.com/submit?name=maaike xact digitals";
// let encode_uri = encodeURI(uri);
// console.log("Encoded:", encode_uri);

// let decoded_uri = decodeURI(encode_uri);
// console.log("Decoded:", decoded_uri);

//DecodeUriComponent() and encodeUriComponent
// let decodeComponent_uri = "How's%20it%20going%3F";
// console.log(decodeURIComponent(decodeComponent_uri));
// console.log(encodeURIComponent(decodeComponent_uri));

// let stringVariable = "i love this!";
// let checkOne = encodeURIComponent(stringVariable);
// console.log(checkOne);
// let checkTwo = decodeURIComponent(checkOne);
// console.log(checkTwo);


// array functions

// let arrayOne = ["frank","15",true,24,3.6];

// console.log(arrayOne.copyWithin(1,3));


// let itrateFunction = (element, index) => {
//     console.log("element: ",element," is on position: ",index);
// }

// arrayOne.forEach(itrateFunction);


// let arrayTwo = ["squirrel", 5, "Tjed", new Date(), true];

// function filterFunc(element, index){

//     return typeof element === "string";

// }

// console.log(arrayTwo.filter(filterFunc))

// console.log(arrayTwo.every(itrateFunction));

// let arr = [1,2,3,4];
// let mapped_arr =  arr.map(element => {
//     if(element % 2 == 0){
//         return element + 10;
//     }else{
//         return element;
//     }
// });
// console.log(mapped_arr);

// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("hi"));



// Remove duplicates from the array using filter() and indexOf(). The starting array is:
// const arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence","Mike", "Laurence", "Mike", "Laurence", "Mike"];
// const arr2 = arr.filter((value, index, array) => {
//     console.log(value, index, array.indexOf(value));
//     return array.indexOf(value) === index;
// });
// console.log(arr2);
// let arrayWithDuplicates = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike","Laurence", "Mike", "Laurence", "Mike"];
// let output = arrayWithDuplicates.filter((element, index,array) => {
// //    console.log(element,element,array.indexOf(element) );
//    if(array.indexOf(element) === index){
//         return ("franks initiative: " + element);
//    }else{
//         return false;
//    }

//     // return array.indexOf(element) === index;

// });


// console.log(output);




// let useMap = arrayOfNumbers.map(element => element * 2);
// let useMap = arrayOfNumbers.map(function (element){return element * 2} )
// console.log(useMap);

// 
// let s1 ="hello";
// let result = s1.concat(" JavaScript");
// // to convert string to array use "split"
// console.log(result.split(" "));

// let str = "orange,are,lovely";
// console.log(str.split(","));
// // to convert array to string use "join"
// let arr = ["l","o","v","e"];
// console.log(arr.join("❣"));
// // to find index of a string use "indexOf" or "search"method
// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.lastIndexOf("re");
// // console.log(poem.search("python"));
// // to get the character of the index position
// console.log(poem.charAt(index_re));
// console.log(index_re);


// let strType = "Create a substring";
// let substr1 = strType.slice(5);
// let substr2 = strType.slice(0,3);
// console.log("1:with only one argument", substr1);
// console.log("2:with two arguments", substr2);

// let hi = "hi buddy buddy";
// let new_hi = hi.replace("buddy","Frank!");
// console.log(new_hi.charAt(0).toLocaleUpperCase().concat(new_hi.slice(1)));

// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.endsWith("You");
// console.log(bool_start);
// // exercise
// let creatin_str = " thIs will be capiTalized for each word into This Will Be Capitalized For Each Word: ";
// let returnString = (string) => {
//     let transform = string.toLowerCase();
//     let emptyArray = [];
//     let convert_phrase = transform.split(",");
//     convert_phrase.forEach((element,index) => {
//         let newWord = element.slice(0, 1).toUpperCase().concat(element.slice(0));
//         emptyArray.push(newWord);
//     })
//     let backToStr = emptyArray.join(" ");
//     return backToStr;
// }

// console.log(returnString(creatin_str));

// let usePrevString = creatin_str.toLowerCase();

// let vowelContainer = ["a", "e", "i", "o", "u"];
// let output = vowelContainer.forEach((e,i) => {
//     console.log(e);
//     usePrevString = usePrevString.replace(e,i);
// });
// console.log(usePrevString);
// console.log(output);

// let x = 34;
// console.log(isNaN(x));
// console.log(!isNaN(x));
// let str = "hi";
// console.log(!isNaN(str));
// let str1 = "5";
// console.log(isNaN(str1));

// let y = 3;
// let strtwo = "finite";
// console.log(Number.isInteger(y));
// console.log(Number.isInteger(strtwo));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(10/0));

// can tell javascript the number of decimal to use
// let deci =  1.23456;
// let newDeci = deci.toFixed(3);
// console.log(newDeci);

// // toPrecision tells js the number of numbers to look at.
// let x = 1.23456;
// let newX = x.toPrecision(2);
// console.log(newX);

// let useToPrecision = 1.2334;
// let newToPrecision = useToPrecision.toPrecision(4);
// console.log(newToPrecision);


// let highest = Math.min(2, 56, 12, 1, 23);
// console.log(highest);

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);


// let raiseToThePower = (num1,pow) => {
//     return num1 ** pow;
// }
// console.log(raiseToThePower(3,4));

// let x = 6.78;
// let y = 5.34;
// //ceil rounds up the first number it see
// let negativeX = -x;
// let negativeY = -y;

// console.log(Math.ceil(negativeX));
// console.log(Math.ceil(negativeY));

// console.log(Math.trunc(x));
// console.log(Math.trunc(y));


// let e =  2;

// let exp = Math.exp(e);
// console.log(exp);
// let log = Math.log(exp);
// console.log(log)



// 2x 10 pow -10

// let num = 2;
// let pow = Math.pow(10,-10);
// let cal = num * pow;
// let result = Math.exp(cal);
// console.log(result);
// console.log(Math.log(1));

// console.log(Math.PI);
// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.373));
// console.log(Math.random() * 5);
// console.log(Math.floor(Math.random(1) * 10 + 1))


// let randomNumGenerator =  (min , max) =>{
//     let gen = Math.floor(Math.random() * max + min)+min;
//     return gen;
// }

// for(let count = 1; count < 100; count++ ){
//     console.log(randomNumGenerator(1,100));
// }


// converting a date to a string
// console.log(d.toDateString());

// console.log(d.toLocaleDateString());


// let guessGame = () =>{
//     let guessNumber = 7;
//     let count = 0;
//     // N:B chances created is only possible while the Original loop condition is valid;
//     let chances = 0;
//     let outOfChances = 0;
//     while(count < 5){
//         chances++;
//         outOfChances++;
//         let askUser = prompt("enter guess: ");
//         count++;
//         if(askUser == guessNumber){
//             console.log("do somthing!");
//             count = 5;
//         }else{
//             console.log("wrong",chances,"outOfChances",outOfChances);
//             if(chances == 3){
//                 console.log("try again");
//                 count = 5;
//                 if((outOfChances == chances) && (count == 5)){
//                     let playAgain = prompt("would you like to play again? ");
//                     if(playAgain == "y"){
//                         count = 0;
//                         chances = 0;
//                         outOfChances = 0;
//                     }else{
//                         console.log("Game Over");
//                         return 0;
//                     }
//                 }
//             }
//         }
//     }
    
// }

// guessGame();


// determining factors
// a^2 - 17a + 42.
// function Checkfactors() {
//     b = parseInt(prompt('Enter b: '));
//     c = parseInt(prompt('Enter c: '));
//     num1 = parseInt(prompt('Enter num1: '));
//     num2 = parseInt(prompt('Enter num2: '))
//     let m = num1 * num2;
//     let e = m;
//     let k = e / num1;
//     let q = e / num2;
//     let n = num1 + num2;

//     if ((m == c) && (n == b)) {
//         console.log(k, ',', q, ' :are factors', b, 'and', c);
//     } else if ((m == -c) && (n == -b)) {
//         console.log(k, ',', q, ' :are factors', b, 'and', c);
//     } else if ((m != c) && (n != b)) {
//         console.log('are not factors');
//     } else if ((m != -c) && (n != -b)) {
//         console.log('these are not factors of: ', b, 'and', c);
//     }

// }

// Checkfactors();


// function gen(min, max){
//     return (Math.floor(Math.random(min) * max)+ min);
// }
// let arr1 = [];
// let totalNumber = 0;
// for(let i = 0; i < 100; i++){
//     // console.log(gen(1,100));
    
//     let find = gen(1,100);
//     arr1.push(find);
//     if(find == 3){
//         totalNumber++;
        
//     }else{
//         continue;
//     }
// }

// console.log(arr1);
// console.log(`the total number of 2's = ${totalNumber}`);
// using contructor
// let currentDateTime = new Date();
// console.log(currentDateTime);
// // using the method
// let now = Date.now();
// console.log(now);

// let mill = new Date(1000);
// console.log(mill);
// let stringDate = new Date("Sat Jun 05 2023 12:40:12 GMT+0200");
// console.log(stringDate);
// // specifying date using method
// let specificDate = new Date (2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);
// let d = new Date();
// console.log(d.getTime());

// // MM DD YY

// let d1 = Date.parse("June 5, 2023");
// console.log(d1);

// let d2 = Date.parse("6/5/2023");
// console.log(d2);


// console.log(d.toDateString());
// console.log(d.toLocaleDateString());


// let dateObj = new Date(2025, 5, 15);
// console.log(dateObj);

// let dateArry = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];

// let date = dateObj.getDate();
// let month = dateObj.getMonth();
// let year = dateObj.getFullYear();


// let hold =  `${dateArry[month - 1]} ${date} ${year}`
// console.log(hold);

// Word scrambler

// Create a function that returns a value of a word and scrambles the letter order with Math.random():

// let wordChoice = "intercontinentaldish";

// let scrambler = (word)=>{
//     let temp = word.length;

//     let emptyString = " ";
//     for(let i = 0; i < temp; i++){
//         console.log(word.length);
//         let rand = Math.floor(Math.random() * word.length);
//         emptyString += word[rand];
//         console.log(emptyString);
//         word = word.substr(0, rand) + word.substr(rand + 1);
//         console.log(word);
//     }
//     console.log(emptyString);

// }
// scrambler(wordChoice);


//Countdown timer

// let endDate = new Date('December 30 2023');

// function countDown(){
//     let total = Date.parse(endDate) - new Date();
//     let days = Math.floor(total / (1000 * 60 * 60 *24));
//     let hrs = Math.floor((total / (1000 * 60 * 60)) / 24);
//     let mins = Math.floor((total  / 1000 / 60) % 60);
//     let secs = Math.floor((total / 1000) % 60);
//     return {days,hrs,mins,secs};
// }


// function update(){
//     let temp = countDown();

//     let output = "";
//     for(let prop in temp){
//         output += `${prop} ${temp[prop]}`;
//     }
//     console.log(output);
//     setTimeout(update, 1000);
// }

// update();

// const arr = ["Hi", "world", "hello", "Hii", "hi", "hi World", "Hi"];
// const arr2 = arr.filter((element, index) => {
//     const ele2 = element.substring(0, 2);
//     return (ele2 == "hi");
// });
// console.log(arr2);




// let test = document.getElementsByClassName("one");
// let test1 = document.getElementById("two");
// let byTag = document.getElementsByTagName("h2");
// console.log(byTag.item(0).innerHTML);
// // console.log(byTag.item(1).innerHTML);
// let getQuery = document.querySelector("ul");
// console.log(getQuery.children.item(0).innerHTML);
// let getQuery1 = document.querySelectorAll("li");
// console.log(getQuery1);
// // converting to array;
// let toArray = Array.from(getQuery.children);

// toArray.forEach((li)=>{
//     li.innerHTML = `${li.innerHTML}, very exciting`;
//     li.style.color = "green";
//     li.addEventListener('click',(e)=>{
//         li.remove();
//     })
// });

// let h2 = document.querySelector("h2");
// h2.addEventListener('click',(e)=>{
//     h2.innerHTML = `i love javascript`;
//     h2.style.color = "red";
// });

// let getOutput = document.getElementsByClassName("output");
// console.log(getOutput);
// let output = document.querySelector(".output");
// console.log(output);
// output.textContent = "i can do this!";
// console.log(output.innerHTML);
// output.classList.add("red");
// output.id = "tester";
// output.style.backgroundColor = "red";
// let url = document.URL;
// output.textContent = url;

// let selectClass =  document.querySelector(".output");
// let mainList = selectClass.querySelector("ul");
// mainList.id = "mainList";
// let div = selectClass.querySelectorAll("div");
// let convtArray = Array.from(div);
// console.log(convtArray);
// convtArray.forEach((div)=>{
//     convtArray.getElementsByTagName("div");
// })
// for(let i = 0; i < convtArray.length; i++){
//     console.log(convtArray[i].tagName);
//     convtArray[i].style.color = "red";
//     convtArray[i].id = "id" + (i + 1);
//     if(i % 2){
//         convtArray[i].style.color = "red";
//     }else{
//         convtArray[i].style.color = "blue";
//     }
// }

// console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);

// let e2 = document.body.children[2];
// console.log(e2);
// console.log(document.body.children.greeting);
// let getByTag =  document.getElementsByTagName("h1");
// console.log(getByTag);
// let ul = document.getElementsByTagName("div").item(0);
// let getinner = ul.children[0].children[1];
// console.log(getinner);
// let getClass = document.getElementsByClassName("example");
// let dis =  getClass[1];
// let getAll = document.querySelectorAll("div");
// let getAllArry = Array.from(getAll);

// let ele = document.getElementById("one").onclick = function (){
//     alert("Ouch! Stop");
// }
// console.log(ele);





// let addInput = document.getElementById("input_field");
// let addbtn = document.getElementById("input_btn");

// addbtn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     let isText = addInput.value;
//     if(!(isText)){
//         // alert('pls enter a text first');
//         addInput.attributes("required")
//     }else{
//         console.log('success');
//     }
// })


// function stop(){
//     alert("stop sending this form...");
// }

// function reveal(el) {
//     console.log(el.parentElement);
// }



// document.getElementById("one").onclick = function () {
//     alert("Auch! Stop!");
// }

// function message(e){
//     console.dir(e);
// }


// function rainBowify(){
//     let divs = document.getElementsByTagName("div");
//     for(let i = 0; i < divs.length; i++){
//         divs[i].style.backgroundColor = divs[i].id;
//     }
// }

// // adding class using HTML DOM 
// function disappear(){
//     let getClass = document.getElementById("shape");
//     getClass.classList.add("hide");
// }

// function change(){
//     let removeClass = document.getElementById("shape");
//     removeClass.classList.remove("blue");
// }

// let getTbtn = document.getElementById("toggle-btn");

// getTbtn.addEventListener('click',(event)=>{
//     let getTtext = document.getElementById("toggled-text");
//     if(getTtext.style.display === "block"){
//         getTtext.style.display = "none";
//     }else{
//         getTtext.style.display = "block";
//     }
// });

// function changeVisibility(){
//     document.getElementById("shape").classList.toggle("hide");
// }

// function changeAttr(){
//     let el = document.getElementById("shape");
//     // setAttribute takes two args qualifiedName and Value both strings
//     el.setAttribute("style", "background-color:red;border:1px solid black");
//     el.setAttribute("id", "new");
//     el.setAttribute("class", "circle");
//     console.log(el);
// }


// let friendNames = ["Laurence", "Mike", "John","Larry","Kim","Joanne","Lisa","Janet","Jane"];

// let pageMs = document.getElementById("message");
// let pageOt = document.getElementById("output");
// //we can write html code as a string inside javascript code



// function build(){
//     let html = "<h1>My Friends Table</h1><table>"
//     friendNames.forEach((e,index)=>{
//         html += `<tr class="box" data-row="${index + 1}"
//         data-name = "${e}" onClick="getData(this)">
//         <td>${e}</td>`;
//         html += `<td >${index + 1}</td></tr>`
//     });
//     html += "</table>";
//     document.getElementById("output").innerHTML = html;

// }
// build();

window.onload = function(){
     // whatever needs to happen after loading
 // for example adding event listeners to elements
    document.getElementById("square").addEventListener('click',changeColor);
}

function changeColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    this.style.cursor = "pointer";
    this.style.transition = ".5s ease-out";
}

// selecting all button into javascript obj

let btn_one = document.querySelectorAll("button");

let list_btn = Array.from(btn_one);
list_btn.forEach((e,i)=>{
    function output(){
        console.log(this.textContent); 
    }
    e.addEventListener('click',output);
});

let el = document.createElement("p");
el.innerText = Math.floor(Math.random() * 100);
document.body.appendChild(el);
let crtDiv = document.createElement("div");
crtDiv.setAttribute("class","btn-div");
document.body.appendChild(crtDiv);
crtDiv.appendChild(el);
crtDiv.setAttribute("style","width:100px;height:100px;background-color:crimson;text-align:center;align-content:center")













































































































































































































