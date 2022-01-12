// Type Conversion
let flagValue = 'true';
console.log(flagValue);
console.log(typeof flagValue);
flagValue = Boolean(flagValue);
console.log(typeof flagValue);
console.log(flagValue);

let alphaNumericValue = 'A3';
console.log(typeof alphaNumericValue);
alphaNumericValue = Number(alphaNumericValue);
console.log(alphaNumericValue);

let numericValue = 108;
console.log(typeof numericValue);
numericValue = numericValue + 'GmbH';
console.log(numericValue);
console.log(typeof numericValue);

flagValue = false;
console.log(flagValue);
flagValue = String(flagValue);
console.log(flagValue);
console.log(typeof flagValue);


// Type Coercion