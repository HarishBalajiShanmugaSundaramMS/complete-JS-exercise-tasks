const bills = [125, 555, 44];
const tips = [];
const total = [];
let individualTipAmount;
let individualTotalAmount;

bills.forEach(individualBillAmount => {
    const calcTip = () => {
        tips.push(individualTipAmount);
        individualTotalAmount = individualTipAmount + individualBillAmount;
        total.push(individualTotalAmount);
    }

    if (individualBillAmount > 50 && individualBillAmount < 300) {
        individualTipAmount = (individualBillAmount) * (15 / 100);
        calcTip();
    }
    else if (individualBillAmount >= 300) {
        individualTipAmount = (individualBillAmount) * (20 / 100);
        calcTip();
    }
    else {
        individualTipAmount = (individualBillAmount) * (0 / 100);
        calcTip();
    }
});

console.log("Bills", bills);
console.log("Tips", tips);
console.log("Total", total);