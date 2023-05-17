// Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

/*

The expression on line 6 should log: false
The reason is because the expression is using the strict equality operator which compares both value and type of the operands and although the values are the same within each array the arrays are not the same object. When arrays are compared for equality they only return true if the array is the same array however these array variables point to different addresses in memory for their respective array and thus will return false when strict comparing them.



*/