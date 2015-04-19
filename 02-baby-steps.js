// node 02-baby-steps.js 3 6 9
// learnyounode verify 02-baby-steps.js

var result = 0;

for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
}

console.log(result);
