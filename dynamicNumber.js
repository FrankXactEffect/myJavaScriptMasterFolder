// Evaluating a number Game:
const prompt = require("prompt-sync")();

 let dynamicValue = 1024;
do{
    
    let getUserEntery = prompt("Enter a number: ");
    getUserEntery = Number(getUserEntery);


    if(getUserEntery > dynamicValue){
        console.log(`${getUserEntery} grater than ${dynamicValue}`);
    }else if(getUserEntery == dynamicValue){
        console.log(`${dynamicValue} \nyou win!🥇🥇🥇`);
        break;
    }else if(getUserEntery < dynamicValue){
        console.log(`${getUserEntery} less than ${dynamicValue}`);
    }else{
        console.log("syntax Erro!!!, Enter the correct value");
    }

       
}while(true);


        


