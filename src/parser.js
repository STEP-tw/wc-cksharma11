const { SPACE, HYPHEN, EMPTYSTRING } = require('./constants.js');

const mapOptions = function(option) {
  const longOptions = {
    '-l': 'lineCount',
    '-w': 'wordCount',
    '-c': 'charCount'
  };
  return longOptions[option];
};

const joinAndSplitBySpace = function(text) {
  return text.join(SPACE).split(SPACE);
};

const filterOptions = function(args) {
  let options = args.filter(x => x.startsWith(HYPHEN));
  if (options.length == 1) {
    options = options[0].split(EMPTYSTRING).slice(1);
    return options.map(x => HYPHEN + x);
  }
  return options;
};

const filterFilenames = function(args) {
  return args.filter(x => !x.startsWith(HYPHEN));
};

const parse = function(args) {
  const separatedArgs = joinAndSplitBySpace(args);
  const filenames = filterFilenames(separatedArgs);
  const options = filterOptions(separatedArgs).map(x => {
    return mapOptions(x);
  });

  return { filenames, options };
};

module.exports = {
  parse
};
