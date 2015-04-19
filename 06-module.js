// Module concept.

// Exports a single function that takes three arguments: the directory name,
// the filename extension string and a callback function, in that order.

// The callback function must be called using the idiomatic node(err, data)
// convention. This convention stipulates that unless there's an error, the
// first argument passed to the callback will be null, and the second will be
// your data.

var fs = require('fs');
var path = require('path');

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {

    if (err) {
      return callback(err);
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr;
    })

    callback(null, list);

  });
  
}
