// node 10-time-server-moment.js 8888
// curl http://127.0.0.1:8888/
// learnyounode verify 10-time-server-moment.js

// First init a package.json then install the package locally:
//   1. npm init
//   2. npm install moment --save

var net = require('net');
var moment = require('moment');

var server = net.createServer(function(socket) {
  now = moment().format('YYYY-MM-DD hh:mm');
  socket.end(now + '\n');
});

server.listen(process.argv[2]);
