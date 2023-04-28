// Object literal with zero or more key value pairs
let obj = {}
console.log(obj);


let obj1 = {
  a: 1,
  b: 2, 
  c: 3, 
  d: 4
}
console.log(obj1); // { a: 1, b: 2, c: 3, d: 4 }

// Object values are coerced into strings but must be referred to as a string value enclosed by single quotes when making reference to them using bracket notation
console.log(Object.keys(obj1)); // [ 'a', 'b', 'c', 'd' ]

console.log(Object.values(obj1)); // [ 1, 2, 3, 4 ]
console.log(obj1['c']); // 3
console.log(obj1['c']); // 3