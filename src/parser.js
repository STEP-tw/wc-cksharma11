const { SPACE, HYPHEN, EMPTYSTRING } = require('./constants.js');

const mapOptions = function(option) {
  const optionsMapping = {
    '-l': 'lineCount',
    '-w': 'wordCount',
    '-c': 'charCount'
  };
  return optionsMapping[option];
};

const joinAndSplitBySpace = function(text) {
  return text.join(SPACE).split(SPACE);
};

const filterOptions = function(args) {
  const options = args.filter(arg => arg.startsWith(HYPHEN));
  if (options.length == 1) {
    return extractCombinedOptions(options);
  }
  if (options.length == 0) {
    return getDefaultOptions();
  }
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
  const separatedArgs = joinAndSplitBySpace(args);
  const filenames = filterFilenames(separatedArgs);
  const options = filterOptions(separatedArgs).map(option => {
    return mapOptions(option);
  });

  return { filenames, options };
};

module.exports = {
  parse
};
