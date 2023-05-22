const prompt = require("prompt-sync")();

class Inventory {

    discountGoodsPrice;
    totalNumberOfGoods;
    totalGoodsSold;

    constructor(discountGoodsPrice, totalNumberOfGoods, totalGoodsSold) {
        this.discountGoodsPrice = 10;
        this.totalNumberOfGoods = 10;
        this.totalGoodsSold = 0;
    }

    productMenu() { };
    addToCart() { };
    posPrompt() { };

}
let newInventory = new Inventory();

class OperateOnlineStore extends Inventory {
    totalCostOfItem;
    constructor(discountGoodsPrice, totalNumberOfGoods, totalGoodsSold, totalCostOfItem) {

        super(discountGoodsPrice, totalNumberOfGoods, totalGoodsSold);
        this.totalCostOfItem = totalCostOfItem;
    }

    productMenu() {
        let count = true;
        do {
            console.log(`
                        *List of Items Available*
                        =========================
                        1.laptop--------2,000$\n
                        2.mouses---------6,00$\n
                        3.monitor---------2,500$\n
                        4.printer---------3,000$\n
                        5.photocopyMachine--------5000$\n
                        6.cables----------2,00$\n
                        7.keyboard-----------7,00$\n
                        8.systemUnit-----------2000$\n
                        9.1TB SSD-------------8,500$\n
                        10.1TB HDD------------4,500$`);
        } while (!(count == true));

    }

    addToCart() {

        let laptop = 2000;
        let mouses = 600;
        let monitor = 2500;
        let printer = 3000;
        let photocopyMachine = 5000;
        let cables = 200;
        let keyboard = 700;
        let systemUnit = 2000;
        let ssd1TB = 8500;
        let hdd1TB = 4500;
        let totalCost = laptop + mouses + monitor + printer + photocopyMachine + cables + keyboard + systemUnit + ssd1TB + hdd1TB;
        this.totalCostOfItem = totalCost + "$";
        function userPurchase() {
            let addItemToCart = [];
            let shopping = true;
            while (shopping) {
                let buyAnItem = prompt("what would you like to buy? ");
                let countItemsInCart = 0;
                countItemsInCart += addItemToCart.length;
                if (buyAnItem === 'laptop') {
                    console.log(`laptop cost ${laptop}$`);
                    let ask = prompt("would you like to add to cart? ");
                    if (ask == 'yes') {
                        addItemToCart.push("purchase laptop for " + laptop + "$");
                    }

                } else if (buyAnItem == 'mouses') {
                    console.log(`mouses cost ${mouses}$`);
                    let ask = prompt("would you like to add to cart? ");
                    if (ask == 'yes') {
                        addItemToCart.push("purchase mouses for " + mouses + "$");
                    }
                } else if (buyAnItem == 'monitor') {
                    console.log(`monitor cost ${monitor}$`);
                    let ask = prompt("would you like to add to cart? ");
                    if (ask == 'yes') {
                        addItemToCart.push("purchase monitor for " + monitor + "$");
                    }
                } else if (buyAnItem == 'printer') {
                    console.log(`printer cost ${printer}$`);
                    let ask = prompt("would you like to add to cart? ");
                    if (ask == 'yes') {
                        addItemToCart.push("purchase printer for " + printer + "$");
                    }
                } else if (buyAnItem == 'photocopyMachine') {
                    console.log(`photocopyMachine cost ${photocopyMachine}$`);
                    let ask = prompt("would you like to add to cart? ");
                    if (ask == 'yes') {
                        addItemToCart.push("purchase photocopyMachine for " + photocopyMachine + "$");
                    }
                } else if (buyAnItem == 'cables') {
                    console.log(`cable cost ${cables}$`);
                    let ask = prompt("would you like to add to cart? ");
                    if (ask == 'yes') {
                        addItemToCart.push("purchase cable for " + cables + "$");
                    }
                } else if (buyAnItem == 'keyboard') {
                    console.log(`keyborad cost ${keyboard}$`);
                    let ask = prompt("would you like to add to cart? ");
                    if (ask == 'yes') {
                        addItemToCart.push("purchase keyboard for " + keyboard + "$");
                    }
                } else if (buyAnItem == 'systemUnit') {
                    console.log(`systemunit cost ${systemUnit}$`);
                    let ask = prompt("would you like to add to cart? ");
                    if (ask == 'yes') {
                        addItemToCart.push("purchase systemUnit for " + systemUnit + "$");
                    }
                } else if (buyAnItem == 'ssd1TB') {
                    console.log(`ssd1TB cost ${ssd1TB}$`);
                    let ask = prompt("would you like to add to cart? ");
                    if (ask == 'yes') {
                        addItemToCart.push("purchase ssd1TB for " + ssd1TB + "$");
                    }
                } else if (buyAnItem == 'hdd1TB') {
                    console.log(`hdd1TB cost ${hdd1TB}$`);
                    let ask = prompt("would you like to add to cart? ");
                    if (ask == 'yes') {
                        addItemToCart.push("purchase hdd1TB for " + hdd1TB + "$");
                    }
                } else if ((buyAnItem == 'nothing') || (buyAnItem == 'am done')) {
                    shopping = false;
                    console.log("Number of items in cart: " + countItemsInCart);
                }

            }

        }
        userPurchase();
    }
}

let newPOSMachine = new OperateOnlineStore();
newPOSMachine.productMenu();
newPOSMachine.addToCart();