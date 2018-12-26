const format = function(result) {
  const { lineCount, wordCount, charCount, filename } = result;
  return (
    '\t' + lineCount + '\t' + wordCount + '\t' + charCount + '\t' + filename
  );
};

module.exports = {
  format
};
