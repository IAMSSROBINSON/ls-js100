let obj = {
  foo: 1,
  bar: 2,
  qux: 'c'
}

for (let index of obj) {
  console.log(obj[index]);
}
// TypeError: obj is not iterable