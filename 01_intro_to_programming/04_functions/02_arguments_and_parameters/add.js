function add (left, right) { // left, right are parameters
  let sum = left + right; // left and right are arguments here because they can be passed to other functions from here
  return sum;
}
let sum = add(3, 6); // 3, 6 are arguments

console.log(sum);
console.log(add(3, 6, 9));
console.log(add(3));