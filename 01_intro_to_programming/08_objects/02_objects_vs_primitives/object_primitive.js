let number = 20;
let newNumber = number + 1; // 21, new value returned and stored in variable
console.log(number); // 20
console.log(newNumber); 

let object = {
  a : 1,
  b : 2,
  c : 3
}

object.c = object.c + 1;
console.log(object); // { a: 1, b: 2, c: 4 }, object key is assigned entirely new number value