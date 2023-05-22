//Generating a table value:using loops to generate rows and also columns
const prompt = require("prompt-sync")();

/*let myTable = [];

let row = 0;
let columns = 0;
// let counter = 0;
for(; row < 3; row++){
    let tempTable = [row];
   for(; columns < 4; columns++){
       tempTable.push(columns);
       myTable.push(tempTable);
   }
}
console.log(myTable);
*/

// Create a table grid containing a nested array:

/*let gridArray = [];
let numberOfCells = 64;
let counter = 0;

var rowArray = [];

for(let row = 0; row < numberOfCells + 1; row++){
    if(counter % 8){
        if(row === undefined){
            let indicate = "first run" || "row is complete";
            console.log(indicate);
        }else{
            gridArray.push(row);
            continue;
        }

        gridArray.length = [];
    }
    counter++;
    let temp = counter;
    rowArray.push(temp);

    if(counter === 8){
        gridArray.push(row);
    }
}


console.log(gridArray);
console.table(gridArray);
*/

//construct an array as it loops through the increamenting value of x:
//showing several ways to access several array content:

/*let emptyArray = [];

for(let i = 0; i < 10; i++){
    emptyArray.push(i);
    
}
console.log(emptyArray);
for(let a = 0; a < emptyArray.length; a++){
    console.log(a);
}
for(let containedInArray of emptyArray){
    console.log(containedInArray);
}*/

//looping over object and internal arrays:

let simpleObj = {Primary : "Blue", Secondary: "Orange", Tertiary: "Black"};

//for(let colors in simpleObj){
   // console.log(simpleObj[colors]);
//}
let output;
let arrayObj = ["Blue", "Orange",  "Black"];
for(let i = 0; i < arrayObj.length; i++){
    output = arrayObj[i];
    console.log(output);

}
//for(arrays in arrayObj){
    //console.log(arrayObj[arrays]);
//}
//for(arrays of Object.keys(simpleObj)){
    //console.log(arrays);
//}

//let arrKeys = Object.keys(simpleObj);
//for(let i = 0; i < arrKeys.length; i++){
    //console.log(arrKeys[i] + ":" + simpleObj[arrKeys[i]]);
//}
//console.log(arrKeys);

//let arrKeys2 = Object.values(simpleObj);
//console.log(arrKeys2);

let stringVariable = "stringVariable";
let numberToSkip = 2;

for(let i = 0; i < 10; i++){

    if( i ===  numberToSkip ){

        break;
    }
    console.log(stringVariable.concat(i));
    


}


























