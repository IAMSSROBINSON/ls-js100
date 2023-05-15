# Iteration

Objects can have multiple properties and values, iterating over them can be useful.

<br>

## `for/in` loop

`for/in` iterates over the object keys. On each iteration it assigns the key to a variable which can be used to access the values with bracket notation until the key : value pairs run out.

`for/in` iterates over an objects prototypes, that is it iterates over the properties of a parent object if using for/in on the child. 

`hasOwnProperty()` method returns true if an objects property was defined by it and false if not.

<br>

## `Object.keys()`

`Object.keys()` returns an objects keys in an array. It does not return keys from a prototype, only it's own keys.