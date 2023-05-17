// Dot Notation vs Bracket Notation
// Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

// Snippet 1:
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?

// Snippet 2:
// let ocean = {};
// let prefix = 'Indian';

// ocean[prefix] = 'Pacific';

// console.log(ocean); // ?

/*


// Snippet 1:
On line 10 the output should log: {prefix: 'Indian'}, the object property 'prefix' is created using dot notation as it enters the object via its name and direct access to the object properties via the dot notation and assigned a string value 'Pacific; and online 10 the console.log method is invoked to print the reference to that object via the variable name:

{prefix : 'Pacific'}



// Snippet 2:
On line 16 we reference the variable from line 14 whose value is string 'Indian' so this is added as a key to the object and assigned the string value 'Pacific` before invoking the console.log method on line 18 to print the object to the console:

{Indian : 'Pacific'}



*/