// The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/*

On the first line of code a variable is declared and initialized with the value of 0.

On the second line of code a while loop is initiated and in the conditional expression clause the variable from line 1 is reassigned with the value of 1 which evaluates to be truthy and allows for execution of the loop block.

Inside the loop block, in the loop body and expression is made that increases the value of the variable by +1 (after printing the variables value to the console) using the += addition assignment operator and thus the value of the variable is now 2. 

Further down the loop body an if statement condition seeks to break out of the loop if the value of the variable is greater than 2 prior to the loops next iteration - of which the value is not greater than 2.

The loop then iterates once more and the while conditional expression again reassigns the value of the variable to a value of 1 (from 2) thus evaluating to a truthy value and entering the loop block clause once more.

The cycle repeats itself, the loop body never changes the value of the variable to a value that would evaluate the conditional expression of the loop clause to be a falsy value which would stop the loop and thus the loop is infinite and repeats this same cycle on every iteration.

*/