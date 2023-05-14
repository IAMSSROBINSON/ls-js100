// Arrays are objects
let arr = [1, 2, 3];
console.log(typeof arr) // object

// Arrays are Arrays
console.log(Array.isArray(arr)); // true

// truncating array length by .length reassignment
arr.length = 2;
console.log(arr); // [1, 2]
console.log(arr.length); // 2

// reassign variable to point to empty array
arr = [];
console.log(arr); // []

// assign length to 4 empty undefined values, treated as missing in presence except in length
arr.length = 4;
console.log(`\n`, arr); // [ <4 empty items> ]
console.log(arr.length); // 4
console.log(arr[0]); // undefined
console.log(arr[1]); // undefined
console.log(arr[2]); // undefined
console.log(arr[3]); // undefined

let arrFiltered = arr.filter((element)=>{
  return element === undefined;
})
console.log(`\n`, arrFiltered); // []

// assigned a real value to array
arr[1] = 7;
console.log(`\n`, arr); // [ <1 empty item>, 7, <2 empty items> ] 
console.log(arr.length) // 4

// try to output each element in array
arr.forEach((element)=>{
  console.log(element);
}) // 7 (the only real value)
// forEach() method always returns undefined as a function

// check how keys and values are defined in the array
console.log(Object.keys(arr)) // ['1'] returns array with string value and treats element number as the key unless otherwise stated
console.log(Object.values(arr)) // [7] returns array with element as value


arr[-3] = 10;
console.log(`\n`, arr); // [ <1 empty item>, 7, <2 empty items>, '-3' : 10 ]
console.log(arr.length); // 4 even though we just added an item, the item is not recognized as the index position is not a valid positive integer 
arr["philosophy"] = 'Plato';
console.log(`\n`, arr); // [ <1 empty item>, 7, <2 empty items>, '-3': 10, philosophy: 'Plato' ]
console.log(arr.length); // 4, new item again not recognized because the index position assigned is not a valid positive integer
console.log(arr['philosophy']); // Plato
console.log(Object.keys(arr)); // [ '1', '-3', 'philosophy' ], counts invalid index positions as keys also assigns element number as key if not stated

// construct new Array and allocate space in memory for stated number of elements
let a = new Array(0); 
console.log(a);

// declare new variable with empty array
let b = [];
b.length = 3;
console.log(b); // [ <3 empty items> ]
console.log(b.length); // 3
console.log(b[0] === undefined) // true

// declare new variable and allocate space for 3 undefined elements
let c = [undefined, undefined, undefined];
console.log(c); // [undefined, undefined, undefined]
console.log(c.length); // 3
console.log(c[0] === undefined); // true