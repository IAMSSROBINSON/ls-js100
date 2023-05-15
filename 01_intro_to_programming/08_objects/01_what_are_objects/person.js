let person = {
  name : 'plato',
  occupation : 'philosopher',
  hobbies : ['poetry', 'art', 'thinking']
}
console.log(person);

/*

On line 1 a variable is declared and initialized to an object data structure.

On line 2 the key/name is given to a string value to complete a key : value pair data collection. 

On line 3 another key : value pair collection is stored in the object and on line 4 another collection is defined only this time the value data type is an array list of string elements.

*/

// dot notation
console.log(person.name);

// bracket notation
console.log(person['name']);


// Adding pairs:

// adding pairs with dot notation
person.height = '6ft';

// adding pairs with bracket notation
person['gender'] = 'male';
console.log(person);

// deleting pairs with dot notation
delete person.occupation;
console.log(person);

delete person['height'];
console.log(person);

// after using Object.freeze modifications cannot be made to properties
Object.freeze(person);
person.age = 38;
person.name = 'Zeus';

console.log(person);