// node 09-juggling-async-bl.js http://www.josoroma.com http://www.josoroma.com http://www.josoroma.com
// learnyounode verify 09-juggling-async-bl.js

var http = require('http');
var bufferList = require('bl');

var urls = process.argv.slice(2);
results = [];
resultsCount = 0;

urls.forEach(function (url, i) {

  http.get(url, function (response) {

    response.setEncoding('utf8');

    response.pipe(bufferList(function (err, data) {

      results[i] = data.toString();
      resultsCount++;

      if (resultsCount === urls.length) {

        results.forEach(function (result) {

          console.log(result);

        });

    }

    }));

  });

});
