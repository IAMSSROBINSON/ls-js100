// Run the following code.

// let tweet = 'Woohoo! :-)';

// if (tweet.length() > 140) {
//   console.log('Tweet is too long!');
// }

// You'll see that it raises an error:
// TypeError: tweet.length is not a function
// Check the documentation of both TypeError and length, in order to find out what causes the error.

// The JavaScript exception "is not a function" occurs when there was an attempt to call a value from a function, but the value is not actually a function.
// .length is a property not a method or function thus parenthesis are not required and will not work
// removing the parenthesis should fix the code

// Fixed:
let tweet = 'Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-), Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}

// testing the .length property;
console.log("string", "Stephen".length); // The string "Stephen" is 7 characters in length
console.log("array", [1, 2, 3, 4].length); // This array is 4 elements in length (it contains 4 elements)


let object = {
	name: "Stephen"
}

console.log("object", object.length); // .length property of an object is undefined
console.log("dot notation", object.name.length); // you can use the .length property successfully on object key values using dot notation
console.log("bracket notation", object["name"].length); // you can use the .length property successfully on object key values using bracket string notation