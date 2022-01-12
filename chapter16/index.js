// Coding Challenge #1

let massOfMarkInKg = 78,
    massOfJohnInKg = 92;
let heightOfMarkInMeter = 1.69,
    heightOfJohnInMeter = 1.95;
const bmiOfMark = massOfMarkInKg / heightOfMarkInMeter ** 2;
const bmiOfJohn = massOfJohnInKg / heightOfJohnInMeter ** 2;
let markHigherBMI = false;

/* if (bmiOfMark > bmiOfJohn) {
    markHigherBMI = true;
} */

markHigherBMI = bmiOfMark > bmiOfJohn;

console.log("Mark's BMI = ", bmiOfMark);
console.log("John's BMI = ", bmiOfJohn);

console.log("Mark is having higher BMI than John: ", markHigherBMI);

/*
mass Of Mark = 78 kg
height Of Mark = 1.69 m
mass Of John = 92 kg
height Of John = 1.95 m
Mark's BMI =  27.309968138370508
John's BMI =  24.194608809993426
Mark is having higher BMI than John:  true
*/

/*
mass Of Mark = 95 kg
height Of Mark = 1.88 m
mass Of John = 85 kg
height Of John = 1.76 m
Mark's BMI =  26.87867813490267
John's BMI =  27.44059917355372
Mark is having higher BMI than John:  false
*/