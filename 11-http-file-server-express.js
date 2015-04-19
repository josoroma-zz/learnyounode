// node 11-http-file-server-express.js 8888 ./
// curl http://127.0.0.1:8888/
// curl http://127.0.0.1:8888/poem

// First init a package.json then install the package locally:
//   1. npm install express --save
//   2. npm install serve-static --save

var express = require('express');
var serveStatic = require('serve-static');

var port = Number(process.argv[2]);
var folder = process.argv[3];

var app = express();

app.use(serveStatic(folder, {'index': ['poem']}));

app.listen(port);
