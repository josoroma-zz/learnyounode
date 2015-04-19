// node 07-http-client-get.js http://ip.jsontest.com
// learnyounode verify 07-http-client-get.js

var http = require('http')

http.get(process.argv[2], function (response) {

  response.setEncoding('utf8');

  response.on('data', console.log);
  response.on('error', console.error);

});
