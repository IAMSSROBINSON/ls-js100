# Switch Statement

The Switch statement is a conditional flow structure, similar to an if/else statement and compares a single value for strict equality against multiple values. 

<br>

## Reserved Keywords

A switch statement will typically use these reserved keywords:  

- switch
- case
- break
- default

```JavaScript
switch (argumentParameter) {
  case valueToMatch1:
    // do something here
    break;

  case valueToMatch2:
    // do something here
    break;

  default: 
    // do something here if none of above value match for strict equality
    break;
}
```

<br>

## Usage

The switch statement will evaluate the expression provided as an argument and compare its value in each case clause and then execute the statements and expressions in the first matching clause.

The `break` statement must be used for each single value case to stop the execution from falling through into the next clause execution (where unintentional).


