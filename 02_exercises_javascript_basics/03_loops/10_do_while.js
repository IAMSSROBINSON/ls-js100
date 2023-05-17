// What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.

// let counter = 0;

// while (counter > 0) {
//   console.log('Woooot!');
//   counter -= 1;
// }


let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

/*

A doWhile loop will execute the execution block at least once before it evaluates the conditional expression of the while clause to see if it should iterate again. This is in contract to a while loop who's condition expression must first evaluate to a truthy value before it executes the first iteration of the execution block.

*/