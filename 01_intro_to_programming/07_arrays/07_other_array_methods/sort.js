
let array = ["b", "c", "a", "z", "s"];

// mutates the calling array
array.sort();
console.log('.sort() mutates the calling array:', array);

let array2 = ["b", "c", "a", "z", "s"];
let copyArray2 = array2.slice().sort();
console.log('array2:', array2);
console.log('copyArray2.slice().sort() non-mutating:', copyArray2);

