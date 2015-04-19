// node 04-my-first-async-io.js poem
// learnyounode verify 04-my-first-async-io.js

var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, function (err, contents) {

  if (err) {
    return console.error('There was an error:', err);
  }

  var lines = contents.toString().split('\n').length - 1;

  console.log(lines);

});
