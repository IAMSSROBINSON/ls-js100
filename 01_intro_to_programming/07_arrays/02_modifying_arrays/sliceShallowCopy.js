let array = [10, 20, 30, 40, 50];
console.log(array);

let savedSlicedArray = array.slice(); // makes shallow copy of array and returns it
console.log(savedSlicedArray); 

savedSlicedArray[0] = 9000;

console.log(array); 
console.log(savedSlicedArray); 