// How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects.

[1, 2, ["a", ["b", false]], null, {}]

// PRIMITIVES:
// 1
// 2
// "a"
// "b"
// false
// null

// total: 6


// OBJECTS:
// Outer Array: [1, 2, ["a", ["b", false]], null, {}]
// Inner Nested Array 1st level:  ["a", ["b", false]]
// Inner Nested Array 2nd level: ["b", false]
// Empty Object: {}

// total: 4