const { TAB, EMPTYSTRING } = require('./constants.js');

const format = function(result, options) {
  const sortedOptions = sortOptions(options);
  const counts = sortedOptions.map(option => result[option]);
  return TAB + counts.join(TAB) + TAB + result.filename;
};

const singleFileFormatter = function(result, options) {
  return format(result[0], options);
};

const multipleFileFormatter = function(result, options) {
  const sumOfCounts = result.reduce(sumCounts);
  const allCounts = result.map(counts => format(counts, options));
  allCounts.push(format(sumOfCounts, options));
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

const getFormatter = function(files) {
  if (files.length == 1) {
    return singleFileFormatter;
  }
  return multipleFileFormatter;
};

const sortOptions = function(options) {
  const sortedOptions = ['lineCount', 'wordCount', 'charCount'];
  return sortedOptions.filter(option => options.includes(option));
};

module.exports = {
  getFormatter
};
