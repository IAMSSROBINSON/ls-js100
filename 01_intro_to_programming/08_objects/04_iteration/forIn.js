let obj = {
  a : 1,
  b : 2,
  c : 3
}

// iterate over the object keys 
for (let property in obj) {
  console.log(property);
}
// a
// b
// c

// iterate over object keys and use with bracket notation to access values
for (let property in obj) {
  console.log(obj[property]);
}
// 1
// 2
// 3

let childObj = Object.create(obj);
console.log(childObj) // {}

childObj.d = 4;
childObj.e = 5;
childObj.f = 6;
console.log(childObj); // { c: 4, d: 5, e: 6 }

for (let property in childObj) {
  console.log(childObj[property])
}
// 4 ownProperty
// 5 ownProperty
// 6 ownProperty
// 1 prototypeProperty
// 2 prototypeProperty
// 3 prototypeProperty

console.log('\n');
for (let property in childObj) {
  if (childObj.hasOwnProperty(property)) {
    console.log(childObj[property]);
  }
}
// 4
// 5
// 6