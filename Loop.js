// An Array that holds an Object:
const prompt = require("prompt-sync")();

/*let myWork = [];

for(let i = 0; i < 5; i++){
    
    let listOfObjects = [{name: 'Lesson 1',status: 1 % 1 === 0 ? true : false},
                         {name: 'Lesson 2', status: 2 % 2 === 0 ? true : false},
                         {name: 'Lesson 3', status: 3 % 3 === 0 ? true : false},
                         {name: 'Lesson 4', status: 4 % 4 === 0 ? true : false},
                         {name: 'Lesson 5', status: 5 % 5 === 0 ? true : false},
                         {name: 'Lesson 6', status: 6 % 6 === 0 ? true : false},
                         {name: 'Lesson 7', status: 7 % 7 === 0 ? true : false},
                         {name: 'Lesson 8', status: 8 % 8 === 0 ? true : false},
                         {name: 'Lesson 9', status: 9 % 9 === 0 ? true : false},
                         {name: 'Lesson 10', status: 10 % 10 === 0 ? true : false},
]
    let tempObject = {name: 'Lesson 11', status: 11 % 11 === 0 ? true : false};

    myWork.push(listOfObjects,tempObject);
    
};
console.log(myWork);
console.log(myWork.length);
*/

/*let check = 9 % 9 === 0 ? true : false;
console.log(check);*/

let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

for(let i = 0; i < array.length; i++){
    for(let j = 0; j < 3; j++){

        console.log(`i = ${i} and j = ${j} therefore the sum of array = ${array[i][j] + array[i][j]}`);
    }
}






















































