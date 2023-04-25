function foo (number) {
  if (typeof number !== "number") {
    throw new TypeError("expected a number");
  }
  console.log(number);
}

console.log(foo(undefined, 8, 3, 's', 6));

