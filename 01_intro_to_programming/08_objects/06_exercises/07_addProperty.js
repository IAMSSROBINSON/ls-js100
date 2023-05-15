// Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// snippet1
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

console.log('\n');
// snippet2
for (let key in myObj) {
  console.log(key);
}
// Without running this code, can you determine whether these two snippets produce the same output? Why?

/*

Snippet1 will print the keys that are the objects own properties, unique to that object only and not prototypes of the parent object from which it was created thus printing the newly added property: qux

Snippet2 will will all properties within the object as well as those of the parent prototype. It will first print the properties unique to the object and then it will print those of the parent prototype it inherited as per the terms of the for/in loop.

*/
console.log('\n');
for (let property in myObj) {
  if (myObj.hasOwnProperty(property)) {
    console.log(property);
  }
}