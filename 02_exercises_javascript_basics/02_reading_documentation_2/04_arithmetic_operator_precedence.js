// Find the MDN documentation on operator precedence, and use it to find out which result the expression 
// 4 * 5 + 3 ** 2 / 10 evaluates to.


// Order of precedence:
// **
// *
// /
// %
// +
// -


// 3 ** 2 (9)
// 4 * 5 (20)
// 9 / 10 (0.9)
// 20 + 0.9 (20.9)


// (4 * 5) + ((3 ** 2) / 10) = 20.9