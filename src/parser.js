const {
  HYPHEN,
  EMPTYSTRING,
  LINECOUNT,
  WORDCOUNT,
  CHARCOUNT
} = require('./constants.js');

const optionsMapping = {
  '-l': LINECOUNT,
  '-w': WORDCOUNT,
  '-c': CHARCOUNT
};

const filterOptions = function(args) {
  const options = args.filter(arg => arg.startsWith(HYPHEN));
  if (options.length == 1) return extractCombinedOptions(options);
  if (options.length == 0) return getDefaultOptions();
  return options;
};

const extractCombinedOptions = function(options) {
  const extractedOptions = options[0].split(EMPTYSTRING).slice(1);
  return extractedOptions.map(option => HYPHEN + option);
};

const getDefaultOptions = function() {
  return ['-l', '-w', '-c'];
};

const filterFilenames = function(args) {
  return args.filter(arg => !arg.startsWith(HYPHEN));
};

const parse = function(args) {
  const filenames = filterFilenames(args);
  const options = filterOptions(args).map(option => {
    return optionsMapping[option];
  });

  return { filenames, options };
};

module.exports = {
  parse
};
