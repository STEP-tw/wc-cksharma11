const fs = require('fs');
const { wc } = require('./src/lib.js');
const { getFormatter } = require('./src/format.js');
const { parse } = require('./src/parser.js');

const main = function() {
  const { filenames, options } = parse(process.argv.slice(2));
  const formatter = getFormatter(filenames);
  const counts = wc(filenames, fs);
  const formattedResult = formatter(counts, options);

  console.log(formattedResult);
};

main();
