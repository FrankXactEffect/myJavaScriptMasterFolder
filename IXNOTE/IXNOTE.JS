// const prompt = require("prompt-sync")();


// console.log("***You are welcome!***");
// let userName = prompt("what is your name: ");
// console.log("\n1. Age 1 - 12\n2. Age 13 - 18 \n3. 18 - 30\n4. 31 - above\n ");
// let askUserForAge = Number(prompt("what age group do you belong: "));

// switch(askUserForAge){
//     case 1:
//         console.log(userName + " you are eligible for this party, with no ticket fee to pay");
//         break;
//     case 2:
//         console.log(userName + " you are eligible, but you have to pay a ticket fee of $500");
//         let wouldLikeToPay = prompt("would you like to pay ? ");
//         if (wouldLikeToPay == "Yes"){
//             console.log("very well then!, you are welcome");
//         }else{
//             console.log("you can kindly live");
//         }
//         break;
//     case 3:
//         console.log(userName + " you are eligible, but you have to pay a ticket fee of $1000");
//         wouldLikeToPay = prompt("would you like to pay ? ");
//         if (wouldLikeToPay == "Yes") {
//             console.log("very well then!, you are welcome");
//         } else {
//             console.log("you can kindly live");
//         }
//         break;
//     case 4:
//         console.log(userName + " you are not eligible for this party, kindly live this premises");
//         break;
//     default:
//         console.log("Warning invalid entry"); 
// }

// function partyApp() {
//     let is_working = true;
//     do {
//         alert(`***welcome to the party***`);
//         alert("1. Age 1 - 12 -----Free\n2. Age 13 - 18 -----$500\n3. Age 18 - 30 ----- $1000\n4. Age 31-above ----- not eligible");
//         // let userName = prompt("what is your name: ");
//         // if (userName.length < 5) {
//         //     alert("name must contain at least 5letters🚫");
//         //     break;
//         // }
//         let howOldIsUser = Number(prompt("how old are you: "));

//         for (let i = 0; i < 40; i++) {
//             switch(howOldIsUser){
//                 case (i == howOldIsUser && i <= 10):
//                 case (i == howOldIsUser && i <= 12):
//                     alert("free entry");
//                     break;
//                 case (i == howOldIsUser && (i <= 13)):
//                 case (i == howOldIsUser && (i <= 18)):
//                     alert(userName + "you need to pay a ticket fee of $500");
//                     break;
//             }
//         }
        //     if (i === howOldIsUser) {
        //         if (i <= 12) {
        //             alert(" free entry!!");
        //             break;
        //         } else if (i < 13) {

        //         } else if ((i >= 18) && (i < 30)) {
        //             alert(userName + "you need to pay ticket fee of $1000");
        //             break;
        //         } else if ((i === 31) || (i > 31)) {
        //             alert(userName + " live  at once!");
        //             break;
        //         }
        //     }
        // }

//     } while (!(is_working == true));
// }

// partyApp();

// FORLOOP  WHILE ,DO WHILE, 

// let mulTwoNumbers = (a, b) => {
//     if ((a < 5) && (b > 5)) {
//         if ((a > 0) && (b < 10)) {
//             return a * b;
//         }
//         return 0
//     }
//     return 0
// }

// let x = mulTwoNumbers(2, 11);
// console.log(x);


// (function (name){
//     console.log(`goodMorning! ${name}`);
// })('frank');

// (function () {
//     let a = parseInt(prompt(`enter value a: `));
//     let b = parseInt(prompt(`enter value b: `));
//     let sumTwoValues = `${a} + ${b} = ${a + b}`;
//     console.log(sumTwoValues);
// })();
// let addTwoValues = () => {
//     let a = parseInt(prompt(`enter value a: `));
//     let b = parseInt(prompt(`enter value b: `));
//     let sumTwoValues = `${a} + ${b} = ${a + b}`;
//     // console.log(sumTwoValues); 
//     return sumTwoValues;
    
// }

// console.log(addTwoValues());


// let findTheSqrOfX = (x) => (x * x);
// console.log(`the square of 7 = ${findTheSqrOfX(7)}`);

// let findSqrt = (x) => {
//     return Math.sqrt(x);
// }
// console.log(findSqrt(49));


// let checkIfEvenOrOdd = () => {
//     let number = parseInt(prompt("enter value: "))
//     if (number % 2 == 0){
//         console.log('even');
//     }else{
//         console.log('odd');
//     }
    
// }

// checkIfEvenOrOdd();


// let conversion = () => {
//     let degreeCel = parseInt(prompt("enter degree: "));
//     let formular = (degreeCel * 9/5) + 32;
//     console.log(`conversion of ${degreeCel}deg to faranheit = ${formular}F`);
// }

// conversion();
// array destructing 
// let arrayDestruct = {a:2,b:3,c:4};
// let {a,b,c} = arrayDestruct;
// console.log(a);
// console.log(b);
// console.log(c);


// let test = true;
// let check = test ?  "complier is working ...." : "an error found, stopped working!";
// console.log(check);


// let concat1 = "I am reading ";
// let concat2 = "a book";
// let name = "frank ";
// let join = `my name is ${name} and ${concat1} ${concat2}`;
// console.log(join);
// console.log(concat1.concat(concat2).toUpperCase().includes('AM'));


// let song = `Two little black birds
// sitting on the wall
// one named Peter , one named Paul`;
// console.log(song);

// let checkEmailFormat = () => {
//     let emailFormat = "@gmail";

//     let promptUser = prompt("Enter your email: ");
//     if(promptUser.includes(emailFormat)){
//         console.log("your email is verified!")
//     }else{
//         console.log("wrong format");
//     }
// }
// checkEmailFormat();


// loops;


// for(let i =  1; i < 10+1; i+=2){
//     console.log(i);
// }
// let upgradeStudentScore = () => {
//     let addedMark = 2;
//     let cutOffMark = 10;
//     let studentScore = [2,6,7,3,7,8,4,10];
//     for(let i = 0; i < studentScore.length; i++){
        
//         if(studentScore[i] < cutOffMark){
//             studentScore[i] += addedMark;
//             console.log(`Person ${i} got previous score upgraded to:  ${studentScore[i]}`);
//         }else{
//             console.log(studentScore[i]," :has no need for an upgraded mark");
//             continue;
            
//         }
//     }
// }


// upgradeStudentScore();

// let arr1 = ["one","two","three"];
// let arr2 = ["four","five","six"];
// let mergeTwoArr = arr1.concat(arr2);
// console.log(mergeTwoArr);
// arr1.splice(0,0,"six");
// console.log(arr1);
// let arr3 = [...arr1,...arr2];
// console.log(arr3);




// let scores = [12,34,32,56,76,45,53,34,76];
// let itrate = scores.forEach((score,index) => console.log(score));
// console.log(itrate);


// let numbers = [];
// let evenNumber = [];
// let oddNumber = [];

// for(let i = 1; i < 100 + 1; i++){
//     numbers.push(i);
//     if(i%2==0){
//         evenNumber.push(i)
//     }else{
//         oddNumber.push(i);
//     }
   
// }

// console.log(numbers);
// console.log('even: ', evenNumber);
// console.log('odd: ', oddNumber);



// let score = [2,3,4,5,6,7];

// let forEach = (element, index) => {
//         element += 2;
//         console.log(element);
// }
// score.forEach(forEach);

// return a new array;extension tabnine starter
// you dont use forEach  method on an empty array
// doesnt alter any of the original array

// let mapElement = (item, index) => {
//     item += 3;
//     console.log(item);
// }

// score.map(mapElement);

// let map = score.map((item,index) => {
//     return item;
// })

// console.log(map)
// let scoreSorted =[4,9,16,25];
// let testScore = [20, 13, 15, 46, 24, 57, 45, 65, 34];

// let failedStudent = (element , index, array) => {
//     if(array[index] <=   20){

//         return array;

//     }
// }
// console.log(testScore.filter(failedStudent));

// console.log(testScore.sort());

// console.log(scoreSorted.sort());



// class Person{
//     name;
//     age;
//     major;
//     isMarried;
//     school;

//     constructor(name, age, major){
//         this.name = name;
//         this.age = age;
//         this.major = major;
//         this.isMarried = true;
//         this.school = "unijos"


//     }

//     getUser(){
//         console.log(`my name is ${this.name} , i am ${this.age}years old and ${this.major} is a major i study in the university`);

//     }

// }

// let newObj = new Person('frank',19,'computer science');

// console.log(newObj);
// newObj.getUser();

// let emty =  {};
// for(let i = 0; i <= 5; i++){
//     emty[i] = new Person('frank',19, 'computer');
// }

// console.log(emty);
// class Person_two{

//     username;
//     age;
//     constructor( name, age){
//         this.username = name;
//         this.age = age;
        
//     }

//     name(){
//         return `this user is ${this.username}`;
//     }
//     userAge() {
//         return `this user is ${this.age}`;
//     }
// }

// let newP = new Person_two('frank',18);
// console.log(newP.name());
// console.log(newP.userAge());




// class StudentId{
//     firstName;
//     lastName;
//     dept;
//     faculty;
    


//     constructor(firstName,lastName,dept,faculty){

//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dept = dept;
//         this.faculty = faculty;
//     }


//     matricNumber(){

//         let userUniversity = prompt("Enter your university: ");
//         if(userUniversity == "UNIJOS"){
//                 let mat_list = [100, 101, 102, 103, 104, 105, 106];
//                 let rand = Math.floor(Math.random() * mat_list.length);
//                 let randMat = mat_list[rand];
//                 // console.log(randMat);

//                 let format = `UJ/2018/${this.faculty}/${randMat}`;
//                 console.log(format);
//         }else{
//                 let getMatric = userUniversity.substring(3);

//                 console.log(`${getMatric}/2018/${this.firstName.substring(0, 1)}${this.lastName.substring(0, 1)}/${this.dept == 'Medcine' || this.dept == 'Medlab' ? this.dept.substring(0, 3) : this.dept.substring(0, 1)}`);
                
//         }

//     }



// }


// let student1 = new StudentId('Frank','Prince','ComputerSci','NS');
// let student2 = new StudentId('Joy', 'Ken', 'Mathematics', 'NS');
// let student3 = new StudentId('Ola', 'Olu', 'Medcine', 'NS');
// let student4 = new StudentId('Fath', 'Ojo', 'Chemistry', 'NS',);
// // student1.matricNumber();
// // student2.matricNumber();
// // student3.matricNumber();
// // student4.matricNumber();
// // student1.detail();
// console.log(student1);
// student1.matricNumber();


// Static backdrop


let h1 = document.getElementsByClassName("title");
let topics = document.getElementById("topic");
console.log(topics.item)
// check console.log
console.log(h1);
let tagele = document.getElementsByTagName("h2");
// in a case when we want to select one from the many types 
console.log(tagele.item(0).innerHTML);

let element = document.querySelector(".title");
let element2 = document.querySelector("ul");
console.log(element2.children);
// console.log(element);

// converting to array----->can now use array method
let list = Array.from(element2.children);
list.forEach((li) =>{
        li.style.color = "blue";
        li.innerHTML = `we treated ${li.innerHTML} already in the class`;
        li.addEventListener('click',(e)=>{
                li.remove();
        })
});

let h2 = document.querySelectorAll("h2");
let list2 = Array.from(h2);
list2.forEach((h2)=>{
        // styling each of them with color red;
        h2.style.color = "red";
        // updating the element with a new text.
        h2.innerHTML = `it working ${h2.innerHTML} for all h2`;
})

// events 
// code can be executed when an event occur
// name of event (what happens wen button is clicked);
// takes in 2 parameters 

// addevenloistener to h1
let e = document.querySelector("h1");
e.addEventListener('click',(event)=>{
        e.innerHTML = "I am Currently Learning Dom";
        e.style.color = "green"

});



let single = document.getElementsByTagName("li");
let s = single.item(0).innerHTML
let con = Array.from(s);
con.forEach(e,()=>{
        e.innerHTML = `i have covered this topic ${li.innerHTML}`;
})






































