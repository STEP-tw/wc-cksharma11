const fs = require('fs');
const { wc } = require('./src/lib.js');
const { format, formatMultipleFile } = require('./src/format.js');
const { parse } = require('./src/parser.js');

const main = function() {
  const { filenames, options } = parse(process.argv.slice(2));
  const result = wc(filenames, fs);
  const allCounts = formatMultipleFile(result, options);

  console.log(allCounts);
};

main();
