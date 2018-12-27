const { TAB, EMPTYSTRING } = require('./constants.js');

const format = function(result, options) {
  const sortedOptions = sortOptions(options);
  const counts = sortedOptions.map(option => {
    return TAB + result[option];
  });

  return counts.join(EMPTYSTRING) + TAB + result.filename;
};

const formatMultipleFile = function(result, options) {
  if (result.length == 1) {
    return format(result[0], options);
  }
  result.push(result.reduce(sumCounts));
  const allCounts = result.map(counts => format(counts, options));
  return allCounts.join('\n');
};

const sumCounts = function(count1, count2) {
  return {
    lineCount: count1.lineCount + count2.lineCount,
    wordCount: count1.wordCount + count2.wordCount,
    charCount: count1.charCount + count2.charCount,
    filename: 'total'
  };
};

const sortOptions = function(options) {
  const sortedOptions = ['lineCount', 'wordCount', 'charCount'];
  return sortedOptions.filter(option => options.includes(option));
};

module.exports = {
  format,
  formatMultipleFile
};
