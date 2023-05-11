console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10,`\n`);



let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter ++;
}

/*

On line 16 a global variable is declared and initialized to a value.
On line 17 after the the while keyword a condition expression (using the variable name as a reference to the value stored within it) evaluated to true and allows entry into the execution block.
On line 18 the console.log method is invoked and the reference to the variables value is passed in to print value to the output stream.
On line 19 the global variable value is reassigned to increment in value by +1 from its current value using the increment operator ++ on the variable reference.
The loop body ends on line 20 and the loop iteration is complete. Because the conditional expression was true after the first iteration the loop mechanism repeats the process and checks the state of the conditional expression on line 17 to see if it evaluates to true. This mechanism repeats for as long as it is truthy and when it becomes falsy the loop will cease and program execution will continue from line 21.

*/