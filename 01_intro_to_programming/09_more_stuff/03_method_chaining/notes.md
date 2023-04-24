# Method Chaining

You can call a method on the return value of another method thereby chaining the methods together for a final combined result rather than separate the individual methods with their return values.

Chaining methods is more concise, improves readability and can save time.

```JavaScript
let philosopherName = "plato aristocles";

console.log("Chaining Methods: ",
philosopherName
.toUpperCase()
.split(' ')
.reverse()
.join(' '));
```

<br>