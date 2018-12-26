const mapOptions = function(option) {
  let mappedOption = option.replace('-l', 'lineCount');
  mappedOption = mappedOption.replace('-w', 'wordCount');
  mappedOption = mappedOption.replace('-c', 'charCount');
  return mappedOption;
};

const joinBySpace = function(text) {
  return text.join(' ').split(' ');
};

const filterOptions = function(args) {
  return args.filter(x => x.startsWith('-'));
};

const filterFilenames = function(args) {
  return args.filter(x => !x.startsWith('-'));
};

const parse = function(args) {
  const seperatedArgs = joinBySpace(args);
  const filenames = filterFilenames(seperatedArgs);
  let options = filterOptions(seperatedArgs).map(x => {
    return mapOptions(x);
  });

  return { filenames, options };
};

module.exports = {
  parse
};
