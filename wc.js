const fs = require('fs');
const { wc } = require('./src/lib.js');
const { format } = require('./src/format.js');

const main = function() {
  const filename = process.argv[2];
  const result = wc(filename, fs);
  console.log(format(result));
};

main();
