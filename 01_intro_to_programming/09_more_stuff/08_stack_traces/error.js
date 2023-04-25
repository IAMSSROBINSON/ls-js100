function foo () {
  console.log(bar);
}

foo();

// ReferenceError: bar is not defined
//     at foo (/Users/ssr/Documents/REPOS/ls-js100/01_intro_to_programming/09_more_stuff/08_stack_traces/error.js:2:15)
//     at Object.<anonymous> (/Users/ssr/Documents/REPOS/ls-js100/01_intro_to_programming/09_more_stuff/08_stack_traces/error.js:5:1)