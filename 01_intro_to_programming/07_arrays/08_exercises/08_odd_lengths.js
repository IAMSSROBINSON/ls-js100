// This problem is more challenging than most in this book. Don't worry if you can't solve it on your own.

// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

/*

Using the .reduce() method write a function that takes an array of strings of varying lengths and works out the string lengths and returns an array with the lengths expressed as integers of the odd string value lengths

equation:
the input is an array of strings: 
  let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

the output is an array of odd lengths:
  odd: [1, 5, 3];

the initializer therefore should be an empty array that values are added to
the .reduce.() method will visit each element one at a time and if the current element.length % 2 !== 0 then it is odd so we want to add the element.length to the accumulator empty array, so we can .push(element.length) and then when the iterations are complete the accumulator array can be returned

*/

function oddLengths (array) {
  return array.reduce((accumulator, element)=>{
    if (element.length % 2 !== 0) {
      accumulator.push(element.length);
    }
  return accumulator;
}, []);
}
