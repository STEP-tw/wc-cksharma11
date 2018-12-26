const { TAB } = require('./constants.js');

const formatWithOneOption = function(result, [option]) {
  const count = result[option];
  return ['', count, result.filename].join(TAB);
};

const formatWithTwoOption = function(result, options) {
  const sortedOptions = sortOptions(options);
  const count1 = result[sortedOptions[0]];
  const count2 = result[sortedOptions[1]];
  return ['', count1, count2, result.filename].join(TAB);
};

const formatWithThreeOption = function(result, options) {
  const { lineCount, wordCount, charCount, filename } = result;
  return ['', lineCount, wordCount, charCount, filename].join(TAB);
};

const sortOptions = function(options) {
  const sortedOptions = ['lineCount', 'wordCount', 'charCount'];
  return sortedOptions.filter(option => options.includes(option));
};

const getFormatter = function(options) {
  if (options.length == 1) {
    return formatWithOneOption;
  }
  if (options.length == 2) {
    return formatWithTwoOption;
  }
  return formatWithThreeOption;
};

module.exports = {
  getFormatter
};
