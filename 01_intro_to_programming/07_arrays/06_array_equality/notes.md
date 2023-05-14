# Array Equality


```JavaScript
// are these arrays the same
console.log([1, 2, 3] === [1, 2, 3]); // false
```

The above arrays have the same values however they are not the same array and thus the expression returns `false`.

<br>

```JavaScript
// are these variable values the same
let a = [1, 2, 3];
let b = a;

console.log(a === b); // true
```

The above variables both store the same value which is a pointer (address) to the array in question. 

The variables a and b themselves have different addresses in memory but the values stored at their respective addresses is the same address of the array that the address points to and thus the expression returns true.

<br>

JavaScript treats two arrays as equal only when they are the same array and occupy the same address in memory, this is the case for JavaScript objects in general (arrays and objects).











<br>