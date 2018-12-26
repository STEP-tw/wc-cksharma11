const fs = require('fs');
const { wc } = require('./src/lib.js');
const { getFormatter } = require('./src/format.js');

const main = function() {
  const filename = process.argv[2];
  const formatter = getFormatter([]);
  const result = wc(filename, fs);
  console.log(formatter(result));
};

main();
