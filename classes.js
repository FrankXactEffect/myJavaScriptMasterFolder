//Object Oriented Programming (OOP);
const prompt = require("prompt-sync")();
//objects
/*
let dog = {dogName: "JavaScript",
           weight : 2.4,
           color: "brown",
           breed: "chihuahua"
};*/

//syntax of a class;

class className {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}

//object created;
let obj = new className("arg1", "ar2");


/*let Dog = (dogName, weight, color, breed) => {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
};*/



class Dog{
    constructor(dogName,weight, color, breed) {

        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;

    }
}

/*let dog = new Dog("Javascript", 2.4, "brown", "chihuahua");

console.log(dog.dogName, "is a ", dog.breed, "and weights", dog.weight, "kg.");

class Person{
    constructor (firstName, lastName = "frank"){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let person = new Person("Prince", "john");
console.log(`my name are ${person.firstName}, ${person.lastName}`);*/

//Create a person class with instances of friends:

class person {
    constructor (firstname, surname) {
        this.firstname =  firstname;
        this.surname = surname;
    }

    fullName() {

        return this.firstname +" "+this.surname;

    }
}

let c = new person("ruth", "okorocha");
let f = new person("prince", "frank");
console.log(f.fullName());
//console.log(`hello! ${c.firstname} ${c.surname}\nhello! ${f.firstname} ${f.surname}`);
//get your friends exercise;



let solve = class {
    constructor (num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add(a , b){
        return a + b;
    }


}









/*class add{
    constructor (a , b) {
        this.a = a;
        this.b = b;
    }
}

s = new add(3, 4);
console.log(s.a + s.b);*/

//unnamed expression;

/*let Person = class {

    constructor (firstName, surName) {
        this.firstName = firstName;
        this.surName = surName;
    }

    greet(){
        let name = "rob"
        console.log('Hi there! I\'m', name);
    }

}

let p = new Person("frank", "ruth");
p.greet();



let Friend = class {
    constructor (aname, bname) {
        this.aname = aname;
        this.bname = bname;
    }

    greet(){
        console.log("Hi! there");
    }

    compliment(name, object) {
        return 'That\'s a wonderful ' + object + ',' + name;
    }
}

let r = new Friend("chi", "dera")
let compliment1 = r.compliment("joy", "shade");
console.log(compliment1);
*/








































