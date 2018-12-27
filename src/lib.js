const { NEWLINE, EMPTYSTRING } = require('./constants.js');

const getLineCount = function(content) {
  return content.split(NEWLINE).length - 1;
};

const getWordCount = function(content) {
  return content.trimRight().split(/[ \n]+/).length;
};

const getCharCount = function(content) {
  return content.split(EMPTYSTRING).length;
};

const getFileContent = function(filenames, fs) {
  return filenames.map(filename => [
    fs.readFileSync(filename, 'utf8'),
    filename
  ]);
};

const wc = function(filenames, fs) {
  const content = getFileContent(filenames, fs);
  return content.map(([content, filename]) => {
    const lineCount = getLineCount(content);
    const wordCount = getWordCount(content);
    const charCount = getCharCount(content);

    return { lineCount, wordCount, charCount, filename: filename };
  });
};

module.exports = {
  wc
};
