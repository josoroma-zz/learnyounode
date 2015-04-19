// node 10-time-server-strftime.js 8888
// curl http://127.0.0.1:8888/
// learnyounode verify 10-time-server-strftime.js

// First init a package.json then install the package locally:
//   1. npm init
//   2. npm install strftime --save

var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
    var now = strftime('%F %R');
    socket.end(now + '\n');
});

server.listen(process.argv[2]);
