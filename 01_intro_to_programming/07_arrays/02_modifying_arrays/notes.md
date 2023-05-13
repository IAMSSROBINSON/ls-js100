# Modifying Arrays

The ability to add, remove and modify elements.

<br>

Declaring an array with the `const` keyword means you cannot change the array it references / points to, however you can modify the contents / elements. This means you cannot reassign the array to a new array but you can change individual elements within the same array.

<br>

## Object.freeze(arrayName);

The `Object.freeze()` method turns each element in the array into a const and thus they cannot be modified. The method will not return an error if you try to alter an element having used the method, it will just ignore the modification you are trying to make.  

Object.freeze only works one level deep. For nested arrays they will need to have the method call on them if that is so desired. 

## Methods

### `.push()`

Appends element to end of array and mutates the caller. 
Returns the length of the modified array.

<br>

### `.pop()`

Removes the last element in the array and mutates the caller. Returns updated array.

<br>

### `.concat();`

Appends two values. Returns a new updated array and does not mutate the caller.

<br>

### .shift();

Removes element from start of array. Mutates the caller. Returns updated array.

<br>

### .unshift();

Add element to the end of the array. Mutates the caller. Returns updated array.

<br>

### splice();

Allows for removing any array elements by specifying as arguments the start index of item to remove and then how many elements to remove thereafter. This method mutates the caller and returns the element that were spliced().

<br>

### slice();
