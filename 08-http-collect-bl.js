// node 08-http-collect-bl.js http://ip.jsontest.com
// learnyounode verify 08-http-collect-bl.js

// Use a third-party package to abstract the difficulties involved in
// collecting an entire stream of data.

// First init a package.json then install the package locally:
//   1. npm init
//   2. npm install bufferList --save

var http = require('http');
var bufferList = require('bl');

http.get(process.argv[2], function (response) {

  response.setEncoding('utf8');

  response.pipe(bufferList(function (err, data) {

    if (err) {
      return console.error('There was an error:', err);
    }

    data = data.toString();
    console.log(data.length);
    console.log(data);

  }));

});
