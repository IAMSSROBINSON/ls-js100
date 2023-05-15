# What Are Objects?

A data structure collection of `key : value` pairs (also referred to as properties). The name is the key and has its associated value separated with a colon(:) and they are stored inside braces {} with each pair separated by a comma.

The key/names are strings or symbols (also referred to as a property of the object). They can be surrounded in quotation marks or if not JavaScript will coerce it to a string anyway.

Values can be any data type and can even be other objects.

```JavaScript
let person = {
  name : 'plato',
  occupation : 'philosopher',
  hobbies : ['poetry', 'art', 'thinking']
}
console.log(person);
```

<br>

## Access Values

Accessing specific values within an object.

### Dot Notation

```JavaScript
person.name;
```

### Bracket Notation

```JavaScript
person['name'];
```

If there is a variable that contains a key's name, bracket notation must be used by stating the variable name inside the bracket:

```JavaScript
let key = 'name'
person[key];
```

<br>

## Adding Pairs

`Key : value` pairs can be added to an object by stating the `object name` and using `bracket` or `dot notation` to define the `key` name and using the `assignment operator` to assign a `value` of any datatype.

<br>

## Removing Pairs

To remove a `key : value` pair from an object the `delete` keyword is stated before stating the object name and using bracket or dot notation to state the key name of the pair to delete. 

The `delete` keyword will return true if the collection is deleted unless it cannot delete it for some reason.

<br>

## const 

If a variable declared with const is initialized to an object then the object the variable points to cannot be changed (the properties and values inside the object however can be modified).

To stop the properties and values from being modified use the `Object.freeze(person)` method on the object. This means no new pairs can be added, deleted or edited and attempting to do so will not produce an error but will simply be ignored. `Object.freeze();` can be used on arrays also but can only be used 1 level of accessibility deep and thus if nesting occurs it needs to be applied there also.
