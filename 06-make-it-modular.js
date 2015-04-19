// node 06-make-it-modular.js . js
// learnyounode verify 06-make-it-modular.js

// Prints a list of files in a given directory, filtered by the extension of
// the files. The first argument is the directory name and the second argument
// is the extension filter.

var filterFn = require('./06-module.js');

var dir = process.argv[2];
var filterStr = process.argv[3];

filterFn(dir, filterStr, function (err, list) {

  if (err) {
    return console.error('There was an error:', err);
  }

  list.forEach(function (file) {
    console.log(file);
  });

});
