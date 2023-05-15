# Common Operations

## `Object.values()`

`Object.values()` extracts an objects `own` values returning an array with them inside.

<br>

## `Object.entries()`

`Object.entries()` returns an array of nested arrays. The main array contains the key : value pair collections in an object each in their own arrays an elements e.g. `[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]`

<br>

## `Object.assign()`

`Object.assign(destinationObj, sourceObj)` combines two objects properties into one object, the method can also take more than 2 arguments. If the destination object has the same name as the source property then it is ignored and not assigned. To copy to an new object use an empty object as the destination object {} in the arguments, in this way no objects will be mutated. 