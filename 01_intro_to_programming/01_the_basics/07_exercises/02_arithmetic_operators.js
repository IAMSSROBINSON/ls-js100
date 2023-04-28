// Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

// thousands place is 4
// hundreds place is 9
// tens place is 3
// ones place is 6

let number = 4936;
console.log(number);

let ones = number % 10;
console.log(ones);

number = number - ones;
console.log(number);

let tens = (number / 10) % 10;
console.log(tens);

number = number - ((number / 10) % 10) * 10;
console.log(number);

let hundreds = (number / 100) % 10
console.log(hundreds);

number = number - (hundreds * 100);
console.log(number)

let thousands = number / 1000
console.log(thousands)

console.log(`\nthousands place is ${thousands}`);
console.log(`hundreds place is ${hundreds}`);
console.log(`tens place is ${tens}`);
console.log(`ones place is ${ones}\n`);