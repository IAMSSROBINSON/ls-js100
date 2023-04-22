# Regex

Short for Regular Expression. Regex is a sequence of characters used to identify patterns of characters within a given string.

<br>

## Syntax

Regex are contained within forward slashes within which the pattern to be matched is placed e.g.

```JavaScript
let regex = /abc/;
console.log(regex.test('abcdefghijklmnop')); // true
```