// The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.


// for (let i = 0; ; i += 1) {
//   console.log("and on");
// }

for (let i = 0; i < 1 ; i += 1) {
  console.log("and on");
}

/*

The code is in an endless loop because on the first line of code a variable is declared and initialized to the value of 1. 

Typically a conditional expression would appear next in the for clause but instead that is skipped and so JavaScript just evaluate it as true, then variable is lastly incremented by +1 on each iteration by the incremental assignment operator. 

Because the conditional expression is skipped, JavaScript by default will assume it to be true and the for clause will always increase the value of the variable by +1 on each iteration and then enter the execution body and invoke the console.log method and print to the console. There is therefore nothing to break the cycle of the loop or render the condition as false and thus it will continue forever or until a break statement is encountered or until the program is quit.

*/