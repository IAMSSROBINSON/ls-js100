# For/In and For/Of

Variations to the for loop:

- for/in
- for/of

<br>

## for/in

Iterates over properties of an object including those inherited from another object. 

It can be used on arrays also but in a less direct way. It is better to use for/of on arrays and for/in on objects.

```JavaScript
let obj = {
  foo: 1,
  bar: 2,
  qux: 'c'
}

for (let key in obj) {
  console.log(key);
}
// foo
// bar
// qux
```

<br>

## for/of

Iterates over the values of any iterable collection e.g. arrays and strings.
If you try to use for/of with an object it will throw a TypeError stating: "TypeError: obj is not iterable".

```JavaScript
let string = "Plato";

for (let char of string) {
  console.log(char);
}
// P
// l
// a
// t
// o
```