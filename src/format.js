const TAB = '\t';

const format = function(result) {
  const { lineCount, wordCount, charCount, filename } = result;
  return TAB + lineCount + TAB + wordCount + TAB + charCount + TAB + filename;
};

module.exports = {
  format
};
