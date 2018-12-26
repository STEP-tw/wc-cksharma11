const assert = require('assert');
const { wc } = require('../src/lib.js');

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
    const expectedOutput = {
      lineCount: 5,
      wordCount: 5,
      charCount: 10,
      filename: 'numbersFile'
    };
    const actualOutput = wc('numbersFile', fs);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
