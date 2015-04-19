// node 07-http-client-request.js personatestuser.org

var http = require('http');

var options = {
  method: 'GET',
  port: 80,
  host: process.argv[2],
  path: '/email'
};

cbRequest = function(response) {

  var body = '';

  response.on('data', function (data) {
    body += data;
  });


  response.on('end', function () {

    var parsed = JSON.parse(body);

    console.log(parsed.email, parsed.pass);

  });

}

http.request(options, cbRequest).end();
