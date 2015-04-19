// node 09-juggling-async-bluebird.js http://www.josoroma.com http://www.josoroma.co
// learnyounode verify 09-juggling-async-bluebird.js

// node bluebird.js http://ip.jsontest.com

//  1. npm install bluebird --save
//  2. npm install request --save

var Promise = require("bluebird");
var request = Promise.promisifyAll(require('request'))

var urls = process.argv.slice(2);

Promise.map(urls, function(url) {

  return request.getAsync(url).spread(function(response, body) {
    return body;
  })
  .catch(function(err) {
    console.log('There was an error:', err.message);
  });

}).then(function(body) {
    // Continue...
    body.forEach( function(data) {
      console.log(data);
    })
});
