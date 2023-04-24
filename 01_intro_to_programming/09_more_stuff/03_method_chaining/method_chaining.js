let philosopherName = "plato aristocles";
console.log(philosopherName);

let philosopherNameUpper = philosopherName.toUpperCase(); // non mutating, returns substring
console.log(philosopherNameUpper);

let nameArray = philosopherNameUpper.split(" "); // non mutating, returns array
console.log(nameArray);

nameArray.reverse(); // mutates and reverses order of array elements
console.log(nameArray);

let nameString = nameArray.join(" "); // non mutating, turns array to string value
console.log("Separate: ",nameString);

// OR

console.log("Chaining: ",
philosopherName
.toUpperCase()
.split(' ')
.reverse()
.join(' '));

