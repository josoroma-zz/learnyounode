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

      results[i] = data;// node 09-juggling-async-bl.js http://www.josoroma.com http://www.josoroma.com http://www.josoroma.com
      // learnyounode verify 09-juggling-async-bl.js

      var http = require('http');
      var bufferList = require('bl');

      var results = [];
      var count = 0;

      function printResults () {
        for (var i = 0; i < 3; i++) {
          console.log(results[i]);
        }
      }

      function httpGet (index) {

        http.get(process.argv[2 + index], function (response) {

          response.setEncoding("utf8");

          response.pipe(bufferList(function (err, data) {

            if (err) {
              return console.error('There was an error:', err);
            }

            results[index] = data.toString();
            count++;

            if (count == 3) {
              printResults();
            }

          }));

        });

      }

      for (var i = 0; i < 3; i++) {
        httpGet(i);
      }

      resultsCount++;

      if (resultsCount === urls.length) {

        results.forEach(function (result) {

          console.log(result);

        });

    }

    }));

  });

});
