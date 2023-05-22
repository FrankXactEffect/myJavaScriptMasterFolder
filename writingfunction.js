const prompt = require("prompt-sync")();
//Math Multiplication Table:
// using loops:


/*let newArray = [];


for(let i = 0; i < 13; i++){
    newArray.push([]);
    for(let j = 0; j < 13; j++){
        newArray[i].push(i - j);
        

        
    }
}
//console.log(newArray);
console.table(newArray);
*/

/*let record = [];
let studRoll = ["Test", "HomeWork", "Exam"];
let studName = ["Chike", "Chioma", "Chika"];

for(let i = 0; i < studRoll.length; i++){
    record.push([]);
    for(let j = 0; j < studName.length; j++){
        record[i].push(studRoll[i] ,studName[j]);
    }

}
//console.log(record);
console.table(record);*/


/*let result = "";

for(let i = 0; i < 10; i++){
    result += "";
    for(let j = 0; j < 10; j++){
        result += (i * j) + " ";
    }
    
}
console.log(result);
console.table(result);
*/



//const arr = [3, 5, 7];
//let i = 0;

/*while(true){
    if(i < arr.length){

        console.log(arr);

        i++;

    }else{
        false;
    }
    
}*/


/*let sum = 0;
for(let i = 0; 10 > i; i+=2){
    sum += i;
    console.log(` ${sum}`);
}*/


/*let num = [1, 3, 6, 10, 4, 5, 11, 8, 30, 20];
let max = [];

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 === 1){
        max.push(num[i]);
        

        
    }
}
console.log(max);*/


/*let stringOutput = " ";

let selectedNum = 7;

for(let i = 1; i < 11; i++){

    if(i === selectedNum){

        continue;

    }

    stringOutput = stringOutput + i;
    console.log(stringOutput);

}*/

/*let groups =  [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"]
];

for(let i = 0; i < groups.length; i++){
    let matches = 0;

    for(let j = 0;  j < groups[i].length; j++){
        if(groups[i][j].startsWith("M")){
            matches++;
        }else{
            continue;
        }
        if(matches === 1){
            console.log("we have found a group that starts with M:");
            console.log(groups[i]);
            break;
        }

    }
}*/

/*let finalArray = [];

let valueVariable = 10;

for(let row = 0; row < valueVariable; row++){

    let temp = [];
    finalArray.push(temp);
    for(let columns = 0; columns < valueVariable; columns++){
        
        temp.push(row - columns);

    }
}
console.log(finalArray);
console.table(finalArray);
*/


/*const myArray = [1, 5, 7];
for(el in myArray){
    console.log(Number(el));
    el = Number(el) + 5;
    console.log(el);
}
console.log(myArray);*/

/*let displayCounter = () => {
    let count = 0;
    let increament = () => {
        return ++count;
    };

    return increament();
}
let counter = displayCounter();
console.log(counter);*/


/*let makeCount = () => {
    let count = 0;

    let increament = () => {
        function recursive(){
            console.log(count);
            if(count < 5){
                return recursive(++count);
            }
        }
        return recursive();
    };

    return increament;
}
let x = makeCount();
x();*/








/*let makeCounter = countName =>{
    let count = 0;

    let counterObj = {
        name: countName,
        increament: function () {
            ++count;
            console.log("name %s count %d", this.name, count);
            return count;
        }
    }

    return counterObj;
}

counter1 = makeCounter("Counter 1");
counter2 = makeCounter("Counter 2");

counter1.increament();*/


/*let outerfunc = a => {

    innerFunc = b => console.log("a %d b %d", a,b);

    return innerFunc;
}

InnerFunc = outerfunc(5);
InnerFunc(3);

outerfunc(10)(2);*/


/*let outerFunc = a => {
    let innerFunc = b => {
        let innerMostFunc = c =>{
            console.log("a %d b %d c %d", a, b, c);
        }
        return innerMostFunc;
    }
    return innerFunc;
}

outerFunc(1)(2)(3);

a = outerFunc(2);
b = a(4);
c = b(5);*/

//Anonymous Function:

let doingStuffAnonymously = () => {

    let array = ["Name", "Book", {title: "i love you"}];
    console.log(array[2].title);
    if(array[2].title.startsWith("i")){
        console.log("i love you too");
    }else{
        console.log("Uncaught code");
    }
}

//doingStuffAnonymously();

/*let doFlexibleStuff = name => {
    name();
    console.log("inside doFlexibleFunctionStuff");
}
doFlexibleStuff(doingStuffAnonymously);

let youGotThis = () => {
    console.log("You're doing really well, keep coding")

};

//setTimeout(youGotThis, 10000);//its going to wait for 1000milisec;
setInterval(youGotThis, 1000);*/
/*let isOdd  = number =>{
    return number % 2 != 0;
}
let isEven = number =>{
    return number % 2 === 0;
}

let filter = (numbers, callback) => {
    let result = [];
    for(const number of numbers) {
        if(callback(number)){
            result.push(number);
        }
        
    }
    
    return result;
}
let arrayIntegers = [1, 2, 3,7,4, 5, 6];
//console.log(filter(arrayIntegers, isOdd));
//console.log(filter(arrayIntegers, isEven));

let oddNumbers = filter(arrayIntegers, (number) => {
    return number % 2 != 0;
});
console.log(oddNumbers);*/

/*let download = (url, success, failure) => {
    setTimeout(() => {
        console.log(`Downloading ${url} ...`);

        //process the picture once it is completed:
        !url ? failure(url) : success(url);
    }, 1000);

}*/

/*let process = picture => {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.javascripttutorial.net/pic.jpg';

download(
    '',
    (url) => console.log(`Processing the picture ${url}`),
    (url) => console.log(`The '${url}' is not valid`)
);
//process(url);*/
/*
let count = 0;
let makeRecursiveCount = () => {
    console.log(count);
    if(count < 10){
        makeRecursiveCount(++count);
    }

}

makeRecursiveCount();

//Set Timeout order:

let outputValue1 = () => console.log("one");
let outputValue2 = () => console.log("two");
let thirdFunction = () => {
    console.log("three")
    outputValue1();
    outputValue2();
};

let fourthFunction = () =>{
    console.log("four");
    setTimeout(outputValue1, 0);
    thirdFunction();

};
fourthFunction();

let val = 10;
let tester = val => {
    val += 10;
    console.log(val);
    if(val < 100){
        return tester(val);
    }
    
}

//console.log(val);

let check =(fnc) => {

    fnc(20);

}
check(tester );

let testFunction = (function(){
    console.log("Hello");
})();

(function () {
    let firstName = "Laurence";

})();

let result = (function () {
    let firstName = "Laurence";
    return firstName;
})();

console.log(result);

let test2 = num => num + 5;
console.log(test2(14));

var addFive1 = num => {
    return num + 2;
};

let addFive2 = num => { 
    num + 1;
    num(14);
}
addFive2(addFive1);
*/
/*let sendMessage = (author) => {

    let motivation = () => {
        console.log("what ever you desire to have or get in life,\ndoesnt come to you by doing nothing , \nthere is a Price for every true achievement");
    };
    setTimeout(motivation , 2000);
    setTimeout(motivation , 4000);
    setTimeout(motivation , 9000);
    setTimeout(motivation , 12000);
    setTimeout(motivation , 15000);
    setTimeout(motivation , 17000);
    
    return author;
};
let book = (title, addAuthor) => {
    let author1 = "James Cambell";
    console.log("The title of this book is  : %s \nby %s ",title,addAuthor(author1));
    
    
}

let title = "YOUR DESIRE HAS A PRICE";
book(title,sendMessage);

let readLatter = latter =>{
    return latter;
}

//console.log(readLatter("i love you very much"));

let sendLatter = callback => {

    return callback("i love you very much!");
}

console.log(sendLatter(readLatter));*/
/*
let solveQuadratic = (a, b , c) => {
    
    let  x1 = (-b) + (((b*b) ** 0.5) - ((4 * a * c) ** 0.5));
    let result1 = x1 / 2 * a;
    let  x2 = (-b) - (((b*b) ** 0.5) - ((4 * a * c) ** 0.5));
    let result2 = x2 / 2 * a;
    let print = () => console.log(`x1 = ${result1}\t x2 = ${result2}`);
    print();
    //return result1;
}
//console.log(solveQuadratic(2,4,2));
let test = (a, b , c , callback) => {
    callback(a,b,c);
    
}
console.log(test(2,3,2 , solveQuadratic));*/

/*let herNames = ["Ruth","Okorocha","Chidinma"];
let getRuthFullname = (names) => {

    for(let name of names){
        console.log(name);
    }

}
//getRuthFullname(herNames);

let makeUseOfName = (array, callback) =>{
    callback(array);
    let getHerNames = `my names are ${array}`
    console.log(getHerNames);
};
makeUseOfName(herNames, getRuthFullname);*/
/*
let map = (array, callback) => {
    console.log('map() starts');
    const mappedArray = [];
    for (const item of array) {
        mappedArray.push(callback(item));
    }
    console.log('map() completed');
    return mappedArray;
}
let greet = name => {
    console.log('greet() called');
    return `Hello, ${name}!`;
}
const persons = ['Cristina', 'Ana'];

map(persons, greet);
//console.log(message);

const person = ['Ana', 'Elena'];
person.forEach(
    function callback(name) {
        console.log(name);
    }
);
const nameStartingA = person.find(name => {
    return name[0].toLowerCase() === 'a';
});
console.log(nameStartingA);

const countStartingA = person.reduce(
    function callback(count, name) {
        const startA = name[0].toLowerCase() === 'a';
        return startA ? count + 1 : count;
    },
    0
);
console.log(countStartingA);

const person1 = 'Cristina';

const tryReplace = person1.replace(/./g, 
    function(char) {
        return char.toLowerCase() === 'i' ? '1' : char;
    });
console.log(tryReplace);

console.log('setTimeout() starts');
setTimeout(() => console.log(`later() called`), 2000);
console.log('setTimeout() completed');

setTimeout(function later() {
    console.log(`2 seconds have passed!`);
},2000);*/

/*setInterval(() => {
    console.log(`Every 2 seconds`);
}, 2000);*/

console.log('start');

let getGreeting = (name, cb) => {
    cb(`Hello ${name}!`);
}

console.log('before getGreeting');

getGreeting('Maxim', (greeting) => {
    console.log(greeting);
});

console.log('end');

console.log('start');

let getGreetingAsync = (name, cb) => {
    setTimeout(() => {
        cb(`Hello ${name}!`);
    }, 0);
}
console.log('before getGreetingAsync');

getGreetingAsync('Maxim', (greeting) => {
    console.log(greeting);
});

console.log('end');
























































































































































































































































 
 









































































