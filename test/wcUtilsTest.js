const assert = require('assert');
const { wc, formatWcResult } = require('../src/wcUtils.js');
const { LINECOUNT, WORDCOUNT, CHARCOUNT } = require('../src/constants');

const mockReader = function(expectedFiles) {
  return function(actualPath) {
    return expectedFiles[actualPath];
  };
};

describe('wc', () => {
  it('should give count of lines,word and char for single file', () => {
    const file = { numbersFile: '1\n2\n3\n4\n5\n' };
    const readFileSync = mockReader(file);
    const fs = { readFileSync: readFileSync };
    const expectedOutput = [
      {
        lineCount: 5,
        wordCount: 5,
        charCount: 10,
        filename: 'numbersFile'
      }
    ];
    const actualOutput = wc(['numbersFile'], fs);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give all counts for text file containing multiple words', () => {
    const file = { textFile: 'AA aa\nBB bb\nCC cc\nDD dd\n' };
    const readFileSync = mockReader(file);
    const fs = { readFileSync: readFileSync };
    const expectedOutput = [
      {
        lineCount: 4,
        wordCount: 8,
        charCount: 24,
        filename: 'textFile'
      }
    ];
    const actualOutput = wc(['textFile'], fs);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give count of lines,word and char for multiple files', () => {
    const files = {
      textFile: 'A\nB\nC\nD\n5\n',
      numberFile: '1\n2\n3\n4\n5\n'
    };
    const readFileSync = mockReader(files);
    const fs = { readFileSync: readFileSync };
    const expectedOutput = [
      { lineCount: 5, wordCount: 5, charCount: 10, filename: 'textFile' },
      { lineCount: 5, wordCount: 5, charCount: 10, filename: 'numberFile' }
    ];
    const actualOutput = wc(['textFile', 'numberFile'], fs);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe('formatWcResult', () => {
  const file = { numbersFile: '1\n2\n', textFile: 'A\nB\n' };
  const readFileSync = mockReader(file);
  const fs = { readFileSync: readFileSync };
  describe('default options', () => {
    it('should return line,  word and character count with filename for single file', () => {
      const filenames = ['numbersFile'];
      const options = [LINECOUNT, WORDCOUNT, CHARCOUNT];
      const actualOutput = formatWcResult({ filenames, options }, fs);
      const expectedOutput = '\t2\t2\t4\tnumbersFile';

      assert.equal(actualOutput, expectedOutput);
    });
  });
});
