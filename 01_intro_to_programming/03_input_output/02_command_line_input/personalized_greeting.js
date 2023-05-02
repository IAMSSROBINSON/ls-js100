const READLINE_SYNC = require('readline-sync');

let name = READLINE_SYNC.question(`Please enter your name: `);
console.log(`Good morning, ${name}!`);``