// Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

// Log all of the even values from myArray to the console.


let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach((element)=> {
  for (let index = 0; index < element.length; index++) {
    if (element[index] % 2 === 0) {
      console.log(element[index]);
    }
  }
})

// 6
// 4
// 2
// 4
// 16
// 0