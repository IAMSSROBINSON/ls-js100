// Without running this code, what will it print?

console.log(false ?? null); // false
console.log(true ?? (1 + 2)); // true
console.log((1 + 2) ?? true); // 3
console.log(null ?? false); // false
console.log(undefined ?? (1 + 2)); // 3
console.log((1 + 2) ?? null); // 3
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null

/*

The nullish coalescing operator returns the value of the right operand if the value of the left operand is null or undefined. If the operand on the left is not null or undefined then the value of the operand on the left is returned.

*/