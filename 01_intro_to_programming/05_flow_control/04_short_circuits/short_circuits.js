let isRed = true;
let isPortable = true;

console.log(isRed && isPortable); // true
// both operands must be devaluated 

isRed = false;
console.log(isRed && isPortable); // false
// short circuits at first operand because expression can only return false

console.log(isRed || isPortable); // true
// both operands must be evaluated because first operand is false

isRed = true;
console.log(isRed || isPortable); // true
// short circuits at isRed because it evaluates to true