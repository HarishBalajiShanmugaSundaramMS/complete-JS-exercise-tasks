// Coding Challenge #2

let massOfMarkInKg = 95,
    massOfJohnInKg = 85;
let heightOfMarkInMeter = 1.88,
    heightOfJohnInMeter = 1.76;
const bmiOfMark = (massOfMarkInKg / heightOfMarkInMeter ** 2);
const bmiOfJohn = massOfJohnInKg / heightOfJohnInMeter ** 2;
let markHigherBMI = false;

let markMessage = (`Mark's (${(parseFloat(bmiOfMark)).toFixed(2)}) is higher than John's (${parseFloat(bmiOfJohn).toFixed(2)})`);
let johnMessage = (`John's (${(parseFloat(bmiOfJohn)).toFixed(2)}) is higher than Mark's (${parseFloat(bmiOfMark).toFixed(2)})`);


if (bmiOfMark > bmiOfJohn) {
    markHigherBMI = true;
    console.log("Mark's BMI is higher than John's...");
    console.log(markMessage);
}
else {
    console.log("John's BMI is higher than Mark's...");
    console.log(johnMessage);
}

/*
mass Of Mark = 95 kg
height Of Mark = 1.88 m
mass Of John = 85 kg
height Of John = 1.76 m
John's BMI is higher than Mark's...
John's (27.44) is higher than Mark's (26.88)
*/