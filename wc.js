const fs = require('fs');
const { formatWcResult } = require('./src/wcUtils.js');
const { parse } = require('./src/parser.js');

const main = function() {
  const parsedInputs = parse(process.argv.slice(2));
  const result = formatWcResult(parsedInputs, fs);
  console.log(result);
};

main();
