// node 10-time-server-net.js 8888
// curl http://127.0.0.1:8888/
// learnyounode verify 10-time-server-net.js

var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {

  var d = new Date();

  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes());

}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n');
})

server.listen(Number(process.argv[2]));
