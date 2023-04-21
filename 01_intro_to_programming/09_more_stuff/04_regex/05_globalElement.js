// How do you check the global presence of a pattern
// To check the global presence of each individual element in a pattern we call the method .match() of a string object and pass in forward slashes with an array between them with the pattern inside. Outside the final forward slash we add the g for global option 
// each substring will attempt to be matched
// if matched it is returned in an array with other substring elements that have been matched for as many times as they were matched
// if there is no match then null is returned
// when the g global option is not present the first element of the array will attempt to be matched and will return an array with the information a normal .match() method would return

console.log("Hello".match(/[lo]/g));

// Expect:
// ['l', 'l', 'o']

// Returned: [ 'l', 'l', 'o' ]