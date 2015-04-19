// node 12-http-uppercaser.js 8888
// curl --data 'foo bar' http://127.0.0.1:8888/
// learnyounode verify 12-http-uppercaser.js

// First init a package.json then install the package locally:
//   1. npm install through2-map --save

var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {

  if (req.method != 'POST') {
    return res.end('send me a POST\n');
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  }))
  .pipe(res);

});

server.listen(Number(process.argv[2]));
