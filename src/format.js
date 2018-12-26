const { TAB } = require('./constants.js');

const formatWithOneOption = function(result, [option]) {
  const count = result[option];
  return ['', count, result.filename].join(TAB);
};

const formatWithTwoOption = function(result, [firstOption, secondOption]) {
  const count1 = result[firstOption];
  const count2 = result[secondOption];
  return ['', count1, count2, result.filename].join(TAB);
};

const formatWithThreeOption = function(result, options) {
  const { lineCount, wordCount, charCount, filename } = result;
  return ['', lineCount, wordCount, charCount, filename].join(TAB);
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
