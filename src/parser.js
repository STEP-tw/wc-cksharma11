const SPACE = ' ';
const HYPHEN = '-';

const mapOptions = function(option) {
  let mappedOption = option.replace('-l', 'lineCount');
  mappedOption = mappedOption.replace('-w', 'wordCount');
  mappedOption = mappedOption.replace('-c', 'charCount');
  return mappedOption;
};

const joinAndSplitBySpace = function(text) {
  return text.join(SPACE).split(SPACE);
};

const filterOptions = function(args) {
  let options = args.filter(x => x.startsWith(HYPHEN));
  if (options.length == 1) {
    options = options[0].split('').slice(1);
    return options.map(x => HYPHEN + x);
  }
  return options;
};

const filterFilenames = function(args) {
  return args.filter(x => !x.startsWith(HYPHEN));
};

const parse = function(args) {
  const seperatedArgs = joinAndSplitBySpace(args);
  const filenames = filterFilenames(seperatedArgs);
  const options = filterOptions(seperatedArgs).map(x => {
    return mapOptions(x);
  });

  return { filenames, options };
};

module.exports = {
  parse
};
