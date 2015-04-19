// node 08-http-collect-concat-stream.js http://ip.jsontest.com
// learnyounode verify 08-http-collect-concat-stream.js

// Use a third-party package to abstract the difficulties involved in
// collecting an entire stream of data.

// First init a package.json then install the package locally:
//   1. npm init
//   2. npm install concat-stream --save

var http = require('http');
var concatStream = require('concat-stream');

http.get(process.argv[2], function (response) {

  response.setEncoding('utf8');

  response.pipe(concatStream(function (data) {
    console.log(data.length);
    console.log(data);
  }));

});
