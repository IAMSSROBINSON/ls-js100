let obj1 = {
  a : 1, 
  b : 2, 
  c : 3
}

let obj2 = {
  d : 4, 
  e : 5, 
  f : 6
}

// Object.assign({}, obj1, obj2);
let emptyObject = Object.assign({}, obj1, obj2);
console.log(emptyObject); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
