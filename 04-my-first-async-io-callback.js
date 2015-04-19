// node 04-my-first-async-io-callback.js poem
// learnyounode verify 04-my-first-async-io-callback.js

var fs = require('fs');

var contents = process.argv[2];

function cbReadFile(err, contents) {

  if (err) {
    return console.error('There was an error:', err);
  }

  var lines = contents.split('\n').length - 1;

  console.log(lines);

}

fs.readFile(contents, 'utf8', cbReadFile);
