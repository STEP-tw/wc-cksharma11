const {
  TAB,
  NEWLINE,
  TOTAL,
  LINECOUNT,
  WORDCOUNT,
  CHARCOUNT
} = require('./constants.js');

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
  return allCounts.join(NEWLINE);
};

const sumCounts = function(fileOneDetails, fileTwoDetails) {
  return {
    lineCount: fileOneDetails.lineCount + fileTwoDetails.lineCount,
    wordCount: fileOneDetails.wordCount + fileTwoDetails.wordCount,
    charCount: fileOneDetails.charCount + fileTwoDetails.charCount,
    filename: TOTAL
  };
};

const getFormatter = function(files) {
  if (files.length == 1) {
    return singleFileFormatter;
  }
  return multipleFileFormatter;
};

const sortOptions = function(options) {
  const sortedOptions = [LINECOUNT, WORDCOUNT, CHARCOUNT];
  return sortedOptions.filter(option => options.includes(option));
};

module.exports = {
  getFormatter
};
