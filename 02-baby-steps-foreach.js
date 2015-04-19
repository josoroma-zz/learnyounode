// node 02-baby-steps-foreach.js 3 6 9
// learnyounode verify 02-baby-steps-foreach.js

var result = 0;

process.argv.slice(2).forEach( function(element) {
  result += +element;
})

console.log(result);
