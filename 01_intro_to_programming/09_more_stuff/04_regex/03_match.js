// What is .match()
// .match() is a method of RegEx object performed on a String
// .match() allows for checking wether a pattern argument is present in a given string.
// if the pattern is present the method returns an array with information about the pattern matched
// if the pattern is not matched then null is returned
// the .match() method generates more information on the return than .test() boolean and thus takes more time to process and has performance and memory costs.

// Example:

console.log(Object.values("Hello".match('ll')));

// Expect: 
// ['ll', index: 2, input: 'Hello', groups: undefined]

// Result: 
// [ 'll', index: 2, input: 'Hello', groups: undefined ]