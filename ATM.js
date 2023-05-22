// A typical ATM Banking Machine

const prompt = require("prompt-sync")();

let userAccountDetails = {userName: "Frank Prince",
                          acctNumber: 0034343400,
                          userPin: "2233",
                          bankName: "Insurance Trust Bank Plc",
                          acctDate: "oct-12-2022",
                          acctBalance: 150000
                        }
//let checkHasAnAcct = userAccountDetails ? true + " has an account" : "dosent have an account detail";
//console.log(checkHasAnAcct);
let condition = 0;


do{
    let userInput;
    userInput = prompt("Enter your account Pin: ");
    console.log(userInput);
    if(userInput === userAccountDetails.userPin){
        console.log(`ITB ACCOUNT NAME: ${userAccountDetails.userName} `);
        break;
    }else if(condition === 0){
        console.log("wrong pin!!!");
    }else if(condition === 1){
        console.log("warnning, failure to get the correct pin will result into blocking");
    }else{
        console.log("you are blocked!!");
        return;
    }
    condition++;
}while(condition < 3);


let atmServices;
do{
    console.log("24/hrs Automated Teller Machine (ITB.Plc)");
    console.log("_________________________________________");
    console.log("Transaction Options");
    console.log("___________________");

    atmServices = "1. Deposit\n2. Transfer\n3. Withdrawal\n4. Balance inquiries\n5. Change pin\n6. Open a New Account";
    console.log(atmServices);
}while (!(true));
let userSelection = prompt("Select an option to continue: ")

let depositEntery;
depositEntery = Number(prompt("Enter Amount: "))
let transferEntery;
let withdrawalEntery;
let nameEntery;
let bankEntery;
let genderEntery;
let statusEntery;
let openEntery;
let pinEntery;
let atmMachine = {i:  depositEntery + userAccountDetails.acctBalance,
                  ii: transferEntery - userAccountDetails.acctBalance,
                  iii: withdrawalEntery - userAccountDetails.acctBalance,
                  iv: userAccountDetails.acctBalance,
                  v: userAccountDetails.userPin = pinEntery,
                  vi:{Name: nameEntery,
                                BankName: bankEntery,
                                gender: genderEntery,
                                status: statusEntery,
                                openDate: openEntery}
};
// console.log(atmMachine.i.money)


let message;
if(userSelection === "i"){
    let depositorName = prompt("Enter depositor Name: ");
    console.log("loading...")
    let confirm = depositorName === userAccountDetails.userName ? "CONFIRMED!!!" : "UNKNOWN";
    console.log(confirm);
    let despositAcctNum = prompt("Enter account digits: ");
    let updates = 0;
    do{
        console.log("loading...");
        console.log("Processing...");
        console.log("Trasaction in Progress...");
        updates++;

    }while (updates < 2)
    
    console.log(`CREDITED:\n${depositEntery}\n${depositorName}\n${userAccountDetails.bankName}\n${despositAcctNum}\nBal: N${atmMachine.i}`);
    message = `TRANSACTION SUCCESS!!!\nCURRENT BALANCE: N${atmMachine.i}`;
    console.log(message + "\nDEPOSITED AND SAVED\nThank you for banking with us!!!");

}




