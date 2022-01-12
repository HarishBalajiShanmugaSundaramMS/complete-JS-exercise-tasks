let billAmount = 275;
let tip = 0;
let finalBillToPay = billAmount;

if (!(billAmount < 50)) {
    (billAmount >= 50 && billAmount <= 300) ? tip = (billAmount) * (15 / 100) : tip = (billAmount) * (20 / 100);
    finalBillToPay = billAmount + tip;
}

console.log(`The bill amount: ${billAmount}
The tip amount: ${tip}
The total amount paid: ${finalBillToPay}`);



if (billAmount >= 50 && billAmount <= 300) {
    tip = (billAmount) * (15 / 100);
    finalBillToPay = billAmount + tip;
}
else if (billAmount > 300) {
    tip = (billAmount) * (20 / 100);
    finalBillToPay = billAmount + tip;
}
