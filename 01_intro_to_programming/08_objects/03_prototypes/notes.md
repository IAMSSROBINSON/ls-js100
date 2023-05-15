# Prototypes

Objects can inherit from other objects. When an object inherits from another object, the higher object is the prototype of the inheriting object. This is a term known as `inheritance` and it is the prototype that implement inheritance in JavaScript.

The inheriting object now has access to the prototypes properties even though it did not define them itself. 

<br>

## `Object.create()`

```JavaScript
let bobPrototype = {
  name: 'bob',
  age : 32,
};

let studentBob = Object.create(bobPrototype);
console.log(studentBob.name); // bob
console.log(studentBob.age); // 32
console.log(studentBob); // {}
```

`Object.create()` creates a new object from the prototype passed in as an argument. That is, it creates an inheritance relationship from the child(studentBob) to the parent(bobPrototype) object. In this way the child can use the properties of the parent even though it did not explicitly define it itself.


