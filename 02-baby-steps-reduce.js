// node 02-baby-steps-reduce.js 3 6 9
// learnyounode verify 02-baby-steps-reduce.js

var result = process.argv.slice(2).reduce(function(previous, current) {
  return +previous + +current;
});

console.log(result);
