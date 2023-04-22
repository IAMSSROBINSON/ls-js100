# Variables as Pointers

Some variables act as a pointer/reference to an address/place in memory and some contain values.

<br>

## Primitive values

Strings, Numbers, Booleans, Null, Undefined, NaN, Symbol, BigInt

Primitive values are immutable and cannot be aliases of each other. If you give one variable a new Primitive value  it does not affect the other. 

Variables with primitive values in them are stored at the same memory / address associated with the variable thus variables are independent when they contain Primitive values.

<br>

```JavaScript
let count = 1;
count = 2;
console.log(count); // 2
```

Line 1 declares a variable named count and initializes it with a value, assigning the value 1 to count. This sets the memory address: 0x1234 of the count variable to 1.

1 is a Primitive value. 

Line 2 reassigns count to a new Primitive value 2. The memory address: 0x1234 of the count variable now stores 2 instead.

When a variable is declared JavaScript allocates space in the memory to store its value. With most Primitive values the variables actual value gets stored at that address allocated.

<br>

## Setting values

```JavaScript
let a = 5;
let b = a;
a = 8;
console.log("a", a); // 8
console.log("b", b); // 5
```

Variable a is initialized to value 5.
Variable b is assigned the value of a: 5.
Both variable contain value 5 after line 2.
Variable a is at one memory address: 0x2468
Variable b is at another memory address: 0x3579
The values are therefore independent of each other, store at different addresses but happen to have the same value.
On line 3 the value at memory address for variable a is reassigned to: 8;
Variable b's value does not change however so changing one does not affect the other.

<br>

## Objects and Non-Mutating Operations

```JavaScript
let obj = {
  a: 1
}

obj = {
  b: 2
}
console.log(obj) // {b: 2}
```

Line 1 declares a variable named obj at memory address: 0x2468 and initializes it with a pointer memory address: 0x3579 that points to an object value: {a: 1}. 

Next the variable obj is reassigned to a different object value: {b: 2}. So the obj variable is still at memory address: 0x2468 however now it stores a different pointer address: 0x2734 to a different object value: {b : 2}

<br>

## Array Objects

Everything that holds true for Objects will normally be true for Arrays.

```JavaScript
let c = [1, 2]; // [1, 2]
let d = c; // [1, 2]
c = [3, 4]; // [3, 4]

console.log("c:", c) // "c: [3, 4]"
console.log("d:", d) // "d: [1, 2]"
```

Variable `c` is declared at memory address: 0x1234 and initialized to array object value: [1, 2] at memory address: 0x5789. Variable `c` is a pointer and stores the address to the array: 0x5789 object at its own address: 0x1234.

Variable `d` is declared at memory address: 0x8779. It stores at its address the address stored in variable `c` which points to array: [1, 2].

Variable `c` at address: 0x1234 is reassigned to point to a new array: [3, 4] with a new address: 0x2222. The previous address it pointed to still exists and the value that was there is still there however `c` no longer points to that address it points to the new address.

Variable `d` still points to the address: 0x5789 of array: [1, 2].

So as with Primitive values, each variable has it value and reassigning values does not affect any other variable with the same value. Thus `c` and `d` are independent variables.  

<br>

## Mutating Operations

<br>

### .push() method

```JavaScript
let e = [1, 2];

let f = e;
console.log("e:",e); // [1, 2]
console.log("f:", f); // [1, 2]

e.push(3, 4);
console.log("e:",e); // [1, 2, 3, 4]
console.log("f:", f); // [1, 2, 3, 4]
```

The array object that the variable `e` points to is mutated by the .push() method and it also changes the array object that the variable `f` points to.

When you assign a pointer variable to another variable the memory address to the object is copied over not the object itself.

When `e` is assigned to `f` the address the variable `e` stores gets copied to `f` and thus they both now point to the same object at the same address. The variables are independent but because they both point to the same array they array is dependent on what is done to both `e` and `f`.

With both `e` and `f` pointing to the same array the .push() method uses the `e` variable to access and mutate the array by appending values 3 and 4 to it's original value. Because `f` points to the same array, both `e` and `f` reflect the updated contents of the array - this is called aliasing as `e` and `f` are aliases of the same value. 

<br>

## Gotcha

```JavaScript
let g = ['a', 'b', 'c'];
console.log("g", g); // [ 'a', 'b', 'c' ]

let h = g;
console.log("h", h); // [ 'a', 'b', 'c' ]

g[1] = 'x';
console.log("g", g); // [ 'a', 'x', 'c' ]
console.log("h", h); // [ 'a', 'x', 'c' ]
```

We reassign a specific element in the array, not reassigning the array itself. This means that the array itself is still at the same address in memory and an element at that address is changed for another. The array address stays the same and thus both variables still point to the same address and the contents are mutated for both.