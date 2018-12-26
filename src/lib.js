const NEWLINE = '\n';
const EMPTYSTRING = '';

const getLineCount = function(content) {
  return content.split(NEWLINE).length - 1;
};

const getWordCount = function(content) {
  return content.trimRight().split(/[ \n]+/).length;
};

const getCharCount = function(content) {
  return content.split(EMPTYSTRING).length;
};

const wc = function(filename, fs) {
  const content = fs.readFileSync(filename, 'utf8');
  const lineCount = getLineCount(content);
  const wordCount = getWordCount(content);
  const charCount = getCharCount(content);

  return { lineCount, wordCount, charCount, filename: filename };
};

module.exports = {
  wc
};
