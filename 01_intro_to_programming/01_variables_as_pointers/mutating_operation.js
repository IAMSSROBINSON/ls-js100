let e = [1, 2];

let f = e;
console.log("e:",e); // [1, 2]
console.log("f:", f); // [1, 2]

e.push(3, 4);
console.log("e:",e); // [1, 2, 3, 4]
console.log("f:", f); // [1, 2, 3, 4]