let bobPrototype = {
  name: 'bob',
  age : 32,
};

let studentBob = Object.create(bobPrototype);
console.log(studentBob.name); // bob
console.log(studentBob.age); // 32
console.log(studentBob); // {}

studentBob.year = 'Senior';
console.log(studentBob.year);
console.log(studentBob);