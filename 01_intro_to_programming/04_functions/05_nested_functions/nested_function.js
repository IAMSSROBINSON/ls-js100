function foo () {

  function bar () {
    console.log("BAR");
  }

  bar(); // BAR
  bar(); // BAR


}
foo(); 
bar(); // ReferenceError: bar is not defined