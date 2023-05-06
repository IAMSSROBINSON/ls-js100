let num = 3; // variable assigned to primitive value

let arr = [1, 2, 3]; // variable assigned to an array

let obj = { // variable assigned to an object
  a : 1,
  b : 2
}

num = 42; // reassignment
arr[1] = 42; // reassignment of array element (not the variable), arr referenced by arr is mutated 
obj.a = 42; // reassignment of object property (not the variable), object referenced by obj is mutated

arr = 42; // reassignment, the array is lost
obj = {
  b: 1, 
  c: 2
} // reassignment, now refers to a different object