// Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let obj = {};

nestedArray.forEach((array)=>{
  obj[array[0]] = array[1];
})

console.log(obj); //{ title: 'Duke', name: 'Nukem', age: 33 }