const { TAB, EMPTYSTRING } = require('./constants.js');

const format = function(result, options) {
  const sortedOptions = sortOptions(options);
  const counts = sortedOptions.map(option => {
    return TAB + result[option];
  });

  return counts.join(EMPTYSTRING) + TAB + result.filename;
};

const sortOptions = function(options) {
  const sortedOptions = ['lineCount', 'wordCount', 'charCount'];
  return sortedOptions.filter(option => options.includes(option));
};

module.exports = {
  format
};
