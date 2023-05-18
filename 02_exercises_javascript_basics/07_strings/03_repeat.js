// Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

console.log(repeat(3, 'ha')); // 'hahaha'


function repeat (reps, string) {
  let finalString = "";
  for (let index = 0; index < reps; index++) {
    finalString += string;
  }
  return finalString;
}