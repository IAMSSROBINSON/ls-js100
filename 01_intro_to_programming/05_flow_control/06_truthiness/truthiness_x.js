let x;

if (x = 5) {
  console.log("How can this be true?"); // How can this be true?
} else {
  console.log("It is not true");
}

/*

Inside the conditional expression on line 3 the variable x is assigned to the value 5. JavaScript will evaluate x for its truthiness and conclude that the value of x which is 5 is a truthy value and thus the conditional expression will evaluate to be true and execute the first clause block of the if statement.

*/