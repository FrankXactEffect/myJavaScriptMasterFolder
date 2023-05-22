


let currencyConversionRate = () => {
    // console.log("");

    function dollarTonaria() {
        let dollarCurrency = parseInt(prompt(`enter amount in dollar$: `));
        // alert(rwandaCurrency);
        let conversionFormular = dollarCurrency * 750;
        alert('your exchange from dollar to naria ==' + conversionFormular + "naria");

    };
    function poundsTonaria(){
        let poundsCurrency = parseInt(prompt(`enter amount in pounds: `));
        // alert(rwandaCurrency);
        let conversionFormular = poundsCurrency * 910;
        alert('your exchange from pounds to naria ==' + conversionFormular + "naria");
    };
    
    function rwandaTonaria(){
        let rwandaCurrency = parseInt(prompt(`enter amount in rewanda franca: `));
        // alert(rwandaCurrency);
        let conversionFormular = rwandaCurrency * 2.41;
        alert('your exchange from rwanda to naria ==' + conversionFormular + "naria");
    }
    
    let currencyRate = `--------Exchange Rate cost in naria---------\n1.Dollar ----------- 750naria\n2.Pounds ---------- 910naria\n3.Rwanda-France ---------2.41naria`;
    alert(currencyRate);


    let promptUserSelction = () => {
        let customerSelection = prompt('please enter exchange option: ');
        // prompt(customerSelection);
        if (customerSelection == '1') {
            dollarTonaria();
        } else if (customerSelection == '2') {
            poundsTonaria();
        } else if (customerSelection == '3') {
            rwandaTonaria();
        }
    }

    promptUserSelction();

}

currencyConversionRate();