const parse = function(args) {
  let filename = args[0];
  options = [];
  if (args.length > 1) {
    filename = args[1];
    options = ['lineCount'];
  }
  return { filename, options };
};

module.exports = {
  parse
};
