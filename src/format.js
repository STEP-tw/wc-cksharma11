const TAB = '\t';

const format = function(result) {
  const { lineCount, wordCount, charCount, filename } = result;
  return ['', lineCount, wordCount, charCount, filename].join(TAB);
};

module.exports = {
  format,
  TAB
};
