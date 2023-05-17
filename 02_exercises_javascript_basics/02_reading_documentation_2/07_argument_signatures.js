// How many arguments does the Array.prototype.join() method expect? What happens if you call it with less or more arguments?

// Array.join() 
// Turns elements in an array into a string value
// Expects 1 argument - a string value separator e.g. a comma (",") or a specified separator string value (" and ")
// if called with no separator it will turn the array into a string and use a comma as a default separator
// if only 1 element is in the array the string is returned with no separator
// if more than one separator is called the first will be used and the rest ignored
// undefined and null elements are turned into an empty string space

let array = [1, 2, 3, undefined, null];
console.log(array.join()); // uses comma as default separator
console.log(array.join(",")); // separates elements with comma
console.log(array.join("")); // reduces any spaces between elements to none
console.log(array.join(" and ")); // uses "and" as a separator between elements
console.log(array.join(" and ", ",")); // ignores any separators after the initial one
console.log(typeof array.join()); // returns typeof string dataType