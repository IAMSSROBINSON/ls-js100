let regex = /b/g;
let string = 'ababa';

console.log(regex.test(string)); // true
console.log(regex.test(string)); // true
console.log(regex.test(string)); // false

// Why does the third console.log return false
// It returns false because .test() regex method is stateful meaning that it remembers the last index that it found to be true
// on the first console.log the substring 'b' was found at index 1
  // and the read cursor is placed after this index
// on the second console.log the substring 'b' was found at index 3
  // and the read cursor is placed after this index
// on the third console.log the substring b is not found as their are no more occurrences of the regex in the string and thus false is returned