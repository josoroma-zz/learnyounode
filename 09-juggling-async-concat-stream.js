// node 09-juggling-async-concat-stream.js http://www.josoroma.com http://www.josoroma.com http://www.josoroma.com
// learnyounode verify 09-juggling-async-concat-stream.js

var http = require('http');
var concatStream = require('concat-stream');

var urls = process.argv.slice(2);
results = [];
resultsCount = 0;

urls.forEach(function (url, i) {

  http.get(url, function (response) {

    response.setEncoding('utf8');

    response.pipe(concatStream(function (data) {

      results[i] = data;
      resultsCount++;

      if (resultsCount === urls.length) {

        results.forEach(function (result) {

          console.log(result);

        });

    }

    }));

  });

});
