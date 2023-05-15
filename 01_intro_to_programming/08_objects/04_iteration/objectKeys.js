let obj = {
  a : 1,
  b : 2,
  c : 3
}

// access an objects keys
let keys = Object.keys(obj);
console.log(keys);
// ['a', 'b', 'c']

// iterate and use returned array of keys to access and return an object values
keys.forEach((key)=>{
  console.log(obj[key]);
})
// 1
// 2
// 3