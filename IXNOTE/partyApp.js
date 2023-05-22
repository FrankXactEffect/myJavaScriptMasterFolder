function partyApp(){


    alert(`***welcome to the party***`);
        
    alert("***Party Menu***\n1. Age 1 - 12\n2. Age 13 - 18\n3. Age 18 - 30\n4. Age 31 - above");
    let askUserName = prompt("what is your name? ");
    let askUserAge = Number(prompt("how old are you "+askUserName+"?"));
    if(askUserAge <= 12){
        alert(askUserName + " you got a free entry!,you are welcome,have fun!")
    }else if(askUserAge <= 13 || askUserAge <= 18){
        alert(`sorry ${askUserName}! you've got to pay a ticket fee of 500$,before entry`);
    }else if(askUserAge >= 18 && askUserAge <= 30){
        alert(`sorry ${askUserName}! you've got to pay a ticket fee of 1000$,before entry`);
    }else if((askUserAge >= 31)){
        alert(`Ooops! ${askUserName}, you are not eligible for this party,kindly live this premises`);
    }else{
        alert('warning!!..you made a wrong entry');
        
    }
    
}

partyApp();