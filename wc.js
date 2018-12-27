const fs = require('fs');
const { wc } = require('./src/lib.js');
const { getFormatter } = require('./src/format.js');
const { parse } = require('./src/parser.js');

const main = function() {
  const { filenames, options } = parse(process.argv.slice(2));
  const formatter = getFormatter(filenames);
  const result = wc(filenames, fs);
  const allCounts = formatter(result, options);

  console.log(allCounts);
};

main();
