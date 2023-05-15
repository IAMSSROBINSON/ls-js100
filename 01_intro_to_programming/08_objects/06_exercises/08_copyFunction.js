// Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

// The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

// Here are some examples for your reference:

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

function copyObj (objToCopy, arrayOfKeys) {
  let newObj = {};

  if (arrayOfKeys) {
    arrayOfKeys.forEach((key)=>{
      newObj[key] = objToCopy[key];
    })
  } else {
    Object.assign(newObj, objToCopy);
  }
  return newObj;
}

/*

function should accept and return a copy of object argument
function should also accept an array, the array will house keys which mimic the keys to be copied from the object

if an array is present then use the keys from the array and compare to the keys of the object and if they match then transfer to new array
if the array is not sent to the function then copy all the keys in the object

return the copied object


how to match keys from array to object keys

Object.keys(obj)

*/