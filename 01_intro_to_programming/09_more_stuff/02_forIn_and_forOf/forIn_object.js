let obj = {
  foo: 1,
  bar: 2,
  qux: 'c'
}

// for/in iterates over the object 
// declaring let key in obj creates a variable: key to represent each iterable property in obj
for (let key in obj) {
  console.log(key);
}
// foo
// bar
// qux


// for/in iterates over the object 
// declaring a variable here allows representation of each iterable element in obj. Bracket notation is used on obj here to iterate through and access the values of each key in obj.
for (let value in obj) {
  console.log(obj[value]);
}
// 1
// 2
// c

