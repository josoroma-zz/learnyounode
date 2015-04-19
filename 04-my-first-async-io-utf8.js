// node 04-my-first-async-io-utf8.js poem
// learnyounode verify 04-my-first-async-io-utf8.js

var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, 'utf8', function (err, contents) {

  if (err) {
    return console.error('There was an error:', err);
  }

  var lines = contents.split('\n').length - 1;

  console.log(lines);

});
