// node 03-my-first-sync-io-utf8.js poem
// learnyounode verify 03-my-first-sync-io-utf8.js

var fs = require('fs');

var contents = fs.readFileSync(process.argv[2], 'utf8');
var lines = contents.split('\n').length - 1;

console.log(lines);
