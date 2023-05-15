// Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// let array = Object.keys(obj)
// array.forEach((key, index)=>{
//   array[index] = array[index].toUpperCase();
// })
// console.log(array);
// console.log(obj);

let keys = Object.keys(obj);
let upperKeys = keys.map((element)=>{
  return element.toUpperCase();
})
console.log(upperKeys);
console.log(obj);