// We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why "It's true!" is never output.

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

/*

The first line of code declares a new variable and initializes it to an object with properties and value pairs inside.

After the object a for/in loop is initiated and a local variable declared for use inside the for block. In the if conditional expression a reference to the variable value is used and is compared using strict equality to a boolean true value. 

The reason why the output string: "It's true!" will never print to the console is because as the properties of the object are iterated over the strict comparison will be comparing the properties which are strings to a boolean true data type value and thus comparing differing values and data types using the strict equality operator will only ever evaluate to false which is a falsy value and thus the if clause is never executed.



*/
