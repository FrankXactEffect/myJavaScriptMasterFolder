const prompt = require("prompt-sync")();


// function countFiftyToOne(){
//     let printNumber = [];
//     for(let count = 50; count >= 1; count--){
//     printNumber.push(count);
// }

// console.log("count down 50 to 1: ",printNumber);
// }

// countFiftyToOne();



// // create a new array with each word in the array below appearing in capital letters


// const countries = ['Finland','Sweden','Denmark','Norway','Iceland'];
// let newArray = [];
// for(let i = 0; i < countries.length; i++){
//     newArray.push(countries[i].toUpperCase());
// }
// console.log(newArray);

// // write a function that calculates the sum and mean of the numbers in this array below;

// let calSum_and_Mean = () =>{
//     let numbers = [34,45,76,78,34,56,45,78,98,76,56,78,98,90,21];
   
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
        
//     }
//      let mean = sum / numbers.length;
//     console.log(`the sum of all item in the array is: ${sum}\nthe mean of the array is: ${mean}`);

// }

// calSum_and_Mean();

// // use a loop to iterate from 0 to 100 and print the sum of all even numbers and the sum of the odd;
// let sumEven = 0;
// let sumOdd = 0;
// for(let i = 0; i <= 100; i++){
//     console.log(i);
//     if(i % 2 == 0){
//         sumEven += i;
//     }else{
//         sumOdd += i;
//     }
// }
// console.log(`sum of even number: ${sumEven}\nsum of odd numbers: ${sumOdd}`);

// // iterate through the array ["HTML","CSS","JS","React","Redux","Node","Express","MongoDB"]
// // use  a forloop to print out the item;
// let iterateElements = ["HTML","CSS","JS","React","Redux","Node","Express","MongoDB"];
// for(let i = 0; i < iterateElements.length; i++){
//     console.log(iterateElements[i]);
// }

// function wannaPlay(){
//     let guessNumber = 4566;
//     let confirm = prompt("would you like to play a game: ");
//     let playTime = 0;
//     let chances = 0;
//     while (playTime < 10 && confirm == 'yes'){
//         playTime++;
//         chances++;
//         let askUser = prompt("Guess the four secret digits: ");
//         if(askUser == guessNumber){
//             console.log("That was correct!,genius attempt");
//             playTime = 10;
//         }else{
//             console.log("Sorry wrong attempt!",chances);
//             if(chances == 5){
//                 console.log("sorry!, you are out of chances");
//                 playTime = 10;
//                 let tryAgain = prompt("would you like to try again? ");
//                 if(tryAgain == 'yes'){
//                     playTime = 0;
//                     chances = 0;
//                 }else{
//                     console.log("GAME OVER!!");
//                 }
//             }
//         }

//     }
// }
// wannaPlay();

// let howOldAreYou_App = (BirthYear,name) => {
//     let presentYear = 2023;
//     let age = presentYear - BirthYear;
//     console.log("Hello!",name, "you are",age,"years Old");


// }
// howOldAreYou_App(2001,'Frank');


//

        // Function to check for prime number
//         function isPrime() {
             
             
//             let primeCheck = true;
             
//             let enterValue = Number(prompt("Enter a value to check if its a prime number: "));
//             for (let i = 2; i <= enterValue - 1; i++)
//                 if (enterValue % i == 0) {
//                     primeCheck = false;
//                     break;
//                 }
                 
//             // Check and display output
//             if (primeCheck == true)
//                 console.log(enterValue + " is prime");
//             else
//                 console.log(enterValue + " is not prime");
//         }

// isPrime();

let solveQuadratic = () => {
        // -b + ((Math.sqrt(b**2 - 4*a*c))/ 2*a);
        let a = parseInt(prompt('Enter a: '));
        let b = parseInt(prompt('Enter b: '));
        let c = parseInt(prompt('Enter c: '));
        let q = b ** 2;
        let s = 4 * a * c;
        let w = q - s;
        let n = Math.sqrt(w);
        let o = (-b) + n;
        let z = 2 * a;
        let x1 = o / z;

        // second root(Negative value)
        let t = b ** 2;
        let r = 4 * a * c;
        let v = t - r;
        let i = Math.sqrt(v);
        let h = (-b) - i;
        let u = 2 * a;
        let x2 = h / u;

        console.log(`x1 = ${x1}, x2 = ${x2}`);

}

solveQuadratic();



// function sumPrimes(num) {
//         let primesArr = [];
//         for (let i = 2; i < num; i++) {
//                 let testArr = [];
//                 //generate test array for each i value
//                 for (let j = 2; j < i; j++) {
//                         testArr.push(j);
//                 }
//                 // test each i value against against its test array
//                 if (testArr.every(value => i % value !== 0)) {
//                         primesArr.push(i);
//                 }
//         }
//         return primesArr.reduce(((sum, num) => sum + num), 0);
// }

// console.log(sumPrimes(10));



let sumOfPrime = (num) => {
        let arr = [];
        let sum = 0;
        for(let i = 1; i <= num; i++){
        
                if((i%i == 0 && i % 1 == 0 ) && (i % 2 != 0 || i % 3 != 0)){
                        arr.push(i);
                        sum += i

                }
                
        }
        return {arr, sum};

}

console.log(sumOfPrime(100));









































// let returnPrimesNumbers = ()=>{
//     let primeContainer = [];
//     let sum = 0;
//     for(let i = 1; i <= 100; i++){
//         for(let j = 0; j <= 100; j++){
//          if (j % i == 0) {
//             continue;
//         }else{
//             primeContainer.push(j);
//             // return sum += i;
//         }           

//         }

//     }
//     console.log("prime numbers includes: ",primeContainer);
//     // console.log("sum of all prime numbers is = ",sum);

    
// }
// console.log(returnPrimesNumbers());



// let bmiCalculator = ()=>{
//     let bmiWeight;
//     let bmiHeight;
//     bmiWeight = prompt("Enter your bmi weight in kg: ");
//     bmiHeight = prompt("Enter your bmi height in m2: ");
//     let bmiFormular = bmiWeight / (bmiHeight * bmiHeight);
//     let bmiResult = bmiFormular;
//     let bmiStatus;
//     let bmiReading;

//     if(bmiResult < 18.5){
//         bmiStatus = "status: Under weight\n";
//         bmiReading = `reading: ${bmiResult.toFixed(1)}`;
//     }else if(bmiResult <= 18.5 && bmiResult <= 24.9){
//         bmiStatus = "status: Normal weight\n";
//         bmiReading = `reading: ${bmiResult.toFixed(1)}`;
//     }else if(bmiResult <= 25 && bmiResult <= 29.9){
//         bmiStatus = "status: Over weight\n";
//         bmiReading = `reading: ${bmiResult.toFixed(1)}`;
//     }else if(bmiResult == 30 || bmiResult >= 30){
//         bmiStatus = "status: Obessed\n";
//         bmiReading = `reading: ${bmiResult.toFixed(1)}`;
//     }

//     console.log(bmiStatus,bmiReading);
// }
// bmiCalculator();




























