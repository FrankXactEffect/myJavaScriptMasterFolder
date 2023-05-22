const prompt = require("prompt-sync")();

/*let meter = 1000;
let oneMeter = 100;
let seconds = 1;
let check = oneMeter ? 100 : "100cm";
let numberInMeters = parseInt(prompt("Enter number in meter: "));
let convertMeter_To_Kilo = numberInMeters/seconds * 1/meter;
console.log(`your answer in kilo: ${convertMeter_To_Kilo}km/sec`);
*/

let arry = ['Dog', 'Goat', 'Cat', 'Monkey'];
let randomNumber = Math.floor(Math.random() * 5);

let toss = arry[randomNumber];

let i = 0;
while(i < arry.length){
    arry.push[toss];
    console.log(arry);
    i++;
};