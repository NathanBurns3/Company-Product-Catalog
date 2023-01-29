// Array to hold the inventory of store items
Inventory = [];

// 3 objects
let item1 = {
    name: "iPhone",
    model: "14 Pro Max",
    cost: 1199.00,
    quantity: 500
};

let item2 = {
    name: "MacBook",
    model: "Pro M2",
    cost: 1299.00,
    quantity: 250
};

let item3 = {
    name: "AirPods",
    model: "Max",
    cost: 549.00,
    quantity: 150
};

// Add all 3 objects to the array
Inventory.push(item1, item2, item3);

// log the Inventory arrary to the console
console.log(Inventory);

// log the quantity element of the 3rd item to the console
console.log(Inventory[2].quantity);