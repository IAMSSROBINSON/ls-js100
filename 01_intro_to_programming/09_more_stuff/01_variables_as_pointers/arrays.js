let c = [1, 2]; // [1, 2]
let d = c; // [1, 2]
c = [3, 4]; // [3, 4]
console.log("c", c);
console.log("d", d);
d[1] = 9;
console.log("d", d);


