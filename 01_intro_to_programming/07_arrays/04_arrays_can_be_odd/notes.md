# Arrays Can Be Odd

JavaScript arrays have some odd properties e.g   

- arrays are zero indexed
- array indexes must be positive integer values only
- the .length property always returns +1 more than the last indexed position
- typeof array is an => 'object'
- Array.isArray(arr) is => true
- reassigning an arrays .length property will truncate the array elements if less than the number of elements in the array. If greater than the number of elements in the array then the elements that do not exist will be filled in as empty undefined elements and will be treated as missing but the .length property will include the unset elements. 

<br>

