// Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

function evenOrOdd (int) {
  let result = int % 2 === 0 ? 'even' : 'odd';
  console.log(result);
}
evenOrOdd(2); // even
evenOrOdd(5); // odd



