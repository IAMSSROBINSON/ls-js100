// What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*

On line 16 a string argument is passed into the function on line 3. 
On line 3 the value of the argument is initialized to a local variable in as parameter.
The value of the parameter matches the case clause on line 7 for strict equality and the console.log statement on line 8 executes. 
No break statement is present so the clause falls through to all cases below including the default clause thus printing console.log statements on lines 10 and 12 also:

Product2
Product3
Product not found!

*/