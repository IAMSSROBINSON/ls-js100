// What values do the following expressions evaluate to?

// false || (true && false); // false
// true || (1 + 2); // true
// (1 + 2) || true; // 3
// true && (1 + 2); // 3
// false && (1 + 2); // false
// (1 + 2) && true; // true
// (32 * 4) >= 129;  // false
// false !== !true; // false
// true === 4;  // false
// false === (847 === '847');  // true
// false === (847 == '847');  // false 
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;  // true

/*

Right side:
328 / 4 = 82
  82 === 82 is true
    true || false is true
(Right evaluates to true)

Left side 
100 / 5 = 20
  20 === 20 is true
    !true is false
      !true is false
        false or false is false
(Left side evaluates to false)

false || true is true

Entire expression evaluates to true






*/