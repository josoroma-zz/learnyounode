// node 11-http-file-server.js 8888 poem
// curl http://127.0.0.1:8888/
// learnyounode verify 11-http-file-server.js

var http = require('http');
var fs = require('fs');

// Server Instance.
// Both request and response are also Node streams!
var server = http.createServer(function (request, response) {

  response.writeHead(200, { 'content-type': 'text/plain' });

  fs.createReadStream(process.argv[3]).pipe(response);

});

server.listen(Number(process.argv[2]));
