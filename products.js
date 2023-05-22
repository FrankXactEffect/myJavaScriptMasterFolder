//Products Catalog:

let storeInventoryList = ["Oranges", "Apples", "Bananas", "Lettuce", "Tomatoes", "Milk", "Eggs"];
storeInventoryList.length = 0;
console.log(storeInventoryList);
storeInventoryList.push("Brass","Lead","Aluminium","Steel","Line Hardware","insulators","Cables","poles");
console.log(storeInventoryList.length);
console.log(storeInventoryList);

let accessories1 = {itemName: "samsungMonitor", 
                    model: "F27T452FQR",
                    cost: "$167.64",
                    quantity: 7};

let accessories2  = {itemName: "fronTechSpeaker", 
                     model: "SW-0051",
                     cost: "$7.62",
                     quantity: 10};

let accessories3 = {itemName: "asusMotherBoard",
                    model:"Z690",
                    cost:"$1,239.42",
                    quantity:10};

console.log(accessories1.model);
let variable = "model";
console.log(accessories2[variable]);

storeInventoryList.push(accessories1,accessories2,accessories3);
console.log(storeInventoryList);
let accessTheItem3 = storeInventoryList[10].quantity;
console.log(accessTheItem3);
console.log(storeInventoryList[10]);
console.log(storeInventoryList.find(e => e === accessories1.itemName));
storeInventoryList.sort();
console.log(storeInventoryList);
console.log(storeInventoryList.includes(accessories1));
console.log(storeInventoryList.indexOf(accessories1));
console.log(storeInventoryList[6].cost);
let lastElementIndex = storeInventoryList.lastIndexOf("poles");
console.log(lastElementIndex);
let firstCost = storeInventoryList[6].cost;
let secCost = storeInventoryList[7].cost;
let thrdCost = storeInventoryList[8].cost;
console.log(`costOfAccessories \n ______________ \n 1:samSung----- ${firstCost}\n 2:fronTech----${secCost}\n 3:asus----${thrdCost}`);
let check = Symbol(firstCost);
let check1 = Symbol(secCost);
console.log(check === check1);
console.log(storeInventoryList[storeInventoryList.length -2]);
console.log(typeof storeInventoryList[1]);







