`use strict`;

function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    const order = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    return order;
}

makeTransaction(5, 3000);
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"

makeTransaction(3, 1000);
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"

makeTransaction(10, 500); 
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"