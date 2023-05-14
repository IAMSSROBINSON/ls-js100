function arraysEqual (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}
let a = [3, 4]
console.log(arraysEqual([1, 2, 3], [1, 2, 3]));    // => true
console.log(arraysEqual([1, 2, 3], [4, 5, 6]));    // => false
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4])); // => false
console.log(arraysEqual([1, 2, [3, 4], 5], [1, 2, [3, 4], 5])); // => false, this returns false because the nested array cannot be the same object in memory in both arguments passed to the function. To return true it is best to reference the same array by creating a variable pointer: let a = [3, 4] and using ${a} as an element within each argument.

