const prompt = require("prompt-sync")();

// let opt = prompt("Enter oprator: ");
// let num1 = parseInt(prompt("Enter a number: "));
// let opt = prompt("Enter an oprator: ");
// let num2 = parseInt(prompt("Enter another number: "));

// if(opt == '+'){
//     console.log(num1 + num2);
// }else if(opt == '-'){
//     console.log(num1 - num2);
// }else if(opt == '/'){
//     console.log(num1 / num2);
// }else if(opt == '*'){
//     console.log(num1 * num2);
// }else if(opt == '**'){
//     console.log(num1 ** num2);
// }else if(opt == '>'){
//     console.log(num1 > num2);
// }else if(opt == '<'){
//     console.log(num1 < num2);
// }else{
//     console.log("Error!!! invalid Syntax");
// }




// Destructuring Objects
// allows one to scope through a field within an object and then declare which value will be used

// let alphaNums = {a: 1, b: 2, c: 3};
// let {a,b} = alphaNums;
// a = 4;
// b = 9;
// console.log(a, b);

// const lordify = regularPerson => {
//     console.log(`${regularPerson.firstname} of Canterbury`);
// }

// const regularPerson = {
//     firstname: "Bill",
//     lastname: "Wilson"
// };

// lordify(regularPerson);


// const lordify = ({firstname}) => {
//     console.log(`${firstname} of Canterbury`);
// };

// const regularPerson = {
//     firstname: "Bill",
//     lastname: "Wilson"
// };

// lordify(regularPerson);

// const regularPerson = {
//     firstname: "Bill",
//     lastname: "Wilson",
//     spouse:{
//         firstname: "Phil",
//         lastname: "Wilson"
//     }
// };

// const lordify = ({spouse:{firstname}}) =>{
//     console.log(`${firstname} of Canterbury`);
// }

// lordify(regularPerson);

// const [,,firstAnimal] = ["Horse", "Mouse","Cat"];
// console.log(firstAnimal);



// const name = "Tallac";
// const elevation = 9738;

// const print = function(){
//     console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
// };

// const funHike = {name , elevation,print};

// funHike.print();


// var skier = {
//     name:name,
//     sound:sound,
//     powerYell: function() {
//         var yell = this.sound.toUpperCase();
//         console.log(`${yell} ${yell} ${yell}!!!`);
//     },
//     speed: function(mph){
//         this.speed = mph;
//         console.log("speed: ", mph); 
//     }
// }

// const skier = {
//     name,
//     sound,
//     powerYell(){
//         let yell = this.sound.toUpperCase();
//         console.log(`${yell} ${yell} ${yell}!!!`);
//     },
//     speed(mph){
//         this.speed = mph;
//         console.log("speed: ", mph);
//     }
// }


const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const tahoe = [...peaks,...canyons];

console.log(tahoe);
const [, , lastItem] = peaks;
console.log(lastItem);

const [last] = [...peaks].reverse();
console.log(last);


const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...other] = lakes;
console.log(other);


function directions(...args){
    let [start, ...remaining] = args;
    let [finish, ...stops] = remaining.reverse();

    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
}

directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");







