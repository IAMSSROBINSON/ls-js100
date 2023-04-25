# Exceptions

If a user enters incorrect information or something in a file gets corrupted the program must know how to respond to these situations so that it doesn't crash or produce incorrect results.

Exceptions are used for exceptional circumstances and unpreventable conditions that the program cannot control. 

<br>

## Silent Errors

- undefined
- NaN
- null
- -1

Errors that occur silently without stopping the program should not be ignored completely and should be dealt with still.

<br>

## Larger Errors

Exceptions can help when errors are not silent. JavaScript will raise an error or throw an exception and stops the program if the program does not catch the exception.

<br>

## Exception Handing

Dealing with errors in a manageable and predictable way. 

### Try/Catch statement

A means to handle exceptions. 

- try {} an operation that may produce an error : one or two statements of code
- catch (theException) {} 
  - an error occurs in the try block so do something about it here in catch
  - log the theException.name, theException.message
- finally {} executes regardless of exception or not / optional

<br>

## Raising Own Exceptions with throw new Error

The throw keyword raises an exception of the type specified as an argument e.g. throw new TypeError

<br>

## Syntax Errors

- usually raised before the program starts running 
- when JavaScript spots the error it raises a SyntaxError exception
- can be shown to appear long after where the error actually was
- usually nothing to do with variable values
