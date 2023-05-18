// Write code that checks whether the string byteSequence contains the character x.

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.match(/x/)); 
// [
//   'x',
//   index: 26,
//   input: 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu',
//   groups: undefined
// ]


console.log(/x/.test(byteSequence)); // true
console.log(byteSequence.includes('x')); // true